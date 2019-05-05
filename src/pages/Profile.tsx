import React, {Component} from 'react';
import {
  Paper,
  Avatar,
  Grid,
  Theme,
  WithStyles,
  withStyles,
  Typography,
} from '@material-ui/core';
import './styles.scss';
import classNames from 'classnames';
import UserIcon from '@material-ui/icons/AccountCircle';
import ProfileTabs from '../components/ProfileTabs';

const styles = (theme: Theme) => ({
  avatar: {
    margin: 10,
  },
  bigAvatar: {
    width: 60,
    height: 60,
  },
  button: {
    margin: theme.spacing.unit,
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
});

interface IProfileProps extends WithStyles {}
class Profile extends Component<IProfileProps> {
  render() {
    const {classes} = this.props;
    return (
      <Paper>
        <Grid container direction="column" justify="center" alignItems="center">
        <Grid container direction="row" justify="center" alignItems="center" sm={6}>
          <Grid item sm={2} ><Avatar
            alt="eatable"
            className={classNames(classes.avatar, classes.bigAvatar)}
          >
            <UserIcon />
          </Avatar>
          </Grid>
          <Grid item sm={4}>
          <Typography> Hello, name</Typography>
          <Typography>Welcome back!</Typography>


          </Grid>
          </Grid>
          <ProfileTabs />
        </Grid>
      </Paper>
    );
  }
}

export default withStyles(styles)(Profile);
