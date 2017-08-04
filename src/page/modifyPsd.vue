<template>
    <div class="fillcontain">
	    <div class="go-back bb">
            <el-button type="primary">返回</el-button>
        </div>
        <div class="table_container bb">
            <el-form ref="form" :model="form" :rules="rules" label-width="70px" >
                <el-form-item prop="password" label="角色：">
                    请输入新密码：<el-input v-model="form.password" class="input-b3"></el-input>需要6 - 16位的数字或字母组合
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm('form')">保存</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
    import {userUppwd} from '@/api/getData'
    export default {
        data(){
            return {
                form:{
                    password: ''
                },
                rules: {
                    password: [
                        { required: true, message: '请输入新密码', trigger: 'blur' },
                    ]
                }
            }
        },
        methods: {
            async submitForm(formName) {
              this.$refs[formName].validate(async(valid) => {
                  if (valid) {
                      const res = await userUppwd({ 
                          id: '0',
                          password: this.form.password,
                      })

                      if (res.data.status == 'succ') {
                          this.$message({
                              type: 'success',
                              message: '修改成功'
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
        },
    }
</script>

<style lang="less">
    @import '../style/mixin';
</style>


