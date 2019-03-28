import React from "react";

const HeaderRow = ({ matchDay }) => {
  const onArrowClick = () => alert(`Go to Matchday ${+matchDay - 1} standings`);

  return (
    <div className="headerRow">
      <div style={{ fontSize: "25px" }}>Standings</div>
      <div
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <div onClick={onArrowClick} style={{ cursor: "pointer" }}>
          <i className="fa fa-angle-left" style={{ fontSize: "30px" }} />
        </div>
        <div
          style={{
            fontSize: "16px",
            textTransform: "uppercase",
            marginLeft: "20px"
          }}
        >
          Matchday {matchDay}
        </div>
      </div>
    </div>
  );
};

export default HeaderRow;
