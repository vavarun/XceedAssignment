import React, { Component } from "react";
import "./App.css";
import Standings from "./Component/Standings";
import { fetchStandings, joinTeamData, sortDataNumerically } from "./services";

class App extends Component {
  state = {
    loading: true,
    data: [],
    column: []
  };

  getStandings = async () => {
    const response = await fetchStandings();
    const data = joinTeamData(response);
    this.setState({ loading: false, data });
  };

  sortColumn = args => {
    const { data, column } = this.state;
    if (column[0] === args.name) sortDataNumerically(data, ...args, column[1]);
    else {
      sortDataNumerically(data, ...args, "asc");
      this.setState({ column: [args.name] });
    }
  };

  componentDidMount() {
    this.getStandings();
  }

  render() {
    const { data } = this.state;
    return <div className="App">{data && <Standings data={data} />}</div>;
  }
}

export default App;
