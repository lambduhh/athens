goog.provide('athens.walk');
/**
 * Walk previous and new strings to delete or add links, block references, etc. to datascript.
 */
athens.walk.walk_string = (function athens$walk$walk_string(string){
var data = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var G__45555_45557 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"page-link","page-link",-169621200),(function() { 
var G__45559__delegate = function (title){
var inner_title = clojure.string.join.cljs$core$IFn$_invoke$arity$2("",title);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(data,cljs.core.update,new cljs.core.Keyword("node","titles","node/titles",783660933),(function (p1__45550_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__45550_SHARP_,inner_title);
}));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(data,cljs.core.update,new cljs.core.Keyword("page","refs","page/refs",-1563352171),(function (p1__45551_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__45551_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("node","title","node/title",628940777),inner_title], null));
}));

return ["[[",inner_title,"]]"].join('');
};
var G__45559 = function (var_args){
var title = null;
if (arguments.length > 0) {
var G__45560__i = 0, G__45560__a = new Array(arguments.length -  0);
while (G__45560__i < G__45560__a.length) {G__45560__a[G__45560__i] = arguments[G__45560__i + 0]; ++G__45560__i;}
  title = new cljs.core.IndexedSeq(G__45560__a,0,null);
} 
return G__45559__delegate.call(this,title);};
G__45559.cljs$lang$maxFixedArity = 0;
G__45559.cljs$lang$applyTo = (function (arglist__45561){
var title = cljs.core.seq(arglist__45561);
return G__45559__delegate(title);
});
G__45559.cljs$core$IFn$_invoke$arity$variadic = G__45559__delegate;
return G__45559;
})()
,new cljs.core.Keyword(null,"hashtag","hashtag",-529028899),(function() { 
var G__45562__delegate = function (title){
var inner_title = clojure.string.join.cljs$core$IFn$_invoke$arity$2("",title);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(data,cljs.core.update,new cljs.core.Keyword("node","titles","node/titles",783660933),(function (p1__45552_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__45552_SHARP_,inner_title);
}));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(data,cljs.core.update,new cljs.core.Keyword("page","refs","page/refs",-1563352171),(function (p1__45553_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__45553_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("node","title","node/title",628940777),inner_title], null));
}));

return ["#",inner_title].join('');
};
var G__45562 = function (var_args){
var title = null;
if (arguments.length > 0) {
var G__45563__i = 0, G__45563__a = new Array(arguments.length -  0);
while (G__45563__i < G__45563__a.length) {G__45563__a[G__45563__i] = arguments[G__45563__i + 0]; ++G__45563__i;}
  title = new cljs.core.IndexedSeq(G__45563__a,0,null);
} 
return G__45562__delegate.call(this,title);};
G__45562.cljs$lang$maxFixedArity = 0;
G__45562.cljs$lang$applyTo = (function (arglist__45564){
var title = cljs.core.seq(arglist__45564);
return G__45562__delegate(title);
});
G__45562.cljs$core$IFn$_invoke$arity$variadic = G__45562__delegate;
return G__45562;
})()
,new cljs.core.Keyword(null,"block-ref","block-ref",362929756),(function (uid){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(data,cljs.core.update,new cljs.core.Keyword("block","refs","block/refs",-1214495349),(function (p1__45554_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__45554_SHARP_,uid);
}));
})], null);
var G__45556_45558 = athens.parser.parse_to_ast(string);
(instaparse.core.transform.cljs$core$IFn$_invoke$arity$2 ? instaparse.core.transform.cljs$core$IFn$_invoke$arity$2(G__45555_45557,G__45556_45558) : instaparse.core.transform.call(null,G__45555_45557,G__45556_45558));

return cljs.core.deref(data);
});

//# sourceMappingURL=athens.walk.js.map
