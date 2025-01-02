"use strict";(self["webpackChunklab4"]=self["webpackChunklab4"]||[]).push([[794],{7794:function(e,t,a){a.r(t),a.d(t,{default:function(){return d}});var n=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"header"},[n("footer",{staticClass:"link_cal"},[n("router-link",{attrs:{to:{name:"strategy"}}},[n("img",{staticClass:"link_cal",attrs:{src:a(7251),alt:"Strategy"}})])],1),n("div",{staticClass:"table_three"},[n("div",[n("button",{staticClass:"add-button",on:{click:e.toggleForm}},[e._v("добавить персонажа")]),e.showForm?n("div",{staticClass:"modal"},[n("form",{on:{submit:function(t){return t.preventDefault(),e.addPoint(t)}}},[n("div",{staticClass:"character-form"},[n("label",{attrs:{for:"genshinCharacter"}},[e._v("Выберите имя персонажа:")]),n("select",{directives:[{name:"model",rawName:"v-model",value:e.newCharacter.name,expression:"newCharacter.name"}],attrs:{id:"genshinCharacter"},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.newCharacter,"name",t.target.multiple?a:a[0])}}},e._l(e.genshinCharacters,(function(t){return n("option",{key:t.id,domProps:{value:t.name}},[e._v(" "+e._s(t.name)+" ")])})),0),e.newCharacter.name?n("div",[n("div",[n("div",{staticClass:"level-control"},[n("label",{attrs:{for:"LevelRange"}},[e._v("Уровень вашего персонажа:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.newCharacter.level,expression:"newCharacter.level"}],staticClass:"level-range",attrs:{type:"range",min:"1",max:"90",id:"LevelRange"},domProps:{value:e.newCharacter.level},on:{__r:function(t){return e.$set(e.newCharacter,"level",t.target.value)}}}),n("span",[e._v(e._s(e.newCharacter.level))])])]),n("div",[n("div",{staticClass:"level-control"},[n("label",{attrs:{for:"attackLevelRange"}},[e._v("Уровень нормальной атаки:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.newCharacter.attackLevel,expression:"newCharacter.attackLevel"}],staticClass:"level-range",attrs:{type:"range",min:"1",max:"90",id:"attackLevelRange"},domProps:{value:e.newCharacter.attackLevel},on:{__r:function(t){return e.$set(e.newCharacter,"attackLevel",t.target.value)}}}),n("span",[e._v(e._s(e.newCharacter.attackLevel))])])]),n("div",{staticClass:"level-control"},[n("label",{attrs:{for:"elementalSkillLevelRange"}},[e._v("Уровень элементарного навыка:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.newCharacter.elementalSkillLevel,expression:"newCharacter.elementalSkillLevel"}],staticClass:"level-range",attrs:{type:"range",min:"1",max:"90",id:"elementalSkillLevelRange"},domProps:{value:e.newCharacter.elementalSkillLevel},on:{__r:function(t){return e.$set(e.newCharacter,"elementalSkillLevel",t.target.value)}}}),n("span",[e._v(e._s(e.newCharacter.elementalSkillLevel))])]),n("div",{staticClass:"level-control"},[n("label",{attrs:{for:"elementalBurstLevelRange"}},[e._v("Уровень взрыва стикий:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.newCharacter.elementalBurstLevel,expression:"newCharacter.elementalBurstLevel"}],staticClass:"level-range",attrs:{type:"range",min:"1",max:"90",id:"elementalBurstLevelRange"},domProps:{value:e.newCharacter.elementalBurstLevel},on:{__r:function(t){return e.$set(e.newCharacter,"elementalBurstLevel",t.target.value)}}}),n("span",[e._v(e._s(e.newCharacter.elementalBurstLevel))])]),n("button",{staticClass:"add-button",attrs:{type:"submit"},on:{click:e.addCharacter}},[e._v("Добавить")])]):e._e()])])]):e._e()]),e.characters.length>0?n("table",[n("tbody",{staticClass:"pers"},e._l(e.characters,(function(t,a){return n("tr",{key:a,class:{favorite:t.favorite}},[n("td",[n("img",{staticClass:"character-image",attrs:{src:t.imagePath,alt:t.name}})]),n("td",[n("tr",[n("span",{staticClass:"character-name"},[e._v(e._s(t.name))]),n("button",{staticClass:"favorite-button",on:{click:function(a){return e.toggleFavorite(t)}}},[e._v(" ❤️ ")])]),n("tr",[n("div",{staticClass:"level-up-days"},[n("p",{staticClass:"level-up-heading"},[e._v("Дни повышения уровня:")]),n("p",{staticClass:"level-up-days_2"},[e._v(" "+e._s(t.result))])])])]),n("td",{staticClass:"levels"},[n("tr",[n("p",{staticClass:"character-stat"},[e._v("Уровень персонажа: "+e._s(t.Level))]),n("div",{staticClass:"level-control"},[n("button",{staticClass:"level-button",on:{click:function(a){return e.decreaseLevel(t,"Level")}}},[e._v("<")]),n("div",{staticClass:"level-bar-container"},[n("div",{staticClass:"level-bar",style:{width:1.11*t.Level+"%"}})]),n("button",{staticClass:"level-button",on:{click:function(a){return e.increaseLevel(t,"Level")}}},[e._v(">")])])]),n("tr",[n("p",{staticClass:"character-stat"},[e._v("Нормальная атака: "+e._s(t.attackLevel))]),n("div",{staticClass:"level-control"},[n("button",{staticClass:"level-button_1",on:{click:function(a){return e.decreaseLevel(t,"attackLevel")}}},[e._v("<")]),n("div",{staticClass:"level-bar-container"},[n("div",{staticClass:"level-bar_1",style:{width:1.11*t.attackLevel+"%"}})]),n("button",{staticClass:"level-button_1",on:{click:function(a){return e.increaseLevel(t,"attackLevel")}}},[e._v(">")])])]),n("tr"),n("tr",[n("p",{staticClass:"character-stat"},[e._v("Элементальный навык: "+e._s(t.elementalSkillLevel))]),n("div",{staticClass:"level-control"},[n("button",{staticClass:"level-button_2",on:{click:function(a){return e.decreaseLevel(t,"elementalSkillLevel")}}},[e._v("<")]),n("div",{staticClass:"level-bar-container"},[n("div",{staticClass:"level-bar_2",style:{width:1.11*t.elementalSkillLevel+"%"}})]),n("button",{staticClass:"level-button_2",on:{click:function(a){return e.increaseLevel(t,"elementalSkillLevel")}}},[e._v(">")])])]),n("tr",[n("p",{staticClass:"character-stat"},[e._v("Взрыв стихий: "+e._s(t.elementalBurstLevel))]),n("div",{staticClass:"level-control"},[n("button",{staticClass:"level-button_3",on:{click:function(a){return e.decreaseLevel(t,"elementalBurstLevel")}}},[e._v("<")]),n("div",{staticClass:"level-bar-container"},[n("div",{staticClass:"level-bar_3",style:{width:1.11*t.elementalBurstLevel+"%"}})]),n("button",{staticClass:"level-button_3",on:{click:function(a){return e.increaseLevel(t,"elementalBurstLevel")}}},[e._v(">")])])])])])})),0)]):e._e()]),n("div",{staticClass:"table_three_weapon"},[n("div",[n("button",{staticClass:"add-button",on:{click:e.toggleForm_weapon}},[e._v("добавить оружие")]),e.showForm_weapon?n("div",{staticClass:"modal"},[n("form",{on:{submit:function(t){return t.preventDefault(),e.addPoint_weapon(t)}}},[n("div",{staticClass:"character-form"},[n("label",{attrs:{for:"genshinWeapon"}},[e._v("Выберите имя персонажа:")]),n("select",{directives:[{name:"model",rawName:"v-model",value:e.newWeapon.name,expression:"newWeapon.name"}],attrs:{id:"genshinWeapon"},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.newWeapon,"name",t.target.multiple?a:a[0])}}},e._l(e.genshinWeapon,(function(t){return n("option",{key:t.id,domProps:{value:t.name}},[e._v(" "+e._s(t.name)+" ")])})),0),e.newWeapon.name?n("div",[n("div",[n("div",{staticClass:"level-control"},[n("label",{attrs:{for:"LevelRange"}},[e._v("Уровень таланта:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.newWeapon.level,expression:"newWeapon.level"}],staticClass:"level-range",attrs:{type:"range",min:"1",max:"90",id:"LevelRange"},domProps:{value:e.newWeapon.level},on:{__r:function(t){return e.$set(e.newWeapon,"level",t.target.value)}}}),n("span",[e._v(e._s(e.newWeapon.level))])])]),n("button",{staticClass:"add-button",attrs:{type:"submit"},on:{click:e.addWeapon}},[e._v("Добавить")])]):e._e()])])]):e._e()]),e.weapons.length>0?n("table",[n("tbody",{staticClass:"pers"},e._l(e.weapons,(function(t,a){return n("tr",{key:a,class:{favorite:t.favorite}},[n("td",[n("img",{staticClass:"character-image",attrs:{src:t.imagePath,alt:t.name}})]),n("td",[n("tr",[n("span",{staticClass:"character-name"},[e._v(e._s(t.name))]),n("button",{staticClass:"favorite-button",on:{click:function(a){return e.toggleFavorite_weapon(t)}}},[e._v(" ❤️ ")])]),n("tr",[n("div",{staticClass:"level-up-days"},[n("p",{staticClass:"level-up-heading"},[e._v("Дни повышения уровня:")]),n("p",{staticClass:"level-up-days_2"},[e._v(" "+e._s(t.result))])])]),n("tr",{staticClass:"levels"},[n("p",{staticClass:"character-stat"},[e._v("Уровень оружия: "+e._s(t.level))]),n("div",{staticClass:"level-control"},[n("button",{staticClass:"level-button_1",on:{click:function(a){return e.decreaseLevel_weapon(t,"level")}}},[e._v("<")]),n("div",{staticClass:"level-bar-container"},[n("div",{staticClass:"level-bar_1",style:{width:1.11*t.level+"%"}})]),n("button",{staticClass:"level-button_1",on:{click:function(a){return e.increaseLevel_weapon(t,"level")}}},[e._v(">")])])])])])})),0)]):e._e()])]),n("div",{attrs:{id:"app_1"}},[n("router-link",{attrs:{to:{name:"start"}}},[n("img",{staticClass:"link",attrs:{src:a(1436),alt:"About Page"}})])],1)])},r=[];function i(e){if(Array.isArray(e))return e}a(9749),a(6544),a(228),a(4254),a(1694),a(6265),a(560);function l(e,t){var a=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=a){var n,r,i,l,s=[],o=!0,c=!1;try{if(i=(a=a.call(e)).next,0===t){if(Object(a)!==a)return;o=!1}else for(;!(o=(n=i.call(a)).done)&&(s.push(n.value),s.length!==t);o=!0);}catch(e){c=!0,r=e}finally{try{if(!o&&null!=a["return"]&&(l=a["return"](),Object(l)!==l))return}finally{if(c)throw r}}return s}}a(9730),a(2826),a(4284),a(7049),a(4043),a(7409);function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}function o(e,t){if(e){if("string"===typeof e)return s(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?s(e,t):void 0}}a(1057);function c(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function h(e,t){return i(e)||l(e,t)||o(e,t)||c()}a(886),a(5728),a(2506),a(9772);var u={name:"Main",data:function(){return{action:"main",selectedCharacter:"",selectedWeapon:"",name:"",Level:1,attackLevel:1,elementalSkillLevel:1,elementalBurstLevel:1,newCharacter:{name:"F",level:1,attackLevel:1,elementalSkillLevel:1,elementalBurstLevel:1,imagePath:"https://i.pinimg.com/originals/cb/6b/57/cb6b57826dc61b9f419ad29ddceb9b2f.jpg"},newWeapon:{name:"F",level:1,imagePath:"https://i.pinimg.com/originals/cb/6b/57/cb6b57826dc61b9f419ad29ddceb9b2f.jpg"},characters:[],weapons:[],showForm:!1,showForm_weapon:!1,genshinCharacters:[{id:1,name:"Amber",imagePath:"https://cdn.wanderer.moe/genshin-impact/character-icons/ui-avataricon-ambor.png"},{id:2,name:"Barbara",imagePath:"https://cdn.wanderer.moe/genshin-impact/character-icons/ui-avataricon-barbara.png"},{id:3,name:"Beidou",imagePath:"https://cdn.wanderer.moe/genshin-impact/character-icons/ui-avataricon-beidou.png"},{id:4,name:"Bennett",imagePath:"https://cdn.wanderer.moe/genshin-impact/character-icons/ui-avataricon-bennett.png"},{id:5,name:"Chongyun",imagePath:"https://cdn.wanderer.moe/genshin-impact/character-icons/ui-avataricon-chongyun.png"},{id:6,name:"Diluc",imagePath:"https://cdn.wanderer.moe/genshin-impact/character-icons/ui-avataricon-diluc.png"},{id:7,name:"Diona",imagePath:"https://cdn.wanderer.moe/genshin-impact/character-icons/ui-avataricon-diona.png"},{id:8,name:"Eula",imagePath:"https://cdn.wanderer.moe/genshin-impact/character-icons/ui-avataricon-eula.png"},{id:9,name:"Fischl",imagePath:"https://cdn.wanderer.moe/genshin-impact/character-icons/ui-avataricon-fischl.png"},{id:10,name:"Ganyu",imagePath:"https://cdn.wanderer.moe/genshin-impact/character-icons/ui-avataricon-ganyu.png"},{id:11,name:"Hu Tao",imagePath:"https://cdn.wanderer.moe/genshin-impact/character-icons/ui-avataricon-hutao.png"},{id:12,name:"Jean",imagePath:"https://cdn.wanderer.moe/genshin-impact/character-icons/ui-avataricon-qin.png"},{id:13,name:"Kaeya",imagePath:"https://cdn.wanderer.moe/genshin-impact/character-icons/ui-avataricon-kaeya.png"},{id:14,name:"Klee",imagePath:"https://cdn.wanderer.moe/genshin-impact/character-icons/ui-avataricon-klee.png"},{id:15,name:"Lisa",imagePath:"https://cdn.wanderer.moe/genshin-impact/character-icons/ui-avataricon-lisa.png"},{id:16,name:"Mona",imagePath:"https://cdn.wanderer.moe/genshin-impact/character-icons/ui-avataricon-mona.png"},{id:17,name:"Ningguang",imagePath:"https://cdn.wanderer.moe/genshin-impact/character-icons/ui-avataricon-ningguang.png"},{id:18,name:"Noelle",imagePath:"https://cdn.wanderer.moe/genshin-impact/character-icons/ui-avataricon-noel.png"},{id:19,name:"Qiqi",imagePath:"https://cdn.wanderer.moe/genshin-impact/character-icons/ui-avataricon-qiqi.png"},{id:20,name:"Razor",imagePath:"https://cdn.wanderer.moe/genshin-impact/character-icons/ui-avataricon-razor.png"}],genshinWeapon:[{id:1,name:"The Precious Pool",imagePath:"https://genshin-info.ru/upload/resize_cache/iblock/1b6/256_256_1d7a58ff99b324185ccb5ad5dfbdb5e85/tmp256.png"},{id:2,name:"Heavenly majesty",imagePath:"https://genshin-info.ru/upload/resize_cache/iblock/636/256_256_1d7a58ff99b324185ccb5ad5dfbdb5e85/tmp256.png"},{id:3,name:"The Gracious Lord of Waters",imagePath:"https://genshin-info.ru/upload/resize_cache/iblock/c65/223_228_1d7a58ff99b324185ccb5ad5dfbdb5e85/Blagodatnyy-vladyka-vod.png"},{id:4,name:"Desecrated desire",imagePath:"https://genshin-info.ru/upload/resize_cache/iblock/1f1/256_256_1d7a58ff99b324185ccb5ad5dfbdb5e85/tmp256.png"},{id:5,name:"The memory of dust",imagePath:"https://genshin-info.ru/upload/resize_cache/iblock/511/256_256_1d7a58ff99b324185ccb5ad5dfbdb5e85/tmp256.png"},{id:6,name:"Montenegrin agate",imagePath:"https://genshin-info.ru/upload/resize_cache/iblock/088/256_256_1d7a58ff99b324185ccb5ad5dfbdb5e85/tmp256.png"},{id:7,name:"Deadly battle",imagePath:"https://genshin-info.ru/upload/resize_cache/iblock/67a/256_256_1d7a58ff99b324185ccb5ad5dfbdb5e85/tmp256.png"},{id:8,name:"Aqua Simulacrum",imagePath:"https://genshin-info.ru/upload/resize_cache/iblock/e55/256_254_1d7a58ff99b324185ccb5ad5dfbdb5e85/Akva-simulyakrum.png"},{id:9,name:"Desiccant",imagePath:"https://genshin-info.ru/upload/resize_cache/iblock/2e7/a0ndnp84kb6mp0gyn10naco9phqqty8b/256_256_1d7a58ff99b324185ccb5ad5dfbdb5e85/Issushitel.webp"},{id:10,name:"The Heavenly Sword",imagePath:"https://genshin-info.ru/upload/resize_cache/iblock/882/256_256_1d7a58ff99b324185ccb5ad5dfbdb5e85/tmp256.png"}]}},created:function(){var e=this;Promise.all([this.fetchData(this.$BaseURL+"characters","characters"),this.fetchData(this.$BaseURL+"weapons","weapons")]).then((function(t){var a=h(t,2),n=a[0],r=a[1];e.characters=n,e.weapons=r})).catch((function(e){console.log(e)}))},methods:{fetchData:function(e,t){var a=this;return new Promise((function(n,r){a.$axios({method:"get",url:e}).then((function(e){if("characters"===t){var r=e.data.map((function(e){var t=a.genshinCharacters.find((function(t){return t.name===e.name}));return t&&(e.imagePath=t.imagePath),e}));n(r)}else if("weapons"===t){var i=e.data.map((function(e){console.log(e.name,e.level);var t=a.genshinWeapon.find((function(t){return t.name===e.name}));return t&&(e.imagePath=t.imagePath),e}));n(i)}})).catch((function(e){r(e)}))}))},addCharacter:function(){var e=this;if(this.newCharacter.name){var t=this.characters.some((function(t){return t.name===e.newCharacter.name}));if(t)console.log("Этот персонаж уже выбран"),alert("Этот персонаж уже выбран");else{var a=this.genshinCharacters.find((function(t){return t.name===e.newCharacter.name}));a?(this.characters.push({name:this.newCharacter.name,level:this.newCharacter.level,attackLevel:this.newCharacter.attackLevel,elementalSkillLevel:this.newCharacter.elementalSkillLevel,elementalBurstLevel:this.newCharacter.elementalBurstLevel,imagePath:a.imagePath,levelUpDays:this.newCharacter.levelUpDays}),console.log(this.newCharacter.name,this.newCharacter.attackLevel,this.newCharacter.elementalSkillLevel,this.newCharacter.elementalBurstLevel),this.addPoint(),this.resetForm(),this.toggleForm()):console.log("Выбранный персонаж не найден")}}},addWeapon:function(){var e=this;if(this.newWeapon.name){var t=this.weapons.some((function(t){return t.name===e.newWeapon.name}));if(t)console.log("Это оружие уже выбрано"),alert("Это оружие уже выбрано");else{var a=this.genshinWeapon.find((function(t){return t.name===e.newWeapon.name}));a?(this.weapons.push({name:this.newWeapon.name,level:this.newWeapon.level,typeOfWeapon:this.newWeapon.typeOfWeapon,imagePath:a.imagePath}),console.log(this.newWeapon.name,this.newWeapon.level,this.newWeapon.typeOfWeapon,this.newWeapon.imagePath),this.addPoint_weapon(),this.resetForm_weapon(),this.toggleForm_weapon()):console.log("Выбранное оружие не найдено")}}},resetForm:function(){this.newCharacter={name:"",Level:1,attackLevel:1,elementalSkillLevel:1,elementalBurstLevel:1,levelUpDays:""}},resetForm_weapon:function(){this.newWeapon={name:"",level:1}},toggleForm:function(){this.showForm=!this.showForm},toggleForm_weapon:function(){this.showForm_weapon=!this.showForm_weapon},increaseLevel:function(e,t){e[t]<90&&(e[t]++,this.putPointRequest(e.name,e.Level,e.attackLevel,e.elementalSkillLevel,e.elementalBurstLevel,e.levelUpDays,e.imagePath))},increaseLevel_weapon:function(e,t){e[t]<90&&(e[t]++,this.putPointRequest_weapon(e.name,e.level,e.typeOfWeapon,e.imagePath))},decreaseLevel:function(e,t){e[t]>1&&(e[t]--,this.putPointRequest(e.name,e.Level,e.attackLevel,e.elementalSkillLevel,e.elementalBurstLevel,e.levelUpDays,e.imagePath))},decreaseLevel_weapon:function(e,t){e[t]>1&&(e[t]--,this.putPointRequest_weapon(e.name,e.level,e.typeOfWeapon,e.imagePath))},toggleFavorite:function(e){if(e.favorite=!e.favorite,e.favorite){var t=this.characters.indexOf(e);-1!==t&&(this.characters.splice(t,1),this.characters.unshift(e))}else{var a=this.characters.indexOf(e);-1!==a&&(this.characters.splice(a,1),this.characters.push(e))}},toggleFavorite_weapon:function(e){if(e.favorite=!e.favorite,e.favorite){var t=this.weapons.indexOf(e);-1!==t&&(this.weapons.splice(t,1),this.weapons.unshift(e))}else{var a=this.weapons.indexOf(e);-1!==a&&(this.weapons.splice(a,1),this.weapons.push(e))}},logoutRequest:function(){var e=this;this.$axios({method:"post",url:this.$BaseURL+"logout"}).then((function(t){e.response=t,localStorage.removeItem("currentUser"),e.$router.push("/")})).catch((function(e){console.log(e)}))},addPointRequest:function(e,t,a,n,r,i,l){var s=this,o=localStorage.getItem("currentUser"),c=localStorage.getItem("username");return console.log(e,t,a,n,r,l),this.$axios({method:"post",url:this.$BaseURL+"characters",headers:{"Content-Type":"application/json",Accept:"application/json",Authorization:o},data:{name:e,level:t,attackLevel:a,elementalSkillLevel:n,elementalBurstLevel:r,levelUpDays:i,imagePath:l}}).then((function(i){var l=i.data.result,o=s.characters.findIndex((function(t){return t.name===e})),h=s.genshinCharacters.find((function(t){return t.name===e}));-1!==o?(s.$set(s.characters,o,{name:e,Level:Level,attackLevel:a,elementalSkillLevel:n,elementalBurstLevel:r,result:l,imagePath:h?h.imagePath:"https://i.pinimg.com/originals/cb/6b/57/cb6b57826dc61b9f419ad29ddceb9b2f.jpg",username:c}),console.log(s.characters)):s.characters.unshift({name:e,level:t,attackLevel:a,elementalSkillLevel:n,elementalBurstLevel:r,result:l,imagePath:h?h.imagePath:"https://i.pinimg.com/originals/cb/6b/57/cb6b57826dc61b9f419ad29ddceb9b2f.jpg"}),s.response=i,console.log(i)})).catch((function(e){return console.log(e.response.data),!1}))},putPointRequest:function(e,t,a,n,r,i,l){var s=this,o=localStorage.getItem("currentUser"),c=localStorage.getItem("username");return console.log(e,t,a,n,r,l),this.$axios({method:"put",url:this.$BaseURL+"characters",headers:{"Content-Type":"application/json",Accept:"application/json",Authorization:o},data:{name:e,level:t,attackLevel:a,elementalSkillLevel:n,elementalBurstLevel:r,levelUpDays:i,imagePath:l}}).then((function(i){var l=i.data.result,o=s.characters.findIndex((function(t){return t.name===e})),h=s.genshinCharacters.find((function(t){return t.name===e}));-1!==o?(s.$set(s.characters,o,{name:e,Level:Level,attackLevel:a,elementalSkillLevel:n,elementalBurstLevel:r,result:l,imagePath:h?h.imagePath:"https://i.pinimg.com/originals/cb/6b/57/cb6b57826dc61b9f419ad29ddceb9b2f.jpg",username:c}),console.log(s.characters)):s.characters.unshift({name:e,level:t,attackLevel:a,elementalSkillLevel:n,elementalBurstLevel:r,result:l,imagePath:h?h.imagePath:"https://i.pinimg.com/originals/cb/6b/57/cb6b57826dc61b9f419ad29ddceb9b2f.jpg"}),s.response=i,console.log(i)})).catch((function(e){return console.log(e.response.data),!1}))},addPointRequest_weapon:function(e,t,a,n){var r=this;console.log(e,t,a,n);var i=localStorage.getItem("currentUser");localStorage.getItem("username");return this.$axios({method:"post",url:this.$BaseURL+"weapons",headers:{"Content-Type":"application/json",Accept:"application/json",Authorization:i},data:{name:e,level:t,typeOfWeapon:a,imagePath:n}}).then((function(n){var i=n.data.result,l=r.weapons.findIndex((function(t){return t.name===e})),s=r.genshinWeapon.find((function(t){return t.name===e}));-1!==l?(r.$set(r.weapons,l,{name:e,level:t,typeOfWeapon:a,result:i,imagePath:s?s.imagePath:"https://i.pinimg.com/originals/cb/6b/57/cb6b57826dc61b9f419ad29ddceb9b2f.jpg"}),console.log(r.weapons)):r.weapons.unshift({name:e,level:t,typeOfWeapon:a,result:i,imagePath:s?s.imagePath:"https://i.pinimg.com/originals/cb/6b/57/cb6b57826dc61b9f419ad29ddceb9b2f.jpg"}),r.response=n,console.log(n)})).catch((function(e){return console.log(e.response.data),!1}))},putPointRequest_weapon:function(e,t,a,n){var r=this;console.log(e,t,a,n);var i=localStorage.getItem("currentUser");localStorage.getItem("username");return this.$axios({method:"put",url:this.$BaseURL+"weapons",headers:{"Content-Type":"application/json",Accept:"application/json",Authorization:i},data:{name:e,level:t,typeOfWeapon:a,imagePath:n}}).then((function(n){var i=n.data.result,l=r.weapons.findIndex((function(t){return t.name===e})),s=r.genshinWeapon.find((function(t){return t.name===e}));-1!==l?(r.$set(r.weapons,l,{name:e,level:t,typeOfWeapon:a,result:i,imagePath:s?s.imagePath:"https://i.pinimg.com/originals/cb/6b/57/cb6b57826dc61b9f419ad29ddceb9b2f.jpg"}),console.log(r.weapons)):r.weapons.unshift({name:e,level:t,typeOfWeapon:a,result:i,imagePath:s?s.imagePath:"https://i.pinimg.com/originals/cb/6b/57/cb6b57826dc61b9f419ad29ddceb9b2f.jpg"}),r.response=n,console.log(n)})).catch((function(e){return console.log(e.response.data),!1}))},addPoint:function(){this.newCharacter.name&&this.newCharacter.level&&this.newCharacter.attackLevel&&this.newCharacter.elementalSkillLevel&&this.newCharacter.elementalBurstLevel?(this.addPointRequest(this.newCharacter.name,this.newCharacter.level,this.newCharacter.attackLevel,this.newCharacter.elementalSkillLevel,this.newCharacter.elementalBurstLevel,this.newCharacter.imagePath),console.log(this.newCharacter.name,this.newCharacter.level,this.newCharacter.attackLevel,this.newCharacter.elementalSkillLevel,this.newCharacter.elementalBurstLevel)):(console.log("Некоторые или все данные не заполнены"),console.log(this.newCharacter.name,this.newCharacter.level,this.newCharacter.attackLevel,this.newCharacter.elementalSkillLevel,this.newCharacter.elementalBurstLevel))},addPoint_weapon:function(){this.newWeapon.name&&this.newWeapon.level?(this.addPointRequest_weapon(this.newWeapon.name,this.newWeapon.level,this.newWeapon.typeOfWeapon,this.newWeapon.imagePath),console.log(this.newWeapon.name,this.newWeapon.level,this.newWeapon.typeOfWeapon,this.newWeapon.imagePath)):(console.log("Некоторые или все данные не заполнены"),console.log(this.newWeapon.name,this.newWeapon.level,this.newWeapon.typeOfWeapon,this.newWeapon.imagePath))}}},m=u,v=a(1001),p=(0,v.Z)(m,n,r,!1,null,null,null),d=p.exports},7251:function(e){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACgUlEQVR4nO1ZwW7TQBD1hQrxEQRO4BnKpRcE9FIK/4IEqgTfwBcgAv0OuEBjPFOuPYYroZCZ5NgWpJKqtGiaNHEcG0K96wTqJ60iJdm3+2Zm33q9QVChQoWpcK0TX0HldVD+CsKHqHzssoHwoXGj0KtQo1rgEij8AIX2XE8a85rQbtiOV91FvszJ60gEyIfLxaOvvD5KM32CDq9As7kQOAY0mwthe/MeCrcS470sTmx1eUrY4ZXAM0ITMcwEbRcmTC5YH5FPw8ZILuygKJJ1WZhsFmNiDtnNDl8F4fcgdHB266QDFIrMKHwK2B+Q7Se/B+HYoeNE3gSA8jOzUfscF3D2yE826nkTkAcXg2AORyVgGlQZCEoqIWzzbVR6fr0b3/onMwDC3YHV6VQuJHRk+8OSbF2y/y0db10AoTco9HMmLoR5URKKfmeNodCy/W+xS4tT2GijdAH9Aw41JjIhdGTiUhl4nXUIgn7fjfQBphQBPoGVgPOQgVCjWn8N8Her4/TxD4XWzLmsgcSP/6qvluFCSo2xBan8bjhBoeVJa43vTtO3RBvlb6lJ7p3+BkpPJxxH6cmIk3qz3weUN/KiaNGetNbNO1mcmJ3dXpYwpwKsjm3SlglQepuuY6t7VBJrIPwojxMzuEG4PtjRX3gT4IoTc7hrrfii88HKFOAMPmx0LgRgIRudBwHi0kb5R5LbsokaP3T1btSHjeb2NaDQx0G/ZjCPNvqnvlg9jf5PL3dB6Uu5r9fj1dHa4c+FCe3OKkHYsgF8XXDcELo/fsHB9cLEJxuW0G6Wd/tsILzjxEaHaS1RBAjv2E1N4BIWjZOnRKVtX9es2OeuO4t8hQrnAL8AMOlGynIR8NQAAAAASUVORK5CYII="},1436:function(e){e.exports="data:image/png;base64,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"},1055:function(e,t,a){var n=a(4071),r=a(2615),i=a(690),l=a(1228),s=a(3292),o=a(9429),c=a(6310),h=a(6522),u=a(5185),m=a(1664),v=Array;e.exports=function(e){var t=i(e),a=o(this),p=arguments.length,d=p>1?arguments[1]:void 0,g=void 0!==d;g&&(d=n(d,p>2?arguments[2]:void 0));var f,b,w,C,L,A,_=m(t),y=0;if(!_||this===v&&s(_))for(f=c(t),b=a?new this(f):v(f);f>y;y++)A=g?d(t[y],y):t[y],h(b,y,A);else for(C=u(t,_),L=C.next,b=a?new this:[];!(w=r(L,C)).done;y++)A=g?l(C,d,[w.value,y],!0):w.value,h(b,y,A);return b.length=y,b}},1228:function(e,t,a){var n=a(5027),r=a(2125);e.exports=function(e,t,a,i){try{return i?t(n(a)[0],a[1]):t(a)}catch(l){r(e,"throw",l)}}},8494:function(e,t,a){var n=a(3691),r=TypeError;e.exports=function(e,t){if(!delete e[t])throw new r("Cannot delete property "+n(t)+" of "+n(e))}},6308:function(e,t,a){var n=a(2615),r=a(8844),i=a(4327),l=a(9633),s=a(7901),o=a(3430),c=a(5391),h=a(618).get,u=a(2100),m=a(6422),v=o("native-string-replace",String.prototype.replace),p=RegExp.prototype.exec,d=p,g=r("".charAt),f=r("".indexOf),b=r("".replace),w=r("".slice),C=function(){var e=/a/,t=/b*/g;return n(p,e,"a"),n(p,t,"a"),0!==e.lastIndex||0!==t.lastIndex}(),L=s.BROKEN_CARET,A=void 0!==/()??/.exec("")[1],_=C||A||L||u||m;_&&(d=function(e){var t,a,r,s,o,u,m,_=this,y=h(_),P=i(e),x=y.raw;if(x)return x.lastIndex=_.lastIndex,t=n(d,x,P),_.lastIndex=x.lastIndex,t;var k=y.groups,S=L&&_.sticky,W=n(l,_),R=_.source,I=0,B=P;if(S&&(W=b(W,"y",""),-1===f(W,"g")&&(W+="g"),B=w(P,_.lastIndex),_.lastIndex>0&&(!_.multiline||_.multiline&&"\n"!==g(P,_.lastIndex-1))&&(R="(?: "+R+")",B=" "+B,I++),a=new RegExp("^(?:"+R+")",W)),A&&(a=new RegExp("^"+R+"$(?!\\s)",W)),C&&(r=_.lastIndex),s=n(p,S?a:_,B),S?s?(s.input=w(s.input,I),s[0]=w(s[0],I),s.index=_.lastIndex,_.lastIndex+=s[0].length):_.lastIndex=0:C&&s&&(_.lastIndex=_.global?s.index+s[0].length:r),A&&s&&s.length>1&&n(v,s[0],a,(function(){for(o=1;o<arguments.length-2;o++)void 0===arguments[o]&&(s[o]=void 0)})),s&&k)for(s.groups=u=c(null),o=0;o<k.length;o++)m=k[o],u[m[0]]=s[m[1]];return s}),e.exports=d},9633:function(e,t,a){var n=a(5027);e.exports=function(){var e=n(this),t="";return e.hasIndices&&(t+="d"),e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.unicodeSets&&(t+="v"),e.sticky&&(t+="y"),t}},3477:function(e,t,a){var n=a(2615),r=a(6812),i=a(3622),l=a(9633),s=RegExp.prototype;e.exports=function(e){var t=e.flags;return void 0!==t||"flags"in s||r(e,"flags")||!i(s,e)?t:n(l,e)}},7901:function(e,t,a){var n=a(3689),r=a(9037),i=r.RegExp,l=n((function(){var e=i("a","y");return e.lastIndex=2,null!==e.exec("abcd")})),s=l||n((function(){return!i("a","y").sticky})),o=l||n((function(){var e=i("^r","gy");return e.lastIndex=2,null!==e.exec("str")}));e.exports={BROKEN_CARET:o,MISSED_STICKY:s,UNSUPPORTED_Y:l}},2100:function(e,t,a){var n=a(3689),r=a(9037),i=r.RegExp;e.exports=n((function(){var e=i(".","s");return!(e.dotAll&&e.test("\n")&&"s"===e.flags)}))},6422:function(e,t,a){var n=a(3689),r=a(9037),i=r.RegExp;e.exports=n((function(){var e=i("(?<a>b)","g");return"b"!==e.exec("b").groups.a||"bc"!=="b".replace(e,"$<a>c")}))},9772:function(e,t,a){var n=a(9989),r=a(2960).findIndex,i=a(7370),l="findIndex",s=!0;l in[]&&Array(1)[l]((function(){s=!1})),n({target:"Array",proto:!0,forced:s},{findIndex:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}}),i(l)},5728:function(e,t,a){var n=a(9989),r=a(2960).find,i=a(7370),l="find",s=!0;l in[]&&Array(1)[l]((function(){s=!1})),n({target:"Array",proto:!0,forced:s},{find:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}}),i(l)},7049:function(e,t,a){var n=a(9989),r=a(1055),i=a(6431),l=!i((function(e){Array.from(e)}));n({target:"Array",stat:!0,forced:l},{from:r})},886:function(e,t,a){var n=a(9989),r=a(2960).map,i=a(9042),l=i("map");n({target:"Array",proto:!0,forced:!l},{map:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}})},2506:function(e,t,a){var n=a(9989),r=a(690),i=a(7578),l=a(8700),s=a(6310),o=a(5649),c=a(5565),h=a(7120),u=a(6522),m=a(8494),v=a(9042),p=v("splice"),d=Math.max,g=Math.min;n({target:"Array",proto:!0,forced:!p},{splice:function(e,t){var a,n,v,p,f,b,w=r(this),C=s(w),L=i(e,C),A=arguments.length;for(0===A?a=n=0:1===A?(a=0,n=C-L):(a=A-2,n=g(d(l(t),0),C-L)),c(C+a-n),v=h(w,n),p=0;p<n;p++)f=L+p,f in w&&u(v,p,w[f]);if(v.length=n,a<n){for(p=L;p<C-n;p++)f=p+n,b=p+a,f in w?w[b]=w[f]:m(w,b);for(p=C;p>C-n+a;p--)m(w,p-1)}else if(a>n)for(p=C-n;p>L;p--)f=p+n-1,b=p+a-1,f in w?w[b]=w[f]:m(w,b);for(p=0;p<a;p++)w[p+L]=arguments[p+2];return o(w,C-n+a),v}})},4043:function(e,t,a){var n=a(9989),r=a(6308);n({target:"RegExp",proto:!0,forced:/./.exec!==r},{exec:r})},7409:function(e,t,a){a(4043);var n=a(9989),r=a(2615),i=a(9985),l=a(5027),s=a(4327),o=function(){var e=!1,t=/[ac]/;return t.exec=function(){return e=!0,/./.exec.apply(this,arguments)},!0===t.test("abc")&&e}(),c=/./.test;n({target:"RegExp",proto:!0,forced:!o},{test:function(e){var t=l(this),a=s(e),n=t.exec;if(!i(n))return r(c,t,a);var o=r(n,t,a);return null!==o&&(l(o),!0)}})},2826:function(e,t,a){var n=a(1236).PROPER,r=a(1880),i=a(5027),l=a(4327),s=a(3689),o=a(3477),c="toString",h=RegExp.prototype,u=h[c],m=s((function(){return"/a/b"!==u.call({source:"a",flags:"b"})})),v=n&&u.name!==c;(m||v)&&r(RegExp.prototype,c,(function(){var e=i(this),t=l(e.source),a=l(o(e));return"/"+t+"/"+a}),{unsafe:!0})}}]);
//# sourceMappingURL=794-legacy.8e7e960c.js.map