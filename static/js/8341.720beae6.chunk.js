"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[8341],{93002:function(e,t,i){i.d(t,{G:function(){return y},w:function(){return f}});var r=i(42982),n=i(15861),a=i(87757),o=i(14921),s=i(81608),l=i(54472),u=i(92026);function y(e,t){return c.apply(this,arguments)}function c(){return(c=(0,n.Z)(a.mark((function e(t,i){return a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.load();case 2:return e.abrupt("return",f(t,i));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(e,t){return d.apply(this,arguments)}function d(){return d=(0,n.Z)(a.mark((function e(t,i){var y,c,f;return a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return y=[],c=function e(){for(var t=arguments.length,i=new Array(t),n=0;n<t;n++)i[n]=arguments[n];for(var a=0,o=i;a<o.length;a++){var c=o[a];(0,u.Wi)(c)||(Array.isArray(c)?e.apply(void 0,(0,r.Z)(c)):s.Z.isCollection(c)?c.forEach((function(t){return e(t)})):l.Z.isLoadable(c)&&y.push(c))}},i(c),f=null,e.next=5,(0,o.UI)(y,function(){var e=(0,n.Z)(a.mark((function e(t){return a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t1=!1,e.next=3,(0,o.q6)(v(t)?t.loadAll():t.load());case 3:if(e.t2=e.sent.ok,e.t0=e.t1!==e.t2,e.t0){e.next=7;break}e.t0=f;case 7:if(e.t3=e.t0,e.t3){e.next=10;break}f=t;case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 5:if(!f){e.next=7;break}throw f.loadError;case 7:return e.abrupt("return",t);case 8:case"end":return e.stop()}}),e)}))),d.apply(this,arguments)}function v(e){return"loadAll"in e&&"function"==typeof e.loadAll}},68341:function(e,t,i){i.r(t),i.d(t,{default:function(){return W}});var r=i(15671),n=i(43144),a=i(97326),o=i(60136),s=i(29388),l=i(27366),u=i(93002),y=i(92026),c=i(97642),f=i(49861),d=(i(63780),i(93169),i(23879)),v=(i(25243),i(69912)),p=i(31201),h=i(74184),b=i(6693),m=i(6061),g=i(29598),w=i(56811),k=i(37762),_=i(81608),Z=i(60354),L=i(32718),x=i(75298);function M(e){return e&&"group"===e.type}function A(e,t,i){var r,n;if(e)for(var a=0,o=e.length;a<o;a++){if((r=e.getItemAt(a))[t]===i)return r;if(M(r)&&(n=A(r.layers,t,i)))return n}}var C=L.Z.getLogger("esri.support.LayersMixin"),I="esri.support.TablesMixin",S=L.Z.getLogger(I);function E(e){return e&&"group"===e.type}function O(e,t,i){if(e)for(var r=0,n=e.length;r<n;r++){var a=e.getItemAt(r);if(a[t]===i)return a;if(E(a)){var o=O(a.tables,t,i);if(o)return o}}}var T=i(41190),R=function(e){(0,o.Z)(i,e);var t=(0,s.Z)(i);function i(e){var n;return(0,r.Z)(this,i),(n=t.call(this,e))._visibilityHandles={},n.fullExtent=void 0,n.operationalLayerType="GroupLayer",n.spatialReference=void 0,n.type="group",n._visibilityWatcher=n._visibilityWatcher.bind((0,a.Z)(n)),n}return(0,n.Z)(i,[{key:"initialize",value:function(){this._enforceVisibility(this.visibilityMode,this.visible),this.watch("visible",this._visibleWatcher.bind(this),!0)}},{key:"_writeLayers",value:function(e,t,i,r){var n=[];if(!e)return n;e.forEach((function(e){var t=(0,T.Nw)(e,r.webmap?r.webmap.getLayerJSONFromResourceInfo(e):null,r);(0,y.pC)(t)&&t.layerType&&n.push(t)})),t.layers=n}},{key:"portalItem",set:function(e){this._set("portalItem",e)}},{key:"visibilityMode",set:function(e){var t=this._get("visibilityMode")!==e;this._set("visibilityMode",e),t&&this._enforceVisibility(e,this.visible)}},{key:"load",value:function(e){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Feature Service","Feature Collection","Scene Service"]},e)),Promise.resolve(this)}},{key:"loadAll",value:function(){var e=this;return(0,u.G)(this,(function(t){t(e.layers,e.tables)}))}},{key:"layerAdded",value:function(e){e.visible&&"exclusive"===this.visibilityMode?this._turnOffOtherLayers(e):"inherited"===this.visibilityMode&&(e.visible=this.visible),this._visibilityHandles[e.uid]=e.watch("visible",this._visibilityWatcher,!0)}},{key:"layerRemoved",value:function(e){var t=this._visibilityHandles[e.uid];t&&(t.remove(),delete this._visibilityHandles[e.uid]),this._enforceVisibility(this.visibilityMode,this.visible)}},{key:"_turnOffOtherLayers",value:function(e){this.layers.forEach((function(t){t!==e&&(t.visible=!1)}))}},{key:"_enforceVisibility",value:function(e,t){if((0,d.vw)(this).initialized){var i=this.layers,r=i.find((function(e){return e.visible}));switch(e){case"exclusive":i.length&&!r&&((r=i.getItemAt(0)).visible=!0),this._turnOffOtherLayers(r);break;case"inherited":i.forEach((function(e){e.visible=t}))}}}},{key:"_visibleWatcher",value:function(e){"inherited"===this.visibilityMode&&this.layers.forEach((function(t){t.visible=e}))}},{key:"_visibilityWatcher",value:function(e,t,i,r){var n=r;switch(this.visibilityMode){case"exclusive":e?this._turnOffOtherLayers(n):this._isAnyLayerVisible()||(n.visible=!0);break;case"inherited":n.visible=this.visible}}},{key:"_isAnyLayerVisible",value:function(){return this.layers.some((function(e){return e.visible}))}}]),i}((0,b.h)((0,w.M)((0,m.q)((0,g.I)(function(e){var t=function(e){(0,o.Z)(i,e);var t=(0,s.Z)(i);function i(){var e;(0,r.Z)(this,i);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(e=t.call.apply(t,[this].concat(o))).tables=new _.Z,e.tables.on("after-add",(function(t){var i=t.item;i.parent&&i.parent!==(0,a.Z)(e)&&"tables"in i.parent&&i.parent.tables.remove(i),i.parent=(0,a.Z)(e),"feature"!==i.type&&S.error("Layer 'title:".concat(i.title,", id:").concat(i.id,"' of type '").concat(i.type,"' is not supported as a table and will therefore be ignored."))})),e.tables.on("after-remove",(function(e){e.item.parent=null})),e}return(0,n.Z)(i,[{key:"destroy",value:function(){var e,t=this.tables.removeAll(),i=(0,k.Z)(t);try{for(i.s();!(e=i.n()).done;){e.value.destroy()}}catch(r){i.e(r)}finally{i.f()}this.tables.destroy()}},{key:"tables",set:function(e){this._set("tables",(0,Z.Z)(e,this._get("tables")))}},{key:"findTableById",value:function(e){return O(this.tables,"id",e)}},{key:"findTableByUid",value:function(e){return O(this.tables,"uid",e)}}]),i}(e);return(0,l._)([(0,f.Cb)()],t.prototype,"tables",null),t=(0,l._)([(0,v.j)(I)],t)}(function(e){var t=function(e){(0,o.Z)(i,e);var t=(0,s.Z)(i);function i(){var e;(0,r.Z)(this,i);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];(e=t.call.apply(t,[this].concat(o))).layers=new _.Z;var l=function(e){e.parent&&"remove"in e.parent&&e.parent.remove(e)},u=function(t){t.parent=(0,a.Z)(e),e.layerAdded(t),"elevation"!==t.type&&"base-elevation"!==t.type||C.error("Layer 'title:".concat(t.title,", id:").concat(t.id,"' of type '").concat(t.type,"' is not supported as an operational layer and will therefore be ignored."))},y=function(t){t.parent=null,e.layerRemoved(t)};return e.layers.on("before-add",(function(e){return l(e.item)})),e.layers.on("after-add",(function(e){return u(e.item)})),e.layers.on("after-remove",(function(e){return y(e.item)})),e}return(0,n.Z)(i,[{key:"destroy",value:function(){var e,t=this.layers.removeAll(),i=(0,k.Z)(t);try{for(i.s();!(e=i.n()).done;){var r=e.value;this.layerRemoved(r),r.destroy()}}catch(n){i.e(n)}finally{i.f()}this.layers.destroy()}},{key:"layers",set:function(e){this._set("layers",(0,Z.Z)(e,this._get("layers")))}},{key:"add",value:function(e,t){var i=this,r=this.layers;if(t=r.getNextIndex(t),e instanceof h.Z){var n=e;n.parent===this?this.reorder(n,t):r.add(n,t)}else(0,x.y8)(e)?e.then((function(e){i.destroyed||i.add(e,t)})):C.error("#add()","The item being added is not a Layer or a Promise that resolves to a Layer.")}},{key:"addMany",value:function(e,t){var i=this,r=this.layers;t=r.getNextIndex(t),e.slice().forEach((function(e){e.parent!==i?(r.add(e,t),t+=1):i.reorder(e,t)}))}},{key:"findLayerById",value:function(e){return A(this.layers,"id",e)}},{key:"findLayerByUid",value:function(e){return A(this.layers,"uid",e)}},{key:"remove",value:function(e){return this.layers.remove(e)}},{key:"removeMany",value:function(e){return this.layers.removeMany(e)}},{key:"removeAll",value:function(){return this.layers.removeAll()}},{key:"reorder",value:function(e,t){return this.layers.reorder(e,t)}},{key:"layerAdded",value:function(e){}},{key:"layerRemoved",value:function(e){}}]),i}(e);return(0,l._)([(0,f.Cb)()],t.prototype,"layers",null),t=(0,l._)([(0,v.j)("esri.support.LayersMixin")],t)}((0,c.R)(h.Z))))))));(0,l._)([(0,f.Cb)()],R.prototype,"fullExtent",void 0),(0,l._)([(0,f.Cb)({json:{read:!1,write:{ignoreOrigin:!0}}})],R.prototype,"layers",void 0),(0,l._)([(0,p.c)("layers")],R.prototype,"_writeLayers",null),(0,l._)([(0,f.Cb)({type:["GroupLayer"]})],R.prototype,"operationalLayerType",void 0),(0,l._)([(0,f.Cb)({json:{origins:{"web-document":{read:!1,write:!1}}}})],R.prototype,"portalItem",null),(0,l._)([(0,f.Cb)()],R.prototype,"spatialReference",void 0),(0,l._)([(0,f.Cb)({json:{read:!1},readOnly:!0,value:"group"})],R.prototype,"type",void 0),(0,l._)([(0,f.Cb)({type:["independent","inherited","exclusive"],value:"independent",json:{write:!0,origins:{"web-map":{read:!1,write:!1}}}})],R.prototype,"visibilityMode",null);var W=R=(0,l._)([(0,v.j)("esri.layers.GroupLayer")],R)},41190:function(e,t,i){i.d(t,{Nw:function(){return v}});var r=i(10064),n=i(84652),a=i(92026),o=i(18202),s=i(13922),l=new Set(["bing-maps","imagery","imagery-tile","map-image","open-street-map","tile","unknown","unsupported","vector-tile","web-tile","wms","wmts"]),u=new Set(["csv","feature","geo-rss","geojson","group","imagery","imagery-tile","kml","map-image","map-notes","ogc-feature","route","tile","unknown","unsupported","vector-tile","web-tile","wfs","wms","wmts"]);function y(e){return!("feature"!==e.type||e.url||!e.source||"memory"!==e.source.type)}function c(e,t){if(t.restrictedWebMapWriting){var i=function(e){return"basemap"===e.layerContainerType?l:"operational-layers"===e.layerContainerType?u:null}(t);return!(0,a.pC)(i)||i.has(e.type)&&!y(e)}return!0}function f(e,t){"maxScale"in e&&(t.maxScale=(0,s.k)(e.maxScale)),"minScale"in e&&(t.minScale=(0,s.k)(e.minScale))}function d(e,t){if(function(e,t){if(y(e)){var i=(0,o.hS)("featureCollection.layers",t),r=i&&i[0]&&i[0].layerDefinition;r&&f(e,r)}else"stream"===e.type?f(e,t.layerDefinition=t.layerDefinition||{}):"group"!==e.type&&f(e,t)}(e,t),"blendMode"in e&&(t.blendMode=e.blendMode,"normal"===t.blendMode&&delete t.blendMode),t.opacity=(0,s.k)(e.opacity),t.title=e.title||"Layer",t.visibility=e.visible,"legendEnabled"in e&&"wmts"!==e.type)if(y(e)){var i=t.featureCollection;i&&(i.showLegend=e.legendEnabled)}else t.showLegend=e.legendEnabled}function v(e,t,i){if(!("write"in e)||!e.write)return i&&i.messages&&i.messages.push(new r.Z("layer:unsupported","Layers (".concat(e.title,", ").concat(e.id,") of type '").concat(e.declaredClass,"' cannot be persisted"),{layer:e})),null;if(c(e,i)){var o={};return e.write(o,i)?o:null}return(0,a.pC)(t)&&d(e,t=(0,n.d9)(t)),t}}}]);
//# sourceMappingURL=8341.720beae6.chunk.js.map