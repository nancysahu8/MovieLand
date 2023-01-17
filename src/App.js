import { useEffect, useState} from 'react';
import './App.css';
import MovieCard from './MovieCard';
import SearchIcon from './search.svg'
//c032e2d7

const API_URL = 'http://www.omdbapi.com?apikey=c032e2d7';

const App = () => {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState ('');

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title} `);
        const data = await response.json();

        setMovies(data.Search);
    }

    useEffect(() => {
        searchMovies('Spiderman');
    }, []);
    return (
        <div className='app'>
            <h1> Movieland</h1>

            {/* search container */}
            <div className='search'>
                <input placeholder="Search for movies" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                <img src={SearchIcon} alt="search" onClick={() => searchMovies(searchTerm)}/>
            </div>

            {/* Movie Card Container */}
            {
                movies.length > 0 
                ? (
                    <div className='container'>
                        {movies.map((movie) => (
                            <MovieCard movie={movie}/>
                        ))}
                    </div>
                ) : (
                    <div className='empty'>
                        <h2>No movies found</h2>
                    </div>
                )
            }
        </div>
    );
}

export default App;