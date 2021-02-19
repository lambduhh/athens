goog.provide('athens.dbrx');
/**
 * @param {...*} var_args
 */
athens.dbrx.pull_many = (function() { 
var athens$dbrx$pull_many__delegate = function (args){
try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(athens.db.pull_STAR__rx,args);
}catch (e43447){var e = e43447;
throw (new Error(["pull-many problem ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(args)].join('')));
}};
var athens$dbrx$pull_many = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43451__i = 0, G__43451__a = new Array(arguments.length -  0);
while (G__43451__i < G__43451__a.length) {G__43451__a[G__43451__i] = arguments[G__43451__i + 0]; ++G__43451__i;}
  args = new cljs.core.IndexedSeq(G__43451__a,0,null);
} 
return athens$dbrx$pull_many__delegate.call(this,args);};
athens$dbrx$pull_many.cljs$lang$maxFixedArity = 0;
athens$dbrx$pull_many.cljs$lang$applyTo = (function (arglist__43452){
var args = cljs.core.seq(arglist__43452);
return athens$dbrx$pull_many__delegate(args);
});
athens$dbrx$pull_many.cljs$core$IFn$_invoke$arity$variadic = athens$dbrx$pull_many__delegate;
return athens$dbrx$pull_many;
})()
;
/**
 * @param {...*} var_args
 */
athens.dbrx.pull = (function() { 
var athens$dbrx$pull__delegate = function (args){
try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(athens.db.pull_rx,args);
}catch (e43448){var e = e43448;
throw (new Error(["pull problem ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(args)].join('')));
}};
var athens$dbrx$pull = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43453__i = 0, G__43453__a = new Array(arguments.length -  0);
while (G__43453__i < G__43453__a.length) {G__43453__a[G__43453__i] = arguments[G__43453__i + 0]; ++G__43453__i;}
  args = new cljs.core.IndexedSeq(G__43453__a,0,null);
} 
return athens$dbrx$pull__delegate.call(this,args);};
athens$dbrx$pull.cljs$lang$maxFixedArity = 0;
athens$dbrx$pull.cljs$lang$applyTo = (function (arglist__43454){
var args = cljs.core.seq(arglist__43454);
return athens$dbrx$pull__delegate(args);
});
athens$dbrx$pull.cljs$core$IFn$_invoke$arity$variadic = athens$dbrx$pull__delegate;
return athens$dbrx$pull;
})()
;
/**
 * @param {...*} var_args
 */
athens.dbrx.q = (function() { 
var athens$dbrx$q__delegate = function (args){
try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(athens.db.q_rx,args);
}catch (e43449){var e = e43449;
return ["q problem: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(args)].join('');
}};
var athens$dbrx$q = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43455__i = 0, G__43455__a = new Array(arguments.length -  0);
while (G__43455__i < G__43455__a.length) {G__43455__a[G__43455__i] = arguments[G__43455__i + 0]; ++G__43455__i;}
  args = new cljs.core.IndexedSeq(G__43455__a,0,null);
} 
return athens$dbrx$q__delegate.call(this,args);};
athens$dbrx$q.cljs$lang$maxFixedArity = 0;
athens$dbrx$q.cljs$lang$applyTo = (function (arglist__43456){
var args = cljs.core.seq(arglist__43456);
return athens$dbrx$q__delegate(args);
});
athens$dbrx$q.cljs$core$IFn$_invoke$arity$variadic = athens$dbrx$q__delegate;
return athens$dbrx$q;
})()
;
/**
 * @param {...*} var_args
 */
athens.dbrx.transact_BANG_ = (function() { 
var athens$dbrx$transact_BANG___delegate = function (args){
try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(athens.db.transact_BANG_,args);
}catch (e43450){var e = e43450;
return ["transact! problem: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(args)].join('');
}};
var athens$dbrx$transact_BANG_ = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43458__i = 0, G__43458__a = new Array(arguments.length -  0);
while (G__43458__i < G__43458__a.length) {G__43458__a[G__43458__i] = arguments[G__43458__i + 0]; ++G__43458__i;}
  args = new cljs.core.IndexedSeq(G__43458__a,0,null);
} 
return athens$dbrx$transact_BANG___delegate.call(this,args);};
athens$dbrx$transact_BANG_.cljs$lang$maxFixedArity = 0;
athens$dbrx$transact_BANG_.cljs$lang$applyTo = (function (arglist__43459){
var args = cljs.core.seq(arglist__43459);
return athens$dbrx$transact_BANG___delegate(args);
});
athens$dbrx$transact_BANG_.cljs$core$IFn$_invoke$arity$variadic = athens$dbrx$transact_BANG___delegate;
return athens$dbrx$transact_BANG_;
})()
;

//# sourceMappingURL=athens.dbrx.js.map
