import React from "react";
import HeaderDash from "./HeaderDash";
import Sidebar from "./Sidebar";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import theme from "../theme";
import "typeface-roboto";
import palette from "../theme/palette";

const useStyles = makeStyles((theme) => ({
  appMain: {
    paddingLeft: "320px",
    width: "100%",
  },
  root: {
    flexGrow: 1,
    margin: "-8px",
    backgroundColor: palette.primary.light,
  },
}));

const Dashboard = () => {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <HeaderDash />
        <Sidebar />
        <div></div>
      </div>
    </ThemeProvider>
  );
};

export default Dashboard;
