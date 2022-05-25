const BlogList = ({blogs, title}) => {
    
    return (
        <div className="blog-list">
            <h3>{title}</h3>
            <hr></hr>
            {
                blogs.map((blog) => 
                    <div className="blog-preview" key={blog.id}>
                        <h2>{blog.title}</h2>
                        <p>Written by {blog.author}</p>
                    </div>
                )
            }
        </div>
    );
}
 
export default BlogList
