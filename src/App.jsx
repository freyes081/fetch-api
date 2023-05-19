import { useState, useEffect } from 'react'


function App() {
const [data, setData] = useState(null);

const fetchData = async () => {
  const response = await fetch('https://api.chucknorris.io/jokes/random');
  const data = await response.json();
  setData(data);
}
useEffect(() => {
  fetchData();
 
}, [])




  const handleClick = () => {
    fetch('https://api.chucknorris.io/jokes/random')
    .then(response => response.json())
    .then(data => setData(data))
    .catch(error => console.log(error))
    
  }
  
  return (
    <>
      <div>{data?.value}</div>
      <button onClick={handleClick}>Nuevo Chiste</button>
    </>
  )
}

export default App
