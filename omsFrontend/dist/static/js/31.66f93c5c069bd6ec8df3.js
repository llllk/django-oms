webpackJsonp([31],{ZE5Y:function(e,t,o){var s=o("kEXu");"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);o("rjj0")("0559179d",s,!0)},hB7h:function(e,t,o){"use strict";function s(e){o("ZE5Y")}Object.defineProperty(t,"__esModule",{value:!0});var l=o("fZjL"),r=o.n(l),a=o("Dd8w"),n=o.n(a),i=o("iVC1"),u=o("QmSG"),c=o("NYxO"),p={components:{},data:function(){return{route_path:this.$route.path.split("/"),job_id:this.$route.params.job_id,ruleForm:{job:"",env:"",hosts:[],version:"HEAD",deploy_path:"",content:"",action_user:localStorage.getItem("username")},rules:{env:[{required:!0,message:"请输入正确的内容",trigger:"change"}],hosts:[{required:!0,type:"array",message:"请输入正确的内容",trigger:"blur"}],version:[{required:!0,message:"请输入正确的内容",trigger:"blur"}],content:[{required:!0,message:"请输入正确的内容",trigger:"blur"}]},envs:[],deploy_envs:[],hosts:[],versions:[],jobs:{},currentPage:1,listQuery:{limit:u.LIMIT,offset:"",search:""},pagesize:[u.LIMIT,25,50,100],tableData:[],tabletotal:0,DEPLOY_STATUS:{deploy:{text:"发布中",type:"primary",icon:"el-icon-loading"},success:{text:"发布成功",type:"success",icon:"el-icon-success"},failed:{text:"发布失败",type:"danger",icon:"el-icon-error"}},selectId:[],butstatus:!1,jobs_btn_delete_deployjob:!1,showresult:!1,job_results:[]}},computed:n()({},Object(c.b)(["elements","role"])),created:function(){this.jobs_btn_delete_deployjob=this.elements["发布管理-删除发布任务"],this.fetchJobData(),this.fetchDeployJobData()},methods:{fetchJobData:function(){var e=this;Object(i.f)(null,this.job_id).then(function(t){e.jobs=t.data,e.ruleForm.job=e.jobs.name,e.fetchJobenvData(e.jobs.name)})},fetchJobenvData:function(e){var t=this,o={job__name:e};Object(i.e)(o).then(function(e){t.envs=e.data})},selectEnv:function(e){var t=this.envs.filter(function(t){return t.name===e})[0];this.hosts=t.hosts,this.ruleForm.deploy_path=t.path},fetchDeployJobData:function(){var e=this;Object(i.d)(this.listQuery).then(function(t){e.tableData=t.data,e.tabletotal=t.data.length})},handleSizeChange:function(e){this.listQuery.limit=e,this.fetchDeployJobData()},handleCurrentChange:function(e){this.listQuery.offset=(e-1)*u.LIMIT,this.fetchDeployJobData()},submitForm:function(e){var t=this;this.$refs[e].validate(function(o){if(!o)return console.log("error submit!!"),!1;t.ruleForm.hosts=t.ruleForm.hosts.join(),Object(i.g)(t.ruleForm).then(function(e){t.$message({message:"构建成功，系统正在玩命发布中 ...",type:"success"}),t.fetchDeployJobData(),t.resetForm("ruleForm")}).catch(function(o){t.$message.error("构建失败，请检查参数是否正确！"),t.resetForm(e),console.log(o)})})},resetForm:function(e){this.$refs[e].resetFields()},handleSelectionChange:function(e){this.selectId=[];for(var t=0,o=e.length;t<o;t++)this.selectId.push(e[t].id);this.selectId.length>0?this.butstatus=!1:this.butstatus=!0},deleteForm:function(){for(var e=this,t=0,o=this.selectId.length;t<o;t++)Object(i.a)(this.selectId[t]).then(function(o){delete e.selectId[t]});setTimeout(this.fetchDeployJobData,1e3)},showJobResult:function(e){this.showresult=!0;var t=new Function("return "+e)(),o=[];r()(t).map(function(e){o.push({host:e,data:t[e]})}),this.job_results=o}}},d=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"components-container",staticStyle:{height:"100vh"}},[o("el-row",{attrs:{gutter:20}},[o("el-col",{attrs:{span:8}},[o("el-card",[o("div",{attrs:{slot:"header"},slot:"header"},[o("a",{staticClass:"jobname"},[e._v(e._s(e.jobs.name))])]),e._v(" "),o("el-form",{ref:"ruleForm",attrs:{model:e.ruleForm,rules:e.rules,"label-width":"100px"}},[o("el-form-item",{attrs:{label:"发布环境",prop:"env"}},[o("el-select",{attrs:{placeholder:"请选择发布环境"},on:{change:e.selectEnv},model:{value:e.ruleForm.env,callback:function(t){e.$set(e.ruleForm,"env",t)},expression:"ruleForm.env"}},e._l(e.envs,function(e){return o("el-option",{key:e.id,attrs:{value:e.name}})}))],1),e._v(" "),o("el-form-item",{attrs:{label:"发布主机",prop:"hosts"}},[o("el-select",{attrs:{multiple:"",placeholder:"请选择发布主机"},model:{value:e.ruleForm.hosts,callback:function(t){e.$set(e.ruleForm,"hosts",t)},expression:"ruleForm.hosts"}},e._l(e.hosts,function(e){return o("el-option",{key:e.id,attrs:{value:e}})}))],1),e._v(" "),o("el-form-item",{attrs:{label:"代码地址"}},[o("el-input",{attrs:{disabled:""},model:{value:e.jobs.code_url,callback:function(t){e.$set(e.jobs,"code_url",t)},expression:"jobs.code_url"}})],1),e._v(" "),o("el-form-item",{attrs:{label:"发布版本",prop:"version"}},[o("el-input",{model:{value:e.ruleForm.version,callback:function(t){e.$set(e.ruleForm,"version",t)},expression:"ruleForm.version"}}),e._v(" "),o("a",{staticClass:"tips"},[e._v("Tip：HEAD 代表最新版本号，若要发布其他版本，请改为其他版本号")])],1),e._v(" "),o("el-form-item",{attrs:{label:"发布路径",prop:"deploy_path"}},[o("el-input",{attrs:{disabled:""},model:{value:e.ruleForm.deploy_path,callback:function(t){e.$set(e.ruleForm,"deploy_path",t)},expression:"ruleForm.deploy_path"}})],1),e._v(" "),o("el-form-item",{attrs:{label:"更新内容",prop:"content"}},[o("el-input",{attrs:{type:"textarea",autosize:{minRows:5,maxRows:10}},model:{value:e.ruleForm.content,callback:function(t){e.$set(e.ruleForm,"content",t)},expression:"ruleForm.content"}})],1),e._v(" "),o("el-form-item",[o("el-button",{attrs:{type:"primary"},on:{click:function(t){e.submitForm("ruleForm")}}},[e._v("开始构建")])],1)],1)],1)],1),e._v(" "),o("el-col",{attrs:{span:16}},[o("el-card",[o("div",{attrs:{slot:"header"},slot:"header"},[o("a",{staticClass:"jobname"},[e._v("发布记录")]),e._v(" "),o("el-button",{staticStyle:{padding:"3px 0","margin-left":"20px"},attrs:{type:"danger",plain:"",icon:"el-icon-refresh"},on:{click:e.fetchDeployJobData}},[e._v("刷新\n          ")])],1),e._v(" "),o("div",[o("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData},on:{"selection-change":e.handleSelectionChange}},[o("el-table-column",{attrs:{type:"selection"}}),e._v(" "),o("el-table-column",{attrs:{prop:"id",label:"id"}}),e._v(" "),o("el-table-column",{attrs:{prop:"env",label:"发布环境"}}),e._v(" "),o("el-table-column",{attrs:{prop:"version",label:"发布版本"}}),e._v(" "),o("el-table-column",{attrs:{prop:"deploy_status",label:"发布状态",sortable:""},scopedSlots:e._u([{key:"default",fn:function(t){return[o("div",{attrs:{slot:"reference"},slot:"reference"},[o("el-button",{attrs:{plain:"",size:"mini",type:e.DEPLOY_STATUS[t.row.deploy_status].type,icon:e.DEPLOY_STATUS[t.row.deploy_status].icon}},[e._v("\n                    "+e._s(e.DEPLOY_STATUS[t.row.deploy_status].text)+"\n                  ")])],1)]}}])}),e._v(" "),o("el-table-column",{attrs:{prop:"action_user",label:"发布人"}}),e._v(" "),o("el-table-column",{attrs:{prop:"create_time",label:"发布时间",sortable:""},scopedSlots:e._u([{key:"default",fn:function(t){return[o("div",{attrs:{slot:"reference"},slot:"reference"},[e._v("\n                  "+e._s(e._f("formatTime")(t.row.create_time))+"\n                ")])]}}])}),e._v(" "),o("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[o("el-button",{attrs:{type:"success",size:"mini"},on:{click:function(o){e.showJobResult(t.row.result)}}},[e._v("查看结果")])]}}])})],1)],1),e._v(" "),o("div",{staticClass:"table-footer"},[e.jobs_btn_delete_deployjob||"super"===e.role?o("div",{staticClass:"table-button"},[o("el-button",{attrs:{type:"danger",icon:"delete",disabled:e.butstatus},on:{click:e.deleteForm}},[e._v("删除记录")])],1):e._e(),e._v(" "),o("div",{staticClass:"table-pagination"},[o("el-pagination",{attrs:{"current-page":e.currentPage,"page-sizes":e.pagesize,"page-size":e.listQuery.limit,layout:"prev, pager, next, sizes",total:e.tabletotal},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange,"update:currentPage":function(t){e.currentPage=t}}})],1)])])],1)],1),e._v(" "),o("el-dialog",{attrs:{visible:e.showresult},on:{"update:visible":function(t){e.showresult=t}}},[o("div",e._l(e.job_results,function(t){return o("div",{key:t.id,staticClass:"runlog"},[o("p",[e._v(e._s(t.host))]),e._v(" "),o("pre",[e._v(e._s(t.data))])])}))])],1)},h=[],b={render:d,staticRenderFns:h},m=b,f=o("VU/8"),v=s,_=f(p,m,!1,v,null,null);t.default=_.exports},kEXu:function(e,t,o){t=e.exports=o("FZ+f")(!1),t.push([e.i,".jobname{font-weight:600;margin-left:20px}.head-lavel{padding-bottom:50px}.table-button{padding:10px 0;float:left}.table-pagination,.table-search{float:right;padding:10px 0}.runlog{padding:0 20px;background-color:#000;border:1px solid rgba(0,255,0,.41);border-radius:5px;color:#0f0}",""])}});