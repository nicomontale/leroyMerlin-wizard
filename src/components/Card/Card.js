import React, { Component } from "react";

import { ReactComponent as Checked } from "./img/checked.svg";

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const {
      onclick,
      id,
      image,
      title,
      description,
      checkedImgOnClick,
      filter,
      classDiv,
      classTitle,
      classDescription
    } = this.props;
    return (
      <div className={classDiv}>
        <div className="container__img" onClick={onclick}>
          <div className={`filter ${filter}`}>
            <Checked className="filter__checked"></Checked>
          </div>
          <img alt="img_alt" src={image} onClick={checkedImgOnClick} />
        </div>

        <div className={classTitle}>{title}</div>
        <div className={classDescription}>{description}</div>
      </div>
    );
  }
}

export default Card;
