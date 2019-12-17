import React, { Component } from "react";
import "./Result.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Row, Container } from "react-bootstrap";

class Result extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { title, description, url } = this.props;
    return (
      <Row>
        <Col>
          <div className="result__card">
            <h3>{title}</h3>

            <div className="result__container-img">
              <img src="https://www.controradio.it/wp-content/uploads/2019/02/Leroy-Merlin-loja-de-Leiria-Distribuic%CC%A7a%CC%83o-Hoje.jpg"></img>
            </div>
            <p>{description}</p>

            <a href={url}> ECCO COSA ABBIAMO SCELTO PER TE</a>
          </div>
        </Col>
      </Row>
    );
  }
}

export default Result;
