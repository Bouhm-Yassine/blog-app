import './Home.css'
import { useState, useEffect } from 'react'
import BlogList from '../blog-list/BlogList';

const Home = () => {
    const [blogs, setBlogs] = useState(null)
    
    const deleteBlog = (id) => {
        const newBlogs = blogs.filter((item) => item.id !== id)
        setBlogs(newBlogs)
    }

    const getBlogs = () => {
        fetch('http://localhost:8000/blogs')
        .then(res => res.json())
        .then(data => setBlogs(data))
    }

    useEffect(() => {
        console.log("INIT");
        getBlogs()
    }, [])

    
    return (
        <div className="home">
            {blogs && <BlogList blogs={blogs} title="All Blogs !" deleteBlog={deleteBlog}></BlogList>}
        </div>
    );
}

export default Home;