import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Hero() {
  return (
    <div className='h-screen text-right flex flex-col justify-center relative text-white'>
        <Image src="/images/front_page.jpg" alt="Camden King" layout='fill' objectFit='cover' objectPosition='center' className='z-0' priority/>

        <h1 className="text-5xl font-bold mr-2 sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl z-10">
            Camden King
        </h1>
        <p className='text-xl text-bold mt-1 mr-2 sm:text-3xl sm:mt-2 md:text-3xl lg:text-4xl z-10'>
            SWE @ Google
        </p>
        <p className='text-xl text-bold mr-2 sm:text-3xl md:text-3xl lg:text-4xl z-10'>
            CS Alum @ Umich
        </p>

        <div className='z-10 mr-2'>
            <Link href='#contact' passHref>
                <button type="button" className="h-10 px-6 mt-4 font-semibold rounded-md bg-blue-500 w-32 justify-self-end">
                    Contact
                </button>
            </Link>
        </div>
    </div>
  )
}
