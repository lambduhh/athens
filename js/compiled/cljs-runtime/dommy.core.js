goog.provide('dommy.core');
/**
 * Returns a selector in string format.
 * Accepts string, keyword, or collection.
 */
dommy.core.selector = (function dommy$core$selector(data){
if(cljs.core.coll_QMARK_(data)){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(dommy.core.selector,data));
} else {
if(((typeof data === 'string') || ((data instanceof cljs.core.Keyword)))){
return cljs.core.name(data);
} else {
return null;
}
}
});
dommy.core.text = (function dommy$core$text(elem){
var or__4126__auto__ = elem.textContent;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return elem.innerText;
}
});
dommy.core.html = (function dommy$core$html(elem){
return elem.innerHTML;
});
dommy.core.value = (function dommy$core$value(elem){
return elem.value;
});
dommy.core.class$ = (function dommy$core$class(elem){
return elem.className;
});
dommy.core.attr = (function dommy$core$attr(elem,k){
if(cljs.core.truth_(k)){
return elem.getAttribute(dommy.utils.as_str(k));
} else {
return null;
}
});
/**
 * The computed style of `elem`, optionally specifying the key of
 * a particular style to return
 */
dommy.core.style = (function dommy$core$style(var_args){
var G__51429 = arguments.length;
switch (G__51429) {
case 1:
return dommy.core.style.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.style.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dommy.core.style.cljs$core$IFn$_invoke$arity$1 = (function (elem){
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(window.getComputedStyle(elem));
}));

(dommy.core.style.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return (window.getComputedStyle(elem)[dommy.utils.as_str(k)]);
}));

(dommy.core.style.cljs$lang$maxFixedArity = 2);

dommy.core.px = (function dommy$core$px(elem,k){

var pixels = dommy.core.style.cljs$core$IFn$_invoke$arity$2(elem,k);
if(cljs.core.seq(pixels)){
return parseInt(pixels);
} else {
return null;
}
});
/**
 * Does `elem` contain `c` in its class list
 */
dommy.core.has_class_QMARK_ = (function dommy$core$has_class_QMARK_(elem,c){
var c__$1 = dommy.utils.as_str(c);
var temp__5733__auto__ = elem.classList;
if(cljs.core.truth_(temp__5733__auto__)){
var class_list = temp__5733__auto__;
return class_list.contains(c__$1);
} else {
var temp__5735__auto__ = dommy.core.class$(elem);
if(cljs.core.truth_(temp__5735__auto__)){
var class_name = temp__5735__auto__;
var temp__5735__auto____$1 = dommy.utils.class_index(class_name,c__$1);
if(cljs.core.truth_(temp__5735__auto____$1)){
var i = temp__5735__auto____$1;
return (i >= (0));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Is `elem` hidden (as associated with hide!/show!/toggle!, using display: none)
 */
dommy.core.hidden_QMARK_ = (function dommy$core$hidden_QMARK_(elem){
return (dommy.core.style.cljs$core$IFn$_invoke$arity$2(elem,new cljs.core.Keyword(null,"display","display",242065432)) === "none");
});
/**
 * Returns a map of the bounding client rect of `elem`
 * as a map with [:top :left :right :bottom :width :height]
 */
dommy.core.bounding_client_rect = (function dommy$core$bounding_client_rect(elem){
var r = elem.getBoundingClientRect();
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"top","top",-1856271961),r.top,new cljs.core.Keyword(null,"bottom","bottom",-1550509018),r.bottom,new cljs.core.Keyword(null,"left","left",-399115937),r.left,new cljs.core.Keyword(null,"right","right",-452581833),r.right,new cljs.core.Keyword(null,"width","width",-384071477),r.width,new cljs.core.Keyword(null,"height","height",1025178622),r.height], null);
});
dommy.core.parent = (function dommy$core$parent(elem){
return elem.parentNode;
});
dommy.core.children = (function dommy$core$children(elem){
return elem.children;
});
/**
 * Lazy seq of the ancestors of `elem`
 */
dommy.core.ancestors = (function dommy$core$ancestors(elem){
return cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.iterate(dommy.core.parent,elem));
});
dommy.core.ancestor_nodes = dommy.core.ancestors;
/**
 * Returns a predicate on nodes that match `selector` at the
 * time of this `matches-pred` call (may return outdated results
 * if you fuck with the DOM)
 */
dommy.core.matches_pred = (function dommy$core$matches_pred(var_args){
var G__51437 = arguments.length;
switch (G__51437) {
case 2:
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2 = (function (base,selector){
var matches = dommy.utils.__GT_Array(base.querySelectorAll(dommy.core.selector(selector)));
return (function (elem){
return (matches.indexOf(elem) >= (0));
});
}));

(dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$1 = (function (selector){
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2(document,selector);
}));

(dommy.core.matches_pred.cljs$lang$maxFixedArity = 2);

/**
 * Closest ancestor of `elem` (up to `base`, if provided)
 * that matches `selector`
 */
dommy.core.closest = (function dommy$core$closest(var_args){
var G__51442 = arguments.length;
switch (G__51442) {
case 3:
return dommy.core.closest.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return dommy.core.closest.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dommy.core.closest.cljs$core$IFn$_invoke$arity$3 = (function (base,elem,selector){
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2(base,selector),cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__51440_SHARP_){
return (!((p1__51440_SHARP_ === base)));
}),dommy.core.ancestors(elem))));
}));

(dommy.core.closest.cljs$core$IFn$_invoke$arity$2 = (function (elem,selector){
return dommy.core.closest.cljs$core$IFn$_invoke$arity$3(document.body,elem,selector);
}));

(dommy.core.closest.cljs$lang$maxFixedArity = 3);

/**
 * Is `descendant` a descendant of `ancestor`?
 * (http://goo.gl/T8pgCX)
 */
dommy.core.descendant_QMARK_ = (function dommy$core$descendant_QMARK_(descendant,ancestor){
if(cljs.core.truth_(ancestor.contains)){
return ancestor.contains(descendant);
} else {
if(cljs.core.truth_(ancestor.compareDocumentPosition)){
return ((ancestor.compareDocumentPosition(descendant) & (1 << (4))) != 0);
} else {
return null;
}
}
});
/**
 * Set the textContent of `elem` to `text`, fall back to innerText
 */
dommy.core.set_text_BANG_ = (function dommy$core$set_text_BANG_(elem,text){
if((!((void 0 === elem.textContent)))){
(elem.textContent = text);
} else {
(elem.innerText = text);
}

return elem;
});
/**
 * Set the innerHTML of `elem` to `html`
 */
dommy.core.set_html_BANG_ = (function dommy$core$set_html_BANG_(elem,html){
(elem.innerHTML = html);

return elem;
});
/**
 * Set the value of `elem` to `value`
 */
dommy.core.set_value_BANG_ = (function dommy$core$set_value_BANG_(elem,value){
(elem.value = value);

return elem;
});
/**
 * Set the css class of `elem` to `elem`
 */
dommy.core.set_class_BANG_ = (function dommy$core$set_class_BANG_(elem,c){
return (elem.className = c);
});
/**
 * Set the style of `elem` using key-value pairs:
 * 
 *    (set-style! elem :display "block" :color "red")
 */
dommy.core.set_style_BANG_ = (function dommy$core$set_style_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___51809 = arguments.length;
var i__4737__auto___51810 = (0);
while(true){
if((i__4737__auto___51810 < len__4736__auto___51809)){
args__4742__auto__.push((arguments[i__4737__auto___51810]));

var G__51811 = (i__4737__auto___51810 + (1));
i__4737__auto___51810 = G__51811;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,kvs){
if(cljs.core.even_QMARK_(cljs.core.count(kvs))){
} else {
throw (new Error("Assert failed: (even? (count kvs))"));
}

var style = elem.style;
var seq__51449_51813 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__51450_51814 = null;
var count__51451_51815 = (0);
var i__51452_51816 = (0);
while(true){
if((i__51452_51816 < count__51451_51815)){
var vec__51459_51817 = chunk__51450_51814.cljs$core$IIndexed$_nth$arity$2(null,i__51452_51816);
var k_51818 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51459_51817,(0),null);
var v_51819 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51459_51817,(1),null);
style.setProperty(dommy.utils.as_str(k_51818),v_51819);


var G__51820 = seq__51449_51813;
var G__51821 = chunk__51450_51814;
var G__51822 = count__51451_51815;
var G__51823 = (i__51452_51816 + (1));
seq__51449_51813 = G__51820;
chunk__51450_51814 = G__51821;
count__51451_51815 = G__51822;
i__51452_51816 = G__51823;
continue;
} else {
var temp__5735__auto___51824 = cljs.core.seq(seq__51449_51813);
if(temp__5735__auto___51824){
var seq__51449_51825__$1 = temp__5735__auto___51824;
if(cljs.core.chunked_seq_QMARK_(seq__51449_51825__$1)){
var c__4556__auto___51826 = cljs.core.chunk_first(seq__51449_51825__$1);
var G__51827 = cljs.core.chunk_rest(seq__51449_51825__$1);
var G__51828 = c__4556__auto___51826;
var G__51829 = cljs.core.count(c__4556__auto___51826);
var G__51830 = (0);
seq__51449_51813 = G__51827;
chunk__51450_51814 = G__51828;
count__51451_51815 = G__51829;
i__51452_51816 = G__51830;
continue;
} else {
var vec__51462_51831 = cljs.core.first(seq__51449_51825__$1);
var k_51832 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51462_51831,(0),null);
var v_51833 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51462_51831,(1),null);
style.setProperty(dommy.utils.as_str(k_51832),v_51833);


var G__51838 = cljs.core.next(seq__51449_51825__$1);
var G__51839 = null;
var G__51840 = (0);
var G__51841 = (0);
seq__51449_51813 = G__51838;
chunk__51450_51814 = G__51839;
count__51451_51815 = G__51840;
i__51452_51816 = G__51841;
continue;
}
} else {
}
}
break;
}

return elem;
}));

(dommy.core.set_style_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(dommy.core.set_style_BANG_.cljs$lang$applyTo = (function (seq51447){
var G__51448 = cljs.core.first(seq51447);
var seq51447__$1 = cljs.core.next(seq51447);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__51448,seq51447__$1);
}));

/**
 * Remove the style of `elem` using keywords:
 *   
 *    (remove-style! elem :display :color)
 */
dommy.core.remove_style_BANG_ = (function dommy$core$remove_style_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___51842 = arguments.length;
var i__4737__auto___51843 = (0);
while(true){
if((i__4737__auto___51843 < len__4736__auto___51842)){
args__4742__auto__.push((arguments[i__4737__auto___51843]));

var G__51845 = (i__4737__auto___51843 + (1));
i__4737__auto___51843 = G__51845;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,keywords){
var style = elem.style;
var seq__51467_51849 = cljs.core.seq(keywords);
var chunk__51468_51850 = null;
var count__51469_51851 = (0);
var i__51470_51852 = (0);
while(true){
if((i__51470_51852 < count__51469_51851)){
var kw_51853 = chunk__51468_51850.cljs$core$IIndexed$_nth$arity$2(null,i__51470_51852);
style.removeProperty(dommy.utils.as_str(kw_51853));


var G__51854 = seq__51467_51849;
var G__51855 = chunk__51468_51850;
var G__51856 = count__51469_51851;
var G__51857 = (i__51470_51852 + (1));
seq__51467_51849 = G__51854;
chunk__51468_51850 = G__51855;
count__51469_51851 = G__51856;
i__51470_51852 = G__51857;
continue;
} else {
var temp__5735__auto___51859 = cljs.core.seq(seq__51467_51849);
if(temp__5735__auto___51859){
var seq__51467_51860__$1 = temp__5735__auto___51859;
if(cljs.core.chunked_seq_QMARK_(seq__51467_51860__$1)){
var c__4556__auto___51861 = cljs.core.chunk_first(seq__51467_51860__$1);
var G__51862 = cljs.core.chunk_rest(seq__51467_51860__$1);
var G__51863 = c__4556__auto___51861;
var G__51864 = cljs.core.count(c__4556__auto___51861);
var G__51865 = (0);
seq__51467_51849 = G__51862;
chunk__51468_51850 = G__51863;
count__51469_51851 = G__51864;
i__51470_51852 = G__51865;
continue;
} else {
var kw_51866 = cljs.core.first(seq__51467_51860__$1);
style.removeProperty(dommy.utils.as_str(kw_51866));


var G__51869 = cljs.core.next(seq__51467_51860__$1);
var G__51870 = null;
var G__51871 = (0);
var G__51872 = (0);
seq__51467_51849 = G__51869;
chunk__51468_51850 = G__51870;
count__51469_51851 = G__51871;
i__51470_51852 = G__51872;
continue;
}
} else {
}
}
break;
}

return elem;
}));

(dommy.core.remove_style_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(dommy.core.remove_style_BANG_.cljs$lang$applyTo = (function (seq51465){
var G__51466 = cljs.core.first(seq51465);
var seq51465__$1 = cljs.core.next(seq51465);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__51466,seq51465__$1);
}));

dommy.core.set_px_BANG_ = (function dommy$core$set_px_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___51874 = arguments.length;
var i__4737__auto___51875 = (0);
while(true){
if((i__4737__auto___51875 < len__4736__auto___51874)){
args__4742__auto__.push((arguments[i__4737__auto___51875]));

var G__51876 = (i__4737__auto___51875 + (1));
i__4737__auto___51875 = G__51876;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,kvs){

if(cljs.core.even_QMARK_(cljs.core.count(kvs))){
} else {
throw (new Error("Assert failed: (even? (count kvs))"));
}

var seq__51473_51878 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__51474_51879 = null;
var count__51475_51880 = (0);
var i__51476_51881 = (0);
while(true){
if((i__51476_51881 < count__51475_51880)){
var vec__51483_51882 = chunk__51474_51879.cljs$core$IIndexed$_nth$arity$2(null,i__51476_51881);
var k_51883 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51483_51882,(0),null);
var v_51884 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51483_51882,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_51883,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_51884),"px"].join('')], 0));


var G__51885 = seq__51473_51878;
var G__51886 = chunk__51474_51879;
var G__51887 = count__51475_51880;
var G__51888 = (i__51476_51881 + (1));
seq__51473_51878 = G__51885;
chunk__51474_51879 = G__51886;
count__51475_51880 = G__51887;
i__51476_51881 = G__51888;
continue;
} else {
var temp__5735__auto___51889 = cljs.core.seq(seq__51473_51878);
if(temp__5735__auto___51889){
var seq__51473_51890__$1 = temp__5735__auto___51889;
if(cljs.core.chunked_seq_QMARK_(seq__51473_51890__$1)){
var c__4556__auto___51891 = cljs.core.chunk_first(seq__51473_51890__$1);
var G__51892 = cljs.core.chunk_rest(seq__51473_51890__$1);
var G__51893 = c__4556__auto___51891;
var G__51894 = cljs.core.count(c__4556__auto___51891);
var G__51895 = (0);
seq__51473_51878 = G__51892;
chunk__51474_51879 = G__51893;
count__51475_51880 = G__51894;
i__51476_51881 = G__51895;
continue;
} else {
var vec__51486_51896 = cljs.core.first(seq__51473_51890__$1);
var k_51897 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51486_51896,(0),null);
var v_51898 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51486_51896,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_51897,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_51898),"px"].join('')], 0));


var G__51900 = cljs.core.next(seq__51473_51890__$1);
var G__51901 = null;
var G__51902 = (0);
var G__51903 = (0);
seq__51473_51878 = G__51900;
chunk__51474_51879 = G__51901;
count__51475_51880 = G__51902;
i__51476_51881 = G__51903;
continue;
}
} else {
}
}
break;
}

return elem;
}));

(dommy.core.set_px_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(dommy.core.set_px_BANG_.cljs$lang$applyTo = (function (seq51471){
var G__51472 = cljs.core.first(seq51471);
var seq51471__$1 = cljs.core.next(seq51471);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__51472,seq51471__$1);
}));

/**
 * Sets dom attributes on and returns `elem`.
 * Attributes without values will be set to their name:
 * 
 *     (set-attr! elem :disabled)
 * 
 * With values, the function takes variadic kv pairs:
 * 
 *     (set-attr! elem :id "some-id"
 *                     :name "some-name")
 */
dommy.core.set_attr_BANG_ = (function dommy$core$set_attr_BANG_(var_args){
var G__51494 = arguments.length;
switch (G__51494) {
case 2:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___51907 = arguments.length;
var i__4737__auto___51908 = (0);
while(true){
if((i__4737__auto___51908 < len__4736__auto___51907)){
args_arr__4757__auto__.push((arguments[i__4737__auto___51908]));

var G__51909 = (i__4737__auto___51908 + (1));
i__4737__auto___51908 = G__51909;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((3)),(0),null));
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4758__auto__);

}
});

(dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k,dommy.utils.as_str(k));
}));

(dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,k,v){
var k__$1 = dommy.utils.as_str(k);
if(cljs.core.truth_(v)){
if(cljs.core.fn_QMARK_(v)){
var G__51495 = elem;
(G__51495[k__$1] = v);

return G__51495;
} else {
var G__51496 = elem;
G__51496.setAttribute(k__$1,v);

return G__51496;
}
} else {
return null;
}
}));

(dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,v,kvs){
if(cljs.core.even_QMARK_(cljs.core.count(kvs))){
} else {
throw (new Error("Assert failed: (even? (count kvs))"));
}

var seq__51497_51910 = cljs.core.seq(cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs)));
var chunk__51498_51911 = null;
var count__51499_51912 = (0);
var i__51500_51913 = (0);
while(true){
if((i__51500_51913 < count__51499_51912)){
var vec__51507_51914 = chunk__51498_51911.cljs$core$IIndexed$_nth$arity$2(null,i__51500_51913);
var k_51915__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51507_51914,(0),null);
var v_51916__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51507_51914,(1),null);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_51915__$1,v_51916__$1);


var G__51917 = seq__51497_51910;
var G__51918 = chunk__51498_51911;
var G__51919 = count__51499_51912;
var G__51920 = (i__51500_51913 + (1));
seq__51497_51910 = G__51917;
chunk__51498_51911 = G__51918;
count__51499_51912 = G__51919;
i__51500_51913 = G__51920;
continue;
} else {
var temp__5735__auto___51921 = cljs.core.seq(seq__51497_51910);
if(temp__5735__auto___51921){
var seq__51497_51922__$1 = temp__5735__auto___51921;
if(cljs.core.chunked_seq_QMARK_(seq__51497_51922__$1)){
var c__4556__auto___51923 = cljs.core.chunk_first(seq__51497_51922__$1);
var G__51924 = cljs.core.chunk_rest(seq__51497_51922__$1);
var G__51925 = c__4556__auto___51923;
var G__51926 = cljs.core.count(c__4556__auto___51923);
var G__51927 = (0);
seq__51497_51910 = G__51924;
chunk__51498_51911 = G__51925;
count__51499_51912 = G__51926;
i__51500_51913 = G__51927;
continue;
} else {
var vec__51510_51928 = cljs.core.first(seq__51497_51922__$1);
var k_51929__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51510_51928,(0),null);
var v_51930__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51510_51928,(1),null);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_51929__$1,v_51930__$1);


var G__51931 = cljs.core.next(seq__51497_51922__$1);
var G__51932 = null;
var G__51933 = (0);
var G__51934 = (0);
seq__51497_51910 = G__51931;
chunk__51498_51911 = G__51932;
count__51499_51912 = G__51933;
i__51500_51913 = G__51934;
continue;
}
} else {
}
}
break;
}

return elem;
}));

/** @this {Function} */
(dommy.core.set_attr_BANG_.cljs$lang$applyTo = (function (seq51490){
var G__51491 = cljs.core.first(seq51490);
var seq51490__$1 = cljs.core.next(seq51490);
var G__51492 = cljs.core.first(seq51490__$1);
var seq51490__$2 = cljs.core.next(seq51490__$1);
var G__51493 = cljs.core.first(seq51490__$2);
var seq51490__$3 = cljs.core.next(seq51490__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__51491,G__51492,G__51493,seq51490__$3);
}));

(dommy.core.set_attr_BANG_.cljs$lang$maxFixedArity = (3));

/**
 * Removes dom attributes on and returns `elem`.
 * `class` and `classes` are special cases which clear
 * out the class name on removal.
 */
dommy.core.remove_attr_BANG_ = (function dommy$core$remove_attr_BANG_(var_args){
var G__51517 = arguments.length;
switch (G__51517) {
case 2:
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___51936 = arguments.length;
var i__4737__auto___51937 = (0);
while(true){
if((i__4737__auto___51937 < len__4736__auto___51936)){
args_arr__4757__auto__.push((arguments[i__4737__auto___51937]));

var G__51938 = (i__4737__auto___51937 + (1));
i__4737__auto___51937 = G__51938;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((2)),(0),null));
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4758__auto__);

}
});

(dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
var k_51939__$1 = dommy.utils.as_str(k);
if(cljs.core.truth_((function (){var fexpr__51518 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["class",null,"classes",null], null), null);
return (fexpr__51518.cljs$core$IFn$_invoke$arity$1 ? fexpr__51518.cljs$core$IFn$_invoke$arity$1(k_51939__$1) : fexpr__51518.call(null,k_51939__$1));
})())){
dommy.core.set_class_BANG_(elem,"");
} else {
elem.removeAttribute(k_51939__$1);
}

return elem;
}));

(dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,ks){
var seq__51519_51940 = cljs.core.seq(cljs.core.cons(k,ks));
var chunk__51520_51941 = null;
var count__51521_51942 = (0);
var i__51522_51943 = (0);
while(true){
if((i__51522_51943 < count__51521_51942)){
var k_51948__$1 = chunk__51520_51941.cljs$core$IIndexed$_nth$arity$2(null,i__51522_51943);
dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_51948__$1);


var G__51949 = seq__51519_51940;
var G__51950 = chunk__51520_51941;
var G__51951 = count__51521_51942;
var G__51952 = (i__51522_51943 + (1));
seq__51519_51940 = G__51949;
chunk__51520_51941 = G__51950;
count__51521_51942 = G__51951;
i__51522_51943 = G__51952;
continue;
} else {
var temp__5735__auto___51957 = cljs.core.seq(seq__51519_51940);
if(temp__5735__auto___51957){
var seq__51519_51958__$1 = temp__5735__auto___51957;
if(cljs.core.chunked_seq_QMARK_(seq__51519_51958__$1)){
var c__4556__auto___51959 = cljs.core.chunk_first(seq__51519_51958__$1);
var G__51964 = cljs.core.chunk_rest(seq__51519_51958__$1);
var G__51965 = c__4556__auto___51959;
var G__51966 = cljs.core.count(c__4556__auto___51959);
var G__51967 = (0);
seq__51519_51940 = G__51964;
chunk__51520_51941 = G__51965;
count__51521_51942 = G__51966;
i__51522_51943 = G__51967;
continue;
} else {
var k_51968__$1 = cljs.core.first(seq__51519_51958__$1);
dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_51968__$1);


var G__51969 = cljs.core.next(seq__51519_51958__$1);
var G__51970 = null;
var G__51971 = (0);
var G__51972 = (0);
seq__51519_51940 = G__51969;
chunk__51520_51941 = G__51970;
count__51521_51942 = G__51971;
i__51522_51943 = G__51972;
continue;
}
} else {
}
}
break;
}

return elem;
}));

/** @this {Function} */
(dommy.core.remove_attr_BANG_.cljs$lang$applyTo = (function (seq51514){
var G__51515 = cljs.core.first(seq51514);
var seq51514__$1 = cljs.core.next(seq51514);
var G__51516 = cljs.core.first(seq51514__$1);
var seq51514__$2 = cljs.core.next(seq51514__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__51515,G__51516,seq51514__$2);
}));

(dommy.core.remove_attr_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Toggles a dom attribute `k` on `elem`, optionally specifying
 * the boolean value with `add?`
 */
dommy.core.toggle_attr_BANG_ = (function dommy$core$toggle_attr_BANG_(var_args){
var G__51524 = arguments.length;
switch (G__51524) {
case 2:
return dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k,cljs.core.boolean$(dommy.core.attr(elem,k)));
}));

(dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,k,add_QMARK_){
if(add_QMARK_){
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k);
} else {
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k);
}
}));

(dommy.core.toggle_attr_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Add `classes` to `elem`, trying to use Element::classList, and
 * falling back to fast string parsing/manipulation
 */
dommy.core.add_class_BANG_ = (function dommy$core$add_class_BANG_(var_args){
var G__51529 = arguments.length;
switch (G__51529) {
case 2:
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___51977 = arguments.length;
var i__4737__auto___51978 = (0);
while(true){
if((i__4737__auto___51978 < len__4736__auto___51977)){
args_arr__4757__auto__.push((arguments[i__4737__auto___51978]));

var G__51979 = (i__4737__auto___51978 + (1));
i__4737__auto___51978 = G__51979;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((2)),(0),null));
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4758__auto__);

}
});

(dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,classes){
var classes__$1 = clojure.string.trim(dommy.utils.as_str(classes)).split(/\s+/);
if(cljs.core.seq(classes__$1)){
var temp__5733__auto___51982 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___51982)){
var class_list_51983 = temp__5733__auto___51982;
var seq__51530_51984 = cljs.core.seq(classes__$1);
var chunk__51531_51985 = null;
var count__51532_51986 = (0);
var i__51533_51987 = (0);
while(true){
if((i__51533_51987 < count__51532_51986)){
var c_51989 = chunk__51531_51985.cljs$core$IIndexed$_nth$arity$2(null,i__51533_51987);
class_list_51983.add(c_51989);


var G__51990 = seq__51530_51984;
var G__51991 = chunk__51531_51985;
var G__51992 = count__51532_51986;
var G__51993 = (i__51533_51987 + (1));
seq__51530_51984 = G__51990;
chunk__51531_51985 = G__51991;
count__51532_51986 = G__51992;
i__51533_51987 = G__51993;
continue;
} else {
var temp__5735__auto___51994 = cljs.core.seq(seq__51530_51984);
if(temp__5735__auto___51994){
var seq__51530_51995__$1 = temp__5735__auto___51994;
if(cljs.core.chunked_seq_QMARK_(seq__51530_51995__$1)){
var c__4556__auto___51996 = cljs.core.chunk_first(seq__51530_51995__$1);
var G__51997 = cljs.core.chunk_rest(seq__51530_51995__$1);
var G__51998 = c__4556__auto___51996;
var G__51999 = cljs.core.count(c__4556__auto___51996);
var G__52000 = (0);
seq__51530_51984 = G__51997;
chunk__51531_51985 = G__51998;
count__51532_51986 = G__51999;
i__51533_51987 = G__52000;
continue;
} else {
var c_52001 = cljs.core.first(seq__51530_51995__$1);
class_list_51983.add(c_52001);


var G__52002 = cljs.core.next(seq__51530_51995__$1);
var G__52003 = null;
var G__52004 = (0);
var G__52005 = (0);
seq__51530_51984 = G__52002;
chunk__51531_51985 = G__52003;
count__51532_51986 = G__52004;
i__51533_51987 = G__52005;
continue;
}
} else {
}
}
break;
}
} else {
var seq__51534_52006 = cljs.core.seq(classes__$1);
var chunk__51535_52007 = null;
var count__51536_52008 = (0);
var i__51537_52009 = (0);
while(true){
if((i__51537_52009 < count__51536_52008)){
var c_52010 = chunk__51535_52007.cljs$core$IIndexed$_nth$arity$2(null,i__51537_52009);
var class_name_52011 = dommy.core.class$(elem);
if(cljs.core.truth_(dommy.utils.class_index(class_name_52011,c_52010))){
} else {
dommy.core.set_class_BANG_(elem,(((class_name_52011 === ""))?c_52010:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_52011)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_52010)].join('')));
}


var G__52012 = seq__51534_52006;
var G__52013 = chunk__51535_52007;
var G__52014 = count__51536_52008;
var G__52015 = (i__51537_52009 + (1));
seq__51534_52006 = G__52012;
chunk__51535_52007 = G__52013;
count__51536_52008 = G__52014;
i__51537_52009 = G__52015;
continue;
} else {
var temp__5735__auto___52016 = cljs.core.seq(seq__51534_52006);
if(temp__5735__auto___52016){
var seq__51534_52017__$1 = temp__5735__auto___52016;
if(cljs.core.chunked_seq_QMARK_(seq__51534_52017__$1)){
var c__4556__auto___52018 = cljs.core.chunk_first(seq__51534_52017__$1);
var G__52019 = cljs.core.chunk_rest(seq__51534_52017__$1);
var G__52020 = c__4556__auto___52018;
var G__52021 = cljs.core.count(c__4556__auto___52018);
var G__52022 = (0);
seq__51534_52006 = G__52019;
chunk__51535_52007 = G__52020;
count__51536_52008 = G__52021;
i__51537_52009 = G__52022;
continue;
} else {
var c_52023 = cljs.core.first(seq__51534_52017__$1);
var class_name_52024 = dommy.core.class$(elem);
if(cljs.core.truth_(dommy.utils.class_index(class_name_52024,c_52023))){
} else {
dommy.core.set_class_BANG_(elem,(((class_name_52024 === ""))?c_52023:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_52024)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_52023)].join('')));
}


var G__52025 = cljs.core.next(seq__51534_52017__$1);
var G__52026 = null;
var G__52027 = (0);
var G__52028 = (0);
seq__51534_52006 = G__52025;
chunk__51535_52007 = G__52026;
count__51536_52008 = G__52027;
i__51537_52009 = G__52028;
continue;
}
} else {
}
}
break;
}
}
} else {
}

return elem;
}));

(dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,classes,more_classes){
var seq__51538_52029 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(more_classes,classes));
var chunk__51539_52030 = null;
var count__51540_52031 = (0);
var i__51541_52032 = (0);
while(true){
if((i__51541_52032 < count__51540_52031)){
var c_52033 = chunk__51539_52030.cljs$core$IIndexed$_nth$arity$2(null,i__51541_52032);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_52033);


var G__52034 = seq__51538_52029;
var G__52035 = chunk__51539_52030;
var G__52036 = count__51540_52031;
var G__52037 = (i__51541_52032 + (1));
seq__51538_52029 = G__52034;
chunk__51539_52030 = G__52035;
count__51540_52031 = G__52036;
i__51541_52032 = G__52037;
continue;
} else {
var temp__5735__auto___52038 = cljs.core.seq(seq__51538_52029);
if(temp__5735__auto___52038){
var seq__51538_52039__$1 = temp__5735__auto___52038;
if(cljs.core.chunked_seq_QMARK_(seq__51538_52039__$1)){
var c__4556__auto___52040 = cljs.core.chunk_first(seq__51538_52039__$1);
var G__52041 = cljs.core.chunk_rest(seq__51538_52039__$1);
var G__52042 = c__4556__auto___52040;
var G__52043 = cljs.core.count(c__4556__auto___52040);
var G__52044 = (0);
seq__51538_52029 = G__52041;
chunk__51539_52030 = G__52042;
count__51540_52031 = G__52043;
i__51541_52032 = G__52044;
continue;
} else {
var c_52045 = cljs.core.first(seq__51538_52039__$1);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_52045);


var G__52046 = cljs.core.next(seq__51538_52039__$1);
var G__52047 = null;
var G__52048 = (0);
var G__52049 = (0);
seq__51538_52029 = G__52046;
chunk__51539_52030 = G__52047;
count__51540_52031 = G__52048;
i__51541_52032 = G__52049;
continue;
}
} else {
}
}
break;
}

return elem;
}));

/** @this {Function} */
(dommy.core.add_class_BANG_.cljs$lang$applyTo = (function (seq51526){
var G__51527 = cljs.core.first(seq51526);
var seq51526__$1 = cljs.core.next(seq51526);
var G__51528 = cljs.core.first(seq51526__$1);
var seq51526__$2 = cljs.core.next(seq51526__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__51527,G__51528,seq51526__$2);
}));

(dommy.core.add_class_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Remove `c` from `elem` class list
 */
dommy.core.remove_class_BANG_ = (function dommy$core$remove_class_BANG_(var_args){
var G__51546 = arguments.length;
switch (G__51546) {
case 2:
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___52051 = arguments.length;
var i__4737__auto___52052 = (0);
while(true){
if((i__4737__auto___52052 < len__4736__auto___52051)){
args_arr__4757__auto__.push((arguments[i__4737__auto___52052]));

var G__52053 = (i__4737__auto___52052 + (1));
i__4737__auto___52052 = G__52053;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((2)),(0),null));
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4758__auto__);

}
});

(dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,c){
var c__$1 = dommy.utils.as_str(c);
var temp__5733__auto___52054 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___52054)){
var class_list_52055 = temp__5733__auto___52054;
class_list_52055.remove(c__$1);
} else {
var class_name_52056 = dommy.core.class$(elem);
var new_class_name_52057 = dommy.utils.remove_class_str(class_name_52056,c__$1);
if((class_name_52056 === new_class_name_52057)){
} else {
dommy.core.set_class_BANG_(elem,new_class_name_52057);
}
}

return elem;
}));

(dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,class$,classes){
var seq__51547 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(classes,class$));
var chunk__51548 = null;
var count__51549 = (0);
var i__51550 = (0);
while(true){
if((i__51550 < count__51549)){
var c = chunk__51548.cljs$core$IIndexed$_nth$arity$2(null,i__51550);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c);


var G__52058 = seq__51547;
var G__52059 = chunk__51548;
var G__52060 = count__51549;
var G__52061 = (i__51550 + (1));
seq__51547 = G__52058;
chunk__51548 = G__52059;
count__51549 = G__52060;
i__51550 = G__52061;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__51547);
if(temp__5735__auto__){
var seq__51547__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51547__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__51547__$1);
var G__52062 = cljs.core.chunk_rest(seq__51547__$1);
var G__52063 = c__4556__auto__;
var G__52064 = cljs.core.count(c__4556__auto__);
var G__52065 = (0);
seq__51547 = G__52062;
chunk__51548 = G__52063;
count__51549 = G__52064;
i__51550 = G__52065;
continue;
} else {
var c = cljs.core.first(seq__51547__$1);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c);


var G__52066 = cljs.core.next(seq__51547__$1);
var G__52067 = null;
var G__52068 = (0);
var G__52069 = (0);
seq__51547 = G__52066;
chunk__51548 = G__52067;
count__51549 = G__52068;
i__51550 = G__52069;
continue;
}
} else {
return null;
}
}
break;
}
}));

/** @this {Function} */
(dommy.core.remove_class_BANG_.cljs$lang$applyTo = (function (seq51543){
var G__51544 = cljs.core.first(seq51543);
var seq51543__$1 = cljs.core.next(seq51543);
var G__51545 = cljs.core.first(seq51543__$1);
var seq51543__$2 = cljs.core.next(seq51543__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__51544,G__51545,seq51543__$2);
}));

(dommy.core.remove_class_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * (toggle-class! elem class) will add-class! if elem does not have class
 * and remove-class! otherwise.
 * (toggle-class! elem class add?) will add-class! if add? is truthy,
 * otherwise it will remove-class!
 */
dommy.core.toggle_class_BANG_ = (function dommy$core$toggle_class_BANG_(var_args){
var G__51552 = arguments.length;
switch (G__51552) {
case 2:
return dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,c){
var c__$1 = dommy.utils.as_str(c);
var temp__5733__auto___52071 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___52071)){
var class_list_52072 = temp__5733__auto___52071;
class_list_52072.toggle(c__$1);
} else {
dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3(elem,c__$1,(!(dommy.core.has_class_QMARK_(elem,c__$1))));
}

return elem;
}));

(dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,class$,add_QMARK_){
if(add_QMARK_){
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,class$);
} else {
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,class$);
}

return elem;
}));

(dommy.core.toggle_class_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Display or hide the given `elem` (using display: none).
 * Takes an optional boolean `show?`
 */
dommy.core.toggle_BANG_ = (function dommy$core$toggle_BANG_(var_args){
var G__51554 = arguments.length;
switch (G__51554) {
case 2:
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,show_QMARK_){
return dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"display","display",242065432),((show_QMARK_)?"":"none")], 0));
}));

(dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (elem){
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2(elem,dommy.core.hidden_QMARK_(elem));
}));

(dommy.core.toggle_BANG_.cljs$lang$maxFixedArity = 2);

dommy.core.hide_BANG_ = (function dommy$core$hide_BANG_(elem){
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2(elem,false);
});
dommy.core.show_BANG_ = (function dommy$core$show_BANG_(elem){
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2(elem,true);
});
dommy.core.scroll_into_view = (function dommy$core$scroll_into_view(elem,align_with_top_QMARK_){
var top = new cljs.core.Keyword(null,"top","top",-1856271961).cljs$core$IFn$_invoke$arity$1(dommy.core.bounding_client_rect(elem));
if((window.innerHeight < (top + elem.offsetHeight))){
return elem.scrollIntoView(align_with_top_QMARK_);
} else {
return null;
}
});
dommy.core.create_element = (function dommy$core$create_element(var_args){
var G__51556 = arguments.length;
switch (G__51556) {
case 1:
return dommy.core.create_element.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.create_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dommy.core.create_element.cljs$core$IFn$_invoke$arity$1 = (function (tag){
return document.createElement(dommy.utils.as_str(tag));
}));

(dommy.core.create_element.cljs$core$IFn$_invoke$arity$2 = (function (tag_ns,tag){
return document.createElementNS(dommy.utils.as_str(tag_ns),dommy.utils.as_str(tag));
}));

(dommy.core.create_element.cljs$lang$maxFixedArity = 2);

dommy.core.create_text_node = (function dommy$core$create_text_node(text){
return document.createTextNode(text);
});
/**
 * Clears all children from `elem`
 */
dommy.core.clear_BANG_ = (function dommy$core$clear_BANG_(elem){
return dommy.core.set_html_BANG_(elem,"");
});
/**
 * Append `child` to `parent`
 */
dommy.core.append_BANG_ = (function dommy$core$append_BANG_(var_args){
var G__51561 = arguments.length;
switch (G__51561) {
case 2:
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___52076 = arguments.length;
var i__4737__auto___52077 = (0);
while(true){
if((i__4737__auto___52077 < len__4736__auto___52076)){
args_arr__4757__auto__.push((arguments[i__4737__auto___52077]));

var G__52078 = (i__4737__auto___52077 + (1));
i__4737__auto___52077 = G__52078;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((2)),(0),null));
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4758__auto__);

}
});

(dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (parent,child){
var G__51562 = parent;
G__51562.appendChild(child);

return G__51562;
}));

(dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__51563_52079 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__51564_52080 = null;
var count__51565_52081 = (0);
var i__51566_52082 = (0);
while(true){
if((i__51566_52082 < count__51565_52081)){
var c_52083 = chunk__51564_52080.cljs$core$IIndexed$_nth$arity$2(null,i__51566_52082);
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_52083);


var G__52084 = seq__51563_52079;
var G__52085 = chunk__51564_52080;
var G__52086 = count__51565_52081;
var G__52087 = (i__51566_52082 + (1));
seq__51563_52079 = G__52084;
chunk__51564_52080 = G__52085;
count__51565_52081 = G__52086;
i__51566_52082 = G__52087;
continue;
} else {
var temp__5735__auto___52088 = cljs.core.seq(seq__51563_52079);
if(temp__5735__auto___52088){
var seq__51563_52089__$1 = temp__5735__auto___52088;
if(cljs.core.chunked_seq_QMARK_(seq__51563_52089__$1)){
var c__4556__auto___52090 = cljs.core.chunk_first(seq__51563_52089__$1);
var G__52091 = cljs.core.chunk_rest(seq__51563_52089__$1);
var G__52092 = c__4556__auto___52090;
var G__52093 = cljs.core.count(c__4556__auto___52090);
var G__52094 = (0);
seq__51563_52079 = G__52091;
chunk__51564_52080 = G__52092;
count__51565_52081 = G__52093;
i__51566_52082 = G__52094;
continue;
} else {
var c_52095 = cljs.core.first(seq__51563_52089__$1);
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_52095);


var G__52096 = cljs.core.next(seq__51563_52089__$1);
var G__52097 = null;
var G__52098 = (0);
var G__52099 = (0);
seq__51563_52079 = G__52096;
chunk__51564_52080 = G__52097;
count__51565_52081 = G__52098;
i__51566_52082 = G__52099;
continue;
}
} else {
}
}
break;
}

return parent;
}));

/** @this {Function} */
(dommy.core.append_BANG_.cljs$lang$applyTo = (function (seq51558){
var G__51559 = cljs.core.first(seq51558);
var seq51558__$1 = cljs.core.next(seq51558);
var G__51560 = cljs.core.first(seq51558__$1);
var seq51558__$2 = cljs.core.next(seq51558__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__51559,G__51560,seq51558__$2);
}));

(dommy.core.append_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Prepend `child` to `parent`
 */
dommy.core.prepend_BANG_ = (function dommy$core$prepend_BANG_(var_args){
var G__51571 = arguments.length;
switch (G__51571) {
case 2:
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___52101 = arguments.length;
var i__4737__auto___52102 = (0);
while(true){
if((i__4737__auto___52102 < len__4736__auto___52101)){
args_arr__4757__auto__.push((arguments[i__4737__auto___52102]));

var G__52103 = (i__4737__auto___52102 + (1));
i__4737__auto___52102 = G__52103;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((2)),(0),null));
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4758__auto__);

}
});

(dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (parent,child){
var G__51572 = parent;
G__51572.insertBefore(child,parent.firstChild);

return G__51572;
}));

(dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__51573_52104 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__51574_52105 = null;
var count__51575_52106 = (0);
var i__51576_52107 = (0);
while(true){
if((i__51576_52107 < count__51575_52106)){
var c_52108 = chunk__51574_52105.cljs$core$IIndexed$_nth$arity$2(null,i__51576_52107);
dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_52108);


var G__52109 = seq__51573_52104;
var G__52110 = chunk__51574_52105;
var G__52111 = count__51575_52106;
var G__52112 = (i__51576_52107 + (1));
seq__51573_52104 = G__52109;
chunk__51574_52105 = G__52110;
count__51575_52106 = G__52111;
i__51576_52107 = G__52112;
continue;
} else {
var temp__5735__auto___52113 = cljs.core.seq(seq__51573_52104);
if(temp__5735__auto___52113){
var seq__51573_52114__$1 = temp__5735__auto___52113;
if(cljs.core.chunked_seq_QMARK_(seq__51573_52114__$1)){
var c__4556__auto___52115 = cljs.core.chunk_first(seq__51573_52114__$1);
var G__52116 = cljs.core.chunk_rest(seq__51573_52114__$1);
var G__52117 = c__4556__auto___52115;
var G__52118 = cljs.core.count(c__4556__auto___52115);
var G__52119 = (0);
seq__51573_52104 = G__52116;
chunk__51574_52105 = G__52117;
count__51575_52106 = G__52118;
i__51576_52107 = G__52119;
continue;
} else {
var c_52120 = cljs.core.first(seq__51573_52114__$1);
dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_52120);


var G__52121 = cljs.core.next(seq__51573_52114__$1);
var G__52122 = null;
var G__52123 = (0);
var G__52124 = (0);
seq__51573_52104 = G__52121;
chunk__51574_52105 = G__52122;
count__51575_52106 = G__52123;
i__51576_52107 = G__52124;
continue;
}
} else {
}
}
break;
}

return parent;
}));

/** @this {Function} */
(dommy.core.prepend_BANG_.cljs$lang$applyTo = (function (seq51568){
var G__51569 = cljs.core.first(seq51568);
var seq51568__$1 = cljs.core.next(seq51568);
var G__51570 = cljs.core.first(seq51568__$1);
var seq51568__$2 = cljs.core.next(seq51568__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__51569,G__51570,seq51568__$2);
}));

(dommy.core.prepend_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Insert `elem` before `other`, `other` must have a parent
 */
dommy.core.insert_before_BANG_ = (function dommy$core$insert_before_BANG_(elem,other){
var p = dommy.core.parent(other);
if(cljs.core.truth_(p)){
} else {
throw (new Error(["Assert failed: ","Target element must have a parent","\n","p"].join('')));
}

p.insertBefore(elem,other);

return elem;
});
/**
 * Insert `elem` after `other`, `other` must have a parent
 */
dommy.core.insert_after_BANG_ = (function dommy$core$insert_after_BANG_(elem,other){
var temp__5733__auto___52125 = other.nextSibling;
if(cljs.core.truth_(temp__5733__auto___52125)){
var next_52126 = temp__5733__auto___52125;
dommy.core.insert_before_BANG_(elem,next_52126);
} else {
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(dommy.core.parent(other),elem);
}

return elem;
});
/**
 * Replace `elem` with `new`, return `new`
 */
dommy.core.replace_BANG_ = (function dommy$core$replace_BANG_(elem,new$){
var p = dommy.core.parent(elem);
if(cljs.core.truth_(p)){
} else {
throw (new Error(["Assert failed: ","Target element must have a parent","\n","p"].join('')));
}

p.replaceChild(new$,elem);

return new$;
});
/**
 * Replace children of `elem` with `child`
 */
dommy.core.replace_contents_BANG_ = (function dommy$core$replace_contents_BANG_(p,child){
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(dommy.core.clear_BANG_(p),child);
});
/**
 * Remove `elem` from `parent`, return `parent`
 */
dommy.core.remove_BANG_ = (function dommy$core$remove_BANG_(var_args){
var G__51578 = arguments.length;
switch (G__51578) {
case 1:
return dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (elem){
var p = dommy.core.parent(elem);
if(cljs.core.truth_(p)){
} else {
throw (new Error(["Assert failed: ","Target element must have a parent","\n","p"].join('')));
}

return dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$2(p,elem);
}));

(dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (p,elem){
var G__51579 = p;
G__51579.removeChild(elem);

return G__51579;
}));

(dommy.core.remove_BANG_.cljs$lang$maxFixedArity = 2);

dommy.core.special_listener_makers = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__51580){
var vec__51581 = p__51580;
var special_mouse_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51581,(0),null);
var real_mouse_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51581,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,cljs.core.PersistentArrayMap.createAsIfByAssoc([real_mouse_event,(function (f){
return (function (event){
var related_target = event.relatedTarget;
var listener_target = (function (){var or__4126__auto__ = event.selectedTarget;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return event.currentTarget;
}
})();
if(cljs.core.truth_((function (){var and__4115__auto__ = related_target;
if(cljs.core.truth_(and__4115__auto__)){
return dommy.core.descendant_QMARK_(related_target,listener_target);
} else {
return and__4115__auto__;
}
})())){
return null;
} else {
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(event) : f.call(null,event));
}
});
})])], null);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mouseenter","mouseenter",-1792413560),new cljs.core.Keyword(null,"mouseover","mouseover",-484272303),new cljs.core.Keyword(null,"mouseleave","mouseleave",531566580),new cljs.core.Keyword(null,"mouseout","mouseout",2049446890)], null)));
/**
 * fires f if event.target is found with `selector`
 */
dommy.core.live_listener = (function dommy$core$live_listener(elem,selector,f){
return (function (event){
var selected_target = dommy.core.closest.cljs$core$IFn$_invoke$arity$3(elem,event.target,selector);
if(cljs.core.truth_((function (){var and__4115__auto__ = selected_target;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not(dommy.core.attr(selected_target,new cljs.core.Keyword(null,"disabled","disabled",-1529784218)));
} else {
return and__4115__auto__;
}
})())){
(event.selectedTarget = selected_target);

return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(event) : f.call(null,event));
} else {
return null;
}
});
});
/**
 * Returns a nested map of event listeners on `elem`
 */
dommy.core.event_listeners = (function dommy$core$event_listeners(elem){
var or__4126__auto__ = elem.dommyEventListeners;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
dommy.core.update_event_listeners_BANG_ = (function dommy$core$update_event_listeners_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___52128 = arguments.length;
var i__4737__auto___52129 = (0);
while(true){
if((i__4737__auto___52129 < len__4736__auto___52128)){
args__4742__auto__.push((arguments[i__4737__auto___52129]));

var G__52130 = (i__4737__auto___52129 + (1));
i__4737__auto___52129 = G__52130;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,f,args){
var elem__$1 = elem;
return (elem__$1.dommyEventListeners = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,dommy.core.event_listeners(elem__$1),args));
}));

(dommy.core.update_event_listeners_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(dommy.core.update_event_listeners_BANG_.cljs$lang$applyTo = (function (seq51584){
var G__51585 = cljs.core.first(seq51584);
var seq51584__$1 = cljs.core.next(seq51584);
var G__51586 = cljs.core.first(seq51584__$1);
var seq51584__$2 = cljs.core.next(seq51584__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__51585,G__51586,seq51584__$2);
}));

dommy.core.elem_and_selector = (function dommy$core$elem_and_selector(elem_sel){
if(cljs.core.sequential_QMARK_(elem_sel)){
return cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.rest)(elem_sel);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [elem_sel,null], null);
}
});
/**
 * Adds `f` as a listener for events of type `event-type` on
 * `elem-sel`, which must either be a DOM node, or a sequence
 * whose first item is a DOM node.
 * 
 * In other words, the call to `listen!` can take two forms:
 * 
 * If `elem-sel` is a DOM node, i.e., you're doing something like:
 * 
 *     (listen! elem :click click-handler)
 * 
 * then `click-handler` will be set as a listener for `click` events
 * on the `elem`.
 * 
 * If `elem-sel` is a sequence:
 * 
 *     (listen! [elem :.selector.for :.some.descendants] :click click-handler)
 * 
 * then `click-handler` will be set as a listener for `click` events
 * on descendants of `elem` that match the selector
 * 
 * Also accepts any number of event-type and handler pairs for setting
 * multiple listeners at once:
 * 
 *     (listen! some-elem :click click-handler :hover hover-handler)
 */
dommy.core.listen_BANG_ = (function dommy$core$listen_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___52131 = arguments.length;
var i__4737__auto___52132 = (0);
while(true){
if((i__4737__auto___52132 < len__4736__auto___52131)){
args__4742__auto__.push((arguments[i__4737__auto___52132]));

var G__52133 = (i__4737__auto___52132 + (1));
i__4737__auto___52132 = G__52133;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_(cljs.core.count(type_fs))){
} else {
throw (new Error("Assert failed: (even? (count type-fs))"));
}

var vec__51589_52134 = dommy.core.elem_and_selector(elem_sel);
var elem_52135 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51589_52134,(0),null);
var selector_52136 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51589_52134,(1),null);
var seq__51592_52137 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__51599_52138 = null;
var count__51600_52139 = (0);
var i__51601_52140 = (0);
while(true){
if((i__51601_52140 < count__51600_52139)){
var vec__51654_52141 = chunk__51599_52138.cljs$core$IIndexed$_nth$arity$2(null,i__51601_52140);
var orig_type_52142 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51654_52141,(0),null);
var f_52143 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51654_52141,(1),null);
var seq__51602_52144 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_52142,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_52142,cljs.core.identity])));
var chunk__51604_52145 = null;
var count__51605_52146 = (0);
var i__51606_52147 = (0);
while(true){
if((i__51606_52147 < count__51605_52146)){
var vec__51667_52148 = chunk__51604_52145.cljs$core$IIndexed$_nth$arity$2(null,i__51606_52147);
var actual_type_52149 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51667_52148,(0),null);
var factory_52150 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51667_52148,(1),null);
var canonical_f_52151 = (function (){var G__51671 = (factory_52150.cljs$core$IFn$_invoke$arity$1 ? factory_52150.cljs$core$IFn$_invoke$arity$1(f_52143) : factory_52150.call(null,f_52143));
var fexpr__51670 = (cljs.core.truth_(selector_52136)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_52135,selector_52136):cljs.core.identity);
return (fexpr__51670.cljs$core$IFn$_invoke$arity$1 ? fexpr__51670.cljs$core$IFn$_invoke$arity$1(G__51671) : fexpr__51670.call(null,G__51671));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_52135,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_52136,actual_type_52149,f_52143], null),canonical_f_52151], 0));

if(cljs.core.truth_(elem_52135.addEventListener)){
elem_52135.addEventListener(cljs.core.name(actual_type_52149),canonical_f_52151);
} else {
elem_52135.attachEvent(cljs.core.name(actual_type_52149),canonical_f_52151);
}


var G__52152 = seq__51602_52144;
var G__52153 = chunk__51604_52145;
var G__52154 = count__51605_52146;
var G__52155 = (i__51606_52147 + (1));
seq__51602_52144 = G__52152;
chunk__51604_52145 = G__52153;
count__51605_52146 = G__52154;
i__51606_52147 = G__52155;
continue;
} else {
var temp__5735__auto___52156 = cljs.core.seq(seq__51602_52144);
if(temp__5735__auto___52156){
var seq__51602_52157__$1 = temp__5735__auto___52156;
if(cljs.core.chunked_seq_QMARK_(seq__51602_52157__$1)){
var c__4556__auto___52158 = cljs.core.chunk_first(seq__51602_52157__$1);
var G__52159 = cljs.core.chunk_rest(seq__51602_52157__$1);
var G__52160 = c__4556__auto___52158;
var G__52161 = cljs.core.count(c__4556__auto___52158);
var G__52162 = (0);
seq__51602_52144 = G__52159;
chunk__51604_52145 = G__52160;
count__51605_52146 = G__52161;
i__51606_52147 = G__52162;
continue;
} else {
var vec__51672_52163 = cljs.core.first(seq__51602_52157__$1);
var actual_type_52164 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51672_52163,(0),null);
var factory_52165 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51672_52163,(1),null);
var canonical_f_52166 = (function (){var G__51676 = (factory_52165.cljs$core$IFn$_invoke$arity$1 ? factory_52165.cljs$core$IFn$_invoke$arity$1(f_52143) : factory_52165.call(null,f_52143));
var fexpr__51675 = (cljs.core.truth_(selector_52136)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_52135,selector_52136):cljs.core.identity);
return (fexpr__51675.cljs$core$IFn$_invoke$arity$1 ? fexpr__51675.cljs$core$IFn$_invoke$arity$1(G__51676) : fexpr__51675.call(null,G__51676));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_52135,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_52136,actual_type_52164,f_52143], null),canonical_f_52166], 0));

if(cljs.core.truth_(elem_52135.addEventListener)){
elem_52135.addEventListener(cljs.core.name(actual_type_52164),canonical_f_52166);
} else {
elem_52135.attachEvent(cljs.core.name(actual_type_52164),canonical_f_52166);
}


var G__52167 = cljs.core.next(seq__51602_52157__$1);
var G__52168 = null;
var G__52169 = (0);
var G__52170 = (0);
seq__51602_52144 = G__52167;
chunk__51604_52145 = G__52168;
count__51605_52146 = G__52169;
i__51606_52147 = G__52170;
continue;
}
} else {
}
}
break;
}

var G__52171 = seq__51592_52137;
var G__52172 = chunk__51599_52138;
var G__52173 = count__51600_52139;
var G__52174 = (i__51601_52140 + (1));
seq__51592_52137 = G__52171;
chunk__51599_52138 = G__52172;
count__51600_52139 = G__52173;
i__51601_52140 = G__52174;
continue;
} else {
var temp__5735__auto___52175 = cljs.core.seq(seq__51592_52137);
if(temp__5735__auto___52175){
var seq__51592_52176__$1 = temp__5735__auto___52175;
if(cljs.core.chunked_seq_QMARK_(seq__51592_52176__$1)){
var c__4556__auto___52177 = cljs.core.chunk_first(seq__51592_52176__$1);
var G__52178 = cljs.core.chunk_rest(seq__51592_52176__$1);
var G__52179 = c__4556__auto___52177;
var G__52180 = cljs.core.count(c__4556__auto___52177);
var G__52181 = (0);
seq__51592_52137 = G__52178;
chunk__51599_52138 = G__52179;
count__51600_52139 = G__52180;
i__51601_52140 = G__52181;
continue;
} else {
var vec__51677_52182 = cljs.core.first(seq__51592_52176__$1);
var orig_type_52183 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51677_52182,(0),null);
var f_52184 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51677_52182,(1),null);
var seq__51593_52185 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_52183,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_52183,cljs.core.identity])));
var chunk__51595_52186 = null;
var count__51596_52187 = (0);
var i__51597_52188 = (0);
while(true){
if((i__51597_52188 < count__51596_52187)){
var vec__51690_52189 = chunk__51595_52186.cljs$core$IIndexed$_nth$arity$2(null,i__51597_52188);
var actual_type_52190 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51690_52189,(0),null);
var factory_52191 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51690_52189,(1),null);
var canonical_f_52192 = (function (){var G__51694 = (factory_52191.cljs$core$IFn$_invoke$arity$1 ? factory_52191.cljs$core$IFn$_invoke$arity$1(f_52184) : factory_52191.call(null,f_52184));
var fexpr__51693 = (cljs.core.truth_(selector_52136)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_52135,selector_52136):cljs.core.identity);
return (fexpr__51693.cljs$core$IFn$_invoke$arity$1 ? fexpr__51693.cljs$core$IFn$_invoke$arity$1(G__51694) : fexpr__51693.call(null,G__51694));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_52135,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_52136,actual_type_52190,f_52184], null),canonical_f_52192], 0));

if(cljs.core.truth_(elem_52135.addEventListener)){
elem_52135.addEventListener(cljs.core.name(actual_type_52190),canonical_f_52192);
} else {
elem_52135.attachEvent(cljs.core.name(actual_type_52190),canonical_f_52192);
}


var G__52193 = seq__51593_52185;
var G__52194 = chunk__51595_52186;
var G__52195 = count__51596_52187;
var G__52196 = (i__51597_52188 + (1));
seq__51593_52185 = G__52193;
chunk__51595_52186 = G__52194;
count__51596_52187 = G__52195;
i__51597_52188 = G__52196;
continue;
} else {
var temp__5735__auto___52197__$1 = cljs.core.seq(seq__51593_52185);
if(temp__5735__auto___52197__$1){
var seq__51593_52198__$1 = temp__5735__auto___52197__$1;
if(cljs.core.chunked_seq_QMARK_(seq__51593_52198__$1)){
var c__4556__auto___52199 = cljs.core.chunk_first(seq__51593_52198__$1);
var G__52200 = cljs.core.chunk_rest(seq__51593_52198__$1);
var G__52201 = c__4556__auto___52199;
var G__52202 = cljs.core.count(c__4556__auto___52199);
var G__52203 = (0);
seq__51593_52185 = G__52200;
chunk__51595_52186 = G__52201;
count__51596_52187 = G__52202;
i__51597_52188 = G__52203;
continue;
} else {
var vec__51695_52204 = cljs.core.first(seq__51593_52198__$1);
var actual_type_52205 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51695_52204,(0),null);
var factory_52206 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51695_52204,(1),null);
var canonical_f_52207 = (function (){var G__51699 = (factory_52206.cljs$core$IFn$_invoke$arity$1 ? factory_52206.cljs$core$IFn$_invoke$arity$1(f_52184) : factory_52206.call(null,f_52184));
var fexpr__51698 = (cljs.core.truth_(selector_52136)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_52135,selector_52136):cljs.core.identity);
return (fexpr__51698.cljs$core$IFn$_invoke$arity$1 ? fexpr__51698.cljs$core$IFn$_invoke$arity$1(G__51699) : fexpr__51698.call(null,G__51699));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_52135,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_52136,actual_type_52205,f_52184], null),canonical_f_52207], 0));

if(cljs.core.truth_(elem_52135.addEventListener)){
elem_52135.addEventListener(cljs.core.name(actual_type_52205),canonical_f_52207);
} else {
elem_52135.attachEvent(cljs.core.name(actual_type_52205),canonical_f_52207);
}


var G__52208 = cljs.core.next(seq__51593_52198__$1);
var G__52209 = null;
var G__52210 = (0);
var G__52211 = (0);
seq__51593_52185 = G__52208;
chunk__51595_52186 = G__52209;
count__51596_52187 = G__52210;
i__51597_52188 = G__52211;
continue;
}
} else {
}
}
break;
}

var G__52212 = cljs.core.next(seq__51592_52176__$1);
var G__52213 = null;
var G__52214 = (0);
var G__52215 = (0);
seq__51592_52137 = G__52212;
chunk__51599_52138 = G__52213;
count__51600_52139 = G__52214;
i__51601_52140 = G__52215;
continue;
}
} else {
}
}
break;
}

return elem_sel;
}));

(dommy.core.listen_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(dommy.core.listen_BANG_.cljs$lang$applyTo = (function (seq51587){
var G__51588 = cljs.core.first(seq51587);
var seq51587__$1 = cljs.core.next(seq51587);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__51588,seq51587__$1);
}));

/**
 * Removes event listener for the element defined in `elem-sel`,
 * which is the same format as listen!.
 * 
 *   The following forms are allowed, and will remove all handlers
 *   that match the parameters passed in:
 * 
 *    (unlisten! [elem :.selector] :click event-listener)
 * 
 *    (unlisten! [elem :.selector]
 *      :click event-listener
 *      :mouseover other-event-listener)
 */
dommy.core.unlisten_BANG_ = (function dommy$core$unlisten_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___52216 = arguments.length;
var i__4737__auto___52217 = (0);
while(true){
if((i__4737__auto___52217 < len__4736__auto___52216)){
args__4742__auto__.push((arguments[i__4737__auto___52217]));

var G__52218 = (i__4737__auto___52217 + (1));
i__4737__auto___52217 = G__52218;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_(cljs.core.count(type_fs))){
} else {
throw (new Error("Assert failed: (even? (count type-fs))"));
}

var vec__51702_52219 = dommy.core.elem_and_selector(elem_sel);
var elem_52220 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51702_52219,(0),null);
var selector_52221 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51702_52219,(1),null);
var seq__51705_52222 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__51712_52223 = null;
var count__51713_52224 = (0);
var i__51714_52225 = (0);
while(true){
if((i__51714_52225 < count__51713_52224)){
var vec__51751_52226 = chunk__51712_52223.cljs$core$IIndexed$_nth$arity$2(null,i__51714_52225);
var orig_type_52227 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51751_52226,(0),null);
var f_52228 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51751_52226,(1),null);
var seq__51715_52229 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_52227,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_52227,cljs.core.identity])));
var chunk__51717_52230 = null;
var count__51718_52231 = (0);
var i__51719_52232 = (0);
while(true){
if((i__51719_52232 < count__51718_52231)){
var vec__51760_52233 = chunk__51717_52230.cljs$core$IIndexed$_nth$arity$2(null,i__51719_52232);
var actual_type_52234 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51760_52233,(0),null);
var __52235 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51760_52233,(1),null);
var keys_52236 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_52221,actual_type_52234,f_52228], null);
var canonical_f_52237 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_52220),keys_52236);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_52220,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_52236], 0));

if(cljs.core.truth_(elem_52220.removeEventListener)){
elem_52220.removeEventListener(cljs.core.name(actual_type_52234),canonical_f_52237);
} else {
elem_52220.detachEvent(cljs.core.name(actual_type_52234),canonical_f_52237);
}


var G__52238 = seq__51715_52229;
var G__52239 = chunk__51717_52230;
var G__52240 = count__51718_52231;
var G__52241 = (i__51719_52232 + (1));
seq__51715_52229 = G__52238;
chunk__51717_52230 = G__52239;
count__51718_52231 = G__52240;
i__51719_52232 = G__52241;
continue;
} else {
var temp__5735__auto___52242 = cljs.core.seq(seq__51715_52229);
if(temp__5735__auto___52242){
var seq__51715_52243__$1 = temp__5735__auto___52242;
if(cljs.core.chunked_seq_QMARK_(seq__51715_52243__$1)){
var c__4556__auto___52244 = cljs.core.chunk_first(seq__51715_52243__$1);
var G__52245 = cljs.core.chunk_rest(seq__51715_52243__$1);
var G__52246 = c__4556__auto___52244;
var G__52247 = cljs.core.count(c__4556__auto___52244);
var G__52248 = (0);
seq__51715_52229 = G__52245;
chunk__51717_52230 = G__52246;
count__51718_52231 = G__52247;
i__51719_52232 = G__52248;
continue;
} else {
var vec__51763_52249 = cljs.core.first(seq__51715_52243__$1);
var actual_type_52250 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51763_52249,(0),null);
var __52251 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51763_52249,(1),null);
var keys_52252 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_52221,actual_type_52250,f_52228], null);
var canonical_f_52253 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_52220),keys_52252);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_52220,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_52252], 0));

if(cljs.core.truth_(elem_52220.removeEventListener)){
elem_52220.removeEventListener(cljs.core.name(actual_type_52250),canonical_f_52253);
} else {
elem_52220.detachEvent(cljs.core.name(actual_type_52250),canonical_f_52253);
}


var G__52254 = cljs.core.next(seq__51715_52243__$1);
var G__52255 = null;
var G__52256 = (0);
var G__52257 = (0);
seq__51715_52229 = G__52254;
chunk__51717_52230 = G__52255;
count__51718_52231 = G__52256;
i__51719_52232 = G__52257;
continue;
}
} else {
}
}
break;
}

var G__52258 = seq__51705_52222;
var G__52259 = chunk__51712_52223;
var G__52260 = count__51713_52224;
var G__52261 = (i__51714_52225 + (1));
seq__51705_52222 = G__52258;
chunk__51712_52223 = G__52259;
count__51713_52224 = G__52260;
i__51714_52225 = G__52261;
continue;
} else {
var temp__5735__auto___52262 = cljs.core.seq(seq__51705_52222);
if(temp__5735__auto___52262){
var seq__51705_52263__$1 = temp__5735__auto___52262;
if(cljs.core.chunked_seq_QMARK_(seq__51705_52263__$1)){
var c__4556__auto___52264 = cljs.core.chunk_first(seq__51705_52263__$1);
var G__52265 = cljs.core.chunk_rest(seq__51705_52263__$1);
var G__52266 = c__4556__auto___52264;
var G__52267 = cljs.core.count(c__4556__auto___52264);
var G__52268 = (0);
seq__51705_52222 = G__52265;
chunk__51712_52223 = G__52266;
count__51713_52224 = G__52267;
i__51714_52225 = G__52268;
continue;
} else {
var vec__51766_52269 = cljs.core.first(seq__51705_52263__$1);
var orig_type_52270 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51766_52269,(0),null);
var f_52271 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51766_52269,(1),null);
var seq__51706_52272 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_52270,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_52270,cljs.core.identity])));
var chunk__51708_52273 = null;
var count__51709_52274 = (0);
var i__51710_52275 = (0);
while(true){
if((i__51710_52275 < count__51709_52274)){
var vec__51775_52276 = chunk__51708_52273.cljs$core$IIndexed$_nth$arity$2(null,i__51710_52275);
var actual_type_52277 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51775_52276,(0),null);
var __52278 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51775_52276,(1),null);
var keys_52279 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_52221,actual_type_52277,f_52271], null);
var canonical_f_52280 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_52220),keys_52279);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_52220,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_52279], 0));

if(cljs.core.truth_(elem_52220.removeEventListener)){
elem_52220.removeEventListener(cljs.core.name(actual_type_52277),canonical_f_52280);
} else {
elem_52220.detachEvent(cljs.core.name(actual_type_52277),canonical_f_52280);
}


var G__52281 = seq__51706_52272;
var G__52282 = chunk__51708_52273;
var G__52283 = count__51709_52274;
var G__52284 = (i__51710_52275 + (1));
seq__51706_52272 = G__52281;
chunk__51708_52273 = G__52282;
count__51709_52274 = G__52283;
i__51710_52275 = G__52284;
continue;
} else {
var temp__5735__auto___52285__$1 = cljs.core.seq(seq__51706_52272);
if(temp__5735__auto___52285__$1){
var seq__51706_52286__$1 = temp__5735__auto___52285__$1;
if(cljs.core.chunked_seq_QMARK_(seq__51706_52286__$1)){
var c__4556__auto___52287 = cljs.core.chunk_first(seq__51706_52286__$1);
var G__52288 = cljs.core.chunk_rest(seq__51706_52286__$1);
var G__52289 = c__4556__auto___52287;
var G__52290 = cljs.core.count(c__4556__auto___52287);
var G__52291 = (0);
seq__51706_52272 = G__52288;
chunk__51708_52273 = G__52289;
count__51709_52274 = G__52290;
i__51710_52275 = G__52291;
continue;
} else {
var vec__51778_52292 = cljs.core.first(seq__51706_52286__$1);
var actual_type_52293 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51778_52292,(0),null);
var __52294 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51778_52292,(1),null);
var keys_52295 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_52221,actual_type_52293,f_52271], null);
var canonical_f_52296 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_52220),keys_52295);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_52220,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_52295], 0));

if(cljs.core.truth_(elem_52220.removeEventListener)){
elem_52220.removeEventListener(cljs.core.name(actual_type_52293),canonical_f_52296);
} else {
elem_52220.detachEvent(cljs.core.name(actual_type_52293),canonical_f_52296);
}


var G__52297 = cljs.core.next(seq__51706_52286__$1);
var G__52298 = null;
var G__52299 = (0);
var G__52300 = (0);
seq__51706_52272 = G__52297;
chunk__51708_52273 = G__52298;
count__51709_52274 = G__52299;
i__51710_52275 = G__52300;
continue;
}
} else {
}
}
break;
}

var G__52301 = cljs.core.next(seq__51705_52263__$1);
var G__52302 = null;
var G__52303 = (0);
var G__52304 = (0);
seq__51705_52222 = G__52301;
chunk__51712_52223 = G__52302;
count__51713_52224 = G__52303;
i__51714_52225 = G__52304;
continue;
}
} else {
}
}
break;
}

return elem_sel;
}));

(dommy.core.unlisten_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(dommy.core.unlisten_BANG_.cljs$lang$applyTo = (function (seq51700){
var G__51701 = cljs.core.first(seq51700);
var seq51700__$1 = cljs.core.next(seq51700);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__51701,seq51700__$1);
}));

/**
 * Behaves like `listen!`, but removes the listener after the first event occurs.
 */
dommy.core.listen_once_BANG_ = (function dommy$core$listen_once_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___52305 = arguments.length;
var i__4737__auto___52306 = (0);
while(true){
if((i__4737__auto___52306 < len__4736__auto___52305)){
args__4742__auto__.push((arguments[i__4737__auto___52306]));

var G__52307 = (i__4737__auto___52306 + (1));
i__4737__auto___52306 = G__52307;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_(cljs.core.count(type_fs))){
} else {
throw (new Error("Assert failed: (even? (count type-fs))"));
}

var vec__51783_52308 = dommy.core.elem_and_selector(elem_sel);
var elem_52309 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51783_52308,(0),null);
var selector_52310 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51783_52308,(1),null);
var seq__51786_52311 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__51787_52312 = null;
var count__51788_52313 = (0);
var i__51789_52314 = (0);
while(true){
if((i__51789_52314 < count__51788_52313)){
var vec__51796_52315 = chunk__51787_52312.cljs$core$IIndexed$_nth$arity$2(null,i__51789_52314);
var type_52316 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51796_52315,(0),null);
var f_52317 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51796_52315,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_52316,((function (seq__51786_52311,chunk__51787_52312,count__51788_52313,i__51789_52314,vec__51796_52315,type_52316,f_52317,vec__51783_52308,elem_52309,selector_52310){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_52316,dommy$core$this_fn], 0));

return (f_52317.cljs$core$IFn$_invoke$arity$1 ? f_52317.cljs$core$IFn$_invoke$arity$1(e) : f_52317.call(null,e));
});})(seq__51786_52311,chunk__51787_52312,count__51788_52313,i__51789_52314,vec__51796_52315,type_52316,f_52317,vec__51783_52308,elem_52309,selector_52310))
], 0));


var G__52318 = seq__51786_52311;
var G__52319 = chunk__51787_52312;
var G__52320 = count__51788_52313;
var G__52321 = (i__51789_52314 + (1));
seq__51786_52311 = G__52318;
chunk__51787_52312 = G__52319;
count__51788_52313 = G__52320;
i__51789_52314 = G__52321;
continue;
} else {
var temp__5735__auto___52322 = cljs.core.seq(seq__51786_52311);
if(temp__5735__auto___52322){
var seq__51786_52323__$1 = temp__5735__auto___52322;
if(cljs.core.chunked_seq_QMARK_(seq__51786_52323__$1)){
var c__4556__auto___52325 = cljs.core.chunk_first(seq__51786_52323__$1);
var G__52327 = cljs.core.chunk_rest(seq__51786_52323__$1);
var G__52328 = c__4556__auto___52325;
var G__52329 = cljs.core.count(c__4556__auto___52325);
var G__52330 = (0);
seq__51786_52311 = G__52327;
chunk__51787_52312 = G__52328;
count__51788_52313 = G__52329;
i__51789_52314 = G__52330;
continue;
} else {
var vec__51799_52332 = cljs.core.first(seq__51786_52323__$1);
var type_52333 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51799_52332,(0),null);
var f_52334 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51799_52332,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_52333,((function (seq__51786_52311,chunk__51787_52312,count__51788_52313,i__51789_52314,vec__51799_52332,type_52333,f_52334,seq__51786_52323__$1,temp__5735__auto___52322,vec__51783_52308,elem_52309,selector_52310){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_52333,dommy$core$this_fn], 0));

return (f_52334.cljs$core$IFn$_invoke$arity$1 ? f_52334.cljs$core$IFn$_invoke$arity$1(e) : f_52334.call(null,e));
});})(seq__51786_52311,chunk__51787_52312,count__51788_52313,i__51789_52314,vec__51799_52332,type_52333,f_52334,seq__51786_52323__$1,temp__5735__auto___52322,vec__51783_52308,elem_52309,selector_52310))
], 0));


var G__52340 = cljs.core.next(seq__51786_52323__$1);
var G__52341 = null;
var G__52342 = (0);
var G__52343 = (0);
seq__51786_52311 = G__52340;
chunk__51787_52312 = G__52341;
count__51788_52313 = G__52342;
i__51789_52314 = G__52343;
continue;
}
} else {
}
}
break;
}

return elem_sel;
}));

(dommy.core.listen_once_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(dommy.core.listen_once_BANG_.cljs$lang$applyTo = (function (seq51781){
var G__51782 = cljs.core.first(seq51781);
var seq51781__$1 = cljs.core.next(seq51781);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__51782,seq51781__$1);
}));


//# sourceMappingURL=dommy.core.js.map
