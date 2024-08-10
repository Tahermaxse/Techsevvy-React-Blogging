import React from 'react';
import Hero from './Hero';
import { Helmet } from 'react-helmet-async';

const PrivacyPolicy = () => {
  return (
    <>
    <Helmet>
      <title>Privacy Policy - Techsevvy</title>
      <meta name="description" content="Understand how Techsevvy collects, uses, and protects your personal information." />
      <meta name="keywords" content="Privacy Policy, Personal Information, Data Protection, Techsevvy" />
    </Helmet>
    <Hero heading="Privacy Policy" />
    <div className="section-4 privacy-policy updated">
        <div className="container pp">
          <div
            fs-toc-offsettop="20px"
            fs-toc-element="contents"
            fs-toc-hideurlhash="true"
            className="rich-text-block-black w-richtext"
          >
      <h3>Privacy Policy</h3>
      <p>Last updated: june 29, 2024</p>
      
      <p>Welcome to Techsevvy! This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.</p>
      
      <h3>1. Information We Collect</h3>
      <p>We may collect information about you in a variety of ways. The information we may collect on the Site includes:</p>
      <ul>
        <li><strong>Personal Data:</strong> Personally identifiable information, such as your name, shipping address, email address, and telephone number.</li>
        <li><strong>Derivative Data:</strong> Information our servers automatically collect when you access the Site, such as your IP address, your browser type, your operating system, and access times.</li>
        <li><strong>Financial Data:</strong> Financial information, such as data related to your payment method (e.g., valid credit card number, card brand, expiration date) that we may collect when you purchase, order, return, exchange, or request information about our services.</li>
      </ul>
      
      <h3>2. Use of Your Information</h3>
      <p>Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:</p>
      <ul>
        <li>Create and manage your account.</li>
        <li>Process your transactions.</li>
        <li>Compile anonymous statistical data and analysis for use internally or with third parties.</li>
        <li>Deliver targeted advertising, coupons, newsletters, and other information regarding promotions and the Site to you.</li>
        <li>Email you regarding your account or order.</li>
        <li>Increase the efficiency and operation of the Site.</li>
      </ul>
      
      <h3>3. Disclosure of Your Information</h3>
      <p>We may share information we have collected about you in certain situations. Your information may be disclosed as follows:</p>
      <ul>
        <li><strong>By Law or to Protect Rights:</strong> If we believe the release of information about you is necessary to respond to legal process, to investigate or remedy potential violations of our policies, or to protect the rights, property, and safety of others, we may share your information as permitted or required by any applicable law, rule, or regulation.</li>
        <li><strong>Third-Party Service Providers:</strong> We may share your information with third parties that perform services for us or on our behalf, including payment processing, data analysis, email delivery, hosting services, customer service, and marketing assistance.</li>
      </ul>
      
      <h3>4. Security of Your Information</h3>
      <p>We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.</p>
      
      <h3>5. Policy for Children</h3>
      <p>We do not knowingly solicit information from or market to children under the age of 13. If we learn that we have collected personal information from a child under age 13 without verification of parental consent, we will delete that information as quickly as possible. If you become aware of any data we have collected from children under age 13, please contact us at [contact information].</p>
      
      <h3>6. Changes to This Privacy Policy</h3>
      <p>We may update this Privacy Policy from time to time in order to reflect, for example, changes to our practices or for other operational, legal, or regulatory reasons.</p>
      
      <h3>7. Contact Us</h3>
      <p>If you have questions or comments about this Privacy Policy, please contact us at:</p>
      <p>Techsevvy<br />
      Email: info@techsevvy.com</p>
    </div>
    </div>
    </div>
    </>

  );
};

export default PrivacyPolicy;
