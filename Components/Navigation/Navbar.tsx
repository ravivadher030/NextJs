import Image from 'next/image'
import Link from 'next/link'
import React,{useState} from 'react'
import {HiMenuAlt3} from 'react-icons/hi'
export default function Navbar() :React.ReactElement {
    const [toggle,setToggle]= useState(false)
    return (
    <nav className="container mx-auto py-5 flex flex-wrap justify-between items-center font-[Signika]">
        <div className='logo'>
            <Image className='rounded-full cursor-pointer' src='/ravi.jpg' height={50} width={50} alt='Site Logo'/>
        </div>
        <button className='navbar-expand cursor-pointer md:hidden' onClick={()=>{setToggle(!toggle)}}>
            <HiMenuAlt3 className='text-2xl'/>
        </button>
        <div className={`${toggle?'block mx-3':'hidden'}  w-full md:w-auto md:flex`}>
            <ul className='flex flex-col md:flex md:flex-row mx-3 items-center space-y-3 md:space-y-0 gap-x-6'>
                <li><Link href='/' className=' hover:text-sky-500'>Home</Link></li> 
                <li><Link href='/profile' className=' hover:text-sky-500'>Profile</Link></li> 
                <li><Link href='/qualification' className=' hover:text-sky-500'>Qualification</Link></li> 
                <li><Link href='/experience' className=' hover:text-sky-500'>Experience</Link></li> 
                <li><Link href='/skill' className=' hover:text-sky-500'>Skill</Link></li> 
            </ul>
        </div>
    </nav>
  )
}
