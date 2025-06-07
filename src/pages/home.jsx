import "../css/Home.css"
import MovieCard from "../components/MovieCard";
import { searchMovies, popularMovies } from "../services/service";
import { useState, useEffect } from "react";
function Homepage() {
    const HandleSubmit = async (e) => {
        e.preventDefault();
        if(!currval.trim())return;
        if(loading==true)return;
        setLoading(true);
        try{
           const searchResults=await searchMovies(currval);
            setMovies(searchResults);
        }
        catch(err){
            setError("Can't load movies...")
            console.log("error : ",err)
        }
        finally{
            setLoading(false);
        }
    }
    const [currval, setval] = useState("");
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const loadPopularMovies = async () => {
            try {
                const popMovies = await popularMovies();
                setMovies(popMovies);
                setError(null);
            }
            catch (err) {
                console.log("error : ", err);
                setError("Failed to load movies");
            }
            finally {
                setLoading(false);
            }
        }
        loadPopularMovies();
    }, [])
    return (
        <div className="home">
            <form action="" className="search-form" onSubmit={HandleSubmit}>
                <input className="search-input" type="text" placeholder="Type movie name..." value={currval} onChange={(e) => (setval(e.target.value))} />
                <button type="submit" className="search-button">submit</button>
            </form>
            {error && <div className="error-message">{error}</div>}
            {loading ? <div><h1>Loading....</h1></div> : <div className="movies-grid">
                {movies.map((movie) => (
                    <MovieCard movie={movie} key={movie.id} />
                ))}
            </div >
            }
        </div>
    );
}
export default Homepage;