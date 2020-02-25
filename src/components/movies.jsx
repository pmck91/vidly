import React, {Component} from "react";
import {getMovies} from "../services/fakeMovieService";
import {getGenres} from "../services/fakeGenreService";
import Pagination from "./common/pagination";
import {paginate} from "../utils/paginate";
import ListGroup from "./common/listGroup";
import MoviesTable from "./moviesTable";
import SearchBox from "./common/searcchBox";
import _ from 'lodash';
import {Link} from "react-router-dom";

class Movies extends Component {

    state = {
        movies: [],
        genres: [],
        pageSize: 4,
        currentPage: 1,
        sortColumn: {
            path: 'title',
            order: 'asc'
        },
        searchTerm: "",
        selectedGenre: {}
    };

    componentDidMount() {
        const genres = [{_id: '', name: 'All Genres'}, ...getGenres()];
        const movies = getMovies();
        this.setState({
            movies: movies,
            genres: genres
        });
    }

    render() {

        const {pageSize, currentPage, movies: allMovies, selectedGenre} = this.state;
        const {length} = allMovies;

        if (length <= 0) {
            return (<p>There are no movies in the database.</p>);
        }

        const {count, pagedMovies} = this.getPagedData();
        return (

            <React.Fragment>
                <div className="row">
                    <div className="col-3">
                        <ListGroup
                            items={this.state.genres}
                            onItemSelect={this.handleGenreSelect}
                            selectedItem={selectedGenre}
                        />
                    </div>
                    <div className="col">
                        <Link to={"/movies/new"} className={"btn btn-primary"} style={{marginBottom: 20}}>New
                            Movie</Link>

                        <p>Showing {count} movies in the database.</p>

                        <SearchBox value={this.state.searchTerm} onChange={this.handleSearch}/>

                        <MoviesTable
                            movies={pagedMovies}
                            onToggleLike={this.handleToggleLike}
                            onDelete={this.handleDelete}
                            onSort={this.handleSort}
                            sortColumn={this.state.sortColumn}
                        />

                        <Pagination
                            itemsCount={count}
                            pageSize={pageSize}
                            currentPage={currentPage}
                            onPageChange={this.handlePageChange}
                        />
                    </div>
                </div>
            </React.Fragment>
        );
    }

    getPagedData = () => {
        const {
            pageSize,
            currentPage,
            sortColumn,
            selectedGenre,
            searchTerm,
            movies: allMovies
        } = this.state;

        let filtered = allMovies;
        if (searchTerm) {
            filtered = allMovies.filter(m => m.title.toLowerCase().startsWith(searchTerm.toLowerCase()));
        } else if (selectedGenre && selectedGenre._id) {
            filtered = allMovies.filter(m => m.genre._id === selectedGenre._id);
        }

        const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

        return {count: filtered.length, pagedMovies: paginate(sorted, currentPage, pageSize)};
    };

    handleSearch = value => {
        this.setState({
            searchTerm: value,
            selectedGenre: {},
            currentPage: 1
        });
    };

    handleSort = sortColumn => {
        this.setState({
            sortColumn
        });
    };

    handleGenreSelect = (genre) => {
        this.setState({
            selectedGenre: genre,
            currentPage: 1,
            searchTerm: ""
        });
    };

    handleDelete = movie => {
        this.setState({
            movies: this.state.movies.filter(m => m._id !== movie._id)
        });
    };

    handlePageChange = (page) => {
        this.setState({currentPage: page});
    };

    handleToggleLike = (id) => {
        this.setState({
            movies: this.state.movies.map(m => {
                if (m._id === id) {
                    m.liked = !m.liked;
                }
                return m;
            })
        })
    };
}

export default Movies;