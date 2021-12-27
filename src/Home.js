import React from "react";
import {title, content} from './Notice';
import Header from 'sections/Header/Header';
import SeatDisplay from 'sections/SeatDisplay/SeatDisplay';

const Home = () => {
  return (
    <>
      <Header noticeTitle={title} noticeContent={content} />
      <SeatDisplay />
    </>
  );
}

export default Home;
