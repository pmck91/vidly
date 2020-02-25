import React, {Component} from "react";

class InputField extends Component {
    render() {
        const {name, label, error, autoFocus, ...rest} = this.props;

        return (
            <div className={"form-group"}>
                <label htmlFor={name}>{label ? label : name.capitalize()}</label>
                <input autoFocus={autoFocus ? autoFocus : false}
                       {...rest}
                       name={name}
                       className={error ? "form-control is-invalid" : "form-control"}
                       id={name}/>
                {error && <div className="invalid-feedback">{error}</div>}
            </div>
        );
    }
}

export default InputField;