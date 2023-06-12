import React from 'react';
import { Link } from 'gatsby';
import './work.css';

const Work = () => {
  return (
    <>
      <div className="bg-img"></div>
      <div className="folderlink">
        <Link to="/showcase">Landscape</Link>
        <Link to="/bts">
          <span className="link-text">Behind the Scenes</span>
        </Link>
        <Link to="/wildlife">Wildlife</Link>
      </div>
    </>
  );
};

export default Work;
