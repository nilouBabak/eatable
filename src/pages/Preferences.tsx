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

interface IPreferencesProps extends WithStyles {}
class Preferences extends Component<IPreferencesProps> {
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
            label="Budget"
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
                 <FormControl className={classes.formControl}>
          <InputLabel shrink htmlFor="age-native-label-placeholder">
            Age
          </InputLabel>
          <NativeSelect
            value="{this.state.age}"
            onChange={() => console.log("this.handleChange('age')")}
            input={<Input name="age" id="age-native-label-placeholder" />}
          >
            <option value="">None</option>
            <option value={10}>Ten</option>
            <option value={20}>Twenty</option>
            <option value={30}>Thirty</option>
          </NativeSelect>
          <FormHelperText>Label + placeholder</FormHelperText>
        </FormControl>
          <Button
            variant="contained"
            color="primary"
            href="/profile"
            className={classes.button}
          >
            Save Preferences
          </Button>
        </Grid>
      </Paper>
    );
  }
}

export default withStyles(styles)(Preferences);
