import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default () => (
    <Layout>
        <SEO title="You got issues here, buddy!" />
        <h1>404 Son</h1>
        <p>Page not found!</p>
        <p><Link to={'/'}>Back to home</Link></p>
        <p>Or check out the <Link to ={'/custom'}>custom page!</Link></p>
    </Layout>
)
