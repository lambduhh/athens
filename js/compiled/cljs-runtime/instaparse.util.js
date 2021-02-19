goog.provide('instaparse.util');
instaparse.util.throw_runtime_exception = (function instaparse$util$throw_runtime_exception(var_args){
var args__4742__auto__ = [];
var len__4736__auto___43567 = arguments.length;
var i__4737__auto___43568 = (0);
while(true){
if((i__4737__auto___43568 < len__4736__auto___43567)){
args__4742__auto__.push((arguments[i__4737__auto___43568]));

var G__43569 = (i__4737__auto___43568 + (1));
i__4737__auto___43568 = G__43569;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return instaparse.util.throw_runtime_exception.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(instaparse.util.throw_runtime_exception.cljs$core$IFn$_invoke$arity$variadic = (function (message){
var text = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,message);
throw text;
}));

(instaparse.util.throw_runtime_exception.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(instaparse.util.throw_runtime_exception.cljs$lang$applyTo = (function (seq43564){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq43564));
}));

instaparse.util.throw_illegal_argument_exception = (function instaparse$util$throw_illegal_argument_exception(var_args){
var args__4742__auto__ = [];
var len__4736__auto___43571 = arguments.length;
var i__4737__auto___43573 = (0);
while(true){
if((i__4737__auto___43573 < len__4736__auto___43571)){
args__4742__auto__.push((arguments[i__4737__auto___43573]));

var G__43575 = (i__4737__auto___43573 + (1));
i__4737__auto___43573 = G__43575;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return instaparse.util.throw_illegal_argument_exception.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(instaparse.util.throw_illegal_argument_exception.cljs$core$IFn$_invoke$arity$variadic = (function (message){
var text = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,message);
throw text;
}));

(instaparse.util.throw_illegal_argument_exception.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(instaparse.util.throw_illegal_argument_exception.cljs$lang$applyTo = (function (seq43565){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq43565));
}));

instaparse.util.regexp_flags = (function instaparse$util$regexp_flags(re){
var G__43566 = "";
var G__43566__$1 = (cljs.core.truth_(re.ignoreCase)?[G__43566,"i"].join(''):G__43566);
var G__43566__$2 = (cljs.core.truth_(re.multiline)?[G__43566__$1,"m"].join(''):G__43566__$1);
if(cljs.core.truth_(re.unicode)){
return [G__43566__$2,"u"].join('');
} else {
return G__43566__$2;
}
});

//# sourceMappingURL=instaparse.util.js.map
