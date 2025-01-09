"use strict";(self["webpackChunklab4"]=self["webpackChunklab4"]||[]).push([[680],{680:function(s,a,e){e.r(a),e.d(a,{default:function(){return V}});var t=e(641),i=e(751),n=e(33),o=e(619);const r={class:"form-wrapper"},l={id:"wrapper"},p=["data-validate"],d=["data-validate"],u=["data-validate"],h={class:"response-message"},m={class:"link"};function c(s,a,e,c,w,g){const L=(0,t.g2)("router-link");return(0,t.uX)(),(0,t.CE)("div",r,[(0,t.Lk)("form",{class:"login-form",onSubmit:a[5]||(a[5]=(0,i.D$)(((...s)=>g.checkForm&&g.checkForm(...s)),["prevent"]))},[(0,t.bo)((0,t.Lk)("input",{"onUpdate:modelValue":a[0]||(a[0]=s=>w.action=s),checked:"",id:"signin",name:"action",type:"radio",value:"login"},null,512),[[i.XL,w.action]]),a[7]||(a[7]=(0,t.Lk)("label",{class:"log",for:"signin"},"Вход",-1)),(0,t.bo)((0,t.Lk)("input",{"onUpdate:modelValue":a[1]||(a[1]=s=>w.action=s),id:"signup",name:"action",type:"radio",value:"register"},null,512),[[i.XL,w.action]]),a[8]||(a[8]=(0,t.Lk)("label",{class:"log",for:"signup"},"Регистрация",-1)),(0,t.Lk)("div",l,[a[6]||(a[6]=(0,t.Lk)("div",{id:"arrow"},null,-1)),(0,t.Lk)("div",{class:(0,n.C4)([{invalid:!w.nameValid},"warning"])},[(0,t.bo)((0,t.Lk)("input",{"onUpdate:modelValue":a[2]||(a[2]=s=>w.name=s),minlength:"3",maxlength:"25",id:"name",placeholder:"Имя",type:"text"},null,512),[[i.Jo,w.name]]),(0,t.Lk)("span",{"data-validate":w.errors.name},null,8,p)],2),(0,t.Lk)("div",{class:(0,n.C4)([{invalid:!w.passwordValid},"warning"])},[(0,t.bo)((0,t.Lk)("input",{"onUpdate:modelValue":a[3]||(a[3]=s=>w.password=s),minlength:"3",maxlength:"25",id:"password",placeholder:"Пароль",type:"password"},null,512),[[i.Jo,w.password]]),(0,t.Lk)("span",{"data-validate":w.errors.password},null,8,d)],2),(0,t.Lk)("div",{class:(0,n.C4)([{invalid:!w.confirmValid},"warning"])},[(0,t.bo)((0,t.Lk)("input",{"onUpdate:modelValue":a[4]||(a[4]=s=>w.passwordConfirm=s),minlength:"3",maxlength:"25",id:"confirm",placeholder:"Повторите пароль",type:"password"},null,512),[[i.Jo,w.passwordConfirm]]),(0,t.Lk)("span",{"data-validate":w.errors.passwordConfirm},null,8,u)],2)]),a[9]||(a[9]=(0,t.Lk)("button",{type:"submit"},[(0,t.Lk)("span",null,[(0,t.eW)(" Забыл пароль "),(0,t.Lk)("br"),(0,t.eW)(" Войти "),(0,t.Lk)("br"),(0,t.eW)(" Создать аккаунт ")])],-1)),(0,t.Lk)("div",h,[(0,t.Lk)("p",{class:(0,n.C4)([[w.response.status>=200&&w.response.status<300?"green":"red"],"visible"])},(0,n.v_)(w.response.message),3)])],32),(0,t.Lk)("footer",m,[(0,t.bF)(L,{to:{name:"start"}},{default:(0,t.k6)((()=>a[10]||(a[10]=[(0,t.Lk)("img",{class:"link",src:o,alt:"About Page"},null,-1)]))),_:1})]),a[11]||(a[11]=(0,t.Lk)("div",{class:"back"},null,-1))])}var w={name:"Home",data(){return{action:"login",errors:{name:"",password:"",passwordConfirm:""},response:{status:null,message:""},success:"",name:null,password:null,passwordConfirm:null,nameValid:!0,passwordValid:!0,confirmValid:!0}},watch:{action:function(){this.nameValid=!0,this.passwordValid=!0,this.confirmValid=!0}},methods:{registerRequest:function(){this.$axios({method:"post",url:this.$BaseURL+this.action,headers:{"Content-Type":"application/json"},data:{username:this.name,password:this.password}}).then((s=>{this.response={status:s.status,message:"Аккаунт успешно создан!"}})).catch((s=>{this.response.status=s.response.status,409===s.response.status?this.response.message="Имя пользователя занято":this.response.message="Ошибка регистрации"})).finally((()=>{this.updateMessage()}))},loginRequest:function(){this.$axios({timeout:500,method:"post",url:this.$BaseURL+this.action,auth:{username:this.name,password:this.password}}).then((s=>{let a="Basic "+btoa(this.name+":"+this.password);localStorage.setItem("currentUser",a),this.$router.push("main")})).catch((s=>{s.response?401===s.response.status?this.response={status:401,message:"Неверный логин или пароль"}:this.response={status:s.response.status,message:"Ошибка авторизации"}:this.response={status:500,message:"Ошибка сервера"}})).finally((()=>{this.updateMessage()}))},checkForm:function(){this.name?this.name.match(/^[A-Za-z0-9]*$/)?this.nameValid=!0:(this.nameValid=!1,this.errors.name="Только латинские буквы и цифры"):(this.nameValid=!1,this.errors.name="Укажите имя"),this.password?this.password.match(/^[A-Za-z0-9]*$/)?this.passwordValid=!0:(this.passwordValid=!1,this.errors.password="Только латинские буквы и цифры"):(this.passwordValid=!1,this.errors.password="Укажите пароль"),this.passwordConfirm?this.password!==this.passwordConfirm?(this.confirmValid=!1,this.errors.passwordConfirm="Пароли не совпадают"):this.confirmValid=!0:(this.confirmValid=!1,this.errors.passwordConfirm="Укажите пароль еще раз"),"register"===this.action?this.nameValid&&this.passwordValid&&this.confirmValid&&this.registerRequest():"login"===this.action&&this.nameValid&&this.passwordValid&&this.loginRequest()},updateMessage(){const s=document.querySelector(".response-message p");s&&(s.classList.toggle("visible"),setTimeout((()=>{s&&s.classList.toggle("visible")}),150))}}},g=e(262);const L=(0,g.A)(w,[["render",c],["__scopeId","data-v-72db7de1"]]);var V=L},619:function(s){s.exports="data:image/png;base64,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"}}]);
//# sourceMappingURL=680-legacy.e8f5459c.js.map