import './Home.css'
import { useState } from 'react'
import BlogList from '../blog-list/BlogList';

const Home = () => {
    // const [title, setTitle] = useState('All Blogs !')
    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    ])
    
    const getBlogsByAuthor = (author) => {
        return blogs.filter((item) => item.author === author)
    }
 
    return (
        <div className="home">
            <BlogList blogs={blogs} title="All Blogs !"></BlogList>
            <BlogList blogs={getBlogsByAuthor('mario')} title="Mario's Blogs !"></BlogList>
        </div>
    );
}

export default Home;