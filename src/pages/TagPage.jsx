import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Header from '../components/Header';
import Blogs from '../components/Blogs';
import Pagination from '../components/Pagination';


const TagPage = () => {
  const navigation=useNavigate();
  const location=useLocation();
  const tag=location.pathname.split('/').at(-1);
  return (
    <div className='max-w-[750px] mx-auto'>
        <Header/>
        <div className='mt-[80px] flex items-center gap-x-10'>
          <button onClick={()=>navigation(-1)}
          className='border border-slate-500 px-3 py-1 rounded-md'>
            back
          </button>
          <h2 className='font-bold'>Blogs Tagged <span className='text-blue-500'>#{tag}</span></h2>
        </div>
        <Blogs/>
        <Pagination/>
    </div>
  )
}

export default TagPage