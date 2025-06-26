import React from 'react';
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';

const withSEO = (WrappedComponent, pageTitle, pageKeywords, pageDescription, pageCanonical) => {
  return (props) => {
    const location = useLocation(); // Forces re-render on route change

    // Debugging logs
    console.log("🟢 withSEO Rendered for:", WrappedComponent.name);
    console.log("🔵 Current Path:", location.pathname);
    console.log("🟡 Expected Title:", pageTitle);

    return (
      <>
        <Helmet>
          <title>{pageTitle}</title>
          <meta name="keywords" content={pageKeywords} />
          <meta name="description" content={pageDescription} />
          <meta name="robots" content="index, follow" />
          <link rel="canonical" href={pageCanonical || window.location.href} />
        </Helmet>
        <WrappedComponent {...props} />
      </>
    );
  };
};

export default withSEO;
