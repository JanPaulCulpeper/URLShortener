import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import LinearProgress from '@material-ui/core/LinearProgress';
import {
  Card,
  CardContent,
  Typography,
  Container,
  Grid,
  Button
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import blue from '@material-ui/core/colors/blue';
import orange from '@material-ui/core/colors/orange';
import { useRouter } from 'next/router';
import URL from '../constants';
import Navigation from '../components/Navigation';
import { authSelectors, urlSelectors } from '../store/selectors';
import { authActions, urlActions } from '../store/actions';
import UserIcon from '../components/UserIcon';

const useStyles = makeStyles({
  root: {
    marginTop: 30
  },
  container: {
    borderBottom: '1px solid #ebebeb ',
    marginBottom: 10
  },
  link: {
    flexGrow: 1
  },
  ref: {
    '&:hover': { color: orange[500] },
    color: blue[500]
  },
  delete: { marginBottom: 10 }
});

const Dashboard = () => {
  const router = useRouter();
  const classes = useStyles();
  const dispatch = useDispatch();
  const authToken = useSelector(authSelectors.selectAuthToken);
  const loading = useSelector(authSelectors.selectLoading);
  const urls = useSelector(urlSelectors.selectUrls);

  const Logout = React.useCallback(async () => {
    dispatch(authActions.logout());
  }, [dispatch, authActions]);

  const Fetch = React.useCallback(async () => {
    await dispatch(urlActions.fetchUrls());
  }, [dispatch]);

  const onDelete = React.useCallback(
    (key) => {
      dispatch(urlActions.deleteUrl(key));
    },
    [dispatch]
  );
  React.useEffect(() => {
    Fetch();
  }, []);

  React.useEffect(() => {
    if (!authToken && !loading) router.push('/login');
  }, [authToken]);
  return (
    <>
      {authToken ? (
        <>
          <Navigation
            Title="Dashboard"
            Links={[
              {
                title: 'Shortening',
                ref: '/'
              },
              {
                title: 'Login',
                ref: '/login',
                condition: !!authToken,
                replacement: (
                  <UserIcon
                    Actions={[{ name: 'Logout', act: Logout }]}
                    Letter={authToken ? authToken.userName[0] : null}
                  />
                )
              }
            ]}
          />
          <Container className={classes.root}>
            <Card>
              <CardContent>
                <Typography variant="h4">Account Info</Typography>
              </CardContent>
              <CardContent>
                <Typography>username: {authToken.userName}</Typography>
                <Typography>email: {authToken.email} </Typography>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <Typography variant="h4">History</Typography>
                {Object.keys(urls || {}).map((key) => (
                  <Container key={key} className={classes.container}>
                    <Grid container direction="row">
                      <a href={urls[key]} className={classes.ref}>
                        <Typography>{`${URL}${key}`}</Typography>
                      </a>

                      <ArrowRightAltIcon />
                      <div className={classes.link}>
                        <Typography>{urls[key]}</Typography>
                      </div>
                      <Button
                        size="small"
                        className={classes.delete}
                        variant="contained"
                        color="secondary"
                        onClick={() => onDelete(key)}
                      >
                        delete
                      </Button>
                    </Grid>
                  </Container>
                ))}
              </CardContent>
              <CardContent />
            </Card>
          </Container>{' '}
        </>
      ) : (
        <LinearProgress />
      )}
    </>
  );
};

export default Dashboard;
