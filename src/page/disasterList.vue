<template>
    <div class="fillcontain">
        <div class="header-wrap bb">
            <el-row>
                <el-col class="time-option">
                    <el-form ref="form" :model="form" :rules="rules" label-width="145px">
                        <el-form-item prop="start_time" label="请选择触发时间：">
                            <el-col :span="2">时间范围</el-col>
                            <el-col :span="5">
                                <el-form-item prop="start_time">
                                    <el-date-picker v-model="form.start_time" type="date" placeholder="选择日期" :picker-options="pickerOptions0">
                                    </el-date-picker>
                                </el-form-item>
                            </el-col>
                            <el-col :span="1" style="text-align: right;margin:0 15px;">-</el-col>
                            <el-col :span="5">
                                <el-form-item prop="end_time">
                                    <el-date-picker v-model="form.end_time" type="date" placeholder="选择日期" :picker-options="pickerOptions1">
                                    </el-date-picker>
                                </el-form-item>
                            </el-col>
                        </el-form-item>
                        <el-form-item class="btn-options">
                            <el-button type="primary" @click="queryClick">查询</el-button>
                            <el-button type="danger" @click="resetForm('form')">重置</el-button>
                        </el-form-item>
                    </el-form>
                </el-col>
            </el-row>
        </div>
        <div class="table_container">
            <el-table :data="tableData" style="width: 100%">
                <el-table-column prop="id" label="序列">
                </el-table-column>
                <el-table-column prop="disaster_type" label="灾害类型">
                </el-table-column>
                <el-table-column prop="start_time" label="灾害触发时间">
                </el-table-column>
                <el-table-column prop="push_time" label="公告发布时间">
                </el-table-column>
                <el-table-column prop="status" label="状态">
                </el-table-column>
                <el-table-column prop="" label="操作" inline-template>
                    <span>
                        <el-button type="text">查看编辑</el-button>
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
import { disaster } from '@/api/getData'
export default {
    data() {
        return {
            tableData: [],
            currentRow: null,
            offset: 0,
            limit: 20,
            count: 0,
            currentPage: 1,
            value1: '',
            value2: '',
            form: {
                start_time: '',
                end_time: '',
            },
            rules: {
                start_time: [
                    { type: 'date', required: true, message: '请选择触发开始时间', trigger: 'change' },
                ],
                end_time: [
                    { type: 'date', required: true, message: '请选择触发结束时间', trigger: 'change' }
                ],
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
                const res = await disaster();
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
            this.offset = (val - 1) * this.limit;
        },
        queryClick() {
            // this.params.keyWords = this.validateForm.keyWords;
            // console.log(this.validateForm.keyWords);
            // console.log(this.params);

            // this.getMemberRecode();
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        },
    },
}

</script>
<style lang="less">
@import '../style/mixin';


.header-wrap .type-option {
    height: 35px;
    line-height: 35px;
}

</style>
