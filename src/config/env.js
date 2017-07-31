/**
 * 配置编译环境和线上环境之间的切换
 * 
 * baseUrl: 域名地址
 * routerMode: 路由模式
 * baseImgPath: 图片存放地址
 * 
 */
let baseUrl = ''; 
let routerMode = 'history';
let baseImgPath = 'http://images.cangdu.org/';

if (process.env.NODE_ENV == 'development') {
	baseUrl = 'http://cangdu.org:8001';
    // baseUrl = 'http://zg.tp.com:86/index.php';
    // baseUrl = 'http://saictree.innke.net/index.php';
    // baseUrl = 'http://saictree.innke.net:8081/index.php';
    
}else{
	baseUrl = 'http://cangdu.org:8001';
}

export {
	baseUrl,
	routerMode,
	baseImgPath
}