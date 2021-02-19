goog.provide('instaparse.failure');
/**
 * Takes an index into text, and determines the line and column info
 */
instaparse.failure.index__GT_line_column = (function instaparse$failure$index__GT_line_column(index,text){
var line = (1);
var col = (1);
var counter = (0);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(index,counter)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),col], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.get.cljs$core$IFn$_invoke$arity$2(text,counter))){
var G__43584 = (line + (1));
var G__43585 = (1);
var G__43586 = (counter + (1));
line = G__43584;
col = G__43585;
counter = G__43586;
continue;
} else {
var G__43587 = line;
var G__43588 = (col + (1));
var G__43589 = (counter + (1));
line = G__43587;
col = G__43588;
counter = G__43589;
continue;

}
}
break;
}
});
instaparse.failure.get_line = (function instaparse$failure$get_line(n,text){
var chars = cljs.core.seq(clojure.string.replace(text,"\r\n","\n"));
var n__$1 = n;
while(true){
if(cljs.core.empty_QMARK_(chars)){
return "";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n__$1,(1))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["\n",null], null), null)),chars));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.first(chars))){
var G__43590 = cljs.core.next(chars);
var G__43591 = (n__$1 - (1));
chars = G__43590;
n__$1 = G__43591;
continue;
} else {
var G__43592 = cljs.core.next(chars);
var G__43593 = n__$1;
chars = G__43592;
n__$1 = G__43593;
continue;

}
}
}
break;
}
});
/**
 * Creates string with caret at nth position, 1-based
 */
instaparse.failure.marker = (function instaparse$failure$marker(n){
if(cljs.core.integer_QMARK_(n)){
if((n <= (1))){
return "^";
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((n - (1))," "),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["^"], null)));
}
} else {
return null;
}
});
/**
 * Adds text, line, and column info to failure object.
 */
instaparse.failure.augment_failure = (function instaparse$failure$augment_failure(failure,text){
var lc = instaparse.failure.index__GT_line_column(new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(failure),text);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([failure,lc,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),instaparse.failure.get_line(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(lc),text)], null)], 0));
});
/**
 * Provides special case for printing negative lookahead reasons
 */
instaparse.failure.print_reason = (function instaparse$failure$print_reason(r){
if(cljs.core.truth_(new cljs.core.Keyword(null,"NOT","NOT",-1689245341).cljs$core$IFn$_invoke$arity$1(r))){
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["NOT "], 0));

return cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"NOT","NOT",-1689245341).cljs$core$IFn$_invoke$arity$1(r)], 0));
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"char-range","char-range",1443391389).cljs$core$IFn$_invoke$arity$1(r))){
return cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.print.char_range__GT_str(r)], 0));
} else {
if((r instanceof RegExp)){
return cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.print.regexp__GT_str(r)], 0));
} else {
return cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([r], 0));

}
}
}
});
/**
 * Takes an augmented failure object and prints the error message
 */
instaparse.failure.pprint_failure = (function instaparse$failure$pprint_failure(p__43570){
var map__43572 = p__43570;
var map__43572__$1 = (((((!((map__43572 == null))))?(((((map__43572.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43572.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43572):map__43572);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43572__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43572__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43572__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var reason = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43572__$1,new cljs.core.Keyword(null,"reason","reason",-2070751759));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["Parse error at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column),":"].join('')], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([text], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.failure.marker(column)], 0));

var full_reasons = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expecting","expecting",-57706705),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"full","full",436801220),reason)));
var partial_reasons = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expecting","expecting",-57706705),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(new cljs.core.Keyword(null,"full","full",436801220)),reason)));
var total = (cljs.core.count(full_reasons) + cljs.core.count(partial_reasons));
if((total === (0))){
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),total)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Expected:"], 0));
} else {
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Expected one of:"], 0));

}
}

var seq__43576_43594 = cljs.core.seq(full_reasons);
var chunk__43577_43595 = null;
var count__43578_43596 = (0);
var i__43579_43597 = (0);
while(true){
if((i__43579_43597 < count__43578_43596)){
var r_43598 = chunk__43577_43595.cljs$core$IIndexed$_nth$arity$2(null,i__43579_43597);
instaparse.failure.print_reason(r_43598);

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" (followed by end-of-string)"], 0));


var G__43599 = seq__43576_43594;
var G__43600 = chunk__43577_43595;
var G__43601 = count__43578_43596;
var G__43602 = (i__43579_43597 + (1));
seq__43576_43594 = G__43599;
chunk__43577_43595 = G__43600;
count__43578_43596 = G__43601;
i__43579_43597 = G__43602;
continue;
} else {
var temp__5735__auto___43603 = cljs.core.seq(seq__43576_43594);
if(temp__5735__auto___43603){
var seq__43576_43604__$1 = temp__5735__auto___43603;
if(cljs.core.chunked_seq_QMARK_(seq__43576_43604__$1)){
var c__4556__auto___43605 = cljs.core.chunk_first(seq__43576_43604__$1);
var G__43606 = cljs.core.chunk_rest(seq__43576_43604__$1);
var G__43607 = c__4556__auto___43605;
var G__43608 = cljs.core.count(c__4556__auto___43605);
var G__43609 = (0);
seq__43576_43594 = G__43606;
chunk__43577_43595 = G__43607;
count__43578_43596 = G__43608;
i__43579_43597 = G__43609;
continue;
} else {
var r_43610 = cljs.core.first(seq__43576_43604__$1);
instaparse.failure.print_reason(r_43610);

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" (followed by end-of-string)"], 0));


var G__43612 = cljs.core.next(seq__43576_43604__$1);
var G__43613 = null;
var G__43614 = (0);
var G__43615 = (0);
seq__43576_43594 = G__43612;
chunk__43577_43595 = G__43613;
count__43578_43596 = G__43614;
i__43579_43597 = G__43615;
continue;
}
} else {
}
}
break;
}

var seq__43580 = cljs.core.seq(partial_reasons);
var chunk__43581 = null;
var count__43582 = (0);
var i__43583 = (0);
while(true){
if((i__43583 < count__43582)){
var r = chunk__43581.cljs$core$IIndexed$_nth$arity$2(null,i__43583);
instaparse.failure.print_reason(r);

cljs.core.println();


var G__43616 = seq__43580;
var G__43617 = chunk__43581;
var G__43618 = count__43582;
var G__43619 = (i__43583 + (1));
seq__43580 = G__43616;
chunk__43581 = G__43617;
count__43582 = G__43618;
i__43583 = G__43619;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__43580);
if(temp__5735__auto__){
var seq__43580__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__43580__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__43580__$1);
var G__43621 = cljs.core.chunk_rest(seq__43580__$1);
var G__43622 = c__4556__auto__;
var G__43623 = cljs.core.count(c__4556__auto__);
var G__43624 = (0);
seq__43580 = G__43621;
chunk__43581 = G__43622;
count__43582 = G__43623;
i__43583 = G__43624;
continue;
} else {
var r = cljs.core.first(seq__43580__$1);
instaparse.failure.print_reason(r);

cljs.core.println();


var G__43626 = cljs.core.next(seq__43580__$1);
var G__43627 = null;
var G__43628 = (0);
var G__43629 = (0);
seq__43580 = G__43626;
chunk__43581 = G__43627;
count__43582 = G__43628;
i__43583 = G__43629;
continue;
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=instaparse.failure.js.map
