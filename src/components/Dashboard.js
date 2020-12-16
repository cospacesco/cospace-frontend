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
      <HeaderDash />
      <Sidebar />
    </>
  );
};

export default Dashboard;
