import fetch from '@/config/fetch'

/**
 * 测试
 */

export const hello = data => fetch('/Index/index/hello', data, 'POST');
/**
 * 登陆
 */

// export const login = data => fetch('/admin/login', data, 'POST');
export const login = data => fetch('/user/user/login', data, 'POST');

/**
 * 会员接口
 */

// 会员列表
export const memberList = data => fetch('/member/member/index', data);

// 会员获得纪录
export const memberRecode = data => fetch('/member/member/recode', data);

// 会员信息
export const memberInfo = data => fetch('/member/member/info', data);


// 灾害接口
export const disaster = data => fetch('/disaster/disaster/index', data);
// 灾害设置接口
export const disasterSet = data => fetch('/disaster/disaster/disaster_setting', data,'POST')	;


// 道具列表
export const prop = data => fetch('/prop/prop/index', data);
// 道具设置
export const propSet = data => fetch('/prop/prop/prop_setting', data,'POST');

// 转盘
export const wheel = data => fetch('/wheel/wheel/reward', data);
// 果实
export const furit = data => fetch('/furit/furit/reward', data);
// 转盘奖品设置
export const wheelSet = data => fetch('/wheel/wheel/setting', data,'POST');
// 果实设置
export const furitSet = data => fetch('/furit/furit/furit_setting', data,'POST');
// 获奖用户
export const rewardUser = data => fetch('/reward/reward/user', data);
// 获取用户详情
export const rewardDetial = data => fetch('/reward/reward/userdetail', data);


//竞答题库
export const vie = data => fetch('/vie/vie/index', data);
//竞答设置接口
export const vieSet = data => fetch('/vie/vie/setting', data,'POST');


//获得分享接口
export const share = data => fetch('/share/share/index', data);
//获得zan
export const shareZan = data => fetch('/share/share/index', data);
//zan设置
export const zanSet = data => fetch('/share/share/zan_setting', data,'POST');
//绿值互送设置
export const shareGreen = data => fetch('/share/share/gift_green', data,'POST');
//绿苗赠送设置
export const shareTree = data => fetch('/share/share/gift_trees', data,'POST');


//后台用户
export const user = data => fetch('/user/user/index', data);
//后台获得用户
export const userInfo = data => fetch('/user/user/userinfo', data);
//更新用户
export const userUpdate = data => fetch('/user/user/uppw', data,'POST');
//更新用户密码
export const userUppw = data => fetch('/user/user/userupdate', data,'POST');
//添加用户
export const userAdd = data => fetch('/user/user/add', data,'POST');
//添加角色
export const userRoleadd= data => fetch('/user/user/roleadd', data,'POST');
//获得角色权限
export const userRole= data => fetch('/user/user/role', data);


//任务列表
export const task = data => fetch('/task/task/userupdate', data);
//任务设置
export const taskSet = data => fetch('/task/task/task_setting', data,'POST');


//获得公告
export const adv = data => fetch('/adv/adv/announcement', data);

// 添加公告
export const advAdd = data => fetch('/adv/adv/add', data);

/**
 * 退出
 */


export const signout = () => fetch('/admin/singout');

/**
 * 获取用户信息
 */

// export const getAdminInfo = () => fetch('/admin/info');

/**
 * api请求量
 */

export const apiCount = date => fetch('/statis/api/' + date + '/count');

/**
 * 所有api请求量
 */

export const apiAllCount = () => fetch('/statis/api/count');


/**
 * 所有api请求信息
 */

export const apiAllRecord = () => fetch('/statis/api/all');

/**
 * 用户注册量
 */

export const userCount = date => fetch('/statis/user/' + date + '/count');

/**
 * 某一天订单数量
 */

export const orderCount = date => fetch('/statis/order/' + date + '/count');


/**
 * 某一天管理员注册量
 */

export const adminDayCount = date => fetch('/statis/admin/' + date + '/count');

/**
 * 管理员列表
 */

export const adminList = data => fetch('/admin/all', data);

/**
 * 管理员数量
 */

export const adminCount = () => fetch('/admin/count');

/**
 * 获取定位城市
 */

export const cityGuess = () => fetch('/v1/cities', {
	type: 'guess'
});

/**
 * 添加商铺
 */

export const addShop = data => fetch('/shopping/addShop', data, 'POST');

/**
 * 获取搜索地址
 */

export const searchplace = (cityid, value) => fetch('/v1/pois', {
	type: 'search',
	city_id: cityid,
	keyword: value
});

/**
 * 获取当前店铺食品种类
 */

export const getCategory = restaurant_id => fetch('/shopping/getcategory/' + restaurant_id);

/**
 * 添加食品种类
 */

export const addCategory = data => fetch('/shopping/addcategory', data, 'POST');


/**
 * 添加食品
 */

export const addFood = data => fetch('/shopping/addfood', data, 'POST');


/**
 * category 种类列表
 */

export const foodCategory = (latitude, longitude) => fetch('/shopping/v2/restaurant/category');

/**
 * 获取餐馆列表
 */

export const getResturants = data => fetch('/shopping/restaurants', data);

/**
 * 获取餐馆详细信息
 */

export const getResturantDetail = restaurant_id => fetch('/shopping/restaurant/' + restaurant_id);

/**
 * 获取餐馆数量
 */

export const getResturantsCount = () => fetch('/shopping/restaurants/count');

/**
 * 更新餐馆信息
 */

export const updateResturant = data => fetch('/shopping/updateshop', data, 'POST');

/**
 * 删除餐馆
 */

export const deleteResturant = restaurant_id => fetch('/shopping/restaurant/' + restaurant_id, {}, 'DELETE');

/**
 * 获取食品列表
 */

export const getFoods = data => fetch('/shopping/v2/foods', data);

/**
 * 获取食品数量
 */

export const getFoodsCount = data => fetch('/shopping/v2/foods/count', data);


/**
 * 获取menu列表
 */

export const getMenu = data => fetch('/shopping/v2/menu', data);

/**
 * 获取menu详情
 */

export const getMenuById = category_id => fetch('/shopping/v2/menu/' + category_id);

/**
 * 更新食品信息
 */

export const updateFood = data => fetch('/shopping/v2/updatefood', data, 'POST');

/**
 * 删除食品
 */

export const deleteFood = food_id => fetch('/shopping/v2/food/' + food_id, {}, 'DELETE');

/**
 * 获取用户列表
 */

export const getUserList = data => fetch('/v1/users/list', data);

/**
 * 获取用户数量
 */

export const getUserCount = data => fetch('/v1/users/count', data);

/**
 * 获取订单列表
 */

export const getOrderList = data => fetch('/bos/orders', data);

/**
 * 获取订单数量
 */

export const getOrderCount = data => fetch('/bos/orders/count', data);

/**
 * 获取用户信息
 */

export const getUserInfo = user_id => fetch('/v1/user/' + user_id);

/**
 * 获取地址信息
 */

export const getAddressById = address_id => fetch('/v1/addresse/' + address_id);

/**
 * 获取用户分布信息
 */

export const getUserCity = () => fetch('/v1/user/city/count');
