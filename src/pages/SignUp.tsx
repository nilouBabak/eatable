import React, { Component } from "react";
import {
  Typography,
  Paper,
  Avatar,
  TextField,
  Button,
  Grid,
  Theme,
  WithStyles,
  withStyles
} from "@material-ui/core";
import "./styles.scss";
import classNames from "classnames";
import CrockPot from "../Assets/Logo.png";
import { AppContextConsumer } from "./../components/AppContext";
import {withRouter} from 'react-router-dom'

const styles = (theme: Theme) => ({
  avatar: {
    margin: 10
  },
  bigAvatar: {
    width: 160,
    height: 120,
    padding: "30px",
    paddingBottom: "15px"
  },
  button: {
    marginTop: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 3
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  },
  rounded: {
    borderRadius: "200px 200px 40px 40px",
    margin: theme.spacing.unit * 4
  }
});

interface ISignUpProps extends WithStyles {
  state: any;
}

class SignUp extends Component<any> {
  render() {
    const { classes, state } = this.props;
    return (
      <Paper
        classes={{ rounded: classes.rounded }}
        elevation={4}
        square={false}
      >
        <Grid container direction="column" justify="center" alignItems="center">
          {" "}
          <Avatar
            alt="eatable"
            src={CrockPot}
            className={classNames(classes.avatar, classes.bigAvatar)}
          />
          <Typography variant="h6"> eatable</Typography>
          <Typography variant="subtitle2">
            {" "}
            healthy dining on a dollar
          </Typography>
          <AppContextConsumer>
            {cont =>
              cont && (
                <TextField
                  id="outlined-name"
                  label="Name"
                  className={classes.textField}
                  margin="normal"
                  variant="outlined"
                  onChange={e => cont.update("name", e.target.value, "pers")}
                  value={cont.personalInfo.name}
                />
              )
            }
          </AppContextConsumer>
          <TextField
            id="outlined-name"
            label="Password"
            className={classes.textField}
            type="password"
            margin="normal"
            variant="outlined"
            value="password"
          />

          {/* <Button
            variant="contained"
            color="primary"
            href="/profile"
            className={classes.button}
          >
            Log In
          </Button> */}


        <Button
            variant="contained"
            color="primary"
            onClick={()=> this.props.history.push("/profile")}
            className={classes.button}
          >
          Log In
          </Button>
        </Grid>
      </Paper>
    );
  }
}

export default withStyles(styles)(withRouter(SignUp));
