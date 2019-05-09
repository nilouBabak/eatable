import React, {Component} from 'react';
import {WithStyles, withStyles} from '@material-ui/core';
import './styles.scss';
import FoodItem from '../components/FoodItem';

const styles = () => {

}

interface IBasketItemsState {
    category: string
    recomendedOptions: any
    viewAll: boolean
    proteins: string[]
    vegetables: string[]
    fruits: string[]
    grains: string[]
}
interface IBasketItemsProps extends WithStyles {
    location: any
}
class BasketItems extends Component<IBasketItemsProps, IBasketItemsState> {
    state = {
        category: this.props.location.category,
        viewAll: this.props.location.viewAll,
        recomendedOptions: [],
        vegetables : ['Artichoke', 'Cabbage', 'Asparagus', 'Aubergine', 'Beetroot'],
        fruits: ['Melon', 'Raspberry', 'Mango', 'Orange', 'Avacado'],
        grains: ['Farro', 'Amaranth', 'Teff', 'Bulgur', 'Spelt'],
        proteins: ['Tofu', 'Egg', 'Quinoa', 'Almond', 'Turkey']
    };

    /*constructor(props: IBasketItemsProps) {
        super(props)
        //TODO make a call to the API to get actual recommendations
        //axios.get and pass the category

        this.setState({recomendedOptions: ['Farro', 'Amaranth', 'Teff', 'Bulgur', 'Spelt']});
    } */
    componentWillMount() {
        this.setState({recomendedOptions: ['Farro', 'Amaranth', 'Teff', 'Bulgur', 'Spelt']});
    }
    render() {
        if(!this.state.viewAll) {
            return <FoodItem category={this.state.category}
            recomendedOptions={this.state.recomendedOptions}
            ></FoodItem>
        } 
        return(
            <div>
                {
                /*Object.values(FoodGuideCategories).map((value) => {
                    return <FoodItem category={value}
                    recomendedOptions={this.state.recomendedOptions}
                    ></FoodItem>
                }) */
            }
                
                <FoodItem category='Vegetables'
                    recomendedOptions={this.state.vegetables}
                ></FoodItem>
                <FoodItem category='Fruits'
                    recomendedOptions={this.state.fruits}
                ></FoodItem>
                <FoodItem category='Grains'
                    recomendedOptions={this.state.grains}
                ></FoodItem>
                <FoodItem category='Proteins'
                    recomendedOptions={this.state.proteins}
                ></FoodItem>
            
            </div>
        )
    }
}

export default withStyles(styles)(BasketItems);

export enum FoodGuideCategories {
    FRUITS = 'fruits',
    PROTEINS = 'proteins',
    VEGETABLES = 'vegetables',
    GRAINS = 'grains'
  }
  