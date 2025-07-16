import '../css/favourites.css'; // Importing the CSS file for styling the Favourites component
import { useMovieContext } from '../contexts/MovieContexts';
import MovieCard from '../components/movieCard';

function Favourites(){
    const {favourites}=useMovieContext();

    if(favourites && favourites.length > 0){
        return(
            <div className='favorites'>
                <h2>Your Favorite Movies</h2>
         <div className='movies-grid'>
                    {favourites.map((movie) => (
                       
                        <MovieCard movie={movie} key={movie.id} />
                    ))}
                </div>
                </div>
        )
    }
    return <div className="favourites-empty">
        <h2>No favourites movies yet</h2>
        <p>start adding movies to you favourites</p>
    </div>
}
export default Favourites