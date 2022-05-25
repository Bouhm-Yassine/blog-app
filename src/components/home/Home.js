import './Home.css'
import { useState } from 'react'
import BlogList from '../blog-list/BlogList';

const Home = () => {
    const [title, setTitle] = useState('All Blogs !')
    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    ])


    return (
        <div className="home">
            <BlogList blogs={blogs} title={title}></BlogList>

            <button onClick={() => setTitle('All Users !')}>Click Me</button>
        </div>
    );
}

export default Home;