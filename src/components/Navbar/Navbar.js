import React, { Component } from "react";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div
        className={`chip ${this.props.navClass}`}
        onClick={this.props.onclick}
        id={this.props.idNav}
      >
        {this.props.chip}
      </div>
    );
  }
}

export default Navbar;
