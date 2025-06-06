import "../css/Home.css"
import MovieCard from "../components/MovieCard";
import { useState } from "react";
function Homepage() {
    const HandleSubmit = (e) => {
        e.preventDefault();
        alert(currval);
    }
    const [currval, setval] = useState("");
    const movies = [
        { id: 1, name: "singham", releasedate: "10-10-2010" },
        { id: 2, name: "chulbul", releasedate: "20-10-2011" },
        { id: 3, name: "dabang", releasedate: "10-10-2012" }
    ];
    return (
<div className="home">
        <form action="" className="search-form" onSubmit={HandleSubmit}>
            <input className="search-input" type="text" placeholder="Type movie name..." value={currval} onChange={(e) => (setval(e.target.value))} />
            <button type="submit" className="search-button">submit</button>
        </form>
         <div className="movies-grid">
            { movies.map(movie => movie.name.toLowerCase().startsWith(currval) && (<MovieCard movie={movie} key={movie.id} />)) }
        </div >
        </div>
    );
}
export default Homepage;