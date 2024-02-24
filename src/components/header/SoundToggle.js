import React, { useState } from "react";
import { faVolumeXmark, faVolumeLow } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SoundToggle = () => {
  const [isSoundOn, setIsSoundOn] = useState(false);

  const renderSoundOnButton = (
    <button
      onClick={() => setIsSoundOn((prev) => !prev)}
      className="flex items-center justify-center w-8 text-xs text-gray-500 bg-white rounded-md ">
      <FontAwesomeIcon icon={faVolumeXmark} />
    </button>
  );

  const renderSoundOffButton = (
    <button
      onClick={() => setIsSoundOn((prev) => !prev)}
      className="flex items-center justify-center w-8 text-xs text-blue-500 bg-white rounded-md ">
      <FontAwesomeIcon icon={faVolumeLow} />
    </button>
  );

  return isSoundOn ? renderSoundOnButton : renderSoundOffButton;
};

export default SoundToggle;
