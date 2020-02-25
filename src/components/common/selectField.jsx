import React, {Component} from "react";

class SelectField extends Component {
    render() {

        const {name, label, options, onChange, error} = this.props;
        return(
            <div className="form-group">
                <label htmlFor={name}>{label}</label>
                <select name={name} onChange={onChange}  className={error ? "custom-select is-invalid" : "custom-select"} value={options[name]}>
                    <option value={""}>Select a {label}</option>
                    {options.map(option =>
                        <option key={option} value={option}>{option}</option>
                    )}
                </select>
                {error && <div className="invalid-feedback">{error}</div>}
            </div>
        );
    }

}

export default SelectField