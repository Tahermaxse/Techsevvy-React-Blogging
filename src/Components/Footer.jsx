import React from "react";
import { Link } from "react-router-dom";
import logo from '../assets/techsevvy-web-logo.png';
import chatgpt from '../assets/ChatGPT-Logo 1.png';
import techsevvy from '../assets/techsevvy-char.png';


const Footer = () => {
  return (
    <>
      <section className="section footer">
        <div className="container-1280px footer">
          <div className="footer-header">
            <h2 className="heading-48px footer-heading">
              Join the most
              <span className="footer-heading-span-1">sought-out </span>
              <span className="footer-heading-span-2">
                newsletter.
              </span>
            </h2>
            <div className="footer-header-right">
              <div className="paragraph-18px footer-desc">
                
              </div>
              <Link
                to="/joinnewsletter"
                className="colored-button w-inline-block"
              >
                <div className="colored-button-inner gap-24px">
                  <div className="paragraph-18px colored-button-text">
                    Join Newsletter
                  </div>
                  <img
                    src="https://cdn.prod.website-files.com/65159e844f8f08a72cefa2aa/65159e844f8f08a72cefa35e_ArrowRight.svg"
                    loading="lazy"
                    alt=""
                    className="colored-button-icon"
                  />
                  <div className="button-black-overlay" />
                  <div className="colored-button-gradient-layer" />
                </div>
              </Link>
            </div>
          </div>
          <div className="footer-main-image-wrap home">
            <img
              src="dashboard.png"
              loading="lazy"
              sizes="(max-width: 767px) 100vw, (max-width: 1279px) 81vw, 960.0000610351562px"
              srcSet="
                dashboard.png   500w,
                dashboard.png   800w,
                dashboard.png   1080w,
                dashboard.png   2000w
              "
              alt=""
              className="footer-main-image home"
            />
          
            <img
              src={chatgpt}
              loading="lazy"
              alt=""
              className="footer-overlay-image _1"
            />
            <img
              src={techsevvy}
              loading="lazy"
              alt=""
              className="footer-overlay-image _2"
            />
            <img
              src={chatgpt}
              loading="lazy"
              alt=""
              className="footer-overlay-image _3"
            />
          </div>
          <div className="footer-image-gradient-overlay" />
          <div className="footer-main">
            <div className="footer-main-text-contain">
              <Link to="/" className="brand footer w-nav-brand">
                <img
                  src={logo}
                  loading="lazy"
                  alt=""
                  className="brand-image"
                />
              </Link>
              <div className="paragraph-18px footer-main-desc">
              Stay ahead with AI insights delivered every Monday, Wednesday and Friday.
              </div>
              <div className="footer-social-icons-contain">
                <a
                  href="/"
                  target="_blank"
                  className="footer-social-icon-wrap large w-inline-block"
                >
                  <img
                    src="https://cdn.prod.website-files.com/65159e844f8f08a72cefa2aa/65159e844f8f08a72cefa355_discord.svg"
                    loading="lazy"
                    alt=""
                    className="footer-social-icon"
                  />
                </a>
                <a
                  href="/"
                  target="_blank"
                  className="footer-social-icon-wrap w-inline-block"
                >
                  <img
                    src="https://cdn.prod.website-files.com/65159e844f8f08a72cefa2aa/65159e844f8f08a72cefa353_facebook.svg"
                    loading="lazy"
                    alt=""
                    className="footer-social-icon"
                  />
                </a>
                <a
                  href="/"
                  target="_blank"
                  className="footer-social-icon-wrap w-inline-block"
                >
                  <img
                    src="https://cdn.prod.website-files.com/65159e844f8f08a72cefa2aa/65159e844f8f08a72cefa356_linkedin.svg"
                    loading="lazy"
                    alt=""
                    className="footer-social-icon"
                  />
                </a>
                <a
                  href="https://x.com/tech_sevvy?t=9KWYgtT1Ts1l6O5g9uF_5A&s=09"
                  target="_blank"
                  className="footer-social-icon-wrap w-inline-block"
                >
                  <img
                    src="https://cdn.prod.website-files.com/65159e844f8f08a72cefa2aa/65159e844f8f08a72cefa354_twitter.svg"
                    loading="lazy"
                    alt=""
                    className="footer-social-icon"
                  />
                </a>
                <a
                  href="https://www.instagram.com/techsevvy?igsh=N25zeTZ0YXBhb3k1"
                  className="footer-social-icon-wrap w-inline-block"
                >
                  <img
                    src="https://cdn.prod.website-files.com/65159e844f8f08a72cefa2aa/65159e844f8f08a72cefa351_instagram.svg"
                    loading="lazy"
                    alt=""
                    className="footer-social-icon"
                  />
                </a>
                <a
                  href="/"
                  target="_blank"
                  className="footer-social-icon-wrap large w-inline-block "
                >
                  <img
                    src="https://cdn.prod.website-files.com/65159e844f8f08a72cefa2aa/65159e844f8f08a72cefa357_youtube.svg"
                    loading="lazy"
                    alt=""
                    className="footer-social-icon"
                  />
                </a>
              </div>
              <div className="paragraph-16px copywrite-text">
                © 2024 Techsevvy
              </div>
            </div>
            <div className="footer-links-grid">
              <div className="footer-links-inner-wrapper">
                
                <div className="footer-links-column">
                  <Link
                    to="/"
                    className="paragraph-18px footer-link"
                  >
                    Home
                  </Link>
                 
                 
                </div>
                <div className="footer-links-column">
                  <Link

                    to="/privacypolicy"
                    className="paragraph-18px footer-link"
                  >
                    Privacy Policy
                  </Link>
                  <Link
                    to="/terms"
                    className="paragraph-18px footer-link"
                  >
                    Terms &amp; Condition
                  </Link>
                </div>
              </div>
              <div className="paragraph-16px copywrite-text bottom">
                © 2024 Techsevvy (India)
              </div>
            </div>
          </div>
        </div>
        <div className="footer-2-bg-wrap">
          <img
            src="https://cdn.prod.website-files.com/65159e844f8f08a72cefa2aa/65159e844f8f08a72cefa419_footer%20bg%20latest.svg"
            loading="eager"
            alt=""
            className="footer-hero-bg"
          />
        </div>
      </section>
    </>
  );
};

export default Footer;
