(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c252953e"],{"2afd":function(e,t,r){"use strict";r("3f69")},"2edc":function(e,t,r){},3762:function(e,t,r){"use strict";r("7f4b")},"3ec0":function(e,t,r){e.exports=r.p+"img/linkedin-in-brands.7ab05450.svg"},"3f69":function(e,t,r){},"4fe8":function(e,t,r){"use strict";r.r(t);var n=r("7a23"),o={class:"container"},a={class:"contact"},i=Object(n["g"])("h1",null,"say hi! :-)",-1),c={for:"name"},s={key:0,class:"error"},u={for:"email"},l={key:0,class:"error"},f={for:"subject"},h={key:0,class:"error"},d={for:"message"},p={key:0,class:"error"},m={class:"align__button"},g=["disabled"],b=Object(n["g"])("span",{class:"button__text"},"SEND",-1),v=[b];function y(e,t,r,b,y,w){var j=Object(n["C"])("show-message-vue"),_=Object(n["C"])("socialNetworksVue");return Object(n["v"])(),Object(n["f"])("div",o,[y.message?(Object(n["v"])(),Object(n["d"])(j,{key:0,msg:y.message,success:!0},null,8,["msg"])):Object(n["e"])("",!0),Object(n["g"])("div",a,[i,Object(n["g"])("form",{onSubmit:t[4]||(t[4]=Object(n["K"])((function(){return w.sendEmail&&w.sendEmail.apply(w,arguments)}),["prevent"]))},[Object(n["g"])("fieldset",null,[Object(n["g"])("label",c,[Object(n["J"])(Object(n["g"])("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=function(e){return y.contact.from_name=e}),id:"name",placeholder:"name",name:"from_name"},null,512),[[n["G"],y.contact.from_name]]),this.error.from_name?(Object(n["v"])(),Object(n["f"])("span",s,"name field is required")):Object(n["e"])("",!0)]),Object(n["g"])("label",u,[Object(n["J"])(Object(n["g"])("input",{type:"email","onUpdate:modelValue":t[1]||(t[1]=function(e){return y.contact.email=e}),id:"email",name:"email",placeholder:"email"},null,512),[[n["G"],y.contact.email]]),this.error.email?(Object(n["v"])(),Object(n["f"])("span",l,"email field is required")):Object(n["e"])("",!0)])]),Object(n["g"])("label",f,[Object(n["J"])(Object(n["g"])("input",{type:"text","onUpdate:modelValue":t[2]||(t[2]=function(e){return y.contact.subject=e}),id:"subject",name:"subject",placeholder:"subject"},null,512),[[n["G"],y.contact.subject]]),this.error.subject?(Object(n["v"])(),Object(n["f"])("span",h,"subject field is required")):Object(n["e"])("",!0)]),Object(n["g"])("label",d,[Object(n["J"])(Object(n["g"])("textarea",{name:"message",id:"",cols:"30","onUpdate:modelValue":t[3]||(t[3]=function(e){return y.contact.message=e}),rows:"10",placeholder:"message"},null,512),[[n["G"],y.contact.message]]),this.error.message?(Object(n["v"])(),Object(n["f"])("span",p,"message field is required")):Object(n["e"])("",!0)]),Object(n["g"])("div",m,[Object(n["g"])("button",{type:"submit",class:Object(n["p"])(["button",{button__loading:y.load}]),disabled:y.load},v,10,g)])],32)]),Object(n["j"])(_)])}r("d3b7");function w(e,t,r,n,o,a,i){try{var c=e[a](i),s=c.value}catch(u){return void r(u)}c.done?t(s):Promise.resolve(s).then(n,o)}function j(e){return function(){var t=this,r=arguments;return new Promise((function(n,o){var a=e.apply(t,r);function i(e){w(a,n,o,i,c,"next",e)}function c(e){w(a,n,o,i,c,"throw",e)}i(void 0)}))}}r("96cf");var _=r("d5d8");const O={_origin:"https://api.emailjs.com"},k=(e,t="https://api.emailjs.com")=>{O._userID=e,O._origin=t},x=(e,t,r)=>{if(!e)throw"The user ID is required. Visit https://dashboard.emailjs.com/admin/integration";if(!t)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!r)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};class L{constructor(e){this.status=e.status,this.text=e.responseText}}const E=(e,t,r={})=>new Promise((n,o)=>{const a=new XMLHttpRequest;a.addEventListener("load",({target:e})=>{const t=new L(e);200===t.status||"OK"===t.text?n(t):o(t)}),a.addEventListener("error",({target:e})=>{o(new L(e))}),a.open("POST",O._origin+e,!0),Object.keys(r).forEach(e=>{a.setRequestHeader(e,r[e])}),a.send(t)}),T=(e,t,r,n)=>{const o=n||O._userID;x(o,e,t);const a={lib_version:"3.4.0",user_id:o,service_id:e,template_id:t,template_params:r};return E("/api/v1.0/email/send",JSON.stringify(a),{"Content-type":"application/json"})},N=e=>{let t;if(t="string"===typeof e?document.querySelector(e):e,!t||"FORM"!==t.nodeName)throw"The 3rd parameter is expected to be the HTML form element or the style selector of form";return t},q=(e,t,r,n)=>{const o=n||O._userID,a=N(r);x(o,e,t);const i=new FormData(a);return i.append("lib_version","3.4.0"),i.append("service_id",e),i.append("template_id",t),i.append("user_id",o),E("/api/v1.0/email/send-form",i)};var C={init:k,send:T,sendForm:q},G=r("94f7"),I=r.n(G),S=function(e){return Object(n["y"])("data-v-50b98864"),e=e(),Object(n["w"])(),e},F={class:"msg__content"},P=S((function(){return Object(n["g"])("img",{src:I.a,alt:""},null,-1)})),V=S((function(){return Object(n["g"])("div",{class:"msg__progress"},[Object(n["g"])("div",{class:"progress__bar"})],-1)}));function M(e,t,r,o,a,i){return Object(n["v"])(),Object(n["f"])("div",{class:Object(n["p"])(["msg",{"error-msg":!r.success,"success-msg":r.success}])},[Object(n["g"])("div",F,[Object(n["g"])("span",null,Object(n["E"])(r.msg),1),P]),V],2)}var J={name:"message",props:{msg:{type:String,required:!0},success:{type:Boolean,required:!0}}},R=(r("3762"),r("6b0d")),D=r.n(R);const U=D()(J,[["render",M],["__scopeId","data-v-50b98864"]]);var Y=U,H={name:"contact",components:{socialNetworksVue:_["a"],showMessageVue:Y},data:function(){return{load:!1,message:"",contact:{from_name:"",email:"",subject:"",message:""},error:{from_name:!1,email:!1,subject:!1,message:!1}}},methods:{sendEmail:function(){var e=this;return j(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(t.prev=0,e.load=!0,e.validation()){t.next=8;break}return t.next=5,C.send("service_p0g0hrj","template_6au9gfd",e.contact,"user_iE7JjBRVQcI03YJ7dP4Yz");case 5:e.cleanForm(),e.showMessage(),e.hideMessage();case 8:e.load=!1,t.next=16;break;case 11:t.prev=11,t.t0=t["catch"](0),e.load=!1,console.log(t.t0),e.hideMessage();case 16:case"end":return t.stop()}}),t,null,[[0,11]])})))()},showMessage:function(){this.message="Message sent successfully"},hideMessage:function(){var e=this;setTimeout((function(){e.message=""}),2900)},validation:function(){var e=!1;for(var t in this.contact){var r=this.contact[t];r?this.error[t]=!1:(e=!0,this.error[t]=!0)}return e},cleanForm:function(){this.contact.subject="",this.contact.message="",this.contact.from_name="",this.contact.email=""}}};r("9800");const A=D()(H,[["render",y]]);t["default"]=A},"7f4b":function(e,t,r){},"80f7":function(e,t,r){e.exports=r.p+"img/github-brands.06b7e22f.svg"},"94f7":function(e,t,r){e.exports=r.p+"img/checked.69008dc0.svg"},"96cf":function(e,t,r){var n=function(e){"use strict";var t,r=Object.prototype,n=r.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function s(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{s({},"")}catch(G){s=function(e,t,r){return e[t]=r}}function u(e,t,r,n){var o=t&&t.prototype instanceof g?t:g,a=Object.create(o.prototype),i=new N(n||[]);return a._invoke=x(e,r,i),a}function l(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(G){return{type:"throw",arg:G}}}e.wrap=u;var f="suspendedStart",h="suspendedYield",d="executing",p="completed",m={};function g(){}function b(){}function v(){}var y={};s(y,a,(function(){return this}));var w=Object.getPrototypeOf,j=w&&w(w(q([])));j&&j!==r&&n.call(j,a)&&(y=j);var _=v.prototype=g.prototype=Object.create(y);function O(e){["next","throw","return"].forEach((function(t){s(e,t,(function(e){return this._invoke(t,e)}))}))}function k(e,t){function r(o,a,i,c){var s=l(e[o],e,a);if("throw"!==s.type){var u=s.arg,f=u.value;return f&&"object"===typeof f&&n.call(f,"__await")?t.resolve(f.__await).then((function(e){r("next",e,i,c)}),(function(e){r("throw",e,i,c)})):t.resolve(f).then((function(e){u.value=e,i(u)}),(function(e){return r("throw",e,i,c)}))}c(s.arg)}var o;function a(e,n){function a(){return new t((function(t,o){r(e,n,t,o)}))}return o=o?o.then(a,a):a()}this._invoke=a}function x(e,t,r){var n=f;return function(o,a){if(n===d)throw new Error("Generator is already running");if(n===p){if("throw"===o)throw a;return C()}r.method=o,r.arg=a;while(1){var i=r.delegate;if(i){var c=L(i,r);if(c){if(c===m)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=p,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=d;var s=l(e,t,r);if("normal"===s.type){if(n=r.done?p:h,s.arg===m)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n=p,r.method="throw",r.arg=s.arg)}}}function L(e,r){var n=e.iterator[r.method];if(n===t){if(r.delegate=null,"throw"===r.method){if(e.iterator["return"]&&(r.method="return",r.arg=t,L(e,r),"throw"===r.method))return m;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var o=l(n,e.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,m;var a=o.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,m):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,m)}function E(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function T(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function N(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(E,this),this.reset(!0)}function q(e){if(e){var r=e[a];if(r)return r.call(e);if("function"===typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function r(){while(++o<e.length)if(n.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return i.next=i}}return{next:C}}function C(){return{value:t,done:!0}}return b.prototype=v,s(_,"constructor",v),s(v,"constructor",b),b.displayName=s(v,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"===typeof e&&e.constructor;return!!t&&(t===b||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,v):(e.__proto__=v,s(e,c,"GeneratorFunction")),e.prototype=Object.create(_),e},e.awrap=function(e){return{__await:e}},O(k.prototype),s(k.prototype,i,(function(){return this})),e.AsyncIterator=k,e.async=function(t,r,n,o,a){void 0===a&&(a=Promise);var i=new k(u(t,r,n,o),a);return e.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},O(_),s(_,c,"Generator"),s(_,a,(function(){return this})),s(_,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){while(t.length){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=q,N.prototype={constructor:N,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(T),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0],t=e.completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return c.type="throw",c.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var s=n.call(i,"catchLoc"),u=n.call(i,"finallyLoc");if(s&&u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=e,i.arg=t,a?(this.method="next",this.next=a.finallyLoc,m):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),m},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),T(r),m}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;T(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:q(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),m}},e}(e.exports);try{regeneratorRuntime=n}catch(o){"object"===typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}},9800:function(e,t,r){"use strict";r("2edc")},d5d8:function(e,t,r){"use strict";var n=r("7a23"),o=r("e864"),a=r.n(o),i=r("80f7"),c=r.n(i),s=r("d787"),u=r.n(s),l=r("3ec0"),f=r.n(l),h=function(e){return Object(n["y"])("data-v-5e071572"),e=e(),Object(n["w"])(),e},d={class:"social__networks"},p={class:"social__networks__center"},m=h((function(){return Object(n["g"])("a",{href:"https://www.freecodecamp.org/fcc4a6519fb-9404-4d1d-864c-5326a950c783",target:"_blank"},[Object(n["g"])("img",{class:"icons",src:a.a,alt:"social networks freeCodeCamp"})],-1)})),g=[m],b=Object(n["h"])('<span class="social__networks__circle" data-v-5e071572><a href="https://github.com/daasc" target="_blank" rel="noopener" data-v-5e071572><img class="icons" src="'+c.a+'" alt="social networks freeCodeCamp" data-v-5e071572></a></span><span class="social__networks__circle" data-v-5e071572><a href="https://www.hackerrank.com/paulojhole" target="_blank" rel="noopener" data-v-5e071572><img class="icons" src="'+u.a+'" alt="social networks freeCodeCamp" data-v-5e071572></a></span><span class="social__networks__circle" data-v-5e071572><a href="https://www.linkedin.com/in/paulo-sobrinho-93b527185/" target="_blank" rel="noopener" data-v-5e071572><img class="icons" src="'+f.a+'" alt="social networks freeCodeCamp" data-v-5e071572></a></span>',3);function v(e,t,r,o,a,i){return Object(n["v"])(),Object(n["f"])("div",d,[Object(n["g"])("div",p,[Object(n["g"])("span",{class:"social__networks__circle",onClick:t[0]||(t[0]=function(){return e.$red&&e.$red.apply(e,arguments)})},g),b])])}var y={name:"socialNetworks"},w=(r("2afd"),r("6b0d")),j=r.n(w);const _=j()(y,[["render",v],["__scopeId","data-v-5e071572"]]);t["a"]=_},d787:function(e,t,r){e.exports=r.p+"img/hackerrank-brands.b721ab88.svg"},e864:function(e,t,r){e.exports=r.p+"img/free-code-camp-brands.1ac9af7b.svg"}}]);
//# sourceMappingURL=chunk-c252953e.6bf04890.js.map