import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import speakersStyles from "../../../styles/mainpage/speakers.module.css"
import mainStyles from "../../../styles/mainpage/mainpage.module.css"
import Carousel from "../../utils/carousel"
import SingleSpeaker from "./SingleSpeaker"

const getAllSpeakers = data => {
  let speakers = []

  data.allMarkdownRemark.edges.forEach(({ node }) => {
    node.frontmatter.type !== "Placeholder" &&
      speakers.push(
        ...node.frontmatter.speakers.map(speaker => ({
          ...speaker,
          path: node.frontmatter.path,
          id: node.id,
        }))
      )
  })

  return speakers
}

const Speakers = () => {
  const data = useStaticQuery(graphql`
    query MainSpeakersQuery {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/talks|workshops/" } }
      ) {
        edges {
          node {
            id
            frontmatter {
              speakers {
                name
                img {
                  childImageSharp {
                    fluid {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
              path
              type
            }
          }
        }
      }
    }
  `)

  const speakers = getAllSpeakers(data)

  return (
    speakers.length > 0 && (
      <section id="speakers" className={speakersStyles.speakersSection}>
        <h2 className={mainStyles.h2}>
          Speakers
          <hr className={mainStyles.headingLine} />
        </h2>
        <Carousel numMobileItems={1} numTabletItems={2} numDesktopItems={4}>
          {speakers.map(speaker => (
            <SingleSpeaker
              key={`${speaker.name}-${speaker.id}`}
              speaker={speaker}
              path={speaker.path}
            />
          ))}
        </Carousel>
        <Link className={speakersStyles.allLink} to="/speakers">
          <span className={speakersStyles.allLinkText}> Ver todos os speakers</span> <span className={speakersStyles.arrow}>&#8594;</span> 
        </Link>
      </section>
    )
  )
}

export default Speakers
