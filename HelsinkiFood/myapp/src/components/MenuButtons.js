import React, { Component } from "react";
import RestaurantData from "../data/restaurant";
import RestaurantInfo from "./RestaurantInfo";
import "../styles/MenuButton.css";
import { Button, ButtonToolbar } from "react-bootstrap";

let everyRestaurantData;
const initialState = {
  name: "",
  address: "",
  type: ""
};

export default class MenuButtons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      address: "",
      type: ""
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleClick() {
    this.setState({
      name: this.state.name,
      address: this.state.address,
      type: this.state.type
    });
    console.log(RestaurantData, "button clicked");
    everyRestaurantData = <RestaurantInfo />;
  }

  handleReset = () => {
    this.setState({ initialState });
    console.log("Result reset");
    return (everyRestaurantData = "");
  };

  render() {
    return (
      <div className="buttons-container">
        <ButtonToolbar>
          <Button className="menuButton" onClick={this.handleClick}>
            Pizza
          </Button>
          <Button className="menuButton" onClick={this.handleClick}>
            Sushi
          </Button>
          <Button className="menuButton" onClick={this.handleClick}>
            Burger
          </Button>
          <Button className="menuButton" onClick={this.handleClick}>
            Italian
          </Button>
          <Button className="handleResetButton" onClick={this.handleReset}>
            Return
          </Button>
          {everyRestaurantData}
        </ButtonToolbar>
      </div>
    );
  }
}
