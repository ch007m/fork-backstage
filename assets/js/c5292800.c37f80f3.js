/*! For license information please see c5292800.c37f80f3.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[272282],{820124:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>f,frontMatter:()=>s,metadata:()=>u,toc:()=>i});var n=r(824246),o=r(511151);const s={id:"writing-custom-step-layouts",title:"Writing custom step layouts",description:"How to override the default step form layout"},a=void 0,u={id:"features/software-templates/writing-custom-step-layouts",title:"Writing custom step layouts",description:"How to override the default step form layout",source:"@site/../docs/features/software-templates/writing-custom-step-layouts.md",sourceDirName:"features/software-templates",slug:"/features/software-templates/writing-custom-step-layouts",permalink:"/docs/features/software-templates/writing-custom-step-layouts",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/features/software-templates/writing-custom-step-layouts.md",tags:[],version:"current",frontMatter:{id:"writing-custom-step-layouts",title:"Writing custom step layouts",description:"How to override the default step form layout"},sidebar:"docs",previous:{title:"Writing Custom Field Extensions",permalink:"/docs/features/software-templates/writing-custom-field-extensions"},next:{title:"Authorizing parameters, steps and actions",permalink:"/docs/features/software-templates/authorizing-parameters-steps-and-actions"}},c={},i=[{value:"Registering a React component as a custom step layout",id:"registering-a-react-component-as-a-custom-step-layout",level:2},{value:"Using the custom step layout",id:"using-the-custom-step-layout",level:2}];function l(e){const t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["Every form in each step rendered in the frontend uses the default form layout from ",(0,n.jsx)(t.a,{href:"https://rjsf-team.github.io/react-jsonschema-form/docs/",children:"react-jsonschema-form"}),". It is possible to override this behaviour by supplying a ",(0,n.jsx)(t.code,{children:"ui:ObjectFieldTemplate"})," property for a particular step:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-yaml",children:"parameters:\n  - title: Fill in some steps\n    ui:ObjectFieldTemplate: TwoColumn\n"})}),"\n",(0,n.jsxs)(t.p,{children:["This is the same ",(0,n.jsx)(t.a,{href:"https://rjsf-team.github.io/react-jsonschema-form/docs/advanced-customization/custom-templates#objectfieldtemplate",children:"field"})," used by ",(0,n.jsx)(t.a,{href:"https://rjsf-team.github.io/react-jsonschema-form/docs/",children:"react-jsonschema-form"})," but we need to add a couple of steps to ensure that the string value of ",(0,n.jsx)(t.code,{children:"TwoColumn"})," above is resolved to a react component."]}),"\n",(0,n.jsx)(t.h2,{id:"registering-a-react-component-as-a-custom-step-layout",children:"Registering a React component as a custom step layout"}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.a,{href:"https://backstage.io/docs/reference/plugin-scaffolder.createscaffolderlayout",children:"createScaffolderLayout"})," function is used to mark a component as a custom step layout:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ts",children:"import React from 'react';\nimport { scaffolderPlugin } from '@backstage/plugin-scaffolder';\nimport {\n  createScaffolderLayout,\n  LayoutTemplate,\n} from '@backstage/plugin-scaffolder-react';\nimport { Grid } from '@material-ui/core';\n\nconst TwoColumn: LayoutTemplate = ({ properties, description, title }) => {\n  const mid = Math.ceil(properties.length / 2);\n\n  return (\n    <>\n      <h1>{title}</h1>\n      <h2>In two column layout!!</h2>\n      <Grid container justifyContent=\"flex-end\">\n        {properties.slice(0, mid).map(prop => (\n          <Grid item xs={6} key={prop.content.key}>\n            {prop.content}\n          </Grid>\n        ))}\n        {properties.slice(mid).map(prop => (\n          <Grid item xs={6} key={prop.content.key}>\n            {prop.content}\n          </Grid>\n        ))}\n      </Grid>\n      {description}\n    </>\n  );\n};\n\nexport const TwoColumnLayout = scaffolderPlugin.provide(\n  createScaffolderLayout({\n    name: 'TwoColumn',\n    component: TwoColumn,\n  }),\n);\n"})}),"\n",(0,n.jsxs)(t.p,{children:["After you have registered your component as a custom layout then you need to provide the ",(0,n.jsx)(t.code,{children:"layouts"})," to the ",(0,n.jsx)(t.code,{children:"ScaffolderPage"}),":"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",children:"import { MyCustomFieldExtension } from './scaffolder/MyCustomExtension';\nimport { TwoColumnLayout } from './components/scaffolder/customScaffolderLayouts';\n\nconst routes = (\n  <FlatRoutes>\n    ...\n    <Route path=\"/create\" element={<ScaffolderPage />}>\n      <ScaffolderLayouts>\n        <TwoColumnLayout />\n      </ScaffolderLayouts>\n    </Route>\n    ...\n  </FlatRoutes>\n);\n"})}),"\n",(0,n.jsx)(t.h2,{id:"using-the-custom-step-layout",children:"Using the custom step layout"}),"\n",(0,n.jsxs)(t.p,{children:["Any component that has been passed to the ",(0,n.jsx)(t.code,{children:"ScaffolderPage"})," as children of the ",(0,n.jsx)(t.code,{children:"ScaffolderLayouts"})," component can be used as a ",(0,n.jsx)(t.code,{children:"ui:ObjectFieldTemplate"})," in your template file:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-yaml",children:"parameters:\n  - title: Fill in some steps\n    ui:ObjectFieldTemplate: TwoColumn\n"})})]})}function f(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},371426:(e,t,r)=>{var n=r(827378),o=Symbol.for("react.element"),s=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,u=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function i(e,t,r){var n,s={},i=null,l=null;for(n in void 0!==r&&(i=""+r),void 0!==t.key&&(i=""+t.key),void 0!==t.ref&&(l=t.ref),t)a.call(t,n)&&!c.hasOwnProperty(n)&&(s[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===s[n]&&(s[n]=t[n]);return{$$typeof:o,type:e,key:i,ref:l,props:s,_owner:u.current}}t.Fragment=s,t.jsx=i,t.jsxs=i},541535:(e,t)=>{var r=Symbol.for("react.element"),n=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),c=Symbol.for("react.context"),i=Symbol.for("react.forward_ref"),l=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),d=Symbol.iterator;var m={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y=Object.assign,h={};function g(e,t,r){this.props=e,this.context=t,this.refs=h,this.updater=r||m}function b(){}function v(e,t,r){this.props=e,this.context=t,this.refs=h,this.updater=r||m}g.prototype.isReactComponent={},g.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},g.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},b.prototype=g.prototype;var _=v.prototype=new b;_.constructor=v,y(_,g.prototype),_.isPureReactComponent=!0;var j=Array.isArray,w=Object.prototype.hasOwnProperty,x={current:null},S={key:!0,ref:!0,__self:!0,__source:!0};function k(e,t,n){var o,s={},a=null,u=null;if(null!=t)for(o in void 0!==t.ref&&(u=t.ref),void 0!==t.key&&(a=""+t.key),t)w.call(t,o)&&!S.hasOwnProperty(o)&&(s[o]=t[o]);var c=arguments.length-2;if(1===c)s.children=n;else if(1<c){for(var i=Array(c),l=0;l<c;l++)i[l]=arguments[l+2];s.children=i}if(e&&e.defaultProps)for(o in c=e.defaultProps)void 0===s[o]&&(s[o]=c[o]);return{$$typeof:r,type:e,key:a,ref:u,props:s,_owner:x.current}}function C(e){return"object"==typeof e&&null!==e&&e.$$typeof===r}var R=/\/+/g;function E(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function T(e,t,o,s,a){var u=typeof e;"undefined"!==u&&"boolean"!==u||(e=null);var c=!1;if(null===e)c=!0;else switch(u){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case r:case n:c=!0}}if(c)return a=a(c=e),e=""===s?"."+E(c,0):s,j(a)?(o="",null!=e&&(o=e.replace(R,"$&/")+"/"),T(a,t,o,"",(function(e){return e}))):null!=a&&(C(a)&&(a=function(e,t){return{$$typeof:r,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(a,o+(!a.key||c&&c.key===a.key?"":(""+a.key).replace(R,"$&/")+"/")+e)),t.push(a)),1;if(c=0,s=""===s?".":s+":",j(e))for(var i=0;i<e.length;i++){var l=s+E(u=e[i],i);c+=T(u,t,o,l,a)}else if(l=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e),"function"==typeof l)for(e=l.call(e),i=0;!(u=e.next()).done;)c+=T(u=u.value,t,o,l=s+E(u,i++),a);else if("object"===u)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return c}function O(e,t,r){if(null==e)return e;var n=[],o=0;return T(e,n,"","",(function(e){return t.call(r,e,o++)})),n}function $(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var P={current:null},L={transition:null},F={ReactCurrentDispatcher:P,ReactCurrentBatchConfig:L,ReactCurrentOwner:x};t.Children={map:O,forEach:function(e,t,r){O(e,(function(){t.apply(this,arguments)}),r)},count:function(e){var t=0;return O(e,(function(){t++})),t},toArray:function(e){return O(e,(function(e){return e}))||[]},only:function(e){if(!C(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=g,t.Fragment=o,t.Profiler=a,t.PureComponent=v,t.StrictMode=s,t.Suspense=l,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=F,t.cloneElement=function(e,t,n){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=y({},e.props),s=e.key,a=e.ref,u=e._owner;if(null!=t){if(void 0!==t.ref&&(a=t.ref,u=x.current),void 0!==t.key&&(s=""+t.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(i in t)w.call(t,i)&&!S.hasOwnProperty(i)&&(o[i]=void 0===t[i]&&void 0!==c?c[i]:t[i])}var i=arguments.length-2;if(1===i)o.children=n;else if(1<i){c=Array(i);for(var l=0;l<i;l++)c[l]=arguments[l+2];o.children=c}return{$$typeof:r,type:e.type,key:s,ref:a,props:o,_owner:u}},t.createContext=function(e){return(e={$$typeof:c,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:u,_context:e},e.Consumer=e},t.createElement=k,t.createFactory=function(e){var t=k.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:i,render:e}},t.isValidElement=C,t.lazy=function(e){return{$$typeof:p,_payload:{_status:-1,_result:e},_init:$}},t.memo=function(e,t){return{$$typeof:f,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=L.transition;L.transition={};try{e()}finally{L.transition=t}},t.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},t.useCallback=function(e,t){return P.current.useCallback(e,t)},t.useContext=function(e){return P.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return P.current.useDeferredValue(e)},t.useEffect=function(e,t){return P.current.useEffect(e,t)},t.useId=function(){return P.current.useId()},t.useImperativeHandle=function(e,t,r){return P.current.useImperativeHandle(e,t,r)},t.useInsertionEffect=function(e,t){return P.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return P.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return P.current.useMemo(e,t)},t.useReducer=function(e,t,r){return P.current.useReducer(e,t,r)},t.useRef=function(e){return P.current.useRef(e)},t.useState=function(e){return P.current.useState(e)},t.useSyncExternalStore=function(e,t,r){return P.current.useSyncExternalStore(e,t,r)},t.useTransition=function(){return P.current.useTransition()},t.version="18.2.0"},827378:(e,t,r)=>{e.exports=r(541535)},824246:(e,t,r)=>{e.exports=r(371426)},511151:(e,t,r)=>{r.d(t,{Z:()=>u,a:()=>a});var n=r(667294);const o={},s=n.createContext(o);function a(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function u(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);