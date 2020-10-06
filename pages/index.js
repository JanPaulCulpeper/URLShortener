/*
We import React if we are going to write jsx (html react language),
not necessary in nextjs but it is good practice.
*/
import React from 'react';

// import { useSelector, useDispatch } from 'react-redux';
//
// import { authSelectors } from '../store/selectors';
// import { authActions } from '../store/actions';

// we create an lambda function that returns either some text or JSX
// NOTE: This is function-based react programming
const Home = () => {
  // const dispatch = useDispatch();

  // const init = () => {
  //   dispatch(authActions.signup('blah', 'blah'));
  // };

  // const authToken = useSelector(authSelectors.selectAuthToken);
  // console.log(authToken);

  return <div>Home</div>;
};

// We need to export our component to make it accesible elswhere
export default Home;
