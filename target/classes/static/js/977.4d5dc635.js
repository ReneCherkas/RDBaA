"use strict";(self["webpackChunklab4"]=self["webpackChunklab4"]||[]).push([[977],{3977:function(t,s,r){r.r(s),r.d(s,{default:function(){return l}});var e=function(){var t=this,s=t.$createElement,r=t._self._c||s;return r("div",{staticClass:"form-wrapper"},[r("form",{staticClass:"login-form",on:{submit:function(s){return s.preventDefault(),t.checkForm(s)}}},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.action,expression:"action"}],attrs:{checked:"",id:"signin",name:"action",type:"radio",value:"login"},domProps:{checked:t._q(t.action,"login")},on:{change:function(s){t.action="login"}}}),r("label",{staticClass:"log",attrs:{for:"signin"}},[t._v("Вход")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.action,expression:"action"}],attrs:{id:"signup",name:"action",type:"radio",value:"register"},domProps:{checked:t._q(t.action,"register")},on:{change:function(s){t.action="register"}}}),r("label",{staticClass:"log",attrs:{for:"signup"}},[t._v("Регистрация")]),r("div",{attrs:{id:"wrapper"}},[r("div",{attrs:{id:"arrow"}}),r("div",{staticClass:"warning",class:{invalid:!t.nameValid}},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],attrs:{minlength:"3",maxlength:"25",id:"name",placeholder:"Имя",type:"text"},domProps:{value:t.name},on:{input:function(s){s.target.composing||(t.name=s.target.value)}}}),r("span",{attrs:{"data-validate":t.errors.name}})]),r("div",{staticClass:"warning",class:{invalid:!t.passwordValid}},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{minlength:"3",maxlength:"25",id:"password",placeholder:"Пароль",type:"password"},domProps:{value:t.password},on:{input:function(s){s.target.composing||(t.password=s.target.value)}}}),r("span",{attrs:{"data-validate":t.errors.password}})]),r("div",{staticClass:"warning",class:{invalid:!t.confirmValid}},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.passwordConfirm,expression:"passwordConfirm"}],attrs:{minlength:"3",maxlength:"25",id:"confirm",placeholder:"Повторите пароль",type:"password"},domProps:{value:t.passwordConfirm},on:{input:function(s){s.target.composing||(t.passwordConfirm=s.target.value)}}}),r("span",{attrs:{"data-validate":t.errors.passwordConfirm}})])]),t._m(0),r("div",{staticClass:"response-message"},[r("p",{staticClass:"visible",class:[t.response.status>=200&&t.response.status<300?"green":"red"]},[t._v(t._s(t.response.message))])])]),r("footer",{staticClass:"link"},[r("router-link",{attrs:{to:{name:"start"}}},[r("img",{staticClass:"link",attrs:{src:"public/favicon.png",alt:"About Page"}})])],1),r("div",{staticClass:"back"})])},a=[function(){var t=this,s=t.$createElement,r=t._self._c||s;return r("button",{attrs:{type:"submit"}},[r("span",[t._v(" Забыл пароль "),r("br"),t._v(" Войти "),r("br"),t._v(" Создать аккаунт ")])])}],o=(r(3429),r(560),{name:"Home",data(){return{action:"login",errors:{name:"",password:"",passwordConfirm:""},response:{status:null,message:""},success:"",name:null,password:null,passwordConfirm:null,nameValid:!0,passwordValid:!0,confirmValid:!0}},watch:{action:function(){this.nameValid=!0,this.passwordValid=!0,this.confirmValid=!0}},methods:{registerRequest:function(){this.$axios({method:"post",url:this.$BaseURL+this.action,headers:{"Content-Type":"application/json"},data:{username:this.name,password:this.password}}).then((t=>{this.response={status:t.status,message:"Аккаунт успешно создан!"}})).catch((t=>{this.response.status=t.response.status,409===t.response.status?this.response.message="Имя пользователя занято":this.response.message="Ошибка регистрации"})).finally((()=>{this.updateMessage()}))},loginRequest:function(){this.$axios({timeout:500,method:"post",url:this.$BaseURL+this.action,auth:{username:this.name,password:this.password}}).then((t=>{let s="Basic "+btoa(this.name+":"+this.password);localStorage.setItem("currentUser",s),this.$router.push("main")})).catch((t=>{t.response?401===t.response.status?this.response={status:401,message:"Неверный логин или пароль"}:this.response={status:t.response.status,message:"Ошибка авторизации"}:this.response={status:500,message:"Ошибка сервера"}})).finally((()=>{this.updateMessage()}))},checkForm:function(){this.name?this.name.match(/^[A-Za-z0-9]*$/)?this.nameValid=!0:(this.nameValid=!1,this.errors.name="Только латинские буквы и цифры"):(this.nameValid=!1,this.errors.name="Укажите имя"),this.password?this.password.match(/^[A-Za-z0-9]*$/)?this.passwordValid=!0:(this.passwordValid=!1,this.errors.password="Только латинские буквы и цифры"):(this.passwordValid=!1,this.errors.password="Укажите пароль"),this.passwordConfirm?this.password!==this.passwordConfirm?(this.confirmValid=!1,this.errors.passwordConfirm="Пароли не совпадают"):this.confirmValid=!0:(this.confirmValid=!1,this.errors.passwordConfirm="Укажите пароль еще раз"),"register"===this.action?this.nameValid&&this.passwordValid&&this.confirmValid&&this.registerRequest():"login"===this.action&&this.nameValid&&this.passwordValid&&this.loginRequest()},updateMessage(){const t=document.querySelector(".response-message p");t.classList.toggle("visible"),setTimeout((()=>t.classList.toggle("visible")),150)}}}),n=o,i=r(1001),c=(0,i.Z)(n,e,a,!1,null,"a92a67ec",null),l=c.exports},3550:function(t,s,r){var e=r(9985),a=String,o=TypeError;t.exports=function(t){if("object"==typeof t||e(t))return t;throw new o("Can't set "+a(t)+" as a prototype")}},767:function(t,s,r){var e=r(3622),a=TypeError;t.exports=function(t,s){if(e(s,t))return t;throw new a("Incorrect invocation")}},926:function(t,s,r){var e=r(3043),a=r(9985),o=r(6648),n=r(4201),i=n("toStringTag"),c=Object,l="Arguments"===o(function(){return arguments}()),p=function(t,s){try{return t[s]}catch(r){}};t.exports=e?o:function(t){var s,r,e;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(r=p(s=c(t),i))?r:l?o(s):"Object"===(e=o(s))&&a(s.callee)?"Arguments":e}},7136:function(t){t.exports={IndexSizeError:{s:"INDEX_SIZE_ERR",c:1,m:1},DOMStringSizeError:{s:"DOMSTRING_SIZE_ERR",c:2,m:0},HierarchyRequestError:{s:"HIERARCHY_REQUEST_ERR",c:3,m:1},WrongDocumentError:{s:"WRONG_DOCUMENT_ERR",c:4,m:1},InvalidCharacterError:{s:"INVALID_CHARACTER_ERR",c:5,m:1},NoDataAllowedError:{s:"NO_DATA_ALLOWED_ERR",c:6,m:0},NoModificationAllowedError:{s:"NO_MODIFICATION_ALLOWED_ERR",c:7,m:1},NotFoundError:{s:"NOT_FOUND_ERR",c:8,m:1},NotSupportedError:{s:"NOT_SUPPORTED_ERR",c:9,m:1},InUseAttributeError:{s:"INUSE_ATTRIBUTE_ERR",c:10,m:1},InvalidStateError:{s:"INVALID_STATE_ERR",c:11,m:1},SyntaxError:{s:"SYNTAX_ERR",c:12,m:1},InvalidModificationError:{s:"INVALID_MODIFICATION_ERR",c:13,m:1},NamespaceError:{s:"NAMESPACE_ERR",c:14,m:1},InvalidAccessError:{s:"INVALID_ACCESS_ERR",c:15,m:1},ValidationError:{s:"VALIDATION_ERR",c:16,m:0},TypeMismatchError:{s:"TYPE_MISMATCH_ERR",c:17,m:1},SecurityError:{s:"SECURITY_ERR",c:18,m:1},NetworkError:{s:"NETWORK_ERR",c:19,m:1},AbortError:{s:"ABORT_ERR",c:20,m:1},URLMismatchError:{s:"URL_MISMATCH_ERR",c:21,m:1},QuotaExceededError:{s:"QUOTA_EXCEEDED_ERR",c:22,m:1},TimeoutError:{s:"TIMEOUT_ERR",c:23,m:1},InvalidNodeTypeError:{s:"INVALID_NODE_TYPE_ERR",c:24,m:1},DataCloneError:{s:"DATA_CLONE_ERR",c:25,m:1}}},6610:function(t,s,r){var e=r(8844),a=Error,o=e("".replace),n=function(t){return String(new a(t).stack)}("zxcasd"),i=/\n\s*at [^:]*:[^\n]*/,c=i.test(n);t.exports=function(t,s){if(c&&"string"==typeof t&&!a.prepareStackTrace)while(s--)t=o(t,i,"");return t}},2743:function(t,s,r){var e=r(8844),a=r(509);t.exports=function(t,s,r){try{return e(a(Object.getOwnPropertyDescriptor(t,s)[r]))}catch(o){}}},3457:function(t,s,r){var e=r(9985),a=r(8999),o=r(9385);t.exports=function(t,s,r){var n,i;return o&&e(n=s.constructor)&&n!==r&&a(i=n.prototype)&&i!==r.prototype&&o(t,i),t}},3841:function(t,s,r){var e=r(4327);t.exports=function(t,s){return void 0===t?arguments.length<2?"":s:e(t)}},9385:function(t,s,r){var e=r(2743),a=r(5027),o=r(3550);t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,s=!1,r={};try{t=e(Object.prototype,"__proto__","set"),t(r,[]),s=r instanceof Array}catch(n){}return function(r,e){return a(r),o(e),s?t(r,e):r.__proto__=e,r}}():void 0)},3043:function(t,s,r){var e=r(4201),a=e("toStringTag"),o={};o[a]="z",t.exports="[object z]"===String(o)},4327:function(t,s,r){var e=r(926),a=String;t.exports=function(t){if("Symbol"===e(t))throw new TypeError("Cannot convert a Symbol value to a string");return a(t)}},3429:function(t,s,r){var e=r(9989),a=r(9037),o=r(6058),n=r(5684),i=r(2560).f,c=r(6812),l=r(767),p=r(3457),d=r(3841),u=r(7136),m=r(6610),h=r(7697),f=r(3931),E="DOMException",g=o("Error"),v=o(E),_=function(){l(this,w);var t=arguments.length,s=d(t<1?void 0:arguments[0]),r=d(t<2?void 0:arguments[1],"Error"),e=new v(s,r),a=new g(s);return a.name=E,i(e,"stack",n(1,m(a.stack,1))),p(e,this,_),e},w=_.prototype=v.prototype,R="stack"in new g(E),C="stack"in new v(1,2),A=v&&h&&Object.getOwnPropertyDescriptor(a,E),T=!!A&&!(A.writable&&A.configurable),I=R&&!T&&!C;e({global:!0,constructor:!0,forced:f||I},{DOMException:I?_:v});var y=o(E),N=y.prototype;if(N.constructor!==y)for(var O in f||i(N,"constructor",n(1,y)),u)if(c(u,O)){var b=u[O],S=b.s;c(y,S)||i(y,S,n(6,b.c))}}}]);
//# sourceMappingURL=977.4d5dc635.js.map