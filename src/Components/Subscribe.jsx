import React, { useState } from 'react'

const Subscribe = () => {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(false);

    const form = event.target;
    const formData = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        setError(true);
      }
    } catch (error) {
      setError(true);
    }
  };

  return (
    <>
      <div className="news-letter-cta">
        <div className="news-letter-cta-left">
          <div className="news-letter-cta-image-wrap">
            <img src="https://cdn.prod.website-files.com/65159e844f8f08a72cefa2aa/651dda0fa5a31704ad45a56f_news%20letter%20cta%20icon.svg" loading="lazy" alt="" className="news-letter-cta-image-icon" />
          </div>
          <div className="news-letter-cta-text-contain">
            <h3 className="heading-24px news-letter-cta-heading">Subscribe to our newsletter</h3>
            <div className="paragraph-18px news-letter-cta-text">Get a weekly round-up of our articles.</div>
          </div>
        </div>
        <div className="news-letter-cta-right">
          <div id="newsletter-form-block" className="news-letter-cta-form-block w-form">
            {submitted ? (
              <div id="newsletter-form-success-state" className="w-form-done">
                <div>Thank you! Your submission has been received!</div>
              </div>
            ) : (
              <form
                id="newsletter-form"
                name="email-form"
                data-name="Email Form"
                className="news-letter-cta-form"
                data-wf-page-id="6572817dce00c45803403760"
                data-wf-element-id="f8c74bc9-79a1-fb81-489f-dedc33e34429"
                action="https://formspree.io/f/mwpekelb"
                method="POST"
                onSubmit={handleSubmit}
              >
                <input
                  className="news-letter-cta-text-field w-input"
                  maxLength={256}
                  data-name="Email"
                  placeholder="Email Address"
                  id="email"
                  type="email"
                  name="email"
                  required
                />
                
                <div className="submit-button-wrapper static">
                  <button id="newsletter-form-button" type="submit" className="black-button">
                    <div className="black-arrow-button-inner">
                      <div className="paragraph-18px black-button-text">Subscribe</div>
                      <img loading="lazy" src="https://cdn.prod.website-files.com/65159e844f8f08a72cefa2aa/65159e844f8f08a72cefa35e_ArrowRight.svg" alt="" className="black-button-arrow" />
                      <div className="black-button-bg-layer" />
                    </div>
                  </button>
                </div>
              </form>
            )}
            {error && (
              <div className="w-form-fail">
                <div>Oops! Something went wrong while submitting the form.</div>
              </div>
            )}
          </div>
        </div>
      </div> 
    </>
  )
}

export default Subscribe;
