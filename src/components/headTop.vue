<template>
    <div class="header_container">
		<el-row type="flex" justify="space-between">
			<el-col :span="12">
				<p class="title">ShopEx后台管理系统</p>
			</el-col>
			<el-col :span="12">
				<div class="role-info">
					欢迎您：<el-button type="text">administrative（超级管理员）</el-button>
					<el-button type="text" @click="signoutClick">退出</el-button>
				</div>
			</el-col>
		</el-row>
    </div>
</template>

<script>
	import {signout} from '@/api/getData'
	import {baseImgPath} from '@/config/env'
	import {mapActions, mapState} from 'vuex'

    export default {
    	data(){
    		return {
    			baseImgPath,
    		}
    	},
    	created(){
    		if (!this.adminInfo.id) {
    			this.getAdminData()
    		}
    	},
    	computed: {
    		...mapState(['adminInfo']),
    	},
		methods: {
			...mapActions(['getAdminData']),
			async signoutData() {
	            try {
	                const res = await signout();
					if (res.status == 1) {
						this.$message({
	                        type: 'success',
	                        message: '退出成功'
	                    });
	                    this.$router.push('login');
					}else{
						this.$message({
	                        type: 'error',
	                        message: res.message
	                    });
					}
	            } catch (err) {
	                console.log('获取数据失败', err);
	            }
	        },
			signoutClick() {
				this.signoutData();
			}
		}
    }
</script>

<style lang="less">
	@import '../style/mixin';
	.header_container{
		background-color: #EFF2F7;
		height: 100px;
		line-height: 100px;
		padding: 0 60px;
	}
	.title{
		font-size: 24px;
		font-weight: 600;
	}
	.role-info{
		text-align: right;
	}
	.avator{
		.wh(36px, 36px);
		border-radius: 50%;
		margin-right: 37px;
	}
	.el-dropdown-menu__item{
        text-align: center;
    }
</style>
