import React from "react";
import "./Footer.css";
import { getFooterCopy, getCurrentYear } from "../utils/utils";

function Footer() {
  return (
    <div className="App-footer">
      <p>Copyright {getCurrentYear()} - {getFooterCopy(true)}</p>
    </div>
  );
}

export default Footer; 