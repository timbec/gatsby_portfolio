import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

const IndexPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Home Page" />

      <section id="intro" className="home__page">
          <article className="home__page--article">
            <h2 className="home__page--article__title">Welcome to the latest iteration of my portoflio website</h2>

            <p>My last portfolio was built on Django. Django was interesting but hard to configure properly to use Markdown. Since I was planning to build out the front end in some variation of React anyway, I decided to just rebuild it in Gatsby, then re-incorporate the Django backend later if it makes sense. </p>
          </article>
      </section>
      <section id="portfolio" className="home__page--portfolio"> 
        <ul ome__page--portfolio_group>/ul>
          <li className="ome__page--portfolio">Image One</li>
          <li className="ome__page--portfolio">Image Two</li>
          <li className="ome__page--portfolio">Image Three</li>
        </ul>
      </section>
      <Bio />
      
    </Layout>
  )
}

export default IndexPage

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
