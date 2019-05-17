YUI.add("moodle-atto_writeup-button",function(e,t){var n="atto_writeup",r={FORM:"atto_formwriteup",SPAN:"atto_writeup",CHECKBOX:"atto_writeup_focus",SPAN1:"atto_writeup1",SPAN2:"atto_writeup2",ERRSPAN:"atto_writeup_error",CORRSPAN:"atto_writeup_correction",CORRTEXT:"atto_writeup_comment",MARKING:"atto_writeup_marking",ALTEXT:"atto_writeup_altext",BASECLASS:"atto_writeup_",SELECT:"atto_writeup_select",TEXTAREA1:"atto_writeup_textarea1",TEXTAREA2:"atto_writeup_textarea2",FULLTEXT:"atto_writeup_fulltext",FOCUS:"atto_writeup_focus_cor",STRIKE:"atto_writeup_strike"},i={SPAN:"."+r.SPAN,SPAN1:"."+r.SPAN1,SPAN1:"."+r.SPAN1,ERRSPAN:"."+r.ERRSPAN,SELECT:"."+r.SELECT,MARKING:"."+r.MARKING,TEXTAREA1:"."+r.TEXTAREA1,TEXTAREA2:"."+r.TEXTAREA2,CHECKBOX:"."+r.CHECKBOX},s={DIALOGUE1:'<form class="atto_form {{CSS.FORM}}"><label for="{{elementid}}_atto_writeup_corrtype">{{get_string "corrtype" component}}</label><select id="{{elementid}}_atto_writeup_corrtype" class="{{CSS.SELECT}}">{{#each corrtypes1}}<option value="{{{abbr}}}">{{{descr}}}</option>{{/each}}</select><input type="checkbox" id="{{elementid}}_atto_writeup_focus" name="{{elementid}}_atto_writeup_focus" value="yes" class="{{CSS.CHECKBOX}}"> <label for="{{elementid}}_atto_writeup_focus">{{get_string "focus" component}}  </label> <label for="{{elementid}}_atto_writeup_marking">{{get_string "marking" component}}  </label> <select id="{{elementid}}_atto_writeup_marking" class="{{CSS.MARKING}}"><option value="serious">{{get_string "serious" component}}</option><option value="normal" selected="selected">{{get_string "normal" component}}</option><option value="minor">{{get_string "minor" component}}</option><option value="positive">{{get_string "positive" component}}</option></select><label for="{{elementid}}_atto_writeup_corrtext">{{get_string "corrtext" component}}</label><textarea class="fullwidth {{CSS.TEXTAREA1}}" type="text" id="{{elementid}}_atto_writeup_corrtext"></textarea><label for="{{elementid}}_atto_writeup_altext">{{get_string "altext" component}}</label><input class="fullwidth {{CSS.TEXTAREA2}}" type="text" id="{{elementid}}_atto_writeup_altext"></input><div class="mdl-align"><br/><button class="submit" type="submit">{{get_string "addcomment" component}}</button></div></form>',DIALOGUE2:'<form class="atto_form {{CSS.FORM}}"><label for="{{elementid}}_atto_writeup_corrtype">{{get_string "corrtype" component}}</label><select id="{{elementid}}_atto_writeup_corrtype" class="{{CSS.SELECT}}">{{#each corrtypes2}}<option value="{{{abbr}}}">{{{descr}}}</option>{{/each}}</select><input type="checkbox" id="{{elementid}}_atto_writeup_focus" name="{{elementid}}_atto_writeup_focus" value="yes" class="{{CSS.CHECKBOX}}"> <label for="{{elementid}}_atto_writeup_focus">{{get_string "focus" component}}  </label> <label for="{{elementid}}_atto_writeup_marking">{{get_string "marking" component}}  </label> <select id="{{elementid}}_atto_writeup_marking" class="{{CSS.MARKING}}"><option value="serious">{{get_string "serious" component}}</option><option value="normal" selected="selected">{{get_string "normal" component}}</option><option value="minor">{{get_string "minor" component}}</option><option value="positive">{{get_string "positive" component}}</option></select><label for="{{elementid}}_atto_writeup_corrtext">{{get_string "corrtext" component}}</label><textarea class="fullwidth {{CSS.TEXTAREA1}}" type="text" id="{{elementid}}_atto_writeup_corrtext"></textarea><label for="{{elementid}}_atto_writeup_altext">{{get_string "altext" component}}</label><input class="fullwidth {{CSS.TEXTAREA2}}" type="text" id="{{elementid}}_atto_writeup_altext"></input><div class="mdl-align"><br/><button class="submit" type="submit">{{get_string "addcomment" component}}</button></div></form>',DIALOGUE3:'<form class="atto_form {{CSS.FORM}}"><label for="{{elementid}}_atto_writeup_corrtype">{{get_string "corrtype" component}}</label><select id="{{elementid}}_atto_writeup_corrtype" class="{{CSS.SELECT}}">{{#each corrtypes3}}<option value="{{{abbr}}}">{{{descr}}}</option>{{/each}}</select><input type="checkbox" id="{{elementid}}_atto_writeup_focus" name="{{elementid}}_atto_writeup_focus" value="yes" class="{{CSS.CHECKBOX}}"> <label for="{{elementid}}_atto_writeup_focus">{{get_string "focus" component}}  </label> <label for="{{elementid}}_atto_writeup_marking">{{get_string "marking" component}}  </label> <select id="{{elementid}}_atto_writeup_marking" class="{{CSS.MARKING}}"><option value="serious">{{get_string "serious" component}}</option><option value="normal" selected="selected">{{get_string "normal" component}}</option><option value="minor">{{get_string "minor" component}}</option><option value="positive">{{get_string "positive" component}}</option></select><label for="{{elementid}}_atto_writeup_corrtext">{{get_string "corrtext" component}}</label><textarea class="fullwidth {{CSS.TEXTAREA1}}" type="text" id="{{elementid}}_atto_writeup_corrtext"></textarea><label for="{{elementid}}_atto_writeup_altext">{{get_string "altext" component}}</label><input class="fullwidth {{CSS.TEXTAREA2}}" type="text" id="{{elementid}}_atto_writeup_altext"></input><div class="mdl-align"><br/><button class="submit" type="submit">{{get_string "addcomment" component}}</button></div></form>',DIALOGUE4:'<form class="atto_form {{CSS.FORM}}"><label for="{{elementid}}_atto_writeup_corrtype">{{get_string "corrtype" component}}</label><select id="{{elementid}}_atto_writeup_corrtype" class="{{CSS.SELECT}}">{{#each corrtypes4}}<option value="{{{abbr}}}">{{{descr}}}</option>{{/each}}</select><input type="checkbox" id="{{elementid}}_atto_writeup_focus" name="{{elementid}}_atto_writeup_focus" value="yes" class="{{CSS.CHECKBOX}}"> <label for="{{elementid}}_atto_writeup_focus">{{get_string "focus" component}}  </label> <label for="{{elementid}}_atto_writeup_marking">{{get_string "marking" component}}  </label> <select id="{{elementid}}_atto_writeup_marking" class="{{CSS.MARKING}}"><option value="serious">{{get_string "serious" component}}</option><option value="normal" selected="selected">{{get_string "normal" component}}</option><option value="minor">{{get_string "minor" component}}</option><option value="positive">{{get_string "positive" component}}</option></select><label for="{{elementid}}_atto_writeup_corrtext">{{get_string "corrtext" component}}</label><textarea class="fullwidth {{CSS.TEXTAREA1}}" type="text" id="{{elementid}}_atto_writeup_corrtext"></textarea><label for="{{elementid}}_atto_writeup_altext">{{get_string "altext" component}}</label><input class="fullwidth {{CSS.TEXTAREA2}}" type="text" id="{{elementid}}_atto_writeup_altext"></input><div class="mdl-align"><br/><button class="submit" type="submit">{{get_string "addcomment" component}}</button></div></form>'
,DIALOGUE5:'<form class="atto_form {{CSS.FORM}}"><label for="{{elementid}}_atto_writeup_corrtype">{{get_string "corrtype" component}}</label><select id="{{elementid}}_atto_writeup_corrtype" class="{{CSS.SELECT}}">{{#each corrtypes5}}<option value="{{{abbr}}}">{{{descr}}}</option>{{/each}}</select><input type="checkbox" id="{{elementid}}_atto_writeup_focus" name="{{elementid}}_atto_writeup_focus" value="yes" class="{{CSS.CHECKBOX}}"> <label for="{{elementid}}_atto_writeup_focus">{{get_string "focus" component}}  </label> <label for="{{elementid}}_atto_writeup_marking">{{get_string "marking" component}}  </label> <select id="{{elementid}}_atto_writeup_marking" class="{{CSS.MARKING}}"><option value="serious">{{get_string "serious" component}}</option><option value="normal" selected="selected">{{get_string "normal" component}}</option><option value="minor">{{get_string "minor" component}}</option><option value="positive">{{get_string "positive" component}}</option></select><label for="{{elementid}}_atto_writeup_corrtext">{{get_string "corrtext" component}}</label><textarea class="fullwidth {{CSS.TEXTAREA1}}" type="text" id="{{elementid}}_atto_writeup_corrtext"></textarea><label for="{{elementid}}_atto_writeup_altext">{{get_string "altext" component}}</label><input class="fullwidth {{CSS.TEXTAREA2}}" type="text" id="{{elementid}}_atto_writeup_altext"></input><div class="mdl-align"><br/><button class="submit" type="submit">{{get_string "addcomment" component}}</button></div></form>',DIALOGUE6:'<form class="atto_form {{CSS.FORM}}"><label for="{{elementid}}_atto_writeup_corrtype">{{get_string "corrtype" component}}</label><select id="{{elementid}}_atto_writeup_corrtype" class="{{CSS.SELECT}}">{{#each corrtypes6}}<option value="{{{abbr}}}">{{{descr}}}</option>{{/each}}</select><input type="checkbox" id="{{elementid}}_atto_writeup_focus" name="{{elementid}}_atto_writeup_focus" value="yes" class="{{CSS.CHECKBOX}}"> <label for="{{elementid}}_atto_writeup_focus">{{get_string "focus" component}}  </label> <label for="{{elementid}}_atto_writeup_marking">{{get_string "marking" component}}  </label> <select id="{{elementid}}_atto_writeup_marking" class="{{CSS.MARKING}}"><option value="serious">{{get_string "serious" component}}</option><option value="normal" selected="selected">{{get_string "normal" component}}</option><option value="minor">{{get_string "minor" component}}</option><option value="positive">{{get_string "positive" component}}</option></select><label for="{{elementid}}_atto_writeup_corrtext">{{get_string "corrtext" component}}</label><textarea class="fullwidth {{CSS.TEXTAREA1}}" type="text" id="{{elementid}}_atto_writeup_corrtext"></textarea><label for="{{elementid}}_atto_writeup_altext">{{get_string "altext" component}}</label><input class="fullwidth {{CSS.TEXTAREA2}}" type="text" id="{{elementid}}_atto_writeup_altext"></input><div class="mdl-align"><br/><button class="submit" type="submit">{{get_string "addcomment" component}}</button></div></form>',FULLTEXT:'<div class="{{CSS.FULLTEXT}}">{{fulltext}}</div>'};e.namespace("M.atto_writeup").Button=e.Base.create("button",e.M.editor_atto.EditorPlugin,[],{_currentSelection:null,_content:null,_isoncorr:null,initializer:function(){tttt=this;var t=[],r=0;e.Array.each(this.get("corrtypes1"),function(e){t.push({text:e.descr,callbackArgs:new Array(r,e.descr)}),r++});var s=[],o=0;e.Array.each(this.get("corrtypes2"),function(e){s.push({text:e.descr,callbackArgs:new Array(o,e.descr)}),o++});var u=[],a=0;e.Array.each(this.get("corrtypes3"),function(e){u.push({text:e.descr,callbackArgs:new Array(a,e.descr)}),a++});var f=[],l=0;e.Array.each(this.get("corrtypes4"),function(e){f.push({text:e.descr,callbackArgs:new Array(l,e.descr)}),l++});var c=[],h=0;e.Array.each(this.get("corrtypes5"),function(e){c.push({text:e.descr,callbackArgs:new Array(h,e.descr)}),h++});var p=[],d=0;e.Array.each(this.get("corrtypes6"),function(e){p.push({text:e.descr,callbackArgs:new Array(d,e.descr)}),d++}),this.addToolbarMenu({icon:M.util.image_url("icon11",n),globalItemConfig:{callback:this._addCorrection1},items:t,buttonName:"writeup11",title:"addmark1"}),this.addToolbarMenu({icon:M.util.image_url("icon12",n),globalItemConfig:{callback:this._addCorrection2},items:s,buttonName:"writeup12",title:"addmark2"}),this.addToolbarMenu({icon:M.util.image_url("icon13",n),globalItemConfig:{callback:this._addCorrection3},items:u,buttonName:"writeup13",title:"addmark3"}),this.addToolbarMenu({icon:M.util.image_url("icon14",n),globalItemConfig:{callback:this._addCorrection4},items:f,buttonName:"writeup14",title:"addmark4"}),this.addToolbarMenu({icon:M.util.image_url("icon15",n),globalItemConfig:{callback:this._addCorrection5},items:c,buttonName:"writeup15",title:"addmark5"}),this.addToolbarMenu({icon:M.util.image_url("icon16",n),globalItemConfig:{callback:this._addCorrection6},items:p,buttonName:"writeup16",title:"addmark6"}),this.addButton({icon:M.util.image_url("icon2",n),callback:this._removeCorrection,tags:i.SPAN,buttonName:"writeup2",title:"removemark"}),this.addButton({icon:M.util.image_url("icon3",n),callback:this._displayFulltext,buttonName:"writeup3",title:"displayfulltext"}),this.get("host").on("pluginsloaded",function(){this.get("host").on("atto:selectionchanged",this._updateButtonsStates,this)},this),this._updateButtonsStates()},_addCorrection1:function(e,t){this._currentSelection=this.get("host").getSelection();if(this._currentSelection===!1||this._currentSelection.collapsed)return;var n=this.get("host").getSelectionParentNode();if(!n)return;this._displayDialogue1(t,n)},_addCorrection2:function(e,t){this._currentSelection=this.get("host").getSelection();if(this._currentSelection===!1||this._currentSelection.collapsed)return;var n=this.get("host").getSelectionParentNode();if(!n)return;this._displayDialogue2(t,n)},_addCorrection3:function(e,t){this._currentSelection=this.get("host").getSelection();if(this._currentSelection===!1||this._currentSelection.collapsed)return;var n=this.get("host"
).getSelectionParentNode();if(!n)return;this._displayDialogue3(t,n)},_addCorrection4:function(e,t){this._currentSelection=this.get("host").getSelection();if(this._currentSelection===!1||this._currentSelection.collapsed)return;var n=this.get("host").getSelectionParentNode();if(!n)return;this._displayDialogue4(t,n)},_addCorrection5:function(e,t){this._currentSelection=this.get("host").getSelection();if(this._currentSelection===!1||this._currentSelection.collapsed)return;var n=this.get("host").getSelectionParentNode();if(!n)return;this._displayDialogue5(t,n)},_addCorrection6:function(e,t){this._currentSelection=this.get("host").getSelection();if(this._currentSelection===!1||this._currentSelection.collapsed)return;var n=this.get("host").getSelectionParentNode();if(!n)return;this._displayDialogue6(t,n)},_removeCorrection:function(t){t.preventDefault();var n=this.get("host").getSelectionParentNode().parentNode;n.nodeName.toLowerCase()==="span"&&n.className.indexOf(r.SPAN)!==-1&&(e.Node(n.parentNode).one("."+r.CORRSPAN).remove(),n.parentNode.parentNode.replaceChild(document.createTextNode(n.innerHTML),n.parentNode))},_displayFulltext:function(){var t=this.getDialogue({headerContent:M.util.get_string("fulltexttitle",n),focusAfterHide:!0,width:600}),i=e.Handlebars.compile(s.FULLTEXT),o=e.Node.create(i({component:n,CSS:r,fulltext:new e.Handlebars.SafeString(this.get("host").editor.getHTML())}));t.set("bodyContent",o).show()},_displayDialogue1:function(t,s){nnnn=s;var o=!1,u=!1;atext=!1,this._isoncorr&&(o=s.parentNode.className.replace(r.SPAN+" "+r.SPAN1+" "+r.BASECLASS,"").replace(" ",""),u=e.Node(s.parentNode).one(".atto_writeup_comment").getDOMNode().innerHTML,atext=e.Node(s.parentNode).one(".atto_writeup_altext").getDOMNode().innerHTML,mark=e.Node(s.parentNode).one(".atto_writeup_marking").getDOMNode().innerHTML,e.Node(s.parentNode).one(".atto_writeup_focus").checked?isfocus="yes":isfocus="no");var a=this.getDialogue({headerContent:M.util.get_string("dialogtitle1",n),focusAfterHide:!0,focusOnShowSelector:i.TEXTAREA1});a.set("bodyContent",this._getDialogueContent1()).show(),this._isoncorr?(e.one(".atto_form."+r.FORM+" select").set("selectedIndex",this.get("corrtypekeys1").indexOf(o)),e.one(".atto_form."+r.FORM+" textarea1").set("value",u),e.one(".atto_form."+r.FORM+" textarea2").set("value",atext),e.one(".atto_form."+r.FORM+" mark").set("value",mark),isfocus=="yes"&&e.one(".atto_form."+r.FORM+" checkbox").set("value","yes")):e.one(".atto_form."+r.FORM+" select").set("selectedIndex",t[0])},_displayDialogue2:function(t,s){nnnn=s;var o=!1,u=!1;atext=!1,this._isoncorr&&(o=s.parentNode.className.replace(r.SPAN+" "+r.SPAN1+" "+r.BASECLASS,"").replace(" ",""),u=e.Node(s.parentNode).one(".atto_writeup_comment").getDOMNode().innerHTML,atext=e.Node(s.parentNode).one(".atto_writeup_altext").getDOMNode().innerHTML,mark=e.Node(s.parentNode).one(".atto_writeup_marking").getDOMNode().innerHTML,e.Node(s.parentNode).one(".atto_writeup_focus").checked?isfocus="yes":isfocus="no");var a=this.getDialogue({headerContent:M.util.get_string("dialogtitle2",n),focusAfterHide:!0,focusOnShowSelector:i.TEXTAREA1});a.set("bodyContent",this._getDialogueContent2()).show(),this._isoncorr?(e.one(".atto_form."+r.FORM+" select").set("selectedIndex",this.get("corrtypekeys2").indexOf(o)),e.one(".atto_form."+r.FORM+" textarea1").set("value",u),e.one(".atto_form."+r.FORM+" textarea2").set("value",atext),e.one(".atto_form."+r.FORM+" mark").set("value",mark),isfocus=="yes"&&e.one(".atto_form."+r.FORM+" checkbox").set("value","yes")):e.one(".atto_form."+r.FORM+" select").set("selectedIndex",t[0])},_displayDialogue3:function(t,s){nnnn=s;var o=!1,u=!1;atext=!1,this._isoncorr&&(o=s.parentNode.className.replace(r.SPAN+" "+r.SPAN1+" "+r.BASECLASS,"").replace(" ",""),u=e.Node(s.parentNode).one(".atto_writeup_comment").getDOMNode().innerHTML,atext=e.Node(s.parentNode).one(".atto_writeup_altext").getDOMNode().innerHTML,mark=e.Node(s.parentNode).one(".atto_writeup_marking").getDOMNode().innerHTML,e.Node(s.parentNode).one(".atto_writeup_focus").checked?isfocus="yes":isfocus="no");var a=this.getDialogue({headerContent:M.util.get_string("dialogtitle3",n),focusAfterHide:!0,focusOnShowSelector:i.TEXTAREA1});a.set("bodyContent",this._getDialogueContent3()).show(),this._isoncorr?(e.one(".atto_form."+r.FORM+" select").set("selectedIndex",this.get("corrtypekeys3").indexOf(o)),e.one(".atto_form."+r.FORM+" textarea1").set("value",u),e.one(".atto_form."+r.FORM+" textarea2").set("value",atext),e.one(".atto_form."+r.FORM+" mark").set("value",mark),isfocus=="yes"&&e.one(".atto_form."+r.FORM+" checkbox").set("value","yes")):e.one(".atto_form."+r.FORM+" select").set("selectedIndex",t[0])},_displayDialogue4:function(t,s){nnnn=s;var o=!1,u=!1;atext=!1,this._isoncorr&&(o=s.parentNode.className.replace(r.SPAN+" "+r.SPAN1+" "+r.BASECLASS,"").replace(" ",""),u=e.Node(s.parentNode).one(".atto_writeup_comment").getDOMNode().innerHTML,atext=e.Node(s.parentNode).one(".atto_writeup_altext").getDOMNode().innerHTML,mark=e.Node(s.parentNode).one(".atto_writeup_marking").getDOMNode().innerHTML,e.Node(s.parentNode).one(".atto_writeup_focus").checked?isfocus="yes":isfocus="no");var a=this.getDialogue({headerContent:M.util.get_string("dialogtitle4",n),focusAfterHide:!0,focusOnShowSelector:i.TEXTAREA1});a.set("bodyContent",this._getDialogueContent4()).show(),this._isoncorr?(e.one(".atto_form."+r.FORM+" select").set("selectedIndex",this.get("corrtypekeys4").indexOf(o)),e.one(".atto_form."+r.FORM+" textarea1").set("value",u),e.one(".atto_form."+r.FORM+" textarea2").set("value",atext),e.one(".atto_form."+r.FORM+" mark").set("value",mark),isfocus=="yes"&&e.one(".atto_form."+r.FORM+" checkbox").set("value","yes")):e.one(".atto_form."+r.FORM+" select").set("selectedIndex",t[0])},_displayDialogue5:function(t,s){nnnn=s;var o=!1,u=!1;atext=!1,this._isoncorr&&(o=s.parentNode.className.replace(r.SPAN+" "+r.SPAN1+" "+r.BASECLASS,"").replace(" ",""),u=e.Node(s.parentNode).one(".atto_writeup_comment"
).getDOMNode().innerHTML,atext=e.Node(s.parentNode).one(".atto_writeup_altext").getDOMNode().innerHTML,mark=e.Node(s.parentNode).one(".atto_writeup_marking").getDOMNode().innerHTML,e.Node(s.parentNode).one(".atto_writeup_focus").checked?isfocus="yes":isfocus="no");var a=this.getDialogue({headerContent:M.util.get_string("dialogtitle5",n),focusAfterHide:!0,focusOnShowSelector:i.TEXTAREA1});a.set("bodyContent",this._getDialogueContent5()).show(),this._isoncorr?(e.one(".atto_form."+r.FORM+" select").set("selectedIndex",this.get("corrtypekeys5").indexOf(o)),e.one(".atto_form."+r.FORM+" textarea1").set("value",u),e.one(".atto_form."+r.FORM+" textarea2").set("value",atext),e.one(".atto_form."+r.FORM+" mark").set("value",mark),isfocus=="yes"&&e.one(".atto_form."+r.FORM+" checkbox").set("value","yes")):e.one(".atto_form."+r.FORM+" select").set("selectedIndex",t[0])},_displayDialogue6:function(t,s){nnnn=s;var o=!1,u=!1;atext=!1,this._isoncorr&&(o=s.parentNode.className.replace(r.SPAN+" "+r.SPAN1+" "+r.BASECLASS,"").replace(" ",""),u=e.Node(s.parentNode).one(".atto_writeup_comment").getDOMNode().innerHTML,atext=e.Node(s.parentNode).one(".atto_writeup_altext").getDOMNode().innerHTML,mark=e.Node(s.parentNode).one(".atto_writeup_marking").getDOMNode().innerHTML,e.Node(s.parentNode).one(".atto_writeup_focus").checked?isfocus="yes":isfocus="no");var a=this.getDialogue({headerContent:M.util.get_string("dialogtitle6",n),focusAfterHide:!0,focusOnShowSelector:i.TEXTAREA1});a.set("bodyContent",this._getDialogueContent6()).show(),this._isoncorr?(e.one(".atto_form."+r.FORM+" select").set("selectedIndex",this.get("corrtypekeys6").indexOf(o)),e.one(".atto_form."+r.FORM+" textarea1").set("value",u),e.one(".atto_form."+r.FORM+" textarea2").set("value",atext),e.one(".atto_form."+r.FORM+" mark").set("value",mark),isfocus=="yes"&&e.one(".atto_form."+r.FORM+" checkbox").set("value","yes")):e.one(".atto_form."+r.FORM+" select").set("selectedIndex",t[0])},_getDialogueContent1:function(){var t=e.Handlebars.compile(s.DIALOGUE1);return this._content=e.Node.create(t({component:n,elementid:this.get("host").get("elementid"),CSS:r,corrtypes1:this.get("corrtypes1")})),this._content.one(".submit").on("click",this._setCorrection1,this),this._content},_getDialogueContent2:function(){var t=e.Handlebars.compile(s.DIALOGUE2);return this._content=e.Node.create(t({component:n,elementid:this.get("host").get("elementid"),CSS:r,corrtypes2:this.get("corrtypes2")})),this._content.one(".submit").on("click",this._setCorrection2,this),this._content},_getDialogueContent3:function(){var t=e.Handlebars.compile(s.DIALOGUE3);return this._content=e.Node.create(t({component:n,elementid:this.get("host").get("elementid"),CSS:r,corrtypes3:this.get("corrtypes3")})),this._content.one(".submit").on("click",this._setCorrection3,this),this._content},_getDialogueContent4:function(){var t=e.Handlebars.compile(s.DIALOGUE4);return this._content=e.Node.create(t({component:n,elementid:this.get("host").get("elementid"),CSS:r,corrtypes4:this.get("corrtypes4")})),this._content.one(".submit").on("click",this._setCorrection4,this),this._content},_getDialogueContent5:function(){var t=e.Handlebars.compile(s.DIALOGUE5);return this._content=e.Node.create(t({component:n,elementid:this.get("host").get("elementid"),CSS:r,corrtypes5:this.get("corrtypes5")})),this._content.one(".submit").on("click",this._setCorrection5,this),this._content},_getDialogueContent6:function(){var t=e.Handlebars.compile(s.DIALOGUE6);return this._content=e.Node.create(t({component:n,elementid:this.get("host").get("elementid"),CSS:r,corrtypes6:this.get("corrtypes6")})),this._content.one(".submit").on("click",this._setCorrection6,this),this._content},_setCorrection1:function(t){t.preventDefault(),this.getDialogue({focusAfterHide:this._currentSelection}).hide();var n=t.currentTarget.ancestor(".atto_form"),s=n.one(i.SELECT).get("value"),o=this.get("corrtypekeys1").indexOf(s),u=this.get("corrtypes1")[o].descr,a=n.one(i.TEXTAREA1).get("value"),f=/(https?:\/\/([-\w\.]+)+(:\d+)?(\/([\w\/_\.]*(\?\S+)?)?)?)/ig,a=a.replace(f,"<a href='$1' target='_blank'>$1</a>"),l=n.one(i.TEXTAREA2).get("value"),c=n.one(i.MARKING).get("value"),h="no",p=this.get("host");n.one(i.CHECKBOX).get("checked")&&(h="yes"),l.trim()!=""?strike="yes":strike="no",ffff=n;if(s!==""){p.setSelection(this._currentSelection);if(this._isoncorr){var d=e.Node(p.getSelectionParentNode().parentNode);a!=""?d.one("."+r.CORRTEXT).getDOMNode().innerHTML="<b>"+u+"</b> : "+a:d.one("."+r.CORRTEXT).getDOMNode().innerHTML="<b>"+u+"</b>",d.one("."+r.ALTEXT).getDOMNode().innerHTML=l,h&&d.one("."+r.FOCUS).set("checked","checked");var v=r.SPAN+" "+r.SPAN1+" "+r.BASECLASS+s;d.one("."+r.CORRTEXT).getDOMNode().parentNode.parentNode.className=v,d.one("sup").getDOMNode().innerHTML=s}else{var m="ts"+(new Date).getTime();p.toggleInlineSelectionClass([r.SPAN]),p.toggleInlineSelectionClass([r.SPAN1]),h=="yes"&&p.toggleInlineSelectionClass([r.FOCUS]),p.toggleInlineSelectionClass([r.BASECLASS+s]),c=="serious"&&strike=="yes"&&p.toggleInlineSelectionClass([r.STRIKE]),p.toggleInlineSelectionClass([r.BASECLASS+c]),p.toggleInlineSelectionClass([m]),a!=""?node1=e.Node.create('<span class="'+r.CORRTEXT+'"> <b> '+u+" </b> : "+a+"</span>"):node1=e.Node.create('<span class="'+r.CORRTEXT+'"> <b> '+u+" </b> "+"</span>");var g=e.Node.create('<span class="'+r.CORRSPAN+'"/>'),y=e.Node.create('<span class="'+r.ALTEXT+" "+r.ALTEXT+"_"+c+'">'+l+"</span>"),b=e.Node.create('<sup title="'+a+'">'+s+"</sup>");e.one("."+m).appendChild(g),e.one("."+m).removeClass(m),g.appendChild(b.getDOMNode()),g.appendChild(y.getDOMNode()),g.appendChild(node1.getDOMNode()),p.toggleInlineSelectionClass([r.ERRSPAN])}this.markUpdated()}},_setCorrection2:function(t){t.preventDefault(),this.getDialogue({focusAfterHide:this._currentSelection}).hide();var n=t.currentTarget.ancestor(".atto_form"),s=n.one(i.SELECT).get("value"),o=this.get("corrtypekeys2").indexOf(s),u=this.get("corrtypes2")[o].descr,a=n.one(i.TEXTAREA1).get("value"
),f=/(https?:\/\/([-\w\.]+)+(:\d+)?(\/([\w\/_\.]*(\?\S+)?)?)?)/ig,a=a.replace(f,"<a href='$1' target='_blank'>$1</a>"),l=n.one(i.TEXTAREA2).get("value"),c=n.one(i.MARKING).get("value"),h="no",p=this.get("host");n.one(i.CHECKBOX).get("checked")&&(h="yes"),l.trim()!=""?strike="yes":strike="no",ffff=n;if(s!==""){p.setSelection(this._currentSelection);if(this._isoncorr){var d=e.Node(p.getSelectionParentNode().parentNode);a!=""?d.one("."+r.CORRTEXT).getDOMNode().innerHTML="<b>"+u+"</b> : "+a:d.one("."+r.CORRTEXT).getDOMNode().innerHTML="<b>"+u+"</b>",d.one("."+r.ALTEXT).getDOMNode().innerHTML=l,h&&d.one("."+r.FOCUS).set("checked","checked");var v=r.SPAN+" "+r.SPAN1+" "+r.BASECLASS+s;d.one("."+r.CORRTEXT).getDOMNode().parentNode.parentNode.className=v,d.one("sup").getDOMNode().innerHTML=s}else{var m="ts"+(new Date).getTime();p.toggleInlineSelectionClass([r.SPAN]),p.toggleInlineSelectionClass([r.SPAN1]),h=="yes"&&p.toggleInlineSelectionClass([r.FOCUS]),p.toggleInlineSelectionClass([r.BASECLASS+s]),c=="serious"&&strike=="yes"&&p.toggleInlineSelectionClass([r.STRIKE]),p.toggleInlineSelectionClass([r.BASECLASS+c]),p.toggleInlineSelectionClass([m]),a!=""?node1=e.Node.create('<span class="'+r.CORRTEXT+'"> <b> '+u+" </b> : "+a+"</span>"):node1=e.Node.create('<span class="'+r.CORRTEXT+'"> <b> '+u+" </b> "+"</span>");var g=e.Node.create('<span class="'+r.CORRSPAN+'"/>'),y=e.Node.create('<span class="'+r.ALTEXT+" "+r.ALTEXT+"_"+c+'">'+l+"</span>"),b=e.Node.create('<sup title="'+a+'">'+s+"</sup>");e.one("."+m).appendChild(g),e.one("."+m).removeClass(m),g.appendChild(b.getDOMNode()),g.appendChild(y.getDOMNode()),g.appendChild(node1.getDOMNode()),p.toggleInlineSelectionClass([r.ERRSPAN])}this.markUpdated()}},_setCorrection3:function(t){t.preventDefault(),this.getDialogue({focusAfterHide:this._currentSelection}).hide();var n=t.currentTarget.ancestor(".atto_form"),s=n.one(i.SELECT).get("value"),o=this.get("corrtypekeys3").indexOf(s),u=this.get("corrtypes3")[o].descr,a=n.one(i.TEXTAREA1).get("value"),f=/(https?:\/\/([-\w\.]+)+(:\d+)?(\/([\w\/_\.]*(\?\S+)?)?)?)/ig,a=a.replace(f,"<a href='$1' target='_blank'>$1</a>"),l=n.one(i.TEXTAREA2).get("value"),c=n.one(i.MARKING).get("value"),h="no",p=this.get("host");n.one(i.CHECKBOX).get("checked")&&(h="yes"),l.trim()!=""?strike="yes":strike="no",ffff=n;if(s!==""){p.setSelection(this._currentSelection);if(this._isoncorr){var d=e.Node(p.getSelectionParentNode().parentNode);a!=""?d.one("."+r.CORRTEXT).getDOMNode().innerHTML="<b>"+u+"</b> : "+a:d.one("."+r.CORRTEXT).getDOMNode().innerHTML="<b>"+u+"</b>",d.one("."+r.ALTEXT).getDOMNode().innerHTML=l,h&&d.one("."+r.FOCUS).set("checked","checked");var v=r.SPAN+" "+r.SPAN1+" "+r.BASECLASS+s;d.one("."+r.CORRTEXT).getDOMNode().parentNode.parentNode.className=v,d.one("sup").getDOMNode().innerHTML=s}else{var m="ts"+(new Date).getTime();p.toggleInlineSelectionClass([r.SPAN]),p.toggleInlineSelectionClass([r.SPAN1]),h=="yes"&&p.toggleInlineSelectionClass([r.FOCUS]),p.toggleInlineSelectionClass([r.BASECLASS+s]),c=="serious"&&strike=="yes"&&p.toggleInlineSelectionClass([r.STRIKE]),p.toggleInlineSelectionClass([r.BASECLASS+c]),p.toggleInlineSelectionClass([m]),a!=""?node1=e.Node.create('<span class="'+r.CORRTEXT+'"> <b> '+u+" </b> : "+a+"</span>"):node1=e.Node.create('<span class="'+r.CORRTEXT+'"> <b> '+u+" </b> "+"</span>");var g=e.Node.create('<span class="'+r.CORRSPAN+'"/>'),y=e.Node.create('<span class="'+r.ALTEXT+" "+r.ALTEXT+"_"+c+'">'+l+"</span>"),b=e.Node.create('<sup title="'+a+'">'+s+"</sup>");e.one("."+m).appendChild(g),e.one("."+m).removeClass(m),g.appendChild(b.getDOMNode()),g.appendChild(y.getDOMNode()),g.appendChild(node1.getDOMNode()),p.toggleInlineSelectionClass([r.ERRSPAN])}this.markUpdated()}},_setCorrection4:function(t){t.preventDefault(),this.getDialogue({focusAfterHide:this._currentSelection}).hide();var n=t.currentTarget.ancestor(".atto_form"),s=n.one(i.SELECT).get("value"),o=this.get("corrtypekeys4").indexOf(s),u=this.get("corrtypes4")[o].descr,a=n.one(i.TEXTAREA1).get("value"),f=/(https?:\/\/([-\w\.]+)+(:\d+)?(\/([\w\/_\.]*(\?\S+)?)?)?)/ig,a=a.replace(f,"<a href='$1' target='_blank'>$1</a>"),l=n.one(i.TEXTAREA2).get("value"),c=n.one(i.MARKING).get("value"),h="no",p=this.get("host");n.one(i.CHECKBOX).get("checked")&&(h="yes"),l.trim()!=""?strike="yes":strike="no",ffff=n;if(s!==""){p.setSelection(this._currentSelection);if(this._isoncorr){var d=e.Node(p.getSelectionParentNode().parentNode);a!=""?d.one("."+r.CORRTEXT).getDOMNode().innerHTML="<b>"+u+"</b> : "+a:d.one("."+r.CORRTEXT).getDOMNode().innerHTML="<b>"+u+"</b>",d.one("."+r.ALTEXT).getDOMNode().innerHTML=l,h&&d.one("."+r.FOCUS).set("checked","checked");var v=r.SPAN+" "+r.SPAN1+" "+r.BASECLASS+s;d.one("."+r.CORRTEXT).getDOMNode().parentNode.parentNode.className=v,d.one("sup").getDOMNode().innerHTML=s}else{var m="ts"+(new Date).getTime();p.toggleInlineSelectionClass([r.SPAN]),p.toggleInlineSelectionClass([r.SPAN1]),h=="yes"&&p.toggleInlineSelectionClass([r.FOCUS]),p.toggleInlineSelectionClass([r.BASECLASS+s]),c=="serious"&&strike=="yes"&&p.toggleInlineSelectionClass([r.STRIKE]),p.toggleInlineSelectionClass([r.BASECLASS+c]),p.toggleInlineSelectionClass([m]),a!=""?node1=e.Node.create('<span class="'+r.CORRTEXT+'"> <b> '+u+" </b> : "+a+"</span>"):node1=e.Node.create('<span class="'+r.CORRTEXT+'"> <b> '+u+" </b> "+"</span>");var g=e.Node.create('<span class="'+r.CORRSPAN+'"/>'),y=e.Node.create('<span class="'+r.ALTEXT+" "+r.ALTEXT+"_"+c+'">'+l+"</span>"),b=e.Node.create('<sup title="'+a+'">'+s+"</sup>");e.one("."+m).appendChild(g),e.one("."+m).removeClass(m),g.appendChild(b.getDOMNode()),g.appendChild(y.getDOMNode()),g.appendChild(node1.getDOMNode()),p.toggleInlineSelectionClass([r.ERRSPAN])}this.markUpdated()}},_setCorrection5:function(t){t.preventDefault(),this.getDialogue({focusAfterHide:this._currentSelection}).hide();var n=t.currentTarget.ancestor(".atto_form"),s=n.one(i.SELECT).get("value"),o=this.get("corrtypekeys5").indexOf(s),u=this.get("corrtypes5")[o].descr
,a=n.one(i.TEXTAREA1).get("value"),f=/(https?:\/\/([-\w\.]+)+(:\d+)?(\/([\w\/_\.]*(\?\S+)?)?)?)/ig,a=a.replace(f,"<a href='$1' target='_blank'>$1</a>"),l=n.one(i.TEXTAREA2).get("value"),c=n.one(i.MARKING).get("value"),h="no",p=this.get("host");n.one(i.CHECKBOX).get("checked")&&(h="yes"),l.trim()!=""?strike="yes":strike="no",ffff=n;if(s!==""){p.setSelection(this._currentSelection);if(this._isoncorr){var d=e.Node(p.getSelectionParentNode().parentNode);a!=""?d.one("."+r.CORRTEXT).getDOMNode().innerHTML="<b>"+u+"</b> : "+a:d.one("."+r.CORRTEXT).getDOMNode().innerHTML="<b>"+u+"</b>",d.one("."+r.ALTEXT).getDOMNode().innerHTML=l,h&&d.one("."+r.FOCUS).set("checked","checked");var v=r.SPAN+" "+r.SPAN1+" "+r.BASECLASS+s;d.one("."+r.CORRTEXT).getDOMNode().parentNode.parentNode.className=v,d.one("sup").getDOMNode().innerHTML=s}else{var m="ts"+(new Date).getTime();p.toggleInlineSelectionClass([r.SPAN]),p.toggleInlineSelectionClass([r.SPAN1]),h=="yes"&&p.toggleInlineSelectionClass([r.FOCUS]),p.toggleInlineSelectionClass([r.BASECLASS+s]),c=="serious"&&strike=="yes"&&p.toggleInlineSelectionClass([r.STRIKE]),p.toggleInlineSelectionClass([r.BASECLASS+c]),p.toggleInlineSelectionClass([m]),a!=""?node1=e.Node.create('<span class="'+r.CORRTEXT+'"> <b> '+u+" </b> : "+a+"</span>"):node1=e.Node.create('<span class="'+r.CORRTEXT+'"> <b> '+u+" </b> "+"</span>");var g=e.Node.create('<span class="'+r.CORRSPAN+'"/>'),y=e.Node.create('<span class="'+r.ALTEXT+" "+r.ALTEXT+"_"+c+'">'+l+"</span>"),b=e.Node.create('<sup title="'+a+'">'+s+"</sup>");e.one("."+m).appendChild(g),e.one("."+m).removeClass(m),g.appendChild(b.getDOMNode()),g.appendChild(y.getDOMNode()),g.appendChild(node1.getDOMNode()),p.toggleInlineSelectionClass([r.ERRSPAN])}this.markUpdated()}},_setCorrection6:function(t){t.preventDefault(),this.getDialogue({focusAfterHide:this._currentSelection}).hide();var n=t.currentTarget.ancestor(".atto_form"),s=n.one(i.SELECT).get("value"),o=this.get("corrtypekeys6").indexOf(s),u=this.get("corrtypes6")[o].descr,a=n.one(i.TEXTAREA1).get("value"),f=/(https?:\/\/([-\w\.]+)+(:\d+)?(\/([\w\/_\.]*(\?\S+)?)?)?)/ig,a=a.replace(f,"<a href='$1' target='_blank'>$1</a>"),l=n.one(i.TEXTAREA2).get("value"),c=n.one(i.MARKING).get("value"),h="no",p=this.get("host");n.one(i.CHECKBOX).get("checked")&&(h="yes"),l.trim()!=""?strike="yes":strike="no",ffff=n;if(s!==""){p.setSelection(this._currentSelection);if(this._isoncorr){var d=e.Node(p.getSelectionParentNode().parentNode);a!=""?d.one("."+r.CORRTEXT).getDOMNode().innerHTML="<b>"+u+"</b> : "+a:d.one("."+r.CORRTEXT).getDOMNode().innerHTML="<b>"+u+"</b>",d.one("."+r.ALTEXT).getDOMNode().innerHTML=l,h&&d.one("."+r.FOCUS).set("checked","checked");var v=r.SPAN+" "+r.SPAN1+" "+r.BASECLASS+s;d.one("."+r.CORRTEXT).getDOMNode().parentNode.parentNode.className=v,d.one("sup").getDOMNode().innerHTML=s}else{var m="ts"+(new Date).getTime();p.toggleInlineSelectionClass([r.SPAN]),p.toggleInlineSelectionClass([r.SPAN1]),h=="yes"&&p.toggleInlineSelectionClass([r.FOCUS]),p.toggleInlineSelectionClass([r.BASECLASS+s]),c=="serious"&&strike=="yes"&&p.toggleInlineSelectionClass([r.STRIKE]),p.toggleInlineSelectionClass([r.BASECLASS+c]),p.toggleInlineSelectionClass([m]),a!=""?node1=e.Node.create('<span class="'+r.CORRTEXT+'"> <b> '+u+" </b> : "+a+"</span>"):node1=e.Node.create('<span class="'+r.CORRTEXT+'"> <b> '+u+" </b> "+"</span>");var g=e.Node.create('<span class="'+r.CORRSPAN+'"/>'),y=e.Node.create('<span class="'+r.ALTEXT+" "+r.ALTEXT+"_"+c+'">'+l+"</span>"),b=e.Node.create('<sup title="'+a+'">'+s+"</sup>");e.one("."+m).appendChild(g),e.one("."+m).removeClass(m),g.appendChild(b.getDOMNode()),g.appendChild(y.getDOMNode()),g.appendChild(node1.getDOMNode()),p.toggleInlineSelectionClass([r.ERRSPAN])}this.markUpdated()}},_updateButtonsStates:function(){var e=this.get("host").getSelectionParentNode().parentNode,t=rangy.getSelection();if(!t.rangeCount){this.disableButtons("writeup11"),this.disableButtons("writeup12"),this.disableButtons("writeup13"),this.disableButtons("writeup14"),this.disableButtons("writeup15"),this.disableButtons("writeup16"),this.disableButtons("writeup2");return}var n=t.getRangeAt(0);this._isoncorr=e.nodeName.toLowerCase()==="span"&&e.className.indexOf(r.SPAN)!==-1,this._isoncorr?this.enableButtons("writeup2"):this.disableButtons("writeup2"),n.collapsed&&!this._isoncorr||!n.collapsed&&this._isoncorr?(this.disableButtons("writeup11"),this.disableButtons("writeup12"),this.disableButtons("writeup13"),this.disableButtons("writeup14"),this.disableButtons("writeup15"),this.disableButtons("writeup16")):(this.enableButtons("writeup11"),this.enableButtons("writeup12"),this.enableButtons("writeup13"),this.enableButtons("writeup14"),this.enableButtons("writeup15"),this.enableButtons("writeup16"))}},{ATTRS:{corrtypes1:{value:{}},corrtypes2:{value:{}},corrtypes3:{value:{}},corrtypes4:{value:{}},corrtypes5:{value:{}},corrtypes6:{value:{}},corrtypekeys1:{value:{}},corrtypekeys2:{value:{}},corrtypekeys3:{value:{}},corrtypekeys4:{value:{}},corrtypekeys5:{value:{}},corrtypekeys6:{value:{}}}})},"@VERSION@",{requires:["moodle-editor_atto-plugin"]});
