import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import SEO from "../components/common/seo";
import Layout from "../components/common/layout";

import Banner from "../components/mainpage/banner/banner";
import About from "../components/mainpage/about/about";
import Activities from "../components/mainpage/activities/activities";
import Tickets from "../components/mainpage/tickets";
import Sponsors from "../components/mainpage/sponsors/sponsors";

const IndexPage = () => (
  <div>
    <SEO title="Home" />
    <Layout>
      <Banner />
      <About />
      <Activities />
      <Tickets />
      <Sponsors />
    </Layout>
  </div>
);
export default IndexPage;
