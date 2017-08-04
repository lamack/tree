<template>
    <div class="fillcontain">
        <div class="header-wrap bb">
            <el-form :model="validateForm" ref="validateForm" label-width="60px" class="demo-ruleForm" label-position="left">
                <el-row :gutter="10">
                    <el-col :span="5" class="type-option">
                        <el-form-item label="区域" prop="areaValue">
                            <el-select v-model="validateForm.areaValue" placeholder="请选择" @change="handleAreaValue">
                                <el-option v-for="item in validateForm.areaOptions" :key="item.value" :label="item.label" :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="5" class="type-option">
                        <el-form-item label="企业" prop="companyValue">
                            <el-select v-model="validateForm.companyValue" placeholder="请选择" @change="handleCompanyValue">
                                <el-option v-for="item in validateForm.companyOptions" :key="item.value" :label="item.label" :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="5" class="type-option">
                        <el-form-item label="班组" prop="classValue">
                            <el-select v-model="validateForm.classValue" placeholder="请选择" @change="handleClassValue">
                                <el-option v-for="item in validateForm.classOptions" :key="item.value" :label="item.label" :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="5" class="type-option">
                        <el-form-item label="关键字" prop="keyWords">
                            <el-input v-model="validateForm.keyWords" class="input-b3" placeholder="请输入关键字搜索"></el-input>
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
            <el-table :data="tableData" style="width: 100%" header-align="center">
                <el-table-column prop="id" label="会员ID" align="center">
                </el-table-column>
                <el-table-column prop="username" label="会员名称">
                </el-table-column>
                <el-table-column prop="area" label="所在区域">
                </el-table-column>
                <el-table-column prop="company" label="所在企业">
                </el-table-column>
                <el-table-column prop="class" label="所在班组">
                </el-table-column>
                <el-table-column prop="mileage" label="当前里程数">
                </el-table-column>
                <el-table-column prop="green" label="当前绿值">
                </el-table-column>
                <el-table-column prop="share" label="当前享币">
                </el-table-column>
                <el-table-column prop="trees" label="树苗总数">
                </el-table-column>
                <el-table-column prop="" label="操作" inline-template>
                    <span>
                        <el-button type="text" size="small">查看详情</el-button>
                        <el-button type="text" size="small">查询记录</el-button>
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
import { memberList, memberRecode, memberInfo } from '@/api/getData'
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
                areaValue: '',
                companyValue: '',
                classValue: '',
                keyWords: '',
                areaOptions: [{
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
                companyOptions: [{
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
                classOptions: [{
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

        }
    },
    created() {
        this.initData();
    },
    methods: {
        async initData() {
            try {
                const responseData = await memberList();
                if (responseData.code == 1) {
                    this.tableData = responseData.data;
                } else {
                    throw new Error('获取数据失败');
                }
            } catch (err) {
                console.log('获取数据失败', err);
            }
        },
        async getMemberRecode() {
            try {

                const responseData = await memberRecode(this.params);
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
            this.getAdmin()
        },
        handleAreaValue(value) {
            console.log(value);
            let obj = {};
            obj = this.validateForm.areaOptions.find((item) => {
                return item.value === value;
            });
            this.params.area = value;
            console.log(obj.label);
        },
        handleCompanyValue(value) {
            console.log(value);
            let obj = {};
            obj = this.validateForm.companyOptions.find((item) => {
                return item.value === value;
            });
            this.params.company = value;
            console.log(obj.label);
        },
        handleClassValue(value) {
            console.log(value);
            let obj = {};
            obj = this.validateForm.classOptions.find((item) => {
                return item.value === value;
            });
            this.params.class = value;
            console.log(obj.label);
        },
        queryClick() {
            this.params.keyWords = this.validateForm.keyWords;
            console.log(this.validateForm.keyWords);
            console.log(this.params);

            this.getMemberRecode();
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
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
