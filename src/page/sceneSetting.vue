<template>
    <div class="fillcontain">
        <div class="go-back bt">
            <el-button type="primary">返回</el-button>
        </div>
        <div class="scene-settign-wrap bt">
            <el-tabs type="border-card">
                <el-tab-pane label="道具一">
                    <template>
                        <el-row class="award-setting-wrap">
                            <el-col :span="10">
                                <el-form ref="form" :model="form" label-width="140px">
                                    <el-form-item label="道具名称：">
                                        <el-input v-model="form.name" class="input-big"></el-input>
                                    </el-form-item>
                                    <el-form-item label="道具作用：">
                                        <el-input v-model="form.name" class="input-big"></el-input>
                                    </el-form-item>
                                    <el-form-item label="购买设置：">
                                        <el-input v-model="form.name" class="input-small"></el-input>分享币可以购买一个
                                    </el-form-item>
                                    <el-form-item label="兑换设置：">
                                        <el-input v-model="form.name" class="input-small"></el-input>赞可以兑换一个
                                    </el-form-item>
                                    <el-form-item label="兑换限制：">
                                        每天可以兑换<el-input v-model="form.name" class="input-small"></el-input>次
                                    </el-form-item>
                                    <el-form-item label="使用限制：">
                                        每天可以使用
                                        <el-input v-model="form.name" class="input-small"></el-input>次
                                    </el-form-item>
                                    <el-form-item label="绿值设定：">
                                        每次使用，可以增加
                                        <el-input v-model="form.name" class="input-small"></el-input>点绿值
                                    </el-form-item>
                                </el-form>
                            </el-col>
                        </el-row>
                    </template>
                </el-tab-pane>
                <el-tab-pane label="道具二">配置管理</el-tab-pane>
                <el-tab-pane label="道具三">角色管理</el-tab-pane>
                <el-tab-pane label="道具四">定时任务补偿</el-tab-pane>
            </el-tabs>
        </div>
        <el-row class="btn-options">
            <el-button type="primary" @click="onSubmit">保存</el-button>
            <el-button>取消</el-button>
        </el-row>
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
.scene-settign-wrap{
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
    margin: 20px;
}

.award-type {
    margin-bottom: 5px;
}

</style>
