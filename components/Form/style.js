import { makeStyles } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import orange from '@material-ui/core/colors/orange';

const useStyles = makeStyles({
  card: {
    marginTop: 50,
    margin: '0 auto',
    maxWidth: 600
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  input: {
    marginBottom: 30,
    width: '100%'
  },
  buttons: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center'
  },
  title: {
    textAlign: 'center'
  },
  text: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    marginBottom: 20
  },
  link: {
    marginLeft: 10,
    color: blue[800],
    '&:hover': {
      color: orange[800],
      cursor: 'pointer',
      textDecoration: 'underline'
    }
  }
});

export default useStyles;
