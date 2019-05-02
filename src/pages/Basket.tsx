
import React, { Component } from 'react';

interface Props {
}

class Basket extends Component {
  constructor(props: Props) {
    super(props);
    this.state = {

    }
  }
  foodGuideClicked = (category: string ) => {
    console.log('food guide clicked' + category)
  }
  render(){
    return(
      <div className="basket-container">
        <h2 className="basket-page-title">Hey There! Discover Your Unique Basket By Choosing a Category Below</h2>
        <div className="food-guide">
          {
            Object.values(FoodGuideCategories).map((values) => {
              return <div className="categories" onClick={() => this.foodGuideClicked(values)}> </div>
            })
          }
        </div>
        <div className="Or">
          <hr/> Or <hr/>
        </div>
        <button className="view-all">View All</button>
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
