import { graphql } from 'gatsby'
import Post from '../components/pages/Post'

export const query = graphql`
    query PostData($slug: String!) {
        mdx(slug: { eq: $slug }) {
            body
            frontmatter {
                tags
                title
                isDarkMode
                featuredImage {
                    childImageSharp {
                        gatsbyImageData(layout: FIXED, height: 400)
                    }
                }
            }
        }
    }
`

export default Post
