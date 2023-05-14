import React from "react";
import cvPdf from "../../static/cv.pdf";

import "./Cvpdf.css"; // Import your custom CSS file
import { Link } from "gatsby";

const CvPdf = () => {
  return (
    <div className="pdf-container">
      <Link to="/" className="home-button">Home</Link>
      <iframe className="pdf-iframe" src={cvPdf} title="Embedded PDF" />
    </div>
  );
};

export default CvPdf;
