goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__47394 = arguments.length;
switch (G__47394) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async47395 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47395 = (function (f,blockable,meta47396){
this.f = f;
this.blockable = blockable;
this.meta47396 = meta47396;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async47395.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47397,meta47396__$1){
var self__ = this;
var _47397__$1 = this;
return (new cljs.core.async.t_cljs$core$async47395(self__.f,self__.blockable,meta47396__$1));
}));

(cljs.core.async.t_cljs$core$async47395.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47397){
var self__ = this;
var _47397__$1 = this;
return self__.meta47396;
}));

(cljs.core.async.t_cljs$core$async47395.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47395.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async47395.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async47395.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async47395.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta47396","meta47396",-81718978,null)], null);
}));

(cljs.core.async.t_cljs$core$async47395.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async47395.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47395");

(cljs.core.async.t_cljs$core$async47395.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async47395");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async47395.
 */
cljs.core.async.__GT_t_cljs$core$async47395 = (function cljs$core$async$__GT_t_cljs$core$async47395(f__$1,blockable__$1,meta47396){
return (new cljs.core.async.t_cljs$core$async47395(f__$1,blockable__$1,meta47396));
});

}

return (new cljs.core.async.t_cljs$core$async47395(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__47400 = arguments.length;
switch (G__47400) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__47402 = arguments.length;
switch (G__47402) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__47404 = arguments.length;
switch (G__47404) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_48879 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_48879) : fn1.call(null,val_48879));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_48879) : fn1.call(null,val_48879));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__47406 = arguments.length;
switch (G__47406) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4613__auto___48885 = n;
var x_48886 = (0);
while(true){
if((x_48886 < n__4613__auto___48885)){
(a[x_48886] = x_48886);

var G__48888 = (x_48886 + (1));
x_48886 = G__48888;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async47407 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47407 = (function (flag,meta47408){
this.flag = flag;
this.meta47408 = meta47408;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async47407.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47409,meta47408__$1){
var self__ = this;
var _47409__$1 = this;
return (new cljs.core.async.t_cljs$core$async47407(self__.flag,meta47408__$1));
}));

(cljs.core.async.t_cljs$core$async47407.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47409){
var self__ = this;
var _47409__$1 = this;
return self__.meta47408;
}));

(cljs.core.async.t_cljs$core$async47407.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47407.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async47407.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async47407.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async47407.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta47408","meta47408",-732802191,null)], null);
}));

(cljs.core.async.t_cljs$core$async47407.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async47407.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47407");

(cljs.core.async.t_cljs$core$async47407.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async47407");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async47407.
 */
cljs.core.async.__GT_t_cljs$core$async47407 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async47407(flag__$1,meta47408){
return (new cljs.core.async.t_cljs$core$async47407(flag__$1,meta47408));
});

}

return (new cljs.core.async.t_cljs$core$async47407(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async47410 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47410 = (function (flag,cb,meta47411){
this.flag = flag;
this.cb = cb;
this.meta47411 = meta47411;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async47410.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47412,meta47411__$1){
var self__ = this;
var _47412__$1 = this;
return (new cljs.core.async.t_cljs$core$async47410(self__.flag,self__.cb,meta47411__$1));
}));

(cljs.core.async.t_cljs$core$async47410.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47412){
var self__ = this;
var _47412__$1 = this;
return self__.meta47411;
}));

(cljs.core.async.t_cljs$core$async47410.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47410.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async47410.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async47410.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async47410.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta47411","meta47411",-11012542,null)], null);
}));

(cljs.core.async.t_cljs$core$async47410.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async47410.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47410");

(cljs.core.async.t_cljs$core$async47410.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async47410");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async47410.
 */
cljs.core.async.__GT_t_cljs$core$async47410 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async47410(flag__$1,cb__$1,meta47411){
return (new cljs.core.async.t_cljs$core$async47410(flag__$1,cb__$1,meta47411));
});

}

return (new cljs.core.async.t_cljs$core$async47410(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__47413_SHARP_){
var G__47415 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__47413_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__47415) : fret.call(null,G__47415));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__47414_SHARP_){
var G__47416 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__47414_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__47416) : fret.call(null,G__47416));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4126__auto__ = wport;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return port;
}
})()], null));
} else {
var G__48898 = (i + (1));
i = G__48898;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4126__auto__ = ret;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4115__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4115__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
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
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___48900 = arguments.length;
var i__4737__auto___48901 = (0);
while(true){
if((i__4737__auto___48901 < len__4736__auto___48900)){
args__4742__auto__.push((arguments[i__4737__auto___48901]));

var G__48902 = (i__4737__auto___48901 + (1));
i__4737__auto___48901 = G__48902;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__47419){
var map__47420 = p__47419;
var map__47420__$1 = (((((!((map__47420 == null))))?(((((map__47420.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47420.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47420):map__47420);
var opts = map__47420__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq47417){
var G__47418 = cljs.core.first(seq47417);
var seq47417__$1 = cljs.core.next(seq47417);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47418,seq47417__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__47423 = arguments.length;
switch (G__47423) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__47336__auto___48906 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47337__auto__ = (function (){var switch__47300__auto__ = (function (state_47447){
var state_val_47448 = (state_47447[(1)]);
if((state_val_47448 === (7))){
var inst_47443 = (state_47447[(2)]);
var state_47447__$1 = state_47447;
var statearr_47449_48907 = state_47447__$1;
(statearr_47449_48907[(2)] = inst_47443);

(statearr_47449_48907[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47448 === (1))){
var state_47447__$1 = state_47447;
var statearr_47450_48909 = state_47447__$1;
(statearr_47450_48909[(2)] = null);

(statearr_47450_48909[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47448 === (4))){
var inst_47426 = (state_47447[(7)]);
var inst_47426__$1 = (state_47447[(2)]);
var inst_47427 = (inst_47426__$1 == null);
var state_47447__$1 = (function (){var statearr_47451 = state_47447;
(statearr_47451[(7)] = inst_47426__$1);

return statearr_47451;
})();
if(cljs.core.truth_(inst_47427)){
var statearr_47452_48910 = state_47447__$1;
(statearr_47452_48910[(1)] = (5));

} else {
var statearr_47453_48911 = state_47447__$1;
(statearr_47453_48911[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47448 === (13))){
var state_47447__$1 = state_47447;
var statearr_47454_48912 = state_47447__$1;
(statearr_47454_48912[(2)] = null);

(statearr_47454_48912[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47448 === (6))){
var inst_47426 = (state_47447[(7)]);
var state_47447__$1 = state_47447;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47447__$1,(11),to,inst_47426);
} else {
if((state_val_47448 === (3))){
var inst_47445 = (state_47447[(2)]);
var state_47447__$1 = state_47447;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47447__$1,inst_47445);
} else {
if((state_val_47448 === (12))){
var state_47447__$1 = state_47447;
var statearr_47455_48913 = state_47447__$1;
(statearr_47455_48913[(2)] = null);

(statearr_47455_48913[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47448 === (2))){
var state_47447__$1 = state_47447;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47447__$1,(4),from);
} else {
if((state_val_47448 === (11))){
var inst_47436 = (state_47447[(2)]);
var state_47447__$1 = state_47447;
if(cljs.core.truth_(inst_47436)){
var statearr_47456_48914 = state_47447__$1;
(statearr_47456_48914[(1)] = (12));

} else {
var statearr_47457_48915 = state_47447__$1;
(statearr_47457_48915[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47448 === (9))){
var state_47447__$1 = state_47447;
var statearr_47458_48916 = state_47447__$1;
(statearr_47458_48916[(2)] = null);

(statearr_47458_48916[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47448 === (5))){
var state_47447__$1 = state_47447;
if(cljs.core.truth_(close_QMARK_)){
var statearr_47459_48917 = state_47447__$1;
(statearr_47459_48917[(1)] = (8));

} else {
var statearr_47460_48918 = state_47447__$1;
(statearr_47460_48918[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47448 === (14))){
var inst_47441 = (state_47447[(2)]);
var state_47447__$1 = state_47447;
var statearr_47461_48920 = state_47447__$1;
(statearr_47461_48920[(2)] = inst_47441);

(statearr_47461_48920[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47448 === (10))){
var inst_47433 = (state_47447[(2)]);
var state_47447__$1 = state_47447;
var statearr_47462_48921 = state_47447__$1;
(statearr_47462_48921[(2)] = inst_47433);

(statearr_47462_48921[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47448 === (8))){
var inst_47430 = cljs.core.async.close_BANG_(to);
var state_47447__$1 = state_47447;
var statearr_47463_48927 = state_47447__$1;
(statearr_47463_48927[(2)] = inst_47430);

(statearr_47463_48927[(1)] = (10));


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
});
return (function() {
var cljs$core$async$state_machine__47301__auto__ = null;
var cljs$core$async$state_machine__47301__auto____0 = (function (){
var statearr_47464 = [null,null,null,null,null,null,null,null];
(statearr_47464[(0)] = cljs$core$async$state_machine__47301__auto__);

(statearr_47464[(1)] = (1));

return statearr_47464;
});
var cljs$core$async$state_machine__47301__auto____1 = (function (state_47447){
while(true){
var ret_value__47302__auto__ = (function (){try{while(true){
var result__47303__auto__ = switch__47300__auto__(state_47447);
if(cljs.core.keyword_identical_QMARK_(result__47303__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47303__auto__;
}
break;
}
}catch (e47465){var ex__47304__auto__ = e47465;
var statearr_47466_48935 = state_47447;
(statearr_47466_48935[(2)] = ex__47304__auto__);


if(cljs.core.seq((state_47447[(4)]))){
var statearr_47467_48936 = state_47447;
(statearr_47467_48936[(1)] = cljs.core.first((state_47447[(4)])));

} else {
throw ex__47304__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47302__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48939 = state_47447;
state_47447 = G__48939;
continue;
} else {
return ret_value__47302__auto__;
}
break;
}
});
cljs$core$async$state_machine__47301__auto__ = function(state_47447){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__47301__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__47301__auto____1.call(this,state_47447);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__47301__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__47301__auto____0;
cljs$core$async$state_machine__47301__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__47301__auto____1;
return cljs$core$async$state_machine__47301__auto__;
})()
})();
var state__47338__auto__ = (function (){var statearr_47468 = f__47337__auto__();
(statearr_47468[(6)] = c__47336__auto___48906);

return statearr_47468;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47338__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__47469){
var vec__47470 = p__47469;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47470,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47470,(1),null);
var job = vec__47470;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__47336__auto___48945 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47337__auto__ = (function (){var switch__47300__auto__ = (function (state_47477){
var state_val_47478 = (state_47477[(1)]);
if((state_val_47478 === (1))){
var state_47477__$1 = state_47477;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47477__$1,(2),res,v);
} else {
if((state_val_47478 === (2))){
var inst_47474 = (state_47477[(2)]);
var inst_47475 = cljs.core.async.close_BANG_(res);
var state_47477__$1 = (function (){var statearr_47479 = state_47477;
(statearr_47479[(7)] = inst_47474);

return statearr_47479;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_47477__$1,inst_47475);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__47301__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__47301__auto____0 = (function (){
var statearr_47480 = [null,null,null,null,null,null,null,null];
(statearr_47480[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__47301__auto__);

(statearr_47480[(1)] = (1));

return statearr_47480;
});
var cljs$core$async$pipeline_STAR__$_state_machine__47301__auto____1 = (function (state_47477){
while(true){
var ret_value__47302__auto__ = (function (){try{while(true){
var result__47303__auto__ = switch__47300__auto__(state_47477);
if(cljs.core.keyword_identical_QMARK_(result__47303__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47303__auto__;
}
break;
}
}catch (e47481){var ex__47304__auto__ = e47481;
var statearr_47482_48952 = state_47477;
(statearr_47482_48952[(2)] = ex__47304__auto__);


if(cljs.core.seq((state_47477[(4)]))){
var statearr_47483_48953 = state_47477;
(statearr_47483_48953[(1)] = cljs.core.first((state_47477[(4)])));

} else {
throw ex__47304__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47302__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48954 = state_47477;
state_47477 = G__48954;
continue;
} else {
return ret_value__47302__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__47301__auto__ = function(state_47477){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__47301__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__47301__auto____1.call(this,state_47477);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__47301__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__47301__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__47301__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__47301__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__47301__auto__;
})()
})();
var state__47338__auto__ = (function (){var statearr_47484 = f__47337__auto__();
(statearr_47484[(6)] = c__47336__auto___48945);

return statearr_47484;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47338__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__47485){
var vec__47486 = p__47485;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47486,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47486,(1),null);
var job = vec__47486;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4613__auto___48955 = n;
var __48956 = (0);
while(true){
if((__48956 < n__4613__auto___48955)){
var G__47489_48957 = type;
var G__47489_48958__$1 = (((G__47489_48957 instanceof cljs.core.Keyword))?G__47489_48957.fqn:null);
switch (G__47489_48958__$1) {
case "compute":
var c__47336__auto___48960 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__48956,c__47336__auto___48960,G__47489_48957,G__47489_48958__$1,n__4613__auto___48955,jobs,results,process,async){
return (function (){
var f__47337__auto__ = (function (){var switch__47300__auto__ = ((function (__48956,c__47336__auto___48960,G__47489_48957,G__47489_48958__$1,n__4613__auto___48955,jobs,results,process,async){
return (function (state_47502){
var state_val_47503 = (state_47502[(1)]);
if((state_val_47503 === (1))){
var state_47502__$1 = state_47502;
var statearr_47504_48967 = state_47502__$1;
(statearr_47504_48967[(2)] = null);

(statearr_47504_48967[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47503 === (2))){
var state_47502__$1 = state_47502;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47502__$1,(4),jobs);
} else {
if((state_val_47503 === (3))){
var inst_47500 = (state_47502[(2)]);
var state_47502__$1 = state_47502;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47502__$1,inst_47500);
} else {
if((state_val_47503 === (4))){
var inst_47492 = (state_47502[(2)]);
var inst_47493 = process(inst_47492);
var state_47502__$1 = state_47502;
if(cljs.core.truth_(inst_47493)){
var statearr_47505_48969 = state_47502__$1;
(statearr_47505_48969[(1)] = (5));

} else {
var statearr_47506_48970 = state_47502__$1;
(statearr_47506_48970[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47503 === (5))){
var state_47502__$1 = state_47502;
var statearr_47507_48972 = state_47502__$1;
(statearr_47507_48972[(2)] = null);

(statearr_47507_48972[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47503 === (6))){
var state_47502__$1 = state_47502;
var statearr_47508_48975 = state_47502__$1;
(statearr_47508_48975[(2)] = null);

(statearr_47508_48975[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47503 === (7))){
var inst_47498 = (state_47502[(2)]);
var state_47502__$1 = state_47502;
var statearr_47509_48977 = state_47502__$1;
(statearr_47509_48977[(2)] = inst_47498);

(statearr_47509_48977[(1)] = (3));


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
});})(__48956,c__47336__auto___48960,G__47489_48957,G__47489_48958__$1,n__4613__auto___48955,jobs,results,process,async))
;
return ((function (__48956,switch__47300__auto__,c__47336__auto___48960,G__47489_48957,G__47489_48958__$1,n__4613__auto___48955,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__47301__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__47301__auto____0 = (function (){
var statearr_47510 = [null,null,null,null,null,null,null];
(statearr_47510[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__47301__auto__);

(statearr_47510[(1)] = (1));

return statearr_47510;
});
var cljs$core$async$pipeline_STAR__$_state_machine__47301__auto____1 = (function (state_47502){
while(true){
var ret_value__47302__auto__ = (function (){try{while(true){
var result__47303__auto__ = switch__47300__auto__(state_47502);
if(cljs.core.keyword_identical_QMARK_(result__47303__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47303__auto__;
}
break;
}
}catch (e47511){var ex__47304__auto__ = e47511;
var statearr_47512_48980 = state_47502;
(statearr_47512_48980[(2)] = ex__47304__auto__);


if(cljs.core.seq((state_47502[(4)]))){
var statearr_47513_48983 = state_47502;
(statearr_47513_48983[(1)] = cljs.core.first((state_47502[(4)])));

} else {
throw ex__47304__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47302__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48984 = state_47502;
state_47502 = G__48984;
continue;
} else {
return ret_value__47302__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__47301__auto__ = function(state_47502){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__47301__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__47301__auto____1.call(this,state_47502);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__47301__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__47301__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__47301__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__47301__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__47301__auto__;
})()
;})(__48956,switch__47300__auto__,c__47336__auto___48960,G__47489_48957,G__47489_48958__$1,n__4613__auto___48955,jobs,results,process,async))
})();
var state__47338__auto__ = (function (){var statearr_47514 = f__47337__auto__();
(statearr_47514[(6)] = c__47336__auto___48960);

return statearr_47514;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47338__auto__);
});})(__48956,c__47336__auto___48960,G__47489_48957,G__47489_48958__$1,n__4613__auto___48955,jobs,results,process,async))
);


break;
case "async":
var c__47336__auto___48985 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__48956,c__47336__auto___48985,G__47489_48957,G__47489_48958__$1,n__4613__auto___48955,jobs,results,process,async){
return (function (){
var f__47337__auto__ = (function (){var switch__47300__auto__ = ((function (__48956,c__47336__auto___48985,G__47489_48957,G__47489_48958__$1,n__4613__auto___48955,jobs,results,process,async){
return (function (state_47527){
var state_val_47528 = (state_47527[(1)]);
if((state_val_47528 === (1))){
var state_47527__$1 = state_47527;
var statearr_47529_48986 = state_47527__$1;
(statearr_47529_48986[(2)] = null);

(statearr_47529_48986[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47528 === (2))){
var state_47527__$1 = state_47527;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47527__$1,(4),jobs);
} else {
if((state_val_47528 === (3))){
var inst_47525 = (state_47527[(2)]);
var state_47527__$1 = state_47527;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47527__$1,inst_47525);
} else {
if((state_val_47528 === (4))){
var inst_47517 = (state_47527[(2)]);
var inst_47518 = async(inst_47517);
var state_47527__$1 = state_47527;
if(cljs.core.truth_(inst_47518)){
var statearr_47530_48987 = state_47527__$1;
(statearr_47530_48987[(1)] = (5));

} else {
var statearr_47531_48988 = state_47527__$1;
(statearr_47531_48988[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47528 === (5))){
var state_47527__$1 = state_47527;
var statearr_47532_48989 = state_47527__$1;
(statearr_47532_48989[(2)] = null);

(statearr_47532_48989[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47528 === (6))){
var state_47527__$1 = state_47527;
var statearr_47533_48990 = state_47527__$1;
(statearr_47533_48990[(2)] = null);

(statearr_47533_48990[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47528 === (7))){
var inst_47523 = (state_47527[(2)]);
var state_47527__$1 = state_47527;
var statearr_47534_48991 = state_47527__$1;
(statearr_47534_48991[(2)] = inst_47523);

(statearr_47534_48991[(1)] = (3));


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
});})(__48956,c__47336__auto___48985,G__47489_48957,G__47489_48958__$1,n__4613__auto___48955,jobs,results,process,async))
;
return ((function (__48956,switch__47300__auto__,c__47336__auto___48985,G__47489_48957,G__47489_48958__$1,n__4613__auto___48955,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__47301__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__47301__auto____0 = (function (){
var statearr_47535 = [null,null,null,null,null,null,null];
(statearr_47535[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__47301__auto__);

(statearr_47535[(1)] = (1));

return statearr_47535;
});
var cljs$core$async$pipeline_STAR__$_state_machine__47301__auto____1 = (function (state_47527){
while(true){
var ret_value__47302__auto__ = (function (){try{while(true){
var result__47303__auto__ = switch__47300__auto__(state_47527);
if(cljs.core.keyword_identical_QMARK_(result__47303__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47303__auto__;
}
break;
}
}catch (e47536){var ex__47304__auto__ = e47536;
var statearr_47537_48992 = state_47527;
(statearr_47537_48992[(2)] = ex__47304__auto__);


if(cljs.core.seq((state_47527[(4)]))){
var statearr_47538_48993 = state_47527;
(statearr_47538_48993[(1)] = cljs.core.first((state_47527[(4)])));

} else {
throw ex__47304__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47302__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48994 = state_47527;
state_47527 = G__48994;
continue;
} else {
return ret_value__47302__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__47301__auto__ = function(state_47527){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__47301__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__47301__auto____1.call(this,state_47527);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__47301__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__47301__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__47301__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__47301__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__47301__auto__;
})()
;})(__48956,switch__47300__auto__,c__47336__auto___48985,G__47489_48957,G__47489_48958__$1,n__4613__auto___48955,jobs,results,process,async))
})();
var state__47338__auto__ = (function (){var statearr_47539 = f__47337__auto__();
(statearr_47539[(6)] = c__47336__auto___48985);

return statearr_47539;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47338__auto__);
});})(__48956,c__47336__auto___48985,G__47489_48957,G__47489_48958__$1,n__4613__auto___48955,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__47489_48958__$1)].join('')));

}

var G__48995 = (__48956 + (1));
__48956 = G__48995;
continue;
} else {
}
break;
}

var c__47336__auto___48996 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47337__auto__ = (function (){var switch__47300__auto__ = (function (state_47561){
var state_val_47562 = (state_47561[(1)]);
if((state_val_47562 === (7))){
var inst_47557 = (state_47561[(2)]);
var state_47561__$1 = state_47561;
var statearr_47563_48997 = state_47561__$1;
(statearr_47563_48997[(2)] = inst_47557);

(statearr_47563_48997[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47562 === (1))){
var state_47561__$1 = state_47561;
var statearr_47564_48998 = state_47561__$1;
(statearr_47564_48998[(2)] = null);

(statearr_47564_48998[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47562 === (4))){
var inst_47542 = (state_47561[(7)]);
var inst_47542__$1 = (state_47561[(2)]);
var inst_47543 = (inst_47542__$1 == null);
var state_47561__$1 = (function (){var statearr_47565 = state_47561;
(statearr_47565[(7)] = inst_47542__$1);

return statearr_47565;
})();
if(cljs.core.truth_(inst_47543)){
var statearr_47566_48999 = state_47561__$1;
(statearr_47566_48999[(1)] = (5));

} else {
var statearr_47567_49000 = state_47561__$1;
(statearr_47567_49000[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47562 === (6))){
var inst_47547 = (state_47561[(8)]);
var inst_47542 = (state_47561[(7)]);
var inst_47547__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_47548 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_47549 = [inst_47542,inst_47547__$1];
var inst_47550 = (new cljs.core.PersistentVector(null,2,(5),inst_47548,inst_47549,null));
var state_47561__$1 = (function (){var statearr_47568 = state_47561;
(statearr_47568[(8)] = inst_47547__$1);

return statearr_47568;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47561__$1,(8),jobs,inst_47550);
} else {
if((state_val_47562 === (3))){
var inst_47559 = (state_47561[(2)]);
var state_47561__$1 = state_47561;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47561__$1,inst_47559);
} else {
if((state_val_47562 === (2))){
var state_47561__$1 = state_47561;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47561__$1,(4),from);
} else {
if((state_val_47562 === (9))){
var inst_47554 = (state_47561[(2)]);
var state_47561__$1 = (function (){var statearr_47569 = state_47561;
(statearr_47569[(9)] = inst_47554);

return statearr_47569;
})();
var statearr_47570_49002 = state_47561__$1;
(statearr_47570_49002[(2)] = null);

(statearr_47570_49002[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47562 === (5))){
var inst_47545 = cljs.core.async.close_BANG_(jobs);
var state_47561__$1 = state_47561;
var statearr_47571_49004 = state_47561__$1;
(statearr_47571_49004[(2)] = inst_47545);

(statearr_47571_49004[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47562 === (8))){
var inst_47547 = (state_47561[(8)]);
var inst_47552 = (state_47561[(2)]);
var state_47561__$1 = (function (){var statearr_47572 = state_47561;
(statearr_47572[(10)] = inst_47552);

return statearr_47572;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47561__$1,(9),results,inst_47547);
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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__47301__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__47301__auto____0 = (function (){
var statearr_47573 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_47573[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__47301__auto__);

(statearr_47573[(1)] = (1));

return statearr_47573;
});
var cljs$core$async$pipeline_STAR__$_state_machine__47301__auto____1 = (function (state_47561){
while(true){
var ret_value__47302__auto__ = (function (){try{while(true){
var result__47303__auto__ = switch__47300__auto__(state_47561);
if(cljs.core.keyword_identical_QMARK_(result__47303__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47303__auto__;
}
break;
}
}catch (e47574){var ex__47304__auto__ = e47574;
var statearr_47575_49008 = state_47561;
(statearr_47575_49008[(2)] = ex__47304__auto__);


if(cljs.core.seq((state_47561[(4)]))){
var statearr_47576_49010 = state_47561;
(statearr_47576_49010[(1)] = cljs.core.first((state_47561[(4)])));

} else {
throw ex__47304__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47302__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49012 = state_47561;
state_47561 = G__49012;
continue;
} else {
return ret_value__47302__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__47301__auto__ = function(state_47561){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__47301__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__47301__auto____1.call(this,state_47561);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__47301__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__47301__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__47301__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__47301__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__47301__auto__;
})()
})();
var state__47338__auto__ = (function (){var statearr_47577 = f__47337__auto__();
(statearr_47577[(6)] = c__47336__auto___48996);

return statearr_47577;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47338__auto__);
}));


var c__47336__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47337__auto__ = (function (){var switch__47300__auto__ = (function (state_47615){
var state_val_47616 = (state_47615[(1)]);
if((state_val_47616 === (7))){
var inst_47611 = (state_47615[(2)]);
var state_47615__$1 = state_47615;
var statearr_47617_49013 = state_47615__$1;
(statearr_47617_49013[(2)] = inst_47611);

(statearr_47617_49013[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47616 === (20))){
var state_47615__$1 = state_47615;
var statearr_47618_49016 = state_47615__$1;
(statearr_47618_49016[(2)] = null);

(statearr_47618_49016[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47616 === (1))){
var state_47615__$1 = state_47615;
var statearr_47619_49018 = state_47615__$1;
(statearr_47619_49018[(2)] = null);

(statearr_47619_49018[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47616 === (4))){
var inst_47580 = (state_47615[(7)]);
var inst_47580__$1 = (state_47615[(2)]);
var inst_47581 = (inst_47580__$1 == null);
var state_47615__$1 = (function (){var statearr_47620 = state_47615;
(statearr_47620[(7)] = inst_47580__$1);

return statearr_47620;
})();
if(cljs.core.truth_(inst_47581)){
var statearr_47621_49019 = state_47615__$1;
(statearr_47621_49019[(1)] = (5));

} else {
var statearr_47622_49020 = state_47615__$1;
(statearr_47622_49020[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47616 === (15))){
var inst_47593 = (state_47615[(8)]);
var state_47615__$1 = state_47615;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47615__$1,(18),to,inst_47593);
} else {
if((state_val_47616 === (21))){
var inst_47606 = (state_47615[(2)]);
var state_47615__$1 = state_47615;
var statearr_47623_49021 = state_47615__$1;
(statearr_47623_49021[(2)] = inst_47606);

(statearr_47623_49021[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47616 === (13))){
var inst_47608 = (state_47615[(2)]);
var state_47615__$1 = (function (){var statearr_47624 = state_47615;
(statearr_47624[(9)] = inst_47608);

return statearr_47624;
})();
var statearr_47625_49023 = state_47615__$1;
(statearr_47625_49023[(2)] = null);

(statearr_47625_49023[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47616 === (6))){
var inst_47580 = (state_47615[(7)]);
var state_47615__$1 = state_47615;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47615__$1,(11),inst_47580);
} else {
if((state_val_47616 === (17))){
var inst_47601 = (state_47615[(2)]);
var state_47615__$1 = state_47615;
if(cljs.core.truth_(inst_47601)){
var statearr_47626_49024 = state_47615__$1;
(statearr_47626_49024[(1)] = (19));

} else {
var statearr_47627_49025 = state_47615__$1;
(statearr_47627_49025[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47616 === (3))){
var inst_47613 = (state_47615[(2)]);
var state_47615__$1 = state_47615;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47615__$1,inst_47613);
} else {
if((state_val_47616 === (12))){
var inst_47590 = (state_47615[(10)]);
var state_47615__$1 = state_47615;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47615__$1,(14),inst_47590);
} else {
if((state_val_47616 === (2))){
var state_47615__$1 = state_47615;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47615__$1,(4),results);
} else {
if((state_val_47616 === (19))){
var state_47615__$1 = state_47615;
var statearr_47628_49027 = state_47615__$1;
(statearr_47628_49027[(2)] = null);

(statearr_47628_49027[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47616 === (11))){
var inst_47590 = (state_47615[(2)]);
var state_47615__$1 = (function (){var statearr_47629 = state_47615;
(statearr_47629[(10)] = inst_47590);

return statearr_47629;
})();
var statearr_47630_49028 = state_47615__$1;
(statearr_47630_49028[(2)] = null);

(statearr_47630_49028[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47616 === (9))){
var state_47615__$1 = state_47615;
var statearr_47631_49029 = state_47615__$1;
(statearr_47631_49029[(2)] = null);

(statearr_47631_49029[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47616 === (5))){
var state_47615__$1 = state_47615;
if(cljs.core.truth_(close_QMARK_)){
var statearr_47632_49031 = state_47615__$1;
(statearr_47632_49031[(1)] = (8));

} else {
var statearr_47633_49032 = state_47615__$1;
(statearr_47633_49032[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47616 === (14))){
var inst_47593 = (state_47615[(8)]);
var inst_47593__$1 = (state_47615[(2)]);
var inst_47594 = (inst_47593__$1 == null);
var inst_47595 = cljs.core.not(inst_47594);
var state_47615__$1 = (function (){var statearr_47634 = state_47615;
(statearr_47634[(8)] = inst_47593__$1);

return statearr_47634;
})();
if(inst_47595){
var statearr_47635_49035 = state_47615__$1;
(statearr_47635_49035[(1)] = (15));

} else {
var statearr_47636_49036 = state_47615__$1;
(statearr_47636_49036[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47616 === (16))){
var state_47615__$1 = state_47615;
var statearr_47637_49037 = state_47615__$1;
(statearr_47637_49037[(2)] = false);

(statearr_47637_49037[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47616 === (10))){
var inst_47587 = (state_47615[(2)]);
var state_47615__$1 = state_47615;
var statearr_47638_49038 = state_47615__$1;
(statearr_47638_49038[(2)] = inst_47587);

(statearr_47638_49038[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47616 === (18))){
var inst_47598 = (state_47615[(2)]);
var state_47615__$1 = state_47615;
var statearr_47639_49039 = state_47615__$1;
(statearr_47639_49039[(2)] = inst_47598);

(statearr_47639_49039[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47616 === (8))){
var inst_47584 = cljs.core.async.close_BANG_(to);
var state_47615__$1 = state_47615;
var statearr_47640_49040 = state_47615__$1;
(statearr_47640_49040[(2)] = inst_47584);

(statearr_47640_49040[(1)] = (10));


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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__47301__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__47301__auto____0 = (function (){
var statearr_47641 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_47641[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__47301__auto__);

(statearr_47641[(1)] = (1));

return statearr_47641;
});
var cljs$core$async$pipeline_STAR__$_state_machine__47301__auto____1 = (function (state_47615){
while(true){
var ret_value__47302__auto__ = (function (){try{while(true){
var result__47303__auto__ = switch__47300__auto__(state_47615);
if(cljs.core.keyword_identical_QMARK_(result__47303__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47303__auto__;
}
break;
}
}catch (e47642){var ex__47304__auto__ = e47642;
var statearr_47643_49041 = state_47615;
(statearr_47643_49041[(2)] = ex__47304__auto__);


if(cljs.core.seq((state_47615[(4)]))){
var statearr_47644_49042 = state_47615;
(statearr_47644_49042[(1)] = cljs.core.first((state_47615[(4)])));

} else {
throw ex__47304__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47302__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49043 = state_47615;
state_47615 = G__49043;
continue;
} else {
return ret_value__47302__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__47301__auto__ = function(state_47615){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__47301__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__47301__auto____1.call(this,state_47615);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__47301__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__47301__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__47301__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__47301__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__47301__auto__;
})()
})();
var state__47338__auto__ = (function (){var statearr_47645 = f__47337__auto__();
(statearr_47645[(6)] = c__47336__auto__);

return statearr_47645;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47338__auto__);
}));

return c__47336__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__47647 = arguments.length;
switch (G__47647) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__47649 = arguments.length;
switch (G__47649) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__47651 = arguments.length;
switch (G__47651) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__47336__auto___49047 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47337__auto__ = (function (){var switch__47300__auto__ = (function (state_47677){
var state_val_47678 = (state_47677[(1)]);
if((state_val_47678 === (7))){
var inst_47673 = (state_47677[(2)]);
var state_47677__$1 = state_47677;
var statearr_47679_49048 = state_47677__$1;
(statearr_47679_49048[(2)] = inst_47673);

(statearr_47679_49048[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47678 === (1))){
var state_47677__$1 = state_47677;
var statearr_47680_49049 = state_47677__$1;
(statearr_47680_49049[(2)] = null);

(statearr_47680_49049[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47678 === (4))){
var inst_47654 = (state_47677[(7)]);
var inst_47654__$1 = (state_47677[(2)]);
var inst_47655 = (inst_47654__$1 == null);
var state_47677__$1 = (function (){var statearr_47681 = state_47677;
(statearr_47681[(7)] = inst_47654__$1);

return statearr_47681;
})();
if(cljs.core.truth_(inst_47655)){
var statearr_47682_49050 = state_47677__$1;
(statearr_47682_49050[(1)] = (5));

} else {
var statearr_47683_49051 = state_47677__$1;
(statearr_47683_49051[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47678 === (13))){
var state_47677__$1 = state_47677;
var statearr_47684_49052 = state_47677__$1;
(statearr_47684_49052[(2)] = null);

(statearr_47684_49052[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47678 === (6))){
var inst_47654 = (state_47677[(7)]);
var inst_47660 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_47654) : p.call(null,inst_47654));
var state_47677__$1 = state_47677;
if(cljs.core.truth_(inst_47660)){
var statearr_47685_49053 = state_47677__$1;
(statearr_47685_49053[(1)] = (9));

} else {
var statearr_47686_49054 = state_47677__$1;
(statearr_47686_49054[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47678 === (3))){
var inst_47675 = (state_47677[(2)]);
var state_47677__$1 = state_47677;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47677__$1,inst_47675);
} else {
if((state_val_47678 === (12))){
var state_47677__$1 = state_47677;
var statearr_47687_49055 = state_47677__$1;
(statearr_47687_49055[(2)] = null);

(statearr_47687_49055[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47678 === (2))){
var state_47677__$1 = state_47677;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47677__$1,(4),ch);
} else {
if((state_val_47678 === (11))){
var inst_47654 = (state_47677[(7)]);
var inst_47664 = (state_47677[(2)]);
var state_47677__$1 = state_47677;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47677__$1,(8),inst_47664,inst_47654);
} else {
if((state_val_47678 === (9))){
var state_47677__$1 = state_47677;
var statearr_47688_49056 = state_47677__$1;
(statearr_47688_49056[(2)] = tc);

(statearr_47688_49056[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47678 === (5))){
var inst_47657 = cljs.core.async.close_BANG_(tc);
var inst_47658 = cljs.core.async.close_BANG_(fc);
var state_47677__$1 = (function (){var statearr_47689 = state_47677;
(statearr_47689[(8)] = inst_47657);

return statearr_47689;
})();
var statearr_47690_49057 = state_47677__$1;
(statearr_47690_49057[(2)] = inst_47658);

(statearr_47690_49057[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47678 === (14))){
var inst_47671 = (state_47677[(2)]);
var state_47677__$1 = state_47677;
var statearr_47691_49058 = state_47677__$1;
(statearr_47691_49058[(2)] = inst_47671);

(statearr_47691_49058[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47678 === (10))){
var state_47677__$1 = state_47677;
var statearr_47692_49059 = state_47677__$1;
(statearr_47692_49059[(2)] = fc);

(statearr_47692_49059[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47678 === (8))){
var inst_47666 = (state_47677[(2)]);
var state_47677__$1 = state_47677;
if(cljs.core.truth_(inst_47666)){
var statearr_47693_49060 = state_47677__$1;
(statearr_47693_49060[(1)] = (12));

} else {
var statearr_47694_49061 = state_47677__$1;
(statearr_47694_49061[(1)] = (13));

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
});
return (function() {
var cljs$core$async$state_machine__47301__auto__ = null;
var cljs$core$async$state_machine__47301__auto____0 = (function (){
var statearr_47695 = [null,null,null,null,null,null,null,null,null];
(statearr_47695[(0)] = cljs$core$async$state_machine__47301__auto__);

(statearr_47695[(1)] = (1));

return statearr_47695;
});
var cljs$core$async$state_machine__47301__auto____1 = (function (state_47677){
while(true){
var ret_value__47302__auto__ = (function (){try{while(true){
var result__47303__auto__ = switch__47300__auto__(state_47677);
if(cljs.core.keyword_identical_QMARK_(result__47303__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47303__auto__;
}
break;
}
}catch (e47696){var ex__47304__auto__ = e47696;
var statearr_47697_49062 = state_47677;
(statearr_47697_49062[(2)] = ex__47304__auto__);


if(cljs.core.seq((state_47677[(4)]))){
var statearr_47698_49063 = state_47677;
(statearr_47698_49063[(1)] = cljs.core.first((state_47677[(4)])));

} else {
throw ex__47304__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47302__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49064 = state_47677;
state_47677 = G__49064;
continue;
} else {
return ret_value__47302__auto__;
}
break;
}
});
cljs$core$async$state_machine__47301__auto__ = function(state_47677){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__47301__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__47301__auto____1.call(this,state_47677);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__47301__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__47301__auto____0;
cljs$core$async$state_machine__47301__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__47301__auto____1;
return cljs$core$async$state_machine__47301__auto__;
})()
})();
var state__47338__auto__ = (function (){var statearr_47699 = f__47337__auto__();
(statearr_47699[(6)] = c__47336__auto___49047);

return statearr_47699;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47338__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__47336__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47337__auto__ = (function (){var switch__47300__auto__ = (function (state_47721){
var state_val_47722 = (state_47721[(1)]);
if((state_val_47722 === (7))){
var inst_47717 = (state_47721[(2)]);
var state_47721__$1 = state_47721;
var statearr_47723_49065 = state_47721__$1;
(statearr_47723_49065[(2)] = inst_47717);

(statearr_47723_49065[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47722 === (1))){
var inst_47700 = init;
var inst_47701 = inst_47700;
var state_47721__$1 = (function (){var statearr_47724 = state_47721;
(statearr_47724[(7)] = inst_47701);

return statearr_47724;
})();
var statearr_47725_49066 = state_47721__$1;
(statearr_47725_49066[(2)] = null);

(statearr_47725_49066[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47722 === (4))){
var inst_47704 = (state_47721[(8)]);
var inst_47704__$1 = (state_47721[(2)]);
var inst_47705 = (inst_47704__$1 == null);
var state_47721__$1 = (function (){var statearr_47726 = state_47721;
(statearr_47726[(8)] = inst_47704__$1);

return statearr_47726;
})();
if(cljs.core.truth_(inst_47705)){
var statearr_47727_49067 = state_47721__$1;
(statearr_47727_49067[(1)] = (5));

} else {
var statearr_47728_49068 = state_47721__$1;
(statearr_47728_49068[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47722 === (6))){
var inst_47704 = (state_47721[(8)]);
var inst_47701 = (state_47721[(7)]);
var inst_47708 = (state_47721[(9)]);
var inst_47708__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_47701,inst_47704) : f.call(null,inst_47701,inst_47704));
var inst_47709 = cljs.core.reduced_QMARK_(inst_47708__$1);
var state_47721__$1 = (function (){var statearr_47729 = state_47721;
(statearr_47729[(9)] = inst_47708__$1);

return statearr_47729;
})();
if(inst_47709){
var statearr_47730_49069 = state_47721__$1;
(statearr_47730_49069[(1)] = (8));

} else {
var statearr_47731_49070 = state_47721__$1;
(statearr_47731_49070[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47722 === (3))){
var inst_47719 = (state_47721[(2)]);
var state_47721__$1 = state_47721;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47721__$1,inst_47719);
} else {
if((state_val_47722 === (2))){
var state_47721__$1 = state_47721;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47721__$1,(4),ch);
} else {
if((state_val_47722 === (9))){
var inst_47708 = (state_47721[(9)]);
var inst_47701 = inst_47708;
var state_47721__$1 = (function (){var statearr_47732 = state_47721;
(statearr_47732[(7)] = inst_47701);

return statearr_47732;
})();
var statearr_47733_49071 = state_47721__$1;
(statearr_47733_49071[(2)] = null);

(statearr_47733_49071[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47722 === (5))){
var inst_47701 = (state_47721[(7)]);
var state_47721__$1 = state_47721;
var statearr_47734_49072 = state_47721__$1;
(statearr_47734_49072[(2)] = inst_47701);

(statearr_47734_49072[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47722 === (10))){
var inst_47715 = (state_47721[(2)]);
var state_47721__$1 = state_47721;
var statearr_47735_49073 = state_47721__$1;
(statearr_47735_49073[(2)] = inst_47715);

(statearr_47735_49073[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47722 === (8))){
var inst_47708 = (state_47721[(9)]);
var inst_47711 = cljs.core.deref(inst_47708);
var state_47721__$1 = state_47721;
var statearr_47736_49074 = state_47721__$1;
(statearr_47736_49074[(2)] = inst_47711);

(statearr_47736_49074[(1)] = (10));


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
});
return (function() {
var cljs$core$async$reduce_$_state_machine__47301__auto__ = null;
var cljs$core$async$reduce_$_state_machine__47301__auto____0 = (function (){
var statearr_47737 = [null,null,null,null,null,null,null,null,null,null];
(statearr_47737[(0)] = cljs$core$async$reduce_$_state_machine__47301__auto__);

(statearr_47737[(1)] = (1));

return statearr_47737;
});
var cljs$core$async$reduce_$_state_machine__47301__auto____1 = (function (state_47721){
while(true){
var ret_value__47302__auto__ = (function (){try{while(true){
var result__47303__auto__ = switch__47300__auto__(state_47721);
if(cljs.core.keyword_identical_QMARK_(result__47303__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47303__auto__;
}
break;
}
}catch (e47738){var ex__47304__auto__ = e47738;
var statearr_47739_49075 = state_47721;
(statearr_47739_49075[(2)] = ex__47304__auto__);


if(cljs.core.seq((state_47721[(4)]))){
var statearr_47740_49076 = state_47721;
(statearr_47740_49076[(1)] = cljs.core.first((state_47721[(4)])));

} else {
throw ex__47304__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47302__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49077 = state_47721;
state_47721 = G__49077;
continue;
} else {
return ret_value__47302__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__47301__auto__ = function(state_47721){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__47301__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__47301__auto____1.call(this,state_47721);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__47301__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__47301__auto____0;
cljs$core$async$reduce_$_state_machine__47301__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__47301__auto____1;
return cljs$core$async$reduce_$_state_machine__47301__auto__;
})()
})();
var state__47338__auto__ = (function (){var statearr_47741 = f__47337__auto__();
(statearr_47741[(6)] = c__47336__auto__);

return statearr_47741;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47338__auto__);
}));

return c__47336__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__47336__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47337__auto__ = (function (){var switch__47300__auto__ = (function (state_47747){
var state_val_47748 = (state_47747[(1)]);
if((state_val_47748 === (1))){
var inst_47742 = cljs.core.async.reduce(f__$1,init,ch);
var state_47747__$1 = state_47747;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47747__$1,(2),inst_47742);
} else {
if((state_val_47748 === (2))){
var inst_47744 = (state_47747[(2)]);
var inst_47745 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_47744) : f__$1.call(null,inst_47744));
var state_47747__$1 = state_47747;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47747__$1,inst_47745);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__47301__auto__ = null;
var cljs$core$async$transduce_$_state_machine__47301__auto____0 = (function (){
var statearr_47749 = [null,null,null,null,null,null,null];
(statearr_47749[(0)] = cljs$core$async$transduce_$_state_machine__47301__auto__);

(statearr_47749[(1)] = (1));

return statearr_47749;
});
var cljs$core$async$transduce_$_state_machine__47301__auto____1 = (function (state_47747){
while(true){
var ret_value__47302__auto__ = (function (){try{while(true){
var result__47303__auto__ = switch__47300__auto__(state_47747);
if(cljs.core.keyword_identical_QMARK_(result__47303__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47303__auto__;
}
break;
}
}catch (e47750){var ex__47304__auto__ = e47750;
var statearr_47751_49078 = state_47747;
(statearr_47751_49078[(2)] = ex__47304__auto__);


if(cljs.core.seq((state_47747[(4)]))){
var statearr_47752_49079 = state_47747;
(statearr_47752_49079[(1)] = cljs.core.first((state_47747[(4)])));

} else {
throw ex__47304__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47302__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49080 = state_47747;
state_47747 = G__49080;
continue;
} else {
return ret_value__47302__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__47301__auto__ = function(state_47747){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__47301__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__47301__auto____1.call(this,state_47747);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__47301__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__47301__auto____0;
cljs$core$async$transduce_$_state_machine__47301__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__47301__auto____1;
return cljs$core$async$transduce_$_state_machine__47301__auto__;
})()
})();
var state__47338__auto__ = (function (){var statearr_47753 = f__47337__auto__();
(statearr_47753[(6)] = c__47336__auto__);

return statearr_47753;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47338__auto__);
}));

return c__47336__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__47755 = arguments.length;
switch (G__47755) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__47336__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47337__auto__ = (function (){var switch__47300__auto__ = (function (state_47780){
var state_val_47781 = (state_47780[(1)]);
if((state_val_47781 === (7))){
var inst_47762 = (state_47780[(2)]);
var state_47780__$1 = state_47780;
var statearr_47782_49087 = state_47780__$1;
(statearr_47782_49087[(2)] = inst_47762);

(statearr_47782_49087[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47781 === (1))){
var inst_47756 = cljs.core.seq(coll);
var inst_47757 = inst_47756;
var state_47780__$1 = (function (){var statearr_47783 = state_47780;
(statearr_47783[(7)] = inst_47757);

return statearr_47783;
})();
var statearr_47784_49088 = state_47780__$1;
(statearr_47784_49088[(2)] = null);

(statearr_47784_49088[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47781 === (4))){
var inst_47757 = (state_47780[(7)]);
var inst_47760 = cljs.core.first(inst_47757);
var state_47780__$1 = state_47780;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47780__$1,(7),ch,inst_47760);
} else {
if((state_val_47781 === (13))){
var inst_47774 = (state_47780[(2)]);
var state_47780__$1 = state_47780;
var statearr_47785_49089 = state_47780__$1;
(statearr_47785_49089[(2)] = inst_47774);

(statearr_47785_49089[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47781 === (6))){
var inst_47765 = (state_47780[(2)]);
var state_47780__$1 = state_47780;
if(cljs.core.truth_(inst_47765)){
var statearr_47786_49090 = state_47780__$1;
(statearr_47786_49090[(1)] = (8));

} else {
var statearr_47787_49091 = state_47780__$1;
(statearr_47787_49091[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47781 === (3))){
var inst_47778 = (state_47780[(2)]);
var state_47780__$1 = state_47780;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47780__$1,inst_47778);
} else {
if((state_val_47781 === (12))){
var state_47780__$1 = state_47780;
var statearr_47788_49092 = state_47780__$1;
(statearr_47788_49092[(2)] = null);

(statearr_47788_49092[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47781 === (2))){
var inst_47757 = (state_47780[(7)]);
var state_47780__$1 = state_47780;
if(cljs.core.truth_(inst_47757)){
var statearr_47789_49094 = state_47780__$1;
(statearr_47789_49094[(1)] = (4));

} else {
var statearr_47790_49095 = state_47780__$1;
(statearr_47790_49095[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47781 === (11))){
var inst_47771 = cljs.core.async.close_BANG_(ch);
var state_47780__$1 = state_47780;
var statearr_47791_49096 = state_47780__$1;
(statearr_47791_49096[(2)] = inst_47771);

(statearr_47791_49096[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47781 === (9))){
var state_47780__$1 = state_47780;
if(cljs.core.truth_(close_QMARK_)){
var statearr_47792_49097 = state_47780__$1;
(statearr_47792_49097[(1)] = (11));

} else {
var statearr_47793_49098 = state_47780__$1;
(statearr_47793_49098[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47781 === (5))){
var inst_47757 = (state_47780[(7)]);
var state_47780__$1 = state_47780;
var statearr_47794_49103 = state_47780__$1;
(statearr_47794_49103[(2)] = inst_47757);

(statearr_47794_49103[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47781 === (10))){
var inst_47776 = (state_47780[(2)]);
var state_47780__$1 = state_47780;
var statearr_47795_49104 = state_47780__$1;
(statearr_47795_49104[(2)] = inst_47776);

(statearr_47795_49104[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47781 === (8))){
var inst_47757 = (state_47780[(7)]);
var inst_47767 = cljs.core.next(inst_47757);
var inst_47757__$1 = inst_47767;
var state_47780__$1 = (function (){var statearr_47796 = state_47780;
(statearr_47796[(7)] = inst_47757__$1);

return statearr_47796;
})();
var statearr_47797_49106 = state_47780__$1;
(statearr_47797_49106[(2)] = null);

(statearr_47797_49106[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__47301__auto__ = null;
var cljs$core$async$state_machine__47301__auto____0 = (function (){
var statearr_47798 = [null,null,null,null,null,null,null,null];
(statearr_47798[(0)] = cljs$core$async$state_machine__47301__auto__);

(statearr_47798[(1)] = (1));

return statearr_47798;
});
var cljs$core$async$state_machine__47301__auto____1 = (function (state_47780){
while(true){
var ret_value__47302__auto__ = (function (){try{while(true){
var result__47303__auto__ = switch__47300__auto__(state_47780);
if(cljs.core.keyword_identical_QMARK_(result__47303__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47303__auto__;
}
break;
}
}catch (e47799){var ex__47304__auto__ = e47799;
var statearr_47800_49107 = state_47780;
(statearr_47800_49107[(2)] = ex__47304__auto__);


if(cljs.core.seq((state_47780[(4)]))){
var statearr_47801_49108 = state_47780;
(statearr_47801_49108[(1)] = cljs.core.first((state_47780[(4)])));

} else {
throw ex__47304__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47302__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49109 = state_47780;
state_47780 = G__49109;
continue;
} else {
return ret_value__47302__auto__;
}
break;
}
});
cljs$core$async$state_machine__47301__auto__ = function(state_47780){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__47301__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__47301__auto____1.call(this,state_47780);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__47301__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__47301__auto____0;
cljs$core$async$state_machine__47301__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__47301__auto____1;
return cljs$core$async$state_machine__47301__auto__;
})()
})();
var state__47338__auto__ = (function (){var statearr_47802 = f__47337__auto__();
(statearr_47802[(6)] = c__47336__auto__);

return statearr_47802;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47338__auto__);
}));

return c__47336__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__47804 = arguments.length;
switch (G__47804) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_49111 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4429__auto__.call(null,_));
} else {
var m__4426__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4426__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_49111(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_49114 = (function (m,ch,close_QMARK_){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4429__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4426__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_49114(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_49117 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_49117(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_49123 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_49123(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async47805 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47805 = (function (ch,cs,meta47806){
this.ch = ch;
this.cs = cs;
this.meta47806 = meta47806;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async47805.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47807,meta47806__$1){
var self__ = this;
var _47807__$1 = this;
return (new cljs.core.async.t_cljs$core$async47805(self__.ch,self__.cs,meta47806__$1));
}));

(cljs.core.async.t_cljs$core$async47805.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47807){
var self__ = this;
var _47807__$1 = this;
return self__.meta47806;
}));

(cljs.core.async.t_cljs$core$async47805.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47805.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async47805.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47805.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async47805.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async47805.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async47805.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta47806","meta47806",1101276560,null)], null);
}));

(cljs.core.async.t_cljs$core$async47805.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async47805.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47805");

(cljs.core.async.t_cljs$core$async47805.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async47805");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async47805.
 */
cljs.core.async.__GT_t_cljs$core$async47805 = (function cljs$core$async$mult_$___GT_t_cljs$core$async47805(ch__$1,cs__$1,meta47806){
return (new cljs.core.async.t_cljs$core$async47805(ch__$1,cs__$1,meta47806));
});

}

return (new cljs.core.async.t_cljs$core$async47805(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__47336__auto___49133 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47337__auto__ = (function (){var switch__47300__auto__ = (function (state_47940){
var state_val_47941 = (state_47940[(1)]);
if((state_val_47941 === (7))){
var inst_47936 = (state_47940[(2)]);
var state_47940__$1 = state_47940;
var statearr_47942_49138 = state_47940__$1;
(statearr_47942_49138[(2)] = inst_47936);

(statearr_47942_49138[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47941 === (20))){
var inst_47841 = (state_47940[(7)]);
var inst_47853 = cljs.core.first(inst_47841);
var inst_47854 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_47853,(0),null);
var inst_47855 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_47853,(1),null);
var state_47940__$1 = (function (){var statearr_47943 = state_47940;
(statearr_47943[(8)] = inst_47854);

return statearr_47943;
})();
if(cljs.core.truth_(inst_47855)){
var statearr_47944_49140 = state_47940__$1;
(statearr_47944_49140[(1)] = (22));

} else {
var statearr_47945_49141 = state_47940__$1;
(statearr_47945_49141[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47941 === (27))){
var inst_47890 = (state_47940[(9)]);
var inst_47885 = (state_47940[(10)]);
var inst_47810 = (state_47940[(11)]);
var inst_47883 = (state_47940[(12)]);
var inst_47890__$1 = cljs.core._nth(inst_47883,inst_47885);
var inst_47891 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_47890__$1,inst_47810,done);
var state_47940__$1 = (function (){var statearr_47946 = state_47940;
(statearr_47946[(9)] = inst_47890__$1);

return statearr_47946;
})();
if(cljs.core.truth_(inst_47891)){
var statearr_47947_49142 = state_47940__$1;
(statearr_47947_49142[(1)] = (30));

} else {
var statearr_47948_49143 = state_47940__$1;
(statearr_47948_49143[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47941 === (1))){
var state_47940__$1 = state_47940;
var statearr_47949_49144 = state_47940__$1;
(statearr_47949_49144[(2)] = null);

(statearr_47949_49144[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47941 === (24))){
var inst_47841 = (state_47940[(7)]);
var inst_47860 = (state_47940[(2)]);
var inst_47861 = cljs.core.next(inst_47841);
var inst_47819 = inst_47861;
var inst_47820 = null;
var inst_47821 = (0);
var inst_47822 = (0);
var state_47940__$1 = (function (){var statearr_47950 = state_47940;
(statearr_47950[(13)] = inst_47822);

(statearr_47950[(14)] = inst_47820);

(statearr_47950[(15)] = inst_47821);

(statearr_47950[(16)] = inst_47819);

(statearr_47950[(17)] = inst_47860);

return statearr_47950;
})();
var statearr_47951_49148 = state_47940__$1;
(statearr_47951_49148[(2)] = null);

(statearr_47951_49148[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47941 === (39))){
var state_47940__$1 = state_47940;
var statearr_47955_49149 = state_47940__$1;
(statearr_47955_49149[(2)] = null);

(statearr_47955_49149[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47941 === (4))){
var inst_47810 = (state_47940[(11)]);
var inst_47810__$1 = (state_47940[(2)]);
var inst_47811 = (inst_47810__$1 == null);
var state_47940__$1 = (function (){var statearr_47956 = state_47940;
(statearr_47956[(11)] = inst_47810__$1);

return statearr_47956;
})();
if(cljs.core.truth_(inst_47811)){
var statearr_47957_49152 = state_47940__$1;
(statearr_47957_49152[(1)] = (5));

} else {
var statearr_47958_49154 = state_47940__$1;
(statearr_47958_49154[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47941 === (15))){
var inst_47822 = (state_47940[(13)]);
var inst_47820 = (state_47940[(14)]);
var inst_47821 = (state_47940[(15)]);
var inst_47819 = (state_47940[(16)]);
var inst_47837 = (state_47940[(2)]);
var inst_47838 = (inst_47822 + (1));
var tmp47952 = inst_47820;
var tmp47953 = inst_47821;
var tmp47954 = inst_47819;
var inst_47819__$1 = tmp47954;
var inst_47820__$1 = tmp47952;
var inst_47821__$1 = tmp47953;
var inst_47822__$1 = inst_47838;
var state_47940__$1 = (function (){var statearr_47959 = state_47940;
(statearr_47959[(13)] = inst_47822__$1);

(statearr_47959[(14)] = inst_47820__$1);

(statearr_47959[(18)] = inst_47837);

(statearr_47959[(15)] = inst_47821__$1);

(statearr_47959[(16)] = inst_47819__$1);

return statearr_47959;
})();
var statearr_47960_49156 = state_47940__$1;
(statearr_47960_49156[(2)] = null);

(statearr_47960_49156[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47941 === (21))){
var inst_47864 = (state_47940[(2)]);
var state_47940__$1 = state_47940;
var statearr_47964_49157 = state_47940__$1;
(statearr_47964_49157[(2)] = inst_47864);

(statearr_47964_49157[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47941 === (31))){
var inst_47890 = (state_47940[(9)]);
var inst_47894 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_47890);
var state_47940__$1 = state_47940;
var statearr_47965_49159 = state_47940__$1;
(statearr_47965_49159[(2)] = inst_47894);

(statearr_47965_49159[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47941 === (32))){
var inst_47885 = (state_47940[(10)]);
var inst_47883 = (state_47940[(12)]);
var inst_47884 = (state_47940[(19)]);
var inst_47882 = (state_47940[(20)]);
var inst_47896 = (state_47940[(2)]);
var inst_47897 = (inst_47885 + (1));
var tmp47961 = inst_47883;
var tmp47962 = inst_47884;
var tmp47963 = inst_47882;
var inst_47882__$1 = tmp47963;
var inst_47883__$1 = tmp47961;
var inst_47884__$1 = tmp47962;
var inst_47885__$1 = inst_47897;
var state_47940__$1 = (function (){var statearr_47966 = state_47940;
(statearr_47966[(21)] = inst_47896);

(statearr_47966[(10)] = inst_47885__$1);

(statearr_47966[(12)] = inst_47883__$1);

(statearr_47966[(19)] = inst_47884__$1);

(statearr_47966[(20)] = inst_47882__$1);

return statearr_47966;
})();
var statearr_47967_49161 = state_47940__$1;
(statearr_47967_49161[(2)] = null);

(statearr_47967_49161[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47941 === (40))){
var inst_47909 = (state_47940[(22)]);
var inst_47913 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_47909);
var state_47940__$1 = state_47940;
var statearr_47968_49165 = state_47940__$1;
(statearr_47968_49165[(2)] = inst_47913);

(statearr_47968_49165[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47941 === (33))){
var inst_47900 = (state_47940[(23)]);
var inst_47902 = cljs.core.chunked_seq_QMARK_(inst_47900);
var state_47940__$1 = state_47940;
if(inst_47902){
var statearr_47969_49167 = state_47940__$1;
(statearr_47969_49167[(1)] = (36));

} else {
var statearr_47970_49168 = state_47940__$1;
(statearr_47970_49168[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47941 === (13))){
var inst_47831 = (state_47940[(24)]);
var inst_47834 = cljs.core.async.close_BANG_(inst_47831);
var state_47940__$1 = state_47940;
var statearr_47971_49169 = state_47940__$1;
(statearr_47971_49169[(2)] = inst_47834);

(statearr_47971_49169[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47941 === (22))){
var inst_47854 = (state_47940[(8)]);
var inst_47857 = cljs.core.async.close_BANG_(inst_47854);
var state_47940__$1 = state_47940;
var statearr_47972_49173 = state_47940__$1;
(statearr_47972_49173[(2)] = inst_47857);

(statearr_47972_49173[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47941 === (36))){
var inst_47900 = (state_47940[(23)]);
var inst_47904 = cljs.core.chunk_first(inst_47900);
var inst_47905 = cljs.core.chunk_rest(inst_47900);
var inst_47906 = cljs.core.count(inst_47904);
var inst_47882 = inst_47905;
var inst_47883 = inst_47904;
var inst_47884 = inst_47906;
var inst_47885 = (0);
var state_47940__$1 = (function (){var statearr_47973 = state_47940;
(statearr_47973[(10)] = inst_47885);

(statearr_47973[(12)] = inst_47883);

(statearr_47973[(19)] = inst_47884);

(statearr_47973[(20)] = inst_47882);

return statearr_47973;
})();
var statearr_47974_49175 = state_47940__$1;
(statearr_47974_49175[(2)] = null);

(statearr_47974_49175[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47941 === (41))){
var inst_47900 = (state_47940[(23)]);
var inst_47915 = (state_47940[(2)]);
var inst_47916 = cljs.core.next(inst_47900);
var inst_47882 = inst_47916;
var inst_47883 = null;
var inst_47884 = (0);
var inst_47885 = (0);
var state_47940__$1 = (function (){var statearr_47975 = state_47940;
(statearr_47975[(10)] = inst_47885);

(statearr_47975[(12)] = inst_47883);

(statearr_47975[(19)] = inst_47884);

(statearr_47975[(20)] = inst_47882);

(statearr_47975[(25)] = inst_47915);

return statearr_47975;
})();
var statearr_47976_49181 = state_47940__$1;
(statearr_47976_49181[(2)] = null);

(statearr_47976_49181[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47941 === (43))){
var state_47940__$1 = state_47940;
var statearr_47977_49185 = state_47940__$1;
(statearr_47977_49185[(2)] = null);

(statearr_47977_49185[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47941 === (29))){
var inst_47924 = (state_47940[(2)]);
var state_47940__$1 = state_47940;
var statearr_47978_49186 = state_47940__$1;
(statearr_47978_49186[(2)] = inst_47924);

(statearr_47978_49186[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47941 === (44))){
var inst_47933 = (state_47940[(2)]);
var state_47940__$1 = (function (){var statearr_47979 = state_47940;
(statearr_47979[(26)] = inst_47933);

return statearr_47979;
})();
var statearr_47980_49190 = state_47940__$1;
(statearr_47980_49190[(2)] = null);

(statearr_47980_49190[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47941 === (6))){
var inst_47874 = (state_47940[(27)]);
var inst_47873 = cljs.core.deref(cs);
var inst_47874__$1 = cljs.core.keys(inst_47873);
var inst_47875 = cljs.core.count(inst_47874__$1);
var inst_47876 = cljs.core.reset_BANG_(dctr,inst_47875);
var inst_47881 = cljs.core.seq(inst_47874__$1);
var inst_47882 = inst_47881;
var inst_47883 = null;
var inst_47884 = (0);
var inst_47885 = (0);
var state_47940__$1 = (function (){var statearr_47981 = state_47940;
(statearr_47981[(10)] = inst_47885);

(statearr_47981[(12)] = inst_47883);

(statearr_47981[(27)] = inst_47874__$1);

(statearr_47981[(28)] = inst_47876);

(statearr_47981[(19)] = inst_47884);

(statearr_47981[(20)] = inst_47882);

return statearr_47981;
})();
var statearr_47982_49194 = state_47940__$1;
(statearr_47982_49194[(2)] = null);

(statearr_47982_49194[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47941 === (28))){
var inst_47900 = (state_47940[(23)]);
var inst_47882 = (state_47940[(20)]);
var inst_47900__$1 = cljs.core.seq(inst_47882);
var state_47940__$1 = (function (){var statearr_47983 = state_47940;
(statearr_47983[(23)] = inst_47900__$1);

return statearr_47983;
})();
if(inst_47900__$1){
var statearr_47984_49198 = state_47940__$1;
(statearr_47984_49198[(1)] = (33));

} else {
var statearr_47985_49199 = state_47940__$1;
(statearr_47985_49199[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47941 === (25))){
var inst_47885 = (state_47940[(10)]);
var inst_47884 = (state_47940[(19)]);
var inst_47887 = (inst_47885 < inst_47884);
var inst_47888 = inst_47887;
var state_47940__$1 = state_47940;
if(cljs.core.truth_(inst_47888)){
var statearr_47986_49200 = state_47940__$1;
(statearr_47986_49200[(1)] = (27));

} else {
var statearr_47987_49201 = state_47940__$1;
(statearr_47987_49201[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47941 === (34))){
var state_47940__$1 = state_47940;
var statearr_47988_49205 = state_47940__$1;
(statearr_47988_49205[(2)] = null);

(statearr_47988_49205[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47941 === (17))){
var state_47940__$1 = state_47940;
var statearr_47989_49206 = state_47940__$1;
(statearr_47989_49206[(2)] = null);

(statearr_47989_49206[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47941 === (3))){
var inst_47938 = (state_47940[(2)]);
var state_47940__$1 = state_47940;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47940__$1,inst_47938);
} else {
if((state_val_47941 === (12))){
var inst_47869 = (state_47940[(2)]);
var state_47940__$1 = state_47940;
var statearr_47990_49209 = state_47940__$1;
(statearr_47990_49209[(2)] = inst_47869);

(statearr_47990_49209[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47941 === (2))){
var state_47940__$1 = state_47940;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47940__$1,(4),ch);
} else {
if((state_val_47941 === (23))){
var state_47940__$1 = state_47940;
var statearr_47991_49210 = state_47940__$1;
(statearr_47991_49210[(2)] = null);

(statearr_47991_49210[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47941 === (35))){
var inst_47922 = (state_47940[(2)]);
var state_47940__$1 = state_47940;
var statearr_47992_49212 = state_47940__$1;
(statearr_47992_49212[(2)] = inst_47922);

(statearr_47992_49212[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47941 === (19))){
var inst_47841 = (state_47940[(7)]);
var inst_47845 = cljs.core.chunk_first(inst_47841);
var inst_47846 = cljs.core.chunk_rest(inst_47841);
var inst_47847 = cljs.core.count(inst_47845);
var inst_47819 = inst_47846;
var inst_47820 = inst_47845;
var inst_47821 = inst_47847;
var inst_47822 = (0);
var state_47940__$1 = (function (){var statearr_47993 = state_47940;
(statearr_47993[(13)] = inst_47822);

(statearr_47993[(14)] = inst_47820);

(statearr_47993[(15)] = inst_47821);

(statearr_47993[(16)] = inst_47819);

return statearr_47993;
})();
var statearr_47994_49215 = state_47940__$1;
(statearr_47994_49215[(2)] = null);

(statearr_47994_49215[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47941 === (11))){
var inst_47841 = (state_47940[(7)]);
var inst_47819 = (state_47940[(16)]);
var inst_47841__$1 = cljs.core.seq(inst_47819);
var state_47940__$1 = (function (){var statearr_47995 = state_47940;
(statearr_47995[(7)] = inst_47841__$1);

return statearr_47995;
})();
if(inst_47841__$1){
var statearr_47996_49220 = state_47940__$1;
(statearr_47996_49220[(1)] = (16));

} else {
var statearr_47997_49221 = state_47940__$1;
(statearr_47997_49221[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47941 === (9))){
var inst_47871 = (state_47940[(2)]);
var state_47940__$1 = state_47940;
var statearr_47998_49222 = state_47940__$1;
(statearr_47998_49222[(2)] = inst_47871);

(statearr_47998_49222[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47941 === (5))){
var inst_47817 = cljs.core.deref(cs);
var inst_47818 = cljs.core.seq(inst_47817);
var inst_47819 = inst_47818;
var inst_47820 = null;
var inst_47821 = (0);
var inst_47822 = (0);
var state_47940__$1 = (function (){var statearr_47999 = state_47940;
(statearr_47999[(13)] = inst_47822);

(statearr_47999[(14)] = inst_47820);

(statearr_47999[(15)] = inst_47821);

(statearr_47999[(16)] = inst_47819);

return statearr_47999;
})();
var statearr_48000_49224 = state_47940__$1;
(statearr_48000_49224[(2)] = null);

(statearr_48000_49224[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47941 === (14))){
var state_47940__$1 = state_47940;
var statearr_48001_49227 = state_47940__$1;
(statearr_48001_49227[(2)] = null);

(statearr_48001_49227[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47941 === (45))){
var inst_47930 = (state_47940[(2)]);
var state_47940__$1 = state_47940;
var statearr_48002_49228 = state_47940__$1;
(statearr_48002_49228[(2)] = inst_47930);

(statearr_48002_49228[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47941 === (26))){
var inst_47874 = (state_47940[(27)]);
var inst_47926 = (state_47940[(2)]);
var inst_47927 = cljs.core.seq(inst_47874);
var state_47940__$1 = (function (){var statearr_48003 = state_47940;
(statearr_48003[(29)] = inst_47926);

return statearr_48003;
})();
if(inst_47927){
var statearr_48004_49233 = state_47940__$1;
(statearr_48004_49233[(1)] = (42));

} else {
var statearr_48005_49234 = state_47940__$1;
(statearr_48005_49234[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47941 === (16))){
var inst_47841 = (state_47940[(7)]);
var inst_47843 = cljs.core.chunked_seq_QMARK_(inst_47841);
var state_47940__$1 = state_47940;
if(inst_47843){
var statearr_48006_49236 = state_47940__$1;
(statearr_48006_49236[(1)] = (19));

} else {
var statearr_48007_49237 = state_47940__$1;
(statearr_48007_49237[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47941 === (38))){
var inst_47919 = (state_47940[(2)]);
var state_47940__$1 = state_47940;
var statearr_48008_49238 = state_47940__$1;
(statearr_48008_49238[(2)] = inst_47919);

(statearr_48008_49238[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47941 === (30))){
var state_47940__$1 = state_47940;
var statearr_48009_49239 = state_47940__$1;
(statearr_48009_49239[(2)] = null);

(statearr_48009_49239[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47941 === (10))){
var inst_47822 = (state_47940[(13)]);
var inst_47820 = (state_47940[(14)]);
var inst_47830 = cljs.core._nth(inst_47820,inst_47822);
var inst_47831 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_47830,(0),null);
var inst_47832 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_47830,(1),null);
var state_47940__$1 = (function (){var statearr_48010 = state_47940;
(statearr_48010[(24)] = inst_47831);

return statearr_48010;
})();
if(cljs.core.truth_(inst_47832)){
var statearr_48011_49241 = state_47940__$1;
(statearr_48011_49241[(1)] = (13));

} else {
var statearr_48012_49242 = state_47940__$1;
(statearr_48012_49242[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47941 === (18))){
var inst_47867 = (state_47940[(2)]);
var state_47940__$1 = state_47940;
var statearr_48013_49243 = state_47940__$1;
(statearr_48013_49243[(2)] = inst_47867);

(statearr_48013_49243[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47941 === (42))){
var state_47940__$1 = state_47940;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47940__$1,(45),dchan);
} else {
if((state_val_47941 === (37))){
var inst_47909 = (state_47940[(22)]);
var inst_47900 = (state_47940[(23)]);
var inst_47810 = (state_47940[(11)]);
var inst_47909__$1 = cljs.core.first(inst_47900);
var inst_47910 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_47909__$1,inst_47810,done);
var state_47940__$1 = (function (){var statearr_48014 = state_47940;
(statearr_48014[(22)] = inst_47909__$1);

return statearr_48014;
})();
if(cljs.core.truth_(inst_47910)){
var statearr_48015_49244 = state_47940__$1;
(statearr_48015_49244[(1)] = (39));

} else {
var statearr_48016_49245 = state_47940__$1;
(statearr_48016_49245[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47941 === (8))){
var inst_47822 = (state_47940[(13)]);
var inst_47821 = (state_47940[(15)]);
var inst_47824 = (inst_47822 < inst_47821);
var inst_47825 = inst_47824;
var state_47940__$1 = state_47940;
if(cljs.core.truth_(inst_47825)){
var statearr_48017_49246 = state_47940__$1;
(statearr_48017_49246[(1)] = (10));

} else {
var statearr_48018_49247 = state_47940__$1;
(statearr_48018_49247[(1)] = (11));

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
});
return (function() {
var cljs$core$async$mult_$_state_machine__47301__auto__ = null;
var cljs$core$async$mult_$_state_machine__47301__auto____0 = (function (){
var statearr_48019 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48019[(0)] = cljs$core$async$mult_$_state_machine__47301__auto__);

(statearr_48019[(1)] = (1));

return statearr_48019;
});
var cljs$core$async$mult_$_state_machine__47301__auto____1 = (function (state_47940){
while(true){
var ret_value__47302__auto__ = (function (){try{while(true){
var result__47303__auto__ = switch__47300__auto__(state_47940);
if(cljs.core.keyword_identical_QMARK_(result__47303__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47303__auto__;
}
break;
}
}catch (e48020){var ex__47304__auto__ = e48020;
var statearr_48021_49250 = state_47940;
(statearr_48021_49250[(2)] = ex__47304__auto__);


if(cljs.core.seq((state_47940[(4)]))){
var statearr_48022_49252 = state_47940;
(statearr_48022_49252[(1)] = cljs.core.first((state_47940[(4)])));

} else {
throw ex__47304__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47302__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49256 = state_47940;
state_47940 = G__49256;
continue;
} else {
return ret_value__47302__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__47301__auto__ = function(state_47940){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__47301__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__47301__auto____1.call(this,state_47940);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__47301__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__47301__auto____0;
cljs$core$async$mult_$_state_machine__47301__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__47301__auto____1;
return cljs$core$async$mult_$_state_machine__47301__auto__;
})()
})();
var state__47338__auto__ = (function (){var statearr_48023 = f__47337__auto__();
(statearr_48023[(6)] = c__47336__auto___49133);

return statearr_48023;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47338__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__48025 = arguments.length;
switch (G__48025) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_49264 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_49264(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_49267 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_49267(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_49272 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_49272(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_49275 = (function (m,state_map){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4429__auto__.call(null,m,state_map));
} else {
var m__4426__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4426__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_49275(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_49280 = (function (m,mode){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4429__auto__.call(null,m,mode));
} else {
var m__4426__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4426__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_49280(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___49283 = arguments.length;
var i__4737__auto___49284 = (0);
while(true){
if((i__4737__auto___49284 < len__4736__auto___49283)){
args__4742__auto__.push((arguments[i__4737__auto___49284]));

var G__49286 = (i__4737__auto___49284 + (1));
i__4737__auto___49284 = G__49286;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__48030){
var map__48031 = p__48030;
var map__48031__$1 = (((((!((map__48031 == null))))?(((((map__48031.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48031.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48031):map__48031);
var opts = map__48031__$1;
var statearr_48033_49292 = state;
(statearr_48033_49292[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_48034_49293 = state;
(statearr_48034_49293[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_48035_49294 = state;
(statearr_48035_49294[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq48026){
var G__48027 = cljs.core.first(seq48026);
var seq48026__$1 = cljs.core.next(seq48026);
var G__48028 = cljs.core.first(seq48026__$1);
var seq48026__$2 = cljs.core.next(seq48026__$1);
var G__48029 = cljs.core.first(seq48026__$2);
var seq48026__$3 = cljs.core.next(seq48026__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48027,G__48028,G__48029,seq48026__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async48036 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48036 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta48037){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta48037 = meta48037;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async48036.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48038,meta48037__$1){
var self__ = this;
var _48038__$1 = this;
return (new cljs.core.async.t_cljs$core$async48036(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta48037__$1));
}));

(cljs.core.async.t_cljs$core$async48036.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48038){
var self__ = this;
var _48038__$1 = this;
return self__.meta48037;
}));

(cljs.core.async.t_cljs$core$async48036.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48036.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async48036.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48036.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async48036.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async48036.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async48036.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async48036.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async48036.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta48037","meta48037",-1961503867,null)], null);
}));

(cljs.core.async.t_cljs$core$async48036.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async48036.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48036");

(cljs.core.async.t_cljs$core$async48036.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async48036");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async48036.
 */
cljs.core.async.__GT_t_cljs$core$async48036 = (function cljs$core$async$mix_$___GT_t_cljs$core$async48036(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta48037){
return (new cljs.core.async.t_cljs$core$async48036(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta48037));
});

}

return (new cljs.core.async.t_cljs$core$async48036(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__47336__auto___49313 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47337__auto__ = (function (){var switch__47300__auto__ = (function (state_48140){
var state_val_48141 = (state_48140[(1)]);
if((state_val_48141 === (7))){
var inst_48055 = (state_48140[(2)]);
var state_48140__$1 = state_48140;
var statearr_48142_49314 = state_48140__$1;
(statearr_48142_49314[(2)] = inst_48055);

(statearr_48142_49314[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48141 === (20))){
var inst_48067 = (state_48140[(7)]);
var state_48140__$1 = state_48140;
var statearr_48143_49316 = state_48140__$1;
(statearr_48143_49316[(2)] = inst_48067);

(statearr_48143_49316[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48141 === (27))){
var state_48140__$1 = state_48140;
var statearr_48144_49320 = state_48140__$1;
(statearr_48144_49320[(2)] = null);

(statearr_48144_49320[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48141 === (1))){
var inst_48042 = (state_48140[(8)]);
var inst_48042__$1 = calc_state();
var inst_48044 = (inst_48042__$1 == null);
var inst_48045 = cljs.core.not(inst_48044);
var state_48140__$1 = (function (){var statearr_48145 = state_48140;
(statearr_48145[(8)] = inst_48042__$1);

return statearr_48145;
})();
if(inst_48045){
var statearr_48146_49321 = state_48140__$1;
(statearr_48146_49321[(1)] = (2));

} else {
var statearr_48147_49322 = state_48140__$1;
(statearr_48147_49322[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48141 === (24))){
var inst_48100 = (state_48140[(9)]);
var inst_48114 = (state_48140[(10)]);
var inst_48091 = (state_48140[(11)]);
var inst_48114__$1 = (inst_48091.cljs$core$IFn$_invoke$arity$1 ? inst_48091.cljs$core$IFn$_invoke$arity$1(inst_48100) : inst_48091.call(null,inst_48100));
var state_48140__$1 = (function (){var statearr_48148 = state_48140;
(statearr_48148[(10)] = inst_48114__$1);

return statearr_48148;
})();
if(cljs.core.truth_(inst_48114__$1)){
var statearr_48149_49323 = state_48140__$1;
(statearr_48149_49323[(1)] = (29));

} else {
var statearr_48150_49324 = state_48140__$1;
(statearr_48150_49324[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48141 === (4))){
var inst_48058 = (state_48140[(2)]);
var state_48140__$1 = state_48140;
if(cljs.core.truth_(inst_48058)){
var statearr_48151_49325 = state_48140__$1;
(statearr_48151_49325[(1)] = (8));

} else {
var statearr_48152_49326 = state_48140__$1;
(statearr_48152_49326[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48141 === (15))){
var inst_48085 = (state_48140[(2)]);
var state_48140__$1 = state_48140;
if(cljs.core.truth_(inst_48085)){
var statearr_48153_49327 = state_48140__$1;
(statearr_48153_49327[(1)] = (19));

} else {
var statearr_48154_49328 = state_48140__$1;
(statearr_48154_49328[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48141 === (21))){
var inst_48090 = (state_48140[(12)]);
var inst_48090__$1 = (state_48140[(2)]);
var inst_48091 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_48090__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_48092 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_48090__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_48093 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_48090__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_48140__$1 = (function (){var statearr_48155 = state_48140;
(statearr_48155[(13)] = inst_48092);

(statearr_48155[(12)] = inst_48090__$1);

(statearr_48155[(11)] = inst_48091);

return statearr_48155;
})();
return cljs.core.async.ioc_alts_BANG_(state_48140__$1,(22),inst_48093);
} else {
if((state_val_48141 === (31))){
var inst_48122 = (state_48140[(2)]);
var state_48140__$1 = state_48140;
if(cljs.core.truth_(inst_48122)){
var statearr_48156_49329 = state_48140__$1;
(statearr_48156_49329[(1)] = (32));

} else {
var statearr_48157_49330 = state_48140__$1;
(statearr_48157_49330[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48141 === (32))){
var inst_48099 = (state_48140[(14)]);
var state_48140__$1 = state_48140;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48140__$1,(35),out,inst_48099);
} else {
if((state_val_48141 === (33))){
var inst_48090 = (state_48140[(12)]);
var inst_48067 = inst_48090;
var state_48140__$1 = (function (){var statearr_48158 = state_48140;
(statearr_48158[(7)] = inst_48067);

return statearr_48158;
})();
var statearr_48159_49331 = state_48140__$1;
(statearr_48159_49331[(2)] = null);

(statearr_48159_49331[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48141 === (13))){
var inst_48067 = (state_48140[(7)]);
var inst_48074 = inst_48067.cljs$lang$protocol_mask$partition0$;
var inst_48075 = (inst_48074 & (64));
var inst_48076 = inst_48067.cljs$core$ISeq$;
var inst_48077 = (cljs.core.PROTOCOL_SENTINEL === inst_48076);
var inst_48078 = ((inst_48075) || (inst_48077));
var state_48140__$1 = state_48140;
if(cljs.core.truth_(inst_48078)){
var statearr_48160_49332 = state_48140__$1;
(statearr_48160_49332[(1)] = (16));

} else {
var statearr_48161_49333 = state_48140__$1;
(statearr_48161_49333[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48141 === (22))){
var inst_48099 = (state_48140[(14)]);
var inst_48100 = (state_48140[(9)]);
var inst_48098 = (state_48140[(2)]);
var inst_48099__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_48098,(0),null);
var inst_48100__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_48098,(1),null);
var inst_48101 = (inst_48099__$1 == null);
var inst_48102 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_48100__$1,change);
var inst_48103 = ((inst_48101) || (inst_48102));
var state_48140__$1 = (function (){var statearr_48162 = state_48140;
(statearr_48162[(14)] = inst_48099__$1);

(statearr_48162[(9)] = inst_48100__$1);

return statearr_48162;
})();
if(cljs.core.truth_(inst_48103)){
var statearr_48163_49334 = state_48140__$1;
(statearr_48163_49334[(1)] = (23));

} else {
var statearr_48164_49335 = state_48140__$1;
(statearr_48164_49335[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48141 === (36))){
var inst_48090 = (state_48140[(12)]);
var inst_48067 = inst_48090;
var state_48140__$1 = (function (){var statearr_48165 = state_48140;
(statearr_48165[(7)] = inst_48067);

return statearr_48165;
})();
var statearr_48166_49336 = state_48140__$1;
(statearr_48166_49336[(2)] = null);

(statearr_48166_49336[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48141 === (29))){
var inst_48114 = (state_48140[(10)]);
var state_48140__$1 = state_48140;
var statearr_48167_49337 = state_48140__$1;
(statearr_48167_49337[(2)] = inst_48114);

(statearr_48167_49337[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48141 === (6))){
var state_48140__$1 = state_48140;
var statearr_48168_49338 = state_48140__$1;
(statearr_48168_49338[(2)] = false);

(statearr_48168_49338[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48141 === (28))){
var inst_48110 = (state_48140[(2)]);
var inst_48111 = calc_state();
var inst_48067 = inst_48111;
var state_48140__$1 = (function (){var statearr_48169 = state_48140;
(statearr_48169[(7)] = inst_48067);

(statearr_48169[(15)] = inst_48110);

return statearr_48169;
})();
var statearr_48170_49339 = state_48140__$1;
(statearr_48170_49339[(2)] = null);

(statearr_48170_49339[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48141 === (25))){
var inst_48136 = (state_48140[(2)]);
var state_48140__$1 = state_48140;
var statearr_48171_49343 = state_48140__$1;
(statearr_48171_49343[(2)] = inst_48136);

(statearr_48171_49343[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48141 === (34))){
var inst_48134 = (state_48140[(2)]);
var state_48140__$1 = state_48140;
var statearr_48172_49344 = state_48140__$1;
(statearr_48172_49344[(2)] = inst_48134);

(statearr_48172_49344[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48141 === (17))){
var state_48140__$1 = state_48140;
var statearr_48173_49345 = state_48140__$1;
(statearr_48173_49345[(2)] = false);

(statearr_48173_49345[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48141 === (3))){
var state_48140__$1 = state_48140;
var statearr_48174_49346 = state_48140__$1;
(statearr_48174_49346[(2)] = false);

(statearr_48174_49346[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48141 === (12))){
var inst_48138 = (state_48140[(2)]);
var state_48140__$1 = state_48140;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48140__$1,inst_48138);
} else {
if((state_val_48141 === (2))){
var inst_48042 = (state_48140[(8)]);
var inst_48047 = inst_48042.cljs$lang$protocol_mask$partition0$;
var inst_48048 = (inst_48047 & (64));
var inst_48049 = inst_48042.cljs$core$ISeq$;
var inst_48050 = (cljs.core.PROTOCOL_SENTINEL === inst_48049);
var inst_48051 = ((inst_48048) || (inst_48050));
var state_48140__$1 = state_48140;
if(cljs.core.truth_(inst_48051)){
var statearr_48175_49350 = state_48140__$1;
(statearr_48175_49350[(1)] = (5));

} else {
var statearr_48176_49351 = state_48140__$1;
(statearr_48176_49351[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48141 === (23))){
var inst_48099 = (state_48140[(14)]);
var inst_48105 = (inst_48099 == null);
var state_48140__$1 = state_48140;
if(cljs.core.truth_(inst_48105)){
var statearr_48177_49352 = state_48140__$1;
(statearr_48177_49352[(1)] = (26));

} else {
var statearr_48178_49353 = state_48140__$1;
(statearr_48178_49353[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48141 === (35))){
var inst_48125 = (state_48140[(2)]);
var state_48140__$1 = state_48140;
if(cljs.core.truth_(inst_48125)){
var statearr_48179_49354 = state_48140__$1;
(statearr_48179_49354[(1)] = (36));

} else {
var statearr_48180_49355 = state_48140__$1;
(statearr_48180_49355[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48141 === (19))){
var inst_48067 = (state_48140[(7)]);
var inst_48087 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_48067);
var state_48140__$1 = state_48140;
var statearr_48181_49356 = state_48140__$1;
(statearr_48181_49356[(2)] = inst_48087);

(statearr_48181_49356[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48141 === (11))){
var inst_48067 = (state_48140[(7)]);
var inst_48071 = (inst_48067 == null);
var inst_48072 = cljs.core.not(inst_48071);
var state_48140__$1 = state_48140;
if(inst_48072){
var statearr_48182_49360 = state_48140__$1;
(statearr_48182_49360[(1)] = (13));

} else {
var statearr_48183_49361 = state_48140__$1;
(statearr_48183_49361[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48141 === (9))){
var inst_48042 = (state_48140[(8)]);
var state_48140__$1 = state_48140;
var statearr_48184_49362 = state_48140__$1;
(statearr_48184_49362[(2)] = inst_48042);

(statearr_48184_49362[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48141 === (5))){
var state_48140__$1 = state_48140;
var statearr_48185_49363 = state_48140__$1;
(statearr_48185_49363[(2)] = true);

(statearr_48185_49363[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48141 === (14))){
var state_48140__$1 = state_48140;
var statearr_48186_49364 = state_48140__$1;
(statearr_48186_49364[(2)] = false);

(statearr_48186_49364[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48141 === (26))){
var inst_48100 = (state_48140[(9)]);
var inst_48107 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_48100);
var state_48140__$1 = state_48140;
var statearr_48187_49365 = state_48140__$1;
(statearr_48187_49365[(2)] = inst_48107);

(statearr_48187_49365[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48141 === (16))){
var state_48140__$1 = state_48140;
var statearr_48188_49366 = state_48140__$1;
(statearr_48188_49366[(2)] = true);

(statearr_48188_49366[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48141 === (38))){
var inst_48130 = (state_48140[(2)]);
var state_48140__$1 = state_48140;
var statearr_48189_49367 = state_48140__$1;
(statearr_48189_49367[(2)] = inst_48130);

(statearr_48189_49367[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48141 === (30))){
var inst_48092 = (state_48140[(13)]);
var inst_48100 = (state_48140[(9)]);
var inst_48091 = (state_48140[(11)]);
var inst_48117 = cljs.core.empty_QMARK_(inst_48091);
var inst_48118 = (inst_48092.cljs$core$IFn$_invoke$arity$1 ? inst_48092.cljs$core$IFn$_invoke$arity$1(inst_48100) : inst_48092.call(null,inst_48100));
var inst_48119 = cljs.core.not(inst_48118);
var inst_48120 = ((inst_48117) && (inst_48119));
var state_48140__$1 = state_48140;
var statearr_48190_49368 = state_48140__$1;
(statearr_48190_49368[(2)] = inst_48120);

(statearr_48190_49368[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48141 === (10))){
var inst_48042 = (state_48140[(8)]);
var inst_48063 = (state_48140[(2)]);
var inst_48064 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_48063,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_48065 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_48063,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_48066 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_48063,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_48067 = inst_48042;
var state_48140__$1 = (function (){var statearr_48191 = state_48140;
(statearr_48191[(7)] = inst_48067);

(statearr_48191[(16)] = inst_48066);

(statearr_48191[(17)] = inst_48064);

(statearr_48191[(18)] = inst_48065);

return statearr_48191;
})();
var statearr_48192_49369 = state_48140__$1;
(statearr_48192_49369[(2)] = null);

(statearr_48192_49369[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48141 === (18))){
var inst_48082 = (state_48140[(2)]);
var state_48140__$1 = state_48140;
var statearr_48193_49370 = state_48140__$1;
(statearr_48193_49370[(2)] = inst_48082);

(statearr_48193_49370[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48141 === (37))){
var state_48140__$1 = state_48140;
var statearr_48194_49371 = state_48140__$1;
(statearr_48194_49371[(2)] = null);

(statearr_48194_49371[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48141 === (8))){
var inst_48042 = (state_48140[(8)]);
var inst_48060 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_48042);
var state_48140__$1 = state_48140;
var statearr_48195_49372 = state_48140__$1;
(statearr_48195_49372[(2)] = inst_48060);

(statearr_48195_49372[(1)] = (10));


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
});
return (function() {
var cljs$core$async$mix_$_state_machine__47301__auto__ = null;
var cljs$core$async$mix_$_state_machine__47301__auto____0 = (function (){
var statearr_48196 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48196[(0)] = cljs$core$async$mix_$_state_machine__47301__auto__);

(statearr_48196[(1)] = (1));

return statearr_48196;
});
var cljs$core$async$mix_$_state_machine__47301__auto____1 = (function (state_48140){
while(true){
var ret_value__47302__auto__ = (function (){try{while(true){
var result__47303__auto__ = switch__47300__auto__(state_48140);
if(cljs.core.keyword_identical_QMARK_(result__47303__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47303__auto__;
}
break;
}
}catch (e48197){var ex__47304__auto__ = e48197;
var statearr_48198_49373 = state_48140;
(statearr_48198_49373[(2)] = ex__47304__auto__);


if(cljs.core.seq((state_48140[(4)]))){
var statearr_48199_49374 = state_48140;
(statearr_48199_49374[(1)] = cljs.core.first((state_48140[(4)])));

} else {
throw ex__47304__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47302__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49375 = state_48140;
state_48140 = G__49375;
continue;
} else {
return ret_value__47302__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__47301__auto__ = function(state_48140){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__47301__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__47301__auto____1.call(this,state_48140);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__47301__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__47301__auto____0;
cljs$core$async$mix_$_state_machine__47301__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__47301__auto____1;
return cljs$core$async$mix_$_state_machine__47301__auto__;
})()
})();
var state__47338__auto__ = (function (){var statearr_48200 = f__47337__auto__();
(statearr_48200[(6)] = c__47336__auto___49313);

return statearr_48200;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47338__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_49376 = (function (p,v,ch,close_QMARK_){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4429__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4426__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_49376(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_49384 = (function (p,v,ch){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4429__auto__.call(null,p,v,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4426__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_49384(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_49399 = (function() {
var G__49400 = null;
var G__49400__1 = (function (p){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4429__auto__.call(null,p));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4426__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__49400__2 = (function (p,v){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4429__auto__.call(null,p,v));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4426__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__49400 = function(p,v){
switch(arguments.length){
case 1:
return G__49400__1.call(this,p);
case 2:
return G__49400__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__49400.cljs$core$IFn$_invoke$arity$1 = G__49400__1;
G__49400.cljs$core$IFn$_invoke$arity$2 = G__49400__2;
return G__49400;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__48202 = arguments.length;
switch (G__48202) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_49399(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_49399(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__48205 = arguments.length;
switch (G__48205) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__48203_SHARP_){
if(cljs.core.truth_((p1__48203_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__48203_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__48203_SHARP_.call(null,topic)))){
return p1__48203_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__48203_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async48206 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48206 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta48207){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta48207 = meta48207;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async48206.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48208,meta48207__$1){
var self__ = this;
var _48208__$1 = this;
return (new cljs.core.async.t_cljs$core$async48206(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta48207__$1));
}));

(cljs.core.async.t_cljs$core$async48206.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48208){
var self__ = this;
var _48208__$1 = this;
return self__.meta48207;
}));

(cljs.core.async.t_cljs$core$async48206.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48206.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async48206.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48206.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async48206.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async48206.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async48206.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async48206.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta48207","meta48207",827515662,null)], null);
}));

(cljs.core.async.t_cljs$core$async48206.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async48206.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48206");

(cljs.core.async.t_cljs$core$async48206.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async48206");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async48206.
 */
cljs.core.async.__GT_t_cljs$core$async48206 = (function cljs$core$async$__GT_t_cljs$core$async48206(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta48207){
return (new cljs.core.async.t_cljs$core$async48206(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta48207));
});

}

return (new cljs.core.async.t_cljs$core$async48206(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__47336__auto___49411 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47337__auto__ = (function (){var switch__47300__auto__ = (function (state_48280){
var state_val_48281 = (state_48280[(1)]);
if((state_val_48281 === (7))){
var inst_48276 = (state_48280[(2)]);
var state_48280__$1 = state_48280;
var statearr_48282_49414 = state_48280__$1;
(statearr_48282_49414[(2)] = inst_48276);

(statearr_48282_49414[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48281 === (20))){
var state_48280__$1 = state_48280;
var statearr_48283_49415 = state_48280__$1;
(statearr_48283_49415[(2)] = null);

(statearr_48283_49415[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48281 === (1))){
var state_48280__$1 = state_48280;
var statearr_48284_49416 = state_48280__$1;
(statearr_48284_49416[(2)] = null);

(statearr_48284_49416[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48281 === (24))){
var inst_48259 = (state_48280[(7)]);
var inst_48268 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_48259);
var state_48280__$1 = state_48280;
var statearr_48285_49417 = state_48280__$1;
(statearr_48285_49417[(2)] = inst_48268);

(statearr_48285_49417[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48281 === (4))){
var inst_48211 = (state_48280[(8)]);
var inst_48211__$1 = (state_48280[(2)]);
var inst_48212 = (inst_48211__$1 == null);
var state_48280__$1 = (function (){var statearr_48286 = state_48280;
(statearr_48286[(8)] = inst_48211__$1);

return statearr_48286;
})();
if(cljs.core.truth_(inst_48212)){
var statearr_48287_49421 = state_48280__$1;
(statearr_48287_49421[(1)] = (5));

} else {
var statearr_48288_49422 = state_48280__$1;
(statearr_48288_49422[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48281 === (15))){
var inst_48253 = (state_48280[(2)]);
var state_48280__$1 = state_48280;
var statearr_48289_49423 = state_48280__$1;
(statearr_48289_49423[(2)] = inst_48253);

(statearr_48289_49423[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48281 === (21))){
var inst_48273 = (state_48280[(2)]);
var state_48280__$1 = (function (){var statearr_48290 = state_48280;
(statearr_48290[(9)] = inst_48273);

return statearr_48290;
})();
var statearr_48291_49424 = state_48280__$1;
(statearr_48291_49424[(2)] = null);

(statearr_48291_49424[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48281 === (13))){
var inst_48235 = (state_48280[(10)]);
var inst_48237 = cljs.core.chunked_seq_QMARK_(inst_48235);
var state_48280__$1 = state_48280;
if(inst_48237){
var statearr_48292_49427 = state_48280__$1;
(statearr_48292_49427[(1)] = (16));

} else {
var statearr_48293_49428 = state_48280__$1;
(statearr_48293_49428[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48281 === (22))){
var inst_48265 = (state_48280[(2)]);
var state_48280__$1 = state_48280;
if(cljs.core.truth_(inst_48265)){
var statearr_48294_49430 = state_48280__$1;
(statearr_48294_49430[(1)] = (23));

} else {
var statearr_48295_49431 = state_48280__$1;
(statearr_48295_49431[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48281 === (6))){
var inst_48261 = (state_48280[(11)]);
var inst_48211 = (state_48280[(8)]);
var inst_48259 = (state_48280[(7)]);
var inst_48259__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_48211) : topic_fn.call(null,inst_48211));
var inst_48260 = cljs.core.deref(mults);
var inst_48261__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_48260,inst_48259__$1);
var state_48280__$1 = (function (){var statearr_48296 = state_48280;
(statearr_48296[(11)] = inst_48261__$1);

(statearr_48296[(7)] = inst_48259__$1);

return statearr_48296;
})();
if(cljs.core.truth_(inst_48261__$1)){
var statearr_48297_49432 = state_48280__$1;
(statearr_48297_49432[(1)] = (19));

} else {
var statearr_48298_49434 = state_48280__$1;
(statearr_48298_49434[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48281 === (25))){
var inst_48270 = (state_48280[(2)]);
var state_48280__$1 = state_48280;
var statearr_48299_49437 = state_48280__$1;
(statearr_48299_49437[(2)] = inst_48270);

(statearr_48299_49437[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48281 === (17))){
var inst_48235 = (state_48280[(10)]);
var inst_48244 = cljs.core.first(inst_48235);
var inst_48245 = cljs.core.async.muxch_STAR_(inst_48244);
var inst_48246 = cljs.core.async.close_BANG_(inst_48245);
var inst_48247 = cljs.core.next(inst_48235);
var inst_48221 = inst_48247;
var inst_48222 = null;
var inst_48223 = (0);
var inst_48224 = (0);
var state_48280__$1 = (function (){var statearr_48300 = state_48280;
(statearr_48300[(12)] = inst_48224);

(statearr_48300[(13)] = inst_48221);

(statearr_48300[(14)] = inst_48246);

(statearr_48300[(15)] = inst_48223);

(statearr_48300[(16)] = inst_48222);

return statearr_48300;
})();
var statearr_48301_49438 = state_48280__$1;
(statearr_48301_49438[(2)] = null);

(statearr_48301_49438[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48281 === (3))){
var inst_48278 = (state_48280[(2)]);
var state_48280__$1 = state_48280;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48280__$1,inst_48278);
} else {
if((state_val_48281 === (12))){
var inst_48255 = (state_48280[(2)]);
var state_48280__$1 = state_48280;
var statearr_48302_49442 = state_48280__$1;
(statearr_48302_49442[(2)] = inst_48255);

(statearr_48302_49442[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48281 === (2))){
var state_48280__$1 = state_48280;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48280__$1,(4),ch);
} else {
if((state_val_48281 === (23))){
var state_48280__$1 = state_48280;
var statearr_48303_49443 = state_48280__$1;
(statearr_48303_49443[(2)] = null);

(statearr_48303_49443[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48281 === (19))){
var inst_48261 = (state_48280[(11)]);
var inst_48211 = (state_48280[(8)]);
var inst_48263 = cljs.core.async.muxch_STAR_(inst_48261);
var state_48280__$1 = state_48280;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48280__$1,(22),inst_48263,inst_48211);
} else {
if((state_val_48281 === (11))){
var inst_48221 = (state_48280[(13)]);
var inst_48235 = (state_48280[(10)]);
var inst_48235__$1 = cljs.core.seq(inst_48221);
var state_48280__$1 = (function (){var statearr_48304 = state_48280;
(statearr_48304[(10)] = inst_48235__$1);

return statearr_48304;
})();
if(inst_48235__$1){
var statearr_48305_49447 = state_48280__$1;
(statearr_48305_49447[(1)] = (13));

} else {
var statearr_48306_49448 = state_48280__$1;
(statearr_48306_49448[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48281 === (9))){
var inst_48257 = (state_48280[(2)]);
var state_48280__$1 = state_48280;
var statearr_48307_49449 = state_48280__$1;
(statearr_48307_49449[(2)] = inst_48257);

(statearr_48307_49449[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48281 === (5))){
var inst_48218 = cljs.core.deref(mults);
var inst_48219 = cljs.core.vals(inst_48218);
var inst_48220 = cljs.core.seq(inst_48219);
var inst_48221 = inst_48220;
var inst_48222 = null;
var inst_48223 = (0);
var inst_48224 = (0);
var state_48280__$1 = (function (){var statearr_48308 = state_48280;
(statearr_48308[(12)] = inst_48224);

(statearr_48308[(13)] = inst_48221);

(statearr_48308[(15)] = inst_48223);

(statearr_48308[(16)] = inst_48222);

return statearr_48308;
})();
var statearr_48309_49450 = state_48280__$1;
(statearr_48309_49450[(2)] = null);

(statearr_48309_49450[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48281 === (14))){
var state_48280__$1 = state_48280;
var statearr_48313_49454 = state_48280__$1;
(statearr_48313_49454[(2)] = null);

(statearr_48313_49454[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48281 === (16))){
var inst_48235 = (state_48280[(10)]);
var inst_48239 = cljs.core.chunk_first(inst_48235);
var inst_48240 = cljs.core.chunk_rest(inst_48235);
var inst_48241 = cljs.core.count(inst_48239);
var inst_48221 = inst_48240;
var inst_48222 = inst_48239;
var inst_48223 = inst_48241;
var inst_48224 = (0);
var state_48280__$1 = (function (){var statearr_48314 = state_48280;
(statearr_48314[(12)] = inst_48224);

(statearr_48314[(13)] = inst_48221);

(statearr_48314[(15)] = inst_48223);

(statearr_48314[(16)] = inst_48222);

return statearr_48314;
})();
var statearr_48315_49455 = state_48280__$1;
(statearr_48315_49455[(2)] = null);

(statearr_48315_49455[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48281 === (10))){
var inst_48224 = (state_48280[(12)]);
var inst_48221 = (state_48280[(13)]);
var inst_48223 = (state_48280[(15)]);
var inst_48222 = (state_48280[(16)]);
var inst_48229 = cljs.core._nth(inst_48222,inst_48224);
var inst_48230 = cljs.core.async.muxch_STAR_(inst_48229);
var inst_48231 = cljs.core.async.close_BANG_(inst_48230);
var inst_48232 = (inst_48224 + (1));
var tmp48310 = inst_48221;
var tmp48311 = inst_48223;
var tmp48312 = inst_48222;
var inst_48221__$1 = tmp48310;
var inst_48222__$1 = tmp48312;
var inst_48223__$1 = tmp48311;
var inst_48224__$1 = inst_48232;
var state_48280__$1 = (function (){var statearr_48316 = state_48280;
(statearr_48316[(12)] = inst_48224__$1);

(statearr_48316[(17)] = inst_48231);

(statearr_48316[(13)] = inst_48221__$1);

(statearr_48316[(15)] = inst_48223__$1);

(statearr_48316[(16)] = inst_48222__$1);

return statearr_48316;
})();
var statearr_48317_49459 = state_48280__$1;
(statearr_48317_49459[(2)] = null);

(statearr_48317_49459[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48281 === (18))){
var inst_48250 = (state_48280[(2)]);
var state_48280__$1 = state_48280;
var statearr_48318_49460 = state_48280__$1;
(statearr_48318_49460[(2)] = inst_48250);

(statearr_48318_49460[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48281 === (8))){
var inst_48224 = (state_48280[(12)]);
var inst_48223 = (state_48280[(15)]);
var inst_48226 = (inst_48224 < inst_48223);
var inst_48227 = inst_48226;
var state_48280__$1 = state_48280;
if(cljs.core.truth_(inst_48227)){
var statearr_48319_49464 = state_48280__$1;
(statearr_48319_49464[(1)] = (10));

} else {
var statearr_48320_49465 = state_48280__$1;
(statearr_48320_49465[(1)] = (11));

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
});
return (function() {
var cljs$core$async$state_machine__47301__auto__ = null;
var cljs$core$async$state_machine__47301__auto____0 = (function (){
var statearr_48321 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48321[(0)] = cljs$core$async$state_machine__47301__auto__);

(statearr_48321[(1)] = (1));

return statearr_48321;
});
var cljs$core$async$state_machine__47301__auto____1 = (function (state_48280){
while(true){
var ret_value__47302__auto__ = (function (){try{while(true){
var result__47303__auto__ = switch__47300__auto__(state_48280);
if(cljs.core.keyword_identical_QMARK_(result__47303__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47303__auto__;
}
break;
}
}catch (e48322){var ex__47304__auto__ = e48322;
var statearr_48323_49466 = state_48280;
(statearr_48323_49466[(2)] = ex__47304__auto__);


if(cljs.core.seq((state_48280[(4)]))){
var statearr_48324_49467 = state_48280;
(statearr_48324_49467[(1)] = cljs.core.first((state_48280[(4)])));

} else {
throw ex__47304__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47302__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49468 = state_48280;
state_48280 = G__49468;
continue;
} else {
return ret_value__47302__auto__;
}
break;
}
});
cljs$core$async$state_machine__47301__auto__ = function(state_48280){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__47301__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__47301__auto____1.call(this,state_48280);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__47301__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__47301__auto____0;
cljs$core$async$state_machine__47301__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__47301__auto____1;
return cljs$core$async$state_machine__47301__auto__;
})()
})();
var state__47338__auto__ = (function (){var statearr_48325 = f__47337__auto__();
(statearr_48325[(6)] = c__47336__auto___49411);

return statearr_48325;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47338__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__48327 = arguments.length;
switch (G__48327) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__48329 = arguments.length;
switch (G__48329) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__48331 = arguments.length;
switch (G__48331) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__47336__auto___49472 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47337__auto__ = (function (){var switch__47300__auto__ = (function (state_48374){
var state_val_48375 = (state_48374[(1)]);
if((state_val_48375 === (7))){
var state_48374__$1 = state_48374;
var statearr_48376_49473 = state_48374__$1;
(statearr_48376_49473[(2)] = null);

(statearr_48376_49473[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48375 === (1))){
var state_48374__$1 = state_48374;
var statearr_48377_49474 = state_48374__$1;
(statearr_48377_49474[(2)] = null);

(statearr_48377_49474[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48375 === (4))){
var inst_48334 = (state_48374[(7)]);
var inst_48335 = (state_48374[(8)]);
var inst_48337 = (inst_48335 < inst_48334);
var state_48374__$1 = state_48374;
if(cljs.core.truth_(inst_48337)){
var statearr_48378_49475 = state_48374__$1;
(statearr_48378_49475[(1)] = (6));

} else {
var statearr_48379_49476 = state_48374__$1;
(statearr_48379_49476[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48375 === (15))){
var inst_48360 = (state_48374[(9)]);
var inst_48365 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_48360);
var state_48374__$1 = state_48374;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48374__$1,(17),out,inst_48365);
} else {
if((state_val_48375 === (13))){
var inst_48360 = (state_48374[(9)]);
var inst_48360__$1 = (state_48374[(2)]);
var inst_48361 = cljs.core.some(cljs.core.nil_QMARK_,inst_48360__$1);
var state_48374__$1 = (function (){var statearr_48380 = state_48374;
(statearr_48380[(9)] = inst_48360__$1);

return statearr_48380;
})();
if(cljs.core.truth_(inst_48361)){
var statearr_48381_49477 = state_48374__$1;
(statearr_48381_49477[(1)] = (14));

} else {
var statearr_48382_49478 = state_48374__$1;
(statearr_48382_49478[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48375 === (6))){
var state_48374__$1 = state_48374;
var statearr_48383_49479 = state_48374__$1;
(statearr_48383_49479[(2)] = null);

(statearr_48383_49479[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48375 === (17))){
var inst_48367 = (state_48374[(2)]);
var state_48374__$1 = (function (){var statearr_48385 = state_48374;
(statearr_48385[(10)] = inst_48367);

return statearr_48385;
})();
var statearr_48386_49480 = state_48374__$1;
(statearr_48386_49480[(2)] = null);

(statearr_48386_49480[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48375 === (3))){
var inst_48372 = (state_48374[(2)]);
var state_48374__$1 = state_48374;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48374__$1,inst_48372);
} else {
if((state_val_48375 === (12))){
var _ = (function (){var statearr_48387 = state_48374;
(statearr_48387[(4)] = cljs.core.rest((state_48374[(4)])));

return statearr_48387;
})();
var state_48374__$1 = state_48374;
var ex48384 = (state_48374__$1[(2)]);
var statearr_48388_49481 = state_48374__$1;
(statearr_48388_49481[(5)] = ex48384);


if((ex48384 instanceof Object)){
var statearr_48389_49482 = state_48374__$1;
(statearr_48389_49482[(1)] = (11));

(statearr_48389_49482[(5)] = null);

} else {
throw ex48384;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48375 === (2))){
var inst_48333 = cljs.core.reset_BANG_(dctr,cnt);
var inst_48334 = cnt;
var inst_48335 = (0);
var state_48374__$1 = (function (){var statearr_48390 = state_48374;
(statearr_48390[(7)] = inst_48334);

(statearr_48390[(8)] = inst_48335);

(statearr_48390[(11)] = inst_48333);

return statearr_48390;
})();
var statearr_48391_49483 = state_48374__$1;
(statearr_48391_49483[(2)] = null);

(statearr_48391_49483[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48375 === (11))){
var inst_48339 = (state_48374[(2)]);
var inst_48340 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_48374__$1 = (function (){var statearr_48392 = state_48374;
(statearr_48392[(12)] = inst_48339);

return statearr_48392;
})();
var statearr_48393_49484 = state_48374__$1;
(statearr_48393_49484[(2)] = inst_48340);

(statearr_48393_49484[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48375 === (9))){
var inst_48335 = (state_48374[(8)]);
var _ = (function (){var statearr_48394 = state_48374;
(statearr_48394[(4)] = cljs.core.cons((12),(state_48374[(4)])));

return statearr_48394;
})();
var inst_48346 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_48335) : chs__$1.call(null,inst_48335));
var inst_48347 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_48335) : done.call(null,inst_48335));
var inst_48348 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_48346,inst_48347);
var ___$1 = (function (){var statearr_48395 = state_48374;
(statearr_48395[(4)] = cljs.core.rest((state_48374[(4)])));

return statearr_48395;
})();
var state_48374__$1 = state_48374;
var statearr_48396_49485 = state_48374__$1;
(statearr_48396_49485[(2)] = inst_48348);

(statearr_48396_49485[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48375 === (5))){
var inst_48358 = (state_48374[(2)]);
var state_48374__$1 = (function (){var statearr_48397 = state_48374;
(statearr_48397[(13)] = inst_48358);

return statearr_48397;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48374__$1,(13),dchan);
} else {
if((state_val_48375 === (14))){
var inst_48363 = cljs.core.async.close_BANG_(out);
var state_48374__$1 = state_48374;
var statearr_48398_49486 = state_48374__$1;
(statearr_48398_49486[(2)] = inst_48363);

(statearr_48398_49486[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48375 === (16))){
var inst_48370 = (state_48374[(2)]);
var state_48374__$1 = state_48374;
var statearr_48399_49487 = state_48374__$1;
(statearr_48399_49487[(2)] = inst_48370);

(statearr_48399_49487[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48375 === (10))){
var inst_48335 = (state_48374[(8)]);
var inst_48351 = (state_48374[(2)]);
var inst_48352 = (inst_48335 + (1));
var inst_48335__$1 = inst_48352;
var state_48374__$1 = (function (){var statearr_48400 = state_48374;
(statearr_48400[(14)] = inst_48351);

(statearr_48400[(8)] = inst_48335__$1);

return statearr_48400;
})();
var statearr_48401_49488 = state_48374__$1;
(statearr_48401_49488[(2)] = null);

(statearr_48401_49488[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48375 === (8))){
var inst_48356 = (state_48374[(2)]);
var state_48374__$1 = state_48374;
var statearr_48402_49489 = state_48374__$1;
(statearr_48402_49489[(2)] = inst_48356);

(statearr_48402_49489[(1)] = (5));


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
});
return (function() {
var cljs$core$async$state_machine__47301__auto__ = null;
var cljs$core$async$state_machine__47301__auto____0 = (function (){
var statearr_48403 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48403[(0)] = cljs$core$async$state_machine__47301__auto__);

(statearr_48403[(1)] = (1));

return statearr_48403;
});
var cljs$core$async$state_machine__47301__auto____1 = (function (state_48374){
while(true){
var ret_value__47302__auto__ = (function (){try{while(true){
var result__47303__auto__ = switch__47300__auto__(state_48374);
if(cljs.core.keyword_identical_QMARK_(result__47303__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47303__auto__;
}
break;
}
}catch (e48404){var ex__47304__auto__ = e48404;
var statearr_48405_49490 = state_48374;
(statearr_48405_49490[(2)] = ex__47304__auto__);


if(cljs.core.seq((state_48374[(4)]))){
var statearr_48406_49491 = state_48374;
(statearr_48406_49491[(1)] = cljs.core.first((state_48374[(4)])));

} else {
throw ex__47304__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47302__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49492 = state_48374;
state_48374 = G__49492;
continue;
} else {
return ret_value__47302__auto__;
}
break;
}
});
cljs$core$async$state_machine__47301__auto__ = function(state_48374){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__47301__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__47301__auto____1.call(this,state_48374);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__47301__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__47301__auto____0;
cljs$core$async$state_machine__47301__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__47301__auto____1;
return cljs$core$async$state_machine__47301__auto__;
})()
})();
var state__47338__auto__ = (function (){var statearr_48407 = f__47337__auto__();
(statearr_48407[(6)] = c__47336__auto___49472);

return statearr_48407;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47338__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__48410 = arguments.length;
switch (G__48410) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__47336__auto___49494 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47337__auto__ = (function (){var switch__47300__auto__ = (function (state_48442){
var state_val_48443 = (state_48442[(1)]);
if((state_val_48443 === (7))){
var inst_48422 = (state_48442[(7)]);
var inst_48421 = (state_48442[(8)]);
var inst_48421__$1 = (state_48442[(2)]);
var inst_48422__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_48421__$1,(0),null);
var inst_48423 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_48421__$1,(1),null);
var inst_48424 = (inst_48422__$1 == null);
var state_48442__$1 = (function (){var statearr_48444 = state_48442;
(statearr_48444[(7)] = inst_48422__$1);

(statearr_48444[(9)] = inst_48423);

(statearr_48444[(8)] = inst_48421__$1);

return statearr_48444;
})();
if(cljs.core.truth_(inst_48424)){
var statearr_48445_49495 = state_48442__$1;
(statearr_48445_49495[(1)] = (8));

} else {
var statearr_48446_49496 = state_48442__$1;
(statearr_48446_49496[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48443 === (1))){
var inst_48411 = cljs.core.vec(chs);
var inst_48412 = inst_48411;
var state_48442__$1 = (function (){var statearr_48447 = state_48442;
(statearr_48447[(10)] = inst_48412);

return statearr_48447;
})();
var statearr_48448_49497 = state_48442__$1;
(statearr_48448_49497[(2)] = null);

(statearr_48448_49497[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48443 === (4))){
var inst_48412 = (state_48442[(10)]);
var state_48442__$1 = state_48442;
return cljs.core.async.ioc_alts_BANG_(state_48442__$1,(7),inst_48412);
} else {
if((state_val_48443 === (6))){
var inst_48438 = (state_48442[(2)]);
var state_48442__$1 = state_48442;
var statearr_48449_49498 = state_48442__$1;
(statearr_48449_49498[(2)] = inst_48438);

(statearr_48449_49498[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48443 === (3))){
var inst_48440 = (state_48442[(2)]);
var state_48442__$1 = state_48442;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48442__$1,inst_48440);
} else {
if((state_val_48443 === (2))){
var inst_48412 = (state_48442[(10)]);
var inst_48414 = cljs.core.count(inst_48412);
var inst_48415 = (inst_48414 > (0));
var state_48442__$1 = state_48442;
if(cljs.core.truth_(inst_48415)){
var statearr_48451_49499 = state_48442__$1;
(statearr_48451_49499[(1)] = (4));

} else {
var statearr_48452_49500 = state_48442__$1;
(statearr_48452_49500[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48443 === (11))){
var inst_48412 = (state_48442[(10)]);
var inst_48431 = (state_48442[(2)]);
var tmp48450 = inst_48412;
var inst_48412__$1 = tmp48450;
var state_48442__$1 = (function (){var statearr_48453 = state_48442;
(statearr_48453[(11)] = inst_48431);

(statearr_48453[(10)] = inst_48412__$1);

return statearr_48453;
})();
var statearr_48454_49501 = state_48442__$1;
(statearr_48454_49501[(2)] = null);

(statearr_48454_49501[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48443 === (9))){
var inst_48422 = (state_48442[(7)]);
var state_48442__$1 = state_48442;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48442__$1,(11),out,inst_48422);
} else {
if((state_val_48443 === (5))){
var inst_48436 = cljs.core.async.close_BANG_(out);
var state_48442__$1 = state_48442;
var statearr_48455_49502 = state_48442__$1;
(statearr_48455_49502[(2)] = inst_48436);

(statearr_48455_49502[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48443 === (10))){
var inst_48434 = (state_48442[(2)]);
var state_48442__$1 = state_48442;
var statearr_48456_49503 = state_48442__$1;
(statearr_48456_49503[(2)] = inst_48434);

(statearr_48456_49503[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48443 === (8))){
var inst_48422 = (state_48442[(7)]);
var inst_48423 = (state_48442[(9)]);
var inst_48421 = (state_48442[(8)]);
var inst_48412 = (state_48442[(10)]);
var inst_48426 = (function (){var cs = inst_48412;
var vec__48417 = inst_48421;
var v = inst_48422;
var c = inst_48423;
return (function (p1__48408_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__48408_SHARP_);
});
})();
var inst_48427 = cljs.core.filterv(inst_48426,inst_48412);
var inst_48412__$1 = inst_48427;
var state_48442__$1 = (function (){var statearr_48457 = state_48442;
(statearr_48457[(10)] = inst_48412__$1);

return statearr_48457;
})();
var statearr_48458_49504 = state_48442__$1;
(statearr_48458_49504[(2)] = null);

(statearr_48458_49504[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__47301__auto__ = null;
var cljs$core$async$state_machine__47301__auto____0 = (function (){
var statearr_48459 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48459[(0)] = cljs$core$async$state_machine__47301__auto__);

(statearr_48459[(1)] = (1));

return statearr_48459;
});
var cljs$core$async$state_machine__47301__auto____1 = (function (state_48442){
while(true){
var ret_value__47302__auto__ = (function (){try{while(true){
var result__47303__auto__ = switch__47300__auto__(state_48442);
if(cljs.core.keyword_identical_QMARK_(result__47303__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47303__auto__;
}
break;
}
}catch (e48460){var ex__47304__auto__ = e48460;
var statearr_48461_49505 = state_48442;
(statearr_48461_49505[(2)] = ex__47304__auto__);


if(cljs.core.seq((state_48442[(4)]))){
var statearr_48462_49506 = state_48442;
(statearr_48462_49506[(1)] = cljs.core.first((state_48442[(4)])));

} else {
throw ex__47304__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47302__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49507 = state_48442;
state_48442 = G__49507;
continue;
} else {
return ret_value__47302__auto__;
}
break;
}
});
cljs$core$async$state_machine__47301__auto__ = function(state_48442){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__47301__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__47301__auto____1.call(this,state_48442);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__47301__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__47301__auto____0;
cljs$core$async$state_machine__47301__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__47301__auto____1;
return cljs$core$async$state_machine__47301__auto__;
})()
})();
var state__47338__auto__ = (function (){var statearr_48463 = f__47337__auto__();
(statearr_48463[(6)] = c__47336__auto___49494);

return statearr_48463;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47338__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__48465 = arguments.length;
switch (G__48465) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__47336__auto___49509 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47337__auto__ = (function (){var switch__47300__auto__ = (function (state_48489){
var state_val_48490 = (state_48489[(1)]);
if((state_val_48490 === (7))){
var inst_48471 = (state_48489[(7)]);
var inst_48471__$1 = (state_48489[(2)]);
var inst_48472 = (inst_48471__$1 == null);
var inst_48473 = cljs.core.not(inst_48472);
var state_48489__$1 = (function (){var statearr_48491 = state_48489;
(statearr_48491[(7)] = inst_48471__$1);

return statearr_48491;
})();
if(inst_48473){
var statearr_48492_49510 = state_48489__$1;
(statearr_48492_49510[(1)] = (8));

} else {
var statearr_48493_49511 = state_48489__$1;
(statearr_48493_49511[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48490 === (1))){
var inst_48466 = (0);
var state_48489__$1 = (function (){var statearr_48494 = state_48489;
(statearr_48494[(8)] = inst_48466);

return statearr_48494;
})();
var statearr_48495_49512 = state_48489__$1;
(statearr_48495_49512[(2)] = null);

(statearr_48495_49512[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48490 === (4))){
var state_48489__$1 = state_48489;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48489__$1,(7),ch);
} else {
if((state_val_48490 === (6))){
var inst_48484 = (state_48489[(2)]);
var state_48489__$1 = state_48489;
var statearr_48496_49513 = state_48489__$1;
(statearr_48496_49513[(2)] = inst_48484);

(statearr_48496_49513[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48490 === (3))){
var inst_48486 = (state_48489[(2)]);
var inst_48487 = cljs.core.async.close_BANG_(out);
var state_48489__$1 = (function (){var statearr_48497 = state_48489;
(statearr_48497[(9)] = inst_48486);

return statearr_48497;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_48489__$1,inst_48487);
} else {
if((state_val_48490 === (2))){
var inst_48466 = (state_48489[(8)]);
var inst_48468 = (inst_48466 < n);
var state_48489__$1 = state_48489;
if(cljs.core.truth_(inst_48468)){
var statearr_48498_49514 = state_48489__$1;
(statearr_48498_49514[(1)] = (4));

} else {
var statearr_48499_49515 = state_48489__$1;
(statearr_48499_49515[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48490 === (11))){
var inst_48466 = (state_48489[(8)]);
var inst_48476 = (state_48489[(2)]);
var inst_48477 = (inst_48466 + (1));
var inst_48466__$1 = inst_48477;
var state_48489__$1 = (function (){var statearr_48500 = state_48489;
(statearr_48500[(10)] = inst_48476);

(statearr_48500[(8)] = inst_48466__$1);

return statearr_48500;
})();
var statearr_48501_49516 = state_48489__$1;
(statearr_48501_49516[(2)] = null);

(statearr_48501_49516[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48490 === (9))){
var state_48489__$1 = state_48489;
var statearr_48502_49517 = state_48489__$1;
(statearr_48502_49517[(2)] = null);

(statearr_48502_49517[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48490 === (5))){
var state_48489__$1 = state_48489;
var statearr_48503_49518 = state_48489__$1;
(statearr_48503_49518[(2)] = null);

(statearr_48503_49518[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48490 === (10))){
var inst_48481 = (state_48489[(2)]);
var state_48489__$1 = state_48489;
var statearr_48504_49519 = state_48489__$1;
(statearr_48504_49519[(2)] = inst_48481);

(statearr_48504_49519[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48490 === (8))){
var inst_48471 = (state_48489[(7)]);
var state_48489__$1 = state_48489;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48489__$1,(11),out,inst_48471);
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
});
return (function() {
var cljs$core$async$state_machine__47301__auto__ = null;
var cljs$core$async$state_machine__47301__auto____0 = (function (){
var statearr_48505 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_48505[(0)] = cljs$core$async$state_machine__47301__auto__);

(statearr_48505[(1)] = (1));

return statearr_48505;
});
var cljs$core$async$state_machine__47301__auto____1 = (function (state_48489){
while(true){
var ret_value__47302__auto__ = (function (){try{while(true){
var result__47303__auto__ = switch__47300__auto__(state_48489);
if(cljs.core.keyword_identical_QMARK_(result__47303__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47303__auto__;
}
break;
}
}catch (e48506){var ex__47304__auto__ = e48506;
var statearr_48507_49520 = state_48489;
(statearr_48507_49520[(2)] = ex__47304__auto__);


if(cljs.core.seq((state_48489[(4)]))){
var statearr_48508_49521 = state_48489;
(statearr_48508_49521[(1)] = cljs.core.first((state_48489[(4)])));

} else {
throw ex__47304__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47302__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49522 = state_48489;
state_48489 = G__49522;
continue;
} else {
return ret_value__47302__auto__;
}
break;
}
});
cljs$core$async$state_machine__47301__auto__ = function(state_48489){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__47301__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__47301__auto____1.call(this,state_48489);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__47301__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__47301__auto____0;
cljs$core$async$state_machine__47301__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__47301__auto____1;
return cljs$core$async$state_machine__47301__auto__;
})()
})();
var state__47338__auto__ = (function (){var statearr_48509 = f__47337__auto__();
(statearr_48509[(6)] = c__47336__auto___49509);

return statearr_48509;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47338__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async48511 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48511 = (function (f,ch,meta48512){
this.f = f;
this.ch = ch;
this.meta48512 = meta48512;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async48511.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48513,meta48512__$1){
var self__ = this;
var _48513__$1 = this;
return (new cljs.core.async.t_cljs$core$async48511(self__.f,self__.ch,meta48512__$1));
}));

(cljs.core.async.t_cljs$core$async48511.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48513){
var self__ = this;
var _48513__$1 = this;
return self__.meta48512;
}));

(cljs.core.async.t_cljs$core$async48511.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48511.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async48511.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async48511.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48511.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async48514 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48514 = (function (f,ch,meta48512,_,fn1,meta48515){
this.f = f;
this.ch = ch;
this.meta48512 = meta48512;
this._ = _;
this.fn1 = fn1;
this.meta48515 = meta48515;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async48514.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48516,meta48515__$1){
var self__ = this;
var _48516__$1 = this;
return (new cljs.core.async.t_cljs$core$async48514(self__.f,self__.ch,self__.meta48512,self__._,self__.fn1,meta48515__$1));
}));

(cljs.core.async.t_cljs$core$async48514.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48516){
var self__ = this;
var _48516__$1 = this;
return self__.meta48515;
}));

(cljs.core.async.t_cljs$core$async48514.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48514.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async48514.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async48514.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__48510_SHARP_){
var G__48517 = (((p1__48510_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__48510_SHARP_) : self__.f.call(null,p1__48510_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__48517) : f1.call(null,G__48517));
});
}));

(cljs.core.async.t_cljs$core$async48514.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta48512","meta48512",-373728214,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async48511","cljs.core.async/t_cljs$core$async48511",1324460683,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta48515","meta48515",950217180,null)], null);
}));

(cljs.core.async.t_cljs$core$async48514.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async48514.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48514");

(cljs.core.async.t_cljs$core$async48514.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async48514");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async48514.
 */
cljs.core.async.__GT_t_cljs$core$async48514 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async48514(f__$1,ch__$1,meta48512__$1,___$2,fn1__$1,meta48515){
return (new cljs.core.async.t_cljs$core$async48514(f__$1,ch__$1,meta48512__$1,___$2,fn1__$1,meta48515));
});

}

return (new cljs.core.async.t_cljs$core$async48514(self__.f,self__.ch,self__.meta48512,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__48518 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__48518) : self__.f.call(null,G__48518));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async48511.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48511.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async48511.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta48512","meta48512",-373728214,null)], null);
}));

(cljs.core.async.t_cljs$core$async48511.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async48511.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48511");

(cljs.core.async.t_cljs$core$async48511.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async48511");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async48511.
 */
cljs.core.async.__GT_t_cljs$core$async48511 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async48511(f__$1,ch__$1,meta48512){
return (new cljs.core.async.t_cljs$core$async48511(f__$1,ch__$1,meta48512));
});

}

return (new cljs.core.async.t_cljs$core$async48511(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async48519 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48519 = (function (f,ch,meta48520){
this.f = f;
this.ch = ch;
this.meta48520 = meta48520;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async48519.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48521,meta48520__$1){
var self__ = this;
var _48521__$1 = this;
return (new cljs.core.async.t_cljs$core$async48519(self__.f,self__.ch,meta48520__$1));
}));

(cljs.core.async.t_cljs$core$async48519.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48521){
var self__ = this;
var _48521__$1 = this;
return self__.meta48520;
}));

(cljs.core.async.t_cljs$core$async48519.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48519.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async48519.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48519.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async48519.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48519.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async48519.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta48520","meta48520",427376497,null)], null);
}));

(cljs.core.async.t_cljs$core$async48519.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async48519.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48519");

(cljs.core.async.t_cljs$core$async48519.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async48519");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async48519.
 */
cljs.core.async.__GT_t_cljs$core$async48519 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async48519(f__$1,ch__$1,meta48520){
return (new cljs.core.async.t_cljs$core$async48519(f__$1,ch__$1,meta48520));
});

}

return (new cljs.core.async.t_cljs$core$async48519(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async48522 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48522 = (function (p,ch,meta48523){
this.p = p;
this.ch = ch;
this.meta48523 = meta48523;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async48522.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48524,meta48523__$1){
var self__ = this;
var _48524__$1 = this;
return (new cljs.core.async.t_cljs$core$async48522(self__.p,self__.ch,meta48523__$1));
}));

(cljs.core.async.t_cljs$core$async48522.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48524){
var self__ = this;
var _48524__$1 = this;
return self__.meta48523;
}));

(cljs.core.async.t_cljs$core$async48522.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48522.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async48522.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async48522.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48522.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async48522.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48522.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async48522.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta48523","meta48523",-1062170892,null)], null);
}));

(cljs.core.async.t_cljs$core$async48522.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async48522.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48522");

(cljs.core.async.t_cljs$core$async48522.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async48522");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async48522.
 */
cljs.core.async.__GT_t_cljs$core$async48522 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async48522(p__$1,ch__$1,meta48523){
return (new cljs.core.async.t_cljs$core$async48522(p__$1,ch__$1,meta48523));
});

}

return (new cljs.core.async.t_cljs$core$async48522(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__48526 = arguments.length;
switch (G__48526) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__47336__auto___49524 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47337__auto__ = (function (){var switch__47300__auto__ = (function (state_48547){
var state_val_48548 = (state_48547[(1)]);
if((state_val_48548 === (7))){
var inst_48543 = (state_48547[(2)]);
var state_48547__$1 = state_48547;
var statearr_48549_49525 = state_48547__$1;
(statearr_48549_49525[(2)] = inst_48543);

(statearr_48549_49525[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48548 === (1))){
var state_48547__$1 = state_48547;
var statearr_48550_49526 = state_48547__$1;
(statearr_48550_49526[(2)] = null);

(statearr_48550_49526[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48548 === (4))){
var inst_48529 = (state_48547[(7)]);
var inst_48529__$1 = (state_48547[(2)]);
var inst_48530 = (inst_48529__$1 == null);
var state_48547__$1 = (function (){var statearr_48551 = state_48547;
(statearr_48551[(7)] = inst_48529__$1);

return statearr_48551;
})();
if(cljs.core.truth_(inst_48530)){
var statearr_48552_49531 = state_48547__$1;
(statearr_48552_49531[(1)] = (5));

} else {
var statearr_48553_49532 = state_48547__$1;
(statearr_48553_49532[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48548 === (6))){
var inst_48529 = (state_48547[(7)]);
var inst_48534 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_48529) : p.call(null,inst_48529));
var state_48547__$1 = state_48547;
if(cljs.core.truth_(inst_48534)){
var statearr_48554_49536 = state_48547__$1;
(statearr_48554_49536[(1)] = (8));

} else {
var statearr_48555_49537 = state_48547__$1;
(statearr_48555_49537[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48548 === (3))){
var inst_48545 = (state_48547[(2)]);
var state_48547__$1 = state_48547;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48547__$1,inst_48545);
} else {
if((state_val_48548 === (2))){
var state_48547__$1 = state_48547;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48547__$1,(4),ch);
} else {
if((state_val_48548 === (11))){
var inst_48537 = (state_48547[(2)]);
var state_48547__$1 = state_48547;
var statearr_48556_49538 = state_48547__$1;
(statearr_48556_49538[(2)] = inst_48537);

(statearr_48556_49538[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48548 === (9))){
var state_48547__$1 = state_48547;
var statearr_48557_49539 = state_48547__$1;
(statearr_48557_49539[(2)] = null);

(statearr_48557_49539[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48548 === (5))){
var inst_48532 = cljs.core.async.close_BANG_(out);
var state_48547__$1 = state_48547;
var statearr_48558_49540 = state_48547__$1;
(statearr_48558_49540[(2)] = inst_48532);

(statearr_48558_49540[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48548 === (10))){
var inst_48540 = (state_48547[(2)]);
var state_48547__$1 = (function (){var statearr_48559 = state_48547;
(statearr_48559[(8)] = inst_48540);

return statearr_48559;
})();
var statearr_48560_49541 = state_48547__$1;
(statearr_48560_49541[(2)] = null);

(statearr_48560_49541[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48548 === (8))){
var inst_48529 = (state_48547[(7)]);
var state_48547__$1 = state_48547;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48547__$1,(11),out,inst_48529);
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
});
return (function() {
var cljs$core$async$state_machine__47301__auto__ = null;
var cljs$core$async$state_machine__47301__auto____0 = (function (){
var statearr_48561 = [null,null,null,null,null,null,null,null,null];
(statearr_48561[(0)] = cljs$core$async$state_machine__47301__auto__);

(statearr_48561[(1)] = (1));

return statearr_48561;
});
var cljs$core$async$state_machine__47301__auto____1 = (function (state_48547){
while(true){
var ret_value__47302__auto__ = (function (){try{while(true){
var result__47303__auto__ = switch__47300__auto__(state_48547);
if(cljs.core.keyword_identical_QMARK_(result__47303__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47303__auto__;
}
break;
}
}catch (e48562){var ex__47304__auto__ = e48562;
var statearr_48563_49542 = state_48547;
(statearr_48563_49542[(2)] = ex__47304__auto__);


if(cljs.core.seq((state_48547[(4)]))){
var statearr_48564_49543 = state_48547;
(statearr_48564_49543[(1)] = cljs.core.first((state_48547[(4)])));

} else {
throw ex__47304__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47302__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49544 = state_48547;
state_48547 = G__49544;
continue;
} else {
return ret_value__47302__auto__;
}
break;
}
});
cljs$core$async$state_machine__47301__auto__ = function(state_48547){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__47301__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__47301__auto____1.call(this,state_48547);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__47301__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__47301__auto____0;
cljs$core$async$state_machine__47301__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__47301__auto____1;
return cljs$core$async$state_machine__47301__auto__;
})()
})();
var state__47338__auto__ = (function (){var statearr_48565 = f__47337__auto__();
(statearr_48565[(6)] = c__47336__auto___49524);

return statearr_48565;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47338__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__48567 = arguments.length;
switch (G__48567) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__47336__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47337__auto__ = (function (){var switch__47300__auto__ = (function (state_48629){
var state_val_48630 = (state_48629[(1)]);
if((state_val_48630 === (7))){
var inst_48625 = (state_48629[(2)]);
var state_48629__$1 = state_48629;
var statearr_48631_49546 = state_48629__$1;
(statearr_48631_49546[(2)] = inst_48625);

(statearr_48631_49546[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48630 === (20))){
var inst_48595 = (state_48629[(7)]);
var inst_48606 = (state_48629[(2)]);
var inst_48607 = cljs.core.next(inst_48595);
var inst_48581 = inst_48607;
var inst_48582 = null;
var inst_48583 = (0);
var inst_48584 = (0);
var state_48629__$1 = (function (){var statearr_48632 = state_48629;
(statearr_48632[(8)] = inst_48583);

(statearr_48632[(9)] = inst_48581);

(statearr_48632[(10)] = inst_48584);

(statearr_48632[(11)] = inst_48606);

(statearr_48632[(12)] = inst_48582);

return statearr_48632;
})();
var statearr_48633_49547 = state_48629__$1;
(statearr_48633_49547[(2)] = null);

(statearr_48633_49547[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48630 === (1))){
var state_48629__$1 = state_48629;
var statearr_48634_49548 = state_48629__$1;
(statearr_48634_49548[(2)] = null);

(statearr_48634_49548[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48630 === (4))){
var inst_48570 = (state_48629[(13)]);
var inst_48570__$1 = (state_48629[(2)]);
var inst_48571 = (inst_48570__$1 == null);
var state_48629__$1 = (function (){var statearr_48635 = state_48629;
(statearr_48635[(13)] = inst_48570__$1);

return statearr_48635;
})();
if(cljs.core.truth_(inst_48571)){
var statearr_48636_49549 = state_48629__$1;
(statearr_48636_49549[(1)] = (5));

} else {
var statearr_48637_49550 = state_48629__$1;
(statearr_48637_49550[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48630 === (15))){
var state_48629__$1 = state_48629;
var statearr_48641_49551 = state_48629__$1;
(statearr_48641_49551[(2)] = null);

(statearr_48641_49551[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48630 === (21))){
var state_48629__$1 = state_48629;
var statearr_48642_49552 = state_48629__$1;
(statearr_48642_49552[(2)] = null);

(statearr_48642_49552[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48630 === (13))){
var inst_48583 = (state_48629[(8)]);
var inst_48581 = (state_48629[(9)]);
var inst_48584 = (state_48629[(10)]);
var inst_48582 = (state_48629[(12)]);
var inst_48591 = (state_48629[(2)]);
var inst_48592 = (inst_48584 + (1));
var tmp48638 = inst_48583;
var tmp48639 = inst_48581;
var tmp48640 = inst_48582;
var inst_48581__$1 = tmp48639;
var inst_48582__$1 = tmp48640;
var inst_48583__$1 = tmp48638;
var inst_48584__$1 = inst_48592;
var state_48629__$1 = (function (){var statearr_48643 = state_48629;
(statearr_48643[(8)] = inst_48583__$1);

(statearr_48643[(14)] = inst_48591);

(statearr_48643[(9)] = inst_48581__$1);

(statearr_48643[(10)] = inst_48584__$1);

(statearr_48643[(12)] = inst_48582__$1);

return statearr_48643;
})();
var statearr_48644_49553 = state_48629__$1;
(statearr_48644_49553[(2)] = null);

(statearr_48644_49553[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48630 === (22))){
var state_48629__$1 = state_48629;
var statearr_48645_49554 = state_48629__$1;
(statearr_48645_49554[(2)] = null);

(statearr_48645_49554[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48630 === (6))){
var inst_48570 = (state_48629[(13)]);
var inst_48579 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_48570) : f.call(null,inst_48570));
var inst_48580 = cljs.core.seq(inst_48579);
var inst_48581 = inst_48580;
var inst_48582 = null;
var inst_48583 = (0);
var inst_48584 = (0);
var state_48629__$1 = (function (){var statearr_48646 = state_48629;
(statearr_48646[(8)] = inst_48583);

(statearr_48646[(9)] = inst_48581);

(statearr_48646[(10)] = inst_48584);

(statearr_48646[(12)] = inst_48582);

return statearr_48646;
})();
var statearr_48647_49555 = state_48629__$1;
(statearr_48647_49555[(2)] = null);

(statearr_48647_49555[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48630 === (17))){
var inst_48595 = (state_48629[(7)]);
var inst_48599 = cljs.core.chunk_first(inst_48595);
var inst_48600 = cljs.core.chunk_rest(inst_48595);
var inst_48601 = cljs.core.count(inst_48599);
var inst_48581 = inst_48600;
var inst_48582 = inst_48599;
var inst_48583 = inst_48601;
var inst_48584 = (0);
var state_48629__$1 = (function (){var statearr_48648 = state_48629;
(statearr_48648[(8)] = inst_48583);

(statearr_48648[(9)] = inst_48581);

(statearr_48648[(10)] = inst_48584);

(statearr_48648[(12)] = inst_48582);

return statearr_48648;
})();
var statearr_48649_49556 = state_48629__$1;
(statearr_48649_49556[(2)] = null);

(statearr_48649_49556[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48630 === (3))){
var inst_48627 = (state_48629[(2)]);
var state_48629__$1 = state_48629;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48629__$1,inst_48627);
} else {
if((state_val_48630 === (12))){
var inst_48615 = (state_48629[(2)]);
var state_48629__$1 = state_48629;
var statearr_48650_49557 = state_48629__$1;
(statearr_48650_49557[(2)] = inst_48615);

(statearr_48650_49557[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48630 === (2))){
var state_48629__$1 = state_48629;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48629__$1,(4),in$);
} else {
if((state_val_48630 === (23))){
var inst_48623 = (state_48629[(2)]);
var state_48629__$1 = state_48629;
var statearr_48651_49558 = state_48629__$1;
(statearr_48651_49558[(2)] = inst_48623);

(statearr_48651_49558[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48630 === (19))){
var inst_48610 = (state_48629[(2)]);
var state_48629__$1 = state_48629;
var statearr_48652_49559 = state_48629__$1;
(statearr_48652_49559[(2)] = inst_48610);

(statearr_48652_49559[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48630 === (11))){
var inst_48581 = (state_48629[(9)]);
var inst_48595 = (state_48629[(7)]);
var inst_48595__$1 = cljs.core.seq(inst_48581);
var state_48629__$1 = (function (){var statearr_48653 = state_48629;
(statearr_48653[(7)] = inst_48595__$1);

return statearr_48653;
})();
if(inst_48595__$1){
var statearr_48654_49560 = state_48629__$1;
(statearr_48654_49560[(1)] = (14));

} else {
var statearr_48655_49561 = state_48629__$1;
(statearr_48655_49561[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48630 === (9))){
var inst_48617 = (state_48629[(2)]);
var inst_48618 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_48629__$1 = (function (){var statearr_48656 = state_48629;
(statearr_48656[(15)] = inst_48617);

return statearr_48656;
})();
if(cljs.core.truth_(inst_48618)){
var statearr_48657_49562 = state_48629__$1;
(statearr_48657_49562[(1)] = (21));

} else {
var statearr_48658_49563 = state_48629__$1;
(statearr_48658_49563[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48630 === (5))){
var inst_48573 = cljs.core.async.close_BANG_(out);
var state_48629__$1 = state_48629;
var statearr_48659_49564 = state_48629__$1;
(statearr_48659_49564[(2)] = inst_48573);

(statearr_48659_49564[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48630 === (14))){
var inst_48595 = (state_48629[(7)]);
var inst_48597 = cljs.core.chunked_seq_QMARK_(inst_48595);
var state_48629__$1 = state_48629;
if(inst_48597){
var statearr_48660_49565 = state_48629__$1;
(statearr_48660_49565[(1)] = (17));

} else {
var statearr_48661_49566 = state_48629__$1;
(statearr_48661_49566[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48630 === (16))){
var inst_48613 = (state_48629[(2)]);
var state_48629__$1 = state_48629;
var statearr_48662_49567 = state_48629__$1;
(statearr_48662_49567[(2)] = inst_48613);

(statearr_48662_49567[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48630 === (10))){
var inst_48584 = (state_48629[(10)]);
var inst_48582 = (state_48629[(12)]);
var inst_48589 = cljs.core._nth(inst_48582,inst_48584);
var state_48629__$1 = state_48629;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48629__$1,(13),out,inst_48589);
} else {
if((state_val_48630 === (18))){
var inst_48595 = (state_48629[(7)]);
var inst_48604 = cljs.core.first(inst_48595);
var state_48629__$1 = state_48629;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48629__$1,(20),out,inst_48604);
} else {
if((state_val_48630 === (8))){
var inst_48583 = (state_48629[(8)]);
var inst_48584 = (state_48629[(10)]);
var inst_48586 = (inst_48584 < inst_48583);
var inst_48587 = inst_48586;
var state_48629__$1 = state_48629;
if(cljs.core.truth_(inst_48587)){
var statearr_48663_49568 = state_48629__$1;
(statearr_48663_49568[(1)] = (10));

} else {
var statearr_48664_49569 = state_48629__$1;
(statearr_48664_49569[(1)] = (11));

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
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__47301__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__47301__auto____0 = (function (){
var statearr_48665 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48665[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__47301__auto__);

(statearr_48665[(1)] = (1));

return statearr_48665;
});
var cljs$core$async$mapcat_STAR__$_state_machine__47301__auto____1 = (function (state_48629){
while(true){
var ret_value__47302__auto__ = (function (){try{while(true){
var result__47303__auto__ = switch__47300__auto__(state_48629);
if(cljs.core.keyword_identical_QMARK_(result__47303__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47303__auto__;
}
break;
}
}catch (e48666){var ex__47304__auto__ = e48666;
var statearr_48667_49570 = state_48629;
(statearr_48667_49570[(2)] = ex__47304__auto__);


if(cljs.core.seq((state_48629[(4)]))){
var statearr_48668_49571 = state_48629;
(statearr_48668_49571[(1)] = cljs.core.first((state_48629[(4)])));

} else {
throw ex__47304__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47302__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49572 = state_48629;
state_48629 = G__49572;
continue;
} else {
return ret_value__47302__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__47301__auto__ = function(state_48629){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__47301__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__47301__auto____1.call(this,state_48629);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__47301__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__47301__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__47301__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__47301__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__47301__auto__;
})()
})();
var state__47338__auto__ = (function (){var statearr_48669 = f__47337__auto__();
(statearr_48669[(6)] = c__47336__auto__);

return statearr_48669;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47338__auto__);
}));

return c__47336__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__48671 = arguments.length;
switch (G__48671) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__48673 = arguments.length;
switch (G__48673) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__48675 = arguments.length;
switch (G__48675) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__47336__auto___49576 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47337__auto__ = (function (){var switch__47300__auto__ = (function (state_48699){
var state_val_48700 = (state_48699[(1)]);
if((state_val_48700 === (7))){
var inst_48694 = (state_48699[(2)]);
var state_48699__$1 = state_48699;
var statearr_48701_49581 = state_48699__$1;
(statearr_48701_49581[(2)] = inst_48694);

(statearr_48701_49581[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48700 === (1))){
var inst_48676 = null;
var state_48699__$1 = (function (){var statearr_48702 = state_48699;
(statearr_48702[(7)] = inst_48676);

return statearr_48702;
})();
var statearr_48703_49582 = state_48699__$1;
(statearr_48703_49582[(2)] = null);

(statearr_48703_49582[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48700 === (4))){
var inst_48679 = (state_48699[(8)]);
var inst_48679__$1 = (state_48699[(2)]);
var inst_48680 = (inst_48679__$1 == null);
var inst_48681 = cljs.core.not(inst_48680);
var state_48699__$1 = (function (){var statearr_48704 = state_48699;
(statearr_48704[(8)] = inst_48679__$1);

return statearr_48704;
})();
if(inst_48681){
var statearr_48705_49583 = state_48699__$1;
(statearr_48705_49583[(1)] = (5));

} else {
var statearr_48706_49584 = state_48699__$1;
(statearr_48706_49584[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48700 === (6))){
var state_48699__$1 = state_48699;
var statearr_48707_49588 = state_48699__$1;
(statearr_48707_49588[(2)] = null);

(statearr_48707_49588[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48700 === (3))){
var inst_48696 = (state_48699[(2)]);
var inst_48697 = cljs.core.async.close_BANG_(out);
var state_48699__$1 = (function (){var statearr_48708 = state_48699;
(statearr_48708[(9)] = inst_48696);

return statearr_48708;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_48699__$1,inst_48697);
} else {
if((state_val_48700 === (2))){
var state_48699__$1 = state_48699;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48699__$1,(4),ch);
} else {
if((state_val_48700 === (11))){
var inst_48679 = (state_48699[(8)]);
var inst_48688 = (state_48699[(2)]);
var inst_48676 = inst_48679;
var state_48699__$1 = (function (){var statearr_48709 = state_48699;
(statearr_48709[(10)] = inst_48688);

(statearr_48709[(7)] = inst_48676);

return statearr_48709;
})();
var statearr_48710_49589 = state_48699__$1;
(statearr_48710_49589[(2)] = null);

(statearr_48710_49589[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48700 === (9))){
var inst_48679 = (state_48699[(8)]);
var state_48699__$1 = state_48699;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48699__$1,(11),out,inst_48679);
} else {
if((state_val_48700 === (5))){
var inst_48679 = (state_48699[(8)]);
var inst_48676 = (state_48699[(7)]);
var inst_48683 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_48679,inst_48676);
var state_48699__$1 = state_48699;
if(inst_48683){
var statearr_48712_49593 = state_48699__$1;
(statearr_48712_49593[(1)] = (8));

} else {
var statearr_48713_49594 = state_48699__$1;
(statearr_48713_49594[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48700 === (10))){
var inst_48691 = (state_48699[(2)]);
var state_48699__$1 = state_48699;
var statearr_48714_49595 = state_48699__$1;
(statearr_48714_49595[(2)] = inst_48691);

(statearr_48714_49595[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48700 === (8))){
var inst_48676 = (state_48699[(7)]);
var tmp48711 = inst_48676;
var inst_48676__$1 = tmp48711;
var state_48699__$1 = (function (){var statearr_48715 = state_48699;
(statearr_48715[(7)] = inst_48676__$1);

return statearr_48715;
})();
var statearr_48716_49597 = state_48699__$1;
(statearr_48716_49597[(2)] = null);

(statearr_48716_49597[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__47301__auto__ = null;
var cljs$core$async$state_machine__47301__auto____0 = (function (){
var statearr_48717 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_48717[(0)] = cljs$core$async$state_machine__47301__auto__);

(statearr_48717[(1)] = (1));

return statearr_48717;
});
var cljs$core$async$state_machine__47301__auto____1 = (function (state_48699){
while(true){
var ret_value__47302__auto__ = (function (){try{while(true){
var result__47303__auto__ = switch__47300__auto__(state_48699);
if(cljs.core.keyword_identical_QMARK_(result__47303__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47303__auto__;
}
break;
}
}catch (e48718){var ex__47304__auto__ = e48718;
var statearr_48719_49598 = state_48699;
(statearr_48719_49598[(2)] = ex__47304__auto__);


if(cljs.core.seq((state_48699[(4)]))){
var statearr_48720_49599 = state_48699;
(statearr_48720_49599[(1)] = cljs.core.first((state_48699[(4)])));

} else {
throw ex__47304__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47302__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49600 = state_48699;
state_48699 = G__49600;
continue;
} else {
return ret_value__47302__auto__;
}
break;
}
});
cljs$core$async$state_machine__47301__auto__ = function(state_48699){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__47301__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__47301__auto____1.call(this,state_48699);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__47301__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__47301__auto____0;
cljs$core$async$state_machine__47301__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__47301__auto____1;
return cljs$core$async$state_machine__47301__auto__;
})()
})();
var state__47338__auto__ = (function (){var statearr_48721 = f__47337__auto__();
(statearr_48721[(6)] = c__47336__auto___49576);

return statearr_48721;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47338__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__48723 = arguments.length;
switch (G__48723) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__47336__auto___49604 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47337__auto__ = (function (){var switch__47300__auto__ = (function (state_48761){
var state_val_48762 = (state_48761[(1)]);
if((state_val_48762 === (7))){
var inst_48757 = (state_48761[(2)]);
var state_48761__$1 = state_48761;
var statearr_48763_49605 = state_48761__$1;
(statearr_48763_49605[(2)] = inst_48757);

(statearr_48763_49605[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48762 === (1))){
var inst_48724 = (new Array(n));
var inst_48725 = inst_48724;
var inst_48726 = (0);
var state_48761__$1 = (function (){var statearr_48764 = state_48761;
(statearr_48764[(7)] = inst_48726);

(statearr_48764[(8)] = inst_48725);

return statearr_48764;
})();
var statearr_48765_49606 = state_48761__$1;
(statearr_48765_49606[(2)] = null);

(statearr_48765_49606[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48762 === (4))){
var inst_48729 = (state_48761[(9)]);
var inst_48729__$1 = (state_48761[(2)]);
var inst_48730 = (inst_48729__$1 == null);
var inst_48731 = cljs.core.not(inst_48730);
var state_48761__$1 = (function (){var statearr_48766 = state_48761;
(statearr_48766[(9)] = inst_48729__$1);

return statearr_48766;
})();
if(inst_48731){
var statearr_48767_49610 = state_48761__$1;
(statearr_48767_49610[(1)] = (5));

} else {
var statearr_48768_49611 = state_48761__$1;
(statearr_48768_49611[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48762 === (15))){
var inst_48751 = (state_48761[(2)]);
var state_48761__$1 = state_48761;
var statearr_48769_49612 = state_48761__$1;
(statearr_48769_49612[(2)] = inst_48751);

(statearr_48769_49612[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48762 === (13))){
var state_48761__$1 = state_48761;
var statearr_48770_49613 = state_48761__$1;
(statearr_48770_49613[(2)] = null);

(statearr_48770_49613[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48762 === (6))){
var inst_48726 = (state_48761[(7)]);
var inst_48747 = (inst_48726 > (0));
var state_48761__$1 = state_48761;
if(cljs.core.truth_(inst_48747)){
var statearr_48771_49614 = state_48761__$1;
(statearr_48771_49614[(1)] = (12));

} else {
var statearr_48772_49615 = state_48761__$1;
(statearr_48772_49615[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48762 === (3))){
var inst_48759 = (state_48761[(2)]);
var state_48761__$1 = state_48761;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48761__$1,inst_48759);
} else {
if((state_val_48762 === (12))){
var inst_48725 = (state_48761[(8)]);
var inst_48749 = cljs.core.vec(inst_48725);
var state_48761__$1 = state_48761;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48761__$1,(15),out,inst_48749);
} else {
if((state_val_48762 === (2))){
var state_48761__$1 = state_48761;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48761__$1,(4),ch);
} else {
if((state_val_48762 === (11))){
var inst_48741 = (state_48761[(2)]);
var inst_48742 = (new Array(n));
var inst_48725 = inst_48742;
var inst_48726 = (0);
var state_48761__$1 = (function (){var statearr_48773 = state_48761;
(statearr_48773[(10)] = inst_48741);

(statearr_48773[(7)] = inst_48726);

(statearr_48773[(8)] = inst_48725);

return statearr_48773;
})();
var statearr_48774_49623 = state_48761__$1;
(statearr_48774_49623[(2)] = null);

(statearr_48774_49623[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48762 === (9))){
var inst_48725 = (state_48761[(8)]);
var inst_48739 = cljs.core.vec(inst_48725);
var state_48761__$1 = state_48761;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48761__$1,(11),out,inst_48739);
} else {
if((state_val_48762 === (5))){
var inst_48734 = (state_48761[(11)]);
var inst_48729 = (state_48761[(9)]);
var inst_48726 = (state_48761[(7)]);
var inst_48725 = (state_48761[(8)]);
var inst_48733 = (inst_48725[inst_48726] = inst_48729);
var inst_48734__$1 = (inst_48726 + (1));
var inst_48735 = (inst_48734__$1 < n);
var state_48761__$1 = (function (){var statearr_48775 = state_48761;
(statearr_48775[(11)] = inst_48734__$1);

(statearr_48775[(12)] = inst_48733);

return statearr_48775;
})();
if(cljs.core.truth_(inst_48735)){
var statearr_48776_49632 = state_48761__$1;
(statearr_48776_49632[(1)] = (8));

} else {
var statearr_48777_49633 = state_48761__$1;
(statearr_48777_49633[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48762 === (14))){
var inst_48754 = (state_48761[(2)]);
var inst_48755 = cljs.core.async.close_BANG_(out);
var state_48761__$1 = (function (){var statearr_48779 = state_48761;
(statearr_48779[(13)] = inst_48754);

return statearr_48779;
})();
var statearr_48780_49634 = state_48761__$1;
(statearr_48780_49634[(2)] = inst_48755);

(statearr_48780_49634[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48762 === (10))){
var inst_48745 = (state_48761[(2)]);
var state_48761__$1 = state_48761;
var statearr_48781_49635 = state_48761__$1;
(statearr_48781_49635[(2)] = inst_48745);

(statearr_48781_49635[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48762 === (8))){
var inst_48734 = (state_48761[(11)]);
var inst_48725 = (state_48761[(8)]);
var tmp48778 = inst_48725;
var inst_48725__$1 = tmp48778;
var inst_48726 = inst_48734;
var state_48761__$1 = (function (){var statearr_48782 = state_48761;
(statearr_48782[(7)] = inst_48726);

(statearr_48782[(8)] = inst_48725__$1);

return statearr_48782;
})();
var statearr_48783_49636 = state_48761__$1;
(statearr_48783_49636[(2)] = null);

(statearr_48783_49636[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__47301__auto__ = null;
var cljs$core$async$state_machine__47301__auto____0 = (function (){
var statearr_48784 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48784[(0)] = cljs$core$async$state_machine__47301__auto__);

(statearr_48784[(1)] = (1));

return statearr_48784;
});
var cljs$core$async$state_machine__47301__auto____1 = (function (state_48761){
while(true){
var ret_value__47302__auto__ = (function (){try{while(true){
var result__47303__auto__ = switch__47300__auto__(state_48761);
if(cljs.core.keyword_identical_QMARK_(result__47303__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47303__auto__;
}
break;
}
}catch (e48785){var ex__47304__auto__ = e48785;
var statearr_48786_49640 = state_48761;
(statearr_48786_49640[(2)] = ex__47304__auto__);


if(cljs.core.seq((state_48761[(4)]))){
var statearr_48787_49641 = state_48761;
(statearr_48787_49641[(1)] = cljs.core.first((state_48761[(4)])));

} else {
throw ex__47304__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47302__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49642 = state_48761;
state_48761 = G__49642;
continue;
} else {
return ret_value__47302__auto__;
}
break;
}
});
cljs$core$async$state_machine__47301__auto__ = function(state_48761){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__47301__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__47301__auto____1.call(this,state_48761);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__47301__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__47301__auto____0;
cljs$core$async$state_machine__47301__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__47301__auto____1;
return cljs$core$async$state_machine__47301__auto__;
})()
})();
var state__47338__auto__ = (function (){var statearr_48788 = f__47337__auto__();
(statearr_48788[(6)] = c__47336__auto___49604);

return statearr_48788;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47338__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__48790 = arguments.length;
switch (G__48790) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__47336__auto___49644 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47337__auto__ = (function (){var switch__47300__auto__ = (function (state_48832){
var state_val_48833 = (state_48832[(1)]);
if((state_val_48833 === (7))){
var inst_48828 = (state_48832[(2)]);
var state_48832__$1 = state_48832;
var statearr_48834_49645 = state_48832__$1;
(statearr_48834_49645[(2)] = inst_48828);

(statearr_48834_49645[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48833 === (1))){
var inst_48791 = [];
var inst_48792 = inst_48791;
var inst_48793 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_48832__$1 = (function (){var statearr_48835 = state_48832;
(statearr_48835[(7)] = inst_48793);

(statearr_48835[(8)] = inst_48792);

return statearr_48835;
})();
var statearr_48836_49646 = state_48832__$1;
(statearr_48836_49646[(2)] = null);

(statearr_48836_49646[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48833 === (4))){
var inst_48796 = (state_48832[(9)]);
var inst_48796__$1 = (state_48832[(2)]);
var inst_48797 = (inst_48796__$1 == null);
var inst_48798 = cljs.core.not(inst_48797);
var state_48832__$1 = (function (){var statearr_48837 = state_48832;
(statearr_48837[(9)] = inst_48796__$1);

return statearr_48837;
})();
if(inst_48798){
var statearr_48838_49647 = state_48832__$1;
(statearr_48838_49647[(1)] = (5));

} else {
var statearr_48839_49648 = state_48832__$1;
(statearr_48839_49648[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48833 === (15))){
var inst_48822 = (state_48832[(2)]);
var state_48832__$1 = state_48832;
var statearr_48840_49649 = state_48832__$1;
(statearr_48840_49649[(2)] = inst_48822);

(statearr_48840_49649[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48833 === (13))){
var state_48832__$1 = state_48832;
var statearr_48841_49650 = state_48832__$1;
(statearr_48841_49650[(2)] = null);

(statearr_48841_49650[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48833 === (6))){
var inst_48792 = (state_48832[(8)]);
var inst_48817 = inst_48792.length;
var inst_48818 = (inst_48817 > (0));
var state_48832__$1 = state_48832;
if(cljs.core.truth_(inst_48818)){
var statearr_48842_49651 = state_48832__$1;
(statearr_48842_49651[(1)] = (12));

} else {
var statearr_48843_49652 = state_48832__$1;
(statearr_48843_49652[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48833 === (3))){
var inst_48830 = (state_48832[(2)]);
var state_48832__$1 = state_48832;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48832__$1,inst_48830);
} else {
if((state_val_48833 === (12))){
var inst_48792 = (state_48832[(8)]);
var inst_48820 = cljs.core.vec(inst_48792);
var state_48832__$1 = state_48832;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48832__$1,(15),out,inst_48820);
} else {
if((state_val_48833 === (2))){
var state_48832__$1 = state_48832;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48832__$1,(4),ch);
} else {
if((state_val_48833 === (11))){
var inst_48796 = (state_48832[(9)]);
var inst_48800 = (state_48832[(10)]);
var inst_48810 = (state_48832[(2)]);
var inst_48811 = [];
var inst_48812 = inst_48811.push(inst_48796);
var inst_48792 = inst_48811;
var inst_48793 = inst_48800;
var state_48832__$1 = (function (){var statearr_48844 = state_48832;
(statearr_48844[(11)] = inst_48810);

(statearr_48844[(7)] = inst_48793);

(statearr_48844[(12)] = inst_48812);

(statearr_48844[(8)] = inst_48792);

return statearr_48844;
})();
var statearr_48845_49653 = state_48832__$1;
(statearr_48845_49653[(2)] = null);

(statearr_48845_49653[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48833 === (9))){
var inst_48792 = (state_48832[(8)]);
var inst_48808 = cljs.core.vec(inst_48792);
var state_48832__$1 = state_48832;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48832__$1,(11),out,inst_48808);
} else {
if((state_val_48833 === (5))){
var inst_48793 = (state_48832[(7)]);
var inst_48796 = (state_48832[(9)]);
var inst_48800 = (state_48832[(10)]);
var inst_48800__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_48796) : f.call(null,inst_48796));
var inst_48801 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_48800__$1,inst_48793);
var inst_48802 = cljs.core.keyword_identical_QMARK_(inst_48793,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_48803 = ((inst_48801) || (inst_48802));
var state_48832__$1 = (function (){var statearr_48846 = state_48832;
(statearr_48846[(10)] = inst_48800__$1);

return statearr_48846;
})();
if(cljs.core.truth_(inst_48803)){
var statearr_48847_49654 = state_48832__$1;
(statearr_48847_49654[(1)] = (8));

} else {
var statearr_48848_49655 = state_48832__$1;
(statearr_48848_49655[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48833 === (14))){
var inst_48825 = (state_48832[(2)]);
var inst_48826 = cljs.core.async.close_BANG_(out);
var state_48832__$1 = (function (){var statearr_48850 = state_48832;
(statearr_48850[(13)] = inst_48825);

return statearr_48850;
})();
var statearr_48851_49656 = state_48832__$1;
(statearr_48851_49656[(2)] = inst_48826);

(statearr_48851_49656[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48833 === (10))){
var inst_48815 = (state_48832[(2)]);
var state_48832__$1 = state_48832;
var statearr_48852_49657 = state_48832__$1;
(statearr_48852_49657[(2)] = inst_48815);

(statearr_48852_49657[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48833 === (8))){
var inst_48796 = (state_48832[(9)]);
var inst_48800 = (state_48832[(10)]);
var inst_48792 = (state_48832[(8)]);
var inst_48805 = inst_48792.push(inst_48796);
var tmp48849 = inst_48792;
var inst_48792__$1 = tmp48849;
var inst_48793 = inst_48800;
var state_48832__$1 = (function (){var statearr_48853 = state_48832;
(statearr_48853[(7)] = inst_48793);

(statearr_48853[(14)] = inst_48805);

(statearr_48853[(8)] = inst_48792__$1);

return statearr_48853;
})();
var statearr_48854_49658 = state_48832__$1;
(statearr_48854_49658[(2)] = null);

(statearr_48854_49658[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__47301__auto__ = null;
var cljs$core$async$state_machine__47301__auto____0 = (function (){
var statearr_48855 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48855[(0)] = cljs$core$async$state_machine__47301__auto__);

(statearr_48855[(1)] = (1));

return statearr_48855;
});
var cljs$core$async$state_machine__47301__auto____1 = (function (state_48832){
while(true){
var ret_value__47302__auto__ = (function (){try{while(true){
var result__47303__auto__ = switch__47300__auto__(state_48832);
if(cljs.core.keyword_identical_QMARK_(result__47303__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47303__auto__;
}
break;
}
}catch (e48856){var ex__47304__auto__ = e48856;
var statearr_48857_49659 = state_48832;
(statearr_48857_49659[(2)] = ex__47304__auto__);


if(cljs.core.seq((state_48832[(4)]))){
var statearr_48858_49660 = state_48832;
(statearr_48858_49660[(1)] = cljs.core.first((state_48832[(4)])));

} else {
throw ex__47304__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47302__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49661 = state_48832;
state_48832 = G__49661;
continue;
} else {
return ret_value__47302__auto__;
}
break;
}
});
cljs$core$async$state_machine__47301__auto__ = function(state_48832){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__47301__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__47301__auto____1.call(this,state_48832);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__47301__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__47301__auto____0;
cljs$core$async$state_machine__47301__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__47301__auto____1;
return cljs$core$async$state_machine__47301__auto__;
})()
})();
var state__47338__auto__ = (function (){var statearr_48859 = f__47337__auto__();
(statearr_48859[(6)] = c__47336__auto___49644);

return statearr_48859;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47338__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
