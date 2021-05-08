import React from 'react'
import { Tag, TagsContainer } from './styled'

type TagsProps = {
    tags: NonNullable<GatsbyTypes.MdxFrontmatter['tags']>
    className?: string
}

const Tags = ({ tags, className }: TagsProps) => (
    <TagsContainer className={className}>
        {tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
        ))}
    </TagsContainer>
)

export default Tags
