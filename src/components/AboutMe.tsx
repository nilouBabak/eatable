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
import CrockPot from "../images/crock-pot.png";
import { Link } from "react-router-dom";

const styles = (theme: Theme) => ({
  avatar: {
    margin: 10
  },
  bigAvatar: {
    width: 160,
    height: 160
  },
  button: {
    margin: theme.spacing.unit
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  }
});

interface IAboutMeProps extends WithStyles {}
class AboutMe extends Component<IAboutMeProps> {
  render() {
    const { classes } = this.props;
    return (
      <Paper>
        <Grid container direction="column" justify="center" alignItems="center">
          {" "}
          <Avatar
            alt="eatable"
            src={CrockPot}
            className={classNames(classes.avatar, classes.bigAvatar)}
          />
          <Typography> Hello, name</Typography>
          <TextField
            id="outlined-name"
            label="Your Name"
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
          Age : ____
          <br />
          Height : ____
          <br />
          Weight : ____
          <br />
          Gender : ____
          <br />
          Calories Per Day : ___
          <br />
          Dietary Restrictions : ___
          <br />
          Budget : ___
          <br />
          Preferences?
          <br />
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
          >
          <Link to="basket"/>
            Update
          </Button>
        </Grid>
      </Paper>
    );
  }
}

export default withStyles(styles)(AboutMe);
