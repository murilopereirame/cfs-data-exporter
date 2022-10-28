import { MdClose } from "react-icons/md";

export interface IVideoPreview {
  id: number;
  url: string;
}

const VideoPreview = ({ id, url, onRemove }) => {
  const _getVideoIdFromUrl = (value: string) => {
    var regEx =
      "^(?:https?:)?//[^/]*(?:youtube(?:-nocookie)?.com|youtu.be).*[=/]([-\\w]{11})(?:\\?|=|&|$)";
    var matches = value.match(regEx);
    if (matches) {
      return matches[1];
    }
    return false;
  };

  return (
    <div className="video-preview my-2 me-2">
      <img
        width={160}
        height={120}
        src={`https://img.youtube.com/vi/${_getVideoIdFromUrl(
          url
        )}/hqdefault.jpg`}
      />
      <MdClose
        className="close"
        color="white"
        style={{ cursor: "pointer" }}
        onClick={() => onRemove(id)}
      />
    </div>
  );
};

export default VideoPreview;
