import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./../../App.css";
import "./Località.css";

import Header from "./../Header/Header";
import axios from "axios";
import logo from "./../../assets/img/logo.svg";

import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Row, Container } from "react-bootstrap";
import store from "./../../constants/stores";

class Località extends Component {
  constructor(props) {
    super(props);
    this.state = {
      localitàStore: []
    };
  }
  componentDidMount() {
    axios
      .get(
        "https://mctsuite.it.nttdata-emea.com/preview/tag_ntt_project_work/stores.json"
      )
      .then(res => {
        const località = res.data;
        console.log(res.data);
        this.setState({
          localitàStore: [...località]
        });
      });
  }
  render() {
    const { localitàStore } = this.state;

    const showLocalità = localitàStore.map((element, index) => {
      return (
        <option key={index} value={element.storeSlug}>
          {element.storeName}
        </option>
      );
    });
    return (
      <div className="Località">
        <header className="App-header">
          <img src={logo} className="App-logo-small" alt="logo" />

          <Header></Header>
          <div className="background-header"></div>
        </header>

        <div className="località__filter">
          <div className="loclaità__contenuto">
            <h1 className="Località__main-title">
              Scopri come prenderti cura del tuo giardino
            </h1>
            <div className="Località__content">
              <h2 className="Località__h2">
                Seleziona il tuo negozio di riferimento
              </h2>
              <div className="prova">
                <select name="località" className="Select">
                  {showLocalità}
                </select>
              </div>
            </div>
            <Link to="/main">
              <div className="Località__continua">
                <span>
                  <a href="#">CONTINUA</a>
                </span>
              </div>
            </Link>
          </div>
        </div>
        <div className="Località__padding"></div>
      </div>
    );
  }
}

export default Località;
