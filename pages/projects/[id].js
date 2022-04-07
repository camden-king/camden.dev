import { getAllProjectIds, getProjectData } from "../../lib/projects"
import Head from "next/head"

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
            <title>Camden King | Computer Science Senior at University of Michigan</title>
            <meta name="description" content="Hi! I'm Camden! Come check out some cool stuff that I have made and say hi." />
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className='text-lg text'>
            <h1>{projectData.title}</h1>
            <p>{projectData.description}</p>
            <div dangerouslySetInnerHTML={{ __html: projectData.contentHtml }} />
        </main>

        {/* <footer>
        hello world from footer
        </footer> */}
    </div>
  )
}
