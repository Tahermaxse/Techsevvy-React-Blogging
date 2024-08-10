import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const CookieConsentBanner = () => {
  const [showBanner, setShowBanner] = useState(true);

  useEffect(() => {
    const consent = getCookie("cookieConsent");
    if (consent === "accepted" || consent === "denied") {
      setShowBanner(false);
    }
  }, []);

  const handleAccept = () => {
    setCookie("cookieConsent", "accepted", 365); // Set cookie for 365 days
    setShowBanner(false);
  };

  const handleDeny = () => {
    setCookie("cookieConsent", "denied", 365); // Set cookie for 365 days
    setShowBanner(false);
  };

  const setCookie = (name, value, days) => {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
  };

  const getCookie = (name) => {
    const cookieName = name + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookieArray = decodedCookie.split(";");
    for (let i = 0; i < cookieArray.length; i++) {
      let cookie = cookieArray[i];
      while (cookie.charAt(0) === " ") {
        cookie = cookie.substring(1);
      }
      if (cookie.indexOf(cookieName) === 0) {
        return cookie.substring(cookieName.length, cookie.length);
      }
    }
    return "";
  };

  if (!showBanner) {
    return null;
  }

  return (
    <>
      <div className="set-all-components-to-display-none-and-use-this-div-to-create-a-symbol">
        <div
          fs-cc="banner"
          className="fs-cc-banner2_component"
          style={{ display: "flex", opacity: 1 }}
        >
          <div className="fs-cc-banner2_container">
            <div className="fs-cc-banner2_text">
              By clicking “Accept”, you agree to the storing of cookies on your
              device to enhance site navigation, analyze site usage, and assist
              in our marketing efforts. View our
              <Link to="/privacypolicy" className="fs-cc-banner2_text-link">
                Privacy Policy
              </Link>
              for more information.
            </div>
            <div className="fs-cc-banner2_buttons-wrapper">
              <a
                fs-cc="deny"
                className="fs-cc-banner2_button fs-cc-button-alt w-button"
                role="button"
                tabIndex={0}
                onClick={handleDeny}
              >
                Deny
              </a>
              <a
                fs-cc="allow"
                className="fs-cc-banner2_button w-button"
                role="button"
                tabIndex={0}
                onClick={handleAccept}
              >
                Accept
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CookieConsentBanner;
