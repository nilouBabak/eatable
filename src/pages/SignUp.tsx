import React, {Component} from 'react';
import {
  Typography,
  Paper,
  Avatar,
  TextField,
  Button,
  Grid,
  Theme,
  WithStyles,
  withStyles,
} from '@material-ui/core';
import './styles.scss';
import classNames from 'classnames';
import CrockPot from '../images/crock-pot.png';

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

interface ISignUpProps extends WithStyles {}
class SignUp extends Component<ISignUpProps> {
  render() {
    const {classes} = this.props;
    return (
      <Paper>
        <Grid container direction="column" justify="center" alignItems="center">
          {' '}
          <Avatar
            alt="eatable"
            src={CrockPot}
            className={classNames(classes.avatar, classes.bigAvatar)}
          />
          <Typography> eatable</Typography>
          <Typography> healthy dining on a dollar</Typography>
          <TextField
            id="outlined-name"
            label="Name"
            className={classes.textField}
            margin="normal"
            variant="outlined"
          />
          <TextField
            id="outlined-name"
            label="Password"
            className={classes.textField}
            margin="normal"
            variant="outlined"
          />
          <Button
            variant="contained"
            color="primary"
            href="/profile"
            className={classes.button}
          >
            Log In
          </Button>
        </Grid>
      </Paper>
    );
  }
}

export default withStyles(styles)(SignUp);
