import React, { useEffect, useState } from 'react';
import './App.css';
import { AiOutlineSearch } from "react-icons/ai";
import axios from 'axios';

export default function MovieApp() {
    const [movies, setMovies] = useState([]);
    const [sortBy, setSortBy] = useState('popularity.desc');
    const [searchQuery, setSearchQuery] = useState('');
    const [genres, setGenres] = useState([]);
    const [selectedGenre, setSelectedGenre] = useState('');
    const [expandedMovieId, setExpandedMovieId] = useState(null);

    // Fetch genres on component mount
    useEffect(() => {
        const fetchGenres = async () => {
            try {
                const response = await axios.get(
                    'https://api.themoviedb.org/3/genre/movie/list',
                    {
                        params: {
                            api_key: 'afd8e97aa856fc0ccaa601681d56510e',
                        },
                    }
                );
                setGenres(response.data.genres);
            } catch (error) {
                console.error('Error fetching genres:', error);
            }
        };
        fetchGenres();
    }, []);

    // Fetch movies when search query, sort option, or selected genre changes
    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await axios.get(
                    'https://api.themoviedb.org/3/discover/movie',
                    {
                        params: {
                            api_key: 'afd8e97aa856fc0ccaa601681d56510e',
                            sort_by: sortBy,
                            page: 1,
                            with_genres: selectedGenre,
                            query: searchQuery,
                        },
                    }
                );
                setMovies(response.data.results);
            } catch (error) {
                console.error('Error fetching movies:', error);
            }
        };
        fetchMovies();
    }, [searchQuery, sortBy, selectedGenre]);

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const handleSearchSubmit = async () => {
        if (searchQuery.trim()) {
            try {
                const response = await axios.get(
                    'https://api.themoviedb.org/3/search/movie',
                    {
                        params: {
                            api_key: 'afd8e97aa856fc0ccaa601681d56510e',
                            query: searchQuery,
                        },
                    }
                );
                setMovies(response.data.results);
            } catch (error) {
                console.error('Error searching for movies:', error);
            }
        } else {
            // Reset movies if search query is empty
            setSearchQuery('');
            setSelectedGenre('');
            setSortBy('popularity.desc');
        }
    };

    const handleSortChange = (event) => {
        setSortBy(event.target.value);
    };

    const handleGenreChange = (event) => {
        setSelectedGenre(event.target.value);
    };

    const toggleDescription = (movieId) => {
        setExpandedMovieId(expandedMovieId === movieId ? null : movieId);
    };

    return (
        <div className='container'>
            <h1>MovieHouse</h1>
            <div className='search-bar'>
                <input
                    type='text'
                    placeholder='Search Movie...'
                    value={searchQuery}
                    onChange={handleSearchChange}
                    className='search-input'
                />
                <button onClick={handleSearchSubmit} className='search-button'>
                    <AiOutlineSearch />
                </button>
            </div>
            <div className='filters'>
                <label htmlFor='sort-by'>Sort By:</label>
                <select id='sort-by' value={sortBy} onChange={handleSortChange}>
                    <option value="popularity.desc">Popularity Descending</option>
                    <option value="popularity.asc">Popularity Ascending</option>
                    <option value="vote_average.desc">Rating Descending</option>
                    <option value="vote_average.asc">Rating Ascending</option>
                    <option value="release_date.desc">Release Date Descending</option>
                    <option value="release_date.asc">Release Date Ascending</option>
                </select>
                <label htmlFor='genre'>Genre:</label>
                <select id='genre' value={selectedGenre} onChange={handleGenreChange}>
                    <option value="">All Genres</option>
                    {genres.map((genre) => (
                        <option key={genre.id} value={genre.id}>
                            {genre.name}
                        </option>
                    ))}
                </select>
            </div>
            <div className="movie-wrapper">
                {movies.length > 0 ? (
                    movies.map((movie) => (
                        <div key={movie.id} className='movie'>
                            <img
                                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                alt={movie.title}
                            />
                            <h2>{movie.title}</h2>
                            <p className='rating'>Rating: {movie.vote_average}</p>
                            {expandedMovieId === movie.id ? (
                                <p>{movie.overview}</p>
                            ) : (
                                <p>{movie.overview.substring(0, 150)}...</p>
                            )}
                            <button onClick={() => toggleDescription(movie.id)}>
                                {expandedMovieId === movie.id ? 'Show Less' : 'Show More'}
                            </button>
                        </div>
                    ))
                ) : (
                    <p>No movies found.</p>
                )}
            </div>
        </div>
    );
}
