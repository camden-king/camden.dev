import { getAllProjectIds, getProjectData } from "../../lib/projects"
import Head from "next/head"
import Image from "next/image"
import { MDXRemote } from "next-mdx-remote";

export async function getStaticPaths() {
    const paths = getAllProjectIds()
    return {
        paths, 
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const post = await getProjectData(params.id)
    return {
        props: {
            data: post.data, 
            content: post.mdxSource,
        }
    }
}

export default function Projects({ data, content }) {
  return (
    <div className=''>
        <Head>
            <title>{data.title} | Camden King</title>
            <meta name="description" content={data.description} />
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className='text-lg grid place-items-center p-4'>
            <div className="max-w-2xl">
                <h1 className="font-bold text-7xl mt-24 mb-12">{data.title}</h1>
                <MDXRemote {...content} />
            </div>
        </main>

        {/* <footer>
        hello world from footer
        </footer> */}
    </div>
  )
}
