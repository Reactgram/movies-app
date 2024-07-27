
import React,{useState} from "react";
import moviesData from "../data/moviesData";

// import MovieDetails from "./MovieDetails";


const ListMovies = ({allMovies}) => {

   
    return(
        <div> 
            <div className="list-movies">
                {
                    moviesData.map((movie,index) =>(
                        <div key={index} onClick={()=>allMovies(movie)} >
                                    <img src={movie.bannerLink} alt={movie.title} />
                                    <h2>{movie.title}</h2>
                        </div>
                    ))
                }
            </div>
            {/* <MovieDetails clickedMovieDetail={clickedMovieDetail} /> */}
        </div>
    )
}

export default ListMovies;