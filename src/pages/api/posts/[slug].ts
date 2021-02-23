import type { NextApiRequest, NextApiResponse } from 'next'
import {postFilePaths, POSTS_PATH} from "../../../config";
import { promises as fs } from "fs";
import path from "path";
import matter from "gray-matter";
import {Post, PostMetaData} from "../../../components/Card";
import {getMdxFiles} from "../../../utils";
import {getPosts} from "./index";


export async function getPost(slug: string): Promise<Post|undefined> {

    const posts = await getPosts()

    return posts.find(post => post.data.slug === slug)
}

export default async function post(req: NextApiRequest, res: NextApiResponse<{post: Post}|string>) {

    const {
        query: { slug },
    } = req

    const post = await getPost(slug as string)
    if(!post) {
        res.status(404).send("404");
    } else {
        res.status(200).json({ post })
    }
}