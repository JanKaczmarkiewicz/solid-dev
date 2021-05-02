import { graphql } from 'gatsby'
import Home from '../components/pages/Home'

export const query = graphql`
    query FrontPagePosts {
        allMarkdownRemark {
            nodes {
                timeToRead
                excerpt
                frontmatter {
                    title
                    date
                    slug
                    tags
                }
            }
        }
    }
`

export default Home
