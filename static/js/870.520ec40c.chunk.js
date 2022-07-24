"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[870],{7398:function(n,i,r){r.d(i,{_:function(){return o}});var e,t=r(168),o=r(2499).Z.div(e||(e=(0,t.Z)(["\n    padding: 10px;\n"])))},2870:function(n,i,r){r.r(i),r.d(i,{default:function(){return E}});var e,t,o,s,c,d,l,a,x,p=r(885),u=r(6871),h=r(7398),m=r(168),f=r(2499),j=f.Z.div(e||(e=(0,m.Z)(["\n    display: flex;\n    flex-direction: column;\n"]))),b=r(7101),v=r(2791),g=f.Z.div(t||(t=(0,m.Z)(["\n    display: flex;\n    margin-bottom: 10px;\n    margin-top: 10px;\n    padding-bottom: 10px;\n    \n    border-bottom: 1px solid black;\n"]))),Z=f.Z.div(o||(o=(0,m.Z)(["\n  margin-left: 20px;\n"]))),k=f.Z.h2(s||(s=(0,m.Z)(["\n  margin-bottom: 20px;\n"]))),_=f.Z.p(c||(c=(0,m.Z)(["\n  margin-bottom: 20px;\n"]))),w=f.Z.p(d||(d=(0,m.Z)(["\n    margin-top: 20px;\n    margin-bottom: 20px;\n"]))),C=f.Z.p(l||(l=(0,m.Z)(["\n    display: flex;\n    margin-top: 20px;\n"]))),y=r(184),U=function(n){var i=n.movie,r=i.poster_path,e=i.original_title,t=i.release_date,o=i.vote_average,s=i.overview,c=i.genres,d=i&&"https://image.tmdb.org/t/p/w300".concat(r);return(0,y.jsxs)(g,{children:[(0,y.jsx)("img",{src:d,alt:""}),(0,y.jsxs)(Z,{children:[(0,y.jsxs)(k,{children:[e," (",t.slice(0,4),")"]}),(0,y.jsxs)(_,{children:["User score: ",Math.trunc(10*o),"%"]}),(0,y.jsx)("h3",{children:"Overview"}),(0,y.jsx)(w,{children:s}),(0,y.jsx)("h4",{children:"Genres"}),(0,y.jsx)(C,{children:c.map((function(n){return n.name})).join(", ")})]})]})},z=f.Z.button(a||(a=(0,m.Z)(["\n    border: 1px solid black;\n    display: block;\n    width: 130px;\n    border-radius: 5px;\n    font-size: 20px;\n    padding: 5px;\n    background-color: #fff;\n\n    :hover {  \n        background-color: azure;\n    }\n"]))),G=function(n){var i=n.onClick;return(0,y.jsx)(z,{type:"button",onClick:i,children:"Go back"})},I=r(501),M=f.Z.div(x||(x=(0,m.Z)(["\n    margin-bottom: 10px;\n    padding-bottom: 10px;\n\n    border-bottom: 1px solid black;\n"]))),O=function(){return(0,y.jsxs)(M,{children:[(0,y.jsx)("h4",{children:"Iditional information"}),(0,y.jsxs)("ul",{children:[(0,y.jsx)("li",{children:(0,y.jsx)(I.rU,{to:"cast",children:"Cast"})}),(0,y.jsx)("li",{children:(0,y.jsx)(I.rU,{to:"reviews",children:"Reviews"})})]})]})},E=function(){var n=(0,u.UO)().movieId,i=(0,u.s0)(),r=(0,v.useState)(null),e=(0,p.Z)(r,2),t=e[0],o=e[1];return(0,v.useEffect)((function(){(0,b.FV)(n).then((function(n){return o(n)}))}),[n]),(0,y.jsx)(h._,{children:(0,y.jsxs)(j,{children:[(0,y.jsx)(G,{onClick:function(){return i(-1)}}),t?(0,y.jsx)(U,{movie:t}):(0,y.jsx)("h2",{children:"Movie not found"}),t&&(0,y.jsx)(O,{}),(0,y.jsx)(u.j3,{})]})})}}}]);
//# sourceMappingURL=870.520ec40c.chunk.js.map