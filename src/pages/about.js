import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default () => (
    <Layout>
        <SEO title="About my Site" />
    <h1>About Me</h1>
    <p>Read more about me!</p>
        <p><Link to={'/'}>Back to home</Link></p>
        <p>Or check out the <Link to ={'/custom'}>custom page!</Link></p>
    </Layout>
)