/**
 * name: @lunarxyz/monorepo
 * version: v0.48.0
 * description: The JS-SDK of Lunarxyz App, provides simple APIs to operate.
 * author: chengpeiquan <chengpeiquan@chengpeiquan.com>
 * homepage: https://lunarxyz.github.io
 */
import{_ as o,c as e,b as a,a as s,I as p,f as l,o as t,g as c}from"./app.f518222d.js";const B=JSON.parse('{"title":"useFormat","description":"","frontmatter":{},"headers":[{"level":2,"title":"formatTime","slug":"formattime","link":"#formattime","children":[]},{"level":2,"title":"timeAgo","slug":"timeago","link":"#timeago","children":[]},{"level":2,"title":"timeDistance","slug":"timedistance","link":"#timedistance","children":[]},{"level":2,"title":"formatVideoDuration","slug":"formatvideoduration","link":"#formatvideoduration","children":[]},{"level":2,"title":"formatSN","slug":"formatsn","link":"#formatsn","children":[]}],"relativePath":"core/display/format/index.md"}'),r={name:"core/display/format/index.md"},y=s("h1",{id:"useformat",tabindex:"-1"},[p("useFormat "),s("a",{class:"header-anchor",href:"#useformat","aria-hidden":"true"},"#")],-1),A=s("p",null,"\u63D0\u4F9B\u4E00\u4E9B\u5E38\u7528\u7684\u683C\u5F0F\u5316\u6570\u636E\u7684\u65B9\u6CD5\u3002",-1),D=s("h2",{id:"formattime",tabindex:"-1"},[p("formatTime "),s("a",{class:"header-anchor",href:"#formattime","aria-hidden":"true"},"#")],-1),C=s("p",null,"\u683C\u5F0F\u5316\u65F6\u95F4\u7684\u663E\u793A\u683C\u5F0F\u3002",-1),F=l(`<ul><li>Type Declarations:</li></ul><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#C792EA;">declare</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">formatTime</span><span style="color:#89DDFF;">(</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;">/**</span></span>
<span class="line"><span style="color:#676E95;">   * \u8981\u7528\u4E8E\u683C\u5F0F\u5316\u7684\u65F6\u95F4</span></span>
<span class="line"><span style="color:#676E95;">   */</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#A6ACCD;">time</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Date</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;">/**</span></span>
<span class="line"><span style="color:#676E95;">   * \u8981\u8F6C\u6362\u7684\u683C\u5F0F</span></span>
<span class="line"><span style="color:#676E95;">   * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">tips</span><span style="color:#676E95;"> \u683C\u5F0F\u66F4\u89C4\u8303\u5316\uFF0C\u4F8B\u5982\u5FC5\u987B\u662F \`yyyy-MM-dd\` \u800C\u4E0D\u662F \`YYYY-MM-DD\`</span></span>
<span class="line"><span style="color:#676E95;">   * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">see</span><span style="color:#676E95;"> </span><span style="color:#A6ACCD;">https://github.com/date-fns/date-fns/blob/main/docs/unicodeTokens.md</span></span>
<span class="line"><span style="color:#676E95;">   */</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#A6ACCD;">format</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span></span>
<span class="line"><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span></span>
<span class="line"></span></code></pre></div><ul><li>Example:</li></ul><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">useFormat</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@lunarxyz/core</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> formatTime </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">useFormat</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> now </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> Date</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">now</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#82AAFF;">formatTime</span><span style="color:#A6ACCD;">(now</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">yyyy-MM-dd</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)) </span><span style="color:#676E95;">// 2022-08-14</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#82AAFF;">formatTime</span><span style="color:#A6ACCD;">(now</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">yyyy-MM-dd hh:mm:ss</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)) </span><span style="color:#676E95;">// 2022-08-14 05:14:45</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#82AAFF;">formatTime</span><span style="color:#A6ACCD;">(now</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">yyyy-MM-dd HH:mm:ss</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)) </span><span style="color:#676E95;">// 2022-08-14 17:14:45</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#82AAFF;">formatTime</span><span style="color:#A6ACCD;">(now</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">yyyy/MM/dd</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)) </span><span style="color:#676E95;">// 2022/08/14</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#82AAFF;">formatTime</span><span style="color:#A6ACCD;">(now</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">yyyy\u5E74MM\u6708dd\u65E5</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)) </span><span style="color:#676E95;">// 2022\u5E7408\u670814\u65E5</span></span>
<span class="line"></span></code></pre></div><h2 id="timeago" tabindex="-1">timeAgo <a class="header-anchor" href="#timeago" aria-hidden="true">#</a></h2><p>\u8BA1\u7B97\u6307\u5B9A\u7684\u65F6\u95F4\u5230\u73B0\u5728\u7684\u76F8\u5BF9\u65F6\u95F4\u3002</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>\u5982\u679C\u4F20\u5165\u7684\u65F6\u95F4\u8D85\u8FC7\u5F53\u524D\u65F6\u95F4\uFF0C\u5219\u8FD4\u56DE\u4E00\u4E2A\u7A7A\u5B57\u7B26\u4E32 <code>&#39;&#39;</code> \u3002</p></div>`,7),i=l(`<ul><li>Type Declarations:</li></ul><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#C792EA;">declare</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">timeAgo</span><span style="color:#89DDFF;">(</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;">/**</span></span>
<span class="line"><span style="color:#676E95;">   * \u8981\u7528\u4E8E\u8BA1\u7B97\u7684\u65F6\u95F4</span></span>
<span class="line"><span style="color:#676E95;">   */</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#A6ACCD;">time</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Date</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span></span>
<span class="line"><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span></span>
<span class="line"></span></code></pre></div><ul><li>Example:</li></ul><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">useFormat</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@lunarxyz/core</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> timeAgo </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">useFormat</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// \u4F20\u5165\u5F53\u524D\u65F6\u95F4\u6233</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#82AAFF;">timeAgo</span><span style="color:#A6ACCD;">(Date</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">now</span><span style="color:#A6ACCD;">())) </span><span style="color:#676E95;">// \u4E0D\u5230 1 \u5206\u949F\u524D</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// \u4F20\u5165\u67D0\u4E00\u65E5\u671F\u7684\u65F6\u95F4\u6233</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#82AAFF;">timeAgo</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">+new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Date</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">2022-08-01</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">))) </span><span style="color:#676E95;">// 13 \u5929\u524D</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// \u4F20\u5165\u4E00\u4E2A\u65E5\u671F</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#82AAFF;">timeAgo</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Date</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">2022-08-01</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">))) </span><span style="color:#676E95;">// 13 \u5929\u524D</span></span>
<span class="line"></span></code></pre></div><h2 id="timedistance" tabindex="-1">timeDistance <a class="header-anchor" href="#timedistance" aria-hidden="true">#</a></h2><p>\u8BA1\u7B97\u4E24\u4E2A\u65F6\u95F4\u7684\u76F8\u5BF9\u65F6\u95F4\u8DDD\u79BB\uFF08\u652F\u6301\u4EFB\u610F\u4E24\u4E2A\u65F6\u95F4\u7684\u5BF9\u6BD4\uFF09\u3002</p>`,6),d=l(`<ul><li>Type Declarations:</li></ul><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#C792EA;">declare</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">timeDistance</span><span style="color:#89DDFF;">(</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;">/**</span></span>
<span class="line"><span style="color:#676E95;">   * \u8981\u7528\u4E8E\u8BA1\u7B97\u7684\u65F6\u95F4</span></span>
<span class="line"><span style="color:#676E95;">   */</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#A6ACCD;">time</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Date</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;">/**</span></span>
<span class="line"><span style="color:#676E95;">   * \u7528\u6765\u5BF9\u6BD4\u7684\u57FA\u7EBF\u65F6\u95F4</span></span>
<span class="line"><span style="color:#676E95;">   */</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#A6ACCD;">baseTime</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Date</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span></span>
<span class="line"><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span></span>
<span class="line"></span></code></pre></div><ul><li>Example:</li></ul><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">useFormat</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@lunarxyz/core</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> timeDistance </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">useFormat</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// \u57FA\u7EBF\u65F6\u95F4\u6BD4\u5F53\u524D\u65F6\u95F4\u5C0F</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#82AAFF;">timeDistance</span><span style="color:#A6ACCD;">(Date</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">now</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">+new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Date</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">2022-08-01</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">))) </span><span style="color:#676E95;">// 13 \u5929\u5185</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// \u57FA\u7EBF\u65F6\u95F4\u6BD4\u5F53\u524D\u65F6\u95F4\u5927</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#82AAFF;">timeDistance</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">+new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Date</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">2022-08-01</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> Date</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">now</span><span style="color:#A6ACCD;">())) </span><span style="color:#676E95;">// 13 \u5929\u524D</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// \u4EFB\u610F\u4E24\u4E2A\u65F6\u95F4\u5BF9\u6BD4</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#82AAFF;">timeDistance</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Date</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">2022-08-01</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Date</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">2022-08-10</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">))) </span><span style="color:#676E95;">// 9 \u5929\u524D</span></span>
<span class="line"></span></code></pre></div><h2 id="formatvideoduration" tabindex="-1">formatVideoDuration <a class="header-anchor" href="#formatvideoduration" aria-hidden="true">#</a></h2><p>\u683C\u5F0F\u5316\u89C6\u9891\u64AD\u653E\u65F6\u957F\uFF0C\u53EF\u4EE5\u628A\u79D2\u6570\u8F6C\u6362\u4E3A <code>00:00:00</code> \u8FD9\u6837\u7684\u64AD\u653E\u65F6\u957F\u683C\u5F0F\u3002</p>`,6),m=l(`<ul><li>Type Declarations:</li></ul><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#C792EA;">declare</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">formatVideoDuration</span><span style="color:#89DDFF;">(</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;">/**</span></span>
<span class="line"><span style="color:#676E95;">   * \u603B\u79D2\u6570</span></span>
<span class="line"><span style="color:#676E95;">   */</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#A6ACCD;">seconds</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span></span>
<span class="line"><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span></span>
<span class="line"></span></code></pre></div><ul><li>Example:</li></ul><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">useFormat</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@lunarxyz/core</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> formatVideoDuration </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">useFormat</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#82AAFF;">formatVideoDuration</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">10</span><span style="color:#A6ACCD;">)) </span><span style="color:#676E95;">// 00:00:10</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#82AAFF;">formatVideoDuration</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">100</span><span style="color:#A6ACCD;">)) </span><span style="color:#676E95;">// 00:01:40</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#82AAFF;">formatVideoDuration</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">1000</span><span style="color:#A6ACCD;">)) </span><span style="color:#676E95;">// 00:16:40</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#82AAFF;">formatVideoDuration</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">10000</span><span style="color:#A6ACCD;">)) </span><span style="color:#676E95;">// 02:46:40</span></span>
<span class="line"></span></code></pre></div><h2 id="formatsn" tabindex="-1">formatSN <a class="header-anchor" href="#formatsn" aria-hidden="true">#</a></h2><p>\u683C\u5F0F\u5316\u5E8F\u5217\u53F7\uFF0C\u53EF\u5C06\u63A5\u53E3\u8FD4\u56DE\u7684\u6570\u5B57\u5E8F\u5217\u8868\u8F6C\u6362\u4E3A <code>#001</code> \u7684\u683C\u5F0F\u3002</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>\u5F53\u4F20\u5165\u8D1F\u6570\u6216\u8005\u8D85\u8FC7 3 \u4F4D\u6570\u65F6\u4F1A\u8FD4\u56DE\u7A7A\u503C</p></div>`,7),u=l(`<ul><li>Type Declarations:</li></ul><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#C792EA;">declare</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">formatSN</span><span style="color:#89DDFF;">(</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;">/**</span></span>
<span class="line"><span style="color:#676E95;">   * \u5E8F\u5217\u53F7</span></span>
<span class="line"><span style="color:#676E95;">   */</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#A6ACCD;">sn</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span></span>
<span class="line"><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span></span>
<span class="line"></span></code></pre></div><ul><li>Example:</li></ul><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">useFormat</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@lunarxyz/core</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> formatSN </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">useFormat</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#82AAFF;">formatSN</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">)) </span><span style="color:#676E95;">// #001</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#82AAFF;">formatSN</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">12</span><span style="color:#A6ACCD;">)) </span><span style="color:#676E95;">// #012</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#82AAFF;">formatSN</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">123</span><span style="color:#A6ACCD;">)) </span><span style="color:#676E95;">// #123</span></span>
<span class="line"></span></code></pre></div>`,4);function E(_,g,f,h,T,b){const n=c("Platform");return t(),e("div",null,[y,A,D,C,a(n,{browser:"",electron:"",app:"",server:"",scriptlet:""}),F,a(n,{browser:"",electron:"",app:"",server:"",scriptlet:""}),i,a(n,{browser:"",electron:"",app:"",server:"",scriptlet:""}),d,a(n,{browser:"",electron:"",app:"",server:"",scriptlet:""}),m,a(n,{browser:"",electron:"",app:"",server:"",scriptlet:""}),u])}const S=o(r,[["render",E]]);export{B as __pageData,S as default};
