import React from "react";
import { Link } from 'react-router-dom';
import logo from '../assets/techsevvy-web-logo.png';

const Navbar = () => {
  return (
    <>
      <header className="container-1340px nav-container">
        <Link  to="/" className="brand ">
          <img
            src={logo}
            loading="lazy"
            width={125}
            alt=""
            className="brand-image wp-element-button"
          />
        </Link>
        <nav role="navigation" className="nav-menu w-nav-menu">
          <div className="nav-menu-inner">
            <div className="nav-link-wrapper">
              <Link  to="/" className="nav-link w-nav-link">
                Home
              </Link>
              <div class="nav-link-underline"></div>
            </div>
            <div className="nav-link-wrapper">
              <Link to="/terms" className="nav-link w-nav-link">
                Term & Condition
              </Link>
              <div class="nav-link-underline"></div>
            </div>
            
            
            <div className="nav-button-wrapper mobile">
              <Link
                to="/Joinnewsletter"
                className="glowing-button w-inline-block"
              >
                <div className="glowing-button-gradient" />
                <div className="glowing-button-inner">
                  <div className="paragraph-16px glowing-button-text">
                   Join newsletter
                  </div>
                  <img
                    src="https://cdn.prod.website-files.com/65159e844f8f08a72cefa2aa/65159e844f8f08a72cefa35a_CaretRight.svg"
                    loading="lazy"
                    alt=""
                    className="glowing-button-icon"
                  />
                  <div className="glowing-button-inner-overlay" />
                </div>
                <div className="glowing-button-code w-embed">
                  <style
                    dangerouslySetInnerHTML={{
                      __html:
                        "\n                      .glowing-button-gradient {\n                        animation: spin 4s linear infinite;\n                        border-radius: 50%;\n                        background: conic-gradient(\n                          rgba(255, 255, 255, 0) 120deg,\n                          rgba(251, 109, 254, 1) 150deg,\n                          rgba(255, 237, 172, 1) 200deg,\n                          rgba(255, 255, 255, 0) 240deg\n                        );\n                      }\n                    ",
                    }}
                  />
                </div>
              </Link>
            </div>
          </div>
          <div className="navigation-border" />
        </nav>
        <div className="nav-button-wrapper desktop">
         
          <Link
            to="/joinnewsletter"
            className="glowing-button out-menu w-inline-block"
          >
            <div className="glowing-button-gradient" />
            <div className="glowing-button-inner">
              <div className="paragraph-16px glowing-button-text">
                Join Newsletter
              </div>
              <img
                src="https://cdn.prod.website-files.com/65159e844f8f08a72cefa2aa/65159e844f8f08a72cefa35a_CaretRight.svg"
                loading="lazy"
                alt=""
                className="glowing-button-icon"
              />
              <div className="glowing-button-inner-overlay" />
            </div>
            <div className="glowing-button-code w-embed">
              <style
                dangerouslySetInnerHTML={{
                  __html:
                    "\n                  .glowing-button-gradient {\n                    animation: spin 4s linear infinite;\n                    border-radius: 50%;\n                    background: conic-gradient(\n                      rgba(255, 255, 255, 0) 120deg,\n                      rgba(251, 109, 254, 1) 150deg,\n                      rgba(255, 237, 172, 1) 200deg,\n                      rgba(255, 255, 255, 0) 240deg\n                    );\n                  }\n                ",
                }}
              />
            </div>
          </Link>
        </div>
        <div className="nav-menu-button w-nav-button">
          <div className="nav-menu-button-inner">
            <div href="/" className="hamburger-wrapper">
              <div className="burger-line _1" />
              <div className="burger-line _2" />
              <div className="burger-line _3" />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
