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

const ResponsiveImage = (props) => {
    return (
        <div className="flex justify-center">
            <Image {...props} />
        </div>)
}

const components = {
    Image: ResponsiveImage,
}

export default function Projects({ data, content }) {
  return (
    <div className=''>
        <Head>
            <title>{data.title} | Camden King</title>
            <meta name="description" content={data.description} />
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className='grid place-items-center p-4'>
            <div className="">
                {data.live_link ? 
                    <a href={data.live_link} target="_blank" rel="noopener noreferrer">
                        <h1 className="font-bold text-7xl mt-20 mb-9 hover:underline">{data.title}</h1>
                    </a>
                :   
                    <h1 className="font-bold text-7xl mt-20 mb-9">{data.title}</h1>
                }
                <div className="prose max-w-3xl">
                    <MDXRemote components={components} {...content} />
                </div>
                
            </div>
        </main>

        {/* <footer>
        hello world from footer
        </footer> */}
    </div>
  )
}
