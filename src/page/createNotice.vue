<template>
    <div class="fillcontain">
        <div class="go-back bt">
            <el-button type="primary" @click="goBackClick">返回</el-button>
        </div>
        <el-row class="form-wrap bt">
            <el-col :span="10">
                <el-form ref="form" :model="form" :rules="rules" label-width="80px">
                    <el-form-item prop="adv_type" label="公告类型">
                        <el-select v-model="form.adv_type" placeholder="请选择公告类型">
                            <el-option label="游戏介绍" value="0"></el-option>
                            <el-option label="游戏公告" value="1"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item prop="adv_title" label="公告标题">
                        <el-input v-model="form.adv_title"></el-input>
                    </el-form-item>
                    <el-form-item prop="adv_content" label="公告内容">
                        <el-input type="textarea" v-model="form.adv_content"></el-input>
                    </el-form-item>
                    <el-form-item prop="adv_status" label="公告状态">
                        <el-radio-group v-model="form.adv_status">
                            <el-radio label="0">启用</el-radio>
                            <el-radio label="1">停用</el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item class="btn-options">
                        <el-button type="primary" @click="submitForm('form')">保存</el-button>
                        <el-button type="primary" @click="cancelClick">取消</el-button>
                    </el-form-item>
                </el-form>
            </el-col>
        </el-row>
        <el-row >
            
        </el-row>
    </div>
</template>
<script>
import { advAdd } from '@/api/getData'
export default {
    data() {
        return {
            form: {
                adv_type: '',
                adv_title: '',
                adv_content: '',
                adv_status: '',
            },
            rules: {
                adv_type: [
                    { required: true, message: '请选择公告类型', trigger: 'change' },
                ],
                adv_title: [
                    { required: true, message: '请输入公告标题', trigger: 'blur' }
                ],
                adv_content: [
                    { required: true, message: '请输入公告内容', trigger: 'blur' }
                ],
                adv_status: [
                    { required: true, message: '请选择公告状态', trigger: 'change' }
                ],
            },
        }
    },
    methods: {
         async submitForm(formName) {
            this.$refs[formName].validate(async(valid) => {
                if (valid) {
                    const res = await advAdd({ 
                        adv_type: this.form.adv_type, 
                        adv_title: this.form.adv_title, 
                        adv_content: this.form.adv_content,
                        adv_status: this.form.adv_status
                    })

                    if (res.data.status == 'succ') {
                        this.$message({
                            type: 'success',
                            message: '登录成功'
                        });
                        this.$router.push('noticeManage')
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
<style lang="less">
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
    padding: 20px 50px;
}

.btn-options {
    padding: 0px 10px;
}

</style>
