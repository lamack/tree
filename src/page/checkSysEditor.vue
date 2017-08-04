<template>
    <div class="fillcontain">
	    <div class="go-back bb">
            <el-button type="primary">返回</el-button>
        </div>
        <div class="table_container bb">
            <el-table :data="tableData" style="width: 100%">
                <el-table-column prop="id" label="帐号">
                </el-table-column>
                <el-table-column prop="create_time" label="创建时间">
                </el-table-column>
            </el-table>
            <el-form ref="form" :model="form" label-width="140px" >
                <el-form-item label="角色：">
                    <p class="award-type"><el-radio v-model="checked" checked>超级管理员</el-radio></p>
                    <p class="award-type"><el-radio v-model="checked">客服</el-radio></p>
                    <p class="award-type"><el-radio v-model="checked">运营</el-radio></p>
                </el-form-item>
                <el-form-item class="btn-options">
                  <el-button type="primary" @click="submitForm('form')">保存</el-button>
                  <el-button type="primary" @click="cancelClick">取消</el-button>
              </el-form-item>
            </el-form>

        </div>
    </div>
</template>

<script>
    import {userInfo} from '@/api/getData'
    export default {
        data(){
            return {
                tableData: [],
                currentRow: null,
                offset: 0,
                limit: 20,
                count: 0,
                currentPage: 1,
            }
        },
        created(){
            this.initData();
        },
        methods: {
            async initData(){
                try{
                    const res = await userInfo();
                    if (res.code == '1') {
                        this.tableData = res.data;
                    }else{
                        throw new Error('获取数据失败');
                    }
                }catch(err){
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
        },
    }
</script>

<style lang="less">
    @import '../style/mixin';
</style>


