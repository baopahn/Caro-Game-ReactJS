(this.webpackJsonp1712289_tuan_01=this.webpackJsonp1712289_tuan_01||[]).push([[0],[,,function(e,t,n){},,,function(e,t,n){e.exports=n(11)},,,,,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(4),l=n.n(c),o=(n(10),n(1)),i=0,u=1,s=-1,m=(n(2),function(e){var t=e.value,n=e.onClick;return e.isHighlight?r.a.createElement("button",{style:{backgroundColor:"green"},className:"square",onClick:function(){return n()}},t):r.a.createElement("button",{className:"square",onClick:function(){return n()}},t)}),f=function(e){for(var t=e.squares,n=e.onClick,a=e.highlight,c=function(e){return r.a.createElement(m,{key:e,value:t[e],onClick:function(){return n(e)},isHighlight:a[e]})},l=[],o=0;o<9;o++)l.push(c(o));return r.a.createElement("div",{className:"board"},l)},b=function(e){var t=e.history,n=e.sortOption,a=e.current,c=e.onClickItem,l=t.slice();l.sort((function(e,t){return-1===e.location||-1===t.location?0:e.location>t.location?1*n:e.location<t.location?-1*n:0}));var o=l.map((function(e,t){var n=e.location,l=e.turn,o=e.step,i=t?"Go to move #".concat(o," - ").concat(n,", location: (").concat(1+~~(n/3),", ").concat(n%3+1,"), player: ").concat(l):"Go to game start";return o!==a?r.a.createElement("li",{key:o},r.a.createElement("button",{onClick:function(){return c(o)}},i)):r.a.createElement("li",{key:o},r.a.createElement("button",{onClick:function(){return c(o)},style:{backgroundColor:"green"}},i))}));return r.a.createElement("ol",null," ",o," ")},E=function(){var e=Object(a.useState)([{squares:Array(9).fill(null),location:-1,turn:"X",step:0}]),t=Object(o.a)(e,2),n=t[0],c=t[1],l=Object(a.useState)(Array(9).fill(!1)),m=Object(o.a)(l,2),E=m[0],v=m[1],g=Object(a.useState)(0),h=Object(o.a)(g,2),k=h[0],y=h[1],O=Object(a.useState)(i),p=Object(o.a)(O,2),C=p[0],d=p[1],N=Object(a.useState)(!0),j=Object(o.a)(N,2),w=j[0],q=j[1],S=Object(a.useState)(null),X=Object(o.a)(S,2),A=X[0],G=X[1],x=Object(a.useState)("Next player: X"),I=Object(o.a)(x,2),D=I[0],_=I[1];return r.a.createElement("div",{className:"game"},r.a.createElement("div",{className:"game-board"},r.a.createElement(f,{onClick:function(e){if(console.log("Current: ".concat(k)),A)alert("Choose new game");else{var t=[],a=(t=k!==n.length-1?n.slice(0,k+1):n.slice())[k].squares.slice();if(a[e])alert("Square ".concat(e," already has a value!!"));else{a[e]=w?"X":"O";var r=function(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],n=!0,a=0;a<t.length;a++){var r=Object(o.a)(t[a],3),c=r[0],l=r[1],i=r[2];if(e[c]&&e[c]===e[l]&&e[c]===e[i])return{winner:e[c],lines:t[a]};n=e[c]&&e[l]&&e[i]&&n}return n}(a),l=Array(9).fill(!1);q(!w),c(t.concat([{squares:a,location:e,turn:w?"X":"O",step:k+1}])),y(t.length),G(r),r?!0!==r?(_("Winner: ".concat(r.winner)),l[r.lines[0]]=!0,l[r.lines[1]]=!0,l[r.lines[2]]=!0):_("Draw"):(_("Next player: ".concat(w?"O":"X")),l[e]=!0),v(l)}}},squares:n[k].squares,highlight:E})),r.a.createElement("div",{className:"game-info"},r.a.createElement("div",{className:"status"},r.a.createElement("div",null,D),r.a.createElement("div",null,r.a.createElement("span",null,"Sort:"),r.a.createElement("button",{style:{backgroundColor:"".concat(["green","white","yellow"][C+1])},onClick:function(){!function(){switch(C){case i:d(u);break;case u:d(s);break;case s:d(i)}}()}},["DECENDING","None","ACENDING"][C+1])),r.a.createElement("br",null),r.a.createElement("div",null,A?r.a.createElement("button",{onClick:function(){return alert("New Game?"),c([{squares:Array(9).fill(null),location:-1,turn:"X",step:0}]),v(Array(9).fill(!1)),q(!0),G(null),y(0),void _("Next player: X")}},"New Game"):"")),r.a.createElement(b,{history:n,sortOption:C,current:k,onClickItem:function(e){var t=Array(9).fill(!1);t[n[e].location]=!0,v(t),y(e),q(e%2===0),_("Next player: ".concat(e%2===0?"X":"O"))}})))},v=function(){return r.a.createElement(E,null)};l.a.render(r.a.createElement(v,null),document.getElementById("root"))}],[[5,1,2]]]);
//# sourceMappingURL=main.3c82c2e5.chunk.js.map