import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

const AboutPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="About Page" />

      <section>
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
      <Bio />
    </Layout>
  )
}

export default AboutPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
