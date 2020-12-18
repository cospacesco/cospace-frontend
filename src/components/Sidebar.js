import { makeStyles } from "@material-ui/core";
import React from "react";
import { Divider, Drawer, Avatar, Typography } from "@material-ui/core";

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
  divider: {
    margin: theme.spacing(4, 0, 1),
  },
  //
  // Below profile.js css
  //
  root1: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    minHeight: "fit-content",
  },
  avatar: {
    width: 60,
    height: 60,
  },
  name: {
    marginTop: theme.spacing(1),
  },
  // Above profile.js css
  //
  // Below Sidebar.js css
  //
  // drawer: {
  //   width: 240,
  //   [theme.breakpoints.up("lg")]: {
  //     marginTop: 64,
  //     height: "calc(100% - 64px)",
  //   },
  // },
  // root: {
  //   backgroundColor: theme.palette.white,
  //   display: "flex",
  //   flexDirection: "column",
  //   height: "100%",
  //   padding: theme.spacing(4),
  // },
  // divider: {
  //   margin: theme.spacing(4, 0, 1),
  // },
  // nav: {
  //   marginBottom: theme.spacing(2),
  // },
  // // Above Sidebar.js
  //
  // // Below SidebarNav.js
  // root: {},
  // item: {
  //   display: "flex",
  //   paddingTop: 0,
  //   paddingBottom: 0,
  // },
  // button: {
  //   color: "#A1A1B5",
  //   padding: "10px 8px",
  //   justifyContent: "flex-start",
  //   textTransform: "none",
  //   letterSpacing: 0,
  //   width: "100%",
  //   fontSize: 14,
  //   fontWeight: 500,
  //   "&:hover": {
  //     color: theme.palette.primary.main,
  //   },
  // },
  // icon: {
  //   color: theme.palette.icon,
  //   width: 24,
  //   height: 24,
  //   display: "flex",
  //   alignItems: "center",
  //   marginRight: theme.spacing(1),
  // },
  // active: {
  //   color: theme.palette.primary.main,
  //   fontWeight: theme.typography.fontWeightMedium,
  //   "& $icon": {
  //     color: theme.palette.primary.main,
  //   },
  // },
  // Allow SidebarNav.js
});

const Sidebar = () => {
  const classes = useStyles();
  return (
    <div className={classes.sideBar}>
      <Drawer
        anchor="left"
        classes={{ paper: classes.drawer }}
        // onClose={onClose}
        // open={open}
        // variant={variant}
      >
        <div>
          <div className={classes.root1}>
            <Avatar
              alt="Person"
              className={classes.avatar}
              // component={RouterLink}
              // src={user.avatar}
              to="/settings"
            />
            <Typography className={classes.name} variant="h4">
              Username
            </Typography>
            <Typography variant="body2">User Bio</Typography>
          </div>

          <Divider className={classes.divider} />

          <SidebarNav className={classes.nav} pages={pages} />
        </div>
      </Drawer>
    </div>
  );
};

export default Sidebar;
