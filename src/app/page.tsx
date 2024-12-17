import React from 'react'
import { Camera, Globe } from 'lucide-react'
import Clock from '@/components/Clock'
import Link from 'next/link'

const LockScreen = () => {
  return (
  //  <LockScreen /> 
  <Link href={'login'}>
    <div className="bg-container w-full h-screen text-white flex flex-col justify-between">
    {/* LockScreen Header */}
     <div className="w-11/12 px-6 mx-auto py-10 flex justify-between">
     {/*LockScreen Details Container */}
     <div className="flex gap-4 justify-center">
      <div className="p-1 bg-neutral-500 rounded-full self-start flex justify-center items-center"><Globe /></div>
      <div className="w-96">
      <p className='text-xl'>
        A new co-pilot will give researchers in France more time to focus on medicine and treatment.
      </p>
      </div>
      </div>
      {/*LockScreen Reviews Container */}
     <div className="flex gap-3">
     <div className="p-1 bg-neutral-500 rounded-full self-start flex justify-center items-center"><Camera /></div>
      <div className="">
      <p className='text-xl'>
        Like the image you see ?
      </p>
      </div>
     </div> 
     </div>
     {/* LockScreen Hero */}
      <div className="flex gap-4 justify-center items-center place-self-center">
      <div className="p-1 bg-neutral-500 rounded-full self-start flex justify-center items-center"><Globe /></div>
      <div className="w-96">
      <p className='text-xl'>
       Researchers in France are turning to AI to assist with the none research parts of their jos
      </p>
      </div>
      </div>
      {/* LockScreen Time Display */}
      <div className="w-11/12 px-6 mx-auto py-10">
        <Clock />
      </div>
    </div>
  </Link>
  )
}

export default LockScreen