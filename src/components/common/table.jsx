import React, {Component} from "react";
import TableHeader from "./TableHeader";
import TableBody from "./tableBody";

class Table extends Component{
    render() {

        const {columns, items, onSort, sortColumn} = this.props;

        return(
            <table className="table">
                <TableHeader columns={columns} onSort={onSort} sortColumn={sortColumn}/>
                <TableBody data={items} columns={columns}/>
            </table>
        );
    }
}

export default Table;