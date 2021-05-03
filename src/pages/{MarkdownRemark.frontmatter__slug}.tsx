import { graphql } from 'gatsby'
import BlogPost from '../components/pages/BlogPost'

export default BlogPost

export const pageQuery = graphql`
    query Post($id: String!) {
        markdownRemark(id: { eq: $id }) {
            html
            frontmatter {
                date(formatString: "MMMM DD, YYYY")
                slug
                title
                featuredImage {
                    childImageSharp {
                        gatsbyImageData(layout: FIXED)
                    }
                }
            }
        }
    }
`
