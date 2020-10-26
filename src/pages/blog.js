import React from "react"
import Layout from "../components/layout"
import {graphql, Link, useStaticQuery} from "gatsby"
import SEO from "../components/seo"

const BlogListing = () => {
    const blogQuery = useStaticQuery(graphql`
query PostsQuery {
  __typename
  allMdx(sort: {fields: frontmatter___date, order: DESC}) {
    nodes {
      id
      frontmatter {
        title
        slug
        excerpt
        date(formatString: "MM-DD-YYYY")
      }
    }
  }
}
`)
    const posts = blogQuery.allMdx.nodes

    return (
        <Layout>
            <SEO title="Blog Posts" />
            <h1>Blog Posts</h1>
            <hr />
            {posts.map(({id, frontmatter: { title, excerpt, slug, date}}) =>
                (
                    <article key={id}>
                        <h3>
                            <Link to={`/blog/${slug}`}>{title}</Link>
                        </h3>
                        <h5>{date}</h5>
                        <p>{excerpt}</p>
                    </article>
                ))}

        </Layout>
    )

}
export default BlogListing
