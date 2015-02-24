// Compiled by ClojureScript 0.0-2850 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4126__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4126__auto__)){
var ns = temp__4126__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__27137_27141 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__27138_27142 = null;
var count__27139_27143 = (0);
var i__27140_27144 = (0);
while(true){
if((i__27140_27144 < count__27139_27143)){
var f_27145 = cljs.core._nth.call(null,chunk__27138_27142,i__27140_27144);
cljs.core.print.call(null,"  ");

cljs.core.prn.call(null,f_27145);

var G__27146 = seq__27137_27141;
var G__27147 = chunk__27138_27142;
var G__27148 = count__27139_27143;
var G__27149 = (i__27140_27144 + (1));
seq__27137_27141 = G__27146;
chunk__27138_27142 = G__27147;
count__27139_27143 = G__27148;
i__27140_27144 = G__27149;
continue;
} else {
var temp__4126__auto___27150 = cljs.core.seq.call(null,seq__27137_27141);
if(temp__4126__auto___27150){
var seq__27137_27151__$1 = temp__4126__auto___27150;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27137_27151__$1)){
var c__12387__auto___27152 = cljs.core.chunk_first.call(null,seq__27137_27151__$1);
var G__27153 = cljs.core.chunk_rest.call(null,seq__27137_27151__$1);
var G__27154 = c__12387__auto___27152;
var G__27155 = cljs.core.count.call(null,c__12387__auto___27152);
var G__27156 = (0);
seq__27137_27141 = G__27153;
chunk__27138_27142 = G__27154;
count__27139_27143 = G__27155;
i__27140_27144 = G__27156;
continue;
} else {
var f_27157 = cljs.core.first.call(null,seq__27137_27151__$1);
cljs.core.print.call(null,"  ");

cljs.core.prn.call(null,f_27157);

var G__27158 = cljs.core.next.call(null,seq__27137_27151__$1);
var G__27159 = null;
var G__27160 = (0);
var G__27161 = (0);
seq__27137_27141 = G__27158;
chunk__27138_27142 = G__27159;
count__27139_27143 = G__27160;
i__27140_27144 = G__27161;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.prn.call(null,new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m));
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

return cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));
}
});

//# sourceMappingURL=repl.js.map