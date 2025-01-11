import{d as e,c as l,o as a,a as t,b as o,F as s,B as r,I as u,m as n,u as c,s as d,r as i,a9 as p,w as b,h as m,t as v,j as f,D as w,E as x,q as g,J as C,G as h,k as y,aa as k,ab as L}from"./chunk-Gl-Q_KUo.js";import{a as V,u as P,i as T,t as U,e as _,f as S,l as D}from"./chunk-wamFc5Ot.js";const R={class:"w-full h-auto"},z=["onClick"],A=V(e({__name:"PatternSetting",props:{rowCount:{type:Number,default:17},cardColor:{type:String,default:"#fff"},patternColor:{type:String,default:"#000"},patternList:{type:Array,default:()=>[]}},setup(e){const c=e,d=l((()=>c));return(e,l)=>(a(),t("div",R,[o("ul",{class:"pattern-list",style:u({gridTemplateColumns:"repeat(".concat(d.value.rowCount,",1fr)")})},[(a(!0),t(s,null,r(7*d.value.rowCount,(e=>(a(),t("li",{key:e,class:"w-5 h-5",style:u({backgroundColor:d.value.patternList.includes(e)?d.value.patternColor:d.value.cardColor}),onClick:n((l=>function(e,l){if(d.value.patternList.includes(l)){const e=d.value.patternList.indexOf(l);d.value.patternList.splice(e,1)}else d.value.patternList.push(l)}(0,e)),["stop"])},null,12,z)))),128))],4)]))}}),[["__scopeId","data-v-170dfa96"]]),I={class:"modal-box"},N={class:"text-lg font-bold"},j={class:"py-4"},q={class:"modal-action"},B={method:"dialog",class:"flex gap-3"},F={class:"mb-8"},H={class:"flex flex-row items-center w-full gap-24 mb-10 form-control"},O={class:""},E={class:"label"},G={class:"label-text"},J=["placeholder"],M={class:"flex flex-row items-center w-full gap-24 mb-10 form-control"},W={class:""},K={class:"label"},Q={class:"label-text"},X={class:"help"},Y={key:0,class:"text-sm text-red-400 help-text"},Z=["data-tip"],$=["disabled"],ee={class:"loading loading-ring loading-md"},le={class:"w-full max-w-xs form-control"},ae={class:"label"},te={class:"label-text"},oe={disabled:"",selected:""},se=["value"],re={class:"w-full max-w-xs form-control"},ue={class:"label"},ne={class:"label-text"},ce={disabled:"",selected:""},de=["value"],ie={class:"w-full max-w-xs form-control"},pe={class:"label"},be={class:"label-text"},me={disabled:"",selected:""},ve=["value"],fe={class:"w-full max-w-xs form-control"},we={class:"label"},xe={class:"label-text"},ge={class:"w-full max-w-xs form-control"},Ce={class:"label"},he={class:"label-text"},ye={class:"w-full max-w-xs form-control"},ke={class:"label"},Le={class:"label-text"},Ve={class:"flex flex-row w-full max-w-xs gap-10 mb-10 form-control"},Pe={class:"label"},Te={class:"label-text"},Ue={class:"label"},_e={class:"label-text"},Se={class:"w-full max-w-xs mb-10 form-control"},De={class:"label"},Re={class:"label-text"},ze={class:"w-full max-w-xs form-control"},Ae={class:"label"},Ie={class:"label-text"},Ne={class:"flex flex-row items-center w-full gap-24 mb-0 form-control"},je={class:"label"},qe={class:"label-text"},Be={class:"h-auto"},Fe={class:"flex w-full h-24 gap-3 m-0"},He=["data-tip"],Oe={class:"w-full max-w-xs mb-10 form-control"},Ee={class:"label"},Ge={class:"label-text"},Je=["checked"],Me=e({__name:"FaceConfig",setup(e){const{t:l}=c(),u=P().globalConfig,V=P().personConfig,R=P().prizeConfig,{getTopTitle:z,getTheme:Me,getPatterColor:We,getPatternList:Ke,getCardColor:Qe,getLuckyColor:Xe,getTextColor:Ye,getCardSize:Ze,getTextSize:$e,getRowCount:el,getIsShowPrizeList:ll,getLanguage:al,getBackground:tl,getImageList:ol}=d(u),{getAlreadyPersonList:sl,getNotPersonList:rl}=d(V),ul=i(),nl=i(),cl=i(0),dl=i(Me.value.name),il=i(structuredClone(z.value)),pl=i(structuredClone(Qe.value)),bl=i(structuredClone(Xe.value)),ml=i(structuredClone(Ye.value)),vl=i(structuredClone(Ze.value)),fl=i(structuredClone($e.value)),wl=i(structuredClone(el.value)),xl=i(structuredClone(al.value)),gl=i(structuredClone(ll.value)),Cl=i(structuredClone(We.value)),hl=i(Object.keys(k)),yl=i(k),kl=i(tl.value),Ll=i({rowCount:wl}),Vl=i({rowCount:""}),Pl=p.object({rowCount:p.number({required_error:T.global.t("error.require"),invalid_type_error:T.global.t("error.requireNumber")}).min(1,T.global.t("error.minNumber1")).max(100,T.global.t("error.maxNumber100"))}),Tl={rowCount:Ll.value.rowCount};function Ul(){cl.value=2,setTimeout((()=>{const e=sl.value.length,l=rl.value.length;if(e<=0&&l<=0)return;const a=sl.value.concat(rl.value),t=a.slice(0,e),o=a.slice(e,l+e);V.deleteAllPerson(),V.addNotPersonList(o),V.addAlreadyPersonList(t,null),cl.value=0}),1e3)}function _l(){u.setPatternList([])}function Sl(){u.resetPatternList()}function Dl(){u.reset(),V.reset(),R.resetDefault(),window.location.reload()}return b((()=>Ll.value.rowCount),(()=>{var e;Tl.rowCount=Ll.value.rowCount,(e=Tl,Pl.parseAsync(e)).then((e=>{e.rowCount&&(cl.value=1,u.setRowCount(e.rowCount))})).catch((e=>{Vl.value.rowCount=e.issues[0].message}))})),b(il,(e=>{u.setTopTitle(e)})),b(dl,(e=>{const l=yl.value[e];u.setTheme({name:e,detail:l}),U(e),l.primary&&(_(l.primary)||S(l.primary))&&u.setCardColor(l.primary)}),{deep:!0}),b(pl,(e=>{u.setCardColor(e)}),{deep:!0}),b(bl,(e=>{u.setLuckyCardColor(e)}),{deep:!0}),b(Cl,(e=>{u.setPatterColor(e)})),b(ml,(e=>{u.setTextColor(e)}),{deep:!0}),b(vl,(e=>{u.setCardSize(e)}),{deep:!0}),b(gl,(()=>{u.setIsShowPrizeList(gl.value)})),b(kl,(e=>{u.setBackground(e)})),b(xl,(e=>{u.setLanguage(e)})),m((()=>{})),(e,u)=>(a(),t(s,null,[o("dialog",{id:"my_modal_1",ref_key:"resetDataDialogRef",ref:nl,class:"border-none modal"},[o("div",I,[o("h3",N,v(f(l)("dialog.titleTip")),1),o("p",j,v(f(l)("dialog.dialogResetAllData")),1),o("div",q,[o("form",B,[o("button",{class:"btn",onClick:u[0]||(u[0]=e=>nl.value.close())},v(f(l)("button.cancel")),1),o("button",{class:"btn",onClick:Dl},v(f(l)("button.confirm")),1)])])])],512),o("div",null,[o("h2",null,v(f(l)("viewTitle.globalSetting")),1),o("div",F,[o("button",{class:"btn btn-sm btn-primary",onClick:u[1]||(u[1]=e=>nl.value.showModal())},v(f(l)("button.resetAllData")),1)]),o("label",H,[o("div",O,[o("div",E,[o("span",G,v(f(l)("table.title")),1)]),w(o("input",{"onUpdate:modelValue":u[2]||(u[2]=e=>il.value=e),type:"text",placeholder:f(l)("placeHolder.enterTitle"),class:"w-full max-w-xs input input-bordered"},null,8,J),[[x,il.value]])])]),o("label",M,[o("div",W,[o("div",K,[o("span",Q,v(f(l)("table.columnNumber")),1)]),w(o("input",{"onUpdate:modelValue":u[3]||(u[3]=e=>Ll.value.rowCount=e),type:"number",placeholder:"Type here",class:"w-full max-w-xs input input-bordered"},null,512),[[x,Ll.value.rowCount]]),o("div",X,[Vl.value.rowCount?(a(),t("span",Y,v(Vl.value.rowCount),1)):g("",!0)])]),o("div",null,[o("div",{class:"tooltip","data-tip":f(l)("tooltip.resetLayout")},[o("button",{class:"mt-5 btn btn-info btn-sm",disabled:1!==cl.value,onClick:Ul},[o("span",null,v(f(l)("button.setLayout")),1),w(o("span",ee,null,512),[[C,2===cl.value]])],8,$)],8,Z)])]),o("label",le,[o("div",ae,[o("span",te,v(f(l)("table.language")),1)]),w(o("select",{"onUpdate:modelValue":u[4]||(u[4]=e=>xl.value=e),"data-choose-theme":"",class:"w-full max-w-xs border-solid select border-1"},[o("option",oe,v(f(l)("table.language")),1),(a(!0),t(s,null,r(f(D),(e=>(a(),t("option",{key:e.key,value:e.key},v(e.name),9,se)))),128))],512),[[h,xl.value]])]),o("label",re,[o("div",ue,[o("span",ne,v(f(l)("table.theme")),1)]),w(o("select",{"onUpdate:modelValue":u[5]||(u[5]=e=>dl.value=e),"data-choose-theme":"",class:"w-full max-w-xs border-solid select border-1"},[o("option",ce,v(f(l)("table.theme")),1),(a(!0),t(s,null,r(hl.value,((e,l)=>(a(),t("option",{key:l,value:e},v(e),9,de)))),128))],512),[[h,dl.value]])]),o("label",ie,[o("div",pe,[o("span",be,v(f(l)("table.backgroundImage")),1)]),w(o("select",{"onUpdate:modelValue":u[6]||(u[6]=e=>kl.value=e),"data-choose-theme":"",class:"w-full max-w-xs border-solid select border-1"},[o("option",me,v(f(l)("table.backgroundImage")),1),(a(!0),t(s,null,r([{name:"❌",url:"",id:""},...f(ol)],((e,l)=>(a(),t("option",{key:l,value:e},v(e.name),9,ve)))),128))],512),[[h,kl.value]])]),o("label",fe,[o("div",we,[o("span",xe,v(f(l)("table.cardColor")),1)]),y(f(L),{ref_key:"colorPickerRef",ref:ul,modelValue:pl.value,"onUpdate:modelValue":u[7]||(u[7]=e=>pl.value=e),"pure-color":pl.value,"onUpdate:pureColor":u[8]||(u[8]=e=>pl.value=e)},null,8,["modelValue","pure-color"])]),o("label",ge,[o("div",Ce,[o("span",he,v(f(l)("table.winnerColor")),1)]),y(f(L),{ref_key:"colorPickerRef",ref:ul,modelValue:bl.value,"onUpdate:modelValue":u[9]||(u[9]=e=>bl.value=e),"pure-color":bl.value,"onUpdate:pureColor":u[10]||(u[10]=e=>bl.value=e)},null,8,["modelValue","pure-color"])]),o("label",ye,[o("div",ke,[o("span",Le,v(f(l)("table.textColor")),1)]),y(f(L),{ref_key:"colorPickerRef",ref:ul,modelValue:ml.value,"onUpdate:modelValue":u[11]||(u[11]=e=>ml.value=e),"pure-color":ml.value,"onUpdate:pureColor":u[12]||(u[12]=e=>ml.value=e)},null,8,["modelValue","pure-color"])]),o("label",Ve,[o("div",null,[o("div",Pe,[o("span",Te,v(f(l)("table.cardWidth")),1)]),w(o("input",{"onUpdate:modelValue":u[13]||(u[13]=e=>vl.value.width=e),type:"number",placeholder:"Type here",class:"w-full max-w-xs input input-bordered"},null,512),[[x,vl.value.width]])]),o("div",null,[o("div",Ue,[o("span",_e,v(f(l)("table.cardHeight")),1)]),w(o("input",{"onUpdate:modelValue":u[14]||(u[14]=e=>vl.value.height=e),type:"number",placeholder:"Type here",class:"w-full max-w-xs input input-bordered"},null,512),[[x,vl.value.height]])])]),o("label",Se,[o("div",De,[o("span",Re,v(f(l)("table.textSize")),1)]),w(o("input",{"onUpdate:modelValue":u[15]||(u[15]=e=>fl.value=e),type:"number",placeholder:"Type here",class:"w-full max-w-xs input input-bordered"},null,512),[[x,fl.value]])]),o("label",ze,[o("div",Ae,[o("span",Ie,v(f(l)("table.highlightColor")),1)]),y(f(L),{ref_key:"colorPickerRef",ref:ul,modelValue:Cl.value,"onUpdate:modelValue":u[16]||(u[16]=e=>Cl.value=e),"pure-color":Cl.value,"onUpdate:pureColor":u[17]||(u[17]=e=>Cl.value=e)},null,8,["modelValue","pure-color"])]),o("label",Ne,[o("div",null,[o("div",je,[o("span",qe,v(f(l)("table.patternSetting")),1)]),o("div",Be,[y(A,{"row-count":f(el),"card-color":f(Qe),"pattern-color":f(We),"pattern-list":f(Ke)},null,8,["row-count","card-color","pattern-color","pattern-list"])])])]),o("div",Fe,[o("button",{class:"mt-5 btn btn-info btn-sm",onClick:n(_l,["stop"])},[o("span",null,v(f(l)("button.clearPattern")),1)]),o("div",{class:"tooltip","data-tip":f(l)("tooltip.defaultLayout")},[o("button",{class:"mt-5 btn btn-info btn-sm",onClick:Sl},[o("span",null,v(f(l)("button.DefaultPattern")),1)])],8,He)]),o("label",Oe,[o("div",Ee,[o("span",Ge,v(f(l)("table.alwaysDisplay")),1)]),o("input",{type:"checkbox",checked:gl.value,class:"mt-2 border-solid checkbox checkbox-secondary border-1",onChange:u[18]||(u[18]=e=>gl.value=!gl.value)},null,40,Je)])])],64))}});export{Me as default};