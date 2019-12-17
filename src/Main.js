import React, { Component } from "react";
import logo from "./assets/img/logo.svg";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import axios from "axios";

import Header from "./components/Header/Header";
import Card from "./components/Card/Card";
import Result from "./components/Result/Result";

import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Row, Container } from "react-bootstrap";

import tree from "./constants/tree";
import results from "./constants/results";
import steps from "./constants/steps";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 0,
      //Array dove sono tenute le scelte
      checkTree: [],

      //API Steps
      stepStore: [],
      //API Tree
      treeStore: [],
      //API Results
      resultStore: [],

      //Classe navigazione che attiva e disattiva il cosino verde
      navActive: [0, "active"],
      //Checked image
      blurImg: null,
      //Disattivo flexbox se la categoria è 'dimensioni'
      stepCardDisplay: "",
      //check Card dimensioni
      checkDimension: null
    };
  }

  clickNav = e => {
    e.preventDefault();
    const { step, checkTree } = this.state;

    if (e.target.id <= step) {
      this.setState({
        step: parseInt(e.target.id),
        navActive: [parseInt(e.target.id) + 1, "active"],
        checkTree: [...checkTree.slice(0, parseInt(e.target.id))],
        blurImg: null,
        checkDimension: null
      });
    }
  };

  showResults = () => {
    const { step, treeStore, resultStore, checkTree } = this.state;
    // const resultsArr = [
    //   ...treeStore.children[checkTree[0]].children[checkTree[1]].children[
    //     checkTree[2]
    //   ].children[checkTree[3]].results
    // ];
    const navigazione = (selection, treeStore, step) => {
      if (!selection) {
        return undefined;
      }
      if (selection.length < step) {
        return undefined;
      }
      const lastElement = selection.reduce((acc, currentSelection) => {
        if (!acc) {
          return acc;
        }
        return acc.children[currentSelection];
      }, treeStore);
      if (!lastElement) {
        return undefined;
      }
      return lastElement.results;
    };
    const resultsArr = navigazione(checkTree, treeStore, step);

    //Faccio la map di resultStore (API) dove resultArr uguale a resultStore mi credo l'elemento
    return resultStore.map((element, index) => {
      for (let i = 0; i < resultsArr.length; i++) {
        if (resultsArr[i] === index + 1) {
          return (
            <Result
              key={index}
              title={element.title}
              description={element.description}
              url={element.url}
            ></Result>
          );
        }
      }
    });
  };
  showStep = () => {
    const {
      stepStore,
      step,
      checkTree,
      treeStore,
      resultStore,
      blurImg,
      stepCardDisplay,
      checkDimension
    } = this.state;

    const stepArr = [];
    for (let i = 0; i < stepStore.length; i++) {
      stepArr[i] = stepStore[i].answers;
    }

    if (step < stepStore.length) {
      return stepArr[step].map((element, index) => {
        if (element.image === null) {
          if (checkDimension === index) {
            return (
              <div
                className="step-card__dimensioni step-card__dimensioni--active"
                key={index}
                onClick={() => {
                  const { checkTree } = this.state;
                  checkTree[step] = index;
                  this.setState({
                    checkTree: checkTree,
                    checkDimension: index
                  });
                }}
              >
                <div className="step-card__dimensioni__title">
                  <span className="">{element.title}</span>
                </div>
                <div className="step-card__dimensioni__description">
                  <span>{element.description}</span>
                </div>
              </div>
            );
          } else {
            return (
              <div
                className="step-card__dimensioni"
                key={index}
                onClick={() => {
                  const { checkTree } = this.state;
                  checkTree[step] = index;
                  this.setState({
                    checkTree: checkTree,
                    checkDimension: index
                  });
                }}
              >
                {element.image ? (
                  <img src={require(`./assets/img/${element.image}`)}></img>
                ) : null}
                <div className="step-card__dimensioni__title">
                  <span>{element.title}</span>
                </div>
                <div className="step-card__dimensioni__description">
                  <span>{element.description}</span>
                </div>
              </div>
            );
          }
        } else {
          if (blurImg === index) {
            return (
              <Card
                classDiv="step-card"
                key={index}
                onclick={() => {
                  this.setState({
                    blurImg: index
                  });
                }}
                image={require(`./assets/img/${element.image}`)}
                checkedImgOnClick={() => {
                  const { checkTree } = this.state;
                  checkTree[step] = index;
                  this.setState({
                    checkTree: checkTree
                  });
                }}
                filter={"filter--active"}
                title={element.title}
                classTitlte="title"
                description={element.description}
                classDescription="description"
              ></Card>
            );
          } else {
            return (
              <Card
                classDiv="step-card"
                key={index}
                onclick={() => {
                  this.setState({
                    blurImg: index
                  });
                }}
                image={require(`./assets/img/${element.image}`)}
                checkedImgOnClick={() => {
                  const { checkTree } = this.state;
                  checkTree[step] = index;
                  this.setState({
                    checkTree: checkTree
                  });
                }}
                filter={""}
                title={element.title}
                classTitle="classTItle"
                description={element.description}
                classDescription="description"
              ></Card>
            );
          }
        }
      });
    } else {
      return null;
    }
  };

  nextStep = () => {
    const { step } = this.state;

    this.setState({
      step: parseInt(step) + 1,
      navActive: [parseInt(step + 1), "active"],
      blurImg: null,
      checkDimension: null
    });
  };
  componentDidMount() {
    axios
      .get(
        `https://mctsuite.it.nttdata-emea.com/preview/tag_ntt_project_work/wizard_config.json`
      )
      .then(res => {
        const persons = res.data;
        this.setState({
          treeStore: persons.tree,
          resultStore: persons.results,
          stepStore: persons.steps
        });
      });
  }

  render() {
    const {
      stepStore,
      navActive,
      step,
      treeStore,
      checkTree,
      resultStore,
      stepCardDisplay
    } = this.state;

    const showTitle = stepStore.map((element, index) => {
      if (index === step) {
        return <h1>{element.question}</h1>;
      }
    });

    console.log(checkTree);
    console.log("step " + step);
    const navArray = stepStore.map((element, index) => {
      if (index - 1 < step) {
        return (
          <Navbar
            navClass={navActive[1]}
            key={index}
            idNav={index}
            chip={element.category}
            onclick={this.clickNav}
          ></Navbar>
        );
      } else {
        return (
          <Navbar
            onclick={this.clickNav}
            navClass={""}
            key={index}
            idNav={index}
            chip={element.category}
          ></Navbar>
        );
      }
    });

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo-small" alt="logo" />

          <Header></Header>
          <div className="background-header"></div>
        </header>
        <div className="App-container">
          {/* CHIP CONTAINER */}

          <div className="chip-container">{navArray}</div>

          {/*Title div */}
          {step + 1 <= stepStore.length ? (
            <div className="main-title">{showTitle}</div>
          ) : (
            <div className="main-title">
              <h1>Ecco cosa ti aiuterà a svolgere meglio il tuo lavoro!</h1>
            </div>
          )}

          {/* CARDS CONTAIONER  */}
          {step === 3 ? (
            <div className="cards-container--deactive">{this.showStep()}</div>
          ) : (
            <div className="cards-container">{this.showStep()}</div>
          )}
        </div>
        {/*RISULTATI */}
        <Container>
          {step + 1 > stepStore.length ? (
            <div className="result">{this.showResults()}</div>
          ) : null}
        </Container>

        {/* BUTTON */}
        {step + 1 > stepStore.length ? null : (
          <div className="button-container">
            {checkTree[step] !== undefined ? (
              <div
                className="button "
                onClick={checkTree[step] !== undefined ? this.nextStep : null}
              >
                <span>CONTINUA</span>
              </div>
            ) : (
              <div
                className="button disabled"
                onClick={checkTree[step] !== undefined ? this.nextStep : null}
              >
                <span>CONTINUA</span>
              </div>
            )}
          </div>
        )}
      </div>
    );
  }
}

export default Main;
