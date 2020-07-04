goog.provide('sci.impl.interpreter');
goog.require('cljs.core');
goog.require('cljs.tools.reader.reader_types');
goog.require('sci.impl.analyzer');
goog.require('sci.impl.fns');
goog.require('sci.impl.interop');
goog.require('sci.impl.macros');
goog.require('sci.impl.max_or_throw');
goog.require('sci.impl.opts');
goog.require('sci.impl.parser');
goog.require('sci.impl.types');
goog.require('sci.impl.utils');
goog.require('sci.impl.vars');

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
var G__67787 = xs;
args__$2 = G__67787;
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
var G__67788 = xs;
args__$2 = G__67788;
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
var args__4795__auto__ = [];
var len__4789__auto___67789 = arguments.length;
var i__4790__auto___67790 = (0);
while(true){
if((i__4790__auto___67790 < len__4789__auto___67789)){
args__4795__auto__.push((arguments[i__4790__auto___67790]));

var G__67791 = (i__4790__auto___67790 + (1));
i__4790__auto___67790 = G__67791;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((2) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((2)),(0),null)):null);
return sci.impl.interpreter.eval_let.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4796__auto__);
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
var G__67792 = ctx__$2;
var G__67793 = rest_let_bindings;
ctx__$1 = G__67792;
let_bindings__$1 = G__67793;
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
var G__67794 = nexprs;
exprs__$1 = G__67794;
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
(sci.impl.interpreter.eval_let.cljs$lang$applyTo = (function (seq67003){
var G__67004 = cljs.core.first(seq67003);
var seq67003__$1 = cljs.core.next(seq67003);
var G__67005 = cljs.core.first(seq67003__$1);
var seq67003__$2 = cljs.core.next(seq67003__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__67004,G__67005,seq67003__$2);
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
sci.impl.interpreter.eval_def = (function sci$impl$interpreter$eval_def(ctx,p__67009){
var vec__67010 = p__67009;
var _def = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67010,(0),null);
var var_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67010,(1),null);
var _QMARK_docstring = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67010,(2),null);
var _QMARK_init = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67010,(3),null);
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
var v = (cljs.core.truth_((function (){var G__67013 = new cljs.core.Keyword("sci.impl","var.unbound","sci.impl/var.unbound",-1824207647);
var G__67014 = init__$1;
return (sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__67013,G__67014) : sci.impl.utils.kw_identical_QMARK_.call(null,G__67013,G__67014));
})())?(function (){var G__67015 = prev__$1;
cljs.core.alter_meta_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__67015,cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m__$1], 0));

return G__67015;
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
var vec__67019 = libspec;
var seq__67020 = cljs.core.seq(vec__67019);
var first__67021 = cljs.core.first(seq__67020);
var seq__67020__$1 = cljs.core.next(seq__67020);
var lib_name = first__67021;
var opts = seq__67020__$1;
var ret = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"lib-name","lib-name",1158024282),lib_name], null);
var G__67025 = opts;
var vec__67026 = G__67025;
var seq__67027 = cljs.core.seq(vec__67026);
var first__67028 = cljs.core.first(seq__67027);
var seq__67027__$1 = cljs.core.next(seq__67027);
var opt_name = first__67028;
var first__67028__$1 = cljs.core.first(seq__67027__$1);
var seq__67027__$2 = cljs.core.next(seq__67027__$1);
var fst_opt = first__67028__$1;
var rst_opts = seq__67027__$2;
var ret__$1 = ret;
var G__67025__$1 = G__67025;
while(true){
var ret__$2 = ret__$1;
var vec__67033 = G__67025__$1;
var seq__67034 = cljs.core.seq(vec__67033);
var first__67035 = cljs.core.first(seq__67034);
var seq__67034__$1 = cljs.core.next(seq__67034);
var opt_name__$1 = first__67035;
var first__67035__$1 = cljs.core.first(seq__67034__$1);
var seq__67034__$2 = cljs.core.next(seq__67034__$1);
var fst_opt__$1 = first__67035__$1;
var rst_opts__$1 = seq__67034__$2;
if(cljs.core.not(opt_name__$1)){
return ret__$2;
} else {
var G__67036 = opt_name__$1;
var G__67036__$1 = (((G__67036 instanceof cljs.core.Keyword))?G__67036.fqn:null);
switch (G__67036__$1) {
case "as":
var G__67796 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret__$2,new cljs.core.Keyword(null,"as","as",1148689641),fst_opt__$1);
var G__67797 = rst_opts__$1;
ret__$1 = G__67796;
G__67025__$1 = G__67797;
continue;

break;
case "reload":
case "reload-all":
case "verbose":
var G__67798 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret__$2,new cljs.core.Keyword(null,"reload","reload",863702807),true);
var G__67799 = cljs.core.cons(fst_opt__$1,rst_opts__$1);
ret__$1 = G__67798;
G__67025__$1 = G__67799;
continue;

break;
case "refer":
case "rename":
case "exclude":
case "only":
var G__67800 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret__$2,opt_name__$1,fst_opt__$1);
var G__67801 = rst_opts__$1;
ret__$1 = G__67800;
G__67025__$1 = G__67801;
continue;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__67036__$1)].join('')));

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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ns,p__67037){
var vec__67038 = p__67037;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67038,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67038,(1),null);
if(cljs.core.truth_((((k instanceof cljs.core.Symbol))?(function (){var and__4174__auto__ = (include_sym_QMARK_.cljs$core$IFn$_invoke$arity$1 ? include_sym_QMARK_.cljs$core$IFn$_invoke$arity$1(k) : include_sym_QMARK_.call(null,k));
if(cljs.core.truth_(and__4174__auto__)){
return ((cljs.core.not(only__$1)) || (cljs.core.contains_QMARK_(only__$1,k)));
} else {
return and__4174__auto__;
}
})():false))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ns,(rename_sym.cljs$core$IFn$_invoke$arity$1 ? rename_sym.cljs$core$IFn$_invoke$arity$1(k) : rename_sym.call(null,k)),v);
} else {
return ns;
}
}),the_current_ns,the_loaded_ns);
});
sci.impl.interpreter.handle_require_libspec_env = (function sci$impl$interpreter$handle_require_libspec_env(env,use_QMARK_,current_ns,the_loaded_ns,lib_name,p__67044){
var map__67045 = p__67044;
var map__67045__$1 = (((((!((map__67045 == null))))?(((((map__67045.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67045.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67045):map__67045);
var _parsed_libspec = map__67045__$1;
var as = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67045__$1,new cljs.core.Keyword(null,"as","as",1148689641));
var refer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67045__$1,new cljs.core.Keyword(null,"refer","refer",-964295553));
var rename = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67045__$1,new cljs.core.Keyword(null,"rename","rename",1508157613));
var exclude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67045__$1,new cljs.core.Keyword(null,"exclude","exclude",-1230250334));
var only = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67045__$1,new cljs.core.Keyword(null,"only","only",1907811652));
var the_current_ns = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),current_ns], null));
var the_current_ns__$1 = (cljs.core.truth_(as)?cljs.core.assoc_in(the_current_ns,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"aliases","aliases",1346874714),as], null),lib_name):the_current_ns);
var rename_sym = (cljs.core.truth_(rename)?(function (sym){
var or__4185__auto__ = (rename.cljs$core$IFn$_invoke$arity$1 ? rename.cljs$core$IFn$_invoke$arity$1(sym) : rename.call(null,sym));
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return sym;
}
}):cljs.core.identity);
var include_sym_QMARK_ = (cljs.core.truth_(exclude)?(function (){var excludes = cljs.core.set(exclude);
return (function (sym){
return (!(cljs.core.contains_QMARK_(excludes,sym)));
});
})():cljs.core.constantly(true));
var the_current_ns__$2 = (cljs.core.truth_(refer)?(cljs.core.truth_((function (){var or__4185__auto__ = (function (){var G__67052 = new cljs.core.Keyword(null,"all","all",892129742);
var G__67053 = refer;
return (sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__67052,G__67053) : sci.impl.utils.kw_identical_QMARK_.call(null,G__67052,G__67053));
})();
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return use_QMARK_;
}
})())?sci.impl.interpreter.handle_refer_all(the_current_ns__$1,the_loaded_ns,include_sym_QMARK_,rename_sym,null):((cljs.core.sequential_QMARK_(refer))?cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ns,sym){
if(cljs.core.truth_((include_sym_QMARK_.cljs$core$IFn$_invoke$arity$1 ? include_sym_QMARK_.cljs$core$IFn$_invoke$arity$1(sym) : include_sym_QMARK_.call(null,sym)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ns,(rename_sym.cljs$core$IFn$_invoke$arity$1 ? rename_sym.cljs$core$IFn$_invoke$arity$1(sym) : rename_sym.call(null,sym)),(function (){var temp__5733__auto__ = cljs.core.find(the_loaded_ns,sym);
if(cljs.core.truth_(temp__5733__auto__)){
var vec__67057 = temp__5733__auto__;
var _k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67057,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67057,(1),null);
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
var map__67063 = sci.impl.interpreter.parse_libspec(libspec);
var map__67063__$1 = (((((!((map__67063 == null))))?(((((map__67063.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67063.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67063):map__67063);
var parsed_libspec = map__67063__$1;
var lib_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67063__$1,new cljs.core.Keyword(null,"lib-name","lib-name",1158024282));
var reload = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67063__$1,new cljs.core.Keyword(null,"reload","reload",863702807));
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
var temp__5733__auto____$2 = (function (){var G__67065 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),lib_name], null);
return (load_fn.cljs$core$IFn$_invoke$arity$1 ? load_fn.cljs$core$IFn$_invoke$arity$1(G__67065) : load_fn.call(null,G__67065));
})();
if(cljs.core.truth_(temp__5733__auto____$2)){
var map__67066 = temp__5733__auto____$2;
var map__67066__$1 = (((((!((map__67066 == null))))?(((((map__67066.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67066.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67066):map__67066);
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67066__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67066__$1,new cljs.core.Keyword(null,"source","source",-433931539));
try{sci.impl.vars.push_thread_bindings(cljs.core.PersistentArrayMap.createAsIfByAssoc([sci.impl.vars.current_ns,cljs.core.deref(sci.impl.vars.current_ns),sci.impl.vars.current_file,file]));

try{var G__67069_67802 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"bindings","bindings",1271397192),cljs.core.PersistentArrayMap.EMPTY);
var G__67070_67803 = source;
(sci.impl.interpreter.eval_string_STAR_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.eval_string_STAR_.cljs$core$IFn$_invoke$arity$2(G__67069_67802,G__67070_67803) : sci.impl.interpreter.eval_string_STAR_.call(null,G__67069_67802,G__67070_67803));
}finally {sci.impl.vars.pop_thread_bindings();
}}catch (e67068){if((e67068 instanceof Error)){
var e_67804 = e67068;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(env_STAR_,cljs.core.update,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lib_name], 0));

throw e_67804;
} else {
throw e67068;

}
}
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(env_STAR_,(function (env__$1){
var namespaces__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(env__$1,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469));
var the_loaded_ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(namespaces__$1,lib_name);
return sci.impl.interpreter.handle_require_libspec_env(env__$1,use_QMARK_,cnn,the_loaded_ns,lib_name,parsed_libspec);
}));
} else {
var or__4185__auto__ = (cljs.core.truth_(reload)?(function (){var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(namespaces,lib_name);
if(cljs.core.truth_(temp__5735__auto__)){
var the_loaded_ns = temp__5735__auto__;
return cljs.core.reset_BANG_(env_STAR_,sci.impl.interpreter.handle_require_libspec_env(env,use_QMARK_,cnn,the_loaded_ns,lib_name,parsed_libspec));
} else {
return null;
}
})():null);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
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
var args__4795__auto__ = [];
var len__4789__auto___67805 = arguments.length;
var i__4790__auto___67806 = (0);
while(true){
if((i__4790__auto___67806 < len__4789__auto___67805)){
args__4795__auto__.push((arguments[i__4790__auto___67806]));

var G__67807 = (i__4790__auto___67806 + (1));
i__4790__auto___67806 = G__67807;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return sci.impl.interpreter.eval_require.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(sci.impl.interpreter.eval_require.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,args){
var libspecs = cljs.core.PersistentVector.EMPTY;
var current_libspec = null;
var args__$1 = args;
while(true){
if(cljs.core.truth_(args__$1)){
var ret = (function (){var G__67079 = ctx;
var G__67080 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67079,G__67080) : sci.impl.interpreter.interpret.call(null,G__67079,G__67080));
})();
if((ret instanceof cljs.core.Symbol)){
var G__67808 = (function (){var G__67081 = libspecs;
if(cljs.core.truth_(current_libspec)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__67081,current_libspec);
} else {
return G__67081;
}
})();
var G__67809 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ret], null);
var G__67810 = cljs.core.next(args__$1);
libspecs = G__67808;
current_libspec = G__67809;
args__$1 = G__67810;
continue;
} else {
if((ret instanceof cljs.core.Keyword)){
var G__67811 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(libspecs,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(current_libspec,ret));
var G__67812 = null;
var G__67813 = cljs.core.next(args__$1);
libspecs = G__67811;
current_libspec = G__67812;
args__$1 = G__67813;
continue;
} else {
var G__67814 = (function (){var G__67085 = libspecs;
if(cljs.core.truth_(current_libspec)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__67085,current_libspec);
} else {
return G__67085;
}
})();
var G__67815 = ret;
var G__67816 = cljs.core.next(args__$1);
libspecs = G__67814;
current_libspec = G__67815;
args__$1 = G__67816;
continue;

}
}
} else {
var libspecs__$1 = (function (){var G__67086 = libspecs;
if(cljs.core.truth_(current_libspec)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__67086,current_libspec);
} else {
return G__67086;
}
})();
return cljs.core.run_BANG_(((function (libspecs,current_libspec,args__$1,libspecs__$1){
return (function (p1__67071_SHARP_){
return sci.impl.interpreter.handle_require_libspec(ctx,p1__67071_SHARP_);
});})(libspecs,current_libspec,args__$1,libspecs__$1))
,libspecs__$1);
}
break;
}
}));

(sci.impl.interpreter.eval_require.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sci.impl.interpreter.eval_require.cljs$lang$applyTo = (function (seq67072){
var G__67073 = cljs.core.first(seq67072);
var seq67072__$1 = cljs.core.next(seq67072);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__67073,seq67072__$1);
}));

cljs.core.vreset_BANG_(sci.impl.utils.eval_require_state,sci.impl.interpreter.eval_require);
sci.impl.interpreter.eval_use = (function sci$impl$interpreter$eval_use(var_args){
var args__4795__auto__ = [];
var len__4789__auto___67817 = arguments.length;
var i__4790__auto___67818 = (0);
while(true){
if((i__4790__auto___67818 < len__4789__auto___67817)){
args__4795__auto__.push((arguments[i__4790__auto___67818]));

var G__67819 = (i__4790__auto___67818 + (1));
i__4790__auto___67818 = G__67819;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return sci.impl.interpreter.eval_use.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(sci.impl.interpreter.eval_use.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(sci.impl.interpreter.eval_require,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword("sci.impl","use","sci.impl/use",1724565881),true),args);
}));

(sci.impl.interpreter.eval_use.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sci.impl.interpreter.eval_use.cljs$lang$applyTo = (function (seq67087){
var G__67088 = cljs.core.first(seq67087);
var seq67087__$1 = cljs.core.next(seq67087);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__67088,seq67087__$1);
}));

cljs.core.vreset_BANG_(sci.impl.utils.eval_use_state,sci.impl.interpreter.eval_use);
sci.impl.interpreter.eval_case = (function sci$impl$interpreter$eval_case(ctx,p__67093){
var vec__67094 = p__67093;
var _case = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67094,(0),null);
var map__67097 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67094,(1),null);
var map__67097__$1 = (((((!((map__67097 == null))))?(((((map__67097.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67097.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67097):map__67097);
var case_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67097__$1,new cljs.core.Keyword(null,"case-map","case-map",955082964));
var case_val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67097__$1,new cljs.core.Keyword(null,"case-val","case-val",880926521));
var case_default = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67097__$1,new cljs.core.Keyword(null,"case-default","case-default",1140470708));
var v = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,case_val) : sci.impl.interpreter.interpret.call(null,ctx,case_val));
var temp__5733__auto__ = cljs.core.find(case_map,v);
if(cljs.core.truth_(temp__5733__auto__)){
var vec__67099 = temp__5733__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67099,(0),null);
var found = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67099,(1),null);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,found) : sci.impl.interpreter.interpret.call(null,ctx,found));
} else {
if(cljs.core.vector_QMARK_(case_default)){
var G__67102 = ctx;
var G__67103 = cljs.core.second(case_default);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67102,G__67103) : sci.impl.interpreter.interpret.call(null,G__67102,G__67103));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('')));
}
}
});
sci.impl.interpreter.eval_try = (function sci$impl$interpreter$eval_try(ctx,expr){
var map__67104 = new cljs.core.Keyword("sci.impl","try","sci.impl/try",2142624741).cljs$core$IFn$_invoke$arity$1(expr);
var map__67104__$1 = (((((!((map__67104 == null))))?(((((map__67104.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67104.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67104):map__67104);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67104__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var catches = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67104__$1,new cljs.core.Keyword(null,"catches","catches",-1478797617));
var finally$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67104__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
try{var _STAR_in_try_STAR__orig_val__67112 = sci.impl.utils._STAR_in_try_STAR_;
var _STAR_in_try_STAR__temp_val__67113 = true;
(sci.impl.utils._STAR_in_try_STAR_ = _STAR_in_try_STAR__temp_val__67113);

try{return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,body) : sci.impl.interpreter.interpret.call(null,ctx,body));
}finally {(sci.impl.utils._STAR_in_try_STAR_ = _STAR_in_try_STAR__orig_val__67112);
}}catch (e67106){if((e67106 instanceof Error)){
var e = e67106;
var temp__5733__auto__ = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (_,c){
var clazz = new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(c);
if((e instanceof clazz)){
return cljs.core.reduced(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sci.impl.interpreter","try-result","sci.impl.interpreter/try-result",1789456125),(function (){var G__67107 = cljs.core.assoc_in(ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),new cljs.core.Keyword(null,"binding","binding",539932593).cljs$core$IFn$_invoke$arity$1(c)], null),e);
var G__67108 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(c);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67107,G__67108) : sci.impl.interpreter.interpret.call(null,G__67107,G__67108));
})()], null));
} else {
return null;
}
}),null,catches);
if(cljs.core.truth_(temp__5733__auto__)){
var vec__67109 = temp__5733__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67109,(0),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67109,(1),null);
return r;
} else {
return sci.impl.utils.rethrow_with_location_of_node(ctx,e,body);
}
} else {
throw e67106;

}
}finally {(sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,finally$) : sci.impl.interpreter.interpret.call(null,ctx,finally$));
}});
sci.impl.interpreter.eval_throw = (function sci$impl$interpreter$eval_throw(ctx,p__67114){
var vec__67115 = p__67114;
var _throw = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67115,(0),null);
var ex = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67115,(1),null);
var ex__$1 = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,ex) : sci.impl.interpreter.interpret.call(null,ctx,ex));
throw ex__$1;
});
sci.impl.interpreter.eval_static_method_invocation = (function sci$impl$interpreter$eval_static_method_invocation(ctx,expr){
return sci.impl.interop.invoke_static_method(cljs.core.first(expr),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__67118_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__67118_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__67118_SHARP_));
}),cljs.core.rest(expr)));
});
sci.impl.interpreter.eval_constructor_invocation = (function sci$impl$interpreter$eval_constructor_invocation(ctx,p__67120){
var vec__67121 = p__67120;
var _new = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67121,(0),null);
var constructor$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67121,(1),null);
var args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67121,(2),null);
var args__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__67119_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__67119_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__67119_SHARP_));
}),args);
return sci.impl.interop.invoke_constructor(constructor$,args__$1);
});
sci.impl.interpreter.eval_instance_method_invocation = (function sci$impl$interpreter$eval_instance_method_invocation(p__67126,p__67127){
var map__67128 = p__67126;
var map__67128__$1 = (((((!((map__67128 == null))))?(((((map__67128.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67128.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67128):map__67128);
var ctx = map__67128__$1;
var class__GT_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67128__$1,new cljs.core.Keyword(null,"class->opts","class->opts",2061906477));
var vec__67129 = p__67127;
var _dot = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67129,(0),null);
var instance_expr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67129,(1),null);
var method_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67129,(2),null);
var args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67129,(3),null);
var instance_meta = cljs.core.meta(instance_expr);
var tag_class = new cljs.core.Keyword(null,"tag-class","tag-class",714967874).cljs$core$IFn$_invoke$arity$1(instance_meta);
var instance_expr_STAR_ = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,instance_expr) : sci.impl.interpreter.interpret.call(null,ctx,instance_expr));
var instance_class = (function (){var or__4185__auto__ = tag_class;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.type(instance_expr_STAR_);
}
})();
var instance_class_name = instance_class.name;
var instance_class_symbol = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(instance_class_name);
var allowed_QMARK_ = (function (){var or__4185__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(class__GT_opts,new cljs.core.Keyword(null,"allow","allow",-1857325745));
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
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

var args__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__67125_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__67125_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__67125_SHARP_));
}),args);
return sci.impl.interop.invoke_instance_method(instance_expr_STAR_,target_class,method_str,args__$1);
});
sci.impl.interpreter.eval_in_ns = (function sci$impl$interpreter$eval_in_ns(ctx,p__67134){
var vec__67135 = p__67134;
var _in_ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67135,(0),null);
var ns_expr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67135,(1),null);
var ns_sym = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,ns_expr) : sci.impl.interpreter.interpret.call(null,ctx,ns_expr));
sci.impl.utils.set_namespace_BANG_(ctx,ns_sym,null);

return null;
});
sci.impl.interpreter.eval_refer = (function sci$impl$interpreter$eval_refer(ctx,p__67138){
var vec__67139 = p__67138;
var seq__67140 = cljs.core.seq(vec__67139);
var first__67141 = cljs.core.first(seq__67140);
var seq__67140__$1 = cljs.core.next(seq__67140);
var _ = first__67141;
var first__67141__$1 = cljs.core.first(seq__67140__$1);
var seq__67140__$2 = cljs.core.next(seq__67140__$1);
var ns_sym = first__67141__$1;
var exprs = seq__67140__$2;
var ns_sym__$1 = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,ns_sym) : sci.impl.interpreter.interpret.call(null,ctx,ns_sym));
var exprs__$1 = exprs;
while(true){
if(exprs__$1){
var vec__67142 = exprs__$1;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67142,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67142,(1),null);
var G__67145_67820 = k;
var G__67145_67821__$1 = (((G__67145_67820 instanceof cljs.core.Keyword))?G__67145_67820.fqn:null);
switch (G__67145_67821__$1) {
case "exclude":
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx),((function (exprs__$1,G__67145_67820,G__67145_67821__$1,vec__67142,k,v,ns_sym__$1,vec__67139,seq__67140,first__67141,seq__67140__$1,_,first__67141__$1,seq__67140__$2,ns_sym,exprs){
return (function (env){
var cnn = sci.impl.vars.current_ns_name();
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(env,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn,new cljs.core.Keyword(null,"refer","refer",-964295553),ns_sym__$1,new cljs.core.Keyword(null,"exclude","exclude",-1230250334)], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.into,cljs.core.PersistentHashSet.EMPTY),v);
});})(exprs__$1,G__67145_67820,G__67145_67821__$1,vec__67142,k,v,ns_sym__$1,vec__67139,seq__67140,first__67141,seq__67140__$1,_,first__67141__$1,seq__67140__$2,ns_sym,exprs))
);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__67145_67821__$1)].join('')));

}

var G__67823 = cljs.core.nnext(exprs__$1);
exprs__$1 = G__67823;
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
sci.impl.interpreter.eval_set_BANG_ = (function sci$impl$interpreter$eval_set_BANG_(ctx,p__67153){
var vec__67154 = p__67153;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67154,(0),null);
var obj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67154,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67154,(2),null);
var obj__$1 = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,obj) : sci.impl.interpreter.interpret.call(null,ctx,obj));
var v__$1 = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,v) : sci.impl.interpreter.interpret.call(null,ctx,v));
if(sci.impl.vars.var_QMARK_(obj__$1)){
return sci.impl.types.setVal(obj__$1,v__$1);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Cannot set ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(obj__$1)," to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v__$1)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"obj","obj",981763962),obj__$1,new cljs.core.Keyword(null,"v","v",21465059),v__$1], null));
}
});
sci.impl.interpreter.eval_do_STAR_ = (function sci$impl$interpreter$eval_do_STAR_(ctx,exprs){
var G__67161 = exprs;
var vec__67162 = G__67161;
var seq__67163 = cljs.core.seq(vec__67162);
var first__67164 = cljs.core.first(seq__67163);
var seq__67163__$1 = cljs.core.next(seq__67163);
var expr = first__67164;
var exprs__$1 = seq__67163__$1;
var G__67161__$1 = G__67161;
while(true){
var vec__67165 = G__67161__$1;
var seq__67166 = cljs.core.seq(vec__67165);
var first__67167 = cljs.core.first(seq__67166);
var seq__67166__$1 = cljs.core.next(seq__67166);
var expr__$1 = first__67167;
var exprs__$2 = seq__67166__$1;
var ret = (function (){try{return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,expr__$1) : sci.impl.interpreter.interpret.call(null,ctx,expr__$1));
}catch (e67168){if((e67168 instanceof Error)){
var e = e67168;
return sci.impl.utils.rethrow_with_location_of_node(ctx,e,expr__$1);
} else {
throw e67168;

}
}})();
var temp__5733__auto__ = cljs.core.seq(exprs__$2);
if(temp__5733__auto__){
var exprs__$3 = temp__5733__auto__;
var G__67824 = exprs__$3;
G__67161__$1 = G__67824;
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
var G__67364 = cljs.core.count(args);
switch (G__67364) {
case (0):
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

break;
case (1):
var arg67174 = (function (){var G__67365 = ctx;
var G__67366 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67365,G__67366) : sci.impl.interpreter.interpret.call(null,G__67365,G__67366));
})();
var args__$1 = cljs.core.rest(args);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(arg67174) : f.call(null,arg67174));

break;
case (2):
var arg67175 = (function (){var G__67367 = ctx;
var G__67368 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67367,G__67368) : sci.impl.interpreter.interpret.call(null,G__67367,G__67368));
})();
var args__$1 = cljs.core.rest(args);
var arg67176 = (function (){var G__67369 = ctx;
var G__67370 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67369,G__67370) : sci.impl.interpreter.interpret.call(null,G__67369,G__67370));
})();
var args__$2 = cljs.core.rest(args__$1);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(arg67175,arg67176) : f.call(null,arg67175,arg67176));

break;
case (3):
var arg67177 = (function (){var G__67371 = ctx;
var G__67372 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67371,G__67372) : sci.impl.interpreter.interpret.call(null,G__67371,G__67372));
})();
var args__$1 = cljs.core.rest(args);
var arg67178 = (function (){var G__67377 = ctx;
var G__67378 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67377,G__67378) : sci.impl.interpreter.interpret.call(null,G__67377,G__67378));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg67179 = (function (){var G__67379 = ctx;
var G__67380 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67379,G__67380) : sci.impl.interpreter.interpret.call(null,G__67379,G__67380));
})();
var args__$3 = cljs.core.rest(args__$2);
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(arg67177,arg67178,arg67179) : f.call(null,arg67177,arg67178,arg67179));

break;
case (4):
var arg67180 = (function (){var G__67385 = ctx;
var G__67386 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67385,G__67386) : sci.impl.interpreter.interpret.call(null,G__67385,G__67386));
})();
var args__$1 = cljs.core.rest(args);
var arg67181 = (function (){var G__67387 = ctx;
var G__67388 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67387,G__67388) : sci.impl.interpreter.interpret.call(null,G__67387,G__67388));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg67182 = (function (){var G__67393 = ctx;
var G__67394 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67393,G__67394) : sci.impl.interpreter.interpret.call(null,G__67393,G__67394));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg67183 = (function (){var G__67395 = ctx;
var G__67396 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67395,G__67396) : sci.impl.interpreter.interpret.call(null,G__67395,G__67396));
})();
var args__$4 = cljs.core.rest(args__$3);
return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(arg67180,arg67181,arg67182,arg67183) : f.call(null,arg67180,arg67181,arg67182,arg67183));

break;
case (5):
var arg67184 = (function (){var G__67398 = ctx;
var G__67399 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67398,G__67399) : sci.impl.interpreter.interpret.call(null,G__67398,G__67399));
})();
var args__$1 = cljs.core.rest(args);
var arg67185 = (function (){var G__67402 = ctx;
var G__67403 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67402,G__67403) : sci.impl.interpreter.interpret.call(null,G__67402,G__67403));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg67186 = (function (){var G__67404 = ctx;
var G__67405 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67404,G__67405) : sci.impl.interpreter.interpret.call(null,G__67404,G__67405));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg67187 = (function (){var G__67406 = ctx;
var G__67407 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67406,G__67407) : sci.impl.interpreter.interpret.call(null,G__67406,G__67407));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg67188 = (function (){var G__67408 = ctx;
var G__67409 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67408,G__67409) : sci.impl.interpreter.interpret.call(null,G__67408,G__67409));
})();
var args__$5 = cljs.core.rest(args__$4);
return (f.cljs$core$IFn$_invoke$arity$5 ? f.cljs$core$IFn$_invoke$arity$5(arg67184,arg67185,arg67186,arg67187,arg67188) : f.call(null,arg67184,arg67185,arg67186,arg67187,arg67188));

break;
case (6):
var arg67189 = (function (){var G__67410 = ctx;
var G__67411 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67410,G__67411) : sci.impl.interpreter.interpret.call(null,G__67410,G__67411));
})();
var args__$1 = cljs.core.rest(args);
var arg67190 = (function (){var G__67412 = ctx;
var G__67413 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67412,G__67413) : sci.impl.interpreter.interpret.call(null,G__67412,G__67413));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg67191 = (function (){var G__67414 = ctx;
var G__67415 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67414,G__67415) : sci.impl.interpreter.interpret.call(null,G__67414,G__67415));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg67192 = (function (){var G__67416 = ctx;
var G__67417 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67416,G__67417) : sci.impl.interpreter.interpret.call(null,G__67416,G__67417));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg67193 = (function (){var G__67418 = ctx;
var G__67419 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67418,G__67419) : sci.impl.interpreter.interpret.call(null,G__67418,G__67419));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg67194 = (function (){var G__67420 = ctx;
var G__67421 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67420,G__67421) : sci.impl.interpreter.interpret.call(null,G__67420,G__67421));
})();
var args__$6 = cljs.core.rest(args__$5);
return (f.cljs$core$IFn$_invoke$arity$6 ? f.cljs$core$IFn$_invoke$arity$6(arg67189,arg67190,arg67191,arg67192,arg67193,arg67194) : f.call(null,arg67189,arg67190,arg67191,arg67192,arg67193,arg67194));

break;
case (7):
var arg67195 = (function (){var G__67422 = ctx;
var G__67423 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67422,G__67423) : sci.impl.interpreter.interpret.call(null,G__67422,G__67423));
})();
var args__$1 = cljs.core.rest(args);
var arg67196 = (function (){var G__67424 = ctx;
var G__67425 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67424,G__67425) : sci.impl.interpreter.interpret.call(null,G__67424,G__67425));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg67197 = (function (){var G__67426 = ctx;
var G__67427 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67426,G__67427) : sci.impl.interpreter.interpret.call(null,G__67426,G__67427));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg67198 = (function (){var G__67428 = ctx;
var G__67429 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67428,G__67429) : sci.impl.interpreter.interpret.call(null,G__67428,G__67429));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg67199 = (function (){var G__67430 = ctx;
var G__67431 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67430,G__67431) : sci.impl.interpreter.interpret.call(null,G__67430,G__67431));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg67200 = (function (){var G__67432 = ctx;
var G__67433 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67432,G__67433) : sci.impl.interpreter.interpret.call(null,G__67432,G__67433));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg67201 = (function (){var G__67434 = ctx;
var G__67435 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67434,G__67435) : sci.impl.interpreter.interpret.call(null,G__67434,G__67435));
})();
var args__$7 = cljs.core.rest(args__$6);
return (f.cljs$core$IFn$_invoke$arity$7 ? f.cljs$core$IFn$_invoke$arity$7(arg67195,arg67196,arg67197,arg67198,arg67199,arg67200,arg67201) : f.call(null,arg67195,arg67196,arg67197,arg67198,arg67199,arg67200,arg67201));

break;
case (8):
var arg67202 = (function (){var G__67436 = ctx;
var G__67437 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67436,G__67437) : sci.impl.interpreter.interpret.call(null,G__67436,G__67437));
})();
var args__$1 = cljs.core.rest(args);
var arg67203 = (function (){var G__67438 = ctx;
var G__67439 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67438,G__67439) : sci.impl.interpreter.interpret.call(null,G__67438,G__67439));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg67204 = (function (){var G__67440 = ctx;
var G__67441 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67440,G__67441) : sci.impl.interpreter.interpret.call(null,G__67440,G__67441));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg67205 = (function (){var G__67442 = ctx;
var G__67443 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67442,G__67443) : sci.impl.interpreter.interpret.call(null,G__67442,G__67443));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg67206 = (function (){var G__67444 = ctx;
var G__67445 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67444,G__67445) : sci.impl.interpreter.interpret.call(null,G__67444,G__67445));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg67207 = (function (){var G__67446 = ctx;
var G__67447 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67446,G__67447) : sci.impl.interpreter.interpret.call(null,G__67446,G__67447));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg67208 = (function (){var G__67448 = ctx;
var G__67449 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67448,G__67449) : sci.impl.interpreter.interpret.call(null,G__67448,G__67449));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg67209 = (function (){var G__67450 = ctx;
var G__67451 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67450,G__67451) : sci.impl.interpreter.interpret.call(null,G__67450,G__67451));
})();
var args__$8 = cljs.core.rest(args__$7);
return (f.cljs$core$IFn$_invoke$arity$8 ? f.cljs$core$IFn$_invoke$arity$8(arg67202,arg67203,arg67204,arg67205,arg67206,arg67207,arg67208,arg67209) : f.call(null,arg67202,arg67203,arg67204,arg67205,arg67206,arg67207,arg67208,arg67209));

break;
case (9):
var arg67210 = (function (){var G__67452 = ctx;
var G__67453 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67452,G__67453) : sci.impl.interpreter.interpret.call(null,G__67452,G__67453));
})();
var args__$1 = cljs.core.rest(args);
var arg67211 = (function (){var G__67454 = ctx;
var G__67455 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67454,G__67455) : sci.impl.interpreter.interpret.call(null,G__67454,G__67455));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg67212 = (function (){var G__67456 = ctx;
var G__67457 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67456,G__67457) : sci.impl.interpreter.interpret.call(null,G__67456,G__67457));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg67213 = (function (){var G__67458 = ctx;
var G__67459 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67458,G__67459) : sci.impl.interpreter.interpret.call(null,G__67458,G__67459));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg67214 = (function (){var G__67460 = ctx;
var G__67461 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67460,G__67461) : sci.impl.interpreter.interpret.call(null,G__67460,G__67461));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg67215 = (function (){var G__67462 = ctx;
var G__67463 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67462,G__67463) : sci.impl.interpreter.interpret.call(null,G__67462,G__67463));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg67216 = (function (){var G__67464 = ctx;
var G__67465 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67464,G__67465) : sci.impl.interpreter.interpret.call(null,G__67464,G__67465));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg67217 = (function (){var G__67466 = ctx;
var G__67467 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67466,G__67467) : sci.impl.interpreter.interpret.call(null,G__67466,G__67467));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg67218 = (function (){var G__67468 = ctx;
var G__67469 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67468,G__67469) : sci.impl.interpreter.interpret.call(null,G__67468,G__67469));
})();
var args__$9 = cljs.core.rest(args__$8);
return (f.cljs$core$IFn$_invoke$arity$9 ? f.cljs$core$IFn$_invoke$arity$9(arg67210,arg67211,arg67212,arg67213,arg67214,arg67215,arg67216,arg67217,arg67218) : f.call(null,arg67210,arg67211,arg67212,arg67213,arg67214,arg67215,arg67216,arg67217,arg67218));

break;
case (10):
var arg67219 = (function (){var G__67470 = ctx;
var G__67471 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67470,G__67471) : sci.impl.interpreter.interpret.call(null,G__67470,G__67471));
})();
var args__$1 = cljs.core.rest(args);
var arg67220 = (function (){var G__67472 = ctx;
var G__67473 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67472,G__67473) : sci.impl.interpreter.interpret.call(null,G__67472,G__67473));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg67221 = (function (){var G__67474 = ctx;
var G__67475 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67474,G__67475) : sci.impl.interpreter.interpret.call(null,G__67474,G__67475));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg67222 = (function (){var G__67476 = ctx;
var G__67477 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67476,G__67477) : sci.impl.interpreter.interpret.call(null,G__67476,G__67477));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg67223 = (function (){var G__67478 = ctx;
var G__67479 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67478,G__67479) : sci.impl.interpreter.interpret.call(null,G__67478,G__67479));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg67224 = (function (){var G__67480 = ctx;
var G__67481 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67480,G__67481) : sci.impl.interpreter.interpret.call(null,G__67480,G__67481));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg67225 = (function (){var G__67482 = ctx;
var G__67483 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67482,G__67483) : sci.impl.interpreter.interpret.call(null,G__67482,G__67483));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg67226 = (function (){var G__67484 = ctx;
var G__67485 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67484,G__67485) : sci.impl.interpreter.interpret.call(null,G__67484,G__67485));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg67227 = (function (){var G__67486 = ctx;
var G__67487 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67486,G__67487) : sci.impl.interpreter.interpret.call(null,G__67486,G__67487));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg67228 = (function (){var G__67488 = ctx;
var G__67489 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67488,G__67489) : sci.impl.interpreter.interpret.call(null,G__67488,G__67489));
})();
var args__$10 = cljs.core.rest(args__$9);
return (f.cljs$core$IFn$_invoke$arity$10 ? f.cljs$core$IFn$_invoke$arity$10(arg67219,arg67220,arg67221,arg67222,arg67223,arg67224,arg67225,arg67226,arg67227,arg67228) : f.call(null,arg67219,arg67220,arg67221,arg67222,arg67223,arg67224,arg67225,arg67226,arg67227,arg67228));

break;
case (11):
var arg67229 = (function (){var G__67490 = ctx;
var G__67491 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67490,G__67491) : sci.impl.interpreter.interpret.call(null,G__67490,G__67491));
})();
var args__$1 = cljs.core.rest(args);
var arg67230 = (function (){var G__67492 = ctx;
var G__67493 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67492,G__67493) : sci.impl.interpreter.interpret.call(null,G__67492,G__67493));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg67231 = (function (){var G__67494 = ctx;
var G__67495 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67494,G__67495) : sci.impl.interpreter.interpret.call(null,G__67494,G__67495));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg67232 = (function (){var G__67496 = ctx;
var G__67497 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67496,G__67497) : sci.impl.interpreter.interpret.call(null,G__67496,G__67497));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg67233 = (function (){var G__67498 = ctx;
var G__67499 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67498,G__67499) : sci.impl.interpreter.interpret.call(null,G__67498,G__67499));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg67234 = (function (){var G__67500 = ctx;
var G__67501 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67500,G__67501) : sci.impl.interpreter.interpret.call(null,G__67500,G__67501));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg67235 = (function (){var G__67502 = ctx;
var G__67503 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67502,G__67503) : sci.impl.interpreter.interpret.call(null,G__67502,G__67503));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg67236 = (function (){var G__67504 = ctx;
var G__67505 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67504,G__67505) : sci.impl.interpreter.interpret.call(null,G__67504,G__67505));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg67237 = (function (){var G__67506 = ctx;
var G__67507 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67506,G__67507) : sci.impl.interpreter.interpret.call(null,G__67506,G__67507));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg67238 = (function (){var G__67508 = ctx;
var G__67509 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67508,G__67509) : sci.impl.interpreter.interpret.call(null,G__67508,G__67509));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg67239 = (function (){var G__67510 = ctx;
var G__67511 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67510,G__67511) : sci.impl.interpreter.interpret.call(null,G__67510,G__67511));
})();
var args__$11 = cljs.core.rest(args__$10);
return (f.cljs$core$IFn$_invoke$arity$11 ? f.cljs$core$IFn$_invoke$arity$11(arg67229,arg67230,arg67231,arg67232,arg67233,arg67234,arg67235,arg67236,arg67237,arg67238,arg67239) : f.call(null,arg67229,arg67230,arg67231,arg67232,arg67233,arg67234,arg67235,arg67236,arg67237,arg67238,arg67239));

break;
case (12):
var arg67240 = (function (){var G__67512 = ctx;
var G__67513 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67512,G__67513) : sci.impl.interpreter.interpret.call(null,G__67512,G__67513));
})();
var args__$1 = cljs.core.rest(args);
var arg67241 = (function (){var G__67514 = ctx;
var G__67515 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67514,G__67515) : sci.impl.interpreter.interpret.call(null,G__67514,G__67515));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg67242 = (function (){var G__67516 = ctx;
var G__67517 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67516,G__67517) : sci.impl.interpreter.interpret.call(null,G__67516,G__67517));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg67243 = (function (){var G__67518 = ctx;
var G__67519 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67518,G__67519) : sci.impl.interpreter.interpret.call(null,G__67518,G__67519));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg67244 = (function (){var G__67520 = ctx;
var G__67521 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67520,G__67521) : sci.impl.interpreter.interpret.call(null,G__67520,G__67521));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg67245 = (function (){var G__67522 = ctx;
var G__67523 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67522,G__67523) : sci.impl.interpreter.interpret.call(null,G__67522,G__67523));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg67246 = (function (){var G__67524 = ctx;
var G__67525 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67524,G__67525) : sci.impl.interpreter.interpret.call(null,G__67524,G__67525));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg67247 = (function (){var G__67526 = ctx;
var G__67527 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67526,G__67527) : sci.impl.interpreter.interpret.call(null,G__67526,G__67527));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg67248 = (function (){var G__67528 = ctx;
var G__67529 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67528,G__67529) : sci.impl.interpreter.interpret.call(null,G__67528,G__67529));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg67249 = (function (){var G__67530 = ctx;
var G__67531 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67530,G__67531) : sci.impl.interpreter.interpret.call(null,G__67530,G__67531));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg67250 = (function (){var G__67532 = ctx;
var G__67533 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67532,G__67533) : sci.impl.interpreter.interpret.call(null,G__67532,G__67533));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg67251 = (function (){var G__67534 = ctx;
var G__67535 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67534,G__67535) : sci.impl.interpreter.interpret.call(null,G__67534,G__67535));
})();
var args__$12 = cljs.core.rest(args__$11);
return (f.cljs$core$IFn$_invoke$arity$12 ? f.cljs$core$IFn$_invoke$arity$12(arg67240,arg67241,arg67242,arg67243,arg67244,arg67245,arg67246,arg67247,arg67248,arg67249,arg67250,arg67251) : f.call(null,arg67240,arg67241,arg67242,arg67243,arg67244,arg67245,arg67246,arg67247,arg67248,arg67249,arg67250,arg67251));

break;
case (13):
var arg67252 = (function (){var G__67536 = ctx;
var G__67537 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67536,G__67537) : sci.impl.interpreter.interpret.call(null,G__67536,G__67537));
})();
var args__$1 = cljs.core.rest(args);
var arg67253 = (function (){var G__67538 = ctx;
var G__67539 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67538,G__67539) : sci.impl.interpreter.interpret.call(null,G__67538,G__67539));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg67254 = (function (){var G__67540 = ctx;
var G__67541 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67540,G__67541) : sci.impl.interpreter.interpret.call(null,G__67540,G__67541));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg67255 = (function (){var G__67542 = ctx;
var G__67543 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67542,G__67543) : sci.impl.interpreter.interpret.call(null,G__67542,G__67543));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg67256 = (function (){var G__67544 = ctx;
var G__67545 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67544,G__67545) : sci.impl.interpreter.interpret.call(null,G__67544,G__67545));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg67257 = (function (){var G__67546 = ctx;
var G__67547 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67546,G__67547) : sci.impl.interpreter.interpret.call(null,G__67546,G__67547));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg67258 = (function (){var G__67548 = ctx;
var G__67549 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67548,G__67549) : sci.impl.interpreter.interpret.call(null,G__67548,G__67549));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg67259 = (function (){var G__67550 = ctx;
var G__67551 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67550,G__67551) : sci.impl.interpreter.interpret.call(null,G__67550,G__67551));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg67260 = (function (){var G__67552 = ctx;
var G__67553 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67552,G__67553) : sci.impl.interpreter.interpret.call(null,G__67552,G__67553));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg67261 = (function (){var G__67554 = ctx;
var G__67555 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67554,G__67555) : sci.impl.interpreter.interpret.call(null,G__67554,G__67555));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg67262 = (function (){var G__67556 = ctx;
var G__67557 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67556,G__67557) : sci.impl.interpreter.interpret.call(null,G__67556,G__67557));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg67263 = (function (){var G__67558 = ctx;
var G__67559 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67558,G__67559) : sci.impl.interpreter.interpret.call(null,G__67558,G__67559));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg67264 = (function (){var G__67560 = ctx;
var G__67561 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67560,G__67561) : sci.impl.interpreter.interpret.call(null,G__67560,G__67561));
})();
var args__$13 = cljs.core.rest(args__$12);
return (f.cljs$core$IFn$_invoke$arity$13 ? f.cljs$core$IFn$_invoke$arity$13(arg67252,arg67253,arg67254,arg67255,arg67256,arg67257,arg67258,arg67259,arg67260,arg67261,arg67262,arg67263,arg67264) : f.call(null,arg67252,arg67253,arg67254,arg67255,arg67256,arg67257,arg67258,arg67259,arg67260,arg67261,arg67262,arg67263,arg67264));

break;
case (14):
var arg67265 = (function (){var G__67562 = ctx;
var G__67563 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67562,G__67563) : sci.impl.interpreter.interpret.call(null,G__67562,G__67563));
})();
var args__$1 = cljs.core.rest(args);
var arg67266 = (function (){var G__67564 = ctx;
var G__67565 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67564,G__67565) : sci.impl.interpreter.interpret.call(null,G__67564,G__67565));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg67267 = (function (){var G__67566 = ctx;
var G__67567 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67566,G__67567) : sci.impl.interpreter.interpret.call(null,G__67566,G__67567));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg67268 = (function (){var G__67568 = ctx;
var G__67569 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67568,G__67569) : sci.impl.interpreter.interpret.call(null,G__67568,G__67569));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg67269 = (function (){var G__67570 = ctx;
var G__67571 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67570,G__67571) : sci.impl.interpreter.interpret.call(null,G__67570,G__67571));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg67270 = (function (){var G__67572 = ctx;
var G__67573 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67572,G__67573) : sci.impl.interpreter.interpret.call(null,G__67572,G__67573));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg67271 = (function (){var G__67574 = ctx;
var G__67575 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67574,G__67575) : sci.impl.interpreter.interpret.call(null,G__67574,G__67575));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg67272 = (function (){var G__67576 = ctx;
var G__67577 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67576,G__67577) : sci.impl.interpreter.interpret.call(null,G__67576,G__67577));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg67273 = (function (){var G__67578 = ctx;
var G__67579 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67578,G__67579) : sci.impl.interpreter.interpret.call(null,G__67578,G__67579));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg67274 = (function (){var G__67580 = ctx;
var G__67581 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67580,G__67581) : sci.impl.interpreter.interpret.call(null,G__67580,G__67581));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg67275 = (function (){var G__67582 = ctx;
var G__67583 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67582,G__67583) : sci.impl.interpreter.interpret.call(null,G__67582,G__67583));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg67276 = (function (){var G__67584 = ctx;
var G__67585 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67584,G__67585) : sci.impl.interpreter.interpret.call(null,G__67584,G__67585));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg67277 = (function (){var G__67586 = ctx;
var G__67587 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67586,G__67587) : sci.impl.interpreter.interpret.call(null,G__67586,G__67587));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg67278 = (function (){var G__67588 = ctx;
var G__67589 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67588,G__67589) : sci.impl.interpreter.interpret.call(null,G__67588,G__67589));
})();
var args__$14 = cljs.core.rest(args__$13);
return (f.cljs$core$IFn$_invoke$arity$14 ? f.cljs$core$IFn$_invoke$arity$14(arg67265,arg67266,arg67267,arg67268,arg67269,arg67270,arg67271,arg67272,arg67273,arg67274,arg67275,arg67276,arg67277,arg67278) : f.call(null,arg67265,arg67266,arg67267,arg67268,arg67269,arg67270,arg67271,arg67272,arg67273,arg67274,arg67275,arg67276,arg67277,arg67278));

break;
case (15):
var arg67279 = (function (){var G__67590 = ctx;
var G__67591 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67590,G__67591) : sci.impl.interpreter.interpret.call(null,G__67590,G__67591));
})();
var args__$1 = cljs.core.rest(args);
var arg67280 = (function (){var G__67592 = ctx;
var G__67593 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67592,G__67593) : sci.impl.interpreter.interpret.call(null,G__67592,G__67593));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg67281 = (function (){var G__67594 = ctx;
var G__67595 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67594,G__67595) : sci.impl.interpreter.interpret.call(null,G__67594,G__67595));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg67282 = (function (){var G__67596 = ctx;
var G__67597 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67596,G__67597) : sci.impl.interpreter.interpret.call(null,G__67596,G__67597));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg67283 = (function (){var G__67598 = ctx;
var G__67599 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67598,G__67599) : sci.impl.interpreter.interpret.call(null,G__67598,G__67599));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg67284 = (function (){var G__67600 = ctx;
var G__67601 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67600,G__67601) : sci.impl.interpreter.interpret.call(null,G__67600,G__67601));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg67285 = (function (){var G__67602 = ctx;
var G__67603 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67602,G__67603) : sci.impl.interpreter.interpret.call(null,G__67602,G__67603));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg67286 = (function (){var G__67604 = ctx;
var G__67605 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67604,G__67605) : sci.impl.interpreter.interpret.call(null,G__67604,G__67605));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg67287 = (function (){var G__67606 = ctx;
var G__67607 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67606,G__67607) : sci.impl.interpreter.interpret.call(null,G__67606,G__67607));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg67288 = (function (){var G__67608 = ctx;
var G__67609 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67608,G__67609) : sci.impl.interpreter.interpret.call(null,G__67608,G__67609));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg67289 = (function (){var G__67610 = ctx;
var G__67611 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67610,G__67611) : sci.impl.interpreter.interpret.call(null,G__67610,G__67611));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg67290 = (function (){var G__67612 = ctx;
var G__67613 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67612,G__67613) : sci.impl.interpreter.interpret.call(null,G__67612,G__67613));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg67291 = (function (){var G__67614 = ctx;
var G__67615 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67614,G__67615) : sci.impl.interpreter.interpret.call(null,G__67614,G__67615));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg67292 = (function (){var G__67616 = ctx;
var G__67617 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67616,G__67617) : sci.impl.interpreter.interpret.call(null,G__67616,G__67617));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg67293 = (function (){var G__67618 = ctx;
var G__67619 = cljs.core.first(args__$14);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67618,G__67619) : sci.impl.interpreter.interpret.call(null,G__67618,G__67619));
})();
var args__$15 = cljs.core.rest(args__$14);
return (f.cljs$core$IFn$_invoke$arity$15 ? f.cljs$core$IFn$_invoke$arity$15(arg67279,arg67280,arg67281,arg67282,arg67283,arg67284,arg67285,arg67286,arg67287,arg67288,arg67289,arg67290,arg67291,arg67292,arg67293) : f.call(null,arg67279,arg67280,arg67281,arg67282,arg67283,arg67284,arg67285,arg67286,arg67287,arg67288,arg67289,arg67290,arg67291,arg67292,arg67293));

break;
case (16):
var arg67294 = (function (){var G__67620 = ctx;
var G__67621 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67620,G__67621) : sci.impl.interpreter.interpret.call(null,G__67620,G__67621));
})();
var args__$1 = cljs.core.rest(args);
var arg67295 = (function (){var G__67622 = ctx;
var G__67623 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67622,G__67623) : sci.impl.interpreter.interpret.call(null,G__67622,G__67623));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg67296 = (function (){var G__67624 = ctx;
var G__67625 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67624,G__67625) : sci.impl.interpreter.interpret.call(null,G__67624,G__67625));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg67297 = (function (){var G__67626 = ctx;
var G__67627 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67626,G__67627) : sci.impl.interpreter.interpret.call(null,G__67626,G__67627));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg67298 = (function (){var G__67628 = ctx;
var G__67629 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67628,G__67629) : sci.impl.interpreter.interpret.call(null,G__67628,G__67629));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg67299 = (function (){var G__67630 = ctx;
var G__67631 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67630,G__67631) : sci.impl.interpreter.interpret.call(null,G__67630,G__67631));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg67300 = (function (){var G__67632 = ctx;
var G__67633 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67632,G__67633) : sci.impl.interpreter.interpret.call(null,G__67632,G__67633));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg67301 = (function (){var G__67634 = ctx;
var G__67635 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67634,G__67635) : sci.impl.interpreter.interpret.call(null,G__67634,G__67635));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg67302 = (function (){var G__67636 = ctx;
var G__67637 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67636,G__67637) : sci.impl.interpreter.interpret.call(null,G__67636,G__67637));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg67303 = (function (){var G__67638 = ctx;
var G__67639 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67638,G__67639) : sci.impl.interpreter.interpret.call(null,G__67638,G__67639));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg67304 = (function (){var G__67640 = ctx;
var G__67641 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67640,G__67641) : sci.impl.interpreter.interpret.call(null,G__67640,G__67641));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg67305 = (function (){var G__67642 = ctx;
var G__67643 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67642,G__67643) : sci.impl.interpreter.interpret.call(null,G__67642,G__67643));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg67306 = (function (){var G__67644 = ctx;
var G__67645 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67644,G__67645) : sci.impl.interpreter.interpret.call(null,G__67644,G__67645));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg67307 = (function (){var G__67646 = ctx;
var G__67647 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67646,G__67647) : sci.impl.interpreter.interpret.call(null,G__67646,G__67647));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg67308 = (function (){var G__67648 = ctx;
var G__67649 = cljs.core.first(args__$14);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67648,G__67649) : sci.impl.interpreter.interpret.call(null,G__67648,G__67649));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg67309 = (function (){var G__67650 = ctx;
var G__67651 = cljs.core.first(args__$15);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67650,G__67651) : sci.impl.interpreter.interpret.call(null,G__67650,G__67651));
})();
var args__$16 = cljs.core.rest(args__$15);
return (f.cljs$core$IFn$_invoke$arity$16 ? f.cljs$core$IFn$_invoke$arity$16(arg67294,arg67295,arg67296,arg67297,arg67298,arg67299,arg67300,arg67301,arg67302,arg67303,arg67304,arg67305,arg67306,arg67307,arg67308,arg67309) : f.call(null,arg67294,arg67295,arg67296,arg67297,arg67298,arg67299,arg67300,arg67301,arg67302,arg67303,arg67304,arg67305,arg67306,arg67307,arg67308,arg67309));

break;
case (17):
var arg67310 = (function (){var G__67652 = ctx;
var G__67653 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67652,G__67653) : sci.impl.interpreter.interpret.call(null,G__67652,G__67653));
})();
var args__$1 = cljs.core.rest(args);
var arg67311 = (function (){var G__67654 = ctx;
var G__67655 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67654,G__67655) : sci.impl.interpreter.interpret.call(null,G__67654,G__67655));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg67312 = (function (){var G__67656 = ctx;
var G__67657 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67656,G__67657) : sci.impl.interpreter.interpret.call(null,G__67656,G__67657));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg67313 = (function (){var G__67658 = ctx;
var G__67659 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67658,G__67659) : sci.impl.interpreter.interpret.call(null,G__67658,G__67659));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg67314 = (function (){var G__67660 = ctx;
var G__67661 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67660,G__67661) : sci.impl.interpreter.interpret.call(null,G__67660,G__67661));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg67315 = (function (){var G__67662 = ctx;
var G__67663 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67662,G__67663) : sci.impl.interpreter.interpret.call(null,G__67662,G__67663));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg67316 = (function (){var G__67664 = ctx;
var G__67665 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67664,G__67665) : sci.impl.interpreter.interpret.call(null,G__67664,G__67665));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg67317 = (function (){var G__67666 = ctx;
var G__67667 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67666,G__67667) : sci.impl.interpreter.interpret.call(null,G__67666,G__67667));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg67318 = (function (){var G__67668 = ctx;
var G__67669 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67668,G__67669) : sci.impl.interpreter.interpret.call(null,G__67668,G__67669));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg67319 = (function (){var G__67670 = ctx;
var G__67671 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67670,G__67671) : sci.impl.interpreter.interpret.call(null,G__67670,G__67671));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg67320 = (function (){var G__67672 = ctx;
var G__67673 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67672,G__67673) : sci.impl.interpreter.interpret.call(null,G__67672,G__67673));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg67321 = (function (){var G__67674 = ctx;
var G__67675 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67674,G__67675) : sci.impl.interpreter.interpret.call(null,G__67674,G__67675));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg67322 = (function (){var G__67676 = ctx;
var G__67677 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67676,G__67677) : sci.impl.interpreter.interpret.call(null,G__67676,G__67677));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg67323 = (function (){var G__67678 = ctx;
var G__67679 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67678,G__67679) : sci.impl.interpreter.interpret.call(null,G__67678,G__67679));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg67324 = (function (){var G__67680 = ctx;
var G__67681 = cljs.core.first(args__$14);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67680,G__67681) : sci.impl.interpreter.interpret.call(null,G__67680,G__67681));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg67325 = (function (){var G__67682 = ctx;
var G__67683 = cljs.core.first(args__$15);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67682,G__67683) : sci.impl.interpreter.interpret.call(null,G__67682,G__67683));
})();
var args__$16 = cljs.core.rest(args__$15);
var arg67326 = (function (){var G__67684 = ctx;
var G__67685 = cljs.core.first(args__$16);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67684,G__67685) : sci.impl.interpreter.interpret.call(null,G__67684,G__67685));
})();
var args__$17 = cljs.core.rest(args__$16);
return (f.cljs$core$IFn$_invoke$arity$17 ? f.cljs$core$IFn$_invoke$arity$17(arg67310,arg67311,arg67312,arg67313,arg67314,arg67315,arg67316,arg67317,arg67318,arg67319,arg67320,arg67321,arg67322,arg67323,arg67324,arg67325,arg67326) : f.call(null,arg67310,arg67311,arg67312,arg67313,arg67314,arg67315,arg67316,arg67317,arg67318,arg67319,arg67320,arg67321,arg67322,arg67323,arg67324,arg67325,arg67326));

break;
case (18):
var arg67327 = (function (){var G__67686 = ctx;
var G__67687 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67686,G__67687) : sci.impl.interpreter.interpret.call(null,G__67686,G__67687));
})();
var args__$1 = cljs.core.rest(args);
var arg67328 = (function (){var G__67688 = ctx;
var G__67689 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67688,G__67689) : sci.impl.interpreter.interpret.call(null,G__67688,G__67689));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg67329 = (function (){var G__67690 = ctx;
var G__67691 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67690,G__67691) : sci.impl.interpreter.interpret.call(null,G__67690,G__67691));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg67330 = (function (){var G__67692 = ctx;
var G__67693 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67692,G__67693) : sci.impl.interpreter.interpret.call(null,G__67692,G__67693));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg67331 = (function (){var G__67694 = ctx;
var G__67695 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67694,G__67695) : sci.impl.interpreter.interpret.call(null,G__67694,G__67695));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg67332 = (function (){var G__67696 = ctx;
var G__67697 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67696,G__67697) : sci.impl.interpreter.interpret.call(null,G__67696,G__67697));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg67333 = (function (){var G__67698 = ctx;
var G__67699 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67698,G__67699) : sci.impl.interpreter.interpret.call(null,G__67698,G__67699));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg67334 = (function (){var G__67700 = ctx;
var G__67701 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67700,G__67701) : sci.impl.interpreter.interpret.call(null,G__67700,G__67701));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg67335 = (function (){var G__67702 = ctx;
var G__67703 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67702,G__67703) : sci.impl.interpreter.interpret.call(null,G__67702,G__67703));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg67336 = (function (){var G__67704 = ctx;
var G__67705 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67704,G__67705) : sci.impl.interpreter.interpret.call(null,G__67704,G__67705));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg67337 = (function (){var G__67706 = ctx;
var G__67707 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67706,G__67707) : sci.impl.interpreter.interpret.call(null,G__67706,G__67707));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg67338 = (function (){var G__67708 = ctx;
var G__67709 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67708,G__67709) : sci.impl.interpreter.interpret.call(null,G__67708,G__67709));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg67339 = (function (){var G__67710 = ctx;
var G__67711 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67710,G__67711) : sci.impl.interpreter.interpret.call(null,G__67710,G__67711));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg67340 = (function (){var G__67712 = ctx;
var G__67713 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67712,G__67713) : sci.impl.interpreter.interpret.call(null,G__67712,G__67713));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg67341 = (function (){var G__67714 = ctx;
var G__67715 = cljs.core.first(args__$14);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67714,G__67715) : sci.impl.interpreter.interpret.call(null,G__67714,G__67715));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg67342 = (function (){var G__67716 = ctx;
var G__67717 = cljs.core.first(args__$15);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67716,G__67717) : sci.impl.interpreter.interpret.call(null,G__67716,G__67717));
})();
var args__$16 = cljs.core.rest(args__$15);
var arg67343 = (function (){var G__67718 = ctx;
var G__67719 = cljs.core.first(args__$16);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67718,G__67719) : sci.impl.interpreter.interpret.call(null,G__67718,G__67719));
})();
var args__$17 = cljs.core.rest(args__$16);
var arg67344 = (function (){var G__67720 = ctx;
var G__67721 = cljs.core.first(args__$17);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67720,G__67721) : sci.impl.interpreter.interpret.call(null,G__67720,G__67721));
})();
var args__$18 = cljs.core.rest(args__$17);
return (f.cljs$core$IFn$_invoke$arity$18 ? f.cljs$core$IFn$_invoke$arity$18(arg67327,arg67328,arg67329,arg67330,arg67331,arg67332,arg67333,arg67334,arg67335,arg67336,arg67337,arg67338,arg67339,arg67340,arg67341,arg67342,arg67343,arg67344) : f.call(null,arg67327,arg67328,arg67329,arg67330,arg67331,arg67332,arg67333,arg67334,arg67335,arg67336,arg67337,arg67338,arg67339,arg67340,arg67341,arg67342,arg67343,arg67344));

break;
case (19):
var arg67345 = (function (){var G__67722 = ctx;
var G__67723 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67722,G__67723) : sci.impl.interpreter.interpret.call(null,G__67722,G__67723));
})();
var args__$1 = cljs.core.rest(args);
var arg67346 = (function (){var G__67724 = ctx;
var G__67725 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67724,G__67725) : sci.impl.interpreter.interpret.call(null,G__67724,G__67725));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg67347 = (function (){var G__67726 = ctx;
var G__67727 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67726,G__67727) : sci.impl.interpreter.interpret.call(null,G__67726,G__67727));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg67348 = (function (){var G__67728 = ctx;
var G__67729 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67728,G__67729) : sci.impl.interpreter.interpret.call(null,G__67728,G__67729));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg67349 = (function (){var G__67730 = ctx;
var G__67731 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67730,G__67731) : sci.impl.interpreter.interpret.call(null,G__67730,G__67731));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg67350 = (function (){var G__67732 = ctx;
var G__67733 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67732,G__67733) : sci.impl.interpreter.interpret.call(null,G__67732,G__67733));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg67351 = (function (){var G__67734 = ctx;
var G__67735 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67734,G__67735) : sci.impl.interpreter.interpret.call(null,G__67734,G__67735));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg67352 = (function (){var G__67736 = ctx;
var G__67737 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67736,G__67737) : sci.impl.interpreter.interpret.call(null,G__67736,G__67737));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg67353 = (function (){var G__67738 = ctx;
var G__67739 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67738,G__67739) : sci.impl.interpreter.interpret.call(null,G__67738,G__67739));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg67354 = (function (){var G__67740 = ctx;
var G__67741 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67740,G__67741) : sci.impl.interpreter.interpret.call(null,G__67740,G__67741));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg67355 = (function (){var G__67742 = ctx;
var G__67743 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67742,G__67743) : sci.impl.interpreter.interpret.call(null,G__67742,G__67743));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg67356 = (function (){var G__67744 = ctx;
var G__67745 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67744,G__67745) : sci.impl.interpreter.interpret.call(null,G__67744,G__67745));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg67357 = (function (){var G__67746 = ctx;
var G__67747 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67746,G__67747) : sci.impl.interpreter.interpret.call(null,G__67746,G__67747));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg67358 = (function (){var G__67748 = ctx;
var G__67749 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67748,G__67749) : sci.impl.interpreter.interpret.call(null,G__67748,G__67749));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg67359 = (function (){var G__67750 = ctx;
var G__67751 = cljs.core.first(args__$14);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67750,G__67751) : sci.impl.interpreter.interpret.call(null,G__67750,G__67751));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg67360 = (function (){var G__67752 = ctx;
var G__67753 = cljs.core.first(args__$15);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67752,G__67753) : sci.impl.interpreter.interpret.call(null,G__67752,G__67753));
})();
var args__$16 = cljs.core.rest(args__$15);
var arg67361 = (function (){var G__67754 = ctx;
var G__67755 = cljs.core.first(args__$16);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67754,G__67755) : sci.impl.interpreter.interpret.call(null,G__67754,G__67755));
})();
var args__$17 = cljs.core.rest(args__$16);
var arg67362 = (function (){var G__67756 = ctx;
var G__67757 = cljs.core.first(args__$17);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67756,G__67757) : sci.impl.interpreter.interpret.call(null,G__67756,G__67757));
})();
var args__$18 = cljs.core.rest(args__$17);
var arg67363 = (function (){var G__67758 = ctx;
var G__67759 = cljs.core.first(args__$18);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67758,G__67759) : sci.impl.interpreter.interpret.call(null,G__67758,G__67759));
})();
var args__$19 = cljs.core.rest(args__$18);
return (f.cljs$core$IFn$_invoke$arity$19 ? f.cljs$core$IFn$_invoke$arity$19(arg67345,arg67346,arg67347,arg67348,arg67349,arg67350,arg67351,arg67352,arg67353,arg67354,arg67355,arg67356,arg67357,arg67358,arg67359,arg67360,arg67361,arg67362,arg67363) : f.call(null,arg67345,arg67346,arg67347,arg67348,arg67349,arg67350,arg67351,arg67352,arg67353,arg67354,arg67355,arg67356,arg67357,arg67358,arg67359,arg67360,arg67361,arg67362,arg67363));

break;
default:
var args__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__4373_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__4373_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__4373_SHARP_));
}),args);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args__$1);

}
});
sci.impl.interpreter.eval_special_call = (function sci$impl$interpreter$eval_special_call(ctx,f_sym,expr){
var G__67760 = sci.impl.utils.strip_core_ns(f_sym);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,".",".",1975675962,null),G__67760)){
if(cljs.core.truth_(ctx.get(new cljs.core.Keyword(null,"dry-run","dry-run",-1102788647)))){
return null;
} else {
return sci.impl.interpreter.eval_instance_method_invocation(ctx,expr);
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"and","and",668631710,null),G__67760)){
return sci.impl.interpreter.eval_and(ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"case","case",-1510733573,null),G__67760)){
return sci.impl.interpreter.eval_case(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"if","if",1181717262,null),G__67760)){
return sci.impl.interpreter.eval_if(ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"do","do",1686842252,null),G__67760)){
return sci.impl.interpreter.eval_do(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"macroexpand","macroexpand",1509933344,null),G__67760)){
return sci.impl.interpreter.macroexpand(ctx,(function (){var G__67761 = ctx;
var G__67762 = cljs.core.second(expr);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67761,G__67762) : sci.impl.interpreter.interpret.call(null,G__67761,G__67762));
})());
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"def","def",597100991,null),G__67760)){
return sci.impl.interpreter.eval_def(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"let","let",358118826,null),G__67760)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(sci.impl.interpreter.eval_let,ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"in-ns","in-ns",-2089468466,null),G__67760)){
return sci.impl.interpreter.eval_in_ns(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"use","use",-205850897,null),G__67760)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(sci.impl.interpreter.eval_use,ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"set!","set!",250714521,null),G__67760)){
return sci.impl.interpreter.eval_set_BANG_(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"recur","recur",1202958259,null),G__67760)){
return sci.impl.interpreter.fn_call(ctx,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(sci.impl.fns.__GT_Recur,cljs.core.vector),cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"require","require",1172530194,null),G__67760)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(sci.impl.interpreter.eval_require,ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"new","new",-444906321,null),G__67760)){
if(cljs.core.truth_(ctx.get(new cljs.core.Keyword(null,"dry-run","dry-run",-1102788647)))){
return null;
} else {
return sci.impl.interpreter.eval_constructor_invocation(ctx,expr);
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"macroexpand-1","macroexpand-1",659241329,null),G__67760)){
return sci.impl.interpreter.macroexpand_1(ctx,(function (){var G__67763 = ctx;
var G__67764 = cljs.core.second(expr);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67763,G__67764) : sci.impl.interpreter.interpret.call(null,G__67763,G__67764));
})());
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"refer","refer",676235974,null),G__67760)){
return sci.impl.interpreter.eval_refer(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"lazy-seq","lazy-seq",489632906,null),G__67760)){
return (new cljs.core.LazySeq(null,(function (){var G__67765 = ctx;
var G__67766 = cljs.core.second(expr);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67765,G__67766) : sci.impl.interpreter.interpret.call(null,G__67765,G__67766));
})(),null,null));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"throw","throw",595905694,null),G__67760)){
return sci.impl.interpreter.eval_throw(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"try","try",-1273693247,null),G__67760)){
return sci.impl.interpreter.eval_try(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"resolve","resolve",56086045,null),G__67760)){
return sci.impl.interpreter.eval_resolve(ctx,cljs.core.second(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"or","or",1876275696,null),G__67760)){
return sci.impl.interpreter.eval_or(ctx,cljs.core.rest(expr));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__67760)].join('')));

}
}
}
}
}
}
}
}
}
}
}
}
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
if(cljs.core.truth_((function (){var G__67768 = op;
var G__67769 = new cljs.core.Keyword(null,"static-access","static-access",-1860919441);
return (sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__67768,G__67769) : sci.impl.utils.kw_identical_QMARK_.call(null,G__67768,G__67769));
})())){
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
}catch (e67767){if((e67767 instanceof Error)){
var e = e67767;
return sci.impl.utils.rethrow_with_location_of_node(ctx,e,expr);
} else {
throw e67767;

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
var ret = ((cljs.core.not(op))?expr:(function (){var G__67776 = op;
var G__67776__$1 = (((G__67776 instanceof cljs.core.Keyword))?G__67776.fqn:null);
switch (G__67776__$1) {
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
return cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__67773_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__67773_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__67773_SHARP_));
}),cljs.core.keys(expr)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__67774_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__67774_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__67774_SHARP_));
}),cljs.core.vals(expr)));
} else {
if(((cljs.core.vector_QMARK_(expr)) || (cljs.core.set_QMARK_(expr)))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.empty(expr),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__67775_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__67775_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__67775_SHARP_));
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
var G__67827 = cljs.core.rest(exprs);
var G__67828 = (function (){var G__67779 = ctx;
var G__67780 = cljs.core.first(exprs);
return (sci.impl.interpreter.eval_form.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.eval_form.cljs$core$IFn$_invoke$arity$2(G__67779,G__67780) : sci.impl.interpreter.eval_form.call(null,G__67779,G__67780));
})();
exprs = G__67827;
ret = G__67828;
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
if(cljs.core.truth_((function (){var G__67783 = new cljs.core.Keyword("edamame.impl.parser","eof","edamame.impl.parser/eof",720552006);
var G__67784 = expr;
return (sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__67783,G__67784) : sci.impl.utils.kw_identical_QMARK_.call(null,G__67783,G__67784));
})())){
return ret;
} else {
var ret__$1 = sci.impl.interpreter.eval_form(ctx,expr);
var G__67829 = ret__$1;
ret = G__67829;
continue;
}
break;
}
}finally {sci.impl.vars.pop_thread_bindings();
}});
sci.impl.interpreter.eval_string = (function sci$impl$interpreter$eval_string(var_args){
var G__67786 = arguments.length;
switch (G__67786) {
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
