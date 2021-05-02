import { graphql } from 'gatsby'
import Home from '../components/pages/Home'

export const query = graphql`
    query FrontPagePosts {
        allMarkdownRemark {
            nodes {
                frontmatter {
                    title
                    date
                    slug
                }
            }
        }
    }
`

export default Home
