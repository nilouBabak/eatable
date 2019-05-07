import React, {Component} from 'react';
import {WithStyles, withStyles} from '@material-ui/core';
import '../pages/styles.scss';

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
                            return <a>{values}</a>
                        })
                    }
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(FoodItem);