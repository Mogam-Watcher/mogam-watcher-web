import React, { useState } from "react";
import './Header.css';
import IconButton from '../../components/IconButton/IconButton';
import useModal from '../../components/ModalPopup/useModal'
import ModalPopup from '../../components/ModalPopup/ModalPopup';
import mogamIcon from '../../assets/icons/mogamIcon.svg';
import infoIcon from '../../assets/icons/infoIcon.svg';

const Header = ({noticeTitle, noticeContent}) => {
  const {isShowing, toggle} = useModal();

  return (
  <div className="header-wrapper">
    <div className="mogamLogo-wrapper">
      <img className="mogamLogo" src={mogamIcon} />
      <span className="mogamLogo-title">Mogam</span>
    </div>
    <div className="infoIcon-wrapper">
    <IconButton imageURL={infoIcon} altContent="infoIcon" clickEvent={toggle} />
    <ModalPopup isShowing={isShowing} hide={toggle} >
      <section className="notice-wrapper">
        <h1 className="notice-title">{noticeTitle}</h1>
        <p className="notice-content">
        {noticeContent}
        </p>
      </section>
    </ModalPopup>
    </div>
  </div>
  );
};

export default Header;
