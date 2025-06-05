import { Link } from "react-router-dom"
function Navbar(){
    return(
        <div className="navbar">
            <div className="nav-title">
                <Link to={"/"}>MOVIE APP</Link>
            </div>
            <div className="nav-links">
                <Link to={"/"}>Home</Link>
                <Link to={"/Favourites"}>Favourites</Link>
            </div>
        </div>
    )
}
export default Navbar