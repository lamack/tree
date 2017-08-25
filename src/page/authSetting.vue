<template>
    <div class="fillcontain">
        <div class="table_container bt">
            <el-table :data="tableData" style="width: 100%">
                <el-table-column prop="id" label="编号">
                </el-table-column>
                <el-table-column prop="role" label="角色">
                </el-table-column>
                <el-table-column prop="" label="操作" inline-template>
                    <span>
                        <el-button type="text" size="small" @click="setAuthClick">设置权限</el-button>
                    </span>
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>
<script>
import { userRole } from '@/api/getData'
export default {
    data() {
        return {
            tableData: [],
            
        }
    },
    created() {
        this.initData();
    },
    methods: {
        async initData() {
            try {
                const res = await userRole();
                if (res.data.status == 'succ') {
                    this.tableData = res.data.data;
                  } else {
                      this.$message({
                          type: 'error',
                          message: res.data.msg
                      });
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
        setAuthClick() {
            this.$router.push('setAuthority');
        }
        
    },
}

</script>
<style lang="less">
@import '../style/mixin';
    

</style>
