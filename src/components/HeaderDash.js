import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import palette from "../theme/palette";
import { Link as RouterLink } from "react-router-dom";
import clsx from "clsx";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
// import HomeLogo from "../images/homepage.svg";
const useStyles = makeStyles((theme) => ({
  // root: {
  //   flexGrow: 1,
  // },
  // menuButton: {
  //   marginRight: theme.spacing(2),
  // },
  title: {
    flexGrow: 1,
  },
  //
  //
  // Below topbar.css
  //
  root: {
    boxShadow: "none",
    backgroundColor: palette.primary.dark,
  },
  flexGrow: {
    flexGrow: 1,
  },
  link: {
    "font-family": "Roboto",
    display: "flex",
    alignItems: "center",
    padding: "10px 15px",
    textDecoration: "none",
    color: palette.text.link,
    borderRadius: "5px",
    transition: "background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
    "&:hover": {
      textDecoration: "none",
      color: palette.text.link,
      backgroundColor: "rgba(213,213,226,.1)",
    },
  },
  signOutButton: {
    marginLeft: theme.spacing(1),
  },
  //
  // Above Topbar css
  //
}));

const HeaderDash = () => {
  const classes = useStyles();
  return (
    <AppBar className={classes.root}>
      <Toolbar>
        <div className={classes.flexGrow} />
        <a className={classes.link} rel="noopener noreferrer" href="/signin">
          <ExitToAppIcon />
        </a>
      </Toolbar>
    </AppBar>
  );
};

export default HeaderDash;
