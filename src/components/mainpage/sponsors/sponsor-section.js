import React from "react"
import SingleSponsor from "./single-sponsor"
import sponsorsStyles from "../../../styles/mainpage/sponsors.module.css"

export const getSponsors = (data, type) => {
  return data.allMarkdownRemark.edges
    .filter(({ node }) => node.frontmatter.type === type)
    .map(({ node }) => (
      <SingleSponsor
        key={node.frontmatter.name}
        sponsor={node.frontmatter}
        type={type}
      />
    ))
}

const SponsorSection = ({ sponsorData, type }) => {
  let wrapperType

  if (type === "gold") {
    wrapperType = sponsorsStyles.goldWrapper
  } else if (type === "silver") {
    wrapperType = sponsorsStyles.silverWrapper
  } else {
    wrapperType = sponsorsStyles.bronzeWrapper
  }

  return (
    <div className={[sponsorsStyles.otherSponsors, wrapperType].join(" ")}>
      {sponsorData}
    </div>
  )
}

export default SponsorSection
