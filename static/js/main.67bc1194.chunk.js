(this.webpackJsonpemployeedirectory=this.webpackJsonpemployeedirectory||[]).push([[0],{43:function(e,t,n){},61:function(e,t,n){},73:function(e,t,n){},74:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n(0),c=n(27),s=n.n(c),i=n(35),l=n(2);var o=function(e){return Object(a.jsx)("div",{className:"row",children:e.children})};var u=function(e){return Object(a.jsx)("div",{className:"col-".concat(e.width," ").concat(e.justify),children:e.children})};n(43);var h=function(e){return Object(a.jsx)(o,{children:Object(a.jsx)(u,{width:12,children:Object(a.jsxs)("div",{className:"header",children:[Object(a.jsx)("h1",{children:" Employee Directory "}),Object(a.jsx)("strong",{children:"Search by name below. Sort by name or D.O.B. by clicking the heading below."}),e.children]})})})};var d=function(e){return Object(a.jsx)("main",{className:"wrapper",children:e.children})},j=n(28),m=n(29),b=n(37),f=n(36),g=n(30),p=n.n(g),x=function(){return p.a.get("https://randomuser.me/api/?results=100&nat=au")};n(61);var O=function(e){return Object(a.jsx)("form",{className:"search",children:Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("br",{}),Object(a.jsx)("input",{value:e.search,onChange:e.handleInputChange,name:"name",type:"text",className:"form-control",placeholder:"Search by name",id:"name_search"})]})})},v=n(31),y=n.n(v),w={rows:{style:{minHeight:"72px"}},headCells:{style:{paddingLeft:"8px",paddingRight:"8px"}},cells:{style:{paddingLeft:"8px",paddingRight:"8px"}}},C=[{name:"Image",cell:function(e){return Object(a.jsx)("img",{src:e.image,alt:e.name})},width:"72px"},{name:"Name",selector:"name",sortable:!0},{name:"Phone",selector:"phone"},{name:"email",cell:function(e){return Object(a.jsx)("a",{href:"mailto: ".concat(e.email),children:e.email})}},{name:"D.O.B.",selector:"dob",cell:function(e){return Object(a.jsx)(a.Fragment,{children:D(e.dob)})},sortable:!0}];function D(e){if(e.length>0){var t=e.substr(8,2),n=e.substr(5,2),a=e.substr(0,4);return"".concat(t,"-").concat(n,"-").concat(a)}return"err"}var N=function(e){return Object(a.jsx)(y.a,{columns:C,data:e.DataTable,customStyles:w,fixedHeader:!0,fixedHeaderScrollHeight:"75vh"})},S=function(e){Object(b.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(j.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={results:[],search:"",err:""},e.origData=[],e.handleInputChange=function(t){if(e.setState({search:t.target.value}),console.log("Changed",t.target.value),""===t.target.value)console.log("null: ",t.target.value),e.setState({results:e.GetElements(e.origData)});else{var n=e.GetElements(e.origData).filter((function(e){return-1!==e.name.toLowerCase().indexOf(t.target.value.toLowerCase())}));e.setState({results:n})}},e}return Object(m.a)(n,[{key:"componentDidMount",value:function(){var e=this;x().then((function(t){e.origData=t.data.results,e.setState({results:e.GetElements(t.data.results)})})).catch((function(e){return console.log(e)}))}},{key:"GetElements",value:function(e){return e.map((function(e,t){return{id:t,image:e.picture.thumbnail,name:e.name.first+" "+e.name.last,phone:e.phone,email:e.email,dob:e.dob.date}}))}},{key:"render",value:function(){return Object(a.jsxs)("div",{children:[Object(a.jsx)(o,{children:Object(a.jsx)(u,{width:12,justify:"align-self-center",children:Object(a.jsx)(O,{handleInputChange:this.handleInputChange,name:this.state.search})})}),Object(a.jsx)(o,{children:Object(a.jsx)(u,{width:12,justify:"align-self-start",children:Object(a.jsx)(N,{DataTable:this.state.results})})})]})}}]),n}(r.Component);var k=function(e){return Object(a.jsx)("div",{className:"container",children:e.children})};var E=function(){return Object(a.jsx)(i.a,{children:Object(a.jsxs)(k,{children:[Object(a.jsx)(h,{}),Object(a.jsx)(d,{children:Object(a.jsx)(l.a,{exact:!0,path:"/",component:S})})]})})};n(73);s.a.render(Object(a.jsx)(E,{}),document.getElementById("root"))}},[[74,1,2]]]);
//# sourceMappingURL=main.67bc1194.chunk.js.map