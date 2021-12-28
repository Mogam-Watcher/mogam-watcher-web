import React from 'react';
import './BaseButton.css';

const BaseButton = ({buttonType, title, clickEvent}) => {
  const styleVariant = 'baseButton';

  return (
    <button type={buttonType} className={styleVariant} onClick={clickEvent}>
      {title}
    </button>
  );
}

export default BaseButton;
