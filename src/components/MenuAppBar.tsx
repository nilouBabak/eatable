
import React   from'react';
import classNames from 'classnames';
import { withStyles, WithStyles, Theme }  from  '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import InboxIcon from '@material-ui/icons/Inbox';
import MailIcon from '@material-ui/icons/Mail';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { Drawer, Divider, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';

const linkText = ['Profile', 'Quick Preferences', 'Your Basket', 'Log out'];
const links = ['/profile', '/preferences', '/basket', '/'];
// const linkIcons = 

const styles = (theme: Theme) => ({
 root: {
   flexGrow: 1,
 },
 grow: {
   flexGrow: 1,
 },
 menuButton: {
    marginLeft: 12,
    marginRight: 20,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: 240,
    flexShrink: 0,
  },
  drawerPaper: {
    width: 240,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 8px',
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
});

interface IMenuAppBarProps extends WithStyles  {}

interface IMenuAppBarState {
    auth: boolean,
    anchorEl: any,
    open: boolean
}


class MenuAppBar extends React.Component<IMenuAppBarProps,IMenuAppBarState> {
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


 handleChange = (event: { target: { checked: any; }; }) => {
   this.setState({ auth: event.target.checked });
 };

 handleMenu = (event: { currentTarget: any; }) => {
   this.setState({ anchorEl: event.currentTarget });
 };

 handleClose = () => {
   this.setState({ anchorEl: null });
 };

 render() {
   const { classes } = this.props;
   const { auth, anchorEl } = this.state;
   const open = Boolean(anchorEl);

   return (
     <div className={classes.root}>
       <AppBar position="static">
         <Toolbar>
         <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerOpen}
              className={classNames(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
           <Typography variant="h6" color="inherit" className={classes.grow}>
             Eatable
           </Typography>
           {auth && (
             <div>
               <IconButton
                 aria-owns={open ? 'menu-appbar' : undefined}
                 aria-haspopup="true"
                 onClick={this.handleMenu}
                 color="inherit"
               >
                 <AccountCircle />
               </IconButton>
               <Menu
                 id="menu-appbar"
                 anchorEl={anchorEl}
                 anchorOrigin={{
                   vertical: 'top',
                   horizontal: 'right',
                 }}
                 transformOrigin={{
                   vertical: 'top',
                   horizontal: 'right',
                 }}
                 open={open}
                 onClose={this.handleClose}
               >
                 <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                 <MenuItem onClick={this.handleClose}>My account</MenuItem>
               </Menu>
             </div>
           )}
         </Toolbar>
       </AppBar>
       <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={this.state.open}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={this.handleDrawerClose}>
             Menu <ChevronLeftIcon /> 
            </IconButton>
          </div>
          <Divider />
          <List>
            {linkText.map((text, index) => (
              <ListItem  button component="a" key={text} href={links[index]}>
                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
          <Divider />
        </Drawer>
     </div>
   );
 }
}

export default withStyles(styles)(MenuAppBar);