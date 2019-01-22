import React, { Component } from 'react';
import './Header.css';
import Header from './Header';
import Footer from './Footer';
import SimpleMap from './SimpleMap';
import MenuButtons from './MenuButtons';
import TopTexts from './TopTexts';
import RestaurantInfo from './RestaurantInfo';

class App extends React.Component {

  render() {
    return(
    <div>
      <Header />
      <TopTexts />
      <MenuButtons/>
      <SimpleMap />
      <Footer />
    </div>
  );
  }
}
export default App;
