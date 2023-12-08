import React from "react";
import Header from "../comp/header";
import Footer from "../comp/footer";
import Maincontent from "../comp/maincontent";
import { Helmet } from "react-helmet-async";

const Csscourse = () => {
  return (
    <>
      <Helmet>
        <title>CSS Course</title>
        <meta name="description" content="CSS content" />
      </Helmet>
      <Header />
      <Maincontent content="CSS Page" />
      <Footer />
    </>
  );
};

export default Csscourse;
