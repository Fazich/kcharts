/*! kcharts - v1.3 - 2013-12-24 11:57:25 AM
* Copyright (c) 2013 数据可视化小组; Licensed  */
KISSY.add("gallery/kcharts/1.3/basechart/index",function(t,e){var a,r=t.all,i=!1,n=!1,s={init:function(e){e||(e=this.userConfig);var a,i,n=this;if(e&&e.renderTo){a=n._cfg=t.mix({zIndex:0,yAxis:{spacing:{top:0,bottom:0}},xAxis:{spacing:{left:0,right:0}},canvasAttr:{x:60,y:60},defineKey:{},zoomType:"x"},e),n._$ctnNode=r(e.renderTo),n._$ctnNode.css({"-webkit-text-size-adjust":"none","-webkit-tap-highlight-color":"rgba(0,0,0,0)"}),n.createContainer(),t.mix(n,{_datas:{cur:{},total:{}},_points:{},_centerPoints:[],_pointsX:[],_pointsY:[],_gridsX:[],_gridsY:[],_areas:[],_axisX:null,_axisY:null,_labelX:[],_labelY:[],_evtEls:[],_gridPoints:[],_multiple:!1,stackable:!1});for(var s in Array.prototype)delete Array.prototype[s];if(i=a.series||null,"barchart"==n.chartType&&(a.xAxis.min=0,a.yAxis.min=0),!i||0>=i.length||!i[0].data)return;i.length>1?n._multiple=!0:void 0;for(var s in i)n._datas.total[s]={index:s,data:i[s].data},n._datas.cur[s]={index:s,data:i[s].data};n.dataFormat(),n.onResize()}},removeData:function(t){var e=this;delete e._datas.cur[t],e.dataFormat()},recoveryData:function(t){var e=this;e._datas.cur[t]=e._datas.total[t],e.dataFormat()},createContainer:function(){var t=this,e=t._$ctnNode,a=t._cfg.canvasAttr,r=a.width||e.width()-2*a.x,i=a.height||e.height()-2*a.y,n=a.x,s=a.y,o=r,c=i,l={x:n,y:s},d={x:n+r,y:s},f={x:n,y:s+c},h={x:n+r,y:s+c};t._innerContainer={x:n,y:s,width:o,height:c,tl:l,tr:d,bl:f,br:h}},getInnerContainer:function(){return this._innerContainer},getAllDatas:function(){var e,a=this,r=a._cfg,i=[],n=r.zoomType,s=arguments[0],o=a.getDataType();if(r.stackable)for(var c in a._datas.cur){"object"==o&&r.defineKey.y&&r.defineKey.x?e=a.getArrayByKey(a._datas.cur[c].data,r.defineKey.y):t.isArray(a._datas.cur[c].data)&&(e=a._datas.cur[c].data);for(var l in e)i[l]=i[l]?e[l]-0+(i[l]-0):e[l]}else for(var c in a._datas.cur)"object"==o&&r.defineKey.y&&r.defineKey.x?e=a.getArrayByKey(a._datas.cur[c].data,r.defineKey.y):t.isArray(a._datas.cur[c].data)&&(e="xy"==n?a.getArrayByKey(a._datas.cur[c].data,s):a._datas.cur[c].data),i.push(e.join(","));return i.length?i.join(",").split(","):[]},getDataType:function(){var e=this;if(e._datas.total[0]&&e._datas.total[0].data)for(var a in e._datas.total[0].data){if(t.isPlainObject(e._datas.total[0].data[a]))return"object";if(t.isNumber(e._datas.total[0].data[a]-0))return"number"}},_getScales:function(e,a){var r=this;if(a.text&&t.isArray(a.text))return a.text;var s=a.max/1,o=a.min/1,c=a.num||5,l=Math.max.apply(null,e),d=Math.min.apply(null,e);i=0>=l?1:0,n=d>=0?1:0;var f=.1*(l-d),h=s||0==s?s>=l?s:l+f:l+f,p=o||0==o?d>=o?o:d-f:d-f;return r.getScales(h,p,c)},dataFormat:function(){var e,a,r,i,n,s,o,c=this,l=c._cfg,d=l.zoomType,f=c._innerContainer,h=l.xAxis.spacing?c.px2num(l.xAxis.spacing.left):0,p=l.xAxis.spacing?c.px2num(l.xAxis.spacing.right):0,u=l.yAxis.spacing?c.px2num(l.yAxis.spacing.top):0,x=l.yAxis.spacing?c.px2num(l.yAxis.spacing.bottom):0,_=f.width-h-p,g=f.height-u-x,y=f.x/1+h,b=f.y/1+u;c._pointsY=[],c._pointsX=[],"x"==d?(e=c.getAllDatas(),o=r=c.coordNum=c._getScales(e,l.yAxis),n=c.data2GrapicData(r,!1,!0)):"y"==d?(a=c.getAllDatas(),o=i=c.coordNumX=c._getScales(a,l.xAxis),s=c.data2GrapicData(i,!0,!1)):"xy"==d&&(e=c.getAllDatas(0),a=c.getAllDatas(1),o=r=c.coordNum=c._getScales(e,l.xAxis),i=c.coordNumX=c._getScales(a,l.yAxis),n=c.data2GrapicData(r,!1,!1),s=c.data2GrapicData(i,!0,!0));var v=function(e,a,r){var i=l.series[a],n=Math.max.apply(null,r),s=Math.min.apply(null,r),o=l.defineKey,f=o.x,h=o.y,p=[],u=0,x=c.getDataType();if("x"==d)if(f&&h&&"object"==x)for(var v in c._pointsX)e[u]&&l.xAxis.text[v]==e[u][f]?(p[v]={x:c._pointsX[v].x,y:c.data2Grapic(e[u][h],n,s,g,b,!0),dataInfo:e[u],index:Math.round(v)},u++):p[v]={x:c._pointsX[v].x,index:Math.round(v)};else for(var v in c._pointsX)p[v]=""===e[v]||null===e[v]?{x:c._pointsX[v].x,index:Math.round(v)}:{x:c._pointsX[v].x,y:c.data2Grapic(e[v],n,s,g,b,!0),dataInfo:{y:e[v],x:l.xAxis.text[v]},index:Math.round(v)};else if("y"==d)if(f&&h&&t.isPlainObject(c._datas.total[0].data[0]))for(var v in c._pointsY)e[u]&&l.yAxis.text[v]==e[u][f]?(p[v]={x:c.data2Grapic(e[u][h],n,s,_,y),y:c._pointsY[v].y,dataInfo:{y:e[u]},index:Math.round(v)},u++):p[v]={y:c._pointsY[v].y,index:Math.round(v)};else for(var v in c._pointsY)p[v]={x:c.data2Grapic(e[v],n,s,_,y),y:c._pointsY[v].y,dataInfo:{y:e[v],x:l.yAxis.text[v]},index:Math.round(v)};else if("xy"==d){var m=c.data2GrapicData(c.getArrayByKey(i.data,0)),w=c.data2GrapicData(c.getArrayByKey(i.data,1),!0,!0);for(var v in i.data)p[v]={x:m[v],y:w[v],dataInfo:{y:e[v]},index:Math.round(v)}}return p};if("x"==d){for(var m in n)c._pointsY[m]={number:r[m]+"",y:n[m],x:y};try{c._gridPoints=c.getSplitPoints(y,b+g,y+_,b+g,l.xAxis.text.length,!0),c._pointsX=c.getCenterPoints(c._gridPoints)}catch(w){throw Error("未配置正确的xAxis.text数组")}}else if("y"==d){for(var m in s)c._pointsX[m]={number:i[m]+"",y:b+g,x:s[m]};try{c._pointsY=c.getSplitPoints(y,b,y,b+g,l.yAxis.text.length+1)}catch(w){throw Error("未配置正确的yAxis.text数组")}}else if("xy"==d){for(var m in s)c._pointsY[m]={number:i[m]+"",y:s[m],x:y};for(var m in n)c._pointsX[m]={number:r[m]+"",y:b+g,x:n[m]}}for(var m in c._datas.cur)c._points[m]=v(c._datas.cur[m].data,m,o)},data2GrapicData:function(e,a,r){if(void 0!==e){var i,n=this,s=n._innerContainer,o=a?s.x:s.y,c=s.height,l=s.width,d=n._cfg.zoomType,f=a?Math.max.apply(null,n.coordNumX):Math.max.apply(null,n.coordNum),h=a?Math.min.apply(null,n.coordNumX):Math.min.apply(null,n.coordNum),p=[];if("xy"==d?i=a?c:l:"x"==d?i=c:"y"==d&&(i=l),t.isArray(e)){for(var u in e)p.push(n.data2Grapic(e[u],f,h,i,o,r));return p}return n.data2Grapic(e,f,h,i,o,r)}},data2Grapic:function(t,e,a,r,i,n){return 0>=e-a?void 0:n?r*(1-(t-a)/(e-a))+i:r*(t-a)/(e-a)+i},getSplitPoints:function(t,e,a,r,i,n){var s=(a-t)/i,o=(r-e)/i,c=[];n&&c.push({x:t,y:e});for(var l=0;i-1>l;l++)c.push({x:t+(l+1)*s,y:e+(l+1)*o});return n&&c.push({x:a,y:r}),c},getCenterPoints:function(t){var e=[],a=t.length;if(a>1)for(var r=0;a-1>r;r++)e[r]={x:(t[r].x+t[r+1].x)/2,y:(t[r].y+t[r+1].y)/2};return e},getScales:function(t,e,a){var r,s,o,c,l,d,f,h=this,p=Math.log,u=Math.pow,x=[],_=0;if(!(e>=t)){for(r=(t-e)/a,o=Math.floor(p(r)/p(10))+1,s=r/u(10,o),s=s>0&&.1>=s?.1:s>.1&&.2>=s?.2:s>.2&&.25>=s?.25:s>.25&&.5>=s?.5:1,c=s*u(10,o),f=(t+e)/2-(t+e)/2%c,l=d=f;l>e;)l-=c;for(;t>d;)d+=c;if(h.isFloat(c)){var g=c+"";g.indexOf(".")>-1&&(_=g.split(".")[1].length>4?4:g.split(".")[1].length)}for(var y=l;d>=y;y+=c)x.push(parseFloat(y).toFixed(_));if(i)for(y in x)x[y]>0&&x.splice(y,1);else if(n)for(y in x)0>x[y]&&x.splice(y,1);return x}},arraySort:function(t,e,a){return t.sort(function(t,r){return e?"object"==typeof t&&"object"==typeof r?r[a]-t[a]:r-t:"object"==typeof t&&"object"==typeof r?t[a]-r[a]:t-r})},getArrayByKey:function(e,a){var r=[];for(var i in e)(e[i][a]||t.isNumber(e[i][a]))&&r.push(e[i][a]);return r},isFloat:function(t){return/^([+-]?)\d*\.\d+$/.test(t)},obj2Array:function(t,e){var a=[];for(var r in t)a.push(e?t[e]:t[r]);return a},getObjKeys:function(t){var e=[];for(b in t)e.push(b);return e},isInSide:function(t,e,a,r,i,n){return t>a&&a- -i>t&&e>r&&r- -n>e?!0:!1},px2num:function(t){var t=t||0;return Math.round((t+"").replace(/\s+|px/g,"")),Math.round((t+"").replace(/\s+|px/g,""))},getOffset:function(e){var a=e.currentTarget;if(e.offsetX)return{offsetX:e.offsetX,offsetY:e.offsetY};var r=t.DOM.offset(a);return{offsetX:e.offsetX||e.clientX-r.left,offsetY:e.offsetY||e.clientY-r.top}},onResize:function(){var t=this,e=t._$ctnNode,a=e.width(),i=e.height();!t.__isResizeBind&&r(window).on("resize",function(){t.__isResizeBind=1,(e.width()!=a||e.height()!=i)&&(a=e.width(),i=e.height(),t.fire("resize"))})}};return e.extend?a=e.extend(s):(a=function(){},t.extend(a,e,s)),a},{requires:["base","node"]});