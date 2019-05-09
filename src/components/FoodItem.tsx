import React, {Component} from 'react';
import {WithStyles, withStyles} from '@material-ui/core';
import '../pages/styles.scss';
import heart from '../Assets/heart.png';
import booger from '../Assets/booger.png';

const styles = () => {

}

interface IFoodItemState {
    category: string
    recomendedOptions: Array<string>
}
interface IFoodItemProps extends WithStyles {
    category: string,
    recomendedOptions: Array<string>
}
class FoodItem extends Component<IFoodItemProps, IFoodItemState> {
    state = {
        category: this.props.category,
        recomendedOptions: this.props.recomendedOptions
    };

    render() {
        return (
            <div className="ItemsPage">
                <h1>{this.state.category}</h1>
                <hr/>
                <div className="Items">
                    {
                        this.state.recomendedOptions.map((values)=> {
                            return <div className="foodItems">
                                        <a>{values}</a>
                                        <div className="icons">
                                            <a className="heart"><img src={heart} height="35px" width="35px"/></a>
                                            <a className="booger"><img src={booger} height="35px" width="35px"/></a>
                                        </div>
                                </div>
                        })
                    }
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(FoodItem);