import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import { useRouter } from 'next/router';
import LinearProgress from '@material-ui/core/LinearProgress';
import Navigation from '../components/Navigation';
import { authSelectors, urlSelectors } from '../store/selectors';
import { authActions, urlActions } from '../store/actions';
import UserIcon from '../components/UserIcon';
import Form from '../components/Form';
import URL from '../constants';

const Home = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const authToken = useSelector(authSelectors.selectAuthToken);
  const currentUrl = useSelector(urlSelectors.selectCurrentUrl);

  const [values, setValues] = React.useState({
    url: '',
    custom: ''
  });
  const { url, custom } = values;
  const [current, setCurrent] = React.useState(null);
  const loading = useSelector(authSelectors.selectLoading);
  const urlError = useSelector(urlSelectors.selectError);

  const handleSubmit = React.useCallback(
    (e) => {
      e.preventDefault();
      setCurrent(custom);
      if (authToken) {
        console.log(authToken);
        if (url !== '' && custom !== '') {
          dispatch(
            urlActions.shorten({
              custom,
              url
            })
          );
        } else toast('Cannot have empty fields!', { type: 'error' });
      } else {
        router.push('/login');
      }
    },
    [values, current]
  );

  const Logout = React.useCallback(async () => {
    dispatch(authActions.logout());
  }, [dispatch, authActions]);

  React.useEffect(() => {
    if (urlError) toast(urlError, { type: 'error' });
  }, [urlError]);

  const clearNotifications = () => {
    dispatch(urlActions.clear());
  };

  React.useEffect(() => {
    if (currentUrl) {
      toast('Successfuly shortened!', { type: 'success' });
    }
  }, [currentUrl]);

  React.useEffect(() => {
    return () => clearNotifications();
  }, []);

  return (
    <>
      {loading ? (
        <LinearProgress />
      ) : (
        <>
          <ToastContainer />
          <Navigation
            Title="URL-shortener"
            Links={[
              {
                title: 'Login',
                ref: '/login',
                condition: !!authToken,
                replacement: (
                  <UserIcon
                    Actions={[
                      {
                        name: 'Dashboard',
                        act: () => router.push('/dashboard')
                      },
                      { name: 'Logout', act: Logout }
                    ]}
                    Letter={authToken?.userName[0]}
                  />
                )
              }
            ]}
          />
          <Form
            Title="Shorten your URL"
            ParentState={[values, setValues]}
            SubmitFunction={handleSubmit}
            Inputs={[
              { label: 'URL', id: 'url', type: 'text' },
              {
                id: 'custom',
                type: 'text',

                exteriorLabel: `your-custom-path`
              }
            ]}
            LowerText={{
              info: currentUrl
                ? null
                : `${URL}${values.custom || 'your custom path'}`,
              link: authToken
                ? {
                    name: currentUrl ? `${URL}${current}` : null,
                    ref: currentUrl ? `${URL}${current}` : null
                  }
                : {}
            }}
          />{' '}
        </>
      )}
    </>
  );
};

export default Home;
