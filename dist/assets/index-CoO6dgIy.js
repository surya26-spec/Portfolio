(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const i of l)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(l){const i={};return l.integrity&&(i.integrity=l.integrity),l.referrerPolicy&&(i.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?i.credentials="include":l.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(l){if(l.ep)return;l.ep=!0;const i=n(l);fetch(l.href,i)}})();function ic(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Ys={exports:{}},tl={},Ks={exports:{}},L={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gn=Symbol.for("react.element"),oc=Symbol.for("react.portal"),sc=Symbol.for("react.fragment"),uc=Symbol.for("react.strict_mode"),ac=Symbol.for("react.profiler"),cc=Symbol.for("react.provider"),dc=Symbol.for("react.context"),fc=Symbol.for("react.forward_ref"),pc=Symbol.for("react.suspense"),mc=Symbol.for("react.memo"),hc=Symbol.for("react.lazy"),Do=Symbol.iterator;function vc(e){return e===null||typeof e!="object"?null:(e=Do&&e[Do]||e["@@iterator"],typeof e=="function"?e:null)}var Gs={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Xs=Object.assign,Zs={};function ln(e,t,n){this.props=e,this.context=t,this.refs=Zs,this.updater=n||Gs}ln.prototype.isReactComponent={};ln.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};ln.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Js(){}Js.prototype=ln.prototype;function $i(e,t,n){this.props=e,this.context=t,this.refs=Zs,this.updater=n||Gs}var Vi=$i.prototype=new Js;Vi.constructor=$i;Xs(Vi,ln.prototype);Vi.isPureReactComponent=!0;var Fo=Array.isArray,qs=Object.prototype.hasOwnProperty,Bi={current:null},bs={key:!0,ref:!0,__self:!0,__source:!0};function eu(e,t,n){var r,l={},i=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(i=""+t.key),t)qs.call(t,r)&&!bs.hasOwnProperty(r)&&(l[r]=t[r]);var s=arguments.length-2;if(s===1)l.children=n;else if(1<s){for(var u=Array(s),d=0;d<s;d++)u[d]=arguments[d+2];l.children=u}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)l[r]===void 0&&(l[r]=s[r]);return{$$typeof:Gn,type:e,key:i,ref:o,props:l,_owner:Bi.current}}function gc(e,t){return{$$typeof:Gn,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Hi(e){return typeof e=="object"&&e!==null&&e.$$typeof===Gn}function yc(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Uo=/\/+/g;function wl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?yc(""+e.key):t.toString(36)}function xr(e,t,n,r,l){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case Gn:case oc:o=!0}}if(o)return o=e,l=l(o),e=r===""?"."+wl(o,0):r,Fo(l)?(n="",e!=null&&(n=e.replace(Uo,"$&/")+"/"),xr(l,t,n,"",function(d){return d})):l!=null&&(Hi(l)&&(l=gc(l,n+(!l.key||o&&o.key===l.key?"":(""+l.key).replace(Uo,"$&/")+"/")+e)),t.push(l)),1;if(o=0,r=r===""?".":r+":",Fo(e))for(var s=0;s<e.length;s++){i=e[s];var u=r+wl(i,s);o+=xr(i,t,n,u,l)}else if(u=vc(e),typeof u=="function")for(e=u.call(e),s=0;!(i=e.next()).done;)i=i.value,u=r+wl(i,s++),o+=xr(i,t,n,u,l);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function tr(e,t,n){if(e==null)return e;var r=[],l=0;return xr(e,r,"","",function(i){return t.call(n,i,l++)}),r}function xc(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ue={current:null},wr={transition:null},wc={ReactCurrentDispatcher:ue,ReactCurrentBatchConfig:wr,ReactCurrentOwner:Bi};function tu(){throw Error("act(...) is not supported in production builds of React.")}L.Children={map:tr,forEach:function(e,t,n){tr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return tr(e,function(){t++}),t},toArray:function(e){return tr(e,function(t){return t})||[]},only:function(e){if(!Hi(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};L.Component=ln;L.Fragment=sc;L.Profiler=ac;L.PureComponent=$i;L.StrictMode=uc;L.Suspense=pc;L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=wc;L.act=tu;L.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Xs({},e.props),l=e.key,i=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,o=Bi.current),t.key!==void 0&&(l=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(u in t)qs.call(t,u)&&!bs.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&s!==void 0?s[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){s=Array(u);for(var d=0;d<u;d++)s[d]=arguments[d+2];r.children=s}return{$$typeof:Gn,type:e.type,key:l,ref:i,props:r,_owner:o}};L.createContext=function(e){return e={$$typeof:dc,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:cc,_context:e},e.Consumer=e};L.createElement=eu;L.createFactory=function(e){var t=eu.bind(null,e);return t.type=e,t};L.createRef=function(){return{current:null}};L.forwardRef=function(e){return{$$typeof:fc,render:e}};L.isValidElement=Hi;L.lazy=function(e){return{$$typeof:hc,_payload:{_status:-1,_result:e},_init:xc}};L.memo=function(e,t){return{$$typeof:mc,type:e,compare:t===void 0?null:t}};L.startTransition=function(e){var t=wr.transition;wr.transition={};try{e()}finally{wr.transition=t}};L.unstable_act=tu;L.useCallback=function(e,t){return ue.current.useCallback(e,t)};L.useContext=function(e){return ue.current.useContext(e)};L.useDebugValue=function(){};L.useDeferredValue=function(e){return ue.current.useDeferredValue(e)};L.useEffect=function(e,t){return ue.current.useEffect(e,t)};L.useId=function(){return ue.current.useId()};L.useImperativeHandle=function(e,t,n){return ue.current.useImperativeHandle(e,t,n)};L.useInsertionEffect=function(e,t){return ue.current.useInsertionEffect(e,t)};L.useLayoutEffect=function(e,t){return ue.current.useLayoutEffect(e,t)};L.useMemo=function(e,t){return ue.current.useMemo(e,t)};L.useReducer=function(e,t,n){return ue.current.useReducer(e,t,n)};L.useRef=function(e){return ue.current.useRef(e)};L.useState=function(e){return ue.current.useState(e)};L.useSyncExternalStore=function(e,t,n){return ue.current.useSyncExternalStore(e,t,n)};L.useTransition=function(){return ue.current.useTransition()};L.version="18.3.1";Ks.exports=L;var I=Ks.exports;const kc=ic(I);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sc=I,Ec=Symbol.for("react.element"),Nc=Symbol.for("react.fragment"),jc=Object.prototype.hasOwnProperty,Cc=Sc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,_c={key:!0,ref:!0,__self:!0,__source:!0};function nu(e,t,n){var r,l={},i=null,o=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)jc.call(t,r)&&!_c.hasOwnProperty(r)&&(l[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)l[r]===void 0&&(l[r]=t[r]);return{$$typeof:Ec,type:e,key:i,ref:o,props:l,_owner:Cc.current}}tl.Fragment=Nc;tl.jsx=nu;tl.jsxs=nu;Ys.exports=tl;var a=Ys.exports,Kl={},ru={exports:{}},xe={},lu={exports:{}},iu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(N,P){var z=N.length;N.push(P);e:for(;0<z;){var Q=z-1>>>1,Z=N[Q];if(0<l(Z,P))N[Q]=P,N[z]=Z,z=Q;else break e}}function n(N){return N.length===0?null:N[0]}function r(N){if(N.length===0)return null;var P=N[0],z=N.pop();if(z!==P){N[0]=z;e:for(var Q=0,Z=N.length,bn=Z>>>1;Q<bn;){var vt=2*(Q+1)-1,xl=N[vt],gt=vt+1,er=N[gt];if(0>l(xl,z))gt<Z&&0>l(er,xl)?(N[Q]=er,N[gt]=z,Q=gt):(N[Q]=xl,N[vt]=z,Q=vt);else if(gt<Z&&0>l(er,z))N[Q]=er,N[gt]=z,Q=gt;else break e}}return P}function l(N,P){var z=N.sortIndex-P.sortIndex;return z!==0?z:N.id-P.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var u=[],d=[],v=1,h=null,m=3,x=!1,w=!1,k=!1,U=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(N){for(var P=n(d);P!==null;){if(P.callback===null)r(d);else if(P.startTime<=N)r(d),P.sortIndex=P.expirationTime,t(u,P);else break;P=n(d)}}function g(N){if(k=!1,p(N),!w)if(n(u)!==null)w=!0,gl(E);else{var P=n(d);P!==null&&yl(g,P.startTime-N)}}function E(N,P){w=!1,k&&(k=!1,f(_),_=-1),x=!0;var z=m;try{for(p(P),h=n(u);h!==null&&(!(h.expirationTime>P)||N&&!_e());){var Q=h.callback;if(typeof Q=="function"){h.callback=null,m=h.priorityLevel;var Z=Q(h.expirationTime<=P);P=e.unstable_now(),typeof Z=="function"?h.callback=Z:h===n(u)&&r(u),p(P)}else r(u);h=n(u)}if(h!==null)var bn=!0;else{var vt=n(d);vt!==null&&yl(g,vt.startTime-P),bn=!1}return bn}finally{h=null,m=z,x=!1}}var j=!1,C=null,_=-1,W=5,T=-1;function _e(){return!(e.unstable_now()-T<W)}function un(){if(C!==null){var N=e.unstable_now();T=N;var P=!0;try{P=C(!0,N)}finally{P?an():(j=!1,C=null)}}else j=!1}var an;if(typeof c=="function")an=function(){c(un)};else if(typeof MessageChannel<"u"){var Oo=new MessageChannel,lc=Oo.port2;Oo.port1.onmessage=un,an=function(){lc.postMessage(null)}}else an=function(){U(un,0)};function gl(N){C=N,j||(j=!0,an())}function yl(N,P){_=U(function(){N(e.unstable_now())},P)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(N){N.callback=null},e.unstable_continueExecution=function(){w||x||(w=!0,gl(E))},e.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):W=0<N?Math.floor(1e3/N):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(N){switch(m){case 1:case 2:case 3:var P=3;break;default:P=m}var z=m;m=P;try{return N()}finally{m=z}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(N,P){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var z=m;m=N;try{return P()}finally{m=z}},e.unstable_scheduleCallback=function(N,P,z){var Q=e.unstable_now();switch(typeof z=="object"&&z!==null?(z=z.delay,z=typeof z=="number"&&0<z?Q+z:Q):z=Q,N){case 1:var Z=-1;break;case 2:Z=250;break;case 5:Z=1073741823;break;case 4:Z=1e4;break;default:Z=5e3}return Z=z+Z,N={id:v++,callback:P,priorityLevel:N,startTime:z,expirationTime:Z,sortIndex:-1},z>Q?(N.sortIndex=z,t(d,N),n(u)===null&&N===n(d)&&(k?(f(_),_=-1):k=!0,yl(g,z-Q))):(N.sortIndex=Z,t(u,N),w||x||(w=!0,gl(E))),N},e.unstable_shouldYield=_e,e.unstable_wrapCallback=function(N){var P=m;return function(){var z=m;m=P;try{return N.apply(this,arguments)}finally{m=z}}}})(iu);lu.exports=iu;var Pc=lu.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zc=I,ye=Pc;function y(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ou=new Set,Tn={};function Lt(e,t){Jt(e,t),Jt(e+"Capture",t)}function Jt(e,t){for(Tn[e]=t,e=0;e<t.length;e++)ou.add(t[e])}var Qe=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Gl=Object.prototype.hasOwnProperty,Lc=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ao={},$o={};function Tc(e){return Gl.call($o,e)?!0:Gl.call(Ao,e)?!1:Lc.test(e)?$o[e]=!0:(Ao[e]=!0,!1)}function Ic(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Rc(e,t,n,r){if(t===null||typeof t>"u"||Ic(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ae(e,t,n,r,l,i,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=o}var te={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){te[e]=new ae(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];te[t]=new ae(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){te[e]=new ae(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){te[e]=new ae(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){te[e]=new ae(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){te[e]=new ae(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){te[e]=new ae(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){te[e]=new ae(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){te[e]=new ae(e,5,!1,e.toLowerCase(),null,!1,!1)});var Wi=/[\-:]([a-z])/g;function Qi(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Wi,Qi);te[t]=new ae(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Wi,Qi);te[t]=new ae(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Wi,Qi);te[t]=new ae(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){te[e]=new ae(e,1,!1,e.toLowerCase(),null,!1,!1)});te.xlinkHref=new ae("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){te[e]=new ae(e,1,!1,e.toLowerCase(),null,!0,!0)});function Yi(e,t,n,r){var l=te.hasOwnProperty(t)?te[t]:null;(l!==null?l.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Rc(t,n,l,r)&&(n=null),r||l===null?Tc(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):l.mustUseProperty?e[l.propertyName]=n===null?l.type===3?!1:"":n:(t=l.attributeName,r=l.attributeNamespace,n===null?e.removeAttribute(t):(l=l.type,n=l===3||l===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Xe=zc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,nr=Symbol.for("react.element"),Rt=Symbol.for("react.portal"),Mt=Symbol.for("react.fragment"),Ki=Symbol.for("react.strict_mode"),Xl=Symbol.for("react.profiler"),su=Symbol.for("react.provider"),uu=Symbol.for("react.context"),Gi=Symbol.for("react.forward_ref"),Zl=Symbol.for("react.suspense"),Jl=Symbol.for("react.suspense_list"),Xi=Symbol.for("react.memo"),Je=Symbol.for("react.lazy"),au=Symbol.for("react.offscreen"),Vo=Symbol.iterator;function cn(e){return e===null||typeof e!="object"?null:(e=Vo&&e[Vo]||e["@@iterator"],typeof e=="function"?e:null)}var B=Object.assign,kl;function yn(e){if(kl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);kl=t&&t[1]||""}return`
`+kl+e}var Sl=!1;function El(e,t){if(!e||Sl)return"";Sl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(d){var r=d}Reflect.construct(e,[],t)}else{try{t.call()}catch(d){r=d}e.call(t.prototype)}else{try{throw Error()}catch(d){r=d}e()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var l=d.stack.split(`
`),i=r.stack.split(`
`),o=l.length-1,s=i.length-1;1<=o&&0<=s&&l[o]!==i[s];)s--;for(;1<=o&&0<=s;o--,s--)if(l[o]!==i[s]){if(o!==1||s!==1)do if(o--,s--,0>s||l[o]!==i[s]){var u=`
`+l[o].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=o&&0<=s);break}}}finally{Sl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?yn(e):""}function Mc(e){switch(e.tag){case 5:return yn(e.type);case 16:return yn("Lazy");case 13:return yn("Suspense");case 19:return yn("SuspenseList");case 0:case 2:case 15:return e=El(e.type,!1),e;case 11:return e=El(e.type.render,!1),e;case 1:return e=El(e.type,!0),e;default:return""}}function ql(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Mt:return"Fragment";case Rt:return"Portal";case Xl:return"Profiler";case Ki:return"StrictMode";case Zl:return"Suspense";case Jl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case uu:return(e.displayName||"Context")+".Consumer";case su:return(e._context.displayName||"Context")+".Provider";case Gi:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Xi:return t=e.displayName||null,t!==null?t:ql(e.type)||"Memo";case Je:t=e._payload,e=e._init;try{return ql(e(t))}catch{}}return null}function Oc(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ql(t);case 8:return t===Ki?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function dt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function cu(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Dc(e){var t=cu(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function rr(e){e._valueTracker||(e._valueTracker=Dc(e))}function du(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=cu(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Tr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function bl(e,t){var n=t.checked;return B({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Bo(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=dt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function fu(e,t){t=t.checked,t!=null&&Yi(e,"checked",t,!1)}function ei(e,t){fu(e,t);var n=dt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ti(e,t.type,n):t.hasOwnProperty("defaultValue")&&ti(e,t.type,dt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Ho(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function ti(e,t,n){(t!=="number"||Tr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var xn=Array.isArray;function Qt(e,t,n,r){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&r&&(e[n].defaultSelected=!0)}else{for(n=""+dt(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function ni(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(y(91));return B({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Wo(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(y(92));if(xn(n)){if(1<n.length)throw Error(y(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:dt(n)}}function pu(e,t){var n=dt(t.value),r=dt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Qo(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function mu(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ri(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?mu(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var lr,hu=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,l){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,l)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(lr=lr||document.createElement("div"),lr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=lr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function In(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Sn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Fc=["Webkit","ms","Moz","O"];Object.keys(Sn).forEach(function(e){Fc.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Sn[t]=Sn[e]})});function vu(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Sn.hasOwnProperty(e)&&Sn[e]?(""+t).trim():t+"px"}function gu(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,l=vu(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,l):e[n]=l}}var Uc=B({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function li(e,t){if(t){if(Uc[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(y(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(y(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(y(61))}if(t.style!=null&&typeof t.style!="object")throw Error(y(62))}}function ii(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var oi=null;function Zi(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var si=null,Yt=null,Kt=null;function Yo(e){if(e=Jn(e)){if(typeof si!="function")throw Error(y(280));var t=e.stateNode;t&&(t=ol(t),si(e.stateNode,e.type,t))}}function yu(e){Yt?Kt?Kt.push(e):Kt=[e]:Yt=e}function xu(){if(Yt){var e=Yt,t=Kt;if(Kt=Yt=null,Yo(e),t)for(e=0;e<t.length;e++)Yo(t[e])}}function wu(e,t){return e(t)}function ku(){}var Nl=!1;function Su(e,t,n){if(Nl)return e(t,n);Nl=!0;try{return wu(e,t,n)}finally{Nl=!1,(Yt!==null||Kt!==null)&&(ku(),xu())}}function Rn(e,t){var n=e.stateNode;if(n===null)return null;var r=ol(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(y(231,t,typeof n));return n}var ui=!1;if(Qe)try{var dn={};Object.defineProperty(dn,"passive",{get:function(){ui=!0}}),window.addEventListener("test",dn,dn),window.removeEventListener("test",dn,dn)}catch{ui=!1}function Ac(e,t,n,r,l,i,o,s,u){var d=Array.prototype.slice.call(arguments,3);try{t.apply(n,d)}catch(v){this.onError(v)}}var En=!1,Ir=null,Rr=!1,ai=null,$c={onError:function(e){En=!0,Ir=e}};function Vc(e,t,n,r,l,i,o,s,u){En=!1,Ir=null,Ac.apply($c,arguments)}function Bc(e,t,n,r,l,i,o,s,u){if(Vc.apply(this,arguments),En){if(En){var d=Ir;En=!1,Ir=null}else throw Error(y(198));Rr||(Rr=!0,ai=d)}}function Tt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Eu(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Ko(e){if(Tt(e)!==e)throw Error(y(188))}function Hc(e){var t=e.alternate;if(!t){if(t=Tt(e),t===null)throw Error(y(188));return t!==e?null:e}for(var n=e,r=t;;){var l=n.return;if(l===null)break;var i=l.alternate;if(i===null){if(r=l.return,r!==null){n=r;continue}break}if(l.child===i.child){for(i=l.child;i;){if(i===n)return Ko(l),e;if(i===r)return Ko(l),t;i=i.sibling}throw Error(y(188))}if(n.return!==r.return)n=l,r=i;else{for(var o=!1,s=l.child;s;){if(s===n){o=!0,n=l,r=i;break}if(s===r){o=!0,r=l,n=i;break}s=s.sibling}if(!o){for(s=i.child;s;){if(s===n){o=!0,n=i,r=l;break}if(s===r){o=!0,r=i,n=l;break}s=s.sibling}if(!o)throw Error(y(189))}}if(n.alternate!==r)throw Error(y(190))}if(n.tag!==3)throw Error(y(188));return n.stateNode.current===n?e:t}function Nu(e){return e=Hc(e),e!==null?ju(e):null}function ju(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=ju(e);if(t!==null)return t;e=e.sibling}return null}var Cu=ye.unstable_scheduleCallback,Go=ye.unstable_cancelCallback,Wc=ye.unstable_shouldYield,Qc=ye.unstable_requestPaint,Y=ye.unstable_now,Yc=ye.unstable_getCurrentPriorityLevel,Ji=ye.unstable_ImmediatePriority,_u=ye.unstable_UserBlockingPriority,Mr=ye.unstable_NormalPriority,Kc=ye.unstable_LowPriority,Pu=ye.unstable_IdlePriority,nl=null,Ue=null;function Gc(e){if(Ue&&typeof Ue.onCommitFiberRoot=="function")try{Ue.onCommitFiberRoot(nl,e,void 0,(e.current.flags&128)===128)}catch{}}var Ie=Math.clz32?Math.clz32:Jc,Xc=Math.log,Zc=Math.LN2;function Jc(e){return e>>>=0,e===0?32:31-(Xc(e)/Zc|0)|0}var ir=64,or=4194304;function wn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Or(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,l=e.suspendedLanes,i=e.pingedLanes,o=n&268435455;if(o!==0){var s=o&~l;s!==0?r=wn(s):(i&=o,i!==0&&(r=wn(i)))}else o=n&~l,o!==0?r=wn(o):i!==0&&(r=wn(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&l)&&(l=r&-r,i=t&-t,l>=i||l===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Ie(t),l=1<<n,r|=e[n],t&=~l;return r}function qc(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function bc(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,i=e.pendingLanes;0<i;){var o=31-Ie(i),s=1<<o,u=l[o];u===-1?(!(s&n)||s&r)&&(l[o]=qc(s,t)):u<=t&&(e.expiredLanes|=s),i&=~s}}function ci(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function zu(){var e=ir;return ir<<=1,!(ir&4194240)&&(ir=64),e}function jl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Xn(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ie(t),e[t]=n}function ed(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var l=31-Ie(n),i=1<<l;t[l]=0,r[l]=-1,e[l]=-1,n&=~i}}function qi(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ie(n),l=1<<r;l&t|e[r]&t&&(e[r]|=t),n&=~l}}var M=0;function Lu(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Tu,bi,Iu,Ru,Mu,di=!1,sr=[],rt=null,lt=null,it=null,Mn=new Map,On=new Map,be=[],td="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Xo(e,t){switch(e){case"focusin":case"focusout":rt=null;break;case"dragenter":case"dragleave":lt=null;break;case"mouseover":case"mouseout":it=null;break;case"pointerover":case"pointerout":Mn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":On.delete(t.pointerId)}}function fn(e,t,n,r,l,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[l]},t!==null&&(t=Jn(t),t!==null&&bi(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function nd(e,t,n,r,l){switch(t){case"focusin":return rt=fn(rt,e,t,n,r,l),!0;case"dragenter":return lt=fn(lt,e,t,n,r,l),!0;case"mouseover":return it=fn(it,e,t,n,r,l),!0;case"pointerover":var i=l.pointerId;return Mn.set(i,fn(Mn.get(i)||null,e,t,n,r,l)),!0;case"gotpointercapture":return i=l.pointerId,On.set(i,fn(On.get(i)||null,e,t,n,r,l)),!0}return!1}function Ou(e){var t=wt(e.target);if(t!==null){var n=Tt(t);if(n!==null){if(t=n.tag,t===13){if(t=Eu(n),t!==null){e.blockedOn=t,Mu(e.priority,function(){Iu(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function kr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=fi(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);oi=r,n.target.dispatchEvent(r),oi=null}else return t=Jn(n),t!==null&&bi(t),e.blockedOn=n,!1;t.shift()}return!0}function Zo(e,t,n){kr(e)&&n.delete(t)}function rd(){di=!1,rt!==null&&kr(rt)&&(rt=null),lt!==null&&kr(lt)&&(lt=null),it!==null&&kr(it)&&(it=null),Mn.forEach(Zo),On.forEach(Zo)}function pn(e,t){e.blockedOn===t&&(e.blockedOn=null,di||(di=!0,ye.unstable_scheduleCallback(ye.unstable_NormalPriority,rd)))}function Dn(e){function t(l){return pn(l,e)}if(0<sr.length){pn(sr[0],e);for(var n=1;n<sr.length;n++){var r=sr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(rt!==null&&pn(rt,e),lt!==null&&pn(lt,e),it!==null&&pn(it,e),Mn.forEach(t),On.forEach(t),n=0;n<be.length;n++)r=be[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<be.length&&(n=be[0],n.blockedOn===null);)Ou(n),n.blockedOn===null&&be.shift()}var Gt=Xe.ReactCurrentBatchConfig,Dr=!0;function ld(e,t,n,r){var l=M,i=Gt.transition;Gt.transition=null;try{M=1,eo(e,t,n,r)}finally{M=l,Gt.transition=i}}function id(e,t,n,r){var l=M,i=Gt.transition;Gt.transition=null;try{M=4,eo(e,t,n,r)}finally{M=l,Gt.transition=i}}function eo(e,t,n,r){if(Dr){var l=fi(e,t,n,r);if(l===null)Ol(e,t,r,Fr,n),Xo(e,r);else if(nd(l,e,t,n,r))r.stopPropagation();else if(Xo(e,r),t&4&&-1<td.indexOf(e)){for(;l!==null;){var i=Jn(l);if(i!==null&&Tu(i),i=fi(e,t,n,r),i===null&&Ol(e,t,r,Fr,n),i===l)break;l=i}l!==null&&r.stopPropagation()}else Ol(e,t,r,null,n)}}var Fr=null;function fi(e,t,n,r){if(Fr=null,e=Zi(r),e=wt(e),e!==null)if(t=Tt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Eu(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Fr=e,null}function Du(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Yc()){case Ji:return 1;case _u:return 4;case Mr:case Kc:return 16;case Pu:return 536870912;default:return 16}default:return 16}}var tt=null,to=null,Sr=null;function Fu(){if(Sr)return Sr;var e,t=to,n=t.length,r,l="value"in tt?tt.value:tt.textContent,i=l.length;for(e=0;e<n&&t[e]===l[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===l[i-r];r++);return Sr=l.slice(e,1<r?1-r:void 0)}function Er(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ur(){return!0}function Jo(){return!1}function we(e){function t(n,r,l,i,o){this._reactName=n,this._targetInst=l,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?ur:Jo,this.isPropagationStopped=Jo,this}return B(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ur)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ur)},persist:function(){},isPersistent:ur}),t}var on={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},no=we(on),Zn=B({},on,{view:0,detail:0}),od=we(Zn),Cl,_l,mn,rl=B({},Zn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ro,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==mn&&(mn&&e.type==="mousemove"?(Cl=e.screenX-mn.screenX,_l=e.screenY-mn.screenY):_l=Cl=0,mn=e),Cl)},movementY:function(e){return"movementY"in e?e.movementY:_l}}),qo=we(rl),sd=B({},rl,{dataTransfer:0}),ud=we(sd),ad=B({},Zn,{relatedTarget:0}),Pl=we(ad),cd=B({},on,{animationName:0,elapsedTime:0,pseudoElement:0}),dd=we(cd),fd=B({},on,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),pd=we(fd),md=B({},on,{data:0}),bo=we(md),hd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},vd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},gd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function yd(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=gd[e])?!!t[e]:!1}function ro(){return yd}var xd=B({},Zn,{key:function(e){if(e.key){var t=hd[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Er(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?vd[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ro,charCode:function(e){return e.type==="keypress"?Er(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Er(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),wd=we(xd),kd=B({},rl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),es=we(kd),Sd=B({},Zn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ro}),Ed=we(Sd),Nd=B({},on,{propertyName:0,elapsedTime:0,pseudoElement:0}),jd=we(Nd),Cd=B({},rl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),_d=we(Cd),Pd=[9,13,27,32],lo=Qe&&"CompositionEvent"in window,Nn=null;Qe&&"documentMode"in document&&(Nn=document.documentMode);var zd=Qe&&"TextEvent"in window&&!Nn,Uu=Qe&&(!lo||Nn&&8<Nn&&11>=Nn),ts=" ",ns=!1;function Au(e,t){switch(e){case"keyup":return Pd.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function $u(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ot=!1;function Ld(e,t){switch(e){case"compositionend":return $u(t);case"keypress":return t.which!==32?null:(ns=!0,ts);case"textInput":return e=t.data,e===ts&&ns?null:e;default:return null}}function Td(e,t){if(Ot)return e==="compositionend"||!lo&&Au(e,t)?(e=Fu(),Sr=to=tt=null,Ot=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Uu&&t.locale!=="ko"?null:t.data;default:return null}}var Id={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function rs(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Id[e.type]:t==="textarea"}function Vu(e,t,n,r){yu(r),t=Ur(t,"onChange"),0<t.length&&(n=new no("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var jn=null,Fn=null;function Rd(e){qu(e,0)}function ll(e){var t=Ut(e);if(du(t))return e}function Md(e,t){if(e==="change")return t}var Bu=!1;if(Qe){var zl;if(Qe){var Ll="oninput"in document;if(!Ll){var ls=document.createElement("div");ls.setAttribute("oninput","return;"),Ll=typeof ls.oninput=="function"}zl=Ll}else zl=!1;Bu=zl&&(!document.documentMode||9<document.documentMode)}function is(){jn&&(jn.detachEvent("onpropertychange",Hu),Fn=jn=null)}function Hu(e){if(e.propertyName==="value"&&ll(Fn)){var t=[];Vu(t,Fn,e,Zi(e)),Su(Rd,t)}}function Od(e,t,n){e==="focusin"?(is(),jn=t,Fn=n,jn.attachEvent("onpropertychange",Hu)):e==="focusout"&&is()}function Dd(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ll(Fn)}function Fd(e,t){if(e==="click")return ll(t)}function Ud(e,t){if(e==="input"||e==="change")return ll(t)}function Ad(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Me=typeof Object.is=="function"?Object.is:Ad;function Un(e,t){if(Me(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var l=n[r];if(!Gl.call(t,l)||!Me(e[l],t[l]))return!1}return!0}function os(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ss(e,t){var n=os(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=os(n)}}function Wu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Wu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Qu(){for(var e=window,t=Tr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Tr(e.document)}return t}function io(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function $d(e){var t=Qu(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Wu(n.ownerDocument.documentElement,n)){if(r!==null&&io(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var l=n.textContent.length,i=Math.min(r.start,l);r=r.end===void 0?i:Math.min(r.end,l),!e.extend&&i>r&&(l=r,r=i,i=l),l=ss(n,i);var o=ss(n,r);l&&o&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Vd=Qe&&"documentMode"in document&&11>=document.documentMode,Dt=null,pi=null,Cn=null,mi=!1;function us(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;mi||Dt==null||Dt!==Tr(r)||(r=Dt,"selectionStart"in r&&io(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Cn&&Un(Cn,r)||(Cn=r,r=Ur(pi,"onSelect"),0<r.length&&(t=new no("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Dt)))}function ar(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Ft={animationend:ar("Animation","AnimationEnd"),animationiteration:ar("Animation","AnimationIteration"),animationstart:ar("Animation","AnimationStart"),transitionend:ar("Transition","TransitionEnd")},Tl={},Yu={};Qe&&(Yu=document.createElement("div").style,"AnimationEvent"in window||(delete Ft.animationend.animation,delete Ft.animationiteration.animation,delete Ft.animationstart.animation),"TransitionEvent"in window||delete Ft.transitionend.transition);function il(e){if(Tl[e])return Tl[e];if(!Ft[e])return e;var t=Ft[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Yu)return Tl[e]=t[n];return e}var Ku=il("animationend"),Gu=il("animationiteration"),Xu=il("animationstart"),Zu=il("transitionend"),Ju=new Map,as="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function pt(e,t){Ju.set(e,t),Lt(t,[e])}for(var Il=0;Il<as.length;Il++){var Rl=as[Il],Bd=Rl.toLowerCase(),Hd=Rl[0].toUpperCase()+Rl.slice(1);pt(Bd,"on"+Hd)}pt(Ku,"onAnimationEnd");pt(Gu,"onAnimationIteration");pt(Xu,"onAnimationStart");pt("dblclick","onDoubleClick");pt("focusin","onFocus");pt("focusout","onBlur");pt(Zu,"onTransitionEnd");Jt("onMouseEnter",["mouseout","mouseover"]);Jt("onMouseLeave",["mouseout","mouseover"]);Jt("onPointerEnter",["pointerout","pointerover"]);Jt("onPointerLeave",["pointerout","pointerover"]);Lt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Lt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Lt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Lt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Lt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Lt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var kn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Wd=new Set("cancel close invalid load scroll toggle".split(" ").concat(kn));function cs(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Bc(r,t,void 0,e),e.currentTarget=null}function qu(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],l=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],u=s.instance,d=s.currentTarget;if(s=s.listener,u!==i&&l.isPropagationStopped())break e;cs(l,s,d),i=u}else for(o=0;o<r.length;o++){if(s=r[o],u=s.instance,d=s.currentTarget,s=s.listener,u!==i&&l.isPropagationStopped())break e;cs(l,s,d),i=u}}}if(Rr)throw e=ai,Rr=!1,ai=null,e}function D(e,t){var n=t[xi];n===void 0&&(n=t[xi]=new Set);var r=e+"__bubble";n.has(r)||(bu(t,e,2,!1),n.add(r))}function Ml(e,t,n){var r=0;t&&(r|=4),bu(n,e,r,t)}var cr="_reactListening"+Math.random().toString(36).slice(2);function An(e){if(!e[cr]){e[cr]=!0,ou.forEach(function(n){n!=="selectionchange"&&(Wd.has(n)||Ml(n,!1,e),Ml(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[cr]||(t[cr]=!0,Ml("selectionchange",!1,t))}}function bu(e,t,n,r){switch(Du(t)){case 1:var l=ld;break;case 4:l=id;break;default:l=eo}n=l.bind(null,t,n,e),l=void 0,!ui||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function Ol(e,t,n,r,l){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var s=r.stateNode.containerInfo;if(s===l||s.nodeType===8&&s.parentNode===l)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===l||u.nodeType===8&&u.parentNode===l))return;o=o.return}for(;s!==null;){if(o=wt(s),o===null)return;if(u=o.tag,u===5||u===6){r=i=o;continue e}s=s.parentNode}}r=r.return}Su(function(){var d=i,v=Zi(n),h=[];e:{var m=Ju.get(e);if(m!==void 0){var x=no,w=e;switch(e){case"keypress":if(Er(n)===0)break e;case"keydown":case"keyup":x=wd;break;case"focusin":w="focus",x=Pl;break;case"focusout":w="blur",x=Pl;break;case"beforeblur":case"afterblur":x=Pl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=qo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=ud;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=Ed;break;case Ku:case Gu:case Xu:x=dd;break;case Zu:x=jd;break;case"scroll":x=od;break;case"wheel":x=_d;break;case"copy":case"cut":case"paste":x=pd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=es}var k=(t&4)!==0,U=!k&&e==="scroll",f=k?m!==null?m+"Capture":null:m;k=[];for(var c=d,p;c!==null;){p=c;var g=p.stateNode;if(p.tag===5&&g!==null&&(p=g,f!==null&&(g=Rn(c,f),g!=null&&k.push($n(c,g,p)))),U)break;c=c.return}0<k.length&&(m=new x(m,w,null,n,v),h.push({event:m,listeners:k}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",x=e==="mouseout"||e==="pointerout",m&&n!==oi&&(w=n.relatedTarget||n.fromElement)&&(wt(w)||w[Ye]))break e;if((x||m)&&(m=v.window===v?v:(m=v.ownerDocument)?m.defaultView||m.parentWindow:window,x?(w=n.relatedTarget||n.toElement,x=d,w=w?wt(w):null,w!==null&&(U=Tt(w),w!==U||w.tag!==5&&w.tag!==6)&&(w=null)):(x=null,w=d),x!==w)){if(k=qo,g="onMouseLeave",f="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(k=es,g="onPointerLeave",f="onPointerEnter",c="pointer"),U=x==null?m:Ut(x),p=w==null?m:Ut(w),m=new k(g,c+"leave",x,n,v),m.target=U,m.relatedTarget=p,g=null,wt(v)===d&&(k=new k(f,c+"enter",w,n,v),k.target=p,k.relatedTarget=U,g=k),U=g,x&&w)t:{for(k=x,f=w,c=0,p=k;p;p=It(p))c++;for(p=0,g=f;g;g=It(g))p++;for(;0<c-p;)k=It(k),c--;for(;0<p-c;)f=It(f),p--;for(;c--;){if(k===f||f!==null&&k===f.alternate)break t;k=It(k),f=It(f)}k=null}else k=null;x!==null&&ds(h,m,x,k,!1),w!==null&&U!==null&&ds(h,U,w,k,!0)}}e:{if(m=d?Ut(d):window,x=m.nodeName&&m.nodeName.toLowerCase(),x==="select"||x==="input"&&m.type==="file")var E=Md;else if(rs(m))if(Bu)E=Ud;else{E=Dd;var j=Od}else(x=m.nodeName)&&x.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(E=Fd);if(E&&(E=E(e,d))){Vu(h,E,n,v);break e}j&&j(e,m,d),e==="focusout"&&(j=m._wrapperState)&&j.controlled&&m.type==="number"&&ti(m,"number",m.value)}switch(j=d?Ut(d):window,e){case"focusin":(rs(j)||j.contentEditable==="true")&&(Dt=j,pi=d,Cn=null);break;case"focusout":Cn=pi=Dt=null;break;case"mousedown":mi=!0;break;case"contextmenu":case"mouseup":case"dragend":mi=!1,us(h,n,v);break;case"selectionchange":if(Vd)break;case"keydown":case"keyup":us(h,n,v)}var C;if(lo)e:{switch(e){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else Ot?Au(e,n)&&(_="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(_="onCompositionStart");_&&(Uu&&n.locale!=="ko"&&(Ot||_!=="onCompositionStart"?_==="onCompositionEnd"&&Ot&&(C=Fu()):(tt=v,to="value"in tt?tt.value:tt.textContent,Ot=!0)),j=Ur(d,_),0<j.length&&(_=new bo(_,e,null,n,v),h.push({event:_,listeners:j}),C?_.data=C:(C=$u(n),C!==null&&(_.data=C)))),(C=zd?Ld(e,n):Td(e,n))&&(d=Ur(d,"onBeforeInput"),0<d.length&&(v=new bo("onBeforeInput","beforeinput",null,n,v),h.push({event:v,listeners:d}),v.data=C))}qu(h,t)})}function $n(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ur(e,t){for(var n=t+"Capture",r=[];e!==null;){var l=e,i=l.stateNode;l.tag===5&&i!==null&&(l=i,i=Rn(e,n),i!=null&&r.unshift($n(e,i,l)),i=Rn(e,t),i!=null&&r.push($n(e,i,l))),e=e.return}return r}function It(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function ds(e,t,n,r,l){for(var i=t._reactName,o=[];n!==null&&n!==r;){var s=n,u=s.alternate,d=s.stateNode;if(u!==null&&u===r)break;s.tag===5&&d!==null&&(s=d,l?(u=Rn(n,i),u!=null&&o.unshift($n(n,u,s))):l||(u=Rn(n,i),u!=null&&o.push($n(n,u,s)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Qd=/\r\n?/g,Yd=/\u0000|\uFFFD/g;function fs(e){return(typeof e=="string"?e:""+e).replace(Qd,`
`).replace(Yd,"")}function dr(e,t,n){if(t=fs(t),fs(e)!==t&&n)throw Error(y(425))}function Ar(){}var hi=null,vi=null;function gi(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var yi=typeof setTimeout=="function"?setTimeout:void 0,Kd=typeof clearTimeout=="function"?clearTimeout:void 0,ps=typeof Promise=="function"?Promise:void 0,Gd=typeof queueMicrotask=="function"?queueMicrotask:typeof ps<"u"?function(e){return ps.resolve(null).then(e).catch(Xd)}:yi;function Xd(e){setTimeout(function(){throw e})}function Dl(e,t){var n=t,r=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(r===0){e.removeChild(l),Dn(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=l}while(n);Dn(t)}function ot(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function ms(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var sn=Math.random().toString(36).slice(2),Fe="__reactFiber$"+sn,Vn="__reactProps$"+sn,Ye="__reactContainer$"+sn,xi="__reactEvents$"+sn,Zd="__reactListeners$"+sn,Jd="__reactHandles$"+sn;function wt(e){var t=e[Fe];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ye]||n[Fe]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=ms(e);e!==null;){if(n=e[Fe])return n;e=ms(e)}return t}e=n,n=e.parentNode}return null}function Jn(e){return e=e[Fe]||e[Ye],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Ut(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(y(33))}function ol(e){return e[Vn]||null}var wi=[],At=-1;function mt(e){return{current:e}}function F(e){0>At||(e.current=wi[At],wi[At]=null,At--)}function O(e,t){At++,wi[At]=e.current,e.current=t}var ft={},ie=mt(ft),fe=mt(!1),jt=ft;function qt(e,t){var n=e.type.contextTypes;if(!n)return ft;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var l={},i;for(i in n)l[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}function pe(e){return e=e.childContextTypes,e!=null}function $r(){F(fe),F(ie)}function hs(e,t,n){if(ie.current!==ft)throw Error(y(168));O(ie,t),O(fe,n)}function ea(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var l in r)if(!(l in t))throw Error(y(108,Oc(e)||"Unknown",l));return B({},n,r)}function Vr(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||ft,jt=ie.current,O(ie,e),O(fe,fe.current),!0}function vs(e,t,n){var r=e.stateNode;if(!r)throw Error(y(169));n?(e=ea(e,t,jt),r.__reactInternalMemoizedMergedChildContext=e,F(fe),F(ie),O(ie,e)):F(fe),O(fe,n)}var Ve=null,sl=!1,Fl=!1;function ta(e){Ve===null?Ve=[e]:Ve.push(e)}function qd(e){sl=!0,ta(e)}function ht(){if(!Fl&&Ve!==null){Fl=!0;var e=0,t=M;try{var n=Ve;for(M=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Ve=null,sl=!1}catch(l){throw Ve!==null&&(Ve=Ve.slice(e+1)),Cu(Ji,ht),l}finally{M=t,Fl=!1}}return null}var $t=[],Vt=0,Br=null,Hr=0,ke=[],Se=0,Ct=null,Be=1,He="";function yt(e,t){$t[Vt++]=Hr,$t[Vt++]=Br,Br=e,Hr=t}function na(e,t,n){ke[Se++]=Be,ke[Se++]=He,ke[Se++]=Ct,Ct=e;var r=Be;e=He;var l=32-Ie(r)-1;r&=~(1<<l),n+=1;var i=32-Ie(t)+l;if(30<i){var o=l-l%5;i=(r&(1<<o)-1).toString(32),r>>=o,l-=o,Be=1<<32-Ie(t)+l|n<<l|r,He=i+e}else Be=1<<i|n<<l|r,He=e}function oo(e){e.return!==null&&(yt(e,1),na(e,1,0))}function so(e){for(;e===Br;)Br=$t[--Vt],$t[Vt]=null,Hr=$t[--Vt],$t[Vt]=null;for(;e===Ct;)Ct=ke[--Se],ke[Se]=null,He=ke[--Se],ke[Se]=null,Be=ke[--Se],ke[Se]=null}var ge=null,ve=null,A=!1,Te=null;function ra(e,t){var n=Ee(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function gs(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ge=e,ve=ot(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ge=e,ve=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Ct!==null?{id:Be,overflow:He}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ee(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ge=e,ve=null,!0):!1;default:return!1}}function ki(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Si(e){if(A){var t=ve;if(t){var n=t;if(!gs(e,t)){if(ki(e))throw Error(y(418));t=ot(n.nextSibling);var r=ge;t&&gs(e,t)?ra(r,n):(e.flags=e.flags&-4097|2,A=!1,ge=e)}}else{if(ki(e))throw Error(y(418));e.flags=e.flags&-4097|2,A=!1,ge=e}}}function ys(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ge=e}function fr(e){if(e!==ge)return!1;if(!A)return ys(e),A=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!gi(e.type,e.memoizedProps)),t&&(t=ve)){if(ki(e))throw la(),Error(y(418));for(;t;)ra(e,t),t=ot(t.nextSibling)}if(ys(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(y(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){ve=ot(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}ve=null}}else ve=ge?ot(e.stateNode.nextSibling):null;return!0}function la(){for(var e=ve;e;)e=ot(e.nextSibling)}function bt(){ve=ge=null,A=!1}function uo(e){Te===null?Te=[e]:Te.push(e)}var bd=Xe.ReactCurrentBatchConfig;function hn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(y(309));var r=n.stateNode}if(!r)throw Error(y(147,e));var l=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(o){var s=l.refs;o===null?delete s[i]:s[i]=o},t._stringRef=i,t)}if(typeof e!="string")throw Error(y(284));if(!n._owner)throw Error(y(290,e))}return e}function pr(e,t){throw e=Object.prototype.toString.call(t),Error(y(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function xs(e){var t=e._init;return t(e._payload)}function ia(e){function t(f,c){if(e){var p=f.deletions;p===null?(f.deletions=[c],f.flags|=16):p.push(c)}}function n(f,c){if(!e)return null;for(;c!==null;)t(f,c),c=c.sibling;return null}function r(f,c){for(f=new Map;c!==null;)c.key!==null?f.set(c.key,c):f.set(c.index,c),c=c.sibling;return f}function l(f,c){return f=ct(f,c),f.index=0,f.sibling=null,f}function i(f,c,p){return f.index=p,e?(p=f.alternate,p!==null?(p=p.index,p<c?(f.flags|=2,c):p):(f.flags|=2,c)):(f.flags|=1048576,c)}function o(f){return e&&f.alternate===null&&(f.flags|=2),f}function s(f,c,p,g){return c===null||c.tag!==6?(c=Wl(p,f.mode,g),c.return=f,c):(c=l(c,p),c.return=f,c)}function u(f,c,p,g){var E=p.type;return E===Mt?v(f,c,p.props.children,g,p.key):c!==null&&(c.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Je&&xs(E)===c.type)?(g=l(c,p.props),g.ref=hn(f,c,p),g.return=f,g):(g=Lr(p.type,p.key,p.props,null,f.mode,g),g.ref=hn(f,c,p),g.return=f,g)}function d(f,c,p,g){return c===null||c.tag!==4||c.stateNode.containerInfo!==p.containerInfo||c.stateNode.implementation!==p.implementation?(c=Ql(p,f.mode,g),c.return=f,c):(c=l(c,p.children||[]),c.return=f,c)}function v(f,c,p,g,E){return c===null||c.tag!==7?(c=Nt(p,f.mode,g,E),c.return=f,c):(c=l(c,p),c.return=f,c)}function h(f,c,p){if(typeof c=="string"&&c!==""||typeof c=="number")return c=Wl(""+c,f.mode,p),c.return=f,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case nr:return p=Lr(c.type,c.key,c.props,null,f.mode,p),p.ref=hn(f,null,c),p.return=f,p;case Rt:return c=Ql(c,f.mode,p),c.return=f,c;case Je:var g=c._init;return h(f,g(c._payload),p)}if(xn(c)||cn(c))return c=Nt(c,f.mode,p,null),c.return=f,c;pr(f,c)}return null}function m(f,c,p,g){var E=c!==null?c.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return E!==null?null:s(f,c,""+p,g);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case nr:return p.key===E?u(f,c,p,g):null;case Rt:return p.key===E?d(f,c,p,g):null;case Je:return E=p._init,m(f,c,E(p._payload),g)}if(xn(p)||cn(p))return E!==null?null:v(f,c,p,g,null);pr(f,p)}return null}function x(f,c,p,g,E){if(typeof g=="string"&&g!==""||typeof g=="number")return f=f.get(p)||null,s(c,f,""+g,E);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case nr:return f=f.get(g.key===null?p:g.key)||null,u(c,f,g,E);case Rt:return f=f.get(g.key===null?p:g.key)||null,d(c,f,g,E);case Je:var j=g._init;return x(f,c,p,j(g._payload),E)}if(xn(g)||cn(g))return f=f.get(p)||null,v(c,f,g,E,null);pr(c,g)}return null}function w(f,c,p,g){for(var E=null,j=null,C=c,_=c=0,W=null;C!==null&&_<p.length;_++){C.index>_?(W=C,C=null):W=C.sibling;var T=m(f,C,p[_],g);if(T===null){C===null&&(C=W);break}e&&C&&T.alternate===null&&t(f,C),c=i(T,c,_),j===null?E=T:j.sibling=T,j=T,C=W}if(_===p.length)return n(f,C),A&&yt(f,_),E;if(C===null){for(;_<p.length;_++)C=h(f,p[_],g),C!==null&&(c=i(C,c,_),j===null?E=C:j.sibling=C,j=C);return A&&yt(f,_),E}for(C=r(f,C);_<p.length;_++)W=x(C,f,_,p[_],g),W!==null&&(e&&W.alternate!==null&&C.delete(W.key===null?_:W.key),c=i(W,c,_),j===null?E=W:j.sibling=W,j=W);return e&&C.forEach(function(_e){return t(f,_e)}),A&&yt(f,_),E}function k(f,c,p,g){var E=cn(p);if(typeof E!="function")throw Error(y(150));if(p=E.call(p),p==null)throw Error(y(151));for(var j=E=null,C=c,_=c=0,W=null,T=p.next();C!==null&&!T.done;_++,T=p.next()){C.index>_?(W=C,C=null):W=C.sibling;var _e=m(f,C,T.value,g);if(_e===null){C===null&&(C=W);break}e&&C&&_e.alternate===null&&t(f,C),c=i(_e,c,_),j===null?E=_e:j.sibling=_e,j=_e,C=W}if(T.done)return n(f,C),A&&yt(f,_),E;if(C===null){for(;!T.done;_++,T=p.next())T=h(f,T.value,g),T!==null&&(c=i(T,c,_),j===null?E=T:j.sibling=T,j=T);return A&&yt(f,_),E}for(C=r(f,C);!T.done;_++,T=p.next())T=x(C,f,_,T.value,g),T!==null&&(e&&T.alternate!==null&&C.delete(T.key===null?_:T.key),c=i(T,c,_),j===null?E=T:j.sibling=T,j=T);return e&&C.forEach(function(un){return t(f,un)}),A&&yt(f,_),E}function U(f,c,p,g){if(typeof p=="object"&&p!==null&&p.type===Mt&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case nr:e:{for(var E=p.key,j=c;j!==null;){if(j.key===E){if(E=p.type,E===Mt){if(j.tag===7){n(f,j.sibling),c=l(j,p.props.children),c.return=f,f=c;break e}}else if(j.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Je&&xs(E)===j.type){n(f,j.sibling),c=l(j,p.props),c.ref=hn(f,j,p),c.return=f,f=c;break e}n(f,j);break}else t(f,j);j=j.sibling}p.type===Mt?(c=Nt(p.props.children,f.mode,g,p.key),c.return=f,f=c):(g=Lr(p.type,p.key,p.props,null,f.mode,g),g.ref=hn(f,c,p),g.return=f,f=g)}return o(f);case Rt:e:{for(j=p.key;c!==null;){if(c.key===j)if(c.tag===4&&c.stateNode.containerInfo===p.containerInfo&&c.stateNode.implementation===p.implementation){n(f,c.sibling),c=l(c,p.children||[]),c.return=f,f=c;break e}else{n(f,c);break}else t(f,c);c=c.sibling}c=Ql(p,f.mode,g),c.return=f,f=c}return o(f);case Je:return j=p._init,U(f,c,j(p._payload),g)}if(xn(p))return w(f,c,p,g);if(cn(p))return k(f,c,p,g);pr(f,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,c!==null&&c.tag===6?(n(f,c.sibling),c=l(c,p),c.return=f,f=c):(n(f,c),c=Wl(p,f.mode,g),c.return=f,f=c),o(f)):n(f,c)}return U}var en=ia(!0),oa=ia(!1),Wr=mt(null),Qr=null,Bt=null,ao=null;function co(){ao=Bt=Qr=null}function fo(e){var t=Wr.current;F(Wr),e._currentValue=t}function Ei(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Xt(e,t){Qr=e,ao=Bt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(de=!0),e.firstContext=null)}function je(e){var t=e._currentValue;if(ao!==e)if(e={context:e,memoizedValue:t,next:null},Bt===null){if(Qr===null)throw Error(y(308));Bt=e,Qr.dependencies={lanes:0,firstContext:e}}else Bt=Bt.next=e;return t}var kt=null;function po(e){kt===null?kt=[e]:kt.push(e)}function sa(e,t,n,r){var l=t.interleaved;return l===null?(n.next=n,po(t)):(n.next=l.next,l.next=n),t.interleaved=n,Ke(e,r)}function Ke(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var qe=!1;function mo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ua(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function We(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function st(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,R&2){var l=r.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),r.pending=t,Ke(e,n)}return l=r.interleaved,l===null?(t.next=t,po(r)):(t.next=l.next,l.next=t),r.interleaved=t,Ke(e,n)}function Nr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,qi(e,n)}}function ws(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var l=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?l=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?l=i=t:i=i.next=t}else l=i=t;n={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Yr(e,t,n,r){var l=e.updateQueue;qe=!1;var i=l.firstBaseUpdate,o=l.lastBaseUpdate,s=l.shared.pending;if(s!==null){l.shared.pending=null;var u=s,d=u.next;u.next=null,o===null?i=d:o.next=d,o=u;var v=e.alternate;v!==null&&(v=v.updateQueue,s=v.lastBaseUpdate,s!==o&&(s===null?v.firstBaseUpdate=d:s.next=d,v.lastBaseUpdate=u))}if(i!==null){var h=l.baseState;o=0,v=d=u=null,s=i;do{var m=s.lane,x=s.eventTime;if((r&m)===m){v!==null&&(v=v.next={eventTime:x,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var w=e,k=s;switch(m=t,x=n,k.tag){case 1:if(w=k.payload,typeof w=="function"){h=w.call(x,h,m);break e}h=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=k.payload,m=typeof w=="function"?w.call(x,h,m):w,m==null)break e;h=B({},h,m);break e;case 2:qe=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,m=l.effects,m===null?l.effects=[s]:m.push(s))}else x={eventTime:x,lane:m,tag:s.tag,payload:s.payload,callback:s.callback,next:null},v===null?(d=v=x,u=h):v=v.next=x,o|=m;if(s=s.next,s===null){if(s=l.shared.pending,s===null)break;m=s,s=m.next,m.next=null,l.lastBaseUpdate=m,l.shared.pending=null}}while(!0);if(v===null&&(u=h),l.baseState=u,l.firstBaseUpdate=d,l.lastBaseUpdate=v,t=l.shared.interleaved,t!==null){l=t;do o|=l.lane,l=l.next;while(l!==t)}else i===null&&(l.shared.lanes=0);Pt|=o,e.lanes=o,e.memoizedState=h}}function ks(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],l=r.callback;if(l!==null){if(r.callback=null,r=n,typeof l!="function")throw Error(y(191,l));l.call(r)}}}var qn={},Ae=mt(qn),Bn=mt(qn),Hn=mt(qn);function St(e){if(e===qn)throw Error(y(174));return e}function ho(e,t){switch(O(Hn,t),O(Bn,e),O(Ae,qn),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ri(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=ri(t,e)}F(Ae),O(Ae,t)}function tn(){F(Ae),F(Bn),F(Hn)}function aa(e){St(Hn.current);var t=St(Ae.current),n=ri(t,e.type);t!==n&&(O(Bn,e),O(Ae,n))}function vo(e){Bn.current===e&&(F(Ae),F(Bn))}var $=mt(0);function Kr(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ul=[];function go(){for(var e=0;e<Ul.length;e++)Ul[e]._workInProgressVersionPrimary=null;Ul.length=0}var jr=Xe.ReactCurrentDispatcher,Al=Xe.ReactCurrentBatchConfig,_t=0,V=null,G=null,J=null,Gr=!1,_n=!1,Wn=0,ef=0;function ne(){throw Error(y(321))}function yo(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Me(e[n],t[n]))return!1;return!0}function xo(e,t,n,r,l,i){if(_t=i,V=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,jr.current=e===null||e.memoizedState===null?lf:of,e=n(r,l),_n){i=0;do{if(_n=!1,Wn=0,25<=i)throw Error(y(301));i+=1,J=G=null,t.updateQueue=null,jr.current=sf,e=n(r,l)}while(_n)}if(jr.current=Xr,t=G!==null&&G.next!==null,_t=0,J=G=V=null,Gr=!1,t)throw Error(y(300));return e}function wo(){var e=Wn!==0;return Wn=0,e}function De(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return J===null?V.memoizedState=J=e:J=J.next=e,J}function Ce(){if(G===null){var e=V.alternate;e=e!==null?e.memoizedState:null}else e=G.next;var t=J===null?V.memoizedState:J.next;if(t!==null)J=t,G=e;else{if(e===null)throw Error(y(310));G=e,e={memoizedState:G.memoizedState,baseState:G.baseState,baseQueue:G.baseQueue,queue:G.queue,next:null},J===null?V.memoizedState=J=e:J=J.next=e}return J}function Qn(e,t){return typeof t=="function"?t(e):t}function $l(e){var t=Ce(),n=t.queue;if(n===null)throw Error(y(311));n.lastRenderedReducer=e;var r=G,l=r.baseQueue,i=n.pending;if(i!==null){if(l!==null){var o=l.next;l.next=i.next,i.next=o}r.baseQueue=l=i,n.pending=null}if(l!==null){i=l.next,r=r.baseState;var s=o=null,u=null,d=i;do{var v=d.lane;if((_t&v)===v)u!==null&&(u=u.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:e(r,d.action);else{var h={lane:v,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};u===null?(s=u=h,o=r):u=u.next=h,V.lanes|=v,Pt|=v}d=d.next}while(d!==null&&d!==i);u===null?o=r:u.next=s,Me(r,t.memoizedState)||(de=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){l=e;do i=l.lane,V.lanes|=i,Pt|=i,l=l.next;while(l!==e)}else l===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Vl(e){var t=Ce(),n=t.queue;if(n===null)throw Error(y(311));n.lastRenderedReducer=e;var r=n.dispatch,l=n.pending,i=t.memoizedState;if(l!==null){n.pending=null;var o=l=l.next;do i=e(i,o.action),o=o.next;while(o!==l);Me(i,t.memoizedState)||(de=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function ca(){}function da(e,t){var n=V,r=Ce(),l=t(),i=!Me(r.memoizedState,l);if(i&&(r.memoizedState=l,de=!0),r=r.queue,ko(ma.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||J!==null&&J.memoizedState.tag&1){if(n.flags|=2048,Yn(9,pa.bind(null,n,r,l,t),void 0,null),q===null)throw Error(y(349));_t&30||fa(n,t,l)}return l}function fa(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=V.updateQueue,t===null?(t={lastEffect:null,stores:null},V.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function pa(e,t,n,r){t.value=n,t.getSnapshot=r,ha(t)&&va(e)}function ma(e,t,n){return n(function(){ha(t)&&va(e)})}function ha(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Me(e,n)}catch{return!0}}function va(e){var t=Ke(e,1);t!==null&&Re(t,e,1,-1)}function Ss(e){var t=De();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Qn,lastRenderedState:e},t.queue=e,e=e.dispatch=rf.bind(null,V,e),[t.memoizedState,e]}function Yn(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=V.updateQueue,t===null?(t={lastEffect:null,stores:null},V.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function ga(){return Ce().memoizedState}function Cr(e,t,n,r){var l=De();V.flags|=e,l.memoizedState=Yn(1|t,n,void 0,r===void 0?null:r)}function ul(e,t,n,r){var l=Ce();r=r===void 0?null:r;var i=void 0;if(G!==null){var o=G.memoizedState;if(i=o.destroy,r!==null&&yo(r,o.deps)){l.memoizedState=Yn(t,n,i,r);return}}V.flags|=e,l.memoizedState=Yn(1|t,n,i,r)}function Es(e,t){return Cr(8390656,8,e,t)}function ko(e,t){return ul(2048,8,e,t)}function ya(e,t){return ul(4,2,e,t)}function xa(e,t){return ul(4,4,e,t)}function wa(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ka(e,t,n){return n=n!=null?n.concat([e]):null,ul(4,4,wa.bind(null,t,e),n)}function So(){}function Sa(e,t){var n=Ce();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&yo(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Ea(e,t){var n=Ce();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&yo(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Na(e,t,n){return _t&21?(Me(n,t)||(n=zu(),V.lanes|=n,Pt|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,de=!0),e.memoizedState=n)}function tf(e,t){var n=M;M=n!==0&&4>n?n:4,e(!0);var r=Al.transition;Al.transition={};try{e(!1),t()}finally{M=n,Al.transition=r}}function ja(){return Ce().memoizedState}function nf(e,t,n){var r=at(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Ca(e))_a(t,n);else if(n=sa(e,t,n,r),n!==null){var l=se();Re(n,e,r,l),Pa(n,t,r)}}function rf(e,t,n){var r=at(e),l={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ca(e))_a(t,l);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var o=t.lastRenderedState,s=i(o,n);if(l.hasEagerState=!0,l.eagerState=s,Me(s,o)){var u=t.interleaved;u===null?(l.next=l,po(t)):(l.next=u.next,u.next=l),t.interleaved=l;return}}catch{}finally{}n=sa(e,t,l,r),n!==null&&(l=se(),Re(n,e,r,l),Pa(n,t,r))}}function Ca(e){var t=e.alternate;return e===V||t!==null&&t===V}function _a(e,t){_n=Gr=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Pa(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,qi(e,n)}}var Xr={readContext:je,useCallback:ne,useContext:ne,useEffect:ne,useImperativeHandle:ne,useInsertionEffect:ne,useLayoutEffect:ne,useMemo:ne,useReducer:ne,useRef:ne,useState:ne,useDebugValue:ne,useDeferredValue:ne,useTransition:ne,useMutableSource:ne,useSyncExternalStore:ne,useId:ne,unstable_isNewReconciler:!1},lf={readContext:je,useCallback:function(e,t){return De().memoizedState=[e,t===void 0?null:t],e},useContext:je,useEffect:Es,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Cr(4194308,4,wa.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Cr(4194308,4,e,t)},useInsertionEffect:function(e,t){return Cr(4,2,e,t)},useMemo:function(e,t){var n=De();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=De();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=nf.bind(null,V,e),[r.memoizedState,e]},useRef:function(e){var t=De();return e={current:e},t.memoizedState=e},useState:Ss,useDebugValue:So,useDeferredValue:function(e){return De().memoizedState=e},useTransition:function(){var e=Ss(!1),t=e[0];return e=tf.bind(null,e[1]),De().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=V,l=De();if(A){if(n===void 0)throw Error(y(407));n=n()}else{if(n=t(),q===null)throw Error(y(349));_t&30||fa(r,t,n)}l.memoizedState=n;var i={value:n,getSnapshot:t};return l.queue=i,Es(ma.bind(null,r,i,e),[e]),r.flags|=2048,Yn(9,pa.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=De(),t=q.identifierPrefix;if(A){var n=He,r=Be;n=(r&~(1<<32-Ie(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Wn++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=ef++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},of={readContext:je,useCallback:Sa,useContext:je,useEffect:ko,useImperativeHandle:ka,useInsertionEffect:ya,useLayoutEffect:xa,useMemo:Ea,useReducer:$l,useRef:ga,useState:function(){return $l(Qn)},useDebugValue:So,useDeferredValue:function(e){var t=Ce();return Na(t,G.memoizedState,e)},useTransition:function(){var e=$l(Qn)[0],t=Ce().memoizedState;return[e,t]},useMutableSource:ca,useSyncExternalStore:da,useId:ja,unstable_isNewReconciler:!1},sf={readContext:je,useCallback:Sa,useContext:je,useEffect:ko,useImperativeHandle:ka,useInsertionEffect:ya,useLayoutEffect:xa,useMemo:Ea,useReducer:Vl,useRef:ga,useState:function(){return Vl(Qn)},useDebugValue:So,useDeferredValue:function(e){var t=Ce();return G===null?t.memoizedState=e:Na(t,G.memoizedState,e)},useTransition:function(){var e=Vl(Qn)[0],t=Ce().memoizedState;return[e,t]},useMutableSource:ca,useSyncExternalStore:da,useId:ja,unstable_isNewReconciler:!1};function ze(e,t){if(e&&e.defaultProps){t=B({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Ni(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:B({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var al={isMounted:function(e){return(e=e._reactInternals)?Tt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=se(),l=at(e),i=We(r,l);i.payload=t,n!=null&&(i.callback=n),t=st(e,i,l),t!==null&&(Re(t,e,l,r),Nr(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=se(),l=at(e),i=We(r,l);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=st(e,i,l),t!==null&&(Re(t,e,l,r),Nr(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=se(),r=at(e),l=We(n,r);l.tag=2,t!=null&&(l.callback=t),t=st(e,l,r),t!==null&&(Re(t,e,r,n),Nr(t,e,r))}};function Ns(e,t,n,r,l,i,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,o):t.prototype&&t.prototype.isPureReactComponent?!Un(n,r)||!Un(l,i):!0}function za(e,t,n){var r=!1,l=ft,i=t.contextType;return typeof i=="object"&&i!==null?i=je(i):(l=pe(t)?jt:ie.current,r=t.contextTypes,i=(r=r!=null)?qt(e,l):ft),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=al,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=i),t}function js(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&al.enqueueReplaceState(t,t.state,null)}function ji(e,t,n,r){var l=e.stateNode;l.props=n,l.state=e.memoizedState,l.refs={},mo(e);var i=t.contextType;typeof i=="object"&&i!==null?l.context=je(i):(i=pe(t)?jt:ie.current,l.context=qt(e,i)),l.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Ni(e,t,i,n),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(t=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),t!==l.state&&al.enqueueReplaceState(l,l.state,null),Yr(e,n,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function nn(e,t){try{var n="",r=t;do n+=Mc(r),r=r.return;while(r);var l=n}catch(i){l=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:l,digest:null}}function Bl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Ci(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var uf=typeof WeakMap=="function"?WeakMap:Map;function La(e,t,n){n=We(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Jr||(Jr=!0,Di=r),Ci(e,t)},n}function Ta(e,t,n){n=We(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=t.value;n.payload=function(){return r(l)},n.callback=function(){Ci(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Ci(e,t),typeof r!="function"&&(ut===null?ut=new Set([this]):ut.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function Cs(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new uf;var l=new Set;r.set(t,l)}else l=r.get(t),l===void 0&&(l=new Set,r.set(t,l));l.has(n)||(l.add(n),e=Sf.bind(null,e,t,n),t.then(e,e))}function _s(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Ps(e,t,n,r,l){return e.mode&1?(e.flags|=65536,e.lanes=l,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=We(-1,1),t.tag=2,st(n,t,1))),n.lanes|=1),e)}var af=Xe.ReactCurrentOwner,de=!1;function oe(e,t,n,r){t.child=e===null?oa(t,null,n,r):en(t,e.child,n,r)}function zs(e,t,n,r,l){n=n.render;var i=t.ref;return Xt(t,l),r=xo(e,t,n,r,i,l),n=wo(),e!==null&&!de?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,Ge(e,t,l)):(A&&n&&oo(t),t.flags|=1,oe(e,t,r,l),t.child)}function Ls(e,t,n,r,l){if(e===null){var i=n.type;return typeof i=="function"&&!Lo(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,Ia(e,t,i,r,l)):(e=Lr(n.type,null,r,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&l)){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:Un,n(o,r)&&e.ref===t.ref)return Ge(e,t,l)}return t.flags|=1,e=ct(i,r),e.ref=t.ref,e.return=t,t.child=e}function Ia(e,t,n,r,l){if(e!==null){var i=e.memoizedProps;if(Un(i,r)&&e.ref===t.ref)if(de=!1,t.pendingProps=r=i,(e.lanes&l)!==0)e.flags&131072&&(de=!0);else return t.lanes=e.lanes,Ge(e,t,l)}return _i(e,t,n,r,l)}function Ra(e,t,n){var r=t.pendingProps,l=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},O(Wt,he),he|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,O(Wt,he),he|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,O(Wt,he),he|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,O(Wt,he),he|=r;return oe(e,t,l,n),t.child}function Ma(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function _i(e,t,n,r,l){var i=pe(n)?jt:ie.current;return i=qt(t,i),Xt(t,l),n=xo(e,t,n,r,i,l),r=wo(),e!==null&&!de?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,Ge(e,t,l)):(A&&r&&oo(t),t.flags|=1,oe(e,t,n,l),t.child)}function Ts(e,t,n,r,l){if(pe(n)){var i=!0;Vr(t)}else i=!1;if(Xt(t,l),t.stateNode===null)_r(e,t),za(t,n,r),ji(t,n,r,l),r=!0;else if(e===null){var o=t.stateNode,s=t.memoizedProps;o.props=s;var u=o.context,d=n.contextType;typeof d=="object"&&d!==null?d=je(d):(d=pe(n)?jt:ie.current,d=qt(t,d));var v=n.getDerivedStateFromProps,h=typeof v=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==r||u!==d)&&js(t,o,r,d),qe=!1;var m=t.memoizedState;o.state=m,Yr(t,r,o,l),u=t.memoizedState,s!==r||m!==u||fe.current||qe?(typeof v=="function"&&(Ni(t,n,v,r),u=t.memoizedState),(s=qe||Ns(t,n,s,r,m,u,d))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),o.props=r,o.state=u,o.context=d,r=s):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,ua(e,t),s=t.memoizedProps,d=t.type===t.elementType?s:ze(t.type,s),o.props=d,h=t.pendingProps,m=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=je(u):(u=pe(n)?jt:ie.current,u=qt(t,u));var x=n.getDerivedStateFromProps;(v=typeof x=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==h||m!==u)&&js(t,o,r,u),qe=!1,m=t.memoizedState,o.state=m,Yr(t,r,o,l);var w=t.memoizedState;s!==h||m!==w||fe.current||qe?(typeof x=="function"&&(Ni(t,n,x,r),w=t.memoizedState),(d=qe||Ns(t,n,d,r,m,w,u)||!1)?(v||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,w,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,w,u)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=w),o.props=r,o.state=w,o.context=u,r=d):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return Pi(e,t,n,r,i,l)}function Pi(e,t,n,r,l,i){Ma(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return l&&vs(t,n,!1),Ge(e,t,i);r=t.stateNode,af.current=t;var s=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=en(t,e.child,null,i),t.child=en(t,null,s,i)):oe(e,t,s,i),t.memoizedState=r.state,l&&vs(t,n,!0),t.child}function Oa(e){var t=e.stateNode;t.pendingContext?hs(e,t.pendingContext,t.pendingContext!==t.context):t.context&&hs(e,t.context,!1),ho(e,t.containerInfo)}function Is(e,t,n,r,l){return bt(),uo(l),t.flags|=256,oe(e,t,n,r),t.child}var zi={dehydrated:null,treeContext:null,retryLane:0};function Li(e){return{baseLanes:e,cachePool:null,transitions:null}}function Da(e,t,n){var r=t.pendingProps,l=$.current,i=!1,o=(t.flags&128)!==0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(l&2)!==0),s?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),O($,l&1),e===null)return Si(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,i?(r=t.mode,i=t.child,o={mode:"hidden",children:o},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=fl(o,r,0,null),e=Nt(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Li(n),t.memoizedState=zi,e):Eo(t,o));if(l=e.memoizedState,l!==null&&(s=l.dehydrated,s!==null))return cf(e,t,o,r,s,l,n);if(i){i=r.fallback,o=t.mode,l=e.child,s=l.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&t.child!==l?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=ct(l,u),r.subtreeFlags=l.subtreeFlags&14680064),s!==null?i=ct(s,i):(i=Nt(i,o,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,o=e.child.memoizedState,o=o===null?Li(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=e.childLanes&~n,t.memoizedState=zi,r}return i=e.child,e=i.sibling,r=ct(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Eo(e,t){return t=fl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function mr(e,t,n,r){return r!==null&&uo(r),en(t,e.child,null,n),e=Eo(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function cf(e,t,n,r,l,i,o){if(n)return t.flags&256?(t.flags&=-257,r=Bl(Error(y(422))),mr(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,l=t.mode,r=fl({mode:"visible",children:r.children},l,0,null),i=Nt(i,l,o,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&en(t,e.child,null,o),t.child.memoizedState=Li(o),t.memoizedState=zi,i);if(!(t.mode&1))return mr(e,t,o,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var s=r.dgst;return r=s,i=Error(y(419)),r=Bl(i,r,void 0),mr(e,t,o,r)}if(s=(o&e.childLanes)!==0,de||s){if(r=q,r!==null){switch(o&-o){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=l&(r.suspendedLanes|o)?0:l,l!==0&&l!==i.retryLane&&(i.retryLane=l,Ke(e,l),Re(r,e,l,-1))}return zo(),r=Bl(Error(y(421))),mr(e,t,o,r)}return l.data==="$?"?(t.flags|=128,t.child=e.child,t=Ef.bind(null,e),l._reactRetry=t,null):(e=i.treeContext,ve=ot(l.nextSibling),ge=t,A=!0,Te=null,e!==null&&(ke[Se++]=Be,ke[Se++]=He,ke[Se++]=Ct,Be=e.id,He=e.overflow,Ct=t),t=Eo(t,r.children),t.flags|=4096,t)}function Rs(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ei(e.return,t,n)}function Hl(e,t,n,r,l){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:l}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=l)}function Fa(e,t,n){var r=t.pendingProps,l=r.revealOrder,i=r.tail;if(oe(e,t,r.children,n),r=$.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Rs(e,n,t);else if(e.tag===19)Rs(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(O($,r),!(t.mode&1))t.memoizedState=null;else switch(l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&Kr(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),Hl(t,!1,l,n,i);break;case"backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&Kr(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}Hl(t,!0,n,null,i);break;case"together":Hl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function _r(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Ge(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Pt|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(y(153));if(t.child!==null){for(e=t.child,n=ct(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=ct(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function df(e,t,n){switch(t.tag){case 3:Oa(t),bt();break;case 5:aa(t);break;case 1:pe(t.type)&&Vr(t);break;case 4:ho(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,l=t.memoizedProps.value;O(Wr,r._currentValue),r._currentValue=l;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(O($,$.current&1),t.flags|=128,null):n&t.child.childLanes?Da(e,t,n):(O($,$.current&1),e=Ge(e,t,n),e!==null?e.sibling:null);O($,$.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Fa(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),O($,$.current),r)break;return null;case 22:case 23:return t.lanes=0,Ra(e,t,n)}return Ge(e,t,n)}var Ua,Ti,Aa,$a;Ua=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ti=function(){};Aa=function(e,t,n,r){var l=e.memoizedProps;if(l!==r){e=t.stateNode,St(Ae.current);var i=null;switch(n){case"input":l=bl(e,l),r=bl(e,r),i=[];break;case"select":l=B({},l,{value:void 0}),r=B({},r,{value:void 0}),i=[];break;case"textarea":l=ni(e,l),r=ni(e,r),i=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Ar)}li(n,r);var o;n=null;for(d in l)if(!r.hasOwnProperty(d)&&l.hasOwnProperty(d)&&l[d]!=null)if(d==="style"){var s=l[d];for(o in s)s.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(Tn.hasOwnProperty(d)?i||(i=[]):(i=i||[]).push(d,null));for(d in r){var u=r[d];if(s=l!=null?l[d]:void 0,r.hasOwnProperty(d)&&u!==s&&(u!=null||s!=null))if(d==="style")if(s){for(o in s)!s.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&s[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(i||(i=[]),i.push(d,n)),n=u;else d==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,s=s?s.__html:void 0,u!=null&&s!==u&&(i=i||[]).push(d,u)):d==="children"?typeof u!="string"&&typeof u!="number"||(i=i||[]).push(d,""+u):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(Tn.hasOwnProperty(d)?(u!=null&&d==="onScroll"&&D("scroll",e),i||s===u||(i=[])):(i=i||[]).push(d,u))}n&&(i=i||[]).push("style",n);var d=i;(t.updateQueue=d)&&(t.flags|=4)}};$a=function(e,t,n,r){n!==r&&(t.flags|=4)};function vn(e,t){if(!A)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function re(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function ff(e,t,n){var r=t.pendingProps;switch(so(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return re(t),null;case 1:return pe(t.type)&&$r(),re(t),null;case 3:return r=t.stateNode,tn(),F(fe),F(ie),go(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(fr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Te!==null&&(Ai(Te),Te=null))),Ti(e,t),re(t),null;case 5:vo(t);var l=St(Hn.current);if(n=t.type,e!==null&&t.stateNode!=null)Aa(e,t,n,r,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(y(166));return re(t),null}if(e=St(Ae.current),fr(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[Fe]=t,r[Vn]=i,e=(t.mode&1)!==0,n){case"dialog":D("cancel",r),D("close",r);break;case"iframe":case"object":case"embed":D("load",r);break;case"video":case"audio":for(l=0;l<kn.length;l++)D(kn[l],r);break;case"source":D("error",r);break;case"img":case"image":case"link":D("error",r),D("load",r);break;case"details":D("toggle",r);break;case"input":Bo(r,i),D("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},D("invalid",r);break;case"textarea":Wo(r,i),D("invalid",r)}li(n,i),l=null;for(var o in i)if(i.hasOwnProperty(o)){var s=i[o];o==="children"?typeof s=="string"?r.textContent!==s&&(i.suppressHydrationWarning!==!0&&dr(r.textContent,s,e),l=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(i.suppressHydrationWarning!==!0&&dr(r.textContent,s,e),l=["children",""+s]):Tn.hasOwnProperty(o)&&s!=null&&o==="onScroll"&&D("scroll",r)}switch(n){case"input":rr(r),Ho(r,i,!0);break;case"textarea":rr(r),Qo(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Ar)}r=l,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=mu(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[Fe]=t,e[Vn]=r,Ua(e,t,!1,!1),t.stateNode=e;e:{switch(o=ii(n,r),n){case"dialog":D("cancel",e),D("close",e),l=r;break;case"iframe":case"object":case"embed":D("load",e),l=r;break;case"video":case"audio":for(l=0;l<kn.length;l++)D(kn[l],e);l=r;break;case"source":D("error",e),l=r;break;case"img":case"image":case"link":D("error",e),D("load",e),l=r;break;case"details":D("toggle",e),l=r;break;case"input":Bo(e,r),l=bl(e,r),D("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=B({},r,{value:void 0}),D("invalid",e);break;case"textarea":Wo(e,r),l=ni(e,r),D("invalid",e);break;default:l=r}li(n,l),s=l;for(i in s)if(s.hasOwnProperty(i)){var u=s[i];i==="style"?gu(e,u):i==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&hu(e,u)):i==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&In(e,u):typeof u=="number"&&In(e,""+u):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Tn.hasOwnProperty(i)?u!=null&&i==="onScroll"&&D("scroll",e):u!=null&&Yi(e,i,u,o))}switch(n){case"input":rr(e),Ho(e,r,!1);break;case"textarea":rr(e),Qo(e);break;case"option":r.value!=null&&e.setAttribute("value",""+dt(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?Qt(e,!!r.multiple,i,!1):r.defaultValue!=null&&Qt(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=Ar)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return re(t),null;case 6:if(e&&t.stateNode!=null)$a(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(y(166));if(n=St(Hn.current),St(Ae.current),fr(t)){if(r=t.stateNode,n=t.memoizedProps,r[Fe]=t,(i=r.nodeValue!==n)&&(e=ge,e!==null))switch(e.tag){case 3:dr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&dr(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Fe]=t,t.stateNode=r}return re(t),null;case 13:if(F($),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(A&&ve!==null&&t.mode&1&&!(t.flags&128))la(),bt(),t.flags|=98560,i=!1;else if(i=fr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(y(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(y(317));i[Fe]=t}else bt(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;re(t),i=!1}else Te!==null&&(Ai(Te),Te=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||$.current&1?X===0&&(X=3):zo())),t.updateQueue!==null&&(t.flags|=4),re(t),null);case 4:return tn(),Ti(e,t),e===null&&An(t.stateNode.containerInfo),re(t),null;case 10:return fo(t.type._context),re(t),null;case 17:return pe(t.type)&&$r(),re(t),null;case 19:if(F($),i=t.memoizedState,i===null)return re(t),null;if(r=(t.flags&128)!==0,o=i.rendering,o===null)if(r)vn(i,!1);else{if(X!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=Kr(e),o!==null){for(t.flags|=128,vn(i,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,e=o.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return O($,$.current&1|2),t.child}e=e.sibling}i.tail!==null&&Y()>rn&&(t.flags|=128,r=!0,vn(i,!1),t.lanes=4194304)}else{if(!r)if(e=Kr(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),vn(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!A)return re(t),null}else 2*Y()-i.renderingStartTime>rn&&n!==1073741824&&(t.flags|=128,r=!0,vn(i,!1),t.lanes=4194304);i.isBackwards?(o.sibling=t.child,t.child=o):(n=i.last,n!==null?n.sibling=o:t.child=o,i.last=o)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=Y(),t.sibling=null,n=$.current,O($,r?n&1|2:n&1),t):(re(t),null);case 22:case 23:return Po(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?he&1073741824&&(re(t),t.subtreeFlags&6&&(t.flags|=8192)):re(t),null;case 24:return null;case 25:return null}throw Error(y(156,t.tag))}function pf(e,t){switch(so(t),t.tag){case 1:return pe(t.type)&&$r(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return tn(),F(fe),F(ie),go(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return vo(t),null;case 13:if(F($),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(y(340));bt()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return F($),null;case 4:return tn(),null;case 10:return fo(t.type._context),null;case 22:case 23:return Po(),null;case 24:return null;default:return null}}var hr=!1,le=!1,mf=typeof WeakSet=="function"?WeakSet:Set,S=null;function Ht(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){H(e,t,r)}else n.current=null}function Ii(e,t,n){try{n()}catch(r){H(e,t,r)}}var Ms=!1;function hf(e,t){if(hi=Dr,e=Qu(),io(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var l=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var o=0,s=-1,u=-1,d=0,v=0,h=e,m=null;t:for(;;){for(var x;h!==n||l!==0&&h.nodeType!==3||(s=o+l),h!==i||r!==0&&h.nodeType!==3||(u=o+r),h.nodeType===3&&(o+=h.nodeValue.length),(x=h.firstChild)!==null;)m=h,h=x;for(;;){if(h===e)break t;if(m===n&&++d===l&&(s=o),m===i&&++v===r&&(u=o),(x=h.nextSibling)!==null)break;h=m,m=h.parentNode}h=x}n=s===-1||u===-1?null:{start:s,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(vi={focusedElem:e,selectionRange:n},Dr=!1,S=t;S!==null;)if(t=S,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,S=e;else for(;S!==null;){t=S;try{var w=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var k=w.memoizedProps,U=w.memoizedState,f=t.stateNode,c=f.getSnapshotBeforeUpdate(t.elementType===t.type?k:ze(t.type,k),U);f.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(y(163))}}catch(g){H(t,t.return,g)}if(e=t.sibling,e!==null){e.return=t.return,S=e;break}S=t.return}return w=Ms,Ms=!1,w}function Pn(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var i=l.destroy;l.destroy=void 0,i!==void 0&&Ii(t,n,i)}l=l.next}while(l!==r)}}function cl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Ri(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Va(e){var t=e.alternate;t!==null&&(e.alternate=null,Va(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Fe],delete t[Vn],delete t[xi],delete t[Zd],delete t[Jd])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Ba(e){return e.tag===5||e.tag===3||e.tag===4}function Os(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Ba(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Mi(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ar));else if(r!==4&&(e=e.child,e!==null))for(Mi(e,t,n),e=e.sibling;e!==null;)Mi(e,t,n),e=e.sibling}function Oi(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Oi(e,t,n),e=e.sibling;e!==null;)Oi(e,t,n),e=e.sibling}var b=null,Le=!1;function Ze(e,t,n){for(n=n.child;n!==null;)Ha(e,t,n),n=n.sibling}function Ha(e,t,n){if(Ue&&typeof Ue.onCommitFiberUnmount=="function")try{Ue.onCommitFiberUnmount(nl,n)}catch{}switch(n.tag){case 5:le||Ht(n,t);case 6:var r=b,l=Le;b=null,Ze(e,t,n),b=r,Le=l,b!==null&&(Le?(e=b,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):b.removeChild(n.stateNode));break;case 18:b!==null&&(Le?(e=b,n=n.stateNode,e.nodeType===8?Dl(e.parentNode,n):e.nodeType===1&&Dl(e,n),Dn(e)):Dl(b,n.stateNode));break;case 4:r=b,l=Le,b=n.stateNode.containerInfo,Le=!0,Ze(e,t,n),b=r,Le=l;break;case 0:case 11:case 14:case 15:if(!le&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var i=l,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&Ii(n,t,o),l=l.next}while(l!==r)}Ze(e,t,n);break;case 1:if(!le&&(Ht(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){H(n,t,s)}Ze(e,t,n);break;case 21:Ze(e,t,n);break;case 22:n.mode&1?(le=(r=le)||n.memoizedState!==null,Ze(e,t,n),le=r):Ze(e,t,n);break;default:Ze(e,t,n)}}function Ds(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new mf),t.forEach(function(r){var l=Nf.bind(null,e,r);n.has(r)||(n.add(r),r.then(l,l))})}}function Pe(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var l=n[r];try{var i=e,o=t,s=o;e:for(;s!==null;){switch(s.tag){case 5:b=s.stateNode,Le=!1;break e;case 3:b=s.stateNode.containerInfo,Le=!0;break e;case 4:b=s.stateNode.containerInfo,Le=!0;break e}s=s.return}if(b===null)throw Error(y(160));Ha(i,o,l),b=null,Le=!1;var u=l.alternate;u!==null&&(u.return=null),l.return=null}catch(d){H(l,t,d)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Wa(t,e),t=t.sibling}function Wa(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Pe(t,e),Oe(e),r&4){try{Pn(3,e,e.return),cl(3,e)}catch(k){H(e,e.return,k)}try{Pn(5,e,e.return)}catch(k){H(e,e.return,k)}}break;case 1:Pe(t,e),Oe(e),r&512&&n!==null&&Ht(n,n.return);break;case 5:if(Pe(t,e),Oe(e),r&512&&n!==null&&Ht(n,n.return),e.flags&32){var l=e.stateNode;try{In(l,"")}catch(k){H(e,e.return,k)}}if(r&4&&(l=e.stateNode,l!=null)){var i=e.memoizedProps,o=n!==null?n.memoizedProps:i,s=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{s==="input"&&i.type==="radio"&&i.name!=null&&fu(l,i),ii(s,o);var d=ii(s,i);for(o=0;o<u.length;o+=2){var v=u[o],h=u[o+1];v==="style"?gu(l,h):v==="dangerouslySetInnerHTML"?hu(l,h):v==="children"?In(l,h):Yi(l,v,h,d)}switch(s){case"input":ei(l,i);break;case"textarea":pu(l,i);break;case"select":var m=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!i.multiple;var x=i.value;x!=null?Qt(l,!!i.multiple,x,!1):m!==!!i.multiple&&(i.defaultValue!=null?Qt(l,!!i.multiple,i.defaultValue,!0):Qt(l,!!i.multiple,i.multiple?[]:"",!1))}l[Vn]=i}catch(k){H(e,e.return,k)}}break;case 6:if(Pe(t,e),Oe(e),r&4){if(e.stateNode===null)throw Error(y(162));l=e.stateNode,i=e.memoizedProps;try{l.nodeValue=i}catch(k){H(e,e.return,k)}}break;case 3:if(Pe(t,e),Oe(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Dn(t.containerInfo)}catch(k){H(e,e.return,k)}break;case 4:Pe(t,e),Oe(e);break;case 13:Pe(t,e),Oe(e),l=e.child,l.flags&8192&&(i=l.memoizedState!==null,l.stateNode.isHidden=i,!i||l.alternate!==null&&l.alternate.memoizedState!==null||(Co=Y())),r&4&&Ds(e);break;case 22:if(v=n!==null&&n.memoizedState!==null,e.mode&1?(le=(d=le)||v,Pe(t,e),le=d):Pe(t,e),Oe(e),r&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!v&&e.mode&1)for(S=e,v=e.child;v!==null;){for(h=S=v;S!==null;){switch(m=S,x=m.child,m.tag){case 0:case 11:case 14:case 15:Pn(4,m,m.return);break;case 1:Ht(m,m.return);var w=m.stateNode;if(typeof w.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,w.props=t.memoizedProps,w.state=t.memoizedState,w.componentWillUnmount()}catch(k){H(r,n,k)}}break;case 5:Ht(m,m.return);break;case 22:if(m.memoizedState!==null){Us(h);continue}}x!==null?(x.return=m,S=x):Us(h)}v=v.sibling}e:for(v=null,h=e;;){if(h.tag===5){if(v===null){v=h;try{l=h.stateNode,d?(i=l.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(s=h.stateNode,u=h.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,s.style.display=vu("display",o))}catch(k){H(e,e.return,k)}}}else if(h.tag===6){if(v===null)try{h.stateNode.nodeValue=d?"":h.memoizedProps}catch(k){H(e,e.return,k)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;v===h&&(v=null),h=h.return}v===h&&(v=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Pe(t,e),Oe(e),r&4&&Ds(e);break;case 21:break;default:Pe(t,e),Oe(e)}}function Oe(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Ba(n)){var r=n;break e}n=n.return}throw Error(y(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(In(l,""),r.flags&=-33);var i=Os(e);Oi(e,i,l);break;case 3:case 4:var o=r.stateNode.containerInfo,s=Os(e);Mi(e,s,o);break;default:throw Error(y(161))}}catch(u){H(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function vf(e,t,n){S=e,Qa(e)}function Qa(e,t,n){for(var r=(e.mode&1)!==0;S!==null;){var l=S,i=l.child;if(l.tag===22&&r){var o=l.memoizedState!==null||hr;if(!o){var s=l.alternate,u=s!==null&&s.memoizedState!==null||le;s=hr;var d=le;if(hr=o,(le=u)&&!d)for(S=l;S!==null;)o=S,u=o.child,o.tag===22&&o.memoizedState!==null?As(l):u!==null?(u.return=o,S=u):As(l);for(;i!==null;)S=i,Qa(i),i=i.sibling;S=l,hr=s,le=d}Fs(e)}else l.subtreeFlags&8772&&i!==null?(i.return=l,S=i):Fs(e)}}function Fs(e){for(;S!==null;){var t=S;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:le||cl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!le)if(n===null)r.componentDidMount();else{var l=t.elementType===t.type?n.memoizedProps:ze(t.type,n.memoizedProps);r.componentDidUpdate(l,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&ks(t,i,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}ks(t,o,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var d=t.alternate;if(d!==null){var v=d.memoizedState;if(v!==null){var h=v.dehydrated;h!==null&&Dn(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(y(163))}le||t.flags&512&&Ri(t)}catch(m){H(t,t.return,m)}}if(t===e){S=null;break}if(n=t.sibling,n!==null){n.return=t.return,S=n;break}S=t.return}}function Us(e){for(;S!==null;){var t=S;if(t===e){S=null;break}var n=t.sibling;if(n!==null){n.return=t.return,S=n;break}S=t.return}}function As(e){for(;S!==null;){var t=S;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{cl(4,t)}catch(u){H(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var l=t.return;try{r.componentDidMount()}catch(u){H(t,l,u)}}var i=t.return;try{Ri(t)}catch(u){H(t,i,u)}break;case 5:var o=t.return;try{Ri(t)}catch(u){H(t,o,u)}}}catch(u){H(t,t.return,u)}if(t===e){S=null;break}var s=t.sibling;if(s!==null){s.return=t.return,S=s;break}S=t.return}}var gf=Math.ceil,Zr=Xe.ReactCurrentDispatcher,No=Xe.ReactCurrentOwner,Ne=Xe.ReactCurrentBatchConfig,R=0,q=null,K=null,ee=0,he=0,Wt=mt(0),X=0,Kn=null,Pt=0,dl=0,jo=0,zn=null,ce=null,Co=0,rn=1/0,$e=null,Jr=!1,Di=null,ut=null,vr=!1,nt=null,qr=0,Ln=0,Fi=null,Pr=-1,zr=0;function se(){return R&6?Y():Pr!==-1?Pr:Pr=Y()}function at(e){return e.mode&1?R&2&&ee!==0?ee&-ee:bd.transition!==null?(zr===0&&(zr=zu()),zr):(e=M,e!==0||(e=window.event,e=e===void 0?16:Du(e.type)),e):1}function Re(e,t,n,r){if(50<Ln)throw Ln=0,Fi=null,Error(y(185));Xn(e,n,r),(!(R&2)||e!==q)&&(e===q&&(!(R&2)&&(dl|=n),X===4&&et(e,ee)),me(e,r),n===1&&R===0&&!(t.mode&1)&&(rn=Y()+500,sl&&ht()))}function me(e,t){var n=e.callbackNode;bc(e,t);var r=Or(e,e===q?ee:0);if(r===0)n!==null&&Go(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Go(n),t===1)e.tag===0?qd($s.bind(null,e)):ta($s.bind(null,e)),Gd(function(){!(R&6)&&ht()}),n=null;else{switch(Lu(r)){case 1:n=Ji;break;case 4:n=_u;break;case 16:n=Mr;break;case 536870912:n=Pu;break;default:n=Mr}n=ba(n,Ya.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Ya(e,t){if(Pr=-1,zr=0,R&6)throw Error(y(327));var n=e.callbackNode;if(Zt()&&e.callbackNode!==n)return null;var r=Or(e,e===q?ee:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=br(e,r);else{t=r;var l=R;R|=2;var i=Ga();(q!==e||ee!==t)&&($e=null,rn=Y()+500,Et(e,t));do try{wf();break}catch(s){Ka(e,s)}while(!0);co(),Zr.current=i,R=l,K!==null?t=0:(q=null,ee=0,t=X)}if(t!==0){if(t===2&&(l=ci(e),l!==0&&(r=l,t=Ui(e,l))),t===1)throw n=Kn,Et(e,0),et(e,r),me(e,Y()),n;if(t===6)et(e,r);else{if(l=e.current.alternate,!(r&30)&&!yf(l)&&(t=br(e,r),t===2&&(i=ci(e),i!==0&&(r=i,t=Ui(e,i))),t===1))throw n=Kn,Et(e,0),et(e,r),me(e,Y()),n;switch(e.finishedWork=l,e.finishedLanes=r,t){case 0:case 1:throw Error(y(345));case 2:xt(e,ce,$e);break;case 3:if(et(e,r),(r&130023424)===r&&(t=Co+500-Y(),10<t)){if(Or(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){se(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=yi(xt.bind(null,e,ce,$e),t);break}xt(e,ce,$e);break;case 4:if(et(e,r),(r&4194240)===r)break;for(t=e.eventTimes,l=-1;0<r;){var o=31-Ie(r);i=1<<o,o=t[o],o>l&&(l=o),r&=~i}if(r=l,r=Y()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*gf(r/1960))-r,10<r){e.timeoutHandle=yi(xt.bind(null,e,ce,$e),r);break}xt(e,ce,$e);break;case 5:xt(e,ce,$e);break;default:throw Error(y(329))}}}return me(e,Y()),e.callbackNode===n?Ya.bind(null,e):null}function Ui(e,t){var n=zn;return e.current.memoizedState.isDehydrated&&(Et(e,t).flags|=256),e=br(e,t),e!==2&&(t=ce,ce=n,t!==null&&Ai(t)),e}function Ai(e){ce===null?ce=e:ce.push.apply(ce,e)}function yf(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var l=n[r],i=l.getSnapshot;l=l.value;try{if(!Me(i(),l))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function et(e,t){for(t&=~jo,t&=~dl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ie(t),r=1<<n;e[n]=-1,t&=~r}}function $s(e){if(R&6)throw Error(y(327));Zt();var t=Or(e,0);if(!(t&1))return me(e,Y()),null;var n=br(e,t);if(e.tag!==0&&n===2){var r=ci(e);r!==0&&(t=r,n=Ui(e,r))}if(n===1)throw n=Kn,Et(e,0),et(e,t),me(e,Y()),n;if(n===6)throw Error(y(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,xt(e,ce,$e),me(e,Y()),null}function _o(e,t){var n=R;R|=1;try{return e(t)}finally{R=n,R===0&&(rn=Y()+500,sl&&ht())}}function zt(e){nt!==null&&nt.tag===0&&!(R&6)&&Zt();var t=R;R|=1;var n=Ne.transition,r=M;try{if(Ne.transition=null,M=1,e)return e()}finally{M=r,Ne.transition=n,R=t,!(R&6)&&ht()}}function Po(){he=Wt.current,F(Wt)}function Et(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Kd(n)),K!==null)for(n=K.return;n!==null;){var r=n;switch(so(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&$r();break;case 3:tn(),F(fe),F(ie),go();break;case 5:vo(r);break;case 4:tn();break;case 13:F($);break;case 19:F($);break;case 10:fo(r.type._context);break;case 22:case 23:Po()}n=n.return}if(q=e,K=e=ct(e.current,null),ee=he=t,X=0,Kn=null,jo=dl=Pt=0,ce=zn=null,kt!==null){for(t=0;t<kt.length;t++)if(n=kt[t],r=n.interleaved,r!==null){n.interleaved=null;var l=r.next,i=n.pending;if(i!==null){var o=i.next;i.next=l,r.next=o}n.pending=r}kt=null}return e}function Ka(e,t){do{var n=K;try{if(co(),jr.current=Xr,Gr){for(var r=V.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}Gr=!1}if(_t=0,J=G=V=null,_n=!1,Wn=0,No.current=null,n===null||n.return===null){X=1,Kn=t,K=null;break}e:{var i=e,o=n.return,s=n,u=t;if(t=ee,s.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var d=u,v=s,h=v.tag;if(!(v.mode&1)&&(h===0||h===11||h===15)){var m=v.alternate;m?(v.updateQueue=m.updateQueue,v.memoizedState=m.memoizedState,v.lanes=m.lanes):(v.updateQueue=null,v.memoizedState=null)}var x=_s(o);if(x!==null){x.flags&=-257,Ps(x,o,s,i,t),x.mode&1&&Cs(i,d,t),t=x,u=d;var w=t.updateQueue;if(w===null){var k=new Set;k.add(u),t.updateQueue=k}else w.add(u);break e}else{if(!(t&1)){Cs(i,d,t),zo();break e}u=Error(y(426))}}else if(A&&s.mode&1){var U=_s(o);if(U!==null){!(U.flags&65536)&&(U.flags|=256),Ps(U,o,s,i,t),uo(nn(u,s));break e}}i=u=nn(u,s),X!==4&&(X=2),zn===null?zn=[i]:zn.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var f=La(i,u,t);ws(i,f);break e;case 1:s=u;var c=i.type,p=i.stateNode;if(!(i.flags&128)&&(typeof c.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(ut===null||!ut.has(p)))){i.flags|=65536,t&=-t,i.lanes|=t;var g=Ta(i,s,t);ws(i,g);break e}}i=i.return}while(i!==null)}Za(n)}catch(E){t=E,K===n&&n!==null&&(K=n=n.return);continue}break}while(!0)}function Ga(){var e=Zr.current;return Zr.current=Xr,e===null?Xr:e}function zo(){(X===0||X===3||X===2)&&(X=4),q===null||!(Pt&268435455)&&!(dl&268435455)||et(q,ee)}function br(e,t){var n=R;R|=2;var r=Ga();(q!==e||ee!==t)&&($e=null,Et(e,t));do try{xf();break}catch(l){Ka(e,l)}while(!0);if(co(),R=n,Zr.current=r,K!==null)throw Error(y(261));return q=null,ee=0,X}function xf(){for(;K!==null;)Xa(K)}function wf(){for(;K!==null&&!Wc();)Xa(K)}function Xa(e){var t=qa(e.alternate,e,he);e.memoizedProps=e.pendingProps,t===null?Za(e):K=t,No.current=null}function Za(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=pf(n,t),n!==null){n.flags&=32767,K=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{X=6,K=null;return}}else if(n=ff(n,t,he),n!==null){K=n;return}if(t=t.sibling,t!==null){K=t;return}K=t=e}while(t!==null);X===0&&(X=5)}function xt(e,t,n){var r=M,l=Ne.transition;try{Ne.transition=null,M=1,kf(e,t,n,r)}finally{Ne.transition=l,M=r}return null}function kf(e,t,n,r){do Zt();while(nt!==null);if(R&6)throw Error(y(327));n=e.finishedWork;var l=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(y(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(ed(e,i),e===q&&(K=q=null,ee=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||vr||(vr=!0,ba(Mr,function(){return Zt(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=Ne.transition,Ne.transition=null;var o=M;M=1;var s=R;R|=4,No.current=null,hf(e,n),Wa(n,e),$d(vi),Dr=!!hi,vi=hi=null,e.current=n,vf(n),Qc(),R=s,M=o,Ne.transition=i}else e.current=n;if(vr&&(vr=!1,nt=e,qr=l),i=e.pendingLanes,i===0&&(ut=null),Gc(n.stateNode),me(e,Y()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)l=t[n],r(l.value,{componentStack:l.stack,digest:l.digest});if(Jr)throw Jr=!1,e=Di,Di=null,e;return qr&1&&e.tag!==0&&Zt(),i=e.pendingLanes,i&1?e===Fi?Ln++:(Ln=0,Fi=e):Ln=0,ht(),null}function Zt(){if(nt!==null){var e=Lu(qr),t=Ne.transition,n=M;try{if(Ne.transition=null,M=16>e?16:e,nt===null)var r=!1;else{if(e=nt,nt=null,qr=0,R&6)throw Error(y(331));var l=R;for(R|=4,S=e.current;S!==null;){var i=S,o=i.child;if(S.flags&16){var s=i.deletions;if(s!==null){for(var u=0;u<s.length;u++){var d=s[u];for(S=d;S!==null;){var v=S;switch(v.tag){case 0:case 11:case 15:Pn(8,v,i)}var h=v.child;if(h!==null)h.return=v,S=h;else for(;S!==null;){v=S;var m=v.sibling,x=v.return;if(Va(v),v===d){S=null;break}if(m!==null){m.return=x,S=m;break}S=x}}}var w=i.alternate;if(w!==null){var k=w.child;if(k!==null){w.child=null;do{var U=k.sibling;k.sibling=null,k=U}while(k!==null)}}S=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,S=o;else e:for(;S!==null;){if(i=S,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Pn(9,i,i.return)}var f=i.sibling;if(f!==null){f.return=i.return,S=f;break e}S=i.return}}var c=e.current;for(S=c;S!==null;){o=S;var p=o.child;if(o.subtreeFlags&2064&&p!==null)p.return=o,S=p;else e:for(o=c;S!==null;){if(s=S,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:cl(9,s)}}catch(E){H(s,s.return,E)}if(s===o){S=null;break e}var g=s.sibling;if(g!==null){g.return=s.return,S=g;break e}S=s.return}}if(R=l,ht(),Ue&&typeof Ue.onPostCommitFiberRoot=="function")try{Ue.onPostCommitFiberRoot(nl,e)}catch{}r=!0}return r}finally{M=n,Ne.transition=t}}return!1}function Vs(e,t,n){t=nn(n,t),t=La(e,t,1),e=st(e,t,1),t=se(),e!==null&&(Xn(e,1,t),me(e,t))}function H(e,t,n){if(e.tag===3)Vs(e,e,n);else for(;t!==null;){if(t.tag===3){Vs(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ut===null||!ut.has(r))){e=nn(n,e),e=Ta(t,e,1),t=st(t,e,1),e=se(),t!==null&&(Xn(t,1,e),me(t,e));break}}t=t.return}}function Sf(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=se(),e.pingedLanes|=e.suspendedLanes&n,q===e&&(ee&n)===n&&(X===4||X===3&&(ee&130023424)===ee&&500>Y()-Co?Et(e,0):jo|=n),me(e,t)}function Ja(e,t){t===0&&(e.mode&1?(t=or,or<<=1,!(or&130023424)&&(or=4194304)):t=1);var n=se();e=Ke(e,t),e!==null&&(Xn(e,t,n),me(e,n))}function Ef(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Ja(e,n)}function Nf(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(y(314))}r!==null&&r.delete(t),Ja(e,n)}var qa;qa=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||fe.current)de=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return de=!1,df(e,t,n);de=!!(e.flags&131072)}else de=!1,A&&t.flags&1048576&&na(t,Hr,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;_r(e,t),e=t.pendingProps;var l=qt(t,ie.current);Xt(t,n),l=xo(null,t,r,e,l,n);var i=wo();return t.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,pe(r)?(i=!0,Vr(t)):i=!1,t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,mo(t),l.updater=al,t.stateNode=l,l._reactInternals=t,ji(t,r,e,n),t=Pi(null,t,r,!0,i,n)):(t.tag=0,A&&i&&oo(t),oe(null,t,l,n),t=t.child),t;case 16:r=t.elementType;e:{switch(_r(e,t),e=t.pendingProps,l=r._init,r=l(r._payload),t.type=r,l=t.tag=Cf(r),e=ze(r,e),l){case 0:t=_i(null,t,r,e,n);break e;case 1:t=Ts(null,t,r,e,n);break e;case 11:t=zs(null,t,r,e,n);break e;case 14:t=Ls(null,t,r,ze(r.type,e),n);break e}throw Error(y(306,r,""))}return t;case 0:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:ze(r,l),_i(e,t,r,l,n);case 1:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:ze(r,l),Ts(e,t,r,l,n);case 3:e:{if(Oa(t),e===null)throw Error(y(387));r=t.pendingProps,i=t.memoizedState,l=i.element,ua(e,t),Yr(t,r,null,n);var o=t.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){l=nn(Error(y(423)),t),t=Is(e,t,r,n,l);break e}else if(r!==l){l=nn(Error(y(424)),t),t=Is(e,t,r,n,l);break e}else for(ve=ot(t.stateNode.containerInfo.firstChild),ge=t,A=!0,Te=null,n=oa(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(bt(),r===l){t=Ge(e,t,n);break e}oe(e,t,r,n)}t=t.child}return t;case 5:return aa(t),e===null&&Si(t),r=t.type,l=t.pendingProps,i=e!==null?e.memoizedProps:null,o=l.children,gi(r,l)?o=null:i!==null&&gi(r,i)&&(t.flags|=32),Ma(e,t),oe(e,t,o,n),t.child;case 6:return e===null&&Si(t),null;case 13:return Da(e,t,n);case 4:return ho(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=en(t,null,r,n):oe(e,t,r,n),t.child;case 11:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:ze(r,l),zs(e,t,r,l,n);case 7:return oe(e,t,t.pendingProps,n),t.child;case 8:return oe(e,t,t.pendingProps.children,n),t.child;case 12:return oe(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,l=t.pendingProps,i=t.memoizedProps,o=l.value,O(Wr,r._currentValue),r._currentValue=o,i!==null)if(Me(i.value,o)){if(i.children===l.children&&!fe.current){t=Ge(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var s=i.dependencies;if(s!==null){o=i.child;for(var u=s.firstContext;u!==null;){if(u.context===r){if(i.tag===1){u=We(-1,n&-n),u.tag=2;var d=i.updateQueue;if(d!==null){d=d.shared;var v=d.pending;v===null?u.next=u:(u.next=v.next,v.next=u),d.pending=u}}i.lanes|=n,u=i.alternate,u!==null&&(u.lanes|=n),Ei(i.return,n,t),s.lanes|=n;break}u=u.next}}else if(i.tag===10)o=i.type===t.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(y(341));o.lanes|=n,s=o.alternate,s!==null&&(s.lanes|=n),Ei(o,n,t),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===t){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}oe(e,t,l.children,n),t=t.child}return t;case 9:return l=t.type,r=t.pendingProps.children,Xt(t,n),l=je(l),r=r(l),t.flags|=1,oe(e,t,r,n),t.child;case 14:return r=t.type,l=ze(r,t.pendingProps),l=ze(r.type,l),Ls(e,t,r,l,n);case 15:return Ia(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:ze(r,l),_r(e,t),t.tag=1,pe(r)?(e=!0,Vr(t)):e=!1,Xt(t,n),za(t,r,l),ji(t,r,l,n),Pi(null,t,r,!0,e,n);case 19:return Fa(e,t,n);case 22:return Ra(e,t,n)}throw Error(y(156,t.tag))};function ba(e,t){return Cu(e,t)}function jf(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ee(e,t,n,r){return new jf(e,t,n,r)}function Lo(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Cf(e){if(typeof e=="function")return Lo(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Gi)return 11;if(e===Xi)return 14}return 2}function ct(e,t){var n=e.alternate;return n===null?(n=Ee(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Lr(e,t,n,r,l,i){var o=2;if(r=e,typeof e=="function")Lo(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Mt:return Nt(n.children,l,i,t);case Ki:o=8,l|=8;break;case Xl:return e=Ee(12,n,t,l|2),e.elementType=Xl,e.lanes=i,e;case Zl:return e=Ee(13,n,t,l),e.elementType=Zl,e.lanes=i,e;case Jl:return e=Ee(19,n,t,l),e.elementType=Jl,e.lanes=i,e;case au:return fl(n,l,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case su:o=10;break e;case uu:o=9;break e;case Gi:o=11;break e;case Xi:o=14;break e;case Je:o=16,r=null;break e}throw Error(y(130,e==null?e:typeof e,""))}return t=Ee(o,n,t,l),t.elementType=e,t.type=r,t.lanes=i,t}function Nt(e,t,n,r){return e=Ee(7,e,r,t),e.lanes=n,e}function fl(e,t,n,r){return e=Ee(22,e,r,t),e.elementType=au,e.lanes=n,e.stateNode={isHidden:!1},e}function Wl(e,t,n){return e=Ee(6,e,null,t),e.lanes=n,e}function Ql(e,t,n){return t=Ee(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function _f(e,t,n,r,l){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=jl(0),this.expirationTimes=jl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=jl(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function To(e,t,n,r,l,i,o,s,u){return e=new _f(e,t,n,s,u),t===1?(t=1,i===!0&&(t|=8)):t=0,i=Ee(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},mo(i),e}function Pf(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Rt,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function ec(e){if(!e)return ft;e=e._reactInternals;e:{if(Tt(e)!==e||e.tag!==1)throw Error(y(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(pe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(y(171))}if(e.tag===1){var n=e.type;if(pe(n))return ea(e,n,t)}return t}function tc(e,t,n,r,l,i,o,s,u){return e=To(n,r,!0,e,l,i,o,s,u),e.context=ec(null),n=e.current,r=se(),l=at(n),i=We(r,l),i.callback=t??null,st(n,i,l),e.current.lanes=l,Xn(e,l,r),me(e,r),e}function pl(e,t,n,r){var l=t.current,i=se(),o=at(l);return n=ec(n),t.context===null?t.context=n:t.pendingContext=n,t=We(i,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=st(l,t,o),e!==null&&(Re(e,l,o,i),Nr(e,l,o)),o}function el(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Bs(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Io(e,t){Bs(e,t),(e=e.alternate)&&Bs(e,t)}function zf(){return null}var nc=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ro(e){this._internalRoot=e}ml.prototype.render=Ro.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(y(409));pl(e,t,null,null)};ml.prototype.unmount=Ro.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;zt(function(){pl(null,e,null,null)}),t[Ye]=null}};function ml(e){this._internalRoot=e}ml.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ru();e={blockedOn:null,target:e,priority:t};for(var n=0;n<be.length&&t!==0&&t<be[n].priority;n++);be.splice(n,0,e),n===0&&Ou(e)}};function Mo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function hl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Hs(){}function Lf(e,t,n,r,l){if(l){if(typeof r=="function"){var i=r;r=function(){var d=el(o);i.call(d)}}var o=tc(t,r,e,0,null,!1,!1,"",Hs);return e._reactRootContainer=o,e[Ye]=o.current,An(e.nodeType===8?e.parentNode:e),zt(),o}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var s=r;r=function(){var d=el(u);s.call(d)}}var u=To(e,0,!1,null,null,!1,!1,"",Hs);return e._reactRootContainer=u,e[Ye]=u.current,An(e.nodeType===8?e.parentNode:e),zt(function(){pl(t,u,n,r)}),u}function vl(e,t,n,r,l){var i=n._reactRootContainer;if(i){var o=i;if(typeof l=="function"){var s=l;l=function(){var u=el(o);s.call(u)}}pl(t,o,e,l)}else o=Lf(n,t,e,l,r);return el(o)}Tu=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=wn(t.pendingLanes);n!==0&&(qi(t,n|1),me(t,Y()),!(R&6)&&(rn=Y()+500,ht()))}break;case 13:zt(function(){var r=Ke(e,1);if(r!==null){var l=se();Re(r,e,1,l)}}),Io(e,1)}};bi=function(e){if(e.tag===13){var t=Ke(e,134217728);if(t!==null){var n=se();Re(t,e,134217728,n)}Io(e,134217728)}};Iu=function(e){if(e.tag===13){var t=at(e),n=Ke(e,t);if(n!==null){var r=se();Re(n,e,t,r)}Io(e,t)}};Ru=function(){return M};Mu=function(e,t){var n=M;try{return M=e,t()}finally{M=n}};si=function(e,t,n){switch(t){case"input":if(ei(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var l=ol(r);if(!l)throw Error(y(90));du(r),ei(r,l)}}}break;case"textarea":pu(e,n);break;case"select":t=n.value,t!=null&&Qt(e,!!n.multiple,t,!1)}};wu=_o;ku=zt;var Tf={usingClientEntryPoint:!1,Events:[Jn,Ut,ol,yu,xu,_o]},gn={findFiberByHostInstance:wt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},If={bundleType:gn.bundleType,version:gn.version,rendererPackageName:gn.rendererPackageName,rendererConfig:gn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Xe.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Nu(e),e===null?null:e.stateNode},findFiberByHostInstance:gn.findFiberByHostInstance||zf,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var gr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!gr.isDisabled&&gr.supportsFiber)try{nl=gr.inject(If),Ue=gr}catch{}}xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Tf;xe.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Mo(t))throw Error(y(200));return Pf(e,t,null,n)};xe.createRoot=function(e,t){if(!Mo(e))throw Error(y(299));var n=!1,r="",l=nc;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=To(e,1,!1,null,null,n,!1,r,l),e[Ye]=t.current,An(e.nodeType===8?e.parentNode:e),new Ro(t)};xe.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(y(188)):(e=Object.keys(e).join(","),Error(y(268,e)));return e=Nu(t),e=e===null?null:e.stateNode,e};xe.flushSync=function(e){return zt(e)};xe.hydrate=function(e,t,n){if(!hl(t))throw Error(y(200));return vl(null,e,t,!0,n)};xe.hydrateRoot=function(e,t,n){if(!Mo(e))throw Error(y(405));var r=n!=null&&n.hydratedSources||null,l=!1,i="",o=nc;if(n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=tc(t,null,e,1,n??null,l,!1,i,o),e[Ye]=t.current,An(e),r)for(e=0;e<r.length;e++)n=r[e],l=n._getVersion,l=l(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,l]:t.mutableSourceEagerHydrationData.push(n,l);return new ml(t)};xe.render=function(e,t,n){if(!hl(t))throw Error(y(200));return vl(null,e,t,!1,n)};xe.unmountComponentAtNode=function(e){if(!hl(e))throw Error(y(40));return e._reactRootContainer?(zt(function(){vl(null,null,e,!1,function(){e._reactRootContainer=null,e[Ye]=null})}),!0):!1};xe.unstable_batchedUpdates=_o;xe.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!hl(n))throw Error(y(200));if(e==null||e._reactInternals===void 0)throw Error(y(38));return vl(e,t,n,!1,r)};xe.version="18.3.1-next-f1338f8080-20240426";function rc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(rc)}catch(e){console.error(e)}}rc(),ru.exports=xe;var Rf=ru.exports,Ws=Rf;Kl.createRoot=Ws.createRoot,Kl.hydrateRoot=Ws.hydrateRoot;const Qs=[{label:"Home",href:"#hero"},{label:"About",href:"#about"},{label:"Skills",href:"#skills"},{label:"Projects",href:"#projects"},{label:"Contact",href:"#contact"}];function Mf({onPreviewResume:e}){const[t,n]=I.useState(!1),[r,l]=I.useState("#hero"),[i,o]=I.useState(!1);I.useEffect(()=>{const u=()=>n(window.scrollY>50),d=()=>{const v=Qs.map(h=>h.href.slice(1));for(let h=v.length-1;h>=0;h--){const m=document.getElementById(v[h]);if(m&&window.scrollY>=m.offsetTop-200){l("#"+v[h]);break}}};return window.addEventListener("scroll",u,{passive:!0}),window.addEventListener("scroll",d,{passive:!0}),()=>{window.removeEventListener("scroll",u),window.removeEventListener("scroll",d)}},[]);const s=u=>{o(!1);const d=document.querySelector(u);d&&d.scrollIntoView({behavior:"smooth"})};return a.jsxs("nav",{className:`navbar ${t?"scrolled":""}`,children:[a.jsxs("div",{className:"navbar-inner",children:[a.jsx("a",{href:"#hero",className:"navbar-logo",onClick:u=>{u.preventDefault(),s("#hero")},children:"Surya P"}),a.jsxs("button",{className:`menu-toggle ${i?"open":""}`,onClick:()=>o(!i),"aria-label":"Toggle menu","aria-expanded":i,children:[a.jsx("span",{}),a.jsx("span",{}),a.jsx("span",{})]}),a.jsxs("ul",{className:`navbar-links ${i?"open":""}`,children:[Qs.map(u=>a.jsx("li",{children:a.jsx("a",{href:u.href,className:r===u.href?"active":"",onClick:d=>{d.preventDefault(),s(u.href)},children:u.label})},u.href)),a.jsx("li",{className:"nav-resume-li",children:a.jsx("a",{href:"/Resume.pdf",className:"nav-resume-btn",onClick:u=>{u.preventDefault(),o(!1),e()},children:"Resume"})})]})]}),a.jsx("style",{children:`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          padding: 20px 24px;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border-bottom: 1px solid transparent;
          transition: var(--transition);
        }

        .navbar.scrolled {
          border-bottom-color: var(--border);
          padding: 14px 24px;
        }

        .navbar-inner {
          max-width: var(--max-width);
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .navbar-logo {
          font-size: 1.25rem;
          font-weight: 700;
          letter-spacing: -0.5px;
          color: var(--text-primary);
        }

        .navbar-links {
          display: flex;
          align-items: center;
          gap: 32px;
        }

        .navbar-links a {
          font-size: 0.82rem;
          font-weight: 500;
          color: var(--text-secondary);
          transition: var(--transition);
          position: relative;
          padding: 4px 0;
          letter-spacing: 0.3px;
        }

        .navbar-links a::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 1px;
          background: var(--text-primary);
          transition: var(--transition);
        }

        .navbar-links a:hover {
          color: var(--text-primary);
        }

        .navbar-links a:hover::after,
        .navbar-links a.active::after {
          width: 100%;
        }

        .navbar-links a.active {
          color: var(--text-primary);
        }

        .nav-resume-li {
          margin-left: 4px;
        }

        .nav-resume-btn {
          padding: 8px 20px !important;
          border-radius: 6px !important;
          background: var(--text-primary) !important;
          color: var(--bg-primary) !important;
          font-weight: 600 !important;
          font-size: 0.78rem !important;
          border: 1px solid var(--text-primary) !important;
          transition: var(--transition) !important;
        }

        .nav-resume-btn::after {
          display: none !important;
        }

        .nav-resume-btn:hover {
          background: transparent !important;
          color: var(--text-primary) !important;
        }

        .menu-toggle {
          display: none;
          flex-direction: column;
          gap: 5px;
          background: none;
          border: none;
          padding: 4px;
          z-index: 1001;
        }

        .menu-toggle span {
          display: block;
          width: 22px;
          height: 1.5px;
          background: var(--text-primary);
          transition: var(--transition);
          transform-origin: center;
        }

        .menu-toggle.open span:nth-child(1) { transform: rotate(45deg) translate(4.5px, 4.5px); }
        .menu-toggle.open span:nth-child(2) { opacity: 0; }
        .menu-toggle.open span:nth-child(3) { transform: rotate(-45deg) translate(4.5px, -4.5px); }

        @media (max-width: 768px) {
          .menu-toggle { display: flex; }

          .navbar-links {
            position: fixed;
            top: 0;
            right: -100%;
            width: 280px;
            height: 100vh;
            background: var(--bg-primary);
            border-left: 1px solid var(--border);
            flex-direction: column;
            align-items: flex-start;
            padding: 80px 32px 32px;
            gap: 0;
            transition: var(--transition);
          }

          .navbar-links.open { right: 0; }

          .navbar-links a {
            display: block;
            padding: 12px 0;
            font-size: 0.9rem;
            border-bottom: 1px solid var(--border);
            width: 100%;
          }

          .navbar-links a::after { display: none; }

          .nav-resume-li {
            margin-left: 0;
            margin-top: 16px;
          }

          .nav-resume-btn {
            width: 100%;
            text-align: center;
            display: block;
            padding: 12px 20px !important;
          }
        }
      `})]})}const Of="/assets/Profile-CYSLr7IZ.png",Yl=["Computer Networking Enthusiast","Information Technology Student","Linux Enthusiast"];function Df({onPreviewResume:e}){const[t,n]=I.useState(0),[r,l]=I.useState(0),[i,o]=I.useState(!1),s=I.useRef(null),u=I.useRef(null);return I.useEffect(()=>{const d=Yl[t];let v;return!i&&r<d.length?v=setTimeout(()=>l(h=>h+1),80):!i&&r===d.length?v=setTimeout(()=>o(!0),2e3):i&&r>0?v=setTimeout(()=>l(h=>h-1),40):i&&r===0&&(o(!1),n((t+1)%Yl.length)),()=>clearTimeout(v)},[r,i,t]),I.useEffect(()=>{const d=u.current;if(!d)return;const v=setTimeout(()=>d.classList.add("visible"),100);return()=>clearTimeout(v)},[]),a.jsxs("section",{id:"hero",className:"hero",ref:s,children:[a.jsxs("div",{className:"hero-layout",children:[a.jsx("div",{className:"hero-image-wrap",children:a.jsx("img",{className:"hero-image",src:Of,alt:"Surya P"})}),a.jsxs("div",{ref:u,className:"hero-content reveal",children:[a.jsx("span",{className:"hero-label",children:"Final-Year B.Tech IT Student"}),a.jsx("h1",{className:"hero-name",children:"Surya P"}),a.jsx("div",{className:"hero-subtitle",children:a.jsxs("span",{className:"hero-type-text",children:[Yl[t].substring(0,r),a.jsx("span",{className:"hero-cursor",children:"|"})]})}),a.jsx("p",{className:"hero-desc",children:"Passionate about computer networks and the Linux operating system — learning how devices talk to each other and how to keep them secure."}),a.jsxs("div",{className:"hero-actions",children:[a.jsxs("a",{href:"#projects",className:"btn-primary",children:[a.jsx("span",{children:"View My Work"}),a.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[a.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"}),a.jsx("polyline",{points:"12 5 19 12 12 19"})]})]}),a.jsxs("button",{onClick:e,className:"btn-secondary",style:{cursor:"pointer"},children:[a.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[a.jsx("path",{d:"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"}),a.jsx("circle",{cx:"12",cy:"12",r:"3"})]}),"Preview Resume"]})]}),a.jsxs("div",{className:"hero-socials",children:[a.jsx("a",{href:"https://github.com/surya26-spec",target:"_blank",rel:"noopener noreferrer",className:"social-icon","aria-label":"GitHub",children:a.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"currentColor",children:a.jsx("path",{d:"M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"})})}),a.jsx("a",{href:"https://www.linkedin.com/in/surya-p-60b464374",target:"_blank",rel:"noopener noreferrer",className:"social-icon","aria-label":"LinkedIn",children:a.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"currentColor",children:a.jsx("path",{d:"M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"})})}),a.jsx("a",{href:"mailto:sur24imt61l@gmail.com",className:"social-icon","aria-label":"Email",children:a.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[a.jsx("rect",{x:"2",y:"4",width:"20",height:"16",rx:"2"}),a.jsx("path",{d:"M22 4L12 13 2 4"})]})})]})]})]}),a.jsx("style",{children:`
        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
          padding: 120px 24px 80px;
          background: var(--bg-primary);
        }

        .hero-content {
          position: relative;
          z-index: 1;
          max-width: 720px;
          text-align: center;
        }

        .hero-layout {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: clamp(48px, 8vw, 112px);
          width: min(100%, 1120px);
        }

        .hero-image-wrap {
          flex: 0 0 clamp(220px, 28vw, 320px);
          aspect-ratio: 1;
          border: 1px solid var(--border);
          border-radius: 18px;
          padding: 10px;
          background: var(--bg-secondary);
        }

        .hero-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
          border-radius: 12px;
        }

        .hero-label {
          display: inline-block;
          font-family: var(--font-mono);
          font-size: 0.7rem;
          font-weight: 500;
          color: var(--text-muted);
          letter-spacing: 4px;
          text-transform: uppercase;
          margin-bottom: 24px;
        }

        .hero-name {
          font-size: clamp(3.5rem, 10vw, 7rem);
          font-weight: 800;
          letter-spacing: -3px;
          line-height: 1.0;
          margin-bottom: 16px;
          color: var(--text-primary);
        }

        .hero-subtitle {
          font-size: clamp(1rem, 2.5vw, 1.3rem);
          color: var(--text-secondary);
          margin-bottom: 32px;
          min-height: 2em;
          font-weight: 400;
        }

        .hero-type-text {
          font-weight: 500;
          color: var(--text-primary);
        }

        .hero-cursor {
          display: inline-block;
          color: var(--text-muted);
          font-weight: 300;
          animation: blink 0.8s step-end infinite;
          margin-left: 2px;
        }

        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }

        .hero-desc {
          font-size: 1.05rem;
          color: var(--text-secondary);
          max-width: 540px;
          margin: 0 auto 40px;
          line-height: 1.8;
        }

        .hero-actions {
          display: flex;
          gap: 12px;
          justify-content: center;
          flex-wrap: wrap;
          margin-bottom: 48px;
        }

        .btn-primary, .btn-secondary {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 14px 28px;
          border-radius: 8px;
          font-size: 0.88rem;
          font-weight: 600;
          transition: var(--transition);
          border: none;
        }

        .btn-primary {
          background: var(--text-primary);
          color: var(--bg-primary);
        }

        .btn-primary:hover {
          background: var(--dark);
          transform: translateY(-2px);
        }

        .btn-secondary {
          background: var(--bg-primary);
          color: var(--text-primary);
          border: 1px solid var(--border);
        }

        .btn-secondary:hover {
          border-color: var(--text-primary);
          transform: translateY(-2px);
        }

        .hero-socials {
          display: flex;
          gap: 12px;
          justify-content: center;
        }

        .social-icon {
          width: 42px;
          height: 42px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 8px;
          border: 1px solid var(--border);
          color: var(--text-secondary);
          transition: var(--transition);
        }

        .social-icon:hover {
          border-color: var(--text-primary);
          color: var(--text-primary);
          transform: translateY(-2px);
        }

        @media (max-width: 768px) {
          .hero { padding: 100px 20px 60px; }
          .hero-layout { flex-direction: column; gap: 40px; }
          .hero-image-wrap { flex-basis: 220px; width: min(58vw, 260px); }
          .hero-name { letter-spacing: -2px; }
          .hero-desc { font-size: 0.95rem; }
          .hero-actions { flex-direction: column; align-items: center; }
          .btn-primary, .btn-secondary { width: 100%; max-width: 300px; justify-content: center; }
        }
      `})]})}function yr({target:e,suffix:t=""}){const[n,r]=I.useState(0),l=I.useRef(null),i=I.useRef(!1);return I.useEffect(()=>{const o=l.current;if(!o)return;const s=new IntersectionObserver(([u])=>{if(u.isIntersecting&&!i.current){i.current=!0;const d=1500,v=30,h=e/v;let m=0;const x=setInterval(()=>{m+=h,m>=e?(r(e),clearInterval(x)):r(Math.floor(m))},d/v);s.unobserve(o)}},{threshold:.5});return s.observe(o),()=>s.disconnect()},[e]),a.jsxs("span",{ref:l,children:[n,t]})}function Ff(){const e=I.useRef(null);return I.useEffect(()=>{const t=e.current;if(!t)return;const n=new IntersectionObserver(([r])=>{r.isIntersecting&&(t.classList.add("visible"),n.unobserve(t))},{threshold:.2});return n.observe(t),()=>n.disconnect()},[]),a.jsxs("section",{id:"about",className:"section",children:[a.jsxs("div",{ref:e,className:"reveal",children:[a.jsxs("div",{className:"section-header",children:[a.jsx("span",{className:"section-label",children:"About Me"}),a.jsx("h2",{className:"section-title",children:"Who I Am"}),a.jsx("div",{className:"section-divider"})]}),a.jsxs("div",{className:"about-grid",children:[a.jsxs("div",{className:"about-text",children:[a.jsx("p",{children:"I'm an Information Technology student at Government College of Engineering, Erode, with a strong passion for computer networking and network security, along with a growing interest in machine learning."}),a.jsx("p",{children:"My academic journey has introduced me to C, Python, and SQL, while hands-on project work has taken me into TCP/IP fundamentals, subnetting, DNS, and DHCP — along with machine learning and real-time computer vision."}),a.jsx("p",{children:"I'm driven by curiosity about how data moves across networks and by the challenge of keeping that movement fast, reliable, and secure."})]}),a.jsxs("div",{className:"about-stats",children:[a.jsxs("div",{className:"stat-card",children:[a.jsxs("span",{className:"stat-number",children:[a.jsx(yr,{target:8}),".",a.jsx(yr,{target:66})]}),a.jsx("span",{className:"stat-label",children:"CGPA"})]}),a.jsxs("div",{className:"stat-card",children:[a.jsxs("span",{className:"stat-number",children:[a.jsx(yr,{target:2}),"+"]}),a.jsx("span",{className:"stat-label",children:"Projects"})]}),a.jsxs("div",{className:"stat-card",children:[a.jsx("span",{className:"stat-number",children:a.jsx(yr,{target:5})}),a.jsx("span",{className:"stat-label",children:"Certifications"})]})]})]})]}),a.jsx("style",{children:`
        .about-grid {
          display: grid;
          grid-template-columns: 1.5fr 1fr;
          gap: 64px;
          align-items: center;
          max-width: 900px;
          margin: 0 auto;
        }

        .about-text p {
          color: var(--text-secondary);
          line-height: 1.9;
          margin-bottom: 16px;
          font-size: 0.95rem;
        }

        .about-text p:last-child { margin-bottom: 0; }

        .about-stats {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }

        .stat-card {
          background: var(--bg-primary);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          padding: 32px 20px;
          text-align: center;
          transition: var(--transition);
        }

        .stat-card:hover {
          border-color: var(--text-muted);
          transform: translateY(-2px);
        }

        .stat-number {
          display: block;
          font-size: 2.2rem;
          font-weight: 800;
          margin-bottom: 4px;
          color: var(--text-primary);
          letter-spacing: -1px;
        }

        .stat-label {
          font-size: 0.72rem;
          color: var(--text-muted);
          font-family: var(--font-mono);
          text-transform: uppercase;
          letter-spacing: 2px;
        }

        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr; gap: 40px; }
          .about-stats { grid-template-columns: repeat(3, 1fr); }
        }
        @media (max-width: 480px) {
          .about-stats { grid-template-columns: 1fr; }
        }
      `})]})}const Uf=[{category:"Programming",items:["Python","C (Basics)"]},{category:"Networking",items:["TCP/IP","Subnetting","DNS & DHCP"]},{category:"AI / ML",items:["Classification Models (SVM, Decision Trees)","Data Preprocessing"]},{category:"Tools",items:["Git","OpenCV","Opencode","Antigravity"]},{category:"Operating Systems",items:["Linux"]}];function Af(){const e=I.useRef(null);return I.useEffect(()=>{const t=e.current;if(!t)return;const n=new IntersectionObserver(([r])=>{r.isIntersecting&&(t.classList.add("visible"),n.unobserve(t))},{threshold:.1});return n.observe(t),()=>n.disconnect()},[]),a.jsxs("section",{id:"skills",className:"section",children:[a.jsxs("div",{ref:e,className:"reveal",children:[a.jsxs("div",{className:"section-header",children:[a.jsx("span",{className:"section-label",children:"Skills & Expertise"}),a.jsx("h2",{className:"section-title",children:"My Tech Stack"}),a.jsx("div",{className:"section-divider"})]}),a.jsx("div",{className:"skills-grid",children:Uf.map(t=>a.jsxs("div",{className:"skill-group",children:[a.jsx("h3",{className:"skill-category",children:t.category}),a.jsx("div",{className:"skill-tags",children:t.items.map(n=>a.jsx("span",{className:"skill-tag",children:n},n))})]},t.category))})]}),a.jsx("style",{children:`
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }

        .skill-group {
          background: var(--bg-primary);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          padding: 28px 24px;
          transition: var(--transition);
          text-align: left;
        }

        .skill-group:hover {
          border-color: var(--text-muted);
          transform: translateY(-2px);
        }

        .skill-category {
          font-size: 0.72rem;
          font-family: var(--font-mono);
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 2.5px;
          margin-bottom: 20px;
          color: var(--text-primary);
          padding-bottom: 14px;
          border-bottom: 1px solid var(--border);
        }

        .skill-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }

        .skill-tag {
          padding: 5px 12px;
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 5px;
          font-size: 0.78rem;
          color: var(--text-secondary);
          transition: var(--transition);
        }

        .skill-tag:hover {
          background: var(--text-primary);
          border-color: var(--text-primary);
          color: var(--bg-primary);
        }

        @media (max-width: 968px) {
          .skills-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 560px) {
          .skills-grid { grid-template-columns: 1fr; }
        }
      `})]})}const $f="/assets/SecuVerse-CGm7oPdz.png",Vf="/assets/Drowsiness-C5S9mjde.png",Bf=[{number:"01",title:"AI-Based Intrusion Detection System (SecuVerse)",category:"Machine Learning",image:$f,desc:"Designed an ML-based system that classifies network traffic as normal or malicious across multiple attack categories using SVM and Decision Tree models, generating real-time alerts for anomalous traffic.",tags:["Python","Scikit-learn","Pandas","NumPy"]},{number:"02",title:"Driver Drowsiness Detection System",category:"Computer Vision",image:Vf,desc:"Engineered a real-time computer vision system that detects driver fatigue through eye-state analysis at 30 FPS, triggering audible alerts within 2 seconds of prolonged eye closure to reduce accident risk.",tags:["Python","OpenCV","MediaPipe Face Mesh"]}];function Hf(){const e=I.useRef(null);return I.useEffect(()=>{const t=e.current;if(!t)return;const n=new IntersectionObserver(([r])=>{r.isIntersecting&&(t.classList.add("visible"),n.unobserve(t))},{threshold:.1});return n.observe(t),()=>n.disconnect()},[]),a.jsxs("section",{id:"projects",className:"section",children:[a.jsxs("div",{ref:e,className:"reveal",children:[a.jsxs("div",{className:"section-header",children:[a.jsx("span",{className:"section-label",children:"Projects"}),a.jsx("h2",{className:"section-title",children:"What I've Built"}),a.jsx("div",{className:"section-divider"})]}),a.jsx("div",{className:"projects-grid",children:Bf.map(t=>a.jsxs("article",{className:"project-card",children:[a.jsx("div",{className:"project-image",children:a.jsx("img",{src:t.image,alt:`${t.title} preview`,loading:"lazy"})}),a.jsx("div",{className:"project-meta",children:a.jsx("span",{className:"project-number",children:t.number})}),a.jsxs("div",{className:"project-body",children:[a.jsx("h3",{className:"project-title",children:t.title}),a.jsx("span",{className:"project-category",children:t.category}),a.jsx("p",{className:"project-desc",children:t.desc}),a.jsx("div",{className:"project-tags",children:t.tags.map(n=>a.jsx("span",{className:"project-tag",children:n},n))})]})]},t.number))})]}),a.jsx("style",{children:`
        .projects-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }

        .project-card {
          background: var(--bg-primary);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          padding: 24px;
          transition: var(--transition);
          display: flex;
          flex-direction: column;
        }

        .project-image {
          overflow: hidden;
          border-radius: 8px;
          margin-bottom: 24px;
          border: 1px solid var(--border);
        }

        .project-image img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
          aspect-ratio: 16 / 9;
          transition: transform 0.4s ease;
        }

        .project-card:hover .project-image img {
          transform: scale(1.04);
        }

        .project-card:hover {
          border-color: var(--text-muted);
          transform: translateY(-3px);
        }

        .project-meta {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 20px;
        }

        .project-number {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: var(--text-muted);
          letter-spacing: 2px;
        }

        .project-body {
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .project-title {
          font-size: 1.25rem;
          font-weight: 700;
          margin-bottom: 6px;
          line-height: 1.35;
          color: var(--text-primary);
          letter-spacing: -0.3px;
        }

        .project-category {
          font-size: 0.72rem;
          font-family: var(--font-mono);
          text-transform: uppercase;
          letter-spacing: 1.5px;
          color: var(--text-muted);
          margin-bottom: 16px;
        }

        .project-desc {
          font-size: 0.88rem;
          color: var(--text-secondary);
          line-height: 1.8;
          margin-bottom: 24px;
        }

        .project-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-top: auto;
        }

        .project-tag {
          padding: 5px 12px;
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 4px;
          font-size: 0.72rem;
          font-family: var(--font-mono);
          color: var(--text-secondary);
          transition: var(--transition);
        }

        .project-tag:hover {
          color: var(--bg-primary);
          background: var(--text-primary);
          border-color: var(--text-primary);
        }

        @media (max-width: 768px) {
          .projects-grid { grid-template-columns: 1fr; }
          .project-card { padding: 20px; }
        }
      `})]})}const Wf=[{role:"AI & Data Science Intern",org:"TVK Technologies",period:"16 Jun 2026 – 30 Jun 2026",points:["Developed an AI-driven Smart Examination Monitoring System in Python, building core modules for real-time candidate activity monitoring during online examinations."]}],Qf=[{degree:"Diploma in Computer Engineering",school:"Government Polytechnic College, Cheyyar",period:"2021 – 2024",cgpa:"90% Overall"},{degree:"B.Tech in Information Technology",school:"Government College of Engineering, Erode",period:"2024 – 2027",cgpa:"8.66 CGPA (up to 6th semester)"}],Yf=["Secured 2nd Prize in AIT HACKXPO'26, organized by the Department of Information Technology, Government College of Engineering, Erode (2026).","Ranked among national top performers scoring 95% in NPTEL Human-Computer Interaction.","Earned 18 additional credits toward the B.Tech (Honours) qualification."];function Kf(){const e=I.useRef(null);return I.useEffect(()=>{const t=e.current;if(!t)return;const n=new IntersectionObserver(([r])=>{r.isIntersecting&&(t.classList.add("visible"),n.unobserve(t))},{threshold:.2});return n.observe(t),()=>n.disconnect()},[]),a.jsxs("section",{id:"education",className:"section",children:[a.jsxs("div",{ref:e,className:"reveal",children:[a.jsxs("div",{className:"section-header",children:[a.jsx("span",{className:"section-label",children:"Education & Experience"}),a.jsx("h2",{className:"section-title",children:"My Journey"}),a.jsx("div",{className:"section-divider"})]}),a.jsxs("div",{className:"edu-timeline",children:[Qf.map((t,n)=>a.jsxs("div",{className:"edu-card",children:[a.jsx("div",{className:"edu-marker"}),a.jsxs("div",{className:"edu-body",children:[a.jsx("span",{className:"edu-period",children:t.period}),a.jsx("p",{className:"edu-school",children:t.school}),a.jsx("h3",{className:"edu-degree",children:t.degree}),a.jsx("span",{className:"edu-cgpa",children:t.cgpa})]})]},n)),Wf.map((t,n)=>a.jsxs("div",{className:"edu-card exp-card",children:[a.jsx("div",{className:"edu-marker"}),a.jsxs("div",{className:"edu-body",children:[a.jsx("span",{className:"edu-period",children:t.period}),a.jsx("h3",{className:"edu-degree",children:t.role}),a.jsx("p",{className:"edu-school",children:t.org}),a.jsx("ul",{className:"exp-points",children:t.points.map((r,l)=>a.jsx("li",{className:"exp-point",children:r},l))})]})]},n))]}),a.jsxs("div",{className:"section-header",style:{marginTop:"48px"},children:[a.jsx("span",{className:"section-label",children:"Achievements"}),a.jsx("div",{className:"section-divider"})]}),a.jsx("div",{className:"achievements-list",children:Yf.map((t,n)=>a.jsxs("div",{className:"achievement-card",children:[a.jsx("div",{className:"achievement-icon",children:a.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[a.jsx("circle",{cx:"12",cy:"8",r:"6"}),a.jsx("path",{d:"M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"})]})}),a.jsx("p",{className:"achievement-text",children:t})]},n))})]}),a.jsx("style",{children:`
        .edu-timeline {
          max-width: 640px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .edu-card {
          display: flex;
          gap: 20px;
          background: var(--bg-primary);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          padding: 28px 32px;
          transition: var(--transition);
          text-align: left;
        }

        .edu-card:hover {
          border-color: var(--text-muted);
          transform: translateY(-2px);
        }

        .edu-marker {
          width: 12px;
          height: 12px;
          min-width: 12px;
          margin-top: 6px;
          border-radius: 50%;
          background: var(--text-primary);
          border: 3px solid var(--bg-primary);
          box-shadow: 0 0 0 1px var(--border);
        }

        .edu-period {
          display: inline-block;
          font-family: var(--font-mono);
          font-size: 0.72rem;
          color: var(--text-muted);
          letter-spacing: 1px;
          margin-bottom: 8px;
          text-transform: uppercase;
        }

        .edu-degree {
          font-size: 1.1rem;
          font-weight: 700;
          margin-bottom: 4px;
          color: var(--text-primary);
          letter-spacing: -0.2px;
        }

        .edu-school {
          font-size: 0.9rem;
          color: var(--text-secondary);
          margin-bottom: 12px;
        }

        .edu-cgpa {
          display: inline-block;
          padding: 5px 14px;
          background: var(--surface);
          color: var(--text-primary);
          border: 1px solid var(--border);
          border-radius: 4px;
          font-size: 0.8rem;
          font-weight: 600;
          font-family: var(--font-mono);
        }

        .exp-points {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .exp-point {
          position: relative;
          padding-left: 18px;
          font-size: 0.85rem;
          color: var(--text-secondary);
          line-height: 1.7;
        }

        .exp-point::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0.6em;
          width: 6px;
          height: 6px;
          border: 1px solid var(--text-primary);
          border-radius: 1px;
        }

        .achievements-list {
          max-width: 640px;
          margin: 24px auto 0;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .achievement-card {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          padding: 20px 22px;
          transition: var(--transition);
          text-align: left;
        }

        .achievement-card:hover {
          border-color: var(--text-muted);
          transform: translateY(-2px);
        }

        .achievement-icon {
          width: 34px;
          height: 34px;
          min-width: 34px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--bg-primary);
          border: 1px solid var(--border);
          border-radius: 6px;
          color: var(--text-primary);
        }

        .achievement-text {
          font-size: 0.85rem;
          color: var(--text-secondary);
          line-height: 1.7;
        }

        @media (max-width: 768px) {
          .edu-card { padding: 20px 24px; }
          .achievements-list { grid-template-columns: 1fr; margin-top: 32px; }
        }
      `})]})}const Gf=["NPTEL — Human-Computer Interaction (95%)","NPTEL — Introduction to Industry 4.0 and Industrial Internet of Things (88%)","Cisco Networking Academy — Introduction to Cybersecurity","Infosys Springboard — C Programming","Infosys Springboard — IoT Platforms Overview"];function Xf(){const e=I.useRef(null);return I.useEffect(()=>{const t=e.current;if(!t)return;const n=new IntersectionObserver(([r])=>{r.isIntersecting&&(t.classList.add("visible"),n.unobserve(t))},{threshold:.15});return n.observe(t),()=>n.disconnect()},[]),a.jsxs("section",{id:"certifications",className:"section",children:[a.jsxs("div",{ref:e,className:"reveal",children:[a.jsxs("div",{className:"section-header",children:[a.jsx("span",{className:"section-label",children:"Certifications"}),a.jsx("h2",{className:"section-title",children:"Credentials"}),a.jsx("div",{className:"section-divider"})]}),a.jsx("div",{className:"certs-grid",children:Gf.map((t,n)=>a.jsxs("div",{className:"cert-item",children:[a.jsx("div",{className:"cert-icon",children:a.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:a.jsx("path",{d:"M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"})})}),a.jsx("span",{className:"cert-name",children:t})]},n))})]}),a.jsx("style",{children:`
        .certs-grid {
          max-width: 700px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .cert-item {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 18px 24px;
          background: var(--bg-primary);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          transition: var(--transition);
          text-align: left;
        }

        .cert-item:hover {
          border-color: var(--text-muted);
          transform: translateX(4px);
        }

        .cert-icon {
          width: 32px;
          height: 32px;
          min-width: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 6px;
          color: var(--text-primary);
        }

        .cert-name {
          font-size: 0.9rem;
          color: var(--text-primary);
          line-height: 1.4;
        }

        @media (max-width: 768px) {
          .cert-item { padding: 14px 18px; }
        }
      `})]})}const Zf=[{label:"Email",value:"sur24imt61l@gmail.com",href:"mailto:sur24imt61l@gmail.com",icon:a.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[a.jsx("rect",{x:"2",y:"4",width:"20",height:"16",rx:"2"}),a.jsx("path",{d:"M22 4L12 13 2 4"})]})},{label:"LinkedIn",value:"linkedin.com/in/surya-p",href:"https://www.linkedin.com/in/surya-p-60b464374",icon:a.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"currentColor",children:a.jsx("path",{d:"M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"})})},{label:"GitHub",value:"github.com/surya26-spec",href:"https://github.com/surya26-spec",icon:a.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"currentColor",children:a.jsx("path",{d:"M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"})})},{label:"Phone",value:"+91 6383150516",href:"tel:+916383150516",icon:a.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:a.jsx("path",{d:"M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.362 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0122 16.92z"})})}];function Jf({onPreviewResume:e}){const t=I.useRef(null);return I.useEffect(()=>{const n=t.current;if(!n)return;const r=new IntersectionObserver(([l])=>{l.isIntersecting&&(n.classList.add("visible"),r.unobserve(n))},{threshold:.15});return r.observe(n),()=>r.disconnect()},[]),a.jsxs("section",{id:"contact",className:"section",children:[a.jsxs("div",{ref:t,className:"reveal",children:[a.jsxs("div",{className:"section-header",children:[a.jsx("span",{className:"section-label",children:"Contact"}),a.jsx("h2",{className:"section-title",children:"Let's Connect"}),a.jsx("div",{className:"section-divider"})]}),a.jsx("p",{className:"contact-subtitle",children:"I'm excited to start my IT career and apply my networking and Linux skills. Open to opportunities!"}),a.jsxs("div",{className:"contact-grid",children:[Zf.map(n=>a.jsxs("a",{href:n.href,target:n.href.startsWith("http")?"_blank":void 0,rel:n.href.startsWith("http")?"noopener noreferrer":void 0,className:"contact-card",children:[a.jsx("div",{className:"contact-card-icon",children:n.icon}),a.jsxs("div",{children:[a.jsx("span",{className:"contact-card-label",children:n.label}),a.jsx("span",{className:"contact-card-value",children:n.value})]})]},n.label)),a.jsxs("a",{href:"/Resume.pdf",download:!0,className:"contact-card resume-card",children:[a.jsx("div",{className:"contact-card-icon",children:a.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[a.jsx("path",{d:"M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"}),a.jsx("polyline",{points:"7 10 12 15 17 10"}),a.jsx("line",{x1:"12",y1:"15",x2:"12",y2:"3"})]})}),a.jsxs("div",{children:[a.jsx("span",{className:"contact-card-label",children:"Download"}),a.jsx("span",{className:"contact-card-value",children:"Resume (PDF)"})]})]})]}),a.jsxs("footer",{className:"footer",children:[a.jsx("div",{className:"footer-name",children:"Surya P"}),a.jsx("p",{className:"footer-subtitle",children:"B.Tech Information Technology · Computer Networking · Linux Enthusiast"}),a.jsxs("p",{className:"footer-copyright",children:["Designed & Built by Surya P © ",new Date().getFullYear()]})]})]}),a.jsx("style",{children:`
        .contact-subtitle {
          text-align: center;
          color: var(--text-secondary);
          font-size: 0.95rem;
          max-width: 480px;
          margin: -32px auto 48px;
          line-height: 1.7;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
          max-width: 700px;
          margin: 0 auto;
        }

        .contact-card {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 20px 24px;
          background: var(--bg-primary);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          transition: var(--transition);
        }

        .contact-card:hover {
          border-color: var(--text-muted);
          transform: translateY(-2px);
        }

        .resume-card {
          background: var(--text-primary);
          border-color: var(--text-primary);
        }

        .resume-card:hover {
          border-color: var(--text-primary);
          transform: translateY(-2px);
        }

        .resume-card .contact-card-icon {
          border-color: rgba(255, 255, 255, 0.2);
          color: var(--bg-primary);
          background: rgba(255, 255, 255, 0.08);
        }

        .resume-card .contact-card-label,
        .resume-card .contact-card-value {
          color: var(--bg-primary);
        }

        .resume-card .contact-card-label {
          opacity: 0.7;
        }

        .contact-card-icon {
          width: 42px;
          height: 42px;
          min-width: 42px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 8px;
          color: var(--text-primary);
          transition: var(--transition);
        }

        .contact-card-label {
          display: block;
          font-size: 0.68rem;
          color: var(--text-muted);
          font-family: var(--font-mono);
          text-transform: uppercase;
          letter-spacing: 2px;
          margin-bottom: 2px;
        }

        .contact-card-value {
          display: block;
          font-size: 0.85rem;
          color: var(--text-primary);
          word-break: break-all;
        }

        .footer {
          text-align: center;
          padding: 72px 24px 40px;
          border-top: 1px solid var(--border);
          margin-top: 80px;
        }

        .footer-name {
          font-size: 1.4rem;
          font-weight: 800;
          letter-spacing: -0.5px;
          color: var(--text-primary);
          margin-bottom: 8px;
        }

        .footer-subtitle {
          font-size: 0.75rem;
          color: var(--text-muted);
          font-family: var(--font-mono);
          letter-spacing: 1px;
          text-transform: uppercase;
          margin-bottom: 24px;
        }

        .footer-copyright {
          font-size: 0.8rem;
          color: var(--text-muted);
        }

        @media (max-width: 600px) {
          .contact-grid { grid-template-columns: 1fr; }
        }
      `})]})}function qf({open:e,onClose:t}){return I.useEffect(()=>{if(!e)return;document.body.style.overflow="hidden";const n=r=>{r.key==="Escape"&&t()};return window.addEventListener("keydown",n),()=>{document.body.style.overflow="",window.removeEventListener("keydown",n)}},[e,t]),e?a.jsxs("div",{className:"resume-overlay",onClick:t,role:"dialog","aria-modal":"true","aria-label":"Resume preview",children:[a.jsxs("div",{className:"resume-modal",onClick:n=>n.stopPropagation(),children:[a.jsxs("div",{className:"resume-toolbar",children:[a.jsx("span",{className:"resume-toolbar-title",children:"Resume Preview"}),a.jsxs("div",{className:"resume-toolbar-actions",children:[a.jsx("a",{href:"/Resume.pdf",download:!0,className:"resume-toolbar-download",children:"Download PDF"}),a.jsx("button",{className:"resume-toolbar-close",onClick:t,"aria-label":"Close preview",children:"Close"})]})]}),a.jsx("iframe",{src:"/Resume.pdf",title:"Resume PDF preview",className:"resume-frame"})]}),a.jsx("style",{children:`
        .resume-overlay {
          position: fixed;
          inset: 0;
          z-index: 1500;
          background: rgba(0, 0, 0, 0.72);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          display: flex;
          align-items: flex-start;
          justify-content: center;
          overflow-y: auto;
          padding: 48px 24px;
        }

        .resume-modal {
          width: 820px;
          max-width: 100%;
        }

        .resume-toolbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          padding: 14px 20px;
          background: var(--bg-primary);
          border: 1px solid var(--border);
          border-bottom: none;
          border-radius: 10px 10px 0 0;
        }

        .resume-toolbar-title {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 2px;
          color: var(--text-muted);
        }

        .resume-toolbar-actions {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .resume-toolbar-download {
          padding: 8px 18px;
          border-radius: 6px;
          background: var(--text-primary);
          color: var(--bg-primary);
          font-size: 0.8rem;
          font-weight: 600;
          border: 1px solid var(--text-primary);
          transition: var(--transition);
        }

        .resume-toolbar-download:hover {
          background: transparent;
          color: var(--text-primary);
        }

        .resume-toolbar-close {
          padding: 8px 14px;
          border-radius: 6px;
          background: transparent;
          color: var(--text-secondary);
          font-size: 0.8rem;
          font-weight: 500;
          border: 1px solid var(--border);
          cursor: pointer;
          transition: var(--transition);
        }

        .resume-toolbar-close:hover {
          color: var(--text-primary);
          border-color: var(--text-primary);
        }

        .resume-frame {
          width: 100%;
          height: 82vh;
          border: 1px solid var(--border);
          border-top: none;
          border-radius: 0 0 10px 10px;
          background: #fff;
          box-shadow: 0 24px 60px rgba(0, 0, 0, 0.35);
        }

        @media (max-width: 768px) {
          .resume-overlay { padding: 16px 12px; align-items: flex-start; }
          .resume-toolbar { flex-direction: column; align-items: flex-start; }
          .resume-toolbar-actions { width: 100%; }
          .resume-toolbar-download { flex: 1; text-align: center; }
          .resume-frame { height: 74vh; }
        }
      `})]}):null}function bf(){const[e,t]=I.useState(!1),n=()=>t(!0),r=()=>t(!1);return a.jsxs(a.Fragment,{children:[a.jsx(Mf,{onPreviewResume:n}),a.jsxs("main",{children:[a.jsx(Df,{onPreviewResume:n}),a.jsx(Ff,{}),a.jsx(Af,{}),a.jsx(Hf,{}),a.jsx(Kf,{}),a.jsx(Xf,{}),a.jsx(Jf,{onPreviewResume:n})]}),a.jsx(qf,{open:e,onClose:r})]})}const ep=[{id:"monochrome",label:"Monochrome",colors:["#111111","#555555","#e5e5e5"]}],tp=I.createContext();function np({children:e}){const[t,n]=I.useState(()=>localStorage.getItem("portfolio-theme")||"monochrome");return I.useEffect(()=>{document.documentElement.setAttribute("data-theme",t),localStorage.setItem("portfolio-theme",t)},[t]),a.jsx(tp.Provider,{value:{theme:t,setTheme:n,themes:ep},children:e})}Kl.createRoot(document.getElementById("root")).render(a.jsx(kc.StrictMode,{children:a.jsx(np,{children:a.jsx(bf,{})})}));
