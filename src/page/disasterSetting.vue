<template>
    <div class="fillcontain">
        <div class="scene-settign-wrap bt">
	        <div class="sub-title">自然灾害设置</div>
            <el-tabs type="border-card">
                <el-tab-pane label="台风">
                    <template>
                        <el-row class="award-setting-wrap">
                            <el-col :span="15">
                                <el-form ref="form" :model="form" label-width="140px">
                                    <el-form-item label="请选择触发时间：">
                                        <label>时间范围</label>
                                        <el-date-picker v-model="value1" type="date" placeholder="选择日期" :picker-options="pickerOptions0">
                                        </el-date-picker>
                                        <label>--</label>
                                        <el-date-picker v-model="value2" type="date" placeholder="选择日期" :picker-options="pickerOptions1">
                                        </el-date-picker>
                                    </el-form-item>
                                    <el-form-item label="请输入公告内容：">
                                        <el-input type="textarea" v-model="form.name" class="input-big"></el-input>
                                    </el-form-item>
                                    <el-form-item label="公告发布时间： ">
                                        <label>时间范围</label>
                                        <el-date-picker v-model="value1" type="date" placeholder="选择日期" :picker-options="pickerOptions0">
                                        </el-date-picker>
                                        <label>--</label>
                                        <el-date-picker v-model="value2" type="date" placeholder="选择日期" :picker-options="pickerOptions1">
                                        </el-date-picker>
                                    </el-form-item>
                                </el-form>
                            </el-col>
                        </el-row>
                    </template>
                </el-tab-pane>
                <el-tab-pane label="洪水">配置管理</el-tab-pane>
                <el-tab-pane label="干旱">角色管理</el-tab-pane>
            </el-tabs>
        </div>
    </div>
</template>
<script>
// import { getUserList, getUserCount } from '@/api/getData'
export default {
    data() {
        return {
            fileList: [{ name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100' }, { name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100' }],
            form: {
                name: '',
                region: '',
                date1: '',
                date2: '',
                delivery: false,
                type: [],
                resource: '',
                desc: ''
            }
        }
    },
    methods: {
        handleRemove(file, fileList) {
            console.log(file, fileList);
        },
        handlePreview(file) {
            console.log(file);
        },
        onSubmit() {
            console.log('submit!');
        }
    }
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

.scene-settign-wrap {
    margin: 20px 20px 0;
    padding-bottom: 30px;
}

.btn-options {
    padding: 20px 60px;
}

.task-editor-wrap .el-input {
    display: inline-block;
    width: 180px;
}

.el-form-item label {
    width: 120px;
}

.sub-title {
    font-size: 22px;
    margin: 20px 0;
}

.award-type {
    margin-bottom: 5px;
}

</style>
