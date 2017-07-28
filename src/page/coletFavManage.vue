<template>
    <div class="fillcontain">
       <div class="go-back bt"><el-button type="primary" size="small">返回</el-button></div>
       <div class="sub-title">集赞设置</div>
       <el-row class="form-wrap bt">
          <el-col :span="10">
            <el-form ref="form" :model="form" label-width="120px">
            <el-form-item label="总集赞上限：">
                <el-radio-group v-model="form.resource">
                    <el-radio label="不限"></el-radio>
                    <el-radio label="限制"></el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="每日集赞设置：">
                <label>每人每日有<el-input v-model="form.desc"></el-input>次集赞机会</label>
            </el-form-item>
            <el-form-item label="兑换设置：">
              <label>每次得到<el-input v-model="form.desc"></el-input>个赞可兑换<el-input v-model="form.desc"></el-input>个分享币</label>
            </el-form-item>
            <el-form-item label="绿能设置：">
              <label>每次得到<el-input v-model="form.desc"></el-input>个赞可获得<el-input v-model="form.desc"></el-input>点绿植</label>
            </el-form-item>
        </el-form>
        </el-col>
       </el-row>
      <el-row class="btn-options">
          <el-button type="primary" size="small">保存</el-button>
          <el-button size="small">取消</el-button>
      </el-row>
    </div>
</template>

<script>
    import {getUserList, getUserCount} from '@/api/getData'
    export default {
        data() {
      return {
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        }
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      }
    }
    }
</script>

<style lang="less" scoped>
    @import '../style/mixin';
    .go-back{
      margin: 0 20px;
      padding:10px 0;
    }
    .table_container{
        padding: 20px;
    }
    .form-wrap{
      margin:0 20px;
      padding: 30px 50px; 
    }
    .btn-options{
      padding:20px 60px;
    }
    .el-input{
        width: 40px;
        margin: 0 5px;
    }
    .el-form-item label{
        width:120px;
    }
    .sub-title{
        font-size: 22px;
        margin: 20px 20px 0 20px;
    }
</style>
