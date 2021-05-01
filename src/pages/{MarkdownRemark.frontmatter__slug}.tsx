import { graphql } from 'gatsby'
import Post from '../components/pages/BlogPost/BlogPost'

export const postQuery = graphql`
    query Post($id: String!) {
        markdownRemark(id: { eq: $id }) {
            html
            frontmatter {
                date(formatString: "MMMM DD, YYYY")
                slug
                title
            }
        }
    }
`

export default Post
