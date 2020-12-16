import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  // menuButton: {
  //   marginRight: theme.spacing(2),
  // },
  title: {
    flexGrow: 1,
  },
}));

const HeaderDash = () => {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          Dashboard Home
        </Typography>
        <Button color="inherit">Logout</Button>
      </Toolbar>
    </AppBar>
  );
};

export default HeaderDash;
