import React from 'react';
import { Link, graphql } from "gatsby"
import { Helmet } from 'react-helmet';

import Layout from 'components/Layout';
import Container from 'components/Container';

import img_gatsby from 'assets/images/gatsby-astronaut.png';

const IndexPage = () => {
  return (
    <Layout pageName="home">
      <Helmet>
        <title>Home Page</title>
      </Helmet>
      <Container>
        <section id="intro">
          <h3>Welcome to my portfolio</h3>
        </section>
        <section id="portfolio">
          <h3>A selection of my portfolio items</h3>
          <ul>
            <li>One</li>
            <li>Two</li>
            <li>Three</li>
          </ul>
        </section>

      </Container>
    </Layout>
  );
};

export default IndexPage;
