"use strict";(self["webpackChunklab4"]=self["webpackChunklab4"]||[]).push([[282],{4282:function(e,t,a){a.r(t),a.d(t,{default:function(){return l}});var r=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("div",{staticClass:"header"},[r("div",{staticClass:"table_three"},[r("div",[r("button",{staticClass:"add-button",on:{click:e.toggleForm}},[e._v("добавить персонажа")]),e.showForm?r("div",{staticClass:"modal"},[r("form",{on:{submit:function(t){return t.preventDefault(),e.addPoint(t)}}},[r("div",{staticClass:"character-form"},[r("label",{attrs:{for:"genshinCharacter"}},[e._v("Выберите имя персонажа:")]),r("select",{directives:[{name:"model",rawName:"v-model",value:e.newCharacter.name,expression:"newCharacter.name"}],attrs:{id:"genshinCharacter"},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.newCharacter,"name",t.target.multiple?a:a[0])}}},e._l(e.genshinCharacters,(function(t){return r("option",{key:t.id,domProps:{value:t.name}},[e._v(" "+e._s(t.name)+" ")])})),0),e.newCharacter.name?r("div",[r("div",[r("div",{staticClass:"level-control"},[r("label",{attrs:{for:"firstLevelRange"}},[e._v("Уровень 1:")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.newCharacter.firstLevel,expression:"newCharacter.firstLevel"}],staticClass:"level-range",attrs:{type:"range",min:"1",max:"90",id:"firstLevelRange"},domProps:{value:e.newCharacter.firstLevel},on:{__r:function(t){return e.$set(e.newCharacter,"firstLevel",t.target.value)}}}),r("span",[e._v(e._s(e.newCharacter.firstLevel))])])]),r("div",[r("label",{attrs:{for:"secondLevelRange"}},[e._v("Уровень 2:")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.newCharacter.secondLevel,expression:"newCharacter.secondLevel"}],staticClass:"level-range",attrs:{type:"range",min:"1",max:"90",id:"secondLevelRange"},domProps:{value:e.newCharacter.secondLevel},on:{__r:function(t){return e.$set(e.newCharacter,"secondLevel",t.target.value)}}}),r("span",[e._v(e._s(e.newCharacter.secondLevel))])]),r("div",[r("label",{attrs:{for:"thirdLevelRange"}},[e._v("Уровень 3:")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.newCharacter.thirdLevel,expression:"newCharacter.thirdLevel"}],staticClass:"level-range",attrs:{type:"range",min:"1",max:"90",id:"thirdLevelRange"},domProps:{value:e.newCharacter.thirdLevel},on:{__r:function(t){return e.$set(e.newCharacter,"thirdLevel",t.target.value)}}}),r("span",[e._v(e._s(e.newCharacter.thirdLevel))])]),r("button",{attrs:{type:"submit"},on:{click:e.addCharacter}},[e._v("Добавить")])]):e._e()])])]):e._e()]),e.characters.length>0?r("table",[r("tbody",{staticClass:"pers"},e._l(e.characters,(function(t,a){return r("tr",{key:a,class:{favorite:t.favorite}},[r("td",[r("img",{staticStyle:{width:"40%",height:"40%"},attrs:{src:t.imagePath,alt:t.name}})]),r("td",[r("tr",[e._v(" "+e._s(t.name)+" "),r("button",{on:{click:function(a){return e.toggleFavorite(t)}}},[r("img",{staticClass:"img",attrs:{src:"https://icon-library.com/images/like-png-icon/like-png-icon-26.jpg",alt:"About"}})])]),r("tr",[r("div",{staticClass:"level-up-days"},[r("p",[e._v("Дни повышения уровня: "+e._s(t.result))])])])]),r("td",[r("tr",[e._v(" Нормальная атака: "+e._s(t.firstLevel)+" "),r("div",{staticClass:"level-control"},[r("button",{staticClass:"level-button_1",on:{click:function(a){return e.decreaseLevel(t,"firstLevel")}}},[e._v("<")]),r("div",{staticClass:"level-bar-container"},[r("div",{staticClass:"level-bar_1",style:{width:1.11*t.firstLevel+"%"}})]),r("button",{staticClass:"level-button_1",on:{click:function(a){return e.increaseLevel(t,"firstLevel")}}},[e._v(">")])])]),r("tr",[e._v(" Элементальный навык: "+e._s(t.secondLevel)+" "),r("div",{staticClass:"level-control"},[r("button",{staticClass:"level-button_2",on:{click:function(a){return e.decreaseLevel(t,"secondLevel")}}},[e._v("<")]),r("div",{staticClass:"level-bar-container"},[r("div",{staticClass:"level-bar_2",style:{width:1.11*t.secondLevel+"%"}})]),r("button",{staticClass:"level-button_2",on:{click:function(a){return e.increaseLevel(t,"secondLevel")}}},[e._v(">")])])]),r("tr",[e._v(" Взрыв стихий: "+e._s(t.thirdLevel)+" "),r("div",{staticClass:"level-control"},[r("button",{staticClass:"level-button_3",on:{click:function(a){return e.decreaseLevel(t,"thirdLevel")}}},[e._v("<")]),r("div",{staticClass:"level-bar-container"},[r("div",{staticClass:"level-bar_3",style:{width:1.11*t.thirdLevel+"%"}})]),r("button",{staticClass:"level-button_3",on:{click:function(a){return e.increaseLevel(t,"thirdLevel")}}},[e._v(">")])])])])])})),0)]):e._e()])]),r("div",{attrs:{id:"app_1"}},[r("footer",{staticClass:"link"},[r("a",{staticClass:"link",attrs:{href:"/"},on:{click:function(t){return t.preventDefault(),e.logoutRequest(t)}}},[r("img",{attrs:{src:a(1436),alt:"About Page"}})])])])])},n=[],i=(a(4284),a(5728),a(228),a(560),a(2506),a(9772),{name:"Main",data:function(){return{action:"main",selectedCharacter:"",name:"",firstLevel:1,secondLevel:1,thirdLevel:1,newCharacter:{name:"F",firstLevel:1,secondLevel:1,thirdLevel:1},Genshin_Characters:[{name:"Amber",firstLevel:23,secondLevel:42,thirdLevel:67}],characters:[],showForm:!1,genshinCharacters:[{id:1,name:"Amber",imagePath:"https://w0.peakpx.com/wallpaper/1/448/HD-wallpaper-video-game-genshin-impact-amber-genshin-impact.jpg",levelUpDays:"ПН ВТ ВС"},{id:2,name:"Barbara",imagePath:"https://w.forfun.com/fetch/2d/2d808e12eff0a821ac8fb1c7b70d5ccf.jpeg"},{id:3,name:"Beidou",imagePath:"https://images8.alphacoders.com/110/1109824.png"},{id:4,name:"Bennett",imagePath:"https://w.forfun.com/fetch/d3/d33f333e466fc048944d056a56bff2af.jpeg"},{id:5,name:"Chongyun",imagePath:"https://cdn.mos.cms.futurecdn.net/RcA6MYmVUUdJSbLzUpf5XY.png"},{id:6,name:"Diluc",imagePath:"https://w.forfun.com/fetch/9a/9a11699fe9b884606f08f59abcdc08d1.jpeg"},{id:7,name:"Diona",imagePath:"https://volsiz.ru/wp-content/uploads/2022/08/weacrmayfv3dlhkyzukdab.jpg"},{id:8,name:"Eula",imagePath:"https://volsiz.ru/wp-content/uploads/2022/08/zvxz5hwytxwm6m8ogqwthc.jpg"},{id:9,name:"Fischl",imagePath:"https://rerollcdn.com/GENSHIN/Characters/1/Fischl.png"},{id:10,name:"Ganyu",imagePath:"https://i1.wp.com/traveler.gg/wp-content/uploads/Ganyu-Portrait.png?fit=2154%2C1320&ssl=1"},{id:11,name:"Hu Tao",imagePath:"https://w.forfun.com/fetch/30/300baf40bdb2bfe313364a07ca32dad0.jpeg"},{id:12,name:"Jean",imagePath:"https://imagesvc.meredithcorp.io/v3/mm/image?url=https://www.pockettactics.com/wp-content/uploads/2020/09/genshin-impact-tier-list-2.jpg"},{id:13,name:"Kaeya",imagePath:"https://i.pinimg.com/originals/26/5b/4c/265b4c3cd73695ee17f8a5d91c86ee3a.jpg"},{id:14,name:"Klee",imagePath:"https://i.pinimg.com/originals/da/9a/30/da9a30bb1ec0b4c432f835b95ee6bdd2.jpg"},{id:15,name:"Lisa",imagePath:"https://mundogenshinimpact.com/wp-content/uploads/Gesnhin-Impact-Lisa.png"},{id:16,name:"Mona",imagePath:"https://i.playground.ru/i/pix/3089906/image.jpg"},{id:17,name:"Ningguang",imagePath:"https://i.pinimg.com/originals/0e/66/ab/0e66abd9206b3c65a26503853ee68db0.png"},{id:18,name:"Noelle",imagePath:"https://wallpapercave.com/wp/wp8505426.png"},{id:19,name:"Qiqi",imagePath:"https://besthqwallpapers.com/Uploads/19-1-2021/152617/qiqi-artwork-genshin-impact-kaeya-alberich-ghosts.jpg"},{id:20,name:"Razor",imagePath:"https://avatars.mds.yandex.net/get-mpic/5234219/img_id3919635833406184053.jpeg/orig"}]}},created:function(){var e=this;this.$axios({method:"get",url:this.$BaseURL+"points"}).then((function(t){e.characters=t.data})).catch((function(e){console.log(e)}))},methods:{addCharacter:function(){var e=this;if(this.newCharacter.name){var t=this.genshinCharacters.find((function(t){return t.name===e.newCharacter.name}));t&&(this.characters.push({name:this.newCharacter.name,firstLevel:this.newCharacter.firstLevel,secondLevel:this.newCharacter.secondLevel,thirdLevel:this.newCharacter.thirdLevel,imagePath:t.imagePath,levelUpDays:this.newCharacter.levelUpDays}),console.log(this.newCharacter.name,this.newCharacter.firstLevel,this.newCharacter.secondLevel,this.newCharacter.thirdLevel),this.addPoint(),this.resetForm(),this.toggleForm())}},resetForm:function(){this.newCharacter={name:"",firstLevel:1,secondLevel:1,thirdLevel:1,levelUpDays:""}},toggleForm:function(){this.showForm=!this.showForm},getCharacterImage:function(e){var t=this.genshinCharacters.find((function(t){return t.name===e}));return t?t.imagePath:"/placeholder-image.jpg"},increaseLevel:function(e,t){e[t]<90&&(e[t]++,this.addPointRequest(e.name,e.firstLevel,e.secondLevel,e.thirdLevel,e.levelUpDays))},decreaseLevel:function(e,t){e[t]>1&&(e[t]--,this.addPointRequest(e.name,e.firstLevel,e.secondLevel,e.thirdLevel,e.levelUpDays))},toggleFavorite:function(e){if(e.favorite=!e.favorite,e.favorite){var t=this.characters.indexOf(e);-1!==t&&(this.characters.splice(t,1),this.characters.unshift(e))}else{var a=this.characters.indexOf(e);-1!==a&&(this.characters.splice(a,1),this.characters.push(e))}},logoutRequest:function(){var e=this;this.$axios({method:"post",url:this.$BaseURL+"logout"}).then((function(t){e.response=t,localStorage.removeItem("currentUser"),e.$router.push("/")})).catch((function(e){console.log(e)}))},addPointRequest:function(e,t,a,r,n){var i=this,s=localStorage.getItem("currentUser"),c=localStorage.getItem("username");return console.log(e,t,a,r),this.$axios({method:"put",url:this.$BaseURL+"points",headers:{"Content-Type":"application/json",Accept:"application/json",Authorization:s},data:{name:e,firstLevel:t,secondLevel:a,thirdLevel:r,levelUpDays:n}}).then((function(n){var s=n.data.result,o=i.characters.findIndex((function(t){return t.name===e})),l=i.genshinCharacters.find((function(t){return t.name===e}));-1!==o?(i.$set(i.characters,o,{name:e,firstLevel:t,secondLevel:a,thirdLevel:r,result:s,imagePath:l?l.imagePath:"/placeholder-image.jpg",username:c}),console.log(i.characters)):i.characters.unshift({name:e,firstLevel:t,secondLevel:a,thirdLevel:r,result:s,imagePath:l?l.imagePath:"/placeholder-image.jpg"}),i.response=n,console.log(n)})).catch((function(e){return console.log(e.response.data),!1}))},addPoint:function(){this.newCharacter.name&&this.newCharacter.firstLevel&&this.newCharacter.secondLevel&&this.newCharacter.thirdLevel?(this.addPointRequest(this.newCharacter.name,this.newCharacter.firstLevel,this.newCharacter.secondLevel,this.newCharacter.thirdLevel),console.log(this.newCharacter.name,this.newCharacter.firstLevel,this.newCharacter.secondLevel,this.newCharacter.thirdLevel)):(console.log("Некоторые или все данные не заполнены"),console.log(this.newCharacter.name,this.newCharacter.firstLevel,this.newCharacter.secondLevel,this.newCharacter.thirdLevel))}}}),s=i,c=a(1001),o=(0,c.Z)(s,r,n,!1,null,null,null),l=o.exports},1436:function(e){e.exports="data:image/png;base64,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"},2960:function(e,t,a){var r=a(4071),n=a(8844),i=a(4413),s=a(690),c=a(6310),o=a(7120),l=n([].push),h=function(e){var t=1===e,a=2===e,n=3===e,h=4===e,u=6===e,d=7===e,v=5===e||u;return function(f,m,p,g){for(var C,w,L=s(f),b=i(L),A=r(m,p),y=c(b),x=0,P=g||o,j=t?P(f,y):a||d?P(f,0):void 0;y>x;x++)if((v||x in b)&&(C=b[x],w=A(C,x,L),e))if(t)j[x]=w;else if(w)switch(e){case 3:return!0;case 5:return C;case 6:return x;case 2:l(j,C)}else switch(e){case 4:return!1;case 7:l(j,C)}return u?-1:n||h?h:j}};e.exports={forEach:h(0),map:h(1),filter:h(2),some:h(3),every:h(4),find:h(5),findIndex:h(6),filterReject:h(7)}},9042:function(e,t,a){var r=a(3689),n=a(4201),i=a(3615),s=n("species");e.exports=function(e){return i>=51||!r((function(){var t=[],a=t.constructor={};return a[s]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},5649:function(e,t,a){var r=a(7697),n=a(2297),i=TypeError,s=Object.getOwnPropertyDescriptor,c=r&&!function(){if(void 0!==this)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(e){return e instanceof TypeError}}();e.exports=c?function(e,t){if(n(e)&&!s(e,"length").writable)throw new i("Cannot set read only .length");return e.length=t}:function(e,t){return e.length=t}},5271:function(e,t,a){var r=a(2297),n=a(9429),i=a(8999),s=a(4201),c=s("species"),o=Array;e.exports=function(e){var t;return r(e)&&(t=e.constructor,n(t)&&(t===o||r(t.prototype))?t=void 0:i(t)&&(t=t[c],null===t&&(t=void 0))),void 0===t?o:t}},7120:function(e,t,a){var r=a(5271);e.exports=function(e,t){return new(r(e))(0===t?0:t)}},6522:function(e,t,a){var r=a(8360),n=a(2560),i=a(5684);e.exports=function(e,t,a){var s=r(t);s in e?n.f(e,s,i(0,a)):e[s]=a}},8494:function(e,t,a){var r=a(3691),n=TypeError;e.exports=function(e,t){if(!delete e[t])throw new n("Cannot delete property "+r(t)+" of "+r(e))}},5565:function(e){var t=TypeError,a=9007199254740991;e.exports=function(e){if(e>a)throw t("Maximum allowed index exceeded");return e}},2297:function(e,t,a){var r=a(6648);e.exports=Array.isArray||function(e){return"Array"===r(e)}},9772:function(e,t,a){var r=a(9989),n=a(2960).findIndex,i=a(7370),s="findIndex",c=!0;s in[]&&Array(1)[s]((function(){c=!1})),r({target:"Array",proto:!0,forced:c},{findIndex:function(e){return n(this,e,arguments.length>1?arguments[1]:void 0)}}),i(s)},5728:function(e,t,a){var r=a(9989),n=a(2960).find,i=a(7370),s="find",c=!0;s in[]&&Array(1)[s]((function(){c=!1})),r({target:"Array",proto:!0,forced:c},{find:function(e){return n(this,e,arguments.length>1?arguments[1]:void 0)}}),i(s)},560:function(e,t,a){var r=a(9989),n=a(690),i=a(6310),s=a(5649),c=a(5565),o=a(3689),l=o((function(){return 4294967297!==[].push.call({length:4294967296},1)})),h=function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(e){return e instanceof TypeError}},u=l||!h();r({target:"Array",proto:!0,arity:1,forced:u},{push:function(e){var t=n(this),a=i(t),r=arguments.length;c(a+r);for(var o=0;o<r;o++)t[a]=arguments[o],a++;return s(t,a),a}})},2506:function(e,t,a){var r=a(9989),n=a(690),i=a(7578),s=a(8700),c=a(6310),o=a(5649),l=a(5565),h=a(7120),u=a(6522),d=a(8494),v=a(9042),f=v("splice"),m=Math.max,p=Math.min;r({target:"Array",proto:!0,forced:!f},{splice:function(e,t){var a,r,v,f,g,C,w=n(this),L=c(w),b=i(e,L),A=arguments.length;for(0===A?a=r=0:1===A?(a=0,r=L-b):(a=A-2,r=p(m(s(t),0),L-b)),l(L+a-r),v=h(w,r),f=0;f<r;f++)g=b+f,g in w&&u(v,f,w[g]);if(v.length=r,a<r){for(f=b;f<L-r;f++)g=f+r,C=f+a,g in w?w[C]=w[g]:d(w,C);for(f=L;f>L-r+a;f--)d(w,f-1)}else if(a>r)for(f=L-r;f>b;f--)g=f+r-1,C=f+a-1,g in w?w[C]=w[g]:d(w,C);for(f=0;f<a;f++)w[f+b]=arguments[f+2];return o(w,L-r+a),v}})},4284:function(e,t,a){var r=a(7697),n=a(1236).EXISTS,i=a(8844),s=a(2148),c=Function.prototype,o=i(c.toString),l=/function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/,h=i(l.exec),u="name";r&&!n&&s(c,u,{configurable:!0,get:function(){try{return h(l,o(this))[1]}catch(e){return""}}})}}]);
//# sourceMappingURL=282-legacy.ed92c646.js.map