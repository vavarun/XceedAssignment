import React from "react";
import { ThemeContext } from "../App";

const TypeRow = ({ sort }) => (
  <ThemeContext.Consumer>
    {({ mobile }) => (
      <div
        className={`${
          mobile ? "standingsMobileTable" : "standingsTable"
        } typeRow`}
      >
        <span className="Type-clip">Clips</span>
        {!mobile && (
          <>
            <span className="Type-home">At home</span>
            <span className="Type-away">Away</span>
          </>
        )}
      </div>
    )}
  </ThemeContext.Consumer>
);

export default TypeRow;
