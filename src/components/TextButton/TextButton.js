import React from 'react';
import './TextButton.css';

const TextButton = ({buttonType, title, clickEvent}) => {
  const styleVariant = 'textButton';

  return (
    <button type={buttonType} className={styleVariant} onClick={clickEvent}>
      {title}
    </button>
  );
}

export default TextButton;
