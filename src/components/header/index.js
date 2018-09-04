import React, { PureComponent } from 'react';
import { NavBar, Icon } from 'antd-mobile';
import styles from './index.scss';

export default class Header extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {};
    }

	goBack = () => {
	    const { config } = this.props;

	    config.history.goBack();
	};

	render() {
	    const { config } = this.props;

	    console.log(config,'config');
	    return config && config.show&&!config.headerHide ? (
	        <div className={[styles.header, 'application_header'].join(' ')}>
	            <NavBar
	                mode={config.mode}
	                icon={config.arrowHide !== 'empty' ? <Icon type={config.icon} /> : null}
	                onLeftClick={this.goBack}
	                // rightContent={[
	                //     <Icon key="0" type="search" style={{ 'marginRight': '16px' }} />,
	                //     <Icon key="1" type="ellipsis" />
	                // ]}
	            >
	                {config.newTitle || config.title || ''}
	            </NavBar>
	        </div>
	    ) : null;
	}
}
