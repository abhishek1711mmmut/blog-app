import React, { useContext, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import BlogDetails from '../components/BlogDetails';
import { AppContext } from '../context/AppContext';

const BlogPage = () => {
  const newBaseUrl="https://codehelp-apis.vercel.app/api/";
  const [blog, setBlog]=useState(null);
  const [relatedblogs, setRelatedBlogs]=useState([]);
  const location=useLocation();
  const navigation=useNavigate();
  const {setLoading, loading}=useContext(AppContext);

  const blogId=location.pathname.split('/').at(-1);

  async function fetchRelatedBlogs(){
    setLoading(true);
    let url=`${newBaseUrl}get-blog?blogId=${blogId}`;
    try{
      const res=await fetch(url);
      const data=await res.json();
      setBlog(data.blog);
      setRelatedBlogs(data.relatedBlogs);
    }
    catch(error){
      console.log('Error aa gya in blog id call');
      setBlog(null);
      setRelatedBlogs([]);
    }
  }

  useEffect(()=>{
    if(blogId){
      fetchRelatedBlogs();
    }
  },[location.pathname]);

  return (
    <div className='max-w-[750px] mx-auto mt-[80px]'>
        <Header/>
        <div>
          <button onClick={()=>navigation(-1)}
          className="border-2 border-gray-300 py-1 px-4 rounded-md">
            Back
          </button>
        </div>
        {
          loading? <p>Loading</p>:
          blog?
          (<div>
            <BlogDetails post={blog}/>
            <h2 className='mt-[20px] text-lg font-bold underline'>Related Blogs</h2>
            {
              relatedblogs.map((post)=>(
                <div key={post.id}>
                  <BlogDetails post={post}/>
                </div>
              ))
            }
          </div>):
          <div>
          <p>No blog Found</p>
          </div>
        }
    </div>
  )
}

export default BlogPage