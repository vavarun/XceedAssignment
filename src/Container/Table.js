import React from "react";

const Table = ({ data }) => (
  <div>
    <div className="standingsTable headingStyle">
      <div
        className="position"
        style={{ cursor: "pointer" }}
        onClick={() => console.log("blah")}
      >
        #
      </div>
      <div className="trend" />
      <div className="crest" />
      <div className="name" />

      <div className="totalPts">PTS</div>
      <div className="totalPld">Pld</div>
      <div className="totalW">W</div>
      <div className="totalD">D</div>
      <div className="totalL">L</div>
      <div className="totalGF">GF</div>
      <div className="totalGA">GA</div>

      <div className="homePts">PTS</div>
      <div className="homePld">Pld</div>
      <div className="homeW">W</div>
      <div className="homeD">D</div>
      <div className="homeL">L</div>
      <div className="homeGF">GF</div>
      <div className="homeGA">GA</div>

      <div className="awayPts">PTS</div>
      <div className="awayPld">Pld</div>
      <div className="awayW">W</div>
      <div className="awayD">D</div>
      <div className="awayL">L</div>
      <div className="awayGF">GF</div>
      <div className="awayGA">GA</div>
    </div>
    {console.log(data)}
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
