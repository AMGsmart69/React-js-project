import React from "react";
import Header from "../comp/header";
import Footer from "../comp/footer";
import Maincontent from "../comp/maincontent";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home</title>
        <meta name="description" content="HOME content" />
      </Helmet>
      <Header />

      <Maincontent content="Home Page" />

      <Footer />
    </>
  );
};

export default Home;
