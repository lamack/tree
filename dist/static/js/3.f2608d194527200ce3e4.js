webpackJsonp([3],{214:function(a,e,t){t(465);var n=t(50)(t(322),t(501),"data-v-546a600f",null);a.exports=n.exports},322:function(a,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{fileList:[{name:"food.jpeg",url:"https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"},{name:"food2.jpeg",url:"https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"}],form:{name:"",region:"",date1:"",date2:"",delivery:!1,type:[],resource:"",desc:""}}},methods:{handleRemove:function(a,e){console.log(a,e)},handlePreview:function(a){console.log(a)},onSubmit:function(){console.log("submit!")}}}},348:function(a,e,t){e=a.exports=t(183)(!0),e.push([a.i,".allcover[data-v-546a600f]{position:absolute;top:0;right:0}.ctt[data-v-546a600f]{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.tb[data-v-546a600f]{position:absolute;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.lr[data-v-546a600f]{position:absolute;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}.bt[data-v-546a600f]{border-bottom:1px solid #dfe6ec}.input-b1[data-v-546a600f]{width:60px;margin:0 5px;display:inline-block}.input-b2[data-v-546a600f]{width:120px;margin:0 5px;display:inline-block}.input-b3[data-v-546a600f]{width:180px;margin:0 5px;display:inline-block}.input-b4[data-v-546a600f]{width:240px;margin:0 5px;display:inline-block}.go-back[data-v-546a600f]{margin:0 20px;padding:10px 0}.table_container[data-v-546a600f]{padding:20px}.form-wrap[data-v-546a600f]{margin:0 20px;padding:10px 30px}.btn-options[data-v-546a600f]{padding:20px 60px}.task-editor-wrap .el-input[data-v-546a600f]{display:inline-block;width:180px}.el-form-item label[data-v-546a600f]{width:120px}.sub-title[data-v-546a600f]{font-size:22px;margin:20px}.award-type[data-v-546a600f]{margin-bottom:5px}","",{version:3,sources:["/data/http/trees/src/page/taskEditor.vue"],names:[],mappings:"AACA,2BACE,kBAAmB,AACnB,MAAO,AACP,OAAS,CACV,AACD,sBACE,kBAAmB,AACnB,QAAS,AACT,SAAU,AACV,uCAAyC,AACjC,8BAAiC,CAC1C,AACD,qBACE,kBAAmB,AACnB,QAAS,AACT,mCAAoC,AAC5B,0BAA4B,CACrC,AACD,qBACE,kBAAmB,AACnB,SAAU,AACV,mCAAoC,AAC5B,0BAA4B,CACrC,AACD,qBACE,+BAAiC,CAClC,AACD,2BACE,WAAY,AACZ,aAAc,AACd,oBAAsB,CACvB,AACD,2BACE,YAAa,AACb,aAAc,AACd,oBAAsB,CACvB,AACD,2BACE,YAAa,AACb,aAAc,AACd,oBAAsB,CACvB,AACD,2BACE,YAAa,AACb,aAAc,AACd,oBAAsB,CACvB,AACD,0BACE,cAAe,AACf,cAAgB,CACjB,AACD,kCACE,YAAc,CACf,AACD,4BACE,cAAe,AACf,iBAAmB,CACpB,AACD,8BACE,iBAAmB,CACpB,AACD,6CACE,qBAAsB,AACtB,WAAa,CACd,AACD,qCACE,WAAa,CACd,AACD,4BACE,eAAgB,AAChB,WAAa,CACd,AACD,6BACE,iBAAmB,CACpB",file:"taskEditor.vue",sourcesContent:["\n.allcover[data-v-546a600f] {\n  position: absolute;\n  top: 0;\n  right: 0;\n}\n.ctt[data-v-546a600f] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n}\n.tb[data-v-546a600f] {\n  position: absolute;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n}\n.lr[data-v-546a600f] {\n  position: absolute;\n  left: 50%;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n}\n.bt[data-v-546a600f] {\n  border-bottom: 1px solid #dfe6ec;\n}\n.input-b1[data-v-546a600f] {\n  width: 60px;\n  margin: 0 5px;\n  display: inline-block;\n}\n.input-b2[data-v-546a600f] {\n  width: 120px;\n  margin: 0 5px;\n  display: inline-block;\n}\n.input-b3[data-v-546a600f] {\n  width: 180px;\n  margin: 0 5px;\n  display: inline-block;\n}\n.input-b4[data-v-546a600f] {\n  width: 240px;\n  margin: 0 5px;\n  display: inline-block;\n}\n.go-back[data-v-546a600f] {\n  margin: 0 20px;\n  padding: 10px 0;\n}\n.table_container[data-v-546a600f] {\n  padding: 20px;\n}\n.form-wrap[data-v-546a600f] {\n  margin: 0 20px;\n  padding: 10px 30px;\n}\n.btn-options[data-v-546a600f] {\n  padding: 20px 60px;\n}\n.task-editor-wrap .el-input[data-v-546a600f] {\n  display: inline-block;\n  width: 180px;\n}\n.el-form-item label[data-v-546a600f] {\n  width: 120px;\n}\n.sub-title[data-v-546a600f] {\n  font-size: 22px;\n  margin: 20px;\n}\n.award-type[data-v-546a600f] {\n  margin-bottom: 5px;\n}\n"],sourceRoot:""}])},465:function(a,e,t){var n=t(348);"string"==typeof n&&(n=[[a.i,n,""]]),n.locals&&(a.exports=n.locals);t(184)("f9273768",n,!0)},501:function(a,e){a.exports={render:function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{staticClass:"fillcontain"},[t("div",{staticClass:"go-back bt"},[t("el-button",{attrs:{type:"primary"}},[a._v("返回")])],1),a._v(" "),t("div",{staticClass:"task-editor-wrap"},[t("el-row",{staticClass:"award-setting-wrap bt"},[t("el-col",{staticClass:"sub-title"},[a._v("任务设置")]),a._v(" "),t("el-col",{attrs:{span:10}},[t("el-form",{ref:"form",staticClass:"form-wrap",attrs:{model:a.form,"label-width":"140px"}},[t("el-form-item",{attrs:{label:"任务描述："}},[t("el-input",{model:{value:a.form.name,callback:function(e){a.form.name=e},expression:"form.name"}})],1),a._v(" "),t("el-form-item",{attrs:{label:"任务图片："}},[t("el-upload",{staticClass:"avatar-uploader",attrs:{action:"//jsonplaceholder.typicode.com/posts/","on-preview":a.handlePreview,"on-remove":a.handleRemove,"default-file-list":a.fileList}},[t("el-button",{attrs:{size:"small",type:"primary"}},[a._v("点击上传")]),a._v(" "),t("div",{staticClass:"el-upload__tip",slot:"tip"},[a._v("只能上传jpg/png文件，且不超过500kb")])],1)],1),a._v(" "),t("el-form-item",{attrs:{label:"奖励类型："}},[t("p",{staticClass:"award-type"},[t("el-checkbox",{attrs:{checked:""},model:{value:a.checked,callback:function(e){a.checked=e},expression:"checked"}},[a._v("绿值")]),t("label",[a._v("奖励数量：")]),t("el-input",{model:{value:a.form.desc,callback:function(e){a.form.desc=e},expression:"form.desc"}})],1),a._v(" "),t("p",{staticClass:"award-type"},[t("el-checkbox",{model:{value:a.checked,callback:function(e){a.checked=e},expression:"checked"}},[a._v("享币")]),t("label",[a._v("奖励数量：")]),t("el-input",{model:{value:a.form.desc,callback:function(e){a.form.desc=e},expression:"form.desc"}})],1),a._v(" "),t("p",{staticClass:"award-type"},[t("el-checkbox",{model:{value:a.checked,callback:function(e){a.checked=e},expression:"checked"}},[a._v("铲子")]),t("label",[a._v("奖励数量：")]),t("el-input",{model:{value:a.form.desc,callback:function(e){a.form.desc=e},expression:"form.desc"}})],1),a._v(" "),t("p",{staticClass:"award-type"},[t("el-checkbox",{model:{value:a.checked,callback:function(e){a.checked=e},expression:"checked"}},[a._v("化肥")]),t("label",[a._v("奖励数量：")]),t("el-input",{model:{value:a.form.desc,callback:function(e){a.form.desc=e},expression:"form.desc"}})],1),a._v(" "),t("p",{staticClass:"award-type"},[t("el-checkbox",{model:{value:a.checked,callback:function(e){a.checked=e},expression:"checked"}},[a._v("浇水")]),t("label",[a._v("奖励数量：")]),t("el-input",{model:{value:a.form.desc,callback:function(e){a.form.desc=e},expression:"form.desc"}})],1),a._v(" "),t("p",{staticClass:"award-type"},[t("el-checkbox",{model:{value:a.checked,callback:function(e){a.checked=e},expression:"checked"}},[a._v("保护盾")]),t("label",[a._v("奖励数量：")]),t("el-input",{model:{value:a.form.desc,callback:function(e){a.form.desc=e},expression:"form.desc"}})],1),a._v(" "),t("p",{staticClass:"award-type"},[t("el-checkbox",{model:{value:a.checked,callback:function(e){a.checked=e},expression:"checked"}},[a._v("树苗")]),t("label",[a._v("奖励数量：")]),t("el-input",{model:{value:a.form.desc,callback:function(e){a.form.desc=e},expression:"form.desc"}})],1)]),a._v(" "),t("el-form-item",{attrs:{label:"触发条件："}},[t("el-radio-group",{model:{value:a.form.resource,callback:function(e){a.form.resource=e},expression:"form.resource"}},[t("el-radio",{attrs:{label:"默认"}}),a._v(" "),t("el-radio",{attrs:{label:"前置任务"}})],1)],1),a._v(" "),t("el-form-item",{attrs:{label:"是否有第三方跳转："}},[t("el-radio-group",{model:{value:a.form.resource,callback:function(e){a.form.resource=e},expression:"form.resource"}},[t("el-radio",{attrs:{label:"无"}}),a._v(" "),t("el-radio",{attrs:{label:"有"}})],1)],1)],1)],1)],1),a._v(" "),t("el-row",{staticClass:"btn-options"},[t("el-button",{attrs:{type:"primary"},on:{click:a.onSubmit}},[a._v("保存")]),a._v(" "),t("el-button",[a._v("取消")])],1)],1)])},staticRenderFns:[]}}});
//# sourceMappingURL=3.f2608d194527200ce3e4.js.map