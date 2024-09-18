"use strict";(self["webpackChunklab4"]=self["webpackChunklab4"]||[]).push([[448],{1448:function(e,t,a){a.r(t),a.d(t,{default:function(){return l}});var n=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"header"},[n("div",{staticClass:"table_three"},[n("div",[n("button",{staticClass:"add-button",on:{click:e.toggleForm}},[e._v("добавить персонажа")]),e.showForm?n("div",{staticClass:"modal"},[n("form",{on:{submit:function(t){return t.preventDefault(),e.addPoint(t)}}},[n("div",{staticClass:"character-form"},[n("label",{attrs:{for:"genshinCharacter"}},[e._v("Выберите имя персонажа:")]),n("select",{directives:[{name:"model",rawName:"v-model",value:e.newCharacter.name,expression:"newCharacter.name"}],attrs:{id:"genshinCharacter"},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.newCharacter,"name",t.target.multiple?a:a[0])}}},e._l(e.genshinCharacters,(function(t){return n("option",{key:t.id,domProps:{value:t.name}},[e._v(" "+e._s(t.name)+" ")])})),0),e.newCharacter.name?n("div",[n("div",[n("div",{staticClass:"level-control"},[n("label",{attrs:{for:"firstLevelRange"}},[e._v("Уровень 1:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.newCharacter.firstLevel,expression:"newCharacter.firstLevel"}],staticClass:"level-range",attrs:{type:"range",min:"1",max:"90",id:"firstLevelRange"},domProps:{value:e.newCharacter.firstLevel},on:{__r:function(t){return e.$set(e.newCharacter,"firstLevel",t.target.value)}}}),n("span",[e._v(e._s(e.newCharacter.firstLevel))])])]),n("div",[n("label",{attrs:{for:"secondLevelRange"}},[e._v("Уровень 2:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.newCharacter.secondLevel,expression:"newCharacter.secondLevel"}],staticClass:"level-range",attrs:{type:"range",min:"1",max:"90",id:"secondLevelRange"},domProps:{value:e.newCharacter.secondLevel},on:{__r:function(t){return e.$set(e.newCharacter,"secondLevel",t.target.value)}}}),n("span",[e._v(e._s(e.newCharacter.secondLevel))])]),n("div",[n("label",{attrs:{for:"thirdLevelRange"}},[e._v("Уровень 3:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.newCharacter.thirdLevel,expression:"newCharacter.thirdLevel"}],staticClass:"level-range",attrs:{type:"range",min:"1",max:"90",id:"thirdLevelRange"},domProps:{value:e.newCharacter.thirdLevel},on:{__r:function(t){return e.$set(e.newCharacter,"thirdLevel",t.target.value)}}}),n("span",[e._v(e._s(e.newCharacter.thirdLevel))])]),n("button",{attrs:{type:"submit"},on:{click:e.addCharacter}},[e._v("Добавить")])]):e._e()])])]):e._e()]),e.characters.length>0?n("table",[n("tbody",{staticClass:"pers"},e._l(e.characters,(function(t,a){return n("tr",{key:a,class:{favorite:t.favorite}},[n("td",[n("img",{staticClass:"character-image",attrs:{src:t.imagePath,alt:t.name}})]),n("td",[n("tr",[n("span",{staticClass:"character-name"},[e._v(e._s(t.name))]),n("button",{staticClass:"favorite-button",on:{click:function(a){return e.toggleFavorite(t)}}},[e._v(" ❤️ ")])]),n("tr",[n("div",{staticClass:"level-up-days"},[n("p",{staticClass:"level-up-heading"},[e._v("Дни повышения уровня:")]),n("p",{staticClass:"level-up-days_2"},[e._v(" "+e._s(t.result))])])])]),n("td",{staticClass:"levels"},[n("tr",[n("p",{staticClass:"character-stat"},[e._v("Нормальная атака: "+e._s(t.firstLevel))]),n("div",{staticClass:"level-control"},[n("button",{staticClass:"level-button_1",on:{click:function(a){return e.decreaseLevel(t,"firstLevel")}}},[e._v("<")]),n("div",{staticClass:"level-bar-container"},[n("div",{staticClass:"level-bar_1",style:{width:1.11*t.firstLevel+"%"}})]),n("button",{staticClass:"level-button_1",on:{click:function(a){return e.increaseLevel(t,"firstLevel")}}},[e._v(">")])])]),n("tr",[n("p",{staticClass:"character-stat"},[e._v("Элементальный навык: "+e._s(t.secondLevel))]),n("div",{staticClass:"level-control"},[n("button",{staticClass:"level-button_2",on:{click:function(a){return e.decreaseLevel(t,"secondLevel")}}},[e._v("<")]),n("div",{staticClass:"level-bar-container"},[n("div",{staticClass:"level-bar_2",style:{width:1.11*t.secondLevel+"%"}})]),n("button",{staticClass:"level-button_2",on:{click:function(a){return e.increaseLevel(t,"secondLevel")}}},[e._v(">")])])]),n("tr",[n("p",{staticClass:"character-stat"},[e._v("Взрыв стихий: "+e._s(t.thirdLevel))]),n("div",{staticClass:"level-control"},[n("button",{staticClass:"level-button_3",on:{click:function(a){return e.decreaseLevel(t,"thirdLevel")}}},[e._v("<")]),n("div",{staticClass:"level-bar-container"},[n("div",{staticClass:"level-bar_3",style:{width:1.11*t.thirdLevel+"%"}})]),n("button",{staticClass:"level-button_3",on:{click:function(a){return e.increaseLevel(t,"thirdLevel")}}},[e._v(">")])])])])])})),0)]):e._e()])]),n("div",{attrs:{id:"app_1"}},[n("footer",{staticClass:"link"},[n("a",{staticClass:"link",attrs:{href:"/"},on:{click:function(t){return t.preventDefault(),e.logoutRequest(t)}}},[n("img",{attrs:{src:a(1436),alt:"About Page"}})])])])])},r=[],i=(a(4284),a(5728),a(228),a(560),a(2506),a(9772),{name:"Main",data:function(){return{action:"main",selectedCharacter:"",name:"",firstLevel:1,secondLevel:1,thirdLevel:1,newCharacter:{name:"F",firstLevel:1,secondLevel:1,thirdLevel:1,imagePath:"https://i.pinimg.com/originals/cb/6b/57/cb6b57826dc61b9f419ad29ddceb9b2f.jpg"},characters:[],showForm:!1,genshinCharacters:[{id:1,name:"Amber",imagePath:"https://cdn.wanderer.moe/genshin-impact/character-icons/ui-avataricon-ambor.png"},{id:2,name:"Barbara",imagePath:"https://cdn.wanderer.moe/genshin-impact/character-icons/ui-avataricon-barbara.png"},{id:3,name:"Beidou",imagePath:"https://cdn.wanderer.moe/genshin-impact/character-icons/ui-avataricon-beidou.png"},{id:4,name:"Bennett",imagePath:"https://cdn.wanderer.moe/genshin-impact/character-icons/ui-avataricon-bennett.png"},{id:5,name:"Chongyun",imagePath:"https://cdn.wanderer.moe/genshin-impact/character-icons/ui-avataricon-chongyun.png"},{id:6,name:"Diluc",imagePath:"https://cdn.wanderer.moe/genshin-impact/character-icons/ui-avataricon-diluc.png"},{id:7,name:"Diona",imagePath:"https://cdn.wanderer.moe/genshin-impact/character-icons/ui-avataricon-diona.png"},{id:8,name:"Eula",imagePath:"https://cdn.wanderer.moe/genshin-impact/character-icons/ui-avataricon-eula.png"},{id:9,name:"Fischl",imagePath:"https://cdn.wanderer.moe/genshin-impact/character-icons/ui-avataricon-fischl.png"},{id:10,name:"Ganyu",imagePath:"https://cdn.wanderer.moe/genshin-impact/character-icons/ui-avataricon-ganyu.png"},{id:11,name:"Hu Tao",imagePath:"https://cdn.wanderer.moe/genshin-impact/character-icons/ui-avataricon-hutao.png"},{id:12,name:"Jean",imagePath:"https://cdn.wanderer.moe/genshin-impact/character-icons/ui-avataricon-qin.png"},{id:13,name:"Kaeya",imagePath:"https://cdn.wanderer.moe/genshin-impact/character-icons/ui-avataricon-kaeya.png"},{id:14,name:"Klee",imagePath:"https://cdn.wanderer.moe/genshin-impact/character-icons/ui-avataricon-klee.png"},{id:15,name:"Lisa",imagePath:"https://cdn.wanderer.moe/genshin-impact/character-icons/ui-avataricon-lisa.png"},{id:16,name:"Mona",imagePath:"https://cdn.wanderer.moe/genshin-impact/character-icons/ui-avataricon-mona.png"},{id:17,name:"Ningguang",imagePath:"https://cdn.wanderer.moe/genshin-impact/character-icons/ui-avataricon-ningguang.png"},{id:18,name:"Noelle",imagePath:"https://cdn.wanderer.moe/genshin-impact/character-icons/ui-avataricon-noel.png"},{id:19,name:"Qiqi",imagePath:"https://cdn.wanderer.moe/genshin-impact/character-icons/ui-avataricon-qiqi.png"},{id:20,name:"Razor",imagePath:"https://cdn.wanderer.moe/genshin-impact/character-icons/ui-avataricon-razor.png"}]}},created:function(){var e=this;this.$axios({method:"get",url:this.$BaseURL+"points"}).then((function(t){e.characters=t.data})).catch((function(e){console.log(e)}))},methods:{addCharacter:function(){var e=this;if(this.newCharacter.name){var t=this.genshinCharacters.find((function(t){return t.name===e.newCharacter.name}));t&&(this.characters.push({name:this.newCharacter.name,firstLevel:this.newCharacter.firstLevel,secondLevel:this.newCharacter.secondLevel,thirdLevel:this.newCharacter.thirdLevel,imagePath:t.imagePath,levelUpDays:this.newCharacter.levelUpDays}),console.log(this.newCharacter.name,this.newCharacter.firstLevel,this.newCharacter.secondLevel,this.newCharacter.thirdLevel),this.addPoint(),this.resetForm(),this.toggleForm())}},resetForm:function(){this.newCharacter={name:"",firstLevel:1,secondLevel:1,thirdLevel:1,levelUpDays:""}},toggleForm:function(){this.showForm=!this.showForm},getCharacterImage:function(e){var t=this.genshinCharacters.find((function(t){return t.name===e}));return t?t.imagePath:"/placeholder-image.jpg"},increaseLevel:function(e,t){e[t]<90&&(e[t]++,this.addPointRequest(e.name,e.firstLevel,e.secondLevel,e.thirdLevel,e.levelUpDays,e.imagePath))},decreaseLevel:function(e,t){e[t]>1&&(e[t]--,this.addPointRequest(e.name,e.firstLevel,e.secondLevel,e.thirdLevel,e.levelUpDays,e.imagePath))},toggleFavorite:function(e){if(e.favorite=!e.favorite,e.favorite){var t=this.characters.indexOf(e);-1!==t&&(this.characters.splice(t,1),this.characters.unshift(e))}else{var a=this.characters.indexOf(e);-1!==a&&(this.characters.splice(a,1),this.characters.push(e))}},logoutRequest:function(){var e=this;this.$axios({method:"post",url:this.$BaseURL+"logout"}).then((function(t){e.response=t,localStorage.removeItem("currentUser"),e.$router.push("/")})).catch((function(e){console.log(e)}))},addPointRequest:function(e,t,a,n,r,i){var c=this,s=localStorage.getItem("currentUser"),o=localStorage.getItem("username");return console.log(e,t,a,n),this.$axios({method:"post",url:this.$BaseURL+"points",headers:{"Content-Type":"application/json",Accept:"application/json",Authorization:s},data:{name:e,firstLevel:t,secondLevel:a,thirdLevel:n,levelUpDays:r,imagePath:i}}).then((function(r){var i=r.data.result,s=c.characters.findIndex((function(t){return t.name===e})),l=c.genshinCharacters.find((function(t){return t.name===e}));-1!==s?(c.$set(c.characters,s,{name:e,firstLevel:t,secondLevel:a,thirdLevel:n,result:i,imagePath:l?l.imagePath:"https://i.pinimg.com/originals/cb/6b/57/cb6b57826dc61b9f419ad29ddceb9b2f.jpg",username:o}),console.log(c.characters)):c.characters.unshift({name:e,firstLevel:t,secondLevel:a,thirdLevel:n,result:i,imagePath:l?l.imagePath:"https://i.pinimg.com/originals/cb/6b/57/cb6b57826dc61b9f419ad29ddceb9b2f.jpg"}),c.response=r,console.log(r)})).catch((function(e){return console.log(e.response.data),!1}))},addPoint:function(){this.newCharacter.name&&this.newCharacter.firstLevel&&this.newCharacter.secondLevel&&this.newCharacter.thirdLevel?(this.addPointRequest(this.newCharacter.name,this.newCharacter.firstLevel,this.newCharacter.secondLevel,this.newCharacter.thirdLevel,this.newCharacter.imagePath),console.log(this.newCharacter.name,this.newCharacter.firstLevel,this.newCharacter.secondLevel,this.newCharacter.thirdLevel)):(console.log("Некоторые или все данные не заполнены"),console.log(this.newCharacter.name,this.newCharacter.firstLevel,this.newCharacter.secondLevel,this.newCharacter.thirdLevel))}}}),c=i,s=a(1001),o=(0,s.Z)(c,n,r,!1,null,null,null),l=o.exports},1436:function(e){e.exports="data:image/png;base64,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"},2960:function(e,t,a){var n=a(4071),r=a(8844),i=a(4413),c=a(690),s=a(6310),o=a(7120),l=r([].push),h=function(e){var t=1===e,a=2===e,r=3===e,h=4===e,d=6===e,u=7===e,v=5===e||d;return function(m,g,f,p){for(var C,w,L=c(m),b=i(L),A=n(g,f),y=s(b),P=0,x=p||o,E=t?x(m,y):a||u?x(m,0):void 0;y>P;P++)if((v||P in b)&&(C=b[P],w=A(C,P,L),e))if(t)E[P]=w;else if(w)switch(e){case 3:return!0;case 5:return C;case 6:return P;case 2:l(E,C)}else switch(e){case 4:return!1;case 7:l(E,C)}return d?-1:r||h?h:E}};e.exports={forEach:h(0),map:h(1),filter:h(2),some:h(3),every:h(4),find:h(5),findIndex:h(6),filterReject:h(7)}},9042:function(e,t,a){var n=a(3689),r=a(4201),i=a(3615),c=r("species");e.exports=function(e){return i>=51||!n((function(){var t=[],a=t.constructor={};return a[c]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},5649:function(e,t,a){var n=a(7697),r=a(2297),i=TypeError,c=Object.getOwnPropertyDescriptor,s=n&&!function(){if(void 0!==this)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(e){return e instanceof TypeError}}();e.exports=s?function(e,t){if(r(e)&&!c(e,"length").writable)throw new i("Cannot set read only .length");return e.length=t}:function(e,t){return e.length=t}},5271:function(e,t,a){var n=a(2297),r=a(9429),i=a(8999),c=a(4201),s=c("species"),o=Array;e.exports=function(e){var t;return n(e)&&(t=e.constructor,r(t)&&(t===o||n(t.prototype))?t=void 0:i(t)&&(t=t[s],null===t&&(t=void 0))),void 0===t?o:t}},7120:function(e,t,a){var n=a(5271);e.exports=function(e,t){return new(n(e))(0===t?0:t)}},6522:function(e,t,a){var n=a(8360),r=a(2560),i=a(5684);e.exports=function(e,t,a){var c=n(t);c in e?r.f(e,c,i(0,a)):e[c]=a}},8494:function(e,t,a){var n=a(3691),r=TypeError;e.exports=function(e,t){if(!delete e[t])throw new r("Cannot delete property "+n(t)+" of "+n(e))}},5565:function(e){var t=TypeError,a=9007199254740991;e.exports=function(e){if(e>a)throw t("Maximum allowed index exceeded");return e}},2297:function(e,t,a){var n=a(6648);e.exports=Array.isArray||function(e){return"Array"===n(e)}},9772:function(e,t,a){var n=a(9989),r=a(2960).findIndex,i=a(7370),c="findIndex",s=!0;c in[]&&Array(1)[c]((function(){s=!1})),n({target:"Array",proto:!0,forced:s},{findIndex:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}}),i(c)},5728:function(e,t,a){var n=a(9989),r=a(2960).find,i=a(7370),c="find",s=!0;c in[]&&Array(1)[c]((function(){s=!1})),n({target:"Array",proto:!0,forced:s},{find:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}}),i(c)},560:function(e,t,a){var n=a(9989),r=a(690),i=a(6310),c=a(5649),s=a(5565),o=a(3689),l=o((function(){return 4294967297!==[].push.call({length:4294967296},1)})),h=function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(e){return e instanceof TypeError}},d=l||!h();n({target:"Array",proto:!0,arity:1,forced:d},{push:function(e){var t=r(this),a=i(t),n=arguments.length;s(a+n);for(var o=0;o<n;o++)t[a]=arguments[o],a++;return c(t,a),a}})},2506:function(e,t,a){var n=a(9989),r=a(690),i=a(7578),c=a(8700),s=a(6310),o=a(5649),l=a(5565),h=a(7120),d=a(6522),u=a(8494),v=a(9042),m=v("splice"),g=Math.max,f=Math.min;n({target:"Array",proto:!0,forced:!m},{splice:function(e,t){var a,n,v,m,p,C,w=r(this),L=s(w),b=i(e,L),A=arguments.length;for(0===A?a=n=0:1===A?(a=0,n=L-b):(a=A-2,n=f(g(c(t),0),L-b)),l(L+a-n),v=h(w,n),m=0;m<n;m++)p=b+m,p in w&&d(v,m,w[p]);if(v.length=n,a<n){for(m=b;m<L-n;m++)p=m+n,C=m+a,p in w?w[C]=w[p]:u(w,C);for(m=L;m>L-n+a;m--)u(w,m-1)}else if(a>n)for(m=L-n;m>b;m--)p=m+n-1,C=m+a-1,p in w?w[C]=w[p]:u(w,C);for(m=0;m<a;m++)w[m+b]=arguments[m+2];return o(w,L-n+a),v}})},4284:function(e,t,a){var n=a(7697),r=a(1236).EXISTS,i=a(8844),c=a(2148),s=Function.prototype,o=i(s.toString),l=/function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/,h=i(l.exec),d="name";n&&!r&&c(s,d,{configurable:!0,get:function(){try{return h(l,o(this))[1]}catch(e){return""}}})}}]);
//# sourceMappingURL=448-legacy.e07f8db7.js.map