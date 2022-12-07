import React, { useState, useEffect } from 'react'

// git add --a
// git commit -m "Initial commit"
// git push 

import './App.css';
import SearchIcon from './search.svg';
import MovieCard from './components/MovieCard';
import AddFavourites from './components/AddFavourites'

const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=50c8169'

const App = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [movies, setMovies] = useState([]);
    const [favourites, setFavourites] = useState([]);

    useEffect(() => {
        searchMovies("Batman");
      }, []);

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        setMovies(data.Search);
    };

    const addFavouriteMovie = (movie) => {
        const newFavouriteList = [...favourites, movie];
        setFavourites(newFavouriteList);
    }

    return(
        <div className = 'app'>
            <h1>Movie Searcher</h1>

            <div className = 'search'>
                <input 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder='Search for a movie...'
                />
                <img 
                    src = {SearchIcon} 
                    alt = 'search' 
                    onClick = {() => searchMovies(searchTerm)}
                />
            </div>

            {movies?.length > 0 ? (
                <div className="container">
                    {movies.map((movie) => (
                        <MovieCard 
                            movie={movie} 
                            // add favourite prop
                            FavouriteComponent={AddFavourites}
                        />
                    ))}
                </div>
            ) : (
                <div className="empty">
                    <h2>No movies found</h2>
                </div>
            )}
        </div>
    );
};

export default App;