import React from "react";
import Table from "../Container/Table";

const Standings = ({ data }) => (
  <div className="Standings-table">
    <Table data={data} />
  </div>
);

export default Standings;
