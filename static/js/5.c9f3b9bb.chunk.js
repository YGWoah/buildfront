(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{465:function(e,t,n){e.exports=n.p+"static/media/UpVotedBlack.4470e6a8.svg"},466:function(e,t,n){e.exports=n.p+"static/media/UpVotedBlue.64b95137.svg"},467:function(e,t,n){e.exports=n.p+"static/media/reply.e9f41363.svg"},469:function(e,t,n){"use strict";(function(e){var r=n(2),a=n.n(r),c=n(8),o=n(3),s=n(1),l=n.n(s),u=n(0),i=n.n(u),p=(n(467),n(465)),f=n.n(p),m=n(466),d=n.n(m),v=n(11),b=n(470);t.a=function(t){l.a.defaults.withCredentials=!0;var n=Object(u.useRef)(null),r=Object(u.useRef)(null),s=Object(u.useState)(),p=Object(o.a)(s,2),m=p[0],E=p[1],g=Object(u.useState)(t.pic),h=Object(o.a)(g,2),y=h[0],O=h[1],j=function(){var n=Object(c.a)(a.a.mark(function n(){return a.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,l.a.post("/post/getposterimageprofile",{postID:t.postID},{responseType:"arraybuffer"}).then(function(t){var n=e.from(t.data,"binary").toString("base64");O("data:image/png;base64,"+n)}).catch(function(e){console.log(e)});case 2:case"end":return n.stop()}},n)}));return function(){return n.apply(this,arguments)}}(),w=function(){var n=Object(c.a)(a.a.mark(function n(){return a.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,l.a.post("/post/getpostimage",{postID:t.postID},{responseType:"arraybuffer"}).then(function(t){var n=e.from(t.data,"binary").toString("base64");E("data:image/png;base64,"+n)});case 2:case"end":return n.stop()}},n)}));return function(){return n.apply(this,arguments)}}(),I=Object(u.useRef)(),D=new IntersectionObserver(function(e){var t,n=Object(o.a)(e,1)[0];(t=n)&&t.isIntersecting&&(j(),w(),D.unobserve(I.current))},{root:null,threshold:1});return Object(u.useEffect)(function(){D.observe(I.current)},[]),i.a.createElement("div",{className:"post",ref:I},i.a.createElement("div",null,i.a.createElement("div",null,i.a.createElement(v.b,{to:"/profile/".concat(t.name)},i.a.createElement("div",null,i.a.createElement("img",{src:y,alt:"Profile"})),i.a.createElement("div",null,i.a.createElement("h5",null,t.name),i.a.createElement("p",null,t.role?"Student":"Teacher")))),t.isMyProfile?i.a.createElement(b.a,{postRef:I,postID:t.postID}):i.a.createElement("div",{onClick:function(){"Up voted"!=r.current.textContent?(n.current.src=d.a,r.current.textContent="Up voted",r.current.style.color="#1E53CF",console.log(r.current)):(n.current.src=f.a,r.current.textContent="Up vote",r.current.style.color="#000000",console.log(r.current))}},i.a.createElement("img",{src:f.a,alt:"",ref:n}),i.a.createElement("p",{ref:r},"Up vote"))),i.a.createElement("div",null,i.a.createElement("p",null,t.content)),i.a.createElement("div",null,i.a.createElement("img",{src:m,onError:function(e){return e.target.style.display="none"}})),i.a.createElement("div",null,i.a.createElement(v.b,{to:"/post/".concat(t.postID)},i.a.createElement("p",null,"See more"))))}}).call(this,n(28).Buffer)},470:function(e,t,n){"use strict";var r=n(0),a=n.n(r),c=n(1),o=n.n(c);t.a=function(e){var t=Object(r.useRef)();return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{onClick:function(){t.current.style.display="flex"}},a.a.createElement("p",null,"Delete Post")),a.a.createElement("section",{className:"delete-warning",ref:t},a.a.createElement("p",null,"Are you sure you want to delete the post ?"),a.a.createElement("div",null,a.a.createElement("button",{onClick:function(){o.a.post("/post/deletepost",{postID:e.postID}).then(function(t){e.postRef.current.style.display="none"})}},"Delete"),a.a.createElement("button",{onClick:function(){t.current.style.display="none"}},"Cancel"))))}},473:function(e,t,n){},496:function(e,t,n){},501:function(e,t,n){"use strict";n.r(t);var r=n(62),a=n(2),c=n.n(a),o=n(8),s=n(3),l=n(0),u=n.n(l),i=n(469),p=(n(496),n(473),n(1)),f=n.n(p),m=n(123),d=n(231),v=n.n(d);n(32),n(13);t.default=function(){f.a.defaults.withCredentials=!0;var e=Object(l.useState)([]),t=Object(s.a)(e,2),n=t[0],a=t[1],p=Object(l.useRef)(0),d=function(){var e=Object(o.a)(c.a.mark(function e(){return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get("/post/getcontactposts").then(function(e){a(e.data.result),p.current=e.data.result[2].postID}).catch(function(e){console.log(e)});case 2:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),b=Object(l.useRef)(),E=function(e){e&&e.isIntersecting&&(f.a.get("/post/getmoreposts",{params:{postID:p.current}}).then(function(e){console.log(n);var t=e.data.result;p.current=t[t.length-1].postID,a(function(e){return[].concat(Object(r.a)(e),Object(r.a)(t))})}).catch(function(e){console.log(e)}),console.log("kfojf"))},g=new IntersectionObserver(function(e){var t=Object(s.a)(e,1)[0];E(t)},{root:null,threshold:.1});return Object(l.useEffect)(function(){d(),setTimeout(function(){try{g.observe(b.current)}catch(e){}},1e3)},[]),u.a.createElement("div",{className:"home"},u.a.createElement("div",null,n.length>0?n.map(function(e){return u.a.createElement(i.a,{name:e.userName,content:e.content,role:"Student",postID:e.postID,pic:v.a})}):""),u.a.createElement(m.a,{ref:b}),u.a.createElement("div",{ref:b}))}}}]);
//# sourceMappingURL=5.c9f3b9bb.chunk.js.map