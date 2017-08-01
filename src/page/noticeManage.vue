<template>
    <div class="fillcontain">
        <div class="go-back bt">
            <el-button type="primary" size="small">返回</el-button>
        </div>
        <div class="header-wrap bt">
            <el-form :model="validateForm" ref="validateForm" class="demo-ruleForm" label-position="left">
                <el-row :gutter="10">
                    <el-col :span="5" class="type-option">
                        <el-form-item label="公告类型" prop="typeValue" label-width="80px">
                            <el-select v-model="validateForm.typeValue" placeholder="请选择" @change="handleTypeValue">
                                <el-option v-for="item in validateForm.typeOptions" :key="item.value" :label="item.label" :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12" class="type-option">
                        <el-form-item label="创建时间" prop="companyValue" label-width="80px">
                            <el-date-picker v-model="validateForm.date1" type="date" placeholder="选择日期" :picker-options="pickerOptions0">
                            </el-date-picker>
                            <label>--</label>
                            <el-date-picker v-model="validateForm.date2" type="date" placeholder="选择日期" :picker-options="pickerOptions1">
                            </el-date-picker>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6" class="type-option">
                        <el-form-item label="关键字" prop="keyWords">
                            <el-input v-model="validateForm.keyWords" class="input-b3" placeholder="请输入关键字搜索"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row class="btn-options">
                    <el-form-item>
                        <el-button type="primary" size="small" @click="queryClick">查询</el-button>
                        <el-button type="danger" size="small" @click="resetForm('validateForm')">重置</el-button>
                    </el-form-item>
                </el-row>
            </el-form>
        </div>
        <div class="table_container">
            <el-button type="primary" size="small">新建公告</el-button>
            <el-table :data="tableData" style="width: 100%">
                <el-table-column prop="user_name" label="编号">
                </el-table-column>
                <el-table-column prop="create_time" label="公告类型">
                </el-table-column>
                <el-table-column prop="city" label="标题">
                </el-table-column>
                <el-table-column prop="admin" label="内容预览">
                </el-table-column>
                <el-table-column prop="admin" label="创建时间">
                </el-table-column>
                <el-table-column prop="admin" label="状态">
                </el-table-column>
                <el-table-column prop="" label="操作" inline-template>
                    <span>
                        <el-button type="text" size="small">停用</el-button>
                        <el-button type="text" size="small">查看编辑</el-button>
                        <el-button type="text" size="small">删除</el-button>
                    </span>
                </el-table-column>
            </el-table>
            <div class="Pagination" style="text-align: left;margin-top: 10px;">
                <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-size="20" layout="total, prev, pager, next" :total="count">
                </el-pagination>
            </div>
        </div>
    </div>
</template>
<script>
import headTop from '../components/headTop'
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
        }
    },
    components: {
        headTop,
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
                this.getAdmin();
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
        async getAdmin() {
            try {
                const res = await adminList({ offset: this.offset, limit: this.limit });
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
                } else {
                    throw new Error(res.message)
                }
            } catch (err) {
                console.log('获取数据失败', err);
            }
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
