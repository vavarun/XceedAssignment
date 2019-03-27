import React, { Component } from "react";
import "./App.css";
import Table from "./Container/Table";
import {
  fetchStandings,
  joinTeamData,
  sortDataNumerically,
  sortDataAlphabetically
} from "./services";

class App extends Component {
  state = {
    loading: true,
    data: [],
    column: ["position", "total", true]
  };

  getStandings = async () => {
    const response = await fetchStandings();
    const data = joinTeamData(response);
    this.setState({ loading: false, data });
  };

  sortColumn = (name, type) => {
    // true equals ascending order and false is descending
    const { data, column } = this.state;
    if (column[0] === name && column[1] === type) {
      if (name === "name") sortDataAlphabetically(data, name, type, !column[2]);
      else sortDataNumerically(data, name, type, !column[2]);
      this.setState({ column: [name, type, !column[2]] });
    } else {
      if (name === "name") sortDataAlphabetically(data, name, type, true);
      else sortDataNumerically(data, name, type, true);
      this.setState({ column: [name, type, false] });
    }
  };

  componentDidMount() {
    this.getStandings();
  }

  render() {
    const { data } = this.state;
    return (
      <div className="App">
        {data && (
          <Table
            sort={(name, type) => this.sortColumn(name, type)}
            data={data}
          />
        )}
      </div>
    );
  }
}

export default App;
