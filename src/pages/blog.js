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
    
          {posts.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug
            let featuredImage =
              node.frontmatter.featuredImage.childImageSharp.fluid || ""

            return (
              <article key={node.fields.slug} className="blog__article">
                <header className="blog__article--header">
                <Link to={node.fields.slug}>>
                  <Img fluid={featuredImage} />
                  </Link>
                  <h3 className="blog__article--header__title">
                    <Link to={node.fields.slug}>{title}</Link>
                  </h3>
                  <small className="blog_article--header__date">
                    {node.frontmatter.date}
                  </small>
                </header>
                <section className="blog__article--body">
                  <p className="blog__article--body__excerpt"
                    dangerouslySetInnerHTML={{
                      __html: node.frontmatter.description || node.excerpt,
                    }}
                  />
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
