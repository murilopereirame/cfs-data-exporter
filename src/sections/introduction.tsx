import { useState } from "react";

const Introduction = () => {
  const [introTitle, setIntroTitle] = useState<string>("");
  const [introContent, setIntroContent] = useState<string>("");
  const [introCTAText, setIntroCTAText] = useState<string>("");
  const [introCTAAction, setIntroCTAAction] = useState<string>("");

  return (
    <div className="row">
      <div className="d-flex flex-column">
        <h4>Introdução</h4>
        <div className="row mt-1">
          <div className="d-flex flex-column">
            <label htmlFor="introTitle">Título da Introdução</label>
            <input
              value={introTitle}
              onChange={(e) => setIntroTitle(e.target.value)}
              type="text"
              name="introTitle"
              id="introTitle"
            />
          </div>
        </div>
        <div className="row mt-3">
          <div className="d-flex flex-column">
            <label htmlFor="introContent">Texto de Introdução</label>
            <textarea
              value={introContent}
              onChange={(e) => setIntroContent(e.target.value)}
              name="introContent"
              id="introContent"
            ></textarea>
          </div>
        </div>
        <div className="row mt-3">
          <div className="d-flex flex-column">
            <label htmlFor="introCTAText">Texto CTA</label>
            <input
              value={introCTAText}
              onChange={(e) => setIntroCTAText(e.target.value)}
              type="text"
              name="introCTAText"
              id="introCTAText"
            />
          </div>
        </div>
        <div className="row mt-3">
          <div className="d-flex flex-column">
            <label htmlFor="introCTAAction">Ação do Botão</label>
            <input
              value={introCTAAction}
              onChange={(e) => setIntroCTAAction(e.target.value)}
              type="text"
              name="introCTAAction"
              id="introCTAAction"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
