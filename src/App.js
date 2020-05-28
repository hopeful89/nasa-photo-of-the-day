import React, { useState, useEffect} from "react";
import axios from 'axios';
import SearchBar from './SearchBar/SearchBar';
import Container from './Container/Container';
import styled from 'styled-components';
import "./App.css";

const Application = styled.div`
  text-align: center;
  border-radius: 1rem;
  height: 95vh;
  width: 90vw;
  margin: 5vh auto;
  background: rgba(0, 0, 0, .5);
`;

function App() {
  const [newDate, setNewDate] = useState('');
  const [data, setData] = useState();

  useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=mHGVbdKVXrquyz5wsMjkiKgHsQlCv7pTVEo9pjgx&date=${newDate}`)
    .then(response => setData(response.data))
    .catch(err => console.log('axios call app', err))
  }, [newDate])

 

  console.log('newDate', newDate)
  if (!data) return <h3>Loading...</h3>;
  return (
    // Display a loading message while the data is fetching

    <Application>
      <SearchBar setNewDate={setNewDate} />
      <Container obj={data} newDate={newDate} setNewDate={setNewDate}/>
    </Application>
  );
}

export default App;
