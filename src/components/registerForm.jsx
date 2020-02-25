import React from "react";
import Joi from '@hapi/joi';
import Form from "./common/form";

class RegisterForm extends Form {
    state = {
        data: {fullname: "", username: "", password: ""},
        errors: {}
    };

    rawSchema = {
        fullname: Joi.string().required().label("Full Name"),
        username: Joi.string().email({tlds: false}).required().label("Username"),
        password: Joi.string().required().min(5).label("Password")
    };

    schema = Joi.object(this.rawSchema).options({});

    render() {
        return (
            <div>
                <h1>Please login!</h1>
                <form action={""} onSubmit={this.handleSubmit}>
                    {this.renderInput("fullname", "Full Name", "text", true)}
                    {this.renderInput("username", "Username (Email)", "text")}
                    {this.renderInput("password", "Password", "password")}
                    {this.renderButton("register")}
                </form>
            </div>
        );
    }

    doSubmit = () => {
        console.log("submitted");
    };
}

export default RegisterForm;