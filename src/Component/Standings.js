import React from "react";
import PropTypes from "prop-types";
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

Standings.propTypes = {
  data: PropTypes.object,
  sort: PropTypes.func,
  matchDay: PropTypes.number,
  column: PropTypes.array
};

export default Standings;
