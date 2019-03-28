import React, { Component } from "react";
import { ThemeContext } from "../App";

class Table extends Component {
  onImgError = e => {
    e.target.onerror = null;
    e.target.src = "/favicon.png";
  };

  onMouseOver = e => (e.target.style.color = "#92daec");

  onMouseOut = e => (e.target.style.color = "#fff");

  onTeamClick = team => alert(`Go to ${team.total.team.name} official website`);

  render() {
    const { data } = this.props;

    return (
      <ThemeContext.Consumer>
        {({ mobile }) => (
          <>
            {data.length &&
              data.map((team, i) => (
                <div
                  key={i}
                  className={`${
                    mobile ? "standingsMobileTable" : "standingsTable"
                  } rowStyle`}
                >
                  <div className="position">{team.total.position}</div>
                  <div className="trend">x</div>
                  <div className="crest">
                    <img
                      style={{
                        height: "20px"
                      }}
                      src={team.total.team.crestUrl}
                      alt={team.total.team.name}
                      onError={this.onImgError}
                    />
                  </div>
                  <div
                    className="name"
                    style={{ cursor: "pointer" }}
                    onMouseOver={this.onMouseOver}
                    onMouseOut={this.onMouseOut}
                    onClick={() => this.onTeamClick(team)}
                  >
                    {team.total.team.name}
                  </div>
                  <div className="totalPts">{team.total.points}</div>
                  <div className="totalPld">{team.total.playedGames}</div>
                  <div className="totalW">{team.total.won}</div>
                  <div className="totalD">{team.total.draw}</div>
                  <div className="totalL">{team.total.lost}</div>
                  <div className="totalGF">{team.total.goalsFor}</div>
                  <div className="totalGA">{team.total.goalsAgainst}</div>

                  {!mobile && (
                    <>
                      <div className="homePts">{team.home.points}</div>
                      <div className="homePld">{team.home.playedGames}</div>
                      <div className="homeW">{team.home.won}</div>
                      <div className="homeD">{team.home.draw}</div>
                      <div className="homeL">{team.home.lost}</div>
                      <div className="homeGF">{team.home.goalsFor}</div>
                      <div className="homeGA">{team.home.goalsAgainst}</div>

                      <div className="awayPts">{team.away.points}</div>
                      <div className="awayPld">{team.away.playedGames}</div>
                      <div className="awayW">{team.away.won}</div>
                      <div className="awayD">{team.away.draw}</div>
                      <div className="awayL">{team.away.lost}</div>
                      <div className="awayGF">{team.away.goalsFor}</div>
                      <div className="awayGA">{team.away.goalsAgainst}</div>
                    </>
                  )}
                </div>
              ))}
          </>
        )}
      </ThemeContext.Consumer>
    );
  }
}
export default Table;
