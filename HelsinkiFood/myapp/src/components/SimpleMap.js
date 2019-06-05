import React, { Component } from 'react';
import helsinki from '../pictures/helsinki.jpg';


export default class SimpleMap extends React.Component {

  render() {
    return(
        <div className="map">
        <img src= {helsinki} alt="helsinkimap" width="1000" height="700"/>
        </div>
  );
  }
}
