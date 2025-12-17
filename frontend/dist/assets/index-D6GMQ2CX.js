(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function kT(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var r_={exports:{}},lu={},i_={exports:{}},te={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ko=Symbol.for("react.element"),CT=Symbol.for("react.portal"),PT=Symbol.for("react.fragment"),NT=Symbol.for("react.strict_mode"),bT=Symbol.for("react.profiler"),DT=Symbol.for("react.provider"),OT=Symbol.for("react.context"),VT=Symbol.for("react.forward_ref"),LT=Symbol.for("react.suspense"),MT=Symbol.for("react.memo"),jT=Symbol.for("react.lazy"),um=Symbol.iterator;function UT(t){return t===null||typeof t!="object"?null:(t=um&&t[um]||t["@@iterator"],typeof t=="function"?t:null)}var s_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},o_=Object.assign,a_={};function ds(t,e,n){this.props=t,this.context=e,this.refs=a_,this.updater=n||s_}ds.prototype.isReactComponent={};ds.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ds.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function l_(){}l_.prototype=ds.prototype;function gd(t,e,n){this.props=t,this.context=e,this.refs=a_,this.updater=n||s_}var yd=gd.prototype=new l_;yd.constructor=gd;o_(yd,ds.prototype);yd.isPureReactComponent=!0;var cm=Array.isArray,u_=Object.prototype.hasOwnProperty,_d={current:null},c_={key:!0,ref:!0,__self:!0,__source:!0};function h_(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)u_.call(e,r)&&!c_.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var u=Array(l),c=0;c<l;c++)u[c]=arguments[c+2];i.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Ko,type:t,key:s,ref:o,props:i,_owner:_d.current}}function FT(t,e){return{$$typeof:Ko,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function vd(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ko}function zT(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var hm=/\/+/g;function oc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?zT(""+t.key):e.toString(36)}function Xa(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Ko:case CT:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+oc(o,0):r,cm(i)?(n="",t!=null&&(n=t.replace(hm,"$&/")+"/"),Xa(i,e,n,"",function(c){return c})):i!=null&&(vd(i)&&(i=FT(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(hm,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",cm(t))for(var l=0;l<t.length;l++){s=t[l];var u=r+oc(s,l);o+=Xa(s,e,n,u,i)}else if(u=UT(t),typeof u=="function")for(t=u.call(t),l=0;!(s=t.next()).done;)s=s.value,u=r+oc(s,l++),o+=Xa(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function xa(t,e,n){if(t==null)return t;var r=[],i=0;return Xa(t,r,"","",function(s){return e.call(n,s,i++)}),r}function BT(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var gt={current:null},Ya={transition:null},$T={ReactCurrentDispatcher:gt,ReactCurrentBatchConfig:Ya,ReactCurrentOwner:_d};function d_(){throw Error("act(...) is not supported in production builds of React.")}te.Children={map:xa,forEach:function(t,e,n){xa(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return xa(t,function(){e++}),e},toArray:function(t){return xa(t,function(e){return e})||[]},only:function(t){if(!vd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};te.Component=ds;te.Fragment=PT;te.Profiler=bT;te.PureComponent=gd;te.StrictMode=NT;te.Suspense=LT;te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$T;te.act=d_;te.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=o_({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=_d.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)u_.call(e,u)&&!c_.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var c=0;c<u;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:Ko,type:t.type,key:i,ref:s,props:r,_owner:o}};te.createContext=function(t){return t={$$typeof:OT,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:DT,_context:t},t.Consumer=t};te.createElement=h_;te.createFactory=function(t){var e=h_.bind(null,t);return e.type=t,e};te.createRef=function(){return{current:null}};te.forwardRef=function(t){return{$$typeof:VT,render:t}};te.isValidElement=vd;te.lazy=function(t){return{$$typeof:jT,_payload:{_status:-1,_result:t},_init:BT}};te.memo=function(t,e){return{$$typeof:MT,type:t,compare:e===void 0?null:e}};te.startTransition=function(t){var e=Ya.transition;Ya.transition={};try{t()}finally{Ya.transition=e}};te.unstable_act=d_;te.useCallback=function(t,e){return gt.current.useCallback(t,e)};te.useContext=function(t){return gt.current.useContext(t)};te.useDebugValue=function(){};te.useDeferredValue=function(t){return gt.current.useDeferredValue(t)};te.useEffect=function(t,e){return gt.current.useEffect(t,e)};te.useId=function(){return gt.current.useId()};te.useImperativeHandle=function(t,e,n){return gt.current.useImperativeHandle(t,e,n)};te.useInsertionEffect=function(t,e){return gt.current.useInsertionEffect(t,e)};te.useLayoutEffect=function(t,e){return gt.current.useLayoutEffect(t,e)};te.useMemo=function(t,e){return gt.current.useMemo(t,e)};te.useReducer=function(t,e,n){return gt.current.useReducer(t,e,n)};te.useRef=function(t){return gt.current.useRef(t)};te.useState=function(t){return gt.current.useState(t)};te.useSyncExternalStore=function(t,e,n){return gt.current.useSyncExternalStore(t,e,n)};te.useTransition=function(){return gt.current.useTransition()};te.version="18.3.1";i_.exports=te;var U=i_.exports;const HT=kT(U);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var WT=U,qT=Symbol.for("react.element"),KT=Symbol.for("react.fragment"),GT=Object.prototype.hasOwnProperty,QT=WT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,XT={key:!0,ref:!0,__self:!0,__source:!0};function f_(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)GT.call(e,r)&&!XT.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:qT,type:t,key:s,ref:o,props:i,_owner:QT.current}}lu.Fragment=KT;lu.jsx=f_;lu.jsxs=f_;r_.exports=lu;var v=r_.exports,Qc={},p_={exports:{}},bt={},m_={exports:{}},g_={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(B,X){var Z=B.length;B.push(X);e:for(;0<Z;){var me=Z-1>>>1,le=B[me];if(0<i(le,X))B[me]=X,B[Z]=le,Z=me;else break e}}function n(B){return B.length===0?null:B[0]}function r(B){if(B.length===0)return null;var X=B[0],Z=B.pop();if(Z!==X){B[0]=Z;e:for(var me=0,le=B.length,we=le>>>1;me<we;){var Wt=2*(me+1)-1,qt=B[Wt],Vt=Wt+1,Lt=B[Vt];if(0>i(qt,Z))Vt<le&&0>i(Lt,qt)?(B[me]=Lt,B[Vt]=Z,me=Vt):(B[me]=qt,B[Wt]=Z,me=Wt);else if(Vt<le&&0>i(Lt,Z))B[me]=Lt,B[Vt]=Z,me=Vt;else break e}}return X}function i(B,X){var Z=B.sortIndex-X.sortIndex;return Z!==0?Z:B.id-X.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],c=[],f=1,p=null,m=3,x=!1,k=!1,N=!1,O=typeof setTimeout=="function"?setTimeout:null,w=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function I(B){for(var X=n(c);X!==null;){if(X.callback===null)r(c);else if(X.startTime<=B)r(c),X.sortIndex=X.expirationTime,e(u,X);else break;X=n(c)}}function b(B){if(N=!1,I(B),!k)if(n(u)!==null)k=!0,jr(D);else{var X=n(c);X!==null&&Ot(b,X.startTime-B)}}function D(B,X){k=!1,N&&(N=!1,w(_),_=-1),x=!0;var Z=m;try{for(I(X),p=n(u);p!==null&&(!(p.expirationTime>X)||B&&!R());){var me=p.callback;if(typeof me=="function"){p.callback=null,m=p.priorityLevel;var le=me(p.expirationTime<=X);X=t.unstable_now(),typeof le=="function"?p.callback=le:p===n(u)&&r(u),I(X)}else r(u);p=n(u)}if(p!==null)var we=!0;else{var Wt=n(c);Wt!==null&&Ot(b,Wt.startTime-X),we=!1}return we}finally{p=null,m=Z,x=!1}}var M=!1,T=null,_=-1,S=5,E=-1;function R(){return!(t.unstable_now()-E<S)}function C(){if(T!==null){var B=t.unstable_now();E=B;var X=!0;try{X=T(!0,B)}finally{X?A():(M=!1,T=null)}}else M=!1}var A;if(typeof g=="function")A=function(){g(C)};else if(typeof MessageChannel<"u"){var ze=new MessageChannel,St=ze.port2;ze.port1.onmessage=C,A=function(){St.postMessage(null)}}else A=function(){O(C,0)};function jr(B){T=B,M||(M=!0,A())}function Ot(B,X){_=O(function(){B(t.unstable_now())},X)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(B){B.callback=null},t.unstable_continueExecution=function(){k||x||(k=!0,jr(D))},t.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):S=0<B?Math.floor(1e3/B):5},t.unstable_getCurrentPriorityLevel=function(){return m},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(B){switch(m){case 1:case 2:case 3:var X=3;break;default:X=m}var Z=m;m=X;try{return B()}finally{m=Z}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(B,X){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var Z=m;m=B;try{return X()}finally{m=Z}},t.unstable_scheduleCallback=function(B,X,Z){var me=t.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?me+Z:me):Z=me,B){case 1:var le=-1;break;case 2:le=250;break;case 5:le=1073741823;break;case 4:le=1e4;break;default:le=5e3}return le=Z+le,B={id:f++,callback:X,priorityLevel:B,startTime:Z,expirationTime:le,sortIndex:-1},Z>me?(B.sortIndex=Z,e(c,B),n(u)===null&&B===n(c)&&(N?(w(_),_=-1):N=!0,Ot(b,Z-me))):(B.sortIndex=le,e(u,B),k||x||(k=!0,jr(D))),B},t.unstable_shouldYield=R,t.unstable_wrapCallback=function(B){var X=m;return function(){var Z=m;m=X;try{return B.apply(this,arguments)}finally{m=Z}}}})(g_);m_.exports=g_;var YT=m_.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var JT=U,Nt=YT;function F(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var y_=new Set,vo={};function di(t,e){Zi(t,e),Zi(t+"Capture",e)}function Zi(t,e){for(vo[t]=e,t=0;t<e.length;t++)y_.add(e[t])}var Mn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Xc=Object.prototype.hasOwnProperty,ZT=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,dm={},fm={};function eI(t){return Xc.call(fm,t)?!0:Xc.call(dm,t)?!1:ZT.test(t)?fm[t]=!0:(dm[t]=!0,!1)}function tI(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function nI(t,e,n,r){if(e===null||typeof e>"u"||tI(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function yt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Je={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Je[t]=new yt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Je[e]=new yt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Je[t]=new yt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Je[t]=new yt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Je[t]=new yt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Je[t]=new yt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Je[t]=new yt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Je[t]=new yt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Je[t]=new yt(t,5,!1,t.toLowerCase(),null,!1,!1)});var wd=/[\-:]([a-z])/g;function Ed(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(wd,Ed);Je[e]=new yt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(wd,Ed);Je[e]=new yt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(wd,Ed);Je[e]=new yt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Je[t]=new yt(t,1,!1,t.toLowerCase(),null,!1,!1)});Je.xlinkHref=new yt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Je[t]=new yt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Td(t,e,n,r){var i=Je.hasOwnProperty(e)?Je[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(nI(e,n,i,r)&&(n=null),r||i===null?eI(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Wn=JT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Aa=Symbol.for("react.element"),Ci=Symbol.for("react.portal"),Pi=Symbol.for("react.fragment"),Id=Symbol.for("react.strict_mode"),Yc=Symbol.for("react.profiler"),__=Symbol.for("react.provider"),v_=Symbol.for("react.context"),Sd=Symbol.for("react.forward_ref"),Jc=Symbol.for("react.suspense"),Zc=Symbol.for("react.suspense_list"),xd=Symbol.for("react.memo"),Jn=Symbol.for("react.lazy"),w_=Symbol.for("react.offscreen"),pm=Symbol.iterator;function Ls(t){return t===null||typeof t!="object"?null:(t=pm&&t[pm]||t["@@iterator"],typeof t=="function"?t:null)}var Ae=Object.assign,ac;function Ws(t){if(ac===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);ac=e&&e[1]||""}return`
`+ac+t}var lc=!1;function uc(t,e){if(!t||lc)return"";lc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{lc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Ws(t):""}function rI(t){switch(t.tag){case 5:return Ws(t.type);case 16:return Ws("Lazy");case 13:return Ws("Suspense");case 19:return Ws("SuspenseList");case 0:case 2:case 15:return t=uc(t.type,!1),t;case 11:return t=uc(t.type.render,!1),t;case 1:return t=uc(t.type,!0),t;default:return""}}function eh(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Pi:return"Fragment";case Ci:return"Portal";case Yc:return"Profiler";case Id:return"StrictMode";case Jc:return"Suspense";case Zc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case v_:return(t.displayName||"Context")+".Consumer";case __:return(t._context.displayName||"Context")+".Provider";case Sd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case xd:return e=t.displayName||null,e!==null?e:eh(t.type)||"Memo";case Jn:e=t._payload,t=t._init;try{return eh(t(e))}catch{}}return null}function iI(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return eh(e);case 8:return e===Id?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Ir(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function E_(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function sI(t){var e=E_(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ra(t){t._valueTracker||(t._valueTracker=sI(t))}function T_(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=E_(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function _l(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function th(t,e){var n=e.checked;return Ae({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function mm(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Ir(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function I_(t,e){e=e.checked,e!=null&&Td(t,"checked",e,!1)}function nh(t,e){I_(t,e);var n=Ir(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?rh(t,e.type,n):e.hasOwnProperty("defaultValue")&&rh(t,e.type,Ir(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function gm(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function rh(t,e,n){(e!=="number"||_l(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var qs=Array.isArray;function $i(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Ir(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function ih(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(F(91));return Ae({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function ym(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(F(92));if(qs(n)){if(1<n.length)throw Error(F(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Ir(n)}}function S_(t,e){var n=Ir(e.value),r=Ir(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function _m(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function x_(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function sh(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?x_(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ka,A_=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(ka=ka||document.createElement("div"),ka.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ka.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function wo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var to={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},oI=["Webkit","ms","Moz","O"];Object.keys(to).forEach(function(t){oI.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),to[e]=to[t]})});function R_(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||to.hasOwnProperty(t)&&to[t]?(""+e).trim():e+"px"}function k_(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=R_(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var aI=Ae({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function oh(t,e){if(e){if(aI[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(F(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(F(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(F(61))}if(e.style!=null&&typeof e.style!="object")throw Error(F(62))}}function ah(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var lh=null;function Ad(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var uh=null,Hi=null,Wi=null;function vm(t){if(t=Xo(t)){if(typeof uh!="function")throw Error(F(280));var e=t.stateNode;e&&(e=fu(e),uh(t.stateNode,t.type,e))}}function C_(t){Hi?Wi?Wi.push(t):Wi=[t]:Hi=t}function P_(){if(Hi){var t=Hi,e=Wi;if(Wi=Hi=null,vm(t),e)for(t=0;t<e.length;t++)vm(e[t])}}function N_(t,e){return t(e)}function b_(){}var cc=!1;function D_(t,e,n){if(cc)return t(e,n);cc=!0;try{return N_(t,e,n)}finally{cc=!1,(Hi!==null||Wi!==null)&&(b_(),P_())}}function Eo(t,e){var n=t.stateNode;if(n===null)return null;var r=fu(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(F(231,e,typeof n));return n}var ch=!1;if(Mn)try{var Ms={};Object.defineProperty(Ms,"passive",{get:function(){ch=!0}}),window.addEventListener("test",Ms,Ms),window.removeEventListener("test",Ms,Ms)}catch{ch=!1}function lI(t,e,n,r,i,s,o,l,u){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(f){this.onError(f)}}var no=!1,vl=null,wl=!1,hh=null,uI={onError:function(t){no=!0,vl=t}};function cI(t,e,n,r,i,s,o,l,u){no=!1,vl=null,lI.apply(uI,arguments)}function hI(t,e,n,r,i,s,o,l,u){if(cI.apply(this,arguments),no){if(no){var c=vl;no=!1,vl=null}else throw Error(F(198));wl||(wl=!0,hh=c)}}function fi(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function O_(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function wm(t){if(fi(t)!==t)throw Error(F(188))}function dI(t){var e=t.alternate;if(!e){if(e=fi(t),e===null)throw Error(F(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return wm(i),t;if(s===r)return wm(i),e;s=s.sibling}throw Error(F(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(F(189))}}if(n.alternate!==r)throw Error(F(190))}if(n.tag!==3)throw Error(F(188));return n.stateNode.current===n?t:e}function V_(t){return t=dI(t),t!==null?L_(t):null}function L_(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=L_(t);if(e!==null)return e;t=t.sibling}return null}var M_=Nt.unstable_scheduleCallback,Em=Nt.unstable_cancelCallback,fI=Nt.unstable_shouldYield,pI=Nt.unstable_requestPaint,De=Nt.unstable_now,mI=Nt.unstable_getCurrentPriorityLevel,Rd=Nt.unstable_ImmediatePriority,j_=Nt.unstable_UserBlockingPriority,El=Nt.unstable_NormalPriority,gI=Nt.unstable_LowPriority,U_=Nt.unstable_IdlePriority,uu=null,hn=null;function yI(t){if(hn&&typeof hn.onCommitFiberRoot=="function")try{hn.onCommitFiberRoot(uu,t,void 0,(t.current.flags&128)===128)}catch{}}var en=Math.clz32?Math.clz32:wI,_I=Math.log,vI=Math.LN2;function wI(t){return t>>>=0,t===0?32:31-(_I(t)/vI|0)|0}var Ca=64,Pa=4194304;function Ks(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Tl(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=Ks(l):(s&=o,s!==0&&(r=Ks(s)))}else o=n&~i,o!==0?r=Ks(o):s!==0&&(r=Ks(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-en(e),i=1<<n,r|=t[n],e&=~i;return r}function EI(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function TI(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-en(s),l=1<<o,u=i[o];u===-1?(!(l&n)||l&r)&&(i[o]=EI(l,e)):u<=e&&(t.expiredLanes|=l),s&=~l}}function dh(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function F_(){var t=Ca;return Ca<<=1,!(Ca&4194240)&&(Ca=64),t}function hc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Go(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-en(e),t[e]=n}function II(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-en(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function kd(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-en(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var de=0;function z_(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var B_,Cd,$_,H_,W_,fh=!1,Na=[],hr=null,dr=null,fr=null,To=new Map,Io=new Map,er=[],SI="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Tm(t,e){switch(t){case"focusin":case"focusout":hr=null;break;case"dragenter":case"dragleave":dr=null;break;case"mouseover":case"mouseout":fr=null;break;case"pointerover":case"pointerout":To.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Io.delete(e.pointerId)}}function js(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Xo(e),e!==null&&Cd(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function xI(t,e,n,r,i){switch(e){case"focusin":return hr=js(hr,t,e,n,r,i),!0;case"dragenter":return dr=js(dr,t,e,n,r,i),!0;case"mouseover":return fr=js(fr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return To.set(s,js(To.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Io.set(s,js(Io.get(s)||null,t,e,n,r,i)),!0}return!1}function q_(t){var e=qr(t.target);if(e!==null){var n=fi(e);if(n!==null){if(e=n.tag,e===13){if(e=O_(n),e!==null){t.blockedOn=e,W_(t.priority,function(){$_(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ja(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=ph(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);lh=r,n.target.dispatchEvent(r),lh=null}else return e=Xo(n),e!==null&&Cd(e),t.blockedOn=n,!1;e.shift()}return!0}function Im(t,e,n){Ja(t)&&n.delete(e)}function AI(){fh=!1,hr!==null&&Ja(hr)&&(hr=null),dr!==null&&Ja(dr)&&(dr=null),fr!==null&&Ja(fr)&&(fr=null),To.forEach(Im),Io.forEach(Im)}function Us(t,e){t.blockedOn===e&&(t.blockedOn=null,fh||(fh=!0,Nt.unstable_scheduleCallback(Nt.unstable_NormalPriority,AI)))}function So(t){function e(i){return Us(i,t)}if(0<Na.length){Us(Na[0],t);for(var n=1;n<Na.length;n++){var r=Na[n];r.blockedOn===t&&(r.blockedOn=null)}}for(hr!==null&&Us(hr,t),dr!==null&&Us(dr,t),fr!==null&&Us(fr,t),To.forEach(e),Io.forEach(e),n=0;n<er.length;n++)r=er[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<er.length&&(n=er[0],n.blockedOn===null);)q_(n),n.blockedOn===null&&er.shift()}var qi=Wn.ReactCurrentBatchConfig,Il=!0;function RI(t,e,n,r){var i=de,s=qi.transition;qi.transition=null;try{de=1,Pd(t,e,n,r)}finally{de=i,qi.transition=s}}function kI(t,e,n,r){var i=de,s=qi.transition;qi.transition=null;try{de=4,Pd(t,e,n,r)}finally{de=i,qi.transition=s}}function Pd(t,e,n,r){if(Il){var i=ph(t,e,n,r);if(i===null)Ec(t,e,r,Sl,n),Tm(t,r);else if(xI(i,t,e,n,r))r.stopPropagation();else if(Tm(t,r),e&4&&-1<SI.indexOf(t)){for(;i!==null;){var s=Xo(i);if(s!==null&&B_(s),s=ph(t,e,n,r),s===null&&Ec(t,e,r,Sl,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Ec(t,e,r,null,n)}}var Sl=null;function ph(t,e,n,r){if(Sl=null,t=Ad(r),t=qr(t),t!==null)if(e=fi(t),e===null)t=null;else if(n=e.tag,n===13){if(t=O_(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Sl=t,null}function K_(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(mI()){case Rd:return 1;case j_:return 4;case El:case gI:return 16;case U_:return 536870912;default:return 16}default:return 16}}var lr=null,Nd=null,Za=null;function G_(){if(Za)return Za;var t,e=Nd,n=e.length,r,i="value"in lr?lr.value:lr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Za=i.slice(t,1<r?1-r:void 0)}function el(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ba(){return!0}function Sm(){return!1}function Dt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ba:Sm,this.isPropagationStopped=Sm,this}return Ae(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ba)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ba)},persist:function(){},isPersistent:ba}),e}var fs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},bd=Dt(fs),Qo=Ae({},fs,{view:0,detail:0}),CI=Dt(Qo),dc,fc,Fs,cu=Ae({},Qo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Dd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Fs&&(Fs&&t.type==="mousemove"?(dc=t.screenX-Fs.screenX,fc=t.screenY-Fs.screenY):fc=dc=0,Fs=t),dc)},movementY:function(t){return"movementY"in t?t.movementY:fc}}),xm=Dt(cu),PI=Ae({},cu,{dataTransfer:0}),NI=Dt(PI),bI=Ae({},Qo,{relatedTarget:0}),pc=Dt(bI),DI=Ae({},fs,{animationName:0,elapsedTime:0,pseudoElement:0}),OI=Dt(DI),VI=Ae({},fs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),LI=Dt(VI),MI=Ae({},fs,{data:0}),Am=Dt(MI),jI={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},UI={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},FI={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function zI(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=FI[t])?!!e[t]:!1}function Dd(){return zI}var BI=Ae({},Qo,{key:function(t){if(t.key){var e=jI[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=el(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?UI[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Dd,charCode:function(t){return t.type==="keypress"?el(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?el(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),$I=Dt(BI),HI=Ae({},cu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Rm=Dt(HI),WI=Ae({},Qo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Dd}),qI=Dt(WI),KI=Ae({},fs,{propertyName:0,elapsedTime:0,pseudoElement:0}),GI=Dt(KI),QI=Ae({},cu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),XI=Dt(QI),YI=[9,13,27,32],Od=Mn&&"CompositionEvent"in window,ro=null;Mn&&"documentMode"in document&&(ro=document.documentMode);var JI=Mn&&"TextEvent"in window&&!ro,Q_=Mn&&(!Od||ro&&8<ro&&11>=ro),km=" ",Cm=!1;function X_(t,e){switch(t){case"keyup":return YI.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Y_(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ni=!1;function ZI(t,e){switch(t){case"compositionend":return Y_(e);case"keypress":return e.which!==32?null:(Cm=!0,km);case"textInput":return t=e.data,t===km&&Cm?null:t;default:return null}}function eS(t,e){if(Ni)return t==="compositionend"||!Od&&X_(t,e)?(t=G_(),Za=Nd=lr=null,Ni=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Q_&&e.locale!=="ko"?null:e.data;default:return null}}var tS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Pm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!tS[t.type]:e==="textarea"}function J_(t,e,n,r){C_(r),e=xl(e,"onChange"),0<e.length&&(n=new bd("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var io=null,xo=null;function nS(t){uv(t,0)}function hu(t){var e=Oi(t);if(T_(e))return t}function rS(t,e){if(t==="change")return e}var Z_=!1;if(Mn){var mc;if(Mn){var gc="oninput"in document;if(!gc){var Nm=document.createElement("div");Nm.setAttribute("oninput","return;"),gc=typeof Nm.oninput=="function"}mc=gc}else mc=!1;Z_=mc&&(!document.documentMode||9<document.documentMode)}function bm(){io&&(io.detachEvent("onpropertychange",ev),xo=io=null)}function ev(t){if(t.propertyName==="value"&&hu(xo)){var e=[];J_(e,xo,t,Ad(t)),D_(nS,e)}}function iS(t,e,n){t==="focusin"?(bm(),io=e,xo=n,io.attachEvent("onpropertychange",ev)):t==="focusout"&&bm()}function sS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return hu(xo)}function oS(t,e){if(t==="click")return hu(e)}function aS(t,e){if(t==="input"||t==="change")return hu(e)}function lS(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var nn=typeof Object.is=="function"?Object.is:lS;function Ao(t,e){if(nn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Xc.call(e,i)||!nn(t[i],e[i]))return!1}return!0}function Dm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Om(t,e){var n=Dm(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Dm(n)}}function tv(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?tv(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function nv(){for(var t=window,e=_l();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=_l(t.document)}return e}function Vd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function uS(t){var e=nv(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&tv(n.ownerDocument.documentElement,n)){if(r!==null&&Vd(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Om(n,s);var o=Om(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var cS=Mn&&"documentMode"in document&&11>=document.documentMode,bi=null,mh=null,so=null,gh=!1;function Vm(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;gh||bi==null||bi!==_l(r)||(r=bi,"selectionStart"in r&&Vd(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),so&&Ao(so,r)||(so=r,r=xl(mh,"onSelect"),0<r.length&&(e=new bd("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=bi)))}function Da(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Di={animationend:Da("Animation","AnimationEnd"),animationiteration:Da("Animation","AnimationIteration"),animationstart:Da("Animation","AnimationStart"),transitionend:Da("Transition","TransitionEnd")},yc={},rv={};Mn&&(rv=document.createElement("div").style,"AnimationEvent"in window||(delete Di.animationend.animation,delete Di.animationiteration.animation,delete Di.animationstart.animation),"TransitionEvent"in window||delete Di.transitionend.transition);function du(t){if(yc[t])return yc[t];if(!Di[t])return t;var e=Di[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in rv)return yc[t]=e[n];return t}var iv=du("animationend"),sv=du("animationiteration"),ov=du("animationstart"),av=du("transitionend"),lv=new Map,Lm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Dr(t,e){lv.set(t,e),di(e,[t])}for(var _c=0;_c<Lm.length;_c++){var vc=Lm[_c],hS=vc.toLowerCase(),dS=vc[0].toUpperCase()+vc.slice(1);Dr(hS,"on"+dS)}Dr(iv,"onAnimationEnd");Dr(sv,"onAnimationIteration");Dr(ov,"onAnimationStart");Dr("dblclick","onDoubleClick");Dr("focusin","onFocus");Dr("focusout","onBlur");Dr(av,"onTransitionEnd");Zi("onMouseEnter",["mouseout","mouseover"]);Zi("onMouseLeave",["mouseout","mouseover"]);Zi("onPointerEnter",["pointerout","pointerover"]);Zi("onPointerLeave",["pointerout","pointerover"]);di("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));di("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));di("onBeforeInput",["compositionend","keypress","textInput","paste"]);di("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));di("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));di("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Gs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),fS=new Set("cancel close invalid load scroll toggle".split(" ").concat(Gs));function Mm(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,hI(r,e,void 0,t),t.currentTarget=null}function uv(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,c=l.currentTarget;if(l=l.listener,u!==s&&i.isPropagationStopped())break e;Mm(i,l,c),s=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,c=l.currentTarget,l=l.listener,u!==s&&i.isPropagationStopped())break e;Mm(i,l,c),s=u}}}if(wl)throw t=hh,wl=!1,hh=null,t}function ye(t,e){var n=e[Eh];n===void 0&&(n=e[Eh]=new Set);var r=t+"__bubble";n.has(r)||(cv(e,t,2,!1),n.add(r))}function wc(t,e,n){var r=0;e&&(r|=4),cv(n,t,r,e)}var Oa="_reactListening"+Math.random().toString(36).slice(2);function Ro(t){if(!t[Oa]){t[Oa]=!0,y_.forEach(function(n){n!=="selectionchange"&&(fS.has(n)||wc(n,!1,t),wc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Oa]||(e[Oa]=!0,wc("selectionchange",!1,e))}}function cv(t,e,n,r){switch(K_(e)){case 1:var i=RI;break;case 4:i=kI;break;default:i=Pd}n=i.bind(null,e,n,t),i=void 0,!ch||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Ec(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;l!==null;){if(o=qr(l),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}l=l.parentNode}}r=r.return}D_(function(){var c=s,f=Ad(n),p=[];e:{var m=lv.get(t);if(m!==void 0){var x=bd,k=t;switch(t){case"keypress":if(el(n)===0)break e;case"keydown":case"keyup":x=$I;break;case"focusin":k="focus",x=pc;break;case"focusout":k="blur",x=pc;break;case"beforeblur":case"afterblur":x=pc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=xm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=NI;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=qI;break;case iv:case sv:case ov:x=OI;break;case av:x=GI;break;case"scroll":x=CI;break;case"wheel":x=XI;break;case"copy":case"cut":case"paste":x=LI;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=Rm}var N=(e&4)!==0,O=!N&&t==="scroll",w=N?m!==null?m+"Capture":null:m;N=[];for(var g=c,I;g!==null;){I=g;var b=I.stateNode;if(I.tag===5&&b!==null&&(I=b,w!==null&&(b=Eo(g,w),b!=null&&N.push(ko(g,b,I)))),O)break;g=g.return}0<N.length&&(m=new x(m,k,null,n,f),p.push({event:m,listeners:N}))}}if(!(e&7)){e:{if(m=t==="mouseover"||t==="pointerover",x=t==="mouseout"||t==="pointerout",m&&n!==lh&&(k=n.relatedTarget||n.fromElement)&&(qr(k)||k[jn]))break e;if((x||m)&&(m=f.window===f?f:(m=f.ownerDocument)?m.defaultView||m.parentWindow:window,x?(k=n.relatedTarget||n.toElement,x=c,k=k?qr(k):null,k!==null&&(O=fi(k),k!==O||k.tag!==5&&k.tag!==6)&&(k=null)):(x=null,k=c),x!==k)){if(N=xm,b="onMouseLeave",w="onMouseEnter",g="mouse",(t==="pointerout"||t==="pointerover")&&(N=Rm,b="onPointerLeave",w="onPointerEnter",g="pointer"),O=x==null?m:Oi(x),I=k==null?m:Oi(k),m=new N(b,g+"leave",x,n,f),m.target=O,m.relatedTarget=I,b=null,qr(f)===c&&(N=new N(w,g+"enter",k,n,f),N.target=I,N.relatedTarget=O,b=N),O=b,x&&k)t:{for(N=x,w=k,g=0,I=N;I;I=Si(I))g++;for(I=0,b=w;b;b=Si(b))I++;for(;0<g-I;)N=Si(N),g--;for(;0<I-g;)w=Si(w),I--;for(;g--;){if(N===w||w!==null&&N===w.alternate)break t;N=Si(N),w=Si(w)}N=null}else N=null;x!==null&&jm(p,m,x,N,!1),k!==null&&O!==null&&jm(p,O,k,N,!0)}}e:{if(m=c?Oi(c):window,x=m.nodeName&&m.nodeName.toLowerCase(),x==="select"||x==="input"&&m.type==="file")var D=rS;else if(Pm(m))if(Z_)D=aS;else{D=sS;var M=iS}else(x=m.nodeName)&&x.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(D=oS);if(D&&(D=D(t,c))){J_(p,D,n,f);break e}M&&M(t,m,c),t==="focusout"&&(M=m._wrapperState)&&M.controlled&&m.type==="number"&&rh(m,"number",m.value)}switch(M=c?Oi(c):window,t){case"focusin":(Pm(M)||M.contentEditable==="true")&&(bi=M,mh=c,so=null);break;case"focusout":so=mh=bi=null;break;case"mousedown":gh=!0;break;case"contextmenu":case"mouseup":case"dragend":gh=!1,Vm(p,n,f);break;case"selectionchange":if(cS)break;case"keydown":case"keyup":Vm(p,n,f)}var T;if(Od)e:{switch(t){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else Ni?X_(t,n)&&(_="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(_="onCompositionStart");_&&(Q_&&n.locale!=="ko"&&(Ni||_!=="onCompositionStart"?_==="onCompositionEnd"&&Ni&&(T=G_()):(lr=f,Nd="value"in lr?lr.value:lr.textContent,Ni=!0)),M=xl(c,_),0<M.length&&(_=new Am(_,t,null,n,f),p.push({event:_,listeners:M}),T?_.data=T:(T=Y_(n),T!==null&&(_.data=T)))),(T=JI?ZI(t,n):eS(t,n))&&(c=xl(c,"onBeforeInput"),0<c.length&&(f=new Am("onBeforeInput","beforeinput",null,n,f),p.push({event:f,listeners:c}),f.data=T))}uv(p,e)})}function ko(t,e,n){return{instance:t,listener:e,currentTarget:n}}function xl(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Eo(t,n),s!=null&&r.unshift(ko(t,s,i)),s=Eo(t,e),s!=null&&r.push(ko(t,s,i))),t=t.return}return r}function Si(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function jm(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,c=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&c!==null&&(l=c,i?(u=Eo(n,s),u!=null&&o.unshift(ko(n,u,l))):i||(u=Eo(n,s),u!=null&&o.push(ko(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var pS=/\r\n?/g,mS=/\u0000|\uFFFD/g;function Um(t){return(typeof t=="string"?t:""+t).replace(pS,`
`).replace(mS,"")}function Va(t,e,n){if(e=Um(e),Um(t)!==e&&n)throw Error(F(425))}function Al(){}var yh=null,_h=null;function vh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var wh=typeof setTimeout=="function"?setTimeout:void 0,gS=typeof clearTimeout=="function"?clearTimeout:void 0,Fm=typeof Promise=="function"?Promise:void 0,yS=typeof queueMicrotask=="function"?queueMicrotask:typeof Fm<"u"?function(t){return Fm.resolve(null).then(t).catch(_S)}:wh;function _S(t){setTimeout(function(){throw t})}function Tc(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),So(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);So(e)}function pr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function zm(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ps=Math.random().toString(36).slice(2),un="__reactFiber$"+ps,Co="__reactProps$"+ps,jn="__reactContainer$"+ps,Eh="__reactEvents$"+ps,vS="__reactListeners$"+ps,wS="__reactHandles$"+ps;function qr(t){var e=t[un];if(e)return e;for(var n=t.parentNode;n;){if(e=n[jn]||n[un]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=zm(t);t!==null;){if(n=t[un])return n;t=zm(t)}return e}t=n,n=t.parentNode}return null}function Xo(t){return t=t[un]||t[jn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Oi(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(F(33))}function fu(t){return t[Co]||null}var Th=[],Vi=-1;function Or(t){return{current:t}}function ve(t){0>Vi||(t.current=Th[Vi],Th[Vi]=null,Vi--)}function pe(t,e){Vi++,Th[Vi]=t.current,t.current=e}var Sr={},ut=Or(Sr),Et=Or(!1),ei=Sr;function es(t,e){var n=t.type.contextTypes;if(!n)return Sr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Tt(t){return t=t.childContextTypes,t!=null}function Rl(){ve(Et),ve(ut)}function Bm(t,e,n){if(ut.current!==Sr)throw Error(F(168));pe(ut,e),pe(Et,n)}function hv(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(F(108,iI(t)||"Unknown",i));return Ae({},n,r)}function kl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Sr,ei=ut.current,pe(ut,t),pe(Et,Et.current),!0}function $m(t,e,n){var r=t.stateNode;if(!r)throw Error(F(169));n?(t=hv(t,e,ei),r.__reactInternalMemoizedMergedChildContext=t,ve(Et),ve(ut),pe(ut,t)):ve(Et),pe(Et,n)}var Rn=null,pu=!1,Ic=!1;function dv(t){Rn===null?Rn=[t]:Rn.push(t)}function ES(t){pu=!0,dv(t)}function Vr(){if(!Ic&&Rn!==null){Ic=!0;var t=0,e=de;try{var n=Rn;for(de=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Rn=null,pu=!1}catch(i){throw Rn!==null&&(Rn=Rn.slice(t+1)),M_(Rd,Vr),i}finally{de=e,Ic=!1}}return null}var Li=[],Mi=0,Cl=null,Pl=0,Mt=[],jt=0,ti=null,kn=1,Cn="";function $r(t,e){Li[Mi++]=Pl,Li[Mi++]=Cl,Cl=t,Pl=e}function fv(t,e,n){Mt[jt++]=kn,Mt[jt++]=Cn,Mt[jt++]=ti,ti=t;var r=kn;t=Cn;var i=32-en(r)-1;r&=~(1<<i),n+=1;var s=32-en(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,kn=1<<32-en(e)+i|n<<i|r,Cn=s+t}else kn=1<<s|n<<i|r,Cn=t}function Ld(t){t.return!==null&&($r(t,1),fv(t,1,0))}function Md(t){for(;t===Cl;)Cl=Li[--Mi],Li[Mi]=null,Pl=Li[--Mi],Li[Mi]=null;for(;t===ti;)ti=Mt[--jt],Mt[jt]=null,Cn=Mt[--jt],Mt[jt]=null,kn=Mt[--jt],Mt[jt]=null}var Pt=null,kt=null,Te=!1,Yt=null;function pv(t,e){var n=zt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Hm(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Pt=t,kt=pr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Pt=t,kt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=ti!==null?{id:kn,overflow:Cn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=zt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Pt=t,kt=null,!0):!1;default:return!1}}function Ih(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Sh(t){if(Te){var e=kt;if(e){var n=e;if(!Hm(t,e)){if(Ih(t))throw Error(F(418));e=pr(n.nextSibling);var r=Pt;e&&Hm(t,e)?pv(r,n):(t.flags=t.flags&-4097|2,Te=!1,Pt=t)}}else{if(Ih(t))throw Error(F(418));t.flags=t.flags&-4097|2,Te=!1,Pt=t}}}function Wm(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Pt=t}function La(t){if(t!==Pt)return!1;if(!Te)return Wm(t),Te=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!vh(t.type,t.memoizedProps)),e&&(e=kt)){if(Ih(t))throw mv(),Error(F(418));for(;e;)pv(t,e),e=pr(e.nextSibling)}if(Wm(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(F(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){kt=pr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}kt=null}}else kt=Pt?pr(t.stateNode.nextSibling):null;return!0}function mv(){for(var t=kt;t;)t=pr(t.nextSibling)}function ts(){kt=Pt=null,Te=!1}function jd(t){Yt===null?Yt=[t]:Yt.push(t)}var TS=Wn.ReactCurrentBatchConfig;function zs(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(F(309));var r=n.stateNode}if(!r)throw Error(F(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(F(284));if(!n._owner)throw Error(F(290,t))}return t}function Ma(t,e){throw t=Object.prototype.toString.call(e),Error(F(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function qm(t){var e=t._init;return e(t._payload)}function gv(t){function e(w,g){if(t){var I=w.deletions;I===null?(w.deletions=[g],w.flags|=16):I.push(g)}}function n(w,g){if(!t)return null;for(;g!==null;)e(w,g),g=g.sibling;return null}function r(w,g){for(w=new Map;g!==null;)g.key!==null?w.set(g.key,g):w.set(g.index,g),g=g.sibling;return w}function i(w,g){return w=_r(w,g),w.index=0,w.sibling=null,w}function s(w,g,I){return w.index=I,t?(I=w.alternate,I!==null?(I=I.index,I<g?(w.flags|=2,g):I):(w.flags|=2,g)):(w.flags|=1048576,g)}function o(w){return t&&w.alternate===null&&(w.flags|=2),w}function l(w,g,I,b){return g===null||g.tag!==6?(g=Pc(I,w.mode,b),g.return=w,g):(g=i(g,I),g.return=w,g)}function u(w,g,I,b){var D=I.type;return D===Pi?f(w,g,I.props.children,b,I.key):g!==null&&(g.elementType===D||typeof D=="object"&&D!==null&&D.$$typeof===Jn&&qm(D)===g.type)?(b=i(g,I.props),b.ref=zs(w,g,I),b.return=w,b):(b=al(I.type,I.key,I.props,null,w.mode,b),b.ref=zs(w,g,I),b.return=w,b)}function c(w,g,I,b){return g===null||g.tag!==4||g.stateNode.containerInfo!==I.containerInfo||g.stateNode.implementation!==I.implementation?(g=Nc(I,w.mode,b),g.return=w,g):(g=i(g,I.children||[]),g.return=w,g)}function f(w,g,I,b,D){return g===null||g.tag!==7?(g=Yr(I,w.mode,b,D),g.return=w,g):(g=i(g,I),g.return=w,g)}function p(w,g,I){if(typeof g=="string"&&g!==""||typeof g=="number")return g=Pc(""+g,w.mode,I),g.return=w,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Aa:return I=al(g.type,g.key,g.props,null,w.mode,I),I.ref=zs(w,null,g),I.return=w,I;case Ci:return g=Nc(g,w.mode,I),g.return=w,g;case Jn:var b=g._init;return p(w,b(g._payload),I)}if(qs(g)||Ls(g))return g=Yr(g,w.mode,I,null),g.return=w,g;Ma(w,g)}return null}function m(w,g,I,b){var D=g!==null?g.key:null;if(typeof I=="string"&&I!==""||typeof I=="number")return D!==null?null:l(w,g,""+I,b);if(typeof I=="object"&&I!==null){switch(I.$$typeof){case Aa:return I.key===D?u(w,g,I,b):null;case Ci:return I.key===D?c(w,g,I,b):null;case Jn:return D=I._init,m(w,g,D(I._payload),b)}if(qs(I)||Ls(I))return D!==null?null:f(w,g,I,b,null);Ma(w,I)}return null}function x(w,g,I,b,D){if(typeof b=="string"&&b!==""||typeof b=="number")return w=w.get(I)||null,l(g,w,""+b,D);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case Aa:return w=w.get(b.key===null?I:b.key)||null,u(g,w,b,D);case Ci:return w=w.get(b.key===null?I:b.key)||null,c(g,w,b,D);case Jn:var M=b._init;return x(w,g,I,M(b._payload),D)}if(qs(b)||Ls(b))return w=w.get(I)||null,f(g,w,b,D,null);Ma(g,b)}return null}function k(w,g,I,b){for(var D=null,M=null,T=g,_=g=0,S=null;T!==null&&_<I.length;_++){T.index>_?(S=T,T=null):S=T.sibling;var E=m(w,T,I[_],b);if(E===null){T===null&&(T=S);break}t&&T&&E.alternate===null&&e(w,T),g=s(E,g,_),M===null?D=E:M.sibling=E,M=E,T=S}if(_===I.length)return n(w,T),Te&&$r(w,_),D;if(T===null){for(;_<I.length;_++)T=p(w,I[_],b),T!==null&&(g=s(T,g,_),M===null?D=T:M.sibling=T,M=T);return Te&&$r(w,_),D}for(T=r(w,T);_<I.length;_++)S=x(T,w,_,I[_],b),S!==null&&(t&&S.alternate!==null&&T.delete(S.key===null?_:S.key),g=s(S,g,_),M===null?D=S:M.sibling=S,M=S);return t&&T.forEach(function(R){return e(w,R)}),Te&&$r(w,_),D}function N(w,g,I,b){var D=Ls(I);if(typeof D!="function")throw Error(F(150));if(I=D.call(I),I==null)throw Error(F(151));for(var M=D=null,T=g,_=g=0,S=null,E=I.next();T!==null&&!E.done;_++,E=I.next()){T.index>_?(S=T,T=null):S=T.sibling;var R=m(w,T,E.value,b);if(R===null){T===null&&(T=S);break}t&&T&&R.alternate===null&&e(w,T),g=s(R,g,_),M===null?D=R:M.sibling=R,M=R,T=S}if(E.done)return n(w,T),Te&&$r(w,_),D;if(T===null){for(;!E.done;_++,E=I.next())E=p(w,E.value,b),E!==null&&(g=s(E,g,_),M===null?D=E:M.sibling=E,M=E);return Te&&$r(w,_),D}for(T=r(w,T);!E.done;_++,E=I.next())E=x(T,w,_,E.value,b),E!==null&&(t&&E.alternate!==null&&T.delete(E.key===null?_:E.key),g=s(E,g,_),M===null?D=E:M.sibling=E,M=E);return t&&T.forEach(function(C){return e(w,C)}),Te&&$r(w,_),D}function O(w,g,I,b){if(typeof I=="object"&&I!==null&&I.type===Pi&&I.key===null&&(I=I.props.children),typeof I=="object"&&I!==null){switch(I.$$typeof){case Aa:e:{for(var D=I.key,M=g;M!==null;){if(M.key===D){if(D=I.type,D===Pi){if(M.tag===7){n(w,M.sibling),g=i(M,I.props.children),g.return=w,w=g;break e}}else if(M.elementType===D||typeof D=="object"&&D!==null&&D.$$typeof===Jn&&qm(D)===M.type){n(w,M.sibling),g=i(M,I.props),g.ref=zs(w,M,I),g.return=w,w=g;break e}n(w,M);break}else e(w,M);M=M.sibling}I.type===Pi?(g=Yr(I.props.children,w.mode,b,I.key),g.return=w,w=g):(b=al(I.type,I.key,I.props,null,w.mode,b),b.ref=zs(w,g,I),b.return=w,w=b)}return o(w);case Ci:e:{for(M=I.key;g!==null;){if(g.key===M)if(g.tag===4&&g.stateNode.containerInfo===I.containerInfo&&g.stateNode.implementation===I.implementation){n(w,g.sibling),g=i(g,I.children||[]),g.return=w,w=g;break e}else{n(w,g);break}else e(w,g);g=g.sibling}g=Nc(I,w.mode,b),g.return=w,w=g}return o(w);case Jn:return M=I._init,O(w,g,M(I._payload),b)}if(qs(I))return k(w,g,I,b);if(Ls(I))return N(w,g,I,b);Ma(w,I)}return typeof I=="string"&&I!==""||typeof I=="number"?(I=""+I,g!==null&&g.tag===6?(n(w,g.sibling),g=i(g,I),g.return=w,w=g):(n(w,g),g=Pc(I,w.mode,b),g.return=w,w=g),o(w)):n(w,g)}return O}var ns=gv(!0),yv=gv(!1),Nl=Or(null),bl=null,ji=null,Ud=null;function Fd(){Ud=ji=bl=null}function zd(t){var e=Nl.current;ve(Nl),t._currentValue=e}function xh(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Ki(t,e){bl=t,Ud=ji=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(wt=!0),t.firstContext=null)}function $t(t){var e=t._currentValue;if(Ud!==t)if(t={context:t,memoizedValue:e,next:null},ji===null){if(bl===null)throw Error(F(308));ji=t,bl.dependencies={lanes:0,firstContext:t}}else ji=ji.next=t;return e}var Kr=null;function Bd(t){Kr===null?Kr=[t]:Kr.push(t)}function _v(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Bd(e)):(n.next=i.next,i.next=n),e.interleaved=n,Un(t,r)}function Un(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Zn=!1;function $d(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function vv(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function On(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function mr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,oe&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Un(t,n)}return i=r.interleaved,i===null?(e.next=e,Bd(r)):(e.next=i.next,i.next=e),r.interleaved=e,Un(t,n)}function tl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,kd(t,n)}}function Km(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Dl(t,e,n,r){var i=t.updateQueue;Zn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,c=u.next;u.next=null,o===null?s=c:o.next=c,o=u;var f=t.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==o&&(l===null?f.firstBaseUpdate=c:l.next=c,f.lastBaseUpdate=u))}if(s!==null){var p=i.baseState;o=0,f=c=u=null,l=s;do{var m=l.lane,x=l.eventTime;if((r&m)===m){f!==null&&(f=f.next={eventTime:x,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var k=t,N=l;switch(m=e,x=n,N.tag){case 1:if(k=N.payload,typeof k=="function"){p=k.call(x,p,m);break e}p=k;break e;case 3:k.flags=k.flags&-65537|128;case 0:if(k=N.payload,m=typeof k=="function"?k.call(x,p,m):k,m==null)break e;p=Ae({},p,m);break e;case 2:Zn=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,m=i.effects,m===null?i.effects=[l]:m.push(l))}else x={eventTime:x,lane:m,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(c=f=x,u=p):f=f.next=x,o|=m;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;m=l,l=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(!0);if(f===null&&(u=p),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=f,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);ri|=o,t.lanes=o,t.memoizedState=p}}function Gm(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(F(191,i));i.call(r)}}}var Yo={},dn=Or(Yo),Po=Or(Yo),No=Or(Yo);function Gr(t){if(t===Yo)throw Error(F(174));return t}function Hd(t,e){switch(pe(No,e),pe(Po,t),pe(dn,Yo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:sh(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=sh(e,t)}ve(dn),pe(dn,e)}function rs(){ve(dn),ve(Po),ve(No)}function wv(t){Gr(No.current);var e=Gr(dn.current),n=sh(e,t.type);e!==n&&(pe(Po,t),pe(dn,n))}function Wd(t){Po.current===t&&(ve(dn),ve(Po))}var Ie=Or(0);function Ol(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Sc=[];function qd(){for(var t=0;t<Sc.length;t++)Sc[t]._workInProgressVersionPrimary=null;Sc.length=0}var nl=Wn.ReactCurrentDispatcher,xc=Wn.ReactCurrentBatchConfig,ni=0,xe=null,Me=null,$e=null,Vl=!1,oo=!1,bo=0,IS=0;function rt(){throw Error(F(321))}function Kd(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!nn(t[n],e[n]))return!1;return!0}function Gd(t,e,n,r,i,s){if(ni=s,xe=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,nl.current=t===null||t.memoizedState===null?RS:kS,t=n(r,i),oo){s=0;do{if(oo=!1,bo=0,25<=s)throw Error(F(301));s+=1,$e=Me=null,e.updateQueue=null,nl.current=CS,t=n(r,i)}while(oo)}if(nl.current=Ll,e=Me!==null&&Me.next!==null,ni=0,$e=Me=xe=null,Vl=!1,e)throw Error(F(300));return t}function Qd(){var t=bo!==0;return bo=0,t}function an(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return $e===null?xe.memoizedState=$e=t:$e=$e.next=t,$e}function Ht(){if(Me===null){var t=xe.alternate;t=t!==null?t.memoizedState:null}else t=Me.next;var e=$e===null?xe.memoizedState:$e.next;if(e!==null)$e=e,Me=t;else{if(t===null)throw Error(F(310));Me=t,t={memoizedState:Me.memoizedState,baseState:Me.baseState,baseQueue:Me.baseQueue,queue:Me.queue,next:null},$e===null?xe.memoizedState=$e=t:$e=$e.next=t}return $e}function Do(t,e){return typeof e=="function"?e(t):e}function Ac(t){var e=Ht(),n=e.queue;if(n===null)throw Error(F(311));n.lastRenderedReducer=t;var r=Me,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,u=null,c=s;do{var f=c.lane;if((ni&f)===f)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var p={lane:f,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(l=u=p,o=r):u=u.next=p,xe.lanes|=f,ri|=f}c=c.next}while(c!==null&&c!==s);u===null?o=r:u.next=l,nn(r,e.memoizedState)||(wt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,xe.lanes|=s,ri|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Rc(t){var e=Ht(),n=e.queue;if(n===null)throw Error(F(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);nn(s,e.memoizedState)||(wt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function Ev(){}function Tv(t,e){var n=xe,r=Ht(),i=e(),s=!nn(r.memoizedState,i);if(s&&(r.memoizedState=i,wt=!0),r=r.queue,Xd(xv.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||$e!==null&&$e.memoizedState.tag&1){if(n.flags|=2048,Oo(9,Sv.bind(null,n,r,i,e),void 0,null),We===null)throw Error(F(349));ni&30||Iv(n,e,i)}return i}function Iv(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=xe.updateQueue,e===null?(e={lastEffect:null,stores:null},xe.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Sv(t,e,n,r){e.value=n,e.getSnapshot=r,Av(e)&&Rv(t)}function xv(t,e,n){return n(function(){Av(e)&&Rv(t)})}function Av(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!nn(t,n)}catch{return!0}}function Rv(t){var e=Un(t,1);e!==null&&tn(e,t,1,-1)}function Qm(t){var e=an();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Do,lastRenderedState:t},e.queue=t,t=t.dispatch=AS.bind(null,xe,t),[e.memoizedState,t]}function Oo(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=xe.updateQueue,e===null?(e={lastEffect:null,stores:null},xe.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function kv(){return Ht().memoizedState}function rl(t,e,n,r){var i=an();xe.flags|=t,i.memoizedState=Oo(1|e,n,void 0,r===void 0?null:r)}function mu(t,e,n,r){var i=Ht();r=r===void 0?null:r;var s=void 0;if(Me!==null){var o=Me.memoizedState;if(s=o.destroy,r!==null&&Kd(r,o.deps)){i.memoizedState=Oo(e,n,s,r);return}}xe.flags|=t,i.memoizedState=Oo(1|e,n,s,r)}function Xm(t,e){return rl(8390656,8,t,e)}function Xd(t,e){return mu(2048,8,t,e)}function Cv(t,e){return mu(4,2,t,e)}function Pv(t,e){return mu(4,4,t,e)}function Nv(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function bv(t,e,n){return n=n!=null?n.concat([t]):null,mu(4,4,Nv.bind(null,e,t),n)}function Yd(){}function Dv(t,e){var n=Ht();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Kd(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Ov(t,e){var n=Ht();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Kd(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function Vv(t,e,n){return ni&21?(nn(n,e)||(n=F_(),xe.lanes|=n,ri|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,wt=!0),t.memoizedState=n)}function SS(t,e){var n=de;de=n!==0&&4>n?n:4,t(!0);var r=xc.transition;xc.transition={};try{t(!1),e()}finally{de=n,xc.transition=r}}function Lv(){return Ht().memoizedState}function xS(t,e,n){var r=yr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Mv(t))jv(e,n);else if(n=_v(t,e,n,r),n!==null){var i=mt();tn(n,t,r,i),Uv(n,e,r)}}function AS(t,e,n){var r=yr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Mv(t))jv(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,nn(l,o)){var u=e.interleaved;u===null?(i.next=i,Bd(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=_v(t,e,i,r),n!==null&&(i=mt(),tn(n,t,r,i),Uv(n,e,r))}}function Mv(t){var e=t.alternate;return t===xe||e!==null&&e===xe}function jv(t,e){oo=Vl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Uv(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,kd(t,n)}}var Ll={readContext:$t,useCallback:rt,useContext:rt,useEffect:rt,useImperativeHandle:rt,useInsertionEffect:rt,useLayoutEffect:rt,useMemo:rt,useReducer:rt,useRef:rt,useState:rt,useDebugValue:rt,useDeferredValue:rt,useTransition:rt,useMutableSource:rt,useSyncExternalStore:rt,useId:rt,unstable_isNewReconciler:!1},RS={readContext:$t,useCallback:function(t,e){return an().memoizedState=[t,e===void 0?null:e],t},useContext:$t,useEffect:Xm,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,rl(4194308,4,Nv.bind(null,e,t),n)},useLayoutEffect:function(t,e){return rl(4194308,4,t,e)},useInsertionEffect:function(t,e){return rl(4,2,t,e)},useMemo:function(t,e){var n=an();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=an();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=xS.bind(null,xe,t),[r.memoizedState,t]},useRef:function(t){var e=an();return t={current:t},e.memoizedState=t},useState:Qm,useDebugValue:Yd,useDeferredValue:function(t){return an().memoizedState=t},useTransition:function(){var t=Qm(!1),e=t[0];return t=SS.bind(null,t[1]),an().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=xe,i=an();if(Te){if(n===void 0)throw Error(F(407));n=n()}else{if(n=e(),We===null)throw Error(F(349));ni&30||Iv(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Xm(xv.bind(null,r,s,t),[t]),r.flags|=2048,Oo(9,Sv.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=an(),e=We.identifierPrefix;if(Te){var n=Cn,r=kn;n=(r&~(1<<32-en(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=bo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=IS++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},kS={readContext:$t,useCallback:Dv,useContext:$t,useEffect:Xd,useImperativeHandle:bv,useInsertionEffect:Cv,useLayoutEffect:Pv,useMemo:Ov,useReducer:Ac,useRef:kv,useState:function(){return Ac(Do)},useDebugValue:Yd,useDeferredValue:function(t){var e=Ht();return Vv(e,Me.memoizedState,t)},useTransition:function(){var t=Ac(Do)[0],e=Ht().memoizedState;return[t,e]},useMutableSource:Ev,useSyncExternalStore:Tv,useId:Lv,unstable_isNewReconciler:!1},CS={readContext:$t,useCallback:Dv,useContext:$t,useEffect:Xd,useImperativeHandle:bv,useInsertionEffect:Cv,useLayoutEffect:Pv,useMemo:Ov,useReducer:Rc,useRef:kv,useState:function(){return Rc(Do)},useDebugValue:Yd,useDeferredValue:function(t){var e=Ht();return Me===null?e.memoizedState=t:Vv(e,Me.memoizedState,t)},useTransition:function(){var t=Rc(Do)[0],e=Ht().memoizedState;return[t,e]},useMutableSource:Ev,useSyncExternalStore:Tv,useId:Lv,unstable_isNewReconciler:!1};function Qt(t,e){if(t&&t.defaultProps){e=Ae({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Ah(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Ae({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var gu={isMounted:function(t){return(t=t._reactInternals)?fi(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=mt(),i=yr(t),s=On(r,i);s.payload=e,n!=null&&(s.callback=n),e=mr(t,s,i),e!==null&&(tn(e,t,i,r),tl(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=mt(),i=yr(t),s=On(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=mr(t,s,i),e!==null&&(tn(e,t,i,r),tl(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=mt(),r=yr(t),i=On(n,r);i.tag=2,e!=null&&(i.callback=e),e=mr(t,i,r),e!==null&&(tn(e,t,r,n),tl(e,t,r))}};function Ym(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Ao(n,r)||!Ao(i,s):!0}function Fv(t,e,n){var r=!1,i=Sr,s=e.contextType;return typeof s=="object"&&s!==null?s=$t(s):(i=Tt(e)?ei:ut.current,r=e.contextTypes,s=(r=r!=null)?es(t,i):Sr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=gu,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Jm(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&gu.enqueueReplaceState(e,e.state,null)}function Rh(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},$d(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=$t(s):(s=Tt(e)?ei:ut.current,i.context=es(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Ah(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&gu.enqueueReplaceState(i,i.state,null),Dl(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function is(t,e){try{var n="",r=e;do n+=rI(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function kc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function kh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var PS=typeof WeakMap=="function"?WeakMap:Map;function zv(t,e,n){n=On(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){jl||(jl=!0,jh=r),kh(t,e)},n}function Bv(t,e,n){n=On(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){kh(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){kh(t,e),typeof r!="function"&&(gr===null?gr=new Set([this]):gr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Zm(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new PS;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=HS.bind(null,t,e,n),e.then(t,t))}function eg(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function tg(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=On(-1,1),e.tag=2,mr(n,e,1))),n.lanes|=1),t)}var NS=Wn.ReactCurrentOwner,wt=!1;function pt(t,e,n,r){e.child=t===null?yv(e,null,n,r):ns(e,t.child,n,r)}function ng(t,e,n,r,i){n=n.render;var s=e.ref;return Ki(e,i),r=Gd(t,e,n,r,s,i),n=Qd(),t!==null&&!wt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Fn(t,e,i)):(Te&&n&&Ld(e),e.flags|=1,pt(t,e,r,i),e.child)}function rg(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!of(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,$v(t,e,s,r,i)):(t=al(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Ao,n(o,r)&&t.ref===e.ref)return Fn(t,e,i)}return e.flags|=1,t=_r(s,r),t.ref=e.ref,t.return=e,e.child=t}function $v(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Ao(s,r)&&t.ref===e.ref)if(wt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(wt=!0);else return e.lanes=t.lanes,Fn(t,e,i)}return Ch(t,e,n,r,i)}function Hv(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},pe(Fi,At),At|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,pe(Fi,At),At|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,pe(Fi,At),At|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,pe(Fi,At),At|=r;return pt(t,e,i,n),e.child}function Wv(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Ch(t,e,n,r,i){var s=Tt(n)?ei:ut.current;return s=es(e,s),Ki(e,i),n=Gd(t,e,n,r,s,i),r=Qd(),t!==null&&!wt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Fn(t,e,i)):(Te&&r&&Ld(e),e.flags|=1,pt(t,e,n,i),e.child)}function ig(t,e,n,r,i){if(Tt(n)){var s=!0;kl(e)}else s=!1;if(Ki(e,i),e.stateNode===null)il(t,e),Fv(e,n,r),Rh(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=$t(c):(c=Tt(n)?ei:ut.current,c=es(e,c));var f=n.getDerivedStateFromProps,p=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==c)&&Jm(e,o,r,c),Zn=!1;var m=e.memoizedState;o.state=m,Dl(e,r,o,i),u=e.memoizedState,l!==r||m!==u||Et.current||Zn?(typeof f=="function"&&(Ah(e,n,f,r),u=e.memoizedState),(l=Zn||Ym(e,n,l,r,m,u,c))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=c,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,vv(t,e),l=e.memoizedProps,c=e.type===e.elementType?l:Qt(e.type,l),o.props=c,p=e.pendingProps,m=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=$t(u):(u=Tt(n)?ei:ut.current,u=es(e,u));var x=n.getDerivedStateFromProps;(f=typeof x=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==p||m!==u)&&Jm(e,o,r,u),Zn=!1,m=e.memoizedState,o.state=m,Dl(e,r,o,i);var k=e.memoizedState;l!==p||m!==k||Et.current||Zn?(typeof x=="function"&&(Ah(e,n,x,r),k=e.memoizedState),(c=Zn||Ym(e,n,c,r,m,k,u)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,k,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,k,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=k),o.props=r,o.state=k,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),r=!1)}return Ph(t,e,n,r,s,i)}function Ph(t,e,n,r,i,s){Wv(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&$m(e,n,!1),Fn(t,e,s);r=e.stateNode,NS.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=ns(e,t.child,null,s),e.child=ns(e,null,l,s)):pt(t,e,l,s),e.memoizedState=r.state,i&&$m(e,n,!0),e.child}function qv(t){var e=t.stateNode;e.pendingContext?Bm(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Bm(t,e.context,!1),Hd(t,e.containerInfo)}function sg(t,e,n,r,i){return ts(),jd(i),e.flags|=256,pt(t,e,n,r),e.child}var Nh={dehydrated:null,treeContext:null,retryLane:0};function bh(t){return{baseLanes:t,cachePool:null,transitions:null}}function Kv(t,e,n){var r=e.pendingProps,i=Ie.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),pe(Ie,i&1),t===null)return Sh(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=vu(o,r,0,null),t=Yr(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=bh(n),e.memoizedState=Nh,t):Jd(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return bS(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=_r(i,u),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=_r(l,s):(s=Yr(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?bh(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Nh,r}return s=t.child,t=s.sibling,r=_r(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Jd(t,e){return e=vu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function ja(t,e,n,r){return r!==null&&jd(r),ns(e,t.child,null,n),t=Jd(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function bS(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=kc(Error(F(422))),ja(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=vu({mode:"visible",children:r.children},i,0,null),s=Yr(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&ns(e,t.child,null,o),e.child.memoizedState=bh(o),e.memoizedState=Nh,s);if(!(e.mode&1))return ja(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(F(419)),r=kc(s,r,void 0),ja(t,e,o,r)}if(l=(o&t.childLanes)!==0,wt||l){if(r=We,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Un(t,i),tn(r,t,i,-1))}return sf(),r=kc(Error(F(421))),ja(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=WS.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,kt=pr(i.nextSibling),Pt=e,Te=!0,Yt=null,t!==null&&(Mt[jt++]=kn,Mt[jt++]=Cn,Mt[jt++]=ti,kn=t.id,Cn=t.overflow,ti=e),e=Jd(e,r.children),e.flags|=4096,e)}function og(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),xh(t.return,e,n)}function Cc(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function Gv(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(pt(t,e,r.children,n),r=Ie.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&og(t,n,e);else if(t.tag===19)og(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(pe(Ie,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Ol(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Cc(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Ol(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Cc(e,!0,n,null,s);break;case"together":Cc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function il(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Fn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),ri|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(F(153));if(e.child!==null){for(t=e.child,n=_r(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=_r(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function DS(t,e,n){switch(e.tag){case 3:qv(e),ts();break;case 5:wv(e);break;case 1:Tt(e.type)&&kl(e);break;case 4:Hd(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;pe(Nl,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(pe(Ie,Ie.current&1),e.flags|=128,null):n&e.child.childLanes?Kv(t,e,n):(pe(Ie,Ie.current&1),t=Fn(t,e,n),t!==null?t.sibling:null);pe(Ie,Ie.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return Gv(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),pe(Ie,Ie.current),r)break;return null;case 22:case 23:return e.lanes=0,Hv(t,e,n)}return Fn(t,e,n)}var Qv,Dh,Xv,Yv;Qv=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Dh=function(){};Xv=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Gr(dn.current);var s=null;switch(n){case"input":i=th(t,i),r=th(t,r),s=[];break;case"select":i=Ae({},i,{value:void 0}),r=Ae({},r,{value:void 0}),s=[];break;case"textarea":i=ih(t,i),r=ih(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Al)}oh(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var l=i[c];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(vo.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var u=r[c];if(l=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==l&&(u!=null||l!=null))if(c==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(s=s||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(vo.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&ye("scroll",t),s||l===u||(s=[])):(s=s||[]).push(c,u))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};Yv=function(t,e,n,r){n!==r&&(e.flags|=4)};function Bs(t,e){if(!Te)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function it(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function OS(t,e,n){var r=e.pendingProps;switch(Md(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return it(e),null;case 1:return Tt(e.type)&&Rl(),it(e),null;case 3:return r=e.stateNode,rs(),ve(Et),ve(ut),qd(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(La(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Yt!==null&&(zh(Yt),Yt=null))),Dh(t,e),it(e),null;case 5:Wd(e);var i=Gr(No.current);if(n=e.type,t!==null&&e.stateNode!=null)Xv(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(F(166));return it(e),null}if(t=Gr(dn.current),La(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[un]=e,r[Co]=s,t=(e.mode&1)!==0,n){case"dialog":ye("cancel",r),ye("close",r);break;case"iframe":case"object":case"embed":ye("load",r);break;case"video":case"audio":for(i=0;i<Gs.length;i++)ye(Gs[i],r);break;case"source":ye("error",r);break;case"img":case"image":case"link":ye("error",r),ye("load",r);break;case"details":ye("toggle",r);break;case"input":mm(r,s),ye("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},ye("invalid",r);break;case"textarea":ym(r,s),ye("invalid",r)}oh(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&Va(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&Va(r.textContent,l,t),i=["children",""+l]):vo.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&ye("scroll",r)}switch(n){case"input":Ra(r),gm(r,s,!0);break;case"textarea":Ra(r),_m(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Al)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=x_(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[un]=e,t[Co]=r,Qv(t,e,!1,!1),e.stateNode=t;e:{switch(o=ah(n,r),n){case"dialog":ye("cancel",t),ye("close",t),i=r;break;case"iframe":case"object":case"embed":ye("load",t),i=r;break;case"video":case"audio":for(i=0;i<Gs.length;i++)ye(Gs[i],t);i=r;break;case"source":ye("error",t),i=r;break;case"img":case"image":case"link":ye("error",t),ye("load",t),i=r;break;case"details":ye("toggle",t),i=r;break;case"input":mm(t,r),i=th(t,r),ye("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Ae({},r,{value:void 0}),ye("invalid",t);break;case"textarea":ym(t,r),i=ih(t,r),ye("invalid",t);break;default:i=r}oh(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var u=l[s];s==="style"?k_(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&A_(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&wo(t,u):typeof u=="number"&&wo(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(vo.hasOwnProperty(s)?u!=null&&s==="onScroll"&&ye("scroll",t):u!=null&&Td(t,s,u,o))}switch(n){case"input":Ra(t),gm(t,r,!1);break;case"textarea":Ra(t),_m(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Ir(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?$i(t,!!r.multiple,s,!1):r.defaultValue!=null&&$i(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Al)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return it(e),null;case 6:if(t&&e.stateNode!=null)Yv(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(F(166));if(n=Gr(No.current),Gr(dn.current),La(e)){if(r=e.stateNode,n=e.memoizedProps,r[un]=e,(s=r.nodeValue!==n)&&(t=Pt,t!==null))switch(t.tag){case 3:Va(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Va(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[un]=e,e.stateNode=r}return it(e),null;case 13:if(ve(Ie),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Te&&kt!==null&&e.mode&1&&!(e.flags&128))mv(),ts(),e.flags|=98560,s=!1;else if(s=La(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(F(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(F(317));s[un]=e}else ts(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;it(e),s=!1}else Yt!==null&&(zh(Yt),Yt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Ie.current&1?Ue===0&&(Ue=3):sf())),e.updateQueue!==null&&(e.flags|=4),it(e),null);case 4:return rs(),Dh(t,e),t===null&&Ro(e.stateNode.containerInfo),it(e),null;case 10:return zd(e.type._context),it(e),null;case 17:return Tt(e.type)&&Rl(),it(e),null;case 19:if(ve(Ie),s=e.memoizedState,s===null)return it(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Bs(s,!1);else{if(Ue!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Ol(t),o!==null){for(e.flags|=128,Bs(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return pe(Ie,Ie.current&1|2),e.child}t=t.sibling}s.tail!==null&&De()>ss&&(e.flags|=128,r=!0,Bs(s,!1),e.lanes=4194304)}else{if(!r)if(t=Ol(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Bs(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Te)return it(e),null}else 2*De()-s.renderingStartTime>ss&&n!==1073741824&&(e.flags|=128,r=!0,Bs(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=De(),e.sibling=null,n=Ie.current,pe(Ie,r?n&1|2:n&1),e):(it(e),null);case 22:case 23:return rf(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?At&1073741824&&(it(e),e.subtreeFlags&6&&(e.flags|=8192)):it(e),null;case 24:return null;case 25:return null}throw Error(F(156,e.tag))}function VS(t,e){switch(Md(e),e.tag){case 1:return Tt(e.type)&&Rl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return rs(),ve(Et),ve(ut),qd(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Wd(e),null;case 13:if(ve(Ie),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(F(340));ts()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ve(Ie),null;case 4:return rs(),null;case 10:return zd(e.type._context),null;case 22:case 23:return rf(),null;case 24:return null;default:return null}}var Ua=!1,at=!1,LS=typeof WeakSet=="function"?WeakSet:Set,H=null;function Ui(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ce(t,e,r)}else n.current=null}function Oh(t,e,n){try{n()}catch(r){Ce(t,e,r)}}var ag=!1;function MS(t,e){if(yh=Il,t=nv(),Vd(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,c=0,f=0,p=t,m=null;t:for(;;){for(var x;p!==n||i!==0&&p.nodeType!==3||(l=o+i),p!==s||r!==0&&p.nodeType!==3||(u=o+r),p.nodeType===3&&(o+=p.nodeValue.length),(x=p.firstChild)!==null;)m=p,p=x;for(;;){if(p===t)break t;if(m===n&&++c===i&&(l=o),m===s&&++f===r&&(u=o),(x=p.nextSibling)!==null)break;p=m,m=p.parentNode}p=x}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(_h={focusedElem:t,selectionRange:n},Il=!1,H=e;H!==null;)if(e=H,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,H=t;else for(;H!==null;){e=H;try{var k=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(k!==null){var N=k.memoizedProps,O=k.memoizedState,w=e.stateNode,g=w.getSnapshotBeforeUpdate(e.elementType===e.type?N:Qt(e.type,N),O);w.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var I=e.stateNode.containerInfo;I.nodeType===1?I.textContent="":I.nodeType===9&&I.documentElement&&I.removeChild(I.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(F(163))}}catch(b){Ce(e,e.return,b)}if(t=e.sibling,t!==null){t.return=e.return,H=t;break}H=e.return}return k=ag,ag=!1,k}function ao(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Oh(e,n,s)}i=i.next}while(i!==r)}}function yu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Vh(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Jv(t){var e=t.alternate;e!==null&&(t.alternate=null,Jv(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[un],delete e[Co],delete e[Eh],delete e[vS],delete e[wS])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Zv(t){return t.tag===5||t.tag===3||t.tag===4}function lg(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Zv(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Lh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Al));else if(r!==4&&(t=t.child,t!==null))for(Lh(t,e,n),t=t.sibling;t!==null;)Lh(t,e,n),t=t.sibling}function Mh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Mh(t,e,n),t=t.sibling;t!==null;)Mh(t,e,n),t=t.sibling}var Ge=null,Xt=!1;function Xn(t,e,n){for(n=n.child;n!==null;)ew(t,e,n),n=n.sibling}function ew(t,e,n){if(hn&&typeof hn.onCommitFiberUnmount=="function")try{hn.onCommitFiberUnmount(uu,n)}catch{}switch(n.tag){case 5:at||Ui(n,e);case 6:var r=Ge,i=Xt;Ge=null,Xn(t,e,n),Ge=r,Xt=i,Ge!==null&&(Xt?(t=Ge,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ge.removeChild(n.stateNode));break;case 18:Ge!==null&&(Xt?(t=Ge,n=n.stateNode,t.nodeType===8?Tc(t.parentNode,n):t.nodeType===1&&Tc(t,n),So(t)):Tc(Ge,n.stateNode));break;case 4:r=Ge,i=Xt,Ge=n.stateNode.containerInfo,Xt=!0,Xn(t,e,n),Ge=r,Xt=i;break;case 0:case 11:case 14:case 15:if(!at&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Oh(n,e,o),i=i.next}while(i!==r)}Xn(t,e,n);break;case 1:if(!at&&(Ui(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Ce(n,e,l)}Xn(t,e,n);break;case 21:Xn(t,e,n);break;case 22:n.mode&1?(at=(r=at)||n.memoizedState!==null,Xn(t,e,n),at=r):Xn(t,e,n);break;default:Xn(t,e,n)}}function ug(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new LS),e.forEach(function(r){var i=qS.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Gt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:Ge=l.stateNode,Xt=!1;break e;case 3:Ge=l.stateNode.containerInfo,Xt=!0;break e;case 4:Ge=l.stateNode.containerInfo,Xt=!0;break e}l=l.return}if(Ge===null)throw Error(F(160));ew(s,o,i),Ge=null,Xt=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){Ce(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)tw(e,t),e=e.sibling}function tw(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Gt(e,t),on(t),r&4){try{ao(3,t,t.return),yu(3,t)}catch(N){Ce(t,t.return,N)}try{ao(5,t,t.return)}catch(N){Ce(t,t.return,N)}}break;case 1:Gt(e,t),on(t),r&512&&n!==null&&Ui(n,n.return);break;case 5:if(Gt(e,t),on(t),r&512&&n!==null&&Ui(n,n.return),t.flags&32){var i=t.stateNode;try{wo(i,"")}catch(N){Ce(t,t.return,N)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&I_(i,s),ah(l,o);var c=ah(l,s);for(o=0;o<u.length;o+=2){var f=u[o],p=u[o+1];f==="style"?k_(i,p):f==="dangerouslySetInnerHTML"?A_(i,p):f==="children"?wo(i,p):Td(i,f,p,c)}switch(l){case"input":nh(i,s);break;case"textarea":S_(i,s);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var x=s.value;x!=null?$i(i,!!s.multiple,x,!1):m!==!!s.multiple&&(s.defaultValue!=null?$i(i,!!s.multiple,s.defaultValue,!0):$i(i,!!s.multiple,s.multiple?[]:"",!1))}i[Co]=s}catch(N){Ce(t,t.return,N)}}break;case 6:if(Gt(e,t),on(t),r&4){if(t.stateNode===null)throw Error(F(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(N){Ce(t,t.return,N)}}break;case 3:if(Gt(e,t),on(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{So(e.containerInfo)}catch(N){Ce(t,t.return,N)}break;case 4:Gt(e,t),on(t);break;case 13:Gt(e,t),on(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(tf=De())),r&4&&ug(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(at=(c=at)||f,Gt(e,t),at=c):Gt(e,t),on(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!f&&t.mode&1)for(H=t,f=t.child;f!==null;){for(p=H=f;H!==null;){switch(m=H,x=m.child,m.tag){case 0:case 11:case 14:case 15:ao(4,m,m.return);break;case 1:Ui(m,m.return);var k=m.stateNode;if(typeof k.componentWillUnmount=="function"){r=m,n=m.return;try{e=r,k.props=e.memoizedProps,k.state=e.memoizedState,k.componentWillUnmount()}catch(N){Ce(r,n,N)}}break;case 5:Ui(m,m.return);break;case 22:if(m.memoizedState!==null){hg(p);continue}}x!==null?(x.return=m,H=x):hg(p)}f=f.sibling}e:for(f=null,p=t;;){if(p.tag===5){if(f===null){f=p;try{i=p.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=p.stateNode,u=p.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=R_("display",o))}catch(N){Ce(t,t.return,N)}}}else if(p.tag===6){if(f===null)try{p.stateNode.nodeValue=c?"":p.memoizedProps}catch(N){Ce(t,t.return,N)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;f===p&&(f=null),p=p.return}f===p&&(f=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Gt(e,t),on(t),r&4&&ug(t);break;case 21:break;default:Gt(e,t),on(t)}}function on(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Zv(n)){var r=n;break e}n=n.return}throw Error(F(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(wo(i,""),r.flags&=-33);var s=lg(t);Mh(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=lg(t);Lh(t,l,o);break;default:throw Error(F(161))}}catch(u){Ce(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function jS(t,e,n){H=t,nw(t)}function nw(t,e,n){for(var r=(t.mode&1)!==0;H!==null;){var i=H,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Ua;if(!o){var l=i.alternate,u=l!==null&&l.memoizedState!==null||at;l=Ua;var c=at;if(Ua=o,(at=u)&&!c)for(H=i;H!==null;)o=H,u=o.child,o.tag===22&&o.memoizedState!==null?dg(i):u!==null?(u.return=o,H=u):dg(i);for(;s!==null;)H=s,nw(s),s=s.sibling;H=i,Ua=l,at=c}cg(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,H=s):cg(t)}}function cg(t){for(;H!==null;){var e=H;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:at||yu(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!at)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Qt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Gm(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Gm(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var f=c.memoizedState;if(f!==null){var p=f.dehydrated;p!==null&&So(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(F(163))}at||e.flags&512&&Vh(e)}catch(m){Ce(e,e.return,m)}}if(e===t){H=null;break}if(n=e.sibling,n!==null){n.return=e.return,H=n;break}H=e.return}}function hg(t){for(;H!==null;){var e=H;if(e===t){H=null;break}var n=e.sibling;if(n!==null){n.return=e.return,H=n;break}H=e.return}}function dg(t){for(;H!==null;){var e=H;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{yu(4,e)}catch(u){Ce(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){Ce(e,i,u)}}var s=e.return;try{Vh(e)}catch(u){Ce(e,s,u)}break;case 5:var o=e.return;try{Vh(e)}catch(u){Ce(e,o,u)}}}catch(u){Ce(e,e.return,u)}if(e===t){H=null;break}var l=e.sibling;if(l!==null){l.return=e.return,H=l;break}H=e.return}}var US=Math.ceil,Ml=Wn.ReactCurrentDispatcher,Zd=Wn.ReactCurrentOwner,Bt=Wn.ReactCurrentBatchConfig,oe=0,We=null,Ve=null,Ye=0,At=0,Fi=Or(0),Ue=0,Vo=null,ri=0,_u=0,ef=0,lo=null,vt=null,tf=0,ss=1/0,An=null,jl=!1,jh=null,gr=null,Fa=!1,ur=null,Ul=0,uo=0,Uh=null,sl=-1,ol=0;function mt(){return oe&6?De():sl!==-1?sl:sl=De()}function yr(t){return t.mode&1?oe&2&&Ye!==0?Ye&-Ye:TS.transition!==null?(ol===0&&(ol=F_()),ol):(t=de,t!==0||(t=window.event,t=t===void 0?16:K_(t.type)),t):1}function tn(t,e,n,r){if(50<uo)throw uo=0,Uh=null,Error(F(185));Go(t,n,r),(!(oe&2)||t!==We)&&(t===We&&(!(oe&2)&&(_u|=n),Ue===4&&tr(t,Ye)),It(t,r),n===1&&oe===0&&!(e.mode&1)&&(ss=De()+500,pu&&Vr()))}function It(t,e){var n=t.callbackNode;TI(t,e);var r=Tl(t,t===We?Ye:0);if(r===0)n!==null&&Em(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Em(n),e===1)t.tag===0?ES(fg.bind(null,t)):dv(fg.bind(null,t)),yS(function(){!(oe&6)&&Vr()}),n=null;else{switch(z_(r)){case 1:n=Rd;break;case 4:n=j_;break;case 16:n=El;break;case 536870912:n=U_;break;default:n=El}n=cw(n,rw.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function rw(t,e){if(sl=-1,ol=0,oe&6)throw Error(F(327));var n=t.callbackNode;if(Gi()&&t.callbackNode!==n)return null;var r=Tl(t,t===We?Ye:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Fl(t,r);else{e=r;var i=oe;oe|=2;var s=sw();(We!==t||Ye!==e)&&(An=null,ss=De()+500,Xr(t,e));do try{BS();break}catch(l){iw(t,l)}while(!0);Fd(),Ml.current=s,oe=i,Ve!==null?e=0:(We=null,Ye=0,e=Ue)}if(e!==0){if(e===2&&(i=dh(t),i!==0&&(r=i,e=Fh(t,i))),e===1)throw n=Vo,Xr(t,0),tr(t,r),It(t,De()),n;if(e===6)tr(t,r);else{if(i=t.current.alternate,!(r&30)&&!FS(i)&&(e=Fl(t,r),e===2&&(s=dh(t),s!==0&&(r=s,e=Fh(t,s))),e===1))throw n=Vo,Xr(t,0),tr(t,r),It(t,De()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(F(345));case 2:Hr(t,vt,An);break;case 3:if(tr(t,r),(r&130023424)===r&&(e=tf+500-De(),10<e)){if(Tl(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){mt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=wh(Hr.bind(null,t,vt,An),e);break}Hr(t,vt,An);break;case 4:if(tr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-en(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=De()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*US(r/1960))-r,10<r){t.timeoutHandle=wh(Hr.bind(null,t,vt,An),r);break}Hr(t,vt,An);break;case 5:Hr(t,vt,An);break;default:throw Error(F(329))}}}return It(t,De()),t.callbackNode===n?rw.bind(null,t):null}function Fh(t,e){var n=lo;return t.current.memoizedState.isDehydrated&&(Xr(t,e).flags|=256),t=Fl(t,e),t!==2&&(e=vt,vt=n,e!==null&&zh(e)),t}function zh(t){vt===null?vt=t:vt.push.apply(vt,t)}function FS(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!nn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function tr(t,e){for(e&=~ef,e&=~_u,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-en(e),r=1<<n;t[n]=-1,e&=~r}}function fg(t){if(oe&6)throw Error(F(327));Gi();var e=Tl(t,0);if(!(e&1))return It(t,De()),null;var n=Fl(t,e);if(t.tag!==0&&n===2){var r=dh(t);r!==0&&(e=r,n=Fh(t,r))}if(n===1)throw n=Vo,Xr(t,0),tr(t,e),It(t,De()),n;if(n===6)throw Error(F(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Hr(t,vt,An),It(t,De()),null}function nf(t,e){var n=oe;oe|=1;try{return t(e)}finally{oe=n,oe===0&&(ss=De()+500,pu&&Vr())}}function ii(t){ur!==null&&ur.tag===0&&!(oe&6)&&Gi();var e=oe;oe|=1;var n=Bt.transition,r=de;try{if(Bt.transition=null,de=1,t)return t()}finally{de=r,Bt.transition=n,oe=e,!(oe&6)&&Vr()}}function rf(){At=Fi.current,ve(Fi)}function Xr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,gS(n)),Ve!==null)for(n=Ve.return;n!==null;){var r=n;switch(Md(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Rl();break;case 3:rs(),ve(Et),ve(ut),qd();break;case 5:Wd(r);break;case 4:rs();break;case 13:ve(Ie);break;case 19:ve(Ie);break;case 10:zd(r.type._context);break;case 22:case 23:rf()}n=n.return}if(We=t,Ve=t=_r(t.current,null),Ye=At=e,Ue=0,Vo=null,ef=_u=ri=0,vt=lo=null,Kr!==null){for(e=0;e<Kr.length;e++)if(n=Kr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Kr=null}return t}function iw(t,e){do{var n=Ve;try{if(Fd(),nl.current=Ll,Vl){for(var r=xe.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Vl=!1}if(ni=0,$e=Me=xe=null,oo=!1,bo=0,Zd.current=null,n===null||n.return===null){Ue=1,Vo=e,Ve=null;break}e:{var s=t,o=n.return,l=n,u=e;if(e=Ye,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,f=l,p=f.tag;if(!(f.mode&1)&&(p===0||p===11||p===15)){var m=f.alternate;m?(f.updateQueue=m.updateQueue,f.memoizedState=m.memoizedState,f.lanes=m.lanes):(f.updateQueue=null,f.memoizedState=null)}var x=eg(o);if(x!==null){x.flags&=-257,tg(x,o,l,s,e),x.mode&1&&Zm(s,c,e),e=x,u=c;var k=e.updateQueue;if(k===null){var N=new Set;N.add(u),e.updateQueue=N}else k.add(u);break e}else{if(!(e&1)){Zm(s,c,e),sf();break e}u=Error(F(426))}}else if(Te&&l.mode&1){var O=eg(o);if(O!==null){!(O.flags&65536)&&(O.flags|=256),tg(O,o,l,s,e),jd(is(u,l));break e}}s=u=is(u,l),Ue!==4&&(Ue=2),lo===null?lo=[s]:lo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var w=zv(s,u,e);Km(s,w);break e;case 1:l=u;var g=s.type,I=s.stateNode;if(!(s.flags&128)&&(typeof g.getDerivedStateFromError=="function"||I!==null&&typeof I.componentDidCatch=="function"&&(gr===null||!gr.has(I)))){s.flags|=65536,e&=-e,s.lanes|=e;var b=Bv(s,l,e);Km(s,b);break e}}s=s.return}while(s!==null)}aw(n)}catch(D){e=D,Ve===n&&n!==null&&(Ve=n=n.return);continue}break}while(!0)}function sw(){var t=Ml.current;return Ml.current=Ll,t===null?Ll:t}function sf(){(Ue===0||Ue===3||Ue===2)&&(Ue=4),We===null||!(ri&268435455)&&!(_u&268435455)||tr(We,Ye)}function Fl(t,e){var n=oe;oe|=2;var r=sw();(We!==t||Ye!==e)&&(An=null,Xr(t,e));do try{zS();break}catch(i){iw(t,i)}while(!0);if(Fd(),oe=n,Ml.current=r,Ve!==null)throw Error(F(261));return We=null,Ye=0,Ue}function zS(){for(;Ve!==null;)ow(Ve)}function BS(){for(;Ve!==null&&!fI();)ow(Ve)}function ow(t){var e=uw(t.alternate,t,At);t.memoizedProps=t.pendingProps,e===null?aw(t):Ve=e,Zd.current=null}function aw(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=VS(n,e),n!==null){n.flags&=32767,Ve=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ue=6,Ve=null;return}}else if(n=OS(n,e,At),n!==null){Ve=n;return}if(e=e.sibling,e!==null){Ve=e;return}Ve=e=t}while(e!==null);Ue===0&&(Ue=5)}function Hr(t,e,n){var r=de,i=Bt.transition;try{Bt.transition=null,de=1,$S(t,e,n,r)}finally{Bt.transition=i,de=r}return null}function $S(t,e,n,r){do Gi();while(ur!==null);if(oe&6)throw Error(F(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(F(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(II(t,s),t===We&&(Ve=We=null,Ye=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Fa||(Fa=!0,cw(El,function(){return Gi(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Bt.transition,Bt.transition=null;var o=de;de=1;var l=oe;oe|=4,Zd.current=null,MS(t,n),tw(n,t),uS(_h),Il=!!yh,_h=yh=null,t.current=n,jS(n),pI(),oe=l,de=o,Bt.transition=s}else t.current=n;if(Fa&&(Fa=!1,ur=t,Ul=i),s=t.pendingLanes,s===0&&(gr=null),yI(n.stateNode),It(t,De()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(jl)throw jl=!1,t=jh,jh=null,t;return Ul&1&&t.tag!==0&&Gi(),s=t.pendingLanes,s&1?t===Uh?uo++:(uo=0,Uh=t):uo=0,Vr(),null}function Gi(){if(ur!==null){var t=z_(Ul),e=Bt.transition,n=de;try{if(Bt.transition=null,de=16>t?16:t,ur===null)var r=!1;else{if(t=ur,ur=null,Ul=0,oe&6)throw Error(F(331));var i=oe;for(oe|=4,H=t.current;H!==null;){var s=H,o=s.child;if(H.flags&16){var l=s.deletions;if(l!==null){for(var u=0;u<l.length;u++){var c=l[u];for(H=c;H!==null;){var f=H;switch(f.tag){case 0:case 11:case 15:ao(8,f,s)}var p=f.child;if(p!==null)p.return=f,H=p;else for(;H!==null;){f=H;var m=f.sibling,x=f.return;if(Jv(f),f===c){H=null;break}if(m!==null){m.return=x,H=m;break}H=x}}}var k=s.alternate;if(k!==null){var N=k.child;if(N!==null){k.child=null;do{var O=N.sibling;N.sibling=null,N=O}while(N!==null)}}H=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,H=o;else e:for(;H!==null;){if(s=H,s.flags&2048)switch(s.tag){case 0:case 11:case 15:ao(9,s,s.return)}var w=s.sibling;if(w!==null){w.return=s.return,H=w;break e}H=s.return}}var g=t.current;for(H=g;H!==null;){o=H;var I=o.child;if(o.subtreeFlags&2064&&I!==null)I.return=o,H=I;else e:for(o=g;H!==null;){if(l=H,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:yu(9,l)}}catch(D){Ce(l,l.return,D)}if(l===o){H=null;break e}var b=l.sibling;if(b!==null){b.return=l.return,H=b;break e}H=l.return}}if(oe=i,Vr(),hn&&typeof hn.onPostCommitFiberRoot=="function")try{hn.onPostCommitFiberRoot(uu,t)}catch{}r=!0}return r}finally{de=n,Bt.transition=e}}return!1}function pg(t,e,n){e=is(n,e),e=zv(t,e,1),t=mr(t,e,1),e=mt(),t!==null&&(Go(t,1,e),It(t,e))}function Ce(t,e,n){if(t.tag===3)pg(t,t,n);else for(;e!==null;){if(e.tag===3){pg(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(gr===null||!gr.has(r))){t=is(n,t),t=Bv(e,t,1),e=mr(e,t,1),t=mt(),e!==null&&(Go(e,1,t),It(e,t));break}}e=e.return}}function HS(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=mt(),t.pingedLanes|=t.suspendedLanes&n,We===t&&(Ye&n)===n&&(Ue===4||Ue===3&&(Ye&130023424)===Ye&&500>De()-tf?Xr(t,0):ef|=n),It(t,e)}function lw(t,e){e===0&&(t.mode&1?(e=Pa,Pa<<=1,!(Pa&130023424)&&(Pa=4194304)):e=1);var n=mt();t=Un(t,e),t!==null&&(Go(t,e,n),It(t,n))}function WS(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),lw(t,n)}function qS(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(F(314))}r!==null&&r.delete(e),lw(t,n)}var uw;uw=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Et.current)wt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return wt=!1,DS(t,e,n);wt=!!(t.flags&131072)}else wt=!1,Te&&e.flags&1048576&&fv(e,Pl,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;il(t,e),t=e.pendingProps;var i=es(e,ut.current);Ki(e,n),i=Gd(null,e,r,t,i,n);var s=Qd();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Tt(r)?(s=!0,kl(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,$d(e),i.updater=gu,e.stateNode=i,i._reactInternals=e,Rh(e,r,t,n),e=Ph(null,e,r,!0,s,n)):(e.tag=0,Te&&s&&Ld(e),pt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(il(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=GS(r),t=Qt(r,t),i){case 0:e=Ch(null,e,r,t,n);break e;case 1:e=ig(null,e,r,t,n);break e;case 11:e=ng(null,e,r,t,n);break e;case 14:e=rg(null,e,r,Qt(r.type,t),n);break e}throw Error(F(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Qt(r,i),Ch(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Qt(r,i),ig(t,e,r,i,n);case 3:e:{if(qv(e),t===null)throw Error(F(387));r=e.pendingProps,s=e.memoizedState,i=s.element,vv(t,e),Dl(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=is(Error(F(423)),e),e=sg(t,e,r,n,i);break e}else if(r!==i){i=is(Error(F(424)),e),e=sg(t,e,r,n,i);break e}else for(kt=pr(e.stateNode.containerInfo.firstChild),Pt=e,Te=!0,Yt=null,n=yv(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ts(),r===i){e=Fn(t,e,n);break e}pt(t,e,r,n)}e=e.child}return e;case 5:return wv(e),t===null&&Sh(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,vh(r,i)?o=null:s!==null&&vh(r,s)&&(e.flags|=32),Wv(t,e),pt(t,e,o,n),e.child;case 6:return t===null&&Sh(e),null;case 13:return Kv(t,e,n);case 4:return Hd(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=ns(e,null,r,n):pt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Qt(r,i),ng(t,e,r,i,n);case 7:return pt(t,e,e.pendingProps,n),e.child;case 8:return pt(t,e,e.pendingProps.children,n),e.child;case 12:return pt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,pe(Nl,r._currentValue),r._currentValue=o,s!==null)if(nn(s.value,o)){if(s.children===i.children&&!Et.current){e=Fn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=On(-1,n&-n),u.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var f=c.pending;f===null?u.next=u:(u.next=f.next,f.next=u),c.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),xh(s.return,n,e),l.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(F(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),xh(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}pt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Ki(e,n),i=$t(i),r=r(i),e.flags|=1,pt(t,e,r,n),e.child;case 14:return r=e.type,i=Qt(r,e.pendingProps),i=Qt(r.type,i),rg(t,e,r,i,n);case 15:return $v(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Qt(r,i),il(t,e),e.tag=1,Tt(r)?(t=!0,kl(e)):t=!1,Ki(e,n),Fv(e,r,i),Rh(e,r,i,n),Ph(null,e,r,!0,t,n);case 19:return Gv(t,e,n);case 22:return Hv(t,e,n)}throw Error(F(156,e.tag))};function cw(t,e){return M_(t,e)}function KS(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function zt(t,e,n,r){return new KS(t,e,n,r)}function of(t){return t=t.prototype,!(!t||!t.isReactComponent)}function GS(t){if(typeof t=="function")return of(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Sd)return 11;if(t===xd)return 14}return 2}function _r(t,e){var n=t.alternate;return n===null?(n=zt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function al(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")of(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Pi:return Yr(n.children,i,s,e);case Id:o=8,i|=8;break;case Yc:return t=zt(12,n,e,i|2),t.elementType=Yc,t.lanes=s,t;case Jc:return t=zt(13,n,e,i),t.elementType=Jc,t.lanes=s,t;case Zc:return t=zt(19,n,e,i),t.elementType=Zc,t.lanes=s,t;case w_:return vu(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case __:o=10;break e;case v_:o=9;break e;case Sd:o=11;break e;case xd:o=14;break e;case Jn:o=16,r=null;break e}throw Error(F(130,t==null?t:typeof t,""))}return e=zt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Yr(t,e,n,r){return t=zt(7,t,r,e),t.lanes=n,t}function vu(t,e,n,r){return t=zt(22,t,r,e),t.elementType=w_,t.lanes=n,t.stateNode={isHidden:!1},t}function Pc(t,e,n){return t=zt(6,t,null,e),t.lanes=n,t}function Nc(t,e,n){return e=zt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function QS(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=hc(0),this.expirationTimes=hc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=hc(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function af(t,e,n,r,i,s,o,l,u){return t=new QS(t,e,n,l,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=zt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},$d(s),t}function XS(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ci,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function hw(t){if(!t)return Sr;t=t._reactInternals;e:{if(fi(t)!==t||t.tag!==1)throw Error(F(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Tt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(F(171))}if(t.tag===1){var n=t.type;if(Tt(n))return hv(t,n,e)}return e}function dw(t,e,n,r,i,s,o,l,u){return t=af(n,r,!0,t,i,s,o,l,u),t.context=hw(null),n=t.current,r=mt(),i=yr(n),s=On(r,i),s.callback=e??null,mr(n,s,i),t.current.lanes=i,Go(t,i,r),It(t,r),t}function wu(t,e,n,r){var i=e.current,s=mt(),o=yr(i);return n=hw(n),e.context===null?e.context=n:e.pendingContext=n,e=On(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=mr(i,e,o),t!==null&&(tn(t,i,o,s),tl(t,i,o)),o}function zl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function mg(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function lf(t,e){mg(t,e),(t=t.alternate)&&mg(t,e)}function YS(){return null}var fw=typeof reportError=="function"?reportError:function(t){console.error(t)};function uf(t){this._internalRoot=t}Eu.prototype.render=uf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(F(409));wu(t,e,null,null)};Eu.prototype.unmount=uf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;ii(function(){wu(null,t,null,null)}),e[jn]=null}};function Eu(t){this._internalRoot=t}Eu.prototype.unstable_scheduleHydration=function(t){if(t){var e=H_();t={blockedOn:null,target:t,priority:e};for(var n=0;n<er.length&&e!==0&&e<er[n].priority;n++);er.splice(n,0,t),n===0&&q_(t)}};function cf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Tu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function gg(){}function JS(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=zl(o);s.call(c)}}var o=dw(e,r,t,0,null,!1,!1,"",gg);return t._reactRootContainer=o,t[jn]=o.current,Ro(t.nodeType===8?t.parentNode:t),ii(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var c=zl(u);l.call(c)}}var u=af(t,0,!1,null,null,!1,!1,"",gg);return t._reactRootContainer=u,t[jn]=u.current,Ro(t.nodeType===8?t.parentNode:t),ii(function(){wu(e,u,n,r)}),u}function Iu(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var u=zl(o);l.call(u)}}wu(e,o,t,i)}else o=JS(n,e,t,i,r);return zl(o)}B_=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ks(e.pendingLanes);n!==0&&(kd(e,n|1),It(e,De()),!(oe&6)&&(ss=De()+500,Vr()))}break;case 13:ii(function(){var r=Un(t,1);if(r!==null){var i=mt();tn(r,t,1,i)}}),lf(t,1)}};Cd=function(t){if(t.tag===13){var e=Un(t,134217728);if(e!==null){var n=mt();tn(e,t,134217728,n)}lf(t,134217728)}};$_=function(t){if(t.tag===13){var e=yr(t),n=Un(t,e);if(n!==null){var r=mt();tn(n,t,e,r)}lf(t,e)}};H_=function(){return de};W_=function(t,e){var n=de;try{return de=t,e()}finally{de=n}};uh=function(t,e,n){switch(e){case"input":if(nh(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=fu(r);if(!i)throw Error(F(90));T_(r),nh(r,i)}}}break;case"textarea":S_(t,n);break;case"select":e=n.value,e!=null&&$i(t,!!n.multiple,e,!1)}};N_=nf;b_=ii;var ZS={usingClientEntryPoint:!1,Events:[Xo,Oi,fu,C_,P_,nf]},$s={findFiberByHostInstance:qr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},e1={bundleType:$s.bundleType,version:$s.version,rendererPackageName:$s.rendererPackageName,rendererConfig:$s.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Wn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=V_(t),t===null?null:t.stateNode},findFiberByHostInstance:$s.findFiberByHostInstance||YS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var za=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!za.isDisabled&&za.supportsFiber)try{uu=za.inject(e1),hn=za}catch{}}bt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ZS;bt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!cf(e))throw Error(F(200));return XS(t,e,null,n)};bt.createRoot=function(t,e){if(!cf(t))throw Error(F(299));var n=!1,r="",i=fw;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=af(t,1,!1,null,null,n,!1,r,i),t[jn]=e.current,Ro(t.nodeType===8?t.parentNode:t),new uf(e)};bt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(F(188)):(t=Object.keys(t).join(","),Error(F(268,t)));return t=V_(e),t=t===null?null:t.stateNode,t};bt.flushSync=function(t){return ii(t)};bt.hydrate=function(t,e,n){if(!Tu(e))throw Error(F(200));return Iu(null,t,e,!0,n)};bt.hydrateRoot=function(t,e,n){if(!cf(t))throw Error(F(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=fw;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=dw(e,null,t,1,n??null,i,!1,s,o),t[jn]=e.current,Ro(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Eu(e)};bt.render=function(t,e,n){if(!Tu(e))throw Error(F(200));return Iu(null,t,e,!1,n)};bt.unmountComponentAtNode=function(t){if(!Tu(t))throw Error(F(40));return t._reactRootContainer?(ii(function(){Iu(null,null,t,!1,function(){t._reactRootContainer=null,t[jn]=null})}),!0):!1};bt.unstable_batchedUpdates=nf;bt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Tu(n))throw Error(F(200));if(t==null||t._reactInternals===void 0)throw Error(F(38));return Iu(t,e,n,!1,r)};bt.version="18.3.1-next-f1338f8080-20240426";function pw(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(pw)}catch(t){console.error(t)}}pw(),p_.exports=bt;var t1=p_.exports,yg=t1;Qc.createRoot=yg.createRoot,Qc.hydrateRoot=yg.hydrateRoot;const n1=()=>{};var _g={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mw=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},r1=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},gw={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,u=i+2<t.length,c=u?t[i+2]:0,f=s>>2,p=(s&3)<<4|l>>4;let m=(l&15)<<2|c>>6,x=c&63;u||(x=64,o||(m=64)),r.push(n[f],n[p],n[m],n[x])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(mw(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):r1(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const p=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||c==null||p==null)throw new i1;const m=s<<2|l>>4;if(r.push(m),c!==64){const x=l<<4&240|c>>2;if(r.push(x),p!==64){const k=c<<6&192|p;r.push(k)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class i1 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const s1=function(t){const e=mw(t);return gw.encodeByteArray(e,!0)},Bl=function(t){return s1(t).replace(/\./g,"")},yw=function(t){try{return gw.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function o1(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a1=()=>o1().__FIREBASE_DEFAULTS__,l1=()=>{if(typeof process>"u"||typeof _g>"u")return;const t=_g.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},u1=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&yw(t[1]);return e&&JSON.parse(e)},Su=()=>{try{return n1()||a1()||l1()||u1()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},_w=t=>{var e,n;return(n=(e=Su())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},vw=t=>{const e=_w(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},ww=()=>{var t;return(t=Su())===null||t===void 0?void 0:t.config},Ew=t=>{var e;return(e=Su())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c1{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lr(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function hf(t){return(await fetch(t,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tw(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Bl(JSON.stringify(n)),Bl(JSON.stringify(o)),""].join(".")}const co={};function h1(){const t={prod:[],emulator:[]};for(const e of Object.keys(co))co[e]?t.emulator.push(e):t.prod.push(e);return t}function d1(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let vg=!1;function df(t,e){if(typeof window>"u"||typeof document>"u"||!Lr(window.location.host)||co[t]===e||co[t]||vg)return;co[t]=e;function n(m){return`__firebase__banner__${m}`}const r="__firebase__banner",s=h1().prod.length>0;function o(){const m=document.getElementById(r);m&&m.remove()}function l(m){m.style.display="flex",m.style.background="#7faaf0",m.style.position="fixed",m.style.bottom="5px",m.style.left="5px",m.style.padding=".5em",m.style.borderRadius="5px",m.style.alignItems="center"}function u(m,x){m.setAttribute("width","24"),m.setAttribute("id",x),m.setAttribute("height","24"),m.setAttribute("viewBox","0 0 24 24"),m.setAttribute("fill","none"),m.style.marginLeft="-6px"}function c(){const m=document.createElement("span");return m.style.cursor="pointer",m.style.marginLeft="16px",m.style.fontSize="24px",m.innerHTML=" &times;",m.onclick=()=>{vg=!0,o()},m}function f(m,x){m.setAttribute("id",x),m.innerText="Learn more",m.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",m.setAttribute("target","__blank"),m.style.paddingLeft="5px",m.style.textDecoration="underline"}function p(){const m=d1(r),x=n("text"),k=document.getElementById(x)||document.createElement("span"),N=n("learnmore"),O=document.getElementById(N)||document.createElement("a"),w=n("preprendIcon"),g=document.getElementById(w)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(m.created){const I=m.element;l(I),f(O,N);const b=c();u(g,w),I.append(g,k,O,b),document.body.appendChild(I)}s?(k.innerText="Preview backend disconnected.",g.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(g.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,k.innerText="Preview backend running in this workspace."),k.setAttribute("id",x)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",p):p()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ct(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function f1(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ct())}function p1(){var t;const e=(t=Su())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function m1(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function g1(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function y1(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function _1(){const t=ct();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function v1(){return!p1()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function w1(){try{return typeof indexedDB=="object"}catch{return!1}}function E1(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T1="FirebaseError";class Tn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=T1,Object.setPrototypeOf(this,Tn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Jo.prototype.create)}}class Jo{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?I1(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new Tn(i,l,r)}}function I1(t,e){return t.replace(S1,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const S1=/\{\$([^}]+)}/g;function x1(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function si(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(wg(s)&&wg(o)){if(!si(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function wg(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zo(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Qs(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Xs(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function A1(t,e){const n=new R1(t,e);return n.subscribe.bind(n)}class R1{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");k1(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=bc),i.error===void 0&&(i.error=bc),i.complete===void 0&&(i.complete=bc);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function k1(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function bc(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qe(t){return t&&t._delegate?t._delegate:t}class xr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C1{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new c1;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(N1(e))try{this.getOrInitializeService({instanceIdentifier:Wr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Wr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Wr){return this.instances.has(e)}getOptions(e=Wr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:P1(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Wr){return this.component?this.component.multipleInstances?e:Wr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function P1(t){return t===Wr?void 0:t}function N1(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b1{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new C1(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var re;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(re||(re={}));const D1={debug:re.DEBUG,verbose:re.VERBOSE,info:re.INFO,warn:re.WARN,error:re.ERROR,silent:re.SILENT},O1=re.INFO,V1={[re.DEBUG]:"log",[re.VERBOSE]:"log",[re.INFO]:"info",[re.WARN]:"warn",[re.ERROR]:"error"},L1=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=V1[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ff{constructor(e){this.name=e,this._logLevel=O1,this._logHandler=L1,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in re))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?D1[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,re.DEBUG,...e),this._logHandler(this,re.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,re.VERBOSE,...e),this._logHandler(this,re.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,re.INFO,...e),this._logHandler(this,re.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,re.WARN,...e),this._logHandler(this,re.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,re.ERROR,...e),this._logHandler(this,re.ERROR,...e)}}const M1=(t,e)=>e.some(n=>t instanceof n);let Eg,Tg;function j1(){return Eg||(Eg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function U1(){return Tg||(Tg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Iw=new WeakMap,Bh=new WeakMap,Sw=new WeakMap,Dc=new WeakMap,pf=new WeakMap;function F1(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(vr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Iw.set(n,t)}).catch(()=>{}),pf.set(e,t),e}function z1(t){if(Bh.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Bh.set(t,e)}let $h={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Bh.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Sw.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return vr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function B1(t){$h=t($h)}function $1(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Oc(this),e,...n);return Sw.set(r,e.sort?e.sort():[e]),vr(r)}:U1().includes(t)?function(...e){return t.apply(Oc(this),e),vr(Iw.get(this))}:function(...e){return vr(t.apply(Oc(this),e))}}function H1(t){return typeof t=="function"?$1(t):(t instanceof IDBTransaction&&z1(t),M1(t,j1())?new Proxy(t,$h):t)}function vr(t){if(t instanceof IDBRequest)return F1(t);if(Dc.has(t))return Dc.get(t);const e=H1(t);return e!==t&&(Dc.set(t,e),pf.set(e,t)),e}const Oc=t=>pf.get(t);function W1(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=vr(o);return r&&o.addEventListener("upgradeneeded",u=>{r(vr(o.result),u.oldVersion,u.newVersion,vr(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}const q1=["get","getKey","getAll","getAllKeys","count"],K1=["put","add","delete","clear"],Vc=new Map;function Ig(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Vc.get(e))return Vc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=K1.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||q1.includes(n)))return;const s=async function(o,...l){const u=this.transaction(o,i?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),i&&u.done]))[0]};return Vc.set(e,s),s}B1(t=>({...t,get:(e,n,r)=>Ig(e,n)||t.get(e,n,r),has:(e,n)=>!!Ig(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G1{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Q1(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Q1(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Hh="@firebase/app",Sg="0.13.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zn=new ff("@firebase/app"),X1="@firebase/app-compat",Y1="@firebase/analytics-compat",J1="@firebase/analytics",Z1="@firebase/app-check-compat",ex="@firebase/app-check",tx="@firebase/auth",nx="@firebase/auth-compat",rx="@firebase/database",ix="@firebase/data-connect",sx="@firebase/database-compat",ox="@firebase/functions",ax="@firebase/functions-compat",lx="@firebase/installations",ux="@firebase/installations-compat",cx="@firebase/messaging",hx="@firebase/messaging-compat",dx="@firebase/performance",fx="@firebase/performance-compat",px="@firebase/remote-config",mx="@firebase/remote-config-compat",gx="@firebase/storage",yx="@firebase/storage-compat",_x="@firebase/firestore",vx="@firebase/ai",wx="@firebase/firestore-compat",Ex="firebase",Tx="11.10.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wh="[DEFAULT]",Ix={[Hh]:"fire-core",[X1]:"fire-core-compat",[J1]:"fire-analytics",[Y1]:"fire-analytics-compat",[ex]:"fire-app-check",[Z1]:"fire-app-check-compat",[tx]:"fire-auth",[nx]:"fire-auth-compat",[rx]:"fire-rtdb",[ix]:"fire-data-connect",[sx]:"fire-rtdb-compat",[ox]:"fire-fn",[ax]:"fire-fn-compat",[lx]:"fire-iid",[ux]:"fire-iid-compat",[cx]:"fire-fcm",[hx]:"fire-fcm-compat",[dx]:"fire-perf",[fx]:"fire-perf-compat",[px]:"fire-rc",[mx]:"fire-rc-compat",[gx]:"fire-gcs",[yx]:"fire-gcs-compat",[_x]:"fire-fst",[wx]:"fire-fst-compat",[vx]:"fire-vertex","fire-js":"fire-js",[Ex]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $l=new Map,Sx=new Map,qh=new Map;function xg(t,e){try{t.container.addComponent(e)}catch(n){zn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function oi(t){const e=t.name;if(qh.has(e))return zn.debug(`There were multiple attempts to register component ${e}.`),!1;qh.set(e,t);for(const n of $l.values())xg(n,t);for(const n of Sx.values())xg(n,t);return!0}function xu(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Rt(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xx={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},wr=new Jo("app","Firebase",xx);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ax{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new xr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw wr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pi=Tx;function xw(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Wh,automaticDataCollectionEnabled:!0},e),i=r.name;if(typeof i!="string"||!i)throw wr.create("bad-app-name",{appName:String(i)});if(n||(n=ww()),!n)throw wr.create("no-options");const s=$l.get(i);if(s){if(si(n,s.options)&&si(r,s.config))return s;throw wr.create("duplicate-app",{appName:i})}const o=new b1(i);for(const u of qh.values())o.addComponent(u);const l=new Ax(n,r,o);return $l.set(i,l),l}function mf(t=Wh){const e=$l.get(t);if(!e&&t===Wh&&ww())return xw();if(!e)throw wr.create("no-app",{appName:t});return e}function fn(t,e,n){var r;let i=(r=Ix[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),zn.warn(l.join(" "));return}oi(new xr(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rx="firebase-heartbeat-database",kx=1,Lo="firebase-heartbeat-store";let Lc=null;function Aw(){return Lc||(Lc=W1(Rx,kx,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Lo)}catch(n){console.warn(n)}}}}).catch(t=>{throw wr.create("idb-open",{originalErrorMessage:t.message})})),Lc}async function Cx(t){try{const n=(await Aw()).transaction(Lo),r=await n.objectStore(Lo).get(Rw(t));return await n.done,r}catch(e){if(e instanceof Tn)zn.warn(e.message);else{const n=wr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});zn.warn(n.message)}}}async function Ag(t,e){try{const r=(await Aw()).transaction(Lo,"readwrite");await r.objectStore(Lo).put(e,Rw(t)),await r.done}catch(n){if(n instanceof Tn)zn.warn(n.message);else{const r=wr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});zn.warn(r.message)}}}function Rw(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Px=1024,Nx=30;class bx{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Ox(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Rg();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats.length>Nx){const o=Vx(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){zn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Rg(),{heartbeatsToSend:r,unsentEntries:i}=Dx(this._heartbeatsCache.heartbeats),s=Bl(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return zn.warn(n),""}}}function Rg(){return new Date().toISOString().substring(0,10)}function Dx(t,e=Px){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),kg(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),kg(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Ox{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return w1()?E1().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Cx(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ag(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ag(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function kg(t){return Bl(JSON.stringify({version:2,heartbeats:t})).length}function Vx(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lx(t){oi(new xr("platform-logger",e=>new G1(e),"PRIVATE")),oi(new xr("heartbeat",e=>new bx(e),"PRIVATE")),fn(Hh,Sg,t),fn(Hh,Sg,"esm2017"),fn("fire-js","")}Lx("");var Mx="firebase",jx="11.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */fn(Mx,jx,"app");function gf(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function kw(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Ux=kw,Cw=new Jo("auth","Firebase",kw());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hl=new ff("@firebase/auth");function Fx(t,...e){Hl.logLevel<=re.WARN&&Hl.warn(`Auth (${pi}): ${t}`,...e)}function ll(t,...e){Hl.logLevel<=re.ERROR&&Hl.error(`Auth (${pi}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rn(t,...e){throw yf(t,...e)}function pn(t,...e){return yf(t,...e)}function Pw(t,e,n){const r=Object.assign(Object.assign({},Ux()),{[e]:n});return new Jo("auth","Firebase",r).create(e,{appName:t.name})}function Vn(t){return Pw(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function yf(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Cw.create(t,...e)}function G(t,e,...n){if(!t)throw yf(e,...n)}function Pn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ll(e),new Error(e)}function Bn(t,e){t||Pn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kh(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function zx(){return Cg()==="http:"||Cg()==="https:"}function Cg(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bx(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(zx()||g1()||"connection"in navigator)?navigator.onLine:!0}function $x(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ea{constructor(e,n){this.shortDelay=e,this.longDelay=n,Bn(n>e,"Short delay should be less than long delay!"),this.isMobile=f1()||y1()}get(){return Bx()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _f(t,e){Bn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nw{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Pn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Pn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Pn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hx={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wx=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],qx=new ea(3e4,6e4);function Mr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function qn(t,e,n,r,i={}){return bw(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=Zo(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const c=Object.assign({method:e,headers:u},s);return m1()||(c.referrerPolicy="no-referrer"),t.emulatorConfig&&Lr(t.emulatorConfig.host)&&(c.credentials="include"),Nw.fetch()(await Dw(t,t.config.apiHost,n,l),c)})}async function bw(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},Hx),e);try{const i=new Gx(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Ba(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[u,c]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ba(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw Ba(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw Ba(t,"user-disabled",o);const f=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Pw(t,f,c);rn(t,f)}}catch(i){if(i instanceof Tn)throw i;rn(t,"network-request-failed",{message:String(i)})}}async function ta(t,e,n,r,i={}){const s=await qn(t,e,n,r,i);return"mfaPendingCredential"in s&&rn(t,"multi-factor-auth-required",{_serverResponse:s}),s}async function Dw(t,e,n,r){const i=`${e}${n}?${r}`,s=t,o=s.config.emulator?_f(t.config,i):`${t.config.apiScheme}://${i}`;return Wx.includes(n)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(o).toString():o}function Kx(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Gx{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(pn(this.auth,"network-request-failed")),qx.get())})}}function Ba(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=pn(t,e,r);return i.customData._tokenResponse=n,i}function Pg(t){return t!==void 0&&t.enterprise!==void 0}class Qx{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return Kx(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function Xx(t,e){return qn(t,"GET","/v2/recaptchaConfig",Mr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yx(t,e){return qn(t,"POST","/v1/accounts:delete",e)}async function Wl(t,e){return qn(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ho(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Jx(t,e=!1){const n=qe(t),r=await n.getIdToken(e),i=vf(r);G(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:ho(Mc(i.auth_time)),issuedAtTime:ho(Mc(i.iat)),expirationTime:ho(Mc(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Mc(t){return Number(t)*1e3}function vf(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return ll("JWT malformed, contained fewer than 3 sections"),null;try{const i=yw(n);return i?JSON.parse(i):(ll("Failed to decode base64 JWT payload"),null)}catch(i){return ll("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Ng(t){const e=vf(t);return G(e,"internal-error"),G(typeof e.exp<"u","internal-error"),G(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function os(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Tn&&Zx(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Zx({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eA{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gh{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ho(this.lastLoginAt),this.creationTime=ho(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ql(t){var e;const n=t.auth,r=await t.getIdToken(),i=await os(t,Wl(n,{idToken:r}));G(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?Ow(s.providerUserInfo):[],l=nA(t.providerData,o),u=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(l!=null&&l.length),f=u?c:!1,p={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new Gh(s.createdAt,s.lastLoginAt),isAnonymous:f};Object.assign(t,p)}async function tA(t){const e=qe(t);await ql(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function nA(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Ow(t){return t.map(e=>{var{providerId:n}=e,r=gf(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rA(t,e){const n=await bw(t,{},async()=>{const r=Zo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=await Dw(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:l,body:r};return t.emulatorConfig&&Lr(t.emulatorConfig.host)&&(u.credentials="include"),Nw.fetch()(o,u)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function iA(t,e){return qn(t,"POST","/v2/accounts:revokeToken",Mr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){G(e.idToken,"internal-error"),G(typeof e.idToken<"u","internal-error"),G(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Ng(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){G(e.length!==0,"internal-error");const n=Ng(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(G(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await rA(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Qi;return r&&(G(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(G(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(G(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Qi,this.toJSON())}_performRefresh(){return Pn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yn(t,e){G(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Jt{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=gf(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new eA(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Gh(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await os(this,this.stsTokenManager.getToken(this.auth,e));return G(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Jx(this,e)}reload(){return tA(this)}_assign(e){this!==e&&(G(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Jt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){G(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await ql(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Rt(this.auth.app))return Promise.reject(Vn(this.auth));const e=await this.getIdToken();return await os(this,Yx(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,l,u,c,f;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(i=n.email)!==null&&i!==void 0?i:void 0,x=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,k=(o=n.photoURL)!==null&&o!==void 0?o:void 0,N=(l=n.tenantId)!==null&&l!==void 0?l:void 0,O=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,w=(c=n.createdAt)!==null&&c!==void 0?c:void 0,g=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:I,emailVerified:b,isAnonymous:D,providerData:M,stsTokenManager:T}=n;G(I&&T,e,"internal-error");const _=Qi.fromJSON(this.name,T);G(typeof I=="string",e,"internal-error"),Yn(p,e.name),Yn(m,e.name),G(typeof b=="boolean",e,"internal-error"),G(typeof D=="boolean",e,"internal-error"),Yn(x,e.name),Yn(k,e.name),Yn(N,e.name),Yn(O,e.name),Yn(w,e.name),Yn(g,e.name);const S=new Jt({uid:I,auth:e,email:m,emailVerified:b,displayName:p,isAnonymous:D,photoURL:k,phoneNumber:x,tenantId:N,stsTokenManager:_,createdAt:w,lastLoginAt:g});return M&&Array.isArray(M)&&(S.providerData=M.map(E=>Object.assign({},E))),O&&(S._redirectEventId=O),S}static async _fromIdTokenResponse(e,n,r=!1){const i=new Qi;i.updateFromServerResponse(n);const s=new Jt({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await ql(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];G(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?Ow(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new Qi;l.updateFromIdToken(r);const u=new Jt({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Gh(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,c),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bg=new Map;function Nn(t){Bn(t instanceof Function,"Expected a class definition");let e=bg.get(t);return e?(Bn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,bg.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vw{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Vw.type="NONE";const Dg=Vw;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ul(t,e,n){return`firebase:${t}:${e}:${n}`}class Xi{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=ul(this.userKey,i.apiKey,s),this.fullPersistenceKey=ul("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Wl(this.auth,{idToken:e}).catch(()=>{});return n?Jt._fromGetAccountInfoResponse(this.auth,n,e):null}return Jt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Xi(Nn(Dg),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||Nn(Dg);const o=ul(r,e.config.apiKey,e.name);let l=null;for(const c of n)try{const f=await c._get(o);if(f){let p;if(typeof f=="string"){const m=await Wl(e,{idToken:f}).catch(()=>{});if(!m)break;p=await Jt._fromGetAccountInfoResponse(e,m,f)}else p=Jt._fromJSON(e,f);c!==s&&(l=p),s=c;break}}catch{}const u=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new Xi(s,e,r):(s=u[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new Xi(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Og(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Uw(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Lw(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(zw(e))return"Blackberry";if(Bw(e))return"Webos";if(Mw(e))return"Safari";if((e.includes("chrome/")||jw(e))&&!e.includes("edge/"))return"Chrome";if(Fw(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Lw(t=ct()){return/firefox\//i.test(t)}function Mw(t=ct()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function jw(t=ct()){return/crios\//i.test(t)}function Uw(t=ct()){return/iemobile/i.test(t)}function Fw(t=ct()){return/android/i.test(t)}function zw(t=ct()){return/blackberry/i.test(t)}function Bw(t=ct()){return/webos/i.test(t)}function wf(t=ct()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function sA(t=ct()){var e;return wf(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function oA(){return _1()&&document.documentMode===10}function $w(t=ct()){return wf(t)||Fw(t)||Bw(t)||zw(t)||/windows phone/i.test(t)||Uw(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hw(t,e=[]){let n;switch(t){case"Browser":n=Og(ct());break;case"Worker":n=`${Og(ct())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${pi}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aA{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const u=e(s);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lA(t,e={}){return qn(t,"GET","/v2/passwordPolicy",Mr(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uA=6;class cA{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:uA,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,l;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(l=u.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hA{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Vg(this),this.idTokenSubscription=new Vg(this),this.beforeStateQueue=new aA(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Cw,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Nn(n)),this._initializationPromise=this.queue(async()=>{var r,i,s;if(!this._deleted&&(this.persistenceManager=await Xi.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Wl(this,{idToken:e}),r=await Jt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Rt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return G(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await ql(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=$x()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Rt(this.app))return Promise.reject(Vn(this));const n=e?qe(e):null;return n&&G(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&G(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Rt(this.app)?Promise.reject(Vn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Rt(this.app)?Promise.reject(Vn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Nn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await lA(this),n=new cA(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Jo("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await iA(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Nn(e)||this._popupRedirectResolver;G(n,this,"argument-error"),this.redirectPersistenceManager=await Xi.create(this,[Nn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(G(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return G(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Hw(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;if(Rt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&Fx(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function mi(t){return qe(t)}class Vg{constructor(e){this.auth=e,this.observer=null,this.addObserver=A1(n=>this.observer=n)}get next(){return G(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Au={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function dA(t){Au=t}function Ww(t){return Au.loadJS(t)}function fA(){return Au.recaptchaEnterpriseScript}function pA(){return Au.gapiScript}function mA(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class gA{constructor(){this.enterprise=new yA}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class yA{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const _A="recaptcha-enterprise",qw="NO_RECAPTCHA";class vA{constructor(e){this.type=_A,this.auth=mi(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,l)=>{Xx(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const c=new Qx(u);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(u=>{l(u)})})}function i(s,o,l){const u=window.grecaptcha;Pg(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(qw)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new gA().execute("siteKey",{action:"verify"}):new Promise((s,o)=>{r(this.auth).then(l=>{if(!n&&Pg(window.grecaptcha))i(l,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=fA();u.length!==0&&(u+=l),Ww(u).then(()=>{i(l,s,o)}).catch(c=>{o(c)})}}).catch(l=>{o(l)})})}}async function Lg(t,e,n,r=!1,i=!1){const s=new vA(t);let o;if(i)o=qw;else try{o=await s.verify(n)}catch{o=await s.verify(n,!0)}const l=Object.assign({},e);if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const u=l.phoneEnrollmentInfo.phoneNumber,c=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:u,recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const u=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return r?Object.assign(l,{captchaResp:o}):Object.assign(l,{captchaResponse:o}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function Qh(t,e,n,r,i){var s;if(!((s=t._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await Lg(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await Lg(t,e,n,n==="getOobCode");return r(t,l)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wA(t,e){const n=xu(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(si(s,e??{}))return i;rn(i,"already-initialized")}return n.initialize({options:e})}function EA(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Nn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function TA(t,e,n){const r=mi(t);G(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=Kw(e),{host:o,port:l}=IA(e),u=l===null?"":`:${l}`,c={url:`${s}//${o}${u}/`},f=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){G(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),G(si(c,r.config.emulator)&&si(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=c,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,Lr(o)?(hf(`${s}//${o}${u}`),df("Auth",!0)):SA()}function Kw(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function IA(t){const e=Kw(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Mg(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Mg(o)}}}function Mg(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function SA(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ef{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Pn("not implemented")}_getIdTokenResponse(e){return Pn("not implemented")}_linkToIdToken(e,n){return Pn("not implemented")}_getReauthenticationResolver(e){return Pn("not implemented")}}async function xA(t,e){return qn(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function AA(t,e){return ta(t,"POST","/v1/accounts:signInWithPassword",Mr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function RA(t,e){return ta(t,"POST","/v1/accounts:signInWithEmailLink",Mr(t,e))}async function kA(t,e){return ta(t,"POST","/v1/accounts:signInWithEmailLink",Mr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mo extends Ef{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Mo(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Mo(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Qh(e,n,"signInWithPassword",AA);case"emailLink":return RA(e,{email:this._email,oobCode:this._password});default:rn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Qh(e,r,"signUpPassword",xA);case"emailLink":return kA(e,{idToken:n,email:this._email,oobCode:this._password});default:rn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yi(t,e){return ta(t,"POST","/v1/accounts:signInWithIdp",Mr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CA="http://localhost";class ai extends Ef{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ai(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):rn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=gf(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new ai(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Yi(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Yi(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Yi(e,n)}buildRequest(){const e={requestUri:CA,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Zo(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PA(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function NA(t){const e=Qs(Xs(t)).link,n=e?Qs(Xs(e)).deep_link_id:null,r=Qs(Xs(t)).deep_link_id;return(r?Qs(Xs(r)).link:null)||r||n||e||t}class Tf{constructor(e){var n,r,i,s,o,l;const u=Qs(Xs(e)),c=(n=u.apiKey)!==null&&n!==void 0?n:null,f=(r=u.oobCode)!==null&&r!==void 0?r:null,p=PA((i=u.mode)!==null&&i!==void 0?i:null);G(c&&f&&p,"argument-error"),this.apiKey=c,this.operation=p,this.code=f,this.continueUrl=(s=u.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=u.lang)!==null&&o!==void 0?o:null,this.tenantId=(l=u.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=NA(e);try{return new Tf(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ms{constructor(){this.providerId=ms.PROVIDER_ID}static credential(e,n){return Mo._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Tf.parseLink(n);return G(r,"argument-error"),Mo._fromEmailAndCode(e,r.code,r.tenantId)}}ms.PROVIDER_ID="password";ms.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ms.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gw{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class na extends Gw{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nr extends na{constructor(){super("facebook.com")}static credential(e){return ai._fromParams({providerId:nr.PROVIDER_ID,signInMethod:nr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return nr.credentialFromTaggedObject(e)}static credentialFromError(e){return nr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return nr.credential(e.oauthAccessToken)}catch{return null}}}nr.FACEBOOK_SIGN_IN_METHOD="facebook.com";nr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rr extends na{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ai._fromParams({providerId:rr.PROVIDER_ID,signInMethod:rr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return rr.credentialFromTaggedObject(e)}static credentialFromError(e){return rr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return rr.credential(n,r)}catch{return null}}}rr.GOOGLE_SIGN_IN_METHOD="google.com";rr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir extends na{constructor(){super("github.com")}static credential(e){return ai._fromParams({providerId:ir.PROVIDER_ID,signInMethod:ir.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ir.credentialFromTaggedObject(e)}static credentialFromError(e){return ir.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ir.credential(e.oauthAccessToken)}catch{return null}}}ir.GITHUB_SIGN_IN_METHOD="github.com";ir.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sr extends na{constructor(){super("twitter.com")}static credential(e,n){return ai._fromParams({providerId:sr.PROVIDER_ID,signInMethod:sr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return sr.credentialFromTaggedObject(e)}static credentialFromError(e){return sr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return sr.credential(n,r)}catch{return null}}}sr.TWITTER_SIGN_IN_METHOD="twitter.com";sr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bA(t,e){return ta(t,"POST","/v1/accounts:signUp",Mr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class li{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Jt._fromIdTokenResponse(e,r,i),o=jg(r);return new li({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=jg(r);return new li({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function jg(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kl extends Tn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Kl.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Kl(e,n,r,i)}}function Qw(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Kl._fromErrorAndOperation(t,s,e,r):s})}async function DA(t,e,n=!1){const r=await os(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return li._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function OA(t,e,n=!1){const{auth:r}=t;if(Rt(r.app))return Promise.reject(Vn(r));const i="reauthenticate";try{const s=await os(t,Qw(r,i,e,t),n);G(s.idToken,r,"internal-error");const o=vf(s.idToken);G(o,r,"internal-error");const{sub:l}=o;return G(t.uid===l,r,"user-mismatch"),li._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&rn(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xw(t,e,n=!1){if(Rt(t.app))return Promise.reject(Vn(t));const r="signIn",i=await Qw(t,r,e),s=await li._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function VA(t,e){return Xw(mi(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yw(t){const e=mi(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Ug(t,e,n){if(Rt(t.app))return Promise.reject(Vn(t));const r=mi(t),o=await Qh(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",bA).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&Yw(t),u}),l=await li._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function Fg(t,e,n){return Rt(t.app)?Promise.reject(Vn(t)):VA(qe(t),ms.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Yw(t),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function LA(t,e){return qn(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xh(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=qe(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await os(r,LA(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const l=r.providerData.find(({providerId:u})=>u==="password");l&&(l.displayName=r.displayName,l.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function MA(t,e,n,r){return qe(t).onIdTokenChanged(e,n,r)}function jA(t,e,n){return qe(t).beforeAuthStateChanged(e,n)}function UA(t,e,n,r){return qe(t).onAuthStateChanged(e,n,r)}function If(t){return qe(t).signOut()}const Gl="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jw{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Gl,"1"),this.storage.removeItem(Gl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FA=1e3,zA=10;class Zw extends Jw{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=$w(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);oA()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,zA):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},FA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Zw.type="LOCAL";const BA=Zw;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e0 extends Jw{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}e0.type="SESSION";const t0=e0;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $A(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ru{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Ru(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async c=>c(n.origin,s)),u=await $A(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ru.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sf(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HA{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,u)=>{const c=Sf("",20);i.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(p){const m=p;if(m.data.eventId===c)switch(m.data.status){case"ack":clearTimeout(f),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(m.data.response);break;default:clearTimeout(f),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mn(){return window}function WA(t){mn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function n0(){return typeof mn().WorkerGlobalScope<"u"&&typeof mn().importScripts=="function"}async function qA(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function KA(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function GA(){return n0()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r0="firebaseLocalStorageDb",QA=1,Ql="firebaseLocalStorage",i0="fbase_key";class ra{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ku(t,e){return t.transaction([Ql],e?"readwrite":"readonly").objectStore(Ql)}function XA(){const t=indexedDB.deleteDatabase(r0);return new ra(t).toPromise()}function Yh(){const t=indexedDB.open(r0,QA);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Ql,{keyPath:i0})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Ql)?e(r):(r.close(),await XA(),e(await Yh()))})})}async function zg(t,e,n){const r=ku(t,!0).put({[i0]:e,value:n});return new ra(r).toPromise()}async function YA(t,e){const n=ku(t,!1).get(e),r=await new ra(n).toPromise();return r===void 0?null:r.value}function Bg(t,e){const n=ku(t,!0).delete(e);return new ra(n).toPromise()}const JA=800,ZA=3;class s0{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Yh(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>ZA)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return n0()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ru._getInstance(GA()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await qA(),!this.activeServiceWorker)return;this.sender=new HA(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||KA()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Yh();return await zg(e,Gl,"1"),await Bg(e,Gl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>zg(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>YA(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Bg(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=ku(i,!1).getAll();return new ra(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),JA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}s0.type="LOCAL";const eR=s0;new ea(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tR(t,e){return e?Nn(e):(G(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xf extends Ef{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Yi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Yi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Yi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function nR(t){return Xw(t.auth,new xf(t),t.bypassAuthState)}function rR(t){const{auth:e,user:n}=t;return G(n,e,"internal-error"),OA(n,new xf(t),t.bypassAuthState)}async function iR(t){const{auth:e,user:n}=t;return G(n,e,"internal-error"),DA(n,new xf(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o0{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return nR;case"linkViaPopup":case"linkViaRedirect":return iR;case"reauthViaPopup":case"reauthViaRedirect":return rR;default:rn(this.auth,"internal-error")}}resolve(e){Bn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Bn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sR=new ea(2e3,1e4);class zi extends o0{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,zi.currentPopupAction&&zi.currentPopupAction.cancel(),zi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return G(e,this.auth,"internal-error"),e}async onExecution(){Bn(this.filter.length===1,"Popup operations only handle one event");const e=Sf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(pn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(pn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,zi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(pn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,sR.get())};e()}}zi.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oR="pendingRedirect",cl=new Map;class aR extends o0{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=cl.get(this.auth._key());if(!e){try{const r=await lR(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}cl.set(this.auth._key(),e)}return this.bypassAuthState||cl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function lR(t,e){const n=hR(e),r=cR(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function uR(t,e){cl.set(t._key(),e)}function cR(t){return Nn(t._redirectPersistence)}function hR(t){return ul(oR,t.config.apiKey,t.name)}async function dR(t,e,n=!1){if(Rt(t.app))return Promise.reject(Vn(t));const r=mi(t),i=tR(r,e),o=await new aR(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fR=10*60*1e3;class pR{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!mR(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!a0(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(pn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=fR&&this.cachedEventUids.clear(),this.cachedEventUids.has($g(e))}saveEventToCache(e){this.cachedEventUids.add($g(e)),this.lastProcessedEventTime=Date.now()}}function $g(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function a0({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function mR(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return a0(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gR(t,e={}){return qn(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yR=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,_R=/^https?/;async function vR(t){if(t.config.emulator)return;const{authorizedDomains:e}=await gR(t);for(const n of e)try{if(wR(n))return}catch{}rn(t,"unauthorized-domain")}function wR(t){const e=Kh(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!_R.test(n))return!1;if(yR.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ER=new ea(3e4,6e4);function Hg(){const t=mn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function TR(t){return new Promise((e,n)=>{var r,i,s;function o(){Hg(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Hg(),n(pn(t,"network-request-failed"))},timeout:ER.get()})}if(!((i=(r=mn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=mn().gapi)===null||s===void 0)&&s.load)o();else{const l=mA("iframefcb");return mn()[l]=()=>{gapi.load?o():n(pn(t,"network-request-failed"))},Ww(`${pA()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw hl=null,e})}let hl=null;function IR(t){return hl=hl||TR(t),hl}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SR=new ea(5e3,15e3),xR="__/auth/iframe",AR="emulator/auth/iframe",RR={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},kR=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function CR(t){const e=t.config;G(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?_f(e,AR):`https://${t.config.authDomain}/${xR}`,r={apiKey:e.apiKey,appName:t.name,v:pi},i=kR.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Zo(r).slice(1)}`}async function PR(t){const e=await IR(t),n=mn().gapi;return G(n,t,"internal-error"),e.open({where:document.body,url:CR(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:RR,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=pn(t,"network-request-failed"),l=mn().setTimeout(()=>{s(o)},SR.get());function u(){mn().clearTimeout(l),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NR={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},bR=500,DR=600,OR="_blank",VR="http://localhost";class Wg{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function LR(t,e,n,r=bR,i=DR){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u=Object.assign(Object.assign({},NR),{width:r.toString(),height:i.toString(),top:s,left:o}),c=ct().toLowerCase();n&&(l=jw(c)?OR:n),Lw(c)&&(e=e||VR,u.scrollbars="yes");const f=Object.entries(u).reduce((m,[x,k])=>`${m}${x}=${k},`,"");if(sA(c)&&l!=="_self")return MR(e||"",l),new Wg(null);const p=window.open(e||"",l,f);G(p,t,"popup-blocked");try{p.focus()}catch{}return new Wg(p)}function MR(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jR="__/auth/handler",UR="emulator/auth/handler",FR=encodeURIComponent("fac");async function qg(t,e,n,r,i,s){G(t.config.authDomain,t,"auth-domain-config-required"),G(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:pi,eventId:i};if(e instanceof Gw){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",x1(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries({}))o[f]=p}if(e instanceof na){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const u=await t._getAppCheckToken(),c=u?`#${FR}=${encodeURIComponent(u)}`:"";return`${zR(t)}?${Zo(l).slice(1)}${c}`}function zR({config:t}){return t.emulator?_f(t,UR):`https://${t.authDomain}/${jR}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jc="webStorageSupport";class BR{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=t0,this._completeRedirectFn=dR,this._overrideRedirectResult=uR}async _openPopup(e,n,r,i){var s;Bn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await qg(e,n,r,Kh(),i);return LR(e,o,Sf())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await qg(e,n,r,Kh(),i);return WA(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Bn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await PR(e),r=new pR(e);return n.register("authEvent",i=>(G(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(jc,{type:jc},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[jc];o!==void 0&&n(!!o),rn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=vR(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return $w()||Mw()||wf()}}const $R=BR;var Kg="@firebase/auth",Gg="1.10.8";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HR{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){G(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WR(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function qR(t){oi(new xr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;G(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Hw(t)},c=new hA(r,i,s,u);return EA(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),oi(new xr("auth-internal",e=>{const n=mi(e.getProvider("auth").getImmediate());return(r=>new HR(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),fn(Kg,Gg,WR(t)),fn(Kg,Gg,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KR=5*60,GR=Ew("authIdTokenMaxAge")||KR;let Qg=null;const QR=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>GR)return;const i=n==null?void 0:n.token;Qg!==i&&(Qg=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function XR(t=mf()){const e=xu(t,"auth");if(e.isInitialized())return e.getImmediate();const n=wA(t,{popupRedirectResolver:$R,persistence:[eR,BA,t0]}),r=Ew("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=QR(s.toString());jA(n,o,()=>o(n.currentUser)),MA(n,l=>o(l))}}const i=_w("auth");return i&&TA(n,`http://${i}`),n}function YR(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}dA({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=pn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",YR().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});qR("Browser");var Xg=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Er,l0;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(T,_){function S(){}S.prototype=_.prototype,T.D=_.prototype,T.prototype=new S,T.prototype.constructor=T,T.C=function(E,R,C){for(var A=Array(arguments.length-2),ze=2;ze<arguments.length;ze++)A[ze-2]=arguments[ze];return _.prototype[R].apply(E,A)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(T,_,S){S||(S=0);var E=Array(16);if(typeof _=="string")for(var R=0;16>R;++R)E[R]=_.charCodeAt(S++)|_.charCodeAt(S++)<<8|_.charCodeAt(S++)<<16|_.charCodeAt(S++)<<24;else for(R=0;16>R;++R)E[R]=_[S++]|_[S++]<<8|_[S++]<<16|_[S++]<<24;_=T.g[0],S=T.g[1],R=T.g[2];var C=T.g[3],A=_+(C^S&(R^C))+E[0]+3614090360&4294967295;_=S+(A<<7&4294967295|A>>>25),A=C+(R^_&(S^R))+E[1]+3905402710&4294967295,C=_+(A<<12&4294967295|A>>>20),A=R+(S^C&(_^S))+E[2]+606105819&4294967295,R=C+(A<<17&4294967295|A>>>15),A=S+(_^R&(C^_))+E[3]+3250441966&4294967295,S=R+(A<<22&4294967295|A>>>10),A=_+(C^S&(R^C))+E[4]+4118548399&4294967295,_=S+(A<<7&4294967295|A>>>25),A=C+(R^_&(S^R))+E[5]+1200080426&4294967295,C=_+(A<<12&4294967295|A>>>20),A=R+(S^C&(_^S))+E[6]+2821735955&4294967295,R=C+(A<<17&4294967295|A>>>15),A=S+(_^R&(C^_))+E[7]+4249261313&4294967295,S=R+(A<<22&4294967295|A>>>10),A=_+(C^S&(R^C))+E[8]+1770035416&4294967295,_=S+(A<<7&4294967295|A>>>25),A=C+(R^_&(S^R))+E[9]+2336552879&4294967295,C=_+(A<<12&4294967295|A>>>20),A=R+(S^C&(_^S))+E[10]+4294925233&4294967295,R=C+(A<<17&4294967295|A>>>15),A=S+(_^R&(C^_))+E[11]+2304563134&4294967295,S=R+(A<<22&4294967295|A>>>10),A=_+(C^S&(R^C))+E[12]+1804603682&4294967295,_=S+(A<<7&4294967295|A>>>25),A=C+(R^_&(S^R))+E[13]+4254626195&4294967295,C=_+(A<<12&4294967295|A>>>20),A=R+(S^C&(_^S))+E[14]+2792965006&4294967295,R=C+(A<<17&4294967295|A>>>15),A=S+(_^R&(C^_))+E[15]+1236535329&4294967295,S=R+(A<<22&4294967295|A>>>10),A=_+(R^C&(S^R))+E[1]+4129170786&4294967295,_=S+(A<<5&4294967295|A>>>27),A=C+(S^R&(_^S))+E[6]+3225465664&4294967295,C=_+(A<<9&4294967295|A>>>23),A=R+(_^S&(C^_))+E[11]+643717713&4294967295,R=C+(A<<14&4294967295|A>>>18),A=S+(C^_&(R^C))+E[0]+3921069994&4294967295,S=R+(A<<20&4294967295|A>>>12),A=_+(R^C&(S^R))+E[5]+3593408605&4294967295,_=S+(A<<5&4294967295|A>>>27),A=C+(S^R&(_^S))+E[10]+38016083&4294967295,C=_+(A<<9&4294967295|A>>>23),A=R+(_^S&(C^_))+E[15]+3634488961&4294967295,R=C+(A<<14&4294967295|A>>>18),A=S+(C^_&(R^C))+E[4]+3889429448&4294967295,S=R+(A<<20&4294967295|A>>>12),A=_+(R^C&(S^R))+E[9]+568446438&4294967295,_=S+(A<<5&4294967295|A>>>27),A=C+(S^R&(_^S))+E[14]+3275163606&4294967295,C=_+(A<<9&4294967295|A>>>23),A=R+(_^S&(C^_))+E[3]+4107603335&4294967295,R=C+(A<<14&4294967295|A>>>18),A=S+(C^_&(R^C))+E[8]+1163531501&4294967295,S=R+(A<<20&4294967295|A>>>12),A=_+(R^C&(S^R))+E[13]+2850285829&4294967295,_=S+(A<<5&4294967295|A>>>27),A=C+(S^R&(_^S))+E[2]+4243563512&4294967295,C=_+(A<<9&4294967295|A>>>23),A=R+(_^S&(C^_))+E[7]+1735328473&4294967295,R=C+(A<<14&4294967295|A>>>18),A=S+(C^_&(R^C))+E[12]+2368359562&4294967295,S=R+(A<<20&4294967295|A>>>12),A=_+(S^R^C)+E[5]+4294588738&4294967295,_=S+(A<<4&4294967295|A>>>28),A=C+(_^S^R)+E[8]+2272392833&4294967295,C=_+(A<<11&4294967295|A>>>21),A=R+(C^_^S)+E[11]+1839030562&4294967295,R=C+(A<<16&4294967295|A>>>16),A=S+(R^C^_)+E[14]+4259657740&4294967295,S=R+(A<<23&4294967295|A>>>9),A=_+(S^R^C)+E[1]+2763975236&4294967295,_=S+(A<<4&4294967295|A>>>28),A=C+(_^S^R)+E[4]+1272893353&4294967295,C=_+(A<<11&4294967295|A>>>21),A=R+(C^_^S)+E[7]+4139469664&4294967295,R=C+(A<<16&4294967295|A>>>16),A=S+(R^C^_)+E[10]+3200236656&4294967295,S=R+(A<<23&4294967295|A>>>9),A=_+(S^R^C)+E[13]+681279174&4294967295,_=S+(A<<4&4294967295|A>>>28),A=C+(_^S^R)+E[0]+3936430074&4294967295,C=_+(A<<11&4294967295|A>>>21),A=R+(C^_^S)+E[3]+3572445317&4294967295,R=C+(A<<16&4294967295|A>>>16),A=S+(R^C^_)+E[6]+76029189&4294967295,S=R+(A<<23&4294967295|A>>>9),A=_+(S^R^C)+E[9]+3654602809&4294967295,_=S+(A<<4&4294967295|A>>>28),A=C+(_^S^R)+E[12]+3873151461&4294967295,C=_+(A<<11&4294967295|A>>>21),A=R+(C^_^S)+E[15]+530742520&4294967295,R=C+(A<<16&4294967295|A>>>16),A=S+(R^C^_)+E[2]+3299628645&4294967295,S=R+(A<<23&4294967295|A>>>9),A=_+(R^(S|~C))+E[0]+4096336452&4294967295,_=S+(A<<6&4294967295|A>>>26),A=C+(S^(_|~R))+E[7]+1126891415&4294967295,C=_+(A<<10&4294967295|A>>>22),A=R+(_^(C|~S))+E[14]+2878612391&4294967295,R=C+(A<<15&4294967295|A>>>17),A=S+(C^(R|~_))+E[5]+4237533241&4294967295,S=R+(A<<21&4294967295|A>>>11),A=_+(R^(S|~C))+E[12]+1700485571&4294967295,_=S+(A<<6&4294967295|A>>>26),A=C+(S^(_|~R))+E[3]+2399980690&4294967295,C=_+(A<<10&4294967295|A>>>22),A=R+(_^(C|~S))+E[10]+4293915773&4294967295,R=C+(A<<15&4294967295|A>>>17),A=S+(C^(R|~_))+E[1]+2240044497&4294967295,S=R+(A<<21&4294967295|A>>>11),A=_+(R^(S|~C))+E[8]+1873313359&4294967295,_=S+(A<<6&4294967295|A>>>26),A=C+(S^(_|~R))+E[15]+4264355552&4294967295,C=_+(A<<10&4294967295|A>>>22),A=R+(_^(C|~S))+E[6]+2734768916&4294967295,R=C+(A<<15&4294967295|A>>>17),A=S+(C^(R|~_))+E[13]+1309151649&4294967295,S=R+(A<<21&4294967295|A>>>11),A=_+(R^(S|~C))+E[4]+4149444226&4294967295,_=S+(A<<6&4294967295|A>>>26),A=C+(S^(_|~R))+E[11]+3174756917&4294967295,C=_+(A<<10&4294967295|A>>>22),A=R+(_^(C|~S))+E[2]+718787259&4294967295,R=C+(A<<15&4294967295|A>>>17),A=S+(C^(R|~_))+E[9]+3951481745&4294967295,T.g[0]=T.g[0]+_&4294967295,T.g[1]=T.g[1]+(R+(A<<21&4294967295|A>>>11))&4294967295,T.g[2]=T.g[2]+R&4294967295,T.g[3]=T.g[3]+C&4294967295}r.prototype.u=function(T,_){_===void 0&&(_=T.length);for(var S=_-this.blockSize,E=this.B,R=this.h,C=0;C<_;){if(R==0)for(;C<=S;)i(this,T,C),C+=this.blockSize;if(typeof T=="string"){for(;C<_;)if(E[R++]=T.charCodeAt(C++),R==this.blockSize){i(this,E),R=0;break}}else for(;C<_;)if(E[R++]=T[C++],R==this.blockSize){i(this,E),R=0;break}}this.h=R,this.o+=_},r.prototype.v=function(){var T=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);T[0]=128;for(var _=1;_<T.length-8;++_)T[_]=0;var S=8*this.o;for(_=T.length-8;_<T.length;++_)T[_]=S&255,S/=256;for(this.u(T),T=Array(16),_=S=0;4>_;++_)for(var E=0;32>E;E+=8)T[S++]=this.g[_]>>>E&255;return T};function s(T,_){var S=l;return Object.prototype.hasOwnProperty.call(S,T)?S[T]:S[T]=_(T)}function o(T,_){this.h=_;for(var S=[],E=!0,R=T.length-1;0<=R;R--){var C=T[R]|0;E&&C==_||(S[R]=C,E=!1)}this.g=S}var l={};function u(T){return-128<=T&&128>T?s(T,function(_){return new o([_|0],0>_?-1:0)}):new o([T|0],0>T?-1:0)}function c(T){if(isNaN(T)||!isFinite(T))return p;if(0>T)return O(c(-T));for(var _=[],S=1,E=0;T>=S;E++)_[E]=T/S|0,S*=4294967296;return new o(_,0)}function f(T,_){if(T.length==0)throw Error("number format error: empty string");if(_=_||10,2>_||36<_)throw Error("radix out of range: "+_);if(T.charAt(0)=="-")return O(f(T.substring(1),_));if(0<=T.indexOf("-"))throw Error('number format error: interior "-" character');for(var S=c(Math.pow(_,8)),E=p,R=0;R<T.length;R+=8){var C=Math.min(8,T.length-R),A=parseInt(T.substring(R,R+C),_);8>C?(C=c(Math.pow(_,C)),E=E.j(C).add(c(A))):(E=E.j(S),E=E.add(c(A)))}return E}var p=u(0),m=u(1),x=u(16777216);t=o.prototype,t.m=function(){if(N(this))return-O(this).m();for(var T=0,_=1,S=0;S<this.g.length;S++){var E=this.i(S);T+=(0<=E?E:4294967296+E)*_,_*=4294967296}return T},t.toString=function(T){if(T=T||10,2>T||36<T)throw Error("radix out of range: "+T);if(k(this))return"0";if(N(this))return"-"+O(this).toString(T);for(var _=c(Math.pow(T,6)),S=this,E="";;){var R=b(S,_).g;S=w(S,R.j(_));var C=((0<S.g.length?S.g[0]:S.h)>>>0).toString(T);if(S=R,k(S))return C+E;for(;6>C.length;)C="0"+C;E=C+E}},t.i=function(T){return 0>T?0:T<this.g.length?this.g[T]:this.h};function k(T){if(T.h!=0)return!1;for(var _=0;_<T.g.length;_++)if(T.g[_]!=0)return!1;return!0}function N(T){return T.h==-1}t.l=function(T){return T=w(this,T),N(T)?-1:k(T)?0:1};function O(T){for(var _=T.g.length,S=[],E=0;E<_;E++)S[E]=~T.g[E];return new o(S,~T.h).add(m)}t.abs=function(){return N(this)?O(this):this},t.add=function(T){for(var _=Math.max(this.g.length,T.g.length),S=[],E=0,R=0;R<=_;R++){var C=E+(this.i(R)&65535)+(T.i(R)&65535),A=(C>>>16)+(this.i(R)>>>16)+(T.i(R)>>>16);E=A>>>16,C&=65535,A&=65535,S[R]=A<<16|C}return new o(S,S[S.length-1]&-2147483648?-1:0)};function w(T,_){return T.add(O(_))}t.j=function(T){if(k(this)||k(T))return p;if(N(this))return N(T)?O(this).j(O(T)):O(O(this).j(T));if(N(T))return O(this.j(O(T)));if(0>this.l(x)&&0>T.l(x))return c(this.m()*T.m());for(var _=this.g.length+T.g.length,S=[],E=0;E<2*_;E++)S[E]=0;for(E=0;E<this.g.length;E++)for(var R=0;R<T.g.length;R++){var C=this.i(E)>>>16,A=this.i(E)&65535,ze=T.i(R)>>>16,St=T.i(R)&65535;S[2*E+2*R]+=A*St,g(S,2*E+2*R),S[2*E+2*R+1]+=C*St,g(S,2*E+2*R+1),S[2*E+2*R+1]+=A*ze,g(S,2*E+2*R+1),S[2*E+2*R+2]+=C*ze,g(S,2*E+2*R+2)}for(E=0;E<_;E++)S[E]=S[2*E+1]<<16|S[2*E];for(E=_;E<2*_;E++)S[E]=0;return new o(S,0)};function g(T,_){for(;(T[_]&65535)!=T[_];)T[_+1]+=T[_]>>>16,T[_]&=65535,_++}function I(T,_){this.g=T,this.h=_}function b(T,_){if(k(_))throw Error("division by zero");if(k(T))return new I(p,p);if(N(T))return _=b(O(T),_),new I(O(_.g),O(_.h));if(N(_))return _=b(T,O(_)),new I(O(_.g),_.h);if(30<T.g.length){if(N(T)||N(_))throw Error("slowDivide_ only works with positive integers.");for(var S=m,E=_;0>=E.l(T);)S=D(S),E=D(E);var R=M(S,1),C=M(E,1);for(E=M(E,2),S=M(S,2);!k(E);){var A=C.add(E);0>=A.l(T)&&(R=R.add(S),C=A),E=M(E,1),S=M(S,1)}return _=w(T,R.j(_)),new I(R,_)}for(R=p;0<=T.l(_);){for(S=Math.max(1,Math.floor(T.m()/_.m())),E=Math.ceil(Math.log(S)/Math.LN2),E=48>=E?1:Math.pow(2,E-48),C=c(S),A=C.j(_);N(A)||0<A.l(T);)S-=E,C=c(S),A=C.j(_);k(C)&&(C=m),R=R.add(C),T=w(T,A)}return new I(R,T)}t.A=function(T){return b(this,T).h},t.and=function(T){for(var _=Math.max(this.g.length,T.g.length),S=[],E=0;E<_;E++)S[E]=this.i(E)&T.i(E);return new o(S,this.h&T.h)},t.or=function(T){for(var _=Math.max(this.g.length,T.g.length),S=[],E=0;E<_;E++)S[E]=this.i(E)|T.i(E);return new o(S,this.h|T.h)},t.xor=function(T){for(var _=Math.max(this.g.length,T.g.length),S=[],E=0;E<_;E++)S[E]=this.i(E)^T.i(E);return new o(S,this.h^T.h)};function D(T){for(var _=T.g.length+1,S=[],E=0;E<_;E++)S[E]=T.i(E)<<1|T.i(E-1)>>>31;return new o(S,T.h)}function M(T,_){var S=_>>5;_%=32;for(var E=T.g.length-S,R=[],C=0;C<E;C++)R[C]=0<_?T.i(C+S)>>>_|T.i(C+S+1)<<32-_:T.i(C+S);return new o(R,T.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,l0=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=f,Er=o}).apply(typeof Xg<"u"?Xg:typeof self<"u"?self:typeof window<"u"?window:{});var $a=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var u0,Ys,c0,dl,Jh,h0,d0,f0;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,h,d){return a==Array.prototype||a==Object.prototype||(a[h]=d.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof $a=="object"&&$a];for(var h=0;h<a.length;++h){var d=a[h];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function i(a,h){if(h)e:{var d=r;a=a.split(".");for(var y=0;y<a.length-1;y++){var P=a[y];if(!(P in d))break e;d=d[P]}a=a[a.length-1],y=d[a],h=h(y),h!=y&&h!=null&&e(d,a,{configurable:!0,writable:!0,value:h})}}function s(a,h){a instanceof String&&(a+="");var d=0,y=!1,P={next:function(){if(!y&&d<a.length){var V=d++;return{value:h(V,a[V]),done:!1}}return y=!0,{done:!0,value:void 0}}};return P[Symbol.iterator]=function(){return P},P}i("Array.prototype.values",function(a){return a||function(){return s(this,function(h,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function u(a){var h=typeof a;return h=h!="object"?h:a?Array.isArray(a)?"array":h:"null",h=="array"||h=="object"&&typeof a.length=="number"}function c(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function f(a,h,d){return a.call.apply(a.bind,arguments)}function p(a,h,d){if(!a)throw Error();if(2<arguments.length){var y=Array.prototype.slice.call(arguments,2);return function(){var P=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(P,y),a.apply(h,P)}}return function(){return a.apply(h,arguments)}}function m(a,h,d){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:p,m.apply(null,arguments)}function x(a,h){var d=Array.prototype.slice.call(arguments,1);return function(){var y=d.slice();return y.push.apply(y,arguments),a.apply(this,y)}}function k(a,h){function d(){}d.prototype=h.prototype,a.aa=h.prototype,a.prototype=new d,a.prototype.constructor=a,a.Qb=function(y,P,V){for(var z=Array(arguments.length-2),fe=2;fe<arguments.length;fe++)z[fe-2]=arguments[fe];return h.prototype[P].apply(y,z)}}function N(a){const h=a.length;if(0<h){const d=Array(h);for(let y=0;y<h;y++)d[y]=a[y];return d}return[]}function O(a,h){for(let d=1;d<arguments.length;d++){const y=arguments[d];if(u(y)){const P=a.length||0,V=y.length||0;a.length=P+V;for(let z=0;z<V;z++)a[P+z]=y[z]}else a.push(y)}}class w{constructor(h,d){this.i=h,this.j=d,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function g(a){return/^[\s\xa0]*$/.test(a)}function I(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function b(a){return b[" "](a),a}b[" "]=function(){};var D=I().indexOf("Gecko")!=-1&&!(I().toLowerCase().indexOf("webkit")!=-1&&I().indexOf("Edge")==-1)&&!(I().indexOf("Trident")!=-1||I().indexOf("MSIE")!=-1)&&I().indexOf("Edge")==-1;function M(a,h,d){for(const y in a)h.call(d,a[y],y,a)}function T(a,h){for(const d in a)h.call(void 0,a[d],d,a)}function _(a){const h={};for(const d in a)h[d]=a[d];return h}const S="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function E(a,h){let d,y;for(let P=1;P<arguments.length;P++){y=arguments[P];for(d in y)a[d]=y[d];for(let V=0;V<S.length;V++)d=S[V],Object.prototype.hasOwnProperty.call(y,d)&&(a[d]=y[d])}}function R(a){var h=1;a=a.split(":");const d=[];for(;0<h&&a.length;)d.push(a.shift()),h--;return a.length&&d.push(a.join(":")),d}function C(a){l.setTimeout(()=>{throw a},0)}function A(){var a=X;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class ze{constructor(){this.h=this.g=null}add(h,d){const y=St.get();y.set(h,d),this.h?this.h.next=y:this.g=y,this.h=y}}var St=new w(()=>new jr,a=>a.reset());class jr{constructor(){this.next=this.g=this.h=null}set(h,d){this.h=h,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let Ot,B=!1,X=new ze,Z=()=>{const a=l.Promise.resolve(void 0);Ot=()=>{a.then(me)}};var me=()=>{for(var a;a=A();){try{a.h.call(a.g)}catch(d){C(d)}var h=St;h.j(a),100>h.h&&(h.h++,a.next=h.g,h.g=a)}B=!1};function le(){this.s=this.s,this.C=this.C}le.prototype.s=!1,le.prototype.ma=function(){this.s||(this.s=!0,this.N())},le.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function we(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}we.prototype.h=function(){this.defaultPrevented=!0};var Wt=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};l.addEventListener("test",d,h),l.removeEventListener("test",d,h)}catch{}return a}();function qt(a,h){if(we.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var d=this.type=a.type,y=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget){if(D){e:{try{b(h.nodeName);var P=!0;break e}catch{}P=!1}P||(h=null)}}else d=="mouseover"?h=a.fromElement:d=="mouseout"&&(h=a.toElement);this.relatedTarget=h,y?(this.clientX=y.clientX!==void 0?y.clientX:y.pageX,this.clientY=y.clientY!==void 0?y.clientY:y.pageY,this.screenX=y.screenX||0,this.screenY=y.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:Vt[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&qt.aa.h.call(this)}}k(qt,we);var Vt={2:"touch",3:"pen",4:"mouse"};qt.prototype.h=function(){qt.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var Lt="closure_listenable_"+(1e6*Math.random()|0),W=0;function ue(a,h,d,y,P){this.listener=a,this.proxy=null,this.src=h,this.type=d,this.capture=!!y,this.ha=P,this.key=++W,this.da=this.fa=!1}function ce(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function ne(a){this.src=a,this.g={},this.h=0}ne.prototype.add=function(a,h,d,y,P){var V=a.toString();a=this.g[V],a||(a=this.g[V]=[],this.h++);var z=In(a,h,y,P);return-1<z?(h=a[z],d||(h.fa=!1)):(h=new ue(h,this.src,V,!!y,P),h.fa=d,a.push(h)),h};function sn(a,h){var d=h.type;if(d in a.g){var y=a.g[d],P=Array.prototype.indexOf.call(y,h,void 0),V;(V=0<=P)&&Array.prototype.splice.call(y,P,1),V&&(ce(h),a.g[d].length==0&&(delete a.g[d],a.h--))}}function In(a,h,d,y){for(var P=0;P<a.length;++P){var V=a[P];if(!V.da&&V.listener==h&&V.capture==!!d&&V.ha==y)return P}return-1}var ws="closure_lm_"+(1e6*Math.random()|0),Es={};function Ts(a,h,d,y,P){if(Array.isArray(h)){for(var V=0;V<h.length;V++)Ts(a,h[V],d,y,P);return null}return d=fp(d),a&&a[Lt]?a.K(h,d,c(y)?!!y.capture:!1,P):ZE(a,h,d,!1,y,P)}function ZE(a,h,d,y,P,V){if(!h)throw Error("Invalid event type");var z=c(P)?!!P.capture:!!P,fe=Bu(a);if(fe||(a[ws]=fe=new ne(a)),d=fe.add(h,d,y,z,V),d.proxy)return d;if(y=eT(),d.proxy=y,y.src=a,y.listener=d,a.addEventListener)Wt||(P=z),P===void 0&&(P=!1),a.addEventListener(h.toString(),y,P);else if(a.attachEvent)a.attachEvent(dp(h.toString()),y);else if(a.addListener&&a.removeListener)a.addListener(y);else throw Error("addEventListener and attachEvent are unavailable.");return d}function eT(){function a(d){return h.call(a.src,a.listener,d)}const h=tT;return a}function hp(a,h,d,y,P){if(Array.isArray(h))for(var V=0;V<h.length;V++)hp(a,h[V],d,y,P);else y=c(y)?!!y.capture:!!y,d=fp(d),a&&a[Lt]?(a=a.i,h=String(h).toString(),h in a.g&&(V=a.g[h],d=In(V,d,y,P),-1<d&&(ce(V[d]),Array.prototype.splice.call(V,d,1),V.length==0&&(delete a.g[h],a.h--)))):a&&(a=Bu(a))&&(h=a.g[h.toString()],a=-1,h&&(a=In(h,d,y,P)),(d=-1<a?h[a]:null)&&zu(d))}function zu(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[Lt])sn(h.i,a);else{var d=a.type,y=a.proxy;h.removeEventListener?h.removeEventListener(d,y,a.capture):h.detachEvent?h.detachEvent(dp(d),y):h.addListener&&h.removeListener&&h.removeListener(y),(d=Bu(h))?(sn(d,a),d.h==0&&(d.src=null,h[ws]=null)):ce(a)}}}function dp(a){return a in Es?Es[a]:Es[a]="on"+a}function tT(a,h){if(a.da)a=!0;else{h=new qt(h,this);var d=a.listener,y=a.ha||a.src;a.fa&&zu(a),a=d.call(y,h)}return a}function Bu(a){return a=a[ws],a instanceof ne?a:null}var $u="__closure_events_fn_"+(1e9*Math.random()>>>0);function fp(a){return typeof a=="function"?a:(a[$u]||(a[$u]=function(h){return a.handleEvent(h)}),a[$u])}function et(){le.call(this),this.i=new ne(this),this.M=this,this.F=null}k(et,le),et.prototype[Lt]=!0,et.prototype.removeEventListener=function(a,h,d,y){hp(this,a,h,d,y)};function ht(a,h){var d,y=a.F;if(y)for(d=[];y;y=y.F)d.push(y);if(a=a.M,y=h.type||h,typeof h=="string")h=new we(h,a);else if(h instanceof we)h.target=h.target||a;else{var P=h;h=new we(y,a),E(h,P)}if(P=!0,d)for(var V=d.length-1;0<=V;V--){var z=h.g=d[V];P=ua(z,y,!0,h)&&P}if(z=h.g=a,P=ua(z,y,!0,h)&&P,P=ua(z,y,!1,h)&&P,d)for(V=0;V<d.length;V++)z=h.g=d[V],P=ua(z,y,!1,h)&&P}et.prototype.N=function(){if(et.aa.N.call(this),this.i){var a=this.i,h;for(h in a.g){for(var d=a.g[h],y=0;y<d.length;y++)ce(d[y]);delete a.g[h],a.h--}}this.F=null},et.prototype.K=function(a,h,d,y){return this.i.add(String(a),h,!1,d,y)},et.prototype.L=function(a,h,d,y){return this.i.add(String(a),h,!0,d,y)};function ua(a,h,d,y){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();for(var P=!0,V=0;V<h.length;++V){var z=h[V];if(z&&!z.da&&z.capture==d){var fe=z.listener,Ke=z.ha||z.src;z.fa&&sn(a.i,z),P=fe.call(Ke,y)!==!1&&P}}return P&&!y.defaultPrevented}function pp(a,h,d){if(typeof a=="function")d&&(a=m(a,d));else if(a&&typeof a.handleEvent=="function")a=m(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:l.setTimeout(a,h||0)}function mp(a){a.g=pp(()=>{a.g=null,a.i&&(a.i=!1,mp(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class nT extends le{constructor(h,d){super(),this.m=h,this.l=d,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:mp(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Is(a){le.call(this),this.h=a,this.g={}}k(Is,le);var gp=[];function yp(a){M(a.g,function(h,d){this.g.hasOwnProperty(d)&&zu(h)},a),a.g={}}Is.prototype.N=function(){Is.aa.N.call(this),yp(this)},Is.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Hu=l.JSON.stringify,rT=l.JSON.parse,iT=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function Wu(){}Wu.prototype.h=null;function _p(a){return a.h||(a.h=a.i())}function vp(){}var Ss={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function qu(){we.call(this,"d")}k(qu,we);function Ku(){we.call(this,"c")}k(Ku,we);var Ur={},wp=null;function ca(){return wp=wp||new et}Ur.La="serverreachability";function Ep(a){we.call(this,Ur.La,a)}k(Ep,we);function xs(a){const h=ca();ht(h,new Ep(h))}Ur.STAT_EVENT="statevent";function Tp(a,h){we.call(this,Ur.STAT_EVENT,a),this.stat=h}k(Tp,we);function dt(a){const h=ca();ht(h,new Tp(h,a))}Ur.Ma="timingevent";function Ip(a,h){we.call(this,Ur.Ma,a),this.size=h}k(Ip,we);function As(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},h)}function Rs(){this.g=!0}Rs.prototype.xa=function(){this.g=!1};function sT(a,h,d,y,P,V){a.info(function(){if(a.g)if(V)for(var z="",fe=V.split("&"),Ke=0;Ke<fe.length;Ke++){var ae=fe[Ke].split("=");if(1<ae.length){var tt=ae[0];ae=ae[1];var nt=tt.split("_");z=2<=nt.length&&nt[1]=="type"?z+(tt+"="+ae+"&"):z+(tt+"=redacted&")}}else z=null;else z=V;return"XMLHTTP REQ ("+y+") [attempt "+P+"]: "+h+`
`+d+`
`+z})}function oT(a,h,d,y,P,V,z){a.info(function(){return"XMLHTTP RESP ("+y+") [ attempt "+P+"]: "+h+`
`+d+`
`+V+" "+z})}function wi(a,h,d,y){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+lT(a,d)+(y?" "+y:"")})}function aT(a,h){a.info(function(){return"TIMEOUT: "+h})}Rs.prototype.info=function(){};function lT(a,h){if(!a.g)return h;if(!h)return null;try{var d=JSON.parse(h);if(d){for(a=0;a<d.length;a++)if(Array.isArray(d[a])){var y=d[a];if(!(2>y.length)){var P=y[1];if(Array.isArray(P)&&!(1>P.length)){var V=P[0];if(V!="noop"&&V!="stop"&&V!="close")for(var z=1;z<P.length;z++)P[z]=""}}}}return Hu(d)}catch{return h}}var ha={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Sp={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Gu;function da(){}k(da,Wu),da.prototype.g=function(){return new XMLHttpRequest},da.prototype.i=function(){return{}},Gu=new da;function Kn(a,h,d,y){this.j=a,this.i=h,this.l=d,this.R=y||1,this.U=new Is(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new xp}function xp(){this.i=null,this.g="",this.h=!1}var Ap={},Qu={};function Xu(a,h,d){a.L=1,a.v=ga(Sn(h)),a.m=d,a.P=!0,Rp(a,null)}function Rp(a,h){a.F=Date.now(),fa(a),a.A=Sn(a.v);var d=a.A,y=a.R;Array.isArray(y)||(y=[String(y)]),zp(d.i,"t",y),a.C=0,d=a.j.J,a.h=new xp,a.g=sm(a.j,d?h:null,!a.m),0<a.O&&(a.M=new nT(m(a.Y,a,a.g),a.O)),h=a.U,d=a.g,y=a.ca;var P="readystatechange";Array.isArray(P)||(P&&(gp[0]=P.toString()),P=gp);for(var V=0;V<P.length;V++){var z=Ts(d,P[V],y||h.handleEvent,!1,h.h||h);if(!z)break;h.g[z.key]=z}h=a.H?_(a.H):{},a.m?(a.u||(a.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,h)):(a.u="GET",a.g.ea(a.A,a.u,null,h)),xs(),sT(a.i,a.u,a.A,a.l,a.R,a.m)}Kn.prototype.ca=function(a){a=a.target;const h=this.M;h&&xn(a)==3?h.j():this.Y(a)},Kn.prototype.Y=function(a){try{if(a==this.g)e:{const nt=xn(this.g);var h=this.g.Ba();const Ii=this.g.Z();if(!(3>nt)&&(nt!=3||this.g&&(this.h.h||this.g.oa()||Gp(this.g)))){this.J||nt!=4||h==7||(h==8||0>=Ii?xs(3):xs(2)),Yu(this);var d=this.g.Z();this.X=d;t:if(kp(this)){var y=Gp(this.g);a="";var P=y.length,V=xn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Fr(this),ks(this);var z="";break t}this.h.i=new l.TextDecoder}for(h=0;h<P;h++)this.h.h=!0,a+=this.h.i.decode(y[h],{stream:!(V&&h==P-1)});y.length=0,this.h.g+=a,this.C=0,z=this.h.g}else z=this.g.oa();if(this.o=d==200,oT(this.i,this.u,this.A,this.l,this.R,nt,d),this.o){if(this.T&&!this.K){t:{if(this.g){var fe,Ke=this.g;if((fe=Ke.g?Ke.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!g(fe)){var ae=fe;break t}}ae=null}if(d=ae)wi(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ju(this,d);else{this.o=!1,this.s=3,dt(12),Fr(this),ks(this);break e}}if(this.P){d=!0;let Kt;for(;!this.J&&this.C<z.length;)if(Kt=uT(this,z),Kt==Qu){nt==4&&(this.s=4,dt(14),d=!1),wi(this.i,this.l,null,"[Incomplete Response]");break}else if(Kt==Ap){this.s=4,dt(15),wi(this.i,this.l,z,"[Invalid Chunk]"),d=!1;break}else wi(this.i,this.l,Kt,null),Ju(this,Kt);if(kp(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),nt!=4||z.length!=0||this.h.h||(this.s=1,dt(16),d=!1),this.o=this.o&&d,!d)wi(this.i,this.l,z,"[Invalid Chunked Response]"),Fr(this),ks(this);else if(0<z.length&&!this.W){this.W=!0;var tt=this.j;tt.g==this&&tt.ba&&!tt.M&&(tt.j.info("Great, no buffering proxy detected. Bytes received: "+z.length),ic(tt),tt.M=!0,dt(11))}}else wi(this.i,this.l,z,null),Ju(this,z);nt==4&&Fr(this),this.o&&!this.J&&(nt==4?tm(this.j,this):(this.o=!1,fa(this)))}else AT(this.g),d==400&&0<z.indexOf("Unknown SID")?(this.s=3,dt(12)):(this.s=0,dt(13)),Fr(this),ks(this)}}}catch{}finally{}};function kp(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function uT(a,h){var d=a.C,y=h.indexOf(`
`,d);return y==-1?Qu:(d=Number(h.substring(d,y)),isNaN(d)?Ap:(y+=1,y+d>h.length?Qu:(h=h.slice(y,y+d),a.C=y+d,h)))}Kn.prototype.cancel=function(){this.J=!0,Fr(this)};function fa(a){a.S=Date.now()+a.I,Cp(a,a.I)}function Cp(a,h){if(a.B!=null)throw Error("WatchDog timer not null");a.B=As(m(a.ba,a),h)}function Yu(a){a.B&&(l.clearTimeout(a.B),a.B=null)}Kn.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(aT(this.i,this.A),this.L!=2&&(xs(),dt(17)),Fr(this),this.s=2,ks(this)):Cp(this,this.S-a)};function ks(a){a.j.G==0||a.J||tm(a.j,a)}function Fr(a){Yu(a);var h=a.M;h&&typeof h.ma=="function"&&h.ma(),a.M=null,yp(a.U),a.g&&(h=a.g,a.g=null,h.abort(),h.ma())}function Ju(a,h){try{var d=a.j;if(d.G!=0&&(d.g==a||Zu(d.h,a))){if(!a.K&&Zu(d.h,a)&&d.G==3){try{var y=d.Da.g.parse(h)}catch{y=null}if(Array.isArray(y)&&y.length==3){var P=y;if(P[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<a.F)Ta(d),wa(d);else break e;rc(d),dt(18)}}else d.za=P[1],0<d.za-d.T&&37500>P[2]&&d.F&&d.v==0&&!d.C&&(d.C=As(m(d.Za,d),6e3));if(1>=bp(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else Br(d,11)}else if((a.K||d.g==a)&&Ta(d),!g(h))for(P=d.Da.g.parse(h),h=0;h<P.length;h++){let ae=P[h];if(d.T=ae[0],ae=ae[1],d.G==2)if(ae[0]=="c"){d.K=ae[1],d.ia=ae[2];const tt=ae[3];tt!=null&&(d.la=tt,d.j.info("VER="+d.la));const nt=ae[4];nt!=null&&(d.Aa=nt,d.j.info("SVER="+d.Aa));const Ii=ae[5];Ii!=null&&typeof Ii=="number"&&0<Ii&&(y=1.5*Ii,d.L=y,d.j.info("backChannelRequestTimeoutMs_="+y)),y=d;const Kt=a.g;if(Kt){const Sa=Kt.g?Kt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Sa){var V=y.h;V.g||Sa.indexOf("spdy")==-1&&Sa.indexOf("quic")==-1&&Sa.indexOf("h2")==-1||(V.j=V.l,V.g=new Set,V.h&&(ec(V,V.h),V.h=null))}if(y.D){const sc=Kt.g?Kt.g.getResponseHeader("X-HTTP-Session-Id"):null;sc&&(y.ya=sc,ge(y.I,y.D,sc))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-a.F,d.j.info("Handshake RTT: "+d.R+"ms")),y=d;var z=a;if(y.qa=im(y,y.J?y.ia:null,y.W),z.K){Dp(y.h,z);var fe=z,Ke=y.L;Ke&&(fe.I=Ke),fe.B&&(Yu(fe),fa(fe)),y.g=z}else Zp(y);0<d.i.length&&Ea(d)}else ae[0]!="stop"&&ae[0]!="close"||Br(d,7);else d.G==3&&(ae[0]=="stop"||ae[0]=="close"?ae[0]=="stop"?Br(d,7):nc(d):ae[0]!="noop"&&d.l&&d.l.ta(ae),d.v=0)}}xs(4)}catch{}}var cT=class{constructor(a,h){this.g=a,this.map=h}};function Pp(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Np(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function bp(a){return a.h?1:a.g?a.g.size:0}function Zu(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function ec(a,h){a.g?a.g.add(h):a.h=h}function Dp(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}Pp.prototype.cancel=function(){if(this.i=Op(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Op(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const d of a.g.values())h=h.concat(d.D);return h}return N(a.i)}function hT(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(u(a)){for(var h=[],d=a.length,y=0;y<d;y++)h.push(a[y]);return h}h=[],d=0;for(y in a)h[d++]=a[y];return h}function dT(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(u(a)||typeof a=="string"){var h=[];a=a.length;for(var d=0;d<a;d++)h.push(d);return h}h=[],d=0;for(const y in a)h[d++]=y;return h}}}function Vp(a,h){if(a.forEach&&typeof a.forEach=="function")a.forEach(h,void 0);else if(u(a)||typeof a=="string")Array.prototype.forEach.call(a,h,void 0);else for(var d=dT(a),y=hT(a),P=y.length,V=0;V<P;V++)h.call(void 0,y[V],d&&d[V],a)}var Lp=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function fT(a,h){if(a){a=a.split("&");for(var d=0;d<a.length;d++){var y=a[d].indexOf("="),P=null;if(0<=y){var V=a[d].substring(0,y);P=a[d].substring(y+1)}else V=a[d];h(V,P?decodeURIComponent(P.replace(/\+/g," ")):"")}}}function zr(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof zr){this.h=a.h,pa(this,a.j),this.o=a.o,this.g=a.g,ma(this,a.s),this.l=a.l;var h=a.i,d=new Ns;d.i=h.i,h.g&&(d.g=new Map(h.g),d.h=h.h),Mp(this,d),this.m=a.m}else a&&(h=String(a).match(Lp))?(this.h=!1,pa(this,h[1]||"",!0),this.o=Cs(h[2]||""),this.g=Cs(h[3]||"",!0),ma(this,h[4]),this.l=Cs(h[5]||"",!0),Mp(this,h[6]||"",!0),this.m=Cs(h[7]||"")):(this.h=!1,this.i=new Ns(null,this.h))}zr.prototype.toString=function(){var a=[],h=this.j;h&&a.push(Ps(h,jp,!0),":");var d=this.g;return(d||h=="file")&&(a.push("//"),(h=this.o)&&a.push(Ps(h,jp,!0),"@"),a.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&a.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(Ps(d,d.charAt(0)=="/"?gT:mT,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",Ps(d,_T)),a.join("")};function Sn(a){return new zr(a)}function pa(a,h,d){a.j=d?Cs(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function ma(a,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);a.s=h}else a.s=null}function Mp(a,h,d){h instanceof Ns?(a.i=h,vT(a.i,a.h)):(d||(h=Ps(h,yT)),a.i=new Ns(h,a.h))}function ge(a,h,d){a.i.set(h,d)}function ga(a){return ge(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function Cs(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Ps(a,h,d){return typeof a=="string"?(a=encodeURI(a).replace(h,pT),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function pT(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var jp=/[#\/\?@]/g,mT=/[#\?:]/g,gT=/[#\?]/g,yT=/[#\?@]/g,_T=/#/g;function Ns(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function Gn(a){a.g||(a.g=new Map,a.h=0,a.i&&fT(a.i,function(h,d){a.add(decodeURIComponent(h.replace(/\+/g," ")),d)}))}t=Ns.prototype,t.add=function(a,h){Gn(this),this.i=null,a=Ei(this,a);var d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(h),this.h+=1,this};function Up(a,h){Gn(a),h=Ei(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function Fp(a,h){return Gn(a),h=Ei(a,h),a.g.has(h)}t.forEach=function(a,h){Gn(this),this.g.forEach(function(d,y){d.forEach(function(P){a.call(h,P,y,this)},this)},this)},t.na=function(){Gn(this);const a=Array.from(this.g.values()),h=Array.from(this.g.keys()),d=[];for(let y=0;y<h.length;y++){const P=a[y];for(let V=0;V<P.length;V++)d.push(h[y])}return d},t.V=function(a){Gn(this);let h=[];if(typeof a=="string")Fp(this,a)&&(h=h.concat(this.g.get(Ei(this,a))));else{a=Array.from(this.g.values());for(let d=0;d<a.length;d++)h=h.concat(a[d])}return h},t.set=function(a,h){return Gn(this),this.i=null,a=Ei(this,a),Fp(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=this.V(a),0<a.length?String(a[0]):h):h};function zp(a,h,d){Up(a,h),0<d.length&&(a.i=null,a.g.set(Ei(a,h),N(d)),a.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(var d=0;d<h.length;d++){var y=h[d];const V=encodeURIComponent(String(y)),z=this.V(y);for(y=0;y<z.length;y++){var P=V;z[y]!==""&&(P+="="+encodeURIComponent(String(z[y]))),a.push(P)}}return this.i=a.join("&")};function Ei(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function vT(a,h){h&&!a.j&&(Gn(a),a.i=null,a.g.forEach(function(d,y){var P=y.toLowerCase();y!=P&&(Up(this,y),zp(this,P,d))},a)),a.j=h}function wT(a,h){const d=new Rs;if(l.Image){const y=new Image;y.onload=x(Qn,d,"TestLoadImage: loaded",!0,h,y),y.onerror=x(Qn,d,"TestLoadImage: error",!1,h,y),y.onabort=x(Qn,d,"TestLoadImage: abort",!1,h,y),y.ontimeout=x(Qn,d,"TestLoadImage: timeout",!1,h,y),l.setTimeout(function(){y.ontimeout&&y.ontimeout()},1e4),y.src=a}else h(!1)}function ET(a,h){const d=new Rs,y=new AbortController,P=setTimeout(()=>{y.abort(),Qn(d,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:y.signal}).then(V=>{clearTimeout(P),V.ok?Qn(d,"TestPingServer: ok",!0,h):Qn(d,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(P),Qn(d,"TestPingServer: error",!1,h)})}function Qn(a,h,d,y,P){try{P&&(P.onload=null,P.onerror=null,P.onabort=null,P.ontimeout=null),y(d)}catch{}}function TT(){this.g=new iT}function IT(a,h,d){const y=d||"";try{Vp(a,function(P,V){let z=P;c(P)&&(z=Hu(P)),h.push(y+V+"="+encodeURIComponent(z))})}catch(P){throw h.push(y+"type="+encodeURIComponent("_badmap")),P}}function ya(a){this.l=a.Ub||null,this.j=a.eb||!1}k(ya,Wu),ya.prototype.g=function(){return new _a(this.l,this.j)},ya.prototype.i=function(a){return function(){return a}}({});function _a(a,h){et.call(this),this.D=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}k(_a,et),t=_a.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=h,this.readyState=1,Ds(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(h.body=a),(this.D||l).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,bs(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Ds(this)),this.g&&(this.readyState=3,Ds(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Bp(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function Bp(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?bs(this):Ds(this),this.readyState==3&&Bp(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,bs(this))},t.Qa=function(a){this.g&&(this.response=a,bs(this))},t.ga=function(){this.g&&bs(this)};function bs(a){a.readyState=4,a.l=null,a.j=null,a.v=null,Ds(a)}t.setRequestHeader=function(a,h){this.u.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var d=h.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=h.next();return a.join(`\r
`)};function Ds(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(_a.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function $p(a){let h="";return M(a,function(d,y){h+=y,h+=":",h+=d,h+=`\r
`}),h}function tc(a,h,d){e:{for(y in d){var y=!1;break e}y=!0}y||(d=$p(d),typeof a=="string"?d!=null&&encodeURIComponent(String(d)):ge(a,h,d))}function ke(a){et.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}k(ke,et);var ST=/^https?$/i,xT=["POST","PUT"];t=ke.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,h,d,y){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Gu.g(),this.v=this.o?_p(this.o):_p(Gu),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(V){Hp(this,V);return}if(a=d||"",d=new Map(this.headers),y)if(Object.getPrototypeOf(y)===Object.prototype)for(var P in y)d.set(P,y[P]);else if(typeof y.keys=="function"&&typeof y.get=="function")for(const V of y.keys())d.set(V,y.get(V));else throw Error("Unknown input type for opt_headers: "+String(y));y=Array.from(d.keys()).find(V=>V.toLowerCase()=="content-type"),P=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(xT,h,void 0))||y||P||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[V,z]of d)this.g.setRequestHeader(V,z);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Kp(this),this.u=!0,this.g.send(a),this.u=!1}catch(V){Hp(this,V)}};function Hp(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.m=5,Wp(a),va(a)}function Wp(a){a.A||(a.A=!0,ht(a,"complete"),ht(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,ht(this,"complete"),ht(this,"abort"),va(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),va(this,!0)),ke.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?qp(this):this.bb())},t.bb=function(){qp(this)};function qp(a){if(a.h&&typeof o<"u"&&(!a.v[1]||xn(a)!=4||a.Z()!=2)){if(a.u&&xn(a)==4)pp(a.Ea,0,a);else if(ht(a,"readystatechange"),xn(a)==4){a.h=!1;try{const z=a.Z();e:switch(z){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var d;if(!(d=h)){var y;if(y=z===0){var P=String(a.D).match(Lp)[1]||null;!P&&l.self&&l.self.location&&(P=l.self.location.protocol.slice(0,-1)),y=!ST.test(P?P.toLowerCase():"")}d=y}if(d)ht(a,"complete"),ht(a,"success");else{a.m=6;try{var V=2<xn(a)?a.g.statusText:""}catch{V=""}a.l=V+" ["+a.Z()+"]",Wp(a)}}finally{va(a)}}}}function va(a,h){if(a.g){Kp(a);const d=a.g,y=a.v[0]?()=>{}:null;a.g=null,a.v=null,h||ht(a,"ready");try{d.onreadystatechange=y}catch{}}}function Kp(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function xn(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<xn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),rT(h)}};function Gp(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function AT(a){const h={};a=(a.g&&2<=xn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let y=0;y<a.length;y++){if(g(a[y]))continue;var d=R(a[y]);const P=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const V=h[P]||[];h[P]=V,V.push(d)}T(h,function(y){return y.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Os(a,h,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||h}function Qp(a){this.Aa=0,this.i=[],this.j=new Rs,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Os("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Os("baseRetryDelayMs",5e3,a),this.cb=Os("retryDelaySeedMs",1e4,a),this.Wa=Os("forwardChannelMaxRetries",2,a),this.wa=Os("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Pp(a&&a.concurrentRequestLimit),this.Da=new TT,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Qp.prototype,t.la=8,t.G=1,t.connect=function(a,h,d,y){dt(0),this.W=a,this.H=h||{},d&&y!==void 0&&(this.H.OSID=d,this.H.OAID=y),this.F=this.X,this.I=im(this,null,this.W),Ea(this)};function nc(a){if(Xp(a),a.G==3){var h=a.U++,d=Sn(a.I);if(ge(d,"SID",a.K),ge(d,"RID",h),ge(d,"TYPE","terminate"),Vs(a,d),h=new Kn(a,a.j,h),h.L=2,h.v=ga(Sn(d)),d=!1,l.navigator&&l.navigator.sendBeacon)try{d=l.navigator.sendBeacon(h.v.toString(),"")}catch{}!d&&l.Image&&(new Image().src=h.v,d=!0),d||(h.g=sm(h.j,null),h.g.ea(h.v)),h.F=Date.now(),fa(h)}rm(a)}function wa(a){a.g&&(ic(a),a.g.cancel(),a.g=null)}function Xp(a){wa(a),a.u&&(l.clearTimeout(a.u),a.u=null),Ta(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function Ea(a){if(!Np(a.h)&&!a.s){a.s=!0;var h=a.Ga;Ot||Z(),B||(Ot(),B=!0),X.add(h,a),a.B=0}}function RT(a,h){return bp(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=h.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=As(m(a.Ga,a,h),nm(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const P=new Kn(this,this.j,a);let V=this.o;if(this.S&&(V?(V=_(V),E(V,this.S)):V=this.S),this.m!==null||this.O||(P.H=V,V=null),this.P)e:{for(var h=0,d=0;d<this.i.length;d++){t:{var y=this.i[d];if("__data__"in y.map&&(y=y.map.__data__,typeof y=="string")){y=y.length;break t}y=void 0}if(y===void 0)break;if(h+=y,4096<h){h=d;break e}if(h===4096||d===this.i.length-1){h=d+1;break e}}h=1e3}else h=1e3;h=Jp(this,P,h),d=Sn(this.I),ge(d,"RID",a),ge(d,"CVER",22),this.D&&ge(d,"X-HTTP-Session-Id",this.D),Vs(this,d),V&&(this.O?h="headers="+encodeURIComponent(String($p(V)))+"&"+h:this.m&&tc(d,this.m,V)),ec(this.h,P),this.Ua&&ge(d,"TYPE","init"),this.P?(ge(d,"$req",h),ge(d,"SID","null"),P.T=!0,Xu(P,d,null)):Xu(P,d,h),this.G=2}}else this.G==3&&(a?Yp(this,a):this.i.length==0||Np(this.h)||Yp(this))};function Yp(a,h){var d;h?d=h.l:d=a.U++;const y=Sn(a.I);ge(y,"SID",a.K),ge(y,"RID",d),ge(y,"AID",a.T),Vs(a,y),a.m&&a.o&&tc(y,a.m,a.o),d=new Kn(a,a.j,d,a.B+1),a.m===null&&(d.H=a.o),h&&(a.i=h.D.concat(a.i)),h=Jp(a,d,1e3),d.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),ec(a.h,d),Xu(d,y,h)}function Vs(a,h){a.H&&M(a.H,function(d,y){ge(h,y,d)}),a.l&&Vp({},function(d,y){ge(h,y,d)})}function Jp(a,h,d){d=Math.min(a.i.length,d);var y=a.l?m(a.l.Na,a.l,a):null;e:{var P=a.i;let V=-1;for(;;){const z=["count="+d];V==-1?0<d?(V=P[0].g,z.push("ofs="+V)):V=0:z.push("ofs="+V);let fe=!0;for(let Ke=0;Ke<d;Ke++){let ae=P[Ke].g;const tt=P[Ke].map;if(ae-=V,0>ae)V=Math.max(0,P[Ke].g-100),fe=!1;else try{IT(tt,z,"req"+ae+"_")}catch{y&&y(tt)}}if(fe){y=z.join("&");break e}}}return a=a.i.splice(0,d),h.D=a,y}function Zp(a){if(!a.g&&!a.u){a.Y=1;var h=a.Fa;Ot||Z(),B||(Ot(),B=!0),X.add(h,a),a.v=0}}function rc(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=As(m(a.Fa,a),nm(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,em(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=As(m(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,dt(10),wa(this),em(this))};function ic(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function em(a){a.g=new Kn(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var h=Sn(a.qa);ge(h,"RID","rpc"),ge(h,"SID",a.K),ge(h,"AID",a.T),ge(h,"CI",a.F?"0":"1"),!a.F&&a.ja&&ge(h,"TO",a.ja),ge(h,"TYPE","xmlhttp"),Vs(a,h),a.m&&a.o&&tc(h,a.m,a.o),a.L&&(a.g.I=a.L);var d=a.g;a=a.ia,d.L=1,d.v=ga(Sn(h)),d.m=null,d.P=!0,Rp(d,a)}t.Za=function(){this.C!=null&&(this.C=null,wa(this),rc(this),dt(19))};function Ta(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function tm(a,h){var d=null;if(a.g==h){Ta(a),ic(a),a.g=null;var y=2}else if(Zu(a.h,h))d=h.D,Dp(a.h,h),y=1;else return;if(a.G!=0){if(h.o)if(y==1){d=h.m?h.m.length:0,h=Date.now()-h.F;var P=a.B;y=ca(),ht(y,new Ip(y,d)),Ea(a)}else Zp(a);else if(P=h.s,P==3||P==0&&0<h.X||!(y==1&&RT(a,h)||y==2&&rc(a)))switch(d&&0<d.length&&(h=a.h,h.i=h.i.concat(d)),P){case 1:Br(a,5);break;case 4:Br(a,10);break;case 3:Br(a,6);break;default:Br(a,2)}}}function nm(a,h){let d=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(d*=2),d*h}function Br(a,h){if(a.j.info("Error code "+h),h==2){var d=m(a.fb,a),y=a.Xa;const P=!y;y=new zr(y||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||pa(y,"https"),ga(y),P?wT(y.toString(),d):ET(y.toString(),d)}else dt(2);a.G=0,a.l&&a.l.sa(h),rm(a),Xp(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),dt(2)):(this.j.info("Failed to ping google.com"),dt(1))};function rm(a){if(a.G=0,a.ka=[],a.l){const h=Op(a.h);(h.length!=0||a.i.length!=0)&&(O(a.ka,h),O(a.ka,a.i),a.h.i.length=0,N(a.i),a.i.length=0),a.l.ra()}}function im(a,h,d){var y=d instanceof zr?Sn(d):new zr(d);if(y.g!="")h&&(y.g=h+"."+y.g),ma(y,y.s);else{var P=l.location;y=P.protocol,h=h?h+"."+P.hostname:P.hostname,P=+P.port;var V=new zr(null);y&&pa(V,y),h&&(V.g=h),P&&ma(V,P),d&&(V.l=d),y=V}return d=a.D,h=a.ya,d&&h&&ge(y,d,h),ge(y,"VER",a.la),Vs(a,y),y}function sm(a,h,d){if(h&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Ca&&!a.pa?new ke(new ya({eb:d})):new ke(a.pa),h.Ha(a.J),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function om(){}t=om.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Ia(){}Ia.prototype.g=function(a,h){return new xt(a,h)};function xt(a,h){et.call(this),this.g=new Qp(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(a?a["X-WebChannel-Client-Profile"]=h.va:a={"X-WebChannel-Client-Profile":h.va}),this.g.S=a,(a=h&&h.Sb)&&!g(a)&&(this.g.m=a),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!g(h)&&(this.g.D=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new Ti(this)}k(xt,et),xt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},xt.prototype.close=function(){nc(this.g)},xt.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.u&&(d={},d.__data__=Hu(a),a=d);h.i.push(new cT(h.Ya++,a)),h.G==3&&Ea(h)},xt.prototype.N=function(){this.g.l=null,delete this.j,nc(this.g),delete this.g,xt.aa.N.call(this)};function am(a){qu.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const d in h){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}k(am,qu);function lm(){Ku.call(this),this.status=1}k(lm,Ku);function Ti(a){this.g=a}k(Ti,om),Ti.prototype.ua=function(){ht(this.g,"a")},Ti.prototype.ta=function(a){ht(this.g,new am(a))},Ti.prototype.sa=function(a){ht(this.g,new lm)},Ti.prototype.ra=function(){ht(this.g,"b")},Ia.prototype.createWebChannel=Ia.prototype.g,xt.prototype.send=xt.prototype.o,xt.prototype.open=xt.prototype.m,xt.prototype.close=xt.prototype.close,f0=function(){return new Ia},d0=function(){return ca()},h0=Ur,Jh={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},ha.NO_ERROR=0,ha.TIMEOUT=8,ha.HTTP_ERROR=6,dl=ha,Sp.COMPLETE="complete",c0=Sp,vp.EventType=Ss,Ss.OPEN="a",Ss.CLOSE="b",Ss.ERROR="c",Ss.MESSAGE="d",et.prototype.listen=et.prototype.K,Ys=vp,ke.prototype.listenOnce=ke.prototype.L,ke.prototype.getLastError=ke.prototype.Ka,ke.prototype.getLastErrorCode=ke.prototype.Ba,ke.prototype.getStatus=ke.prototype.Z,ke.prototype.getResponseJson=ke.prototype.Oa,ke.prototype.getResponseText=ke.prototype.oa,ke.prototype.send=ke.prototype.ea,ke.prototype.setWithCredentials=ke.prototype.Ha,u0=ke}).apply(typeof $a<"u"?$a:typeof self<"u"?self:typeof window<"u"?window:{});const Yg="@firebase/firestore",Jg="4.8.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ot.UNAUTHENTICATED=new ot(null),ot.GOOGLE_CREDENTIALS=new ot("google-credentials-uid"),ot.FIRST_PARTY=new ot("first-party-uid"),ot.MOCK_USER=new ot("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let gs="11.10.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ui=new ff("@firebase/firestore");function xi(){return ui.logLevel}function $(t,...e){if(ui.logLevel<=re.DEBUG){const n=e.map(Af);ui.debug(`Firestore (${gs}): ${t}`,...n)}}function $n(t,...e){if(ui.logLevel<=re.ERROR){const n=e.map(Af);ui.error(`Firestore (${gs}): ${t}`,...n)}}function Ar(t,...e){if(ui.logLevel<=re.WARN){const n=e.map(Af);ui.warn(`Firestore (${gs}): ${t}`,...n)}}function Af(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,p0(t,r,n)}function p0(t,e,n){let r=`FIRESTORE (${gs}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw $n(r),new Error(r)}function he(t,e,n,r){let i="Unexpected state";typeof n=="string"?i=n:r=n,t||p0(e,i,r)}function J(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class q extends Tn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m0{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class JR{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(ot.UNAUTHENTICATED))}shutdown(){}}class ZR{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class ek{constructor(e){this.t=e,this.currentUser=ot.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){he(this.o===void 0,42304);let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new Tr;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Tr,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{$("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):($("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Tr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?($("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(he(typeof r.accessToken=="string",31837,{l:r}),new m0(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return he(e===null||typeof e=="string",2055,{h:e}),new ot(e)}}class tk{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=ot.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class nk{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new tk(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(ot.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Zg{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class rk{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Rt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){he(this.o===void 0,3512);const r=s=>{s.error!=null&&$("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.m;return this.m=s.token,$("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{$("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.V.getImmediate({optional:!0});s?i(s):$("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Zg(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(he(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new Zg(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ik(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function g0(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rf{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=ik(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%62))}return r}}function ee(t,e){return t<e?-1:t>e?1:0}function Zh(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=t.codePointAt(n),i=e.codePointAt(n);if(r!==i){if(r<128&&i<128)return ee(r,i);{const s=g0(),o=sk(s.encode(ey(t,n)),s.encode(ey(e,n)));return o!==0?o:ee(r,i)}}n+=r>65535?2:1}return ee(t.length,e.length)}function ey(t,e){return t.codePointAt(e)>65535?t.substring(e,e+2):t.substring(e,e+1)}function sk(t,e){for(let n=0;n<t.length&&n<e.length;++n)if(t[n]!==e[n])return ee(t[n],e[n]);return ee(t.length,e.length)}function as(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ty="__name__";class ln{constructor(e,n,r){n===void 0?n=0:n>e.length&&Q(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&Q(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return ln.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof ln?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=ln.compareSegments(e.get(i),n.get(i));if(s!==0)return s}return ee(e.length,n.length)}static compareSegments(e,n){const r=ln.isNumericId(e),i=ln.isNumericId(n);return r&&!i?-1:!r&&i?1:r&&i?ln.extractNumericId(e).compare(ln.extractNumericId(n)):Zh(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Er.fromString(e.substring(4,e.length-2))}}class Se extends ln{construct(e,n,r){return new Se(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new q(j.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Se(n)}static emptyPath(){return new Se([])}}const ok=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Xe extends ln{construct(e,n,r){return new Xe(e,n,r)}static isValidIdentifier(e){return ok.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Xe.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===ty}static keyField(){return new Xe([ty])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new q(j.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new q(j.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new q(j.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else l==="`"?(o=!o,i++):l!=="."||o?(r+=l,i++):(s(),i++)}if(s(),o)throw new q(j.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Xe(n)}static emptyPath(){return new Xe([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K{constructor(e){this.path=e}static fromPath(e){return new K(Se.fromString(e))}static fromName(e){return new K(Se.fromString(e).popFirst(5))}static empty(){return new K(Se.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Se.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Se.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new K(new Se(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ak(t,e,n){if(!n)throw new q(j.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function lk(t,e,n,r){if(e===!0&&r===!0)throw new q(j.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function ny(t){if(!K.isDocumentKey(t))throw new q(j.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function y0(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function kf(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Q(12329,{type:typeof t})}function jo(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new q(j.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=kf(t);throw new q(j.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Le(t,e){const n={typeString:t};return e&&(n.value=e),n}function ia(t,e){if(!y0(t))throw new q(j.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const i=e[r].typeString,s="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(i&&typeof o!==i){n=`JSON field '${r}' must be a ${i}.`;break}if(s!==void 0&&o!==s.value){n=`Expected '${r}' field to equal '${s.value}'`;break}}if(n)throw new q(j.INVALID_ARGUMENT,n);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ry=-62135596800,iy=1e6;class _e{static now(){return _e.fromMillis(Date.now())}static fromDate(e){return _e.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*iy);return new _e(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new q(j.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new q(j.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<ry)throw new q(j.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new q(j.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/iy}_compareTo(e){return this.seconds===e.seconds?ee(this.nanoseconds,e.nanoseconds):ee(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:_e._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(ia(e,_e._jsonSchema))return new _e(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-ry;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}_e._jsonSchemaVersion="firestore/timestamp/1.0",_e._jsonSchema={type:Le("string",_e._jsonSchemaVersion),seconds:Le("number"),nanoseconds:Le("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{static fromTimestamp(e){return new Y(e)}static min(){return new Y(new _e(0,0))}static max(){return new Y(new _e(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uo=-1;function uk(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=Y.fromTimestamp(r===1e9?new _e(n+1,0):new _e(n,r));return new Rr(i,K.empty(),e)}function ck(t){return new Rr(t.readTime,t.key,Uo)}class Rr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Rr(Y.min(),K.empty(),Uo)}static max(){return new Rr(Y.max(),K.empty(),Uo)}}function hk(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=K.comparator(t.documentKey,e.documentKey),n!==0?n:ee(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dk="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class fk{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ys(t){if(t.code!==j.FAILED_PRECONDITION||t.message!==dk)throw t;$("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Q(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new L((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof L?n:L.resolve(n)}catch(n){return L.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):L.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):L.reject(n)}static resolve(e){return new L((n,r)=>{n(e)})}static reject(e){return new L((n,r)=>{r(e)})}static waitFor(e){return new L((n,r)=>{let i=0,s=0,o=!1;e.forEach(l=>{++i,l.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=L.resolve(!1);for(const r of e)n=n.next(i=>i?L.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new L((r,i)=>{const s=e.length,o=new Array(s);let l=0;for(let u=0;u<s;u++){const c=u;n(e[c]).next(f=>{o[c]=f,++l,l===s&&r(o)},f=>i(f))}})}static doWhile(e,n){return new L((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function pk(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function _s(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cu{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this._e(r),this.ae=r=>n.writeSequenceNumber(r))}_e(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ae&&this.ae(e),e}}Cu.ue=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cf=-1;function Pu(t){return t==null}function Xl(t){return t===0&&1/t==-1/0}function mk(t){return typeof t=="number"&&Number.isInteger(t)&&!Xl(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _0="";function gk(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=sy(e)),e=yk(t.get(n),e);return sy(e)}function yk(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const s=t.charAt(i);switch(s){case"\0":n+="";break;case _0:n+="";break;default:n+=s}}return n}function sy(t){return t+_0+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oy(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function gi(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function v0(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Re{constructor(e,n){this.comparator=e,this.root=n||Qe.EMPTY}insert(e,n){return new Re(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Qe.BLACK,null,null))}remove(e){return new Re(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Qe.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ha(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ha(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ha(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ha(this.root,e,this.comparator,!0)}}class Ha{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Qe{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Qe.RED,this.left=i??Qe.EMPTY,this.right=s??Qe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Qe(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Qe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Qe.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Qe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Qe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Q(43730,{key:this.key,value:this.value});if(this.right.isRed())throw Q(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw Q(27949);return e+(this.isRed()?0:1)}}Qe.EMPTY=null,Qe.RED=!0,Qe.BLACK=!1;Qe.EMPTY=new class{constructor(){this.size=0}get key(){throw Q(57766)}get value(){throw Q(16141)}get color(){throw Q(16727)}get left(){throw Q(29726)}get right(){throw Q(36894)}copy(e,n,r,i,s){return this}insert(e,n,r){return new Qe(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe{constructor(e){this.comparator=e,this.data=new Re(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new ay(this.data.getIterator())}getIteratorFrom(e){return new ay(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Fe)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Fe(this.comparator);return n.data=e,n}}class ay{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt{constructor(e){this.fields=e,e.sort(Xe.comparator)}static empty(){return new Zt([])}unionWith(e){let n=new Fe(Xe.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Zt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return as(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w0 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new w0("Invalid base64 string: "+s):s}}(e);return new Ze(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new Ze(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ee(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ze.EMPTY_BYTE_STRING=new Ze("");const _k=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function kr(t){if(he(!!t,39018),typeof t=="string"){let e=0;const n=_k.exec(t);if(he(!!n,46558,{timestamp:t}),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:be(t.seconds),nanos:be(t.nanos)}}function be(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Cr(t){return typeof t=="string"?Ze.fromBase64String(t):Ze.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E0="server_timestamp",T0="__type__",I0="__previous_value__",S0="__local_write_time__";function Pf(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[T0])===null||n===void 0?void 0:n.stringValue)===E0}function Nu(t){const e=t.mapValue.fields[I0];return Pf(e)?Nu(e):e}function Fo(t){const e=kr(t.mapValue.fields[S0].timestampValue);return new _e(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vk{constructor(e,n,r,i,s,o,l,u,c,f){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=c,this.isUsingEmulator=f}}const Yl="(default)";class zo{constructor(e,n){this.projectId=e,this.database=n||Yl}static empty(){return new zo("","")}get isDefaultDatabase(){return this.database===Yl}isEqual(e){return e instanceof zo&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x0="__type__",wk="__max__",Wa={mapValue:{}},A0="__vector__",Jl="value";function Pr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Pf(t)?4:Tk(t)?9007199254740991:Ek(t)?10:11:Q(28295,{value:t})}function wn(t,e){if(t===e)return!0;const n=Pr(t);if(n!==Pr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Fo(t).isEqual(Fo(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=kr(i.timestampValue),l=kr(s.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Cr(i.bytesValue).isEqual(Cr(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return be(i.geoPointValue.latitude)===be(s.geoPointValue.latitude)&&be(i.geoPointValue.longitude)===be(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return be(i.integerValue)===be(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=be(i.doubleValue),l=be(s.doubleValue);return o===l?Xl(o)===Xl(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return as(t.arrayValue.values||[],e.arrayValue.values||[],wn);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},l=s.mapValue.fields||{};if(oy(o)!==oy(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!wn(o[u],l[u])))return!1;return!0}(t,e);default:return Q(52216,{left:t})}}function Bo(t,e){return(t.values||[]).find(n=>wn(n,e))!==void 0}function ls(t,e){if(t===e)return 0;const n=Pr(t),r=Pr(e);if(n!==r)return ee(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ee(t.booleanValue,e.booleanValue);case 2:return function(s,o){const l=be(s.integerValue||s.doubleValue),u=be(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return ly(t.timestampValue,e.timestampValue);case 4:return ly(Fo(t),Fo(e));case 5:return Zh(t.stringValue,e.stringValue);case 6:return function(s,o){const l=Cr(s),u=Cr(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const l=s.split("/"),u=o.split("/");for(let c=0;c<l.length&&c<u.length;c++){const f=ee(l[c],u[c]);if(f!==0)return f}return ee(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const l=ee(be(s.latitude),be(o.latitude));return l!==0?l:ee(be(s.longitude),be(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return uy(t.arrayValue,e.arrayValue);case 10:return function(s,o){var l,u,c,f;const p=s.fields||{},m=o.fields||{},x=(l=p[Jl])===null||l===void 0?void 0:l.arrayValue,k=(u=m[Jl])===null||u===void 0?void 0:u.arrayValue,N=ee(((c=x==null?void 0:x.values)===null||c===void 0?void 0:c.length)||0,((f=k==null?void 0:k.values)===null||f===void 0?void 0:f.length)||0);return N!==0?N:uy(x,k)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===Wa.mapValue&&o===Wa.mapValue)return 0;if(s===Wa.mapValue)return 1;if(o===Wa.mapValue)return-1;const l=s.fields||{},u=Object.keys(l),c=o.fields||{},f=Object.keys(c);u.sort(),f.sort();for(let p=0;p<u.length&&p<f.length;++p){const m=Zh(u[p],f[p]);if(m!==0)return m;const x=ls(l[u[p]],c[f[p]]);if(x!==0)return x}return ee(u.length,f.length)}(t.mapValue,e.mapValue);default:throw Q(23264,{le:n})}}function ly(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ee(t,e);const n=kr(t),r=kr(e),i=ee(n.seconds,r.seconds);return i!==0?i:ee(n.nanos,r.nanos)}function uy(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=ls(n[i],r[i]);if(s)return s}return ee(n.length,r.length)}function us(t){return ed(t)}function ed(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=kr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Cr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return K.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=ed(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${ed(n.fields[o])}`;return i+"}"}(t.mapValue):Q(61005,{value:t})}function fl(t){switch(Pr(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Nu(t);return e?16+fl(e):16;case 5:return 2*t.stringValue.length;case 6:return Cr(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,s)=>i+fl(s),0)}(t.arrayValue);case 10:case 11:return function(r){let i=0;return gi(r.fields,(s,o)=>{i+=s.length+fl(o)}),i}(t.mapValue);default:throw Q(13486,{value:t})}}function td(t){return!!t&&"integerValue"in t}function Nf(t){return!!t&&"arrayValue"in t}function cy(t){return!!t&&"nullValue"in t}function hy(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function pl(t){return!!t&&"mapValue"in t}function Ek(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[x0])===null||n===void 0?void 0:n.stringValue)===A0}function fo(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return gi(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=fo(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=fo(t.arrayValue.values[n]);return e}return Object.assign({},t)}function Tk(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===wk}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut{constructor(e){this.value=e}static empty(){return new Ut({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!pl(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=fo(n)}setAll(e){let n=Xe.emptyPath(),r={},i=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=l.popLast()}o?r[l.lastSegment()]=fo(o):i.push(l.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());pl(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return wn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];pl(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){gi(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Ut(fo(this.value))}}function R0(t){const e=[];return gi(t.fields,(n,r)=>{const i=new Xe([n]);if(pl(r)){const s=R0(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Zt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{constructor(e,n,r,i,s,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=l}static newInvalidDocument(e){return new lt(e,0,Y.min(),Y.min(),Y.min(),Ut.empty(),0)}static newFoundDocument(e,n,r,i){return new lt(e,1,n,Y.min(),r,i,0)}static newNoDocument(e,n){return new lt(e,2,n,Y.min(),Y.min(),Ut.empty(),0)}static newUnknownDocument(e,n){return new lt(e,3,n,Y.min(),Y.min(),Ut.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Y.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ut.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ut.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Y.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof lt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new lt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zl{constructor(e,n){this.position=e,this.inclusive=n}}function dy(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=K.comparator(K.fromName(o.referenceValue),n.key):r=ls(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function fy(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!wn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eu{constructor(e,n="asc"){this.field=e,this.dir=n}}function Ik(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k0{}class je extends k0{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new xk(e,n,r):n==="array-contains"?new kk(e,r):n==="in"?new Ck(e,r):n==="not-in"?new Pk(e,r):n==="array-contains-any"?new Nk(e,r):new je(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new Ak(e,r):new Rk(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(ls(n,this.value)):n!==null&&Pr(this.value)===Pr(n)&&this.matchesComparison(ls(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Q(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class En extends k0{constructor(e,n){super(),this.filters=e,this.op=n,this.he=null}static create(e,n){return new En(e,n)}matches(e){return C0(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function C0(t){return t.op==="and"}function P0(t){return Sk(t)&&C0(t)}function Sk(t){for(const e of t.filters)if(e instanceof En)return!1;return!0}function nd(t){if(t instanceof je)return t.field.canonicalString()+t.op.toString()+us(t.value);if(P0(t))return t.filters.map(e=>nd(e)).join(",");{const e=t.filters.map(n=>nd(n)).join(",");return`${t.op}(${e})`}}function N0(t,e){return t instanceof je?function(r,i){return i instanceof je&&r.op===i.op&&r.field.isEqual(i.field)&&wn(r.value,i.value)}(t,e):t instanceof En?function(r,i){return i instanceof En&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,l)=>s&&N0(o,i.filters[l]),!0):!1}(t,e):void Q(19439)}function b0(t){return t instanceof je?function(n){return`${n.field.canonicalString()} ${n.op} ${us(n.value)}`}(t):t instanceof En?function(n){return n.op.toString()+" {"+n.getFilters().map(b0).join(" ,")+"}"}(t):"Filter"}class xk extends je{constructor(e,n,r){super(e,n,r),this.key=K.fromName(r.referenceValue)}matches(e){const n=K.comparator(e.key,this.key);return this.matchesComparison(n)}}class Ak extends je{constructor(e,n){super(e,"in",n),this.keys=D0("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class Rk extends je{constructor(e,n){super(e,"not-in",n),this.keys=D0("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function D0(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>K.fromName(r.referenceValue))}class kk extends je{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Nf(n)&&Bo(n.arrayValue,this.value)}}class Ck extends je{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Bo(this.value.arrayValue,n)}}class Pk extends je{constructor(e,n){super(e,"not-in",n)}matches(e){if(Bo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!Bo(this.value.arrayValue,n)}}class Nk extends je{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Nf(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Bo(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bk{constructor(e,n=null,r=[],i=[],s=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=l,this.Pe=null}}function py(t,e=null,n=[],r=[],i=null,s=null,o=null){return new bk(t,e,n,r,i,s,o)}function bf(t){const e=J(t);if(e.Pe===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>nd(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Pu(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>us(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>us(r)).join(",")),e.Pe=n}return e.Pe}function Df(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Ik(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!N0(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!fy(t.startAt,e.startAt)&&fy(t.endAt,e.endAt)}function rd(t){return K.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bu{constructor(e,n=null,r=[],i=[],s=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=l,this.endAt=u,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function Dk(t,e,n,r,i,s,o,l){return new bu(t,e,n,r,i,s,o,l)}function Of(t){return new bu(t)}function my(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Ok(t){return t.collectionGroup!==null}function po(t){const e=J(t);if(e.Te===null){e.Te=[];const n=new Set;for(const s of e.explicitOrderBy)e.Te.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new Fe(Xe.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(l=l.add(c.field))})}),l})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.Te.push(new eu(s,r))}),n.has(Xe.keyField().canonicalString())||e.Te.push(new eu(Xe.keyField(),r))}return e.Te}function gn(t){const e=J(t);return e.Ie||(e.Ie=Vk(e,po(t))),e.Ie}function Vk(t,e){if(t.limitType==="F")return py(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new eu(i.field,s)});const n=t.endAt?new Zl(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Zl(t.startAt.position,t.startAt.inclusive):null;return py(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function id(t,e,n){return new bu(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Du(t,e){return Df(gn(t),gn(e))&&t.limitType===e.limitType}function O0(t){return`${bf(gn(t))}|lt:${t.limitType}`}function Ai(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>b0(i)).join(", ")}]`),Pu(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>us(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>us(i)).join(",")),`Target(${r})`}(gn(t))}; limitType=${t.limitType})`}function Ou(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):K.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of po(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,l,u){const c=dy(o,l,u);return o.inclusive?c<=0:c<0}(r.startAt,po(r),i)||r.endAt&&!function(o,l,u){const c=dy(o,l,u);return o.inclusive?c>=0:c>0}(r.endAt,po(r),i))}(t,e)}function Lk(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function V0(t){return(e,n)=>{let r=!1;for(const i of po(t)){const s=Mk(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function Mk(t,e,n){const r=t.field.isKeyField()?K.comparator(e.key,n.key):function(s,o,l){const u=o.data.field(s),c=l.data.field(s);return u!==null&&c!==null?ls(u,c):Q(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return Q(19790,{direction:t.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){gi(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return v0(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jk=new Re(K.comparator);function Hn(){return jk}const L0=new Re(K.comparator);function Js(...t){let e=L0;for(const n of t)e=e.insert(n.key,n);return e}function M0(t){let e=L0;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Qr(){return mo()}function j0(){return mo()}function mo(){return new yi(t=>t.toString(),(t,e)=>t.isEqual(e))}const Uk=new Re(K.comparator),Fk=new Fe(K.comparator);function ie(...t){let e=Fk;for(const n of t)e=e.add(n);return e}const zk=new Fe(ee);function Bk(){return zk}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vf(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Xl(e)?"-0":e}}function U0(t){return{integerValue:""+t}}function $k(t,e){return mk(e)?U0(e):Vf(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vu{constructor(){this._=void 0}}function Hk(t,e,n){return t instanceof $o?function(i,s){const o={fields:{[T0]:{stringValue:E0},[S0]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Pf(s)&&(s=Nu(s)),s&&(o.fields[I0]=s),{mapValue:o}}(n,e):t instanceof Ho?z0(t,e):t instanceof Wo?B0(t,e):function(i,s){const o=F0(i,s),l=gy(o)+gy(i.Ee);return td(o)&&td(i.Ee)?U0(l):Vf(i.serializer,l)}(t,e)}function Wk(t,e,n){return t instanceof Ho?z0(t,e):t instanceof Wo?B0(t,e):n}function F0(t,e){return t instanceof tu?function(r){return td(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class $o extends Vu{}class Ho extends Vu{constructor(e){super(),this.elements=e}}function z0(t,e){const n=$0(e);for(const r of t.elements)n.some(i=>wn(i,r))||n.push(r);return{arrayValue:{values:n}}}class Wo extends Vu{constructor(e){super(),this.elements=e}}function B0(t,e){let n=$0(e);for(const r of t.elements)n=n.filter(i=>!wn(i,r));return{arrayValue:{values:n}}}class tu extends Vu{constructor(e,n){super(),this.serializer=e,this.Ee=n}}function gy(t){return be(t.integerValue||t.doubleValue)}function $0(t){return Nf(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qk{constructor(e,n){this.field=e,this.transform=n}}function Kk(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof Ho&&i instanceof Ho||r instanceof Wo&&i instanceof Wo?as(r.elements,i.elements,wn):r instanceof tu&&i instanceof tu?wn(r.Ee,i.Ee):r instanceof $o&&i instanceof $o}(t.transform,e.transform)}class Gk{constructor(e,n){this.version=e,this.transformResults=n}}class Ln{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Ln}static exists(e){return new Ln(void 0,e)}static updateTime(e){return new Ln(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ml(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Lu{}function H0(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new q0(t.key,Ln.none()):new sa(t.key,t.data,Ln.none());{const n=t.data,r=Ut.empty();let i=new Fe(Xe.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new _i(t.key,r,new Zt(i.toArray()),Ln.none())}}function Qk(t,e,n){t instanceof sa?function(i,s,o){const l=i.value.clone(),u=_y(i.fieldTransforms,s,o.transformResults);l.setAll(u),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof _i?function(i,s,o){if(!ml(i.precondition,s))return void s.convertToUnknownDocument(o.version);const l=_y(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(W0(i)),u.setAll(l),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function go(t,e,n,r){return t instanceof sa?function(s,o,l,u){if(!ml(s.precondition,o))return l;const c=s.value.clone(),f=vy(s.fieldTransforms,u,o);return c.setAll(f),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof _i?function(s,o,l,u){if(!ml(s.precondition,o))return l;const c=vy(s.fieldTransforms,u,o),f=o.data;return f.setAll(W0(s)),f.setAll(c),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(s,o,l){return ml(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function Xk(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=F0(r.transform,i||null);s!=null&&(n===null&&(n=Ut.empty()),n.set(r.field,s))}return n||null}function yy(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&as(r,i,(s,o)=>Kk(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class sa extends Lu{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class _i extends Lu{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function W0(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function _y(t,e,n){const r=new Map;he(t.length===n.length,32656,{Ae:n.length,Re:t.length});for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,l=e.data.field(s.field);r.set(s.field,Wk(o,l,n[i]))}return r}function vy(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,Hk(s,o,e))}return r}class q0 extends Lu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Yk extends Lu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jk{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&Qk(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=go(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=go(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=j0();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let l=this.applyToLocalView(o,s.mutatedFields);l=n.has(i.key)?null:l;const u=H0(o,l);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(Y.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ie())}isEqual(e){return this.batchId===e.batchId&&as(this.mutations,e.mutations,(n,r)=>yy(n,r))&&as(this.baseMutations,e.baseMutations,(n,r)=>yy(n,r))}}class Lf{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){he(e.mutations.length===r.length,58842,{Ve:e.mutations.length,me:r.length});let i=function(){return Uk}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Lf(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zk{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eC{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Oe,se;function tC(t){switch(t){case j.OK:return Q(64938);case j.CANCELLED:case j.UNKNOWN:case j.DEADLINE_EXCEEDED:case j.RESOURCE_EXHAUSTED:case j.INTERNAL:case j.UNAVAILABLE:case j.UNAUTHENTICATED:return!1;case j.INVALID_ARGUMENT:case j.NOT_FOUND:case j.ALREADY_EXISTS:case j.PERMISSION_DENIED:case j.FAILED_PRECONDITION:case j.ABORTED:case j.OUT_OF_RANGE:case j.UNIMPLEMENTED:case j.DATA_LOSS:return!0;default:return Q(15467,{code:t})}}function K0(t){if(t===void 0)return $n("GRPC error has no .code"),j.UNKNOWN;switch(t){case Oe.OK:return j.OK;case Oe.CANCELLED:return j.CANCELLED;case Oe.UNKNOWN:return j.UNKNOWN;case Oe.DEADLINE_EXCEEDED:return j.DEADLINE_EXCEEDED;case Oe.RESOURCE_EXHAUSTED:return j.RESOURCE_EXHAUSTED;case Oe.INTERNAL:return j.INTERNAL;case Oe.UNAVAILABLE:return j.UNAVAILABLE;case Oe.UNAUTHENTICATED:return j.UNAUTHENTICATED;case Oe.INVALID_ARGUMENT:return j.INVALID_ARGUMENT;case Oe.NOT_FOUND:return j.NOT_FOUND;case Oe.ALREADY_EXISTS:return j.ALREADY_EXISTS;case Oe.PERMISSION_DENIED:return j.PERMISSION_DENIED;case Oe.FAILED_PRECONDITION:return j.FAILED_PRECONDITION;case Oe.ABORTED:return j.ABORTED;case Oe.OUT_OF_RANGE:return j.OUT_OF_RANGE;case Oe.UNIMPLEMENTED:return j.UNIMPLEMENTED;case Oe.DATA_LOSS:return j.DATA_LOSS;default:return Q(39323,{code:t})}}(se=Oe||(Oe={}))[se.OK=0]="OK",se[se.CANCELLED=1]="CANCELLED",se[se.UNKNOWN=2]="UNKNOWN",se[se.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",se[se.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",se[se.NOT_FOUND=5]="NOT_FOUND",se[se.ALREADY_EXISTS=6]="ALREADY_EXISTS",se[se.PERMISSION_DENIED=7]="PERMISSION_DENIED",se[se.UNAUTHENTICATED=16]="UNAUTHENTICATED",se[se.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",se[se.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",se[se.ABORTED=10]="ABORTED",se[se.OUT_OF_RANGE=11]="OUT_OF_RANGE",se[se.UNIMPLEMENTED=12]="UNIMPLEMENTED",se[se.INTERNAL=13]="INTERNAL",se[se.UNAVAILABLE=14]="UNAVAILABLE",se[se.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nC=new Er([4294967295,4294967295],0);function wy(t){const e=g0().encode(t),n=new l0;return n.update(e),new Uint8Array(n.digest())}function Ey(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Er([n,r],0),new Er([i,s],0)]}class Mf{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Zs(`Invalid padding: ${n}`);if(r<0)throw new Zs(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Zs(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Zs(`Invalid padding when bitmap length is 0: ${n}`);this.fe=8*e.length-n,this.ge=Er.fromNumber(this.fe)}pe(e,n,r){let i=e.add(n.multiply(Er.fromNumber(r)));return i.compare(nC)===1&&(i=new Er([i.getBits(0),i.getBits(1)],0)),i.modulo(this.ge).toNumber()}ye(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.fe===0)return!1;const n=wy(e),[r,i]=Ey(n);for(let s=0;s<this.hashCount;s++){const o=this.pe(r,i,s);if(!this.ye(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Mf(s,i,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.fe===0)return;const n=wy(e),[r,i]=Ey(n);for(let s=0;s<this.hashCount;s++){const o=this.pe(r,i,s);this.we(o)}}we(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Zs extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mu{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,oa.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Mu(Y.min(),i,new Re(ee),Hn(),ie())}}class oa{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new oa(r,n,ie(),ie(),ie())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gl{constructor(e,n,r,i){this.Se=e,this.removedTargetIds=n,this.key=r,this.be=i}}class G0{constructor(e,n){this.targetId=e,this.De=n}}class Q0{constructor(e,n,r=Ze.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class Ty{constructor(){this.ve=0,this.Ce=Iy(),this.Fe=Ze.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(e){e.approximateByteSize()>0&&(this.xe=!0,this.Fe=e)}Le(){let e=ie(),n=ie(),r=ie();return this.Ce.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:Q(38017,{changeType:s})}}),new oa(this.Fe,this.Me,e,n,r)}ke(){this.xe=!1,this.Ce=Iy()}qe(e,n){this.xe=!0,this.Ce=this.Ce.insert(e,n)}Qe(e){this.xe=!0,this.Ce=this.Ce.remove(e)}$e(){this.ve+=1}Ue(){this.ve-=1,he(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}}class rC{constructor(e){this.We=e,this.Ge=new Map,this.ze=Hn(),this.je=qa(),this.Je=qa(),this.He=new Re(ee)}Ye(e){for(const n of e.Se)e.be&&e.be.isFoundDocument()?this.Ze(n,e.be):this.Xe(n,e.key,e.be);for(const n of e.removedTargetIds)this.Xe(n,e.key,e.be)}et(e){this.forEachTarget(e,n=>{const r=this.tt(n);switch(e.state){case 0:this.nt(n)&&r.Be(e.resumeToken);break;case 1:r.Ue(),r.Oe||r.ke(),r.Be(e.resumeToken);break;case 2:r.Ue(),r.Oe||this.removeTarget(n);break;case 3:this.nt(n)&&(r.Ke(),r.Be(e.resumeToken));break;case 4:this.nt(n)&&(this.rt(n),r.Be(e.resumeToken));break;default:Q(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Ge.forEach((r,i)=>{this.nt(i)&&n(i)})}it(e){const n=e.targetId,r=e.De.count,i=this.st(n);if(i){const s=i.target;if(rd(s))if(r===0){const o=new K(s.path);this.Xe(n,o,lt.newNoDocument(o,Y.min()))}else he(r===1,20013,{expectedCount:r});else{const o=this.ot(n);if(o!==r){const l=this._t(e),u=l?this.ut(l,e,o):1;if(u!==0){this.rt(n);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(n,c)}}}}}_t(e){const n=e.De.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,l;try{o=Cr(r).toUint8Array()}catch(u){if(u instanceof w0)return Ar("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new Mf(o,i,s)}catch(u){return Ar(u instanceof Zs?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.fe===0?null:l}ut(e,n,r){return n.De.count===r-this.ht(e,n.targetId)?0:2}ht(e,n){const r=this.We.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.We.lt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.Xe(n,s,null),i++)}),i}Pt(e){const n=new Map;this.Ge.forEach((s,o)=>{const l=this.st(o);if(l){if(s.current&&rd(l.target)){const u=new K(l.target.path);this.Tt(u).has(o)||this.It(o,u)||this.Xe(o,u,lt.newNoDocument(u,e))}s.Ne&&(n.set(o,s.Le()),s.ke())}});let r=ie();this.Je.forEach((s,o)=>{let l=!0;o.forEachWhile(u=>{const c=this.st(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.ze.forEach((s,o)=>o.setReadTime(e));const i=new Mu(e,n,this.He,this.ze,r);return this.ze=Hn(),this.je=qa(),this.Je=qa(),this.He=new Re(ee),i}Ze(e,n){if(!this.nt(e))return;const r=this.It(e,n.key)?2:0;this.tt(e).qe(n.key,r),this.ze=this.ze.insert(n.key,n),this.je=this.je.insert(n.key,this.Tt(n.key).add(e)),this.Je=this.Je.insert(n.key,this.dt(n.key).add(e))}Xe(e,n,r){if(!this.nt(e))return;const i=this.tt(e);this.It(e,n)?i.qe(n,1):i.Qe(n),this.Je=this.Je.insert(n,this.dt(n).delete(e)),this.Je=this.Je.insert(n,this.dt(n).add(e)),r&&(this.ze=this.ze.insert(n,r))}removeTarget(e){this.Ge.delete(e)}ot(e){const n=this.tt(e).Le();return this.We.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}$e(e){this.tt(e).$e()}tt(e){let n=this.Ge.get(e);return n||(n=new Ty,this.Ge.set(e,n)),n}dt(e){let n=this.Je.get(e);return n||(n=new Fe(ee),this.Je=this.Je.insert(e,n)),n}Tt(e){let n=this.je.get(e);return n||(n=new Fe(ee),this.je=this.je.insert(e,n)),n}nt(e){const n=this.st(e)!==null;return n||$("WatchChangeAggregator","Detected inactive target",e),n}st(e){const n=this.Ge.get(e);return n&&n.Oe?null:this.We.Et(e)}rt(e){this.Ge.set(e,new Ty),this.We.getRemoteKeysForTarget(e).forEach(n=>{this.Xe(e,n,null)})}It(e,n){return this.We.getRemoteKeysForTarget(e).has(n)}}function qa(){return new Re(K.comparator)}function Iy(){return new Re(K.comparator)}const iC={asc:"ASCENDING",desc:"DESCENDING"},sC={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},oC={and:"AND",or:"OR"};class aC{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function sd(t,e){return t.useProto3Json||Pu(e)?e:{value:e}}function nu(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function X0(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function lC(t,e){return nu(t,e.toTimestamp())}function yn(t){return he(!!t,49232),Y.fromTimestamp(function(n){const r=kr(n);return new _e(r.seconds,r.nanos)}(t))}function jf(t,e){return od(t,e).canonicalString()}function od(t,e){const n=function(i){return new Se(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function Y0(t){const e=Se.fromString(t);return he(nE(e),10190,{key:e.toString()}),e}function ad(t,e){return jf(t.databaseId,e.path)}function Uc(t,e){const n=Y0(e);if(n.get(1)!==t.databaseId.projectId)throw new q(j.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new q(j.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new K(Z0(n))}function J0(t,e){return jf(t.databaseId,e)}function uC(t){const e=Y0(t);return e.length===4?Se.emptyPath():Z0(e)}function ld(t){return new Se(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Z0(t){return he(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function Sy(t,e,n){return{name:ad(t,e),fields:n.value.mapValue.fields}}function cC(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:Q(39313,{state:c})}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,f){return c.useProto3Json?(he(f===void 0||typeof f=="string",58123),Ze.fromBase64String(f||"")):(he(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),Ze.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(c){const f=c.code===void 0?j.UNKNOWN:K0(c.code);return new q(f,c.message||"")}(o);n=new Q0(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Uc(t,r.document.name),s=yn(r.document.updateTime),o=r.document.createTime?yn(r.document.createTime):Y.min(),l=new Ut({mapValue:{fields:r.document.fields}}),u=lt.newFoundDocument(i,s,o,l),c=r.targetIds||[],f=r.removedTargetIds||[];n=new gl(c,f,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Uc(t,r.document),s=r.readTime?yn(r.readTime):Y.min(),o=lt.newNoDocument(i,s),l=r.removedTargetIds||[];n=new gl([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Uc(t,r.document),s=r.removedTargetIds||[];n=new gl([],s,i,null)}else{if(!("filter"in e))return Q(11601,{At:e});{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new eC(i,s),l=r.targetId;n=new G0(l,o)}}return n}function hC(t,e){let n;if(e instanceof sa)n={update:Sy(t,e.key,e.value)};else if(e instanceof q0)n={delete:ad(t,e.key)};else if(e instanceof _i)n={update:Sy(t,e.key,e.data),updateMask:wC(e.fieldMask)};else{if(!(e instanceof Yk))return Q(16599,{Rt:e.type});n={verify:ad(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const l=o.transform;if(l instanceof $o)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Ho)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Wo)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof tu)return{fieldPath:o.field.canonicalString(),increment:l.Ee};throw Q(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:lC(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:Q(27497)}(t,e.precondition)),n}function dC(t,e){return t&&t.length>0?(he(e!==void 0,14353),t.map(n=>function(i,s){let o=i.updateTime?yn(i.updateTime):yn(s);return o.isEqual(Y.min())&&(o=yn(s)),new Gk(o,i.transformResults||[])}(n,e))):[]}function fC(t,e){return{documents:[J0(t,e.path)]}}function pC(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=J0(t,i);const s=function(c){if(c.length!==0)return tE(En.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(c){if(c.length!==0)return c.map(f=>function(m){return{field:Ri(m.field),direction:yC(m.dir)}}(f))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=sd(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{Vt:n,parent:i}}function mC(t){let e=uC(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){he(r===1,65062);const f=n.from[0];f.allDescendants?i=f.collectionId:e=e.child(f.collectionId)}let s=[];n.where&&(s=function(p){const m=eE(p);return m instanceof En&&P0(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(m=>function(k){return new eu(ki(k.field),function(O){switch(O){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(k.direction))}(m))}(n.orderBy));let l=null;n.limit&&(l=function(p){let m;return m=typeof p=="object"?p.value:p,Pu(m)?null:m}(n.limit));let u=null;n.startAt&&(u=function(p){const m=!!p.before,x=p.values||[];return new Zl(x,m)}(n.startAt));let c=null;return n.endAt&&(c=function(p){const m=!p.before,x=p.values||[];return new Zl(x,m)}(n.endAt)),Dk(e,i,o,s,l,"F",u,c)}function gC(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Q(28987,{purpose:i})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function eE(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=ki(n.unaryFilter.field);return je.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=ki(n.unaryFilter.field);return je.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=ki(n.unaryFilter.field);return je.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=ki(n.unaryFilter.field);return je.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return Q(61313);default:return Q(60726)}}(t):t.fieldFilter!==void 0?function(n){return je.create(ki(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return Q(58110);default:return Q(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return En.create(n.compositeFilter.filters.map(r=>eE(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return Q(1026)}}(n.compositeFilter.op))}(t):Q(30097,{filter:t})}function yC(t){return iC[t]}function _C(t){return sC[t]}function vC(t){return oC[t]}function Ri(t){return{fieldPath:t.canonicalString()}}function ki(t){return Xe.fromServerFormat(t.fieldPath)}function tE(t){return t instanceof je?function(n){if(n.op==="=="){if(hy(n.value))return{unaryFilter:{field:Ri(n.field),op:"IS_NAN"}};if(cy(n.value))return{unaryFilter:{field:Ri(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(hy(n.value))return{unaryFilter:{field:Ri(n.field),op:"IS_NOT_NAN"}};if(cy(n.value))return{unaryFilter:{field:Ri(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ri(n.field),op:_C(n.op),value:n.value}}}(t):t instanceof En?function(n){const r=n.getFilters().map(i=>tE(i));return r.length===1?r[0]:{compositeFilter:{op:vC(n.op),filters:r}}}(t):Q(54877,{filter:t})}function wC(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function nE(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cr{constructor(e,n,r,i,s=Y.min(),o=Y.min(),l=Ze.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new cr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new cr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new cr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new cr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EC{constructor(e){this.gt=e}}function TC(t){const e=mC({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?id(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IC{constructor(){this.Dn=new SC}addToCollectionParentIndex(e,n){return this.Dn.add(n),L.resolve()}getCollectionParents(e,n){return L.resolve(this.Dn.getEntries(n))}addFieldIndex(e,n){return L.resolve()}deleteFieldIndex(e,n){return L.resolve()}deleteAllFieldIndexes(e){return L.resolve()}createTargetIndexes(e,n){return L.resolve()}getDocumentsMatchingTarget(e,n){return L.resolve(null)}getIndexType(e,n){return L.resolve(0)}getFieldIndexes(e,n){return L.resolve([])}getNextCollectionGroupToUpdate(e){return L.resolve(null)}getMinOffset(e,n){return L.resolve(Rr.min())}getMinOffsetFromCollectionGroup(e,n){return L.resolve(Rr.min())}updateCollectionGroup(e,n,r){return L.resolve()}updateIndexEntries(e,n){return L.resolve()}}class SC{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Fe(Se.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Fe(Se.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xy={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},rE=41943040;class _t{static withCacheSize(e){return new _t(e,_t.DEFAULT_COLLECTION_PERCENTILE,_t.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */_t.DEFAULT_COLLECTION_PERCENTILE=10,_t.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,_t.DEFAULT=new _t(rE,_t.DEFAULT_COLLECTION_PERCENTILE,_t.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),_t.DISABLED=new _t(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cs{constructor(e){this._r=e}next(){return this._r+=2,this._r}static ar(){return new cs(0)}static ur(){return new cs(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ay="LruGarbageCollector",xC=1048576;function Ry([t,e],[n,r]){const i=ee(t,n);return i===0?ee(e,r):i}class AC{constructor(e){this.Tr=e,this.buffer=new Fe(Ry),this.Ir=0}dr(){return++this.Ir}Er(e){const n=[e,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();Ry(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class RC{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(e){$(Ay,`Garbage collection scheduled in ${e}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){_s(n)?$(Ay,"Ignoring IndexedDB error during garbage collection: ",n):await ys(n)}await this.Rr(3e5)})}}class kC{constructor(e,n){this.Vr=e,this.params=n}calculateTargetCount(e,n){return this.Vr.mr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return L.resolve(Cu.ue);const r=new AC(n);return this.Vr.forEachTarget(e,i=>r.Er(i.sequenceNumber)).next(()=>this.Vr.gr(e,i=>r.Er(i))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.Vr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Vr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?($("LruGarbageCollector","Garbage collection skipped; disabled"),L.resolve(xy)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?($("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),xy):this.pr(e,n))}getCacheSize(e){return this.Vr.getCacheSize(e)}pr(e,n){let r,i,s,o,l,u,c;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?($("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),i=this.params.maximumSequenceNumbersToCollect):i=p,o=Date.now(),this.nthSequenceNumber(e,i))).next(p=>(r=p,l=Date.now(),this.removeTargets(e,r,n))).next(p=>(s=p,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(p=>(c=Date.now(),xi()<=re.DEBUG&&$("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${i} in `+(l-o)+`ms
	Removed ${s} targets in `+(u-l)+`ms
	Removed ${p} documents in `+(c-u)+`ms
Total Duration: ${c-f}ms`),L.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:p})))}}function CC(t,e){return new kC(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PC{constructor(){this.changes=new yi(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,lt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?L.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NC{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bC{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&go(r.mutation,i,Zt.empty(),_e.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ie()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ie()){const i=Qr();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Js();return s.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Qr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ie()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,i){let s=Hn();const o=mo(),l=function(){return mo()}();return n.forEach((u,c)=>{const f=r.get(c.key);i.has(c.key)&&(f===void 0||f.mutation instanceof _i)?s=s.insert(c.key,c):f!==void 0?(o.set(c.key,f.mutation.getFieldMask()),go(f.mutation,c,f.mutation.getFieldMask(),_e.now())):o.set(c.key,Zt.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((c,f)=>o.set(c,f)),n.forEach((c,f)=>{var p;return l.set(c,new NC(f,(p=o.get(c))!==null&&p!==void 0?p:null))}),l))}recalculateAndSaveOverlays(e,n){const r=mo();let i=new Re((o,l)=>o-l),s=ie();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let f=r.get(u)||Zt.empty();f=l.applyToLocalView(c,f),r.set(u,f);const p=(i.get(l.batchId)||ie()).add(u);i=i.insert(l.batchId,p)})}).next(()=>{const o=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),c=u.key,f=u.value,p=j0();f.forEach(m=>{if(!s.has(m)){const x=H0(n.get(m),r.get(m));x!==null&&p.set(m,x),s=s.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,p))}return L.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return K.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Ok(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):L.resolve(Qr());let l=Uo,u=s;return o.next(c=>L.forEach(c,(f,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),s.get(f)?L.resolve():this.remoteDocumentCache.getEntry(e,f).next(m=>{u=u.insert(f,m)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,u,c,ie())).next(f=>({batchId:l,changes:M0(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new K(n)).next(r=>{let i=Js();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=Js();return this.indexManager.getCollectionParents(e,s).next(l=>L.forEach(l,u=>{const c=function(p,m){return new bu(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r,i).next(f=>{f.forEach((p,m)=>{o=o.insert(p,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,c)=>{const f=c.getKey();o.get(f)===null&&(o=o.insert(f,lt.newInvalidDocument(f)))});let l=Js();return o.forEach((u,c)=>{const f=s.get(u);f!==void 0&&go(f.mutation,c,Zt.empty(),_e.now()),Ou(n,c)&&(l=l.insert(u,c))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DC{constructor(e){this.serializer=e,this.Br=new Map,this.Lr=new Map}getBundleMetadata(e,n){return L.resolve(this.Br.get(n))}saveBundleMetadata(e,n){return this.Br.set(n.id,function(i){return{id:i.id,version:i.version,createTime:yn(i.createTime)}}(n)),L.resolve()}getNamedQuery(e,n){return L.resolve(this.Lr.get(n))}saveNamedQuery(e,n){return this.Lr.set(n.name,function(i){return{name:i.name,query:TC(i.bundledQuery),readTime:yn(i.readTime)}}(n)),L.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OC{constructor(){this.overlays=new Re(K.comparator),this.kr=new Map}getOverlay(e,n){return L.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Qr();return L.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.wt(e,n,s)}),L.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.kr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.kr.delete(r)),L.resolve()}getOverlaysForCollection(e,n,r){const i=Qr(),s=n.length+1,o=new K(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return L.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Re((c,f)=>c-f);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let f=s.get(c.largestBatchId);f===null&&(f=Qr(),s=s.insert(c.largestBatchId,f)),f.set(c.getKey(),c)}}const l=Qr(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,f)=>l.set(c,f)),!(l.size()>=i)););return L.resolve(l)}wt(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.kr.get(i.largestBatchId).delete(r.key);this.kr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new Zk(n,r));let s=this.kr.get(n);s===void 0&&(s=ie(),this.kr.set(n,s)),this.kr.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VC{constructor(){this.sessionToken=Ze.EMPTY_BYTE_STRING}getSessionToken(e){return L.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,L.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uf{constructor(){this.qr=new Fe(Be.Qr),this.$r=new Fe(Be.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(e,n){const r=new Be(e,n);this.qr=this.qr.add(r),this.$r=this.$r.add(r)}Kr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Wr(new Be(e,n))}Gr(e,n){e.forEach(r=>this.removeReference(r,n))}zr(e){const n=new K(new Se([])),r=new Be(n,e),i=new Be(n,e+1),s=[];return this.$r.forEachInRange([r,i],o=>{this.Wr(o),s.push(o.key)}),s}jr(){this.qr.forEach(e=>this.Wr(e))}Wr(e){this.qr=this.qr.delete(e),this.$r=this.$r.delete(e)}Jr(e){const n=new K(new Se([])),r=new Be(n,e),i=new Be(n,e+1);let s=ie();return this.$r.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Be(e,0),r=this.qr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Be{constructor(e,n){this.key=e,this.Hr=n}static Qr(e,n){return K.comparator(e.key,n.key)||ee(e.Hr,n.Hr)}static Ur(e,n){return ee(e.Hr,n.Hr)||K.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LC{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.er=1,this.Yr=new Fe(Be.Qr)}checkEmpty(e){return L.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Jk(s,n,r,i);this.mutationQueue.push(o);for(const l of i)this.Yr=this.Yr.add(new Be(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return L.resolve(o)}lookupMutationBatch(e,n){return L.resolve(this.Zr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.Xr(r),s=i<0?0:i;return L.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return L.resolve(this.mutationQueue.length===0?Cf:this.er-1)}getAllMutationBatches(e){return L.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Be(n,0),i=new Be(n,Number.POSITIVE_INFINITY),s=[];return this.Yr.forEachInRange([r,i],o=>{const l=this.Zr(o.Hr);s.push(l)}),L.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Fe(ee);return n.forEach(i=>{const s=new Be(i,0),o=new Be(i,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([s,o],l=>{r=r.add(l.Hr)})}),L.resolve(this.ei(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;K.isDocumentKey(s)||(s=s.child(""));const o=new Be(new K(s),0);let l=new Fe(ee);return this.Yr.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(l=l.add(u.Hr)),!0)},o),L.resolve(this.ei(l))}ei(e){const n=[];return e.forEach(r=>{const i=this.Zr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){he(this.ti(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Yr;return L.forEach(n.mutations,i=>{const s=new Be(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Yr=r})}rr(e){}containsKey(e,n){const r=new Be(n,0),i=this.Yr.firstAfterOrEqual(r);return L.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,L.resolve()}ti(e,n){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const n=this.Xr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MC{constructor(e){this.ni=e,this.docs=function(){return new Re(K.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.ni(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return L.resolve(r?r.document.mutableCopy():lt.newInvalidDocument(n))}getEntries(e,n){let r=Hn();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():lt.newInvalidDocument(i))}),L.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Hn();const o=n.path,l=new K(o.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:c,value:{document:f}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||hk(ck(f),r)<=0||(i.has(f.key)||Ou(n,f))&&(s=s.insert(f.key,f.mutableCopy()))}return L.resolve(s)}getAllFromCollectionGroup(e,n,r,i){Q(9500)}ri(e,n){return L.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new jC(this)}getSize(e){return L.resolve(this.size)}}class jC extends PC{constructor(e){super(),this.Or=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.Or.addEntry(e,i)):this.Or.removeEntry(r)}),L.waitFor(n)}getFromCache(e,n){return this.Or.getEntry(e,n)}getAllFromCache(e,n){return this.Or.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UC{constructor(e){this.persistence=e,this.ii=new yi(n=>bf(n),Df),this.lastRemoteSnapshotVersion=Y.min(),this.highestTargetId=0,this.si=0,this.oi=new Uf,this.targetCount=0,this._i=cs.ar()}forEachTarget(e,n){return this.ii.forEach((r,i)=>n(i)),L.resolve()}getLastRemoteSnapshotVersion(e){return L.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return L.resolve(this.si)}allocateTargetId(e){return this.highestTargetId=this._i.next(),L.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.si&&(this.si=n),L.resolve()}hr(e){this.ii.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this._i=new cs(n),this.highestTargetId=n),e.sequenceNumber>this.si&&(this.si=e.sequenceNumber)}addTargetData(e,n){return this.hr(n),this.targetCount+=1,L.resolve()}updateTargetData(e,n){return this.hr(n),L.resolve()}removeTargetData(e,n){return this.ii.delete(n.target),this.oi.zr(n.targetId),this.targetCount-=1,L.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.ii.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.ii.delete(o),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),L.waitFor(s).next(()=>i)}getTargetCount(e){return L.resolve(this.targetCount)}getTargetData(e,n){const r=this.ii.get(n)||null;return L.resolve(r)}addMatchingKeys(e,n,r){return this.oi.Kr(n,r),L.resolve()}removeMatchingKeys(e,n,r){this.oi.Gr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),L.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.oi.zr(n),L.resolve()}getMatchingKeysForTargetId(e,n){const r=this.oi.Jr(n);return L.resolve(r)}containsKey(e,n){return L.resolve(this.oi.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iE{constructor(e,n){this.ai={},this.overlays={},this.ui=new Cu(0),this.ci=!1,this.ci=!0,this.li=new VC,this.referenceDelegate=e(this),this.hi=new UC(this),this.indexManager=new IC,this.remoteDocumentCache=function(i){return new MC(i)}(r=>this.referenceDelegate.Pi(r)),this.serializer=new EC(n),this.Ti=new DC(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new OC,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.ai[e.toKey()];return r||(r=new LC(n,this.referenceDelegate),this.ai[e.toKey()]=r),r}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(e,n,r){$("MemoryPersistence","Starting transaction:",e);const i=new FC(this.ui.next());return this.referenceDelegate.Ii(),r(i).next(s=>this.referenceDelegate.di(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ei(e,n){return L.or(Object.values(this.ai).map(r=>()=>r.containsKey(e,n)))}}class FC extends fk{constructor(e){super(),this.currentSequenceNumber=e}}class Ff{constructor(e){this.persistence=e,this.Ai=new Uf,this.Ri=null}static Vi(e){return new Ff(e)}get mi(){if(this.Ri)return this.Ri;throw Q(60996)}addReference(e,n,r){return this.Ai.addReference(r,n),this.mi.delete(r.toString()),L.resolve()}removeReference(e,n,r){return this.Ai.removeReference(r,n),this.mi.add(r.toString()),L.resolve()}markPotentiallyOrphaned(e,n){return this.mi.add(n.toString()),L.resolve()}removeTarget(e,n){this.Ai.zr(n.targetId).forEach(i=>this.mi.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.mi.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Ii(){this.Ri=new Set}di(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return L.forEach(this.mi,r=>{const i=K.fromPath(r);return this.fi(e,i).next(s=>{s||n.removeEntry(i,Y.min())})}).next(()=>(this.Ri=null,n.apply(e)))}updateLimboDocument(e,n){return this.fi(e,n).next(r=>{r?this.mi.delete(n.toString()):this.mi.add(n.toString())})}Pi(e){return 0}fi(e,n){return L.or([()=>L.resolve(this.Ai.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ei(e,n)])}}class ru{constructor(e,n){this.persistence=e,this.gi=new yi(r=>gk(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=CC(this,n)}static Vi(e,n){return new ru(e,n)}Ii(){}di(e){return L.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}mr(e){const n=this.yr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}yr(e){let n=0;return this.gr(e,r=>{n++}).next(()=>n)}gr(e,n){return L.forEach(this.gi,(r,i)=>this.Sr(e,r,i).next(s=>s?L.resolve():n(i)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const i=this.persistence.getRemoteDocumentCache(),s=i.newChangeBuffer();return i.ri(e,o=>this.Sr(e,o,n).next(l=>{l||(r++,s.removeEntry(o,Y.min()))})).next(()=>s.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.gi.set(n,e.currentSequenceNumber),L.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.gi.set(r,e.currentSequenceNumber),L.resolve()}removeReference(e,n,r){return this.gi.set(r,e.currentSequenceNumber),L.resolve()}updateLimboDocument(e,n){return this.gi.set(n,e.currentSequenceNumber),L.resolve()}Pi(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=fl(e.data.value)),n}Sr(e,n,r){return L.or([()=>this.persistence.Ei(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const i=this.gi.get(n);return L.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zf{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Is=r,this.ds=i}static Es(e,n){let r=ie(),i=ie();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new zf(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zC{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BC{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=function(){return v1()?8:pk(ct())>0?6:4}()}initialize(e,n){this.gs=e,this.indexManager=n,this.As=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.ps(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.ys(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new zC;return this.ws(e,n,o).next(l=>{if(s.result=l,this.Rs)return this.Ss(e,n,o,l.size)})}).next(()=>s.result)}Ss(e,n,r,i){return r.documentReadCount<this.Vs?(xi()<=re.DEBUG&&$("QueryEngine","SDK will not create cache indexes for query:",Ai(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),L.resolve()):(xi()<=re.DEBUG&&$("QueryEngine","Query:",Ai(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.fs*i?(xi()<=re.DEBUG&&$("QueryEngine","The SDK decides to create cache indexes for query:",Ai(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,gn(n))):L.resolve())}ps(e,n){if(my(n))return L.resolve(null);let r=gn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=id(n,null,"F"),r=gn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=ie(...s);return this.gs.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const c=this.bs(n,l);return this.Ds(n,c,o,u.readTime)?this.ps(e,id(n,null,"F")):this.vs(e,c,n,u)}))})))}ys(e,n,r,i){return my(n)||i.isEqual(Y.min())?L.resolve(null):this.gs.getDocuments(e,r).next(s=>{const o=this.bs(n,s);return this.Ds(n,o,r,i)?L.resolve(null):(xi()<=re.DEBUG&&$("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Ai(n)),this.vs(e,o,n,uk(i,Uo)).next(l=>l))})}bs(e,n){let r=new Fe(V0(e));return n.forEach((i,s)=>{Ou(e,s)&&(r=r.add(s))}),r}Ds(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}ws(e,n,r){return xi()<=re.DEBUG&&$("QueryEngine","Using full collection scan to execute query:",Ai(n)),this.gs.getDocumentsMatchingQuery(e,n,Rr.min(),r)}vs(e,n,r,i){return this.gs.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bf="LocalStore",$C=3e8;class HC{constructor(e,n,r,i){this.persistence=e,this.Cs=n,this.serializer=i,this.Fs=new Re(ee),this.Ms=new yi(s=>bf(s),Df),this.xs=new Map,this.Os=e.getRemoteDocumentCache(),this.hi=e.getTargetCache(),this.Ti=e.getBundleCache(),this.Ns(r)}Ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new bC(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Fs))}}function WC(t,e,n,r){return new HC(t,e,n,r)}async function sE(t,e){const n=J(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.Ns(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],l=[];let u=ie();for(const c of i){o.push(c.batchId);for(const f of c.mutations)u=u.add(f.key)}for(const c of s){l.push(c.batchId);for(const f of c.mutations)u=u.add(f.key)}return n.localDocuments.getDocuments(r,u).next(c=>({Bs:c,removedBatchIds:o,addedBatchIds:l}))})})}function qC(t,e){const n=J(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.Os.newChangeBuffer({trackRemovals:!0});return function(l,u,c,f){const p=c.batch,m=p.keys();let x=L.resolve();return m.forEach(k=>{x=x.next(()=>f.getEntry(u,k)).next(N=>{const O=c.docVersions.get(k);he(O!==null,48541),N.version.compareTo(O)<0&&(p.applyToRemoteDocument(N,c),N.isValidDocument()&&(N.setReadTime(c.commitVersion),f.addEntry(N)))})}),x.next(()=>l.mutationQueue.removeMutationBatch(u,p))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=ie();for(let c=0;c<l.mutationResults.length;++c)l.mutationResults[c].transformResults.length>0&&(u=u.add(l.batch.mutations[c].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function oE(t){const e=J(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.hi.getLastRemoteSnapshotVersion(n))}function KC(t,e){const n=J(t),r=e.snapshotVersion;let i=n.Fs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Os.newChangeBuffer({trackRemovals:!0});i=n.Fs;const l=[];e.targetChanges.forEach((f,p)=>{const m=i.get(p);if(!m)return;l.push(n.hi.removeMatchingKeys(s,f.removedDocuments,p).next(()=>n.hi.addMatchingKeys(s,f.addedDocuments,p)));let x=m.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(p)!==null?x=x.withResumeToken(Ze.EMPTY_BYTE_STRING,Y.min()).withLastLimboFreeSnapshotVersion(Y.min()):f.resumeToken.approximateByteSize()>0&&(x=x.withResumeToken(f.resumeToken,r)),i=i.insert(p,x),function(N,O,w){return N.resumeToken.approximateByteSize()===0||O.snapshotVersion.toMicroseconds()-N.snapshotVersion.toMicroseconds()>=$C?!0:w.addedDocuments.size+w.modifiedDocuments.size+w.removedDocuments.size>0}(m,x,f)&&l.push(n.hi.updateTargetData(s,x))});let u=Hn(),c=ie();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(s,f))}),l.push(GC(s,o,e.documentUpdates).next(f=>{u=f.Ls,c=f.ks})),!r.isEqual(Y.min())){const f=n.hi.getLastRemoteSnapshotVersion(s).next(p=>n.hi.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(f)}return L.waitFor(l).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,c)).next(()=>u)}).then(s=>(n.Fs=i,s))}function GC(t,e,n){let r=ie(),i=ie();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Hn();return n.forEach((l,u)=>{const c=s.get(l);u.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(l)),u.isNoDocument()&&u.version.isEqual(Y.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):$(Bf,"Ignoring outdated watch update for ",l,". Current version:",c.version," Watch version:",u.version)}),{Ls:o,ks:i}})}function QC(t,e){const n=J(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=Cf),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function XC(t,e){const n=J(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.hi.getTargetData(r,e).next(s=>s?(i=s,L.resolve(i)):n.hi.allocateTargetId(r).next(o=>(i=new cr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.hi.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Fs.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Fs=n.Fs.insert(r.targetId,r),n.Ms.set(e,r.targetId)),r})}async function ud(t,e,n){const r=J(t),i=r.Fs.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!_s(o))throw o;$(Bf,`Failed to update sequence numbers for target ${e}: ${o}`)}r.Fs=r.Fs.remove(e),r.Ms.delete(i.target)}function ky(t,e,n){const r=J(t);let i=Y.min(),s=ie();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,f){const p=J(u),m=p.Ms.get(f);return m!==void 0?L.resolve(p.Fs.get(m)):p.hi.getTargetData(c,f)}(r,o,gn(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.hi.getMatchingKeysForTargetId(o,l.targetId).next(u=>{s=u})}).next(()=>r.Cs.getDocumentsMatchingQuery(o,e,n?i:Y.min(),n?s:ie())).next(l=>(YC(r,Lk(e),l),{documents:l,qs:s})))}function YC(t,e,n){let r=t.xs.get(e)||Y.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.xs.set(e,r)}class Cy{constructor(){this.activeTargetIds=Bk()}Gs(e){this.activeTargetIds=this.activeTargetIds.add(e)}zs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class JC{constructor(){this.Fo=new Cy,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.Fo.Gs(e),this.Mo[e]||"not-current"}updateQueryState(e,n,r){this.Mo[e]=n}removeLocalQueryTarget(e){this.Fo.zs(e)}isLocalQueryTarget(e){return this.Fo.activeTargetIds.has(e)}clearQueryState(e){delete this.Mo[e]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(e){return this.Fo.activeTargetIds.has(e)}start(){return this.Fo=new Cy,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZC{xo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Py="ConnectivityMonitor";class Ny{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(e){this.ko.push(e)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){$(Py,"Network connectivity changed: AVAILABLE");for(const e of this.ko)e(0)}Lo(){$(Py,"Network connectivity changed: UNAVAILABLE");for(const e of this.ko)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ka=null;function cd(){return Ka===null?Ka=function(){return 268435456+Math.round(2147483648*Math.random())}():Ka++,"0x"+Ka.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fc="RestConnection",eP={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class tP{get Qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.$o=n+"://"+e.host,this.Uo=`projects/${r}/databases/${i}`,this.Ko=this.databaseId.database===Yl?`project_id=${r}`:`project_id=${r}&database_id=${i}`}Wo(e,n,r,i,s){const o=cd(),l=this.Go(e,n.toUriEncodedString());$(Fc,`Sending RPC '${e}' ${o}:`,l,r);const u={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(u,i,s);const{host:c}=new URL(l),f=Lr(c);return this.jo(e,l,u,r,f).then(p=>($(Fc,`Received RPC '${e}' ${o}: `,p),p),p=>{throw Ar(Fc,`RPC '${e}' ${o} failed with error: `,p,"url: ",l,"request:",r),p})}Jo(e,n,r,i,s,o){return this.Wo(e,n,r,i,s)}zo(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+gs}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}Go(e,n){const r=eP[e];return`${this.$o}/v1/${n}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nP{constructor(e){this.Ho=e.Ho,this.Yo=e.Yo}Zo(e){this.Xo=e}e_(e){this.t_=e}n_(e){this.r_=e}onMessage(e){this.i_=e}close(){this.Yo()}send(e){this.Ho(e)}s_(){this.Xo()}o_(){this.t_()}__(e){this.r_(e)}a_(e){this.i_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const st="WebChannelConnection";class rP extends tP{constructor(e){super(e),this.u_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}jo(e,n,r,i,s){const o=cd();return new Promise((l,u)=>{const c=new u0;c.setWithCredentials(!0),c.listenOnce(c0.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case dl.NO_ERROR:const p=c.getResponseJson();$(st,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(p)),l(p);break;case dl.TIMEOUT:$(st,`RPC '${e}' ${o} timed out`),u(new q(j.DEADLINE_EXCEEDED,"Request time out"));break;case dl.HTTP_ERROR:const m=c.getStatus();if($(st,`RPC '${e}' ${o} failed with status:`,m,"response text:",c.getResponseText()),m>0){let x=c.getResponseJson();Array.isArray(x)&&(x=x[0]);const k=x==null?void 0:x.error;if(k&&k.status&&k.message){const N=function(w){const g=w.toLowerCase().replace(/_/g,"-");return Object.values(j).indexOf(g)>=0?g:j.UNKNOWN}(k.status);u(new q(N,k.message))}else u(new q(j.UNKNOWN,"Server responded with status "+c.getStatus()))}else u(new q(j.UNAVAILABLE,"Connection failed."));break;default:Q(9055,{c_:e,streamId:o,l_:c.getLastErrorCode(),h_:c.getLastError()})}}finally{$(st,`RPC '${e}' ${o} completed.`)}});const f=JSON.stringify(i);$(st,`RPC '${e}' ${o} sending request:`,i),c.send(n,"POST",f,r,15)})}P_(e,n,r){const i=cd(),s=[this.$o,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=f0(),l=d0(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(u.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(u.useFetchStreams=!0),this.zo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const f=s.join("");$(st,`Creating RPC '${e}' stream ${i}: ${f}`,u);const p=o.createWebChannel(f,u);this.T_(p);let m=!1,x=!1;const k=new nP({Ho:O=>{x?$(st,`Not sending because RPC '${e}' stream ${i} is closed:`,O):(m||($(st,`Opening RPC '${e}' stream ${i} transport.`),p.open(),m=!0),$(st,`RPC '${e}' stream ${i} sending:`,O),p.send(O))},Yo:()=>p.close()}),N=(O,w,g)=>{O.listen(w,I=>{try{g(I)}catch(b){setTimeout(()=>{throw b},0)}})};return N(p,Ys.EventType.OPEN,()=>{x||($(st,`RPC '${e}' stream ${i} transport opened.`),k.s_())}),N(p,Ys.EventType.CLOSE,()=>{x||(x=!0,$(st,`RPC '${e}' stream ${i} transport closed`),k.__(),this.I_(p))}),N(p,Ys.EventType.ERROR,O=>{x||(x=!0,Ar(st,`RPC '${e}' stream ${i} transport errored. Name:`,O.name,"Message:",O.message),k.__(new q(j.UNAVAILABLE,"The operation could not be completed")))}),N(p,Ys.EventType.MESSAGE,O=>{var w;if(!x){const g=O.data[0];he(!!g,16349);const I=g,b=(I==null?void 0:I.error)||((w=I[0])===null||w===void 0?void 0:w.error);if(b){$(st,`RPC '${e}' stream ${i} received error:`,b);const D=b.status;let M=function(S){const E=Oe[S];if(E!==void 0)return K0(E)}(D),T=b.message;M===void 0&&(M=j.INTERNAL,T="Unknown error status: "+D+" with message "+b.message),x=!0,k.__(new q(M,T)),p.close()}else $(st,`RPC '${e}' stream ${i} received:`,g),k.a_(g)}}),N(l,h0.STAT_EVENT,O=>{O.stat===Jh.PROXY?$(st,`RPC '${e}' stream ${i} detected buffering proxy`):O.stat===Jh.NOPROXY&&$(st,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{k.o_()},0),k}terminate(){this.u_.forEach(e=>e.close()),this.u_=[]}T_(e){this.u_.push(e)}I_(e){this.u_=this.u_.filter(n=>n===e)}}function zc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ju(t){return new aC(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aE{constructor(e,n,r=1e3,i=1.5,s=6e4){this.Fi=e,this.timerId=n,this.d_=r,this.E_=i,this.A_=s,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();const n=Math.floor(this.R_+this.p_()),r=Math.max(0,Date.now()-this.m_),i=Math.max(0,n-r);i>0&&$("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.R_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,i,()=>(this.m_=Date.now(),e())),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const by="PersistentStream";class lE{constructor(e,n,r,i,s,o,l,u){this.Fi=e,this.w_=r,this.S_=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new aE(e,n)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,()=>this.L_()))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,e!==4?this.F_.reset():n&&n.code===j.RESOURCE_EXHAUSTED?($n(n.toString()),$n("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):n&&n.code===j.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.n_(n)}U_(){}auth(){this.state=1;const e=this.K_(this.b_),n=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.b_===n&&this.W_(r,i)},r=>{e(()=>{const i=new q(j.UNKNOWN,"Fetching auth token failed: "+r.message);return this.G_(i)})})}W_(e,n){const r=this.K_(this.b_);this.stream=this.z_(e,n),this.stream.Zo(()=>{r(()=>this.listener.Zo())}),this.stream.e_(()=>{r(()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,()=>(this.x_()&&(this.state=3),Promise.resolve())),this.listener.e_()))}),this.stream.n_(i=>{r(()=>this.G_(i))}),this.stream.onMessage(i=>{r(()=>++this.C_==1?this.j_(i):this.onNext(i))})}O_(){this.state=5,this.F_.g_(async()=>{this.state=0,this.start()})}G_(e){return $(by,`close with error: ${e}`),this.stream=null,this.close(4,e)}K_(e){return n=>{this.Fi.enqueueAndForget(()=>this.b_===e?n():($(by,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class iP extends lE{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}z_(e,n){return this.connection.P_("Listen",e,n)}j_(e){return this.onNext(e)}onNext(e){this.F_.reset();const n=cC(this.serializer,e),r=function(s){if(!("targetChange"in s))return Y.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?Y.min():o.readTime?yn(o.readTime):Y.min()}(e);return this.listener.J_(n,r)}H_(e){const n={};n.database=ld(this.serializer),n.addTarget=function(s,o){let l;const u=o.target;if(l=rd(u)?{documents:fC(s,u)}:{query:pC(s,u).Vt},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=X0(s,o.resumeToken);const c=sd(s,o.expectedCount);c!==null&&(l.expectedCount=c)}else if(o.snapshotVersion.compareTo(Y.min())>0){l.readTime=nu(s,o.snapshotVersion.toTimestamp());const c=sd(s,o.expectedCount);c!==null&&(l.expectedCount=c)}return l}(this.serializer,e);const r=gC(this.serializer,e);r&&(n.labels=r),this.k_(n)}Y_(e){const n={};n.database=ld(this.serializer),n.removeTarget=e,this.k_(n)}}class sP extends lE{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(e,n){return this.connection.P_("Write",e,n)}j_(e){return he(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,he(!e.writeResults||e.writeResults.length===0,55816),this.listener.ea()}onNext(e){he(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.F_.reset();const n=dC(e.writeResults,e.commitTime),r=yn(e.commitTime);return this.listener.ta(r,n)}na(){const e={};e.database=ld(this.serializer),this.k_(e)}X_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>hC(this.serializer,r))};this.k_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oP{}class aP extends oP{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.ra=!1}ia(){if(this.ra)throw new q(j.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,n,r,i){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Wo(e,od(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===j.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new q(j.UNKNOWN,s.toString())})}Jo(e,n,r,i,s){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Jo(e,od(n,r),i,o,l,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===j.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new q(j.UNKNOWN,o.toString())})}terminate(){this.ra=!0,this.connection.terminate()}}class lP{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve())))}la(e){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,e==="Online"&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?($n(n),this._a=!1):$("OnlineStateTracker",n)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ci="RemoteStore";class uP{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=s,this.Ea.xo(o=>{r.enqueueAndForget(async()=>{vi(this)&&($(ci,"Restarting streams for network reachability change."),await async function(u){const c=J(u);c.Ia.add(4),await aa(c),c.Aa.set("Unknown"),c.Ia.delete(4),await Uu(c)}(this))})}),this.Aa=new lP(r,i)}}async function Uu(t){if(vi(t))for(const e of t.da)await e(!0)}async function aa(t){for(const e of t.da)await e(!1)}function uE(t,e){const n=J(t);n.Ta.has(e.targetId)||(n.Ta.set(e.targetId,e),qf(n)?Wf(n):vs(n).x_()&&Hf(n,e))}function $f(t,e){const n=J(t),r=vs(n);n.Ta.delete(e),r.x_()&&cE(n,e),n.Ta.size===0&&(r.x_()?r.B_():vi(n)&&n.Aa.set("Unknown"))}function Hf(t,e){if(t.Ra.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Y.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}vs(t).H_(e)}function cE(t,e){t.Ra.$e(e),vs(t).Y_(e)}function Wf(t){t.Ra=new rC({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>t.Ta.get(e)||null,lt:()=>t.datastore.serializer.databaseId}),vs(t).start(),t.Aa.aa()}function qf(t){return vi(t)&&!vs(t).M_()&&t.Ta.size>0}function vi(t){return J(t).Ia.size===0}function hE(t){t.Ra=void 0}async function cP(t){t.Aa.set("Online")}async function hP(t){t.Ta.forEach((e,n)=>{Hf(t,e)})}async function dP(t,e){hE(t),qf(t)?(t.Aa.la(e),Wf(t)):t.Aa.set("Unknown")}async function fP(t,e,n){if(t.Aa.set("Online"),e instanceof Q0&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const l of s.targetIds)i.Ta.has(l)&&(await i.remoteSyncer.rejectListen(l,o),i.Ta.delete(l),i.Ra.removeTarget(l))}(t,e)}catch(r){$(ci,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await iu(t,r)}else if(e instanceof gl?t.Ra.Ye(e):e instanceof G0?t.Ra.it(e):t.Ra.et(e),!n.isEqual(Y.min()))try{const r=await oE(t.localStore);n.compareTo(r)>=0&&await function(s,o){const l=s.Ra.Pt(o);return l.targetChanges.forEach((u,c)=>{if(u.resumeToken.approximateByteSize()>0){const f=s.Ta.get(c);f&&s.Ta.set(c,f.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,c)=>{const f=s.Ta.get(u);if(!f)return;s.Ta.set(u,f.withResumeToken(Ze.EMPTY_BYTE_STRING,f.snapshotVersion)),cE(s,u);const p=new cr(f.target,u,c,f.sequenceNumber);Hf(s,p)}),s.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){$(ci,"Failed to raise snapshot:",r),await iu(t,r)}}async function iu(t,e,n){if(!_s(e))throw e;t.Ia.add(1),await aa(t),t.Aa.set("Offline"),n||(n=()=>oE(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{$(ci,"Retrying IndexedDB access"),await n(),t.Ia.delete(1),await Uu(t)})}function dE(t,e){return e().catch(n=>iu(t,n,e))}async function Fu(t){const e=J(t),n=Nr(e);let r=e.Pa.length>0?e.Pa[e.Pa.length-1].batchId:Cf;for(;pP(e);)try{const i=await QC(e.localStore,r);if(i===null){e.Pa.length===0&&n.B_();break}r=i.batchId,mP(e,i)}catch(i){await iu(e,i)}fE(e)&&pE(e)}function pP(t){return vi(t)&&t.Pa.length<10}function mP(t,e){t.Pa.push(e);const n=Nr(t);n.x_()&&n.Z_&&n.X_(e.mutations)}function fE(t){return vi(t)&&!Nr(t).M_()&&t.Pa.length>0}function pE(t){Nr(t).start()}async function gP(t){Nr(t).na()}async function yP(t){const e=Nr(t);for(const n of t.Pa)e.X_(n.mutations)}async function _P(t,e,n){const r=t.Pa.shift(),i=Lf.from(r,e,n);await dE(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Fu(t)}async function vP(t,e){e&&Nr(t).Z_&&await async function(r,i){if(function(o){return tC(o)&&o!==j.ABORTED}(i.code)){const s=r.Pa.shift();Nr(r).N_(),await dE(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Fu(r)}}(t,e),fE(t)&&pE(t)}async function Dy(t,e){const n=J(t);n.asyncQueue.verifyOperationInProgress(),$(ci,"RemoteStore received new credentials");const r=vi(n);n.Ia.add(3),await aa(n),r&&n.Aa.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ia.delete(3),await Uu(n)}async function wP(t,e){const n=J(t);e?(n.Ia.delete(2),await Uu(n)):e||(n.Ia.add(2),await aa(n),n.Aa.set("Unknown"))}function vs(t){return t.Va||(t.Va=function(n,r,i){const s=J(n);return s.ia(),new iP(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Zo:cP.bind(null,t),e_:hP.bind(null,t),n_:dP.bind(null,t),J_:fP.bind(null,t)}),t.da.push(async e=>{e?(t.Va.N_(),qf(t)?Wf(t):t.Aa.set("Unknown")):(await t.Va.stop(),hE(t))})),t.Va}function Nr(t){return t.ma||(t.ma=function(n,r,i){const s=J(n);return s.ia(),new sP(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Zo:()=>Promise.resolve(),e_:gP.bind(null,t),n_:vP.bind(null,t),ea:yP.bind(null,t),ta:_P.bind(null,t)}),t.da.push(async e=>{e?(t.ma.N_(),await Fu(t)):(await t.ma.stop(),t.Pa.length>0&&($(ci,`Stopping write stream with ${t.Pa.length} pending writes`),t.Pa=[]))})),t.ma}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kf{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Tr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,l=new Kf(e,n,o,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new q(j.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Gf(t,e){if($n("AsyncQueue",`${e}: ${t}`),_s(t))return new q(j.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ji{static emptySet(e){return new Ji(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||K.comparator(n.key,r.key):(n,r)=>K.comparator(n.key,r.key),this.keyedMap=Js(),this.sortedSet=new Re(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Ji)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Ji;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oy{constructor(){this.fa=new Re(K.comparator)}track(e){const n=e.doc.key,r=this.fa.get(n);r?e.type!==0&&r.type===3?this.fa=this.fa.insert(n,e):e.type===3&&r.type!==1?this.fa=this.fa.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.fa=this.fa.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.fa=this.fa.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.fa=this.fa.remove(n):e.type===1&&r.type===2?this.fa=this.fa.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.fa=this.fa.insert(n,{type:2,doc:e.doc}):Q(63341,{At:e,ga:r}):this.fa=this.fa.insert(n,e)}pa(){const e=[];return this.fa.inorderTraversal((n,r)=>{e.push(r)}),e}}class hs{constructor(e,n,r,i,s,o,l,u,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new hs(e,n,Ji.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Du(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EP{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some(e=>e.ba())}}class TP{constructor(){this.queries=Vy(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(n,r){const i=J(n),s=i.queries;i.queries=Vy(),s.forEach((o,l)=>{for(const u of l.wa)u.onError(r)})})(this,new q(j.ABORTED,"Firestore shutting down"))}}function Vy(){return new yi(t=>O0(t),Du)}async function IP(t,e){const n=J(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.Sa()&&e.ba()&&(r=2):(s=new EP,r=e.ba()?0:1);try{switch(r){case 0:s.ya=await n.onListen(i,!0);break;case 1:s.ya=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const l=Gf(o,`Initialization of query '${Ai(e.query)}' failed`);return void e.onError(l)}n.queries.set(i,s),s.wa.push(e),e.va(n.onlineState),s.ya&&e.Ca(s.ya)&&Qf(n)}async function SP(t,e){const n=J(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.wa.indexOf(e);o>=0&&(s.wa.splice(o,1),s.wa.length===0?i=e.ba()?0:1:!s.Sa()&&e.ba()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function xP(t,e){const n=J(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const l of o.wa)l.Ca(i)&&(r=!0);o.ya=i}}r&&Qf(n)}function AP(t,e,n){const r=J(t),i=r.queries.get(e);if(i)for(const s of i.wa)s.onError(n);r.queries.delete(e)}function Qf(t){t.Da.forEach(e=>{e.next()})}var hd,Ly;(Ly=hd||(hd={})).Fa="default",Ly.Cache="cache";class RP{constructor(e,n,r){this.query=e,this.Ma=n,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=r||{}}Ca(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new hs(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.xa?this.Na(e)&&(this.Ma.next(e),n=!0):this.Ba(e,this.onlineState)&&(this.La(e),n=!0),this.Oa=e,n}onError(e){this.Ma.error(e)}va(e){this.onlineState=e;let n=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,e)&&(this.La(this.Oa),n=!0),n}Ba(e,n){if(!e.fromCache||!this.ba())return!0;const r=n!=="Offline";return(!this.options.ka||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Na(e){if(e.docChanges.length>0)return!0;const n=this.Oa&&this.Oa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}La(e){e=hs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.xa=!0,this.Ma.next(e)}ba(){return this.options.source!==hd.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mE{constructor(e){this.key=e}}class gE{constructor(e){this.key=e}}class kP{constructor(e,n){this.query=e,this.Ha=n,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=ie(),this.mutatedKeys=ie(),this.Xa=V0(e),this.eu=new Ji(this.Xa)}get tu(){return this.Ha}nu(e,n){const r=n?n.ru:new Oy,i=n?n.eu:this.eu;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,l=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((f,p)=>{const m=i.get(f),x=Ou(this.query,p)?p:null,k=!!m&&this.mutatedKeys.has(m.key),N=!!x&&(x.hasLocalMutations||this.mutatedKeys.has(x.key)&&x.hasCommittedMutations);let O=!1;m&&x?m.data.isEqual(x.data)?k!==N&&(r.track({type:3,doc:x}),O=!0):this.iu(m,x)||(r.track({type:2,doc:x}),O=!0,(u&&this.Xa(x,u)>0||c&&this.Xa(x,c)<0)&&(l=!0)):!m&&x?(r.track({type:0,doc:x}),O=!0):m&&!x&&(r.track({type:1,doc:m}),O=!0,(u||c)&&(l=!0)),O&&(x?(o=o.add(x),s=N?s.add(f):s.delete(f)):(o=o.delete(f),s=s.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),s=s.delete(f.key),r.track({type:1,doc:f})}return{eu:o,ru:r,Ds:l,mutatedKeys:s}}iu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.eu;this.eu=e.eu,this.mutatedKeys=e.mutatedKeys;const o=e.ru.pa();o.sort((f,p)=>function(x,k){const N=O=>{switch(O){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Q(20277,{At:O})}};return N(x)-N(k)}(f.type,p.type)||this.Xa(f.doc,p.doc)),this.su(r),i=i!=null&&i;const l=n&&!i?this.ou():[],u=this.Za.size===0&&this.current&&!i?1:0,c=u!==this.Ya;return this.Ya=u,o.length!==0||c?{snapshot:new hs(this.query,e.eu,s,o,e.mutatedKeys,u===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),_u:l}:{_u:l}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new Oy,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(e){return!this.Ha.has(e)&&!!this.eu.has(e)&&!this.eu.get(e).hasLocalMutations}su(e){e&&(e.addedDocuments.forEach(n=>this.Ha=this.Ha.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ha=this.Ha.delete(n)),this.current=e.current)}ou(){if(!this.current)return[];const e=this.Za;this.Za=ie(),this.eu.forEach(r=>{this.au(r.key)&&(this.Za=this.Za.add(r.key))});const n=[];return e.forEach(r=>{this.Za.has(r)||n.push(new gE(r))}),this.Za.forEach(r=>{e.has(r)||n.push(new mE(r))}),n}uu(e){this.Ha=e.qs,this.Za=ie();const n=this.nu(e.documents);return this.applyChanges(n,!0)}cu(){return hs.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}}const Xf="SyncEngine";class CP{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class PP{constructor(e){this.key=e,this.lu=!1}}class NP{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.hu={},this.Pu=new yi(l=>O0(l),Du),this.Tu=new Map,this.Iu=new Set,this.du=new Re(K.comparator),this.Eu=new Map,this.Au=new Uf,this.Ru={},this.Vu=new Map,this.mu=cs.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}async function bP(t,e,n=!0){const r=TE(t);let i;const s=r.Pu.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.cu()):i=await yE(r,e,n,!0),i}async function DP(t,e){const n=TE(t);await yE(n,e,!0,!1)}async function yE(t,e,n,r){const i=await XC(t.localStore,gn(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let l;return r&&(l=await OP(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&uE(t.remoteStore,i),l}async function OP(t,e,n,r,i){t.gu=(p,m,x)=>async function(N,O,w,g){let I=O.view.nu(w);I.Ds&&(I=await ky(N.localStore,O.query,!1).then(({documents:T})=>O.view.nu(T,I)));const b=g&&g.targetChanges.get(O.targetId),D=g&&g.targetMismatches.get(O.targetId)!=null,M=O.view.applyChanges(I,N.isPrimaryClient,b,D);return jy(N,O.targetId,M._u),M.snapshot}(t,p,m,x);const s=await ky(t.localStore,e,!0),o=new kP(e,s.qs),l=o.nu(s.documents),u=oa.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),c=o.applyChanges(l,t.isPrimaryClient,u);jy(t,n,c._u);const f=new CP(e,n,o);return t.Pu.set(e,f),t.Tu.has(n)?t.Tu.get(n).push(e):t.Tu.set(n,[e]),c.snapshot}async function VP(t,e,n){const r=J(t),i=r.Pu.get(e),s=r.Tu.get(i.targetId);if(s.length>1)return r.Tu.set(i.targetId,s.filter(o=>!Du(o,e))),void r.Pu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await ud(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&$f(r.remoteStore,i.targetId),dd(r,i.targetId)}).catch(ys)):(dd(r,i.targetId),await ud(r.localStore,i.targetId,!0))}async function LP(t,e){const n=J(t),r=n.Pu.get(e),i=n.Tu.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),$f(n.remoteStore,r.targetId))}async function MP(t,e,n){const r=HP(t);try{const i=await function(o,l){const u=J(o),c=_e.now(),f=l.reduce((x,k)=>x.add(k.key),ie());let p,m;return u.persistence.runTransaction("Locally write mutations","readwrite",x=>{let k=Hn(),N=ie();return u.Os.getEntries(x,f).next(O=>{k=O,k.forEach((w,g)=>{g.isValidDocument()||(N=N.add(w))})}).next(()=>u.localDocuments.getOverlayedDocuments(x,k)).next(O=>{p=O;const w=[];for(const g of l){const I=Xk(g,p.get(g.key).overlayedDocument);I!=null&&w.push(new _i(g.key,I,R0(I.value.mapValue),Ln.exists(!0)))}return u.mutationQueue.addMutationBatch(x,c,w,l)}).next(O=>{m=O;const w=O.applyToLocalDocumentSet(p,N);return u.documentOverlayCache.saveOverlays(x,O.batchId,w)})}).then(()=>({batchId:m.batchId,changes:M0(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,l,u){let c=o.Ru[o.currentUser.toKey()];c||(c=new Re(ee)),c=c.insert(l,u),o.Ru[o.currentUser.toKey()]=c}(r,i.batchId,n),await la(r,i.changes),await Fu(r.remoteStore)}catch(i){const s=Gf(i,"Failed to persist write");n.reject(s)}}async function _E(t,e){const n=J(t);try{const r=await KC(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Eu.get(s);o&&(he(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1,22616),i.addedDocuments.size>0?o.lu=!0:i.modifiedDocuments.size>0?he(o.lu,14607):i.removedDocuments.size>0&&(he(o.lu,42227),o.lu=!1))}),await la(n,r,e)}catch(r){await ys(r)}}function My(t,e,n){const r=J(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Pu.forEach((s,o)=>{const l=o.view.va(e);l.snapshot&&i.push(l.snapshot)}),function(o,l){const u=J(o);u.onlineState=l;let c=!1;u.queries.forEach((f,p)=>{for(const m of p.wa)m.va(l)&&(c=!0)}),c&&Qf(u)}(r.eventManager,e),i.length&&r.hu.J_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function jP(t,e,n){const r=J(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Eu.get(e),s=i&&i.key;if(s){let o=new Re(K.comparator);o=o.insert(s,lt.newNoDocument(s,Y.min()));const l=ie().add(s),u=new Mu(Y.min(),new Map,new Re(ee),o,l);await _E(r,u),r.du=r.du.remove(s),r.Eu.delete(e),Yf(r)}else await ud(r.localStore,e,!1).then(()=>dd(r,e,n)).catch(ys)}async function UP(t,e){const n=J(t),r=e.batch.batchId;try{const i=await qC(n.localStore,e);wE(n,r,null),vE(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await la(n,i)}catch(i){await ys(i)}}async function FP(t,e,n){const r=J(t);try{const i=await function(o,l){const u=J(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let f;return u.mutationQueue.lookupMutationBatch(c,l).next(p=>(he(p!==null,37113),f=p.keys(),u.mutationQueue.removeMutationBatch(c,p))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,f,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,f)).next(()=>u.localDocuments.getDocuments(c,f))})}(r.localStore,e);wE(r,e,n),vE(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await la(r,i)}catch(i){await ys(i)}}function vE(t,e){(t.Vu.get(e)||[]).forEach(n=>{n.resolve()}),t.Vu.delete(e)}function wE(t,e,n){const r=J(t);let i=r.Ru[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Ru[r.currentUser.toKey()]=i}}function dd(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Tu.get(e))t.Pu.delete(r),n&&t.hu.pu(r,n);t.Tu.delete(e),t.isPrimaryClient&&t.Au.zr(e).forEach(r=>{t.Au.containsKey(r)||EE(t,r)})}function EE(t,e){t.Iu.delete(e.path.canonicalString());const n=t.du.get(e);n!==null&&($f(t.remoteStore,n),t.du=t.du.remove(e),t.Eu.delete(n),Yf(t))}function jy(t,e,n){for(const r of n)r instanceof mE?(t.Au.addReference(r.key,e),zP(t,r)):r instanceof gE?($(Xf,"Document no longer in limbo: "+r.key),t.Au.removeReference(r.key,e),t.Au.containsKey(r.key)||EE(t,r.key)):Q(19791,{yu:r})}function zP(t,e){const n=e.key,r=n.path.canonicalString();t.du.get(n)||t.Iu.has(r)||($(Xf,"New document in limbo: "+n),t.Iu.add(r),Yf(t))}function Yf(t){for(;t.Iu.size>0&&t.du.size<t.maxConcurrentLimboResolutions;){const e=t.Iu.values().next().value;t.Iu.delete(e);const n=new K(Se.fromString(e)),r=t.mu.next();t.Eu.set(r,new PP(n)),t.du=t.du.insert(n,r),uE(t.remoteStore,new cr(gn(Of(n.path)),r,"TargetPurposeLimboResolution",Cu.ue))}}async function la(t,e,n){const r=J(t),i=[],s=[],o=[];r.Pu.isEmpty()||(r.Pu.forEach((l,u)=>{o.push(r.gu(u,e,n).then(c=>{var f;if((c||n)&&r.isPrimaryClient){const p=c?!c.fromCache:(f=n==null?void 0:n.targetChanges.get(u.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(u.targetId,p?"current":"not-current")}if(c){i.push(c);const p=zf.Es(u.targetId,c);s.push(p)}}))}),await Promise.all(o),r.hu.J_(i),await async function(u,c){const f=J(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>L.forEach(c,m=>L.forEach(m.Is,x=>f.persistence.referenceDelegate.addReference(p,m.targetId,x)).next(()=>L.forEach(m.ds,x=>f.persistence.referenceDelegate.removeReference(p,m.targetId,x)))))}catch(p){if(!_s(p))throw p;$(Bf,"Failed to update sequence numbers: "+p)}for(const p of c){const m=p.targetId;if(!p.fromCache){const x=f.Fs.get(m),k=x.snapshotVersion,N=x.withLastLimboFreeSnapshotVersion(k);f.Fs=f.Fs.insert(m,N)}}}(r.localStore,s))}async function BP(t,e){const n=J(t);if(!n.currentUser.isEqual(e)){$(Xf,"User change. New user:",e.toKey());const r=await sE(n.localStore,e);n.currentUser=e,function(s,o){s.Vu.forEach(l=>{l.forEach(u=>{u.reject(new q(j.CANCELLED,o))})}),s.Vu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await la(n,r.Bs)}}function $P(t,e){const n=J(t),r=n.Eu.get(e);if(r&&r.lu)return ie().add(r.key);{let i=ie();const s=n.Tu.get(e);if(!s)return i;for(const o of s){const l=n.Pu.get(o);i=i.unionWith(l.view.tu)}return i}}function TE(t){const e=J(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=_E.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=$P.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=jP.bind(null,e),e.hu.J_=xP.bind(null,e.eventManager),e.hu.pu=AP.bind(null,e.eventManager),e}function HP(t){const e=J(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=UP.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=FP.bind(null,e),e}class su{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=ju(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Du(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Cu(e,this.localStore),this.indexBackfillerScheduler=this.Fu(e,this.localStore)}Cu(e,n){return null}Fu(e,n){return null}vu(e){return WC(this.persistence,new BC,e.initialUser,this.serializer)}Du(e){return new iE(Ff.Vi,this.serializer)}bu(e){return new JC}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}su.provider={build:()=>new su};class WP extends su{constructor(e){super(),this.cacheSizeBytes=e}Cu(e,n){he(this.persistence.referenceDelegate instanceof ru,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new RC(r,e.asyncQueue,n)}Du(e){const n=this.cacheSizeBytes!==void 0?_t.withCacheSize(this.cacheSizeBytes):_t.DEFAULT;return new iE(r=>ru.Vi(r,n),this.serializer)}}class fd{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>My(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=BP.bind(null,this.syncEngine),await wP(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new TP}()}createDatastore(e){const n=ju(e.databaseInfo.databaseId),r=function(s){return new rP(s)}(e.databaseInfo);return function(s,o,l,u){return new aP(s,o,l,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,l){return new uP(r,i,s,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>My(this.syncEngine,n,0),function(){return Ny.C()?new Ny:new ZC}())}createSyncEngine(e,n){return function(i,s,o,l,u,c,f){const p=new NP(i,s,o,l,u,c);return f&&(p.fu=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=J(i);$(ci,"RemoteStore shutting down."),s.Ia.add(5),await aa(s),s.Ea.shutdown(),s.Aa.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}fd.provider={build:()=>new fd};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qP{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.xu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.xu(this.observer.error,e):$n("Uncaught Error in snapshot listener:",e.toString()))}Ou(){this.muted=!0}xu(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const br="FirestoreClient";class KP{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=ot.UNAUTHENTICATED,this.clientId=Rf.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{$(br,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>($(br,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Tr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Gf(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Bc(t,e){t.asyncQueue.verifyOperationInProgress(),$(br,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await sE(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>{Ar("Terminating Firestore due to IndexedDb database deletion"),t.terminate().then(()=>{$("Terminating Firestore due to IndexedDb database deletion completed successfully")}).catch(i=>{Ar("Terminating Firestore due to IndexedDb database deletion failed",i)})}),t._offlineComponents=e}async function Uy(t,e){t.asyncQueue.verifyOperationInProgress();const n=await GP(t);$(br,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Dy(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>Dy(e.remoteStore,i)),t._onlineComponents=e}async function GP(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){$(br,"Using user provided OfflineComponentProvider");try{await Bc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===j.FAILED_PRECONDITION||i.code===j.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;Ar("Error using user provided cache. Falling back to memory cache: "+n),await Bc(t,new su)}}else $(br,"Using default OfflineComponentProvider"),await Bc(t,new WP(void 0));return t._offlineComponents}async function IE(t){return t._onlineComponents||(t._uninitializedComponentsProvider?($(br,"Using user provided OnlineComponentProvider"),await Uy(t,t._uninitializedComponentsProvider._online)):($(br,"Using default OnlineComponentProvider"),await Uy(t,new fd))),t._onlineComponents}function QP(t){return IE(t).then(e=>e.syncEngine)}async function XP(t){const e=await IE(t),n=e.eventManager;return n.onListen=bP.bind(null,e.syncEngine),n.onUnlisten=VP.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=DP.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=LP.bind(null,e.syncEngine),n}function YP(t,e,n={}){const r=new Tr;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,u,c){const f=new qP({next:m=>{f.Ou(),o.enqueueAndForget(()=>SP(s,p));const x=m.docs.has(l);!x&&m.fromCache?c.reject(new q(j.UNAVAILABLE,"Failed to get document because the client is offline.")):x&&m.fromCache&&u&&u.source==="server"?c.reject(new q(j.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(m)},error:m=>c.reject(m)}),p=new RP(Of(l.path),f,{includeMetadataChanges:!0,ka:!0});return IP(s,p)}(await XP(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SE(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fy=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xE="firestore.googleapis.com",zy=!0;class By{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new q(j.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=xE,this.ssl=zy}else this.host=e.host,this.ssl=(n=e.ssl)!==null&&n!==void 0?n:zy;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=rE;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<xC)throw new q(j.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}lk("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=SE((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new q(j.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new q(j.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new q(j.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Jf{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new By({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new q(j.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new q(j.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new By(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new JR;switch(r.type){case"firstParty":return new nk(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new q(j.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Fy.get(n);r&&($("ComponentProvider","Removing Datastore"),Fy.delete(n),r.terminate())}(this),Promise.resolve()}}function JP(t,e,n,r={}){var i;t=jo(t,Jf);const s=Lr(e),o=t._getSettings(),l=Object.assign(Object.assign({},o),{emulatorOptions:t._getEmulatorOptions()}),u=`${e}:${n}`;s&&(hf(`https://${u}`),df("Firestore",!0)),o.host!==xE&&o.host!==u&&Ar("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const c=Object.assign(Object.assign({},o),{host:u,ssl:s,emulatorOptions:r});if(!si(c,l)&&(t._setSettings(c),r.mockUserToken)){let f,p;if(typeof r.mockUserToken=="string")f=r.mockUserToken,p=ot.MOCK_USER;else{f=Tw(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const m=r.mockUserToken.sub||r.mockUserToken.user_id;if(!m)throw new q(j.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new ot(m)}t._authCredentials=new ZR(new m0(f,p))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zf{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Zf(this.firestore,e,this._query)}}class He{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new qo(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new He(this.firestore,e,this._key)}toJSON(){return{type:He._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(ia(n,He._jsonSchema))return new He(e,r||null,new K(Se.fromString(n.referencePath)))}}He._jsonSchemaVersion="firestore/documentReference/1.0",He._jsonSchema={type:Le("string",He._jsonSchemaVersion),referencePath:Le("string")};class qo extends Zf{constructor(e,n,r){super(e,n,Of(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new He(this.firestore,null,new K(e))}withConverter(e){return new qo(this.firestore,e,this._path)}}function bn(t,e,...n){if(t=qe(t),arguments.length===1&&(e=Rf.newId()),ak("doc","path",e),t instanceof Jf){const r=Se.fromString(e,...n);return ny(r),new He(t,null,new K(r))}{if(!(t instanceof He||t instanceof qo))throw new q(j.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Se.fromString(e,...n));return ny(r),new He(t.firestore,t instanceof qo?t.converter:null,new K(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $y="AsyncQueue";class Hy{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new aE(this,"async_queue_retry"),this.oc=()=>{const r=zc();r&&$($y,"Visibility state changed to "+r.visibilityState),this.F_.y_()},this._c=e;const n=zc();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;const n=zc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise(()=>{});const n=new Tr;return this.uc(()=>this.Xu&&this.rc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Zu.push(e),this.cc()))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!_s(e))throw e;$($y,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_(()=>this.cc())}}uc(e){const n=this._c.then(()=>(this.nc=!0,e().catch(r=>{throw this.tc=r,this.nc=!1,$n("INTERNAL UNHANDLED ERROR: ",Wy(r)),r}).then(r=>(this.nc=!1,r))));return this._c=n,n}enqueueAfterDelay(e,n,r){this.ac(),this.sc.indexOf(e)>-1&&(n=0);const i=Kf.createAndSchedule(this,e,n,r,s=>this.lc(s));return this.ec.push(i),i}ac(){this.tc&&Q(47125,{hc:Wy(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do e=this._c,await e;while(e!==this._c)}Tc(e){for(const n of this.ec)if(n.timerId===e)return!0;return!1}Ic(e){return this.Pc().then(()=>{this.ec.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.ec)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Pc()})}dc(e){this.sc.push(e)}lc(e){const n=this.ec.indexOf(e);this.ec.splice(n,1)}}function Wy(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class ep extends Jf{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new Hy,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Hy(e),this._firestoreClient=void 0,await e}}}function ZP(t,e){const n=typeof t=="object"?t:mf(),r=typeof t=="string"?t:Yl,i=xu(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=vw("firestore");s&&JP(i,...s)}return i}function AE(t){if(t._terminated)throw new q(j.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||eN(t),t._firestoreClient}function eN(t){var e,n,r;const i=t._freezeSettings(),s=function(l,u,c,f){return new vk(l,u,c,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,SE(f.experimentalLongPollingOptions),f.useFetchStreams,f.isUsingEmulator)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._componentsProvider||!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),t._firestoreClient=new KP(t._authCredentials,t._appCheckCredentials,t._queue,s,t._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ft(Ze.fromBase64String(e))}catch(n){throw new q(j.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Ft(Ze.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Ft._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(ia(e,Ft._jsonSchema))return Ft.fromBase64String(e.bytes)}}Ft._jsonSchemaVersion="firestore/bytes/1.0",Ft._jsonSchema={type:Le("string",Ft._jsonSchemaVersion),bytes:Le("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tp{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new q(j.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Xe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class np{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _n{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new q(j.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new q(j.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return ee(this._lat,e._lat)||ee(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:_n._jsonSchemaVersion}}static fromJSON(e){if(ia(e,_n._jsonSchema))return new _n(e.latitude,e.longitude)}}_n._jsonSchemaVersion="firestore/geoPoint/1.0",_n._jsonSchema={type:Le("string",_n._jsonSchemaVersion),latitude:Le("number"),longitude:Le("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vn{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}toJSON(){return{type:vn._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(ia(e,vn._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new vn(e.vectorValues);throw new q(j.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}vn._jsonSchemaVersion="firestore/vectorValue/1.0",vn._jsonSchema={type:Le("string",vn._jsonSchemaVersion),vectorValues:Le("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tN=/^__.*__$/;class nN{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new _i(e,this.data,this.fieldMask,n,this.fieldTransforms):new sa(e,this.data,n,this.fieldTransforms)}}function RE(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Q(40011,{Ec:t})}}class rp{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Ac(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(e){return new rp(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Rc({path:r,mc:!1});return i.fc(e),i}gc(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Rc({path:r,mc:!1});return i.Ac(),i}yc(e){return this.Rc({path:void 0,mc:!0})}wc(e){return ou(e,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.fc(this.path.get(e))}fc(e){if(e.length===0)throw this.wc("Document fields must not be empty");if(RE(this.Ec)&&tN.test(e))throw this.wc('Document fields cannot begin and end with "__"')}}class rN{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||ju(e)}Dc(e,n,r,i=!1){return new rp({Ec:e,methodName:n,bc:r,path:Xe.emptyPath(),mc:!1,Sc:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function iN(t){const e=t._freezeSettings(),n=ju(t._databaseId);return new rN(t._databaseId,!!e.ignoreUndefinedProperties,n)}function sN(t,e,n,r,i,s={}){const o=t.Dc(s.merge||s.mergeFields?2:0,e,n,i);NE("Data must be an object, but it was:",o,r);const l=CE(r,o);let u,c;if(s.merge)u=new Zt(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const f=[];for(const p of s.mergeFields){const m=oN(e,p,n);if(!o.contains(m))throw new q(j.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);lN(f,m)||f.push(m)}u=new Zt(f),c=o.fieldTransforms.filter(p=>u.covers(p.field))}else u=null,c=o.fieldTransforms;return new nN(new Ut(l),u,c)}class ip extends np{_toFieldTransform(e){return new qk(e.path,new $o)}isEqual(e){return e instanceof ip}}function kE(t,e){if(PE(t=qe(t)))return NE("Unsupported field value:",e,t),CE(t,e);if(t instanceof np)return function(r,i){if(!RE(i.Ec))throw i.wc(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.wc(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.mc&&e.Ec!==4)throw e.wc("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const l of r){let u=kE(l,i.yc(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=qe(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return $k(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=_e.fromDate(r);return{timestampValue:nu(i.serializer,s)}}if(r instanceof _e){const s=new _e(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:nu(i.serializer,s)}}if(r instanceof _n)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Ft)return{bytesValue:X0(i.serializer,r._byteString)};if(r instanceof He){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.wc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:jf(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof vn)return function(o,l){return{mapValue:{fields:{[x0]:{stringValue:A0},[Jl]:{arrayValue:{values:o.toArray().map(c=>{if(typeof c!="number")throw l.wc("VectorValues must only contain numeric values.");return Vf(l.serializer,c)})}}}}}}(r,i);throw i.wc(`Unsupported field value: ${kf(r)}`)}(t,e)}function CE(t,e){const n={};return v0(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):gi(t,(r,i)=>{const s=kE(i,e.Vc(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function PE(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof _e||t instanceof _n||t instanceof Ft||t instanceof He||t instanceof np||t instanceof vn)}function NE(t,e,n){if(!PE(n)||!y0(n)){const r=kf(n);throw r==="an object"?e.wc(t+" a custom object"):e.wc(t+" "+r)}}function oN(t,e,n){if((e=qe(e))instanceof tp)return e._internalPath;if(typeof e=="string")return bE(t,e);throw ou("Field path arguments must be of type string or ",t,!1,void 0,n)}const aN=new RegExp("[~\\*/\\[\\]]");function bE(t,e,n){if(e.search(aN)>=0)throw ou(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new tp(...e.split("."))._internalPath}catch{throw ou(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function ou(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new q(j.INVALID_ARGUMENT,l+t+u)}function lN(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DE{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new He(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new uN(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(OE("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class uN extends DE{data(){return super.data()}}function OE(t,e){return typeof e=="string"?bE(t,e):e instanceof tp?e._internalPath:e._delegate._internalPath}class cN{convertValue(e,n="none"){switch(Pr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return be(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Cr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw Q(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return gi(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var n,r,i;const s=(i=(r=(n=e.fields)===null||n===void 0?void 0:n[Jl].arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(o=>be(o.doubleValue));return new vn(s)}convertGeoPoint(e){return new _n(be(e.latitude),be(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Nu(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Fo(e));default:return null}}convertTimestamp(e){const n=kr(e);return new _e(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Se.fromString(e);he(nE(r),9688,{name:e});const i=new zo(r.get(1),r.get(3)),s=new K(r.popFirst(5));return i.isEqual(n)||$n(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hN(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class eo{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Jr extends DE{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new yl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(OE("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new q(j.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=Jr._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}Jr._jsonSchemaVersion="firestore/documentSnapshot/1.0",Jr._jsonSchema={type:Le("string",Jr._jsonSchemaVersion),bundleSource:Le("string","DocumentSnapshot"),bundleName:Le("string"),bundle:Le("string")};class yl extends Jr{data(e={}){return super.data(e)}}class yo{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new eo(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new yl(this._firestore,this._userDataWriter,r.key,r,new eo(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new q(j.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(l=>{const u=new yl(i._firestore,i._userDataWriter,l.doc.key,l.doc,new eo(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const u=new yl(i._firestore,i._userDataWriter,l.doc.key,l.doc,new eo(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,f=-1;return l.type!==0&&(c=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),f=o.indexOf(l.doc.key)),{type:dN(l.type),doc:u,oldIndex:c,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new q(j.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=yo._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Rf.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],i=[];return this.docs.forEach(s=>{s._document!==null&&(n.push(s._document),r.push(this._userDataWriter.convertObjectMap(s._document.data.value.mapValue.fields,"previous")),i.push(s.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function dN(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Q(61501,{type:t})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function au(t){t=jo(t,He);const e=jo(t.firestore,ep);return YP(AE(e),t._key).then(n=>mN(e,t,n))}yo._jsonSchemaVersion="firestore/querySnapshot/1.0",yo._jsonSchema={type:Le("string",yo._jsonSchemaVersion),bundleSource:Le("string","QuerySnapshot"),bundleName:Le("string"),bundle:Le("string")};class fN extends cN{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ft(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new He(this.firestore,null,n)}}function Bi(t,e,n){t=jo(t,He);const r=jo(t.firestore,ep),i=hN(t.converter,e,n);return pN(r,[sN(iN(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,Ln.none())])}function pN(t,e){return function(r,i){const s=new Tr;return r.asyncQueue.enqueueAndForget(async()=>MP(await QP(r),i,s)),s.promise}(AE(t),e)}function mN(t,e,n){const r=n.docs.get(e._key),i=new fN(t);return new Jr(t,i,e._key,r,new eo(n.hasPendingWrites,n.fromCache),e.converter)}function qy(){return new ip("serverTimestamp")}(function(e,n=!0){(function(i){gs=i})(pi),oi(new xr("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),l=new ep(new ek(r.getProvider("auth-internal")),new rk(o,r.getProvider("app-check-internal")),function(c,f){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new q(j.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new zo(c.options.projectId,f)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),fn(Yg,Jg,e),fn(Yg,Jg,"esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VE="firebasestorage.googleapis.com",LE="storageBucket",gN=2*60*1e3,yN=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne extends Tn{constructor(e,n,r=0){super($c(e),`Firebase Storage: ${n} (${$c(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Ne.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return $c(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Pe;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Pe||(Pe={}));function $c(t){return"storage/"+t}function sp(){const t="An unknown error occurred, please check the error payload for server response.";return new Ne(Pe.UNKNOWN,t)}function _N(t){return new Ne(Pe.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function vN(t){return new Ne(Pe.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function wN(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Ne(Pe.UNAUTHENTICATED,t)}function EN(){return new Ne(Pe.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function TN(t){return new Ne(Pe.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function IN(){return new Ne(Pe.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function SN(){return new Ne(Pe.CANCELED,"User canceled the upload/download.")}function xN(t){return new Ne(Pe.INVALID_URL,"Invalid URL '"+t+"'.")}function AN(t){return new Ne(Pe.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function RN(){return new Ne(Pe.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+LE+"' property when initializing the app?")}function kN(){return new Ne(Pe.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function CN(){return new Ne(Pe.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function PN(t){return new Ne(Pe.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function pd(t){return new Ne(Pe.INVALID_ARGUMENT,t)}function ME(){return new Ne(Pe.APP_DELETED,"The Firebase app was deleted.")}function NN(t){return new Ne(Pe.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function _o(t,e){return new Ne(Pe.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function Hs(t){throw new Ne(Pe.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Ct.makeFromUrl(e,n)}catch{return new Ct(e,"")}if(r.path==="")return r;throw AN(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(b){b.path.charAt(b.path.length-1)==="/"&&(b.path_=b.path_.slice(0,-1))}const o="(/(.*))?$",l=new RegExp("^gs://"+i+o,"i"),u={bucket:1,path:3};function c(b){b.path_=decodeURIComponent(b.path)}const f="v[A-Za-z0-9_]+",p=n.replace(/[.]/g,"\\."),m="(/([^?#]*).*)?$",x=new RegExp(`^https?://${p}/${f}/b/${i}/o${m}`,"i"),k={bucket:1,path:3},N=n===VE?"(?:storage.googleapis.com|storage.cloud.google.com)":n,O="([^?#]*)",w=new RegExp(`^https?://${N}/${i}/${O}`,"i"),I=[{regex:l,indices:u,postModify:s},{regex:x,indices:k,postModify:c},{regex:w,indices:{bucket:1,path:2},postModify:c}];for(let b=0;b<I.length;b++){const D=I[b],M=D.regex.exec(e);if(M){const T=M[D.indices.bucket];let _=M[D.indices.path];_||(_=""),r=new Ct(T,_),D.postModify(r);break}}if(r==null)throw xN(e);return r}}class bN{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DN(t,e,n){let r=1,i=null,s=null,o=!1,l=0;function u(){return l===2}let c=!1;function f(...O){c||(c=!0,e.apply(null,O))}function p(O){i=setTimeout(()=>{i=null,t(x,u())},O)}function m(){s&&clearTimeout(s)}function x(O,...w){if(c){m();return}if(O){m(),f.call(null,O,...w);return}if(u()||o){m(),f.call(null,O,...w);return}r<64&&(r*=2);let I;l===1?(l=2,I=0):I=(r+Math.random())*1e3,p(I)}let k=!1;function N(O){k||(k=!0,m(),!c&&(i!==null?(O||(l=2),clearTimeout(i),p(0)):O||(l=1)))}return p(0),s=setTimeout(()=>{o=!0,N(!0)},n),N}function ON(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VN(t){return t!==void 0}function LN(t){return typeof t=="object"&&!Array.isArray(t)}function op(t){return typeof t=="string"||t instanceof String}function Ky(t){return ap()&&t instanceof Blob}function ap(){return typeof Blob<"u"}function Gy(t,e,n,r){if(r<e)throw pd(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw pd(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lp(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function jE(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}var Zr;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Zr||(Zr={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MN(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jN{constructor(e,n,r,i,s,o,l,u,c,f,p,m=!0,x=!1){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=l,this.errorCallback_=u,this.timeout_=c,this.progressCallback_=f,this.connectionFactory_=p,this.retry=m,this.isUsingEmulator=x,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((k,N)=>{this.resolve_=k,this.reject_=N,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new Ga(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=l=>{const u=l.loaded,c=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,c)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const l=s.getErrorCode()===Zr.NO_ERROR,u=s.getStatus();if(!l||MN(u,this.additionalRetryCodes_)&&this.retry){const f=s.getErrorCode()===Zr.ABORT;r(!1,new Ga(!1,null,f));return}const c=this.successCodes_.indexOf(u)!==-1;r(!0,new Ga(c,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,l=i.connection;if(i.wasSuccessCode)try{const u=this.callback_(l,l.getResponse());VN(u)?s(u):s()}catch(u){o(u)}else if(l!==null){const u=sp();u.serverResponse=l.getErrorText(),this.errorCallback_?o(this.errorCallback_(l,u)):o(u)}else if(i.canceled){const u=this.appDelete_?ME():SN();o(u)}else{const u=IN();o(u)}};this.canceled_?n(!1,new Ga(!1,null,!0)):this.backoffId_=DN(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&ON(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Ga{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function UN(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function FN(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function zN(t,e){e&&(t["X-Firebase-GMPID"]=e)}function BN(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function $N(t,e,n,r,i,s,o=!0,l=!1){const u=jE(t.urlParams),c=t.url+u,f=Object.assign({},t.headers);return zN(f,e),UN(f,n),FN(f,s),BN(f,r),new jN(c,t.method,f,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o,l)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HN(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function WN(...t){const e=HN();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(ap())return new Blob(t);throw new Ne(Pe.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function qN(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KN(t){if(typeof atob>"u")throw PN("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cn={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Hc{constructor(e,n){this.data=e,this.contentType=n||null}}function GN(t,e){switch(t){case cn.RAW:return new Hc(UE(e));case cn.BASE64:case cn.BASE64URL:return new Hc(FE(t,e));case cn.DATA_URL:return new Hc(XN(e),YN(e))}throw sp()}function UE(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const s=r,o=t.charCodeAt(++n);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function QN(t){let e;try{e=decodeURIComponent(t)}catch{throw _o(cn.DATA_URL,"Malformed data URL.")}return UE(e)}function FE(t,e){switch(t){case cn.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw _o(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case cn.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw _o(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=KN(e)}catch(i){throw i.message.includes("polyfill")?i:_o(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class zE{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw _o(cn.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=JN(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function XN(t){const e=new zE(t);return e.base64?FE(cn.BASE64,e.rest):QN(e.rest)}function YN(t){return new zE(t).contentType}function JN(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class or{constructor(e,n){let r=0,i="";Ky(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(Ky(this.data_)){const r=this.data_,i=qN(r,e,n);return i===null?null:new or(i)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new or(r,!0)}}static getBlob(...e){if(ap()){const n=e.map(r=>r instanceof or?r.data_:r);return new or(WN.apply(null,n))}else{const n=e.map(o=>op(o)?GN(cn.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(o=>{for(let l=0;l<o.length;l++)i[s++]=o[l]}),new or(i,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BE(t){let e;try{e=JSON.parse(t)}catch{return null}return LN(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZN(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function eb(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function $E(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tb(t,e){return e}class ft{constructor(e,n,r,i){this.server=e,this.local=n||e,this.writable=!!r,this.xform=i||tb}}let Qa=null;function nb(t){return!op(t)||t.length<2?t:$E(t)}function HE(){if(Qa)return Qa;const t=[];t.push(new ft("bucket")),t.push(new ft("generation")),t.push(new ft("metageneration")),t.push(new ft("name","fullPath",!0));function e(s,o){return nb(o)}const n=new ft("name");n.xform=e,t.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new ft("size");return i.xform=r,t.push(i),t.push(new ft("timeCreated")),t.push(new ft("updated")),t.push(new ft("md5Hash",null,!0)),t.push(new ft("cacheControl",null,!0)),t.push(new ft("contentDisposition",null,!0)),t.push(new ft("contentEncoding",null,!0)),t.push(new ft("contentLanguage",null,!0)),t.push(new ft("contentType",null,!0)),t.push(new ft("metadata","customMetadata",!0)),Qa=t,Qa}function rb(t,e){function n(){const r=t.bucket,i=t.fullPath,s=new Ct(r,i);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function ib(t,e,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,e[o.server])}return rb(r,t),r}function WE(t,e,n){const r=BE(e);return r===null?null:ib(t,r,n)}function sb(t,e,n,r){const i=BE(e);if(i===null||!op(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(c=>{const f=t.bucket,p=t.fullPath,m="/b/"+o(f)+"/o/"+o(p),x=lp(m,n,r),k=jE({alt:"media",token:c});return x+k})[0]}function ob(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}class qE{constructor(e,n,r,i){this.url=e,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KE(t){if(!t)throw sp()}function ab(t,e){function n(r,i){const s=WE(t,i,e);return KE(s!==null),s}return n}function lb(t,e){function n(r,i){const s=WE(t,i,e);return KE(s!==null),sb(s,i,t.host,t._protocol)}return n}function GE(t){function e(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=EN():i=wN():n.getStatus()===402?i=vN(t.bucket):n.getStatus()===403?i=TN(t.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return e}function ub(t){const e=GE(t);function n(r,i){let s=e(r,i);return r.getStatus()===404&&(s=_N(t.path)),s.serverResponse=i.serverResponse,s}return n}function cb(t,e,n){const r=e.fullServerUrl(),i=lp(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,l=new qE(i,s,lb(t,n),o);return l.errorHandler=ub(e),l}function hb(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function db(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=hb(null,e)),r}function fb(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function l(){let I="";for(let b=0;b<2;b++)I=I+Math.random().toString().slice(2);return I}const u=l();o["Content-Type"]="multipart/related; boundary="+u;const c=db(e,r,i),f=ob(c,n),p="--"+u+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+f+`\r
--`+u+`\r
Content-Type: `+c.contentType+`\r
\r
`,m=`\r
--`+u+"--",x=or.getBlob(p,r,m);if(x===null)throw kN();const k={name:c.fullPath},N=lp(s,t.host,t._protocol),O="POST",w=t.maxUploadRetryTime,g=new qE(N,O,ab(t,n),w);return g.urlParams=k,g.headers=o,g.body=x.uploadData(),g.errorHandler=GE(e),g}class pb{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Zr.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Zr.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Zr.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,i,s){if(this.sent_)throw Hs("cannot .send() more than once");if(Lr(e)&&r&&(this.xhr_.withCredentials=!0),this.sent_=!0,this.xhr_.open(n,e,!0),s!==void 0)for(const o in s)s.hasOwnProperty(o)&&this.xhr_.setRequestHeader(o,s[o].toString());return i!==void 0?this.xhr_.send(i):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Hs("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Hs("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Hs("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Hs("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class mb extends pb{initXhr(){this.xhr_.responseType="text"}}function QE(){return new mb}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi{constructor(e,n){this._service=e,n instanceof Ct?this._location=n:this._location=Ct.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new hi(e,n)}get root(){const e=new Ct(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return $E(this._location.path)}get storage(){return this._service}get parent(){const e=ZN(this._location.path);if(e===null)return null;const n=new Ct(this._location.bucket,e);return new hi(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw NN(e)}}function gb(t,e,n){t._throwIfRoot("uploadBytes");const r=fb(t.storage,t._location,HE(),new or(e,!0),n);return t.storage.makeRequestWithTokens(r,QE).then(i=>({metadata:i,ref:t}))}function yb(t){t._throwIfRoot("getDownloadURL");const e=cb(t.storage,t._location,HE());return t.storage.makeRequestWithTokens(e,QE).then(n=>{if(n===null)throw CN();return n})}function _b(t,e){const n=eb(t._location.path,e),r=new Ct(t._location.bucket,n);return new hi(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vb(t){return/^[A-Za-z]+:\/\//.test(t)}function wb(t,e){return new hi(t,e)}function XE(t,e){if(t instanceof up){const n=t;if(n._bucket==null)throw RN();const r=new hi(n,n._bucket);return e!=null?XE(r,e):r}else return e!==void 0?_b(t,e):t}function Eb(t,e){if(e&&vb(e)){if(t instanceof up)return wb(t,e);throw pd("To use ref(service, url), the first argument must be a Storage instance.")}else return XE(t,e)}function Qy(t,e){const n=e==null?void 0:e[LE];return n==null?null:Ct.makeFromBucketSpec(n,t)}function Tb(t,e,n,r={}){t.host=`${e}:${n}`;const i=Lr(e);i&&(hf(`https://${t.host}/b`),df("Storage",!0)),t._isUsingEmulator=!0,t._protocol=i?"https":"http";const{mockUserToken:s}=r;s&&(t._overrideAuthToken=typeof s=="string"?s:Tw(s,t.app.options.projectId))}class up{constructor(e,n,r,i,s,o=!1){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._isUsingEmulator=o,this._bucket=null,this._host=VE,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=gN,this._maxUploadRetryTime=yN,this._requests=new Set,i!=null?this._bucket=Ct.makeFromBucketSpec(i,this._host):this._bucket=Qy(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Ct.makeFromBucketSpec(this._url,e):this._bucket=Qy(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Gy("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Gy("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){if(Rt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new hi(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new bN(ME());{const o=$N(e,this._appId,r,i,n,this._firebaseVersion,s,this._isUsingEmulator);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const Xy="@firebase/storage",Yy="0.13.14";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YE="storage";function Ib(t,e,n){return t=qe(t),gb(t,e,n)}function Sb(t){return t=qe(t),yb(t)}function xb(t,e){return t=qe(t),Eb(t,e)}function Ab(t=mf(),e){t=qe(t);const r=xu(t,YE).getImmediate({identifier:e}),i=vw("storage");return i&&Rb(r,...i),r}function Rb(t,e,n,r={}){Tb(t,e,n,r)}function kb(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new up(n,r,i,e,pi)}function Cb(){oi(new xr(YE,kb,"PUBLIC").setMultipleInstances(!0)),fn(Xy,Yy,""),fn(Xy,Yy,"esm2017")}Cb();const Pb={apiKey:"AIzaSyCnkriWGFR59fuswjYI3zwUsY65twNyKfU",authDomain:"enuf-26dda.firebaseapp.com",projectId:"enuf-26dda",storageBucket:"enuf-26dda.appspot.com",messagingSenderId:"757285990176",appId:"1:757285990176:web:7c4cab6cb67004b4f73145",measurementId:"G-9FXJSH6PNE"},cp=xw(Pb),ar=XR(cp),Dn=ZP(cp),Nb=Ab(cp),Wc="enuf.",qc="enuf.@enuf.local",Kc="2271455792882";function bb({user:t}){const[e,n]=U.useState("login"),[r,i]=U.useState(""),[s,o]=U.useState(""),[l,u]=U.useState(""),[c,f]=U.useState(""),[p,m]=U.useState(""),[x,k]=U.useState(!1),N=()=>{i(""),o(""),u(""),f(""),m("")},O=async()=>{try{return(await Fg(ar,qc,Kc)).user}catch(g){if(g.code!=="auth/user-not-found")throw g;const I=await Ug(ar,qc,Kc);return await Xh(I.user,{displayName:"ENUF Admin"}),await Bi(bn(Dn,"users",I.user.uid),{uid:I.user.uid,email:Wc,fullName:"ENUF Admin",username:"enuf",createdAt:qy()},{merge:!0}),await Bi(bn(Dn,"usernames","enuf"),{uid:I.user.uid,email:Wc}),I.user}},w=async g=>{g.preventDefault(),m(""),k(!0);try{const I=r.trim(),b=I.toLowerCase();if(b===Wc||b===qc.toLowerCase()){if(s!==Kc)throw new Error("Wrong admin password.");await O(),N();return}if(e==="login"){await Fg(ar,I,s),N();return}const M=I,T=l.trim(),_=c.trim().toLowerCase();if(!T||!_)throw new Error("Please enter your full name and a username.");const S=bn(Dn,"usernames",_);if((await au(S)).exists())throw new Error("That username is already taken. Try another one.");const R=await Ug(ar,M,s);await Xh(R.user,{displayName:T});const C=bn(Dn,"users",R.user.uid);await Bi(C,{uid:R.user.uid,email:M,fullName:T,username:_,createdAt:qy()}),await Bi(S,{uid:R.user.uid,email:M}),N()}catch(I){console.error(I),m(I.message||"Auth failed")}finally{k(!1)}};return t?v.jsxs("div",{className:"flex items-center gap-3 text-xs bg-zinc-900/60 border border-white/10 rounded-2xl px-3 py-2",children:[v.jsxs("div",{className:"flex items-center gap-2",children:[t.photoURL?v.jsx("img",{src:t.photoURL,alt:"Profile",className:"w-8 h-8 rounded-full object-cover border border-white/10"}):v.jsx("div",{className:"w-8 h-8 rounded-full bg-zinc-700 flex items-center justify-center text-[11px] text-white",children:t.displayName?t.displayName[0].toUpperCase():"?"}),v.jsxs("div",{className:"flex flex-col",children:[v.jsx("span",{className:"text-[10px] text-zinc-400",children:"Signed in as"}),v.jsx("span",{className:"font-medium text-zinc-50 max-w-[140px] truncate",children:t.displayName||t.email})]})]}),v.jsx("button",{onClick:()=>If(ar),className:"px-3 py-1.5 rounded-full bg-white text-black font-medium",children:"Log out"})]}):v.jsxs("div",{className:"bg-zinc-900/70 border border-white/10 rounded-2xl px-3 py-2 text-xs space-y-2 w-[230px]",children:[v.jsxs("div",{className:"flex gap-1 mb-1",children:[v.jsx("button",{className:`flex-1 px-2 py-1 rounded-full ${e==="login"?"bg-white text-black font-semibold":"bg-zinc-800 text-zinc-300"}`,onClick:()=>n("login"),children:"Log in"}),v.jsx("button",{className:`flex-1 px-2 py-1 rounded-full ${e==="signup"?"bg-white text-black font-semibold":"bg-zinc-800 text-zinc-300"}`,onClick:()=>n("signup"),children:"Sign up"})]}),v.jsxs("form",{onSubmit:w,className:"space-y-1.5",children:[e==="signup"&&v.jsxs(v.Fragment,{children:[v.jsx("input",{type:"text",placeholder:"Full name",value:l,onChange:g=>u(g.target.value),className:"w-full bg-zinc-950 border border-zinc-700 rounded-xl px-3 py-1.5 text-[11px] placeholder:text-zinc-500",required:!0}),v.jsx("input",{type:"text",placeholder:"Username",value:c,onChange:g=>f(g.target.value.toLowerCase()),className:"w-full bg-zinc-950 border border-zinc-700 rounded-xl px-3 py-1.5 text-[11px] placeholder:text-zinc-500",required:!0})]}),v.jsx("input",{type:"text",inputMode:"email",placeholder:"Email (use enuf. for admin)",autoComplete:"email",value:r,onChange:g=>i(g.target.value),className:"w-full bg-zinc-950 border border-zinc-700 rounded-xl px-3 py-1.5 text-[11px] placeholder:text-zinc-500",required:!0}),v.jsx("input",{type:"password",placeholder:"Password",autoComplete:e==="login"?"current-password":"new-password",value:s,onChange:g=>o(g.target.value),className:"w-full bg-zinc-950 border border-zinc-700 rounded-xl px-3 py-1.5 text-[11px] placeholder:text-zinc-500",required:!0}),p&&v.jsx("div",{className:"text-[10px] text-red-400",children:p}),v.jsx("button",{type:"submit",disabled:x,className:"w-full mt-1 rounded-full bg-white text-black py-1.5 text-[11px] font-semibold disabled:opacity-60",children:x?"Please wait…":e==="login"?"Log in":"Create account"})]})]})}const Ee="https://kiley-unboyish-leena.ngrok-free.dev",Db=["sad","paralyzed","rejected","depressed","loss","shame","angry","hopeless","lonely","ashamed","regret","powerless","annoyed","insecure","left out","nervous","unmotivated","anxious","jealous","stressed","tired","drained","overwhelmed","frustrated","unfulfilled","vulnerable","unsure","awkward","zoned out","reflective","bored","meh","curious","numb","stuck","appreciated","comfortable","thankful","motivated","hope","satisfied","calm","fired up","nostalgic","relieved","surprised","brave","creative","free","love","grateful","confident","excited","happy","proud","proud","motivated","grateful","calm","excited","productive","neutral","indifferent","distracted","content","unfocused","under pressure","burned out","rushed","worried","hopeless","sensitive","heartbroken","resentful","hurt","enraged","impatient"],Jy=t=>t?t.toLowerCase().trim():"",Zy=t=>t?t.split(" ").map(e=>e[0].toUpperCase()+e.slice(1)).join(" "):"";function Ob({user:t,initialEmotion:e}){const[n,r]=U.useState([]),[i,s]=U.useState(0),[o,l]=U.useState(""),[u,c]=U.useState(!0),[f,p]=U.useState(""),m=U.useRef(null),x=()=>{typeof navigator<"u"&&navigator.vibrate&&navigator.vibrate(10)},k=U.useMemo(()=>Array.from(new Set(Db.map(Jy))),[]);U.useEffect(()=>{e&&l(Jy(e))},[e]),U.useEffect(()=>{N(),x()},[o]);async function N(){try{c(!0),p("");const g=o?`${Ee}/videos?emotion=${encodeURIComponent(o)}`:`${Ee}/videos`,b=await(await fetch(g)).json();r(b.videos||[]),s(0)}catch(g){console.error("Failed to load videos",g),p("Could not load videos")}finally{c(!1)}}U.useEffect(()=>{let g=0;const I=D=>{const M=Date.now();M-g<200||(D.deltaY>8&&i<n.length-1?(s(T=>Math.min(T+1,n.length-1)),g=M):D.deltaY<-8&&i>0&&(s(T=>Math.max(T-1,0)),g=M))},b=m.current;return b==null||b.addEventListener("wheel",I,{passive:!0}),()=>b==null?void 0:b.removeEventListener("wheel",I)},[i,n.length]),U.useEffect(()=>{const g=I=>{I.key==="ArrowDown"||I.key==="ArrowRight"?s(b=>Math.min(b+1,n.length-1)):(I.key==="ArrowUp"||I.key==="ArrowLeft")&&s(b=>Math.max(b-1,0))};return window.addEventListener("keydown",g),()=>window.removeEventListener("keydown",g)},[n.length]);const O=n.length>0,w=O?n[i]:null;return v.jsxs("div",{className:"space-y-6",children:[v.jsxs("div",{className:"space-y-1",children:[v.jsx("div",{className:"text-2xl font-semibold",children:"Watch"}),v.jsx("p",{className:"text-xs text-zinc-500 max-w-md",children:"Tap a filter, then swipe/scroll through matching stories."})]}),v.jsxs("div",{className:"rounded-2xl bg-card/60 border border-white/10 p-3 space-y-2 sticky top-2 z-20 backdrop-blur",children:[v.jsxs("div",{className:"flex items-center justify-between gap-2",children:[v.jsx("span",{className:"text-[11px] text-zinc-400 uppercase tracking-wide",children:"Filter"}),o&&v.jsx("button",{onClick:()=>l(""),className:"text-[11px] text-zinc-300 underline underline-offset-4",children:"Clear"})]}),v.jsxs("div",{className:"flex gap-2 overflow-x-auto text-[11px] pb-1",children:[v.jsx("button",{onClick:()=>l(""),className:`px-3 py-1.5 rounded-full border whitespace-nowrap ${o?"border-zinc-700 bg-zinc-900/70 text-zinc-200":"bg-white text-black border-white"}`,children:"All"}),k.map(g=>v.jsx("button",{onClick:()=>l(g),className:`px-3 py-1.5 rounded-full border whitespace-nowrap ${o===g?"bg-white text-black border-white":"border-zinc-700 bg-zinc-900/70 text-zinc-200"}`,children:Zy(g)},g))]})]}),v.jsxs("div",{className:"flex flex-col items-center gap-4",children:[v.jsx("div",{ref:m,className:"w-full max-w-sm aspect-[9/16] rounded-3xl bg-card border border-white/10 overflow-hidden flex items-center justify-center shadow-[0_18px_60px_rgba(0,0,0,0.7)]",children:u?v.jsx("div",{className:"text-zinc-500 text-sm",children:"Loading…"}):O?v.jsx("video",{src:w.video_url,className:"w-full h-full object-cover",controls:!0,playsInline:!0,controlsList:"nodownload noremoteplayback"},w.id):v.jsx("div",{className:"text-zinc-500 text-sm text-center px-6",children:"No videos yet. Be the first to share something real."})}),f&&v.jsx("div",{className:"text-[11px] text-red-400",children:f}),O&&v.jsxs("div",{className:"w-full max-w-sm space-y-1",children:[v.jsx("div",{className:"text-[11px] text-zinc-400 uppercase tracking-wide",children:Zy(w.emotion_tag)}),v.jsx("div",{className:"text-sm font-medium",children:w.caption||"Untitled story"}),v.jsxs("div",{className:"text-[11px] text-zinc-500",children:["Posted by ",w.user_email||"Anonymous"]}),v.jsxs("div",{className:"flex items-center gap-3 pt-1 text-[11px] text-zinc-400",children:[v.jsx("span",{children:"Scroll / swipe to move"}),v.jsxs("span",{className:"ml-auto",children:[i+1," / ",n.length]})]})]})]})]})}const e_=[{id:"good",label:"Good",level:5,icon:"😊",subMoods:["Happy","Proud","Motivated","Grateful","Calm","Excited","Productive"],reasons:["I accomplished something","Someone made my day","I am proud of myself","Something went right today","I had fun","I made progress","I feel supported"]},{id:"okay",label:"Okay",level:4,icon:"🙂",subMoods:["Neutral","Tired","Indifferent","Distracted","Meh","Content","Unfocused"],reasons:["Just a normal day","Nothing special happened","I am tired","I am distracted","I do not feel strongly either way","I am going with the flow"]},{id:"stressed",label:"Stressed",level:3,icon:"😰",subMoods:["Overwhelmed","Anxious","Under Pressure","Burned Out","Irritated","Rushed","Worried"],reasons:["Too many responsibilities","Deadlines coming up","School or work pressure","Too much noise or chaos","I feel rushed","I am overwhelmed","I am overthinking"]},{id:"sad",label:"Sad",level:2,icon:"😔",subMoods:["Lonely","Hopeless","Unmotivated","Drained","Disappointed","Sensitive","Heartbroken"],reasons:["I miss someone","I feel alone","Something did not go well","I am disappointed","I feel drained","I am discouraged","I feel left out"]},{id:"angry",label:"Angry",level:1,icon:"😡",subMoods:["Frustrated","Annoyed","Resentful","Irritated","Hurt","Enraged","Impatient"],reasons:["Someone upset me","I feel misunderstood","Something unfair happened","I am irritated","I am frustrated with myself","I am frustrated with others","Plans fell apart"]}],Vb=[{category:"Relationships and People",items:["Family","Friends","Romantic partner or crush","Breakup or conflict","Feeling disconnected","Social anxiety","Support from someone"]},{category:"Work or School",items:["School workload","Job stress","Deadlines","Performance pressure","Feeling accomplished","Conflict with others","Not being productive"]},{category:"Self and Mental State",items:["Confidence","Self-esteem","Overthinking","ADHD symptoms","Depression symptoms","Anxiety symptoms","Burnout"]},{category:"Personal Life and Routine",items:["Financial stress","Physical health","Not enough sleep","Good sleep","Exercise or no exercise","Eating habits","Messy environment","Too much screen time"]},{category:"Goals and Progress",items:["Making progress","Falling behind","Not meeting expectations","Feeling stuck","New achievements"]},{category:"Life Events",items:["Something good happened","Something bad happened","Unexpected change","Plans cancelled","New opportunities"]},{category:"External Factors",items:["Weather","Traffic","Arguments","Something online bothered me","Overstimulation","Boredom"]}];function t_({onComplete:t,onCancel:e}){const[n,r]=U.useState(null),[i,s]=U.useState(""),[o,l]=U.useState([]),[u,c]=U.useState(!1),[f,p]=U.useState("core"),m=()=>{f==="reason"?p("sub"):f==="sub"&&(p("core"),s(""),c(!1))},x=U.useMemo(()=>e_.find(w=>w.id===n)||null,[n]),k=w=>{c(!0),l(g=>g.includes(w)?g.filter(I=>I!==w):[...g,w])},N=w=>{r(w),s(""),l([]),c(!1),p("sub")},O=(w=!1)=>{if(!x||!t)return;const g=i||x.label,I=`${x.label}${g?` - ${g}`:""}`,b=(i||x.label||"").toLowerCase(),D=!w&&o.length?`${I} | Reasons: ${o.join(", ")}`:I;t({label:D,level:x.level,core:x.label,subMood:g,reasons:w?[]:o,emotionTag:b})};return v.jsxs("section",{className:"space-y-6",children:[v.jsxs("div",{className:"flex items-center justify-between gap-4",children:[v.jsxs("div",{children:[v.jsx("div",{className:"text-[11px] tracking-[0.28em] uppercase text-zinc-500",children:"Mood"}),v.jsx("h1",{className:"text-2xl sm:text-3xl font-semibold mt-1",children:"How are you really feeling right now?"}),v.jsx("p",{className:"text-xs text-zinc-500 mt-2 max-w-xl",children:"Tap a mood to open the flow. We’ll guide you through in two clean steps."})]}),e&&v.jsx("button",{type:"button",onClick:e,className:"text-zinc-400 hover:text-white text-lg px-2","aria-label":"Close mood selector",children:"×"})]}),v.jsxs("div",{className:"rounded-3xl bg-gradient-to-b from-white/10 to-white/5 border border-white/15 p-0 overflow-hidden shadow-[0_25px_70px_rgba(0,0,0,0.55)]",children:[v.jsxs("div",{className:"flex items-center justify-between px-5 py-3 border-b border-white/10 bg-white/5 backdrop-blur",children:[v.jsxs("div",{className:"flex items-center gap-3",children:[f!=="core"&&v.jsx("button",{type:"button",onClick:m,className:"flex items-center gap-1 rounded-full bg-white/10 border border-white/20 px-3 py-1 text-[11px] text-white hover:bg-white/20",children:"← Back"}),v.jsxs("div",{className:"flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-zinc-300",children:[v.jsx("span",{className:f==="core"?"text-white":"",children:"Choose Mood"}),v.jsx("span",{children:"•"}),v.jsx("span",{className:f==="sub"?"text-white":"",children:"Narrow"}),v.jsx("span",{children:"•"}),v.jsx("span",{className:f==="reason"?"text-white":"",children:"Reasons"})]})]}),x&&v.jsxs("div",{className:"text-[11px] text-zinc-200",children:[x.label,i?` • ${i}`:""]})]}),v.jsxs("div",{className:"p-5 sm:p-6 space-y-6",children:[f==="core"&&v.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3",children:e_.map(w=>{const g=w.id===n;return v.jsxs("button",{type:"button",onClick:()=>N(w.id),className:`flex flex-col items-start gap-2 rounded-2xl border px-4 py-4 text-left transition ${g?"border-white bg-white text-black shadow-lg shadow-white/10":"border-white/10 bg-white/5 text-zinc-200 hover:border-white/20"}`,children:[v.jsxs("div",{className:"flex items-center gap-2",children:[v.jsx("span",{className:"text-2xl leading-none",children:w.icon}),v.jsx("div",{className:"text-base font-semibold",children:w.label})]}),v.jsxs("div",{className:"text-[11px] text-zinc-400",children:[w.subMoods.slice(0,3).join(", "),"..."]})]},w.id)})}),f==="sub"&&x&&v.jsxs("div",{className:"space-y-4",children:[v.jsx("div",{className:"text-sm font-semibold text-white",children:"Narrow it down"}),v.jsx("div",{className:"flex flex-wrap gap-2",children:x.subMoods.map(w=>{const g=i===w;return v.jsx("button",{type:"button",onClick:()=>{s(w),p("reason"),c(!0)},className:`px-3 py-1.5 rounded-full text-sm border transition ${g?"bg-white text-black border-white":"bg-white/5 border-white/15 text-zinc-200 hover:border-white/30"}`,children:w},w)})}),v.jsxs("div",{className:"flex gap-2",children:[v.jsx("button",{type:"button",onClick:()=>O(!0),className:"px-3 py-1.5 rounded-full bg-white text-black text-xs font-semibold",children:"Quick log this mood"}),v.jsx("button",{type:"button",onClick:()=>{c(!0),p("reason")},className:"text-[11px] text-zinc-300 underline decoration-dotted",children:"Skip to reasons"})]})]}),f==="reason"&&x&&v.jsxs("div",{className:"space-y-4",children:[v.jsx("div",{className:"flex items-center justify-between",children:v.jsx("div",{className:"text-sm font-semibold text-white",children:"Add a reason (optional)"})}),v.jsx("div",{className:"flex flex-wrap gap-2",children:x.reasons.map(w=>{const g=o.includes(w);return v.jsx("button",{type:"button",onClick:()=>k(w),className:`px-3 py-1.5 rounded-full text-xs border transition ${g?"bg-white text-black border-white":"bg-white/5 border-white/15 text-zinc-200 hover:border-white/30"}`,children:w},w)})}),v.jsx("div",{className:"space-y-3",children:Vb.map(w=>v.jsxs("div",{className:"space-y-2",children:[v.jsx("div",{className:"text-[11px] uppercase tracking-[0.15em] text-zinc-400",children:w.category}),v.jsx("div",{className:"flex flex-wrap gap-2",children:w.items.map(g=>{const I=o.includes(g);return v.jsx("button",{type:"button",onClick:()=>k(g),className:`px-3 py-1.5 rounded-full text-xs border transition ${I?"bg-white text-black border-white":"bg-white/5 border-white/15 text-zinc-200 hover:border-white/30"}`,children:g},g)})})]},w.category))})]}),v.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pt-1 border-t border-white/5",children:[v.jsx("div",{className:"text-xs text-zinc-300 min-h-[32px]",children:x?v.jsxs(v.Fragment,{children:[v.jsxs("span",{className:"font-medium text-white",children:[x.label,i?` • ${i}`:""]}),o.length>0&&v.jsxs("span",{className:"text-zinc-300",children:[" ","| ",o.join(", ")]})]}):"Choose your core mood to get started."}),v.jsxs("div",{className:"flex gap-2 flex-wrap",children:[v.jsx("button",{type:"button",disabled:!x,onClick:()=>O(!0),className:`px-4 py-2 rounded-full text-xs font-semibold ${x?"bg-white text-black hover:bg-zinc-100":"bg-zinc-700 text-zinc-400 cursor-not-allowed"}`,children:"Quick log"}),v.jsx("button",{type:"button",disabled:!x,onClick:()=>O(!1),className:`px-4 py-2 rounded-full text-xs font-semibold ${x?"bg-white/10 text-white border border-white/30 hover:bg-white/20":"bg-zinc-700 text-zinc-400 cursor-not-allowed"}`,children:"Log with details"})]})]})]})]})]})}function JE(t){return t?t.startsWith("http")?t:`${Ee}/${t}`:""}function Lb({videos:t,startIndex:e,onClose:n}){const[r,i]=U.useState(e),s=U.useState(()=>new Map)[0],o=U.useRef(null);return U.useEffect(()=>i(e),[e]),U.useEffect(()=>{const l=s.get(r);l&&l.scrollIntoView&&l.scrollIntoView({behavior:"smooth",block:"center"})},[r,s]),U.useEffect(()=>{let l=0;const u=f=>{const p=Date.now();p-l<220||(f.deltaY>10&&r<t.length-1?(i(m=>Math.min(m+1,t.length-1)),l=p):f.deltaY<-10&&r>0&&(i(m=>Math.max(m-1,0)),l=p))},c=o.current;return c==null||c.addEventListener("wheel",u,{passive:!0}),()=>c==null?void 0:c.removeEventListener("wheel",u)},[r,t.length]),U.useEffect(()=>{const l=u=>{u.key==="ArrowDown"||u.key==="ArrowRight"?i(c=>Math.min(c+1,t.length-1)):u.key==="ArrowUp"||u.key==="ArrowLeft"?i(c=>Math.max(c-1,0)):u.key==="Escape"&&(n==null||n())};return window.addEventListener("keydown",l),()=>window.removeEventListener("keydown",l)},[t.length,n]),v.jsx("div",{className:"fixed inset-0 bg-black/85 z-[999] flex items-center justify-center p-4",children:v.jsxs("div",{className:"relative w-full max-w-4xl h-full",children:[v.jsx("div",{ref:o,className:"w-full h-full max-h-[90vh] overflow-y-auto space-y-4 pr-1",children:t.map((l,u)=>v.jsxs("div",{ref:c=>{c&&s.set(u,c)},className:`rounded-xl border border-white/10 bg-black/30 p-2 ${u===r?"shadow-[0_0_0_2px_rgba(255,255,255,0.15)]":""}`,children:[v.jsx("video",{src:JE(l.video_url),controls:!0,autoPlay:u===r,playsInline:!0,controlsList:"nodownload noremoteplayback",className:"w-full max-h-[70vh] rounded-lg"}),l.emotion_tag&&v.jsx("div",{className:"text-[11px] text-zinc-300 mt-1",children:l.emotion_tag})]},l.id))}),v.jsx("button",{onClick:n,className:"absolute -top-10 right-0 text-white text-3xl bg-black/70 px-4 py-2 rounded-full"})]})})}function Mb({userId:t,currentUserId:e,onBack:n}){const[r,i]=U.useState(null),[s,o]=U.useState([]),[l,u]=U.useState("none"),[c,f]=U.useState(null),[p,m]=U.useState("all"),[x,k]=U.useState(!0),[N,O]=U.useState(""),[w,g]=U.useState(null);U.useState(()=>new Map)[0],U.useEffect(()=>{t&&I()},[t]);async function I(){try{k(!0),O("");const[E,R,C]=await Promise.all([fetch(`${Ee}/profile?user_id=${t}`),fetch(`${Ee}/videos?user_id=${t}`),fetch(`${Ee}/friends/status?user_id=${e}&other_id=${t}`)]),A=await E.json(),ze=await R.json(),St=await C.json();if(!E.ok)throw new Error(A.error||"Profile error");if(!R.ok)throw new Error(ze.error||"Videos error");if(!C.ok)throw new Error(St.error||"Friend status error");i(A.profile||null),o(ze.videos||[]),u(St.status||"none"),f(St.direction||null)}catch(E){console.error(E),O(E.message||"Failed to load profile")}finally{k(!1)}}async function b(){try{O("");const E=await fetch(`${Ee}/friends/request`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({requester_id:e,receiver_id:t})}),R=await E.json();if(!E.ok)throw new Error(R.error||"Failed to send request");await I()}catch(E){console.error(E),O(E.message||"Failed to send friend request")}}async function D(){try{O("");const E=await fetch(`${Ee}/friends/remove`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({user_id:e,other_id:t})}),R=await E.json();if(!E.ok)throw new Error(R.error||"Failed to remove friend");await I()}catch(E){console.error(E),O(E.message||"Failed to remove friend")}}async function M(){try{O("");const E=await fetch(`${Ee}/friends/status?user_id=${e}&other_id=${t}`),R=await E.json();if(!E.ok||!R.friend)throw new Error("No pending request to accept");const C=await fetch(`${Ee}/friends/respond`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({request_id:R.friend.id,status:"accepted"})}),A=await C.json();if(!C.ok)throw new Error(A.error||"Failed to accept");await I()}catch(E){console.error(E),O(E.message||"Failed to accept request")}}const T=Array.from(new Set(s.map(E=>E.emotion_tag).filter(Boolean))),_=p==="all"?s:s.filter(E=>E.emotion_tag===p);U.useEffect(()=>{w!=null&&w>=_.length&&g(_.length?0:null)},[_.length,w]);function S(){if(t===e)return null;if(l==="friends")return v.jsx("button",{onClick:D,className:"px-4 py-1.5 rounded-full bg-zinc-700 text-xs",children:"Remove friend"});if(l==="pending"){if(c==="outgoing")return v.jsx("button",{className:"px-4 py-1.5 rounded-full bg-zinc-700 text-xs",children:"Request sent"});if(c==="incoming")return v.jsx("button",{onClick:M,className:"px-4 py-1.5 rounded-full bg-white text-black text-xs font-semibold",children:"Accept friend request"})}return v.jsx("button",{onClick:b,className:"px-4 py-1.5 rounded-full bg-white text-black text-xs font-semibold",children:"Add Friend"})}return v.jsxs("div",{className:"min-h-screen pb-24",children:[v.jsxs("div",{className:"p-4 flex items-center gap-2",children:[v.jsx("button",{onClick:n,className:"px-3 py-1.5 rounded-full bg-zinc-800 text-xs",children:"Back"}),v.jsx("h2",{className:"text-base font-semibold",children:"Profile"})]}),x&&v.jsx("div",{className:"px-4 text-xs text-zinc-400",children:"Loading profile"}),N&&v.jsx("div",{className:"px-4 text-xs text-red-400 mb-2",children:N}),!x&&v.jsxs(v.Fragment,{children:[v.jsxs("div",{className:"px-4 flex items-center gap-3 mb-4",children:[r!=null&&r.profile_pic_url?v.jsx("img",{src:r.profile_pic_url,className:"w-14 h-14 rounded-full object-cover border border-white/10"}):v.jsx("div",{className:"w-14 h-14 rounded-full bg-zinc-700 flex items-center justify-center text-sm font-semibold border border-white/10",children:((r==null?void 0:r.full_name)||(r==null?void 0:r.username)||"?").slice(0,2).toUpperCase()}),v.jsxs("div",{className:"flex-1",children:[v.jsx("div",{className:"text-sm font-semibold",children:(r==null?void 0:r.full_name)||"No name yet"}),(r==null?void 0:r.username)&&v.jsxs("div",{className:"text-xs text-zinc-400",children:["@",r.username]}),(r==null?void 0:r.bio)&&v.jsx("div",{className:"text-xs text-zinc-300 mt-1 whitespace-pre-line",children:r.bio})]}),S()]}),v.jsx("div",{className:"px-4 mb-3",children:v.jsxs("div",{className:"flex gap-2 overflow-x-auto no-scrollbar text-xs",children:[v.jsx("button",{onClick:()=>m("all"),className:`px-3 py-1 rounded-full border ${p==="all"?"bg-white text-black border-white":"border-white/20 bg-zinc-800"}`,children:"All"}),T.map(E=>v.jsx("button",{onClick:()=>m(E),className:`px-3 py-1 rounded-full border ${p===E?"bg-white text-black border-white":"border-white/20 bg-zinc-800"}`,children:E},E))]})}),v.jsx("div",{className:"px-4",children:_.length===0?v.jsx("div",{className:"text-xs text-zinc-500",children:"No videos yet for this filter."}):v.jsx("div",{className:"grid grid-cols-3 gap-2",children:_.map((E,R)=>v.jsxs("button",{onClick:()=>g(R),className:"relative text-left rounded-xl overflow-hidden border border-white/10 group",children:[v.jsx("video",{src:JE(E.video_url),className:"w-full aspect-[9/16] object-cover",playsInline:!0,controlsList:"nodownload noremoteplayback",muted:!0}),E.emotion_tag&&v.jsx("div",{className:"absolute bottom-1 left-1 right-1 text-[9px] px-1 py-0.5 rounded-full bg-black/60 text-white text-center line-clamp-1",children:E.emotion_tag}),v.jsx("div",{className:"absolute inset-0 bg-black/0 group-hover:bg-black/15 transition"})]},E.id))})})]}),w!=null&&_[w]&&v.jsx(Lb,{videos:_,startIndex:w,onClose:()=>g(null)})]})}function jb({user:t}){const[e,n]=U.useState(""),[r,i]=U.useState(null),[s,o]=U.useState(""),[l,u]=U.useState(null),[c,f]=U.useState([]),[p,m]=U.useState([]),[x,k]=U.useState(!0),[N,O]=U.useState(!1);U.useEffect(()=>{t!=null&&t.uid&&w()},[t==null?void 0:t.uid]);async function w(){try{k(!0),o("");const[D,M]=await Promise.all([fetch(`${Ee}/friends/requests?user_id=${t.uid}`),fetch(`${Ee}/friends/list?user_id=${t.uid}`)]),T=await D.json(),_=await M.json();if(!D.ok)throw new Error(T.error||"Failed to load requests");if(!M.ok)throw new Error(_.error||"Failed to load friends");f(T.requests||[]),m(_.friends||[])}catch(D){console.error(D),o(D.message||"Failed to load friends data")}finally{k(!1)}}async function g(){if(o(""),i(null),!!e.trim())try{const D=e.trim().toLowerCase(),M=await au(bn(Dn,"usernames",D));if(!M.exists()){o("No user found with that username.");return}const T=M.data().uid;i({uid:T,username:D})}catch(D){console.error(D),o("Search error: "+D.message)}}async function I(D){if(t!=null&&t.uid){o(""),O(!0);try{const M=await fetch(`${Ee}/friends/request`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({requester_id:t.uid,receiver_id:D})}),T=await M.json();if(!M.ok)throw new Error(T.error||"Failed to send friend request");await w(),alert("Friend request sent (or already pending).")}catch(M){console.error(M),o(M.message||"Friend request failed")}finally{O(!1)}}}async function b(D,M){o("");try{const T=await fetch(`${Ee}/friends/respond`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({request_id:D,status:M})}),_=await T.json();if(!T.ok)throw new Error(_.error||"Failed to respond to request");await w()}catch(T){console.error(T),o(T.message||"Failed to respond to request")}}return l?v.jsx(Mb,{userId:l,currentUserId:t.uid,onBack:()=>u(null)}):v.jsxs("div",{className:"p-6 text-white space-y-6 pb-24",children:[v.jsx("h2",{className:"text-lg font-semibold mb-1",children:"Friends"}),v.jsxs("div",{className:"space-y-2",children:[v.jsxs("div",{className:"flex gap-2",children:[v.jsx("input",{value:e,onChange:D=>n(D.target.value),className:"flex-1 bg-zinc-800 border border-zinc-700 rounded-xl px-3 py-2 text-sm",placeholder:"Search by username..."}),v.jsx("button",{onClick:g,className:"px-4 py-2 rounded-xl bg-white text-black text-sm font-semibold",children:"Search"})]}),s&&v.jsx("div",{className:"text-red-400 text-xs",children:s}),r&&v.jsxs("div",{className:"mt-2 p-3 bg-zinc-800 rounded-xl flex items-center justify-between",children:[v.jsxs("div",{className:"text-sm",children:[v.jsxs("div",{className:"font-semibold",children:["@",r.username]}),v.jsx("div",{className:"text-xs text-zinc-400",children:"Tap to view profile"})]}),v.jsxs("div",{className:"flex gap-2",children:[v.jsx("button",{onClick:()=>I(r.uid),disabled:N,className:"px-3 py-1.5 rounded-full bg-white/90 text-black text-xs font-semibold",children:N?"Sending...":"Add Friend"}),v.jsx("button",{onClick:()=>u(r.uid),className:"px-3 py-1.5 rounded-full bg-zinc-700 text-xs",children:"View"})]})]})]}),v.jsxs("div",{className:"space-y-2",children:[v.jsx("h3",{className:"text-sm font-semibold",children:"Incoming requests"}),x&&v.jsx("div",{className:"text-xs text-zinc-500",children:"Loading…"}),!x&&c.length===0&&v.jsx("div",{className:"text-xs text-zinc-500",children:"No incoming requests."}),!x&&c.length>0&&v.jsx("div",{className:"space-y-2",children:c.map(D=>v.jsxs("div",{className:"flex items-center justify-between bg-zinc-800 rounded-xl px-3 py-2",children:[v.jsxs("div",{className:"flex items-center gap-2 cursor-pointer",onClick:()=>u(D.requester_id),children:[D.requester_profile_pic_url?v.jsx("img",{src:D.requester_profile_pic_url,className:"w-8 h-8 rounded-full object-cover"}):v.jsx("div",{className:"w-8 h-8 rounded-full bg-zinc-700 flex items-center justify-center text-[11px]",children:(D.requester_full_name||D.requester_username||"?").slice(0,2).toUpperCase()}),v.jsxs("div",{children:[v.jsx("div",{className:"text-sm font-medium",children:D.requester_full_name||"No name"}),D.requester_username&&v.jsxs("div",{className:"text-[11px] text-zinc-400",children:["@",D.requester_username]})]})]}),v.jsxs("div",{className:"flex gap-1",children:[v.jsx("button",{onClick:()=>b(D.id,"accepted"),className:"px-3 py-1 rounded-full bg-white text-black text-xs font-semibold",children:"Accept"}),v.jsx("button",{onClick:()=>b(D.id,"rejected"),className:"px-3 py-1 rounded-full bg-zinc-700 text-xs",children:"Decline"})]})]},D.id))})]}),v.jsxs("div",{className:"space-y-2",children:[v.jsx("h3",{className:"text-sm font-semibold",children:"My friends"}),x&&v.jsx("div",{className:"text-xs text-zinc-500",children:"Loading…"}),!x&&p.length===0&&v.jsx("div",{className:"text-xs text-zinc-500",children:"You haven't added any friends yet."}),!x&&p.length>0&&v.jsx("div",{className:"space-y-2",children:p.map(D=>v.jsxs("button",{onClick:()=>u(D.friend_id||D.requester_id||D.receiver_id||null),className:"w-full bg-zinc-800 rounded-xl px-3 py-2 flex items-center gap-2 text-left hover:bg-zinc-700",children:[D.friend_profile_pic_url?v.jsx("img",{src:D.friend_profile_pic_url,className:"w-8 h-8 rounded-full object-cover"}):v.jsx("div",{className:"w-8 h-8 rounded-full bg-zinc-700 flex items-center justify-center text-[11px]",children:(D.friend_full_name||D.friend_username||"?").slice(0,2).toUpperCase()}),v.jsxs("div",{children:[v.jsx("div",{className:"text-sm font-medium",children:D.friend_full_name||"No name"}),D.friend_username&&v.jsxs("div",{className:"text-[11px] text-zinc-400",children:["@",D.friend_username]})]})]},D.id))})]})]})}function Ub({user:t}){const[e,n]=U.useState((t==null?void 0:t.displayName)||""),[r,i]=U.useState(""),[s,o]=U.useState(null),[l,u]=U.useState(!1),[c,f]=U.useState("");U.useEffect(()=>{async function m(){if(!(t!=null&&t.uid))return;const x=await au(bn(Dn,"users",t.uid));x.exists()&&i(x.data().username||"")}m()},[t]);const p=async()=>{if(t){u(!0),f("");try{let m=t.photoURL;if(s){const x=xb(Nb,`profile_pics/${t.uid}`);await Ib(x,s),m=await Sb(x)}if(r.trim()){const x=r.trim().toLowerCase(),k=await au(bn(Dn,"usernames",x));if(k.exists()&&k.data().uid!==t.uid)throw new Error("That username is already taken.");await Bi(bn(Dn,"usernames",x),{uid:t.uid})}await Bi(bn(Dn,"users",t.uid),{fullName:e,username:r.toLowerCase(),photoURL:m,email:t.email,updatedAt:new Date().toISOString()},{merge:!0}),await Xh(t,{displayName:e,photoURL:m}),alert("Profile updated!")}catch(m){f(m.message)}finally{u(!1)}}};return v.jsxs("div",{className:"min-h-screen bg-bg text-white p-6 max-w-lg mx-auto",children:[v.jsx("h2",{className:"text-xl font-bold mb-4",children:"Profile Settings"}),v.jsx("input",{type:"text",value:e,onChange:m=>n(m.target.value),className:"w-full bg-zinc-800 border border-zinc-700 rounded-xl px-3 py-2 mb-3",placeholder:"Full Name"}),v.jsx("input",{type:"text",value:r,onChange:m=>i(m.target.value.toLowerCase()),className:"w-full bg-zinc-800 border border-zinc-700 rounded-xl px-3 py-2 mb-3",placeholder:"Username (unique)"}),v.jsx("input",{type:"file",accept:"image/*",onChange:m=>o(m.target.files[0]),className:"mb-3 text-xs"}),c&&v.jsx("div",{className:"text-red-400 text-xs mb-3",children:c}),v.jsx("button",{onClick:p,disabled:l,className:"px-6 py-2 rounded-full bg-white text-black font-semibold w-full mb-3",children:l?"Saving...":"Save Changes"}),v.jsx("button",{onClick:()=>{If(ar),window.location.reload()},className:"w-full px-4 py-2 rounded-full border border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition",children:"🚪 Log Out"})]})}function Fb(t){return t?t.startsWith("http://")||t.startsWith("https://")?t:t.startsWith("/")?`${Ee}${t}`:`${Ee}/${t}`:""}function zb({user:t,profile:e,onClose:n,onSaved:r}){const[i,s]=U.useState(null),[o,l]=U.useState((e==null?void 0:e.full_name)||""),[u,c]=U.useState((e==null?void 0:e.username)||""),[f,p]=U.useState(!1),[m,x]=U.useState("");U.useEffect(()=>{l((e==null?void 0:e.full_name)||""),c((e==null?void 0:e.username)||"")},[e==null?void 0:e.full_name,e==null?void 0:e.username]);const k=async w=>{if(w.preventDefault(),!!(t!=null&&t.uid)){p(!0),x("");try{const g=new FormData;g.append("user_id",t.uid),g.append("email",t.email||""),g.append("full_name",o.trim()),g.append("username",u.trim()),i&&g.append("avatar",i);const I=await fetch(`${Ee}/profile`,{method:"POST",body:g});if(I.status===409){const D=await I.json();throw new Error(D.error||"Username already taken")}if(!I.ok){const D=await I.text();throw new Error(D||"Profile save failed")}const b=await I.json();console.log("Profile saved successfully, calling onSaved with:",b.profile),r&&(console.log("onSaved callback exists, awaiting it"),await r(b.profile),console.log("onSaved callback completed"))}catch(g){console.error("Profile save error:",g),x(g.message||"Profile save failed")}finally{p(!1)}}},N=i?URL.createObjectURL(i):e!=null&&e.profile_pic_url?Fb(e.profile_pic_url):null,O=((e==null?void 0:e.full_name)||(t==null?void 0:t.email)||"?").split(" ").filter(Boolean).map(w=>w[0].toUpperCase()).slice(0,2).join("")||"?";return v.jsx("div",{className:"fixed inset-0 bg-black/60 flex items-center justify-center z-50",children:v.jsxs("div",{className:"bg-zinc-900 rounded-3xl border border-white/10 w-full max-w-sm p-5 shadow-xl",children:[v.jsx("div",{className:"text-sm font-semibold mb-4",children:"Profile Settings"}),v.jsxs("form",{onSubmit:k,className:"space-y-3",children:[v.jsxs("div",{className:"flex items-center gap-3 mb-2",children:[N?v.jsx("img",{src:N,alt:"Avatar preview",className:"w-14 h-14 rounded-full object-cover border border-white/10"}):v.jsx("div",{className:"w-14 h-14 rounded-full bg-zinc-700 flex items-center justify-center text-white text-lg font-semibold border border-white/10",children:O}),v.jsxs("label",{className:"text-[11px] text-zinc-400 cursor-pointer",children:[v.jsx("span",{className:"px-2 py-1 rounded-full border border-white/20",children:"Choose photo"}),v.jsx("input",{type:"file",accept:"image/*",className:"hidden",onChange:w=>{var g;return s(((g=w.target.files)==null?void 0:g[0])||null)}})]})]}),v.jsxs("div",{className:"space-y-2",children:[v.jsxs("label",{className:"block text-[11px] text-zinc-400",children:["Full name",v.jsx("input",{type:"text",value:o,onChange:w=>l(w.target.value),className:"mt-1 w-full rounded-lg bg-zinc-800 border border-white/10 px-3 py-2 text-sm focus:outline-none focus:border-white/30",placeholder:"Add your name"})]}),v.jsxs("label",{className:"block text-[11px] text-zinc-400",children:["Username",v.jsx("input",{type:"text",value:u,onChange:w=>c(w.target.value),className:"mt-1 w-full rounded-lg bg-zinc-800 border border-white/10 px-3 py-2 text-sm focus:outline-none focus:border-white/30",placeholder:"Add a username"})]})]}),m&&v.jsx("div",{className:"text-[11px] text-red-400",children:m}),v.jsxs("div",{className:"flex justify-end gap-2 pt-2",children:[v.jsx("button",{type:"button",onClick:n,className:"px-3 py-1.5 rounded-full bg-zinc-800 text-xs",disabled:f,children:"Cancel"}),v.jsx("button",{type:"submit",className:"px-3 py-1.5 rounded-full bg-white text-black text-xs font-semibold",disabled:f,children:f?"Saving…":"Save"})]})]})]})})}function md(t){return t?t.startsWith("http")?t:`${Ee}/${t}`:""}const Bb=["sad","paralyzed","rejected","depressed","loss","shame","angry","hopeless","lonely","ashamed","regret","powerless","annoyed","insecure","left out","nervous","unmotivated","anxious","jealous","stressed","tired","drained","overwhelmed","frustrated","unfulfilled","vulnerable","unsure","awkward","zoned out","reflective","bored","meh","curious","numb","stuck","appreciated","comfortable","thankful","motivated","hope","satisfied","calm","fired up","nostalgic","relieved","surprised","brave","creative","free","love","grateful","confident","excited","happy","proud","proud","motivated","grateful","calm","excited","productive","neutral","indifferent","distracted","content","unfocused","under pressure","burned out","rushed","worried","hopeless","sensitive","heartbroken","resentful","hurt","enraged","impatient"],n_=t=>t?t.toLowerCase().trim():"",$b=t=>t?t.split(" ").map(e=>e[0].toUpperCase()+e.slice(1)).join(" "):"";function Hb({user:t}){var Vt,Lt;const[e,n]=U.useState("videos"),[r,i]=U.useState([]),[s,o]=U.useState([]),[l,u]=U.useState(null),[c,f]=U.useState(!1),[p,m]=U.useState(null),[x,k]=U.useState(null),[N,O]=U.useState({}),[w,g]=U.useState(!1),[I,b]=U.useState(null),[D,M]=U.useState(""),[T,_]=U.useState(""),[S,E]=U.useState(!1),[R,C]=U.useState(""),[A,ze]=U.useState(null),St=()=>{typeof navigator<"u"&&navigator.vibrate&&navigator.vibrate(10)},jr=U.useMemo(()=>Array.from(new Set(Bb.map(n_))),[]),Ot=(W,ue="neutral")=>{ze({message:W,tone:ue}),setTimeout(()=>ze(null),1800)};U.useEffect(()=>{t!=null&&t.uid&&B()},[t==null?void 0:t.uid]);async function B(){const[W,ue,ce]=await Promise.all([fetch(`${Ee}/moods?user_id=${t.uid}`),fetch(`${Ee}/videos?user_id=${t.uid}`),fetch(`${Ee}/profile?user_id=${t.uid}`)]),ne=(await W.json()).moods||[],sn=(await ue.json()).videos||[],In=(await ce.json()).profile||null;i(ne),o(sn),u(In)}async function X(W){if(!window.confirm("Delete this video?"))return;(await(await fetch(`${Ee}/videos/${W}`,{method:"DELETE"})).json()).success&&(o(sn=>sn.filter(In=>In.id!==W)),k(null))}async function Z(){try{await If(ar)}catch(W){console.error("Sign out failed",W),window.alert("Sign out failed. Please try again.")}}async function me(W){if(W.preventDefault(),!(!I||!D||!t))try{E(!0),C("");const ue=new FormData;ue.append("video",I),ue.append("emotion",D),ue.append("caption",T),ue.append("user_id",t.uid),ue.append("user_email",t.email);const ce=await fetch(`${Ee}/upload`,{method:"POST",body:ue}),ne=await ce.json();if(!ce.ok||!ne.video)throw new Error(ne.error||"Upload failed");b(null),M(""),_(""),g(!1),await B(),St(),Ot("Uploaded","success")}catch(ue){console.error("Upload failed",ue),C(ue.message||"Upload failed"),Ot("Upload failed","error")}finally{E(!1)}}U.useEffect(()=>{p!=null&&p>=s.length&&m(s.length?s.length-1:null)},[p,s.length]);const le=new Date().toISOString().slice(0,10),we=U.useMemo(()=>{const W=new Map;return r.forEach(ce=>{const ne=(ce.created_at||"").slice(0,10)||"Unknown";W.has(ne)||W.set(ne,[]),W.get(ne).push(ce)}),Array.from(W.keys()).sort((ce,ne)=>ne.localeCompare(ce)).map(ce=>({key:ce,label:Wt(ce,le),moods:W.get(ce)}))},[r,le]);function Wt(W,ue){if(!W||W==="Unknown")return"Unknown day";if(W===ue)return"Today";const ce=new Date;ce.setHours(0,0,0,0);const ne=new Date(W);return Number.isFinite(ne.getTime())?Math.round((ce-ne)/(1e3*60*60*24))===1?"Yesterday":ne.toLocaleDateString(void 0,{weekday:"long",month:"short",day:"numeric"}):W}const qt=W=>{O(ue=>({...ue,[W]:!ue[W]}))};return v.jsxs("div",{className:"space-y-4 pb-24",children:[v.jsxs("div",{className:"flex items-center justify-between bg-card border border-white/10 p-4 rounded-2xl",children:[v.jsxs("div",{className:"flex items-center gap-3",children:[l!=null&&l.profile_pic_url?v.jsx("img",{src:md(l.profile_pic_url),className:"w-12 h-12 rounded-full object-cover border border-white/10"}):v.jsx("div",{className:"w-12 h-12 bg-zinc-700 rounded-full flex items-center justify-center text-white",children:((Lt=(Vt=l==null?void 0:l.full_name)==null?void 0:Vt[0])==null?void 0:Lt.toUpperCase())||"?"}),v.jsxs("div",{children:[v.jsx("div",{className:"font-semibold",children:(l==null?void 0:l.full_name)||"No name yet"}),(l==null?void 0:l.username)&&v.jsxs("div",{className:"text-xs text-zinc-400",children:["@",l.username]}),v.jsx("div",{className:"text-xs text-zinc-500",children:t.email})]})]}),v.jsxs("div",{className:"flex gap-2",children:[v.jsx("button",{onClick:()=>f(!0),className:"px-3 py-1.5 bg-white/10 rounded-full",children:"Settings"}),v.jsx("button",{onClick:Z,className:"px-3 py-1.5 bg-red-500/90 text-white rounded-full",children:"Sign out"})]})]}),v.jsxs("div",{className:"flex gap-4 bg-card/70 p-2 rounded-xl text-xs",children:[v.jsx("button",{onClick:()=>n("moods"),className:`px-3 py-1 rounded-lg ${e==="moods"?"bg-white/20 font-semibold":""}`,children:"My emotions"}),v.jsx("button",{onClick:()=>n("videos"),className:`px-3 py-1 rounded-lg ${e==="videos"?"bg-white/20 font-semibold":""}`,children:"My videos"})]}),e==="videos"&&v.jsx("div",{className:"grid grid-cols-2 md:grid-cols-3 gap-4",children:s.map(W=>{const ue=md(W.video_url);return v.jsxs("div",{className:"relative cursor-pointer rounded-xl overflow-hidden border border-white/10 group",onClick:()=>m(s.findIndex(ce=>ce.id===W.id)),children:[v.jsx("video",{src:ue,muted:!0,playsInline:!0,className:"w-full h-40 object-cover pointer-events-none"}),v.jsx("button",{className:"absolute top-2 right-2 bg-black/70 text-white rounded-full px-2 py-1 z-20",onClick:ce=>{ce.stopPropagation(),k(x===W.id?null:W.id)},children:"⋮"}),x===W.id&&v.jsx("div",{className:"absolute top-10 right-2 bg-zinc-900 text-white rounded-lg shadow-lg p-2 z-30",onClick:ce=>ce.stopPropagation(),children:v.jsx("button",{className:"block w-full text-left text-red-400",onClick:()=>X(W.id),children:"Delete"})})]},W.id)})}),e==="moods"&&v.jsxs("div",{className:"space-y-3 text-sm",children:[we.length===0&&v.jsx("div",{className:"text-zinc-400 text-xs",children:"No moods logged yet."}),we.map(W=>{const ue=W.key===le,ce=ue||N[W.key];return v.jsxs("div",{className:"rounded-xl border border-white/10 bg-white/5",children:[v.jsxs("button",{className:"w-full flex items-center justify-between px-3 py-2 text-left",onClick:()=>{ue||qt(W.key)},children:[v.jsxs("div",{className:"flex items-center gap-2",children:[v.jsx("div",{className:"font-semibold text-white",children:W.label}),v.jsxs("div",{className:"text-[11px] text-zinc-400",children:[W.moods.length," mood",W.moods.length!==1?"s":""]})]}),!ue&&v.jsx("span",{className:"text-xs text-zinc-400",children:ce?"Hide":"Show"})]}),ce&&v.jsx("div",{className:"space-y-3 px-3 pb-3",children:W.moods.map(ne=>{const sn=ne.mood_label||ne.sub_mood||ne.core_mood||"Unknown mood",In=ne.mood_level??"?",ws=ne.created_at?new Date(ne.created_at.replace(" ","T")).toLocaleString():"",Es=ne.reasons||ne.reason||"",Ts=ne.sub_mood&&ne.core_mood?`${ne.core_mood} -> ${ne.sub_mood}`:ne.sub_mood||ne.core_mood||"";return v.jsxs("div",{className:"p-3 rounded-xl border border-white/10 bg-white/5 flex flex-col gap-1",children:[v.jsxs("div",{className:"flex items-center justify-between",children:[v.jsx("div",{className:"font-semibold text-white",children:sn}),v.jsxs("div",{className:"text-[11px] text-zinc-400",children:["Level ",In]})]}),Ts&&v.jsx("div",{className:"text-[11px] text-zinc-300",children:Ts}),v.jsx("div",{className:"text-[11px] text-zinc-400",children:Es||"No extra details"}),v.jsx("div",{className:"text-[10px] text-zinc-500",children:ws})]},ne.id)})})]},W.key)})]}),e==="videos"&&v.jsxs(v.Fragment,{children:[v.jsx("button",{onClick:()=>g(!0),className:"fixed right-4 z-[1001] px-5 py-3 rounded-full bg-white text-black font-semibold shadow-lg shadow-black/40",style:{bottom:"calc(5rem + env(safe-area-inset-bottom))"},children:"+ Upload video"}),w&&v.jsx("div",{className:"fixed inset-0 bg-black/70 z-[1002] flex items-end sm:items-center justify-center p-4",children:v.jsxs("div",{className:"w-full max-w-md bg-zinc-900 border border-white/10 rounded-3xl p-4 space-y-3",children:[v.jsxs("div",{className:"flex items-center justify-between",children:[v.jsx("div",{className:"text-sm font-semibold",children:"Share a new video"}),v.jsx("button",{onClick:()=>{g(!1),C("")},className:"text-xl px-2",children:"×"})]}),v.jsxs("form",{onSubmit:me,className:"space-y-3",children:[v.jsxs("div",{className:"space-y-1",children:[v.jsx("label",{className:"text-[11px] text-zinc-400",children:"Video file"}),v.jsx("input",{type:"file",accept:"video/*",onChange:W=>{var ue;return b(((ue=W.target.files)==null?void 0:ue[0])||null)},className:"block w-full text-[11px] text-zinc-200 file:mr-3 file:px-3 file:py-1.5 file:rounded-full file:border-0 file:bg-white file:text-black file:text-[11px] file:font-medium"})]}),v.jsxs("div",{className:"space-y-1",children:[v.jsx("label",{className:"text-[11px] text-zinc-400",children:"How were you feeling?"}),v.jsxs("select",{value:D,onChange:W=>M(n_(W.target.value)),className:"w-full bg-zinc-950 border border-zinc-700 rounded-xl px-3 py-2 text-xs",children:[v.jsx("option",{value:"",children:"Select emotion"}),jr.map(W=>v.jsx("option",{value:W,children:$b(W)},W))]})]}),v.jsxs("div",{className:"space-y-1",children:[v.jsx("label",{className:"text-[11px] text-zinc-400",children:"Caption (optional)"}),v.jsx("textarea",{value:T,onChange:W=>_(W.target.value),rows:2,placeholder:"Write a short caption…",className:"w-full bg-zinc-950 border border-zinc-700 rounded-xl px-3 py-2 text-xs resize-none placeholder:text-zinc-500"})]}),R&&v.jsx("div",{className:"text-[11px] text-red-400",children:R}),v.jsx("button",{type:"submit",disabled:S||!I||!D,className:"w-full rounded-full bg-white text-black py-2 text-xs font-semibold disabled:opacity-40 disabled:cursor-not-allowed",children:S?"Uploading…":"Post video"})]})]})})]}),p!=null&&s[p]&&v.jsx(Wb,{videos:s,startIndex:p,onClose:()=>m(null)}),c&&v.jsx(zb,{user:t,profile:l,onClose:()=>f(!1),onSaved:async W=>{W&&W.full_name?u(W):await B(),f(!1)}}),A&&v.jsx("div",{className:"fixed bottom-16 left-1/2 -translate-x-1/2 z-[1100] px-4 py-2 rounded-full border border-white/15 bg-black/80 text-xs",children:A.message})]})}function Wb({videos:t,startIndex:e,onClose:n}){const[r,i]=U.useState(e),s=U.useState(()=>new Map)[0],o=U.useRef(null);return U.useEffect(()=>i(e),[e]),U.useEffect(()=>{const l=s.get(r);l&&l.scrollIntoView&&l.scrollIntoView({behavior:"smooth",block:"center"})},[r,s]),U.useEffect(()=>{let l=0;const u=f=>{const p=Date.now();p-l<200||(f.deltaY>10&&r<t.length-1?(i(m=>Math.min(m+1,t.length-1)),l=p):f.deltaY<-10&&r>0&&(i(m=>Math.max(m-1,0)),l=p))},c=o.current;return c==null||c.addEventListener("wheel",u,{passive:!0}),()=>c==null?void 0:c.removeEventListener("wheel",u)},[r,t.length]),U.useEffect(()=>{const l=u=>{u.key==="ArrowDown"||u.key==="ArrowRight"?i(c=>Math.min(c+1,t.length-1)):u.key==="ArrowUp"||u.key==="ArrowLeft"?i(c=>Math.max(c-1,0)):u.key==="Escape"&&(n==null||n())};return window.addEventListener("keydown",l),()=>window.removeEventListener("keydown",l)},[t.length,n]),v.jsx("div",{className:"fixed inset-0 bg-black/85 z-[999] flex items-center justify-center p-4",children:v.jsxs("div",{className:"relative w-full max-w-4xl h-full",children:[v.jsx("div",{ref:o,className:"w-full h-full max-h-[90vh] overflow-y-auto space-y-4 pr-1",children:t.map((l,u)=>v.jsxs("div",{ref:c=>c&&s.set(u,c),className:`rounded-xl border border-white/10 bg-black/30 p-2 ${u===r?"shadow-[0_0_0_2px_rgba(255,255,255,0.15)]":""}`,children:[v.jsx("video",{src:md(l.video_url),controls:!0,autoPlay:u===r,playsInline:!0,controlsList:"nodownload noremoteplayback",className:"w-full max-h-[70vh] rounded-lg"}),l.emotion_tag&&v.jsx("div",{className:"text-[11px] text-zinc-300 mt-1",children:l.emotion_tag})]},l.id))}),v.jsx("button",{onClick:n,className:"absolute -top-10 right-0 text-white text-3xl bg-black/70 px-4 py-2 rounded-full",children:"×"})]})})}function qb(){const[t,e]=U.useState(null),[n,r]=U.useState(!0),[i,s]=U.useState(!1),[o,l]=U.useState(null),[u,c]=U.useState("watch"),[f,p]=U.useState("");U.useEffect(()=>{const k=UA(ar,N=>{e(N||null),r(!1),N?(s(!1),c("mood")):(l(null),c("mood"))});return()=>k()},[]);const m=async k=>{const N=((k==null?void 0:k.emotionTag)||(k==null?void 0:k.subMood)||(k==null?void 0:k.core)||(k==null?void 0:k.label)||"").toString().toLowerCase();l(k),s(!0),p(N),c("watch"),t!=null&&t.uid&&await fetch(`${Ee}/moods`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({user_id:t.uid,mood_level:k.level,mood_label:k.label,core_mood:k.core,sub_mood:k.subMood,reasons:k.reasons,emotion_tag:k.emotionTag})})},x=()=>{s(!0),c("watch"),p("")};return n?v.jsx("div",{className:"min-h-screen bg-bg flex items-center justify-center text-zinc-400 text-sm",children:"Loading ENUF…"}):t?i?v.jsxs("div",{className:"min-h-screen bg-bg text-white pb-16 safe-area",children:[v.jsx("button",{onClick:()=>c("mood"),className:`fixed right-4 z-[1000] px-4 py-2 rounded-full bg-white text-black font-semibold shadow-lg
    ${u==="me"?"top-20":"top-4"}`,children:"+ ENUF"}),v.jsxs("main",{className:"pb-24",children:[u==="mood"&&v.jsx(t_,{onComplete:m}),u==="watch"&&v.jsx(Ob,{user:t,initialEmotion:f}),u==="me"&&v.jsx(Hb,{user:t,lastMood:o,setActiveTab:c}),u==="friends"&&v.jsx(jb,{user:t}),u==="settings"&&v.jsx(Ub,{user:t})]}),v.jsxs("footer",{className:"fixed bottom-0 left-0 right-0 bg-black/90 border-t border-white/10 flex justify-around py-3 text-xs z-[999]",children:[v.jsx(Gc,{label:"Friends",icon:"👫",tab:"friends",activeTab:u,setActiveTab:c}),v.jsx(Gc,{label:"Watch",icon:"🎥",tab:"watch",activeTab:u,setActiveTab:c}),v.jsx(Gc,{label:"Me",icon:"👤",tab:"me",activeTab:u,setActiveTab:c})]})]}):v.jsx("div",{className:"min-h-screen bg-bg text-white",children:v.jsx(t_,{onComplete:m,onCancel:x})}):v.jsx("div",{className:"min-h-screen bg-bg text-white flex items-center justify-center",children:v.jsx(bb,{user:null})})}function Gc({label:t,icon:e,tab:n,activeTab:r,setActiveTab:i}){return v.jsxs("button",{onClick:()=>i(n),className:`flex flex-col items-center gap-0.5 ${r===n?"text-white font-semibold":"text-zinc-400"}`,children:[v.jsx("span",{children:e}),v.jsx("span",{children:t})]})}Qc.createRoot(document.getElementById("root")).render(v.jsx(HT.StrictMode,{children:v.jsx(qb,{})}));
