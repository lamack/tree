<template>
    <div class="fillcontain">
        <div class="go-back bt">
            <el-button type="primary" @click="goBackClick">返回</el-button>
        </div>
        <div class="scene-settign-wrap bt">
            <el-tabs type="border-card">
                <el-tab-pane label="道具一">
                    <template>
                        <el-row class="award-setting-wrap">
                            <el-col :span="14">
                                <el-form ref="form1" :model="form1" :rules="rules" label-width="140px">
                                    <el-form-item prop="prop_name" label="道具名称：">
                                        <el-input v-model="form1.prop_name" class="input-b4"></el-input>
                                    </el-form-item>
                                    <el-form-item prop="prop_affect" label="道具作用：">
                                        <el-input v-model="form1.prop_affect" class="input-b4"></el-input>
                                    </el-form-item>
                                    <el-form-item prop="convert" label="购买设置：">
                                        <el-input v-model="form1.cash" type="number" class="input-b4"></el-input><span>分享币可以购买一个</span>
                                    </el-form-item>
                                    <el-form-item prop="prop_name" label="兑换设置：">
                                        <el-input v-model="form1.convert" class="input-b4" type="number"></el-input><span>赞可以兑换一个</span>
                                    </el-form-item>
                                    <el-form-item prop="conver_limit" label="兑换限制：">
                                        <span>每天可以兑换</span>
                                        <el-input v-model="form1.conver_limit" class="input-b4" type="number"></el-input><span>次</span>
                                    </el-form-item>
                                    <el-form-item prop="use_limit" label="使用限制：">
                                        <span>每天可以使用</span>
                                        <el-input v-model="form1.use_limit" class="input-b4" type="number"></el-input><span>次</span>
                                    </el-form-item>
                                    <el-form-item prop="green" label="绿值设定：">
                                        <span>每次使用，可以增加</span>
                                        <el-input v-model="form1.green" class="input-b4" type="number"></el-input><span>点绿值</span>
                                    </el-form-item>
                                    <el-form-item class="btn-options">
                                        <el-button type="primary" @click="saveForm('form1')">保存</el-button>
                                        <el-button type="primary">取消</el-button>
                                    </el-form-item>
                                </el-form>
                            </el-col>
                        </el-row>
                    </template>
                </el-tab-pane>
                <el-tab-pane label="道具二">
                    <template>
                        <el-row class="award-setting-wrap">
                            <el-col :span="14">
                                <el-form ref="form2" :model="form2" :rules="rules" label-width="140px">
                                    <el-form-item prop="prop_name" label="道具名称：">
                                        <el-input v-model="form2.prop_name" class="input-b4"></el-input>
                                    </el-form-item>
                                    <el-form-item prop="prop_affect" label="道具作用：">
                                        <el-input v-model="form2.prop_affect" class="input-b4"></el-input>
                                    </el-form-item>
                                    <el-form-item prop="convert" label="购买设置：">
                                        <el-input v-model="form2.cash" type="number" class="input-b4"></el-input><span>分享币可以购买一个</span>
                                    </el-form-item>
                                    <el-form-item prop="prop_name" label="兑换设置：">
                                        <el-input v-model="form2.convert" class="input-b4" type="number"></el-input><span>赞可以兑换一个</span>
                                    </el-form-item>
                                    <el-form-item prop="conver_limit" label="兑换限制：">
                                        <span>每天可以兑换</span>
                                        <el-input v-model="form2.conver_limit" class="input-b4" type="number"></el-input>次
                                    </el-form-item>
                                    <el-form-item prop="use_limit" label="使用限制：">
                                        <span>每天可以使用</span>
                                        <el-input v-model="form2.use_limit" class="input-b4" type="number"></el-input><span>次</span>
                                    </el-form-item>
                                    <el-form-item prop="green" label="绿值设定：">
                                        <span>每次使用，可以增加</span>
                                        <el-input v-model="form2.green" class="input-b4" type="number"></el-input><span>点绿值</span>
                                    </el-form-item>
                                    <el-form-item class="btn-options">
                                        <el-button type="primary" @click="saveForm('form2')">保存</el-button>
                                        <el-button type="primary">取消</el-button>
                                    </el-form-item>
                                </el-form>
                            </el-col>
                        </el-row>
                    </template>
                </el-tab-pane>
                <el-tab-pane label="道具三"><template>
                        <el-row class="award-setting-wrap">
                            <el-col :span="14">
                                <el-form ref="form3" :model="form3" :rules="rules" label-width="140px">
                                    <el-form-item prop="prop_name" label="道具名称：">
                                        <el-input v-model="form3.prop_name" class="input-b4"></el-input>
                                    </el-form-item>
                                    <el-form-item prop="prop_affect" label="道具作用：">
                                        <el-input v-model="form3.prop_affect" class="input-b4"></el-input>
                                    </el-form-item>
                                    <el-form-item prop="convert" label="购买设置：">
                                        <el-input v-model="form3.cash" type="number" class="input-b4"></el-input><span>分享币可以购买一个</span>
                                    </el-form-item>
                                    <el-form-item prop="prop_name" label="兑换设置：">
                                        <el-input v-model="form3.convert" class="input-b4" type="number"></el-input><span>赞可以兑换一个</span>
                                    </el-form-item>
                                    <el-form-item prop="conver_limit" label="兑换限制：">
                                        <span>每天可以兑换</span>
                                        <el-input v-model="form3.conver_limit" class="input-b4" type="number"></el-input><span>次</span>
                                    </el-form-item>
                                    <el-form-item prop="use_limit" label="使用限制：">
                                        <span>每天可以使用</span>
                                        <el-input v-model="form3.use_limit" class="input-b4" type="number"></el-input><span>次</span>
                                    </el-form-item>
                                    <el-form-item prop="green" label="绿值设定：">
                                        <span>每次使用，可以增加</span>
                                        <el-input v-model="form3.green" class="input-b4" type="number"></el-input><span>点绿值</span>
                                    </el-form-item>
                                    <el-form-item class="btn-options">
                                        <el-button type="primary" @click="saveForm('form3')">保存</el-button>
                                        <el-button type="primary">取消</el-button>
                                    </el-form-item>
                                </el-form>
                            </el-col>
                        </el-row>
                    </template></el-tab-pane>
                <el-tab-pane label="道具四"><template>
                        <el-row class="award-setting-wrap">
                            <el-col :span="14">
                                <el-form ref="form4" :model="form4" :rules="rules" label-width="140px">
                                    <el-form-item prop="prop_name" label="道具名称：">
                                        <el-input v-model="form4.prop_name" class="input-b4"></el-input>
                                    </el-form-item>
                                    <el-form-item prop="prop_affect" label="道具作用：">
                                        <el-input v-model="form4.prop_affect" class="input-b4"></el-input>
                                    </el-form-item>
                                    <el-form-item prop="convert" label="购买设置：">
                                        <el-input v-model="form4.cash" type="number" class="input-b4"></el-input>
                                        <span>分享币可以购买一个</span>
                                    </el-form-item>
                                    <el-form-item prop="prop_name" label="兑换设置：">
                                        <el-input v-model="form4.convert" class="input-b4" type="number"></el-input><span>赞可以兑换一个</span>
                                    </el-form-item>
                                    <el-form-item prop="conver_limit" label="兑换限制：">
                                        <span>每天可以兑换</span>
                                        <el-input v-model="form4.conver_limit" class="input-b4" type="number"></el-input><span>次</span>
                                    </el-form-item>
                                    <el-form-item prop="use_limit" label="使用限制：">
                                        <span>每天可以使用</span>
                                        <el-input v-model="form4.use_limit" class="input-b4" type="number"></el-input><span>次</span>
                                    </el-form-item>
                                    <el-form-item prop="green" label="绿值设定：">
                                        <span>每次使用，可以增加</span>
                                        <el-input v-model="form4.green" class="input-b4" type="number"></el-input><span>点绿值</span>
                                    </el-form-item>
                                    <el-form-item class="btn-options">
                                        <el-button type="primary" @click="saveForm('form4')">保存</el-button>
                                        <el-button type="primary">取消</el-button>
                                    </el-form-item>
                                </el-form>
                            </el-col>
                        </el-row>
                    </template></el-tab-pane>
            </el-tabs>
        </div>
        <el-row class="btn-options">
        </el-row>
    </div>
</template>
<script>
import { propSet } from '@/api/getData'
export default {
    data() {
        return {
            form1: {
                prop_name: '',
                prop_affect: '',
                cash: '',
                convert: '',
                conver_limit: '',
                use_limit: '',
                green: ''
            },
            form2: {
                prop_name: '',
                prop_affect: '',
                cash: '',
                convert: '',
                conver_limit: '',
                use_limit: '',
                green: ''
            },
            form3: {
                prop_name: '',
                prop_affect: '',
                cash: '',
                convert: '',
                conver_limit: '',
                use_limit: '',
                green: ''
            },
            form4: {
                prop_name: '',
                prop_affect: '',
                cash: '',
                convert: '',
                conver_limit: '',
                use_limit: '',
                green: ''
            },
            rules: {
                prop_name: [
                    { required: true, message: '请输入道具名称', trigger: 'blur' },
                ],
                prop_affect: [
                    { required: true, message: '请输入道具作用', trigger: 'blur' }
                ],
                cash: [
                    { required: true, message: '请输入购买设置', trigger: 'blur' }
                ],
                convert: [
                    { required: true, message: '请输入兑换设置', trigger: 'blur' }
                ],
                conver_limit: [
                    { required: true, message: '请输入兑换限制', trigger: 'blur' }
                ],
                use_limit: [
                    { required: true, message: '请输入使用限制', trigger: 'blur' }
                ],
                green: [
                    { required: true, message: '请输入绿值设定', trigger: 'blur' }
                ],
            },
            
        }
    },
    methods: {
        async saveForm(formName) {

            const option = formName.split('form')[1];
            var params = {};
            if (option == '1') {
                params = {
                    prop_name: this.form1.prop_name,
                    prop_affect: this.form1.prop_affect,
                    cash: this.form1.cash,
                    convert: this.form1.convert,
                    conver_limit: this.form1.conver_limit,
                    use_limit: this.form1.use_limit,
                    green: this.form1.green,
                    option: option
                }
            } else if(option == '2'){
                params = {
                    prop_name: this.form2.prop_name,
                    prop_affect: this.form2.prop_affect,
                    cash: this.form2.cash,
                    convert: this.form2.convert,
                    conver_limit: this.form2.conver_limit,
                    use_limit: this.form2.use_limit,
                    green: this.form2.green,
                    option: option
                }
            } else if(option == '3'){
                params = {
                    prop_name: this.form3.prop_name,
                    prop_affect: this.form3.prop_affect,
                    cash: this.form3.cash,
                    convert: this.form3.convert,
                    conver_limit: this.form3.conver_limit,
                    use_limit: this.form3.use_limit,
                    green: this.form3.green,
                    option: option
                }
            } else if(option == '4'){
                params = {
                    prop_name: this.form4.prop_name,
                    prop_affect: this.form4.prop_affect,
                    cash: this.form4.cash,
                    convert: this.form4.convert,
                    conver_limit: this.form4.conver_limit,
                    use_limit: this.form4.use_limit,
                    green: this.form4.green,
                    option: option
                }
            }
            this.$refs[formName].validate(async(valid) => {
                if (valid) {
                    const res = await propSet(params);

                    if (res.data.status == 'succ') {
                        this.$message({
                            type: 'success',
                            message: '保存成功'
                        });
                        this.$router.push('sceneManage');
                    } else {
                        this.$message({
                            type: 'error',
                            message: res.data.msg
                        });
                    }
                }
            });
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
    margin: 20px;
}

.award-type {
    margin-bottom: 5px;
}
span{
    color: #48576a;
}
</style>
