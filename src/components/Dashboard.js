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
    margin: "0px",
    backgroundColor: palette.primary.light,
  },
  // root: {
  //   paddingTop: 56,
  //   height: "100%",
  //   [theme.breakpoints.up("sm")]: {
  //     paddingTop: 64,
  //   },
  // },
  shiftContent: {
    paddingLeft: 290,
  },
  content: {
    height: "100%",
    minHeight: "calc(100vh - 64px)",
  },
}));

const Dashboard = () => {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <Sidebar />
        <div>
          <HeaderDash />
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Dashboard;
