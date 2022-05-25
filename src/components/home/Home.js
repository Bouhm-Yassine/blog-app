import './Home.css'
import { useState, useEffect } from 'react'
import BlogList from '../blog-list/BlogList';

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    ])
    
    const deleteBlog = (id) => {
        setBlogs(blogs.filter((item) => item.id !== id))
    }

    useEffect(() => {
        console.log("INIT");
    }, []) 
    // Add in this array, states that you want to run use effect hook if tha state changes 
    // If the array is vide, that means the hook will be executed onece at the firs time of rendreing of the component

    
    return (
        <div className="home">
            <BlogList blogs={blogs} title="All Blogs !" deleteBlog={deleteBlog}></BlogList>
        </div>
    );
}

export default Home;