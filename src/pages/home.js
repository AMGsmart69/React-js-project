import React from "react";
import Header from '../comp/header'
import Footer from '../comp/footer'
import Maincontent from '../comp/maincontent'

const Home = () => {
  return (
    <>
      <Header />

      <Maincontent content="Home Page"/>

      <Footer />
    </>
  );
};

export default Home;
