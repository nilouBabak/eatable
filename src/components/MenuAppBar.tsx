import React from "react";
import classNames from "classnames";
import { withStyles, WithStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import BasketIcon from "@material-ui/icons/ShoppingBasket";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import InboxIcon from "@material-ui/icons/Inbox";
import MailIcon from "@material-ui/icons/Mail";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import basketImg from "./../images/basketImage.png";
import { withRouter } from "react-router-dom";
import { Route, Redirect } from "react-router";

import {
  Drawer,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Avatar,
  Button
} from "@material-ui/core";
// import { RouterLink } from "react-router-dom";
const linkText = ["Profile", "Quick Preferences", "Your Basket", "Log out"];
const links = ["/profile", "/preferences", "/basket", "/"];
// const linkIcons =

const styles = (theme: Theme) => ({
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20
  },
  hide: {
    display: "none"
  },
  drawer: {
    width: 240,
    flexShrink: 0
  },
  drawerPaper: {
    width: 240
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: "0 8px",
    ...theme.mixins.toolbar,
    justifyContent: "flex-end"
  }
});

interface IMenuAppBarProps extends WithStyles {}

interface IMenuAppBarState {
  auth: boolean;
  anchorEl: any;
  open: boolean;
}

class MenuAppBar extends React.Component<any, IMenuAppBarState> {
  state = {
    auth: true,
    anchorEl: null,
    open: false
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  handleClick = (event: { currentTarget: any }) => {
    this.setState({ anchorEl: event.currentTarget });
  };
  handleChange = (event: { target: { checked: any } }) => {
    this.setState({ auth: event.target.checked });
  };

  handleMenu = (event: { currentTarget: any }) => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { classes, history } = this.props;
    const { auth, anchorEl } = this.state;
    const open = Boolean(anchorEl);
    console.log(this.props.history.location.pathName, "auth");

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={() => history.push("/basket")}
              className={classNames(classes.menuButton, open && classes.hide)}
            >
              <BasketIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" className={classes.grow}>
              eatable
            </Typography>

            <div>
              <Button
                aria-owns={anchorEl ? "simple-menu" : undefined}
                aria-haspopup="true"
                onClick={this.handleClick}
              >
                <AccountCircle style={{ color: "#ffff" }} />
              </Button>
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={this.handleClose}
              >
                <MenuItem onClick={() => {  this.setState({ anchorEl: null }); this.props.history.push("/profile")}}>
                  Profile
                </MenuItem>
                <MenuItem
                  onClick={() => {  this.setState({ anchorEl: null }); this.props.history.push("/preferences")}}
                >
                  Preferences
                </MenuItem>
                <MenuItem onClick={() => {  this.setState({ anchorEl: null }); this.props.history.push("/basket")}}>
                  My basket
                </MenuItem>
                <MenuItem onClick={() => {  this.setState({ anchorEl: null });this.props.history.push("/")}}>
                  Logout
                </MenuItem>
              </Menu>
            </div>
          </Toolbar>
        </AppBar>
        </div>
    );
  }
}

export default withStyles(styles)(withRouter(MenuAppBar));
