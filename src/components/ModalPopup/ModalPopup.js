import React from 'react';
import { createPortal } from 'react-dom';
import './ModalPopup.css';
import IconButton from '../IconButton/IconButton';
import closeIcon from '../../assets/icons/closeIcon.svg';

const ModalPopup = ({isShowing, hide, children}) => {
  const modalContainer = isShowing && (
    <div className="modal-background">
      <div className="modal-wrapper">
        <section>
          <header className="modal-header">
            <div className="closeIcon-wrapper">
            <IconButton imageURL={closeIcon} altContent="closeIcon" clickEvent={hide} />
            </div>
          </header>
          {children}
        </section>
      </div>
    </div>
  );
  return (
    <>
      {createPortal(modalContainer, document.body)}
    </>
  );
};

export default ModalPopup;
