import React, { Component, useContext } from "react";
import {
  Typography,
  Paper,
  TextField,
  Button,
  Grid,
  Theme,
  WithStyles,
  withStyles,
  NativeSelect,
  Input,
  FormGroup,
  FormControlLabel,
  Switch,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  Link
} from "@material-ui/core";
import "./styles.scss";
import { Link as RouterLink } from "react-router-dom";
import Select from "react-select";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import {
  AppContextConsumer,
  AppContext,
  AppContextInterface,
  AppContextProvider
} from "./../components/AppContext";
import {withRouter} from 'react-router-dom'

const styles = (theme: Theme) => ({
  avatar: {
    margin: 10
  },
  bigAvatar: {
    width: 160,
    height: 160
  },
  button: {
    margin: theme.spacing.unit * 3,
    padding: theme.spacing.unit
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  },
  formControl: {
    margin: theme.spacing.unit
  }
});

interface IPreferencesState {
  invisible: boolean;
  budget: number;
}
interface IPreferencesProps extends WithStyles {}
class Preferences extends Component<any, IPreferencesState> {
  state = {
    invisible: false,
    budget: 25
  };

  handleBadgeVisibility = () => {
    this.setState(prevState => ({ invisible: !prevState.invisible }));
  };

  render() {
    const { classes } = this.props;
    const { invisible, budget } = this.state;
    let value = this.context;

    const options = [
      { value: "chocolate", label: "Chocolate" },
      { value: "strawberry", label: "Strawberry" },
      { value: "vanilla", label: "Vanilla" }
    ];
    const dietOptions = [
      { value: "none", label: "No restrictions" },
      { value: "vegan", label: "Vegan" },
      { value: "vegetarian", label: "Vegetarian" },
      { value: "pescatarian", label: "Pescatarian" },
      { value: "glutenfree", label: "Gluten Free" },
      { value: "keto", label: "Ketogenic" },
      { value: "paleolithic", label: "Paleolithic" }
    ];

    const allergyOptions = [
      { value: "chocolate", label: "Banana" },
      { value: "strawberry", label: "Shellfish" },
      { value: "vanilla", label: "Gluten" }
    ];
    return (
      <Grid container direction="column" justify="center" alignItems="center">
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          sm={6}
        >
          <Grid
            item={true}
            justify="flex-start"
            xs={11}
            style={{ padding: "20px" }}
          >
            <Typography variant="h6" color="inherit">
              My Preferences
            </Typography>
            <Typography color="inherit">
              Choose which preferences you would like to set to help us
              customize your basket
            </Typography>
          </Grid>
        </Grid>

        <Grid container style={{ paddingRight: "20px", paddingLeft: "20px" }}>
          <Paper
            classes={{ rounded: classes.rounded }}
            elevation={10}
            square={false}
          >
            <ExpansionPanel defaultExpanded={true}>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}>Budget</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Grid container={true} direction="column">
                  What is your average spend per week?
                  <AppContextConsumer>
                    {cont =>
                      cont && (
                        <NativeSelect
                          value={cont.preferences.budget}
                          onChange={e => {
                            console.log(e.target.value, "my E");
                            console.log(value, "my val");

                            cont.update("budget", e.target.value, "pref");
                          }}
                          inputProps={{
                            name: "budget",
                            id: "age-native-simple"
                          }}
                          input={
                            <Input
                              name="budget"
                              id="age-native-label-placeholder"
                            />
                          }
                        >
                          <option value={25}>Less than $25</option>
                          <option value={50}>$25 - $50</option>
                          <option value={75}>$50 - $75</option>
                          <option value={100}>$75 - $100</option>
                          <option value={150}>$100-$150</option>
                        </NativeSelect>
                      )
                    }
                  </AppContextConsumer>
                </Grid>
              </ExpansionPanelDetails>
            </ExpansionPanel>

            <ExpansionPanel defaultExpanded={true}>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}>Favourites</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Grid container={true} direction="column">
                  <Typography>
                    {" "}
                    You can set your likes or dislikes here, or as you go when
                    viewing your basket.
                  </Typography>
                  <br />
                  <Typography>Likes</Typography>
                  <Select
                    placeholder="Type to search"
                    options={options}
                    isMulti={true}
                  />
                  <br />
                  <Typography>Dislikes</Typography>

                  <Select
                    placeholder="Type to search"
                    options={options}
                    isMulti={true}
                  />
                </Grid>
              </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}> About me</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Grid container={true} direction="column">
                  <Typography>
                    {" "}
                    Let us know more about you so we can personalize your
                    experience
                  </Typography>
                  <br />
                  <AppContextConsumer>
                    {cont =>
                      cont && (
                        <>
                          <TextField
                            id="standard-name"
                            label="User Name"
                            className={classes.textField}
                            value={cont.personalInfo.name}
                            onChange={e => {
                              cont.update("name", e.target.value, "pers");
                            }}
                            margin="normal"
                          />
                          <TextField
                            id="standard-name"
                            label="Age"
                            className={classes.textField}
                            value={cont.personalInfo.age}
                            onChange={e => {
                              cont.update("age", e.target.value, "pers");
                            }}
                            margin="normal"
                          />
                          <TextField
                            id="standard-name"
                            label="Height"
                            className={classes.textField}
                            value={cont.personalInfo.height}
                            onChange={e => {
                              cont.update("height", e.target.value, "pers");
                            }}
                            margin="normal"
                          />
                          <TextField
                            id="standard-name"
                            label="Weight"
                            className={classes.textField}
                            value={cont.personalInfo.weight}
                            onChange={e => {
                              cont.update("weight", e.target.value, "pers");
                            }}
                            margin="normal"
                          />
                        </>
                      )
                    }
                  </AppContextConsumer>
                </Grid>
              </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}>
                  {" "}
                  Dietary Restriction
                </Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Grid container={true} direction="column">
                  <Typography>
                    We know some of the common dietary restrictions, but if you
                    add a restricted item to your favourites - we will consider
                    it
                  </Typography>
                  <br />

                  <Typography>Type of Diet</Typography>
                  <Select options={dietOptions} isMulti={true} />
                  <br />
                  <FormGroup row>
                    <FormControlLabel
                      control={
                        <Switch
                          color="primary"
                          checked={invisible}
                          onChange={this.handleBadgeVisibility}
                        />
                      }
                      label="Allergies"
                    />
                    {this.state.invisible && (
                      <Grid item={true} xs={10}>
                        <Select options={allergyOptions} isMulti={true} />
                      </Grid>
                    )}
                  </FormGroup>
                </Grid>
              </ExpansionPanelDetails>
            </ExpansionPanel>

            <ExpansionPanel>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}>
                  Your saved Baskets
                </Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Grid container={true} direction="column">
                  <Typography>
                    {" "}
                    We have kept track of the baskets that you saved
                  </Typography>
                  <br />
                </Grid>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          </Paper>
        </Grid>
        <Button
            variant="contained"
            color="primary"
            onClick={()=> this.props.history.push("/basket")}
            className={classes.button}
          >
            Save and View Basket
          </Button>
      </Grid>
    );
  }
}

export default withStyles(styles)(Preferences);
