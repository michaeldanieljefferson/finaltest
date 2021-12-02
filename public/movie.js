import React, {useState,useEffect} from 'react';
import MovieItem from './MovieItem';

const Movies = () => {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        fetch('https://movie-database-imdb-alternative.p.rapidapi.com/')
        .then(response => response.json())
        .then(data => console.log(data));
    }, []);
    return(
        <section className="py-5">
            <div className="container px-4 px-lg-5 mt-5">
                <h2>search movie</h2>
                <form type="text" className="form-control">
                    <input type="text" className="form-control"></input>
                </form>
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-co">
                    {movies.map((movie) => <MovieItem hay={movie.id}movie={movie}/>)} 
                </div>
            </div>
        </section>
    )
}
export default movies;