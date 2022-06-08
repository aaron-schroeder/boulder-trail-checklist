"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[454],{77178:function(e,t,r){r.d(t,{Z:function(){return h}});var n=r(37762),i=r(15671),a=r(43144),l=r(60136),o=r(29388),s=r(27366),u=r(81608),c=r(41691),p=r(92026),f=(r(10064),r(32718),r(26077),r(27088)),y=r(49861),d=(r(63780),r(93169),r(25243),r(69912)),m=function(e){(0,l.Z)(r,e);var t=(0,o.Z)(r);function r(e){var n;return(0,i.Z)(this,r),(n=t.call(this,e)).getCollections=null,n}return(0,a.Z)(r,[{key:"initialize",value:function(){var e=this;this.handles.add((0,f.EH)((function(){return e._refresh()})))}},{key:"destroy",value:function(){this.getCollections=null}},{key:"_refresh",value:function(){var e=(0,p.pC)(this.getCollections)?this.getCollections():null;if((0,p.Wi)(e))this.removeAll();else{var t,r=0,i=(0,n.Z)(e);try{for(i.s();!(t=i.n()).done;){var a=t.value;(0,p.pC)(a)&&(r=this._processCollection(r,a))}}catch(l){i.e(l)}finally{i.f()}this.splice(r,this.length)}}},{key:"_createNewInstance",value:function(e){return new u.Z(e)}},{key:"_processCollection",value:function(e,t){if(!t)return e;var r,i=this.itemFilterFunction?this.itemFilterFunction:function(e){return!!e},a=(0,n.Z)(t);try{for(a.s();!(r=a.n()).done;){var l=r.value;if(l){if(i(l)){var o=this.indexOf(l,e);o>=0?o!==e&&this.reorder(l,e):this.add(l,e),++e}if(this.getChildrenFunction){var s=this.getChildrenFunction(l);if(Array.isArray(s)){var u,c=(0,n.Z)(s);try{for(c.s();!(u=c.n()).done;){var p=u.value;e=this._processCollection(e,p)}}catch(f){c.e(f)}finally{c.f()}}else e=this._processCollection(e,s)}}}}catch(f){a.e(f)}finally{a.f()}return e}}]),r}((0,c.p)(u.Z));(0,s._)([(0,y.Cb)()],m.prototype,"getCollections",void 0),(0,s._)([(0,y.Cb)()],m.prototype,"getChildrenFunction",void 0),(0,s._)([(0,y.Cb)()],m.prototype,"itemFilterFunction",void 0);var h=m=(0,s._)([(0,d.j)("esri.core.CollectionFlattener")],m)},82582:function(e,t,r){r.d(t,{yZ:function(){return i}});var n=r(68860);function i(e,t){var r=t||e.extent,i=e.width,a=(0,n.c9)(r&&r.spatialReference);return r&&i?r.width/i*a*n.hd*96:0}},70454:function(e,t,r){r.r(t),r.d(t,{default:function(){return Fe}});var n=r(15861),i=r(4942),a=r(1413),l=r(37762),o=r(15671),s=r(43144),u=r(97326),c=r(60136),p=r(29388),f=r(87757),y=r(27366),d=r(42265),m=r(52639),h=r(46523),v=r(76200),b=r(81608),g=r(77178),x=r(41691),w=r(43404),_=r(84652),C=r(92026),S=r(97642),E=r(75298),N=r(35995),I=r(49861),O=r(25243),Z=r(38511),F=r(69912),R=r(31201),k=r(18987),A=r(53866),U=r(78952),L=r(82582),P=r(92975),M=r(74184),T=r(6693),j=r(6061),q=r(29598),W=r(71684),V=r(56811),B=r(99063),D=r(86685),G=r(25899),H=r(45948),X=r(85015),J=(r(63780),r(93169),{visible:"visibleSublayers"}),Q=function(e){(0,c.Z)(r,e);var t=(0,p.Z)(r);function r(e){var n;return(0,o.Z)(this,r),(n=t.call(this,e)).scale=0,n}return(0,s.Z)(r,[{key:"layer",set:function(e){var t=this;this._get("layer")!==e&&(this._set("layer",e),this.handles.remove("layer"),e&&this.handles.add([e.sublayers.on("change",(function(){return t.notifyChange("visibleSublayers")})),e.on("wms-sublayer-update",(function(e){return t.notifyChange(J[e.propertyName])}))],"layer"))}},{key:"layers",get:function(){return this.visibleSublayers.filter((function(e){return e.name})).map((function(e){return e.name})).join(",")}},{key:"version",get:function(){this.commitProperty("layers");var e=this.layer;return e&&e.commitProperty("imageTransparency"),(this._get("version")||0)+1}},{key:"visibleSublayers",get:function(){var e=this.layer,t=this.scale,r=null==e?void 0:e.sublayers,n=[];return null==r||r.forEach((function e(r){var i=r.minScale,a=r.maxScale,l=r.sublayers;r.visible&&(0===t||(0===i||t<=i)&&(0===a||t>=a))&&(l?l.forEach(e):n.unshift(r))})),n}},{key:"toJSON",value:function(){var e=this.layer,t=this.layers;return{format:e.imageFormat,request:"GetMap",service:"WMS",styles:"",transparent:e.imageTransparency?"TRUE":"FALSE",version:e.version,layers:t}}}]),r}((0,x.p)(X.Z));(0,y._)([(0,I.Cb)()],Q.prototype,"layer",null),(0,y._)([(0,I.Cb)({readOnly:!0})],Q.prototype,"layers",null),(0,y._)([(0,I.Cb)({type:Number})],Q.prototype,"scale",void 0),(0,y._)([(0,I.Cb)({readOnly:!0})],Q.prototype,"version",null),(0,y._)([(0,I.Cb)({readOnly:!0})],Q.prototype,"visibleSublayers",null),Q=(0,y._)([(0,F.j)("esri.layers.support.ExportWMSImageParameters")],Q);var $,z=r(100),Y=r(89125),K=0,ee=$=function(e){(0,c.Z)(r,e);var t=(0,p.Z)(r);function r(e){var n;return(0,o.Z)(this,r),(n=t.call(this,e))._sublayersHandles=new z.Z,n.dimensions=null,n.fullExtents=null,n.featureInfoFormat=null,n.featureInfoUrl=null,n.legendUrl=null,n.legendEnabled=!0,n.maxScale=0,n.minScale=0,n.popupEnabled=!1,n.queryable=!1,n.spatialReferences=null,n}return(0,s.Z)(r,[{key:"description",get:function(){return this._get("description")},set:function(e){this._set("description",e)}},{key:"fullExtent",get:function(){return this._get("fullExtent")},set:function(e){this._set("fullExtent",e)}},{key:"readExtent",value:function(e,t){return(e=t.extent)?A.Z.fromJSON(e):null}},{key:"id",get:function(){var e=this._get("id");return null==e?K++:e},set:function(e){this._set("id",e)}},{key:"readLegendUrl",value:function(e,t){return t?t.legendUrl||t.legendURL:null}},{key:"layer",set:function(e){this._set("layer",e),this.sublayers&&this.sublayers.forEach((function(t){return t.layer=e}))}},{key:"effectiveScaleRange",get:function(){return{minScale:this.minScale,maxScale:this.maxScale}}},{key:"name",get:function(){return this._get("name")},set:function(e){this._set("name",e)}},{key:"sublayers",set:function(e){var t=this,r=this._get("sublayers");r&&(r.forEach((function(e){e.layer=null})),this._sublayersHandles.removeAll(),this._sublayersHandles=null),e&&(e.forEach((function(e){e.parent=t,e.layer=t.layer})),this._sublayersHandles.add([e.on("after-add",(function(e){var r=e.item;r.parent=t,r.layer=t.layer})),e.on("after-remove",(function(e){var t=e.item;t.parent=null,t.layer=null}))])),this._set("sublayers",e)}},{key:"castSublayers",value:function(e){return(0,O.se)(b.Z.ofType($),e)}},{key:"title",get:function(){return this._get("title")},set:function(e){this._set("title",e)}},{key:"visible",get:function(){return this._get("visible")},set:function(e){this._setAndNotifyLayer("visible",e)}},{key:"clone",value:function(){var e=new $;return this.hasOwnProperty("description")&&(e.description=this.description),this.hasOwnProperty("fullExtent")&&(e.fullExtent=this.fullExtent.clone()),this.hasOwnProperty("fullExtents")&&(e.fullExtents=this.fullExtents.map((function(e){return e.clone()}))),this.hasOwnProperty("featureInfoFormat")&&(e.featureInfoFormat=this.featureInfoFormat),this.hasOwnProperty("featureInfoUrl")&&(e.featureInfoUrl=this.featureInfoUrl),this.hasOwnProperty("legendUrl")&&(e.legendUrl=this.legendUrl),this.hasOwnProperty("legendEnabled")&&(e.legendEnabled=this.legendEnabled),this.hasOwnProperty("layer")&&(e.layer=this.layer),this.hasOwnProperty("name")&&(e.name=this.name),this.hasOwnProperty("parent")&&(e.parent=this.parent),this.hasOwnProperty("queryable")&&(e.queryable=this.queryable),this.hasOwnProperty("sublayers")&&(e.sublayers=this.sublayers&&this.sublayers.map((function(e){return e.clone()}))),this.hasOwnProperty("spatialReferences")&&(e.spatialReferences=this.spatialReferences.map((function(e){return e}))),this.hasOwnProperty("visible")&&(e.visible=this.visible),this.hasOwnProperty("title")&&(e.title=this.title),e}},{key:"_setAndNotifyLayer",value:function(e,t){var r=this.layer;this._get(e)!==t&&(this._set(e,t),r&&r.emit("wms-sublayer-update",{propertyName:e,id:this.id}))}}]),r}(S.w);(0,y._)([(0,I.Cb)()],ee.prototype,"description",null),(0,y._)([(0,I.Cb)({readOnly:!0})],ee.prototype,"dimensions",void 0),(0,y._)([(0,I.Cb)({value:null})],ee.prototype,"fullExtent",null),(0,y._)([(0,Z.r)("fullExtent",["extent"])],ee.prototype,"readExtent",null),(0,y._)([(0,I.Cb)()],ee.prototype,"fullExtents",void 0),(0,y._)([(0,I.Cb)()],ee.prototype,"featureInfoFormat",void 0),(0,y._)([(0,I.Cb)()],ee.prototype,"featureInfoUrl",void 0),(0,y._)([(0,I.Cb)({type:Number,json:{write:{enabled:!1,overridePolicy:function(){return{ignoreOrigin:!0,enabled:!0}}}}})],ee.prototype,"id",null),(0,y._)([(0,I.Cb)({type:String,json:{origins:{"web-document":{read:{source:["legendUrl","legendURL"]},write:{target:"legendUrl",ignoreOrigin:!0}}},read:{source:"legendURL"},write:{ignoreOrigin:!0}}})],ee.prototype,"legendUrl",void 0),(0,y._)([(0,Z.r)(["web-document"],"legendUrl")],ee.prototype,"readLegendUrl",null),(0,y._)([(0,I.Cb)({value:!0,type:Boolean,json:{read:{source:"showLegend"},write:{target:"showLegend"},origins:{"web-map":{read:!1,write:!1},"web-scene":{read:!1,write:!1}}}})],ee.prototype,"legendEnabled",void 0),(0,y._)([(0,I.Cb)({value:null})],ee.prototype,"layer",null),(0,y._)([(0,I.Cb)()],ee.prototype,"maxScale",void 0),(0,y._)([(0,I.Cb)()],ee.prototype,"minScale",void 0),(0,y._)([(0,I.Cb)({readOnly:!0})],ee.prototype,"effectiveScaleRange",null),(0,y._)([(0,I.Cb)({type:String,value:null,json:{read:{source:"name"},write:{ignoreOrigin:!0}}})],ee.prototype,"name",null),(0,y._)([(0,I.Cb)()],ee.prototype,"parent",void 0),(0,y._)([(0,I.Cb)({type:Boolean,json:{read:{source:"showPopup"},write:{ignoreOrigin:!0,target:"showPopup"}}})],ee.prototype,"popupEnabled",void 0),(0,y._)([(0,I.Cb)({type:Boolean,json:{write:{ignoreOrigin:!0}}})],ee.prototype,"queryable",void 0),(0,y._)([(0,I.Cb)()],ee.prototype,"sublayers",null),(0,y._)([(0,Y.p)("sublayers")],ee.prototype,"castSublayers",null),(0,y._)([(0,I.Cb)({type:[Number],json:{read:{source:"spatialReferences"}}})],ee.prototype,"spatialReferences",void 0),(0,y._)([(0,I.Cb)({type:String,value:null,json:{write:{ignoreOrigin:!0}}})],ee.prototype,"title",null),(0,y._)([(0,I.Cb)({type:Boolean,value:!0,json:{read:{source:"defaultVisibility"}}})],ee.prototype,"visible",null);var te=ee=$=(0,y._)([(0,F.j)("esri.layers.support.WMSSublayer")],ee),re=r(10064),ne={84:4326,83:4269,27:4267};function ie(e){if(!e)return null;var t={idCounter:-1};"string"==typeof e&&(e=(new DOMParser).parseFromString(e,"text/xml"));var r=e.documentElement;if("ServiceExceptionReport"===r.nodeName){var n=Array.prototype.slice.call(r.childNodes).map((function(e){return e.textContent})).join("\r\n");throw new re.Z("wmslayer:wms-capabilities-xml-is-not-valid","The server returned errors when the WMS capabilities were requested.",n)}var i=se("Capability",r),a=se("Service",r),l=se("Request",i);if(!i||!a||!l)return null;var o=se("Layer",i);if(!o)return null;var s,u,c,p="WMS_Capabilities"===r.nodeName||"WMT_MS_Capabilities"===r.nodeName?r.getAttribute("version"):"1.3.0",f=ce("Title",a,"")||ce("Name",a,""),y=ce("AccessConstraints",a,""),d=ce("Abstract",a,""),m=parseInt(ce("MaxWidth",a,"5000"),10),h=parseInt(ce("MaxHeight",a,"5000"),10),v=ye(l,"GetMap"),b=fe(l,"GetMap"),g=me(o,p,t),x=0;if(Array.prototype.slice.call(i.childNodes).forEach((function(e){"Layer"===e.nodeName&&(0===x?s=e:1===x?(g.name&&(g.name="",g.sublayers.push(me(s,p,t))),g.sublayers.push(me(e,p,t))):g.sublayers.push(me(e,p,t)),x++)})),!g)return null;var w=g.fullExtents;if((u=g.sublayers)||(u=[]),0===u.length&&u.push(g),!(c=g.extent)){var _=new A.Z(u[0].extent);g.extent=_.toJSON(),c=g.extent}var C,S=g.spatialReferences.length>0?g.spatialReferences:ae(g),E=fe(l,"GetFeatureInfo");if(E){var N=ye(l,"GetFeatureInfo");N.indexOf("text/html")>-1?C="text/html":N.indexOf("text/plain")>-1&&(C="text/plain")}if(!C){!function e(t){t&&(t.queryable=!1,t.sublayers&&t.sublayers.forEach((function(t){e(t)})))}(g)}var I=le(u),O=g.minScale||0,Z=g.maxScale||0,F=g.dimensions,R=I.reduce((function(e,t){return e.concat(t.dimensions)}),[]),k=F.concat(R).filter(be),U=null;if(k.length>0){var L=Number.POSITIVE_INFINITY,P=Number.NEGATIVE_INFINITY;k.forEach((function(e){var t,r=e.extent;t=r,Array.isArray(t)&&t.length>0&&t[0]instanceof Date?r.forEach((function(e){L=Math.min(L,e.getTime()),P=Math.max(P,e.getTime())})):r.forEach((function(e){L=Math.min(L,e.min.getTime()),P=Math.max(P,e.max.getTime())}))})),U={startTimeField:null,endTimeField:null,trackIdField:null,timeExtent:[L,P]}}return{copyright:y,description:d,dimensions:F,extent:c,fullExtents:w,featureInfoFormat:C,featureInfoUrl:E,mapUrl:b,maxWidth:m,maxHeight:h,maxScale:Z,minScale:O,layers:I,spatialReferences:S,supportedImageFormatTypes:v,timeInfo:U,title:f,version:p}}function ae(e){if(e.spatialReferences.length>0)return e.spatialReferences;if(e.sublayers){var t,r=(0,l.Z)(e.sublayers);try{for(r.s();!(t=r.n()).done;){var n=ae(t.value);if(n.length>0)return n}}catch(i){r.e(i)}finally{r.f()}}return[]}function le(e){var t=[];return e.forEach((function(e){t.push(e),e.sublayers&&e.sublayers.length&&(t=t.concat(le(e.sublayers)),delete e.sublayers)})),t}function oe(e,t,r){var n;return null!=(n=t.getAttribute(e))?n:r}function se(e,t){for(var r=0;r<t.childNodes.length;r++){var n=t.childNodes[r];if(he(n)&&n.nodeName===e)return n}return null}function ue(e,t){for(var r=[],n=0;n<t.childNodes.length;n++){var i=t.childNodes[n];he(i)&&i.nodeName===e&&r.push(i)}return r}function ce(e,t,r){var n=se(e,t);return n?n.textContent:r}function pe(e,t,r){if(!e)return null;var n,i,a,l,o=parseFloat(e.getAttribute("minx")),s=parseFloat(e.getAttribute("miny")),u=parseFloat(e.getAttribute("maxx")),c=parseFloat(e.getAttribute("maxy"));r?(n=isNaN(s)?-Number.MAX_VALUE:s,i=isNaN(o)?-Number.MAX_VALUE:o,a=isNaN(c)?Number.MAX_VALUE:c,l=isNaN(u)?Number.MAX_VALUE:u):(n=isNaN(o)?-Number.MAX_VALUE:o,i=isNaN(s)?-Number.MAX_VALUE:s,a=isNaN(u)?Number.MAX_VALUE:u,l=isNaN(c)?Number.MAX_VALUE:c);var p=new U.Z({wkid:t});return new A.Z({xmin:n,ymin:i,xmax:a,ymax:l,spatialReference:p})}function fe(e,t){var r=se(t,e);if(r){var n=se("DCPType",r);if(n){var i=se("HTTP",n);if(i){var a=se("Get",i);if(a){var l=function(e,t,r,n){var i=se(e,r);return i?oe(t,i,n):n}("OnlineResource","xlink:href",a,null);if(l)return l.indexOf("&")===l.length-1&&(l=l.substring(0,l.length-1)),function(e,t){var r=[],n=(0,N.mN)(e);for(var i in n.query)n.query.hasOwnProperty(i)&&-1===t.indexOf(i.toLowerCase())&&r.push(i+"="+n.query[i]);return n.path+(r.length?"?"+r.join("&"):"")}(l,["service","request"])}}}}return null}function ye(e,t){var r=ue("Operation",e);if(0===r.length)return ue("Format",se(t,e)).map((function(e){return e.textContent}));var n=[];return r.forEach((function(e){e.getAttribute("name")===t&&ue("Format",e).forEach((function(e){n.push(e.textContent)}))})),n}function de(e,t,r){var n=se(t,e);if(!n)return r;var i=n.textContent;if(null==i||""===i)return r;var a=Number(i);return isNaN(a)?r:a}function me(e,t,r){var n;if(!e)return null;var i={id:r.idCounter++,fullExtents:[],parentLayerId:null,queryable:"1"===e.getAttribute("queryable"),spatialReferences:[],sublayers:null},a=se("LatLonBoundingBox",e),l=se("EX_GeographicBoundingBox",e),o=null;a&&(o=pe(a,4326)),l&&((o=new A.Z(0,0,0,0,new U.Z({wkid:4326}))).xmin=parseFloat(ce("westBoundLongitude",l,"0")),o.ymin=parseFloat(ce("southBoundLatitude",l,"0")),o.xmax=parseFloat(ce("eastBoundLongitude",l,"0")),o.ymax=parseFloat(ce("northBoundLatitude",l,"0"))),a||l||(o=new A.Z(-180,-90,180,90,new U.Z({wkid:4326}))),i.minScale=de(e,"MaxScaleDenominator",0),i.maxScale=de(e,"MinScaleDenominator",0);var s=["1.0.0","1.1.0","1.1.1"].indexOf(t)>-1?"SRS":"CRS";return Array.prototype.slice.call(e.childNodes).forEach((function(e){if("Name"===e.nodeName)i.name=e.textContent||"";else if("Title"===e.nodeName)i.title=e.textContent||"";else if("Abstract"===e.nodeName)i.description=e.textContent||"";else if("BoundingBox"===e.nodeName){var n=e.getAttribute(s);if(n&&0===n.indexOf("EPSG:")){var a=parseInt(n.substring(5),10);0===a||isNaN(a)||o||(o="1.3.0"===t?pe(e,a,(0,D.A)(a)):pe(e,a))}var l=n&&n.indexOf(":");if(l&&l>-1){var u=parseInt(n.substring(l+1,n.length),10);0===u||isNaN(u)||(u=ne[u]?ne[u]:u);var c="1.3.0"===t?pe(e,u,(0,D.A)(u)):pe(e,u);i.fullExtents.push(c)}}else if(e.nodeName===s)e.textContent.split(" ").forEach((function(e){var t=e.includes(":")?parseInt(e.split(":")[1],10):parseInt(e,10);if(0!==t&&!isNaN(t)){var r=ne[t]?ne[t]:t;i.spatialReferences.includes(r)||i.spatialReferences.push(r)}}));else if("Style"!==e.nodeName||i.legendURL){if("Layer"===e.nodeName){var p=me(e,t,r);p&&(p.parentLayerId=i.id,i.sublayers||(i.sublayers=[]),i.sublayers.push(p))}}else{var f=se("LegendURL",e);if(f){var y=se("OnlineResource",f);y&&(i.legendURL=y.getAttribute("xlink:href"))}}})),i.extent=null==(n=o)?void 0:n.toJSON(),i.dimensions=ue("Dimension",e).filter((function(e){return e.getAttribute("name")&&e.getAttribute("units")&&e.textContent})).map((function(e){var t=e.getAttribute("name"),r=e.getAttribute("units"),n=e.textContent,i=e.getAttribute("unitSymbol"),a=e.getAttribute("default"),l="0"!==oe("default",e,"0"),o="0"!==oe("nearestValue",e,"0"),s="0"!==oe("current",e,"0");return be({name:t,units:r})?{name:"time",units:"ISO8601",extent:we(n),default:we(a),multipleValues:l,nearestValue:o,current:s}:ve({name:t,units:r})?{name:"elevation",units:r,extent:ge(n),unitSymbol:i,default:ge(a),multipleValues:l,nearestValue:o}:{name:t,units:r,extent:xe(n),unitSymbol:i,default:xe(a),multipleValues:l,nearestValue:o}})),i}function he(e){return e.nodeType===Node.ELEMENT_NODE}function ve(e){return/^elevation$/i.test(e.name)&&/^(epsg|crs):\d+$/i.test(e.units)}function be(e){return/^time$/i.test(e.name)&&/^iso8601$/i.test(e.units)}function ge(e){if(!e)return null;var t=-1!==e.indexOf("/"),r=e.split(",");return t?r.map((function(e){var t=e.split("/");return t.length<2?null:{min:parseFloat(t[0]),max:parseFloat(t[1]),resolution:t.length>=3&&"0"!==t[2]?parseFloat(t[2]):void 0}})).filter((function(e){return e})):r.map((function(e){return parseFloat(e)}))}function xe(e){if(!e)return null;var t=-1!==e.indexOf("/"),r=e.split(",");return t?r.map((function(e){var t=e.split("/");return t.length<2?null:{min:t[0],max:t[1],resolution:t.length>=3&&"0"!==t[2]?t[2]:void 0}})).filter((function(e){return e})):r}function we(e){if(!e)return null;var t=-1!==e.indexOf("/"),r=e.split(",");return t?r.map((function(e){var t=e.split("/");return t.length<2?null:{min:new Date(t[0]),max:new Date(t[1]),resolution:t.length>=3&&"0"!==t[2]?_e(t[2]):void 0}})).filter((function(e){return e})):r.map((function(e){return new Date(e)}))}function _e(e){var t=e.match(/(?:p(\d+y|\d+(?:.|,)\d+y)?(\d+m|\d+(?:.|,)\d+m)?(\d+d|\d+(?:.|,)\d+d)?)?(?:t(\d+h|\d+(?:.|,)\d+h)?(\d+m|\d+(?:.|,)\d+m)?(\d+s|\d+(?:.|,)\d+s)?)?/i);return t?{years:Ce(t[1]),months:Ce(t[2]),days:Ce(t[3]),hours:Ce(t[4]),minutes:Ce(t[5]),seconds:Ce(t[6])}:null}function Ce(e){if(!e)return 0;var t=e.match(/(?:\d+(?:.|,)\d+|\d+)/);if(!t)return 0;var r=t[0].replace(",",".");return Number(r)}function Se(e){return e.toISOString().replace(/\.[0-9]{3}/,"")}var Ee=new Set([102100,3857,102113,900913]),Ne=new Set([3395,54004]);var Ie=new w.X({bmp:"image/bmp",gif:"image/gif",jpg:"image/jpeg",png:"image/png",svg:"image/svg+xml"},{ignoreUnknown:!1}),Oe=function(e){(0,c.Z)(r,e);var t=(0,p.Z)(r);function r(){var e;(0,o.Z)(this,r);for(var n=arguments.length,i=new Array(n),a=0;a<n;a++)i[a]=arguments[a];return(e=t.call.apply(t,[this].concat(i))).allSublayers=new g.Z({getCollections:function(){return[e.sublayers]},getChildrenFunction:function(e){return e.sublayers}}),e.customParameters=null,e.customLayerParameters=null,e.copyright=null,e.description=null,e.dimensions=null,e.fullExtent=null,e.fullExtents=null,e.featureInfoFormat=null,e.featureInfoUrl=null,e.imageFormat=null,e.imageMaxHeight=2048,e.imageMaxWidth=2048,e.imageTransparency=!0,e.legendEnabled=!0,e.mapUrl=null,e.isReference=null,e.operationalLayerType="WMS",e.spatialReference=null,e.spatialReferences=null,e.sublayers=null,e.type="wms",e.url=null,e.version=null,e.watch("sublayers",(function(t,r){if(r){var n,i=(0,l.Z)(r);try{for(i.s();!(n=i.n()).done;){n.value.layer=null}}catch(c){i.e(c)}finally{i.f()}e.handles.remove("wms-sublayer")}if(t){var a,o=(0,l.Z)(t);try{for(o.s();!(a=o.n()).done;){var s=a.value;s.parent=(0,u.Z)(e),s.layer=(0,u.Z)(e)}}catch(c){o.e(c)}finally{o.f()}e.handles.add([t.on("after-add",(function(t){var r=t.item;r.parent=(0,u.Z)(e),r.layer=(0,u.Z)(e)})),t.on("after-remove",(function(e){var t=e.item;t.parent=null,t.layer=null}))],"wms-sublayer")}}),!0),e}return(0,s.Z)(r,[{key:"normalizeCtorArgs",value:function(e,t){return"string"==typeof e?(0,a.Z)({url:e},t):e}},{key:"load",value:function(e){var t=this,r=(0,C.pC)(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["WMS"]},e).catch(E.r9).then((function(){return t._fetchService(r)}))),Promise.resolve(this)}},{key:"readFullExtentFromItemOrMap",value:function(e,t){var r=t.extent;return new A.Z({xmin:r[0][0],ymin:r[0][1],xmax:r[1][0],ymax:r[1][1]})}},{key:"writeFullExtent",value:function(e,t){t.extent=[[e.xmin,e.ymin],[e.xmax,e.ymax]]}},{key:"readImageFormat",value:function(e,t){var r=t.supportedImageFormatTypes;return r&&r.indexOf("image/png")>-1?"image/png":r&&r[0]}},{key:"readSpatialReferenceFromItemOrDocument",value:function(e,t){return new U.Z(t.spatialReferences[0])}},{key:"writeSpatialReferences",value:function(e,t){var r=this.spatialReference&&this.spatialReference.wkid;e&&r?(t.spatialReferences=e.filter((function(e){return e!==r})),t.spatialReferences.unshift(r)):t.spatialReferences=e}},{key:"readSublayersFromItemOrMap",value:function(e,t,r){return Ze(t.layers,r,t.visibleLayers)}},{key:"readSublayers",value:function(e,t,r){return Ze(t.layers,r)}},{key:"writeSublayers",value:function(e,t,r,n){t.layers=[];var i=new Map,l=e.flatten((function(e){var t=e.sublayers;return t&&t.toArray()})).toArray();l.forEach((function(e){"number"==typeof e.parent.id&&(i.has(e.parent.id)?i.get(e.parent.id).push(e.id):i.set(e.parent.id,[e.id]))})),l.forEach((function(e){var r=(0,a.Z)({sublayer:e},n),l=e.write({parentLayerId:"number"==typeof e.parent.id?e.parent.id:-1},r);if(i.has(e.id)&&(l.sublayerIds=i.get(e.id)),!e.sublayers&&e.name){var o=e.write({},r);delete o.id,t.layers.push(o)}})),t.visibleLayers=l.filter((function(e){return e.visible&&!e.sublayers})).map((function(e){return e.name}))}},{key:"createExportImageParameters",value:function(e,t,r,n){var l=n&&n.pixelRatio||1,o=(0,L.yZ)({extent:e,width:t})*l,s=new Q({layer:this,scale:o}),u=e.xmin,c=e.ymin,p=e.xmax,f=e.ymax,y=function(e,t){var r=e.wkid;return(0,C.Wi)(t)?r:(!t.includes(r)&&e.latestWkid&&(r=e.latestWkid),Ee.has(r)?t.find((function(e){return Ee.has(e)}))||t.find((function(e){return Ne.has(e)}))||102100:r)}(e.spatialReference,this.spatialReferences),d="1.3.0"===this.version&&(0,D.A)(y)?"".concat(c,",").concat(u,",").concat(f,",").concat(p):"".concat(u,",").concat(c,",").concat(p,",").concat(f),m=s.toJSON();return(0,a.Z)((0,i.Z)({bbox:d},"1.3.0"===this.version?"crs":"srs",isNaN(y)?void 0:"EPSG:"+y),m)}},{key:"fetchImage",value:function(){var e=(0,n.Z)(f.mark((function e(t,r,n,i){var l,o,s,u,c,p,y,d,m;return f.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(s=this.mapUrl,(u=this.createExportImageParameters(t,r,n,i)).layers){e.next=4;break}return c=document.createElement("canvas"),e.abrupt("return",(c.width=r,c.height=n,c));case 4:return p=null==i||null==(l=i.timeExtent)?void 0:l.start,y=null==i||null==(o=i.timeExtent)?void 0:o.end,d=(0,C.pC)(p)&&(0,C.pC)(y)?p.getTime()===y.getTime()?Se(p):"".concat(Se(p),"/").concat(Se(y)):void 0,m={responseType:"image",query:this._mixCustomParameters((0,a.Z)((0,a.Z)({width:r,height:n},u),{},{time:d},this.refreshParameters)),signal:null==i?void 0:i.signal},e.abrupt("return",(0,v.default)(s,m).then((function(e){return e.data})));case 6:case"end":return e.stop()}}),e,this)})));return function(t,r,n,i){return e.apply(this,arguments)}}()},{key:"fetchFeatureInfo",value:function(e,t,r,n,i){var l=(0,L.yZ)({extent:e,width:t}),o=function(e){return e.length?e.filter((function(e){return e.popupEnabled&&e.name&&e.queryable})).map((function(e){return e.name})).join(","):""}(new Q({layer:this,scale:l}).visibleSublayers);if(!this.featureInfoUrl||!o)return null;var s="1.3.0"===this.version?{I:n,J:i}:{x:n,y:i},u=(0,a.Z)({query_layers:o,request:"GetFeatureInfo",info_format:this.featureInfoFormat,feature_count:25,width:t,height:r},s),c=(0,a.Z)((0,a.Z)({},this.createExportImageParameters(e,t,r)),u),p=this._mixCustomParameters(c),f=(0,N.fl)(this.featureInfoUrl,p),y=document.createElement("iframe");y.src=f,y.style.border="none",y.style.margin="0",y.style.width="100%",y.setAttribute("sandbox","");var d=new h.Z({title:this.title,content:y});return new m.Z({sourceLayer:this,popupTemplate:d})}},{key:"findSublayerById",value:function(e){return this.allSublayers.find((function(t){return t.id===e}))}},{key:"findSublayerByName",value:function(e){return this.allSublayers.find((function(t){return t.name===e}))}},{key:"serviceSupportsSpatialReference",value:function(e){return(0,G.G)(this.url)||this.spatialReferences.some((function(t){var r=900913===t?U.Z.WebMercator:new U.Z({wkid:t});return(0,P.fS)(r,e)}))}},{key:"_fetchService",value:function(){var e=(0,n.Z)(f.mark((function e(t){var r,n;return f.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.resourceInfo){e.next=6;break}return this.parsedUrl.query&&this.parsedUrl.query.service&&(this.parsedUrl.query.SERVICE=this.parsedUrl.query.service,delete this.parsedUrl.query.service),this.parsedUrl.query&&this.parsedUrl.query.request&&(this.parsedUrl.query.REQUEST=this.parsedUrl.query.request,delete this.parsedUrl.query.request),e.next=4,(0,v.default)(this.parsedUrl.path,{query:(0,a.Z)((0,a.Z)({SERVICE:"WMS",REQUEST:"GetCapabilities"},this.parsedUrl.query),this.customParameters),responseType:"xml",signal:t});case 4:r=e.sent,this.resourceInfo=ie(r.data);case 6:this.parsedUrl&&("https"!==(n=new N.R9(this.parsedUrl.path)).scheme||n.port&&"443"!==n.port||-1!==d.Z.request.httpsDomains.indexOf(n.host)||d.Z.request.httpsDomains.push(n.host)),this.read(this.resourceInfo,{origin:"service"});case 8:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"_mixCustomParameters",value:function(e){if(!this.customLayerParameters&&!this.customParameters)return e;var t=(0,a.Z)((0,a.Z)({},this.customParameters),this.customLayerParameters);for(var r in t)e[r.toLowerCase()]=t[r];return e}}]),r}((0,x.p)((0,T.h)((0,B.n)((0,W.Q)((0,V.M)((0,j.q)((0,q.I)((0,S.R)(M.Z)))))))));function Ze(e,t,r){var n=new Map;e.every((function(e){return null==e.id}))&&(e=(0,_.d9)(e)).forEach((function(e,t){return e.id=t}));var i,a=(0,l.Z)(e);try{for(a.s();!(i=a.n()).done;){var o=i.value,s=new te;s.read(o,t),-1===(null==r?void 0:r.indexOf(s.name))&&(s.visible=!1),n.set(s.id,s)}}catch(m){a.e(m)}finally{a.f()}var u,c=[],p=(0,l.Z)(e);try{for(p.s();!(u=p.n()).done;){var f=u.value,y=n.get(f.id);if(null!=f.parentLayerId&&f.parentLayerId>=0){var d=n.get(f.parentLayerId);d.sublayers||(d.sublayers=new o),d.sublayers.unshift(y)}else c.unshift(y)}}catch(m){p.e(m)}finally{p.f()}return c}(0,y._)([(0,I.Cb)({readOnly:!0})],Oe.prototype,"allSublayers",void 0),(0,y._)([(0,I.Cb)({json:{type:Object,write:!0}})],Oe.prototype,"customParameters",void 0),(0,y._)([(0,I.Cb)({json:{type:Object,write:!0}})],Oe.prototype,"customLayerParameters",void 0),(0,y._)([(0,I.Cb)({type:String,json:{write:!0}})],Oe.prototype,"copyright",void 0),(0,y._)([(0,I.Cb)()],Oe.prototype,"description",void 0),(0,y._)([(0,I.Cb)({readOnly:!0})],Oe.prototype,"dimensions",void 0),(0,y._)([(0,I.Cb)({json:{type:[[Number]],read:{source:"extent"},write:{target:"extent"},origins:{"web-document":{write:{ignoreOrigin:!0}},"portal-item":{write:{ignoreOrigin:!0}}}}})],Oe.prototype,"fullExtent",void 0),(0,y._)([(0,Z.r)(["web-document","portal-item"],"fullExtent",["extent"])],Oe.prototype,"readFullExtentFromItemOrMap",null),(0,y._)([(0,R.c)(["web-document","portal-item"],"fullExtent",{extent:{type:[[Number]]}})],Oe.prototype,"writeFullExtent",null),(0,y._)([(0,I.Cb)()],Oe.prototype,"fullExtents",void 0),(0,y._)([(0,I.Cb)({type:String,json:{write:{ignoreOrigin:!0}}})],Oe.prototype,"featureInfoFormat",void 0),(0,y._)([(0,I.Cb)({type:String,json:{write:{ignoreOrigin:!0}}})],Oe.prototype,"featureInfoUrl",void 0),(0,y._)([(0,I.Cb)({type:String,json:{origins:{"web-document":{default:"image/png",type:Ie.jsonValues,read:{reader:Ie.read,source:"format"},write:{writer:Ie.write,target:"format"}}}}})],Oe.prototype,"imageFormat",void 0),(0,y._)([(0,Z.r)("imageFormat",["supportedImageFormatTypes"])],Oe.prototype,"readImageFormat",null),(0,y._)([(0,I.Cb)({type:Number,json:{read:{source:"maxHeight"},write:{target:"maxHeight"}}})],Oe.prototype,"imageMaxHeight",void 0),(0,y._)([(0,I.Cb)({type:Number,json:{read:{source:"maxWidth"},write:{target:"maxWidth"}}})],Oe.prototype,"imageMaxWidth",void 0),(0,y._)([(0,I.Cb)()],Oe.prototype,"imageTransparency",void 0),(0,y._)([(0,I.Cb)(H.rn)],Oe.prototype,"legendEnabled",void 0),(0,y._)([(0,I.Cb)({type:["show","hide","hide-children"]})],Oe.prototype,"listMode",void 0),(0,y._)([(0,I.Cb)({type:String,json:{write:{ignoreOrigin:!0}}})],Oe.prototype,"mapUrl",void 0),(0,y._)([(0,I.Cb)({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:function(){return{enabled:!1}}}}})],Oe.prototype,"isReference",void 0),(0,y._)([(0,I.Cb)({type:["WMS"]})],Oe.prototype,"operationalLayerType",void 0),(0,y._)([(0,I.Cb)()],Oe.prototype,"resourceInfo",void 0),(0,y._)([(0,I.Cb)({type:U.Z,json:{origins:{service:{read:{source:"extent.spatialReference"}}},write:!1}})],Oe.prototype,"spatialReference",void 0),(0,y._)([(0,Z.r)(["web-document","portal-item"],"spatialReference",["spatialReferences"])],Oe.prototype,"readSpatialReferenceFromItemOrDocument",null),(0,y._)([(0,I.Cb)({type:[O.z8],json:{read:!1,origins:{service:{read:!0},"web-document":{read:!1,write:{ignoreOrigin:!0}},"portal-item":{read:!1,write:{ignoreOrigin:!0}}}}})],Oe.prototype,"spatialReferences",void 0),(0,y._)([(0,R.c)(["web-document","portal-item"],"spatialReferences")],Oe.prototype,"writeSpatialReferences",null),(0,y._)([(0,I.Cb)({type:b.Z.ofType(te),json:{write:{target:"layers",overridePolicy:function(e,t,r){if(function(e,t){return e.some((function(e){for(var r in e)if((0,k.d)(e,r,null,t))return!0;return!1}))}(this.allSublayers,r))return{ignoreOrigin:!0}}}}})],Oe.prototype,"sublayers",void 0),(0,y._)([(0,Z.r)(["web-document","portal-item"],"sublayers",["layers","visibleLayers"])],Oe.prototype,"readSublayersFromItemOrMap",null),(0,y._)([(0,Z.r)("service","sublayers",["layers"])],Oe.prototype,"readSublayers",null),(0,y._)([(0,R.c)("sublayers",{layers:{type:[te]},visibleLayers:{type:[String]}})],Oe.prototype,"writeSublayers",null),(0,y._)([(0,I.Cb)({json:{read:!1},readOnly:!0,value:"wms"})],Oe.prototype,"type",void 0),(0,y._)([(0,I.Cb)(H.HQ)],Oe.prototype,"url",void 0),(0,y._)([(0,I.Cb)({type:String,json:{write:{ignoreOrigin:!0}}})],Oe.prototype,"version",void 0);var Fe=Oe=(0,y._)([(0,F.j)("esri.layers.WMSLayer")],Oe)},86685:function(e,t,r){r.d(t,{A:function(){return a}});var n=r(70885),i=[[3819,3819],[3821,3824],[3889,3889],[3906,3906],[4001,4025],[4027,4036],[4039,4047],[4052,4055],[4074,4075],[4080,4081],[4120,4176],[4178,4185],[4188,4216],[4218,4289],[4291,4304],[4306,4319],[4322,4326],[4463,4463],[4470,4470],[4475,4475],[4483,4483],[4490,4490],[4555,4558],[4600,4646],[4657,4765],[4801,4811],[4813,4821],[4823,4824],[4901,4904],[5013,5013],[5132,5132],[5228,5229],[5233,5233],[5246,5246],[5252,5252],[5264,5264],[5324,5340],[5354,5354],[5360,5360],[5365,5365],[5370,5373],[5381,5381],[5393,5393],[5451,5451],[5464,5464],[5467,5467],[5489,5489],[5524,5524],[5527,5527],[5546,5546],[2044,2045],[2081,2083],[2085,2086],[2093,2093],[2096,2098],[2105,2132],[2169,2170],[2176,2180],[2193,2193],[2200,2200],[2206,2212],[2319,2319],[2320,2462],[2523,2549],[2551,2735],[2738,2758],[2935,2941],[2953,2953],[3006,3030],[3034,3035],[3038,3051],[3058,3059],[3068,3068],[3114,3118],[3126,3138],[3150,3151],[3300,3301],[3328,3335],[3346,3346],[3350,3352],[3366,3366],[3389,3390],[3416,3417],[3833,3841],[3844,3850],[3854,3854],[3873,3885],[3907,3910],[4026,4026],[4037,4038],[4417,4417],[4434,4434],[4491,4554],[4839,4839],[5048,5048],[5105,5130],[5253,5259],[5269,5275],[5343,5349],[5479,5482],[5518,5519],[5520,5520],[20004,20032],[20064,20092],[21413,21423],[21473,21483],[21896,21899],[22171,22177],[22181,22187],[22191,22197],[25884,25884],[27205,27232],[27391,27398],[27492,27492],[28402,28432],[28462,28492],[30161,30179],[30800,30800],[31251,31259],[31275,31279],[31281,31290],[31466,31700]];function a(e){return i.some((function(t){var r=(0,n.Z)(t,2),i=r[0],a=r[1];return e>=i&&e<=a}))}}}]);
//# sourceMappingURL=454.acd3a203.chunk.js.map