import React, { useEffect, useState } from 'react';
import "./Banner.css";
import axios from './axios';
import requests from './Requests';

function Banner() {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchTrending);
            setMovie(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length - 1)
                ]
            );
            return request;
        }
        fetchData();
    }, []);

    function truncate(string, num){
        return string?.length > num ? string.substring(0, num - 1) + '....' : string;
    }

  return (
    <header className="banner" 
        style={{
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
    }}>
    <div className="banner_contents">
        <h1 className="banner_title">
            {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner_buttons">
            <button className="banner_button">Play</button>
            <button className="banner_button">My List</button>
        </div>
        <h1 className="banner_description">
            {truncate(movie?.overview, 200)}
        </h1>
    </div>

    <div className="banner--fadeBottom" />
    </header>
  )
}

export default Banner