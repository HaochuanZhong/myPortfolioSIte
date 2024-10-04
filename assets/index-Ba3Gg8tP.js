(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();var Ei=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function J_(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var _g={exports:{}},ql={},xg={exports:{}},We={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var js=Symbol.for("react.element"),ex=Symbol.for("react.portal"),tx=Symbol.for("react.fragment"),nx=Symbol.for("react.strict_mode"),ix=Symbol.for("react.profiler"),rx=Symbol.for("react.provider"),ox=Symbol.for("react.context"),sx=Symbol.for("react.forward_ref"),ax=Symbol.for("react.suspense"),lx=Symbol.for("react.memo"),ux=Symbol.for("react.lazy"),Zh=Symbol.iterator;function cx(t){return t===null||typeof t!="object"?null:(t=Zh&&t[Zh]||t["@@iterator"],typeof t=="function"?t:null)}var yg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Sg=Object.assign,Eg={};function Yo(t,e,n){this.props=t,this.context=e,this.refs=Eg,this.updater=n||yg}Yo.prototype.isReactComponent={};Yo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Yo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Mg(){}Mg.prototype=Yo.prototype;function Ld(t,e,n){this.props=t,this.context=e,this.refs=Eg,this.updater=n||yg}var Nd=Ld.prototype=new Mg;Nd.constructor=Ld;Sg(Nd,Yo.prototype);Nd.isPureReactComponent=!0;var Qh=Array.isArray,Tg=Object.prototype.hasOwnProperty,Id={current:null},wg={key:!0,ref:!0,__self:!0,__source:!0};function Ag(t,e,n){var i,r={},o=null,s=null;if(e!=null)for(i in e.ref!==void 0&&(s=e.ref),e.key!==void 0&&(o=""+e.key),e)Tg.call(e,i)&&!wg.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:js,type:t,key:o,ref:s,props:r,_owner:Id.current}}function fx(t,e){return{$$typeof:js,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Dd(t){return typeof t=="object"&&t!==null&&t.$$typeof===js}function dx(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Jh=/\/+/g;function Nu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?dx(""+t.key):e.toString(36)}function el(t,e,n,i,r){var o=typeof t;(o==="undefined"||o==="boolean")&&(t=null);var s=!1;if(t===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(t.$$typeof){case js:case ex:s=!0}}if(s)return s=t,r=r(s),t=i===""?"."+Nu(s,0):i,Qh(r)?(n="",t!=null&&(n=t.replace(Jh,"$&/")+"/"),el(r,e,n,"",function(u){return u})):r!=null&&(Dd(r)&&(r=fx(r,n+(!r.key||s&&s.key===r.key?"":(""+r.key).replace(Jh,"$&/")+"/")+t)),e.push(r)),1;if(s=0,i=i===""?".":i+":",Qh(t))for(var a=0;a<t.length;a++){o=t[a];var l=i+Nu(o,a);s+=el(o,e,n,l,r)}else if(l=cx(t),typeof l=="function")for(t=l.call(t),a=0;!(o=t.next()).done;)o=o.value,l=i+Nu(o,a++),s+=el(o,e,n,l,r);else if(o==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return s}function sa(t,e,n){if(t==null)return t;var i=[],r=0;return el(t,i,"","",function(o){return e.call(n,o,r++)}),i}function hx(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Kt={current:null},tl={transition:null},px={ReactCurrentDispatcher:Kt,ReactCurrentBatchConfig:tl,ReactCurrentOwner:Id};function Cg(){throw Error("act(...) is not supported in production builds of React.")}We.Children={map:sa,forEach:function(t,e,n){sa(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return sa(t,function(){e++}),e},toArray:function(t){return sa(t,function(e){return e})||[]},only:function(t){if(!Dd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};We.Component=Yo;We.Fragment=tx;We.Profiler=ix;We.PureComponent=Ld;We.StrictMode=nx;We.Suspense=ax;We.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=px;We.act=Cg;We.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Sg({},t.props),r=t.key,o=t.ref,s=t._owner;if(e!=null){if(e.ref!==void 0&&(o=e.ref,s=Id.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Tg.call(e,l)&&!wg.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}return{$$typeof:js,type:t.type,key:r,ref:o,props:i,_owner:s}};We.createContext=function(t){return t={$$typeof:ox,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:rx,_context:t},t.Consumer=t};We.createElement=Ag;We.createFactory=function(t){var e=Ag.bind(null,t);return e.type=t,e};We.createRef=function(){return{current:null}};We.forwardRef=function(t){return{$$typeof:sx,render:t}};We.isValidElement=Dd;We.lazy=function(t){return{$$typeof:ux,_payload:{_status:-1,_result:t},_init:hx}};We.memo=function(t,e){return{$$typeof:lx,type:t,compare:e===void 0?null:e}};We.startTransition=function(t){var e=tl.transition;tl.transition={};try{t()}finally{tl.transition=e}};We.unstable_act=Cg;We.useCallback=function(t,e){return Kt.current.useCallback(t,e)};We.useContext=function(t){return Kt.current.useContext(t)};We.useDebugValue=function(){};We.useDeferredValue=function(t){return Kt.current.useDeferredValue(t)};We.useEffect=function(t,e){return Kt.current.useEffect(t,e)};We.useId=function(){return Kt.current.useId()};We.useImperativeHandle=function(t,e,n){return Kt.current.useImperativeHandle(t,e,n)};We.useInsertionEffect=function(t,e){return Kt.current.useInsertionEffect(t,e)};We.useLayoutEffect=function(t,e){return Kt.current.useLayoutEffect(t,e)};We.useMemo=function(t,e){return Kt.current.useMemo(t,e)};We.useReducer=function(t,e,n){return Kt.current.useReducer(t,e,n)};We.useRef=function(t){return Kt.current.useRef(t)};We.useState=function(t){return Kt.current.useState(t)};We.useSyncExternalStore=function(t,e,n){return Kt.current.useSyncExternalStore(t,e,n)};We.useTransition=function(){return Kt.current.useTransition()};We.version="18.3.1";xg.exports=We;var Ue=xg.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mx=Ue,gx=Symbol.for("react.element"),vx=Symbol.for("react.fragment"),_x=Object.prototype.hasOwnProperty,xx=mx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,yx={key:!0,ref:!0,__self:!0,__source:!0};function bg(t,e,n){var i,r={},o=null,s=null;n!==void 0&&(o=""+n),e.key!==void 0&&(o=""+e.key),e.ref!==void 0&&(s=e.ref);for(i in e)_x.call(e,i)&&!yx.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:gx,type:t,key:o,ref:s,props:r,_owner:xx.current}}ql.Fragment=vx;ql.jsx=bg;ql.jsxs=bg;_g.exports=ql;var N=_g.exports,Rg={exports:{}},xn={},Pg={exports:{}},Lg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(L,$){var Q=L.length;L.push($);e:for(;0<Q;){var oe=Q-1>>>1,Me=L[oe];if(0<r(Me,$))L[oe]=$,L[Q]=Me,Q=oe;else break e}}function n(L){return L.length===0?null:L[0]}function i(L){if(L.length===0)return null;var $=L[0],Q=L.pop();if(Q!==$){L[0]=Q;e:for(var oe=0,Me=L.length,Le=Me>>>1;oe<Le;){var W=2*(oe+1)-1,ee=L[W],ae=W+1,ie=L[ae];if(0>r(ee,Q))ae<Me&&0>r(ie,ee)?(L[oe]=ie,L[ae]=Q,oe=ae):(L[oe]=ee,L[W]=Q,oe=W);else if(ae<Me&&0>r(ie,Q))L[oe]=ie,L[ae]=Q,oe=ae;else break e}}return $}function r(L,$){var Q=L.sortIndex-$.sortIndex;return Q!==0?Q:L.id-$.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;t.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();t.unstable_now=function(){return s.now()-a}}var l=[],u=[],c=1,h=null,d=3,m=!1,v=!1,y=!1,p=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(L){for(var $=n(u);$!==null;){if($.callback===null)i(u);else if($.startTime<=L)i(u),$.sortIndex=$.expirationTime,e(l,$);else break;$=n(u)}}function M(L){if(y=!1,g(L),!v)if(n(l)!==null)v=!0,V(P);else{var $=n(u);$!==null&&K(M,$.startTime-L)}}function P(L,$){v=!1,y&&(y=!1,f(R),R=-1),m=!0;var Q=d;try{for(g($),h=n(l);h!==null&&(!(h.expirationTime>$)||L&&!S());){var oe=h.callback;if(typeof oe=="function"){h.callback=null,d=h.priorityLevel;var Me=oe(h.expirationTime<=$);$=t.unstable_now(),typeof Me=="function"?h.callback=Me:h===n(l)&&i(l),g($)}else i(l);h=n(l)}if(h!==null)var Le=!0;else{var W=n(u);W!==null&&K(M,W.startTime-$),Le=!1}return Le}finally{h=null,d=Q,m=!1}}var A=!1,w=null,R=-1,X=5,x=-1;function S(){return!(t.unstable_now()-x<X)}function I(){if(w!==null){var L=t.unstable_now();x=L;var $=!0;try{$=w(!0,L)}finally{$?O():(A=!1,w=null)}}else A=!1}var O;if(typeof _=="function")O=function(){_(I)};else if(typeof MessageChannel<"u"){var k=new MessageChannel,Y=k.port2;k.port1.onmessage=I,O=function(){Y.postMessage(null)}}else O=function(){p(I,0)};function V(L){w=L,A||(A=!0,O())}function K(L,$){R=p(function(){L(t.unstable_now())},$)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(L){L.callback=null},t.unstable_continueExecution=function(){v||m||(v=!0,V(P))},t.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):X=0<L?Math.floor(1e3/L):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(L){switch(d){case 1:case 2:case 3:var $=3;break;default:$=d}var Q=d;d=$;try{return L()}finally{d=Q}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(L,$){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var Q=d;d=L;try{return $()}finally{d=Q}},t.unstable_scheduleCallback=function(L,$,Q){var oe=t.unstable_now();switch(typeof Q=="object"&&Q!==null?(Q=Q.delay,Q=typeof Q=="number"&&0<Q?oe+Q:oe):Q=oe,L){case 1:var Me=-1;break;case 2:Me=250;break;case 5:Me=1073741823;break;case 4:Me=1e4;break;default:Me=5e3}return Me=Q+Me,L={id:c++,callback:$,priorityLevel:L,startTime:Q,expirationTime:Me,sortIndex:-1},Q>oe?(L.sortIndex=Q,e(u,L),n(l)===null&&L===n(u)&&(y?(f(R),R=-1):y=!0,K(M,Q-oe))):(L.sortIndex=Me,e(l,L),v||m||(v=!0,V(P))),L},t.unstable_shouldYield=S,t.unstable_wrapCallback=function(L){var $=d;return function(){var Q=d;d=$;try{return L.apply(this,arguments)}finally{d=Q}}}})(Lg);Pg.exports=Lg;var Sx=Pg.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ex=Ue,_n=Sx;function ne(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Ng=new Set,As={};function Vr(t,e){No(t,e),No(t+"Capture",e)}function No(t,e){for(As[t]=e,t=0;t<e.length;t++)Ng.add(e[t])}var Mi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Bc=Object.prototype.hasOwnProperty,Mx=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ep={},tp={};function Tx(t){return Bc.call(tp,t)?!0:Bc.call(ep,t)?!1:Mx.test(t)?tp[t]=!0:(ep[t]=!0,!1)}function wx(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Ax(t,e,n,i){if(e===null||typeof e>"u"||wx(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Zt(t,e,n,i,r,o,s){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=o,this.removeEmptyString=s}var Bt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Bt[t]=new Zt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Bt[e]=new Zt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Bt[t]=new Zt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Bt[t]=new Zt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Bt[t]=new Zt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Bt[t]=new Zt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Bt[t]=new Zt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Bt[t]=new Zt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Bt[t]=new Zt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Ud=/[\-:]([a-z])/g;function Fd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Ud,Fd);Bt[e]=new Zt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Ud,Fd);Bt[e]=new Zt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Ud,Fd);Bt[e]=new Zt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Bt[t]=new Zt(t,1,!1,t.toLowerCase(),null,!1,!1)});Bt.xlinkHref=new Zt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Bt[t]=new Zt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Od(t,e,n,i){var r=Bt.hasOwnProperty(e)?Bt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Ax(e,n,r,i)&&(n=null),i||r===null?Tx(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Ri=Ex.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,aa=Symbol.for("react.element"),uo=Symbol.for("react.portal"),co=Symbol.for("react.fragment"),kd=Symbol.for("react.strict_mode"),Hc=Symbol.for("react.profiler"),Ig=Symbol.for("react.provider"),Dg=Symbol.for("react.context"),Bd=Symbol.for("react.forward_ref"),zc=Symbol.for("react.suspense"),Gc=Symbol.for("react.suspense_list"),Hd=Symbol.for("react.memo"),Bi=Symbol.for("react.lazy"),Ug=Symbol.for("react.offscreen"),np=Symbol.iterator;function Qo(t){return t===null||typeof t!="object"?null:(t=np&&t[np]||t["@@iterator"],typeof t=="function"?t:null)}var _t=Object.assign,Iu;function ds(t){if(Iu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Iu=e&&e[1]||""}return`
`+Iu+t}var Du=!1;function Uu(t,e){if(!t||Du)return"";Du=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){i=u}t.call(e.prototype)}else{try{throw Error()}catch(u){i=u}t()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),o=i.stack.split(`
`),s=r.length-1,a=o.length-1;1<=s&&0<=a&&r[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(r[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||r[s]!==o[a]){var l=`
`+r[s].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=s&&0<=a);break}}}finally{Du=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ds(t):""}function Cx(t){switch(t.tag){case 5:return ds(t.type);case 16:return ds("Lazy");case 13:return ds("Suspense");case 19:return ds("SuspenseList");case 0:case 2:case 15:return t=Uu(t.type,!1),t;case 11:return t=Uu(t.type.render,!1),t;case 1:return t=Uu(t.type,!0),t;default:return""}}function Vc(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case co:return"Fragment";case uo:return"Portal";case Hc:return"Profiler";case kd:return"StrictMode";case zc:return"Suspense";case Gc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Dg:return(t.displayName||"Context")+".Consumer";case Ig:return(t._context.displayName||"Context")+".Provider";case Bd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Hd:return e=t.displayName||null,e!==null?e:Vc(t.type)||"Memo";case Bi:e=t._payload,t=t._init;try{return Vc(t(e))}catch{}}return null}function bx(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Vc(e);case 8:return e===kd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function ir(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Fg(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Rx(t){var e=Fg(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,o=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(s){i=""+s,o.call(this,s)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(s){i=""+s},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function la(t){t._valueTracker||(t._valueTracker=Rx(t))}function Og(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=Fg(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function yl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Wc(t,e){var n=e.checked;return _t({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function ip(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=ir(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function kg(t,e){e=e.checked,e!=null&&Od(t,"checked",e,!1)}function jc(t,e){kg(t,e);var n=ir(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Xc(t,e.type,n):e.hasOwnProperty("defaultValue")&&Xc(t,e.type,ir(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function rp(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Xc(t,e,n){(e!=="number"||yl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var hs=Array.isArray;function Mo(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+ir(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Yc(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ne(91));return _t({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function op(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ne(92));if(hs(n)){if(1<n.length)throw Error(ne(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:ir(n)}}function Bg(t,e){var n=ir(e.value),i=ir(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function sp(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Hg(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function $c(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Hg(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ua,zg=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(ua=ua||document.createElement("div"),ua.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ua.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Cs(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var vs={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Px=["Webkit","ms","Moz","O"];Object.keys(vs).forEach(function(t){Px.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),vs[e]=vs[t]})});function Gg(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||vs.hasOwnProperty(t)&&vs[t]?(""+e).trim():e+"px"}function Vg(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=Gg(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var Lx=_t({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function qc(t,e){if(e){if(Lx[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ne(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ne(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ne(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ne(62))}}function Kc(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Zc=null;function zd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Qc=null,To=null,wo=null;function ap(t){if(t=$s(t)){if(typeof Qc!="function")throw Error(ne(280));var e=t.stateNode;e&&(e=eu(e),Qc(t.stateNode,t.type,e))}}function Wg(t){To?wo?wo.push(t):wo=[t]:To=t}function jg(){if(To){var t=To,e=wo;if(wo=To=null,ap(t),e)for(t=0;t<e.length;t++)ap(e[t])}}function Xg(t,e){return t(e)}function Yg(){}var Fu=!1;function $g(t,e,n){if(Fu)return t(e,n);Fu=!0;try{return Xg(t,e,n)}finally{Fu=!1,(To!==null||wo!==null)&&(Yg(),jg())}}function bs(t,e){var n=t.stateNode;if(n===null)return null;var i=eu(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ne(231,e,typeof n));return n}var Jc=!1;if(Mi)try{var Jo={};Object.defineProperty(Jo,"passive",{get:function(){Jc=!0}}),window.addEventListener("test",Jo,Jo),window.removeEventListener("test",Jo,Jo)}catch{Jc=!1}function Nx(t,e,n,i,r,o,s,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var _s=!1,Sl=null,El=!1,ef=null,Ix={onError:function(t){_s=!0,Sl=t}};function Dx(t,e,n,i,r,o,s,a,l){_s=!1,Sl=null,Nx.apply(Ix,arguments)}function Ux(t,e,n,i,r,o,s,a,l){if(Dx.apply(this,arguments),_s){if(_s){var u=Sl;_s=!1,Sl=null}else throw Error(ne(198));El||(El=!0,ef=u)}}function Wr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function qg(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function lp(t){if(Wr(t)!==t)throw Error(ne(188))}function Fx(t){var e=t.alternate;if(!e){if(e=Wr(t),e===null)throw Error(ne(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var o=r.alternate;if(o===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===o.child){for(o=r.child;o;){if(o===n)return lp(r),t;if(o===i)return lp(r),e;o=o.sibling}throw Error(ne(188))}if(n.return!==i.return)n=r,i=o;else{for(var s=!1,a=r.child;a;){if(a===n){s=!0,n=r,i=o;break}if(a===i){s=!0,i=r,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,i=r;break}if(a===i){s=!0,i=o,n=r;break}a=a.sibling}if(!s)throw Error(ne(189))}}if(n.alternate!==i)throw Error(ne(190))}if(n.tag!==3)throw Error(ne(188));return n.stateNode.current===n?t:e}function Kg(t){return t=Fx(t),t!==null?Zg(t):null}function Zg(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Zg(t);if(e!==null)return e;t=t.sibling}return null}var Qg=_n.unstable_scheduleCallback,up=_n.unstable_cancelCallback,Ox=_n.unstable_shouldYield,kx=_n.unstable_requestPaint,Et=_n.unstable_now,Bx=_n.unstable_getCurrentPriorityLevel,Gd=_n.unstable_ImmediatePriority,Jg=_n.unstable_UserBlockingPriority,Ml=_n.unstable_NormalPriority,Hx=_n.unstable_LowPriority,e0=_n.unstable_IdlePriority,Kl=null,ii=null;function zx(t){if(ii&&typeof ii.onCommitFiberRoot=="function")try{ii.onCommitFiberRoot(Kl,t,void 0,(t.current.flags&128)===128)}catch{}}var jn=Math.clz32?Math.clz32:Wx,Gx=Math.log,Vx=Math.LN2;function Wx(t){return t>>>=0,t===0?32:31-(Gx(t)/Vx|0)|0}var ca=64,fa=4194304;function ps(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Tl(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,o=t.pingedLanes,s=n&268435455;if(s!==0){var a=s&~r;a!==0?i=ps(a):(o&=s,o!==0&&(i=ps(o)))}else s=n&~r,s!==0?i=ps(s):o!==0&&(i=ps(o));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,o=e&-e,r>=o||r===16&&(o&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-jn(e),r=1<<n,i|=t[n],e&=~r;return i}function jx(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Xx(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,o=t.pendingLanes;0<o;){var s=31-jn(o),a=1<<s,l=r[s];l===-1?(!(a&n)||a&i)&&(r[s]=jx(a,e)):l<=e&&(t.expiredLanes|=a),o&=~a}}function tf(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function t0(){var t=ca;return ca<<=1,!(ca&4194240)&&(ca=64),t}function Ou(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Xs(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-jn(e),t[e]=n}function Yx(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-jn(n),o=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~o}}function Vd(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-jn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var rt=0;function n0(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var i0,Wd,r0,o0,s0,nf=!1,da=[],Yi=null,$i=null,qi=null,Rs=new Map,Ps=new Map,zi=[],$x="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function cp(t,e){switch(t){case"focusin":case"focusout":Yi=null;break;case"dragenter":case"dragleave":$i=null;break;case"mouseover":case"mouseout":qi=null;break;case"pointerover":case"pointerout":Rs.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ps.delete(e.pointerId)}}function es(t,e,n,i,r,o){return t===null||t.nativeEvent!==o?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:o,targetContainers:[r]},e!==null&&(e=$s(e),e!==null&&Wd(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function qx(t,e,n,i,r){switch(e){case"focusin":return Yi=es(Yi,t,e,n,i,r),!0;case"dragenter":return $i=es($i,t,e,n,i,r),!0;case"mouseover":return qi=es(qi,t,e,n,i,r),!0;case"pointerover":var o=r.pointerId;return Rs.set(o,es(Rs.get(o)||null,t,e,n,i,r)),!0;case"gotpointercapture":return o=r.pointerId,Ps.set(o,es(Ps.get(o)||null,t,e,n,i,r)),!0}return!1}function a0(t){var e=Cr(t.target);if(e!==null){var n=Wr(e);if(n!==null){if(e=n.tag,e===13){if(e=qg(n),e!==null){t.blockedOn=e,s0(t.priority,function(){r0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function nl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=rf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Zc=i,n.target.dispatchEvent(i),Zc=null}else return e=$s(n),e!==null&&Wd(e),t.blockedOn=n,!1;e.shift()}return!0}function fp(t,e,n){nl(t)&&n.delete(e)}function Kx(){nf=!1,Yi!==null&&nl(Yi)&&(Yi=null),$i!==null&&nl($i)&&($i=null),qi!==null&&nl(qi)&&(qi=null),Rs.forEach(fp),Ps.forEach(fp)}function ts(t,e){t.blockedOn===e&&(t.blockedOn=null,nf||(nf=!0,_n.unstable_scheduleCallback(_n.unstable_NormalPriority,Kx)))}function Ls(t){function e(r){return ts(r,t)}if(0<da.length){ts(da[0],t);for(var n=1;n<da.length;n++){var i=da[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Yi!==null&&ts(Yi,t),$i!==null&&ts($i,t),qi!==null&&ts(qi,t),Rs.forEach(e),Ps.forEach(e),n=0;n<zi.length;n++)i=zi[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<zi.length&&(n=zi[0],n.blockedOn===null);)a0(n),n.blockedOn===null&&zi.shift()}var Ao=Ri.ReactCurrentBatchConfig,wl=!0;function Zx(t,e,n,i){var r=rt,o=Ao.transition;Ao.transition=null;try{rt=1,jd(t,e,n,i)}finally{rt=r,Ao.transition=o}}function Qx(t,e,n,i){var r=rt,o=Ao.transition;Ao.transition=null;try{rt=4,jd(t,e,n,i)}finally{rt=r,Ao.transition=o}}function jd(t,e,n,i){if(wl){var r=rf(t,e,n,i);if(r===null)Yu(t,e,i,Al,n),cp(t,i);else if(qx(r,t,e,n,i))i.stopPropagation();else if(cp(t,i),e&4&&-1<$x.indexOf(t)){for(;r!==null;){var o=$s(r);if(o!==null&&i0(o),o=rf(t,e,n,i),o===null&&Yu(t,e,i,Al,n),o===r)break;r=o}r!==null&&i.stopPropagation()}else Yu(t,e,i,null,n)}}var Al=null;function rf(t,e,n,i){if(Al=null,t=zd(i),t=Cr(t),t!==null)if(e=Wr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=qg(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Al=t,null}function l0(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Bx()){case Gd:return 1;case Jg:return 4;case Ml:case Hx:return 16;case e0:return 536870912;default:return 16}default:return 16}}var Wi=null,Xd=null,il=null;function u0(){if(il)return il;var t,e=Xd,n=e.length,i,r="value"in Wi?Wi.value:Wi.textContent,o=r.length;for(t=0;t<n&&e[t]===r[t];t++);var s=n-t;for(i=1;i<=s&&e[n-i]===r[o-i];i++);return il=r.slice(t,1<i?1-i:void 0)}function rl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ha(){return!0}function dp(){return!1}function yn(t){function e(n,i,r,o,s){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?ha:dp,this.isPropagationStopped=dp,this}return _t(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ha)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ha)},persist:function(){},isPersistent:ha}),e}var $o={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Yd=yn($o),Ys=_t({},$o,{view:0,detail:0}),Jx=yn(Ys),ku,Bu,ns,Zl=_t({},Ys,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:$d,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ns&&(ns&&t.type==="mousemove"?(ku=t.screenX-ns.screenX,Bu=t.screenY-ns.screenY):Bu=ku=0,ns=t),ku)},movementY:function(t){return"movementY"in t?t.movementY:Bu}}),hp=yn(Zl),ey=_t({},Zl,{dataTransfer:0}),ty=yn(ey),ny=_t({},Ys,{relatedTarget:0}),Hu=yn(ny),iy=_t({},$o,{animationName:0,elapsedTime:0,pseudoElement:0}),ry=yn(iy),oy=_t({},$o,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),sy=yn(oy),ay=_t({},$o,{data:0}),pp=yn(ay),ly={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},uy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},cy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function fy(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=cy[t])?!!e[t]:!1}function $d(){return fy}var dy=_t({},Ys,{key:function(t){if(t.key){var e=ly[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=rl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?uy[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:$d,charCode:function(t){return t.type==="keypress"?rl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?rl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),hy=yn(dy),py=_t({},Zl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),mp=yn(py),my=_t({},Ys,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:$d}),gy=yn(my),vy=_t({},$o,{propertyName:0,elapsedTime:0,pseudoElement:0}),_y=yn(vy),xy=_t({},Zl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),yy=yn(xy),Sy=[9,13,27,32],qd=Mi&&"CompositionEvent"in window,xs=null;Mi&&"documentMode"in document&&(xs=document.documentMode);var Ey=Mi&&"TextEvent"in window&&!xs,c0=Mi&&(!qd||xs&&8<xs&&11>=xs),gp=" ",vp=!1;function f0(t,e){switch(t){case"keyup":return Sy.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function d0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var fo=!1;function My(t,e){switch(t){case"compositionend":return d0(e);case"keypress":return e.which!==32?null:(vp=!0,gp);case"textInput":return t=e.data,t===gp&&vp?null:t;default:return null}}function Ty(t,e){if(fo)return t==="compositionend"||!qd&&f0(t,e)?(t=u0(),il=Xd=Wi=null,fo=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return c0&&e.locale!=="ko"?null:e.data;default:return null}}var wy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function _p(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!wy[t.type]:e==="textarea"}function h0(t,e,n,i){Wg(i),e=Cl(e,"onChange"),0<e.length&&(n=new Yd("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var ys=null,Ns=null;function Ay(t){T0(t,0)}function Ql(t){var e=mo(t);if(Og(e))return t}function Cy(t,e){if(t==="change")return e}var p0=!1;if(Mi){var zu;if(Mi){var Gu="oninput"in document;if(!Gu){var xp=document.createElement("div");xp.setAttribute("oninput","return;"),Gu=typeof xp.oninput=="function"}zu=Gu}else zu=!1;p0=zu&&(!document.documentMode||9<document.documentMode)}function yp(){ys&&(ys.detachEvent("onpropertychange",m0),Ns=ys=null)}function m0(t){if(t.propertyName==="value"&&Ql(Ns)){var e=[];h0(e,Ns,t,zd(t)),$g(Ay,e)}}function by(t,e,n){t==="focusin"?(yp(),ys=e,Ns=n,ys.attachEvent("onpropertychange",m0)):t==="focusout"&&yp()}function Ry(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Ql(Ns)}function Py(t,e){if(t==="click")return Ql(e)}function Ly(t,e){if(t==="input"||t==="change")return Ql(e)}function Ny(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var $n=typeof Object.is=="function"?Object.is:Ny;function Is(t,e){if($n(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Bc.call(e,r)||!$n(t[r],e[r]))return!1}return!0}function Sp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Ep(t,e){var n=Sp(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Sp(n)}}function g0(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?g0(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function v0(){for(var t=window,e=yl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=yl(t.document)}return e}function Kd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Iy(t){var e=v0(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&g0(n.ownerDocument.documentElement,n)){if(i!==null&&Kd(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,o=Math.min(i.start,r);i=i.end===void 0?o:Math.min(i.end,r),!t.extend&&o>i&&(r=i,i=o,o=r),r=Ep(n,o);var s=Ep(n,i);r&&s&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==s.node||t.focusOffset!==s.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),o>i?(t.addRange(e),t.extend(s.node,s.offset)):(e.setEnd(s.node,s.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Dy=Mi&&"documentMode"in document&&11>=document.documentMode,ho=null,of=null,Ss=null,sf=!1;function Mp(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;sf||ho==null||ho!==yl(i)||(i=ho,"selectionStart"in i&&Kd(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Ss&&Is(Ss,i)||(Ss=i,i=Cl(of,"onSelect"),0<i.length&&(e=new Yd("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=ho)))}function pa(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var po={animationend:pa("Animation","AnimationEnd"),animationiteration:pa("Animation","AnimationIteration"),animationstart:pa("Animation","AnimationStart"),transitionend:pa("Transition","TransitionEnd")},Vu={},_0={};Mi&&(_0=document.createElement("div").style,"AnimationEvent"in window||(delete po.animationend.animation,delete po.animationiteration.animation,delete po.animationstart.animation),"TransitionEvent"in window||delete po.transitionend.transition);function Jl(t){if(Vu[t])return Vu[t];if(!po[t])return t;var e=po[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in _0)return Vu[t]=e[n];return t}var x0=Jl("animationend"),y0=Jl("animationiteration"),S0=Jl("animationstart"),E0=Jl("transitionend"),M0=new Map,Tp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ar(t,e){M0.set(t,e),Vr(e,[t])}for(var Wu=0;Wu<Tp.length;Wu++){var ju=Tp[Wu],Uy=ju.toLowerCase(),Fy=ju[0].toUpperCase()+ju.slice(1);ar(Uy,"on"+Fy)}ar(x0,"onAnimationEnd");ar(y0,"onAnimationIteration");ar(S0,"onAnimationStart");ar("dblclick","onDoubleClick");ar("focusin","onFocus");ar("focusout","onBlur");ar(E0,"onTransitionEnd");No("onMouseEnter",["mouseout","mouseover"]);No("onMouseLeave",["mouseout","mouseover"]);No("onPointerEnter",["pointerout","pointerover"]);No("onPointerLeave",["pointerout","pointerover"]);Vr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Vr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Vr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Vr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Vr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Vr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ms="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Oy=new Set("cancel close invalid load scroll toggle".split(" ").concat(ms));function wp(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,Ux(i,e,void 0,t),t.currentTarget=null}function T0(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var o=void 0;if(e)for(var s=i.length-1;0<=s;s--){var a=i[s],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==o&&r.isPropagationStopped())break e;wp(r,a,u),o=l}else for(s=0;s<i.length;s++){if(a=i[s],l=a.instance,u=a.currentTarget,a=a.listener,l!==o&&r.isPropagationStopped())break e;wp(r,a,u),o=l}}}if(El)throw t=ef,El=!1,ef=null,t}function ft(t,e){var n=e[ff];n===void 0&&(n=e[ff]=new Set);var i=t+"__bubble";n.has(i)||(w0(e,t,2,!1),n.add(i))}function Xu(t,e,n){var i=0;e&&(i|=4),w0(n,t,i,e)}var ma="_reactListening"+Math.random().toString(36).slice(2);function Ds(t){if(!t[ma]){t[ma]=!0,Ng.forEach(function(n){n!=="selectionchange"&&(Oy.has(n)||Xu(n,!1,t),Xu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ma]||(e[ma]=!0,Xu("selectionchange",!1,e))}}function w0(t,e,n,i){switch(l0(e)){case 1:var r=Zx;break;case 4:r=Qx;break;default:r=jd}n=r.bind(null,e,n,t),r=void 0,!Jc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Yu(t,e,n,i,r){var o=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var s=i.tag;if(s===3||s===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(s===4)for(s=i.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;s=s.return}for(;a!==null;){if(s=Cr(a),s===null)return;if(l=s.tag,l===5||l===6){i=o=s;continue e}a=a.parentNode}}i=i.return}$g(function(){var u=o,c=zd(n),h=[];e:{var d=M0.get(t);if(d!==void 0){var m=Yd,v=t;switch(t){case"keypress":if(rl(n)===0)break e;case"keydown":case"keyup":m=hy;break;case"focusin":v="focus",m=Hu;break;case"focusout":v="blur",m=Hu;break;case"beforeblur":case"afterblur":m=Hu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=hp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=ty;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=gy;break;case x0:case y0:case S0:m=ry;break;case E0:m=_y;break;case"scroll":m=Jx;break;case"wheel":m=yy;break;case"copy":case"cut":case"paste":m=sy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=mp}var y=(e&4)!==0,p=!y&&t==="scroll",f=y?d!==null?d+"Capture":null:d;y=[];for(var _=u,g;_!==null;){g=_;var M=g.stateNode;if(g.tag===5&&M!==null&&(g=M,f!==null&&(M=bs(_,f),M!=null&&y.push(Us(_,M,g)))),p)break;_=_.return}0<y.length&&(d=new m(d,v,null,n,c),h.push({event:d,listeners:y}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",d&&n!==Zc&&(v=n.relatedTarget||n.fromElement)&&(Cr(v)||v[Ti]))break e;if((m||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,m?(v=n.relatedTarget||n.toElement,m=u,v=v?Cr(v):null,v!==null&&(p=Wr(v),v!==p||v.tag!==5&&v.tag!==6)&&(v=null)):(m=null,v=u),m!==v)){if(y=hp,M="onMouseLeave",f="onMouseEnter",_="mouse",(t==="pointerout"||t==="pointerover")&&(y=mp,M="onPointerLeave",f="onPointerEnter",_="pointer"),p=m==null?d:mo(m),g=v==null?d:mo(v),d=new y(M,_+"leave",m,n,c),d.target=p,d.relatedTarget=g,M=null,Cr(c)===u&&(y=new y(f,_+"enter",v,n,c),y.target=g,y.relatedTarget=p,M=y),p=M,m&&v)t:{for(y=m,f=v,_=0,g=y;g;g=Yr(g))_++;for(g=0,M=f;M;M=Yr(M))g++;for(;0<_-g;)y=Yr(y),_--;for(;0<g-_;)f=Yr(f),g--;for(;_--;){if(y===f||f!==null&&y===f.alternate)break t;y=Yr(y),f=Yr(f)}y=null}else y=null;m!==null&&Ap(h,d,m,y,!1),v!==null&&p!==null&&Ap(h,p,v,y,!0)}}e:{if(d=u?mo(u):window,m=d.nodeName&&d.nodeName.toLowerCase(),m==="select"||m==="input"&&d.type==="file")var P=Cy;else if(_p(d))if(p0)P=Ly;else{P=Ry;var A=by}else(m=d.nodeName)&&m.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(P=Py);if(P&&(P=P(t,u))){h0(h,P,n,c);break e}A&&A(t,d,u),t==="focusout"&&(A=d._wrapperState)&&A.controlled&&d.type==="number"&&Xc(d,"number",d.value)}switch(A=u?mo(u):window,t){case"focusin":(_p(A)||A.contentEditable==="true")&&(ho=A,of=u,Ss=null);break;case"focusout":Ss=of=ho=null;break;case"mousedown":sf=!0;break;case"contextmenu":case"mouseup":case"dragend":sf=!1,Mp(h,n,c);break;case"selectionchange":if(Dy)break;case"keydown":case"keyup":Mp(h,n,c)}var w;if(qd)e:{switch(t){case"compositionstart":var R="onCompositionStart";break e;case"compositionend":R="onCompositionEnd";break e;case"compositionupdate":R="onCompositionUpdate";break e}R=void 0}else fo?f0(t,n)&&(R="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(R="onCompositionStart");R&&(c0&&n.locale!=="ko"&&(fo||R!=="onCompositionStart"?R==="onCompositionEnd"&&fo&&(w=u0()):(Wi=c,Xd="value"in Wi?Wi.value:Wi.textContent,fo=!0)),A=Cl(u,R),0<A.length&&(R=new pp(R,t,null,n,c),h.push({event:R,listeners:A}),w?R.data=w:(w=d0(n),w!==null&&(R.data=w)))),(w=Ey?My(t,n):Ty(t,n))&&(u=Cl(u,"onBeforeInput"),0<u.length&&(c=new pp("onBeforeInput","beforeinput",null,n,c),h.push({event:c,listeners:u}),c.data=w))}T0(h,e)})}function Us(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Cl(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,o=r.stateNode;r.tag===5&&o!==null&&(r=o,o=bs(t,n),o!=null&&i.unshift(Us(t,o,r)),o=bs(t,e),o!=null&&i.push(Us(t,o,r))),t=t.return}return i}function Yr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Ap(t,e,n,i,r){for(var o=e._reactName,s=[];n!==null&&n!==i;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&u!==null&&(a=u,r?(l=bs(n,o),l!=null&&s.unshift(Us(n,l,a))):r||(l=bs(n,o),l!=null&&s.push(Us(n,l,a)))),n=n.return}s.length!==0&&t.push({event:e,listeners:s})}var ky=/\r\n?/g,By=/\u0000|\uFFFD/g;function Cp(t){return(typeof t=="string"?t:""+t).replace(ky,`
`).replace(By,"")}function ga(t,e,n){if(e=Cp(e),Cp(t)!==e&&n)throw Error(ne(425))}function bl(){}var af=null,lf=null;function uf(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var cf=typeof setTimeout=="function"?setTimeout:void 0,Hy=typeof clearTimeout=="function"?clearTimeout:void 0,bp=typeof Promise=="function"?Promise:void 0,zy=typeof queueMicrotask=="function"?queueMicrotask:typeof bp<"u"?function(t){return bp.resolve(null).then(t).catch(Gy)}:cf;function Gy(t){setTimeout(function(){throw t})}function $u(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Ls(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Ls(e)}function Ki(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Rp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var qo=Math.random().toString(36).slice(2),ni="__reactFiber$"+qo,Fs="__reactProps$"+qo,Ti="__reactContainer$"+qo,ff="__reactEvents$"+qo,Vy="__reactListeners$"+qo,Wy="__reactHandles$"+qo;function Cr(t){var e=t[ni];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Ti]||n[ni]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Rp(t);t!==null;){if(n=t[ni])return n;t=Rp(t)}return e}t=n,n=t.parentNode}return null}function $s(t){return t=t[ni]||t[Ti],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function mo(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ne(33))}function eu(t){return t[Fs]||null}var df=[],go=-1;function lr(t){return{current:t}}function pt(t){0>go||(t.current=df[go],df[go]=null,go--)}function lt(t,e){go++,df[go]=t.current,t.current=e}var rr={},jt=lr(rr),on=lr(!1),Ur=rr;function Io(t,e){var n=t.type.contextTypes;if(!n)return rr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},o;for(o in n)r[o]=e[o];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function sn(t){return t=t.childContextTypes,t!=null}function Rl(){pt(on),pt(jt)}function Pp(t,e,n){if(jt.current!==rr)throw Error(ne(168));lt(jt,e),lt(on,n)}function A0(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ne(108,bx(t)||"Unknown",r));return _t({},n,i)}function Pl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||rr,Ur=jt.current,lt(jt,t),lt(on,on.current),!0}function Lp(t,e,n){var i=t.stateNode;if(!i)throw Error(ne(169));n?(t=A0(t,e,Ur),i.__reactInternalMemoizedMergedChildContext=t,pt(on),pt(jt),lt(jt,t)):pt(on),lt(on,n)}var pi=null,tu=!1,qu=!1;function C0(t){pi===null?pi=[t]:pi.push(t)}function jy(t){tu=!0,C0(t)}function ur(){if(!qu&&pi!==null){qu=!0;var t=0,e=rt;try{var n=pi;for(rt=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}pi=null,tu=!1}catch(r){throw pi!==null&&(pi=pi.slice(t+1)),Qg(Gd,ur),r}finally{rt=e,qu=!1}}return null}var vo=[],_o=0,Ll=null,Nl=0,Tn=[],wn=0,Fr=null,gi=1,vi="";function yr(t,e){vo[_o++]=Nl,vo[_o++]=Ll,Ll=t,Nl=e}function b0(t,e,n){Tn[wn++]=gi,Tn[wn++]=vi,Tn[wn++]=Fr,Fr=t;var i=gi;t=vi;var r=32-jn(i)-1;i&=~(1<<r),n+=1;var o=32-jn(e)+r;if(30<o){var s=r-r%5;o=(i&(1<<s)-1).toString(32),i>>=s,r-=s,gi=1<<32-jn(e)+r|n<<r|i,vi=o+t}else gi=1<<o|n<<r|i,vi=t}function Zd(t){t.return!==null&&(yr(t,1),b0(t,1,0))}function Qd(t){for(;t===Ll;)Ll=vo[--_o],vo[_o]=null,Nl=vo[--_o],vo[_o]=null;for(;t===Fr;)Fr=Tn[--wn],Tn[wn]=null,vi=Tn[--wn],Tn[wn]=null,gi=Tn[--wn],Tn[wn]=null}var vn=null,gn=null,mt=!1,zn=null;function R0(t,e){var n=Cn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Np(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,vn=t,gn=Ki(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,vn=t,gn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Fr!==null?{id:gi,overflow:vi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Cn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,vn=t,gn=null,!0):!1;default:return!1}}function hf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function pf(t){if(mt){var e=gn;if(e){var n=e;if(!Np(t,e)){if(hf(t))throw Error(ne(418));e=Ki(n.nextSibling);var i=vn;e&&Np(t,e)?R0(i,n):(t.flags=t.flags&-4097|2,mt=!1,vn=t)}}else{if(hf(t))throw Error(ne(418));t.flags=t.flags&-4097|2,mt=!1,vn=t}}}function Ip(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;vn=t}function va(t){if(t!==vn)return!1;if(!mt)return Ip(t),mt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!uf(t.type,t.memoizedProps)),e&&(e=gn)){if(hf(t))throw P0(),Error(ne(418));for(;e;)R0(t,e),e=Ki(e.nextSibling)}if(Ip(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ne(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){gn=Ki(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}gn=null}}else gn=vn?Ki(t.stateNode.nextSibling):null;return!0}function P0(){for(var t=gn;t;)t=Ki(t.nextSibling)}function Do(){gn=vn=null,mt=!1}function Jd(t){zn===null?zn=[t]:zn.push(t)}var Xy=Ri.ReactCurrentBatchConfig;function is(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ne(309));var i=n.stateNode}if(!i)throw Error(ne(147,t));var r=i,o=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===o?e.ref:(e=function(s){var a=r.refs;s===null?delete a[o]:a[o]=s},e._stringRef=o,e)}if(typeof t!="string")throw Error(ne(284));if(!n._owner)throw Error(ne(290,t))}return t}function _a(t,e){throw t=Object.prototype.toString.call(e),Error(ne(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Dp(t){var e=t._init;return e(t._payload)}function L0(t){function e(f,_){if(t){var g=f.deletions;g===null?(f.deletions=[_],f.flags|=16):g.push(_)}}function n(f,_){if(!t)return null;for(;_!==null;)e(f,_),_=_.sibling;return null}function i(f,_){for(f=new Map;_!==null;)_.key!==null?f.set(_.key,_):f.set(_.index,_),_=_.sibling;return f}function r(f,_){return f=er(f,_),f.index=0,f.sibling=null,f}function o(f,_,g){return f.index=g,t?(g=f.alternate,g!==null?(g=g.index,g<_?(f.flags|=2,_):g):(f.flags|=2,_)):(f.flags|=1048576,_)}function s(f){return t&&f.alternate===null&&(f.flags|=2),f}function a(f,_,g,M){return _===null||_.tag!==6?(_=nc(g,f.mode,M),_.return=f,_):(_=r(_,g),_.return=f,_)}function l(f,_,g,M){var P=g.type;return P===co?c(f,_,g.props.children,M,g.key):_!==null&&(_.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===Bi&&Dp(P)===_.type)?(M=r(_,g.props),M.ref=is(f,_,g),M.return=f,M):(M=fl(g.type,g.key,g.props,null,f.mode,M),M.ref=is(f,_,g),M.return=f,M)}function u(f,_,g,M){return _===null||_.tag!==4||_.stateNode.containerInfo!==g.containerInfo||_.stateNode.implementation!==g.implementation?(_=ic(g,f.mode,M),_.return=f,_):(_=r(_,g.children||[]),_.return=f,_)}function c(f,_,g,M,P){return _===null||_.tag!==7?(_=Ir(g,f.mode,M,P),_.return=f,_):(_=r(_,g),_.return=f,_)}function h(f,_,g){if(typeof _=="string"&&_!==""||typeof _=="number")return _=nc(""+_,f.mode,g),_.return=f,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case aa:return g=fl(_.type,_.key,_.props,null,f.mode,g),g.ref=is(f,null,_),g.return=f,g;case uo:return _=ic(_,f.mode,g),_.return=f,_;case Bi:var M=_._init;return h(f,M(_._payload),g)}if(hs(_)||Qo(_))return _=Ir(_,f.mode,g,null),_.return=f,_;_a(f,_)}return null}function d(f,_,g,M){var P=_!==null?_.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return P!==null?null:a(f,_,""+g,M);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case aa:return g.key===P?l(f,_,g,M):null;case uo:return g.key===P?u(f,_,g,M):null;case Bi:return P=g._init,d(f,_,P(g._payload),M)}if(hs(g)||Qo(g))return P!==null?null:c(f,_,g,M,null);_a(f,g)}return null}function m(f,_,g,M,P){if(typeof M=="string"&&M!==""||typeof M=="number")return f=f.get(g)||null,a(_,f,""+M,P);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case aa:return f=f.get(M.key===null?g:M.key)||null,l(_,f,M,P);case uo:return f=f.get(M.key===null?g:M.key)||null,u(_,f,M,P);case Bi:var A=M._init;return m(f,_,g,A(M._payload),P)}if(hs(M)||Qo(M))return f=f.get(g)||null,c(_,f,M,P,null);_a(_,M)}return null}function v(f,_,g,M){for(var P=null,A=null,w=_,R=_=0,X=null;w!==null&&R<g.length;R++){w.index>R?(X=w,w=null):X=w.sibling;var x=d(f,w,g[R],M);if(x===null){w===null&&(w=X);break}t&&w&&x.alternate===null&&e(f,w),_=o(x,_,R),A===null?P=x:A.sibling=x,A=x,w=X}if(R===g.length)return n(f,w),mt&&yr(f,R),P;if(w===null){for(;R<g.length;R++)w=h(f,g[R],M),w!==null&&(_=o(w,_,R),A===null?P=w:A.sibling=w,A=w);return mt&&yr(f,R),P}for(w=i(f,w);R<g.length;R++)X=m(w,f,R,g[R],M),X!==null&&(t&&X.alternate!==null&&w.delete(X.key===null?R:X.key),_=o(X,_,R),A===null?P=X:A.sibling=X,A=X);return t&&w.forEach(function(S){return e(f,S)}),mt&&yr(f,R),P}function y(f,_,g,M){var P=Qo(g);if(typeof P!="function")throw Error(ne(150));if(g=P.call(g),g==null)throw Error(ne(151));for(var A=P=null,w=_,R=_=0,X=null,x=g.next();w!==null&&!x.done;R++,x=g.next()){w.index>R?(X=w,w=null):X=w.sibling;var S=d(f,w,x.value,M);if(S===null){w===null&&(w=X);break}t&&w&&S.alternate===null&&e(f,w),_=o(S,_,R),A===null?P=S:A.sibling=S,A=S,w=X}if(x.done)return n(f,w),mt&&yr(f,R),P;if(w===null){for(;!x.done;R++,x=g.next())x=h(f,x.value,M),x!==null&&(_=o(x,_,R),A===null?P=x:A.sibling=x,A=x);return mt&&yr(f,R),P}for(w=i(f,w);!x.done;R++,x=g.next())x=m(w,f,R,x.value,M),x!==null&&(t&&x.alternate!==null&&w.delete(x.key===null?R:x.key),_=o(x,_,R),A===null?P=x:A.sibling=x,A=x);return t&&w.forEach(function(I){return e(f,I)}),mt&&yr(f,R),P}function p(f,_,g,M){if(typeof g=="object"&&g!==null&&g.type===co&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case aa:e:{for(var P=g.key,A=_;A!==null;){if(A.key===P){if(P=g.type,P===co){if(A.tag===7){n(f,A.sibling),_=r(A,g.props.children),_.return=f,f=_;break e}}else if(A.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===Bi&&Dp(P)===A.type){n(f,A.sibling),_=r(A,g.props),_.ref=is(f,A,g),_.return=f,f=_;break e}n(f,A);break}else e(f,A);A=A.sibling}g.type===co?(_=Ir(g.props.children,f.mode,M,g.key),_.return=f,f=_):(M=fl(g.type,g.key,g.props,null,f.mode,M),M.ref=is(f,_,g),M.return=f,f=M)}return s(f);case uo:e:{for(A=g.key;_!==null;){if(_.key===A)if(_.tag===4&&_.stateNode.containerInfo===g.containerInfo&&_.stateNode.implementation===g.implementation){n(f,_.sibling),_=r(_,g.children||[]),_.return=f,f=_;break e}else{n(f,_);break}else e(f,_);_=_.sibling}_=ic(g,f.mode,M),_.return=f,f=_}return s(f);case Bi:return A=g._init,p(f,_,A(g._payload),M)}if(hs(g))return v(f,_,g,M);if(Qo(g))return y(f,_,g,M);_a(f,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,_!==null&&_.tag===6?(n(f,_.sibling),_=r(_,g),_.return=f,f=_):(n(f,_),_=nc(g,f.mode,M),_.return=f,f=_),s(f)):n(f,_)}return p}var Uo=L0(!0),N0=L0(!1),Il=lr(null),Dl=null,xo=null,eh=null;function th(){eh=xo=Dl=null}function nh(t){var e=Il.current;pt(Il),t._currentValue=e}function mf(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Co(t,e){Dl=t,eh=xo=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(rn=!0),t.firstContext=null)}function Pn(t){var e=t._currentValue;if(eh!==t)if(t={context:t,memoizedValue:e,next:null},xo===null){if(Dl===null)throw Error(ne(308));xo=t,Dl.dependencies={lanes:0,firstContext:t}}else xo=xo.next=t;return e}var br=null;function ih(t){br===null?br=[t]:br.push(t)}function I0(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,ih(e)):(n.next=r.next,r.next=n),e.interleaved=n,wi(t,i)}function wi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Hi=!1;function rh(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function D0(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Si(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Zi(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Ke&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,wi(t,n)}return r=i.interleaved,r===null?(e.next=e,ih(i)):(e.next=r.next,r.next=e),i.interleaved=e,wi(t,n)}function ol(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Vd(t,n)}}function Up(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?r=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?r=o=e:o=o.next=e}else r=o=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:o,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Ul(t,e,n,i){var r=t.updateQueue;Hi=!1;var o=r.firstBaseUpdate,s=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,u=l.next;l.next=null,s===null?o=u:s.next=u,s=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==s&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(o!==null){var h=r.baseState;s=0,c=u=l=null,a=o;do{var d=a.lane,m=a.eventTime;if((i&d)===d){c!==null&&(c=c.next={eventTime:m,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=t,y=a;switch(d=e,m=n,y.tag){case 1:if(v=y.payload,typeof v=="function"){h=v.call(m,h,d);break e}h=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=y.payload,d=typeof v=="function"?v.call(m,h,d):v,d==null)break e;h=_t({},h,d);break e;case 2:Hi=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=r.effects,d===null?r.effects=[a]:d.push(a))}else m={eventTime:m,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=m,l=h):c=c.next=m,s|=d;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;d=a,a=d.next,d.next=null,r.lastBaseUpdate=d,r.shared.pending=null}}while(!0);if(c===null&&(l=h),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=c,e=r.shared.interleaved,e!==null){r=e;do s|=r.lane,r=r.next;while(r!==e)}else o===null&&(r.shared.lanes=0);kr|=s,t.lanes=s,t.memoizedState=h}}function Fp(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ne(191,r));r.call(i)}}}var qs={},ri=lr(qs),Os=lr(qs),ks=lr(qs);function Rr(t){if(t===qs)throw Error(ne(174));return t}function oh(t,e){switch(lt(ks,e),lt(Os,t),lt(ri,qs),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:$c(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=$c(e,t)}pt(ri),lt(ri,e)}function Fo(){pt(ri),pt(Os),pt(ks)}function U0(t){Rr(ks.current);var e=Rr(ri.current),n=$c(e,t.type);e!==n&&(lt(Os,t),lt(ri,n))}function sh(t){Os.current===t&&(pt(ri),pt(Os))}var gt=lr(0);function Fl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Ku=[];function ah(){for(var t=0;t<Ku.length;t++)Ku[t]._workInProgressVersionPrimary=null;Ku.length=0}var sl=Ri.ReactCurrentDispatcher,Zu=Ri.ReactCurrentBatchConfig,Or=0,vt=null,bt=null,It=null,Ol=!1,Es=!1,Bs=0,Yy=0;function Ht(){throw Error(ne(321))}function lh(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!$n(t[n],e[n]))return!1;return!0}function uh(t,e,n,i,r,o){if(Or=o,vt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,sl.current=t===null||t.memoizedState===null?Zy:Qy,t=n(i,r),Es){o=0;do{if(Es=!1,Bs=0,25<=o)throw Error(ne(301));o+=1,It=bt=null,e.updateQueue=null,sl.current=Jy,t=n(i,r)}while(Es)}if(sl.current=kl,e=bt!==null&&bt.next!==null,Or=0,It=bt=vt=null,Ol=!1,e)throw Error(ne(300));return t}function ch(){var t=Bs!==0;return Bs=0,t}function Kn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return It===null?vt.memoizedState=It=t:It=It.next=t,It}function Ln(){if(bt===null){var t=vt.alternate;t=t!==null?t.memoizedState:null}else t=bt.next;var e=It===null?vt.memoizedState:It.next;if(e!==null)It=e,bt=t;else{if(t===null)throw Error(ne(310));bt=t,t={memoizedState:bt.memoizedState,baseState:bt.baseState,baseQueue:bt.baseQueue,queue:bt.queue,next:null},It===null?vt.memoizedState=It=t:It=It.next=t}return It}function Hs(t,e){return typeof e=="function"?e(t):e}function Qu(t){var e=Ln(),n=e.queue;if(n===null)throw Error(ne(311));n.lastRenderedReducer=t;var i=bt,r=i.baseQueue,o=n.pending;if(o!==null){if(r!==null){var s=r.next;r.next=o.next,o.next=s}i.baseQueue=r=o,n.pending=null}if(r!==null){o=r.next,i=i.baseState;var a=s=null,l=null,u=o;do{var c=u.lane;if((Or&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:t(i,u.action);else{var h={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=h,s=i):l=l.next=h,vt.lanes|=c,kr|=c}u=u.next}while(u!==null&&u!==o);l===null?s=i:l.next=a,$n(i,e.memoizedState)||(rn=!0),e.memoizedState=i,e.baseState=s,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do o=r.lane,vt.lanes|=o,kr|=o,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Ju(t){var e=Ln(),n=e.queue;if(n===null)throw Error(ne(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,o=e.memoizedState;if(r!==null){n.pending=null;var s=r=r.next;do o=t(o,s.action),s=s.next;while(s!==r);$n(o,e.memoizedState)||(rn=!0),e.memoizedState=o,e.baseQueue===null&&(e.baseState=o),n.lastRenderedState=o}return[o,i]}function F0(){}function O0(t,e){var n=vt,i=Ln(),r=e(),o=!$n(i.memoizedState,r);if(o&&(i.memoizedState=r,rn=!0),i=i.queue,fh(H0.bind(null,n,i,t),[t]),i.getSnapshot!==e||o||It!==null&&It.memoizedState.tag&1){if(n.flags|=2048,zs(9,B0.bind(null,n,i,r,e),void 0,null),Dt===null)throw Error(ne(349));Or&30||k0(n,e,r)}return r}function k0(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=vt.updateQueue,e===null?(e={lastEffect:null,stores:null},vt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function B0(t,e,n,i){e.value=n,e.getSnapshot=i,z0(e)&&G0(t)}function H0(t,e,n){return n(function(){z0(e)&&G0(t)})}function z0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!$n(t,n)}catch{return!0}}function G0(t){var e=wi(t,1);e!==null&&Xn(e,t,1,-1)}function Op(t){var e=Kn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Hs,lastRenderedState:t},e.queue=t,t=t.dispatch=Ky.bind(null,vt,t),[e.memoizedState,t]}function zs(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=vt.updateQueue,e===null?(e={lastEffect:null,stores:null},vt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function V0(){return Ln().memoizedState}function al(t,e,n,i){var r=Kn();vt.flags|=t,r.memoizedState=zs(1|e,n,void 0,i===void 0?null:i)}function nu(t,e,n,i){var r=Ln();i=i===void 0?null:i;var o=void 0;if(bt!==null){var s=bt.memoizedState;if(o=s.destroy,i!==null&&lh(i,s.deps)){r.memoizedState=zs(e,n,o,i);return}}vt.flags|=t,r.memoizedState=zs(1|e,n,o,i)}function kp(t,e){return al(8390656,8,t,e)}function fh(t,e){return nu(2048,8,t,e)}function W0(t,e){return nu(4,2,t,e)}function j0(t,e){return nu(4,4,t,e)}function X0(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Y0(t,e,n){return n=n!=null?n.concat([t]):null,nu(4,4,X0.bind(null,e,t),n)}function dh(){}function $0(t,e){var n=Ln();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&lh(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function q0(t,e){var n=Ln();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&lh(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function K0(t,e,n){return Or&21?($n(n,e)||(n=t0(),vt.lanes|=n,kr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,rn=!0),t.memoizedState=n)}function $y(t,e){var n=rt;rt=n!==0&&4>n?n:4,t(!0);var i=Zu.transition;Zu.transition={};try{t(!1),e()}finally{rt=n,Zu.transition=i}}function Z0(){return Ln().memoizedState}function qy(t,e,n){var i=Ji(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},Q0(t))J0(e,n);else if(n=I0(t,e,n,i),n!==null){var r=qt();Xn(n,t,i,r),ev(n,e,i)}}function Ky(t,e,n){var i=Ji(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(Q0(t))J0(e,r);else{var o=t.alternate;if(t.lanes===0&&(o===null||o.lanes===0)&&(o=e.lastRenderedReducer,o!==null))try{var s=e.lastRenderedState,a=o(s,n);if(r.hasEagerState=!0,r.eagerState=a,$n(a,s)){var l=e.interleaved;l===null?(r.next=r,ih(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=I0(t,e,r,i),n!==null&&(r=qt(),Xn(n,t,i,r),ev(n,e,i))}}function Q0(t){var e=t.alternate;return t===vt||e!==null&&e===vt}function J0(t,e){Es=Ol=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function ev(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Vd(t,n)}}var kl={readContext:Pn,useCallback:Ht,useContext:Ht,useEffect:Ht,useImperativeHandle:Ht,useInsertionEffect:Ht,useLayoutEffect:Ht,useMemo:Ht,useReducer:Ht,useRef:Ht,useState:Ht,useDebugValue:Ht,useDeferredValue:Ht,useTransition:Ht,useMutableSource:Ht,useSyncExternalStore:Ht,useId:Ht,unstable_isNewReconciler:!1},Zy={readContext:Pn,useCallback:function(t,e){return Kn().memoizedState=[t,e===void 0?null:e],t},useContext:Pn,useEffect:kp,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,al(4194308,4,X0.bind(null,e,t),n)},useLayoutEffect:function(t,e){return al(4194308,4,t,e)},useInsertionEffect:function(t,e){return al(4,2,t,e)},useMemo:function(t,e){var n=Kn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Kn();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=qy.bind(null,vt,t),[i.memoizedState,t]},useRef:function(t){var e=Kn();return t={current:t},e.memoizedState=t},useState:Op,useDebugValue:dh,useDeferredValue:function(t){return Kn().memoizedState=t},useTransition:function(){var t=Op(!1),e=t[0];return t=$y.bind(null,t[1]),Kn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=vt,r=Kn();if(mt){if(n===void 0)throw Error(ne(407));n=n()}else{if(n=e(),Dt===null)throw Error(ne(349));Or&30||k0(i,e,n)}r.memoizedState=n;var o={value:n,getSnapshot:e};return r.queue=o,kp(H0.bind(null,i,o,t),[t]),i.flags|=2048,zs(9,B0.bind(null,i,o,n,e),void 0,null),n},useId:function(){var t=Kn(),e=Dt.identifierPrefix;if(mt){var n=vi,i=gi;n=(i&~(1<<32-jn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Bs++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Yy++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Qy={readContext:Pn,useCallback:$0,useContext:Pn,useEffect:fh,useImperativeHandle:Y0,useInsertionEffect:W0,useLayoutEffect:j0,useMemo:q0,useReducer:Qu,useRef:V0,useState:function(){return Qu(Hs)},useDebugValue:dh,useDeferredValue:function(t){var e=Ln();return K0(e,bt.memoizedState,t)},useTransition:function(){var t=Qu(Hs)[0],e=Ln().memoizedState;return[t,e]},useMutableSource:F0,useSyncExternalStore:O0,useId:Z0,unstable_isNewReconciler:!1},Jy={readContext:Pn,useCallback:$0,useContext:Pn,useEffect:fh,useImperativeHandle:Y0,useInsertionEffect:W0,useLayoutEffect:j0,useMemo:q0,useReducer:Ju,useRef:V0,useState:function(){return Ju(Hs)},useDebugValue:dh,useDeferredValue:function(t){var e=Ln();return bt===null?e.memoizedState=t:K0(e,bt.memoizedState,t)},useTransition:function(){var t=Ju(Hs)[0],e=Ln().memoizedState;return[t,e]},useMutableSource:F0,useSyncExternalStore:O0,useId:Z0,unstable_isNewReconciler:!1};function Bn(t,e){if(t&&t.defaultProps){e=_t({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function gf(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:_t({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var iu={isMounted:function(t){return(t=t._reactInternals)?Wr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=qt(),r=Ji(t),o=Si(i,r);o.payload=e,n!=null&&(o.callback=n),e=Zi(t,o,r),e!==null&&(Xn(e,t,r,i),ol(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=qt(),r=Ji(t),o=Si(i,r);o.tag=1,o.payload=e,n!=null&&(o.callback=n),e=Zi(t,o,r),e!==null&&(Xn(e,t,r,i),ol(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=qt(),i=Ji(t),r=Si(n,i);r.tag=2,e!=null&&(r.callback=e),e=Zi(t,r,i),e!==null&&(Xn(e,t,i,n),ol(e,t,i))}};function Bp(t,e,n,i,r,o,s){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,o,s):e.prototype&&e.prototype.isPureReactComponent?!Is(n,i)||!Is(r,o):!0}function tv(t,e,n){var i=!1,r=rr,o=e.contextType;return typeof o=="object"&&o!==null?o=Pn(o):(r=sn(e)?Ur:jt.current,i=e.contextTypes,o=(i=i!=null)?Io(t,r):rr),e=new e(n,o),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=iu,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=o),e}function Hp(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&iu.enqueueReplaceState(e,e.state,null)}function vf(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},rh(t);var o=e.contextType;typeof o=="object"&&o!==null?r.context=Pn(o):(o=sn(e)?Ur:jt.current,r.context=Io(t,o)),r.state=t.memoizedState,o=e.getDerivedStateFromProps,typeof o=="function"&&(gf(t,e,o,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&iu.enqueueReplaceState(r,r.state,null),Ul(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Oo(t,e){try{var n="",i=e;do n+=Cx(i),i=i.return;while(i);var r=n}catch(o){r=`
Error generating stack: `+o.message+`
`+o.stack}return{value:t,source:e,stack:r,digest:null}}function ec(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function _f(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var eS=typeof WeakMap=="function"?WeakMap:Map;function nv(t,e,n){n=Si(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Hl||(Hl=!0,bf=i),_f(t,e)},n}function iv(t,e,n){n=Si(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){_f(t,e)}}var o=t.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){_f(t,e),typeof i!="function"&&(Qi===null?Qi=new Set([this]):Qi.add(this));var s=e.stack;this.componentDidCatch(e.value,{componentStack:s!==null?s:""})}),n}function zp(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new eS;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=pS.bind(null,t,e,n),e.then(t,t))}function Gp(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Vp(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Si(-1,1),e.tag=2,Zi(n,e,1))),n.lanes|=1),t)}var tS=Ri.ReactCurrentOwner,rn=!1;function $t(t,e,n,i){e.child=t===null?N0(e,null,n,i):Uo(e,t.child,n,i)}function Wp(t,e,n,i,r){n=n.render;var o=e.ref;return Co(e,r),i=uh(t,e,n,i,o,r),n=ch(),t!==null&&!rn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ai(t,e,r)):(mt&&n&&Zd(e),e.flags|=1,$t(t,e,i,r),e.child)}function jp(t,e,n,i,r){if(t===null){var o=n.type;return typeof o=="function"&&!yh(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=o,rv(t,e,o,i,r)):(t=fl(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(o=t.child,!(t.lanes&r)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:Is,n(s,i)&&t.ref===e.ref)return Ai(t,e,r)}return e.flags|=1,t=er(o,i),t.ref=e.ref,t.return=e,e.child=t}function rv(t,e,n,i,r){if(t!==null){var o=t.memoizedProps;if(Is(o,i)&&t.ref===e.ref)if(rn=!1,e.pendingProps=i=o,(t.lanes&r)!==0)t.flags&131072&&(rn=!0);else return e.lanes=t.lanes,Ai(t,e,r)}return xf(t,e,n,i,r)}function ov(t,e,n){var i=e.pendingProps,r=i.children,o=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},lt(So,mn),mn|=n;else{if(!(n&1073741824))return t=o!==null?o.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,lt(So,mn),mn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=o!==null?o.baseLanes:n,lt(So,mn),mn|=i}else o!==null?(i=o.baseLanes|n,e.memoizedState=null):i=n,lt(So,mn),mn|=i;return $t(t,e,r,n),e.child}function sv(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function xf(t,e,n,i,r){var o=sn(n)?Ur:jt.current;return o=Io(e,o),Co(e,r),n=uh(t,e,n,i,o,r),i=ch(),t!==null&&!rn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ai(t,e,r)):(mt&&i&&Zd(e),e.flags|=1,$t(t,e,n,r),e.child)}function Xp(t,e,n,i,r){if(sn(n)){var o=!0;Pl(e)}else o=!1;if(Co(e,r),e.stateNode===null)ll(t,e),tv(e,n,i),vf(e,n,i,r),i=!0;else if(t===null){var s=e.stateNode,a=e.memoizedProps;s.props=a;var l=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=Pn(u):(u=sn(n)?Ur:jt.current,u=Io(e,u));var c=n.getDerivedStateFromProps,h=typeof c=="function"||typeof s.getSnapshotBeforeUpdate=="function";h||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==i||l!==u)&&Hp(e,s,i,u),Hi=!1;var d=e.memoizedState;s.state=d,Ul(e,i,s,r),l=e.memoizedState,a!==i||d!==l||on.current||Hi?(typeof c=="function"&&(gf(e,n,c,i),l=e.memoizedState),(a=Hi||Bp(e,n,a,i,d,l,u))?(h||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(e.flags|=4194308)):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),s.props=i,s.state=l,s.context=u,i=a):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{s=e.stateNode,D0(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:Bn(e.type,a),s.props=u,h=e.pendingProps,d=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=Pn(l):(l=sn(n)?Ur:jt.current,l=Io(e,l));var m=n.getDerivedStateFromProps;(c=typeof m=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==h||d!==l)&&Hp(e,s,i,l),Hi=!1,d=e.memoizedState,s.state=d,Ul(e,i,s,r);var v=e.memoizedState;a!==h||d!==v||on.current||Hi?(typeof m=="function"&&(gf(e,n,m,i),v=e.memoizedState),(u=Hi||Bp(e,n,u,i,d,v,l)||!1)?(c||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(i,v,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(i,v,l)),typeof s.componentDidUpdate=="function"&&(e.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=v),s.props=i,s.state=v,s.context=l,i=u):(typeof s.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),i=!1)}return yf(t,e,n,i,o,r)}function yf(t,e,n,i,r,o){sv(t,e);var s=(e.flags&128)!==0;if(!i&&!s)return r&&Lp(e,n,!1),Ai(t,e,o);i=e.stateNode,tS.current=e;var a=s&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&s?(e.child=Uo(e,t.child,null,o),e.child=Uo(e,null,a,o)):$t(t,e,a,o),e.memoizedState=i.state,r&&Lp(e,n,!0),e.child}function av(t){var e=t.stateNode;e.pendingContext?Pp(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Pp(t,e.context,!1),oh(t,e.containerInfo)}function Yp(t,e,n,i,r){return Do(),Jd(r),e.flags|=256,$t(t,e,n,i),e.child}var Sf={dehydrated:null,treeContext:null,retryLane:0};function Ef(t){return{baseLanes:t,cachePool:null,transitions:null}}function lv(t,e,n){var i=e.pendingProps,r=gt.current,o=!1,s=(e.flags&128)!==0,a;if((a=s)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(o=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),lt(gt,r&1),t===null)return pf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(s=i.children,t=i.fallback,o?(i=e.mode,o=e.child,s={mode:"hidden",children:s},!(i&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=su(s,i,0,null),t=Ir(t,i,n,null),o.return=e,t.return=e,o.sibling=t,e.child=o,e.child.memoizedState=Ef(n),e.memoizedState=Sf,t):hh(e,s));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return nS(t,e,s,i,a,r,n);if(o){o=i.fallback,s=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(s&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=er(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?o=er(a,o):(o=Ir(o,s,n,null),o.flags|=2),o.return=e,i.return=e,i.sibling=o,e.child=i,i=o,o=e.child,s=t.child.memoizedState,s=s===null?Ef(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=t.childLanes&~n,e.memoizedState=Sf,i}return o=t.child,t=o.sibling,i=er(o,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function hh(t,e){return e=su({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function xa(t,e,n,i){return i!==null&&Jd(i),Uo(e,t.child,null,n),t=hh(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function nS(t,e,n,i,r,o,s){if(n)return e.flags&256?(e.flags&=-257,i=ec(Error(ne(422))),xa(t,e,s,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(o=i.fallback,r=e.mode,i=su({mode:"visible",children:i.children},r,0,null),o=Ir(o,r,s,null),o.flags|=2,i.return=e,o.return=e,i.sibling=o,e.child=i,e.mode&1&&Uo(e,t.child,null,s),e.child.memoizedState=Ef(s),e.memoizedState=Sf,o);if(!(e.mode&1))return xa(t,e,s,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,o=Error(ne(419)),i=ec(o,i,void 0),xa(t,e,s,i)}if(a=(s&t.childLanes)!==0,rn||a){if(i=Dt,i!==null){switch(s&-s){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|s)?0:r,r!==0&&r!==o.retryLane&&(o.retryLane=r,wi(t,r),Xn(i,t,r,-1))}return xh(),i=ec(Error(ne(421))),xa(t,e,s,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=mS.bind(null,t),r._reactRetry=e,null):(t=o.treeContext,gn=Ki(r.nextSibling),vn=e,mt=!0,zn=null,t!==null&&(Tn[wn++]=gi,Tn[wn++]=vi,Tn[wn++]=Fr,gi=t.id,vi=t.overflow,Fr=e),e=hh(e,i.children),e.flags|=4096,e)}function $p(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),mf(t.return,e,n)}function tc(t,e,n,i,r){var o=t.memoizedState;o===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(o.isBackwards=e,o.rendering=null,o.renderingStartTime=0,o.last=i,o.tail=n,o.tailMode=r)}function uv(t,e,n){var i=e.pendingProps,r=i.revealOrder,o=i.tail;if($t(t,e,i.children,n),i=gt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&$p(t,n,e);else if(t.tag===19)$p(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(lt(gt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Fl(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),tc(e,!1,r,n,o);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Fl(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}tc(e,!0,n,null,o);break;case"together":tc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function ll(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Ai(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),kr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ne(153));if(e.child!==null){for(t=e.child,n=er(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=er(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function iS(t,e,n){switch(e.tag){case 3:av(e),Do();break;case 5:U0(e);break;case 1:sn(e.type)&&Pl(e);break;case 4:oh(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;lt(Il,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(lt(gt,gt.current&1),e.flags|=128,null):n&e.child.childLanes?lv(t,e,n):(lt(gt,gt.current&1),t=Ai(t,e,n),t!==null?t.sibling:null);lt(gt,gt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return uv(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),lt(gt,gt.current),i)break;return null;case 22:case 23:return e.lanes=0,ov(t,e,n)}return Ai(t,e,n)}var cv,Mf,fv,dv;cv=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Mf=function(){};fv=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Rr(ri.current);var o=null;switch(n){case"input":r=Wc(t,r),i=Wc(t,i),o=[];break;case"select":r=_t({},r,{value:void 0}),i=_t({},i,{value:void 0}),o=[];break;case"textarea":r=Yc(t,r),i=Yc(t,i),o=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=bl)}qc(n,i);var s;n=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var a=r[u];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(As.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in i){var l=i[u];if(a=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(o||(o=[]),o.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(o=o||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(As.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&ft("scroll",t),o||a===l||(o=[])):(o=o||[]).push(u,l))}n&&(o=o||[]).push("style",n);var u=o;(e.updateQueue=u)&&(e.flags|=4)}};dv=function(t,e,n,i){n!==i&&(e.flags|=4)};function rs(t,e){if(!mt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function zt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function rS(t,e,n){var i=e.pendingProps;switch(Qd(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return zt(e),null;case 1:return sn(e.type)&&Rl(),zt(e),null;case 3:return i=e.stateNode,Fo(),pt(on),pt(jt),ah(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(va(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,zn!==null&&(Lf(zn),zn=null))),Mf(t,e),zt(e),null;case 5:sh(e);var r=Rr(ks.current);if(n=e.type,t!==null&&e.stateNode!=null)fv(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ne(166));return zt(e),null}if(t=Rr(ri.current),va(e)){i=e.stateNode,n=e.type;var o=e.memoizedProps;switch(i[ni]=e,i[Fs]=o,t=(e.mode&1)!==0,n){case"dialog":ft("cancel",i),ft("close",i);break;case"iframe":case"object":case"embed":ft("load",i);break;case"video":case"audio":for(r=0;r<ms.length;r++)ft(ms[r],i);break;case"source":ft("error",i);break;case"img":case"image":case"link":ft("error",i),ft("load",i);break;case"details":ft("toggle",i);break;case"input":ip(i,o),ft("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!o.multiple},ft("invalid",i);break;case"textarea":op(i,o),ft("invalid",i)}qc(n,o),r=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?i.textContent!==a&&(o.suppressHydrationWarning!==!0&&ga(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&ga(i.textContent,a,t),r=["children",""+a]):As.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&ft("scroll",i)}switch(n){case"input":la(i),rp(i,o,!0);break;case"textarea":la(i),sp(i);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(i.onclick=bl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{s=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Hg(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=s.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=s.createElement(n,{is:i.is}):(t=s.createElement(n),n==="select"&&(s=t,i.multiple?s.multiple=!0:i.size&&(s.size=i.size))):t=s.createElementNS(t,n),t[ni]=e,t[Fs]=i,cv(t,e,!1,!1),e.stateNode=t;e:{switch(s=Kc(n,i),n){case"dialog":ft("cancel",t),ft("close",t),r=i;break;case"iframe":case"object":case"embed":ft("load",t),r=i;break;case"video":case"audio":for(r=0;r<ms.length;r++)ft(ms[r],t);r=i;break;case"source":ft("error",t),r=i;break;case"img":case"image":case"link":ft("error",t),ft("load",t),r=i;break;case"details":ft("toggle",t),r=i;break;case"input":ip(t,i),r=Wc(t,i),ft("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=_t({},i,{value:void 0}),ft("invalid",t);break;case"textarea":op(t,i),r=Yc(t,i),ft("invalid",t);break;default:r=i}qc(n,r),a=r;for(o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="style"?Vg(t,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&zg(t,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Cs(t,l):typeof l=="number"&&Cs(t,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(As.hasOwnProperty(o)?l!=null&&o==="onScroll"&&ft("scroll",t):l!=null&&Od(t,o,l,s))}switch(n){case"input":la(t),rp(t,i,!1);break;case"textarea":la(t),sp(t);break;case"option":i.value!=null&&t.setAttribute("value",""+ir(i.value));break;case"select":t.multiple=!!i.multiple,o=i.value,o!=null?Mo(t,!!i.multiple,o,!1):i.defaultValue!=null&&Mo(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=bl)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return zt(e),null;case 6:if(t&&e.stateNode!=null)dv(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ne(166));if(n=Rr(ks.current),Rr(ri.current),va(e)){if(i=e.stateNode,n=e.memoizedProps,i[ni]=e,(o=i.nodeValue!==n)&&(t=vn,t!==null))switch(t.tag){case 3:ga(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ga(i.nodeValue,n,(t.mode&1)!==0)}o&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[ni]=e,e.stateNode=i}return zt(e),null;case 13:if(pt(gt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(mt&&gn!==null&&e.mode&1&&!(e.flags&128))P0(),Do(),e.flags|=98560,o=!1;else if(o=va(e),i!==null&&i.dehydrated!==null){if(t===null){if(!o)throw Error(ne(318));if(o=e.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(ne(317));o[ni]=e}else Do(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;zt(e),o=!1}else zn!==null&&(Lf(zn),zn=null),o=!0;if(!o)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||gt.current&1?Rt===0&&(Rt=3):xh())),e.updateQueue!==null&&(e.flags|=4),zt(e),null);case 4:return Fo(),Mf(t,e),t===null&&Ds(e.stateNode.containerInfo),zt(e),null;case 10:return nh(e.type._context),zt(e),null;case 17:return sn(e.type)&&Rl(),zt(e),null;case 19:if(pt(gt),o=e.memoizedState,o===null)return zt(e),null;if(i=(e.flags&128)!==0,s=o.rendering,s===null)if(i)rs(o,!1);else{if(Rt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(s=Fl(t),s!==null){for(e.flags|=128,rs(o,!1),i=s.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)o=n,t=i,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=t,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,t=s.dependencies,o.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return lt(gt,gt.current&1|2),e.child}t=t.sibling}o.tail!==null&&Et()>ko&&(e.flags|=128,i=!0,rs(o,!1),e.lanes=4194304)}else{if(!i)if(t=Fl(s),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),rs(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!mt)return zt(e),null}else 2*Et()-o.renderingStartTime>ko&&n!==1073741824&&(e.flags|=128,i=!0,rs(o,!1),e.lanes=4194304);o.isBackwards?(s.sibling=e.child,e.child=s):(n=o.last,n!==null?n.sibling=s:e.child=s,o.last=s)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=Et(),e.sibling=null,n=gt.current,lt(gt,i?n&1|2:n&1),e):(zt(e),null);case 22:case 23:return _h(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?mn&1073741824&&(zt(e),e.subtreeFlags&6&&(e.flags|=8192)):zt(e),null;case 24:return null;case 25:return null}throw Error(ne(156,e.tag))}function oS(t,e){switch(Qd(e),e.tag){case 1:return sn(e.type)&&Rl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Fo(),pt(on),pt(jt),ah(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return sh(e),null;case 13:if(pt(gt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ne(340));Do()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return pt(gt),null;case 4:return Fo(),null;case 10:return nh(e.type._context),null;case 22:case 23:return _h(),null;case 24:return null;default:return null}}var ya=!1,Wt=!1,sS=typeof WeakSet=="function"?WeakSet:Set,pe=null;function yo(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){yt(t,e,i)}else n.current=null}function Tf(t,e,n){try{n()}catch(i){yt(t,e,i)}}var qp=!1;function aS(t,e){if(af=wl,t=v0(),Kd(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,o=i.focusNode;i=i.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,a=-1,l=-1,u=0,c=0,h=t,d=null;t:for(;;){for(var m;h!==n||r!==0&&h.nodeType!==3||(a=s+r),h!==o||i!==0&&h.nodeType!==3||(l=s+i),h.nodeType===3&&(s+=h.nodeValue.length),(m=h.firstChild)!==null;)d=h,h=m;for(;;){if(h===t)break t;if(d===n&&++u===r&&(a=s),d===o&&++c===i&&(l=s),(m=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=m}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(lf={focusedElem:t,selectionRange:n},wl=!1,pe=e;pe!==null;)if(e=pe,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,pe=t;else for(;pe!==null;){e=pe;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var y=v.memoizedProps,p=v.memoizedState,f=e.stateNode,_=f.getSnapshotBeforeUpdate(e.elementType===e.type?y:Bn(e.type,y),p);f.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ne(163))}}catch(M){yt(e,e.return,M)}if(t=e.sibling,t!==null){t.return=e.return,pe=t;break}pe=e.return}return v=qp,qp=!1,v}function Ms(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var o=r.destroy;r.destroy=void 0,o!==void 0&&Tf(e,n,o)}r=r.next}while(r!==i)}}function ru(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function wf(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function hv(t){var e=t.alternate;e!==null&&(t.alternate=null,hv(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[ni],delete e[Fs],delete e[ff],delete e[Vy],delete e[Wy])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function pv(t){return t.tag===5||t.tag===3||t.tag===4}function Kp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||pv(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Af(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=bl));else if(i!==4&&(t=t.child,t!==null))for(Af(t,e,n),t=t.sibling;t!==null;)Af(t,e,n),t=t.sibling}function Cf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Cf(t,e,n),t=t.sibling;t!==null;)Cf(t,e,n),t=t.sibling}var Ot=null,Hn=!1;function Ni(t,e,n){for(n=n.child;n!==null;)mv(t,e,n),n=n.sibling}function mv(t,e,n){if(ii&&typeof ii.onCommitFiberUnmount=="function")try{ii.onCommitFiberUnmount(Kl,n)}catch{}switch(n.tag){case 5:Wt||yo(n,e);case 6:var i=Ot,r=Hn;Ot=null,Ni(t,e,n),Ot=i,Hn=r,Ot!==null&&(Hn?(t=Ot,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ot.removeChild(n.stateNode));break;case 18:Ot!==null&&(Hn?(t=Ot,n=n.stateNode,t.nodeType===8?$u(t.parentNode,n):t.nodeType===1&&$u(t,n),Ls(t)):$u(Ot,n.stateNode));break;case 4:i=Ot,r=Hn,Ot=n.stateNode.containerInfo,Hn=!0,Ni(t,e,n),Ot=i,Hn=r;break;case 0:case 11:case 14:case 15:if(!Wt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var o=r,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&Tf(n,e,s),r=r.next}while(r!==i)}Ni(t,e,n);break;case 1:if(!Wt&&(yo(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){yt(n,e,a)}Ni(t,e,n);break;case 21:Ni(t,e,n);break;case 22:n.mode&1?(Wt=(i=Wt)||n.memoizedState!==null,Ni(t,e,n),Wt=i):Ni(t,e,n);break;default:Ni(t,e,n)}}function Zp(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new sS),e.forEach(function(i){var r=gS.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Un(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var o=t,s=e,a=s;e:for(;a!==null;){switch(a.tag){case 5:Ot=a.stateNode,Hn=!1;break e;case 3:Ot=a.stateNode.containerInfo,Hn=!0;break e;case 4:Ot=a.stateNode.containerInfo,Hn=!0;break e}a=a.return}if(Ot===null)throw Error(ne(160));mv(o,s,r),Ot=null,Hn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){yt(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)gv(e,t),e=e.sibling}function gv(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Un(e,t),qn(t),i&4){try{Ms(3,t,t.return),ru(3,t)}catch(y){yt(t,t.return,y)}try{Ms(5,t,t.return)}catch(y){yt(t,t.return,y)}}break;case 1:Un(e,t),qn(t),i&512&&n!==null&&yo(n,n.return);break;case 5:if(Un(e,t),qn(t),i&512&&n!==null&&yo(n,n.return),t.flags&32){var r=t.stateNode;try{Cs(r,"")}catch(y){yt(t,t.return,y)}}if(i&4&&(r=t.stateNode,r!=null)){var o=t.memoizedProps,s=n!==null?n.memoizedProps:o,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&kg(r,o),Kc(a,s);var u=Kc(a,o);for(s=0;s<l.length;s+=2){var c=l[s],h=l[s+1];c==="style"?Vg(r,h):c==="dangerouslySetInnerHTML"?zg(r,h):c==="children"?Cs(r,h):Od(r,c,h,u)}switch(a){case"input":jc(r,o);break;case"textarea":Bg(r,o);break;case"select":var d=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!o.multiple;var m=o.value;m!=null?Mo(r,!!o.multiple,m,!1):d!==!!o.multiple&&(o.defaultValue!=null?Mo(r,!!o.multiple,o.defaultValue,!0):Mo(r,!!o.multiple,o.multiple?[]:"",!1))}r[Fs]=o}catch(y){yt(t,t.return,y)}}break;case 6:if(Un(e,t),qn(t),i&4){if(t.stateNode===null)throw Error(ne(162));r=t.stateNode,o=t.memoizedProps;try{r.nodeValue=o}catch(y){yt(t,t.return,y)}}break;case 3:if(Un(e,t),qn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Ls(e.containerInfo)}catch(y){yt(t,t.return,y)}break;case 4:Un(e,t),qn(t);break;case 13:Un(e,t),qn(t),r=t.child,r.flags&8192&&(o=r.memoizedState!==null,r.stateNode.isHidden=o,!o||r.alternate!==null&&r.alternate.memoizedState!==null||(gh=Et())),i&4&&Zp(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(Wt=(u=Wt)||c,Un(e,t),Wt=u):Un(e,t),qn(t),i&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(pe=t,c=t.child;c!==null;){for(h=pe=c;pe!==null;){switch(d=pe,m=d.child,d.tag){case 0:case 11:case 14:case 15:Ms(4,d,d.return);break;case 1:yo(d,d.return);var v=d.stateNode;if(typeof v.componentWillUnmount=="function"){i=d,n=d.return;try{e=i,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(y){yt(i,n,y)}}break;case 5:yo(d,d.return);break;case 22:if(d.memoizedState!==null){Jp(h);continue}}m!==null?(m.return=d,pe=m):Jp(h)}c=c.sibling}e:for(c=null,h=t;;){if(h.tag===5){if(c===null){c=h;try{r=h.stateNode,u?(o=r.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=h.stateNode,l=h.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Gg("display",s))}catch(y){yt(t,t.return,y)}}}else if(h.tag===6){if(c===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(y){yt(t,t.return,y)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;c===h&&(c=null),h=h.return}c===h&&(c=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Un(e,t),qn(t),i&4&&Zp(t);break;case 21:break;default:Un(e,t),qn(t)}}function qn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(pv(n)){var i=n;break e}n=n.return}throw Error(ne(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Cs(r,""),i.flags&=-33);var o=Kp(t);Cf(t,o,r);break;case 3:case 4:var s=i.stateNode.containerInfo,a=Kp(t);Af(t,a,s);break;default:throw Error(ne(161))}}catch(l){yt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function lS(t,e,n){pe=t,vv(t)}function vv(t,e,n){for(var i=(t.mode&1)!==0;pe!==null;){var r=pe,o=r.child;if(r.tag===22&&i){var s=r.memoizedState!==null||ya;if(!s){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Wt;a=ya;var u=Wt;if(ya=s,(Wt=l)&&!u)for(pe=r;pe!==null;)s=pe,l=s.child,s.tag===22&&s.memoizedState!==null?em(r):l!==null?(l.return=s,pe=l):em(r);for(;o!==null;)pe=o,vv(o),o=o.sibling;pe=r,ya=a,Wt=u}Qp(t)}else r.subtreeFlags&8772&&o!==null?(o.return=r,pe=o):Qp(t)}}function Qp(t){for(;pe!==null;){var e=pe;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Wt||ru(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Wt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Bn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var o=e.updateQueue;o!==null&&Fp(e,o,i);break;case 3:var s=e.updateQueue;if(s!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Fp(e,s,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var h=c.dehydrated;h!==null&&Ls(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ne(163))}Wt||e.flags&512&&wf(e)}catch(d){yt(e,e.return,d)}}if(e===t){pe=null;break}if(n=e.sibling,n!==null){n.return=e.return,pe=n;break}pe=e.return}}function Jp(t){for(;pe!==null;){var e=pe;if(e===t){pe=null;break}var n=e.sibling;if(n!==null){n.return=e.return,pe=n;break}pe=e.return}}function em(t){for(;pe!==null;){var e=pe;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{ru(4,e)}catch(l){yt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){yt(e,r,l)}}var o=e.return;try{wf(e)}catch(l){yt(e,o,l)}break;case 5:var s=e.return;try{wf(e)}catch(l){yt(e,s,l)}}}catch(l){yt(e,e.return,l)}if(e===t){pe=null;break}var a=e.sibling;if(a!==null){a.return=e.return,pe=a;break}pe=e.return}}var uS=Math.ceil,Bl=Ri.ReactCurrentDispatcher,ph=Ri.ReactCurrentOwner,Rn=Ri.ReactCurrentBatchConfig,Ke=0,Dt=null,Ct=null,kt=0,mn=0,So=lr(0),Rt=0,Gs=null,kr=0,ou=0,mh=0,Ts=null,tn=null,gh=0,ko=1/0,hi=null,Hl=!1,bf=null,Qi=null,Sa=!1,ji=null,zl=0,ws=0,Rf=null,ul=-1,cl=0;function qt(){return Ke&6?Et():ul!==-1?ul:ul=Et()}function Ji(t){return t.mode&1?Ke&2&&kt!==0?kt&-kt:Xy.transition!==null?(cl===0&&(cl=t0()),cl):(t=rt,t!==0||(t=window.event,t=t===void 0?16:l0(t.type)),t):1}function Xn(t,e,n,i){if(50<ws)throw ws=0,Rf=null,Error(ne(185));Xs(t,n,i),(!(Ke&2)||t!==Dt)&&(t===Dt&&(!(Ke&2)&&(ou|=n),Rt===4&&Gi(t,kt)),an(t,i),n===1&&Ke===0&&!(e.mode&1)&&(ko=Et()+500,tu&&ur()))}function an(t,e){var n=t.callbackNode;Xx(t,e);var i=Tl(t,t===Dt?kt:0);if(i===0)n!==null&&up(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&up(n),e===1)t.tag===0?jy(tm.bind(null,t)):C0(tm.bind(null,t)),zy(function(){!(Ke&6)&&ur()}),n=null;else{switch(n0(i)){case 1:n=Gd;break;case 4:n=Jg;break;case 16:n=Ml;break;case 536870912:n=e0;break;default:n=Ml}n=wv(n,_v.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function _v(t,e){if(ul=-1,cl=0,Ke&6)throw Error(ne(327));var n=t.callbackNode;if(bo()&&t.callbackNode!==n)return null;var i=Tl(t,t===Dt?kt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Gl(t,i);else{e=i;var r=Ke;Ke|=2;var o=yv();(Dt!==t||kt!==e)&&(hi=null,ko=Et()+500,Nr(t,e));do try{dS();break}catch(a){xv(t,a)}while(!0);th(),Bl.current=o,Ke=r,Ct!==null?e=0:(Dt=null,kt=0,e=Rt)}if(e!==0){if(e===2&&(r=tf(t),r!==0&&(i=r,e=Pf(t,r))),e===1)throw n=Gs,Nr(t,0),Gi(t,i),an(t,Et()),n;if(e===6)Gi(t,i);else{if(r=t.current.alternate,!(i&30)&&!cS(r)&&(e=Gl(t,i),e===2&&(o=tf(t),o!==0&&(i=o,e=Pf(t,o))),e===1))throw n=Gs,Nr(t,0),Gi(t,i),an(t,Et()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ne(345));case 2:Sr(t,tn,hi);break;case 3:if(Gi(t,i),(i&130023424)===i&&(e=gh+500-Et(),10<e)){if(Tl(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){qt(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=cf(Sr.bind(null,t,tn,hi),e);break}Sr(t,tn,hi);break;case 4:if(Gi(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var s=31-jn(i);o=1<<s,s=e[s],s>r&&(r=s),i&=~o}if(i=r,i=Et()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*uS(i/1960))-i,10<i){t.timeoutHandle=cf(Sr.bind(null,t,tn,hi),i);break}Sr(t,tn,hi);break;case 5:Sr(t,tn,hi);break;default:throw Error(ne(329))}}}return an(t,Et()),t.callbackNode===n?_v.bind(null,t):null}function Pf(t,e){var n=Ts;return t.current.memoizedState.isDehydrated&&(Nr(t,e).flags|=256),t=Gl(t,e),t!==2&&(e=tn,tn=n,e!==null&&Lf(e)),t}function Lf(t){tn===null?tn=t:tn.push.apply(tn,t)}function cS(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],o=r.getSnapshot;r=r.value;try{if(!$n(o(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Gi(t,e){for(e&=~mh,e&=~ou,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-jn(e),i=1<<n;t[n]=-1,e&=~i}}function tm(t){if(Ke&6)throw Error(ne(327));bo();var e=Tl(t,0);if(!(e&1))return an(t,Et()),null;var n=Gl(t,e);if(t.tag!==0&&n===2){var i=tf(t);i!==0&&(e=i,n=Pf(t,i))}if(n===1)throw n=Gs,Nr(t,0),Gi(t,e),an(t,Et()),n;if(n===6)throw Error(ne(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Sr(t,tn,hi),an(t,Et()),null}function vh(t,e){var n=Ke;Ke|=1;try{return t(e)}finally{Ke=n,Ke===0&&(ko=Et()+500,tu&&ur())}}function Br(t){ji!==null&&ji.tag===0&&!(Ke&6)&&bo();var e=Ke;Ke|=1;var n=Rn.transition,i=rt;try{if(Rn.transition=null,rt=1,t)return t()}finally{rt=i,Rn.transition=n,Ke=e,!(Ke&6)&&ur()}}function _h(){mn=So.current,pt(So)}function Nr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Hy(n)),Ct!==null)for(n=Ct.return;n!==null;){var i=n;switch(Qd(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Rl();break;case 3:Fo(),pt(on),pt(jt),ah();break;case 5:sh(i);break;case 4:Fo();break;case 13:pt(gt);break;case 19:pt(gt);break;case 10:nh(i.type._context);break;case 22:case 23:_h()}n=n.return}if(Dt=t,Ct=t=er(t.current,null),kt=mn=e,Rt=0,Gs=null,mh=ou=kr=0,tn=Ts=null,br!==null){for(e=0;e<br.length;e++)if(n=br[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,o=n.pending;if(o!==null){var s=o.next;o.next=r,i.next=s}n.pending=i}br=null}return t}function xv(t,e){do{var n=Ct;try{if(th(),sl.current=kl,Ol){for(var i=vt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Ol=!1}if(Or=0,It=bt=vt=null,Es=!1,Bs=0,ph.current=null,n===null||n.return===null){Rt=1,Gs=e,Ct=null;break}e:{var o=t,s=n.return,a=n,l=e;if(e=kt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,h=c.tag;if(!(c.mode&1)&&(h===0||h===11||h===15)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var m=Gp(s);if(m!==null){m.flags&=-257,Vp(m,s,a,o,e),m.mode&1&&zp(o,u,e),e=m,l=u;var v=e.updateQueue;if(v===null){var y=new Set;y.add(l),e.updateQueue=y}else v.add(l);break e}else{if(!(e&1)){zp(o,u,e),xh();break e}l=Error(ne(426))}}else if(mt&&a.mode&1){var p=Gp(s);if(p!==null){!(p.flags&65536)&&(p.flags|=256),Vp(p,s,a,o,e),Jd(Oo(l,a));break e}}o=l=Oo(l,a),Rt!==4&&(Rt=2),Ts===null?Ts=[o]:Ts.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,e&=-e,o.lanes|=e;var f=nv(o,l,e);Up(o,f);break e;case 1:a=l;var _=o.type,g=o.stateNode;if(!(o.flags&128)&&(typeof _.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Qi===null||!Qi.has(g)))){o.flags|=65536,e&=-e,o.lanes|=e;var M=iv(o,a,e);Up(o,M);break e}}o=o.return}while(o!==null)}Ev(n)}catch(P){e=P,Ct===n&&n!==null&&(Ct=n=n.return);continue}break}while(!0)}function yv(){var t=Bl.current;return Bl.current=kl,t===null?kl:t}function xh(){(Rt===0||Rt===3||Rt===2)&&(Rt=4),Dt===null||!(kr&268435455)&&!(ou&268435455)||Gi(Dt,kt)}function Gl(t,e){var n=Ke;Ke|=2;var i=yv();(Dt!==t||kt!==e)&&(hi=null,Nr(t,e));do try{fS();break}catch(r){xv(t,r)}while(!0);if(th(),Ke=n,Bl.current=i,Ct!==null)throw Error(ne(261));return Dt=null,kt=0,Rt}function fS(){for(;Ct!==null;)Sv(Ct)}function dS(){for(;Ct!==null&&!Ox();)Sv(Ct)}function Sv(t){var e=Tv(t.alternate,t,mn);t.memoizedProps=t.pendingProps,e===null?Ev(t):Ct=e,ph.current=null}function Ev(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=oS(n,e),n!==null){n.flags&=32767,Ct=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Rt=6,Ct=null;return}}else if(n=rS(n,e,mn),n!==null){Ct=n;return}if(e=e.sibling,e!==null){Ct=e;return}Ct=e=t}while(e!==null);Rt===0&&(Rt=5)}function Sr(t,e,n){var i=rt,r=Rn.transition;try{Rn.transition=null,rt=1,hS(t,e,n,i)}finally{Rn.transition=r,rt=i}return null}function hS(t,e,n,i){do bo();while(ji!==null);if(Ke&6)throw Error(ne(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ne(177));t.callbackNode=null,t.callbackPriority=0;var o=n.lanes|n.childLanes;if(Yx(t,o),t===Dt&&(Ct=Dt=null,kt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Sa||(Sa=!0,wv(Ml,function(){return bo(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Rn.transition,Rn.transition=null;var s=rt;rt=1;var a=Ke;Ke|=4,ph.current=null,aS(t,n),gv(n,t),Iy(lf),wl=!!af,lf=af=null,t.current=n,lS(n),kx(),Ke=a,rt=s,Rn.transition=o}else t.current=n;if(Sa&&(Sa=!1,ji=t,zl=r),o=t.pendingLanes,o===0&&(Qi=null),zx(n.stateNode),an(t,Et()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Hl)throw Hl=!1,t=bf,bf=null,t;return zl&1&&t.tag!==0&&bo(),o=t.pendingLanes,o&1?t===Rf?ws++:(ws=0,Rf=t):ws=0,ur(),null}function bo(){if(ji!==null){var t=n0(zl),e=Rn.transition,n=rt;try{if(Rn.transition=null,rt=16>t?16:t,ji===null)var i=!1;else{if(t=ji,ji=null,zl=0,Ke&6)throw Error(ne(331));var r=Ke;for(Ke|=4,pe=t.current;pe!==null;){var o=pe,s=o.child;if(pe.flags&16){var a=o.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(pe=u;pe!==null;){var c=pe;switch(c.tag){case 0:case 11:case 15:Ms(8,c,o)}var h=c.child;if(h!==null)h.return=c,pe=h;else for(;pe!==null;){c=pe;var d=c.sibling,m=c.return;if(hv(c),c===u){pe=null;break}if(d!==null){d.return=m,pe=d;break}pe=m}}}var v=o.alternate;if(v!==null){var y=v.child;if(y!==null){v.child=null;do{var p=y.sibling;y.sibling=null,y=p}while(y!==null)}}pe=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,pe=s;else e:for(;pe!==null;){if(o=pe,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Ms(9,o,o.return)}var f=o.sibling;if(f!==null){f.return=o.return,pe=f;break e}pe=o.return}}var _=t.current;for(pe=_;pe!==null;){s=pe;var g=s.child;if(s.subtreeFlags&2064&&g!==null)g.return=s,pe=g;else e:for(s=_;pe!==null;){if(a=pe,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:ru(9,a)}}catch(P){yt(a,a.return,P)}if(a===s){pe=null;break e}var M=a.sibling;if(M!==null){M.return=a.return,pe=M;break e}pe=a.return}}if(Ke=r,ur(),ii&&typeof ii.onPostCommitFiberRoot=="function")try{ii.onPostCommitFiberRoot(Kl,t)}catch{}i=!0}return i}finally{rt=n,Rn.transition=e}}return!1}function nm(t,e,n){e=Oo(n,e),e=nv(t,e,1),t=Zi(t,e,1),e=qt(),t!==null&&(Xs(t,1,e),an(t,e))}function yt(t,e,n){if(t.tag===3)nm(t,t,n);else for(;e!==null;){if(e.tag===3){nm(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Qi===null||!Qi.has(i))){t=Oo(n,t),t=iv(e,t,1),e=Zi(e,t,1),t=qt(),e!==null&&(Xs(e,1,t),an(e,t));break}}e=e.return}}function pS(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=qt(),t.pingedLanes|=t.suspendedLanes&n,Dt===t&&(kt&n)===n&&(Rt===4||Rt===3&&(kt&130023424)===kt&&500>Et()-gh?Nr(t,0):mh|=n),an(t,e)}function Mv(t,e){e===0&&(t.mode&1?(e=fa,fa<<=1,!(fa&130023424)&&(fa=4194304)):e=1);var n=qt();t=wi(t,e),t!==null&&(Xs(t,e,n),an(t,n))}function mS(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Mv(t,n)}function gS(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ne(314))}i!==null&&i.delete(e),Mv(t,n)}var Tv;Tv=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||on.current)rn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return rn=!1,iS(t,e,n);rn=!!(t.flags&131072)}else rn=!1,mt&&e.flags&1048576&&b0(e,Nl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;ll(t,e),t=e.pendingProps;var r=Io(e,jt.current);Co(e,n),r=uh(null,e,i,t,r,n);var o=ch();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,sn(i)?(o=!0,Pl(e)):o=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,rh(e),r.updater=iu,e.stateNode=r,r._reactInternals=e,vf(e,i,t,n),e=yf(null,e,i,!0,o,n)):(e.tag=0,mt&&o&&Zd(e),$t(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(ll(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=_S(i),t=Bn(i,t),r){case 0:e=xf(null,e,i,t,n);break e;case 1:e=Xp(null,e,i,t,n);break e;case 11:e=Wp(null,e,i,t,n);break e;case 14:e=jp(null,e,i,Bn(i.type,t),n);break e}throw Error(ne(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Bn(i,r),xf(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Bn(i,r),Xp(t,e,i,r,n);case 3:e:{if(av(e),t===null)throw Error(ne(387));i=e.pendingProps,o=e.memoizedState,r=o.element,D0(t,e),Ul(e,i,null,n);var s=e.memoizedState;if(i=s.element,o.isDehydrated)if(o={element:i,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},e.updateQueue.baseState=o,e.memoizedState=o,e.flags&256){r=Oo(Error(ne(423)),e),e=Yp(t,e,i,n,r);break e}else if(i!==r){r=Oo(Error(ne(424)),e),e=Yp(t,e,i,n,r);break e}else for(gn=Ki(e.stateNode.containerInfo.firstChild),vn=e,mt=!0,zn=null,n=N0(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Do(),i===r){e=Ai(t,e,n);break e}$t(t,e,i,n)}e=e.child}return e;case 5:return U0(e),t===null&&pf(e),i=e.type,r=e.pendingProps,o=t!==null?t.memoizedProps:null,s=r.children,uf(i,r)?s=null:o!==null&&uf(i,o)&&(e.flags|=32),sv(t,e),$t(t,e,s,n),e.child;case 6:return t===null&&pf(e),null;case 13:return lv(t,e,n);case 4:return oh(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Uo(e,null,i,n):$t(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Bn(i,r),Wp(t,e,i,r,n);case 7:return $t(t,e,e.pendingProps,n),e.child;case 8:return $t(t,e,e.pendingProps.children,n),e.child;case 12:return $t(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,o=e.memoizedProps,s=r.value,lt(Il,i._currentValue),i._currentValue=s,o!==null)if($n(o.value,s)){if(o.children===r.children&&!on.current){e=Ai(t,e,n);break e}}else for(o=e.child,o!==null&&(o.return=e);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(o.tag===1){l=Si(-1,n&-n),l.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),mf(o.return,n,e),a.lanes|=n;break}l=l.next}}else if(o.tag===10)s=o.type===e.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(ne(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),mf(s,n,e),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===e){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}$t(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Co(e,n),r=Pn(r),i=i(r),e.flags|=1,$t(t,e,i,n),e.child;case 14:return i=e.type,r=Bn(i,e.pendingProps),r=Bn(i.type,r),jp(t,e,i,r,n);case 15:return rv(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Bn(i,r),ll(t,e),e.tag=1,sn(i)?(t=!0,Pl(e)):t=!1,Co(e,n),tv(e,i,r),vf(e,i,r,n),yf(null,e,i,!0,t,n);case 19:return uv(t,e,n);case 22:return ov(t,e,n)}throw Error(ne(156,e.tag))};function wv(t,e){return Qg(t,e)}function vS(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Cn(t,e,n,i){return new vS(t,e,n,i)}function yh(t){return t=t.prototype,!(!t||!t.isReactComponent)}function _S(t){if(typeof t=="function")return yh(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Bd)return 11;if(t===Hd)return 14}return 2}function er(t,e){var n=t.alternate;return n===null?(n=Cn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function fl(t,e,n,i,r,o){var s=2;if(i=t,typeof t=="function")yh(t)&&(s=1);else if(typeof t=="string")s=5;else e:switch(t){case co:return Ir(n.children,r,o,e);case kd:s=8,r|=8;break;case Hc:return t=Cn(12,n,e,r|2),t.elementType=Hc,t.lanes=o,t;case zc:return t=Cn(13,n,e,r),t.elementType=zc,t.lanes=o,t;case Gc:return t=Cn(19,n,e,r),t.elementType=Gc,t.lanes=o,t;case Ug:return su(n,r,o,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Ig:s=10;break e;case Dg:s=9;break e;case Bd:s=11;break e;case Hd:s=14;break e;case Bi:s=16,i=null;break e}throw Error(ne(130,t==null?t:typeof t,""))}return e=Cn(s,n,e,r),e.elementType=t,e.type=i,e.lanes=o,e}function Ir(t,e,n,i){return t=Cn(7,t,i,e),t.lanes=n,t}function su(t,e,n,i){return t=Cn(22,t,i,e),t.elementType=Ug,t.lanes=n,t.stateNode={isHidden:!1},t}function nc(t,e,n){return t=Cn(6,t,null,e),t.lanes=n,t}function ic(t,e,n){return e=Cn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function xS(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ou(0),this.expirationTimes=Ou(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ou(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Sh(t,e,n,i,r,o,s,a,l){return t=new xS(t,e,n,a,l),e===1?(e=1,o===!0&&(e|=8)):e=0,o=Cn(3,null,null,e),t.current=o,o.stateNode=t,o.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},rh(o),t}function yS(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:uo,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function Av(t){if(!t)return rr;t=t._reactInternals;e:{if(Wr(t)!==t||t.tag!==1)throw Error(ne(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(sn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ne(171))}if(t.tag===1){var n=t.type;if(sn(n))return A0(t,n,e)}return e}function Cv(t,e,n,i,r,o,s,a,l){return t=Sh(n,i,!0,t,r,o,s,a,l),t.context=Av(null),n=t.current,i=qt(),r=Ji(n),o=Si(i,r),o.callback=e??null,Zi(n,o,r),t.current.lanes=r,Xs(t,r,i),an(t,i),t}function au(t,e,n,i){var r=e.current,o=qt(),s=Ji(r);return n=Av(n),e.context===null?e.context=n:e.pendingContext=n,e=Si(o,s),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Zi(r,e,s),t!==null&&(Xn(t,r,s,o),ol(t,r,s)),s}function Vl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function im(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Eh(t,e){im(t,e),(t=t.alternate)&&im(t,e)}function SS(){return null}var bv=typeof reportError=="function"?reportError:function(t){console.error(t)};function Mh(t){this._internalRoot=t}lu.prototype.render=Mh.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ne(409));au(t,e,null,null)};lu.prototype.unmount=Mh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Br(function(){au(null,t,null,null)}),e[Ti]=null}};function lu(t){this._internalRoot=t}lu.prototype.unstable_scheduleHydration=function(t){if(t){var e=o0();t={blockedOn:null,target:t,priority:e};for(var n=0;n<zi.length&&e!==0&&e<zi[n].priority;n++);zi.splice(n,0,t),n===0&&a0(t)}};function Th(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function uu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function rm(){}function ES(t,e,n,i,r){if(r){if(typeof i=="function"){var o=i;i=function(){var u=Vl(s);o.call(u)}}var s=Cv(e,i,t,0,null,!1,!1,"",rm);return t._reactRootContainer=s,t[Ti]=s.current,Ds(t.nodeType===8?t.parentNode:t),Br(),s}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var u=Vl(l);a.call(u)}}var l=Sh(t,0,!1,null,null,!1,!1,"",rm);return t._reactRootContainer=l,t[Ti]=l.current,Ds(t.nodeType===8?t.parentNode:t),Br(function(){au(e,l,n,i)}),l}function cu(t,e,n,i,r){var o=n._reactRootContainer;if(o){var s=o;if(typeof r=="function"){var a=r;r=function(){var l=Vl(s);a.call(l)}}au(e,s,t,r)}else s=ES(n,e,t,r,i);return Vl(s)}i0=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ps(e.pendingLanes);n!==0&&(Vd(e,n|1),an(e,Et()),!(Ke&6)&&(ko=Et()+500,ur()))}break;case 13:Br(function(){var i=wi(t,1);if(i!==null){var r=qt();Xn(i,t,1,r)}}),Eh(t,1)}};Wd=function(t){if(t.tag===13){var e=wi(t,134217728);if(e!==null){var n=qt();Xn(e,t,134217728,n)}Eh(t,134217728)}};r0=function(t){if(t.tag===13){var e=Ji(t),n=wi(t,e);if(n!==null){var i=qt();Xn(n,t,e,i)}Eh(t,e)}};o0=function(){return rt};s0=function(t,e){var n=rt;try{return rt=t,e()}finally{rt=n}};Qc=function(t,e,n){switch(e){case"input":if(jc(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=eu(i);if(!r)throw Error(ne(90));Og(i),jc(i,r)}}}break;case"textarea":Bg(t,n);break;case"select":e=n.value,e!=null&&Mo(t,!!n.multiple,e,!1)}};Xg=vh;Yg=Br;var MS={usingClientEntryPoint:!1,Events:[$s,mo,eu,Wg,jg,vh]},os={findFiberByHostInstance:Cr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},TS={bundleType:os.bundleType,version:os.version,rendererPackageName:os.rendererPackageName,rendererConfig:os.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ri.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Kg(t),t===null?null:t.stateNode},findFiberByHostInstance:os.findFiberByHostInstance||SS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ea=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ea.isDisabled&&Ea.supportsFiber)try{Kl=Ea.inject(TS),ii=Ea}catch{}}xn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=MS;xn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Th(e))throw Error(ne(200));return yS(t,e,null,n)};xn.createRoot=function(t,e){if(!Th(t))throw Error(ne(299));var n=!1,i="",r=bv;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Sh(t,1,!1,null,null,n,!1,i,r),t[Ti]=e.current,Ds(t.nodeType===8?t.parentNode:t),new Mh(e)};xn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ne(188)):(t=Object.keys(t).join(","),Error(ne(268,t)));return t=Kg(e),t=t===null?null:t.stateNode,t};xn.flushSync=function(t){return Br(t)};xn.hydrate=function(t,e,n){if(!uu(e))throw Error(ne(200));return cu(null,t,e,!0,n)};xn.hydrateRoot=function(t,e,n){if(!Th(t))throw Error(ne(405));var i=n!=null&&n.hydratedSources||null,r=!1,o="",s=bv;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),e=Cv(e,null,t,1,n??null,r,!1,o,s),t[Ti]=e.current,Ds(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new lu(e)};xn.render=function(t,e,n){if(!uu(e))throw Error(ne(200));return cu(null,t,e,!1,n)};xn.unmountComponentAtNode=function(t){if(!uu(t))throw Error(ne(40));return t._reactRootContainer?(Br(function(){cu(null,null,t,!1,function(){t._reactRootContainer=null,t[Ti]=null})}),!0):!1};xn.unstable_batchedUpdates=vh;xn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!uu(n))throw Error(ne(200));if(t==null||t._reactInternals===void 0)throw Error(ne(38));return cu(t,e,n,!1,i)};xn.version="18.3.1-next-f1338f8080-20240426";function Rv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Rv)}catch(t){console.error(t)}}Rv(),Rg.exports=xn;var wS=Rg.exports,Pv,om=wS;Pv=om.createRoot,om.hydrateRoot;var Nf=function(t,e){return Nf=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,i){n.__proto__=i}||function(n,i){for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(n[r]=i[r])},Nf(t,e)};function Nn(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");Nf(t,e);function n(){this.constructor=t}t.prototype=e===null?Object.create(e):(n.prototype=e.prototype,new n)}var ye=function(){return ye=Object.assign||function(e){for(var n,i=1,r=arguments.length;i<r;i++){n=arguments[i];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},ye.apply(this,arguments)};function Bo(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,i=Object.getOwnPropertySymbols(t);r<i.length;r++)e.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(t,i[r])&&(n[i[r]]=t[i[r]]);return n}function ei(t,e,n){if(n||arguments.length===2)for(var i=0,r=e.length,o;i<r;i++)(o||!(i in e))&&(o||(o=Array.prototype.slice.call(e,0,i)),o[i]=e[i]);return t.concat(o||Array.prototype.slice.call(e))}function Lv(t,e,n){if(n===void 0&&(n=Error),!t)throw new n(e)}var Xe;(function(t){t[t.EXPECT_ARGUMENT_CLOSING_BRACE=1]="EXPECT_ARGUMENT_CLOSING_BRACE",t[t.EMPTY_ARGUMENT=2]="EMPTY_ARGUMENT",t[t.MALFORMED_ARGUMENT=3]="MALFORMED_ARGUMENT",t[t.EXPECT_ARGUMENT_TYPE=4]="EXPECT_ARGUMENT_TYPE",t[t.INVALID_ARGUMENT_TYPE=5]="INVALID_ARGUMENT_TYPE",t[t.EXPECT_ARGUMENT_STYLE=6]="EXPECT_ARGUMENT_STYLE",t[t.INVALID_NUMBER_SKELETON=7]="INVALID_NUMBER_SKELETON",t[t.INVALID_DATE_TIME_SKELETON=8]="INVALID_DATE_TIME_SKELETON",t[t.EXPECT_NUMBER_SKELETON=9]="EXPECT_NUMBER_SKELETON",t[t.EXPECT_DATE_TIME_SKELETON=10]="EXPECT_DATE_TIME_SKELETON",t[t.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE=11]="UNCLOSED_QUOTE_IN_ARGUMENT_STYLE",t[t.EXPECT_SELECT_ARGUMENT_OPTIONS=12]="EXPECT_SELECT_ARGUMENT_OPTIONS",t[t.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE=13]="EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE",t[t.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE=14]="INVALID_PLURAL_ARGUMENT_OFFSET_VALUE",t[t.EXPECT_SELECT_ARGUMENT_SELECTOR=15]="EXPECT_SELECT_ARGUMENT_SELECTOR",t[t.EXPECT_PLURAL_ARGUMENT_SELECTOR=16]="EXPECT_PLURAL_ARGUMENT_SELECTOR",t[t.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT=17]="EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT",t[t.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT=18]="EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT",t[t.INVALID_PLURAL_ARGUMENT_SELECTOR=19]="INVALID_PLURAL_ARGUMENT_SELECTOR",t[t.DUPLICATE_PLURAL_ARGUMENT_SELECTOR=20]="DUPLICATE_PLURAL_ARGUMENT_SELECTOR",t[t.DUPLICATE_SELECT_ARGUMENT_SELECTOR=21]="DUPLICATE_SELECT_ARGUMENT_SELECTOR",t[t.MISSING_OTHER_CLAUSE=22]="MISSING_OTHER_CLAUSE",t[t.INVALID_TAG=23]="INVALID_TAG",t[t.INVALID_TAG_NAME=25]="INVALID_TAG_NAME",t[t.UNMATCHED_CLOSING_TAG=26]="UNMATCHED_CLOSING_TAG",t[t.UNCLOSED_TAG=27]="UNCLOSED_TAG"})(Xe||(Xe={}));var ht;(function(t){t[t.literal=0]="literal",t[t.argument=1]="argument",t[t.number=2]="number",t[t.date=3]="date",t[t.time=4]="time",t[t.select=5]="select",t[t.plural=6]="plural",t[t.pound=7]="pound",t[t.tag=8]="tag"})(ht||(ht={}));var Ho;(function(t){t[t.number=0]="number",t[t.dateTime=1]="dateTime"})(Ho||(Ho={}));function sm(t){return t.type===ht.literal}function AS(t){return t.type===ht.argument}function Nv(t){return t.type===ht.number}function Iv(t){return t.type===ht.date}function Dv(t){return t.type===ht.time}function Uv(t){return t.type===ht.select}function Fv(t){return t.type===ht.plural}function CS(t){return t.type===ht.pound}function Ov(t){return t.type===ht.tag}function kv(t){return!!(t&&typeof t=="object"&&t.type===Ho.number)}function If(t){return!!(t&&typeof t=="object"&&t.type===Ho.dateTime)}var Bv=/[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/,bS=/(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;function RS(t){var e={};return t.replace(bS,function(n){var i=n.length;switch(n[0]){case"G":e.era=i===4?"long":i===5?"narrow":"short";break;case"y":e.year=i===2?"2-digit":"numeric";break;case"Y":case"u":case"U":case"r":throw new RangeError("`Y/u/U/r` (year) patterns are not supported, use `y` instead");case"q":case"Q":throw new RangeError("`q/Q` (quarter) patterns are not supported");case"M":case"L":e.month=["numeric","2-digit","short","long","narrow"][i-1];break;case"w":case"W":throw new RangeError("`w/W` (week) patterns are not supported");case"d":e.day=["numeric","2-digit"][i-1];break;case"D":case"F":case"g":throw new RangeError("`D/F/g` (day) patterns are not supported, use `d` instead");case"E":e.weekday=i===4?"long":i===5?"narrow":"short";break;case"e":if(i<4)throw new RangeError("`e..eee` (weekday) patterns are not supported");e.weekday=["short","long","narrow","short"][i-4];break;case"c":if(i<4)throw new RangeError("`c..ccc` (weekday) patterns are not supported");e.weekday=["short","long","narrow","short"][i-4];break;case"a":e.hour12=!0;break;case"b":case"B":throw new RangeError("`b/B` (period) patterns are not supported, use `a` instead");case"h":e.hourCycle="h12",e.hour=["numeric","2-digit"][i-1];break;case"H":e.hourCycle="h23",e.hour=["numeric","2-digit"][i-1];break;case"K":e.hourCycle="h11",e.hour=["numeric","2-digit"][i-1];break;case"k":e.hourCycle="h24",e.hour=["numeric","2-digit"][i-1];break;case"j":case"J":case"C":throw new RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead");case"m":e.minute=["numeric","2-digit"][i-1];break;case"s":e.second=["numeric","2-digit"][i-1];break;case"S":case"A":throw new RangeError("`S/A` (second) patterns are not supported, use `s` instead");case"z":e.timeZoneName=i<4?"short":"long";break;case"Z":case"O":case"v":case"V":case"X":case"x":throw new RangeError("`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead")}return""}),e}var PS=/[\t-\r \x85\u200E\u200F\u2028\u2029]/i;function LS(t){if(t.length===0)throw new Error("Number skeleton cannot be empty");for(var e=t.split(PS).filter(function(d){return d.length>0}),n=[],i=0,r=e;i<r.length;i++){var o=r[i],s=o.split("/");if(s.length===0)throw new Error("Invalid number skeleton");for(var a=s[0],l=s.slice(1),u=0,c=l;u<c.length;u++){var h=c[u];if(h.length===0)throw new Error("Invalid number skeleton")}n.push({stem:a,options:l})}return n}function NS(t){return t.replace(/^(.*?)-/,"")}var am=/^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g,Hv=/^(@+)?(\+|#+)?[rs]?$/g,IS=/(\*)(0+)|(#+)(0+)|(0+)/g,zv=/^(0+)$/;function lm(t){var e={};return t[t.length-1]==="r"?e.roundingPriority="morePrecision":t[t.length-1]==="s"&&(e.roundingPriority="lessPrecision"),t.replace(Hv,function(n,i,r){return typeof r!="string"?(e.minimumSignificantDigits=i.length,e.maximumSignificantDigits=i.length):r==="+"?e.minimumSignificantDigits=i.length:i[0]==="#"?e.maximumSignificantDigits=i.length:(e.minimumSignificantDigits=i.length,e.maximumSignificantDigits=i.length+(typeof r=="string"?r.length:0)),""}),e}function Gv(t){switch(t){case"sign-auto":return{signDisplay:"auto"};case"sign-accounting":case"()":return{currencySign:"accounting"};case"sign-always":case"+!":return{signDisplay:"always"};case"sign-accounting-always":case"()!":return{signDisplay:"always",currencySign:"accounting"};case"sign-except-zero":case"+?":return{signDisplay:"exceptZero"};case"sign-accounting-except-zero":case"()?":return{signDisplay:"exceptZero",currencySign:"accounting"};case"sign-never":case"+_":return{signDisplay:"never"}}}function DS(t){var e;if(t[0]==="E"&&t[1]==="E"?(e={notation:"engineering"},t=t.slice(2)):t[0]==="E"&&(e={notation:"scientific"},t=t.slice(1)),e){var n=t.slice(0,2);if(n==="+!"?(e.signDisplay="always",t=t.slice(2)):n==="+?"&&(e.signDisplay="exceptZero",t=t.slice(2)),!zv.test(t))throw new Error("Malformed concise eng/scientific notation");e.minimumIntegerDigits=t.length}return e}function um(t){var e={},n=Gv(t);return n||e}function US(t){for(var e={},n=0,i=t;n<i.length;n++){var r=i[n];switch(r.stem){case"percent":case"%":e.style="percent";continue;case"%x100":e.style="percent",e.scale=100;continue;case"currency":e.style="currency",e.currency=r.options[0];continue;case"group-off":case",_":e.useGrouping=!1;continue;case"precision-integer":case".":e.maximumFractionDigits=0;continue;case"measure-unit":case"unit":e.style="unit",e.unit=NS(r.options[0]);continue;case"compact-short":case"K":e.notation="compact",e.compactDisplay="short";continue;case"compact-long":case"KK":e.notation="compact",e.compactDisplay="long";continue;case"scientific":e=ye(ye(ye({},e),{notation:"scientific"}),r.options.reduce(function(l,u){return ye(ye({},l),um(u))},{}));continue;case"engineering":e=ye(ye(ye({},e),{notation:"engineering"}),r.options.reduce(function(l,u){return ye(ye({},l),um(u))},{}));continue;case"notation-simple":e.notation="standard";continue;case"unit-width-narrow":e.currencyDisplay="narrowSymbol",e.unitDisplay="narrow";continue;case"unit-width-short":e.currencyDisplay="code",e.unitDisplay="short";continue;case"unit-width-full-name":e.currencyDisplay="name",e.unitDisplay="long";continue;case"unit-width-iso-code":e.currencyDisplay="symbol";continue;case"scale":e.scale=parseFloat(r.options[0]);continue;case"rounding-mode-floor":e.roundingMode="floor";continue;case"rounding-mode-ceiling":e.roundingMode="ceil";continue;case"rounding-mode-down":e.roundingMode="trunc";continue;case"rounding-mode-up":e.roundingMode="expand";continue;case"rounding-mode-half-even":e.roundingMode="halfEven";continue;case"rounding-mode-half-down":e.roundingMode="halfTrunc";continue;case"rounding-mode-half-up":e.roundingMode="halfExpand";continue;case"integer-width":if(r.options.length>1)throw new RangeError("integer-width stems only accept a single optional option");r.options[0].replace(IS,function(l,u,c,h,d,m){if(u)e.minimumIntegerDigits=c.length;else{if(h&&d)throw new Error("We currently do not support maximum integer digits");if(m)throw new Error("We currently do not support exact integer digits")}return""});continue}if(zv.test(r.stem)){e.minimumIntegerDigits=r.stem.length;continue}if(am.test(r.stem)){if(r.options.length>1)throw new RangeError("Fraction-precision stems only accept a single optional option");r.stem.replace(am,function(l,u,c,h,d,m){return c==="*"?e.minimumFractionDigits=u.length:h&&h[0]==="#"?e.maximumFractionDigits=h.length:d&&m?(e.minimumFractionDigits=d.length,e.maximumFractionDigits=d.length+m.length):(e.minimumFractionDigits=u.length,e.maximumFractionDigits=u.length),""});var o=r.options[0];o==="w"?e=ye(ye({},e),{trailingZeroDisplay:"stripIfInteger"}):o&&(e=ye(ye({},e),lm(o)));continue}if(Hv.test(r.stem)){e=ye(ye({},e),lm(r.stem));continue}var s=Gv(r.stem);s&&(e=ye(ye({},e),s));var a=DS(r.stem);a&&(e=ye(ye({},e),a))}return e}var Ma={"001":["H","h"],AC:["H","h","hb","hB"],AD:["H","hB"],AE:["h","hB","hb","H"],AF:["H","hb","hB","h"],AG:["h","hb","H","hB"],AI:["H","h","hb","hB"],AL:["h","H","hB"],AM:["H","hB"],AO:["H","hB"],AR:["H","h","hB","hb"],AS:["h","H"],AT:["H","hB"],AU:["h","hb","H","hB"],AW:["H","hB"],AX:["H"],AZ:["H","hB","h"],BA:["H","hB","h"],BB:["h","hb","H","hB"],BD:["h","hB","H"],BE:["H","hB"],BF:["H","hB"],BG:["H","hB","h"],BH:["h","hB","hb","H"],BI:["H","h"],BJ:["H","hB"],BL:["H","hB"],BM:["h","hb","H","hB"],BN:["hb","hB","h","H"],BO:["H","hB","h","hb"],BQ:["H"],BR:["H","hB"],BS:["h","hb","H","hB"],BT:["h","H"],BW:["H","h","hb","hB"],BY:["H","h"],BZ:["H","h","hb","hB"],CA:["h","hb","H","hB"],CC:["H","h","hb","hB"],CD:["hB","H"],CF:["H","h","hB"],CG:["H","hB"],CH:["H","hB","h"],CI:["H","hB"],CK:["H","h","hb","hB"],CL:["H","h","hB","hb"],CM:["H","h","hB"],CN:["H","hB","hb","h"],CO:["h","H","hB","hb"],CP:["H"],CR:["H","h","hB","hb"],CU:["H","h","hB","hb"],CV:["H","hB"],CW:["H","hB"],CX:["H","h","hb","hB"],CY:["h","H","hb","hB"],CZ:["H"],DE:["H","hB"],DG:["H","h","hb","hB"],DJ:["h","H"],DK:["H"],DM:["h","hb","H","hB"],DO:["h","H","hB","hb"],DZ:["h","hB","hb","H"],EA:["H","h","hB","hb"],EC:["H","hB","h","hb"],EE:["H","hB"],EG:["h","hB","hb","H"],EH:["h","hB","hb","H"],ER:["h","H"],ES:["H","hB","h","hb"],ET:["hB","hb","h","H"],FI:["H"],FJ:["h","hb","H","hB"],FK:["H","h","hb","hB"],FM:["h","hb","H","hB"],FO:["H","h"],FR:["H","hB"],GA:["H","hB"],GB:["H","h","hb","hB"],GD:["h","hb","H","hB"],GE:["H","hB","h"],GF:["H","hB"],GG:["H","h","hb","hB"],GH:["h","H"],GI:["H","h","hb","hB"],GL:["H","h"],GM:["h","hb","H","hB"],GN:["H","hB"],GP:["H","hB"],GQ:["H","hB","h","hb"],GR:["h","H","hb","hB"],GT:["H","h","hB","hb"],GU:["h","hb","H","hB"],GW:["H","hB"],GY:["h","hb","H","hB"],HK:["h","hB","hb","H"],HN:["H","h","hB","hb"],HR:["H","hB"],HU:["H","h"],IC:["H","h","hB","hb"],ID:["H"],IE:["H","h","hb","hB"],IL:["H","hB"],IM:["H","h","hb","hB"],IN:["h","H"],IO:["H","h","hb","hB"],IQ:["h","hB","hb","H"],IR:["hB","H"],IS:["H"],IT:["H","hB"],JE:["H","h","hb","hB"],JM:["h","hb","H","hB"],JO:["h","hB","hb","H"],JP:["H","K","h"],KE:["hB","hb","H","h"],KG:["H","h","hB","hb"],KH:["hB","h","H","hb"],KI:["h","hb","H","hB"],KM:["H","h","hB","hb"],KN:["h","hb","H","hB"],KP:["h","H","hB","hb"],KR:["h","H","hB","hb"],KW:["h","hB","hb","H"],KY:["h","hb","H","hB"],KZ:["H","hB"],LA:["H","hb","hB","h"],LB:["h","hB","hb","H"],LC:["h","hb","H","hB"],LI:["H","hB","h"],LK:["H","h","hB","hb"],LR:["h","hb","H","hB"],LS:["h","H"],LT:["H","h","hb","hB"],LU:["H","h","hB"],LV:["H","hB","hb","h"],LY:["h","hB","hb","H"],MA:["H","h","hB","hb"],MC:["H","hB"],MD:["H","hB"],ME:["H","hB","h"],MF:["H","hB"],MG:["H","h"],MH:["h","hb","H","hB"],MK:["H","h","hb","hB"],ML:["H"],MM:["hB","hb","H","h"],MN:["H","h","hb","hB"],MO:["h","hB","hb","H"],MP:["h","hb","H","hB"],MQ:["H","hB"],MR:["h","hB","hb","H"],MS:["H","h","hb","hB"],MT:["H","h"],MU:["H","h"],MV:["H","h"],MW:["h","hb","H","hB"],MX:["H","h","hB","hb"],MY:["hb","hB","h","H"],MZ:["H","hB"],NA:["h","H","hB","hb"],NC:["H","hB"],NE:["H"],NF:["H","h","hb","hB"],NG:["H","h","hb","hB"],NI:["H","h","hB","hb"],NL:["H","hB"],NO:["H","h"],NP:["H","h","hB"],NR:["H","h","hb","hB"],NU:["H","h","hb","hB"],NZ:["h","hb","H","hB"],OM:["h","hB","hb","H"],PA:["h","H","hB","hb"],PE:["H","hB","h","hb"],PF:["H","h","hB"],PG:["h","H"],PH:["h","hB","hb","H"],PK:["h","hB","H"],PL:["H","h"],PM:["H","hB"],PN:["H","h","hb","hB"],PR:["h","H","hB","hb"],PS:["h","hB","hb","H"],PT:["H","hB"],PW:["h","H"],PY:["H","h","hB","hb"],QA:["h","hB","hb","H"],RE:["H","hB"],RO:["H","hB"],RS:["H","hB","h"],RU:["H"],RW:["H","h"],SA:["h","hB","hb","H"],SB:["h","hb","H","hB"],SC:["H","h","hB"],SD:["h","hB","hb","H"],SE:["H"],SG:["h","hb","H","hB"],SH:["H","h","hb","hB"],SI:["H","hB"],SJ:["H"],SK:["H"],SL:["h","hb","H","hB"],SM:["H","h","hB"],SN:["H","h","hB"],SO:["h","H"],SR:["H","hB"],SS:["h","hb","H","hB"],ST:["H","hB"],SV:["H","h","hB","hb"],SX:["H","h","hb","hB"],SY:["h","hB","hb","H"],SZ:["h","hb","H","hB"],TA:["H","h","hb","hB"],TC:["h","hb","H","hB"],TD:["h","H","hB"],TF:["H","h","hB"],TG:["H","hB"],TH:["H","h"],TJ:["H","h"],TL:["H","hB","hb","h"],TM:["H","h"],TN:["h","hB","hb","H"],TO:["h","H"],TR:["H","hB"],TT:["h","hb","H","hB"],TW:["hB","hb","h","H"],TZ:["hB","hb","H","h"],UA:["H","hB","h"],UG:["hB","hb","H","h"],UM:["h","hb","H","hB"],US:["h","hb","H","hB"],UY:["H","h","hB","hb"],UZ:["H","hB","h"],VA:["H","h","hB"],VC:["h","hb","H","hB"],VE:["h","H","hB","hb"],VG:["h","hb","H","hB"],VI:["h","hb","H","hB"],VN:["H","h"],VU:["h","H"],WF:["H","hB"],WS:["h","H"],XK:["H","hB","h"],YE:["h","hB","hb","H"],YT:["H","hB"],ZA:["H","h","hb","hB"],ZM:["h","hb","H","hB"],ZW:["H","h"],"af-ZA":["H","h","hB","hb"],"ar-001":["h","hB","hb","H"],"ca-ES":["H","h","hB"],"en-001":["h","hb","H","hB"],"es-BO":["H","h","hB","hb"],"es-BR":["H","h","hB","hb"],"es-EC":["H","h","hB","hb"],"es-ES":["H","h","hB","hb"],"es-GQ":["H","h","hB","hb"],"es-PE":["H","h","hB","hb"],"fr-CA":["H","h","hB"],"gl-ES":["H","h","hB"],"gu-IN":["hB","hb","h","H"],"hi-IN":["hB","h","H"],"it-CH":["H","h","hB"],"it-IT":["H","h","hB"],"kn-IN":["hB","h","H"],"ml-IN":["hB","h","H"],"mr-IN":["hB","hb","h","H"],"pa-IN":["hB","hb","h","H"],"ta-IN":["hB","h","hb","H"],"te-IN":["hB","h","H"],"zu-ZA":["H","hB","hb","h"]};function FS(t,e){for(var n="",i=0;i<t.length;i++){var r=t.charAt(i);if(r==="j"){for(var o=0;i+1<t.length&&t.charAt(i+1)===r;)o++,i++;var s=1+(o&1),a=o<2?1:3+(o>>1),l="a",u=OS(e);for((u=="H"||u=="k")&&(a=0);a-- >0;)n+=l;for(;s-- >0;)n=u+n}else r==="J"?n+="H":n+=r}return n}function OS(t){var e=t.hourCycle;if(e===void 0&&t.hourCycles&&t.hourCycles.length&&(e=t.hourCycles[0]),e)switch(e){case"h24":return"k";case"h23":return"H";case"h12":return"h";case"h11":return"K";default:throw new Error("Invalid hourCycle")}var n=t.language,i;n!=="root"&&(i=t.maximize().region);var r=Ma[i||""]||Ma[n||""]||Ma["".concat(n,"-001")]||Ma["001"];return r[0]}var rc,kS=new RegExp("^".concat(Bv.source,"*")),BS=new RegExp("".concat(Bv.source,"*$"));function $e(t,e){return{start:t,end:e}}var HS=!!String.prototype.startsWith&&"_a".startsWith("a",1),zS=!!String.fromCodePoint,GS=!!Object.fromEntries,VS=!!String.prototype.codePointAt,WS=!!String.prototype.trimStart,jS=!!String.prototype.trimEnd,XS=!!Number.isSafeInteger,YS=XS?Number.isSafeInteger:function(t){return typeof t=="number"&&isFinite(t)&&Math.floor(t)===t&&Math.abs(t)<=9007199254740991},Df=!0;try{var $S=Wv("([^\\p{White_Space}\\p{Pattern_Syntax}]*)","yu");Df=((rc=$S.exec("a"))===null||rc===void 0?void 0:rc[0])==="a"}catch{Df=!1}var cm=HS?function(e,n,i){return e.startsWith(n,i)}:function(e,n,i){return e.slice(i,i+n.length)===n},Uf=zS?String.fromCodePoint:function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];for(var i="",r=e.length,o=0,s;r>o;){if(s=e[o++],s>1114111)throw RangeError(s+" is not a valid code point");i+=s<65536?String.fromCharCode(s):String.fromCharCode(((s-=65536)>>10)+55296,s%1024+56320)}return i},fm=GS?Object.fromEntries:function(e){for(var n={},i=0,r=e;i<r.length;i++){var o=r[i],s=o[0],a=o[1];n[s]=a}return n},Vv=VS?function(e,n){return e.codePointAt(n)}:function(e,n){var i=e.length;if(!(n<0||n>=i)){var r=e.charCodeAt(n),o;return r<55296||r>56319||n+1===i||(o=e.charCodeAt(n+1))<56320||o>57343?r:(r-55296<<10)+(o-56320)+65536}},qS=WS?function(e){return e.trimStart()}:function(e){return e.replace(kS,"")},KS=jS?function(e){return e.trimEnd()}:function(e){return e.replace(BS,"")};function Wv(t,e){return new RegExp(t,e)}var Ff;if(Df){var dm=Wv("([^\\p{White_Space}\\p{Pattern_Syntax}]*)","yu");Ff=function(e,n){var i;dm.lastIndex=n;var r=dm.exec(e);return(i=r[1])!==null&&i!==void 0?i:""}}else Ff=function(e,n){for(var i=[];;){var r=Vv(e,n);if(r===void 0||jv(r)||eE(r))break;i.push(r),n+=r>=65536?2:1}return Uf.apply(void 0,i)};var ZS=function(){function t(e,n){n===void 0&&(n={}),this.message=e,this.position={offset:0,line:1,column:1},this.ignoreTag=!!n.ignoreTag,this.locale=n.locale,this.requiresOtherClause=!!n.requiresOtherClause,this.shouldParseSkeletons=!!n.shouldParseSkeletons}return t.prototype.parse=function(){if(this.offset()!==0)throw Error("parser can only be used once");return this.parseMessage(0,"",!1)},t.prototype.parseMessage=function(e,n,i){for(var r=[];!this.isEOF();){var o=this.char();if(o===123){var s=this.parseArgument(e,i);if(s.err)return s;r.push(s.val)}else{if(o===125&&e>0)break;if(o===35&&(n==="plural"||n==="selectordinal")){var a=this.clonePosition();this.bump(),r.push({type:ht.pound,location:$e(a,this.clonePosition())})}else if(o===60&&!this.ignoreTag&&this.peek()===47){if(i)break;return this.error(Xe.UNMATCHED_CLOSING_TAG,$e(this.clonePosition(),this.clonePosition()))}else if(o===60&&!this.ignoreTag&&Of(this.peek()||0)){var s=this.parseTag(e,n);if(s.err)return s;r.push(s.val)}else{var s=this.parseLiteral(e,n);if(s.err)return s;r.push(s.val)}}}return{val:r,err:null}},t.prototype.parseTag=function(e,n){var i=this.clonePosition();this.bump();var r=this.parseTagName();if(this.bumpSpace(),this.bumpIf("/>"))return{val:{type:ht.literal,value:"<".concat(r,"/>"),location:$e(i,this.clonePosition())},err:null};if(this.bumpIf(">")){var o=this.parseMessage(e+1,n,!0);if(o.err)return o;var s=o.val,a=this.clonePosition();if(this.bumpIf("</")){if(this.isEOF()||!Of(this.char()))return this.error(Xe.INVALID_TAG,$e(a,this.clonePosition()));var l=this.clonePosition(),u=this.parseTagName();return r!==u?this.error(Xe.UNMATCHED_CLOSING_TAG,$e(l,this.clonePosition())):(this.bumpSpace(),this.bumpIf(">")?{val:{type:ht.tag,value:r,children:s,location:$e(i,this.clonePosition())},err:null}:this.error(Xe.INVALID_TAG,$e(a,this.clonePosition())))}else return this.error(Xe.UNCLOSED_TAG,$e(i,this.clonePosition()))}else return this.error(Xe.INVALID_TAG,$e(i,this.clonePosition()))},t.prototype.parseTagName=function(){var e=this.offset();for(this.bump();!this.isEOF()&&JS(this.char());)this.bump();return this.message.slice(e,this.offset())},t.prototype.parseLiteral=function(e,n){for(var i=this.clonePosition(),r="";;){var o=this.tryParseQuote(n);if(o){r+=o;continue}var s=this.tryParseUnquoted(e,n);if(s){r+=s;continue}var a=this.tryParseLeftAngleBracket();if(a){r+=a;continue}break}var l=$e(i,this.clonePosition());return{val:{type:ht.literal,value:r,location:l},err:null}},t.prototype.tryParseLeftAngleBracket=function(){return!this.isEOF()&&this.char()===60&&(this.ignoreTag||!QS(this.peek()||0))?(this.bump(),"<"):null},t.prototype.tryParseQuote=function(e){if(this.isEOF()||this.char()!==39)return null;switch(this.peek()){case 39:return this.bump(),this.bump(),"'";case 123:case 60:case 62:case 125:break;case 35:if(e==="plural"||e==="selectordinal")break;return null;default:return null}this.bump();var n=[this.char()];for(this.bump();!this.isEOF();){var i=this.char();if(i===39)if(this.peek()===39)n.push(39),this.bump();else{this.bump();break}else n.push(i);this.bump()}return Uf.apply(void 0,n)},t.prototype.tryParseUnquoted=function(e,n){if(this.isEOF())return null;var i=this.char();return i===60||i===123||i===35&&(n==="plural"||n==="selectordinal")||i===125&&e>0?null:(this.bump(),Uf(i))},t.prototype.parseArgument=function(e,n){var i=this.clonePosition();if(this.bump(),this.bumpSpace(),this.isEOF())return this.error(Xe.EXPECT_ARGUMENT_CLOSING_BRACE,$e(i,this.clonePosition()));if(this.char()===125)return this.bump(),this.error(Xe.EMPTY_ARGUMENT,$e(i,this.clonePosition()));var r=this.parseIdentifierIfPossible().value;if(!r)return this.error(Xe.MALFORMED_ARGUMENT,$e(i,this.clonePosition()));if(this.bumpSpace(),this.isEOF())return this.error(Xe.EXPECT_ARGUMENT_CLOSING_BRACE,$e(i,this.clonePosition()));switch(this.char()){case 125:return this.bump(),{val:{type:ht.argument,value:r,location:$e(i,this.clonePosition())},err:null};case 44:return this.bump(),this.bumpSpace(),this.isEOF()?this.error(Xe.EXPECT_ARGUMENT_CLOSING_BRACE,$e(i,this.clonePosition())):this.parseArgumentOptions(e,n,r,i);default:return this.error(Xe.MALFORMED_ARGUMENT,$e(i,this.clonePosition()))}},t.prototype.parseIdentifierIfPossible=function(){var e=this.clonePosition(),n=this.offset(),i=Ff(this.message,n),r=n+i.length;this.bumpTo(r);var o=this.clonePosition(),s=$e(e,o);return{value:i,location:s}},t.prototype.parseArgumentOptions=function(e,n,i,r){var o,s=this.clonePosition(),a=this.parseIdentifierIfPossible().value,l=this.clonePosition();switch(a){case"":return this.error(Xe.EXPECT_ARGUMENT_TYPE,$e(s,l));case"number":case"date":case"time":{this.bumpSpace();var u=null;if(this.bumpIf(",")){this.bumpSpace();var c=this.clonePosition(),h=this.parseSimpleArgStyleIfPossible();if(h.err)return h;var d=KS(h.val);if(d.length===0)return this.error(Xe.EXPECT_ARGUMENT_STYLE,$e(this.clonePosition(),this.clonePosition()));var m=$e(c,this.clonePosition());u={style:d,styleLocation:m}}var v=this.tryParseArgumentClose(r);if(v.err)return v;var y=$e(r,this.clonePosition());if(u&&cm(u==null?void 0:u.style,"::",0)){var p=qS(u.style.slice(2));if(a==="number"){var h=this.parseNumberSkeletonFromString(p,u.styleLocation);return h.err?h:{val:{type:ht.number,value:i,location:y,style:h.val},err:null}}else{if(p.length===0)return this.error(Xe.EXPECT_DATE_TIME_SKELETON,y);var f=p;this.locale&&(f=FS(p,this.locale));var d={type:Ho.dateTime,pattern:f,location:u.styleLocation,parsedOptions:this.shouldParseSkeletons?RS(f):{}},_=a==="date"?ht.date:ht.time;return{val:{type:_,value:i,location:y,style:d},err:null}}}return{val:{type:a==="number"?ht.number:a==="date"?ht.date:ht.time,value:i,location:y,style:(o=u==null?void 0:u.style)!==null&&o!==void 0?o:null},err:null}}case"plural":case"selectordinal":case"select":{var g=this.clonePosition();if(this.bumpSpace(),!this.bumpIf(","))return this.error(Xe.EXPECT_SELECT_ARGUMENT_OPTIONS,$e(g,ye({},g)));this.bumpSpace();var M=this.parseIdentifierIfPossible(),P=0;if(a!=="select"&&M.value==="offset"){if(!this.bumpIf(":"))return this.error(Xe.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,$e(this.clonePosition(),this.clonePosition()));this.bumpSpace();var h=this.tryParseDecimalInteger(Xe.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,Xe.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE);if(h.err)return h;this.bumpSpace(),M=this.parseIdentifierIfPossible(),P=h.val}var A=this.tryParsePluralOrSelectOptions(e,a,n,M);if(A.err)return A;var v=this.tryParseArgumentClose(r);if(v.err)return v;var w=$e(r,this.clonePosition());return a==="select"?{val:{type:ht.select,value:i,options:fm(A.val),location:w},err:null}:{val:{type:ht.plural,value:i,options:fm(A.val),offset:P,pluralType:a==="plural"?"cardinal":"ordinal",location:w},err:null}}default:return this.error(Xe.INVALID_ARGUMENT_TYPE,$e(s,l))}},t.prototype.tryParseArgumentClose=function(e){return this.isEOF()||this.char()!==125?this.error(Xe.EXPECT_ARGUMENT_CLOSING_BRACE,$e(e,this.clonePosition())):(this.bump(),{val:!0,err:null})},t.prototype.parseSimpleArgStyleIfPossible=function(){for(var e=0,n=this.clonePosition();!this.isEOF();){var i=this.char();switch(i){case 39:{this.bump();var r=this.clonePosition();if(!this.bumpUntil("'"))return this.error(Xe.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE,$e(r,this.clonePosition()));this.bump();break}case 123:{e+=1,this.bump();break}case 125:{if(e>0)e-=1;else return{val:this.message.slice(n.offset,this.offset()),err:null};break}default:this.bump();break}}return{val:this.message.slice(n.offset,this.offset()),err:null}},t.prototype.parseNumberSkeletonFromString=function(e,n){var i=[];try{i=LS(e)}catch{return this.error(Xe.INVALID_NUMBER_SKELETON,n)}return{val:{type:Ho.number,tokens:i,location:n,parsedOptions:this.shouldParseSkeletons?US(i):{}},err:null}},t.prototype.tryParsePluralOrSelectOptions=function(e,n,i,r){for(var o,s=!1,a=[],l=new Set,u=r.value,c=r.location;;){if(u.length===0){var h=this.clonePosition();if(n!=="select"&&this.bumpIf("=")){var d=this.tryParseDecimalInteger(Xe.EXPECT_PLURAL_ARGUMENT_SELECTOR,Xe.INVALID_PLURAL_ARGUMENT_SELECTOR);if(d.err)return d;c=$e(h,this.clonePosition()),u=this.message.slice(h.offset,this.offset())}else break}if(l.has(u))return this.error(n==="select"?Xe.DUPLICATE_SELECT_ARGUMENT_SELECTOR:Xe.DUPLICATE_PLURAL_ARGUMENT_SELECTOR,c);u==="other"&&(s=!0),this.bumpSpace();var m=this.clonePosition();if(!this.bumpIf("{"))return this.error(n==="select"?Xe.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT:Xe.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT,$e(this.clonePosition(),this.clonePosition()));var v=this.parseMessage(e+1,n,i);if(v.err)return v;var y=this.tryParseArgumentClose(m);if(y.err)return y;a.push([u,{value:v.val,location:$e(m,this.clonePosition())}]),l.add(u),this.bumpSpace(),o=this.parseIdentifierIfPossible(),u=o.value,c=o.location}return a.length===0?this.error(n==="select"?Xe.EXPECT_SELECT_ARGUMENT_SELECTOR:Xe.EXPECT_PLURAL_ARGUMENT_SELECTOR,$e(this.clonePosition(),this.clonePosition())):this.requiresOtherClause&&!s?this.error(Xe.MISSING_OTHER_CLAUSE,$e(this.clonePosition(),this.clonePosition())):{val:a,err:null}},t.prototype.tryParseDecimalInteger=function(e,n){var i=1,r=this.clonePosition();this.bumpIf("+")||this.bumpIf("-")&&(i=-1);for(var o=!1,s=0;!this.isEOF();){var a=this.char();if(a>=48&&a<=57)o=!0,s=s*10+(a-48),this.bump();else break}var l=$e(r,this.clonePosition());return o?(s*=i,YS(s)?{val:s,err:null}:this.error(n,l)):this.error(e,l)},t.prototype.offset=function(){return this.position.offset},t.prototype.isEOF=function(){return this.offset()===this.message.length},t.prototype.clonePosition=function(){return{offset:this.position.offset,line:this.position.line,column:this.position.column}},t.prototype.char=function(){var e=this.position.offset;if(e>=this.message.length)throw Error("out of bound");var n=Vv(this.message,e);if(n===void 0)throw Error("Offset ".concat(e," is at invalid UTF-16 code unit boundary"));return n},t.prototype.error=function(e,n){return{val:null,err:{kind:e,message:this.message,location:n}}},t.prototype.bump=function(){if(!this.isEOF()){var e=this.char();e===10?(this.position.line+=1,this.position.column=1,this.position.offset+=1):(this.position.column+=1,this.position.offset+=e<65536?1:2)}},t.prototype.bumpIf=function(e){if(cm(this.message,e,this.offset())){for(var n=0;n<e.length;n++)this.bump();return!0}return!1},t.prototype.bumpUntil=function(e){var n=this.offset(),i=this.message.indexOf(e,n);return i>=0?(this.bumpTo(i),!0):(this.bumpTo(this.message.length),!1)},t.prototype.bumpTo=function(e){if(this.offset()>e)throw Error("targetOffset ".concat(e," must be greater than or equal to the current offset ").concat(this.offset()));for(e=Math.min(e,this.message.length);;){var n=this.offset();if(n===e)break;if(n>e)throw Error("targetOffset ".concat(e," is at invalid UTF-16 code unit boundary"));if(this.bump(),this.isEOF())break}},t.prototype.bumpSpace=function(){for(;!this.isEOF()&&jv(this.char());)this.bump()},t.prototype.peek=function(){if(this.isEOF())return null;var e=this.char(),n=this.offset(),i=this.message.charCodeAt(n+(e>=65536?2:1));return i??null},t}();function Of(t){return t>=97&&t<=122||t>=65&&t<=90}function QS(t){return Of(t)||t===47}function JS(t){return t===45||t===46||t>=48&&t<=57||t===95||t>=97&&t<=122||t>=65&&t<=90||t==183||t>=192&&t<=214||t>=216&&t<=246||t>=248&&t<=893||t>=895&&t<=8191||t>=8204&&t<=8205||t>=8255&&t<=8256||t>=8304&&t<=8591||t>=11264&&t<=12271||t>=12289&&t<=55295||t>=63744&&t<=64975||t>=65008&&t<=65533||t>=65536&&t<=983039}function jv(t){return t>=9&&t<=13||t===32||t===133||t>=8206&&t<=8207||t===8232||t===8233}function eE(t){return t>=33&&t<=35||t===36||t>=37&&t<=39||t===40||t===41||t===42||t===43||t===44||t===45||t>=46&&t<=47||t>=58&&t<=59||t>=60&&t<=62||t>=63&&t<=64||t===91||t===92||t===93||t===94||t===96||t===123||t===124||t===125||t===126||t===161||t>=162&&t<=165||t===166||t===167||t===169||t===171||t===172||t===174||t===176||t===177||t===182||t===187||t===191||t===215||t===247||t>=8208&&t<=8213||t>=8214&&t<=8215||t===8216||t===8217||t===8218||t>=8219&&t<=8220||t===8221||t===8222||t===8223||t>=8224&&t<=8231||t>=8240&&t<=8248||t===8249||t===8250||t>=8251&&t<=8254||t>=8257&&t<=8259||t===8260||t===8261||t===8262||t>=8263&&t<=8273||t===8274||t===8275||t>=8277&&t<=8286||t>=8592&&t<=8596||t>=8597&&t<=8601||t>=8602&&t<=8603||t>=8604&&t<=8607||t===8608||t>=8609&&t<=8610||t===8611||t>=8612&&t<=8613||t===8614||t>=8615&&t<=8621||t===8622||t>=8623&&t<=8653||t>=8654&&t<=8655||t>=8656&&t<=8657||t===8658||t===8659||t===8660||t>=8661&&t<=8691||t>=8692&&t<=8959||t>=8960&&t<=8967||t===8968||t===8969||t===8970||t===8971||t>=8972&&t<=8991||t>=8992&&t<=8993||t>=8994&&t<=9e3||t===9001||t===9002||t>=9003&&t<=9083||t===9084||t>=9085&&t<=9114||t>=9115&&t<=9139||t>=9140&&t<=9179||t>=9180&&t<=9185||t>=9186&&t<=9254||t>=9255&&t<=9279||t>=9280&&t<=9290||t>=9291&&t<=9311||t>=9472&&t<=9654||t===9655||t>=9656&&t<=9664||t===9665||t>=9666&&t<=9719||t>=9720&&t<=9727||t>=9728&&t<=9838||t===9839||t>=9840&&t<=10087||t===10088||t===10089||t===10090||t===10091||t===10092||t===10093||t===10094||t===10095||t===10096||t===10097||t===10098||t===10099||t===10100||t===10101||t>=10132&&t<=10175||t>=10176&&t<=10180||t===10181||t===10182||t>=10183&&t<=10213||t===10214||t===10215||t===10216||t===10217||t===10218||t===10219||t===10220||t===10221||t===10222||t===10223||t>=10224&&t<=10239||t>=10240&&t<=10495||t>=10496&&t<=10626||t===10627||t===10628||t===10629||t===10630||t===10631||t===10632||t===10633||t===10634||t===10635||t===10636||t===10637||t===10638||t===10639||t===10640||t===10641||t===10642||t===10643||t===10644||t===10645||t===10646||t===10647||t===10648||t>=10649&&t<=10711||t===10712||t===10713||t===10714||t===10715||t>=10716&&t<=10747||t===10748||t===10749||t>=10750&&t<=11007||t>=11008&&t<=11055||t>=11056&&t<=11076||t>=11077&&t<=11078||t>=11079&&t<=11084||t>=11085&&t<=11123||t>=11124&&t<=11125||t>=11126&&t<=11157||t===11158||t>=11159&&t<=11263||t>=11776&&t<=11777||t===11778||t===11779||t===11780||t===11781||t>=11782&&t<=11784||t===11785||t===11786||t===11787||t===11788||t===11789||t>=11790&&t<=11798||t===11799||t>=11800&&t<=11801||t===11802||t===11803||t===11804||t===11805||t>=11806&&t<=11807||t===11808||t===11809||t===11810||t===11811||t===11812||t===11813||t===11814||t===11815||t===11816||t===11817||t>=11818&&t<=11822||t===11823||t>=11824&&t<=11833||t>=11834&&t<=11835||t>=11836&&t<=11839||t===11840||t===11841||t===11842||t>=11843&&t<=11855||t>=11856&&t<=11857||t===11858||t>=11859&&t<=11903||t>=12289&&t<=12291||t===12296||t===12297||t===12298||t===12299||t===12300||t===12301||t===12302||t===12303||t===12304||t===12305||t>=12306&&t<=12307||t===12308||t===12309||t===12310||t===12311||t===12312||t===12313||t===12314||t===12315||t===12316||t===12317||t>=12318&&t<=12319||t===12320||t===12336||t===64830||t===64831||t>=65093&&t<=65094}function kf(t){t.forEach(function(e){if(delete e.location,Uv(e)||Fv(e))for(var n in e.options)delete e.options[n].location,kf(e.options[n].value);else Nv(e)&&kv(e.style)||(Iv(e)||Dv(e))&&If(e.style)?delete e.style.location:Ov(e)&&kf(e.children)})}function tE(t,e){e===void 0&&(e={}),e=ye({shouldParseSkeletons:!0,requiresOtherClause:!0},e);var n=new ZS(t,e).parse();if(n.err){var i=SyntaxError(Xe[n.err.kind]);throw i.location=n.err.location,i.originalMessage=n.err.message,i}return e!=null&&e.captureLocation||kf(n.val),n.val}function Zn(t,e){var n=e&&e.cache?e.cache:aE,i=e&&e.serializer?e.serializer:sE,r=e&&e.strategy?e.strategy:iE;return r(t,{cache:n,serializer:i})}function nE(t){return t==null||typeof t=="number"||typeof t=="boolean"}function Xv(t,e,n,i){var r=nE(i)?i:n(i),o=e.get(r);return typeof o>"u"&&(o=t.call(this,i),e.set(r,o)),o}function Yv(t,e,n){var i=Array.prototype.slice.call(arguments,3),r=n(i),o=e.get(r);return typeof o>"u"&&(o=t.apply(this,i),e.set(r,o)),o}function wh(t,e,n,i,r){return n.bind(e,t,i,r)}function iE(t,e){var n=t.length===1?Xv:Yv;return wh(t,this,n,e.cache.create(),e.serializer)}function rE(t,e){return wh(t,this,Yv,e.cache.create(),e.serializer)}function oE(t,e){return wh(t,this,Xv,e.cache.create(),e.serializer)}var sE=function(){return JSON.stringify(arguments)};function Ah(){this.cache=Object.create(null)}Ah.prototype.get=function(t){return this.cache[t]};Ah.prototype.set=function(t,e){this.cache[t]=e};var aE={create:function(){return new Ah}},Qn={variadic:rE,monadic:oE},oi;(function(t){t.MISSING_VALUE="MISSING_VALUE",t.INVALID_VALUE="INVALID_VALUE",t.MISSING_INTL_API="MISSING_INTL_API"})(oi||(oi={}));var cr=function(t){Nn(e,t);function e(n,i,r){var o=t.call(this,n)||this;return o.code=i,o.originalMessage=r,o}return e.prototype.toString=function(){return"[formatjs Error: ".concat(this.code,"] ").concat(this.message)},e}(Error),hm=function(t){Nn(e,t);function e(n,i,r,o){return t.call(this,'Invalid values for "'.concat(n,'": "').concat(i,'". Options are "').concat(Object.keys(r).join('", "'),'"'),oi.INVALID_VALUE,o)||this}return e}(cr),lE=function(t){Nn(e,t);function e(n,i,r){return t.call(this,'Value for "'.concat(n,'" must be of type ').concat(i),oi.INVALID_VALUE,r)||this}return e}(cr),uE=function(t){Nn(e,t);function e(n,i){return t.call(this,'The intl string context variable "'.concat(n,'" was not provided to the string "').concat(i,'"'),oi.MISSING_VALUE,i)||this}return e}(cr),Yt;(function(t){t[t.literal=0]="literal",t[t.object=1]="object"})(Yt||(Yt={}));function cE(t){return t.length<2?t:t.reduce(function(e,n){var i=e[e.length-1];return!i||i.type!==Yt.literal||n.type!==Yt.literal?e.push(n):i.value+=n.value,e},[])}function $v(t){return typeof t=="function"}function dl(t,e,n,i,r,o,s){if(t.length===1&&sm(t[0]))return[{type:Yt.literal,value:t[0].value}];for(var a=[],l=0,u=t;l<u.length;l++){var c=u[l];if(sm(c)){a.push({type:Yt.literal,value:c.value});continue}if(CS(c)){typeof o=="number"&&a.push({type:Yt.literal,value:n.getNumberFormat(e).format(o)});continue}var h=c.value;if(!(r&&h in r))throw new uE(h,s);var d=r[h];if(AS(c)){(!d||typeof d=="string"||typeof d=="number")&&(d=typeof d=="string"||typeof d=="number"?String(d):""),a.push({type:typeof d=="string"?Yt.literal:Yt.object,value:d});continue}if(Iv(c)){var m=typeof c.style=="string"?i.date[c.style]:If(c.style)?c.style.parsedOptions:void 0;a.push({type:Yt.literal,value:n.getDateTimeFormat(e,m).format(d)});continue}if(Dv(c)){var m=typeof c.style=="string"?i.time[c.style]:If(c.style)?c.style.parsedOptions:i.time.medium;a.push({type:Yt.literal,value:n.getDateTimeFormat(e,m).format(d)});continue}if(Nv(c)){var m=typeof c.style=="string"?i.number[c.style]:kv(c.style)?c.style.parsedOptions:void 0;m&&m.scale&&(d=d*(m.scale||1)),a.push({type:Yt.literal,value:n.getNumberFormat(e,m).format(d)});continue}if(Ov(c)){var v=c.children,y=c.value,p=r[y];if(!$v(p))throw new lE(y,"function",s);var f=dl(v,e,n,i,r,o),_=p(f.map(function(P){return P.value}));Array.isArray(_)||(_=[_]),a.push.apply(a,_.map(function(P){return{type:typeof P=="string"?Yt.literal:Yt.object,value:P}}))}if(Uv(c)){var g=c.options[d]||c.options.other;if(!g)throw new hm(c.value,d,Object.keys(c.options),s);a.push.apply(a,dl(g.value,e,n,i,r));continue}if(Fv(c)){var g=c.options["=".concat(d)];if(!g){if(!Intl.PluralRules)throw new cr(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`,oi.MISSING_INTL_API,s);var M=n.getPluralRules(e,{type:c.pluralType}).select(d-(c.offset||0));g=c.options[M]||c.options.other}if(!g)throw new hm(c.value,d,Object.keys(c.options),s);a.push.apply(a,dl(g.value,e,n,i,r,d-(c.offset||0)));continue}}return cE(a)}function fE(t,e){return e?ye(ye(ye({},t||{}),e||{}),Object.keys(t).reduce(function(n,i){return n[i]=ye(ye({},t[i]),e[i]||{}),n},{})):t}function dE(t,e){return e?Object.keys(t).reduce(function(n,i){return n[i]=fE(t[i],e[i]),n},ye({},t)):t}function oc(t){return{create:function(){return{get:function(e){return t[e]},set:function(e,n){t[e]=n}}}}}function hE(t){return t===void 0&&(t={number:{},dateTime:{},pluralRules:{}}),{getNumberFormat:Zn(function(){for(var e,n=[],i=0;i<arguments.length;i++)n[i]=arguments[i];return new((e=Intl.NumberFormat).bind.apply(e,ei([void 0],n,!1)))},{cache:oc(t.number),strategy:Qn.variadic}),getDateTimeFormat:Zn(function(){for(var e,n=[],i=0;i<arguments.length;i++)n[i]=arguments[i];return new((e=Intl.DateTimeFormat).bind.apply(e,ei([void 0],n,!1)))},{cache:oc(t.dateTime),strategy:Qn.variadic}),getPluralRules:Zn(function(){for(var e,n=[],i=0;i<arguments.length;i++)n[i]=arguments[i];return new((e=Intl.PluralRules).bind.apply(e,ei([void 0],n,!1)))},{cache:oc(t.pluralRules),strategy:Qn.variadic})}}var qv=function(){function t(e,n,i,r){var o=this;if(n===void 0&&(n=t.defaultLocale),this.formatterCache={number:{},dateTime:{},pluralRules:{}},this.format=function(l){var u=o.formatToParts(l);if(u.length===1)return u[0].value;var c=u.reduce(function(h,d){return!h.length||d.type!==Yt.literal||typeof h[h.length-1]!="string"?h.push(d.value):h[h.length-1]+=d.value,h},[]);return c.length<=1?c[0]||"":c},this.formatToParts=function(l){return dl(o.ast,o.locales,o.formatters,o.formats,l,void 0,o.message)},this.resolvedOptions=function(){var l;return{locale:((l=o.resolvedLocale)===null||l===void 0?void 0:l.toString())||Intl.NumberFormat.supportedLocalesOf(o.locales)[0]}},this.getAst=function(){return o.ast},this.locales=n,this.resolvedLocale=t.resolveLocale(n),typeof e=="string"){if(this.message=e,!t.__parse)throw new TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`");var s=r||{};s.formatters;var a=Bo(s,["formatters"]);this.ast=t.__parse(e,ye(ye({},a),{locale:this.resolvedLocale}))}else this.ast=e;if(!Array.isArray(this.ast))throw new TypeError("A message must be provided as a String or AST.");this.formats=dE(t.formats,i),this.formatters=r&&r.formatters||hE(this.formatterCache)}return Object.defineProperty(t,"defaultLocale",{get:function(){return t.memoizedDefaultLocale||(t.memoizedDefaultLocale=new Intl.NumberFormat().resolvedOptions().locale),t.memoizedDefaultLocale},enumerable:!1,configurable:!0}),t.memoizedDefaultLocale=null,t.resolveLocale=function(e){if(!(typeof Intl.Locale>"u")){var n=Intl.NumberFormat.supportedLocalesOf(e);return n.length>0?new Intl.Locale(n[0]):new Intl.Locale(typeof e=="string"?e:e[0])}},t.__parse=tE,t.formats={number:{integer:{maximumFractionDigits:0},currency:{style:"currency"},percent:{style:"percent"}},date:{short:{month:"numeric",day:"numeric",year:"2-digit"},medium:{month:"short",day:"numeric",year:"numeric"},long:{month:"long",day:"numeric",year:"numeric"},full:{weekday:"long",month:"long",day:"numeric",year:"numeric"}},time:{short:{hour:"numeric",minute:"numeric"},medium:{hour:"numeric",minute:"numeric",second:"numeric"},long:{hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"},full:{hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"}}},t}(),Hr;(function(t){t.FORMAT_ERROR="FORMAT_ERROR",t.UNSUPPORTED_FORMATTER="UNSUPPORTED_FORMATTER",t.INVALID_CONFIG="INVALID_CONFIG",t.MISSING_DATA="MISSING_DATA",t.MISSING_TRANSLATION="MISSING_TRANSLATION"})(Hr||(Hr={}));var Ks=function(t){Nn(e,t);function e(n,i,r){var o=this,s=r?r instanceof Error?r:new Error(String(r)):void 0;return o=t.call(this,"[@formatjs/intl Error ".concat(n,"] ").concat(i,`
`).concat(s?`
`.concat(s.message,`
`).concat(s.stack):""))||this,o.code=n,typeof Error.captureStackTrace=="function"&&Error.captureStackTrace(o,e),o}return e}(Error),pE=function(t){Nn(e,t);function e(n,i){return t.call(this,Hr.UNSUPPORTED_FORMATTER,n,i)||this}return e}(Ks),mE=function(t){Nn(e,t);function e(n,i){return t.call(this,Hr.INVALID_CONFIG,n,i)||this}return e}(Ks),pm=function(t){Nn(e,t);function e(n,i){return t.call(this,Hr.MISSING_DATA,n,i)||this}return e}(Ks),In=function(t){Nn(e,t);function e(n,i,r){var o=t.call(this,Hr.FORMAT_ERROR,"".concat(n,`
Locale: `).concat(i,`
`),r)||this;return o.locale=i,o}return e}(Ks),sc=function(t){Nn(e,t);function e(n,i,r,o){var s=t.call(this,"".concat(n,`
MessageID: `).concat(r==null?void 0:r.id,`
Default Message: `).concat(r==null?void 0:r.defaultMessage,`
Description: `).concat(r==null?void 0:r.description,`
`),i,o)||this;return s.descriptor=r,s.locale=i,s}return e}(In),gE=function(t){Nn(e,t);function e(n,i){var r=t.call(this,Hr.MISSING_TRANSLATION,'Missing message: "'.concat(n.id,'" for locale "').concat(i,'", using ').concat(n.defaultMessage?"default message (".concat(typeof n.defaultMessage=="string"?n.defaultMessage:n.defaultMessage.map(function(o){var s;return(s=o.value)!==null&&s!==void 0?s:JSON.stringify(o)}).join(),")"):"id"," as fallback."))||this;return r.descriptor=n,r}return e}(Ks);function jr(t,e,n){return n===void 0&&(n={}),e.reduce(function(i,r){return r in t?i[r]=t[r]:r in n&&(i[r]=n[r]),i},{})}var vE=function(t){},_E=function(t){},Kv={formats:{},messages:{},timeZone:void 0,defaultLocale:"en",defaultFormats:{},fallbackOnEmptyString:!0,onError:vE,onWarn:_E};function Zv(){return{dateTime:{},number:{},message:{},relativeTime:{},pluralRules:{},list:{},displayNames:{}}}function hr(t){return{create:function(){return{get:function(e){return t[e]},set:function(e,n){t[e]=n}}}}}function xE(t){t===void 0&&(t=Zv());var e=Intl.RelativeTimeFormat,n=Intl.ListFormat,i=Intl.DisplayNames,r=Zn(function(){for(var a,l=[],u=0;u<arguments.length;u++)l[u]=arguments[u];return new((a=Intl.DateTimeFormat).bind.apply(a,ei([void 0],l,!1)))},{cache:hr(t.dateTime),strategy:Qn.variadic}),o=Zn(function(){for(var a,l=[],u=0;u<arguments.length;u++)l[u]=arguments[u];return new((a=Intl.NumberFormat).bind.apply(a,ei([void 0],l,!1)))},{cache:hr(t.number),strategy:Qn.variadic}),s=Zn(function(){for(var a,l=[],u=0;u<arguments.length;u++)l[u]=arguments[u];return new((a=Intl.PluralRules).bind.apply(a,ei([void 0],l,!1)))},{cache:hr(t.pluralRules),strategy:Qn.variadic});return{getDateTimeFormat:r,getNumberFormat:o,getMessageFormat:Zn(function(a,l,u,c){return new qv(a,l,u,ye({formatters:{getNumberFormat:o,getDateTimeFormat:r,getPluralRules:s}},c||{}))},{cache:hr(t.message),strategy:Qn.variadic}),getRelativeTimeFormat:Zn(function(){for(var a=[],l=0;l<arguments.length;l++)a[l]=arguments[l];return new(e.bind.apply(e,ei([void 0],a,!1)))},{cache:hr(t.relativeTime),strategy:Qn.variadic}),getPluralRules:s,getListFormat:Zn(function(){for(var a=[],l=0;l<arguments.length;l++)a[l]=arguments[l];return new(n.bind.apply(n,ei([void 0],a,!1)))},{cache:hr(t.list),strategy:Qn.variadic}),getDisplayNames:Zn(function(){for(var a=[],l=0;l<arguments.length;l++)a[l]=arguments[l];return new(i.bind.apply(i,ei([void 0],a,!1)))},{cache:hr(t.displayNames),strategy:Qn.variadic})}}function Ch(t,e,n,i){var r=t&&t[e],o;if(r&&(o=r[n]),o)return o;i(new pE("No ".concat(e," format named: ").concat(n)))}function Ta(t,e){return Object.keys(t).reduce(function(n,i){return n[i]=ye({timeZone:e},t[i]),n},{})}function mm(t,e){var n=Object.keys(ye(ye({},t),e));return n.reduce(function(i,r){return i[r]=ye(ye({},t[r]||{}),e[r]||{}),i},{})}function gm(t,e){if(!e)return t;var n=qv.formats;return ye(ye(ye({},n),t),{date:mm(Ta(n.date,e),Ta(t.date||{},e)),time:mm(Ta(n.time,e),Ta(t.time||{},e))})}var Bf=function(t,e,n,i,r){var o=t.locale,s=t.formats,a=t.messages,l=t.defaultLocale,u=t.defaultFormats,c=t.fallbackOnEmptyString,h=t.onError,d=t.timeZone,m=t.defaultRichTextElements;n===void 0&&(n={id:""});var v=n.id,y=n.defaultMessage;Lv(!!v,"[@formatjs/intl] An `id` must be provided to format a message. You can either:\n1. Configure your build toolchain with [babel-plugin-formatjs](https://formatjs.io/docs/tooling/babel-plugin)\nor [@formatjs/ts-transformer](https://formatjs.io/docs/tooling/ts-transformer) OR\n2. Configure your `eslint` config to include [eslint-plugin-formatjs](https://formatjs.io/docs/tooling/linter#enforce-id)\nto autofix this issue");var p=String(v),f=a&&Object.prototype.hasOwnProperty.call(a,p)&&a[p];if(Array.isArray(f)&&f.length===1&&f[0].type===ht.literal)return f[0].value;if(!i&&f&&typeof f=="string"&&!m)return f.replace(/'\{(.*?)\}'/gi,"{$1}");if(i=ye(ye({},m),i||{}),s=gm(s,d),u=gm(u,d),!f){if(c===!1&&f==="")return f;if((!y||o&&o.toLowerCase()!==l.toLowerCase())&&h(new gE(n,o)),y)try{var _=e.getMessageFormat(y,l,u,r);return _.format(i)}catch(g){return h(new sc('Error formatting default message for: "'.concat(p,'", rendering default message verbatim'),o,n,g)),typeof y=="string"?y:p}return p}try{var _=e.getMessageFormat(f,o,s,ye({formatters:e},r||{}));return _.format(i)}catch(g){h(new sc('Error formatting message: "'.concat(p,'", using ').concat(y?"default message":"id"," as fallback."),o,n,g))}if(y)try{var _=e.getMessageFormat(y,l,u,r);return _.format(i)}catch(g){h(new sc('Error formatting the default message for: "'.concat(p,'", rendering message verbatim'),o,n,g))}return typeof f=="string"?f:typeof y=="string"?y:p},Qv=["formatMatcher","timeZone","hour12","weekday","era","year","month","day","hour","minute","second","timeZoneName","hourCycle","dateStyle","timeStyle","calendar","numberingSystem","fractionalSecondDigits"];function fu(t,e,n,i){var r=t.locale,o=t.formats,s=t.onError,a=t.timeZone;i===void 0&&(i={});var l=i.format,u=ye(ye({},a&&{timeZone:a}),l&&Ch(o,e,l,s)),c=jr(i,Qv,u);return e==="time"&&!c.hour&&!c.minute&&!c.second&&!c.timeStyle&&!c.dateStyle&&(c=ye(ye({},c),{hour:"numeric",minute:"numeric"})),n(r,c)}function yE(t,e){for(var n=[],i=2;i<arguments.length;i++)n[i-2]=arguments[i];var r=n[0],o=n[1],s=o===void 0?{}:o,a=typeof r=="string"?new Date(r||0):r;try{return fu(t,"date",e,s).format(a)}catch(l){t.onError(new In("Error formatting date.",t.locale,l))}return String(a)}function SE(t,e){for(var n=[],i=2;i<arguments.length;i++)n[i-2]=arguments[i];var r=n[0],o=n[1],s=o===void 0?{}:o,a=typeof r=="string"?new Date(r||0):r;try{return fu(t,"time",e,s).format(a)}catch(l){t.onError(new In("Error formatting time.",t.locale,l))}return String(a)}function EE(t,e){for(var n=[],i=2;i<arguments.length;i++)n[i-2]=arguments[i];var r=n[0],o=n[1],s=n[2],a=s===void 0?{}:s,l=t.timeZone,u=t.locale,c=t.onError,h=jr(a,Qv,l?{timeZone:l}:{});try{return e(u,h).formatRange(r,o)}catch(d){c(new In("Error formatting date time range.",t.locale,d))}return String(r)}function ME(t,e){for(var n=[],i=2;i<arguments.length;i++)n[i-2]=arguments[i];var r=n[0],o=n[1],s=o===void 0?{}:o,a=typeof r=="string"?new Date(r||0):r;try{return fu(t,"date",e,s).formatToParts(a)}catch(l){t.onError(new In("Error formatting date.",t.locale,l))}return[]}function TE(t,e){for(var n=[],i=2;i<arguments.length;i++)n[i-2]=arguments[i];var r=n[0],o=n[1],s=o===void 0?{}:o,a=typeof r=="string"?new Date(r||0):r;try{return fu(t,"time",e,s).formatToParts(a)}catch(l){t.onError(new In("Error formatting time.",t.locale,l))}return[]}var wE=["style","type","fallback","languageDisplay"];function AE(t,e,n,i){var r=t.locale,o=t.onError,s=Intl.DisplayNames;s||o(new cr(`Intl.DisplayNames is not available in this environment.
Try polyfilling it using "@formatjs/intl-displaynames"
`,oi.MISSING_INTL_API));var a=jr(i,wE);try{return e(r,a).of(n)}catch(l){o(new In("Error formatting display name.",r,l))}}var CE=["type","style"],vm=Date.now();function bE(t){return"".concat(vm,"_").concat(t,"_").concat(vm)}function RE(t,e,n,i){i===void 0&&(i={});var r=Jv(t,e,n,i).reduce(function(o,s){var a=s.value;return typeof a!="string"?o.push(a):typeof o[o.length-1]=="string"?o[o.length-1]+=a:o.push(a),o},[]);return r.length===1?r[0]:r.length===0?"":r}function Jv(t,e,n,i){var r=t.locale,o=t.onError;i===void 0&&(i={});var s=Intl.ListFormat;s||o(new cr(`Intl.ListFormat is not available in this environment.
Try polyfilling it using "@formatjs/intl-listformat"
`,oi.MISSING_INTL_API));var a=jr(i,CE);try{var l={},u=n.map(function(c,h){if(typeof c=="object"){var d=bE(h);return l[d]=c,d}return String(c)});return e(r,a).formatToParts(u).map(function(c){return c.type==="literal"?c:ye(ye({},c),{value:l[c.value]||c.value})})}catch(c){o(new In("Error formatting list.",r,c))}return n}var PE=["type"];function LE(t,e,n,i){var r=t.locale,o=t.onError;i===void 0&&(i={}),Intl.PluralRules||o(new cr(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`,oi.MISSING_INTL_API));var s=jr(i,PE);try{return e(r,s).select(n)}catch(a){o(new In("Error formatting plural.",r,a))}return"other"}var NE=["numeric","style"];function IE(t,e,n){var i=t.locale,r=t.formats,o=t.onError;n===void 0&&(n={});var s=n.format,a=!!s&&Ch(r,"relative",s,o)||{},l=jr(n,NE,a);return e(i,l)}function DE(t,e,n,i,r){r===void 0&&(r={}),i||(i="second");var o=Intl.RelativeTimeFormat;o||t.onError(new cr(`Intl.RelativeTimeFormat is not available in this environment.
Try polyfilling it using "@formatjs/intl-relativetimeformat"
`,oi.MISSING_INTL_API));try{return IE(t,e,r).format(n,i)}catch(s){t.onError(new In("Error formatting relative time.",t.locale,s))}return String(n)}var UE=["style","currency","unit","unitDisplay","useGrouping","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits","compactDisplay","currencyDisplay","currencySign","notation","signDisplay","unit","unitDisplay","numberingSystem","trailingZeroDisplay","roundingPriority","roundingIncrement","roundingMode"];function e_(t,e,n){var i=t.locale,r=t.formats,o=t.onError;n===void 0&&(n={});var s=n.format,a=s&&Ch(r,"number",s,o)||{},l=jr(n,UE,a);return e(i,l)}function FE(t,e,n,i){i===void 0&&(i={});try{return e_(t,e,i).format(n)}catch(r){t.onError(new In("Error formatting number.",t.locale,r))}return String(n)}function OE(t,e,n,i){i===void 0&&(i={});try{return e_(t,e,i).formatToParts(n)}catch(r){t.onError(new In("Error formatting number.",t.locale,r))}return[]}function kE(t){var e=t?t[Object.keys(t)[0]]:void 0;return typeof e=="string"}function BE(t){t.onWarn&&t.defaultRichTextElements&&kE(t.messages||{})&&t.onWarn(`[@formatjs/intl] "defaultRichTextElements" was specified but "message" was not pre-compiled. 
Please consider using "@formatjs/cli" to pre-compile your messages for performance.
For more details see https://formatjs.io/docs/getting-started/message-distribution`)}function HE(t,e){var n=xE(e),i=ye(ye({},Kv),t),r=i.locale,o=i.defaultLocale,s=i.onError;return r?!Intl.NumberFormat.supportedLocalesOf(r).length&&s?s(new pm('Missing locale data for locale: "'.concat(r,'" in Intl.NumberFormat. Using default locale: "').concat(o,'" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details'))):!Intl.DateTimeFormat.supportedLocalesOf(r).length&&s&&s(new pm('Missing locale data for locale: "'.concat(r,'" in Intl.DateTimeFormat. Using default locale: "').concat(o,'" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details'))):(s&&s(new mE('"locale" was not configured, using "'.concat(o,'" as fallback. See https://formatjs.io/docs/react-intl/api#intlshape for more details'))),i.locale=i.defaultLocale||"en"),BE(i),ye(ye({},i),{formatters:n,formatNumber:FE.bind(null,i,n.getNumberFormat),formatNumberToParts:OE.bind(null,i,n.getNumberFormat),formatRelativeTime:DE.bind(null,i,n.getRelativeTimeFormat),formatDate:yE.bind(null,i,n.getDateTimeFormat),formatDateToParts:ME.bind(null,i,n.getDateTimeFormat),formatTime:SE.bind(null,i,n.getDateTimeFormat),formatDateTimeRange:EE.bind(null,i,n.getDateTimeFormat),formatTimeToParts:TE.bind(null,i,n.getDateTimeFormat),formatPlural:LE.bind(null,i,n.getPluralRules),formatMessage:Bf.bind(null,i,n),$t:Bf.bind(null,i,n),formatList:RE.bind(null,i,n.getListFormat),formatListToParts:Jv.bind(null,i,n.getListFormat),formatDisplayName:AE.bind(null,i,n.getDisplayNames)})}function t_(t){Lv(t,"[React Intl] Could not find required `intl` object. <IntlProvider> needs to exist in the component ancestry.")}var n_=ye(ye({},Kv),{textComponent:Ue.Fragment});function zE(t){return function(e){return t(Ue.Children.toArray(e))}}function Hf(t,e){if(t===e)return!0;if(!t||!e)return!1;var n=Object.keys(t),i=Object.keys(e),r=n.length;if(i.length!==r)return!1;for(var o=0;o<r;o++){var s=n[o];if(t[s]!==e[s]||!Object.prototype.hasOwnProperty.call(e,s))return!1}return!0}var i_={exports:{}},ot={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ut=typeof Symbol=="function"&&Symbol.for,bh=Ut?Symbol.for("react.element"):60103,Rh=Ut?Symbol.for("react.portal"):60106,du=Ut?Symbol.for("react.fragment"):60107,hu=Ut?Symbol.for("react.strict_mode"):60108,pu=Ut?Symbol.for("react.profiler"):60114,mu=Ut?Symbol.for("react.provider"):60109,gu=Ut?Symbol.for("react.context"):60110,Ph=Ut?Symbol.for("react.async_mode"):60111,vu=Ut?Symbol.for("react.concurrent_mode"):60111,_u=Ut?Symbol.for("react.forward_ref"):60112,xu=Ut?Symbol.for("react.suspense"):60113,GE=Ut?Symbol.for("react.suspense_list"):60120,yu=Ut?Symbol.for("react.memo"):60115,Su=Ut?Symbol.for("react.lazy"):60116,VE=Ut?Symbol.for("react.block"):60121,WE=Ut?Symbol.for("react.fundamental"):60117,jE=Ut?Symbol.for("react.responder"):60118,XE=Ut?Symbol.for("react.scope"):60119;function Sn(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case bh:switch(t=t.type,t){case Ph:case vu:case du:case pu:case hu:case xu:return t;default:switch(t=t&&t.$$typeof,t){case gu:case _u:case Su:case yu:case mu:return t;default:return e}}case Rh:return e}}}function r_(t){return Sn(t)===vu}ot.AsyncMode=Ph;ot.ConcurrentMode=vu;ot.ContextConsumer=gu;ot.ContextProvider=mu;ot.Element=bh;ot.ForwardRef=_u;ot.Fragment=du;ot.Lazy=Su;ot.Memo=yu;ot.Portal=Rh;ot.Profiler=pu;ot.StrictMode=hu;ot.Suspense=xu;ot.isAsyncMode=function(t){return r_(t)||Sn(t)===Ph};ot.isConcurrentMode=r_;ot.isContextConsumer=function(t){return Sn(t)===gu};ot.isContextProvider=function(t){return Sn(t)===mu};ot.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===bh};ot.isForwardRef=function(t){return Sn(t)===_u};ot.isFragment=function(t){return Sn(t)===du};ot.isLazy=function(t){return Sn(t)===Su};ot.isMemo=function(t){return Sn(t)===yu};ot.isPortal=function(t){return Sn(t)===Rh};ot.isProfiler=function(t){return Sn(t)===pu};ot.isStrictMode=function(t){return Sn(t)===hu};ot.isSuspense=function(t){return Sn(t)===xu};ot.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===du||t===vu||t===pu||t===hu||t===xu||t===GE||typeof t=="object"&&t!==null&&(t.$$typeof===Su||t.$$typeof===yu||t.$$typeof===mu||t.$$typeof===gu||t.$$typeof===_u||t.$$typeof===WE||t.$$typeof===jE||t.$$typeof===XE||t.$$typeof===VE)};ot.typeOf=Sn;i_.exports=ot;var YE=i_.exports,o_=YE,$E={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},qE={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},s_={};s_[o_.ForwardRef]=$E;s_[o_.Memo]=qE;var Lh=typeof window<"u"&&!window.__REACT_INTL_BYPASS_GLOBAL_CONTEXT__?window.__REACT_INTL_CONTEXT__||(window.__REACT_INTL_CONTEXT__=Ue.createContext(null)):Ue.createContext(null);Lh.Consumer;var KE=Lh.Provider,ZE=KE,QE=Lh;function Xi(){var t=Ue.useContext(QE);return t_(t),t}var zf;(function(t){t.formatDate="FormattedDate",t.formatTime="FormattedTime",t.formatNumber="FormattedNumber",t.formatList="FormattedList",t.formatDisplayName="FormattedDisplayName"})(zf||(zf={}));var Gf;(function(t){t.formatDate="FormattedDateParts",t.formatTime="FormattedTimeParts",t.formatNumber="FormattedNumberParts",t.formatList="FormattedListParts"})(Gf||(Gf={}));function a_(t){var e=function(n){var i=Xi(),r=n.value,o=n.children,s=Bo(n,["value","children"]),a=typeof r=="string"?new Date(r||0):r,l=t==="formatDate"?i.formatDateToParts(a,s):i.formatTimeToParts(a,s);return o(l)};return e.displayName=Gf[t],e}function Zs(t){var e=function(n){var i=Xi(),r=n.value,o=n.children,s=Bo(n,["value","children"]),a=i[t](r,s);if(typeof o=="function")return o(a);var l=i.textComponent||Ue.Fragment;return Ue.createElement(l,null,a)};return e.displayName=zf[t],e}function l_(t){return t&&Object.keys(t).reduce(function(e,n){var i=t[n];return e[n]=$v(i)?zE(i):i,e},{})}var _m=function(t,e,n,i){for(var r=[],o=4;o<arguments.length;o++)r[o-4]=arguments[o];var s=l_(i),a=Bf.apply(void 0,ei([t,e,n,s],r,!1));return Array.isArray(a)?Ue.Children.toArray(a):a},xm=function(t,e){var n=t.defaultRichTextElements,i=Bo(t,["defaultRichTextElements"]),r=l_(n),o=HE(ye(ye(ye({},n_),i),{defaultRichTextElements:r}),e),s={locale:o.locale,timeZone:o.timeZone,fallbackOnEmptyString:o.fallbackOnEmptyString,formats:o.formats,defaultLocale:o.defaultLocale,defaultFormats:o.defaultFormats,messages:o.messages,onError:o.onError,defaultRichTextElements:r};return ye(ye({},o),{formatMessage:_m.bind(null,s,o.formatters),$t:_m.bind(null,s,o.formatters)})};function ac(t){return{locale:t.locale,timeZone:t.timeZone,fallbackOnEmptyString:t.fallbackOnEmptyString,formats:t.formats,textComponent:t.textComponent,messages:t.messages,defaultLocale:t.defaultLocale,defaultFormats:t.defaultFormats,onError:t.onError,onWarn:t.onWarn,wrapRichTextChunksInFragment:t.wrapRichTextChunksInFragment,defaultRichTextElements:t.defaultRichTextElements}}var JE=function(t){Nn(e,t);function e(){var n=t!==null&&t.apply(this,arguments)||this;return n.cache=Zv(),n.state={cache:n.cache,intl:xm(ac(n.props),n.cache),prevConfig:ac(n.props)},n}return e.getDerivedStateFromProps=function(n,i){var r=i.prevConfig,o=i.cache,s=ac(n);return Hf(r,s)?null:{intl:xm(s,o),prevConfig:s}},e.prototype.render=function(){return t_(this.state.intl),Ue.createElement(ZE,{value:this.state.intl},this.props.children)},e.displayName="IntlProvider",e.defaultProps=n_,e}(Ue.PureComponent);function eM(t,e){var n=t.values,i=Bo(t,["values"]),r=e.values,o=Bo(e,["values"]);return Hf(r,n)&&Hf(i,o)}function u_(t){var e=Xi(),n=e.formatMessage,i=e.textComponent,r=i===void 0?Ue.Fragment:i,o=t.id,s=t.description,a=t.defaultMessage,l=t.values,u=t.children,c=t.tagName,h=c===void 0?r:c,d=t.ignoreTag,m={id:o,description:s,defaultMessage:a},v=n(m,l,{ignoreTag:d});return typeof u=="function"?u(Array.isArray(v)?v:[v]):h?Ue.createElement(h,null,Ue.Children.toArray(v)):Ue.createElement(Ue.Fragment,null,v)}u_.displayName="FormattedMessage";var je=Ue.memo(u_,eM);je.displayName="MemoizedFormattedMessage";Zs("formatDate");Zs("formatTime");Zs("formatNumber");Zs("formatList");Zs("formatDisplayName");a_("formatDate");a_("formatTime");function tM({contactRef:t,changeLanguage:e}){const[n,i]=Ue.useState(!1),[r,o]=Ue.useState(!1),[s,a]=Ue.useState("en"),l=()=>{i(!n),u()},u=()=>{o(!r)},c=()=>{t.current&&t.current.scrollIntoView({behavior:"smooth"})},h=d=>{a(d),e(d),i(!1)};return N.jsxs("div",{className:"navbar",children:[N.jsx("div",{className:"navbar-left",children:N.jsx("h2",{className:"larges-heading font-default-black",children:N.jsx(je,{id:"navbar.portfolio",defaultMessage:"Portfolio"})})}),N.jsxs("div",{className:"navbar-right",children:[N.jsx("a",{className:"btn-default",onClick:c,children:N.jsx(je,{id:"navbar.contact",defaultMessage:"Contact"})}),N.jsx("div",{className:"navDivider"}),N.jsxs("div",{className:"dropPostion",children:[N.jsxs("a",{onClick:l,className:"btn-offwhite",children:[s==="en"?"EN":"中文",N.jsx("span",{className:`font-default-black bold ${r?"spin":""}`,children:"+"})]}),n&&N.jsxs("div",{className:"dropdown-menu",children:[N.jsx("a",{className:"dropdown-item font-default-black running-text",onClick:()=>h("en"),children:N.jsx(je,{id:"navbar.language.en",defaultMessage:"EN"})}),N.jsx("a",{className:"dropdown-item font-default-black running-text",onClick:()=>h("zh"),children:N.jsx(je,{id:"navbar.language.zh",defaultMessage:"中文"})})]})]})]})]})}var c_={},Nh={},Ih={};Object.defineProperty(Ih,"__esModule",{value:!0});var nM=function(){function t(){this.dummyQueue=[],this.eventQueue=[]}return t.prototype.restartTypeWriter=function(){return this.memoWord=this.nextWord,this.eventQueue=this.nextWord?this.nextWord.split(""):[],this.erasing=!1,""},t.prototype.typing=function(){if(this.erasing&&!this.word)return this.restartTypeWriter();if(this.erasing&&this.word)return this.erase();if(this.word===this.memoWord)return this.word;var e=this.eventQueue.shift();return this.dummyQueue.push(e),this.word=this.dummyQueue.join(""),this.word},t.prototype.startTypeWord=function(e){return this.erasing=!0,this.nextWord=e,this.dummyQueue.pop(),this.word=this.dummyQueue.join(""),this.word},t.prototype.erase=function(){return this.dummyQueue.pop(),this.word=this.dummyQueue.join(""),this.word},t.prototype.rd=function(){var e=Math.random();return e>.1||e<.07?this.rd():e*1e3},t}();Ih.default=nM;Object.defineProperty(Nh,"__esModule",{value:!0});var $r=Ue,iM=Ih;function rM(t){var e=$r.useState(null),n=e[0],i=e[1],r=$r.useRef({}),o=$r.useRef({}),s=$r.useRef(new iM.default);return $r.useEffect(function(){o.current=i(s.current.startTypeWord(t))},[t]),$r.useEffect(function(){return r.current=setInterval(function(){i(s.current.typing())},s.current.rd()),function(){clearInterval(r.current)}},[n]),n}Nh.default=rM;Object.defineProperty(c_,"__esModule",{value:!0});var oM=Nh,sM=c_.default=oM.default;/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Dh="169",aM=0,ym=1,lM=2,f_=1,uM=2,di=3,or=0,ln=1,mi=2,tr=0,Ro=1,Sm=2,Em=3,Mm=4,cM=5,Tr=100,fM=101,dM=102,hM=103,pM=104,mM=200,gM=201,vM=202,_M=203,Vf=204,Wf=205,xM=206,yM=207,SM=208,EM=209,MM=210,TM=211,wM=212,AM=213,CM=214,jf=0,Xf=1,Yf=2,zo=3,$f=4,qf=5,Kf=6,Zf=7,d_=0,bM=1,RM=2,nr=0,PM=1,LM=2,NM=3,IM=4,DM=5,UM=6,FM=7,h_=300,Go=301,Vo=302,Qf=303,Jf=304,Eu=306,ed=1e3,Pr=1001,td=1002,bn=1003,OM=1004,wa=1005,Gn=1006,lc=1007,Lr=1008,Ci=1009,p_=1010,m_=1011,Vs=1012,Uh=1013,zr=1014,_i=1015,Qs=1016,Fh=1017,Oh=1018,Wo=1020,g_=35902,v_=1021,__=1022,Wn=1023,x_=1024,y_=1025,Po=1026,jo=1027,S_=1028,kh=1029,E_=1030,Bh=1031,Hh=1033,hl=33776,pl=33777,ml=33778,gl=33779,nd=35840,id=35841,rd=35842,od=35843,sd=36196,ad=37492,ld=37496,ud=37808,cd=37809,fd=37810,dd=37811,hd=37812,pd=37813,md=37814,gd=37815,vd=37816,_d=37817,xd=37818,yd=37819,Sd=37820,Ed=37821,vl=36492,Md=36494,Td=36495,M_=36283,wd=36284,Ad=36285,Cd=36286,kM=3200,BM=3201,HM=0,zM=1,Vi="",Jn="srgb",fr="srgb-linear",zh="display-p3",Mu="display-p3-linear",Wl="linear",dt="srgb",jl="rec709",Xl="p3",qr=7680,Tm=519,GM=512,VM=513,WM=514,T_=515,jM=516,XM=517,YM=518,$M=519,wm=35044,Am="300 es",xi=2e3,Yl=2001;class Ko{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const o=r.indexOf(n);o!==-1&&r.splice(o,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let o=0,s=r.length;o<s;o++)r[o].call(this,e);e.target=null}}}const Gt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],uc=Math.PI/180,bd=180/Math.PI;function Js(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Gt[t&255]+Gt[t>>8&255]+Gt[t>>16&255]+Gt[t>>24&255]+"-"+Gt[e&255]+Gt[e>>8&255]+"-"+Gt[e>>16&15|64]+Gt[e>>24&255]+"-"+Gt[n&63|128]+Gt[n>>8&255]+"-"+Gt[n>>16&255]+Gt[n>>24&255]+Gt[i&255]+Gt[i>>8&255]+Gt[i>>16&255]+Gt[i>>24&255]).toLowerCase()}function nn(t,e,n){return Math.max(e,Math.min(n,t))}function qM(t,e){return(t%e+e)%e}function cc(t,e,n){return(1-n)*t+n*e}function ss(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function en(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class st{constructor(e=0,n=0){st.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(nn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),o=this.x-e.x,s=this.y-e.y;return this.x=o*i-s*r+e.x,this.y=o*r+s*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ge{constructor(e,n,i,r,o,s,a,l,u){Ge.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,o,s,a,l,u)}set(e,n,i,r,o,s,a,l,u){const c=this.elements;return c[0]=e,c[1]=r,c[2]=a,c[3]=n,c[4]=o,c[5]=l,c[6]=i,c[7]=s,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,o=this.elements,s=i[0],a=i[3],l=i[6],u=i[1],c=i[4],h=i[7],d=i[2],m=i[5],v=i[8],y=r[0],p=r[3],f=r[6],_=r[1],g=r[4],M=r[7],P=r[2],A=r[5],w=r[8];return o[0]=s*y+a*_+l*P,o[3]=s*p+a*g+l*A,o[6]=s*f+a*M+l*w,o[1]=u*y+c*_+h*P,o[4]=u*p+c*g+h*A,o[7]=u*f+c*M+h*w,o[2]=d*y+m*_+v*P,o[5]=d*p+m*g+v*A,o[8]=d*f+m*M+v*w,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],u=e[7],c=e[8];return n*s*c-n*a*u-i*o*c+i*a*l+r*o*u-r*s*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],u=e[7],c=e[8],h=c*s-a*u,d=a*l-c*o,m=u*o-s*l,v=n*h+i*d+r*m;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/v;return e[0]=h*y,e[1]=(r*u-c*i)*y,e[2]=(a*i-r*s)*y,e[3]=d*y,e[4]=(c*n-r*l)*y,e[5]=(r*o-a*n)*y,e[6]=m*y,e[7]=(i*l-u*n)*y,e[8]=(s*n-i*o)*y,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,o,s,a){const l=Math.cos(o),u=Math.sin(o);return this.set(i*l,i*u,-i*(l*s+u*a)+s+e,-r*u,r*l,-r*(-u*s+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(fc.makeScale(e,n)),this}rotate(e){return this.premultiply(fc.makeRotation(-e)),this}translate(e,n){return this.premultiply(fc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const fc=new Ge;function w_(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function $l(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function KM(){const t=$l("canvas");return t.style.display="block",t}const Cm={};function _l(t){t in Cm||(Cm[t]=!0,console.warn(t))}function ZM(t,e,n){return new Promise(function(i,r){function o(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(o,n);break;default:i()}}setTimeout(o,n)})}function QM(t){const e=t.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function JM(t){const e=t.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const bm=new Ge().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Rm=new Ge().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),as={[fr]:{transfer:Wl,primaries:jl,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t,fromReference:t=>t},[Jn]:{transfer:dt,primaries:jl,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[Mu]:{transfer:Wl,primaries:Xl,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.applyMatrix3(Rm),fromReference:t=>t.applyMatrix3(bm)},[zh]:{transfer:dt,primaries:Xl,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.convertSRGBToLinear().applyMatrix3(Rm),fromReference:t=>t.applyMatrix3(bm).convertLinearToSRGB()}},eT=new Set([fr,Mu]),tt={enabled:!0,_workingColorSpace:fr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!eT.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=as[e].toReference,r=as[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return as[t].primaries},getTransfer:function(t){return t===Vi?Wl:as[t].transfer},getLuminanceCoefficients:function(t,e=this._workingColorSpace){return t.fromArray(as[e].luminanceCoefficients)}};function Lo(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function dc(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Kr;class tT{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Kr===void 0&&(Kr=$l("canvas")),Kr.width=e.width,Kr.height=e.height;const i=Kr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Kr}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=$l("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),o=r.data;for(let s=0;s<o.length;s++)o[s]=Lo(o[s]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Lo(n[i]/255)*255):n[i]=Lo(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let nT=0;class A_{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:nT++}),this.uuid=Js(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let o;if(Array.isArray(r)){o=[];for(let s=0,a=r.length;s<a;s++)r[s].isDataTexture?o.push(hc(r[s].image)):o.push(hc(r[s]))}else o=hc(r);i.url=o}return n||(e.images[this.uuid]=i),i}}function hc(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?tT.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let iT=0;class un extends Ko{constructor(e=un.DEFAULT_IMAGE,n=un.DEFAULT_MAPPING,i=Pr,r=Pr,o=Gn,s=Lr,a=Wn,l=Ci,u=un.DEFAULT_ANISOTROPY,c=Vi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:iT++}),this.uuid=Js(),this.name="",this.source=new A_(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=o,this.minFilter=s,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new st(0,0),this.repeat=new st(1,1),this.center=new st(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==h_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ed:e.x=e.x-Math.floor(e.x);break;case Pr:e.x=e.x<0?0:1;break;case td:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ed:e.y=e.y-Math.floor(e.y);break;case Pr:e.y=e.y<0?0:1;break;case td:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}un.DEFAULT_IMAGE=null;un.DEFAULT_MAPPING=h_;un.DEFAULT_ANISOTROPY=1;class Mt{constructor(e=0,n=0,i=0,r=1){Mt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,o=this.w,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r+s[12]*o,this.y=s[1]*n+s[5]*i+s[9]*r+s[13]*o,this.z=s[2]*n+s[6]*i+s[10]*r+s[14]*o,this.w=s[3]*n+s[7]*i+s[11]*r+s[15]*o,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,o;const l=e.elements,u=l[0],c=l[4],h=l[8],d=l[1],m=l[5],v=l[9],y=l[2],p=l[6],f=l[10];if(Math.abs(c-d)<.01&&Math.abs(h-y)<.01&&Math.abs(v-p)<.01){if(Math.abs(c+d)<.1&&Math.abs(h+y)<.1&&Math.abs(v+p)<.1&&Math.abs(u+m+f-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const g=(u+1)/2,M=(m+1)/2,P=(f+1)/2,A=(c+d)/4,w=(h+y)/4,R=(v+p)/4;return g>M&&g>P?g<.01?(i=0,r=.707106781,o=.707106781):(i=Math.sqrt(g),r=A/i,o=w/i):M>P?M<.01?(i=.707106781,r=0,o=.707106781):(r=Math.sqrt(M),i=A/r,o=R/r):P<.01?(i=.707106781,r=.707106781,o=0):(o=Math.sqrt(P),i=w/o,r=R/o),this.set(i,r,o,n),this}let _=Math.sqrt((p-v)*(p-v)+(h-y)*(h-y)+(d-c)*(d-c));return Math.abs(_)<.001&&(_=1),this.x=(p-v)/_,this.y=(h-y)/_,this.z=(d-c)/_,this.w=Math.acos((u+m+f-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class rT extends Ko{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Mt(0,0,e,n),this.scissorTest=!1,this.viewport=new Mt(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Gn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const o=new un(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);o.flipY=!1,o.generateMipmaps=i.generateMipmaps,o.internalFormat=i.internalFormat,this.textures=[];const s=i.count;for(let a=0;a<s;a++)this.textures[a]=o.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,o=this.textures.length;r<o;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new A_(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Gr extends rT{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class C_ extends un{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=bn,this.minFilter=bn,this.wrapR=Pr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class oT extends un{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=bn,this.minFilter=bn,this.wrapR=Pr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ea{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,o,s,a){let l=i[r+0],u=i[r+1],c=i[r+2],h=i[r+3];const d=o[s+0],m=o[s+1],v=o[s+2],y=o[s+3];if(a===0){e[n+0]=l,e[n+1]=u,e[n+2]=c,e[n+3]=h;return}if(a===1){e[n+0]=d,e[n+1]=m,e[n+2]=v,e[n+3]=y;return}if(h!==y||l!==d||u!==m||c!==v){let p=1-a;const f=l*d+u*m+c*v+h*y,_=f>=0?1:-1,g=1-f*f;if(g>Number.EPSILON){const P=Math.sqrt(g),A=Math.atan2(P,f*_);p=Math.sin(p*A)/P,a=Math.sin(a*A)/P}const M=a*_;if(l=l*p+d*M,u=u*p+m*M,c=c*p+v*M,h=h*p+y*M,p===1-a){const P=1/Math.sqrt(l*l+u*u+c*c+h*h);l*=P,u*=P,c*=P,h*=P}}e[n]=l,e[n+1]=u,e[n+2]=c,e[n+3]=h}static multiplyQuaternionsFlat(e,n,i,r,o,s){const a=i[r],l=i[r+1],u=i[r+2],c=i[r+3],h=o[s],d=o[s+1],m=o[s+2],v=o[s+3];return e[n]=a*v+c*h+l*m-u*d,e[n+1]=l*v+c*d+u*h-a*m,e[n+2]=u*v+c*m+a*d-l*h,e[n+3]=c*v-a*h-l*d-u*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,o=e._z,s=e._order,a=Math.cos,l=Math.sin,u=a(i/2),c=a(r/2),h=a(o/2),d=l(i/2),m=l(r/2),v=l(o/2);switch(s){case"XYZ":this._x=d*c*h+u*m*v,this._y=u*m*h-d*c*v,this._z=u*c*v+d*m*h,this._w=u*c*h-d*m*v;break;case"YXZ":this._x=d*c*h+u*m*v,this._y=u*m*h-d*c*v,this._z=u*c*v-d*m*h,this._w=u*c*h+d*m*v;break;case"ZXY":this._x=d*c*h-u*m*v,this._y=u*m*h+d*c*v,this._z=u*c*v+d*m*h,this._w=u*c*h-d*m*v;break;case"ZYX":this._x=d*c*h-u*m*v,this._y=u*m*h+d*c*v,this._z=u*c*v-d*m*h,this._w=u*c*h+d*m*v;break;case"YZX":this._x=d*c*h+u*m*v,this._y=u*m*h+d*c*v,this._z=u*c*v-d*m*h,this._w=u*c*h-d*m*v;break;case"XZY":this._x=d*c*h-u*m*v,this._y=u*m*h-d*c*v,this._z=u*c*v+d*m*h,this._w=u*c*h+d*m*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],o=n[8],s=n[1],a=n[5],l=n[9],u=n[2],c=n[6],h=n[10],d=i+a+h;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(c-l)*m,this._y=(o-u)*m,this._z=(s-r)*m}else if(i>a&&i>h){const m=2*Math.sqrt(1+i-a-h);this._w=(c-l)/m,this._x=.25*m,this._y=(r+s)/m,this._z=(o+u)/m}else if(a>h){const m=2*Math.sqrt(1+a-i-h);this._w=(o-u)/m,this._x=(r+s)/m,this._y=.25*m,this._z=(l+c)/m}else{const m=2*Math.sqrt(1+h-i-a);this._w=(s-r)/m,this._x=(o+u)/m,this._y=(l+c)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(nn(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,o=e._z,s=e._w,a=n._x,l=n._y,u=n._z,c=n._w;return this._x=i*c+s*a+r*u-o*l,this._y=r*c+s*l+o*a-i*u,this._z=o*c+s*u+i*l-r*a,this._w=s*c-i*a-r*l-o*u,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,o=this._z,s=this._w;let a=s*e._w+i*e._x+r*e._y+o*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=s,this._x=i,this._y=r,this._z=o,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-n;return this._w=m*s+n*this._w,this._x=m*i+n*this._x,this._y=m*r+n*this._y,this._z=m*o+n*this._z,this.normalize(),this}const u=Math.sqrt(l),c=Math.atan2(u,a),h=Math.sin((1-n)*c)/u,d=Math.sin(n*c)/u;return this._w=s*h+this._w*d,this._x=i*h+this._x*d,this._y=r*h+this._y*d,this._z=o*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),o=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),o*Math.sin(n),o*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class G{constructor(e=0,n=0,i=0){G.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Pm.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Pm.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,o=e.elements;return this.x=o[0]*n+o[3]*i+o[6]*r,this.y=o[1]*n+o[4]*i+o[7]*r,this.z=o[2]*n+o[5]*i+o[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,o=e.elements,s=1/(o[3]*n+o[7]*i+o[11]*r+o[15]);return this.x=(o[0]*n+o[4]*i+o[8]*r+o[12])*s,this.y=(o[1]*n+o[5]*i+o[9]*r+o[13])*s,this.z=(o[2]*n+o[6]*i+o[10]*r+o[14])*s,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,o=e.x,s=e.y,a=e.z,l=e.w,u=2*(s*r-a*i),c=2*(a*n-o*r),h=2*(o*i-s*n);return this.x=n+l*u+s*h-a*c,this.y=i+l*c+a*u-o*h,this.z=r+l*h+o*c-s*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r,this.y=o[1]*n+o[5]*i+o[9]*r,this.z=o[2]*n+o[6]*i+o[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,o=e.z,s=n.x,a=n.y,l=n.z;return this.x=r*l-o*a,this.y=o*s-i*l,this.z=i*a-r*s,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return pc.copy(this).projectOnVector(e),this.sub(pc)}reflect(e){return this.sub(pc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(nn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const pc=new G,Pm=new ea;class ta{constructor(e=new G(1/0,1/0,1/0),n=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Fn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Fn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Fn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const o=i.getAttribute("position");if(n===!0&&o!==void 0&&e.isInstancedMesh!==!0)for(let s=0,a=o.count;s<a;s++)e.isMesh===!0?e.getVertexPosition(s,Fn):Fn.fromBufferAttribute(o,s),Fn.applyMatrix4(e.matrixWorld),this.expandByPoint(Fn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Aa.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Aa.copy(i.boundingBox)),Aa.applyMatrix4(e.matrixWorld),this.union(Aa)}const r=e.children;for(let o=0,s=r.length;o<s;o++)this.expandByObject(r[o],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Fn),Fn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ls),Ca.subVectors(this.max,ls),Zr.subVectors(e.a,ls),Qr.subVectors(e.b,ls),Jr.subVectors(e.c,ls),Ii.subVectors(Qr,Zr),Di.subVectors(Jr,Qr),pr.subVectors(Zr,Jr);let n=[0,-Ii.z,Ii.y,0,-Di.z,Di.y,0,-pr.z,pr.y,Ii.z,0,-Ii.x,Di.z,0,-Di.x,pr.z,0,-pr.x,-Ii.y,Ii.x,0,-Di.y,Di.x,0,-pr.y,pr.x,0];return!mc(n,Zr,Qr,Jr,Ca)||(n=[1,0,0,0,1,0,0,0,1],!mc(n,Zr,Qr,Jr,Ca))?!1:(ba.crossVectors(Ii,Di),n=[ba.x,ba.y,ba.z],mc(n,Zr,Qr,Jr,Ca))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Fn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Fn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ai[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ai[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ai[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ai[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ai[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ai[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ai[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ai[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ai),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ai=[new G,new G,new G,new G,new G,new G,new G,new G],Fn=new G,Aa=new ta,Zr=new G,Qr=new G,Jr=new G,Ii=new G,Di=new G,pr=new G,ls=new G,Ca=new G,ba=new G,mr=new G;function mc(t,e,n,i,r){for(let o=0,s=t.length-3;o<=s;o+=3){mr.fromArray(t,o);const a=r.x*Math.abs(mr.x)+r.y*Math.abs(mr.y)+r.z*Math.abs(mr.z),l=e.dot(mr),u=n.dot(mr),c=i.dot(mr);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>a)return!1}return!0}const sT=new ta,us=new G,gc=new G;class Tu{constructor(e=new G,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):sT.setFromPoints(e).getCenter(i);let r=0;for(let o=0,s=e.length;o<s;o++)r=Math.max(r,i.distanceToSquared(e[o]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;us.subVectors(e,this.center);const n=us.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(us,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(gc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(us.copy(e.center).add(gc)),this.expandByPoint(us.copy(e.center).sub(gc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const li=new G,vc=new G,Ra=new G,Ui=new G,_c=new G,Pa=new G,xc=new G;class b_{constructor(e=new G,n=new G(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,li)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=li.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(li.copy(this.origin).addScaledVector(this.direction,n),li.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){vc.copy(e).add(n).multiplyScalar(.5),Ra.copy(n).sub(e).normalize(),Ui.copy(this.origin).sub(vc);const o=e.distanceTo(n)*.5,s=-this.direction.dot(Ra),a=Ui.dot(this.direction),l=-Ui.dot(Ra),u=Ui.lengthSq(),c=Math.abs(1-s*s);let h,d,m,v;if(c>0)if(h=s*l-a,d=s*a-l,v=o*c,h>=0)if(d>=-v)if(d<=v){const y=1/c;h*=y,d*=y,m=h*(h+s*d+2*a)+d*(s*h+d+2*l)+u}else d=o,h=Math.max(0,-(s*d+a)),m=-h*h+d*(d+2*l)+u;else d=-o,h=Math.max(0,-(s*d+a)),m=-h*h+d*(d+2*l)+u;else d<=-v?(h=Math.max(0,-(-s*o+a)),d=h>0?-o:Math.min(Math.max(-o,-l),o),m=-h*h+d*(d+2*l)+u):d<=v?(h=0,d=Math.min(Math.max(-o,-l),o),m=d*(d+2*l)+u):(h=Math.max(0,-(s*o+a)),d=h>0?o:Math.min(Math.max(-o,-l),o),m=-h*h+d*(d+2*l)+u);else d=s>0?-o:o,h=Math.max(0,-(s*d+a)),m=-h*h+d*(d+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(vc).addScaledVector(Ra,d),m}intersectSphere(e,n){li.subVectors(e.center,this.origin);const i=li.dot(this.direction),r=li.dot(li)-i*i,o=e.radius*e.radius;if(r>o)return null;const s=Math.sqrt(o-r),a=i-s,l=i+s;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,o,s,a,l;const u=1/this.direction.x,c=1/this.direction.y,h=1/this.direction.z,d=this.origin;return u>=0?(i=(e.min.x-d.x)*u,r=(e.max.x-d.x)*u):(i=(e.max.x-d.x)*u,r=(e.min.x-d.x)*u),c>=0?(o=(e.min.y-d.y)*c,s=(e.max.y-d.y)*c):(o=(e.max.y-d.y)*c,s=(e.min.y-d.y)*c),i>s||o>r||((o>i||isNaN(i))&&(i=o),(s<r||isNaN(r))&&(r=s),h>=0?(a=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,li)!==null}intersectTriangle(e,n,i,r,o){_c.subVectors(n,e),Pa.subVectors(i,e),xc.crossVectors(_c,Pa);let s=this.direction.dot(xc),a;if(s>0){if(r)return null;a=1}else if(s<0)a=-1,s=-s;else return null;Ui.subVectors(this.origin,e);const l=a*this.direction.dot(Pa.crossVectors(Ui,Pa));if(l<0)return null;const u=a*this.direction.dot(_c.cross(Ui));if(u<0||l+u>s)return null;const c=-a*Ui.dot(xc);return c<0?null:this.at(c/s,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Tt{constructor(e,n,i,r,o,s,a,l,u,c,h,d,m,v,y,p){Tt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,o,s,a,l,u,c,h,d,m,v,y,p)}set(e,n,i,r,o,s,a,l,u,c,h,d,m,v,y,p){const f=this.elements;return f[0]=e,f[4]=n,f[8]=i,f[12]=r,f[1]=o,f[5]=s,f[9]=a,f[13]=l,f[2]=u,f[6]=c,f[10]=h,f[14]=d,f[3]=m,f[7]=v,f[11]=y,f[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Tt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/eo.setFromMatrixColumn(e,0).length(),o=1/eo.setFromMatrixColumn(e,1).length(),s=1/eo.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*o,n[5]=i[5]*o,n[6]=i[6]*o,n[7]=0,n[8]=i[8]*s,n[9]=i[9]*s,n[10]=i[10]*s,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,o=e.z,s=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),c=Math.cos(o),h=Math.sin(o);if(e.order==="XYZ"){const d=s*c,m=s*h,v=a*c,y=a*h;n[0]=l*c,n[4]=-l*h,n[8]=u,n[1]=m+v*u,n[5]=d-y*u,n[9]=-a*l,n[2]=y-d*u,n[6]=v+m*u,n[10]=s*l}else if(e.order==="YXZ"){const d=l*c,m=l*h,v=u*c,y=u*h;n[0]=d+y*a,n[4]=v*a-m,n[8]=s*u,n[1]=s*h,n[5]=s*c,n[9]=-a,n[2]=m*a-v,n[6]=y+d*a,n[10]=s*l}else if(e.order==="ZXY"){const d=l*c,m=l*h,v=u*c,y=u*h;n[0]=d-y*a,n[4]=-s*h,n[8]=v+m*a,n[1]=m+v*a,n[5]=s*c,n[9]=y-d*a,n[2]=-s*u,n[6]=a,n[10]=s*l}else if(e.order==="ZYX"){const d=s*c,m=s*h,v=a*c,y=a*h;n[0]=l*c,n[4]=v*u-m,n[8]=d*u+y,n[1]=l*h,n[5]=y*u+d,n[9]=m*u-v,n[2]=-u,n[6]=a*l,n[10]=s*l}else if(e.order==="YZX"){const d=s*l,m=s*u,v=a*l,y=a*u;n[0]=l*c,n[4]=y-d*h,n[8]=v*h+m,n[1]=h,n[5]=s*c,n[9]=-a*c,n[2]=-u*c,n[6]=m*h+v,n[10]=d-y*h}else if(e.order==="XZY"){const d=s*l,m=s*u,v=a*l,y=a*u;n[0]=l*c,n[4]=-h,n[8]=u*c,n[1]=d*h+y,n[5]=s*c,n[9]=m*h-v,n[2]=v*h-m,n[6]=a*c,n[10]=y*h+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(aT,e,lT)}lookAt(e,n,i){const r=this.elements;return hn.subVectors(e,n),hn.lengthSq()===0&&(hn.z=1),hn.normalize(),Fi.crossVectors(i,hn),Fi.lengthSq()===0&&(Math.abs(i.z)===1?hn.x+=1e-4:hn.z+=1e-4,hn.normalize(),Fi.crossVectors(i,hn)),Fi.normalize(),La.crossVectors(hn,Fi),r[0]=Fi.x,r[4]=La.x,r[8]=hn.x,r[1]=Fi.y,r[5]=La.y,r[9]=hn.y,r[2]=Fi.z,r[6]=La.z,r[10]=hn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,o=this.elements,s=i[0],a=i[4],l=i[8],u=i[12],c=i[1],h=i[5],d=i[9],m=i[13],v=i[2],y=i[6],p=i[10],f=i[14],_=i[3],g=i[7],M=i[11],P=i[15],A=r[0],w=r[4],R=r[8],X=r[12],x=r[1],S=r[5],I=r[9],O=r[13],k=r[2],Y=r[6],V=r[10],K=r[14],L=r[3],$=r[7],Q=r[11],oe=r[15];return o[0]=s*A+a*x+l*k+u*L,o[4]=s*w+a*S+l*Y+u*$,o[8]=s*R+a*I+l*V+u*Q,o[12]=s*X+a*O+l*K+u*oe,o[1]=c*A+h*x+d*k+m*L,o[5]=c*w+h*S+d*Y+m*$,o[9]=c*R+h*I+d*V+m*Q,o[13]=c*X+h*O+d*K+m*oe,o[2]=v*A+y*x+p*k+f*L,o[6]=v*w+y*S+p*Y+f*$,o[10]=v*R+y*I+p*V+f*Q,o[14]=v*X+y*O+p*K+f*oe,o[3]=_*A+g*x+M*k+P*L,o[7]=_*w+g*S+M*Y+P*$,o[11]=_*R+g*I+M*V+P*Q,o[15]=_*X+g*O+M*K+P*oe,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],o=e[12],s=e[1],a=e[5],l=e[9],u=e[13],c=e[2],h=e[6],d=e[10],m=e[14],v=e[3],y=e[7],p=e[11],f=e[15];return v*(+o*l*h-r*u*h-o*a*d+i*u*d+r*a*m-i*l*m)+y*(+n*l*m-n*u*d+o*s*d-r*s*m+r*u*c-o*l*c)+p*(+n*u*h-n*a*m-o*s*h+i*s*m+o*a*c-i*u*c)+f*(-r*a*c-n*l*h+n*a*d+r*s*h-i*s*d+i*l*c)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],u=e[7],c=e[8],h=e[9],d=e[10],m=e[11],v=e[12],y=e[13],p=e[14],f=e[15],_=h*p*u-y*d*u+y*l*m-a*p*m-h*l*f+a*d*f,g=v*d*u-c*p*u-v*l*m+s*p*m+c*l*f-s*d*f,M=c*y*u-v*h*u+v*a*m-s*y*m-c*a*f+s*h*f,P=v*h*l-c*y*l-v*a*d+s*y*d+c*a*p-s*h*p,A=n*_+i*g+r*M+o*P;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/A;return e[0]=_*w,e[1]=(y*d*o-h*p*o-y*r*m+i*p*m+h*r*f-i*d*f)*w,e[2]=(a*p*o-y*l*o+y*r*u-i*p*u-a*r*f+i*l*f)*w,e[3]=(h*l*o-a*d*o-h*r*u+i*d*u+a*r*m-i*l*m)*w,e[4]=g*w,e[5]=(c*p*o-v*d*o+v*r*m-n*p*m-c*r*f+n*d*f)*w,e[6]=(v*l*o-s*p*o-v*r*u+n*p*u+s*r*f-n*l*f)*w,e[7]=(s*d*o-c*l*o+c*r*u-n*d*u-s*r*m+n*l*m)*w,e[8]=M*w,e[9]=(v*h*o-c*y*o-v*i*m+n*y*m+c*i*f-n*h*f)*w,e[10]=(s*y*o-v*a*o+v*i*u-n*y*u-s*i*f+n*a*f)*w,e[11]=(c*a*o-s*h*o-c*i*u+n*h*u+s*i*m-n*a*m)*w,e[12]=P*w,e[13]=(c*y*r-v*h*r+v*i*d-n*y*d-c*i*p+n*h*p)*w,e[14]=(v*a*r-s*y*r-v*i*l+n*y*l+s*i*p-n*a*p)*w,e[15]=(s*h*r-c*a*r+c*i*l-n*h*l-s*i*d+n*a*d)*w,this}scale(e){const n=this.elements,i=e.x,r=e.y,o=e.z;return n[0]*=i,n[4]*=r,n[8]*=o,n[1]*=i,n[5]*=r,n[9]*=o,n[2]*=i,n[6]*=r,n[10]*=o,n[3]*=i,n[7]*=r,n[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),o=1-i,s=e.x,a=e.y,l=e.z,u=o*s,c=o*a;return this.set(u*s+i,u*a-r*l,u*l+r*a,0,u*a+r*l,c*a+i,c*l-r*s,0,u*l-r*a,c*l+r*s,o*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,o,s){return this.set(1,i,o,0,e,1,s,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,o=n._x,s=n._y,a=n._z,l=n._w,u=o+o,c=s+s,h=a+a,d=o*u,m=o*c,v=o*h,y=s*c,p=s*h,f=a*h,_=l*u,g=l*c,M=l*h,P=i.x,A=i.y,w=i.z;return r[0]=(1-(y+f))*P,r[1]=(m+M)*P,r[2]=(v-g)*P,r[3]=0,r[4]=(m-M)*A,r[5]=(1-(d+f))*A,r[6]=(p+_)*A,r[7]=0,r[8]=(v+g)*w,r[9]=(p-_)*w,r[10]=(1-(d+y))*w,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let o=eo.set(r[0],r[1],r[2]).length();const s=eo.set(r[4],r[5],r[6]).length(),a=eo.set(r[8],r[9],r[10]).length();this.determinant()<0&&(o=-o),e.x=r[12],e.y=r[13],e.z=r[14],On.copy(this);const u=1/o,c=1/s,h=1/a;return On.elements[0]*=u,On.elements[1]*=u,On.elements[2]*=u,On.elements[4]*=c,On.elements[5]*=c,On.elements[6]*=c,On.elements[8]*=h,On.elements[9]*=h,On.elements[10]*=h,n.setFromRotationMatrix(On),i.x=o,i.y=s,i.z=a,this}makePerspective(e,n,i,r,o,s,a=xi){const l=this.elements,u=2*o/(n-e),c=2*o/(i-r),h=(n+e)/(n-e),d=(i+r)/(i-r);let m,v;if(a===xi)m=-(s+o)/(s-o),v=-2*s*o/(s-o);else if(a===Yl)m=-s/(s-o),v=-s*o/(s-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=c,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,o,s,a=xi){const l=this.elements,u=1/(n-e),c=1/(i-r),h=1/(s-o),d=(n+e)*u,m=(i+r)*c;let v,y;if(a===xi)v=(s+o)*h,y=-2*h;else if(a===Yl)v=o*h,y=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=y,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const eo=new G,On=new Tt,aT=new G(0,0,0),lT=new G(1,1,1),Fi=new G,La=new G,hn=new G,Lm=new Tt,Nm=new ea;class bi{constructor(e=0,n=0,i=0,r=bi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,o=r[0],s=r[4],a=r[8],l=r[1],u=r[5],c=r[9],h=r[2],d=r[6],m=r[10];switch(n){case"XYZ":this._y=Math.asin(nn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,m),this._z=Math.atan2(-s,o)):(this._x=Math.atan2(d,u),this._z=0);break;case"YXZ":this._x=Math.asin(-nn(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-h,o),this._z=0);break;case"ZXY":this._x=Math.asin(nn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-s,u)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-nn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-s,u));break;case"YZX":this._z=Math.asin(nn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-h,o)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-nn(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(d,u),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-c,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Lm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Lm,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Nm.setFromEuler(this),this.setFromQuaternion(Nm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}bi.DEFAULT_ORDER="XYZ";class R_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let uT=0;const Im=new G,to=new ea,ui=new Tt,Na=new G,cs=new G,cT=new G,fT=new ea,Dm=new G(1,0,0),Um=new G(0,1,0),Fm=new G(0,0,1),Om={type:"added"},dT={type:"removed"},no={type:"childadded",child:null},yc={type:"childremoved",child:null};class cn extends Ko{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:uT++}),this.uuid=Js(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=cn.DEFAULT_UP.clone();const e=new G,n=new bi,i=new ea,r=new G(1,1,1);function o(){i.setFromEuler(n,!1)}function s(){n.setFromQuaternion(i,void 0,!1)}n._onChange(o),i._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Tt},normalMatrix:{value:new Ge}}),this.matrix=new Tt,this.matrixWorld=new Tt,this.matrixAutoUpdate=cn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=cn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new R_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return to.setFromAxisAngle(e,n),this.quaternion.multiply(to),this}rotateOnWorldAxis(e,n){return to.setFromAxisAngle(e,n),this.quaternion.premultiply(to),this}rotateX(e){return this.rotateOnAxis(Dm,e)}rotateY(e){return this.rotateOnAxis(Um,e)}rotateZ(e){return this.rotateOnAxis(Fm,e)}translateOnAxis(e,n){return Im.copy(e).applyQuaternion(this.quaternion),this.position.add(Im.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Dm,e)}translateY(e){return this.translateOnAxis(Um,e)}translateZ(e){return this.translateOnAxis(Fm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ui.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Na.copy(e):Na.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),cs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ui.lookAt(cs,Na,this.up):ui.lookAt(Na,cs,this.up),this.quaternion.setFromRotationMatrix(ui),r&&(ui.extractRotation(r.matrixWorld),to.setFromRotationMatrix(ui),this.quaternion.premultiply(to.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Om),no.child=e,this.dispatchEvent(no),no.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(dT),yc.child=e,this.dispatchEvent(yc),yc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ui.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ui.multiply(e.parent.matrixWorld)),e.applyMatrix4(ui),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Om),no.child=e,this.dispatchEvent(no),no.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const s=this.children[i].getObjectByProperty(e,n);if(s!==void 0)return s}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let o=0,s=r.length;o<s;o++)r[o].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(cs,e,cT),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(cs,fT,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let o=0,s=r.length;o<s;o++)r[o].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function o(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=o(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const h=l[u];o(e.shapes,h)}else o(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(o(e.materials,this.material[l]));r.material=a}else r.material=o(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(o(e.animations,l))}}if(n){const a=s(e.geometries),l=s(e.materials),u=s(e.textures),c=s(e.images),h=s(e.shapes),d=s(e.skeletons),m=s(e.animations),v=s(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),m.length>0&&(i.animations=m),v.length>0&&(i.nodes=v)}return i.object=r,i;function s(a){const l=[];for(const u in a){const c=a[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}cn.DEFAULT_UP=new G(0,1,0);cn.DEFAULT_MATRIX_AUTO_UPDATE=!0;cn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const kn=new G,ci=new G,Sc=new G,fi=new G,io=new G,ro=new G,km=new G,Ec=new G,Mc=new G,Tc=new G,wc=new Mt,Ac=new Mt,Cc=new Mt;class Vn{constructor(e=new G,n=new G,i=new G){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),kn.subVectors(e,n),r.cross(kn);const o=r.lengthSq();return o>0?r.multiplyScalar(1/Math.sqrt(o)):r.set(0,0,0)}static getBarycoord(e,n,i,r,o){kn.subVectors(r,n),ci.subVectors(i,n),Sc.subVectors(e,n);const s=kn.dot(kn),a=kn.dot(ci),l=kn.dot(Sc),u=ci.dot(ci),c=ci.dot(Sc),h=s*u-a*a;if(h===0)return o.set(0,0,0),null;const d=1/h,m=(u*l-a*c)*d,v=(s*c-a*l)*d;return o.set(1-m-v,v,m)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,fi)===null?!1:fi.x>=0&&fi.y>=0&&fi.x+fi.y<=1}static getInterpolation(e,n,i,r,o,s,a,l){return this.getBarycoord(e,n,i,r,fi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(o,fi.x),l.addScaledVector(s,fi.y),l.addScaledVector(a,fi.z),l)}static getInterpolatedAttribute(e,n,i,r,o,s){return wc.setScalar(0),Ac.setScalar(0),Cc.setScalar(0),wc.fromBufferAttribute(e,n),Ac.fromBufferAttribute(e,i),Cc.fromBufferAttribute(e,r),s.setScalar(0),s.addScaledVector(wc,o.x),s.addScaledVector(Ac,o.y),s.addScaledVector(Cc,o.z),s}static isFrontFacing(e,n,i,r){return kn.subVectors(i,n),ci.subVectors(e,n),kn.cross(ci).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return kn.subVectors(this.c,this.b),ci.subVectors(this.a,this.b),kn.cross(ci).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Vn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Vn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,o){return Vn.getInterpolation(e,this.a,this.b,this.c,n,i,r,o)}containsPoint(e){return Vn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Vn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,o=this.c;let s,a;io.subVectors(r,i),ro.subVectors(o,i),Ec.subVectors(e,i);const l=io.dot(Ec),u=ro.dot(Ec);if(l<=0&&u<=0)return n.copy(i);Mc.subVectors(e,r);const c=io.dot(Mc),h=ro.dot(Mc);if(c>=0&&h<=c)return n.copy(r);const d=l*h-c*u;if(d<=0&&l>=0&&c<=0)return s=l/(l-c),n.copy(i).addScaledVector(io,s);Tc.subVectors(e,o);const m=io.dot(Tc),v=ro.dot(Tc);if(v>=0&&m<=v)return n.copy(o);const y=m*u-l*v;if(y<=0&&u>=0&&v<=0)return a=u/(u-v),n.copy(i).addScaledVector(ro,a);const p=c*v-m*h;if(p<=0&&h-c>=0&&m-v>=0)return km.subVectors(o,r),a=(h-c)/(h-c+(m-v)),n.copy(r).addScaledVector(km,a);const f=1/(p+y+d);return s=y*f,a=d*f,n.copy(i).addScaledVector(io,s).addScaledVector(ro,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const P_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Oi={h:0,s:0,l:0},Ia={h:0,s:0,l:0};function bc(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class it{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Jn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,tt.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=tt.workingColorSpace){return this.r=e,this.g=n,this.b=i,tt.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=tt.workingColorSpace){if(e=qM(e,1),n=nn(n,0,1),i=nn(i,0,1),n===0)this.r=this.g=this.b=i;else{const o=i<=.5?i*(1+n):i+n-i*n,s=2*i-o;this.r=bc(s,o,e+1/3),this.g=bc(s,o,e),this.b=bc(s,o,e-1/3)}return tt.toWorkingColorSpace(this,r),this}setStyle(e,n=Jn){function i(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let o;const s=r[1],a=r[2];switch(s){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,n);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,n);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=r[1],s=o.length;if(s===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,n);if(s===6)return this.setHex(parseInt(o,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Jn){const i=P_[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Lo(e.r),this.g=Lo(e.g),this.b=Lo(e.b),this}copyLinearToSRGB(e){return this.r=dc(e.r),this.g=dc(e.g),this.b=dc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Jn){return tt.fromWorkingColorSpace(Vt.copy(this),e),Math.round(nn(Vt.r*255,0,255))*65536+Math.round(nn(Vt.g*255,0,255))*256+Math.round(nn(Vt.b*255,0,255))}getHexString(e=Jn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=tt.workingColorSpace){tt.fromWorkingColorSpace(Vt.copy(this),n);const i=Vt.r,r=Vt.g,o=Vt.b,s=Math.max(i,r,o),a=Math.min(i,r,o);let l,u;const c=(a+s)/2;if(a===s)l=0,u=0;else{const h=s-a;switch(u=c<=.5?h/(s+a):h/(2-s-a),s){case i:l=(r-o)/h+(r<o?6:0);break;case r:l=(o-i)/h+2;break;case o:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,n=tt.workingColorSpace){return tt.fromWorkingColorSpace(Vt.copy(this),n),e.r=Vt.r,e.g=Vt.g,e.b=Vt.b,e}getStyle(e=Jn){tt.fromWorkingColorSpace(Vt.copy(this),e);const n=Vt.r,i=Vt.g,r=Vt.b;return e!==Jn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Oi),this.setHSL(Oi.h+e,Oi.s+n,Oi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Oi),e.getHSL(Ia);const i=cc(Oi.h,Ia.h,n),r=cc(Oi.s,Ia.s,n),o=cc(Oi.l,Ia.l,n);return this.setHSL(i,r,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,o=e.elements;return this.r=o[0]*n+o[3]*i+o[6]*r,this.g=o[1]*n+o[4]*i+o[7]*r,this.b=o[2]*n+o[5]*i+o[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Vt=new it;it.NAMES=P_;let hT=0;class na extends Ko{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:hT++}),this.uuid=Js(),this.name="",this.type="Material",this.blending=Ro,this.side=or,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Vf,this.blendDst=Wf,this.blendEquation=Tr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new it(0,0,0),this.blendAlpha=0,this.depthFunc=zo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Tm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=qr,this.stencilZFail=qr,this.stencilZPass=qr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ro&&(i.blending=this.blending),this.side!==or&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Vf&&(i.blendSrc=this.blendSrc),this.blendDst!==Wf&&(i.blendDst=this.blendDst),this.blendEquation!==Tr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==zo&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Tm&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==qr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==qr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==qr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(o){const s=[];for(const a in o){const l=o[a];delete l.metadata,s.push(l)}return s}if(n){const o=r(e.textures),s=r(e.images);o.length>0&&(i.textures=o),s.length>0&&(i.images=s)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let o=0;o!==r;++o)i[o]=n[o].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class L_ extends na{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new it(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bi,this.combine=d_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const At=new G,Da=new st;class Yn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=wm,this.updateRanges=[],this.gpuType=_i,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,o=this.itemSize;r<o;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Da.fromBufferAttribute(this,n),Da.applyMatrix3(e),this.setXY(n,Da.x,Da.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)At.fromBufferAttribute(this,n),At.applyMatrix3(e),this.setXYZ(n,At.x,At.y,At.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)At.fromBufferAttribute(this,n),At.applyMatrix4(e),this.setXYZ(n,At.x,At.y,At.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)At.fromBufferAttribute(this,n),At.applyNormalMatrix(e),this.setXYZ(n,At.x,At.y,At.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)At.fromBufferAttribute(this,n),At.transformDirection(e),this.setXYZ(n,At.x,At.y,At.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=ss(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=en(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=ss(n,this.array)),n}setX(e,n){return this.normalized&&(n=en(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=ss(n,this.array)),n}setY(e,n){return this.normalized&&(n=en(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=ss(n,this.array)),n}setZ(e,n){return this.normalized&&(n=en(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=ss(n,this.array)),n}setW(e,n){return this.normalized&&(n=en(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=en(n,this.array),i=en(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=en(n,this.array),i=en(i,this.array),r=en(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,o){return e*=this.itemSize,this.normalized&&(n=en(n,this.array),i=en(i,this.array),r=en(r,this.array),o=en(o,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==wm&&(e.usage=this.usage),e}}class N_ extends Yn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class I_ extends Yn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Dr extends Yn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let pT=0;const Mn=new Tt,Rc=new cn,oo=new G,pn=new ta,fs=new ta,Nt=new G;class Pi extends Ko{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:pT++}),this.uuid=Js(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(w_(e)?I_:N_)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const o=new Ge().getNormalMatrix(e);i.applyNormalMatrix(o),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Mn.makeRotationFromQuaternion(e),this.applyMatrix4(Mn),this}rotateX(e){return Mn.makeRotationX(e),this.applyMatrix4(Mn),this}rotateY(e){return Mn.makeRotationY(e),this.applyMatrix4(Mn),this}rotateZ(e){return Mn.makeRotationZ(e),this.applyMatrix4(Mn),this}translate(e,n,i){return Mn.makeTranslation(e,n,i),this.applyMatrix4(Mn),this}scale(e,n,i){return Mn.makeScale(e,n,i),this.applyMatrix4(Mn),this}lookAt(e){return Rc.lookAt(e),Rc.updateMatrix(),this.applyMatrix4(Rc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(oo).negate(),this.translate(oo.x,oo.y,oo.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const o=e[i];n.push(o.x,o.y,o.z||0)}return this.setAttribute("position",new Dr(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ta);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const o=n[i];pn.setFromBufferAttribute(o),this.morphTargetsRelative?(Nt.addVectors(this.boundingBox.min,pn.min),this.boundingBox.expandByPoint(Nt),Nt.addVectors(this.boundingBox.max,pn.max),this.boundingBox.expandByPoint(Nt)):(this.boundingBox.expandByPoint(pn.min),this.boundingBox.expandByPoint(pn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Tu);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new G,1/0);return}if(e){const i=this.boundingSphere.center;if(pn.setFromBufferAttribute(e),n)for(let o=0,s=n.length;o<s;o++){const a=n[o];fs.setFromBufferAttribute(a),this.morphTargetsRelative?(Nt.addVectors(pn.min,fs.min),pn.expandByPoint(Nt),Nt.addVectors(pn.max,fs.max),pn.expandByPoint(Nt)):(pn.expandByPoint(fs.min),pn.expandByPoint(fs.max))}pn.getCenter(i);let r=0;for(let o=0,s=e.count;o<s;o++)Nt.fromBufferAttribute(e,o),r=Math.max(r,i.distanceToSquared(Nt));if(n)for(let o=0,s=n.length;o<s;o++){const a=n[o],l=this.morphTargetsRelative;for(let u=0,c=a.count;u<c;u++)Nt.fromBufferAttribute(a,u),l&&(oo.fromBufferAttribute(e,u),Nt.add(oo)),r=Math.max(r,i.distanceToSquared(Nt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,o=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Yn(new Float32Array(4*i.count),4));const s=this.getAttribute("tangent"),a=[],l=[];for(let R=0;R<i.count;R++)a[R]=new G,l[R]=new G;const u=new G,c=new G,h=new G,d=new st,m=new st,v=new st,y=new G,p=new G;function f(R,X,x){u.fromBufferAttribute(i,R),c.fromBufferAttribute(i,X),h.fromBufferAttribute(i,x),d.fromBufferAttribute(o,R),m.fromBufferAttribute(o,X),v.fromBufferAttribute(o,x),c.sub(u),h.sub(u),m.sub(d),v.sub(d);const S=1/(m.x*v.y-v.x*m.y);isFinite(S)&&(y.copy(c).multiplyScalar(v.y).addScaledVector(h,-m.y).multiplyScalar(S),p.copy(h).multiplyScalar(m.x).addScaledVector(c,-v.x).multiplyScalar(S),a[R].add(y),a[X].add(y),a[x].add(y),l[R].add(p),l[X].add(p),l[x].add(p))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let R=0,X=_.length;R<X;++R){const x=_[R],S=x.start,I=x.count;for(let O=S,k=S+I;O<k;O+=3)f(e.getX(O+0),e.getX(O+1),e.getX(O+2))}const g=new G,M=new G,P=new G,A=new G;function w(R){P.fromBufferAttribute(r,R),A.copy(P);const X=a[R];g.copy(X),g.sub(P.multiplyScalar(P.dot(X))).normalize(),M.crossVectors(A,X);const S=M.dot(l[R])<0?-1:1;s.setXYZW(R,g.x,g.y,g.z,S)}for(let R=0,X=_.length;R<X;++R){const x=_[R],S=x.start,I=x.count;for(let O=S,k=S+I;O<k;O+=3)w(e.getX(O+0)),w(e.getX(O+1)),w(e.getX(O+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Yn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,m=i.count;d<m;d++)i.setXYZ(d,0,0,0);const r=new G,o=new G,s=new G,a=new G,l=new G,u=new G,c=new G,h=new G;if(e)for(let d=0,m=e.count;d<m;d+=3){const v=e.getX(d+0),y=e.getX(d+1),p=e.getX(d+2);r.fromBufferAttribute(n,v),o.fromBufferAttribute(n,y),s.fromBufferAttribute(n,p),c.subVectors(s,o),h.subVectors(r,o),c.cross(h),a.fromBufferAttribute(i,v),l.fromBufferAttribute(i,y),u.fromBufferAttribute(i,p),a.add(c),l.add(c),u.add(c),i.setXYZ(v,a.x,a.y,a.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(p,u.x,u.y,u.z)}else for(let d=0,m=n.count;d<m;d+=3)r.fromBufferAttribute(n,d+0),o.fromBufferAttribute(n,d+1),s.fromBufferAttribute(n,d+2),c.subVectors(s,o),h.subVectors(r,o),c.cross(h),i.setXYZ(d+0,c.x,c.y,c.z),i.setXYZ(d+1,c.x,c.y,c.z),i.setXYZ(d+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Nt.fromBufferAttribute(e,n),Nt.normalize(),e.setXYZ(n,Nt.x,Nt.y,Nt.z)}toNonIndexed(){function e(a,l){const u=a.array,c=a.itemSize,h=a.normalized,d=new u.constructor(l.length*c);let m=0,v=0;for(let y=0,p=l.length;y<p;y++){a.isInterleavedBufferAttribute?m=l[y]*a.data.stride+a.offset:m=l[y]*c;for(let f=0;f<c;f++)d[v++]=u[m++]}return new Yn(d,c,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Pi,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);n.setAttribute(a,u)}const o=this.morphAttributes;for(const a in o){const l=[],u=o[a];for(let c=0,h=u.length;c<h;c++){const d=u[c],m=e(d,i);l.push(m)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let a=0,l=s.length;a<l;a++){const u=s[a];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let o=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let h=0,d=u.length;h<d;h++){const m=u[h];c.push(m.toJSON(e.data))}c.length>0&&(r[l]=c,o=!0)}o&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const u in r){const c=r[u];this.setAttribute(u,c.clone(n))}const o=e.morphAttributes;for(const u in o){const c=[],h=o[u];for(let d=0,m=h.length;d<m;d++)c.push(h[d].clone(n));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let u=0,c=s.length;u<c;u++){const h=s[u];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Bm=new Tt,gr=new b_,Ua=new Tu,Hm=new G,Fa=new G,Oa=new G,ka=new G,Pc=new G,Ba=new G,zm=new G,Ha=new G;class yi extends cn{constructor(e=new Pi,n=new L_){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=r.length;o<s;o++){const a=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,o=i.morphAttributes.position,s=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(o&&a){Ba.set(0,0,0);for(let l=0,u=o.length;l<u;l++){const c=a[l],h=o[l];c!==0&&(Pc.fromBufferAttribute(h,e),s?Ba.addScaledVector(Pc,c):Ba.addScaledVector(Pc.sub(n),c))}n.add(Ba)}return n}raycast(e,n){const i=this.geometry,r=this.material,o=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ua.copy(i.boundingSphere),Ua.applyMatrix4(o),gr.copy(e.ray).recast(e.near),!(Ua.containsPoint(gr.origin)===!1&&(gr.intersectSphere(Ua,Hm)===null||gr.origin.distanceToSquared(Hm)>(e.far-e.near)**2))&&(Bm.copy(o).invert(),gr.copy(e.ray).applyMatrix4(Bm),!(i.boundingBox!==null&&gr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,gr)))}_computeIntersections(e,n,i){let r;const o=this.geometry,s=this.material,a=o.index,l=o.attributes.position,u=o.attributes.uv,c=o.attributes.uv1,h=o.attributes.normal,d=o.groups,m=o.drawRange;if(a!==null)if(Array.isArray(s))for(let v=0,y=d.length;v<y;v++){const p=d[v],f=s[p.materialIndex],_=Math.max(p.start,m.start),g=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let M=_,P=g;M<P;M+=3){const A=a.getX(M),w=a.getX(M+1),R=a.getX(M+2);r=za(this,f,e,i,u,c,h,A,w,R),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const v=Math.max(0,m.start),y=Math.min(a.count,m.start+m.count);for(let p=v,f=y;p<f;p+=3){const _=a.getX(p),g=a.getX(p+1),M=a.getX(p+2);r=za(this,s,e,i,u,c,h,_,g,M),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(s))for(let v=0,y=d.length;v<y;v++){const p=d[v],f=s[p.materialIndex],_=Math.max(p.start,m.start),g=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let M=_,P=g;M<P;M+=3){const A=M,w=M+1,R=M+2;r=za(this,f,e,i,u,c,h,A,w,R),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const v=Math.max(0,m.start),y=Math.min(l.count,m.start+m.count);for(let p=v,f=y;p<f;p+=3){const _=p,g=p+1,M=p+2;r=za(this,s,e,i,u,c,h,_,g,M),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}}}function mT(t,e,n,i,r,o,s,a){let l;if(e.side===ln?l=i.intersectTriangle(s,o,r,!0,a):l=i.intersectTriangle(r,o,s,e.side===or,a),l===null)return null;Ha.copy(a),Ha.applyMatrix4(t.matrixWorld);const u=n.ray.origin.distanceTo(Ha);return u<n.near||u>n.far?null:{distance:u,point:Ha.clone(),object:t}}function za(t,e,n,i,r,o,s,a,l,u){t.getVertexPosition(a,Fa),t.getVertexPosition(l,Oa),t.getVertexPosition(u,ka);const c=mT(t,e,n,i,Fa,Oa,ka,zm);if(c){const h=new G;Vn.getBarycoord(zm,Fa,Oa,ka,h),r&&(c.uv=Vn.getInterpolatedAttribute(r,a,l,u,h,new st)),o&&(c.uv1=Vn.getInterpolatedAttribute(o,a,l,u,h,new st)),s&&(c.normal=Vn.getInterpolatedAttribute(s,a,l,u,h,new G),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const d={a,b:l,c:u,normal:new G,materialIndex:0};Vn.getNormal(Fa,Oa,ka,d.normal),c.face=d,c.barycoord=h}return c}class ia extends Pi{constructor(e=1,n=1,i=1,r=1,o=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:o,depthSegments:s};const a=this;r=Math.floor(r),o=Math.floor(o),s=Math.floor(s);const l=[],u=[],c=[],h=[];let d=0,m=0;v("z","y","x",-1,-1,i,n,e,s,o,0),v("z","y","x",1,-1,i,n,-e,s,o,1),v("x","z","y",1,1,e,i,n,r,s,2),v("x","z","y",1,-1,e,i,-n,r,s,3),v("x","y","z",1,-1,e,n,i,r,o,4),v("x","y","z",-1,-1,e,n,-i,r,o,5),this.setIndex(l),this.setAttribute("position",new Dr(u,3)),this.setAttribute("normal",new Dr(c,3)),this.setAttribute("uv",new Dr(h,2));function v(y,p,f,_,g,M,P,A,w,R,X){const x=M/w,S=P/R,I=M/2,O=P/2,k=A/2,Y=w+1,V=R+1;let K=0,L=0;const $=new G;for(let Q=0;Q<V;Q++){const oe=Q*S-O;for(let Me=0;Me<Y;Me++){const Le=Me*x-I;$[y]=Le*_,$[p]=oe*g,$[f]=k,u.push($.x,$.y,$.z),$[y]=0,$[p]=0,$[f]=A>0?1:-1,c.push($.x,$.y,$.z),h.push(Me/w),h.push(1-Q/R),K+=1}}for(let Q=0;Q<R;Q++)for(let oe=0;oe<w;oe++){const Me=d+oe+Y*Q,Le=d+oe+Y*(Q+1),W=d+(oe+1)+Y*(Q+1),ee=d+(oe+1)+Y*Q;l.push(Me,Le,ee),l.push(Le,W,ee),L+=6}a.addGroup(m,L,X),m+=L,d+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ia(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Xo(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Xt(t){const e={};for(let n=0;n<t.length;n++){const i=Xo(t[n]);for(const r in i)e[r]=i[r]}return e}function gT(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function D_(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:tt.workingColorSpace}const vT={clone:Xo,merge:Xt};var _T=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,xT=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class sr extends na{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=_T,this.fragmentShader=xT,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Xo(e.uniforms),this.uniformsGroups=gT(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const s=this.uniforms[r].value;s&&s.isTexture?n.uniforms[r]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?n.uniforms[r]={type:"c",value:s.getHex()}:s&&s.isVector2?n.uniforms[r]={type:"v2",value:s.toArray()}:s&&s.isVector3?n.uniforms[r]={type:"v3",value:s.toArray()}:s&&s.isVector4?n.uniforms[r]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?n.uniforms[r]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?n.uniforms[r]={type:"m4",value:s.toArray()}:n.uniforms[r]={value:s}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class U_ extends cn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Tt,this.projectionMatrix=new Tt,this.projectionMatrixInverse=new Tt,this.coordinateSystem=xi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ki=new G,Gm=new st,Vm=new st;class An extends U_{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=bd*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(uc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return bd*2*Math.atan(Math.tan(uc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){ki.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ki.x,ki.y).multiplyScalar(-e/ki.z),ki.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ki.x,ki.y).multiplyScalar(-e/ki.z)}getViewSize(e,n){return this.getViewBounds(e,Gm,Vm),n.subVectors(Vm,Gm)}setViewOffset(e,n,i,r,o,s){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(uc*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,o=-.5*r;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,u=s.fullHeight;o+=s.offsetX*r/l,n-=s.offsetY*i/u,r*=s.width/l,i*=s.height/u}const a=this.filmOffset;a!==0&&(o+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const so=-90,ao=1;class yT extends cn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new An(so,ao,e,n);r.layers=this.layers,this.add(r);const o=new An(so,ao,e,n);o.layers=this.layers,this.add(o);const s=new An(so,ao,e,n);s.layers=this.layers,this.add(s);const a=new An(so,ao,e,n);a.layers=this.layers,this.add(a);const l=new An(so,ao,e,n);l.layers=this.layers,this.add(l);const u=new An(so,ao,e,n);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,o,s,a,l]=n;for(const u of n)this.remove(u);if(e===xi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Yl)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of n)this.add(u),u.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[o,s,a,l,u,c]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,o),e.setRenderTarget(i,1,r),e.render(n,s),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,u),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,r),e.render(n,c),e.setRenderTarget(h,d,m),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class F_ extends un{constructor(e,n,i,r,o,s,a,l,u,c){e=e!==void 0?e:[],n=n!==void 0?n:Go,super(e,n,i,r,o,s,a,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ST extends Gr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new F_(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Gn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new ia(5,5,5),o=new sr({name:"CubemapFromEquirect",uniforms:Xo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:ln,blending:tr});o.uniforms.tEquirect.value=n;const s=new yi(r,o),a=n.minFilter;return n.minFilter===Lr&&(n.minFilter=Gn),new yT(1,10,this).update(e,s),n.minFilter=a,s.geometry.dispose(),s.material.dispose(),this}clear(e,n,i,r){const o=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(n,i,r);e.setRenderTarget(o)}}const Lc=new G,ET=new G,MT=new Ge;class Er{constructor(e=new G(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Lc.subVectors(i,n).cross(ET.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Lc),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/r;return o<0||o>1?null:n.copy(e.start).addScaledVector(i,o)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||MT.getNormalMatrix(e),r=this.coplanarPoint(Lc).applyMatrix4(e),o=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const vr=new Tu,Ga=new G;class O_{constructor(e=new Er,n=new Er,i=new Er,r=new Er,o=new Er,s=new Er){this.planes=[e,n,i,r,o,s]}set(e,n,i,r,o,s){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(o),a[5].copy(s),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=xi){const i=this.planes,r=e.elements,o=r[0],s=r[1],a=r[2],l=r[3],u=r[4],c=r[5],h=r[6],d=r[7],m=r[8],v=r[9],y=r[10],p=r[11],f=r[12],_=r[13],g=r[14],M=r[15];if(i[0].setComponents(l-o,d-u,p-m,M-f).normalize(),i[1].setComponents(l+o,d+u,p+m,M+f).normalize(),i[2].setComponents(l+s,d+c,p+v,M+_).normalize(),i[3].setComponents(l-s,d-c,p-v,M-_).normalize(),i[4].setComponents(l-a,d-h,p-y,M-g).normalize(),n===xi)i[5].setComponents(l+a,d+h,p+y,M+g).normalize();else if(n===Yl)i[5].setComponents(a,h,y,g).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),vr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),vr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(vr)}intersectsSprite(e){return vr.center.set(0,0,0),vr.radius=.7071067811865476,vr.applyMatrix4(e.matrixWorld),this.intersectsSphere(vr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let o=0;o<6;o++)if(n[o].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Ga.x=r.normal.x>0?e.max.x:e.min.x,Ga.y=r.normal.y>0?e.max.y:e.min.y,Ga.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ga)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function k_(){let t=null,e=!1,n=null,i=null;function r(o,s){n(o,s),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(o){n=o},setContext:function(o){t=o}}}function TT(t){const e=new WeakMap;function n(a,l){const u=a.array,c=a.usage,h=u.byteLength,d=t.createBuffer();t.bindBuffer(l,d),t.bufferData(l,u,c),a.onUploadCallback();let m;if(u instanceof Float32Array)m=t.FLOAT;else if(u instanceof Uint16Array)a.isFloat16BufferAttribute?m=t.HALF_FLOAT:m=t.UNSIGNED_SHORT;else if(u instanceof Int16Array)m=t.SHORT;else if(u instanceof Uint32Array)m=t.UNSIGNED_INT;else if(u instanceof Int32Array)m=t.INT;else if(u instanceof Int8Array)m=t.BYTE;else if(u instanceof Uint8Array)m=t.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)m=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:d,type:m,bytesPerElement:u.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,l,u){const c=l.array,h=l.updateRanges;if(t.bindBuffer(u,a),h.length===0)t.bufferSubData(u,0,c);else{h.sort((m,v)=>m.start-v.start);let d=0;for(let m=1;m<h.length;m++){const v=h[d],y=h[m];y.start<=v.start+v.count+1?v.count=Math.max(v.count,y.start+y.count-v.start):(++d,h[d]=y)}h.length=d+1;for(let m=0,v=h.length;m<v;m++){const y=h[m];t.bufferSubData(u,y.start*c.BYTES_PER_ELEMENT,c,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function o(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function s(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const c=e.get(a);(!c||c.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const u=e.get(a);if(u===void 0)e.set(a,n(a,l));else if(u.version<a.version){if(u.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,a,l),u.version=a.version}}return{get:r,remove:o,update:s}}class wu extends Pi{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const o=e/2,s=n/2,a=Math.floor(i),l=Math.floor(r),u=a+1,c=l+1,h=e/a,d=n/l,m=[],v=[],y=[],p=[];for(let f=0;f<c;f++){const _=f*d-s;for(let g=0;g<u;g++){const M=g*h-o;v.push(M,-_,0),y.push(0,0,1),p.push(g/a),p.push(1-f/l)}}for(let f=0;f<l;f++)for(let _=0;_<a;_++){const g=_+u*f,M=_+u*(f+1),P=_+1+u*(f+1),A=_+1+u*f;m.push(g,M,A),m.push(M,P,A)}this.setIndex(m),this.setAttribute("position",new Dr(v,3)),this.setAttribute("normal",new Dr(y,3)),this.setAttribute("uv",new Dr(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wu(e.width,e.height,e.widthSegments,e.heightSegments)}}var wT=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,AT=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,CT=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,bT=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,RT=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,PT=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,LT=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,NT=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,IT=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,DT=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,UT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,FT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,OT=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,kT=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,BT=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,HT=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,zT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,GT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,VT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,WT=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,jT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,XT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,YT=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,$T=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,qT=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,KT=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,ZT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,QT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,JT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,e1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,t1="gl_FragColor = linearToOutputTexel( gl_FragColor );",n1=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,i1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,r1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,o1=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,s1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,a1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,l1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,u1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,c1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,f1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,d1=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,h1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,p1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,m1=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,g1=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,v1=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,_1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,x1=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,y1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,S1=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,E1=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,M1=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,T1=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,w1=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,A1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,C1=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,b1=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,R1=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,P1=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,L1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,N1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,I1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,D1=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,U1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,F1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,O1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,k1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,B1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,H1=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,z1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,G1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,V1=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,W1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,j1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,X1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Y1=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,$1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,q1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,K1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Z1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Q1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,J1=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,ew=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,tw=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,nw=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,iw=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,rw=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ow=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,sw=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,aw=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,lw=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,uw=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,cw=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,fw=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,dw=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,hw=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,pw=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,mw=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,gw=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,vw=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,_w=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,xw=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,yw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Sw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ew=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Mw=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Tw=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ww=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Aw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Cw=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Rw=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Pw=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Lw=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Nw=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Iw=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Dw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Uw=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Fw=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ow=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,kw=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Bw=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hw=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,zw=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gw=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Vw=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ww=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,jw=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Xw=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Yw=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$w=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,qw=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Kw=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Zw=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qw=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Jw=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,eA=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,tA=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,nA=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,iA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ze={alphahash_fragment:wT,alphahash_pars_fragment:AT,alphamap_fragment:CT,alphamap_pars_fragment:bT,alphatest_fragment:RT,alphatest_pars_fragment:PT,aomap_fragment:LT,aomap_pars_fragment:NT,batching_pars_vertex:IT,batching_vertex:DT,begin_vertex:UT,beginnormal_vertex:FT,bsdfs:OT,iridescence_fragment:kT,bumpmap_pars_fragment:BT,clipping_planes_fragment:HT,clipping_planes_pars_fragment:zT,clipping_planes_pars_vertex:GT,clipping_planes_vertex:VT,color_fragment:WT,color_pars_fragment:jT,color_pars_vertex:XT,color_vertex:YT,common:$T,cube_uv_reflection_fragment:qT,defaultnormal_vertex:KT,displacementmap_pars_vertex:ZT,displacementmap_vertex:QT,emissivemap_fragment:JT,emissivemap_pars_fragment:e1,colorspace_fragment:t1,colorspace_pars_fragment:n1,envmap_fragment:i1,envmap_common_pars_fragment:r1,envmap_pars_fragment:o1,envmap_pars_vertex:s1,envmap_physical_pars_fragment:v1,envmap_vertex:a1,fog_vertex:l1,fog_pars_vertex:u1,fog_fragment:c1,fog_pars_fragment:f1,gradientmap_pars_fragment:d1,lightmap_pars_fragment:h1,lights_lambert_fragment:p1,lights_lambert_pars_fragment:m1,lights_pars_begin:g1,lights_toon_fragment:_1,lights_toon_pars_fragment:x1,lights_phong_fragment:y1,lights_phong_pars_fragment:S1,lights_physical_fragment:E1,lights_physical_pars_fragment:M1,lights_fragment_begin:T1,lights_fragment_maps:w1,lights_fragment_end:A1,logdepthbuf_fragment:C1,logdepthbuf_pars_fragment:b1,logdepthbuf_pars_vertex:R1,logdepthbuf_vertex:P1,map_fragment:L1,map_pars_fragment:N1,map_particle_fragment:I1,map_particle_pars_fragment:D1,metalnessmap_fragment:U1,metalnessmap_pars_fragment:F1,morphinstance_vertex:O1,morphcolor_vertex:k1,morphnormal_vertex:B1,morphtarget_pars_vertex:H1,morphtarget_vertex:z1,normal_fragment_begin:G1,normal_fragment_maps:V1,normal_pars_fragment:W1,normal_pars_vertex:j1,normal_vertex:X1,normalmap_pars_fragment:Y1,clearcoat_normal_fragment_begin:$1,clearcoat_normal_fragment_maps:q1,clearcoat_pars_fragment:K1,iridescence_pars_fragment:Z1,opaque_fragment:Q1,packing:J1,premultiplied_alpha_fragment:ew,project_vertex:tw,dithering_fragment:nw,dithering_pars_fragment:iw,roughnessmap_fragment:rw,roughnessmap_pars_fragment:ow,shadowmap_pars_fragment:sw,shadowmap_pars_vertex:aw,shadowmap_vertex:lw,shadowmask_pars_fragment:uw,skinbase_vertex:cw,skinning_pars_vertex:fw,skinning_vertex:dw,skinnormal_vertex:hw,specularmap_fragment:pw,specularmap_pars_fragment:mw,tonemapping_fragment:gw,tonemapping_pars_fragment:vw,transmission_fragment:_w,transmission_pars_fragment:xw,uv_pars_fragment:yw,uv_pars_vertex:Sw,uv_vertex:Ew,worldpos_vertex:Mw,background_vert:Tw,background_frag:ww,backgroundCube_vert:Aw,backgroundCube_frag:Cw,cube_vert:bw,cube_frag:Rw,depth_vert:Pw,depth_frag:Lw,distanceRGBA_vert:Nw,distanceRGBA_frag:Iw,equirect_vert:Dw,equirect_frag:Uw,linedashed_vert:Fw,linedashed_frag:Ow,meshbasic_vert:kw,meshbasic_frag:Bw,meshlambert_vert:Hw,meshlambert_frag:zw,meshmatcap_vert:Gw,meshmatcap_frag:Vw,meshnormal_vert:Ww,meshnormal_frag:jw,meshphong_vert:Xw,meshphong_frag:Yw,meshphysical_vert:$w,meshphysical_frag:qw,meshtoon_vert:Kw,meshtoon_frag:Zw,points_vert:Qw,points_frag:Jw,shadow_vert:eA,shadow_frag:tA,sprite_vert:nA,sprite_frag:iA},le={common:{diffuse:{value:new it(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ge}},envmap:{envMap:{value:null},envMapRotation:{value:new Ge},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ge},normalScale:{value:new st(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new it(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new it(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0},uvTransform:{value:new Ge}},sprite:{diffuse:{value:new it(16777215)},opacity:{value:1},center:{value:new st(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}}},ti={basic:{uniforms:Xt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.fog]),vertexShader:ze.meshbasic_vert,fragmentShader:ze.meshbasic_frag},lambert:{uniforms:Xt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new it(0)}}]),vertexShader:ze.meshlambert_vert,fragmentShader:ze.meshlambert_frag},phong:{uniforms:Xt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new it(0)},specular:{value:new it(1118481)},shininess:{value:30}}]),vertexShader:ze.meshphong_vert,fragmentShader:ze.meshphong_frag},standard:{uniforms:Xt([le.common,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.roughnessmap,le.metalnessmap,le.fog,le.lights,{emissive:{value:new it(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag},toon:{uniforms:Xt([le.common,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.gradientmap,le.fog,le.lights,{emissive:{value:new it(0)}}]),vertexShader:ze.meshtoon_vert,fragmentShader:ze.meshtoon_frag},matcap:{uniforms:Xt([le.common,le.bumpmap,le.normalmap,le.displacementmap,le.fog,{matcap:{value:null}}]),vertexShader:ze.meshmatcap_vert,fragmentShader:ze.meshmatcap_frag},points:{uniforms:Xt([le.points,le.fog]),vertexShader:ze.points_vert,fragmentShader:ze.points_frag},dashed:{uniforms:Xt([le.common,le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ze.linedashed_vert,fragmentShader:ze.linedashed_frag},depth:{uniforms:Xt([le.common,le.displacementmap]),vertexShader:ze.depth_vert,fragmentShader:ze.depth_frag},normal:{uniforms:Xt([le.common,le.bumpmap,le.normalmap,le.displacementmap,{opacity:{value:1}}]),vertexShader:ze.meshnormal_vert,fragmentShader:ze.meshnormal_frag},sprite:{uniforms:Xt([le.sprite,le.fog]),vertexShader:ze.sprite_vert,fragmentShader:ze.sprite_frag},background:{uniforms:{uvTransform:{value:new Ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ze.background_vert,fragmentShader:ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ge}},vertexShader:ze.backgroundCube_vert,fragmentShader:ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ze.cube_vert,fragmentShader:ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ze.equirect_vert,fragmentShader:ze.equirect_frag},distanceRGBA:{uniforms:Xt([le.common,le.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ze.distanceRGBA_vert,fragmentShader:ze.distanceRGBA_frag},shadow:{uniforms:Xt([le.lights,le.fog,{color:{value:new it(0)},opacity:{value:1}}]),vertexShader:ze.shadow_vert,fragmentShader:ze.shadow_frag}};ti.physical={uniforms:Xt([ti.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ge},clearcoatNormalScale:{value:new st(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ge},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ge},sheen:{value:0},sheenColor:{value:new it(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ge},transmissionSamplerSize:{value:new st},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ge},attenuationDistance:{value:0},attenuationColor:{value:new it(0)},specularColor:{value:new it(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ge},anisotropyVector:{value:new st},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ge}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag};const Va={r:0,b:0,g:0},_r=new bi,rA=new Tt;function oA(t,e,n,i,r,o,s){const a=new it(0);let l=o===!0?0:1,u,c,h=null,d=0,m=null;function v(_){let g=_.isScene===!0?_.background:null;return g&&g.isTexture&&(g=(_.backgroundBlurriness>0?n:e).get(g)),g}function y(_){let g=!1;const M=v(_);M===null?f(a,l):M&&M.isColor&&(f(M,1),g=!0);const P=t.xr.getEnvironmentBlendMode();P==="additive"?i.buffers.color.setClear(0,0,0,1,s):P==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,s),(t.autoClear||g)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function p(_,g){const M=v(g);M&&(M.isCubeTexture||M.mapping===Eu)?(c===void 0&&(c=new yi(new ia(1,1,1),new sr({name:"BackgroundCubeMaterial",uniforms:Xo(ti.backgroundCube.uniforms),vertexShader:ti.backgroundCube.vertexShader,fragmentShader:ti.backgroundCube.fragmentShader,side:ln,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(P,A,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),_r.copy(g.backgroundRotation),_r.x*=-1,_r.y*=-1,_r.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(_r.y*=-1,_r.z*=-1),c.material.uniforms.envMap.value=M,c.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=g.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(rA.makeRotationFromEuler(_r)),c.material.toneMapped=tt.getTransfer(M.colorSpace)!==dt,(h!==M||d!==M.version||m!==t.toneMapping)&&(c.material.needsUpdate=!0,h=M,d=M.version,m=t.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(u===void 0&&(u=new yi(new wu(2,2),new sr({name:"BackgroundMaterial",uniforms:Xo(ti.background.uniforms),vertexShader:ti.background.vertexShader,fragmentShader:ti.background.fragmentShader,side:or,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=M,u.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,u.material.toneMapped=tt.getTransfer(M.colorSpace)!==dt,M.matrixAutoUpdate===!0&&M.updateMatrix(),u.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||d!==M.version||m!==t.toneMapping)&&(u.material.needsUpdate=!0,h=M,d=M.version,m=t.toneMapping),u.layers.enableAll(),_.unshift(u,u.geometry,u.material,0,0,null))}function f(_,g){_.getRGB(Va,D_(t)),i.buffers.color.setClear(Va.r,Va.g,Va.b,g,s)}return{getClearColor:function(){return a},setClearColor:function(_,g=1){a.set(_),l=g,f(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,f(a,l)},render:y,addToRenderList:p}}function sA(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=d(null);let o=r,s=!1;function a(x,S,I,O,k){let Y=!1;const V=h(O,I,S);o!==V&&(o=V,u(o.object)),Y=m(x,O,I,k),Y&&v(x,O,I,k),k!==null&&e.update(k,t.ELEMENT_ARRAY_BUFFER),(Y||s)&&(s=!1,M(x,S,I,O),k!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(k).buffer))}function l(){return t.createVertexArray()}function u(x){return t.bindVertexArray(x)}function c(x){return t.deleteVertexArray(x)}function h(x,S,I){const O=I.wireframe===!0;let k=i[x.id];k===void 0&&(k={},i[x.id]=k);let Y=k[S.id];Y===void 0&&(Y={},k[S.id]=Y);let V=Y[O];return V===void 0&&(V=d(l()),Y[O]=V),V}function d(x){const S=[],I=[],O=[];for(let k=0;k<n;k++)S[k]=0,I[k]=0,O[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:S,enabledAttributes:I,attributeDivisors:O,object:x,attributes:{},index:null}}function m(x,S,I,O){const k=o.attributes,Y=S.attributes;let V=0;const K=I.getAttributes();for(const L in K)if(K[L].location>=0){const Q=k[L];let oe=Y[L];if(oe===void 0&&(L==="instanceMatrix"&&x.instanceMatrix&&(oe=x.instanceMatrix),L==="instanceColor"&&x.instanceColor&&(oe=x.instanceColor)),Q===void 0||Q.attribute!==oe||oe&&Q.data!==oe.data)return!0;V++}return o.attributesNum!==V||o.index!==O}function v(x,S,I,O){const k={},Y=S.attributes;let V=0;const K=I.getAttributes();for(const L in K)if(K[L].location>=0){let Q=Y[L];Q===void 0&&(L==="instanceMatrix"&&x.instanceMatrix&&(Q=x.instanceMatrix),L==="instanceColor"&&x.instanceColor&&(Q=x.instanceColor));const oe={};oe.attribute=Q,Q&&Q.data&&(oe.data=Q.data),k[L]=oe,V++}o.attributes=k,o.attributesNum=V,o.index=O}function y(){const x=o.newAttributes;for(let S=0,I=x.length;S<I;S++)x[S]=0}function p(x){f(x,0)}function f(x,S){const I=o.newAttributes,O=o.enabledAttributes,k=o.attributeDivisors;I[x]=1,O[x]===0&&(t.enableVertexAttribArray(x),O[x]=1),k[x]!==S&&(t.vertexAttribDivisor(x,S),k[x]=S)}function _(){const x=o.newAttributes,S=o.enabledAttributes;for(let I=0,O=S.length;I<O;I++)S[I]!==x[I]&&(t.disableVertexAttribArray(I),S[I]=0)}function g(x,S,I,O,k,Y,V){V===!0?t.vertexAttribIPointer(x,S,I,k,Y):t.vertexAttribPointer(x,S,I,O,k,Y)}function M(x,S,I,O){y();const k=O.attributes,Y=I.getAttributes(),V=S.defaultAttributeValues;for(const K in Y){const L=Y[K];if(L.location>=0){let $=k[K];if($===void 0&&(K==="instanceMatrix"&&x.instanceMatrix&&($=x.instanceMatrix),K==="instanceColor"&&x.instanceColor&&($=x.instanceColor)),$!==void 0){const Q=$.normalized,oe=$.itemSize,Me=e.get($);if(Me===void 0)continue;const Le=Me.buffer,W=Me.type,ee=Me.bytesPerElement,ae=W===t.INT||W===t.UNSIGNED_INT||$.gpuType===Uh;if($.isInterleavedBufferAttribute){const ie=$.data,_e=ie.stride,Se=$.offset;if(ie.isInstancedInterleavedBuffer){for(let Oe=0;Oe<L.locationSize;Oe++)f(L.location+Oe,ie.meshPerAttribute);x.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let Oe=0;Oe<L.locationSize;Oe++)p(L.location+Oe);t.bindBuffer(t.ARRAY_BUFFER,Le);for(let Oe=0;Oe<L.locationSize;Oe++)g(L.location+Oe,oe/L.locationSize,W,Q,_e*ee,(Se+oe/L.locationSize*Oe)*ee,ae)}else{if($.isInstancedBufferAttribute){for(let ie=0;ie<L.locationSize;ie++)f(L.location+ie,$.meshPerAttribute);x.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let ie=0;ie<L.locationSize;ie++)p(L.location+ie);t.bindBuffer(t.ARRAY_BUFFER,Le);for(let ie=0;ie<L.locationSize;ie++)g(L.location+ie,oe/L.locationSize,W,Q,oe*ee,oe/L.locationSize*ie*ee,ae)}}else if(V!==void 0){const Q=V[K];if(Q!==void 0)switch(Q.length){case 2:t.vertexAttrib2fv(L.location,Q);break;case 3:t.vertexAttrib3fv(L.location,Q);break;case 4:t.vertexAttrib4fv(L.location,Q);break;default:t.vertexAttrib1fv(L.location,Q)}}}}_()}function P(){R();for(const x in i){const S=i[x];for(const I in S){const O=S[I];for(const k in O)c(O[k].object),delete O[k];delete S[I]}delete i[x]}}function A(x){if(i[x.id]===void 0)return;const S=i[x.id];for(const I in S){const O=S[I];for(const k in O)c(O[k].object),delete O[k];delete S[I]}delete i[x.id]}function w(x){for(const S in i){const I=i[S];if(I[x.id]===void 0)continue;const O=I[x.id];for(const k in O)c(O[k].object),delete O[k];delete I[x.id]}}function R(){X(),s=!0,o!==r&&(o=r,u(o.object))}function X(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:R,resetDefaultState:X,dispose:P,releaseStatesOfGeometry:A,releaseStatesOfProgram:w,initAttributes:y,enableAttribute:p,disableUnusedAttributes:_}}function aA(t,e,n){let i;function r(u){i=u}function o(u,c){t.drawArrays(i,u,c),n.update(c,i,1)}function s(u,c,h){h!==0&&(t.drawArraysInstanced(i,u,c,h),n.update(c,i,h))}function a(u,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,u,0,c,0,h);let m=0;for(let v=0;v<h;v++)m+=c[v];n.update(m,i,1)}function l(u,c,h,d){if(h===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let v=0;v<u.length;v++)s(u[v],c[v],d[v]);else{m.multiDrawArraysInstancedWEBGL(i,u,0,c,0,d,0,h);let v=0;for(let y=0;y<h;y++)v+=c[y];for(let y=0;y<d.length;y++)n.update(v,i,d[y])}}this.setMode=r,this.render=o,this.renderInstances=s,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function lA(t,e,n,i){let r;function o(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function s(w){return!(w!==Wn&&i.convert(w)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){const R=w===Qs&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==Ci&&i.convert(w)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==_i&&!R)}function l(w){if(w==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=n.precision!==void 0?n.precision:"highp";const c=l(u);c!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",c,"instead."),u=c);const h=n.logarithmicDepthBuffer===!0,d=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(d===!0){const w=e.get("EXT_clip_control");w.clipControlEXT(w.LOWER_LEFT_EXT,w.ZERO_TO_ONE_EXT)}const m=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),v=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=t.getParameter(t.MAX_TEXTURE_SIZE),p=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),f=t.getParameter(t.MAX_VERTEX_ATTRIBS),_=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),g=t.getParameter(t.MAX_VARYING_VECTORS),M=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),P=v>0,A=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:l,textureFormatReadable:s,textureTypeReadable:a,precision:u,logarithmicDepthBuffer:h,reverseDepthBuffer:d,maxTextures:m,maxVertexTextures:v,maxTextureSize:y,maxCubemapSize:p,maxAttributes:f,maxVertexUniforms:_,maxVaryings:g,maxFragmentUniforms:M,vertexTextures:P,maxSamples:A}}function uA(t){const e=this;let n=null,i=0,r=!1,o=!1;const s=new Er,a=new Ge,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const m=h.length!==0||d||i!==0||r;return r=d,i=h.length,m},this.beginShadows=function(){o=!0,c(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(h,d){n=c(h,d,0)},this.setState=function(h,d,m){const v=h.clippingPlanes,y=h.clipIntersection,p=h.clipShadows,f=t.get(h);if(!r||v===null||v.length===0||o&&!p)o?c(null):u();else{const _=o?0:i,g=_*4;let M=f.clippingState||null;l.value=M,M=c(v,d,g,m);for(let P=0;P!==g;++P)M[P]=n[P];f.clippingState=M,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=_}};function u(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(h,d,m,v){const y=h!==null?h.length:0;let p=null;if(y!==0){if(p=l.value,v!==!0||p===null){const f=m+y*4,_=d.matrixWorldInverse;a.getNormalMatrix(_),(p===null||p.length<f)&&(p=new Float32Array(f));for(let g=0,M=m;g!==y;++g,M+=4)s.copy(h[g]).applyMatrix4(_,a),s.normal.toArray(p,M),p[M+3]=s.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,p}}function cA(t){let e=new WeakMap;function n(s,a){return a===Qf?s.mapping=Go:a===Jf&&(s.mapping=Vo),s}function i(s){if(s&&s.isTexture){const a=s.mapping;if(a===Qf||a===Jf)if(e.has(s)){const l=e.get(s).texture;return n(l,s.mapping)}else{const l=s.image;if(l&&l.height>0){const u=new ST(l.height);return u.fromEquirectangularTexture(t,s),e.set(s,u),s.addEventListener("dispose",r),n(u.texture,s.mapping)}else return null}}return s}function r(s){const a=s.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function o(){e=new WeakMap}return{get:i,dispose:o}}class fA extends U_{constructor(e=-1,n=1,i=1,r=-1,o=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=o,this.far=s,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,o,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let o=i-e,s=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=u*this.view.offsetX,s=o+u*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(o,s,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Eo=4,Wm=[.125,.215,.35,.446,.526,.582],wr=20,Nc=new fA,jm=new it;let Ic=null,Dc=0,Uc=0,Fc=!1;const Mr=(1+Math.sqrt(5))/2,lo=1/Mr,Xm=[new G(-Mr,lo,0),new G(Mr,lo,0),new G(-lo,0,Mr),new G(lo,0,Mr),new G(0,Mr,-lo),new G(0,Mr,lo),new G(-1,1,-1),new G(1,1,-1),new G(-1,1,1),new G(1,1,1)];class Ym{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){Ic=this._renderer.getRenderTarget(),Dc=this._renderer.getActiveCubeFace(),Uc=this._renderer.getActiveMipmapLevel(),Fc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(e,i,r,o),n>0&&this._blur(o,0,0,n),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Km(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=qm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ic,Dc,Uc),this._renderer.xr.enabled=Fc,e.scissorTest=!1,Wa(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Go||e.mapping===Vo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ic=this._renderer.getRenderTarget(),Dc=this._renderer.getActiveCubeFace(),Uc=this._renderer.getActiveMipmapLevel(),Fc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Gn,minFilter:Gn,generateMipmaps:!1,type:Qs,format:Wn,colorSpace:fr,depthBuffer:!1},r=$m(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=$m(e,n,i);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=dA(o)),this._blurMaterial=hA(o,e,n)}return r}_compileMaterial(e){const n=new yi(this._lodPlanes[0],e);this._renderer.compile(n,Nc)}_sceneToCubeUV(e,n,i,r){const a=new An(90,1,n,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],c=this._renderer,h=c.autoClear,d=c.toneMapping;c.getClearColor(jm),c.toneMapping=nr,c.autoClear=!1;const m=new L_({name:"PMREM.Background",side:ln,depthWrite:!1,depthTest:!1}),v=new yi(new ia,m);let y=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,y=!0):(m.color.copy(jm),y=!0);for(let f=0;f<6;f++){const _=f%3;_===0?(a.up.set(0,l[f],0),a.lookAt(u[f],0,0)):_===1?(a.up.set(0,0,l[f]),a.lookAt(0,u[f],0)):(a.up.set(0,l[f],0),a.lookAt(0,0,u[f]));const g=this._cubeSize;Wa(r,_*g,f>2?g:0,g,g),c.setRenderTarget(r),y&&c.render(v,a),c.render(e,a)}v.geometry.dispose(),v.material.dispose(),c.toneMapping=d,c.autoClear=h,e.background=p}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Go||e.mapping===Vo;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Km()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=qm());const o=r?this._cubemapMaterial:this._equirectMaterial,s=new yi(this._lodPlanes[0],o),a=o.uniforms;a.envMap.value=e;const l=this._cubeSize;Wa(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(s,Nc)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let o=1;o<r;o++){const s=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),a=Xm[(r-o-1)%Xm.length];this._blur(e,o-1,o,s,a)}n.autoClear=i}_blur(e,n,i,r,o){const s=this._pingPongRenderTarget;this._halfBlur(e,s,n,i,r,"latitudinal",o),this._halfBlur(s,e,i,i,r,"longitudinal",o)}_halfBlur(e,n,i,r,o,s,a){const l=this._renderer,u=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,h=new yi(this._lodPlanes[r],u),d=u.uniforms,m=this._sizeLods[i]-1,v=isFinite(o)?Math.PI/(2*m):2*Math.PI/(2*wr-1),y=o/v,p=isFinite(o)?1+Math.floor(c*y):wr;p>wr&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${wr}`);const f=[];let _=0;for(let w=0;w<wr;++w){const R=w/y,X=Math.exp(-R*R/2);f.push(X),w===0?_+=X:w<p&&(_+=2*X)}for(let w=0;w<f.length;w++)f[w]=f[w]/_;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=f,d.latitudinal.value=s==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:g}=this;d.dTheta.value=v,d.mipInt.value=g-i;const M=this._sizeLods[r],P=3*M*(r>g-Eo?r-g+Eo:0),A=4*(this._cubeSize-M);Wa(n,P,A,3*M,2*M),l.setRenderTarget(n),l.render(h,Nc)}}function dA(t){const e=[],n=[],i=[];let r=t;const o=t-Eo+1+Wm.length;for(let s=0;s<o;s++){const a=Math.pow(2,r);n.push(a);let l=1/a;s>t-Eo?l=Wm[s-t+Eo-1]:s===0&&(l=0),i.push(l);const u=1/(a-2),c=-u,h=1+u,d=[c,c,h,c,h,h,c,c,h,h,c,h],m=6,v=6,y=3,p=2,f=1,_=new Float32Array(y*v*m),g=new Float32Array(p*v*m),M=new Float32Array(f*v*m);for(let A=0;A<m;A++){const w=A%3*2/3-1,R=A>2?0:-1,X=[w,R,0,w+2/3,R,0,w+2/3,R+1,0,w,R,0,w+2/3,R+1,0,w,R+1,0];_.set(X,y*v*A),g.set(d,p*v*A);const x=[A,A,A,A,A,A];M.set(x,f*v*A)}const P=new Pi;P.setAttribute("position",new Yn(_,y)),P.setAttribute("uv",new Yn(g,p)),P.setAttribute("faceIndex",new Yn(M,f)),e.push(P),r>Eo&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function $m(t,e,n){const i=new Gr(t,e,n);return i.texture.mapping=Eu,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Wa(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function hA(t,e,n){const i=new Float32Array(wr),r=new G(0,1,0);return new sr({name:"SphericalGaussianBlur",defines:{n:wr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Gh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:tr,depthTest:!1,depthWrite:!1})}function qm(){return new sr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Gh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:tr,depthTest:!1,depthWrite:!1})}function Km(){return new sr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Gh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:tr,depthTest:!1,depthWrite:!1})}function Gh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function pA(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===Qf||l===Jf,c=l===Go||l===Vo;if(u||c){let h=e.get(a);const d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return n===null&&(n=new Ym(t)),h=u?n.fromEquirectangular(a,h):n.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const m=a.image;return u&&m&&m.height>0||c&&m&&r(m)?(n===null&&(n=new Ym(t)),h=u?n.fromEquirectangular(a):n.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",o),h.texture):null}}}return a}function r(a){let l=0;const u=6;for(let c=0;c<u;c++)a[c]!==void 0&&l++;return l===u}function o(a){const l=a.target;l.removeEventListener("dispose",o);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function s(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:s}}function mA(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&_l("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function gA(t,e,n,i){const r={},o=new WeakMap;function s(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const v in d.attributes)e.remove(d.attributes[v]);for(const v in d.morphAttributes){const y=d.morphAttributes[v];for(let p=0,f=y.length;p<f;p++)e.remove(y[p])}d.removeEventListener("dispose",s),delete r[d.id];const m=o.get(d);m&&(e.remove(m),o.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function a(h,d){return r[d.id]===!0||(d.addEventListener("dispose",s),r[d.id]=!0,n.memory.geometries++),d}function l(h){const d=h.attributes;for(const v in d)e.update(d[v],t.ARRAY_BUFFER);const m=h.morphAttributes;for(const v in m){const y=m[v];for(let p=0,f=y.length;p<f;p++)e.update(y[p],t.ARRAY_BUFFER)}}function u(h){const d=[],m=h.index,v=h.attributes.position;let y=0;if(m!==null){const _=m.array;y=m.version;for(let g=0,M=_.length;g<M;g+=3){const P=_[g+0],A=_[g+1],w=_[g+2];d.push(P,A,A,w,w,P)}}else if(v!==void 0){const _=v.array;y=v.version;for(let g=0,M=_.length/3-1;g<M;g+=3){const P=g+0,A=g+1,w=g+2;d.push(P,A,A,w,w,P)}}else return;const p=new(w_(d)?I_:N_)(d,1);p.version=y;const f=o.get(h);f&&e.remove(f),o.set(h,p)}function c(h){const d=o.get(h);if(d){const m=h.index;m!==null&&d.version<m.version&&u(h)}else u(h);return o.get(h)}return{get:a,update:l,getWireframeAttribute:c}}function vA(t,e,n){let i;function r(d){i=d}let o,s;function a(d){o=d.type,s=d.bytesPerElement}function l(d,m){t.drawElements(i,m,o,d*s),n.update(m,i,1)}function u(d,m,v){v!==0&&(t.drawElementsInstanced(i,m,o,d*s,v),n.update(m,i,v))}function c(d,m,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,o,d,0,v);let p=0;for(let f=0;f<v;f++)p+=m[f];n.update(p,i,1)}function h(d,m,v,y){if(v===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let f=0;f<d.length;f++)u(d[f]/s,m[f],y[f]);else{p.multiDrawElementsInstancedWEBGL(i,m,0,o,d,0,y,0,v);let f=0;for(let _=0;_<v;_++)f+=m[_];for(let _=0;_<y.length;_++)n.update(f,i,y[_])}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=u,this.renderMultiDraw=c,this.renderMultiDrawInstances=h}function _A(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(o,s,a){switch(n.calls++,s){case t.TRIANGLES:n.triangles+=a*(o/3);break;case t.LINES:n.lines+=a*(o/2);break;case t.LINE_STRIP:n.lines+=a*(o-1);break;case t.LINE_LOOP:n.lines+=a*o;break;case t.POINTS:n.points+=a*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function xA(t,e,n){const i=new WeakMap,r=new Mt;function o(s,a,l){const u=s.morphTargetInfluences,c=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=c!==void 0?c.length:0;let d=i.get(a);if(d===void 0||d.count!==h){let x=function(){R.dispose(),i.delete(a),a.removeEventListener("dispose",x)};var m=x;d!==void 0&&d.texture.dispose();const v=a.morphAttributes.position!==void 0,y=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],_=a.morphAttributes.normal||[],g=a.morphAttributes.color||[];let M=0;v===!0&&(M=1),y===!0&&(M=2),p===!0&&(M=3);let P=a.attributes.position.count*M,A=1;P>e.maxTextureSize&&(A=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);const w=new Float32Array(P*A*4*h),R=new C_(w,P,A,h);R.type=_i,R.needsUpdate=!0;const X=M*4;for(let S=0;S<h;S++){const I=f[S],O=_[S],k=g[S],Y=P*A*4*S;for(let V=0;V<I.count;V++){const K=V*X;v===!0&&(r.fromBufferAttribute(I,V),w[Y+K+0]=r.x,w[Y+K+1]=r.y,w[Y+K+2]=r.z,w[Y+K+3]=0),y===!0&&(r.fromBufferAttribute(O,V),w[Y+K+4]=r.x,w[Y+K+5]=r.y,w[Y+K+6]=r.z,w[Y+K+7]=0),p===!0&&(r.fromBufferAttribute(k,V),w[Y+K+8]=r.x,w[Y+K+9]=r.y,w[Y+K+10]=r.z,w[Y+K+11]=k.itemSize===4?r.w:1)}}d={count:h,texture:R,size:new st(P,A)},i.set(a,d),a.addEventListener("dispose",x)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",s.morphTexture,n);else{let v=0;for(let p=0;p<u.length;p++)v+=u[p];const y=a.morphTargetsRelative?1:1-v;l.getUniforms().setValue(t,"morphTargetBaseInfluence",y),l.getUniforms().setValue(t,"morphTargetInfluences",u)}l.getUniforms().setValue(t,"morphTargetsTexture",d.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",d.size)}return{update:o}}function yA(t,e,n,i){let r=new WeakMap;function o(l){const u=i.render.frame,c=l.geometry,h=e.get(l,c);if(r.get(h)!==u&&(e.update(h),r.set(h,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==u&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==u&&(d.update(),r.set(d,u))}return h}function s(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:o,dispose:s}}class B_ extends un{constructor(e,n,i,r,o,s,a,l,u,c=Po){if(c!==Po&&c!==jo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===Po&&(i=zr),i===void 0&&c===jo&&(i=Wo),super(null,r,o,s,a,l,c,i,u),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:bn,this.minFilter=l!==void 0?l:bn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const H_=new un,Zm=new B_(1,1),z_=new C_,G_=new oT,V_=new F_,Qm=[],Jm=[],eg=new Float32Array(16),tg=new Float32Array(9),ng=new Float32Array(4);function Zo(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let o=Qm[r];if(o===void 0&&(o=new Float32Array(r),Qm[r]=o),e!==0){i.toArray(o,0);for(let s=1,a=0;s!==e;++s)a+=n,t[s].toArray(o,a)}return o}function Pt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Lt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Au(t,e){let n=Jm[e];n===void 0&&(n=new Int32Array(e),Jm[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function SA(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function EA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Pt(n,e))return;t.uniform2fv(this.addr,e),Lt(n,e)}}function MA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Pt(n,e))return;t.uniform3fv(this.addr,e),Lt(n,e)}}function TA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Pt(n,e))return;t.uniform4fv(this.addr,e),Lt(n,e)}}function wA(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Pt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Lt(n,e)}else{if(Pt(n,i))return;ng.set(i),t.uniformMatrix2fv(this.addr,!1,ng),Lt(n,i)}}function AA(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Pt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Lt(n,e)}else{if(Pt(n,i))return;tg.set(i),t.uniformMatrix3fv(this.addr,!1,tg),Lt(n,i)}}function CA(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Pt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Lt(n,e)}else{if(Pt(n,i))return;eg.set(i),t.uniformMatrix4fv(this.addr,!1,eg),Lt(n,i)}}function bA(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function RA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Pt(n,e))return;t.uniform2iv(this.addr,e),Lt(n,e)}}function PA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Pt(n,e))return;t.uniform3iv(this.addr,e),Lt(n,e)}}function LA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Pt(n,e))return;t.uniform4iv(this.addr,e),Lt(n,e)}}function NA(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function IA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Pt(n,e))return;t.uniform2uiv(this.addr,e),Lt(n,e)}}function DA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Pt(n,e))return;t.uniform3uiv(this.addr,e),Lt(n,e)}}function UA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Pt(n,e))return;t.uniform4uiv(this.addr,e),Lt(n,e)}}function FA(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let o;this.type===t.SAMPLER_2D_SHADOW?(Zm.compareFunction=T_,o=Zm):o=H_,n.setTexture2D(e||o,r)}function OA(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||G_,r)}function kA(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||V_,r)}function BA(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||z_,r)}function HA(t){switch(t){case 5126:return SA;case 35664:return EA;case 35665:return MA;case 35666:return TA;case 35674:return wA;case 35675:return AA;case 35676:return CA;case 5124:case 35670:return bA;case 35667:case 35671:return RA;case 35668:case 35672:return PA;case 35669:case 35673:return LA;case 5125:return NA;case 36294:return IA;case 36295:return DA;case 36296:return UA;case 35678:case 36198:case 36298:case 36306:case 35682:return FA;case 35679:case 36299:case 36307:return OA;case 35680:case 36300:case 36308:case 36293:return kA;case 36289:case 36303:case 36311:case 36292:return BA}}function zA(t,e){t.uniform1fv(this.addr,e)}function GA(t,e){const n=Zo(e,this.size,2);t.uniform2fv(this.addr,n)}function VA(t,e){const n=Zo(e,this.size,3);t.uniform3fv(this.addr,n)}function WA(t,e){const n=Zo(e,this.size,4);t.uniform4fv(this.addr,n)}function jA(t,e){const n=Zo(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function XA(t,e){const n=Zo(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function YA(t,e){const n=Zo(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function $A(t,e){t.uniform1iv(this.addr,e)}function qA(t,e){t.uniform2iv(this.addr,e)}function KA(t,e){t.uniform3iv(this.addr,e)}function ZA(t,e){t.uniform4iv(this.addr,e)}function QA(t,e){t.uniform1uiv(this.addr,e)}function JA(t,e){t.uniform2uiv(this.addr,e)}function eC(t,e){t.uniform3uiv(this.addr,e)}function tC(t,e){t.uniform4uiv(this.addr,e)}function nC(t,e,n){const i=this.cache,r=e.length,o=Au(n,r);Pt(i,o)||(t.uniform1iv(this.addr,o),Lt(i,o));for(let s=0;s!==r;++s)n.setTexture2D(e[s]||H_,o[s])}function iC(t,e,n){const i=this.cache,r=e.length,o=Au(n,r);Pt(i,o)||(t.uniform1iv(this.addr,o),Lt(i,o));for(let s=0;s!==r;++s)n.setTexture3D(e[s]||G_,o[s])}function rC(t,e,n){const i=this.cache,r=e.length,o=Au(n,r);Pt(i,o)||(t.uniform1iv(this.addr,o),Lt(i,o));for(let s=0;s!==r;++s)n.setTextureCube(e[s]||V_,o[s])}function oC(t,e,n){const i=this.cache,r=e.length,o=Au(n,r);Pt(i,o)||(t.uniform1iv(this.addr,o),Lt(i,o));for(let s=0;s!==r;++s)n.setTexture2DArray(e[s]||z_,o[s])}function sC(t){switch(t){case 5126:return zA;case 35664:return GA;case 35665:return VA;case 35666:return WA;case 35674:return jA;case 35675:return XA;case 35676:return YA;case 5124:case 35670:return $A;case 35667:case 35671:return qA;case 35668:case 35672:return KA;case 35669:case 35673:return ZA;case 5125:return QA;case 36294:return JA;case 36295:return eC;case 36296:return tC;case 35678:case 36198:case 36298:case 36306:case 35682:return nC;case 35679:case 36299:case 36307:return iC;case 35680:case 36300:case 36308:case 36293:return rC;case 36289:case 36303:case 36311:case 36292:return oC}}class aC{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=HA(n.type)}}class lC{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=sC(n.type)}}class uC{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let o=0,s=r.length;o!==s;++o){const a=r[o];a.setValue(e,n[a.id],i)}}}const Oc=/(\w+)(\])?(\[|\.)?/g;function ig(t,e){t.seq.push(e),t.map[e.id]=e}function cC(t,e,n){const i=t.name,r=i.length;for(Oc.lastIndex=0;;){const o=Oc.exec(i),s=Oc.lastIndex;let a=o[1];const l=o[2]==="]",u=o[3];if(l&&(a=a|0),u===void 0||u==="["&&s+2===r){ig(n,u===void 0?new aC(a,t,e):new lC(a,t,e));break}else{let h=n.map[a];h===void 0&&(h=new uC(a),ig(n,h)),n=h}}}class xl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const o=e.getActiveUniform(n,r),s=e.getUniformLocation(n,o.name);cC(o,s,this)}}setValue(e,n,i,r){const o=this.map[n];o!==void 0&&o.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let o=0,s=n.length;o!==s;++o){const a=n[o],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,o=e.length;r!==o;++r){const s=e[r];s.id in n&&i.push(s)}return i}}function rg(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const fC=37297;let dC=0;function hC(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),o=Math.min(e+6,n.length);for(let s=r;s<o;s++){const a=s+1;i.push(`${a===e?">":" "} ${a}: ${n[s]}`)}return i.join(`
`)}function pC(t){const e=tt.getPrimaries(tt.workingColorSpace),n=tt.getPrimaries(t);let i;switch(e===n?i="":e===Xl&&n===jl?i="LinearDisplayP3ToLinearSRGB":e===jl&&n===Xl&&(i="LinearSRGBToLinearDisplayP3"),t){case fr:case Mu:return[i,"LinearTransferOETF"];case Jn:case zh:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function og(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const s=parseInt(o[1]);return n.toUpperCase()+`

`+r+`

`+hC(t.getShaderSource(e),s)}else return r}function mC(t,e){const n=pC(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function gC(t,e){let n;switch(e){case PM:n="Linear";break;case LM:n="Reinhard";break;case NM:n="Cineon";break;case IM:n="ACESFilmic";break;case UM:n="AgX";break;case FM:n="Neutral";break;case DM:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const ja=new G;function vC(){tt.getLuminanceCoefficients(ja);const t=ja.x.toFixed(4),e=ja.y.toFixed(4),n=ja.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function _C(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(gs).join(`
`)}function xC(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function yC(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const o=t.getActiveAttrib(e,r),s=o.name;let a=1;o.type===t.FLOAT_MAT2&&(a=2),o.type===t.FLOAT_MAT3&&(a=3),o.type===t.FLOAT_MAT4&&(a=4),n[s]={type:o.type,location:t.getAttribLocation(e,s),locationSize:a}}return n}function gs(t){return t!==""}function sg(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ag(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const SC=/^[ \t]*#include +<([\w\d./]+)>/gm;function Rd(t){return t.replace(SC,MC)}const EC=new Map;function MC(t,e){let n=ze[e];if(n===void 0){const i=EC.get(e);if(i!==void 0)n=ze[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Rd(n)}const TC=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function lg(t){return t.replace(TC,wC)}function wC(t,e,n,i){let r="";for(let o=parseInt(e);o<parseInt(n);o++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return r}function ug(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function AC(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===f_?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===uM?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===di&&(e="SHADOWMAP_TYPE_VSM"),e}function CC(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Go:case Vo:e="ENVMAP_TYPE_CUBE";break;case Eu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function bC(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Vo:e="ENVMAP_MODE_REFRACTION";break}return e}function RC(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case d_:e="ENVMAP_BLENDING_MULTIPLY";break;case bM:e="ENVMAP_BLENDING_MIX";break;case RM:e="ENVMAP_BLENDING_ADD";break}return e}function PC(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function LC(t,e,n,i){const r=t.getContext(),o=n.defines;let s=n.vertexShader,a=n.fragmentShader;const l=AC(n),u=CC(n),c=bC(n),h=RC(n),d=PC(n),m=_C(n),v=xC(o),y=r.createProgram();let p,f,_=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(p=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(gs).join(`
`),p.length>0&&(p+=`
`),f=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(gs).join(`
`),f.length>0&&(f+=`
`)):(p=[ug(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(gs).join(`
`),f=[ug(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+c:"",n.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==nr?"#define TONE_MAPPING":"",n.toneMapping!==nr?ze.tonemapping_pars_fragment:"",n.toneMapping!==nr?gC("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",ze.colorspace_pars_fragment,mC("linearToOutputTexel",n.outputColorSpace),vC(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(gs).join(`
`)),s=Rd(s),s=sg(s,n),s=ag(s,n),a=Rd(a),a=sg(a,n),a=ag(a,n),s=lg(s),a=lg(a),n.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,f=["#define varying in",n.glslVersion===Am?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Am?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const g=_+p+s,M=_+f+a,P=rg(r,r.VERTEX_SHADER,g),A=rg(r,r.FRAGMENT_SHADER,M);r.attachShader(y,P),r.attachShader(y,A),n.index0AttributeName!==void 0?r.bindAttribLocation(y,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y);function w(S){if(t.debug.checkShaderErrors){const I=r.getProgramInfoLog(y).trim(),O=r.getShaderInfoLog(P).trim(),k=r.getShaderInfoLog(A).trim();let Y=!0,V=!0;if(r.getProgramParameter(y,r.LINK_STATUS)===!1)if(Y=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,y,P,A);else{const K=og(r,P,"vertex"),L=og(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,r.VALIDATE_STATUS)+`

Material Name: `+S.name+`
Material Type: `+S.type+`

Program Info Log: `+I+`
`+K+`
`+L)}else I!==""?console.warn("THREE.WebGLProgram: Program Info Log:",I):(O===""||k==="")&&(V=!1);V&&(S.diagnostics={runnable:Y,programLog:I,vertexShader:{log:O,prefix:p},fragmentShader:{log:k,prefix:f}})}r.deleteShader(P),r.deleteShader(A),R=new xl(r,y),X=yC(r,y)}let R;this.getUniforms=function(){return R===void 0&&w(this),R};let X;this.getAttributes=function(){return X===void 0&&w(this),X};let x=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=r.getProgramParameter(y,fC)),x},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=dC++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=P,this.fragmentShader=A,this}let NC=0;class IC{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),o=this._getShaderStage(i),s=this._getShaderCacheForMaterial(e);return s.has(r)===!1&&(s.add(r),r.usedTimes++),s.has(o)===!1&&(s.add(o),o.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new DC(e),n.set(e,i)),i}}class DC{constructor(e){this.id=NC++,this.code=e,this.usedTimes=0}}function UC(t,e,n,i,r,o,s){const a=new R_,l=new IC,u=new Set,c=[],h=r.logarithmicDepthBuffer,d=r.reverseDepthBuffer,m=r.vertexTextures;let v=r.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(x){return u.add(x),x===0?"uv":`uv${x}`}function f(x,S,I,O,k){const Y=O.fog,V=k.geometry,K=x.isMeshStandardMaterial?O.environment:null,L=(x.isMeshStandardMaterial?n:e).get(x.envMap||K),$=L&&L.mapping===Eu?L.image.height:null,Q=y[x.type];x.precision!==null&&(v=r.getMaxPrecision(x.precision),v!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",v,"instead."));const oe=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Me=oe!==void 0?oe.length:0;let Le=0;V.morphAttributes.position!==void 0&&(Le=1),V.morphAttributes.normal!==void 0&&(Le=2),V.morphAttributes.color!==void 0&&(Le=3);let W,ee,ae,ie;if(Q){const Jt=ti[Q];W=Jt.vertexShader,ee=Jt.fragmentShader}else W=x.vertexShader,ee=x.fragmentShader,l.update(x),ae=l.getVertexShaderID(x),ie=l.getFragmentShaderID(x);const _e=t.getRenderTarget(),Se=k.isInstancedMesh===!0,Oe=k.isBatchedMesh===!0,Ve=!!x.map,Fe=!!x.matcap,b=!!L,ke=!!x.aoMap,Ce=!!x.lightMap,He=!!x.bumpMap,be=!!x.normalMap,ut=!!x.displacementMap,De=!!x.emissiveMap,C=!!x.metalnessMap,E=!!x.roughnessMap,B=x.anisotropy>0,Z=x.clearcoat>0,te=x.dispersion>0,q=x.iridescence>0,Te=x.sheen>0,ue=x.transmission>0,me=B&&!!x.anisotropyMap,Ze=Z&&!!x.clearcoatMap,re=Z&&!!x.clearcoatNormalMap,ge=Z&&!!x.clearcoatRoughnessMap,Ne=q&&!!x.iridescenceMap,Ie=q&&!!x.iridescenceThicknessMap,ve=Te&&!!x.sheenColorMap,Ye=Te&&!!x.sheenRoughnessMap,Be=!!x.specularMap,at=!!x.specularColorMap,D=!!x.specularIntensityMap,de=ue&&!!x.transmissionMap,j=ue&&!!x.thicknessMap,J=!!x.gradientMap,ce=!!x.alphaMap,he=x.alphaTest>0,qe=!!x.alphaHash,wt=!!x.extensions;let Qt=nr;x.toneMapped&&(_e===null||_e.isXRRenderTarget===!0)&&(Qt=t.toneMapping);const Qe={shaderID:Q,shaderType:x.type,shaderName:x.name,vertexShader:W,fragmentShader:ee,defines:x.defines,customVertexShaderID:ae,customFragmentShaderID:ie,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:v,batching:Oe,batchingColor:Oe&&k._colorsTexture!==null,instancing:Se,instancingColor:Se&&k.instanceColor!==null,instancingMorph:Se&&k.morphTexture!==null,supportsVertexTextures:m,outputColorSpace:_e===null?t.outputColorSpace:_e.isXRRenderTarget===!0?_e.texture.colorSpace:fr,alphaToCoverage:!!x.alphaToCoverage,map:Ve,matcap:Fe,envMap:b,envMapMode:b&&L.mapping,envMapCubeUVHeight:$,aoMap:ke,lightMap:Ce,bumpMap:He,normalMap:be,displacementMap:m&&ut,emissiveMap:De,normalMapObjectSpace:be&&x.normalMapType===zM,normalMapTangentSpace:be&&x.normalMapType===HM,metalnessMap:C,roughnessMap:E,anisotropy:B,anisotropyMap:me,clearcoat:Z,clearcoatMap:Ze,clearcoatNormalMap:re,clearcoatRoughnessMap:ge,dispersion:te,iridescence:q,iridescenceMap:Ne,iridescenceThicknessMap:Ie,sheen:Te,sheenColorMap:ve,sheenRoughnessMap:Ye,specularMap:Be,specularColorMap:at,specularIntensityMap:D,transmission:ue,transmissionMap:de,thicknessMap:j,gradientMap:J,opaque:x.transparent===!1&&x.blending===Ro&&x.alphaToCoverage===!1,alphaMap:ce,alphaTest:he,alphaHash:qe,combine:x.combine,mapUv:Ve&&p(x.map.channel),aoMapUv:ke&&p(x.aoMap.channel),lightMapUv:Ce&&p(x.lightMap.channel),bumpMapUv:He&&p(x.bumpMap.channel),normalMapUv:be&&p(x.normalMap.channel),displacementMapUv:ut&&p(x.displacementMap.channel),emissiveMapUv:De&&p(x.emissiveMap.channel),metalnessMapUv:C&&p(x.metalnessMap.channel),roughnessMapUv:E&&p(x.roughnessMap.channel),anisotropyMapUv:me&&p(x.anisotropyMap.channel),clearcoatMapUv:Ze&&p(x.clearcoatMap.channel),clearcoatNormalMapUv:re&&p(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ge&&p(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Ne&&p(x.iridescenceMap.channel),iridescenceThicknessMapUv:Ie&&p(x.iridescenceThicknessMap.channel),sheenColorMapUv:ve&&p(x.sheenColorMap.channel),sheenRoughnessMapUv:Ye&&p(x.sheenRoughnessMap.channel),specularMapUv:Be&&p(x.specularMap.channel),specularColorMapUv:at&&p(x.specularColorMap.channel),specularIntensityMapUv:D&&p(x.specularIntensityMap.channel),transmissionMapUv:de&&p(x.transmissionMap.channel),thicknessMapUv:j&&p(x.thicknessMap.channel),alphaMapUv:ce&&p(x.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(be||B),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!V.attributes.uv&&(Ve||ce),fog:!!Y,useFog:x.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:d,skinning:k.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:Me,morphTextureStride:Le,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:x.dithering,shadowMapEnabled:t.shadowMap.enabled&&I.length>0,shadowMapType:t.shadowMap.type,toneMapping:Qt,decodeVideoTexture:Ve&&x.map.isVideoTexture===!0&&tt.getTransfer(x.map.colorSpace)===dt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===mi,flipSided:x.side===ln,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:wt&&x.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(wt&&x.extensions.multiDraw===!0||Oe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Qe.vertexUv1s=u.has(1),Qe.vertexUv2s=u.has(2),Qe.vertexUv3s=u.has(3),u.clear(),Qe}function _(x){const S=[];if(x.shaderID?S.push(x.shaderID):(S.push(x.customVertexShaderID),S.push(x.customFragmentShaderID)),x.defines!==void 0)for(const I in x.defines)S.push(I),S.push(x.defines[I]);return x.isRawShaderMaterial===!1&&(g(S,x),M(S,x),S.push(t.outputColorSpace)),S.push(x.customProgramCacheKey),S.join()}function g(x,S){x.push(S.precision),x.push(S.outputColorSpace),x.push(S.envMapMode),x.push(S.envMapCubeUVHeight),x.push(S.mapUv),x.push(S.alphaMapUv),x.push(S.lightMapUv),x.push(S.aoMapUv),x.push(S.bumpMapUv),x.push(S.normalMapUv),x.push(S.displacementMapUv),x.push(S.emissiveMapUv),x.push(S.metalnessMapUv),x.push(S.roughnessMapUv),x.push(S.anisotropyMapUv),x.push(S.clearcoatMapUv),x.push(S.clearcoatNormalMapUv),x.push(S.clearcoatRoughnessMapUv),x.push(S.iridescenceMapUv),x.push(S.iridescenceThicknessMapUv),x.push(S.sheenColorMapUv),x.push(S.sheenRoughnessMapUv),x.push(S.specularMapUv),x.push(S.specularColorMapUv),x.push(S.specularIntensityMapUv),x.push(S.transmissionMapUv),x.push(S.thicknessMapUv),x.push(S.combine),x.push(S.fogExp2),x.push(S.sizeAttenuation),x.push(S.morphTargetsCount),x.push(S.morphAttributeCount),x.push(S.numDirLights),x.push(S.numPointLights),x.push(S.numSpotLights),x.push(S.numSpotLightMaps),x.push(S.numHemiLights),x.push(S.numRectAreaLights),x.push(S.numDirLightShadows),x.push(S.numPointLightShadows),x.push(S.numSpotLightShadows),x.push(S.numSpotLightShadowsWithMaps),x.push(S.numLightProbes),x.push(S.shadowMapType),x.push(S.toneMapping),x.push(S.numClippingPlanes),x.push(S.numClipIntersection),x.push(S.depthPacking)}function M(x,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),x.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reverseDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.alphaToCoverage&&a.enable(20),x.push(a.mask)}function P(x){const S=y[x.type];let I;if(S){const O=ti[S];I=vT.clone(O.uniforms)}else I=x.uniforms;return I}function A(x,S){let I;for(let O=0,k=c.length;O<k;O++){const Y=c[O];if(Y.cacheKey===S){I=Y,++I.usedTimes;break}}return I===void 0&&(I=new LC(t,S,x,o),c.push(I)),I}function w(x){if(--x.usedTimes===0){const S=c.indexOf(x);c[S]=c[c.length-1],c.pop(),x.destroy()}}function R(x){l.remove(x)}function X(){l.dispose()}return{getParameters:f,getProgramCacheKey:_,getUniforms:P,acquireProgram:A,releaseProgram:w,releaseShaderCache:R,programs:c,dispose:X}}function FC(){let t=new WeakMap;function e(s){return t.has(s)}function n(s){let a=t.get(s);return a===void 0&&(a={},t.set(s,a)),a}function i(s){t.delete(s)}function r(s,a,l){t.get(s)[a]=l}function o(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:o}}function OC(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function cg(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function fg(){const t=[];let e=0;const n=[],i=[],r=[];function o(){e=0,n.length=0,i.length=0,r.length=0}function s(h,d,m,v,y,p){let f=t[e];return f===void 0?(f={id:h.id,object:h,geometry:d,material:m,groupOrder:v,renderOrder:h.renderOrder,z:y,group:p},t[e]=f):(f.id=h.id,f.object=h,f.geometry=d,f.material=m,f.groupOrder=v,f.renderOrder=h.renderOrder,f.z=y,f.group=p),e++,f}function a(h,d,m,v,y,p){const f=s(h,d,m,v,y,p);m.transmission>0?i.push(f):m.transparent===!0?r.push(f):n.push(f)}function l(h,d,m,v,y,p){const f=s(h,d,m,v,y,p);m.transmission>0?i.unshift(f):m.transparent===!0?r.unshift(f):n.unshift(f)}function u(h,d){n.length>1&&n.sort(h||OC),i.length>1&&i.sort(d||cg),r.length>1&&r.sort(d||cg)}function c(){for(let h=e,d=t.length;h<d;h++){const m=t[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:n,transmissive:i,transparent:r,init:o,push:a,unshift:l,finish:c,sort:u}}function kC(){let t=new WeakMap;function e(i,r){const o=t.get(i);let s;return o===void 0?(s=new fg,t.set(i,[s])):r>=o.length?(s=new fg,o.push(s)):s=o[r],s}function n(){t=new WeakMap}return{get:e,dispose:n}}function BC(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new G,color:new it};break;case"SpotLight":n={position:new G,direction:new G,color:new it,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new G,color:new it,distance:0,decay:0};break;case"HemisphereLight":n={direction:new G,skyColor:new it,groundColor:new it};break;case"RectAreaLight":n={color:new it,position:new G,halfWidth:new G,halfHeight:new G};break}return t[e.id]=n,n}}}function HC(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let zC=0;function GC(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function VC(t){const e=new BC,n=HC(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new G);const r=new G,o=new Tt,s=new Tt;function a(u){let c=0,h=0,d=0;for(let X=0;X<9;X++)i.probe[X].set(0,0,0);let m=0,v=0,y=0,p=0,f=0,_=0,g=0,M=0,P=0,A=0,w=0;u.sort(GC);for(let X=0,x=u.length;X<x;X++){const S=u[X],I=S.color,O=S.intensity,k=S.distance,Y=S.shadow&&S.shadow.map?S.shadow.map.texture:null;if(S.isAmbientLight)c+=I.r*O,h+=I.g*O,d+=I.b*O;else if(S.isLightProbe){for(let V=0;V<9;V++)i.probe[V].addScaledVector(S.sh.coefficients[V],O);w++}else if(S.isDirectionalLight){const V=e.get(S);if(V.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){const K=S.shadow,L=n.get(S);L.shadowIntensity=K.intensity,L.shadowBias=K.bias,L.shadowNormalBias=K.normalBias,L.shadowRadius=K.radius,L.shadowMapSize=K.mapSize,i.directionalShadow[m]=L,i.directionalShadowMap[m]=Y,i.directionalShadowMatrix[m]=S.shadow.matrix,_++}i.directional[m]=V,m++}else if(S.isSpotLight){const V=e.get(S);V.position.setFromMatrixPosition(S.matrixWorld),V.color.copy(I).multiplyScalar(O),V.distance=k,V.coneCos=Math.cos(S.angle),V.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),V.decay=S.decay,i.spot[y]=V;const K=S.shadow;if(S.map&&(i.spotLightMap[P]=S.map,P++,K.updateMatrices(S),S.castShadow&&A++),i.spotLightMatrix[y]=K.matrix,S.castShadow){const L=n.get(S);L.shadowIntensity=K.intensity,L.shadowBias=K.bias,L.shadowNormalBias=K.normalBias,L.shadowRadius=K.radius,L.shadowMapSize=K.mapSize,i.spotShadow[y]=L,i.spotShadowMap[y]=Y,M++}y++}else if(S.isRectAreaLight){const V=e.get(S);V.color.copy(I).multiplyScalar(O),V.halfWidth.set(S.width*.5,0,0),V.halfHeight.set(0,S.height*.5,0),i.rectArea[p]=V,p++}else if(S.isPointLight){const V=e.get(S);if(V.color.copy(S.color).multiplyScalar(S.intensity),V.distance=S.distance,V.decay=S.decay,S.castShadow){const K=S.shadow,L=n.get(S);L.shadowIntensity=K.intensity,L.shadowBias=K.bias,L.shadowNormalBias=K.normalBias,L.shadowRadius=K.radius,L.shadowMapSize=K.mapSize,L.shadowCameraNear=K.camera.near,L.shadowCameraFar=K.camera.far,i.pointShadow[v]=L,i.pointShadowMap[v]=Y,i.pointShadowMatrix[v]=S.shadow.matrix,g++}i.point[v]=V,v++}else if(S.isHemisphereLight){const V=e.get(S);V.skyColor.copy(S.color).multiplyScalar(O),V.groundColor.copy(S.groundColor).multiplyScalar(O),i.hemi[f]=V,f++}}p>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=le.LTC_FLOAT_1,i.rectAreaLTC2=le.LTC_FLOAT_2):(i.rectAreaLTC1=le.LTC_HALF_1,i.rectAreaLTC2=le.LTC_HALF_2)),i.ambient[0]=c,i.ambient[1]=h,i.ambient[2]=d;const R=i.hash;(R.directionalLength!==m||R.pointLength!==v||R.spotLength!==y||R.rectAreaLength!==p||R.hemiLength!==f||R.numDirectionalShadows!==_||R.numPointShadows!==g||R.numSpotShadows!==M||R.numSpotMaps!==P||R.numLightProbes!==w)&&(i.directional.length=m,i.spot.length=y,i.rectArea.length=p,i.point.length=v,i.hemi.length=f,i.directionalShadow.length=_,i.directionalShadowMap.length=_,i.pointShadow.length=g,i.pointShadowMap.length=g,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=_,i.pointShadowMatrix.length=g,i.spotLightMatrix.length=M+P-A,i.spotLightMap.length=P,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=w,R.directionalLength=m,R.pointLength=v,R.spotLength=y,R.rectAreaLength=p,R.hemiLength=f,R.numDirectionalShadows=_,R.numPointShadows=g,R.numSpotShadows=M,R.numSpotMaps=P,R.numLightProbes=w,i.version=zC++)}function l(u,c){let h=0,d=0,m=0,v=0,y=0;const p=c.matrixWorldInverse;for(let f=0,_=u.length;f<_;f++){const g=u[f];if(g.isDirectionalLight){const M=i.directional[h];M.direction.setFromMatrixPosition(g.matrixWorld),r.setFromMatrixPosition(g.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(p),h++}else if(g.isSpotLight){const M=i.spot[m];M.position.setFromMatrixPosition(g.matrixWorld),M.position.applyMatrix4(p),M.direction.setFromMatrixPosition(g.matrixWorld),r.setFromMatrixPosition(g.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(p),m++}else if(g.isRectAreaLight){const M=i.rectArea[v];M.position.setFromMatrixPosition(g.matrixWorld),M.position.applyMatrix4(p),s.identity(),o.copy(g.matrixWorld),o.premultiply(p),s.extractRotation(o),M.halfWidth.set(g.width*.5,0,0),M.halfHeight.set(0,g.height*.5,0),M.halfWidth.applyMatrix4(s),M.halfHeight.applyMatrix4(s),v++}else if(g.isPointLight){const M=i.point[d];M.position.setFromMatrixPosition(g.matrixWorld),M.position.applyMatrix4(p),d++}else if(g.isHemisphereLight){const M=i.hemi[y];M.direction.setFromMatrixPosition(g.matrixWorld),M.direction.transformDirection(p),y++}}}return{setup:a,setupView:l,state:i}}function dg(t){const e=new VC(t),n=[],i=[];function r(c){u.camera=c,n.length=0,i.length=0}function o(c){n.push(c)}function s(c){i.push(c)}function a(){e.setup(n)}function l(c){e.setupView(n,c)}const u={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:u,setupLights:a,setupLightsView:l,pushLight:o,pushShadow:s}}function WC(t){let e=new WeakMap;function n(r,o=0){const s=e.get(r);let a;return s===void 0?(a=new dg(t),e.set(r,[a])):o>=s.length?(a=new dg(t),s.push(a)):a=s[o],a}function i(){e=new WeakMap}return{get:n,dispose:i}}class jC extends na{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=kM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class XC extends na{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const YC=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,$C=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function qC(t,e,n){let i=new O_;const r=new st,o=new st,s=new Mt,a=new jC({depthPacking:BM}),l=new XC,u={},c=n.maxTextureSize,h={[or]:ln,[ln]:or,[mi]:mi},d=new sr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new st},radius:{value:4}},vertexShader:YC,fragmentShader:$C}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const v=new Pi;v.setAttribute("position",new Yn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new yi(v,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=f_;let f=this.type;this.render=function(A,w,R){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||A.length===0)return;const X=t.getRenderTarget(),x=t.getActiveCubeFace(),S=t.getActiveMipmapLevel(),I=t.state;I.setBlending(tr),I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const O=f!==di&&this.type===di,k=f===di&&this.type!==di;for(let Y=0,V=A.length;Y<V;Y++){const K=A[Y],L=K.shadow;if(L===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(L.autoUpdate===!1&&L.needsUpdate===!1)continue;r.copy(L.mapSize);const $=L.getFrameExtents();if(r.multiply($),o.copy(L.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(o.x=Math.floor(c/$.x),r.x=o.x*$.x,L.mapSize.x=o.x),r.y>c&&(o.y=Math.floor(c/$.y),r.y=o.y*$.y,L.mapSize.y=o.y)),L.map===null||O===!0||k===!0){const oe=this.type!==di?{minFilter:bn,magFilter:bn}:{};L.map!==null&&L.map.dispose(),L.map=new Gr(r.x,r.y,oe),L.map.texture.name=K.name+".shadowMap",L.camera.updateProjectionMatrix()}t.setRenderTarget(L.map),t.clear();const Q=L.getViewportCount();for(let oe=0;oe<Q;oe++){const Me=L.getViewport(oe);s.set(o.x*Me.x,o.y*Me.y,o.x*Me.z,o.y*Me.w),I.viewport(s),L.updateMatrices(K,oe),i=L.getFrustum(),M(w,R,L.camera,K,this.type)}L.isPointLightShadow!==!0&&this.type===di&&_(L,R),L.needsUpdate=!1}f=this.type,p.needsUpdate=!1,t.setRenderTarget(X,x,S)};function _(A,w){const R=e.update(y);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,m.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Gr(r.x,r.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,t.setRenderTarget(A.mapPass),t.clear(),t.renderBufferDirect(w,null,R,d,y,null),m.uniforms.shadow_pass.value=A.mapPass.texture,m.uniforms.resolution.value=A.mapSize,m.uniforms.radius.value=A.radius,t.setRenderTarget(A.map),t.clear(),t.renderBufferDirect(w,null,R,m,y,null)}function g(A,w,R,X){let x=null;const S=R.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(S!==void 0)x=S;else if(x=R.isPointLight===!0?l:a,t.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const I=x.uuid,O=w.uuid;let k=u[I];k===void 0&&(k={},u[I]=k);let Y=k[O];Y===void 0&&(Y=x.clone(),k[O]=Y,w.addEventListener("dispose",P)),x=Y}if(x.visible=w.visible,x.wireframe=w.wireframe,X===di?x.side=w.shadowSide!==null?w.shadowSide:w.side:x.side=w.shadowSide!==null?w.shadowSide:h[w.side],x.alphaMap=w.alphaMap,x.alphaTest=w.alphaTest,x.map=w.map,x.clipShadows=w.clipShadows,x.clippingPlanes=w.clippingPlanes,x.clipIntersection=w.clipIntersection,x.displacementMap=w.displacementMap,x.displacementScale=w.displacementScale,x.displacementBias=w.displacementBias,x.wireframeLinewidth=w.wireframeLinewidth,x.linewidth=w.linewidth,R.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const I=t.properties.get(x);I.light=R}return x}function M(A,w,R,X,x){if(A.visible===!1)return;if(A.layers.test(w.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&x===di)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,A.matrixWorld);const O=e.update(A),k=A.material;if(Array.isArray(k)){const Y=O.groups;for(let V=0,K=Y.length;V<K;V++){const L=Y[V],$=k[L.materialIndex];if($&&$.visible){const Q=g(A,$,X,x);A.onBeforeShadow(t,A,w,R,O,Q,L),t.renderBufferDirect(R,null,O,Q,A,L),A.onAfterShadow(t,A,w,R,O,Q,L)}}}else if(k.visible){const Y=g(A,k,X,x);A.onBeforeShadow(t,A,w,R,O,Y,null),t.renderBufferDirect(R,null,O,Y,A,null),A.onAfterShadow(t,A,w,R,O,Y,null)}}const I=A.children;for(let O=0,k=I.length;O<k;O++)M(I[O],w,R,X,x)}function P(A){A.target.removeEventListener("dispose",P);for(const R in u){const X=u[R],x=A.target.uuid;x in X&&(X[x].dispose(),delete X[x])}}}const KC={[jf]:Xf,[Yf]:Kf,[$f]:Zf,[zo]:qf,[Xf]:jf,[Kf]:Yf,[Zf]:$f,[qf]:zo};function ZC(t){function e(){let D=!1;const de=new Mt;let j=null;const J=new Mt(0,0,0,0);return{setMask:function(ce){j!==ce&&!D&&(t.colorMask(ce,ce,ce,ce),j=ce)},setLocked:function(ce){D=ce},setClear:function(ce,he,qe,wt,Qt){Qt===!0&&(ce*=wt,he*=wt,qe*=wt),de.set(ce,he,qe,wt),J.equals(de)===!1&&(t.clearColor(ce,he,qe,wt),J.copy(de))},reset:function(){D=!1,j=null,J.set(-1,0,0,0)}}}function n(){let D=!1,de=!1,j=null,J=null,ce=null;return{setReversed:function(he){de=he},setTest:function(he){he?ae(t.DEPTH_TEST):ie(t.DEPTH_TEST)},setMask:function(he){j!==he&&!D&&(t.depthMask(he),j=he)},setFunc:function(he){if(de&&(he=KC[he]),J!==he){switch(he){case jf:t.depthFunc(t.NEVER);break;case Xf:t.depthFunc(t.ALWAYS);break;case Yf:t.depthFunc(t.LESS);break;case zo:t.depthFunc(t.LEQUAL);break;case $f:t.depthFunc(t.EQUAL);break;case qf:t.depthFunc(t.GEQUAL);break;case Kf:t.depthFunc(t.GREATER);break;case Zf:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}J=he}},setLocked:function(he){D=he},setClear:function(he){ce!==he&&(t.clearDepth(he),ce=he)},reset:function(){D=!1,j=null,J=null,ce=null}}}function i(){let D=!1,de=null,j=null,J=null,ce=null,he=null,qe=null,wt=null,Qt=null;return{setTest:function(Qe){D||(Qe?ae(t.STENCIL_TEST):ie(t.STENCIL_TEST))},setMask:function(Qe){de!==Qe&&!D&&(t.stencilMask(Qe),de=Qe)},setFunc:function(Qe,Jt,si){(j!==Qe||J!==Jt||ce!==si)&&(t.stencilFunc(Qe,Jt,si),j=Qe,J=Jt,ce=si)},setOp:function(Qe,Jt,si){(he!==Qe||qe!==Jt||wt!==si)&&(t.stencilOp(Qe,Jt,si),he=Qe,qe=Jt,wt=si)},setLocked:function(Qe){D=Qe},setClear:function(Qe){Qt!==Qe&&(t.clearStencil(Qe),Qt=Qe)},reset:function(){D=!1,de=null,j=null,J=null,ce=null,he=null,qe=null,wt=null,Qt=null}}}const r=new e,o=new n,s=new i,a=new WeakMap,l=new WeakMap;let u={},c={},h=new WeakMap,d=[],m=null,v=!1,y=null,p=null,f=null,_=null,g=null,M=null,P=null,A=new it(0,0,0),w=0,R=!1,X=null,x=null,S=null,I=null,O=null;const k=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,V=0;const K=t.getParameter(t.VERSION);K.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(K)[1]),Y=V>=1):K.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),Y=V>=2);let L=null,$={};const Q=t.getParameter(t.SCISSOR_BOX),oe=t.getParameter(t.VIEWPORT),Me=new Mt().fromArray(Q),Le=new Mt().fromArray(oe);function W(D,de,j,J){const ce=new Uint8Array(4),he=t.createTexture();t.bindTexture(D,he),t.texParameteri(D,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(D,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let qe=0;qe<j;qe++)D===t.TEXTURE_3D||D===t.TEXTURE_2D_ARRAY?t.texImage3D(de,0,t.RGBA,1,1,J,0,t.RGBA,t.UNSIGNED_BYTE,ce):t.texImage2D(de+qe,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ce);return he}const ee={};ee[t.TEXTURE_2D]=W(t.TEXTURE_2D,t.TEXTURE_2D,1),ee[t.TEXTURE_CUBE_MAP]=W(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),ee[t.TEXTURE_2D_ARRAY]=W(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),ee[t.TEXTURE_3D]=W(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),s.setClear(0),ae(t.DEPTH_TEST),o.setFunc(zo),Ce(!1),He(ym),ae(t.CULL_FACE),b(tr);function ae(D){u[D]!==!0&&(t.enable(D),u[D]=!0)}function ie(D){u[D]!==!1&&(t.disable(D),u[D]=!1)}function _e(D,de){return c[D]!==de?(t.bindFramebuffer(D,de),c[D]=de,D===t.DRAW_FRAMEBUFFER&&(c[t.FRAMEBUFFER]=de),D===t.FRAMEBUFFER&&(c[t.DRAW_FRAMEBUFFER]=de),!0):!1}function Se(D,de){let j=d,J=!1;if(D){j=h.get(de),j===void 0&&(j=[],h.set(de,j));const ce=D.textures;if(j.length!==ce.length||j[0]!==t.COLOR_ATTACHMENT0){for(let he=0,qe=ce.length;he<qe;he++)j[he]=t.COLOR_ATTACHMENT0+he;j.length=ce.length,J=!0}}else j[0]!==t.BACK&&(j[0]=t.BACK,J=!0);J&&t.drawBuffers(j)}function Oe(D){return m!==D?(t.useProgram(D),m=D,!0):!1}const Ve={[Tr]:t.FUNC_ADD,[fM]:t.FUNC_SUBTRACT,[dM]:t.FUNC_REVERSE_SUBTRACT};Ve[hM]=t.MIN,Ve[pM]=t.MAX;const Fe={[mM]:t.ZERO,[gM]:t.ONE,[vM]:t.SRC_COLOR,[Vf]:t.SRC_ALPHA,[MM]:t.SRC_ALPHA_SATURATE,[SM]:t.DST_COLOR,[xM]:t.DST_ALPHA,[_M]:t.ONE_MINUS_SRC_COLOR,[Wf]:t.ONE_MINUS_SRC_ALPHA,[EM]:t.ONE_MINUS_DST_COLOR,[yM]:t.ONE_MINUS_DST_ALPHA,[TM]:t.CONSTANT_COLOR,[wM]:t.ONE_MINUS_CONSTANT_COLOR,[AM]:t.CONSTANT_ALPHA,[CM]:t.ONE_MINUS_CONSTANT_ALPHA};function b(D,de,j,J,ce,he,qe,wt,Qt,Qe){if(D===tr){v===!0&&(ie(t.BLEND),v=!1);return}if(v===!1&&(ae(t.BLEND),v=!0),D!==cM){if(D!==y||Qe!==R){if((p!==Tr||g!==Tr)&&(t.blendEquation(t.FUNC_ADD),p=Tr,g=Tr),Qe)switch(D){case Ro:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Sm:t.blendFunc(t.ONE,t.ONE);break;case Em:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Mm:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Ro:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Sm:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Em:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Mm:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}f=null,_=null,M=null,P=null,A.set(0,0,0),w=0,y=D,R=Qe}return}ce=ce||de,he=he||j,qe=qe||J,(de!==p||ce!==g)&&(t.blendEquationSeparate(Ve[de],Ve[ce]),p=de,g=ce),(j!==f||J!==_||he!==M||qe!==P)&&(t.blendFuncSeparate(Fe[j],Fe[J],Fe[he],Fe[qe]),f=j,_=J,M=he,P=qe),(wt.equals(A)===!1||Qt!==w)&&(t.blendColor(wt.r,wt.g,wt.b,Qt),A.copy(wt),w=Qt),y=D,R=!1}function ke(D,de){D.side===mi?ie(t.CULL_FACE):ae(t.CULL_FACE);let j=D.side===ln;de&&(j=!j),Ce(j),D.blending===Ro&&D.transparent===!1?b(tr):b(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),o.setFunc(D.depthFunc),o.setTest(D.depthTest),o.setMask(D.depthWrite),r.setMask(D.colorWrite);const J=D.stencilWrite;s.setTest(J),J&&(s.setMask(D.stencilWriteMask),s.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),s.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),ut(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?ae(t.SAMPLE_ALPHA_TO_COVERAGE):ie(t.SAMPLE_ALPHA_TO_COVERAGE)}function Ce(D){X!==D&&(D?t.frontFace(t.CW):t.frontFace(t.CCW),X=D)}function He(D){D!==aM?(ae(t.CULL_FACE),D!==x&&(D===ym?t.cullFace(t.BACK):D===lM?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):ie(t.CULL_FACE),x=D}function be(D){D!==S&&(Y&&t.lineWidth(D),S=D)}function ut(D,de,j){D?(ae(t.POLYGON_OFFSET_FILL),(I!==de||O!==j)&&(t.polygonOffset(de,j),I=de,O=j)):ie(t.POLYGON_OFFSET_FILL)}function De(D){D?ae(t.SCISSOR_TEST):ie(t.SCISSOR_TEST)}function C(D){D===void 0&&(D=t.TEXTURE0+k-1),L!==D&&(t.activeTexture(D),L=D)}function E(D,de,j){j===void 0&&(L===null?j=t.TEXTURE0+k-1:j=L);let J=$[j];J===void 0&&(J={type:void 0,texture:void 0},$[j]=J),(J.type!==D||J.texture!==de)&&(L!==j&&(t.activeTexture(j),L=j),t.bindTexture(D,de||ee[D]),J.type=D,J.texture=de)}function B(){const D=$[L];D!==void 0&&D.type!==void 0&&(t.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function Z(){try{t.compressedTexImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function te(){try{t.compressedTexImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function q(){try{t.texSubImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Te(){try{t.texSubImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ue(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function me(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ze(){try{t.texStorage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function re(){try{t.texStorage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ge(){try{t.texImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ne(){try{t.texImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ie(D){Me.equals(D)===!1&&(t.scissor(D.x,D.y,D.z,D.w),Me.copy(D))}function ve(D){Le.equals(D)===!1&&(t.viewport(D.x,D.y,D.z,D.w),Le.copy(D))}function Ye(D,de){let j=l.get(de);j===void 0&&(j=new WeakMap,l.set(de,j));let J=j.get(D);J===void 0&&(J=t.getUniformBlockIndex(de,D.name),j.set(D,J))}function Be(D,de){const J=l.get(de).get(D);a.get(de)!==J&&(t.uniformBlockBinding(de,J,D.__bindingPointIndex),a.set(de,J))}function at(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),u={},L=null,$={},c={},h=new WeakMap,d=[],m=null,v=!1,y=null,p=null,f=null,_=null,g=null,M=null,P=null,A=new it(0,0,0),w=0,R=!1,X=null,x=null,S=null,I=null,O=null,Me.set(0,0,t.canvas.width,t.canvas.height),Le.set(0,0,t.canvas.width,t.canvas.height),r.reset(),o.reset(),s.reset()}return{buffers:{color:r,depth:o,stencil:s},enable:ae,disable:ie,bindFramebuffer:_e,drawBuffers:Se,useProgram:Oe,setBlending:b,setMaterial:ke,setFlipSided:Ce,setCullFace:He,setLineWidth:be,setPolygonOffset:ut,setScissorTest:De,activeTexture:C,bindTexture:E,unbindTexture:B,compressedTexImage2D:Z,compressedTexImage3D:te,texImage2D:ge,texImage3D:Ne,updateUBOMapping:Ye,uniformBlockBinding:Be,texStorage2D:Ze,texStorage3D:re,texSubImage2D:q,texSubImage3D:Te,compressedTexSubImage2D:ue,compressedTexSubImage3D:me,scissor:Ie,viewport:ve,reset:at}}function hg(t,e,n,i){const r=QC(i);switch(n){case v_:return t*e;case x_:return t*e;case y_:return t*e*2;case S_:return t*e/r.components*r.byteLength;case kh:return t*e/r.components*r.byteLength;case E_:return t*e*2/r.components*r.byteLength;case Bh:return t*e*2/r.components*r.byteLength;case __:return t*e*3/r.components*r.byteLength;case Wn:return t*e*4/r.components*r.byteLength;case Hh:return t*e*4/r.components*r.byteLength;case hl:case pl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case ml:case gl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case id:case od:return Math.max(t,16)*Math.max(e,8)/4;case nd:case rd:return Math.max(t,8)*Math.max(e,8)/2;case sd:case ad:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case ld:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case ud:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case cd:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case fd:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case dd:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case hd:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case pd:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case md:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case gd:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case vd:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case _d:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case xd:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case yd:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Sd:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Ed:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case vl:case Md:case Td:return Math.ceil(t/4)*Math.ceil(e/4)*16;case M_:case wd:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Ad:case Cd:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function QC(t){switch(t){case Ci:case p_:return{byteLength:1,components:1};case Vs:case m_:case Qs:return{byteLength:2,components:1};case Fh:case Oh:return{byteLength:2,components:4};case zr:case Uh:case _i:return{byteLength:4,components:1};case g_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}function JC(t,e,n,i,r,o,s){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new st,c=new WeakMap;let h;const d=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(C,E){return m?new OffscreenCanvas(C,E):$l("canvas")}function y(C,E,B){let Z=1;const te=De(C);if((te.width>B||te.height>B)&&(Z=B/Math.max(te.width,te.height)),Z<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const q=Math.floor(Z*te.width),Te=Math.floor(Z*te.height);h===void 0&&(h=v(q,Te));const ue=E?v(q,Te):h;return ue.width=q,ue.height=Te,ue.getContext("2d").drawImage(C,0,0,q,Te),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+q+"x"+Te+")."),ue}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),C;return C}function p(C){return C.generateMipmaps&&C.minFilter!==bn&&C.minFilter!==Gn}function f(C){t.generateMipmap(C)}function _(C,E,B,Z,te=!1){if(C!==null){if(t[C]!==void 0)return t[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let q=E;if(E===t.RED&&(B===t.FLOAT&&(q=t.R32F),B===t.HALF_FLOAT&&(q=t.R16F),B===t.UNSIGNED_BYTE&&(q=t.R8)),E===t.RED_INTEGER&&(B===t.UNSIGNED_BYTE&&(q=t.R8UI),B===t.UNSIGNED_SHORT&&(q=t.R16UI),B===t.UNSIGNED_INT&&(q=t.R32UI),B===t.BYTE&&(q=t.R8I),B===t.SHORT&&(q=t.R16I),B===t.INT&&(q=t.R32I)),E===t.RG&&(B===t.FLOAT&&(q=t.RG32F),B===t.HALF_FLOAT&&(q=t.RG16F),B===t.UNSIGNED_BYTE&&(q=t.RG8)),E===t.RG_INTEGER&&(B===t.UNSIGNED_BYTE&&(q=t.RG8UI),B===t.UNSIGNED_SHORT&&(q=t.RG16UI),B===t.UNSIGNED_INT&&(q=t.RG32UI),B===t.BYTE&&(q=t.RG8I),B===t.SHORT&&(q=t.RG16I),B===t.INT&&(q=t.RG32I)),E===t.RGB_INTEGER&&(B===t.UNSIGNED_BYTE&&(q=t.RGB8UI),B===t.UNSIGNED_SHORT&&(q=t.RGB16UI),B===t.UNSIGNED_INT&&(q=t.RGB32UI),B===t.BYTE&&(q=t.RGB8I),B===t.SHORT&&(q=t.RGB16I),B===t.INT&&(q=t.RGB32I)),E===t.RGBA_INTEGER&&(B===t.UNSIGNED_BYTE&&(q=t.RGBA8UI),B===t.UNSIGNED_SHORT&&(q=t.RGBA16UI),B===t.UNSIGNED_INT&&(q=t.RGBA32UI),B===t.BYTE&&(q=t.RGBA8I),B===t.SHORT&&(q=t.RGBA16I),B===t.INT&&(q=t.RGBA32I)),E===t.RGB&&B===t.UNSIGNED_INT_5_9_9_9_REV&&(q=t.RGB9_E5),E===t.RGBA){const Te=te?Wl:tt.getTransfer(Z);B===t.FLOAT&&(q=t.RGBA32F),B===t.HALF_FLOAT&&(q=t.RGBA16F),B===t.UNSIGNED_BYTE&&(q=Te===dt?t.SRGB8_ALPHA8:t.RGBA8),B===t.UNSIGNED_SHORT_4_4_4_4&&(q=t.RGBA4),B===t.UNSIGNED_SHORT_5_5_5_1&&(q=t.RGB5_A1)}return(q===t.R16F||q===t.R32F||q===t.RG16F||q===t.RG32F||q===t.RGBA16F||q===t.RGBA32F)&&e.get("EXT_color_buffer_float"),q}function g(C,E){let B;return C?E===null||E===zr||E===Wo?B=t.DEPTH24_STENCIL8:E===_i?B=t.DEPTH32F_STENCIL8:E===Vs&&(B=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===zr||E===Wo?B=t.DEPTH_COMPONENT24:E===_i?B=t.DEPTH_COMPONENT32F:E===Vs&&(B=t.DEPTH_COMPONENT16),B}function M(C,E){return p(C)===!0||C.isFramebufferTexture&&C.minFilter!==bn&&C.minFilter!==Gn?Math.log2(Math.max(E.width,E.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?E.mipmaps.length:1}function P(C){const E=C.target;E.removeEventListener("dispose",P),w(E),E.isVideoTexture&&c.delete(E)}function A(C){const E=C.target;E.removeEventListener("dispose",A),X(E)}function w(C){const E=i.get(C);if(E.__webglInit===void 0)return;const B=C.source,Z=d.get(B);if(Z){const te=Z[E.__cacheKey];te.usedTimes--,te.usedTimes===0&&R(C),Object.keys(Z).length===0&&d.delete(B)}i.remove(C)}function R(C){const E=i.get(C);t.deleteTexture(E.__webglTexture);const B=C.source,Z=d.get(B);delete Z[E.__cacheKey],s.memory.textures--}function X(C){const E=i.get(C);if(C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(E.__webglFramebuffer[Z]))for(let te=0;te<E.__webglFramebuffer[Z].length;te++)t.deleteFramebuffer(E.__webglFramebuffer[Z][te]);else t.deleteFramebuffer(E.__webglFramebuffer[Z]);E.__webglDepthbuffer&&t.deleteRenderbuffer(E.__webglDepthbuffer[Z])}else{if(Array.isArray(E.__webglFramebuffer))for(let Z=0;Z<E.__webglFramebuffer.length;Z++)t.deleteFramebuffer(E.__webglFramebuffer[Z]);else t.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&t.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&t.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let Z=0;Z<E.__webglColorRenderbuffer.length;Z++)E.__webglColorRenderbuffer[Z]&&t.deleteRenderbuffer(E.__webglColorRenderbuffer[Z]);E.__webglDepthRenderbuffer&&t.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const B=C.textures;for(let Z=0,te=B.length;Z<te;Z++){const q=i.get(B[Z]);q.__webglTexture&&(t.deleteTexture(q.__webglTexture),s.memory.textures--),i.remove(B[Z])}i.remove(C)}let x=0;function S(){x=0}function I(){const C=x;return C>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+r.maxTextures),x+=1,C}function O(C){const E=[];return E.push(C.wrapS),E.push(C.wrapT),E.push(C.wrapR||0),E.push(C.magFilter),E.push(C.minFilter),E.push(C.anisotropy),E.push(C.internalFormat),E.push(C.format),E.push(C.type),E.push(C.generateMipmaps),E.push(C.premultiplyAlpha),E.push(C.flipY),E.push(C.unpackAlignment),E.push(C.colorSpace),E.join()}function k(C,E){const B=i.get(C);if(C.isVideoTexture&&be(C),C.isRenderTargetTexture===!1&&C.version>0&&B.__version!==C.version){const Z=C.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Le(B,C,E);return}}n.bindTexture(t.TEXTURE_2D,B.__webglTexture,t.TEXTURE0+E)}function Y(C,E){const B=i.get(C);if(C.version>0&&B.__version!==C.version){Le(B,C,E);return}n.bindTexture(t.TEXTURE_2D_ARRAY,B.__webglTexture,t.TEXTURE0+E)}function V(C,E){const B=i.get(C);if(C.version>0&&B.__version!==C.version){Le(B,C,E);return}n.bindTexture(t.TEXTURE_3D,B.__webglTexture,t.TEXTURE0+E)}function K(C,E){const B=i.get(C);if(C.version>0&&B.__version!==C.version){W(B,C,E);return}n.bindTexture(t.TEXTURE_CUBE_MAP,B.__webglTexture,t.TEXTURE0+E)}const L={[ed]:t.REPEAT,[Pr]:t.CLAMP_TO_EDGE,[td]:t.MIRRORED_REPEAT},$={[bn]:t.NEAREST,[OM]:t.NEAREST_MIPMAP_NEAREST,[wa]:t.NEAREST_MIPMAP_LINEAR,[Gn]:t.LINEAR,[lc]:t.LINEAR_MIPMAP_NEAREST,[Lr]:t.LINEAR_MIPMAP_LINEAR},Q={[GM]:t.NEVER,[$M]:t.ALWAYS,[VM]:t.LESS,[T_]:t.LEQUAL,[WM]:t.EQUAL,[YM]:t.GEQUAL,[jM]:t.GREATER,[XM]:t.NOTEQUAL};function oe(C,E){if(E.type===_i&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===Gn||E.magFilter===lc||E.magFilter===wa||E.magFilter===Lr||E.minFilter===Gn||E.minFilter===lc||E.minFilter===wa||E.minFilter===Lr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(C,t.TEXTURE_WRAP_S,L[E.wrapS]),t.texParameteri(C,t.TEXTURE_WRAP_T,L[E.wrapT]),(C===t.TEXTURE_3D||C===t.TEXTURE_2D_ARRAY)&&t.texParameteri(C,t.TEXTURE_WRAP_R,L[E.wrapR]),t.texParameteri(C,t.TEXTURE_MAG_FILTER,$[E.magFilter]),t.texParameteri(C,t.TEXTURE_MIN_FILTER,$[E.minFilter]),E.compareFunction&&(t.texParameteri(C,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(C,t.TEXTURE_COMPARE_FUNC,Q[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===bn||E.minFilter!==wa&&E.minFilter!==Lr||E.type===_i&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||i.get(E).__currentAnisotropy){const B=e.get("EXT_texture_filter_anisotropic");t.texParameterf(C,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,r.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy}}}function Me(C,E){let B=!1;C.__webglInit===void 0&&(C.__webglInit=!0,E.addEventListener("dispose",P));const Z=E.source;let te=d.get(Z);te===void 0&&(te={},d.set(Z,te));const q=O(E);if(q!==C.__cacheKey){te[q]===void 0&&(te[q]={texture:t.createTexture(),usedTimes:0},s.memory.textures++,B=!0),te[q].usedTimes++;const Te=te[C.__cacheKey];Te!==void 0&&(te[C.__cacheKey].usedTimes--,Te.usedTimes===0&&R(E)),C.__cacheKey=q,C.__webglTexture=te[q].texture}return B}function Le(C,E,B){let Z=t.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(Z=t.TEXTURE_2D_ARRAY),E.isData3DTexture&&(Z=t.TEXTURE_3D);const te=Me(C,E),q=E.source;n.bindTexture(Z,C.__webglTexture,t.TEXTURE0+B);const Te=i.get(q);if(q.version!==Te.__version||te===!0){n.activeTexture(t.TEXTURE0+B);const ue=tt.getPrimaries(tt.workingColorSpace),me=E.colorSpace===Vi?null:tt.getPrimaries(E.colorSpace),Ze=E.colorSpace===Vi||ue===me?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ze);let re=y(E.image,!1,r.maxTextureSize);re=ut(E,re);const ge=o.convert(E.format,E.colorSpace),Ne=o.convert(E.type);let Ie=_(E.internalFormat,ge,Ne,E.colorSpace,E.isVideoTexture);oe(Z,E);let ve;const Ye=E.mipmaps,Be=E.isVideoTexture!==!0,at=Te.__version===void 0||te===!0,D=q.dataReady,de=M(E,re);if(E.isDepthTexture)Ie=g(E.format===jo,E.type),at&&(Be?n.texStorage2D(t.TEXTURE_2D,1,Ie,re.width,re.height):n.texImage2D(t.TEXTURE_2D,0,Ie,re.width,re.height,0,ge,Ne,null));else if(E.isDataTexture)if(Ye.length>0){Be&&at&&n.texStorage2D(t.TEXTURE_2D,de,Ie,Ye[0].width,Ye[0].height);for(let j=0,J=Ye.length;j<J;j++)ve=Ye[j],Be?D&&n.texSubImage2D(t.TEXTURE_2D,j,0,0,ve.width,ve.height,ge,Ne,ve.data):n.texImage2D(t.TEXTURE_2D,j,Ie,ve.width,ve.height,0,ge,Ne,ve.data);E.generateMipmaps=!1}else Be?(at&&n.texStorage2D(t.TEXTURE_2D,de,Ie,re.width,re.height),D&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,re.width,re.height,ge,Ne,re.data)):n.texImage2D(t.TEXTURE_2D,0,Ie,re.width,re.height,0,ge,Ne,re.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Be&&at&&n.texStorage3D(t.TEXTURE_2D_ARRAY,de,Ie,Ye[0].width,Ye[0].height,re.depth);for(let j=0,J=Ye.length;j<J;j++)if(ve=Ye[j],E.format!==Wn)if(ge!==null)if(Be){if(D)if(E.layerUpdates.size>0){const ce=hg(ve.width,ve.height,E.format,E.type);for(const he of E.layerUpdates){const qe=ve.data.subarray(he*ce/ve.data.BYTES_PER_ELEMENT,(he+1)*ce/ve.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,j,0,0,he,ve.width,ve.height,1,ge,qe,0,0)}E.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,j,0,0,0,ve.width,ve.height,re.depth,ge,ve.data,0,0)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,j,Ie,ve.width,ve.height,re.depth,0,ve.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Be?D&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,j,0,0,0,ve.width,ve.height,re.depth,ge,Ne,ve.data):n.texImage3D(t.TEXTURE_2D_ARRAY,j,Ie,ve.width,ve.height,re.depth,0,ge,Ne,ve.data)}else{Be&&at&&n.texStorage2D(t.TEXTURE_2D,de,Ie,Ye[0].width,Ye[0].height);for(let j=0,J=Ye.length;j<J;j++)ve=Ye[j],E.format!==Wn?ge!==null?Be?D&&n.compressedTexSubImage2D(t.TEXTURE_2D,j,0,0,ve.width,ve.height,ge,ve.data):n.compressedTexImage2D(t.TEXTURE_2D,j,Ie,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Be?D&&n.texSubImage2D(t.TEXTURE_2D,j,0,0,ve.width,ve.height,ge,Ne,ve.data):n.texImage2D(t.TEXTURE_2D,j,Ie,ve.width,ve.height,0,ge,Ne,ve.data)}else if(E.isDataArrayTexture)if(Be){if(at&&n.texStorage3D(t.TEXTURE_2D_ARRAY,de,Ie,re.width,re.height,re.depth),D)if(E.layerUpdates.size>0){const j=hg(re.width,re.height,E.format,E.type);for(const J of E.layerUpdates){const ce=re.data.subarray(J*j/re.data.BYTES_PER_ELEMENT,(J+1)*j/re.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,J,re.width,re.height,1,ge,Ne,ce)}E.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,ge,Ne,re.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Ie,re.width,re.height,re.depth,0,ge,Ne,re.data);else if(E.isData3DTexture)Be?(at&&n.texStorage3D(t.TEXTURE_3D,de,Ie,re.width,re.height,re.depth),D&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,ge,Ne,re.data)):n.texImage3D(t.TEXTURE_3D,0,Ie,re.width,re.height,re.depth,0,ge,Ne,re.data);else if(E.isFramebufferTexture){if(at)if(Be)n.texStorage2D(t.TEXTURE_2D,de,Ie,re.width,re.height);else{let j=re.width,J=re.height;for(let ce=0;ce<de;ce++)n.texImage2D(t.TEXTURE_2D,ce,Ie,j,J,0,ge,Ne,null),j>>=1,J>>=1}}else if(Ye.length>0){if(Be&&at){const j=De(Ye[0]);n.texStorage2D(t.TEXTURE_2D,de,Ie,j.width,j.height)}for(let j=0,J=Ye.length;j<J;j++)ve=Ye[j],Be?D&&n.texSubImage2D(t.TEXTURE_2D,j,0,0,ge,Ne,ve):n.texImage2D(t.TEXTURE_2D,j,Ie,ge,Ne,ve);E.generateMipmaps=!1}else if(Be){if(at){const j=De(re);n.texStorage2D(t.TEXTURE_2D,de,Ie,j.width,j.height)}D&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ge,Ne,re)}else n.texImage2D(t.TEXTURE_2D,0,Ie,ge,Ne,re);p(E)&&f(Z),Te.__version=q.version,E.onUpdate&&E.onUpdate(E)}C.__version=E.version}function W(C,E,B){if(E.image.length!==6)return;const Z=Me(C,E),te=E.source;n.bindTexture(t.TEXTURE_CUBE_MAP,C.__webglTexture,t.TEXTURE0+B);const q=i.get(te);if(te.version!==q.__version||Z===!0){n.activeTexture(t.TEXTURE0+B);const Te=tt.getPrimaries(tt.workingColorSpace),ue=E.colorSpace===Vi?null:tt.getPrimaries(E.colorSpace),me=E.colorSpace===Vi||Te===ue?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);const Ze=E.isCompressedTexture||E.image[0].isCompressedTexture,re=E.image[0]&&E.image[0].isDataTexture,ge=[];for(let J=0;J<6;J++)!Ze&&!re?ge[J]=y(E.image[J],!0,r.maxCubemapSize):ge[J]=re?E.image[J].image:E.image[J],ge[J]=ut(E,ge[J]);const Ne=ge[0],Ie=o.convert(E.format,E.colorSpace),ve=o.convert(E.type),Ye=_(E.internalFormat,Ie,ve,E.colorSpace),Be=E.isVideoTexture!==!0,at=q.__version===void 0||Z===!0,D=te.dataReady;let de=M(E,Ne);oe(t.TEXTURE_CUBE_MAP,E);let j;if(Ze){Be&&at&&n.texStorage2D(t.TEXTURE_CUBE_MAP,de,Ye,Ne.width,Ne.height);for(let J=0;J<6;J++){j=ge[J].mipmaps;for(let ce=0;ce<j.length;ce++){const he=j[ce];E.format!==Wn?Ie!==null?Be?D&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,ce,0,0,he.width,he.height,Ie,he.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,ce,Ye,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Be?D&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,ce,0,0,he.width,he.height,Ie,ve,he.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,ce,Ye,he.width,he.height,0,Ie,ve,he.data)}}}else{if(j=E.mipmaps,Be&&at){j.length>0&&de++;const J=De(ge[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,de,Ye,J.width,J.height)}for(let J=0;J<6;J++)if(re){Be?D&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,ge[J].width,ge[J].height,Ie,ve,ge[J].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Ye,ge[J].width,ge[J].height,0,Ie,ve,ge[J].data);for(let ce=0;ce<j.length;ce++){const qe=j[ce].image[J].image;Be?D&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,ce+1,0,0,qe.width,qe.height,Ie,ve,qe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,ce+1,Ye,qe.width,qe.height,0,Ie,ve,qe.data)}}else{Be?D&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Ie,ve,ge[J]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Ye,Ie,ve,ge[J]);for(let ce=0;ce<j.length;ce++){const he=j[ce];Be?D&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,ce+1,0,0,Ie,ve,he.image[J]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,ce+1,Ye,Ie,ve,he.image[J])}}}p(E)&&f(t.TEXTURE_CUBE_MAP),q.__version=te.version,E.onUpdate&&E.onUpdate(E)}C.__version=E.version}function ee(C,E,B,Z,te,q){const Te=o.convert(B.format,B.colorSpace),ue=o.convert(B.type),me=_(B.internalFormat,Te,ue,B.colorSpace);if(!i.get(E).__hasExternalTextures){const re=Math.max(1,E.width>>q),ge=Math.max(1,E.height>>q);te===t.TEXTURE_3D||te===t.TEXTURE_2D_ARRAY?n.texImage3D(te,q,me,re,ge,E.depth,0,Te,ue,null):n.texImage2D(te,q,me,re,ge,0,Te,ue,null)}n.bindFramebuffer(t.FRAMEBUFFER,C),He(E)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Z,te,i.get(B).__webglTexture,0,Ce(E)):(te===t.TEXTURE_2D||te>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,Z,te,i.get(B).__webglTexture,q),n.bindFramebuffer(t.FRAMEBUFFER,null)}function ae(C,E,B){if(t.bindRenderbuffer(t.RENDERBUFFER,C),E.depthBuffer){const Z=E.depthTexture,te=Z&&Z.isDepthTexture?Z.type:null,q=g(E.stencilBuffer,te),Te=E.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ue=Ce(E);He(E)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ue,q,E.width,E.height):B?t.renderbufferStorageMultisample(t.RENDERBUFFER,ue,q,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,q,E.width,E.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Te,t.RENDERBUFFER,C)}else{const Z=E.textures;for(let te=0;te<Z.length;te++){const q=Z[te],Te=o.convert(q.format,q.colorSpace),ue=o.convert(q.type),me=_(q.internalFormat,Te,ue,q.colorSpace),Ze=Ce(E);B&&He(E)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ze,me,E.width,E.height):He(E)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ze,me,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,me,E.width,E.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function ie(C,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,C),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),k(E.depthTexture,0);const Z=i.get(E.depthTexture).__webglTexture,te=Ce(E);if(E.depthTexture.format===Po)He(E)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,Z,0,te):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,Z,0);else if(E.depthTexture.format===jo)He(E)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,Z,0,te):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function _e(C){const E=i.get(C),B=C.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==C.depthTexture){const Z=C.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),Z){const te=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,Z.removeEventListener("dispose",te)};Z.addEventListener("dispose",te),E.__depthDisposeCallback=te}E.__boundDepthTexture=Z}if(C.depthTexture&&!E.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");ie(E.__webglFramebuffer,C)}else if(B){E.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer[Z]),E.__webglDepthbuffer[Z]===void 0)E.__webglDepthbuffer[Z]=t.createRenderbuffer(),ae(E.__webglDepthbuffer[Z],C,!1);else{const te=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,q=E.__webglDepthbuffer[Z];t.bindRenderbuffer(t.RENDERBUFFER,q),t.framebufferRenderbuffer(t.FRAMEBUFFER,te,t.RENDERBUFFER,q)}}else if(n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=t.createRenderbuffer(),ae(E.__webglDepthbuffer,C,!1);else{const Z=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,te=E.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,te),t.framebufferRenderbuffer(t.FRAMEBUFFER,Z,t.RENDERBUFFER,te)}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Se(C,E,B){const Z=i.get(C);E!==void 0&&ee(Z.__webglFramebuffer,C,C.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),B!==void 0&&_e(C)}function Oe(C){const E=C.texture,B=i.get(C),Z=i.get(E);C.addEventListener("dispose",A);const te=C.textures,q=C.isWebGLCubeRenderTarget===!0,Te=te.length>1;if(Te||(Z.__webglTexture===void 0&&(Z.__webglTexture=t.createTexture()),Z.__version=E.version,s.memory.textures++),q){B.__webglFramebuffer=[];for(let ue=0;ue<6;ue++)if(E.mipmaps&&E.mipmaps.length>0){B.__webglFramebuffer[ue]=[];for(let me=0;me<E.mipmaps.length;me++)B.__webglFramebuffer[ue][me]=t.createFramebuffer()}else B.__webglFramebuffer[ue]=t.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){B.__webglFramebuffer=[];for(let ue=0;ue<E.mipmaps.length;ue++)B.__webglFramebuffer[ue]=t.createFramebuffer()}else B.__webglFramebuffer=t.createFramebuffer();if(Te)for(let ue=0,me=te.length;ue<me;ue++){const Ze=i.get(te[ue]);Ze.__webglTexture===void 0&&(Ze.__webglTexture=t.createTexture(),s.memory.textures++)}if(C.samples>0&&He(C)===!1){B.__webglMultisampledFramebuffer=t.createFramebuffer(),B.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let ue=0;ue<te.length;ue++){const me=te[ue];B.__webglColorRenderbuffer[ue]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,B.__webglColorRenderbuffer[ue]);const Ze=o.convert(me.format,me.colorSpace),re=o.convert(me.type),ge=_(me.internalFormat,Ze,re,me.colorSpace,C.isXRRenderTarget===!0),Ne=Ce(C);t.renderbufferStorageMultisample(t.RENDERBUFFER,Ne,ge,C.width,C.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ue,t.RENDERBUFFER,B.__webglColorRenderbuffer[ue])}t.bindRenderbuffer(t.RENDERBUFFER,null),C.depthBuffer&&(B.__webglDepthRenderbuffer=t.createRenderbuffer(),ae(B.__webglDepthRenderbuffer,C,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(q){n.bindTexture(t.TEXTURE_CUBE_MAP,Z.__webglTexture),oe(t.TEXTURE_CUBE_MAP,E);for(let ue=0;ue<6;ue++)if(E.mipmaps&&E.mipmaps.length>0)for(let me=0;me<E.mipmaps.length;me++)ee(B.__webglFramebuffer[ue][me],C,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,me);else ee(B.__webglFramebuffer[ue],C,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0);p(E)&&f(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Te){for(let ue=0,me=te.length;ue<me;ue++){const Ze=te[ue],re=i.get(Ze);n.bindTexture(t.TEXTURE_2D,re.__webglTexture),oe(t.TEXTURE_2D,Ze),ee(B.__webglFramebuffer,C,Ze,t.COLOR_ATTACHMENT0+ue,t.TEXTURE_2D,0),p(Ze)&&f(t.TEXTURE_2D)}n.unbindTexture()}else{let ue=t.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ue=C.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ue,Z.__webglTexture),oe(ue,E),E.mipmaps&&E.mipmaps.length>0)for(let me=0;me<E.mipmaps.length;me++)ee(B.__webglFramebuffer[me],C,E,t.COLOR_ATTACHMENT0,ue,me);else ee(B.__webglFramebuffer,C,E,t.COLOR_ATTACHMENT0,ue,0);p(E)&&f(ue),n.unbindTexture()}C.depthBuffer&&_e(C)}function Ve(C){const E=C.textures;for(let B=0,Z=E.length;B<Z;B++){const te=E[B];if(p(te)){const q=C.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,Te=i.get(te).__webglTexture;n.bindTexture(q,Te),f(q),n.unbindTexture()}}}const Fe=[],b=[];function ke(C){if(C.samples>0){if(He(C)===!1){const E=C.textures,B=C.width,Z=C.height;let te=t.COLOR_BUFFER_BIT;const q=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Te=i.get(C),ue=E.length>1;if(ue)for(let me=0;me<E.length;me++)n.bindFramebuffer(t.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+me,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Te.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+me,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Te.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Te.__webglFramebuffer);for(let me=0;me<E.length;me++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(te|=t.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(te|=t.STENCIL_BUFFER_BIT)),ue){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Te.__webglColorRenderbuffer[me]);const Ze=i.get(E[me]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Ze,0)}t.blitFramebuffer(0,0,B,Z,0,0,B,Z,te,t.NEAREST),l===!0&&(Fe.length=0,b.length=0,Fe.push(t.COLOR_ATTACHMENT0+me),C.depthBuffer&&C.resolveDepthBuffer===!1&&(Fe.push(q),b.push(q),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,b)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,Fe))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ue)for(let me=0;me<E.length;me++){n.bindFramebuffer(t.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+me,t.RENDERBUFFER,Te.__webglColorRenderbuffer[me]);const Ze=i.get(E[me]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Te.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+me,t.TEXTURE_2D,Ze,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Te.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const E=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[E])}}}function Ce(C){return Math.min(r.maxSamples,C.samples)}function He(C){const E=i.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function be(C){const E=s.render.frame;c.get(C)!==E&&(c.set(C,E),C.update())}function ut(C,E){const B=C.colorSpace,Z=C.format,te=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||B!==fr&&B!==Vi&&(tt.getTransfer(B)===dt?(Z!==Wn||te!==Ci)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),E}function De(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(u.width=C.naturalWidth||C.width,u.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(u.width=C.displayWidth,u.height=C.displayHeight):(u.width=C.width,u.height=C.height),u}this.allocateTextureUnit=I,this.resetTextureUnits=S,this.setTexture2D=k,this.setTexture2DArray=Y,this.setTexture3D=V,this.setTextureCube=K,this.rebindTextures=Se,this.setupRenderTarget=Oe,this.updateRenderTargetMipmap=Ve,this.updateMultisampleRenderTarget=ke,this.setupDepthRenderbuffer=_e,this.setupFrameBufferTexture=ee,this.useMultisampledRTT=He}function eb(t,e){function n(i,r=Vi){let o;const s=tt.getTransfer(r);if(i===Ci)return t.UNSIGNED_BYTE;if(i===Fh)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Oh)return t.UNSIGNED_SHORT_5_5_5_1;if(i===g_)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===p_)return t.BYTE;if(i===m_)return t.SHORT;if(i===Vs)return t.UNSIGNED_SHORT;if(i===Uh)return t.INT;if(i===zr)return t.UNSIGNED_INT;if(i===_i)return t.FLOAT;if(i===Qs)return t.HALF_FLOAT;if(i===v_)return t.ALPHA;if(i===__)return t.RGB;if(i===Wn)return t.RGBA;if(i===x_)return t.LUMINANCE;if(i===y_)return t.LUMINANCE_ALPHA;if(i===Po)return t.DEPTH_COMPONENT;if(i===jo)return t.DEPTH_STENCIL;if(i===S_)return t.RED;if(i===kh)return t.RED_INTEGER;if(i===E_)return t.RG;if(i===Bh)return t.RG_INTEGER;if(i===Hh)return t.RGBA_INTEGER;if(i===hl||i===pl||i===ml||i===gl)if(s===dt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(i===hl)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===pl)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ml)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===gl)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(i===hl)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===pl)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ml)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===gl)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===nd||i===id||i===rd||i===od)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(i===nd)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===id)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===rd)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===od)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===sd||i===ad||i===ld)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(i===sd||i===ad)return s===dt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(i===ld)return s===dt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===ud||i===cd||i===fd||i===dd||i===hd||i===pd||i===md||i===gd||i===vd||i===_d||i===xd||i===yd||i===Sd||i===Ed)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(i===ud)return s===dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===cd)return s===dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===fd)return s===dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===dd)return s===dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===hd)return s===dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===pd)return s===dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===md)return s===dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===gd)return s===dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===vd)return s===dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===_d)return s===dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===xd)return s===dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===yd)return s===dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Sd)return s===dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ed)return s===dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===vl||i===Md||i===Td)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(i===vl)return s===dt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Md)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Td)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===M_||i===wd||i===Ad||i===Cd)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(i===vl)return o.COMPRESSED_RED_RGTC1_EXT;if(i===wd)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Ad)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Cd)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Wo?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class tb extends An{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Xa extends cn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const nb={type:"move"};class kc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Xa,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Xa,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Xa,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,o=null,s=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){s=!0;for(const y of e.hand.values()){const p=n.getJointPose(y,i),f=this._getHandJoint(u,y);p!==null&&(f.matrix.fromArray(p.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=p.radius),f.visible=p!==null}const c=u.joints["index-finger-tip"],h=u.joints["thumb-tip"],d=c.position.distanceTo(h.position),m=.02,v=.005;u.inputState.pinching&&d>m+v?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&d<=m-v&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(o=n.getPose(e.gripSpace,i),o!==null&&(l.matrix.fromArray(o.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,o.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(o.linearVelocity)):l.hasLinearVelocity=!1,o.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(o.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&o!==null&&(r=o),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(nb)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=o!==null),u!==null&&(u.visible=s!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Xa;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const ib=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,rb=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class ob{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new un,o=e.properties.get(r);o.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new sr({vertexShader:ib,fragmentShader:rb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new yi(new wu(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class sb extends Ko{constructor(e,n){super();const i=this;let r=null,o=1,s=null,a="local-floor",l=1,u=null,c=null,h=null,d=null,m=null,v=null;const y=new ob,p=n.getContextAttributes();let f=null,_=null;const g=[],M=[],P=new st;let A=null;const w=new An;w.layers.enable(1),w.viewport=new Mt;const R=new An;R.layers.enable(2),R.viewport=new Mt;const X=[w,R],x=new tb;x.layers.enable(1),x.layers.enable(2);let S=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let ee=g[W];return ee===void 0&&(ee=new kc,g[W]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(W){let ee=g[W];return ee===void 0&&(ee=new kc,g[W]=ee),ee.getGripSpace()},this.getHand=function(W){let ee=g[W];return ee===void 0&&(ee=new kc,g[W]=ee),ee.getHandSpace()};function O(W){const ee=M.indexOf(W.inputSource);if(ee===-1)return;const ae=g[ee];ae!==void 0&&(ae.update(W.inputSource,W.frame,u||s),ae.dispatchEvent({type:W.type,data:W.inputSource}))}function k(){r.removeEventListener("select",O),r.removeEventListener("selectstart",O),r.removeEventListener("selectend",O),r.removeEventListener("squeeze",O),r.removeEventListener("squeezestart",O),r.removeEventListener("squeezeend",O),r.removeEventListener("end",k),r.removeEventListener("inputsourceschange",Y);for(let W=0;W<g.length;W++){const ee=M[W];ee!==null&&(M[W]=null,g[W].disconnect(ee))}S=null,I=null,y.reset(),e.setRenderTarget(f),m=null,d=null,h=null,r=null,_=null,Le.stop(),i.isPresenting=!1,e.setPixelRatio(A),e.setSize(P.width,P.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){o=W,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){a=W,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||s},this.setReferenceSpace=function(W){u=W},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return h},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(W){if(r=W,r!==null){if(f=e.getRenderTarget(),r.addEventListener("select",O),r.addEventListener("selectstart",O),r.addEventListener("selectend",O),r.addEventListener("squeeze",O),r.addEventListener("squeezestart",O),r.addEventListener("squeezeend",O),r.addEventListener("end",k),r.addEventListener("inputsourceschange",Y),p.xrCompatible!==!0&&await n.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(P),r.renderState.layers===void 0){const ee={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:o};m=new XRWebGLLayer(r,n,ee),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),_=new Gr(m.framebufferWidth,m.framebufferHeight,{format:Wn,type:Ci,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let ee=null,ae=null,ie=null;p.depth&&(ie=p.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ee=p.stencil?jo:Po,ae=p.stencil?Wo:zr);const _e={colorFormat:n.RGBA8,depthFormat:ie,scaleFactor:o};h=new XRWebGLBinding(r,n),d=h.createProjectionLayer(_e),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),_=new Gr(d.textureWidth,d.textureHeight,{format:Wn,type:Ci,depthTexture:new B_(d.textureWidth,d.textureHeight,ae,void 0,void 0,void 0,void 0,void 0,void 0,ee),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),u=null,s=await r.requestReferenceSpace(a),Le.setContext(r),Le.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function Y(W){for(let ee=0;ee<W.removed.length;ee++){const ae=W.removed[ee],ie=M.indexOf(ae);ie>=0&&(M[ie]=null,g[ie].disconnect(ae))}for(let ee=0;ee<W.added.length;ee++){const ae=W.added[ee];let ie=M.indexOf(ae);if(ie===-1){for(let Se=0;Se<g.length;Se++)if(Se>=M.length){M.push(ae),ie=Se;break}else if(M[Se]===null){M[Se]=ae,ie=Se;break}if(ie===-1)break}const _e=g[ie];_e&&_e.connect(ae)}}const V=new G,K=new G;function L(W,ee,ae){V.setFromMatrixPosition(ee.matrixWorld),K.setFromMatrixPosition(ae.matrixWorld);const ie=V.distanceTo(K),_e=ee.projectionMatrix.elements,Se=ae.projectionMatrix.elements,Oe=_e[14]/(_e[10]-1),Ve=_e[14]/(_e[10]+1),Fe=(_e[9]+1)/_e[5],b=(_e[9]-1)/_e[5],ke=(_e[8]-1)/_e[0],Ce=(Se[8]+1)/Se[0],He=Oe*ke,be=Oe*Ce,ut=ie/(-ke+Ce),De=ut*-ke;if(ee.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(De),W.translateZ(ut),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert(),_e[10]===-1)W.projectionMatrix.copy(ee.projectionMatrix),W.projectionMatrixInverse.copy(ee.projectionMatrixInverse);else{const C=Oe+ut,E=Ve+ut,B=He-De,Z=be+(ie-De),te=Fe*Ve/E*C,q=b*Ve/E*C;W.projectionMatrix.makePerspective(B,Z,te,q,C,E),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}}function $(W,ee){ee===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(ee.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(r===null)return;let ee=W.near,ae=W.far;y.texture!==null&&(y.depthNear>0&&(ee=y.depthNear),y.depthFar>0&&(ae=y.depthFar)),x.near=R.near=w.near=ee,x.far=R.far=w.far=ae,(S!==x.near||I!==x.far)&&(r.updateRenderState({depthNear:x.near,depthFar:x.far}),S=x.near,I=x.far);const ie=W.parent,_e=x.cameras;$(x,ie);for(let Se=0;Se<_e.length;Se++)$(_e[Se],ie);_e.length===2?L(x,w,R):x.projectionMatrix.copy(w.projectionMatrix),Q(W,x,ie)};function Q(W,ee,ae){ae===null?W.matrix.copy(ee.matrixWorld):(W.matrix.copy(ae.matrixWorld),W.matrix.invert(),W.matrix.multiply(ee.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(ee.projectionMatrix),W.projectionMatrixInverse.copy(ee.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=bd*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(d===null&&m===null))return l},this.setFoveation=function(W){l=W,d!==null&&(d.fixedFoveation=W),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=W)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(x)};let oe=null;function Me(W,ee){if(c=ee.getViewerPose(u||s),v=ee,c!==null){const ae=c.views;m!==null&&(e.setRenderTargetFramebuffer(_,m.framebuffer),e.setRenderTarget(_));let ie=!1;ae.length!==x.cameras.length&&(x.cameras.length=0,ie=!0);for(let Se=0;Se<ae.length;Se++){const Oe=ae[Se];let Ve=null;if(m!==null)Ve=m.getViewport(Oe);else{const b=h.getViewSubImage(d,Oe);Ve=b.viewport,Se===0&&(e.setRenderTargetTextures(_,b.colorTexture,d.ignoreDepthValues?void 0:b.depthStencilTexture),e.setRenderTarget(_))}let Fe=X[Se];Fe===void 0&&(Fe=new An,Fe.layers.enable(Se),Fe.viewport=new Mt,X[Se]=Fe),Fe.matrix.fromArray(Oe.transform.matrix),Fe.matrix.decompose(Fe.position,Fe.quaternion,Fe.scale),Fe.projectionMatrix.fromArray(Oe.projectionMatrix),Fe.projectionMatrixInverse.copy(Fe.projectionMatrix).invert(),Fe.viewport.set(Ve.x,Ve.y,Ve.width,Ve.height),Se===0&&(x.matrix.copy(Fe.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),ie===!0&&x.cameras.push(Fe)}const _e=r.enabledFeatures;if(_e&&_e.includes("depth-sensing")){const Se=h.getDepthInformation(ae[0]);Se&&Se.isValid&&Se.texture&&y.init(e,Se,r.renderState)}}for(let ae=0;ae<g.length;ae++){const ie=M[ae],_e=g[ae];ie!==null&&_e!==void 0&&_e.update(ie,ee,u||s)}oe&&oe(W,ee),ee.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ee}),v=null}const Le=new k_;Le.setAnimationLoop(Me),this.setAnimationLoop=function(W){oe=W},this.dispose=function(){}}}const xr=new bi,ab=new Tt;function lb(t,e){function n(p,f){p.matrixAutoUpdate===!0&&p.updateMatrix(),f.value.copy(p.matrix)}function i(p,f){f.color.getRGB(p.fogColor.value,D_(t)),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function r(p,f,_,g,M){f.isMeshBasicMaterial||f.isMeshLambertMaterial?o(p,f):f.isMeshToonMaterial?(o(p,f),h(p,f)):f.isMeshPhongMaterial?(o(p,f),c(p,f)):f.isMeshStandardMaterial?(o(p,f),d(p,f),f.isMeshPhysicalMaterial&&m(p,f,M)):f.isMeshMatcapMaterial?(o(p,f),v(p,f)):f.isMeshDepthMaterial?o(p,f):f.isMeshDistanceMaterial?(o(p,f),y(p,f)):f.isMeshNormalMaterial?o(p,f):f.isLineBasicMaterial?(s(p,f),f.isLineDashedMaterial&&a(p,f)):f.isPointsMaterial?l(p,f,_,g):f.isSpriteMaterial?u(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function o(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map,n(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,n(f.alphaMap,p.alphaMapTransform)),f.bumpMap&&(p.bumpMap.value=f.bumpMap,n(f.bumpMap,p.bumpMapTransform),p.bumpScale.value=f.bumpScale,f.side===ln&&(p.bumpScale.value*=-1)),f.normalMap&&(p.normalMap.value=f.normalMap,n(f.normalMap,p.normalMapTransform),p.normalScale.value.copy(f.normalScale),f.side===ln&&p.normalScale.value.negate()),f.displacementMap&&(p.displacementMap.value=f.displacementMap,n(f.displacementMap,p.displacementMapTransform),p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap,n(f.emissiveMap,p.emissiveMapTransform)),f.specularMap&&(p.specularMap.value=f.specularMap,n(f.specularMap,p.specularMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);const _=e.get(f),g=_.envMap,M=_.envMapRotation;g&&(p.envMap.value=g,xr.copy(M),xr.x*=-1,xr.y*=-1,xr.z*=-1,g.isCubeTexture&&g.isRenderTargetTexture===!1&&(xr.y*=-1,xr.z*=-1),p.envMapRotation.value.setFromMatrix4(ab.makeRotationFromEuler(xr)),p.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap&&(p.lightMap.value=f.lightMap,p.lightMapIntensity.value=f.lightMapIntensity,n(f.lightMap,p.lightMapTransform)),f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity,n(f.aoMap,p.aoMapTransform))}function s(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,f.map&&(p.map.value=f.map,n(f.map,p.mapTransform))}function a(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function l(p,f,_,g){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*_,p.scale.value=g*.5,f.map&&(p.map.value=f.map,n(f.map,p.uvTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,n(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function u(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map,n(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,n(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function c(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function h(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function d(p,f){p.metalness.value=f.metalness,f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap,n(f.metalnessMap,p.metalnessMapTransform)),p.roughness.value=f.roughness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap,n(f.roughnessMap,p.roughnessMapTransform)),f.envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function m(p,f,_){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap,n(f.sheenColorMap,p.sheenColorMapTransform)),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap,n(f.sheenRoughnessMap,p.sheenRoughnessMapTransform))),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap,n(f.clearcoatMap,p.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,n(f.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(p.clearcoatNormalMap.value=f.clearcoatNormalMap,n(f.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===ln&&p.clearcoatNormalScale.value.negate())),f.dispersion>0&&(p.dispersion.value=f.dispersion),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap,n(f.iridescenceMap,p.iridescenceMapTransform)),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap,n(f.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=_.texture,p.transmissionSamplerSize.value.set(_.width,_.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap,n(f.transmissionMap,p.transmissionMapTransform)),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap,n(f.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(p.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(p.anisotropyMap.value=f.anisotropyMap,n(f.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap,n(f.specularColorMap,p.specularColorMapTransform)),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap,n(f.specularIntensityMap,p.specularIntensityMapTransform))}function v(p,f){f.matcap&&(p.matcap.value=f.matcap)}function y(p,f){const _=e.get(f).light;p.referencePosition.value.setFromMatrixPosition(_.matrixWorld),p.nearDistance.value=_.shadow.camera.near,p.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function ub(t,e,n,i){let r={},o={},s=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,g){const M=g.program;i.uniformBlockBinding(_,M)}function u(_,g){let M=r[_.id];M===void 0&&(v(_),M=c(_),r[_.id]=M,_.addEventListener("dispose",p));const P=g.program;i.updateUBOMapping(_,P);const A=e.render.frame;o[_.id]!==A&&(d(_),o[_.id]=A)}function c(_){const g=h();_.__bindingPointIndex=g;const M=t.createBuffer(),P=_.__size,A=_.usage;return t.bindBuffer(t.UNIFORM_BUFFER,M),t.bufferData(t.UNIFORM_BUFFER,P,A),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,g,M),M}function h(){for(let _=0;_<a;_++)if(s.indexOf(_)===-1)return s.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(_){const g=r[_.id],M=_.uniforms,P=_.__cache;t.bindBuffer(t.UNIFORM_BUFFER,g);for(let A=0,w=M.length;A<w;A++){const R=Array.isArray(M[A])?M[A]:[M[A]];for(let X=0,x=R.length;X<x;X++){const S=R[X];if(m(S,A,X,P)===!0){const I=S.__offset,O=Array.isArray(S.value)?S.value:[S.value];let k=0;for(let Y=0;Y<O.length;Y++){const V=O[Y],K=y(V);typeof V=="number"||typeof V=="boolean"?(S.__data[0]=V,t.bufferSubData(t.UNIFORM_BUFFER,I+k,S.__data)):V.isMatrix3?(S.__data[0]=V.elements[0],S.__data[1]=V.elements[1],S.__data[2]=V.elements[2],S.__data[3]=0,S.__data[4]=V.elements[3],S.__data[5]=V.elements[4],S.__data[6]=V.elements[5],S.__data[7]=0,S.__data[8]=V.elements[6],S.__data[9]=V.elements[7],S.__data[10]=V.elements[8],S.__data[11]=0):(V.toArray(S.__data,k),k+=K.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,I,S.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function m(_,g,M,P){const A=_.value,w=g+"_"+M;if(P[w]===void 0)return typeof A=="number"||typeof A=="boolean"?P[w]=A:P[w]=A.clone(),!0;{const R=P[w];if(typeof A=="number"||typeof A=="boolean"){if(R!==A)return P[w]=A,!0}else if(R.equals(A)===!1)return R.copy(A),!0}return!1}function v(_){const g=_.uniforms;let M=0;const P=16;for(let w=0,R=g.length;w<R;w++){const X=Array.isArray(g[w])?g[w]:[g[w]];for(let x=0,S=X.length;x<S;x++){const I=X[x],O=Array.isArray(I.value)?I.value:[I.value];for(let k=0,Y=O.length;k<Y;k++){const V=O[k],K=y(V),L=M%P,$=L%K.boundary,Q=L+$;M+=$,Q!==0&&P-Q<K.storage&&(M+=P-Q),I.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=M,M+=K.storage}}}const A=M%P;return A>0&&(M+=P-A),_.__size=M,_.__cache={},this}function y(_){const g={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(g.boundary=4,g.storage=4):_.isVector2?(g.boundary=8,g.storage=8):_.isVector3||_.isColor?(g.boundary=16,g.storage=12):_.isVector4?(g.boundary=16,g.storage=16):_.isMatrix3?(g.boundary=48,g.storage=48):_.isMatrix4?(g.boundary=64,g.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),g}function p(_){const g=_.target;g.removeEventListener("dispose",p);const M=s.indexOf(g.__bindingPointIndex);s.splice(M,1),t.deleteBuffer(r[g.id]),delete r[g.id],delete o[g.id]}function f(){for(const _ in r)t.deleteBuffer(r[_]);s=[],r={},o={}}return{bind:l,update:u,dispose:f}}class cb{constructor(e={}){const{canvas:n=KM(),context:i=null,depth:r=!0,stencil:o=!1,alpha:s=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=s;const m=new Uint32Array(4),v=new Int32Array(4);let y=null,p=null;const f=[],_=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Jn,this.toneMapping=nr,this.toneMappingExposure=1;const g=this;let M=!1,P=0,A=0,w=null,R=-1,X=null;const x=new Mt,S=new Mt;let I=null;const O=new it(0);let k=0,Y=n.width,V=n.height,K=1,L=null,$=null;const Q=new Mt(0,0,Y,V),oe=new Mt(0,0,Y,V);let Me=!1;const Le=new O_;let W=!1,ee=!1;const ae=new Tt,ie=new Tt,_e=new G,Se=new Mt,Oe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ve=!1;function Fe(){return w===null?K:1}let b=i;function ke(T,U){return n.getContext(T,U)}try{const T={alpha:!0,depth:r,stencil:o,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:h};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Dh}`),n.addEventListener("webglcontextlost",J,!1),n.addEventListener("webglcontextrestored",ce,!1),n.addEventListener("webglcontextcreationerror",he,!1),b===null){const U="webgl2";if(b=ke(U,T),b===null)throw ke(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let Ce,He,be,ut,De,C,E,B,Z,te,q,Te,ue,me,Ze,re,ge,Ne,Ie,ve,Ye,Be,at,D;function de(){Ce=new mA(b),Ce.init(),Be=new eb(b,Ce),He=new lA(b,Ce,e,Be),be=new ZC(b),He.reverseDepthBuffer&&be.buffers.depth.setReversed(!0),ut=new _A(b),De=new FC,C=new JC(b,Ce,be,De,He,Be,ut),E=new cA(g),B=new pA(g),Z=new TT(b),at=new sA(b,Z),te=new gA(b,Z,ut,at),q=new yA(b,te,Z,ut),Ie=new xA(b,He,C),re=new uA(De),Te=new UC(g,E,B,Ce,He,at,re),ue=new lb(g,De),me=new kC,Ze=new WC(Ce),Ne=new oA(g,E,B,be,q,d,l),ge=new qC(g,q,He),D=new ub(b,ut,He,be),ve=new aA(b,Ce,ut),Ye=new vA(b,Ce,ut),ut.programs=Te.programs,g.capabilities=He,g.extensions=Ce,g.properties=De,g.renderLists=me,g.shadowMap=ge,g.state=be,g.info=ut}de();const j=new sb(g,b);this.xr=j,this.getContext=function(){return b},this.getContextAttributes=function(){return b.getContextAttributes()},this.forceContextLoss=function(){const T=Ce.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=Ce.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(T){T!==void 0&&(K=T,this.setSize(Y,V,!1))},this.getSize=function(T){return T.set(Y,V)},this.setSize=function(T,U,H=!0){if(j.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=T,V=U,n.width=Math.floor(T*K),n.height=Math.floor(U*K),H===!0&&(n.style.width=T+"px",n.style.height=U+"px"),this.setViewport(0,0,T,U)},this.getDrawingBufferSize=function(T){return T.set(Y*K,V*K).floor()},this.setDrawingBufferSize=function(T,U,H){Y=T,V=U,K=H,n.width=Math.floor(T*H),n.height=Math.floor(U*H),this.setViewport(0,0,T,U)},this.getCurrentViewport=function(T){return T.copy(x)},this.getViewport=function(T){return T.copy(Q)},this.setViewport=function(T,U,H,z){T.isVector4?Q.set(T.x,T.y,T.z,T.w):Q.set(T,U,H,z),be.viewport(x.copy(Q).multiplyScalar(K).round())},this.getScissor=function(T){return T.copy(oe)},this.setScissor=function(T,U,H,z){T.isVector4?oe.set(T.x,T.y,T.z,T.w):oe.set(T,U,H,z),be.scissor(S.copy(oe).multiplyScalar(K).round())},this.getScissorTest=function(){return Me},this.setScissorTest=function(T){be.setScissorTest(Me=T)},this.setOpaqueSort=function(T){L=T},this.setTransparentSort=function(T){$=T},this.getClearColor=function(T){return T.copy(Ne.getClearColor())},this.setClearColor=function(){Ne.setClearColor.apply(Ne,arguments)},this.getClearAlpha=function(){return Ne.getClearAlpha()},this.setClearAlpha=function(){Ne.setClearAlpha.apply(Ne,arguments)},this.clear=function(T=!0,U=!0,H=!0){let z=0;if(T){let F=!1;if(w!==null){const se=w.texture.format;F=se===Hh||se===Bh||se===kh}if(F){const se=w.texture.type,fe=se===Ci||se===zr||se===Vs||se===Wo||se===Fh||se===Oh,xe=Ne.getClearColor(),Ee=Ne.getClearAlpha(),Re=xe.r,Pe=xe.g,we=xe.b;fe?(m[0]=Re,m[1]=Pe,m[2]=we,m[3]=Ee,b.clearBufferuiv(b.COLOR,0,m)):(v[0]=Re,v[1]=Pe,v[2]=we,v[3]=Ee,b.clearBufferiv(b.COLOR,0,v))}else z|=b.COLOR_BUFFER_BIT}U&&(z|=b.DEPTH_BUFFER_BIT,b.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),H&&(z|=b.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),b.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",J,!1),n.removeEventListener("webglcontextrestored",ce,!1),n.removeEventListener("webglcontextcreationerror",he,!1),me.dispose(),Ze.dispose(),De.dispose(),E.dispose(),B.dispose(),q.dispose(),at.dispose(),D.dispose(),Te.dispose(),j.dispose(),j.removeEventListener("sessionstart",Vh),j.removeEventListener("sessionend",Wh),dr.stop()};function J(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function ce(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const T=ut.autoReset,U=ge.enabled,H=ge.autoUpdate,z=ge.needsUpdate,F=ge.type;de(),ut.autoReset=T,ge.enabled=U,ge.autoUpdate=H,ge.needsUpdate=z,ge.type=F}function he(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function qe(T){const U=T.target;U.removeEventListener("dispose",qe),wt(U)}function wt(T){Qt(T),De.remove(T)}function Qt(T){const U=De.get(T).programs;U!==void 0&&(U.forEach(function(H){Te.releaseProgram(H)}),T.isShaderMaterial&&Te.releaseShaderCache(T))}this.renderBufferDirect=function(T,U,H,z,F,se){U===null&&(U=Oe);const fe=F.isMesh&&F.matrixWorld.determinant()<0,xe=q_(T,U,H,z,F);be.setMaterial(z,fe);let Ee=H.index,Re=1;if(z.wireframe===!0){if(Ee=te.getWireframeAttribute(H),Ee===void 0)return;Re=2}const Pe=H.drawRange,we=H.attributes.position;let nt=Pe.start*Re,ct=(Pe.start+Pe.count)*Re;se!==null&&(nt=Math.max(nt,se.start*Re),ct=Math.min(ct,(se.start+se.count)*Re)),Ee!==null?(nt=Math.max(nt,0),ct=Math.min(ct,Ee.count)):we!=null&&(nt=Math.max(nt,0),ct=Math.min(ct,we.count));const xt=ct-nt;if(xt<0||xt===1/0)return;at.setup(F,z,xe,H,Ee);let fn,Je=ve;if(Ee!==null&&(fn=Z.get(Ee),Je=Ye,Je.setIndex(fn)),F.isMesh)z.wireframe===!0?(be.setLineWidth(z.wireframeLinewidth*Fe()),Je.setMode(b.LINES)):Je.setMode(b.TRIANGLES);else if(F.isLine){let Ae=z.linewidth;Ae===void 0&&(Ae=1),be.setLineWidth(Ae*Fe()),F.isLineSegments?Je.setMode(b.LINES):F.isLineLoop?Je.setMode(b.LINE_LOOP):Je.setMode(b.LINE_STRIP)}else F.isPoints?Je.setMode(b.POINTS):F.isSprite&&Je.setMode(b.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)Je.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(Ce.get("WEBGL_multi_draw"))Je.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const Ae=F._multiDrawStarts,Ft=F._multiDrawCounts,et=F._multiDrawCount,Dn=Ee?Z.get(Ee).bytesPerElement:1,Xr=De.get(z).currentProgram.getUniforms();for(let dn=0;dn<et;dn++)Xr.setValue(b,"_gl_DrawID",dn),Je.render(Ae[dn]/Dn,Ft[dn])}else if(F.isInstancedMesh)Je.renderInstances(nt,xt,F.count);else if(H.isInstancedBufferGeometry){const Ae=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,Ft=Math.min(H.instanceCount,Ae);Je.renderInstances(nt,xt,Ft)}else Je.render(nt,xt)};function Qe(T,U,H){T.transparent===!0&&T.side===mi&&T.forceSinglePass===!1?(T.side=ln,T.needsUpdate=!0,oa(T,U,H),T.side=or,T.needsUpdate=!0,oa(T,U,H),T.side=mi):oa(T,U,H)}this.compile=function(T,U,H=null){H===null&&(H=T),p=Ze.get(H),p.init(U),_.push(p),H.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),T!==H&&T.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),p.setupLights();const z=new Set;return T.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;const se=F.material;if(se)if(Array.isArray(se))for(let fe=0;fe<se.length;fe++){const xe=se[fe];Qe(xe,H,F),z.add(xe)}else Qe(se,H,F),z.add(se)}),_.pop(),p=null,z},this.compileAsync=function(T,U,H=null){const z=this.compile(T,U,H);return new Promise(F=>{function se(){if(z.forEach(function(fe){De.get(fe).currentProgram.isReady()&&z.delete(fe)}),z.size===0){F(T);return}setTimeout(se,10)}Ce.get("KHR_parallel_shader_compile")!==null?se():setTimeout(se,10)})};let Jt=null;function si(T){Jt&&Jt(T)}function Vh(){dr.stop()}function Wh(){dr.start()}const dr=new k_;dr.setAnimationLoop(si),typeof self<"u"&&dr.setContext(self),this.setAnimationLoop=function(T){Jt=T,j.setAnimationLoop(T),T===null?dr.stop():dr.start()},j.addEventListener("sessionstart",Vh),j.addEventListener("sessionend",Wh),this.render=function(T,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),j.enabled===!0&&j.isPresenting===!0&&(j.cameraAutoUpdate===!0&&j.updateCamera(U),U=j.getCamera()),T.isScene===!0&&T.onBeforeRender(g,T,U,w),p=Ze.get(T,_.length),p.init(U),_.push(p),ie.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Le.setFromProjectionMatrix(ie),ee=this.localClippingEnabled,W=re.init(this.clippingPlanes,ee),y=me.get(T,f.length),y.init(),f.push(y),j.enabled===!0&&j.isPresenting===!0){const se=g.xr.getDepthSensingMesh();se!==null&&bu(se,U,-1/0,g.sortObjects)}bu(T,U,0,g.sortObjects),y.finish(),g.sortObjects===!0&&y.sort(L,$),Ve=j.enabled===!1||j.isPresenting===!1||j.hasDepthSensing()===!1,Ve&&Ne.addToRenderList(y,T),this.info.render.frame++,W===!0&&re.beginShadows();const H=p.state.shadowsArray;ge.render(H,T,U),W===!0&&re.endShadows(),this.info.autoReset===!0&&this.info.reset();const z=y.opaque,F=y.transmissive;if(p.setupLights(),U.isArrayCamera){const se=U.cameras;if(F.length>0)for(let fe=0,xe=se.length;fe<xe;fe++){const Ee=se[fe];Xh(z,F,T,Ee)}Ve&&Ne.render(T);for(let fe=0,xe=se.length;fe<xe;fe++){const Ee=se[fe];jh(y,T,Ee,Ee.viewport)}}else F.length>0&&Xh(z,F,T,U),Ve&&Ne.render(T),jh(y,T,U);w!==null&&(C.updateMultisampleRenderTarget(w),C.updateRenderTargetMipmap(w)),T.isScene===!0&&T.onAfterRender(g,T,U),at.resetDefaultState(),R=-1,X=null,_.pop(),_.length>0?(p=_[_.length-1],W===!0&&re.setGlobalState(g.clippingPlanes,p.state.camera)):p=null,f.pop(),f.length>0?y=f[f.length-1]:y=null};function bu(T,U,H,z){if(T.visible===!1)return;if(T.layers.test(U.layers)){if(T.isGroup)H=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(U);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Le.intersectsSprite(T)){z&&Se.setFromMatrixPosition(T.matrixWorld).applyMatrix4(ie);const fe=q.update(T),xe=T.material;xe.visible&&y.push(T,fe,xe,H,Se.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||Le.intersectsObject(T))){const fe=q.update(T),xe=T.material;if(z&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Se.copy(T.boundingSphere.center)):(fe.boundingSphere===null&&fe.computeBoundingSphere(),Se.copy(fe.boundingSphere.center)),Se.applyMatrix4(T.matrixWorld).applyMatrix4(ie)),Array.isArray(xe)){const Ee=fe.groups;for(let Re=0,Pe=Ee.length;Re<Pe;Re++){const we=Ee[Re],nt=xe[we.materialIndex];nt&&nt.visible&&y.push(T,fe,nt,H,Se.z,we)}}else xe.visible&&y.push(T,fe,xe,H,Se.z,null)}}const se=T.children;for(let fe=0,xe=se.length;fe<xe;fe++)bu(se[fe],U,H,z)}function jh(T,U,H,z){const F=T.opaque,se=T.transmissive,fe=T.transparent;p.setupLightsView(H),W===!0&&re.setGlobalState(g.clippingPlanes,H),z&&be.viewport(x.copy(z)),F.length>0&&ra(F,U,H),se.length>0&&ra(se,U,H),fe.length>0&&ra(fe,U,H),be.buffers.depth.setTest(!0),be.buffers.depth.setMask(!0),be.buffers.color.setMask(!0),be.setPolygonOffset(!1)}function Xh(T,U,H,z){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[z.id]===void 0&&(p.state.transmissionRenderTarget[z.id]=new Gr(1,1,{generateMipmaps:!0,type:Ce.has("EXT_color_buffer_half_float")||Ce.has("EXT_color_buffer_float")?Qs:Ci,minFilter:Lr,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:tt.workingColorSpace}));const se=p.state.transmissionRenderTarget[z.id],fe=z.viewport||x;se.setSize(fe.z,fe.w);const xe=g.getRenderTarget();g.setRenderTarget(se),g.getClearColor(O),k=g.getClearAlpha(),k<1&&g.setClearColor(16777215,.5),g.clear(),Ve&&Ne.render(H);const Ee=g.toneMapping;g.toneMapping=nr;const Re=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),p.setupLightsView(z),W===!0&&re.setGlobalState(g.clippingPlanes,z),ra(T,H,z),C.updateMultisampleRenderTarget(se),C.updateRenderTargetMipmap(se),Ce.has("WEBGL_multisampled_render_to_texture")===!1){let Pe=!1;for(let we=0,nt=U.length;we<nt;we++){const ct=U[we],xt=ct.object,fn=ct.geometry,Je=ct.material,Ae=ct.group;if(Je.side===mi&&xt.layers.test(z.layers)){const Ft=Je.side;Je.side=ln,Je.needsUpdate=!0,Yh(xt,H,z,fn,Je,Ae),Je.side=Ft,Je.needsUpdate=!0,Pe=!0}}Pe===!0&&(C.updateMultisampleRenderTarget(se),C.updateRenderTargetMipmap(se))}g.setRenderTarget(xe),g.setClearColor(O,k),Re!==void 0&&(z.viewport=Re),g.toneMapping=Ee}function ra(T,U,H){const z=U.isScene===!0?U.overrideMaterial:null;for(let F=0,se=T.length;F<se;F++){const fe=T[F],xe=fe.object,Ee=fe.geometry,Re=z===null?fe.material:z,Pe=fe.group;xe.layers.test(H.layers)&&Yh(xe,U,H,Ee,Re,Pe)}}function Yh(T,U,H,z,F,se){T.onBeforeRender(g,U,H,z,F,se),T.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),F.onBeforeRender(g,U,H,z,T,se),F.transparent===!0&&F.side===mi&&F.forceSinglePass===!1?(F.side=ln,F.needsUpdate=!0,g.renderBufferDirect(H,U,z,F,T,se),F.side=or,F.needsUpdate=!0,g.renderBufferDirect(H,U,z,F,T,se),F.side=mi):g.renderBufferDirect(H,U,z,F,T,se),T.onAfterRender(g,U,H,z,F,se)}function oa(T,U,H){U.isScene!==!0&&(U=Oe);const z=De.get(T),F=p.state.lights,se=p.state.shadowsArray,fe=F.state.version,xe=Te.getParameters(T,F.state,se,U,H),Ee=Te.getProgramCacheKey(xe);let Re=z.programs;z.environment=T.isMeshStandardMaterial?U.environment:null,z.fog=U.fog,z.envMap=(T.isMeshStandardMaterial?B:E).get(T.envMap||z.environment),z.envMapRotation=z.environment!==null&&T.envMap===null?U.environmentRotation:T.envMapRotation,Re===void 0&&(T.addEventListener("dispose",qe),Re=new Map,z.programs=Re);let Pe=Re.get(Ee);if(Pe!==void 0){if(z.currentProgram===Pe&&z.lightsStateVersion===fe)return qh(T,xe),Pe}else xe.uniforms=Te.getUniforms(T),T.onBeforeCompile(xe,g),Pe=Te.acquireProgram(xe,Ee),Re.set(Ee,Pe),z.uniforms=xe.uniforms;const we=z.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(we.clippingPlanes=re.uniform),qh(T,xe),z.needsLights=Z_(T),z.lightsStateVersion=fe,z.needsLights&&(we.ambientLightColor.value=F.state.ambient,we.lightProbe.value=F.state.probe,we.directionalLights.value=F.state.directional,we.directionalLightShadows.value=F.state.directionalShadow,we.spotLights.value=F.state.spot,we.spotLightShadows.value=F.state.spotShadow,we.rectAreaLights.value=F.state.rectArea,we.ltc_1.value=F.state.rectAreaLTC1,we.ltc_2.value=F.state.rectAreaLTC2,we.pointLights.value=F.state.point,we.pointLightShadows.value=F.state.pointShadow,we.hemisphereLights.value=F.state.hemi,we.directionalShadowMap.value=F.state.directionalShadowMap,we.directionalShadowMatrix.value=F.state.directionalShadowMatrix,we.spotShadowMap.value=F.state.spotShadowMap,we.spotLightMatrix.value=F.state.spotLightMatrix,we.spotLightMap.value=F.state.spotLightMap,we.pointShadowMap.value=F.state.pointShadowMap,we.pointShadowMatrix.value=F.state.pointShadowMatrix),z.currentProgram=Pe,z.uniformsList=null,Pe}function $h(T){if(T.uniformsList===null){const U=T.currentProgram.getUniforms();T.uniformsList=xl.seqWithValue(U.seq,T.uniforms)}return T.uniformsList}function qh(T,U){const H=De.get(T);H.outputColorSpace=U.outputColorSpace,H.batching=U.batching,H.batchingColor=U.batchingColor,H.instancing=U.instancing,H.instancingColor=U.instancingColor,H.instancingMorph=U.instancingMorph,H.skinning=U.skinning,H.morphTargets=U.morphTargets,H.morphNormals=U.morphNormals,H.morphColors=U.morphColors,H.morphTargetsCount=U.morphTargetsCount,H.numClippingPlanes=U.numClippingPlanes,H.numIntersection=U.numClipIntersection,H.vertexAlphas=U.vertexAlphas,H.vertexTangents=U.vertexTangents,H.toneMapping=U.toneMapping}function q_(T,U,H,z,F){U.isScene!==!0&&(U=Oe),C.resetTextureUnits();const se=U.fog,fe=z.isMeshStandardMaterial?U.environment:null,xe=w===null?g.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:fr,Ee=(z.isMeshStandardMaterial?B:E).get(z.envMap||fe),Re=z.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Pe=!!H.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),we=!!H.morphAttributes.position,nt=!!H.morphAttributes.normal,ct=!!H.morphAttributes.color;let xt=nr;z.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(xt=g.toneMapping);const fn=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Je=fn!==void 0?fn.length:0,Ae=De.get(z),Ft=p.state.lights;if(W===!0&&(ee===!0||T!==X)){const En=T===X&&z.id===R;re.setState(z,T,En)}let et=!1;z.version===Ae.__version?(Ae.needsLights&&Ae.lightsStateVersion!==Ft.state.version||Ae.outputColorSpace!==xe||F.isBatchedMesh&&Ae.batching===!1||!F.isBatchedMesh&&Ae.batching===!0||F.isBatchedMesh&&Ae.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&Ae.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&Ae.instancing===!1||!F.isInstancedMesh&&Ae.instancing===!0||F.isSkinnedMesh&&Ae.skinning===!1||!F.isSkinnedMesh&&Ae.skinning===!0||F.isInstancedMesh&&Ae.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Ae.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&Ae.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&Ae.instancingMorph===!1&&F.morphTexture!==null||Ae.envMap!==Ee||z.fog===!0&&Ae.fog!==se||Ae.numClippingPlanes!==void 0&&(Ae.numClippingPlanes!==re.numPlanes||Ae.numIntersection!==re.numIntersection)||Ae.vertexAlphas!==Re||Ae.vertexTangents!==Pe||Ae.morphTargets!==we||Ae.morphNormals!==nt||Ae.morphColors!==ct||Ae.toneMapping!==xt||Ae.morphTargetsCount!==Je)&&(et=!0):(et=!0,Ae.__version=z.version);let Dn=Ae.currentProgram;et===!0&&(Dn=oa(z,U,F));let Xr=!1,dn=!1,Ru=!1;const St=Dn.getUniforms(),Li=Ae.uniforms;if(be.useProgram(Dn.program)&&(Xr=!0,dn=!0,Ru=!0),z.id!==R&&(R=z.id,dn=!0),Xr||X!==T){He.reverseDepthBuffer?(ae.copy(T.projectionMatrix),QM(ae),JM(ae),St.setValue(b,"projectionMatrix",ae)):St.setValue(b,"projectionMatrix",T.projectionMatrix),St.setValue(b,"viewMatrix",T.matrixWorldInverse);const En=St.map.cameraPosition;En!==void 0&&En.setValue(b,_e.setFromMatrixPosition(T.matrixWorld)),He.logarithmicDepthBuffer&&St.setValue(b,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&St.setValue(b,"isOrthographic",T.isOrthographicCamera===!0),X!==T&&(X=T,dn=!0,Ru=!0)}if(F.isSkinnedMesh){St.setOptional(b,F,"bindMatrix"),St.setOptional(b,F,"bindMatrixInverse");const En=F.skeleton;En&&(En.boneTexture===null&&En.computeBoneTexture(),St.setValue(b,"boneTexture",En.boneTexture,C))}F.isBatchedMesh&&(St.setOptional(b,F,"batchingTexture"),St.setValue(b,"batchingTexture",F._matricesTexture,C),St.setOptional(b,F,"batchingIdTexture"),St.setValue(b,"batchingIdTexture",F._indirectTexture,C),St.setOptional(b,F,"batchingColorTexture"),F._colorsTexture!==null&&St.setValue(b,"batchingColorTexture",F._colorsTexture,C));const Pu=H.morphAttributes;if((Pu.position!==void 0||Pu.normal!==void 0||Pu.color!==void 0)&&Ie.update(F,H,Dn),(dn||Ae.receiveShadow!==F.receiveShadow)&&(Ae.receiveShadow=F.receiveShadow,St.setValue(b,"receiveShadow",F.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(Li.envMap.value=Ee,Li.flipEnvMap.value=Ee.isCubeTexture&&Ee.isRenderTargetTexture===!1?-1:1),z.isMeshStandardMaterial&&z.envMap===null&&U.environment!==null&&(Li.envMapIntensity.value=U.environmentIntensity),dn&&(St.setValue(b,"toneMappingExposure",g.toneMappingExposure),Ae.needsLights&&K_(Li,Ru),se&&z.fog===!0&&ue.refreshFogUniforms(Li,se),ue.refreshMaterialUniforms(Li,z,K,V,p.state.transmissionRenderTarget[T.id]),xl.upload(b,$h(Ae),Li,C)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(xl.upload(b,$h(Ae),Li,C),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&St.setValue(b,"center",F.center),St.setValue(b,"modelViewMatrix",F.modelViewMatrix),St.setValue(b,"normalMatrix",F.normalMatrix),St.setValue(b,"modelMatrix",F.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){const En=z.uniformsGroups;for(let Lu=0,Q_=En.length;Lu<Q_;Lu++){const Kh=En[Lu];D.update(Kh,Dn),D.bind(Kh,Dn)}}return Dn}function K_(T,U){T.ambientLightColor.needsUpdate=U,T.lightProbe.needsUpdate=U,T.directionalLights.needsUpdate=U,T.directionalLightShadows.needsUpdate=U,T.pointLights.needsUpdate=U,T.pointLightShadows.needsUpdate=U,T.spotLights.needsUpdate=U,T.spotLightShadows.needsUpdate=U,T.rectAreaLights.needsUpdate=U,T.hemisphereLights.needsUpdate=U}function Z_(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(T,U,H){De.get(T.texture).__webglTexture=U,De.get(T.depthTexture).__webglTexture=H;const z=De.get(T);z.__hasExternalTextures=!0,z.__autoAllocateDepthBuffer=H===void 0,z.__autoAllocateDepthBuffer||Ce.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),z.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,U){const H=De.get(T);H.__webglFramebuffer=U,H.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(T,U=0,H=0){w=T,P=U,A=H;let z=!0,F=null,se=!1,fe=!1;if(T){const Ee=De.get(T);if(Ee.__useDefaultFramebuffer!==void 0)be.bindFramebuffer(b.FRAMEBUFFER,null),z=!1;else if(Ee.__webglFramebuffer===void 0)C.setupRenderTarget(T);else if(Ee.__hasExternalTextures)C.rebindTextures(T,De.get(T.texture).__webglTexture,De.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const we=T.depthTexture;if(Ee.__boundDepthTexture!==we){if(we!==null&&De.has(we)&&(T.width!==we.image.width||T.height!==we.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");C.setupDepthRenderbuffer(T)}}const Re=T.texture;(Re.isData3DTexture||Re.isDataArrayTexture||Re.isCompressedArrayTexture)&&(fe=!0);const Pe=De.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Pe[U])?F=Pe[U][H]:F=Pe[U],se=!0):T.samples>0&&C.useMultisampledRTT(T)===!1?F=De.get(T).__webglMultisampledFramebuffer:Array.isArray(Pe)?F=Pe[H]:F=Pe,x.copy(T.viewport),S.copy(T.scissor),I=T.scissorTest}else x.copy(Q).multiplyScalar(K).floor(),S.copy(oe).multiplyScalar(K).floor(),I=Me;if(be.bindFramebuffer(b.FRAMEBUFFER,F)&&z&&be.drawBuffers(T,F),be.viewport(x),be.scissor(S),be.setScissorTest(I),se){const Ee=De.get(T.texture);b.framebufferTexture2D(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_CUBE_MAP_POSITIVE_X+U,Ee.__webglTexture,H)}else if(fe){const Ee=De.get(T.texture),Re=U||0;b.framebufferTextureLayer(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,Ee.__webglTexture,H||0,Re)}R=-1},this.readRenderTargetPixels=function(T,U,H,z,F,se,fe){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xe=De.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&fe!==void 0&&(xe=xe[fe]),xe){be.bindFramebuffer(b.FRAMEBUFFER,xe);try{const Ee=T.texture,Re=Ee.format,Pe=Ee.type;if(!He.textureFormatReadable(Re)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!He.textureTypeReadable(Pe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=T.width-z&&H>=0&&H<=T.height-F&&b.readPixels(U,H,z,F,Be.convert(Re),Be.convert(Pe),se)}finally{const Ee=w!==null?De.get(w).__webglFramebuffer:null;be.bindFramebuffer(b.FRAMEBUFFER,Ee)}}},this.readRenderTargetPixelsAsync=async function(T,U,H,z,F,se,fe){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xe=De.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&fe!==void 0&&(xe=xe[fe]),xe){const Ee=T.texture,Re=Ee.format,Pe=Ee.type;if(!He.textureFormatReadable(Re))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!He.textureTypeReadable(Pe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=T.width-z&&H>=0&&H<=T.height-F){be.bindFramebuffer(b.FRAMEBUFFER,xe);const we=b.createBuffer();b.bindBuffer(b.PIXEL_PACK_BUFFER,we),b.bufferData(b.PIXEL_PACK_BUFFER,se.byteLength,b.STREAM_READ),b.readPixels(U,H,z,F,Be.convert(Re),Be.convert(Pe),0);const nt=w!==null?De.get(w).__webglFramebuffer:null;be.bindFramebuffer(b.FRAMEBUFFER,nt);const ct=b.fenceSync(b.SYNC_GPU_COMMANDS_COMPLETE,0);return b.flush(),await ZM(b,ct,4),b.bindBuffer(b.PIXEL_PACK_BUFFER,we),b.getBufferSubData(b.PIXEL_PACK_BUFFER,0,se),b.deleteBuffer(we),b.deleteSync(ct),se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(T,U=null,H=0){T.isTexture!==!0&&(_l("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,T=arguments[1]);const z=Math.pow(2,-H),F=Math.floor(T.image.width*z),se=Math.floor(T.image.height*z),fe=U!==null?U.x:0,xe=U!==null?U.y:0;C.setTexture2D(T,0),b.copyTexSubImage2D(b.TEXTURE_2D,H,0,0,fe,xe,F,se),be.unbindTexture()},this.copyTextureToTexture=function(T,U,H=null,z=null,F=0){T.isTexture!==!0&&(_l("WebGLRenderer: copyTextureToTexture function signature has changed."),z=arguments[0]||null,T=arguments[1],U=arguments[2],F=arguments[3]||0,H=null);let se,fe,xe,Ee,Re,Pe;H!==null?(se=H.max.x-H.min.x,fe=H.max.y-H.min.y,xe=H.min.x,Ee=H.min.y):(se=T.image.width,fe=T.image.height,xe=0,Ee=0),z!==null?(Re=z.x,Pe=z.y):(Re=0,Pe=0);const we=Be.convert(U.format),nt=Be.convert(U.type);C.setTexture2D(U,0),b.pixelStorei(b.UNPACK_FLIP_Y_WEBGL,U.flipY),b.pixelStorei(b.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),b.pixelStorei(b.UNPACK_ALIGNMENT,U.unpackAlignment);const ct=b.getParameter(b.UNPACK_ROW_LENGTH),xt=b.getParameter(b.UNPACK_IMAGE_HEIGHT),fn=b.getParameter(b.UNPACK_SKIP_PIXELS),Je=b.getParameter(b.UNPACK_SKIP_ROWS),Ae=b.getParameter(b.UNPACK_SKIP_IMAGES),Ft=T.isCompressedTexture?T.mipmaps[F]:T.image;b.pixelStorei(b.UNPACK_ROW_LENGTH,Ft.width),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,Ft.height),b.pixelStorei(b.UNPACK_SKIP_PIXELS,xe),b.pixelStorei(b.UNPACK_SKIP_ROWS,Ee),T.isDataTexture?b.texSubImage2D(b.TEXTURE_2D,F,Re,Pe,se,fe,we,nt,Ft.data):T.isCompressedTexture?b.compressedTexSubImage2D(b.TEXTURE_2D,F,Re,Pe,Ft.width,Ft.height,we,Ft.data):b.texSubImage2D(b.TEXTURE_2D,F,Re,Pe,se,fe,we,nt,Ft),b.pixelStorei(b.UNPACK_ROW_LENGTH,ct),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,xt),b.pixelStorei(b.UNPACK_SKIP_PIXELS,fn),b.pixelStorei(b.UNPACK_SKIP_ROWS,Je),b.pixelStorei(b.UNPACK_SKIP_IMAGES,Ae),F===0&&U.generateMipmaps&&b.generateMipmap(b.TEXTURE_2D),be.unbindTexture()},this.copyTextureToTexture3D=function(T,U,H=null,z=null,F=0){T.isTexture!==!0&&(_l("WebGLRenderer: copyTextureToTexture3D function signature has changed."),H=arguments[0]||null,z=arguments[1]||null,T=arguments[2],U=arguments[3],F=arguments[4]||0);let se,fe,xe,Ee,Re,Pe,we,nt,ct;const xt=T.isCompressedTexture?T.mipmaps[F]:T.image;H!==null?(se=H.max.x-H.min.x,fe=H.max.y-H.min.y,xe=H.max.z-H.min.z,Ee=H.min.x,Re=H.min.y,Pe=H.min.z):(se=xt.width,fe=xt.height,xe=xt.depth,Ee=0,Re=0,Pe=0),z!==null?(we=z.x,nt=z.y,ct=z.z):(we=0,nt=0,ct=0);const fn=Be.convert(U.format),Je=Be.convert(U.type);let Ae;if(U.isData3DTexture)C.setTexture3D(U,0),Ae=b.TEXTURE_3D;else if(U.isDataArrayTexture||U.isCompressedArrayTexture)C.setTexture2DArray(U,0),Ae=b.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}b.pixelStorei(b.UNPACK_FLIP_Y_WEBGL,U.flipY),b.pixelStorei(b.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),b.pixelStorei(b.UNPACK_ALIGNMENT,U.unpackAlignment);const Ft=b.getParameter(b.UNPACK_ROW_LENGTH),et=b.getParameter(b.UNPACK_IMAGE_HEIGHT),Dn=b.getParameter(b.UNPACK_SKIP_PIXELS),Xr=b.getParameter(b.UNPACK_SKIP_ROWS),dn=b.getParameter(b.UNPACK_SKIP_IMAGES);b.pixelStorei(b.UNPACK_ROW_LENGTH,xt.width),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,xt.height),b.pixelStorei(b.UNPACK_SKIP_PIXELS,Ee),b.pixelStorei(b.UNPACK_SKIP_ROWS,Re),b.pixelStorei(b.UNPACK_SKIP_IMAGES,Pe),T.isDataTexture||T.isData3DTexture?b.texSubImage3D(Ae,F,we,nt,ct,se,fe,xe,fn,Je,xt.data):U.isCompressedArrayTexture?b.compressedTexSubImage3D(Ae,F,we,nt,ct,se,fe,xe,fn,xt.data):b.texSubImage3D(Ae,F,we,nt,ct,se,fe,xe,fn,Je,xt),b.pixelStorei(b.UNPACK_ROW_LENGTH,Ft),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,et),b.pixelStorei(b.UNPACK_SKIP_PIXELS,Dn),b.pixelStorei(b.UNPACK_SKIP_ROWS,Xr),b.pixelStorei(b.UNPACK_SKIP_IMAGES,dn),F===0&&U.generateMipmaps&&b.generateMipmap(Ae),be.unbindTexture()},this.initRenderTarget=function(T){De.get(T).__webglFramebuffer===void 0&&C.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?C.setTextureCube(T,0):T.isData3DTexture?C.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?C.setTexture2DArray(T,0):C.setTexture2D(T,0),be.unbindTexture()},this.resetState=function(){P=0,A=0,w=null,be.reset(),at.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return xi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===zh?"display-p3":"srgb",n.unpackColorSpace=tt.workingColorSpace===Mu?"display-p3":"srgb"}}class fb extends cn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new bi,this.environmentIntensity=1,this.environmentRotation=new bi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class W_ extends na{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new it(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const pg=new Tt,Pd=new b_,Ya=new Tu,$a=new G;class db extends cn{constructor(e=new Pi,n=new W_){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,o=e.params.Points.threshold,s=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ya.copy(i.boundingSphere),Ya.applyMatrix4(r),Ya.radius+=o,e.ray.intersectsSphere(Ya)===!1)return;pg.copy(r).invert(),Pd.copy(e.ray).applyMatrix4(pg);const a=o/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=i.index,h=i.attributes.position;if(u!==null){const d=Math.max(0,s.start),m=Math.min(u.count,s.start+s.count);for(let v=d,y=m;v<y;v++){const p=u.getX(v);$a.fromBufferAttribute(h,p),mg($a,p,l,r,e,n,this)}}else{const d=Math.max(0,s.start),m=Math.min(h.count,s.start+s.count);for(let v=d,y=m;v<y;v++)$a.fromBufferAttribute(h,v),mg($a,v,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=r.length;o<s;o++){const a=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}}function mg(t,e,n,i,r,o,s){const a=Pd.distanceSqToPoint(t);if(a<n){const l=new G;Pd.closestPointToPoint(t,l),l.applyMatrix4(i);const u=r.ray.origin.distanceTo(l);if(u<r.near||u>r.far)return;o.push({distance:u,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:s})}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Dh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Dh);const qa=100,Ka=50,Za=50,hb=()=>{const t=Ue.useRef();let e,n,i,r=0,o=0,s=0,a=window.innerWidth/2,l=window.innerHeight/2;Ue.useEffect(()=>(i||u(),v(),window.addEventListener("resize",c),document.addEventListener("mousemove",h),document.addEventListener("touchstart",d),document.addEventListener("touchmove",m),()=>{window.removeEventListener("resize",c),document.removeEventListener("mousemove",h),document.removeEventListener("touchstart",d),document.removeEventListener("touchmove",m)}),[]);const u=()=>{const p=t.current;if(p&&p.children.length>0)return;e=new An(50,window.innerWidth/window.innerHeight,1,1e4),e.position.set(-500,500,1e3),e.rotation.set(-Math.PI/6,0,0),n=new fb;const f=new Pi,_=new Float32Array(Ka*Za*3);let g=0;for(let A=0;A<Ka;A++)for(let w=0;w<Za;w++)_[g]=A*qa-Ka*qa/2,_[g+1]=0,_[g+2]=w*qa-Za*qa/2,g+=3;f.setAttribute("position",new Yn(_,3));const M=new W_({color:10066329,size:8}),P=new db(f,M);n.add(P),i=new cb({alpha:!0}),i.setPixelRatio(window.devicePixelRatio),i.setSize(window.innerWidth,window.innerHeight),i.setClearColor(0,0),p&&p.children.length===0&&p.appendChild(i.domElement)},c=()=>{a=window.innerWidth/2,l=window.innerHeight/2,e.aspect=window.innerWidth/window.innerHeight,e.updateProjectionMatrix(),i.setSize(window.innerWidth,window.innerHeight)},h=p=>{o=p.clientX-a,s=p.clientY-l},d=p=>{p.touches.length===1&&(p.preventDefault(),o=p.touches[0].pageX-a,s=p.touches[0].pageY-l)},m=p=>{p.touches.length===1&&(p.preventDefault(),o=p.touches[0].pageX-a,s=p.touches[0].pageY-l)},v=()=>{requestAnimationFrame(v),y()},y=()=>{e.position.x+=(o-e.position.x)*.05,e.position.y+=(-s-e.position.y)*.05,e.lookAt(n.position);const p=n.children[0].geometry.attributes.position.array;let f=0;for(let _=0;_<Ka;_++)for(let g=0;g<Za;g++)p[f+1]=Math.sin((_+r)*.3)*80+Math.sin((g+r)*.4)*80,f+=3;n.children[0].geometry.attributes.position.needsUpdate=!0,i.render(n,e),r+=.02};return N.jsx("div",{ref:t})},pb="/assets/PortfolioImg.jpg";function mb(){const[t,e]=Ue.useState(!1),i=Xi().formatMessage({id:"hero.intro"}),r=sM(i),[o,s]=Ue.useState(!1),[a,l]=Ue.useState(!1),u=()=>{s(!o),c()},c=()=>{l(!a)};return Ue.useEffect(()=>{const h=setTimeout(()=>{e(!0)},1e3);return()=>clearTimeout(h)},[]),N.jsxs("div",{className:"heroBorder hero-container",children:[N.jsx(hb,{}),N.jsxs("div",{className:"container hero-content",children:[N.jsx("div",{className:"profilePic",children:N.jsx("img",{className:"pic",src:pb})}),N.jsx("div",{className:"spacing-md"}),N.jsx("h1",{className:"extra-large-heading font-default-black",children:N.jsx(je,{id:"hero.greeting",defaultMessage:"Hello there!"})}),N.jsx("div",{className:"spacing-md"}),N.jsx("h3",{className:"small-heading font-default-black",children:r}),N.jsx("div",{className:"spacing-sm"}),N.jsx("p",{className:`running-text font-default-black max-w ${t?"fade-in":"hidden"}`,children:N.jsx(je,{id:"hero.description",defaultMessage:"With a robust foundation built through two years of hands-on experience..."})}),N.jsx("div",{className:"spacing-sm"}),N.jsxs("div",{className:`drop-position ${t?"fade-in":"hidden"}`,children:[N.jsxs("a",{onClick:u,className:"btn-offwhite",children:[N.jsx(je,{id:"hero.downloadCV",defaultMessage:"Download CV"}),N.jsx("span",{className:`font-default-black bold ${a?"spin":""}`,children:"+"})]}),o&&N.jsxs("div",{className:"dropdown-menu",children:[N.jsx("a",{className:"dropdown-item font-default-black running-text",href:"../../../CV/Haochuan CV_EN.pdf",download:"Haochuan CV_EN.pdf",children:N.jsx(je,{id:"hero.cv.english",defaultMessage:"EN"})}),N.jsx("a",{className:"dropdown-item font-default-black running-text",href:"../../../CV/Haochuan CV_CN.pdf",download:"Haochuan CV_CN.pdf",children:N.jsx(je,{id:"hero.cv.chinese",defaultMessage:"中文"})})]})]}),N.jsx("div",{className:"spacing-md"}),N.jsx("p",{className:`small-text font-default-normal ${t?"fade-in":"hidden"}`,children:N.jsx(je,{id:"hero.scrollHint",defaultMessage:"↓ Scroll and view more"})})]})]})}const gb="/assets/experience/Full-stack.png",vb="/assets/experience/UX.png",_b="/assets/experience/Concept-Art.png",xb="/assets/experience/Graphic-design.png",yb="/assets/experience/Graphic-back.png",Sb="/assets/experience/Full-stack-back.png",Eb="/assets/experience/UX-back.png",Mb="/assets/experience/Concept-back.png";var j_={exports:{}};(function(t,e){(function(n,i){t.exports=i()})(Ei,function(){return function(n){function i(o){if(r[o])return r[o].exports;var s=r[o]={exports:{},id:o,loaded:!1};return n[o].call(s.exports,s,s.exports,i),s.loaded=!0,s.exports}var r={};return i.m=n,i.c=r,i.p="dist/",i(0)}([function(n,i,r){function o(k){return k&&k.__esModule?k:{default:k}}var s=Object.assign||function(k){for(var Y=1;Y<arguments.length;Y++){var V=arguments[Y];for(var K in V)Object.prototype.hasOwnProperty.call(V,K)&&(k[K]=V[K])}return k},a=r(1),l=(o(a),r(6)),u=o(l),c=r(7),h=o(c),d=r(8),m=o(d),v=r(9),y=o(v),p=r(10),f=o(p),_=r(11),g=o(_),M=r(14),P=o(M),A=[],w=!1,R={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded",throttleDelay:99,debounceDelay:50,disableMutationObserver:!1},X=function(){var k=arguments.length>0&&arguments[0]!==void 0&&arguments[0];if(k&&(w=!0),w)return A=(0,g.default)(A,R),(0,f.default)(A,R.once),A},x=function(){A=(0,P.default)(),X()},S=function(){A.forEach(function(k,Y){k.node.removeAttribute("data-aos"),k.node.removeAttribute("data-aos-easing"),k.node.removeAttribute("data-aos-duration"),k.node.removeAttribute("data-aos-delay")})},I=function(k){return k===!0||k==="mobile"&&y.default.mobile()||k==="phone"&&y.default.phone()||k==="tablet"&&y.default.tablet()||typeof k=="function"&&k()===!0},O=function(k){R=s(R,k),A=(0,P.default)();var Y=document.all&&!window.atob;return I(R.disable)||Y?S():(R.disableMutationObserver||m.default.isSupported()||(console.info(`
      aos: MutationObserver is not supported on this browser,
      code mutations observing has been disabled.
      You may have to call "refreshHard()" by yourself.
    `),R.disableMutationObserver=!0),document.querySelector("body").setAttribute("data-aos-easing",R.easing),document.querySelector("body").setAttribute("data-aos-duration",R.duration),document.querySelector("body").setAttribute("data-aos-delay",R.delay),R.startEvent==="DOMContentLoaded"&&["complete","interactive"].indexOf(document.readyState)>-1?X(!0):R.startEvent==="load"?window.addEventListener(R.startEvent,function(){X(!0)}):document.addEventListener(R.startEvent,function(){X(!0)}),window.addEventListener("resize",(0,h.default)(X,R.debounceDelay,!0)),window.addEventListener("orientationchange",(0,h.default)(X,R.debounceDelay,!0)),window.addEventListener("scroll",(0,u.default)(function(){(0,f.default)(A,R.once)},R.throttleDelay)),R.disableMutationObserver||m.default.ready("[data-aos]",x),A)};n.exports={init:O,refresh:X,refreshHard:x}},function(n,i){},,,,,function(n,i){(function(r){function o(I,O,k){function Y(ke){var Ce=W,He=ee;return W=ee=void 0,Oe=ke,ie=I.apply(He,Ce)}function V(ke){return Oe=ke,_e=setTimeout($,O),Ve?Y(ke):ie}function K(ke){var Ce=ke-Se,He=ke-Oe,be=O-Ce;return Fe?x(be,ae-He):be}function L(ke){var Ce=ke-Se,He=ke-Oe;return Se===void 0||Ce>=O||Ce<0||Fe&&He>=ae}function $(){var ke=S();return L(ke)?Q(ke):void(_e=setTimeout($,K(ke)))}function Q(ke){return _e=void 0,b&&W?Y(ke):(W=ee=void 0,ie)}function oe(){_e!==void 0&&clearTimeout(_e),Oe=0,W=Se=ee=_e=void 0}function Me(){return _e===void 0?ie:Q(S())}function Le(){var ke=S(),Ce=L(ke);if(W=arguments,ee=this,Se=ke,Ce){if(_e===void 0)return V(Se);if(Fe)return _e=setTimeout($,O),Y(Se)}return _e===void 0&&(_e=setTimeout($,O)),ie}var W,ee,ae,ie,_e,Se,Oe=0,Ve=!1,Fe=!1,b=!0;if(typeof I!="function")throw new TypeError(d);return O=c(O)||0,a(k)&&(Ve=!!k.leading,Fe="maxWait"in k,ae=Fe?X(c(k.maxWait)||0,O):ae,b="trailing"in k?!!k.trailing:b),Le.cancel=oe,Le.flush=Me,Le}function s(I,O,k){var Y=!0,V=!0;if(typeof I!="function")throw new TypeError(d);return a(k)&&(Y="leading"in k?!!k.leading:Y,V="trailing"in k?!!k.trailing:V),o(I,O,{leading:Y,maxWait:O,trailing:V})}function a(I){var O=typeof I>"u"?"undefined":h(I);return!!I&&(O=="object"||O=="function")}function l(I){return!!I&&(typeof I>"u"?"undefined":h(I))=="object"}function u(I){return(typeof I>"u"?"undefined":h(I))=="symbol"||l(I)&&R.call(I)==v}function c(I){if(typeof I=="number")return I;if(u(I))return m;if(a(I)){var O=typeof I.valueOf=="function"?I.valueOf():I;I=a(O)?O+"":O}if(typeof I!="string")return I===0?I:+I;I=I.replace(y,"");var k=f.test(I);return k||_.test(I)?g(I.slice(2),k?2:8):p.test(I)?m:+I}var h=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(I){return typeof I}:function(I){return I&&typeof Symbol=="function"&&I.constructor===Symbol&&I!==Symbol.prototype?"symbol":typeof I},d="Expected a function",m=NaN,v="[object Symbol]",y=/^\s+|\s+$/g,p=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,_=/^0o[0-7]+$/i,g=parseInt,M=(typeof r>"u"?"undefined":h(r))=="object"&&r&&r.Object===Object&&r,P=(typeof self>"u"?"undefined":h(self))=="object"&&self&&self.Object===Object&&self,A=M||P||Function("return this")(),w=Object.prototype,R=w.toString,X=Math.max,x=Math.min,S=function(){return A.Date.now()};n.exports=s}).call(i,function(){return this}())},function(n,i){(function(r){function o(S,I,O){function k(b){var ke=Le,Ce=W;return Le=W=void 0,Se=b,ae=S.apply(Ce,ke)}function Y(b){return Se=b,ie=setTimeout(L,I),Oe?k(b):ae}function V(b){var ke=b-_e,Ce=b-Se,He=I-ke;return Ve?X(He,ee-Ce):He}function K(b){var ke=b-_e,Ce=b-Se;return _e===void 0||ke>=I||ke<0||Ve&&Ce>=ee}function L(){var b=x();return K(b)?$(b):void(ie=setTimeout(L,V(b)))}function $(b){return ie=void 0,Fe&&Le?k(b):(Le=W=void 0,ae)}function Q(){ie!==void 0&&clearTimeout(ie),Se=0,Le=_e=W=ie=void 0}function oe(){return ie===void 0?ae:$(x())}function Me(){var b=x(),ke=K(b);if(Le=arguments,W=this,_e=b,ke){if(ie===void 0)return Y(_e);if(Ve)return ie=setTimeout(L,I),k(_e)}return ie===void 0&&(ie=setTimeout(L,I)),ae}var Le,W,ee,ae,ie,_e,Se=0,Oe=!1,Ve=!1,Fe=!0;if(typeof S!="function")throw new TypeError(h);return I=u(I)||0,s(O)&&(Oe=!!O.leading,Ve="maxWait"in O,ee=Ve?R(u(O.maxWait)||0,I):ee,Fe="trailing"in O?!!O.trailing:Fe),Me.cancel=Q,Me.flush=oe,Me}function s(S){var I=typeof S>"u"?"undefined":c(S);return!!S&&(I=="object"||I=="function")}function a(S){return!!S&&(typeof S>"u"?"undefined":c(S))=="object"}function l(S){return(typeof S>"u"?"undefined":c(S))=="symbol"||a(S)&&w.call(S)==m}function u(S){if(typeof S=="number")return S;if(l(S))return d;if(s(S)){var I=typeof S.valueOf=="function"?S.valueOf():S;S=s(I)?I+"":I}if(typeof S!="string")return S===0?S:+S;S=S.replace(v,"");var O=p.test(S);return O||f.test(S)?_(S.slice(2),O?2:8):y.test(S)?d:+S}var c=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(S){return typeof S}:function(S){return S&&typeof Symbol=="function"&&S.constructor===Symbol&&S!==Symbol.prototype?"symbol":typeof S},h="Expected a function",d=NaN,m="[object Symbol]",v=/^\s+|\s+$/g,y=/^[-+]0x[0-9a-f]+$/i,p=/^0b[01]+$/i,f=/^0o[0-7]+$/i,_=parseInt,g=(typeof r>"u"?"undefined":c(r))=="object"&&r&&r.Object===Object&&r,M=(typeof self>"u"?"undefined":c(self))=="object"&&self&&self.Object===Object&&self,P=g||M||Function("return this")(),A=Object.prototype,w=A.toString,R=Math.max,X=Math.min,x=function(){return P.Date.now()};n.exports=o}).call(i,function(){return this}())},function(n,i){function r(c){var h=void 0,d=void 0;for(h=0;h<c.length;h+=1)if(d=c[h],d.dataset&&d.dataset.aos||d.children&&r(d.children))return!0;return!1}function o(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function s(){return!!o()}function a(c,h){var d=window.document,m=o(),v=new m(l);u=h,v.observe(d.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}function l(c){c&&c.forEach(function(h){var d=Array.prototype.slice.call(h.addedNodes),m=Array.prototype.slice.call(h.removedNodes),v=d.concat(m);if(r(v))return u()})}Object.defineProperty(i,"__esModule",{value:!0});var u=function(){};i.default={isSupported:s,ready:a}},function(n,i){function r(d,m){if(!(d instanceof m))throw new TypeError("Cannot call a class as a function")}function o(){return navigator.userAgent||navigator.vendor||window.opera||""}Object.defineProperty(i,"__esModule",{value:!0});var s=function(){function d(m,v){for(var y=0;y<v.length;y++){var p=v[y];p.enumerable=p.enumerable||!1,p.configurable=!0,"value"in p&&(p.writable=!0),Object.defineProperty(m,p.key,p)}}return function(m,v,y){return v&&d(m.prototype,v),y&&d(m,y),m}}(),a=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,l=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,u=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,c=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,h=function(){function d(){r(this,d)}return s(d,[{key:"phone",value:function(){var m=o();return!(!a.test(m)&&!l.test(m.substr(0,4)))}},{key:"mobile",value:function(){var m=o();return!(!u.test(m)&&!c.test(m.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),d}();i.default=new h},function(n,i){Object.defineProperty(i,"__esModule",{value:!0});var r=function(s,a,l){var u=s.node.getAttribute("data-aos-once");a>s.position?s.node.classList.add("aos-animate"):typeof u<"u"&&(u==="false"||!l&&u!=="true")&&s.node.classList.remove("aos-animate")},o=function(s,a){var l=window.pageYOffset,u=window.innerHeight;s.forEach(function(c,h){r(c,u+l,a)})};i.default=o},function(n,i,r){function o(u){return u&&u.__esModule?u:{default:u}}Object.defineProperty(i,"__esModule",{value:!0});var s=r(12),a=o(s),l=function(u,c){return u.forEach(function(h,d){h.node.classList.add("aos-init"),h.position=(0,a.default)(h.node,c.offset)}),u};i.default=l},function(n,i,r){function o(u){return u&&u.__esModule?u:{default:u}}Object.defineProperty(i,"__esModule",{value:!0});var s=r(13),a=o(s),l=function(u,c){var h=0,d=0,m=window.innerHeight,v={offset:u.getAttribute("data-aos-offset"),anchor:u.getAttribute("data-aos-anchor"),anchorPlacement:u.getAttribute("data-aos-anchor-placement")};switch(v.offset&&!isNaN(v.offset)&&(d=parseInt(v.offset)),v.anchor&&document.querySelectorAll(v.anchor)&&(u=document.querySelectorAll(v.anchor)[0]),h=(0,a.default)(u).top,v.anchorPlacement){case"top-bottom":break;case"center-bottom":h+=u.offsetHeight/2;break;case"bottom-bottom":h+=u.offsetHeight;break;case"top-center":h+=m/2;break;case"bottom-center":h+=m/2+u.offsetHeight;break;case"center-center":h+=m/2+u.offsetHeight/2;break;case"top-top":h+=m;break;case"bottom-top":h+=u.offsetHeight+m;break;case"center-top":h+=u.offsetHeight/2+m}return v.anchorPlacement||v.offset||isNaN(c)||(d=c),h+d};i.default=l},function(n,i){Object.defineProperty(i,"__esModule",{value:!0});var r=function(o){for(var s=0,a=0;o&&!isNaN(o.offsetLeft)&&!isNaN(o.offsetTop);)s+=o.offsetLeft-(o.tagName!="BODY"?o.scrollLeft:0),a+=o.offsetTop-(o.tagName!="BODY"?o.scrollTop:0),o=o.offsetParent;return{top:a,left:s}};i.default=r},function(n,i){Object.defineProperty(i,"__esModule",{value:!0});var r=function(o){return o=o||document.querySelectorAll("[data-aos]"),Array.prototype.map.call(o,function(s){return{node:s}})};i.default=r}])})})(j_);var Tb=j_.exports;const Cu=J_(Tb);var X_={},Ar=Ei&&Ei.__assign||function(){return Ar=Object.assign||function(t){for(var e,n=1,i=arguments.length;n<i;n++){e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t},Ar.apply(this,arguments)},wb=Ei&&Ei.__createBinding||(Object.create?function(t,e,n,i){i===void 0&&(i=n);var r=Object.getOwnPropertyDescriptor(e,n);(!r||("get"in r?!e.__esModule:r.writable||r.configurable))&&(r={enumerable:!0,get:function(){return e[n]}}),Object.defineProperty(t,i,r)}:function(t,e,n,i){i===void 0&&(i=n),t[i]=e[n]}),Ab=Ei&&Ei.__setModuleDefault||(Object.create?function(t,e){Object.defineProperty(t,"default",{enumerable:!0,value:e})}:function(t,e){t.default=e}),Cb=Ei&&Ei.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(t!=null)for(var n in t)n!=="default"&&Object.prototype.hasOwnProperty.call(t,n)&&wb(e,t,n);return Ab(e,t),e};Object.defineProperty(X_,"__esModule",{value:!0});var Qa=Cb(Ue),Ja=Ue,bb=function(t){var e=Ar({cardStyles:{back:{},front:{}},cardZIndex:"auto",containerStyle:{},flipDirection:"horizontal",flipSpeedBackToFront:.6,flipSpeedFrontToBack:.6,infinite:!1,isFlipped:!1},t),n=e.cardStyles,i=n.back,r=n.front,o=e.cardZIndex,s=e.containerStyle,a=e.containerClassName,l=e.flipDirection,u=e.flipSpeedFrontToBack,c=e.flipSpeedBackToFront,h=e.infinite,d=e.isFlipped,m=(0,Ja.useState)(d),v=m[0],y=m[1],p=(0,Ja.useState)(0),f=p[0],_=p[1];(0,Ja.useEffect)(function(){d!==v&&(y(d),_(function(x){return x+180}))},[d]);var g=(0,Ja.useMemo)(function(){var x="react-card-flip";return a&&(x+=" ".concat(a)),x},[a]),M=function(x){if(t.children.length!==2)throw new Error("Component ReactCardFlip requires 2 children to function");return t.children[x]},P="rotateY(".concat(h?f:d?180:0,"deg)"),A="rotateY(".concat(h?f+180:d?0:-180,"deg)"),w="rotateX(".concat(h?f:d?180:0,"deg)"),R="rotateX(".concat(h?f+180:d?0:-180,"deg)"),X={back:Ar({WebkitBackfaceVisibility:"hidden",backfaceVisibility:"hidden",height:"100%",left:"0",position:d?"relative":"absolute",top:"0",transform:l==="horizontal"?A:R,transformStyle:"preserve-3d",transition:"".concat(u,"s"),width:"100%",zIndex:d?"2":"1"},i),container:{zIndex:"".concat(o)},flipper:{height:"100%",perspective:"1000px",position:"relative",width:"100%"},front:Ar({WebkitBackfaceVisibility:"hidden",backfaceVisibility:"hidden",height:"100%",left:"0",position:d?"absolute":"relative",top:"0",transform:l==="horizontal"?P:w,transformStyle:"preserve-3d",transition:"".concat(c,"s"),width:"100%",zIndex:"2"},r)};return Qa.createElement("div",{className:g,style:Ar(Ar({},X.container),s)},Qa.createElement("div",{className:"react-card-flipper",style:X.flipper},Qa.createElement("div",{className:"react-card-front",style:X.front},M(0)),Qa.createElement("div",{className:"react-card-back",style:X.back},M(1))))},Rb=X_.default=bb;function Pb(){const t=[{titleId:"experience.fullstack.title",descriptionId:"experience.fullstack.description",frontImg:gb,backImg:Sb},{titleId:"experience.uiux.title",descriptionId:"experience.uiux.description",frontImg:vb,backImg:Eb},{titleId:"experience.concept.title",descriptionId:"experience.concept.description",frontImg:_b,backImg:Mb},{titleId:"experience.digital.title",descriptionId:"experience.digital.description",frontImg:xb,backImg:yb}],[e,n]=Ue.useState(Array(t.length).fill(!1)),i=r=>{const o=[...e];o[r]=!o[r],n(o)};return Ue.useEffect(()=>{Cu.init({duration:1e3,once:!0})},[]),N.jsx("div",{className:"experience-border",children:N.jsx("div",{className:"container",children:N.jsxs("div",{className:"experience-content",children:[N.jsx("div",{className:"experience-top",children:N.jsx("h1",{className:"extra-large-heading font-default-unimportant animate__animated animate__fadeInRight animate__delay-1s",children:N.jsx(je,{id:"experience.title",defaultMessage:"WHAT I'VE BEEN DOING?"})})}),N.jsx("div",{className:"spacing-md"}),N.jsx("div",{className:"experience-flex","data-aos":"fade-up","data-aos-delay":"500",children:t.map((r,o)=>N.jsxs("div",{className:"experience-item",children:[N.jsx("div",{className:"spacing-lg"}),N.jsxs(Rb,{isFlipped:e[o],children:[N.jsxs("div",{className:"experience-img-container front",children:[N.jsx("img",{className:"experience-img",src:r.frontImg,alt:r.titleId,onClick:()=>i(o)}),N.jsx("div",{className:"hover-text font-default-black small-heading",children:N.jsx(je,{id:"experience.clickToFlip",defaultMessage:"Click to flip"})})]}),N.jsx("div",{className:"experience-img-container back",children:N.jsx("img",{className:"experience-img",src:r.backImg,alt:r.titleId,onClick:()=>i(o)})})]}),N.jsx("div",{className:"spacing-md"}),N.jsx("h3",{className:"small-heading font-default-black alignment",children:N.jsx(je,{id:r.titleId,defaultMessage:r.titleId})}),N.jsx("div",{className:"spacing-xs"}),N.jsx("p",{className:"running-text font-default-normal alignment",children:N.jsx(je,{id:r.descriptionId,defaultMessage:r.descriptionId})})]},o))})]})})})}const Lb="/assets/role/JU-logo.png",Nb="/assets/role/NCL-logo.png",Ib="/assets/role/study-fill.png",Db="/assets/role/work.png",Ub="/assets/role/getein.jpeg",Fb="/assets/role/tjb.png",Ob="/assets/role/startup.jpeg",kb="/assets/role/9you.png",gg="/assets/role/drop-down.png";function Bb(){const[t,e]=Ue.useState({}),[n,i]=Ue.useState({}),r=l=>{e(u=>({...u,[l]:!u[l]}))},o=l=>{i(u=>({...u,[l]:!u[l]}))},s=[{id:1,schoolImg:Lb,schoolName:"role.school.ju",title:"role.school.juTitle",description:"role.school.juDesc",timeLocation:"role.school.ju.timeLocation",thesis:"role.ju.thesis",thesisDesc:"role.thesisDesc.ju"},{id:2,schoolImg:Nb,schoolName:"role.school.ncl",title:"role.school.nclTitle",description:"role.school.nclDesc",timeLocation:"role.school.ncl.timeLocation",thesis:"role.ncl.thesis",thesisDesc:"role.thesisDesc.ncl"}],a=[{id:1,companyLogo:Ub,jobTitle:"role.work.getein.jobTitle",company:"role.work.getein.company",workTime:"role.work.getein.workTime",roleDesc:["role.work.getein.desc1","role.work.getein.desc2","role.work.getein.desc3","role.work.getein.desc4","role.work.getein.desc5","role.work.getein.desc6","role.work.getein.desc7"]},{id:2,companyLogo:Fb,jobTitle:"role.work.tjb.jobTitle",company:"role.work.tjb.company",workTime:"role.work.tjb.workTime",roleDesc:["role.work.tjb.desc1","role.work.tjb.desc2","role.work.tjb.desc3"]},{id:3,companyLogo:Ob,jobTitle:"role.work.startup.jobTitle",company:"role.work.startup.company",workTime:"role.work.startup.workTime",roleDesc:["role.work.startup.desc1","role.work.startup.desc2","role.work.startup.desc3","role.work.startup.desc4"]},{id:4,companyLogo:kb,jobTitle:"role.work.jiuYou.jobTitle",company:"role.work.jiuYou.company",workTime:"role.work.jiuYou.workTime",roleDesc:["role.work.jiuYou.desc1","role.work.jiuYou.desc2","role.work.jiuYou.desc3","role.work.jiuYou.desc4"]}];return Ue.useEffect(()=>{Cu.init({duration:1e3,once:!0})},[]),N.jsxs("div",{className:"container",children:[N.jsx("div",{className:"role-top","data-aos":"fade-left","data-aos-delay":"500",children:N.jsx("h1",{className:"extra-large-heading font-default-unimportant",children:N.jsx(je,{id:"role.title",defaultMessage:"A BIT MORE ABOUT ME?"})})}),N.jsx("div",{className:"spacing-lg"}),N.jsxs("div",{className:"role-mid","data-aos":"fade-up","data-aos-delay":"1000",children:[N.jsxs("h3",{className:"small-heading font-default-offwhite",children:[N.jsx("img",{className:"RoleIcon",src:Ib,alt:"study icon"}),N.jsx(je,{id:"role.education",defaultMessage:"Education"})]}),N.jsx("div",{className:"spacing-md"}),N.jsx("div",{className:"eduWrapper",children:s.map(l=>N.jsxs("div",{className:"edu-item",onClick:()=>r(l.id),children:[N.jsx("div",{className:"logo-wrapper",children:N.jsx("img",{className:"UniLogo",src:l.schoolImg,alt:`${l.schoolName} logo`})}),N.jsx("div",{className:"spacing-md"}),N.jsx("h3",{className:"small-heading font-default-offwhite",children:N.jsx(je,{id:l.schoolName})}),N.jsx("div",{className:"spacing-xs"}),N.jsx("p",{className:"running-text font-default-offwhite",children:N.jsx(je,{id:l.title})}),N.jsx("div",{className:"spacing-xs"}),N.jsx("p",{className:"running-text font-default-unimportant",children:N.jsx(je,{id:l.description})}),N.jsx("div",{className:"spacing-xs"}),N.jsx("p",{className:"small-text font-default-unimportant",children:N.jsx(je,{id:l.timeLocation})}),N.jsx("div",{className:"spacing-sm"}),N.jsxs("div",{className:"edu-unfold border-top",children:[N.jsx("div",{className:"spacing-xs"}),N.jsx("img",{className:`unfold-icon ${t[l.id]?"rotate":""}`,src:gg,alt:"Unfold icon"})]}),N.jsxs("div",{className:`edu-content ${t[l.id]?"show":"hide"}`,children:[N.jsx("div",{className:"spacing-xs"}),N.jsx("h3",{className:"small-heading font-default-offwhite",children:N.jsx(je,{id:l.thesis})}),N.jsx("div",{className:"spacing-xs"}),N.jsx("p",{className:"running-text font-default-unimportant",children:N.jsx(je,{id:l.thesisDesc})})]})]},l.id))})]}),N.jsx("div",{className:"spacing-md"}),N.jsxs("div",{className:"role-bottom","data-aos":"fade-up","data-aos-delay":"1000",children:[N.jsxs("h3",{className:"small-heading font-default-offwhite",children:[N.jsx("img",{className:"RoleIcon",src:Db,alt:"work icon"}),N.jsx(je,{id:"role.workingExperience",defaultMessage:"Working Experience"})]}),N.jsx("div",{className:"spacing-md"}),N.jsx("div",{className:"work-wrapper",children:a.map(l=>N.jsxs("div",{className:"work-item",onClick:()=>o(l.id),children:[N.jsx("div",{className:"logo-wrapper",children:N.jsx("img",{className:"workLogo",src:l.companyLogo,alt:`${l.company} logo`})}),N.jsx("div",{className:"spacing-md"}),N.jsx("h3",{className:"small-heading font-default-offwhite",children:N.jsx(je,{id:l.jobTitle})}),N.jsx("div",{className:"spacing-xs"}),N.jsx("p",{className:"running-text font-default-offwhite",children:N.jsx(je,{id:l.company})}),N.jsx("div",{className:"spacing-xs"}),N.jsx("p",{className:"small-text font-default-unimportant",children:N.jsx(je,{id:l.workTime})}),N.jsx("div",{className:"spacing-sm"}),N.jsxs("div",{className:"edu-unfold border-top",children:[N.jsx("div",{className:"spacing-xs"}),N.jsx("img",{className:`unfold-icon ${n[l.id]?"rotate":""}`,src:gg,alt:"Unfold icon"})]}),N.jsxs("div",{className:`work-content ${n[l.id]?"show":"hide"}`,children:[N.jsx("div",{className:"spacing-xs"}),l.roleDesc.map((u,c)=>N.jsxs("p",{className:"running-text font-default-unimportant line-height",children:[N.jsx(je,{id:u}),N.jsx("div",{className:"spacing-xs"})]},c))]})]},l.id))})]})]})}const Ws={_origin:"https://api.emailjs.com"},Hb=(t,e="https://api.emailjs.com")=>{Ws._userID=t,Ws._origin=e},Y_=(t,e,n)=>{if(!t)throw"The user ID is required. Visit https://dashboard.emailjs.com/admin/integration";if(!e)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!n)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};class vg{constructor(e){this.status=e.status,this.text=e.responseText}}const $_=(t,e,n={})=>new Promise((i,r)=>{const o=new XMLHttpRequest;o.addEventListener("load",({target:s})=>{const a=new vg(s);a.status===200||a.text==="OK"?i(a):r(a)}),o.addEventListener("error",({target:s})=>{r(new vg(s))}),o.open("POST",Ws._origin+t,!0),Object.keys(n).forEach(s=>{o.setRequestHeader(s,n[s])}),o.send(e)}),zb=(t,e,n,i)=>{const r=i||Ws._userID;return Y_(r,t,e),$_("/api/v1.0/email/send",JSON.stringify({lib_version:"3.2.0",user_id:r,service_id:t,template_id:e,template_params:n}),{"Content-type":"application/json"})},Gb=t=>{let e;if(typeof t=="string"?e=document.querySelector(t):e=t,!e||e.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of form";return e},Vb=(t,e,n,i)=>{const r=i||Ws._userID,o=Gb(n);Y_(r,t,e);const s=new FormData(o);return s.append("lib_version","3.2.0"),s.append("service_id",t),s.append("template_id",e),s.append("user_id",r),$_("/api/v1.0/email/send-form",s)},Wb={init:Hb,send:zb,sendForm:Vb},jb=Ue.forwardRef((t,e)=>{const[n,i]=Ue.useState(!1),[r,o]=Ue.useState(!1),[s,a]=Ue.useState("");Xi(),Ue.useEffect(()=>{Cu.init({duration:1e3,once:!0})},[]);const l=u=>{u.preventDefault(),o(!0),a(""),Wb.sendForm("service_ukgs7xc","template_fhh63dg",u.target,"HH4qoY6dCukdxfoDo").then(c=>{console.log(c.text),i(!0),o(!1)},c=>{console.log(c.text),a(N.jsx(je,{id:"contact.form.errorMessage"})),o(!1)})};return N.jsxs("div",{className:"container border-bottom",id:"contact",ref:e,children:[" ",N.jsxs("div",{className:"contact-wrapper",children:[N.jsxs("div",{className:"contact-left",children:[N.jsx("h1",{className:"extra-large-heading font-default-black","data-aos":"fade-left","data-aos-delay":"500",children:N.jsx(je,{id:"contact.title",defaultMessage:"HAVE A CHAT?"})}),N.jsx("div",{className:"spacing-md"}),N.jsxs("div",{className:"contact-method","data-aos":"fade-up","data-aos-delay":"1000",children:[N.jsx("h3",{className:"small-heading font-default-black",children:N.jsx(je,{id:"contact.email",defaultMessage:"Email:"})}),N.jsx("div",{className:"spacing-xs"}),N.jsx("a",{className:"running-text font-default-normal borderBox",href:"mailto:haochuan607@126.com",children:"haochuan607@126.com"})]}),N.jsx("div",{className:"spacing-sm"}),N.jsxs("div",{className:"contact-method","data-aos":"fade-up","data-aos-delay":"1000",children:[N.jsx("h3",{className:"small-heading font-default-black",children:N.jsx(je,{id:"contact.phone",defaultMessage:"Phone:"})}),N.jsx("div",{className:"spacing-xs"}),N.jsx("a",{className:"running-text font-default-normal borderBox",href:"tel:+447887852190",children:"+44 7887852190 (UK)"}),N.jsx("a",{className:"running-text font-default-normal borderBox",href:"tel:+8613706142607",children:"+86 13706142607 (国内)"}),N.jsx("div",{className:"spacing-md"})]})]}),N.jsxs("div",{className:"contact-right","data-aos":"fade-up","data-aos-delay":"1000",children:[n?N.jsx("p",{className:"running-text font-default-black",children:N.jsx(je,{id:"contact.form.successMessage",defaultMessage:"Thanks for contacting me! I will get back to you ASAP!"})}):N.jsxs("form",{onSubmit:l,children:[N.jsx("input",{required:!0,type:"text",name:"from_name",id:"from_name",className:"inputSmall",placeholder:Xi().formatMessage({id:"contact.form.namePlaceholder"})}),N.jsx("div",{className:"spacing-sm"}),N.jsx("input",{required:!0,type:"email",name:"email",id:"email",className:"inputSmall",placeholder:Xi().formatMessage({id:"contact.form.emailPlaceholder"})}),N.jsx("div",{className:"spacing-sm"}),N.jsx("textarea",{required:!0,name:"message",id:"message",placeholder:Xi().formatMessage({id:"contact.form.messagePlaceholder"}),className:"inputBig"}),N.jsx("div",{className:"spacing-sm"}),N.jsx("button",{type:"submit",className:"btn-default running-text",children:r?N.jsx(je,{id:"contact.form.sending",defaultMessage:"Sending..."}):N.jsx(je,{id:"contact.form.submit",defaultMessage:"Submit"})})]}),s&&N.jsxs("div",{className:"error-message",children:[N.jsx("div",{className:"spacing-sm"}),N.jsx("p",{className:"running-text red",children:s})]})]})]})]})}),Xb="/assets/legend/React.png",Yb="/assets/legend/Vite.png",$b="/assets/legend/Three.png",qb="/assets/legend/Tailwind.png",Kb="/assets/legend/Email.png";function Zb(){Ue.useEffect(()=>{Cu.init({duration:1e3,once:!0})},[]);const t=[{id:1,img:Xb,name:"React"},{id:2,img:Yb,name:"Vite"},{id:3,img:$b,name:"Three.js"},{id:4,img:qb,name:"Tailwind"},{id:5,img:Kb,name:"EmailJS"}];return N.jsxs("div",{className:"container",children:[N.jsx("h2",{className:"large-heading font-default-black","data-aos":"fade-left","data-aos-delay":"500",children:N.jsx(je,{id:"legend.title",defaultMessage:"This website is built by:"})}),N.jsx("div",{className:"spacing-md"}),N.jsx("div",{className:"legend-wrapper","data-aos":"fade-up","data-aos-delay":"500",children:t.map(e=>N.jsxs("div",{className:"legend-item",children:[N.jsx("img",{src:e.img,alt:e.name,className:"legend-logo"}),N.jsx("h3",{className:"small-heading font-default-black",children:e.name})]},e.id))}),N.jsx("div",{className:"legend-bottom font-default-unimportant small-text",children:"2024 Haochuan Zhong"})]})}const Qb={"navbar.portfolio":"Portfolio","navbar.contact":"Contact","navbar.language.en":"EN","navbar.language.zh":"中文","hero.greeting":"Hello there!","hero.intro":"I am Developer+Designer Haochuan ","hero.description":"With a robust foundation built through two years of hands-on experience as a developer and designer, and four years studying in computing subjects; I bring a wealth of expertise across multiple domains, including full-stack development, UI/UX design, graphic design, and digital R&D.","hero.downloadCV":"Download CV","hero.cv.english":"EN","hero.cv.chinese":"中文","hero.scrollHint":"↓ Scroll and view more","experience.title":"WHAT I'VE BEEN DOING?","experience.fullstack.title":"Full-stack Development","experience.fullstack.description":"I worked as a full-stack developer for one year, skilled in Vue.js, React, and Node.js. Developed and maintained multiple web applications, ensuring efficient code and smooth project delivery from UI/UX to backend integration.","experience.uiux.title":"UI/UX Design","experience.uiux.description":"I had one-year experience as a UI/UX designer, leading the design of cross-platform interfaces from user research to HiFi prototypes. Skilled in Sketch, Figma, Pixso and Adobe XD, with a focus on creating visually consistent, user-centric designs.","experience.concept.title":"Concept Art","experience.concept.description":"During my internship as a game concept artist, I specialized in designing game environments using both 2D and 3D methods. I created unique visual concepts for several established game IPs, ensuring alignment with the game world and aesthetics.","experience.digital.title":"Digital Content","experience.digital.description":"As a digital content producer, I contributed to graphic design, film making, social media creativity, and material design. I developed creative visual and material content for diverse clients and campaigns, ensuring brand identity and maximizing engagement with target audiences.","experience.clickToFlip":"Click to flip","role.title":"A BIT MORE ABOUT ME?","role.education":"Education","role.workingExperience":"Working Experience","role.ju.thesis":"Bachelor Research","role.ncl.thesis":"Master Research","role.thesisDesc.ju":"The Functions in Online Conference Platform that Influence Online Learning Experience of Design Students","role.thesisDesc.ncl":"An Exploration of Generative AI in Assisting Low-Code Front-end Development for Individuals with Lower Front-End Programming Expertise","role.school.ju":"Jönköping University","role.school.juTitle":"Bachelor of Informatics, New Media Design","role.school.juDesc":"Overall grade: 86/100, top 20%; Front-end development, User-centric design, User research, Interaction design","role.school.ncl":"Newcastle University","role.school.nclTitle":"MSc, Human-computer interaction","role.school.nclDesc":"Overall grade: 2:1 Merit; HCI, Human AI interaction (HAI), Machine Learning, IoT, Software development","role.work.getein.jobTitle":"Full stack developer, UI/UX designer","role.work.getein.desc1":"--Front-end interface development (Vue/React)","role.work.getein.desc2":"--Version control and code management (Git/Umbraco)","role.work.getein.desc3":"--SEO practice (Google analytics)","role.work.getein.desc4":"--Back-end development (Node.js)","role.work.getein.desc5":"--Database handling (MySQL/MongoDB)","role.work.getein.desc6":"--User interface design (Figma/Pixso)","role.work.getein.desc7":"--Typography, iconography, layout, and interaction","role.work.tjb.jobTitle":"Coding instructor","role.work.tjb.desc1":"--Demonstrating fundamentals of Front-end development and UI/UX","role.work.tjb.desc2":"--Conducting programming workshops","role.work.tjb.desc3":"--Curriculum design and course planning","role.work.startup.jobTitle":"Creative designer","role.work.startup.desc1":"--Graphic design (Adobes)","role.work.startup.desc2":"--Web design (Figma/HTML/CSS)","role.work.startup.desc3":"--Material design (T-shirt/Brochure/Poster)","role.work.startup.desc4":"--Tiktok video production","role.work.jiuYou.jobTitle":"UI designer, Game concept artist","role.work.jiuYou.desc1":"--Game interface design","role.work.jiuYou.desc2":"--Implementing interfaces and animations in game engines (Unity)","role.work.jiuYou.desc3":"--Typography, iconography, layout, and texture design","role.work.jiuYou.desc4":"--2+3D Matte painting (PS+Blender)","role.school.ju.timeLocation":"Jönköping, Sweden -- Aug 2019 - Jul 2022","role.school.ncl.timeLocation":"Newcastle upon Tyne, UK -- Sep 2023 - Aug 2024","role.work.getein.company":"Getein Biotech","role.work.tjb.company":"TianJiaBing High School","role.work.startup.company":"Startup Jönköping","role.work.jiuYou.company":"Shanghai 9You Technology","role.work.getein.workTime":"Nanjing, China -- Sep 2022 - Aug 2023","role.work.tjb.workTime":"Nanjing, China -- Oct 2022 - May 2023","role.work.startup.workTime":"Jönköping, Sweden -- Jan 2020 - Jul 2022","role.work.jiuYou.workTime":"Shanghai, China -- Mar 2021 - Jun 2021","contact.title":"HAVE A CHAT?","contact.email":"Email:","contact.phone":"Phone:","contact.form.namePlaceholder":"Your name*","contact.form.emailPlaceholder":"Your email*","contact.form.messagePlaceholder":"Your message*","contact.form.submit":"Submit","contact.form.sending":"Sending...","contact.form.successMessage":"Thanks for contacting me! I will get back to you ASAP!","contact.form.errorMessage":"Oops! Something went wrong, and your message didn't make it through. Please reach out to me directly using the contact details on the left. I'm looking forward to hearing from you!","legend.title":"This website is built by:"},Jb={"navbar.portfolio":"钟灏川的个人站","navbar.contact":"联系我","navbar.language.en":"EN","navbar.language.zh":"中文","hero.greeting":"欢迎来到我的个人站","hero.intro":"我是设计师+程序员钟灏川","hero.description":"凭借两年的开发与设计经验，以及四年扎实的计算机学科学习，我在全栈开发、UI/UX设计、平面设计和数字产品研发与创新等多个领域积累了深厚的专业知识和实战技能。这些多元化的优势使我能够在复杂项目中与团队高效协作，灵活应对挑战，输出创新方案。","hero.downloadCV":"下载我的简历","hero.cv.english":"EN","hero.cv.chinese":"中文","hero.scrollHint":"↓ 下滑查看更多内容","experience.title":"这些年我点了哪些技能？","experience.fullstack.title":"全栈开发","experience.fullstack.description":"作为一名全栈开发，我精通Vue、React和Node等技术栈。我曾从UI/UX设计到后端负责开发和维护多个Web应用，小程序；确保代码高效、项目顺利交付。在工作中，我始终注重用户体验与系统性能的平衡，不断优化开发流程，推动项目取得突破。","experience.uiux.title":"UI/UX设计","experience.uiux.description":"作为UI/UX设计师，我参与了多个跨平台界面的设计工作，从用户调研到高保真原型，全面覆盖设计流程。精通使用Sketch、Figma、Pixso和Adobe XD等设计工具，专注于打造视觉一致、用户友好的设计体验，并始终以用户为中心，创造简约高效的用户界面。","experience.concept.title":"概念艺术","experience.concept.description":"在担任游戏概念设计师期间，我擅长使用Blender+PS的2+3D技术进行游戏环境设计，为多个知名游戏IP打造了独特的视觉概念，确保设计与游戏世界观和美学风格高度契合，赋予玩家沉浸式的视觉体验。","experience.digital.title":"数字内容","experience.digital.description":"作为一名数字内容创作者，我参与了平面设计、视频剪辑包装、社交媒体创意以及物料设计。我曾为不同客户，商业活动，会展设计社媒视觉及物料，确保品牌调性的同时最大化贴合目标受众喜好，提升线上线下转化率。","experience.clickToFlip":"点击翻转","role.title":"我的个人履历","role.education":"教育经历","role.workingExperience":"工作经历","role.ju.thesis":"本科研究","role.ncl.thesis":"硕士研究","role.thesisDesc.ju":"《探索远程学习是如何影响设计学生的用户体验》","role.thesisDesc.ncl":"《研究人工智能如何辅助低代码前端开发》","role.school.ju":"延雪平大学","role.school.juTitle":"信息学学士，新媒体设计","role.school.juDesc":"总成绩：86/100，前20%；主要课程：前端开发，用户中心设计，用户研究，交互设计","role.school.ncl":"纽卡斯尔大学","role.school.nclTitle":"计算机硕士，人机交互","role.school.nclDesc":"总成绩：2:1荣誉；主要课程：人机交互，人机AI交互，机器学习，物联网（IoT），软件开发","role.work.getein.jobTitle":"全栈开发工程师，UI/UX设计师","role.work.getein.desc1":"--使用Vue.js和React.js开发响应式Web应用程序。","role.work.getein.desc2":"--通过Git和Umbraco CMS管理内容版本和发布。","role.work.getein.desc3":"--使用Google Analytics实施SEO优化策略。","role.work.getein.desc4":"--使用Node.js构建和维护服务端应用程序。","role.work.getein.desc5":"--管理数据库（MySQL，MongoDB）。","role.work.getein.desc6":"--在Figma和Pixso中设计用户界面，优化用户体验和视觉一致性。","role.work.getein.desc7":"--进行产品研究，规范排版、图标和交互设计，改善整体用户体验。","role.work.tjb.jobTitle":"计算机助教","role.work.tjb.desc1":"--讲解前端开发和UI/UX设计的核心概念以及基础操作。","role.work.tjb.desc2":"--辅助计算机教师组织编程挑战活动，鼓励学生的参与和多元化发展技能。","role.work.tjb.desc3":"--参与课程设计和课程内容规划，确保学习内容简单易懂且有趣味性。","role.work.startup.jobTitle":"创意设计师","role.work.startup.desc1":"--使用Adobe Creative Suite设计高质量平面内容。","role.work.startup.desc2":"--使用Figma，HTML和CSS设计网站，并与开发团队合作优化用户体验。","role.work.startup.desc3":"--为各种市场营销，会展活动设计T恤、宣传册和海报等物料。","role.work.startup.desc4":"--根据不同需求拍摄并制作ikTok视频，拓展公司自身以及客户的宣传途径，多种渠道提升影响力。","role.work.jiuYou.jobTitle":"UI设计师，游戏概念设计师","role.work.jiuYou.desc1":"--设计游戏交互界面和UI动画，并使用Unity实现交互机制。","role.work.jiuYou.desc2":"--设计游戏官网的排版、图标设计、布局和交互设计，以提升用户体验。","role.work.jiuYou.desc3":"--纹理设计，并使用Blender进行刚面建模。","role.work.jiuYou.desc4":"--设计绘制游戏内场景并辅助搭建高精度模型。","role.school.ju.timeLocation":"延雪平，瑞典 -- 2019年8月 - 2022年7月","role.school.ncl.timeLocation":"纽卡斯尔，英国 -- 2023年9月 - 2024年8月","role.work.getein.company":"基蛋生物","role.work.tjb.company":"田家炳高级中学","role.work.startup.company":"Startup Jönköping","role.work.jiuYou.company":"久游网","role.work.getein.workTime":"南京，中国 -- 2022年9月 - 2023年8月","role.work.tjb.workTime":"南京，中国 -- 2022年10月 - 2023年5月","role.work.startup.workTime":"延雪平，瑞典 -- 2020年1月 - 2022年7月","role.work.jiuYou.workTime":"上海，中国 -- 2021年3月 - 2021年6月","contact.title":"觉得我的网站还不错?","contact.email":"邮箱:","contact.phone":"电话:","contact.form.namePlaceholder":"您的名字*","contact.form.emailPlaceholder":"您的邮箱*","contact.form.messagePlaceholder":"您的留言*","contact.form.submit":"提交","contact.form.sending":"发送中...","contact.form.successMessage":"感谢您的联系！我会尽快回复您！","contact.form.errorMessage":"哎呀！出了点问题，您的消息没有发出。请通过左侧的联系方式直接联系我。期待与您交流！","legend.title":"本网站使用以下技术开发："},eR={en:Qb,zh:Jb};function tR(){const[t,e]=Ue.useState("en"),n=r=>{e(r)},i=Ue.useRef(null);return N.jsx(N.Fragment,{children:N.jsxs(JE,{locale:t,messages:eR[t],children:[N.jsxs("div",{className:"content",children:[N.jsx(tM,{contactRef:i,changeLanguage:n}),N.jsx(mb,{}),N.jsx(Pb,{})]}),N.jsx("div",{className:"darkbg",children:N.jsx("div",{className:"content",children:N.jsx(Bb,{})})}),N.jsx("div",{className:"content",children:N.jsx(jb,{ref:i})}),N.jsx("div",{className:"content",children:N.jsx(Zb,{})})]})})}Pv(document.getElementById("root")).render(N.jsx(Ue.StrictMode,{children:N.jsx(tR,{})}));
