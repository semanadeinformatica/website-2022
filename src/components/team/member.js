import React from "react"

import Overlay from "../utils/overlay"
import LinksList from "../utils/links_list"

const Member = ({ data, color }) => {
  return (
    <Overlay
      main={<div>{data.name}</div>}
      secondary={
        <LinksList
          linkedin={data.linkedin}
          github={data.github}
          website={data.website}
        />
      }
      image={data.img.childImageSharp.fluid}
      color={color}
    />
  )
}

export default Member
