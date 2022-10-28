import { useState } from "react";

const Home = () => {
  const [formTitle, setFormTitle] = useState<string>("");
  const [formButtonText, setFormButtonText] = useState<string>("");
  const [formAction, setFormAction] = useState<string>("");
  const [acceptText, setAcceptText] = useState<string>("");
  const [content, setContent] = useState<string>("");

  return (
    <div className="row">
      <div className="d-flex flex-column">
        <h4>Home</h4>
        <div className="row mt-1">
          <div className="d-flex flex-column">
            <label htmlFor="formTitle">Título do Formulário</label>
            <input
              value={formTitle}
              onChange={(e) => setFormTitle(e.target.value)}
              type="text"
              name="formTitle"
              id="formTitle"
            />
          </div>
        </div>
        <div className="row mt-3">
          <div className="d-flex flex-column">
            <label htmlFor="formButtonText">Texto do Botão</label>
            <input
              value={formButtonText}
              onChange={(e) => setFormButtonText(e.target.value)}
              type="text"
              name="formButtonText"
              id="formButtonText"
            />
          </div>
        </div>
        <div className="row mt-3">
          <div className="d-flex flex-column">
            <label htmlFor="acceptText">Texto do Aceite</label>
            <input
              value={acceptText}
              onChange={(e) => setAcceptText(e.target.value)}
              type="text"
              name="acceptText"
              id="acceptText"
            />
          </div>
        </div>
        <div className="row mt-3">
          <div className="d-flex flex-column">
            <label htmlFor="formAction">Ação do Formulário</label>
            <input
              value={formAction}
              onChange={(e) => setFormAction(e.target.value)}
              type="text"
              name="formAction"
              id="formAction"
            />
          </div>
        </div>
        <div className="row mt-3">
          <div className="d-flex flex-column">
            <label htmlFor="homeContent">Conteúdo da Home</label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              name="homeContent"
              id="homeContent"
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
