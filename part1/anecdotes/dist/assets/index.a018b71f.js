var x=Object.defineProperty;var f=Object.getOwnPropertySymbols;var w=Object.prototype.hasOwnProperty,A=Object.prototype.propertyIsEnumerable;var h=(e,t,s)=>t in e?x(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,g=(e,t)=>{for(var s in t||(t={}))w.call(t,s)&&h(e,s,t[s]);if(f)for(var s of f(t))A.call(t,s)&&h(e,s,t[s]);return e};import{j as d,r as v,R as k}from"./vendor.e80aca15.js";const j=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function s(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerpolicy&&(r.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?r.credentials="include":n.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(n){if(n.ep)return;n.ep=!0;const r=s(n);fetch(n.href,r)}};j();var V="/full-stack-open-2021/part1/anecdotes/dist/assets/react-logo.ecc203fb.svg",O="/full-stack-open-2021/part1/anecdotes/dist/assets/vite-logo.8ce09b94.svg",L="/full-stack-open-2021/part1/anecdotes/dist/assets/triangle-up-icon.13fefb17.svg";const o=d.exports.jsx,c=d.exports.jsxs,y=d.exports.Fragment,u=["If it hurts, do it more often","Adding manpower to a late software project makes it later!","The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.","Any fool can write code that a computer can understand. Good programmers write code that humans can understand.","Premature optimization is the root of all evil.","Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.","Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients"],T=({text:e})=>o("h1",{className:"title",children:e}),M=({text:e})=>o("h2",{className:"heading-2",children:e}),b=({text:e})=>o("blockquote",{className:"blockquote",children:Array.isArray(e)?o("p",{className:"quote",children:e[0]}):o("p",{className:"quote",children:e})}),q=({votes:e,setVotes:t,selected:s})=>c("div",{className:"votes",children:[o(C,{handleClick:()=>{const n=g({},e);n[s]=e[s]+1,t(n)},icon:L,a11yText:"Upvote"}),o(N,{votes:e,selected:s})]}),N=({votes:e,selected:t})=>Array.isArray(t)?o("span",{className:"votes__num",children:t[1]}):o("span",{className:"votes__num",children:e[t]}),C=({handleClick:e,icon:t,a11yText:s})=>c("button",{className:"button",onClick:e,children:[o("img",{src:t,alt:"Arrow up icon",className:"button--icon"}),o("span",{className:"screen-reader screen-reader--focusable",children:s})]}),E=({handleClick:e,text:t})=>o("button",{className:"button button--text position--center",onClick:e,children:t}),I=()=>c("footer",{className:"position--bottom",children:[o("img",{src:O,className:"logo",alt:"Vite logo"}),o("img",{src:V,className:"logo logo--spin",alt:"React logo"})]}),R=()=>{const[e,t]=v.exports.useState(0),[s,i]=v.exports.useState({0:0,1:0,2:0,3:0,4:0,5:0,6:0}),n=()=>{const a=Math.floor(Math.random()*u.length);t(a)},r=()=>{const a=Object.entries(s).reduce((m,p)=>m[1]>p[1]?m:p);return[u[a[0]],a[1]]},l=()=>Object.keys(s).every(a=>s[a]===0);return c(y,{children:[o(T,{text:"Anecdote of software engineering"}),c("div",{className:"vote-anecdote",children:[o(q,{votes:s,setVotes:i,selected:e}),o(b,{text:u[e]})]}),c("section",{children:[o(M,{text:"Most voted anecdote"}),o("div",{className:"vote-anecdote",children:l()?o("p",{children:"No votes registered yet"}):c(y,{children:[o(N,{votes:s,selected:r()}),o(b,{text:r()})]})})]}),o(E,{handleClick:n,text:"Randomize"}),o(I,{})]})};k.render(o(R,{}),document.getElementById("root"));
