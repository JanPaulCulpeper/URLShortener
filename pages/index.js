import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Navigation from '../components/Navigation';
import { authSelectors } from '../store/selectors';
import { authActions } from '../store/actions';
import UserIcon from '../components/UserIcon';

const Home = () => {
  const dispatch = useDispatch();
  const authToken = useSelector(authSelectors.selectAuthToken);

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
    </>
  );
};

export default Home;
