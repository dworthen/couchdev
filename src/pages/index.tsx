import Head from 'next/head'
import Link from 'next/link'
import {baseUrl, postFilePaths, POSTS_PATH} from "../config";
import * as fs from "fs";
import path from "path";
import matter from "gray-matter";
import Card from "../components/Card";
// import styles from '../styles/Home.module.css'
import {getPosts} from './api/posts'

export default function Home({ posts }) {
  return (
    <div>
      <Head>
        <title>Couch Dev</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
          {posts.map((post) => (
              <Card post={post} key={post.filePath}/>
          ))}
      </main>

    </div>
  )
}

export async function getStaticProps() {
    const posts = await getPosts()

    return { props: { posts } }
}
