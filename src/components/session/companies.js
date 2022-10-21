import React from "react";
import Img from "gatsby-image";
import { graphql } from "gatsby";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import * as CompaniesStyles from "../../styles/session/companies.module.css";
import { useStaticQuery } from "gatsby";

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
  `);

  const companiesData = companies.map(company => ({
    ...company,
    ...data.allMarkdownRemark.edges.find(
      element => element.node.frontmatter.name === company.name
    )
  }));
  console.log(companiesData);
  return (
    <div className={CompaniesStyles.companiesContainer}>
      <Container>
        <Row className={CompaniesStyles.companiesRow}>
          {companiesData.map(company => (
            <Col
              xs="12"
              md="3"
              key={company.node.frontmatter.name}
              className={CompaniesStyles.companyCol}
            >
              <div className={CompaniesStyles.logoContainer}>
                <a
                  href={company.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={CompaniesStyles.companyImage}
                >
                  <Img
                    fluid={company.node.frontmatter.img.childImageSharp.fluid}
                  />
                </a>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Companies;
