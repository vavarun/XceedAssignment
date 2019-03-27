import React from "react";

const Table = ({ data, sort }) => (
  <div>
    <div className="standingsTable headingStyle">
      <div
        className="position"
        style={{ cursor: "pointer" }}
        onClick={() => sort("position", "total")}
      >
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

      <div className="homePts" onClick={() => sort("points", "home")}>
        PTS
      </div>
      <div className="homePld" onClick={() => sort("gamesPlayed", "home")}>
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
      <div className="homeGA" onClick={() => sort("goalsAgainst", "home")}>
        GA
      </div>

      <div className="awayPts" onClick={() => sort("points", "away")}>
        PTS
      </div>
      <div className="awayPld" onClick={() => sort("gamesPlayed", "away")}>
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
      <div className="awayGA" onClick={() => sort("goalsAgainst", "away")}>
        GA
      </div>
    </div>
    {data.length &&
      data.map((team, i) => (
        <div key={i} className="standingsTable rowStyle">
          <div className="position">{team.total.position}</div>
          <div className="trend">x</div>
          <div className="crest">
            <img
              style={{
                height: "20px"
              }}
              src={team.total.team.crestUrl}
              alt={team.total.team.name}
              onError={e => {
                e.target.onerror = null;
                e.target.src = "/favicon.png";
              }}
            />
          </div>
          <div
            className="name"
            style={{ cursor: "pointer" }}
            onMouseOver={e => (e.target.style.color = "#92daec")}
            onMouseOut={e => (e.target.style.color = "#fff")}
            onClick={() =>
              alert(`Go to ${team.total.team.name} official website`)
            }
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
        </div>
      ))}
  </div>
);

export default Table;
