import React from "react";
import Subscribe from "./Subscribe";
import { Helmet } from 'react-helmet-async';
import ogimage from '../assets/techsevvy-web-logo.png'

const Newsletter = () => {
  return (
    <>
     <Helmet>
     <title>Subscribe to our Newsletter - Techsevvy</title>
        <meta name="description" content="Subscribe to Techsevvy's newsletter and stay updated with the latest tech news and articles." />
        <meta name="keywords" content="Newsletter, Subscribe, Tech News, Updates, Techsevvy" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:title" content="Subscribe to our Newsletter - Techsevvy" />
        <meta property="og:description" content="Subscribe to Techsevvy's newsletter and stay updated with the latest tech news and articles." />
        <meta property="og:image" content={ogimage} /> 
        <meta property="og:url" content="https://sevvyblogs.netlify.app/joinnewsletter" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Subscribe to our Newsletter - Techsevvy" />
        <meta name="twitter:description" content="Subscribe to Techsevvy's newsletter and stay updated with the latest tech news and articles." />
        <meta name="twitter:image" content="https://x.com/tech_sevvy/photo" /> 
        <meta name="twitter:card" content="summary_large_image"></meta>
        <meta name="twitter:site" content="@tech_sevvy" />
    </Helmet>
      <div className="main">
        <div
          data-w-id="4d641f63-de1c-3083-4360-dfae2802891f"
          className="section-4 about-us-hero"
        > 
          <div className="container aboutus">
            <div className="aboutus-hero-wrapper">
              <div className="aboutus-hero-content-container">
                <h4 className="aboutus-h1">
                 Join our community and stay ahead with <span className="highlight text-span-8" > AI insights.</span> <br />
                 Delivered every<span className="highlight text-span-8"> Monday, Wednesday </span>
                 <span className="br">and  <span className=" text-span-8"> Friday.</span></span>
                </h4>
                <a href="#" className="cta aboutus-hero w-inline-block">
                  <div className="cta-text">Learn More</div>
                  <div className="cta-icon down w-embed">
                    <svg
                      width="100%"
                      height="100%"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.5 1L10.5 6M10.5 6L5.5 11M10.5 6L0.5 6"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />
                    </svg>
                  </div>
                  <div className="cta-overlay">
                    <div
                      className="cta-overlay-left white"
                      style={{
                        transform:
                          "translate3d(0px, 0px, 0px) scale3d(0, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                        transformStyle: "preserve-3d",
                      }}
                    />
                    <div
                      className="cta-overlay-right white"
                      style={{
                        transform:
                          "translate3d(0px, 0px, 0px) scale3d(0, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                        transformStyle: "preserve-3d",
                      }}
                    />
                  </div>
                  <div className="cta-overlay">
                    <div
                      className="cta-overlay-left green"
                      style={{
                        transform:
                          "translate3d(0px, 0px, 0px) scale3d(0, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                        transformStyle: "preserve-3d",
                      }}
                    />
                    <div
                      className="cta-overlay-right green"
                      style={{
                        transform:
                          "translate3d(0px, 0px, 0px) scale3d(0, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                        transformStyle: "preserve-3d",
                      }}
                    />
                  </div>
                </a>
              </div>
            </div>
            <div
              data-poster-url="https://cdn.prod.website-files.com/637495e24e982a81f63e724a/63c82392538e52f2d256154b_Earth-poster-00001.jpg"
              data-video-urls="https://cdn.prod.website-files.com/65159e844f8f08a72cefa2aa/65159e844f8f08a72cefa51a_Earth-poster-00001.jpg,https://cdn.prod.website-files.com/65159e844f8f08a72cefa2aa/65159e844f8f08a72cefa51a_Earth-transcode.mp4,https://cdn.prod.website-files.com/65159e844f8f08a72cefa2aa/65159e844f8f08a72cefa51a_Earth-transcode.webm"
              data-autoplay="true"
              data-loop="true"
              data-wf-ignore="true"
              className="globe w-background-video w-background-video-atom"
            >
              <video
                id="4d641f63-de1c-3083-4360-dfae28028939-video"
                autoPlay
                loop
                style={{
                  backgroundImage:
                    'url("https://cdn.prod.website-files.com/637495e24e982a81f63e724a/63c82392538e52f2d256154b_Earth-poster-00001.jpg")',
                }}
                muted
                playsInline
                data-wf-ignore="true"
                data-object-fit="cover"
              >
                <source
                  src="https://cdn.prod.website-files.com/65159e844f8f08a72cefa2aa/65159e844f8f08a72cefa51a_Earth-poster-00001.jpg"
                  data-wf-ignore="true"
                />
                <source
                  src="https://cdn.prod.website-files.com/65159e844f8f08a72cefa2aa/65159e844f8f08a72cefa51a_Earth-transcode.mp4"
                  data-wf-ignore="true"
                />
                <source
                  src="https://cdn.prod.website-files.com/65159e844f8f08a72cefa2aa/65159e844f8f08a72cefa51a_Earth-transcode.webm"
                  data-wf-ignore="true"
                />
              </video>
            </div>
          </div>
          <div className="background-filler full-width aboutus" />
        </div>
      </div>
      <div id="values" className="section-4 values">
      <div className="container">
      <Subscribe />

        {/* <div className="values-container">
          <div className="values-content-container">
            <h2 className="h2">Coming Soon</h2>
            <div className="subtext">Stay ahead with AI insights delivered every Monday, Wednesday and Friday.</div>
            
          </div>
    </div> */}
  </div>
</div>
    </>
  );
};

export default Newsletter;
