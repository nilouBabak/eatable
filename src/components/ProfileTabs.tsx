import React from "react";
import { withStyles, WithStyles, Theme } from "@material-ui/core/styles";
import {
  Typography,
  AppBar,
  Tabs,
  Tab,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Grid,
  Button
} from "@material-ui/core";
import SwipeableViews from "react-swipeable-views";
import PersonPinIcon from "@material-ui/icons/PersonPin";
import FavoriteIcon from "@material-ui/icons/Favorite";
import PhoneIcon from "@material-ui/icons/Phone";

import ThumbDown from "@material-ui/icons/ThumbDownRounded";
import ThumbUp from "@material-ui/icons/ThumbUpRounded";
import ThumbUpDown from "@material-ui/icons/ThumbsUpDownRounded";
import PreferenceIcon from "@material-ui/icons/ListAltRounded";

const linkText = ["Profile", "Quick Preferences", "Your Basket", "Log out"];
const links = ["/profile", "/preferences", "/basket", "/"];

const ProfileListLabel = ["Name", "Age", "Weight", "Gender"];
const ProfileListValue = ["Mike M.", "32", "180lbs", "M"];

const styles = (theme: Theme) => ({
  root: {}
});

interface IProfileTabsProps extends WithStyles {}

interface IProfileTabsState {}

function TabContainer({ children, dir }: { children: any; dir: any }) {
  return (
    <Typography
      align="left"
      component="div"
      dir={dir}
      style={{ padding: 8 * 3 }}
    >
      {children}
    </Typography>
  );
}

class ProfileTabs extends React.Component<
  IProfileTabsProps,
  IProfileTabsState
> {
  state = {
    value: 0
  };

  handleChange = (event: any, value: any) => {
    this.setState({ value });
  };

  handleChangeIndex = (index: any) => {
    this.setState({ value: index });
  };

  render() {
    const { classes } = this.props;

    return (
      <Grid container direction="column" justify="center" alignItems="center">
        <Paper square className={classes.root}>
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            fullWidth
            indicatorColor="secondary"
            textColor="secondary"
          >
            <Tab icon={<PersonPinIcon />} label="About Me" />
            {/* <Tab icon={<ThumbUpDown />} label="Likes" /> */}
            {/* <Tab icon={<FavoriteIcon />} label="Favourites" /> */}
            <Tab icon={<PreferenceIcon />} label="My Preferences" />
          </Tabs>
        </Paper>
        <SwipeableViews
          axis={"x-reverse"}
          index={this.state.value}
          onChangeIndex={this.handleChangeIndex}
        >
          <TabContainer dir="rtl">
            <Grid
              container
              direction="column"
              justify="center"
              alignItems="center"
              xs={12}
            >
              <ul>
                {ProfileListLabel.map((text, index) => (
                  <li key={text}>
                    {ProfileListValue[index]}
                    {/* &nbsp;
                   &nbsp;
                   &nbsp;
                   &nbsp;
                   &nbsp; */}
                    {text}
                  </li>
                ))}
              </ul>
            </Grid>
          </TabContainer>
          <TabContainer dir="rtl">
            <Grid
              container
              direction="column"
              justify="center"
              alignItems="center"
              xs={12}
            >
              <List>
                <ListItem button component="a" key={1} href={"/saved-basket"}>
                  <ListItemText primary={"View My Saved Baskets "} />
                </ListItem>

                <ListItem button component="a" key={2} href={"/favourites"}>
                  <ListItemText primary={"View My Favourites"} />
                </ListItem>
                {/* <ListItem button component="a" key={3} href={"/preferences"}>
                  <ListItemText primary={"Update my preferences"} />
                </ListItem> */}
              </List>
              <Button
                variant="contained"
                color="primary"
                href="/preferences"
                className={classes.button}
              >
                Update my preferences
              </Button>
            </Grid>
          </TabContainer>
          <TabContainer dir="rtl">
            <Grid
              container
              direction="column"
              justify="center"
              alignItems="center"
              xs={12}
            >
              Item Three
            </Grid>
          </TabContainer>
        </SwipeableViews>
      </Grid>
    );
  }
}

export default withStyles(styles, { withTheme: true })(ProfileTabs);
