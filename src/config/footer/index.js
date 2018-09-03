import iconBank from 'assets/images/footer/icon_bank.png';
import iconBankActive from 'assets/images/footer/icon_bank_active.png';
import iconBill from 'assets/images/footer/icon_bill.png';
import iconBillActive from 'assets/images/footer/icon_bill_active.png';
import iconMine from 'assets/images/footer/icon_mine.png';
import iconMineActive from 'assets/images/footer/icon_mine_active.png';
/*
 * 接收一个配置文件数组
 * parms: {
 *   icon: 激活时icon
 *   icon_not: 未激活时icon
 *   title: 相应icon描述文字
 *   color: 激活时文字描述颜色
 *   color-not: 未激活时文字描述颜色
 * }
 *
 * */
export default {
    'show': true,
    'data': [{
        'title': '还卡',
        'url': '/home/home_page',
        'icon': iconBankActive,
        'icon_not': iconBank,
        'color': '#6A6D70',
        'color_not': '#CECFD3'
    },
    {
        'title': '账单',
        'url': '/order/order_page',
        'icon': iconBillActive,
        'icon_not': iconBill,
        'color': '#6A6D70',
        'color_not': '#CECFD3'
    },
    {
        'title': '我的',
        'url': '/mine/mine_page',
        'icon': iconMineActive,
        'icon_not': iconMine,
        'color': '#6A6D70',
        'color_not': '#CECFD3'
    }
    ]
};
