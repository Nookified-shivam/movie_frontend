import "../css/MovieCard.css"
function MovieCard({movie}){
    function LikeOnClick(){
alert("liked");
    }
    return(
        <div className="movie-card">
            <div className="movie-poster">
                <img src={movie.url} alt={movie.name} />
                <div className="movie-overlay">
                <button className="favorite-btn" onClick={LikeOnClick}>❤️</button>
            </div>
            </div>
            <div className="movie-info">
                <h1 className="movie-name">{movie.name}</h1>
                <h1 className="movie-release-date">{movie.releasedate}</h1>
            </div>
        </div>
    )
}
export default MovieCard;