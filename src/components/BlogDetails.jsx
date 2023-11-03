import React from 'react'
import { NavLink } from 'react-router-dom'

const BlogDetails = ({post}) => {
  return (
    <div className='mt-[40px]'>
        <NavLink to={`/blog/${post.id}`}>
            <span className='font-bold'>{post.title}</span>
        </NavLink>
        <p>
            By <span className='italic'>{post.author}</span> on <NavLink className='underline font-semibold' to={`/categories/${post.category.replaceAll(' ','-')}`}>{post.category}</NavLink>
        </p>
        <p>Posted on {post.date}</p>
        <p className='text-[15px] text-black opacity-60'>{post.content}</p>
        <div className='flex gap-x-1'>
            {post.tags.map((tag, index)=>(
                <NavLink key={index} to={`/tags/${tag.replaceAll(' ','-')}`}>
                    <span className='text-blue-500 underline text-sm'>{`#${tag}`}</span>
                </NavLink>
            ))}
        </div>
    </div>
  )
}

export default BlogDetails