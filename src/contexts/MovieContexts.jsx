import { createContext , useState , useContext , useEffect} from "react"

const MovieContext = createContext();

export const useMovieContext = ()=> useContext(MovieContext)

export const MovieProvider = ({children})=> {
    
    const [favourites,setFavorites]=useState([])

    useEffect(()=>{
        const storedFavs = localStorage.getItem("favorites")
        if (storedFavs) setFavorites(JSON.parse(storedFavs))

    },[])
    useEffect(()=>{
        localStorage.setItem("favorites", JSON.stringify(favourites))
    },[favourites])
    
     const addToFavorites = (movie) => {
        setFavorites(prev=>[...prev,movie])

     }
     const removeFromFavorites =(movieId)=>{
       setFavorites(prev=>prev.filter(movie=>movie.id !== movieId)) 
     }
     
     const isFavorite =(movieId)=>{
        return favourites.some(movie=>movie.id === movieId)
     }

     const value ={
        favourites,
        addToFavorites,
        removeFromFavorites,
        isFavorite

     }
    return <MovieContext.Provider value={value}>
        {children}
    </MovieContext.Provider>
}