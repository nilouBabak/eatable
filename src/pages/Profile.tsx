import React, { Component } from "react";
import {
  Paper,
  Avatar,
  Grid,
  Theme,
  WithStyles,
  withStyles,
  Typography,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  Button,
  Table,
  TableRow,
  TableCell,
  TableBody
} from "@material-ui/core";
import "./styles.scss";
import classNames from "classnames";
import UserIcon from "@material-ui/icons/AccountCircle";
import avatarImage from "./../images/avatar.png";
// import ThumbDown from "@material-ui/icons/ThumbDownRounded";
// import ThumbUp from "@material-ui/icons/ThumbUpRounded";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import heart from "../Assets/heart.png";
import booger from "../Assets/booger.png";
import { AppContextConsumer } from "./../components/AppContext";
const styles = (theme: Theme) => ({
  avatar: {
    margin: 10
  },
  bigAvatar: {
    width: 60,
    height: 60
  },
  smallAvatar: {
    width: 25,
    height: 25
  },
  button: {
    margin: theme.spacing.unit
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  },

  rounded: {
    margin: theme.spacing.unit * 2
  }
});

interface IFavouritesObject {
  likes: string[];
  dislikes: string[];
}

interface IPersonalInfoObject {
  name: string;
  age: number;
  weight: number;
  height: number;
}

interface IPreferenceState {
  budget: number;
  dietType: string;
  allergies: string[];
  favourites: IFavouritesObject;
  personalInfo: IPersonalInfoObject;
}

interface IProfileState {
  preferences: IPreferenceState;
}

interface IProfileProps extends WithStyles {}
class Profile extends Component<IProfileProps, IProfileState> {
  state = {
    preferences: {
      budget: 0,
      dietType: "",
      allergies: [],
      favourites: {
        likes: [],
        dislikes: []
      },
      personalInfo: {
        name: "",
        age: 0,
        weight: 0,
        height: 0
      }
    }
  };

  render() {
    const { classes } = this.props;
    const { preferences } = this.state;

    const likeComponent = (
      <Avatar
        alt="avatar"
        src={heart}
        className={classNames(classes.smallAvatar)}
      />
    );
    const dislikeComponent = (
      <Avatar
        alt="avatar"
        src={booger}
        className={classNames(classes.smallAvatar)}
      />
    );

    let id = 0;
    function createData(name: string, value: string) {
      id += 1;
      return { id, name, value };
    }

    // for each preference that is set, create a row with a key and value
    const rows = [
      createData("Budget", "$25-$50"),
      createData("Type of Diet", "Ketogenic"),
      createData("Allergies", "None")
    ];

    const aboutMeRows = [
      {
        id: "5",
        name: "Avatar",
        value: <Avatar alt="avatar" src={avatarImage} />
      },
      {
        id: "1",
        name: "Name",
        value: "Sarah"
      },
      {
        id: "2",
        name: "Age",
        value: "28"
      },
      {
        id: "3",
        name: "Height",
        value: "5'8"
      },
      {
        id: "4",
        name: "Weight",
        value: "170 lbs"
      }
    ];

    const favouritesRows = [
      {
        id: "1",
        name: "Strawberry",
        value: likeComponent
      },
      {
        id: "2",
        name: "Almonds",
        value: likeComponent
      },
      {
        id: "3",
        name: "Lettuce",
        value: likeComponent
      },
      {
        id: "4",
        name: "Yogurt",
        value: dislikeComponent
      }
    ];

    return (
      <Grid container xs={12} direction="column" alignItems="center">
        <Grid
          container={true}
          justify="flex-start"
          xs={11}
          style={{ padding: "20px", paddingBottom: "0px", align: "left" }}
        >
          <Typography variant={"h6"} align="left">
            {" "}
            Profile Details{" "}
          </Typography>
          <Paper style={{ backgroundColor: "lightGrey" }}>
            <Grid container direction="row" alignItems="center" xs={12}>
              <Grid item sm={2}>
                <Avatar
                  alt="avatar"
                  src={avatarImage}
                  className={classNames(classes.avatar, classes.bigAvatar)}
                />
              </Grid>
              <Grid item sm={6} style={{ marginRight: "35px" }}>
                <AppContextConsumer>
                  {appContext =>
                    appContext && (
                      <Typography>
                        Hello {appContext.preferences.personalInfo.name}!
                      </Typography>
                    )
                  }
                </AppContextConsumer>
                <Typography>Welcome back to your profile!</Typography>
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        <Paper
          classes={{ rounded: classes.rounded }}
          elevation={10}
          square={false}
        >
          <Grid>
            <ExpansionPanel defaultExpanded={true}>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}>
                  My Preferences
                </Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Grid container={true} direction="column">
                  <Table className={classes.table}>
                    <TableBody>
                      {rows.map(row => (
                        <TableRow key={row.id}>
                          <TableCell component="th" scope="row">
                            {row.name}
                          </TableCell>
                          <TableCell align="right">{row.value}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                  <ExpansionPanel>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                      <Typography className={classes.heading}>
                        Favourites
                      </Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                      <Grid container={true} direction="column">
                        <Table className={classes.table}>
                          <TableBody>
                            {favouritesRows.map(row => (
                              <TableRow key={row.id}>
                                <TableCell component="th" scope="row">
                                  {row.name}
                                </TableCell>
                                <TableCell align="right">{row.value}</TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </Grid>
                    </ExpansionPanelDetails>
                  </ExpansionPanel>

                  <ExpansionPanel defaultExpanded={true}>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                      <Typography className={classes.heading}>
                        About Me
                      </Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                      <Grid container={true} direction="column">
                        <div>
                          <Table className={classes.table}>
                            <TableBody>
                              {aboutMeRows.map(row => (
                                <TableRow key={row.id}>
                                  <TableCell component="th" scope="row">
                                    {row.name}
                                  </TableCell>
                                  <TableCell align="right">
                                    {row.value}
                                  </TableCell>
                                </TableRow>
                              ))}
                            </TableBody>
                          </Table>
                        </div>
                      </Grid>
                    </ExpansionPanelDetails>
                  </ExpansionPanel>

                  <Button
                    variant="contained"
                    color="primary"
                    href="/preferences"
                    className={classes.button}
                  >
                    Update my preferences
                  </Button>
                </Grid>
              </ExpansionPanelDetails>
            </ExpansionPanel>

            <ExpansionPanel>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}>
                  Saved Baskets
                </Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Grid container={true} direction="column">
                  <Typography> Here is a list of your saved baskets</Typography>
                  <br />
                </Grid>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          </Grid>
        </Paper>
      </Grid>
    );
  }
}

export default withStyles(styles)(Profile);
