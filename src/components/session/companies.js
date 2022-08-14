import React from "react"
import Img from "gatsby-image"
import { graphql } from "gatsby"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import CompaniesStyles from "../../styles/session/companies.module.css"
import { useStaticQuery } from "gatsby"

const Companies = ({ companies }) => {
  const data = useStaticQuery(graphql`
    query CompaniesQuery {
      allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/sponsors/" } }) {
        edges {
          node {
            frontmatter {
              name
              img {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  const companiesData = companies.map(company => ({
    ...company,
    ...data.allMarkdownRemark.edges.find(
      element => element.node.frontmatter.name === company.name
    ),
  }))

  return (
    <div className={CompaniesStyles.companiesContainer}>
      <Container>
        <Row className={CompaniesStyles.companiesRow}>
          {companiesData.map(company => (
            <Col
              xs="12"
              md="3"
              key={company.node.frontmatter.name}
              className={CompaniesStyles.companyLogo}
            >
              <a href={company.link} target="_blank" rel="noopener noreferrer">
                <Img
                  fluid={company.node.frontmatter.img.childImageSharp.fluid}
                />
              </a>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  )
}

export default Companies
