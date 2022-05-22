"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6947],{167:function(e,t,n){n.d(t,{Zo:function(){return f},kt:function(){return d}});var r=n(7612);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},f=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,f=l(e,["components","mdxType","originalType","parentName"]),m=s(n),d=i,p=m["".concat(c,".").concat(d)]||m[d]||u[d]||a;return n?r.createElement(p,o(o({ref:t},f),{},{components:n})):r.createElement(p,o({ref:t},f))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9317:function(e,t,n){n.r(t),n.d(t,{assets:function(){return f},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return u}});var r=n(3830),i=n(2056),a=(n(7612),n(167)),o=["components"],l={title:"VerifyElementActions",sidebar_position:6},c=void 0,s={unversionedId:"web/actions/verify-element-actions",id:"web/actions/verify-element-actions",title:"VerifyElementActions",description:"verifyAttributeOf",source:"@site/docs/api/web/actions/verify-element-actions.md",sourceDirName:"web/actions",slug:"/web/actions/verify-element-actions",permalink:"/boyka-framework/api/web/actions/verify-element-actions",draft:!1,editUrl:"https://github.com/WasiqBhamla/boyka-framework/edit/main/website/docs/api/web/actions/verify-element-actions.md",tags:[],version:"current",lastUpdatedBy:"Wasiq Bhamla",lastUpdatedAt:1653207783,formattedLastUpdatedAt:"5/22/2022",sidebarPosition:6,frontMatter:{title:"VerifyElementActions",sidebar_position:6},sidebar:"api",previous:{title:"VerifyDriverActions",permalink:"/boyka-framework/api/web/actions/verify-driver-actions"},next:{title:"DriverManager",permalink:"/boyka-framework/api/web/manager/driver-manager"}},f={},u=[{value:"<code>verifyAttributeOf</code>",id:"verifyattributeof",level:2},{value:"<code>verifyElementDisplayed</code>",id:"verifyelementdisplayed",level:2},{value:"<code>verifyElementEnabled</code>",id:"verifyelementenabled",level:2},{value:"<code>verifyElementSelected</code>",id:"verifyelementselected",level:2},{value:"<code>verifyTextOf</code>",id:"verifytextof",level:2}],m={toc:u};function d(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"verifyattributeof"},(0,a.kt)("inlineCode",{parentName:"h2"},"verifyAttributeOf")),(0,a.kt)("p",null,"This method is used to verify the given attribute of the given element."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'import static com.github.wasiqb.boyka.actions.VerifyElementActions.verifyAttributeOf;\n. . .\nverifyAttributeOf (locator, "attribute-name").isEqualTo ("Swag Labs");\n')),(0,a.kt)("h2",{id:"verifyelementdisplayed"},(0,a.kt)("inlineCode",{parentName:"h2"},"verifyElementDisplayed")),(0,a.kt)("p",null,"This method is used to verify the given element is displayed."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"import static com.github.wasiqb.boyka.actions.VerifyElementActions.verifyElementDisplayed;\n. . .\nverifyElementDisplayed (locator).isTrue();\n")),(0,a.kt)("h2",{id:"verifyelementenabled"},(0,a.kt)("inlineCode",{parentName:"h2"},"verifyElementEnabled")),(0,a.kt)("p",null,"This method is used to verify the given element is enabled."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"import static com.github.wasiqb.boyka.actions.VerifyElementActions.verifyElementEnabled;\n. . .\nverifyElementEnabled (locator).isTrue();\n")),(0,a.kt)("h2",{id:"verifyelementselected"},(0,a.kt)("inlineCode",{parentName:"h2"},"verifyElementSelected")),(0,a.kt)("p",null,"This method is used to verify the given element is selected."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"import static com.github.wasiqb.boyka.actions.VerifyElementActions.verifyElementSelected;\n. . .\nverifyElementSelected (locator).isTrue();\n")),(0,a.kt)("h2",{id:"verifytextof"},(0,a.kt)("inlineCode",{parentName:"h2"},"verifyTextOf")),(0,a.kt)("p",null,"This method is used to verify the text of the given element."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'import static com.github.wasiqb.boyka.actions.VerifyElementActions.verifyTextOf;\n. . .\nverifyTextOf (locator).isEqualTo ("Swag Labs");\n')))}d.isMDXComponent=!0}}]);