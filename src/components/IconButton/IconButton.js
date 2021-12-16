import React from 'react';
import './IconButton.css';

const IconButton = ({imageURL, altContent, clickEvent}) => {
  return (
    <button type="button" onClick={clickEvent} className="icon-button">
      <img alt={altContent} src={imageURL} />
    </button>
  )
}

export default IconButton;
