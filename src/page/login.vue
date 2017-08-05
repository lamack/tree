<template>
    <div class="login_page fillcontain">
        <transition name="form-fade" mode="in-out">
            <section class="form_contianer" v-show="showLogin">
                <div class="manage_tip">
                    <p>上汽植树后台管理系统</p>
                </div>
                <el-form :model="loginForm" :rules="rules" ref="loginForm">
                    <el-form-item prop="username" label="用户名：" label-width="80px">
                        <el-input v-model="loginForm.username" placeholder="用户名"class="input-b4"></el-input>
                    </el-form-item>
                    <el-form-item prop="password" label="密码：  " label-width="80px">
                        <el-input type="password" placeholder="密码" v-model="loginForm.password" class="input-b4"></el-input>
                    </el-form-item>
                    <el-form-item prop="password" label="验证码：" label-width="85px">
                        <el-input type="text" placeholder="请输入验证码" v-model="loginForm.code" style="width:115px"></el-input>
                        <img id="codeImg" :src="baseUrl + '/user/user/code'" @click="refreshCodeClick">
                        <el-button type="text" @click="refreshCodeClick">刷新</el-button>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="submitForm('loginForm')" class="submit_btn">登陆</el-button>
                    </el-form-item>
                </el-form>
            </section>
        </transition>
    </div>
</template>
<script>
import { login, code } from '@/api/getData'
import { baseUrl } from '@/config/env'
import { mapActions, mapState } from 'vuex'

export default {
    data() {
        return {
            baseUrl,
            loginForm: {
                username: '',
                password: '',
                code: ''
            },
            rules: {
                username: [
                    { required: true, message: '请输入用户名', trigger: 'blur' },
                ],
                password: [
                    { required: true, message: '请输入密码', trigger: 'blur' }
                ],
                code: [
                    { required: true, message: '请输入验证码', trigger: 'blur' }
                ],
            },
            showLogin: false,
        }
    },
    mounted() {
        this.showLogin = true;
        if (!this.adminInfo.id) {
            // this.getAdminData()
        }
    },
    computed: {
        ...mapState(['adminInfo']),
    },
    methods: {
        async submitForm(formName) {
            this.$refs[formName].validate(async(valid) => {
                if (valid) {
                    const res = await login({ username: this.loginForm.username, password: this.loginForm.password, code: this.loginForm.code })
                    if (res.data.status == 'succ') {
                    	const token = res.data.token;
                        this.$message({
                            type: 'success',
                            message: '登录成功'
                        });
                        this.$router.push('memberManage')
                    } else {
                        this.$message({
                            type: 'error',
                            message: res.data.msg
                        });
                    }
                } else {
                    this.$notify.error({
                        title: '错误',
                        message: '请输入正确的用户名密码',
                        offset: 100
                    });
                    return false;
                }
            });
        },
        refreshCodeClick() {
        	document.getElementById('codeImg').src = 'http://saictree.innke.net:8081/index.php/user/user/code';
        }
    },
    watch: {
        adminInfo: function(newValue) {
            if (newValue.id) {
                this.$message({
                    type: 'success',
                    message: '检测到您之前登录过，将自动登录'
                });
                this.$router.push('manage')
            }
        }
    }
}

</script>
<style lang="less" scoped>
@import '../style/mixin';
.login_page {
    background-color: #324057;
}

.manage_tip {
    position: absolute;
    width: 100%;
    top: -100px;
    left: 0;
    p {
        font-size: 34px;
        color: #fff;
    }
}

.form_contianer {
    .wh(320px, 240px);
    .ctp(320px, 240px);
    padding: 25px;
    border-radius: 5px;
    text-align: center;
    background-color: #fff;
    .submit_btn {
        width: 100%;
        font-size: 16px;
    }
}

.tip {
    font-size: 12px;
    color: red;
}

.form-fade-enter-active,
.form-fade-leave-active {
    transition: all 1s;
}

.form-fade-enter,
.form-fade-leave-active {
    transform: translate3d(0, -50px, 0);
    opacity: 0;
}
.el-form-item{
	text-align: left;
}
#codeImg{
	width: 80px;
	height: 36px;
	vertical-align: middle;
}

</style>
