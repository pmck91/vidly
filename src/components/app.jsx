import React, {Component} from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import Movies from "./movies";
import Navbar from "./navbar";
import Customers from "./customers";
import Rentals from "./rentals";
import NotFound from "./notFound";
import MovieForm from "./movieForm";
import LoginForm from "./loginForm";
import RegisterForm from "./registerForm";

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar/>
                <main role={"main"} className={"container m-4"}>
                    <div className={"starter-template"}>
                        <Switch>
                            <Route path={"/movies/new"} component={MovieForm}/>
                            <Route path={"/movies/:id"} component={MovieForm}/>
                            <Route path={"/movies"} component={Movies}/>
                            <Route path={"/login"} component={LoginForm}/>
                            <Route path={"/register"} component={RegisterForm}/>
                            <Route path={"/customers"} component={Customers}/>
                            <Route path={"/rentals"} component={Rentals}/>
                            <Route path={"/404"} component={NotFound}/>
                            <Redirect from={"/"} exact to={"/movies"}/>
                            <Redirect to="/404"/>
                        </Switch>
                    </div>
                </main>
            </React.Fragment>
        );
    }
}

export default App;
