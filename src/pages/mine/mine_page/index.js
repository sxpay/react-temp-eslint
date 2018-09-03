import React, { PureComponent } from 'react';
import { Button } from 'antd-mobile';

export default class mine_page extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const { history } = this.props;

        return (
            <div style={{ 'height': '1000px' }}>
				我的
                <Button
                    onClick={() => {
                        history.push('/mine/demo_page');
                    }}
                >
					去测试

                </Button>
            </div>
        );
    }
}
