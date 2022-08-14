import React from "react"
import Nav from "react-bootstrap/Nav"
import DayNavItem from "./DayNavItem"

import programStyles from "../../styles/program/program.module.css"

const ProgramNav = ({ days, activeTab, toggle }) => (
  <div className={programStyles.programNavWrapper}>
    <div className={programStyles.programNavContainer}>
      <Nav className={programStyles.programNav}>
        {days.map((day, i) => {
          return (
            <Nav.Item
              key={day.node.id}
              className={
                activeTab.date === day.node.date
                  ? [programStyles.navItemWrapper, programStyles.active].join(
                      " "
                    )
                  : programStyles.navItemWrapper
              }
            >
              <Nav.Link
                onClick={() => toggle(day.node)}
                eventKey={day.node.date.toLowerCase()}
              >
                <DayNavItem
                  date={day.node.date}
                  icon={day.node.icon}
                  day={i + 1}
                  active={activeTab.date === day.node.date}
                />
              </Nav.Link>
            </Nav.Item>
          )
        })}
      </Nav>
      <div className={programStyles.themeHeader}>
        <h3 className={programStyles.themeHeading}>{activeTab.theme}</h3>
      </div>
    </div>
  </div>
)

export default ProgramNav
