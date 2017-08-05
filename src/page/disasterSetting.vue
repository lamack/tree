<template>
    <div class="fillcontain">
        <div class="scene-settign-wrap bb">
            <div class="sub-title">自然灾害设置</div>
            <el-tabs type="border-card" @tab-click="handleTabClick">
                <el-tab-pane label="台风">
                    <template>
                        <el-row class="award-setting-wrap">
                            <el-col :span="15">
                                <el-form ref="typhoonForm" :model="typhoonForm" :rules="rules" label-width="140px">
                                    <el-form-item prop="start_time" label="请选择触发时间：">
                                        <el-col :span="2">时间范围</el-col>
                                        <el-col :span="5">
                                            <el-form-item prop="start_time">
                                                <el-date-picker v-model="typhoonForm.start_time" type="date" placeholder="选择日期">
                                                </el-date-picker>
                                            </el-form-item>
                                        </el-col>
                                        <el-col :span="1" style="text-align: right;margin:0 15px;">-</el-col>
                                        <el-col :span="5">
                                            <el-form-item prop="end_time">
                                                <el-date-picker v-model="typhoonForm.end_time" type="date" placeholder="选择日期">
                                                </el-date-picker>
                                            </el-form-item>
                                        </el-col>
                                    </el-form-item>
                                    <el-form-item prop="push_content" label="请输入公告内容：">
                                        <el-input type="textarea" v-model="typhoonForm.push_content" class="input-big"></el-input>
                                    </el-form-item>
                                    <el-form-item prop="push_begin_time" label="公告发布时间： ">
                                        <el-col :span="2">时间范围</el-col>
                                        <el-col :span="5">
                                            <el-form-item prop="start_time">
                                                <el-date-picker v-model="typhoonForm.push_begin_time" type="date" placeholder="选择日期">
                                                </el-date-picker>
                                            </el-form-item>
                                        </el-col>
                                        <el-col :span="1" style="text-align: right;margin:0 15px;">-</el-col>
                                        <el-col :span="5">
                                            <el-form-item prop="end_time">
                                                <el-date-picker v-model="typhoonForm.push_flish_time" type="date" placeholder="选择日期">
                                                </el-date-picker>
                                            </el-form-item>
                                        </el-col>
                                    </el-form-item>
                                    <el-form-item class="btn-options">
                                        <el-button type="primary" @click="saveForm('typhoonForm')">保存</el-button>
                                        <el-button type="primary">取消</el-button>
                                    </el-form-item>
                                </el-form>
                            </el-col>
                        </el-row>
                    </template>
                </el-tab-pane>
                <el-tab-pane label="洪水">
                    <template>
                        <el-row class="award-setting-wrap">
                            <el-col :span="15">
                                <el-form ref="floodForm" :model="floodForm" :rules="rules" label-width="140px">
                                    <el-form-item prop="start_time" label="请选择触发时间：">
                                        <el-col :span="2">时间范围</el-col>
                                        <el-col :span="5">
                                            <el-form-item prop="start_time">
                                                <el-date-picker v-model="floodForm.start_time" type="date" placeholder="选择日期">
                                                </el-date-picker>
                                            </el-form-item>
                                        </el-col>
                                        <el-col :span="1" style="text-align: right;margin:0 15px;">-</el-col>
                                        <el-col :span="5">
                                            <el-form-item prop="end_time">
                                                <el-date-picker v-model="floodForm.end_time" type="date" placeholder="选择日期">
                                                </el-date-picker>
                                            </el-form-item>
                                        </el-col>
                                    </el-form-item>
                                    <el-form-item prop="push_content" label="请输入公告内容：">
                                        <el-input type="textarea" v-model="floodForm.push_content" class="input-big"></el-input>
                                    </el-form-item>
                                    <el-form-item prop="push_begin_time" label="公告发布时间： ">
                                        <el-col :span="2">时间范围</el-col>
                                        <el-col :span="5">
                                            <el-form-item prop="start_time">
                                                <el-date-picker v-model="floodForm.push_begin_time" type="date" placeholder="选择日期">
                                                </el-date-picker>
                                            </el-form-item>
                                        </el-col>
                                        <el-col :span="1" style="text-align: right;margin:0 15px;">-</el-col>
                                        <el-col :span="5">
                                            <el-form-item prop="end_time">
                                                <el-date-picker v-model="floodForm.push_flish_time" type="date" placeholder="选择日期">
                                                </el-date-picker>
                                            </el-form-item>
                                        </el-col>
                                    </el-form-item>
                                    <el-form-item class="btn-options">
                                        <el-button type="primary" @click="saveForm('floodForm')">保存</el-button>
                                        <el-button type="primary">取消</el-button>
                                    </el-form-item>
                                </el-form>
                            </el-col>
                        </el-row>
                    </template>
                </el-tab-pane>
                <el-tab-pane label="干旱">
                    <template>
                        <el-row class="award-setting-wrap">
                            <el-col :span="15">
                                <el-form ref="dryForm" :model="dryForm" :rules="rules" label-width="140px">
                                    <el-form-item prop="start_time" label="请选择触发时间：">
                                        <el-col :span="2">时间范围</el-col>
                                        <el-col :span="5">
                                            <el-form-item prop="start_time">
                                                <el-date-picker v-model="dryForm.start_time" type="date" placeholder="选择日期">
                                                </el-date-picker>
                                            </el-form-item>
                                        </el-col>
                                        <el-col :span="1" style="text-align: right;margin:0 15px;">-</el-col>
                                        <el-col :span="5">
                                            <el-form-item prop="end_time">
                                                <el-date-picker v-model="dryForm.end_time" type="date" placeholder="选择日期">
                                                </el-date-picker>
                                            </el-form-item>
                                        </el-col>
                                    </el-form-item>
                                    <el-form-item prop="push_content" label="请输入公告内容：">
                                        <el-input type="textarea" v-model="dryForm.push_content" class="input-big"></el-input>
                                    </el-form-item>
                                    <el-form-item prop="push_begin_time" label="公告发布时间： ">
                                        <el-col :span="2">时间范围</el-col>
                                        <el-col :span="5">
                                            <el-form-item prop="start_time">
                                                <el-date-picker v-model="dryForm.push_begin_time" type="date" placeholder="选择日期">
                                                </el-date-picker>
                                            </el-form-item>
                                        </el-col>
                                        <el-col :span="1" style="text-align: right;margin:0 15px;">-</el-col>
                                        <el-col :span="5">
                                            <el-form-item prop="end_time">
                                                <el-date-picker v-model="dryForm.push_flish_time" type="date" placeholder="选择日期">
                                                </el-date-picker>
                                            </el-form-item>
                                        </el-col>
                                    </el-form-item>
                                    <el-form-item class="btn-options">
                                        <el-button type="primary" @click="saveForm('dryForm')">保存</el-button>
                                        <el-button type="primary">取消</el-button>
                                    </el-form-item>
                                </el-form>
                            </el-col>
                        </el-row>
                    </template>
                </el-tab-pane>
            </el-tabs>
        </div>
    </div>
</template>
<script>
import { disasterSet } from '@/api/getData'
export default {
    data() {
        return {
            disaster_type: '0',
            typhoonForm: {
                start_time: '',
                end_time: '',
                push_begin_time: '',
                push_flish_time: '',
                push_content: '',
            },
            floodForm: {
                start_time: '',
                end_time: '',
                push_begin_time: '',
                push_flish_time: '',
                push_content: '',
            },
            dryForm: {
                start_time: '',
                end_time: '',
                push_begin_time: '',
                push_flish_time: '',
                push_content: '',
            },
            rules: {
                start_time: [
                    { type: 'date', required: true, message: '请选择触发开始时间', trigger: 'change' },
                ],
                end_time: [
                    { type: 'date', required: true, message: '请选择触发结束时间', trigger: 'change' }
                ],
                push_begin_time: [
                    { type: 'date', required: true, message: '请选择公告发布时间', trigger: 'change' }
                ],
                push_flish_time: [
                    { type: 'date', required: true, message: '请选择公告结束时间', trigger: 'change' }
                ],
                push_content: [
                    { required: true, message: '请输入公告内容', trigger: 'blur' }
                ],
            },
        }
    },
    methods: {
        async saveForm(formName) {
            console.log(this.disaster_type);
            var params = {};
            if (this.disaster_type == '0') {
                params = {
                    disaster_type: '0',
                    start_time: this.typhoonForm.start_time,
                    end_time: this.typhoonForm.end_time,
                    push_begin_time: this.typhoonForm.push_begin_time,
                    push_flish_time: this.typhoonForm.push_flish_time,
                    push_content: this.typhoonForm.push_content,
                }
            } else if (this.disaster_type == '1') {
                params = {
                    disaster_type: '1',
                    start_time: this.typhoonForm.start_time,
                    end_time: this.typhoonForm.end_time,
                    push_begin_time: this.typhoonForm.push_begin_time,
                    push_flish_time: this.typhoonForm.push_flish_time,
                    push_content: this.typhoonForm.push_content,
                }
            } else if (this.disaster_type == '2') {
                params = {
                    disaster_type: '2',
                    start_time: this.typhoonForm.start_time,
                    end_time: this.typhoonForm.end_time,
                    push_begin_time: this.typhoonForm.push_begin_time,
                    push_flish_time: this.typhoonForm.push_flish_time,
                    push_content: this.typhoonForm.push_content,
                }
            }
            this.$refs[formName].validate(async(valid) => {
                if (valid) {
                    const res = await disasterSet(params);

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
        handleTabClick(tab, event) {
            this.disaster_type = tab.index;
        },
        goBackClick() {}
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
