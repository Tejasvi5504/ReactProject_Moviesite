import MovieCard from "../components/movieCard";
import { useState, useEffect } from "react";
import "../css/home.css"; // Importing the CSS file for styling the Home component
import { searchMovies, getPopularMovies } from "../services/api";

function Home() {
    const [searchQuery, setSearchQuery] = useState("");

    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
 
    useEffect(() => {
        const loadPopularMovies = async () => {
            try {
                setLoading(true);
                const popularMovies = await getPopularMovies();
                setMovies(popularMovies);
                setError(null);
            } catch (error) {
                console.error("Error fetching popular movies:", error);
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        loadPopularMovies();
    }, []);

    const handleSearch = async (e) => {
        e.preventDefault();
       if(!searchQuery.trim())return; 
       if(loading)return;
        setLoading(true);
       try{
          const searchResults = await searchMovies(searchQuery);
          setMovies(searchResults);
       }
       catch(err){
           console.log(err);
           setError(error.message);
       }
       finally {
            setLoading(false);
        }
        
      
       
    };

    return (
        <div className='home'>
            <form onSubmit={handleSearch} className='search-bar'>
                <input
                    type='text'
                    placeholder='Search for a movie...'
                    className='search-input'
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button type='submit' className='search-button'>
                    Search
                </button>
            </form>

            {error && <div className='error'>Error: {error}</div>}

            {loading ? (
                <div className='loading'>Loading movies...</div>
            ) : (
                <div className='movies-grid'>
                    {movies.map((movie) => (
                        //    movie.title.toLowerCase().startsWith(searchQuery) &&<MovieCard movie={movie} key={movie.id} />
                        //
                        //  //movie search useing state
                        <MovieCard movie={movie} key={movie.id} />
                    ))}
                </div>
            )}
        </div>
    );
}
export default Home;


//a context will allow state to be globally accessible across components within provided context
