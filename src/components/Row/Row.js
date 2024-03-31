import React, { useEffect, useState } from 'react';
import axios from 'axios';
import movieTrailer from "movie-trailer";
import "./Row.css"

const base_url = "https://image.tmdb.org/t/p/original";

const Row = ({ title, fetchUrl, isLargeRow }) => {
        const [movies, setMovies] = useState([]);
        const [error, setError] = useState(null);
        const [trailerUrl, setTrailerUrl] = useState("")
        console.log("Process",process.env.REACT_APP_API);
        useEffect(() => {
            const fetchData = async () => {
                try {
                    const response = await axios.get(`${process.env.REACT_APP_API}${fetchUrl}`);
                    setMovies(response.data.results);
                } catch (error) {
                    setError(error.message);
                }
            };
    
            fetchData();
        }, [fetchUrl]);
    
        if (error) {
            return <div>Error: {error}</div>;
        }
        const opts = {
            height:"390",
            width:"100%",
            playerVars:{
                auoplay: 1,
            },
        }
        const handleClick =(movie) =>{
            if (trailerUrl){
                setTrailerUrl('');
            }
                else
                {
                    movieTrailer(movie?.name || movie?.name || "")
                    .then((url) =>{
                    const urlParams = new URLSearchParams(new URL(url).search);
                    setTrailerUrl(urlParams.get('v'))
                    }).catch((error) => {
                        console.log("Error fetching trailer:", error);
                        setTrailerUrl(''); // Set trailer URL to an empty string in case of an error
                    });
         
                }
        }


  return (
    <div className="row">
    <h2>{title}</h2>

    <div className="row_posters">
      {movies.map(
        (movie) =>
          ((isLargeRow && movie.poster_path) ||
            (!isLargeRow && movie.backdrop_path)) && (
            <img
              key={movie.id}
              onClick={()=> handleClick(movie)}
              className={`row__poster ${isLargeRow && "row__posterLarge"}`}
              src={`${base_url}${
                isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
              alt="collection"
            />
            )
            )}

        </div>
    </div>
  )
}

export default Row