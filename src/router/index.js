import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const login = r => require.ensure([], () => r(require('@/page/login')), 'login');
const manage = r => require.ensure([], () => r(require('@/page/manage')), 'manage');
const home = r => require.ensure([], () => r(require('@/page/home')), 'home');

/**
 * 会员管理
 */
const memberManage= r => require.ensure([], () => r(require('@/page/memberManage')), 'memberManage');//会员管理
const checkMemberEditor = r => require.ensure([], () => r(require('@/page/checkMemberEditor')), 'checkMemberEditor');//查看编辑
const checkMemberRecord = r => require.ensure([], () => r(require('@/page/checkMemberRecord')), 'checkMemberRecord');//查询记录

/**
 * 公告管理
 */
const noticeManage = r => require.ensure([], () => r(require('@/page/noticeManage')), 'noticeManage');//公告管理
const createNotice = r => require.ensure([], () => r(require('@/page/createNotice')), 'createNotice');//新建/编辑公告

/**
 * 竞答管理
 */
const quizzesManage = r => require.ensure([], () => r(require('@/page/quizzesManage')), 'quizzesManage');//竞答管理
const quizzesSetting = r => require.ensure([], () => r(require('@/page/quizzesSetting')), 'quizzesSetting');//竞答设置

/**
 * 抽奖管理
 */
const awardManage = r => require.ensure([], () => r(require('@/page/awardManage')), 'awardManage');//抽奖管理
const awardSetting = r => require.ensure([], () => r(require('@/page/awardSetting')), 'awardSetting');//奖品设置
const awardList = r => require.ensure([], () => r(require('@/page/awardList')), 'awardList');//用户获奖列表
const awardDetail = r => require.ensure([], () => r(require('@/page/awardDetail')), 'awardDetail');//用户获奖详情

/**
 * 任务管理
 */
const taskManage = r => require.ensure([], () => r(require('@/page/taskManage')), 'taskManage');//任务管理
const taskEditor = r => require.ensure([], () => r(require('@/page/taskEditor')), 'taskEditor');//任务编辑

/**
 * 道具管理
 */
const sceneManage = r => require.ensure([], () => r(require('@/page/sceneManage')), 'sceneManage');//道具管理
const sceneSetting = r => require.ensure([], () => r(require('@/page/sceneSetting')), 'sceneSetting');//道具设置

/**
 * 分享管理
 */
const shareManage = r => require.ensure([], () => r(require('@/page/shareManage')), 'shareManage');//分享管理
const checkShareDetail = r => require.ensure([], () => r(require('@/page/checkShareDetail')), 'checkShareDetail');//查看详情
const coletFavManage = r => require.ensure([], () => r(require('@/page/coletFavManage')), 'coletFavManage');//集赞管理
const plantsExgManage= r => require.ensure([], () => r(require('@/page/plantsExgManage')), 'plantsExgManage');//绿植互送管理
const treeSendManage = r => require.ensure([], () => r(require('@/page/treeSendManage')), 'treeSendManage');//树苗赠送管理

/**
 * 养成管理
 */

const cultivateManage = r => require.ensure([], () => r(require('@/page/cultivateManage')), 'cultivateManage');//养成管理
const disasterList = r => require.ensure([], () => r(require('@/page/disasterList')), 'disasterList');//灾害触发列表
const disasterSetting = r => require.ensure([], () => r(require('@/page/disasterSetting')), 'disasterSetting');//自然灾害设置

/**
 * 系统管理
 */

const systemManage = r => require.ensure([], () => r(require('@/page/systemManage')), 'systemManage');//系统管理
const checkSysEditor = r => require.ensure([], () => r(require('@/page/checkSysEditor')), 'checkSysEditor');//查看编辑
const modifyPsd = r => require.ensure([], () => r(require('@/page/modifyPsd')), 'modifyPsd');//修改密码
const addBgUser = r => require.ensure([], () => r(require('@/page/addBgUser')), 'addBgUser');//添加后台用户
const authSetting = r => require.ensure([], () => r(require('@/page/authSetting')), 'authSetting');//管理权限设置
const setAuthority = r => require.ensure([], () => r(require('@/page/setAuthority')), 'setAuthority');//设置权限

const routes = [
	{
		path: '/',
		component: login
	},
	{
		path: '/manage',
		component: manage,
		name: '',
		children: [{
			path: '',
			component: home,
		},{
			path: '/memberManage',
			component: memberManage,
		},{
			path: '/checkMemberEditor',
			component: checkMemberEditor,
		},{
			path: '/checkMemberRecord',
			component: checkMemberRecord,
		},{
			path: '/noticeManage',
			component: noticeManage,
		},{
			path: '/createNotice',
			component: createNotice,
		},{
			path: '/quizzesManage',
			component: quizzesManage,
		},{
			path: '/quizzesSetting',
			component: quizzesSetting,
		},{
			path: '/awardManage',
			component: awardManage,
		},{
			path: '/awardSetting',
			component: awardSetting,
		},{
			path: '/awardList',
			component: awardList,
		},{
			path: '/awardDetail',
			component: awardDetail,
		},{
			path: '/taskManage',
			component: taskManage,
		},{
			path: '/taskEditor',
			component: taskEditor,
		},{
			path: '/sceneManage',
			component: sceneManage,
		},{
			path: '/sceneSetting',
			component: sceneSetting,
		},{
			path: '/shareManage',
			component: shareManage,
		},{
			path: '/checkShareDetail',
			component: checkShareDetail,
		},{
			path: '/coletFavManage',
			component: coletFavManage,
		},{
			path: '/plantsExgManage',
			component: plantsExgManage,
		},{
			path: '/treeSendManage',
			component: treeSendManage,
		},{
			path: '/cultivateManage',
			component: cultivateManage,
		},{
			path: '/disasterList',
			component: disasterList,
		},{
			path: '/disasterSetting',
			component: disasterSetting,
		},{
			path: '/systemManage',
			component: systemManage,
		},{
			path: '/checkSysEditor',
			component: checkSysEditor,
		},{
			path: '/modifyPsd',
			component: modifyPsd,
		},{
			path: '/addBgUser',
			component: addBgUser,
		},{
			path: '/setAuthority',
			component: setAuthority,
		},{
			path: '/authSetting',
			component: authSetting,
		}]
	}
]

export default new Router({
	routes,
	strict: process.env.NODE_ENV !== 'production',
})
