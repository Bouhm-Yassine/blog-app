import './Home.css'

const handleClick = (event) => {
    console.log("CLICKED", event);
}

const handleClickParam = (event, name) => {
    console.log("HELLO", name, event);
}

const Home = () => {
    return (
        <div className="content">
            <h2>Home Component</h2>
            <button onClick={handleClick}>Click</button>
            <button onClick={(event) => handleClickParam(event, 'YASSINE')}>Click Param</button>
        </div>
    );
}

export default Home;