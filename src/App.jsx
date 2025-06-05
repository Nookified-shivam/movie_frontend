import './App.css'
import MovieCard from './components/MovieCard'
import Homepage  from './pages/home'
import {Routes,Route} from "react-router-dom"
import Favourites from './pages/favourite'
import Navbar from './components/navbar'
function App() {
return(
  <div>
    <div className="navbar">
<Navbar/>
    </div>
<main className="main-content">
  <Routes>
    <Route path='/' element=<Homepage/>/>
    <Route path='/favourites' element=<Favourites/>/>
  </Routes>
</main>
</div>
)
}
export default App
