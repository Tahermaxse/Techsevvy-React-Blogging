// src/Components/Layout.jsx
import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const Layout = ({ children }) => (
  <HelmetProvider>
    <Helmet>
      <title>Techsevvy - Latest Tech News</title>
      <meta name="description" content="Techsevvy provides the latest updates on Apps, Climate, AI, Biotech, Health, and more." />
      <meta name="keywords" content="Tech, News, AI, Biotech, Health, Apps, Climate" />
      <link rel="canonical" href="https://sevvyblogs.netlify.app/" />
    </Helmet>
    <div>
      {children}
    </div>
  </HelmetProvider>
);

export default Layout;
