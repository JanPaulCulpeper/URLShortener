import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Navigation from '../components/Navigation';
import { authSelectors, urlSelectors } from '../store/selectors';
import { authActions, urlActions } from '../store/actions';

import UserIcon from '../components/UserIcon';
import Form from '../components/Form';
import URL from '../constants';

const Home = () => {
  const dispatch = useDispatch();
  const authToken = useSelector(authSelectors.selectAuthToken);
  const urls = useSelector(urlSelectors.selectUrls);
  const [values, setValues] = React.useState({});
  const { url, custom } = values;
  const [current, setCurrent] = React.useState(null);

  const handleSubmit = React.useCallback(
    (e) => {
      e.preventDefault();
      setCurrent(custom);
      if (authToken)
        dispatch(
          urlActions.shorten({
            custom,
            url,
            id: authToken._id
          })
        );
    },
    [values, current]
  );

  const Logout = React.useCallback(async () => {
    dispatch(authActions.logout());
  }, [dispatch, authActions]);
  return (
    <>
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
                  { name: 'Dashboard', act: () => {} },
                  { name: 'Logout', act: Logout }
                ]}
                Letter={authToken ? authToken.userName[0] : null}
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

            exteriorLabel: `your custom path`
          }
        ]}
        LowerText={{
          info: urls ? null : `${URL}${values.custom || 'your custom path'}`,
          link: authToken
            ? {
                name: urls ? `${URL}${current}` : null,
                ref: urls ? `${URL}${current}` : null
              }
            : {}
        }}
      />
    </>
  );
};

export default Home;
