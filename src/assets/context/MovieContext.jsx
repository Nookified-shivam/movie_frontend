import { useEffect, useState, createContext,useContext } from "react";

const MovieContext=createContext();
export const useMovieContext=()=>useContext(MovieContext);
export const MovieProvider=({children})=>{

const [favorites,setFavorites]=useState([]);
useEffect(()=>{
    const storedFav=localStorage.getItem("favorites")
    if(storedFav)setFavorites(JSON.parse(storedFav))
},[])
useEffect(()=>{
    localStorage.setItem("favorites",JSON.stringify(favorites))
},[favorites])

const addFav=(movie)=>{
setFavorites(prev=>[...prev,movie])
}
const removeFav= (movieID)=>{
setFavorites(prev=>prev.filter(movie=>movie.id!==movieID))
}
const isFav=(movieID)=>{
return favorites.some(movie=>movie.id===movieID)
}
const values={
    favorites,
    setFavorites,
    addFav,
    removeFav,
    isFav
};
return(
    <MovieContext.Provider value={values}> 
        {children}
    </MovieContext.Provider>
)
}