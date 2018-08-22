import React, { PureComponent } from 'react';
import Routers from 'pages/router';

export default class router_Page extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentWillMount() {
        this.loadComponent(this.props);
    }

    componentWillReceiveProps(nextProps) {
        this.loadComponent(nextProps);
    }

	loadComponent = async props => {
	    const { match, history, location } = props;
	    let route;

	    for (let i = 0; i < Routers.length; i++) {
	        if (match.url === Routers[i].path) {
	            route = Routers[i];
	        }
	    }
	    if (route) {
	        let component = await route.component();

	        this.setState({
	            'route': { ...route },
	            'component': React.createElement(component.default, {
	                match,
	                history,
	                'params': location.state
	            })
	        });
	    }
	};

	render() {
	    const { component, route } = this.state;

	    return (
	        <div route={route} className="application_content">
	            {component}
	        </div>
	    );
	}
}
