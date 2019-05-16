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
    item: this.props.location.item,
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
      <Grid container direction="column" justify="center" alignItems="center"  style={{ padding: 20 }}>
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
            style={{ padding: "20px", paddingTop: "0px" }}
          >
            
            <div style={{ fontWeight: 600,  fontSize: 17, marginBottom: 10}}>
            {this.state.item}
            </div>
{this.state.item === "Farro" && (
  <Typography color="inherit"  style={{ padding: "20px", paddingTop: "0px" }}>
  Farro is a food composed of the grains of certain wheat species, sold dried, and prepared by cooking in water until soft. People eat it plain, and often use it as an ingredient in salads, soups, and other dishes.
 </Typography>

)}
{this.state.item === "Mango" && (
  <Typography color="inherit"  style={{ padding: "20px", paddingTop: "0px" }}>
  Did you know? More fresh mangoes are eaten around the world every day than any other fruit. Mangoes are great for smoothies and more!
   </Typography>

)}
            <Typography color="inherit">
             Here are the nutritional facts of {this.state.item}:
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
