import React, { useState } from "react";
import Tab from "react-bootstrap/Tab";

import SimpleEvent from "./SimpleEvent";
import CommonEvent from "./CommonEvent";
import EventsNav from "./EventsNav";

import programStyles from "../../styles/program/program.module.css";

const DailySchedule = ({ events }) => {
  const [activeTab, setActiveTab] = useState("talks");

  const toggle = tab => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <Tab.Container defaultActiveKey="talks">
      <EventsNav toggle={toggle} activeTab={activeTab} />
      <Tab.Content>
        <Tab.Pane eventKey="talks">
          <div className={programStyles.schedule}>
            {events
              .filter(
                event =>
                  event.node.fileAbsolutePath.includes("default") ||
                  event.node.fileAbsolutePath.includes("talks")
              )
              .map(event =>
                event.node.fileAbsolutePath.includes("default") ? (
                  <SimpleEvent
                    key={event.node.id}
                    event={event.node.frontmatter}
                  />
                ) : (
                  <CommonEvent
                    key={event.node.id}
                    event={event.node}
                    color="#ff1951"
                  />
                )
              )}
          </div>
        </Tab.Pane>
        <Tab.Pane eventKey="activities">
          <div className={programStyles.schedule}>
            {events
              .filter(event => !event.node.fileAbsolutePath.includes("talks"))
              .map(event => {
                const path = event.node.fileAbsolutePath;
                let toRender;

                if (path.includes("default")) {
                  toRender = (
                    <SimpleEvent
                      key={event.node.id}
                      event={event.node.frontmatter}
                    />
                  );
                } else if (
                  path.includes("sessions") ||
                  path.includes("workshops")
                ) {
                  toRender = (
                    <CommonEvent
                      key={event.node.frontmatter.start_time}
                      event={event.node}
                      color="#ff1951"
                    />
                  );
                } else {
                  toRender = (
                    <CommonEvent
                      key={event.node.frontmatter.start_time}
                      event={event.node}
                      color="#ff1951"
                    />
                  );
                }

                return toRender;
              })}
          </div>
        </Tab.Pane>
      </Tab.Content>
    </Tab.Container>
  );
};

export default DailySchedule;
