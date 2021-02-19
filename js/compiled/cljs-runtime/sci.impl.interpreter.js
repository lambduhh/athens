goog.provide('sci.impl.interpreter');

sci.impl.interpreter.macros = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 19, [new cljs.core.Symbol(null,"macroexpand","macroexpand",1509933344,null),"null",new cljs.core.Symbol(null,"try","try",-1273693247,null),"null",new cljs.core.Symbol(null,"lazy-seq","lazy-seq",489632906,null),"null",new cljs.core.Symbol(null,"let","let",358118826,null),"null",new cljs.core.Symbol(null,"fn","fn",465265323,null),"null",new cljs.core.Symbol(null,"do","do",1686842252,null),"null",new cljs.core.Symbol(null,"in-ns","in-ns",-2089468466,null),"null",new cljs.core.Symbol(null,"defn","defn",-126010802,null),"null",new cljs.core.Symbol(null,"if","if",1181717262,null),"null",new cljs.core.Symbol(null,"or","or",1876275696,null),"null",new cljs.core.Symbol(null,"macroexpand-1","macroexpand-1",659241329,null),"null",new cljs.core.Symbol(null,"require","require",1172530194,null),"null",new cljs.core.Symbol(null,"syntax-quote","syntax-quote",407366680,null),"null",new cljs.core.Symbol(null,"set!","set!",250714521,null),"null",new cljs.core.Symbol(null,".",".",1975675962,null),"null",new cljs.core.Symbol(null,"quote","quote",1377916282,null),"null",new cljs.core.Symbol(null,"case","case",-1510733573,null),"null",new cljs.core.Symbol(null,"and","and",668631710,null),"null",new cljs.core.Symbol(null,"def","def",597100991,null),"null"], null), null);
/**
 * The and macro from clojure.core.
 */
sci.impl.interpreter.eval_and = (function sci$impl$interpreter$eval_and(ctx,args){
var args__$1 = cljs.core.seq(args);
var args__$2 = args__$1;
while(true){
if(args__$2){
var x = cljs.core.first(args__$2);
var xs = cljs.core.next(args__$2);
var v = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,x) : sci.impl.interpreter.interpret.call(null,ctx,x));
if(cljs.core.truth_(v)){
if(xs){
var G__60832 = xs;
args__$2 = G__60832;
continue;
} else {
return v;
}
} else {
return v;
}
} else {
return true;
}
break;
}
});
/**
 * The or macro from clojure.core.
 */
sci.impl.interpreter.eval_or = (function sci$impl$interpreter$eval_or(ctx,args){
var args__$1 = cljs.core.seq(args);
var args__$2 = args__$1;
while(true){
if(args__$2){
var x = cljs.core.first(args__$2);
var xs = cljs.core.next(args__$2);
var v = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,x) : sci.impl.interpreter.interpret.call(null,ctx,x));
if(cljs.core.truth_(v)){
return v;
} else {
if(xs){
var G__60833 = xs;
args__$2 = G__60833;
continue;
} else {
return v;
}
}
} else {
return null;
}
break;
}
});
/**
 * The let macro from clojure.core
 */
sci.impl.interpreter.eval_let = (function sci$impl$interpreter$eval_let(var_args){
var args__4742__auto__ = [];
var len__4736__auto___60834 = arguments.length;
var i__4737__auto___60835 = (0);
while(true){
if((i__4737__auto___60835 < len__4736__auto___60834)){
args__4742__auto__.push((arguments[i__4737__auto___60835]));

var G__60836 = (i__4737__auto___60835 + (1));
i__4737__auto___60835 = G__60836;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return sci.impl.interpreter.eval_let.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(sci.impl.interpreter.eval_let.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,let_bindings,exprs){
var ctx__$1 = (function (){var ctx__$1 = ctx;
var let_bindings__$1 = let_bindings;
while(true){
var let_name = cljs.core.first(let_bindings__$1);
var let_bindings__$2 = cljs.core.rest(let_bindings__$1);
var let_val = cljs.core.first(let_bindings__$2);
var rest_let_bindings = cljs.core.next(let_bindings__$2);
var val_tag = (function (){var temp__5735__auto__ = cljs.core.meta(let_val);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(m);
} else {
return null;
}
})();
var let_name__$1 = (cljs.core.truth_(val_tag)?cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(let_name,cljs.core.update,new cljs.core.Keyword(null,"tag","tag",-1290361223),((function (ctx__$1,let_bindings__$1,let_name,let_bindings__$2,let_val,rest_let_bindings,val_tag){
return (function (t){
if(cljs.core.truth_(t)){
return t;
} else {
return val_tag;
}
});})(ctx__$1,let_bindings__$1,let_name,let_bindings__$2,let_val,rest_let_bindings,val_tag))
):let_name);
var v = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx__$1,let_val) : sci.impl.interpreter.interpret.call(null,ctx__$1,let_val));
var ctx__$2 = cljs.core.assoc_in(ctx__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),let_name__$1], null),v);
if(cljs.core.not(rest_let_bindings)){
return ctx__$2;
} else {
var G__60837 = ctx__$2;
var G__60838 = rest_let_bindings;
ctx__$1 = G__60837;
let_bindings__$1 = G__60838;
continue;
}
break;
}
})();
if(cljs.core.truth_(exprs)){
var exprs__$1 = exprs;
while(true){
var e = cljs.core.first(exprs__$1);
var ret = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx__$1,e) : sci.impl.interpreter.interpret.call(null,ctx__$1,e));
var nexprs = cljs.core.next(exprs__$1);
if(nexprs){
var G__60839 = nexprs;
exprs__$1 = G__60839;
continue;
} else {
return ret;
}
break;
}
} else {
return null;
}
}));

(sci.impl.interpreter.eval_let.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(sci.impl.interpreter.eval_let.cljs$lang$applyTo = (function (seq60063){
var G__60064 = cljs.core.first(seq60063);
var seq60063__$1 = cljs.core.next(seq60063);
var G__60065 = cljs.core.first(seq60063__$1);
var seq60063__$2 = cljs.core.next(seq60063__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__60064,G__60065,seq60063__$2);
}));

sci.impl.interpreter.eval_if = (function sci$impl$interpreter$eval_if(ctx,expr){
var cond = cljs.core.first(expr);
var expr__$1 = cljs.core.rest(expr);
var then = cljs.core.first(expr__$1);
var expr__$2 = cljs.core.rest(expr__$1);
var else$ = cljs.core.first(expr__$2);
if(cljs.core.truth_((sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,cond) : sci.impl.interpreter.interpret.call(null,ctx,cond)))){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,then) : sci.impl.interpreter.interpret.call(null,ctx,then));
} else {
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,else$) : sci.impl.interpreter.interpret.call(null,ctx,else$));
}
});
sci.impl.interpreter.eval_def = (function sci$impl$interpreter$eval_def(ctx,p__60069){
var vec__60070 = p__60069;
var _def = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60070,(0),null);
var var_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60070,(1),null);
var _QMARK_docstring = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60070,(2),null);
var _QMARK_init = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60070,(3),null);
var docstring = (cljs.core.truth_(_QMARK_init)?_QMARK_docstring:null);
var init = (cljs.core.truth_(docstring)?_QMARK_init:_QMARK_docstring);
var init__$1 = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,init) : sci.impl.interpreter.interpret.call(null,ctx,init));
var m = cljs.core.meta(var_name);
var m__$1 = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,m) : sci.impl.interpreter.interpret.call(null,ctx,m));
var cnn = sci.impl.vars.getName(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m__$1));
var assoc_in_env = (function (env){
var the_current_ns = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn], null));
var prev = cljs.core.get.cljs$core$IFn$_invoke$arity$2(the_current_ns,var_name);
var prev__$1 = (((!(sci.impl.vars.var_QMARK_(prev))))?sci.impl.vars.__GT_SciVar(prev,cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cnn),cljs.core.str.cljs$core$IFn$_invoke$arity$1(var_name)),cljs.core.meta(prev)):prev);
var v = (cljs.core.truth_((sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("sci.impl","var.unbound","sci.impl/var.unbound",-1824207647),init__$1) : sci.impl.utils.kw_identical_QMARK_.call(null,new cljs.core.Keyword("sci.impl","var.unbound","sci.impl/var.unbound",-1824207647),init__$1)))?(function (){var G__60073 = prev__$1;
cljs.core.alter_meta_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__60073,cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m__$1], 0));

return G__60073;
})():(function (){
sci.impl.vars.bindRoot(prev__$1,init__$1);

cljs.core.alter_meta_BANG_.cljs$core$IFn$_invoke$arity$variadic(prev__$1,cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m__$1], 0));

return prev__$1;
})()
);
var the_current_ns__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(the_current_ns,var_name,v);
return cljs.core.assoc_in(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn], null),the_current_ns__$1);
});
var env = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx),assoc_in_env);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn,var_name], null));
});
sci.impl.interpreter.resolve_symbol = (function sci$impl$interpreter$resolve_symbol(ctx,sym){
var bindings = ctx.get(new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var temp__5733__auto__ = cljs.core.find(bindings,sym);
if(cljs.core.truth_(temp__5733__auto__)){
var v = temp__5733__auto__;
return cljs.core.second(v);
} else {
return sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2(["Could not resolve symbol: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym),"\nks:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.keys(new cljs.core.Keyword(null,"bindings","bindings",1271397192).cljs$core$IFn$_invoke$arity$1(ctx)))].join(''),sym);
}
});
sci.impl.interpreter.parse_libspec = (function sci$impl$interpreter$parse_libspec(libspec){
if(cljs.core.sequential_QMARK_(libspec)){
var vec__60080 = libspec;
var seq__60081 = cljs.core.seq(vec__60080);
var first__60082 = cljs.core.first(seq__60081);
var seq__60081__$1 = cljs.core.next(seq__60081);
var lib_name = first__60082;
var opts = seq__60081__$1;
var ret = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"lib-name","lib-name",1158024282),lib_name], null);
var G__60086 = opts;
var vec__60087 = G__60086;
var seq__60088 = cljs.core.seq(vec__60087);
var first__60089 = cljs.core.first(seq__60088);
var seq__60088__$1 = cljs.core.next(seq__60088);
var opt_name = first__60089;
var first__60089__$1 = cljs.core.first(seq__60088__$1);
var seq__60088__$2 = cljs.core.next(seq__60088__$1);
var fst_opt = first__60089__$1;
var rst_opts = seq__60088__$2;
var ret__$1 = ret;
var G__60086__$1 = G__60086;
while(true){
var ret__$2 = ret__$1;
var vec__60097 = G__60086__$1;
var seq__60098 = cljs.core.seq(vec__60097);
var first__60099 = cljs.core.first(seq__60098);
var seq__60098__$1 = cljs.core.next(seq__60098);
var opt_name__$1 = first__60099;
var first__60099__$1 = cljs.core.first(seq__60098__$1);
var seq__60098__$2 = cljs.core.next(seq__60098__$1);
var fst_opt__$1 = first__60099__$1;
var rst_opts__$1 = seq__60098__$2;
if(cljs.core.not(opt_name__$1)){
return ret__$2;
} else {
var G__60100 = opt_name__$1;
var G__60100__$1 = (((G__60100 instanceof cljs.core.Keyword))?G__60100.fqn:null);
switch (G__60100__$1) {
case "as":
var G__60841 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret__$2,new cljs.core.Keyword(null,"as","as",1148689641),fst_opt__$1);
var G__60842 = rst_opts__$1;
ret__$1 = G__60841;
G__60086__$1 = G__60842;
continue;

break;
case "reload":
case "reload-all":
case "verbose":
var G__60843 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret__$2,new cljs.core.Keyword(null,"reload","reload",863702807),true);
var G__60844 = cljs.core.cons(fst_opt__$1,rst_opts__$1);
ret__$1 = G__60843;
G__60086__$1 = G__60844;
continue;

break;
case "refer":
case "rename":
case "exclude":
case "only":
var G__60845 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret__$2,opt_name__$1,fst_opt__$1);
var G__60846 = rst_opts__$1;
ret__$1 = G__60845;
G__60086__$1 = G__60846;
continue;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__60100__$1)].join('')));

}
}
break;
}
} else {
if((libspec instanceof cljs.core.Symbol)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"lib-name","lib-name",1158024282),libspec], null);
} else {
throw (new Error(["Invalid libspec: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(libspec)].join('')));

}
}
});
sci.impl.interpreter.handle_refer_all = (function sci$impl$interpreter$handle_refer_all(the_current_ns,the_loaded_ns,include_sym_QMARK_,rename_sym,only){
var only__$1 = (cljs.core.truth_(only)?cljs.core.set(only):null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ns,p__60104){
var vec__60105 = p__60104;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60105,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60105,(1),null);
if(cljs.core.truth_((((k instanceof cljs.core.Symbol))?(function (){var and__4115__auto__ = (include_sym_QMARK_.cljs$core$IFn$_invoke$arity$1 ? include_sym_QMARK_.cljs$core$IFn$_invoke$arity$1(k) : include_sym_QMARK_.call(null,k));
if(cljs.core.truth_(and__4115__auto__)){
return ((cljs.core.not(only__$1)) || (cljs.core.contains_QMARK_(only__$1,k)));
} else {
return and__4115__auto__;
}
})():false))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ns,(rename_sym.cljs$core$IFn$_invoke$arity$1 ? rename_sym.cljs$core$IFn$_invoke$arity$1(k) : rename_sym.call(null,k)),v);
} else {
return ns;
}
}),the_current_ns,the_loaded_ns);
});
sci.impl.interpreter.handle_require_libspec_env = (function sci$impl$interpreter$handle_require_libspec_env(env,use_QMARK_,current_ns,the_loaded_ns,lib_name,p__60108){
var map__60109 = p__60108;
var map__60109__$1 = (((((!((map__60109 == null))))?(((((map__60109.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60109.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60109):map__60109);
var _parsed_libspec = map__60109__$1;
var as = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60109__$1,new cljs.core.Keyword(null,"as","as",1148689641));
var refer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60109__$1,new cljs.core.Keyword(null,"refer","refer",-964295553));
var rename = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60109__$1,new cljs.core.Keyword(null,"rename","rename",1508157613));
var exclude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60109__$1,new cljs.core.Keyword(null,"exclude","exclude",-1230250334));
var only = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60109__$1,new cljs.core.Keyword(null,"only","only",1907811652));
var the_current_ns = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),current_ns], null));
var the_current_ns__$1 = (cljs.core.truth_(as)?cljs.core.assoc_in(the_current_ns,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"aliases","aliases",1346874714),as], null),lib_name):the_current_ns);
var rename_sym = (cljs.core.truth_(rename)?(function (sym){
var or__4126__auto__ = (rename.cljs$core$IFn$_invoke$arity$1 ? rename.cljs$core$IFn$_invoke$arity$1(sym) : rename.call(null,sym));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return sym;
}
}):cljs.core.identity);
var include_sym_QMARK_ = (cljs.core.truth_(exclude)?(function (){var excludes = cljs.core.set(exclude);
return (function (sym){
return (!(cljs.core.contains_QMARK_(excludes,sym)));
});
})():cljs.core.constantly(true));
var the_current_ns__$2 = (cljs.core.truth_(refer)?(cljs.core.truth_((function (){var or__4126__auto__ = (sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"all","all",892129742),refer) : sci.impl.utils.kw_identical_QMARK_.call(null,new cljs.core.Keyword(null,"all","all",892129742),refer));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return use_QMARK_;
}
})())?sci.impl.interpreter.handle_refer_all(the_current_ns__$1,the_loaded_ns,include_sym_QMARK_,rename_sym,null):((cljs.core.sequential_QMARK_(refer))?cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ns,sym){
if(cljs.core.truth_(include_sym_QMARK_(sym))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ns,(rename_sym.cljs$core$IFn$_invoke$arity$1 ? rename_sym.cljs$core$IFn$_invoke$arity$1(sym) : rename_sym.call(null,sym)),(function (){var temp__5733__auto__ = cljs.core.find(the_loaded_ns,sym);
if(cljs.core.truth_(temp__5733__auto__)){
var vec__60111 = temp__5733__auto__;
var _k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60111,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60111,(1),null);
return v;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)," does not exist"].join('')));
}
})());
} else {
return ns;
}
}),the_current_ns__$1,refer):(function(){throw (new Error(":refer value must be a sequential collection of symbols"))})()
)):(cljs.core.truth_(use_QMARK_)?sci.impl.interpreter.handle_refer_all(the_current_ns__$1,the_loaded_ns,include_sym_QMARK_,rename_sym,only):the_current_ns__$1
));
var env__$1 = cljs.core.assoc_in(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),current_ns], null),the_current_ns__$2);
return env__$1;
});
sci.impl.interpreter.handle_require_libspec = (function sci$impl$interpreter$handle_require_libspec(ctx,libspec){
var map__60114 = sci.impl.interpreter.parse_libspec(libspec);
var map__60114__$1 = (((((!((map__60114 == null))))?(((((map__60114.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60114.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60114):map__60114);
var parsed_libspec = map__60114__$1;
var lib_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60114__$1,new cljs.core.Keyword(null,"lib-name","lib-name",1158024282));
var reload = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60114__$1,new cljs.core.Keyword(null,"reload","reload",863702807));
var env_STAR_ = new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx);
var env = cljs.core.deref(env_STAR_);
var cnn = sci.impl.vars.current_ns_name();
var namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469));
var use_QMARK_ = new cljs.core.Keyword("sci.impl","use","sci.impl/use",1724565881).cljs$core$IFn$_invoke$arity$1(ctx);
var temp__5733__auto__ = (cljs.core.truth_(reload)?null:cljs.core.get.cljs$core$IFn$_invoke$arity$2(namespaces,lib_name));
if(cljs.core.truth_(temp__5733__auto__)){
var the_loaded_ns = temp__5733__auto__;
return cljs.core.reset_BANG_(env_STAR_,sci.impl.interpreter.handle_require_libspec_env(env,use_QMARK_,cnn,the_loaded_ns,lib_name,parsed_libspec));
} else {
var temp__5733__auto____$1 = new cljs.core.Keyword(null,"load-fn","load-fn",-2121144334).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_(temp__5733__auto____$1)){
var load_fn = temp__5733__auto____$1;
var temp__5733__auto____$2 = (function (){var G__60117 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),lib_name], null);
return (load_fn.cljs$core$IFn$_invoke$arity$1 ? load_fn.cljs$core$IFn$_invoke$arity$1(G__60117) : load_fn.call(null,G__60117));
})();
if(cljs.core.truth_(temp__5733__auto____$2)){
var map__60120 = temp__5733__auto____$2;
var map__60120__$1 = (((((!((map__60120 == null))))?(((((map__60120.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60120.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60120):map__60120);
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60120__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60120__$1,new cljs.core.Keyword(null,"source","source",-433931539));
try{sci.impl.vars.push_thread_bindings(cljs.core.PersistentArrayMap.createAsIfByAssoc([sci.impl.vars.current_ns,cljs.core.deref(sci.impl.vars.current_ns),sci.impl.vars.current_file,file]));

try{var G__60123_60847 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"bindings","bindings",1271397192),cljs.core.PersistentArrayMap.EMPTY);
var G__60124_60848 = source;
(sci.impl.interpreter.eval_string_STAR_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.eval_string_STAR_.cljs$core$IFn$_invoke$arity$2(G__60123_60847,G__60124_60848) : sci.impl.interpreter.eval_string_STAR_.call(null,G__60123_60847,G__60124_60848));
}finally {sci.impl.vars.pop_thread_bindings();
}}catch (e60122){if((e60122 instanceof Error)){
var e_60849 = e60122;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(env_STAR_,cljs.core.update,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lib_name], 0));

throw e_60849;
} else {
throw e60122;

}
}
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(env_STAR_,(function (env__$1){
var namespaces__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(env__$1,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469));
var the_loaded_ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(namespaces__$1,lib_name);
return sci.impl.interpreter.handle_require_libspec_env(env__$1,use_QMARK_,cnn,the_loaded_ns,lib_name,parsed_libspec);
}));
} else {
var or__4126__auto__ = (cljs.core.truth_(reload)?(function (){var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(namespaces,lib_name);
if(cljs.core.truth_(temp__5735__auto__)){
var the_loaded_ns = temp__5735__auto__;
return cljs.core.reset_BANG_(env_STAR_,sci.impl.interpreter.handle_require_libspec_env(env,use_QMARK_,cnn,the_loaded_ns,lib_name,parsed_libspec));
} else {
return null;
}
})():null);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
throw (new Error(["Could not require ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib_name),"."].join('')));
}
}
} else {
throw (new Error(["Could not require ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib_name),"."].join('')));
}
}
});
sci.impl.interpreter.eval_require = (function sci$impl$interpreter$eval_require(var_args){
var args__4742__auto__ = [];
var len__4736__auto___60850 = arguments.length;
var i__4737__auto___60851 = (0);
while(true){
if((i__4737__auto___60851 < len__4736__auto___60850)){
args__4742__auto__.push((arguments[i__4737__auto___60851]));

var G__60852 = (i__4737__auto___60851 + (1));
i__4737__auto___60851 = G__60852;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return sci.impl.interpreter.eval_require.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(sci.impl.interpreter.eval_require.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,args){
var libspecs = cljs.core.PersistentVector.EMPTY;
var current_libspec = null;
var args__$1 = args;
while(true){
if(cljs.core.truth_(args__$1)){
var ret = (function (){var G__60137 = ctx;
var G__60138 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60137,G__60138) : sci.impl.interpreter.interpret.call(null,G__60137,G__60138));
})();
if((ret instanceof cljs.core.Symbol)){
var G__60853 = (function (){var G__60139 = libspecs;
if(cljs.core.truth_(current_libspec)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__60139,current_libspec);
} else {
return G__60139;
}
})();
var G__60854 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ret], null);
var G__60855 = cljs.core.next(args__$1);
libspecs = G__60853;
current_libspec = G__60854;
args__$1 = G__60855;
continue;
} else {
if((ret instanceof cljs.core.Keyword)){
var G__60856 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(libspecs,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(current_libspec,ret));
var G__60857 = null;
var G__60858 = cljs.core.next(args__$1);
libspecs = G__60856;
current_libspec = G__60857;
args__$1 = G__60858;
continue;
} else {
var G__60859 = (function (){var G__60140 = libspecs;
if(cljs.core.truth_(current_libspec)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__60140,current_libspec);
} else {
return G__60140;
}
})();
var G__60860 = ret;
var G__60861 = cljs.core.next(args__$1);
libspecs = G__60859;
current_libspec = G__60860;
args__$1 = G__60861;
continue;

}
}
} else {
var libspecs__$1 = (function (){var G__60141 = libspecs;
if(cljs.core.truth_(current_libspec)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__60141,current_libspec);
} else {
return G__60141;
}
})();
return cljs.core.run_BANG_(((function (libspecs,current_libspec,args__$1,libspecs__$1){
return (function (p1__60129_SHARP_){
return sci.impl.interpreter.handle_require_libspec(ctx,p1__60129_SHARP_);
});})(libspecs,current_libspec,args__$1,libspecs__$1))
,libspecs__$1);
}
break;
}
}));

(sci.impl.interpreter.eval_require.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sci.impl.interpreter.eval_require.cljs$lang$applyTo = (function (seq60130){
var G__60131 = cljs.core.first(seq60130);
var seq60130__$1 = cljs.core.next(seq60130);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__60131,seq60130__$1);
}));

cljs.core.vreset_BANG_(sci.impl.utils.eval_require_state,sci.impl.interpreter.eval_require);
sci.impl.interpreter.eval_use = (function sci$impl$interpreter$eval_use(var_args){
var args__4742__auto__ = [];
var len__4736__auto___60862 = arguments.length;
var i__4737__auto___60863 = (0);
while(true){
if((i__4737__auto___60863 < len__4736__auto___60862)){
args__4742__auto__.push((arguments[i__4737__auto___60863]));

var G__60864 = (i__4737__auto___60863 + (1));
i__4737__auto___60863 = G__60864;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return sci.impl.interpreter.eval_use.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(sci.impl.interpreter.eval_use.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(sci.impl.interpreter.eval_require,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword("sci.impl","use","sci.impl/use",1724565881),true),args);
}));

(sci.impl.interpreter.eval_use.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sci.impl.interpreter.eval_use.cljs$lang$applyTo = (function (seq60142){
var G__60143 = cljs.core.first(seq60142);
var seq60142__$1 = cljs.core.next(seq60142);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__60143,seq60142__$1);
}));

cljs.core.vreset_BANG_(sci.impl.utils.eval_use_state,sci.impl.interpreter.eval_use);
sci.impl.interpreter.eval_case = (function sci$impl$interpreter$eval_case(ctx,p__60144){
var vec__60145 = p__60144;
var _case = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60145,(0),null);
var map__60148 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60145,(1),null);
var map__60148__$1 = (((((!((map__60148 == null))))?(((((map__60148.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60148.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60148):map__60148);
var case_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60148__$1,new cljs.core.Keyword(null,"case-map","case-map",955082964));
var case_val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60148__$1,new cljs.core.Keyword(null,"case-val","case-val",880926521));
var case_default = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60148__$1,new cljs.core.Keyword(null,"case-default","case-default",1140470708));
var v = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,case_val) : sci.impl.interpreter.interpret.call(null,ctx,case_val));
var temp__5733__auto__ = cljs.core.find(case_map,v);
if(cljs.core.truth_(temp__5733__auto__)){
var vec__60150 = temp__5733__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60150,(0),null);
var found = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60150,(1),null);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,found) : sci.impl.interpreter.interpret.call(null,ctx,found));
} else {
if(cljs.core.vector_QMARK_(case_default)){
var G__60153 = ctx;
var G__60154 = cljs.core.second(case_default);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60153,G__60154) : sci.impl.interpreter.interpret.call(null,G__60153,G__60154));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('')));
}
}
});
sci.impl.interpreter.eval_try = (function sci$impl$interpreter$eval_try(ctx,expr){
var map__60155 = new cljs.core.Keyword("sci.impl","try","sci.impl/try",2142624741).cljs$core$IFn$_invoke$arity$1(expr);
var map__60155__$1 = (((((!((map__60155 == null))))?(((((map__60155.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60155.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60155):map__60155);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60155__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var catches = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60155__$1,new cljs.core.Keyword(null,"catches","catches",-1478797617));
var finally$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60155__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
try{var _STAR_in_try_STAR__orig_val__60164 = sci.impl.utils._STAR_in_try_STAR_;
var _STAR_in_try_STAR__temp_val__60165 = true;
(sci.impl.utils._STAR_in_try_STAR_ = _STAR_in_try_STAR__temp_val__60165);

try{return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,body) : sci.impl.interpreter.interpret.call(null,ctx,body));
}finally {(sci.impl.utils._STAR_in_try_STAR_ = _STAR_in_try_STAR__orig_val__60164);
}}catch (e60158){if((e60158 instanceof Error)){
var e = e60158;
var temp__5733__auto__ = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (_,c){
var clazz = new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(c);
if((e instanceof clazz)){
return cljs.core.reduced(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sci.impl.interpreter","try-result","sci.impl.interpreter/try-result",1789456125),(function (){var G__60159 = cljs.core.assoc_in(ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),new cljs.core.Keyword(null,"binding","binding",539932593).cljs$core$IFn$_invoke$arity$1(c)], null),e);
var G__60160 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(c);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60159,G__60160) : sci.impl.interpreter.interpret.call(null,G__60159,G__60160));
})()], null));
} else {
return null;
}
}),null,catches);
if(cljs.core.truth_(temp__5733__auto__)){
var vec__60161 = temp__5733__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60161,(0),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60161,(1),null);
return r;
} else {
return sci.impl.utils.rethrow_with_location_of_node(ctx,e,body);
}
} else {
throw e60158;

}
}finally {(sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,finally$) : sci.impl.interpreter.interpret.call(null,ctx,finally$));
}});
sci.impl.interpreter.eval_throw = (function sci$impl$interpreter$eval_throw(ctx,p__60166){
var vec__60167 = p__60166;
var _throw = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60167,(0),null);
var ex = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60167,(1),null);
var ex__$1 = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,ex) : sci.impl.interpreter.interpret.call(null,ctx,ex));
throw ex__$1;
});
sci.impl.interpreter.eval_static_method_invocation = (function sci$impl$interpreter$eval_static_method_invocation(ctx,expr){
return sci.impl.interop.invoke_static_method(cljs.core.first(expr),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__60170_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__60170_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__60170_SHARP_));
}),cljs.core.rest(expr)));
});
sci.impl.interpreter.eval_constructor_invocation = (function sci$impl$interpreter$eval_constructor_invocation(ctx,p__60176){
var vec__60177 = p__60176;
var _new = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60177,(0),null);
var constructor$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60177,(1),null);
var args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60177,(2),null);
var args__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__60175_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__60175_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__60175_SHARP_));
}),args);
return sci.impl.interop.invoke_constructor(constructor$,args__$1);
});
sci.impl.interpreter.eval_instance_method_invocation = (function sci$impl$interpreter$eval_instance_method_invocation(p__60185,p__60186){
var map__60187 = p__60185;
var map__60187__$1 = (((((!((map__60187 == null))))?(((((map__60187.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60187.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60187):map__60187);
var ctx = map__60187__$1;
var class__GT_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60187__$1,new cljs.core.Keyword(null,"class->opts","class->opts",2061906477));
var vec__60188 = p__60186;
var _dot = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60188,(0),null);
var instance_expr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60188,(1),null);
var method_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60188,(2),null);
var args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60188,(3),null);
var instance_meta = cljs.core.meta(instance_expr);
var tag_class = new cljs.core.Keyword(null,"tag-class","tag-class",714967874).cljs$core$IFn$_invoke$arity$1(instance_meta);
var instance_expr_STAR_ = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,instance_expr) : sci.impl.interpreter.interpret.call(null,ctx,instance_expr));
var instance_class = (function (){var or__4126__auto__ = tag_class;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.type(instance_expr_STAR_);
}
})();
var instance_class_name = instance_class.name;
var instance_class_symbol = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(instance_class_name);
var allowed_QMARK_ = (function (){var or__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(class__GT_opts,new cljs.core.Keyword(null,"allow","allow",-1857325745));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(class__GT_opts,instance_class_symbol);
}
})();
var target_class = (cljs.core.truth_(allowed_QMARK_)?instance_class:(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"public-class","public-class",1127293019).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_(temp__5735__auto__)){
var f = temp__5735__auto__;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(instance_expr_STAR_) : f.call(null,instance_expr_STAR_));
} else {
return null;
}
})());
if(cljs.core.truth_(target_class)){
} else {
sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2(["Method ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(method_str)," on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(instance_class)," not allowed!"].join(''),instance_expr);
}

var args__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__60184_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__60184_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__60184_SHARP_));
}),args);
return sci.impl.interop.invoke_instance_method(instance_expr_STAR_,target_class,method_str,args__$1);
});
sci.impl.interpreter.eval_in_ns = (function sci$impl$interpreter$eval_in_ns(ctx,p__60196){
var vec__60197 = p__60196;
var _in_ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60197,(0),null);
var ns_expr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60197,(1),null);
var ns_sym = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,ns_expr) : sci.impl.interpreter.interpret.call(null,ctx,ns_expr));
sci.impl.utils.set_namespace_BANG_(ctx,ns_sym,null);

return null;
});
sci.impl.interpreter.eval_refer = (function sci$impl$interpreter$eval_refer(ctx,p__60200){
var vec__60201 = p__60200;
var seq__60202 = cljs.core.seq(vec__60201);
var first__60203 = cljs.core.first(seq__60202);
var seq__60202__$1 = cljs.core.next(seq__60202);
var _ = first__60203;
var first__60203__$1 = cljs.core.first(seq__60202__$1);
var seq__60202__$2 = cljs.core.next(seq__60202__$1);
var ns_sym = first__60203__$1;
var exprs = seq__60202__$2;
var ns_sym__$1 = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,ns_sym) : sci.impl.interpreter.interpret.call(null,ctx,ns_sym));
var exprs__$1 = exprs;
while(true){
if(exprs__$1){
var vec__60204 = exprs__$1;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60204,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60204,(1),null);
var G__60207_60865 = k;
var G__60207_60866__$1 = (((G__60207_60865 instanceof cljs.core.Keyword))?G__60207_60865.fqn:null);
switch (G__60207_60866__$1) {
case "exclude":
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx),((function (exprs__$1,G__60207_60865,G__60207_60866__$1,vec__60204,k,v,ns_sym__$1,vec__60201,seq__60202,first__60203,seq__60202__$1,_,first__60203__$1,seq__60202__$2,ns_sym,exprs){
return (function (env){
var cnn = sci.impl.vars.current_ns_name();
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(env,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn,new cljs.core.Keyword(null,"refer","refer",-964295553),ns_sym__$1,new cljs.core.Keyword(null,"exclude","exclude",-1230250334)], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.into,cljs.core.PersistentHashSet.EMPTY),v);
});})(exprs__$1,G__60207_60865,G__60207_60866__$1,vec__60204,k,v,ns_sym__$1,vec__60201,seq__60202,first__60203,seq__60202__$1,_,first__60203__$1,seq__60202__$2,ns_sym,exprs))
);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__60207_60866__$1)].join('')));

}

var G__60868 = cljs.core.nnext(exprs__$1);
exprs__$1 = G__60868;
continue;
} else {
return null;
}
break;
}
});
sci.impl.interpreter.eval_resolve = (function sci$impl$interpreter$eval_resolve(ctx,sym){
var sym__$1 = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,sym) : sci.impl.interpreter.interpret.call(null,ctx,sym));
return cljs.core.second(sci.impl.analyzer.lookup(ctx,sym__$1,false));
});
cljs.core.vreset_BANG_(sci.impl.utils.eval_resolve_state,sci.impl.interpreter.eval_resolve);
sci.impl.interpreter.macroexpand_1 = (function sci$impl$interpreter$macroexpand_1(ctx,expr){
var original_expr = expr;
if(cljs.core.seq_QMARK_(expr)){
var op = cljs.core.first(expr);
if((op instanceof cljs.core.Symbol)){
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(sci.impl.analyzer.special_syms,op))){
return expr;
} else {
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"for","for",316745208,null),null], null), null),op)){
return sci.impl.analyzer.analyze(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword("sci.impl","macroexpanding","sci.impl/macroexpanding",2113471825),true),expr);
} else {
var f = sci.impl.analyzer.resolve_symbol.cljs$core$IFn$_invoke$arity$3(ctx,op,true);
var f__$1 = (cljs.core.truth_(((sci.impl.vars.var_QMARK_(f))?sci.impl.vars.isMacro(f):false))?cljs.core.deref(f):f);
if(cljs.core.truth_(sci.impl.analyzer.macro_QMARK_(f__$1))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(f__$1,original_expr,new cljs.core.Keyword(null,"bindings","bindings",1271397192).cljs$core$IFn$_invoke$arity$1(ctx),cljs.core.rest(expr));
} else {
return expr;
}

}
}
} else {
return expr;
}
} else {
return expr;
}
});
sci.impl.interpreter.macroexpand = (function sci$impl$interpreter$macroexpand(ctx,form){
var ex = sci.impl.interpreter.macroexpand_1(ctx,form);
if((ex === form)){
return form;
} else {
return (sci.impl.interpreter.macroexpand.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.macroexpand.cljs$core$IFn$_invoke$arity$2(ctx,ex) : sci.impl.interpreter.macroexpand.call(null,ctx,ex));
}
});
sci.impl.interpreter.eval_set_BANG_ = (function sci$impl$interpreter$eval_set_BANG_(ctx,p__60223){
var vec__60224 = p__60223;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60224,(0),null);
var obj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60224,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60224,(2),null);
var obj__$1 = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,obj) : sci.impl.interpreter.interpret.call(null,ctx,obj));
var v__$1 = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,v) : sci.impl.interpreter.interpret.call(null,ctx,v));
if(sci.impl.vars.var_QMARK_(obj__$1)){
return sci.impl.types.setVal(obj__$1,v__$1);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Cannot set ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(obj__$1)," to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v__$1)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"obj","obj",981763962),obj__$1,new cljs.core.Keyword(null,"v","v",21465059),v__$1], null));
}
});
sci.impl.interpreter.eval_do_STAR_ = (function sci$impl$interpreter$eval_do_STAR_(ctx,exprs){
var G__60230 = exprs;
var vec__60231 = G__60230;
var seq__60232 = cljs.core.seq(vec__60231);
var first__60233 = cljs.core.first(seq__60232);
var seq__60232__$1 = cljs.core.next(seq__60232);
var expr = first__60233;
var exprs__$1 = seq__60232__$1;
var G__60230__$1 = G__60230;
while(true){
var vec__60234 = G__60230__$1;
var seq__60235 = cljs.core.seq(vec__60234);
var first__60236 = cljs.core.first(seq__60235);
var seq__60235__$1 = cljs.core.next(seq__60235);
var expr__$1 = first__60236;
var exprs__$2 = seq__60235__$1;
var ret = (function (){try{return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,expr__$1) : sci.impl.interpreter.interpret.call(null,ctx,expr__$1));
}catch (e60237){if((e60237 instanceof Error)){
var e = e60237;
return sci.impl.utils.rethrow_with_location_of_node(ctx,e,expr__$1);
} else {
throw e60237;

}
}})();
var temp__5733__auto__ = cljs.core.seq(exprs__$2);
if(temp__5733__auto__){
var exprs__$3 = temp__5733__auto__;
var G__60869 = exprs__$3;
G__60230__$1 = G__60869;
continue;
} else {
return ret;
}
break;
}
});
sci.impl.interpreter.eval_do = (function sci$impl$interpreter$eval_do(ctx,expr){
var temp__5735__auto__ = cljs.core.next(expr);
if(temp__5735__auto__){
var exprs = temp__5735__auto__;
return sci.impl.interpreter.eval_do_STAR_(ctx,exprs);
} else {
return null;
}
});
sci.impl.interpreter.fn_call = (function sci$impl$interpreter$fn_call(ctx,f,args){
var G__60430 = cljs.core.count(args);
switch (G__60430) {
case (0):
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

break;
case (1):
var arg60240 = (function (){var G__60431 = ctx;
var G__60432 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60431,G__60432) : sci.impl.interpreter.interpret.call(null,G__60431,G__60432));
})();
var args__$1 = cljs.core.rest(args);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(arg60240) : f.call(null,arg60240));

break;
case (2):
var arg60241 = (function (){var G__60433 = ctx;
var G__60434 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60433,G__60434) : sci.impl.interpreter.interpret.call(null,G__60433,G__60434));
})();
var args__$1 = cljs.core.rest(args);
var arg60242 = (function (){var G__60435 = ctx;
var G__60436 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60435,G__60436) : sci.impl.interpreter.interpret.call(null,G__60435,G__60436));
})();
var args__$2 = cljs.core.rest(args__$1);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(arg60241,arg60242) : f.call(null,arg60241,arg60242));

break;
case (3):
var arg60243 = (function (){var G__60437 = ctx;
var G__60438 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60437,G__60438) : sci.impl.interpreter.interpret.call(null,G__60437,G__60438));
})();
var args__$1 = cljs.core.rest(args);
var arg60244 = (function (){var G__60439 = ctx;
var G__60440 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60439,G__60440) : sci.impl.interpreter.interpret.call(null,G__60439,G__60440));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg60245 = (function (){var G__60441 = ctx;
var G__60442 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60441,G__60442) : sci.impl.interpreter.interpret.call(null,G__60441,G__60442));
})();
var args__$3 = cljs.core.rest(args__$2);
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(arg60243,arg60244,arg60245) : f.call(null,arg60243,arg60244,arg60245));

break;
case (4):
var arg60246 = (function (){var G__60443 = ctx;
var G__60444 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60443,G__60444) : sci.impl.interpreter.interpret.call(null,G__60443,G__60444));
})();
var args__$1 = cljs.core.rest(args);
var arg60247 = (function (){var G__60445 = ctx;
var G__60446 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60445,G__60446) : sci.impl.interpreter.interpret.call(null,G__60445,G__60446));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg60248 = (function (){var G__60447 = ctx;
var G__60448 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60447,G__60448) : sci.impl.interpreter.interpret.call(null,G__60447,G__60448));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg60249 = (function (){var G__60449 = ctx;
var G__60450 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60449,G__60450) : sci.impl.interpreter.interpret.call(null,G__60449,G__60450));
})();
var args__$4 = cljs.core.rest(args__$3);
return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(arg60246,arg60247,arg60248,arg60249) : f.call(null,arg60246,arg60247,arg60248,arg60249));

break;
case (5):
var arg60250 = (function (){var G__60451 = ctx;
var G__60452 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60451,G__60452) : sci.impl.interpreter.interpret.call(null,G__60451,G__60452));
})();
var args__$1 = cljs.core.rest(args);
var arg60251 = (function (){var G__60453 = ctx;
var G__60454 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60453,G__60454) : sci.impl.interpreter.interpret.call(null,G__60453,G__60454));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg60252 = (function (){var G__60455 = ctx;
var G__60456 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60455,G__60456) : sci.impl.interpreter.interpret.call(null,G__60455,G__60456));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg60253 = (function (){var G__60457 = ctx;
var G__60458 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60457,G__60458) : sci.impl.interpreter.interpret.call(null,G__60457,G__60458));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg60254 = (function (){var G__60459 = ctx;
var G__60460 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60459,G__60460) : sci.impl.interpreter.interpret.call(null,G__60459,G__60460));
})();
var args__$5 = cljs.core.rest(args__$4);
return (f.cljs$core$IFn$_invoke$arity$5 ? f.cljs$core$IFn$_invoke$arity$5(arg60250,arg60251,arg60252,arg60253,arg60254) : f.call(null,arg60250,arg60251,arg60252,arg60253,arg60254));

break;
case (6):
var arg60255 = (function (){var G__60461 = ctx;
var G__60462 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60461,G__60462) : sci.impl.interpreter.interpret.call(null,G__60461,G__60462));
})();
var args__$1 = cljs.core.rest(args);
var arg60256 = (function (){var G__60463 = ctx;
var G__60464 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60463,G__60464) : sci.impl.interpreter.interpret.call(null,G__60463,G__60464));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg60257 = (function (){var G__60465 = ctx;
var G__60466 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60465,G__60466) : sci.impl.interpreter.interpret.call(null,G__60465,G__60466));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg60258 = (function (){var G__60467 = ctx;
var G__60468 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60467,G__60468) : sci.impl.interpreter.interpret.call(null,G__60467,G__60468));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg60259 = (function (){var G__60469 = ctx;
var G__60470 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60469,G__60470) : sci.impl.interpreter.interpret.call(null,G__60469,G__60470));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg60260 = (function (){var G__60471 = ctx;
var G__60472 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60471,G__60472) : sci.impl.interpreter.interpret.call(null,G__60471,G__60472));
})();
var args__$6 = cljs.core.rest(args__$5);
return (f.cljs$core$IFn$_invoke$arity$6 ? f.cljs$core$IFn$_invoke$arity$6(arg60255,arg60256,arg60257,arg60258,arg60259,arg60260) : f.call(null,arg60255,arg60256,arg60257,arg60258,arg60259,arg60260));

break;
case (7):
var arg60261 = (function (){var G__60473 = ctx;
var G__60474 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60473,G__60474) : sci.impl.interpreter.interpret.call(null,G__60473,G__60474));
})();
var args__$1 = cljs.core.rest(args);
var arg60262 = (function (){var G__60475 = ctx;
var G__60476 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60475,G__60476) : sci.impl.interpreter.interpret.call(null,G__60475,G__60476));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg60263 = (function (){var G__60477 = ctx;
var G__60478 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60477,G__60478) : sci.impl.interpreter.interpret.call(null,G__60477,G__60478));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg60264 = (function (){var G__60479 = ctx;
var G__60480 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60479,G__60480) : sci.impl.interpreter.interpret.call(null,G__60479,G__60480));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg60265 = (function (){var G__60481 = ctx;
var G__60482 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60481,G__60482) : sci.impl.interpreter.interpret.call(null,G__60481,G__60482));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg60266 = (function (){var G__60483 = ctx;
var G__60484 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60483,G__60484) : sci.impl.interpreter.interpret.call(null,G__60483,G__60484));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg60267 = (function (){var G__60485 = ctx;
var G__60486 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60485,G__60486) : sci.impl.interpreter.interpret.call(null,G__60485,G__60486));
})();
var args__$7 = cljs.core.rest(args__$6);
return (f.cljs$core$IFn$_invoke$arity$7 ? f.cljs$core$IFn$_invoke$arity$7(arg60261,arg60262,arg60263,arg60264,arg60265,arg60266,arg60267) : f.call(null,arg60261,arg60262,arg60263,arg60264,arg60265,arg60266,arg60267));

break;
case (8):
var arg60268 = (function (){var G__60487 = ctx;
var G__60488 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60487,G__60488) : sci.impl.interpreter.interpret.call(null,G__60487,G__60488));
})();
var args__$1 = cljs.core.rest(args);
var arg60269 = (function (){var G__60489 = ctx;
var G__60490 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60489,G__60490) : sci.impl.interpreter.interpret.call(null,G__60489,G__60490));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg60270 = (function (){var G__60491 = ctx;
var G__60492 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60491,G__60492) : sci.impl.interpreter.interpret.call(null,G__60491,G__60492));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg60271 = (function (){var G__60493 = ctx;
var G__60494 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60493,G__60494) : sci.impl.interpreter.interpret.call(null,G__60493,G__60494));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg60272 = (function (){var G__60495 = ctx;
var G__60496 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60495,G__60496) : sci.impl.interpreter.interpret.call(null,G__60495,G__60496));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg60273 = (function (){var G__60497 = ctx;
var G__60498 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60497,G__60498) : sci.impl.interpreter.interpret.call(null,G__60497,G__60498));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg60274 = (function (){var G__60499 = ctx;
var G__60500 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60499,G__60500) : sci.impl.interpreter.interpret.call(null,G__60499,G__60500));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg60275 = (function (){var G__60501 = ctx;
var G__60502 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60501,G__60502) : sci.impl.interpreter.interpret.call(null,G__60501,G__60502));
})();
var args__$8 = cljs.core.rest(args__$7);
return (f.cljs$core$IFn$_invoke$arity$8 ? f.cljs$core$IFn$_invoke$arity$8(arg60268,arg60269,arg60270,arg60271,arg60272,arg60273,arg60274,arg60275) : f.call(null,arg60268,arg60269,arg60270,arg60271,arg60272,arg60273,arg60274,arg60275));

break;
case (9):
var arg60276 = (function (){var G__60503 = ctx;
var G__60504 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60503,G__60504) : sci.impl.interpreter.interpret.call(null,G__60503,G__60504));
})();
var args__$1 = cljs.core.rest(args);
var arg60277 = (function (){var G__60505 = ctx;
var G__60506 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60505,G__60506) : sci.impl.interpreter.interpret.call(null,G__60505,G__60506));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg60278 = (function (){var G__60507 = ctx;
var G__60508 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60507,G__60508) : sci.impl.interpreter.interpret.call(null,G__60507,G__60508));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg60279 = (function (){var G__60509 = ctx;
var G__60510 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60509,G__60510) : sci.impl.interpreter.interpret.call(null,G__60509,G__60510));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg60280 = (function (){var G__60511 = ctx;
var G__60512 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60511,G__60512) : sci.impl.interpreter.interpret.call(null,G__60511,G__60512));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg60281 = (function (){var G__60513 = ctx;
var G__60514 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60513,G__60514) : sci.impl.interpreter.interpret.call(null,G__60513,G__60514));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg60282 = (function (){var G__60515 = ctx;
var G__60516 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60515,G__60516) : sci.impl.interpreter.interpret.call(null,G__60515,G__60516));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg60283 = (function (){var G__60517 = ctx;
var G__60518 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60517,G__60518) : sci.impl.interpreter.interpret.call(null,G__60517,G__60518));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg60284 = (function (){var G__60519 = ctx;
var G__60520 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60519,G__60520) : sci.impl.interpreter.interpret.call(null,G__60519,G__60520));
})();
var args__$9 = cljs.core.rest(args__$8);
return (f.cljs$core$IFn$_invoke$arity$9 ? f.cljs$core$IFn$_invoke$arity$9(arg60276,arg60277,arg60278,arg60279,arg60280,arg60281,arg60282,arg60283,arg60284) : f.call(null,arg60276,arg60277,arg60278,arg60279,arg60280,arg60281,arg60282,arg60283,arg60284));

break;
case (10):
var arg60285 = (function (){var G__60521 = ctx;
var G__60522 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60521,G__60522) : sci.impl.interpreter.interpret.call(null,G__60521,G__60522));
})();
var args__$1 = cljs.core.rest(args);
var arg60286 = (function (){var G__60523 = ctx;
var G__60524 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60523,G__60524) : sci.impl.interpreter.interpret.call(null,G__60523,G__60524));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg60287 = (function (){var G__60525 = ctx;
var G__60526 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60525,G__60526) : sci.impl.interpreter.interpret.call(null,G__60525,G__60526));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg60288 = (function (){var G__60527 = ctx;
var G__60528 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60527,G__60528) : sci.impl.interpreter.interpret.call(null,G__60527,G__60528));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg60289 = (function (){var G__60529 = ctx;
var G__60530 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60529,G__60530) : sci.impl.interpreter.interpret.call(null,G__60529,G__60530));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg60290 = (function (){var G__60531 = ctx;
var G__60532 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60531,G__60532) : sci.impl.interpreter.interpret.call(null,G__60531,G__60532));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg60291 = (function (){var G__60533 = ctx;
var G__60534 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60533,G__60534) : sci.impl.interpreter.interpret.call(null,G__60533,G__60534));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg60292 = (function (){var G__60535 = ctx;
var G__60536 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60535,G__60536) : sci.impl.interpreter.interpret.call(null,G__60535,G__60536));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg60293 = (function (){var G__60537 = ctx;
var G__60538 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60537,G__60538) : sci.impl.interpreter.interpret.call(null,G__60537,G__60538));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg60294 = (function (){var G__60539 = ctx;
var G__60540 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60539,G__60540) : sci.impl.interpreter.interpret.call(null,G__60539,G__60540));
})();
var args__$10 = cljs.core.rest(args__$9);
return (f.cljs$core$IFn$_invoke$arity$10 ? f.cljs$core$IFn$_invoke$arity$10(arg60285,arg60286,arg60287,arg60288,arg60289,arg60290,arg60291,arg60292,arg60293,arg60294) : f.call(null,arg60285,arg60286,arg60287,arg60288,arg60289,arg60290,arg60291,arg60292,arg60293,arg60294));

break;
case (11):
var arg60295 = (function (){var G__60541 = ctx;
var G__60542 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60541,G__60542) : sci.impl.interpreter.interpret.call(null,G__60541,G__60542));
})();
var args__$1 = cljs.core.rest(args);
var arg60296 = (function (){var G__60543 = ctx;
var G__60544 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60543,G__60544) : sci.impl.interpreter.interpret.call(null,G__60543,G__60544));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg60297 = (function (){var G__60545 = ctx;
var G__60546 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60545,G__60546) : sci.impl.interpreter.interpret.call(null,G__60545,G__60546));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg60298 = (function (){var G__60547 = ctx;
var G__60548 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60547,G__60548) : sci.impl.interpreter.interpret.call(null,G__60547,G__60548));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg60299 = (function (){var G__60549 = ctx;
var G__60550 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60549,G__60550) : sci.impl.interpreter.interpret.call(null,G__60549,G__60550));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg60300 = (function (){var G__60551 = ctx;
var G__60552 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60551,G__60552) : sci.impl.interpreter.interpret.call(null,G__60551,G__60552));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg60301 = (function (){var G__60553 = ctx;
var G__60554 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60553,G__60554) : sci.impl.interpreter.interpret.call(null,G__60553,G__60554));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg60302 = (function (){var G__60555 = ctx;
var G__60556 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60555,G__60556) : sci.impl.interpreter.interpret.call(null,G__60555,G__60556));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg60303 = (function (){var G__60557 = ctx;
var G__60558 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60557,G__60558) : sci.impl.interpreter.interpret.call(null,G__60557,G__60558));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg60304 = (function (){var G__60559 = ctx;
var G__60560 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60559,G__60560) : sci.impl.interpreter.interpret.call(null,G__60559,G__60560));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg60305 = (function (){var G__60561 = ctx;
var G__60562 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60561,G__60562) : sci.impl.interpreter.interpret.call(null,G__60561,G__60562));
})();
var args__$11 = cljs.core.rest(args__$10);
return (f.cljs$core$IFn$_invoke$arity$11 ? f.cljs$core$IFn$_invoke$arity$11(arg60295,arg60296,arg60297,arg60298,arg60299,arg60300,arg60301,arg60302,arg60303,arg60304,arg60305) : f.call(null,arg60295,arg60296,arg60297,arg60298,arg60299,arg60300,arg60301,arg60302,arg60303,arg60304,arg60305));

break;
case (12):
var arg60306 = (function (){var G__60563 = ctx;
var G__60564 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60563,G__60564) : sci.impl.interpreter.interpret.call(null,G__60563,G__60564));
})();
var args__$1 = cljs.core.rest(args);
var arg60307 = (function (){var G__60565 = ctx;
var G__60566 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60565,G__60566) : sci.impl.interpreter.interpret.call(null,G__60565,G__60566));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg60308 = (function (){var G__60567 = ctx;
var G__60568 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60567,G__60568) : sci.impl.interpreter.interpret.call(null,G__60567,G__60568));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg60309 = (function (){var G__60569 = ctx;
var G__60570 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60569,G__60570) : sci.impl.interpreter.interpret.call(null,G__60569,G__60570));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg60310 = (function (){var G__60571 = ctx;
var G__60572 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60571,G__60572) : sci.impl.interpreter.interpret.call(null,G__60571,G__60572));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg60311 = (function (){var G__60573 = ctx;
var G__60574 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60573,G__60574) : sci.impl.interpreter.interpret.call(null,G__60573,G__60574));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg60312 = (function (){var G__60575 = ctx;
var G__60576 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60575,G__60576) : sci.impl.interpreter.interpret.call(null,G__60575,G__60576));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg60313 = (function (){var G__60577 = ctx;
var G__60578 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60577,G__60578) : sci.impl.interpreter.interpret.call(null,G__60577,G__60578));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg60314 = (function (){var G__60579 = ctx;
var G__60580 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60579,G__60580) : sci.impl.interpreter.interpret.call(null,G__60579,G__60580));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg60315 = (function (){var G__60581 = ctx;
var G__60582 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60581,G__60582) : sci.impl.interpreter.interpret.call(null,G__60581,G__60582));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg60316 = (function (){var G__60583 = ctx;
var G__60584 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60583,G__60584) : sci.impl.interpreter.interpret.call(null,G__60583,G__60584));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg60317 = (function (){var G__60585 = ctx;
var G__60586 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60585,G__60586) : sci.impl.interpreter.interpret.call(null,G__60585,G__60586));
})();
var args__$12 = cljs.core.rest(args__$11);
return (f.cljs$core$IFn$_invoke$arity$12 ? f.cljs$core$IFn$_invoke$arity$12(arg60306,arg60307,arg60308,arg60309,arg60310,arg60311,arg60312,arg60313,arg60314,arg60315,arg60316,arg60317) : f.call(null,arg60306,arg60307,arg60308,arg60309,arg60310,arg60311,arg60312,arg60313,arg60314,arg60315,arg60316,arg60317));

break;
case (13):
var arg60318 = (function (){var G__60587 = ctx;
var G__60588 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60587,G__60588) : sci.impl.interpreter.interpret.call(null,G__60587,G__60588));
})();
var args__$1 = cljs.core.rest(args);
var arg60319 = (function (){var G__60589 = ctx;
var G__60590 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60589,G__60590) : sci.impl.interpreter.interpret.call(null,G__60589,G__60590));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg60320 = (function (){var G__60591 = ctx;
var G__60592 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60591,G__60592) : sci.impl.interpreter.interpret.call(null,G__60591,G__60592));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg60321 = (function (){var G__60593 = ctx;
var G__60594 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60593,G__60594) : sci.impl.interpreter.interpret.call(null,G__60593,G__60594));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg60322 = (function (){var G__60595 = ctx;
var G__60596 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60595,G__60596) : sci.impl.interpreter.interpret.call(null,G__60595,G__60596));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg60323 = (function (){var G__60597 = ctx;
var G__60598 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60597,G__60598) : sci.impl.interpreter.interpret.call(null,G__60597,G__60598));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg60324 = (function (){var G__60599 = ctx;
var G__60600 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60599,G__60600) : sci.impl.interpreter.interpret.call(null,G__60599,G__60600));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg60325 = (function (){var G__60601 = ctx;
var G__60602 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60601,G__60602) : sci.impl.interpreter.interpret.call(null,G__60601,G__60602));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg60326 = (function (){var G__60603 = ctx;
var G__60604 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60603,G__60604) : sci.impl.interpreter.interpret.call(null,G__60603,G__60604));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg60327 = (function (){var G__60605 = ctx;
var G__60606 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60605,G__60606) : sci.impl.interpreter.interpret.call(null,G__60605,G__60606));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg60328 = (function (){var G__60607 = ctx;
var G__60608 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60607,G__60608) : sci.impl.interpreter.interpret.call(null,G__60607,G__60608));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg60329 = (function (){var G__60609 = ctx;
var G__60610 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60609,G__60610) : sci.impl.interpreter.interpret.call(null,G__60609,G__60610));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg60330 = (function (){var G__60611 = ctx;
var G__60612 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60611,G__60612) : sci.impl.interpreter.interpret.call(null,G__60611,G__60612));
})();
var args__$13 = cljs.core.rest(args__$12);
return (f.cljs$core$IFn$_invoke$arity$13 ? f.cljs$core$IFn$_invoke$arity$13(arg60318,arg60319,arg60320,arg60321,arg60322,arg60323,arg60324,arg60325,arg60326,arg60327,arg60328,arg60329,arg60330) : f.call(null,arg60318,arg60319,arg60320,arg60321,arg60322,arg60323,arg60324,arg60325,arg60326,arg60327,arg60328,arg60329,arg60330));

break;
case (14):
var arg60331 = (function (){var G__60613 = ctx;
var G__60614 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60613,G__60614) : sci.impl.interpreter.interpret.call(null,G__60613,G__60614));
})();
var args__$1 = cljs.core.rest(args);
var arg60332 = (function (){var G__60615 = ctx;
var G__60616 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60615,G__60616) : sci.impl.interpreter.interpret.call(null,G__60615,G__60616));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg60333 = (function (){var G__60617 = ctx;
var G__60618 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60617,G__60618) : sci.impl.interpreter.interpret.call(null,G__60617,G__60618));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg60334 = (function (){var G__60619 = ctx;
var G__60620 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60619,G__60620) : sci.impl.interpreter.interpret.call(null,G__60619,G__60620));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg60335 = (function (){var G__60621 = ctx;
var G__60622 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60621,G__60622) : sci.impl.interpreter.interpret.call(null,G__60621,G__60622));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg60336 = (function (){var G__60623 = ctx;
var G__60624 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60623,G__60624) : sci.impl.interpreter.interpret.call(null,G__60623,G__60624));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg60337 = (function (){var G__60625 = ctx;
var G__60626 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60625,G__60626) : sci.impl.interpreter.interpret.call(null,G__60625,G__60626));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg60338 = (function (){var G__60627 = ctx;
var G__60628 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60627,G__60628) : sci.impl.interpreter.interpret.call(null,G__60627,G__60628));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg60339 = (function (){var G__60629 = ctx;
var G__60630 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60629,G__60630) : sci.impl.interpreter.interpret.call(null,G__60629,G__60630));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg60340 = (function (){var G__60631 = ctx;
var G__60632 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60631,G__60632) : sci.impl.interpreter.interpret.call(null,G__60631,G__60632));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg60341 = (function (){var G__60633 = ctx;
var G__60634 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60633,G__60634) : sci.impl.interpreter.interpret.call(null,G__60633,G__60634));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg60342 = (function (){var G__60635 = ctx;
var G__60636 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60635,G__60636) : sci.impl.interpreter.interpret.call(null,G__60635,G__60636));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg60343 = (function (){var G__60637 = ctx;
var G__60638 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60637,G__60638) : sci.impl.interpreter.interpret.call(null,G__60637,G__60638));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg60344 = (function (){var G__60639 = ctx;
var G__60640 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60639,G__60640) : sci.impl.interpreter.interpret.call(null,G__60639,G__60640));
})();
var args__$14 = cljs.core.rest(args__$13);
return (f.cljs$core$IFn$_invoke$arity$14 ? f.cljs$core$IFn$_invoke$arity$14(arg60331,arg60332,arg60333,arg60334,arg60335,arg60336,arg60337,arg60338,arg60339,arg60340,arg60341,arg60342,arg60343,arg60344) : f.call(null,arg60331,arg60332,arg60333,arg60334,arg60335,arg60336,arg60337,arg60338,arg60339,arg60340,arg60341,arg60342,arg60343,arg60344));

break;
case (15):
var arg60345 = (function (){var G__60641 = ctx;
var G__60642 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60641,G__60642) : sci.impl.interpreter.interpret.call(null,G__60641,G__60642));
})();
var args__$1 = cljs.core.rest(args);
var arg60346 = (function (){var G__60643 = ctx;
var G__60644 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60643,G__60644) : sci.impl.interpreter.interpret.call(null,G__60643,G__60644));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg60347 = (function (){var G__60645 = ctx;
var G__60646 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60645,G__60646) : sci.impl.interpreter.interpret.call(null,G__60645,G__60646));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg60348 = (function (){var G__60647 = ctx;
var G__60648 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60647,G__60648) : sci.impl.interpreter.interpret.call(null,G__60647,G__60648));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg60349 = (function (){var G__60649 = ctx;
var G__60650 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60649,G__60650) : sci.impl.interpreter.interpret.call(null,G__60649,G__60650));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg60350 = (function (){var G__60651 = ctx;
var G__60652 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60651,G__60652) : sci.impl.interpreter.interpret.call(null,G__60651,G__60652));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg60351 = (function (){var G__60653 = ctx;
var G__60654 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60653,G__60654) : sci.impl.interpreter.interpret.call(null,G__60653,G__60654));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg60352 = (function (){var G__60655 = ctx;
var G__60656 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60655,G__60656) : sci.impl.interpreter.interpret.call(null,G__60655,G__60656));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg60353 = (function (){var G__60657 = ctx;
var G__60658 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60657,G__60658) : sci.impl.interpreter.interpret.call(null,G__60657,G__60658));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg60354 = (function (){var G__60659 = ctx;
var G__60660 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60659,G__60660) : sci.impl.interpreter.interpret.call(null,G__60659,G__60660));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg60355 = (function (){var G__60661 = ctx;
var G__60662 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60661,G__60662) : sci.impl.interpreter.interpret.call(null,G__60661,G__60662));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg60356 = (function (){var G__60663 = ctx;
var G__60664 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60663,G__60664) : sci.impl.interpreter.interpret.call(null,G__60663,G__60664));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg60357 = (function (){var G__60665 = ctx;
var G__60666 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60665,G__60666) : sci.impl.interpreter.interpret.call(null,G__60665,G__60666));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg60358 = (function (){var G__60667 = ctx;
var G__60668 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60667,G__60668) : sci.impl.interpreter.interpret.call(null,G__60667,G__60668));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg60359 = (function (){var G__60669 = ctx;
var G__60670 = cljs.core.first(args__$14);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60669,G__60670) : sci.impl.interpreter.interpret.call(null,G__60669,G__60670));
})();
var args__$15 = cljs.core.rest(args__$14);
return (f.cljs$core$IFn$_invoke$arity$15 ? f.cljs$core$IFn$_invoke$arity$15(arg60345,arg60346,arg60347,arg60348,arg60349,arg60350,arg60351,arg60352,arg60353,arg60354,arg60355,arg60356,arg60357,arg60358,arg60359) : f.call(null,arg60345,arg60346,arg60347,arg60348,arg60349,arg60350,arg60351,arg60352,arg60353,arg60354,arg60355,arg60356,arg60357,arg60358,arg60359));

break;
case (16):
var arg60360 = (function (){var G__60671 = ctx;
var G__60672 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60671,G__60672) : sci.impl.interpreter.interpret.call(null,G__60671,G__60672));
})();
var args__$1 = cljs.core.rest(args);
var arg60361 = (function (){var G__60673 = ctx;
var G__60674 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60673,G__60674) : sci.impl.interpreter.interpret.call(null,G__60673,G__60674));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg60362 = (function (){var G__60675 = ctx;
var G__60676 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60675,G__60676) : sci.impl.interpreter.interpret.call(null,G__60675,G__60676));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg60363 = (function (){var G__60677 = ctx;
var G__60678 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60677,G__60678) : sci.impl.interpreter.interpret.call(null,G__60677,G__60678));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg60364 = (function (){var G__60679 = ctx;
var G__60680 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60679,G__60680) : sci.impl.interpreter.interpret.call(null,G__60679,G__60680));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg60365 = (function (){var G__60681 = ctx;
var G__60682 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60681,G__60682) : sci.impl.interpreter.interpret.call(null,G__60681,G__60682));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg60366 = (function (){var G__60683 = ctx;
var G__60684 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60683,G__60684) : sci.impl.interpreter.interpret.call(null,G__60683,G__60684));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg60367 = (function (){var G__60685 = ctx;
var G__60686 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60685,G__60686) : sci.impl.interpreter.interpret.call(null,G__60685,G__60686));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg60368 = (function (){var G__60687 = ctx;
var G__60688 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60687,G__60688) : sci.impl.interpreter.interpret.call(null,G__60687,G__60688));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg60369 = (function (){var G__60689 = ctx;
var G__60690 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60689,G__60690) : sci.impl.interpreter.interpret.call(null,G__60689,G__60690));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg60370 = (function (){var G__60691 = ctx;
var G__60692 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60691,G__60692) : sci.impl.interpreter.interpret.call(null,G__60691,G__60692));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg60371 = (function (){var G__60693 = ctx;
var G__60694 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60693,G__60694) : sci.impl.interpreter.interpret.call(null,G__60693,G__60694));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg60372 = (function (){var G__60695 = ctx;
var G__60696 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60695,G__60696) : sci.impl.interpreter.interpret.call(null,G__60695,G__60696));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg60373 = (function (){var G__60697 = ctx;
var G__60698 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60697,G__60698) : sci.impl.interpreter.interpret.call(null,G__60697,G__60698));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg60374 = (function (){var G__60699 = ctx;
var G__60700 = cljs.core.first(args__$14);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60699,G__60700) : sci.impl.interpreter.interpret.call(null,G__60699,G__60700));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg60375 = (function (){var G__60701 = ctx;
var G__60702 = cljs.core.first(args__$15);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60701,G__60702) : sci.impl.interpreter.interpret.call(null,G__60701,G__60702));
})();
var args__$16 = cljs.core.rest(args__$15);
return (f.cljs$core$IFn$_invoke$arity$16 ? f.cljs$core$IFn$_invoke$arity$16(arg60360,arg60361,arg60362,arg60363,arg60364,arg60365,arg60366,arg60367,arg60368,arg60369,arg60370,arg60371,arg60372,arg60373,arg60374,arg60375) : f.call(null,arg60360,arg60361,arg60362,arg60363,arg60364,arg60365,arg60366,arg60367,arg60368,arg60369,arg60370,arg60371,arg60372,arg60373,arg60374,arg60375));

break;
case (17):
var arg60376 = (function (){var G__60703 = ctx;
var G__60704 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60703,G__60704) : sci.impl.interpreter.interpret.call(null,G__60703,G__60704));
})();
var args__$1 = cljs.core.rest(args);
var arg60377 = (function (){var G__60705 = ctx;
var G__60706 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60705,G__60706) : sci.impl.interpreter.interpret.call(null,G__60705,G__60706));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg60378 = (function (){var G__60707 = ctx;
var G__60708 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60707,G__60708) : sci.impl.interpreter.interpret.call(null,G__60707,G__60708));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg60379 = (function (){var G__60709 = ctx;
var G__60710 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60709,G__60710) : sci.impl.interpreter.interpret.call(null,G__60709,G__60710));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg60380 = (function (){var G__60711 = ctx;
var G__60712 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60711,G__60712) : sci.impl.interpreter.interpret.call(null,G__60711,G__60712));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg60381 = (function (){var G__60713 = ctx;
var G__60714 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60713,G__60714) : sci.impl.interpreter.interpret.call(null,G__60713,G__60714));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg60382 = (function (){var G__60715 = ctx;
var G__60716 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60715,G__60716) : sci.impl.interpreter.interpret.call(null,G__60715,G__60716));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg60383 = (function (){var G__60717 = ctx;
var G__60718 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60717,G__60718) : sci.impl.interpreter.interpret.call(null,G__60717,G__60718));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg60384 = (function (){var G__60719 = ctx;
var G__60720 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60719,G__60720) : sci.impl.interpreter.interpret.call(null,G__60719,G__60720));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg60385 = (function (){var G__60721 = ctx;
var G__60722 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60721,G__60722) : sci.impl.interpreter.interpret.call(null,G__60721,G__60722));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg60386 = (function (){var G__60723 = ctx;
var G__60724 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60723,G__60724) : sci.impl.interpreter.interpret.call(null,G__60723,G__60724));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg60387 = (function (){var G__60725 = ctx;
var G__60726 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60725,G__60726) : sci.impl.interpreter.interpret.call(null,G__60725,G__60726));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg60388 = (function (){var G__60727 = ctx;
var G__60728 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60727,G__60728) : sci.impl.interpreter.interpret.call(null,G__60727,G__60728));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg60389 = (function (){var G__60729 = ctx;
var G__60730 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60729,G__60730) : sci.impl.interpreter.interpret.call(null,G__60729,G__60730));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg60390 = (function (){var G__60731 = ctx;
var G__60732 = cljs.core.first(args__$14);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60731,G__60732) : sci.impl.interpreter.interpret.call(null,G__60731,G__60732));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg60391 = (function (){var G__60733 = ctx;
var G__60734 = cljs.core.first(args__$15);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60733,G__60734) : sci.impl.interpreter.interpret.call(null,G__60733,G__60734));
})();
var args__$16 = cljs.core.rest(args__$15);
var arg60392 = (function (){var G__60735 = ctx;
var G__60736 = cljs.core.first(args__$16);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60735,G__60736) : sci.impl.interpreter.interpret.call(null,G__60735,G__60736));
})();
var args__$17 = cljs.core.rest(args__$16);
return (f.cljs$core$IFn$_invoke$arity$17 ? f.cljs$core$IFn$_invoke$arity$17(arg60376,arg60377,arg60378,arg60379,arg60380,arg60381,arg60382,arg60383,arg60384,arg60385,arg60386,arg60387,arg60388,arg60389,arg60390,arg60391,arg60392) : f.call(null,arg60376,arg60377,arg60378,arg60379,arg60380,arg60381,arg60382,arg60383,arg60384,arg60385,arg60386,arg60387,arg60388,arg60389,arg60390,arg60391,arg60392));

break;
case (18):
var arg60393 = (function (){var G__60737 = ctx;
var G__60738 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60737,G__60738) : sci.impl.interpreter.interpret.call(null,G__60737,G__60738));
})();
var args__$1 = cljs.core.rest(args);
var arg60394 = (function (){var G__60739 = ctx;
var G__60740 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60739,G__60740) : sci.impl.interpreter.interpret.call(null,G__60739,G__60740));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg60395 = (function (){var G__60741 = ctx;
var G__60742 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60741,G__60742) : sci.impl.interpreter.interpret.call(null,G__60741,G__60742));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg60396 = (function (){var G__60743 = ctx;
var G__60744 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60743,G__60744) : sci.impl.interpreter.interpret.call(null,G__60743,G__60744));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg60397 = (function (){var G__60745 = ctx;
var G__60746 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60745,G__60746) : sci.impl.interpreter.interpret.call(null,G__60745,G__60746));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg60398 = (function (){var G__60747 = ctx;
var G__60748 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60747,G__60748) : sci.impl.interpreter.interpret.call(null,G__60747,G__60748));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg60399 = (function (){var G__60749 = ctx;
var G__60750 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60749,G__60750) : sci.impl.interpreter.interpret.call(null,G__60749,G__60750));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg60400 = (function (){var G__60751 = ctx;
var G__60752 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60751,G__60752) : sci.impl.interpreter.interpret.call(null,G__60751,G__60752));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg60401 = (function (){var G__60753 = ctx;
var G__60754 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60753,G__60754) : sci.impl.interpreter.interpret.call(null,G__60753,G__60754));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg60402 = (function (){var G__60755 = ctx;
var G__60756 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60755,G__60756) : sci.impl.interpreter.interpret.call(null,G__60755,G__60756));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg60403 = (function (){var G__60757 = ctx;
var G__60758 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60757,G__60758) : sci.impl.interpreter.interpret.call(null,G__60757,G__60758));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg60404 = (function (){var G__60759 = ctx;
var G__60760 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60759,G__60760) : sci.impl.interpreter.interpret.call(null,G__60759,G__60760));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg60405 = (function (){var G__60761 = ctx;
var G__60762 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60761,G__60762) : sci.impl.interpreter.interpret.call(null,G__60761,G__60762));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg60406 = (function (){var G__60763 = ctx;
var G__60764 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60763,G__60764) : sci.impl.interpreter.interpret.call(null,G__60763,G__60764));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg60407 = (function (){var G__60765 = ctx;
var G__60766 = cljs.core.first(args__$14);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60765,G__60766) : sci.impl.interpreter.interpret.call(null,G__60765,G__60766));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg60408 = (function (){var G__60767 = ctx;
var G__60768 = cljs.core.first(args__$15);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60767,G__60768) : sci.impl.interpreter.interpret.call(null,G__60767,G__60768));
})();
var args__$16 = cljs.core.rest(args__$15);
var arg60409 = (function (){var G__60769 = ctx;
var G__60770 = cljs.core.first(args__$16);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60769,G__60770) : sci.impl.interpreter.interpret.call(null,G__60769,G__60770));
})();
var args__$17 = cljs.core.rest(args__$16);
var arg60410 = (function (){var G__60771 = ctx;
var G__60772 = cljs.core.first(args__$17);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60771,G__60772) : sci.impl.interpreter.interpret.call(null,G__60771,G__60772));
})();
var args__$18 = cljs.core.rest(args__$17);
return (f.cljs$core$IFn$_invoke$arity$18 ? f.cljs$core$IFn$_invoke$arity$18(arg60393,arg60394,arg60395,arg60396,arg60397,arg60398,arg60399,arg60400,arg60401,arg60402,arg60403,arg60404,arg60405,arg60406,arg60407,arg60408,arg60409,arg60410) : f.call(null,arg60393,arg60394,arg60395,arg60396,arg60397,arg60398,arg60399,arg60400,arg60401,arg60402,arg60403,arg60404,arg60405,arg60406,arg60407,arg60408,arg60409,arg60410));

break;
case (19):
var arg60411 = (function (){var G__60773 = ctx;
var G__60774 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60773,G__60774) : sci.impl.interpreter.interpret.call(null,G__60773,G__60774));
})();
var args__$1 = cljs.core.rest(args);
var arg60412 = (function (){var G__60775 = ctx;
var G__60776 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60775,G__60776) : sci.impl.interpreter.interpret.call(null,G__60775,G__60776));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg60413 = (function (){var G__60777 = ctx;
var G__60778 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60777,G__60778) : sci.impl.interpreter.interpret.call(null,G__60777,G__60778));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg60414 = (function (){var G__60779 = ctx;
var G__60780 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60779,G__60780) : sci.impl.interpreter.interpret.call(null,G__60779,G__60780));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg60415 = (function (){var G__60781 = ctx;
var G__60782 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60781,G__60782) : sci.impl.interpreter.interpret.call(null,G__60781,G__60782));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg60416 = (function (){var G__60783 = ctx;
var G__60784 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60783,G__60784) : sci.impl.interpreter.interpret.call(null,G__60783,G__60784));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg60417 = (function (){var G__60785 = ctx;
var G__60786 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60785,G__60786) : sci.impl.interpreter.interpret.call(null,G__60785,G__60786));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg60418 = (function (){var G__60787 = ctx;
var G__60788 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60787,G__60788) : sci.impl.interpreter.interpret.call(null,G__60787,G__60788));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg60419 = (function (){var G__60789 = ctx;
var G__60790 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60789,G__60790) : sci.impl.interpreter.interpret.call(null,G__60789,G__60790));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg60420 = (function (){var G__60791 = ctx;
var G__60792 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60791,G__60792) : sci.impl.interpreter.interpret.call(null,G__60791,G__60792));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg60421 = (function (){var G__60793 = ctx;
var G__60794 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60793,G__60794) : sci.impl.interpreter.interpret.call(null,G__60793,G__60794));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg60422 = (function (){var G__60795 = ctx;
var G__60796 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60795,G__60796) : sci.impl.interpreter.interpret.call(null,G__60795,G__60796));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg60423 = (function (){var G__60797 = ctx;
var G__60798 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60797,G__60798) : sci.impl.interpreter.interpret.call(null,G__60797,G__60798));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg60424 = (function (){var G__60799 = ctx;
var G__60800 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60799,G__60800) : sci.impl.interpreter.interpret.call(null,G__60799,G__60800));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg60425 = (function (){var G__60801 = ctx;
var G__60802 = cljs.core.first(args__$14);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60801,G__60802) : sci.impl.interpreter.interpret.call(null,G__60801,G__60802));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg60426 = (function (){var G__60803 = ctx;
var G__60804 = cljs.core.first(args__$15);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60803,G__60804) : sci.impl.interpreter.interpret.call(null,G__60803,G__60804));
})();
var args__$16 = cljs.core.rest(args__$15);
var arg60427 = (function (){var G__60805 = ctx;
var G__60806 = cljs.core.first(args__$16);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60805,G__60806) : sci.impl.interpreter.interpret.call(null,G__60805,G__60806));
})();
var args__$17 = cljs.core.rest(args__$16);
var arg60428 = (function (){var G__60807 = ctx;
var G__60808 = cljs.core.first(args__$17);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60807,G__60808) : sci.impl.interpreter.interpret.call(null,G__60807,G__60808));
})();
var args__$18 = cljs.core.rest(args__$17);
var arg60429 = (function (){var G__60809 = ctx;
var G__60810 = cljs.core.first(args__$18);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60809,G__60810) : sci.impl.interpreter.interpret.call(null,G__60809,G__60810));
})();
var args__$19 = cljs.core.rest(args__$18);
return (f.cljs$core$IFn$_invoke$arity$19 ? f.cljs$core$IFn$_invoke$arity$19(arg60411,arg60412,arg60413,arg60414,arg60415,arg60416,arg60417,arg60418,arg60419,arg60420,arg60421,arg60422,arg60423,arg60424,arg60425,arg60426,arg60427,arg60428,arg60429) : f.call(null,arg60411,arg60412,arg60413,arg60414,arg60415,arg60416,arg60417,arg60418,arg60419,arg60420,arg60421,arg60422,arg60423,arg60424,arg60425,arg60426,arg60427,arg60428,arg60429));

break;
default:
var args__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__4373_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__4373_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__4373_SHARP_));
}),args);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args__$1);

}
});
sci.impl.interpreter.eval_special_call = (function sci$impl$interpreter$eval_special_call(ctx,f_sym,expr){
var G__60811 = sci.impl.utils.strip_core_ns(f_sym);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,".",".",1975675962,null),G__60811)){
if(cljs.core.truth_(ctx.get(new cljs.core.Keyword(null,"dry-run","dry-run",-1102788647)))){
return null;
} else {
return sci.impl.interpreter.eval_instance_method_invocation(ctx,expr);
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"and","and",668631710,null),G__60811)){
return sci.impl.interpreter.eval_and(ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"case","case",-1510733573,null),G__60811)){
return sci.impl.interpreter.eval_case(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"if","if",1181717262,null),G__60811)){
return sci.impl.interpreter.eval_if(ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"do","do",1686842252,null),G__60811)){
return sci.impl.interpreter.eval_do(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"macroexpand","macroexpand",1509933344,null),G__60811)){
return sci.impl.interpreter.macroexpand(ctx,(function (){var G__60812 = ctx;
var G__60813 = cljs.core.second(expr);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60812,G__60813) : sci.impl.interpreter.interpret.call(null,G__60812,G__60813));
})());
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"def","def",597100991,null),G__60811)){
return sci.impl.interpreter.eval_def(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"let","let",358118826,null),G__60811)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(sci.impl.interpreter.eval_let,ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"in-ns","in-ns",-2089468466,null),G__60811)){
return sci.impl.interpreter.eval_in_ns(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"use","use",-205850897,null),G__60811)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(sci.impl.interpreter.eval_use,ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"set!","set!",250714521,null),G__60811)){
return sci.impl.interpreter.eval_set_BANG_(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"recur","recur",1202958259,null),G__60811)){
return sci.impl.interpreter.fn_call(ctx,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(sci.impl.fns.__GT_Recur,cljs.core.vector),cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"require","require",1172530194,null),G__60811)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(sci.impl.interpreter.eval_require,ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"new","new",-444906321,null),G__60811)){
if(cljs.core.truth_(ctx.get(new cljs.core.Keyword(null,"dry-run","dry-run",-1102788647)))){
return null;
} else {
return sci.impl.interpreter.eval_constructor_invocation(ctx,expr);
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"macroexpand-1","macroexpand-1",659241329,null),G__60811)){
return sci.impl.interpreter.macroexpand_1(ctx,(function (){var G__60814 = ctx;
var G__60815 = cljs.core.second(expr);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60814,G__60815) : sci.impl.interpreter.interpret.call(null,G__60814,G__60815));
})());
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"refer","refer",676235974,null),G__60811)){
return sci.impl.interpreter.eval_refer(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"lazy-seq","lazy-seq",489632906,null),G__60811)){
return (new cljs.core.LazySeq(null,(function (){var G__60816 = ctx;
var G__60817 = cljs.core.second(expr);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60816,G__60817) : sci.impl.interpreter.interpret.call(null,G__60816,G__60817));
})(),null,null));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"throw","throw",595905694,null),G__60811)){
return sci.impl.interpreter.eval_throw(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"try","try",-1273693247,null),G__60811)){
return sci.impl.interpreter.eval_try(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"resolve","resolve",56086045,null),G__60811)){
return sci.impl.interpreter.eval_resolve(ctx,cljs.core.second(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"or","or",1876275696,null),G__60811)){
return sci.impl.interpreter.eval_or(ctx,cljs.core.rest(expr));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__60811)].join('')));

}
}
}
}
}
}
}
}
}
}
}
}
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
sci.impl.interpreter.eval_call = (function sci$impl$interpreter$eval_call(ctx,expr){
try{var f = cljs.core.first(expr);
var m = cljs.core.meta(f);
var op = (cljs.core.truth_(m)?m.get(new cljs.core.Keyword("sci.impl","op","sci.impl/op",950953978)):null);
if((((f instanceof cljs.core.Symbol)) && (cljs.core.not(op)))){
return sci.impl.interpreter.eval_special_call(ctx,f,expr);
} else {
if(cljs.core.truth_((sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(op,new cljs.core.Keyword(null,"static-access","static-access",-1860919441)) : sci.impl.utils.kw_identical_QMARK_.call(null,op,new cljs.core.Keyword(null,"static-access","static-access",-1860919441))))){
if(cljs.core.truth_(ctx.get(new cljs.core.Keyword(null,"dry-run","dry-run",-1102788647)))){
return null;
} else {
return sci.impl.interpreter.eval_static_method_invocation(ctx,expr);
}
} else {
var f__$1 = (cljs.core.truth_(op)?(sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,f) : sci.impl.interpreter.interpret.call(null,ctx,f)):f);
if(cljs.core.ifn_QMARK_(f__$1)){
if(cljs.core.truth_(ctx.get(new cljs.core.Keyword(null,"dry-run","dry-run",-1102788647)))){
return null;
} else {
return sci.impl.interpreter.fn_call(ctx,f__$1,cljs.core.rest(expr));
}
} else {
throw (new Error(["Cannot call ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([f__$1], 0))," as a function."].join('')));
}

}
}
}catch (e60818){if((e60818 instanceof Error)){
var e = e60818;
return sci.impl.utils.rethrow_with_location_of_node(ctx,e,expr);
} else {
throw e60818;

}
}});
sci.impl.interpreter.fix_meta = (function sci$impl$interpreter$fix_meta(v,old_meta){
if(cljs.core.truth_((((((!((v == null))))?(((((v.cljs$lang$protocol_mask$partition0$ & (262144))) || ((cljs.core.PROTOCOL_SENTINEL === v.cljs$core$IWithMeta$))))?true:false):false))?cljs.core.meta(v):false))){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$2(v,(function (m){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,new cljs.core.Keyword("sci.impl","op","sci.impl/op",950953978)),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(old_meta));
}));
} else {
return v;
}
});
sci.impl.interpreter.interpret = (function sci$impl$interpreter$interpret(ctx,expr){
if((expr instanceof sci.impl.types.EvalVar)){
var v = expr.sci$impl$types$IBox$getVal$arity$1(null);
if(cljs.core.not(sci.impl.vars.isMacro(v))){
return cljs.core.deref(v);
} else {
throw (new Error(["Can't take value of a macro: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v),""].join('')));
}
} else {
var m = cljs.core.meta(expr);
var op = (cljs.core.truth_(m)?m.get(new cljs.core.Keyword("sci.impl","op","sci.impl/op",950953978)):null);
var ret = ((cljs.core.not(op))?expr:(function (){var G__60825 = op;
var G__60825__$1 = (((G__60825 instanceof cljs.core.Keyword))?G__60825.fqn:null);
switch (G__60825__$1) {
case "call":
return sci.impl.interpreter.eval_call(ctx,expr);

break;
case "try":
return sci.impl.interpreter.eval_try(ctx,expr);

break;
case "fn":
return sci.impl.fns.eval_fn(ctx,sci.impl.interpreter.interpret,sci.impl.interpreter.eval_do_STAR_,expr);

break;
case "static-access":
return sci.impl.interop.get_static_field(expr);

break;
case "var-value":
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(expr,(0));

break;
case "deref!":
var v = cljs.core.first(expr);
var v__$1 = ((sci.impl.vars.var_QMARK_(v))?cljs.core.deref(v):v);
var v__$2 = cljs.core.force(v__$1);
return v__$2;

break;
case "resolve-sym":
return sci.impl.interpreter.resolve_symbol(ctx,expr);

break;
case "needs-ctx":
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2(expr,ctx);

break;
default:
if(cljs.core.map_QMARK_(expr)){
return cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__60822_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__60822_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__60822_SHARP_));
}),cljs.core.keys(expr)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__60823_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__60823_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__60823_SHARP_));
}),cljs.core.vals(expr)));
} else {
if(((cljs.core.vector_QMARK_(expr)) || (cljs.core.set_QMARK_(expr)))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.empty(expr),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__60824_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__60824_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__60824_SHARP_));
}),expr));
} else {
throw (new Error(["unexpected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr),", type: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type(expr)),", meta:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(expr))].join('')));

}
}

}
})());
var ret__$1 = (cljs.core.truth_(m)?sci.impl.interpreter.fix_meta(ret,m):ret);
var temp__5733__auto__ = ctx.get(new cljs.core.Keyword(null,"realize-max","realize-max",-1846442543));
if(cljs.core.truth_(temp__5733__auto__)){
var n = temp__5733__auto__;
return sci.impl.max_or_throw.max_or_throw(ret__$1,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"expression","expression",202311876),expr),n);
} else {
return ret__$1;
}
}
});
sci.impl.interpreter.do_QMARK_ = (function sci$impl$interpreter$do_QMARK_(expr){
return ((cljs.core.list_QMARK_(expr)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"do","do",1686842252,null),cljs.core.first(expr))));
});
sci.impl.interpreter.eval_form = (function sci$impl$interpreter$eval_form(ctx,form){
if(sci.impl.interpreter.do_QMARK_(form)){
var exprs = cljs.core.rest(form);
var ret = null;
while(true){
if(cljs.core.seq(exprs)){
var G__60872 = cljs.core.rest(exprs);
var G__60873 = (function (){var G__60828 = ctx;
var G__60829 = cljs.core.first(exprs);
return (sci.impl.interpreter.eval_form.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.eval_form.cljs$core$IFn$_invoke$arity$2(G__60828,G__60829) : sci.impl.interpreter.eval_form.call(null,G__60828,G__60829));
})();
exprs = G__60872;
ret = G__60873;
continue;
} else {
return ret;
}
break;
}
} else {
var analyzed = sci.impl.analyzer.analyze(ctx,form);
var ret = sci.impl.interpreter.interpret(ctx,analyzed);
return ret;
}
});
cljs.core.vreset_BANG_(sci.impl.utils.eval_form_state,sci.impl.interpreter.eval_form);
sci.impl.interpreter.eval_string_STAR_ = (function sci$impl$interpreter$eval_string_STAR_(ctx,s){
sci.impl.vars.push_thread_bindings(cljs.core.PersistentArrayMap.createAsIfByAssoc([sci.impl.vars.current_ns,cljs.core.deref(sci.impl.vars.current_ns)]));

try{var reader = cljs.tools.reader.reader_types.indexing_push_back_reader.cljs$core$IFn$_invoke$arity$1(cljs.tools.reader.reader_types.string_push_back_reader.cljs$core$IFn$_invoke$arity$1(s));
var ret = null;
while(true){
var expr = sci.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$2(ctx,reader);
if(cljs.core.truth_((sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("edamame.impl.parser","eof","edamame.impl.parser/eof",720552006),expr) : sci.impl.utils.kw_identical_QMARK_.call(null,new cljs.core.Keyword("edamame.impl.parser","eof","edamame.impl.parser/eof",720552006),expr)))){
return ret;
} else {
var ret__$1 = sci.impl.interpreter.eval_form(ctx,expr);
var G__60874 = ret__$1;
ret = G__60874;
continue;
}
break;
}
}finally {sci.impl.vars.pop_thread_bindings();
}});
sci.impl.interpreter.eval_string = (function sci$impl$interpreter$eval_string(var_args){
var G__60831 = arguments.length;
switch (G__60831) {
case 1:
return sci.impl.interpreter.eval_string.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sci.impl.interpreter.eval_string.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sci.impl.interpreter.eval_string.cljs$core$IFn$_invoke$arity$1 = (function (s){
return sci.impl.interpreter.eval_string.cljs$core$IFn$_invoke$arity$2(s,null);
}));

(sci.impl.interpreter.eval_string.cljs$core$IFn$_invoke$arity$2 = (function (s,opts){
var init_ctx = sci.impl.opts.init(opts);
var ret = sci.impl.interpreter.eval_string_STAR_(init_ctx,s);
return ret;
}));

(sci.impl.interpreter.eval_string.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=sci.impl.interpreter.js.map
