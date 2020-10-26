import React from "react"
import Layout from "../components/layout";
import SEO from "../components/seo";
import {graphql, useStaticQuery} from "gatsby"
import Img from "gatsby-image"

const Photos = () => {
    const data = useStaticQuery(graphql `
        query Images {
            images: allFile(
                filter: { 
                    relativeDirectory: {eq: "gallery" } 
                }
            )
            {
                nodes{
                    id
                    childImageSharp{
                        fixed(width: 200 height: 200){
                            ...GatsbyImageSharpFixed
                        }
                    }    
                }
            }
            image: file(relativePath: {eq: "dog.jpg"}) {
                id
                childImageSharp {
                  fixed(
                  width: 400
                  duotone: {highlight: "#ff0000", shadow: "#ffffff"}
                  ){
                    ...GatsbyImageSharpFixed
                  }
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
            }
        }
    `)
    console.log(data)
        return (
            <Layout>
                    <SEO title="Working with Gatsby Image" />
                    <h1>Photos</h1>
                <Img fixed={data.image.childImageSharp.fixed}
                     alt={"One Cool Dog!"}

                    />
                <Img fluid={data.image.childImageSharp.fluid}
                     alt={"One Cool Dog!"}

                />
                <h1>Gallery</h1>
                <div className={"gallery"}>
                    {data.images.nodes.map(image => (
                        <Img key = {image.id}  fixed={image.childImageSharp.fixed}
                        />
                        ))}
                </div>
            </Layout>
        )
}
export default Photos


