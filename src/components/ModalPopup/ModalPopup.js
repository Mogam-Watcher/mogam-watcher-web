import React from 'react';
import { createPortal } from 'react-dom'
import './ModalPopup.css';

const ModalPopup = ({ isShowing, hide, children }) => {
  const modalContainer = isShowing && (
      <div className="modal-background">
        <div className="modal-wrapper" aria-modal aria-hidden role="dialog" >
          <div className="modal">
            <div className="modal-header">
              <button className="modal-close-button" type="button" onClick={hide}>
                <span>&times;</span>
              </button>
            </div>
            {children}
          </div>
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
