<template>
    <div class="fillcontain">
       <div class="sub-title">树苗赠送管理</div>
       <el-row class="form-wrap bt">
          <el-col :span="10">
            <el-form ref="form" :model="form" label-width="120px">
            
            <el-form-item label="每日上限：">
                <label>每人每日有<el-input v-model="form.desc"></el-input>次赠送树苗机会</label>
            </el-form-item>
            <el-form-item label="赠送设置：">
              <label>每次赠送树苗的数量为<el-input v-model="form.desc"></el-input>棵</label>
            </el-form-item>
            <el-form-item label="角色设置：">
              <label>同一个用户每日最多只能赠送<el-input v-model="form.desc"></el-input>次</label>
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
