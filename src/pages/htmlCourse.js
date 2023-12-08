import React from "react";
import Header from "../comp/header";
import Footer from "../comp/footer";
import Maincontent from "../comp/maincontent";

const Htmlcourse = () => {
  return (
    <>
      <Header />

      <Maincontent content="HTML" designer="ALi" />

      <Footer />
    </>
  );
};

export default Htmlcourse;
