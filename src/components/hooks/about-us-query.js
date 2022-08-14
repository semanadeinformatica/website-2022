import { useStaticQuery, graphql } from "gatsby"

export const useAboutUsImages = () => {
  const data = useStaticQuery(graphql`
    query AboutUsQuery {
      allFile(filter: { relativeDirectory: { eq: "about-us" } }) {
        edges {
          node {
            id
            absolutePath
            childImageSharp {
              fixed(height: 250) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }
  `)
  return data
}
