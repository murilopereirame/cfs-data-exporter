import { FC, useCallback } from "react";
import { MdClose } from "react-icons/md";

export interface ISection {
  id: number;
  name: string;
  order?: number;
}

const Section = ({ id, name, order, onRemove }) => {
  const getHumanLabel = useCallback((optionId: string) => {
    switch (optionId) {
      case "home":
        return "Home";
      case "introducao":
        return "Introdução";
      case "video-destaque":
        return "Vídeo Destaque";
      case "conceito":
        return "Conceito";
      case "localizacao":
        return "Localização";
      case "galeria-arquitetos":
        return "Galeria de Arquitetos";
      case "galeria-plantas":
        return "Galeria de Plantas";
      case "galeria-implantacao":
        return "Galeria de Implantação";
      case "galeria-video":
        return "Galeria de Vídeo";
      case "galeria-imagens":
        return "Galeria de Imagens";
      case "galeria-diferenciais":
        return "Galeria de Diferenciais";
      case "rodape":
        return "Rodapé";
    }
  }, []);

  return (
    <>
      <div className="row d-flex">
        <div className="col-11">
          <span>
            {order} - {getHumanLabel(name)}
          </span>
        </div>
        <div className="col-1">
          <MdClose style={{ cursor: "pointer" }} onClick={() => onRemove(id)} />
        </div>
      </div>
    </>
  );
};

export default Section;
