import "./css/app.css"
import MovieCard from './components/MovieCard'
import Homepage  from './pages/home'
import {Routes,Route} from "react-router-dom"
import Favourites from './pages/favourite'
import Navbar from './components/navbar'
import { MovieProvider } from "./assets/context/MovieContext"
function App() {
return(
  <MovieProvider>
<Navbar/>
<main className="main-content">
  <Routes>
    <Route path='/' element={<Homepage/>}/>
    <Route path='/favourites' element={<Favourites/>}/>
  </Routes>
</main>
</MovieProvider>
)
}
export default App
