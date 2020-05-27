import React, { useState, useEffect} from "react";
import axios from 'axios'
import SearchBar from './SearchBar/SearchBar'
import Container from './Container/Container'
import "./App.css";

function App() {
  const [newDate, setNewDate] = useState('')
  const [data, setData] = useState([])

  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=mHGVbdKVXrquyz5wsMjkiKgHsQlCv7pTVEo9pjgx' + `&date=${newDate}`)
    .then(response => setData(response.data))
    .catch(err => console.log('axios call app', err))
  }, [newDate])

 

  console.log('newDate', newDate)
  if (!data) return <h3>Loading...</h3>;
  return (
    // Display a loading message while the data is fetching

    <div className="App">
      <SearchBar setNewDate={setNewDate} />
      <Container obj={data} newDate={newDate} setNewDate={setNewDate}/>
    </div>
  );
}

export default App;
