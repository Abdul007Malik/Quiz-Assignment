(this["webpackJsonpquiz-assessment"]=this["webpackJsonpquiz-assessment"]||[]).push([[0],{100:function(e,t){},131:function(e,t,n){},132:function(e,t,n){},137:function(e){e.exports=JSON.parse('{"response_code":0,"results":[{"type":"fill_in_blank","question":"What is Pikachu\'s National PokeDex Number?","correct_answer":"#025"},{"type":"radio","questionType":"video","question":"Watch this movie clip and type the name of the movie?","correct_answer":"Intern","options":["Intern","Internship","Notebook","P.S. I Love you"],"videoPath":"https://drive.google.com/uc?export=download&id=1nf30vMlaqm78NbhjF7Ya_GTaZ5DKK3lr"},{"type":"radio","questionType":"image","question":"Is the logo of car Bentley?","correct_answer":"true","options":["true","false"],"imagePath":"https://i.pinimg.com/236x/c3/fa/2c/c3fa2c9df80fc450dec2cad096142c00--bike-logo-royal-logo.jpg"},{"type":"fill_in_blank","questionType":"image","question":"What is the name of this fruit?","correct_answer":"strawberry","imagePath":"https://4.imimg.com/data4/XA/VY/MY-23661864/fresh-strawberry-500x500.jpg"},{"type":"radio","question":"In Mario & Sonic at the Olympic Games\', characters are split into how many types?","correct_answer":"4","options":["6","5","4","3"]},{"type":"radio","question":"In which mall does \\"Dead Rising\\" take place?","correct_answer":"Willamette Parkview Mall","options":["Liberty Mall","Willamette Parkview Mall","Twin Pines Mall","Central Square Shopping Center"]},{"type":"radio","question":"In CoD: Black Ops III, what is the name of the rogue A.I. antagonist?","correct_answer":"Corvus","options":["Corvus","Cabal","Legion","Icarus"]}]}')},138:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(32),s=n.n(o),i=(n(85),n(12)),c=n(13),u=n(14),l=n(15),p=n(10),d=(n(86),n(20)),m=n(43),h=n.n(m),f=n(79),v=n(29),g=function(e){var t=e.item,n=t.id,r=t.options,o=t.onChange,s=void 0===o?function(){return console.trace("undefined onchange function")}:o,i=null;return a.a.createElement("div",{className:"form-group"},r.map((function(e){return i="string"===typeof e?e:e.id,a.a.createElement(v.a,{key:i,type:"radio",label:"string"===typeof e?e:e.label,value:i,name:n,onChange:function(e){return s(e.target.value)}})})))},b=n(67),y=function(e){var t=e.item,n=t.id,r=t.onChange,o=void 0===r?function(){return console.trace("undefined onchange function")}:r;return a.a.createElement("div",{className:"form-group"},a.a.createElement(b.a,{placeholder:"Enter Your answer",type:"text",name:n,onChange:function(e){return o(e.target.value?e.target.value.toLowerCase():"")}}))},E=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){var e=this.props,t=e.id,n=e.options,r=e.onChange,o=e.disabled,s={},i=function(e,t){switch(e){case"radio":case"multiple":return a.a.createElement(g,{item:t});case"fill_in_blank":return a.a.createElement(y,{item:t})}}(this.props.type,{id:t,onChange:r,options:n});return o&&(s.pointerEvents="none",s.opacity=.4),a.a.createElement("div",{className:"options",style:s},i)}}]),n}(a.a.Component),S=n(139),w=n(143),O=(n(92),n(68)),j=n.n(O),_=function(e,t){return j()(e,t)},T=n(78),q=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"componentDidMount",value:function(){this.player=Object(T.a)(this.videoNode,this.props,(function(){console.log("onPlayerReady",this)})),this.player.responsive(!0)}},{key:"componentWillUnmount",value:function(){this.player&&this.player.dispose()}},{key:"render",value:function(){var e=this;return a.a.createElement(S.a,{className:"video-player"},a.a.createElement("video",{ref:function(t){return e.videoNode=t},className:"video-js vjs-default-skin",width:"640px",height:"267px"}))}}]),n}(a.a.Component),N=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var r=arguments.length,o=new Array(r),s=0;s<r;s++)o[s]=arguments[s];return(e=t.call.apply(t,[this].concat(o))).state={answer:null,submitted:!1},e.onSubmit=function(){(e.state.answer||window.confirm("Do you want to skip this question"))&&(e.setState({submitted:!0}),setTimeout((function(){return e.props.onSubmit({answer:e.state.answer,questionId:e.props.id})}),2e3))},e.onChange=function(t){e.setState({answer:t})},e.getExtra=function(e,t){switch(e){case"image":return a.a.createElement("img",{height:"100px",width:"100px",src:t.imagePath,alt:"Not available"});case"video":return a.a.createElement(q,{autoplay:!0,controls:!0,sources:{src:t.videoPath,type:"video/mp4"}});default:return null}},e}return Object(c.a)(n,[{key:"render",value:function(){var e=this.props,t=e.id,n=e.question,r=e.options,o=e.type,s=e.isLast,i=e.correct_answer,c=e.questionType,u=Object(f.a)(e,["id","question","options","type","isLast","correct_answer","questionType"]),l=this.state.answer,p="string"===typeof i?i:i.join(", ");return a.a.createElement(S.a,{className:"item"},a.a.createElement("h3",null,"Question ".concat(t,") ").concat(n)," "),this.state.submitted&&null!=l&&(_(l,i)?a.a.createElement("p",{className:"text-success"},"Correct Answer"):a.a.createElement(a.a.Fragment,null,a.a.createElement("p",{className:"text-danger"},"Incorrect Answer"),a.a.createElement("p",null,"Correct Answer is ",p))),this.getExtra(c,u),a.a.createElement(E,{disabled:this.state.submitted,id:t,type:o,options:r,onChange:this.onChange}),a.a.createElement(w.a,{disabled:this.state.submitted,onClick:this.onSubmit},s?"Submit Quiz":"Next Question"))}}]),n}(a.a.Component),I=n(36),C=n(26),k=n.n(C),R=0,A=1,x=2,U=3,F=function(e){return function(t){switch(e){case R:t({type:"STAGE_SET",stage:A});break;case A:t({type:"STAGE_FINISH",stage:x});break;default:t({type:"STAGE_ERROR",error:"Sorry the page you are trying to access doesnot exist"})}}},P=n(76),Q=n.n(P),D=function(e,t){return function(n){e&&n({type:"SCORE_ADD",answer:e,score:t}),n((function(e,t){var n,r=t().question,a=r.current,o=r.questions.findIndex((function(e){return e.id===a})),s=null===(n=r.questions[o+1])||void 0===n?void 0:n.id;-1!==o?o===r.questions.length-1?(e({type:"QUESTIONS_POINTER_SET",current:null}),e(F(A))):e({type:"QUESTIONS_POINTER_SET",current:s}):console.trace("Invalid state:",o,a,r.questions)}))}},G=n(140),L=n(144),M=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={countdown:h.a.duration(e.props.duration,"seconds")},e.interval=null,e.timer=function(){e.state.countdown.asSeconds()<=0?e.props.completeStage():e.setState((function(e){return{countdown:h.a.duration(e.countdown.asSeconds()-1,"seconds")}}))},e.onSubmit=function(t){return function(t){(null===t||void 0===t?void 0:t.answer)?e.props.addScore(t,1):e.props.addScore(null,0)}},e}return Object(c.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.interval=setInterval((function(){e.timer()}),1e3),this.props.onFetchQuestions()}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"render",value:function(){var e=this,t=this.props.questions,n=t.findIndex((function(t){return t.id===e.props.current})),r=this.props.questions[n],o=t.length-n,s=100*n/t.length,i=this.state.countdown,c=["timer"];return i.asSeconds()<10&&c.push("blink text-danger"),a.a.createElement(S.a,{className:"questions grid col-sm-8 shadow p-3 mb-5 bg-white rounded"},a.a.createElement("div",{className:c.join(" ")},"Time :: ",i.hours(),":",i.minutes(),":",i.seconds()),this.props.loading?a.a.createElement(G.a,{animation:"border",variant:"warning"}):a.a.createElement(a.a.Fragment,null,a.a.createElement(L.a,{variant:"success",now:s}),r?a.a.createElement(N,Object.assign({key:r.id,isLast:1===o},r,{options:r.options,onSubmit:this.onSubmit(r)})):"No question available"))}}]),n}(r.Component),W=Object(d.b)((function(e){var t=e.question,n=void 0===t?{}:t;return{questions:n.questions,loading:n.loading,current:n.current,duration:n.duration}}),(function(e){return{onFetchQuestions:function(){return e((function(e){e({type:"QUESTIONS_FETCH_START"}),k.a.get("http://localhost:8000/questions").then((function(t){var n=t.data.results.map((function(e,t){return Object(I.a)({},e,{options:Q()(null===e||void 0===e?void 0:e.options),id:t+1})}));e({type:"QUESTIONS_FETCH_SUCCESS",questions:n})})).catch((function(t){e({type:"QUESTIONS_FETCH_FAIL",error:"Failed to fetch questions"})}))}))},addScore:function(t,n){return e(D(t,n))},completeStage:function(){return e(F(A))}}}))(M),H=n(142),Y=(n(131),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={name:""},e}return Object(c.a)(n,[{key:"render",value:function(){var e=this,t=this.state.name;return a.a.createElement(S.a,{className:"user-register"},a.a.createElement("div",{className:"auth-wrapper"},a.a.createElement("div",{className:"shadow p-3 mb-5 bg-white rounded auth-inner"},a.a.createElement(H.a,{className:"",onSubmit:function(n){n.preventDefault(),e.props.onSubmit({name:t})}},a.a.createElement("h3",null,"Register"),a.a.createElement("div",{className:"user-form"},a.a.createElement("div",{className:"form-group"},a.a.createElement("input",{name:"user",value:t,className:"form-control",placeholder:"Your Name",onChange:function(t){return e.setState({name:t.target.value})}})),a.a.createElement(w.a,{type:"submit",className:"btn btn-primary btn-block"},"Register"))))))}}]),n}(a.a.Component)),z=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).onSubmit=function(t){t&&t.name?e.props.registerUser(t):alert("Name is required")},e}return Object(c.a)(n,[{key:"render",value:function(){return a.a.createElement(Y,{onSubmit:this.onSubmit})}}]),n}(r.Component),B=Object(d.b)(null,(function(e){return{registerUser:function(t){return e((n=t,function(e){k.a.post("http://localhost:8000/register",n).then((function(t){e({type:"USER_REGISTER",user:Object(I.a)({},n)}),e(F(R))})).catch((function(t){e({type:"USER_REGISTER_FAIL",error:"Failed to register. Please try again..."})}))}));var n}}}))(z),J=n(141),K=(n(132),function(e){var t;return a.a.createElement(J.a,{className:"shadow p-3 mb-5 bg-white rounded"},a.a.createElement("label",null,"Congratulation ",null===(t=e.user)||void 0===t?void 0:t.name,", You have scored ",e.score," out of ",e.totalQuestions," (Attempted: ",e.totalAnswers,")"))}),V=Object(d.b)((function(e){var t=e.common.current,n=e.report;return{answers:n.answers,score:n.score,questions:e.question.questions,user:t}}))((function(e){var t=e.answers,n=e.questions,r=e.user,o=(null===n||void 0===n?void 0:n.length)||0,s=(null===t||void 0===t?void 0:t.length)||0,i=function(e,t){var n=null;return Array.isArray(e)&&e.reduce((function(e,r){var a,o;return"undefined"!==typeof(null===(a=n=t.find((function(e){return e.questionId===r.id})))||void 0===a?void 0:a.answer)&&_(null===(o=n)||void 0===o?void 0:o.answer,null===r||void 0===r?void 0:r.correct_answer)?e+1:e}),0)}(n,t);return a.a.createElement(S.a,{className:"report"},a.a.createElement(K,{score:i,user:r,totalQuestions:o,totalAnswers:s}))})),X=Object(d.b)((function(e){var t;return{user:null===(t=e.common)||void 0===t?void 0:t.current}}))((function(e){return null!=e.user?a.a.createElement(p.b,{path:e.path,exact:e.exact,component:e.component}):a.a.createElement(p.a,{to:"/"})})),Z=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"componentDidUpdate",value:function(e){e.currentStage!==this.props.currentStage&&(this.props.currentStage===R&&this.props.history.push("/"),this.props.currentStage===A&&this.props.history.push("/question"),this.props.currentStage===x&&this.props.history.push("/report"),this.props.currentStage===U&&this.props.history.push("/error"))}},{key:"getPageTile",value:function(e){switch(e){case 1:return"Questions";case 2:return"Report";default:return"Register"}}},{key:"render",value:function(){return a.a.createElement("div",{className:"App"},a.a.createElement(p.b,{exact:!0,path:"/",component:B}),a.a.createElement(X,{path:"/question",component:W}),a.a.createElement(X,{path:"/report",component:V}))}}]),n}(a.a.Component),$=Object(d.b)((function(e){return{currentStage:e.stage.current}}))(Object(p.f)(Z));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ee=n(48),te=n(17),ne={questions:[],loading:!1,duration:60,current:1},re=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ne,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"QUESTIONS_FETCH_START":return Object.assign({},e,{loading:!0});case"QUESTIONS_FETCH_SUCCESS":return Object.assign({},e,{questions:t.questions,loading:!1});case"QUESTIONS_FETCH_FAIL":return Object.assign({},e,{loading:!1,error:t.error});case"QUESTIONS_POINTER_SET":return Object.assign({},e,{current:t.current});default:return e}},ae=Object(te.c)({stage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{current:R,finish:!1},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"STAGE_SET":return Object.assign({},e,{current:t.stage});case"STAGE_FINISH":return Object.assign({},e,{current:x,finish:!0});case"STAGE_ERROR":return Object.assign({},e,{current:U,error:t.error});default:return e}},question:re,common:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{current:null},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"USER_REGISTER":return Object.assign({},e,{current:t.user});case"USER_LOGOUT":return Object.assign({},e,{current:null});default:return e}},report:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{score:null,answers:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SCORE_ADD":return Object.assign({},e,{score:e.score+t.score,answers:e.answers.concat(t.answer)});case"SCORE_RESET":return Object.assign({},e,{score:null,answers:[]});default:return e}}});var oe=n(41),se=n(77),ie=n.n(se),ce=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(ee.a)({reducer:ae,middleware:Object(ee.b)(),preloadedState:e});return t}({}),ue=new ie.a(k.a,{delayResponse:500}),le=n(137);ue.onGet("http://localhost:8000/questions").reply(200,le),ue.onPost("http://localhost:8000/register").reply(200,{id:1,name:""}),ue.onAny().passThrough(),s.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(oe.a,{basename:"Quiz-Assignment"},a.a.createElement(d.a,{store:ce},a.a.createElement($,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},80:function(e,t,n){e.exports=n(138)},85:function(e,t,n){},86:function(e,t,n){},92:function(e,t,n){},93:function(e,t){}},[[80,1,2]]]);
//# sourceMappingURL=main.0d891165.chunk.js.map