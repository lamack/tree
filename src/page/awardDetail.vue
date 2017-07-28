<template>
    <div class="fillcontain">
        <div class="go-back bt"><el-button type="primary">返回</el-button></div>
        <div class="header-wrap bt">
            <el-row>
                <el-col :span="4" class="type-option">
                    <label>奖品</label>
                    <el-dropdown trigger="click" menu-align="start" @command="handleCommand">
                        <span class="el-dropdown-link">
                            {{dropdownText}}<i class="el-icon-caret-bottom el-icon--right"></i>
                        </span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item command="全部">全部</el-dropdown-item>
                            <el-dropdown-item command="享币">享币</el-dropdown-item>
                            <el-dropdown-item command="里程">里程</el-dropdown-item>
                            <el-dropdown-item command="绿值">绿值</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </el-col>
                <el-col :span="12" class="time-option">
                    <label>获奖时间</label>
                    <el-date-picker
                      v-model="value1"
                      type="date"
                      placeholder="选择日期"
                      :picker-options="pickerOptions0">
                    </el-date-picker>
                    <label>--</label>
                    <el-date-picker
                      v-model="value2"
                      type="date"
                      placeholder="选择日期"
                      :picker-options="pickerOptions1">
                    </el-date-picker>
                </el-col>
            </el-row>
            <el-row>
                <el-button type="success">查询</el-button>
                <el-button type="danger">重置</el-button>
            </el-row>
        </div>
        
        <div class="table_container">
            <el-table
              :data="tableData"
              style="width: 100%">
              <el-table-column
                prop="user_name"
                label="会员ID">
              </el-table-column>
              <el-table-column
                prop="create_time"
                label="会员名称">
              </el-table-column>
              <el-table-column
                prop="city"
                label="奖品">
              </el-table-column>
              <el-table-column
                prop="admin"
                label="获奖时间">
              </el-table-column>
              <el-table-column
                prop="admin"
                label="状态">
              </el-table-column>
              <el-table-column
                prop="admin"
                label="券号">
              </el-table-column>
              <el-table-column
                prop="admin"
                label="兑奖方式">
              </el-table-column>
              <el-table-column
                prop="admin"
                label="兑换地址">
              </el-table-column>
            </el-table>
            <div class="Pagination" style="text-align: left;margin-top: 10px;">
                <el-pagination
                  @size-change="handleSizeChange"
                  @current-change="handleCurrentChange"
                  :current-page="currentPage"
                  :page-size="20"
                  layout="total, prev, pager, next"
                  :total="count">
                </el-pagination>
            </div>
        </div>
    </div>
</template>

<script>
    import headTop from '../components/headTop'
    import {adminList, adminCount} from '@/api/getData'
    export default {
        data(){
            return {
                tableData: [],
                currentRow: null,
                offset: 0,
                limit: 20,
                count: 0,
                currentPage: 1,
                dropdownText: '全部',
                value1: '',
                value2: '',
                pickerOptions0: {
                  disabledDate(time) {
                    return time.getTime() < Date.now() - 8.64e7;
                  }
                },
                pickerOptions1: {
                  disabledDate(time) {
                    return time.getTime() < Date.now() - 8.64e7;
                  }
                }
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
                    const countData = await adminCount();
                    if (countData.status == 1) {
                        this.count = countData.count;
                    }else{
                        throw new Error('获取数据失败');
                    }
                    this.getAdmin();
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
                this.getAdmin()
            },
            handleCommand(command) {
                this.dropdownText = command;

                if (command == '全部订单') {
                    this.url = '/static/jsonList/orderList.json';
                } else if (command == '待处理订单') {
                    this.url = '/static/jsonList/pendingOrderList.json';
                } else if (command == '未完成订单') {
                    this.url = '/static/jsonList/undoneOrderList.json';
                } else if (command == '已完成订单') {
                    this.url = '/static/jsonList/doneOrderList.json';
                } else if (command == '已作废订单') {
                    this.url = '/static/jsonList/voidedrderList.json';
                }
                this.getOrderList(this.url);
            },
            async getAdmin(){
                try{
                    const res = await adminList({offset: this.offset, limit: this.limit});
                    if (res.status == 1) {
                        this.tableData = [];
                        res.data.forEach(item => {
                            const tableItem = {
                                create_time: item.create_time,
                                user_name: item.user_name,
                                admin: item.admin,
                                city: item.city,
                            }
                            this.tableData.push(tableItem)
                        })
                    }else{
                        throw new Error(res.message)
                    }
                }catch(err){
                    console.log('获取数据失败', err);
                }
            }
        },
    }
</script>

<style lang="less">
    @import '../style/mixin';
    .table_container{
        padding: 20px;
    }
    .go-back{
        margin: 0 20px;
        padding:10px 0;
    }
    .header-wrap{
        margin: 0 20px;
        padding: 5px 0px 20px 20px;
        
    }
    .header-wrap label{
        font-size: 15px;
        margin-right: 5px;
    }
    .header-wrap .type-option{
        height: 35px;
        line-height: 35px;
    }
</style>


