import { graphql } from 'gatsby'
import Post from '../components/pages/Post'

export const query = graphql`
    query Post($slug: String!) {
        mdx(slug: { eq: $slug }) {
            body
            frontmatter {
                date(formatString: "MMMM DD, YYYY")
                title
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
