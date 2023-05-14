import React from "react";
import cvPdf from "../../static/img/cv.pdf"; 


import "./Cvpdf.css"; // Import your custom CSS file
import { Link } from "gatsby";

const CvPdf = () => {
  return (
    <div className="pdf-container">
      <Link to="/" className="home-button">Home</Link>
      <div className="pdf-wrapper">
        <embed className="pdf-embed" src={cvPdf} type="application/pdf" />
      </div>
    </div>
  );
};

export default CvPdf;