import React from 'react';

export default function ContactForm() {
  // A contact form with a name, email, and message using tailwind css.
  return (
    <div id="contact" className="min-h-screen grid place-items-center content-center p-4">
      <div className="max-w-8xl w-full flex flex-wrap justify-center">
        <h2 className='text-4xl font-bold text-center w-full'>
          Contact me:
        </h2>
        <form className="w-full max-w-lg" action="https://formspree.io/xqjqgwjq" method="POST">
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                Name
              </label>
              <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-first-name" type="text" placeholder="Camden King" autocomplete="name" />
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-email">
                Email
              </label>
              <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-email" type="text" placeholder="hi@camden.dev" autoComplete='email' />
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-message">
                Message
              </label>
              <textarea className="appearance-none block w-full bg-gray-200 h-40 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-message" type="text" placeholder="Lets get coffee." />
            </div>
          </div>
        </form>
      </div>
    </div>
    
  );
}
