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
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button
} from "@material-ui/core";
import "./styles.scss";
import classNames from "classnames";
import UserIcon from "@material-ui/icons/AccountCircle";
import ProfileTabs from "../components/ProfileTabs";

import ThumbDown from "@material-ui/icons/ThumbDownRounded";
import ThumbUp from "@material-ui/icons/ThumbUpRounded";
import ThumbUpDown from "@material-ui/icons/ThumbsUpDownRounded";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const styles = (theme: Theme) => ({
  avatar: {
    margin: 10
  },
  bigAvatar: {
    width: 60,
    height: 60
  },
  button: {
    margin: theme.spacing.unit
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  },
  root: {
  }, 
  rounded: {
    borderRadius: 100
  }
});

interface IProfileProps extends WithStyles {}
class Profile extends Component<IProfileProps> {
  render() {
    const { classes } = this.props;

    const linkText = ["Profile", "Quick Preferences", "Your Basket", "Log out"];
    const links = ["/profile", "/preferences", "/basket", "/"];
    return (

        <Grid container direction="column">
      <Paper style={{borderRadius: 100}} elevation={20} square={false}>

          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            sm={6}
          >
            <Grid item sm={2}>
              <Avatar
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
          {/* <ProfileTabs /> */}

        <Typography variant={"h6"}> Profile Details </Typography>
          
          <Grid>
          <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <Typography className={classes.heading}>Saved Baskets</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Grid container={true} direction="column">
                <Typography> Here is a list of your saved baskets</Typography>
                <br />
              </Grid>
            </ExpansionPanelDetails>
          </ExpansionPanel>

          <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <Typography className={classes.heading}>Favourites</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Grid container={true} direction="column">
                <Typography>
                  <List>
                    {linkText.map((text, index) => (
                      <ListItem
                        button
                        component="a"
                        key={text}
                        href={links[index]}
                      >
                        <ListItemIcon>
                          {index % 2 === 0 ? <ThumbDown /> : <ThumbUp />}
                        </ListItemIcon>
                        <ListItemText primary={text} />
                      </ListItem>
                    ))}
                  </List>
                </Typography>
                <br />
              </Grid>
            </ExpansionPanelDetails>
          </ExpansionPanel>

          <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <Typography className={classes.heading}>About Me</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Grid container={true} direction="column">
                <Typography>
                  {" "}
                  Let us know more about you so we can personalize your
                  experience
                </Typography>
                <br />
              </Grid>
            </ExpansionPanelDetails>
          </ExpansionPanel>

          <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <Typography className={classes.heading}>
                My Preferences
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Grid container={true} direction="column">
                <Typography>
                  <List>
                    {linkText.map((text, index) => (
                      <ListItem
                        button
                        component="a"
                        key={text}
                        href={links[index]}
                      >
                        <ListItemText primary={text} />
                      </ListItem>
                    ))}
                  </List>
                </Typography>
                <br />

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
          </Grid>
      </Paper>

        </Grid>
    );
  }
}

export default withStyles(styles)(Profile);
