import React from "react"
import Layout from "../components/layout"
import { graphql, Link } from "gatsby"
import {MDXRenderer} from "gatsby-plugin-mdx";
import SEO from "../components/seo";


export default function PostTemplate ({data: {mdx} }) {
    return (
        <Layout>
            <SEO title={mdx.frontmatter.title} />
            <p><Link to={`/blog/`}>&lt; Return to all posts.</Link></p>
            <h1>{mdx.frontmatter.title}</h1>
            <MDXRenderer>{mdx.body}</MDXRenderer>
        </Layout>

    )
}
export const postQuery = graphql`
query SinglePostQuery($slug: String!) {
  mdx(frontmatter: {slug: {eq: $slug}}) {
    body  
    frontmatter {
      title
    }
 
  }
}
`



