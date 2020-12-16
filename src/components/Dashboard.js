import React from "react";
import HeaderDash from "./HeaderDash";
import Sidebar from "./Sidebar";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  appMain: {
    paddingLeft: "320px",
    width: "100%",
  },
});

const Dashboard = () => {
  const classes = useStyles();
  return (
    <>
      <Sidebar />
      <div className={classes.appMain}>
        <HeaderDash />
      </div>
    </>
  );
};

export default Dashboard;
