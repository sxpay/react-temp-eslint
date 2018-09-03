import React, { PureComponent } from 'react';
import { Button } from 'antd-mobile';

export default class demo_page extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentWillMount() {
        const { setTitle } = this.props;

        setTitle('改变标题');
    }

    render() {
        const { toast } = this.props;

        return (
            <div style={{ 'height': '1000px' }}>
				测试页面
                <Button
                    onClick={() => {
                        toast.info('222222');
                    }}
                >
					toast测试

                </Button>
                <Button
                    onClick={() => {
                        const {tracer} = this.props;

                        tracer.colorConsole('222222');
                    }}
                >
					打印测试

                </Button>
                <Button
                    onClick={() => {
                        toast.info('222222');
                    }}
                >
					fetch测试

                </Button>
            </div>
        );
    }
}
