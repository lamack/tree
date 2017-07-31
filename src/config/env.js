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
	// baseUrl = 'http://cangdu.org:8001';
    // baseUrl = 'http://zg.tp.com:86/index.php';
    baseUrl = 'http://saictree.innke.net:8081/index.php';
    // baseUrl = 'http://tree.com/index.php'; 配置的本地php环境
    // 
    
}else{
	baseUrl = 'http://saictree.innke.net';
}

export {
	baseUrl,
	routerMode,
	baseImgPath
}