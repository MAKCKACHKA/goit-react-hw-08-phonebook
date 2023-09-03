"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[656],{6656:function(n,e,t){t.r(e),t.d(e,{default:function(){return S}});var i,o,r,a,s,l,p,x,d,f,c,u,h,g=t(168),m=t(5867),b=m.ZP.h1(i||(i=(0,g.Z)(["\n  font-family: georgia, serif;\n  font-size: 38px;\n  font-weight: 500;\n  text-transform: uppercase;\n  line-height: 1;\n  margin-top: 20px;\n  margin-left: 15px;\n"]))),v=m.ZP.h2(o||(o=(0,g.Z)(["\n  font-family: georgia, serif;\n  font-size: 32px;\n  font-weight: 500;\n  text-transform: uppercase;\n  line-height: 1;\n  margin-top: 30px;\n  margin-left: 15px;\n  margin-bottom: 30px;\n"]))),w=m.ZP.form(r||(r=(0,g.Z)(["\n  font-family: georgia, serif;\n  font-size: 20px;\n  font-weight: 700;\n  line-height: 150%;\n  max-width: 450px;\n  margin-left: 20px;\n  padding: 20px;\n  border: 2px solid #757575;\n  border-radius: 5px;\n\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 20px;\n"]))),j=m.ZP.div(a||(a=(0,g.Z)(["\n  position: relative;\n  margin-bottom: 25px;\n"]))),Z=m.ZP.label(s||(s=(0,g.Z)(["\n  color: #999;\n  font-size: 20px;\n  font-weight: normal;\n  position: absolute;\n  pointer-events: none;\n  left: 5px;\n  top: 10px;\n  transition: 0.2s ease all;\n  -moz-transition: 0.2s ease all;\n  -webkit-transition: 0.2s ease all;\n"]))),y=m.ZP.input(l||(l=(0,g.Z)(["\n  font-family: georgia, serif;\n  font-size: 20px;\n  font-weight: normal;\n  line-height: 150%;\n\n  padding: 10px 10px 10px 5px;\n  display: block;\n  width: 300px;\n  border: none;\n  border-bottom: 1px solid #757575;\n  &:focus {\n    outline: none;\n  }\n  &:focus ~ label,\n  &:valid ~ label {\n    top: -20px;\n    font-size: 16px;\n  }\n"]))),k=m.ZP.button(p||(p=(0,g.Z)(["\n  appearance: none;\n  background-color: transparent;\n  border: 1px solid #1a1a1a;\n  border-radius: 15px;\n  box-sizing: border-box;\n  cursor: pointer;\n  align-self: end;\n\n  font-family: georgia, serif;\n  font-size: 16px;\n  font-weight: 600;\n  line-height: 150%;\n  padding: 0px;\n  max-width: 200px;\n\n  outline: none;\n  padding: 6px 8px;\n  text-align: center;\n  transition: all 300ms cubic-bezier(0.23, 1, 0.32, 1);\n  user-select: none;\n  -webkit-user-select: none;\n  touch-action: manipulation;\n  will-change: transform;\n  text-transform: uppercase;\n\n  &:disabled {\n    pointer-events: none;\n  }\n\n  &:hover {\n    color: #fff;\n    background-color: #1a1a1a;\n    box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;\n  }\n\n  &:active {\n    box-shadow: none;\n  }\n"]))),z=m.ZP.label(x||(x=(0,g.Z)(["\n  font-family: georgia, serif;\n  font-size: 24px;\n  font-weight: 500;\n  line-height: 150%;\n  margin-left: 25px;\n  font-style: italic;\n"]))),P=m.ZP.input(d||(d=(0,g.Z)(["\n  font-size: 20px;\n  font-family: georgia, serif;\n  font-weight: normal;\n  line-height: 150%;\n  margin-left: 15px;\n  width: 210px;\n  border: none;\n  border-bottom: 1px solid #1a1a1a;\n  &:focus {\n    outline: none;\n  }\n"]))),C=m.ZP.ul(f||(f=(0,g.Z)(["\n  max-width: 470px;\n"]))),A=m.ZP.li(c||(c=(0,g.Z)(["\n  margin-bottom: 10px;\n  list-style: none;\n  font-family: georgia, serif;\n  font-size: 20px;\n  line-height: 125%;\n  position: relative;\n"]))),F=(0,m.ZP)(k)(u||(u=(0,g.Z)(["\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 150%;\n  max-width: 200px;\n  outline: none;\n  padding: 2px 6px;\n  position: absolute;\n  right: 0;\n  top: 50%;\n  transform: translateY(-48%);\n"]))),I=m.ZP.p(h||(h=(0,g.Z)(["\n  max-width: 400px;\n  word-wrap: break-word;\n"]))),D=t(1413),L=t(9434),_=t(1640),q=t(6988),N=t(3634),B=t(184),E=function(){var n=(0,L.v9)(q.Af),e=(0,L.v9)(q.lj),t=(0,L.v9)(q.EB),i=(0,L.I0)(),o=function(n){return i((0,_.eu)(n))},r=function(n){return i((0,_.cj)(n))},a=function(n){var e=n.target;"name"===e.name?o(e.value):"number"===e.name&&r(e.value)};return(0,B.jsxs)(w,{onSubmit:function(a){a.preventDefault(),n.some((function(n){return n.name===e}))?alert("".concat(e," is already in contacts!")):(!function(n){var e=(0,D.Z)({},n);i((0,N.uK)(e))}({name:e,number:t}),o(""),r(""))},children:[(0,B.jsxs)(j,{children:[(0,B.jsx)(y,{type:"text",name:"name",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,onChange:a,value:e}),(0,B.jsx)(Z,{children:"Name"})]}),(0,B.jsxs)(j,{children:[(0,B.jsx)(y,{type:"tel",name:"number",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,onChange:a,value:t}),(0,B.jsx)(Z,{children:"Number "})]}),(0,B.jsx)(k,{type:"submit",children:"Add contact"})]})},K=t(2228),G=function(){var n=(0,L.v9)(q.AD),e=(0,L.I0)();return(0,B.jsx)(B.Fragment,{children:(0,B.jsxs)(z,{children:["Find contacts by name:",(0,B.jsx)(P,{type:"text",name:"filter",value:n,onChange:function(n){var t=n.target;e((0,K.a8)(t.value))}})]})})},J=t(3982),M=function(){var n=(0,L.v9)(q.Af),e=(0,L.v9)(q.AD),t=(0,L.v9)(q.xU),i=(0,L.v9)(q.zh),o=(0,J.a)().isLoggedIn,r=(0,L.I0)(),a=n.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())}));return(0,B.jsxs)(C,{children:[t&&!i&&(0,B.jsx)(v,{children:"Request in progress..."}),i?(0,B.jsx)(v,{children:i}):o?a.map((function(e){return(0,B.jsxs)(A,{"data-key":e.id,children:[(0,B.jsxs)(I,{children:[e.name,": ",e.number+"  "]}),(0,B.jsx)(F,{type:"button",onClick:function(){return t=e.id,r((0,N.GK)(t)),void r((0,K.nE)(n.filter((function(n){return n.id!==t}))));var t},children:"Delete"})]},e.id)})):(0,B.jsx)(v,{children:"Please, sign up or login"})]})},R=t(7689),S=function(){return(0,J.a)().isLoggedIn?(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(b,{children:"Phonebook"}),(0,B.jsx)(E,{}),(0,B.jsx)(v,{children:"Contacts"}),(0,B.jsx)(G,{}),(0,B.jsx)(M,{})]}):(0,B.jsx)(B.Fragment,{children:(0,B.jsx)(R.Fg,{to:"/goit-react-hw-08-phonebook"})})}}}]);
//# sourceMappingURL=656.6bf7906c.chunk.js.map