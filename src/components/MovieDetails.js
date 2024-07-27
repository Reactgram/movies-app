import React from "react";


const MovieDetails = ({clickedMovieDetail}) => {
    
    // console.log(clickedMovieDetail);

    return(
        <div className="movie-info">
                {
                    clickedMovieDetail.title!==undefined && (
                        <div>
                                <img src={clickedMovieDetail.bannerLink} alt={clickedMovieDetail.title} />
                                <h2>{clickedMovieDetail.title}</h2>
                                <p>Actor: {clickedMovieDetail.actor}</p>
                                <p>Genre: {clickedMovieDetail.genre}</p>
                                <p>Director: {clickedMovieDetail.director}</p>
                        </div>
                    )
                }
        </div>
    )
}

export default MovieDetails;