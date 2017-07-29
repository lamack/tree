<template>
    <div class="fillcontain">
	    <div class="go-back bt">
            <el-button type="primary">返回</el-button>
        </div>
        <div class="table_container bt">
            <el-form ref="form" :model="form" label-width="70px" >
                <el-form-item label="角色：">
                    请输入新密码：<el-input v-model="text" class="input-b3"></el-input>需要6 - 16位的数字或字母组合
                </el-form-item>
            </el-form>

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


