import{_ as o,o as n,c as e,p as t,f as c,b as a,g as r,e as i,a as d}from"./app.bc61df12.js";const D={},p=s=>(t("data-v-6f12fada"),s=s(),c(),s),F={class:"current-version"},y=p(()=>a("span",null,"\u5F53\u524D\u7248\u672C\uFF1A",-1)),u=p(()=>a("img",{src:"https://img.shields.io/npm/v/@lunarxyz/core?color=49a6e7&label=npm",alt:"npm"},null,-1)),h=[y,u];function _(s,l){return n(),e("div",F,h)}var g=o(D,[["render",_],["__scopeId","data-v-6f12fada"]]);const C=a("h1",{id:"\u5FEB\u901F\u4E0A\u624B",tabindex:"-1"},[i("\u5FEB\u901F\u4E0A\u624B "),a("a",{class:"header-anchor",href:"#\u5FEB\u901F\u4E0A\u624B","aria-hidden":"true"},"#")],-1),v=d(`<h2 id="\u5B89\u88C5" tabindex="-1">\u5B89\u88C5 <a class="header-anchor" href="#\u5B89\u88C5" aria-hidden="true">#</a></h2><p>\u9ED8\u8BA4\u90FD\u662F\u901A\u8FC7\u5DE5\u7A0B\u5316\u9879\u76EE\u5F15\u5165\uFF0C\u5728\u4F7F\u7528\u4E4B\u524D\uFF0C\u9700\u8981\u96C6\u6210\u5230\u4F60\u7684\u9879\u76EE\u4F9D\u8D56\u91CC\uFF1A</p><div class="language-bash"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">yarn add @lunarxyz/core</span></span>
<span class="line"></span></code></pre></div><p>\u6216\u8005\u4F7F\u7528\u4F60\u66F4\u4E60\u60EF\u7684 npm \uFF1A</p><div class="language-bash"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">npm i @lunarxyz/core</span></span>
<span class="line"></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>\u8FD9\u4E2A\u5305\u4F9D\u8D56 <a href="https://www.npmjs.com/package/vue" target="_blank" rel="noopener noreferrer">Vue 3</a> \u548C\u90E8\u5206\u96C6\u6210\u7684\u5DE5\u5177\u5E93\uFF08 e.g. <a href="https://www.npmjs.com/package/axios" target="_blank" rel="noopener noreferrer">Axios</a> \uFF09\uFF0C\u4E0D\u8FC7\u4E0D\u7528\u62C5\u5FC3\uFF0C\u5728\u5B89\u88C5\u7684\u65F6\u5019\u4F1A\u628A\u76F8\u5173\u7684\u4F9D\u8D56\u4E00\u5E76\u5B89\u88C5\u5230\u9879\u76EE\u91CC\uFF0C\u65E0\u9700\u624B\u52A8\u64CD\u4F5C\u3002</p><p>\u552F\u4E00\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u8BF7\u786E\u4FDD\u4F60\u7684\u9879\u76EE\u7684 Vue \u7248\u672C\u53F7 &gt;= <code>v3.2</code> \u3002</p></div><h2 id="\u6309\u9700\u5F15\u5165" tabindex="-1">\u6309\u9700\u5F15\u5165 <a class="header-anchor" href="#\u6309\u9700\u5F15\u5165" aria-hidden="true">#</a></h2><p>\u8FD9\u662F\u4E00\u4E2A Fully Tree Shakeable \u7684\u5305\uFF08\u672F\u8BED\u89E3\u91CA\uFF1A<a href="https://developer.mozilla.org/zh-CN/docs/Glossary/Tree_shaking" target="_blank" rel="noopener noreferrer">Tree shaking</a> \uFF09\u3002</p><p>\u6240\u4EE5\u9700\u8981\u4F60\u5728 <code>.vue</code> \u7EC4\u4EF6\u6216\u8005 <code>.js</code> / <code>.ts</code> \u6587\u4EF6\u91CC\u6309\u9700\u5BFC\u5165\uFF0C\u8FD9\u6837\u7F16\u8BD1\u5668\u4F1A\u5728\u6784\u5EFA\u7684\u65F6\u5019\u4E22\u5F03\u6CA1\u6709\u88AB\u5F15\u7528\u7684\u6A21\u5757\uFF0C\u53EF\u4EE5\u6709\u6548\u7684\u51CF\u5C11\u6253\u5305\u540E\u7684\u9879\u76EE\u4F53\u79EF\u3002</p><div class="language-vue"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">setup</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">lang</span><span style="color:#A6ACCD;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ts</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">useRandom</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@lunarxyz/core</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><p>\u5728\u6BCF\u4E2A API \u7684\u4F7F\u7528\u8BF4\u660E\u91CC\u90FD\u6709\u5177\u4F53\u7684\u4F7F\u7528\u4F8B\u5B50\u3002</p><h2 id="\u7C7B\u578B\u58F0\u660E" tabindex="-1">\u7C7B\u578B\u58F0\u660E <a class="header-anchor" href="#\u7C7B\u578B\u58F0\u660E" aria-hidden="true">#</a></h2><p>\u8FD9\u4E5F\u662F\u4E00\u4E2A Type Strong \u7684\u5305\uFF0C\u63D0\u4F9B\u4E86\u5B8C\u5584\u7684 TypeScript \u7C7B\u578B\u58F0\u660E\u3002</p><p>\u4F7F\u7528 TS \u53CB\u597D\u7684\u7F16\u8F91\u5668\u5F00\u53D1\u65F6\uFF08 e.g. <a href="https://code.visualstudio.com" target="_blank" rel="noopener noreferrer">VSCode</a> \uFF09\uFF0C\u7F16\u8F91\u5668\u53EF\u4EE5\u5E2E\u4F60\u81EA\u52A8\u63A8\u5BFC\u6BCF\u4E2A API \u7684\u7C7B\u578B\u3002</p><p>\u5F53\u4F60\u4E0D\u6E05\u695A\u5177\u4F53\u7528\u6CD5\u7684\u65F6\u5019\uFF0C\u4E5F\u53EF\u4EE5\u6309\u4F4F Ctrl + \u5DE6\u952E \u70B9\u51FB API \u540D\u79F0\u53EF\u4EE5\u8DF3\u8F6C\u5230 <code>.d.ts</code> \u6587\u4EF6\u67E5\u770B\u58F0\u660E\u53CA\u6CE8\u91CA\u3002</p><h2 id="cdn" tabindex="-1">CDN <a class="header-anchor" href="#cdn" aria-hidden="true">#</a></h2><p>\u5982\u679C\u7279\u6B8A\u60C5\u51B5\u4E0B\u9700\u8981\u5728\u624B\u5199\u7684 HTML \u9875\u9762\u91CC\u4F7F\u7528\u8FD9\u4E2A\u5305\uFF0C\u4E5F\u53EF\u4EE5\u901A\u8FC7 CDN \u7684\u65B9\u5F0F\u5F15\u5165\uFF1A</p><ul><li>\u4F7F\u7528 UNPKG</li></ul><div class="language-html"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">src</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">https://unpkg.com/@lunarxyz/core</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><ul><li>\u4F7F\u7528 jsDelivr</li></ul><div class="language-html"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">src</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">https://cdn.jsdelivr.net/npm/@lunarxyz/core</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><p>\u4F46\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u8FD9\u4E2A\u5305\u5728\u6784\u5EFA\u7684\u65F6\u5019\u8FDB\u884C\u4E86\u5916\u90E8\u4F9D\u8D56\u7684\u6392\u9664\uFF0C\u56E0\u6B64\u5728\u5F15\u5165\u8FD9\u4E2A\u5305\u7684\u65F6\u5019\u4E5F\u5FC5\u987B\u5F15\u5165\u5BF9\u5E94\u4F9D\u8D56\u7684 CDN \uFF0C\u5E76\u4E14\u4FDD\u6301\u5728 <code>@lunarxyz/core</code> \u524D\u9762\u3002</p><p>\u4F8B\u5982\u8981\u4F7F\u7528 <code>useAxios</code> \uFF0C\u5219\u5FC5\u987B\u5148\u5F15\u5165 Axios \u7684 CDN \uFF0C\u4F7F\u7528 Vue \u76F8\u5173\u7684\u4E5F\u662F\u5982\u6B64:</p><div class="language-html"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">src</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">https://unpkg.com/vue</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">src</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">https://unpkg.com/axios</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">src</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">https://unpkg.com/@lunarxyz/core</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><p>\u800C\u4F7F\u7528\u72EC\u7ACB\u5B9E\u73B0\u7684\u529F\u80FD\u5219\u65E0\u9700\u5F15\u5165\u5176\u4ED6\u5E93\uFF08 e.g. <code>useDataType</code> \uFF09\u3002</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>\u56E0\u4E3A\u8FD9\u4E2A\u5305\u96C6\u6210\u7684 Lodash \u4EC5\u652F\u6301 ES \u6A21\u5757\uFF0C\u6240\u4EE5\u4E0D\u652F\u6301\u5728 CDN \u6A21\u5F0F\u4E0B\u4F7F\u7528 <code>useLodash</code> \u65B9\u6CD5\uFF0C\u5982\u679C\u786E\u5B9E\u8981\u7528\uFF0C\u8BF7\u72EC\u7ACB\u5F15\u5165 Lodash \u7684 CDN \u5305\u5E76\u5355\u72EC\u4F7F\u7528\u3002</p></div>`,26),x=JSON.parse('{"title":"\u5FEB\u901F\u4E0A\u624B","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5B89\u88C5","slug":"\u5B89\u88C5"},{"level":2,"title":"\u6309\u9700\u5F15\u5165","slug":"\u6309\u9700\u5F15\u5165"},{"level":2,"title":"\u7C7B\u578B\u58F0\u660E","slug":"\u7C7B\u578B\u58F0\u660E"},{"level":2,"title":"CDN","slug":"cdn"}],"relativePath":"guide/index.md"}'),m={name:"guide/index.md"},b=Object.assign(m,{setup(s){return(l,A)=>(n(),e("div",null,[C,r(g),v]))}});export{x as __pageData,b as default};
