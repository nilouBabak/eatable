import React, {Component} from 'react';
import {WithStyles, withStyles} from '@material-ui/core';
import './styles.scss';

const styles = () => {

}

interface IBasketItemsState {
    category: string
    recomendedOptions: any
}
interface IBasketItemsProps extends WithStyles {
    location: any
}
class BasketItems extends Component<IBasketItemsProps, IBasketItemsState> {
    state = {
        category: this.props.location.category,
        recomendedOptions: []
    };

    componentDidMount() {
        //TODO make a call to the API to get actual recommendations
        //axios.get and pass the category
        this.setState({recomendedOptions: ['Farro', 'Amaranth', 'Teff', 'Bulgur', 'Spelt']});
    }
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

export default withStyles(styles)(BasketItems);