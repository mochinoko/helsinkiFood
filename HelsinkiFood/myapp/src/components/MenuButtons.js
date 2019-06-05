import React, { Component } from 'react';
import RestaurantData from '../data/restaurant';
import RestaurantInfo from './RestaurantInfo';

let everyRestaurantData;
const initialState = {
  name:"",
  address: "",
  type: ""
};

export default class MenuButtons extends React.Component {
   constructor(props) {
    super(props);
    this.state = {
      name: '',
      address:'',
      type:''
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleReset = this.handleReset.bind(this);
  };

  handleClick() {
    this.setState({
      name: this.state.name,
      address: this.state.address,
      type: this.state.type
    });
    console.log(RestaurantData,'button clicked');
    everyRestaurantData = <RestaurantInfo />
 };

  handleReset = () => {
    this.setState({initialState});
    console.log('Result reset');
    return everyRestaurantData ="";
  };

  render() {
    return(
    <div className="buttons">
      <button className="pizzaButton" onClick={this.handleClick}>Pizza</button>
      <button className="sushiButton" onClick={this.handleClick}>Sushi</button>
      <button className="sushiButton" onClick={this.handleClick}>Burger</button>
      <button className="sushiButton" onClick={this.handleClick}>Italian</button>
    <button className="handleReset" onClick={this.handleReset}>Reset</button>
      {everyRestaurantData}
    </div>

  );
  }
}
