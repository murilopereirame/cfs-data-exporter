import { useState } from "react";
import { Button } from "react-bootstrap";
import { ReactSortable } from "react-sortablejs";
import ArchitectPreview, {
  IArchitectPreview,
} from "../components/ArchitectPreview";

const ArchitectGallery = () => {
  const [architectSectionTitle, setArchitectSectionTitle] = useState("");
  const [architectName, setArchitectName] = useState("");
  const [architectBody, setArchitectBody] = useState("");
  const [architectImage, setArchitectImage] = useState("");
  const [architectList, setArchitectList] = useState<IArchitectPreview[]>([]);
  const [lastId, setLastId] = useState<number>(0);

  const handleAddArchitect = () => {
    setArchitectList((old) => [
      ...old,
      {
        id: lastId,
        name: architectName,
        image: architectImage,
        body: architectBody,
      },
    ]);
    setArchitectName("");
    setArchitectBody("");
    setArchitectImage("");
    setLastId((old) => old + 1);
  };

  const handleRemoveArchitect = (id: number) => {
    setArchitectList((old) => old.filter((e) => e.id !== id));
  };

  return (
    <div className="row">
      <div className="d-flex flex-column col-6">
        <h4>Galeria de Arquitetos</h4>
        <div className="row mt-1">
          <div className="d-flex flex-column">
            <label htmlFor="architectSectionTitle">Título da Galeria</label>
            <input
              value={architectSectionTitle}
              onChange={(e) => setArchitectSectionTitle(e.target.value)}
              type="text"
              name="architectSectionTitle"
              id="architectSectionTitle"
            />
          </div>
        </div>
        <div className="row mt-3">
          <div className="d-flex flex-column">
            <label htmlFor="architectName">Nome do(a) Arquiteto(a)</label>
            <input
              value={architectName}
              onChange={(e) => setArchitectName(e.target.value)}
              name="architectName"
              id="architectName"
              type="text"
            />
          </div>
        </div>
        <div className="row mt-3">
          <div className="d-flex flex-column">
            <label htmlFor="architectBody">Descrição do(a) Arquiteto(a)</label>
            <textarea
              value={architectBody}
              onChange={(e) => setArchitectBody(e.target.value)}
              name="architectBody"
              id="architectBody"
            ></textarea>
          </div>
        </div>
        <div className="row mt-3">
          <div className="d-flex flex-column">
            <label htmlFor="architectImage">Imagem do(a) Arquiteto(a)</label>
            <input
              value={architectImage}
              onChange={(e) => setArchitectImage(e.target.value)}
              name="architectImage"
              id="architectImage"
              type="text"
            />
          </div>
        </div>
        <div className="row mt-3">
          <div className="d-flex flex-row-reverse">
            <Button
              disabled={
                architectName === "" ||
                architectBody === "" ||
                architectImage === ""
              }
              className="ms-3"
              variant="primary"
              size="sm"
              onClick={handleAddArchitect}
            >
              Adicionar
            </Button>
          </div>
        </div>
      </div>
      <div className="d-flex flex-column">
        <div className="row mt-3">
          <div className="d-flex flex-column">
            <p className="mb-0">Arquitetos na Galeria</p>
            <p className="mb-0">Dica: Arraste para reordenar</p>
            <ReactSortable
              style={{
                display: "flex",
                flexWrap: "wrap",
                marginTop: 10,
              }}
              list={architectList}
              setList={setArchitectList}
              ghostClass="active"
            >
              {architectList.map((item) => (
                <ArchitectPreview
                  id={item.id}
                  name={item.name}
                  image={item.image}
                  body={item.body}
                  onRemove={handleRemoveArchitect}
                />
              ))}
            </ReactSortable>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArchitectGallery;
