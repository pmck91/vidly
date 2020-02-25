import React, {Component} from "react";
import PropTypes from 'prop-types';

class ListGroup extends Component {

    render() {

        const {items, onItemSelect, selectedItem, text, value} = this.props;

        return (
            <div className="list-group">
                {items.map(item =>
                    <button
                        key={item[value]}
                        onClick={() => onItemSelect(item)}
                        type="button"
                        className={selectedItem === item? "list-group-item list-group-item-action active" : "list-group-item list-group-item-action"}>
                        {item[text]}
                    </button>)}
            </div>
        );
    }
}

ListGroup.propTypes = {
    items: PropTypes.array.isRequired,
    text: PropTypes.string,
    value: PropTypes.string,
    onItemSelect: PropTypes.func
};

ListGroup.defaultProps = {
    text: "name",
    value: "_id"
};

export default ListGroup;