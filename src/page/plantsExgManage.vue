<template>
    <div class="fillcontain">
       <div class="sub-title bb">绿值互送设置</div>
       <el-row class="form-wrap">
          <el-col :span="10">
            <el-form ref="form" :model="form" :rules="rules" label-width="120px">
            <el-form-item prop="green_day_limit" label="每日上限：">
                <label>每人每日有<el-input v-model="form.green_day_limit"></el-input>赠送绿值机会</label>
            </el-form-item>
            <el-form-item prop="green_gift_times" label="赠送设置：">
              <label>每次赠送绿值的数量为<el-input v-model="form.green_gift_times"></el-input>点</label>
            </el-form-item>
            <el-form-item prop="green_gift_day" label="角色设置：">
              <label>同一个用户每日最多只能赠送<el-input v-model="form.green_gift_day"></el-input>次</label>
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
    import {shareGreen} from '@/api/getData'
    export default {
        data() {
      return {
        form: {
          green_day_limit: '',
          green_gift_times: '',
          green_gift_day: '',
        },
        rules: {
                green_day_limit: [
                    { required: true, message: '请设置每日上线', trigger: 'blur' },
                ],
                green_gift_times: [
                    { required: true, message: '请设置赠送设置', trigger: 'blur' },
                ],
                green_gift_day: [
                    { required: true, message: '请设置角色设置', trigger: 'blur' }
                ],
            },
      }
    },
    methods: {
      async submitForm(formName) {
            this.$refs[formName].validate(async(valid) => {
                if (valid) {
                    const res = await shareGreen({ 
                        green_day_limit: this.form.green_day_limit, 
                        green_gift_times: this.form.green_gift_times, 
                        green_gift_day: this.form.green_gift_day,
                    })

                    if (res.data.status == 'succ') {
                        this.$message({
                            type: 'success',
                            message: '设置成功'
                        });
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
      padding:20px 60px;
    }
    
    .el-form-item label{
        width:120px;
    }
    .sub-title{
        font-size: 22px;
        margin: 20px 20px 0 20px;
        padding-bottom: 20px;
    }
</style>
