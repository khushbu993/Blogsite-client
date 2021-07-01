import { makeStyles } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 50px',
  },
  heading: {
    fontWeight: "800",
    background:
      "-webkit-linear-gradient(360deg, #40e0d0 20%, #ff8c00 50%, #ff0080 90%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
  image: {
    marginLeft: '15px',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '400px',
  },
  profile: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '400px',
  },
  userName: {
    display: 'flex',
    alignItems: 'center',
  },
  brandContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
  btnSignIn: {
    backgroundImage: "linear-gradient(to right, #8e2de2, #4a00e0)",
    "&:hover": {
      backgroundImage: "linear-gradient(to right, #4a00e0, #8e2de2)",
    }
  },
  btnSignOut: {
    backgroundImage: "linear-gradient(to right, #f50057, #ab003d);",
    "&:hover": {
      backgroundImage: "linear-gradient(to right, #ab003d, #f50057);",
    }
  },
}));