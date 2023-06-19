(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();var jp=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Pc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var jc={exports:{}},xo={},Rc={exports:{}},Y={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jr=Symbol.for("react.element"),Rp=Symbol.for("react.portal"),Tp=Symbol.for("react.fragment"),Np=Symbol.for("react.strict_mode"),zp=Symbol.for("react.profiler"),Ip=Symbol.for("react.provider"),Op=Symbol.for("react.context"),Mp=Symbol.for("react.forward_ref"),Lp=Symbol.for("react.suspense"),Dp=Symbol.for("react.memo"),Fp=Symbol.for("react.lazy"),_s=Symbol.iterator;function Up(e){return e===null||typeof e!="object"?null:(e=_s&&e[_s]||e["@@iterator"],typeof e=="function"?e:null)}var Tc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Nc=Object.assign,zc={};function Jn(e,t,n){this.props=e,this.context=t,this.refs=zc,this.updater=n||Tc}Jn.prototype.isReactComponent={};Jn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Jn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Ic(){}Ic.prototype=Jn.prototype;function Oa(e,t,n){this.props=e,this.context=t,this.refs=zc,this.updater=n||Tc}var Ma=Oa.prototype=new Ic;Ma.constructor=Oa;Nc(Ma,Jn.prototype);Ma.isPureReactComponent=!0;var $s=Array.isArray,Oc=Object.prototype.hasOwnProperty,La={current:null},Mc={key:!0,ref:!0,__self:!0,__source:!0};function Lc(e,t,n){var r,i={},o=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(o=""+t.key),t)Oc.call(t,r)&&!Mc.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var s=Array(a),u=0;u<a;u++)s[u]=arguments[u+2];i.children=s}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Jr,type:e,key:o,ref:l,props:i,_owner:La.current}}function Bp(e,t){return{$$typeof:Jr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Da(e){return typeof e=="object"&&e!==null&&e.$$typeof===Jr}function _p(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Vs=/\/+/g;function Wo(e,t){return typeof e=="object"&&e!==null&&e.key!=null?_p(""+e.key):t.toString(36)}function ji(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(o){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case Jr:case Rp:l=!0}}if(l)return l=e,i=i(l),e=r===""?"."+Wo(l,0):r,$s(i)?(n="",e!=null&&(n=e.replace(Vs,"$&/")+"/"),ji(i,t,n,"",function(u){return u})):i!=null&&(Da(i)&&(i=Bp(i,n+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(Vs,"$&/")+"/")+e)),t.push(i)),1;if(l=0,r=r===""?".":r+":",$s(e))for(var a=0;a<e.length;a++){o=e[a];var s=r+Wo(o,a);l+=ji(o,t,n,s,i)}else if(s=Up(e),typeof s=="function")for(e=s.call(e),a=0;!(o=e.next()).done;)o=o.value,s=r+Wo(o,a++),l+=ji(o,t,n,s,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function oi(e,t,n){if(e==null)return e;var r=[],i=0;return ji(e,r,"","",function(o){return t.call(n,o,i++)}),r}function $p(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ie={current:null},Ri={transition:null},Vp={ReactCurrentDispatcher:Ie,ReactCurrentBatchConfig:Ri,ReactCurrentOwner:La};Y.Children={map:oi,forEach:function(e,t,n){oi(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return oi(e,function(){t++}),t},toArray:function(e){return oi(e,function(t){return t})||[]},only:function(e){if(!Da(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Y.Component=Jn;Y.Fragment=Tp;Y.Profiler=zp;Y.PureComponent=Oa;Y.StrictMode=Np;Y.Suspense=Lp;Y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Vp;Y.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Nc({},e.props),i=e.key,o=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,l=La.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(s in t)Oc.call(t,s)&&!Mc.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&a!==void 0?a[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){a=Array(s);for(var u=0;u<s;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Jr,type:e.type,key:i,ref:o,props:r,_owner:l}};Y.createContext=function(e){return e={$$typeof:Op,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Ip,_context:e},e.Consumer=e};Y.createElement=Lc;Y.createFactory=function(e){var t=Lc.bind(null,e);return t.type=e,t};Y.createRef=function(){return{current:null}};Y.forwardRef=function(e){return{$$typeof:Mp,render:e}};Y.isValidElement=Da;Y.lazy=function(e){return{$$typeof:Fp,_payload:{_status:-1,_result:e},_init:$p}};Y.memo=function(e,t){return{$$typeof:Dp,type:e,compare:t===void 0?null:t}};Y.startTransition=function(e){var t=Ri.transition;Ri.transition={};try{e()}finally{Ri.transition=t}};Y.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};Y.useCallback=function(e,t){return Ie.current.useCallback(e,t)};Y.useContext=function(e){return Ie.current.useContext(e)};Y.useDebugValue=function(){};Y.useDeferredValue=function(e){return Ie.current.useDeferredValue(e)};Y.useEffect=function(e,t){return Ie.current.useEffect(e,t)};Y.useId=function(){return Ie.current.useId()};Y.useImperativeHandle=function(e,t,n){return Ie.current.useImperativeHandle(e,t,n)};Y.useInsertionEffect=function(e,t){return Ie.current.useInsertionEffect(e,t)};Y.useLayoutEffect=function(e,t){return Ie.current.useLayoutEffect(e,t)};Y.useMemo=function(e,t){return Ie.current.useMemo(e,t)};Y.useReducer=function(e,t,n){return Ie.current.useReducer(e,t,n)};Y.useRef=function(e){return Ie.current.useRef(e)};Y.useState=function(e){return Ie.current.useState(e)};Y.useSyncExternalStore=function(e,t,n){return Ie.current.useSyncExternalStore(e,t,n)};Y.useTransition=function(){return Ie.current.useTransition()};Y.version="18.2.0";Rc.exports=Y;var P=Rc.exports;const Lt=Pc(P);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wp=P,Hp=Symbol.for("react.element"),bp=Symbol.for("react.fragment"),Qp=Object.prototype.hasOwnProperty,Yp=Wp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Gp={key:!0,ref:!0,__self:!0,__source:!0};function Dc(e,t,n){var r,i={},o=null,l=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)Qp.call(t,r)&&!Gp.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:Hp,type:e,key:o,ref:l,props:i,_owner:Yp.current}}xo.Fragment=bp;xo.jsx=Dc;xo.jsxs=Dc;jc.exports=xo;var g=jc.exports,Pl={},Fc={exports:{}},We={},Uc={exports:{}},Bc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(O,U){var B=O.length;O.push(U);e:for(;0<B;){var K=B-1>>>1,R=O[K];if(0<i(R,U))O[K]=U,O[B]=R,B=K;else break e}}function n(O){return O.length===0?null:O[0]}function r(O){if(O.length===0)return null;var U=O[0],B=O.pop();if(B!==U){O[0]=B;e:for(var K=0,R=O.length,L=R>>>1;K<L;){var V=2*(K+1)-1,H=O[V],$=V+1,y=O[$];if(0>i(H,B))$<R&&0>i(y,H)?(O[K]=y,O[$]=B,K=$):(O[K]=H,O[V]=B,K=V);else if($<R&&0>i(y,B))O[K]=y,O[$]=B,K=$;else break e}}return U}function i(O,U){var B=O.sortIndex-U.sortIndex;return B!==0?B:O.id-U.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var l=Date,a=l.now();e.unstable_now=function(){return l.now()-a}}var s=[],u=[],d=1,m=null,p=3,w=!1,x=!1,S=!1,N=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function f(O){for(var U=n(u);U!==null;){if(U.callback===null)r(u);else if(U.startTime<=O)r(u),U.sortIndex=U.expirationTime,t(s,U);else break;U=n(u)}}function v(O){if(S=!1,f(O),!x)if(n(s)!==null)x=!0,Te(k);else{var U=n(u);U!==null&&st(v,U.startTime-O)}}function k(O,U){x=!1,S&&(S=!1,h(z),z=-1),w=!0;var B=p;try{for(f(U),m=n(s);m!==null&&(!(m.expirationTime>U)||O&&!oe());){var K=m.callback;if(typeof K=="function"){m.callback=null,p=m.priorityLevel;var R=K(m.expirationTime<=U);U=e.unstable_now(),typeof R=="function"?m.callback=R:m===n(s)&&r(s),f(U)}else r(s);m=n(s)}if(m!==null)var L=!0;else{var V=n(u);V!==null&&st(v,V.startTime-U),L=!1}return L}finally{m=null,p=B,w=!1}}var E=!1,C=null,z=-1,W=5,_=-1;function oe(){return!(e.unstable_now()-_<W)}function he(){if(C!==null){var O=e.unstable_now();_=O;var U=!0;try{U=C(!0,O)}finally{U?Re():(E=!1,C=null)}}else E=!1}var Re;if(typeof c=="function")Re=function(){c(he)};else if(typeof MessageChannel<"u"){var lt=new MessageChannel,at=lt.port2;lt.port1.onmessage=he,Re=function(){at.postMessage(null)}}else Re=function(){N(he,0)};function Te(O){C=O,E||(E=!0,Re())}function st(O,U){z=N(function(){O(e.unstable_now())},U)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(O){O.callback=null},e.unstable_continueExecution=function(){x||w||(x=!0,Te(k))},e.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):W=0<O?Math.floor(1e3/O):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(O){switch(p){case 1:case 2:case 3:var U=3;break;default:U=p}var B=p;p=U;try{return O()}finally{p=B}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(O,U){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var B=p;p=O;try{return U()}finally{p=B}},e.unstable_scheduleCallback=function(O,U,B){var K=e.unstable_now();switch(typeof B=="object"&&B!==null?(B=B.delay,B=typeof B=="number"&&0<B?K+B:K):B=K,O){case 1:var R=-1;break;case 2:R=250;break;case 5:R=1073741823;break;case 4:R=1e4;break;default:R=5e3}return R=B+R,O={id:d++,callback:U,priorityLevel:O,startTime:B,expirationTime:R,sortIndex:-1},B>K?(O.sortIndex=B,t(u,O),n(s)===null&&O===n(u)&&(S?(h(z),z=-1):S=!0,st(v,B-K))):(O.sortIndex=R,t(s,O),x||w||(x=!0,Te(k))),O},e.unstable_shouldYield=oe,e.unstable_wrapCallback=function(O){var U=p;return function(){var B=p;p=U;try{return O.apply(this,arguments)}finally{p=B}}}})(Bc);Uc.exports=Bc;var Kp=Uc.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _c=P,Ve=Kp;function T(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var $c=new Set,zr={};function gn(e,t){_n(e,t),_n(e+"Capture",t)}function _n(e,t){for(zr[e]=t,e=0;e<t.length;e++)$c.add(t[e])}var Ct=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),jl=Object.prototype.hasOwnProperty,Xp=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ws={},Hs={};function Zp(e){return jl.call(Hs,e)?!0:jl.call(Ws,e)?!1:Xp.test(e)?Hs[e]=!0:(Ws[e]=!0,!1)}function Jp(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function qp(e,t,n,r){if(t===null||typeof t>"u"||Jp(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Oe(e,t,n,r,i,o,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=l}var ke={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ke[e]=new Oe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ke[t]=new Oe(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ke[e]=new Oe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ke[e]=new Oe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ke[e]=new Oe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ke[e]=new Oe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ke[e]=new Oe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ke[e]=new Oe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ke[e]=new Oe(e,5,!1,e.toLowerCase(),null,!1,!1)});var Fa=/[\-:]([a-z])/g;function Ua(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Fa,Ua);ke[t]=new Oe(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Fa,Ua);ke[t]=new Oe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Fa,Ua);ke[t]=new Oe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ke[e]=new Oe(e,1,!1,e.toLowerCase(),null,!1,!1)});ke.xlinkHref=new Oe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ke[e]=new Oe(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ba(e,t,n,r){var i=ke.hasOwnProperty(t)?ke[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(qp(t,n,i,r)&&(n=null),r||i===null?Zp(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var jt=_c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,li=Symbol.for("react.element"),wn=Symbol.for("react.portal"),Sn=Symbol.for("react.fragment"),_a=Symbol.for("react.strict_mode"),Rl=Symbol.for("react.profiler"),Vc=Symbol.for("react.provider"),Wc=Symbol.for("react.context"),$a=Symbol.for("react.forward_ref"),Tl=Symbol.for("react.suspense"),Nl=Symbol.for("react.suspense_list"),Va=Symbol.for("react.memo"),zt=Symbol.for("react.lazy"),Hc=Symbol.for("react.offscreen"),bs=Symbol.iterator;function lr(e){return e===null||typeof e!="object"?null:(e=bs&&e[bs]||e["@@iterator"],typeof e=="function"?e:null)}var se=Object.assign,Ho;function vr(e){if(Ho===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Ho=t&&t[1]||""}return`
`+Ho+e}var bo=!1;function Qo(e,t){if(!e||bo)return"";bo=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),l=i.length-1,a=o.length-1;1<=l&&0<=a&&i[l]!==o[a];)a--;for(;1<=l&&0<=a;l--,a--)if(i[l]!==o[a]){if(l!==1||a!==1)do if(l--,a--,0>a||i[l]!==o[a]){var s=`
`+i[l].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=l&&0<=a);break}}}finally{bo=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?vr(e):""}function eh(e){switch(e.tag){case 5:return vr(e.type);case 16:return vr("Lazy");case 13:return vr("Suspense");case 19:return vr("SuspenseList");case 0:case 2:case 15:return e=Qo(e.type,!1),e;case 11:return e=Qo(e.type.render,!1),e;case 1:return e=Qo(e.type,!0),e;default:return""}}function zl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Sn:return"Fragment";case wn:return"Portal";case Rl:return"Profiler";case _a:return"StrictMode";case Tl:return"Suspense";case Nl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Wc:return(e.displayName||"Context")+".Consumer";case Vc:return(e._context.displayName||"Context")+".Provider";case $a:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Va:return t=e.displayName||null,t!==null?t:zl(e.type)||"Memo";case zt:t=e._payload,e=e._init;try{return zl(e(t))}catch{}}return null}function th(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return zl(t);case 8:return t===_a?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Kt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function bc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function nh(e){var t=bc(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(l){r=""+l,o.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ai(e){e._valueTracker||(e._valueTracker=nh(e))}function Qc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=bc(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Wi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Il(e,t){var n=t.checked;return se({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Qs(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Kt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Yc(e,t){t=t.checked,t!=null&&Ba(e,"checked",t,!1)}function Ol(e,t){Yc(e,t);var n=Kt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Ml(e,t.type,n):t.hasOwnProperty("defaultValue")&&Ml(e,t.type,Kt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Ys(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Ml(e,t,n){(t!=="number"||Wi(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var yr=Array.isArray;function On(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Kt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Ll(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(T(91));return se({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Gs(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(T(92));if(yr(n)){if(1<n.length)throw Error(T(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Kt(n)}}function Gc(e,t){var n=Kt(t.value),r=Kt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Ks(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Kc(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Dl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Kc(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var si,Xc=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(si=si||document.createElement("div"),si.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=si.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Ir(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Sr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},rh=["Webkit","ms","Moz","O"];Object.keys(Sr).forEach(function(e){rh.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Sr[t]=Sr[e]})});function Zc(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Sr.hasOwnProperty(e)&&Sr[e]?(""+t).trim():t+"px"}function Jc(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Zc(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var ih=se({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Fl(e,t){if(t){if(ih[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(T(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(T(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(T(61))}if(t.style!=null&&typeof t.style!="object")throw Error(T(62))}}function Ul(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Bl=null;function Wa(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var _l=null,Mn=null,Ln=null;function Xs(e){if(e=ti(e)){if(typeof _l!="function")throw Error(T(280));var t=e.stateNode;t&&(t=Ao(t),_l(e.stateNode,e.type,t))}}function qc(e){Mn?Ln?Ln.push(e):Ln=[e]:Mn=e}function ed(){if(Mn){var e=Mn,t=Ln;if(Ln=Mn=null,Xs(e),t)for(e=0;e<t.length;e++)Xs(t[e])}}function td(e,t){return e(t)}function nd(){}var Yo=!1;function rd(e,t,n){if(Yo)return e(t,n);Yo=!0;try{return td(e,t,n)}finally{Yo=!1,(Mn!==null||Ln!==null)&&(nd(),ed())}}function Or(e,t){var n=e.stateNode;if(n===null)return null;var r=Ao(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(T(231,t,typeof n));return n}var $l=!1;if(Ct)try{var ar={};Object.defineProperty(ar,"passive",{get:function(){$l=!0}}),window.addEventListener("test",ar,ar),window.removeEventListener("test",ar,ar)}catch{$l=!1}function oh(e,t,n,r,i,o,l,a,s){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(d){this.onError(d)}}var kr=!1,Hi=null,bi=!1,Vl=null,lh={onError:function(e){kr=!0,Hi=e}};function ah(e,t,n,r,i,o,l,a,s){kr=!1,Hi=null,oh.apply(lh,arguments)}function sh(e,t,n,r,i,o,l,a,s){if(ah.apply(this,arguments),kr){if(kr){var u=Hi;kr=!1,Hi=null}else throw Error(T(198));bi||(bi=!0,Vl=u)}}function vn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function id(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Zs(e){if(vn(e)!==e)throw Error(T(188))}function uh(e){var t=e.alternate;if(!t){if(t=vn(e),t===null)throw Error(T(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return Zs(i),e;if(o===r)return Zs(i),t;o=o.sibling}throw Error(T(188))}if(n.return!==r.return)n=i,r=o;else{for(var l=!1,a=i.child;a;){if(a===n){l=!0,n=i,r=o;break}if(a===r){l=!0,r=i,n=o;break}a=a.sibling}if(!l){for(a=o.child;a;){if(a===n){l=!0,n=o,r=i;break}if(a===r){l=!0,r=o,n=i;break}a=a.sibling}if(!l)throw Error(T(189))}}if(n.alternate!==r)throw Error(T(190))}if(n.tag!==3)throw Error(T(188));return n.stateNode.current===n?e:t}function od(e){return e=uh(e),e!==null?ld(e):null}function ld(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=ld(e);if(t!==null)return t;e=e.sibling}return null}var ad=Ve.unstable_scheduleCallback,Js=Ve.unstable_cancelCallback,ch=Ve.unstable_shouldYield,dh=Ve.unstable_requestPaint,ce=Ve.unstable_now,fh=Ve.unstable_getCurrentPriorityLevel,Ha=Ve.unstable_ImmediatePriority,sd=Ve.unstable_UserBlockingPriority,Qi=Ve.unstable_NormalPriority,ph=Ve.unstable_LowPriority,ud=Ve.unstable_IdlePriority,wo=null,ft=null;function hh(e){if(ft&&typeof ft.onCommitFiberRoot=="function")try{ft.onCommitFiberRoot(wo,e,void 0,(e.current.flags&128)===128)}catch{}}var nt=Math.clz32?Math.clz32:vh,mh=Math.log,gh=Math.LN2;function vh(e){return e>>>=0,e===0?32:31-(mh(e)/gh|0)|0}var ui=64,ci=4194304;function xr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Yi(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,l=n&268435455;if(l!==0){var a=l&~i;a!==0?r=xr(a):(o&=l,o!==0&&(r=xr(o)))}else l=n&~i,l!==0?r=xr(l):o!==0&&(r=xr(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-nt(t),i=1<<n,r|=e[n],t&=~i;return r}function yh(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function xh(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var l=31-nt(o),a=1<<l,s=i[l];s===-1?(!(a&n)||a&r)&&(i[l]=yh(a,t)):s<=t&&(e.expiredLanes|=a),o&=~a}}function Wl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function cd(){var e=ui;return ui<<=1,!(ui&4194240)&&(ui=64),e}function Go(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function qr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-nt(t),e[t]=n}function wh(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-nt(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function ba(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-nt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var Z=0;function dd(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var fd,Qa,pd,hd,md,Hl=!1,di=[],Bt=null,_t=null,$t=null,Mr=new Map,Lr=new Map,Ot=[],Sh="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function qs(e,t){switch(e){case"focusin":case"focusout":Bt=null;break;case"dragenter":case"dragleave":_t=null;break;case"mouseover":case"mouseout":$t=null;break;case"pointerover":case"pointerout":Mr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Lr.delete(t.pointerId)}}function sr(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=ti(t),t!==null&&Qa(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function kh(e,t,n,r,i){switch(t){case"focusin":return Bt=sr(Bt,e,t,n,r,i),!0;case"dragenter":return _t=sr(_t,e,t,n,r,i),!0;case"mouseover":return $t=sr($t,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return Mr.set(o,sr(Mr.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Lr.set(o,sr(Lr.get(o)||null,e,t,n,r,i)),!0}return!1}function gd(e){var t=nn(e.target);if(t!==null){var n=vn(t);if(n!==null){if(t=n.tag,t===13){if(t=id(n),t!==null){e.blockedOn=t,md(e.priority,function(){pd(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ti(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=bl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Bl=r,n.target.dispatchEvent(r),Bl=null}else return t=ti(n),t!==null&&Qa(t),e.blockedOn=n,!1;t.shift()}return!0}function eu(e,t,n){Ti(e)&&n.delete(t)}function Ch(){Hl=!1,Bt!==null&&Ti(Bt)&&(Bt=null),_t!==null&&Ti(_t)&&(_t=null),$t!==null&&Ti($t)&&($t=null),Mr.forEach(eu),Lr.forEach(eu)}function ur(e,t){e.blockedOn===t&&(e.blockedOn=null,Hl||(Hl=!0,Ve.unstable_scheduleCallback(Ve.unstable_NormalPriority,Ch)))}function Dr(e){function t(i){return ur(i,e)}if(0<di.length){ur(di[0],e);for(var n=1;n<di.length;n++){var r=di[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Bt!==null&&ur(Bt,e),_t!==null&&ur(_t,e),$t!==null&&ur($t,e),Mr.forEach(t),Lr.forEach(t),n=0;n<Ot.length;n++)r=Ot[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Ot.length&&(n=Ot[0],n.blockedOn===null);)gd(n),n.blockedOn===null&&Ot.shift()}var Dn=jt.ReactCurrentBatchConfig,Gi=!0;function Ah(e,t,n,r){var i=Z,o=Dn.transition;Dn.transition=null;try{Z=1,Ya(e,t,n,r)}finally{Z=i,Dn.transition=o}}function Eh(e,t,n,r){var i=Z,o=Dn.transition;Dn.transition=null;try{Z=4,Ya(e,t,n,r)}finally{Z=i,Dn.transition=o}}function Ya(e,t,n,r){if(Gi){var i=bl(e,t,n,r);if(i===null)il(e,t,r,Ki,n),qs(e,r);else if(kh(i,e,t,n,r))r.stopPropagation();else if(qs(e,r),t&4&&-1<Sh.indexOf(e)){for(;i!==null;){var o=ti(i);if(o!==null&&fd(o),o=bl(e,t,n,r),o===null&&il(e,t,r,Ki,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else il(e,t,r,null,n)}}var Ki=null;function bl(e,t,n,r){if(Ki=null,e=Wa(r),e=nn(e),e!==null)if(t=vn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=id(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ki=e,null}function vd(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(fh()){case Ha:return 1;case sd:return 4;case Qi:case ph:return 16;case ud:return 536870912;default:return 16}default:return 16}}var Dt=null,Ga=null,Ni=null;function yd(){if(Ni)return Ni;var e,t=Ga,n=t.length,r,i="value"in Dt?Dt.value:Dt.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===i[o-r];r++);return Ni=i.slice(e,1<r?1-r:void 0)}function zi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function fi(){return!0}function tu(){return!1}function He(e){function t(n,r,i,o,l){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=l,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?fi:tu,this.isPropagationStopped=tu,this}return se(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=fi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=fi)},persist:function(){},isPersistent:fi}),t}var qn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ka=He(qn),ei=se({},qn,{view:0,detail:0}),Ph=He(ei),Ko,Xo,cr,So=se({},ei,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Xa,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==cr&&(cr&&e.type==="mousemove"?(Ko=e.screenX-cr.screenX,Xo=e.screenY-cr.screenY):Xo=Ko=0,cr=e),Ko)},movementY:function(e){return"movementY"in e?e.movementY:Xo}}),nu=He(So),jh=se({},So,{dataTransfer:0}),Rh=He(jh),Th=se({},ei,{relatedTarget:0}),Zo=He(Th),Nh=se({},qn,{animationName:0,elapsedTime:0,pseudoElement:0}),zh=He(Nh),Ih=se({},qn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Oh=He(Ih),Mh=se({},qn,{data:0}),ru=He(Mh),Lh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Dh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Fh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Uh(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Fh[e])?!!t[e]:!1}function Xa(){return Uh}var Bh=se({},ei,{key:function(e){if(e.key){var t=Lh[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=zi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Dh[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Xa,charCode:function(e){return e.type==="keypress"?zi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?zi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),_h=He(Bh),$h=se({},So,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),iu=He($h),Vh=se({},ei,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Xa}),Wh=He(Vh),Hh=se({},qn,{propertyName:0,elapsedTime:0,pseudoElement:0}),bh=He(Hh),Qh=se({},So,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Yh=He(Qh),Gh=[9,13,27,32],Za=Ct&&"CompositionEvent"in window,Cr=null;Ct&&"documentMode"in document&&(Cr=document.documentMode);var Kh=Ct&&"TextEvent"in window&&!Cr,xd=Ct&&(!Za||Cr&&8<Cr&&11>=Cr),ou=String.fromCharCode(32),lu=!1;function wd(e,t){switch(e){case"keyup":return Gh.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Sd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var kn=!1;function Xh(e,t){switch(e){case"compositionend":return Sd(t);case"keypress":return t.which!==32?null:(lu=!0,ou);case"textInput":return e=t.data,e===ou&&lu?null:e;default:return null}}function Zh(e,t){if(kn)return e==="compositionend"||!Za&&wd(e,t)?(e=yd(),Ni=Ga=Dt=null,kn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return xd&&t.locale!=="ko"?null:t.data;default:return null}}var Jh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function au(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Jh[e.type]:t==="textarea"}function kd(e,t,n,r){qc(r),t=Xi(t,"onChange"),0<t.length&&(n=new Ka("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Ar=null,Fr=null;function qh(e){Od(e,0)}function ko(e){var t=En(e);if(Qc(t))return e}function e0(e,t){if(e==="change")return t}var Cd=!1;if(Ct){var Jo;if(Ct){var qo="oninput"in document;if(!qo){var su=document.createElement("div");su.setAttribute("oninput","return;"),qo=typeof su.oninput=="function"}Jo=qo}else Jo=!1;Cd=Jo&&(!document.documentMode||9<document.documentMode)}function uu(){Ar&&(Ar.detachEvent("onpropertychange",Ad),Fr=Ar=null)}function Ad(e){if(e.propertyName==="value"&&ko(Fr)){var t=[];kd(t,Fr,e,Wa(e)),rd(qh,t)}}function t0(e,t,n){e==="focusin"?(uu(),Ar=t,Fr=n,Ar.attachEvent("onpropertychange",Ad)):e==="focusout"&&uu()}function n0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ko(Fr)}function r0(e,t){if(e==="click")return ko(t)}function i0(e,t){if(e==="input"||e==="change")return ko(t)}function o0(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ot=typeof Object.is=="function"?Object.is:o0;function Ur(e,t){if(ot(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!jl.call(t,i)||!ot(e[i],t[i]))return!1}return!0}function cu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function du(e,t){var n=cu(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=cu(n)}}function Ed(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Ed(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Pd(){for(var e=window,t=Wi();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Wi(e.document)}return t}function Ja(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function l0(e){var t=Pd(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Ed(n.ownerDocument.documentElement,n)){if(r!==null&&Ja(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=du(n,o);var l=du(n,r);i&&l&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var a0=Ct&&"documentMode"in document&&11>=document.documentMode,Cn=null,Ql=null,Er=null,Yl=!1;function fu(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Yl||Cn==null||Cn!==Wi(r)||(r=Cn,"selectionStart"in r&&Ja(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Er&&Ur(Er,r)||(Er=r,r=Xi(Ql,"onSelect"),0<r.length&&(t=new Ka("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Cn)))}function pi(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var An={animationend:pi("Animation","AnimationEnd"),animationiteration:pi("Animation","AnimationIteration"),animationstart:pi("Animation","AnimationStart"),transitionend:pi("Transition","TransitionEnd")},el={},jd={};Ct&&(jd=document.createElement("div").style,"AnimationEvent"in window||(delete An.animationend.animation,delete An.animationiteration.animation,delete An.animationstart.animation),"TransitionEvent"in window||delete An.transitionend.transition);function Co(e){if(el[e])return el[e];if(!An[e])return e;var t=An[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in jd)return el[e]=t[n];return e}var Rd=Co("animationend"),Td=Co("animationiteration"),Nd=Co("animationstart"),zd=Co("transitionend"),Id=new Map,pu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Zt(e,t){Id.set(e,t),gn(t,[e])}for(var tl=0;tl<pu.length;tl++){var nl=pu[tl],s0=nl.toLowerCase(),u0=nl[0].toUpperCase()+nl.slice(1);Zt(s0,"on"+u0)}Zt(Rd,"onAnimationEnd");Zt(Td,"onAnimationIteration");Zt(Nd,"onAnimationStart");Zt("dblclick","onDoubleClick");Zt("focusin","onFocus");Zt("focusout","onBlur");Zt(zd,"onTransitionEnd");_n("onMouseEnter",["mouseout","mouseover"]);_n("onMouseLeave",["mouseout","mouseover"]);_n("onPointerEnter",["pointerout","pointerover"]);_n("onPointerLeave",["pointerout","pointerover"]);gn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));gn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));gn("onBeforeInput",["compositionend","keypress","textInput","paste"]);gn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));gn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));gn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var wr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),c0=new Set("cancel close invalid load scroll toggle".split(" ").concat(wr));function hu(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,sh(r,t,void 0,e),e.currentTarget=null}function Od(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var l=r.length-1;0<=l;l--){var a=r[l],s=a.instance,u=a.currentTarget;if(a=a.listener,s!==o&&i.isPropagationStopped())break e;hu(i,a,u),o=s}else for(l=0;l<r.length;l++){if(a=r[l],s=a.instance,u=a.currentTarget,a=a.listener,s!==o&&i.isPropagationStopped())break e;hu(i,a,u),o=s}}}if(bi)throw e=Vl,bi=!1,Vl=null,e}function ee(e,t){var n=t[Jl];n===void 0&&(n=t[Jl]=new Set);var r=e+"__bubble";n.has(r)||(Md(t,e,2,!1),n.add(r))}function rl(e,t,n){var r=0;t&&(r|=4),Md(n,e,r,t)}var hi="_reactListening"+Math.random().toString(36).slice(2);function Br(e){if(!e[hi]){e[hi]=!0,$c.forEach(function(n){n!=="selectionchange"&&(c0.has(n)||rl(n,!1,e),rl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[hi]||(t[hi]=!0,rl("selectionchange",!1,t))}}function Md(e,t,n,r){switch(vd(t)){case 1:var i=Ah;break;case 4:i=Eh;break;default:i=Ya}n=i.bind(null,t,n,e),i=void 0,!$l||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function il(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(l===4)for(l=r.return;l!==null;){var s=l.tag;if((s===3||s===4)&&(s=l.stateNode.containerInfo,s===i||s.nodeType===8&&s.parentNode===i))return;l=l.return}for(;a!==null;){if(l=nn(a),l===null)return;if(s=l.tag,s===5||s===6){r=o=l;continue e}a=a.parentNode}}r=r.return}rd(function(){var u=o,d=Wa(n),m=[];e:{var p=Id.get(e);if(p!==void 0){var w=Ka,x=e;switch(e){case"keypress":if(zi(n)===0)break e;case"keydown":case"keyup":w=_h;break;case"focusin":x="focus",w=Zo;break;case"focusout":x="blur",w=Zo;break;case"beforeblur":case"afterblur":w=Zo;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=nu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=Rh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=Wh;break;case Rd:case Td:case Nd:w=zh;break;case zd:w=bh;break;case"scroll":w=Ph;break;case"wheel":w=Yh;break;case"copy":case"cut":case"paste":w=Oh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=iu}var S=(t&4)!==0,N=!S&&e==="scroll",h=S?p!==null?p+"Capture":null:p;S=[];for(var c=u,f;c!==null;){f=c;var v=f.stateNode;if(f.tag===5&&v!==null&&(f=v,h!==null&&(v=Or(c,h),v!=null&&S.push(_r(c,v,f)))),N)break;c=c.return}0<S.length&&(p=new w(p,x,null,n,d),m.push({event:p,listeners:S}))}}if(!(t&7)){e:{if(p=e==="mouseover"||e==="pointerover",w=e==="mouseout"||e==="pointerout",p&&n!==Bl&&(x=n.relatedTarget||n.fromElement)&&(nn(x)||x[At]))break e;if((w||p)&&(p=d.window===d?d:(p=d.ownerDocument)?p.defaultView||p.parentWindow:window,w?(x=n.relatedTarget||n.toElement,w=u,x=x?nn(x):null,x!==null&&(N=vn(x),x!==N||x.tag!==5&&x.tag!==6)&&(x=null)):(w=null,x=u),w!==x)){if(S=nu,v="onMouseLeave",h="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(S=iu,v="onPointerLeave",h="onPointerEnter",c="pointer"),N=w==null?p:En(w),f=x==null?p:En(x),p=new S(v,c+"leave",w,n,d),p.target=N,p.relatedTarget=f,v=null,nn(d)===u&&(S=new S(h,c+"enter",x,n,d),S.target=f,S.relatedTarget=N,v=S),N=v,w&&x)t:{for(S=w,h=x,c=0,f=S;f;f=xn(f))c++;for(f=0,v=h;v;v=xn(v))f++;for(;0<c-f;)S=xn(S),c--;for(;0<f-c;)h=xn(h),f--;for(;c--;){if(S===h||h!==null&&S===h.alternate)break t;S=xn(S),h=xn(h)}S=null}else S=null;w!==null&&mu(m,p,w,S,!1),x!==null&&N!==null&&mu(m,N,x,S,!0)}}e:{if(p=u?En(u):window,w=p.nodeName&&p.nodeName.toLowerCase(),w==="select"||w==="input"&&p.type==="file")var k=e0;else if(au(p))if(Cd)k=i0;else{k=n0;var E=t0}else(w=p.nodeName)&&w.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(k=r0);if(k&&(k=k(e,u))){kd(m,k,n,d);break e}E&&E(e,p,u),e==="focusout"&&(E=p._wrapperState)&&E.controlled&&p.type==="number"&&Ml(p,"number",p.value)}switch(E=u?En(u):window,e){case"focusin":(au(E)||E.contentEditable==="true")&&(Cn=E,Ql=u,Er=null);break;case"focusout":Er=Ql=Cn=null;break;case"mousedown":Yl=!0;break;case"contextmenu":case"mouseup":case"dragend":Yl=!1,fu(m,n,d);break;case"selectionchange":if(a0)break;case"keydown":case"keyup":fu(m,n,d)}var C;if(Za)e:{switch(e){case"compositionstart":var z="onCompositionStart";break e;case"compositionend":z="onCompositionEnd";break e;case"compositionupdate":z="onCompositionUpdate";break e}z=void 0}else kn?wd(e,n)&&(z="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(z="onCompositionStart");z&&(xd&&n.locale!=="ko"&&(kn||z!=="onCompositionStart"?z==="onCompositionEnd"&&kn&&(C=yd()):(Dt=d,Ga="value"in Dt?Dt.value:Dt.textContent,kn=!0)),E=Xi(u,z),0<E.length&&(z=new ru(z,e,null,n,d),m.push({event:z,listeners:E}),C?z.data=C:(C=Sd(n),C!==null&&(z.data=C)))),(C=Kh?Xh(e,n):Zh(e,n))&&(u=Xi(u,"onBeforeInput"),0<u.length&&(d=new ru("onBeforeInput","beforeinput",null,n,d),m.push({event:d,listeners:u}),d.data=C))}Od(m,t)})}function _r(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Xi(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Or(e,n),o!=null&&r.unshift(_r(e,o,i)),o=Or(e,t),o!=null&&r.push(_r(e,o,i))),e=e.return}return r}function xn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function mu(e,t,n,r,i){for(var o=t._reactName,l=[];n!==null&&n!==r;){var a=n,s=a.alternate,u=a.stateNode;if(s!==null&&s===r)break;a.tag===5&&u!==null&&(a=u,i?(s=Or(n,o),s!=null&&l.unshift(_r(n,s,a))):i||(s=Or(n,o),s!=null&&l.push(_r(n,s,a)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var d0=/\r\n?/g,f0=/\u0000|\uFFFD/g;function gu(e){return(typeof e=="string"?e:""+e).replace(d0,`
`).replace(f0,"")}function mi(e,t,n){if(t=gu(t),gu(e)!==t&&n)throw Error(T(425))}function Zi(){}var Gl=null,Kl=null;function Xl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Zl=typeof setTimeout=="function"?setTimeout:void 0,p0=typeof clearTimeout=="function"?clearTimeout:void 0,vu=typeof Promise=="function"?Promise:void 0,h0=typeof queueMicrotask=="function"?queueMicrotask:typeof vu<"u"?function(e){return vu.resolve(null).then(e).catch(m0)}:Zl;function m0(e){setTimeout(function(){throw e})}function ol(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Dr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Dr(t)}function Vt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function yu(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var er=Math.random().toString(36).slice(2),dt="__reactFiber$"+er,$r="__reactProps$"+er,At="__reactContainer$"+er,Jl="__reactEvents$"+er,g0="__reactListeners$"+er,v0="__reactHandles$"+er;function nn(e){var t=e[dt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[At]||n[dt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=yu(e);e!==null;){if(n=e[dt])return n;e=yu(e)}return t}e=n,n=e.parentNode}return null}function ti(e){return e=e[dt]||e[At],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function En(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(T(33))}function Ao(e){return e[$r]||null}var ql=[],Pn=-1;function Jt(e){return{current:e}}function ne(e){0>Pn||(e.current=ql[Pn],ql[Pn]=null,Pn--)}function q(e,t){Pn++,ql[Pn]=e.current,e.current=t}var Xt={},je=Jt(Xt),De=Jt(!1),cn=Xt;function $n(e,t){var n=e.type.contextTypes;if(!n)return Xt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Fe(e){return e=e.childContextTypes,e!=null}function Ji(){ne(De),ne(je)}function xu(e,t,n){if(je.current!==Xt)throw Error(T(168));q(je,t),q(De,n)}function Ld(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(T(108,th(e)||"Unknown",i));return se({},n,r)}function qi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Xt,cn=je.current,q(je,e),q(De,De.current),!0}function wu(e,t,n){var r=e.stateNode;if(!r)throw Error(T(169));n?(e=Ld(e,t,cn),r.__reactInternalMemoizedMergedChildContext=e,ne(De),ne(je),q(je,e)):ne(De),q(De,n)}var yt=null,Eo=!1,ll=!1;function Dd(e){yt===null?yt=[e]:yt.push(e)}function y0(e){Eo=!0,Dd(e)}function qt(){if(!ll&&yt!==null){ll=!0;var e=0,t=Z;try{var n=yt;for(Z=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}yt=null,Eo=!1}catch(i){throw yt!==null&&(yt=yt.slice(e+1)),ad(Ha,qt),i}finally{Z=t,ll=!1}}return null}var jn=[],Rn=0,eo=null,to=0,be=[],Qe=0,dn=null,wt=1,St="";function en(e,t){jn[Rn++]=to,jn[Rn++]=eo,eo=e,to=t}function Fd(e,t,n){be[Qe++]=wt,be[Qe++]=St,be[Qe++]=dn,dn=e;var r=wt;e=St;var i=32-nt(r)-1;r&=~(1<<i),n+=1;var o=32-nt(t)+i;if(30<o){var l=i-i%5;o=(r&(1<<l)-1).toString(32),r>>=l,i-=l,wt=1<<32-nt(t)+i|n<<i|r,St=o+e}else wt=1<<o|n<<i|r,St=e}function qa(e){e.return!==null&&(en(e,1),Fd(e,1,0))}function es(e){for(;e===eo;)eo=jn[--Rn],jn[Rn]=null,to=jn[--Rn],jn[Rn]=null;for(;e===dn;)dn=be[--Qe],be[Qe]=null,St=be[--Qe],be[Qe]=null,wt=be[--Qe],be[Qe]=null}var $e=null,_e=null,ie=!1,tt=null;function Ud(e,t){var n=Ye(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Su(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,$e=e,_e=Vt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,$e=e,_e=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=dn!==null?{id:wt,overflow:St}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ye(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,$e=e,_e=null,!0):!1;default:return!1}}function ea(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ta(e){if(ie){var t=_e;if(t){var n=t;if(!Su(e,t)){if(ea(e))throw Error(T(418));t=Vt(n.nextSibling);var r=$e;t&&Su(e,t)?Ud(r,n):(e.flags=e.flags&-4097|2,ie=!1,$e=e)}}else{if(ea(e))throw Error(T(418));e.flags=e.flags&-4097|2,ie=!1,$e=e}}}function ku(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;$e=e}function gi(e){if(e!==$e)return!1;if(!ie)return ku(e),ie=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Xl(e.type,e.memoizedProps)),t&&(t=_e)){if(ea(e))throw Bd(),Error(T(418));for(;t;)Ud(e,t),t=Vt(t.nextSibling)}if(ku(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(T(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){_e=Vt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}_e=null}}else _e=$e?Vt(e.stateNode.nextSibling):null;return!0}function Bd(){for(var e=_e;e;)e=Vt(e.nextSibling)}function Vn(){_e=$e=null,ie=!1}function ts(e){tt===null?tt=[e]:tt.push(e)}var x0=jt.ReactCurrentBatchConfig;function qe(e,t){if(e&&e.defaultProps){t=se({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var no=Jt(null),ro=null,Tn=null,ns=null;function rs(){ns=Tn=ro=null}function is(e){var t=no.current;ne(no),e._currentValue=t}function na(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Fn(e,t){ro=e,ns=Tn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Le=!0),e.firstContext=null)}function Ke(e){var t=e._currentValue;if(ns!==e)if(e={context:e,memoizedValue:t,next:null},Tn===null){if(ro===null)throw Error(T(308));Tn=e,ro.dependencies={lanes:0,firstContext:e}}else Tn=Tn.next=e;return t}var rn=null;function os(e){rn===null?rn=[e]:rn.push(e)}function _d(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,os(t)):(n.next=i.next,i.next=n),t.interleaved=n,Et(e,r)}function Et(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var It=!1;function ls(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function $d(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function kt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Wt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,G&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Et(e,n)}return i=r.interleaved,i===null?(t.next=t,os(r)):(t.next=i.next,i.next=t),r.interleaved=t,Et(e,n)}function Ii(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ba(e,n)}}function Cu(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=l:o=o.next=l,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function io(e,t,n,r){var i=e.updateQueue;It=!1;var o=i.firstBaseUpdate,l=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var s=a,u=s.next;s.next=null,l===null?o=u:l.next=u,l=s;var d=e.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==l&&(a===null?d.firstBaseUpdate=u:a.next=u,d.lastBaseUpdate=s))}if(o!==null){var m=i.baseState;l=0,d=u=s=null,a=o;do{var p=a.lane,w=a.eventTime;if((r&p)===p){d!==null&&(d=d.next={eventTime:w,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var x=e,S=a;switch(p=t,w=n,S.tag){case 1:if(x=S.payload,typeof x=="function"){m=x.call(w,m,p);break e}m=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=S.payload,p=typeof x=="function"?x.call(w,m,p):x,p==null)break e;m=se({},m,p);break e;case 2:It=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,p=i.effects,p===null?i.effects=[a]:p.push(a))}else w={eventTime:w,lane:p,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(u=d=w,s=m):d=d.next=w,l|=p;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;p=a,a=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);if(d===null&&(s=m),i.baseState=s,i.firstBaseUpdate=u,i.lastBaseUpdate=d,t=i.shared.interleaved,t!==null){i=t;do l|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);pn|=l,e.lanes=l,e.memoizedState=m}}function Au(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(T(191,i));i.call(r)}}}var Vd=new _c.Component().refs;function ra(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:se({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Po={isMounted:function(e){return(e=e._reactInternals)?vn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ze(),i=bt(e),o=kt(r,i);o.payload=t,n!=null&&(o.callback=n),t=Wt(e,o,i),t!==null&&(rt(t,e,i,r),Ii(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ze(),i=bt(e),o=kt(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=Wt(e,o,i),t!==null&&(rt(t,e,i,r),Ii(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ze(),r=bt(e),i=kt(n,r);i.tag=2,t!=null&&(i.callback=t),t=Wt(e,i,r),t!==null&&(rt(t,e,r,n),Ii(t,e,r))}};function Eu(e,t,n,r,i,o,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,l):t.prototype&&t.prototype.isPureReactComponent?!Ur(n,r)||!Ur(i,o):!0}function Wd(e,t,n){var r=!1,i=Xt,o=t.contextType;return typeof o=="object"&&o!==null?o=Ke(o):(i=Fe(t)?cn:je.current,r=t.contextTypes,o=(r=r!=null)?$n(e,i):Xt),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Po,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Pu(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Po.enqueueReplaceState(t,t.state,null)}function ia(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=Vd,ls(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=Ke(o):(o=Fe(t)?cn:je.current,i.context=$n(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(ra(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Po.enqueueReplaceState(i,i.state,null),io(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function dr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(T(309));var r=n.stateNode}if(!r)throw Error(T(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(l){var a=i.refs;a===Vd&&(a=i.refs={}),l===null?delete a[o]:a[o]=l},t._stringRef=o,t)}if(typeof e!="string")throw Error(T(284));if(!n._owner)throw Error(T(290,e))}return e}function vi(e,t){throw e=Object.prototype.toString.call(t),Error(T(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function ju(e){var t=e._init;return t(e._payload)}function Hd(e){function t(h,c){if(e){var f=h.deletions;f===null?(h.deletions=[c],h.flags|=16):f.push(c)}}function n(h,c){if(!e)return null;for(;c!==null;)t(h,c),c=c.sibling;return null}function r(h,c){for(h=new Map;c!==null;)c.key!==null?h.set(c.key,c):h.set(c.index,c),c=c.sibling;return h}function i(h,c){return h=Qt(h,c),h.index=0,h.sibling=null,h}function o(h,c,f){return h.index=f,e?(f=h.alternate,f!==null?(f=f.index,f<c?(h.flags|=2,c):f):(h.flags|=2,c)):(h.flags|=1048576,c)}function l(h){return e&&h.alternate===null&&(h.flags|=2),h}function a(h,c,f,v){return c===null||c.tag!==6?(c=pl(f,h.mode,v),c.return=h,c):(c=i(c,f),c.return=h,c)}function s(h,c,f,v){var k=f.type;return k===Sn?d(h,c,f.props.children,v,f.key):c!==null&&(c.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===zt&&ju(k)===c.type)?(v=i(c,f.props),v.ref=dr(h,c,f),v.return=h,v):(v=Ui(f.type,f.key,f.props,null,h.mode,v),v.ref=dr(h,c,f),v.return=h,v)}function u(h,c,f,v){return c===null||c.tag!==4||c.stateNode.containerInfo!==f.containerInfo||c.stateNode.implementation!==f.implementation?(c=hl(f,h.mode,v),c.return=h,c):(c=i(c,f.children||[]),c.return=h,c)}function d(h,c,f,v,k){return c===null||c.tag!==7?(c=sn(f,h.mode,v,k),c.return=h,c):(c=i(c,f),c.return=h,c)}function m(h,c,f){if(typeof c=="string"&&c!==""||typeof c=="number")return c=pl(""+c,h.mode,f),c.return=h,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case li:return f=Ui(c.type,c.key,c.props,null,h.mode,f),f.ref=dr(h,null,c),f.return=h,f;case wn:return c=hl(c,h.mode,f),c.return=h,c;case zt:var v=c._init;return m(h,v(c._payload),f)}if(yr(c)||lr(c))return c=sn(c,h.mode,f,null),c.return=h,c;vi(h,c)}return null}function p(h,c,f,v){var k=c!==null?c.key:null;if(typeof f=="string"&&f!==""||typeof f=="number")return k!==null?null:a(h,c,""+f,v);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case li:return f.key===k?s(h,c,f,v):null;case wn:return f.key===k?u(h,c,f,v):null;case zt:return k=f._init,p(h,c,k(f._payload),v)}if(yr(f)||lr(f))return k!==null?null:d(h,c,f,v,null);vi(h,f)}return null}function w(h,c,f,v,k){if(typeof v=="string"&&v!==""||typeof v=="number")return h=h.get(f)||null,a(c,h,""+v,k);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case li:return h=h.get(v.key===null?f:v.key)||null,s(c,h,v,k);case wn:return h=h.get(v.key===null?f:v.key)||null,u(c,h,v,k);case zt:var E=v._init;return w(h,c,f,E(v._payload),k)}if(yr(v)||lr(v))return h=h.get(f)||null,d(c,h,v,k,null);vi(c,v)}return null}function x(h,c,f,v){for(var k=null,E=null,C=c,z=c=0,W=null;C!==null&&z<f.length;z++){C.index>z?(W=C,C=null):W=C.sibling;var _=p(h,C,f[z],v);if(_===null){C===null&&(C=W);break}e&&C&&_.alternate===null&&t(h,C),c=o(_,c,z),E===null?k=_:E.sibling=_,E=_,C=W}if(z===f.length)return n(h,C),ie&&en(h,z),k;if(C===null){for(;z<f.length;z++)C=m(h,f[z],v),C!==null&&(c=o(C,c,z),E===null?k=C:E.sibling=C,E=C);return ie&&en(h,z),k}for(C=r(h,C);z<f.length;z++)W=w(C,h,z,f[z],v),W!==null&&(e&&W.alternate!==null&&C.delete(W.key===null?z:W.key),c=o(W,c,z),E===null?k=W:E.sibling=W,E=W);return e&&C.forEach(function(oe){return t(h,oe)}),ie&&en(h,z),k}function S(h,c,f,v){var k=lr(f);if(typeof k!="function")throw Error(T(150));if(f=k.call(f),f==null)throw Error(T(151));for(var E=k=null,C=c,z=c=0,W=null,_=f.next();C!==null&&!_.done;z++,_=f.next()){C.index>z?(W=C,C=null):W=C.sibling;var oe=p(h,C,_.value,v);if(oe===null){C===null&&(C=W);break}e&&C&&oe.alternate===null&&t(h,C),c=o(oe,c,z),E===null?k=oe:E.sibling=oe,E=oe,C=W}if(_.done)return n(h,C),ie&&en(h,z),k;if(C===null){for(;!_.done;z++,_=f.next())_=m(h,_.value,v),_!==null&&(c=o(_,c,z),E===null?k=_:E.sibling=_,E=_);return ie&&en(h,z),k}for(C=r(h,C);!_.done;z++,_=f.next())_=w(C,h,z,_.value,v),_!==null&&(e&&_.alternate!==null&&C.delete(_.key===null?z:_.key),c=o(_,c,z),E===null?k=_:E.sibling=_,E=_);return e&&C.forEach(function(he){return t(h,he)}),ie&&en(h,z),k}function N(h,c,f,v){if(typeof f=="object"&&f!==null&&f.type===Sn&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case li:e:{for(var k=f.key,E=c;E!==null;){if(E.key===k){if(k=f.type,k===Sn){if(E.tag===7){n(h,E.sibling),c=i(E,f.props.children),c.return=h,h=c;break e}}else if(E.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===zt&&ju(k)===E.type){n(h,E.sibling),c=i(E,f.props),c.ref=dr(h,E,f),c.return=h,h=c;break e}n(h,E);break}else t(h,E);E=E.sibling}f.type===Sn?(c=sn(f.props.children,h.mode,v,f.key),c.return=h,h=c):(v=Ui(f.type,f.key,f.props,null,h.mode,v),v.ref=dr(h,c,f),v.return=h,h=v)}return l(h);case wn:e:{for(E=f.key;c!==null;){if(c.key===E)if(c.tag===4&&c.stateNode.containerInfo===f.containerInfo&&c.stateNode.implementation===f.implementation){n(h,c.sibling),c=i(c,f.children||[]),c.return=h,h=c;break e}else{n(h,c);break}else t(h,c);c=c.sibling}c=hl(f,h.mode,v),c.return=h,h=c}return l(h);case zt:return E=f._init,N(h,c,E(f._payload),v)}if(yr(f))return x(h,c,f,v);if(lr(f))return S(h,c,f,v);vi(h,f)}return typeof f=="string"&&f!==""||typeof f=="number"?(f=""+f,c!==null&&c.tag===6?(n(h,c.sibling),c=i(c,f),c.return=h,h=c):(n(h,c),c=pl(f,h.mode,v),c.return=h,h=c),l(h)):n(h,c)}return N}var Wn=Hd(!0),bd=Hd(!1),ni={},pt=Jt(ni),Vr=Jt(ni),Wr=Jt(ni);function on(e){if(e===ni)throw Error(T(174));return e}function as(e,t){switch(q(Wr,t),q(Vr,e),q(pt,ni),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Dl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Dl(t,e)}ne(pt),q(pt,t)}function Hn(){ne(pt),ne(Vr),ne(Wr)}function Qd(e){on(Wr.current);var t=on(pt.current),n=Dl(t,e.type);t!==n&&(q(Vr,e),q(pt,n))}function ss(e){Vr.current===e&&(ne(pt),ne(Vr))}var le=Jt(0);function oo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var al=[];function us(){for(var e=0;e<al.length;e++)al[e]._workInProgressVersionPrimary=null;al.length=0}var Oi=jt.ReactCurrentDispatcher,sl=jt.ReactCurrentBatchConfig,fn=0,ae=null,me=null,ve=null,lo=!1,Pr=!1,Hr=0,w0=0;function Ce(){throw Error(T(321))}function cs(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!ot(e[n],t[n]))return!1;return!0}function ds(e,t,n,r,i,o){if(fn=o,ae=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Oi.current=e===null||e.memoizedState===null?A0:E0,e=n(r,i),Pr){o=0;do{if(Pr=!1,Hr=0,25<=o)throw Error(T(301));o+=1,ve=me=null,t.updateQueue=null,Oi.current=P0,e=n(r,i)}while(Pr)}if(Oi.current=ao,t=me!==null&&me.next!==null,fn=0,ve=me=ae=null,lo=!1,t)throw Error(T(300));return e}function fs(){var e=Hr!==0;return Hr=0,e}function ct(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ve===null?ae.memoizedState=ve=e:ve=ve.next=e,ve}function Xe(){if(me===null){var e=ae.alternate;e=e!==null?e.memoizedState:null}else e=me.next;var t=ve===null?ae.memoizedState:ve.next;if(t!==null)ve=t,me=e;else{if(e===null)throw Error(T(310));me=e,e={memoizedState:me.memoizedState,baseState:me.baseState,baseQueue:me.baseQueue,queue:me.queue,next:null},ve===null?ae.memoizedState=ve=e:ve=ve.next=e}return ve}function br(e,t){return typeof t=="function"?t(e):t}function ul(e){var t=Xe(),n=t.queue;if(n===null)throw Error(T(311));n.lastRenderedReducer=e;var r=me,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var l=i.next;i.next=o.next,o.next=l}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=l=null,s=null,u=o;do{var d=u.lane;if((fn&d)===d)s!==null&&(s=s.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var m={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};s===null?(a=s=m,l=r):s=s.next=m,ae.lanes|=d,pn|=d}u=u.next}while(u!==null&&u!==o);s===null?l=r:s.next=a,ot(r,t.memoizedState)||(Le=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,ae.lanes|=o,pn|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function cl(e){var t=Xe(),n=t.queue;if(n===null)throw Error(T(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var l=i=i.next;do o=e(o,l.action),l=l.next;while(l!==i);ot(o,t.memoizedState)||(Le=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Yd(){}function Gd(e,t){var n=ae,r=Xe(),i=t(),o=!ot(r.memoizedState,i);if(o&&(r.memoizedState=i,Le=!0),r=r.queue,ps(Zd.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||ve!==null&&ve.memoizedState.tag&1){if(n.flags|=2048,Qr(9,Xd.bind(null,n,r,i,t),void 0,null),xe===null)throw Error(T(349));fn&30||Kd(n,t,i)}return i}function Kd(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ae.updateQueue,t===null?(t={lastEffect:null,stores:null},ae.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Xd(e,t,n,r){t.value=n,t.getSnapshot=r,Jd(t)&&qd(e)}function Zd(e,t,n){return n(function(){Jd(t)&&qd(e)})}function Jd(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!ot(e,n)}catch{return!0}}function qd(e){var t=Et(e,1);t!==null&&rt(t,e,1,-1)}function Ru(e){var t=ct();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:br,lastRenderedState:e},t.queue=e,e=e.dispatch=C0.bind(null,ae,e),[t.memoizedState,e]}function Qr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ae.updateQueue,t===null?(t={lastEffect:null,stores:null},ae.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function ef(){return Xe().memoizedState}function Mi(e,t,n,r){var i=ct();ae.flags|=e,i.memoizedState=Qr(1|t,n,void 0,r===void 0?null:r)}function jo(e,t,n,r){var i=Xe();r=r===void 0?null:r;var o=void 0;if(me!==null){var l=me.memoizedState;if(o=l.destroy,r!==null&&cs(r,l.deps)){i.memoizedState=Qr(t,n,o,r);return}}ae.flags|=e,i.memoizedState=Qr(1|t,n,o,r)}function Tu(e,t){return Mi(8390656,8,e,t)}function ps(e,t){return jo(2048,8,e,t)}function tf(e,t){return jo(4,2,e,t)}function nf(e,t){return jo(4,4,e,t)}function rf(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function of(e,t,n){return n=n!=null?n.concat([e]):null,jo(4,4,rf.bind(null,t,e),n)}function hs(){}function lf(e,t){var n=Xe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&cs(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function af(e,t){var n=Xe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&cs(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function sf(e,t,n){return fn&21?(ot(n,t)||(n=cd(),ae.lanes|=n,pn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Le=!0),e.memoizedState=n)}function S0(e,t){var n=Z;Z=n!==0&&4>n?n:4,e(!0);var r=sl.transition;sl.transition={};try{e(!1),t()}finally{Z=n,sl.transition=r}}function uf(){return Xe().memoizedState}function k0(e,t,n){var r=bt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},cf(e))df(t,n);else if(n=_d(e,t,n,r),n!==null){var i=ze();rt(n,e,r,i),ff(n,t,r)}}function C0(e,t,n){var r=bt(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(cf(e))df(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var l=t.lastRenderedState,a=o(l,n);if(i.hasEagerState=!0,i.eagerState=a,ot(a,l)){var s=t.interleaved;s===null?(i.next=i,os(t)):(i.next=s.next,s.next=i),t.interleaved=i;return}}catch{}finally{}n=_d(e,t,i,r),n!==null&&(i=ze(),rt(n,e,r,i),ff(n,t,r))}}function cf(e){var t=e.alternate;return e===ae||t!==null&&t===ae}function df(e,t){Pr=lo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function ff(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ba(e,n)}}var ao={readContext:Ke,useCallback:Ce,useContext:Ce,useEffect:Ce,useImperativeHandle:Ce,useInsertionEffect:Ce,useLayoutEffect:Ce,useMemo:Ce,useReducer:Ce,useRef:Ce,useState:Ce,useDebugValue:Ce,useDeferredValue:Ce,useTransition:Ce,useMutableSource:Ce,useSyncExternalStore:Ce,useId:Ce,unstable_isNewReconciler:!1},A0={readContext:Ke,useCallback:function(e,t){return ct().memoizedState=[e,t===void 0?null:t],e},useContext:Ke,useEffect:Tu,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Mi(4194308,4,rf.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Mi(4194308,4,e,t)},useInsertionEffect:function(e,t){return Mi(4,2,e,t)},useMemo:function(e,t){var n=ct();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=ct();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=k0.bind(null,ae,e),[r.memoizedState,e]},useRef:function(e){var t=ct();return e={current:e},t.memoizedState=e},useState:Ru,useDebugValue:hs,useDeferredValue:function(e){return ct().memoizedState=e},useTransition:function(){var e=Ru(!1),t=e[0];return e=S0.bind(null,e[1]),ct().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ae,i=ct();if(ie){if(n===void 0)throw Error(T(407));n=n()}else{if(n=t(),xe===null)throw Error(T(349));fn&30||Kd(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,Tu(Zd.bind(null,r,o,e),[e]),r.flags|=2048,Qr(9,Xd.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=ct(),t=xe.identifierPrefix;if(ie){var n=St,r=wt;n=(r&~(1<<32-nt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Hr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=w0++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},E0={readContext:Ke,useCallback:lf,useContext:Ke,useEffect:ps,useImperativeHandle:of,useInsertionEffect:tf,useLayoutEffect:nf,useMemo:af,useReducer:ul,useRef:ef,useState:function(){return ul(br)},useDebugValue:hs,useDeferredValue:function(e){var t=Xe();return sf(t,me.memoizedState,e)},useTransition:function(){var e=ul(br)[0],t=Xe().memoizedState;return[e,t]},useMutableSource:Yd,useSyncExternalStore:Gd,useId:uf,unstable_isNewReconciler:!1},P0={readContext:Ke,useCallback:lf,useContext:Ke,useEffect:ps,useImperativeHandle:of,useInsertionEffect:tf,useLayoutEffect:nf,useMemo:af,useReducer:cl,useRef:ef,useState:function(){return cl(br)},useDebugValue:hs,useDeferredValue:function(e){var t=Xe();return me===null?t.memoizedState=e:sf(t,me.memoizedState,e)},useTransition:function(){var e=cl(br)[0],t=Xe().memoizedState;return[e,t]},useMutableSource:Yd,useSyncExternalStore:Gd,useId:uf,unstable_isNewReconciler:!1};function bn(e,t){try{var n="",r=t;do n+=eh(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function dl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function oa(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var j0=typeof WeakMap=="function"?WeakMap:Map;function pf(e,t,n){n=kt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){uo||(uo=!0,ma=r),oa(e,t)},n}function hf(e,t,n){n=kt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){oa(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){oa(e,t),typeof r!="function"&&(Ht===null?Ht=new Set([this]):Ht.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function Nu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new j0;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=$0.bind(null,e,t,n),t.then(e,e))}function zu(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Iu(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=kt(-1,1),t.tag=2,Wt(n,t,1))),n.lanes|=1),e)}var R0=jt.ReactCurrentOwner,Le=!1;function Ne(e,t,n,r){t.child=e===null?bd(t,null,n,r):Wn(t,e.child,n,r)}function Ou(e,t,n,r,i){n=n.render;var o=t.ref;return Fn(t,i),r=ds(e,t,n,r,o,i),n=fs(),e!==null&&!Le?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Pt(e,t,i)):(ie&&n&&qa(t),t.flags|=1,Ne(e,t,r,i),t.child)}function Mu(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!ks(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,mf(e,t,o,r,i)):(e=Ui(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var l=o.memoizedProps;if(n=n.compare,n=n!==null?n:Ur,n(l,r)&&e.ref===t.ref)return Pt(e,t,i)}return t.flags|=1,e=Qt(o,r),e.ref=t.ref,e.return=t,t.child=e}function mf(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(Ur(o,r)&&e.ref===t.ref)if(Le=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(Le=!0);else return t.lanes=e.lanes,Pt(e,t,i)}return la(e,t,n,r,i)}function gf(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},q(zn,Be),Be|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,q(zn,Be),Be|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,q(zn,Be),Be|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,q(zn,Be),Be|=r;return Ne(e,t,i,n),t.child}function vf(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function la(e,t,n,r,i){var o=Fe(n)?cn:je.current;return o=$n(t,o),Fn(t,i),n=ds(e,t,n,r,o,i),r=fs(),e!==null&&!Le?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Pt(e,t,i)):(ie&&r&&qa(t),t.flags|=1,Ne(e,t,n,i),t.child)}function Lu(e,t,n,r,i){if(Fe(n)){var o=!0;qi(t)}else o=!1;if(Fn(t,i),t.stateNode===null)Li(e,t),Wd(t,n,r),ia(t,n,r,i),r=!0;else if(e===null){var l=t.stateNode,a=t.memoizedProps;l.props=a;var s=l.context,u=n.contextType;typeof u=="object"&&u!==null?u=Ke(u):(u=Fe(n)?cn:je.current,u=$n(t,u));var d=n.getDerivedStateFromProps,m=typeof d=="function"||typeof l.getSnapshotBeforeUpdate=="function";m||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==r||s!==u)&&Pu(t,l,r,u),It=!1;var p=t.memoizedState;l.state=p,io(t,r,l,i),s=t.memoizedState,a!==r||p!==s||De.current||It?(typeof d=="function"&&(ra(t,n,d,r),s=t.memoizedState),(a=It||Eu(t,n,a,r,p,s,u))?(m||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),l.props=r,l.state=s,l.context=u,r=a):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,$d(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:qe(t.type,a),l.props=u,m=t.pendingProps,p=l.context,s=n.contextType,typeof s=="object"&&s!==null?s=Ke(s):(s=Fe(n)?cn:je.current,s=$n(t,s));var w=n.getDerivedStateFromProps;(d=typeof w=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==m||p!==s)&&Pu(t,l,r,s),It=!1,p=t.memoizedState,l.state=p,io(t,r,l,i);var x=t.memoizedState;a!==m||p!==x||De.current||It?(typeof w=="function"&&(ra(t,n,w,r),x=t.memoizedState),(u=It||Eu(t,n,u,r,p,x,s)||!1)?(d||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,x,s),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,x,s)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=x),l.props=r,l.state=x,l.context=s,r=u):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),r=!1)}return aa(e,t,n,r,o,i)}function aa(e,t,n,r,i,o){vf(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return i&&wu(t,n,!1),Pt(e,t,o);r=t.stateNode,R0.current=t;var a=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=Wn(t,e.child,null,o),t.child=Wn(t,null,a,o)):Ne(e,t,a,o),t.memoizedState=r.state,i&&wu(t,n,!0),t.child}function yf(e){var t=e.stateNode;t.pendingContext?xu(e,t.pendingContext,t.pendingContext!==t.context):t.context&&xu(e,t.context,!1),as(e,t.containerInfo)}function Du(e,t,n,r,i){return Vn(),ts(i),t.flags|=256,Ne(e,t,n,r),t.child}var sa={dehydrated:null,treeContext:null,retryLane:0};function ua(e){return{baseLanes:e,cachePool:null,transitions:null}}function xf(e,t,n){var r=t.pendingProps,i=le.current,o=!1,l=(t.flags&128)!==0,a;if((a=l)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),q(le,i&1),e===null)return ta(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,o?(r=t.mode,o=t.child,l={mode:"hidden",children:l},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=l):o=No(l,r,0,null),e=sn(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=ua(n),t.memoizedState=sa,e):ms(t,l));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return T0(e,t,l,r,a,i,n);if(o){o=r.fallback,l=t.mode,i=e.child,a=i.sibling;var s={mode:"hidden",children:r.children};return!(l&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=Qt(i,s),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=Qt(a,o):(o=sn(o,l,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,l=e.child.memoizedState,l=l===null?ua(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},o.memoizedState=l,o.childLanes=e.childLanes&~n,t.memoizedState=sa,r}return o=e.child,e=o.sibling,r=Qt(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function ms(e,t){return t=No({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function yi(e,t,n,r){return r!==null&&ts(r),Wn(t,e.child,null,n),e=ms(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function T0(e,t,n,r,i,o,l){if(n)return t.flags&256?(t.flags&=-257,r=dl(Error(T(422))),yi(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=No({mode:"visible",children:r.children},i,0,null),o=sn(o,i,l,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&Wn(t,e.child,null,l),t.child.memoizedState=ua(l),t.memoizedState=sa,o);if(!(t.mode&1))return yi(e,t,l,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(T(419)),r=dl(o,r,void 0),yi(e,t,l,r)}if(a=(l&e.childLanes)!==0,Le||a){if(r=xe,r!==null){switch(l&-l){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|l)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Et(e,i),rt(r,e,i,-1))}return Ss(),r=dl(Error(T(421))),yi(e,t,l,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=V0.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,_e=Vt(i.nextSibling),$e=t,ie=!0,tt=null,e!==null&&(be[Qe++]=wt,be[Qe++]=St,be[Qe++]=dn,wt=e.id,St=e.overflow,dn=t),t=ms(t,r.children),t.flags|=4096,t)}function Fu(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),na(e.return,t,n)}function fl(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function wf(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(Ne(e,t,r.children,n),r=le.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Fu(e,n,t);else if(e.tag===19)Fu(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(q(le,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&oo(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),fl(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&oo(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}fl(t,!0,n,null,o);break;case"together":fl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Li(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Pt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),pn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(T(153));if(t.child!==null){for(e=t.child,n=Qt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Qt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function N0(e,t,n){switch(t.tag){case 3:yf(t),Vn();break;case 5:Qd(t);break;case 1:Fe(t.type)&&qi(t);break;case 4:as(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;q(no,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(q(le,le.current&1),t.flags|=128,null):n&t.child.childLanes?xf(e,t,n):(q(le,le.current&1),e=Pt(e,t,n),e!==null?e.sibling:null);q(le,le.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return wf(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),q(le,le.current),r)break;return null;case 22:case 23:return t.lanes=0,gf(e,t,n)}return Pt(e,t,n)}var Sf,ca,kf,Cf;Sf=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ca=function(){};kf=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,on(pt.current);var o=null;switch(n){case"input":i=Il(e,i),r=Il(e,r),o=[];break;case"select":i=se({},i,{value:void 0}),r=se({},r,{value:void 0}),o=[];break;case"textarea":i=Ll(e,i),r=Ll(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Zi)}Fl(n,r);var l;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(l in a)a.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(zr.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var s=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&s!==a&&(s!=null||a!=null))if(u==="style")if(a){for(l in a)!a.hasOwnProperty(l)||s&&s.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in s)s.hasOwnProperty(l)&&a[l]!==s[l]&&(n||(n={}),n[l]=s[l])}else n||(o||(o=[]),o.push(u,n)),n=s;else u==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,a=a?a.__html:void 0,s!=null&&a!==s&&(o=o||[]).push(u,s)):u==="children"?typeof s!="string"&&typeof s!="number"||(o=o||[]).push(u,""+s):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(zr.hasOwnProperty(u)?(s!=null&&u==="onScroll"&&ee("scroll",e),o||a===s||(o=[])):(o=o||[]).push(u,s))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};Cf=function(e,t,n,r){n!==r&&(t.flags|=4)};function fr(e,t){if(!ie)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ae(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function z0(e,t,n){var r=t.pendingProps;switch(es(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ae(t),null;case 1:return Fe(t.type)&&Ji(),Ae(t),null;case 3:return r=t.stateNode,Hn(),ne(De),ne(je),us(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(gi(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,tt!==null&&(ya(tt),tt=null))),ca(e,t),Ae(t),null;case 5:ss(t);var i=on(Wr.current);if(n=t.type,e!==null&&t.stateNode!=null)kf(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(T(166));return Ae(t),null}if(e=on(pt.current),gi(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[dt]=t,r[$r]=o,e=(t.mode&1)!==0,n){case"dialog":ee("cancel",r),ee("close",r);break;case"iframe":case"object":case"embed":ee("load",r);break;case"video":case"audio":for(i=0;i<wr.length;i++)ee(wr[i],r);break;case"source":ee("error",r);break;case"img":case"image":case"link":ee("error",r),ee("load",r);break;case"details":ee("toggle",r);break;case"input":Qs(r,o),ee("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},ee("invalid",r);break;case"textarea":Gs(r,o),ee("invalid",r)}Fl(n,o),i=null;for(var l in o)if(o.hasOwnProperty(l)){var a=o[l];l==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&mi(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&mi(r.textContent,a,e),i=["children",""+a]):zr.hasOwnProperty(l)&&a!=null&&l==="onScroll"&&ee("scroll",r)}switch(n){case"input":ai(r),Ys(r,o,!0);break;case"textarea":ai(r),Ks(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Zi)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Kc(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[dt]=t,e[$r]=r,Sf(e,t,!1,!1),t.stateNode=e;e:{switch(l=Ul(n,r),n){case"dialog":ee("cancel",e),ee("close",e),i=r;break;case"iframe":case"object":case"embed":ee("load",e),i=r;break;case"video":case"audio":for(i=0;i<wr.length;i++)ee(wr[i],e);i=r;break;case"source":ee("error",e),i=r;break;case"img":case"image":case"link":ee("error",e),ee("load",e),i=r;break;case"details":ee("toggle",e),i=r;break;case"input":Qs(e,r),i=Il(e,r),ee("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=se({},r,{value:void 0}),ee("invalid",e);break;case"textarea":Gs(e,r),i=Ll(e,r),ee("invalid",e);break;default:i=r}Fl(n,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var s=a[o];o==="style"?Jc(e,s):o==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&Xc(e,s)):o==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&Ir(e,s):typeof s=="number"&&Ir(e,""+s):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(zr.hasOwnProperty(o)?s!=null&&o==="onScroll"&&ee("scroll",e):s!=null&&Ba(e,o,s,l))}switch(n){case"input":ai(e),Ys(e,r,!1);break;case"textarea":ai(e),Ks(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Kt(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?On(e,!!r.multiple,o,!1):r.defaultValue!=null&&On(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Zi)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ae(t),null;case 6:if(e&&t.stateNode!=null)Cf(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(T(166));if(n=on(Wr.current),on(pt.current),gi(t)){if(r=t.stateNode,n=t.memoizedProps,r[dt]=t,(o=r.nodeValue!==n)&&(e=$e,e!==null))switch(e.tag){case 3:mi(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&mi(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[dt]=t,t.stateNode=r}return Ae(t),null;case 13:if(ne(le),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ie&&_e!==null&&t.mode&1&&!(t.flags&128))Bd(),Vn(),t.flags|=98560,o=!1;else if(o=gi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(T(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(T(317));o[dt]=t}else Vn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ae(t),o=!1}else tt!==null&&(ya(tt),tt=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||le.current&1?ge===0&&(ge=3):Ss())),t.updateQueue!==null&&(t.flags|=4),Ae(t),null);case 4:return Hn(),ca(e,t),e===null&&Br(t.stateNode.containerInfo),Ae(t),null;case 10:return is(t.type._context),Ae(t),null;case 17:return Fe(t.type)&&Ji(),Ae(t),null;case 19:if(ne(le),o=t.memoizedState,o===null)return Ae(t),null;if(r=(t.flags&128)!==0,l=o.rendering,l===null)if(r)fr(o,!1);else{if(ge!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=oo(e),l!==null){for(t.flags|=128,fr(o,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,l=o.alternate,l===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=l.childLanes,o.lanes=l.lanes,o.child=l.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=l.memoizedProps,o.memoizedState=l.memoizedState,o.updateQueue=l.updateQueue,o.type=l.type,e=l.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return q(le,le.current&1|2),t.child}e=e.sibling}o.tail!==null&&ce()>Qn&&(t.flags|=128,r=!0,fr(o,!1),t.lanes=4194304)}else{if(!r)if(e=oo(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),fr(o,!0),o.tail===null&&o.tailMode==="hidden"&&!l.alternate&&!ie)return Ae(t),null}else 2*ce()-o.renderingStartTime>Qn&&n!==1073741824&&(t.flags|=128,r=!0,fr(o,!1),t.lanes=4194304);o.isBackwards?(l.sibling=t.child,t.child=l):(n=o.last,n!==null?n.sibling=l:t.child=l,o.last=l)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=ce(),t.sibling=null,n=le.current,q(le,r?n&1|2:n&1),t):(Ae(t),null);case 22:case 23:return ws(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Be&1073741824&&(Ae(t),t.subtreeFlags&6&&(t.flags|=8192)):Ae(t),null;case 24:return null;case 25:return null}throw Error(T(156,t.tag))}function I0(e,t){switch(es(t),t.tag){case 1:return Fe(t.type)&&Ji(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Hn(),ne(De),ne(je),us(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return ss(t),null;case 13:if(ne(le),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(T(340));Vn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ne(le),null;case 4:return Hn(),null;case 10:return is(t.type._context),null;case 22:case 23:return ws(),null;case 24:return null;default:return null}}var xi=!1,Ee=!1,O0=typeof WeakSet=="function"?WeakSet:Set,D=null;function Nn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ue(e,t,r)}else n.current=null}function da(e,t,n){try{n()}catch(r){ue(e,t,r)}}var Uu=!1;function M0(e,t){if(Gl=Gi,e=Pd(),Ja(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var l=0,a=-1,s=-1,u=0,d=0,m=e,p=null;t:for(;;){for(var w;m!==n||i!==0&&m.nodeType!==3||(a=l+i),m!==o||r!==0&&m.nodeType!==3||(s=l+r),m.nodeType===3&&(l+=m.nodeValue.length),(w=m.firstChild)!==null;)p=m,m=w;for(;;){if(m===e)break t;if(p===n&&++u===i&&(a=l),p===o&&++d===r&&(s=l),(w=m.nextSibling)!==null)break;m=p,p=m.parentNode}m=w}n=a===-1||s===-1?null:{start:a,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(Kl={focusedElem:e,selectionRange:n},Gi=!1,D=t;D!==null;)if(t=D,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,D=e;else for(;D!==null;){t=D;try{var x=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var S=x.memoizedProps,N=x.memoizedState,h=t.stateNode,c=h.getSnapshotBeforeUpdate(t.elementType===t.type?S:qe(t.type,S),N);h.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var f=t.stateNode.containerInfo;f.nodeType===1?f.textContent="":f.nodeType===9&&f.documentElement&&f.removeChild(f.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(T(163))}}catch(v){ue(t,t.return,v)}if(e=t.sibling,e!==null){e.return=t.return,D=e;break}D=t.return}return x=Uu,Uu=!1,x}function jr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&da(t,n,o)}i=i.next}while(i!==r)}}function Ro(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function fa(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Af(e){var t=e.alternate;t!==null&&(e.alternate=null,Af(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[dt],delete t[$r],delete t[Jl],delete t[g0],delete t[v0])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Ef(e){return e.tag===5||e.tag===3||e.tag===4}function Bu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Ef(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function pa(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Zi));else if(r!==4&&(e=e.child,e!==null))for(pa(e,t,n),e=e.sibling;e!==null;)pa(e,t,n),e=e.sibling}function ha(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(ha(e,t,n),e=e.sibling;e!==null;)ha(e,t,n),e=e.sibling}var we=null,et=!1;function Rt(e,t,n){for(n=n.child;n!==null;)Pf(e,t,n),n=n.sibling}function Pf(e,t,n){if(ft&&typeof ft.onCommitFiberUnmount=="function")try{ft.onCommitFiberUnmount(wo,n)}catch{}switch(n.tag){case 5:Ee||Nn(n,t);case 6:var r=we,i=et;we=null,Rt(e,t,n),we=r,et=i,we!==null&&(et?(e=we,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):we.removeChild(n.stateNode));break;case 18:we!==null&&(et?(e=we,n=n.stateNode,e.nodeType===8?ol(e.parentNode,n):e.nodeType===1&&ol(e,n),Dr(e)):ol(we,n.stateNode));break;case 4:r=we,i=et,we=n.stateNode.containerInfo,et=!0,Rt(e,t,n),we=r,et=i;break;case 0:case 11:case 14:case 15:if(!Ee&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,l=o.destroy;o=o.tag,l!==void 0&&(o&2||o&4)&&da(n,t,l),i=i.next}while(i!==r)}Rt(e,t,n);break;case 1:if(!Ee&&(Nn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){ue(n,t,a)}Rt(e,t,n);break;case 21:Rt(e,t,n);break;case 22:n.mode&1?(Ee=(r=Ee)||n.memoizedState!==null,Rt(e,t,n),Ee=r):Rt(e,t,n);break;default:Rt(e,t,n)}}function _u(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new O0),t.forEach(function(r){var i=W0.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Je(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,l=t,a=l;e:for(;a!==null;){switch(a.tag){case 5:we=a.stateNode,et=!1;break e;case 3:we=a.stateNode.containerInfo,et=!0;break e;case 4:we=a.stateNode.containerInfo,et=!0;break e}a=a.return}if(we===null)throw Error(T(160));Pf(o,l,i),we=null,et=!1;var s=i.alternate;s!==null&&(s.return=null),i.return=null}catch(u){ue(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)jf(t,e),t=t.sibling}function jf(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Je(t,e),ut(e),r&4){try{jr(3,e,e.return),Ro(3,e)}catch(S){ue(e,e.return,S)}try{jr(5,e,e.return)}catch(S){ue(e,e.return,S)}}break;case 1:Je(t,e),ut(e),r&512&&n!==null&&Nn(n,n.return);break;case 5:if(Je(t,e),ut(e),r&512&&n!==null&&Nn(n,n.return),e.flags&32){var i=e.stateNode;try{Ir(i,"")}catch(S){ue(e,e.return,S)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,l=n!==null?n.memoizedProps:o,a=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&Yc(i,o),Ul(a,l);var u=Ul(a,o);for(l=0;l<s.length;l+=2){var d=s[l],m=s[l+1];d==="style"?Jc(i,m):d==="dangerouslySetInnerHTML"?Xc(i,m):d==="children"?Ir(i,m):Ba(i,d,m,u)}switch(a){case"input":Ol(i,o);break;case"textarea":Gc(i,o);break;case"select":var p=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var w=o.value;w!=null?On(i,!!o.multiple,w,!1):p!==!!o.multiple&&(o.defaultValue!=null?On(i,!!o.multiple,o.defaultValue,!0):On(i,!!o.multiple,o.multiple?[]:"",!1))}i[$r]=o}catch(S){ue(e,e.return,S)}}break;case 6:if(Je(t,e),ut(e),r&4){if(e.stateNode===null)throw Error(T(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(S){ue(e,e.return,S)}}break;case 3:if(Je(t,e),ut(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Dr(t.containerInfo)}catch(S){ue(e,e.return,S)}break;case 4:Je(t,e),ut(e);break;case 13:Je(t,e),ut(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(ys=ce())),r&4&&_u(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(Ee=(u=Ee)||d,Je(t,e),Ee=u):Je(t,e),ut(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(D=e,d=e.child;d!==null;){for(m=D=d;D!==null;){switch(p=D,w=p.child,p.tag){case 0:case 11:case 14:case 15:jr(4,p,p.return);break;case 1:Nn(p,p.return);var x=p.stateNode;if(typeof x.componentWillUnmount=="function"){r=p,n=p.return;try{t=r,x.props=t.memoizedProps,x.state=t.memoizedState,x.componentWillUnmount()}catch(S){ue(r,n,S)}}break;case 5:Nn(p,p.return);break;case 22:if(p.memoizedState!==null){Vu(m);continue}}w!==null?(w.return=p,D=w):Vu(m)}d=d.sibling}e:for(d=null,m=e;;){if(m.tag===5){if(d===null){d=m;try{i=m.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=m.stateNode,s=m.memoizedProps.style,l=s!=null&&s.hasOwnProperty("display")?s.display:null,a.style.display=Zc("display",l))}catch(S){ue(e,e.return,S)}}}else if(m.tag===6){if(d===null)try{m.stateNode.nodeValue=u?"":m.memoizedProps}catch(S){ue(e,e.return,S)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;d===m&&(d=null),m=m.return}d===m&&(d=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:Je(t,e),ut(e),r&4&&_u(e);break;case 21:break;default:Je(t,e),ut(e)}}function ut(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Ef(n)){var r=n;break e}n=n.return}throw Error(T(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Ir(i,""),r.flags&=-33);var o=Bu(e);ha(e,o,i);break;case 3:case 4:var l=r.stateNode.containerInfo,a=Bu(e);pa(e,a,l);break;default:throw Error(T(161))}}catch(s){ue(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function L0(e,t,n){D=e,Rf(e)}function Rf(e,t,n){for(var r=(e.mode&1)!==0;D!==null;){var i=D,o=i.child;if(i.tag===22&&r){var l=i.memoizedState!==null||xi;if(!l){var a=i.alternate,s=a!==null&&a.memoizedState!==null||Ee;a=xi;var u=Ee;if(xi=l,(Ee=s)&&!u)for(D=i;D!==null;)l=D,s=l.child,l.tag===22&&l.memoizedState!==null?Wu(i):s!==null?(s.return=l,D=s):Wu(i);for(;o!==null;)D=o,Rf(o),o=o.sibling;D=i,xi=a,Ee=u}$u(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,D=o):$u(e)}}function $u(e){for(;D!==null;){var t=D;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Ee||Ro(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Ee)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:qe(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Au(t,o,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Au(t,l,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var m=d.dehydrated;m!==null&&Dr(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(T(163))}Ee||t.flags&512&&fa(t)}catch(p){ue(t,t.return,p)}}if(t===e){D=null;break}if(n=t.sibling,n!==null){n.return=t.return,D=n;break}D=t.return}}function Vu(e){for(;D!==null;){var t=D;if(t===e){D=null;break}var n=t.sibling;if(n!==null){n.return=t.return,D=n;break}D=t.return}}function Wu(e){for(;D!==null;){var t=D;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Ro(4,t)}catch(s){ue(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(s){ue(t,i,s)}}var o=t.return;try{fa(t)}catch(s){ue(t,o,s)}break;case 5:var l=t.return;try{fa(t)}catch(s){ue(t,l,s)}}}catch(s){ue(t,t.return,s)}if(t===e){D=null;break}var a=t.sibling;if(a!==null){a.return=t.return,D=a;break}D=t.return}}var D0=Math.ceil,so=jt.ReactCurrentDispatcher,gs=jt.ReactCurrentOwner,Ge=jt.ReactCurrentBatchConfig,G=0,xe=null,pe=null,Se=0,Be=0,zn=Jt(0),ge=0,Yr=null,pn=0,To=0,vs=0,Rr=null,Me=null,ys=0,Qn=1/0,vt=null,uo=!1,ma=null,Ht=null,wi=!1,Ft=null,co=0,Tr=0,ga=null,Di=-1,Fi=0;function ze(){return G&6?ce():Di!==-1?Di:Di=ce()}function bt(e){return e.mode&1?G&2&&Se!==0?Se&-Se:x0.transition!==null?(Fi===0&&(Fi=cd()),Fi):(e=Z,e!==0||(e=window.event,e=e===void 0?16:vd(e.type)),e):1}function rt(e,t,n,r){if(50<Tr)throw Tr=0,ga=null,Error(T(185));qr(e,n,r),(!(G&2)||e!==xe)&&(e===xe&&(!(G&2)&&(To|=n),ge===4&&Mt(e,Se)),Ue(e,r),n===1&&G===0&&!(t.mode&1)&&(Qn=ce()+500,Eo&&qt()))}function Ue(e,t){var n=e.callbackNode;xh(e,t);var r=Yi(e,e===xe?Se:0);if(r===0)n!==null&&Js(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Js(n),t===1)e.tag===0?y0(Hu.bind(null,e)):Dd(Hu.bind(null,e)),h0(function(){!(G&6)&&qt()}),n=null;else{switch(dd(r)){case 1:n=Ha;break;case 4:n=sd;break;case 16:n=Qi;break;case 536870912:n=ud;break;default:n=Qi}n=Df(n,Tf.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Tf(e,t){if(Di=-1,Fi=0,G&6)throw Error(T(327));var n=e.callbackNode;if(Un()&&e.callbackNode!==n)return null;var r=Yi(e,e===xe?Se:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=fo(e,r);else{t=r;var i=G;G|=2;var o=zf();(xe!==e||Se!==t)&&(vt=null,Qn=ce()+500,an(e,t));do try{B0();break}catch(a){Nf(e,a)}while(1);rs(),so.current=o,G=i,pe!==null?t=0:(xe=null,Se=0,t=ge)}if(t!==0){if(t===2&&(i=Wl(e),i!==0&&(r=i,t=va(e,i))),t===1)throw n=Yr,an(e,0),Mt(e,r),Ue(e,ce()),n;if(t===6)Mt(e,r);else{if(i=e.current.alternate,!(r&30)&&!F0(i)&&(t=fo(e,r),t===2&&(o=Wl(e),o!==0&&(r=o,t=va(e,o))),t===1))throw n=Yr,an(e,0),Mt(e,r),Ue(e,ce()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(T(345));case 2:tn(e,Me,vt);break;case 3:if(Mt(e,r),(r&130023424)===r&&(t=ys+500-ce(),10<t)){if(Yi(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){ze(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Zl(tn.bind(null,e,Me,vt),t);break}tn(e,Me,vt);break;case 4:if(Mt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var l=31-nt(r);o=1<<l,l=t[l],l>i&&(i=l),r&=~o}if(r=i,r=ce()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*D0(r/1960))-r,10<r){e.timeoutHandle=Zl(tn.bind(null,e,Me,vt),r);break}tn(e,Me,vt);break;case 5:tn(e,Me,vt);break;default:throw Error(T(329))}}}return Ue(e,ce()),e.callbackNode===n?Tf.bind(null,e):null}function va(e,t){var n=Rr;return e.current.memoizedState.isDehydrated&&(an(e,t).flags|=256),e=fo(e,t),e!==2&&(t=Me,Me=n,t!==null&&ya(t)),e}function ya(e){Me===null?Me=e:Me.push.apply(Me,e)}function F0(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!ot(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Mt(e,t){for(t&=~vs,t&=~To,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-nt(t),r=1<<n;e[n]=-1,t&=~r}}function Hu(e){if(G&6)throw Error(T(327));Un();var t=Yi(e,0);if(!(t&1))return Ue(e,ce()),null;var n=fo(e,t);if(e.tag!==0&&n===2){var r=Wl(e);r!==0&&(t=r,n=va(e,r))}if(n===1)throw n=Yr,an(e,0),Mt(e,t),Ue(e,ce()),n;if(n===6)throw Error(T(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,tn(e,Me,vt),Ue(e,ce()),null}function xs(e,t){var n=G;G|=1;try{return e(t)}finally{G=n,G===0&&(Qn=ce()+500,Eo&&qt())}}function hn(e){Ft!==null&&Ft.tag===0&&!(G&6)&&Un();var t=G;G|=1;var n=Ge.transition,r=Z;try{if(Ge.transition=null,Z=1,e)return e()}finally{Z=r,Ge.transition=n,G=t,!(G&6)&&qt()}}function ws(){Be=zn.current,ne(zn)}function an(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,p0(n)),pe!==null)for(n=pe.return;n!==null;){var r=n;switch(es(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ji();break;case 3:Hn(),ne(De),ne(je),us();break;case 5:ss(r);break;case 4:Hn();break;case 13:ne(le);break;case 19:ne(le);break;case 10:is(r.type._context);break;case 22:case 23:ws()}n=n.return}if(xe=e,pe=e=Qt(e.current,null),Se=Be=t,ge=0,Yr=null,vs=To=pn=0,Me=Rr=null,rn!==null){for(t=0;t<rn.length;t++)if(n=rn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var l=o.next;o.next=i,r.next=l}n.pending=r}rn=null}return e}function Nf(e,t){do{var n=pe;try{if(rs(),Oi.current=ao,lo){for(var r=ae.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}lo=!1}if(fn=0,ve=me=ae=null,Pr=!1,Hr=0,gs.current=null,n===null||n.return===null){ge=1,Yr=t,pe=null;break}e:{var o=e,l=n.return,a=n,s=t;if(t=Se,a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var u=s,d=a,m=d.tag;if(!(d.mode&1)&&(m===0||m===11||m===15)){var p=d.alternate;p?(d.updateQueue=p.updateQueue,d.memoizedState=p.memoizedState,d.lanes=p.lanes):(d.updateQueue=null,d.memoizedState=null)}var w=zu(l);if(w!==null){w.flags&=-257,Iu(w,l,a,o,t),w.mode&1&&Nu(o,u,t),t=w,s=u;var x=t.updateQueue;if(x===null){var S=new Set;S.add(s),t.updateQueue=S}else x.add(s);break e}else{if(!(t&1)){Nu(o,u,t),Ss();break e}s=Error(T(426))}}else if(ie&&a.mode&1){var N=zu(l);if(N!==null){!(N.flags&65536)&&(N.flags|=256),Iu(N,l,a,o,t),ts(bn(s,a));break e}}o=s=bn(s,a),ge!==4&&(ge=2),Rr===null?Rr=[o]:Rr.push(o),o=l;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var h=pf(o,s,t);Cu(o,h);break e;case 1:a=s;var c=o.type,f=o.stateNode;if(!(o.flags&128)&&(typeof c.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Ht===null||!Ht.has(f)))){o.flags|=65536,t&=-t,o.lanes|=t;var v=hf(o,a,t);Cu(o,v);break e}}o=o.return}while(o!==null)}Of(n)}catch(k){t=k,pe===n&&n!==null&&(pe=n=n.return);continue}break}while(1)}function zf(){var e=so.current;return so.current=ao,e===null?ao:e}function Ss(){(ge===0||ge===3||ge===2)&&(ge=4),xe===null||!(pn&268435455)&&!(To&268435455)||Mt(xe,Se)}function fo(e,t){var n=G;G|=2;var r=zf();(xe!==e||Se!==t)&&(vt=null,an(e,t));do try{U0();break}catch(i){Nf(e,i)}while(1);if(rs(),G=n,so.current=r,pe!==null)throw Error(T(261));return xe=null,Se=0,ge}function U0(){for(;pe!==null;)If(pe)}function B0(){for(;pe!==null&&!ch();)If(pe)}function If(e){var t=Lf(e.alternate,e,Be);e.memoizedProps=e.pendingProps,t===null?Of(e):pe=t,gs.current=null}function Of(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=I0(n,t),n!==null){n.flags&=32767,pe=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ge=6,pe=null;return}}else if(n=z0(n,t,Be),n!==null){pe=n;return}if(t=t.sibling,t!==null){pe=t;return}pe=t=e}while(t!==null);ge===0&&(ge=5)}function tn(e,t,n){var r=Z,i=Ge.transition;try{Ge.transition=null,Z=1,_0(e,t,n,r)}finally{Ge.transition=i,Z=r}return null}function _0(e,t,n,r){do Un();while(Ft!==null);if(G&6)throw Error(T(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(T(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(wh(e,o),e===xe&&(pe=xe=null,Se=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||wi||(wi=!0,Df(Qi,function(){return Un(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Ge.transition,Ge.transition=null;var l=Z;Z=1;var a=G;G|=4,gs.current=null,M0(e,n),jf(n,e),l0(Kl),Gi=!!Gl,Kl=Gl=null,e.current=n,L0(n),dh(),G=a,Z=l,Ge.transition=o}else e.current=n;if(wi&&(wi=!1,Ft=e,co=i),o=e.pendingLanes,o===0&&(Ht=null),hh(n.stateNode),Ue(e,ce()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(uo)throw uo=!1,e=ma,ma=null,e;return co&1&&e.tag!==0&&Un(),o=e.pendingLanes,o&1?e===ga?Tr++:(Tr=0,ga=e):Tr=0,qt(),null}function Un(){if(Ft!==null){var e=dd(co),t=Ge.transition,n=Z;try{if(Ge.transition=null,Z=16>e?16:e,Ft===null)var r=!1;else{if(e=Ft,Ft=null,co=0,G&6)throw Error(T(331));var i=G;for(G|=4,D=e.current;D!==null;){var o=D,l=o.child;if(D.flags&16){var a=o.deletions;if(a!==null){for(var s=0;s<a.length;s++){var u=a[s];for(D=u;D!==null;){var d=D;switch(d.tag){case 0:case 11:case 15:jr(8,d,o)}var m=d.child;if(m!==null)m.return=d,D=m;else for(;D!==null;){d=D;var p=d.sibling,w=d.return;if(Af(d),d===u){D=null;break}if(p!==null){p.return=w,D=p;break}D=w}}}var x=o.alternate;if(x!==null){var S=x.child;if(S!==null){x.child=null;do{var N=S.sibling;S.sibling=null,S=N}while(S!==null)}}D=o}}if(o.subtreeFlags&2064&&l!==null)l.return=o,D=l;else e:for(;D!==null;){if(o=D,o.flags&2048)switch(o.tag){case 0:case 11:case 15:jr(9,o,o.return)}var h=o.sibling;if(h!==null){h.return=o.return,D=h;break e}D=o.return}}var c=e.current;for(D=c;D!==null;){l=D;var f=l.child;if(l.subtreeFlags&2064&&f!==null)f.return=l,D=f;else e:for(l=c;D!==null;){if(a=D,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Ro(9,a)}}catch(k){ue(a,a.return,k)}if(a===l){D=null;break e}var v=a.sibling;if(v!==null){v.return=a.return,D=v;break e}D=a.return}}if(G=i,qt(),ft&&typeof ft.onPostCommitFiberRoot=="function")try{ft.onPostCommitFiberRoot(wo,e)}catch{}r=!0}return r}finally{Z=n,Ge.transition=t}}return!1}function bu(e,t,n){t=bn(n,t),t=pf(e,t,1),e=Wt(e,t,1),t=ze(),e!==null&&(qr(e,1,t),Ue(e,t))}function ue(e,t,n){if(e.tag===3)bu(e,e,n);else for(;t!==null;){if(t.tag===3){bu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ht===null||!Ht.has(r))){e=bn(n,e),e=hf(t,e,1),t=Wt(t,e,1),e=ze(),t!==null&&(qr(t,1,e),Ue(t,e));break}}t=t.return}}function $0(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ze(),e.pingedLanes|=e.suspendedLanes&n,xe===e&&(Se&n)===n&&(ge===4||ge===3&&(Se&130023424)===Se&&500>ce()-ys?an(e,0):vs|=n),Ue(e,t)}function Mf(e,t){t===0&&(e.mode&1?(t=ci,ci<<=1,!(ci&130023424)&&(ci=4194304)):t=1);var n=ze();e=Et(e,t),e!==null&&(qr(e,t,n),Ue(e,n))}function V0(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Mf(e,n)}function W0(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(T(314))}r!==null&&r.delete(t),Mf(e,n)}var Lf;Lf=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||De.current)Le=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Le=!1,N0(e,t,n);Le=!!(e.flags&131072)}else Le=!1,ie&&t.flags&1048576&&Fd(t,to,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Li(e,t),e=t.pendingProps;var i=$n(t,je.current);Fn(t,n),i=ds(null,t,r,e,i,n);var o=fs();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Fe(r)?(o=!0,qi(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,ls(t),i.updater=Po,t.stateNode=i,i._reactInternals=t,ia(t,r,e,n),t=aa(null,t,r,!0,o,n)):(t.tag=0,ie&&o&&qa(t),Ne(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Li(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=b0(r),e=qe(r,e),i){case 0:t=la(null,t,r,e,n);break e;case 1:t=Lu(null,t,r,e,n);break e;case 11:t=Ou(null,t,r,e,n);break e;case 14:t=Mu(null,t,r,qe(r.type,e),n);break e}throw Error(T(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:qe(r,i),la(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:qe(r,i),Lu(e,t,r,i,n);case 3:e:{if(yf(t),e===null)throw Error(T(387));r=t.pendingProps,o=t.memoizedState,i=o.element,$d(e,t),io(t,r,null,n);var l=t.memoizedState;if(r=l.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=bn(Error(T(423)),t),t=Du(e,t,r,n,i);break e}else if(r!==i){i=bn(Error(T(424)),t),t=Du(e,t,r,n,i);break e}else for(_e=Vt(t.stateNode.containerInfo.firstChild),$e=t,ie=!0,tt=null,n=bd(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Vn(),r===i){t=Pt(e,t,n);break e}Ne(e,t,r,n)}t=t.child}return t;case 5:return Qd(t),e===null&&ta(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,l=i.children,Xl(r,i)?l=null:o!==null&&Xl(r,o)&&(t.flags|=32),vf(e,t),Ne(e,t,l,n),t.child;case 6:return e===null&&ta(t),null;case 13:return xf(e,t,n);case 4:return as(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Wn(t,null,r,n):Ne(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:qe(r,i),Ou(e,t,r,i,n);case 7:return Ne(e,t,t.pendingProps,n),t.child;case 8:return Ne(e,t,t.pendingProps.children,n),t.child;case 12:return Ne(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,l=i.value,q(no,r._currentValue),r._currentValue=l,o!==null)if(ot(o.value,l)){if(o.children===i.children&&!De.current){t=Pt(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var a=o.dependencies;if(a!==null){l=o.child;for(var s=a.firstContext;s!==null;){if(s.context===r){if(o.tag===1){s=kt(-1,n&-n),s.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?s.next=s:(s.next=d.next,d.next=s),u.pending=s}}o.lanes|=n,s=o.alternate,s!==null&&(s.lanes|=n),na(o.return,n,t),a.lanes|=n;break}s=s.next}}else if(o.tag===10)l=o.type===t.type?null:o.child;else if(o.tag===18){if(l=o.return,l===null)throw Error(T(341));l.lanes|=n,a=l.alternate,a!==null&&(a.lanes|=n),na(l,n,t),l=o.sibling}else l=o.child;if(l!==null)l.return=o;else for(l=o;l!==null;){if(l===t){l=null;break}if(o=l.sibling,o!==null){o.return=l.return,l=o;break}l=l.return}o=l}Ne(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Fn(t,n),i=Ke(i),r=r(i),t.flags|=1,Ne(e,t,r,n),t.child;case 14:return r=t.type,i=qe(r,t.pendingProps),i=qe(r.type,i),Mu(e,t,r,i,n);case 15:return mf(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:qe(r,i),Li(e,t),t.tag=1,Fe(r)?(e=!0,qi(t)):e=!1,Fn(t,n),Wd(t,r,i),ia(t,r,i,n),aa(null,t,r,!0,e,n);case 19:return wf(e,t,n);case 22:return gf(e,t,n)}throw Error(T(156,t.tag))};function Df(e,t){return ad(e,t)}function H0(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ye(e,t,n,r){return new H0(e,t,n,r)}function ks(e){return e=e.prototype,!(!e||!e.isReactComponent)}function b0(e){if(typeof e=="function")return ks(e)?1:0;if(e!=null){if(e=e.$$typeof,e===$a)return 11;if(e===Va)return 14}return 2}function Qt(e,t){var n=e.alternate;return n===null?(n=Ye(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Ui(e,t,n,r,i,o){var l=2;if(r=e,typeof e=="function")ks(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case Sn:return sn(n.children,i,o,t);case _a:l=8,i|=8;break;case Rl:return e=Ye(12,n,t,i|2),e.elementType=Rl,e.lanes=o,e;case Tl:return e=Ye(13,n,t,i),e.elementType=Tl,e.lanes=o,e;case Nl:return e=Ye(19,n,t,i),e.elementType=Nl,e.lanes=o,e;case Hc:return No(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Vc:l=10;break e;case Wc:l=9;break e;case $a:l=11;break e;case Va:l=14;break e;case zt:l=16,r=null;break e}throw Error(T(130,e==null?e:typeof e,""))}return t=Ye(l,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function sn(e,t,n,r){return e=Ye(7,e,r,t),e.lanes=n,e}function No(e,t,n,r){return e=Ye(22,e,r,t),e.elementType=Hc,e.lanes=n,e.stateNode={isHidden:!1},e}function pl(e,t,n){return e=Ye(6,e,null,t),e.lanes=n,e}function hl(e,t,n){return t=Ye(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Q0(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Go(0),this.expirationTimes=Go(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Go(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Cs(e,t,n,r,i,o,l,a,s){return e=new Q0(e,t,n,a,s),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Ye(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ls(o),e}function Y0(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:wn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Ff(e){if(!e)return Xt;e=e._reactInternals;e:{if(vn(e)!==e||e.tag!==1)throw Error(T(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Fe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(T(171))}if(e.tag===1){var n=e.type;if(Fe(n))return Ld(e,n,t)}return t}function Uf(e,t,n,r,i,o,l,a,s){return e=Cs(n,r,!0,e,i,o,l,a,s),e.context=Ff(null),n=e.current,r=ze(),i=bt(n),o=kt(r,i),o.callback=t??null,Wt(n,o,i),e.current.lanes=i,qr(e,i,r),Ue(e,r),e}function zo(e,t,n,r){var i=t.current,o=ze(),l=bt(i);return n=Ff(n),t.context===null?t.context=n:t.pendingContext=n,t=kt(o,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Wt(i,t,l),e!==null&&(rt(e,i,l,o),Ii(e,i,l)),l}function po(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Qu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function As(e,t){Qu(e,t),(e=e.alternate)&&Qu(e,t)}function G0(){return null}var Bf=typeof reportError=="function"?reportError:function(e){console.error(e)};function Es(e){this._internalRoot=e}Io.prototype.render=Es.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(T(409));zo(e,t,null,null)};Io.prototype.unmount=Es.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;hn(function(){zo(null,e,null,null)}),t[At]=null}};function Io(e){this._internalRoot=e}Io.prototype.unstable_scheduleHydration=function(e){if(e){var t=hd();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Ot.length&&t!==0&&t<Ot[n].priority;n++);Ot.splice(n,0,e),n===0&&gd(e)}};function Ps(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Oo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Yu(){}function K0(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=po(l);o.call(u)}}var l=Uf(t,r,e,0,null,!1,!1,"",Yu);return e._reactRootContainer=l,e[At]=l.current,Br(e.nodeType===8?e.parentNode:e),hn(),l}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=po(s);a.call(u)}}var s=Cs(e,0,!1,null,null,!1,!1,"",Yu);return e._reactRootContainer=s,e[At]=s.current,Br(e.nodeType===8?e.parentNode:e),hn(function(){zo(t,s,n,r)}),s}function Mo(e,t,n,r,i){var o=n._reactRootContainer;if(o){var l=o;if(typeof i=="function"){var a=i;i=function(){var s=po(l);a.call(s)}}zo(t,l,e,i)}else l=K0(n,t,e,i,r);return po(l)}fd=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=xr(t.pendingLanes);n!==0&&(ba(t,n|1),Ue(t,ce()),!(G&6)&&(Qn=ce()+500,qt()))}break;case 13:hn(function(){var r=Et(e,1);if(r!==null){var i=ze();rt(r,e,1,i)}}),As(e,1)}};Qa=function(e){if(e.tag===13){var t=Et(e,134217728);if(t!==null){var n=ze();rt(t,e,134217728,n)}As(e,134217728)}};pd=function(e){if(e.tag===13){var t=bt(e),n=Et(e,t);if(n!==null){var r=ze();rt(n,e,t,r)}As(e,t)}};hd=function(){return Z};md=function(e,t){var n=Z;try{return Z=e,t()}finally{Z=n}};_l=function(e,t,n){switch(t){case"input":if(Ol(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Ao(r);if(!i)throw Error(T(90));Qc(r),Ol(r,i)}}}break;case"textarea":Gc(e,n);break;case"select":t=n.value,t!=null&&On(e,!!n.multiple,t,!1)}};td=xs;nd=hn;var X0={usingClientEntryPoint:!1,Events:[ti,En,Ao,qc,ed,xs]},pr={findFiberByHostInstance:nn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Z0={bundleType:pr.bundleType,version:pr.version,rendererPackageName:pr.rendererPackageName,rendererConfig:pr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:jt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=od(e),e===null?null:e.stateNode},findFiberByHostInstance:pr.findFiberByHostInstance||G0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Si=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Si.isDisabled&&Si.supportsFiber)try{wo=Si.inject(Z0),ft=Si}catch{}}We.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=X0;We.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ps(t))throw Error(T(200));return Y0(e,t,null,n)};We.createRoot=function(e,t){if(!Ps(e))throw Error(T(299));var n=!1,r="",i=Bf;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Cs(e,1,!1,null,null,n,!1,r,i),e[At]=t.current,Br(e.nodeType===8?e.parentNode:e),new Es(t)};We.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(T(188)):(e=Object.keys(e).join(","),Error(T(268,e)));return e=od(t),e=e===null?null:e.stateNode,e};We.flushSync=function(e){return hn(e)};We.hydrate=function(e,t,n){if(!Oo(t))throw Error(T(200));return Mo(null,e,t,!0,n)};We.hydrateRoot=function(e,t,n){if(!Ps(e))throw Error(T(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",l=Bf;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=Uf(t,null,e,1,n??null,i,!1,o,l),e[At]=t.current,Br(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Io(t)};We.render=function(e,t,n){if(!Oo(t))throw Error(T(200));return Mo(null,e,t,!1,n)};We.unmountComponentAtNode=function(e){if(!Oo(e))throw Error(T(40));return e._reactRootContainer?(hn(function(){Mo(null,null,e,!1,function(){e._reactRootContainer=null,e[At]=null})}),!0):!1};We.unstable_batchedUpdates=xs;We.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Oo(n))throw Error(T(200));if(e==null||e._reactInternals===void 0)throw Error(T(38));return Mo(e,t,n,!1,r)};We.version="18.2.0-next-9e3b772b8-20220608";function _f(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(_f)}catch(e){console.error(e)}}_f(),Fc.exports=We;var J0=Fc.exports,Gu=J0;Pl.createRoot=Gu.createRoot,Pl.hydrateRoot=Gu.hydrateRoot;/**
 * @remix-run/router v1.6.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Gr(){return Gr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Gr.apply(this,arguments)}var Ut;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Ut||(Ut={}));const Ku="popstate";function q0(e){e===void 0&&(e={});function t(r,i){let{pathname:o,search:l,hash:a}=r.location;return xa("",{pathname:o,search:l,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:ho(i)}return tm(t,n,null,e)}function de(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function js(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function em(){return Math.random().toString(36).substr(2,8)}function Xu(e,t){return{usr:e.state,key:e.key,idx:t}}function xa(e,t,n,r){return n===void 0&&(n=null),Gr({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?tr(t):t,{state:n,key:t&&t.key||r||em()})}function ho(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function tr(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function tm(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,l=i.history,a=Ut.Pop,s=null,u=d();u==null&&(u=0,l.replaceState(Gr({},l.state,{idx:u}),""));function d(){return(l.state||{idx:null}).idx}function m(){a=Ut.Pop;let N=d(),h=N==null?null:N-u;u=N,s&&s({action:a,location:S.location,delta:h})}function p(N,h){a=Ut.Push;let c=xa(S.location,N,h);n&&n(c,N),u=d()+1;let f=Xu(c,u),v=S.createHref(c);try{l.pushState(f,"",v)}catch{i.location.assign(v)}o&&s&&s({action:a,location:S.location,delta:1})}function w(N,h){a=Ut.Replace;let c=xa(S.location,N,h);n&&n(c,N),u=d();let f=Xu(c,u),v=S.createHref(c);l.replaceState(f,"",v),o&&s&&s({action:a,location:S.location,delta:0})}function x(N){let h=i.location.origin!=="null"?i.location.origin:i.location.href,c=typeof N=="string"?N:ho(N);return de(h,"No window.location.(origin|href) available to create URL for href: "+c),new URL(c,h)}let S={get action(){return a},get location(){return e(i,l)},listen(N){if(s)throw new Error("A history only accepts one active listener");return i.addEventListener(Ku,m),s=N,()=>{i.removeEventListener(Ku,m),s=null}},createHref(N){return t(i,N)},createURL:x,encodeLocation(N){let h=x(N);return{pathname:h.pathname,search:h.search,hash:h.hash}},push:p,replace:w,go(N){return l.go(N)}};return S}var Zu;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Zu||(Zu={}));function nm(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?tr(t):t,i=Rs(r.pathname||"/",n);if(i==null)return null;let o=$f(e);rm(o);let l=null;for(let a=0;l==null&&a<o.length;++a)l=fm(o[a],mm(i));return l}function $f(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,l,a)=>{let s={relativePath:a===void 0?o.path||"":a,caseSensitive:o.caseSensitive===!0,childrenIndex:l,route:o};s.relativePath.startsWith("/")&&(de(s.relativePath.startsWith(r),'Absolute route path "'+s.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),s.relativePath=s.relativePath.slice(r.length));let u=Yt([r,s.relativePath]),d=n.concat(s);o.children&&o.children.length>0&&(de(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),$f(o.children,t,d,u)),!(o.path==null&&!o.index)&&t.push({path:u,score:cm(u,o.index),routesMeta:d})};return e.forEach((o,l)=>{var a;if(o.path===""||!((a=o.path)!=null&&a.includes("?")))i(o,l);else for(let s of Vf(o.path))i(o,l,s)}),t}function Vf(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let l=Vf(r.join("/")),a=[];return a.push(...l.map(s=>s===""?o:[o,s].join("/"))),i&&a.push(...l),a.map(s=>e.startsWith("/")&&s===""?"/":s)}function rm(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:dm(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const im=/^:\w+$/,om=3,lm=2,am=1,sm=10,um=-2,Ju=e=>e==="*";function cm(e,t){let n=e.split("/"),r=n.length;return n.some(Ju)&&(r+=um),t&&(r+=lm),n.filter(i=>!Ju(i)).reduce((i,o)=>i+(im.test(o)?om:o===""?am:sm),r)}function dm(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function fm(e,t){let{routesMeta:n}=e,r={},i="/",o=[];for(let l=0;l<n.length;++l){let a=n[l],s=l===n.length-1,u=i==="/"?t:t.slice(i.length)||"/",d=pm({path:a.relativePath,caseSensitive:a.caseSensitive,end:s},u);if(!d)return null;Object.assign(r,d.params);let m=a.route;o.push({params:r,pathname:Yt([i,d.pathname]),pathnameBase:xm(Yt([i,d.pathnameBase])),route:m}),d.pathnameBase!=="/"&&(i=Yt([i,d.pathnameBase]))}return o}function pm(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=hm(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],l=o.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,d,m)=>{if(d==="*"){let p=a[m]||"";l=o.slice(0,o.length-p.length).replace(/(.)\/+$/,"$1")}return u[d]=gm(a[m]||"",d),u},{}),pathname:o,pathnameBase:l,pattern:e}}function hm(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),js(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(l,a)=>(r.push(a),"/([^\\/]+)"));return e.endsWith("*")?(r.push("*"),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function mm(e){try{return decodeURI(e)}catch(t){return js(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function gm(e,t){try{return decodeURIComponent(e)}catch(n){return js(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function Rs(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function vm(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?tr(e):e;return{pathname:n?n.startsWith("/")?n:ym(n,t):t,search:wm(r),hash:Sm(i)}}function ym(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function ml(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Ts(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Ns(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=tr(e):(i=Gr({},e),de(!i.pathname||!i.pathname.includes("?"),ml("?","pathname","search",i)),de(!i.pathname||!i.pathname.includes("#"),ml("#","pathname","hash",i)),de(!i.search||!i.search.includes("#"),ml("#","search","hash",i)));let o=e===""||i.pathname==="",l=o?"/":i.pathname,a;if(r||l==null)a=n;else{let m=t.length-1;if(l.startsWith("..")){let p=l.split("/");for(;p[0]==="..";)p.shift(),m-=1;i.pathname=p.join("/")}a=m>=0?t[m]:"/"}let s=vm(i,a),u=l&&l!=="/"&&l.endsWith("/"),d=(o||l===".")&&n.endsWith("/");return!s.pathname.endsWith("/")&&(u||d)&&(s.pathname+="/"),s}const Yt=e=>e.join("/").replace(/\/\/+/g,"/"),xm=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),wm=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Sm=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function km(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Wf=["post","put","patch","delete"];new Set(Wf);const Cm=["get",...Wf];new Set(Cm);/**
 * React Router v6.11.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function mo(){return mo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},mo.apply(this,arguments)}const zs=P.createContext(null),Am=P.createContext(null),nr=P.createContext(null),Lo=P.createContext(null),ht=P.createContext({outlet:null,matches:[],isDataRoute:!1}),Hf=P.createContext(null);function Em(e,t){let{relative:n}=t===void 0?{}:t;rr()||de(!1);let{basename:r,navigator:i}=P.useContext(nr),{hash:o,pathname:l,search:a}=Qf(e,{relative:n}),s=l;return r!=="/"&&(s=l==="/"?r:Yt([r,l])),i.createHref({pathname:s,search:a,hash:o})}function rr(){return P.useContext(Lo)!=null}function yn(){return rr()||de(!1),P.useContext(Lo).location}function bf(e){P.useContext(nr).static||P.useLayoutEffect(e)}function ir(){let{isDataRoute:e}=P.useContext(ht);return e?$m():Pm()}function Pm(){rr()||de(!1);let e=P.useContext(zs),{basename:t,navigator:n}=P.useContext(nr),{matches:r}=P.useContext(ht),{pathname:i}=yn(),o=JSON.stringify(Ts(r).map(s=>s.pathnameBase)),l=P.useRef(!1);return bf(()=>{l.current=!0}),P.useCallback(function(s,u){if(u===void 0&&(u={}),!l.current)return;if(typeof s=="number"){n.go(s);return}let d=Ns(s,JSON.parse(o),i,u.relative==="path");e==null&&t!=="/"&&(d.pathname=d.pathname==="/"?t:Yt([t,d.pathname])),(u.replace?n.replace:n.push)(d,u.state,u)},[t,n,o,i,e])}const jm=P.createContext(null);function Rm(e){let t=P.useContext(ht).outlet;return t&&P.createElement(jm.Provider,{value:e},t)}function Tm(){let{matches:e}=P.useContext(ht),t=e[e.length-1];return t?t.params:{}}function Qf(e,t){let{relative:n}=t===void 0?{}:t,{matches:r}=P.useContext(ht),{pathname:i}=yn(),o=JSON.stringify(Ts(r).map(l=>l.pathnameBase));return P.useMemo(()=>Ns(e,JSON.parse(o),i,n==="path"),[e,o,i,n])}function Nm(e,t){return zm(e,t)}function zm(e,t,n){rr()||de(!1);let{navigator:r}=P.useContext(nr),{matches:i}=P.useContext(ht),o=i[i.length-1],l=o?o.params:{};o&&o.pathname;let a=o?o.pathnameBase:"/";o&&o.route;let s=yn(),u;if(t){var d;let S=typeof t=="string"?tr(t):t;a==="/"||(d=S.pathname)!=null&&d.startsWith(a)||de(!1),u=S}else u=s;let m=u.pathname||"/",p=a==="/"?m:m.slice(a.length)||"/",w=nm(e,{pathname:p}),x=Dm(w&&w.map(S=>Object.assign({},S,{params:Object.assign({},l,S.params),pathname:Yt([a,r.encodeLocation?r.encodeLocation(S.pathname).pathname:S.pathname]),pathnameBase:S.pathnameBase==="/"?a:Yt([a,r.encodeLocation?r.encodeLocation(S.pathnameBase).pathname:S.pathnameBase])})),i,n);return t&&x?P.createElement(Lo.Provider,{value:{location:mo({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:Ut.Pop}},x):x}function Im(){let e=_m(),t=km(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},o=null;return P.createElement(P.Fragment,null,P.createElement("h2",null,"Unexpected Application Error!"),P.createElement("h3",{style:{fontStyle:"italic"}},t),n?P.createElement("pre",{style:i},n):null,o)}const Om=P.createElement(Im,null);class Mm extends P.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error||n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?P.createElement(ht.Provider,{value:this.props.routeContext},P.createElement(Hf.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Lm(e){let{routeContext:t,match:n,children:r}=e,i=P.useContext(zs);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),P.createElement(ht.Provider,{value:t},r)}function Dm(e,t,n){var r;if(t===void 0&&(t=[]),n===void 0&&(n=null),e==null){var i;if((i=n)!=null&&i.errors)e=n.matches;else return null}let o=e,l=(r=n)==null?void 0:r.errors;if(l!=null){let a=o.findIndex(s=>s.route.id&&(l==null?void 0:l[s.route.id]));a>=0||de(!1),o=o.slice(0,Math.min(o.length,a+1))}return o.reduceRight((a,s,u)=>{let d=s.route.id?l==null?void 0:l[s.route.id]:null,m=null;n&&(m=s.route.errorElement||Om);let p=t.concat(o.slice(0,u+1)),w=()=>{let x;return d?x=m:s.route.Component?x=P.createElement(s.route.Component,null):s.route.element?x=s.route.element:x=a,P.createElement(Lm,{match:s,routeContext:{outlet:a,matches:p,isDataRoute:n!=null},children:x})};return n&&(s.route.ErrorBoundary||s.route.errorElement||u===0)?P.createElement(Mm,{location:n.location,revalidation:n.revalidation,component:m,error:d,children:w(),routeContext:{outlet:null,matches:p,isDataRoute:!0}}):w()},null)}var wa;(function(e){e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate"})(wa||(wa={}));var Kr;(function(e){e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId"})(Kr||(Kr={}));function Fm(e){let t=P.useContext(zs);return t||de(!1),t}function Um(e){let t=P.useContext(Am);return t||de(!1),t}function Bm(e){let t=P.useContext(ht);return t||de(!1),t}function Yf(e){let t=Bm(),n=t.matches[t.matches.length-1];return n.route.id||de(!1),n.route.id}function _m(){var e;let t=P.useContext(Hf),n=Um(Kr.UseRouteError),r=Yf(Kr.UseRouteError);return t||((e=n.errors)==null?void 0:e[r])}function $m(){let{router:e}=Fm(wa.UseNavigateStable),t=Yf(Kr.UseNavigateStable),n=P.useRef(!1);return bf(()=>{n.current=!0}),P.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,mo({fromRouteId:t},o)))},[e,t])}function Gf(e){let{to:t,replace:n,state:r,relative:i}=e;rr()||de(!1);let{matches:o}=P.useContext(ht),{pathname:l}=yn(),a=ir(),s=Ns(t,Ts(o).map(d=>d.pathnameBase),l,i==="path"),u=JSON.stringify(s);return P.useEffect(()=>a(JSON.parse(u),{replace:n,state:r,relative:i}),[a,u,i,n,r]),null}function Vm(e){return Rm(e.context)}function Tt(e){de(!1)}function Wm(e){let{basename:t="/",children:n=null,location:r,navigationType:i=Ut.Pop,navigator:o,static:l=!1}=e;rr()&&de(!1);let a=t.replace(/^\/*/,"/"),s=P.useMemo(()=>({basename:a,navigator:o,static:l}),[a,o,l]);typeof r=="string"&&(r=tr(r));let{pathname:u="/",search:d="",hash:m="",state:p=null,key:w="default"}=r,x=P.useMemo(()=>{let S=Rs(u,a);return S==null?null:{location:{pathname:S,search:d,hash:m,state:p,key:w},navigationType:i}},[a,u,d,m,p,w,i]);return x==null?null:P.createElement(nr.Provider,{value:s},P.createElement(Lo.Provider,{children:n,value:x}))}function Hm(e){let{children:t,location:n}=e;return Nm(Sa(t),n)}var qu;(function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"})(qu||(qu={}));new Promise(()=>{});function Sa(e,t){t===void 0&&(t=[]);let n=[];return P.Children.forEach(e,(r,i)=>{if(!P.isValidElement(r))return;let o=[...t,i];if(r.type===P.Fragment){n.push.apply(n,Sa(r.props.children,o));return}r.type!==Tt&&de(!1),!r.props.index||!r.props.children||de(!1);let l={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(l.children=Sa(r.props.children,o)),n.push(l)}),n}/**
 * React Router DOM v6.11.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ka(){return ka=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ka.apply(this,arguments)}function bm(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function Qm(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Ym(e,t){return e.button===0&&(!t||t==="_self")&&!Qm(e)}function Ca(e){return e===void 0&&(e=""),new URLSearchParams(typeof e=="string"||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce((t,n)=>{let r=e[n];return t.concat(Array.isArray(r)?r.map(i=>[n,i]):[[n,r]])},[]))}function Gm(e,t){let n=Ca(e);if(t)for(let r of t.keys())n.has(r)||t.getAll(r).forEach(i=>{n.append(r,i)});return n}const Km=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"];function Xm(e){let{basename:t,children:n,window:r}=e,i=P.useRef();i.current==null&&(i.current=q0({window:r,v5Compat:!0}));let o=i.current,[l,a]=P.useState({action:o.action,location:o.location});return P.useLayoutEffect(()=>o.listen(a),[o]),P.createElement(Wm,{basename:t,children:n,location:l.location,navigationType:l.action,navigator:o})}const Zm=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Jm=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Do=P.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:o,replace:l,state:a,target:s,to:u,preventScrollReset:d}=t,m=bm(t,Km),{basename:p}=P.useContext(nr),w,x=!1;if(typeof u=="string"&&Jm.test(u)&&(w=u,Zm))try{let c=new URL(window.location.href),f=u.startsWith("//")?new URL(c.protocol+u):new URL(u),v=Rs(f.pathname,p);f.origin===c.origin&&v!=null?u=v+f.search+f.hash:x=!0}catch{}let S=Em(u,{relative:i}),N=qm(u,{replace:l,state:a,target:s,preventScrollReset:d,relative:i});function h(c){r&&r(c),c.defaultPrevented||N(c)}return P.createElement("a",ka({},m,{href:w||S,onClick:x||o?r:h,ref:n,target:s}))});var ec;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmitImpl="useSubmitImpl",e.UseFetcher="useFetcher"})(ec||(ec={}));var tc;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(tc||(tc={}));function qm(e,t){let{target:n,replace:r,state:i,preventScrollReset:o,relative:l}=t===void 0?{}:t,a=ir(),s=yn(),u=Qf(e,{relative:l});return P.useCallback(d=>{if(Ym(d,n)){d.preventDefault();let m=r!==void 0?r:ho(s)===ho(u);a(e,{replace:m,state:i,preventScrollReset:o,relative:l})}},[s,a,u,r,i,n,e,o,l])}function Kf(e){let t=P.useRef(Ca(e)),n=P.useRef(!1),r=yn(),i=P.useMemo(()=>Gm(r.search,n.current?null:t.current),[r.search]),o=ir(),l=P.useCallback((a,s)=>{const u=Ca(typeof a=="function"?a(i):a);n.current=!0,o("?"+u,s)},[o,i]);return[i,l]}var Pe=function(){return Pe=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},Pe.apply(this,arguments)};function Xr(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,o;r<i;r++)(o||!(r in t))&&(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))}var te="-ms-",Nr="-moz-",X="-webkit-",Xf="comm",Fo="rule",Is="decl",eg="@import",Zf="@keyframes",tg="@layer",ng=Math.abs,Os=String.fromCharCode,rg=Object.assign;function ig(e,t){return ye(e,0)^45?(((t<<2^ye(e,0))<<2^ye(e,1))<<2^ye(e,2))<<2^ye(e,3):0}function Jf(e){return e.trim()}function Nt(e,t){return(e=t.exec(e))?e[0]:e}function Q(e,t,n){return e.replace(t,n)}function Bi(e,t){return e.indexOf(t)}function ye(e,t){return e.charCodeAt(t)|0}function Yn(e,t,n){return e.slice(t,n)}function xt(e){return e.length}function Ms(e){return e.length}function ki(e,t){return t.push(e),e}function og(e,t){return e.map(t).join("")}var Uo=1,Gn=1,qf=0,Ze=0,fe=0,or="";function Bo(e,t,n,r,i,o,l){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:Uo,column:Gn,length:l,return:""}}function hr(e,t){return rg(Bo("",null,null,"",null,null,0),e,{length:-e.length},t)}function lg(){return fe}function ag(){return fe=Ze>0?ye(or,--Ze):0,Gn--,fe===10&&(Gn=1,Uo--),fe}function it(){return fe=Ze<qf?ye(or,Ze++):0,Gn++,fe===10&&(Gn=1,Uo++),fe}function un(){return ye(or,Ze)}function _i(){return Ze}function _o(e,t){return Yn(or,e,t)}function Aa(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function sg(e){return Uo=Gn=1,qf=xt(or=e),Ze=0,[]}function ug(e){return or="",e}function gl(e){return Jf(_o(Ze-1,Ea(e===91?e+2:e===40?e+1:e)))}function cg(e){for(;(fe=un())&&fe<33;)it();return Aa(e)>2||Aa(fe)>3?"":" "}function dg(e,t){for(;--t&&it()&&!(fe<48||fe>102||fe>57&&fe<65||fe>70&&fe<97););return _o(e,_i()+(t<6&&un()==32&&it()==32))}function Ea(e){for(;it();)switch(fe){case e:return Ze;case 34:case 39:e!==34&&e!==39&&Ea(fe);break;case 40:e===41&&Ea(e);break;case 92:it();break}return Ze}function fg(e,t){for(;it()&&e+fe!==47+10;)if(e+fe===42+42&&un()===47)break;return"/*"+_o(t,Ze-1)+"*"+Os(e===47?e:it())}function pg(e){for(;!Aa(un());)it();return _o(e,Ze)}function hg(e){return ug($i("",null,null,null,[""],e=sg(e),0,[0],e))}function $i(e,t,n,r,i,o,l,a,s){for(var u=0,d=0,m=l,p=0,w=0,x=0,S=1,N=1,h=1,c=0,f="",v=i,k=o,E=r,C=f;N;)switch(x=c,c=it()){case 40:if(x!=108&&ye(C,m-1)==58){Bi(C+=Q(gl(c),"&","&\f"),"&\f")!=-1&&(h=-1);break}case 34:case 39:case 91:C+=gl(c);break;case 9:case 10:case 13:case 32:C+=cg(x);break;case 92:C+=dg(_i()-1,7);continue;case 47:switch(un()){case 42:case 47:ki(mg(fg(it(),_i()),t,n),s);break;default:C+="/"}break;case 123*S:a[u++]=xt(C)*h;case 125*S:case 59:case 0:switch(c){case 0:case 125:N=0;case 59+d:h==-1&&(C=Q(C,/\f/g,"")),w>0&&xt(C)-m&&ki(w>32?rc(C+";",r,n,m-1):rc(Q(C," ","")+";",r,n,m-2),s);break;case 59:C+=";";default:if(ki(E=nc(C,t,n,u,d,i,a,f,v=[],k=[],m),o),c===123)if(d===0)$i(C,t,E,E,v,o,m,a,k);else switch(p===99&&ye(C,3)===110?100:p){case 100:case 108:case 109:case 115:$i(e,E,E,r&&ki(nc(e,E,E,0,0,i,a,f,i,v=[],m),k),i,k,m,a,r?v:k);break;default:$i(C,E,E,E,[""],k,0,a,k)}}u=d=w=0,S=h=1,f=C="",m=l;break;case 58:m=1+xt(C),w=x;default:if(S<1){if(c==123)--S;else if(c==125&&S++==0&&ag()==125)continue}switch(C+=Os(c),c*S){case 38:h=d>0?1:(C+="\f",-1);break;case 44:a[u++]=(xt(C)-1)*h,h=1;break;case 64:un()===45&&(C+=gl(it())),p=un(),d=m=xt(f=C+=pg(_i())),c++;break;case 45:x===45&&xt(C)==2&&(S=0)}}return o}function nc(e,t,n,r,i,o,l,a,s,u,d){for(var m=i-1,p=i===0?o:[""],w=Ms(p),x=0,S=0,N=0;x<r;++x)for(var h=0,c=Yn(e,m+1,m=ng(S=l[x])),f=e;h<w;++h)(f=Jf(S>0?p[h]+" "+c:Q(c,/&\f/g,p[h])))&&(s[N++]=f);return Bo(e,t,n,i===0?Fo:a,s,u,d)}function mg(e,t,n){return Bo(e,t,n,Xf,Os(lg()),Yn(e,2,-2),0)}function rc(e,t,n,r){return Bo(e,t,n,Is,Yn(e,0,r),Yn(e,r+1,-1),r)}function ep(e,t,n){switch(ig(e,t)){case 5103:return X+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return X+e+e;case 4789:return Nr+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return X+e+Nr+e+te+e+e;case 5936:switch(ye(e,t+11)){case 114:return X+e+te+Q(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return X+e+te+Q(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return X+e+te+Q(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return X+e+te+e+e;case 6165:return X+e+te+"flex-"+e+e;case 5187:return X+e+Q(e,/(\w+).+(:[^]+)/,X+"box-$1$2"+te+"flex-$1$2")+e;case 5443:return X+e+te+"flex-item-"+Q(e,/flex-|-self/g,"")+(Nt(e,/flex-|baseline/)?"":te+"grid-row-"+Q(e,/flex-|-self/g,""))+e;case 4675:return X+e+te+"flex-line-pack"+Q(e,/align-content|flex-|-self/g,"")+e;case 5548:return X+e+te+Q(e,"shrink","negative")+e;case 5292:return X+e+te+Q(e,"basis","preferred-size")+e;case 6060:return X+"box-"+Q(e,"-grow","")+X+e+te+Q(e,"grow","positive")+e;case 4554:return X+Q(e,/([^-])(transform)/g,"$1"+X+"$2")+e;case 6187:return Q(Q(Q(e,/(zoom-|grab)/,X+"$1"),/(image-set)/,X+"$1"),e,"")+e;case 5495:case 3959:return Q(e,/(image-set\([^]*)/,X+"$1$`$1");case 4968:return Q(Q(e,/(.+:)(flex-)?(.*)/,X+"box-pack:$3"+te+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+X+e+e;case 4200:if(!Nt(e,/flex-|baseline/))return te+"grid-column-align"+Yn(e,t)+e;break;case 2592:case 3360:return te+Q(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,i){return t=i,Nt(r.props,/grid-\w+-end/)})?~Bi(e+(n=n[t].value),"span")?e:te+Q(e,"-start","")+e+te+"grid-row-span:"+(~Bi(n,"span")?Nt(n,/\d+/):+Nt(n,/\d+/)-+Nt(e,/\d+/))+";":te+Q(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return Nt(r.props,/grid-\w+-start/)})?e:te+Q(Q(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return Q(e,/(.+)-inline(.+)/,X+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(xt(e)-1-t>6)switch(ye(e,t+1)){case 109:if(ye(e,t+4)!==45)break;case 102:return Q(e,/(.+:)(.+)-([^]+)/,"$1"+X+"$2-$3$1"+Nr+(ye(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Bi(e,"stretch")?ep(Q(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return Q(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,o,l,a,s,u){return te+i+":"+o+u+(l?te+i+"-span:"+(a?s:+s-+o)+u:"")+e});case 4949:if(ye(e,t+6)===121)return Q(e,":",":"+X)+e;break;case 6444:switch(ye(e,ye(e,14)===45?18:11)){case 120:return Q(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+X+(ye(e,14)===45?"inline-":"")+"box$3$1"+X+"$2$3$1"+te+"$2box$3")+e;case 100:return Q(e,":",":"+te)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return Q(e,"scroll-","scroll-snap-")+e}return e}function Bn(e,t){for(var n="",r=Ms(e),i=0;i<r;i++)n+=t(e[i],i,e,t)||"";return n}function gg(e,t,n,r){switch(e.type){case tg:if(e.children.length)break;case eg:case Is:return e.return=e.return||e.value;case Xf:return"";case Zf:return e.return=e.value+"{"+Bn(e.children,r)+"}";case Fo:e.value=e.props.join(",")}return xt(n=Bn(e.children,r))?e.return=e.value+"{"+n+"}":""}function vg(e){var t=Ms(e);return function(n,r,i,o){for(var l="",a=0;a<t;a++)l+=e[a](n,r,i,o)||"";return l}}function yg(e){return function(t){t.root||(t=t.return)&&e(t)}}function xg(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case Is:e.return=ep(e.value,e.length,n);return;case Zf:return Bn([hr(e,{value:Q(e.value,"@","@"+X)})],r);case Fo:if(e.length)return og(e.props,function(i){switch(Nt(i,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return Bn([hr(e,{props:[Q(i,/:(read-\w+)/,":"+Nr+"$1")]})],r);case"::placeholder":return Bn([hr(e,{props:[Q(i,/:(plac\w+)/,":"+X+"input-$1")]}),hr(e,{props:[Q(i,/:(plac\w+)/,":"+Nr+"$1")]}),hr(e,{props:[Q(i,/:(plac\w+)/,te+"input-$1")]})],r)}return""})}}var wg={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Kn=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",Ls=typeof window<"u"&&"HTMLElement"in window,Sg=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY),kg={},tp=Object.freeze([]),mn=Object.freeze({});function np(e,t,n){return n===void 0&&(n=mn),e.theme!==n.theme&&e.theme||t||n.theme}var rp=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Cg=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Ag=/(^-|-$)/g;function ic(e){return e.replace(Cg,"-").replace(Ag,"")}var Eg=/(a)(d)/gi,oc=function(e){return String.fromCharCode(e+(e>25?39:97))};function Pa(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=oc(t%52)+n;return(oc(t%52)+n).replace(Eg,"$1-$2")}var vl,In=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},ip=function(e){return In(5381,e)};function op(e){return Pa(ip(e)>>>0)}function Pg(e){return e.displayName||e.name||"Component"}function yl(e){return typeof e=="string"&&!0}var lp=typeof Symbol=="function"&&Symbol.for,ap=lp?Symbol.for("react.memo"):60115,jg=lp?Symbol.for("react.forward_ref"):60112,Rg={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Tg={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},sp={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Ng=((vl={})[jg]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},vl[ap]=sp,vl);function lc(e){return("type"in(t=e)&&t.type.$$typeof)===ap?sp:"$$typeof"in e?Ng[e.$$typeof]:Rg;var t}var zg=Object.defineProperty,Ig=Object.getOwnPropertyNames,ac=Object.getOwnPropertySymbols,Og=Object.getOwnPropertyDescriptor,Mg=Object.getPrototypeOf,sc=Object.prototype;function up(e,t,n){if(typeof t!="string"){if(sc){var r=Mg(t);r&&r!==sc&&up(e,r,n)}var i=Ig(t);ac&&(i=i.concat(ac(t)));for(var o=lc(e),l=lc(t),a=0;a<i.length;++a){var s=i[a];if(!(s in Tg||n&&n[s]||l&&s in l||o&&s in o)){var u=Og(t,s);try{zg(e,s,u)}catch{}}}}return e}function Xn(e){return typeof e=="function"}function Ds(e){return typeof e=="object"&&"styledComponentId"in e}function ln(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function ja(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function Zr(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Ra(e,t,n){if(n===void 0&&(n=!1),!n&&!Zr(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=Ra(e[r],t[r]);else if(Zr(t))for(var r in t)e[r]=Ra(e[r],t[r]);return e}function ri(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var Lg=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,o=i;t>=o;)if((o<<=1)<0)throw ri(16,"".concat(t));this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var l=i;l<o;l++)this.groupSizes[l]=0}for(var a=this.indexOfGroup(t+1),s=(l=0,n.length);l<s;l++)this.tag.insertRule(a,n[l])&&(this.groupSizes[t]++,a++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),i=r+n;this.groupSizes[t]=0;for(var o=r;o<i;o++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],i=this.indexOfGroup(t),o=i+r,l=i;l<o;l++)n+="".concat(this.tag.getRule(l)).concat(`/*!sc*/
`);return n},e}(),Vi=new Map,go=new Map,xl=1,Ci=function(e){if(Vi.has(e))return Vi.get(e);for(;go.has(xl);)xl++;var t=xl++;return Vi.set(e,t),go.set(t,e),t},Dg=function(e,t){Vi.set(e,t),go.set(t,e)},Fg="style[".concat(Kn,"][").concat("data-styled-version",'="').concat("6.0.0-rc.3",'"]'),Ug=new RegExp("^".concat(Kn,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Bg=function(e,t,n){for(var r,i=n.split(","),o=0,l=i.length;o<l;o++)(r=i[o])&&e.registerName(t,r)},_g=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(`/*!sc*/
`),i=[],o=0,l=r.length;o<l;o++){var a=r[o].trim();if(a){var s=a.match(Ug);if(s){var u=0|parseInt(s[1],10),d=s[2];u!==0&&(Dg(d,u),Bg(e,d,s[3]),e.getTag().insertRules(u,i)),i.length=0}else i.push(a)}}};function $g(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var cp=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(a){for(var s=a.childNodes,u=s.length;u>=0;u--){var d=s[u];if(d&&d.nodeType===1&&d.hasAttribute(Kn))return d}}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(Kn,"active"),r.setAttribute("data-styled-version","6.0.0-rc.3");var l=$g();return l&&r.setAttribute("nonce",l),n.insertBefore(r,o),r},Vg=function(){function e(t){this.element=cp(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,o=r.length;i<o;i++){var l=r[i];if(l.ownerNode===n)return l}throw ri(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),Wg=function(){function e(t){this.element=cp(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),Hg=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),uc=Ls,bg={isServer:!Ls,useCSSOMInjection:!Sg},vo=function(){function e(t,n,r){t===void 0&&(t=mn),n===void 0&&(n={}),this.options=Pe(Pe({},bg),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&Ls&&uc&&(uc=!1,function(i){for(var o=document.querySelectorAll(Fg),l=0,a=o.length;l<a;l++){var s=o[l];s&&s.getAttribute(Kn)!=="active"&&(_g(i,s),s.parentNode&&s.parentNode.removeChild(s))}}(this))}return e.registerId=function(t){return Ci(t)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(Pe(Pe({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new Hg(i):r?new Vg(i):new Wg(i)}(this.options),new Lg(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(Ci(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(Ci(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(Ci(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e.prototype.toString=function(){return function(t){for(var n=t.getTag(),r=n.length,i="",o=function(a){var s=function(w){return go.get(w)}(a);if(s===void 0)return"continue";var u=t.names.get(s),d=n.getGroup(a);if(u===void 0||d.length===0)return"continue";var m="".concat(Kn,".g").concat(a,'[id="').concat(s,'"]'),p="";u!==void 0&&u.forEach(function(w){w.length>0&&(p+="".concat(w,","))}),i+="".concat(d).concat(m,'{content:"').concat(p,'"}').concat(`/*!sc*/
`)},l=0;l<r;l++)o(l);return i}(this)},e}(),Qg=/&/g,Yg=/^\s*\/\/.*$/gm;function dp(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=dp(n.children,t)),n})}function Gg(e){var t,n,r,i=e===void 0?mn:e,o=i.options,l=o===void 0?mn:o,a=i.plugins,s=a===void 0?tp:a,u=function(p,w,x){return x===n||x.startsWith(n)&&x.endsWith(n)&&x.replaceAll(n,"").length>0?".".concat(t):p},d=s.slice();d.push(function(p){p.type===Fo&&p.value.includes("&")&&(p.props[0]=p.props[0].replace(Qg,n).replace(r,u))}),l.prefix&&d.push(xg),d.push(gg);var m=function(p,w,x,S){w===void 0&&(w=""),x===void 0&&(x=""),S===void 0&&(S="&"),t=S,n=w,r=new RegExp("\\".concat(n,"\\b"),"g");var N=p.replace(Yg,""),h=hg(x||w?"".concat(x," ").concat(w," { ").concat(N," }"):N);l.namespace&&(h=dp(h,l.namespace));var c=[];return Bn(h,vg(d.concat(yg(function(f){return c.push(f)})))),c};return m.hash=s.length?s.reduce(function(p,w){return w.name||ri(15),In(p,w.name)},5381).toString():"",m}var Kg=new vo,Ta=Gg(),fp=Lt.createContext({shouldForwardProp:void 0,styleSheet:Kg,stylis:Ta});fp.Consumer;Lt.createContext(void 0);function Na(){return P.useContext(fp)}var Xg=function(){function e(t,n){var r=this;this.inject=function(i,o){o===void 0&&(o=Ta);var l=r.name+o.hash;i.hasNameForId(r.id,l)||i.insertRules(r.id,l,o(r.rules,l,"@keyframes"))},this.toString=function(){throw ri(12,String(r.name))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n}return e.prototype.getName=function(t){return t===void 0&&(t=Ta),this.name+t.hash},e}(),Zg=function(e){return e>="A"&&e<="Z"};function cc(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;Zg(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var pp=function(e){return e==null||e===!1||e===""},hp=function(e){var t,n,r=[];for(var i in e){var o=e[i];e.hasOwnProperty(i)&&!pp(o)&&(Array.isArray(o)&&o.isCss||Xn(o)?r.push("".concat(cc(i),":"),o,";"):Zr(o)?r.push.apply(r,Xr(Xr(["".concat(i," {")],hp(o),!1),["}"],!1)):r.push("".concat(cc(i),": ").concat((t=i,(n=o)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in wg||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function Gt(e,t,n,r){if(pp(e))return[];if(Ds(e))return[".".concat(e.styledComponentId)];if(Xn(e)){if(!Xn(o=e)||o.prototype&&o.prototype.isReactComponent||!t)return[e];var i=e(t);return Gt(i,t,n,r)}var o;return e instanceof Xg?n?(e.inject(n,r),[e.getName(r)]):[e]:Zr(e)?hp(e):Array.isArray(e)?e.flatMap(function(l){return Gt(l,t,n,r)}):[e.toString()]}function mp(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Xn(n)&&!Ds(n))return!1}return!0}var Jg=ip("6.0.0-rc.3"),qg=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&mp(t),this.componentId=n,this.baseHash=In(Jg,n),this.baseStyle=r,vo.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=ln(i,this.staticRulesId);else{var o=ja(Gt(this.rules,t,n,r)),l=Pa(In(this.baseHash,o)>>>0);if(!n.hasNameForId(this.componentId,l)){var a=r(o,".".concat(l),void 0,this.componentId);n.insertRules(this.componentId,l,a)}i=ln(i,l),this.staticRulesId=l}else{for(var s=In(this.baseHash,r.hash),u="",d=0;d<this.rules.length;d++){var m=this.rules[d];if(typeof m=="string")u+=m;else if(m){var p=ja(Gt(m,t,n,r));s=In(s,p),u+=p}}if(u){var w=Pa(s>>>0);n.hasNameForId(this.componentId,w)||n.insertRules(this.componentId,w,r(u,".".concat(w),void 0,this.componentId)),i=ln(i,w)}}return i},e}(),gp=Lt.createContext(void 0);gp.Consumer;function vp(){return P.useContext(gp)}var wl={};function e1(e,t,n){var r,i=Ds(e),o=e,l=!yl(e),a=t.componentId,s=a===void 0?function(k,E){var C=typeof k!="string"?"sc":ic(k);wl[C]=(wl[C]||0)+1;var z="".concat(C,"-").concat(op("6.0.0-rc.3"+C+wl[C]));return E?"".concat(E,"-").concat(z):z}(t.displayName,t.parentComponentId):a,u=t.displayName,d=u===void 0?function(k){return yl(k)?"styled.".concat(k):"Styled(".concat(Pg(k),")")}(e):u,m=(r=t.attrs)!==null&&r!==void 0?r:[],p=t.displayName&&t.componentId?"".concat(ic(t.displayName),"-").concat(t.componentId):t.componentId||s,w=i&&o.attrs?o.attrs.concat(m).filter(Boolean):m,x=t.shouldForwardProp;if(i&&o.shouldForwardProp){var S=o.shouldForwardProp;if(t.shouldForwardProp){var N=t.shouldForwardProp;x=function(k,E){return S(k,E)&&N(k,E)}}else x=S}var h=new qg(n,p,i?o.componentStyle:void 0),c=h.isStatic&&m.length===0;function f(k,E){return function(C,z,W,_){var oe=C.attrs,he=C.componentStyle,Re=C.defaultProps,lt=C.foldedComponentIds,at=C.styledComponentId,Te=C.target,st=vp(),O=Na(),U=C.shouldForwardProp||O.shouldForwardProp,B=function($,y,j){for(var M,I=Pe(Pe({},y),{className:void 0,theme:j}),F=0;F<$.length;F+=1){var b=Xn(M=$[F])?M(I):M;for(var J in b)I[J]=J==="className"?ln(I[J],b[J]):J==="style"?Pe(Pe({},I[J]),b[J]):b[J]}return y.className&&(I.className=ln(I.className,y.className)),I}(oe,z,np(z,st,Re)||mn),K=B.as||Te,R={};for(var L in B)B[L]===void 0||L[0]==="$"||L==="as"||L==="theme"||(L==="forwardedAs"?R.as=B.forwardedAs:U&&!U(L,K)||(R[L]=B[L]));var V=function($,y,j){var M=Na(),I=$.generateAndInjectStyles(y?mn:j,M.styleSheet,M.stylis);return I}(he,_,B),H=ln(lt,at);return V&&(H+=" "+V),B.className&&(H+=" "+B.className),R[yl(K)&&!rp.has(K)?"class":"className"]=H,R.ref=W,P.createElement(K,R)}(v,k,E,c)}f.displayName=d;var v=Lt.forwardRef(f);return v.attrs=w,v.componentStyle=h,v.displayName=d,v.shouldForwardProp=x,v.foldedComponentIds=i?ln(o.foldedComponentIds,o.styledComponentId):"",v.styledComponentId=p,v.target=i?o.target:e,Object.defineProperty(v,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(k){this._foldedDefaultProps=i?function(E){for(var C=[],z=1;z<arguments.length;z++)C[z-1]=arguments[z];for(var W=0,_=C;W<_.length;W++)Ra(E,_[W],!0);return E}({},o.defaultProps,k):k}}),Object.defineProperty(v,"toString",{value:function(){return".".concat(v.styledComponentId)}}),l&&up(v,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),v}function dc(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var fc=function(e){return Object.assign(e,{isCss:!0})};function Fs(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(Xn(e)||Zr(e)){var r=e;return fc(Gt(dc(tp,Xr([r],t,!0))))}var i=e;return t.length===0&&i.length===1&&typeof i[0]=="string"?Gt(i):fc(Gt(dc(i,t)))}function za(e,t,n){if(n===void 0&&(n=mn),!t)throw ri(1,t);var r=function(i){for(var o=[],l=1;l<arguments.length;l++)o[l-1]=arguments[l];return e(t,n,Fs.apply(void 0,Xr([i],o,!1)))};return r.attrs=function(i){return za(e,t,Pe(Pe({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return za(e,t,Pe(Pe({},n),i))},r}function yp(e){return za(e1,e)}var A=yp;rp.forEach(function(e){A[e]=yp(e)});var t1=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=mp(t),vo.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,r,i){var o=i(ja(Gt(this.rules,n,r,i)),""),l=this.componentId+t;r.insertRules(l,l,o)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,r,i){t>2&&vo.registerId(this.componentId+t),this.removeStyles(t,r),this.createStyles(t,n,r,i)},e}();function xp(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=Fs.apply(void 0,Xr([e],t,!1)),i="sc-global-".concat(op(JSON.stringify(r))),o=new t1(r,i),l=function(s){var u=Na(),d=vp(),m=Lt.useRef(u.styleSheet.allocateGSInstance(i)).current;return u.styleSheet.server&&a(m,s,u.styleSheet,d,u.stylis),(Lt.useInsertionEffect||Lt.useLayoutEffect)(function(){if(!u.styleSheet.server)return a(m,s,u.styleSheet,d,u.stylis),function(){return o.removeStyles(m,u.styleSheet)}},[m,s,u.styleSheet,d,u.stylis]),null};function a(s,u,d,m,p){if(o.isStatic)o.renderStyles(s,kg,d,p);else{var w=Pe(Pe({},u),{theme:np(u,m,l.defaultProps)});o.renderStyles(s,w,d,p)}}return Lt.memo(l)}var wp=globalThis&&globalThis.__makeTemplateObject||function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},n1=Fs(pc||(pc=wp([`
/* http://meyerweb.com/eric/tools/css/reset/
   v5.0.1 | 20191019
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, menu, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
main, menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, main, menu, nav, section {
  display: block;
}
/* HTML5 hidden-attribute fix for newer browsers */
*[hidden] {
    display: none;
}
body {
  line-height: 1;
}
menu, ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
`],[`
/* http://meyerweb.com/eric/tools/css/reset/
   v5.0.1 | 20191019
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, menu, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
main, menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, main, menu, nav, section {
  display: block;
}
/* HTML5 hidden-attribute fix for newer browsers */
*[hidden] {
    display: none;
}
body {
  line-height: 1;
}
menu, ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
`]))),r1=xp(hc||(hc=wp(["",""],["",""])),n1),pc,hc;const i1="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAArpJREFUWAnVmb1uE0EUhXcNTRQLIRBBmAJQREU6GlpoKQKRaHiECCqovZFbgmgoadMgBApPwAtEQiLpQAIhJYCgMX+iwXxnvTearBd7dvzDcKTjO3N37p3jmdn1zDpNAtHr9RYJXYYXYcshxWTX4RblzTRN3+jCVIGoBdiBr2BdKEaxCxMXSdJ5mMGvcFwoRwbnJyKURCvwA5w0lHMlWCTBKczgbzgtKHcbprWEEjAHH8NZQX3NeYmkoUZuluJsENTnwEgerlDdxnejwu/j+kGjF/Ad/AnVoXgeXoXDoD63YeevjfgGuiFC19wjYo9UJS/yYkZCfVffOFxowtC79WmVMPOpU+gLadh/BDUsCfYOPOnU6xTX6jQe0VYa7lqbfFGiWE93/RQ17UIN+5qfMa2xAyDncRxnCucV7L0DDYZXvnF5kbyf7Ca5jSNEnLp5qw8XiDtG/T30e3S4wf2ytNyCbZvia4NtvD26W8s4hSNUnOW6rkKDb6tdyZJ5I7JL0qYp1pYpBE8I0jTuVAR/wffA8Z+lnI+I4/MpLieo3IAhuOzTg9qQ/GZIB8RsaA1qszltnA7soDUrgaGD0NIaDA0+yhScIP4Xz6uuO0L4D1HXo8Zwzgo1bUvrowvHwfNypyS7ME5CJ7arKd4rdxBRfU8CdQKLFbv/hUCdW2PFlkZwM1Z10tYoTvzaaseGbWnTCArP+iaqz1yTCXyING0SY4G0SFOSC9TOlfK6HJFgvdDUF1iIuo/9GIFAadgfLJviBMUa1lXY+4ci1fcqWr6bhvzQZBVZfgczzJrKnvhMu5eltk3ql0o+n2qGuM7QhgiM6tVHpVhExvvyyBQXI5lhQ1+FEDoSyp3BgaVmOkZaguN8gekqR2S8r4BLQmf+Ej147hlVHfh1pra/IfQ2wc432gRrpy6r7Vzw3xB/APFH88itWwvKAAAAAElFTkSuQmCC",o1="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAABENJREFUWAm1mdmrTVEcx88xXFOmm5kIkcgQDxKJQpmuMuSFFyV5QTeuOXnwB/CgdHkyRUkhDySZCQ/o8kCGq8xzZHZ8vufufe4+6+699tpn3/Orz11r/ab1O+fsvdba+2YzJUoul+tNaBWMhT4BcvRfBLhF/2Q2m31NW16hqK6wAW7AP3CVvzhegbXQqdmrJGlbWAcfIK28I8EaqGiWQkk0G+qhueUxCaelKpIENaCfp1zyh8SrEhdJUBvYX66qQvLWomvtXCjOB0OSlFtV61QgVWwsdyWW/KutRRJYBUmWD8tcJZl0TU4PFpn1Bxja038EWoBd5TOOl0GL8Vt4B9+hH/SHkaAJ3a+vTOYp/sNY2H/SNgoFbknwmc/iOwtaNmYI7+FTCcuhDlyluigbUd3hi0P0W3xmFgU7DohrDdqFvkGcvMehcyE1g+1xEdgvQt9CUIkdcgyB5xAnNYUp8Lwb430be7tCQMoOuYbCq5g5r+enwWlQjOMb7Lrgm1XIOQp+W+bWatK7BbPOi5m5hjuqPsYnsZmcdwk6YgnUClOVoUrbrqFvr42fhH4HWOeP1TJeAsNhIsz1bfSXwQBYCLs91vt2L3Yketu6W6sJzkOU7DISjvccu/t6xvdhExyAnzDOm/wZfS0vun6fwBlosp2huwpRcqoVyXQajpLnhsFf2P1WZvV1qSiXznhHmU2nbJ2spReXYA/opG1KHYoJptIb91GwrUDtDmGiyU1RocfgB+wFjX2/pfS14whT3puKwDhfYGDcpNutiSZaoQ/7FRaBFnPd+X6BO+lXwkAwJUxX8FHSsK/dd5jqd7z2r9dqq7sJCxlLJ/6p5e68T7sSJL9BtsVwFg6CKSNMRWD8QteNChwaUAa7kyiigkl/eUotDWuhI+jbeeCN1Z6DP5DBX4ddxZwB5Z8EkvqGpuEvPmPoWQuMW2bIUbysBCdI2yf3IU1gkfwyU21xkOkz9ExbjBlPzplgWwMx51boG4zb6uR4ATqYk5Q6Jtdg0OOnTfJbXX4OvO7ZPD2bitS1l0rIMRpeejltTf6woLtYcryhsf6djFW7xnyrl8VI7BTMF6GXxc03NdZEYA9wObDilhedDZeCHhOcBN8F8ANcRAfWLkWJUWx1iTR89KFOwzbI78FFSRmgr4AdkOQFQLWZR4l0UnG5NnALlU9mUrzGwJ1Q72jlU0yFE1RRTgzzIO7Wj0pdKBCHVqBf5FeUc4Rej50ziooyBzhsjgiOUz9ULpxmgcuqEJZvjVlP6JjIw2HRDronDj5RLvtCiwlTkkHvA20n7ahJStXvIzDJw31D2QTpPU2Suy9pgbrm3H7WsG9SOhLMAZfn2KTF6W7Va5H0QqJ2sB4+QlrRIqwDSvhSkqZcklaCHpB0WE2yHMn3GtRA4ysNh2L03FCSMFFfAvVvCO0geiOmZxuhg6wOqT5683WCQ+wr2sTyH2ypKyHq12UvAAAAAElFTkSuQmCC",l1="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAA5RJREFUWAnNmTFoFEEUhnMhKiFBRExCLoXC2VgIioidnRaBRAyIgrWWQoKNCK4miK2awtpCBS2ipNE0EbQQMYUGO7UziSZiocHC4Pn9y+3e3mZ2ZvZyd8mDPzvz5p83/77ZnZm9FNrqtHK5XKLrKXAEFBOg2LaQwBzlZ4VC4bMammqI6gXjYB7kNfVR396GiyRoFwjAL7BRU4wAdDVEKIFGwBJotCnmSN0i6VwA18A/0CxT7AAUcgmlQyd4DFplGqvTSyREZa6V4qIkaEx3JiEFUY9NuAbWLCJIL0QznznXPWvsmhcnTikNeu21mPZZ76L5jd8YosTCvqqh2hPjXaa82eIkRxqkpWpkTzuEbRGuZ9pfEXMYFEEfGAIvQGSrFGaiSuoqLdUdh8pEipCu3sCR582+BT85O2E28GmFuADOg91gGmTZeJxCGPNZrIr/INcO4CNSmVsnLh6MAu0SegU8Ah+ByeajuyqZWlO+HpHxtYNRoOnJsqEwsOUPHbcBxTqbFaTiL2nQMQdJzYeT41HXTU2BNZC2/iQ3q0yni+BvunOqPiaBD1NOU/WmaSCI/UBT9RqsAJnXKQXecsi2/3kggbN2TtiqKT1gEpn0wekBHUmfqQxH0+vKHpTyrB5mnYZddg7CCTrssBFZXJfBmo1TadvD1XkjcIoi+Qj8w8B3K8EbcXHORmWQonU5SCgZTZQbUTzpGSRcr/SB47JBpveSi5SjfdCTu6gM+ghUvDuIvA9qlhzPgWIa/Y9TORQ77IWFPAJ1urgHFu0xna1XnYwqIRSo71Yf0/p2mpdlyYds4pC9Yfy+z59CzGkd9NnqoMV2ndJ2kwCbjz4DIFrM42COgn4cCPdY12EhHecLjtvAd1vbBfdNOoijHh4WomXmqe3uDW0r+KaZbufziAgdQF+CYyCPTYkcHvkrQT5R7zZEeI/vB1gGH8AMwt5xdRpxdbKZBHud5FrCb6o69n+P3QQLgMl0ug1A9YQb9zIX4B4FtsMozVaLv+6SH03KnrKoKTGZ9tjnYBa8BV/BT7ATaLscAJrGM2AfqNf00bSf7CmLtcY9bbnPzlqF1BAZWJPf3MZ4atcJixyMr++FJ83VYYyuMeNHLtJjvEJs9Y9HEtdpFJPl1N2AANTzTUw3L1PsAPhlziSWznpxtt4PmEmxCOwGAdCauFGL1lXTppAcNn8ZZRv9EX2CGFnrrFFQ3XPPQC35N8R/Hi1+e3CLDRgAAAAASUVORK5CYII=",a1=A.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  background-color: #313538;

  @media screen and (max-width: 1279px) {
    bottom: 60px;
  }
`,s1=A.div`
  max-width: 1200px;
  height: 115px;
  padding-left: 24px;
  padding-right: 20px;
  margin: 0 auto;
  display: flex;
  align-items: center;

  @media screen and (max-width: 1279px) {
    height: 148px;
    padding: 23px 0 20px;
    flex-wrap: wrap;
    justify-content: center;
  }
`,u1=A.div`
  display: flex;

  @media screen and (max-width: 1279px) {
    width: 168px;
    height: 84px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: space-between;
    margin-left: 16px;
  }
`,c1=A.div`
  width: 134px;
  text-align: center;
  position: relative;
  color: #f5f5f5;
  cursor: pointer;

  @media screen and (max-width: 1279px) {
    width: auto;
    line-height: 20px;
    margin-bottom: 8px;
    text-align: left;
    color: white;
    font-size: 14px;
  }

  & + &::before {
    content: '|';
    position: absolute;
    left: 0;

    @media screen and (max-width: 1279px) {
      content: '';
    }
  }
`,d1=A.div`
  display: flex;
  margin-left: auto;

  @media screen and (max-width: 1279px) {
    margin-left: 40px;
    margin-bottom: 28px;
  }
`,f1=A.div`
  width: 50px;
  height: 50px;
  background-size: contain;
  cursor: pointer;
  background-image: url(${e=>e.icon});

  @media screen and (max-width: 1279px) {
    width: 20px;
    height: 20px;
  }

  & + & {
    margin-left: 30px;

    @media screen and (max-width: 1279px) {
      margin-left: 14px;
    }
  }
`,p1=A.div`
  margin-left: 30px;
  line-height: 17px;
  font-size: 12px;
  color: #828282;

  @media screen and (max-width: 1279px) {
    margin-left: 0;
    margin-top: 7px;
    line-height: 14px;
    font-size: 10px;
    color: #828282;
    width: 100%;
    text-align: center;
  }
`;function h1(){return g.jsx(a1,{children:g.jsxs(s1,{children:[g.jsx(u1,{children:["關於 Stylish","服務條款","隱私政策","聯絡我們","FAQ"].map((e,t)=>g.jsx(c1,{children:e},t))}),g.jsx(d1,{children:[o1,l1,i1].map((e,t)=>g.jsx(f1,{icon:e},t))}),g.jsx(p1,{children:"© 2022. All rights reserved."})]})})}const Zn={hostname:"https://api.appworks-school.tw/api/1.0",async getProducts(e,t){return await(await fetch(`${this.hostname}/products/${e}?paging=${t}`)).json()},async getCampaigns(){return await(await fetch(`${this.hostname}/marketing/campaigns`)).json()},async searchProducts(e,t){return await(await fetch(`${this.hostname}/products/search?keyword=${e}&paging=${t}`)).json()},async getProduct(e){return await(await fetch(`${this.hostname}/products/details?id=${e}`)).json()},async checkout(e,t){return await(await fetch(`${this.hostname}/order/checkout`,{body:JSON.stringify(e),headers:new Headers({"Content-Type":"application/json",Authorization:`Bearer ${t}`}),method:"POST"})).json()},async signin(e){return await(await fetch(`${this.hostname}/user/signin`,{body:JSON.stringify(e),headers:new Headers({"Content-Type":"application/json"}),method:"POST"})).json()},async getProfile(e){return await(await fetch(`${this.hostname}/user/profile`,{headers:new Headers({"Content-Type":"application/json",Authorization:`Bearer ${e}`})})).json()}},mc="facebook-jssdk",m1="https://connect.facebook.net/zh_TW/sdk.js";function g1(){if(document.getElementById(mc))return;const e=document.createElement("script");e.setAttribute("id",mc),e.setAttribute("src",m1),document.head.appendChild(e)}const Ai={init(){return new Promise(e=>{window.fbAsyncInit=()=>{window.FB.init({appId:"3424282940990119",cookie:!0,xfbml:!0,version:"v10.0"}),e()},g1()})},getLoginStatus(){return new Promise(e=>{window.FB.getLoginStatus(t=>{e(t)})})},login(){return new Promise(e=>{window.FB.login(t=>{e(t)},{scope:"public_profile,email"})})},logout(){return new Promise(e=>{window.FB.logout(()=>{e()})})}},$o=P.createContext({isLogin:!1,user:{},loading:!1,jwtToken:"",login:()=>{},logout:()=>{}}),v1=({children:e})=>{const[t,n]=P.useState(!1),[r,i]=P.useState({}),[o,l]=P.useState(!0),[a,s]=P.useState(),u=P.useCallback(async p=>{const w=p.authResponse.accessToken,{data:x}=await Zn.signin({provider:"facebook",access_token:w}),{access_token:S,user:N}=x;return i(N),s(S),window.localStorage.setItem("jwtToken",S),n(!0),S},[]);P.useEffect(()=>{(async()=>{await Ai.init();const w=await Ai.getLoginStatus();w.status==="connected"?(u(w),l(!1)):(window.localStorage.removeItem("jwtToken"),l(!1))})()},[u]);const d=async()=>{l(!0);const p=await Ai.login();if(p.status==="connected"){const w=u(p);return l(!1),w}else return window.localStorage.removeItem("jwtToken"),l(!1),null},m=async()=>{l(!0),await Ai.logout(),n(!1),i({}),s(),window.localStorage.removeItem("jwtToken"),l(!1)};return g.jsx($o.Provider,{value:{isLogin:t,user:r,loading:o,jwtToken:a,login:d,logout:m},children:e})},ii=P.createContext({cartItems:[],setCartItems:()=>{}}),gc="cartItems",y1=({children:e})=>{const[t,n]=P.useState(()=>JSON.parse(window.localStorage.getItem(gc))||[]),r=i=>{n(i),window.localStorage.setItem(gc,JSON.stringify(i))};return g.jsx(ii.Provider,{value:{cartItems:t,setCartItems:r,cartCount:t.reduce((i,o)=>i+o.qty,0)},children:e})},x1="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAYAAAFpg2qXAAAAAXNSR0IArs4c6QAAAxFJREFUWAntmL9u1EAQxn2AEolAxINwXR4gvAASoUgkmiCRghpRoVAEpUuRjgeIKFNQINGRpKFGQvwpkFAEEkLQ5FIcRIn5jc+7t7bH9vhiEpBsabSz33zz7eze+tZ2FFVdcRy/q4pXx8heE8YlRwPYSf3bDmujRfdWQQfwpAAKIFUElagcO9gLqci+CvvO7/V6N5zvW8hD31Ecv2xpbDlVD0d8jPKekpvMcuACJK47/wxahpMF3qgbyk8E8jFkbSL3meCHjBDkzQyQdsBjDVcxuNtqQAMhTznc1ywAgRc0lzGPU+88/eS64Jy0fUnriblYdZeRzvIXrC7mnKKsgf0HLqkx/4s42lfnWFpzIRBnsF2LqHDgHlm5QjYtB7Q+tthEeJ+E2boEON/rOJk4CVPYVgZss4O4/88LdcHXxUKs87sVMK4AW2cFkzPNdMcZZcc0dBex/hiZzCucLYjKyfUZ+2iU/MQBds/ERbzy+SUUkdlhD0NM/LL/4+k8saa/XxMfhalAfyRUsuE+wfzBr1DGEMQv4161Bzf7QFNFh7yJLVRxXAyefXvCNR9NcO3HklRjSYAziz1z1YdtYR+7IAkyxR3Xp9W439jDSwGn3kX3sJ5VztCqSNgIX8R5jl0pT48OqPimFs+/BHgOCceIvxEA/5EPpA6xAfjVPO76ZXeei3dttwLdCrS+AuofBffqCiPdSUeTfyJ5VXwq93iK/dsNE9jCDjHbgXne06FQeR6Rq9lB8RcKV7eENg7FDsGF/1qLnxKbI/831mfbNXofLh2XgvewE2ymlDRhAM3pVHt1QoliGoILmFzqN6Zihh1BcylRjuPr9iwDE9EhZn4ANUgmFDS3sfdWvpmH6C7W6rZAT74tHGFr5kKsRERb3xZouu1w6vc+dR4M8AtrbVug1Wg7lD65qtWOQHkbWGagH7RvFZ79/SaK5Ca7hs0rOu1AFOoOEfvXtXaGTlTMB0c4JkVv0H+AyZ3d7AteKBRFB3Tvclj8zMJdb7QCrPQAk0v9Kqmtk3CTjAY5mk6HdSvwv67AH4Ecw1Kga316AAAAAElFTkSuQmCC",Sp="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAYAAAFpg2qXAAAAAXNSR0IArs4c6QAAA/xJREFUWAntWM1rE0EU39ndNMHED4T2kFLwIPTS3jwlkg+RQhEKVeMHemhFD+LBg3gSPCheRFAP4h8gHjR+XBRKMGkaSESvitaDUCyWUvXQGvuRJll/EzPLZjLZTOLGD0ggzHtvfu+3b9++mTe7imL3CwcC7+zm7eeiweAVitAZLBIIpKmsejyHmM2JcV84PG7lUalS2tx8bDWaMo2CRWIa2xaI1TMSDE5bdSans9kok80R4HVTEQhm2ipzqjpRYTcM84qqrl9OZTIZga+iAPydTYSDwWtM7uyoUXqa3F0DA0Nz8/MJu8uZN4IyKxFC6m/E5TqbTqdna0jAfqvGUFVAYojsQhsyYhZHpVqEqKqxz+8/zubNmKkhGgg8NwjZolgeSjqXizBwDXNZUaasQAaSGv/cE5QK56+AWnrADSKseSImhpDPpiwhiAIREru93kHUyIwEZwWCNVDksULiRCLxA/UU4sEifX8oNAz7SX5OSExBKPH50dHRbbwDr2+WSklsbA94e0Pi3v7+3WsrK3d4B16fyWb7eJuUbt3zrA509XRXkDUjXbl5BsytHuv9DJQTaC/hmVzOtDenkESgbo9Wl6mkhxhWF1ksFutZWliYw8QHsUud9SOW9Ok6q8iAqG3PL1YfendYgRetNioL9wrDMNw80E7H3X3i54XEAEkfEYrF4pFev/+pLPECD2yoExKLx+MFfl4YMW7tUTQUOsiDRTrSNiiyC4l7fL5LSrF4XuTA20RtiWKExJXWREiAJ+F12mHwMB7ydqrX1TED0c6LaNJMF56nCFlEDR8zMTICajkvg2uEqT2rW1Aooe04sT6DyWcx14i4pRX0vLEao4xi19ca9ULGK3x4bLI7djPQzUAnMiDc2tgBo3rBvELIFDaOu2gTpU4E0QqnMGCeAJvNPdjGEfROUW/j8Z3UpTY2XdOuo196vywuSvXWTgYslWEaAPrIOlomgcNLxwMiZA+4C5rbPZxKpWzfhxs2O0FQr2Hbi8PGAXouEMy3bcL5wb26vLxW2tg4BZKrdkRSJUEJiK7Tb0uksLrq+AeztXyefqQkxOWqO1TSa1t/0gFPZzJPUA4bRrl82ErghAzOGLhn8QXubTM+6YApEUhfYfCPjIx4mxHLztM3HfCO4XQYl/FpKWBF12+D1NGyoDsPdiBsRJrzAdOyQMAFJ8uClcOLTOaNTIZb2SUqfKqq3i+XyxPY5r7CUF9zhEi/vcF/CP8dRNMiGKV+LQesqepNBDyJNX1O9CFM6qq/AUK9t/5Ddm8gjRfg+R4ES60z/PKgLy26xzOZTCa/tcvxz/u1lWF2V/QNDCvchy0pj/LYyux2Yzs+dnzduW4G/rcM/ATNtyLJQ6eMhAAAAABJRU5ErkJggg==",w1="/assets/logo-3d54935a.png",S1="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAYAAAAehFoBAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NDM5MTZCMzA4QjMzMTFFODgyNUNGOUJEODc2RDE5ODMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NDM5MTZCMzE4QjMzMTFFODgyNUNGOUJEODc2RDE5ODMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo0MzkxNkIyRThCMzMxMUU4ODI1Q0Y5QkQ4NzZEMTk4MyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo0MzkxNkIyRjhCMzMxMUU4ODI1Q0Y5QkQ4NzZEMTk4MyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Puw7VaMAAALqSURBVHja7JhNaBNBFMezNYfSg0brQVLoQWgFtQppb9KDVEQjEqUKXoTmINRDbxpR8aQo6C14EsGbBcWDF5G0uRTRQkEtWA9VEHOoYMX6gbHgR/yNvkBYZmYnZhOp7MCPyc6befPnZXffm/UqlUpsJbW22AprkeBIcCQ4EvyfCY67TPI8z2on+fTSZWA3dENSTAtQggLcxc98gJ9gLU6TDIJZm6K7DEPwAe7DCxEaE+E9sAcSUIQc/h7/reDfk4LQrIlDHn7CDKTVmGWPuMyZkTV53XwnLfUK5joBRShDFjyfPQlH4CwchHU1Nk/WlMVHoqmCJVJqozcwoInQGHyBb1CSaL6DQ755A+KjWBvpZgjOS3R0Yo+KwPPQIWNr4Tr8gEGNaOUr3xTB6gETQVnDPfoerhru4XvwVDOeFZ+pZgielIfG02y8vfKnbTMIPiDCVvvGPfE5Gapg9Z4VQWmDoF1i32Cw7xD7Ro0tLbZeFy2umS4j79mCwV79uwcNdjX+EV5pbAXxnXFS4hjhCRgP8HMHXkOXb7wPPsEVy9px2SNQS9wxwirdPgqYcxwewDMc36B/CeqeHgGV2c5Z1qrsmAozwp9h1MFXB1yCJxLVacjBqoB1o7JHaBGOORZJZbrTOD5Dv57rxX9VXi7UVGC2SHXBbXmI3vJ7Ea75U7CmJWsKplAEl6TqsondRDcHW+GEVHAXYB/MYu+0LO+RPUK7h0/CUkBFNi1JoN033il1xU1LJbcke7QscXSLfchgPwZfDSVlXYkjrNS8XzZNmAp9sW8xpOYJ13+7njNdDvrlvepv1dtg2bB22Tev2kbE5ylnFWGUl1wflgi2G/bYLPb+lpWXtgK+XsGNFPBtdSaG73TD8BymdEckh39U1dNT4mNYfMaacktYDqEXAyLcJ/a5Rg+hYR7zlaNbMK855u+FNfAQxho55jck2PchRR00d1o+pBTwM9uSDynRt7VIcCQ4EhwJjgRX2y8BBgDdUj+vd8LTjQAAAABJRU5ErkJggg==",kp="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAYAAAAehFoBAAAABGdBTUEAALGPC/xhBQAABYlJREFUWAntWF1oXEUUvnM3GxdC8Qe0ZVtqKbKCrSBtX5K7MWubJqioMQ+VUhRa30oFa4M/iG3UPliIIlgfpGKhEIpGakVUsm3jxmYbH9KqSAUFxRYJ9UWQJJhkd+/4fbP3htnJ/dnE6oPuhbtz5pwz53xz5tyZOWtZjacRgUYEGhH4T0VA/N3Z9Pf326PnzrVK1+2BrS3SstIwmqZd0JOgJ0FOCNs+3bFt2zj0XcqW+ywbcC6XS1ml0j5Lyj4AWwkAEsYuW0L8KqUkSJAiDfkayDeormX9BuaAlUweLRQKs9RZ6rMswFuz2UcrUr4JMGsBYBztcdHc/AlAXAsCgMmtkvPzD0F3N3Rb0V5NCPH0yNjYR0H6UbwlAUbkBMC+7Er5Epz+iGV+rnD+/OkoB6Ys197eg/Q5AuAZW4hXAfoQVgKLUN9TN2AF1nEGkYA7AfbUDS0tT+Tz+RndTc5xHoPnPULKzeRLIS7CwXuFYvF9Xa+rq6tlbmbmBED32pZ1cqRY3FUv6LoB3+c4r6jI2vYbiGqf7gBL3iRLpUEA2AGDv2BCYwqglFlMYB36H4hkchdSpuwDZwAQ7QHLdZ9hpL8oFg/6sqgWE4x/mLNeGpwywarR5fLzHtgjmY0bM4jo43xJYwJc/h0WdbSHE6YtrhZt04cmDiVjI8zdANH7ARZmkQabzDTo7u6+ZXZq6hocfz5aLD4S5KnDcT4G6PtTK1asGh4e/l3X8dLjEngprMKdcbtHbIQB9ik4W8sPzARLx+XpaeZrEobeYT/o8WRJT7dGhTZpmz7UNlkjXdyJBMxDAR/QAURvPGw3KEt5h2f2p8XmFzhKpukuCEgo29XtsY8+a4RGJ1JYOHu2DR/NSsz+uDFuoWsnEt+zg5y8a4FpEL7M1zXE1S580BdPzUC5x4wEDKDMSclDIcyITCQuAu1UxXUDo8OIUUYdpRtiyPMhvSM+RMuyogHjboCv8nLYCUarkE1jYgdAthXy+cEHs9mbfW+kyaOMOkrXFxotfdAX2FsMUU23qaZndLBEaSznzwZ7UXf0woVjODTWY299dtp1H+5oa/uGSqDvQZOCjdewzR1bNNBk8B5iWetNtt6PjDBmnAYIdZHRBwXRAPQCgDl4T+Bt9l7SDmVBY0wefdGnydf7kRHWFeuhAewr6PH9x55IwFieSUQocsY6MhzfD2DMHuSrukvgQ1N3CRy7n+l6YTR90WeYnPy4lJiE8zVRBijjToAcfhdH7KdY1nYA/ZYvafIoi9tflQ/4QkosHzCMTGDGG3ifVQZDfrBf7we4JxGht29bvXodUqOHL2nyKKNOyHDFVnfm6kV/IkovOsIoazBYqMt3iBU4ugmrcBgRzQPkvqGhoT99VdLkUUadzs7OG32Z2Xo+BEspU6b3IwGzBsMSsazZrQ/SaVGpbEYEU6ggjup8naaMOpW5ufA9Fj7oiz71sSYdCRh55+IS/jqi08pKwRzMPk6mu9m6TU3fsQ16fJmva+oo29XSaYA+TbnejwRMRVz53kKEr7Ks4VVQH6zkUjazTZZK86bM7/syXKSUrs9nS5u0TR8sTnVZEB0LGEfmLAtGRDnDsgZLi5W7Pg9teaVShj7oK85yLGAaYHXLMgage1nWXA/QtKFKJNZ11WK0rgq6LsAe6ENQPskaLJfNfhiUHnHR8eUcSxuqnmMRisrZl8W1dQPGfipZ3fqRxlJeCvsQo5xyDMdytVRkl1Ax027k0Ww6JmjwDqJg/Jp/pMhKhct4hXplIW5FE3hKKZmU/OtqL8bczg8sYdu9TDXY5PC6n6Vpa2a94pT13otg80CI/asKOn8A4OF//a8qDbfFO8KXZ850Y/PcCn7on4HIvZF7t28fjttnddsNuhGBRgQaEfgfROAvcyul9rB/0GMAAAAASUVORK5CYII=",k1="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAYAAAAehFoBAAAABGdBTUEAALGPC/xhBQAABDRJREFUWAntl0toE0EYx3e2aY3i66JYPYmlVASfILjN1iRNbIsWX1TxgaiHHHyAioripUoLWluKUgR7kEqpHlpFimBrjI1Noyf1VA9qBR/1rSAVoo27439So63Z7swmQj3swJLdb77Hb/4zO5mVJLvZCtgK2ArYCoylAiST4mWqOi2maSsJIYsppbnINV4i5C2SPiOy3HE7EnmQSX6j2LSAfUVFc+OaViVRugZJZQBrVJLe4z4G2wz8TmDFYO+jhBz3+HwtlZWVOrNl2iwDuxXlGEiOo/APAF2Akm15BQWRxsbGeBLGqyhzdELKAb8bA8mD/z2nLK/vjETeJH3S/RUGhkJyVzDYDIjNCOp0yHLgVk/PC7PCgUAg+3Fv724slxpAf0CMPxSJPDKL4fUJA3sKC2t0Sg8h4VnPihX7rUyx2+VySbp+Hcvjk8PpXBoKhT7xwEbrFwL2qGqJrmkdcG7rikY3YClgpq01QJdidq4jsP1ONLrOWvQfb/nPrfEdWwpU10+xKZ1MyM50YFnmcE9PB4AbcK31FhUpxtX4Vi5wJBgsxhpcANDq9mh0gJ/SxCMnpwp5vmK2Dph4mXZxgTVJWo0MuuRwtJhmEugMh8MfsSRuwLWkrKxsnEBIigsXGBEuXPdZsZToNAxsh8GMTfw2MLAwjXCJCwxFZqLI83SSG8YQksiFnDMN+zlGLjBekil44b5w8gh3Z2VlJXLpuj5FOGiYIxcYSryHytOHxWR0C9BELrx87K/ccuMCQ93nhNK5ljOPEoAtMpkrrWXGBYa6nbjy3G53wSgM1syUrsKs9eMPqNda4JA3FxgOVxOu8fiedAoMjylW1fkYvIrlMJRzeKfgPReYKQFF2rAVBTJRGfHkh67Xgus7zc6uEeRLceMCJyJyco5Cle9SPH4N0FNTsggYcJaoxo7jx3G0Bnv6K4EQQxchYBR4ihdvK1TKB3TQ6/XOMsxmYGTKehSlDrBHMVNP3D7fCQM3YRNyiDcc3rdjDZ6H2p8RdcTt9zebHTNxJJ0H/1pAl2K3eQPoXHyenMYyOyxedaSnJWAWWqwoy/Cp0YTi+QDvQ4KruLow1f2AieFgM0MjZD7Ov+WA9cNnELCnBmKx6klO52XAr4d/Xfju3YMjUcSeLAOztFjHDjo4uAMwAQAsgSklDwzvAHxlnMNx8mZ398vfcfH4JQy2AoOrh9KWT20phVhiK61EVXMHdX0R4Ia+mmX5LV6MZ6Hu7ocYEMwjW0VFRdaH169bMNCNKH4GSu8b6WH+lDGweXrjXgb9sb+/GZ/RmzCohnA0utfYM9U6JsAM45fSF6H0FjyeA/Qeoxn5G1loW/s76F88t7a2athltgGgGfl2eVyuc4AfMwGFx8S+Gd2FhU3LFYXit54XOGYKJ8HYPg6l2cdtA2yzk3b711bAVsBWwFbg/1TgJ/oGf+B16r/GAAAAAElFTkSuQmCC",C1=A.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 140px;
  width: 100%;
  padding: 0 54px 0 60px;
  border-bottom: 40px solid #313538;
  z-index: 99;
  background-color: white;
  display: flex;
  align-items: center;

  @media screen and (max-width: 1279px) {
    height: 52px;
    padding: 0;
    border: none;
    justify-content: center;
  }
`,A1=A(Do)`
  width: 258px;
  height: 48px;
  background-image: url(${w1});
  background-size: contain;

  @media screen and (max-width: 1279px) {
    width: 129px;
    height: 24px;
  }
`,E1=A.div`
  margin: 16px 0 0 57px;

  @media screen and (max-width: 1279px) {
    margin: 0;
    position: fixed;
    top: 52px;
    left: 0;
    width: 100%;
    height: 50px;
    display: flex;
    background-color: #313538;
  }
`,P1=A.a`
  font-size: 20px;
  letter-spacing: 30px;
  padding-left: 39px;
  padding-right: 11px;
  position: relative;
  text-decoration: none;
  color: ${e=>e.$isActive?"#8b572a":"#3f3a3a"};

  @media screen and (max-width: 1279px) {
    font-size: 16px;
    letter-spacing: normal;
    padding: 0;
    text-align: center;
    color: ${e=>e.$isActive?"white":"#828282"};
    line-height: 50px;
    flex-grow: 1;
  }

  &:hover {
    color: #8b572a;
    cursor: pointer;

    @media screen and (max-width: 1279px) {
      color: white;
    }
  }

  & + &::before {
    content: '|';
    position: absolute;
    left: 0;
    color: #3f3a3a;

    @media screen and (max-width: 1279px) {
      color: #828282;
    }
  }
`,j1=A.input`
  height: 40px;
  width: 214px;
  border: none;
  outline: none;
  margin-left: auto;
  border-radius: 20px;
  padding: 6px 45px 6px 20px;
  border: solid 1px #979797;
  background-image: url(${k1});
  background-size: 44px;
  background-position: 160px center;
  background-repeat: no-repeat;
  font-size: 20px;
  line-height: 24px;
  color: #8b572a;

  @media screen and (max-width: 1279px) {
    width: 0;
    border: none;
    position: fixed;
    right: 16px;
    background-size: 32px;
    background-position: right center;
  }

  &:focus {
    @media screen and (max-width: 1279px) {
      width: calc(100% - 20px);
      border: solid 1px #979797;
    }
  }
`,R1=A.div`
  margin-left: 42px;
  display: flex;

  @media screen and (max-width: 1279px) {
    width: 100%;
    margin-left: 0;
    height: 60px;
    position: fixed;
    left: 0;
    bottom: 0;
    background-color: #313538;
  }
`,vc=A(Do)`
  @media screen and (max-width: 1279px) {
    width: 50%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  & + & {
    margin-left: 42px;

    @media screen and (max-width: 1279px) {
      margin-left: 0;
    }
  }

  & + &::before {
    @media screen and (max-width: 1279px) {
      content: '';
      position: absolute;
      left: 0;
      width: 1px;
      height: 24px;
      margin: 10px 51px 10px 0;
      background-color: #828282;
    }
  }
`,Cp=A.div`
  width: 44px;
  height: 44px;
  cursor: pointer;
  background-size: contain;
  position: relative;
`,T1=A(Cp)`
  background-image: url(${Sp});

  @media screen and (max-width: 1279px) {
    background-image: url(${x1});
  }
`,N1=A(Cp)`
  background-image: url(${({url:e})=>e??kp});
  border-radius: 50%;

  @media screen and (max-width: 1279px) {
    background-image: url(${S1});
  }
`,z1=A.div`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 24px;
  height: 24px;
  background-color: #8b572a;
  color: white;
  border-radius: 50%;
  text-align: center;
  line-height: 24px;
`,yc=A.div`
  display: none;

  @media screen and (max-width: 1279px) {
    display: block;
    color: white;
  }
`,I1=[{name:"women",displayText:"女裝"},{name:"men",displayText:"男裝"},{name:"accessories",displayText:"配件"}];function O1(){const[e,t]=P.useState(""),{user:n}=P.useContext($o),{cartCount:r}=P.useContext(ii),i=ir(),[o]=Kf(),l=o.get("category");return P.useEffect(()=>{l&&t("")},[l]),g.jsxs(C1,{children:[g.jsx(A1,{to:"/"}),g.jsx(E1,{children:I1.map(({name:a,displayText:s},u)=>g.jsx(P1,{$isActive:l===a,onClick:()=>{window.scrollTo({top:0,behavior:"smooth"}),i(`/?category=${a}`)},children:s},u))}),g.jsx(j1,{onKeyPress:a=>{a.key==="Enter"&&i(`/?keyword=${e}`)},onChange:a=>t(a.target.value),value:e}),g.jsxs(R1,{children:[g.jsxs(vc,{to:"/checkout",children:[g.jsx(T1,{icon:Sp,children:g.jsx(z1,{children:r})}),g.jsx(yc,{children:"購物車"})]}),g.jsxs(vc,{to:"/profile",children:[g.jsx(N1,{icon:kp,url:n==null?void 0:n.picture}),g.jsx(yc,{children:"會員"})]})]})]})}const M1=xp`
  * {
    box-sizing: border-box;
  }

  body {
    font-family: 'Noto Sans TC', sans-serif;
  }

  #root {
    min-height: 100vh;
    padding: 140px 0 115px;
    position: relative;

    @media screen and (max-width: 1279px) {
      padding: 102px 0 208px;
    }
  }
`;function L1(){return g.jsxs(g.Fragment,{children:[g.jsx(r1,{}),g.jsx(M1,{}),g.jsx(v1,{children:g.jsxs(y1,{children:[g.jsx(O1,{}),g.jsx(Vm,{}),g.jsx(h1,{})]})})]})}var Ap={exports:{}};(function(e,t){(function(r,i){e.exports=i()})(typeof self<"u"?self:jp,function(){return function(n){var r={};function i(o){if(r[o])return r[o].exports;var l=r[o]={i:o,l:!1,exports:{}};return n[o].call(l.exports,l,l.exports,i),l.l=!0,l.exports}return i.m=n,i.c=r,i.d=function(o,l,a){i.o(o,l)||Object.defineProperty(o,l,{configurable:!1,enumerable:!0,get:a})},i.n=function(o){var l=o&&o.__esModule?function(){return o.default}:function(){return o};return i.d(l,"a",l),l},i.o=function(o,l){return Object.prototype.hasOwnProperty.call(o,l)},i.p="/",i(i.s=7)}([function(n,r,i){function o(l,a,s,u,d,m,p,w){if(!l){var x;if(a===void 0)x=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var S=[s,u,d,m,p,w],N=0;x=new Error(a.replace(/%s/g,function(){return S[N++]})),x.name="Invariant Violation"}throw x.framesToPop=1,x}}n.exports=o},function(n,r,i){function o(a){return function(){return a}}var l=function(){};l.thatReturns=o,l.thatReturnsFalse=o(!1),l.thatReturnsTrue=o(!0),l.thatReturnsNull=o(null),l.thatReturnsThis=function(){return this},l.thatReturnsArgument=function(a){return a},n.exports=l},function(n,r,i){/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var o=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;function s(d){if(d==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(d)}function u(){try{if(!Object.assign)return!1;var d=new String("abc");if(d[5]="de",Object.getOwnPropertyNames(d)[0]==="5")return!1;for(var m={},p=0;p<10;p++)m["_"+String.fromCharCode(p)]=p;var w=Object.getOwnPropertyNames(m).map(function(S){return m[S]});if(w.join("")!=="0123456789")return!1;var x={};return"abcdefghijklmnopqrst".split("").forEach(function(S){x[S]=S}),Object.keys(Object.assign({},x)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}n.exports=u()?Object.assign:function(d,m){for(var p,w=s(d),x,S=1;S<arguments.length;S++){p=Object(arguments[S]);for(var N in p)l.call(p,N)&&(w[N]=p[N]);if(o){x=o(p);for(var h=0;h<x.length;h++)a.call(p,x[h])&&(w[x[h]]=p[x[h]])}}return w}},function(n,r,i){var o=i(1),l=o;n.exports=l},function(n,r,i){var o="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";n.exports=o},function(n,r,i){var o={};n.exports=o},function(n,r,i){function o(l,a,s,u,d){}n.exports=o},function(n,r,i){Object.defineProperty(r,"__esModule",{value:!0});var o=Object.assign||function(v){for(var k=1;k<arguments.length;k++){var E=arguments[k];for(var C in E)Object.prototype.hasOwnProperty.call(E,C)&&(v[C]=E[C])}return v},l=function(){function v(k,E){for(var C=0;C<E.length;C++){var z=E[C];z.enumerable=z.enumerable||!1,z.configurable=!0,"value"in z&&(z.writable=!0),Object.defineProperty(k,z.key,z)}}return function(k,E,C){return E&&v(k.prototype,E),C&&v(k,C),k}}(),a=i(8),s=x(a),u=i(11),d=x(u),m=i(14),p=w(m);function w(v){if(v&&v.__esModule)return v;var k={};if(v!=null)for(var E in v)Object.prototype.hasOwnProperty.call(v,E)&&(k[E]=v[E]);return k.default=v,k}function x(v){return v&&v.__esModule?v:{default:v}}function S(v,k){var E={};for(var C in v)k.indexOf(C)>=0||Object.prototype.hasOwnProperty.call(v,C)&&(E[C]=v[C]);return E}function N(v,k){if(!(v instanceof k))throw new TypeError("Cannot call a class as a function")}function h(v,k){if(!v)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return k&&(typeof k=="object"||typeof k=="function")?k:v}function c(v,k){if(typeof k!="function"&&k!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof k);v.prototype=Object.create(k&&k.prototype,{constructor:{value:v,enumerable:!1,writable:!0,configurable:!0}}),k&&(Object.setPrototypeOf?Object.setPrototypeOf(v,k):v.__proto__=k)}var f=function(v){c(k,v);function k(){var E,C,z,W;N(this,k);for(var _=arguments.length,oe=Array(_),he=0;he<_;he++)oe[he]=arguments[he];return W=(C=(z=h(this,(E=k.__proto__||Object.getPrototypeOf(k)).call.apply(E,[this].concat(oe))),z),z.state={delayed:z.props.delay>0},C),h(z,W)}return l(k,[{key:"componentDidMount",value:function(){var C=this,z=this.props.delay,W=this.state.delayed;W&&(this.timeout=setTimeout(function(){C.setState({delayed:!1})},z))}},{key:"componentWillUnmount",value:function(){var C=this.timeout;C&&clearTimeout(C)}},{key:"render",value:function(){var C=this.props,z=C.color;C.delay;var W=C.type,_=C.height,oe=C.width,he=S(C,["color","delay","type","height","width"]),Re=this.state.delayed?"blank":W,lt=p[Re],at={fill:z,height:_,width:oe};return s.default.createElement("div",o({style:at,dangerouslySetInnerHTML:{__html:lt}},he))}}]),k}(a.Component);f.propTypes={color:d.default.string,delay:d.default.number,type:d.default.string,height:d.default.oneOfType([d.default.string,d.default.number]),width:d.default.oneOfType([d.default.string,d.default.number])},f.defaultProps={color:"#fff",delay:0,type:"balls",height:64,width:64},r.default=f},function(n,r,i){n.exports=i(9)},function(n,r,i){/** @license React v16.3.2
 * react.production.min.js
 *
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var o=i(2),l=i(0),a=i(5),s=i(1),u=typeof Symbol=="function"&&Symbol.for,d=u?Symbol.for("react.element"):60103,m=u?Symbol.for("react.portal"):60106,p=u?Symbol.for("react.fragment"):60107,w=u?Symbol.for("react.strict_mode"):60108,x=u?Symbol.for("react.provider"):60109,S=u?Symbol.for("react.context"):60110,N=u?Symbol.for("react.async_mode"):60111,h=u?Symbol.for("react.forward_ref"):60112,c=typeof Symbol=="function"&&Symbol.iterator;function f(y){for(var j=arguments.length-1,M="http://reactjs.org/docs/error-decoder.html?invariant="+y,I=0;I<j;I++)M+="&args[]="+encodeURIComponent(arguments[I+1]);l(!1,"Minified React error #"+y+"; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",M)}var v={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}};function k(y,j,M){this.props=y,this.context=j,this.refs=a,this.updater=M||v}k.prototype.isReactComponent={},k.prototype.setState=function(y,j){typeof y!="object"&&typeof y!="function"&&y!=null&&f("85"),this.updater.enqueueSetState(this,y,j,"setState")},k.prototype.forceUpdate=function(y){this.updater.enqueueForceUpdate(this,y,"forceUpdate")};function E(){}E.prototype=k.prototype;function C(y,j,M){this.props=y,this.context=j,this.refs=a,this.updater=M||v}var z=C.prototype=new E;z.constructor=C,o(z,k.prototype),z.isPureReactComponent=!0;var W={current:null},_=Object.prototype.hasOwnProperty,oe={key:!0,ref:!0,__self:!0,__source:!0};function he(y,j,M){var I=void 0,F={},b=null,J=null;if(j!=null)for(I in j.ref!==void 0&&(J=j.ref),j.key!==void 0&&(b=""+j.key),j)_.call(j,I)&&!oe.hasOwnProperty(I)&&(F[I]=j[I]);var re=arguments.length-2;if(re===1)F.children=M;else if(1<re){for(var mt=Array(re),gt=0;gt<re;gt++)mt[gt]=arguments[gt+2];F.children=mt}if(y&&y.defaultProps)for(I in re=y.defaultProps,re)F[I]===void 0&&(F[I]=re[I]);return{$$typeof:d,type:y,key:b,ref:J,props:F,_owner:W.current}}function Re(y){return typeof y=="object"&&y!==null&&y.$$typeof===d}function lt(y){var j={"=":"=0",":":"=2"};return"$"+(""+y).replace(/[=:]/g,function(M){return j[M]})}var at=/\/+/g,Te=[];function st(y,j,M,I){if(Te.length){var F=Te.pop();return F.result=y,F.keyPrefix=j,F.func=M,F.context=I,F.count=0,F}return{result:y,keyPrefix:j,func:M,context:I,count:0}}function O(y){y.result=null,y.keyPrefix=null,y.func=null,y.context=null,y.count=0,10>Te.length&&Te.push(y)}function U(y,j,M,I){var F=typeof y;(F==="undefined"||F==="boolean")&&(y=null);var b=!1;if(y===null)b=!0;else switch(F){case"string":case"number":b=!0;break;case"object":switch(y.$$typeof){case d:case m:b=!0}}if(b)return M(I,y,j===""?"."+B(y,0):j),1;if(b=0,j=j===""?".":j+":",Array.isArray(y))for(var J=0;J<y.length;J++){F=y[J];var re=j+B(F,J);b+=U(F,re,M,I)}else if(y===null||typeof y>"u"?re=null:(re=c&&y[c]||y["@@iterator"],re=typeof re=="function"?re:null),typeof re=="function")for(y=re.call(y),J=0;!(F=y.next()).done;)F=F.value,re=j+B(F,J++),b+=U(F,re,M,I);else F==="object"&&(M=""+y,f("31",M==="[object Object]"?"object with keys {"+Object.keys(y).join(", ")+"}":M,""));return b}function B(y,j){return typeof y=="object"&&y!==null&&y.key!=null?lt(y.key):j.toString(36)}function K(y,j){y.func.call(y.context,j,y.count++)}function R(y,j,M){var I=y.result,F=y.keyPrefix;y=y.func.call(y.context,j,y.count++),Array.isArray(y)?L(y,I,M,s.thatReturnsArgument):y!=null&&(Re(y)&&(j=F+(!y.key||j&&j.key===y.key?"":(""+y.key).replace(at,"$&/")+"/")+M,y={$$typeof:d,type:y.type,key:j,ref:y.ref,props:y.props,_owner:y._owner}),I.push(y))}function L(y,j,M,I,F){var b="";M!=null&&(b=(""+M).replace(at,"$&/")+"/"),j=st(j,b,I,F),y==null||U(y,"",R,j),O(j)}var V={Children:{map:function(y,j,M){if(y==null)return y;var I=[];return L(y,I,null,j,M),I},forEach:function(y,j,M){if(y==null)return y;j=st(null,null,j,M),y==null||U(y,"",K,j),O(j)},count:function(y){return y==null?0:U(y,"",s.thatReturnsNull,null)},toArray:function(y){var j=[];return L(y,j,null,s.thatReturnsArgument),j},only:function(y){return Re(y)||f("143"),y}},createRef:function(){return{current:null}},Component:k,PureComponent:C,createContext:function(y,j){return j===void 0&&(j=null),y={$$typeof:S,_calculateChangedBits:j,_defaultValue:y,_currentValue:y,_changedBits:0,Provider:null,Consumer:null},y.Provider={$$typeof:x,_context:y},y.Consumer=y},forwardRef:function(y){return{$$typeof:h,render:y}},Fragment:p,StrictMode:w,unstable_AsyncMode:N,createElement:he,cloneElement:function(y,j,M){y==null&&f("267",y);var I=void 0,F=o({},y.props),b=y.key,J=y.ref,re=y._owner;if(j!=null){j.ref!==void 0&&(J=j.ref,re=W.current),j.key!==void 0&&(b=""+j.key);var mt=void 0;y.type&&y.type.defaultProps&&(mt=y.type.defaultProps);for(I in j)_.call(j,I)&&!oe.hasOwnProperty(I)&&(F[I]=j[I]===void 0&&mt!==void 0?mt[I]:j[I])}if(I=arguments.length-2,I===1)F.children=M;else if(1<I){mt=Array(I);for(var gt=0;gt<I;gt++)mt[gt]=arguments[gt+2];F.children=mt}return{$$typeof:d,type:y.type,key:b,ref:J,props:F,_owner:re}},createFactory:function(y){var j=he.bind(null,y);return j.type=y,j},isValidElement:Re,version:"16.3.2",__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentOwner:W,assign:o}},H=Object.freeze({default:V}),$=H&&V||H;n.exports=$.default?$.default:$},function(n,r,i){},function(n,r,i){n.exports=i(13)()},function(n,r,i){var o=i(1),l=i(0),a=i(3),s=i(2),u=i(4),d=i(6);n.exports=function(m,p){var w=typeof Symbol=="function"&&Symbol.iterator,x="@@iterator";function S(R){var L=R&&(w&&R[w]||R[x]);if(typeof L=="function")return L}var N="<<anonymous>>",h={array:k("array"),bool:k("boolean"),func:k("function"),number:k("number"),object:k("object"),string:k("string"),symbol:k("symbol"),any:E(),arrayOf:C,element:z(),instanceOf:W,node:Re(),objectOf:oe,oneOf:_,oneOfType:he,shape:lt,exact:at};function c(R,L){return R===L?R!==0||1/R===1/L:R!==R&&L!==L}function f(R){this.message=R,this.stack=""}f.prototype=Error.prototype;function v(R){function L(H,$,y,j,M,I,F){return j=j||N,I=I||y,F!==u&&p&&l(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"),$[y]==null?H?$[y]===null?new f("The "+M+" `"+I+"` is marked as required "+("in `"+j+"`, but its value is `null`.")):new f("The "+M+" `"+I+"` is marked as required in "+("`"+j+"`, but its value is `undefined`.")):null:R($,y,j,M,I)}var V=L.bind(null,!1);return V.isRequired=L.bind(null,!0),V}function k(R){function L(V,H,$,y,j,M){var I=V[H],F=O(I);if(F!==R){var b=U(I);return new f("Invalid "+y+" `"+j+"` of type "+("`"+b+"` supplied to `"+$+"`, expected ")+("`"+R+"`."))}return null}return v(L)}function E(){return v(o.thatReturnsNull)}function C(R){function L(V,H,$,y,j){if(typeof R!="function")return new f("Property `"+j+"` of component `"+$+"` has invalid PropType notation inside arrayOf.");var M=V[H];if(!Array.isArray(M)){var I=O(M);return new f("Invalid "+y+" `"+j+"` of type "+("`"+I+"` supplied to `"+$+"`, expected an array."))}for(var F=0;F<M.length;F++){var b=R(M,F,$,y,j+"["+F+"]",u);if(b instanceof Error)return b}return null}return v(L)}function z(){function R(L,V,H,$,y){var j=L[V];if(!m(j)){var M=O(j);return new f("Invalid "+$+" `"+y+"` of type "+("`"+M+"` supplied to `"+H+"`, expected a single ReactElement."))}return null}return v(R)}function W(R){function L(V,H,$,y,j){if(!(V[H]instanceof R)){var M=R.name||N,I=K(V[H]);return new f("Invalid "+y+" `"+j+"` of type "+("`"+I+"` supplied to `"+$+"`, expected ")+("instance of `"+M+"`."))}return null}return v(L)}function _(R){if(!Array.isArray(R))return o.thatReturnsNull;function L(V,H,$,y,j){for(var M=V[H],I=0;I<R.length;I++)if(c(M,R[I]))return null;var F=JSON.stringify(R);return new f("Invalid "+y+" `"+j+"` of value `"+M+"` "+("supplied to `"+$+"`, expected one of "+F+"."))}return v(L)}function oe(R){function L(V,H,$,y,j){if(typeof R!="function")return new f("Property `"+j+"` of component `"+$+"` has invalid PropType notation inside objectOf.");var M=V[H],I=O(M);if(I!=="object")return new f("Invalid "+y+" `"+j+"` of type "+("`"+I+"` supplied to `"+$+"`, expected an object."));for(var F in M)if(M.hasOwnProperty(F)){var b=R(M,F,$,y,j+"."+F,u);if(b instanceof Error)return b}return null}return v(L)}function he(R){if(!Array.isArray(R))return o.thatReturnsNull;for(var L=0;L<R.length;L++){var V=R[L];if(typeof V!="function")return a(!1,"Invalid argument supplied to oneOfType. Expected an array of check functions, but received %s at index %s.",B(V),L),o.thatReturnsNull}function H($,y,j,M,I){for(var F=0;F<R.length;F++){var b=R[F];if(b($,y,j,M,I,u)==null)return null}return new f("Invalid "+M+" `"+I+"` supplied to "+("`"+j+"`."))}return v(H)}function Re(){function R(L,V,H,$,y){return Te(L[V])?null:new f("Invalid "+$+" `"+y+"` supplied to "+("`"+H+"`, expected a ReactNode."))}return v(R)}function lt(R){function L(V,H,$,y,j){var M=V[H],I=O(M);if(I!=="object")return new f("Invalid "+y+" `"+j+"` of type `"+I+"` "+("supplied to `"+$+"`, expected `object`."));for(var F in R){var b=R[F];if(b){var J=b(M,F,$,y,j+"."+F,u);if(J)return J}}return null}return v(L)}function at(R){function L(V,H,$,y,j){var M=V[H],I=O(M);if(I!=="object")return new f("Invalid "+y+" `"+j+"` of type `"+I+"` "+("supplied to `"+$+"`, expected `object`."));var F=s({},V[H],R);for(var b in F){var J=R[b];if(!J)return new f("Invalid "+y+" `"+j+"` key `"+b+"` supplied to `"+$+"`.\nBad object: "+JSON.stringify(V[H],null,"  ")+`
Valid keys: `+JSON.stringify(Object.keys(R),null,"  "));var re=J(M,b,$,y,j+"."+b,u);if(re)return re}return null}return v(L)}function Te(R){switch(typeof R){case"number":case"string":case"undefined":return!0;case"boolean":return!R;case"object":if(Array.isArray(R))return R.every(Te);if(R===null||m(R))return!0;var L=S(R);if(L){var V=L.call(R),H;if(L!==R.entries){for(;!(H=V.next()).done;)if(!Te(H.value))return!1}else for(;!(H=V.next()).done;){var $=H.value;if($&&!Te($[1]))return!1}}else return!1;return!0;default:return!1}}function st(R,L){return R==="symbol"||L["@@toStringTag"]==="Symbol"||typeof Symbol=="function"&&L instanceof Symbol}function O(R){var L=typeof R;return Array.isArray(R)?"array":R instanceof RegExp?"object":st(L,R)?"symbol":L}function U(R){if(typeof R>"u"||R===null)return""+R;var L=O(R);if(L==="object"){if(R instanceof Date)return"date";if(R instanceof RegExp)return"regexp"}return L}function B(R){var L=U(R);switch(L){case"array":case"object":return"an "+L;case"boolean":case"date":case"regexp":return"a "+L;default:return L}}function K(R){return!R.constructor||!R.constructor.name?N:R.constructor.name}return h.checkPropTypes=d,h.PropTypes=h,h}},function(n,r,i){var o=i(1),l=i(0),a=i(4);n.exports=function(){function s(m,p,w,x,S,N){N!==a&&l(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")}s.isRequired=s;function u(){return s}var d={array:s,bool:s,func:s,number:s,object:s,string:s,symbol:s,any:s,arrayOf:u,element:s,instanceOf:u,node:s,objectOf:u,oneOf:u,oneOfType:u,shape:u,exact:u};return d.checkPropTypes=o,d.PropTypes=d,d}},function(n,r,i){Object.defineProperty(r,"__esModule",{value:!0});var o=i(15);Object.defineProperty(r,"blank",{enumerable:!0,get:function(){return x(o).default}});var l=i(16);Object.defineProperty(r,"balls",{enumerable:!0,get:function(){return x(l).default}});var a=i(17);Object.defineProperty(r,"bars",{enumerable:!0,get:function(){return x(a).default}});var s=i(18);Object.defineProperty(r,"bubbles",{enumerable:!0,get:function(){return x(s).default}});var u=i(19);Object.defineProperty(r,"cubes",{enumerable:!0,get:function(){return x(u).default}});var d=i(20);Object.defineProperty(r,"cylon",{enumerable:!0,get:function(){return x(d).default}});var m=i(21);Object.defineProperty(r,"spin",{enumerable:!0,get:function(){return x(m).default}});var p=i(22);Object.defineProperty(r,"spinningBubbles",{enumerable:!0,get:function(){return x(p).default}});var w=i(23);Object.defineProperty(r,"spokes",{enumerable:!0,get:function(){return x(w).default}});function x(S){return S&&S.__esModule?S:{default:S}}},function(n,r){n.exports=`<svg class="icon-blank" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"></svg>
`},function(n,r){n.exports=`<svg class="icon-loading" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path transform="translate(-8 0)" d="M4 12 A4 4 0 0 0 4 20 A4 4 0 0 0 4 12"> 
    <animateTransform attributeName="transform" type="translate" values="-8 0; 2 0; 2 0;" dur="0.8s" repeatCount="indefinite" begin="0" keytimes="0;.25;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8" calcMode="spline"  />
  </path>
  <path transform="translate(2 0)" d="M4 12 A4 4 0 0 0 4 20 A4 4 0 0 0 4 12"> 
    <animateTransform attributeName="transform" type="translate" values="2 0; 12 0; 12 0;" dur="0.8s" repeatCount="indefinite" begin="0" keytimes="0;.35;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8" calcMode="spline"  />
  </path>
  <path transform="translate(12 0)" d="M4 12 A4 4 0 0 0 4 20 A4 4 0 0 0 4 12"> 
    <animateTransform attributeName="transform" type="translate" values="12 0; 22 0; 22 0;" dur="0.8s" repeatCount="indefinite" begin="0" keytimes="0;.45;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8" calcMode="spline"  />
  </path>
  <path transform="translate(24 0)" d="M4 12 A4 4 0 0 0 4 20 A4 4 0 0 0 4 12"> 
    <animateTransform attributeName="transform" type="translate" values="22 0; 32 0; 32 0;" dur="0.8s" repeatCount="indefinite" begin="0" keytimes="0;.55;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8" calcMode="spline"  />
  </path>
</svg>
`},function(n,r){n.exports=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path transform="translate(2)" d="M0 12 V20 H4 V12z"> 
    <animate attributeName="d" values="M0 12 V20 H4 V12z; M0 4 V28 H4 V4z; M0 12 V20 H4 V12z; M0 12 V20 H4 V12z" dur="1.2s" repeatCount="indefinite" begin="0" keytimes="0;.2;.5;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.8 0.4 0.8" calcMode="spline"  />
  </path>
  <path transform="translate(8)" d="M0 12 V20 H4 V12z">
    <animate attributeName="d" values="M0 12 V20 H4 V12z; M0 4 V28 H4 V4z; M0 12 V20 H4 V12z; M0 12 V20 H4 V12z" dur="1.2s" repeatCount="indefinite" begin="0.2" keytimes="0;.2;.5;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.8 0.4 0.8" calcMode="spline"  />
  </path>
  <path transform="translate(14)" d="M0 12 V20 H4 V12z">
    <animate attributeName="d" values="M0 12 V20 H4 V12z; M0 4 V28 H4 V4z; M0 12 V20 H4 V12z; M0 12 V20 H4 V12z" dur="1.2s" repeatCount="indefinite" begin="0.4" keytimes="0;.2;.5;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.8 0.4 0.8" calcMode="spline" />
  </path>
  <path transform="translate(20)" d="M0 12 V20 H4 V12z">
    <animate attributeName="d" values="M0 12 V20 H4 V12z; M0 4 V28 H4 V4z; M0 12 V20 H4 V12z; M0 12 V20 H4 V12z" dur="1.2s" repeatCount="indefinite" begin="0.6" keytimes="0;.2;.5;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.8 0.4 0.8" calcMode="spline" />
  </path>
  <path transform="translate(26)" d="M0 12 V20 H4 V12z">
    <animate attributeName="d" values="M0 12 V20 H4 V12z; M0 4 V28 H4 V4z; M0 12 V20 H4 V12z; M0 12 V20 H4 V12z" dur="1.2s" repeatCount="indefinite" begin="0.8" keytimes="0;.2;.5;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.8 0.4 0.8" calcMode="spline" />
  </path>
</svg>
`},function(n,r){n.exports=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <circle transform="translate(8 0)" cx="0" cy="16" r="0"> 
    <animate attributeName="r" values="0; 4; 0; 0" dur="1.2s" repeatCount="indefinite" begin="0"
      keytimes="0;0.2;0.7;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.6 0.4 0.8" calcMode="spline" />
  </circle>
  <circle transform="translate(16 0)" cx="0" cy="16" r="0"> 
    <animate attributeName="r" values="0; 4; 0; 0" dur="1.2s" repeatCount="indefinite" begin="0.3"
      keytimes="0;0.2;0.7;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.6 0.4 0.8" calcMode="spline" />
  </circle>
  <circle transform="translate(24 0)" cx="0" cy="16" r="0"> 
    <animate attributeName="r" values="0; 4; 0; 0" dur="1.2s" repeatCount="indefinite" begin="0.6"
      keytimes="0;0.2;0.7;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.6 0.4 0.8" calcMode="spline" />
  </circle>
</svg>
`},function(n,r){n.exports=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path transform="translate(-8 0)" d="M0 12 V20 H8 V12z"> 
    <animateTransform attributeName="transform" type="translate" values="-8 0; 2 0; 2 0;" dur="0.8s" repeatCount="indefinite" begin="0" keytimes="0;.25;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8" calcMode="spline"  />
  </path>
  <path transform="translate(2 0)" d="M0 12 V20 H8 V12z"> 
    <animateTransform attributeName="transform" type="translate" values="2 0; 12 0; 12 0;" dur="0.8s" repeatCount="indefinite" begin="0" keytimes="0;.35;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8" calcMode="spline"  />
  </path>
  <path transform="translate(12 0)" d="M0 12 V20 H8 V12z"> 
    <animateTransform attributeName="transform" type="translate" values="12 0; 22 0; 22 0;" dur="0.8s" repeatCount="indefinite" begin="0" keytimes="0;.45;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8" calcMode="spline"  />
  </path>
  <path transform="translate(24 0)" d="M0 12 V20 H8 V12z"> 
    <animateTransform attributeName="transform" type="translate" values="22 0; 32 0; 32 0;" dur="0.8s" repeatCount="indefinite" begin="0" keytimes="0;.55;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8" calcMode="spline"  />
  </path>
</svg>
`},function(n,r){n.exports=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path transform="translate(0 0)" d="M0 12 V20 H4 V12z">
    <animateTransform attributeName="transform" type="translate" values="0 0; 28 0; 0 0; 0 0" dur="1.5s" begin="0" repeatCount="indefinite" keytimes="0;0.3;0.6;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline" />
  </path>
  <path opacity="0.5" transform="translate(0 0)" d="M0 12 V20 H4 V12z">
    <animateTransform attributeName="transform" type="translate" values="0 0; 28 0; 0 0; 0 0" dur="1.5s" begin="0.1s" repeatCount="indefinite" keytimes="0;0.3;0.6;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline" />
  </path>
  <path opacity="0.25" transform="translate(0 0)" d="M0 12 V20 H4 V12z">
    <animateTransform attributeName="transform" type="translate" values="0 0; 28 0; 0 0; 0 0" dur="1.5s" begin="0.2s" repeatCount="indefinite" keytimes="0;0.3;0.6;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline" />
  </path>
</svg>
`},function(n,r){n.exports=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path opacity=".25" d="M16 0 A16 16 0 0 0 16 32 A16 16 0 0 0 16 0 M16 4 A12 12 0 0 1 16 28 A12 12 0 0 1 16 4"/>
  <path d="M16 0 A16 16 0 0 1 32 16 L28 16 A12 12 0 0 0 16 4z">
    <animateTransform attributeName="transform" type="rotate" from="0 16 16" to="360 16 16" dur="0.8s" repeatCount="indefinite" />
  </path>
</svg>
`},function(n,r){n.exports=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <circle cx="16" cy="3" r="0">
    <animate attributeName="r" values="0;3;0;0" dur="1s" repeatCount="indefinite" begin="0" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline" />
  </circle>
  <circle transform="rotate(45 16 16)" cx="16" cy="3" r="0">
    <animate attributeName="r" values="0;3;0;0" dur="1s" repeatCount="indefinite" begin="0.125s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline" />
  </circle>
  <circle transform="rotate(90 16 16)" cx="16" cy="3" r="0">
    <animate attributeName="r" values="0;3;0;0" dur="1s" repeatCount="indefinite" begin="0.25s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline" />
  </circle>
  <circle transform="rotate(135 16 16)" cx="16" cy="3" r="0">
    <animate attributeName="r" values="0;3;0;0" dur="1s" repeatCount="indefinite" begin="0.375s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline" />
  </circle>
  <circle transform="rotate(180 16 16)" cx="16" cy="3" r="0">
    <animate attributeName="r" values="0;3;0;0" dur="1s" repeatCount="indefinite" begin="0.5s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline" />
  </circle>
  <circle transform="rotate(225 16 16)" cx="16" cy="3" r="0">
    <animate attributeName="r" values="0;3;0;0" dur="1s" repeatCount="indefinite" begin="0.625s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline" />
  </circle>
  <circle transform="rotate(270 16 16)" cx="16" cy="3" r="0">
    <animate attributeName="r" values="0;3;0;0" dur="1s" repeatCount="indefinite" begin="0.75s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline" />
  </circle>
  <circle transform="rotate(315 16 16)" cx="16" cy="3" r="0">
    <animate attributeName="r" values="0;3;0;0" dur="1s" repeatCount="indefinite" begin="0.875s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline" />
  </circle>
  <circle transform="rotate(180 16 16)" cx="16" cy="3" r="0">
    <animate attributeName="r" values="0;3;0;0" dur="1s" repeatCount="indefinite" begin="0.5s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline" />
  </circle>
</svg>
`},function(n,r){n.exports=`<svg id="loading" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path opacity=".1" d="M14 0 H18 V8 H14 z" transform="rotate(0 16 16)">
    <animate attributeName="opacity" from="1" to=".1" dur="1s" repeatCount="indefinite" begin="0"/>
  </path>
  <path opacity=".1" d="M14 0 H18 V8 H14 z" transform="rotate(45 16 16)">
    <animate attributeName="opacity" from="1" to=".1" dur="1s" repeatCount="indefinite" begin="0.125s"/>
  </path>
  <path opacity=".1" d="M14 0 H18 V8 H14 z" transform="rotate(90 16 16)">
    <animate attributeName="opacity" from="1" to=".1" dur="1s" repeatCount="indefinite" begin="0.25s"/>
  </path>
  <path opacity=".1" d="M14 0 H18 V8 H14 z" transform="rotate(135 16 16)">
    <animate attributeName="opacity" from="1" to=".1" dur="1s" repeatCount="indefinite" begin="0.375s"/>
  </path>
  <path opacity=".1" d="M14 0 H18 V8 H14 z" transform="rotate(180 16 16)">
    <animate attributeName="opacity" from="1" to=".1" dur="1s" repeatCount="indefinite" begin="0.5s"/>
  </path>
  <path opacity=".1" d="M14 0 H18 V8 H14 z" transform="rotate(225 16 16)">
    <animate attributeName="opacity" from="1" to=".1" dur="1s" repeatCount="indefinite" begin="0.675s"/>
  </path>
  <path opacity=".1" d="M14 0 H18 V8 H14 z" transform="rotate(270 16 16)">
    <animate attributeName="opacity" from="1" to=".1" dur="1s" repeatCount="indefinite" begin="0.75s"/>
  </path>
  <path opacity=".1" d="M14 0 H18 V8 H14 z" transform="rotate(315 16 16)">
    <animate attributeName="opacity" from="1" to=".1" dur="1s" repeatCount="indefinite" begin="0.875s"/>
  </path>
</svg>
`}])})})(Ap);var D1=Ap.exports;const Us=Pc(D1),F1=A.button`
  position: relative;
  width: 240px;
  height: 60px;
  margin-top: 50px;
  border: solid 1px #979797;
  background-color: black;
  color: white;
  font-size: 20px;
  letter-spacing: 4px;
  margin-left: auto;
  display: block;
  cursor: ${({$loading:e})=>e?"wait":"pointer"};

  @media screen and (max-width: 1279px) {
    width: 100%;
    height: 44px;
    margin-top: 36px;
    border: solid 1px black;
    font-size: 16px;
    letter-spacing: 3.2px;
  }
`,U1=A(Us)`
  position: absolute;
  right: 24px;
  top: 18px;
`;function B1({children:e,loading:t,onClick:n,...r}){const i=()=>{t||n()};return g.jsxs(F1,{...r,$loading:t,onClick:i,children:[e,t&&g.jsx(U1,{type:"spinningBubbles",color:"#fff",height:24,width:24})]})}const xc="tappay-sdk",_1="https://js.tappaysdk.com/tpdirect/v5.8.0";function $1(){return new Promise(e=>{if(document.getElementById(xc)){e();return}const t=document.createElement("script");t.setAttribute("id",xc),t.setAttribute("src",_1),t.addEventListener("load",e),document.head.appendChild(t)})}const Ei={setupSDK:async()=>{await $1(),window.TPDirect.setupSDK("12348","app_pa1pQcKoY22IlnSXq5m5WP5jFKzoRG58VEXpT7wU62ud7mMbDOGzCYIlzzLF","sandbox")},setupCard(e,t,n){window.TPDirect.card.setup({fields:{number:{element:e,placeholder:"**** **** **** ****"},expirationDate:{element:t,placeholder:"MM / YY"},ccv:{element:n,placeholder:"後三碼"}},styles:{".valid":{color:"green"},".invalid":{color:"red"}}})},canGetPrime(){return window.TPDirect.card.getTappayFieldsStatus().canGetPrime},getPrime(){return new Promise(e=>{window.TPDirect.card.getPrime(t=>{e(t)})})}},V1="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAYAAAAehFoBAAAABGdBTUEAALGPC/xhBQAAAhBJREFUWAntVkFLAkEUdpcUbIVAA6FbQYJE0B+I8BDBwsKKBF289Af6J906BuGlS1qXKG/euvQDog6Bhw5KurERhYv2jeyTaVFxRm+9geW997038779dpjZWIwHK8AKsAKsACvACrAC+goY+lP/zqxWq2UgZwIdYITZhGEYzUQise84TjPE5jLahGu1Wg68XDxxwQDEjuFvxOPxzX6/HwgMcRH+KXI38B/DunY6na4UCoVvEauOJdUJVA8i9/DXKQahodvr9V4II4ucC1884iVinuf5cC9FrDpM1QlS/ZfkK7kg/aM0QSrWVtg0zT00PsDnVloD9W3XdesSByVXqVlk5TwI7wIb7uFIbmKIOa1Go/GAAm9i0ZSENmE0vsK6Wdgpy49PdTqdZ2Quxmeno9p7GESz4dIf+MxvkTaviEenAPIDPE9Ug+20Qr6q1SZMjUCkmEwmd6T4PZPJ5ICfEIaXq5RKpTziO8J07dyEce62bNtuEwGQ6+KMDWBbhMFSXsak9Ozu3IRnb7WYSia8GB0nr8IKT9ZmMZn/pzD+2lL1et0i/XD+Lgsfl4OMDX3kUlSna7WvZmoYBMG57/sdinH+ruFn/hZ2W8LKwFaBOYTp2nkIf6KpUGwr2hzE7AiWAnZIGL7K6NombFarTRg33BHUFT/lSmtgW3Qty7qelSDXsQKsACvACrACrAArsEgFfgGMmK6lB62LwwAAAABJRU5ErkJggg==",W1=A.div`
  display: flex;

  @media screen and (max-width: 1279px) {
    padding-bottom: 10px;
    border-bottom: 1px solid #3f3a3a;
  }
`,H1=A.div`
  flex-grow: 1;
`,b1=A.div`
  width: 185px;
  padding-left: 20px;

  @media screen and (max-width: 1279px) {
    ${e=>e.hideOnMobile&&"display: none;"}
  }
`,Q1=A.div`
  width: 166px;
  padding-left: 12px;

  @media screen and (max-width: 1279px) {
    ${e=>e.hideOnMobile&&"display: none;"}
  }
`,Y1=A.div`
  width: 167px;
  padding-left: 15px;

  @media screen and (max-width: 1279px) {
    ${e=>e.hideOnMobile&&"display: none;"}
  }
`,G1=A.div`
  width: 70px;
`,K1=A.div`
  padding: 40px 30px;
  margin-top: 16px;
  border: solid 1px #979797;

  @media screen and (max-width: 1279px) {
    padding: 0;
    margin-top: 10px;
    border: none;
  }
`,X1=A.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 1279px) {
    align-items: flex-start;
    flex-wrap: wrap;
    padding-bottom: 20px;
    border-bottom: 1px solid #3f3a3a;
    font-size: 14px;
    line-height: 17px;
  }

  & + & {
    margin-top: 30px;

    @media screen and (max-width: 1279px) {
      margin-top: 20px;
    }
  }
`,Z1=A.img`
  width: 114px;

  @media screen and (max-width: 1279px) {
    order: 1;
  }
`,J1=A.div`
  margin-left: 20px;
  flex-grow: 1;
  align-self: flex-start;

  @media screen and (max-width: 1279px) {
    width: calc(100% - 174px);
    order: 1;
  }
`,q1=A.div``,ev=A.div`
  margin-top: 18px;
`,tv=A.div`
  margin-top: 22px;
`,nv=A.div`
  margin-top: 10px;
`,rv=A.div`
  width: 185px;

  @media screen and (max-width: 1279px) {
    margin-top: 20px;
    text-align: center;
    width: calc(100% / 3);
    order: 2;
  }
`,iv=A.div`
  ${e=>e.hideOnDesktop&&"display: none;"}

  @media screen and (max-width: 1279px) {
    display: block;
  }
`,ov=A.select`
  width: 80px;
  height: 30px;
  padding-left: 17px;
  border-radius: 8px;
  border: solid 1px #979797;
  background-color: #f3f3f3;

  @media screen and (max-width: 1279px) {
    margin-top: 12px;
  }
`,lv=A.div`
  width: 166px;

  @media screen and (max-width: 1279px) {
    margin-top: 20px;
    text-align: center;
    width: calc(100% / 3);
    order: 2;
  }
`,av=A.div`
  ${e=>e.hideOnDesktop&&"display: none;"}

  @media screen and (max-width: 1279px) {
    display: block;
  }
`,sv=A.div`
  @media screen and (max-width: 1279px) {
    margin-top: 20px;
  }
`,uv=A.div`
  width: 167px;

  @media screen and (max-width: 1279px) {
    margin-top: 20px;
    text-align: center;
    width: calc(100% / 3);
    order: 2;
  }
`,cv=A.div`
  ${e=>e.hideOnDesktop&&"display: none;"}

  @media screen and (max-width: 1279px) {
    display: block;
  }
`,dv=A.div`
  @media screen and (max-width: 1279px) {
    margin-top: 20px;
  }
`,fv=A.div`
  width: 40px;
  height: 40px;
  background-image: url(${V1});
  background-size: contain;
  cursor: pointer;

  @media screen and (max-width: 1279px) {
    order: 1;
    background-position: center -10px;
  }
`;function pv(){const{cartItems:e,setCartItems:t}=P.useContext(ii);function n(i,o){const l=e.map((a,s)=>s===i?{...a,qty:o}:a);t(l),window.alert("已修改數量")}function r(i){const o=e.filter((l,a)=>a!==i);t(o),window.alert("已刪除商品")}return g.jsxs(g.Fragment,{children:[g.jsxs(W1,{children:[g.jsxs(H1,{children:["購物車(",e.length,")"]}),g.jsx(b1,{hideOnMobile:!0,children:"數量"}),g.jsx(Q1,{hideOnMobile:!0,children:"單價"}),g.jsx(Y1,{hideOnMobile:!0,children:"小計"}),g.jsx(G1,{})]}),g.jsx(K1,{children:e.map((i,o)=>g.jsxs(X1,{children:[g.jsx(Z1,{src:i.image}),g.jsxs(J1,{children:[g.jsx(q1,{children:i.name}),g.jsx(ev,{children:i.id}),g.jsxs(tv,{children:["顏色｜",i.color.name]}),g.jsxs(nv,{children:["尺寸｜",i.size]})]}),g.jsxs(rv,{children:[g.jsx(iv,{hideOnDesktop:!0,children:"數量"}),g.jsx(ov,{value:i.qty,onChange:l=>n(o,Number(l.target.value)),children:Array(i.stock).fill().map((l,a)=>g.jsx("option",{children:a+1},a))})]}),g.jsxs(lv,{children:[g.jsx(av,{hideOnDesktop:!0,children:"單價"}),g.jsxs(sv,{children:["NT.",i.price]})]}),g.jsxs(uv,{children:[g.jsx(cv,{hideOnDesktop:!0,children:"小計"}),g.jsxs(dv,{children:["NT.",i.qty*i.price]})]}),g.jsx(fv,{onClick:()=>r(o)})]},`${i.id}-${i.color.code}-${i.size}`))})]})}const hv=A.div`
  margin: 0 auto;
  padding: 47px 0 263px;
  max-width: 1160px;
  line-height: 19px;
  font-size: 16px;
  color: #3f3a3a;

  @media screen and (max-width: 1279px) {
    padding: 20px 24px 236px;
  }
`,mv=A.div`
  padding: 22px 30px;
  margin-top: 26px;
  background-color: #e8e8e8;
  display: flex;
  align-items: center;
  line-height: 19px;
  font-size: 16px;

  @media screen and (max-width: 1279px) {
    padding: 10px 10px 20px;
    flex-direction: column;
    align-items: flex-start;
    font-size: 14px;
    line-height: 17px;
  }
`,Ia=A.label`
  color: #3f3a3a;
  margin-left: 30px;

  @media screen and (max-width: 1279px) {
    margin-left: 0;
  }
`,wc=A.select`
  width: 171px;
  height: 30px;
  margin-left: 20px;
  padding-left: 17px;
  border-radius: 8px;
  border: solid 1px #979797;
  background-color: #f3f3f3;

  & + ${Ia} {
    margin-left: 82px;

    @media screen and (max-width: 1279px) {
      margin-left: 0;
      margin-top: 20px;
    }
  }

  @media screen and (max-width: 1279px) {
    margin-left: 0;
    margin-top: 10px;
    width: 100%;
  }
`,gv=A.div`
  line-height: 26px;
  margin-top: 20px;
  font-size: 16px;
  color: #3f3a3a;
`,Sc=A.fieldset`
  margin-top: 50px;

  @media screen and (max-width: 1279px) {
    margin-top: 20px;
  }
`,yo=A.legend`
  line-height: 19px;
  font-size: 16px;
  font-weight: bold;
  color: #3f3a3a;
  padding-bottom: 16px;
  border-bottom: 1px solid #3f3a3a;
  width: 100%;
`,mr=A.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 30px;
  width: 684px;

  ${yo} + & {
    margin-top: 25px;
  }

  @media screen and (max-width: 1279px) {
    line-height: 17px;
    font-size: 14px;
    margin-top: 20px;
    width: 100%;

    ${yo} + & {
      margin-top: 20px;
    }
  }
`,gr=A.label`
  width: 110px;
  line-height: 19px;
  font-size: 16px;
  color: #3f3a3a;
  display: block;

  @media screen and (max-width: 1279px) {
    width: 100%;
  }
`,Pi=A.input`
  width: 574px;
  height: 30px;
  border-radius: 8px;
  border: solid 1px ${({invalid:e})=>e?"#CB4042":"#979797"};

  @media screen and (max-width: 1279px) {
    margin-top: 10px;
    width: 100%;
  }
`,vv=A.div`
  line-height: 19px;
  font-size: 16px;
  color: #8b572a;
  margin-top: 10px;
  width: 100%;
  text-align: right;
`,yv=A.div`
  margin-left: 8px;
  display: flex;
  align-items: center;

  & + & {
    margin-left: 30px;
  }

  @media screen and (max-width: 1279px) {
    margin-left: 0;
    margin-top: 10px;

    & + & {
      margin-left: 27px;
    }
  }
`,xv=A.input`
  margin: 0;
  width: 16px;
  height: 16px;
`,wv=A.label`
  margin-left: 10px;
  line-height: 26px;

  @media screen and (max-width: 1279px) {
    font-size: 14px;
  }
`,Bs=A.div`
  display: flex;
  align-items: center;
  width: 240px;
  margin-left: auto;

  @media screen and (max-width: 1279px) {
    width: 200px;
  }
`,Sv=A(Bs)`
  margin-top: 40px;

  @media screen and (max-width: 1279px) {
    margin-top: 24px;
  }
`,kv=A(Bs)`
  margin-top: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #3f3a3a;

  @media screen and (max-width: 1279px) {
    margin-top: 20px;
    padding-bottom: 24px;
    border-bottom: 1px solid #3f3a3a;
  }
`,Cv=A(Bs)`
  margin-top: 20px;

  @media screen and (max-width: 1279px) {
    margin-top: 16px;
  }
`,Sl=A.div`
  line-height: 19px;
  font-size: 16px;
  color: #3f3a3a;

  @media screen and (max-width: 1279px) {
    line-height: 17px;
    font-size: 14px;
  }
`,kl=A.div`
  margin-left: auto;
  line-height: 19px;
  font-size: 16px;
  color: #3f3a3a;
`,Cl=A.div`
  line-height: 36px;
  margin-left: 10px;
  font-size: 30px;
  color: #3f3a3a;
`,Av=[{label:"收件人姓名",key:"name",text:"務必填寫完整收件人姓名，避免包裹無法順利簽收"},{label:"Email",key:"email"},{label:"手機",key:"phone"},{label:"地址",key:"address"}],Ev=[{label:"08:00-12:00",value:"morning"},{label:"14:00-18:00",value:"afternoon"},{label:"不指定",value:"anytime"}];function Pv(){const[e,t]=P.useState({name:"",email:"",phone:"",address:"",time:""}),[n,r]=P.useState([]),[i,o]=P.useState(!1),l=ir(),a=P.useRef(),s=P.useRef(),u=P.useRef(),d=P.useRef(),{jwtToken:m,isLogin:p,login:w}=P.useContext($o),{cartItems:x,setCartItems:S}=P.useContext(ii);P.useEffect(()=>{(async()=>{await Ei.setupSDK(),Ei.setupCard(a.current,s.current,u.current)})()},[]);const N=x.reduce((f,v)=>f+v.price*v.qty,0),h=30;async function c(){try{o(!0);const f=p?m:await w();if(!f){window.alert("請登入會員");return}if(x.length===0){window.alert("尚未選購商品");return}if(Object.values(e).some(E=>!E)){window.alert("請填寫完整訂購資料"),r(Object.keys(e).filter(E=>!e[E])),d.current.scrollIntoView({behavior:"smooth",block:"center"});return}if(!Ei.canGetPrime()){window.alert("付款資料輸入有誤");return}const v=await Ei.getPrime();if(v.status!==0){window.alert("付款資料輸入有誤");return}const{data:k}=await Zn.checkout({prime:v.card.prime,order:{shipping:"delivery",payment:"credit_card",subtotal:N,freight:h,total:N+h,recipient:e,list:x}},f);window.alert("付款成功"),S([]),l("/thankyou",{state:{orderNumber:k.number}})}catch(f){console.log(f)}finally{o(!1)}}return g.jsxs(hv,{children:[g.jsx(pv,{}),g.jsxs(mv,{children:[g.jsx(Ia,{children:"配送國家"}),g.jsx(wc,{children:g.jsx("option",{children:"臺灣及離島"})}),g.jsx(Ia,{children:"付款方式"}),g.jsx(wc,{children:g.jsx("option",{children:"信用卡付款"})})]}),g.jsxs(gv,{children:["※ 提醒您：",g.jsx("br",{}),"● 選擇宅配-請填寫正確收件人資訊，避免包裹配送不達",g.jsx("br",{}),"● 選擇超商-請填寫正確收件人姓名(與證件相符)，避免無法領取"]}),g.jsxs("form",{ref:d,children:[g.jsxs(Sc,{children:[g.jsx(yo,{children:"訂購資料"}),Av.map(f=>g.jsxs(mr,{children:[g.jsx(gr,{children:f.label}),g.jsx(Pi,{value:e[f.key],onChange:v=>t({...e,[f.key]:v.target.value}),invalid:n.includes(f.key)}),f.text&&g.jsx(vv,{children:f.text})]},f.key)),g.jsxs(mr,{children:[g.jsx(gr,{children:"配送時間"}),Ev.map(f=>g.jsxs(yv,{children:[g.jsx(xv,{type:"radio",checked:e.time===f.value,onChange:v=>{v.target.checked&&t({...e,time:f.value})}}),g.jsx(wv,{children:f.label})]},f.value))]})]}),g.jsxs(Sc,{children:[g.jsx(yo,{children:"付款資料"}),g.jsxs(mr,{children:[g.jsx(gr,{children:"信用卡號碼"}),g.jsx(Pi,{as:"div",ref:a})]}),g.jsxs(mr,{children:[g.jsx(gr,{children:"有效期限"}),g.jsx(Pi,{as:"div",ref:s})]}),g.jsxs(mr,{children:[g.jsx(gr,{children:"安全碼"}),g.jsx(Pi,{as:"div",ref:u})]})]})]}),g.jsxs(Sv,{children:[g.jsx(Sl,{children:"總金額"}),g.jsx(kl,{children:"NT."}),g.jsx(Cl,{children:N})]}),g.jsxs(kv,{children:[g.jsx(Sl,{children:"運費"}),g.jsx(kl,{children:"NT."}),g.jsx(Cl,{children:h})]}),g.jsxs(Cv,{children:[g.jsx(Sl,{children:"應付金額"}),g.jsx(kl,{children:"NT."}),g.jsx(Cl,{children:N+h})]}),g.jsx(B1,{loading:i,onClick:c,children:"確認付款"})]})}const jv=A.div`
  height: 500px;
  position: relative;

  @media screen and (max-width: 1279px) {
    height: 185px;
  }
`,Rv=A(Do)`
  width: 100%;
  height: 100%;
  position: absolute;
  background-size: cover;
  background-position: center;
  background-image: url(${e=>e.$backgroundImageUrl});
  opacity: ${e=>e.$isActive?1:0};
  ${e=>e.$isActive&&"z-index: 1;"}
  transition: opacity 1s;
  text-decoration: none;
  color: #070707;
`,Tv=A.div`
  max-width: 1200px;
  margin: 0 auto;
  padding-top: 166px;
  padding-left: 47px;
  font-weight: 100;

  @media screen and (max-width: 1279px) {
    padding-top: 30px;
    padding-left: 23px;
  }
`,Nv=A.div`
  font-size: 30px;
  white-space: pre;
  line-height: 57px;

  @media screen and (max-width: 1279px) {
    font-size: 15px;
    line-height: 28px;
  }
`,zv=A.div`
  font-size: 20px;
  line-height: 64px;
  @media screen and (max-width: 1279px) {
    font-size: 10px;
    line-height: 32px;
  }
`,Iv=A.div`
  position: absolute;
  bottom: 34px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  z-index: 2;

  @media screen and (max-width: 1279px) {
    bottom: 18px;
  }
`,Ov=A.div`
  width: 10px;
  height: 10px;
  background-color: ${e=>e.$isActive?"#8b572a":"white"};
  border-radius: 50%;
  cursor: pointer;

  @media screen and (max-width: 1279px) {
    width: 4px;
    height: 4px;
    background-color: ${e=>e.$isActive?"#8b572a":"white"};
  }

  & + & {
    margin-left: 22px;

    @media screen and (max-width: 1279px) {
      margin-left: 8.8px;
    }
  }
`;function Mv(){const[e,t]=P.useState([]),[n,r]=P.useState(0),i=P.useRef();return P.useEffect(()=>{async function o(){const{data:l}=await Zn.getCampaigns();t(l),i.current=window.setInterval(()=>{r(a=>a===l.length-1?0:a+1)},5e3)}o()},[]),g.jsxs(jv,{children:[e.map(({picture:o,product_id:l,story:a},s)=>g.jsx(Rv,{$isActive:s===n,$backgroundImageUrl:o,to:`/products/${l}`,children:g.jsxs(Tv,{children:[g.jsx(Nv,{children:a.split(`\r
`).slice(0,3).join(`\r
`)}),g.jsx(zv,{children:a.split(`\r
`)[3]})]})},s)),g.jsx(Iv,{children:e.map((o,l)=>g.jsx(Ov,{$isActive:l===n,onClick:()=>{r(l),window.clearInterval(i.current),i.current=window.setInterval(()=>{r(a=>a===e.length-1?0:a+1)},5e3)}},l))})]})}const Lv=A.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 70px 0 46px;
  display: flex;
  flex-wrap: wrap;

  @media screen and (max-width: 1279px) {
    padding: 15px 21px 6px;
  }
`,Dv=A(Do)`
  width: calc((100% - 120px) / 3);
  margin: 0 20px 50px;
  flex-shrink: 0;
  text-decoration: none;

  @media screen and (max-width: 1279px) {
    width: calc((100% - 12px) / 2);
    margin: 0 3px 24px;
  }
`,Fv=A.img`
  width: 100%;
  vertical-align: middle;
`,Uv=A.div`
  margin-top: 20px;
  display: flex;

  @media screen and (max-width: 1279px) {
    margin-top: 8px;
  }
`,Bv=A.div`
  width: 24px;
  height: 24px;
  box-shadow: 0px 0px 1px #bbbbbb;
  background-color: ${e=>e.$colorCode};

  @media screen and (max-width: 1279px) {
    width: 12px;
    height: 12px;
  }

  & + & {
    margin-left: 10px;

    @media screen and (max-width: 1279px) {
      margin-left: 6px;
    }
  }
`,_v=A.div`
  margin-top: 20px;
  font-size: 20px;
  letter-spacing: 4px;
  color: #3f3a3a;
  line-height: 24px;

  @media screen and (max-width: 1279px) {
    margin-top: 10px;
    font-size: 12px;
    letter-spacing: 2.4px;
    line-height: 14px;
  }
`,$v=A.div`
  margin-top: 10px;
  font-size: 20px;
  letter-spacing: 4px;
  color: #3f3a3a;
  line-height: 24px;

  @media screen and (max-width: 1279px) {
    margin-top: 8px;
    font-size: 12px;
    letter-spacing: 2.4px;
    line-height: 14px;
  }
`,Vv=A(Us)`
  margin: 0 auto;
`;function Wv(){const[e,t]=P.useState([]),[n,r]=P.useState(!1),[i]=Kf(),o=i.get("keyword"),l=i.get("category")||"all";return P.useEffect(()=>{let a=0,s=!1;async function u(){s=!0,r(!0);const m=o?await Zn.searchProducts(o,a):await Zn.getProducts(l,a);t(a===0?m.data:p=>[...p,...m.data]),a=m.next_paging,s=!1,r(!1)}async function d(){if(window.innerHeight+window.scrollY>=document.body.offsetHeight){if(a===void 0||s)return;u()}}return u(),window.addEventListener("scroll",d),()=>{window.removeEventListener("scroll",d)}},[o,l]),g.jsxs(Lv,{children:[e.map(({id:a,main_image:s,colors:u,title:d,price:m})=>g.jsxs(Dv,{to:`/products/${a}`,children:[g.jsx(Fv,{src:s}),g.jsx(Uv,{children:u.map(({code:p})=>g.jsx(Bv,{$colorCode:`#${p}`},p))}),g.jsx(_v,{children:d}),g.jsxs($v,{children:["TWD.",m]})]},a)),n&&g.jsx(Vv,{type:"spinningBubbles",color:"#313538"})]})}function Hv(){return g.jsxs(g.Fragment,{children:[g.jsx(Mv,{}),g.jsx(Wv,{})]})}const bv="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAuVJREFUaAXtWdtuGjEQnYXltlwrHsKlQSW/wEPzVuWtUv42jfovgUrpYwKiEAiU5do5ThfByrs14FCt5JHIeG3P2DNn7JndWBsmijDFIrx3sXVjwP9G0CBgEDjRAyaETnTgyeL2yRp8CtoPD/T9/huB5/N5uqjWBK/WatRqtQhcJ0U+hLQjsF6vaTab0XQ6pbhtk8vtZDJJi/mc1u9QtWg3YLFY0ODXgLrPXTbEJSfjEIwqFYu0XC51Ro/Qpd2A1WpFrusKBOD534xAKp2mORu2YUN0U+TPgDFAd0gcqs8gcKjHdM+PPAJK12in3RaOQyJa810elpB+Pj7SZDIR83Hvo21ZFnW7XfrR6WzHZEgkEgnKZDIEDqpUq7Jpe31KBtzf3QkhbMjljBqWkIbDIfV4syDkg36vRyPuexkMqN/vUzabFWOyP4VCgT7W6wQO+np7K5u216dkgIfAnDePxAQeRMjEMgTQ9zIek83lRRCVy2XacCIEV6VgbTsadhdd8AIcEzuj+018o4nF3o4WQgdt/KAjwZnZC499qbcnjNscPqihVElpJspiELyLzYAHEbY+jcfFsGdAnJ+xcYdLilQqFSRKWY7/9D/m+IWVDNgiwB5N8Oatvx72K8MzjPPGdw2AV1EbJUMMeDcEmldXYq8o1FAqgwdRjw/teDSiyesrwfO4VeB1HMz65eX2gMrkc7mcuHnAVUkJgS83N0IfymLEv+ABK+BN7PnpiWAIPP6BDyRCEG9in6+vQ9/IEGaQCTsn/mWVDPAQ8AvLnuF5x3HEkIcAPIqbpdFo0KdmUyZ2dF/kM7Ex4GjsNQkaBDQ58mg1BgG/62xOXlm+Nov8GSXPySvH1SeuVZQIXo3klznlWSkPHLJAijNvpVKhMVeeuP8vuA1eKpVEMXeILpW52g3YRQC1P35AAN+G4iE1lMpmZXMifwYs829WGa5n7It8CBkDzhgt0qUMAlK3nLHTIHBGZ0uX+gOYquYK+8FblgAAAABJRU5ErkJggg==",Qv="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAWtJREFUaAXtmDFrwzAQhZ9tqTKV47QUQ6AZm99S8vPTLV2SdEkNKV48GIzdWiIeMggiH6gY7oacc/jpdO+TFke/Q2DGEc9473brPMB/E2QCTIDoAB8hooFkORMgW0hcgAkQDSTLmQDZQuICTIBoIFnOBMgWEhdgAkQDyXJBWaFtWyvvug5938Nk3xBCQEoJk6fE7I/QtLGvVlVVZZ+apsHP5QKTfSPPc7yu1zDZRBz7eUoa4Hg42Kbf5zM+djuY7Btvmw3et1tora006AAjgbIs8bnf4+t08t2/dbyua3uHvMWDgETgYbh8JpRSyLMMy+sxsMU7fxaDLkkSRFF0p+L2NdIAI/bnpyWK1Qo9/L9SvhQF0lTd7srjH2mAkUCqUiwyjWYCAa0fIYWcTMDvyns4E+rViL9Oh7La0Wf2R4gHcJANVmYCwax2NGICDmOClZlAMKsdjZiAw5hgZSYQzGpHIybgMCZYefYE/gANDEISH7QX/gAAAABJRU5ErkJggg==",Al=A.div`
  display: flex;
  align-items: center;
  margin-top: 30px;
`,El=A.div`
  line-height: 24px;
  font-size: 20px;
  letter-spacing: 4px;
  color: #3f3a3a;

  @media screen and (max-width: 1279px) {
    line-height: 17px;
    font-size: 14px;
    letter-spacing: 2.8px;

    ${e=>e.hideOnMobile&&"display: none;"}
  }
`,Yv=A.div`
  width: 36px;
  height: 36px;
  padding: 6px;
  border: 6px solid white;
  box-shadow: 0px 0px 1px #bbbbbb;
  cursor: pointer;
  margin-left: 21px;
  background-color: ${e=>e.$colorCode};
  ${e=>e.$isSelected&&"outline: 1px solid #979797;"}

  & + & {
    margin-left: 15px;
  }
`,Gv=A.div`
  width: 34px;
  height: 34px;
  background-color: ${e=>e.$isSelected?"black":"#ececec"};
  color: ${e=>e.$isSelected?"white":"#3f3a3a"};
  border-radius: 50%;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 22px;
  cursor: ${e=>e.$isDisabled?" not-allowed":"pointer"};
  ${e=>e.$isDisabled&&"opacity: 0.25;"}

  & + & {
    margin-left: 20px;
  }
`,Kv=A.div`
  margin-left: 28px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 160px;
  height: 44px;
  padding: 0 10px;
  border: 1px solid #979797;
  font-size: 20px;

  @media screen and (max-width: 1279px) {
    margin-left: 0;
    width: 100%;
    padding: 0 30px;
  }
`,Xv=A.div`
  color: #8b572a;
`,Ep=A.div`
  cursor: pointer;
  background-size: contain;
  width: 16px;
  height: 16px;
`,Zv=A(Ep)`
  background-image: url(${Qv});
`,Jv=A(Ep)`
  background-image: url(${bv});
`,qv=A.button`
  width: 100%;
  height: 60px;
  margin-top: 29px;
  border: solid 1px #979797;
  background-color: black;
  font-size: 20px;
  letter-spacing: 4px;
  color: white;
  cursor: pointer;

  @media screen and (max-width: 1279px) {
    height: 44px;
    margin-top: 10px;
    font-size: 16px;
    letter-spacing: 3.2px;
    color: white;
  }
`;function ey({product:e}){const[t,n]=P.useState(),[r,i]=P.useState(),[o,l]=P.useState(0),{cartItems:a,setCartItems:s}=P.useContext(ii);function u(p,w){var S;if(!p||!w)return 0;const x=((S=a.find(N=>N.id===e.id&&N.color.code===p&&N.size===w))==null?void 0:S.qty)||0;return e.variants.find(N=>N.color_code===p&&N.size===w).stock-x}function d(){if(!t){window.alert("請選擇顏色");return}if(!r){window.alert("請選擇尺寸");return}if(o===0){window.alert("請選擇數量");return}const p=a.findIndex(x=>x.id===e.id&&x.color.code===t&&x.size===r),w=p!==-1?a.map((x,S)=>S===p?{...x,qty:x.qty+o}:x):[...a,{color:e.colors.find(x=>x.code===t),id:e.id,image:e.main_image,name:e.title,price:e.price,qty:o,size:r,stock:u(t,r)}];s(w),n(),i(),l(0),window.alert("已加入商品")}function m(){return t?r?o===0?"請選擇數量":"加入購物車":"請選擇尺寸":"請選擇顏色"}return g.jsxs(g.Fragment,{children:[g.jsxs(Al,{children:[g.jsx(El,{children:"顏色｜"}),e.colors.map(p=>g.jsx(Yv,{$isSelected:p.code===t,$colorCode:`#${p.code}`,onClick:()=>{n(p.code),i(),l(0)}},p.code))]}),g.jsxs(Al,{children:[g.jsx(El,{children:"尺寸｜"}),e.sizes.map(p=>{const w=u(t,p);return g.jsx(Gv,{$isSelected:p===r,$isDisabled:w===0,onClick:()=>{w!==0&&(i(p),l(0))},children:p},p)})]}),g.jsxs(Al,{children:[g.jsx(El,{hideOnMobile:!0,children:"數量｜"}),g.jsxs(Kv,{children:[g.jsx(Zv,{onClick:()=>{!r||o===0||l(o-1)}}),g.jsx(Xv,{children:o}),g.jsx(Jv,{onClick:()=>{const p=u(t,r);!r||o===p||l(o+1)}})]})]}),g.jsx(qv,{onClick:d,children:m()})]})}const ty=A.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 65px 0 49px;
  display: flex;
  flex-wrap: wrap;

  @media screen and (max-width: 1279px) {
    padding: 0 0 32px;
  }
`,ny=A.img`
  width: 560px;

  @media screen and (max-width: 1279px) {
    width: 100%;
  }
`,ry=A.div`
  margin-left: 42px;
  flex-grow: 1;

  @media screen and (max-width: 1279px) {
    margin: 17px 24px 0;
  }
`,iy=A.div`
  line-height: 38px;
  font-size: 32px;
  letter-spacing: 6.4px;
  color: #3f3a3a;

  @media screen and (max-width: 1279px) {
    line-height: 24px;
    font-size: 20px;
    letter-spacing: 4px;
  }
`,oy=A.div`
  line-height: 24px;
  margin-top: 16px;
  font-size: 20px;
  letter-spacing: 4px;
  color: #bababa;

  @media screen and (max-width: 1279px) {
    line-height: 19px;
    margin-top: 10px;
    font-size: 16px;
    letter-spacing: 3.2px;
  }
`,ly=A.div`
  line-height: 36px;
  margin-top: 40px;
  font-size: 30px;
  color: #3f3a3a;
  padding-bottom: 20px;
  border-bottom: 1px solid #3f3a3a;

  @media screen and (max-width: 1279px) {
    line-height: 24px;
    margin-top: 20px;
    font-size: 20px;
    padding-bottom: 10px;
  }
`,Vo=A.div`
  line-height: 30px;
  font-size: 20px;
  color: #3f3a3a;

  @media screen and (max-width: 1279px) {
    line-height: 24px;
    font-size: 14px;
  }
`,ay=A(Vo)`
  margin-top: 40px;

  @media screen and (max-width: 1279px) {
    margin-top: 28px;
  }
`,sy=A(Vo)`
  margin-top: 30px;

  @media screen and (max-width: 1279px) {
    margin-top: 24px;
  }
`,Pp=A(Vo)`
  white-space: pre;
`,kc=A(Vo)`
  ${Pp} + & {
    margin-top: 30px;

    @media screen and (max-width: 1279px) {
      margin-top: 24px;
    }
  }
`,uy=A.div`
  margin: 50px 0 0;
  width: 100%;

  @media screen and (max-width: 1279px) {
    margin: 28px 24px 0;
  }
`,cy=A.div`
  line-height: 30px;
  font-size: 20px;
  letter-spacing: 4px;
  color: #8b572a;
  display: flex;
  align-items: center;

  @media screen and (max-width: 1279px) {
    font-size: 16px;
    letter-spacing: 3.2px;
  }

  &::after {
    content: '';
    height: 1px;
    flex-grow: 1;
    background-color: #3f3a3a;
    margin-left: 64px;

    @media screen and (max-width: 1279px) {
      margin-left: 35px;
    }
  }
`,dy=A.div`
  line-height: 30px;
  margin-top: 28px;
  font-size: 20px;
  color: #3f3a3a;

  @media screen and (max-width: 1279px) {
    line-height: 25px;
    margin-top: 12px;
    font-size: 14px;
  }
`,fy=A.div`
  margin: 30px 0 0;

  @media screen and (max-width: 1279px) {
    margin: 20px 24px 0;
    width: 100%;
  }
`,py=A.img`
  @media screen and (max-width: 1279px) {
    width: 100%;
  }

  & + & {
    margin-top: 30px;

    @media screen and (max-width: 1279px) {
      margin-top: 20px;
    }
  }
`;function hy(){const[e,t]=P.useState(),{id:n}=Tm();return P.useEffect(()=>{async function r(){const{data:i}=await Zn.getProduct(n);t(i)}r()},[n]),e?g.jsxs(ty,{children:[g.jsx(ny,{src:e.main_image}),g.jsxs(ry,{children:[g.jsx(iy,{children:e.title}),g.jsx(oy,{children:e.id}),g.jsxs(ly,{children:["TWD.",e.price]}),g.jsx(ey,{product:e}),g.jsx(ay,{children:e.note}),g.jsx(sy,{children:e.texture}),g.jsx(Pp,{children:e.description}),g.jsxs(kc,{children:["素材產地 / ",e.place]}),g.jsxs(kc,{children:["加工產地 / ",e.place]})]}),g.jsxs(uy,{children:[g.jsx(cy,{children:"細部說明"}),g.jsx(dy,{children:e.story})]}),g.jsx(fy,{children:e.images.map((r,i)=>g.jsx(py,{src:r},i))})]}):null}const my=A.div`
  padding: 60px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`,gy=A.div`
  padding-bottom: 16px;
  border-bottom: 1px solid #979797;
  font-size: 24px;
  font-weight: bold;
`,vy=A.img`
  margin-top: 24px;
`,Cc=A.div`
  margin-top: 24px;
`,Ac=A.button`
  margin-top: 24px;
`,yy=A(Us)`
  margin-top: 50px;
`;function xy(){const{user:e,isLogin:t,login:n,logout:r,loading:i}=P.useContext($o),o=()=>i?g.jsx(yy,{type:"spinningBubbles",color:"#313538"}):t?g.jsxs(g.Fragment,{children:[g.jsx(vy,{src:e.picture}),g.jsx(Cc,{children:e.name}),g.jsx(Cc,{children:e.email}),g.jsx(Ac,{onClick:r,children:"登出"})]}):g.jsx(Ac,{onClick:n,children:"登入"});return g.jsxs(my,{children:[g.jsx(gy,{children:"會員基本資訊"}),o()]})}const wy=A.div`
  padding: 60px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`,Sy=A.div`
  padding-bottom: 16px;
  border-bottom: 1px solid #979797;
  font-size: 24px;
  font-weight: bold;
`,Ec=A.div`
  margin-top: 24px;
`,ky=A.button`
  margin-top: 24px;
`;function Cy(){const{state:e}=yn(),t=ir();return e?g.jsxs(wy,{children:[g.jsx(Sy,{children:"感謝您的購買，我們會盡快將商品送達！"}),g.jsx(Ec,{children:"請記住以下訂單編號，以便查詢"}),g.jsx(Ec,{children:e.orderNumber}),g.jsx(ky,{onClick:()=>t("/"),children:"繼續購物"})]}):g.jsx(Gf,{to:"/",replace:!0})}const Ay=Pl.createRoot(document.getElementById("root"));Ay.render(g.jsx(Xm,{children:g.jsx(Hm,{children:g.jsxs(Tt,{path:"/",element:g.jsx(L1,{}),children:[g.jsx(Tt,{index:!0,element:g.jsx(Hv,{})}),g.jsx(Tt,{path:"products/:id",element:g.jsx(hy,{})}),g.jsx(Tt,{path:"checkout",element:g.jsx(Pv,{})}),g.jsx(Tt,{path:"thankyou",element:g.jsx(Cy,{})}),g.jsx(Tt,{path:"profile",element:g.jsx(xy,{})}),g.jsx(Tt,{path:"*",element:g.jsx(Gf,{to:"/",replace:!0})})]})})}));
