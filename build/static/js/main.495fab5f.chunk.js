(this["webpackJsonpvoting-app"]=this["webpackJsonpvoting-app"]||[]).push([[0],{102:function(e,t,a){},103:function(e,t,a){},234:function(e,t,a){"use strict";a.r(t);var n=a(1),o=a.n(n),r=a(14),l=a.n(r),c=(a(102),a(32)),i=a(33),s=a(35),u=a(34),m=(a(103),a(53)),d=(a(124),a(125),a(126),a(51)),h=a.n(d),p=a(52),v=a.n(p),E=a(95),b=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={redirect:""},e.onSubmithandler=function(t){t.preventDefault();var a=t.target.name.value,n=t.target.email.value,o=t.target.vote.value;t.target.reset(),h.a.post("http://52.66.237.30:3051/candidate_register",{name:a,email:n,vote:o}).then((function(t){console.log("hello anand",t),t.data.result?(v()("Thank's for voting","","success"),e.getState()):v()("This candidate already voted","","error",{})})).catch((function(e){console.log(e)}))},e.state={dataDoughnut:{labels:["Yes","No"],datasets:[{data:[0,0],backgroundColor:["#46BFBD","#F7464A"],hoverBackgroundColor:["#5AD3D1","#FF5A5E"]}]}},e.getState=function(){h.a.get("http://52.66.237.30:3051/result").then((function(t){e.setState({dataDoughnut:{labels:["Yes","No"],datasets:[{data:[t.data.Yes,t.data.No],backgroundColor:["#46BFBD","#F7464A"],hoverBackgroundColor:["#5AD3D1","#FF5A5E"]}]}})}))},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.getState()}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("br",null),o.a.createElement("div",{className:"OuterContainer"},this.state.redirect,o.a.createElement("div",{className:"InnerContainer"},o.a.createElement("h1",{className:"heading"},"Please Vote"),o.a.createElement("form",{onSubmit:this.onSubmithandler},o.a.createElement("div",null,o.a.createElement("input",{placeholder:"Candidate Name",name:"name",className:"candidateName",type:"text",required:!0})),o.a.createElement("div",null,o.a.createElement("input",{type:"email",name:"email",id:"email",placeholder:"Candidate Email",className:"candidateName mt-20",required:!0})),o.a.createElement("br",null),o.a.createElement(m.c,{className:"mdbcard"},"Should lockdown be open?",o.a.createElement("select",{className:"browser-default custom-select",name:"vote",required:!0},o.a.createElement("option",{value:"",disabled:!0,selected:!0},"Select your option"),o.a.createElement("option",{value:"Yes"},"Yes"),o.a.createElement("option",{value:"No"},"No"))),o.a.createElement("button",{className:"button mt-20",type:"submit"},"Submit")),o.a.createElement("br",null),o.a.createElement(m.c,null,o.a.createElement("h3",{className:"mt-5"},"Voting chart"),o.a.createElement(E.a,{data:this.state.dataDoughnut,options:{responsive:!0}})))))}}]),a}(o.a.Component),g=a(19),f=a(5),N=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(g.a,null,o.a.createElement(f.d,null,o.a.createElement(f.b,{path:"/",component:b}),o.a.createElement(f.a,{to:"/"}))),o.a.createElement("br",null))}}]),a}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},97:function(e,t,a){e.exports=a(234)}},[[97,1,2]]]);
//# sourceMappingURL=main.495fab5f.chunk.js.map