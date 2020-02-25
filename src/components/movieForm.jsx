import React from "react";
import Joi from "@hapi/joi";
import Form from "./common/form";
import {getGenres} from "../services/fakeGenreService";
import {getMovie, saveMovie} from "../services/fakeMovieService";

class MovieForm extends Form {

    state = {
        data: {title: "", genre: {}, numberInStock: 0, dailyRentalRate: 0},
        errors: {},
        genres: []
    };

    componentDidMount() {
        const {match} = this.props;

        this.setState({genres: getGenres().map(g=>g.name)});
        if(match.params.id) {
            const fetchedMovie = getMovie(match.params.id);
            if (!fetchedMovie) return this.props.history.replace("/404");

            fetchedMovie.genre = fetchedMovie.genre.name;
            this.setState({data: getMovie(match.params.id)});
        }
    }

    rawSchema = {
        title: Joi.string().required().label("Title"),
        genre: Joi.string().required().label("Genre"),
        numberInStock: Joi.number().integer().min(0).required().label("Number in Stock"),
        dailyRentalRate: Joi.number().min(0).max(10).required().label("Rating")
    };

    schema = Joi.object(this.rawSchema).options({allowUnknown: true});

    render() {
        return (
            <div>
                {/*<h1>Movie Form {match.params.id}</h1>*/}

                <form onSubmit={this.handleSubmit}>
                    {this.renderInput("title", "Title", "text", true)}

                    {this.renderSelect("genre", "Genre", this.state.genres)}

                    {this.renderInput("numberInStock", "Number in Stock", "number")}
                    {this.renderInput("dailyRentalRate", "Daily Rental Rate", "number")}
                    {this.renderButton("Save")}
                </form>

            </div>
        );
    }

    doSubmit = () => {
        const {history} = this.props;
        const movie = this.state.data;
        const movieToSave = movie;
        movieToSave.genreId = getGenres().filter(genre => genre.name === movie.genre)[0]._id;
        saveMovie(movieToSave);
        history.push("/movies");
    };

}

export default MovieForm;