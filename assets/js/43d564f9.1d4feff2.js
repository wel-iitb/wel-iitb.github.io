(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[853],{3905:function(e,t,i){"use strict";i.d(t,{Zo:function(){return s},kt:function(){return f}});var r=i(7294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function a(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,r,n=function(e,t){if(null==e)return{};var i,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)i=o[r],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)i=o[r],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var c=r.createContext({}),u=function(e){var t=r.useContext(c),i=t;return e&&(i="function"==typeof e?e(t):a(a({},t),e)),i},s=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var i=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(i),f=n,h=p["".concat(c,".").concat(f)]||p[f]||d[f]||o;return i?r.createElement(h,a(a({ref:t},s),{},{components:i})):r.createElement(h,a({ref:t},s))}));function f(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=i.length,a=new Array(o);a[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,a[1]=l;for(var u=2;u<o;u++)a[u]=i[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,i)}p.displayName="MDXCreateElement"},8221:function(e,t,i){"use strict";i.r(t),i.d(t,{frontMatter:function(){return a},metadata:function(){return l},toc:function(){return c},default:function(){return s}});var r=i(2122),n=i(9756),o=(i(7294),i(3905)),a={sidebar_position:4,title:"Mux"},l={unversionedId:"lab-handouts/lab1_c",id:"lab-handouts/lab1_c",isDocsHomePage:!1,title:"Mux",description:"Part-A: 2x1 Mux",source:"@site/docs/lab-handouts/lab1_c.mdx",sourceDirName:"lab-handouts",slug:"/lab-handouts/lab1_c",permalink:"/docs/lab-handouts/lab1_c",version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"Mux"},sidebar:"docs",previous:{title:"4-bit Adder-Subtractor",permalink:"/docs/lab-handouts/lab1"},next:{title:"Decoder",permalink:"/docs/lab-handouts/lab1_b"}},c=[{value:"Part-A: 2x1 Mux",id:"part-a-2x1-mux",children:[{value:"(i) VHDL description",id:"i-vhdl-description",children:[]},{value:"(ii) SImulation",id:"ii-simulation",children:[]}]},{value:"Part-B: 4x1 Mux",id:"part-b-4x1-mux",children:[{value:"(i) VHDL description",id:"i-vhdl-description-1",children:[]},{value:"(ii) SImulation",id:"ii-simulation-1",children:[]}]},{value:"Part-C: 4-bit 4x1 Mux",id:"part-c-4-bit-4x1-mux",children:[{value:"(i) VHDL description",id:"i-vhdl-description-2",children:[]},{value:"(ii) SImulation",id:"ii-simulation-2",children:[]}]}],u={toc:c};function s(e){var t=e.components,a=(0,n.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"part-a-2x1-mux"},"Part-A: 2x1 Mux"),(0,o.kt)("h3",{id:"i-vhdl-description"},"(i) VHDL description"),(0,o.kt)("p",null,"Write the VHDL  description of a  2-1 multiplexer  as shown  in figure below. "),(0,o.kt)("div",{class:"mux"},(0,o.kt)("img",{src:i(8026).Z})),(0,o.kt)("h3",{id:"ii-simulation"},"(ii) SImulation"),(0,o.kt)("p",null,"Simulate the 2x1 multiplexer using the generic testbench to confirm the correctness of your description.\nTo do this, use the tracefile given below and modify\nthe testbench given to you appropriately."),(0,o.kt)("hr",null),"Tracefile format ",(0,o.kt)("br",null),"<In1><In2><S> <Y> 1 (Updated)"," ",(0,o.kt)("br",null),(0,o.kt)("a",{href:"https://drive.google.com/drive/folders/14QxVhDWDks33huc3Ox7-i9kRpS78qk97?usp=sharing"},"Tracefile \ud83d\udcc3"),(0,o.kt)("h2",{id:"part-b-4x1-mux"},"Part-B: 4x1 Mux"),(0,o.kt)("h3",{id:"i-vhdl-description-1"},"(i) VHDL description"),(0,o.kt)("p",null,"Write the VHDL  description of a  4x1 multiplexer using above described 2x1 Mux."),(0,o.kt)("h3",{id:"ii-simulation-1"},"(ii) SImulation"),(0,o.kt)("p",null,"Simulate the 4x1 multiplexer using the generic testbench to confirm the correctness of your description.\nTo do this, use the tracefile given below and modify\nthe testbench given to you appropriately."),(0,o.kt)("hr",null),"Tracefile format ",(0,o.kt)("br",null),"<In4><In3><In2><In1><S2><S1> <Y> 1"," ",(0,o.kt)("br",null),(0,o.kt)("a",{href:"https://drive.google.com/drive/folders/1Pku4Vqpq7Z9NBw5olnRQiKO5qDf_2dAG?usp=sharing"},"Tracefile \ud83d\udcc3"),(0,o.kt)("h2",{id:"part-c-4-bit-4x1-mux"},"Part-C: 4-bit 4x1 Mux"),(0,o.kt)("h3",{id:"i-vhdl-description-2"},"(i) VHDL description"),(0,o.kt)("p",null,"Write the VHDL  description of a 4-bit 4x1 multiplexer using above described 4x1 Mux."),(0,o.kt)("h3",{id:"ii-simulation-2"},"(ii) SImulation"),(0,o.kt)("p",null,"Simulate the 4-bit 4x1 multiplexer using the generic testbench to confirm the correctness of your description.\nTo do this, use the tracefile given below and modify\nthe testbench given to you appropriately."),(0,o.kt)("hr",null),"Tracefile format ",(0,o.kt)("br",null),"<d3d2d1d0><c3c2c1c0><b3b2b1b0><a3a2a1a0><sel1sel0> <Y3Y2Y1Y0> 1111"," ",(0,o.kt)("br",null),(0,o.kt)("a",{href:"https://drive.google.com/drive/folders/1toAaAdVs45lxdaMdaAcUbjGsvY7jPioL?usp=sharing"},"Tracefile \ud83d\udcc3"))}s.isMDXComponent=!0},8026:function(e,t,i){"use strict";t.Z=i.p+"assets/images/2_1_mux-01c8dd31e1ec8130285234fc4708dd8e.png"}}]);