<template>
    <div class="fillcontain">
       <div class="go-back bt"><el-button type="primary">返回</el-button></div>
       <div class="sub-title">竞答设置</div>
       <el-row class="form-wrap bt">
          <el-col :span="10">
            <el-form ref="form" :model="form" label-width="120px">
            <el-form-item label="试题抽取设置：">
                <label>每次随机抽取<el-input v-model="form.name"></el-input>道试</label>
            </el-form-item>
            <el-form-item label="奖励设置：">
                <label>每答对<el-input v-model="form.desc"></el-input>道试题获得<el-input v-model="form.desc"></el-input>分享币</label>
              
            </el-form-item>
            <el-form-item label="竞答规则：">
              <el-input type="textarea" v-model="form.desc"></el-input>
            </el-form-item>
        </el-form>
        </el-col>
       </el-row>
      <el-row class="btn-options">
          <el-button type="primary" @click="onSubmit">保存</el-button>
          <el-button>取消</el-button>
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
