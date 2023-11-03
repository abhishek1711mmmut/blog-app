import "./App.css";
import { useContext, useEffect } from "react";
import { AppContext } from "./context/AppContext";
import { Route, Routes, useLocation, useSearchParams } from "react-router-dom";
import Home from "./pages/Home";
import BlogPage from "./pages/BlogPage";
import TagPage from "./pages/TagPage";
import CategoryPage from "./pages/CategoryPage";


export default function App() {
  const { fetchBlogPosts } = useContext(AppContext);

  const [searchParams, setSearchParams]=useSearchParams();
  const location=useLocation();

  useEffect(() => {
    const page=searchParams.get('page')??1;
    // in above expression, if it get page value, then that is stored else 1 is stored
    if(location.pathname.includes('tags')){
      // iska mtlb tag wala page show krna hai
      const tag=location.pathname.split('/').at(-1).replaceAll('-',' ');
      // -1 represents the last value
      fetchBlogPosts(Number(page),tag);
    }
    else if(location.pathname.includes('categories')){
      const category=location.pathname.split('/').at(-1).replaceAll('-',' ');
      fetchBlogPosts(Number(page),category);
    }
    else{
      fetchBlogPosts(Number(page));
    }
  }, [location.pathname, location.search]);

  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/blog/:blogId" element={<BlogPage/>}/>
      <Route path="/tags/:tag" element={<TagPage/>}/>
      <Route path="/categories/:category" element={<CategoryPage/>}/>
    </Routes>
  );
}
