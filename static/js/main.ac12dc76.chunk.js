(this.webpackJsonppractice=this.webpackJsonppractice||[]).push([[0],{19:function(e,a,t){e.exports={App:"App_App__EFvRj"}},2:function(e,a,t){e.exports={searchBar:"MainPage_searchBar__2WHmn",button:"MainPage_button__3lssK",imageLayout:"MainPage_imageLayout__12JIA",imageSize:"MainPage_imageSize__2x-Um",enlargeImage:"MainPage_enlargeImage__2hp4n",modal:"MainPage_modal__2JAUV"}},20:function(e,a,t){e.exports=t(43)},25:function(e,a,t){},43:function(e,a,t){"use strict";t.r(a);var n=t(0),i=t.n(n),l=t(18),r=t.n(l),o=(t(25),t(3)),c=t(4),s=t(6),m=t(5),g=t(19),u=t.n(g),d=t(8),p=t(2),f=t.n(p),h=t(7),y=t.n(h),v=function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=a.call.apply(a,[this].concat(l))).state={category:null,typeOfGif:" ",imageLink:[],isclicked:!1,modalStatus:!1,altImage:null},e.onloadHandler=function(){e.setState({isclicked:!0}),y.a.get("https://api.giphy.com/v1/gifs/trending?api_key=QzwdaWAASennLz0xLqS1NBLUOHaGVjxs&limit=24").then((function(a){for(var t=0;t<20;t++){var n=a.data.data[t].images.downsized_large.url,i=Object(d.a)(e.state.imageLink);i.push(n),e.setState({imageLink:i})}}))},e.categoryHandle=function(a){e.setState({category:a.target.value})},e.setImagegifName=function(a){var t=a.target.value;e.setState({typeOfGif:t})},e.imageDisplayHandler=function(){return i.a.createElement("div",{className:f.a.imageLayout},e.state.imageLink.map((function(a,t){return i.a.createElement("img",{key:t,src:a,alt:t,onClick:e.enlargeImageHandler,className:f.a.imageSize})})))},e.getGifHandler=function(){var a=e.state.category,t=e.state.typeOfGif;null!==a?(null!=e.state.imageLink&&e.setState({imageLink:[]}),y.a.get("https://api.giphy.com/v1/"+a+"/search?api_key=QzwdaWAASennLz0xLqS1NBLUOHaGVjxs&q="+t+"&limit=24").then((function(a){for(var t=0;t<24;t++){var n=a.data.data[t].images.downsized_large.url,i=Object(d.a)(e.state.imageLink);i.push(n),e.setState({imageLink:i})}}))):alert("Please select category")},e.enlargeImageHandler=function(a){e.state.modalStatus||null!==e.state.altImage?e.state.modalStatus&&e.state.altImage===a.target.alt&&(a.target.className=f.a.imageSize,e.setState({modalStatus:!1}),e.setState({altImage:null}),console.log("2")):(a.target.className=f.a.modal,e.setState({modalStatus:!0}),e.setState({altImage:a.target.alt}))},e}return Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("div",{className:f.a.searchBar},i.a.createElement("label",null,i.a.createElement("input",{type:"radio",value:"gifs",name:"category",onChange:this.categoryHandle}),"Gifs"),i.a.createElement("label",null,i.a.createElement("input",{type:"radio",value:"stickers",name:"category",onChange:this.categoryHandle}),"Stickers"),i.a.createElement("div",null,i.a.createElement("input",{type:"text",onChange:this.setImagegifName}),i.a.createElement("br",null),i.a.createElement("input",{type:"button",value:"Let's Go!",onClick:this.getGifHandler,className:f.a.button}))),this.state.isclicked?this.imageDisplayHandler():this.onloadHandler())}}]),t}(n.Component),k=function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(c.a)(t,[{key:"componentDidMount",value:function(){document.title="Gif Generator"}},{key:"render",value:function(){return i.a.createElement("div",{className:u.a.App},i.a.createElement(v,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[20,1,2]]]);
//# sourceMappingURL=main.ac12dc76.chunk.js.map