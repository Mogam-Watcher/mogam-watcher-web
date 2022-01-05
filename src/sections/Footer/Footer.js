import React, { useState } from "react";
import './Footer.css';

const Footer = ({year, nameList}) => {
  const printName = (name) => {
    if(nameList.indexOf(name)===nameList.length-1){
      return (
        <>
          {name}
        </>
      );
    }
    else{
      return (
        <>
          {name},
        </>
      )
    }
    
};

  return (
    <div className="footer-wrapper">
      ⓒ {year}. {nameList.map(printName)}.
    </div>
  );
};

export default Footer;
