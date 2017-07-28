<template>
    <div class="fillcontain">
        <div class="go-back bt">
            <el-button type="primary">返回</el-button>
        </div>
        <div class="task-editor-wrap">
            <el-row class="award-setting-wrap bt">
                <el-col class="sub-title">任务设置</el-col>
                <el-col :span="10">
                    <el-form ref="form" :model="form" label-width="140px" class="form-wrap">
                        <el-form-item label="任务描述：">
                            <el-input v-model="form.name"></el-input>
                        </el-form-item>
                        <el-form-item label="任务图片：">
                            <el-upload class="avatar-uploader" action="//jsonplaceholder.typicode.com/posts/" :on-preview="handlePreview" :on-remove="handleRemove" :default-file-list="fileList">
                                <el-button size="small" type="primary">点击上传</el-button>
                                <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
                            </el-upload>
                        </el-form-item>
                        <el-form-item label="奖励类型：">
                            <p class="award-type"><el-checkbox v-model="checked" checked>绿值</el-checkbox><label>奖励数量：</label><el-input v-model="form.desc"></el-input></p>
                            <p class="award-type"><el-checkbox v-model="checked">享币</el-checkbox><label>奖励数量：</label><el-input v-model="form.desc"></el-input></p>
                            <p class="award-type"><el-checkbox v-model="checked">铲子</el-checkbox><label>奖励数量：</label><el-input v-model="form.desc"></el-input></p>
                            <p class="award-type"><el-checkbox v-model="checked">化肥</el-checkbox><label>奖励数量：</label><el-input v-model="form.desc"></el-input></p>
                            <p class="award-type"><el-checkbox v-model="checked">浇水</el-checkbox><label>奖励数量：</label><el-input v-model="form.desc"></el-input></p>
                            <p class="award-type"><el-checkbox v-model="checked">保护盾</el-checkbox><label>奖励数量：</label><el-input v-model="form.desc"></el-input></p>
                            <p class="award-type"><el-checkbox v-model="checked">树苗</el-checkbox><label>奖励数量：</label><el-input v-model="form.desc"></el-input></p>
                        </el-form-item>
                        <el-form-item label="触发条件：">
                            <el-radio-group v-model="form.resource">
                                <el-radio label="默认"></el-radio>
                                <el-radio label="前置任务"></el-radio>
                            </el-radio-group>
                        </el-form-item>
                        <el-form-item label="是否有第三方跳转：">
                            <el-radio-group v-model="form.resource">
                                <el-radio label="无"></el-radio>
                                <el-radio label="有"></el-radio>
                            </el-radio-group>
                        </el-form-item>
                    </el-form>
                </el-col>
            </el-row>
            <el-row class="btn-options">
                <el-button type="primary" @click="onSubmit">保存</el-button>
                <el-button>取消</el-button>
            </el-row>
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

.form-wrap {
    margin: 0 20px;
    padding: 10px 30px;
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
.award-type{
    margin-bottom: 5px;
}
    

</style>
