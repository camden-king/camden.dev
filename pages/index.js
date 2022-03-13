import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

// components of page
import Projects from '../components/Projects'

// data components
import { getSortedProjectData } from '../lib/projects'
import ContactForm from '../components/ContactForm'
import Hero from '../components/Hero'

export async function getStaticProps() {
  const allProjectData = getSortedProjectData()
  return {
    props: {
      allProjectData
    }
  }
}


export default function Home({ allProjectData }) {
  return (
    <div className=''>
      <Head>
        <title>Camden King | Computer Science Senior at University of Michigan</title>
        <meta name="description" content="Hi! I'm Camden! Come check out some cool stuff that I have made." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className=''>
        <Hero />
        <div id="about" className="min-h-screen grid place-items-center p-4 content-center">
          <p className="text-3xl max-w-2xl text-center">
            I'm <strong className='text-red-500'>Camden</strong>, a senior at the <strong className="text-yellow-300 bg-blue-800">University of Michigan</strong> studying computer science. After graduation I will be moving to the Bay Area to work at Google. I have coached gymnastics, started a landscaping company, and worked at a tech startup. I have a passion for building awesome technology that brings people together. 
          </p>
        </div>
        <Projects allProjectData={allProjectData} />
        <ContactForm />
      </main>

      {/* <footer>
        hello world from footer
      </footer> */}
    </div>
  )
}
