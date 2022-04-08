import { getAllProjectIds, getProjectData } from "../../lib/projects"
import Head from "next/head"
import Image from "next/image"

export async function getStaticPaths() {
    const paths = getAllProjectIds()
    return {
        paths, 
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const projectData = await getProjectData(params.id)
    return {
        props: {
            projectData
        }
    }
}

export default function Projects({ projectData }) {
  return (
    <div className=''>
        <Head>
            <title>{projectData.title} | Camden King</title>
            <meta name="description" content={projectData.description} />
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className='text-lg grid place-items-center p-4'>
            <div className="max-w-2xl">
                <h1 className="">{projectData.title}</h1>
                <div dangerouslySetInnerHTML={{ __html: projectData.contentHtml }} />   
            </div>
        </main>

        {/* <footer>
        hello world from footer
        </footer> */}
    </div>
  )
}
