(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6c7aa9ca"],{2549:function(e,t,n){"use strict";n("b5e9")},5795:function(e,t,n){"use strict";n.r(t);var r=n("7a23"),c={class:"record-list"},a={class:"c-input-group c-input-group-box"},s={class:"flex flex-center"},i={class:"font12 flex flex-between text-grey-7"},d={class:"font-bold"},o={key:0,class:"c-loading"};function l(e,t,n,l,u,b){return Object(r["openBlock"])(),Object(r["createElementBlock"])("div",c,[(Object(r["openBlock"])(!0),Object(r["createElementBlock"])(r["Fragment"],null,Object(r["renderList"])(l.state.inputAddressList,(function(e){return Object(r["openBlock"])(),Object(r["createElementBlock"])("div",{style:{margin:"4px 0","word-break":"break-all"},class:"font-bold text-grey-6",key:e},Object(r["toDisplayString"])(e),1)})),128)),Object(r["createElementVNode"])("div",a,[Object(r["withDirectives"])(Object(r["createElementVNode"])("input",{style:{padding:"2px 10px"},type:"text",placeholder:"输入地址","onUpdate:modelValue":t[0]||(t[0]=function(e){return l.state.inputAddress=e})},null,512),[[r["vModelText"],l.state.inputAddress]])]),Object(r["createElementVNode"])("div",s,[Object(r["createElementVNode"])("button",{class:"primary-btn",onClick:t[1]||(t[1]=function(){return l.onAdd&&l.onAdd.apply(l,arguments)})},"添加地址"),Object(r["createElementVNode"])("button",{class:"primary-btn",onClick:t[2]||(t[2]=function(){return l.getHashRateSort&&l.getHashRateSort.apply(l,arguments)})},"开始查询")]),(Object(r["openBlock"])(!0),Object(r["createElementBlock"])(r["Fragment"],null,Object(r["renderList"])(l.state.searchResult,(function(e,t){return Object(r["openBlock"])(),Object(r["createElementBlock"])("div",{class:"list-item",key:t},[Object(r["createElementVNode"])("div",i,[Object(r["createElementVNode"])("div",null,Object(r["toDisplayString"])(l.formatAddress(e["address"])),1),Object(r["createElementVNode"])("div",d,Object(r["toDisplayString"])(l.fixedNumber(e["value"])),1)])])})),128)),l.state.loading?(Object(r["openBlock"])(),Object(r["createElementBlock"])("div",o)):Object(r["createCommentVNode"])("",!0)])}n("e7e5");var u=n("d399"),b=n("1da1"),p=(n("96cf"),n("d3b7"),n("159b"),n("4e82"),n("a9e3"),n("a16e")),f=n("6be8"),j=n("6779"),m=n("bae1"),O={name:"Index",setup:function(){var e=Object(r["inject"])("chainInfo"),t=Object(r["reactive"])({inputAddress:"",inputAddressList:[],loading:!1,searchResult:[]}),n=function(){var n=Object(b["a"])(regeneratorRuntime.mark((function n(){var r,c;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(e.provider){n.next=2;break}return n.abrupt("return");case 2:if(0!==t.inputAddressList.length){n.next=5;break}return Object(u["a"])("请先添加地址"),n.abrupt("return");case 5:return n.prev=5,t.loading=!0,n.next=9,Object(p["i"])(e,t.inputAddressList);case 9:r=n.sent,c=[],r.forEach((function(e,n){var r={};r.value=j["utils"].formatUnits(e,m["a"].TokenDecimals),r.address=t.inputAddressList[n],c.push(r)})),t.searchResult=c.sort((function(e,t){return Number(t.value)-Number(e.value)})),t.loading=!1,n.next=20;break;case 16:n.prev=16,n.t0=n["catch"](5),t.loading=!1,t.finished=!0;case 20:case"end":return n.stop()}}),n,null,[[5,16]])})));return function(){return n.apply(this,arguments)}}(),c=function(){j["utils"].isAddress(t.inputAddress)?t.inputAddressList.indexOf(t.inputAddress)>=0?Object(u["a"])("该地址已添加"):(t.inputAddressList.push(t.inputAddress),t.inputAddress=""):Object(u["a"])("请输入有效地址")};return{state:t,ContractConfig:m["a"],getHashRateSort:n,fixedNumber:f["a"],onAdd:c,formatAddress:f["b"]}}},k=(n("2549"),n("6b0d")),v=n.n(k);const g=v()(O,[["render",l],["__scopeId","data-v-7e8e2a56"]]);t["default"]=g},b5e9:function(e,t,n){}}]);