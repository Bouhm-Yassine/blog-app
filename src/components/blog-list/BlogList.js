const BlogList = ({blogs, title, deleteBlog}) => {

    return (
        <div className="blog-list">
            <h3>{title}</h3>
            <hr></hr>
            {
                blogs.map((blog) => 
                    <div className="blog-preview" key={blog.id}>
                        <h2>{blog.title}</h2>
                        <p>Written by {blog.author}</p>
                        <button onClick={() => deleteBlog(blog.id)}>Delete Blog</button>
                    </div>
                )
            }
        </div>
    );
}
 
export default BlogList
