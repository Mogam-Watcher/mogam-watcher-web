import React from "react";
import "./IconButton.css";

const IconButton = ({ imageURL, altContent, onClickToDo, iconClassName }) => {
  return (
    <button type="iconButton" onClick={onClickToDo} className="icon-button">
      <img alt={altContent} src={imageURL} className={iconClassName} />
    </button>
  )
}

export default IconButton;
