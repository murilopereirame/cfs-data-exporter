import { useState } from "react";

const Video = () => {
  const [videoURL, setVideoURL] = useState<string>("");
  const [videoBackground, setVideoBackground] = useState<string>("");

  return (
    <div className="row">
      <div className="d-flex flex-column">
        <h4>Vídeo em Destaque</h4>
        <div className="row mt-1">
          <div className="d-flex flex-column">
            <label htmlFor="videoURL">URL do Vídeo</label>
            <input
              value={videoURL}
              onChange={(e) => setVideoURL(e.target.value)}
              type="text"
              name="videoURL"
              id="videoURL"
            />
          </div>
        </div>
        <div className="row mt-3">
          <div className="d-flex flex-column">
            <label htmlFor="videoBackground">Background do Vídeo</label>
            <input
              value={videoBackground}
              onChange={(e) => setVideoBackground(e.target.value)}
              type="text"
              name="videoBackground"
              id="videoBackground"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;
