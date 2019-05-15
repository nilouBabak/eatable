import React, {Component} from 'react';
import {WithStyles, withStyles} from '@material-ui/core';
import './styles.scss';
import FoodItem from '../components/FoodItem';

const styles = () => {

}

interface IItemDetailsState {
    category: string
    recomendedOptions: any
    viewAll: boolean
    proteins: string[]
    vegetables: string[]
    fruits: string[]
    grains: string[]
}
interface IItemDetailsProps extends WithStyles {
    location: any
}
class ItemDetails extends Component<IItemDetailsProps, IItemDetailsState> {
    state = {
        category: this.props.location.category,
        viewAll: this.props.location.viewAll,
        recomendedOptions: [],
        vegetables : ['Artichoke', 'Cabbage', 'Asparagus', 'Aubergine', 'Beetroot'],
        fruits: ['Melon', 'Raspberry', 'Mango', 'Orange', 'Avacado'],
        grains: ['Farro', 'Amaranth', 'Teff', 'Bulgur', 'Spelt'],
        proteins: ['Tofu', 'Egg', 'Quinoa', 'Almond', 'Turkey']
    };

    /*constructor(props: IItemDetailsProps) {
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
You are currently viewing nutritional info for Farro.

            
            </div>
        )
    }
}

export default withStyles(styles)(ItemDetails);

export enum FoodGuideCategories {
    FRUITS = 'fruits',
    PROTEINS = 'proteins',
    VEGETABLES = 'vegetables',
    GRAINS = 'grains'
  }
  