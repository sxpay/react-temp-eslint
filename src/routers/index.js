import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';

const Loading = ({ pastDelay }) => {
    if (pastDelay) {
        return <div />;
    }
    return <div />;
};

function LoadingComponent() {
    return <div />;
}

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
                <Route exact path="/:modules/:page" component={RouterPage} />
                <Redirect to="/login/login_page" />
            </Switch>
        );
    }
}
