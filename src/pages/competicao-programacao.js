import React from "react";
import Layout from "../components/common/layout";
import SEO from "../components/common/seo";
import Competition from "../components/competition/competition";
import PageBanner from "../components/utils/page_banner";

const CompetitionPage = () => (
  <Layout darkFooter>
    <SEO title="Competição de programação" />
    <PageBanner>
      <h1>Competição de Programação</h1>
    </PageBanner>
    <Competition />
  </Layout>
);

export default CompetitionPage;
