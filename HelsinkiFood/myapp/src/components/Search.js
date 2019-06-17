import React, { Component } from "react";
import { Button, ButtonToolbar } from "react-bootstrap";
import "../styles/Search.css";

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      address: "",
      type: ""
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      name: this.state.name,
      address: this.state.address,
      type: this.state.type
    });
    console.log("Submitted");
  }

  render() {
    return (
      <div className="button-container">
        <ButtonToolbar>
          <Button
            as="input"
            type="submit"
            value="Submit"
            onClick={this.onClick}
          />
        </ButtonToolbar>
      </div>
    );
  }
}
