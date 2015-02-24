// Compiled by ClojureScript 0.0-2850 {}
goog.provide('hanoi.core');
goog.require('cljs.core');
goog.require('cljs.core.match');
cljs.core.enable_console_print_BANG_.call(null);
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
var ocr_31221 = cljs.core.last.call(null,from_tower);
var ocr_31222 = cljs.core.last.call(null,to_tower);
try{if((ocr_31221 === null)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"err","err",-2089457205),board], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e31226){if((e31226 instanceof Error)){
var e__19195__auto__ = e31226;
if((e__19195__auto__ === cljs.core.match.backtrack)){
try{if((ocr_31222 === null)){
var from_disc = ocr_31221;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),make_new_board.call(null,board,from_disc)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e31227){if((e31227 instanceof Error)){
var e__19195__auto____$1 = e31227;
if((e__19195__auto____$1 === cljs.core.match.backtrack)){
var to_disc = ocr_31222;
var from_disc = ocr_31221;
if((from_disc < to_disc)){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),make_new_board,board,from_disc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"err","err",-2089457205),board], null);
}
} else {
throw e__19195__auto____$1;
}
} else {
throw e31227;

}
}} else {
throw e__19195__auto__;
}
} else {
throw e31226;

}
}});

//# sourceMappingURL=core.js.map