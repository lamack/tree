<template>
    <div class="fillcontain">
        <div class="go-back bt">
            <el-button type="primary" size="small">返回</el-button>
        </div>
        <div class="award-wrap">
            <el-tabs type="border-card">
                <el-tab-pane label="分享">
                    <template>
                        <div class="table_container">
                            <el-table :data="tableData" style="width: 100%">
                                <el-table-column prop="user_name" label="会员ID">
                                </el-table-column>
                                <el-table-column prop="create_time" label="会员名称">
                                </el-table-column>
                                <el-table-column prop="city" label="分享时间">
                                </el-table-column>
                                <el-table-column prop="admin" label="分享渠道">
                                </el-table-column>
                            </el-table>
                        </div>
                    </template>
                </el-tab-pane>
                <el-tab-pane label="集赞">
                    <template>
                        <div class="table_container">
                            <el-table :data="tableData" style="width: 100%">
                                <el-table-column prop="user_name" label="会员ID">
                                </el-table-column>
                                <el-table-column prop="create_time" label="奖品名称">
                                </el-table-column>
                                <el-table-column prop="city" label="获赞时间">
                                </el-table-column>
                                <el-table-column prop="admin" label="赞数变化">
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
import { getUserList, getUserCount } from '@/api/getData'
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
            dropdownText: '全部',
            value1: '',
            value2: '',
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
                this.getAdmin();
            } catch (err) {
                console.log('获取数据失败', err);
            }
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
