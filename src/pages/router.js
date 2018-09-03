import LoginRoute from 'pages/login/router';
import HomeRoute from 'pages/home/router';
import MineRoute from 'pages/mine/router';
import OrderRoute from 'pages/order/router';

// 首页
export default [...HomeRoute, ...LoginRoute, ...MineRoute,...OrderRoute];