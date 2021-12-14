import React from "react";
import "./IconButton.css";

const IconButton = ({ imageURL, onClickToDo, iconClassName }) => {
  return (
    <button type="iconButton" onClick={onClickToDo} className="icon-button">
      <img alt="icon" src={imageURL} className={iconClassName} />
    </button>
  )
}

export default IconButton;
