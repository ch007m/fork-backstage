/*! For license information please see 64364ffa.314d592e.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[257809],{456994:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var r=n(824246),a=n(511151);const o={id:"keeping-backstage-updated",title:"Keeping Backstage Updated",description:"How to keep your Backstage App updated"},s=void 0,c={id:"getting-started/keeping-backstage-updated",title:"Keeping Backstage Updated",description:"How to keep your Backstage App updated",source:"@site/../docs/getting-started/keeping-backstage-updated.md",sourceDirName:"getting-started",slug:"/getting-started/keeping-backstage-updated",permalink:"/docs/getting-started/keeping-backstage-updated",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/getting-started/keeping-backstage-updated.md",tags:[],version:"current",frontMatter:{id:"keeping-backstage-updated",title:"Keeping Backstage Updated",description:"How to keep your Backstage App updated"},sidebar:"docs",previous:{title:"Backstage homepage - Setup and Customization",permalink:"/docs/getting-started/homepage"},next:{title:"Key Concepts",permalink:"/docs/getting-started/concepts"}},i={},u=[{value:"Updating Backstage versions with backstage-cli",id:"updating-backstage-versions-with-backstage-cli",level:2},{value:"Following create-app template changes",id:"following-create-app-template-changes",level:2},{value:"More information on dependency mismatches",id:"more-information-on-dependency-mismatches",level:2}];function l(e){const t={a:"a",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["Backstage is always improving, so it's a good idea to stay in sync with the\nlatest releases. Backstage is more of a library than an application or service;\nsimilar to ",(0,r.jsx)(t.code,{children:"create-react-app"}),", the ",(0,r.jsx)(t.code,{children:"@backstage/create-app"})," tool gives you a\nstarting point that's meant to be evolved."]}),"\n",(0,r.jsx)(t.h2,{id:"updating-backstage-versions-with-backstage-cli",children:"Updating Backstage versions with backstage-cli"}),"\n",(0,r.jsxs)(t.p,{children:["The Backstage CLI has a command to bump all ",(0,r.jsx)(t.code,{children:"@backstage"})," packages and\ndependencies you're using to the latest versions:\n",(0,r.jsx)(t.a,{href:"https://backstage.io/docs/local-dev/cli-commands#versionsbump",children:"versions:bump"}),"."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"yarn backstage-cli versions:bump\n"})}),"\n",(0,r.jsxs)(t.p,{children:["The reason for bumping all ",(0,r.jsx)(t.code,{children:"@backstage"})," packages at once is to maintain the\ndependencies that they have between each other."]}),"\n",(0,r.jsxs)(t.p,{children:["By default the bump command will upgrade ",(0,r.jsx)(t.code,{children:"@backstage"})," packages to the latest ",(0,r.jsx)(t.code,{children:"main"})," release line which is released monthly. For those in a hurry that want to track the ",(0,r.jsx)(t.code,{children:"next"})," release line which releases weekly can do so using the ",(0,r.jsx)(t.code,{children:"--release next"})," option."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"yarn backstage-cli versions:bump --release next\n"})}),"\n",(0,r.jsxs)(t.p,{children:["If you are using other plugins you can pass in the ",(0,r.jsx)(t.code,{children:"--pattern"})," option to update\nmore than just the ",(0,r.jsx)(t.code,{children:"@backstage/*"})," dependencies."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"yarn backstage-cli versions:bump --pattern '@{backstage,roadiehq}/*'\n"})}),"\n",(0,r.jsx)(t.h2,{id:"following-create-app-template-changes",children:"Following create-app template changes"}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"@backstage/create-app"})," command creates the initial structure of your\nBackstage installation from a ",(0,r.jsx)(t.strong,{children:"template"}),". The source of this template in the\nBackstage repository is updated periodically, but your local ",(0,r.jsx)(t.code,{children:"app"})," and ",(0,r.jsx)(t.code,{children:"backend"}),"\npackages are established at ",(0,r.jsx)(t.code,{children:"create-app"})," time and won't automatically get these\ntemplate updates."]}),"\n",(0,r.jsxs)(t.p,{children:["For this reason, any changes made to the template are documented along with\nupgrade instructions in the\n",(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/blob/master/packages/create-app/CHANGELOG.md",children:"changelog"}),"\nof the ",(0,r.jsx)(t.code,{children:"@backstage/create-app"})," package. We recommend peeking at this changelog\nfor any applicable updates when upgrading packages. As an alternative, the\n",(0,r.jsx)(t.a,{href:"https://backstage.github.io/upgrade-helper/",children:"Backstage Upgrade Helper"})," provides\na consolidated view of all the changes between two versions of Backstage. You\ncan find the current version of your Backstage installation in ",(0,r.jsx)(t.code,{children:"backstage.json"}),"."]}),"\n",(0,r.jsx)(t.h2,{id:"more-information-on-dependency-mismatches",children:"More information on dependency mismatches"}),"\n",(0,r.jsxs)(t.p,{children:["Backstage is structured as a monorepo with\n",(0,r.jsx)(t.a,{href:"https://classic.yarnpkg.com/en/docs/workspaces/",children:"Yarn workspaces"}),". This means\nthe ",(0,r.jsx)(t.code,{children:"app"})," and ",(0,r.jsx)(t.code,{children:"backend"})," packages, as well as any custom plugins you've added,\nare separate packages with their own ",(0,r.jsx)(t.code,{children:"package.json"})," and dependencies."]}),"\n",(0,r.jsxs)(t.p,{children:["When a given dependency version is the ",(0,r.jsx)(t.em,{children:"same"})," between different packages, the\ndependency is hoisted to the main ",(0,r.jsx)(t.code,{children:"node_modules"})," folder in the monorepo root to\nbe shared between packages. When ",(0,r.jsx)(t.em,{children:"different"})," versions of the same dependency are\nencountered, Yarn creates a ",(0,r.jsx)(t.code,{children:"node_modules"})," folder within a particular package."]}),"\n",(0,r.jsxs)(t.p,{children:["This can lead to confusing situations with type definitions, or anything with\nglobal state. React ",(0,r.jsx)(t.a,{href:"https://reactjs.org/docs/context.html",children:"Context"}),", for\nexample, depends on global referential equality. This can cause problems in\nBackstage with API lookup, or config loading."]}),"\n",(0,r.jsxs)(t.p,{children:["To help resolve these situations, the Backstage CLI has\n",(0,r.jsx)(t.a,{href:"https://backstage.io/docs/local-dev/cli-commands#versionscheck",children:"versions:check"}),". This\nwill validate versions of ",(0,r.jsx)(t.code,{children:"@backstage"})," packages in your app to check for\nduplicate definitions:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"# Add --fix to attempt automatic resolution in yarn.lock\nyarn backstage-cli versions:check\n"})})]})}function d(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},371426:(e,t,n)=>{var r=n(827378),a=Symbol.for("react.element"),o=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,c=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function u(e,t,n){var r,o={},u=null,l=null;for(r in void 0!==n&&(u=""+n),void 0!==t.key&&(u=""+t.key),void 0!==t.ref&&(l=t.ref),t)s.call(t,r)&&!i.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===o[r]&&(o[r]=t[r]);return{$$typeof:a,type:e,key:u,ref:l,props:o,_owner:c.current}}t.Fragment=o,t.jsx=u,t.jsxs=u},541535:(e,t)=>{var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),c=Symbol.for("react.provider"),i=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),l=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),f=Symbol.iterator;var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,m={};function y(e,t,n){this.props=e,this.context=t,this.refs=m,this.updater=n||h}function k(){}function b(e,t,n){this.props=e,this.context=t,this.refs=m,this.updater=n||h}y.prototype.isReactComponent={},y.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},k.prototype=y.prototype;var v=b.prototype=new k;v.constructor=b,g(v,y.prototype),v.isPureReactComponent=!0;var x=Array.isArray,j=Object.prototype.hasOwnProperty,_={current:null},w={key:!0,ref:!0,__self:!0,__source:!0};function S(e,t,r){var a,o={},s=null,c=null;if(null!=t)for(a in void 0!==t.ref&&(c=t.ref),void 0!==t.key&&(s=""+t.key),t)j.call(t,a)&&!w.hasOwnProperty(a)&&(o[a]=t[a]);var i=arguments.length-2;if(1===i)o.children=r;else if(1<i){for(var u=Array(i),l=0;l<i;l++)u[l]=arguments[l+2];o.children=u}if(e&&e.defaultProps)for(a in i=e.defaultProps)void 0===o[a]&&(o[a]=i[a]);return{$$typeof:n,type:e,key:s,ref:c,props:o,_owner:_.current}}function C(e){return"object"==typeof e&&null!==e&&e.$$typeof===n}var E=/\/+/g;function R(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function $(e,t,a,o,s){var c=typeof e;"undefined"!==c&&"boolean"!==c||(e=null);var i=!1;if(null===e)i=!0;else switch(c){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case n:case r:i=!0}}if(i)return s=s(i=e),e=""===o?"."+R(i,0):o,x(s)?(a="",null!=e&&(a=e.replace(E,"$&/")+"/"),$(s,t,a,"",(function(e){return e}))):null!=s&&(C(s)&&(s=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(s,a+(!s.key||i&&i.key===s.key?"":(""+s.key).replace(E,"$&/")+"/")+e)),t.push(s)),1;if(i=0,o=""===o?".":o+":",x(e))for(var u=0;u<e.length;u++){var l=o+R(c=e[u],u);i+=$(c,t,a,l,s)}else if(l=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e),"function"==typeof l)for(e=l.call(e),u=0;!(c=e.next()).done;)i+=$(c=c.value,t,a,l=o+R(c,u++),s);else if("object"===c)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function B(e,t,n){if(null==e)return e;var r=[],a=0;return $(e,r,"","",(function(e){return t.call(n,e,a++)})),r}function O(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var T={current:null},P={transition:null},I={ReactCurrentDispatcher:T,ReactCurrentBatchConfig:P,ReactCurrentOwner:_};t.Children={map:B,forEach:function(e,t,n){B(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return B(e,(function(){t++})),t},toArray:function(e){return B(e,(function(e){return e}))||[]},only:function(e){if(!C(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=y,t.Fragment=a,t.Profiler=s,t.PureComponent=b,t.StrictMode=o,t.Suspense=l,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=I,t.cloneElement=function(e,t,r){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var a=g({},e.props),o=e.key,s=e.ref,c=e._owner;if(null!=t){if(void 0!==t.ref&&(s=t.ref,c=_.current),void 0!==t.key&&(o=""+t.key),e.type&&e.type.defaultProps)var i=e.type.defaultProps;for(u in t)j.call(t,u)&&!w.hasOwnProperty(u)&&(a[u]=void 0===t[u]&&void 0!==i?i[u]:t[u])}var u=arguments.length-2;if(1===u)a.children=r;else if(1<u){i=Array(u);for(var l=0;l<u;l++)i[l]=arguments[l+2];a.children=i}return{$$typeof:n,type:e.type,key:o,ref:s,props:a,_owner:c}},t.createContext=function(e){return(e={$$typeof:i,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:c,_context:e},e.Consumer=e},t.createElement=S,t.createFactory=function(e){var t=S.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:u,render:e}},t.isValidElement=C,t.lazy=function(e){return{$$typeof:p,_payload:{_status:-1,_result:e},_init:O}},t.memo=function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=P.transition;P.transition={};try{e()}finally{P.transition=t}},t.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},t.useCallback=function(e,t){return T.current.useCallback(e,t)},t.useContext=function(e){return T.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return T.current.useDeferredValue(e)},t.useEffect=function(e,t){return T.current.useEffect(e,t)},t.useId=function(){return T.current.useId()},t.useImperativeHandle=function(e,t,n){return T.current.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return T.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return T.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return T.current.useMemo(e,t)},t.useReducer=function(e,t,n){return T.current.useReducer(e,t,n)},t.useRef=function(e){return T.current.useRef(e)},t.useState=function(e){return T.current.useState(e)},t.useSyncExternalStore=function(e,t,n){return T.current.useSyncExternalStore(e,t,n)},t.useTransition=function(){return T.current.useTransition()},t.version="18.2.0"},827378:(e,t,n)=>{e.exports=n(541535)},824246:(e,t,n)=>{e.exports=n(371426)},511151:(e,t,n)=>{n.d(t,{Z:()=>c,a:()=>s});var r=n(667294);const a={},o=r.createContext(a);function s(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);