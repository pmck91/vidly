import React, {Component} from "react";
import LikeWidget from "./common/like";
import Table from "./common/table";
import {Link} from "react-router-dom";

class MoviesTable extends Component {
    render() {

        const {onToggleLike, onDelete, movies, sortColumn, onSort} = this.props;
        const columns = [
            {id: 1, label: "Title", path: "title", content: movie => <Link to={`/movies/${movie._id}`}>{movie.title}</Link>},
            {id: 2, label: "Genre", path: "genre.name"},
            {id: 3, label: "Stock", path: "numberInStock"},
            {id: 4, label: "Rating", path: "dailyRentalRate"},
            {id: 5, content: movie => <LikeWidget id={movie._id} liked={movie.liked} onLike={onToggleLike}/>},
            {id: 6, content: movie => <button onClick={() => onDelete(movie)} className={"btn btn-danger btn-sm"}>Delete</button>}
        ];

        return (
            <Table items={movies} columns={columns} onSort={onSort} sortColumn={sortColumn} />
        );
    }
}

export default MoviesTable;

