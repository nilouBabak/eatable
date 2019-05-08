import React, { Component } from "react";
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
  ExpansionPanelDetails
} from "@material-ui/core";
import "./styles.scss";
import Select from "react-select";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

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

interface IPreferencesProps extends WithStyles {}
class Preferences extends Component<IPreferencesProps, { invisible: boolean }> {
  state = {
    invisible: false
  };

  handleBadgeVisibility = () => {
    this.setState(prevState => ({ invisible: !prevState.invisible }));
  };
  render() {
    const { classes } = this.props;
    const { invisible } = this.state;

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
      { value: "keto", label: "Ketogenic" },
      { value: "paleolithic", label: "Paleolithic" }
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
          <Grid item={true} justify="flex-start" xs={11} style={{padding: "20px"}}>
            <Typography variant="h6" color="inherit">
             My Preferences
            </Typography>
            <Typography color="inherit">
              Choose which preferences you would like to set to help us
              customize your basket
            </Typography>
          </Grid>
        </Grid>

       
          <Grid container style={{paddingRight: "20px", paddingLeft: "20px"}}>
          <Paper
          classes={{ rounded: classes.rounded }}
          elevation={10}
          square={false}
          
        >
            <ExpansionPanel defaultExpanded={true}>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}>
                  Budget
                </Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
              <Grid container={true} direction="column">
                What is your average spend per week?
                <NativeSelect
                  value="{this.state.age}"
                  onChange={() => console.log("this.handleChange('age')")}
                  input={<Input name="age" id="age-native-label-placeholder" />}
                >
                  <option value={10}>Less than $25</option>
                  <option value={20}>$25 - $50</option>
                  <option value={30}>$50 - $100</option>
                  <option value={30}>$50 - $75</option>
                  <option value={30}>Over $100</option>
                </NativeSelect>
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
                <TextField
                  id="standard-name"
                  label="Name"
                  className={classes.textField}
                  value={"this.state.name"}
                  onChange={() => console.log("this.handleChange('name')")}
                  margin="normal"
                />
                <TextField
                  id="standard-name"
                  label="Age"
                  className={classes.textField}
                  value={"this.state.name"}
                  onChange={() => console.log("this.handleChange('name')")}
                  margin="normal"
                />
                <TextField
                  id="standard-name"
                  label="Height"
                  className={classes.textField}
                  value={"this.state.name"}
                  onChange={() => console.log("this.handleChange('name')")}
                  margin="normal"
                />
                <TextField
                  id="standard-name"
                  label="Weight"
                  className={classes.textField}
                  value={"this.state.name"}
                  onChange={() => console.log("this.handleChange('name')")}
                  margin="normal"
                />
              </Grid>
                 </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}> Dietary Restriction</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
              <Grid container={true} direction="column">
                <Typography>
                  We know some of the common dietary restrictions, but if you
                  add a restricted item to your favourites - we will consider it
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
                        checked={!invisible}
                        onChange={this.handleBadgeVisibility}
                      />
                    }
                    label="Allergies"
                  />
                  {this.state.invisible && (
                    <Grid item={true} xs={10}>
                      <Select options={options} isMulti={true} />
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
            href="/basket"
            className={classes.button}
          >
            Save and View Basket
          </Button>
      </Grid>
    );
  }
}

export default withStyles(styles)(Preferences);
