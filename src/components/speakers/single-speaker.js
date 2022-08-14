import React from "react"
import { Link } from "gatsby"

import Occupations from "./occupations"
import Overlay from "../utils/overlay"
import LinksList from "../utils/links_list"

import SpeakerStyle from "../../styles/speakers/single-speaker.module.css"

const SingleSpeaker = ({ speaker, color }) => (
  <div className={SpeakerStyle.member_container + " mb-3"} key={speaker.name}>
    <Overlay
      image={speaker.img.childImageSharp.fluid}
      color={color}
      main={
        <LinksList
          linkedin={speaker.linkedin}
          twitter={speaker.twitter}
          website={speaker.website}
          github={speaker.github}
        />
      }
    />
    <div className="mt-2">
      <Link to={speaker.path} className={SpeakerStyle.name}>
        {speaker.name}
      </Link>
    </div>
    <Occupations occupations={speaker.occupations} />
  </div>
)

export default SingleSpeaker
