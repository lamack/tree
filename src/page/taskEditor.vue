<template>
    <div class="fillcontain">
        <div class="go-back bb">
            <el-button type="primary">返回</el-button>
        </div>
        <div class="task-editor-wrap">
            <el-row class="award-setting-wrap">
                <el-col class="sub-title">任务设置</el-col>
                <el-col :span="15">
                    <el-form ref="form" :model="form" :rules="rules" label-width="140px" class="form-wrap">
                        <el-form-item prop="task_describe" label="任务描述：">
                            <el-input v-model="form.task_describe"></el-input>
                        </el-form-item>
                        <el-form-item prop="task_pic" label="任务图片：">
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
                        <el-form-item prop="reward_condition" label="触发条件：">
                            <el-radio-group v-model="form.reward_condition">
                                <el-radio label="0">默认</el-radio>
                                <el-radio label="1">前置任务</el-radio>
                            </el-radio-group>
                        </el-form-item>
                        <el-form-item prop="jump" label="是否有第三方跳转：">
                            <el-radio-group v-model="form.jump">
                                <el-radio label="0">无</el-radio>
                                <el-radio label="1">有</el-radio>
                            </el-radio-group>
                        </el-form-item>
                        <el-form-item class="btn-options">
                            <el-button type="primary" @click="submitForm('form')">保存</el-button>
                            <el-button type="primary" @click="cancelClick">取消</el-button>
                        </el-form-item>
                    </el-form>
                </el-col>
            </el-row>
        </div>
    </div>
</template>
<script>
import { taskSet } from '@/api/getData'
export default {
    data() {
        return {
            fileList: [{ name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100' }, { name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100' }],
            form: {
                task_describe: '',
                task_pic: '',
                reward_condition: '',
                jump: '',
            },
            rules: {
                task_describe: [
                    { required: true, message: '请输入任务描述', trigger: 'blur' },
                ],
                task_pic: [
                    { required: true, message: '请上传任务图片', trigger: 'blur' },
                ],
                reward_condition: [
                    { required: true, message: '请选择触发条件', trigger: 'change' }
                ],
                jump: [
                    { required: true, message: '请选择跳转方式', trigger: 'change' }
                ],
            },
        }
    },
    methods: {
        handleRemove(file, fileList) {
            console.log(file, fileList);
        },
        handlePreview(file) {
            console.log(file);
        },
        async submitForm(formName) {
            this.$refs[formName].validate(async(valid) => {
                if (valid) {
                    const res = await taskSet({ 
                        task_describe: this.form.task_describe, 
                        task_pic: this.form.task_pic, 
                        reward_condition: this.form.reward_condition,
                        jump: this.form.jump,
                    })

                    if (res.data.status == 'succ') {
                        this.$message({
                            type: 'success',
                            message: '设置成功'
                        });
                    } else {
                        this.$message({
                            type: 'error',
                            message: res.data.msg
                        });
                    }
                }
            });
        },
        cancelClick() {
            this.$router.go(-1);
        },
        goBackClick() {
            this.$router.go(-1);
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
