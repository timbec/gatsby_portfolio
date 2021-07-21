import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
//import { rhythm, scale } from "../utils/typography"

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.markdownRemark

  const siteTitle = data.site.siteMetadata.title
  const { previous, next } = pageContext

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <Link to="/blog">Back to Blog</Link>
      <article className="single__post">
        <header className="single__post--header">
          <h1 className="single__post--header__title">
            {post.frontmatter.title}
          </h1>
          <p className="single__post--header__date">{post.frontmatter.date}</p>
        </header>
        <section
          className="single__post--content"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
        <hr />
        <footer className="single__post--footer">
          <Bio />
        </footer>
      </article>
      <nav className="post-nav">
        <ul className="post-nav__nav">
          <li className="post-nav__nav--button">
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li className="post-nav__nav--button">
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`
