import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { ToastContainer, toast } from 'react-toastify';
import LinearProgress from '@material-ui/core/LinearProgress';
import Navigation from '../components/Navigation';
import Form from '../components/Form';
import { authSelectors } from '../store/selectors';
import { authActions } from '../store/actions';

const Signup = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [values, setValues] = React.useState({});
  const authToken = useSelector(authSelectors.selectAuthToken);
  const loading = useSelector(authSelectors.selectLoading);
  const authError = useSelector(authSelectors.selectError);
  console.log(values);

  const onSignup = React.useCallback(() => {
    dispatch(authActions.signup(values));
  }, [values, dispatch, authActions]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSignup();
  };

  const onClear = () => {
    dispatch(authActions.clearError());
  };
  React.useEffect(() => {
    if (authToken && !loading) router.push('/');
    if (authError) {
      Object.keys(authError).map(
        (key) => authError[key] && toast(authError[key], { type: 'error' })
      );
      onClear();
    }
  }, [authToken, authError]);

  React.useEffect(() => {
    onClear();
    return () => onClear();
  }, []);

  return (
    <>
      {loading ? (
        <LinearProgress />
      ) : (
        <>
          <ToastContainer />
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
      )}
    </>
  );
};

export default Signup;
