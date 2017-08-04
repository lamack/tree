<template>
	<div class="manage_page fillcontain">
		<el-row style="height: 100%;">
	  		<el-col :span="4"  style="min-height: 100%; background-color: #324057;">
				<el-menu :default-active="defaultActive" style="min-height: 100%;" theme="dark" router>
					<!-- <el-menu-item index="manage"><i class="el-icon-menu"></i>首页</el-menu-item> -->
					<el-submenu index="2">
						<template slot="title"><router-link to="memberManage"><i class="el-icon-document"></i>会员管理</router-link></template>
						<el-menu-item index="checkMemberEditor">查看编辑</el-menu-item>
						<el-menu-item index="checkMemberRecord">查询记录</el-menu-item>
					</el-submenu>
					<el-submenu index="3">
						<template slot="title"><router-link to="noticeManage"><i class="el-icon-plus"></i>公告管理</router-link></template>
						<el-menu-item index="createNotice">新建/编辑公告</el-menu-item>
					</el-submenu>
					<el-submenu index="4">
						<template slot="title"><router-link to="quizzesManage"><i class="el-icon-star-on"></i>竞答管理</router-link></template>
						<el-menu-item index="quizzesSetting">竞答设置</el-menu-item>
					</el-submenu>
					<el-submenu index="5">
						<template slot="title"><router-link to="awardManage"><i class="el-icon-edit"></i>抽奖管理</router-link></template>
						<el-menu-item index="awardSetting">奖品设置</el-menu-item>
						<el-submenu index="5-1">
				          <template slot="title"><router-link to="awardList">用户获奖列表</router-link></template>
				          <el-menu-item index="awardDetail">用户获奖详情</el-menu-item>
				        </el-submenu>
					</el-submenu>
					<el-submenu index="6">
						<template slot="title"><router-link to="taskManage"><i class="el-icon-setting"></i>任务管理</router-link></template>
						<el-menu-item index="taskEditor">任务编辑</el-menu-item>
					</el-submenu>
					<el-submenu index="7">
						<template slot="title"><router-link to="sceneManage"><i class="el-icon-warning"></i>道具管理</router-link></template>
						<el-menu-item index="sceneSetting">道具设置</el-menu-item>
					</el-submenu>
					<el-submenu index="8">
						<template slot="title"><router-link to="shareManage"><i class="el-icon-warning"></i>分享管理</router-link></template>
						<el-menu-item index="checkShareDetail">查看详情</el-menu-item>
						<el-menu-item index="coletFavManage">集赞管理</el-menu-item>
						<el-menu-item index="plantsExgManage">绿值互送管理</el-menu-item>
						<el-menu-item index="treeSendManage">树苗赠送管理</el-menu-item>
					</el-submenu>
					<el-submenu index="9">
						<template slot="title"><router-link to="cultivateManage"><i class="el-icon-warning"></i>养成管理</router-link></template>
						<el-menu-item index="disasterList">灾害触发列表</el-menu-item>
						<el-menu-item index="disasterSetting">自然灾害设置</el-menu-item>
					</el-submenu>
					<el-submenu index="10">
						<template slot="title"><router-link to="systemManage"><i class="el-icon-warning"></i>系统管理</router-link></template>
						<el-menu-item index="checkSysEditor">查看编辑</el-menu-item>
						<el-menu-item index="modifyPsd">修改密码</el-menu-item>
						<el-menu-item index="addBgUser">添加后台用户</el-menu-item>
						<el-submenu index="10-1">
				          <template slot="title"><router-link to="authSetting">管理权限设置</router-link></template>
				          <el-menu-item index="setAuthority">设置权限</el-menu-item>
				        </el-submenu>
					</el-submenu>
				</el-menu>
			</el-col>
			<el-col :span="20" style="height: 100%;overflow: auto;">
				<keep-alive>
				    <router-view></router-view>
				</keep-alive>
			</el-col>
		</el-row>
  	</div>
</template>

<script>
    export default {
		computed: {
			defaultActive: function(){
				return this.$route.path.replace('/', '');
			}
		},
    }
</script>


<style lang="less" scoped>
	@import '../style/mixin';
	.manage_page{
		
	}
	.el-submenu a{
		color: #fff;
		display: block;
		height: 100%;
		width: 100%;
	}
	.el-submenu a.router-link-active{
		color: #20a0ff
	}
</style>
