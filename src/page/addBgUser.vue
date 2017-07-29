<template>
    <div class="fillcontain">
       <el-row class="form-wrap bt">
          <el-col :span="10">
            <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="账号">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="密码">
              <el-input v-model="form.name"></el-input>需要6 - 16位的数字或字母组合
            </el-form-item>
            <el-form-item label="角色：">
                <p class="award-type"><el-radio v-model="checked" checked>超级管理员</el-radio></p>
                <p class="award-type"><el-radio v-model="checked" checked>客服</el-radio></p>
                <p class="award-type"><el-radio v-model="checked" checked>运营</el-radio></p>
            </el-form-item>
        </el-form>
        </el-col>
       </el-row>
      <el-row class="btn-options">
          <el-button type="primary" @click="onSubmit" size="small">保存</el-button>
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

<style lang="less">
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
</style>
