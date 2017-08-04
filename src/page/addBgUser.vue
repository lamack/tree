<template>
    <div class="fillcontain">
       <el-row class="form-wrap bt">
          <el-col :span="10">
            <el-form ref="form" :model="form" :rules="rules" label-width="80px">
            <el-form-item prop="username" label="账号：">
              <el-input v-model="form.username"></el-input>
            </el-form-item>
            <el-form-item prop="password" label="密码：">
              <el-input v-model="form.password"></el-input>需要6 - 16位的数字或字母组合
            </el-form-item>
            <el-form-item prop="role" label="角色：">
                <p class="award-type"><el-radio label="0" v-model="form.role" checked>超级管理员</el-radio></p>
                <p class="award-type"><el-radio label="1" v-model="form.role">客服</el-radio></p>
                <p class="award-type"><el-radio label="2" v-model="form.role">运营</el-radio></p>
            </el-form-item>
            <el-form-item>
                  <el-button type="primary" @click="submitForm('form')">保存</el-button>
            </el-form-item>
        </el-form>
        </el-col>
       </el-row>
    </div>
</template>

<script>
    import {userAdd} from '@/api/getData'
    export default {
        data() {
      return {
        form: {
          username: '',
          password: '',
          role: '',
        },
        rules: {
          username: [
                  { required: true, message: '请输入账号', trigger: 'blur' },
              ],
              password: [
                  { required: true, message: '请输入密码', trigger: 'blur' },
              ],
              role: [
                  { required: true, message: '请选择角色', trigger: 'change' },
              ]
          }
      }
    },
    methods: {
      async submitForm(formName) {
              this.$refs[formName].validate(async(valid) => {
                  if (valid) {
                      const res = await userAdd({ 
                          username: this.form.username,
                          password: this.form.password,
                          role: this.form.role,
                      })

                      if (res.data.status == 'succ') {
                          this.$message({
                              type: 'success',
                              message: '保存成功'
                          });
                          this.$router.push('noticeManage')
                      } else {
                          this.$message({
                              type: 'error',
                              message: res.data.msg
                          });
                      }
                  }
              });
            },
    }
    }
</script>

<style lang="less">
	@import '../style/mixin';
    
    .form-wrap{
      margin:0 20px;
      padding: 30px 50px; 
    }
    .btn-options{
      padding:20px 20px;
    }
</style>
