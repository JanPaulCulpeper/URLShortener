import React from 'react';
import PropTypes from 'prop-types';
import {
  TextField,
  Card,
  CardContent,
  Typography,
  Button
} from '@material-ui/core';
import Link from 'next/link';
import useStyles from './style';

const Form = ({
  Inputs,
  Title,
  SubmitLabel,
  ParentState,
  SubmitFunction,
  LowerText
}) => {
  const classes = useStyles();

  const handleChange = (e) => {
    ParentState[1]({
      ...ParentState[0],
      [e.target.id]: e.target.value
    });
  };

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} variant="h4" gutterBottom>
          {Title}
        </Typography>
      </CardContent>
      <CardContent>
        <form className={classes.form} onSubmit={SubmitFunction}>
          {Inputs.map((input) => (
            <TextField
              type={input.type}
              onChange={handleChange}
              className={classes.input}
              id={input.id}
              label={input.label}
              variant="outlined"
            />
          ))}
          {LowerText ? (
            <div className={classes.text}>
              <Typography>{LowerText.info}</Typography>
              <Link href={LowerText.link.ref}>
                <Typography className={classes.link}>
                  {LowerText.link.name}
                </Typography>
              </Link>
            </div>
          ) : null}
          <div className={classes.buttons}>
            <Button type="submit" color="primary" variant="contained">
              {SubmitLabel}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

Form.propTypes = {
  Inputs: PropTypes.arrayOf(Object),
  Title: PropTypes.string,
  SubmitLabel: PropTypes.string,
  ParentState: PropTypes.instanceOf(Object),
  SubmitFunction: PropTypes.func,
  LowerText: PropTypes.string
};

Form.defaultProps = {
  Inputs: [],
  Title: 'Example',
  SubmitLabel: 'submit',
  ParentState: {},
  SubmitFunction: (e) => {
    e.preventDefault();
  },
  LowerText: null
};

export default Form;
