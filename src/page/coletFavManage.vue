<template>
    <div class="fillcontain">
       <div class="go-back bb"><el-button type="primary">返回</el-button></div>
       <div class="sub-title">集赞设置</div>
       <el-row class="form-wrap">
          <el-col :span="16">
            <el-form ref="form" :model="form" :rules="rules" label-width="125px">
            <el-form-item prop="zan_limit" label="总集赞上限：">
                <el-radio-group v-model="form.zan_limit">
                    <el-radio label="0">不限</el-radio>
                    <el-radio label="1">限制</el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item prop="zan_day" label="每日集赞设置：">
                <label>每人每日有<el-input v-model="form.zan_day" type="number" class="input-b1"></el-input>次集赞机会</label>
            </el-form-item>
            <el-form-item prop="cash_share_zan_num" label="兑换设置：">
              <label>每次得到<el-input v-model="form.cash_share_zan_num" type="number" class="input-b1"></el-input>个赞可兑换<el-input v-model="form.cash_share_num" type="number" class="input-b1"></el-input>个分享币</label>
            </el-form-item>
            <el-form-item prop="cash_green_zan_num" label="绿能设置：">
              <label>每次得到<el-input v-model="form.cash_green_zan_num" type="number" class="input-b1"></el-input>个赞可获得<el-input v-model="form.cash_green_num" type="number" class="input-b1"></el-input>点绿植</label>
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
    import {zanSet} from '@/api/getData'
    export default {
        data() {
      return {
        form: {
                zan_limit: '',
                zan_day: '',
                cash_share_zan_num: '',
                cash_share_num: '',
                cash_green_zan_num: '',
                cash_green_num: '',
            },
            rules: {
                zan_limit: [
                    { required: true, message: '请选择总集赞上线', trigger: 'change' },
                ],
                zan_day: [
                    { required: true, message: '请设置集赞次数', trigger: 'blur' },
                ],
                cash_share_zan_num: [
                    { required: true, message: '请输入集赞数目', trigger: 'blur' }
                ],
                cash_share_num: [
                    { required: true, message: '请输入分享币数目', trigger: 'blur' }
                ],
                cash_green_zan_num: [
                    { required: true, message: '请输入集赞数目', trigger: 'blur' }
                ],
                cash_green_num: [
                    { required: true, message: '请输入绿植数目', trigger: 'blur' }
                ],
            },
      }
    },
    methods: {
      async submitForm(formName) {
            this.$refs[formName].validate(async(valid) => {
                if (valid) {
                    const res = await zanSet({ 
                        zan_limit: this.form.zan_limit, 
                        zan_day: this.form.zan_day, 
                        cash_share_zan_num: this.form.cash_share_zan_num,
                        cash_share_num: this.form.cash_share_num,
                        cash_green_zan_num: this.form.cash_green_zan_num,
                        cash_green_num: this.form.cash_green_num
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
      padding:20px 30px;
    }
    
</style>
