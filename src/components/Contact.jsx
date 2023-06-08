import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#dbdbdb] flex justify-center items-center p-4 text-[#5c5c5c]' >
      <form action="https://getform.io/f/1d859e14-ce94-4ecb-b29a-1e99dc3b9d93" method='POST' className='flex flex-col max-w-[600px] w-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-[#be8a5e]'>
            Contact
          </p>
          <p className='text-[#5c5c5c] py-4'>
            Submit the form below or shoot me an email - gerardopsada@gmail.com
          </p>
        </div>
        <input className='bg-[#E5E5E5] p-2' type="text" placeholder='Name' name='name' />
        <input className='my-4 p-2 bg-[#E5E5E5]' type="email" placeholder='Email' name='email' />
        <textarea className='bg-[#E5E5E5] p-2' name="message" id="" rows="10" placeholder='Message'></textarea>
        <button className='text-white border-2 hover:bg-[#be8a5e] hover:border-[#be8a5e] px-4 py-3 mx-auto my-4 flex items-center'>
          Let's Collaborate</button>

      </form>
    </div>
  )
}

export default Contact