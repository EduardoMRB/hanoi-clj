// Compiled by ClojureScript 0.0-2850 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');

figwheel.client.file_reloading.all_QMARK_ = (function all_QMARK_(pred,coll){
return cljs.core.reduce.call(null,(function (p1__27176_SHARP_,p2__27177_SHARP_){
var and__11588__auto__ = p1__27176_SHARP_;
if(cljs.core.truth_(and__11588__auto__)){
return p2__27177_SHARP_;
} else {
return and__11588__auto__;
}
}),true,cljs.core.map.call(null,pred,coll));
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function namespace_file_map_QMARK_(m){
var or__11600__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__11600__auto__){
return or__11600__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.ns_to_js_file = (function ns_to_js_file(ns){

return [cljs.core.str(clojure.string.replace.call(null,ns,".","/")),cljs.core.str(".js")].join('');
});
figwheel.client.file_reloading.resolve_ns = (function resolve_ns(ns){

return [cljs.core.str(clojure.string.replace.call(null,goog.basePath,/(.*)goog\//,(function (p1__27179_SHARP_,p2__27178_SHARP_){
return [cljs.core.str(p2__27178_SHARP_)].join('');
}))),cljs.core.str(figwheel.client.file_reloading.ns_to_js_file.call(null,ns))].join('');
});
figwheel.client.file_reloading.patch_goog_base = (function patch_goog_base(){
goog.isProvided_ = (function (x){
return false;
});

if(((cljs.core._STAR_loaded_libs_STAR_ == null)) || (cljs.core.empty_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_))){
cljs.core._STAR_loaded_libs_STAR_ = (function (){var gntp = goog.dependencies_.nameToPath;
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.call(null,((function (gntp){
return (function (name){
return (goog.dependencies_.visited[(gntp[name])]);
});})(gntp))
,cljs.core.js_keys.call(null,gntp)));
})();
} else {
}

goog.require = (function (name,reload){
if(cljs.core.truth_((function (){var or__11600__auto__ = !(cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,name));
if(or__11600__auto__){
return or__11600__auto__;
} else {
return reload;
}
})())){
cljs.core._STAR_loaded_libs_STAR_ = cljs.core.conj.call(null,(function (){var or__11600__auto__ = cljs.core._STAR_loaded_libs_STAR_;
if(cljs.core.truth_(or__11600__auto__)){
return or__11600__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})(),name);

return figwheel.client.file_reloading.reload_file_STAR_.call(null,figwheel.client.file_reloading.resolve_ns.call(null,name));
} else {
return null;
}
});

goog.provide = goog.exportPath_;

return goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.reload_file_STAR_;
});
figwheel.client.file_reloading.resolve_url = (function (){var method_table__12497__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__12498__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__12499__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__12500__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__12501__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","resolve-url"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__12501__auto__,method_table__12497__auto__,prefer_table__12498__auto__,method_cache__12499__auto__,cached_hierarchy__12500__auto__));
})();
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__27180){
var map__27181 = p__27180;
var map__27181__$1 = ((cljs.core.seq_QMARK_.call(null,map__27181))?cljs.core.apply.call(null,cljs.core.hash_map,map__27181):map__27181);
var file = cljs.core.get.call(null,map__27181__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return file;
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"namespace","namespace",-377510372),(function (p__27182){
var map__27183 = p__27182;
var map__27183__$1 = ((cljs.core.seq_QMARK_.call(null,map__27183))?cljs.core.apply.call(null,cljs.core.hash_map,map__27183):map__27183);
var namespace = cljs.core.get.call(null,map__27183__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

return figwheel.client.file_reloading.resolve_ns.call(null,namespace);
}));
figwheel.client.file_reloading.reload_base = (function (){var method_table__12497__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__12498__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__12499__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__12500__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__12501__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","reload-base"),figwheel.client.utils.host_env_QMARK_,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__12501__auto__,method_table__12497__auto__,prefer_table__12498__auto__,method_cache__12499__auto__,cached_hierarchy__12500__auto__));
})();
cljs.core._add_method.call(null,figwheel.client.file_reloading.reload_base,new cljs.core.Keyword(null,"node","node",581201198),(function (request_url,callback){

var root = clojure.string.join.call(null,"/",cljs.core.reverse.call(null,cljs.core.drop.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,__dirname,"/")))));
var path = [cljs.core.str(root),cljs.core.str("/"),cljs.core.str(request_url)].join('');
(require.cache[path] = null);

return callback.call(null,(function (){try{return require(path);
}catch (e27184){if((e27184 instanceof Error)){
var e = e27184;
return false;
} else {
throw e27184;

}
}})());
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.reload_base,new cljs.core.Keyword(null,"html","html",-998796897),(function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred))
);

return deferred.addErrback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred))
);
}));
figwheel.client.file_reloading.reload_file_STAR_ = (function() {
var reload_file_STAR_ = null;
var reload_file_STAR___1 = (function (request_url){
return reload_file_STAR_.call(null,request_url,cljs.core.identity);
});
var reload_file_STAR___2 = (function (request_url,callback){
return figwheel.client.file_reloading.reload_base.call(null,request_url,callback);
});
reload_file_STAR_ = function(request_url,callback){
switch(arguments.length){
case 1:
return reload_file_STAR___1.call(this,request_url);
case 2:
return reload_file_STAR___2.call(this,request_url,callback);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
reload_file_STAR_.cljs$core$IFn$_invoke$arity$1 = reload_file_STAR___1;
reload_file_STAR_.cljs$core$IFn$_invoke$arity$2 = reload_file_STAR___2;
return reload_file_STAR_;
})()
;
figwheel.client.file_reloading.reload_file = (function reload_file(p__27185,callback){
var map__27187 = p__27185;
var map__27187__$1 = ((cljs.core.seq_QMARK_.call(null,map__27187))?cljs.core.apply.call(null,cljs.core.hash_map,map__27187):map__27187);
var file_msg = map__27187__$1;
var request_url = cljs.core.get.call(null,map__27187__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__27187,map__27187__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfullly loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__27187,map__27187__$1,file_msg,request_url))
);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function reload_file_QMARK_(p__27188){
var map__27190 = p__27188;
var map__27190__$1 = ((cljs.core.seq_QMARK_.call(null,map__27190))?cljs.core.apply.call(null,cljs.core.hash_map,map__27190):map__27190);
var file_msg = map__27190__$1;
var meta_data = cljs.core.get.call(null,map__27190__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
var namespace = cljs.core.get.call(null,map__27190__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_data__$1 = (function (){var or__11600__auto__ = meta_data;
if(cljs.core.truth_(or__11600__auto__)){
return or__11600__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var and__11588__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_data__$1));
if(and__11588__auto__){
var or__11600__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__11600__auto__)){
return or__11600__auto__;
} else {
var or__11600__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__11600__auto____$1)){
return or__11600__auto____$1;
} else {
var and__11588__auto____$1 = cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,namespace);
if(and__11588__auto____$1){
var or__11600__auto____$2 = !(cljs.core.contains_QMARK_.call(null,meta_data__$1,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932)));
if(or__11600__auto____$2){
return or__11600__auto____$2;
} else {
return new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
}
} else {
return and__11588__auto____$1;
}
}
}
} else {
return and__11588__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function js_reload(p__27191,callback){
var map__27193 = p__27191;
var map__27193__$1 = ((cljs.core.seq_QMARK_.call(null,map__27193))?cljs.core.apply.call(null,cljs.core.hash_map,map__27193):map__27193);
var file_msg = map__27193__$1;
var namespace = cljs.core.get.call(null,map__27193__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = cljs.core.get.call(null,map__27193__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.reload_file.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
setTimeout(((function (out){
return (function (){
return figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
figwheel.client.file_reloading.patch_goog_base.call(null);

cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);
});})(out))
,(0));

return out;
});
/**
* Returns a chanel with one collection of loaded filenames on it.
*/
figwheel.client.file_reloading.load_all_js_files = (function load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__14073__auto___27280 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14073__auto___27280,out){
return (function (){
var f__14074__auto__ = (function (){var switch__14017__auto__ = ((function (c__14073__auto___27280,out){
return (function (state_27262){
var state_val_27263 = (state_27262[(1)]);
if((state_val_27263 === (7))){
var inst_27246 = (state_27262[(7)]);
var inst_27252 = (state_27262[(2)]);
var inst_27253 = cljs.core.async.put_BANG_.call(null,out,inst_27252);
var inst_27242 = inst_27246;
var state_27262__$1 = (function (){var statearr_27264 = state_27262;
(statearr_27264[(8)] = inst_27253);

(statearr_27264[(9)] = inst_27242);

return statearr_27264;
})();
var statearr_27265_27281 = state_27262__$1;
(statearr_27265_27281[(2)] = null);

(statearr_27265_27281[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27263 === (6))){
var inst_27258 = (state_27262[(2)]);
var state_27262__$1 = state_27262;
var statearr_27266_27282 = state_27262__$1;
(statearr_27266_27282[(2)] = inst_27258);

(statearr_27266_27282[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27263 === (5))){
var inst_27256 = cljs.core.async.close_BANG_.call(null,out);
var state_27262__$1 = state_27262;
var statearr_27267_27283 = state_27262__$1;
(statearr_27267_27283[(2)] = inst_27256);

(statearr_27267_27283[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27263 === (4))){
var inst_27245 = (state_27262[(10)]);
var inst_27250 = figwheel.client.file_reloading.reload_js_file.call(null,inst_27245);
var state_27262__$1 = state_27262;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27262__$1,(7),inst_27250);
} else {
if((state_val_27263 === (3))){
var inst_27260 = (state_27262[(2)]);
var state_27262__$1 = state_27262;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27262__$1,inst_27260);
} else {
if((state_val_27263 === (2))){
var inst_27245 = (state_27262[(10)]);
var inst_27242 = (state_27262[(9)]);
var inst_27245__$1 = cljs.core.nth.call(null,inst_27242,(0),null);
var inst_27246 = cljs.core.nthnext.call(null,inst_27242,(1));
var inst_27247 = (inst_27245__$1 == null);
var inst_27248 = cljs.core.not.call(null,inst_27247);
var state_27262__$1 = (function (){var statearr_27268 = state_27262;
(statearr_27268[(10)] = inst_27245__$1);

(statearr_27268[(7)] = inst_27246);

return statearr_27268;
})();
if(inst_27248){
var statearr_27269_27284 = state_27262__$1;
(statearr_27269_27284[(1)] = (4));

} else {
var statearr_27270_27285 = state_27262__$1;
(statearr_27270_27285[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27263 === (1))){
var inst_27240 = cljs.core.nth.call(null,files,(0),null);
var inst_27241 = cljs.core.nthnext.call(null,files,(1));
var inst_27242 = files;
var state_27262__$1 = (function (){var statearr_27271 = state_27262;
(statearr_27271[(11)] = inst_27241);

(statearr_27271[(9)] = inst_27242);

(statearr_27271[(12)] = inst_27240);

return statearr_27271;
})();
var statearr_27272_27286 = state_27262__$1;
(statearr_27272_27286[(2)] = null);

(statearr_27272_27286[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__14073__auto___27280,out))
;
return ((function (switch__14017__auto__,c__14073__auto___27280,out){
return (function() {
var state_machine__14018__auto__ = null;
var state_machine__14018__auto____0 = (function (){
var statearr_27276 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27276[(0)] = state_machine__14018__auto__);

(statearr_27276[(1)] = (1));

return statearr_27276;
});
var state_machine__14018__auto____1 = (function (state_27262){
while(true){
var ret_value__14019__auto__ = (function (){try{while(true){
var result__14020__auto__ = switch__14017__auto__.call(null,state_27262);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14020__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14020__auto__;
}
break;
}
}catch (e27277){if((e27277 instanceof Object)){
var ex__14021__auto__ = e27277;
var statearr_27278_27287 = state_27262;
(statearr_27278_27287[(5)] = ex__14021__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27262);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27277;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14019__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27288 = state_27262;
state_27262 = G__27288;
continue;
} else {
return ret_value__14019__auto__;
}
break;
}
});
state_machine__14018__auto__ = function(state_27262){
switch(arguments.length){
case 0:
return state_machine__14018__auto____0.call(this);
case 1:
return state_machine__14018__auto____1.call(this,state_27262);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14018__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14018__auto____0;
state_machine__14018__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14018__auto____1;
return state_machine__14018__auto__;
})()
;})(switch__14017__auto__,c__14073__auto___27280,out))
})();
var state__14075__auto__ = (function (){var statearr_27279 = f__14074__auto__.call(null);
(statearr_27279[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14073__auto___27280);

return statearr_27279;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14075__auto__);
});})(c__14073__auto___27280,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.add_request_url = (function add_request_url(p__27289,p__27290){
var map__27293 = p__27289;
var map__27293__$1 = ((cljs.core.seq_QMARK_.call(null,map__27293))?cljs.core.apply.call(null,cljs.core.hash_map,map__27293):map__27293);
var opts = map__27293__$1;
var url_rewriter = cljs.core.get.call(null,map__27293__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));
var map__27294 = p__27290;
var map__27294__$1 = ((cljs.core.seq_QMARK_.call(null,map__27294))?cljs.core.apply.call(null,cljs.core.hash_map,map__27294):map__27294);
var file_msg = map__27294__$1;
var file = cljs.core.get.call(null,map__27294__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var resolved_path = figwheel.client.file_reloading.resolve_url.call(null,file_msg);
return cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"request-url","request-url",2100346596),(cljs.core.truth_(url_rewriter)?url_rewriter.call(null,resolved_path):resolved_path));
});
figwheel.client.file_reloading.add_request_urls = (function add_request_urls(opts,files){
return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.file_reloading.add_request_url,opts),files);
});
figwheel.client.file_reloading.eval_body = (function eval_body(p__27295){
var map__27298 = p__27295;
var map__27298__$1 = ((cljs.core.seq_QMARK_.call(null,map__27298))?cljs.core.apply.call(null,cljs.core.hash_map,map__27298):map__27298);
var file = cljs.core.get.call(null,map__27298__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var eval_body__$1 = cljs.core.get.call(null,map__27298__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
if(cljs.core.truth_((function (){var and__11588__auto__ = eval_body__$1;
if(cljs.core.truth_(and__11588__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__11588__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return eval(code);
}catch (e27299){var e = e27299;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.reload_js_files = (function reload_js_files(p__27304,p__27305){
var map__27506 = p__27304;
var map__27506__$1 = ((cljs.core.seq_QMARK_.call(null,map__27506))?cljs.core.apply.call(null,cljs.core.hash_map,map__27506):map__27506);
var opts = map__27506__$1;
var load_unchanged_files = cljs.core.get.call(null,map__27506__$1,new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704));
var on_jsload = cljs.core.get.call(null,map__27506__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var before_jsload = cljs.core.get.call(null,map__27506__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var map__27507 = p__27305;
var map__27507__$1 = ((cljs.core.seq_QMARK_.call(null,map__27507))?cljs.core.apply.call(null,cljs.core.hash_map,map__27507):map__27507);
var msg = map__27507__$1;
var files = cljs.core.get.call(null,map__27507__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var c__14073__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14073__auto__,map__27506,map__27506__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__27507,map__27507__$1,msg,files){
return (function (){
var f__14074__auto__ = (function (){var switch__14017__auto__ = ((function (c__14073__auto__,map__27506,map__27506__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__27507,map__27507__$1,msg,files){
return (function (state_27631){
var state_val_27632 = (state_27631[(1)]);
if((state_val_27632 === (7))){
var inst_27521 = (state_27631[(7)]);
var inst_27518 = (state_27631[(8)]);
var inst_27520 = (state_27631[(9)]);
var inst_27519 = (state_27631[(10)]);
var inst_27526 = cljs.core._nth.call(null,inst_27519,inst_27521);
var inst_27527 = figwheel.client.file_reloading.eval_body.call(null,inst_27526);
var inst_27528 = (inst_27521 + (1));
var tmp27633 = inst_27518;
var tmp27634 = inst_27520;
var tmp27635 = inst_27519;
var inst_27518__$1 = tmp27633;
var inst_27519__$1 = tmp27635;
var inst_27520__$1 = tmp27634;
var inst_27521__$1 = inst_27528;
var state_27631__$1 = (function (){var statearr_27636 = state_27631;
(statearr_27636[(7)] = inst_27521__$1);

(statearr_27636[(8)] = inst_27518__$1);

(statearr_27636[(9)] = inst_27520__$1);

(statearr_27636[(10)] = inst_27519__$1);

(statearr_27636[(11)] = inst_27527);

return statearr_27636;
})();
var statearr_27637_27706 = state_27631__$1;
(statearr_27637_27706[(2)] = null);

(statearr_27637_27706[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27632 === (20))){
var inst_27563 = (state_27631[(12)]);
var inst_27568 = (state_27631[(13)]);
var inst_27570 = (state_27631[(14)]);
var inst_27564 = (state_27631[(15)]);
var inst_27567 = (state_27631[(16)]);
var inst_27573 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_27575 = (function (){var files_not_loaded = inst_27570;
var res = inst_27568;
var res_SINGLEQUOTE_ = inst_27567;
var files_SINGLEQUOTE_ = inst_27564;
var all_files = inst_27563;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_27563,inst_27568,inst_27570,inst_27564,inst_27567,inst_27573,state_val_27632,c__14073__auto__,map__27506,map__27506__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__27507,map__27507__$1,msg,files){
return (function (p__27574){
var map__27638 = p__27574;
var map__27638__$1 = ((cljs.core.seq_QMARK_.call(null,map__27638))?cljs.core.apply.call(null,cljs.core.hash_map,map__27638):map__27638);
var file = cljs.core.get.call(null,map__27638__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var namespace = cljs.core.get.call(null,map__27638__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.ns_to_js_file.call(null,namespace);
} else {
return file;
}
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_27563,inst_27568,inst_27570,inst_27564,inst_27567,inst_27573,state_val_27632,c__14073__auto__,map__27506,map__27506__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__27507,map__27507__$1,msg,files))
})();
var inst_27576 = cljs.core.map.call(null,inst_27575,inst_27568);
var inst_27577 = cljs.core.pr_str.call(null,inst_27576);
var inst_27578 = figwheel.client.utils.log.call(null,inst_27577);
var inst_27579 = (function (){var files_not_loaded = inst_27570;
var res = inst_27568;
var res_SINGLEQUOTE_ = inst_27567;
var files_SINGLEQUOTE_ = inst_27564;
var all_files = inst_27563;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_27563,inst_27568,inst_27570,inst_27564,inst_27567,inst_27573,inst_27575,inst_27576,inst_27577,inst_27578,state_val_27632,c__14073__auto__,map__27506,map__27506__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__27507,map__27507__$1,msg,files){
return (function (){
return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_27563,inst_27568,inst_27570,inst_27564,inst_27567,inst_27573,inst_27575,inst_27576,inst_27577,inst_27578,state_val_27632,c__14073__auto__,map__27506,map__27506__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__27507,map__27507__$1,msg,files))
})();
var inst_27580 = setTimeout(inst_27579,(10));
var state_27631__$1 = (function (){var statearr_27639 = state_27631;
(statearr_27639[(17)] = inst_27578);

(statearr_27639[(18)] = inst_27573);

return statearr_27639;
})();
var statearr_27640_27707 = state_27631__$1;
(statearr_27640_27707[(2)] = inst_27580);

(statearr_27640_27707[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27632 === (27))){
var inst_27590 = (state_27631[(19)]);
var state_27631__$1 = state_27631;
var statearr_27641_27708 = state_27631__$1;
(statearr_27641_27708[(2)] = inst_27590);

(statearr_27641_27708[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27632 === (1))){
var inst_27510 = (state_27631[(20)]);
var inst_27508 = before_jsload.call(null,files);
var inst_27509 = (function (){return ((function (inst_27510,inst_27508,state_val_27632,c__14073__auto__,map__27506,map__27506__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__27507,map__27507__$1,msg,files){
return (function (p1__27300_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__27300_SHARP_);
});
;})(inst_27510,inst_27508,state_val_27632,c__14073__auto__,map__27506,map__27506__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__27507,map__27507__$1,msg,files))
})();
var inst_27510__$1 = cljs.core.filter.call(null,inst_27509,files);
var inst_27511 = cljs.core.not_empty.call(null,inst_27510__$1);
var state_27631__$1 = (function (){var statearr_27642 = state_27631;
(statearr_27642[(21)] = inst_27508);

(statearr_27642[(20)] = inst_27510__$1);

return statearr_27642;
})();
if(cljs.core.truth_(inst_27511)){
var statearr_27643_27709 = state_27631__$1;
(statearr_27643_27709[(1)] = (2));

} else {
var statearr_27644_27710 = state_27631__$1;
(statearr_27644_27710[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27632 === (24))){
var state_27631__$1 = state_27631;
var statearr_27645_27711 = state_27631__$1;
(statearr_27645_27711[(2)] = null);

(statearr_27645_27711[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27632 === (4))){
var inst_27555 = (state_27631[(2)]);
var inst_27556 = (function (){return ((function (inst_27555,state_val_27632,c__14073__auto__,map__27506,map__27506__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__27507,map__27507__$1,msg,files){
return (function (p1__27301_SHARP_){
var and__11588__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__27301_SHARP_);
if(cljs.core.truth_(and__11588__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__27301_SHARP_));
} else {
return and__11588__auto__;
}
});
;})(inst_27555,state_val_27632,c__14073__auto__,map__27506,map__27506__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__27507,map__27507__$1,msg,files))
})();
var inst_27557 = cljs.core.filter.call(null,inst_27556,files);
var state_27631__$1 = (function (){var statearr_27646 = state_27631;
(statearr_27646[(22)] = inst_27555);

(statearr_27646[(23)] = inst_27557);

return statearr_27646;
})();
if(cljs.core.truth_(load_unchanged_files)){
var statearr_27647_27712 = state_27631__$1;
(statearr_27647_27712[(1)] = (16));

} else {
var statearr_27648_27713 = state_27631__$1;
(statearr_27648_27713[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27632 === (15))){
var inst_27545 = (state_27631[(2)]);
var state_27631__$1 = state_27631;
var statearr_27649_27714 = state_27631__$1;
(statearr_27649_27714[(2)] = inst_27545);

(statearr_27649_27714[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27632 === (21))){
var state_27631__$1 = state_27631;
var statearr_27650_27715 = state_27631__$1;
(statearr_27650_27715[(2)] = null);

(statearr_27650_27715[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27632 === (31))){
var inst_27598 = (state_27631[(24)]);
var inst_27608 = (state_27631[(2)]);
var inst_27609 = cljs.core.not_empty.call(null,inst_27598);
var state_27631__$1 = (function (){var statearr_27651 = state_27631;
(statearr_27651[(25)] = inst_27608);

return statearr_27651;
})();
if(cljs.core.truth_(inst_27609)){
var statearr_27652_27716 = state_27631__$1;
(statearr_27652_27716[(1)] = (32));

} else {
var statearr_27653_27717 = state_27631__$1;
(statearr_27653_27717[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27632 === (32))){
var inst_27598 = (state_27631[(24)]);
var inst_27611 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_27598);
var inst_27612 = cljs.core.pr_str.call(null,inst_27611);
var inst_27613 = [cljs.core.str("file didn't change: "),cljs.core.str(inst_27612)].join('');
var inst_27614 = figwheel.client.utils.log.call(null,inst_27613);
var state_27631__$1 = state_27631;
var statearr_27654_27718 = state_27631__$1;
(statearr_27654_27718[(2)] = inst_27614);

(statearr_27654_27718[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27632 === (33))){
var state_27631__$1 = state_27631;
var statearr_27655_27719 = state_27631__$1;
(statearr_27655_27719[(2)] = null);

(statearr_27655_27719[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27632 === (13))){
var inst_27531 = (state_27631[(26)]);
var inst_27535 = cljs.core.chunk_first.call(null,inst_27531);
var inst_27536 = cljs.core.chunk_rest.call(null,inst_27531);
var inst_27537 = cljs.core.count.call(null,inst_27535);
var inst_27518 = inst_27536;
var inst_27519 = inst_27535;
var inst_27520 = inst_27537;
var inst_27521 = (0);
var state_27631__$1 = (function (){var statearr_27656 = state_27631;
(statearr_27656[(7)] = inst_27521);

(statearr_27656[(8)] = inst_27518);

(statearr_27656[(9)] = inst_27520);

(statearr_27656[(10)] = inst_27519);

return statearr_27656;
})();
var statearr_27657_27720 = state_27631__$1;
(statearr_27657_27720[(2)] = null);

(statearr_27657_27720[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27632 === (22))){
var inst_27570 = (state_27631[(14)]);
var inst_27583 = (state_27631[(2)]);
var inst_27584 = cljs.core.not_empty.call(null,inst_27570);
var state_27631__$1 = (function (){var statearr_27658 = state_27631;
(statearr_27658[(27)] = inst_27583);

return statearr_27658;
})();
if(cljs.core.truth_(inst_27584)){
var statearr_27659_27721 = state_27631__$1;
(statearr_27659_27721[(1)] = (23));

} else {
var statearr_27660_27722 = state_27631__$1;
(statearr_27660_27722[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27632 === (36))){
var state_27631__$1 = state_27631;
var statearr_27661_27723 = state_27631__$1;
(statearr_27661_27723[(2)] = null);

(statearr_27661_27723[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27632 === (29))){
var inst_27599 = (state_27631[(28)]);
var inst_27602 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_27599);
var inst_27603 = cljs.core.pr_str.call(null,inst_27602);
var inst_27604 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_27603)].join('');
var inst_27605 = figwheel.client.utils.log.call(null,inst_27604);
var state_27631__$1 = state_27631;
var statearr_27662_27724 = state_27631__$1;
(statearr_27662_27724[(2)] = inst_27605);

(statearr_27662_27724[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27632 === (6))){
var inst_27552 = (state_27631[(2)]);
var state_27631__$1 = state_27631;
var statearr_27663_27725 = state_27631__$1;
(statearr_27663_27725[(2)] = inst_27552);

(statearr_27663_27725[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27632 === (28))){
var inst_27599 = (state_27631[(28)]);
var inst_27596 = (state_27631[(2)]);
var inst_27597 = cljs.core.get.call(null,inst_27596,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_27598 = cljs.core.get.call(null,inst_27596,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
var inst_27599__$1 = cljs.core.get.call(null,inst_27596,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_27600 = cljs.core.not_empty.call(null,inst_27599__$1);
var state_27631__$1 = (function (){var statearr_27664 = state_27631;
(statearr_27664[(28)] = inst_27599__$1);

(statearr_27664[(24)] = inst_27598);

(statearr_27664[(29)] = inst_27597);

return statearr_27664;
})();
if(cljs.core.truth_(inst_27600)){
var statearr_27665_27726 = state_27631__$1;
(statearr_27665_27726[(1)] = (29));

} else {
var statearr_27666_27727 = state_27631__$1;
(statearr_27666_27727[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27632 === (25))){
var inst_27629 = (state_27631[(2)]);
var state_27631__$1 = state_27631;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27631__$1,inst_27629);
} else {
if((state_val_27632 === (34))){
var inst_27597 = (state_27631[(29)]);
var inst_27617 = (state_27631[(2)]);
var inst_27618 = cljs.core.not_empty.call(null,inst_27597);
var state_27631__$1 = (function (){var statearr_27667 = state_27631;
(statearr_27667[(30)] = inst_27617);

return statearr_27667;
})();
if(cljs.core.truth_(inst_27618)){
var statearr_27668_27728 = state_27631__$1;
(statearr_27668_27728[(1)] = (35));

} else {
var statearr_27669_27729 = state_27631__$1;
(statearr_27669_27729[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27632 === (17))){
var inst_27557 = (state_27631[(23)]);
var state_27631__$1 = state_27631;
var statearr_27670_27730 = state_27631__$1;
(statearr_27670_27730[(2)] = inst_27557);

(statearr_27670_27730[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27632 === (3))){
var state_27631__$1 = state_27631;
var statearr_27671_27731 = state_27631__$1;
(statearr_27671_27731[(2)] = null);

(statearr_27671_27731[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27632 === (12))){
var inst_27548 = (state_27631[(2)]);
var state_27631__$1 = state_27631;
var statearr_27672_27732 = state_27631__$1;
(statearr_27672_27732[(2)] = inst_27548);

(statearr_27672_27732[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27632 === (2))){
var inst_27510 = (state_27631[(20)]);
var inst_27517 = cljs.core.seq.call(null,inst_27510);
var inst_27518 = inst_27517;
var inst_27519 = null;
var inst_27520 = (0);
var inst_27521 = (0);
var state_27631__$1 = (function (){var statearr_27673 = state_27631;
(statearr_27673[(7)] = inst_27521);

(statearr_27673[(8)] = inst_27518);

(statearr_27673[(9)] = inst_27520);

(statearr_27673[(10)] = inst_27519);

return statearr_27673;
})();
var statearr_27674_27733 = state_27631__$1;
(statearr_27674_27733[(2)] = null);

(statearr_27674_27733[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27632 === (23))){
var inst_27590 = (state_27631[(19)]);
var inst_27563 = (state_27631[(12)]);
var inst_27568 = (state_27631[(13)]);
var inst_27570 = (state_27631[(14)]);
var inst_27564 = (state_27631[(15)]);
var inst_27567 = (state_27631[(16)]);
var inst_27586 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_27589 = (function (){var files_not_loaded = inst_27570;
var res = inst_27568;
var res_SINGLEQUOTE_ = inst_27567;
var files_SINGLEQUOTE_ = inst_27564;
var all_files = inst_27563;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_27590,inst_27563,inst_27568,inst_27570,inst_27564,inst_27567,inst_27586,state_val_27632,c__14073__auto__,map__27506,map__27506__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__27507,map__27507__$1,msg,files){
return (function (p__27588){
var map__27675 = p__27588;
var map__27675__$1 = ((cljs.core.seq_QMARK_.call(null,map__27675))?cljs.core.apply.call(null,cljs.core.hash_map,map__27675):map__27675);
var meta_data = cljs.core.get.call(null,map__27675__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.contains_QMARK_.call(null,meta_data,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
if((cljs.core.contains_QMARK_.call(null,meta_data,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932))) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932).cljs$core$IFn$_invoke$arity$1(meta_data)))){
return new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
}
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_27590,inst_27563,inst_27568,inst_27570,inst_27564,inst_27567,inst_27586,state_val_27632,c__14073__auto__,map__27506,map__27506__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__27507,map__27507__$1,msg,files))
})();
var inst_27590__$1 = cljs.core.group_by.call(null,inst_27589,inst_27570);
var inst_27591 = cljs.core.seq_QMARK_.call(null,inst_27590__$1);
var state_27631__$1 = (function (){var statearr_27676 = state_27631;
(statearr_27676[(19)] = inst_27590__$1);

(statearr_27676[(31)] = inst_27586);

return statearr_27676;
})();
if(inst_27591){
var statearr_27677_27734 = state_27631__$1;
(statearr_27677_27734[(1)] = (26));

} else {
var statearr_27678_27735 = state_27631__$1;
(statearr_27678_27735[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27632 === (35))){
var inst_27597 = (state_27631[(29)]);
var inst_27620 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_27597);
var inst_27621 = cljs.core.pr_str.call(null,inst_27620);
var inst_27622 = [cljs.core.str("not required: "),cljs.core.str(inst_27621)].join('');
var inst_27623 = figwheel.client.utils.log.call(null,inst_27622);
var state_27631__$1 = state_27631;
var statearr_27679_27736 = state_27631__$1;
(statearr_27679_27736[(2)] = inst_27623);

(statearr_27679_27736[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27632 === (19))){
var inst_27563 = (state_27631[(12)]);
var inst_27568 = (state_27631[(13)]);
var inst_27564 = (state_27631[(15)]);
var inst_27567 = (state_27631[(16)]);
var inst_27567__$1 = (state_27631[(2)]);
var inst_27568__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_27567__$1);
var inst_27569 = (function (){var res = inst_27568__$1;
var res_SINGLEQUOTE_ = inst_27567__$1;
var files_SINGLEQUOTE_ = inst_27564;
var all_files = inst_27563;
return ((function (res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_27563,inst_27568,inst_27564,inst_27567,inst_27567__$1,inst_27568__$1,state_val_27632,c__14073__auto__,map__27506,map__27506__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__27507,map__27507__$1,msg,files){
return (function (p1__27303_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__27303_SHARP_));
});
;})(res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_27563,inst_27568,inst_27564,inst_27567,inst_27567__$1,inst_27568__$1,state_val_27632,c__14073__auto__,map__27506,map__27506__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__27507,map__27507__$1,msg,files))
})();
var inst_27570 = cljs.core.filter.call(null,inst_27569,inst_27567__$1);
var inst_27571 = cljs.core.not_empty.call(null,inst_27568__$1);
var state_27631__$1 = (function (){var statearr_27680 = state_27631;
(statearr_27680[(13)] = inst_27568__$1);

(statearr_27680[(14)] = inst_27570);

(statearr_27680[(16)] = inst_27567__$1);

return statearr_27680;
})();
if(cljs.core.truth_(inst_27571)){
var statearr_27681_27737 = state_27631__$1;
(statearr_27681_27737[(1)] = (20));

} else {
var statearr_27682_27738 = state_27631__$1;
(statearr_27682_27738[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27632 === (11))){
var state_27631__$1 = state_27631;
var statearr_27683_27739 = state_27631__$1;
(statearr_27683_27739[(2)] = null);

(statearr_27683_27739[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27632 === (9))){
var inst_27550 = (state_27631[(2)]);
var state_27631__$1 = state_27631;
var statearr_27684_27740 = state_27631__$1;
(statearr_27684_27740[(2)] = inst_27550);

(statearr_27684_27740[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27632 === (5))){
var inst_27521 = (state_27631[(7)]);
var inst_27520 = (state_27631[(9)]);
var inst_27523 = (inst_27521 < inst_27520);
var inst_27524 = inst_27523;
var state_27631__$1 = state_27631;
if(cljs.core.truth_(inst_27524)){
var statearr_27685_27741 = state_27631__$1;
(statearr_27685_27741[(1)] = (7));

} else {
var statearr_27686_27742 = state_27631__$1;
(statearr_27686_27742[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27632 === (14))){
var inst_27531 = (state_27631[(26)]);
var inst_27540 = cljs.core.first.call(null,inst_27531);
var inst_27541 = figwheel.client.file_reloading.eval_body.call(null,inst_27540);
var inst_27542 = cljs.core.next.call(null,inst_27531);
var inst_27518 = inst_27542;
var inst_27519 = null;
var inst_27520 = (0);
var inst_27521 = (0);
var state_27631__$1 = (function (){var statearr_27687 = state_27631;
(statearr_27687[(7)] = inst_27521);

(statearr_27687[(8)] = inst_27518);

(statearr_27687[(9)] = inst_27520);

(statearr_27687[(10)] = inst_27519);

(statearr_27687[(32)] = inst_27541);

return statearr_27687;
})();
var statearr_27688_27743 = state_27631__$1;
(statearr_27688_27743[(2)] = null);

(statearr_27688_27743[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27632 === (26))){
var inst_27590 = (state_27631[(19)]);
var inst_27593 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27590);
var state_27631__$1 = state_27631;
var statearr_27689_27744 = state_27631__$1;
(statearr_27689_27744[(2)] = inst_27593);

(statearr_27689_27744[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27632 === (16))){
var inst_27557 = (state_27631[(23)]);
var inst_27559 = (function (){var all_files = inst_27557;
return ((function (all_files,inst_27557,state_val_27632,c__14073__auto__,map__27506,map__27506__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__27507,map__27507__$1,msg,files){
return (function (p1__27302_SHARP_){
return cljs.core.update_in.call(null,p1__27302_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
});
;})(all_files,inst_27557,state_val_27632,c__14073__auto__,map__27506,map__27506__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__27507,map__27507__$1,msg,files))
})();
var inst_27560 = cljs.core.map.call(null,inst_27559,inst_27557);
var state_27631__$1 = state_27631;
var statearr_27690_27745 = state_27631__$1;
(statearr_27690_27745[(2)] = inst_27560);

(statearr_27690_27745[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27632 === (30))){
var state_27631__$1 = state_27631;
var statearr_27691_27746 = state_27631__$1;
(statearr_27691_27746[(2)] = null);

(statearr_27691_27746[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27632 === (10))){
var inst_27531 = (state_27631[(26)]);
var inst_27533 = cljs.core.chunked_seq_QMARK_.call(null,inst_27531);
var state_27631__$1 = state_27631;
if(inst_27533){
var statearr_27692_27747 = state_27631__$1;
(statearr_27692_27747[(1)] = (13));

} else {
var statearr_27693_27748 = state_27631__$1;
(statearr_27693_27748[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27632 === (18))){
var inst_27563 = (state_27631[(12)]);
var inst_27564 = (state_27631[(15)]);
var inst_27563__$1 = (state_27631[(2)]);
var inst_27564__$1 = figwheel.client.file_reloading.add_request_urls.call(null,opts,inst_27563__$1);
var inst_27565 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_27564__$1);
var state_27631__$1 = (function (){var statearr_27694 = state_27631;
(statearr_27694[(12)] = inst_27563__$1);

(statearr_27694[(15)] = inst_27564__$1);

return statearr_27694;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27631__$1,(19),inst_27565);
} else {
if((state_val_27632 === (37))){
var inst_27626 = (state_27631[(2)]);
var state_27631__$1 = state_27631;
var statearr_27695_27749 = state_27631__$1;
(statearr_27695_27749[(2)] = inst_27626);

(statearr_27695_27749[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27632 === (8))){
var inst_27518 = (state_27631[(8)]);
var inst_27531 = (state_27631[(26)]);
var inst_27531__$1 = cljs.core.seq.call(null,inst_27518);
var state_27631__$1 = (function (){var statearr_27696 = state_27631;
(statearr_27696[(26)] = inst_27531__$1);

return statearr_27696;
})();
if(inst_27531__$1){
var statearr_27697_27750 = state_27631__$1;
(statearr_27697_27750[(1)] = (10));

} else {
var statearr_27698_27751 = state_27631__$1;
(statearr_27698_27751[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__14073__auto__,map__27506,map__27506__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__27507,map__27507__$1,msg,files))
;
return ((function (switch__14017__auto__,c__14073__auto__,map__27506,map__27506__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__27507,map__27507__$1,msg,files){
return (function() {
var state_machine__14018__auto__ = null;
var state_machine__14018__auto____0 = (function (){
var statearr_27702 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27702[(0)] = state_machine__14018__auto__);

(statearr_27702[(1)] = (1));

return statearr_27702;
});
var state_machine__14018__auto____1 = (function (state_27631){
while(true){
var ret_value__14019__auto__ = (function (){try{while(true){
var result__14020__auto__ = switch__14017__auto__.call(null,state_27631);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14020__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14020__auto__;
}
break;
}
}catch (e27703){if((e27703 instanceof Object)){
var ex__14021__auto__ = e27703;
var statearr_27704_27752 = state_27631;
(statearr_27704_27752[(5)] = ex__14021__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27631);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27703;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14019__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27753 = state_27631;
state_27631 = G__27753;
continue;
} else {
return ret_value__14019__auto__;
}
break;
}
});
state_machine__14018__auto__ = function(state_27631){
switch(arguments.length){
case 0:
return state_machine__14018__auto____0.call(this);
case 1:
return state_machine__14018__auto____1.call(this,state_27631);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14018__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14018__auto____0;
state_machine__14018__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14018__auto____1;
return state_machine__14018__auto__;
})()
;})(switch__14017__auto__,c__14073__auto__,map__27506,map__27506__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__27507,map__27507__$1,msg,files))
})();
var state__14075__auto__ = (function (){var statearr_27705 = f__14074__auto__.call(null);
(statearr_27705[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14073__auto__);

return statearr_27705;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14075__auto__);
});})(c__14073__auto__,map__27506,map__27506__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__27507,map__27507__$1,msg,files))
);

return c__14073__auto__;
});
figwheel.client.file_reloading.current_links = (function current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function matches_file_QMARK_(p__27756,link){
var map__27758 = p__27756;
var map__27758__$1 = ((cljs.core.seq_QMARK_.call(null,map__27758))?cljs.core.apply.call(null,cljs.core.hash_map,map__27758):map__27758);
var file = cljs.core.get.call(null,map__27758__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4126__auto__ = link.href;
if(cljs.core.truth_(temp__4126__auto__)){
var link_href = temp__4126__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4126__auto__,map__27758,map__27758__$1,file){
return (function (p1__27754_SHARP_,p2__27755_SHARP_){
if(cljs.core._EQ_.call(null,p1__27754_SHARP_,p2__27755_SHARP_)){
return p1__27754_SHARP_;
} else {
return false;
}
});})(link_href,temp__4126__auto__,map__27758,map__27758__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function get_correct_link(f_data){
var temp__4126__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__27762){
var map__27763 = p__27762;
var map__27763__$1 = ((cljs.core.seq_QMARK_.call(null,map__27763))?cljs.core.apply.call(null,cljs.core.hash_map,map__27763):map__27763);
var current_url_length = cljs.core.get.call(null,map__27763__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
var match_length = cljs.core.get.call(null,map__27763__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__27759_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__27759_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4126__auto__)){
var res = temp__4126__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function() {
var add_link_to_doc = null;
var add_link_to_doc__1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});
var add_link_to_doc__2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});
add_link_to_doc = function(orig_link,klone){
switch(arguments.length){
case 1:
return add_link_to_doc__1.call(this,orig_link);
case 2:
return add_link_to_doc__2.call(this,orig_link,klone);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = add_link_to_doc__1;
add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = add_link_to_doc__2;
return add_link_to_doc;
})()
;
figwheel.client.file_reloading.reload_css_file = (function reload_css_file(p__27764){
var map__27766 = p__27764;
var map__27766__$1 = ((cljs.core.seq_QMARK_.call(null,map__27766))?cljs.core.apply.call(null,cljs.core.hash_map,map__27766):map__27766);
var f_data = map__27766__$1;
var request_url = cljs.core.get.call(null,map__27766__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var file = cljs.core.get.call(null,map__27766__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4124__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4124__auto__)){
var link = temp__4124__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return figwheel.client.file_reloading.add_link_to_doc.call(null,figwheel.client.file_reloading.create_link.call(null,(function (){var or__11600__auto__ = request_url;
if(cljs.core.truth_(or__11600__auto__)){
return or__11600__auto__;
} else {
return file;
}
})()));
}
});
figwheel.client.file_reloading.reload_css_files = (function reload_css_files(p__27767,files_msg){
var map__27789 = p__27767;
var map__27789__$1 = ((cljs.core.seq_QMARK_.call(null,map__27789))?cljs.core.apply.call(null,cljs.core.hash_map,map__27789):map__27789);
var opts = map__27789__$1;
var on_cssload = cljs.core.get.call(null,map__27789__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__27790_27810 = cljs.core.seq.call(null,figwheel.client.file_reloading.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__27791_27811 = null;
var count__27792_27812 = (0);
var i__27793_27813 = (0);
while(true){
if((i__27793_27813 < count__27792_27812)){
var f_27814 = cljs.core._nth.call(null,chunk__27791_27811,i__27793_27813);
figwheel.client.file_reloading.reload_css_file.call(null,f_27814);

var G__27815 = seq__27790_27810;
var G__27816 = chunk__27791_27811;
var G__27817 = count__27792_27812;
var G__27818 = (i__27793_27813 + (1));
seq__27790_27810 = G__27815;
chunk__27791_27811 = G__27816;
count__27792_27812 = G__27817;
i__27793_27813 = G__27818;
continue;
} else {
var temp__4126__auto___27819 = cljs.core.seq.call(null,seq__27790_27810);
if(temp__4126__auto___27819){
var seq__27790_27820__$1 = temp__4126__auto___27819;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27790_27820__$1)){
var c__12387__auto___27821 = cljs.core.chunk_first.call(null,seq__27790_27820__$1);
var G__27822 = cljs.core.chunk_rest.call(null,seq__27790_27820__$1);
var G__27823 = c__12387__auto___27821;
var G__27824 = cljs.core.count.call(null,c__12387__auto___27821);
var G__27825 = (0);
seq__27790_27810 = G__27822;
chunk__27791_27811 = G__27823;
count__27792_27812 = G__27824;
i__27793_27813 = G__27825;
continue;
} else {
var f_27826 = cljs.core.first.call(null,seq__27790_27820__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_27826);

var G__27827 = cljs.core.next.call(null,seq__27790_27820__$1);
var G__27828 = null;
var G__27829 = (0);
var G__27830 = (0);
seq__27790_27810 = G__27827;
chunk__27791_27811 = G__27828;
count__27792_27812 = G__27829;
i__27793_27813 = G__27830;
continue;
}
} else {
}
}
break;
}

var c__14073__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14073__auto__,map__27789,map__27789__$1,opts,on_cssload){
return (function (){
var f__14074__auto__ = (function (){var switch__14017__auto__ = ((function (c__14073__auto__,map__27789,map__27789__$1,opts,on_cssload){
return (function (state_27800){
var state_val_27801 = (state_27800[(1)]);
if((state_val_27801 === (2))){
var inst_27796 = (state_27800[(2)]);
var inst_27797 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);
var inst_27798 = on_cssload.call(null,inst_27797);
var state_27800__$1 = (function (){var statearr_27802 = state_27800;
(statearr_27802[(7)] = inst_27796);

return statearr_27802;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27800__$1,inst_27798);
} else {
if((state_val_27801 === (1))){
var inst_27794 = cljs.core.async.timeout.call(null,(100));
var state_27800__$1 = state_27800;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27800__$1,(2),inst_27794);
} else {
return null;
}
}
});})(c__14073__auto__,map__27789,map__27789__$1,opts,on_cssload))
;
return ((function (switch__14017__auto__,c__14073__auto__,map__27789,map__27789__$1,opts,on_cssload){
return (function() {
var state_machine__14018__auto__ = null;
var state_machine__14018__auto____0 = (function (){
var statearr_27806 = [null,null,null,null,null,null,null,null];
(statearr_27806[(0)] = state_machine__14018__auto__);

(statearr_27806[(1)] = (1));

return statearr_27806;
});
var state_machine__14018__auto____1 = (function (state_27800){
while(true){
var ret_value__14019__auto__ = (function (){try{while(true){
var result__14020__auto__ = switch__14017__auto__.call(null,state_27800);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14020__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14020__auto__;
}
break;
}
}catch (e27807){if((e27807 instanceof Object)){
var ex__14021__auto__ = e27807;
var statearr_27808_27831 = state_27800;
(statearr_27808_27831[(5)] = ex__14021__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27800);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27807;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14019__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27832 = state_27800;
state_27800 = G__27832;
continue;
} else {
return ret_value__14019__auto__;
}
break;
}
});
state_machine__14018__auto__ = function(state_27800){
switch(arguments.length){
case 0:
return state_machine__14018__auto____0.call(this);
case 1:
return state_machine__14018__auto____1.call(this,state_27800);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14018__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14018__auto____0;
state_machine__14018__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14018__auto____1;
return state_machine__14018__auto__;
})()
;})(switch__14017__auto__,c__14073__auto__,map__27789,map__27789__$1,opts,on_cssload))
})();
var state__14075__auto__ = (function (){var statearr_27809 = f__14074__auto__.call(null);
(statearr_27809[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14073__auto__);

return statearr_27809;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14075__auto__);
});})(c__14073__auto__,map__27789,map__27789__$1,opts,on_cssload))
);

return c__14073__auto__;
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map