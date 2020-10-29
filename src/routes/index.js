import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch,
} from 'react-router-dom';

// ==============================================
//                                          ADMIN
// ==============================================
import Login from '../views/login';
import SignUp from '../views/signup';

// ==============================================
//                                          ADMIN
// ==============================================
import AdminDashboard from '../views/admin/dashboard';
import AdminProfile from '../views/admin/profile';

// ==============================================
//                                          PAGES
// ==============================================
import Home from '../views/home';
import NotFound from '../views/404';

const Routes = () => (
    <Router basename={process.env.PUBLIC_URL}>
        <Switch>
            <Route exact path="/" component={Home} />

            <Route exact path="/admin" component={AdminDashboard} />
            <Route exact path="/admin/profile" component={AdminProfile} />

            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={SignUp} />

            <Route exact path="/404" component={NotFound} />
            <Redirect path="*" to="/404" />
        </Switch>
    </Router>
);

export default Routes;
