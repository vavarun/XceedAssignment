import React from "react";
import { ThemeContext } from "../App";

const ColumnRow = ({ sort, column }) => (
  <ThemeContext.Consumer>
    {({ mobile }) => (
      <div
        className={`${
          mobile ? "standingsMobileTable" : "standingsTable"
        } columnRow`}
      >
        <div
          className="position"
          style={{ cursor: "pointer" }}
          onClick={() => sort("position", "total")}
        >
          {column[0] === "position" && column[2] ? (
            <i class="fa fa-caret-up" />
          ) : (
            <i class="fa fa-caret-down" />
          )}
          #
        </div>
        <div className="trend" />
        <div className="crest" />
        <div
          className="name"
          style={{ height: "100%", weight: "100%" }}
          onClick={() => sort("name", "total")}
        />

        <div className="totalPts" onClick={() => sort("points", "total")}>
          PTS
        </div>
        <div className="totalPld" onClick={() => sort("playedGames", "total")}>
          Pld
        </div>
        <div className="totalW" onClick={() => sort("won", "total")}>
          W
        </div>
        <div className="totalD" onClick={() => sort("draw", "total")}>
          D
        </div>
        <div className="totalL" onClick={() => sort("lost", "total")}>
          L
        </div>
        <div className="totalGF" onClick={() => sort("goalsFor", "total")}>
          GF
        </div>
        <div className="totalGA" onClick={() => sort("goalsAgainst", "total")}>
          GA
        </div>

        {!mobile && (
          <>
            <div className="homePts" onClick={() => sort("points", "home")}>
              PTS
            </div>
            <div
              className="homePld"
              onClick={() => sort("gamesPlayed", "home")}
            >
              Pld
            </div>
            <div className="homeW" onClick={() => sort("won", "home")}>
              W
            </div>
            <div className="homeD" onClick={() => sort("draw", "home")}>
              D
            </div>
            <div className="homeL" onClick={() => sort("lost", "home")}>
              L
            </div>
            <div className="homeGF" onClick={() => sort("goalsFor", "home")}>
              GF
            </div>
            <div
              className="homeGA"
              onClick={() => sort("goalsAgainst", "home")}
            >
              GA
            </div>

            <div className="awayPts" onClick={() => sort("points", "away")}>
              PTS
            </div>
            <div
              className="awayPld"
              onClick={() => sort("gamesPlayed", "away")}
            >
              Pld
            </div>
            <div className="awayW" onClick={() => sort("won", "away")}>
              W
            </div>
            <div className="awayD" onClick={() => sort("draw", "away")}>
              D
            </div>
            <div className="awayL" onClick={() => sort("lost", "away")}>
              L
            </div>
            <div className="awayGF" onClick={() => sort("goalsFor", "away")}>
              GF
            </div>
            <div
              className="awayGA"
              onClick={() => sort("goalsAgainst", "away")}
            >
              GA
            </div>
          </>
        )}
      </div>
    )}
  </ThemeContext.Consumer>
);

export default ColumnRow;
