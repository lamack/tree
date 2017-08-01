<template>
    <div class="fillcontain">
        <div class="go-back bt">
            <el-button type="primary" size="small">返回</el-button>
        </div>
        <div class="table_container bt">
            <div class="sub-title">基本信息</div>
            <el-table :data="tableData" highlight-current-row style="width: 100%" header-align="center">
                <el-table-column prop="id" type="index" width="80" label="会员ID">
                </el-table-column>
                <el-table-column prop="username" label="会员名称" width="140">
                </el-table-column>
                <el-table-column prop="area" label="区域" width="240">
                </el-table-column>
                <el-table-column prop="company" label="所在企业" width="240">
                </el-table-column>
                <el-table-column prop="class" label="所在班组" width="240">
                </el-table-column>
                <el-table-column prop="trees" label="树苗总数" width="120">
                </el-table-column>
                <el-table-column prop="green_max" label="最大绿值" width="120">
                </el-table-column>
                <el-table-column prop="contact" label="联系方式" width="150">
                </el-table-column>
                <el-table-column prop="contact_address" label="联系地址" width="240">
                </el-table-column>
                <el-table-column prop="green" label="当前绿值" width="120">
                </el-table-column>
                <el-table-column prop="share" label="当前享币" width="120">
                </el-table-column>
                <el-table-column prop="mileage" label="当前里程数" width="120">
                </el-table-column>
            </el-table>
        </div>
        <div class="table_container">
            <div class="sub-title">道具</div>
            <el-table :data="propTableData" highlight-current-row style="width: 60%" header-align="center">
                <el-table-column prop="num" label="浇水壶数量" width="150">
                </el-table-column>
                <el-table-column prop="registe_time" label="小铲子数量" width="150">
                </el-table-column>
                <el-table-column prop="username" label="肥料" width="220">
                </el-table-column>
                <el-table-column prop="city" label="保护罩" width="220">
                </el-table-column>
            </el-table>
        </div>
        <div class="table_container">
            <div class="sub-title">树苗1信息</div>
            <el-table :data="treeTableData" highlight-current-row style="width: 60%" header-align="center">
                <el-table-column prop="create_time" type="index" width="220" label="领养时间">
                </el-table-column>
                <el-table-column prop="level" label="当前阶段">
                </el-table-column>
                <el-table-column prop="green" label="拥有绿值">
                </el-table-column>
            </el-table>
        </div>
        <div class="table_container">
            <div class="sub-title">树苗2信息</div>
            <el-table :data="tableData" highlight-current-row style="width: 60%">
                <el-table-column prop="create_time" type="index" width="220" label="领养时间">
                </el-table-column>
                <el-table-column prop="level" label="当前阶段">
                </el-table-column>
                <el-table-column prop="green" label="拥有绿值">
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>
<script>
import { memberInfo } from '@/api/getData'
export default {
    data() {
        return {
            tableData: [],
            propTableData: [],
            treeTableData: [],
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
                const countData = await memberInfo();
                if (countData.status == 1) {
                    this.count = countData.count;
                } else {
                    throw new Error('获取数据失败');
                }
                this.getUsers();
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
            this.getUsers()
        },
        // async getUsers() {
        //     const Users = await getUserList({ offset: this.offset, limit: this.limit });
        //     this.tableData = [];
        //     Users.forEach(item => {
        //         const tableData = {};
        //         tableData.username = item.username;
        //         tableData.registe_time = item.registe_time;
        //         tableData.city = item.city;
        //         this.tableData.push(tableData);
        //     })
        // }
    },
}

</script>
<style lang="less">
@import '../style/mixin';
.table_container {
    margin: 0 20px;
    padding: 20px 20px;
}

.go-back {
    margin: 0 20px;
    padding: 10px 0;
}

.sub-title {
    font-size: 22px;
    margin-bottom: 10px;
}

</style>
