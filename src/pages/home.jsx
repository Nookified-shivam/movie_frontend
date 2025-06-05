import MovieCard from "../components/MovieCard";

function Homepage(){
    const movies=[
        {id:1,name:"singham",releasedate:"10-10-2010"},
        {id:2,name:"chulbul",releasedate:"20-10-2011"},
        {id:3,name:"dabang",releasedate:"10-10-2012"}
    ];
    return(
        <div className="movie-grid">
            <form action="" className="movie-search">
                <input type="text" placeholder="Type movie name..."/>
                <button type="submit" className="submit-btn">submit</button>
            </form>
            {movies.map(movie=>(<MovieCard movie={movie} key={movie.id}/>))}
        </div>
    );
}
export default Homepage;