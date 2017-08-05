<template>
    <div class="fillcontain">
        <div class="go-back bb">
            <el-button type="primary" @click='goBackClick'>返回</el-button>
        </div>
        <div class="award-wrap">
            <el-tabs type="border-card" @tab-click="handleTabClick">
                <el-tab-pane label="分享">
                    <template>
                        <div class="table_container">
                            <el-table :data="shareTableData" style="width: 100%">
                                <el-table-column prop="id" label="会员ID">
                                </el-table-column>
                                <el-table-column prop="username" label="会员名称">
                                </el-table-column>
                                <el-table-column prop="share_time" label="分享时间">
                                </el-table-column>
                                <el-table-column prop="share_channel" label="分享渠道">
                                </el-table-column>
                            </el-table>
                        </div>
                    </template>
                </el-tab-pane>
                <el-tab-pane label="集赞">
                    <template>
                        <div class="table_container">
                            <el-table :data="zanTableData" style="width: 100%">
                                <el-table-column prop="id" label="会员ID">
                                </el-table-column>
                                <el-table-column prop="username" label="奖品名称">
                                </el-table-column>
                                <el-table-column prop="zan_time" label="获赞时间">
                                </el-table-column>
                                <el-table-column prop="zan_change" label="赞数变化">
                                </el-table-column>
                            </el-table>
                        </div>
                    </template>
                </el-tab-pane>
            </el-tabs>
        </div>
    </div>
</template>
<script>
import { share, shareZan } from '@/api/getData'
export default {
    data() {
        return {
            shareTableData: [],
            zanTableData: [],
            count: 0,

        }
    },
    created() {
        this.shareData();
    },
    methods: {
        async shareData() {
            try {
                const res = await share();
                if (res.code == '1') {
                    this.shareTableData = res.data;

                } else {
                    this.$message({
                        type: 'error',
                        message: res.data.msg
                    });
                }
            } catch (err) {
                console.log('获取数据失败', err);
            }
        },
        async shareZanData() {
            try {
                const res = await shareZan();
                if (res.code == '1') {
                    this.zanTableData = res.data;

                } else {
                    this.$message({
                        type: 'error',
                        message: res.data.msg
                    });
                }
            } catch (err) {
                console.log('获取数据失败', err);
            }
        },
        handleTabClick(tab, event) {
            if (tab.index == '1') {
                this.shareZanData();
            }
        },
        goBackClick() {
            this.$router.go(-1);
        }

    },
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
