goog.provide('athens.views.graph_page');
athens.views.graph_page.build_nodes = (function athens$views$graph_page$build_nodes(){
var all_nodes = (function (){var G__61031 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("node","title","node/title",628940777),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
var G__61032 = cljs.core.deref(athens.db.dsdb);
return (datascript.core.q.cljs$core$IFn$_invoke$arity$2 ? datascript.core.q.cljs$core$IFn$_invoke$arity$2(G__61031,G__61032) : datascript.core.q.call(null,G__61031,G__61032));
})();
var nodes_with_refs = (function (){var G__61033 = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("node","title","node/title",628940777),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Keyword("block","refs","block/refs",-1214495349),new cljs.core.Symbol(null,"?e","?e",-1194391683,null)], null)], null);
var G__61034 = cljs.core.deref(athens.db.dsdb);
return (datascript.core.q.cljs$core$IFn$_invoke$arity$2 ? datascript.core.q.cljs$core$IFn$_invoke$arity$2(G__61033,G__61034) : datascript.core.q.call(null,G__61033,G__61034));
})();
var nodes_without_refs = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(cljs.core.set(all_nodes),cljs.core.set(nodes_with_refs));
var nodes_with_refs__$1 = (function (){var G__61035 = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Symbol(null,"?t","?t",1786819229,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"?r","?r",-516400708,null)),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("node","title","node/title",628940777),new cljs.core.Symbol(null,"?t","?t",1786819229,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?r","?r",-516400708,null),new cljs.core.Keyword("block","refs","block/refs",-1214495349),new cljs.core.Symbol(null,"?e","?e",-1194391683,null)], null)], null);
var G__61036 = cljs.core.deref(athens.db.dsdb);
var G__61037 = nodes_with_refs;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$3 ? datascript.core.q.cljs$core$IFn$_invoke$arity$3(G__61035,G__61036,G__61037) : datascript.core.q.call(null,G__61035,G__61036,G__61037));
})();
var nodes_without_refs__$1 = (function (){var G__61038 = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Symbol(null,"?t","?t",1786819229,null),new cljs.core.Symbol(null,"?c","?c",870679775,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("node","title","node/title",628940777),new cljs.core.Symbol(null,"?t","?t",1786819229,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"get-else","get-else",1312024065,null),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword(null,"always-nil-value","always-nil-value",1360251043),(1)),new cljs.core.Symbol(null,"?c","?c",870679775,null)], null)], null);
var G__61039 = cljs.core.deref(athens.db.dsdb);
var G__61040 = nodes_without_refs;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$3 ? datascript.core.q.cljs$core$IFn$_invoke$arity$3(G__61038,G__61039,G__61040) : datascript.core.q.call(null,G__61038,G__61039,G__61040));
})();
var all_nodes__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__61041){
var vec__61042 = p__61041;
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61042,(0),null);
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61042,(1),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61042,(2),null);
return new cljs.core.PersistentArrayMap(null, 3, ["id",e,"name",t,"val",val], null);
}),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(nodes_with_refs__$1,nodes_without_refs__$1));
return all_nodes__$1;
});
athens.views.graph_page.build_links = (function athens$views$graph_page$build_links(){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__61045){
var vec__61046 = p__61045;
var node_eid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61046,(0),null);
var ref = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61046,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, ["source",new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(cljs.core.first(athens.db.get_parents_recursively(ref))),"target",node_eid], null);
}),(function (){var G__61049 = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Symbol(null,"?r","?r",-516400708,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("node","title","node/title",628940777),new cljs.core.Symbol(null,"?t","?t",1786819229,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?r","?r",-516400708,null),new cljs.core.Keyword("block","refs","block/refs",-1214495349),new cljs.core.Symbol(null,"?e","?e",-1194391683,null)], null)], null);
var G__61050 = cljs.core.deref(athens.db.dsdb);
return (datascript.core.q.cljs$core$IFn$_invoke$arity$2 ? datascript.core.q.cljs$core$IFn$_invoke$arity$2(G__61049,G__61050) : datascript.core.q.call(null,G__61049,G__61050));
})());
});
athens.views.graph_page.graph_page = (function athens$views$graph_page$graph_page(){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"graph page!"], null);
});
});

//# sourceMappingURL=athens.views.graph_page.js.map
