import React, { Component } from "react";
import "./App.css";
import Standings from "./component/Standings";
import {
  fetchStandings,
  joinTeamData,
  sortDataNumerically,
  sortDataAlphabetically
} from "./services";

export const ThemeContext = React.createContext({
  mobile: false // 850px triggers smaller table
});

class App extends Component {
  state = {
    loading: true,
    data: [],
    column: ["position", "total", true]
  };

  getStandings = async () => {
    const response = await fetchStandings();
    const data = joinTeamData(response);
    const matchDay = response.season.currentMatchday;
    this.setState({ loading: false, data, matchDay });
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

  setDevice = () => {
    this.setState({ mobile: window.innerWidth < 850 ? true : false });
  };

  componentDidMount() {
    this.getStandings();
    window.addEventListener("resize", this.setDevice);
    this.setDevice();
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.setDevice);
  }

  render() {
    const { loading, data, matchDay, column } = this.state;
    return (
      <ThemeContext.Provider value={this.state}>
        <div className="App">
          {loading && data ? (
            <div className="loader" />
          ) : (
            <Standings
              sort={(name, type) => this.sortColumn(name, type)}
              data={data}
              matchDay={matchDay}
              column={column}
            />
          )}
        </div>
      </ThemeContext.Provider>
    );
  }
}

export default App;
