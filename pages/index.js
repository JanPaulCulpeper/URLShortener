/*
We import React if we are going to write jsx (html react language),
not necessary in nextjs but it is good practice.
*/
import React from "react";

// we create an lambda function that returns either some text or JSX
// NOTE: This is function-based react programming
const Home = () => {
  return <div>This is the home page</div>;
};

// We need to export our component to make it accesible elswhere
export default Home;
