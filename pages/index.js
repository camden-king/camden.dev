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
import About from '../components/About'

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
        <meta name="description" content="Hi! I'm Camden! Come check out some cool stuff that I have made and say hi." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className=''>
        <Hero />
        <About />
        <Projects allProjectData={allProjectData} />
        <ContactForm />
      </main>

      {/* <footer>
        hello world from footer
      </footer> */}
    </div>
  )
}
