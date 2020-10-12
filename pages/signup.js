import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import Navigation from '../components/Navigation';
import Form from '../components/Form';
import { authSelectors } from '../store/selectors';
import { authActions } from '../store/actions';

const Signup = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [values, setValues] = React.useState({});
  const authToken = useSelector(authSelectors.selectAuthToken);
  const { cpassword, password, userName, email } = values;
  const onSignup = React.useCallback(() => {
    if (cpassword !== password) {
      setValues({ ...values, error: "passwords don't match!" });
    } else {
      dispatch(
        authActions.signup({
          email,
          password,
          userName
        })
      );
    }
  }, [values, dispatch, authActions]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSignup();
  };
  React.useEffect(() => {
    if (authToken) router.push('/');
  }, [authToken]);

  return (
    <>
      <Navigation
        Title="Signup"
        Links={[
          {
            title: 'Home',
            ref: '/'
          }
        ]}
      />

      <Form
        Title="Create Account"
        ParentState={[values, setValues]}
        SubmitFunction={handleSubmit}
        Inputs={[
          { label: 'User name', id: 'userName', type: 'text' },
          { label: 'Email', id: 'email', type: 'email' },
          { label: 'Password', id: 'password', type: 'password' },
          { label: 'Confirm Password', id: 'cpassword', type: 'password' }
        ]}
        LowerText={{
          info: 'Already have an account?',
          link: {
            name: 'Login',
            ref: '/login'
          }
        }}
      />
    </>
  );
};

export default Signup;
