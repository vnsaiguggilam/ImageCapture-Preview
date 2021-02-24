import React, { useState } from "react";
import Camera from "react-html5-camera-photo";
import "react-html5-camera-photo/build/css/index.css";
import ImagePreview from "./ImagePreview";
import Smile from './smile.svg';
import Smiley from './smile-1.svg';

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
          <>
            <span>Your Captured Image</span><span> <img src={Smiley} alt="" height="20px"/> </span> 
            <ImagePreview dataUri={dataUri} isFullscreen={isFullscreen} />
          </>  
      ) : (
        <> 
            <span>Smile</span><span> <img src={Smile} alt="" height="20px"/> </span> 
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
