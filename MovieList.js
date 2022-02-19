import React, {Component} from 'react';
import axios from "axios";
import MovieFormat from "./MovieFormat";


class MovieList extends Component
{
    constructor(props)
    {
        super(props);
        this.state = { results: [] }; //This is so the book automatically renders
    }

    componentDidMount()
    {
        const NOW_PLAYING_MOVIES = `https://api.themoviedb.org/3/movie/now_playing?api_key=a07e22bc18f5cb106bfe4cc1f83ad8ed`;
        const getMovies = async () =>
        {

            await axios.get(NOW_PLAYING_MOVIES)
                .then(response =>
                {
                    console.log(response); //this is to see what data is coming from the URL
                    //set state variable
                    this.setState({results: response.data.results});
                })
                .catch((err) =>
                {
                    console.log("Fetch Error: " + err)
                });
        }
        getMovies();
    }

    render() {
        return (
            <div className="row row-cols-sm-2 row-cols-md-5 row-cols-xxl-6">
                {
                    this.state.results.map(function(movie)
                    {
                        return (
                            <MovieFormat  movie={movie} key={movie["movie.id"]}/>
                        )
                    })
                }
            </div>
        );
    }
}

export default MovieList;