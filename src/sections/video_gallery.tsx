import { useCallback, useState } from "react";
import { Button } from "react-bootstrap";
import { ReactSortable } from "react-sortablejs";
import VideoPreview, { IVideoPreview } from "../components/VideoPreview";

const VideoGallery = () => {
  const [videoGalleryURL, setVideoGalleryURL] = useState<string>("");
  const [videoList, setVideoList] = useState<IVideoPreview[]>([]);
  const [lastId, setLastId] = useState<number>(0);

  const addVideo = useCallback(() => {
    setVideoList((old) => [...old, { id: lastId, url: videoGalleryURL }]);
    setVideoGalleryURL("");

    setLastId((old) => old + 1);
  }, [lastId, videoGalleryURL]);

  const removeVideo = useCallback((sectionId: number) => {
    setVideoList((old) =>
      old.filter((value) => {
        return value.id !== sectionId;
      })
    );
  }, []);

  return (
    <div className="row mt-3 d-flex flex-column">
      <div className="row mt-3">
        <div className="d-flex flex-column">
          <h4>Galeria de Vídeos</h4>
          <div className="col-12 d-flex flex-column">
            <label htmlFor="videoGalleryURL">URL do Vídeo</label>
            <div className="d-flex flex-row">
              <input
                value={videoGalleryURL}
                onChange={(e) => setVideoGalleryURL(e.target.value)}
                type="text"
                name="videoGalleryURL"
                id="videoGalleryURL"
              />
              <Button
                disabled={videoGalleryURL === ""}
                className="ms-3"
                variant="primary"
                size="sm"
                onClick={addVideo}
              >
                Adicionar
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-3">
        <div className="d-flex flex-column">
          <p className="mb-0">Vídeos na Galeria</p>
          <p className="mb-0">Dica: Arraste para reordenar</p>
          <ReactSortable
            style={{
              display: "flex",
              flexWrap: "wrap",
            }}
            list={videoList}
            setList={setVideoList}
            ghostClass="active"
          >
            {videoList.map((item, index) => (
              <VideoPreview
                url={item.url}
                id={item.id}
                onRemove={(id: number) => removeVideo(id)}
              />
            ))}
          </ReactSortable>
        </div>
      </div>
    </div>
  );
};

export default VideoGallery;
