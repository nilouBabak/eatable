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
  rounded: {
    borderRadius: "200px 200px 0 0",
    margin: theme.spacing.unit * 4
  }
});

interface ISignUpProps extends WithStyles {
  state: any
}

class SignUp extends Component<ISignUpProps> {
  render() {
    const {classes, state} = this.props;
    return (
      <Paper classes={{rounded: classes.rounded}} elevation={20} square={false}>
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
            onChange={(e) => this.setState({...state, name: e.target.value}) }
          />
          <TextField
            id="outlined-name"
            label="Password"
            className={classes.textField}
            type="password"
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
