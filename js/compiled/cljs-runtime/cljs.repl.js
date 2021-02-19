goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__53818){
var map__53819 = p__53818;
var map__53819__$1 = (((((!((map__53819 == null))))?(((((map__53819.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53819.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53819):map__53819);
var m = map__53819__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53819__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53819__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4126__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__53821_53930 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__53822_53931 = null;
var count__53823_53932 = (0);
var i__53824_53933 = (0);
while(true){
if((i__53824_53933 < count__53823_53932)){
var f_53934 = chunk__53822_53931.cljs$core$IIndexed$_nth$arity$2(null,i__53824_53933);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_53934], 0));


var G__53935 = seq__53821_53930;
var G__53936 = chunk__53822_53931;
var G__53937 = count__53823_53932;
var G__53938 = (i__53824_53933 + (1));
seq__53821_53930 = G__53935;
chunk__53822_53931 = G__53936;
count__53823_53932 = G__53937;
i__53824_53933 = G__53938;
continue;
} else {
var temp__5735__auto___53939 = cljs.core.seq(seq__53821_53930);
if(temp__5735__auto___53939){
var seq__53821_53940__$1 = temp__5735__auto___53939;
if(cljs.core.chunked_seq_QMARK_(seq__53821_53940__$1)){
var c__4556__auto___53941 = cljs.core.chunk_first(seq__53821_53940__$1);
var G__53942 = cljs.core.chunk_rest(seq__53821_53940__$1);
var G__53943 = c__4556__auto___53941;
var G__53944 = cljs.core.count(c__4556__auto___53941);
var G__53945 = (0);
seq__53821_53930 = G__53942;
chunk__53822_53931 = G__53943;
count__53823_53932 = G__53944;
i__53824_53933 = G__53945;
continue;
} else {
var f_53946 = cljs.core.first(seq__53821_53940__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_53946], 0));


var G__53947 = cljs.core.next(seq__53821_53940__$1);
var G__53948 = null;
var G__53949 = (0);
var G__53950 = (0);
seq__53821_53930 = G__53947;
chunk__53822_53931 = G__53948;
count__53823_53932 = G__53949;
i__53824_53933 = G__53950;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_53951 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_53951], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_53951)))?cljs.core.second(arglists_53951):arglists_53951)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__53826_53952 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__53827_53953 = null;
var count__53828_53954 = (0);
var i__53829_53955 = (0);
while(true){
if((i__53829_53955 < count__53828_53954)){
var vec__53841_53956 = chunk__53827_53953.cljs$core$IIndexed$_nth$arity$2(null,i__53829_53955);
var name_53957 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53841_53956,(0),null);
var map__53844_53958 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53841_53956,(1),null);
var map__53844_53959__$1 = (((((!((map__53844_53958 == null))))?(((((map__53844_53958.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53844_53958.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53844_53958):map__53844_53958);
var doc_53960 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53844_53959__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_53961 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53844_53959__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_53957], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_53961], 0));

if(cljs.core.truth_(doc_53960)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_53960], 0));
} else {
}


var G__53962 = seq__53826_53952;
var G__53963 = chunk__53827_53953;
var G__53964 = count__53828_53954;
var G__53965 = (i__53829_53955 + (1));
seq__53826_53952 = G__53962;
chunk__53827_53953 = G__53963;
count__53828_53954 = G__53964;
i__53829_53955 = G__53965;
continue;
} else {
var temp__5735__auto___53966 = cljs.core.seq(seq__53826_53952);
if(temp__5735__auto___53966){
var seq__53826_53967__$1 = temp__5735__auto___53966;
if(cljs.core.chunked_seq_QMARK_(seq__53826_53967__$1)){
var c__4556__auto___53968 = cljs.core.chunk_first(seq__53826_53967__$1);
var G__53969 = cljs.core.chunk_rest(seq__53826_53967__$1);
var G__53970 = c__4556__auto___53968;
var G__53971 = cljs.core.count(c__4556__auto___53968);
var G__53972 = (0);
seq__53826_53952 = G__53969;
chunk__53827_53953 = G__53970;
count__53828_53954 = G__53971;
i__53829_53955 = G__53972;
continue;
} else {
var vec__53846_53973 = cljs.core.first(seq__53826_53967__$1);
var name_53974 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53846_53973,(0),null);
var map__53849_53975 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53846_53973,(1),null);
var map__53849_53976__$1 = (((((!((map__53849_53975 == null))))?(((((map__53849_53975.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53849_53975.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53849_53975):map__53849_53975);
var doc_53977 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53849_53976__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_53978 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53849_53976__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_53974], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_53978], 0));

if(cljs.core.truth_(doc_53977)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_53977], 0));
} else {
}


var G__53979 = cljs.core.next(seq__53826_53967__$1);
var G__53980 = null;
var G__53981 = (0);
var G__53982 = (0);
seq__53826_53952 = G__53979;
chunk__53827_53953 = G__53980;
count__53828_53954 = G__53981;
i__53829_53955 = G__53982;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5735__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__53854 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__53855 = null;
var count__53856 = (0);
var i__53857 = (0);
while(true){
if((i__53857 < count__53856)){
var role = chunk__53855.cljs$core$IIndexed$_nth$arity$2(null,i__53857);
var temp__5735__auto___53986__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___53986__$1)){
var spec_53987 = temp__5735__auto___53986__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_53987)], 0));
} else {
}


var G__53988 = seq__53854;
var G__53989 = chunk__53855;
var G__53990 = count__53856;
var G__53991 = (i__53857 + (1));
seq__53854 = G__53988;
chunk__53855 = G__53989;
count__53856 = G__53990;
i__53857 = G__53991;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__53854);
if(temp__5735__auto____$1){
var seq__53854__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__53854__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__53854__$1);
var G__53992 = cljs.core.chunk_rest(seq__53854__$1);
var G__53993 = c__4556__auto__;
var G__53994 = cljs.core.count(c__4556__auto__);
var G__53995 = (0);
seq__53854 = G__53992;
chunk__53855 = G__53993;
count__53856 = G__53994;
i__53857 = G__53995;
continue;
} else {
var role = cljs.core.first(seq__53854__$1);
var temp__5735__auto___53996__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___53996__$2)){
var spec_53997 = temp__5735__auto___53996__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_53997)], 0));
} else {
}


var G__53998 = cljs.core.next(seq__53854__$1);
var G__53999 = null;
var G__54000 = (0);
var G__54001 = (0);
seq__53854 = G__53998;
chunk__53855 = G__53999;
count__53856 = G__54000;
i__53857 = G__54001;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__54002 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__54003 = cljs.core.ex_cause(t);
via = G__54002;
t = G__54003;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__53863 = datafied_throwable;
var map__53863__$1 = (((((!((map__53863 == null))))?(((((map__53863.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53863.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53863):map__53863);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53863__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53863__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__53863__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__53864 = cljs.core.last(via);
var map__53864__$1 = (((((!((map__53864 == null))))?(((((map__53864.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53864.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53864):map__53864);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53864__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53864__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53864__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__53865 = data;
var map__53865__$1 = (((((!((map__53865 == null))))?(((((map__53865.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53865.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53865):map__53865);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53865__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53865__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53865__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__53866 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__53866__$1 = (((((!((map__53866 == null))))?(((((map__53866.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53866.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53866):map__53866);
var top_data = map__53866__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53866__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__53871 = phase;
var G__53871__$1 = (((G__53871 instanceof cljs.core.Keyword))?G__53871.fqn:null);
switch (G__53871__$1) {
case "read-source":
var map__53872 = data;
var map__53872__$1 = (((((!((map__53872 == null))))?(((((map__53872.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53872.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53872):map__53872);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53872__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53872__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__53874 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__53874__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53874,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__53874);
var G__53874__$2 = (cljs.core.truth_((function (){var fexpr__53875 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__53875.cljs$core$IFn$_invoke$arity$1 ? fexpr__53875.cljs$core$IFn$_invoke$arity$1(source) : fexpr__53875.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__53874__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__53874__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53874__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__53874__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__53876 = top_data;
var G__53876__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53876,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__53876);
var G__53876__$2 = (cljs.core.truth_((function (){var fexpr__53877 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__53877.cljs$core$IFn$_invoke$arity$1 ? fexpr__53877.cljs$core$IFn$_invoke$arity$1(source) : fexpr__53877.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__53876__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__53876__$1);
var G__53876__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53876__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__53876__$2);
var G__53876__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53876__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__53876__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53876__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__53876__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__53878 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53878,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53878,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53878,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53878,(3),null);
var G__53881 = top_data;
var G__53881__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53881,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__53881);
var G__53881__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53881__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__53881__$1);
var G__53881__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53881__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__53881__$2);
var G__53881__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53881__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__53881__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53881__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__53881__$4;
}

break;
case "execution":
var vec__53882 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53882,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53882,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53882,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53882,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__53862_SHARP_){
var or__4126__auto__ = (p1__53862_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
var fexpr__53886 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__53886.cljs$core$IFn$_invoke$arity$1 ? fexpr__53886.cljs$core$IFn$_invoke$arity$1(p1__53862_SHARP_) : fexpr__53886.call(null,p1__53862_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__53887 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__53887__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53887,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__53887);
var G__53887__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53887__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__53887__$1);
var G__53887__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53887__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__53887__$2);
var G__53887__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53887__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__53887__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53887__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__53887__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__53871__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__53890){
var map__53891 = p__53890;
var map__53891__$1 = (((((!((map__53891 == null))))?(((((map__53891.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53891.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53891):map__53891);
var triage_data = map__53891__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53891__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53891__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53891__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53891__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53891__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53891__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53891__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53891__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = source;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = line;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4126__auto__ = class$;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__53893 = phase;
var G__53893__$1 = (((G__53893 instanceof cljs.core.Keyword))?G__53893.fqn:null);
switch (G__53893__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__53894 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__53895 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__53896 = loc;
var G__53897 = (cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__53898_54006 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__53899_54007 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__53900_54008 = true;
var _STAR_print_fn_STAR__temp_val__53901_54009 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__53900_54008);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__53901_54009);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__53888_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__53888_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__53899_54007);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__53898_54006);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__53894,G__53895,G__53896,G__53897) : format.call(null,G__53894,G__53895,G__53896,G__53897));

break;
case "macroexpansion":
var G__53902 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__53903 = cause_type;
var G__53904 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__53905 = loc;
var G__53906 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__53902,G__53903,G__53904,G__53905,G__53906) : format.call(null,G__53902,G__53903,G__53904,G__53905,G__53906));

break;
case "compile-syntax-check":
var G__53907 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__53908 = cause_type;
var G__53909 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__53910 = loc;
var G__53911 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__53907,G__53908,G__53909,G__53910,G__53911) : format.call(null,G__53907,G__53908,G__53909,G__53910,G__53911));

break;
case "compilation":
var G__53912 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__53913 = cause_type;
var G__53914 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__53915 = loc;
var G__53916 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__53912,G__53913,G__53914,G__53915,G__53916) : format.call(null,G__53912,G__53913,G__53914,G__53915,G__53916));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__53917 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__53918 = symbol;
var G__53919 = loc;
var G__53920 = (function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__53921_54013 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__53922_54014 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__53923_54015 = true;
var _STAR_print_fn_STAR__temp_val__53924_54016 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__53923_54015);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__53924_54016);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__53889_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__53889_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__53922_54014);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__53921_54013);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__53917,G__53918,G__53919,G__53920) : format.call(null,G__53917,G__53918,G__53919,G__53920));
} else {
var G__53925 = "Execution error%s at %s(%s).\n%s\n";
var G__53926 = cause_type;
var G__53927 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__53928 = loc;
var G__53929 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__53925,G__53926,G__53927,G__53928,G__53929) : format.call(null,G__53925,G__53926,G__53927,G__53928,G__53929));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__53893__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
