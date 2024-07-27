import React,{useState} from "react";
import "./style.css";

import ListMovies from "./components/ListMovies";
import MovieDetails from "./components/MovieDetails";




const App = () => {
    let [clickedMovieDetail, setClickedMovieDetail] = useState({});

    console.log(clickedMovieDetail);

    return(
        <div>
            <h1>Movies App</h1>
            <div className="movie-container">
                <ListMovies  allMovies={setClickedMovieDetail}/>
                <MovieDetails  clickedMovieDetail={clickedMovieDetail}/>
            </div>
        </div>
    )
}
    

export default App;



// step1:  display only the banner img && and name of the movie
// when any movie banner is clicked, display the details of the movie in a detail