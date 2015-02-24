// Compiled by ClojureScript 0.0-2850 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function fn_handler(f){
if(typeof cljs.core.async.t27879 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27879 = (function (f,fn_handler,meta27880){
this.f = f;
this.fn_handler = fn_handler;
this.meta27880 = meta27880;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27879.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t27879.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t27879.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t27879.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27881){
var self__ = this;
var _27881__$1 = this;
return self__.meta27880;
});

cljs.core.async.t27879.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27881,meta27880__$1){
var self__ = this;
var _27881__$1 = this;
return (new cljs.core.async.t27879(self__.f,self__.fn_handler,meta27880__$1));
});

cljs.core.async.t27879.cljs$lang$type = true;

cljs.core.async.t27879.cljs$lang$ctorStr = "cljs.core.async/t27879";

cljs.core.async.t27879.cljs$lang$ctorPrWriter = (function (this__12187__auto__,writer__12188__auto__,opt__12189__auto__){
return cljs.core._write.call(null,writer__12188__auto__,"cljs.core.async/t27879");
});

cljs.core.async.__GT_t27879 = (function __GT_t27879(f__$1,fn_handler__$1,meta27880){
return (new cljs.core.async.t27879(f__$1,fn_handler__$1,meta27880));
});

}

return (new cljs.core.async.t27879(f,fn_handler,cljs.core.PersistentArrayMap.EMPTY));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){
var G__27883 = buff;
if(G__27883){
var bit__12281__auto__ = null;
if(cljs.core.truth_((function (){var or__11600__auto__ = bit__12281__auto__;
if(cljs.core.truth_(or__11600__auto__)){
return or__11600__auto__;
} else {
return G__27883.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__27883.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__27883);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__27883);
}
});
/**
* Creates a channel with an optional buffer, an optional transducer (like (map f),
* (filter p) etc or a composition thereof), and an optional exception handler.
* If buf-or-n is a number, will create and use a fixed buffer of that size. If a
* transducer is supplied a buffer must be specified. ex-handler must be a
* fn of one argument - if an exception occurs during transformation it will be called
* with the thrown value as an argument, and any non-nil return value will be placed
* in the channel.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){
return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){
return chan.call(null,buf_or_n,null,null);
});
var chan__2 = (function (buf_or_n,xform){
return chan.call(null,buf_or_n,xform,null);
});
var chan__3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});
chan = function(buf_or_n,xform,ex_handler){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
case 2:
return chan__2.call(this,buf_or_n,xform);
case 3:
return chan__3.call(this,buf_or_n,xform,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
chan.cljs$core$IFn$_invoke$arity$2 = chan__2;
chan.cljs$core$IFn$_invoke$arity$3 = chan__3;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
* Returns true unless port is already closed
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){
return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_27884 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_27884);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_27884,ret){
return (function (){
return fn1.call(null,val_27884);
});})(val_27884,ret))
);
}
} else {
}

return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
* Returns true unless port is already closed.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){
var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4124__auto__)){
var ret = temp__4124__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});
var put_BANG___3 = (function (port,val,fn1){
return put_BANG_.call(null,port,val,fn1,true);
});
var put_BANG___4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4124__auto__)){
var retb = temp__4124__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4124__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4124__auto__))
);
}

return ret;
} else {
return true;
}
});
put_BANG_ = function(port,val,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn1);
case 4:
return put_BANG___4.call(this,port,val,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){
var a = (new Array(n));
var n__12487__auto___27885 = n;
var x_27886 = (0);
while(true){
if((x_27886 < n__12487__auto___27885)){
(a[x_27886] = (0));

var G__27887 = (x_27886 + (1));
x_27886 = G__27887;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__27888 = (i + (1));
i = G__27888;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t27892 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27892 = (function (flag,alt_flag,meta27893){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta27893 = meta27893;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27892.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t27892.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t27892.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t27892.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_27894){
var self__ = this;
var _27894__$1 = this;
return self__.meta27893;
});})(flag))
;

cljs.core.async.t27892.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_27894,meta27893__$1){
var self__ = this;
var _27894__$1 = this;
return (new cljs.core.async.t27892(self__.flag,self__.alt_flag,meta27893__$1));
});})(flag))
;

cljs.core.async.t27892.cljs$lang$type = true;

cljs.core.async.t27892.cljs$lang$ctorStr = "cljs.core.async/t27892";

cljs.core.async.t27892.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__12187__auto__,writer__12188__auto__,opt__12189__auto__){
return cljs.core._write.call(null,writer__12188__auto__,"cljs.core.async/t27892");
});})(flag))
;

cljs.core.async.__GT_t27892 = ((function (flag){
return (function __GT_t27892(flag__$1,alt_flag__$1,meta27893){
return (new cljs.core.async.t27892(flag__$1,alt_flag__$1,meta27893));
});})(flag))
;

}

return (new cljs.core.async.t27892(flag,alt_flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){
if(typeof cljs.core.async.t27898 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27898 = (function (cb,flag,alt_handler,meta27899){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta27899 = meta27899;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27898.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t27898.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t27898.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t27898.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27900){
var self__ = this;
var _27900__$1 = this;
return self__.meta27899;
});

cljs.core.async.t27898.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27900,meta27899__$1){
var self__ = this;
var _27900__$1 = this;
return (new cljs.core.async.t27898(self__.cb,self__.flag,self__.alt_handler,meta27899__$1));
});

cljs.core.async.t27898.cljs$lang$type = true;

cljs.core.async.t27898.cljs$lang$ctorStr = "cljs.core.async/t27898";

cljs.core.async.t27898.cljs$lang$ctorPrWriter = (function (this__12187__auto__,writer__12188__auto__,opt__12189__auto__){
return cljs.core._write.call(null,writer__12188__auto__,"cljs.core.async/t27898");
});

cljs.core.async.__GT_t27898 = (function __GT_t27898(cb__$1,flag__$1,alt_handler__$1,meta27899){
return (new cljs.core.async.t27898(cb__$1,flag__$1,alt_handler__$1,meta27899));
});

}

return (new cljs.core.async.t27898(cb,flag,alt_handler,cljs.core.PersistentArrayMap.EMPTY));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__27901_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27901_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__27902_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27902_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__11600__auto__ = wport;
if(cljs.core.truth_(or__11600__auto__)){
return or__11600__auto__;
} else {
return port;
}
})()], null));
} else {
var G__27903 = (i + (1));
i = G__27903;
continue;
}
} else {
return null;
}
break;
}
})();
var or__11600__auto__ = ret;
if(cljs.core.truth_(or__11600__auto__)){
return or__11600__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4126__auto__ = (function (){var and__11588__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__11588__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__11588__auto__;
}
})();
if(cljs.core.truth_(temp__4126__auto__)){
var got = temp__4126__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints,
* which can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and a
* boolean (true unless already closed, as per put!) for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__27904){
var map__27906 = p__27904;
var map__27906__$1 = ((cljs.core.seq_QMARK_.call(null,map__27906))?cljs.core.apply.call(null,cljs.core.hash_map,map__27906):map__27906);
var opts = map__27906__$1;
throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__27904 = null;
if (arguments.length > 1) {
var G__27907__i = 0, G__27907__a = new Array(arguments.length -  1);
while (G__27907__i < G__27907__a.length) {G__27907__a[G__27907__i] = arguments[G__27907__i + 1]; ++G__27907__i;}
  p__27904 = new cljs.core.IndexedSeq(G__27907__a,0);
} 
return alts_BANG___delegate.call(this,ports,p__27904);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__27908){
var ports = cljs.core.first(arglist__27908);
var p__27904 = cljs.core.rest(arglist__27908);
return alts_BANG___delegate(ports,p__27904);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){
return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){
var c__14073__auto___28003 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14073__auto___28003){
return (function (){
var f__14074__auto__ = (function (){var switch__14017__auto__ = ((function (c__14073__auto___28003){
return (function (state_27979){
var state_val_27980 = (state_27979[(1)]);
if((state_val_27980 === (7))){
var inst_27975 = (state_27979[(2)]);
var state_27979__$1 = state_27979;
var statearr_27981_28004 = state_27979__$1;
(statearr_27981_28004[(2)] = inst_27975);

(statearr_27981_28004[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27980 === (1))){
var state_27979__$1 = state_27979;
var statearr_27982_28005 = state_27979__$1;
(statearr_27982_28005[(2)] = null);

(statearr_27982_28005[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27980 === (4))){
var inst_27958 = (state_27979[(7)]);
var inst_27958__$1 = (state_27979[(2)]);
var inst_27959 = (inst_27958__$1 == null);
var state_27979__$1 = (function (){var statearr_27983 = state_27979;
(statearr_27983[(7)] = inst_27958__$1);

return statearr_27983;
})();
if(cljs.core.truth_(inst_27959)){
var statearr_27984_28006 = state_27979__$1;
(statearr_27984_28006[(1)] = (5));

} else {
var statearr_27985_28007 = state_27979__$1;
(statearr_27985_28007[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27980 === (13))){
var state_27979__$1 = state_27979;
var statearr_27986_28008 = state_27979__$1;
(statearr_27986_28008[(2)] = null);

(statearr_27986_28008[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27980 === (6))){
var inst_27958 = (state_27979[(7)]);
var state_27979__$1 = state_27979;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27979__$1,(11),to,inst_27958);
} else {
if((state_val_27980 === (3))){
var inst_27977 = (state_27979[(2)]);
var state_27979__$1 = state_27979;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27979__$1,inst_27977);
} else {
if((state_val_27980 === (12))){
var state_27979__$1 = state_27979;
var statearr_27987_28009 = state_27979__$1;
(statearr_27987_28009[(2)] = null);

(statearr_27987_28009[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27980 === (2))){
var state_27979__$1 = state_27979;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27979__$1,(4),from);
} else {
if((state_val_27980 === (11))){
var inst_27968 = (state_27979[(2)]);
var state_27979__$1 = state_27979;
if(cljs.core.truth_(inst_27968)){
var statearr_27988_28010 = state_27979__$1;
(statearr_27988_28010[(1)] = (12));

} else {
var statearr_27989_28011 = state_27979__$1;
(statearr_27989_28011[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27980 === (9))){
var state_27979__$1 = state_27979;
var statearr_27990_28012 = state_27979__$1;
(statearr_27990_28012[(2)] = null);

(statearr_27990_28012[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27980 === (5))){
var state_27979__$1 = state_27979;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27991_28013 = state_27979__$1;
(statearr_27991_28013[(1)] = (8));

} else {
var statearr_27992_28014 = state_27979__$1;
(statearr_27992_28014[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27980 === (14))){
var inst_27973 = (state_27979[(2)]);
var state_27979__$1 = state_27979;
var statearr_27993_28015 = state_27979__$1;
(statearr_27993_28015[(2)] = inst_27973);

(statearr_27993_28015[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27980 === (10))){
var inst_27965 = (state_27979[(2)]);
var state_27979__$1 = state_27979;
var statearr_27994_28016 = state_27979__$1;
(statearr_27994_28016[(2)] = inst_27965);

(statearr_27994_28016[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27980 === (8))){
var inst_27962 = cljs.core.async.close_BANG_.call(null,to);
var state_27979__$1 = state_27979;
var statearr_27995_28017 = state_27979__$1;
(statearr_27995_28017[(2)] = inst_27962);

(statearr_27995_28017[(1)] = (10));


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
});})(c__14073__auto___28003))
;
return ((function (switch__14017__auto__,c__14073__auto___28003){
return (function() {
var state_machine__14018__auto__ = null;
var state_machine__14018__auto____0 = (function (){
var statearr_27999 = [null,null,null,null,null,null,null,null];
(statearr_27999[(0)] = state_machine__14018__auto__);

(statearr_27999[(1)] = (1));

return statearr_27999;
});
var state_machine__14018__auto____1 = (function (state_27979){
while(true){
var ret_value__14019__auto__ = (function (){try{while(true){
var result__14020__auto__ = switch__14017__auto__.call(null,state_27979);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14020__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14020__auto__;
}
break;
}
}catch (e28000){if((e28000 instanceof Object)){
var ex__14021__auto__ = e28000;
var statearr_28001_28018 = state_27979;
(statearr_28001_28018[(5)] = ex__14021__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27979);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28000;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14019__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28019 = state_27979;
state_27979 = G__28019;
continue;
} else {
return ret_value__14019__auto__;
}
break;
}
});
state_machine__14018__auto__ = function(state_27979){
switch(arguments.length){
case 0:
return state_machine__14018__auto____0.call(this);
case 1:
return state_machine__14018__auto____1.call(this,state_27979);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14018__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14018__auto____0;
state_machine__14018__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14018__auto____1;
return state_machine__14018__auto__;
})()
;})(switch__14017__auto__,c__14073__auto___28003))
})();
var state__14075__auto__ = (function (){var statearr_28002 = f__14074__auto__.call(null);
(statearr_28002[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14073__auto___28003);

return statearr_28002;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14075__auto__);
});})(c__14073__auto___28003))
);


return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
cljs.core.async.pipeline_STAR_ = (function pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__28203){
var vec__28204 = p__28203;
var v = cljs.core.nth.call(null,vec__28204,(0),null);
var p = cljs.core.nth.call(null,vec__28204,(1),null);
var job = vec__28204;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__14073__auto___28386 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14073__auto___28386,res,vec__28204,v,p,job,jobs,results){
return (function (){
var f__14074__auto__ = (function (){var switch__14017__auto__ = ((function (c__14073__auto___28386,res,vec__28204,v,p,job,jobs,results){
return (function (state_28209){
var state_val_28210 = (state_28209[(1)]);
if((state_val_28210 === (2))){
var inst_28206 = (state_28209[(2)]);
var inst_28207 = cljs.core.async.close_BANG_.call(null,res);
var state_28209__$1 = (function (){var statearr_28211 = state_28209;
(statearr_28211[(7)] = inst_28206);

return statearr_28211;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28209__$1,inst_28207);
} else {
if((state_val_28210 === (1))){
var state_28209__$1 = state_28209;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28209__$1,(2),res,v);
} else {
return null;
}
}
});})(c__14073__auto___28386,res,vec__28204,v,p,job,jobs,results))
;
return ((function (switch__14017__auto__,c__14073__auto___28386,res,vec__28204,v,p,job,jobs,results){
return (function() {
var state_machine__14018__auto__ = null;
var state_machine__14018__auto____0 = (function (){
var statearr_28215 = [null,null,null,null,null,null,null,null];
(statearr_28215[(0)] = state_machine__14018__auto__);

(statearr_28215[(1)] = (1));

return statearr_28215;
});
var state_machine__14018__auto____1 = (function (state_28209){
while(true){
var ret_value__14019__auto__ = (function (){try{while(true){
var result__14020__auto__ = switch__14017__auto__.call(null,state_28209);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14020__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14020__auto__;
}
break;
}
}catch (e28216){if((e28216 instanceof Object)){
var ex__14021__auto__ = e28216;
var statearr_28217_28387 = state_28209;
(statearr_28217_28387[(5)] = ex__14021__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28209);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28216;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14019__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28388 = state_28209;
state_28209 = G__28388;
continue;
} else {
return ret_value__14019__auto__;
}
break;
}
});
state_machine__14018__auto__ = function(state_28209){
switch(arguments.length){
case 0:
return state_machine__14018__auto____0.call(this);
case 1:
return state_machine__14018__auto____1.call(this,state_28209);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14018__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14018__auto____0;
state_machine__14018__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14018__auto____1;
return state_machine__14018__auto__;
})()
;})(switch__14017__auto__,c__14073__auto___28386,res,vec__28204,v,p,job,jobs,results))
})();
var state__14075__auto__ = (function (){var statearr_28218 = f__14074__auto__.call(null);
(statearr_28218[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14073__auto___28386);

return statearr_28218;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14075__auto__);
});})(c__14073__auto___28386,res,vec__28204,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__28219){
var vec__28220 = p__28219;
var v = cljs.core.nth.call(null,vec__28220,(0),null);
var p = cljs.core.nth.call(null,vec__28220,(1),null);
var job = vec__28220;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__12487__auto___28389 = n;
var __28390 = (0);
while(true){
if((__28390 < n__12487__auto___28389)){
var G__28221_28391 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__28221_28391) {
case "async":
var c__14073__auto___28393 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__28390,c__14073__auto___28393,G__28221_28391,n__12487__auto___28389,jobs,results,process,async){
return (function (){
var f__14074__auto__ = (function (){var switch__14017__auto__ = ((function (__28390,c__14073__auto___28393,G__28221_28391,n__12487__auto___28389,jobs,results,process,async){
return (function (state_28234){
var state_val_28235 = (state_28234[(1)]);
if((state_val_28235 === (7))){
var inst_28230 = (state_28234[(2)]);
var state_28234__$1 = state_28234;
var statearr_28236_28394 = state_28234__$1;
(statearr_28236_28394[(2)] = inst_28230);

(statearr_28236_28394[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28235 === (6))){
var state_28234__$1 = state_28234;
var statearr_28237_28395 = state_28234__$1;
(statearr_28237_28395[(2)] = null);

(statearr_28237_28395[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28235 === (5))){
var state_28234__$1 = state_28234;
var statearr_28238_28396 = state_28234__$1;
(statearr_28238_28396[(2)] = null);

(statearr_28238_28396[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28235 === (4))){
var inst_28224 = (state_28234[(2)]);
var inst_28225 = async.call(null,inst_28224);
var state_28234__$1 = state_28234;
if(cljs.core.truth_(inst_28225)){
var statearr_28239_28397 = state_28234__$1;
(statearr_28239_28397[(1)] = (5));

} else {
var statearr_28240_28398 = state_28234__$1;
(statearr_28240_28398[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28235 === (3))){
var inst_28232 = (state_28234[(2)]);
var state_28234__$1 = state_28234;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28234__$1,inst_28232);
} else {
if((state_val_28235 === (2))){
var state_28234__$1 = state_28234;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28234__$1,(4),jobs);
} else {
if((state_val_28235 === (1))){
var state_28234__$1 = state_28234;
var statearr_28241_28399 = state_28234__$1;
(statearr_28241_28399[(2)] = null);

(statearr_28241_28399[(1)] = (2));


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
});})(__28390,c__14073__auto___28393,G__28221_28391,n__12487__auto___28389,jobs,results,process,async))
;
return ((function (__28390,switch__14017__auto__,c__14073__auto___28393,G__28221_28391,n__12487__auto___28389,jobs,results,process,async){
return (function() {
var state_machine__14018__auto__ = null;
var state_machine__14018__auto____0 = (function (){
var statearr_28245 = [null,null,null,null,null,null,null];
(statearr_28245[(0)] = state_machine__14018__auto__);

(statearr_28245[(1)] = (1));

return statearr_28245;
});
var state_machine__14018__auto____1 = (function (state_28234){
while(true){
var ret_value__14019__auto__ = (function (){try{while(true){
var result__14020__auto__ = switch__14017__auto__.call(null,state_28234);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14020__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14020__auto__;
}
break;
}
}catch (e28246){if((e28246 instanceof Object)){
var ex__14021__auto__ = e28246;
var statearr_28247_28400 = state_28234;
(statearr_28247_28400[(5)] = ex__14021__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28234);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28246;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14019__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28401 = state_28234;
state_28234 = G__28401;
continue;
} else {
return ret_value__14019__auto__;
}
break;
}
});
state_machine__14018__auto__ = function(state_28234){
switch(arguments.length){
case 0:
return state_machine__14018__auto____0.call(this);
case 1:
return state_machine__14018__auto____1.call(this,state_28234);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14018__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14018__auto____0;
state_machine__14018__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14018__auto____1;
return state_machine__14018__auto__;
})()
;})(__28390,switch__14017__auto__,c__14073__auto___28393,G__28221_28391,n__12487__auto___28389,jobs,results,process,async))
})();
var state__14075__auto__ = (function (){var statearr_28248 = f__14074__auto__.call(null);
(statearr_28248[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14073__auto___28393);

return statearr_28248;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14075__auto__);
});})(__28390,c__14073__auto___28393,G__28221_28391,n__12487__auto___28389,jobs,results,process,async))
);


break;
case "compute":
var c__14073__auto___28402 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__28390,c__14073__auto___28402,G__28221_28391,n__12487__auto___28389,jobs,results,process,async){
return (function (){
var f__14074__auto__ = (function (){var switch__14017__auto__ = ((function (__28390,c__14073__auto___28402,G__28221_28391,n__12487__auto___28389,jobs,results,process,async){
return (function (state_28261){
var state_val_28262 = (state_28261[(1)]);
if((state_val_28262 === (7))){
var inst_28257 = (state_28261[(2)]);
var state_28261__$1 = state_28261;
var statearr_28263_28403 = state_28261__$1;
(statearr_28263_28403[(2)] = inst_28257);

(statearr_28263_28403[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28262 === (6))){
var state_28261__$1 = state_28261;
var statearr_28264_28404 = state_28261__$1;
(statearr_28264_28404[(2)] = null);

(statearr_28264_28404[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28262 === (5))){
var state_28261__$1 = state_28261;
var statearr_28265_28405 = state_28261__$1;
(statearr_28265_28405[(2)] = null);

(statearr_28265_28405[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28262 === (4))){
var inst_28251 = (state_28261[(2)]);
var inst_28252 = process.call(null,inst_28251);
var state_28261__$1 = state_28261;
if(cljs.core.truth_(inst_28252)){
var statearr_28266_28406 = state_28261__$1;
(statearr_28266_28406[(1)] = (5));

} else {
var statearr_28267_28407 = state_28261__$1;
(statearr_28267_28407[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28262 === (3))){
var inst_28259 = (state_28261[(2)]);
var state_28261__$1 = state_28261;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28261__$1,inst_28259);
} else {
if((state_val_28262 === (2))){
var state_28261__$1 = state_28261;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28261__$1,(4),jobs);
} else {
if((state_val_28262 === (1))){
var state_28261__$1 = state_28261;
var statearr_28268_28408 = state_28261__$1;
(statearr_28268_28408[(2)] = null);

(statearr_28268_28408[(1)] = (2));


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
});})(__28390,c__14073__auto___28402,G__28221_28391,n__12487__auto___28389,jobs,results,process,async))
;
return ((function (__28390,switch__14017__auto__,c__14073__auto___28402,G__28221_28391,n__12487__auto___28389,jobs,results,process,async){
return (function() {
var state_machine__14018__auto__ = null;
var state_machine__14018__auto____0 = (function (){
var statearr_28272 = [null,null,null,null,null,null,null];
(statearr_28272[(0)] = state_machine__14018__auto__);

(statearr_28272[(1)] = (1));

return statearr_28272;
});
var state_machine__14018__auto____1 = (function (state_28261){
while(true){
var ret_value__14019__auto__ = (function (){try{while(true){
var result__14020__auto__ = switch__14017__auto__.call(null,state_28261);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14020__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14020__auto__;
}
break;
}
}catch (e28273){if((e28273 instanceof Object)){
var ex__14021__auto__ = e28273;
var statearr_28274_28409 = state_28261;
(statearr_28274_28409[(5)] = ex__14021__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28261);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28273;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14019__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28410 = state_28261;
state_28261 = G__28410;
continue;
} else {
return ret_value__14019__auto__;
}
break;
}
});
state_machine__14018__auto__ = function(state_28261){
switch(arguments.length){
case 0:
return state_machine__14018__auto____0.call(this);
case 1:
return state_machine__14018__auto____1.call(this,state_28261);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14018__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14018__auto____0;
state_machine__14018__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14018__auto____1;
return state_machine__14018__auto__;
})()
;})(__28390,switch__14017__auto__,c__14073__auto___28402,G__28221_28391,n__12487__auto___28389,jobs,results,process,async))
})();
var state__14075__auto__ = (function (){var statearr_28275 = f__14074__auto__.call(null);
(statearr_28275[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14073__auto___28402);

return statearr_28275;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14075__auto__);
});})(__28390,c__14073__auto___28402,G__28221_28391,n__12487__auto___28389,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__28411 = (__28390 + (1));
__28390 = G__28411;
continue;
} else {
}
break;
}

var c__14073__auto___28412 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14073__auto___28412,jobs,results,process,async){
return (function (){
var f__14074__auto__ = (function (){var switch__14017__auto__ = ((function (c__14073__auto___28412,jobs,results,process,async){
return (function (state_28297){
var state_val_28298 = (state_28297[(1)]);
if((state_val_28298 === (9))){
var inst_28290 = (state_28297[(2)]);
var state_28297__$1 = (function (){var statearr_28299 = state_28297;
(statearr_28299[(7)] = inst_28290);

return statearr_28299;
})();
var statearr_28300_28413 = state_28297__$1;
(statearr_28300_28413[(2)] = null);

(statearr_28300_28413[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28298 === (8))){
var inst_28283 = (state_28297[(8)]);
var inst_28288 = (state_28297[(2)]);
var state_28297__$1 = (function (){var statearr_28301 = state_28297;
(statearr_28301[(9)] = inst_28288);

return statearr_28301;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28297__$1,(9),results,inst_28283);
} else {
if((state_val_28298 === (7))){
var inst_28293 = (state_28297[(2)]);
var state_28297__$1 = state_28297;
var statearr_28302_28414 = state_28297__$1;
(statearr_28302_28414[(2)] = inst_28293);

(statearr_28302_28414[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28298 === (6))){
var inst_28283 = (state_28297[(8)]);
var inst_28278 = (state_28297[(10)]);
var inst_28283__$1 = cljs.core.async.chan.call(null,(1));
var inst_28284 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_28285 = [inst_28278,inst_28283__$1];
var inst_28286 = (new cljs.core.PersistentVector(null,2,(5),inst_28284,inst_28285,null));
var state_28297__$1 = (function (){var statearr_28303 = state_28297;
(statearr_28303[(8)] = inst_28283__$1);

return statearr_28303;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28297__$1,(8),jobs,inst_28286);
} else {
if((state_val_28298 === (5))){
var inst_28281 = cljs.core.async.close_BANG_.call(null,jobs);
var state_28297__$1 = state_28297;
var statearr_28304_28415 = state_28297__$1;
(statearr_28304_28415[(2)] = inst_28281);

(statearr_28304_28415[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28298 === (4))){
var inst_28278 = (state_28297[(10)]);
var inst_28278__$1 = (state_28297[(2)]);
var inst_28279 = (inst_28278__$1 == null);
var state_28297__$1 = (function (){var statearr_28305 = state_28297;
(statearr_28305[(10)] = inst_28278__$1);

return statearr_28305;
})();
if(cljs.core.truth_(inst_28279)){
var statearr_28306_28416 = state_28297__$1;
(statearr_28306_28416[(1)] = (5));

} else {
var statearr_28307_28417 = state_28297__$1;
(statearr_28307_28417[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28298 === (3))){
var inst_28295 = (state_28297[(2)]);
var state_28297__$1 = state_28297;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28297__$1,inst_28295);
} else {
if((state_val_28298 === (2))){
var state_28297__$1 = state_28297;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28297__$1,(4),from);
} else {
if((state_val_28298 === (1))){
var state_28297__$1 = state_28297;
var statearr_28308_28418 = state_28297__$1;
(statearr_28308_28418[(2)] = null);

(statearr_28308_28418[(1)] = (2));


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
});})(c__14073__auto___28412,jobs,results,process,async))
;
return ((function (switch__14017__auto__,c__14073__auto___28412,jobs,results,process,async){
return (function() {
var state_machine__14018__auto__ = null;
var state_machine__14018__auto____0 = (function (){
var statearr_28312 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28312[(0)] = state_machine__14018__auto__);

(statearr_28312[(1)] = (1));

return statearr_28312;
});
var state_machine__14018__auto____1 = (function (state_28297){
while(true){
var ret_value__14019__auto__ = (function (){try{while(true){
var result__14020__auto__ = switch__14017__auto__.call(null,state_28297);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14020__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14020__auto__;
}
break;
}
}catch (e28313){if((e28313 instanceof Object)){
var ex__14021__auto__ = e28313;
var statearr_28314_28419 = state_28297;
(statearr_28314_28419[(5)] = ex__14021__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28297);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28313;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14019__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28420 = state_28297;
state_28297 = G__28420;
continue;
} else {
return ret_value__14019__auto__;
}
break;
}
});
state_machine__14018__auto__ = function(state_28297){
switch(arguments.length){
case 0:
return state_machine__14018__auto____0.call(this);
case 1:
return state_machine__14018__auto____1.call(this,state_28297);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14018__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14018__auto____0;
state_machine__14018__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14018__auto____1;
return state_machine__14018__auto__;
})()
;})(switch__14017__auto__,c__14073__auto___28412,jobs,results,process,async))
})();
var state__14075__auto__ = (function (){var statearr_28315 = f__14074__auto__.call(null);
(statearr_28315[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14073__auto___28412);

return statearr_28315;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14075__auto__);
});})(c__14073__auto___28412,jobs,results,process,async))
);


var c__14073__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14073__auto__,jobs,results,process,async){
return (function (){
var f__14074__auto__ = (function (){var switch__14017__auto__ = ((function (c__14073__auto__,jobs,results,process,async){
return (function (state_28353){
var state_val_28354 = (state_28353[(1)]);
if((state_val_28354 === (7))){
var inst_28349 = (state_28353[(2)]);
var state_28353__$1 = state_28353;
var statearr_28355_28421 = state_28353__$1;
(statearr_28355_28421[(2)] = inst_28349);

(statearr_28355_28421[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28354 === (20))){
var state_28353__$1 = state_28353;
var statearr_28356_28422 = state_28353__$1;
(statearr_28356_28422[(2)] = null);

(statearr_28356_28422[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28354 === (1))){
var state_28353__$1 = state_28353;
var statearr_28357_28423 = state_28353__$1;
(statearr_28357_28423[(2)] = null);

(statearr_28357_28423[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28354 === (4))){
var inst_28318 = (state_28353[(7)]);
var inst_28318__$1 = (state_28353[(2)]);
var inst_28319 = (inst_28318__$1 == null);
var state_28353__$1 = (function (){var statearr_28358 = state_28353;
(statearr_28358[(7)] = inst_28318__$1);

return statearr_28358;
})();
if(cljs.core.truth_(inst_28319)){
var statearr_28359_28424 = state_28353__$1;
(statearr_28359_28424[(1)] = (5));

} else {
var statearr_28360_28425 = state_28353__$1;
(statearr_28360_28425[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28354 === (15))){
var inst_28331 = (state_28353[(8)]);
var state_28353__$1 = state_28353;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28353__$1,(18),to,inst_28331);
} else {
if((state_val_28354 === (21))){
var inst_28344 = (state_28353[(2)]);
var state_28353__$1 = state_28353;
var statearr_28361_28426 = state_28353__$1;
(statearr_28361_28426[(2)] = inst_28344);

(statearr_28361_28426[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28354 === (13))){
var inst_28346 = (state_28353[(2)]);
var state_28353__$1 = (function (){var statearr_28362 = state_28353;
(statearr_28362[(9)] = inst_28346);

return statearr_28362;
})();
var statearr_28363_28427 = state_28353__$1;
(statearr_28363_28427[(2)] = null);

(statearr_28363_28427[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28354 === (6))){
var inst_28318 = (state_28353[(7)]);
var state_28353__$1 = state_28353;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28353__$1,(11),inst_28318);
} else {
if((state_val_28354 === (17))){
var inst_28339 = (state_28353[(2)]);
var state_28353__$1 = state_28353;
if(cljs.core.truth_(inst_28339)){
var statearr_28364_28428 = state_28353__$1;
(statearr_28364_28428[(1)] = (19));

} else {
var statearr_28365_28429 = state_28353__$1;
(statearr_28365_28429[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28354 === (3))){
var inst_28351 = (state_28353[(2)]);
var state_28353__$1 = state_28353;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28353__$1,inst_28351);
} else {
if((state_val_28354 === (12))){
var inst_28328 = (state_28353[(10)]);
var state_28353__$1 = state_28353;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28353__$1,(14),inst_28328);
} else {
if((state_val_28354 === (2))){
var state_28353__$1 = state_28353;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28353__$1,(4),results);
} else {
if((state_val_28354 === (19))){
var state_28353__$1 = state_28353;
var statearr_28366_28430 = state_28353__$1;
(statearr_28366_28430[(2)] = null);

(statearr_28366_28430[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28354 === (11))){
var inst_28328 = (state_28353[(2)]);
var state_28353__$1 = (function (){var statearr_28367 = state_28353;
(statearr_28367[(10)] = inst_28328);

return statearr_28367;
})();
var statearr_28368_28431 = state_28353__$1;
(statearr_28368_28431[(2)] = null);

(statearr_28368_28431[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28354 === (9))){
var state_28353__$1 = state_28353;
var statearr_28369_28432 = state_28353__$1;
(statearr_28369_28432[(2)] = null);

(statearr_28369_28432[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28354 === (5))){
var state_28353__$1 = state_28353;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28370_28433 = state_28353__$1;
(statearr_28370_28433[(1)] = (8));

} else {
var statearr_28371_28434 = state_28353__$1;
(statearr_28371_28434[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28354 === (14))){
var inst_28331 = (state_28353[(8)]);
var inst_28333 = (state_28353[(11)]);
var inst_28331__$1 = (state_28353[(2)]);
var inst_28332 = (inst_28331__$1 == null);
var inst_28333__$1 = cljs.core.not.call(null,inst_28332);
var state_28353__$1 = (function (){var statearr_28372 = state_28353;
(statearr_28372[(8)] = inst_28331__$1);

(statearr_28372[(11)] = inst_28333__$1);

return statearr_28372;
})();
if(inst_28333__$1){
var statearr_28373_28435 = state_28353__$1;
(statearr_28373_28435[(1)] = (15));

} else {
var statearr_28374_28436 = state_28353__$1;
(statearr_28374_28436[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28354 === (16))){
var inst_28333 = (state_28353[(11)]);
var state_28353__$1 = state_28353;
var statearr_28375_28437 = state_28353__$1;
(statearr_28375_28437[(2)] = inst_28333);

(statearr_28375_28437[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28354 === (10))){
var inst_28325 = (state_28353[(2)]);
var state_28353__$1 = state_28353;
var statearr_28376_28438 = state_28353__$1;
(statearr_28376_28438[(2)] = inst_28325);

(statearr_28376_28438[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28354 === (18))){
var inst_28336 = (state_28353[(2)]);
var state_28353__$1 = state_28353;
var statearr_28377_28439 = state_28353__$1;
(statearr_28377_28439[(2)] = inst_28336);

(statearr_28377_28439[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28354 === (8))){
var inst_28322 = cljs.core.async.close_BANG_.call(null,to);
var state_28353__$1 = state_28353;
var statearr_28378_28440 = state_28353__$1;
(statearr_28378_28440[(2)] = inst_28322);

(statearr_28378_28440[(1)] = (10));


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
});})(c__14073__auto__,jobs,results,process,async))
;
return ((function (switch__14017__auto__,c__14073__auto__,jobs,results,process,async){
return (function() {
var state_machine__14018__auto__ = null;
var state_machine__14018__auto____0 = (function (){
var statearr_28382 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28382[(0)] = state_machine__14018__auto__);

(statearr_28382[(1)] = (1));

return statearr_28382;
});
var state_machine__14018__auto____1 = (function (state_28353){
while(true){
var ret_value__14019__auto__ = (function (){try{while(true){
var result__14020__auto__ = switch__14017__auto__.call(null,state_28353);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14020__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14020__auto__;
}
break;
}
}catch (e28383){if((e28383 instanceof Object)){
var ex__14021__auto__ = e28383;
var statearr_28384_28441 = state_28353;
(statearr_28384_28441[(5)] = ex__14021__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28353);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28383;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14019__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28442 = state_28353;
state_28353 = G__28442;
continue;
} else {
return ret_value__14019__auto__;
}
break;
}
});
state_machine__14018__auto__ = function(state_28353){
switch(arguments.length){
case 0:
return state_machine__14018__auto____0.call(this);
case 1:
return state_machine__14018__auto____1.call(this,state_28353);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14018__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14018__auto____0;
state_machine__14018__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14018__auto____1;
return state_machine__14018__auto__;
})()
;})(switch__14017__auto__,c__14073__auto__,jobs,results,process,async))
})();
var state__14075__auto__ = (function (){var statearr_28385 = f__14074__auto__.call(null);
(statearr_28385[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14073__auto__);

return statearr_28385;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14075__auto__);
});})(c__14073__auto__,jobs,results,process,async))
);

return c__14073__auto__;
});
/**
* Takes elements from the from channel and supplies them to the to
* channel, subject to the async function af, with parallelism n. af
* must be a function of two arguments, the first an input value and
* the second a channel on which to place the result(s). af must close!
* the channel before returning.  The presumption is that af will
* return immediately, having launched some asynchronous operation
* whose completion/callback will manipulate the result channel. Outputs
* will be returned in order relative to  the inputs. By default, the to
* channel will be closed when the from channel closes, but can be
* determined by the close?  parameter. Will stop consuming the from
* channel if the to channel closes.
*/
cljs.core.async.pipeline_async = (function() {
var pipeline_async = null;
var pipeline_async__4 = (function (n,to,af,from){
return pipeline_async.call(null,n,to,af,from,true);
});
var pipeline_async__5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});
pipeline_async = function(n,to,af,from,close_QMARK_){
switch(arguments.length){
case 4:
return pipeline_async__4.call(this,n,to,af,from);
case 5:
return pipeline_async__5.call(this,n,to,af,from,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipeline_async.cljs$core$IFn$_invoke$arity$4 = pipeline_async__4;
pipeline_async.cljs$core$IFn$_invoke$arity$5 = pipeline_async__5;
return pipeline_async;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel, subject to the transducer xf, with parallelism n. Because
* it is parallel, the transducer will be applied independently to each
* element, not across elements, and may produce zero or more outputs
* per input.  Outputs will be returned in order relative to the
* inputs. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes.
* 
* Note this is supplied for API compatibility with the Clojure version.
* Values of N > 1 will not result in actual concurrency in a
* single-threaded runtime.
*/
cljs.core.async.pipeline = (function() {
var pipeline = null;
var pipeline__4 = (function (n,to,xf,from){
return pipeline.call(null,n,to,xf,from,true);
});
var pipeline__5 = (function (n,to,xf,from,close_QMARK_){
return pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});
var pipeline__6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});
pipeline = function(n,to,xf,from,close_QMARK_,ex_handler){
switch(arguments.length){
case 4:
return pipeline__4.call(this,n,to,xf,from);
case 5:
return pipeline__5.call(this,n,to,xf,from,close_QMARK_);
case 6:
return pipeline__6.call(this,n,to,xf,from,close_QMARK_,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipeline.cljs$core$IFn$_invoke$arity$4 = pipeline__4;
pipeline.cljs$core$IFn$_invoke$arity$5 = pipeline__5;
pipeline.cljs$core$IFn$_invoke$arity$6 = pipeline__6;
return pipeline;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){
return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__14073__auto___28543 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14073__auto___28543,tc,fc){
return (function (){
var f__14074__auto__ = (function (){var switch__14017__auto__ = ((function (c__14073__auto___28543,tc,fc){
return (function (state_28518){
var state_val_28519 = (state_28518[(1)]);
if((state_val_28519 === (7))){
var inst_28514 = (state_28518[(2)]);
var state_28518__$1 = state_28518;
var statearr_28520_28544 = state_28518__$1;
(statearr_28520_28544[(2)] = inst_28514);

(statearr_28520_28544[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28519 === (1))){
var state_28518__$1 = state_28518;
var statearr_28521_28545 = state_28518__$1;
(statearr_28521_28545[(2)] = null);

(statearr_28521_28545[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28519 === (4))){
var inst_28495 = (state_28518[(7)]);
var inst_28495__$1 = (state_28518[(2)]);
var inst_28496 = (inst_28495__$1 == null);
var state_28518__$1 = (function (){var statearr_28522 = state_28518;
(statearr_28522[(7)] = inst_28495__$1);

return statearr_28522;
})();
if(cljs.core.truth_(inst_28496)){
var statearr_28523_28546 = state_28518__$1;
(statearr_28523_28546[(1)] = (5));

} else {
var statearr_28524_28547 = state_28518__$1;
(statearr_28524_28547[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28519 === (13))){
var state_28518__$1 = state_28518;
var statearr_28525_28548 = state_28518__$1;
(statearr_28525_28548[(2)] = null);

(statearr_28525_28548[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28519 === (6))){
var inst_28495 = (state_28518[(7)]);
var inst_28501 = p.call(null,inst_28495);
var state_28518__$1 = state_28518;
if(cljs.core.truth_(inst_28501)){
var statearr_28526_28549 = state_28518__$1;
(statearr_28526_28549[(1)] = (9));

} else {
var statearr_28527_28550 = state_28518__$1;
(statearr_28527_28550[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28519 === (3))){
var inst_28516 = (state_28518[(2)]);
var state_28518__$1 = state_28518;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28518__$1,inst_28516);
} else {
if((state_val_28519 === (12))){
var state_28518__$1 = state_28518;
var statearr_28528_28551 = state_28518__$1;
(statearr_28528_28551[(2)] = null);

(statearr_28528_28551[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28519 === (2))){
var state_28518__$1 = state_28518;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28518__$1,(4),ch);
} else {
if((state_val_28519 === (11))){
var inst_28495 = (state_28518[(7)]);
var inst_28505 = (state_28518[(2)]);
var state_28518__$1 = state_28518;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28518__$1,(8),inst_28505,inst_28495);
} else {
if((state_val_28519 === (9))){
var state_28518__$1 = state_28518;
var statearr_28529_28552 = state_28518__$1;
(statearr_28529_28552[(2)] = tc);

(statearr_28529_28552[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28519 === (5))){
var inst_28498 = cljs.core.async.close_BANG_.call(null,tc);
var inst_28499 = cljs.core.async.close_BANG_.call(null,fc);
var state_28518__$1 = (function (){var statearr_28530 = state_28518;
(statearr_28530[(8)] = inst_28498);

return statearr_28530;
})();
var statearr_28531_28553 = state_28518__$1;
(statearr_28531_28553[(2)] = inst_28499);

(statearr_28531_28553[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28519 === (14))){
var inst_28512 = (state_28518[(2)]);
var state_28518__$1 = state_28518;
var statearr_28532_28554 = state_28518__$1;
(statearr_28532_28554[(2)] = inst_28512);

(statearr_28532_28554[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28519 === (10))){
var state_28518__$1 = state_28518;
var statearr_28533_28555 = state_28518__$1;
(statearr_28533_28555[(2)] = fc);

(statearr_28533_28555[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28519 === (8))){
var inst_28507 = (state_28518[(2)]);
var state_28518__$1 = state_28518;
if(cljs.core.truth_(inst_28507)){
var statearr_28534_28556 = state_28518__$1;
(statearr_28534_28556[(1)] = (12));

} else {
var statearr_28535_28557 = state_28518__$1;
(statearr_28535_28557[(1)] = (13));

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
});})(c__14073__auto___28543,tc,fc))
;
return ((function (switch__14017__auto__,c__14073__auto___28543,tc,fc){
return (function() {
var state_machine__14018__auto__ = null;
var state_machine__14018__auto____0 = (function (){
var statearr_28539 = [null,null,null,null,null,null,null,null,null];
(statearr_28539[(0)] = state_machine__14018__auto__);

(statearr_28539[(1)] = (1));

return statearr_28539;
});
var state_machine__14018__auto____1 = (function (state_28518){
while(true){
var ret_value__14019__auto__ = (function (){try{while(true){
var result__14020__auto__ = switch__14017__auto__.call(null,state_28518);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14020__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14020__auto__;
}
break;
}
}catch (e28540){if((e28540 instanceof Object)){
var ex__14021__auto__ = e28540;
var statearr_28541_28558 = state_28518;
(statearr_28541_28558[(5)] = ex__14021__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28518);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28540;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14019__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28559 = state_28518;
state_28518 = G__28559;
continue;
} else {
return ret_value__14019__auto__;
}
break;
}
});
state_machine__14018__auto__ = function(state_28518){
switch(arguments.length){
case 0:
return state_machine__14018__auto____0.call(this);
case 1:
return state_machine__14018__auto____1.call(this,state_28518);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14018__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14018__auto____0;
state_machine__14018__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14018__auto____1;
return state_machine__14018__auto__;
})()
;})(switch__14017__auto__,c__14073__auto___28543,tc,fc))
})();
var state__14075__auto__ = (function (){var statearr_28542 = f__14074__auto__.call(null);
(statearr_28542[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14073__auto___28543);

return statearr_28542;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14075__auto__);
});})(c__14073__auto___28543,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){
var c__14073__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14073__auto__){
return (function (){
var f__14074__auto__ = (function (){var switch__14017__auto__ = ((function (c__14073__auto__){
return (function (state_28606){
var state_val_28607 = (state_28606[(1)]);
if((state_val_28607 === (7))){
var inst_28602 = (state_28606[(2)]);
var state_28606__$1 = state_28606;
var statearr_28608_28624 = state_28606__$1;
(statearr_28608_28624[(2)] = inst_28602);

(statearr_28608_28624[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28607 === (6))){
var inst_28592 = (state_28606[(7)]);
var inst_28595 = (state_28606[(8)]);
var inst_28599 = f.call(null,inst_28592,inst_28595);
var inst_28592__$1 = inst_28599;
var state_28606__$1 = (function (){var statearr_28609 = state_28606;
(statearr_28609[(7)] = inst_28592__$1);

return statearr_28609;
})();
var statearr_28610_28625 = state_28606__$1;
(statearr_28610_28625[(2)] = null);

(statearr_28610_28625[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28607 === (5))){
var inst_28592 = (state_28606[(7)]);
var state_28606__$1 = state_28606;
var statearr_28611_28626 = state_28606__$1;
(statearr_28611_28626[(2)] = inst_28592);

(statearr_28611_28626[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28607 === (4))){
var inst_28595 = (state_28606[(8)]);
var inst_28595__$1 = (state_28606[(2)]);
var inst_28596 = (inst_28595__$1 == null);
var state_28606__$1 = (function (){var statearr_28612 = state_28606;
(statearr_28612[(8)] = inst_28595__$1);

return statearr_28612;
})();
if(cljs.core.truth_(inst_28596)){
var statearr_28613_28627 = state_28606__$1;
(statearr_28613_28627[(1)] = (5));

} else {
var statearr_28614_28628 = state_28606__$1;
(statearr_28614_28628[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28607 === (3))){
var inst_28604 = (state_28606[(2)]);
var state_28606__$1 = state_28606;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28606__$1,inst_28604);
} else {
if((state_val_28607 === (2))){
var state_28606__$1 = state_28606;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28606__$1,(4),ch);
} else {
if((state_val_28607 === (1))){
var inst_28592 = init;
var state_28606__$1 = (function (){var statearr_28615 = state_28606;
(statearr_28615[(7)] = inst_28592);

return statearr_28615;
})();
var statearr_28616_28629 = state_28606__$1;
(statearr_28616_28629[(2)] = null);

(statearr_28616_28629[(1)] = (2));


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
});})(c__14073__auto__))
;
return ((function (switch__14017__auto__,c__14073__auto__){
return (function() {
var state_machine__14018__auto__ = null;
var state_machine__14018__auto____0 = (function (){
var statearr_28620 = [null,null,null,null,null,null,null,null,null];
(statearr_28620[(0)] = state_machine__14018__auto__);

(statearr_28620[(1)] = (1));

return statearr_28620;
});
var state_machine__14018__auto____1 = (function (state_28606){
while(true){
var ret_value__14019__auto__ = (function (){try{while(true){
var result__14020__auto__ = switch__14017__auto__.call(null,state_28606);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14020__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14020__auto__;
}
break;
}
}catch (e28621){if((e28621 instanceof Object)){
var ex__14021__auto__ = e28621;
var statearr_28622_28630 = state_28606;
(statearr_28622_28630[(5)] = ex__14021__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28606);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28621;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14019__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28631 = state_28606;
state_28606 = G__28631;
continue;
} else {
return ret_value__14019__auto__;
}
break;
}
});
state_machine__14018__auto__ = function(state_28606){
switch(arguments.length){
case 0:
return state_machine__14018__auto____0.call(this);
case 1:
return state_machine__14018__auto____1.call(this,state_28606);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14018__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14018__auto____0;
state_machine__14018__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14018__auto____1;
return state_machine__14018__auto__;
})()
;})(switch__14017__auto__,c__14073__auto__))
})();
var state__14075__auto__ = (function (){var statearr_28623 = f__14074__auto__.call(null);
(statearr_28623[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14073__auto__);

return statearr_28623;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14075__auto__);
});})(c__14073__auto__))
);

return c__14073__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){
return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){
var c__14073__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14073__auto__){
return (function (){
var f__14074__auto__ = (function (){var switch__14017__auto__ = ((function (c__14073__auto__){
return (function (state_28705){
var state_val_28706 = (state_28705[(1)]);
if((state_val_28706 === (7))){
var inst_28687 = (state_28705[(2)]);
var state_28705__$1 = state_28705;
var statearr_28707_28730 = state_28705__$1;
(statearr_28707_28730[(2)] = inst_28687);

(statearr_28707_28730[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28706 === (1))){
var inst_28681 = cljs.core.seq.call(null,coll);
var inst_28682 = inst_28681;
var state_28705__$1 = (function (){var statearr_28708 = state_28705;
(statearr_28708[(7)] = inst_28682);

return statearr_28708;
})();
var statearr_28709_28731 = state_28705__$1;
(statearr_28709_28731[(2)] = null);

(statearr_28709_28731[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28706 === (4))){
var inst_28682 = (state_28705[(7)]);
var inst_28685 = cljs.core.first.call(null,inst_28682);
var state_28705__$1 = state_28705;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28705__$1,(7),ch,inst_28685);
} else {
if((state_val_28706 === (13))){
var inst_28699 = (state_28705[(2)]);
var state_28705__$1 = state_28705;
var statearr_28710_28732 = state_28705__$1;
(statearr_28710_28732[(2)] = inst_28699);

(statearr_28710_28732[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28706 === (6))){
var inst_28690 = (state_28705[(2)]);
var state_28705__$1 = state_28705;
if(cljs.core.truth_(inst_28690)){
var statearr_28711_28733 = state_28705__$1;
(statearr_28711_28733[(1)] = (8));

} else {
var statearr_28712_28734 = state_28705__$1;
(statearr_28712_28734[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28706 === (3))){
var inst_28703 = (state_28705[(2)]);
var state_28705__$1 = state_28705;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28705__$1,inst_28703);
} else {
if((state_val_28706 === (12))){
var state_28705__$1 = state_28705;
var statearr_28713_28735 = state_28705__$1;
(statearr_28713_28735[(2)] = null);

(statearr_28713_28735[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28706 === (2))){
var inst_28682 = (state_28705[(7)]);
var state_28705__$1 = state_28705;
if(cljs.core.truth_(inst_28682)){
var statearr_28714_28736 = state_28705__$1;
(statearr_28714_28736[(1)] = (4));

} else {
var statearr_28715_28737 = state_28705__$1;
(statearr_28715_28737[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28706 === (11))){
var inst_28696 = cljs.core.async.close_BANG_.call(null,ch);
var state_28705__$1 = state_28705;
var statearr_28716_28738 = state_28705__$1;
(statearr_28716_28738[(2)] = inst_28696);

(statearr_28716_28738[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28706 === (9))){
var state_28705__$1 = state_28705;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28717_28739 = state_28705__$1;
(statearr_28717_28739[(1)] = (11));

} else {
var statearr_28718_28740 = state_28705__$1;
(statearr_28718_28740[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28706 === (5))){
var inst_28682 = (state_28705[(7)]);
var state_28705__$1 = state_28705;
var statearr_28719_28741 = state_28705__$1;
(statearr_28719_28741[(2)] = inst_28682);

(statearr_28719_28741[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28706 === (10))){
var inst_28701 = (state_28705[(2)]);
var state_28705__$1 = state_28705;
var statearr_28720_28742 = state_28705__$1;
(statearr_28720_28742[(2)] = inst_28701);

(statearr_28720_28742[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28706 === (8))){
var inst_28682 = (state_28705[(7)]);
var inst_28692 = cljs.core.next.call(null,inst_28682);
var inst_28682__$1 = inst_28692;
var state_28705__$1 = (function (){var statearr_28721 = state_28705;
(statearr_28721[(7)] = inst_28682__$1);

return statearr_28721;
})();
var statearr_28722_28743 = state_28705__$1;
(statearr_28722_28743[(2)] = null);

(statearr_28722_28743[(1)] = (2));


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
});})(c__14073__auto__))
;
return ((function (switch__14017__auto__,c__14073__auto__){
return (function() {
var state_machine__14018__auto__ = null;
var state_machine__14018__auto____0 = (function (){
var statearr_28726 = [null,null,null,null,null,null,null,null];
(statearr_28726[(0)] = state_machine__14018__auto__);

(statearr_28726[(1)] = (1));

return statearr_28726;
});
var state_machine__14018__auto____1 = (function (state_28705){
while(true){
var ret_value__14019__auto__ = (function (){try{while(true){
var result__14020__auto__ = switch__14017__auto__.call(null,state_28705);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14020__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14020__auto__;
}
break;
}
}catch (e28727){if((e28727 instanceof Object)){
var ex__14021__auto__ = e28727;
var statearr_28728_28744 = state_28705;
(statearr_28728_28744[(5)] = ex__14021__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28705);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28727;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14019__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28745 = state_28705;
state_28705 = G__28745;
continue;
} else {
return ret_value__14019__auto__;
}
break;
}
});
state_machine__14018__auto__ = function(state_28705){
switch(arguments.length){
case 0:
return state_machine__14018__auto____0.call(this);
case 1:
return state_machine__14018__auto____1.call(this,state_28705);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14018__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14018__auto____0;
state_machine__14018__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14018__auto____1;
return state_machine__14018__auto__;
})()
;})(switch__14017__auto__,c__14073__auto__))
})();
var state__14075__auto__ = (function (){var statearr_28729 = f__14074__auto__.call(null);
(statearr_28729[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14073__auto__);

return statearr_28729;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14075__auto__);
});})(c__14073__auto__))
);

return c__14073__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

cljs.core.async.Mux = (function (){var obj28747 = {};
return obj28747;
})();

cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){
if((function (){var and__11588__auto__ = _;
if(and__11588__auto__){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else {
return and__11588__auto__;
}
})()){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__12244__auto__ = (((_ == null))?null:_);
return (function (){var or__11600__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__12244__auto__)]);
if(or__11600__auto__){
return or__11600__auto__;
} else {
var or__11600__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(or__11600__auto____$1){
return or__11600__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});


cljs.core.async.Mult = (function (){var obj28749 = {};
return obj28749;
})();

cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){
if((function (){var and__11588__auto__ = m;
if(and__11588__auto__){
return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else {
return and__11588__auto__;
}
})()){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__12244__auto__ = (((m == null))?null:m);
return (function (){var or__11600__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__12244__auto__)]);
if(or__11600__auto__){
return or__11600__auto__;
} else {
var or__11600__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(or__11600__auto____$1){
return or__11600__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});

cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){
if((function (){var and__11588__auto__ = m;
if(and__11588__auto__){
return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else {
return and__11588__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__12244__auto__ = (((m == null))?null:m);
return (function (){var or__11600__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__12244__auto__)]);
if(or__11600__auto__){
return or__11600__auto__;
} else {
var or__11600__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(or__11600__auto____$1){
return or__11600__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){
if((function (){var and__11588__auto__ = m;
if(and__11588__auto__){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else {
return and__11588__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__12244__auto__ = (((m == null))?null:m);
return (function (){var or__11600__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__12244__auto__)]);
if(or__11600__auto__){
return or__11600__auto__;
} else {
var or__11600__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(or__11600__auto____$1){
return or__11600__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});

/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* Items received when there are no taps get dropped.
* 
* If a tap puts to a closed channel, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t28971 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t28971 = (function (cs,ch,mult,meta28972){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta28972 = meta28972;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t28971.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t28971.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t28971.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t28971.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t28971.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t28971.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t28971.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_28973){
var self__ = this;
var _28973__$1 = this;
return self__.meta28972;
});})(cs))
;

cljs.core.async.t28971.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_28973,meta28972__$1){
var self__ = this;
var _28973__$1 = this;
return (new cljs.core.async.t28971(self__.cs,self__.ch,self__.mult,meta28972__$1));
});})(cs))
;

cljs.core.async.t28971.cljs$lang$type = true;

cljs.core.async.t28971.cljs$lang$ctorStr = "cljs.core.async/t28971";

cljs.core.async.t28971.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__12187__auto__,writer__12188__auto__,opt__12189__auto__){
return cljs.core._write.call(null,writer__12188__auto__,"cljs.core.async/t28971");
});})(cs))
;

cljs.core.async.__GT_t28971 = ((function (cs){
return (function __GT_t28971(cs__$1,ch__$1,mult__$1,meta28972){
return (new cljs.core.async.t28971(cs__$1,ch__$1,mult__$1,meta28972));
});})(cs))
;

}

return (new cljs.core.async.t28971(cs,ch,mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__14073__auto___29192 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14073__auto___29192,cs,m,dchan,dctr,done){
return (function (){
var f__14074__auto__ = (function (){var switch__14017__auto__ = ((function (c__14073__auto___29192,cs,m,dchan,dctr,done){
return (function (state_29104){
var state_val_29105 = (state_29104[(1)]);
if((state_val_29105 === (7))){
var inst_29100 = (state_29104[(2)]);
var state_29104__$1 = state_29104;
var statearr_29106_29193 = state_29104__$1;
(statearr_29106_29193[(2)] = inst_29100);

(statearr_29106_29193[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29105 === (20))){
var inst_29005 = (state_29104[(7)]);
var inst_29015 = cljs.core.first.call(null,inst_29005);
var inst_29016 = cljs.core.nth.call(null,inst_29015,(0),null);
var inst_29017 = cljs.core.nth.call(null,inst_29015,(1),null);
var state_29104__$1 = (function (){var statearr_29107 = state_29104;
(statearr_29107[(8)] = inst_29016);

return statearr_29107;
})();
if(cljs.core.truth_(inst_29017)){
var statearr_29108_29194 = state_29104__$1;
(statearr_29108_29194[(1)] = (22));

} else {
var statearr_29109_29195 = state_29104__$1;
(statearr_29109_29195[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29105 === (27))){
var inst_29045 = (state_29104[(9)]);
var inst_28976 = (state_29104[(10)]);
var inst_29047 = (state_29104[(11)]);
var inst_29052 = (state_29104[(12)]);
var inst_29052__$1 = cljs.core._nth.call(null,inst_29045,inst_29047);
var inst_29053 = cljs.core.async.put_BANG_.call(null,inst_29052__$1,inst_28976,done);
var state_29104__$1 = (function (){var statearr_29110 = state_29104;
(statearr_29110[(12)] = inst_29052__$1);

return statearr_29110;
})();
if(cljs.core.truth_(inst_29053)){
var statearr_29111_29196 = state_29104__$1;
(statearr_29111_29196[(1)] = (30));

} else {
var statearr_29112_29197 = state_29104__$1;
(statearr_29112_29197[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29105 === (1))){
var state_29104__$1 = state_29104;
var statearr_29113_29198 = state_29104__$1;
(statearr_29113_29198[(2)] = null);

(statearr_29113_29198[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29105 === (24))){
var inst_29005 = (state_29104[(7)]);
var inst_29022 = (state_29104[(2)]);
var inst_29023 = cljs.core.next.call(null,inst_29005);
var inst_28985 = inst_29023;
var inst_28986 = null;
var inst_28987 = (0);
var inst_28988 = (0);
var state_29104__$1 = (function (){var statearr_29114 = state_29104;
(statearr_29114[(13)] = inst_28988);

(statearr_29114[(14)] = inst_29022);

(statearr_29114[(15)] = inst_28986);

(statearr_29114[(16)] = inst_28987);

(statearr_29114[(17)] = inst_28985);

return statearr_29114;
})();
var statearr_29115_29199 = state_29104__$1;
(statearr_29115_29199[(2)] = null);

(statearr_29115_29199[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29105 === (39))){
var state_29104__$1 = state_29104;
var statearr_29119_29200 = state_29104__$1;
(statearr_29119_29200[(2)] = null);

(statearr_29119_29200[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29105 === (4))){
var inst_28976 = (state_29104[(10)]);
var inst_28976__$1 = (state_29104[(2)]);
var inst_28977 = (inst_28976__$1 == null);
var state_29104__$1 = (function (){var statearr_29120 = state_29104;
(statearr_29120[(10)] = inst_28976__$1);

return statearr_29120;
})();
if(cljs.core.truth_(inst_28977)){
var statearr_29121_29201 = state_29104__$1;
(statearr_29121_29201[(1)] = (5));

} else {
var statearr_29122_29202 = state_29104__$1;
(statearr_29122_29202[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29105 === (15))){
var inst_28988 = (state_29104[(13)]);
var inst_28986 = (state_29104[(15)]);
var inst_28987 = (state_29104[(16)]);
var inst_28985 = (state_29104[(17)]);
var inst_29001 = (state_29104[(2)]);
var inst_29002 = (inst_28988 + (1));
var tmp29116 = inst_28986;
var tmp29117 = inst_28987;
var tmp29118 = inst_28985;
var inst_28985__$1 = tmp29118;
var inst_28986__$1 = tmp29116;
var inst_28987__$1 = tmp29117;
var inst_28988__$1 = inst_29002;
var state_29104__$1 = (function (){var statearr_29123 = state_29104;
(statearr_29123[(18)] = inst_29001);

(statearr_29123[(13)] = inst_28988__$1);

(statearr_29123[(15)] = inst_28986__$1);

(statearr_29123[(16)] = inst_28987__$1);

(statearr_29123[(17)] = inst_28985__$1);

return statearr_29123;
})();
var statearr_29124_29203 = state_29104__$1;
(statearr_29124_29203[(2)] = null);

(statearr_29124_29203[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29105 === (21))){
var inst_29026 = (state_29104[(2)]);
var state_29104__$1 = state_29104;
var statearr_29128_29204 = state_29104__$1;
(statearr_29128_29204[(2)] = inst_29026);

(statearr_29128_29204[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29105 === (31))){
var inst_29052 = (state_29104[(12)]);
var inst_29056 = done.call(null,null);
var inst_29057 = cljs.core.async.untap_STAR_.call(null,m,inst_29052);
var state_29104__$1 = (function (){var statearr_29129 = state_29104;
(statearr_29129[(19)] = inst_29056);

return statearr_29129;
})();
var statearr_29130_29205 = state_29104__$1;
(statearr_29130_29205[(2)] = inst_29057);

(statearr_29130_29205[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29105 === (32))){
var inst_29046 = (state_29104[(20)]);
var inst_29045 = (state_29104[(9)]);
var inst_29044 = (state_29104[(21)]);
var inst_29047 = (state_29104[(11)]);
var inst_29059 = (state_29104[(2)]);
var inst_29060 = (inst_29047 + (1));
var tmp29125 = inst_29046;
var tmp29126 = inst_29045;
var tmp29127 = inst_29044;
var inst_29044__$1 = tmp29127;
var inst_29045__$1 = tmp29126;
var inst_29046__$1 = tmp29125;
var inst_29047__$1 = inst_29060;
var state_29104__$1 = (function (){var statearr_29131 = state_29104;
(statearr_29131[(20)] = inst_29046__$1);

(statearr_29131[(9)] = inst_29045__$1);

(statearr_29131[(21)] = inst_29044__$1);

(statearr_29131[(11)] = inst_29047__$1);

(statearr_29131[(22)] = inst_29059);

return statearr_29131;
})();
var statearr_29132_29206 = state_29104__$1;
(statearr_29132_29206[(2)] = null);

(statearr_29132_29206[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29105 === (40))){
var inst_29072 = (state_29104[(23)]);
var inst_29076 = done.call(null,null);
var inst_29077 = cljs.core.async.untap_STAR_.call(null,m,inst_29072);
var state_29104__$1 = (function (){var statearr_29133 = state_29104;
(statearr_29133[(24)] = inst_29076);

return statearr_29133;
})();
var statearr_29134_29207 = state_29104__$1;
(statearr_29134_29207[(2)] = inst_29077);

(statearr_29134_29207[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29105 === (33))){
var inst_29063 = (state_29104[(25)]);
var inst_29065 = cljs.core.chunked_seq_QMARK_.call(null,inst_29063);
var state_29104__$1 = state_29104;
if(inst_29065){
var statearr_29135_29208 = state_29104__$1;
(statearr_29135_29208[(1)] = (36));

} else {
var statearr_29136_29209 = state_29104__$1;
(statearr_29136_29209[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29105 === (13))){
var inst_28995 = (state_29104[(26)]);
var inst_28998 = cljs.core.async.close_BANG_.call(null,inst_28995);
var state_29104__$1 = state_29104;
var statearr_29137_29210 = state_29104__$1;
(statearr_29137_29210[(2)] = inst_28998);

(statearr_29137_29210[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29105 === (22))){
var inst_29016 = (state_29104[(8)]);
var inst_29019 = cljs.core.async.close_BANG_.call(null,inst_29016);
var state_29104__$1 = state_29104;
var statearr_29138_29211 = state_29104__$1;
(statearr_29138_29211[(2)] = inst_29019);

(statearr_29138_29211[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29105 === (36))){
var inst_29063 = (state_29104[(25)]);
var inst_29067 = cljs.core.chunk_first.call(null,inst_29063);
var inst_29068 = cljs.core.chunk_rest.call(null,inst_29063);
var inst_29069 = cljs.core.count.call(null,inst_29067);
var inst_29044 = inst_29068;
var inst_29045 = inst_29067;
var inst_29046 = inst_29069;
var inst_29047 = (0);
var state_29104__$1 = (function (){var statearr_29139 = state_29104;
(statearr_29139[(20)] = inst_29046);

(statearr_29139[(9)] = inst_29045);

(statearr_29139[(21)] = inst_29044);

(statearr_29139[(11)] = inst_29047);

return statearr_29139;
})();
var statearr_29140_29212 = state_29104__$1;
(statearr_29140_29212[(2)] = null);

(statearr_29140_29212[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29105 === (41))){
var inst_29063 = (state_29104[(25)]);
var inst_29079 = (state_29104[(2)]);
var inst_29080 = cljs.core.next.call(null,inst_29063);
var inst_29044 = inst_29080;
var inst_29045 = null;
var inst_29046 = (0);
var inst_29047 = (0);
var state_29104__$1 = (function (){var statearr_29141 = state_29104;
(statearr_29141[(20)] = inst_29046);

(statearr_29141[(9)] = inst_29045);

(statearr_29141[(21)] = inst_29044);

(statearr_29141[(11)] = inst_29047);

(statearr_29141[(27)] = inst_29079);

return statearr_29141;
})();
var statearr_29142_29213 = state_29104__$1;
(statearr_29142_29213[(2)] = null);

(statearr_29142_29213[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29105 === (43))){
var state_29104__$1 = state_29104;
var statearr_29143_29214 = state_29104__$1;
(statearr_29143_29214[(2)] = null);

(statearr_29143_29214[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29105 === (29))){
var inst_29088 = (state_29104[(2)]);
var state_29104__$1 = state_29104;
var statearr_29144_29215 = state_29104__$1;
(statearr_29144_29215[(2)] = inst_29088);

(statearr_29144_29215[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29105 === (44))){
var inst_29097 = (state_29104[(2)]);
var state_29104__$1 = (function (){var statearr_29145 = state_29104;
(statearr_29145[(28)] = inst_29097);

return statearr_29145;
})();
var statearr_29146_29216 = state_29104__$1;
(statearr_29146_29216[(2)] = null);

(statearr_29146_29216[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29105 === (6))){
var inst_29036 = (state_29104[(29)]);
var inst_29035 = cljs.core.deref.call(null,cs);
var inst_29036__$1 = cljs.core.keys.call(null,inst_29035);
var inst_29037 = cljs.core.count.call(null,inst_29036__$1);
var inst_29038 = cljs.core.reset_BANG_.call(null,dctr,inst_29037);
var inst_29043 = cljs.core.seq.call(null,inst_29036__$1);
var inst_29044 = inst_29043;
var inst_29045 = null;
var inst_29046 = (0);
var inst_29047 = (0);
var state_29104__$1 = (function (){var statearr_29147 = state_29104;
(statearr_29147[(20)] = inst_29046);

(statearr_29147[(9)] = inst_29045);

(statearr_29147[(21)] = inst_29044);

(statearr_29147[(11)] = inst_29047);

(statearr_29147[(29)] = inst_29036__$1);

(statearr_29147[(30)] = inst_29038);

return statearr_29147;
})();
var statearr_29148_29217 = state_29104__$1;
(statearr_29148_29217[(2)] = null);

(statearr_29148_29217[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29105 === (28))){
var inst_29044 = (state_29104[(21)]);
var inst_29063 = (state_29104[(25)]);
var inst_29063__$1 = cljs.core.seq.call(null,inst_29044);
var state_29104__$1 = (function (){var statearr_29149 = state_29104;
(statearr_29149[(25)] = inst_29063__$1);

return statearr_29149;
})();
if(inst_29063__$1){
var statearr_29150_29218 = state_29104__$1;
(statearr_29150_29218[(1)] = (33));

} else {
var statearr_29151_29219 = state_29104__$1;
(statearr_29151_29219[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29105 === (25))){
var inst_29046 = (state_29104[(20)]);
var inst_29047 = (state_29104[(11)]);
var inst_29049 = (inst_29047 < inst_29046);
var inst_29050 = inst_29049;
var state_29104__$1 = state_29104;
if(cljs.core.truth_(inst_29050)){
var statearr_29152_29220 = state_29104__$1;
(statearr_29152_29220[(1)] = (27));

} else {
var statearr_29153_29221 = state_29104__$1;
(statearr_29153_29221[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29105 === (34))){
var state_29104__$1 = state_29104;
var statearr_29154_29222 = state_29104__$1;
(statearr_29154_29222[(2)] = null);

(statearr_29154_29222[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29105 === (17))){
var state_29104__$1 = state_29104;
var statearr_29155_29223 = state_29104__$1;
(statearr_29155_29223[(2)] = null);

(statearr_29155_29223[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29105 === (3))){
var inst_29102 = (state_29104[(2)]);
var state_29104__$1 = state_29104;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29104__$1,inst_29102);
} else {
if((state_val_29105 === (12))){
var inst_29031 = (state_29104[(2)]);
var state_29104__$1 = state_29104;
var statearr_29156_29224 = state_29104__$1;
(statearr_29156_29224[(2)] = inst_29031);

(statearr_29156_29224[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29105 === (2))){
var state_29104__$1 = state_29104;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29104__$1,(4),ch);
} else {
if((state_val_29105 === (23))){
var state_29104__$1 = state_29104;
var statearr_29157_29225 = state_29104__$1;
(statearr_29157_29225[(2)] = null);

(statearr_29157_29225[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29105 === (35))){
var inst_29086 = (state_29104[(2)]);
var state_29104__$1 = state_29104;
var statearr_29158_29226 = state_29104__$1;
(statearr_29158_29226[(2)] = inst_29086);

(statearr_29158_29226[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29105 === (19))){
var inst_29005 = (state_29104[(7)]);
var inst_29009 = cljs.core.chunk_first.call(null,inst_29005);
var inst_29010 = cljs.core.chunk_rest.call(null,inst_29005);
var inst_29011 = cljs.core.count.call(null,inst_29009);
var inst_28985 = inst_29010;
var inst_28986 = inst_29009;
var inst_28987 = inst_29011;
var inst_28988 = (0);
var state_29104__$1 = (function (){var statearr_29159 = state_29104;
(statearr_29159[(13)] = inst_28988);

(statearr_29159[(15)] = inst_28986);

(statearr_29159[(16)] = inst_28987);

(statearr_29159[(17)] = inst_28985);

return statearr_29159;
})();
var statearr_29160_29227 = state_29104__$1;
(statearr_29160_29227[(2)] = null);

(statearr_29160_29227[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29105 === (11))){
var inst_29005 = (state_29104[(7)]);
var inst_28985 = (state_29104[(17)]);
var inst_29005__$1 = cljs.core.seq.call(null,inst_28985);
var state_29104__$1 = (function (){var statearr_29161 = state_29104;
(statearr_29161[(7)] = inst_29005__$1);

return statearr_29161;
})();
if(inst_29005__$1){
var statearr_29162_29228 = state_29104__$1;
(statearr_29162_29228[(1)] = (16));

} else {
var statearr_29163_29229 = state_29104__$1;
(statearr_29163_29229[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29105 === (9))){
var inst_29033 = (state_29104[(2)]);
var state_29104__$1 = state_29104;
var statearr_29164_29230 = state_29104__$1;
(statearr_29164_29230[(2)] = inst_29033);

(statearr_29164_29230[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29105 === (5))){
var inst_28983 = cljs.core.deref.call(null,cs);
var inst_28984 = cljs.core.seq.call(null,inst_28983);
var inst_28985 = inst_28984;
var inst_28986 = null;
var inst_28987 = (0);
var inst_28988 = (0);
var state_29104__$1 = (function (){var statearr_29165 = state_29104;
(statearr_29165[(13)] = inst_28988);

(statearr_29165[(15)] = inst_28986);

(statearr_29165[(16)] = inst_28987);

(statearr_29165[(17)] = inst_28985);

return statearr_29165;
})();
var statearr_29166_29231 = state_29104__$1;
(statearr_29166_29231[(2)] = null);

(statearr_29166_29231[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29105 === (14))){
var state_29104__$1 = state_29104;
var statearr_29167_29232 = state_29104__$1;
(statearr_29167_29232[(2)] = null);

(statearr_29167_29232[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29105 === (45))){
var inst_29094 = (state_29104[(2)]);
var state_29104__$1 = state_29104;
var statearr_29168_29233 = state_29104__$1;
(statearr_29168_29233[(2)] = inst_29094);

(statearr_29168_29233[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29105 === (26))){
var inst_29036 = (state_29104[(29)]);
var inst_29090 = (state_29104[(2)]);
var inst_29091 = cljs.core.seq.call(null,inst_29036);
var state_29104__$1 = (function (){var statearr_29169 = state_29104;
(statearr_29169[(31)] = inst_29090);

return statearr_29169;
})();
if(inst_29091){
var statearr_29170_29234 = state_29104__$1;
(statearr_29170_29234[(1)] = (42));

} else {
var statearr_29171_29235 = state_29104__$1;
(statearr_29171_29235[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29105 === (16))){
var inst_29005 = (state_29104[(7)]);
var inst_29007 = cljs.core.chunked_seq_QMARK_.call(null,inst_29005);
var state_29104__$1 = state_29104;
if(inst_29007){
var statearr_29172_29236 = state_29104__$1;
(statearr_29172_29236[(1)] = (19));

} else {
var statearr_29173_29237 = state_29104__$1;
(statearr_29173_29237[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29105 === (38))){
var inst_29083 = (state_29104[(2)]);
var state_29104__$1 = state_29104;
var statearr_29174_29238 = state_29104__$1;
(statearr_29174_29238[(2)] = inst_29083);

(statearr_29174_29238[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29105 === (30))){
var state_29104__$1 = state_29104;
var statearr_29175_29239 = state_29104__$1;
(statearr_29175_29239[(2)] = null);

(statearr_29175_29239[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29105 === (10))){
var inst_28988 = (state_29104[(13)]);
var inst_28986 = (state_29104[(15)]);
var inst_28994 = cljs.core._nth.call(null,inst_28986,inst_28988);
var inst_28995 = cljs.core.nth.call(null,inst_28994,(0),null);
var inst_28996 = cljs.core.nth.call(null,inst_28994,(1),null);
var state_29104__$1 = (function (){var statearr_29176 = state_29104;
(statearr_29176[(26)] = inst_28995);

return statearr_29176;
})();
if(cljs.core.truth_(inst_28996)){
var statearr_29177_29240 = state_29104__$1;
(statearr_29177_29240[(1)] = (13));

} else {
var statearr_29178_29241 = state_29104__$1;
(statearr_29178_29241[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29105 === (18))){
var inst_29029 = (state_29104[(2)]);
var state_29104__$1 = state_29104;
var statearr_29179_29242 = state_29104__$1;
(statearr_29179_29242[(2)] = inst_29029);

(statearr_29179_29242[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29105 === (42))){
var state_29104__$1 = state_29104;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29104__$1,(45),dchan);
} else {
if((state_val_29105 === (37))){
var inst_28976 = (state_29104[(10)]);
var inst_29063 = (state_29104[(25)]);
var inst_29072 = (state_29104[(23)]);
var inst_29072__$1 = cljs.core.first.call(null,inst_29063);
var inst_29073 = cljs.core.async.put_BANG_.call(null,inst_29072__$1,inst_28976,done);
var state_29104__$1 = (function (){var statearr_29180 = state_29104;
(statearr_29180[(23)] = inst_29072__$1);

return statearr_29180;
})();
if(cljs.core.truth_(inst_29073)){
var statearr_29181_29243 = state_29104__$1;
(statearr_29181_29243[(1)] = (39));

} else {
var statearr_29182_29244 = state_29104__$1;
(statearr_29182_29244[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29105 === (8))){
var inst_28988 = (state_29104[(13)]);
var inst_28987 = (state_29104[(16)]);
var inst_28990 = (inst_28988 < inst_28987);
var inst_28991 = inst_28990;
var state_29104__$1 = state_29104;
if(cljs.core.truth_(inst_28991)){
var statearr_29183_29245 = state_29104__$1;
(statearr_29183_29245[(1)] = (10));

} else {
var statearr_29184_29246 = state_29104__$1;
(statearr_29184_29246[(1)] = (11));

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
}
}
}
}
}
}
}
}
});})(c__14073__auto___29192,cs,m,dchan,dctr,done))
;
return ((function (switch__14017__auto__,c__14073__auto___29192,cs,m,dchan,dctr,done){
return (function() {
var state_machine__14018__auto__ = null;
var state_machine__14018__auto____0 = (function (){
var statearr_29188 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29188[(0)] = state_machine__14018__auto__);

(statearr_29188[(1)] = (1));

return statearr_29188;
});
var state_machine__14018__auto____1 = (function (state_29104){
while(true){
var ret_value__14019__auto__ = (function (){try{while(true){
var result__14020__auto__ = switch__14017__auto__.call(null,state_29104);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14020__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14020__auto__;
}
break;
}
}catch (e29189){if((e29189 instanceof Object)){
var ex__14021__auto__ = e29189;
var statearr_29190_29247 = state_29104;
(statearr_29190_29247[(5)] = ex__14021__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29104);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29189;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14019__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29248 = state_29104;
state_29104 = G__29248;
continue;
} else {
return ret_value__14019__auto__;
}
break;
}
});
state_machine__14018__auto__ = function(state_29104){
switch(arguments.length){
case 0:
return state_machine__14018__auto____0.call(this);
case 1:
return state_machine__14018__auto____1.call(this,state_29104);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14018__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14018__auto____0;
state_machine__14018__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14018__auto____1;
return state_machine__14018__auto__;
})()
;})(switch__14017__auto__,c__14073__auto___29192,cs,m,dchan,dctr,done))
})();
var state__14075__auto__ = (function (){var statearr_29191 = f__14074__auto__.call(null);
(statearr_29191[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14073__auto___29192);

return statearr_29191;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14075__auto__);
});})(c__14073__auto___29192,cs,m,dchan,dctr,done))
);


return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){
return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

cljs.core.async.Mix = (function (){var obj29250 = {};
return obj29250;
})();

cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){
if((function (){var and__11588__auto__ = m;
if(and__11588__auto__){
return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else {
return and__11588__auto__;
}
})()){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__12244__auto__ = (((m == null))?null:m);
return (function (){var or__11600__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__12244__auto__)]);
if(or__11600__auto__){
return or__11600__auto__;
} else {
var or__11600__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(or__11600__auto____$1){
return or__11600__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){
if((function (){var and__11588__auto__ = m;
if(and__11588__auto__){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else {
return and__11588__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__12244__auto__ = (((m == null))?null:m);
return (function (){var or__11600__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__12244__auto__)]);
if(or__11600__auto__){
return or__11600__auto__;
} else {
var or__11600__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(or__11600__auto____$1){
return or__11600__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){
if((function (){var and__11588__auto__ = m;
if(and__11588__auto__){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else {
return and__11588__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__12244__auto__ = (((m == null))?null:m);
return (function (){var or__11600__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__12244__auto__)]);
if(or__11600__auto__){
return or__11600__auto__;
} else {
var or__11600__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(or__11600__auto____$1){
return or__11600__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});

cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){
if((function (){var and__11588__auto__ = m;
if(and__11588__auto__){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else {
return and__11588__auto__;
}
})()){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__12244__auto__ = (((m == null))?null:m);
return (function (){var or__11600__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__12244__auto__)]);
if(or__11600__auto__){
return or__11600__auto__;
} else {
var or__11600__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(or__11600__auto____$1){
return or__11600__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});

cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){
if((function (){var and__11588__auto__ = m;
if(and__11588__auto__){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else {
return and__11588__auto__;
}
})()){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__12244__auto__ = (((m == null))?null:m);
return (function (){var or__11600__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__12244__auto__)]);
if(or__11600__auto__){
return or__11600__auto__;
} else {
var or__11600__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(or__11600__auto____$1){
return or__11600__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});

/**
* @param {...*} var_args
*/
cljs.core.async.ioc_alts_BANG_ = (function() { 
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__29251){
var map__29256 = p__29251;
var map__29256__$1 = ((cljs.core.seq_QMARK_.call(null,map__29256))?cljs.core.apply.call(null,cljs.core.hash_map,map__29256):map__29256);
var opts = map__29256__$1;
var statearr_29257_29260 = state;
(statearr_29257_29260[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__29256,map__29256__$1,opts){
return (function (val){
var statearr_29258_29261 = state;
(statearr_29258_29261[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__29256,map__29256__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_29259_29262 = state;
(statearr_29259_29262[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__29251 = null;
if (arguments.length > 3) {
var G__29263__i = 0, G__29263__a = new Array(arguments.length -  3);
while (G__29263__i < G__29263__a.length) {G__29263__a[G__29263__i] = arguments[G__29263__i + 3]; ++G__29263__i;}
  p__29251 = new cljs.core.IndexedSeq(G__29263__a,0);
} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__29251);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__29264){
var state = cljs.core.first(arglist__29264);
arglist__29264 = cljs.core.next(arglist__29264);
var cont_block = cljs.core.first(arglist__29264);
arglist__29264 = cljs.core.next(arglist__29264);
var ports = cljs.core.first(arglist__29264);
var p__29251 = cljs.core.rest(arglist__29264);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__29251);
});
ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = ioc_alts_BANG___delegate;
return ioc_alts_BANG_;
})()
;
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t29384 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t29384 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta29385){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta29385 = meta29385;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t29384.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t29384.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t29384.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t29384.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t29384.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t29384.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t29384.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t29384.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t29384.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_29386){
var self__ = this;
var _29386__$1 = this;
return self__.meta29385;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t29384.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_29386,meta29385__$1){
var self__ = this;
var _29386__$1 = this;
return (new cljs.core.async.t29384(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta29385__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t29384.cljs$lang$type = true;

cljs.core.async.t29384.cljs$lang$ctorStr = "cljs.core.async/t29384";

cljs.core.async.t29384.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__12187__auto__,writer__12188__auto__,opt__12189__auto__){
return cljs.core._write.call(null,writer__12188__auto__,"cljs.core.async/t29384");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t29384 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t29384(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta29385){
return (new cljs.core.async.t29384(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta29385));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t29384(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__14073__auto___29503 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14073__auto___29503,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__14074__auto__ = (function (){var switch__14017__auto__ = ((function (c__14073__auto___29503,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_29456){
var state_val_29457 = (state_29456[(1)]);
if((state_val_29457 === (7))){
var inst_29400 = (state_29456[(7)]);
var inst_29405 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29400);
var state_29456__$1 = state_29456;
var statearr_29458_29504 = state_29456__$1;
(statearr_29458_29504[(2)] = inst_29405);

(statearr_29458_29504[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29457 === (20))){
var inst_29415 = (state_29456[(8)]);
var state_29456__$1 = state_29456;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29456__$1,(23),out,inst_29415);
} else {
if((state_val_29457 === (1))){
var inst_29390 = (state_29456[(9)]);
var inst_29390__$1 = calc_state.call(null);
var inst_29391 = cljs.core.seq_QMARK_.call(null,inst_29390__$1);
var state_29456__$1 = (function (){var statearr_29459 = state_29456;
(statearr_29459[(9)] = inst_29390__$1);

return statearr_29459;
})();
if(inst_29391){
var statearr_29460_29505 = state_29456__$1;
(statearr_29460_29505[(1)] = (2));

} else {
var statearr_29461_29506 = state_29456__$1;
(statearr_29461_29506[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29457 === (24))){
var inst_29408 = (state_29456[(10)]);
var inst_29400 = inst_29408;
var state_29456__$1 = (function (){var statearr_29462 = state_29456;
(statearr_29462[(7)] = inst_29400);

return statearr_29462;
})();
var statearr_29463_29507 = state_29456__$1;
(statearr_29463_29507[(2)] = null);

(statearr_29463_29507[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29457 === (4))){
var inst_29390 = (state_29456[(9)]);
var inst_29396 = (state_29456[(2)]);
var inst_29397 = cljs.core.get.call(null,inst_29396,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_29398 = cljs.core.get.call(null,inst_29396,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_29399 = cljs.core.get.call(null,inst_29396,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_29400 = inst_29390;
var state_29456__$1 = (function (){var statearr_29464 = state_29456;
(statearr_29464[(11)] = inst_29397);

(statearr_29464[(7)] = inst_29400);

(statearr_29464[(12)] = inst_29398);

(statearr_29464[(13)] = inst_29399);

return statearr_29464;
})();
var statearr_29465_29508 = state_29456__$1;
(statearr_29465_29508[(2)] = null);

(statearr_29465_29508[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29457 === (15))){
var state_29456__$1 = state_29456;
var statearr_29466_29509 = state_29456__$1;
(statearr_29466_29509[(2)] = null);

(statearr_29466_29509[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29457 === (21))){
var inst_29408 = (state_29456[(10)]);
var inst_29400 = inst_29408;
var state_29456__$1 = (function (){var statearr_29467 = state_29456;
(statearr_29467[(7)] = inst_29400);

return statearr_29467;
})();
var statearr_29468_29510 = state_29456__$1;
(statearr_29468_29510[(2)] = null);

(statearr_29468_29510[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29457 === (13))){
var inst_29452 = (state_29456[(2)]);
var state_29456__$1 = state_29456;
var statearr_29469_29511 = state_29456__$1;
(statearr_29469_29511[(2)] = inst_29452);

(statearr_29469_29511[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29457 === (22))){
var inst_29450 = (state_29456[(2)]);
var state_29456__$1 = state_29456;
var statearr_29470_29512 = state_29456__$1;
(statearr_29470_29512[(2)] = inst_29450);

(statearr_29470_29512[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29457 === (6))){
var inst_29454 = (state_29456[(2)]);
var state_29456__$1 = state_29456;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29456__$1,inst_29454);
} else {
if((state_val_29457 === (25))){
var state_29456__$1 = state_29456;
var statearr_29471_29513 = state_29456__$1;
(statearr_29471_29513[(2)] = null);

(statearr_29471_29513[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29457 === (17))){
var inst_29430 = (state_29456[(14)]);
var state_29456__$1 = state_29456;
var statearr_29472_29514 = state_29456__$1;
(statearr_29472_29514[(2)] = inst_29430);

(statearr_29472_29514[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29457 === (3))){
var inst_29390 = (state_29456[(9)]);
var state_29456__$1 = state_29456;
var statearr_29473_29515 = state_29456__$1;
(statearr_29473_29515[(2)] = inst_29390);

(statearr_29473_29515[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29457 === (12))){
var inst_29411 = (state_29456[(15)]);
var inst_29430 = (state_29456[(14)]);
var inst_29416 = (state_29456[(16)]);
var inst_29430__$1 = inst_29411.call(null,inst_29416);
var state_29456__$1 = (function (){var statearr_29474 = state_29456;
(statearr_29474[(14)] = inst_29430__$1);

return statearr_29474;
})();
if(cljs.core.truth_(inst_29430__$1)){
var statearr_29475_29516 = state_29456__$1;
(statearr_29475_29516[(1)] = (17));

} else {
var statearr_29476_29517 = state_29456__$1;
(statearr_29476_29517[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29457 === (2))){
var inst_29390 = (state_29456[(9)]);
var inst_29393 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29390);
var state_29456__$1 = state_29456;
var statearr_29477_29518 = state_29456__$1;
(statearr_29477_29518[(2)] = inst_29393);

(statearr_29477_29518[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29457 === (23))){
var inst_29441 = (state_29456[(2)]);
var state_29456__$1 = state_29456;
if(cljs.core.truth_(inst_29441)){
var statearr_29478_29519 = state_29456__$1;
(statearr_29478_29519[(1)] = (24));

} else {
var statearr_29479_29520 = state_29456__$1;
(statearr_29479_29520[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29457 === (19))){
var inst_29438 = (state_29456[(2)]);
var state_29456__$1 = state_29456;
if(cljs.core.truth_(inst_29438)){
var statearr_29480_29521 = state_29456__$1;
(statearr_29480_29521[(1)] = (20));

} else {
var statearr_29481_29522 = state_29456__$1;
(statearr_29481_29522[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29457 === (11))){
var inst_29415 = (state_29456[(8)]);
var inst_29421 = (inst_29415 == null);
var state_29456__$1 = state_29456;
if(cljs.core.truth_(inst_29421)){
var statearr_29482_29523 = state_29456__$1;
(statearr_29482_29523[(1)] = (14));

} else {
var statearr_29483_29524 = state_29456__$1;
(statearr_29483_29524[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29457 === (9))){
var inst_29408 = (state_29456[(10)]);
var inst_29408__$1 = (state_29456[(2)]);
var inst_29409 = cljs.core.get.call(null,inst_29408__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_29410 = cljs.core.get.call(null,inst_29408__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_29411 = cljs.core.get.call(null,inst_29408__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_29456__$1 = (function (){var statearr_29484 = state_29456;
(statearr_29484[(17)] = inst_29410);

(statearr_29484[(10)] = inst_29408__$1);

(statearr_29484[(15)] = inst_29411);

return statearr_29484;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_29456__$1,(10),inst_29409);
} else {
if((state_val_29457 === (5))){
var inst_29400 = (state_29456[(7)]);
var inst_29403 = cljs.core.seq_QMARK_.call(null,inst_29400);
var state_29456__$1 = state_29456;
if(inst_29403){
var statearr_29485_29525 = state_29456__$1;
(statearr_29485_29525[(1)] = (7));

} else {
var statearr_29486_29526 = state_29456__$1;
(statearr_29486_29526[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29457 === (14))){
var inst_29416 = (state_29456[(16)]);
var inst_29423 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_29416);
var state_29456__$1 = state_29456;
var statearr_29487_29527 = state_29456__$1;
(statearr_29487_29527[(2)] = inst_29423);

(statearr_29487_29527[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29457 === (26))){
var inst_29446 = (state_29456[(2)]);
var state_29456__$1 = state_29456;
var statearr_29488_29528 = state_29456__$1;
(statearr_29488_29528[(2)] = inst_29446);

(statearr_29488_29528[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29457 === (16))){
var inst_29426 = (state_29456[(2)]);
var inst_29427 = calc_state.call(null);
var inst_29400 = inst_29427;
var state_29456__$1 = (function (){var statearr_29489 = state_29456;
(statearr_29489[(18)] = inst_29426);

(statearr_29489[(7)] = inst_29400);

return statearr_29489;
})();
var statearr_29490_29529 = state_29456__$1;
(statearr_29490_29529[(2)] = null);

(statearr_29490_29529[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29457 === (10))){
var inst_29416 = (state_29456[(16)]);
var inst_29415 = (state_29456[(8)]);
var inst_29414 = (state_29456[(2)]);
var inst_29415__$1 = cljs.core.nth.call(null,inst_29414,(0),null);
var inst_29416__$1 = cljs.core.nth.call(null,inst_29414,(1),null);
var inst_29417 = (inst_29415__$1 == null);
var inst_29418 = cljs.core._EQ_.call(null,inst_29416__$1,change);
var inst_29419 = (inst_29417) || (inst_29418);
var state_29456__$1 = (function (){var statearr_29491 = state_29456;
(statearr_29491[(16)] = inst_29416__$1);

(statearr_29491[(8)] = inst_29415__$1);

return statearr_29491;
})();
if(cljs.core.truth_(inst_29419)){
var statearr_29492_29530 = state_29456__$1;
(statearr_29492_29530[(1)] = (11));

} else {
var statearr_29493_29531 = state_29456__$1;
(statearr_29493_29531[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29457 === (18))){
var inst_29410 = (state_29456[(17)]);
var inst_29411 = (state_29456[(15)]);
var inst_29416 = (state_29456[(16)]);
var inst_29433 = cljs.core.empty_QMARK_.call(null,inst_29411);
var inst_29434 = inst_29410.call(null,inst_29416);
var inst_29435 = cljs.core.not.call(null,inst_29434);
var inst_29436 = (inst_29433) && (inst_29435);
var state_29456__$1 = state_29456;
var statearr_29494_29532 = state_29456__$1;
(statearr_29494_29532[(2)] = inst_29436);

(statearr_29494_29532[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29457 === (8))){
var inst_29400 = (state_29456[(7)]);
var state_29456__$1 = state_29456;
var statearr_29495_29533 = state_29456__$1;
(statearr_29495_29533[(2)] = inst_29400);

(statearr_29495_29533[(1)] = (9));


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
});})(c__14073__auto___29503,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__14017__auto__,c__14073__auto___29503,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__14018__auto__ = null;
var state_machine__14018__auto____0 = (function (){
var statearr_29499 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29499[(0)] = state_machine__14018__auto__);

(statearr_29499[(1)] = (1));

return statearr_29499;
});
var state_machine__14018__auto____1 = (function (state_29456){
while(true){
var ret_value__14019__auto__ = (function (){try{while(true){
var result__14020__auto__ = switch__14017__auto__.call(null,state_29456);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14020__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14020__auto__;
}
break;
}
}catch (e29500){if((e29500 instanceof Object)){
var ex__14021__auto__ = e29500;
var statearr_29501_29534 = state_29456;
(statearr_29501_29534[(5)] = ex__14021__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29456);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29500;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14019__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29535 = state_29456;
state_29456 = G__29535;
continue;
} else {
return ret_value__14019__auto__;
}
break;
}
});
state_machine__14018__auto__ = function(state_29456){
switch(arguments.length){
case 0:
return state_machine__14018__auto____0.call(this);
case 1:
return state_machine__14018__auto____1.call(this,state_29456);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14018__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14018__auto____0;
state_machine__14018__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14018__auto____1;
return state_machine__14018__auto__;
})()
;})(switch__14017__auto__,c__14073__auto___29503,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__14075__auto__ = (function (){var statearr_29502 = f__14074__auto__.call(null);
(statearr_29502[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14073__auto___29503);

return statearr_29502;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14075__auto__);
});})(c__14073__auto___29503,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

cljs.core.async.Pub = (function (){var obj29537 = {};
return obj29537;
})();

cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){
if((function (){var and__11588__auto__ = p;
if(and__11588__auto__){
return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else {
return and__11588__auto__;
}
})()){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__12244__auto__ = (((p == null))?null:p);
return (function (){var or__11600__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__12244__auto__)]);
if(or__11600__auto__){
return or__11600__auto__;
} else {
var or__11600__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(or__11600__auto____$1){
return or__11600__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});

cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){
if((function (){var and__11588__auto__ = p;
if(and__11588__auto__){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else {
return and__11588__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__12244__auto__ = (((p == null))?null:p);
return (function (){var or__11600__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__12244__auto__)]);
if(or__11600__auto__){
return or__11600__auto__;
} else {
var or__11600__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(or__11600__auto____$1){
return or__11600__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});

cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){
if((function (){var and__11588__auto__ = p;
if(and__11588__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else {
return and__11588__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__12244__auto__ = (((p == null))?null:p);
return (function (){var or__11600__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__12244__auto__)]);
if(or__11600__auto__){
return or__11600__auto__;
} else {
var or__11600__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__11600__auto____$1){
return or__11600__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){
if((function (){var and__11588__auto__ = p;
if(and__11588__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else {
return and__11588__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__12244__auto__ = (((p == null))?null:p);
return (function (){var or__11600__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__12244__auto__)]);
if(or__11600__auto__){
return or__11600__auto__;
} else {
var or__11600__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__11600__auto____$1){
return or__11600__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;

/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Items received when there are no matching subs get dropped.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){
return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__11600__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__11600__auto__)){
return or__11600__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__11600__auto__,mults){
return (function (p1__29538_SHARP_){
if(cljs.core.truth_(p1__29538_SHARP_.call(null,topic))){
return p1__29538_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__29538_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__11600__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t29661 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t29661 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta29662){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta29662 = meta29662;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t29661.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t29661.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t29661.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4126__auto__)){
var m = temp__4126__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t29661.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t29661.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t29661.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t29661.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t29661.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_29663){
var self__ = this;
var _29663__$1 = this;
return self__.meta29662;
});})(mults,ensure_mult))
;

cljs.core.async.t29661.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_29663,meta29662__$1){
var self__ = this;
var _29663__$1 = this;
return (new cljs.core.async.t29661(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta29662__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t29661.cljs$lang$type = true;

cljs.core.async.t29661.cljs$lang$ctorStr = "cljs.core.async/t29661";

cljs.core.async.t29661.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__12187__auto__,writer__12188__auto__,opt__12189__auto__){
return cljs.core._write.call(null,writer__12188__auto__,"cljs.core.async/t29661");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t29661 = ((function (mults,ensure_mult){
return (function __GT_t29661(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta29662){
return (new cljs.core.async.t29661(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta29662));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t29661(ensure_mult,mults,buf_fn,topic_fn,ch,pub,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__14073__auto___29783 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14073__auto___29783,mults,ensure_mult,p){
return (function (){
var f__14074__auto__ = (function (){var switch__14017__auto__ = ((function (c__14073__auto___29783,mults,ensure_mult,p){
return (function (state_29735){
var state_val_29736 = (state_29735[(1)]);
if((state_val_29736 === (7))){
var inst_29731 = (state_29735[(2)]);
var state_29735__$1 = state_29735;
var statearr_29737_29784 = state_29735__$1;
(statearr_29737_29784[(2)] = inst_29731);

(statearr_29737_29784[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29736 === (20))){
var state_29735__$1 = state_29735;
var statearr_29738_29785 = state_29735__$1;
(statearr_29738_29785[(2)] = null);

(statearr_29738_29785[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29736 === (1))){
var state_29735__$1 = state_29735;
var statearr_29739_29786 = state_29735__$1;
(statearr_29739_29786[(2)] = null);

(statearr_29739_29786[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29736 === (24))){
var inst_29714 = (state_29735[(7)]);
var inst_29723 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_29714);
var state_29735__$1 = state_29735;
var statearr_29740_29787 = state_29735__$1;
(statearr_29740_29787[(2)] = inst_29723);

(statearr_29740_29787[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29736 === (4))){
var inst_29666 = (state_29735[(8)]);
var inst_29666__$1 = (state_29735[(2)]);
var inst_29667 = (inst_29666__$1 == null);
var state_29735__$1 = (function (){var statearr_29741 = state_29735;
(statearr_29741[(8)] = inst_29666__$1);

return statearr_29741;
})();
if(cljs.core.truth_(inst_29667)){
var statearr_29742_29788 = state_29735__$1;
(statearr_29742_29788[(1)] = (5));

} else {
var statearr_29743_29789 = state_29735__$1;
(statearr_29743_29789[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29736 === (15))){
var inst_29708 = (state_29735[(2)]);
var state_29735__$1 = state_29735;
var statearr_29744_29790 = state_29735__$1;
(statearr_29744_29790[(2)] = inst_29708);

(statearr_29744_29790[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29736 === (21))){
var inst_29728 = (state_29735[(2)]);
var state_29735__$1 = (function (){var statearr_29745 = state_29735;
(statearr_29745[(9)] = inst_29728);

return statearr_29745;
})();
var statearr_29746_29791 = state_29735__$1;
(statearr_29746_29791[(2)] = null);

(statearr_29746_29791[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29736 === (13))){
var inst_29690 = (state_29735[(10)]);
var inst_29692 = cljs.core.chunked_seq_QMARK_.call(null,inst_29690);
var state_29735__$1 = state_29735;
if(inst_29692){
var statearr_29747_29792 = state_29735__$1;
(statearr_29747_29792[(1)] = (16));

} else {
var statearr_29748_29793 = state_29735__$1;
(statearr_29748_29793[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29736 === (22))){
var inst_29720 = (state_29735[(2)]);
var state_29735__$1 = state_29735;
if(cljs.core.truth_(inst_29720)){
var statearr_29749_29794 = state_29735__$1;
(statearr_29749_29794[(1)] = (23));

} else {
var statearr_29750_29795 = state_29735__$1;
(statearr_29750_29795[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29736 === (6))){
var inst_29714 = (state_29735[(7)]);
var inst_29666 = (state_29735[(8)]);
var inst_29716 = (state_29735[(11)]);
var inst_29714__$1 = topic_fn.call(null,inst_29666);
var inst_29715 = cljs.core.deref.call(null,mults);
var inst_29716__$1 = cljs.core.get.call(null,inst_29715,inst_29714__$1);
var state_29735__$1 = (function (){var statearr_29751 = state_29735;
(statearr_29751[(7)] = inst_29714__$1);

(statearr_29751[(11)] = inst_29716__$1);

return statearr_29751;
})();
if(cljs.core.truth_(inst_29716__$1)){
var statearr_29752_29796 = state_29735__$1;
(statearr_29752_29796[(1)] = (19));

} else {
var statearr_29753_29797 = state_29735__$1;
(statearr_29753_29797[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29736 === (25))){
var inst_29725 = (state_29735[(2)]);
var state_29735__$1 = state_29735;
var statearr_29754_29798 = state_29735__$1;
(statearr_29754_29798[(2)] = inst_29725);

(statearr_29754_29798[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29736 === (17))){
var inst_29690 = (state_29735[(10)]);
var inst_29699 = cljs.core.first.call(null,inst_29690);
var inst_29700 = cljs.core.async.muxch_STAR_.call(null,inst_29699);
var inst_29701 = cljs.core.async.close_BANG_.call(null,inst_29700);
var inst_29702 = cljs.core.next.call(null,inst_29690);
var inst_29676 = inst_29702;
var inst_29677 = null;
var inst_29678 = (0);
var inst_29679 = (0);
var state_29735__$1 = (function (){var statearr_29755 = state_29735;
(statearr_29755[(12)] = inst_29676);

(statearr_29755[(13)] = inst_29679);

(statearr_29755[(14)] = inst_29677);

(statearr_29755[(15)] = inst_29701);

(statearr_29755[(16)] = inst_29678);

return statearr_29755;
})();
var statearr_29756_29799 = state_29735__$1;
(statearr_29756_29799[(2)] = null);

(statearr_29756_29799[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29736 === (3))){
var inst_29733 = (state_29735[(2)]);
var state_29735__$1 = state_29735;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29735__$1,inst_29733);
} else {
if((state_val_29736 === (12))){
var inst_29710 = (state_29735[(2)]);
var state_29735__$1 = state_29735;
var statearr_29757_29800 = state_29735__$1;
(statearr_29757_29800[(2)] = inst_29710);

(statearr_29757_29800[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29736 === (2))){
var state_29735__$1 = state_29735;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29735__$1,(4),ch);
} else {
if((state_val_29736 === (23))){
var state_29735__$1 = state_29735;
var statearr_29758_29801 = state_29735__$1;
(statearr_29758_29801[(2)] = null);

(statearr_29758_29801[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29736 === (19))){
var inst_29666 = (state_29735[(8)]);
var inst_29716 = (state_29735[(11)]);
var inst_29718 = cljs.core.async.muxch_STAR_.call(null,inst_29716);
var state_29735__$1 = state_29735;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29735__$1,(22),inst_29718,inst_29666);
} else {
if((state_val_29736 === (11))){
var inst_29676 = (state_29735[(12)]);
var inst_29690 = (state_29735[(10)]);
var inst_29690__$1 = cljs.core.seq.call(null,inst_29676);
var state_29735__$1 = (function (){var statearr_29759 = state_29735;
(statearr_29759[(10)] = inst_29690__$1);

return statearr_29759;
})();
if(inst_29690__$1){
var statearr_29760_29802 = state_29735__$1;
(statearr_29760_29802[(1)] = (13));

} else {
var statearr_29761_29803 = state_29735__$1;
(statearr_29761_29803[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29736 === (9))){
var inst_29712 = (state_29735[(2)]);
var state_29735__$1 = state_29735;
var statearr_29762_29804 = state_29735__$1;
(statearr_29762_29804[(2)] = inst_29712);

(statearr_29762_29804[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29736 === (5))){
var inst_29673 = cljs.core.deref.call(null,mults);
var inst_29674 = cljs.core.vals.call(null,inst_29673);
var inst_29675 = cljs.core.seq.call(null,inst_29674);
var inst_29676 = inst_29675;
var inst_29677 = null;
var inst_29678 = (0);
var inst_29679 = (0);
var state_29735__$1 = (function (){var statearr_29763 = state_29735;
(statearr_29763[(12)] = inst_29676);

(statearr_29763[(13)] = inst_29679);

(statearr_29763[(14)] = inst_29677);

(statearr_29763[(16)] = inst_29678);

return statearr_29763;
})();
var statearr_29764_29805 = state_29735__$1;
(statearr_29764_29805[(2)] = null);

(statearr_29764_29805[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29736 === (14))){
var state_29735__$1 = state_29735;
var statearr_29768_29806 = state_29735__$1;
(statearr_29768_29806[(2)] = null);

(statearr_29768_29806[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29736 === (16))){
var inst_29690 = (state_29735[(10)]);
var inst_29694 = cljs.core.chunk_first.call(null,inst_29690);
var inst_29695 = cljs.core.chunk_rest.call(null,inst_29690);
var inst_29696 = cljs.core.count.call(null,inst_29694);
var inst_29676 = inst_29695;
var inst_29677 = inst_29694;
var inst_29678 = inst_29696;
var inst_29679 = (0);
var state_29735__$1 = (function (){var statearr_29769 = state_29735;
(statearr_29769[(12)] = inst_29676);

(statearr_29769[(13)] = inst_29679);

(statearr_29769[(14)] = inst_29677);

(statearr_29769[(16)] = inst_29678);

return statearr_29769;
})();
var statearr_29770_29807 = state_29735__$1;
(statearr_29770_29807[(2)] = null);

(statearr_29770_29807[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29736 === (10))){
var inst_29676 = (state_29735[(12)]);
var inst_29679 = (state_29735[(13)]);
var inst_29677 = (state_29735[(14)]);
var inst_29678 = (state_29735[(16)]);
var inst_29684 = cljs.core._nth.call(null,inst_29677,inst_29679);
var inst_29685 = cljs.core.async.muxch_STAR_.call(null,inst_29684);
var inst_29686 = cljs.core.async.close_BANG_.call(null,inst_29685);
var inst_29687 = (inst_29679 + (1));
var tmp29765 = inst_29676;
var tmp29766 = inst_29677;
var tmp29767 = inst_29678;
var inst_29676__$1 = tmp29765;
var inst_29677__$1 = tmp29766;
var inst_29678__$1 = tmp29767;
var inst_29679__$1 = inst_29687;
var state_29735__$1 = (function (){var statearr_29771 = state_29735;
(statearr_29771[(12)] = inst_29676__$1);

(statearr_29771[(13)] = inst_29679__$1);

(statearr_29771[(14)] = inst_29677__$1);

(statearr_29771[(16)] = inst_29678__$1);

(statearr_29771[(17)] = inst_29686);

return statearr_29771;
})();
var statearr_29772_29808 = state_29735__$1;
(statearr_29772_29808[(2)] = null);

(statearr_29772_29808[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29736 === (18))){
var inst_29705 = (state_29735[(2)]);
var state_29735__$1 = state_29735;
var statearr_29773_29809 = state_29735__$1;
(statearr_29773_29809[(2)] = inst_29705);

(statearr_29773_29809[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29736 === (8))){
var inst_29679 = (state_29735[(13)]);
var inst_29678 = (state_29735[(16)]);
var inst_29681 = (inst_29679 < inst_29678);
var inst_29682 = inst_29681;
var state_29735__$1 = state_29735;
if(cljs.core.truth_(inst_29682)){
var statearr_29774_29810 = state_29735__$1;
(statearr_29774_29810[(1)] = (10));

} else {
var statearr_29775_29811 = state_29735__$1;
(statearr_29775_29811[(1)] = (11));

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
});})(c__14073__auto___29783,mults,ensure_mult,p))
;
return ((function (switch__14017__auto__,c__14073__auto___29783,mults,ensure_mult,p){
return (function() {
var state_machine__14018__auto__ = null;
var state_machine__14018__auto____0 = (function (){
var statearr_29779 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29779[(0)] = state_machine__14018__auto__);

(statearr_29779[(1)] = (1));

return statearr_29779;
});
var state_machine__14018__auto____1 = (function (state_29735){
while(true){
var ret_value__14019__auto__ = (function (){try{while(true){
var result__14020__auto__ = switch__14017__auto__.call(null,state_29735);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14020__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14020__auto__;
}
break;
}
}catch (e29780){if((e29780 instanceof Object)){
var ex__14021__auto__ = e29780;
var statearr_29781_29812 = state_29735;
(statearr_29781_29812[(5)] = ex__14021__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29735);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29780;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14019__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29813 = state_29735;
state_29735 = G__29813;
continue;
} else {
return ret_value__14019__auto__;
}
break;
}
});
state_machine__14018__auto__ = function(state_29735){
switch(arguments.length){
case 0:
return state_machine__14018__auto____0.call(this);
case 1:
return state_machine__14018__auto____1.call(this,state_29735);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14018__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14018__auto____0;
state_machine__14018__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14018__auto____1;
return state_machine__14018__auto__;
})()
;})(switch__14017__auto__,c__14073__auto___29783,mults,ensure_mult,p))
})();
var state__14075__auto__ = (function (){var statearr_29782 = f__14074__auto__.call(null);
(statearr_29782[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14073__auto___29783);

return statearr_29782;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14075__auto__);
});})(c__14073__auto___29783,mults,ensure_mult,p))
);


return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){
return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){
return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__14073__auto___29950 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14073__auto___29950,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__14074__auto__ = (function (){var switch__14017__auto__ = ((function (c__14073__auto___29950,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_29920){
var state_val_29921 = (state_29920[(1)]);
if((state_val_29921 === (7))){
var state_29920__$1 = state_29920;
var statearr_29922_29951 = state_29920__$1;
(statearr_29922_29951[(2)] = null);

(statearr_29922_29951[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29921 === (1))){
var state_29920__$1 = state_29920;
var statearr_29923_29952 = state_29920__$1;
(statearr_29923_29952[(2)] = null);

(statearr_29923_29952[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29921 === (4))){
var inst_29884 = (state_29920[(7)]);
var inst_29886 = (inst_29884 < cnt);
var state_29920__$1 = state_29920;
if(cljs.core.truth_(inst_29886)){
var statearr_29924_29953 = state_29920__$1;
(statearr_29924_29953[(1)] = (6));

} else {
var statearr_29925_29954 = state_29920__$1;
(statearr_29925_29954[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29921 === (15))){
var inst_29916 = (state_29920[(2)]);
var state_29920__$1 = state_29920;
var statearr_29926_29955 = state_29920__$1;
(statearr_29926_29955[(2)] = inst_29916);

(statearr_29926_29955[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29921 === (13))){
var inst_29909 = cljs.core.async.close_BANG_.call(null,out);
var state_29920__$1 = state_29920;
var statearr_29927_29956 = state_29920__$1;
(statearr_29927_29956[(2)] = inst_29909);

(statearr_29927_29956[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29921 === (6))){
var state_29920__$1 = state_29920;
var statearr_29928_29957 = state_29920__$1;
(statearr_29928_29957[(2)] = null);

(statearr_29928_29957[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29921 === (3))){
var inst_29918 = (state_29920[(2)]);
var state_29920__$1 = state_29920;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29920__$1,inst_29918);
} else {
if((state_val_29921 === (12))){
var inst_29906 = (state_29920[(8)]);
var inst_29906__$1 = (state_29920[(2)]);
var inst_29907 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_29906__$1);
var state_29920__$1 = (function (){var statearr_29929 = state_29920;
(statearr_29929[(8)] = inst_29906__$1);

return statearr_29929;
})();
if(cljs.core.truth_(inst_29907)){
var statearr_29930_29958 = state_29920__$1;
(statearr_29930_29958[(1)] = (13));

} else {
var statearr_29931_29959 = state_29920__$1;
(statearr_29931_29959[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29921 === (2))){
var inst_29883 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_29884 = (0);
var state_29920__$1 = (function (){var statearr_29932 = state_29920;
(statearr_29932[(7)] = inst_29884);

(statearr_29932[(9)] = inst_29883);

return statearr_29932;
})();
var statearr_29933_29960 = state_29920__$1;
(statearr_29933_29960[(2)] = null);

(statearr_29933_29960[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29921 === (11))){
var inst_29884 = (state_29920[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_29920,(10),Object,null,(9));
var inst_29893 = chs__$1.call(null,inst_29884);
var inst_29894 = done.call(null,inst_29884);
var inst_29895 = cljs.core.async.take_BANG_.call(null,inst_29893,inst_29894);
var state_29920__$1 = state_29920;
var statearr_29934_29961 = state_29920__$1;
(statearr_29934_29961[(2)] = inst_29895);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29920__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29921 === (9))){
var inst_29884 = (state_29920[(7)]);
var inst_29897 = (state_29920[(2)]);
var inst_29898 = (inst_29884 + (1));
var inst_29884__$1 = inst_29898;
var state_29920__$1 = (function (){var statearr_29935 = state_29920;
(statearr_29935[(7)] = inst_29884__$1);

(statearr_29935[(10)] = inst_29897);

return statearr_29935;
})();
var statearr_29936_29962 = state_29920__$1;
(statearr_29936_29962[(2)] = null);

(statearr_29936_29962[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29921 === (5))){
var inst_29904 = (state_29920[(2)]);
var state_29920__$1 = (function (){var statearr_29937 = state_29920;
(statearr_29937[(11)] = inst_29904);

return statearr_29937;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29920__$1,(12),dchan);
} else {
if((state_val_29921 === (14))){
var inst_29906 = (state_29920[(8)]);
var inst_29911 = cljs.core.apply.call(null,f,inst_29906);
var state_29920__$1 = state_29920;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29920__$1,(16),out,inst_29911);
} else {
if((state_val_29921 === (16))){
var inst_29913 = (state_29920[(2)]);
var state_29920__$1 = (function (){var statearr_29938 = state_29920;
(statearr_29938[(12)] = inst_29913);

return statearr_29938;
})();
var statearr_29939_29963 = state_29920__$1;
(statearr_29939_29963[(2)] = null);

(statearr_29939_29963[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29921 === (10))){
var inst_29888 = (state_29920[(2)]);
var inst_29889 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_29920__$1 = (function (){var statearr_29940 = state_29920;
(statearr_29940[(13)] = inst_29888);

return statearr_29940;
})();
var statearr_29941_29964 = state_29920__$1;
(statearr_29941_29964[(2)] = inst_29889);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29920__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29921 === (8))){
var inst_29902 = (state_29920[(2)]);
var state_29920__$1 = state_29920;
var statearr_29942_29965 = state_29920__$1;
(statearr_29942_29965[(2)] = inst_29902);

(statearr_29942_29965[(1)] = (5));


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
});})(c__14073__auto___29950,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__14017__auto__,c__14073__auto___29950,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__14018__auto__ = null;
var state_machine__14018__auto____0 = (function (){
var statearr_29946 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29946[(0)] = state_machine__14018__auto__);

(statearr_29946[(1)] = (1));

return statearr_29946;
});
var state_machine__14018__auto____1 = (function (state_29920){
while(true){
var ret_value__14019__auto__ = (function (){try{while(true){
var result__14020__auto__ = switch__14017__auto__.call(null,state_29920);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14020__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14020__auto__;
}
break;
}
}catch (e29947){if((e29947 instanceof Object)){
var ex__14021__auto__ = e29947;
var statearr_29948_29966 = state_29920;
(statearr_29948_29966[(5)] = ex__14021__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29920);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29947;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14019__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29967 = state_29920;
state_29920 = G__29967;
continue;
} else {
return ret_value__14019__auto__;
}
break;
}
});
state_machine__14018__auto__ = function(state_29920){
switch(arguments.length){
case 0:
return state_machine__14018__auto____0.call(this);
case 1:
return state_machine__14018__auto____1.call(this,state_29920);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14018__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14018__auto____0;
state_machine__14018__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14018__auto____1;
return state_machine__14018__auto__;
})()
;})(switch__14017__auto__,c__14073__auto___29950,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__14075__auto__ = (function (){var statearr_29949 = f__14074__auto__.call(null);
(statearr_29949[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14073__auto___29950);

return statearr_29949;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14075__auto__);
});})(c__14073__auto___29950,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){
return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__14073__auto___30075 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14073__auto___30075,out){
return (function (){
var f__14074__auto__ = (function (){var switch__14017__auto__ = ((function (c__14073__auto___30075,out){
return (function (state_30051){
var state_val_30052 = (state_30051[(1)]);
if((state_val_30052 === (7))){
var inst_30031 = (state_30051[(7)]);
var inst_30030 = (state_30051[(8)]);
var inst_30030__$1 = (state_30051[(2)]);
var inst_30031__$1 = cljs.core.nth.call(null,inst_30030__$1,(0),null);
var inst_30032 = cljs.core.nth.call(null,inst_30030__$1,(1),null);
var inst_30033 = (inst_30031__$1 == null);
var state_30051__$1 = (function (){var statearr_30053 = state_30051;
(statearr_30053[(9)] = inst_30032);

(statearr_30053[(7)] = inst_30031__$1);

(statearr_30053[(8)] = inst_30030__$1);

return statearr_30053;
})();
if(cljs.core.truth_(inst_30033)){
var statearr_30054_30076 = state_30051__$1;
(statearr_30054_30076[(1)] = (8));

} else {
var statearr_30055_30077 = state_30051__$1;
(statearr_30055_30077[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30052 === (1))){
var inst_30022 = cljs.core.vec.call(null,chs);
var inst_30023 = inst_30022;
var state_30051__$1 = (function (){var statearr_30056 = state_30051;
(statearr_30056[(10)] = inst_30023);

return statearr_30056;
})();
var statearr_30057_30078 = state_30051__$1;
(statearr_30057_30078[(2)] = null);

(statearr_30057_30078[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30052 === (4))){
var inst_30023 = (state_30051[(10)]);
var state_30051__$1 = state_30051;
return cljs.core.async.ioc_alts_BANG_.call(null,state_30051__$1,(7),inst_30023);
} else {
if((state_val_30052 === (6))){
var inst_30047 = (state_30051[(2)]);
var state_30051__$1 = state_30051;
var statearr_30058_30079 = state_30051__$1;
(statearr_30058_30079[(2)] = inst_30047);

(statearr_30058_30079[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30052 === (3))){
var inst_30049 = (state_30051[(2)]);
var state_30051__$1 = state_30051;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30051__$1,inst_30049);
} else {
if((state_val_30052 === (2))){
var inst_30023 = (state_30051[(10)]);
var inst_30025 = cljs.core.count.call(null,inst_30023);
var inst_30026 = (inst_30025 > (0));
var state_30051__$1 = state_30051;
if(cljs.core.truth_(inst_30026)){
var statearr_30060_30080 = state_30051__$1;
(statearr_30060_30080[(1)] = (4));

} else {
var statearr_30061_30081 = state_30051__$1;
(statearr_30061_30081[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30052 === (11))){
var inst_30023 = (state_30051[(10)]);
var inst_30040 = (state_30051[(2)]);
var tmp30059 = inst_30023;
var inst_30023__$1 = tmp30059;
var state_30051__$1 = (function (){var statearr_30062 = state_30051;
(statearr_30062[(11)] = inst_30040);

(statearr_30062[(10)] = inst_30023__$1);

return statearr_30062;
})();
var statearr_30063_30082 = state_30051__$1;
(statearr_30063_30082[(2)] = null);

(statearr_30063_30082[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30052 === (9))){
var inst_30031 = (state_30051[(7)]);
var state_30051__$1 = state_30051;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30051__$1,(11),out,inst_30031);
} else {
if((state_val_30052 === (5))){
var inst_30045 = cljs.core.async.close_BANG_.call(null,out);
var state_30051__$1 = state_30051;
var statearr_30064_30083 = state_30051__$1;
(statearr_30064_30083[(2)] = inst_30045);

(statearr_30064_30083[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30052 === (10))){
var inst_30043 = (state_30051[(2)]);
var state_30051__$1 = state_30051;
var statearr_30065_30084 = state_30051__$1;
(statearr_30065_30084[(2)] = inst_30043);

(statearr_30065_30084[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30052 === (8))){
var inst_30032 = (state_30051[(9)]);
var inst_30031 = (state_30051[(7)]);
var inst_30030 = (state_30051[(8)]);
var inst_30023 = (state_30051[(10)]);
var inst_30035 = (function (){var c = inst_30032;
var v = inst_30031;
var vec__30028 = inst_30030;
var cs = inst_30023;
return ((function (c,v,vec__30028,cs,inst_30032,inst_30031,inst_30030,inst_30023,state_val_30052,c__14073__auto___30075,out){
return (function (p1__29968_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__29968_SHARP_);
});
;})(c,v,vec__30028,cs,inst_30032,inst_30031,inst_30030,inst_30023,state_val_30052,c__14073__auto___30075,out))
})();
var inst_30036 = cljs.core.filterv.call(null,inst_30035,inst_30023);
var inst_30023__$1 = inst_30036;
var state_30051__$1 = (function (){var statearr_30066 = state_30051;
(statearr_30066[(10)] = inst_30023__$1);

return statearr_30066;
})();
var statearr_30067_30085 = state_30051__$1;
(statearr_30067_30085[(2)] = null);

(statearr_30067_30085[(1)] = (2));


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
});})(c__14073__auto___30075,out))
;
return ((function (switch__14017__auto__,c__14073__auto___30075,out){
return (function() {
var state_machine__14018__auto__ = null;
var state_machine__14018__auto____0 = (function (){
var statearr_30071 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30071[(0)] = state_machine__14018__auto__);

(statearr_30071[(1)] = (1));

return statearr_30071;
});
var state_machine__14018__auto____1 = (function (state_30051){
while(true){
var ret_value__14019__auto__ = (function (){try{while(true){
var result__14020__auto__ = switch__14017__auto__.call(null,state_30051);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14020__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14020__auto__;
}
break;
}
}catch (e30072){if((e30072 instanceof Object)){
var ex__14021__auto__ = e30072;
var statearr_30073_30086 = state_30051;
(statearr_30073_30086[(5)] = ex__14021__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30051);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30072;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14019__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30087 = state_30051;
state_30051 = G__30087;
continue;
} else {
return ret_value__14019__auto__;
}
break;
}
});
state_machine__14018__auto__ = function(state_30051){
switch(arguments.length){
case 0:
return state_machine__14018__auto____0.call(this);
case 1:
return state_machine__14018__auto____1.call(this,state_30051);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14018__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14018__auto____0;
state_machine__14018__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14018__auto____1;
return state_machine__14018__auto__;
})()
;})(switch__14017__auto__,c__14073__auto___30075,out))
})();
var state__14075__auto__ = (function (){var statearr_30074 = f__14074__auto__.call(null);
(statearr_30074[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14073__auto___30075);

return statearr_30074;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14075__auto__);
});})(c__14073__auto___30075,out))
);


return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){
return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__14073__auto___30180 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14073__auto___30180,out){
return (function (){
var f__14074__auto__ = (function (){var switch__14017__auto__ = ((function (c__14073__auto___30180,out){
return (function (state_30157){
var state_val_30158 = (state_30157[(1)]);
if((state_val_30158 === (7))){
var inst_30139 = (state_30157[(7)]);
var inst_30139__$1 = (state_30157[(2)]);
var inst_30140 = (inst_30139__$1 == null);
var inst_30141 = cljs.core.not.call(null,inst_30140);
var state_30157__$1 = (function (){var statearr_30159 = state_30157;
(statearr_30159[(7)] = inst_30139__$1);

return statearr_30159;
})();
if(inst_30141){
var statearr_30160_30181 = state_30157__$1;
(statearr_30160_30181[(1)] = (8));

} else {
var statearr_30161_30182 = state_30157__$1;
(statearr_30161_30182[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30158 === (1))){
var inst_30134 = (0);
var state_30157__$1 = (function (){var statearr_30162 = state_30157;
(statearr_30162[(8)] = inst_30134);

return statearr_30162;
})();
var statearr_30163_30183 = state_30157__$1;
(statearr_30163_30183[(2)] = null);

(statearr_30163_30183[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30158 === (4))){
var state_30157__$1 = state_30157;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30157__$1,(7),ch);
} else {
if((state_val_30158 === (6))){
var inst_30152 = (state_30157[(2)]);
var state_30157__$1 = state_30157;
var statearr_30164_30184 = state_30157__$1;
(statearr_30164_30184[(2)] = inst_30152);

(statearr_30164_30184[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30158 === (3))){
var inst_30154 = (state_30157[(2)]);
var inst_30155 = cljs.core.async.close_BANG_.call(null,out);
var state_30157__$1 = (function (){var statearr_30165 = state_30157;
(statearr_30165[(9)] = inst_30154);

return statearr_30165;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30157__$1,inst_30155);
} else {
if((state_val_30158 === (2))){
var inst_30134 = (state_30157[(8)]);
var inst_30136 = (inst_30134 < n);
var state_30157__$1 = state_30157;
if(cljs.core.truth_(inst_30136)){
var statearr_30166_30185 = state_30157__$1;
(statearr_30166_30185[(1)] = (4));

} else {
var statearr_30167_30186 = state_30157__$1;
(statearr_30167_30186[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30158 === (11))){
var inst_30134 = (state_30157[(8)]);
var inst_30144 = (state_30157[(2)]);
var inst_30145 = (inst_30134 + (1));
var inst_30134__$1 = inst_30145;
var state_30157__$1 = (function (){var statearr_30168 = state_30157;
(statearr_30168[(10)] = inst_30144);

(statearr_30168[(8)] = inst_30134__$1);

return statearr_30168;
})();
var statearr_30169_30187 = state_30157__$1;
(statearr_30169_30187[(2)] = null);

(statearr_30169_30187[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30158 === (9))){
var state_30157__$1 = state_30157;
var statearr_30170_30188 = state_30157__$1;
(statearr_30170_30188[(2)] = null);

(statearr_30170_30188[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30158 === (5))){
var state_30157__$1 = state_30157;
var statearr_30171_30189 = state_30157__$1;
(statearr_30171_30189[(2)] = null);

(statearr_30171_30189[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30158 === (10))){
var inst_30149 = (state_30157[(2)]);
var state_30157__$1 = state_30157;
var statearr_30172_30190 = state_30157__$1;
(statearr_30172_30190[(2)] = inst_30149);

(statearr_30172_30190[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30158 === (8))){
var inst_30139 = (state_30157[(7)]);
var state_30157__$1 = state_30157;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30157__$1,(11),out,inst_30139);
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
});})(c__14073__auto___30180,out))
;
return ((function (switch__14017__auto__,c__14073__auto___30180,out){
return (function() {
var state_machine__14018__auto__ = null;
var state_machine__14018__auto____0 = (function (){
var statearr_30176 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30176[(0)] = state_machine__14018__auto__);

(statearr_30176[(1)] = (1));

return statearr_30176;
});
var state_machine__14018__auto____1 = (function (state_30157){
while(true){
var ret_value__14019__auto__ = (function (){try{while(true){
var result__14020__auto__ = switch__14017__auto__.call(null,state_30157);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14020__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14020__auto__;
}
break;
}
}catch (e30177){if((e30177 instanceof Object)){
var ex__14021__auto__ = e30177;
var statearr_30178_30191 = state_30157;
(statearr_30178_30191[(5)] = ex__14021__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30157);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30177;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14019__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30192 = state_30157;
state_30157 = G__30192;
continue;
} else {
return ret_value__14019__auto__;
}
break;
}
});
state_machine__14018__auto__ = function(state_30157){
switch(arguments.length){
case 0:
return state_machine__14018__auto____0.call(this);
case 1:
return state_machine__14018__auto____1.call(this,state_30157);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14018__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14018__auto____0;
state_machine__14018__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14018__auto____1;
return state_machine__14018__auto__;
})()
;})(switch__14017__auto__,c__14073__auto___30180,out))
})();
var state__14075__auto__ = (function (){var statearr_30179 = f__14074__auto__.call(null);
(statearr_30179[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14073__auto___30180);

return statearr_30179;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14075__auto__);
});})(c__14073__auto___30180,out))
);


return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){
if(typeof cljs.core.async.t30200 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t30200 = (function (ch,f,map_LT_,meta30201){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta30201 = meta30201;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t30200.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t30200.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t30200.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t30200.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t30203 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t30203 = (function (fn1,_,meta30201,map_LT_,f,ch,meta30204){
this.fn1 = fn1;
this._ = _;
this.meta30201 = meta30201;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta30204 = meta30204;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t30203.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t30203.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t30203.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__30193_SHARP_){
return f1.call(null,(((p1__30193_SHARP_ == null))?null:self__.f.call(null,p1__30193_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t30203.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_30205){
var self__ = this;
var _30205__$1 = this;
return self__.meta30204;
});})(___$1))
;

cljs.core.async.t30203.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_30205,meta30204__$1){
var self__ = this;
var _30205__$1 = this;
return (new cljs.core.async.t30203(self__.fn1,self__._,self__.meta30201,self__.map_LT_,self__.f,self__.ch,meta30204__$1));
});})(___$1))
;

cljs.core.async.t30203.cljs$lang$type = true;

cljs.core.async.t30203.cljs$lang$ctorStr = "cljs.core.async/t30203";

cljs.core.async.t30203.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__12187__auto__,writer__12188__auto__,opt__12189__auto__){
return cljs.core._write.call(null,writer__12188__auto__,"cljs.core.async/t30203");
});})(___$1))
;

cljs.core.async.__GT_t30203 = ((function (___$1){
return (function __GT_t30203(fn1__$1,___$2,meta30201__$1,map_LT___$1,f__$1,ch__$1,meta30204){
return (new cljs.core.async.t30203(fn1__$1,___$2,meta30201__$1,map_LT___$1,f__$1,ch__$1,meta30204));
});})(___$1))
;

}

return (new cljs.core.async.t30203(fn1,___$1,self__.meta30201,self__.map_LT_,self__.f,self__.ch,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__11588__auto__ = ret;
if(cljs.core.truth_(and__11588__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__11588__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t30200.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t30200.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t30200.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t30200.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30202){
var self__ = this;
var _30202__$1 = this;
return self__.meta30201;
});

cljs.core.async.t30200.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30202,meta30201__$1){
var self__ = this;
var _30202__$1 = this;
return (new cljs.core.async.t30200(self__.ch,self__.f,self__.map_LT_,meta30201__$1));
});

cljs.core.async.t30200.cljs$lang$type = true;

cljs.core.async.t30200.cljs$lang$ctorStr = "cljs.core.async/t30200";

cljs.core.async.t30200.cljs$lang$ctorPrWriter = (function (this__12187__auto__,writer__12188__auto__,opt__12189__auto__){
return cljs.core._write.call(null,writer__12188__auto__,"cljs.core.async/t30200");
});

cljs.core.async.__GT_t30200 = (function __GT_t30200(ch__$1,f__$1,map_LT___$1,meta30201){
return (new cljs.core.async.t30200(ch__$1,f__$1,map_LT___$1,meta30201));
});

}

return (new cljs.core.async.t30200(ch,f,map_LT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){
if(typeof cljs.core.async.t30209 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t30209 = (function (ch,f,map_GT_,meta30210){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta30210 = meta30210;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t30209.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t30209.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t30209.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t30209.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t30209.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t30209.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t30209.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30211){
var self__ = this;
var _30211__$1 = this;
return self__.meta30210;
});

cljs.core.async.t30209.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30211,meta30210__$1){
var self__ = this;
var _30211__$1 = this;
return (new cljs.core.async.t30209(self__.ch,self__.f,self__.map_GT_,meta30210__$1));
});

cljs.core.async.t30209.cljs$lang$type = true;

cljs.core.async.t30209.cljs$lang$ctorStr = "cljs.core.async/t30209";

cljs.core.async.t30209.cljs$lang$ctorPrWriter = (function (this__12187__auto__,writer__12188__auto__,opt__12189__auto__){
return cljs.core._write.call(null,writer__12188__auto__,"cljs.core.async/t30209");
});

cljs.core.async.__GT_t30209 = (function __GT_t30209(ch__$1,f__$1,map_GT___$1,meta30210){
return (new cljs.core.async.t30209(ch__$1,f__$1,map_GT___$1,meta30210));
});

}

return (new cljs.core.async.t30209(ch,f,map_GT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){
if(typeof cljs.core.async.t30215 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t30215 = (function (ch,p,filter_GT_,meta30216){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta30216 = meta30216;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t30215.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t30215.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t30215.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t30215.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t30215.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t30215.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t30215.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t30215.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30217){
var self__ = this;
var _30217__$1 = this;
return self__.meta30216;
});

cljs.core.async.t30215.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30217,meta30216__$1){
var self__ = this;
var _30217__$1 = this;
return (new cljs.core.async.t30215(self__.ch,self__.p,self__.filter_GT_,meta30216__$1));
});

cljs.core.async.t30215.cljs$lang$type = true;

cljs.core.async.t30215.cljs$lang$ctorStr = "cljs.core.async/t30215";

cljs.core.async.t30215.cljs$lang$ctorPrWriter = (function (this__12187__auto__,writer__12188__auto__,opt__12189__auto__){
return cljs.core._write.call(null,writer__12188__auto__,"cljs.core.async/t30215");
});

cljs.core.async.__GT_t30215 = (function __GT_t30215(ch__$1,p__$1,filter_GT___$1,meta30216){
return (new cljs.core.async.t30215(ch__$1,p__$1,filter_GT___$1,meta30216));
});

}

return (new cljs.core.async.t30215(ch,p,filter_GT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){
return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__14073__auto___30300 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14073__auto___30300,out){
return (function (){
var f__14074__auto__ = (function (){var switch__14017__auto__ = ((function (c__14073__auto___30300,out){
return (function (state_30279){
var state_val_30280 = (state_30279[(1)]);
if((state_val_30280 === (7))){
var inst_30275 = (state_30279[(2)]);
var state_30279__$1 = state_30279;
var statearr_30281_30301 = state_30279__$1;
(statearr_30281_30301[(2)] = inst_30275);

(statearr_30281_30301[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30280 === (1))){
var state_30279__$1 = state_30279;
var statearr_30282_30302 = state_30279__$1;
(statearr_30282_30302[(2)] = null);

(statearr_30282_30302[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30280 === (4))){
var inst_30261 = (state_30279[(7)]);
var inst_30261__$1 = (state_30279[(2)]);
var inst_30262 = (inst_30261__$1 == null);
var state_30279__$1 = (function (){var statearr_30283 = state_30279;
(statearr_30283[(7)] = inst_30261__$1);

return statearr_30283;
})();
if(cljs.core.truth_(inst_30262)){
var statearr_30284_30303 = state_30279__$1;
(statearr_30284_30303[(1)] = (5));

} else {
var statearr_30285_30304 = state_30279__$1;
(statearr_30285_30304[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30280 === (6))){
var inst_30261 = (state_30279[(7)]);
var inst_30266 = p.call(null,inst_30261);
var state_30279__$1 = state_30279;
if(cljs.core.truth_(inst_30266)){
var statearr_30286_30305 = state_30279__$1;
(statearr_30286_30305[(1)] = (8));

} else {
var statearr_30287_30306 = state_30279__$1;
(statearr_30287_30306[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30280 === (3))){
var inst_30277 = (state_30279[(2)]);
var state_30279__$1 = state_30279;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30279__$1,inst_30277);
} else {
if((state_val_30280 === (2))){
var state_30279__$1 = state_30279;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30279__$1,(4),ch);
} else {
if((state_val_30280 === (11))){
var inst_30269 = (state_30279[(2)]);
var state_30279__$1 = state_30279;
var statearr_30288_30307 = state_30279__$1;
(statearr_30288_30307[(2)] = inst_30269);

(statearr_30288_30307[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30280 === (9))){
var state_30279__$1 = state_30279;
var statearr_30289_30308 = state_30279__$1;
(statearr_30289_30308[(2)] = null);

(statearr_30289_30308[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30280 === (5))){
var inst_30264 = cljs.core.async.close_BANG_.call(null,out);
var state_30279__$1 = state_30279;
var statearr_30290_30309 = state_30279__$1;
(statearr_30290_30309[(2)] = inst_30264);

(statearr_30290_30309[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30280 === (10))){
var inst_30272 = (state_30279[(2)]);
var state_30279__$1 = (function (){var statearr_30291 = state_30279;
(statearr_30291[(8)] = inst_30272);

return statearr_30291;
})();
var statearr_30292_30310 = state_30279__$1;
(statearr_30292_30310[(2)] = null);

(statearr_30292_30310[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30280 === (8))){
var inst_30261 = (state_30279[(7)]);
var state_30279__$1 = state_30279;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30279__$1,(11),out,inst_30261);
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
});})(c__14073__auto___30300,out))
;
return ((function (switch__14017__auto__,c__14073__auto___30300,out){
return (function() {
var state_machine__14018__auto__ = null;
var state_machine__14018__auto____0 = (function (){
var statearr_30296 = [null,null,null,null,null,null,null,null,null];
(statearr_30296[(0)] = state_machine__14018__auto__);

(statearr_30296[(1)] = (1));

return statearr_30296;
});
var state_machine__14018__auto____1 = (function (state_30279){
while(true){
var ret_value__14019__auto__ = (function (){try{while(true){
var result__14020__auto__ = switch__14017__auto__.call(null,state_30279);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14020__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14020__auto__;
}
break;
}
}catch (e30297){if((e30297 instanceof Object)){
var ex__14021__auto__ = e30297;
var statearr_30298_30311 = state_30279;
(statearr_30298_30311[(5)] = ex__14021__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30279);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30297;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14019__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30312 = state_30279;
state_30279 = G__30312;
continue;
} else {
return ret_value__14019__auto__;
}
break;
}
});
state_machine__14018__auto__ = function(state_30279){
switch(arguments.length){
case 0:
return state_machine__14018__auto____0.call(this);
case 1:
return state_machine__14018__auto____1.call(this,state_30279);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14018__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14018__auto____0;
state_machine__14018__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14018__auto____1;
return state_machine__14018__auto__;
})()
;})(switch__14017__auto__,c__14073__auto___30300,out))
})();
var state__14075__auto__ = (function (){var statearr_30299 = f__14074__auto__.call(null);
(statearr_30299[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14073__auto___30300);

return statearr_30299;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14075__auto__);
});})(c__14073__auto___30300,out))
);


return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){
return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){
var c__14073__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14073__auto__){
return (function (){
var f__14074__auto__ = (function (){var switch__14017__auto__ = ((function (c__14073__auto__){
return (function (state_30478){
var state_val_30479 = (state_30478[(1)]);
if((state_val_30479 === (7))){
var inst_30474 = (state_30478[(2)]);
var state_30478__$1 = state_30478;
var statearr_30480_30521 = state_30478__$1;
(statearr_30480_30521[(2)] = inst_30474);

(statearr_30480_30521[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30479 === (20))){
var inst_30444 = (state_30478[(7)]);
var inst_30455 = (state_30478[(2)]);
var inst_30456 = cljs.core.next.call(null,inst_30444);
var inst_30430 = inst_30456;
var inst_30431 = null;
var inst_30432 = (0);
var inst_30433 = (0);
var state_30478__$1 = (function (){var statearr_30481 = state_30478;
(statearr_30481[(8)] = inst_30455);

(statearr_30481[(9)] = inst_30430);

(statearr_30481[(10)] = inst_30431);

(statearr_30481[(11)] = inst_30432);

(statearr_30481[(12)] = inst_30433);

return statearr_30481;
})();
var statearr_30482_30522 = state_30478__$1;
(statearr_30482_30522[(2)] = null);

(statearr_30482_30522[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30479 === (1))){
var state_30478__$1 = state_30478;
var statearr_30483_30523 = state_30478__$1;
(statearr_30483_30523[(2)] = null);

(statearr_30483_30523[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30479 === (4))){
var inst_30419 = (state_30478[(13)]);
var inst_30419__$1 = (state_30478[(2)]);
var inst_30420 = (inst_30419__$1 == null);
var state_30478__$1 = (function (){var statearr_30484 = state_30478;
(statearr_30484[(13)] = inst_30419__$1);

return statearr_30484;
})();
if(cljs.core.truth_(inst_30420)){
var statearr_30485_30524 = state_30478__$1;
(statearr_30485_30524[(1)] = (5));

} else {
var statearr_30486_30525 = state_30478__$1;
(statearr_30486_30525[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30479 === (15))){
var state_30478__$1 = state_30478;
var statearr_30490_30526 = state_30478__$1;
(statearr_30490_30526[(2)] = null);

(statearr_30490_30526[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30479 === (21))){
var state_30478__$1 = state_30478;
var statearr_30491_30527 = state_30478__$1;
(statearr_30491_30527[(2)] = null);

(statearr_30491_30527[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30479 === (13))){
var inst_30430 = (state_30478[(9)]);
var inst_30431 = (state_30478[(10)]);
var inst_30432 = (state_30478[(11)]);
var inst_30433 = (state_30478[(12)]);
var inst_30440 = (state_30478[(2)]);
var inst_30441 = (inst_30433 + (1));
var tmp30487 = inst_30430;
var tmp30488 = inst_30431;
var tmp30489 = inst_30432;
var inst_30430__$1 = tmp30487;
var inst_30431__$1 = tmp30488;
var inst_30432__$1 = tmp30489;
var inst_30433__$1 = inst_30441;
var state_30478__$1 = (function (){var statearr_30492 = state_30478;
(statearr_30492[(9)] = inst_30430__$1);

(statearr_30492[(14)] = inst_30440);

(statearr_30492[(10)] = inst_30431__$1);

(statearr_30492[(11)] = inst_30432__$1);

(statearr_30492[(12)] = inst_30433__$1);

return statearr_30492;
})();
var statearr_30493_30528 = state_30478__$1;
(statearr_30493_30528[(2)] = null);

(statearr_30493_30528[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30479 === (22))){
var state_30478__$1 = state_30478;
var statearr_30494_30529 = state_30478__$1;
(statearr_30494_30529[(2)] = null);

(statearr_30494_30529[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30479 === (6))){
var inst_30419 = (state_30478[(13)]);
var inst_30428 = f.call(null,inst_30419);
var inst_30429 = cljs.core.seq.call(null,inst_30428);
var inst_30430 = inst_30429;
var inst_30431 = null;
var inst_30432 = (0);
var inst_30433 = (0);
var state_30478__$1 = (function (){var statearr_30495 = state_30478;
(statearr_30495[(9)] = inst_30430);

(statearr_30495[(10)] = inst_30431);

(statearr_30495[(11)] = inst_30432);

(statearr_30495[(12)] = inst_30433);

return statearr_30495;
})();
var statearr_30496_30530 = state_30478__$1;
(statearr_30496_30530[(2)] = null);

(statearr_30496_30530[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30479 === (17))){
var inst_30444 = (state_30478[(7)]);
var inst_30448 = cljs.core.chunk_first.call(null,inst_30444);
var inst_30449 = cljs.core.chunk_rest.call(null,inst_30444);
var inst_30450 = cljs.core.count.call(null,inst_30448);
var inst_30430 = inst_30449;
var inst_30431 = inst_30448;
var inst_30432 = inst_30450;
var inst_30433 = (0);
var state_30478__$1 = (function (){var statearr_30497 = state_30478;
(statearr_30497[(9)] = inst_30430);

(statearr_30497[(10)] = inst_30431);

(statearr_30497[(11)] = inst_30432);

(statearr_30497[(12)] = inst_30433);

return statearr_30497;
})();
var statearr_30498_30531 = state_30478__$1;
(statearr_30498_30531[(2)] = null);

(statearr_30498_30531[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30479 === (3))){
var inst_30476 = (state_30478[(2)]);
var state_30478__$1 = state_30478;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30478__$1,inst_30476);
} else {
if((state_val_30479 === (12))){
var inst_30464 = (state_30478[(2)]);
var state_30478__$1 = state_30478;
var statearr_30499_30532 = state_30478__$1;
(statearr_30499_30532[(2)] = inst_30464);

(statearr_30499_30532[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30479 === (2))){
var state_30478__$1 = state_30478;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30478__$1,(4),in$);
} else {
if((state_val_30479 === (23))){
var inst_30472 = (state_30478[(2)]);
var state_30478__$1 = state_30478;
var statearr_30500_30533 = state_30478__$1;
(statearr_30500_30533[(2)] = inst_30472);

(statearr_30500_30533[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30479 === (19))){
var inst_30459 = (state_30478[(2)]);
var state_30478__$1 = state_30478;
var statearr_30501_30534 = state_30478__$1;
(statearr_30501_30534[(2)] = inst_30459);

(statearr_30501_30534[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30479 === (11))){
var inst_30444 = (state_30478[(7)]);
var inst_30430 = (state_30478[(9)]);
var inst_30444__$1 = cljs.core.seq.call(null,inst_30430);
var state_30478__$1 = (function (){var statearr_30502 = state_30478;
(statearr_30502[(7)] = inst_30444__$1);

return statearr_30502;
})();
if(inst_30444__$1){
var statearr_30503_30535 = state_30478__$1;
(statearr_30503_30535[(1)] = (14));

} else {
var statearr_30504_30536 = state_30478__$1;
(statearr_30504_30536[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30479 === (9))){
var inst_30466 = (state_30478[(2)]);
var inst_30467 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_30478__$1 = (function (){var statearr_30505 = state_30478;
(statearr_30505[(15)] = inst_30466);

return statearr_30505;
})();
if(cljs.core.truth_(inst_30467)){
var statearr_30506_30537 = state_30478__$1;
(statearr_30506_30537[(1)] = (21));

} else {
var statearr_30507_30538 = state_30478__$1;
(statearr_30507_30538[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30479 === (5))){
var inst_30422 = cljs.core.async.close_BANG_.call(null,out);
var state_30478__$1 = state_30478;
var statearr_30508_30539 = state_30478__$1;
(statearr_30508_30539[(2)] = inst_30422);

(statearr_30508_30539[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30479 === (14))){
var inst_30444 = (state_30478[(7)]);
var inst_30446 = cljs.core.chunked_seq_QMARK_.call(null,inst_30444);
var state_30478__$1 = state_30478;
if(inst_30446){
var statearr_30509_30540 = state_30478__$1;
(statearr_30509_30540[(1)] = (17));

} else {
var statearr_30510_30541 = state_30478__$1;
(statearr_30510_30541[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30479 === (16))){
var inst_30462 = (state_30478[(2)]);
var state_30478__$1 = state_30478;
var statearr_30511_30542 = state_30478__$1;
(statearr_30511_30542[(2)] = inst_30462);

(statearr_30511_30542[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30479 === (10))){
var inst_30431 = (state_30478[(10)]);
var inst_30433 = (state_30478[(12)]);
var inst_30438 = cljs.core._nth.call(null,inst_30431,inst_30433);
var state_30478__$1 = state_30478;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30478__$1,(13),out,inst_30438);
} else {
if((state_val_30479 === (18))){
var inst_30444 = (state_30478[(7)]);
var inst_30453 = cljs.core.first.call(null,inst_30444);
var state_30478__$1 = state_30478;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30478__$1,(20),out,inst_30453);
} else {
if((state_val_30479 === (8))){
var inst_30432 = (state_30478[(11)]);
var inst_30433 = (state_30478[(12)]);
var inst_30435 = (inst_30433 < inst_30432);
var inst_30436 = inst_30435;
var state_30478__$1 = state_30478;
if(cljs.core.truth_(inst_30436)){
var statearr_30512_30543 = state_30478__$1;
(statearr_30512_30543[(1)] = (10));

} else {
var statearr_30513_30544 = state_30478__$1;
(statearr_30513_30544[(1)] = (11));

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
});})(c__14073__auto__))
;
return ((function (switch__14017__auto__,c__14073__auto__){
return (function() {
var state_machine__14018__auto__ = null;
var state_machine__14018__auto____0 = (function (){
var statearr_30517 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30517[(0)] = state_machine__14018__auto__);

(statearr_30517[(1)] = (1));

return statearr_30517;
});
var state_machine__14018__auto____1 = (function (state_30478){
while(true){
var ret_value__14019__auto__ = (function (){try{while(true){
var result__14020__auto__ = switch__14017__auto__.call(null,state_30478);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14020__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14020__auto__;
}
break;
}
}catch (e30518){if((e30518 instanceof Object)){
var ex__14021__auto__ = e30518;
var statearr_30519_30545 = state_30478;
(statearr_30519_30545[(5)] = ex__14021__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30478);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30518;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14019__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30546 = state_30478;
state_30478 = G__30546;
continue;
} else {
return ret_value__14019__auto__;
}
break;
}
});
state_machine__14018__auto__ = function(state_30478){
switch(arguments.length){
case 0:
return state_machine__14018__auto____0.call(this);
case 1:
return state_machine__14018__auto____1.call(this,state_30478);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14018__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14018__auto____0;
state_machine__14018__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14018__auto____1;
return state_machine__14018__auto__;
})()
;})(switch__14017__auto__,c__14073__auto__))
})();
var state__14075__auto__ = (function (){var statearr_30520 = f__14074__auto__.call(null);
(statearr_30520[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14073__auto__);

return statearr_30520;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14075__auto__);
});})(c__14073__auto__))
);

return c__14073__auto__;
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){
return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){
return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){
return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__14073__auto___30643 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14073__auto___30643,out){
return (function (){
var f__14074__auto__ = (function (){var switch__14017__auto__ = ((function (c__14073__auto___30643,out){
return (function (state_30618){
var state_val_30619 = (state_30618[(1)]);
if((state_val_30619 === (7))){
var inst_30613 = (state_30618[(2)]);
var state_30618__$1 = state_30618;
var statearr_30620_30644 = state_30618__$1;
(statearr_30620_30644[(2)] = inst_30613);

(statearr_30620_30644[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30619 === (1))){
var inst_30595 = null;
var state_30618__$1 = (function (){var statearr_30621 = state_30618;
(statearr_30621[(7)] = inst_30595);

return statearr_30621;
})();
var statearr_30622_30645 = state_30618__$1;
(statearr_30622_30645[(2)] = null);

(statearr_30622_30645[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30619 === (4))){
var inst_30598 = (state_30618[(8)]);
var inst_30598__$1 = (state_30618[(2)]);
var inst_30599 = (inst_30598__$1 == null);
var inst_30600 = cljs.core.not.call(null,inst_30599);
var state_30618__$1 = (function (){var statearr_30623 = state_30618;
(statearr_30623[(8)] = inst_30598__$1);

return statearr_30623;
})();
if(inst_30600){
var statearr_30624_30646 = state_30618__$1;
(statearr_30624_30646[(1)] = (5));

} else {
var statearr_30625_30647 = state_30618__$1;
(statearr_30625_30647[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30619 === (6))){
var state_30618__$1 = state_30618;
var statearr_30626_30648 = state_30618__$1;
(statearr_30626_30648[(2)] = null);

(statearr_30626_30648[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30619 === (3))){
var inst_30615 = (state_30618[(2)]);
var inst_30616 = cljs.core.async.close_BANG_.call(null,out);
var state_30618__$1 = (function (){var statearr_30627 = state_30618;
(statearr_30627[(9)] = inst_30615);

return statearr_30627;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30618__$1,inst_30616);
} else {
if((state_val_30619 === (2))){
var state_30618__$1 = state_30618;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30618__$1,(4),ch);
} else {
if((state_val_30619 === (11))){
var inst_30598 = (state_30618[(8)]);
var inst_30607 = (state_30618[(2)]);
var inst_30595 = inst_30598;
var state_30618__$1 = (function (){var statearr_30628 = state_30618;
(statearr_30628[(10)] = inst_30607);

(statearr_30628[(7)] = inst_30595);

return statearr_30628;
})();
var statearr_30629_30649 = state_30618__$1;
(statearr_30629_30649[(2)] = null);

(statearr_30629_30649[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30619 === (9))){
var inst_30598 = (state_30618[(8)]);
var state_30618__$1 = state_30618;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30618__$1,(11),out,inst_30598);
} else {
if((state_val_30619 === (5))){
var inst_30598 = (state_30618[(8)]);
var inst_30595 = (state_30618[(7)]);
var inst_30602 = cljs.core._EQ_.call(null,inst_30598,inst_30595);
var state_30618__$1 = state_30618;
if(inst_30602){
var statearr_30631_30650 = state_30618__$1;
(statearr_30631_30650[(1)] = (8));

} else {
var statearr_30632_30651 = state_30618__$1;
(statearr_30632_30651[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30619 === (10))){
var inst_30610 = (state_30618[(2)]);
var state_30618__$1 = state_30618;
var statearr_30633_30652 = state_30618__$1;
(statearr_30633_30652[(2)] = inst_30610);

(statearr_30633_30652[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30619 === (8))){
var inst_30595 = (state_30618[(7)]);
var tmp30630 = inst_30595;
var inst_30595__$1 = tmp30630;
var state_30618__$1 = (function (){var statearr_30634 = state_30618;
(statearr_30634[(7)] = inst_30595__$1);

return statearr_30634;
})();
var statearr_30635_30653 = state_30618__$1;
(statearr_30635_30653[(2)] = null);

(statearr_30635_30653[(1)] = (2));


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
});})(c__14073__auto___30643,out))
;
return ((function (switch__14017__auto__,c__14073__auto___30643,out){
return (function() {
var state_machine__14018__auto__ = null;
var state_machine__14018__auto____0 = (function (){
var statearr_30639 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30639[(0)] = state_machine__14018__auto__);

(statearr_30639[(1)] = (1));

return statearr_30639;
});
var state_machine__14018__auto____1 = (function (state_30618){
while(true){
var ret_value__14019__auto__ = (function (){try{while(true){
var result__14020__auto__ = switch__14017__auto__.call(null,state_30618);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14020__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14020__auto__;
}
break;
}
}catch (e30640){if((e30640 instanceof Object)){
var ex__14021__auto__ = e30640;
var statearr_30641_30654 = state_30618;
(statearr_30641_30654[(5)] = ex__14021__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30618);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30640;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14019__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30655 = state_30618;
state_30618 = G__30655;
continue;
} else {
return ret_value__14019__auto__;
}
break;
}
});
state_machine__14018__auto__ = function(state_30618){
switch(arguments.length){
case 0:
return state_machine__14018__auto____0.call(this);
case 1:
return state_machine__14018__auto____1.call(this,state_30618);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14018__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14018__auto____0;
state_machine__14018__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14018__auto____1;
return state_machine__14018__auto__;
})()
;})(switch__14017__auto__,c__14073__auto___30643,out))
})();
var state__14075__auto__ = (function (){var statearr_30642 = f__14074__auto__.call(null);
(statearr_30642[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14073__auto___30643);

return statearr_30642;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14075__auto__);
});})(c__14073__auto___30643,out))
);


return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){
return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__14073__auto___30790 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14073__auto___30790,out){
return (function (){
var f__14074__auto__ = (function (){var switch__14017__auto__ = ((function (c__14073__auto___30790,out){
return (function (state_30760){
var state_val_30761 = (state_30760[(1)]);
if((state_val_30761 === (7))){
var inst_30756 = (state_30760[(2)]);
var state_30760__$1 = state_30760;
var statearr_30762_30791 = state_30760__$1;
(statearr_30762_30791[(2)] = inst_30756);

(statearr_30762_30791[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30761 === (1))){
var inst_30723 = (new Array(n));
var inst_30724 = inst_30723;
var inst_30725 = (0);
var state_30760__$1 = (function (){var statearr_30763 = state_30760;
(statearr_30763[(7)] = inst_30724);

(statearr_30763[(8)] = inst_30725);

return statearr_30763;
})();
var statearr_30764_30792 = state_30760__$1;
(statearr_30764_30792[(2)] = null);

(statearr_30764_30792[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30761 === (4))){
var inst_30728 = (state_30760[(9)]);
var inst_30728__$1 = (state_30760[(2)]);
var inst_30729 = (inst_30728__$1 == null);
var inst_30730 = cljs.core.not.call(null,inst_30729);
var state_30760__$1 = (function (){var statearr_30765 = state_30760;
(statearr_30765[(9)] = inst_30728__$1);

return statearr_30765;
})();
if(inst_30730){
var statearr_30766_30793 = state_30760__$1;
(statearr_30766_30793[(1)] = (5));

} else {
var statearr_30767_30794 = state_30760__$1;
(statearr_30767_30794[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30761 === (15))){
var inst_30750 = (state_30760[(2)]);
var state_30760__$1 = state_30760;
var statearr_30768_30795 = state_30760__$1;
(statearr_30768_30795[(2)] = inst_30750);

(statearr_30768_30795[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30761 === (13))){
var state_30760__$1 = state_30760;
var statearr_30769_30796 = state_30760__$1;
(statearr_30769_30796[(2)] = null);

(statearr_30769_30796[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30761 === (6))){
var inst_30725 = (state_30760[(8)]);
var inst_30746 = (inst_30725 > (0));
var state_30760__$1 = state_30760;
if(cljs.core.truth_(inst_30746)){
var statearr_30770_30797 = state_30760__$1;
(statearr_30770_30797[(1)] = (12));

} else {
var statearr_30771_30798 = state_30760__$1;
(statearr_30771_30798[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30761 === (3))){
var inst_30758 = (state_30760[(2)]);
var state_30760__$1 = state_30760;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30760__$1,inst_30758);
} else {
if((state_val_30761 === (12))){
var inst_30724 = (state_30760[(7)]);
var inst_30748 = cljs.core.vec.call(null,inst_30724);
var state_30760__$1 = state_30760;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30760__$1,(15),out,inst_30748);
} else {
if((state_val_30761 === (2))){
var state_30760__$1 = state_30760;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30760__$1,(4),ch);
} else {
if((state_val_30761 === (11))){
var inst_30740 = (state_30760[(2)]);
var inst_30741 = (new Array(n));
var inst_30724 = inst_30741;
var inst_30725 = (0);
var state_30760__$1 = (function (){var statearr_30772 = state_30760;
(statearr_30772[(10)] = inst_30740);

(statearr_30772[(7)] = inst_30724);

(statearr_30772[(8)] = inst_30725);

return statearr_30772;
})();
var statearr_30773_30799 = state_30760__$1;
(statearr_30773_30799[(2)] = null);

(statearr_30773_30799[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30761 === (9))){
var inst_30724 = (state_30760[(7)]);
var inst_30738 = cljs.core.vec.call(null,inst_30724);
var state_30760__$1 = state_30760;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30760__$1,(11),out,inst_30738);
} else {
if((state_val_30761 === (5))){
var inst_30728 = (state_30760[(9)]);
var inst_30733 = (state_30760[(11)]);
var inst_30724 = (state_30760[(7)]);
var inst_30725 = (state_30760[(8)]);
var inst_30732 = (inst_30724[inst_30725] = inst_30728);
var inst_30733__$1 = (inst_30725 + (1));
var inst_30734 = (inst_30733__$1 < n);
var state_30760__$1 = (function (){var statearr_30774 = state_30760;
(statearr_30774[(11)] = inst_30733__$1);

(statearr_30774[(12)] = inst_30732);

return statearr_30774;
})();
if(cljs.core.truth_(inst_30734)){
var statearr_30775_30800 = state_30760__$1;
(statearr_30775_30800[(1)] = (8));

} else {
var statearr_30776_30801 = state_30760__$1;
(statearr_30776_30801[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30761 === (14))){
var inst_30753 = (state_30760[(2)]);
var inst_30754 = cljs.core.async.close_BANG_.call(null,out);
var state_30760__$1 = (function (){var statearr_30778 = state_30760;
(statearr_30778[(13)] = inst_30753);

return statearr_30778;
})();
var statearr_30779_30802 = state_30760__$1;
(statearr_30779_30802[(2)] = inst_30754);

(statearr_30779_30802[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30761 === (10))){
var inst_30744 = (state_30760[(2)]);
var state_30760__$1 = state_30760;
var statearr_30780_30803 = state_30760__$1;
(statearr_30780_30803[(2)] = inst_30744);

(statearr_30780_30803[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30761 === (8))){
var inst_30733 = (state_30760[(11)]);
var inst_30724 = (state_30760[(7)]);
var tmp30777 = inst_30724;
var inst_30724__$1 = tmp30777;
var inst_30725 = inst_30733;
var state_30760__$1 = (function (){var statearr_30781 = state_30760;
(statearr_30781[(7)] = inst_30724__$1);

(statearr_30781[(8)] = inst_30725);

return statearr_30781;
})();
var statearr_30782_30804 = state_30760__$1;
(statearr_30782_30804[(2)] = null);

(statearr_30782_30804[(1)] = (2));


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
});})(c__14073__auto___30790,out))
;
return ((function (switch__14017__auto__,c__14073__auto___30790,out){
return (function() {
var state_machine__14018__auto__ = null;
var state_machine__14018__auto____0 = (function (){
var statearr_30786 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30786[(0)] = state_machine__14018__auto__);

(statearr_30786[(1)] = (1));

return statearr_30786;
});
var state_machine__14018__auto____1 = (function (state_30760){
while(true){
var ret_value__14019__auto__ = (function (){try{while(true){
var result__14020__auto__ = switch__14017__auto__.call(null,state_30760);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14020__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14020__auto__;
}
break;
}
}catch (e30787){if((e30787 instanceof Object)){
var ex__14021__auto__ = e30787;
var statearr_30788_30805 = state_30760;
(statearr_30788_30805[(5)] = ex__14021__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30760);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30787;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14019__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30806 = state_30760;
state_30760 = G__30806;
continue;
} else {
return ret_value__14019__auto__;
}
break;
}
});
state_machine__14018__auto__ = function(state_30760){
switch(arguments.length){
case 0:
return state_machine__14018__auto____0.call(this);
case 1:
return state_machine__14018__auto____1.call(this,state_30760);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14018__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14018__auto____0;
state_machine__14018__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14018__auto____1;
return state_machine__14018__auto__;
})()
;})(switch__14017__auto__,c__14073__auto___30790,out))
})();
var state__14075__auto__ = (function (){var statearr_30789 = f__14074__auto__.call(null);
(statearr_30789[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14073__auto___30790);

return statearr_30789;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14075__auto__);
});})(c__14073__auto___30790,out))
);


return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){
return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__14073__auto___30949 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14073__auto___30949,out){
return (function (){
var f__14074__auto__ = (function (){var switch__14017__auto__ = ((function (c__14073__auto___30949,out){
return (function (state_30919){
var state_val_30920 = (state_30919[(1)]);
if((state_val_30920 === (7))){
var inst_30915 = (state_30919[(2)]);
var state_30919__$1 = state_30919;
var statearr_30921_30950 = state_30919__$1;
(statearr_30921_30950[(2)] = inst_30915);

(statearr_30921_30950[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30920 === (1))){
var inst_30878 = [];
var inst_30879 = inst_30878;
var inst_30880 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_30919__$1 = (function (){var statearr_30922 = state_30919;
(statearr_30922[(7)] = inst_30879);

(statearr_30922[(8)] = inst_30880);

return statearr_30922;
})();
var statearr_30923_30951 = state_30919__$1;
(statearr_30923_30951[(2)] = null);

(statearr_30923_30951[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30920 === (4))){
var inst_30883 = (state_30919[(9)]);
var inst_30883__$1 = (state_30919[(2)]);
var inst_30884 = (inst_30883__$1 == null);
var inst_30885 = cljs.core.not.call(null,inst_30884);
var state_30919__$1 = (function (){var statearr_30924 = state_30919;
(statearr_30924[(9)] = inst_30883__$1);

return statearr_30924;
})();
if(inst_30885){
var statearr_30925_30952 = state_30919__$1;
(statearr_30925_30952[(1)] = (5));

} else {
var statearr_30926_30953 = state_30919__$1;
(statearr_30926_30953[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30920 === (15))){
var inst_30909 = (state_30919[(2)]);
var state_30919__$1 = state_30919;
var statearr_30927_30954 = state_30919__$1;
(statearr_30927_30954[(2)] = inst_30909);

(statearr_30927_30954[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30920 === (13))){
var state_30919__$1 = state_30919;
var statearr_30928_30955 = state_30919__$1;
(statearr_30928_30955[(2)] = null);

(statearr_30928_30955[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30920 === (6))){
var inst_30879 = (state_30919[(7)]);
var inst_30904 = inst_30879.length;
var inst_30905 = (inst_30904 > (0));
var state_30919__$1 = state_30919;
if(cljs.core.truth_(inst_30905)){
var statearr_30929_30956 = state_30919__$1;
(statearr_30929_30956[(1)] = (12));

} else {
var statearr_30930_30957 = state_30919__$1;
(statearr_30930_30957[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30920 === (3))){
var inst_30917 = (state_30919[(2)]);
var state_30919__$1 = state_30919;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30919__$1,inst_30917);
} else {
if((state_val_30920 === (12))){
var inst_30879 = (state_30919[(7)]);
var inst_30907 = cljs.core.vec.call(null,inst_30879);
var state_30919__$1 = state_30919;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30919__$1,(15),out,inst_30907);
} else {
if((state_val_30920 === (2))){
var state_30919__$1 = state_30919;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30919__$1,(4),ch);
} else {
if((state_val_30920 === (11))){
var inst_30883 = (state_30919[(9)]);
var inst_30887 = (state_30919[(10)]);
var inst_30897 = (state_30919[(2)]);
var inst_30898 = [];
var inst_30899 = inst_30898.push(inst_30883);
var inst_30879 = inst_30898;
var inst_30880 = inst_30887;
var state_30919__$1 = (function (){var statearr_30931 = state_30919;
(statearr_30931[(11)] = inst_30897);

(statearr_30931[(7)] = inst_30879);

(statearr_30931[(8)] = inst_30880);

(statearr_30931[(12)] = inst_30899);

return statearr_30931;
})();
var statearr_30932_30958 = state_30919__$1;
(statearr_30932_30958[(2)] = null);

(statearr_30932_30958[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30920 === (9))){
var inst_30879 = (state_30919[(7)]);
var inst_30895 = cljs.core.vec.call(null,inst_30879);
var state_30919__$1 = state_30919;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30919__$1,(11),out,inst_30895);
} else {
if((state_val_30920 === (5))){
var inst_30883 = (state_30919[(9)]);
var inst_30887 = (state_30919[(10)]);
var inst_30880 = (state_30919[(8)]);
var inst_30887__$1 = f.call(null,inst_30883);
var inst_30888 = cljs.core._EQ_.call(null,inst_30887__$1,inst_30880);
var inst_30889 = cljs.core.keyword_identical_QMARK_.call(null,inst_30880,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_30890 = (inst_30888) || (inst_30889);
var state_30919__$1 = (function (){var statearr_30933 = state_30919;
(statearr_30933[(10)] = inst_30887__$1);

return statearr_30933;
})();
if(cljs.core.truth_(inst_30890)){
var statearr_30934_30959 = state_30919__$1;
(statearr_30934_30959[(1)] = (8));

} else {
var statearr_30935_30960 = state_30919__$1;
(statearr_30935_30960[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30920 === (14))){
var inst_30912 = (state_30919[(2)]);
var inst_30913 = cljs.core.async.close_BANG_.call(null,out);
var state_30919__$1 = (function (){var statearr_30937 = state_30919;
(statearr_30937[(13)] = inst_30912);

return statearr_30937;
})();
var statearr_30938_30961 = state_30919__$1;
(statearr_30938_30961[(2)] = inst_30913);

(statearr_30938_30961[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30920 === (10))){
var inst_30902 = (state_30919[(2)]);
var state_30919__$1 = state_30919;
var statearr_30939_30962 = state_30919__$1;
(statearr_30939_30962[(2)] = inst_30902);

(statearr_30939_30962[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30920 === (8))){
var inst_30879 = (state_30919[(7)]);
var inst_30883 = (state_30919[(9)]);
var inst_30887 = (state_30919[(10)]);
var inst_30892 = inst_30879.push(inst_30883);
var tmp30936 = inst_30879;
var inst_30879__$1 = tmp30936;
var inst_30880 = inst_30887;
var state_30919__$1 = (function (){var statearr_30940 = state_30919;
(statearr_30940[(7)] = inst_30879__$1);

(statearr_30940[(8)] = inst_30880);

(statearr_30940[(14)] = inst_30892);

return statearr_30940;
})();
var statearr_30941_30963 = state_30919__$1;
(statearr_30941_30963[(2)] = null);

(statearr_30941_30963[(1)] = (2));


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
});})(c__14073__auto___30949,out))
;
return ((function (switch__14017__auto__,c__14073__auto___30949,out){
return (function() {
var state_machine__14018__auto__ = null;
var state_machine__14018__auto____0 = (function (){
var statearr_30945 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30945[(0)] = state_machine__14018__auto__);

(statearr_30945[(1)] = (1));

return statearr_30945;
});
var state_machine__14018__auto____1 = (function (state_30919){
while(true){
var ret_value__14019__auto__ = (function (){try{while(true){
var result__14020__auto__ = switch__14017__auto__.call(null,state_30919);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14020__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14020__auto__;
}
break;
}
}catch (e30946){if((e30946 instanceof Object)){
var ex__14021__auto__ = e30946;
var statearr_30947_30964 = state_30919;
(statearr_30947_30964[(5)] = ex__14021__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30919);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30946;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14019__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30965 = state_30919;
state_30919 = G__30965;
continue;
} else {
return ret_value__14019__auto__;
}
break;
}
});
state_machine__14018__auto__ = function(state_30919){
switch(arguments.length){
case 0:
return state_machine__14018__auto____0.call(this);
case 1:
return state_machine__14018__auto____1.call(this,state_30919);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14018__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14018__auto____0;
state_machine__14018__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14018__auto____1;
return state_machine__14018__auto__;
})()
;})(switch__14017__auto__,c__14073__auto___30949,out))
})();
var state__14075__auto__ = (function (){var statearr_30948 = f__14074__auto__.call(null);
(statearr_30948[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14073__auto___30949);

return statearr_30948;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14075__auto__);
});})(c__14073__auto___30949,out))
);


return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;

//# sourceMappingURL=async.js.map