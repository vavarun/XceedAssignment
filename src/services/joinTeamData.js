export const joinTeamData = apiData => {
  console.log(apiData);
  const totalArr = apiData.standings.find(el => el.type === "TOTAL").table;
  const homeArr = apiData.standings.find(el => el.type === "HOME").table;
  const awayArr = apiData.standings.find(el => el.type === "AWAY").table;

  const findTeam = (id, array) => array.find(el => el.team.id === id);

  return totalArr.map(totalObj => {
    const teamId = totalObj.team.id;
    const homeObj = findTeam(teamId, homeArr);
    const awayObj = findTeam(teamId, awayArr);
    return { total: totalObj, home: homeObj, away: awayObj };
  });
};
