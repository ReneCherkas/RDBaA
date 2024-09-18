"use strict";(self["webpackChunklab4"]=self["webpackChunklab4"]||[]).push([[138],{2138:function(e,t,a){a.r(t),a.d(t,{default:function(){return o}});var s=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[s("div",{staticClass:"header"},[s("div",{staticClass:"table_three"},[s("div",[s("button",{staticClass:"add-button",on:{click:e.toggleForm}},[e._v("добавить персонажа")]),e.showForm?s("div",{staticClass:"modal"},[s("form",{on:{submit:function(t){return t.preventDefault(),e.addPoint(t)}}},[s("div",{staticClass:"character-form"},[s("label",{attrs:{for:"genshinCharacter"}},[e._v("Выберите имя персонажа:")]),s("select",{directives:[{name:"model",rawName:"v-model",value:e.newCharacter.name,expression:"newCharacter.name"}],attrs:{id:"genshinCharacter"},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.newCharacter,"name",t.target.multiple?a:a[0])}}},e._l(e.genshinCharacters,(function(t){return s("option",{key:t.id,domProps:{value:t.name}},[e._v(" "+e._s(t.name)+" ")])})),0),e.newCharacter.name?s("div",[s("div",[s("div",{staticClass:"level-control"},[s("label",{attrs:{for:"firstLevelRange"}},[e._v("Уровень 1:")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.newCharacter.firstLevel,expression:"newCharacter.firstLevel"}],staticClass:"level-range",attrs:{type:"range",min:"1",max:"90",id:"firstLevelRange"},domProps:{value:e.newCharacter.firstLevel},on:{__r:function(t){return e.$set(e.newCharacter,"firstLevel",t.target.value)}}}),s("span",[e._v(e._s(e.newCharacter.firstLevel))])])]),s("div",[s("label",{attrs:{for:"secondLevelRange"}},[e._v("Уровень 2:")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.newCharacter.secondLevel,expression:"newCharacter.secondLevel"}],staticClass:"level-range",attrs:{type:"range",min:"1",max:"90",id:"secondLevelRange"},domProps:{value:e.newCharacter.secondLevel},on:{__r:function(t){return e.$set(e.newCharacter,"secondLevel",t.target.value)}}}),s("span",[e._v(e._s(e.newCharacter.secondLevel))])]),s("div",[s("label",{attrs:{for:"thirdLevelRange"}},[e._v("Уровень 3:")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.newCharacter.thirdLevel,expression:"newCharacter.thirdLevel"}],staticClass:"level-range",attrs:{type:"range",min:"1",max:"90",id:"thirdLevelRange"},domProps:{value:e.newCharacter.thirdLevel},on:{__r:function(t){return e.$set(e.newCharacter,"thirdLevel",t.target.value)}}}),s("span",[e._v(e._s(e.newCharacter.thirdLevel))])]),s("button",{attrs:{type:"submit"},on:{click:e.addCharacter}},[e._v("Добавить")])]):e._e()])])]):e._e()]),e.characters.length>0?s("table",[s("tbody",{staticClass:"pers"},e._l(e.characters,(function(t,a){return s("tr",{key:a,class:{favorite:t.favorite}},[s("td",[s("img",{staticStyle:{width:"40%",height:"40%"},attrs:{src:t.imagePath,alt:t.name}})]),s("td",[s("tr",[s("span",{staticClass:"character-name"},[e._v(e._s(t.name))]),s("button",{staticClass:"favorite-button",on:{click:function(a){return e.toggleFavorite(t)}}},[e._v(" ❤️ ")])]),s("tr",[s("div",{staticClass:"level-up-days"},[s("p",[e._v("Дни повышения уровня: "+e._s(t.result))])])])]),s("td",[s("tr",[e._v(" Нормальная атака: "+e._s(t.firstLevel)+" "),s("div",{staticClass:"level-control"},[s("button",{staticClass:"level-button_1",on:{click:function(a){return e.decreaseLevel(t,"firstLevel")}}},[e._v("<")]),s("div",{staticClass:"level-bar-container"},[s("div",{staticClass:"level-bar_1",style:{width:1.11*t.firstLevel+"%"}})]),s("button",{staticClass:"level-button_1",on:{click:function(a){return e.increaseLevel(t,"firstLevel")}}},[e._v(">")])])]),s("tr",[e._v(" Элементальный навык: "+e._s(t.secondLevel)+" "),s("div",{staticClass:"level-control"},[s("button",{staticClass:"level-button_2",on:{click:function(a){return e.decreaseLevel(t,"secondLevel")}}},[e._v("<")]),s("div",{staticClass:"level-bar-container"},[s("div",{staticClass:"level-bar_2",style:{width:1.11*t.secondLevel+"%"}})]),s("button",{staticClass:"level-button_2",on:{click:function(a){return e.increaseLevel(t,"secondLevel")}}},[e._v(">")])])]),s("tr",[e._v(" Взрыв стихий: "+e._s(t.thirdLevel)+" "),s("div",{staticClass:"level-control"},[s("button",{staticClass:"level-button_3",on:{click:function(a){return e.decreaseLevel(t,"thirdLevel")}}},[e._v("<")]),s("div",{staticClass:"level-bar-container"},[s("div",{staticClass:"level-bar_3",style:{width:1.11*t.thirdLevel+"%"}})]),s("button",{staticClass:"level-button_3",on:{click:function(a){return e.increaseLevel(t,"thirdLevel")}}},[e._v(">")])])])])])})),0)]):e._e()])]),s("div",{attrs:{id:"app_1"}},[s("footer",{staticClass:"link"},[s("a",{staticClass:"link",attrs:{href:"/"},on:{click:function(t){return t.preventDefault(),e.logoutRequest(t)}}},[s("img",{attrs:{src:a(1436),alt:"About Page"}})])])])])},i=[],r=(a(560),{name:"Main",data(){return{action:"main",selectedCharacter:"",name:"",firstLevel:1,secondLevel:1,thirdLevel:1,newCharacter:{name:"F",firstLevel:1,secondLevel:1,thirdLevel:1,imagePath:"https://i.pinimg.com/originals/cb/6b/57/cb6b57826dc61b9f419ad29ddceb9b2f.jpg"},characters:[],showForm:!1,genshinCharacters:[{id:1,name:"Amber",imagePath:"https://w0.peakpx.com/wallpaper/1/448/HD-wallpaper-video-game-genshin-impact-amber-genshin-impact.jpg",levelUpDays:"ПН ВТ ВС"},{id:2,name:"Barbara",imagePath:"https://w.forfun.com/fetch/2d/2d808e12eff0a821ac8fb1c7b70d5ccf.jpeg"},{id:3,name:"Beidou",imagePath:"https://images8.alphacoders.com/110/1109824.png"},{id:4,name:"Bennett",imagePath:"https://w.forfun.com/fetch/d3/d33f333e466fc048944d056a56bff2af.jpeg"},{id:5,name:"Chongyun",imagePath:"https://cdn.mos.cms.futurecdn.net/RcA6MYmVUUdJSbLzUpf5XY.png"},{id:6,name:"Diluc",imagePath:"https://w.forfun.com/fetch/9a/9a11699fe9b884606f08f59abcdc08d1.jpeg"},{id:7,name:"Diona",imagePath:"https://volsiz.ru/wp-content/uploads/2022/08/weacrmayfv3dlhkyzukdab.jpg"},{id:8,name:"Eula",imagePath:"https://volsiz.ru/wp-content/uploads/2022/08/zvxz5hwytxwm6m8ogqwthc.jpg"},{id:9,name:"Fischl",imagePath:"https://rerollcdn.com/GENSHIN/Characters/1/Fischl.png"},{id:10,name:"Ganyu",imagePath:"https://i1.wp.com/traveler.gg/wp-content/uploads/Ganyu-Portrait.png?fit=2154%2C1320&ssl=1"},{id:11,name:"Hu Tao",imagePath:"https://w.forfun.com/fetch/30/300baf40bdb2bfe313364a07ca32dad0.jpeg"},{id:12,name:"Jean",imagePath:"https://imagesvc.meredithcorp.io/v3/mm/image?url=https://www.pockettactics.com/wp-content/uploads/2020/09/genshin-impact-tier-list-2.jpg"},{id:13,name:"Kaeya",imagePath:"https://i.pinimg.com/originals/26/5b/4c/265b4c3cd73695ee17f8a5d91c86ee3a.jpg"},{id:14,name:"Klee",imagePath:"https://i.pinimg.com/originals/da/9a/30/da9a30bb1ec0b4c432f835b95ee6bdd2.jpg"},{id:15,name:"Lisa",imagePath:"https://mundogenshinimpact.com/wp-content/uploads/Gesnhin-Impact-Lisa.png"},{id:16,name:"Mona",imagePath:"https://i.playground.ru/i/pix/3089906/image.jpg"},{id:17,name:"Ningguang",imagePath:"https://i.pinimg.com/originals/0e/66/ab/0e66abd9206b3c65a26503853ee68db0.png"},{id:18,name:"Noelle",imagePath:"https://wallpapercave.com/wp/wp8505426.png"},{id:19,name:"Qiqi",imagePath:"https://besthqwallpapers.com/Uploads/19-1-2021/152617/qiqi-artwork-genshin-impact-kaeya-alberich-ghosts.jpg"},{id:20,name:"Razor",imagePath:"https://avatars.mds.yandex.net/get-mpic/5234219/img_id3919635833406184053.jpeg/orig"}]}},created(){this.$axios({method:"get",url:this.$BaseURL+"points"}).then((e=>{this.characters=e.data})).catch((e=>{console.log(e)}))},methods:{addCharacter(){if(this.newCharacter.name){const e=this.genshinCharacters.find((e=>e.name===this.newCharacter.name));e&&(this.characters.push({name:this.newCharacter.name,firstLevel:this.newCharacter.firstLevel,secondLevel:this.newCharacter.secondLevel,thirdLevel:this.newCharacter.thirdLevel,imagePath:e.imagePath,levelUpDays:this.newCharacter.levelUpDays}),console.log(this.newCharacter.name,this.newCharacter.firstLevel,this.newCharacter.secondLevel,this.newCharacter.thirdLevel),this.addPoint(),this.resetForm(),this.toggleForm())}},resetForm(){this.newCharacter={name:"",firstLevel:1,secondLevel:1,thirdLevel:1,levelUpDays:""}},toggleForm(){this.showForm=!this.showForm},getCharacterImage(e){const t=this.genshinCharacters.find((t=>t.name===e));return t?t.imagePath:"/placeholder-image.jpg"},increaseLevel(e,t){e[t]<90&&(e[t]++,this.addPointRequest(e.name,e.firstLevel,e.secondLevel,e.thirdLevel,e.levelUpDays,e.imagePath))},decreaseLevel(e,t){e[t]>1&&(e[t]--,this.addPointRequest(e.name,e.firstLevel,e.secondLevel,e.thirdLevel,e.levelUpDays,e.imagePath))},toggleFavorite(e){if(e.favorite=!e.favorite,e.favorite){const t=this.characters.indexOf(e);-1!==t&&(this.characters.splice(t,1),this.characters.unshift(e))}else{const t=this.characters.indexOf(e);-1!==t&&(this.characters.splice(t,1),this.characters.push(e))}},logoutRequest:function(){this.$axios({method:"post",url:this.$BaseURL+"logout"}).then((e=>{this.response=e,localStorage.removeItem("currentUser"),this.$router.push("/")})).catch((e=>{console.log(e)}))},addPointRequest:function(e,t,a,s,i,r){let n=localStorage.getItem("currentUser"),c=localStorage.getItem("username");return console.log(e,t,a,s),this.$axios({method:"post",url:this.$BaseURL+"points",headers:{"Content-Type":"application/json",Accept:"application/json",Authorization:n},data:{name:e,firstLevel:t,secondLevel:a,thirdLevel:s,levelUpDays:i,imagePath:r}}).then((i=>{let r=i.data.result;const n=this.characters.findIndex((t=>t.name===e)),l=this.genshinCharacters.find((t=>t.name===e));-1!==n?(this.$set(this.characters,n,{name:e,firstLevel:t,secondLevel:a,thirdLevel:s,result:r,imagePath:l?l.imagePath:"https://i.pinimg.com/originals/cb/6b/57/cb6b57826dc61b9f419ad29ddceb9b2f.jpg",username:c}),console.log(this.characters)):this.characters.unshift({name:e,firstLevel:t,secondLevel:a,thirdLevel:s,result:r,imagePath:l?l.imagePath:"https://i.pinimg.com/originals/cb/6b/57/cb6b57826dc61b9f419ad29ddceb9b2f.jpg"}),this.response=i,console.log(i)})).catch((e=>(console.log(e.response.data),!1)))},addPoint:function(){this.newCharacter.name&&this.newCharacter.firstLevel&&this.newCharacter.secondLevel&&this.newCharacter.thirdLevel?(this.addPointRequest(this.newCharacter.name,this.newCharacter.firstLevel,this.newCharacter.secondLevel,this.newCharacter.thirdLevel,this.newCharacter.imagePath),console.log(this.newCharacter.name,this.newCharacter.firstLevel,this.newCharacter.secondLevel,this.newCharacter.thirdLevel)):(console.log("Некоторые или все данные не заполнены"),console.log(this.newCharacter.name,this.newCharacter.firstLevel,this.newCharacter.secondLevel,this.newCharacter.thirdLevel))}}}),n=r,c=a(1001),l=(0,c.Z)(n,s,i,!1,null,null,null),o=l.exports},1436:function(e){e.exports="data:image/png;base64,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"}}]);
//# sourceMappingURL=138.2af62c27.js.map