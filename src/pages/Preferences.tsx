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
  FormControl,
  InputLabel,
  NativeSelect,
  Input,
  FormHelperText,
  FormGroup,
  FormControlLabel,
  Switch,
} from '@material-ui/core';
import './styles.scss';
import Select from 'react-select';

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

interface IPreferencesProps extends WithStyles {}
class Preferences extends Component<IPreferencesProps, {invisible: boolean}> {
    state = {
  invisible: false,
};

handleBadgeVisibility = () => {
  this.setState(prevState => ({ invisible: !prevState.invisible }));
};
  render() {
    const { classes } = this.props;
    const { invisible } = this.state;

    const options = [
      { value: 'chocolate', label: 'Chocolate' },
      { value: 'strawberry', label: 'Strawberry' },
      { value: 'vanilla', label: 'Vanilla' }
    ]
    return (
      <Paper>
         

        <Grid container direction="column"  xs={11}>
        <Typography variant="h6" color="inherit" align="center" >Preferences</Typography>
        <Typography color="inherit" >Choose which preferences you would like to set to help us customize your basket</Typography>

        <FormControl className={classes.formControl}>
          <InputLabel shrink htmlFor="age-native-label-placeholder">
            Budget 
          </InputLabel>
          <NativeSelect
            value="{this.state.age}"
            onChange={() => console.log("this.handleChange('age')")}
            input={<Input name="age" id="age-native-label-placeholder" />}
          >
            <option value={10}>Ten</option>
            <option value={20}>Twenty</option>
            <option value={30}>Thirty</option>
          </NativeSelect>
        </FormControl>
          {/* Add switch controls to modify the form and update what type of preferences the user wants to set */}
          <FormControl className={classes.formControl}>
          <InputLabel shrink htmlFor="age-native-label-placeholder">
            Favourites 
          </InputLabel>
          <NativeSelect
            value="{this.state.age}"
            onChange={() => console.log("this.handleChange('age')")}
            input={<Input name="Add More" id="age-native-label-placeholder" />}
          >
            <option value={10}>Ten</option>
            <option value={20}>Twenty</option>
            <option value={30}>Thirty</option>
          </NativeSelect>
        </FormControl>
        <FormGroup row>
          <FormControlLabel
            control={
              <Switch color="primary" checked={!invisible} onChange={this.handleBadgeVisibility} />
            }
            label="Dietary Restrictions"
          />
           {this.state.invisible && (  <NativeSelect
            value="{this.state.age}"
            onChange={() => console.log("this.handleChange('age')")}
            input={<Input name="age" id="age-native-label-placeholder" />}
          >
            <option value={10}>Vegetarian</option>
            <option value={20}>Pescatarian</option>
            <option value={30}>Keto</option>
          </NativeSelect>)
           }

<FormGroup row>
          <FormControlLabel
            control={
              <Switch color="primary" checked={!invisible} onChange={this.handleBadgeVisibility} />
            }
            label="Allergies"
          />
           {this.state.invisible && (

         <Select options={options} />

           )
           }


        </FormGroup>
        </FormGroup>
       
      

          <Button
            variant="contained"
            color="primary"
            href="/profile"
            className={classes.button}
          >
            Save 
          </Button>
        </Grid>
      </Paper>
    );
  }
}

export default withStyles(styles)(Preferences);
