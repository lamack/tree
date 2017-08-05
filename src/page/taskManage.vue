<template>
    <div class="fillcontain">
	    <div class="go-back bb">
            <el-button type="primary" @click="createTaskClick">新增任务</el-button>
        </div>
        <div class="table_container">
            <el-table :data="tableData" style="width: 100%">
                <el-table-column prop="id" label="编号">
                </el-table-column>
                <el-table-column prop="task_describe" label="任务描述">
                </el-table-column>
                <el-table-column prop="task_pic" label="图片">
                    <template scope="scope">
                        <img :src="scope.row.task_pic">
                    </template>
                </el-table-column>
                <el-table-column prop="reward_types" label="奖励类型">
                </el-table-column>
                <el-table-column prop="reward_numbers" label="奖励数量">
                </el-table-column>
                <el-table-column prop="reward_condition" label="触发条件">
                </el-table-column>
                <el-table-column prop="jump" label="是否有第三方跳转">
                </el-table-column>
                <el-table-column prop="jump_url" label="跳转URL">
                </el-table-column>
                <el-table-column prop="" label="编辑" inline-template>
                    <span>
                        <el-button type="text" @click="lookDetailClick">查看详情</el-button>
                    </span>
                </el-table-column>
            </el-table>
            <div class="Pagination" style="text-align: right;margin-top: 10px;">
                <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-size="20" layout="total, prev, pager, next" :total="count">
                </el-pagination>
            </div>
        </div>
    </div>
</template>

<script>
    import {task} from '@/api/getData'
    export default {
        data(){
            return {
                tableData: [],
                currentRow: null,
                count: 0,
            }
        },
        created(){
            this.initData();
        },
        methods: {
            async initData(){
                try {
                    const res = await task();
                    console.log(res);
                    if (res.code == '1') {
                        this.tableData = res.data;
                    } else {
                        throw new Error('获取数据失败');
                    }
                } catch (err) {
                    console.log('获取数据失败', err);
                }
            },
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
                this.currentPage = val;
                this.offset = (val - 1)*this.limit;
            },
            createTaskClick() {
                this.$router.push('taskEditor');
            },
            lookDetailClick() {

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


