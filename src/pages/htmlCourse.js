import React from "react";
import Header from "../comp/header";
import Footer from "../comp/footer";
import Maincontent from "../comp/maincontent";
import { Helmet } from "react-helmet-async";

const Htmlcourse = () => {
  return (
    <>
      <Helmet>
        <title>HTML Course</title>
        <meta name="description" content="html content" />
      </Helmet>

      <Header />

      <Maincontent content="HTML Page" />

      <Footer />
    </>
  );
};

export default Htmlcourse;
