import React, {memo} from 'react'
import Link from "next/link"
import dayjs from 'dayjs'
import styled from "styled-components";

export interface PostMetaData {
    title: string
    date: string
    published: boolean
    tags?: string[]
    description: string
    slug: string
}

export interface Post {
    filePath: string,
    content: string,
    data: PostMetaData
}

export interface ArticleProps {
    post: Post
}

const Article: React.FC<ArticleProps> = memo(function Article({post}) {
    return (
        <article key={post.filePath}>
            <StyledDate>{dayjs(post.data.date).format('MMMM DD, YYYY')}</StyledDate>
            <StyledH2><Link as={`/posts/${post.data.slug}`} href={`/posts/[slug]`}>
                <a>{post.data.title}</a>
            </Link></StyledH2>
            <p>
                {post.data.description}
            </p>
            <hr/>
        </article>
    )
})

export default Article;

const StyledDate = styled.span`
  text-transform: uppercase;
  color: hsl(148, 77%, 38%);
  font-weight: bold;
  font-size: .85rem;
  margin: 0;
`

const StyledH2 = styled.h2`
  margin: 0;
`