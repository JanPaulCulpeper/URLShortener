import React from 'react';
import PropTypes from 'prop-types';
import { TextField, Button } from '@material-ui/core';
import useStyles from './style';

const InputWButton = ({ ParentState, Submit, Options }) => {
  const classes = useStyles();
  const handleChange = (e) => {
    ParentState[1]({
      ...ParentState[0],
      [e.target.id]: e.target.value
    });
  };
  return (
    <>
      <form className={classes.form} onSubmit={Submit}>
        <TextField
          size="large"
          className={classes.input}
          type={Options.input.type}
          onChange={handleChange}
          id={Options.input.id}
          label={Options.input.label}
          variant="outlined"
        />
        <Button className={classes.button} variant="contained" color="primary">
          {Options.submitLabel}
        </Button>
      </form>
    </>
  );
};

InputWButton.propTypes = {
  ParentState: PropTypes.instanceOf(Object),
  Submit: PropTypes.func,
  Options: {
    submitLabel: PropTypes.string,
    input: {
      type: PropTypes.string,
      id: PropTypes.string,
      label: PropTypes.string
    }
  }
};

InputWButton.defaultProps = {
  ParentState: {},
  Submit: (e) => {
    e.preventDefault();
  },
  Options: {
    submitLabel: 'Submit',
    input: {
      type: 'text',
      id: 'text',
      label: 'text'
    }
  }
};

export default InputWButton;
