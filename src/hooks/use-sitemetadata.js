
import {useStaticQuery, graphql} from "gatsby"

const useSiteMetaData = () => {
    const data = useStaticQuery(graphql`
        query SiteTitleQuery {
            site(siteMetadata: {}) {
                siteMetadata {
                    description
                    title
                }
            }
        }
    `)
    return data.site.siteMetadata
}
export default useSiteMetaData