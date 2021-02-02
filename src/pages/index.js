import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "../components/image"

import { rhythm } from "../utils/typography"



const IndexPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Home Page" />

      <section id="intro" className="home__page">
          <article className="home__page--article">
            <h2 className="home__page--article__title">Welcome to the latest iteration of my portoflio</h2>

            <p>My last portfolio was built on Django. Django was interesting but hard to configure properly to use Markdown. Since I was planning to build out the front end in some variation of React anyway, I decided to just rebuild it in Gatsby, then re-incorporate the Django backend later if it makes sense. </p>
          </article>
      </section>
      <section id="portfolio" className="home__page--portfolio"> 
      <h3>Some of my work: </h3>
        <ul class = "home__page--portfolio_group">
          <li className="home__page--portfolio item-one">
            <Image src="client-logos/nytimes_logo.jpg" />
          </li>
          <li className="home__page--portfolio item-two">
          <Image src="client-logos/greatimmigrants.jpg" />
          </li>
          <li className="home__page--portfolio item-three">
          <Image src="client-logos/opera_tn.jpg" />
          </li>
        </ul>
      </section>
      <section id="playground" className="home__page--playground">
        Playground
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
