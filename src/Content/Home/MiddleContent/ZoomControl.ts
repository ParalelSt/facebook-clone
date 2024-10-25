import { useState } from "react";

const useZoomControl = () => {
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const [zoomDisabled, setZoomDisabled] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const zoomIn = () => {
    if (zoomLevel < 2) {
      setZoomLevel(zoomLevel + 0.25);
      return false;
    }

    setZoomDisabled(true);
    return true;
  };

  const zoomOut = () => {
    if (zoomLevel > 1) {
      setZoomLevel(zoomLevel - 0.25);
      return false;
    }

    setZoomDisabled(true);
    return true;
  };

  const toggleFullScreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  return [
    zoomIn,
    zoomOut,
    zoomLevel,
    toggleFullScreen,
    zoomDisabled,
    isFullscreen,
  ] as const;
};

export default useZoomControl;
