/*! For license information please see 58ba7636.5e05066b.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[907130],{97625:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var n=t(785893),s=t(511151);const i={title:"How to quickly set up Backstage",author:"Marcus Eide, Spotify",authorURL:"https://github.com/marcuseide",authorImageURL:"https://secure.gravatar.com/avatar/20223f1e03673c7c1e6282fbebaf6942"},r=void 0,o={permalink:"/blog/2020/04/30/how-to-quickly-set-up-backstage",source:"@site/blog/2020-04-30-how-to-quickly-set-up-backstage.mdx",title:"How to quickly set up Backstage",description:"We wanted to make getting started with Backstage as easy as possible. Even though Backstage is still in the early phases of its development, we believe it is important for our users to get a feel for what Backstage really is.",date:"2020-04-30T00:00:00.000Z",formattedDate:"April 30, 2020",tags:[],readingTime:4.37,hasTruncateMarker:!0,authors:[{name:"Marcus Eide, Spotify",url:"https://github.com/marcuseide",imageURL:"https://secure.gravatar.com/avatar/20223f1e03673c7c1e6282fbebaf6942"}],frontMatter:{title:"How to quickly set up Backstage",author:"Marcus Eide, Spotify",authorURL:"https://github.com/marcuseide",authorImageURL:"https://secure.gravatar.com/avatar/20223f1e03673c7c1e6282fbebaf6942"},unlisted:!1,prevItem:{title:"Weaveworks\u2019 COVID-19 app uses Backstage UI",permalink:"/blog/2020/05/14/weaveworks-covid-19-app-uses-backstage-ui"},nextItem:{title:"Introducing Lighthouse for Backstage",permalink:"/blog/2020/04/06/lighthouse-plugin"}},l={authorsImageUrls:[void 0]},c=[{value:"What is a Backstage app?",id:"what-is-a-backstage-app",level:2},{value:"A personalized platform",id:"a-personalized-platform",level:2},{value:"How do I create an app?",id:"how-do-i-create-an-app",level:2},{value:"What do I get? (Let&#39;s get technical...)",id:"what-do-i-get-lets-get-technical",level:2},{value:"1. Lerna setup to manage multi-packages",id:"1-lerna-setup-to-manage-multi-packages",level:3},{value:"2. Fast builds",id:"2-fast-builds",level:3},{value:"3. Full TypeScript support",id:"3-full-typescript-support",level:3},{value:"4. Tests and coverage out of the box",id:"4-tests-and-coverage-out-of-the-box",level:3},{value:"Extend the app with plugins",id:"extend-the-app-with-plugins",level:2},{value:"Using a public plugin",id:"using-a-public-plugin",level:3},{value:"Creating an internal plugin",id:"creating-an-internal-plugin",level:3},{value:"Sharing is caring \ud83e\udd17",id:"sharing-is-caring-",level:3},{value:"Ready to get started?",id:"ready-to-get-started",level:2}];function p(e){const a={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.p,{children:"We wanted to make getting started with Backstage as easy as possible. Even though Backstage is still in the early phases of its development, we believe it is important for our users to get a feel for what Backstage really is."}),"\n",(0,n.jsx)(a.p,{children:"We want users to be able to create their own version of Backstage quickly and easily, so that they can take advantage of all the infrastructure that we\u2019ve built into it \u2014 and start exploring."}),"\n",(0,n.jsxs)(a.p,{children:["In this blog post we\u2019ll look at what a Backstage app is and how to create one using our ",(0,n.jsx)(a.a,{href:"https://www.npmjs.com/package/@backstage/cli",children:"CLI"}),"."]}),"\n",(0,n.jsx)(a.p,{children:"{/* truncate */}"}),"\n",(0,n.jsx)(a.h2,{id:"what-is-a-backstage-app",children:"What is a Backstage app?"}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{src:t(212996).Z+"",width:"2032",height:"1096"})}),"\n",(0,n.jsx)(a.p,{children:"A Backstage app is a modern monorepo web project that is built using Backstage packages. It includes all the configuration and architecture you need to run Backstage so that you don\u2019t have to worry about setting everything up by yourself."}),"\n",(0,n.jsxs)(a.p,{children:["More specifically, a Backstage app includes the core packages and APIs that provide base functionality to the app. The actual UX is provided by plugins. As an example, when you first load the ",(0,n.jsx)(a.code,{children:"/"})," page of the app, the content is provided by the ",(0,n.jsx)(a.code,{children:"welcome"})," plugin."]}),"\n",(0,n.jsxs)(a.p,{children:["Plugins are the essential building blocks of Backstage and extend the platform by providing additional features and functionality. Read more about ",(0,n.jsx)(a.a,{href:"/docs/getting-started",children:"Backstage plugins"})," on GitHub."]}),"\n",(0,n.jsx)(a.h2,{id:"a-personalized-platform",children:"A personalized platform"}),"\n",(0,n.jsxs)(a.p,{children:["When you create a Backstage ",(0,n.jsx)(a.em,{children:"app"}),", you are creating your own installation of Backstage, an application that is built on top of the Backstage ",(0,n.jsx)(a.em,{children:"platform"}),"."]}),"\n",(0,n.jsx)(a.p,{children:"You get to take full advantage of a platform that we at Spotify have been using internally for years. But you also get to make it your own \u2014 starting with its name. You can rename the Backstage app anything you want, so that you can call it something that best fits your organization. Be creative!"}),"\n",(0,n.jsx)(a.h2,{id:"how-do-i-create-an-app",children:"How do I create an app?"}),"\n",(0,n.jsx)(a.p,{children:"Just run the backstage-cli:"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-bash",children:"npx @backstage/create-app\n"})}),"\n",(0,n.jsx)(a.p,{children:"Name your app, and we will create everything you need:"}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{src:t(158887).Z+"",width:"817",height:"1072"})}),"\n",(0,n.jsx)(a.p,{children:"The only thing you need to do is to start the app:"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-bash",children:"cd my-app\nyarn dev\n"})}),"\n",(0,n.jsx)(a.p,{children:"And you are good to go! \ud83d\udc4d"}),"\n",(0,n.jsxs)(a.p,{children:["Read the full documentation on how to ",(0,n.jsx)(a.a,{href:"/docs/getting-started/create-an-app",children:"create an app"})," on GitHub."]}),"\n",(0,n.jsx)(a.h2,{id:"what-do-i-get-lets-get-technical",children:"What do I get? (Let's get technical...)"}),"\n",(0,n.jsx)(a.p,{children:"We\u2019ve been using Backstage internally for years, and we\u2019ve spent a lot of time adding to and tweaking the infrastructure so that it fits our needs. After all that testing and trial and error, we think it will fit your needs, too!"}),"\n",(0,n.jsx)(a.h3,{id:"1-lerna-setup-to-manage-multi-packages",children:"1. Lerna setup to manage multi-packages"}),"\n",(0,n.jsxs)(a.p,{children:["The monorepo and its packages are managed by ",(0,n.jsx)(a.a,{href:"https://lerna.js.org/",children:"Lerna"}),". It lets you work with individual packages in a controlled way."]}),"\n",(0,n.jsx)(a.h3,{id:"2-fast-builds",children:"2. Fast builds"}),"\n",(0,n.jsxs)(a.p,{children:["Behind the scenes we use ",(0,n.jsx)(a.a,{href:"https://rollupjs.org/",children:"Rollup"})," to build the modules."]}),"\n",(0,n.jsxs)(a.p,{children:["Each package is built individually. With the ",(0,n.jsx)(a.code,{children:"--watch"})," flag you will be able to detect changes per package and therefore speed up the local development process."]}),"\n",(0,n.jsx)(a.p,{children:"To further speed things up, we have also included our own caching system to avoid rebuilding unchanged packages."}),"\n",(0,n.jsx)(a.p,{children:"Our hope is that there will be thousands of Backstage plugins in the future, so we need a fast and stable build process."}),"\n",(0,n.jsx)(a.h3,{id:"3-full-typescript-support",children:"3. Full TypeScript support"}),"\n",(0,n.jsxs)(a.p,{children:["Most of the codebase is written in ",(0,n.jsx)(a.a,{href:"https://www.typescriptlang.org/",children:"TypeScript"}),", and we aim for all of the core packages to be in TypeScript in the future."]}),"\n",(0,n.jsx)(a.p,{children:"All the knobs and handles needed for a stable and functioning TypeScript project are included."}),"\n",(0,n.jsxs)(a.p,{children:["Take a look at ",(0,n.jsx)(a.code,{children:"@backstage/cli/config/tsconfig.json"})," for more details."]}),"\n",(0,n.jsx)(a.h3,{id:"4-tests-and-coverage-out-of-the-box",children:"4. Tests and coverage out of the box"}),"\n",(0,n.jsx)(a.p,{children:"We include testing, linting, and end-to-end tests for your convenience."}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-bash",children:"yarn lint:all\nyarn test:all\nyarn test:e2e\n"})}),"\n",(0,n.jsx)(a.h2,{id:"extend-the-app-with-plugins",children:"Extend the app with plugins"}),"\n",(0,n.jsx)(a.p,{children:"At Spotify, the main factor behind Backstage\u2019s success has been our large and diverse collection of plugins \u2014 the result of contributions from various teams over the years. Internally, we have more than a hundred different plugins."}),"\n",(0,n.jsx)(a.p,{children:"There are two ways to add plugins to your Backstage app: use a publicly available plugin or create your own."}),"\n",(0,n.jsx)(a.h3,{id:"using-a-public-plugin",children:"Using a public plugin"}),"\n",(0,n.jsxs)(a.p,{children:["We provide a collection of public Backstage plugins (look for packages with the ",(0,n.jsx)(a.code,{children:"plugin-"})," prefix under the ",(0,n.jsx)(a.code,{children:"@backstage"})," namespace on ",(0,n.jsx)(a.a,{href:"https://www.npmjs.com/",children:"npm"})," that you can start using immediately."]}),"\n",(0,n.jsxs)(a.p,{children:["Install in your app\u2019s package folder (",(0,n.jsx)(a.code,{children:"<root>/packages/app"}),") with:"]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-bash",children:"# From your Backstage root directory\nyarn --cwd packages/app add @backstage/plugin-<plugin-name>\n"})}),"\n",(0,n.jsx)(a.p,{children:"After that, you inject the plugin into the application where you want it to be exposed. Please read the documentation for the specific plugin you are installing for more information."}),"\n",(0,n.jsx)(a.h3,{id:"creating-an-internal-plugin",children:"Creating an internal plugin"}),"\n",(0,n.jsx)(a.p,{children:"We also know that each organization has different needs and will create their own plugins for internal purposes. To create an internal plugin, you can use our CLI again."}),"\n",(0,n.jsxs)(a.p,{children:["In the root of your app directory (",(0,n.jsx)(a.code,{children:"<root>"}),") run:"]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-bash",children:"yarn create-plugin\n"})}),"\n",(0,n.jsxs)(a.p,{children:["This command will create a new plugin in ",(0,n.jsx)(a.code,{children:"<root>/plugins/"})," and register it to your app automatically."]}),"\n",(0,n.jsx)(a.h3,{id:"sharing-is-caring-",children:"Sharing is caring \ud83e\udd17"}),"\n",(0,n.jsx)(a.p,{children:"If you are developing a plugin that might be useful for others, consider releasing it publicly. A large, diverse ecosystem of Backstage plugins benefits the whole community"}),"\n",(0,n.jsx)(a.h2,{id:"ready-to-get-started",children:"Ready to get started?"}),"\n",(0,n.jsxs)(a.p,{children:["Head over to GitHub and check out the ",(0,n.jsx)(a.a,{href:"https://github.com/backstage/backstage",children:"project"})," or download our ",(0,n.jsx)(a.a,{href:"https://www.npmjs.com/package/@backstage/cli",children:"CLI"}),". If you have more questions, join us on ",(0,n.jsx)(a.a,{href:"https://discord.gg/backstage-687207715902193673",children:"Discord"})," or ",(0,n.jsx)(a.a,{href:"https://github.com/backstage/backstage/issues/new/choose",children:"create an issue"}),"."]})]})}function d(e={}){const{wrapper:a}={...(0,s.a)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},675251:(e,a,t)=>{var n=t(667294),s=Symbol.for("react.element"),i=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,a,t){var n,i={},c=null,p=null;for(n in void 0!==t&&(c=""+t),void 0!==a.key&&(c=""+a.key),void 0!==a.ref&&(p=a.ref),a)r.call(a,n)&&!l.hasOwnProperty(n)&&(i[n]=a[n]);if(e&&e.defaultProps)for(n in a=e.defaultProps)void 0===i[n]&&(i[n]=a[n]);return{$$typeof:s,type:e,key:c,ref:p,props:i,_owner:o.current}}a.Fragment=i,a.jsx=c,a.jsxs=c},785893:(e,a,t)=>{e.exports=t(675251)},158887:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/create-app-db506cb961f560f1a9a0aeec50faffa8.png"},212996:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/welcome-5fba87f712b87b93cd6f10c1ce6abb88.png"},511151:(e,a,t)=>{t.d(a,{Z:()=>o,a:()=>r});var n=t(667294);const s={},i=n.createContext(s);function r(e){const a=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function o(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),n.createElement(i.Provider,{value:a},e.children)}}}]);