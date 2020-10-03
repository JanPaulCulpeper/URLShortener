import React from 'react';

import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { createWrapper } from 'next-redux-wrapper';

import store from '../services/redux';

import 'typeface-roboto';

const theme = {};

const Child = ({ Component, pageProps }) => {
  React.useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles && jssStyles.parentNode)
      jssStyles.parentNode.removeChild(jssStyles);
  }, []);

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
