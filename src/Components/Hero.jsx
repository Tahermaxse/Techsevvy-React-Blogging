import React from 'react'

const Hero = (props) => {
  return (
    <>
     <section className="section resources-hero-section">
        <div className="container-1280px resources-hero-container">
          <div className="resources-hero-text-contain">
            <div className="resources-hero-logo-wrap">
              <img src={props.logo} loading="lazy" alt="" className="resources-hero-logo" />
            </div>
            <h1 className="heading-48px resources-hero-heading">{props.heading}</h1>
            <div className="paragraph-18px resources-hero-desc">
            {props.desc}
            </div>
          </div>
        </div>
        <div className="home-hero-bg-wrap">
          <img src="https://cdn.prod.website-files.com/65159e844f8f08a72cefa2aa/65159e844f8f08a72cefa419_footer%20bg%20latest.svg" loading="eager" alt="" className="home-hero-bg" />
        </div>
        <div className="home-hero-nav-blur" />
      </section> 
    </>
  )
}

export default Hero
