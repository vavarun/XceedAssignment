import React from "react";
import Table from "./Table";

const Standings = ({ data }) => (
  <div className="Standings-table">
    {console.log(data)}

    <Table data={data} />
  </div>
);

export default Standings;
