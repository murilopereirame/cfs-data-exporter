import { useState } from "react";

const Concept = () => {
  const [conceptTitle, setConceptTitle] = useState<string>("");
  const [conceptBody, setConceptBody] = useState<string>("");
  const [conceptImage, setConceptImage] = useState<string>("");

  return (
    <div className="row">
      <div className="d-flex flex-column">
        <h4>Conceito</h4>
        <div className="row mt-1">
          <div className="d-flex flex-column">
            <label htmlFor="conceptTitle">Título do Conceito</label>
            <input
              value={conceptTitle}
              onChange={(e) => setConceptTitle(e.target.value)}
              type="text"
              name="conceptTitle"
              id="conceptTitle"
            />
          </div>
        </div>
        <div className="row mt-3">
          <div className="d-flex flex-column">
            <label htmlFor="conceptBody">Corpo do Conceito</label>
            <textarea
              value={conceptBody}
              onChange={(e) => setConceptBody(e.target.value)}
              name="conceptBody"
              id="conceptBody"
            ></textarea>
          </div>
        </div>
        <div className="row mt-3">
          <div className="d-flex flex-column">
            <label htmlFor="conceptImage">Imagem do Conceito</label>
            <input
              value={conceptImage}
              onChange={(e) => setConceptImage(e.target.value)}
              name="conceptImage"
              id="conceptImage"
              type="text"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Concept;
