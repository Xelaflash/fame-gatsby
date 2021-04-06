import React from 'react';
import { Link } from 'gatsby';
import '../styles/404.scss';
import SEO from '../components/SEO';
import tree from '../assets/images/palm-trees.png';

export default function ErrorPageFourOFour() {
  return (
    <>
      <SEO title="404 - page not found" />
      <div id="error-404-page">
        <div className="wrapper">
          <div className="round" />
          <div className="wrapper-2">
            <div className="img-area">
              <img src={tree} alt="Palm Tree" className="tree" />
              <img src={tree} alt="Palm Tree" className="tree" />
              <img src={tree} alt="Palm Tree" className="tree" />
              <img src={tree} alt="Palm Tree" className="tree" />
            </div>
          </div>
        </div>
        <div className="error-404">
          <h1>
            <span>O</span>
            <span>O</span>
            <span>P</span>
            <span>S</span>
            <span>!</span>
          </h1>
          <h2>404...Page not found</h2>
          <Link to="/" className="error-btn">
            Go to Homepage
          </Link>
        </div>
      </div>
    </>
  );
}
