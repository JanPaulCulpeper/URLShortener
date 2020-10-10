import React from 'react';

import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { createWrapper } from 'next-redux-wrapper';
import { authActions } from '../store/actions';
import { authSelectors } from '../store/selectors';

import store from '../services/redux';

import 'typeface-roboto';

const theme = {};

const Child = ({ Component, pageProps }) => {
  const dispatch = useDispatch();
  const authLoading = useSelector(authSelectors.selectLoading);

  const init = React.useCallback(() => {
    dispatch(authActions.verifyAuth());
  }, [dispatch]);

  React.useEffect(() => {
    init();
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles && jssStyles.parentNode)
      jssStyles.parentNode.removeChild(jssStyles);
  }, []);

  if (authLoading) return 'Loading...';

  return (
    <>
      <Component {...pageProps} />
    </>
  );
};

const App = (props) => {
  return (
    <>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <div>
            <Child {...props} />
          </div>
        </ThemeProvider>
      </Provider>
    </>
  );
};

Child.defaultProps = {
  pageProps: {}
};

Child.propTypes = {
  Component: PropTypes.instanceOf(Object).isRequired,
  pageProps: PropTypes.instanceOf(Object)
};

const makestore = () => store;
const wrapper = createWrapper(makestore);

export default wrapper.withRedux(App);
