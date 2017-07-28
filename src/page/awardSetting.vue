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
                                <el-col :span="8">
                                    <el-form ref="form" :model="form" label-width="120px">
                                        <el-form-item label="总抽奖机会：">
                                            <el-radio-group v-model="form.resource">
                                                <el-radio label="不限"></el-radio>
                                                <el-radio label="限制"></el-radio>
                                            </el-radio-group>
                                        </el-form-item>
                                        <el-form-item label="每日抽奖机会：">
                                            <label>每人每日有
                                                <el-input v-model="form.desc"></el-input>次抽奖机会</label>
                                        </el-form-item>
                                    </el-form>
                                </el-col>
                            </el-row>
                            <el-row class="award-setting-wrap bt">
                                <el-col class="sub-title">奖项设置</el-col>
                                <el-col :span="10">
                                    <el-form ref="form" :model="form" label-width="120px">
                                        <el-form-item label="奖品名称：">
                                            <el-input v-model="form.name"></el-input>
                                        </el-form-item>
                                        <el-form-item label="奖品数量：">
                                            <el-input v-model="form.desc"></el-input>
                                        </el-form-item>
                                        <el-form-item label="奖品图片：">
                                            <el-upload class="avatar-uploader" action="//jsonplaceholder.typicode.com/posts/" :on-preview="handlePreview" :on-remove="handleRemove" :default-file-list="fileList">
                                                <el-button size="small" type="primary">点击上传</el-button>
                                                <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
                                            </el-upload>
                                        </el-form-item>
                                        <el-form-item label="奖品概率：">
                                            <el-input v-model="form.desc"></el-input>
                                        </el-form-item>
                                        <el-form-item label="兑奖方式：">
                                            <el-radio-group v-model="form.resource">
                                                <el-radio label="线下兑奖"></el-radio>
                                                <el-radio label="网页兑奖"></el-radio>
                                            </el-radio-group>
                                        </el-form-item>
                                        <el-form-item label="操作提示：">
                                            <el-input v-model="form.desc"></el-input>
                                        </el-form-item>
                                        <el-form-item label="兑奖地址：">
                                            <el-input v-model="form.desc"></el-input>
                                        </el-form-item>
                                        <el-form-item label="兑奖日期：">
                                            <el-radio-group v-model="form.resource">
                                                <el-radio label="固定日期"></el-radio>
                                                <el-radio label="固定时长"></el-radio>
                                            </el-radio-group>
                                        </el-form-item>
                                        <el-form-item label="生成券号：">
                                            <el-radio-group v-model="form.resource">
                                                <el-radio label="系统生成"></el-radio>
                                                <el-radio label="手动导入"></el-radio>
                                            </el-radio-group>
                                        </el-form-item>
                                        <el-form-item label="可用时段：">
                                            <el-radio-group v-model="form.resource">
                                                <el-radio label="全部时段"></el-radio>
                                                <el-radio label="部分时段"></el-radio>
                                            </el-radio-group>
                                        </el-form-item>
                                        <el-form-item label="客服电话：">
                                            <el-input v-model="form.desc"></el-input>
                                        </el-form-item>
                                        <el-form-item label="兑奖须知：">
                                            <el-input type="textarea" v-model="form.desc"></el-input>
                                        </el-form-item>
                                    </el-form>
                                </el-col>
                            </el-row>
                            <el-row class="btn-options">
                                <el-button type="primary" @click="onSubmit">保存</el-button>
                                <el-button>取消</el-button>
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
                                    <el-form ref="form" :model="form" label-width="120px">
                                        <el-form-item label="抽奖数量：">
                                            <label>每棵树苗成熟后都将结出
                                                <el-input v-model="form.desc"></el-input>颗幸运抽奖果实</label>
                                        </el-form-item>
                                    </el-form>
                                </el-col>
                            </el-row>
                            <el-row class="award-setting-wrap bt">
                                <el-col class="sub-title">奖项设置</el-col>
                                <el-col :span="10">
                                    <el-form ref="form" :model="form" label-width="120px">
                                        <el-form-item label="奖品名称：">
                                            <el-input v-model="form.name"></el-input>
                                        </el-form-item>
                                        <el-form-item label="奖品数量：">
                                            <el-input v-model="form.desc"></el-input>
                                        </el-form-item>
                                        <el-form-item label="奖品图片：">
                                            <el-upload class="avatar-uploader" action="//jsonplaceholder.typicode.com/posts/" :on-preview="handlePreview" :on-remove="handleRemove" :default-file-list="fileList">
                                                <el-button size="small" type="primary">点击上传</el-button>
                                                <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
                                            </el-upload>
                                        </el-form-item>
                                        <el-form-item label="奖品概率：">
                                            <el-input v-model="form.desc"></el-input>
                                        </el-form-item>
                                        <el-form-item label="兑奖方式：">
                                            <el-radio-group v-model="form.resource">
                                                <el-radio label="线下兑奖"></el-radio>
                                                <el-radio label="网页兑奖"></el-radio>
                                            </el-radio-group>
                                        </el-form-item>
                                        <el-form-item label="操作提示：">
                                            <el-input v-model="form.desc"></el-input>
                                        </el-form-item>
                                        <el-form-item label="兑奖地址：">
                                            <el-input v-model="form.desc"></el-input>
                                        </el-form-item>
                                        <el-form-item label="兑奖日期：">
                                            <el-radio-group v-model="form.resource">
                                                <el-radio label="固定日期"></el-radio>
                                                <el-radio label="固定时长"></el-radio>
                                            </el-radio-group>
                                        </el-form-item>
                                        <el-form-item label="生成券号：">
                                            <el-radio-group v-model="form.resource">
                                                <el-radio label="系统生成"></el-radio>
                                                <el-radio label="手动导入"></el-radio>
                                            </el-radio-group>
                                        </el-form-item>
                                        <el-form-item label="可用时段：">
                                            <el-radio-group v-model="form.resource">
                                                <el-radio label="全部时段"></el-radio>
                                                <el-radio label="部分时段"></el-radio>
                                            </el-radio-group>
                                        </el-form-item>
                                        <el-form-item label="客服电话：">
                                            <el-input v-model="form.desc"></el-input>
                                        </el-form-item>
                                        <el-form-item label="兑奖须知：">
                                            <el-input type="textarea" v-model="form.desc"></el-input>
                                        </el-form-item>
                                    </el-form>
                                </el-col>
                            </el-row>
                            <el-row class="btn-options">
                                <el-button type="primary" @click="onSubmit">保存</el-button>
                                <el-button>取消</el-button>
                            </el-row>
                        </div>
                    </template>
                </el-tab-pane>
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

.form-wrap {
    margin: 0 20px;
    padding: 30px 50px;
}

.btn-options {
    padding: 20px 60px;
}

.chou-award-wrap .el-input {
    width: 40px;
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
