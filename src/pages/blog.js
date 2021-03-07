import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"


import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
/**What does 'rhythm' do? */
// import { rhythm } from "../utils/typography"

const Blog = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges
  //const featuredImgFluid = data.allMarkdownRemark.edges


  return (
    <Layout location={location} title={siteTitle}>
      <SEO />
      <section className="blog">
        <section className="blog__list">
          {console.log(posts)}
        {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug
        let featuredImage = node.frontmatter.featuredImage.childImageSharp.fluid || ''

        return (
          <article key={node.fields.slug} className="blog__article">

            <header className="blog__article--header">
            <Img fluid={featuredImage} />
            <h3>
                <Link to={node.fields.slug}>
                  {title}
                </Link>
              </h3>
              <small>{node.frontmatter.date}</small>
            </header>
            <section>
              <p
                dangerouslySetInnerHTML={{
                  __html: node.frontmatter.description || node.excerpt,
                }}
                
              />
            </section>
            <section className="meta">
              <ul className="meta__categories">
                <h3>Categories</h3>
                <li>{node.frontmatter.category}</li>
              </ul>
              <ul className="meta__tags">
                <h3>Tags:</h3>
                <li>{node.frontmatter.tags}</li>
              </ul>

            </section>
          </article>
        )
      })}
        </section>
      <Bio />
      </section>
    </Layout>
  )
}

export default Blog

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
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`