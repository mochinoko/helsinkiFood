import React, { Component } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MenuButtons from "./components/MenuButtons";
import TopTexts from "./components/TopTexts";
import EventMap from "./components/EventMap";
import Input from "./components/Input";
import Search from "./components/Search";
import "./styles/App.css";
import "./styles/Footer.css";
import "./styles/Header.css";
import "./styles/Input.css";
import "./styles/MenuButton.css";
import "./styles/TopTexts.css";
import "./styles/eventMap.css";

class App extends React.Component {
  render() {
    return (
      <div className="flex-container">
        <Header />
        <TopTexts />
        <MenuButtons />
        <Input />
        <Search />
        <EventMap />
        <Footer />
      </div>
    );
  }
}
export default App;
