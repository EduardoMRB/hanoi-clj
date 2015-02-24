// Compiled by ClojureScript 0.0-2850 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.console_print = (function console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.enable_repl_print_BANG_ = (function enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__26142__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__26142 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26143__i = 0, G__26143__a = new Array(arguments.length -  0);
while (G__26143__i < G__26143__a.length) {G__26143__a[G__26143__i] = arguments[G__26143__i + 0]; ++G__26143__i;}
  args = new cljs.core.IndexedSeq(G__26143__a,0);
} 
return G__26142__delegate.call(this,args);};
G__26142.cljs$lang$maxFixedArity = 0;
G__26142.cljs$lang$applyTo = (function (arglist__26144){
var args = cljs.core.seq(arglist__26144);
return G__26142__delegate(args);
});
G__26142.cljs$core$IFn$_invoke$arity$variadic = G__26142__delegate;
return G__26142;
})()
;
});
figwheel.client.get_essential_messages = (function get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function error_msg_format(p__26145){
var map__26147 = p__26145;
var map__26147__$1 = ((cljs.core.seq_QMARK_.call(null,map__26147))?cljs.core.apply.call(null,cljs.core.hash_map,map__26147):map__26147);
var class$ = cljs.core.get.call(null,map__26147__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var message = cljs.core.get.call(null,map__26147__$1,new cljs.core.Keyword(null,"message","message",-406056002));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function reload_file_QMARK__STAR_(msg_name,opts){
var or__11600__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__11600__auto__)){
return or__11600__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function reload_file_state_QMARK_(msg_names,opts){
var and__11588__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__11588__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__11588__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__14073__auto___26276 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14073__auto___26276,ch){
return (function (){
var f__14074__auto__ = (function (){var switch__14017__auto__ = ((function (c__14073__auto___26276,ch){
return (function (state_26250){
var state_val_26251 = (state_26250[(1)]);
if((state_val_26251 === (7))){
var inst_26246 = (state_26250[(2)]);
var state_26250__$1 = state_26250;
var statearr_26252_26277 = state_26250__$1;
(statearr_26252_26277[(2)] = inst_26246);

(statearr_26252_26277[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26251 === (1))){
var state_26250__$1 = state_26250;
var statearr_26253_26278 = state_26250__$1;
(statearr_26253_26278[(2)] = null);

(statearr_26253_26278[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26251 === (4))){
var inst_26214 = (state_26250[(7)]);
var inst_26214__$1 = (state_26250[(2)]);
var state_26250__$1 = (function (){var statearr_26254 = state_26250;
(statearr_26254[(7)] = inst_26214__$1);

return statearr_26254;
})();
if(cljs.core.truth_(inst_26214__$1)){
var statearr_26255_26279 = state_26250__$1;
(statearr_26255_26279[(1)] = (5));

} else {
var statearr_26256_26280 = state_26250__$1;
(statearr_26256_26280[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26251 === (13))){
var state_26250__$1 = state_26250;
var statearr_26257_26281 = state_26250__$1;
(statearr_26257_26281[(2)] = null);

(statearr_26257_26281[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26251 === (6))){
var state_26250__$1 = state_26250;
var statearr_26258_26282 = state_26250__$1;
(statearr_26258_26282[(2)] = null);

(statearr_26258_26282[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26251 === (3))){
var inst_26248 = (state_26250[(2)]);
var state_26250__$1 = state_26250;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26250__$1,inst_26248);
} else {
if((state_val_26251 === (12))){
var inst_26221 = (state_26250[(8)]);
var inst_26234 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_26221);
var inst_26235 = cljs.core.first.call(null,inst_26234);
var inst_26236 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_26235);
var inst_26237 = console.warn("Figwheel: Not loading code with warnings - ",inst_26236);
var state_26250__$1 = state_26250;
var statearr_26259_26283 = state_26250__$1;
(statearr_26259_26283[(2)] = inst_26237);

(statearr_26259_26283[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26251 === (2))){
var state_26250__$1 = state_26250;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26250__$1,(4),ch);
} else {
if((state_val_26251 === (11))){
var inst_26230 = (state_26250[(2)]);
var state_26250__$1 = state_26250;
var statearr_26260_26284 = state_26250__$1;
(statearr_26260_26284[(2)] = inst_26230);

(statearr_26260_26284[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26251 === (9))){
var inst_26220 = (state_26250[(9)]);
var inst_26232 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_26220,opts);
var state_26250__$1 = state_26250;
if(inst_26232){
var statearr_26261_26285 = state_26250__$1;
(statearr_26261_26285[(1)] = (12));

} else {
var statearr_26262_26286 = state_26250__$1;
(statearr_26262_26286[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26251 === (5))){
var inst_26214 = (state_26250[(7)]);
var inst_26220 = (state_26250[(9)]);
var inst_26216 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_26217 = (new cljs.core.PersistentArrayMap(null,2,inst_26216,null));
var inst_26218 = (new cljs.core.PersistentHashSet(null,inst_26217,null));
var inst_26219 = figwheel.client.focus_msgs.call(null,inst_26218,inst_26214);
var inst_26220__$1 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_26219);
var inst_26221 = cljs.core.first.call(null,inst_26219);
var inst_26222 = figwheel.client.reload_file_state_QMARK_.call(null,inst_26220__$1,opts);
var state_26250__$1 = (function (){var statearr_26263 = state_26250;
(statearr_26263[(9)] = inst_26220__$1);

(statearr_26263[(8)] = inst_26221);

return statearr_26263;
})();
if(cljs.core.truth_(inst_26222)){
var statearr_26264_26287 = state_26250__$1;
(statearr_26264_26287[(1)] = (8));

} else {
var statearr_26265_26288 = state_26250__$1;
(statearr_26265_26288[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26251 === (14))){
var inst_26240 = (state_26250[(2)]);
var state_26250__$1 = state_26250;
var statearr_26266_26289 = state_26250__$1;
(statearr_26266_26289[(2)] = inst_26240);

(statearr_26266_26289[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26251 === (10))){
var inst_26242 = (state_26250[(2)]);
var state_26250__$1 = (function (){var statearr_26267 = state_26250;
(statearr_26267[(10)] = inst_26242);

return statearr_26267;
})();
var statearr_26268_26290 = state_26250__$1;
(statearr_26268_26290[(2)] = null);

(statearr_26268_26290[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26251 === (8))){
var inst_26221 = (state_26250[(8)]);
var inst_26224 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_26225 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_26221);
var inst_26226 = cljs.core.async.timeout.call(null,(1000));
var inst_26227 = [inst_26225,inst_26226];
var inst_26228 = (new cljs.core.PersistentVector(null,2,(5),inst_26224,inst_26227,null));
var state_26250__$1 = state_26250;
return cljs.core.async.ioc_alts_BANG_.call(null,state_26250__$1,(11),inst_26228);
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
});})(c__14073__auto___26276,ch))
;
return ((function (switch__14017__auto__,c__14073__auto___26276,ch){
return (function() {
var state_machine__14018__auto__ = null;
var state_machine__14018__auto____0 = (function (){
var statearr_26272 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26272[(0)] = state_machine__14018__auto__);

(statearr_26272[(1)] = (1));

return statearr_26272;
});
var state_machine__14018__auto____1 = (function (state_26250){
while(true){
var ret_value__14019__auto__ = (function (){try{while(true){
var result__14020__auto__ = switch__14017__auto__.call(null,state_26250);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14020__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14020__auto__;
}
break;
}
}catch (e26273){if((e26273 instanceof Object)){
var ex__14021__auto__ = e26273;
var statearr_26274_26291 = state_26250;
(statearr_26274_26291[(5)] = ex__14021__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26250);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26273;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14019__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26292 = state_26250;
state_26250 = G__26292;
continue;
} else {
return ret_value__14019__auto__;
}
break;
}
});
state_machine__14018__auto__ = function(state_26250){
switch(arguments.length){
case 0:
return state_machine__14018__auto____0.call(this);
case 1:
return state_machine__14018__auto____1.call(this,state_26250);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14018__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14018__auto____0;
state_machine__14018__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14018__auto____1;
return state_machine__14018__auto__;
})()
;})(switch__14017__auto__,c__14073__auto___26276,ch))
})();
var state__14075__auto__ = (function (){var statearr_26275 = f__14074__auto__.call(null);
(statearr_26275[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14073__auto___26276);

return statearr_26275;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14075__auto__);
});})(c__14073__auto___26276,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function truncate_stack_trace(stack_str){
return clojure.string.join.call(null,"\n",cljs.core.take_while.call(null,(function (p1__26293_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__26293_SHARP_));
}),clojure.string.split_lines.call(null,stack_str)));
});
figwheel.client.eval_javascript_STAR__STAR_ = (function eval_javascript_STAR__STAR_(code,result_handler){
try{var _STAR_print_fn_STAR_26298 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_26299 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_26298,_STAR_print_newline_STAR_26299){
return (function() { 
var G__26300__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__26300 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26301__i = 0, G__26301__a = new Array(arguments.length -  0);
while (G__26301__i < G__26301__a.length) {G__26301__a[G__26301__i] = arguments[G__26301__i + 0]; ++G__26301__i;}
  args = new cljs.core.IndexedSeq(G__26301__a,0);
} 
return G__26300__delegate.call(this,args);};
G__26300.cljs$lang$maxFixedArity = 0;
G__26300.cljs$lang$applyTo = (function (arglist__26302){
var args = cljs.core.seq(arglist__26302);
return G__26300__delegate(args);
});
G__26300.cljs$core$IFn$_invoke$arity$variadic = G__26300__delegate;
return G__26300;
})()
;})(_STAR_print_fn_STAR_26298,_STAR_print_newline_STAR_26299))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(eval(code))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_26299;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_26298;
}}catch (e26297){if((e26297 instanceof Error)){
var e = e26297;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),(cljs.core.truth_(e.hasOwnProperty("stack"))?figwheel.client.truncate_stack_trace.call(null,e.stack):"No stacktrace available.")], null));
} else {
var e = e26297;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});
/**
* The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
*/
figwheel.client.ensure_cljs_user = (function ensure_cljs_user(){
if(cljs.core.truth_(cljs)){
} else {
cljs = {};
}

if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function repl_plugin(p__26303){
var map__26308 = p__26303;
var map__26308__$1 = ((cljs.core.seq_QMARK_.call(null,map__26308))?cljs.core.apply.call(null,cljs.core.hash_map,map__26308):map__26308);
var opts = map__26308__$1;
var build_id = cljs.core.get.call(null,map__26308__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__26308,map__26308__$1,opts,build_id){
return (function (p__26309){
var vec__26310 = p__26309;
var map__26311 = cljs.core.nth.call(null,vec__26310,(0),null);
var map__26311__$1 = ((cljs.core.seq_QMARK_.call(null,map__26311))?cljs.core.apply.call(null,cljs.core.hash_map,map__26311):map__26311);
var msg = map__26311__$1;
var msg_name = cljs.core.get.call(null,map__26311__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__26310,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),((function (vec__26310,map__26311,map__26311__$1,msg,msg_name,_,map__26308,map__26308__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__26310,map__26311,map__26311__$1,msg,msg_name,_,map__26308,map__26308__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__26308,map__26308__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function css_reloader_plugin(opts){
return (function (p__26315){
var vec__26316 = p__26315;
var map__26317 = cljs.core.nth.call(null,vec__26316,(0),null);
var map__26317__$1 = ((cljs.core.seq_QMARK_.call(null,map__26317))?cljs.core.apply.call(null,cljs.core.hash_map,map__26317):map__26317);
var msg = map__26317__$1;
var msg_name = cljs.core.get.call(null,map__26317__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__26316,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function compile_fail_warning_plugin(p__26318){
var map__26326 = p__26318;
var map__26326__$1 = ((cljs.core.seq_QMARK_.call(null,map__26326))?cljs.core.apply.call(null,cljs.core.hash_map,map__26326):map__26326);
var on_compile_fail = cljs.core.get.call(null,map__26326__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
var on_compile_warning = cljs.core.get.call(null,map__26326__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
return ((function (map__26326,map__26326__$1,on_compile_fail,on_compile_warning){
return (function (p__26327){
var vec__26328 = p__26327;
var map__26329 = cljs.core.nth.call(null,vec__26328,(0),null);
var map__26329__$1 = ((cljs.core.seq_QMARK_.call(null,map__26329))?cljs.core.apply.call(null,cljs.core.hash_map,map__26329):map__26329);
var msg = map__26329__$1;
var msg_name = cljs.core.get.call(null,map__26329__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__26328,(1));
var pred__26330 = cljs.core._EQ_;
var expr__26331 = msg_name;
if(cljs.core.truth_(pred__26330.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__26331))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__26330.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__26331))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__26326,map__26326__$1,on_compile_fail,on_compile_warning))
});
figwheel.client.heads_up_plugin_msg_handler = (function heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__14073__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14073__auto__,msg_hist,msg_names,msg){
return (function (){
var f__14074__auto__ = (function (){var switch__14017__auto__ = ((function (c__14073__auto__,msg_hist,msg_names,msg){
return (function (state_26508){
var state_val_26509 = (state_26508[(1)]);
if((state_val_26509 === (7))){
var inst_26457 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_26508__$1 = state_26508;
if(inst_26457){
var statearr_26510_26547 = state_26508__$1;
(statearr_26510_26547[(1)] = (11));

} else {
var statearr_26511_26548 = state_26508__$1;
(statearr_26511_26548[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26509 === (20))){
var inst_26498 = (state_26508[(2)]);
var state_26508__$1 = state_26508;
var statearr_26512_26549 = state_26508__$1;
(statearr_26512_26549[(2)] = inst_26498);

(statearr_26512_26549[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26509 === (27))){
var inst_26489 = figwheel.client.heads_up.flash_loaded.call(null);
var state_26508__$1 = state_26508;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26508__$1,(30),inst_26489);
} else {
if((state_val_26509 === (1))){
var inst_26440 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_26508__$1 = state_26508;
if(cljs.core.truth_(inst_26440)){
var statearr_26513_26550 = state_26508__$1;
(statearr_26513_26550[(1)] = (2));

} else {
var statearr_26514_26551 = state_26508__$1;
(statearr_26514_26551[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26509 === (24))){
var inst_26487 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_26508__$1 = state_26508;
if(inst_26487){
var statearr_26515_26552 = state_26508__$1;
(statearr_26515_26552[(1)] = (27));

} else {
var statearr_26516_26553 = state_26508__$1;
(statearr_26516_26553[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26509 === (4))){
var inst_26506 = (state_26508[(2)]);
var state_26508__$1 = state_26508;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26508__$1,inst_26506);
} else {
if((state_val_26509 === (15))){
var inst_26467 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26468 = figwheel.client.heads_up.append_message.call(null,inst_26467);
var state_26508__$1 = state_26508;
var statearr_26517_26554 = state_26508__$1;
(statearr_26517_26554[(2)] = inst_26468);

(statearr_26517_26554[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26509 === (21))){
var inst_26474 = (state_26508[(2)]);
var inst_26475 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26476 = figwheel.client.heads_up.display_warning.call(null,inst_26475);
var state_26508__$1 = (function (){var statearr_26518 = state_26508;
(statearr_26518[(7)] = inst_26474);

return statearr_26518;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26508__$1,(22),inst_26476);
} else {
if((state_val_26509 === (13))){
var inst_26502 = (state_26508[(2)]);
var state_26508__$1 = state_26508;
var statearr_26519_26555 = state_26508__$1;
(statearr_26519_26555[(2)] = inst_26502);

(statearr_26519_26555[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26509 === (22))){
var inst_26478 = (state_26508[(2)]);
var state_26508__$1 = state_26508;
var statearr_26520_26556 = state_26508__$1;
(statearr_26520_26556[(2)] = inst_26478);

(statearr_26520_26556[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26509 === (29))){
var inst_26494 = (state_26508[(2)]);
var state_26508__$1 = state_26508;
var statearr_26521_26557 = state_26508__$1;
(statearr_26521_26557[(2)] = inst_26494);

(statearr_26521_26557[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26509 === (6))){
var inst_26448 = figwheel.client.heads_up.clear.call(null);
var state_26508__$1 = state_26508;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26508__$1,(9),inst_26448);
} else {
if((state_val_26509 === (28))){
var state_26508__$1 = state_26508;
var statearr_26522_26558 = state_26508__$1;
(statearr_26522_26558[(2)] = null);

(statearr_26522_26558[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26509 === (25))){
var inst_26496 = (state_26508[(2)]);
var state_26508__$1 = state_26508;
var statearr_26523_26559 = state_26508__$1;
(statearr_26523_26559[(2)] = inst_26496);

(statearr_26523_26559[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26509 === (17))){
var inst_26500 = (state_26508[(2)]);
var state_26508__$1 = state_26508;
var statearr_26524_26560 = state_26508__$1;
(statearr_26524_26560[(2)] = inst_26500);

(statearr_26524_26560[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26509 === (3))){
var inst_26446 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_26508__$1 = state_26508;
if(inst_26446){
var statearr_26525_26561 = state_26508__$1;
(statearr_26525_26561[(1)] = (6));

} else {
var statearr_26526_26562 = state_26508__$1;
(statearr_26526_26562[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26509 === (12))){
var inst_26465 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_26508__$1 = state_26508;
if(inst_26465){
var statearr_26527_26563 = state_26508__$1;
(statearr_26527_26563[(1)] = (15));

} else {
var statearr_26528_26564 = state_26508__$1;
(statearr_26528_26564[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26509 === (2))){
var inst_26442 = figwheel.client.heads_up.flash_loaded.call(null);
var state_26508__$1 = state_26508;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26508__$1,(5),inst_26442);
} else {
if((state_val_26509 === (23))){
var inst_26482 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26483 = figwheel.client.heads_up.display_warning.call(null,inst_26482);
var state_26508__$1 = state_26508;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26508__$1,(26),inst_26483);
} else {
if((state_val_26509 === (19))){
var inst_26480 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_26508__$1 = state_26508;
if(inst_26480){
var statearr_26529_26565 = state_26508__$1;
(statearr_26529_26565[(1)] = (23));

} else {
var statearr_26530_26566 = state_26508__$1;
(statearr_26530_26566[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26509 === (11))){
var inst_26459 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26460 = figwheel.client.format_messages.call(null,inst_26459);
var inst_26461 = figwheel.client.heads_up.display_error.call(null,inst_26460);
var state_26508__$1 = state_26508;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26508__$1,(14),inst_26461);
} else {
if((state_val_26509 === (9))){
var inst_26450 = (state_26508[(2)]);
var inst_26451 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26452 = figwheel.client.format_messages.call(null,inst_26451);
var inst_26453 = figwheel.client.heads_up.display_error.call(null,inst_26452);
var state_26508__$1 = (function (){var statearr_26531 = state_26508;
(statearr_26531[(8)] = inst_26450);

return statearr_26531;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26508__$1,(10),inst_26453);
} else {
if((state_val_26509 === (5))){
var inst_26444 = (state_26508[(2)]);
var state_26508__$1 = state_26508;
var statearr_26532_26567 = state_26508__$1;
(statearr_26532_26567[(2)] = inst_26444);

(statearr_26532_26567[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26509 === (14))){
var inst_26463 = (state_26508[(2)]);
var state_26508__$1 = state_26508;
var statearr_26533_26568 = state_26508__$1;
(statearr_26533_26568[(2)] = inst_26463);

(statearr_26533_26568[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26509 === (26))){
var inst_26485 = (state_26508[(2)]);
var state_26508__$1 = state_26508;
var statearr_26534_26569 = state_26508__$1;
(statearr_26534_26569[(2)] = inst_26485);

(statearr_26534_26569[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26509 === (16))){
var inst_26470 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_26508__$1 = state_26508;
if(inst_26470){
var statearr_26535_26570 = state_26508__$1;
(statearr_26535_26570[(1)] = (18));

} else {
var statearr_26536_26571 = state_26508__$1;
(statearr_26536_26571[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26509 === (30))){
var inst_26491 = (state_26508[(2)]);
var state_26508__$1 = state_26508;
var statearr_26537_26572 = state_26508__$1;
(statearr_26537_26572[(2)] = inst_26491);

(statearr_26537_26572[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26509 === (10))){
var inst_26455 = (state_26508[(2)]);
var state_26508__$1 = state_26508;
var statearr_26538_26573 = state_26508__$1;
(statearr_26538_26573[(2)] = inst_26455);

(statearr_26538_26573[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26509 === (18))){
var inst_26472 = figwheel.client.heads_up.clear.call(null);
var state_26508__$1 = state_26508;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26508__$1,(21),inst_26472);
} else {
if((state_val_26509 === (8))){
var inst_26504 = (state_26508[(2)]);
var state_26508__$1 = state_26508;
var statearr_26539_26574 = state_26508__$1;
(statearr_26539_26574[(2)] = inst_26504);

(statearr_26539_26574[(1)] = (4));


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
});})(c__14073__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__14017__auto__,c__14073__auto__,msg_hist,msg_names,msg){
return (function() {
var state_machine__14018__auto__ = null;
var state_machine__14018__auto____0 = (function (){
var statearr_26543 = [null,null,null,null,null,null,null,null,null];
(statearr_26543[(0)] = state_machine__14018__auto__);

(statearr_26543[(1)] = (1));

return statearr_26543;
});
var state_machine__14018__auto____1 = (function (state_26508){
while(true){
var ret_value__14019__auto__ = (function (){try{while(true){
var result__14020__auto__ = switch__14017__auto__.call(null,state_26508);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14020__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14020__auto__;
}
break;
}
}catch (e26544){if((e26544 instanceof Object)){
var ex__14021__auto__ = e26544;
var statearr_26545_26575 = state_26508;
(statearr_26545_26575[(5)] = ex__14021__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26508);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26544;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14019__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26576 = state_26508;
state_26508 = G__26576;
continue;
} else {
return ret_value__14019__auto__;
}
break;
}
});
state_machine__14018__auto__ = function(state_26508){
switch(arguments.length){
case 0:
return state_machine__14018__auto____0.call(this);
case 1:
return state_machine__14018__auto____1.call(this,state_26508);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14018__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14018__auto____0;
state_machine__14018__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14018__auto____1;
return state_machine__14018__auto__;
})()
;})(switch__14017__auto__,c__14073__auto__,msg_hist,msg_names,msg))
})();
var state__14075__auto__ = (function (){var statearr_26546 = f__14074__auto__.call(null);
(statearr_26546[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14073__auto__);

return statearr_26546;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14075__auto__);
});})(c__14073__auto__,msg_hist,msg_names,msg))
);

return c__14073__auto__;
});
figwheel.client.heads_up_plugin = (function heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__14073__auto___26639 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14073__auto___26639,ch){
return (function (){
var f__14074__auto__ = (function (){var switch__14017__auto__ = ((function (c__14073__auto___26639,ch){
return (function (state_26622){
var state_val_26623 = (state_26622[(1)]);
if((state_val_26623 === (8))){
var inst_26614 = (state_26622[(2)]);
var state_26622__$1 = (function (){var statearr_26624 = state_26622;
(statearr_26624[(7)] = inst_26614);

return statearr_26624;
})();
var statearr_26625_26640 = state_26622__$1;
(statearr_26625_26640[(2)] = null);

(statearr_26625_26640[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26623 === (7))){
var inst_26618 = (state_26622[(2)]);
var state_26622__$1 = state_26622;
var statearr_26626_26641 = state_26622__$1;
(statearr_26626_26641[(2)] = inst_26618);

(statearr_26626_26641[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26623 === (6))){
var state_26622__$1 = state_26622;
var statearr_26627_26642 = state_26622__$1;
(statearr_26627_26642[(2)] = null);

(statearr_26627_26642[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26623 === (5))){
var inst_26610 = (state_26622[(8)]);
var inst_26612 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_26610);
var state_26622__$1 = state_26622;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26622__$1,(8),inst_26612);
} else {
if((state_val_26623 === (4))){
var inst_26610 = (state_26622[(8)]);
var inst_26610__$1 = (state_26622[(2)]);
var state_26622__$1 = (function (){var statearr_26628 = state_26622;
(statearr_26628[(8)] = inst_26610__$1);

return statearr_26628;
})();
if(cljs.core.truth_(inst_26610__$1)){
var statearr_26629_26643 = state_26622__$1;
(statearr_26629_26643[(1)] = (5));

} else {
var statearr_26630_26644 = state_26622__$1;
(statearr_26630_26644[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26623 === (3))){
var inst_26620 = (state_26622[(2)]);
var state_26622__$1 = state_26622;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26622__$1,inst_26620);
} else {
if((state_val_26623 === (2))){
var state_26622__$1 = state_26622;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26622__$1,(4),ch);
} else {
if((state_val_26623 === (1))){
var state_26622__$1 = state_26622;
var statearr_26631_26645 = state_26622__$1;
(statearr_26631_26645[(2)] = null);

(statearr_26631_26645[(1)] = (2));


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
});})(c__14073__auto___26639,ch))
;
return ((function (switch__14017__auto__,c__14073__auto___26639,ch){
return (function() {
var state_machine__14018__auto__ = null;
var state_machine__14018__auto____0 = (function (){
var statearr_26635 = [null,null,null,null,null,null,null,null,null];
(statearr_26635[(0)] = state_machine__14018__auto__);

(statearr_26635[(1)] = (1));

return statearr_26635;
});
var state_machine__14018__auto____1 = (function (state_26622){
while(true){
var ret_value__14019__auto__ = (function (){try{while(true){
var result__14020__auto__ = switch__14017__auto__.call(null,state_26622);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14020__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14020__auto__;
}
break;
}
}catch (e26636){if((e26636 instanceof Object)){
var ex__14021__auto__ = e26636;
var statearr_26637_26646 = state_26622;
(statearr_26637_26646[(5)] = ex__14021__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26622);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26636;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14019__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26647 = state_26622;
state_26622 = G__26647;
continue;
} else {
return ret_value__14019__auto__;
}
break;
}
});
state_machine__14018__auto__ = function(state_26622){
switch(arguments.length){
case 0:
return state_machine__14018__auto____0.call(this);
case 1:
return state_machine__14018__auto____1.call(this,state_26622);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14018__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14018__auto____0;
state_machine__14018__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14018__auto____1;
return state_machine__14018__auto__;
})()
;})(switch__14017__auto__,c__14073__auto___26639,ch))
})();
var state__14075__auto__ = (function (){var statearr_26638 = f__14074__auto__.call(null);
(statearr_26638[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14073__auto___26639);

return statearr_26638;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14075__auto__);
});})(c__14073__auto___26639,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__14073__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14073__auto__){
return (function (){
var f__14074__auto__ = (function (){var switch__14017__auto__ = ((function (c__14073__auto__){
return (function (state_26668){
var state_val_26669 = (state_26668[(1)]);
if((state_val_26669 === (2))){
var inst_26665 = (state_26668[(2)]);
var inst_26666 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_26668__$1 = (function (){var statearr_26670 = state_26668;
(statearr_26670[(7)] = inst_26665);

return statearr_26670;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26668__$1,inst_26666);
} else {
if((state_val_26669 === (1))){
var inst_26663 = cljs.core.async.timeout.call(null,(3000));
var state_26668__$1 = state_26668;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26668__$1,(2),inst_26663);
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
var statearr_26674 = [null,null,null,null,null,null,null,null];
(statearr_26674[(0)] = state_machine__14018__auto__);

(statearr_26674[(1)] = (1));

return statearr_26674;
});
var state_machine__14018__auto____1 = (function (state_26668){
while(true){
var ret_value__14019__auto__ = (function (){try{while(true){
var result__14020__auto__ = switch__14017__auto__.call(null,state_26668);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14020__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14020__auto__;
}
break;
}
}catch (e26675){if((e26675 instanceof Object)){
var ex__14021__auto__ = e26675;
var statearr_26676_26678 = state_26668;
(statearr_26676_26678[(5)] = ex__14021__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26668);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26675;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14019__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26679 = state_26668;
state_26668 = G__26679;
continue;
} else {
return ret_value__14019__auto__;
}
break;
}
});
state_machine__14018__auto__ = function(state_26668){
switch(arguments.length){
case 0:
return state_machine__14018__auto____0.call(this);
case 1:
return state_machine__14018__auto____1.call(this,state_26668);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14018__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14018__auto____0;
state_machine__14018__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14018__auto____1;
return state_machine__14018__auto__;
})()
;})(switch__14017__auto__,c__14073__auto__))
})();
var state__14075__auto__ = (function (){var statearr_26677 = f__14074__auto__.call(null);
(statearr_26677[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14073__auto__);

return statearr_26677;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14075__auto__);
});})(c__14073__auto__))
);

return c__14073__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = (function default_on_jsload(url){
if(cljs.core.truth_((function (){var and__11588__auto__ = figwheel.client.utils.html_env_QMARK_.call(null);
if(cljs.core.truth_(and__11588__auto__)){
return ("CustomEvent" in window);
} else {
return and__11588__auto__;
}
})())){
return document.body.dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj26683 = {"detail":url};
return obj26683;
})())));
} else {
return null;
}
});
figwheel.client.default_on_compile_fail = (function default_on_compile_fail(p__26684){
var map__26690 = p__26684;
var map__26690__$1 = ((cljs.core.seq_QMARK_.call(null,map__26690))?cljs.core.apply.call(null,cljs.core.hash_map,map__26690):map__26690);
var ed = map__26690__$1;
var exception_data = cljs.core.get.call(null,map__26690__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var formatted_exception = cljs.core.get.call(null,map__26690__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__26691_26695 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__26692_26696 = null;
var count__26693_26697 = (0);
var i__26694_26698 = (0);
while(true){
if((i__26694_26698 < count__26693_26697)){
var msg_26699 = cljs.core._nth.call(null,chunk__26692_26696,i__26694_26698);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_26699);

var G__26700 = seq__26691_26695;
var G__26701 = chunk__26692_26696;
var G__26702 = count__26693_26697;
var G__26703 = (i__26694_26698 + (1));
seq__26691_26695 = G__26700;
chunk__26692_26696 = G__26701;
count__26693_26697 = G__26702;
i__26694_26698 = G__26703;
continue;
} else {
var temp__4126__auto___26704 = cljs.core.seq.call(null,seq__26691_26695);
if(temp__4126__auto___26704){
var seq__26691_26705__$1 = temp__4126__auto___26704;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26691_26705__$1)){
var c__12387__auto___26706 = cljs.core.chunk_first.call(null,seq__26691_26705__$1);
var G__26707 = cljs.core.chunk_rest.call(null,seq__26691_26705__$1);
var G__26708 = c__12387__auto___26706;
var G__26709 = cljs.core.count.call(null,c__12387__auto___26706);
var G__26710 = (0);
seq__26691_26695 = G__26707;
chunk__26692_26696 = G__26708;
count__26693_26697 = G__26709;
i__26694_26698 = G__26710;
continue;
} else {
var msg_26711 = cljs.core.first.call(null,seq__26691_26705__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_26711);

var G__26712 = cljs.core.next.call(null,seq__26691_26705__$1);
var G__26713 = null;
var G__26714 = (0);
var G__26715 = (0);
seq__26691_26695 = G__26712;
chunk__26692_26696 = G__26713;
count__26693_26697 = G__26714;
i__26694_26698 = G__26715;
continue;
}
} else {
}
}
break;
}

return ed;
});
figwheel.client.default_on_compile_warning = (function default_on_compile_warning(p__26716){
var map__26718 = p__26716;
var map__26718__$1 = ((cljs.core.seq_QMARK_.call(null,map__26718))?cljs.core.apply.call(null,cljs.core.hash_map,map__26718):map__26718);
var w = map__26718__$1;
var message = cljs.core.get.call(null,map__26718__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704),new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[true,figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,(100),false,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,goog.inHtmlDocument_()))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
if(cljs.core.truth_((function (){var and__11588__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__11588__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__11588__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$1,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$1;
}
});
figwheel.client.add_plugins = (function add_plugins(plugins,system_options){
var seq__26725 = cljs.core.seq.call(null,plugins);
var chunk__26726 = null;
var count__26727 = (0);
var i__26728 = (0);
while(true){
if((i__26728 < count__26727)){
var vec__26729 = cljs.core._nth.call(null,chunk__26726,i__26728);
var k = cljs.core.nth.call(null,vec__26729,(0),null);
var plugin = cljs.core.nth.call(null,vec__26729,(1),null);
if(cljs.core.truth_(plugin)){
var pl_26731 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__26725,chunk__26726,count__26727,i__26728,pl_26731,vec__26729,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_26731.call(null,msg_hist);
});})(seq__26725,chunk__26726,count__26727,i__26728,pl_26731,vec__26729,k,plugin))
);
} else {
}

var G__26732 = seq__26725;
var G__26733 = chunk__26726;
var G__26734 = count__26727;
var G__26735 = (i__26728 + (1));
seq__26725 = G__26732;
chunk__26726 = G__26733;
count__26727 = G__26734;
i__26728 = G__26735;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__26725);
if(temp__4126__auto__){
var seq__26725__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26725__$1)){
var c__12387__auto__ = cljs.core.chunk_first.call(null,seq__26725__$1);
var G__26736 = cljs.core.chunk_rest.call(null,seq__26725__$1);
var G__26737 = c__12387__auto__;
var G__26738 = cljs.core.count.call(null,c__12387__auto__);
var G__26739 = (0);
seq__26725 = G__26736;
chunk__26726 = G__26737;
count__26727 = G__26738;
i__26728 = G__26739;
continue;
} else {
var vec__26730 = cljs.core.first.call(null,seq__26725__$1);
var k = cljs.core.nth.call(null,vec__26730,(0),null);
var plugin = cljs.core.nth.call(null,vec__26730,(1),null);
if(cljs.core.truth_(plugin)){
var pl_26740 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__26725,chunk__26726,count__26727,i__26728,pl_26740,vec__26730,k,plugin,seq__26725__$1,temp__4126__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_26740.call(null,msg_hist);
});})(seq__26725,chunk__26726,count__26727,i__26728,pl_26740,vec__26730,k,plugin,seq__26725__$1,temp__4126__auto__))
);
} else {
}

var G__26741 = cljs.core.next.call(null,seq__26725__$1);
var G__26742 = null;
var G__26743 = (0);
var G__26744 = (0);
seq__26725 = G__26741;
chunk__26726 = G__26742;
count__26727 = G__26743;
i__26728 = G__26744;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function() {
var start = null;
var start__0 = (function (){
return start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});
var start__1 = (function (opts){
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
});
start = function(opts){
switch(arguments.length){
case 0:
return start__0.call(this);
case 1:
return start__1.call(this,opts);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
start.cljs$core$IFn$_invoke$arity$0 = start__0;
start.cljs$core$IFn$_invoke$arity$1 = start__1;
return start;
})()
;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
/**
* @param {...*} var_args
*/
figwheel.client.watch_and_reload = (function() { 
var watch_and_reload__delegate = function (p__26745){
var map__26747 = p__26745;
var map__26747__$1 = ((cljs.core.seq_QMARK_.call(null,map__26747))?cljs.core.apply.call(null,cljs.core.hash_map,map__26747):map__26747);
var opts = map__26747__$1;
return figwheel.client.start.call(null,opts);
};
var watch_and_reload = function (var_args){
var p__26745 = null;
if (arguments.length > 0) {
var G__26748__i = 0, G__26748__a = new Array(arguments.length -  0);
while (G__26748__i < G__26748__a.length) {G__26748__a[G__26748__i] = arguments[G__26748__i + 0]; ++G__26748__i;}
  p__26745 = new cljs.core.IndexedSeq(G__26748__a,0);
} 
return watch_and_reload__delegate.call(this,p__26745);};
watch_and_reload.cljs$lang$maxFixedArity = 0;
watch_and_reload.cljs$lang$applyTo = (function (arglist__26749){
var p__26745 = cljs.core.seq(arglist__26749);
return watch_and_reload__delegate(p__26745);
});
watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = watch_and_reload__delegate;
return watch_and_reload;
})()
;

//# sourceMappingURL=client.js.map