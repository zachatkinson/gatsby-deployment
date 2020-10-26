import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout";
import SEO from "../components/seo";
import gatsbyAstronaut from "../images/gatsby-astronaut.png";


export default () => (
      <Layout>
          <SEO title="Welcome to our site!" />
        <h1>Hello world 2!</h1>
          <img src={gatsbyAstronaut}
               alt="Astronaut"
               style={{width:`200px`}}
               />
          <p>Read more <Link to={"/about"}>about me!</Link></p>
          <p>Or check out the <Link to ={'/custom'}>custom page!</Link></p>
      </Layout>
  )

