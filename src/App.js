import React, { Component } from "react";
import "./App.css";
import Standings from "./Standings";
import { fetchStandings, joinTeamData } from "./services";

class App extends Component {
  state = {
    loading: true,
    data: []
  };

  getStandings = async () => {
    const response = await fetchStandings();
    const data = joinTeamData(response);
    this.setState({ loading: false, data });
  };

  componentDidMount() {
    this.getStandings();
  }

  render() {
    const { data } = this.state;
    console.log(data);
    return <div className="App">{data && <Standings data={data} />}</div>;
  }
}

export default App;
