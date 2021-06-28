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
  heading6: {
    background: "-webkit-linear-gradient(360deg, #00dbde 10%, #fc00ff 70%, #00dbde 90%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent"
  },
  fileInput: {
    width: "97%",
    margin: "10px 0",
  },
  buttonSubmit: {
    marginBottom: 10,
  },
  btn1: {
    backgroundImage: "linear-gradient(to right, #00f260, #0575e6);",
    "&:hover": {
      backgroundImage: "linear-gradient(to right, #00c3ff, #ffff1c);",
    }
  },
  btn2: {
    backgroundImage: "linear-gradient(to right, #fc00ff, #00dbde);",
    "&:hover": {
      backgroundImage: "linear-gradient(to right, #00dbde, #fc00ff);",
    }
  },
}));
