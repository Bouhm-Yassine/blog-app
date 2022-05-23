import './App.css';
 
function App() {
  const title = 'BLOG Application'
  const number = 167
  const sick = true
  const person = {"name": "yassine"}
  const url = 'http://www.google.com'
  return (
    <div className="App">
    <div className="content">
      <h1>Person: {person.name}</h1>
      <h2>REACT - {title}</h2>
      <h5>Number of components - {number}</h5>
      <h5>State - {sick ? 'Healthy': 'Sick'}</h5>
      <h5>
        <a href={url} target="_blank" rel='noreferrer'>Click Here</a>
      </h5>
    </div>
    </div>
  );
}

// In order to reuse the component in other files 
export default App;
