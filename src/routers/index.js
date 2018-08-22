import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';

const Loading = ({ pastDelay }) => {
    if (pastDelay) {
        return <div />;
    }
    return <div>22222</div>;
};

function LoadingComponent() {
    return <div />;
}
const LoginPage = Loadable({
    'loader': () => import('pages/login/login_page'),
    'loading': Loading,
    LoadingComponent,
    'delay': 300
});
const RouterPage = Loadable({
    'loader': () => import('pages/common/routerPage'),
    'loading': Loading,
    LoadingComponent,
    'delay': 300
});

export default class Routers extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Switch>
                <Route exact path="/" component={LoginPage} />
                <Route path="/login" component={LoginPage} />
                <Route path="/:modules/:page" component={RouterPage} />
            </Switch>
        );
    }
}
