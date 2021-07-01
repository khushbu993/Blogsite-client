import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: theme.spacing(2),
  },
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
    },
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  googleButton: {
    marginBottom: theme.spacing(2),
  },
  customBtn: {
    backgroundImage: "linear-gradient(to right, #8e2de2, #4a00e0)",
    "&:hover": {
      backgroundImage: "linear-gradient(to right, #4a00e0, #8e2de2)",
    },
  },
  lockIconColor: {
    backgroundImage: "linear-gradient(to right, #8e2de2, #4a00e0)",
  },
  GoogleBtn: {
    backgroundImage: "linear-gradient(to right, #f50057, #ab003d);",
    "&:hover": {
      backgroundImage: "linear-gradient(to right, #ab003d, #f50057);",
    },
  },
  switchModeColor: {
    color: "#7d5fff",
  },
}));
