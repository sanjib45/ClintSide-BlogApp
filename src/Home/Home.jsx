import React from 'react'
import Hero from './Hero'
import Blog from './Blog'


const Home = () => {
  return (
    <>
    <div className=' bg-slate-800 text-white container mx-auto mt-8 p-8'>
   <div><Hero/></div>
   <div><Blog/></div>
    </div>
    </>
  )
}

export default Home