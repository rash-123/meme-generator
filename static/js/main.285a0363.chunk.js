(this["webpackJsonpmeme-generator"]=this["webpackJsonpmeme-generator"]||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n(4),o=n.n(s),i=(n(14),n(0));var c=function(){return Object(i.jsxs)("header",{children:[Object(i.jsx)("img",{src:"http://www.pngall.com/wp-content/uploads/2016/05/Trollface.png",alt:"Problem?"}),Object(i.jsx)("p",{children:"Meme Generator"})]})},m=n(5),r=n(6),h=n(7),l=n(2),b=n(9),d=n(8),j=function(e){Object(b.a)(n,e);var t=Object(d.a)(n);function n(){var e;return Object(r.a)(this,n),(e=t.call(this)).state={topText:"",bottomText:"",randomImg:"http://i.imgflip.com/1bij.jpg",allMemeImgs:[]},e.handleChange=e.handleChange.bind(Object(l.a)(e)),e.handleSubmit=e.handleSubmit.bind(Object(l.a)(e)),e}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png").then((function(e){return e.json()})).then((function(t){var n=t.data.memes;e.setState({allMemeImgs:n})}))}},{key:"handleChange",value:function(e){var t=e.target,n=t.name,a=t.value;this.setState(Object(m.a)({},n,a))}},{key:"handleSubmit",value:function(e){e.preventDefault();var t=Math.floor(Math.random()*this.state.allMemeImgs.length),n=this.state.allMemeImgs[t].url;this.setState({randomImg:n})}},{key:"render",value:function(){return Object(i.jsxs)("div",{children:[Object(i.jsxs)("form",{className:"meme-form",onSubmit:this.handleSubmit,children:[Object(i.jsx)("input",{type:"text",name:"topText",placeholder:"Top Text",value:this.state.topText,onChange:this.handleChange}),Object(i.jsx)("input",{type:"text",name:"bottomText",placeholder:"Bottom Text",value:this.state.bottomText,onChange:this.handleChange}),Object(i.jsx)("button",{children:"Gen"})]}),Object(i.jsxs)("div",{className:"meme",children:[Object(i.jsx)("img",{src:this.state.randomImg,alt:""}),Object(i.jsx)("h2",{className:"top",children:this.state.topText}),Object(i.jsx)("h2",{className:"bottom",children:this.state.bottomText})]})]})}}]),n}(a.Component);var u=function(){return Object(i.jsxs)("div",{children:[Object(i.jsx)(c,{}),Object(i.jsx)(j,{})]})};o.a.render(Object(i.jsx)(u,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.285a0363.chunk.js.map