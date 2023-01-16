import React, { useState } from 'react';
import { useEffect } from 'react';
import './App.css'
import Sicon from './search.svg' 
import MovieCard from './MovieCard';

const API_key = 'http://www.omdbapi.com/?i=tt3896198&apikey=8a3af7d3';
const movie1={
    "Title": "Star Wars: Episode I - The Phantom Menace",
    "Year": "1999",
    "imdbID": "tt0120915",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BYTRhNjcwNWQtMGJmMi00NmQyLWE2YzItODVmMTdjNWI0ZDA2XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
}

const App = ()=>{
    const [movies,setMovies] = useState([]);
    const [search,setSearch] = useState('');
const Smovies = async (title)=>{
const response = await fetch(`${API_key}&s=${title}`);
const data = await response.json();

setMovies(data.Search);
}

useEffect (() =>{
   Smovies('star wars');
}, [])

return (
    <div className='app'>
        <h1>MovieApp</h1>
        <div className='search'>
            <input 
            placeholder='type wanted movies'
            value={search}
            onChange = {(e)=>setSearch(e.target.value)}
            />
            <img
            src={Sicon}
            alt= "search"
            onClick={()=>Smovies(search)}
            />
        </div>

        {
            movies?.length > 0
            ?(
                <div className='container'>
                {
                 movies.map((movie)=>(
                <MovieCard movie={movie} />
                 ))   
                }
             </div>
            ) :
                <div className='empty'>
                <h2>No films</h2>
                </div>
        }
       
    </div>
);
}

export default App;