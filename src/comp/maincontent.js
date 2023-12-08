import React from "react";

const Maincontent = ({ content, designer }) => {
  return (
    <>
      <main>
        {content} Page
        <h2 style={{ color: "red" }}>Designed By {designer} </h2>
      </main>
    </>
  );
};

export default Maincontent;
