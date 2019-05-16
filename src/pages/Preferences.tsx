import React, { Component, useContext } from "react";
import {
  Typography,
  Paper,
  TextField,
  Button,
  Grid,
  Theme,
  WithStyles,
  withStyles,
  NativeSelect,
  Input,
  FormGroup,
  FormControlLabel,
  Switch,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  Link,
  Avatar,
  Table,
  TableBody,
  TableRow,
  TableCell
} from "@material-ui/core";
import "./styles.scss";
import { Link as RouterLink } from "react-router-dom";
import basketImg from "./../images/basketImage.png";

import Select from "react-select";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import {
  AppContextConsumer,
  AppContext,
  AppContextInterface,
  AppContextProvider
} from "./../components/AppContext";
import { withRouter } from "react-router-dom";
import classNames from "classnames";

const styles = (theme: Theme) => ({
  avatar: {
    margin: 10
  },
  bigAvatar: {
    width: 160,
    height: 160
  },
  button: {
    margin: theme.spacing.unit * 3,
    padding: theme.spacing.unit
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  },
  formControl: {
    margin: theme.spacing.unit
  },
  smallAvatar: {
    width: 25,
    height: 25
  },
});

interface IPreferencesState {
  invisible: boolean;
  budget: number;
}
interface IPreferencesProps extends WithStyles {}
class Preferences extends Component<any, IPreferencesState> {
  state = {
    invisible: false,
    budget: 25
  };

  handleBadgeVisibility = () => {
    this.setState(prevState => ({ invisible: !prevState.invisible }));
  };

  render() {
    const { classes } = this.props;
    const { invisible, budget } = this.state;
    let value = this.context;

    const options = [
      { value: "Alfalfa sprouts", label: "Alfalfa sprouts" },
      { value: "Artichoke hearts", label: "Artichoke hearts" },
      { value: "Artichoke", label: "Artichoke" },
      { value: "Asparagus", label: "Asparagus" },
      { value: "Bean sprouts", label: "Bean sprouts" },
      { value: "Beans", label: "Beans" },
      { value: "Beets", label: "Beets" },
      { value: "Belgium endive", label: "Belgium endive" },
      { value: "Bok Choy", label: "Bok Choy" },
      { value: "Broccoli", label: "Broccoli" },
      { value: "Brussels sprouts", label: "Brussels sprouts" },
      { value: "Cabbage", label: "Cabbage" },
      { value: "Carrots", label: "Carrots" },
      { value: "Cauliflower", label: "Cauliflower" },
      { value: "Celery", label: "Celery" },
      { value: "Corn", label: "Corn" },
      { value: "Cucumber", label: "Cucumber" },
      { value: "Edamame", label: "Edamame" },
      { value: "Eggplant", label: "Eggplant" },
      { value: "Fiddleheads", label: "Fiddleheads" },
      { value: "Fireweed leaves", label: "Fireweed leaves" },
      { value: "Hearts of palm", label: "Hearts of palm" },
      { value: "Kale", label: "Kale" },
      { value: "Leeks", label: "Leeks" },
      { value: "Lettuce", label: "Lettuce" },
      { value: "Mushrooms", label: "Mushrooms" },
      { value: "Onions", label: "Onions" },
      { value: "Parsnip", label: "Parsnip" },
      { value: "Peas", label: "Peas" },
      { value: "Pepper", label: "Pepper" },
      { value: "Potato", label: "Potato" },
      { value: "Pumpkin", label: "Pumpkin" },
      { value: "Radicchio", label: "Radicchio" },
      { value: "Radishes", label: "Radishes" },
      { value: "Rutabaga (yellow turnip)", label: "Rutabaga (yellow turnip)" },
      { value: "Sauerkraut", label: "Sauerkraut" },
      { value: "Seaweed", label: "Seaweed" },
      { value: "Spinach", label: "Spinach" },
      { value: "Squash", label: "Squash" },
      { value: "Sweet potato", label: "Sweet potato" },
      { value: "Swiss chard", label: "Swiss chard" },
      { value: "Tomatoes", label: "Tomatoes" },
      { value: "Turnip (white turnip)", label: "Turnip (white turnip)" },
      { value: "Vegetables", label: "Vegetables" },
      { value: "Zucchini", label: "Zucchini" },
      { value: "Carrot juice", label: "Carrot juice" },
      { value: "Coleslaw with dressing", label: "Coleslaw with dressing" },
      { value: "Potato salad", label: "Potato salad" },
      { value: "Tomato clam cocktail", label: "Tomato clam cocktail" },
      { value: "Tomato juice", label: "Tomato juice" },
      { value: "Tomato sauce", label: "Tomato sauce" },
      { value: "Vegetable juice cocktail", label: "Vegetable juice cocktail" },
      { value: "Blade roast", label: "Blade roast" },
      { value: "Blade steak", label: "Blade steak" },
      { value: "Composite", label: "Composite" },
      { value: "Cross rib roast", label: "Cross rib roast" },
      { value: "Eye of round roast", label: "Eye of round roast" },
      { value: "Eye of round steak", label: "Eye of round steak" },
      { value: "Flank steak", label: "Flank steak" },
      { value: "Ground", label: "Ground" },
      { value: "Inside (top) round roast", label: "Inside (top) round roast" },
      { value: "Inside (top) round steak", label: "Inside (top) round steak" },
      {
        value: "Outside (bottom) round roast",
        label: "Outside (bottom) round roast"
      },
      {
        value: "Outside (bottom) round steak",
        label: "Outside (bottom) round steak"
      },
      { value: "Rib eye steak", label: "Rib eye steak" },
      { value: "Rib steak", label: "Rib steak" },
      { value: "Rump roast", label: "Rump roast" },
      { value: "Short ribs", label: "Short ribs" },
      { value: "Sirloin tip roast", label: "Sirloin tip roast" },
      { value: "Standing rib roast", label: "Standing rib roast" },
      { value: "Stewing beef", label: "Stewing beef" },
      {
        value: "Strip loin (New York) steak",
        label: "Strip loin (New York) steak"
      },
      {
        value: "T-Bone (Porterhouse) steak",
        label: "T-Bone (Porterhouse) steak"
      },
      { value: "Tenderloin", label: "Tenderloin" },
      { value: "Top sirloin steak", label: "Top sirloin steak" },
      { value: "Composite cuts", label: "Composite cuts" },
      { value: "Cutlets", label: "Cutlets" },
      { value: "Leg", label: "Leg" },
      { value: "Loin", label: "Loin" },
      { value: "Shoulder", label: "Shoulder" },
      { value: "Stewing meat", label: "Stewing meat" },
      { value: "Back ribs", label: "Back ribs" },
      { value: "Centre cut", label: "Centre cut" },
      { value: "Spareribs", label: "Spareribs" },
      { value: "Chicken", label: "Chicken" },
      { value: "Duck", label: "Duck" },
      { value: "Goose", label: "Goose" },
      { value: "Ptarmigan", label: "Ptarmigan" },
      { value: "Spruce grouse", label: "Spruce grouse" },
      { value: "Turkey", label: "Turkey" },
      { value: "Bear", label: "Bear" },
      { value: "Beaver", label: "Beaver" },
      { value: "Bison", label: "Bison" },
      { value: "Caribou (reindeer)", label: "Caribou (reindeer)" },
      { value: "Deer (venison)", label: "Deer (venison)" },
      { value: "Emu", label: "Emu" },
      { value: "Goat", label: "Goat" },
      { value: "Horsemeat", label: "Horsemeat" },
      { value: "Moose", label: "Moose" },
      { value: "Narwhal skin (muktuk)", label: "Narwhal skin (muktuk)" },
      { value: "Ostrich", label: "Ostrich" },
      { value: "Rabbit", label: "Rabbit" },
      { value: "Seal meat", label: "Seal meat" },
      { value: "Kidney", label: "Kidney" },
      { value: "Liver", label: "Liver" },
      { value: "Thymus", label: "Thymus" },
      { value: "Back bacon", label: "Back bacon" },
      { value: "Bologna (baloney)", label: "Bologna (baloney)" },
      { value: "Corned beef", label: "Corned beef" },
      { value: "Cottage roll", label: "Cottage roll" },
      { value: "Deli meat", label: "Deli meat" },
      { value: "Ham", label: "Ham" },
      { value: "Kielbasa (Kolbassa)", label: "Kielbasa (Kolbassa)" },
      {
        value: "Liver sausage (liverwurst)",
        label: "Liver sausage (liverwurst)"
      },
      { value: "Pastrami", label: "Pastrami" },
      { value: "Salami", label: "Salami" },
      { value: "Sausage", label: "Sausage" },
      {
        value: "Vienna sausage (cocktail)",
        label: "Vienna sausage (cocktail)"
      },
      { value: "Wiener (frankfurter)", label: "Wiener (frankfurter)" },
      { value: "Chickpea flour", label: "Chickpea flour" },
      { value: "Cornmeal", label: "Cornmeal" },
      { value: "Oat bran", label: "Oat bran" },
      { value: "Oat flakes", label: "Oat flakes" },
      { value: "Rye flour", label: "Rye flour" },
      { value: "Soy flour", label: "Soy flour" },
      { value: "Bagel", label: "Bagel" },
      { value: "Bread", label: "Bread" },
      { value: "English muffin", label: "English muffin" },
      { value: "Fry bread", label: "Fry bread" },
      { value: "Roll", label: "Roll" },
      { value: "Bread stuffing", label: "Bread stuffing" },
      { value: "Tortilla", label: "Tortilla" },
      { value: "French toast", label: "French toast" },
      { value: "Pancake", label: "Pancake" },
      { value: "Potato pancake", label: "Potato pancake" },
      { value: "Waffle", label: "Waffle" },
      { value: "Macaroni", label: "Macaroni" },
      { value: "Noodles", label: "Noodles" },
      { value: "Pasta", label: "Pasta" },
      { value: "Ramen noodles", label: "Ramen noodles" },
      { value: "Spaghetti", label: "Spaghetti" },
      {
        value: "All Bran Buds with psyllium",
        label: "All Bran Buds with psyllium"
      },
      { value: "All Bran", label: "All Bran" },
      { value: "Almond Raisin Muslix", label: "Almond Raisin Muslix" },
      { value: "Alpha-Bits", label: "Alpha-Bits" },
      { value: "Bran Flakes", label: "Bran Flakes" },
      { value: "Cap'n Crunch", label: "Cap'n Crunch" },
      { value: "Cheerios: Honey Nut", label: "Cheerios: Honey Nut" },
      { value: "Cinnamon Toast Crunch", label: "Cinnamon Toast Crunch" },
      { value: "Corn Bran", label: "Corn Bran" },
      { value: "Fibre 1", label: "Fibre 1" },
      { value: "Froot Loops", label: "Froot Loops" },
      { value: "Fruit & Fibre", label: "Fruit & Fibre" },
      { value: "Granola with Raisins", label: "Granola with Raisins" },
      { value: "Grape-Nuts", label: "Grape-Nuts" },
      { value: "Harvest Crunch", label: "Harvest Crunch" },
      { value: "Just Right", label: "Just Right" },
      { value: "Life", label: "Life" },
      { value: "Lucky Charms", label: "Lucky Charms" },
      {
        value: "Mini-Wheats with White Frosting",
        label: "Mini-Wheats with White Frosting"
      },
      { value: "Muesli", label: "Muesli" },
      { value: "Nesquik", label: "Nesquik" },
      { value: "Oatmeal Crisp Almond", label: "Oatmeal Crisp Almond" },
      {
        value: "Oatmeal Crisp Maple Walnut",
        label: "Oatmeal Crisp Maple Walnut"
      },
      { value: "Oatmeal", label: "Oatmeal" },
      { value: "Raisin Bran", label: "Raisin Bran" },
      { value: "Reese's Puffs", label: "Reese's Puffs" },
      { value: "Shreddies", label: "Shreddies" },
      { value: "Trix", label: "Trix" },
      { value: "WeetabixTM", label: "WeetabixTM" },
      { value: "CRACKERS", label: "CRACKERS" },
      { value: "Milk crackers", label: "Milk crackers" },
      { value: "Saltine (oyster", label: "Saltine (oyster" },
      { value: "Wheat crackers", label: "Wheat crackers" },
      {
        value: "Apple with skin (7cm.diam)",
        label: "Apple with skin (7cm.diam)"
      },
      { value: "Applesauce", label: "Applesauce" },
      { value: "Apricots", label: "Apricots" },
      { value: "Avocado", label: "Avocado" },
      { value: "Banana", label: "Banana" },
      { value: "Blackberries", label: "Blackberries" },
      { value: "Blueberries", label: "Blueberries" },
      { value: "Cherries", label: "Cherries" },
      { value: "Clementine", label: "Clementine" },
      { value: "Cranberries", label: "Cranberries" },
      { value: "Dates", label: "Dates" },
      { value: "Figs", label: "Figs" },
      { value: "Fruit cocktail", label: "Fruit cocktail" },
      { value: "Fruit salad", label: "Fruit salad" },
      { value: "Grapefruit", label: "Grapefruit" },
      { value: "Grapes", label: "Grapes" },
      { value: "Groundcherries", label: "Groundcherries" },
      { value: "Kiwifruit", label: "Kiwifruit" },
      { value: "Lychees (litchis)", label: "Lychees (litchis)" },
      { value: "Mango", label: "Mango" },
      { value: "Melon", label: "Melon" },
      { value: "Nectarine", label: "Nectarine" },
      { value: "Orange", label: "Orange" },
      { value: "Papaya", label: "Papaya" },
      { value: "Peach", label: "Peach" },
      { value: "Pear with skin", label: "Pear with skin" },
      { value: "Pear", label: "Pear" },
      { value: "Pineapple", label: "Pineapple" },
      { value: "Plantain", label: "Plantain" },
      { value: "Plum", label: "Plum" },
      { value: "Pomegranate (9.5cm diam)", label: "Pomegranate (9.5cm diam)" },
      { value: "Prunes", label: "Prunes" },
      { value: "Raisins", label: "Raisins" },
      { value: "Raspberries", label: "Raspberries" },
      { value: "Rhubarb", label: "Rhubarb" },
      { value: "Sawberries", label: "Sawberries" },
      { value: "Tangerine (mandarin)", label: "Tangerine (mandarin)" }
    ];
    const dietOptions = [
      { value: "none", label: "No restrictions" },
      { value: "vegan", label: "Vegan" },
      { value: "vegetarian", label: "Vegetarian" },
      { value: "pescatarian", label: "Pescatarian" },
      { value: "glutenfree", label: "Gluten Free" },
      { value: "keto", label: "Ketogenic" },
      { value: "paleolithic", label: "Paleolithic" }
    ];

    const allergyOptions = [
      { value: "Alfalfa sprouts", label: "Alfalfa sprouts" },
      { value: "Artichoke hearts", label: "Artichoke hearts" },
      { value: "Artichoke", label: "Artichoke" },
      { value: "Asparagus", label: "Asparagus" },
      { value: "Bean sprouts", label: "Bean sprouts" },
      { value: "Beans", label: "Beans" },
      { value: "Beets", label: "Beets" },
      { value: "Belgium endive", label: "Belgium endive" },
      { value: "Bok Choy", label: "Bok Choy" },
      { value: "Broccoli", label: "Broccoli" },
      { value: "Brussels sprouts", label: "Brussels sprouts" },
      { value: "Cabbage", label: "Cabbage" },
      { value: "Carrots", label: "Carrots" },
      { value: "Cauliflower", label: "Cauliflower" },
      { value: "Celery", label: "Celery" },
      { value: "Corn", label: "Corn" },
      { value: "Cucumber", label: "Cucumber" },
      { value: "Edamame", label: "Edamame" },
      { value: "Eggplant", label: "Eggplant" },
      { value: "Fiddleheads", label: "Fiddleheads" },
      { value: "Fireweed leaves", label: "Fireweed leaves" },
      { value: "Hearts of palm", label: "Hearts of palm" },
      { value: "Kale", label: "Kale" },
      { value: "Leeks", label: "Leeks" },
      { value: "Lettuce", label: "Lettuce" },
      { value: "Mushrooms", label: "Mushrooms" },
      { value: "Onions", label: "Onions" },
      { value: "Parsnip", label: "Parsnip" },
      { value: "Peas", label: "Peas" },
      { value: "Pepper", label: "Pepper" },
      { value: "Potato", label: "Potato" },
      { value: "Pumpkin", label: "Pumpkin" },
      { value: "Radicchio", label: "Radicchio" },
      { value: "Radishes", label: "Radishes" },
      { value: "Rutabaga (yellow turnip)", label: "Rutabaga (yellow turnip)" },
      { value: "Sauerkraut", label: "Sauerkraut" },
      { value: "Seaweed", label: "Seaweed" },
      { value: "Spinach", label: "Spinach" },
      { value: "Squash", label: "Squash" },
      { value: "Sweet potato", label: "Sweet potato" },
      { value: "Swiss chard", label: "Swiss chard" },
      { value: "Tomatoes", label: "Tomatoes" },
      { value: "Turnip (white turnip)", label: "Turnip (white turnip)" },
      { value: "Vegetables", label: "Vegetables" },
      { value: "Zucchini", label: "Zucchini" },
      { value: "Carrot juice", label: "Carrot juice" },
      { value: "Coleslaw with dressing", label: "Coleslaw with dressing" },
      { value: "Potato salad", label: "Potato salad" },
      { value: "Tomato clam cocktail", label: "Tomato clam cocktail" },
      { value: "Tomato juice", label: "Tomato juice" },
      { value: "Tomato sauce", label: "Tomato sauce" },
      { value: "Vegetable juice cocktail", label: "Vegetable juice cocktail" },
      { value: "Blade roast", label: "Blade roast" },
      { value: "Blade steak", label: "Blade steak" },
      { value: "Composite", label: "Composite" },
      { value: "Cross rib roast", label: "Cross rib roast" },
      { value: "Eye of round roast", label: "Eye of round roast" },
      { value: "Eye of round steak", label: "Eye of round steak" },
      { value: "Flank steak", label: "Flank steak" },
      { value: "Ground", label: "Ground" },
      { value: "Inside (top) round roast", label: "Inside (top) round roast" },
      { value: "Inside (top) round steak", label: "Inside (top) round steak" },
      {
        value: "Outside (bottom) round roast",
        label: "Outside (bottom) round roast"
      },
      {
        value: "Outside (bottom) round steak",
        label: "Outside (bottom) round steak"
      },
      { value: "Rib eye steak", label: "Rib eye steak" },
      { value: "Rib steak", label: "Rib steak" },
      { value: "Rump roast", label: "Rump roast" },
      { value: "Short ribs", label: "Short ribs" },
      { value: "Sirloin tip roast", label: "Sirloin tip roast" },
      { value: "Standing rib roast", label: "Standing rib roast" },
      { value: "Stewing beef", label: "Stewing beef" },
      {
        value: "Strip loin (New York) steak",
        label: "Strip loin (New York) steak"
      },
      {
        value: "T-Bone (Porterhouse) steak",
        label: "T-Bone (Porterhouse) steak"
      },
      { value: "Tenderloin", label: "Tenderloin" },
      { value: "Top sirloin steak", label: "Top sirloin steak" },
      { value: "Composite cuts", label: "Composite cuts" },
      { value: "Cutlets", label: "Cutlets" },
      { value: "Leg", label: "Leg" },
      { value: "Loin", label: "Loin" },
      { value: "Shoulder", label: "Shoulder" },
      { value: "Stewing meat", label: "Stewing meat" },
      { value: "Back ribs", label: "Back ribs" },
      { value: "Centre cut", label: "Centre cut" },
      { value: "Spareribs", label: "Spareribs" },
      { value: "Chicken", label: "Chicken" },
      { value: "Duck", label: "Duck" },
      { value: "Goose", label: "Goose" },
      { value: "Ptarmigan", label: "Ptarmigan" },
      { value: "Spruce grouse", label: "Spruce grouse" },
      { value: "Turkey", label: "Turkey" },
      { value: "Bear", label: "Bear" },
      { value: "Beaver", label: "Beaver" },
      { value: "Bison", label: "Bison" },
      { value: "Caribou (reindeer)", label: "Caribou (reindeer)" },
      { value: "Deer (venison)", label: "Deer (venison)" },
      { value: "Emu", label: "Emu" },
      { value: "Goat", label: "Goat" },
      { value: "Horsemeat", label: "Horsemeat" },
      { value: "Moose", label: "Moose" },
      { value: "Narwhal skin (muktuk)", label: "Narwhal skin (muktuk)" },
      { value: "Ostrich", label: "Ostrich" },
      { value: "Rabbit", label: "Rabbit" },
      { value: "Seal meat", label: "Seal meat" },
      { value: "Kidney", label: "Kidney" },
      { value: "Liver", label: "Liver" },
      { value: "Thymus", label: "Thymus" },
      { value: "Back bacon", label: "Back bacon" },
      { value: "Bologna (baloney)", label: "Bologna (baloney)" },
      { value: "Corned beef", label: "Corned beef" },
      { value: "Cottage roll", label: "Cottage roll" },
      { value: "Deli meat", label: "Deli meat" },
      { value: "Ham", label: "Ham" },
      { value: "Kielbasa (Kolbassa)", label: "Kielbasa (Kolbassa)" },
      {
        value: "Liver sausage (liverwurst)",
        label: "Liver sausage (liverwurst)"
      },
      { value: "Pastrami", label: "Pastrami" },
      { value: "Salami", label: "Salami" },
      { value: "Sausage", label: "Sausage" },
      {
        value: "Vienna sausage (cocktail)",
        label: "Vienna sausage (cocktail)"
      },
      { value: "Wiener (frankfurter)", label: "Wiener (frankfurter)" },
      { value: "Chickpea flour", label: "Chickpea flour" },
      { value: "Cornmeal", label: "Cornmeal" },
      { value: "Oat bran", label: "Oat bran" },
      { value: "Oat flakes", label: "Oat flakes" },
      { value: "Rye flour", label: "Rye flour" },
      { value: "Soy flour", label: "Soy flour" },
      { value: "Bagel", label: "Bagel" },
      { value: "Bread", label: "Bread" },
      { value: "English muffin", label: "English muffin" },
      { value: "Fry bread", label: "Fry bread" },
      { value: "Roll", label: "Roll" },
      { value: "Bread stuffing", label: "Bread stuffing" },
      { value: "Tortilla", label: "Tortilla" },
      { value: "French toast", label: "French toast" },
      { value: "Pancake", label: "Pancake" },
      { value: "Potato pancake", label: "Potato pancake" },
      { value: "Waffle", label: "Waffle" },
      { value: "Macaroni", label: "Macaroni" },
      { value: "Noodles", label: "Noodles" },
      { value: "Pasta", label: "Pasta" },
      { value: "Ramen noodles", label: "Ramen noodles" },
      { value: "Spaghetti", label: "Spaghetti" },
      {
        value: "All Bran Buds with psyllium",
        label: "All Bran Buds with psyllium"
      },
      { value: "All Bran", label: "All Bran" },
      { value: "Almond Raisin Muslix", label: "Almond Raisin Muslix" },
      { value: "Alpha-Bits", label: "Alpha-Bits" },
      { value: "Bran Flakes", label: "Bran Flakes" },
      { value: "Cap'n Crunch", label: "Cap'n Crunch" },
      { value: "Cheerios: Honey Nut", label: "Cheerios: Honey Nut" },
      { value: "Cinnamon Toast Crunch", label: "Cinnamon Toast Crunch" },
      { value: "Corn Bran", label: "Corn Bran" },
      { value: "Fibre 1", label: "Fibre 1" },
      { value: "Froot Loops", label: "Froot Loops" },
      { value: "Fruit & Fibre", label: "Fruit & Fibre" },
      { value: "Granola with Raisins", label: "Granola with Raisins" },
      { value: "Grape-Nuts", label: "Grape-Nuts" },
      { value: "Harvest Crunch", label: "Harvest Crunch" },
      { value: "Just Right", label: "Just Right" },
      { value: "Life", label: "Life" },
      { value: "Lucky Charms", label: "Lucky Charms" },
      {
        value: "Mini-Wheats with White Frosting",
        label: "Mini-Wheats with White Frosting"
      },
      { value: "Muesli", label: "Muesli" },
      { value: "Nesquik", label: "Nesquik" },
      { value: "Oatmeal Crisp Almond", label: "Oatmeal Crisp Almond" },
      {
        value: "Oatmeal Crisp Maple Walnut",
        label: "Oatmeal Crisp Maple Walnut"
      },
      { value: "Oatmeal", label: "Oatmeal" },
      { value: "Raisin Bran", label: "Raisin Bran" },
      { value: "Reese's Puffs", label: "Reese's Puffs" },
      { value: "Shreddies", label: "Shreddies" },
      { value: "Trix", label: "Trix" },
      { value: "WeetabixTM", label: "WeetabixTM" },
      { value: "CRACKERS", label: "CRACKERS" },
      { value: "Milk crackers", label: "Milk crackers" },
      { value: "Saltine (oyster", label: "Saltine (oyster" },
      { value: "Wheat crackers", label: "Wheat crackers" },
      {
        value: "Apple with skin (7cm.diam)",
        label: "Apple with skin (7cm.diam)"
      },
      { value: "Applesauce", label: "Applesauce" },
      { value: "Apricots", label: "Apricots" },
      { value: "Avocado", label: "Avocado" },
      { value: "Banana", label: "Banana" },
      { value: "Blackberries", label: "Blackberries" },
      { value: "Blueberries", label: "Blueberries" },
      { value: "Cherries", label: "Cherries" },
      { value: "Clementine", label: "Clementine" },
      { value: "Cranberries", label: "Cranberries" },
      { value: "Dates", label: "Dates" },
      { value: "Figs", label: "Figs" },
      { value: "Fruit cocktail", label: "Fruit cocktail" },
      { value: "Fruit salad", label: "Fruit salad" },
      { value: "Grapefruit", label: "Grapefruit" },
      { value: "Grapes", label: "Grapes" },
      { value: "Groundcherries", label: "Groundcherries" },
      { value: "Kiwifruit", label: "Kiwifruit" },
      { value: "Lychees (litchis)", label: "Lychees (litchis)" },
      { value: "Mango", label: "Mango" },
      { value: "Melon", label: "Melon" },
      { value: "Nectarine", label: "Nectarine" },
      { value: "Orange", label: "Orange" },
      { value: "Papaya", label: "Papaya" },
      { value: "Peach", label: "Peach" },
      { value: "Pear with skin", label: "Pear with skin" },
      { value: "Pear", label: "Pear" },
      { value: "Pineapple", label: "Pineapple" },
      { value: "Plantain", label: "Plantain" },
      { value: "Plum", label: "Plum" },
      { value: "Pomegranate (9.5cm diam)", label: "Pomegranate (9.5cm diam)" },
      { value: "Prunes", label: "Prunes" },
      { value: "Raisins", label: "Raisins" },
      { value: "Raspberries", label: "Raspberries" },
      { value: "Rhubarb", label: "Rhubarb" },
      { value: "Sawberries", label: "Sawberries" },
      { value: "Tangerine (mandarin)", label: "Tangerine (mandarin)" }
    ];
    const BasketIcon = (
      <Avatar
        alt="basketIcon"
        src={basketImg}
        className={classes.smallAvatar}
      />
    );
    const savedBasketRows = [
      {
        id: "1",
        name: "Fruity Basket",
        value: BasketIcon
      },
      {
        id: "2",
        name: "Farro Grains",
        value: BasketIcon
      },
      {
        id: "3",
        name: "Lasagna Items",
        value: BasketIcon
      }
    ];

  
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
            <Typography variant="h6" color="inherit">
              My Preferences
            </Typography>
            <Typography color="inherit">
              Choose which preferences you would like to set to help us
              customize your basket
            </Typography>
          </Grid>
        </Grid>

        <Grid container style={{ paddingRight: "20px", paddingLeft: "20px" }}>
          <Paper
            classes={{ rounded: classes.rounded }}
            elevation={10}
            square={false}
          >
            <ExpansionPanel defaultExpanded={true}>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}>Budget</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Grid container={true} direction="column">
                  What is your average spend per week?
                  <AppContextConsumer>
                    {cont =>
                      cont && (
                        <NativeSelect
                          value={cont.preferences.budget}
                          onChange={e => {
                            console.log(e.target.value, "my E");
                            console.log(value, "my val");

                            cont.update("budget", e.target.value, "pref");
                          }}
                          inputProps={{
                            name: "budget",
                            id: "age-native-simple"
                          }}
                          input={
                            <Input
                              name="budget"
                              id="age-native-label-placeholder"
                            />
                          }
                        >
                          <option value={25}>Less than $25</option>
                          <option value={50}>$25 - $50</option>
                          <option value={75}>$50 - $75</option>
                          <option value={100}>$75 - $100</option>
                          <option value={150}>$100-$150</option>
                        </NativeSelect>
                      )
                    }
                  </AppContextConsumer>
                </Grid>
              </ExpansionPanelDetails>
            </ExpansionPanel>

            <ExpansionPanel defaultExpanded={true}>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}>Favourites</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Grid container={true} direction="column">
                  <Typography>
                    {" "}
                    You can set your likes or dislikes here, or as you go when
                    viewing your basket.
                  </Typography>
                  <br />
                  <Typography>Likes</Typography>
                  <Select
                    placeholder="Type to search"
                    options={options}
                    isMulti={true}
                  />
                  <br />
                  <Typography>Dislikes</Typography>

                  <Select
                    placeholder="Type to search"
                    options={options}
                    isMulti={true}
                  />
                </Grid>
              </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}> About me</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Grid container={true} direction="column">
                  <Typography>
                    {" "}
                    Let us know more about you so we can personalize your
                    experience
                  </Typography>
                  <br />
                  <AppContextConsumer>
                    {cont =>
                      cont && (
                        <>
                          <TextField
                            id="standard-name"
                            label="User Name"
                            className={classes.textField}
                            value={cont.personalInfo.name}
                            onChange={e => {
                              cont.update("name", e.target.value, "pers");
                            }}
                            margin="normal"
                          />
                          <TextField
                            id="standard-name"
                            label="Age"
                            className={classes.textField}
                            value={cont.personalInfo.age}
                            onChange={e => {
                              cont.update("age", e.target.value, "pers");
                            }}
                            margin="normal"
                          />
                          <TextField
                            id="standard-name"
                            label="Height"
                            className={classes.textField}
                            value={cont.personalInfo.height}
                            onChange={e => {
                              cont.update("height", e.target.value, "pers");
                            }}
                            margin="normal"
                          />
                          <TextField
                            id="standard-name"
                            label="Weight"
                            className={classes.textField}
                            value={cont.personalInfo.weight}
                            onChange={e => {
                              cont.update("weight", e.target.value, "pers");
                            }}
                            margin="normal"
                          />
                        </>
                      )
                    }
                  </AppContextConsumer>
                </Grid>
              </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}>
                  {" "}
                  Dietary Restriction
                </Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Grid container={true} direction="column">
                  <Typography>
                    We know some of the common dietary restrictions, but if you
                    add a restricted item to your favourites - we will consider
                    it
                  </Typography>
                  <br />

                  <Typography>Type of Diet</Typography>
                  <Select options={dietOptions} isMulti={true} />
                  <br />
                  <FormGroup row>
                    <FormControlLabel
                      control={
                        <Switch
                          color="primary"
                          checked={invisible}
                          onChange={this.handleBadgeVisibility}
                        />
                      }
                      label="Allergies"
                    />
                    {this.state.invisible && (
                      <Grid item={true} xs={10}>
                        <Select options={allergyOptions} isMulti={true} />
                      </Grid>
                    )}
                  </FormGroup>
                </Grid>
              </ExpansionPanelDetails>
            </ExpansionPanel>

            <ExpansionPanel>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}>
                  Your saved Baskets
                </Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Grid container={true} direction="column">
                  <Typography>
                    {" "}
                    We have kept track of the baskets that you saved
                  </Typography>
                  <br />
                  <Typography> Click on a saved basket to view</Typography>
                  &nbsp;
                  <Table className={classes.table}>
                    <TableBody>
                      {savedBasketRows.map(row => (
                        <TableRow key={row.id}>
                          <TableCell component="th" scope="row">
                            {row.name}
                          </TableCell>
                          <TableCell align="right">{row.value}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </Grid>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          </Paper>
        </Grid>
        <Button
          variant="contained"
          color="primary"
          onClick={() => this.props.history.push("/basket")}
          className={classes.button}
        >
          Save and View Basket
        </Button>
      </Grid>
    );
  }
}

export default withStyles(styles)(Preferences);
