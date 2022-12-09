(function(){"use strict";var r={2346:function(r,e,t){var n=t(9242),u=t(3396),o=t(7139);const s={class:"displayCalc"},a={class:"keys"},i=(0,u._)("span",null,null,-1);function c(r,e,t,c,l,b){return(0,u.wg)(),(0,u.iD)("main",null,[(0,u.wy)((0,u._)("input",{style:{display:"none"},type:"text","onUpdate:modelValue":e[0]||(e[0]=r=>l.currentNumber=r)},null,512),[[n.nr,l.currentNumber]]),(0,u._)("div",s,[(0,u._)("span",null,(0,o.zw)(l.displayCalculator),1),(0,u._)("span",null,(0,o.zw)(l.currentNumber),1)]),(0,u._)("div",a,[(0,u._)("button",{class:"op__key",onClick:e[1]||(e[1]=(...r)=>b.clear&&b.clear(...r))},"C"),(0,u._)("button",{class:"op__key",onClick:e[2]||(e[2]=(...r)=>b.plusMinusNumber&&b.plusMinusNumber(...r))},"+/-"),(0,u._)("button",{class:"op__key",onClick:e[3]||(e[3]=r=>b.operationNumber("%"))},"%"),(0,u._)("button",{class:"op__key",onClick:e[4]||(e[4]=r=>b.operationNumber("/"))},"/"),(0,u._)("button",{class:"num__key",onClick:e[5]||(e[5]=r=>b.addNumber("7"))},"7"),(0,u._)("button",{class:"num__key",onClick:e[6]||(e[6]=r=>b.addNumber("8"))},"8"),(0,u._)("button",{class:"num__key",onClick:e[7]||(e[7]=r=>b.addNumber("9"))},"9"),(0,u._)("button",{class:"op__key",onClick:e[8]||(e[8]=r=>b.operationNumber("*"))},"x"),(0,u._)("button",{class:"num__key",onClick:e[9]||(e[9]=r=>b.addNumber("4"))},"4"),(0,u._)("button",{class:"num__key",onClick:e[10]||(e[10]=r=>b.addNumber("5"))},"5"),(0,u._)("button",{class:"num__key",onClick:e[11]||(e[11]=r=>b.addNumber("6"))},"6"),(0,u._)("button",{class:"op__key",onClick:e[12]||(e[12]=r=>b.operationNumber("-"))},"-"),(0,u._)("button",{class:"num__key",onClick:e[13]||(e[13]=r=>b.addNumber("1"))},"1"),(0,u._)("button",{class:"num__key",onClick:e[14]||(e[14]=r=>b.addNumber("2"))},"2"),(0,u._)("button",{class:"num__key",onClick:e[15]||(e[15]=r=>b.addNumber("3"))},"3"),(0,u._)("button",{class:"op__key",onClick:e[16]||(e[16]=r=>b.operationNumber("+"))},"+"),i,(0,u._)("button",{class:"num__key",onClick:e[17]||(e[17]=r=>b.addNumber("0"))},"0"),(0,u._)("button",{class:"num__key",onClick:e[18]||(e[18]=(...r)=>b.addDot&&b.addDot(...r))},"."),(0,u._)("button",{class:"eq__key",onClick:e[19]||(e[19]=(...r)=>b.equal&&b.equal(...r))},"=")])])}var l={name:"App",data(){return{currentNumber:"0",prevNumber:"0",operation:"",displayCalculator:"0"}},methods:{addNumber(r){"0"==r&&"0"==this.currentNumber||("0"==this.currentNumber&&(this.currentNumber=""),this.currentNumber+=r)},addDot(){this.currentNumber.includes(".")||(this.currentNumber+=".")},clear(){this.currentNumber=""},plusMinusNumber(){parseFloat(this.currentNumber)>0?this.currentNumber="-"+this.currentNumber:this.currentNumber=this.currentNumber.substring(1)},operationNumber(r){this.prevNumber=this.currentNumber,this.currentNumber="",this.operation=r,this.displayCalculator=this.prevNumber+" "+r},equal(){switch(this.displayCalculator=this.prevNumber+" "+this.operation+" "+this.currentNumber,this.operation){case"+":this.currentNumber=parseFloat(this.prevNumber)+parseFloat(this.currentNumber);break;case"-":this.currentNumber=parseFloat(this.prevNumber)-parseFloat(this.currentNumber);break;case"*":this.currentNumber=parseFloat(this.prevNumber)*parseFloat(this.currentNumber);break;case"/":this.currentNumber=parseFloat(this.prevNumber)/parseFloat(this.currentNumber);break;case"%":this.currentNumber=parseFloat(this.prevNumber)%parseFloat(this.currentNumber);break}this.currentNumber=this.currentNumber.toString()}}},b=t(89);const m=(0,b.Z)(l,[["render",c]]);var p=m;(0,n.ri)(p).mount("#app")}},e={};function t(n){var u=e[n];if(void 0!==u)return u.exports;var o=e[n]={exports:{}};return r[n](o,o.exports,t),o.exports}t.m=r,function(){var r=[];t.O=function(e,n,u,o){if(!n){var s=1/0;for(l=0;l<r.length;l++){n=r[l][0],u=r[l][1],o=r[l][2];for(var a=!0,i=0;i<n.length;i++)(!1&o||s>=o)&&Object.keys(t.O).every((function(r){return t.O[r](n[i])}))?n.splice(i--,1):(a=!1,o<s&&(s=o));if(a){r.splice(l--,1);var c=u();void 0!==c&&(e=c)}}return e}o=o||0;for(var l=r.length;l>0&&r[l-1][2]>o;l--)r[l]=r[l-1];r[l]=[n,u,o]}}(),function(){t.n=function(r){var e=r&&r.__esModule?function(){return r["default"]}:function(){return r};return t.d(e,{a:e}),e}}(),function(){t.d=function(r,e){for(var n in e)t.o(e,n)&&!t.o(r,n)&&Object.defineProperty(r,n,{enumerable:!0,get:e[n]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(r){if("object"===typeof window)return window}}()}(),function(){t.o=function(r,e){return Object.prototype.hasOwnProperty.call(r,e)}}(),function(){var r={143:0};t.O.j=function(e){return 0===r[e]};var e=function(e,n){var u,o,s=n[0],a=n[1],i=n[2],c=0;if(s.some((function(e){return 0!==r[e]}))){for(u in a)t.o(a,u)&&(t.m[u]=a[u]);if(i)var l=i(t)}for(e&&e(n);c<s.length;c++)o=s[c],t.o(r,o)&&r[o]&&r[o][0](),r[o]=0;return t.O(l)},n=self["webpackChunkcalculator_project"]=self["webpackChunkcalculator_project"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=t.O(void 0,[998],(function(){return t(2346)}));n=t.O(n)})();
//# sourceMappingURL=app.2e7d6f66.js.map