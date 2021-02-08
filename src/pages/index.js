import React from 'react';
import { Link, graphql } from "gatsby"
import { Helmet } from 'react-helmet';

import Layout from 'components/Layout';
import Container from 'components/Container';
import Image from 'components/image';

import img_gatsby from 'assets/images/client-logos/image.png';

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
        <section id="portfolio" className="portfolio__images">
          <ul>
            <li className="portfolio__images--image">
            <Image src={`client-logos/image.png`}/> 
            </li>
            <li className="portfolio__images--image">
            <Image src={`client-logos/greatimmigrants.jpg`}/> 
            </li>
            <li className="portfolio__images--image">
            <Image src={`client-logos/nytimes_logo.jpg`}/> 
            </li>
            <li className="portfolio__images--image">
            <Image src={`client-logos/opera_tn.jpg`}/> 
            </li>
            <li className="portfolio__images--image">
            <Image src={`client-logos/lazard_asset_management_logo.jpg`}/> 
            </li>
            <li className="portfolio__images--image">
            <Image src={`client-logos/weil.png`}/> 
            </li>
          </ul>
        </section>
      </Container>
    </Layout>
  );
};

export default IndexPage;
