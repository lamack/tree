<template>
    <div class="fillcontain">
        <div class="go-back bb">
            <el-button type="primary" @click='goBackClick'>返回</el-button>
        </div>
        <div class="header-wrap bb">
            <el-form :model="validateForm" ref="validateForm" :rules="rules" class="demo-ruleForm" label-position="left">
                <el-row>
                    <el-col :span="5" class="type-option">
                        <el-form-item label="类型" prop="typeValue" label-width="50px">
                            <el-select v-model="validateForm.typeValue" placeholder="请选择" @change="handleTypeValue">
                                <el-option v-for="item in validateForm.typeOptions" :key="item.value" :label="item.label" :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="13" class="type-option">
                        <el-form-item label="时间范围" prop="companyValue" label-width="80px">
                            <el-col :span="5">
                                <el-form-item prop="start_time">
                                    <el-date-picker v-model="validateForm.date1" type="date" placeholder="选择日期" :picker-options="pickerOptions0">
                                    </el-date-picker>
                                </el-form-item>
                            </el-col>
                            <el-col :span="1" style="text-align: right;margin:0 15px;">-</el-col>
                            <el-col :span="5">
                                <el-form-item prop="end_time">
                                    <el-date-picker v-model="validateForm.date2" type="date" placeholder="选择日期" :picker-options="pickerOptions1">
                                    </el-date-picker>
                                </el-form-item>
                            </el-col>
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
                <el-table-column prop="id" label="编号" width="180">
                </el-table-column>
                <el-table-column prop="create_time" label="类型" width="220">
                </el-table-column>
                <el-table-column prop="create_time" label="时间" width="180">
                </el-table-column>
                <el-table-column prop="admin" label="变化">
                </el-table-column>
                <el-table-column prop="introduce" label="说明">
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
import { memberRecode } from '@/api/getData'
export default {
    data() {
        return {
            tableData: [],
            currentRow: null,
            offset: 0,
            limit: 20,
            count: 0,
            currentPage: 1,
            params: {},
            validateForm: {
                typeValue: '',
                typeOptions: [{
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
                date1: '',
                date2: '',
            },
            rules: {
                task_describe: [
                    { required: true, message: '请输入任务描述', trigger: 'blur' },
                ],
                task_pic: [
                    { required: true, message: '请上传任务图片', trigger: 'blur' },
                ],
                reward_condition: [
                    { required: true, message: '请选择触发条件', trigger: 'change' }
                ],
                jump: [
                    { required: true, message: '请选择跳转方式', trigger: 'change' }
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
                const res = await memberRecode();
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
        handleTypeValue() {
            // console.log(value);
            // let obj = {};
            // obj = this.validateForm.areaOptions.find((item) => {
            //     return item.value === value;
            // });
            // this.params.area = value;
            // console.log(obj.label);
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
        goBackClick() {
            this.$router.go(-1);
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

.header-wrap {
    margin: 0px 20px;
    padding-top: 20px;
}

.header-wrap label {
    font-size: 15px;
}

.header-wrap .type-option {
    height: 35px;
    line-height: 35px;
}

.btn-options {
    margin-top: 15px;
}

</style>
