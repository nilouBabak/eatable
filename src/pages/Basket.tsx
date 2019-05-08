
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Grid } from '@material-ui/core';

interface IBasketProps {
}

interface IBasketState {
  redirectToItems: boolean
  selectedCategory: string
  viewAll: boolean
}

class Basket extends Component<IBasketProps, IBasketState>{
  state = {
    redirectToItems: false,
    selectedCategory: '',
    viewAll: false
  }

  foodGuideClicked = (category: string ) => {
    console.log('food guide clicked' + category)
    this.setState({redirectToItems: true, selectedCategory: category});
  }

  viewAllCategories = () => {
    console.log('view all items in the basket')
    this.setState({redirectToItems: true, viewAll: true});
  }

  render(){
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
        <div className="Or">
          <hr/> Or <hr/>
        </div>
        <button className="view-all" onClick={this.viewAllCategories} >View All</button>
      </div>
    )
  }
}

export default Basket;

export enum FoodGuideCategories {
  FRUITS = 'fruits',
  PROTEINS = 'proteins',
  VEGETABLES = 'vegetables',
  GRAINS = 'grains'
}
