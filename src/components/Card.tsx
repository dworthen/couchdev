import React, {memo} from 'react'
import Link from "next/link";

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

export interface CardProps {
    post: Post
}

const Card: React.FC<CardProps> = memo(function Card({post}) {
    return (
        <div className="row" key={post.filePath}>
            <div className="col-sm-12">
                <div className="card fluid">
                    <Link
                        as={`/posts/${post.data.slug}`}
                        href={`/posts/[slug]`}
                    >{post.data.title}
                    </Link>
                </div>
            </div>
        </div>
    )
})

export default Card;