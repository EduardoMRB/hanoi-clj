// Compiled by ClojureScript 0.0-2850 {}
goog.provide('hanoi.core');
goog.require('cljs.core');
goog.require('domina.css');
goog.require('domina');
goog.require('hiccups.runtime');
goog.require('cljs.core.async');
goog.require('domina.events');
goog.require('cljs.core.match');
cljs.core.enable_console_print_BANG_.call(null);
hanoi.core.container = domina.by_id.call(null,"container");
hanoi.core.make_move = (function make_move(board,from,to){
var from_tower = cljs.core.get.call(null,board,from);
var to_tower = cljs.core.get.call(null,board,to);
var make_new_board = ((function (from_tower,to_tower){
return (function (board__$1,from_disc){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,board__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [from], null),((function (from_tower,to_tower){
return (function (v){
return cljs.core.butlast.call(null,v);
});})(from_tower,to_tower))
),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [to], null),((function (from_tower,to_tower){
return (function (v){
return cljs.core.conj.call(null,v,from_disc);
});})(from_tower,to_tower))
);
});})(from_tower,to_tower))
;
var ocr_33932 = cljs.core.last.call(null,from_tower);
var ocr_33933 = cljs.core.last.call(null,to_tower);
try{if((ocr_33932 === null)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"err","err",-2089457205),board], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e33937){if((e33937 instanceof Error)){
var e__19434__auto__ = e33937;
if((e__19434__auto__ === cljs.core.match.backtrack)){
try{if((ocr_33933 === null)){
var from_disc = ocr_33932;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),make_new_board.call(null,board,from_disc)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e33938){if((e33938 instanceof Error)){
var e__19434__auto____$1 = e33938;
if((e__19434__auto____$1 === cljs.core.match.backtrack)){
var to_disc = ocr_33933;
var from_disc = ocr_33932;
if((from_disc < to_disc)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),make_new_board.call(null,board,from_disc)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"err","err",-2089457205),board], null);
}
} else {
throw e__19434__auto____$1;
}
} else {
throw e33938;

}
}} else {
throw e__19434__auto__;
}
} else {
throw e33937;

}
}});
hanoi.core.make_new_board = (function make_new_board(){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"t1","t1",24972444),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(2),(1)], null),new cljs.core.Keyword(null,"t2","t2",-748855222),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"t3","t3",1521917656),cljs.core.PersistentVector.EMPTY], null);
});
hanoi.core.render_discs = (function render_discs(tower){
if(cljs.core.coll_QMARK_.call(null,tower)){
return cljs.core.sort.call(null,cljs.core._GT_,cljs.core.map.call(null,(function (disc){
var pred__33942 = cljs.core._EQ_;
var expr__33943 = disc;
if(cljs.core.truth_(pred__33942.call(null,(1),expr__33943))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.small-disc","li.small-disc",-2129933974),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"draggable","draggable",1676206163),"true"], null)], null);
} else {
if(cljs.core.truth_(pred__33942.call(null,(2),expr__33943))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.medium-disc","li.medium-disc",-1679190099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"draggable","draggable",1676206163),"true"], null)], null);
} else {
if(cljs.core.truth_(pred__33942.call(null,(3),expr__33943))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.big-disc","li.big-disc",1473506349),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"draggable","draggable",1676206163),"true"], null)], null);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__33943)].join('')));
}
}
}
}),tower));
} else {
return null;
}
});
hanoi.core.render_board = (function render_board(board,err){
return [cljs.core.str("<div"),cljs.core.str(" id=\"board\""),cljs.core.str(">"),cljs.core.str((function (){var attrs33949 = hanoi.core.render_discs.call(null,new cljs.core.Keyword(null,"t1","t1",24972444).cljs$core$IFn$_invoke$arity$1(board));
if(cljs.core.map_QMARK_.call(null,attrs33949)){
return [cljs.core.str("<ul"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"tower1",new cljs.core.Keyword(null,"class","class",-2030961996),null], null),attrs33949))),cljs.core.str(">"),cljs.core.str("</ul>")].join('');
} else {
return [cljs.core.str("<ul id=\"tower1\">"),cljs.core.str(hiccups.runtime.render_html.call(null,attrs33949)),cljs.core.str("</ul>")].join('');
}
})()),cljs.core.str((function (){var attrs33950 = hanoi.core.render_discs.call(null,new cljs.core.Keyword(null,"t2","t2",-748855222).cljs$core$IFn$_invoke$arity$1(board));
if(cljs.core.map_QMARK_.call(null,attrs33950)){
return [cljs.core.str("<ul"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"tower2",new cljs.core.Keyword(null,"class","class",-2030961996),null], null),attrs33950))),cljs.core.str(">"),cljs.core.str("</ul>")].join('');
} else {
return [cljs.core.str("<ul id=\"tower2\">"),cljs.core.str(hiccups.runtime.render_html.call(null,attrs33950)),cljs.core.str("</ul>")].join('');
}
})()),cljs.core.str((function (){var attrs33951 = hanoi.core.render_discs.call(null,new cljs.core.Keyword(null,"t3","t3",1521917656).cljs$core$IFn$_invoke$arity$1(board));
if(cljs.core.map_QMARK_.call(null,attrs33951)){
return [cljs.core.str("<ul"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"tower3",new cljs.core.Keyword(null,"class","class",-2030961996),null], null),attrs33951))),cljs.core.str(">"),cljs.core.str("</ul>")].join('');
} else {
return [cljs.core.str("<ul id=\"tower3\">"),cljs.core.str(hiccups.runtime.render_html.call(null,attrs33951)),cljs.core.str("</ul>")].join('');
}
})()),cljs.core.str((function (){var attrs33952 = err;
if(cljs.core.map_QMARK_.call(null,attrs33952)){
return [cljs.core.str("<p"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"error",new cljs.core.Keyword(null,"class","class",-2030961996),null], null),attrs33952))),cljs.core.str(" />")].join('');
} else {
return [cljs.core.str("<p id=\"error\">"),cljs.core.str(hiccups.runtime.render_html.call(null,attrs33952)),cljs.core.str("</p>")].join('');
}
})()),cljs.core.str("</div>")].join('');
});
hanoi.core.get_events = (function get_events(element,ev_type){
var out = cljs.core.async.chan.call(null);
domina.events.listen_BANG_.call(null,element,ev_type,((function (out){
return (function (e){
return cljs.core.async.put_BANG_.call(null,out,e);
});})(out))
);

return out;
});
hanoi.core.validate_move = (function validate_move(from,to){
return cljs.core.every_QMARK_.call(null,(function (n){
return cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [(1),null,(3),null,(2),null], null), null),n);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [from,to], null));
});
hanoi.core.draw_board = (function draw_board(rendered_board){
return hanoi.core.container.innerHTML = rendered_board;
});
hanoi.core.translate_move = (function translate_move(move){
var pred__33956 = cljs.core._EQ_;
var expr__33957 = move;
if(cljs.core.truth_(pred__33956.call(null,(1),expr__33957))){
return new cljs.core.Keyword(null,"t1","t1",24972444);
} else {
if(cljs.core.truth_(pred__33956.call(null,(2),expr__33957))){
return new cljs.core.Keyword(null,"t2","t2",-748855222);
} else {
if(cljs.core.truth_(pred__33956.call(null,(3),expr__33957))){
return new cljs.core.Keyword(null,"t3","t3",1521917656);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__33957)].join('')));
}
}
}
});
hanoi.core.board = cljs.core.atom.call(null,hanoi.core.make_new_board.call(null));
hanoi.core.draw_board_with_errors_BANG_ = (function draw_board_with_errors_BANG_(board,error){
var new_board_33959 = hanoi.core.render_board.call(null,board,error);
hanoi.core.draw_board.call(null,new_board_33959);

return new cljs.core.Keyword(null,"ok","ok",967785236);
});
hanoi.core.draw_board_without_errors_BANG_ = (function draw_board_without_errors_BANG_(new_board){
hanoi.core.draw_board.call(null,hanoi.core.render_board.call(null,new_board,""));

cljs.core.reset_BANG_.call(null,hanoi.core.board,new_board);

return new cljs.core.Keyword(null,"ok","ok",967785236);
});
hanoi.core.game = (function game(){
var c = hanoi.core.get_events.call(null,domina.by_id.call(null,"move"),new cljs.core.Keyword(null,"click","click",1912301393));
var c__14074__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14074__auto__,c){
return (function (){
var f__14075__auto__ = (function (){var switch__14018__auto__ = ((function (c__14074__auto__,c){
return (function (state_34259){
var state_val_34260 = (state_34259[(1)]);
if((state_val_34260 === (7))){
var inst_34152 = (state_34259[(7)]);
var inst_34155 = (state_34259[(8)]);
var inst_34148 = (state_34259[(2)]);
var inst_34149 = cljs.core.print.call(null,inst_34148);
var inst_34150 = domina.by_id.call(null,"from");
var inst_34151 = domina.value.call(null,inst_34150);
var inst_34152__$1 = window.parseInt(inst_34151);
var inst_34153 = domina.by_id.call(null,"to");
var inst_34154 = domina.value.call(null,inst_34153);
var inst_34155__$1 = window.parseInt(inst_34154);
var inst_34156 = hanoi.core.validate_move.call(null,inst_34152__$1,inst_34155__$1);
var inst_34157 = !(inst_34156);
var state_34259__$1 = (function (){var statearr_34261 = state_34259;
(statearr_34261[(9)] = inst_34149);

(statearr_34261[(7)] = inst_34152__$1);

(statearr_34261[(8)] = inst_34155__$1);

return statearr_34261;
})();
if(inst_34157){
var statearr_34262_34330 = state_34259__$1;
(statearr_34262_34330[(1)] = (8));

} else {
var statearr_34263_34331 = state_34259__$1;
(statearr_34263_34331[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34260 === (20))){
var inst_34239 = (state_34259[(2)]);
var state_34259__$1 = state_34259;
var statearr_34264_34332 = state_34259__$1;
(statearr_34264_34332[(2)] = inst_34239);

(statearr_34264_34332[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34260 === (27))){
var inst_34195 = (function(){throw cljs.core.match.backtrack})();
var state_34259__$1 = state_34259;
var statearr_34265_34333 = state_34259__$1;
(statearr_34265_34333[(2)] = inst_34195);

(statearr_34265_34333[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34260 === (1))){
var state_34259__$1 = state_34259;
var statearr_34266_34334 = state_34259__$1;
(statearr_34266_34334[(2)] = null);

(statearr_34266_34334[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34260 === (24))){
var inst_34221 = (state_34259[(2)]);
var state_34259__$1 = state_34259;
var statearr_34267_34335 = state_34259__$1;
(statearr_34267_34335[(2)] = inst_34221);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34259__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34260 === (39))){
var state_34259__$1 = state_34259;
var statearr_34268_34336 = state_34259__$1;
(statearr_34268_34336[(1)] = (41));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34260 === (46))){
var inst_34245 = (state_34259[(2)]);
var state_34259__$1 = state_34259;
var statearr_34270_34337 = state_34259__$1;
(statearr_34270_34337[(2)] = inst_34245);

(statearr_34270_34337[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34260 === (4))){
var state_34259__$1 = state_34259;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34259__$1,(7),c);
} else {
if((state_val_34260 === (15))){
var inst_34180 = (state_34259[(2)]);
var state_34259__$1 = state_34259;
var statearr_34271_34338 = state_34259__$1;
(statearr_34271_34338[(2)] = inst_34180);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34259__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34260 === (21))){
var inst_34189 = (state_34259[(10)]);
var inst_34189__$1 = (state_34259[(2)]);
var inst_34190 = (inst_34189__$1 === cljs.core.match.backtrack);
var state_34259__$1 = (function (){var statearr_34272 = state_34259;
(statearr_34272[(10)] = inst_34189__$1);

return statearr_34272;
})();
if(cljs.core.truth_(inst_34190)){
var statearr_34273_34339 = state_34259__$1;
(statearr_34273_34339[(1)] = (22));

} else {
var statearr_34274_34340 = state_34259__$1;
(statearr_34274_34340[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34260 === (31))){
var inst_34206 = cljs.core.deref.call(null,hanoi.core.board);
var inst_34207 = hanoi.core.draw_board_with_errors_BANG_.call(null,inst_34206,"Burro, n\u00E3o fa\u00E7a isso");
var state_34259__$1 = state_34259;
var statearr_34275_34341 = state_34259__$1;
(statearr_34275_34341[(2)] = inst_34207);

(statearr_34275_34341[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34260 === (32))){
var state_34259__$1 = state_34259;
var statearr_34276_34342 = state_34259__$1;
(statearr_34276_34342[(1)] = (34));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34260 === (40))){
var inst_34237 = (state_34259[(2)]);
var state_34259__$1 = state_34259;
var statearr_34278_34343 = state_34259__$1;
(statearr_34278_34343[(2)] = inst_34237);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34259__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34260 === (33))){
var inst_34215 = (state_34259[(2)]);
var state_34259__$1 = state_34259;
var statearr_34279_34344 = state_34259__$1;
(statearr_34279_34344[(2)] = inst_34215);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34259__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34260 === (13))){
var inst_34170 = (state_34259[(11)]);
var inst_34174 = [cljs.core.str("No matching clause: "),cljs.core.str(inst_34170)].join('');
var inst_34175 = (new Error(inst_34174));
var inst_34176 = (function(){throw inst_34175})();
var state_34259__$1 = state_34259;
var statearr_34280_34345 = state_34259__$1;
(statearr_34280_34345[(2)] = inst_34176);

(statearr_34280_34345[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34260 === (22))){
var state_34259__$1 = state_34259;
var statearr_34281_34346 = state_34259__$1;
(statearr_34281_34346[(2)] = null);

(statearr_34281_34346[(1)] = (30));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34260 === (36))){
var inst_34213 = (state_34259[(2)]);
var state_34259__$1 = state_34259;
var statearr_34282_34347 = state_34259__$1;
(statearr_34282_34347[(2)] = inst_34213);

(statearr_34282_34347[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34260 === (41))){
var inst_34232 = (function(){throw cljs.core.match.backtrack})();
var state_34259__$1 = state_34259;
var statearr_34283_34348 = state_34259__$1;
(statearr_34283_34348[(2)] = inst_34232);

(statearr_34283_34348[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34260 === (43))){
var inst_34235 = (state_34259[(2)]);
var state_34259__$1 = state_34259;
var statearr_34284_34349 = state_34259__$1;
(statearr_34284_34349[(2)] = inst_34235);

(statearr_34284_34349[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34260 === (29))){
var inst_34199 = (state_34259[(2)]);
var state_34259__$1 = state_34259;
var statearr_34285_34350 = state_34259__$1;
(statearr_34285_34350[(2)] = inst_34199);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34259__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34260 === (44))){
var inst_34242 = (function(){throw cljs.core.match.backtrack})();
var state_34259__$1 = state_34259;
var statearr_34286_34351 = state_34259__$1;
(statearr_34286_34351[(2)] = inst_34242);

(statearr_34286_34351[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34260 === (6))){
var inst_34255 = (state_34259[(2)]);
var state_34259__$1 = state_34259;
var statearr_34287_34352 = state_34259__$1;
(statearr_34287_34352[(2)] = inst_34255);

(statearr_34287_34352[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34260 === (28))){
var inst_34192 = (state_34259[(12)]);
var inst_34197 = (function(){throw inst_34192})();
var state_34259__$1 = state_34259;
var statearr_34288_34353 = state_34259__$1;
(statearr_34288_34353[(2)] = inst_34197);

(statearr_34288_34353[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34260 === (25))){
var inst_34217 = (state_34259[(2)]);
var state_34259__$1 = state_34259;
var statearr_34289_34354 = state_34259__$1;
(statearr_34289_34354[(2)] = inst_34217);

(statearr_34289_34354[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34260 === (34))){
var inst_34210 = (function(){throw cljs.core.match.backtrack})();
var state_34259__$1 = state_34259;
var statearr_34290_34355 = state_34259__$1;
(statearr_34290_34355[(2)] = inst_34210);

(statearr_34290_34355[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34260 === (17))){
var state_34259__$1 = state_34259;
var statearr_34291_34356 = state_34259__$1;
(statearr_34291_34356[(2)] = null);

(statearr_34291_34356[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34260 === (3))){
var inst_34257 = (state_34259[(2)]);
var state_34259__$1 = (function (){var statearr_34292 = state_34259;
(statearr_34292[(13)] = inst_34257);

return statearr_34292;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34259__$1,c);
} else {
if((state_val_34260 === (12))){
var inst_34171 = (state_34259[(14)]);
var inst_34171__$1 = (state_34259[(2)]);
var inst_34172 = (inst_34171__$1 === cljs.core.match.backtrack);
var state_34259__$1 = (function (){var statearr_34293 = state_34259;
(statearr_34293[(14)] = inst_34171__$1);

return statearr_34293;
})();
if(cljs.core.truth_(inst_34172)){
var statearr_34294_34357 = state_34259__$1;
(statearr_34294_34357[(1)] = (13));

} else {
var statearr_34295_34358 = state_34259__$1;
(statearr_34295_34358[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34260 === (2))){
var state_34259__$1 = state_34259;
var statearr_34296_34359 = state_34259__$1;
(statearr_34296_34359[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34260 === (23))){
var inst_34189 = (state_34259[(10)]);
var inst_34219 = (function(){throw inst_34189})();
var state_34259__$1 = state_34259;
var statearr_34298_34360 = state_34259__$1;
(statearr_34298_34360[(2)] = inst_34219);

(statearr_34298_34360[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34260 === (35))){
var state_34259__$1 = state_34259;
var statearr_34299_34361 = state_34259__$1;
(statearr_34299_34361[(2)] = null);

(statearr_34299_34361[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34260 === (19))){
var inst_34247 = (state_34259[(2)]);
var state_34259__$1 = state_34259;
var statearr_34300_34362 = state_34259__$1;
(statearr_34300_34362[(2)] = inst_34247);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34259__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34260 === (11))){
var inst_34249 = (state_34259[(2)]);
var state_34259__$1 = state_34259;
var statearr_34301_34363 = state_34259__$1;
(statearr_34301_34363[(2)] = inst_34249);

(statearr_34301_34363[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34260 === (9))){
var inst_34152 = (state_34259[(7)]);
var inst_34155 = (state_34259[(8)]);
var inst_34167 = cljs.core.deref.call(null,hanoi.core.board);
var inst_34168 = hanoi.core.translate_move.call(null,inst_34152);
var inst_34169 = hanoi.core.translate_move.call(null,inst_34155);
var inst_34170 = hanoi.core.make_move.call(null,inst_34167,inst_34168,inst_34169);
var state_34259__$1 = (function (){var statearr_34302 = state_34259;
(statearr_34302[(11)] = inst_34170);

return statearr_34302;
})();
var statearr_34303_34364 = state_34259__$1;
(statearr_34303_34364[(2)] = null);

(statearr_34303_34364[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34260 === (5))){
var state_34259__$1 = state_34259;
var statearr_34304_34365 = state_34259__$1;
(statearr_34304_34365[(2)] = null);

(statearr_34304_34365[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34260 === (14))){
var inst_34171 = (state_34259[(14)]);
var inst_34178 = (function(){throw inst_34171})();
var state_34259__$1 = state_34259;
var statearr_34305_34366 = state_34259__$1;
(statearr_34305_34366[(2)] = inst_34178);

(statearr_34305_34366[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34260 === (45))){
var state_34259__$1 = state_34259;
var statearr_34306_34367 = state_34259__$1;
(statearr_34306_34367[(2)] = null);

(statearr_34306_34367[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34260 === (26))){
var inst_34192 = (state_34259[(12)]);
var inst_34192__$1 = (state_34259[(2)]);
var inst_34193 = (inst_34192__$1 === cljs.core.match.backtrack);
var state_34259__$1 = (function (){var statearr_34307 = state_34259;
(statearr_34307[(12)] = inst_34192__$1);

return statearr_34307;
})();
if(cljs.core.truth_(inst_34193)){
var statearr_34308_34368 = state_34259__$1;
(statearr_34308_34368[(1)] = (27));

} else {
var statearr_34309_34369 = state_34259__$1;
(statearr_34309_34369[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34260 === (16))){
var inst_34170 = (state_34259[(11)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_34259,(12),Error,null,(11));
var inst_34184 = cljs.core.vector_QMARK_.call(null,inst_34170);
var inst_34185 = cljs.core.count.call(null,inst_34170);
var inst_34186 = (inst_34185 === 2);
var inst_34187 = (inst_34184) && (inst_34186);
var state_34259__$1 = state_34259;
if(cljs.core.truth_(inst_34187)){
var statearr_34310_34370 = state_34259__$1;
(statearr_34310_34370[(1)] = (17));

} else {
var statearr_34311_34371 = state_34259__$1;
(statearr_34311_34371[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34260 === (38))){
var inst_34170 = (state_34259[(11)]);
var inst_34228 = cljs.core.nth.call(null,inst_34170,(1));
var inst_34229 = hanoi.core.draw_board_without_errors_BANG_.call(null,inst_34228);
var state_34259__$1 = state_34259;
var statearr_34312_34372 = state_34259__$1;
(statearr_34312_34372[(2)] = inst_34229);

(statearr_34312_34372[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34260 === (30))){
var inst_34170 = (state_34259[(11)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_34259,(26),Error,null,(25));
var inst_34203 = cljs.core.nth.call(null,inst_34170,(0));
var inst_34204 = cljs.core.keyword_identical_QMARK_.call(null,inst_34203,new cljs.core.Keyword(null,"err","err",-2089457205));
var state_34259__$1 = state_34259;
if(inst_34204){
var statearr_34313_34373 = state_34259__$1;
(statearr_34313_34373[(1)] = (31));

} else {
var statearr_34314_34374 = state_34259__$1;
(statearr_34314_34374[(1)] = (32));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34260 === (10))){
var inst_34251 = (state_34259[(2)]);
var state_34259__$1 = (function (){var statearr_34315 = state_34259;
(statearr_34315[(15)] = inst_34251);

return statearr_34315;
})();
var statearr_34316_34375 = state_34259__$1;
(statearr_34316_34375[(2)] = null);

(statearr_34316_34375[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34260 === (18))){
var state_34259__$1 = state_34259;
var statearr_34317_34376 = state_34259__$1;
(statearr_34317_34376[(1)] = (44));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34260 === (42))){
var state_34259__$1 = state_34259;
var statearr_34319_34377 = state_34259__$1;
(statearr_34319_34377[(2)] = null);

(statearr_34319_34377[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34260 === (37))){
var inst_34170 = (state_34259[(11)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_34259,(21),Error,null,(20));
var inst_34225 = cljs.core.nth.call(null,inst_34170,(0));
var inst_34226 = cljs.core.keyword_identical_QMARK_.call(null,inst_34225,new cljs.core.Keyword(null,"ok","ok",967785236));
var state_34259__$1 = state_34259;
if(inst_34226){
var statearr_34320_34378 = state_34259__$1;
(statearr_34320_34378[(1)] = (38));

} else {
var statearr_34321_34379 = state_34259__$1;
(statearr_34321_34379[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34260 === (8))){
var inst_34159 = cljs.core.deref.call(null,hanoi.core.board);
var inst_34160 = hanoi.core.draw_board_with_errors_BANG_.call(null,inst_34159,"Movimento inv\u00E1lido, burro!");
var state_34259__$1 = state_34259;
var statearr_34322_34380 = state_34259__$1;
(statearr_34322_34380[(2)] = inst_34160);

(statearr_34322_34380[(1)] = (10));


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
}
}
}
}
}
}
}
}
}
});})(c__14074__auto__,c))
;
return ((function (switch__14018__auto__,c__14074__auto__,c){
return (function() {
var state_machine__14019__auto__ = null;
var state_machine__14019__auto____0 = (function (){
var statearr_34326 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34326[(0)] = state_machine__14019__auto__);

(statearr_34326[(1)] = (1));

return statearr_34326;
});
var state_machine__14019__auto____1 = (function (state_34259){
while(true){
var ret_value__14020__auto__ = (function (){try{while(true){
var result__14021__auto__ = switch__14018__auto__.call(null,state_34259);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14021__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14021__auto__;
}
break;
}
}catch (e34327){if((e34327 instanceof Object)){
var ex__14022__auto__ = e34327;
var statearr_34328_34381 = state_34259;
(statearr_34328_34381[(5)] = ex__14022__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34259);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34327;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14020__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34382 = state_34259;
state_34259 = G__34382;
continue;
} else {
return ret_value__14020__auto__;
}
break;
}
});
state_machine__14019__auto__ = function(state_34259){
switch(arguments.length){
case 0:
return state_machine__14019__auto____0.call(this);
case 1:
return state_machine__14019__auto____1.call(this,state_34259);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14019__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14019__auto____0;
state_machine__14019__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14019__auto____1;
return state_machine__14019__auto__;
})()
;})(switch__14018__auto__,c__14074__auto__,c))
})();
var state__14076__auto__ = (function (){var statearr_34329 = f__14075__auto__.call(null);
(statearr_34329[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14074__auto__);

return statearr_34329;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14076__auto__);
});})(c__14074__auto__,c))
);

return c__14074__auto__;
});
hanoi.core.init = (function init(){
hanoi.core.draw_board.call(null,hanoi.core.render_board.call(null,hanoi.core.make_new_board.call(null),""));

return hanoi.core.game.call(null);
});
goog.exportSymbol('hanoi.core.init', hanoi.core.init);

//# sourceMappingURL=core.js.map