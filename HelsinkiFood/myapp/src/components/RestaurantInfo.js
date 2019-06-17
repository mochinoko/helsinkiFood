import React, { Component } from "react";
import RestaurantData from "../data/restaurant";
import "../styles/RestaurantInfo.css";
import { Row, Grid } from "react-bootstrap";

export default class Restaurant extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      address: "",
      type: ""
    };
  }

  handleChange = () => {
    this.setState({
      name: this.state.name,
      address: this.state.address,
      type: this.state.type
    });
  };

  render() {
    return (
      <div
        className="restaurantInfo-container"
        key={RestaurantData.restaurantId}
      >
        {RestaurantData.map((postDetail, index) => {
          return (
            <div className="rest_cont" key={RestaurantData.restaurantId}>
              <h3>{postDetail.restaurantname}</h3>
              <p>Address: {postDetail.address}</p>
              <p>Recommendation: {postDetail.recommendedMenu}</p>
            </div>
          );
        })}
      </div>
      // <div className='resturantInfo'>
      // <p>{this.state.name}</p>
      // <p>{this.state.address}</p>
      // <p>{this.state.type}</p>
      // </div>
    );
  }
}
