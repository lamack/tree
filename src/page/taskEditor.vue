<template>
    <div class="fillcontain">
        <div class="go-back bb">
            <el-button type="primary" @click="goBackClick">返回</el-button>
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
                            <el-upload 
                                class="avatar-uploader"
                                action="https://jsonplaceholder.typicode.com/posts/"
                                :show-file-list="false"
                                :on-success="handleImgSuccess"
                                :before-upload="beforeImgUpload">
                                <img v-if="imageUrl" :src="imageUrl" class="avatar">
                                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
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
import { baseUrl,baseImgPath } from '@/config/env'
export default {
    data() {
        return {
            currentPage: '1',
            checked: '',
            imageUrl: '',
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
        handleImgSuccess(res, file) {
            console.log('res');
            console.log(res);
            console.log(file);
            if (res.status == 1) {
                
            }else{
                this.$message.error('上传图片失败！');
            }
        },
        beforeImgUpload(file) {
            //判断类型是不是图片  
            if(!/image\/\w+/.test(file.type)){     
                this.$message.error('请确保文件为图像类型'); 
                return false;   
            }   
            var reader = new FileReader();   
            reader.readAsDataURL(file);   
            reader.onload = function(e){   
                console.log(this.result); //就是base64  
            }   
            const isRightType = (file.type === 'image/jpeg') || (file.type === 'image/png');
            const isLt2M = file.size / 1024 / 1024 < 2;

            if (!isRightType) {
                this.$message.error('上传头像图片只能是 JPG 格式!');
            }
            if (!isLt2M) {
                this.$message.error('上传头像图片大小不能超过 2MB!');
            }
            return isRightType && isLt2M;
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
.task-editor-wrap .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
}
  
  .avatar-uploader .el-upload:hover {
    border-color: #20a0ff;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 88px;
    height: 88px;
    line-height: 88px;
    text-align: center;
  }
  .avatar {
    width: 88px;
    height: 88px;
    display: block;
  }  

</style>
