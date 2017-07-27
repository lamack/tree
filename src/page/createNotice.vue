<template>
    <div class="fillcontain">
       <div class="go-back bt"><el-button type="primary">返回</el-button></div>
       <el-row class="form-wrap bt">
          <el-col :span="8">
            <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="公告类型">
              <el-select v-model="form.region" placeholder="请选择公告类型">
                <el-option label="游戏介绍" value="shanghai"></el-option>
                <el-option label="游戏公告" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="公告标题">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="公告内容">
              <el-input type="textarea" v-model="form.desc"></el-input>
            </el-form-item>
            <el-form-item label="公告状态">
              <el-radio-group v-model="form.resource">
                <el-radio label="启用"></el-radio>
                <el-radio label="停用"></el-radio>
              </el-radio-group>
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
