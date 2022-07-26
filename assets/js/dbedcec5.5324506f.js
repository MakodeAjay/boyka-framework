"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3406],{167:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return h}});var r=n(5721);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),p=s(n),h=i,m=p["".concat(c,".").concat(h)]||p[h]||u[h]||o;return n?r.createElement(m,l(l({ref:t},d),{},{components:n})):r.createElement(m,l({ref:t},d))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,l=new Array(o);l[0]=p;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:i,l[1]=a;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},481:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return a},metadata:function(){return s},toc:function(){return u}});var r=n(744),i=n(4690),o=(n(5721),n(167)),l=["components"],a={title:"\ud83d\udcda Project Structure",sidebar_position:1},c=void 0,s={unversionedId:"project-details/structure",id:"project-details/structure",title:"\ud83d\udcda Project Structure",description:"Following is the project repository root directory structure:",source:"@site/docs/contributing/project-details/structure.md",sourceDirName:"project-details",slug:"/project-details/structure",permalink:"/boyka-framework/contributing/project-details/structure",draft:!1,editUrl:"https://github.com/WasiqBhamla/boyka-framework/edit/main/website/docs/contributing/project-details/structure.md",tags:[],version:"current",lastUpdatedBy:"Ajay Makode",lastUpdatedAt:1658832835,formattedLastUpdatedAt:"Jul 26, 2022",sidebarPosition:1,frontMatter:{title:"\ud83d\udcda Project Structure",sidebar_position:1},sidebar:"contributing",previous:{title:"\ud83e\uddd1\u200d\ud83e\udd1d\u200d\ud83e\uddd1 Join our Discord server",permalink:"/boyka-framework/contributing/machine-setup/join-discord"},next:{title:"\ud83d\udee1\ufe0f Branch Protection",permalink:"/boyka-framework/contributing/project-details/branch-protection"}},d={},u=[{value:"Details",id:"details",level:2},{value:"1. <code>.github/</code>",id:"1-github",level:3},{value:"2. <code>.husky/</code>",id:"2-husky",level:3},{value:"3. <code>.vscode/</code>",id:"3-vscode",level:3},{value:"4. <code>.yarn/</code>",id:"4-yarn",level:3},{value:"5. <code>assets/</code>",id:"5-assets",level:3},{value:"6. <code>core-java/</code>",id:"6-core-java",level:3},{value:"7. <code>website/</code>",id:"7-website",level:3},{value:"8. <code>.editorconfig</code>",id:"8-editorconfig",level:3},{value:"9. <code>.eslintignore</code>",id:"9-eslintignore",level:3},{value:"10. <code>.eslintrc.json</code>",id:"10-eslintrcjson",level:3},{value:"11. <code>.gitignore</code>",id:"11-gitignore",level:3},{value:"12. <code>.gitpod.yml</code>",id:"12-gitpodyml",level:3},{value:"13. <code>.prettierignore</code>",id:"13-prettierignore",level:3},{value:"14. <code>.prettierrc.json</code>",id:"14-prettierrcjson",level:3},{value:"15. <code>.yarnrc.yml</code>",id:"15-yarnrcyml",level:3},{value:"16. <code>commitlint.config.js</code>",id:"16-commitlintconfigjs",level:3},{value:"17. <code>lerna.json</code>",id:"17-lernajson",level:3},{value:"18. <code>LICENSE</code>",id:"18-license",level:3},{value:"19. <code>package.json</code>",id:"19-packagejson",level:3},{value:"20. <code>README.md</code>",id:"20-readmemd",level:3},{value:"21. <code>yarn.lock</code>",id:"21-yarnlock",level:3}],p={toc:u};function h(e){var t=e.components,n=(0,i.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Following is the project repository root directory structure:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:"showLineNumbers",showLineNumbers:!0},"- .github/\n- .husky/\n- .vscode/\n- .yarn/\n- assets/\n- core-java/\n- website/\n- .editorconfig\n- .eslintignore\n- .eslintrc.json\n- .gitignore\n- .gitpod.yml\n- .prettieriignore\n- .prettierrc.json\n- .yarnrc.yml\n- commitlint.config.js\n- lerna.json\n- LICENSE\n- package.json\n- README.md\n- yarn.lock\n")),(0,o.kt)("h2",{id:"details"},"Details"),(0,o.kt)("h3",{id:"1-github"},"1. ",(0,o.kt)("inlineCode",{parentName:"h3"},".github/")),(0,o.kt)("p",null,"This directory contains issue and PR templates, GitHub Action workflows and other community related files."),(0,o.kt)("h3",{id:"2-husky"},"2. ",(0,o.kt)("inlineCode",{parentName:"h3"},".husky/")),(0,o.kt)("p",null,"This directory contains Husky pre-commit hook configs for linting,"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Commit messages"),(0,o.kt)("li",{parentName:"ul"},"Prettier styles"),(0,o.kt)("li",{parentName:"ul"},"ESLint rules")),(0,o.kt)("h3",{id:"3-vscode"},"3. ",(0,o.kt)("inlineCode",{parentName:"h3"},".vscode/")),(0,o.kt)("p",null,"This directory contains VS Code settings and extensions."),(0,o.kt)("h3",{id:"4-yarn"},"4. ",(0,o.kt)("inlineCode",{parentName:"h3"},".yarn/")),(0,o.kt)("p",null,"This directory contains Yarn specific setting files."),(0,o.kt)("h3",{id:"5-assets"},"5. ",(0,o.kt)("inlineCode",{parentName:"h3"},"assets/")),(0,o.kt)("p",null,"This directory contains all the assets required by the README file."),(0,o.kt)("h3",{id:"6-core-java"},"6. ",(0,o.kt)("inlineCode",{parentName:"h3"},"core-java/")),(0,o.kt)("p",null,"This directory contains the core framework Java Maven based project."),(0,o.kt)("h3",{id:"7-website"},"7. ",(0,o.kt)("inlineCode",{parentName:"h3"},"website/")),(0,o.kt)("p",null,"This directory contains the website documentation for the project."),(0,o.kt)("h3",{id:"8-editorconfig"},"8. ",(0,o.kt)("inlineCode",{parentName:"h3"},".editorconfig")),(0,o.kt)("p",null,"This file contains the EditorConfig settings for the project."),(0,o.kt)("h3",{id:"9-eslintignore"},"9. ",(0,o.kt)("inlineCode",{parentName:"h3"},".eslintignore")),(0,o.kt)("p",null,"This file contains the ESLint ignore patterns for the project."),(0,o.kt)("h3",{id:"10-eslintrcjson"},"10. ",(0,o.kt)("inlineCode",{parentName:"h3"},".eslintrc.json")),(0,o.kt)("p",null,"This file contains the ESLint rules for the project."),(0,o.kt)("h3",{id:"11-gitignore"},"11. ",(0,o.kt)("inlineCode",{parentName:"h3"},".gitignore")),(0,o.kt)("p",null,"This file contains the Git ignore patterns for the project."),(0,o.kt)("h3",{id:"12-gitpodyml"},"12. ",(0,o.kt)("inlineCode",{parentName:"h3"},".gitpod.yml")),(0,o.kt)("p",null,"This file contains the Gitpod settings for the project."),(0,o.kt)("h3",{id:"13-prettierignore"},"13. ",(0,o.kt)("inlineCode",{parentName:"h3"},".prettierignore")),(0,o.kt)("p",null,"This file contains the Prettier ignore patterns for the project."),(0,o.kt)("h3",{id:"14-prettierrcjson"},"14. ",(0,o.kt)("inlineCode",{parentName:"h3"},".prettierrc.json")),(0,o.kt)("p",null,"This file contains the Prettier rules for the project."),(0,o.kt)("h3",{id:"15-yarnrcyml"},"15. ",(0,o.kt)("inlineCode",{parentName:"h3"},".yarnrc.yml")),(0,o.kt)("p",null,"This file contains the Yarn settings for the project."),(0,o.kt)("h3",{id:"16-commitlintconfigjs"},"16. ",(0,o.kt)("inlineCode",{parentName:"h3"},"commitlint.config.js")),(0,o.kt)("p",null,"This file contains the Commitlint config for the project."),(0,o.kt)("h3",{id:"17-lernajson"},"17. ",(0,o.kt)("inlineCode",{parentName:"h3"},"lerna.json")),(0,o.kt)("p",null,"This file contains the Lerna settings for the project."),(0,o.kt)("h3",{id:"18-license"},"18. ",(0,o.kt)("inlineCode",{parentName:"h3"},"LICENSE")),(0,o.kt)("p",null,"This file contains the license for the project."),(0,o.kt)("h3",{id:"19-packagejson"},"19. ",(0,o.kt)("inlineCode",{parentName:"h3"},"package.json")),(0,o.kt)("p",null,"This file contains the project package.json settings."),(0,o.kt)("h3",{id:"20-readmemd"},"20. ",(0,o.kt)("inlineCode",{parentName:"h3"},"README.md")),(0,o.kt)("p",null,"This file contains the project README.md file."),(0,o.kt)("h3",{id:"21-yarnlock"},"21. ",(0,o.kt)("inlineCode",{parentName:"h3"},"yarn.lock")),(0,o.kt)("p",null,"This file contains the project yarn.lock file."))}h.isMDXComponent=!0}}]);