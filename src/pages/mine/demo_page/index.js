import React, { PureComponent } from 'react';
import { Button } from 'antd-mobile';

export default class demo_page extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentWillMount() {
        const { setTitle } = this.props;

        setTitle('我是被改变的标题');
    }

    fetchTest=()=>{
        this.props.$fetch.get('/login').then(res=>{
            if (res.msgCode==='PTM0000'){
                this.props.toast.info(res.msgInfo);
                console.log('1111111111',res);
            }
        });
    }

    render() {
        const { toast } = this.props;

        return (
            <div style={{ 'height': '1000px' }}>
				测试页面
                <Button
                    onClick={() => {
                        toast.info('我是toast显示的内容');
                    }}
                >
					toast测试

                </Button>
                <Button
                    onClick={this.fetchTest}
                >
					fetch测试

                </Button>
            </div>
        );
    }
}
