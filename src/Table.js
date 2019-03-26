import React from "react";

const Table = ({ data }) => (
  <div>
    {/* {console.log(data)} */}

    <style jsx>{`
      .standingsTable {
        display: grid;
        padding: 0px 0px 0px 0px;
        grid-template-areas: "position trend crest name totalPts totalPld totalW totalD totalL totalGF totalGA homePts homePld homeW homeD homeL homeGF homeGA awayPts awayPld awayW awayD awayL awayGF awayGA";
        grid-template-columns: 30px 30px 30px 225px 30px 30px 30px 30px 30px 30px 30px 30px 30px 30px 30px 30px 30px 30px 30px 30px 30px 30px 30px 30px 30px;
      }
      .headingStyle {
        background-color: #254151;
        color: #f4fcc8;
        font-size: 10px;
        font-weight: normal;
        grid-template-rows: 35px;
        align-self: center;
      }
      .rowStyle {
        background-color: #282c34;
        color: #92daec;
        font-size: 12px;
        font-weight: normal;
        grid-template-rows: 32px;
        align-self: center;
        font-weight: bold;
      }
      .position {
        grid-area: position;
        width: 30px;
        align-self: center;
        text-align: center;
      }
      .trend {
        grid-area: trend;
        width: 30px;
        align-self: center;
        text-align: center;
      }
      .crest {
        grid-area: crest;
        width: 30px;
        align-self: center;
        text-align: center;
      }
      .name {
        grid-area: name;
        width: 225px;
        align-self: center;
        text-align: left;
        color: white;
        padding-left: 10px;
      }
      .totalPts {
        grid-area: totalPts;
        width: 30px;
        align-self: center;
        text-align: center;
      }
      .totalPld {
        grid-area: totalPld;
        width: 30px;
        align-self: center;
        text-align: center;
      }
      .totalW {
        grid-area: totalW;
        width: 30px;
        align-self: center;
        text-align: center;
      }
      .totalD {
        grid-area: totalD;
        width: 30px;
        align-self: center;
        text-align: center;
      }
      .totalL {
        grid-area: totalL;
        width: 30px;
        align-self: center;
        text-align: center;
      }
      .totalGF {
        grid-area: totalGF;
        width: 30px;
        align-self: center;
        text-align: center;
      }
      .totalGA {
        grid-area: totalGA;
        width: 30px;
        align-self: center;
        text-align: center;
      }
      .homePts {
        grid-area: homePts;
        width: 30px;
        align-self: center;
        text-align: center;
      }
      .homePld {
        grid-area: homePld;
        width: 30px;
        align-self: center;
        text-align: center;
      }
      .homeW {
        grid-area: homeW;
        width: 30px;
        align-self: center;
        text-align: center;
      }
      .homeD {
        grid-area: homeD;
        width: 30px;
        align-self: center;
        text-align: center;
      }
      .homeL {
        grid-area: homeL;
        width: 30px;
        align-self: center;
        text-align: center;
      }
      .homeGF {
        grid-area: homeGF;
        width: 30px;
        align-self: center;
        text-align: center;
      }
      .homeGA {
        grid-area: homeGA;
        width: 30px;
        align-self: center;
        text-align: center;
      }
      .awayPts {
        grid-area: awayPts;
        width: 30px;
        align-self: center;
        text-align: center;
      }
      .awayPld {
        grid-area: awayPld;
        width: 30px;
        align-self: center;
        text-align: center;
      }
      .awayW {
        grid-area: awayW;
        width: 30px;
        align-self: center;
        text-align: center;
      }
      .awayD {
        grid-area: awayD;
        width: 30px;
        align-self: center;
        text-align: center;
      }
      .awayL {
        grid-area: awayL;
        width: 30px;
        align-self: center;
        text-align: center;
      }
      .awayGF {
        grid-area: awayGF;
        width: 30px;
        align-self: center;
        text-align: center;
      }
      .awayGA {
        grid-area: awayGA;
        width: 30px;
        align-self: center;
        text-align: center;
      }
    `}</style>
    <div className="standingsTable headingStyle">
      <div className="position">#</div>
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
                e.target.src = "./favicon.png";
              }}
            />
          </div>
          <div className="name">{team.total.team.name}</div>
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
