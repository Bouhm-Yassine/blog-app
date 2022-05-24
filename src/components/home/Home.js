import './Home.css'
import { useState } from 'react'

const Home = () => {
    const [name, setName] = useState('Yassine');

    const handleClick = (event) => {console.log("CLICKED", event);}
    const handleClickParam = (event, name) => {console.log("HELLO", name, event);}


    return (
        <div className="content">
            <h2>Home Component</h2>
            <p>{name}</p>
            <div className="btn-container">
            <button onClick={handleClick}>Click</button>
            <button onClick={(event) => handleClickParam(event, 'YASSINE')}>Click Param</button>
            <button onClick={() => setName('Name Chnaged')}>Click to change name</button>
            </div>
        </div>
    );
}

export default Home;