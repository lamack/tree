<template>
    <div class="fillcontain">
        <div class="table_container">
            <el-button type="primary" @click="propSetClick">道具设置</el-button>
            <el-table :data="tableData" style="width: 100%">
                <el-table-column prop="id" label="编号">
                </el-table-column>
                <el-table-column prop="prop_name" label="名称">
                </el-table-column>
                <el-table-column prop="prop_affect" label="作用">
                </el-table-column>
                <el-table-column prop="cash" label="售价">
                </el-table-column>
                <el-table-column prop="convert" label="集赞兑奖">
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
import { prop } from '@/api/getData'
export default {
    data() {
        return {
            tableData: [],
            currentRow: null,
            offset: 0,
            limit: 20,
            count: 0,
            currentPage: 1,
        }
    },
    created() {
        this.initData();
    },
    methods: {
        async initData() {
            try {
                const responseData = await prop();
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
            
        },
        propSetClick() {
            this.$router.push('sceneSetting');
        }

    },
}

</script>
<style lang="less">
@import '../style/mixin';
.table_container {
    padding: 20px;
}

.go-back {
    margin: 0 20px;
    padding: 10px 0;
}
.el-button{
    margin-bottom: 10px;
}
</style>
