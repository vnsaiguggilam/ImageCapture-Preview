import React from "react";
import PropTypes from "prop-types";

export const ImagePreview = ({ dataUri, isFullscreen }) => {
  let classNameFullscreen = isFullscreen ? "demo-image-preview-fullscreen" : "";

  return (
    <div className={"demo-image-preview " + classNameFullscreen}>
        <p>Your Captured Image</p>
      <img src={dataUri} width="50%" height="50%"/>
    </div>
  );
};

ImagePreview.propTypes = {
  dataUri: PropTypes.string,
  isFullscreen: PropTypes.bool
};

export default ImagePreview;
