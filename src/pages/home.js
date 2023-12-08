import React from "react";
import Header from '../comp/header'
import Footer from '../comp/footer'
import Maincontent from '../comp/maincontent'

const Home = () => {
  return (
    <>
      <Header />

      <Maincontent content="Home" designer="A.M.G" />

      <Footer />
    </>
  );
};

export default Home;
