import React from "react";
import Header from "../comp/header";
import Footer from "../comp/footer";
import Maincontent from "../comp/maincontent";
import { Helmet } from "react-helmet-async";

const Javascriptcourse = () => {
  return (
    <>
      <Helmet>
        <title>Javscript Course</title>
        <meta name="description" content="JS content" />
      </Helmet>
      <Header />

      <Maincontent content="Javascript Page" />

      <Footer />
    </>
  );
};
export default Javascriptcourse;
