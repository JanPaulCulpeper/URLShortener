import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { ToastContainer, toast } from 'react-toastify';
import Navigation from '../components/Navigation';
import Form from '../components/Form';
import { authSelectors } from '../store/selectors';
import { authActions } from '../store/actions';

const Login = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [values, setValues] = React.useState({});
  const authToken = useSelector(authSelectors.selectAuthToken);
  const authError = useSelector(authSelectors.selectError);
  const { email, password } = values;

  const onLogin = React.useCallback(() => {
    dispatch(authActions.login({ email, password }));
  }, [values, dispatch, authActions]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin();
  };

  React.useEffect(() => {
    if (authToken) router.push('/');
    if (authError) {
      Object.keys(authError).map(
        (key) => authError[key] && toast(authError[key], { type: 'error' })
      );
      dispatch(authActions.clearError());
    }
  }, [authToken, authError]);

  return (
    <>
      <ToastContainer />
      <Navigation
        Title="Login"
        Links={[
          {
            title: 'Home',
            ref: '/'
          }
        ]}
      />

      <Form
        Title="Account"
        ParentState={[values, setValues]}
        SubmitFunction={handleSubmit}
        Inputs={[
          { label: 'Email', id: 'email', type: 'email' },
          { label: 'Password', id: 'password', type: 'password' }
        ]}
        LowerText={{
          info: "Don't have an account?",
          link: {
            name: 'Signup',
            ref: '/signup'
          }
        }}
      />
    </>
  );
};

export default Login;
