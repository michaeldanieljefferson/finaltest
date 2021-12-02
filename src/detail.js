import React,{useState, useEffect} from "react";
import {useParams} from 'react-router-dom';
import Navigasi from;
import Footer from;
import MovieDetails from;

const detail = () => {
    const [movie , setMovie] = useState({});
    const {movieid} = useParams();
    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=13df8c0093657869b2d75e9a6b6fffd2&language=en-US`)
        .then(response => response.json)
        .then(data => setMovie)
        }
    }, [])
};