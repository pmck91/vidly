import React, {Component} from "react";

class SearchBox extends Component{

    render() {
        const {value, onChange} = this.props;

        return(
            <div className="form-group">
                <input type={"text"} onChange={event => onChange(event.currentTarget.value)} placeholder={"Search..."}
                       className={"form-control my-3"} value={value}/>
            </div>
        );
    }
}

export default SearchBox;