import React from "react";
import './UpdateButton.css';
import IconButton from '../IconButton/IconButton';
import updateArrows from '../../assets/icons/updateArrows.svg';

const UpdateButton = () => {

  const refreshPage = () => window.location.reload(false);
  const lastUpdate = document.lastModified;
  
  return (
    <div>
      <IconButton imageURL={updateArrows} altContent="updateButton" clickEvent={refreshPage} />
      <span>마지막 업데이트 : {lastUpdate}</span>

    </div>
  );
}

export default UpdateButton;
