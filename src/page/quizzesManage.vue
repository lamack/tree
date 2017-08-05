<template>
    <div class="fillcontain">
    	<div class="go-back bb"><el-button type="primary">题库上传</el-button></div>
        <div class="table_container">
        	<el-button type="primary" class="quizzeSet-btn mg-btn" @click="quizzeSetClick">竞答设置</el-button>
            <el-table :data="tableData" style="width: 100%">
                <el-table-column prop="id" label="编号">
                </el-table-column>
                <el-table-column prop="question" label="题目">
                </el-table-column>
                <el-table-column prop="option1" label="选项1">
                </el-table-column>
                <el-table-column prop="option2" label="选项2">
                </el-table-column>
                <el-table-column prop="option3" label="选项3">
                </el-table-column>
                <el-table-column prop="answer" label="正确答案">
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
    import {vie} from '@/api/getData'
    export default {
        data(){
            return {
                tableData: [],
                currentRow: null,
                offset: 0,
                limit: 20,
                count: 0,
                currentPage: 1,
            }
        },
        created(){
            this.initData();
        },
        methods: {
            async initData() {
                try {
                    const responseData = await vie();
                    console.log(responseData);
                    if (responseData.code == '1') {
                        this.tableData = responseData.data;
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
            quizzeSetClick() {
                this.$router.push('quizzesSetting');
            }
        },
    }
</script>

<style lang="less">
	@import '../style/mixin';
</style>


