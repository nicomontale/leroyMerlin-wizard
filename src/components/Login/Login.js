import React, { Component } from "react";
import StoreLocations from "./../Località/Località";
import { Redirect } from "react-router-dom";
import axios from "axios";
import "./LoginForm.css";
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: "",
      username: "",
      password: "",
      redirect: false
    };
    this.onChange = this.onChange.bind(this);

    this.loginFunction = this.loginFunction.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
  }

  getLoginInfo(id, authToken) {
    axios({
      method: "GET",
      url: `https://api-dev-commercio.leroymerlin.it/api/v1/customer/1_0_0/profilelight/get/${id}`,
      headers: {
        "x-square-api-key": "testToken",
        "x-square-auth-token": authToken,
        "x-square-user-ID": id
      }
    }).then(res => console.log(res.data));
  }
  loginFunction(username, password) {
    axios({
      method: "POST",
      url:
        "https://api-dev-commercio.leroymerlin.it/api/v1/customer/1_0_0/authentication/login",
      headers: {
        "x-square-api-key": "testToken",
        "Content-Type": "application/json; charset=utf-8"
      },
      data: {
        rememberMe: false,
        username: username,
        password: password
      }
    }).then(res => {
      const response = res.data.status;

      if (response === "KO") {
        console.log("errorio");
      } else {
        const id = res.data.content.customerID;
        const authToken = res.data.content.authenticationToken;
        this.getLoginInfo(id, authToken);
        this.setState({
          redirect: true
        });
      }
    });
  }

  onChange(e) {
    this.setState({ username: e.target.value });
    console.log("Username" + this.state.username);
  }
  onChangePassword(e) {
    this.setState({ password: e.target.value });
    console.log("Username" + this.state.password);
  }
  render() {
    const { username, password } = this.state;
    console.log(username, password);
    if (this.state.redirect) {
      return (
        <Redirect
          to="/località"
          render={props => (
            <StoreLocations {...props} title={`Props through render`} />
          )}
        />
      );
    }
    return (
      <div className="wrapper">
        <div className="form-wrapper">
          <h1>LOGIN</h1>
          <form>
            <div className="firstName">
              <label htmlFor="firstName">Nome</label>
              <input
                type="text"
                placeholder="Nome"
                name="username"
                value={username}
                onChange={this.onChange}
              ></input>
            </div>

            <div className="password">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                placeholder="Password"
                name="password"
                onChange={this.onChangePassword}
                value={password}
              ></input>
            </div>
            <div className="createAccount">
              <button
                onClick={this.loginFunction(username, password)}
                type="submit"
                to="/StoreLocations"
              >
                ACCEDI
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
export default Login;
