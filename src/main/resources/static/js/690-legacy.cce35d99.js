"use strict";(self["webpackChunklab4"]=self["webpackChunklab4"]||[]).push([[690],{7690:function(t,e,r){r.r(e),r.d(e,{default:function(){return u}});var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"form-wrapper"},[n("form",{staticClass:"login-form",on:{submit:function(e){return e.preventDefault(),t.checkForm(e)}}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.action,expression:"action"}],attrs:{checked:"",id:"signin",name:"action",type:"radio",value:"login"},domProps:{checked:t._q(t.action,"login")},on:{change:function(e){t.action="login"}}}),n("label",{staticClass:"log",attrs:{for:"signin"}},[t._v("Вход")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.action,expression:"action"}],attrs:{id:"signup",name:"action",type:"radio",value:"register"},domProps:{checked:t._q(t.action,"register")},on:{change:function(e){t.action="register"}}}),n("label",{staticClass:"log",attrs:{for:"signup"}},[t._v("Регистрация")]),n("div",{attrs:{id:"wrapper"}},[n("div",{attrs:{id:"arrow"}}),n("div",{staticClass:"warning",class:{invalid:!t.nameValid}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],attrs:{minlength:"3",maxlength:"25",id:"name",placeholder:"Имя",type:"text"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}}),n("span",{attrs:{"data-validate":t.errors.name}})]),n("div",{staticClass:"warning",class:{invalid:!t.passwordValid}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{minlength:"3",maxlength:"25",id:"password",placeholder:"Пароль",type:"password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),n("span",{attrs:{"data-validate":t.errors.password}})]),n("div",{staticClass:"warning",class:{invalid:!t.confirmValid}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.passwordConfirm,expression:"passwordConfirm"}],attrs:{minlength:"3",maxlength:"25",id:"confirm",placeholder:"Повторите пароль",type:"password"},domProps:{value:t.passwordConfirm},on:{input:function(e){e.target.composing||(t.passwordConfirm=e.target.value)}}}),n("span",{attrs:{"data-validate":t.errors.passwordConfirm}})])]),t._m(0),n("div",{staticClass:"response-message"},[n("p",{staticClass:"visible",class:[t.response.status>=200&&t.response.status<300?"green":"red"]},[t._v(t._s(t.response.message))])])]),n("footer",{staticClass:"link"},[n("router-link",{attrs:{to:{name:"start"}}},[n("img",{staticClass:"link",attrs:{src:r(2160),alt:"About Page"}})])],1),n("div",{staticClass:"back"})])},s=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("button",{attrs:{type:"submit"}},[r("span",[t._v(" Забыл пароль "),r("br"),t._v(" Войти "),r("br"),t._v(" Создать аккаунт ")])])}],a=(r(228),r(4284),r(4645),r(7337),r(3429),r(7462),r(560),r(4043),r(2462),{name:"Home",data:function(){return{action:"login",errors:{name:"",password:"",passwordConfirm:""},response:{status:null,message:""},success:"",name:null,password:null,passwordConfirm:null,nameValid:!0,passwordValid:!0,confirmValid:!0}},watch:{action:function(){this.nameValid=!0,this.passwordValid=!0,this.confirmValid=!0}},methods:{registerRequest:function(){var t=this;this.$axios({method:"post",url:this.$BaseURL+this.action,headers:{"Content-Type":"application/json"},data:{username:this.name,password:this.password}}).then((function(e){t.response={status:e.status,message:"Аккаунт успешно создан!"}})).catch((function(e){t.response.status=e.response.status,409===e.response.status?t.response.message="Имя пользователя занято":t.response.message="Ошибка регистрации"})).finally((function(){t.updateMessage()}))},loginRequest:function(){var t=this;this.$axios({timeout:500,method:"post",url:this.$BaseURL+this.action,auth:{username:this.name,password:this.password}}).then((function(e){var r="Basic "+btoa(t.name+":"+t.password);localStorage.setItem("currentUser",r),t.$router.push("main")})).catch((function(e){e.response?401===e.response.status?t.response={status:401,message:"Неверный логин или пароль"}:t.response={status:e.response.status,message:"Ошибка авторизации"}:t.response={status:500,message:"Ошибка сервера"}})).finally((function(){t.updateMessage()}))},checkForm:function(){this.name?this.name.match(/^[A-Za-z0-9]*$/)?this.nameValid=!0:(this.nameValid=!1,this.errors.name="Только латинские буквы и цифры"):(this.nameValid=!1,this.errors.name="Укажите имя"),this.password?this.password.match(/^[A-Za-z0-9]*$/)?this.passwordValid=!0:(this.passwordValid=!1,this.errors.password="Только латинские буквы и цифры"):(this.passwordValid=!1,this.errors.password="Укажите пароль"),this.passwordConfirm?this.password!==this.passwordConfirm?(this.confirmValid=!1,this.errors.passwordConfirm="Пароли не совпадают"):this.confirmValid=!0:(this.confirmValid=!1,this.errors.passwordConfirm="Укажите пароль еще раз"),"register"===this.action?this.nameValid&&this.passwordValid&&this.confirmValid&&this.registerRequest():"login"===this.action&&this.nameValid&&this.passwordValid&&this.loginRequest()},updateMessage:function(){var t=document.querySelector(".response-message p");t.classList.toggle("visible"),setTimeout((function(){return t.classList.toggle("visible")}),150)}}}),o=a,i=r(1001),c=(0,i.Z)(o,n,s,!1,null,"0ebea0a4",null),u=c.exports},2160:function(t){t.exports="data:image/png;base64,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"},1514:function(t,e,r){var n=r(730).charAt;t.exports=function(t,e,r){return e+(r?n(t,e).length:1)}},5649:function(t,e,r){var n=r(7697),s=r(2297),a=TypeError,o=Object.getOwnPropertyDescriptor,i=n&&!function(){if(void 0!==this)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(t){return t instanceof TypeError}}();t.exports=i?function(t,e){if(s(t)&&!o(t,"length").writable)throw new a("Cannot set read only .length");return t.length=e}:function(t,e){return t.length=e}},8368:function(t){for(var e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",r={},n=0;n<66;n++)r[e.charAt(n)]=n;t.exports={itoc:e,ctoi:r}},5565:function(t){var e=TypeError,r=9007199254740991;t.exports=function(t){if(t>r)throw e("Maximum allowed index exceeded");return t}},7136:function(t){t.exports={IndexSizeError:{s:"INDEX_SIZE_ERR",c:1,m:1},DOMStringSizeError:{s:"DOMSTRING_SIZE_ERR",c:2,m:0},HierarchyRequestError:{s:"HIERARCHY_REQUEST_ERR",c:3,m:1},WrongDocumentError:{s:"WRONG_DOCUMENT_ERR",c:4,m:1},InvalidCharacterError:{s:"INVALID_CHARACTER_ERR",c:5,m:1},NoDataAllowedError:{s:"NO_DATA_ALLOWED_ERR",c:6,m:0},NoModificationAllowedError:{s:"NO_MODIFICATION_ALLOWED_ERR",c:7,m:1},NotFoundError:{s:"NOT_FOUND_ERR",c:8,m:1},NotSupportedError:{s:"NOT_SUPPORTED_ERR",c:9,m:1},InUseAttributeError:{s:"INUSE_ATTRIBUTE_ERR",c:10,m:1},InvalidStateError:{s:"INVALID_STATE_ERR",c:11,m:1},SyntaxError:{s:"SYNTAX_ERR",c:12,m:1},InvalidModificationError:{s:"INVALID_MODIFICATION_ERR",c:13,m:1},NamespaceError:{s:"NAMESPACE_ERR",c:14,m:1},InvalidAccessError:{s:"INVALID_ACCESS_ERR",c:15,m:1},ValidationError:{s:"VALIDATION_ERR",c:16,m:0},TypeMismatchError:{s:"TYPE_MISMATCH_ERR",c:17,m:1},SecurityError:{s:"SECURITY_ERR",c:18,m:1},NetworkError:{s:"NETWORK_ERR",c:19,m:1},AbortError:{s:"ABORT_ERR",c:20,m:1},URLMismatchError:{s:"URL_MISMATCH_ERR",c:21,m:1},QuotaExceededError:{s:"QUOTA_EXCEEDED_ERR",c:22,m:1},TimeoutError:{s:"TIMEOUT_ERR",c:23,m:1},InvalidNodeTypeError:{s:"INVALID_NODE_TYPE_ERR",c:24,m:1},DataCloneError:{s:"DATA_CLONE_ERR",c:25,m:1}}},6610:function(t,e,r){var n=r(8844),s=Error,a=n("".replace),o=function(t){return String(new s(t).stack)}("zxcasd"),i=/\n\s*at [^:]*:[^\n]*/,c=i.test(o);t.exports=function(t,e){if(c&&"string"==typeof t&&!s.prepareStackTrace)while(e--)t=a(t,i,"");return t}},445:function(t,e,r){var n=r(7697),s=r(3689),a=r(5027),o=r(3841),i=Error.prototype.toString,c=s((function(){if(n){var t=Object.create(Object.defineProperty({},"name",{get:function(){return this===t}}));if("true"!==i.call(t))return!0}return"2: 1"!==i.call({message:1,name:2})||"Error"!==i.call({})}));t.exports=c?function(){var t=a(this),e=o(t.name,"Error"),r=o(t.message);return e?r?e+": "+r:e:r}:i},8678:function(t,e,r){r(4043);var n=r(6576),s=r(1880),a=r(6308),o=r(3689),i=r(4201),c=r(5773),u=i("species"),l=RegExp.prototype;t.exports=function(t,e,r,p){var d=i(t),f=!o((function(){var e={};return e[d]=function(){return 7},7!==""[t](e)})),m=f&&!o((function(){var e=!1,r=/a/;return"split"===t&&(r={},r.constructor={},r.constructor[u]=function(){return r},r.flags="",r[d]=/./[d]),r.exec=function(){return e=!0,null},r[d](""),!e}));if(!f||!m||r){var h=n(/./[d]),g=e(d,""[t],(function(t,e,r,s,o){var i=n(t),c=e.exec;return c===a||c===l.exec?f&&!o?{done:!0,value:h(e,r,s)}:{done:!0,value:i(r,e,s)}:{done:!1}}));s(String.prototype,t,g[0]),s(l,d,g[1])}p&&c(l[d],"sham",!0)}},3457:function(t,e,r){var n=r(9985),s=r(8999),a=r(9385);t.exports=function(t,e,r){var o,i;return a&&n(o=e.constructor)&&o!==r&&s(i=o.prototype)&&i!==r.prototype&&a(t,i),t}},2297:function(t,e,r){var n=r(6648);t.exports=Array.isArray||function(t){return"Array"===n(t)}},3841:function(t,e,r){var n=r(4327);t.exports=function(t,e){return void 0===t?arguments.length<2?"":e:n(t)}},6100:function(t,e,r){var n=r(2615),s=r(5027),a=r(9985),o=r(6648),i=r(6308),c=TypeError;t.exports=function(t,e){var r=t.exec;if(a(r)){var u=n(r,t,e);return null!==u&&s(u),u}if("RegExp"===o(t))return n(i,t,e);throw new c("RegExp#exec called on incompatible receiver")}},6308:function(t,e,r){var n=r(2615),s=r(8844),a=r(4327),o=r(9633),i=r(7901),c=r(3430),u=r(5391),l=r(618).get,p=r(2100),d=r(6422),f=c("native-string-replace",String.prototype.replace),m=RegExp.prototype.exec,h=m,g=s("".charAt),E=s("".indexOf),v=s("".replace),x=s("".slice),A=function(){var t=/a/,e=/b*/g;return n(m,t,"a"),n(m,e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),w=i.BROKEN_CARET,R=void 0!==/()??/.exec("")[1],C=A||R||w||p||d;C&&(h=function(t){var e,r,s,i,c,p,d,C=this,I=l(C),y=a(t),S=I.raw;if(S)return S.lastIndex=C.lastIndex,e=n(h,S,y),C.lastIndex=S.lastIndex,e;var b=I.groups,O=w&&C.sticky,T=n(o,C),D=C.source,N=0,V=y;if(O&&(T=v(T,"y",""),-1===E(T,"g")&&(T+="g"),V=x(y,C.lastIndex),C.lastIndex>0&&(!C.multiline||C.multiline&&"\n"!==g(y,C.lastIndex-1))&&(D="(?: "+D+")",V=" "+V,N++),r=new RegExp("^(?:"+D+")",T)),R&&(r=new RegExp("^"+D+"$(?!\\s)",T)),A&&(s=C.lastIndex),i=n(m,O?r:C,V),O?i?(i.input=x(i.input,N),i[0]=x(i[0],N),i.index=C.lastIndex,C.lastIndex+=i[0].length):C.lastIndex=0:A&&i&&(C.lastIndex=C.global?i.index+i[0].length:s),R&&i&&i.length>1&&n(f,i[0],r,(function(){for(c=1;c<arguments.length-2;c++)void 0===arguments[c]&&(i[c]=void 0)})),i&&b)for(i.groups=p=u(null),c=0;c<b.length;c++)d=b[c],p[d[0]]=i[d[1]];return i}),t.exports=h},9633:function(t,e,r){var n=r(5027);t.exports=function(){var t=n(this),e="";return t.hasIndices&&(e+="d"),t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.unicodeSets&&(e+="v"),t.sticky&&(e+="y"),e}},7901:function(t,e,r){var n=r(3689),s=r(9037),a=s.RegExp,o=n((function(){var t=a("a","y");return t.lastIndex=2,null!==t.exec("abcd")})),i=o||n((function(){return!a("a","y").sticky})),c=o||n((function(){var t=a("^r","gy");return t.lastIndex=2,null!==t.exec("str")}));t.exports={BROKEN_CARET:c,MISSED_STICKY:i,UNSUPPORTED_Y:o}},2100:function(t,e,r){var n=r(3689),s=r(9037),a=s.RegExp;t.exports=n((function(){var t=a(".","s");return!(t.dotAll&&t.test("\n")&&"s"===t.flags)}))},6422:function(t,e,r){var n=r(3689),s=r(9037),a=s.RegExp;t.exports=n((function(){var t=a("(?<a>b)","g");return"b"!==t.exec("b").groups.a||"bc"!=="b".replace(t,"$<a>c")}))},1905:function(t,e,r){var n=r(806);t.exports=function(t){try{if(n)return Function('return require("'+t+'")')()}catch(e){}}},560:function(t,e,r){var n=r(9989),s=r(690),a=r(6310),o=r(5649),i=r(5565),c=r(3689),u=c((function(){return 4294967297!==[].push.call({length:4294967296},1)})),l=function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(t){return t instanceof TypeError}},p=u||!l();n({target:"Array",proto:!0,arity:1,forced:p},{push:function(t){var e=s(this),r=a(e),n=arguments.length;i(r+n);for(var c=0;c<n;c++)e[r]=arguments[c],r++;return o(e,r),r}})},4284:function(t,e,r){var n=r(7697),s=r(1236).EXISTS,a=r(8844),o=r(2148),i=Function.prototype,c=a(i.toString),u=/function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/,l=a(u.exec),p="name";n&&!s&&o(i,p,{configurable:!0,get:function(){try{return l(u,c(this))[1]}catch(t){return""}}})},4043:function(t,e,r){var n=r(9989),s=r(6308);n({target:"RegExp",proto:!0,forced:/./.exec!==s},{exec:s})},2462:function(t,e,r){var n=r(2615),s=r(8678),a=r(5027),o=r(981),i=r(3126),c=r(4327),u=r(4684),l=r(4849),p=r(1514),d=r(6100);s("match",(function(t,e,r){return[function(e){var r=u(this),s=o(e)?void 0:l(e,t);return s?n(s,e,r):new RegExp(e)[t](c(r))},function(t){var n=a(this),s=c(t),o=r(e,n,s);if(o.done)return o.value;if(!n.global)return d(n,s);var u=n.unicode;n.lastIndex=0;var l,f=[],m=0;while(null!==(l=d(n,s))){var h=c(l[0]);f[m]=h,""===h&&(n.lastIndex=p(s,i(n.lastIndex),u)),m++}return 0===m?null:f}]}))},4645:function(t,e,r){var n=r(9989),s=r(9037),a=r(6058),o=r(8844),i=r(2615),c=r(3689),u=r(4327),l=r(1500),p=r(8368).itoc,d=a("btoa"),f=o("".charAt),m=o("".charCodeAt),h=!!d&&!c((function(){d()})),g=!!d&&c((function(){return"bnVsbA=="!==d(null)})),E=!!d&&1!==d.length;n({global:!0,bind:!0,enumerable:!0,forced:h||g||E},{btoa:function(t){if(l(arguments.length,1),h||g||E)return i(d,s,u(t));var e,r,n=u(t),o="",c=0,v=p;while(f(n,c)||(v="=",c%1)){if(r=m(n,c+=3/4),r>255)throw new(a("DOMException"))("The string contains characters outside of the Latin1 range","InvalidCharacterError");e=e<<8|r,o+=f(v,63&e>>8-c%1*8)}return o}})},7337:function(t,e,r){var n=r(9989),s=r(1905),a=r(6058),o=r(3689),i=r(5391),c=r(5684),u=r(2560).f,l=r(1880),p=r(2148),d=r(6812),f=r(767),m=r(5027),h=r(445),g=r(3841),E=r(7136),v=r(6610),x=r(618),A=r(7697),w=r(3931),R="DOMException",C="DATA_CLONE_ERR",I=a("Error"),y=a(R)||function(){try{var t=a("MessageChannel")||s("worker_threads").MessageChannel;(new t).port1.postMessage(new WeakMap)}catch(e){if(e.name===C&&25===e.code)return e.constructor}}(),S=y&&y.prototype,b=I.prototype,O=x.set,T=x.getterFor(R),D="stack"in new I(R),N=function(t){return d(E,t)&&E[t].m?E[t].c:0},V=function(){f(this,M);var t=arguments.length,e=g(t<1?void 0:arguments[0]),r=g(t<2?void 0:arguments[1],"Error"),n=N(r);if(O(this,{type:R,name:r,message:e,code:n}),A||(this.name=r,this.message=e,this.code=n),D){var s=new I(e);s.name=R,u(this,"stack",c(1,v(s.stack,1)))}},M=V.prototype=i(b),U=function(t){return{enumerable:!0,configurable:!0,get:t}},_=function(t){return U((function(){return T(this)[t]}))};A&&(p(M,"code",_("code")),p(M,"message",_("message")),p(M,"name",_("name"))),u(M,"constructor",c(1,V));var K=o((function(){return!(new y instanceof I)})),P=K||o((function(){return b.toString!==h||"2: 1"!==String(new y(1,2))})),L=K||o((function(){return 25!==new y(1,"DataCloneError").code})),k=K||25!==y[C]||25!==S[C],j=w?P||L||k:K;n({global:!0,constructor:!0,forced:j},{DOMException:j?V:y});var Z=a(R),q=Z.prototype;for(var H in P&&(w||y===Z)&&l(q,"toString",h),L&&A&&y===Z&&p(q,"code",U((function(){return N(m(this).name)}))),E)if(d(E,H)){var Q=E[H],Y=Q.s,z=c(6,Q.c);d(Z,Y)||u(Z,Y,z),d(q,Y)||u(q,Y,z)}},3429:function(t,e,r){var n=r(9989),s=r(9037),a=r(6058),o=r(5684),i=r(2560).f,c=r(6812),u=r(767),l=r(3457),p=r(3841),d=r(7136),f=r(6610),m=r(7697),h=r(3931),g="DOMException",E=a("Error"),v=a(g),x=function(){u(this,A);var t=arguments.length,e=p(t<1?void 0:arguments[0]),r=p(t<2?void 0:arguments[1],"Error"),n=new v(e,r),s=new E(e);return s.name=g,i(n,"stack",o(1,f(s.stack,1))),l(n,this,x),n},A=x.prototype=v.prototype,w="stack"in new E(g),R="stack"in new v(1,2),C=v&&m&&Object.getOwnPropertyDescriptor(s,g),I=!!C&&!(C.writable&&C.configurable),y=w&&!I&&!R;n({global:!0,constructor:!0,forced:h||y},{DOMException:y?x:v});var S=a(g),b=S.prototype;if(b.constructor!==S)for(var O in h||i(b,"constructor",o(1,S)),d)if(c(d,O)){var T=d[O],D=T.s;c(S,D)||i(S,D,o(6,T.c))}},7462:function(t,e,r){var n=r(6058),s=r(5997),a="DOMException";s(n(a),a)}}]);
//# sourceMappingURL=690-legacy.cce35d99.js.map