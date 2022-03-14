import React from 'react';
import Alert from '../UI/Alert';

export default function ContactForm() {
  const nameRef = React.createRef();
  const emailRef = React.createRef();
  const messageRef = React.createRef();
  const [success, setSuccess] = React.useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    setSuccess(false);

    const data = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      message: messageRef.current.value,
    }
    console.log('data:', data);
   
    const response = await fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (response.ok) {
      setSuccess(true);
      event.target.reset();
    } 
  }

  // A contact form with a name, email, and message using tailwind css.
  // TODO: Add a better validation both UI, logic, and backend.
  return (
    <div id="contact" className="min-h-screen grid place-items-center content-center p-4">
      <div className="max-w-8xl w-full flex flex-wrap justify-center">
        <h2 className='text-4xl font-bold text-center w-full'>
          Contact me:
        </h2>
        <form className="w-full max-w-lg" onSubmit={handleSubmit}>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                Name
              </label>
              <input required className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-first-name" type="text" placeholder="Camden King" autoComplete="name" ref={nameRef} />
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-email">
                Email
              </label>
              <input required className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-email" type="text" placeholder="hi@camden.dev" autoComplete='email' ref={emailRef} />
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-message">
                Message
              </label>
              <textarea required className="appearance-none block w-full bg-gray-200 h-40 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-message" type="text" placeholder="Lets get coffee." ref={messageRef} />
              {success && <Alert type="success">Message sent!</Alert>}
            </div>
          </div>
          <div className="flex items-center justify-center">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline" type="submit">
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
    
  );
}
