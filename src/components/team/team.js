import React from "react";
import Hover3d from "../utils/hover3d";

import TeamStyles from "../../styles/team/team.module.css";

const divide_rows = (members, n_per_row) => {
  const member_rows = [];
  let tmp = [];
  for (let i = 0; i < members.length; i++) {
    const element = members[i];
    if (i % n_per_row === 0 && tmp.length !== 0) {
      member_rows.push(tmp);
      tmp = [];
    }

    tmp.push(element);
  }
  if (tmp.length !== 0) member_rows.push(tmp);
  return member_rows;
};

const Team = ({ name, members, n_per_row }) => {
  const member_rows = divide_rows(members, n_per_row);
  let odd = false;

  return (
    <div className={TeamStyles.team_container}>
      <div className={TeamStyles.team_title_container}>
        <h2 className={TeamStyles.team_title}>{name}</h2>
        <div style={{ width: "140px" }} className={"separator"} />
      </div>
      <div className={TeamStyles.members_container}>
        {member_rows.map(row_members => {
          odd ^= true;

          return row_members.map((value, index) => {
            return <Hover3d data={value} key={"member" + index} />;
          });
        })}
      </div>
    </div>
  );
};

export default Team;
