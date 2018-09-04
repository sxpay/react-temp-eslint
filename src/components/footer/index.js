import React, { PureComponent } from 'react';
import { NavLink } from 'react-router-dom';

import styles from './index.scss';

function TabItem(props) {
    const { data } = props;

    return (
        <NavLink replace to={data.url} key={data.url} className={styles.item}>
            <img src={window.location.pathname === data.url ? data.icon : data.icon_not} alt="" />
            <div
                className={styles.title}
                style={{ 'color': window.location.pathname === data.url ? data.color : data.color_not }}
            >
                {data.title}
            </div>
        </NavLink>
    );
}

function TabBarList(props) {
    const { tabList } = props;

    if (tabList.length === 0) {
        return null;
    }
    let tabBarBottom = null;

    tabBarBottom = tabList.map(item => <TabItem key={item.url ? item.url : new Date().getTime()} data={item} />);
    return tabBarBottom;
}

export default class Footer extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const { config } = this.props;

        return config && config.show&&!config.footerHide ? (
            <div className={[styles.footer, 'application_footer'].join(' ')}>
                <TabBarList tabList={config.data} />
            </div>
        ) : null;
    }
}
