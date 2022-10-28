import React, { useCallback, useEffect, useState } from "react";
import { ReactSortable } from "react-sortablejs";
import Section, { ISection } from "../../components/Section";
import { Button } from "react-bootstrap";
import axios from "axios";

interface IPages {
  id: number;
  title: string;
}

const Manager = () => {
  const [page, setPage] = useState<number>(-1);
  const [pageList, setPageList] = useState<IPages[]>([]);
  const [operation, setOperation] = useState<string>("exportar");
  const [file, setFile] = useState<FileList | null>();

  useEffect(() => {
    loadPages();
  }, []);

  useEffect(() => {
    console.log(operation);
  }, [operation]);

  const loadPages = async () => {
    const { data } = await axios.get(
      `${window["wpApiSettings"].root}cfse/v1/pages`
    );

    setPageList(data);
  };

  const handleSubmit = useCallback(async () => {
    if (page === -1) return alert("Selectione uma página");
    else if (operation === "importar" && file === null)
      return alert("Selectione um arquivo");
    else if (file && file[0].type !== "application/json")
      return alert("Selecione um arquivo válido");

    const { data } = await axios.get(
      `${window["wpApiSettings"].root}cfse/v1/export/${page}`
    );

    if (operation === "exportar") exportFile(data);
    else if (operation === "importar") importFile();
  }, [operation, file, page]);

  const importFile = async () => {
    if (!file) return;

    const fileReader = new FileReader();
    fileReader.readAsText(file[0], "UTF-8");

    fileReader.onload = async (event) => {
      const jsonInfo = JSON.parse(event.target?.result?.toString() || "[]");
      const { data } = await axios.post(
        `${window["wpApiSettings"].root}cfse/v1/import`,
        {
          pageId: page,
          fields: jsonInfo,
        },
        {
          headers: {
            "X-WP-Nonce": window["wpApiSettings"].nonce,
          },
        }
      );

      alert("Dados importados com sucesso!");
    };
  };

  const exportFile = async (data: any) => {
    const fileName = `cfs_page_${data.pageId}_export`;
    const json = JSON.stringify(data, null, 2);
    const blob = new Blob([json], { type: "application/json" });
    const href = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = href;
    link.download = fileName + ".json";
    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
    URL.revokeObjectURL(href);
  };

  return (
    <div className="cfs-exporter col-12">
      <h1>Gerenciar Dados</h1>
      <div className="col-6">
        <div className="row">
          <div className="d-flex flex-column">
            <label htmlFor="pageList">Selecione a Página</label>
            <select
              id="pageList"
              name="pageList"
              value={page}
              onChange={(e) => setPage(Number.parseInt(e.target.value))}
            >
              <option value="-1">------</option>
              {pageList.map((elem) => {
                return (
                  <option value={elem.id} key={elem.id}>
                    {elem.title}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
        <div className="row mt-2">
          <div className="d-flex flex-column">
            <label htmlFor="operation">Selecione uma operação</label>
            <select
              id="operation"
              name="operation"
              value={operation}
              onChange={(e) => setOperation(e.target.value)}
            >
              <option value="exportar">Exportar</option>
              <option value="importar">Importar</option>
            </select>
          </div>
        </div>
        {operation === "importar" && (
          <div className="row mt-2">
            <div className="d-flex flex-column">
              <label htmlFor="fileSelect">Selecione o arquivo</label>
              <input
                onChange={(e) => setFile(e.target.files)}
                type="file"
                id="fileSelect"
                name="fileSelect"
              />
            </div>
          </div>
        )}
        <div className="row mt-2">
          <div className="d-flex flex-row">
            <Button
              onClick={() => {
                handleSubmit();
              }}
              variant="dark"
            >
              Executar
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Manager;
