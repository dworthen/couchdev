import {promises as fs} from "fs";
import {POSTS_PATH} from "../config";
import path from "path";


export async function getMdxFiles(postsPath: string): Promise<string[]> {
    return (await fs.readdir(POSTS_PATH)).map(p => path.join(postsPath, p)).filter((path) => /\.mdx?$/.test(path)).reverse()
}