import React from 'react'
import { navBar } from '../../Constant'

export const Navbar = ({navigate}) => {
  return (
    <nav className="back  flex items-center justify-between w-full px-5 py-4">
      <div className='relative'>
        <a href="/" >
          <p className='text-2xl font-extrabold tracking-tight text-gray-900 font-header dark:text-gray-200'><span className='text-2xl text-orange-300 dark:text-orange-400'>Pixc</span>lean</p>
        </a>
      </div>

      <ul className='relative md:left-[20rem] left-0 flex gap-5 py-3'>
        {navBar.map((index) => (
          <li key={index.id}>
            <a href={index.link} className='hover:text-blue-600 p-1/2 duration-75 dark:text-gray-200'>{index.title}</a>
          </li>
          
        ))}
      </ul>
      <button className=" relative -left-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold 
        px-5 py-2 rounded-lg shadow transition"
        onClick={()=>navigate('/login')}>Sign Up</button>
    </nav>
  )
}

