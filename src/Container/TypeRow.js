import React from "react";
import { ThemeContext } from "../App";

const TypeRow = () => (
  <ThemeContext.Consumer>
    {({ mobile }) => (
      <div
        className={`${
          mobile ? "standingsMobileTable" : "standingsTable"
        } typeRow`}
      >
        <span className="typeClip">Clips</span>
        {!mobile && (
          <>
            <span className="typeHome">At home</span>
            <span className="typeAway">Away</span>
          </>
        )}
      </div>
    )}
  </ThemeContext.Consumer>
);

export default TypeRow;
