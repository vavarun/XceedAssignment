import React from "react";
import Table from "../container/Table";
import ColumnRow from "../container/ColumnRow";
import HeaderRow from "../container/HeaderRow";
import TypeRow from "../container/TypeRow";
import "./Standings.css";
import "./StandingsMobile.css";

const Standings = ({ data, sort, matchDay, column }) => (
  <div className="Standings">
    <HeaderRow matchDay={matchDay} />
    <TypeRow />
    <ColumnRow column={column} sort={(name, type) => sort(name, type)} />
    <Table data={data} />
  </div>
);

export default Standings;
