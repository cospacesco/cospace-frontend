import { makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles({
  sideBar: {
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    left: "0px",
    width: "320px",
    height: "100%",
    backgroundColor: "#253053",
  },
});

const Sidebar = () => {
  const classes = useStyles();
  return <div className={classes.sideBar}></div>;
};

export default Sidebar;
