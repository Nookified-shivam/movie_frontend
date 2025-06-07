import "../css/Favorites.css"
import { useMovieContext } from "../assets/context/MovieContext";
import MovieCard from "../components/MovieCard";
function Favourites(){
    const {favorites}=useMovieContext();
    if(favorites.length>0)
        return(
    <div className="favorites">
        <h2>Your favourite movies!!</h2>
      <div className="movies-grid">
                {favorites.map((movie) => (
                    <MovieCard movie={movie} key={movie.id} />
                ))}
            </div >
        </div>
        )
    return(
        <div className="favorites">
           <h2>No favourites adedd yet</h2>
           <h2>Start Adding your favourite movies here...</h2>
        </div>
    )
}
export default Favourites;