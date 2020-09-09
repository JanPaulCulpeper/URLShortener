import React from "react";

// Not obligated but important to type check
// We want to make sure our app doesn't break

import PropTypes from "prop-types";

// This is the default page manager in nextjs
// Component is the current page running
// pageProps is the current paramters
// props are values that we pass down to components
/* e.g.

component: MyApp
MyApp props:


*/

const MyApp = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

// Requiring the expected type for incoming props (paramters)
MyApp.propTypes = {
  Component: PropTypes.instanceOf(Object).isRequired,
  pageProps: PropTypes.instanceOf(Object).isRequired,
};

export default MyApp;
