import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'
import { serialize } from "next-mdx-remote/serialize";


const projectsDirectory = path.join(process.cwd(), '/data/projects')

export function getSortedProjectData() {
  // Get file names under /projects
  const fileNames = fs.readdirSync(projectsDirectory)
  const allProjectsData = fileNames.map(fileName => {
    // Remove ".mdx" from file name to get id
    const id = fileName.replace(/\.mdx$/, '')

    // Read markdown file as string
    const fullPath = path.join(projectsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the project metadata section
    const matterResult = matter(fileContents)

    // Combine the data with the id
    return {
      id,
      ...matterResult.data
    }
  })
  // Sort projects by priority
  return allProjectsData.sort(({ priority: a }, { priority: b }) => {
    if (a < b) {
      return 1
    } else if (a > b) {
      return -1
    } else {
      return 0
    }
  })
}

export function getAllProjectIds() {
  const fileNames = fs.readdirSync(projectsDirectory)

  // Returns an array that looks like this:
  // [
  //   {
  //     params: {
  //       id: 'ssg-ssr'
  //     }
  //   },
  //   {
  //     params: {
  //       id: 'pre-rendering'
  //     }
  //   }
  // ]
  return fileNames.map(fileName => {
    return {
      params: {
        id: fileName.replace(/\.mdx$/, '')
      }
    }
  })
}

export async function getProjectData(id) {
  const fullPath = path.join(projectsDirectory, `${id}.mdx`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  // Use gray-matter to parse the post metadata section
  const { data, content } = matter(fileContents)

  const mdxSource = await serialize(content)

  // Combine the data with the id
  return {
    data, 
    mdxSource
  }
}