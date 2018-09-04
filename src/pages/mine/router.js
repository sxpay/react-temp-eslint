export default [
    {
        'path': '/mine/mine_page',
        'title': '我的',
        'arrowHide': 'empty',
        'component': () => import('pages/mine/mine_page')
    },
    {
        'path': '/mine/demo_page',
        'title': '测试',
        'footerHide':true,
        'component': () => import('pages/mine/demo_page')
    }
];
