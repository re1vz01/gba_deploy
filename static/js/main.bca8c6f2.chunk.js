(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{23:function(e,a,t){},38:function(e,a,t){e.exports=t(78)},43:function(e,a,t){},45:function(e,a,t){},76:function(e,a,t){},78:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(35),c=t.n(r),s=(t(43),t(45),t(19)),o=t(1),m=t(3),i=t(4),d=t(7),u=t.n(d),p=new(function(){function e(){Object(m.a)(this,e)}return Object(i.a)(e,[{key:"saveUser",value:function(e){return u.a.post("http://localhost:8111/api/user/save",e)}},{key:"login",value:function(e){return u.a.post("http://localhost:8111/api/login",e)}},{key:"logout",value:function(){sessionStorage.removeItem("access_token"),sessionStorage.setItem("isLogin",!1),window.location.href="/login"}}]),e}());function f(){var e=Object(o.g)();return l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark fixed-top"},l.a.createElement("div",{className:"container-fluid"},l.a.createElement("span",{className:"navbar-brand fw-bolder hover-overlay h-pointer",onClick:function(){e.push("/welcome")}},"Grocery Bill Application"),l.a.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarText","aria-controls":"navbarText","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarText"},l.a.createElement("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0"},l.a.createElement("li",{className:"nav-item"},l.a.createElement("span",{className:"nav-link hover-overlay h-pointer",onClick:function(){e.push("/items")}},"true"===sessionStorage.getItem("isLogin")?l.a.createElement("span",null,"Items"):l.a.createElement(l.a.Fragment,null))),l.a.createElement("li",{className:"nav-item"},l.a.createElement("span",{className:"nav-link hover-overlay h-pointer",onClick:function(){e.push("/clerk")}},"true"===sessionStorage.getItem("isLogin")?l.a.createElement("span",null,"Clerk"):l.a.createElement(l.a.Fragment,null))),l.a.createElement("li",null,l.a.createElement("span",{className:"nav-link hover-overlay h-pointer",onClick:function(){e.push("/admin")}},"true"===sessionStorage.getItem("isLogin")?l.a.createElement("span",null,"Admin"):l.a.createElement(l.a.Fragment,null)))),l.a.createElement("span",{className:"navbar-text"},"true"===sessionStorage.getItem("isLogin")?l.a.createElement("span",{className:"fw-bolder h-pointer",style:{color:"red"},onClick:function(){p.logout()}},"Logout"):l.a.createElement(l.a.Fragment,null," ",l.a.createElement("span",{className:"h-pointer",onClick:function(){e.push("/login")}},"Login | "),l.a.createElement("span",{className:"h-pointer",onClick:function(){e.push("/signup")}},"Sign up"))))))}var b=t(10),E=t(9),g=t(11),h=t(2),N="http://localhost:8070/items",v=new(function(){function e(){Object(m.a)(this,e)}return Object(i.a)(e,[{key:"getItems",value:function(){return u.a.get(N)}},{key:"createItem",value:function(e){return u.a.post(N+"/additem",e)}},{key:"getItemById",value:function(e){return u.a.get(N+"/find/"+e)}},{key:"updateItem",value:function(e,a){return u.a.put(N+"/update/"+a,e)}},{key:"deleteItem",value:function(e){return u.a.delete(N+"/delete/"+e)}},{key:"findItemByName",value:function(e){return u.a.get(N+"/search/"+e)}}]),e}()),w=t(16),k=function(e){function a(e){var t;return Object(m.a)(this,a),(t=Object(b.a)(this,Object(E.a)(a).call(this,e))).state={items:[]},t.addItem=t.addItem.bind(Object(h.a)(Object(h.a)(t))),t.editItem=t.editItem.bind(Object(h.a)(Object(h.a)(t))),t.deleteItem=t.deleteItem.bind(Object(h.a)(Object(h.a)(t))),t}return Object(g.a)(a,e),Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;v.getItems().then(function(a){e.setState({items:a.data})})}},{key:"editItem",value:function(e){this.props.history.push("/update-item/".concat(e))}},{key:"addItem",value:function(){this.props.history.push("/add-items")}},{key:"deleteItem",value:function(e){var a=this;v.deleteItem(e).then(function(t){a.setState({items:a.state.items.filter(function(a){return a.id!==e})})})}},{key:"render",value:function(){var e=this,a=Object(w.a)(sessionStorage.getItem("access_token"));return"false"===sessionStorage.getItem("isLogin")&&this.props.history.push("/403"),l.a.createElement("div",{className:"mlr-5"},l.a.createElement("div",{className:"row-2"},l.a.createElement("h2",{className:"text-center mt-5"},"Item List"),l.a.createElement("div",{className:"text-start"},"ROLE_ADMIN"===a.roles[0]&&l.a.createElement("button",{className:"btn btn-primary",onClick:this.addItem},"Add Item")),l.a.createElement("table",{className:"table table-striped table-bordered"},l.a.createElement("thead",null,l.a.createElement("tr",{className:"fw-bolder"},l.a.createElement("td",null,"ID"),l.a.createElement("td",null,"NAME"),l.a.createElement("td",null,"PRICE"),l.a.createElement("td",null,"DISCOUNT PERCENTAGE"),"ROLE_ADMIN"===a.roles[0]&&l.a.createElement("td",null,"ACTIONS"))),l.a.createElement("tbody",{style:{overflowY:"scroll"}},this.state.items.map(function(t){return l.a.createElement("tr",{key:t.id},l.a.createElement("td",null,t.id),l.a.createElement("td",null,t.name," "),l.a.createElement("td",null,t.price," "),l.a.createElement("td",null,100*t.discountPercentage+"%"," "),"ROLE_ADMIN"===a.roles[0]&&l.a.createElement("td",null,l.a.createElement("button",{onClick:function(){return e.editItem(t.id)},className:"btn btn-info"},"Update"),"\xa0",l.a.createElement("button",{onClick:function(){return e.deleteItem(t.id)},className:"btn btn-danger"},"Delete")))})))))}}]),a}(l.a.Component),y=t(15),O=t(17),j=t(6);function C(){var e=Object(o.g)(),a=Object(n.useState)({name:"",price:"",discount:"",discountPercentage:""}),t=Object(j.a)(a,2),r=t[0],c=t[1],s=Object(n.useState)({}),m=Object(j.a)(s,2),i=m[0],d=m[1],u=Object(n.useState)(!1),p=Object(j.a)(u,2),f=p[0],b=p[1],E=function(e){var a=e.target,t=a.name,n=a.value;c(Object(O.a)({},r,Object(y.a)({},t,n)))};Object(n.useEffect)(function(){(console.log(i),"false"===r.discount)&&(document.getElementById("dp").value="0",r.discountPercentage="0");if(0===Object.keys(i).length&&f){var a={name:r.name,price:r.price,discount:r.discount,discountPercentage:r.discountPercentage};v.createItem(a).then(function(a){e.push("/items"),console.log(a.data)})}});var g=function(e){var a={};return e.name?e.name.length<=2&&(a.name="Item name must be atleast 3 characters!"):a.name="Item name is required!",e.price||(a.price="Price is required!"),void 0===!e.discount&&(a.discount="Discount is required!"),e.discountPercentage||(a.discountPercentage="Discount Percentage is required!"),a};return l.a.createElement("div",{className:"bg-info"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-lg-10 col-xl-9 mx-auto"},l.a.createElement("div",{className:"card flex-row my-5 border-0 shadow rounded-3 overflow-hidden"},l.a.createElement("div",{className:"card-img-left d-none d-md-flex"}),l.a.createElement("div",{className:"card-body p-4 p-sm-5"},l.a.createElement("h5",{className:"card-title text-center mb-5 fw-bold fs-5"},"Add Item"),l.a.createElement("form",null,l.a.createElement("div",{className:"form-floating mb-3"},l.a.createElement("input",{type:"text",name:"name",className:"form-control",placeholder:"Item Name",value:r.name,onChange:E}),l.a.createElement("label",null,"Item Name"),l.a.createElement("p",{className:"fw-bolder",style:{color:"red"}},i.name)),l.a.createElement("div",{className:"form-floating mb-3"},l.a.createElement("input",{type:"text",name:"price",className:"form-control",placeholder:"Price",value:r.price,onChange:E}),l.a.createElement("label",null,"Price"),l.a.createElement("p",{className:"fw-bolder",style:{color:"red"}},i.price)),l.a.createElement("div",{className:"form-floating mb-3"},l.a.createElement("select",{className:"form-control",name:"discount",value:r.discount,onChange:E},l.a.createElement("option",{value:!0},"Discounted"),l.a.createElement("option",{value:!1},"No Discount")),l.a.createElement("p",{className:"fw-bolder",style:{color:"red"}},i.discount)),l.a.createElement("div",{className:"form-floating mb-3"},l.a.createElement("input",{id:"dp",type:"text",name:"discountPercentage",className:"form-control",placeholder:"Discount Percentage",value:r.discountPercentage,onChange:E,disabled:"false"===r.discount?"true":""}),l.a.createElement("label",null,"Discount Percentage"),l.a.createElement("p",{className:"fw-bolder",style:{color:"red"}},i.discountPercentage)),l.a.createElement("div",{className:"d-grid mb-2"},l.a.createElement("button",{className:"btn btn-lg btn-primary btn-login text-uppercase",type:"submit",onClick:function(e){e.preventDefault(),d(g(r)),b(!0)}},"Add"),"\xa0",l.a.createElement("button",{className:"btn btn-lg btn-danger btn-login text-uppercase",type:"submit",onClick:function(){e.push("/items")}},"Cancel"))))))))}function P(){var e=Object(o.g)(),a=Object(o.h)(),t=Object(n.useState)({}),r=Object(j.a)(t,2),c=r[0],s=r[1],m=Object(n.useState)(!1),i=Object(j.a)(m,2),d=i[0],u=i[1],p=Object(n.useState)({id:"",name:"",price:"",discount:"",discountPercentage:""}),f=Object(j.a)(p,2),b=f[0],E=f[1],g=function(e){var a=e.target,t=a.name,n=a.value;E(Object(O.a)({},b,Object(y.a)({},t,n)))},h=function(e){var a={};return e.name||(a.name="Item Name is required!"),e.price||(a.price="Price is required!"),e.discount||(a.discount="Discount is required!"),e.discountPercentage||(a.discountPercentage="Discount Percentage is required!"),a};return Object(n.useEffect)(function(){v.getItemById(a.id).then(function(e){E(e.data)})},[a]),Object(n.useEffect)(function(){if(console.log(c),0===Object.keys(c).length&&d){var t={id:b.id,name:b.name,price:b.price,discount:b.discount,discountPercentage:b.discountPercentage};v.updateItem(t,a.id).then(function(a){e.push("/items"),console.log(a.data)})}}),l.a.createElement("div",{className:"mt-5"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"card col-md-6 offset-md-3 bg-light bg-gradient"},l.a.createElement("h3",{className:"text-center pt-4"},"Edit Item"),l.a.createElement("div",{className:"card-body"},l.a.createElement("form",{className:"text-start"},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{className:"pt-1"},"Item Name: "),l.a.createElement("input",{placeholder:"Name",name:"name",className:"form-control",value:b.name,onChange:g,required:!0}),l.a.createElement("p",{className:"fw-bolder",style:{color:"red"}},c.name),l.a.createElement("label",{className:"pt-3"},"Item Price: "),l.a.createElement("input",{placeholder:"Price",name:"price",className:"form-control",value:b.price,onChange:g,required:!0}),l.a.createElement("p",{className:"fw-bolder",style:{color:"red"}},c.price),l.a.createElement("label",{className:"pt-3"},"Item Discount: "),l.a.createElement("input",{placeholder:"Discount",name:"discount",className:"form-control",value:b.discount,onChange:g,required:!0}),l.a.createElement("p",{className:"fw-bolder",style:{color:"red"}},c.discount),l.a.createElement("label",{className:"pt-3"},"Item Discount Percent: "),l.a.createElement("input",{placeholder:"Discount Percent",name:"discountPercentage",className:"form-control",value:b.discountPercentage,onChange:g,required:!0}),l.a.createElement("p",{className:"fw-bolder",style:{color:"red"}},c.discountPercentage)),l.a.createElement("div",{className:"pt-3 text-center"},l.a.createElement("button",{className:"btn btn-success",onClick:function(e){e.preventDefault(),s(h(b)),u(!0)}},"Update"),"\xa0",l.a.createElement("button",{className:"btn btn-danger",onClick:function(){e.push("/items")}},"Cancel"))))))))}var x=function(e){function a(e){var t;return Object(m.a)(this,a),(t=Object(b.a)(this,Object(E.a)(a).call(this,e))).isLogout=function(){if(sessionStorage.getItem("isLogin")&&"false"===sessionStorage.getItem("isLogin"))return l.a.createElement("div",{className:"fw-bolder alert alert-success"},"You have been logged out")},t.loginClicked=function(){var e=new URLSearchParams;e.append("username",t.state.username),e.append("password",t.state.password),p.login(e).then(function(e){200===e.status&&(sessionStorage.setItem("access_token",JSON.stringify(e.data.Access_Token)),sessionStorage.setItem("isLogin",!0),t.props.history.push("/welcome"),window.location.reload(),console.log(e))}).catch(function(e){console.log(e.data),sessionStorage.clear(),t.setState({hasLoginFailed:!0})}),e.delete("username"),e.delete("password")},t.signup=function(){t.props.history.push("/signup")},t.state={username:"",password:"",hasLoginFailed:!1},t.handleChange=t.handleChange.bind(Object(h.a)(Object(h.a)(t))),t.loginClicked=t.loginClicked.bind(Object(h.a)(Object(h.a)(t))),t}return Object(g.a)(a,e),Object(i.a)(a,[{key:"handleChange",value:function(e){this.setState(Object(y.a)({},e.target.name,e.target.value))}},{key:"render",value:function(){return l.a.createElement("div",{className:"mt-3"},l.a.createElement("section",{className:"vh-100 gradient-custom"},l.a.createElement("div",{className:"container py-5 h-100"},l.a.createElement("div",{className:"row d-flex justify-content-center align-items-center h-100"},l.a.createElement("div",{className:"col-12 col-md-8 col-lg-6 col-xl-5"},l.a.createElement("div",{className:"card bg-dark text-white",style:{borderRadius:"1rem"}},l.a.createElement("div",{className:"card-body p-5 text-center"},l.a.createElement("div",{className:"mb-md-5 mt-md-4 pb-5"},l.a.createElement("h2",{className:"fw-bold mb-2 text-uppercase"},"Login"),this.isLogout(),l.a.createElement("div",{className:"form-outline form-white mb-4"},l.a.createElement("input",{type:"email",id:"typeEmailX",className:"form-control form-control-lg mt-4",name:"username",value:this.state.username,onChange:this.handleChange}),l.a.createElement("label",{className:"form-label"},"Username")),l.a.createElement("div",{className:"form-outline form-white mb-4"},l.a.createElement("input",{type:"password",id:"typePasswordX",className:"form-control form-control-lg",name:"password",value:this.state.password,onChange:this.handleChange}),l.a.createElement("label",{className:"form-label"},"Password")),this.state.hasLoginFailed&&l.a.createElement("div",{className:"alert alert-warning"},"Invalid Credentials"),l.a.createElement("p",{className:"small mb-5 pb-lg-2"},l.a.createElement("a",{className:"text-white-50",href:"#!"},"Forgot password?")),l.a.createElement("button",{className:"btn btn-outline-light btn-lg px-5",type:"submit",onClick:this.loginClicked},"Login")),l.a.createElement("div",null,l.a.createElement("p",{className:"mb-0"},"Don't have an account?"," ",l.a.createElement("span",{onClick:this.signup,className:"text-white-50 fw-bold h-pointer"},"Sign Up"))))))))))}}]),a}(n.Component),I=function(e){function a(){return Object(m.a)(this,a),Object(b.a)(this,Object(E.a)(a).apply(this,arguments))}return Object(g.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=Object(w.a)(sessionStorage.getItem("access_token"));return console.log(e),v.findItemByName("asdasdasd").then(function(e){console.log(e.data.name)}),l.a.createElement("div",{className:"container-fluid mlr-5 bg-light mt-5"},l.a.createElement("h1",null,"Welcome to Grocery Bill Application"),l.a.createElement("p",{className:"mt-3"},"Lorem ipsum dolor sit amet consectetur adipisicing elit. Error fugiat voluptate reiciendis. Repudiandae, quaerat cum maiores totam id quod fuga tenetur doloremque facilis commodi culpa deserunt expedita. Dolorem quam eos quibusdam obcaecati earum est similique illo ratione placeat asperiores, natus autem nostrum, qui quod iure deserunt. Enim atque modi dolorem."))}}]),a}(n.Component),S="http://localhost:8071/clerk",D=new(function(){function e(){Object(m.a)(this,e)}return Object(i.a)(e,[{key:"getClerk",value:function(){return u.a.get(S)}},{key:"addClerk",value:function(e){return u.a.post(S+"/addclerk",e)}},{key:"getClerkById",value:function(e){return u.a.get(S+"/find/"+e)}},{key:"editClerk",value:function(e,a){return u.a.put(S+"/update/"+a,e)}},{key:"deleteClerk",value:function(e){return u.a.delete(S+"/delete/"+e)}}]),e}()),q=function(e){function a(e){var t;return Object(m.a)(this,a),(t=Object(b.a)(this,Object(E.a)(a).call(this,e))).state={clerks:[]},t.addClerk=t.addClerk.bind(Object(h.a)(Object(h.a)(t))),t.editClerk=t.editClerk.bind(Object(h.a)(Object(h.a)(t))),t.deleteClerk=t.deleteClerk.bind(Object(h.a)(Object(h.a)(t))),t}return Object(g.a)(a,e),Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;D.getClerk().then(function(a){e.setState({clerks:a.data})})}},{key:"editClerk",value:function(e){this.props.history.push("/update-clerk/".concat(e))}},{key:"addClerk",value:function(){this.props.history.push("/add-clerk")}},{key:"deleteClerk",value:function(e){var a=this;D.deleteClerk(e).then(function(t){a.setState({clerks:a.state.clerks.filter(function(a){return a.id!==e})})})}},{key:"render",value:function(){var e=this,a=Object(w.a)(sessionStorage.getItem("access_token"));return l.a.createElement("div",{className:"mlr-5"},l.a.createElement("div",{className:"row-2"},l.a.createElement("h2",{className:"text-center mt-5"},"List of Clerk"),l.a.createElement("div",{className:"text-start"},"ROLE_ADMIN"===a.roles[0]&&l.a.createElement("button",{className:"btn btn-primary",onClick:this.addClerk},"Add")),l.a.createElement("table",{className:"table table-striped table-bordered"},l.a.createElement("thead",null,l.a.createElement("tr",{className:"fw-bolder"},l.a.createElement("td",null,"ID"),l.a.createElement("td",null,"NAME"),"ROLE_ADMIN"===a.roles[0]&&l.a.createElement("td",null,"ACTIONS"))),l.a.createElement("tbody",null,this.state.clerks.map(function(t){return l.a.createElement("tr",{key:t.id},l.a.createElement("td",null,t.id),l.a.createElement("td",null,t.name," "),"ROLE_ADMIN"===a.roles[0]&&l.a.createElement("td",null,l.a.createElement("button",{onClick:function(){return e.editClerk(t.id)},className:"btn btn-info"},"Update"),"\xa0",l.a.createElement("button",{onClick:function(){return e.deleteClerk(t.id)},className:"btn btn-danger"},"Delete")))})))))}}]),a}(l.a.Component);t(23);function L(){var e=Object(o.g)(),a=Object(n.useState)({name:"",username:"",password:"",confirmPassword:""}),t=Object(j.a)(a,2),r=t[0],c=t[1],s=Object(n.useState)({}),m=Object(j.a)(s,2),i=m[0],d=m[1],u=Object(n.useState)(!1),p=Object(j.a)(u,2),f=p[0],b=p[1];Object(n.useEffect)(function(){if(console.log(i),0===Object.keys(i).length&&f){var a={name:r.name,username:r.username,password:r.password};console.log("clerk => "+JSON.stringify(a)),D.addClerk(a).then(function(a){e.push("/clerk"),console.log(a.data)})}});var E=function(e){var a={};return e.name||(a.name="Name is required!"),e.username||(a.username="Username is required!"),e.password||(a.password="Password is required!"),e.confirmPassword?e.password!==e.confirmPassword&&(a.confirmPassword="Password doesn't match"):a.confirmPassword="Please confirm your password!",a},g=function(e){var a=e.target,t=a.name,n=a.value;c(Object(O.a)({},r,Object(y.a)({},t,n)))};return l.a.createElement("div",null,l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-lg-10 col-xl-9 mx-auto"},l.a.createElement("div",{className:"card flex-row my-5 border-0 shadow rounded-3 overflow-hidden"},l.a.createElement("div",{className:"card-img-left d-none d-md-flex"}),l.a.createElement("div",{className:"card-body p-4 p-sm-5"},l.a.createElement("h5",{className:"card-title text-center mb-5 fw-light fs-5"},"Add"),l.a.createElement("form",null,l.a.createElement("div",{className:"form-floating mb-3"},l.a.createElement("input",{type:"text",name:"name",className:"form-control",id:"floatingInputName",placeholder:"Full Name",value:r.name,onChange:g}),l.a.createElement("label",null,"Full Name"),l.a.createElement("p",{className:"fw-bolder",style:{color:"red"}},i.name)),l.a.createElement("div",{className:"form-floating mb-3"},l.a.createElement("input",{type:"text",name:"username",className:"form-control",placeholder:"Username",value:r.username,onChange:g}),l.a.createElement("label",null,"Username"),l.a.createElement("p",{className:"fw-bolder",style:{color:"red"}},i.username)),l.a.createElement("div",{className:"form-floating mb-3"},l.a.createElement("input",{type:"password",name:"password",className:"form-control",placeholder:"Password",value:r.password,onChange:g}),l.a.createElement("label",null,"Password"),l.a.createElement("p",{className:"fw-bolder",style:{color:"red"}},i.password)),l.a.createElement("div",{className:"form-floating mb-3"},l.a.createElement("input",{type:"password",name:"confirmPassword",className:"form-control",id:"floatingPasswordConfirm",placeholder:"Confirm Password",value:r.confirmPassword,onChange:g}),l.a.createElement("label",null,"Confirm Password"),l.a.createElement("p",{className:"fw-bolder",style:{color:"red"}},i.confirmPassword)),l.a.createElement("div",{className:"d-grid mb-2"},l.a.createElement("button",{className:"btn btn-lg btn-primary btn-login fw-bold text-uppercase",type:"submit",onClick:function(e){e.preventDefault(),d(E(r)),b(!0)}},"Add Clerk"),"\xa0",l.a.createElement("button",{className:"btn btn-lg btn-danger btn-login text-uppercase",type:"submit",onClick:function(){e.push("/clerk")}},"Cancel"))))))))}var A=function(e){function a(e){var t;return Object(m.a)(this,a),(t=Object(b.a)(this,Object(E.a)(a).call(this,e))).updateClerk=function(e){e.preventDefault();var a={name:t.state.name,username:t.state.username,password:t.state.password,confirmPassword:t.state.confirmPassword};console.log("Clerk => "+JSON.stringify(a)),D.editClerk(a,t.state.id).then(function(e){t.props.history.push("/clerk")})},t.changeClerkName=function(e){t.setState({name:e.target.value})},t.changeUserName=function(e){t.setState({username:e.target.value})},t.changePassword=function(e){t.setState({password:e.target.value})},t.changeConfirmPassword=function(e){t.setState({confirmPassword:e.target.value})},t.state={id:t.props.match.params.id,name:"",username:"",password:"",confirmPassword:""},t.changeClerkName=t.changeClerkName.bind(Object(h.a)(Object(h.a)(t))),t.changeUserName=t.changeUserName.bind(Object(h.a)(Object(h.a)(t))),t.changePassword=t.changePassword.bind(Object(h.a)(Object(h.a)(t))),t.changeConfirmPassword=t.changeConfirmPassword.bind(Object(h.a)(Object(h.a)(t))),t.updateClerk=t.updateClerk.bind(Object(h.a)(Object(h.a)(t))),t}return Object(g.a)(a,e),Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;D.getClerkById(this.state.id).then(function(a){var t=a.data;e.setState({name:t.name,username:t.username,password:"",confirmPassword:""})})}},{key:"cancel",value:function(){this.props.history.push("/clerk")}},{key:"render",value:function(){return l.a.createElement("div",{className:"mt-5"},l.a.createElement("div",{className:"container mt-4"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"card col-md-6 offset-md-3 bg-light bg-gradient"},l.a.createElement("h3",{className:"text-center pt-4"},"Edit Clerk"),l.a.createElement("div",{className:"card-body"},l.a.createElement("form",{className:"text-start"},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{className:"pt-1"},"Full Name: "),l.a.createElement("input",{placeholder:"Name",name:"clerkName",className:"form-control",value:this.state.name,onChange:this.changeClerkName,required:!0}),l.a.createElement("label",{className:"pt-3"},"Username: "),l.a.createElement("input",{placeholder:"Username",name:"username",className:"form-control",value:this.state.username,onChange:this.changeUserName,required:!0}),l.a.createElement("label",{className:"pt-3"},"Password: "),l.a.createElement("input",{type:"password",placeholder:"Password",name:"password",className:"form-control",value:this.state.password,onChange:this.changePassword,required:!0}),l.a.createElement("label",{className:"pt-3"},"Confirm Password: "),l.a.createElement("input",{type:"password",placeholder:"Confirm Password",name:"confirmPassword",className:"form-control",value:this.state.confirmPassword,onChange:this.changeConfirmPassword,required:!0})),l.a.createElement("div",{className:"pt-3 text-center"},l.a.createElement("button",{className:"btn btn-success",onClick:this.updateClerk},"Update"),"\xa0",l.a.createElement("button",{className:"btn btn-danger",onClick:this.cancel.bind(this)},"Cancel"))))))))}}]),a}(n.Component);function U(){var e=Object(n.useState)({fullName:"",username:"",password:"",confirmPassword:""}),a=Object(j.a)(e,2),t=a[0],r=a[1],c=Object(n.useState)({}),s=Object(j.a)(c,2),o=s[0],m=s[1],i=Object(n.useState)(!1),d=Object(j.a)(i,2),u=d[0],f=d[1],b=Object(n.useState)(!1),E=Object(j.a)(b,2),g=E[0],h=E[1],N=function(e){var a=e.target,n=a.name,l=a.value;r(Object(O.a)({},t,Object(y.a)({},n,l)))};Object(n.useEffect)(function(){if(console.log(o),0===Object.keys(o).length&&u){var e={name:t.fullName,username:t.username,password:t.password};p.saveUser(e).then(function(e){console.log(e.data)}),f(!1);r({fullName:"",username:"",password:"",confirmPassword:""}),h(!0)}},[o,t,u]);var v=function(e){var a={};return e.fullName||(a.fullName="FullName is required!"),e.username?e.username.length<=2&&(a.username="Username must be more than 2 characters"):a.username="Username is required!",e.password?e.password.length<4?a.password="Password must be more than 4 characters":e.password.length>23&&(a.password="Password cannot exceed more than 23 characters"):a.password="Password is required",e.password!==e.confirmPassword&&(a.confirmPassword="Password doesn't match!"),a};return l.a.createElement("div",{className:"mt-5"},l.a.createElement("section",{className:"vh-100",style:{backgroundColor:"#eee"}},l.a.createElement("div",{className:"container h-100"},l.a.createElement("div",{className:"row d-flex justify-content-center align-items-center h-100"},l.a.createElement("div",{className:"col-lg-12 col-xl-11"},l.a.createElement("div",{className:"card text-black",style:{borderRadius:"25px"}},l.a.createElement("div",{className:"card-body p-md-5"},l.a.createElement("div",{className:"row justify-content-center"},l.a.createElement("div",{className:"col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1"},0===Object.keys(o).length&&g&&l.a.createElement("div",{className:"alert alert-success fw-bolder"},"Signed in successfully"),l.a.createElement("p",{className:"text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4"},"Sign up"," "),l.a.createElement("form",{className:"mx-1 mx-md-4",onSubmit:function(e){e.preventDefault(),m(v(t)),f(!0)}},l.a.createElement("div",{className:"d-flex flex-row align-items-center mb-4"},l.a.createElement("i",{className:"fas fa-user fa-lg me-3 fa-fw"}),l.a.createElement("div",{className:"form-outline flex-fill mb-0"},l.a.createElement("input",{type:"text",name:"fullName",className:"form-control",value:t.fullName,onChange:N}),l.a.createElement("label",{className:"form-label"},"Full Name"),l.a.createElement("p",{className:"fw-bolder",style:{color:"red"}},o.fullName))),l.a.createElement("div",{className:"d-flex flex-row align-items-center mb-4"},l.a.createElement("i",{className:"fas fa-envelope fa-lg me-3 fa-fw"}),l.a.createElement("div",{className:"form-outline flex-fill mb-0"},l.a.createElement("input",{type:"text",name:"username",className:"form-control",value:t.username,onChange:N}),l.a.createElement("label",{className:"form-label"},"Username"),l.a.createElement("p",{className:"fw-bolder",style:{color:"red"}},o.username))),l.a.createElement("div",{className:"d-flex flex-row align-items-center mb-4"},l.a.createElement("i",{className:"fas fa-lock fa-lg me-3 fa-fw"}),l.a.createElement("div",{className:"form-outline flex-fill mb-0"},l.a.createElement("input",{type:"password",name:"password",className:"form-control",value:t.password,onChange:N}),l.a.createElement("label",{className:"form-label"},"Password"),l.a.createElement("p",{className:"fw-bolder",style:{color:"red"}},o.password))),l.a.createElement("div",{className:"d-flex flex-row align-items-center mb-4"},l.a.createElement("i",{className:"fas fa-key fa-lg me-3 fa-fw"}),l.a.createElement("div",{className:"form-outline flex-fill mb-0"},l.a.createElement("input",{type:"password",name:"confirmPassword",className:"form-control",value:t.confirmPassword,onChange:N}),l.a.createElement("label",{className:"form-label"},"Confirm password"),l.a.createElement("p",{className:"fw-bolder",style:{color:"red"}},o.confirmPassword))),l.a.createElement("div",{className:"form-check d-flex justify-content-center mb-5"},l.a.createElement("input",{className:"form-check-input me-2",type:"checkbox",value:"",id:"form2Example3c"}),l.a.createElement("label",{className:"form-check-label"},"I agree all statements in"," ",l.a.createElement("a",{href:"#!"},"Terms of service"))),l.a.createElement("div",{className:"d-flex justify-content-center mx-4 mb-3 mb-lg-4"},l.a.createElement("button",{className:"btn btn-primary btn-lg"},"Register")))),l.a.createElement("div",{className:"col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2"},l.a.createElement("img",{src:"https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp",className:"img-fluid",alt:"Some Pic"}))))))))))}var F=function(e){function a(){return Object(m.a)(this,a),Object(b.a)(this,Object(E.a)(a).apply(this,arguments))}return Object(g.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"mt-5"},l.a.createElement("div",{id:"error-page"},l.a.createElement("div",{className:"content"},l.a.createElement("h2",{className:"header","data-text":"404"},"404"),l.a.createElement("h3",{"data-text":"Opps! Page not found"},"Oops! Page not found"),l.a.createElement("p",null,"The Page you are looking for might have been removed had its name changed or its temporarily unavailable."))))}}]),a}(n.Component);function R(){return l.a.createElement("div",null,l.a.createElement("header",{className:"masthead"},l.a.createElement("div",{className:"container h-100"},l.a.createElement("div",{className:"row h-100 align-items-center"},l.a.createElement("div",{className:"col-12 text-center"},l.a.createElement("h1",{className:"fw-light"},"Access to localhost was denied."),l.a.createElement("p",{className:"lead"},"You don't have the user rights to view this page."),l.a.createElement("p",{className:"lead"},"HTTP ERROR 403"))))))}var T=function(e){function a(){return Object(m.a)(this,a),Object(b.a)(this,Object(E.a)(a).apply(this,arguments))}return Object(g.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=Object(w.a)(sessionStorage.getItem("access_token"));return l.a.createElement("div",{className:"mt-5"},"ROLE_ADMIN"===e.roles[0]?l.a.createElement("section",{className:"pb-5 header text-center"},l.a.createElement("div",{className:"container py-5 text-white"}),l.a.createElement("h1",{className:"mb-5s"},"IF YOU CAN SEE THIS, YOU MUST BE AN ADMIN"),l.a.createElement("div",{className:"text-center"},l.a.createElement("span",{className:"animated-btn text-white"},l.a.createElement("i",{className:"fa fa-play"})))):l.a.createElement(o.a,{to:"/403"}))}}]),a}(n.Component);var M=function(){return l.a.createElement("div",null,l.a.createElement(s.a,null,l.a.createElement("div",null,l.a.createElement(f,null),l.a.createElement("div",{className:"App pt-4"},l.a.createElement(o.d,null,l.a.createElement(o.b,{exact:!0,path:"/signup",component:U}),l.a.createElement(o.b,{path:"/login",component:x}),l.a.createElement(o.b,{path:"/welcome",component:I}),l.a.createElement(o.b,{path:"/items",component:k}),l.a.createElement(o.b,{path:"/add-items",component:C}),l.a.createElement(o.b,{path:"/update-item/:id",component:P}),l.a.createElement(o.b,{path:"/clerk",component:q}),l.a.createElement(o.b,{path:"/add-clerk",component:L}),l.a.createElement(o.b,{path:"/update-clerk/:id",component:A}),l.a.createElement(o.b,{path:"/admin",component:T}),l.a.createElement(o.b,{path:"/403",component:R}),l.a.createElement(o.b,{path:"/404",component:F}),l.a.createElement(o.a,{to:"/404"}))))))},_=function(e){e&&e instanceof Function&&t.e(1).then(t.bind(null,79)).then(function(a){var t=a.getCLS,n=a.getFID,l=a.getFCP,r=a.getLCP,c=a.getTTFB;t(e),n(e),l(e),r(e),c(e)})};t(74),t(76);c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(M,null)),document.getElementById("root")),_()}},[[38,3,2]]]);
//# sourceMappingURL=main.bca8c6f2.chunk.js.map