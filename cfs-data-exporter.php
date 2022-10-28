<?php

/**
 * @package CFS Data Exporter
 * @author Murilo Pereira
 * @copyright 2022 Murilo Pereira
 * @license GPL-2.0-or-later 
 * 
 * Plugin Name: CFS Data Exporter
 * Plugin URI: https://murilopereira.dev.br
 * Description: Simple plugin to export and import CFS Data
 * Version: 1.0
 * Author: Murilo Pereira
 * Author URI: https://murilopereira.dev.br
 */

add_action('admin_menu', 'cfs_exporter_menu_setup');


function cfs_exporter_menu_setup()
{
  add_menu_page('CFS Data Exporter', 'CFS Export', 'manage_options', 'cfs-export', 'csf_admin', 'dashicons-admin-post', '2.1');
}

function csf_admin()
{

  require_once plugin_dir_path(__FILE__) . 'templates/app.php';
}

add_action('admin_enqueue_scripts', 'cfs_data_enqueue_scripts');

function cfs_data_enqueue_scripts()
{
  wp_localize_script('wp-api', 'wpApiSettings', array('root' => esc_url_raw(rest_url()), 'nonce' => wp_create_nonce('wp_rest')));
  wp_enqueue_script('wp-api');
  wp_enqueue_style('cfs-exporter-style', plugin_dir_url(__FILE__) . 'build/index.css');
  wp_enqueue_script('cfs-exporter-script', plugin_dir_url(__FILE__) . 'build/index.js', array('wp-element'), '1.0.0', true);
}

add_action('rest_api_init', function () {
  register_rest_route('cfse/v1', '/pages', array(
    'methods' => 'GET',
    'callback' => 'list_pages',
  ));

  register_rest_route('cfse/v1', '/export/(?P<id>\d+)', array(
    'methods' => 'GET',
    'callback' => 'get_fields',
  ));

  register_rest_route('cfse/v1', '/import', array(
    'methods' => 'POST',
    'callback' => 'update_fields',
    'permission_callback' => function () {
      return current_user_can('edit_others_posts');
    }
  ));
});

function update_fields($data)
{
  $jsonInfo = (array)$data->get_json_params();
  $pageID = $jsonInfo["pageId"];
  $fields = $jsonInfo['fields']['fields'];

  $post_data = array('ID' => $pageID); // the ID is required
  $result = CFS()->save($fields, $post_data);

  return new WP_REST_Response($result, 200);
}

function get_fields($data)
{
  $pageID = $data['id'] * 1;
  $fields = CFS()->find_fields(array("post_id" => $pageID));

  $responseObject = [
    "pageId" => $pageID,
    "fields" => []
  ];

  foreach ($fields as $field) {
    $name = $field["name"];
    $value =
      CFS()->get($field["name"], $pageID);
    $responseObject["fields"][$name] = $value;
  }

  return new WP_REST_Response($responseObject, 200);
}

function list_pages()
{
  $args = array(
    'sort_order' => 'asc',
    'sort_column' => 'post_title',
    'post_type' => 'page',
  );

  $rawPages = get_pages($args); // get all pages based on supplied args
  $pages = [];
  foreach ($rawPages as $k => $page) {
    $pageData = [];
    $pageData["id"] = $page->ID;
    $pageData["title"] = $page->post_title;
    array_push($pages, $pageData);
  }

  return new WP_REST_Response($pages, 200);
}