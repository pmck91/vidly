import React, {Component} from "react";
import _ from 'lodash';

class TableBody extends Component {
    render() {
        const {data, columns} = this.props;

        return (
            <tbody>
            {data.map(item =>
                <tr key={item._id}>
                    {columns.map(column =>
                        <td key={item._id + column.id}>{this.renderCell(item, column)}</td>
                    )}
                </tr>
            )}
            </tbody>
        );
    }

    renderCell = (item, column) => {
        if(column.content) {
            return column.content(item);
        } else {
            return _.get(item, column.path);
        }
    }
}

export default TableBody;