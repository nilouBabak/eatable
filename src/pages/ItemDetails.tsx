import React, { Component } from "react";
import {
  WithStyles,
  withStyles,
  Grid,
  Typography,
  Button,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  CardActions
} from "@material-ui/core";
import "./styles.scss";
import FoodItem from "../components/FoodItem";
import info from "../images/nutritionInfo.png";

interface IItemDetailsState {
  category: string;
  recomendedOptions: any;
  viewAll: boolean;
  proteins: string[];
  vegetables: string[];
  fruits: string[];
  grains: string[];
}
interface IItemDetailsProps extends WithStyles {
  location: any;
}
const styles = {
  card: {
    maxWidth: 345
  },
  media: {
    width: "248px",
    height: "486px"
  },
  button: {
    margin: "2em"
  }
};
class ItemDetails extends Component<IItemDetailsProps, IItemDetailsState> {
  state = {
    category: this.props.location.category,
    viewAll: this.props.location.viewAll,
    recomendedOptions: [],
    vegetables: ["Artichoke", "Cabbage", "Asparagus", "Aubergine", "Beetroot"],
    fruits: ["Melon", "Raspberry", "Mango", "Orange", "Avacado"],
    grains: ["Farro", "Amaranth", "Teff", "Bulgur", "Spelt"],
    proteins: ["Tofu", "Egg", "Quinoa", "Almond", "Turkey"]
  };

  componentWillMount() {
    this.setState({
      recomendedOptions: ["Farro", "Amaranth", "Teff", "Bulgur", "Spelt"]
    });
  }
  render() {
    const { classes } = this.props;
    return (
      <Grid container direction="column" justify="center" alignItems="center">
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          sm={6}
        >
          <Grid
            item={true}
            justify="flex-start"
            xs={11}
            style={{ padding: "20px" }}
          >
            
            <FoodItem category="Item Details"
            recomendedOptions={["Peaches"]}
            ></FoodItem>
            <Typography color="inherit">
             To learn more about the item Peaches, take a look at the information below. You can like or dislike this item from this page.
            </Typography>
          </Grid>
        </Grid>

        <Card className={classes.card}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={info}
              title="Contemplative Reptile"
            />
            <CardContent>
              {/* <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
          <Typography component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography> */}
            </CardContent>
          </CardActionArea>
          {/*   <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions> */}
        </Card>

        <Button
          variant="contained"
          color="primary"
          href="/basket"
          className={classes.button}
        >
          Back
        </Button>
      </Grid>
    );
  }
}

export default withStyles(styles)(ItemDetails);

export enum FoodGuideCategories {
  FRUITS = "fruits",
  PROTEINS = "proteins",
  VEGETABLES = "vegetables",
  GRAINS = "grains"
}
