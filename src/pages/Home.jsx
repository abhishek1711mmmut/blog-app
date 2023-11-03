import React from 'react'
import Header from '../components/Header'
import Blogs from '../components/Blogs'
import Pagination from '../components/Pagination'

const Home = () => {
  return (
    <div>
        <div>
            <Header/>
            <div className='max-w-[750px] mx-auto mt-[40px]'>
                <Blogs/>
                <Pagination/>
            </div>
        </div>
    </div>
  )
}

export default Home