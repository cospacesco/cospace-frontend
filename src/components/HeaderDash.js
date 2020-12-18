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
    <AppBar {...rest} className={clsx(classes.root, className)}>
      <Toolbar>
        <RouterLink to="/">
          <img alt="Logo" src="/images/logo/logo.svg" />
        </RouterLink>
        <div className={classes.flexGrow} />
        <a
          className={classes.link}
          rel="noopener noreferrer"
          target="_blank"
          href="https://github.com/cube-js/cube.js"
        >
          <img alt="GitHub" src="/images/github.svg" />
          <span className={classes.git}>Github</span>
        </a>
        <a
          className={classes.link}
          rel="noopener noreferrer"
          target="_blank"
          href="https://slack.cube.dev/"
        >
          <img alt="Slack" src="/images/slack.svg" />
          <span className={classes.git}>Slack</span>
        </a>
      </Toolbar>
    </AppBar>
  );
};

export default HeaderDash;
