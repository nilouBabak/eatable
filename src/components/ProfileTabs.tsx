import React from 'react';
import {withStyles, WithStyles, Theme} from '@material-ui/core/styles';

const styles = () => ({
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
});

interface IProfileTabsProps extends WithStyles {}

interface IProfileTabsState {
}

class ProfileTabs extends React.Component<
  IProfileTabsProps,
  IProfileTabsState
> {
  render() {
    const {classes} = this.props;

    return <div className={classes.root}> I am a profile tab component</div>;
  }
}

export default withStyles(styles)(ProfileTabs);
