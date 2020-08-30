(function(t){function o(o){for(var n,s,d=o[0],c=o[1],l=o[2],u=0,f=[];u<d.length;u++)s=d[u],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&f.push(i[s][0]),i[s]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);a&&a(o);while(f.length)f.shift()();return r.push.apply(r,l||[]),e()}function e(){for(var t,o=0;o<r.length;o++){for(var e=r[o],n=!0,d=1;d<e.length;d++){var c=e[d];0!==i[c]&&(n=!1)}n&&(r.splice(o--,1),t=s(s.s=e[0]))}return t}var n={},i={app:0},r=[];function s(o){if(n[o])return n[o].exports;var e=n[o]={i:o,l:!1,exports:{}};return t[o].call(e.exports,e,e.exports,s),e.l=!0,e.exports}s.m=t,s.c=n,s.d=function(t,o,e){s.o(t,o)||Object.defineProperty(t,o,{enumerable:!0,get:e})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,o){if(1&o&&(t=s(t)),8&o)return t;if(4&o&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(s.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&o&&"string"!=typeof t)for(var n in t)s.d(e,n,function(o){return t[o]}.bind(null,n));return e},s.n=function(t){var o=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(o,"a",o),o},s.o=function(t,o){return Object.prototype.hasOwnProperty.call(t,o)},s.p="/vue-todo-list/";var d=window["webpackJsonp"]=window["webpackJsonp"]||[],c=d.push.bind(d);d.push=o,d=d.slice();for(var l=0;l<d.length;l++)o(d[l]);var a=c;r.push([0,"chunk-vendors"]),e()})({0:function(t,o,e){t.exports=e("56d7")},"034f":function(t,o,e){"use strict";var n=e("85ec"),i=e.n(n);i.a},"56d7":function(t,o,e){"use strict";e.r(o);e("e260"),e("e6cf"),e("cca6"),e("a79d");var n=e("2b0e"),i=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",[e("TodoList")],1)},r=[],s=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"container"},[t._m(0),e("div",{staticClass:"row"},[e("div",{staticClass:"col-12"},[e("NewTodo",{on:{"on-addtodo":function(o){return t.addTodo(o)}}})],1)]),e("div",{staticClass:"row"},[e("div",{staticClass:"col-12"},[e("ul",{staticClass:"list-group"},t._l(t.todos,(function(o,n){return e("Todo",{key:n,attrs:{todoString:o.todoString,completed:o.completed},on:{"on-delete":function(e){return t.deleteTodo(o)},"on-toggle":function(e){return t.toggleTodo(o)},"on-edit":function(e){return t.editTodo(o,e)}}})})),1)])])])},d=[function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"row"},[e("div",{staticClass:"col-12 text-center"},[e("p",{staticClass:"display-4"},[t._v("Vue Todo List")])])])}],c=(e("4de4"),function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("li",{staticClass:"d-flex align-items-center list-group-item"},[t.isEditing?e("form",{staticClass:"flex-grow-1",on:{submit:function(o){return o.preventDefault(),t.endEditing()}}},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.newTodoString,expression:"newTodoString"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.newTodoString},on:{blur:function(o){return t.startEditing()},input:function(o){o.target.composing||(t.newTodoString=o.target.value)}}})]):e("button",{staticClass:"btn border-0 text-left flex-grow-1",class:{completed:t.completed},on:{click:function(o){return t.$emit("on-toggle")}}},[t._v(t._s(t.todoString))]),e("button",{staticClass:"btn btn-outline-primary mr-1 ml-1",on:{click:function(o){return t.startEditing()}}},[e("i",{staticClass:"fa fa-edit"})]),e("button",{staticClass:"btn btn-outline-danger",on:{click:function(o){return t.$emit("on-delete")}}},[e("i",{staticClass:"fa fa-trash-alt"})])])}),l=[],a={props:{todoString:String,completed:Boolean},data:function(){return{isEditing:!1,newTodoString:""}},methods:{startEditing:function(){this.isEditing?this.endEditing():(this.newTodoString=this.todoString,this.isEditing=!0)},endEditing:function(){this.isEditing=!1,this.$emit("on-edit",this.newTodoString)}}},u=a,f=(e("bc7e"),e("2877")),p=Object(f["a"])(u,c,l,!1,null,"4c978044",null),g=p.exports,m=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("form",{staticClass:"col-12",on:{submit:function(o){return o.preventDefault(),t.addTodo()}}},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.newTodo,expression:"newTodo"}],staticClass:"form-control",attrs:{placeholder:"Enter Todo",type:"text"},domProps:{value:t.newTodo},on:{input:function(o){o.target.composing||(t.newTodo=o.target.value)}}})])},v=[],h={data:function(){return{newTodo:""}},methods:{addTodo:function(){this.newTodo.length>1&&this.$emit("on-addtodo",this.newTodo),this.newTodo=""}}},b=h,T=Object(f["a"])(b,m,v,!1,null,"790adff0",null),w=T.exports,S={components:{Todo:g,NewTodo:w},data:function(){return{todos:[{todoString:"Watch Angular Course",completed:!1},{todoString:"Cook some food",completed:!0},{todoString:"Watch Youtube Videos",completed:!0},{todoString:"Publish These videos",completed:!1}]}},methods:{addTodo:function(t){this.todos.push({todoString:t,completed:!1})},toggleTodo:function(t){t.completed=!t.completed},editTodo:function(t,o){t.todoString=o},deleteTodo:function(t){this.todos=this.todos.filter((function(o){return o!==t}))}}},y=S,C=Object(f["a"])(y,s,d,!1,null,null,null),_=C.exports,x={name:"App",components:{TodoList:_}},E=x,O=(e("034f"),Object(f["a"])(E,i,r,!1,null,null,null)),j=O.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(j)}}).$mount("#app")},"85ec":function(t,o,e){},bc7e:function(t,o,e){"use strict";var n=e("c926"),i=e.n(n);i.a},c926:function(t,o,e){}});
//# sourceMappingURL=app.1c6d1d51.js.map