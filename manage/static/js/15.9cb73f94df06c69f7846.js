webpackJsonp([15],{202:function(t,e,a){a(473);var i=a(50)(a(310),a(509),"data-v-6fbca784",null);t.exports=i.exports},310:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={computed:{defaultActive:function(){return this.$route.path.replace("/","")}}}},356:function(t,e,a){e=t.exports=a(183)(!1),e.push([t.i,".allcover[data-v-6fbca784]{position:absolute;top:0;right:0}.ctt[data-v-6fbca784]{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.tb[data-v-6fbca784]{position:absolute;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.lr[data-v-6fbca784]{position:absolute;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}.bt[data-v-6fbca784]{border-bottom:1px solid #dfe6ec}.input-b1[data-v-6fbca784]{width:60px;margin:0 5px;display:inline-block}.input-b2[data-v-6fbca784]{width:120px;margin:0 5px;display:inline-block}.input-b3[data-v-6fbca784]{width:180px;margin:0 5px;display:inline-block}.input-b4[data-v-6fbca784]{width:240px;margin:0 5px;display:inline-block}.el-submenu a[data-v-6fbca784]{color:#fff;display:block;height:100%;width:100%}.el-submenu a.router-link-active[data-v-6fbca784]{color:#20a0ff}",""])},473:function(t,e,a){var i=a(356);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a(184)("63f8b2e0",i,!0)},509:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"manage_page fillcontain"},[a("el-row",{staticStyle:{height:"100%"}},[a("el-col",{staticStyle:{"min-height":"100%","background-color":"#324057"},attrs:{span:4}},[a("el-menu",{staticStyle:{"min-height":"100%"},attrs:{"default-active":t.defaultActive,theme:"dark",router:""}},[a("el-menu-item",{attrs:{index:"manage"}},[a("i",{staticClass:"el-icon-menu"}),t._v("首页")]),t._v(" "),a("el-submenu",{attrs:{index:"2"}},[a("template",{slot:"title"},[a("router-link",{attrs:{to:"memberManage"}},[a("i",{staticClass:"el-icon-document"}),t._v("会员管理")])],1),t._v(" "),a("el-menu-item",{attrs:{index:"checkMemberEditor"}},[t._v("查看编辑")]),t._v(" "),a("el-menu-item",{attrs:{index:"checkMemberRecord"}},[t._v("查询记录")])],2),t._v(" "),a("el-submenu",{attrs:{index:"3"}},[a("template",{slot:"title"},[a("router-link",{attrs:{to:"noticeManage"}},[a("i",{staticClass:"el-icon-plus"}),t._v("公告管理")])],1),t._v(" "),a("el-menu-item",{attrs:{index:"createNotice"}},[t._v("新建/编辑公告")])],2),t._v(" "),a("el-submenu",{attrs:{index:"4"}},[a("template",{slot:"title"},[a("router-link",{attrs:{to:"quizzesManage"}},[a("i",{staticClass:"el-icon-star-on"}),t._v("竞答管理")])],1),t._v(" "),a("el-menu-item",{attrs:{index:"quizzesSetting"}},[t._v("竞答设置")])],2),t._v(" "),a("el-submenu",{attrs:{index:"5"}},[a("template",{slot:"title"},[a("router-link",{attrs:{to:"awardManage"}},[a("i",{staticClass:"el-icon-edit"}),t._v("抽奖管理")])],1),t._v(" "),a("el-menu-item",{attrs:{index:"awardSetting"}},[t._v("奖品设置")]),t._v(" "),a("el-submenu",{attrs:{index:"5-1"}},[a("template",{slot:"title"},[a("router-link",{attrs:{to:"awardList"}},[t._v("用户获奖列表")])],1),t._v(" "),a("el-menu-item",{attrs:{index:"awardDetail"}},[t._v("用户获奖详情")])],2)],2),t._v(" "),a("el-submenu",{attrs:{index:"6"}},[a("template",{slot:"title"},[a("router-link",{attrs:{to:"taskManage"}},[a("i",{staticClass:"el-icon-setting"}),t._v("任务管理")])],1),t._v(" "),a("el-menu-item",{attrs:{index:"taskEditor"}},[t._v("任务编辑")])],2),t._v(" "),a("el-submenu",{attrs:{index:"7"}},[a("template",{slot:"title"},[a("router-link",{attrs:{to:"sceneManage"}},[a("i",{staticClass:"el-icon-warning"}),t._v("道具管理")])],1),t._v(" "),a("el-menu-item",{attrs:{index:"sceneSetting"}},[t._v("道具设置")])],2),t._v(" "),a("el-submenu",{attrs:{index:"8"}},[a("template",{slot:"title"},[a("router-link",{attrs:{to:"shareManage"}},[a("i",{staticClass:"el-icon-warning"}),t._v("分享管理")])],1),t._v(" "),a("el-menu-item",{attrs:{index:"checkShareDetail"}},[t._v("查看详情")]),t._v(" "),a("el-menu-item",{attrs:{index:"coletFavManage"}},[t._v("集赞管理")]),t._v(" "),a("el-menu-item",{attrs:{index:"plantsExgManage"}},[t._v("绿值互送管理")]),t._v(" "),a("el-menu-item",{attrs:{index:"treeSendManage"}},[t._v("树苗赠送管理")])],2),t._v(" "),a("el-submenu",{attrs:{index:"9"}},[a("template",{slot:"title"},[a("router-link",{attrs:{to:"cultivateManage"}},[a("i",{staticClass:"el-icon-warning"}),t._v("养成管理")])],1),t._v(" "),a("el-menu-item",{attrs:{index:"disasterList"}},[t._v("灾害触发列表")]),t._v(" "),a("el-menu-item",{attrs:{index:"disasterSetting"}},[t._v("自然灾害设置")])],2),t._v(" "),a("el-submenu",{attrs:{index:"10"}},[a("template",{slot:"title"},[a("router-link",{attrs:{to:"systemManage"}},[a("i",{staticClass:"el-icon-warning"}),t._v("系统管理")])],1),t._v(" "),a("el-menu-item",{attrs:{index:"checkSysEditor"}},[t._v("查看编辑")]),t._v(" "),a("el-menu-item",{attrs:{index:"modifyPsd"}},[t._v("修改密码")]),t._v(" "),a("el-menu-item",{attrs:{index:"addBgUser"}},[t._v("添加后台用户")]),t._v(" "),a("el-submenu",{attrs:{index:"10-1"}},[a("template",{slot:"title"},[a("router-link",{attrs:{to:"authSetting"}},[t._v("管理权限设置")])],1),t._v(" "),a("el-menu-item",{attrs:{index:"setAuthority"}},[t._v("设置权限")])],2)],2)],1)],1),t._v(" "),a("el-col",{staticStyle:{height:"100%",overflow:"auto"},attrs:{span:20}},[a("keep-alive",[a("router-view")],1)],1)],1)],1)},staticRenderFns:[]}}});