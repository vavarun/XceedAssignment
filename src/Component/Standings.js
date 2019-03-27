import React from "react";
import Table from "../Container/Table";
import ColumnRow from "../Container/ColumnRow";
import HeaderRow from "../Container/HeaderRow";
import TypeRow from "../Container/TypeRow";

const Standings = ({ data, sort, matchDay, column }) => (
  <div className="Standings-table">
    <HeaderRow matchDay={matchDay} />
    <TypeRow />
    <ColumnRow column={column} sort={(name, type) => sort(name, type)} />
    <Table data={data} />
  </div>
);

export default Standings;
