"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7598],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=o,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8761:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const a={},i=void 0,l={unversionedId:"windows/urjtag",id:"windows/urjtag",title:"urjtag",description:"Installation of UrJtag on Windows",source:"@site/docs/windows/urjtag.mdx",sourceDirName:"windows",slug:"/windows/urjtag",permalink:"/docs/windows/urjtag",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sw",previous:{title:"Installation",permalink:"/docs/windows/Installation"},next:{title:"urjtag_usage",permalink:"/docs/windows/urjtag_usage"}},s={},c=[{value:"Installation of UrJtag on Windows",id:"installation-of-urjtag-on-windows",level:2},{value:"Method 1(Portable Version)",id:"method-1portable-version",level:2},{value:"Steps to Install Device Driver",id:"steps-to-install-device-driver",level:2}],p={toc:c};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"installation-of-urjtag-on-windows"},"Installation of UrJtag on Windows"),(0,o.kt)("h2",{id:"method-1portable-version"},"Method 1(Portable Version)"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Download the zip file: ",(0,o.kt)("strong",{parentName:"li"},"urjtag_windows.zip")," from the website."),(0,o.kt)("li",{parentName:"ol"},"Extraxt/Unzip the file: ",(0,o.kt)("strong",{parentName:"li"},"urjtag_windows.zip")),(0,o.kt)("li",{parentName:"ol"},"Move to the directory/folder: ",(0,o.kt)("strong",{parentName:"li"},"urjtag_windows/")),(0,o.kt)("li",{parentName:"ol"},"Run the file: ",(0,o.kt)("strong",{parentName:"li"},"jtag.exe")," (right click and run as administrator if normal mode does not work)")),(0,o.kt)("h2",{id:"steps-to-install-device-driver"},"Steps to Install Device Driver"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Connect the Krypton board to your PC and Power On,\nyou will see notification \u201cUSB Device not recognized\u201d")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Open ",(0,o.kt)("strong",{parentName:"li"},"\u201cDevice Manager\u201d"))),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Drop down ",(0,o.kt)("strong",{parentName:"li"},"\u201cUSB Serial Bus Controller\u201d")," , Select ",(0,o.kt)("strong",{parentName:"li"},"\u201cUnknown USB Device\u201d")," , Right click and then click on ",(0,o.kt)("strong",{parentName:"li"},"\u201cUpdate driver\u201d"))),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"Select ",(0,o.kt)("strong",{parentName:"li"},"\u201cSearch Automatically for Updated Driver Software\u201d"))),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},"Remove the Krypton USB Cable and reconnect it, If yellow sign disappears, you are good to go, else follow next step.")),(0,o.kt)("ol",{start:6},(0,o.kt)("li",{parentName:"ol"},"Drop down ",(0,o.kt)("strong",{parentName:"li"},"\u201cUSB Serial Bus Controller\u201d")," , Select ",(0,o.kt)("strong",{parentName:"li"},"\u201cUnknown USB Device\u201d")," , Right click and then click on ",(0,o.kt)("strong",{parentName:"li"},"\u201cUninstall device\u201d")," ,\nconfirm and click on ",(0,o.kt)("strong",{parentName:"li"},"\u201cOK/Uninstall\u201d"),". Remove the Krypton USB Cable and reconnect it, If yellow sign disappears, you are good to go.")))}d.isMDXComponent=!0}}]);