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
            <article>
              <h2>Welcome to the latest iteration of my portoflio website</h2>

              <p>My last portfolio was built on Django. Django was interesting but hard to configure properly to use Markdown. Since I was planning to build out the front end in some variation of React anyway, I decided to just rebuild it in Gatsby, then re-incorporate the Django backend later if it makes sense. </p>
            </article>
        </section>
        <section id="portfolio">
          <ul>
            <li>Image One</li>
            <li>Image Two</li>
            <li>Image Three</li>
          </ul>
        </section>
      </Container>
    </Layout>
  );
};

export default IndexPage;
