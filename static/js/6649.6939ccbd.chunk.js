"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[6649],{66649:function(e,t,r){r.r(t),r.d(t,{default:function(){return be}});var n=r(15861),i=r(1413),o=r(15671),a=r(43144),l=r(11752),s=r(61120),u=r(60136),c=r(29388),p=r(87757),h=r(27366),y=r(76200),f=r(10064),d=r(84652),v=r(97642),m=r(75298),g=r(35995),A=r(49861),S=(r(25243),r(38511)),w=r(69912),x=r(31201),b=r(53866),k=r(78952),_=r(74184),Z=r(27961),I=r(17775),T=r(11936),U=r(6693),R=r(46671),C=r(6061),E=r(29598),P=r(56811),L=null;function O(e){if(L)return L;var t={lossy:"UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",lossless:"UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==",alpha:"UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAARBxAR/Q9ERP8DAABWUDggGAAAABQBAJ0BKgEAAQAAAP4AAA3AAP7mtQAAAA==",animation:"UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA"};return L=new Promise((function(r){var n=new Image;n.onload=function(){n.onload=n.onerror=null,r(n.width>0&&n.height>0)},n.onerror=function(){n.onload=n.onerror=null,r(!1)},n.src="data:image/webp;base64,"+t[e]})),L}var B=r(70885),M=r(32718).Z.getLogger("esri.layers.support.SpriteSource"),D=function(){function e(t,r,n,i){(0,o.Z)(this,e),this.baseURL=t,this.devicePixelRatio=r,this.maxTextureSize=n,this._spriteImageFormat=i,this._isRetina=!1,this._spritesData={},this.image=null,this.width=null,this.height=null,this.loadStatus="not-loaded"}return(0,a.Z)(e,[{key:"spriteNames",get:function(){var e=[];for(var t in this._spritesData)e.push(t);return e.sort(),e}},{key:"getSpriteInfo",value:function(e){return this._spritesData[e]}},{key:"load",value:function(){var e=(0,n.Z)(p.mark((function e(t){return p.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.baseURL){e.next=13;break}return this.loadStatus="loading",e.prev=2,e.next=5,this._loadSprites(t);case 5:this.loadStatus="loaded",e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),this.loadStatus="failed";case 11:e.next=14;break;case 13:this.loadStatus="failed";case 14:case"end":return e.stop()}}),e,this,[[2,8]])})));return function(t){return e.apply(this,arguments)}}()},{key:"_loadSprites",value:function(e){var t=this;this._isRetina=this.devicePixelRatio>1.15;var r=(0,g.mN)(this.baseURL),n=r.query?"?"+(0,g.B7)(r.query):"",o=this._isRetina?"@2x":"",a="".concat(r.path).concat(o,".").concat(this._spriteImageFormat).concat(n),l="".concat(r.path).concat(o,".json").concat(n);return Promise.all([(0,y.default)(l,e),(0,y.default)(a,(0,i.Z)({responseType:"image"},e))]).then((function(e){var n=(0,B.Z)(e,2),i=n[0],o=n[1],a=Object.keys(i.data);if(!a||0===a.length||1===a.length&&"_ssl"===a[0]||!o||!o.data)return t._spritesData=t.image=null,t.width=t.height=0,Promise.resolve(null);t._spritesData=i.data;var l=o.data,s=Math.max(t.maxTextureSize,4096);if(l.width>s||l.height>s){var u="Sprite resource for style ".concat(r.path," is bigger than the maximum allowed of ").concat(s," pixels}");throw M.error(u),new f.Z("SpriteSource",u)}t.width=l.width,t.height=l.height;var c=document.createElement("canvas"),p=c.getContext("2d");c.width=l.width,c.height=l.height,p.drawImage(l,0,0,l.width,l.height);for(var h,y=p.getImageData(0,0,l.width,l.height),d=new Uint8Array(y.data),v=0;v<d.length;v+=4)h=d[v+3]/255,d[v]=d[v]*h,d[v+1]=d[v+1]*h,d[v+2]=d[v+2]*h;t.image=d}))}}]),e}(),N=r(22824),j=r(37762),G=r(42265),W=r(71466),F=r(23638),V=r(73828),z=function(){function e(t){(0,o.Z)(this,e),this.url=t}return(0,a.Z)(e,[{key:"fetchTileIndex",value:function(){var e=(0,n.Z)(p.mark((function e(){return p.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(this._tileIndexPromise||(this._tileIndexPromise=(0,y.default)(this.url).then((function(e){return e.data.index}))),this._tileIndexPromise));case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"dataKey",value:function(){var e=(0,n.Z)(p.mark((function e(t,r){var n;return p.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.fetchTileIndex();case 2:return n=e.sent,e.abrupt("return",((0,m.k_)(r),this._getIndexedDataKey(n,t)));case 4:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"_getIndexedDataKey",value:function(e,t){var r=[t];if(t.level<0||t.row<0||t.col<0||t.row>>t.level>0||t.col>>t.level>0)return null;for(var n=t;0!==n.level;)n=new V.Z(n.level-1,n.row>>1,n.col>>1,n.world),r.push(n);var i,o,a=e,l=r.pop();if(1===a)return l;for(;r.length;)if(o=(1&(i=r.pop()).col)+((1&i.row)<<1),a){if(0===a[o]){l=null;break}if(1===a[o]){l=i;break}l=i,a=a[o]}return l}}]),e}(),Q=function(){function e(t,r){(0,o.Z)(this,e),this._tilemap=t,this._tileIndexUrl=r}return(0,a.Z)(e,[{key:"fetchTileIndex",value:function(){var e=(0,n.Z)(p.mark((function e(t){return p.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(this._tileIndexPromise||(this._tileIndexPromise=(0,y.default)(this._tileIndexUrl,{query:(0,i.Z)({},null==t?void 0:t.query)}).then((function(e){return e.data.index}))),this._tileIndexPromise));case 1:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"dataKey",value:function(e,t){var r=e.level,n=e.row,i=e.col,o=new V.Z(e);return this._tilemap.fetchAvailabilityUpsample(r,n,i,o,t).then((function(){return o.world=e.world,o})).catch((function(e){if((0,m.D_)(e))throw e;return null}))}}]),e}(),q=new Map;function K(e,t,r,n,o){return function(e,t){var r=q.get(e);if(r)return r.then((function(e){return(0,d.d9)(e)}));var n=(0,y.default)(e,(0,i.Z)({responseType:"array-buffer"},t)).then((function(t){var r=t.data;return q.delete(e),r})).catch((function(t){throw q.delete(e),t}));return q.set(e,n),n}(e.replace(/\{z\}/gi,t.toString()).replace(/\{y\}/gi,r.toString()).replace(/\{x\}/gi,n.toString()),o)}var J=function(){function e(t,r,n){(0,o.Z)(this,e),this.tilemap=null,this.tileInfo=null,this.capabilities=null,this.fullExtent=null,this.name=t,this.sourceUrl=r;var a=(0,g.mN)(this.sourceUrl),l=(0,d.d9)(n),s=l.tiles;if(a)for(var u=0;u<s.length;u++){var c=(0,g.mN)(s[u]);c&&((0,g.YP)(c.path)||(c.path=(0,g.v_)(a.path,c.path)),s[u]=(0,g.fl)(c.path,(0,i.Z)((0,i.Z)({},a.query),c.query)))}this.tileServers=s;var p=n.capabilities&&n.capabilities.split(",").map((function(e){return e.toLowerCase().trim()})),h=!0===(null==n?void 0:n.exportTilesAllowed),y=!0===(null==p?void 0:p.includes("tilemap")),f=h&&n.hasOwnProperty("maxExportTilesCount")?n.maxExportTilesCount:0;this.capabilities={operations:{supportsExportTiles:h,supportsTileMap:y},exportTiles:h?{maxExportTilesCount:+f}:null},this.tileInfo=(0,W.d)(l.tileInfo,l,null,{ignoreMinMaxLOD:!0});var v=n.tileMap?(0,g.fl)((0,g.v_)(a.path,n.tileMap),a.query):null;y?(this.type="vector-tile",this.tilemap=new Q(new F.y({layer:{parsedUrl:a,tileInfo:this.tileInfo,type:"vector-tile",tileServers:this.tileServers}}),v)):v&&(this.tilemap=new z(v)),this.fullExtent=b.Z.fromJSON(n.fullExtent)}return(0,a.Z)(e,[{key:"destroy",value:function(){}},{key:"getRefKey",value:function(){var e=(0,n.Z)(p.mark((function e(t,r){var n,i;return p.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",null!=(n=null==(i=this.tilemap)?void 0:i.dataKey(t,r))?n:t);case 1:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"requestTile",value:function(e,t,r,n){return K(this.tileServers[t%this.tileServers.length],e,t,r,n)}},{key:"isCompatibleWith",value:function(e){var t=this.tileInfo,r=e.tileInfo;if(!t.spatialReference.equals(r.spatialReference))return!1;if(!t.origin.equals(r.origin))return!1;if(Math.round(t.dpi)!==Math.round(r.dpi))return!1;for(var n=t.lods,i=r.lods,o=Math.min(n.length,i.length),a=0;a<o;a++){var l=n[a],s=i[a];if(l.level!==s.level||Math.round(l.scale)!==Math.round(s.scale))return!1}return!0}}]),e}(),X=G.Z.defaults&&G.Z.defaults.io.corsEnabledServers;function Y(e,t){return H.apply(this,arguments)}function H(){return H=(0,n.Z)(p.mark((function e(t,r){var n,i,o,a,l,s;return p.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={source:null,sourceBase:null,sourceUrl:null,validatedSource:null,style:null,styleBase:null,styleUrl:null,sourceNameToSource:{},primarySourceName:"",spriteFormat:"png"},i="string"==typeof t?[t,null]:[null,t.jsonUrl],o=(0,B.Z)(i,2),a=o[0],l=o[1],e.next=3,te(n,"esri",t,l,r);case 3:return s={layerDefinition:n.validatedSource,url:a,serviceUrl:n.sourceUrl,style:n.style,styleUrl:n.styleUrl,spriteUrl:n.style.sprite&&ee(n.styleBase,n.style.sprite),spriteFormat:n.spriteFormat,glyphsUrl:n.style.glyphs&&ee(n.styleBase,n.style.glyphs),sourceNameToSource:n.sourceNameToSource,primarySourceName:n.primarySourceName},e.abrupt("return",($(s.spriteUrl),$(s.glyphsUrl),s));case 5:case"end":return e.stop()}}),e)}))),H.apply(this,arguments)}function $(e){if(e){var t=(0,g.P$)(e);X&&!X.includes(t)&&X.push(t)}}function ee(){for(var e,t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];for(var i=0;i<r.length;++i)if((0,g.oC)(r[i])){if(e){var o=e.split("://")[0];e=o+":"+r[i].trim()}}else e=(0,g.YP)(r[i])?r[i]:(0,g.v_)(e,r[i]);return(0,g.Qj)(e)}function te(e,t,r,n,i){return re.apply(this,arguments)}function re(){return re=(0,n.Z)(p.mark((function e(t,r,n,o,a){var l,s,u,c,h;return p.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((0,m.k_)(a),"string"!=typeof n){e.next=11;break}return $(c=(0,g.Fv)(n)),e.next=5,(0,y.default)(c,(0,i.Z)((0,i.Z)({},a),{},{responseType:"json",query:(0,i.Z)({f:"json"},null==a?void 0:a.query)}));case 5:(u=e.sent).ssl&&(l&&(l=l.replace(/^http:/i,"https:")),s&&(s=s.replace(/^http:/i,"https:"))),l=c,s=c,e.next=12;break;case 11:u={data:n},l=n.jsonUrl||null,s=o;case 12:return h=u.data,e.abrupt("return",ne(h)?(t.styleUrl=l||null,oe(t,h,s,a)):ie(h)?t.sourceUrl?le(t,h,s,!1,r,a):(t.sourceUrl=l||null,le(t,h,s,!0,r,a)):Promise.reject("You must specify the URL or the JSON for a service or for a style."));case 14:case"end":return e.stop()}}),e)}))),re.apply(this,arguments)}function ne(e){return!!e.sources}function ie(e){return!ne(e)}function oe(e,t,r,n){return ae.apply(this,arguments)}function ae(){return ae=(0,n.Z)(p.mark((function e(t,r,n,i){var o,a,l,s,u,c;return p.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o=n?(0,g.Yd)(n):(0,g.L)(),t.styleBase=o,t.style=r,t.styleUrl&&$(t.styleUrl),r["sprite-format"]&&"webp"===r["sprite-format"].toLowerCase()&&(t.spriteFormat="webp"),a=[],!r.sources||!r.sources.esri){e.next=11;break}if(!(l=r.sources.esri).url){e.next=10;break}return e.next=8,te(t,"esri",ee(o,l.url),void 0,i);case 8:e.next=11;break;case 10:a.push(te(t,"esri",l,o,i));case 11:for(s=0,u=Object.keys(r.sources);s<u.length;s++)"esri"!==(c=u[s])&&"vector"===r.sources[c].type&&(r.sources[c].url?a.push(te(t,c,ee(o,r.sources[c].url),void 0,i)):r.sources[c].tiles&&a.push(te(t,c,r.sources[c],o,i)));return e.next=14,Promise.all(a);case 14:case"end":return e.stop()}}),e)}))),ae.apply(this,arguments)}function le(e,t,r,n,i,o){return se.apply(this,arguments)}function se(){return se=(0,n.Z)(p.mark((function e(t,r,n,i,o,a){var l,s,u,c;return p.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(l=n?(0,g.Qj)(n)+"/":(0,g.L)(),s=ue(r,l),u=new J(o,(0,g.fl)(l,null==a?void 0:a.query),s),i||!(t.primarySourceName in t.sourceNameToSource)){e.next=6;break}if((c=t.sourceNameToSource[t.primarySourceName]).isCompatibleWith(u)){e.next=5;break}return e.abrupt("return",Promise.resolve());case 5:null!=u.fullExtent&&(null!=c.fullExtent?c.fullExtent.union(u.fullExtent):c.fullExtent=u.fullExtent.clone()),c.tileInfo.lods.length<u.tileInfo.lods.length&&(c.tileInfo=u.tileInfo);case 6:if(i?(t.sourceBase=l,t.source=r,t.validatedSource=s,t.primarySourceName=o,t.sourceUrl&&$(t.sourceUrl)):$(l),t.sourceNameToSource[o]=u,t.style){e.next=8;break}return e.abrupt("return",null==r.defaultStyles?Promise.reject():"string"==typeof r.defaultStyles?te(t,"",ee(l,r.defaultStyles,"root.json"),void 0,a):te(t,"",r.defaultStyles,ee(l,"root.json"),a));case 8:case"end":return e.stop()}}),e)}))),se.apply(this,arguments)}function ue(e,t){if(e.hasOwnProperty("tileInfo"))return e;for(var r={xmin:-20037507.067161843,ymin:-20037507.067161843,xmax:20037507.067161843,ymax:20037507.067161843,spatialReference:{wkid:102100}},n=78271.51696400007,i=295828763.7957775,o=[],a=e.hasOwnProperty("minzoom")?+e.minzoom:0,l=e.hasOwnProperty("maxzoom")?+e.maxzoom:22,s=0;s<=l;s++)s>=a&&o.push({level:s,scale:i,resolution:n}),n/=2,i/=2;var u,c=(0,j.Z)(e.tiles);try{for(c.s();!(u=c.n()).done;){$(ee(t,u.value))}}catch(p){c.e(p)}finally{c.f()}return{capabilities:"TilesOnly",initialExtent:r,fullExtent:r,minScale:0,maxScale:0,tiles:e.tiles,tileInfo:{rows:512,cols:512,dpi:96,format:"pbf",origin:{x:-20037508.342787,y:20037508.342787},lods:o,spatialReference:{wkid:102100}}}}var ce=r(32698),pe=1e-6;function he(e,t){if(e===t)return!0;if(!e&&null!=t)return!1;if(null!=e&&!t)return!1;if(!e.spatialReference.equals(t.spatialReference)||e.dpi!==t.dpi)return!1;var r,n,i=e.origin,o=t.origin;if(Math.abs(i.x-o.x)>=pe||Math.abs(i.y-o.y)>=pe)return!1;e.lods[0].scale>t.lods[0].scale?(r=e,n=t):(n=e,r=t);for(var a=r.lods[0].scale;a>=n.lods[n.lods.length-1].scale-pe;a/=2)if(Math.abs(a-n.lods[0].scale)<pe)return!0;return!1}function ye(e,t){if(e===t)return e;if(!e&&null!=t)return t;if(null!=e&&!t)return e;for(var r=e.size[0],n=e.format,i=e.dpi,o={x:e.origin.x,y:e.origin.y},a=e.spatialReference.toJSON(),l=e.lods[0].scale>t.lods[0].scale?e.lods[0]:t.lods[0],s=e.lods[e.lods.length-1].scale<=t.lods[t.lods.length-1].scale?e.lods[e.lods.length-1]:t.lods[t.lods.length-1],u=l.scale,c=l.resolution,p=s.scale,h=[],y=u,f=c,d=0;y>p;)h.push({level:d,resolution:f,scale:y}),d++,y/=2,f/=2;return new N.Z({size:[r,r],dpi:i,format:n||"pbf",origin:o,lods:h,spatialReference:a})}var fe,de=r(30969),ve=r(92026),me=r(49800);function ge(){return fe||(fe=function(){var e=new Se,t=we(me.zO.WEBGL1,e);return(0,ve.Wi)(t)||(e.supportsElementIndexUint=null!==t.getExtension("OES_element_index_uint"),e.supportsStandardDerivatives=null!==t.getExtension("OES_standard_derivatives"),e.supportsInstancedArrays=null!==t.getExtension("ANGLE_instanced_arrays"),e.supportsTextureFloat=null!==t.getExtension("OES_texture_float")),e}()),fe}var Ae=(0,a.Z)((function e(){(0,o.Z)(this,e),this.available=!1,this.majorPerformanceCaveat=!1,this.maxTextureSize=0,this.supportsVertexShaderSamplers=!1,this.supportsHighPrecisionFragment=!1})),Se=function(e){(0,u.Z)(r,e);var t=(0,c.Z)(r);function r(){var e;return(0,o.Z)(this,r),(e=t.apply(this,arguments)).type=me.zO.WEBGL1,e.supportsElementIndexUint=!1,e.supportsStandardDerivatives=!1,e.supportsInstancedArrays=!1,e.supportsTextureFloat=!1,e}return(0,a.Z)(r)}(Ae);function we(e,t){if(e===me.zO.WEBGL1&&void 0===typeof WebGLRenderingContext||e===me.zO.WEBGL2&&void 0===typeof WebGL2RenderingContext)return null;var r=document.createElement("canvas");if(!r)return null;var n=(0,me.kr)(r,e,{failIfMajorPerformanceCaveat:!0});if((0,ve.Wi)(n)&&(n=(0,me.kr)(r,e),(0,ve.pC)(n)&&(t.majorPerformanceCaveat=!0)),(0,ve.Wi)(n))return n;if(e===me.zO.WEBGL1){var i=n.getParameter(n.VERSION),o=null==i?void 0:i.match(/^WebGL\s+([\d.]*)/);if(o){var a=parseFloat(o[1]);t.available=a>=.94}}else t.available=!0;t.maxTextureSize=n.getParameter(n.MAX_TEXTURE_SIZE),t.supportsVertexShaderSamplers=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS)>0;var l=n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT);return l&&(t.supportsHighPrecisionFragment=l.precision>0),n}var xe=function(e){(0,u.Z)(r,e);var t=(0,c.Z)(r);function r(){var e;(0,o.Z)(this,r);for(var n=arguments.length,i=new Array(n),a=0;a<n;a++)i[a]=arguments[a];return(e=t.call.apply(t,[this].concat(i)))._spriteSourceMap=new Map,e.currentStyleInfo=null,e.style=null,e.isReference=null,e.operationalLayerType="VectorTileLayer",e.type="vector-tile",e.url=null,e.symbolCollisionBoxesVisible=!1,e.path=null,e}return(0,a.Z)(r,[{key:"normalizeCtorArgs",value:function(e,t){return"string"==typeof e?(0,i.Z)({url:e},t):e}},{key:"destroy",value:function(){if(this.sourceNameToSource)for(var e=0,t=Object.values(this.sourceNameToSource);e<t.length;e++){var r=t[e];null==r||r.destroy()}this._spriteSourceMap.clear()}},{key:"prefetchResources",value:function(){var e=(0,n.Z)(p.mark((function e(t){return p.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.loadSpriteSource(globalThis.devicePixelRatio||1,t);case 2:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"load",value:function(e){var t=this,r=this.loadFromPortal({supportedTypes:["Vector Tile Service"],supportsData:!1},e).catch(m.r9).then((0,n.Z)(p.mark((function r(){var n;return p.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(t.portalItem&&t.portalItem.id){r.next=2;break}return r.abrupt("return");case 2:return n="".concat(t.portalItem.itemUrl,"/resources/styles/root.json"),r.next=5,(0,y.default)(n,(0,i.Z)((0,i.Z)({},e),{},{query:(0,i.Z)((0,i.Z)({f:"json"},t.customParameters),{},{token:t.apiKey})}));case 5:if(r.t0=r.sent.data,!r.t0){r.next=8;break}t.read({url:n},(0,ce.m)(t.portalItem));case 8:case"end":return r.stop()}}),r)})))).catch(m.r9).then((function(){return t._loadStyle(e)}));return this.addResolvingPromise(r),Promise.resolve(this)}},{key:"attributionDataUrl",get:function(){var e=this.currentStyleInfo,t=e&&e.serviceUrl&&(0,g.mN)(e.serviceUrl);if(!t)return null;var r=this._getDefaultAttribution(t.path);return r?(0,g.fl)(r,(0,i.Z)((0,i.Z)({},this.customParameters),{},{token:this.apiKey})):null}},{key:"capabilities",get:function(){var e=this.primarySource;return e?e.capabilities:{operations:{supportsExportTiles:!1,supportsTileMap:!1},exportTiles:null}}},{key:"fullExtent",get:function(){var e;return(null==(e=this.primarySource)?void 0:e.fullExtent)||null}},{key:"parsedUrl",get:function(){return this.serviceUrl?(0,g.mN)(this.serviceUrl):null}},{key:"serviceUrl",get:function(){return this.currentStyleInfo&&this.currentStyleInfo.serviceUrl||null}},{key:"spatialReference",get:function(){return this.tileInfo&&this.tileInfo.spatialReference||null}},{key:"styleUrl",get:function(){return this.currentStyleInfo&&this.currentStyleInfo.styleUrl||null}},{key:"writeStyleUrl",value:function(e,t){e&&(0,g.oC)(e)&&(e="https:".concat(e)),t.styleUrl=e}},{key:"tileInfo",get:function(){var e,t=[];for(var r in this.sourceNameToSource)t.push(this.sourceNameToSource[r]);var n=(null==(e=this.primarySource)?void 0:e.tileInfo)||new N.Z;if(t.length>1)for(var i=0;i<t.length;i++)he(n,t[i].tileInfo)&&(n=ye(n,t[i].tileInfo));return n}},{key:"readVersion",value:function(e,t){return t.version?parseFloat(t.version):parseFloat(t.currentVersion)}},{key:"loadSpriteSource",value:function(){var e=(0,n.Z)(p.mark((function e(){var t,r,n,o,a,l,s=arguments;return p.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=s.length>0&&void 0!==s[0]?s[0]:1,r=s.length>1?s[1]:void 0,this._spriteSourceMap.has(t)){e.next=7;break}return o=ge().maxTextureSize,a=null!=(n=this.currentStyleInfo)&&n.spriteUrl?(0,g.fl)(this.currentStyleInfo.spriteUrl,(0,i.Z)((0,i.Z)({},this.customParameters),{},{token:this.apiKey})):null,l=new D(a,t,o,this.currentStyleInfo.spriteFormat),e.next=6,l.load(r);case 6:this._spriteSourceMap.set(t,l);case 7:return e.abrupt("return",Promise.resolve(this._spriteSourceMap.get(t)));case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"setSpriteSource",value:function(){var e=(0,n.Z)(p.mark((function e(t){var r,n,o,a,l,s,u=arguments;return p.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=u.length>1&&void 0!==u[1]?u[1]:"png",n=u.length>2&&void 0!==u[2]?u[2]:1,o=u.length>3?u[3]:void 0,a=ge().maxTextureSize,l=t?(0,g.fl)(t,(0,i.Z)((0,i.Z)({},this.customParameters),{},{token:this.apiKey})):null){e.next=6;break}return e.abrupt("return",null);case 6:return s=new D(l,n,a,r),e.prev=7,e.next=10,s.load(o);case 10:return this._spriteSourceMap.clear(),this._spriteSourceMap.set(n,s),this.currentStyleInfo.spriteUrl=l,this.emit("spriteSource-change",{spriteSource:s}),e.abrupt("return",s);case 17:e.prev=17,e.t0=e.catch(7),(0,m.r9)(e.t0);case 20:return e.abrupt("return",null);case 21:case"end":return e.stop()}}),e,this,[[7,17]])})));return function(t){return e.apply(this,arguments)}}()},{key:"loadStyle",value:function(){var e=(0,n.Z)(p.mark((function e(t,r){var n,i,o=this;return p.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=t||this.style||this.url,e.abrupt("return",(this._loadingTask&&"string"==typeof i&&this.url===i||(null==(n=this._loadingTask)||n.abort(),this._loadingTask=(0,m.vr)((function(e){return o._spriteSourceMap.clear(),o._getSourceAndStyle(i,{signal:e})}),r)),this._loadingTask.promise));case 2:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"getStyleLayerId",value:function(e){return this.styleRepository.getStyleLayerId(e)}},{key:"getStyleLayerIndex",value:function(e){return this.styleRepository.getStyleLayerIndex(e)}},{key:"getPaintProperties",value:function(e){return(0,d.d9)(this.styleRepository.getPaintProperties(e))}},{key:"setPaintProperties",value:function(e,t){var r=this.styleRepository.isPainterDataDriven(e);this.styleRepository.setPaintProperties(e,t);var n=this.styleRepository.isPainterDataDriven(e);this.emit("paint-change",{layer:e,paint:t,isDataDriven:r||n})}},{key:"getStyleLayer",value:function(e){return(0,d.d9)(this.styleRepository.getStyleLayer(e))}},{key:"setStyleLayer",value:function(e,t){this.styleRepository.setStyleLayer(e,t),this.emit("style-layer-change",{layer:e,index:t})}},{key:"deleteStyleLayer",value:function(e){this.styleRepository.deleteStyleLayer(e),this.emit("delete-style-layer",{layer:e})}},{key:"getLayoutProperties",value:function(e){return(0,d.d9)(this.styleRepository.getLayoutProperties(e))}},{key:"setLayoutProperties",value:function(e,t){this.styleRepository.setLayoutProperties(e,t),this.emit("layout-change",{layer:e,layout:t})}},{key:"setStyleLayerVisibility",value:function(e,t){this.styleRepository.setStyleLayerVisibility(e,t),this.emit("style-layer-visibility-change",{layer:e,visibility:t})}},{key:"getStyleLayerVisibility",value:function(e){return this.styleRepository.getStyleLayerVisibility(e)}},{key:"write",value:function(e,t){return null!=t&&t.origin&&!this.styleUrl?(t.messages&&t.messages.push(new f.Z("vectortilelayer:unsupported","VectorTileLayer (".concat(this.title,", ").concat(this.id,") with style defined by JSON only are not supported"),{layer:this})),null):(0,l.Z)((0,s.Z)(r.prototype),"write",this).call(this,e,t)}},{key:"getTileUrl",value:function(e,t,r){return null}},{key:"_getSourceAndStyle",value:function(){var e=(0,n.Z)(p.mark((function e(t,r){var n;return p.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}throw new Error("invalid style!");case 2:return e.next=4,Y(t,(0,i.Z)((0,i.Z)({},r),{},{query:(0,i.Z)((0,i.Z)({},this.customParameters),{},{token:this.apiKey})}));case 4:if("webp"!==(n=e.sent).spriteFormat){e.next=11;break}return e.next=8,O("lossy");case 8:if(e.t0=e.sent,e.t0){e.next=11;break}n.spriteFormat="png";case 11:this._set("currentStyleInfo",(0,i.Z)({},n)),"string"==typeof t?(this.url=t,this.style=null):(this.url=null,this.style=t),this._set("sourceNameToSource",n.sourceNameToSource),this._set("primarySource",n.sourceNameToSource[n.primarySourceName]),this._set("styleRepository",new de.Z(n.style)),this.read(n.layerDefinition,{origin:"service"}),this.emit("load-style");case 12:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"_getDefaultAttribution",value:function(e){var t=e.match(/^https?:\/\/(?:basemaps|basemapsbeta|basemapsdev)(?:-api)?\.arcgis\.com(\/[^\/]+)?\/arcgis\/rest\/services\/([^\/]+(\/[^\/]+)*)\/vectortileserver/i);if(t){var r=t[2]&&t[2].toLowerCase();if(r)for(var n=t[1]||"",i=0,o=["OpenStreetMap_v2","OpenStreetMap_Daylight_v2","OpenStreetMap_Export_v2","OpenStreetMap_FTS_v2","OpenStreetMap_GCS_v2","World_Basemap","World_Basemap_v2","World_Basemap_Export_v2","World_Basemap_GCS_v2","World_Basemap_WGS84","World_Contours_v2"];i<o.length;i++){var a=o[i];if(a.toLowerCase().includes(r))return(0,g.Fv)("//static.arcgis.com/attribution/Vector".concat(n,"/").concat(a))}}}},{key:"_loadStyle",value:function(){var e=(0,n.Z)(p.mark((function e(t){var r,n;return p.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",null!=(r=null==(n=this._loadingTask)?void 0:n.promise)?r:this.loadStyle(null,t));case 1:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()}]),r}((0,U.h)((0,P.M)((0,I.Z)((0,T.Y)((0,C.q)((0,E.I)((0,R.N)((0,Z.V)((0,v.R)(_.Z))))))))));(0,h._)([(0,A.Cb)({readOnly:!0})],xe.prototype,"attributionDataUrl",null),(0,h._)([(0,A.Cb)({type:["show","hide"]})],xe.prototype,"listMode",void 0),(0,h._)([(0,A.Cb)({readOnly:!0,json:{read:!1}})],xe.prototype,"capabilities",null),(0,h._)([(0,A.Cb)({readOnly:!0})],xe.prototype,"currentStyleInfo",void 0),(0,h._)([(0,A.Cb)({json:{read:!1},readOnly:!0,type:b.Z})],xe.prototype,"fullExtent",null),(0,h._)([(0,A.Cb)()],xe.prototype,"style",void 0),(0,h._)([(0,A.Cb)({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:function(){return{enabled:!1}}}}})],xe.prototype,"isReference",void 0),(0,h._)([(0,A.Cb)({type:["VectorTileLayer"]})],xe.prototype,"operationalLayerType",void 0),(0,h._)([(0,A.Cb)({readOnly:!0})],xe.prototype,"parsedUrl",null),(0,h._)([(0,A.Cb)({readOnly:!0})],xe.prototype,"serviceUrl",null),(0,h._)([(0,A.Cb)({type:k.Z,readOnly:!0})],xe.prototype,"spatialReference",null),(0,h._)([(0,A.Cb)({readOnly:!0})],xe.prototype,"styleRepository",void 0),(0,h._)([(0,A.Cb)({readOnly:!0})],xe.prototype,"sourceNameToSource",void 0),(0,h._)([(0,A.Cb)({readOnly:!0})],xe.prototype,"primarySource",void 0),(0,h._)([(0,A.Cb)({type:String,readOnly:!0,json:{write:{ignoreOrigin:!0},origins:{"web-document":{write:{ignoreOrigin:!0,isRequired:!0}}}}})],xe.prototype,"styleUrl",null),(0,h._)([(0,x.c)(["portal-item","web-document"],"styleUrl")],xe.prototype,"writeStyleUrl",null),(0,h._)([(0,A.Cb)({json:{read:!1,origins:{service:{read:!1}}},readOnly:!0,type:N.Z})],xe.prototype,"tileInfo",null),(0,h._)([(0,A.Cb)({json:{read:!1},readOnly:!0,value:"vector-tile"})],xe.prototype,"type",void 0),(0,h._)([(0,A.Cb)({json:{origins:{"web-document":{read:{source:"styleUrl"}},"portal-item":{read:{source:"url"}}},write:!1,read:!1}})],xe.prototype,"url",void 0),(0,h._)([(0,A.Cb)({readOnly:!0})],xe.prototype,"version",void 0),(0,h._)([(0,S.r)("version",["version","currentVersion"])],xe.prototype,"readVersion",null),(0,h._)([(0,A.Cb)({type:Boolean})],xe.prototype,"symbolCollisionBoxesVisible",void 0),(0,h._)([(0,A.Cb)({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],xe.prototype,"path",void 0);var be=xe=(0,h._)([(0,w.j)("esri.layers.VectorTileLayer")],xe)},17775:function(e,t,r){r.d(t,{Z:function(){return f}});var n=r(15671),i=r(43144),o=r(60136),a=r(29388),l=r(27366),s=(r(59486),r(49861)),u=(r(63780),r(93169),r(25243),r(38511)),c=r(69912),p=r(71466),h=r(23638),y=r(78952),f=function(e){var t=function(e){(0,o.Z)(r,e);var t=(0,a.Z)(r);function r(){var e;return(0,n.Z)(this,r),(e=t.apply(this,arguments)).copyright=null,e.minScale=0,e.maxScale=0,e.spatialReference=null,e.tileInfo=null,e.tilemapCache=null,e}return(0,i.Z)(r,[{key:"readMinScale",value:function(e,t){return null!=t.minLOD&&null!=t.maxLOD?e:0}},{key:"readMaxScale",value:function(e,t){return null!=t.minLOD&&null!=t.maxLOD?e:0}},{key:"supportsBlankTile",get:function(){return this.version>=10.2}},{key:"readTilemapCache",value:function(e,t){return t.capabilities&&t.capabilities.indexOf("Tilemap")>-1?new h.y({layer:this}):null}}]),r}(e);return(0,l._)([(0,s.Cb)({json:{read:{source:"copyrightText"}}})],t.prototype,"copyright",void 0),(0,l._)([(0,s.Cb)()],t.prototype,"minScale",void 0),(0,l._)([(0,u.r)("service","minScale")],t.prototype,"readMinScale",null),(0,l._)([(0,s.Cb)()],t.prototype,"maxScale",void 0),(0,l._)([(0,u.r)("service","maxScale")],t.prototype,"readMaxScale",null),(0,l._)([(0,s.Cb)({type:y.Z})],t.prototype,"spatialReference",void 0),(0,l._)([(0,s.Cb)({readOnly:!0})],t.prototype,"supportsBlankTile",null),(0,l._)([(0,s.Cb)(p.h)],t.prototype,"tileInfo",void 0),(0,l._)([(0,s.Cb)()],t.prototype,"tilemapCache",void 0),(0,l._)([(0,u.r)("service","tilemapCache",["capabilities"])],t.prototype,"readTilemapCache",null),(0,l._)([(0,s.Cb)()],t.prototype,"version",void 0),t=(0,l._)([(0,c.j)("esri.layers.mixins.ArcGISCachedService")],t)}},32698:function(e,t,r){r.d(t,{m:function(){return o}});var n=r(35995),i=r(70032);function o(e){return{origin:"portal-item",url:(0,n.mN)(e.itemUrl),portal:e.portal||i.Z.getDefault(),portalItem:e,readResourcePaths:[]}}},73828:function(e,t,r){r.d(t,{Z:function(){return l}});var n=r(70885),i=r(15671),o=r(43144),a=r(13005),l=function(){function e(t,r,n,o){(0,i.Z)(this,e),this.set(t,r,n,o)}return(0,o.Z)(e,[{key:"key",get:function(){return this}},{key:"id",get:function(){return this.toString()},set:function(e){this.set(e)}},{key:"hash",get:function(){var e=4095&this.row,t=4095&this.col,r=63&this.level;return(3&this.world)<<30|t<<22|e<<8|r}},{key:"acquire",value:function(e,t,r,n){this.set(e,t,r,n)}},{key:"contains",value:function(e){var t=e.level-this.level;return this.row===e.row>>t&&this.col===e.col>>t&&this.world===e.world}},{key:"equals",value:function(e){return this.level===e.level&&this.row===e.row&&this.col===e.col&&this.world===e.world}},{key:"clone",value:function(){return new e(this)}},{key:"release",value:function(){this.level=0,this.row=0,this.col=0,this.world=0}},{key:"set",value:function(e,t,r,i){if(null==e)this.level=0,this.row=0,this.col=0,this.world=0;else if("object"==typeof e)this.level=e.level||0,this.row=e.row||0,this.col=e.col||0,this.world=e.world||0;else if("string"==typeof e){var o=e.split("/"),a=(0,n.Z)(o,4),l=a[0],s=a[1],u=a[2],c=a[3];this.level=parseFloat(l),this.row=parseFloat(s),this.col=parseFloat(u),this.world=parseFloat(c)}else this.level=+e,this.row=+t,this.col=+r,this.world=+i||0;return this}},{key:"toString",value:function(){return"".concat(this.level,"/").concat(this.row,"/").concat(this.col,"/").concat(this.world)}},{key:"getParentKey",value:function(){return this.level<=0?null:new e(this.level-1,this.row>>1,this.col>>1,this.world)}},{key:"getChildKeys",value:function(){var t=this.level+1,r=this.row<<1,n=this.col<<1,i=this.world;return[new e(t,r,n,i),new e(t,r,n+1,i),new e(t,r+1,n,i),new e(t,r+1,n+1,i)]}},{key:"compareRowMajor",value:function(e){return this.row<e.row?-1:this.row>e.row?1:this.col<e.col?-1:this.col>e.col?1:0}}],[{key:"getId",value:function(e,t,r,n){return"object"==typeof e?"".concat(e.level,"/").concat(e.row,"/").concat(e.col,"/").concat(e.world):"".concat(e,"/").concat(t,"/").concat(r,"/").concat(n)}}]),e}();l.pool=new a.Z(l,null,null,25,50)},49800:function(e,t,r){r.d(t,{kr:function(){return i},zO:function(){return n}});var n;r(93169);function i(e,t){for(var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=t===n.WEBGL1?["webgl","experimental-webgl","webkit-3d","moz-webgl"]:["webgl2"],o=null,a=0,l=i;a<l.length;a++){var s=l[a];try{o=e.getContext(s,r)}catch(u){}if(o)break}return o}!function(e){e[e.WEBGL1=1]="WEBGL1",e[e.WEBGL2=2]="WEBGL2"}(n||(n={}))}}]);
//# sourceMappingURL=6649.6939ccbd.chunk.js.map