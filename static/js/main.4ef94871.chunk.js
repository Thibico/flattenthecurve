(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{157:function(t,e,n){t.exports=n.p+"static/media/gnpc_commodity_exports.97d62662.csv"},164:function(t,e,n){t.exports=n(237)},169:function(t,e,n){},170:function(t,e,n){t.exports=n.p+"static/media/logo.5d5d9eef.svg"},171:function(t,e,n){},173:function(t,e,n){},236:function(t,e,n){},237:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),i=n(17),o=n.n(i),l=(n(169),n(162)),c=n(104),s=n(105),u=n(108),h=n(106),d=n(50),f=n(109),p=(n(170),n(171),n(172),n(80)),m=n.n(p),g=(n(101),n(25),n(32)),y=(n(157),n(173),n(64)),b=n(137),v=n(66),x=n(238),w=n(118),O=n(103),D=n(82),j=n(158),k=n(2),M=n(112),P=n(159),E=n(28),S=function(t){function e(t){var n;return Object(c.a)(this,e),(n=Object(u.a)(this,Object(h.a)(e).call(this,t))).setHeightFromDateExtant=function(t,e){return n.setHeight(e.diff(t,"months"))},n.setHeight=function(t){return 180*t+500},n.createChart=n.createChart.bind(Object(d.a)(n)),n.state={height:4e3},n}return Object(f.a)(e,t),Object(s.a)(e,[{key:"componentDidMount",value:function(){console.log(this.props),this.setState({height:this.props.timeline?this.setHeightFromDateExtant(this.props.minDate,this.props.maxDate):this.setHeight(this.props.data.length),months:this.props.timeline?this.props.maxDate.diff(this.props.minDate,"months"):0}),this.createChart()}},{key:"componentDidUpdate",value:function(){this.createChart()}},{key:"componentWillReceiveProps",value:function(t){t.data===this.props.data&&t.timeline===this.props.timeline||this.setState({height:t.timeline?this.setHeightFromDateExtant(t.minDate,t.maxDate):this.setHeight(t.data.length),months:t.timeline?t.maxDate.diff(t.minDate,"months"):0})}},{key:"createChart",value:function(){var t=this.props.data?this.props.data:[],e=this.props,n=e.revAsCircles,a=e.timeline,r={top:150,right:5,bottom:5,left:this.props.width/3},i=this.props.width-r.left-r.right,o=this.state.height-r.top-r.bottom,l=Object(y.a)(this.node);console.log(t),console.log(n),(t=m.a.sortBy(t,"Date_of_sale")).forEach(function(t){t.yRevBottom=0,t.yRevTop=0});var c=Object(D.b)(",.2f"),s=Object(v.a)().range([o,0]),u=Object(v.a)().range([o,0]),h={xOffset:0,yOffset:0,width:i/8,height:o,labelPositioning:{alpha:.5,spacing:18},leftTitle:"Lifting",rightTitle1:"Buyer",rightTitle2:"& Destination",leftSubTitle:"Date of Sale",rightSubTitle:"Payment Due Date",labelGroupOffset:5,labelKeyOffset:50,radius:6,subTitleYShift:20,unfocusOpacity:.3,revWidthMultiple:3.5,priceWidthMultiple:1.5,timelineWidthMultiple:.6},d={maxwidth:i/15>20?i/15:20,height:10,color:"#ecb600",highlightColor:"#CE1126",border:"#eee",volWidth:2.5,revBoxesPerCol:10,maxRevWidth:400,volTitle:"Volume (barrels)",priceTitle1:"Price",priceTitle2:"(US$)",revTitle1:"Revenue",revTitle2:"(US$)"},f=Object(j.a)().attr("class","d3-tip").offset([0,20]).direction(function(t){return n?"e":"se"}).html(function(t){return function(t,e){var n="<div class='tootltip' style='font-size:12px; border: 1px solid #ccc; background-color: rgba(255,255,255,0.9); padding:5px; max-width:350px; z-index:2000'>";return n+=t?"<div style='font-size:20px'>"+t+"</div>":"",e&&e.forEach(function(t){n+="<br/><strong>"+t.label+":</strong> ",n+="<div class='tootltip-value' style='font-size:18px;'>"+t.value+"</div>"}),n+="</div>"}(t.year,[{label:"Lifting",value:t.Lifting},{label:"Date of Sale",value:t.Date_of_sale.format("D MMM YYYY")},{label:"Payment Receipt Date",value:t.Payment_receipt_date.format("D MMM YYYY")},{label:"Price",value:"US$ "+c(t.Price)+" per barrel"},{label:"Volume",value:c(t.Volume)+" barrels"},{label:"Revenue",value:"US$ "+c(t.Revenue)},{label:"Buyer",value:t.Buyer},{label:"Destination",value:t.Destination}])});l.selectAll("g").remove();Object(x.a)(w.a).domain([0,10]),Object(E.c)("%s");var p=function(t,e){return a?s(t):u(e)},S=g(g.max(t.map(function(t){return t.Payment_receipt_date})).toDate()),R=g(g.min(t.map(function(t){return t.Date_of_sale})).toDate());s.domain([M.a.floor(S.add(2,"months")),M.a.floor(R.subtract(1,"months"))]),u.domain([t.length,-1]),console.log(s.domain()),console.log(M.a.range(M.a.floor(s.domain()[0]),M.a.ceil(s.domain()[1]))),a&&l.append("g").attr("class","grid").attr("transform","translate(0,"+r.top+")").call(function(t,e,n){return console.log(e,n),console.log(M.a.range(e,n).map(function(t){return+t})),Object(O.b)(s).tickValues(M.a.range(e,n).map(function(t){return+t}))}(this.state.months,s.domain()[1],s.domain()[0]).tickSize(2*-i).tickFormat(function(t){return Object(E.b)("%b %Y")(t)})),l.selectAll(".grid text").attr("dy",20).attr("dx",10);var T=l.append("g").attr("class","borderLines").attr("transform","translate("+r.left+","+r.top+")");T.append("line").attr("x1",0).attr("y1",0).attr("x2",0).attr("y2",h.height),T.append("line").attr("x1",h.width*h.timelineWidthMultiple).attr("y1",0).attr("x2",h.width*h.timelineWidthMultiple).attr("y2",h.height);var W=l.append("g").selectAll("g").data(t).enter().append("g").attr("transform","translate("+r.left+","+r.top+")").attr("class","slope-group").attr("id",function(t,e){t.id="group"+t.Lifting,t.sellDate=t.Date_of_sale.toDate(),t.paymentDate=t.Payment_receipt_date.toDate()}),C=(W.append("line").attr("class","slope-line").attr("x1",0).attr("y1",function(t,e){return p(t.sellDate,e)}).attr("x2",h.width*h.timelineWidthMultiple).attr("y2",function(t,e){return p(t.paymentDate,e)}),W.append("circle").attr("class",function(t){return"circle"}).attr("r",h.radius).attr("cy",function(t,e){return p(t.sellDate,e)}),W.append("g").attr("class","slope-label-left").each(function(t,e){t.xLeftPosition=-h.labelGroupOffset,t.yLeftPosition=p(t.sellDate,e)}));C.append("text").attr("class","label-figure-small").attr("x",function(t){return t.xLeftPosition}).attr("y",function(t){return t.yLeftPosition}).attr("dx",-10).attr("dy",h.subTitleYShift).attr("text-anchor","end").text(function(t){return t.Date_of_sale.format("D MMM YYYY")}),C.append("text").attr("class","label-figure").attr("x",function(t){return t.xLeftPosition}).attr("y",function(t){return t.yLeftPosition}).attr("dx",-10).attr("dy",3).attr("text-anchor","end").text(function(t){return t.Lifting});W.append("circle").attr("class",function(t){return"circle"}).attr("r",h.radius).attr("cx",h.width*h.timelineWidthMultiple).attr("cy",function(t,e){return p(t.paymentDate,e)});var Y=W.append("g").attr("class","slope-label-right").each(function(t,e){t.xRightPosition=h.width*h.timelineWidthMultiple+h.labelGroupOffset,t.yRightPosition=p(t.paymentDate,e)});Y.append("text").attr("class","label-figure-small").attr("x",function(t){return t.xRightPosition}).attr("y",function(t){return t.yRightPosition}).attr("dx",10).attr("dy",2*h.subTitleYShift).attr("text-anchor","start").text(function(t){return t.Payment_receipt_date.format("D MMM YYYY")}),Y.append("text").attr("class","label-figure").attr("x",function(t){return t.xRightPosition}).attr("y",function(t){return t.yRightPosition}).attr("dx",10).attr("dy",3).attr("text-anchor","start").text(function(t){return t.Buyer}),Y.append("text").attr("class","label-figure").attr("x",function(t){return t.xRightPosition}).attr("y",function(t){return t.yRightPosition}).attr("dx",10).attr("dy",3+h.subTitleYShift).attr("text-anchor","start").text(function(t){return t.Destination});var _=l.append("g").attr("transform","translate(0,"+r.top+")").attr("class","title");_.append("text").attr("text-anchor","end").attr("x",r.left).attr("dx",-10).attr("dy",-r.top/4).text(h.leftTitle),_.append("text").attr("text-anchor","end").attr("class","label-figure-small").attr("x",r.left).attr("dx",-10).attr("dy",-r.top/4+h.subTitleYShift).text(h.leftSubTitle),_.append("text").attr("x",r.left+h.width*h.timelineWidthMultiple).attr("dx",10).attr("dy",-r.top/4).text(h.rightTitle1),_.append("text").attr("x",r.left+h.width*h.timelineWidthMultiple).attr("dx",10).attr("dy",-r.top/4+h.subTitleYShift).text(h.rightTitle2),_.append("text").attr("class","label-figure-small").attr("x",r.left+h.width*h.timelineWidthMultiple).attr("dx",10).attr("dy",-r.top/4+2*h.subTitleYShift).text(h.rightSubTitle);var B=l.append("g").attr("transform","translate("+(r.left+h.width)+","+r.top+")").attr("class","price"),L=Object(v.a)().range([0,d.maxwidth]).domain([0,100]),A=Object(k.k)(t.map(function(t){return t.Revenue})),H=Object(v.a)().range([0,h.width]).domain([0,Math.sqrt(A)]);function I(t){return t.Lifting.split(" ").join("").toLowerCase()}var z=[],N=[];B.selectAll(".bar").data(t).enter().append("rect").attr("class",function(t){return"bar price "+I(t)}).attr("x",function(t){return h.width*h.priceWidthMultiple}).attr("width",function(t){return L(+t.Price)}).attr("y",function(t,e){return t.yRightPosition-d.height/2}).attr("fill",function(t){return d.color}).attr("stroke",function(t){return d.border}).attr("height",function(t){return d.height}).on("mouseover",function(t){f.show(t,this),Object(b.a)("."+I(t)).attr("fill",d.highlightColor),Object(b.a)(".annote."+I(t)).attr("display","block")}).on("mouseout",function(t){f.hide(),Object(b.a)("."+I(t)).attr("fill",d.color),Object(b.a)(".annote."+I(t)).attr("display","none")}),n&&(N.push(l.append("g").attr("transform","translate("+(r.left+h.width*h.revWidthMultiple)+","+r.top+")").attr("class",function(t){return"rev"})),N[0].selectAll(".bar").data(t).enter().append("circle").attr("class",function(t){return"bar rev "+I(t)}).attr("cx",function(t){return h.width}).attr("r",function(t){return H(Math.sqrt(+t.Revenue))}).attr("cy",function(t){return t.yRightPosition}).attr("fill",function(t){return d.color}).attr("stroke",function(t){return d.border}).on("mouseover",function(t){f.show(t,this),Object(b.a)("."+I(t)).attr("fill",d.highlightColor),Object(b.a)(".annote."+I(t)).attr("display","block")}).on("mouseout",function(t){f.hide(),Object(b.a)("."+I(t)).attr("fill",d.color),Object(b.a)(".annote."+I(t)).attr("display","none")})),_.append("text").attr("text-anchor","start").attr("x",r.left+h.width*(h.priceWidthMultiple+1)).attr("dx",-10).attr("dy",-r.top/4).text(d.priceTitle1),_.append("text").attr("text-anchor","start").attr("x",r.left+h.width*(h.priceWidthMultiple+1)).attr("dx",-10).attr("dy",-r.top/4+h.subTitleYShift).text(d.priceTitle2),_.append("text").attr("text-anchor","start").attr("x",0).attr("dx",0).attr("dy",-r.top/4).text(d.volTitle),_.append("text").attr("text-anchor","start").attr("x",r.left+h.width*h.revWidthMultiple).attr("dx",0).attr("dy",-r.top/4).text(d.revTitle1),_.append("text").attr("x",r.left+h.width*h.revWidthMultiple).attr("dx",0).attr("dy",-r.top/4+h.subTitleYShift).text(d.revTitle2);var V=t.map(function(t){return m.a.range(0,Math.round(t.Volume/1e4))});t.forEach(function(e,a){z.push(l.append("g").attr("transform","translate(10,"+r.top+")").attr("class",function(t){return"volume"})),N.push(l.append("g").attr("transform","translate("+(r.left+h.width*h.revWidthMultiple)+","+r.top+")").attr("class",function(t){return"rev"})),z[a].selectAll(".bar").data(V[a]).enter().append("rect").attr("class",function(t){return"bar vol "+I(e)}).attr("x",function(t,e){return d.volWidth*e}).attr("width",function(t){return d.volWidth}).attr("y",function(t,n){return e.yLeftPosition-d.height/2}).attr("fill",function(t){return d.color}).attr("stroke",function(t){return d.border}).attr("height",function(t){return d.height}).on("mouseover",function(t){f.show(e,this),Object(b.a)("."+I(e)).attr("fill",d.highlightColor),Object(b.a)(".annote."+I(e)).attr("display","block")}).on("mouseout",function(t){f.hide(),Object(b.a)("."+I(e)).attr("fill",d.color),Object(b.a)(".annote."+I(e)).attr("display","none")}),n||N[a].selectAll(".bar").data(V[a]).enter().append("rect").attr("class",function(t){return"bar rev "+I(e)}).attr("x",function(t,n){var a=L(+e.Price);return Math.floor(n/d.revBoxesPerCol)*a}).attr("width",function(t){return L(+e.Price)}).attr("y",function(n,r){var i=r%d.revBoxesPerCol,o=e.yRightPosition-d.height/2+d.height*i;return t[a].yRevBottom=t[a].yRevBottom>o+d.height?t[a].yRevBottom:o+d.height,o}).attr("fill",function(t){return d.color}).attr("stroke",function(t){return d.border}).attr("height",function(t){return d.height}).on("mouseover",function(t){f.show(e,this),Object(b.a)("."+I(e)).attr("fill",d.highlightColor),Object(b.a)(".annote."+I(e)).attr("display","block")}).on("mouseout",function(t){f.hide(),Object(b.a)("."+I(e)).attr("fill",d.color),Object(b.a)(".annote."+I(e)).attr("display","none")}),l.append("g").attr("transform","translate(0,"+r.top+")").append("text").attr("text-anchor","left").attr("class",function(t){return"annote vol "+I(e)}).attr("x",10).attr("dx",0).attr("y",e.yLeftPosition-10).attr("fill",d.color).attr("display","none").text(c(e.Volume)+" barrels"),l.append("g").attr("transform","translate(0,"+r.top+")").append("text").attr("text-anchor","middle").attr("class",function(t){return"annote price "+I(e)}).attr("x",r.left+h.width*(h.priceWidthMultiple+1.25)).attr("dx",0).attr("y",e.yRightPosition).attr("dy",-10).attr("fill",d.color).attr("display","none").text("US$ "+c(e.Price)+" per barrel"),l.append("g").attr("transform","translate(0,"+r.top+")").append("text").attr("text-anchor","left").attr("class",function(t){return"annote rev "+I(e)}).attr("x",function(){var t=r.left+h.width*(h.revWidthMultiple+.5);return n?t-h.width:t}).attr("dx",0).attr("y",function(r){t[a].yRevTop=e.yRightPosition-30;var i=e.yRightPosition-10;return n?i-h.width:i}).attr("fill",d.color).attr("display","none").text("US$ "+c(e.Revenue)+" in revenue ")}),console.log(t);for(var U=0,$=t.length-1;$>0;$--)for(var F=t.length-1;F>0;F--)if((U=t[F-1].yRevBottom>t[F].yRevTop?t[F-1].yRevBottom-t[F].yRevTop:0)>0){Object(b.a)(".rev."+I(t[F-1])).attr("transform","translate(0,"+-U+")"),t[F-1].yRevBottom-=U,t[F-1].yRevTop-=U;break}l.call(f),Object(y.a)(".MainChart").call(Object(P.downloadable)())}},{key:"render",value:function(){var t=this;return r.a.createElement("div",{className:"MainVizComponent"},r.a.createElement("svg",{className:"MainChart",ref:function(e){return t.node=e},width:this.props.width,height:this.state.height}))}}]),e}(a.Component);S.defaultProps={};var R=n(160),T=n(161),W=n.n(T),C=(n(184),n(236),n(156),function(t){var e=t.numPersons,n=Math.floor(Math.sqrt(e)),a=function(t){return t?"rgba(180,0,0,0.5)":"none"},i=function(t,n,i,o,l){return r.a.createElement("g",{key:o*e+l,className:"person"},r.a.createElement("rect",{width:16,height:16,x:o,y:l,fill:a(n)}),r.a.createElement("text",{textAnchor:"middle",alignmentBaseline:"middle",fill:"black",fontSize:16,x:o+8,y:l+9.6},function(t){switch(t){case"normal":return"\ud83d\ude42";case"mild":return"\ud83e\udd12";case"severe":return"\ud83e\udd22";case"dead":return"\ud83d\udc80";case"bedempty":return"\ud83d\udecf";case"bedful":return"\ud83d\udecc";default:return"\ud83d\ude42"}}(t)))};return r.a.createElement("svg",{className:"SimComponent",width:t.width,height:t.height},r.a.createElement("g",null,function(e){var a=[],r=.9*t.width;return e.People.forEach(function(t,e){t.forEach(function(t,o){var l=["normal","mild","severe","dead"][t.health];a.push(i(l,t.infected,"population",e/n*r,o/n*r))})}),a}(t.worldState)))}),Y=n(81),_=function(t,e){var n,a={People:Object(Y.a)(Array(t).keys()).map(function(e){return Object(Y.a)(Array(t).keys()).map(function(t){return H({initX:e,initY:t})})}),infections:{infected:e,notInfected:t*t-e},health:{healthy:t*t,mildlySick:0,severelySick:0,dead:0}};if(e){for(var r=[];r.length<e;){var i=(n=t*t,Math.floor(Math.random()*(n-0+1))+0);i in r||r.push(i)}console.log(r),r.forEach(function(e){return a.People[Math.floor(e/t)][e%t].infected=!0})}return a},B=function(t,e,n){t.People.length;var a=t.People,r=[];return a.forEach(function(t,i){r[i]=[],t.forEach(function(t,o){var l=L(a[i][o],a,e);r[i][o]=a[i][o].calcInfected(l,n,a[i][o].infectedDays)})}),t.infections={infected:0,notInfected:0},t.health={healthy:0,mildlySick:0,severelySick:0,dead:0},a.forEach(function(e,n){e.forEach(function(e,i){a[n][i].infected=r[n][i],r[n][i]?(t.infections.infected++,a[n][i].infectedDays++):t.infections.notInfected++,a[n][i].health=a[n][i].calcHealth(a[n][i].infected,a[n][i].infectedDays,a[n][i].health,a[n][i].hospitalised),0===a[n][i].health?t.health.healthy++:1===a[n][i].health?t.health.mildlySick++:2===a[n][i].health?t.health.severelySick++:3===a[n][i].health&&t.health.dead++})}),{People:a,infections:t.infections,health:t.health}},L=function(t,e,n){return{0:n[t.x][t.y][0].map(function(t){return e[t[0]][t[1]]})}},A=function(t){var e=t-1;return Object(Y.a)(Array(t).keys()).map(function(n){return Object(Y.a)(Array(t).keys()).map(function(t){return n<e&&t<e&&n>0&&t>0?{0:[[n-1,t-1],[n,t-1],[n+1,t-1],[n-1,t],[n+1,t],[n-1,t+1],[n,t+1],[n+1,t+1]]}:0===n&&0===t?{0:[[1,0],[1,1],[0,1]]}:0===n&&t===e?{0:[[0,e-1],[1,e-1],[1,e]]}:n===e&&0===t?{0:[[e-1,0],[e-1,1],[e,1]]}:n===e&&t===e?{0:[[e-1,e-1],[e-1,e],[e,e-1]]}:0===n?{0:[[n,t-1],[n+1,t-1],[n+1,t],[n,t+1],[n+1,t+1]]}:0===t?{0:[[n-1,t],[n+1,t],[n-1,t+1],[n,t+1],[n+1,t+1]]}:n===e?{0:[[n-1,t-1],[n,t-1],[n-1,t],[n-1,t+1],[n,t+1]]}:t===e?{0:[[n-1,t-1],[n,t-1],[n+1,t-1],[n-1,t],[n+1,t]]}:void 0})})},H=function(t){var e=t.initName,n=t.initX,a=t.initY,r=t.initHealth,i=t.initInfected,o=t.initImmune;return{name:e||"John",x:n||0,y:a||0,health:r||0,infected:i||!1,hospitalised:!1,infectedDays:0,immune:o||!1,calcInfected:function(t,e,n){var a=1;return Object.keys(t).forEach(function(n){var r=t[n].filter(function(t){return t.infected}).length;a*=Math.pow(1-.6/e*Math.pow(.9,n),r)}),0===n?Math.random()>a:!(n>=20)},calcHealth:function(t,e,n,a){var r=Math.random();if(!t){if(0===n)return r<.05?1:r<.05+.002?2:0;if(1===n)return r<.9?0:r<1?2:1;if(2===n&&!a)return r<.85?0:r<.98?2:3;if(2===n&&a)return r<.97?0:r<.99?2:3;if(3===n)return 3}if(t){if(0===n)return r<.8?1:r<1?2:0;if(1===n)return r<.9?0:r<1?2:1;if(2===n&&!a)return r<.58?0:r<.98?2:3;if(2===n&&a)return r<.9?0:r<.99?2:3;if(3===n)return 3}}}},I=function(t){function e(){var t;return Object(c.a)(this,e),(t=Object(u.a)(this,Object(h.a)(e).call(this))).handleTick=function(){setInterval(t.setState({world:B(t.state.world,t.state.neighborAddresses,t.state.distancing)}),1e3)},t.handleDistancing=function(e){t.setState({distancing:e?10:1})},t.handleReset=function(){t.setState({world:_(32,1)})},t.state=Object(l.a)({},t.props,{dimensions:{width:window.innerWidth,height:window.innerHeight},distancing:5,neighborAddresses:A(32),world:_(32,1)}),t.updateDimensions=t.updateDimensions.bind(Object(d.a)(t)),t.handleTick=t.handleTick.bind(Object(d.a)(t)),t}return Object(f.a)(e,t),Object(s.a)(e,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.updateDimensions),console.log("mounted")}},{key:"updateDimensions",value:function(){this.setState({dimensions:{height:window.innerHeight,width:window.innerWidth}})}},{key:"render",value:function(){for(var t=!!m.a.isEmpty(this.state.world),e=0;e<150;e++);return t?null:r.a.createElement("div",{className:"App"},r.a.createElement("header",null,r.a.createElement("div",{className:"application"},r.a.createElement(R.Helmet,null,r.a.createElement("meta",{charSet:"utf-8"}),r.a.createElement("meta",{name:"viewport",content:"width=1100,initial-scale=0.3,shrink-to-fit=yes"})))),r.a.createElement("div",{className:"uiWidgetContainer"},r.a.createElement("label",null,r.a.createElement("span",null,"COVID-19 Simulation"),r.a.createElement("br",null),r.a.createElement("button",{onClick:this.handleTick},"Play"),r.a.createElement("br",null),r.a.createElement("button",{onClick:this.handleReset},"Reset"),r.a.createElement("br",null),"Distancing ",r.a.createElement(W.a,{onChange:this.handleDistancing,checked:10===this.state.distancing}),r.a.createElement("br",null),r.a.createElement("div",null,"Healthy: ",this.state.world.health.healthy," | Mildly Sick: ",this.state.world.health.mildlySick," | Severely Sick: ",this.state.world.health.severelySick," | Dead: ",this.state.world.health.dead))),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("div",{className:"vizContainer"},r.a.createElement(C,{width:700,height:700,numPersons:1024,worldState:this.state.world,distancing:this.state.distancing})))}}]),e}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(I,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}},[[164,1,2]]]);
//# sourceMappingURL=main.4ef94871.chunk.js.map