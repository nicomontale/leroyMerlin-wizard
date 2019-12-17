import React, { Component } from "react";
import logo from "./../../assets/img/logo.svg";
import "./Header.css";

import { Link } from "react-router-dom";

import { ReactComponent as Help } from "./../../assets/img/aiuto.svg";
import { ReactComponent as Accedi } from "./../../assets/img/accedi.svg";
import search from "./../../assets/img/lente.png";
import { ReactComponent as Località } from "./../../assets/img/localita.svg";
import { ReactComponent as Salvati } from "./../../assets/img/salvati.svg";
import { ReactComponent as Carrello } from "./../../assets/img/carrello.svg";

import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Row, Container } from "react-bootstrap";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="header">
        <Container fluid={true} className="">
          <Row>
            <Col xs={1}>
              <img src={logo} className="App-logo header__logo" alt="logo" />
            </Col>
            <Col xs={3}>
              <Link to="/località" className="shop">
                <div className="header__località">
                  <Località className="header__località-icon"></Località>
                  <div className="header__località-text">
                    <span className="header__località-title">
                      Il mio negozio
                    </span>
                    <span className="header__località-subtitle">
                      Seleziona un negozio
                    </span>
                  </div>
                </div>
              </Link>
            </Col>
            <Col xs={4}>
              <div className="header__search">
                <input
                  className="header__search-text"
                  placeholder="Cosa stai cercando?"
                ></input>
                <img src={search} className="header__search-icon"></img>
              </div>
            </Col>
            <Col xs={4}>
              <nav>
                <ul>
                  <li>
                    <a hre="#">
                      <Help className="header__icon"></Help>
                      <span>Aiuto</span>
                    </a>
                  </li>
                  <li>
                    <Link to="/">
                      <Accedi className="header__icon"></Accedi>
                      <span>Accedi</span>
                    </Link>
                  </li>
                  <li>
                    <a hre="#">
                      <Salvati className="header__icon"></Salvati>
                      <span>Salvati</span>
                    </a>
                  </li>
                  <li>
                    <a hre="#">
                      <Carrello className="header__icon"></Carrello>
                      <span>Aiuto</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Header;
