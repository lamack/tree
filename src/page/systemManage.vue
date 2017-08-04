<template>
    <div class="fillcontain">
        <div class="header-wrap bb">
            <el-row>
                <el-col :span="8">
                    <el-form ref="form" :model="form"  label-width="60px">
                      <el-form-item label="角色" prop="areaValue">
                        <el-select v-model="form.roleValue" placeholder="请选择" @change="handleRoleValue">
                            <el-option v-for="item in form.roleOptions" :key="item.value" :label="item.label" :value="item.value">
                            </el-option>
                        </el-select>
                      </el-form-item>
                      <el-form-item class="btn-options">
                          <el-button type="primary" @click="queryClick">查询</el-button>
                      </el-form-item>
                  </el-form>
                </el-col>
            </el-row>
        </div>
        <div class="table_container">
            <el-table :data="tableData" style="width: 100%">
                <el-table-column prop="id" label="ID">
                </el-table-column>
                <el-table-column prop="username" label="帐号">
                </el-table-column>
                <el-table-column prop="role" label="角色">
                </el-table-column>
                <el-table-column prop="create_time" label="创建时间">
                </el-table-column>
                <el-table-column prop="" label="操作" inline-template>
                    <span>
                        <el-button type="text">查看编辑</el-button>
                        <el-button type="text">修改密码</el-button>
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
    import {user} from '@/api/getData'
    export default {
        data(){
            return {
                tableData: [],
                currentRow: null,
                offset: 0,
                limit: 20,
                count: 0,
                currentPage: 1,
                params: {},
                form: {
                    roleValue: '',
                    roleOptions: [{
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
        created(){
            this.initData();
        },
        methods: {
            async initData(){
                try{
                    const res = await user();
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
            handleRoleValue(value) {
                console.log(value);
                let obj = {};
                obj = this.form.roleOptions.find((item) => {
                    return item.value === value;
                });
                // this.params.area = value;
                console.log(obj.label);
            },
            queryClick() {
                // this.params.keyWords = this.validateForm.keyWords;
                // console.log(this.validateForm.keyWords);
                // console.log(this.params);

                // this.getMemberRecode();
            },
        },
    }
</script>

<style lang="less">
    @import '../style/mixin';
    
</style>


