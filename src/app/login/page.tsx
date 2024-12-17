import React from 'react'
import { Button } from "@/components/ui/button"
import Image from 'next/image'
import Link from 'next/link'

const page = () => {
  return (
    <div className='bg-blue-600 w-full h-screen flex items-center justify-center'>
      <div className="flex flex-col items-center justify-center gap-2">
        <div className="px-1 rounded-full bg-white">
          <Image src={'/assets/images/user1.png'} alt='user-windows' width={200} height={100} className='rounded-full w-full' />
        </div>
        <div className="title">
          <p className='text-6xl text-white'>Viking</p>
        </div>
        <div className="input">
        {/* <form className="max-w-sm mx-auto"> 
          <input type="password" value="password" aria-describedby="helper-text-explanation" className="bg-gray-300 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='Password' />
        </form> */}
         <Button  variant="secondary" className='text-xl text-gray-700 px-6 py-5' asChild>
           <Link href="/login">Sign In</Link>
        </Button>
        </div>
      </div>
    </div>
  )
}

export default page