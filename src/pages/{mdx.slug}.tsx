import { graphql } from 'gatsby'
import Post from '../components/pages/Post'

export const query = graphql`
    query PostData($slug: String!) {
        mdx(slug: { eq: $slug }) {
            body
            frontmatter {
                tags
                title
                featuredImage {
                    childImageSharp {
                        gatsbyImageData(
                            layout: FULL_WIDTH
                            height: 400
                            aspectRatio: 3
                        )
                    }
                }
            }
        }
    }
`

export default Post
