webpackJsonp([26],{190:function(e,a,t){t(464);var l=t(50)(t(298),t(500),"data-v-54154030",null);e.exports=l.exports},298:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default={data:function(){return{fileList:[{name:"food.jpeg",url:"https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"},{name:"food2.jpeg",url:"https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"}],form:{name:"",region:"",date1:"",date2:"",delivery:!1,type:[],resource:"",desc:""}}},methods:{handleRemove:function(e,a){console.log(e,a)},handlePreview:function(e){console.log(e)},onSubmit:function(){console.log("submit!")}}}},347:function(e,a,t){a=e.exports=t(183)(!0),a.push([e.i,".allcover[data-v-54154030]{position:absolute;top:0;right:0}.ctt[data-v-54154030]{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.tb[data-v-54154030]{position:absolute;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.lr[data-v-54154030]{position:absolute;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}.bt[data-v-54154030]{border-bottom:1px solid #dfe6ec}.input-b1[data-v-54154030]{width:60px;margin:0 5px;display:inline-block}.input-b2[data-v-54154030]{width:120px;margin:0 5px;display:inline-block}.input-b3[data-v-54154030]{width:180px;margin:0 5px;display:inline-block}.input-b4[data-v-54154030]{width:240px;margin:0 5px;display:inline-block}.go-back[data-v-54154030]{margin:0 20px;padding:10px 0}.table_container[data-v-54154030]{padding:20px}.form-wrap[data-v-54154030]{margin:0 20px;padding:30px 50px}.btn-options[data-v-54154030]{padding:20px 60px}.chou-award-wrap .el-input[data-v-54154030]{width:40px;margin:0 5px}.el-form-item label[data-v-54154030]{width:120px}.sub-title[data-v-54154030]{font-size:22px;margin:20px}.award-wrap[data-v-54154030]{margin:0 20px;padding:10px 0}","",{version:3,sources:["/data/http/trees/src/page/awardSetting.vue"],names:[],mappings:"AACA,2BACE,kBAAmB,AACnB,MAAO,AACP,OAAS,CACV,AACD,sBACE,kBAAmB,AACnB,QAAS,AACT,SAAU,AACV,uCAAyC,AACjC,8BAAiC,CAC1C,AACD,qBACE,kBAAmB,AACnB,QAAS,AACT,mCAAoC,AAC5B,0BAA4B,CACrC,AACD,qBACE,kBAAmB,AACnB,SAAU,AACV,mCAAoC,AAC5B,0BAA4B,CACrC,AACD,qBACE,+BAAiC,CAClC,AACD,2BACE,WAAY,AACZ,aAAc,AACd,oBAAsB,CACvB,AACD,2BACE,YAAa,AACb,aAAc,AACd,oBAAsB,CACvB,AACD,2BACE,YAAa,AACb,aAAc,AACd,oBAAsB,CACvB,AACD,2BACE,YAAa,AACb,aAAc,AACd,oBAAsB,CACvB,AACD,0BACE,cAAe,AACf,cAAgB,CACjB,AACD,kCACE,YAAc,CACf,AACD,4BACE,cAAe,AACf,iBAAmB,CACpB,AACD,8BACE,iBAAmB,CACpB,AACD,4CACE,WAAY,AACZ,YAAc,CACf,AACD,qCACE,WAAa,CACd,AACD,4BACE,eAAgB,AAChB,WAAa,CACd,AACD,6BACE,cAAe,AACf,cAAgB,CACjB",file:"awardSetting.vue",sourcesContent:["\n.allcover[data-v-54154030] {\n  position: absolute;\n  top: 0;\n  right: 0;\n}\n.ctt[data-v-54154030] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n}\n.tb[data-v-54154030] {\n  position: absolute;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n}\n.lr[data-v-54154030] {\n  position: absolute;\n  left: 50%;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n}\n.bt[data-v-54154030] {\n  border-bottom: 1px solid #dfe6ec;\n}\n.input-b1[data-v-54154030] {\n  width: 60px;\n  margin: 0 5px;\n  display: inline-block;\n}\n.input-b2[data-v-54154030] {\n  width: 120px;\n  margin: 0 5px;\n  display: inline-block;\n}\n.input-b3[data-v-54154030] {\n  width: 180px;\n  margin: 0 5px;\n  display: inline-block;\n}\n.input-b4[data-v-54154030] {\n  width: 240px;\n  margin: 0 5px;\n  display: inline-block;\n}\n.go-back[data-v-54154030] {\n  margin: 0 20px;\n  padding: 10px 0;\n}\n.table_container[data-v-54154030] {\n  padding: 20px;\n}\n.form-wrap[data-v-54154030] {\n  margin: 0 20px;\n  padding: 30px 50px;\n}\n.btn-options[data-v-54154030] {\n  padding: 20px 60px;\n}\n.chou-award-wrap .el-input[data-v-54154030] {\n  width: 40px;\n  margin: 0 5px;\n}\n.el-form-item label[data-v-54154030] {\n  width: 120px;\n}\n.sub-title[data-v-54154030] {\n  font-size: 22px;\n  margin: 20px;\n}\n.award-wrap[data-v-54154030] {\n  margin: 0 20px;\n  padding: 10px 0;\n}\n"],sourceRoot:""}])},464:function(e,a,t){var l=t(347);"string"==typeof l&&(l=[[e.i,l,""]]),l.locals&&(e.exports=l.locals);t(184)("22f42eae",l,!0)},500:function(e,a){e.exports={render:function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"fillcontain"},[t("div",{staticClass:"go-back bt"},[t("el-button",{attrs:{type:"primary"}},[e._v("返回")])],1),e._v(" "),t("div",{staticClass:"award-wrap"},[t("el-tabs",{attrs:{type:"border-card"}},[t("el-tab-pane",{attrs:{label:"转盘抽奖"}},[[t("div",{staticClass:"turn-award-wrap"},[t("el-row",{staticClass:"chou-award-wrap bt"},[t("el-col",{staticClass:"sub-title"},[e._v("抽奖设置")]),e._v(" "),t("el-col",{attrs:{span:8}},[t("el-form",{ref:"form",attrs:{model:e.form,"label-width":"120px"}},[t("el-form-item",{attrs:{label:"总抽奖机会："}},[t("el-radio-group",{model:{value:e.form.resource,callback:function(a){e.form.resource=a},expression:"form.resource"}},[t("el-radio",{attrs:{label:"不限"}}),e._v(" "),t("el-radio",{attrs:{label:"限制"}})],1)],1),e._v(" "),t("el-form-item",{attrs:{label:"每日抽奖机会："}},[t("label",[e._v("每人每日有\n                                            "),t("el-input",{model:{value:e.form.desc,callback:function(a){e.form.desc=a},expression:"form.desc"}}),e._v("次抽奖机会")],1)])],1)],1)],1),e._v(" "),t("el-row",{staticClass:"award-setting-wrap bt"},[t("el-col",{staticClass:"sub-title"},[e._v("奖项设置")]),e._v(" "),t("el-col",{attrs:{span:10}},[t("el-form",{ref:"form",attrs:{model:e.form,"label-width":"120px"}},[t("el-form-item",{attrs:{label:"奖品名称："}},[t("el-input",{model:{value:e.form.name,callback:function(a){e.form.name=a},expression:"form.name"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"奖品数量："}},[t("el-input",{model:{value:e.form.desc,callback:function(a){e.form.desc=a},expression:"form.desc"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"奖品图片："}},[t("el-upload",{staticClass:"avatar-uploader",attrs:{action:"//jsonplaceholder.typicode.com/posts/","on-preview":e.handlePreview,"on-remove":e.handleRemove,"default-file-list":e.fileList}},[t("el-button",{attrs:{size:"small",type:"primary"}},[e._v("点击上传")]),e._v(" "),t("div",{staticClass:"el-upload__tip",slot:"tip"},[e._v("只能上传jpg/png文件，且不超过500kb")])],1)],1),e._v(" "),t("el-form-item",{attrs:{label:"奖品概率："}},[t("el-input",{model:{value:e.form.desc,callback:function(a){e.form.desc=a},expression:"form.desc"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"兑奖方式："}},[t("el-radio-group",{model:{value:e.form.resource,callback:function(a){e.form.resource=a},expression:"form.resource"}},[t("el-radio",{attrs:{label:"线下兑奖"}}),e._v(" "),t("el-radio",{attrs:{label:"网页兑奖"}})],1)],1),e._v(" "),t("el-form-item",{attrs:{label:"操作提示："}},[t("el-input",{model:{value:e.form.desc,callback:function(a){e.form.desc=a},expression:"form.desc"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"兑奖地址："}},[t("el-input",{model:{value:e.form.desc,callback:function(a){e.form.desc=a},expression:"form.desc"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"兑奖日期："}},[t("el-radio-group",{model:{value:e.form.resource,callback:function(a){e.form.resource=a},expression:"form.resource"}},[t("el-radio",{attrs:{label:"固定日期"}}),e._v(" "),t("el-radio",{attrs:{label:"固定时长"}})],1)],1),e._v(" "),t("el-form-item",{attrs:{label:"生成券号："}},[t("el-radio-group",{model:{value:e.form.resource,callback:function(a){e.form.resource=a},expression:"form.resource"}},[t("el-radio",{attrs:{label:"系统生成"}}),e._v(" "),t("el-radio",{attrs:{label:"手动导入"}})],1)],1),e._v(" "),t("el-form-item",{attrs:{label:"可用时段："}},[t("el-radio-group",{model:{value:e.form.resource,callback:function(a){e.form.resource=a},expression:"form.resource"}},[t("el-radio",{attrs:{label:"全部时段"}}),e._v(" "),t("el-radio",{attrs:{label:"部分时段"}})],1)],1),e._v(" "),t("el-form-item",{attrs:{label:"客服电话："}},[t("el-input",{model:{value:e.form.desc,callback:function(a){e.form.desc=a},expression:"form.desc"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"兑奖须知："}},[t("el-input",{attrs:{type:"textarea"},model:{value:e.form.desc,callback:function(a){e.form.desc=a},expression:"form.desc"}})],1)],1)],1)],1),e._v(" "),t("el-row",{staticClass:"btn-options"},[t("el-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("保存")]),e._v(" "),t("el-button",[e._v("取消")])],1)],1)]],2),e._v(" "),t("el-tab-pane",{attrs:{label:"果实抽奖"}},[[t("div",{staticClass:"fruit-award-wrap"},[t("el-row",{staticClass:"chou-award-wrap bt"},[t("el-col",{staticClass:"sub-title"},[e._v("抽奖设置")]),e._v(" "),t("el-col",{attrs:{span:16}},[t("el-form",{ref:"form",attrs:{model:e.form,"label-width":"120px"}},[t("el-form-item",{attrs:{label:"抽奖数量："}},[t("label",[e._v("每棵树苗成熟后都将结出\n                                            "),t("el-input",{model:{value:e.form.desc,callback:function(a){e.form.desc=a},expression:"form.desc"}}),e._v("颗幸运抽奖果实")],1)])],1)],1)],1),e._v(" "),t("el-row",{staticClass:"award-setting-wrap bt"},[t("el-col",{staticClass:"sub-title"},[e._v("奖项设置")]),e._v(" "),t("el-col",{attrs:{span:10}},[t("el-form",{ref:"form",attrs:{model:e.form,"label-width":"120px"}},[t("el-form-item",{attrs:{label:"奖品名称："}},[t("el-input",{model:{value:e.form.name,callback:function(a){e.form.name=a},expression:"form.name"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"奖品数量："}},[t("el-input",{model:{value:e.form.desc,callback:function(a){e.form.desc=a},expression:"form.desc"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"奖品图片："}},[t("el-upload",{staticClass:"avatar-uploader",attrs:{action:"//jsonplaceholder.typicode.com/posts/","on-preview":e.handlePreview,"on-remove":e.handleRemove,"default-file-list":e.fileList}},[t("el-button",{attrs:{size:"small",type:"primary"}},[e._v("点击上传")]),e._v(" "),t("div",{staticClass:"el-upload__tip",slot:"tip"},[e._v("只能上传jpg/png文件，且不超过500kb")])],1)],1),e._v(" "),t("el-form-item",{attrs:{label:"奖品概率："}},[t("el-input",{model:{value:e.form.desc,callback:function(a){e.form.desc=a},expression:"form.desc"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"兑奖方式："}},[t("el-radio-group",{model:{value:e.form.resource,callback:function(a){e.form.resource=a},expression:"form.resource"}},[t("el-radio",{attrs:{label:"线下兑奖"}}),e._v(" "),t("el-radio",{attrs:{label:"网页兑奖"}})],1)],1),e._v(" "),t("el-form-item",{attrs:{label:"操作提示："}},[t("el-input",{model:{value:e.form.desc,callback:function(a){e.form.desc=a},expression:"form.desc"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"兑奖地址："}},[t("el-input",{model:{value:e.form.desc,callback:function(a){e.form.desc=a},expression:"form.desc"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"兑奖日期："}},[t("el-radio-group",{model:{value:e.form.resource,callback:function(a){e.form.resource=a},expression:"form.resource"}},[t("el-radio",{attrs:{label:"固定日期"}}),e._v(" "),t("el-radio",{attrs:{label:"固定时长"}})],1)],1),e._v(" "),t("el-form-item",{attrs:{label:"生成券号："}},[t("el-radio-group",{model:{value:e.form.resource,callback:function(a){e.form.resource=a},expression:"form.resource"}},[t("el-radio",{attrs:{label:"系统生成"}}),e._v(" "),t("el-radio",{attrs:{label:"手动导入"}})],1)],1),e._v(" "),t("el-form-item",{attrs:{label:"可用时段："}},[t("el-radio-group",{model:{value:e.form.resource,callback:function(a){e.form.resource=a},expression:"form.resource"}},[t("el-radio",{attrs:{label:"全部时段"}}),e._v(" "),t("el-radio",{attrs:{label:"部分时段"}})],1)],1),e._v(" "),t("el-form-item",{attrs:{label:"客服电话："}},[t("el-input",{model:{value:e.form.desc,callback:function(a){e.form.desc=a},expression:"form.desc"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"兑奖须知："}},[t("el-input",{attrs:{type:"textarea"},model:{value:e.form.desc,callback:function(a){e.form.desc=a},expression:"form.desc"}})],1)],1)],1)],1),e._v(" "),t("el-row",{staticClass:"btn-options"},[t("el-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("保存")]),e._v(" "),t("el-button",[e._v("取消")])],1)],1)]],2)],1)],1)])},staticRenderFns:[]}}});
//# sourceMappingURL=26.20bdc839aa100f667a8c.js.map