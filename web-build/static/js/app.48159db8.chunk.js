(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{193:function(e,t,n){e.exports=n.p+"static/media/icon.608e4d9d.png"},251:function(e,t,n){"use strict";n.d(t,"a",(function(){return be}));var a=n(409),r=n(410),o=n(407),i=n(17),l=n(213),s=n(408),c=n(0),u=n.n(c),d=n(45),m=n(73),p=n(215),g=n(216),f=n(10),h=n.n(f),w=n(13),b=n.n(w),y="https://nameless-refuge-42185.herokuapp.com";function E(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?E(Object(n),!0).forEach((function(t){h()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):E(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var S={authorized:!1,user:{},errors:{}};function x(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function k(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?x(Object(n),!0).forEach((function(t){h()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):x(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var O={authorized:!1,sentence:"oh what fun it is..."},j=Object(m.combineReducers)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"REGISTER_USER_SUCCESS":case"LOGIN_USER_SUCCESS":return v(v({},e),{},{user:t.payload,authorized:!0});case"LOGOUT_USER_SUCCESS":return v(v({},e),{},{authorized:!1});case"LOGIN_USER_FAIL":case"REGISTER_USER_FAIL":return v(v({},e),{},{errors:!0})}return e},status:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_STATUS":return k(k({},e),{},{status:t.payload})}return e}}),C=Object(p.composeWithDevTools)(Object(m.applyMiddleware)(g.a)),P=Object(m.createStore)(j,C),R=n(14),T=n.n(R),L=n(56),I=n(118),N=n(68),z=n(34),_=n(18),U=n(3),A=n(6),B=A.a.create({container:{flex:1,justifyContent:"center",alignItems:"center",backgroundColor:"#ffffff",minHeight:"100%",flexGrow:1},logo:{alignItems:"center",marginBottom:40},image:{width:100,height:100,borderRadius:20,boxShadow:"2px 2px #dddddd",margin:30},inputBox:{width:300,backgroundColor:"#B6BFC4",borderRadius:25,padding:16,fontSize:16,marginVertical:10,outline:0,outlineColor:0,outlineStyle:"none",outlineWidth:0},button:{width:300,backgroundColor:"#738289",borderRadius:25,marginVertical:10,paddingVertical:13},buttonText:{fontSize:16,fontWeight:"500",color:"#ffffff",textAlign:"center"},registerContainer:{alignItems:"flex-end",justifyContent:"center",paddingVertical:16,flexDirection:"row"},registerText:{color:"#738289",fontSize:16},registerButton:{color:"#738289",fontSize:16,fontWeight:"bold"},error:{color:"red",textAlign:"center"},warning_wrapper:{flex:1,justifyContent:"center",alignItems:"center"},warning_text:{fontSize:18,margin:30,color:"#777777"},redirect_button:{fontSize:40,margin:30,padding:30,borderRadius:10,borderWidth:1,borderColor:"#000000"},noticeText:{margin:15},noticeButton:{margin:15}}),D=n(39),M=n(234),G=n(4),W=A.a.create({imageWrapper:{width:"100%",height:"40%",borderTopLeftRadius:10,overflow:"hidden"},titleWrapper:{height:"15%",paddingHorizontal:15,flexDirection:"row",justifyContent:"space-between",alignItems:"center",marginTop:3},descriptionWrapper:{height:"15%",paddingHorizontal:15},linkWrapper:{height:"15%",paddingHorizontal:15,marginTop:15},card:{backgroundColor:"#ffffff",minHeight:500,display:"flex",justifyContent:"space-between",flexDirection:"column",flex:1,margin:20,padding:10,borderRadius:10,shadowColor:"#000000",shadowOpacity:.25,shadowOffset:{width:0,height:2},shadowRadius:8,elevation:5},image:{height:"100%",width:"100%"},title:{fontSize:20},description:{fontSize:15,marginTop:15}}),H=function(e){console.log("PROPS IN CARD:",e);var t=e.linkURL;return u.a.createElement(U.a,{style:W.card},u.a.createElement(U.a,{style:W.imageWrapper},u.a.createElement(D.a,{source:{uri:e.image?e.image:"https://avatars.githubusercontent.com/u/4679115?s=460&v=4"},style:W.image,resizeMode:e.resizeMode?e.resizeMode:"cover"})),u.a.createElement(U.a,{style:W.titleWrapper},u.a.createElement(_.a,{style:W.title},e.title&&e.title.length>24?e.title.slice(0,24)+"...":e.title)),u.a.createElement(U.a,{style:W.descriptionWrapper},u.a.createElement(_.a,{style:W.description},e.description&&e.description.length>300?e.description.slice(0,300)+"...":e.description)),u.a.createElement(U.a,{style:W.linkWrapper},u.a.createElement(_.a,{style:{color:"blue"},onPress:function(e){"web"==G.a.OS?window.open(t,"_blank"):M.a.openURL(t,"_blank")}},e.linkName)))},q=B,F=function(e){var t=Object(c.useState)(""),n=T()(t,2),a=(n[0],n[1]),r=Object(c.useState)(""),o=T()(r,2),i=(o[0],o[1]);if(Object(c.useEffect)((function(){!function(){var e,t;b.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,b.a.awrap(L.a.getItem("token"));case 2:(e=n.sent)&&(t=Object(I.a)(e),a(t.fullName),i(t.email));case 4:case"end":return n.stop()}}),null,null,null,Promise)}()})),!Object(d.c)((function(e){return e.auth.authorized})))return u.a.createElement(U.a,{style:q.warning_wrapper},u.a.createElement(_.a,{style:q.warning_text},"Sorry, you need to register for an account to see this page."),u.a.createElement(N.a,{onPress:function(){return e.navigation.navigate("Register")},title:"Register",style:q.redirect_button}));return u.a.createElement(z.a,null,u.a.createElement(H,{resizeMode:"contain",title:"Connect, LLC.",description:"At Connect,LLC. I designed the database schema, the express api, set up a server for development on Digital Ocean. I also wrote Swift code for the iOS app and made sure all libraries used were well documented.",linkURL:""}),u.a.createElement(H,{image:"https://mk0eltorocomd2iu6ndj.kinstacdn.com/wp-content/uploads/2017/09/web_red.png",resizeMode:"contain",title:"El Toro",description:"At El Toro I worked with a combination of Typescript React and Puppeteer for testing the frontend. In addition to that I used Selenium for frontend UI testing and spent some time working with Postman for API testing. ",linkName:"El Toro",linkURL:"http://eltoro.com"}),u.a.createElement(H,{image:"https://tf-shoebill-prod.imgix.net/img/logo.1879aa6.svg",resizeMode:"contain",title:"Thinkful",description:"At Thinkful, I both mentored new students in web development as well as graded a variety of web related assignments. Leaving helpful guidance and advice or praise.",linkName:"Thinkful",linkURL:"http://thinkful.com"}),u.a.createElement(H,{image:"http://adder.io/assets/images/asset-13x2x-361x129.png",resizeMode:"contain",title:"Adder Mobile Technology",description:"At Adder I helped create the frontend for their app using React and an existing react dashboard framework. I also used express API and MongoDB for backend integration. ",linkName:"Adder",linkURL:"http://adder.io"}),u.a.createElement(H,{image:"http://cdn.asihub.com/asi/img/logos/advanced-solutions-inc-logo.png",resizeMode:"contain",title:"Advanced Solutions",description:"At Advanced Solutions I converted their existing website, including a few of their subsidiaries, into wordpress sites that could be managed more easily by their marketing team. I also helped integrate subscriptions into their wordpress sites. ",linkName:"Advanced Solutions",linkURL:"http://www.advancedsolutions.mobi/"}),u.a.createElement(H,{image:"https://parkseed.com/images/art/Park-Logo-2020.png",resizeMode:"contain",title:"JPPA Parkseed",description:"At Parkseed I was the lead UI/UX developer which mostly involved using javascript to create the additional custom functionality needed for the existing e-commerce framework.",linkName:"JPPA Parkseed",linkURL:"http://www.parkseed.com"}),u.a.createElement(H,{image:"https://rrb9y3pc0lm4qd0v4tdsxqq9-wpengine.netdna-ssl.com/wp-content/uploads/2020/07/spectrio-logo-violet-cloud-web.svg",resizeMode:"contain",title:"Codigo",description:"At Codigo I worked to help integrate interactive content into their existing framework for digital signage using mainly javascript. I also created both a knowledge base specifically for the customer support team.",linkName:"Codigo",linkURL:"https://www.spectrio.com/acquisitions/codigo/"}))},J=n(143),V=n(129),Q=n(128),X=n(42),Y=n(49),K=n(63),Z=K.a({email:K.b().email().required(),password:K.b().required().min(6)}),$=B,ee=function(e){var t=Object(d.b)();return Object(d.c)((function(e){return e.auth.authorized}))?u.a.createElement(U.a,{style:$.container},u.a.createElement(_.a,{style:$.noticeText},"You are already logged in."),u.a.createElement(_.a,{style:$.noticeText},"Do you want to log out?"),u.a.createElement(N.a,{onPress:function(){return e.navigation.navigate("Logout")},title:"Logout",style:$.noticeButton})):u.a.createElement(Q.a,{behavior:"ios"===G.a.OS?"padding":"height",style:{flex:1}},u.a.createElement(z.a,null,u.a.createElement(J.a,{initialValues:{email:"",password:""},validationSchema:Z,onSubmit:function(n){console.log(n),t(function(e){var t=e.email,n=e.password;return function(e){var a,r;return b.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,b.a.awrap(fetch(y+"/users/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:t,password:n})}));case 2:return a=o.sent,o.next=5,b.a.awrap(a.json());case 5:return(r=o.sent).success?e({type:"LOGIN_USER_SUCCESS",payload:r}):e({type:"LOGIN_USER_FAIL"}),o.abrupt("return",r);case 8:case"end":return o.stop()}}),null,null,null,Promise)}}(n)).then((function(t){return b.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:if(console.log(t),!t.success){n.next=13;break}return n.prev=2,n.next=5,b.a.awrap(L.a.setItem("token",t.token));case 5:e.navigation.navigate("Servewerx"),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(2),console.log(n.t0);case 11:n.next=14;break;case 13:V.a.alert(t.message);case 14:case"end":return n.stop()}}),null,null,[[2,8]],Promise)})).catch((function(e){return console.log(e)}))}},(function(t){return u.a.createElement(U.a,{style:$.container},u.a.createElement(U.a,{style:$.logo},u.a.createElement(D.a,{source:n(193),style:$.image})),u.a.createElement(U.a,null,u.a.createElement(X.a,{style:$.inputBox,placeholder:"Email",placeholderTextColor:"#fff",keyboardType:"email-address",onChangeText:t.handleChange("email"),value:t.values.email,onBlur:t.handleBlur("email")}),u.a.createElement(_.a,{style:$.error},t.touched.email&&t.errors.email),u.a.createElement(X.a,{style:$.inputBox,placeholder:"Password",placeholderTextColor:"#fff",secureTextEntry:!0,onChangeText:t.handleChange("password"),value:t.values.password,onBlur:t.handleBlur("password")}),u.a.createElement(_.a,{style:$.error},t.touched.password&&t.errors.password),u.a.createElement(Y.a,{style:$.button,onPress:t.handleSubmit},u.a.createElement(_.a,{style:$.buttonText},"Login")),u.a.createElement(U.a,{style:$.registerContainer},u.a.createElement(_.a,{style:$.registerText},"Don't Have an Account?"),u.a.createElement(Y.a,{onPress:function(){return e.navigation.navigate("Register")}},u.a.createElement(_.a,{style:$.registerButton},"Register")))))}))))},te=B;var ne=function(e){var t=e.navigation,n=Object(d.b)();return u.a.createElement(U.a,{style:te.container},u.a.createElement(_.a,{style:te.noticeText},"Are you sure you want to Logout?"),u.a.createElement(N.a,{title:"Logout",onPress:function(){n((function(e){return b.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:e({type:"LOGOUT_USER_SUCCESS"});case 1:case"end":return t.stop()}}),null,null,null,Promise)})).then((function(e){return b.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return console.log(e),n.prev=1,n.next=4,b.a.awrap(L.a.removeItem("token"));case 4:console.log("success ? "),t.navigate("Home"),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(1),console.log(n.t0);case 11:case"end":return n.stop()}}),null,null,[[1,8]],Promise)})).catch((function(e){return console.log(e)}))},style:te.noticeButton}))},ae=B,re=K.a({fullName:K.b().required().min(3),email:K.b().email().required(),password:K.b().required().min(6)}),oe=function(e){var t=Object(d.b)();return u.a.createElement(Q.a,{behavior:"ios"===G.a.OS?"padding":"height",style:{flex:1}},u.a.createElement(z.a,null,u.a.createElement(J.a,{initialValues:{fullName:"",email:"",password:""},onSubmit:function(n){console.log(n),t(function(e){var t=e.fullName,n=e.email,a=e.password;return function(e){var r,o;return b.a.async((function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,b.a.awrap(fetch(y+"/users/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({fullName:t,email:n,password:a})}));case 2:return r=i.sent,i.next=5,b.a.awrap(r.json());case 5:return(o=i.sent).success?e({type:"REGISTER_USER_SUCCESS",payload:o}):e({type:"REGISTER_USER_FAIL"}),i.abrupt("return",o);case 8:case"end":return i.stop()}}),null,null,null,Promise)}}(n)).then((function(t){return b.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:if(!t.success){n.next=12;break}return n.prev=1,n.next=4,b.a.awrap(L.a.setItem("token",t.token));case 4:e.navigation.navigate("Servewerx"),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(1),console.log(n.t0);case 10:n.next=13;break;case 12:V.a.alert("Registration Failed try again.");case 13:case"end":return n.stop()}}),null,null,[[1,7]],Promise)})).catch((function(e){return console.log(e)}))},validationSchema:re},(function(t){return u.a.createElement(U.a,{style:ae.container},u.a.createElement(U.a,{style:ae.logo},u.a.createElement(D.a,{source:n(193),style:ae.image})),u.a.createElement(U.a,null,u.a.createElement(X.a,{style:ae.inputBox,placeholder:"Full Name",placeholderTextColor:"#fff",onChangeText:t.handleChange("fullName"),value:t.values.fullName,onBlur:t.handleBlur("fullName")}),u.a.createElement(_.a,{style:ae.error},t.touched.fullName&&t.errors.fullName),u.a.createElement(X.a,{style:ae.inputBox,placeholder:"Email",placeholderTextColor:"#fff",keyboardType:"email-address",onChangeText:t.handleChange("email"),value:t.values.email,onBlur:t.handleBlur("email")}),u.a.createElement(_.a,{style:ae.error},t.touched.email&&t.errors.email),u.a.createElement(X.a,{style:ae.inputBox,placeholder:"Password",placeholderTextColor:"#fff",secureTextEntry:!0,onChangeText:t.handleChange("password"),value:t.values.password,onBlur:t.handleBlur("password")}),u.a.createElement(_.a,{style:ae.error},t.touched.password&&t.errors.password),u.a.createElement(Y.a,{style:ae.button,onPress:t.handleSubmit},u.a.createElement(_.a,{style:ae.buttonText},"Register")),u.a.createElement(U.a,{style:ae.registerContainer},u.a.createElement(_.a,{style:ae.registerText},"Have an Account?"),u.a.createElement(Y.a,{onPress:function(){return e.navigation.navigate("Login")}},u.a.createElement(_.a,{style:ae.registerButton},"Login")))))}))))},ie=B,le=function(e){var t=Object(c.useState)(""),n=T()(t,2),a=(n[0],n[1]),r=Object(c.useState)(""),o=T()(r,2),i=(o[0],o[1]);if(Object(c.useEffect)((function(){!function(){var e,t;b.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,b.a.awrap(L.a.getItem("token"));case 2:(e=n.sent)&&(t=Object(I.a)(e),a(t.fullName),i(t.email));case 4:case"end":return n.stop()}}),null,null,null,Promise)}()})),!Object(d.c)((function(e){return e.auth.authorized})))return u.a.createElement(U.a,{style:ie.warning_wrapper},u.a.createElement(_.a,{style:ie.warning_text},"Sorry, you need to register for an account to see this page."),u.a.createElement(N.a,{onPress:function(){return e.navigation.navigate("Register")},title:"Register",style:ie.redirect_button}));return u.a.createElement(z.a,null,u.a.createElement(H,{image:"",resizeMode:"contain",title:"Skills",description:"My primary focus now is on react-native. My goal is to both get work primarily using it and to create my own applications. I've had ten years of experience with a variety of technology, including Javascript, PHP, MySQL, javascript, css, Docker, GoLang, Swift, various frameworks, but now I believe it is time to really focus on one area. I feel like react native gives me the best of both mobile and web development and it has great potential. ",linkName:"",linkURL:""}),u.a.createElement(H,{image:"http://www.forteworks.com/forteworks-16.9.19/games/images/spaceshooter.jpg",resizeMode:"contain",title:"Games",description:"A set of games created with Panda.js, which I customized while working at Codigo, to fit both the customer branding specifications and to handle gesture recognition.",linkName:"Games",linkURL:"http://www.forteworks.com/forteworks-16.9.19/games/index-games.php"}),u.a.createElement(H,{image:"http://www.forteworks.com/forte_2017.5.14/img/rough_est.png",resizeMode:"contain",title:"Estimation App",description:"An app I created to learn about web apps with offline capabilities, using vanilla javascript. It lets you calculate tasks and materials into an estimate of work. While it is not beautiful, it is definitely functional.",linkName:"Estimation App",linkURL:"http://www.forteworks.com/roughest/"}))},se=Object(o.a)(),ce=Object(s.a)(),ue=Object(r.a)(),de=function(){var e=Object(i.useNavigation)();return u.a.createElement(a.a,{name:"menu",size:24,onPress:function(){e.openDrawer()}})};function me(){return u.a.createElement(ce.Navigator,{screenOptions:{headerLeft:function(){return u.a.createElement(de,null)}}},u.a.createElement(ce.Screen,{name:"servewerx.com",component:ee}))}function pe(){return u.a.createElement(ce.Navigator,{screenOptions:{headerLeft:function(){return u.a.createElement(de,null)}}},u.a.createElement(ce.Screen,{name:"Register",component:oe}))}function ge(){return u.a.createElement(ce.Navigator,{screenOptions:{headerLeft:function(){return u.a.createElement(de,null)}}},u.a.createElement(ce.Screen,{name:"Logout",component:ne}))}function fe(){return u.a.createElement(ce.Navigator,{screenOptions:{headerLeft:function(){return u.a.createElement(de,null)}}},u.a.createElement(ce.Screen,{name:"Skills",component:le}))}function he(){return u.a.createElement(ce.Navigator,{screenOptions:{headerLeft:function(){return u.a.createElement(de,null)}}},u.a.createElement(ce.Screen,{name:"Experience",component:F}))}function we(){return u.a.createElement(ue.Navigator,{initialRouteName:"Skills",barStyle:{marginBottom:30,fontSize:40},tabBarOptions:{labelStyle:{fontSize:30,padding:15}}},u.a.createElement(ue.Screen,{name:"Skills",component:fe}),u.a.createElement(ue.Screen,{name:"Experience",component:he}))}function be(){return u.a.createElement(d.a,{store:P},u.a.createElement(l.a,null,u.a.createElement(se.Navigator,{initialRouteName:"Login"},u.a.createElement(se.Screen,{name:"Servewerx",component:we}),u.a.createElement(se.Screen,{name:"Login",component:me}),u.a.createElement(se.Screen,{name:"Register",component:pe}),u.a.createElement(se.Screen,{name:"Logout",component:ge}))))}},256:function(e,t,n){e.exports=n(398)}},[[256,1,2]]]);
//# sourceMappingURL=app.48159db8.chunk.js.map