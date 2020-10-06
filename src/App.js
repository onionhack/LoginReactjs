import React from "react";
import './App.css'
import user from "../src/assets/user.png";
export default class App extends React.Component {
  state = {
    email: "",
    password: "",
  };
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.submit = this.submit.bind(this);
  }
  handleChange(e) {
    if (e.target.name === "email") {
      this.setState({ email: e.target.value });
    } else {
      this.setState({ password: e.target.value });
    }
  }
  submit(e) {
    e.preventDefault();
    //enviar dados para backend
    alert("enviado os dados para backend válidar");
  }

  render() {
    return (
      <div className="container">
        <div className="container-box">
          <img src={user} alt="img" className="user" />


          <input
            placeholder="Username"
            value={this.state.email}
            name="email"
            onChange={this.handleChange}
          />
          <input
            type="password"
            placeholder="Password"
            value={this.state.password}
            name="password"
            onChange={this.handleChange}
          />

          <button onClick={this.submit}>Entrar</button>
        </div>
      </div>
    );
  }
}
