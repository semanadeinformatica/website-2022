import React from "react";

import SingleSpeaker from "./single-speaker";

import SpeakersStyles from "../../styles/speakers/speakers.module.css";

const getSpeakers = talks => {
  const speakers = [];

  talks
    .filter(({ node }) => node.frontmatter.type !== "Placeholder")
    .forEach(({ node }) => {
      node.frontmatter.speakers.forEach(speaker => {
        speaker.path = node.frontmatter.path;
        speakers.push(speaker);
      });
    });

  return speakers;
};

const DailySpeakers = ({ talks }) => {
  const speakers = getSpeakers(talks);
  const date = new Date(talks[0].node.frontmatter.day);

  return (
    <div className={SpeakersStyles.dailyContainer}>
      <div className={SpeakersStyles.dayDescription + " mb-3"}>
        <h2 className={SpeakersStyles.date}>
          {date.getDate() + " de novembro"}
        </h2>
        <svg width="140" height="3">
          <rect width="140" height="3" style={{ fill: "#0b2f46" }} />
        </svg>
      </div>
      <div className={SpeakersStyles.speakersContainer}>
        {speakers.map((speaker, index) => (
          <div key={index} className={SpeakersStyles.speakerContainer}>
            {index % 8 < 4 ? (
              <SingleSpeaker speaker={speaker} color={index % 4} />
            ) : (
              <SingleSpeaker speaker={speaker} color={3 - (index % 4)} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DailySpeakers;
