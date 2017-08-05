<template>
    <div class="fillcontain">
        <div class="go-back bb">
            <el-button type="primary" @click="goBackClick">返回</el-button>
        </div>
        <div class="header-wrap bb">
            <el-form :model="validateForm" ref="validateForm" label-width="60px" class="demo-ruleForm" label-position="left">
                <el-row :gutter="10">
                    <el-col :span="5" class="type-option">
                        <el-form-item label="奖品" prop="awardValue">
                            <el-select v-model="validateForm.awardValue" placeholder="请选择" @change="handleAwardValue">
                                <el-option v-for="item in validateForm.awardOptions" :key="item.value" :label="item.label" :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12" class="type-option">
                        <el-form-item label="获奖时间" prop="awardTimeValue" label-width="80px">
                            <el-date-picker v-model="validateForm.date1" type="date" placeholder="选择日期" :picker-options="pickerOptions0">
                            </el-date-picker>
                            <label>--</label>
                            <el-date-picker v-model="validateForm.date2" type="date" placeholder="选择日期" :picker-options="pickerOptions1">
                            </el-date-picker>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row class="btn-options">
                    <el-form-item>
                        <el-button type="primary" @click="queryClick">查询</el-button>
                        <el-button type="danger" @click="resetForm('validateForm')">重置</el-button>
                    </el-form-item>
                </el-row>
            </el-form>
        </div>
        <div class="table_container">
        <el-table :data="tableData" style="width: 100%">
                <el-table-column prop="id" label="会员ID">
                </el-table-column>
                <el-table-column prop="username" label="会员名称">
                </el-table-column>
                <el-table-column prop="reward" label="奖品">
                </el-table-column>
                <el-table-column prop="create_time" label="最近获奖时间">
                </el-table-column>
                <el-table-column prop="status" label="状态">
                </el-table-column>
                <el-table-column prop="reward_code" label="券号">
                </el-table-column>
                <el-table-column prop="cash_way" label="兑奖方式">
                </el-table-column>
                <el-table-column prop="cash_address" label="兑奖地址">
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
import { rewardDetial } from '@/api/getData'
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
            params: {},
            validateForm: {
                awardValue: '',
                keyWords: '',
                awardOptions: [{
                    value: '选项1',
                    label: '黄金糕'
                }, {
                    value: '选项2',
                    label: '双皮奶'
                }, {
                    value: '选项3',
                    label: '蚵仔煎'
                }, {
                    value: '选项4',
                    label: '龙须面'
                }, {
                    value: '选项5',
                    label: '北京烤鸭'
                }],
                
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
                const reponseData = await rewardDetial();
                if (reponseData.code == '1') {
                    this.tableData = reponseData.data;
                } else {
                    throw new Error('获取数据失败');
                }
            } catch (err) {
                console.log('获取数据失败', err);
            }
        },
        async getAwardDetail() {
            try {

                const responseData = await rewardDetial(this.params);
                if (responseData.code == 1) {
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
            this.offset = (val - 1) * this.limit;
        },
        goBackClick() {
            this.$router.go(-1);
        }
        
    },
    queryClick() {

        this.getAwardDetail();
    },
    resetForm(formName) {
        this.$refs[formName].resetFields();
    }
}

</script>
<style lang="less">
@import '../style/mixin';

</style>
