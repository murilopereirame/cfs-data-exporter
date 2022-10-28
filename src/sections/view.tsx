import { useState } from "react";

const View = () => {
  const [viewTitle, setViewTitle] = useState<string>("");
  const [viewBody, setViewBody] = useState<string>("");
  const [viewImage, setViewImage] = useState<string>("");

  return (
    <div className="row">
      <div className="d-flex flex-column">
        <h4>Vista</h4>
        <div className="row mt-1">
          <div className="d-flex flex-column">
            <label htmlFor="viewTitle">Título da Vista</label>
            <input
              value={viewTitle}
              onChange={(e) => setViewTitle(e.target.value)}
              type="text"
              name="viewTitle"
              id="viewTitle"
            />
          </div>
        </div>
        <div className="row mt-3">
          <div className="d-flex flex-column">
            <label htmlFor="viewBody">Corpo da Vista</label>
            <textarea
              value={viewBody}
              onChange={(e) => setViewBody(e.target.value)}
              name="viewBody"
              id="viewBody"
            ></textarea>
          </div>
        </div>
        <div className="row mt-3">
          <div className="d-flex flex-column">
            <label htmlFor="viewImage">Imagem da Vista</label>
            <input
              value={viewImage}
              onChange={(e) => setViewImage(e.target.value)}
              name="viewImage"
              id="viewImage"
              type="text"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default View;
