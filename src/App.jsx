// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './css/App.css';
import Favourites from './pages/favourites.jsx';
import Home from './pages/Home.jsx';
import {Routes,Route} from "react-router-dom";
import NavBar from './components/navBar.jsx';
import { MovieProvider } from './contexts/MovieContexts.jsx'; 




// import MovieCard from './components/movieCard.jsx'; 
// //this is a default import {movieCard} from './components/movieCard'; //this is a named import is used when we want to import a specific component from a file for this we need to write export in starting of the component


// function App() {
  

//   return (
//    /*<>
   
//    <Text display="hello merea naame tejasvi hai"/>
//     <Text display="hello merea naame tejasvi hai"/>
//    </>
//    */
   
//   )
// }
//here the app is a component that returns jsx code or react code
//we the functioo app we can only return one one element 
//inside that element we can have multiple elements
//but parent element can only be one
//if we do not want to use a div we can use a fragmen <>

/*function Text({display}){
  return <div>
    <p>{display}</p>
  </div>
}*/

//text is a component that returns jsx code is should be capitalized
//components are reusable pieces of code that can be used in multiple places
//in components we can use props to pass data to the component,prop are the properties of the component
//props are passed as an object to the component
//props are placed inside the component as an argument in curly braces


function App() {

  // const movieNumber=3;
  
  

  return(
    // <>
    // {/* {movieNumber ===1 ? 
    // (<MovieCard movie={{title: "Inception", releaseDate: "2010", url: "https://example.com/inception.jpg"}}/>
    // ) :(
    //   <MovieCard movie={{title: "Interstellar", releaseDate: "2014", url: "https://example.com/interstellar.jpg"}}/>
    // )}
    
    // //wihtout anuy if else statement we can use conditional rendering to render a component based on a condition
    // {movieNumber ===3&& <MovieCard movie={{title: "The Dark Knight", releaseDate: "2008", url: "https://example.com/darkknight.jpg"}}/>} */}
    
    // {/* <Home />
    // </> */}

    <MovieProvider>
    <NavBar />
    <main className="maine-content">
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/favourites" element={<Favourites/>} />
      </Routes>
    </main>

    //inside routes we can define different routes and map different components//
    
    </MovieProvider>


  );
}

//conditional rendering is used to render a component based on a condition

//we can write js code inside the component before the return statement
//we can also write js code inside the return statement using curly braces




export default App;


