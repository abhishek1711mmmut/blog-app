import React from 'react'
import Header from '../components/Header'
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Blogs from '../components/Blogs';
import Pagination from '../components/Pagination'

const CategoryPage = () => {
  const navigation=useNavigate();
  const location=useLocation();
  const category=location.pathname.split('/').at(-1);

  return (
    <div className='max-w-[750px] mx-auto'>
        <Header/>
        <div className='mt-[90px] flex items-center gap-x-10'>
          <button onClick={()=>navigation(-1)}
          className='border border-slate-500 px-3 py-1 rounded-md'>
            Back
          </button>
          <h2 className='font-bold text-center underline'>
            Blogs on <span>{category}</span>
          </h2>
        </div>
        <Blogs/>
        <Pagination/>
    </div>
  )
}

export default CategoryPage