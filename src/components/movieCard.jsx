
import '../css/movieCard.css'; // Importing the CSS file for styling the MovieCard component
import { useMovieContext } from '../contexts/MovieContexts';

function MovieCard({movie}){//here the movie is a prop passed to the component telling about the movie details
   const { isFavorite, addToFavorites, removeFromFavorites } = useMovieContext();
   
    function handleFavouriteClick(e) {
       e.preventDefault()
       if(isFavorite(movie.id)) {
           removeFromFavorites(movie.id)
       } else {
           addToFavorites(movie)
       }
    }
     return <div className="movie-card">
        <div className="movie-poster">
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title}/>
            <div className="movie-overlay">
                <button className="favourite-button" onClick={handleFavouriteClick}>
                    {isFavorite(movie.id) ? "❤️" : "🤍"}
                </button>
            </div>

        </div>
        <div className="movie-info">
            <h3>{movie.title}</h3>
            <p>{movie.release_date?.split("-")[0]}</p>
        </div>
        
     </div>
}
export default MovieCard;
//by writing export default MovieCard; we are exporting the component so that it can be used in other files