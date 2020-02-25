import React from "react";
import Joi from '@hapi/joi';
import Form from "./common/form";

class LoginForm extends Form {
    state = {
        data: {username: "", password: "", remember: true},
        errors: {}
    };

    rawSchema = {
        username: Joi.string().required().label("Username"),
        password: Joi.string().required().label("Password"),
        remember: Joi.any()
    };

    schema = Joi.object(this.rawSchema);

    render() {

        return (
            <div>
                <h1>Please login!</h1>
                <form action={""} onSubmit={this.handleSubmit}>
                    {this.renderInput("username", "Username", "text", true)}
                    {this.renderInput("password", "Password", "password")}
                    {this.renderCheckbox("remember", "Remember Me")}
                    {this.renderButton("login")}
                </form>
            </div>
        );
    }

    doSubmit = () => {
        console.log("submitted");
    };
}

export default LoginForm;