import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(2),
  },
  form: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  fileInput: {
    width: "97%",
    margin: "10px 0",
  },
  buttonSubmit: {
    marginBottom: 10,
  },
  btn1: {
    backgroundImage: "linear-gradient(to right, #8e2de2, #4a00e0)",
    "&:hover": {
      backgroundImage: "linear-gradient(to right, #4a00e0, #8e2de2)",
    }
  },
  btn2: {
    backgroundImage: "linear-gradient(to right, #f50057, #ab003d);",
    "&:hover": {
      backgroundImage: "linear-gradient(to right, #ab003d, #f50057);",
    }
  },
}));