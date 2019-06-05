import React, { Component } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MenuButtons from "./components/MenuButtons";
import TopTexts from "./components/TopTexts";
import EventMap from "./components/EventMap";
import "./styles/App.css";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <TopTexts />
        <MenuButtons />
        <EventMap />
        <Footer />
      </div>
    );
  }
}
export default App;
