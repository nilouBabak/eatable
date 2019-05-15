
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import {withStyles, WithStyles, Theme} from '@material-ui/core/styles';
import { Grid , ExpansionPanel, ExpansionPanelSummary, Typography, ExpansionPanelDetails, Table, TableBody, TableCell, TableRow, Button} from '@material-ui/core';
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import heart from '../Assets/heart.png';
import booger from '../Assets/booger.png';


const styles = (theme: Theme) => ({
  heading: {
    fontWeight: 600
  },

});

interface IBasketProps extends WithStyles {}{
}

interface IBasketState {
  redirectToItems: boolean
  selectedCategory: string
  viewAll: boolean
  expanded: string | null
}

class Basket extends Component<IBasketProps, IBasketState>{
  state = {
    redirectToItems: false,
    selectedCategory: '',
    viewAll: false,
    vegetables : ['Artichoke', 'Cabbage', 'Asparagus', 'Aubergine', 'Beetroot'],
    fruits: ['Melon', 'Raspberry', 'Mango', 'Orange', 'Avacado'],
    grains: ['Farro', 'Amaranth', 'Teff', 'Bulgur', 'Spelt'],
    proteins: ['Tofu', 'Egg', 'Quinoa', 'Almond', 'Turkey'],
    expanded: null
  };

  foodGuideClicked = (category: string ) => {
    console.log('food guide clicked' + category)
    //this.setState({redirectToItems: true, selectedCategory: category});
    this.setState({expanded: category});
  }

  handleChange = (panel: string) => (event : React.ChangeEvent<{}>, expanded: boolean) => {
    this.setState({
      expanded: expanded ? panel : null
    });
  };

  viewAllCategories = () => {
    console.log('view all items in the basket')
    this.setState({redirectToItems: true, viewAll: true});
  }

  render(){
    const { classes } = this.props;
    if (this.state.redirectToItems) {
      return <Redirect to={{ pathname: '/basket-items', category : this.state.selectedCategory, viewAll: this.state.viewAll}}/>
    }
    return(
      <div className="basket-container">
        <h2 className="basket-page-title">Hey There! Discover Your Unique Basket By Choosing a Category Below</h2>
        <Grid container direction="column" justify="center" alignItems="center">
        <div className="food-guide">
          {
            Object.values(FoodGuideCategories).map((values) => {
              return <div className="categories" onClick={() => this.foodGuideClicked(values)}> </div>
            })
          }
        </div>
        </Grid>

        <Grid>
          <ExpansionPanel defaultExpanded={true} expanded={this.state.expanded === 'moreInfo'} onChange={this.handleChange('moreInfo')}>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}>
                  More Info About Your Basket
                </Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Grid container={true} direction="column">
                  <div className="basketInfo">
                    Estimated Cost : $50
                  </div>
                  <div className="nutritional-info">
                    Nutritional Info
                  </div>
                </Grid>
              </ExpansionPanelDetails>
            </ExpansionPanel>
        </Grid>
    
        <Grid>
          <ExpansionPanel defaultExpanded={true} expanded={this.state.expanded === FoodGuideCategories.FRUITS} onChange={this.handleChange(FoodGuideCategories.FRUITS)}>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}>
                  Fruits
                </Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Grid container={true} direction="column">
                  <div>
                    <Table className={classes.table}>
                      <TableBody>
                        {this.state.fruits.map(row => (
                          <TableRow key={row}>
                            <TableCell component="th" scope="row">
                              {row}
                            </TableCell>
                            <TableCell align="right">
                              <a className="heart"><img src={heart} height="35px" width="35px"/></a>
                              <a className="booger"><img src={booger} height="35px" width="35px"/></a>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </Grid>
              </ExpansionPanelDetails>
            </ExpansionPanel>
        </Grid>


        <Grid>
          <ExpansionPanel defaultExpanded={true} expanded={this.state.expanded === FoodGuideCategories.PROTEINS} onChange={this.handleChange(FoodGuideCategories.PROTEINS)}>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}>
                  Proteins
                </Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Grid container={true} direction="column">
                  <div>
                    <Table className={classes.table}>
                      <TableBody>
                        {this.state.proteins.map(row => (
                          <TableRow key={row}>
                            <TableCell component="th" scope="row">
                              {row}
                            </TableCell>
                            <TableCell align="right">
                              <a className="heart"><img src={heart} height="35px" width="35px"/></a>
                              <a className="booger"><img src={booger} height="35px" width="35px"/></a>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </Grid>
              </ExpansionPanelDetails>
            </ExpansionPanel>
        </Grid>

        <Grid>
          <ExpansionPanel defaultExpanded={true} expanded={this.state.expanded === FoodGuideCategories.VEGETABLES} onChange={this.handleChange(FoodGuideCategories.VEGETABLES)}>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}>
                  Vegatables
                </Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Grid container={true} direction="column">
                  <div>
                    <Table className={classes.table}>
                      <TableBody>
                        {this.state.vegetables.map(row => (
                          <TableRow key={row}>
                            <TableCell component="th" scope="row">
                              {row}
                            </TableCell>
                            <TableCell align="right">
                              <a className="heart"><img src={heart} height="35px" width="35px"/></a>
                              <a className="booger"><img src={booger} height="35px" width="35px"/></a>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </Grid>
              </ExpansionPanelDetails>
            </ExpansionPanel>
        </Grid>

        <Grid>
          <ExpansionPanel defaultExpanded={true} expanded={this.state.expanded === FoodGuideCategories.GRAINS} onChange={this.handleChange(FoodGuideCategories.GRAINS)}>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}>
                  Grains
                </Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Grid container={true} direction="column">
                  <div>
                    <Table className={classes.table}>
                      <TableBody>
                        {this.state.grains.map(row => (
                          <TableRow key={row}>
                            <TableCell component="th" scope="row">
                              <a>{row}</a>
                            </TableCell>
                            <TableCell align="right">
                              <a className="heart"><img src={heart} height="35px" width="35px"/></a>
                              <a className="booger"><img src={booger} height="35px" width="35px"/></a>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </Grid>
              </ExpansionPanelDetails>
            </ExpansionPanel>
        </Grid>
      </div>
    )
  }
}

export default withStyles(styles)(Basket);

export enum FoodGuideCategories {
  FRUITS = 'fruits',
  PROTEINS = 'proteins',
  VEGETABLES = 'vegetables',
  GRAINS = 'grains',
}
