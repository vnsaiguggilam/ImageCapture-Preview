import React, { useState } from "react";
import Camera from "react-html5-camera-photo";
import "react-html5-camera-photo/build/css/index.css";

import ImagePreview from "./ImagePreview";

function Main(props) {
  const [dataUri, setDataUri] = useState("");

  function handleTakePhotoAnimationDone(dataUri) {
    console.log("takePhoto", dataUri);
    setDataUri(dataUri);
  }

  const isFullscreen = false;
  return (
    <div>
      {dataUri ? (
        <ImagePreview dataUri={dataUri} isFullscreen={isFullscreen} />
      ) : (
        <> 
            <p>Smile (: </p> 
            <Camera
            onTakePhotoAnimationDone={handleTakePhotoAnimationDone}
            isFullscreen={isFullscreen}
            />
        </>
      )}
    </div>
  );
}

export default Main;
