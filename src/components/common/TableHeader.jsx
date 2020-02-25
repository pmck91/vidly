import React, {Component} from "react";
import { FaSortUp, FaSortDown } from "react-icons/fa";


class TableHeader extends Component {

    render() {
        return (
            <thead>
            <tr>
                {this.props.columns.map(column =>
                    <th key={column.id}>
                        <span
                            className={"clickable"}
                            onClick={() => this.raiseSort(column.path)}>
                            {column.label} {this.renderSortIcon(column)}
                        </span>
                    </th>)}
            </tr>
            </thead>
        );
    }

    renderSortIcon = column => {
        if (column.path !== this.props.sortColumn.path) {
            return null;
        } else {
            if (this.props.sortColumn.order === 'asc') {
                return <FaSortUp/>;
            } else {
                return <FaSortDown/>;
            }
        }
    };

    raiseSort = path => {
        const sortColumn = {...this.props.sortColumn};
        if (sortColumn.path === path) {
            sortColumn.order = (sortColumn.order === 'asc' ? 'desc' : 'asc')
        } else {
            sortColumn.path = path;
            sortColumn.order = 'asc';
        }
        this.props.onSort(sortColumn);
    };
}

export default TableHeader;