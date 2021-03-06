import React, {memo} from 'react'
import {getPost} from "../api/posts/[slug]";
import renderToString from "next-mdx-remote/render-to-string";
import {getMdxFiles} from "../../utils";
import {getPosts} from "../api/posts";
import hydrate from "next-mdx-remote/hydrate";
import {PostMetaData} from "../../components/Article";
import {MdxRemote} from "next-mdx-remote/types";
import CodeBlock from "../../components/CodeBlock";

export interface PostProps {
    source: MdxRemote.Source
    frontMatter: PostMetaData
}

const components = {
    pre: props => <div {...props} />,
    code: CodeBlock
  }

const Post: React.FC<PostProps> = memo(function Post({source, frontMatter}) {
    const content = hydrate(source, {components})
    return (
        <main>
            <h1>{frontMatter.title}</h1>
            {content}
        </main>
    )
})

export default Post;

export async function getStaticProps({ params }) {
    const { slug } = params

    const post = await getPost(slug)

    const mdxSource = await renderToString(post.content)

    return {
        props: {
            source: mdxSource,
            frontMatter: post.data,
        },
    }
}

export async function getStaticPaths() {
    const paths = (await getPosts())
        .map((post) => ({ params: { slug: post.data.slug } }))

    return {
        paths,
        fallback: false,
    }
}