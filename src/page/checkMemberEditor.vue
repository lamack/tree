<template>
    <div class="fillcontain">
      	<div class="go-back bt"><el-button type="success">返回</el-button></div>
        <div class="table_container bt">
	        <div class="sub-title">基本信息</div>
            <el-table
                :data="tableData"
                highlight-current-row
                style="width: 100%">
                <el-table-column
                  type="index"
                  width="100"
                  label="会员ID">
                </el-table-column>
                <el-table-column
                  property="registe_time"
                  label="会员名称"
                  width="200">
                </el-table-column>
                <el-table-column
                  property="username"
                  label="区域"
                  width="220">
                </el-table-column>
                <el-table-column
                  property="city"
                  label="所在企业">
                </el-table-column>
                 <el-table-column
                  property="city"
                  label="所在班组">
                </el-table-column>
                 <el-table-column
                  property="city"
                  label="树苗总数">
                </el-table-column>
                 <el-table-column
                  property="city"
                  label="最大绿值">
                </el-table-column>
                <el-table-column
                  property="city"
                  label="联系方式">
                </el-table-column>
                <el-table-column
                  property="city"
                  label="联系地址">
                </el-table-column>
                <el-table-column
                  property="city"
                  label="当前绿值">
                </el-table-column>
                <el-table-column
                  property="city"
                  label="当前享币">
                </el-table-column>
                <el-table-column
                  property="city"
                  label="当前里程数">
                </el-table-column>
            </el-table>
        </div>
        <div class="table_container">
        	<div class="sub-title">道具</div>
            <el-table
                :data="tableData"
                highlight-current-row
                style="width: 60%">
                <el-table-column
                  type="index"
                  width="150"
                  label="浇水壶数量">
                </el-table-column>
                <el-table-column
                  property="registe_time"
                  label="小铲子数量"
                  width="150">
                </el-table-column>
                <el-table-column
                  property="username"
                  label="肥料"
                  width="220">
                </el-table-column>
                <el-table-column
                  property="city"
                  label="保护罩">
                </el-table-column>
            </el-table>
        </div>
        <div class="table_container">
        	<div class="sub-title">树苗1信息</div>
            <el-table
                :data="tableData"
                highlight-current-row
                style="width: 60%">
                <el-table-column
                  type="index"
                  width="220"
                  label="领养时间">
                </el-table-column>
                <el-table-column
                  property="registe_time"
                  label="当前阶段">
                </el-table-column>
                <el-table-column
                  property="username"
                  label="拥有绿值">
                </el-table-column>
            </el-table>
        </div>
        <div class="table_container">
        	<div class="sub-title">树苗2信息</div>
            <el-table
                :data="tableData"
                highlight-current-row
                style="width: 60%">
                <el-table-column
                  type="index"
                  width="220"
                  label="领养时间">
                </el-table-column>
                <el-table-column
                  property="registe_time"
                  label="当前阶段">
                </el-table-column>
                <el-table-column
                  property="username"
                  label="拥有绿值">
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>

<script>
    import headTop from '../components/headTop'
    import {getUserList, getUserCount} from '@/api/getData'
    export default {
        data(){
            return {
                tableData: [{
                  registe_time: '2016-05-02',
                  username: '王小虎',
                  city: '上海市普陀区金沙江路 1518 弄'
                }, {
                  registe_time: '2016-05-04',
                  username: '王小虎',
                  city: '上海市普陀区金沙江路 1517 弄'
                }, {
                  registe_time: '2016-05-01',
                  username: '王小虎',
                  city: '上海市普陀区金沙江路 1519 弄'
                }, {
                  registe_time: '2016-05-03',
                  username: '王小虎',
                  city: '上海市普陀区金沙江路 1516 弄'
                }],
                currentRow: null,
                offset: 0,
                limit: 20,
                count: 0,
                currentPage: 1,
            }
        },
    	components: {
    		headTop,
    	},
        created(){
            this.initData();
        },
        methods: {
            async initData(){
                try{
                    const countData = await getUserCount();
                    if (countData.status == 1) {
                        this.count = countData.count;
                    }else{
                        throw new Error('获取数据失败');
                    }
                    this.getUsers();
                }catch(err){
                    console.log('获取数据失败', err);
                }
            },
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
                this.currentPage = val;
                this.offset = (val - 1)*this.limit;
                this.getUsers()
            },
            async getUsers(){
                const Users = await getUserList({offset: this.offset, limit: this.limit});
                this.tableData = [];
                Users.forEach(item => {
                    const tableData = {};
                    tableData.username = item.username;
                    tableData.registe_time = item.registe_time;
                    tableData.city = item.city;
                    this.tableData.push(tableData);
                })
            }
        },
    }
</script>

<style lang="less">
	@import '../style/mixin';
    .table_container{
      margin: 0 20px;
    	padding: 20px 20px;
    }
    .go-back{
    	margin: 0 20px;
    	padding:10px 0;
    }
    .sub-title{
    	font-size: 22px;
    	margin-bottom: 10px;
    }
</style>
