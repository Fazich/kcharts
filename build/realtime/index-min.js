/*!build time : 2015-04-14 1:37:57 PM*/
KISSY.add("kg/kcharts/6.0.1/realtime/index",function(a,b,c,d,e,f,g,h,i){function j(a){for(var b=[],c=[],d=0;d<a.length;d++){var e=a[d],f=e.data;if(f)for(var g=0;g<f.length;g++){var h=f[g];b.push("number"==typeof h[0]?h[0]:null),c.push("number"==typeof h[1]?h[1]:null)}}return{dates:b,values:c}}function k(a,b,c,d){for(var e=[],f=b.range,g=c.range,h=0,i=a.length;i>h;h++){var j;if(a[h].hided)j=[];else{var k=a[h];j={data:[],name:k.name};for(var l=0,m=k.data.length;m>l;l++){var n=k.data[l],o=n[0],p=n[1],q=d(f,g,o,p);q&&j.data.push(q)}}e.push(j)}return e}function l(a,b){b||(b={}),b.n||(b.n=5);var c=Math.min.apply(Math,a),d=Math.max.apply(Math,a);b.range&&"number"==typeof b.range.min&&c>b.range.min&&(c=b.range.min),b.range&&"number"==typeof b.range.max&&d<b.range.max&&(d=b.range.max);var e=f.axis(c,d,b.n),g=Math.min.apply(Math,e),h=Math.max.apply(Math,e),i={min:g,max:h,range:e};return i}function m(a,b){b||(b={n:5});var c=f.getlabel(a,b.n),d=c.min,e=c.max,g={unit:c.unit,min:d,max:e,range:c.dates};return g}function n(a,b,c){var d=a,e=Math.floor((b-a)/c);d=a+e*c;for(var f=[],g=a;d>=g;g+=c)f.push(g);return{range:f,min:a,max:d,len:e}}function o(a){for(;a.length;){var b=a.pop();b&&b.remove&&b.remove()}}function p(a){for(var b,c=0,d=a.length;d>c;c++){var e=a[c],f=e.x,g=e.y;c?b.push("L",f,g):b=["M",f,g]}return b.join(",")}function q(a){var b,c,d,e,g=[];if(a.length<=2)for(var h=0,i=a.length;i>h;h++)c=a[h],d=c.x,e=c.y,d=f.roundToFixed(d,100),e=f.roundToFixed(e,100),h?g.push("L",d,e):g.push("M",d,e);else for(var h=0,i=a.length;i>h;h++)c=a[h],d=c.x,e=c.y,d=f.roundToFixed(d,100),e=f.roundToFixed(e,100),h?g.push(d,e):g.push("M",d,e,"R");return b=g.join(",")}function r(a,b){for(var c,d,e,f=[],g=[],h=0,i=a.length;i>h;h++)c=a[h],d=c.x,e=c.y,null===d?(f.push(g),g=[]):g.push(c);f.push(g);for(var j="",k=0,l=f.length;l>k;k++)j+=b(f[k]);return j}function s(a,b,c){for(var d,e,g=[],h=0,i=c.n;i>h;h++)d=h/(i-1),c.ratio=d,e=f.verticalLine(a,b,c),g.push(e);return g}function t(a,b,c){if(c||(c={}),arguments.length<2)return!1;for(var d,e,g,h,i,j=c.style||{},k=j.ruller||"-.",l=[],m=1,n=a.length;n>m;m++){if(d=a[m],"-."===k)e=d.x0,h=d.y0,c.xaxis?(g=d.x2,i=d.y2):(g=d.x1,i=d.y1);else if(".-"===k)c.xaxis?(e=d.x0,h=d.y0,g=d.x2,i=d.y2):(e=d.x0,h=d.y0,g=d.x1,i=d.y1);else{if("-.-"!==k)return!1;e=d.x1,h=d.y1,g=d.x2,i=d.y2}l.push("M",f.roundToFixed(e,10),f.roundToFixed(h,10),"L",f.roundToFixed(g,10),f.roundToFixed(i,10))}var o=l.join(","),p=c.path;if(p)p.animate({path:o},200);else{var q=G(j.style);p=b.path(o).attr(q)}return p}function u(a,b){var c,d,e=b.xmin,f=b.xmax,g=b.ymin,h=b.ymax,i=b.px,j=b.py,k=a[0],l=a[1],m=b.width,n=b.height;return null===k||null===l?(c=null,d=null):(c=(k-e)/(f-e)*m+i,d=n-(l-g)/(h-g)*n+j),[c,d]}function v(a,b){for(var c=[],d=0;d<a.length;d++){var e=[];c.push(e);var f=a[d],g=f.data;if(g)for(var h=0;h<g.length;h++){var i,j,k=g[h],l=u(k,b);i=l[0],j=l[1],e.push({x:i,y:j,rawx:k[0],rawy:k[1]})}}return c}function w(a,c){function f(){g.attr({stroke:i.DEFAULT,"stroke-width":2}),g.hover(function(a){g.attr({stroke:i.HOVER,"stroke-width":3})},function(a){g.attr({stroke:i.DEFAULT,"stroke-width":2})})}var g,h,i,j=new d.Defer,k=j.promise,l=(c.context,c.paper);h=l.set(),i=c.color;var m,n;if(n="arc"===c.lineType?r(a,q):r(a,p),c.$line)g=c.$line,g.animate({path:n},200),setTimeout(function(){j.resolve({$line:g,$points:h,color:i})},0);else{var o,s=b.getTotalLength(n);m=e.AnimateObject([{from:{per:0},to:{per:1},frame:function(a,c,d,e,h){var i=b.getSubpath(n,0,c*s);g?g.attr({path:i}):(g=l.path(i),f()),o=c},endframe:function(a,b,c,d,e){1!==o&&g.attr({path:n}),j.resolve({$line:g,$points:h,color:i})}}],{easing:"easeNone",duration:1e3})}return c.pointConfig.isShow!==!1&&U(a,function(a,b){var c=l.circle(a.x,a.y,4);c.attr({stroke:"#fff",fill:i.DEFAULT,"stroke-width":2}),h.push(c)}),k}function x(a){var b=(a.$line,a.$points);b&&b.unhover(),b&&b.remove()}function y(a){if(a)for(var b=0,c=a.length;c>b;b++)x(a[b])}function z(a){for(var b,c,d=0,e=a.length;e>d;d++)b=a[d].$line,b&&b.hide(),c=a[d].$points,c&&c.unhover(),c&&c.remove()}function A(a,b){var c=a.get("$lines");return c&&c[b]}function B(a){var b=/(\d+)?(day|week|month)/,c=a.match(b);if(!c)return!1;var d,e;d=c.length>1?parseInt(c[1])||1:1,e=c[2];var f,g=[];if("day"===e)g.push(0),f=24*d-1;else if("week"===e)f=7*d;else if("month"===e){var h=new Date;f=new Date(h.getFullYear(),h.getMonth()+1,0).getDate(),f*=d}for(var i=1;f>=i;i++)g.push(i);return g}function C(a){return 10>a?"0"+a:a}function D(a,b){if("day"===b)return C(a)+":00";if("week"===b){var c=["\u4e00","\u4e8c","\u4e09","\u56db","\u4e94","\u516d","\u65e5"];return"\u661f\u671f"+c[a-1]}return"month"===b?f.formatDate(new Date,"yyyy-MM")+"-"+C(a,2):!1}function E(a,b){var c=B(b),d=c[0],e=c[c.length-1];return a>=d&&e>=a?!1:!0}function F(a){var b=a.currentTarget;if(a.offsetX)return{offsetX:a.offsetX,offsetY:a.offsetY};var c=g.offset(b);return{offsetX:a.offsetX||a.clientX-c.left,offsetY:a.offsetY||a.clientY-c.top}}function G(b){return a.merge({stroke:"#999","stroke-width":"1"},b)}function H(a,c,d,e){for(var g,h,i,j,k,l=e.paper,m=e.context,n=[],o=1,p=d.length;p>o;o++)e.vertical?(g=d[o].x0,h=d[o].y0,i=g,j=a,k="$yGrid"):(g=d[o].x0,h=d[o].y0,i=c,j=h,k="$xGrid"),n.push("M",g,h,"L",i,j);var q=m.get(k);return q?q.attr({path:n.join(",")}):(q=l.path(n.join(",")),m.set(k,q),q.attr(G()),f.fixSVGLineStyle(q,b.svg)),q}function I(a,b,c){c||(c="x");for(var d=[],e=!1,f=0,g=a.length;g>f;f++){for(var h=null,i=0,j=a[f].length;j>i;i++){if(J(a[f][i],b,c)){h=a[f][i],e=!0;break}h=null}d.push(h)}return e?d:!1}function J(a,b,c){return"number"==typeof a[c]?Math.abs(a[c]-b)<3:!1}function K(a){var b=a.get("$floatPointer");return b||(b=[],a.set("$floatPointer",b)),b}function L(a,c){var d=a.get("$floatLine");if(!d){d=a.get("paper").path(""),a.set("$floatLine",d);var e=a.get("$lines"),g=e[0];d.insertBefore(g),f.fixSVGLineStyle(d,b.svg)}if(c&&c.pt){var h=c.type;if("arrow"===h){var i=N({x:c.pt.x,y:c.padding.paddingy},{x:c.pt.x,y:c.padding.paddingy+c.innerHeight});d.attr(W({path:i,"stroke-width":0,fill:"#bbb"},c.attr))}else{var i=["M",c.pt.x,c.padding.paddingy,"L",c.pt.x,c.padding.paddingy+c.innerHeight].join(",");d.attr({path:i}).attr(W(G(),c.attr))}}return d}function M(a,b){var c=b.context,d=c.getBBox();return a.x>=d.left&&a.x<=d.left+d.width&&a.y>=d.top&&a.y<=d.top+d.height}function N(a,b){var c=6,d=6,e={x:a.x-c,y:a.y},f={x:a.x+c,y:a.y},g={x:a.x,y:a.y+d},h={x:b.x,y:b.y-d},i={x:b.x+c,y:b.y},j={x:b.x-c,y:b.y},k="M",l="L",m=[k,e.x,e.y,l,f.x,f.y,l,g.x,g.y,l,h.x,h.y,l,i.x,i.y,l,j.x,j.y,l,h.x,h.y,l,g.x,g.y,l,e.x,e.y,"Z"];return m.join(",")}function O(a){var b=this.get("$tip");b&&b.hide()}function P(a){if(!this._isRunning){var b=F(a),c=b.offsetX,d=b.offsetY;if(M({x:c,y:d},{context:this})){R&&clearTimeout(R);var e,g=this.get("seriesPoints"),h=I(g,c,"x"),i=this.get("paper"),j=this,k=this.get("$series"),l=K(this);if(h){var m=[];U(h,function(a,b){a?(l[b]?l[b].attr({cx:a.x,cy:a.y,fill:k[b].color.DEFAULT,stroke:"#fff","stroke-width":2}):(l[b]=i.circle(a.x,a.y,5),k[b]&&k[b].color&&l[b].attr({fill:k[b].color.DEFAULT,stroke:"#fff","stroke-width":2})),m.push({index:b,xvalue:a.rawx,yvalue:a.rawy}),l[b].show()):l[b]&&l[b].hide()});var n=f.averagePoints(h);if(n){j.fire("pointover",{x:f.roundToFixed(n.x,10),y:f.roundToFixed(n.y,10),data:m});var o=this.get("hoverLineOption")||{};if(o.isShow!==!1){var p=this.getPadding();o.pt=n,o.padding=p,o.innerHeight=j.get("innerHeight"),o.innerWidth=j.get("innerWidth"),e=L(this,o),e.show()}}}R=setTimeout(function(){U(l,function(a){a&&a.hide()}),e=L(j),e&&e.hide()},1e3)}}}function Q(a){var b=a.get("$xgrid"),c=a.get("$ygrid");b&&b.toBack(),c&&c.toBack()}var R,S,T="{COLOR}",U=a.each,V=(a.map,a.indexOf),W=a.merge,X={inititialize:function(){var a=this.get("renderTo"),b=g.get(a);this.set("container",b);var c=this.get("theme")||"ks-chart-default";this.colorManager=new i({themeCls:c}),this.updateContainer();var d=this;setTimeout(function(){d.render(),d.bindEvent()},0)},render:function(){var c=this;if(this._isRunning)return this._runningTimer&&clearTimeout(this._runningTimer),void(this._runningTimer=setTimeout(function(){c.render()},300));if(this.fire("beforeRender")!==!1){for(this._isRunning=!0,this._gc_el||(this._gc_el=[]);this._gc_el.length;){var d=this._gc_el.pop();d.remove()}var e=this.get("container"),g=this.get("paper"),h=this.get("series")||[];if(0===h.length)return void z(this.get("$series"));var i=this.get("width"),o=this.get("height"),q=this.get("innerWidth"),r=this.get("innerHeight"),u=this.getPadding(),x=u.paddingx,y=u.paddingy;g||(g=b(e,i,o),this.set("paper",g));var C=this.get("yAxis")||{},F=this.get("xAxis")||{},I=F.range;U=I&&I.duration,h=k(h,F,C,function(a,b,c,d){return a&&"number"==typeof a.min&&c<a.min||a&&"number"==typeof a.max&&c>a.max||b&&"number"==typeof b.min&&d<b.min||b&&"number"==typeof b.max&&d>b.max?!1:"number"!=typeof c||"number"!=typeof d?[null,null]:U&&E(c,U)?!1:[c,d]});var J=j(h);if(J.values.length){this.removeElements();{var K,L,M,N,O,P,R,S,T,U,V=this.get("$xlabels"),W=this.get("$ylabels"),X=(this.get("$jointPoints"),l(J.values,{range:C.range,n:5})),Y=X.range.length;this.get("fixedInterval")}if(I)if(U)if(K=B(U),U.indexOf("day")>-1)M=0,O=K[K.length-1],R=K.length;else if(U.indexOf("week"))M=1,O=K[K.length-1],R=K.length;else{if(!U.indexOf("month"))throw Error("duration is not in correct format");M=1,O=K[K.length-1],R=K.length}else{var Z=I.min,$=I.max,_=I.step||1;I.isDate!==!1&&(T=!0),"number"!=typeof Z&&(Z=Math.min.apply(Math,J.dates)),"number"!=typeof $&&($=Math.max.apply(Math,J.dates));var aa=n(Z,$,_);K=aa.range,M=aa.min,O=aa.max,R=aa.len}else{T=!0;var ba={n:C.num};if(!J.dates.length)return;{var ca=m(J.dates,ba),da=ca.range.length,ea=ca.min,fa=ca.max;ca.unit}K=ca.range,M=ea,O=fa,R=da}L=X.range,N=X.min,P=X.max,S=Y;var ga=v(h,{xmin:M,xmax:O,ymin:N,ymax:P,px:x,py:y,width:q,height:r});this.set("seriesPoints",ga),this.set("rangeData",{xmin:M,xmax:O,ymin:N,ymax:P});var ha=this.get("$series");ha||(ha=[],this.set("$series",ha)),a.each(ga,function(a,b){var d=c.colorManager.getColor(b),e=c.get("point"),f=c.get("lineType"),h=c.get("$lines");h||(h=[],c.set("$lines",h));var i,j=A(c,b),k=c.get("series"),l=k[b];l.hided?(i={color:d,$path:null},h[b]=i.$line,i.name=l.name,ha[b]=i):(w(a,{paper:g,color:d,$line:j,lineType:f,pointConfig:e,context:c}).then(function(a){h[b]=a.$line,a.name=l.name,ha[b]=a,c.renderLegend().then(function(){c.fire("afterRender"),c._isRunning=!1}).fail(function(a){window.console&&window.console.log(a)}),Q(c)}).fail(function(a){}),j&&j.show())});for(var ia=[],ja=[],ka=0;R>ka;ka++){var la,ma;la=ka/(R-1)*q+x,ma=o-y,0===ka?ia.push({x:la,y:ma}):ka===R-1&&ia.push({x:la,y:ma});var na;if(T){var oa=this.get("dateformat")||"yyyy-MM-dd";na=f.formatDate(new Date(K[ka]),oa)}else na=U?D(ka,U):K[ka];var pa=this.get("xLabel");pa.hook&&a.isFunction(pa.hook)&&(na=pa.hook.call(c,na));var qa=g.text(la,ma,na);qa.attr(pa&&pa.rotate?{"text-anchor":"end",transform:"t-5,5r-45,"+la+","+ma}:{transform:"t0,12"}),V.push(qa)}for(var ra=0;S>ra;ra++){var la,ma;la=x,ma=o-y-ra/(S-1)*r,0===ra?ja.push({x:la,y:ma}):ra===S-1&&ja.push({x:la,y:ma});var sa=g.text(la,ma,X.range[ra]).attr({"text-anchor":"end",transform:"t-5,0"});W.push(sa)}var ta=y,ua=x+q,va=c.get("yRuller")||{},wa=x,xa=y+r,ya=x,za=y,Aa=S,Ba=s([wa,xa],[ya,za],{n:Aa,scale:va.size||5}),Ca=this.get("$rullerY");if(va.isShow!==!1){var Da=t(Ba,g,{yaxis:!0,style:va,path:Ca});Ca||(this.set("$rullerY",Da),f.fixSVGLineStyle(Da,b.svg))}var Ea,Fa,Ga=this.get("xGrid")||{};Ga.isShow!==!1&&(Ea=H(ta,ua,Ba,{paper:g,context:c}),this.set("$xgrid",Ea));var Ha=c.get("xRuller")||{},Ia=x,Ja=y+r,Ka=x+q,La=y+r,Ma=R,Na=s([Ia,Ja],[Ka,La],{n:Ma,scale:Ha.size||5});if(Ha.isShow!==!1){var Oa=this.get("$rullerX"),Pa=t(Na,g,{xaxis:!0,style:Ha,path:Oa});Oa||(this.set("$rullerX",Pa),f.fixSVGLineStyle(Pa,b.svg))}var Qa=this.get("yGrid")||{};Qa.isShow!==!1&&(Fa=H(ta,ua,Na,{paper:g,vertical:!0,context:c}),this.set("$ygrid",Fa));var Ra,Sa;if(F.isShow!==!1){Ra=F.arrow?ia.map(function(a,b){return b?{x:a.x+15,y:a.y}:{x:a.x,y:a.y}}):ia;var Ta=g.path(p(Ra)).attr(G(a.merge({"stroke-width":1.5},F.attr)));F.arrow===!0&&Ta.attr({"arrow-end":"classic-wide-long"}),this.set("$xaxis",Ta),f.fixSVGLineStyle(Ta,b.svg)}if(C.isShow!==!1){Sa=C.arrow?ja.map(function(a,b){return b?{x:a.x,y:a.y-15}:{x:a.x,y:a.y}}):ja;var Ua=g.path(p(Sa)).attr(G(a.merge({"stroke-width":1.5},C.attr)));C.arrow===!0&&Ua.attr({"arrow-end":"classic-wide-long"}),this.set("$yaxis",Ua),f.fixSVGLineStyle(Ua,b.svg)}var Va=this.get("xAxisLabel")||{};if(Va.isShow!==!1&&Ra){var Wa=Va.text||"x",Xa=g.text(Ra[1].x,Ra[1].y,Wa).attr({"text-anchor":"start"});this.addGCel(Xa)}var Ya=this.get("xAxisLabel")||{};if(Ya.isShow!==!1&&Sa){var Za=Va.text||"y",$a=g.text(Sa[1].x,Sa[1].y,Za).attr({"text-anchor":"end"});this.addGCel($a)}var _a=this.get("tip");_a&&0!=_a&&this.renderTip()}}},updateContainer:function(){var a,b,c=this.get("container"),d=g.width(c),e=g.height(c);this.set("width",d),this.set("height",e);var f,h,i=this.getPadding();f=i.paddingx,h=i.paddingy,a=d-2*f,b=e-2*h,this.set("innerWidth",a),this.set("innerHeight",b)},bindEvent:function(){var a=this.get("container");h.on(a,"mouseleave",O,this);this.get("point");h.on(a,"mousemove",P,this)},unbindEvent:function(){var a=this.get("container");h.detach(a,"mouseleave",O)},clearData:function(){this.set("series",[])},data2point:function(a){var b,c,d=this.get("innerWidth"),e=this.get("innerHeight"),f=this.getPadding(),g=this.get("rangeData"),h=a[0],i=a[1];return"number"==typeof h&&(b=f.paddingx+(h-g.xmin)/(g.xmax-g.xmin)*d),"number"==typeof i&&(c=f.paddingy+(e-(i-g.ymin)/(g.ymax-g.ymin)*e)),[b,c]},text:function(a,b,c,d){d||(d={});var e,f,g,h,i=this.data2point([a,b]);if("number"==typeof i[0]&&"number"==typeof i[1]){e=this.get("paper"),g=i[0],h=i[1];var j=d.attr||{},k=d.offset||{},l=k.x||0,m=k.y||0;f=e.text(g+l,h+m,c).attr(j),0!=d.autoGC&&this.addGCel(f)}return f},addGCel:function(a){this._gc_el||(this._gc_el=[]),-1===V(a,this._gc_el)&&this._gc_el.push(a)},drawLine:function(a,c){c||(c={});var d,e=a.split("="),g=e[0],h=parseFloat(e[1]),i=this.get("innerWidth"),j=this.get("innerHeight"),k=this.getPadding(),l=this.get("paper"),m={},n={};if(c.raw)"x"===g?(m.x=h,m.y=k.paddingy,n.x=m.x,n.y=j+k.paddingy):(m.x=k.paddingx,m.y=h+k.paddingy,n.x=i+k.paddingx,n.y=h+k.paddingy);else{var o=this.get("rangeData");if("x"===g){if(h>o.xmax||h<o.xmin)return!1;m.x=k.paddingx+(h-o.xmin)/(o.xmax-o.xmin)*i,m.y=k.paddingy,n.x=m.x,n.y=m.y+j}else{if(h>o.ymax||h<o.ymin)return!1;m.x=k.paddingx,m.y=(h-o.ymin)/(o.ymax-o.ymin)*j,m.y=k.paddingy+j-m.y,n.x=m.x+i,n.y=m.y}}return d=l.path(["M",m.x,m.y,"L",n.x,n.y].join(",")),f.fixSVGLineStyle(d,b.svg),d.attr(G(c.style)),{$path:d,start:m,end:n}},getBBox:function(){var a=this.getPadding(),b=this.get("innerWidth"),c=this.get("innerHeight");return{width:b,height:c,left:a.paddingx,top:a.paddingy}},getPadding:function(){var b=a.isNumber(this.get("paddingx"))?this.get("paddingx"):15,c=a.isNumber(this.get("paddingy"))?this.get("paddingx"):15;return{paddingx:b,paddingy:c}},buildLegendParts:function(){var b=[],c="";return b=a.map(this.get("$series"),function(a){return c+=a.name,{DEFAULT:a.color.DEFAULT,HOVER:a.color.HOVER,text:a.name,$path:a.$path}}),this.legendString=c,b},renderLegend:function(){var c=this,e=c.get("legend"),f=new d.Defer,g=f.promise;if(e&&0!=e.isShow){var h=this.get("$legend");h&&h.destroy&&h.destroy(),a.use("kg/kcharts/6.0.1/legend/index",function(a,d){var g=c.get("paper"),h=c.get("container"),i=(c.getPadding(),c.legendString),j=c.buildLegendParts(),k=c.legendString;if(i===k)return void f.resolve();var l=this.get("legend");l&&l.destroy&&l.destroy();var m={paper:g,container:h,bbox:c.getBBox(),iconAttrHook:function(a){var b=j[a].color;return{fill:b}},spanAttrHook:function(a){var c=b.getRGB(j[a].DEFAULT);return{color:c.hex}},config:j};l=new d(a.merge(m,e)),l.on("click",function(a){var b=a.index,c=(a.text,a.icon,a.el);1!=c.hide?(this.hideLine(b),c.hide=1,c.disable()):(this.showLine(b),c.hide=0,c.enable())},c),c.set("legend",l),f.resolve()})}return g},renderTip:function(b){if(!this.get("$tip")&&(b||(b=this.get("tip")),b)){var c=this,d=c.get("container");a.use("kg/kcharts/6.0.1/tip/index,kg/kcharts/6.0.1/tip/assets/tip.css",function(a,e){var f=c.getBBox();f.x=f.left,f.y=f.top;var g=b.themeCls||"ks-chart-default",h=b.boundryDetect?f:{},i=a.mix(b,{rootNode:d,clsName:g,boundry:h},void 0,void 0,!0),j=new e(i);c.set("$tip",j),c.on("pointover",function(d){{var e=d.x+20,f=d.y;d.index,d.xvalue,d.yvalue}a.isFunction(b.template)?j.setContent(b.template.apply(j,[d.index,d.data])):j.renderTemplate(b.template,d),j.fire("move",{x:e,y:f,style:c.processAttr(b.css,{DEFAULT:"yellow",HOVER:"blue"})})},c)})}},processAttr:function(b,c){var d=a.clone(b);for(var e in d)d[e]&&"string"==typeof d[e]&&(d[e]=d[e].replace(T,c));return d},hideLine:function(b){if(a.isNumber(b)){var c=this.get("$series")[b],d=this.get("series")[b];if(c){var e=c.$line;e&&e.hide();var f=c.$points;f&&f.hide(),d.hided=!0}else d.hided=!0,this.render()}},showLine:function(b){if(a.isNumber(b)){var c=this.get("$series")[b],d=this.get("series")[b];if(c&&c.$line){var e=c.$line;e&&e.show();var f=c.$points;f&&f.show(),d.hided=!1}else d.hided=!1,this.render()}},removeElements:function(){var a=this.get("paper");y(this.get("$series"));var b=this.get("$xlabels");b?o(b):(b=a.set(),this.set("$xlabels",b));var c=this.get("$ylabels");c?o(c):(c=a.set(),this.set("$ylabels",c)),this.get("$xaxis")&&this.get("$xaxis").remove(),this.get("$yaxis")&&this.get("$yaxis").remove();var d=this.get("$jointPoints");d?o(d):(d=[],this.set("$jointPoints",d))},addSeries:function(a){for(var b=this.get("series"),c=0,d=a.length;d>c;c++)f.combineSeries(a[c],b)},updateAllSeries:function(a){a&&(this.clearData(),this.set("series",a),this.render())},destroy:function(){this.unbindEvent(),this.removeElements()}};return c.extend?S=c.extend(X):(S=function(a){this.set(a),this.inititialize()},a.extend(S,c,X)),S},{requires:["kg/kcharts/6.0.1/raphael/index","base","promise","kg/kcharts/6.0.1/animate/index","kg/kcharts/6.0.1/realtime/util","dom","event","kg/kcharts/6.0.1/tools/color/index"]});