<template>
    <div class="fillcontain">
       <div class="go-back bb"><el-button type="primary" @click='goBackClick'>返回</el-button></div>
       <div class="sub-title">竞答设置</div>
       <el-row class="form-wrap">
          <el-col :span="10">
            <el-form ref="form" :model="form" :rules="rules" label-width="125px">
              <el-form-item prop="vie_numbers" label="试题抽取设置：">
                  <label>每次随机抽取<el-input v-model="form.vie_numbers" type="number" class="input-b1"></el-input>道试</label>
              </el-form-item>
              <el-form-item prop="vie_right" label="奖励设置：">
                  <label>每答对<el-input v-model="form.vie_right" type="number" class="input-b1"></el-input>道试题获得<el-input v-model="form.vie_share" type="number" class="input-b1"></el-input>分享币</label>
              </el-form-item>
              <el-form-item prop="vie_rule" label="竞答规则：">
                <el-input type="textarea" v-model="form.vie_rule"></el-input>
              </el-form-item>
              <el-form-item class="btn-options">
                  <el-button type="primary" @click="submitForm('form')">保存</el-button>
                  <el-button type="primary" @click="cancelClick">取消</el-button>
              </el-form-item>
          </el-form>
        </el-col>
       </el-row>
    </div>
</template>

<script>
    import {vieSet} from '@/api/getData'
    export default {
        data() {
          return {
            form: {
              vie_numbers: '',
              vie_right: '',
              vie_share: '',
              vie_rule: '',
            },
            rules: {
                vie_numbers: [
                    { required: true, message: '请输入抽取试题', trigger: 'blur' },
                ],
                vie_right: [
                    { required: true, message: '请输入答对题目数目', trigger: 'blur' }
                ],
                vie_share: [
                    { required: true, message: '请输入分享币', trigger: 'blur' }
                ],
                vie_rule: [
                    { required: true, message: '请输入竞答规则', trigger: 'blur' }
                ],
            }
          }
    },
    methods: {
      async submitForm(formName) {
          this.$refs[formName].validate(async(valid) => {
              if (valid) {
                  const res = await vieSet({ 
                      id: '0',
                      vie_numbers: this.form.vie_numbers,
                      vie_right:this.form.vie_right,
                      vie_share:this.form.vie_share,
                      vie_rule:this.form.vie_rule,
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
        cancelClick() {
            this.$router.go(-1);
        },
        goBackClick() {
            this.$router.go(-1);
        }
    }
  }
</script>

<style lang="less" scoped>
    @import '../style/mixin';
    .form-wrap{
      margin:0 20px;
      padding: 30px 50px; 
    }
    .btn-options{
      padding:20px 50px;
    }
    .el-form-item label{
        width:120px;
    }
</style>
