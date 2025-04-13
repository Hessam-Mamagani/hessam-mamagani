import{j as e,X as s,M as t,S as a,a as i,P as l,b as r,G as n,L as o,F as c}from"./ui.b2217c68.js";import{a as d,r as m,m as x,A as h,R as u}from"./vendor.0c3da4e1.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver((e=>{for(const t of e)if("childList"===t.type)for(const e of t.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&s(e)})).observe(document,{childList:!0,subtree:!0})}function s(e){if(e.ep)return;e.ep=!0;const s=function(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),"use-credentials"===e.crossOrigin?s.credentials="include":"anonymous"===e.crossOrigin?s.credentials="omit":s.credentials="same-origin",s}(e);fetch(e.href,s)}}();var g={},f=d;g.createRoot=f.createRoot,g.hydrateRoot=f.hydrateRoot;function p(){const[a,i]=m.useState(!1),[l,r]=m.useState(!1);m.useEffect((()=>{const e=()=>{i(window.scrollY>50)};return window.addEventListener("scroll",e),()=>{window.removeEventListener("scroll",e)}}),[]);const n=[{name:"About",href:"#about"},{name:"Projects",href:"#projects"},{name:"Skills",href:"#skills"},{name:"Contact",href:"#contact"}];return e.jsxs(x.nav,{initial:{y:-20,opacity:0},animate:{y:0,opacity:1},transition:{duration:.5},className:"fixed top-0 left-0 right-0 z-50 transition-all duration-300 "+(a?"bg-white shadow-md text-gray-800 py-3":"bg-transparent text-white py-6"),children:[e.jsxs("div",{className:"container mx-auto px-4 max-w-6xl flex justify-between items-center",children:[e.jsxs("a",{href:"#",className:"text-2xl font-bold tracking-tight flex items-center",children:[e.jsx(x.span,{className:"text-primary-600",whileHover:{scale:1.1},transition:{type:"spring",stiffness:400,damping:10},children:"H"}),e.jsx("span",{className:a?"text-gray-800":"text-white",children:"essam"})]}),e.jsx("ul",{className:"hidden md:flex space-x-8",children:n.map((s=>e.jsx(x.li,{whileHover:{y:-2},transition:{type:"spring",stiffness:300},children:e.jsx("a",{href:s.href,className:"hover:text-primary-500 transition-colors "+(a?"text-gray-800":"text-white"),children:s.name})},s.name)))}),e.jsx(x.button,{className:"md:hidden flex items-center justify-center h-10 w-10 rounded-full bg-white/10 backdrop-blur-sm",onClick:()=>r(!l),whileTap:{scale:.9},"aria-label":l?"Close menu":"Open menu",children:l?e.jsx(s,{className:"w-5 h-5 "+(a?"text-gray-800":"text-white")}):e.jsx(t,{className:"w-5 h-5 "+(a?"text-gray-800":"text-white")})})]}),e.jsx(h,{children:l&&e.jsx(x.div,{className:"md:hidden bg-white shadow-lg absolute top-full left-0 right-0",initial:{opacity:0,height:0},animate:{opacity:1,height:"auto"},exit:{opacity:0,height:0},transition:{duration:.3},children:e.jsx("ul",{className:"py-4 px-4",children:n.map(((s,t)=>e.jsx(x.li,{className:"mb-3 last:mb-0",initial:{x:-20,opacity:0},animate:{x:0,opacity:1},transition:{delay:.1*t},children:e.jsx("a",{href:s.href,className:"block py-2 px-4 text-gray-800 hover:bg-primary-50 hover:text-primary-600 rounded-lg transition-colors",onClick:()=>r(!1),children:s.name})},s.name)))})})})]})}function b(){return e.jsx("section",{id:"about",className:"py-20 bg-gray-50",children:e.jsxs("div",{className:"container mx-auto px-4",children:[e.jsx("h2",{className:"text-3xl font-bold text-center mb-12",children:"About Me"}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-8 items-center",children:[e.jsx("div",{children:e.jsx("div",{className:"rounded-lg shadow-lg max-w-full mx-auto overflow-hidden bg-gray-200 aspect-square flex items-center justify-center",children:e.jsx("img",{src:"/profile.jpg",alt:"Hessam Mamagani",className:"w-full h-full object-cover"})})}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-2xl font-semibold mb-4",children:"Full-Stack Developer"}),e.jsx("p",{className:"mb-4",children:"I specialize in building modern, responsive, and scalable web applications using cutting-edge technologies. With experience in both frontend and backend development, I bring ideas to life with clean, maintainable code."}),e.jsx("p",{className:"mb-4",children:"My focus areas include React, .NET, cloud architecture, and AI integration. I'm passionate about creating intuitive user experiences and efficient, reliable systems."}),e.jsxs("div",{className:"mt-6",children:[e.jsx("h4",{className:"text-xl font-semibold mb-2",children:"Key Skills:"}),e.jsx("div",{className:"flex flex-wrap gap-2",children:["React","TypeScript",".NET","Cloud Architecture","Azure","SQL","NoSQL","AI Integration"].map((s=>e.jsx("span",{className:"px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm",children:s},s)))})]})]})]})]})})}const y=[{title:"Frontend",skills:[{name:"React",level:90},{name:"TypeScript",level:85},{name:"HTML/CSS",level:95},{name:"Tailwind CSS",level:90},{name:"Flutter",level:75}]},{title:"Backend",skills:[{name:".NET Core/9",level:90},{name:"Node.js",level:80},{name:"SQL",level:85},{name:"Azure Services",level:85},{name:"API Design",level:90}]},{title:"DevOps & Tools",skills:[{name:"Git/GitHub",level:90},{name:"Docker",level:75},{name:"CI/CD",level:80},{name:"Azure DevOps",level:85},{name:"Jest/Testing",level:75}]}],j=({name:s,level:t})=>e.jsxs("div",{className:"mb-4",children:[e.jsxs("div",{className:"flex justify-between mb-1",children:[e.jsx("span",{className:"font-medium",children:s}),e.jsxs("span",{className:"text-sm text-gray-500",children:[t,"%"]})]}),e.jsx("div",{className:"h-2.5 bg-gray-200 rounded-full",children:e.jsx("div",{className:"h-2.5 bg-blue-600 rounded-full",style:{width:`${t}%`}})})]});function v(){return e.jsx("section",{id:"skills",className:"py-20",children:e.jsxs("div",{className:"container mx-auto px-4",children:[e.jsx("h2",{className:"text-3xl font-bold text-center mb-12",children:"Skills & Expertise"}),e.jsx("div",{className:"grid md:grid-cols-3 gap-8",children:y.map((s=>e.jsxs("div",{className:"bg-white p-6 rounded-lg shadow",children:[e.jsx("h3",{className:"text-xl font-semibold mb-6 text-center",children:s.title}),e.jsx("div",{children:s.skills.map((s=>e.jsx(j,{name:s.name,level:s.level},s.name)))})]},s.title)))})]})})}const N={default:"bg-blue-600 text-white hover:bg-blue-700",outline:"border border-blue-600 text-blue-600 hover:bg-blue-50",ghost:"hover:bg-gray-100"},w=({className:s="",variant:t="default",asChild:i=!1,...l})=>{const r=i?a:"button";return e.jsx(r,{className:`px-4 py-2 rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${N[t]} ${s}`,...l})};function k(){return e.jsx("section",{id:"contact",className:"py-20 bg-gray-50",children:e.jsxs("div",{className:"container mx-auto px-4",children:[e.jsx("h2",{className:"text-3xl font-bold text-center mb-12",children:"Get In Touch"}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-10",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-xl font-semibold mb-6",children:"Contact Information"}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center",children:[e.jsx(i,{className:"w-5 h-5 mr-3 text-blue-600"}),e.jsx("a",{href:"mailto:hessam.mamagani@gmail.com",className:"hover:text-blue-600",children:"hessam.mamagani@gmail.com"})]}),e.jsxs("div",{className:"flex items-center",children:[e.jsx(l,{className:"w-5 h-5 mr-3 text-blue-600"}),e.jsx("a",{href:"tel:+905392294251",className:"hover:text-blue-600",children:"+90 539 229 4251"})]}),e.jsxs("div",{className:"flex items-center",children:[e.jsx(r,{className:"w-5 h-5 mr-3 text-blue-600"}),e.jsx("span",{children:"Istanbul, Turkey"})]}),e.jsxs("div",{className:"flex items-center",children:[e.jsx(n,{className:"w-5 h-5 mr-3 text-blue-600"}),e.jsx("a",{href:"https://github.com/hessam-mamagani",className:"hover:text-blue-600",target:"_blank",rel:"noreferrer",children:"github.com/hessam-mamagani"})]}),e.jsxs("div",{className:"flex items-center",children:[e.jsx(o,{className:"w-5 h-5 mr-3 text-blue-600"}),e.jsx("a",{href:"https://linkedin.com/in/hessam-mamagani",className:"hover:text-blue-600",target:"_blank",rel:"noreferrer",children:"linkedin.com/in/hessam-mamagani"})]})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-xl font-semibold mb-6",children:"Send Me a Message"}),e.jsxs("form",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"name",className:"block mb-2 text-sm font-medium",children:"Name"}),e.jsx("input",{type:"text",id:"name",className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",required:!0})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"email",className:"block mb-2 text-sm font-medium",children:"Email"}),e.jsx("input",{type:"email",id:"email",className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",required:!0})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"message",className:"block mb-2 text-sm font-medium",children:"Message"}),e.jsx("textarea",{id:"message",rows:"4",className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",required:!0})]}),e.jsx(w,{type:"submit",className:"w-full",children:"Send Message"})]})]})]})]})})}var S=new Map,A=new WeakMap,I=0;function C(e){return Object.keys(e).sort().filter((s=>void 0!==e[s])).map((s=>{return`${s}_${"root"===s?(t=e.root,t?(A.has(t)||(I+=1,A.set(t,I.toString())),A.get(t)):"0"):e[s]}`;var t})).toString()}function E(e,s,t={},a=undefined){if(void 0===window.IntersectionObserver&&void 0!==a){const i=e.getBoundingClientRect();return s(a,{isIntersecting:a,target:e,intersectionRatio:"number"==typeof t.threshold?t.threshold:0,time:0,boundingClientRect:i,intersectionRect:i,rootBounds:i}),()=>{}}const{id:i,observer:l,elements:r}=function(e){const s=C(e);let t=S.get(s);if(!t){const a=new Map;let i;const l=new IntersectionObserver((s=>{s.forEach((s=>{var t;const l=s.isIntersecting&&i.some((e=>s.intersectionRatio>=e));e.trackVisibility&&void 0===s.isVisible&&(s.isVisible=l),null==(t=a.get(s.target))||t.forEach((e=>{e(l,s)}))}))}),e);i=l.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),t={id:s,observer:l,elements:a},S.set(s,t)}return t}(t),n=r.get(e)||[];return r.has(e)||r.set(e,n),n.push(s),l.observe(e),function(){n.splice(n.indexOf(s),1),0===n.length&&(r.delete(e),l.unobserve(e)),0===r.size&&(l.disconnect(),S.delete(i))}}function M(){m.useEffect((()=>{const e=window.location.hash;e&&setTimeout((()=>{const s=document.querySelector(e);s&&s.scrollIntoView({behavior:"smooth"})}),100)}),[]),m.useEffect((()=>{const e=()=>{document.querySelectorAll("img").forEach((e=>{e.onerror=()=>{e.src='data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"%3E%3Crect width="100" height="100" fill="%23f0f0f0"/%3E%3Ctext x="50" y="50" font-family="Arial" font-size="12" fill="%23999" text-anchor="middle" dominant-baseline="middle"%3EImage%3C/text%3E%3C/svg%3E',e.alt="Placeholder image"}}))};return e(),document.addEventListener("DOMContentLoaded",e),()=>document.removeEventListener("DOMContentLoaded",e)}),[]);const[s,t]=function({threshold:e,delay:s,trackVisibility:t,rootMargin:a,root:i,triggerOnce:l,skip:r,initialInView:n,fallbackInView:o,onChange:c}={}){var d;const[x,h]=m.useState(null),u=m.useRef(c),[g,f]=m.useState({inView:!!n,entry:void 0});u.current=c,m.useEffect((()=>{if(r||!x)return;let n;return n=E(x,((e,s)=>{f({inView:e,entry:s}),u.current&&u.current(e,s),s.isIntersecting&&l&&n&&(n(),n=void 0)}),{root:i,rootMargin:a,threshold:e,trackVisibility:t,delay:s},o),()=>{n&&n()}}),[Array.isArray(e)?e.toString():e,x,i,a,l,r,t,o,s]);const p=null==(d=g.entry)?void 0:d.target,b=m.useRef(void 0);x||!p||l||r||b.current===p||(b.current=p,f({inView:!!n,entry:void 0}));const y=[h,g.inView,g.entry];return y.ref=y[0],y.inView=y[1],y.entry=y[2],y}({triggerOnce:!0,threshold:.1});return e.jsxs("div",{className:"min-h-screen bg-gray-50 overflow-x-hidden",children:[e.jsx(p,{}),e.jsx(x.section,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.8},className:"py-24 bg-gradient-to-r from-primary-600 to-secondary-600 text-white",children:e.jsxs("div",{className:"container mx-auto px-4 max-w-5xl flex flex-col md:flex-row items-center",children:[e.jsxs(x.div,{initial:{opacity:0,x:-30},animate:{opacity:1,x:0},transition:{duration:.8,delay:.2},className:"md:w-2/3 mb-10 md:mb-0 md:pr-10",children:[e.jsx("h1",{className:"text-5xl md:text-6xl font-bold mb-6 tracking-tight",children:"Hessam Mamagani"}),e.jsx("p",{className:"text-xl md:text-2xl mb-8 text-primary-100",children:"Full-Stack Developer | AI & Cloud Solutions"}),e.jsx("p",{className:"text-lg mb-8 text-primary-100 max-w-2xl leading-relaxed",children:"I craft modern, scalable applications with cutting-edge technologies, focusing on exceptional user experiences and robust backend systems."}),e.jsxs("div",{className:"flex gap-6 mb-8",children:[e.jsx("a",{href:"https://github.com/hessam-mamagani",target:"_blank",rel:"noreferrer",className:"bg-white bg-opacity-20 p-2 rounded-full hover:bg-opacity-30 transition-all hover:scale-110","aria-label":"GitHub Profile",children:e.jsx(n,{className:"w-6 h-6"})}),e.jsx("a",{href:"https://linkedin.com/in/hessam-mamagani",target:"_blank",rel:"noreferrer",className:"bg-white bg-opacity-20 p-2 rounded-full hover:bg-opacity-30 transition-all hover:scale-110","aria-label":"LinkedIn Profile",children:e.jsx(o,{className:"w-6 h-6"})}),e.jsx("a",{href:"mailto:hessam.mamagani@gmail.com",className:"bg-white bg-opacity-20 p-2 rounded-full hover:bg-opacity-30 transition-all hover:scale-110","aria-label":"Email Contact",children:e.jsx(i,{className:"w-6 h-6"})}),e.jsx("a",{href:"./cv/Hessam_Mamagani_CV.pdf",target:"_blank",rel:"noreferrer",className:"bg-white bg-opacity-20 p-2 rounded-full hover:bg-opacity-30 transition-all hover:scale-110","aria-label":"Download CV",children:e.jsx(c,{className:"w-6 h-6"})})]}),e.jsx(x.a,{href:"#projects",whileHover:{scale:1.05},whileTap:{scale:.95},className:"inline-block bg-white text-primary-600 px-8 py-3 rounded-lg font-medium hover:bg-opacity-90 transition shadow-lg hover:shadow-xl",children:"View My Work"})]}),e.jsx(x.div,{initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},transition:{duration:.8,delay:.4,type:"spring",stiffness:100},className:"md:w-1/3 flex justify-center",children:e.jsx("div",{className:"w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden bg-white bg-opacity-20 shadow-2xl",children:e.jsx("img",{src:"/profile.jpg",alt:"Hessam Mamagani",className:"w-full h-full object-cover",style:{display:"block",minWidth:"100%",minHeight:"100%"},loading:"eager",onError:e=>{console.log("First image failed to load, trying alternate path"),e.target.onerror=null,e.target.src="/images/profile.jpg"}})})})]})}),e.jsx(b,{}),e.jsx("section",{id:"projects",className:"py-24 bg-white",ref:s,children:e.jsxs("div",{className:"container mx-auto px-4 max-w-6xl",children:[e.jsxs(x.div,{initial:"hidden",animate:t?"visible":"hidden",variants:{hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:{duration:.6}}},className:"text-center mb-16",children:[e.jsx("h2",{className:"text-4xl font-bold mb-4 text-gray-900",children:"Featured Projects"}),e.jsx("p",{className:"text-gray-600 max-w-2xl mx-auto",children:"A showcase of my recent work, demonstrating my expertise in full-stack development, AI integration, and cloud solutions."})]}),e.jsxs("div",{className:"grid md:grid-cols-3 gap-10",children:[e.jsxs(x.div,{initial:{opacity:0,y:30},animate:t?{opacity:1,y:0}:{opacity:0,y:30},transition:{duration:.6,delay:.2},className:"bg-white rounded-xl shadow-lg overflow-hidden transform hover:translate-y-[-8px] transition-all duration-300 hover:shadow-xl border border-gray-100",children:[e.jsx("div",{className:"h-52 bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center",children:e.jsx("span",{className:"text-6xl",children:"🚀"})}),e.jsxs("div",{className:"p-8",children:[e.jsx("h3",{className:"text-2xl font-bold mb-3 text-gray-800",children:"InsightfulAI"}),e.jsx("p",{className:"text-gray-600 mb-6 line-clamp-3",children:"AI-powered workflow assistant built with .NET 9, React, and Azure. Streamlines business processes with intelligent automation."}),e.jsx("div",{className:"flex flex-wrap gap-2 mb-6",children:["React",".NET","Azure","AI"].map((s=>e.jsx("span",{className:"px-3 py-1 bg-indigo-100 text-indigo-800 text-xs font-medium rounded-full",children:s},s)))}),e.jsxs("div",{className:"flex justify-between",children:[e.jsxs("a",{href:"https://github.com/hessammamagani/insightful-ai",target:"_blank",rel:"noreferrer",className:"text-indigo-600 font-medium hover:text-indigo-800 flex items-center transition-colors",children:[e.jsx(n,{className:"w-4 h-4 mr-2"})," View Code"]}),e.jsx("a",{href:"#",className:"text-indigo-600 font-medium hover:text-indigo-800 transition-colors",children:"Live Demo"})]})]})]}),e.jsxs(x.div,{initial:{opacity:0,y:30},animate:t?{opacity:1,y:0}:{opacity:0,y:30},transition:{duration:.6,delay:.4},className:"bg-white rounded-xl shadow-lg overflow-hidden transform hover:translate-y-[-8px] transition-all duration-300 hover:shadow-xl border border-gray-100",children:[e.jsx("div",{className:"h-52 bg-gradient-to-r from-green-500 to-teal-500 flex items-center justify-center",children:e.jsx("span",{className:"text-6xl",children:"🛠️"})}),e.jsxs("div",{className:"p-8",children:[e.jsx("h3",{className:"text-2xl font-bold mb-3 text-gray-800",children:"Pilz Services Automation"}),e.jsx("p",{className:"text-gray-600 mb-6 line-clamp-3",children:"Automated inquiry and response platform with secure access control. Handles complex service workflows efficiently."}),e.jsx("div",{className:"flex flex-wrap gap-2 mb-6",children:[".NET","Azure","SQL","API"].map((s=>e.jsx("span",{className:"px-3 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full",children:s},s)))}),e.jsxs("div",{className:"flex justify-between",children:[e.jsxs("span",{className:"text-gray-400 flex items-center",children:[e.jsx(n,{className:"w-4 h-4 mr-2"})," Private Code"]}),e.jsx("span",{className:"text-gray-400",children:"Private Demo"})]})]})]}),e.jsxs(x.div,{initial:{opacity:0,y:30},animate:t?{opacity:1,y:0}:{opacity:0,y:30},transition:{duration:.6,delay:.6},className:"bg-white rounded-xl shadow-lg overflow-hidden transform hover:translate-y-[-8px] transition-all duration-300 hover:shadow-xl border border-gray-100",children:[e.jsx("div",{className:"h-52 bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center",children:e.jsx("span",{className:"text-6xl",children:"📱"})}),e.jsxs("div",{className:"p-8",children:[e.jsx("h3",{className:"text-2xl font-bold mb-3 text-gray-800",children:"Safety Expert App"}),e.jsx("p",{className:"text-gray-600 mb-6 line-clamp-3",children:"Offline-first mobile app for safety engineering with multilingual support. Used by professionals worldwide."}),e.jsx("div",{className:"flex flex-wrap gap-2 mb-6",children:["Flutter",".NET","SQL","Offline-First"].map((s=>e.jsx("span",{className:"px-3 py-1 bg-purple-100 text-purple-800 text-xs font-medium rounded-full",children:s},s)))}),e.jsxs("div",{className:"flex justify-between",children:[e.jsxs("span",{className:"text-gray-400 flex items-center",children:[e.jsx(n,{className:"w-4 h-4 mr-2"})," Private Code"]}),e.jsx("a",{href:"#",className:"text-purple-600 font-medium hover:text-purple-800 transition-colors",children:"App Store"})]})]})]})]})]})}),e.jsx(v,{}),e.jsx(k,{}),e.jsx("footer",{className:"bg-gray-900 text-white py-12",children:e.jsxs("div",{className:"container mx-auto px-4 max-w-6xl",children:[e.jsxs("div",{className:"flex flex-col md:flex-row justify-between items-center",children:[e.jsxs("div",{className:"mb-6 md:mb-0",children:[e.jsx("h3",{className:"text-2xl font-bold mb-2",children:"Hessam Mamagani"}),e.jsx("p",{className:"text-gray-400",children:"Full-Stack Developer | AI & Cloud Solutions"})]}),e.jsxs("div",{className:"flex gap-6",children:[e.jsx("a",{href:"https://github.com/hessam-mamagani",target:"_blank",rel:"noreferrer",className:"text-gray-400 hover:text-white transition-colors hover:scale-110 transform","aria-label":"GitHub Profile",children:e.jsx(n,{className:"w-6 h-6"})}),e.jsx("a",{href:"https://linkedin.com/in/hessam-mamagani",target:"_blank",rel:"noreferrer",className:"text-gray-400 hover:text-white transition-colors hover:scale-110 transform","aria-label":"LinkedIn Profile",children:e.jsx(o,{className:"w-6 h-6"})}),e.jsx("a",{href:"mailto:hessam.mamagani@gmail.com",className:"text-gray-400 hover:text-white transition-colors hover:scale-110 transform","aria-label":"Email Contact",children:e.jsx(i,{className:"w-6 h-6"})})]})]}),e.jsxs("div",{className:"border-t border-gray-800 mt-8 pt-8 text-center text-gray-400",children:[e.jsxs("p",{children:["© ",(new Date).getFullYear()," Hessam Mamagani. All rights reserved."]}),e.jsx("p",{className:"text-sm mt-2",children:"Built with React, Tailwind CSS, and deployed on GitHub Pages"})]})]})})]})}function L(){return e.jsx(M,{})}g.createRoot(document.getElementById("root")).render(e.jsx(u.StrictMode,{children:e.jsx(L,{})}));
