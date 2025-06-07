const url="https://api.themoviedb.org/3"
const API_KEY="8f562769815878f154b81ac043c063ac"
export const popularMovies= async ()=>{
    const response = await fetch(`${url}/movie/popular?api_key=${API_KEY}`)
    const data = await response.json();
    return data.results
}
export const searchMovies= async (query)=>{
    const response = await fetch(`${url}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`)
    const data = await response.json();
    return data.results
}