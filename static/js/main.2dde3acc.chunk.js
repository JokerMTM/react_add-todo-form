(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],{13:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(7),i=a.n(n),r=a(5),c=a(2),s=a(1),o=(a(13),[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz"},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv"},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net"},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org"},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca"},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info"},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz"},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me"},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io"},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz"}]),l=[{id:1,title:"delectus aut autem",completed:!0,userId:1},{id:15,title:"some other todo",completed:!1,userId:1},{id:2,title:"quis ut nam facilis et officia qui",completed:!1,userId:4}],d=a(8),u=a.n(d),m=a(0),j=function(e){var t,a,n=e.user;return n&&(t=n.name,a=n.email),Object(m.jsx)(m.Fragment,{children:n&&Object(m.jsx)("a",{className:"UserInfo",href:"mailto:".concat(a),children:t})})};var b=function(e){var t=e.todo,a=t.id,n=t.title,i=t.completed,r=function(e){return o.find((function(t){return t.id===e}))||null}(t.userId);return Object(m.jsxs)("article",{"data-id":a,className:u()("TodoInfo ",{"TodoInfo--completed":i}),children:[Object(m.jsx)("h2",{className:"TodoInfo__title",children:n}),Object(m.jsx)(j,{user:r})]})},h=function(e){var t=e.todos;return Object(m.jsx)("section",{className:"TodoList",children:t.map((function(e){return Object(m.jsx)(b,{todo:e},e.id)}))})};function O(e){return Math.max.apply(Math,Object(r.a)(e.map((function(e){return e.id}))))+1}var f=function(){var e=Object(s.useState)(l),t=Object(c.a)(e,2),a=t[0],n=t[1],i=Object(s.useState)(""),d=Object(c.a)(i,2),u=d[0],j=d[1],b=Object(s.useState)(!1),f=Object(c.a)(b,2),p=f[0],x=f[1],v=Object(s.useState)(0),S=Object(c.a)(v,2),y=S[0],I=S[1],N=Object(s.useState)(!1),g=Object(c.a)(N,2),C=g[0],T=g[1];return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)("h1",{children:"Add todo form"}),Object(m.jsxs)("form",{action:"/api/todos",method:"POST",onSubmit:function(e){if(e.preventDefault(),x(!u),T(0===y),u&&0!==y){var t={id:O(a),title:u,completed:!1,userId:y};n((function(e){return[].concat(Object(r.a)(e),[t])})),j(""),I(0)}},children:[Object(m.jsxs)("div",{className:"field",children:[Object(m.jsx)("label",{htmlFor:"InputTitle",children:"Title:"}),Object(m.jsx)("input",{id:"InputTitle",type:"text","data-cy":"titleInput",value:u,placeholder:"Enter a title",onChange:function(e){j(e.target.value),x(!e.target.value.trim())}}),p&&Object(m.jsx)("span",{className:"error",children:"Please enter a title"})]}),Object(m.jsxs)("div",{className:"field",children:[Object(m.jsx)("label",{htmlFor:"userSelect",children:"Select user:"}),Object(m.jsxs)("select",{id:"userSelect","data-cy":"userSelect",value:y,onChange:function(e){I(+e.target.value),T(!1)},children:[Object(m.jsx)("option",{value:"0",disabled:!0,children:"Choose a user"}),o.map((function(e){var t=e.id,a=e.name;return Object(m.jsx)("option",{value:t,children:a},t)}))]}),C&&Object(m.jsx)("span",{className:"error",children:"Please choose a user"})]}),Object(m.jsx)("button",{type:"submit","data-cy":"submitButton",children:"Add"})]}),Object(m.jsx)(h,{todos:a})]})};i.a.render(Object(m.jsx)(f,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.2dde3acc.chunk.js.map