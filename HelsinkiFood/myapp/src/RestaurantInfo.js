import React, { Component } from 'react';
import './Header.css';
import  RestaurantData from './data/restaurant';

export default class Restaurant extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      address:'',
      type:''
    }
  }

  handleChange =() => {
    this.setState({
      name: this.state.name,
      address: this.state.address,
      type: this.state.type
    })
  }

  render() {
    return(
      <div key={RestaurantData.restaurantId}>
        {RestaurantData.map((postDetail, index)=> {
          return <div key={RestaurantData.restaurantId}><h2>{postDetail.restaurantname}</h2>
          <p>Address: {postDetail.address}</p>
          <p>Recommendation: {postDetail.recommendedMenu}</p>
          </div>
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
