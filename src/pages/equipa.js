import { graphql } from "gatsby";
import React from "react";
import Container from "react-bootstrap/Container";
import Layout from "../components/common/layout";
import SEO from "../components/common/seo";
import Team from "../components/team/team";
import PageBanner from "../components/utils/page_banner";
import * as TeamStyles from "../styles/team/team.module.css";

const TeamPage = ({ data }) => {
  const teams = data.allTeamJson.nodes;
  const n_per_row = 4;

  return (
    <Layout darkFooter>
      <SEO title={"Equipa"} />
      <PageBanner>
        <h1 className={TeamStyles.team_page_title}>Equipa</h1>
      </PageBanner>
      <Container className={TeamStyles.container}>
        {teams.map((team, index) => {
          return (
            <Team
              name={team.name}
              members={team.members}
              key={index}
              n_per_row={n_per_row}
            />
          );
        })}
        &nbsp;
      </Container>
    </Layout>
  );
};

export const pageQuery = graphql`
  query MyQuery {
    allTeamJson {
      nodes {
        name
        members {
          github
          linkedin
          name
          img {
            base
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
`;

export default TeamPage;
