import { makeStyles } from "@material-ui/core";
import React from "react";
import {
  Divider,
  Drawer,
  Avatar,
  Typography,
  List,
  ListItem,
  Button,
} from "@material-ui/core";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  sideBar: {
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    left: "0px",
    width: "320px",
    height: "100%",
    backgroundColor: "#253053",
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
  drawer: {
    width: 240,
    [theme.breakpoints.up("lg")]: {
      marginTop: 64,
      height: "calc(100% - 64px)",
    },
  },
  root2: {
    backgroundColor: theme.palette.white,
    display: "flex",
    flexDirection: "column",
    height: "100%",
    padding: theme.spacing(4),
  },
  divider: {
    margin: theme.spacing(4, 0, 1),
  },
  // nav: {
  //   marginBottom: theme.spacing(2),
  // },
  // // Above Sidebar.js
  //
  // // Below SidebarNav.js
  // root: {},
  item: {
    display: "flex",
    paddingTop: 0,
    paddingBottom: 0,
  },
  button: {
    color: "#A1A1B5",
    padding: "10px 8px",
    justifyContent: "flex-start",
    textTransform: "none",
    letterSpacing: 0,
    width: "100%",
    fontSize: 14,
    fontWeight: 500,
    "&:hover": {
      color: theme.palette.primary.main,
    },
  },
  icon: {
    color: theme.palette.icon,
    width: 24,
    height: 24,
    display: "flex",
    alignItems: "center",
    marginRight: theme.spacing(1),
  },
  active: {
    color: theme.palette.primary.main,
    fontWeight: theme.typography.fontWeightMedium,
    "& $icon": {
      color: theme.palette.primary.main,
    },
  },
  // Above SidebarNav.js
}));

const Sidebar = () => {
  const classes = useStyles();

  const user = {
    name: "Some Name",
    // avatar: "/images/avatars/avatar_1.png",
    bio: "Lorem ipsum",
  };

  return (
    <div className={classes.sideBar}>
      <Drawer
        anchor="left"
        classes={{ paper: classes.drawer }}
        // onClose={onClose}
        // open={open}
        // variant={variant}
      >
        <div className={classes.root2}>
          <div className={classes.root1}>
            <Avatar
              alt="Person"
              className={classes.avatar}
              // component={RouterLink}
              // src={user.avatar}
              to="/settings"
            />
            <Typography className={classes.name} variant="h4">
              {user.name}
            </Typography>
            <Typography variant="body2">{user.bio}</Typography>
          </div>

          <Divider className={classes.divider} />

          <List className={clsx(classes.root, classes.nav)}>
            <ListItem
              className={classes.item}
              disableGutters
              // key={page.title}
            >
              <Button
                activeClassName={classes.active}
                className={classes.button}
                // component={CustomRouterLink}
                // to={page.href}
              >
                <div className={classes.icon}>I1</div>
                Page Title
              </Button>
            </ListItem>
          </List>
        </div>
      </Drawer>
    </div>
  );
};

export default Sidebar;
