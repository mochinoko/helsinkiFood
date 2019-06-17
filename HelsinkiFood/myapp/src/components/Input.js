import React, { Component } from "react";
import "../styles/Input.css";
import { Form } from "react-bootstrap";

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
    this.handleInput = this.handleInput.bind(this);
  }
  handleInput(e) {
    this.setState = {
      comment: e.target.value
    };
    console.log("handleInput");
  }

  render() {
    return (
      <div className="input">
        <Form onSubmit={this.handleSubmit}>
          <Form.Control
            size="lg"
            type="text"
            placeholder={(this.props.placeholder, "Please enter texts")}
            value={this.props.value}
            onChange={this.handleInput}
          />
        </Form>
      </div>
    );
  }
}

export default Input;
