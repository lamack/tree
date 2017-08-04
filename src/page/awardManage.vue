<template>
    <div class="fillcontain">
        <div class="go-back bt">
            <el-button type="primary">返回</el-button>
        </div>
        <div class="award-wrap">
            <el-tabs type="border-card">
                <el-tab-pane label="转盘抽奖">
                    <template>
                        <div class="table_container">
                            <el-table :data="turnTableData" style="width: 100%">
                                <el-table-column prop="id" label="编号">
                                </el-table-column>
                                <el-table-column prop="reward" label="奖品名称">
                                </el-table-column>
                                <el-table-column prop="reward_pic" label="奖品图片">
                                    <template scope="scope">
                                        <img :src="scope.row.reward_pic">
                                    </template>
                                </el-table-column>
                                <el-table-column prop="reward_chance" label="获奖概率">
                                </el-table-column>
                                <el-table-column prop="reward_num" label="剩余数量">
                                </el-table-column>
                            </el-table>
                        </div>
                    </template>
                </el-tab-pane>
                <el-tab-pane label="果实抽奖">
                    <template>
                        <div class="table_container">
                            <el-table :data="fruitTableData" style="width: 100%">
                                <el-table-column prop="id" label="编号">
                                </el-table-column>
                                <el-table-column prop="reward" label="奖品名称">
                                </el-table-column>
                                <el-table-column prop="reward_pic" label="奖品图片">
                                    <template scope="scope">
                                        <img :src="scope.row.reward_pic">
                                    </template>
                                </el-table-column>
                                <el-table-column prop="reward_chance" label="获奖概率">
                                </el-table-column>
                                <el-table-column prop="reward_num" label="剩余数量">
                                </el-table-column>
                            </el-table>
                        </div>
                    </template>
                </el-tab-pane>
            </el-tabs>
        </div>
    </div>
</template>
<script>
import { wheel } from '@/api/getData'
export default {
    data() {
        return {
            turnTableData: [],
            fruitTableData: [],
            currentRow: null,
            currentPage: 1,
        }
    },
    created() {
        this.initData();
    },
    methods: {
        async initData() {
            try {
                const responseData = await wheel();
                console.log(responseData);
                if (responseData.code == '1') {
                    this.turnTableData = responseData.data;
                } else {
                    throw new Error('获取数据失败');
                }
            } catch (err) {
                console.log('获取数据失败', err);
            }
        },
    },
}

</script>
<style lang="less" scoped>
@import '../style/mixin';
.go-back {
    margin: 0 20px;
    padding: 10px 0;
}

.table_container {
    padding: 20px;
}

.form-wrap {
    margin: 0 20px;
    padding: 30px 50px;
}

.btn-options {
    padding: 20px 60px;
}

.chou-award-wrap .el-input {
    width: 40px;
    margin: 0 5px;
}

.el-form-item label {
    width: 120px;
}

.sub-title {
    font-size: 22px;
    margin: 20px;
}

.award-wrap {
    margin: 0 20px;
    padding: 10px 0;
}

</style>
