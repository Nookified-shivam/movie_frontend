function MovieCard({movie}){
    function LikeOnClick(){
alert("liked");
    }
    return(
        <div className="movie-card">
            <div className="movie-poster">
                <img src="{movie.url}" alt="" />
                <button className="like" onClick={LikeOnClick}>like</button>
            </div>
            <div className="movie-info">
                <h1 className="movie-name">{movie.name}</h1>
                <h1 className="movie-release-date">{movie.releasedate}</h1>
            </div>
        </div>
    )
}
export default MovieCard;