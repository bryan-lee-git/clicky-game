(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,a,t){e.exports=t(36)},22:function(e,a,t){},24:function(e,a,t){},3:function(e){e.exports=[{name:"Weyoun",src:"/img/weyoun.jpg",id:1},{name:"Borg Picard",src:"/img/borg-picard.jpg",id:2},{name:"Chakotay",src:"/img/chakotay.jpg",id:3},{name:"Borg Seven",src:"/img/borg-seven.jpg",id:4},{name:"The Doctor",src:"/img/doctor.jpg",id:5},{name:"Spock",src:"/img/spock.jpg",id:6},{name:"Geordi",src:"/img/geordi.jpg",id:7},{name:"Data (First Contact)",src:"/img/data-fc.jpg",id:8},{name:"Janeway",src:"/img/janeway.jpg",id:9},{name:"Borg Janeway",src:"/img/borg-janeway.jpg",id:10},{name:"Picard",src:"/img/picard.jpg",id:11},{name:"Borg Tuvok",src:"/img/borg-tuvok.jpg",id:12},{name:"Data",src:"/img/data.jpg",id:13},{name:"Seven of Nine",src:"/img/seven.jpg",id:14},{name:"Tuvok",src:"/img/tuvok.jpg",id:15}]},36:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),c=t(2),i=t.n(c),o=(t(22),t(13)),s=t(9),m=t(10),l=t(14),u=t(11),d=t(15),g=function(e){return n.a.createElement("div",null,n.a.createElement("nav",{className:"navbar navbar is-fixed-top",role:"navigation","aria-label":"main navigation"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"navbar-end"},n.a.createElement("div",{className:"navbar-item"},n.a.createElement("button",{className:"button has-background-grey has-text-white-bis"},"Score: ",e.currentScore),n.a.createElement("button",{className:"button has-background-grey has-text-white-bis"},"Top Score: ",e.highScore))))))},h=function(){return n.a.createElement("section",{className:"hero is-primary"},n.a.createElement("div",{className:"hero-body"},n.a.createElement("div",{className:"container"},n.a.createElement("h1",{className:"title is-uppercase"},"Star Trek Clicky Game!"),n.a.createElement("h2",{className:"subtitle is-uppercase"},"Click on an image to earn points, but don't click on any more than once!"))))},p=function(e){return n.a.createElement("div",{className:"card column is-one-fifth has-shadow",onClick:function(){return e.imageClick(e.id)}},n.a.createElement("div",{className:"card-image"},n.a.createElement("figure",{className:"image is-4by3"},n.a.createElement("img",{src:e.src,alt:e.name}))))},f=function(e){return n.a.createElement("div",{className:"container cards-container has-shadow"},n.a.createElement("div",{className:"columns is-multiline"},e.characters.map(function(a,t){return n.a.createElement(p,{key:t,id:a.id,name:a.name,src:a.src,imageClick:e.imageClick})})))},v={fixFooter:{position:"fixed",width:"100%",bottom:"0",overflow:"hidden",height:"50px",fontSize:"11px",backgroundColor:"rgba(255, 255, 255, 0.1)"}},b=function(){return n.a.createElement("div",null,n.a.createElement("footer",{style:v.fixFooter},n.a.createElement("div",{className:"has-text-centered"},n.a.createElement("p",null,n.a.createElement("br",null),n.a.createElement("strong",{className:"has-text-black is-uppercase has-text-weight-bold"},"Developed by Bryan Lee | U of U Full Stack Bootcamp | December 2018")))))},k=t(3),E=(t(24),t(12)),S=k.sort(function(){return.5-Math.random()}),w=function(e){function a(){var e,t;Object(s.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(t=Object(l.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(n)))).state={characters:S,currentScore:0,highScore:0,clicked:[],appear:!0},t.toggleAppear=function(){t.setState({appear:!t.state.appear})},t.shuffleCharacters=function(){var e=k.sort(function(){return.5-Math.random()});t.setState({characters:e})},t.updateScore=function(){t.setState({currentScore:t.state.currentScore+1});var e=t.state.currentScore+1;t.shuffleCharacters(),e>=t.state.highScore&&t.setState({highScore:e})},t.imageClick=function(e){-1===t.state.clicked.indexOf(e)?(t.setState({clicked:Object(o.a)(t.state.clicked).concat([e])}),t.updateScore()):(t.setState({currentScore:0}),t.setState({clicked:[]}),t.shuffleCharacters())},t}return Object(d.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"App"},n.a.createElement(g,{currentScore:this.state.currentScore,highScore:this.state.highScore}),n.a.createElement(h,null),n.a.createElement(E.CSSTransition,{in:this.state.appear,appear:!0,timeout:600,classNames:"fade"},n.a.createElement(f,{characters:this.state.characters,imageClick:this.imageClick})),n.a.createElement(b,null))}}]),a}(n.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(n.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[16,2,1]]]);
//# sourceMappingURL=main.9bf1df01.chunk.js.map