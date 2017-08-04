<template>
    <div class="fillcontain">
	    <div class="go-back bb">
            <el-button type="primary">返回</el-button>
        </div>
        <div class="table_container bb">
        <div class="sub-title">为 超级管理员 分配权限</div>
            <el-table :data="tableData" style="width: 100%">
                <el-table-column prop="menu" label="菜单">
	                <template  scope="scope">
	                	<el-checkbox v-model="checked" checked>scope.row.menu</el-checkbox>
	                </template>
                </el-table-column>
                <el-table-column prop="menu" label="子菜单">
                	<template  scope="scope">
	                	<el-checkbox v-model="checked" checked>scope.row.menu</el-checkbox>
	                </template>
                </el-table-column>
            </el-table>
        </div>
        <el-row class="btn-options">
            <el-button type="primary" @click="saveClick">保存</el-button>
        </el-row>
    </div>
</template>

<script>
    import {userRole} from '@/api/getData'
    export default {
        data(){
            return {
                tableData: [],
            }
        },
        created(){
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
                this.offset = (val - 1)*this.limit;
            },
            saveClick() {

            }
            
        },
    }
</script>

<style lang="less">
    @import '../style/mixin';
      .btn-options {
        padding: 20px 20px;
    }
    </style>


