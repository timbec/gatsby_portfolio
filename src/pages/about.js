import React from 'react'; 
import { Link, graphql } from "gatsby"; 

import { Helmet } from "react-helmet"

import Layout from "components/Layout"
import Container from "components/Container"
import Image from "components/image"

const AboutPage = () => {

    return (
        <Layout>
        <section id="about" className="page">
        <article className="article">
          <h2 className="article--heading">About Me</h2>

          <div className="article--body">
            <div className="article--photo">
              <Image src={`about/self-portrait.jpg`} />
            </div>
          
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
        <figure className="article--image">
            <Image src=""></Image>
        </figure>
      </section>
      </Layout>
    )
}

export default AboutPage; 