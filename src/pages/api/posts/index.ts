import type { NextApiRequest, NextApiResponse } from 'next'
import {postFilePaths, POSTS_PATH} from "../../../config";
import { promises as fs } from "fs";
import path from "path";
import matter from "gray-matter";
import {Post, PostMetaData} from "../../../components/Article";
import {getMdxFiles} from "../../../utils";


export async function getPosts(): Promise<Post[]> {
    const mdxFiles = await getMdxFiles(POSTS_PATH)
    const posts: Post[] = [];

    for (let mdxFile of mdxFiles) {
        const source = await fs.readFile(mdxFile, 'utf-8')
        const { content, data } = matter(source)
        if(data.published) {
            posts.push({
                filePath: mdxFile,
                data: data as PostMetaData,
                content
            })
        }
    }
    return posts
}

export default async function posts(req: NextApiRequest, res: NextApiResponse<{posts: Post[]}>) {

    const posts = await getPosts()
    res.status(200).json({ posts })
}