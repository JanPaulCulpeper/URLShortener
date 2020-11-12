import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Card,
  CardContent,
  Typography,
  Container,
  Grid,
  Button
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import SubdirectoryArrowRightIcon from '@material-ui/icons/SubdirectoryArrowRight';
import blue from '@material-ui/core/colors/blue';
import orange from '@material-ui/core/colors/orange';
import { useRouter } from 'next/router';
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

  if (!loading && !authToken) router.push('/login');
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
                  <Container className={classes.container}>
                    <Typography key={key}>{key}</Typography>
                    <Grid container direction="row">
                      <SubdirectoryArrowRightIcon />
                      <div className={classes.link}>
                        <a className={classes.ref} href={urls[key]}>
                          {urls[key]}
                        </a>
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
        'Loading...'
      )}
    </>
  );
};

export default Dashboard;
