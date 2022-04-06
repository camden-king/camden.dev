import React from 'react'
import GoogleEphasized from './GoogleEphasized'

export default function About() {
  return (
    <div id="about" className="min-h-screen grid place-items-center p-4 content-center">
        <p className="text-3xl max-w-2xl text-center">
            I'm <strong className='text-red-500'>Camden</strong>, a senior at the <strong className="text-yellow-300 bg-blue-800">University of Michigan</strong> studying computer science. After graduation I will be moving to the Bay Area to work at <GoogleEphasized />. I have coached gymnastics, started a landscaping company, and worked at a tech startup. I have a passion for building awesome technology that brings people together. 
        </p>
    </div>
  )
}
