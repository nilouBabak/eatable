import React, {Component} from 'react';
import {
  Paper,
  Avatar,
  Grid,
  Theme,
  WithStyles,
  withStyles,
} from '@material-ui/core';
import './styles.css';
import classNames from 'classnames';
import UserIcon from '@material-ui/icons/AccountCircle';
import ProfileTabs from '../components/ProfileTabs';

const styles = (theme: Theme) => ({
  avatar: {
    margin: 10,
  },
  bigAvatar: {
    width: 160,
    height: 160,
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
          {' '}
          <Avatar
            alt="eatable"
            className={classNames(classes.avatar, classes.bigAvatar)}
          >
            <UserIcon />
          </Avatar>
          <ProfileTabs />
        </Grid>
      </Paper>
    );
  }
}

export default withStyles(styles)(Profile);
