import { MdClose } from "react-icons/md";

export interface IArchitectPreview {
  id: number;
  name: string;
  body: string;
  image: string;
}

export interface IArchitectPreviewProps extends IArchitectPreview {
  onRemove: (id: number) => void;
}

const ArchitectPreview: React.FC<IArchitectPreviewProps> = ({
  id,
  name,
  body,
  image,
  onRemove,
}) => {
  return (
    <div className="architect-preview">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>{body}</p>
      <MdClose
        className="close"
        color="black"
        style={{ cursor: "pointer" }}
        onClick={() => onRemove(id)}
      />
    </div>
  );
};

export default ArchitectPreview;
