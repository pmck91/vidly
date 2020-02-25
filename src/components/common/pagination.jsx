import React, {Component} from "react";
import PropTypes from 'prop-types';
import _ from 'lodash';

class Pagination extends Component {

    render() {

        const {pageSize, itemsCount, onPageChange, currentPage} = this.props;
        const pagesCount = Math.ceil(itemsCount / pageSize);
        const pages = _.range(1, pagesCount + 1);
        if (pagesCount <= 1) return null;

        return (
            <nav>
                <ul className="pagination">
                    {
                        pages.map(page => (
                            <li key={page} className={page === currentPage ? "page-item active" : "page-item"}>
                                <button
                                    onClick={() => onPageChange(page)}
                                    className={"page-link"}>{page}</button>
                            </li>
                        ))
                    }
                </ul>
            </nav>
        );
    }
}

Pagination.propTypes = {
    pageSize: PropTypes.number.isRequired,
    itemsCount: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired,
    currentPage: PropTypes.number.isRequired
};

export default Pagination;