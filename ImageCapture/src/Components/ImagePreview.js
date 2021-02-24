import React from "react";
import PropTypes from "prop-types";

export const ImagePreview = ({ dataUri, isFullscreen }) => {
  let classNameFullscreen = isFullscreen ? "demo-image-preview-fullscreen" : "";
  const refreshPage= () => {
    window.location.reload(false);
  }
  return (
    <div className={"demo-image-preview " + classNameFullscreen}>
        <img src={dataUri} alt="" width="50%" height="50%" />
        <br />
        <button onClick={refreshPage}>
          Retake
        </button>
    </div>
  );
};

ImagePreview.propTypes = {
  dataUri: PropTypes.string,
  isFullscreen: PropTypes.bool
};

export default ImagePreview;
