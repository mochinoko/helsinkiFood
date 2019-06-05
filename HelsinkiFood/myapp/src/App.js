import React, { Component } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import SimpleMap from "./components/SimpleMap";
import MenuButtons from "./components/MenuButtons";
import TopTexts from "./components/TopTexts";
import RestaurantInfo from "./components/RestaurantInfo";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <TopTexts />
        <MenuButtons />
        <RestaurantInfo />

        <Footer />
      </div>
    );
  }
}
export default App;
