import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import PropTypes from 'prop-types';
import Link from 'next/link';
import useStyles from './style';

const Navigation = ({ Links, Title }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            {Title}
          </Typography>
          {Links.map((link) => {
            if (link.condition) {
              return link.replacement;
            }
            return (
              <Link href={link.ref}>
                <Button color="inherit">{link.title}</Button>
              </Link>
            );
          })}
        </Toolbar>
      </AppBar>
    </div>
  );
};

Navigation.propTypes = {
  Links: PropTypes.arrayOf(String),
  Title: PropTypes.string
};

Navigation.defaultProps = {
  Links: [],
  Title: 'example'
};
export default Navigation;
