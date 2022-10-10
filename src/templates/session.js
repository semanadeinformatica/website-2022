import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/common/layout";
import SEO from "../components/common/seo";
import Banner from "../components/session/banner";
import Description from "../components/session/description";
import Companies from "../components/session/companies";
import Participate from "../components/utils/participate";
import Participants from "../components/session/participants";
import OpenSoon from "../components/utils/open_soon";

export default function Template({ data }) {
  const { markdownRemark: session } = data;

  return (
    <Layout darkFooter>
      <SEO title={session.frontmatter.title} />
      <Banner title={session.frontmatter.title} />
      <Description
        image={session.frontmatter.img}
        day={session.frontmatter.day}
        place={session.frontmatter.place}
        start_time={session.frontmatter.start_time}
        end_time={session.frontmatter.end_time}
        description={session.html}
        title={session.frontmatter.title}
      />
      {session.frontmatter.companies && (
        <Companies companies={session.frontmatter.companies} />
      )}
      {session.frontmatter.participants && (
        <Participants participants={session.frontmatter.participants} />
      )}
      {session.frontmatter.registration ? (
        session.frontmatter.registration === "soon" ? (
          <OpenSoon />
        ) : (
          <Participate link={session.frontmatter.registration} />
        )
      ) : (
        ""
      )}
    </Layout>
  );
}

export const sessionQuery = graphql`
  query getSession($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      id
      frontmatter {
        path
        title
        img {
          publicURL
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        day(formatString: "D MMMM", locale: "pt-PT")
        place
        start_time
        end_time
        registration
        companies {
          name
          link
        }
        participants {
          name
          occupations {
            what
            where
          }
          bio
          role
          img {
            publicURL
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
          linkedin
          twitter
          website
          instagram
        }
      }
    }
  }
`;
