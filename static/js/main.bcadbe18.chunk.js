(this.webpackJsonpundefined=this.webpackJsonpundefined||[]).push([[0],{11:function(e,t,o){},12:function(e,t,o){"use strict";o.r(t);var n=o(1),a=o(4),i=o.n(a),r=o(0),s=o.n(r),c=o(2),u=o(5),l={title:"Tell us, what technologies do you use?",pages:[{name:"page1",questions:[{type:"radiogroup",choices:["Yes","No"],isRequired:!0,name:"skiptoend",title:"Would you like to skip to the end?"},{type:"radiogroup",choices:["Yes","No"],isRequired:!1,name:"frameworkUsing",title:"Do you use any front-end framework like Bootstrap?"},{type:"checkbox",choices:["Bootstrap","Foundation"],hasOther:!0,isRequired:!0,name:"framework",title:"What front-end framework do you use?",visibleIf:"{frameworkUsing} = 'Yes'"}]},{name:"page2",visibleIf:"{skiptoend} = 'No'",questions:[{type:"radiogroup",choices:["Yes","No"],isRequired:!0,name:"mvvmUsing",title:"Do you use any MVVM framework?"},{type:"checkbox",choices:["AngularJS","KnockoutJS","React"],hasOther:!0,isRequired:!0,name:"mvvm",title:"What MVVM framework do you use?",visibleIf:"{mvvmUsing} = 'Yes'"}]},{name:"page3",visibleIf:"{skiptoend} = 'No'",questions:[{type:"comment",name:"about",title:"Please tell us about your main requirements for Survey library"}]}]};var d={matrix:{root:"table table-striped"},navigationButton:"btn-nav",header:"header",container:"container"};var m=function(){var e=function(e,t){var o=Object(r.useState)((function(){try{var o=window.localStorage.getItem(e);return o?JSON.parse(o):t}catch(n){return console.log(n),t}})),n=Object(c.a)(o,2),a=n[0],i=n[1];return[a,function(t){try{var o=t instanceof Function?t(a):t;i(o),window.localStorage.setItem(e,JSON.stringify(o))}catch(n){console.log(n)}}]}("surveyData",null),t=Object(c.a)(e,2),o=(t[0],t[1]);return Object(r.useEffect)((function(){})),Object(n.jsx)(u.Survey,{json:l,css:d,onValueChanged:function(e){o(e.data)},onComplete:function(e){console.log(e)}})};o(11);i.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsxs)("div",{className:"app",children:[Object(n.jsx)("h1",{children:"Expunge Colorado Screener"}),Object(n.jsx)("div",{className:"center-me",children:Object(n.jsx)(m,{})})]})}),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.bcadbe18.chunk.js.map