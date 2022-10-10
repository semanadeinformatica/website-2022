import React from "react";
import { IconContext } from "react-icons";

import icons from "../utils/icons";
import * as programStyles from "../../styles/program/program.module.css";

const DayNavItem = ({ icon, date, day, active }) => (
  <div className={programStyles.navItem}>
    <IconContext.Provider value={{ color: "#0b2f46", size: "2em" }}>
      <div>{icons[icon]}</div>
    </IconContext.Provider>
    <div className={programStyles.navItemText}>
      <h3>{day}º dia</h3>
      <span>{date}</span>
    </div>
  </div>
);

export default DayNavItem;
