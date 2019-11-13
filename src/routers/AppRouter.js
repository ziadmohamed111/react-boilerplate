import React from 'react';
import { Router, Route, Switch} from "react-router-dom" 

import DashboardPage from "../components/DashboardPage"
import PageNotFound from "../components/PageNotFound"
import LoginPage from '../components/LoginPage';

import PrivateRoute from "./PrivateRoute"
import PublicRoute from "./PublicRoute"

const createHistory =  require("history").createBrowserHistory
export const history = createHistory()

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Switch>
                <PublicRoute path="/" component={LoginPage} exact={true} />
                <PrivateRoute path="/dashboard" exact={true} component={DashboardPage} />
                <Route component={PageNotFound}/>
            </Switch>
        </div>
    </Router>
)


export default AppRouter