<template>
    <div class="fillcontain">
        <div class="go-back bt">
            <el-button type="primary">返回</el-button>
        </div>
        <div class="award-wrap">
            <el-tabs type="border-card">
                <el-tab-pane label="转盘抽奖">
                    <template>
                        <div class="turn-award-wrap">
                            <el-row class="chou-award-wrap bt">
                                <el-col class="sub-title">抽奖设置</el-col>
                                    <el-form ref="chouForm" :model="chouForm" :rules="rules" label-width="125px">
                                        <el-form-item  prop="chances" label="总抽奖机会：">
                                            <el-radio-group v-model="chouForm.chances">
                                                <el-radio label="0">不限</el-radio>
                                                <el-radio label="1">限制</el-radio>
                                            </el-radio-group>
                                        </el-form-item>
                                        <el-form-item  prop="chances_limit" label="每日抽奖机会：">
                                            <span>每人每日有
                                                <el-input v-model="chouForm.chances_limit" type="number" class="input-b1"></el-input>次抽奖机会</span>
                                        </el-form-item>
                                        <el-col class="sub-title">奖项设置</el-col>
                                        <el-form-item  prop="reward" label="奖品名称：">
                                            <el-input v-model="chouForm.reward" class="input-b4"></el-input>
                                        </el-form-item>
                                        <el-form-item  prop="reward_num" label="奖品数量：">
                                            <el-input v-model="chouForm.reward_num" class="input-b4"></el-input>
                                        </el-form-item>
                                        <el-form-item  prop="" label="奖品图片：">
                                            <el-upload class="avatar-uploader" action="//jsonplaceholder.typicode.com/posts/" :on-preview="handlePreview" :on-remove="handleRemove" :default-file-list="fileList">
                                                <el-button type="primary">点击上传</el-button>
                                                <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
                                            </el-upload>
                                        </el-form-item>
                                        <el-form-item  prop="reward_chance" label="奖品概率：">
                                            <el-input v-model="chouForm.reward_chance" class="input-b4"></el-input>
                                        </el-form-item>
                                        <el-form-item  prop="cash_way" label="兑奖方式：">
                                            <el-radio-group v-model="chouForm.cash_way">
                                                <el-radio label="0">线下兑奖</el-radio>
                                                <el-radio label="1">网页兑奖</el-radio>
                                            </el-radio-group>
                                        </el-form-item>
                                        <el-form-item  prop="tips" label="操作提示：">
                                            <el-input v-model="chouForm.tips" class="input-b4"></el-input>
                                        </el-form-item>
                                        <el-form-item  prop="cash_address" label="兑奖地址：">
                                            <el-input v-model="chouForm.cash_address" class="input-b4"></el-input>
                                        </el-form-item>
                                        <el-form-item  prop="cash_date" label="兑奖日期：">
                                            <el-radio-group v-model="chouForm.cash_date">
                                                <el-radio label="0">固定日期</el-radio>
                                                <el-radio label="1">固定时长</el-radio>
                                            </el-radio-group>
                                        </el-form-item>
                                        <el-form-item  prop="reward_code" label="生成券号：">
                                            <el-radio-group v-model="chouForm.reward_code">
                                                <el-radio label="0">系统生成</el-radio>
                                                <el-radio label="1">手动导入</el-radio>
                                            </el-radio-group>
                                        </el-form-item>
                                        <el-form-item  prop="use_date" label="可用时段：">
                                            <el-radio-group v-model="chouForm.use_date">
                                                <el-radio label="0">全部时段</el-radio>
                                                <el-radio label="1">部分时段</el-radio>
                                            </el-radio-group>
                                        </el-form-item>
                                        <el-form-item  prop="service_tel" label="客服电话：">
                                            <el-input v-model="chouForm.service_tel" class="input-b4"></el-input>
                                        </el-form-item>
                                        <el-form-item  prop="reward_rule" label="兑奖须知：">
                                            <el-input type="textarea" v-model="chouForm.reward_rule" class="input-b4"></el-input>
                                        </el-form-item>
                                        <el-form-item class="btn-options">
                                            <el-button type="primary" @click="submitForm('chouForm')">保存</el-button>
                                            <el-button type="primary" @click="cancelClick">取消</el-button>
                                        </el-form-item>
                                    </el-form>
                            </el-row>
                        </div>
                    </template>
                </el-tab-pane>
                <el-tab-pane label="果实抽奖">
                    <template>
                        <div class="fruit-award-wrap">
                            <el-row class="chou-award-wrap bt">
                                <el-col class="sub-title">抽奖设置</el-col>
                                <el-col :span="16">
                                    <el-form ref="fruitForm" :model="fruitForm" :rules="rules" label-width="120px">
                                        <el-form-item label="抽奖数量：">
                                            <label>每棵树苗成熟后都将结出
                                                <el-input v-model="fruitForm.reward_num" type="number" class="input-b1"></el-input>颗幸运抽奖果实</label>
                                        </el-form-item>
                                        <el-col class="sub-title">奖项设置</el-col>
                                        <el-form-item  prop="reward" label="奖品名称：">
                                            <el-input v-model="fruitForm.reward" class="input-b4"></el-input>
                                        </el-form-item>
                                        <el-form-item  prop="reward_num" label="奖品数量：">
                                            <el-input v-model="fruitForm.reward_num" class="input-b4"></el-input>
                                        </el-form-item>
                                        <el-form-item  prop="" label="奖品图片：">
                                            <el-upload class="avatar-uploader" action="//jsonplaceholder.typicode.com/posts/" :on-preview="handlePreview" :on-remove="handleRemove" :default-file-list="fileList">
                                                <el-button type="primary">点击上传</el-button>
                                                <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
                                            </el-upload>
                                        </el-form-item>
                                        <el-form-item  prop="reward_chance" label="奖品概率：">
                                            <el-input v-model="fruitForm.reward_chance" class="input-b4"></el-input>
                                        </el-form-item>
                                        <el-form-item  prop="cash_way" label="兑奖方式：">
                                            <el-radio-group v-model="fruitForm.cash_way">
                                                <el-radio label="0">线下兑奖</el-radio>
                                                <el-radio label="1">网页兑奖</el-radio>
                                            </el-radio-group>
                                        </el-form-item>
                                        <el-form-item  prop="tips" label="操作提示：">
                                            <el-input v-model="fruitForm.tips" class="input-b4"></el-input>
                                        </el-form-item>
                                        <el-form-item  prop="cash_address" label="兑奖地址：">
                                            <el-input v-model="fruitForm.cash_address" class="input-b4"></el-input>
                                        </el-form-item>
                                        <el-form-item  prop="cash_date" label="兑奖日期：">
                                            <el-radio-group v-model="fruitForm.cash_date">
                                                <el-radio label="0">固定日期</el-radio>
                                                <el-radio label="1">固定时长</el-radio>
                                            </el-radio-group>
                                        </el-form-item>
                                        <el-form-item  prop="reward_code" label="生成券号：">
                                            <el-radio-group v-model="fruitForm.reward_code">
                                                <el-radio label="0">系统生成</el-radio>
                                                <el-radio label="1">手动导入</el-radio>
                                            </el-radio-group>
                                        </el-form-item>
                                        <el-form-item  prop="use_date" label="可用时段：">
                                            <el-radio-group v-model="fruitForm.use_date">
                                                <el-radio label="0">全部时段</el-radio>
                                                <el-radio label="1">部分时段</el-radio>
                                            </el-radio-group>
                                        </el-form-item>
                                        <el-form-item  prop="service_tel" label="客服电话：">
                                            <el-input v-model="fruitForm.service_tel" class="input-b4"></el-input>
                                        </el-form-item>
                                        <el-form-item  prop="reward_rule" label="兑奖须知：">
                                            <el-input type="textarea" v-model="fruitForm.reward_rule" class="input-b4"></el-input>
                                        </el-form-item>
                                        <el-form-item class="btn-options">
                                            <el-button type="primary" @click="submitForm('fruitForm')">保存</el-button>
                                            <el-button type="primary" @click="cancelClick">取消</el-button>
                                        </el-form-item>
                                    </el-form>
                                </el-col>
                            </el-row>
                        </div>
                    </template>
                </el-tab-pane>
            </el-tabs>
        </div>
    </div>
</template>
<script>
import { wheelSet,fruitSet } from '@/api/getData'
export default {
    data() {
        return {
            fileList: [{ name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100' }, { name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100' }],
            chouForm: {
                chances:'',// 抽奖机会
                chances_limit:'',//  bool 抽奖限制
                reward:'',//  奖品名称
                reward_num:'',//  奖品数量
                reward_pic:'',//  奖品图片
                reward_chance:'',//  奖品概率
                cash_way:'',//  兑奖方式
                tips:'',//  操作提示
                cash_address:'',//  兑奖地址
                cash_date:'',//  兑奖日期
                reward_code:'',//  生成券号
                use_date:'',//  可用时段
                service_tel:'',//  客服电话
                reward_rule:'',//  兑奖须知
            },
            fruitForm: {
                chances:'',// 抽奖机会
                chances_limit:'',//  bool 抽奖限制
                reward:'',//  奖品名称
                reward_num:'',//  奖品数量
                reward_pic:'',//  奖品图片
                reward_chance:'',//  奖品概率
                cash_way:'',//  兑奖方式
                tips:'',//  操作提示
                cash_address:'',//  兑奖地址
                cash_date:'',//  兑奖日期
                reward_code:'',//  生成券号
                use_date:'',//  可用时段
                service_tel:'',//  客服电话
                reward_rule:'',//  兑奖须知
            },
            rules: {
                chances: [
                    { required: true, message: '请选择抽奖机会', trigger: 'change' },
                ],
                chances_limit: [
                    { required: true, message: '请输入抽奖限制', trigger: 'blur' }
                ],
                reward: [
                    { required: true, message: '请输入奖品名称', trigger: 'blur' }
                ],
                reward_num: [
                    { required: true, message: '请输入奖品数量', trigger: 'blur' }
                ],
                reward_pic: [
                    { required: true, message: '请上传奖品图片', trigger: 'change' }
                ],
                reward_chance: [
                    { required: true, message: '请输入中奖概率', trigger: 'change' }
                ],
                cash_way: [
                    { required: true, message: '请选择兑奖方式', trigger: 'change' }
                ],
                tips: [
                    { required: true, message: '请输入操作提示', trigger: 'blur' }
                ],
                cash_address: [
                    { required: true, message: '请输入兑奖地址', trigger: 'blur' }
                ],
                cash_date: [
                    { required: true, message: '请选择兑奖日期', trigger: 'change' }
                ],
                reward_code: [
                    { required: true, message: '请选择生成券号', trigger: 'change' }
                ],
                use_date: [
                    { required: true, message: '请选择可用时段', trigger: 'change' }
                ],
                service_tel: [
                    { required: true, message: '请输入客服电话', trigger: 'blur' }
                ],
                reward_rule: [
                    { required: true, message: '请输入兑奖须知', trigger: 'blur' }
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

            if (formName == 'chorForm') {
                    this.$refs[formName].validate(async(valid) => {
                if (valid) {
                    const res = await wheelSet({ 
                        id: '0',
                        chances: this.chouForm.chances,
                        chances_limit:this.chouForm.chances_limit,
                        reward:this.chouForm.reward,
                        reward_num:this.chouForm.reward_num,
                        reward_pic:this.chouForm.reward_pic,
                        reward_chance:this.chouForm.reward_chance,
                        cash_way:this.chouForm.cash_way,
                        tips:this.chouForm.tips,
                        cash_address:this.chouForm.cash_address,
                        cash_date:this.chouForm.cash_date,
                        reward_code:this.chouForm.reward_code,
                        use_date:this.chouForm.use_date,
                        service_tel:this.chouForm.service_tel,
                        reward_rule:this.chouForm.reward_rule,
                    })

                    if (res.data.status == 'succ') {
                        this.$message({
                            type: 'success',
                            message: '保存成功'
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
            }else{
                this.$refs[formName].validate(async(valid) => {
                if (valid) {
                    const res = await fruitSet({
                        id: '1',
                        chances: this.fruitForm.chances,
                        chances_limit:this.fruitForm.chances_limit,
                        reward:this.fruitForm.reward,
                        reward_num:this.fruitForm.reward_num,
                        reward_pic:this.fruitForm.reward_pic,
                        reward_chance:this.fruitForm.reward_chance,
                        cash_way:this.fruitForm.cash_way,
                        tips:this.fruitForm.tips,
                        cash_address:this.fruitForm.cash_address,
                        cash_date:this.fruitForm.cash_date,
                        reward_code:this.fruitForm.reward_code,
                        use_date:this.fruitForm.use_date,
                        service_tel:this.fruitForm.service_tel,
                        reward_rule:this.fruitForm.reward_rule,
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
            }
            
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
    padding: 30px 50px;
}

.btn-options {
    padding: 20px 60px;
}

.chou-award-wrap .el-input {
    // width: 40px;
    margin: 0 5px;
}

.el-form-item label {
    width: 120px;
}

.sub-title {
    font-size: 22px;
    margin: 20px;
}

.award-wrap {
    margin: 0 20px;
    padding: 10px 0;
}

</style>
