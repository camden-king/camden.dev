import React from 'react'
import GoogleEphasized from './GoogleEphasized'

export default function About() {
  return (
    <div id="about" className="min-h-screen grid place-items-center p-4 content-center">
        <p className="text-3xl max-w-2xl text-center">
            I'm <strong className='text-red-500'>Camden</strong>, I am in the Bay Area working at <GoogleEphasized />. In the past I have coached gymnastics, started a landscaping company, and worked at a tech startup. I have a passion for building awesome technology that brings people together. 
        </p>
    </div>
  )
}
