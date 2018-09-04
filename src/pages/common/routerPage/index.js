import React, { PureComponent } from 'react';
import { Toast } from 'antd-mobile';
import fetch from 'sx-fetch';
import Routers from 'pages/router';
import { Header, Footer } from 'components';
import { headerConfig, footerConfig } from 'config';

// let logger = require('tracer').colorConsole();

@fetch.inject()
export default class router_Page extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            'newTitle': ''
        };
    }

    componentWillMount() {
        this.loadComponent(this.props);
        console.log(this.props);

        // logger.log('22222222');
    }

    componentWillReceiveProps(nextProps) {
        this.loadComponent(nextProps);
    }

	loadComponent = async props => {
	    const {
	        match, history, location, $fetch
	    } = props;
	    let route;

	    for (let i = 0; i < Routers.length; i++) {
	        if (match.url === Routers[i].path) {
	            route = Routers[i];
	        }
	    }
	    if (route) {
	        let component = await route.component();

	        console.log(route,'------------');
	        this.setState({
	            'route': route,
	            'component': React.createElement(component.default, {
	                match,
	                history,
	                $fetch,
	                'params': location.state,
	                'setTitle': title => {
	                    this.setState({
	                        'newTitle': title
	                    });
	                },
	                'toast': Toast
	            })
	        });
	    }
	};

	render() {
	    const { component, newTitle, route } = this.state;

	    console.log(route,'route');
	    return (
	        <div className="application_view">
	            <div className="application_page">
	                <Header config={Object.assign({ ...this.props }, { ...headerConfig }, route, { newTitle })} />
	                 <Footer config={Object.assign({ ...this.props }, { ...footerConfig }, route)} />
	                <div className="application_content">{component}</div>
	            </div>
	        </div>
	    );
	}
}
