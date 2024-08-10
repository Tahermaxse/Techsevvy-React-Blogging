import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <div className="_404-wrapper" style={{backgroundColor: 'black'}}>
        <h6 className="_404-subheading">404</h6>
        <h2 className="_404-heading">Page not found</h2>
        <div className="_404-paragraph">
          This page has been moved or doesn't exist.
        </div>
        <Link
          to="/"
          className="colored-button w-inline-block"
        >
          <div className="colored-button-inner">
            <div className="paragraph-18px colored-button-text">
              Go to Homepage
            </div>
            <img
              src="https://cdn.prod.website-files.com/65159e844f8f08a72cefa2aa/65159e844f8f08a72cefa35e_ArrowRight.svg"
              loading="lazy"
              alt=""
              className="colored-button-icon"
            />
            <div className="button-black-overlay" style={{ opacity: 0 }} />
            <div
              className="colored-button-gradient-layer"
              style={{
                transform:
                  "translate3d(-36.2762%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                transformStyle: "preserve-3d",
                willChange: "transform",
              }}
            />
          </div>
          <div className="colored-button-border-layer" />
        </Link>
        <img
          src="https://cdn.prod.website-files.com/65159e844f8f08a72cefa2aa/6515c9e56835c1db0a399ec7_clumsy%201.svg"
          loading="lazy"
          alt=""
          className="_404-image"
        />
      </div>
    </>
  );
};

export default NotFound;
