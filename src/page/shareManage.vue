<template>
    <div class="fillcontain">
        <div class="header-wrap bb">
            <el-form :model="form" ref="form" class="demo-ruleForm" label-position="left">
                <el-row :gutter="10">
                    <el-col :span="12" class="type-option">
                        <el-form-item label="时间范围" prop="dateValue" label-width="80px">
                            <el-date-picker v-model="form.date1" type="date" placeholder="选择日期" :picker-options="pickerOptions0">
                            </el-date-picker>
                            <label>--</label>
                            <el-date-picker v-model="form.date2" type="date" placeholder="选择日期" :picker-options="pickerOptions1">
                            </el-date-picker>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row class="btn-options">
                    <el-form-item>
                        <el-button type="primary" @click="queryClick">查询</el-button>
                        <el-button type="danger" @click="resetForm('form')">重置</el-button>
                    </el-form-item>
                </el-row>
            </el-form>
        </div>
        <div class="table_container">
            <el-table :data="tableData" style="width: 100%">
                <el-table-column prop="user_name" label="会员ID">
                </el-table-column>
                <el-table-column prop="create_time" label="会员名称">
                </el-table-column>
                <el-table-column prop="city" label="最近分享时间">
                </el-table-column>
                <el-table-column prop="admin" label="分享渠道">
                </el-table-column>
                <el-table-column prop="admin" label="总分享数">
                </el-table-column>
                <el-table-column prop="admin" label="集赞数">
                </el-table-column>
                <el-table-column prop="" label="操作" inline-template>
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
import { adminList, adminCount } from '@/api/getData'
export default {
    data() {
        return {
            tableData: [],
            currentRow: null,
            offset: 0,
            limit: 20,
            count: 0,
            currentPage: 1,
            form: {
                dateValue: '',
                date1: '',
                date2: '',
            },
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
    created() {
        this.initData();
    },
    methods: {
        async initData() {
            try {
                const countData = await adminCount();
                if (countData.status == 1) {
                    this.count = countData.count;
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
            this.offset = (val - 1) * this.limit;
        },
        queryClick() {
            // this.params.keyWords = this.validateForm.keyWords;
            // console.log(this.validateForm.keyWords);
            // console.log(this.params);
            this.$router.push('checkShareDetail');
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        },
        lookDetailClick() {
            this.$router.push('checkShareDetail');
        }
    },
}

</script>
<style lang="less">
@import '../style/mixin';

</style>
