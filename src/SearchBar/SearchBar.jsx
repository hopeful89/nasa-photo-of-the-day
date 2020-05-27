import React, { useState, useRef } from 'react'
import './SearchBar.css'

const SearchBar = (props) => {
    const [query, setQuery] = useState('example 2020-05-14');
    
    function handleChange(e) {
        setQuery(e.target.value);
      }

    function onSubmit(e) {
        props.setNewDate(query);
        e.preventDefault();
    }

    return (
        <form onSubmit={onSubmit}>
            <label id ="date">  </label>
            <input type="text" onChange={handleChange} value={query}></input>
            <input type="submit" value="Submit"></input>
        </form>
    )
} 

export default SearchBar