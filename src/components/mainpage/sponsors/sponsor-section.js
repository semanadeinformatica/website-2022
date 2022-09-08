import React from "react";
import SingleSponsor from "./single-sponsor";
import sponsorsStyles from "../../../styles/mainpage/sponsors.module.css";

export const getSponsors = (data, type) => {
  return data.allMarkdownRemark.edges
    .filter(({ node }) => node.frontmatter.type === type)
    .map(({ node }) => (
      <SingleSponsor
        key={node.frontmatter.name}
        sponsor={node.frontmatter}
        type={type}
      />
    ));
};

const SponsorSection = ({ sponsorData, type }) => {
  let wrapperType;

  if (type === "gold") {
    wrapperType = sponsorsStyles.goldSponsor;
  } else if (type === "silver") {
    wrapperType = sponsorsStyles.silverSponsor;
  } else {
    wrapperType = sponsorsStyles.bronzeSponsor;
  }

  return (
    <div>
      <h3
        className={[sponsorsStyles.sponsorTypeHeading, wrapperType].join(" ")}
      >
        {type.toUpperCase()}
      </h3>
      <div className={sponsorsStyles.otherSponsors}>{sponsorData}</div>
    </div>
  );
};

export default SponsorSection;
