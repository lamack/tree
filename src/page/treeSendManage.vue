<template>
    <div class="fillcontain">
       <div class="sub-title bb">树苗赠送管理</div>
       <el-row class="form-wrap">
          <el-col :span="10">
            <el-form ref="form" :model="form" :rules="rules" label-width="120px">
            
            <el-form-item prop="trees_day_limit" label="每日上限：">
                <label>每人每日有<el-input v-model="form.trees_day_limit" type="number" class="input-b1"></el-input>次赠送树苗机会</label>
            </el-form-item>
            <el-form-item prop="trees_gift_times" label="赠送设置：">
              <label>每次赠送树苗的数量为<el-input v-model="form.trees_gift_times" type="number" class="input-b1"></el-input>棵</label>
            </el-form-item>
            <el-form-item prop="trees_gift_day" label="角色设置：">
              <label>同一个用户每日最多只能赠送<el-input v-model="form.trees_gift_day" type="number" class="input-b1"></el-input>次</label>
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
    import {shareTree} from '@/api/getData'
    export default {
        data() {
      return {
        form: {
          trees_day_limit: '',
          trees_gift_times: '',
          trees_gift_day: '',
        },
        rules: {
                trees_day_limit: [
                    { required: true, message: '请设置每日上线', trigger: 'blur' },
                ],
                trees_gift_times: [
                    { required: true, message: '请设置赠送设置', trigger: 'blur' },
                ],
                trees_gift_day: [
                    { required: true, message: '请设置角色设置', trigger: 'blur' }
                ],
            },
      }
    },
    methods: {
      async submitForm(formName) {
            this.$refs[formName].validate(async(valid) => {
                if (valid) {
                    const res = await shareTree({ 
                        trees_day_limit: this.form.trees_day_limit, 
                        trees_gift_times: this.form.trees_gift_times, 
                        trees_gift_day: this.form.trees_gift_day,
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
