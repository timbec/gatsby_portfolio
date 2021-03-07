import React from 'react'; 
import { Link, graphql } from "gatsby"; 

import Layout from "../components/layout";

const AboutPage = () => {

    return (
        <Layout>
        <section id="about" className="page">
        <article>
          <h1>About Me</h1>

          <div className="entry-content">
            <p>
              I am a full-stack developer though I tilt more toward the
              front-end. I'm proficient in Javascript, Python, and (if need be)
              PHP. I've used Wordpress, Laravel, ResourceSpace, Meteor, Node,
              D3, and many other frameworks. Out of necessity I've developed
              some proficiency in AWS, though by no means an expert.
            </p>
            <p>
              I blog about random elements of front end development, Data
              Visualization, Data Analysis generally, and AI and ML, all of
              which reflect my current interests in tech and the world we live
              in.
            </p>
          </div>
        </article>
      </section>
      </Layout>
    )
}

export default AboutPage; 