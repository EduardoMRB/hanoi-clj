// Compiled by ClojureScript 0.0-2850 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('clojure.string');

/**
* @param {...*} var_args
*/
figwheel.client.heads_up.node = (function() { 
var node__delegate = function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__26901_26909 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__26902_26910 = null;
var count__26903_26911 = (0);
var i__26904_26912 = (0);
while(true){
if((i__26904_26912 < count__26903_26911)){
var k_26913 = cljs.core._nth.call(null,chunk__26902_26910,i__26904_26912);
e.setAttribute(cljs.core.name.call(null,k_26913),cljs.core.get.call(null,attrs,k_26913));

var G__26914 = seq__26901_26909;
var G__26915 = chunk__26902_26910;
var G__26916 = count__26903_26911;
var G__26917 = (i__26904_26912 + (1));
seq__26901_26909 = G__26914;
chunk__26902_26910 = G__26915;
count__26903_26911 = G__26916;
i__26904_26912 = G__26917;
continue;
} else {
var temp__4126__auto___26918 = cljs.core.seq.call(null,seq__26901_26909);
if(temp__4126__auto___26918){
var seq__26901_26919__$1 = temp__4126__auto___26918;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26901_26919__$1)){
var c__12387__auto___26920 = cljs.core.chunk_first.call(null,seq__26901_26919__$1);
var G__26921 = cljs.core.chunk_rest.call(null,seq__26901_26919__$1);
var G__26922 = c__12387__auto___26920;
var G__26923 = cljs.core.count.call(null,c__12387__auto___26920);
var G__26924 = (0);
seq__26901_26909 = G__26921;
chunk__26902_26910 = G__26922;
count__26903_26911 = G__26923;
i__26904_26912 = G__26924;
continue;
} else {
var k_26925 = cljs.core.first.call(null,seq__26901_26919__$1);
e.setAttribute(cljs.core.name.call(null,k_26925),cljs.core.get.call(null,attrs,k_26925));

var G__26926 = cljs.core.next.call(null,seq__26901_26919__$1);
var G__26927 = null;
var G__26928 = (0);
var G__26929 = (0);
seq__26901_26909 = G__26926;
chunk__26902_26910 = G__26927;
count__26903_26911 = G__26928;
i__26904_26912 = G__26929;
continue;
}
} else {
}
}
break;
}

var seq__26905_26930 = cljs.core.seq.call(null,children);
var chunk__26906_26931 = null;
var count__26907_26932 = (0);
var i__26908_26933 = (0);
while(true){
if((i__26908_26933 < count__26907_26932)){
var ch_26934 = cljs.core._nth.call(null,chunk__26906_26931,i__26908_26933);
e.appendChild(ch_26934);

var G__26935 = seq__26905_26930;
var G__26936 = chunk__26906_26931;
var G__26937 = count__26907_26932;
var G__26938 = (i__26908_26933 + (1));
seq__26905_26930 = G__26935;
chunk__26906_26931 = G__26936;
count__26907_26932 = G__26937;
i__26908_26933 = G__26938;
continue;
} else {
var temp__4126__auto___26939 = cljs.core.seq.call(null,seq__26905_26930);
if(temp__4126__auto___26939){
var seq__26905_26940__$1 = temp__4126__auto___26939;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26905_26940__$1)){
var c__12387__auto___26941 = cljs.core.chunk_first.call(null,seq__26905_26940__$1);
var G__26942 = cljs.core.chunk_rest.call(null,seq__26905_26940__$1);
var G__26943 = c__12387__auto___26941;
var G__26944 = cljs.core.count.call(null,c__12387__auto___26941);
var G__26945 = (0);
seq__26905_26930 = G__26942;
chunk__26906_26931 = G__26943;
count__26907_26932 = G__26944;
i__26908_26933 = G__26945;
continue;
} else {
var ch_26946 = cljs.core.first.call(null,seq__26905_26940__$1);
e.appendChild(ch_26946);

var G__26947 = cljs.core.next.call(null,seq__26905_26940__$1);
var G__26948 = null;
var G__26949 = (0);
var G__26950 = (0);
seq__26905_26930 = G__26947;
chunk__26906_26931 = G__26948;
count__26907_26932 = G__26949;
i__26908_26933 = G__26950;
continue;
}
} else {
}
}
break;
}

return e;
};
var node = function (t,attrs,var_args){
var children = null;
if (arguments.length > 2) {
var G__26951__i = 0, G__26951__a = new Array(arguments.length -  2);
while (G__26951__i < G__26951__a.length) {G__26951__a[G__26951__i] = arguments[G__26951__i + 2]; ++G__26951__i;}
  children = new cljs.core.IndexedSeq(G__26951__a,0);
} 
return node__delegate.call(this,t,attrs,children);};
node.cljs$lang$maxFixedArity = 2;
node.cljs$lang$applyTo = (function (arglist__26952){
var t = cljs.core.first(arglist__26952);
arglist__26952 = cljs.core.next(arglist__26952);
var attrs = cljs.core.first(arglist__26952);
var children = cljs.core.rest(arglist__26952);
return node__delegate(t,attrs,children);
});
node.cljs$core$IFn$_invoke$arity$variadic = node__delegate;
return node;
})()
;
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__12497__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__12498__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__12499__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__12500__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__12501__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__12497__auto__,prefer_table__12498__auto__,method_cache__12499__auto__,cached_hierarchy__12500__auto__,hierarchy__12501__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__12497__auto__,prefer_table__12498__auto__,method_cache__12499__auto__,cached_hierarchy__12500__auto__,hierarchy__12501__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__12501__auto__,method_table__12497__auto__,prefer_table__12498__auto__,method_cache__12499__auto__,cached_hierarchy__12500__auto__));
})();
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector([cljs.core.str("#"),cljs.core.str(cont_id)].join('')))){
var el = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el.innerHTML = [cljs.core.str(figwheel.client.heads_up.clojure_symbol_svg)].join('');

el.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

return document.body.appendChild(el);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
}
});
figwheel.client.heads_up.set_style_BANG_ = (function set_style_BANG_(p__26953,st_map){
var map__26957 = p__26953;
var map__26957__$1 = ((cljs.core.seq_QMARK_.call(null,map__26957))?cljs.core.apply.call(null,cljs.core.hash_map,map__26957):map__26957);
var container_el = cljs.core.get.call(null,map__26957__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__26957,map__26957__$1,container_el){
return (function (p__26958){
var vec__26959 = p__26958;
var k = cljs.core.nth.call(null,vec__26959,(0),null);
var v = cljs.core.nth.call(null,vec__26959,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__26957,map__26957__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function set_content_BANG_(p__26960,dom_str){
var map__26962 = p__26960;
var map__26962__$1 = ((cljs.core.seq_QMARK_.call(null,map__26962))?cljs.core.apply.call(null,cljs.core.hash_map,map__26962):map__26962);
var c = map__26962__$1;
var content_area_el = cljs.core.get.call(null,map__26962__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function get_content(p__26963){
var map__26965 = p__26963;
var map__26965__$1 = ((cljs.core.seq_QMARK_.call(null,map__26965))?cljs.core.apply.call(null,cljs.core.hash_map,map__26965):map__26965);
var content_area_el = cljs.core.get.call(null,map__26965__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function display_heads_up(style,msg){
var c__14073__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14073__auto__){
return (function (){
var f__14074__auto__ = (function (){var switch__14017__auto__ = ((function (c__14073__auto__){
return (function (state_27007){
var state_val_27008 = (state_27007[(1)]);
if((state_val_27008 === (2))){
var inst_26992 = (state_27007[(7)]);
var inst_27001 = (state_27007[(2)]);
var inst_27002 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_27003 = ["auto"];
var inst_27004 = cljs.core.PersistentHashMap.fromArrays(inst_27002,inst_27003);
var inst_27005 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_26992,inst_27004);
var state_27007__$1 = (function (){var statearr_27009 = state_27007;
(statearr_27009[(8)] = inst_27001);

return statearr_27009;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27007__$1,inst_27005);
} else {
if((state_val_27008 === (1))){
var inst_26992 = (state_27007[(7)]);
var inst_26992__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_26993 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_26994 = ["10px","10px","100%","68px","1.0"];
var inst_26995 = cljs.core.PersistentHashMap.fromArrays(inst_26993,inst_26994);
var inst_26996 = cljs.core.merge.call(null,inst_26995,style);
var inst_26997 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_26992__$1,inst_26996);
var inst_26998 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_26992__$1,msg);
var inst_26999 = cljs.core.async.timeout.call(null,(300));
var state_27007__$1 = (function (){var statearr_27010 = state_27007;
(statearr_27010[(9)] = inst_26998);

(statearr_27010[(10)] = inst_26997);

(statearr_27010[(7)] = inst_26992__$1);

return statearr_27010;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27007__$1,(2),inst_26999);
} else {
return null;
}
}
});})(c__14073__auto__))
;
return ((function (switch__14017__auto__,c__14073__auto__){
return (function() {
var state_machine__14018__auto__ = null;
var state_machine__14018__auto____0 = (function (){
var statearr_27014 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27014[(0)] = state_machine__14018__auto__);

(statearr_27014[(1)] = (1));

return statearr_27014;
});
var state_machine__14018__auto____1 = (function (state_27007){
while(true){
var ret_value__14019__auto__ = (function (){try{while(true){
var result__14020__auto__ = switch__14017__auto__.call(null,state_27007);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14020__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14020__auto__;
}
break;
}
}catch (e27015){if((e27015 instanceof Object)){
var ex__14021__auto__ = e27015;
var statearr_27016_27018 = state_27007;
(statearr_27016_27018[(5)] = ex__14021__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27007);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27015;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14019__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27019 = state_27007;
state_27007 = G__27019;
continue;
} else {
return ret_value__14019__auto__;
}
break;
}
});
state_machine__14018__auto__ = function(state_27007){
switch(arguments.length){
case 0:
return state_machine__14018__auto____0.call(this);
case 1:
return state_machine__14018__auto____1.call(this,state_27007);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14018__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14018__auto____0;
state_machine__14018__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14018__auto____1;
return state_machine__14018__auto__;
})()
;})(switch__14017__auto__,c__14073__auto__))
})();
var state__14075__auto__ = (function (){var statearr_27017 = f__14074__auto__.call(null);
(statearr_27017[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14073__auto__);

return statearr_27017;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14075__auto__);
});})(c__14073__auto__))
);

return c__14073__auto__;
});
figwheel.client.heads_up.heading = (function heading(s){
return [cljs.core.str("<div style=\""),cljs.core.str("font-size: 26px;"),cljs.core.str("line-height: 26px;"),cljs.core.str("margin-bottom: 2px;"),cljs.core.str("padding-top: 1px;"),cljs.core.str("\">"),cljs.core.str(s),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.file_and_line_number = (function file_and_line_number(msg){
if(cljs.core.truth_(cljs.core.re_matches.call(null,/.*at\sline.*/,msg))){
return cljs.core.take.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,msg," ")));
} else {
return null;
}
});
figwheel.client.heads_up.file_selector_div = (function file_selector_div(file_name,line_number,msg){
return [cljs.core.str("<div data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str(file_name),cljs.core.str("\" data-file-line=\""),cljs.core.str(line_number),cljs.core.str("\">"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function format_line(msg){
var temp__4124__auto__ = figwheel.client.heads_up.file_and_line_number.call(null,msg);
if(cljs.core.truth_(temp__4124__auto__)){
var vec__27021 = temp__4124__auto__;
var f = cljs.core.nth.call(null,vec__27021,(0),null);
var ln = cljs.core.nth.call(null,vec__27021,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function display_error(formatted_messages){
var vec__27024 = cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages));
var file_name = cljs.core.nth.call(null,vec__27024,(0),null);
var file_line = cljs.core.nth.call(null,vec__27024,(1),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__27024,file_name,file_line){
return (function (p1__27022_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(p1__27022_SHARP_),cljs.core.str("</div>")].join('');
});})(vec__27024,file_name,file_line))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file_name,file_line,msg))].join(''));
});
figwheel.client.heads_up.display_system_warning = (function display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str(figwheel.client.heads_up.format_line.call(null,msg))].join(''));
});
figwheel.client.heads_up.display_warning = (function display_warning(msg){
return figwheel.client.heads_up.display_system_warning.call(null,"Compile Warning",msg);
});
figwheel.client.heads_up.append_message = (function append_message(message){
var map__27026 = figwheel.client.heads_up.ensure_container.call(null);
var map__27026__$1 = ((cljs.core.seq_QMARK_.call(null,map__27026))?cljs.core.apply.call(null,cljs.core.hash_map,map__27026):map__27026);
var content_area_el = cljs.core.get.call(null,map__27026__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function clear(){
var c__14073__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14073__auto__){
return (function (){
var f__14074__auto__ = (function (){var switch__14017__auto__ = ((function (c__14073__auto__){
return (function (state_27073){
var state_val_27074 = (state_27073[(1)]);
if((state_val_27074 === (3))){
var inst_27056 = (state_27073[(7)]);
var inst_27070 = (state_27073[(2)]);
var inst_27071 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_27056,"");
var state_27073__$1 = (function (){var statearr_27075 = state_27073;
(statearr_27075[(8)] = inst_27070);

return statearr_27075;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27073__$1,inst_27071);
} else {
if((state_val_27074 === (2))){
var inst_27056 = (state_27073[(7)]);
var inst_27063 = (state_27073[(2)]);
var inst_27064 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_27065 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_27066 = cljs.core.PersistentHashMap.fromArrays(inst_27064,inst_27065);
var inst_27067 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_27056,inst_27066);
var inst_27068 = cljs.core.async.timeout.call(null,(200));
var state_27073__$1 = (function (){var statearr_27076 = state_27073;
(statearr_27076[(9)] = inst_27063);

(statearr_27076[(10)] = inst_27067);

return statearr_27076;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27073__$1,(3),inst_27068);
} else {
if((state_val_27074 === (1))){
var inst_27056 = (state_27073[(7)]);
var inst_27056__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_27057 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_27058 = ["0.0"];
var inst_27059 = cljs.core.PersistentHashMap.fromArrays(inst_27057,inst_27058);
var inst_27060 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_27056__$1,inst_27059);
var inst_27061 = cljs.core.async.timeout.call(null,(300));
var state_27073__$1 = (function (){var statearr_27077 = state_27073;
(statearr_27077[(11)] = inst_27060);

(statearr_27077[(7)] = inst_27056__$1);

return statearr_27077;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27073__$1,(2),inst_27061);
} else {
return null;
}
}
}
});})(c__14073__auto__))
;
return ((function (switch__14017__auto__,c__14073__auto__){
return (function() {
var state_machine__14018__auto__ = null;
var state_machine__14018__auto____0 = (function (){
var statearr_27081 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27081[(0)] = state_machine__14018__auto__);

(statearr_27081[(1)] = (1));

return statearr_27081;
});
var state_machine__14018__auto____1 = (function (state_27073){
while(true){
var ret_value__14019__auto__ = (function (){try{while(true){
var result__14020__auto__ = switch__14017__auto__.call(null,state_27073);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14020__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14020__auto__;
}
break;
}
}catch (e27082){if((e27082 instanceof Object)){
var ex__14021__auto__ = e27082;
var statearr_27083_27085 = state_27073;
(statearr_27083_27085[(5)] = ex__14021__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27073);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27082;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14019__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27086 = state_27073;
state_27073 = G__27086;
continue;
} else {
return ret_value__14019__auto__;
}
break;
}
});
state_machine__14018__auto__ = function(state_27073){
switch(arguments.length){
case 0:
return state_machine__14018__auto____0.call(this);
case 1:
return state_machine__14018__auto____1.call(this,state_27073);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14018__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14018__auto____0;
state_machine__14018__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14018__auto____1;
return state_machine__14018__auto__;
})()
;})(switch__14017__auto__,c__14073__auto__))
})();
var state__14075__auto__ = (function (){var statearr_27084 = f__14074__auto__.call(null);
(statearr_27084[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14073__auto__);

return statearr_27084;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14075__auto__);
});})(c__14073__auto__))
);

return c__14073__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function flash_loaded(){
var c__14073__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14073__auto__){
return (function (){
var f__14074__auto__ = (function (){var switch__14017__auto__ = ((function (c__14073__auto__){
return (function (state_27118){
var state_val_27119 = (state_27118[(1)]);
if((state_val_27119 === (4))){
var inst_27116 = (state_27118[(2)]);
var state_27118__$1 = state_27118;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27118__$1,inst_27116);
} else {
if((state_val_27119 === (3))){
var inst_27113 = (state_27118[(2)]);
var inst_27114 = figwheel.client.heads_up.clear.call(null);
var state_27118__$1 = (function (){var statearr_27120 = state_27118;
(statearr_27120[(7)] = inst_27113);

return statearr_27120;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27118__$1,(4),inst_27114);
} else {
if((state_val_27119 === (2))){
var inst_27110 = (state_27118[(2)]);
var inst_27111 = cljs.core.async.timeout.call(null,(400));
var state_27118__$1 = (function (){var statearr_27121 = state_27118;
(statearr_27121[(8)] = inst_27110);

return statearr_27121;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27118__$1,(3),inst_27111);
} else {
if((state_val_27119 === (1))){
var inst_27108 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_27118__$1 = state_27118;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27118__$1,(2),inst_27108);
} else {
return null;
}
}
}
}
});})(c__14073__auto__))
;
return ((function (switch__14017__auto__,c__14073__auto__){
return (function() {
var state_machine__14018__auto__ = null;
var state_machine__14018__auto____0 = (function (){
var statearr_27125 = [null,null,null,null,null,null,null,null,null];
(statearr_27125[(0)] = state_machine__14018__auto__);

(statearr_27125[(1)] = (1));

return statearr_27125;
});
var state_machine__14018__auto____1 = (function (state_27118){
while(true){
var ret_value__14019__auto__ = (function (){try{while(true){
var result__14020__auto__ = switch__14017__auto__.call(null,state_27118);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14020__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14020__auto__;
}
break;
}
}catch (e27126){if((e27126 instanceof Object)){
var ex__14021__auto__ = e27126;
var statearr_27127_27129 = state_27118;
(statearr_27127_27129[(5)] = ex__14021__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27118);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27126;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14019__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27130 = state_27118;
state_27118 = G__27130;
continue;
} else {
return ret_value__14019__auto__;
}
break;
}
});
state_machine__14018__auto__ = function(state_27118){
switch(arguments.length){
case 0:
return state_machine__14018__auto____0.call(this);
case 1:
return state_machine__14018__auto____1.call(this,state_27118);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14018__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14018__auto____0;
state_machine__14018__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14018__auto____1;
return state_machine__14018__auto__;
})()
;})(switch__14017__auto__,c__14073__auto__))
})();
var state__14075__auto__ = (function (){var statearr_27128 = f__14074__auto__.call(null);
(statearr_27128[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14073__auto__);

return statearr_27128;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14075__auto__);
});})(c__14073__auto__))
);

return c__14073__auto__;
});
figwheel.client.heads_up.clojure_symbol_svg = "<?xml version='1.0' encoding='UTF-8' ?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' viewBox='0 0 100 99' version='1.1' xmlns='http://www.w3.org/2000/svg' style='position:absolute; top:9px; left: 10px;'>\n<circle fill='rgba(255,255,255,0.5)' cx='49.75' cy='49.5' r='48.5'/>\n<path fill='#5881d8' d=' M 39.30 6.22 C 51.71 3.11 65.45 5.64 75.83 13.16 C 88.68 22.10 96.12 38.22 94.43 53.80 C 93.66 60.11 89.40 66.01 83.37 68.24 C 79.21 69.97 74.64 69.78 70.23 69.80 C 80.77 59.67 81.41 41.33 71.45 30.60 C 63.60 21.32 49.75 18.52 38.65 23.16 C 31.27 18.80 21.83 18.68 14.27 22.69 C 20.65 14.79 29.32 8.56 39.30 6.22 Z' />\n<path fill='#90b4fe' d=' M 42.93 26.99 C 48.49 25.50 54.55 25.62 59.79 28.14 C 68.71 32.19 74.61 42.14 73.41 51.94 C 72.85 58.64 68.92 64.53 63.81 68.69 C 59.57 66.71 57.53 62.30 55.66 58.30 C 50.76 48.12 50.23 36.02 42.93 26.99 Z' />\n<path fill='#63b132' d=' M 12.30 33.30 C 17.11 28.49 24.33 26.90 30.91 28.06 C 25.22 33.49 21.44 41.03 21.46 48.99 C 21.11 58.97 26.58 68.76 35.08 73.92 C 43.28 79.06 53.95 79.28 62.66 75.29 C 70.37 77.57 78.52 77.36 86.31 75.57 C 80.05 84.00 70.94 90.35 60.69 92.84 C 48.02 96.03 34.00 93.24 23.56 85.37 C 12.16 77.09 5.12 63.11 5.44 49.00 C 5.15 43.06 8.22 37.42 12.30 33.30 Z' />\n<path fill='#91dc47' d=' M 26.94 54.00 C 24.97 45.06 29.20 35.59 36.45 30.24 C 41.99 33.71 44.23 40.14 46.55 45.91 C 43.00 53.40 38.44 60.46 35.94 68.42 C 31.50 64.74 27.96 59.77 26.94 54.00 Z' />\n<path fill='#91dc47' d=' M 41.97 71.80 C 41.46 64.27 45.31 57.52 48.11 50.80 C 50.40 58.13 51.84 66.19 57.18 72.06 C 52.17 73.37 46.93 73.26 41.97 71.80 Z' />\n</svg>";

//# sourceMappingURL=heads_up.js.map