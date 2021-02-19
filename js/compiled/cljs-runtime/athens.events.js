goog.provide('athens.events');
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("boot","web","boot/web",-657960887),(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),athens.db.rfdb,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("loading","unset","loading/unset",-44658566)], null)], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"init-rfdb","init-rfdb",-460710127),(function (_,___$1){
return athens.db.rfdb;
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","update-filepath","db/update-filepath",501349630),(function (p__58192,p__58193){
var map__58194 = p__58192;
var map__58194__$1 = (((((!((map__58194 == null))))?(((((map__58194.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58194.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58194):map__58194);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58194__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__58195 = p__58193;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58195,(0),null);
var filepath = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58195,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("db","filepath","db/filepath",1097485287),filepath),new cljs.core.Keyword("local-storage","set!","local-storage/set!",901741855),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["db/filepath",filepath], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","sync","db/sync",-624147024),(function (db,p__58201){
var vec__58203 = p__58201;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58203,(0),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("db","synced","db/synced",-1518558434),true);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","not-synced","db/not-synced",1154889658),(function (db,p__58206){
var vec__58207 = p__58206;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58207,(0),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("db","synced","db/synced",-1518558434),false);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("athena","toggle","athena/toggle",2028366801),(function (db,_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("athena","open","athena/open",1253777725),cljs.core.not);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("athena","update-recent-items","athena/update-recent-items",-1049064820),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (db,p__58210){
var vec__58211 = p__58210;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58211,(0),null);
var selected_page = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58211,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"when","when",1064114221,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"set","set",1945134081,null),cljs.core.list(new cljs.core.Keyword("athena","recent-items","athena/recent-items",-1145487227),new cljs.core.Symbol(null,"db","db",-1661185010,null))),new cljs.core.Symbol(null,"selected-page","selected-page",899689913,null))),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword("athena","recent-items","athena/recent-items",-1145487227),new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"selected-page","selected-page",899689913,null))));

var opts__54730__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__54731__auto__ = (((function (){var opts__54730__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__54731__auto__ = ((function (){var G__58218 = (function (){var opts__54730__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__54731__auto__ = selected_page;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__54731__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"selected-page","selected-page",899689913,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__54731__auto__;
})();
var fexpr__58217 = (function (){var opts__54730__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__54731__auto__ = cljs.core.set((function (){var opts__54730__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__54731__auto__ = new cljs.core.Keyword("athena","recent-items","athena/recent-items",-1145487227).cljs$core$IFn$_invoke$arity$1((function (){var opts__54730__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__54731__auto__ = db;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__54731__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__54731__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__54731__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Keyword("athena","recent-items","athena/recent-items",-1145487227),new cljs.core.Symbol(null,"db","db",-1661185010,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__54731__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__54731__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"set","set",1945134081,null),cljs.core.list(new cljs.core.Keyword("athena","recent-items","athena/recent-items",-1145487227),new cljs.core.Symbol(null,"db","db",-1661185010,null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__54731__auto__;
})();
return (fexpr__58217.cljs$core$IFn$_invoke$arity$1 ? fexpr__58217.cljs$core$IFn$_invoke$arity$1(G__58218) : fexpr__58217.call(null,G__58218));
})() == null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__54731__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"set","set",1945134081,null),cljs.core.list(new cljs.core.Keyword("athena","recent-items","athena/recent-items",-1145487227),new cljs.core.Symbol(null,"db","db",-1661185010,null))),new cljs.core.Symbol(null,"selected-page","selected-page",899689913,null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__54731__auto__;
})())?(function (){var opts__54730__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__54731__auto__ = cljs.core.update.cljs$core$IFn$_invoke$arity$4((function (){var opts__54730__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__54731__auto__ = db;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__54731__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__54731__auto__;
})(),new cljs.core.Keyword("athena","recent-items","athena/recent-items",-1145487227),(function (){var opts__54730__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__54731__auto__ = cljs.core.conj;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__54731__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__54731__auto__;
})(),(function (){var opts__54730__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__54731__auto__ = selected_page;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__54731__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"selected-page","selected-page",899689913,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__54731__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__54731__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword("athena","recent-items","athena/recent-items",-1145487227),new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"selected-page","selected-page",899689913,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__54731__auto__;
})():null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__54731__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"when","when",1064114221,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"set","set",1945134081,null),cljs.core.list(new cljs.core.Keyword("athena","recent-items","athena/recent-items",-1145487227),new cljs.core.Symbol(null,"db","db",-1661185010,null))),new cljs.core.Symbol(null,"selected-page","selected-page",899689913,null))),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword("athena","recent-items","athena/recent-items",-1145487227),new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"selected-page","selected-page",899689913,null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__54731__auto__;
}catch (e58215){var e = e58215;
throw e;
}}):(function (db,p__58219){
var vec__58220 = p__58219;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58220,(0),null);
var selected_page = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58220,(1),null);
if(((function (){var fexpr__58223 = cljs.core.set(new cljs.core.Keyword("athena","recent-items","athena/recent-items",-1145487227).cljs$core$IFn$_invoke$arity$1(db));
return (fexpr__58223.cljs$core$IFn$_invoke$arity$1 ? fexpr__58223.cljs$core$IFn$_invoke$arity$1(selected_page) : fexpr__58223.call(null,selected_page));
})() == null)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.Keyword("athena","recent-items","athena/recent-items",-1145487227),cljs.core.conj,selected_page);
} else {
return null;
}
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("devtool","toggle","devtool/toggle",-1442703685),(function (db,_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("devtool","open","devtool/open",-1176270029),cljs.core.not);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("left-sidebar","toggle","left-sidebar/toggle",212949860),(function (db,_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("left-sidebar","open","left-sidebar/open",-686633270),cljs.core.not);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("right-sidebar","toggle","right-sidebar/toggle",-1089397191),(function (db,_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("right-sidebar","open","right-sidebar/open",83006133),cljs.core.not);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("right-sidebar","toggle-item","right-sidebar/toggle-item",-445072841),(function (db,p__58224){
var vec__58225 = p__58224;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58225,(0),null);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58225,(1),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("right-sidebar","items","right-sidebar/items",-881766733),item,new cljs.core.Keyword(null,"open","open",-1763596448)], null),cljs.core.not);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("right-sidebar","set-width","right-sidebar/set-width",-1463800509),(function (db,p__58228){
var vec__58229 = p__58228;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58229,(0),null);
var width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58229,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("right-sidebar","width","right-sidebar/width",1529781304),width);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("mouse-down","set","mouse-down/set",685623064),(function (db,_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"mouse-down","mouse-down",647107567),true);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("mouse-down","unset","mouse-down/unset",-1566717652),(function (db,_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"mouse-down","mouse-down",647107567),false);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("right-sidebar","close-item","right-sidebar/close-item",-2021662216),(function (db,p__58232){
var vec__58233 = p__58232;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58233,(0),null);
var uid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58233,(1),null);
var map__58236 = db;
var map__58236__$1 = (((((!((map__58236 == null))))?(((((map__58236.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58236.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58236):map__58236);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58236__$1,new cljs.core.Keyword("right-sidebar","items","right-sidebar/items",-881766733));
var G__58238 = cljs.core.update.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.Keyword("right-sidebar","items","right-sidebar/items",-881766733),cljs.core.dissoc,uid);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(items))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__58238,new cljs.core.Keyword("right-sidebar","open","right-sidebar/open",83006133),false);
} else {
return G__58238;
}
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("right-sidebar","open-item","right-sidebar/open-item",-1234515614),(function (p__58239,p__58240){
var map__58241 = p__58239;
var map__58241__$1 = (((((!((map__58241 == null))))?(((((map__58241.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58241.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58241):map__58241);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58241__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__58242 = p__58240;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58242,(0),null);
var uid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58242,(1),null);
var block = (function (){var G__58246 = cljs.core.deref(athens.db.dsdb);
var G__58247 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("node","title","node/title",628940777),new cljs.core.Keyword("block","string","block/string",-2066596447)], null);
var G__58248 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid], null);
return (datascript.core.pull.cljs$core$IFn$_invoke$arity$3 ? datascript.core.pull.cljs$core$IFn$_invoke$arity$3(G__58246,G__58247,G__58248) : datascript.core.pull.call(null,G__58246,G__58247,G__58248));
})();
var new_item = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([block,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"open","open",-1763596448),true,new cljs.core.Keyword(null,"index","index",-1531685915),(-1)], null)], 0));
var new_items = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("right-sidebar","items","right-sidebar/items",-881766733).cljs$core$IFn$_invoke$arity$1(db),uid,new_item);
var inc_items = cljs.core.reduce_kv((function (m,k,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,cljs.core.update.cljs$core$IFn$_invoke$arity$3(v,new cljs.core.Keyword(null,"index","index",-1531685915),cljs.core.inc));
}),cljs.core.PersistentArrayMap.EMPTY,new_items);
var sorted_items = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.sorted_map_by((function (k1,k2){
return cljs.core.compare(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new_items,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k1,new cljs.core.Keyword(null,"index","index",-1531685915)], null)),k2], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new_items,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k2,new cljs.core.Keyword(null,"index","index",-1531685915)], null)),k1], null));
})),inc_items);
var G__58249 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("right-sidebar","items","right-sidebar/items",-881766733),sorted_items)], null);
if(cljs.core.not(new cljs.core.Keyword("right-sidebar","open","right-sidebar/open",83006133).cljs$core$IFn$_invoke$arity$1(db))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__58249,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("right-sidebar","toggle","right-sidebar/toggle",-1089397191)], null));
} else {
return G__58249;
}
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("editing","uid","editing/uid",974963040),(function (p__58250,p__58251){
var map__58252 = p__58250;
var map__58252__$1 = (((((!((map__58252 == null))))?(((((map__58252.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58252.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58252):map__58252);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58252__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__58253 = p__58251;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58253,(0),null);
var uid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58253,(1),null);
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58253,(2),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("editing","uid","editing/uid",974963040),uid),new cljs.core.Keyword("editing","focus","editing/focus",-1669016321),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [uid,index], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("editing","target","editing/target",-1618170463),(function (p__58257,p__58258){
var map__58259 = p__58257;
var map__58259__$1 = (((((!((map__58259 == null))))?(((((map__58259.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58259.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58259):map__58259);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58259__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__58260 = p__58258;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58260,(0),null);
var target = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58260,(1),null);
var uid = cljs.core.second(clojure.string.split.cljs$core$IFn$_invoke$arity$2(target.id,"editable-uid-"));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("editing","uid","editing/uid",974963040),uid)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("selected","add-item","selected/add-item",-508591222),(function (db,p__58264){
var vec__58265 = p__58264;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58265,(0),null);
var uid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58265,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.Keyword("selected","items","selected/items",1686402211),cljs.core.conj,uid);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("selected","remove-item","selected/remove-item",-1109760940),(function (db,p__58269){
var vec__58270 = p__58269;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58270,(0),null);
var uid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58270,(1),null);
var items = new cljs.core.Keyword("selected","items","selected/items",1686402211).cljs$core$IFn$_invoke$arity$1(db);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("selected","items","selected/items",1686402211),cljs.core.filterv((function (p1__58268_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(p1__58268_SHARP_,uid);
}),items));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("selected","add-items","selected/add-items",142460854),(function (db,p__58273){
var vec__58274 = p__58273;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58274,(0),null);
var uids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58274,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.Keyword("selected","items","selected/items",1686402211),cljs.core.concat,uids);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("selected","clear-items","selected/clear-items",-700315697),(function (db,_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("selected","items","selected/items",1686402211),cljs.core.PersistentVector.EMPTY);
}));
athens.events.select_up = (function athens$events$select_up(selected_items){
var first_item = cljs.core.first(selected_items);
var prev_block_uid_ = athens.db.prev_block_uid(first_item);
var prev_block = athens.db.get_block(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),prev_block_uid_], null));
var parent = athens.db.get_parent(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),first_item], null));
var editing_uid = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editing","uid","editing/uid",974963040)], null)));
var editing_idx = cljs.core.first(cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2((function (idx,x){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,editing_uid)){
return idx;
} else {
return null;
}
}),selected_items));
var n = cljs.core.count(selected_items);
var new_items = (((((editing_idx === (0))) && ((n > (1)))))?cljs.core.pop(selected_items):(cljs.core.truth_(new cljs.core.Keyword("node","title","node/title",628940777).cljs$core$IFn$_invoke$arity$1(prev_block))?selected_items:((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","uid","block/uid",-1623585167).cljs$core$IFn$_invoke$arity$1(parent),prev_block_uid_))?(function (){var parent_children = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__58277_SHARP_){
return new cljs.core.Keyword("block","uid","block/uid",-1623585167).cljs$core$IFn$_invoke$arity$1(p1__58277_SHARP_);
}),new cljs.core.Keyword("block","children","block/children",-1040716209).cljs$core$IFn$_invoke$arity$1(parent)));
var to_keep = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (x){
return (!(cljs.core.contains_QMARK_(parent_children,x)));
}),selected_items);
var new_vec = cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [prev_block_uid_], null),to_keep);
return new_vec;
})():cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [prev_block_uid_], null),selected_items)
)));
return new_items;
});
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("selected","up","selected/up",921350754),(function (db,p__58278){
var vec__58279 = p__58278;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58279,(0),null);
var selected_items = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58279,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("selected","items","selected/items",1686402211),athens.events.select_up(selected_items));
}));
athens.events.select_down = (function athens$events$select_down(selected_items){
var editing_uid = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editing","uid","editing/uid",974963040)], null)));
var editing_idx = cljs.core.first(cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2((function (idx,x){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,editing_uid)){
return idx;
} else {
return null;
}
}),selected_items));
var last_item = cljs.core.last(selected_items);
var next_block_uid_ = athens.db.next_block_uid.cljs$core$IFn$_invoke$arity$2(last_item,true);
if((editing_idx > (0))){
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(selected_items,(1));
} else {
if(cljs.core.truth_(next_block_uid_)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(selected_items,next_block_uid_);
} else {
return selected_items;

}
}
});
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("selected","down","selected/down",-1806586329),(function (db,p__58283){
var vec__58284 = p__58283;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58284,(0),null);
var selected_items = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58284,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("selected","items","selected/items",1686402211),athens.events.select_down(selected_items));
}));
/**
 * We know that we only need to dec indices after the last block. The former blocks are necessarily going to remove all
 *   tail children, meaning we only need to be concerned with the last N blocks that are selected, adjacent siblings, to
 *   determine the minus-after value.
 */
athens.events.delete_selected = (function athens$events$delete_selected(selected_items){
var last_item = cljs.core.last(selected_items);
var selected_sibs_of_last = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.second,(function (){var G__58290 = new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?sib-uid","?sib-uid",-1881170629,null),new cljs.core.Symbol(null,"?o","?o",-1814741084,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?uid","?uid",-1894399761,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?selected","?selected",802438135,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("block","uid","block/uid",-1623585167),new cljs.core.Symbol(null,"?uid","?uid",-1894399761,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?p","?p",-10896580,null),new cljs.core.Keyword("block","children","block/children",-1040716209),new cljs.core.Symbol(null,"?e","?e",-1194391683,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?p","?p",-10896580,null),new cljs.core.Keyword("block","children","block/children",-1040716209),new cljs.core.Symbol(null,"?sib","?sib",-855475017,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?sib","?sib",-855475017,null),new cljs.core.Keyword("block","uid","block/uid",-1623585167),new cljs.core.Symbol(null,"?sib-uid","?sib-uid",-1881170629,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"?sib-uid","?sib-uid",-1881170629,null),new cljs.core.Symbol(null,"?selected","?selected",802438135,null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?sib","?sib",-855475017,null),new cljs.core.Keyword("block","order","block/order",-1429282437),new cljs.core.Symbol(null,"?o","?o",-1814741084,null)], null)], null);
var G__58291 = cljs.core.deref(athens.db.dsdb);
var G__58292 = last_item;
var G__58293 = selected_items;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$4 ? datascript.core.q.cljs$core$IFn$_invoke$arity$4(G__58290,G__58291,G__58292,G__58293) : datascript.core.q.call(null,G__58290,G__58291,G__58292,G__58293));
})());
var vec__58287 = cljs.core.last(selected_sibs_of_last);
var uid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58287,(0),null);
var order = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58287,(1),null);
var parent = athens.db.get_parent(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid], null));
var n = cljs.core.count(selected_sibs_of_last);
return athens.db.minus_after(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(parent),order,n);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("selected","delete","selected/delete",-812991161),(function (p__58295,p__58296){
var map__58297 = p__58295;
var map__58297__$1 = (((((!((map__58297 == null))))?(((((map__58297.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58297.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58297):map__58297);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58297__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__58298 = p__58296;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58298,(0),null);
var selected_items = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58298,(1),null);
var retract_vecs = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__58294_SHARP_){
return athens.db.retract_uid_recursively(p1__58294_SHARP_);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([selected_items], 0));
var reindex_last_selected_parent = athens.events.delete_selected(selected_items);
var tx_data = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(retract_vecs,reindex_last_selected_parent);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transact","transact",-267998670),tx_data], null),new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("selected","items","selected/items",1686402211),cljs.core.PersistentVector.EMPTY)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("alert","set","alert/set",396257190),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (db,alert){
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"alert","alert",-571950580),new cljs.core.Symbol(null,"alert","alert",1068580947,null)));

var opts__54730__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__54731__auto__ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var opts__54730__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__54731__auto__ = db;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__54731__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__54731__auto__;
})(),new cljs.core.Keyword(null,"alert","alert",-571950580),(function (){var opts__54730__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__54731__auto__ = alert;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__54731__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"alert","alert",1068580947,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__54731__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__54731__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"alert","alert",-571950580),new cljs.core.Symbol(null,"alert","alert",1068580947,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__54731__auto__;
}catch (e58302){var e = e58302;
throw e;
}}):(function (db,alert){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"alert","alert",-571950580),alert);
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("alert","unset","alert/unset",-421582694),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (db){
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"alert","alert",-571950580),null));

var opts__54730__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__54731__auto__ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var opts__54730__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__54731__auto__ = db;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__54731__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__54731__auto__;
})(),new cljs.core.Keyword(null,"alert","alert",-571950580),null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__54731__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"alert","alert",-571950580),null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__54731__auto__;
}catch (e58303){var e = e58303;
throw e;
}}):(function (db){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"alert","alert",-571950580),null);
})));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("alert","js","alert/js",1692948327),(function (_,p__58304){
var vec__58305 = p__58304;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58305,(0),null);
var message = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58305,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("alert","js!","alert/js!",-1297535531),message], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("modal","toggle","modal/toggle",1389100091),(function (db,_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"modal","modal",-1031880850),cljs.core.not);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("loading","set","loading/set",102170502),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (db){
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loading?","loading?",1905707049)], null),true));

var opts__54730__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__54731__auto__ = cljs.core.assoc_in((function (){var opts__54730__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__54731__auto__ = db;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__54731__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__54731__auto__;
})(),(function (){var opts__54730__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__54731__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loading?","loading?",1905707049)], null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__54731__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loading?","loading?",1905707049)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__54731__auto__;
})(),true);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__54731__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loading?","loading?",1905707049)], null),true),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__54731__auto__;
}catch (e58308){var e = e58308;
throw e;
}}):(function (db){
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loading?","loading?",1905707049)], null),true);
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("loading","unset","loading/unset",-44658566),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (db){
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loading?","loading?",1905707049)], null),false));

var opts__54730__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__54731__auto__ = cljs.core.assoc_in((function (){var opts__54730__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__54731__auto__ = db;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__54731__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__54731__auto__;
})(),(function (){var opts__54730__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__54731__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loading?","loading?",1905707049)], null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__54731__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loading?","loading?",1905707049)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__54731__auto__;
})(),false);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__54731__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loading?","loading?",1905707049)], null),false),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__54731__auto__;
}catch (e58309){var e = e58309;
throw e;
}}):(function (db){
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loading?","loading?",1905707049)], null),false);
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("tooltip","uid","tooltip/uid",1421925099),(function (db,p__58310){
var vec__58311 = p__58310;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58311,(0),null);
var uid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58311,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("tooltip","uid","tooltip/uid",1421925099),uid);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("daily-notes","reset","daily-notes/reset",1615543639),(function (db,_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("daily-notes","items","daily-notes/items",227138573),cljs.core.PersistentVector.EMPTY);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("daily-notes","add","daily-notes/add",1566486218),(function (db,p__58314){
var vec__58315 = p__58314;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58315,(0),null);
var uid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58315,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("daily-notes","items","daily-notes/items",227138573),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [uid], null));
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("daily-note","prev","daily-note/prev",428686172),(function (p__58318,p__58319){
var map__58320 = p__58318;
var map__58320__$1 = (((((!((map__58320 == null))))?(((((map__58320.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58320.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58320):map__58320);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58320__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__58321 = p__58319;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58321,(0),null);
var map__58324 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58321,(1),null);
var map__58324__$1 = (((((!((map__58324 == null))))?(((((map__58324.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58324.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58324):map__58324);
var uid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58324__$1,new cljs.core.Keyword(null,"uid","uid",-1447769400));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58324__$1,new cljs.core.Keyword(null,"title","title",636505583));
var new_db = cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("daily-notes","items","daily-notes/items",227138573),(function (items){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [uid], null),items);
}));
if(cljs.core.truth_(athens.db.e_by_av(new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),new_db], null);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),new_db,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("page","create","page/create",-1304816391),title,uid], null)], null);
}
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("daily-note","next","daily-note/next",-792628811),(function (p__58327,p__58328){
var map__58329 = p__58327;
var map__58329__$1 = (((((!((map__58329 == null))))?(((((map__58329.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58329.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58329):map__58329);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58329__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__58330 = p__58328;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58330,(0),null);
var map__58333 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58330,(1),null);
var map__58333__$1 = (((((!((map__58333 == null))))?(((((map__58333.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58333.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58333):map__58333);
var uid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58333__$1,new cljs.core.Keyword(null,"uid","uid",-1447769400));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58333__$1,new cljs.core.Keyword(null,"title","title",636505583));
var new_db = cljs.core.update.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.Keyword("daily-notes","items","daily-notes/items",227138573),cljs.core.conj,uid);
if(cljs.core.truth_(athens.db.e_by_av(new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),new_db], null);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),new_db,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("page","create","page/create",-1304816391),title,uid], null)], null);
}
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("get-db","init","get-db/init",-642889137),(function (p__58337,_){
var map__58338 = p__58337;
var map__58338__$1 = (((((!((map__58338 == null))))?(((((map__58338.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58338.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58338):map__58338);
var rfdb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58338__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(athens.db.rfdb,new cljs.core.Keyword(null,"loading?","loading?",1905707049),true),new cljs.core.Keyword(null,"async-flow","async-flow",1464712702),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"first-dispatch","first-dispatch",128561923),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("http","get-db","http/get-db",-618568620)], null)
,new cljs.core.Keyword(null,"rules","rules",1198912366),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"when","when",-576417306),new cljs.core.Keyword(null,"seen?","seen?",-1677689856),new cljs.core.Keyword(null,"events","events",1792552201),new cljs.core.Keyword(null,"reset-conn","reset-conn",235244638),new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("loading","unset","loading/unset",-44658566)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"navigate","navigate",657596805),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"current-route","current-route",2067529448).cljs$core$IFn$_invoke$arity$1(rfdb)))], null)], null),new cljs.core.Keyword(null,"halt?","halt?",-1110658247),true], null)], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("http","get-db","http/get-db",-618568620),(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http","http",382524695),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"url","url",276297046),athens.db.athens_url,new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),false], null),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("http-success","get-db","http-success/get-db",-721270786)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("alert","set","alert/set",396257190)], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("http-success","get-db","http-success/get-db",-721270786),(function (_,p__58340){
var vec__58341 = p__58340;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58341,(0),null);
var json_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58341,(1),null);
var datoms = athens.db.str_to_db_tx(json_str);
var new_db = datascript.core.db_with((datascript.core.empty_db.cljs$core$IFn$_invoke$arity$1 ? datascript.core.empty_db.cljs$core$IFn$_invoke$arity$1(athens.db.schema) : datascript.core.empty_db.call(null,athens.db.schema)),datoms);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reset-conn","reset-conn",235244638),new_db], null),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("local-storage","set-db","local-storage/set-db",1822850040),new_db], null)], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("local-storage","get-db","local-storage/get-db",1436156387),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"local-storage","local-storage",-1301104068),"datascript/DB")], null),(function (p__58344,_){
var map__58345 = p__58344;
var map__58345__$1 = (((((!((map__58345 == null))))?(((((map__58345.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58345.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58345):map__58345);
var local_storage = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58345__$1,new cljs.core.Keyword(null,"local-storage","local-storage",-1301104068));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reset-conn","reset-conn",235244638),datascript.transit.read_transit_str(local_storage)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("local-storage","set-db","local-storage/set-db",1822850040),(function (_,p__58347){
var vec__58348 = p__58347;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58348,(0),null);
var db = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58348,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("local-storage","set-db!","local-storage/set-db!",581380949),db], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("local-storage","set-theme","local-storage/set-theme",747726220),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"local-storage","local-storage",-1301104068),"theme/dark")], null),(function (p__58351,_){
var map__58352 = p__58351;
var map__58352__$1 = (((((!((map__58352 == null))))?(((((map__58352.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58352.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58352):map__58352);
var local_storage = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58352__$1,new cljs.core.Keyword(null,"local-storage","local-storage",-1301104068));
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58352__$1,new cljs.core.Keyword(null,"db","db",993250759));
var is_dark = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("true",local_storage);
var theme = ((is_dark)?athens.style.THEME_DARK:athens.style.THEME_LIGHT);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("theme","dark","theme/dark",1860051576),is_dark),new cljs.core.Keyword("stylefy","tag","stylefy/tag",1120934997),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [":root",athens.style.permute_color_opacities(theme)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("theme","toggle","theme/toggle",1382973879),(function (p__58354,_){
var map__58355 = p__58354;
var map__58355__$1 = (((((!((map__58355 == null))))?(((((map__58355.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58355.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58355):map__58355);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58355__$1,new cljs.core.Keyword(null,"db","db",993250759));
var dark_QMARK_ = new cljs.core.Keyword("theme","dark","theme/dark",1860051576).cljs$core$IFn$_invoke$arity$1(db);
var new_dark = cljs.core.not(dark_QMARK_);
var theme = (cljs.core.truth_(dark_QMARK_)?athens.style.THEME_LIGHT:athens.style.THEME_DARK);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("theme","dark","theme/dark",1860051576),new_dark),new cljs.core.Keyword("local-storage","set!","local-storage/set!",901741855),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["theme/dark",new_dark], null),new cljs.core.Keyword("stylefy","tag","stylefy/tag",1120934997),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [":root",athens.style.permute_color_opacities(theme)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"transact","transact",-267998670),(function (_,p__58357){
var vec__58358 = p__58357;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58358,(0),null);
var tx_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58358,(1),null);
var synced_QMARK_ = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","synced","db/synced",-1518558434)], null)));
var electron_QMARK_ = athens.util.electron_QMARK_();
if(cljs.core.truth_((function (){var and__4115__auto__ = synced_QMARK_;
if(cljs.core.truth_(and__4115__auto__)){
return electron_QMARK_;
} else {
return and__4115__auto__;
}
})())){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transact!","transact!",-822725810),tx_data], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","not-synced","db/not-synced",1154889658)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"save","save",1850079149)], null)], null)], null)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transact!","transact!",-822725810),tx_data], null)], null)], null);
}
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"reset-conn","reset-conn",235244638),(function (_,p__58361){
var vec__58362 = p__58361;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58362,(0),null);
var db = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58362,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reset-conn!","reset-conn!",-325354379),db], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("page","create","page/create",-1304816391),(function (_,p__58365){
var vec__58366 = p__58365;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58366,(0),null);
var title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58366,(1),null);
var uid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58366,(2),null);
var now = athens.util.now_ts();
var child_uid = athens.util.gen_block_uid();
var child = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("db","id","db/id",-1388397098),(-2),new cljs.core.Keyword("create","time","create/time",-1563077754),now,new cljs.core.Keyword("edit","time","edit/time",1384867476),now,new cljs.core.Keyword("block","uid","block/uid",-1623585167),child_uid,new cljs.core.Keyword("block","order","block/order",-1429282437),(0),new cljs.core.Keyword("block","open","block/open",-1875254829),true,new cljs.core.Keyword("block","string","block/string",-2066596447),""], null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transact","transact",-267998670),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword("db","id","db/id",-1388397098),(-1),new cljs.core.Keyword("node","title","node/title",628940777),title,new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid,new cljs.core.Keyword("create","time","create/time",-1563077754),now,new cljs.core.Keyword("edit","time","edit/time",1384867476),now,new cljs.core.Keyword("block","children","block/children",-1040716209),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [child], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editing","uid","editing/uid",974963040),child_uid], null)], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("page","delete","page/delete",-1774686917),(function (_,p__58369){
var vec__58370 = p__58369;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58370,(0),null);
var uid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58370,(1),null);
var title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58370,(2),null);
var retract_blocks = athens.db.retract_uid_recursively(uid);
var delete_linked_refs = athens.db.replace_linked_refs(title);
var tx_data = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(retract_blocks,delete_linked_refs);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transact","transact",-267998670),tx_data], null)], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("page","reindex-left-sidebar","page/reindex-left-sidebar",642317205),(function (_,___$1){
var sidebar_ents = cljs.core.vec(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (i,m){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.Keyword("page","sidebar","page/sidebar",32416927),i);
}),cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("page","sidebar","page/sidebar",32416927),(function (){var G__58373 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"pull","pull",779986722,null),new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null)),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("page","sidebar","page/sidebar",32416927),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
var G__58374 = cljs.core.deref(athens.db.dsdb);
return (datascript.core.q.cljs$core$IFn$_invoke$arity$2 ? datascript.core.q.cljs$core$IFn$_invoke$arity$2(G__58373,G__58374) : datascript.core.q.call(null,G__58373,G__58374));
})())));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transact","transact",-267998670),sidebar_ents], null)], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("page","add-shortcut","page/add-shortcut",467846378),(function (_,p__58375){
var vec__58376 = p__58375;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58376,(0),null);
var uid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58376,(1),null);
var sidebar_ents_count = (function (){var or__4126__auto__ = (function (){var G__58381 = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"?e","?e",-1194391683,null)),new cljs.core.Symbol(null,".",".",1975675962,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("page","sidebar","page/sidebar",32416927),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
var G__58382 = cljs.core.deref(athens.db.dsdb);
return (datascript.core.q.cljs$core$IFn$_invoke$arity$2 ? datascript.core.q.cljs$core$IFn$_invoke$arity$2(G__58381,G__58382) : datascript.core.q.call(null,G__58381,G__58382));
})();
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (1);
}
})();
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transact","transact",-267998670),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid,new cljs.core.Keyword("page","sidebar","page/sidebar",32416927),sidebar_ents_count], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("page","reindex-left-sidebar","page/reindex-left-sidebar",642317205)], null)], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("page","remove-shortcut","page/remove-shortcut",301722603),(function (_,p__58383){
var vec__58384 = p__58383;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58384,(0),null);
var uid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58384,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transact","transact",-267998670),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","retract","db/retract",-1549825231),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid], null),new cljs.core.Keyword("page","sidebar","page/sidebar",32416927)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("page","reindex-left-sidebar","page/reindex-left-sidebar",642317205)], null)], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"save","save",1850079149),(function (_,___$1){
var db_filepath = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","filepath","db/filepath",1097485287)], null));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("fs","write!","fs/write!",-1029545496),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(db_filepath),datascript.transit.write_transit_str(cljs.core.deref(athens.db.dsdb))], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"undo","undo",-1818036302),(function (_,___$1){
var temp__5735__auto__ = athens.db.find_prev(cljs.core.deref(athens.db.history),(function (p1__58387_SHARP_){
return (cljs.core.deref(athens.db.dsdb) === p1__58387_SHARP_);
}));
if(cljs.core.truth_(temp__5735__auto__)){
var prev = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reset-conn!","reset-conn!",-325354379),prev], null);
} else {
return null;
}
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"redo","redo",501190664),(function (_,___$1){
var temp__5735__auto__ = athens.db.find_next(cljs.core.deref(athens.db.history),(function (p1__58388_SHARP_){
return (cljs.core.deref(athens.db.dsdb) === p1__58388_SHARP_);
}));
if(cljs.core.truth_(temp__5735__auto__)){
var next = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reset-conn!","reset-conn!",-325354379),next], null);
} else {
return null;
}
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"up","up",-269712113),(function (_,p__58389){
var vec__58390 = p__58389;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58390,(0),null);
var uid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58390,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editing","uid","editing/uid",974963040),(function (){var or__4126__auto__ = athens.db.prev_block_uid(uid);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return uid;
}
})()], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"down","down",1565245570),(function (_,p__58393){
var vec__58394 = p__58393;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58394,(0),null);
var uid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58394,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editing","uid","editing/uid",974963040),(function (){var or__4126__auto__ = athens.db.next_block_uid.cljs$core$IFn$_invoke$arity$1(uid);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return uid;
}
})()], null)], null);
}));
/**
 * If root and 0th child, 1) if value, no-op, 2) if blank value, delete only block.
 *   No-op if parent is missing.
 *   No-op if parent is prev-block and block has children.
 *   No-op if prev-sibling-block has children.
 *   Otherwise delete block and join with previous block
 *   If prev-block has children
 */
athens.events.backspace = (function athens$events$backspace(uid,value){
var block = athens.db.get_block(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid], null));
var map__58397 = block;
var map__58397__$1 = (((((!((map__58397 == null))))?(((((map__58397.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58397.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58397):map__58397);
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__58397__$1,new cljs.core.Keyword("block","children","block/children",-1040716209),cljs.core.PersistentVector.EMPTY);
var order = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58397__$1,new cljs.core.Keyword("block","order","block/order",-1429282437));
var parent = athens.db.get_parent(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid], null));
var reindex = athens.db.dec_after(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(parent),new cljs.core.Keyword("block","order","block/order",-1429282437).cljs$core$IFn$_invoke$arity$1(block));
var prev_block_uid_ = athens.db.prev_block_uid(uid);
var prev_block = athens.db.get_block(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),prev_block_uid_], null));
var prev_sib_order = (new cljs.core.Keyword("block","order","block/order",-1429282437).cljs$core$IFn$_invoke$arity$1(block) - (1));
var prev_sib = (function (){var G__58399 = new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?sib","?sib",-855475017,null),new cljs.core.Symbol(null,".",".",1975675962,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Symbol(null,"?target-uid","?target-uid",881382745,null),new cljs.core.Symbol(null,"?prev-sib-order","?prev-sib-order",-1713092663,null),new cljs.core.Keyword(null,"where","where",-2044795965),cljs.core.list(new cljs.core.Symbol(null,"siblings","siblings",2022816684,null),new cljs.core.Symbol(null,"?target-uid","?target-uid",881382745,null),new cljs.core.Symbol(null,"?sib","?sib",-855475017,null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?sib","?sib",-855475017,null),new cljs.core.Keyword("block","order","block/order",-1429282437),new cljs.core.Symbol(null,"?prev-sib-order","?prev-sib-order",-1713092663,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?sib","?sib",-855475017,null),new cljs.core.Keyword("block","uid","block/uid",-1623585167),new cljs.core.Symbol(null,"?uid","?uid",-1894399761,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?sib","?sib",-855475017,null),new cljs.core.Keyword("block","children","block/children",-1040716209),new cljs.core.Symbol(null,"?ch","?ch",-1777351896,null)], null)], null);
var G__58400 = cljs.core.deref(athens.db.dsdb);
var G__58401 = athens.db.rules;
var G__58402 = uid;
var G__58403 = prev_sib_order;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$5 ? datascript.core.q.cljs$core$IFn$_invoke$arity$5(G__58399,G__58400,G__58401,G__58402,G__58403) : datascript.core.q.call(null,G__58399,G__58400,G__58401,G__58402,G__58403));
})();
var prev_sib__$1 = athens.db.get_block(prev_sib);
var retract_block = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","retractEntity","db/retractEntity",-1452737935),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block)], null);
var new_parent = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(parent),new cljs.core.Keyword("block","children","block/children",-1040716209),reindex], null);
if(cljs.core.not(parent)){
return null;
} else {
if(cljs.core.truth_(((cljs.core.empty_QMARK_(children))?(function (){var and__4115__auto__ = new cljs.core.Keyword("node","title","node/title",628940777).cljs$core$IFn$_invoke$arity$1(parent);
if(cljs.core.truth_(and__4115__auto__)){
return (((order === (0))) && (clojure.string.blank_QMARK_(value)));
} else {
return and__4115__auto__;
}
})():false))){
var tx_data = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [retract_block,new_parent], null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transact","transact",-267998670),tx_data], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editing","uid","editing/uid",974963040),null], null)], null)], null);
} else {
if(cljs.core.truth_((function (){var and__4115__auto__ = cljs.core.not_empty(children);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not_empty(new cljs.core.Keyword("block","children","block/children",-1040716209).cljs$core$IFn$_invoke$arity$1(prev_sib__$1));
} else {
return and__4115__auto__;
}
})())){
return null;
} else {
if(cljs.core.truth_((function (){var and__4115__auto__ = cljs.core.not_empty(children);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(parent,prev_block);
} else {
return and__4115__auto__;
}
})())){
return null;
} else {
var retracts = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (x){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","retract","db/retract",-1549825231),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block),new cljs.core.Keyword("block","children","block/children",-1040716209),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(x)], null);
}),children);
var new_prev_block = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),prev_block_uid_], null),new cljs.core.Keyword("block","string","block/string",-2066596447),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","string","block/string",-2066596447).cljs$core$IFn$_invoke$arity$1(prev_block)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)].join(''),new cljs.core.Keyword("block","children","block/children",-1040716209),children], null);
var tx_data = cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(retracts,retract_block,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new_prev_block,new_parent], 0));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ms","ms",-1152709733),(0),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transact","transact",-267998670),tx_data], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ms","ms",-1152709733),(10),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editing","uid","editing/uid",974963040),prev_block_uid_,cljs.core.count(new cljs.core.Keyword("block","string","block/string",-2066596447).cljs$core$IFn$_invoke$arity$1(prev_block))], null)], null)], null)], null);

}
}
}
}
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"backspace","backspace",-696007848),(function (_,p__58404){
var vec__58405 = p__58404;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58405,(0),null);
var uid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58405,(1),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58405,(2),null);
return athens.events.backspace(uid,value);
}));
athens.events.split_block = (function athens$events$split_block(uid,val,index){
var parent = athens.db.get_parent(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid], null));
var block = athens.db.get_block(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid], null));
var map__58408 = block;
var map__58408__$1 = (((((!((map__58408 == null))))?(((((map__58408.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58408.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58408):map__58408);
var order = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58408__$1,new cljs.core.Keyword("block","order","block/order",-1429282437));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__58408__$1,new cljs.core.Keyword("block","children","block/children",-1040716209),cljs.core.PersistentVector.EMPTY);
var open = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58408__$1,new cljs.core.Keyword("block","open","block/open",-1875254829));
var head = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(val,(0),index);
var tail = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(val,index);
var new_uid = athens.util.gen_block_uid();
var retracts = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (x){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","retract","db/retract",-1549825231),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block),new cljs.core.Keyword("block","children","block/children",-1040716209),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(x)], null);
}),children);
var next_block = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword("db","id","db/id",-1388397098),(-1),new cljs.core.Keyword("block","order","block/order",-1429282437),(order + (1)),new cljs.core.Keyword("block","uid","block/uid",-1623585167),new_uid,new cljs.core.Keyword("block","open","block/open",-1875254829),open,new cljs.core.Keyword("block","children","block/children",-1040716209),children,new cljs.core.Keyword("block","string","block/string",-2066596447),tail], null);
var reindex = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [next_block], null),athens.db.inc_after(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(parent),order));
var new_block = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block),new cljs.core.Keyword("block","string","block/string",-2066596447),head], null);
var new_parent = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(parent),new cljs.core.Keyword("block","children","block/children",-1040716209),reindex], null);
var tx_data = cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(retracts,new_block,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new_parent], 0));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transact","transact",-267998670),tx_data], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editing","uid","editing/uid",974963040),new_uid], null)], null)], null)], null);
});
/**
 * Takes a block uid, its value, and the index to split the value string.
 *   It sets the value of the block to the head of (subs val 0 index)
 *   It then creates a new child block with the tail of the string set as its value and sets editing to that block.
 */
athens.events.split_block_to_children = (function athens$events$split_block_to_children(uid,val,index){
var block = athens.db.get_block(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid], null));
var head = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(val,(0),index);
var tail = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(val,index);
var new_uid = athens.util.gen_block_uid();
var new_block = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("db","id","db/id",-1388397098),(-1),new cljs.core.Keyword("block","order","block/order",-1429282437),(0),new cljs.core.Keyword("block","uid","block/uid",-1623585167),new_uid,new cljs.core.Keyword("block","open","block/open",-1875254829),true,new cljs.core.Keyword("block","string","block/string",-2066596447),tail], null);
var reindex = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_block], null),athens.db.inc_after(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block),(-1)));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transact","transact",-267998670),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block),new cljs.core.Keyword("block","string","block/string",-2066596447),head,new cljs.core.Keyword("edit","time","edit/time",1384867476),athens.util.now_ts()], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block),new cljs.core.Keyword("block","children","block/children",-1040716209),reindex], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editing","uid","editing/uid",974963040),new_uid], null)], null)], null)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"split-block-to-children","split-block-to-children",-669108006),(function (_,p__58410){
var vec__58411 = p__58410;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58411,(0),null);
var uid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58411,(1),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58411,(2),null);
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58411,(3),null);
return athens.events.split_block_to_children(uid,val,index);
}));
/**
 * If user presses enter at the start of non-empty string, push that block down and
 *   and start editing a new block in the position of originating block - 'bump up' 
 */
athens.events.bump_up = (function athens$events$bump_up(uid){
var parent = athens.db.get_parent(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid], null));
var block = athens.db.get_block(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid], null));
var new_uid = athens.util.gen_block_uid();
var new_block = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("db","id","db/id",-1388397098),(-1),new cljs.core.Keyword("block","order","block/order",-1429282437),new cljs.core.Keyword("block","order","block/order",-1429282437).cljs$core$IFn$_invoke$arity$1(block),new cljs.core.Keyword("block","uid","block/uid",-1623585167),new_uid,new cljs.core.Keyword("block","open","block/open",-1875254829),true,new cljs.core.Keyword("block","string","block/string",-2066596447),""], null);
var reindex = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_block], null),athens.db.inc_after(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(parent),(new cljs.core.Keyword("block","order","block/order",-1429282437).cljs$core$IFn$_invoke$arity$1(block) - (1))));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transact","transact",-267998670),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(parent),new cljs.core.Keyword("block","children","block/children",-1040716209),reindex], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editing","uid","editing/uid",974963040),new_uid], null)], null)], null)], null);
});
/**
 * Add a new-block after block
 */
athens.events.new_block = (function athens$events$new_block(block,parent){
var new_uid = athens.util.gen_block_uid();
var new_block = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("block","order","block/order",-1429282437),(new cljs.core.Keyword("block","order","block/order",-1429282437).cljs$core$IFn$_invoke$arity$1(block) + (1)),new cljs.core.Keyword("block","uid","block/uid",-1623585167),new_uid,new cljs.core.Keyword("block","open","block/open",-1875254829),true,new cljs.core.Keyword("block","string","block/string",-2066596447),""], null);
var reindex = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_block], null),athens.db.inc_after(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(parent),new cljs.core.Keyword("block","order","block/order",-1429282437).cljs$core$IFn$_invoke$arity$1(block)));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transact","transact",-267998670),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),new cljs.core.Keyword("block","uid","block/uid",-1623585167).cljs$core$IFn$_invoke$arity$1(parent)], null),new cljs.core.Keyword("block","children","block/children",-1040716209),reindex], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editing","uid","editing/uid",974963040),new_uid], null)], null)], null)], null);
});
athens.events.add_child = (function athens$events$add_child(block){
var map__58414 = block;
var map__58414__$1 = (((((!((map__58414 == null))))?(((((map__58414.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58414.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58414):map__58414);
var p_eid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58414__$1,new cljs.core.Keyword("db","id","db/id",-1388397098));
var new_uid = athens.util.gen_block_uid();
var new_child = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),new_uid,new cljs.core.Keyword("block","string","block/string",-2066596447),"",new cljs.core.Keyword("block","order","block/order",-1429282437),(0),new cljs.core.Keyword("block","open","block/open",-1875254829),true], null);
var reindex = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_child], null),athens.db.inc_after(p_eid,(-1)));
var new_block = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),p_eid,new cljs.core.Keyword("block","children","block/children",-1040716209),reindex], null);
var tx_data = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_block], null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transact","transact",-267998670),tx_data], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editing","uid","editing/uid",974963040),new_uid], null)], null)], null)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("enter","add-child","enter/add-child",1358910429),(function (_,p__58416){
var vec__58417 = p__58416;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58417,(0),null);
var block = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58417,(1),null);
return athens.events.add_child(block);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("enter","split-block","enter/split-block",-120697549),(function (_,p__58420){
var vec__58421 = p__58420;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58421,(0),null);
var uid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58421,(1),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58421,(2),null);
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58421,(3),null);
return athens.events.split_block(uid,val,index);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("enter","bump-up","enter/bump-up",-577547414),(function (_,p__58424){
var vec__58425 = p__58424;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58425,(0),null);
var uid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58425,(1),null);
return athens.events.bump_up(uid);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("enter","new-block","enter/new-block",795048803),(function (_,p__58428){
var vec__58429 = p__58428;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58429,(0),null);
var block = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58429,(1),null);
var parent = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58429,(2),null);
return athens.events.new_block(block,parent);
}));
/**
 * - If block is open, has children, and caret at end, create new child
 *   - If block is CLOSED, has children, and caret at end, add a sibling block.
 *   - If value is empty and a root block, add a sibling block.
 *   - If caret is not at start, split block in half.
 *   - If block has children and is closed, if at end, just add another child.
 *   - If block has children and is closed and is in middle of block, split block.
 *   - If value is empty, unindent.
 *   - If caret is at start and there is a value, create new block below but keep same block index.
 */
athens.events.enter = (function athens$events$enter(rfdb,uid,d_key_down){
var block = athens.db.get_block(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid], null));
var parent = athens.db.get_parent(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid], null));
var root_block_QMARK_ = cljs.core.boolean$(new cljs.core.Keyword("node","title","node/title",628940777).cljs$core$IFn$_invoke$arity$1(parent));
var context_root_uid = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(rfdb,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-route","current-route",2067529448),new cljs.core.Keyword(null,"path-params","path-params",-48130597),new cljs.core.Keyword(null,"id","id",-1388402092)], null));
var map__58432 = d_key_down;
var map__58432__$1 = (((((!((map__58432 == null))))?(((((map__58432.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58432.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58432):map__58432);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58432__$1,new cljs.core.Keyword(null,"value","value",305978217));
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58432__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var event = (cljs.core.truth_((function (){var and__4115__auto__ = new cljs.core.Keyword("block","open","block/open",-1875254829).cljs$core$IFn$_invoke$arity$1(block);
if(cljs.core.truth_(and__4115__auto__)){
var and__4115__auto____$1 = cljs.core.not_empty(new cljs.core.Keyword("block","children","block/children",-1040716209).cljs$core$IFn$_invoke$arity$1(block));
if(cljs.core.truth_(and__4115__auto____$1)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(start,cljs.core.count(value));
} else {
return and__4115__auto____$1;
}
} else {
return and__4115__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("enter","add-child","enter/add-child",1358910429),block], null):(cljs.core.truth_(((cljs.core.not(new cljs.core.Keyword("block","open","block/open",-1875254829).cljs$core$IFn$_invoke$arity$1(block)))?(function (){var and__4115__auto__ = cljs.core.not_empty(new cljs.core.Keyword("block","children","block/children",-1040716209).cljs$core$IFn$_invoke$arity$1(block));
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(start,cljs.core.count(value));
} else {
return and__4115__auto__;
}
})():false))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("enter","new-block","enter/new-block",795048803),block,parent], null):((((cljs.core.empty_QMARK_(value)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(context_root_uid,new cljs.core.Keyword("block","uid","block/uid",-1623585167).cljs$core$IFn$_invoke$arity$1(parent))) || (root_block_QMARK_)))))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("enter","new-block","enter/new-block",795048803),block,parent], null):(((!((start === (0)))))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("enter","split-block","enter/split-block",-120697549),uid,value,start], null):((cljs.core.empty_QMARK_(value))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unindent","unindent",-1291301718),uid,d_key_down,context_root_uid], null):(cljs.core.truth_((((start === (0)))?value:false))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("enter","bump-up","enter/bump-up",-577547414),uid], null):null))))));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),event], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"enter","enter",1792452624),(function (p__58434,p__58435){
var map__58436 = p__58434;
var map__58436__$1 = (((((!((map__58436 == null))))?(((((map__58436.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58436.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58436):map__58436);
var rfdb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58436__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__58437 = p__58435;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58437,(0),null);
var uid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58437,(1),null);
var d_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58437,(2),null);
return athens.events.enter(rfdb,uid,d_event);
}));
/**
 * When indenting a single block:
 *   - retract block from parent
 *   - make block the last child of older sibling
 *   - reindex parent
 *   Only indent a block if it is not the zeroth block (first child).
 * 
 *   Uses `value` to update block/string as well. Otherwise, if user changes block string and indents, the local string
 *   is reset to original value, since it has not been unfocused yet (which is currently the transaction that updates the string).
 */
athens.events.indent = (function athens$events$indent(uid,d_key_down){
var map__58441 = d_key_down;
var map__58441__$1 = (((((!((map__58441 == null))))?(((((map__58441.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58441.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58441):map__58441);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58441__$1,new cljs.core.Keyword(null,"value","value",305978217));
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58441__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var end = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58441__$1,new cljs.core.Keyword(null,"end","end",-268185958));
var block = athens.db.get_block(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid], null));
var block_zero_QMARK_ = (new cljs.core.Keyword("block","order","block/order",-1429282437).cljs$core$IFn$_invoke$arity$1(block) === (0));
if(block_zero_QMARK_){
return null;
} else {
var parent = athens.db.get_parent(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid], null));
var older_sib = athens.db.get_older_sib(uid);
var new_block = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block),new cljs.core.Keyword("block","order","block/order",-1429282437),cljs.core.count(new cljs.core.Keyword("block","children","block/children",-1040716209).cljs$core$IFn$_invoke$arity$1(older_sib)),new cljs.core.Keyword("block","string","block/string",-2066596447),value], null);
var reindex = athens.db.dec_after(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(parent),new cljs.core.Keyword("block","order","block/order",-1429282437).cljs$core$IFn$_invoke$arity$1(block));
var retract = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","retract","db/retract",-1549825231),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(parent),new cljs.core.Keyword("block","children","block/children",-1040716209),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block)], null);
var new_older_sib = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(older_sib),new cljs.core.Keyword("block","children","block/children",-1040716209),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_block], null),new cljs.core.Keyword("block","open","block/open",-1875254829),true], null);
var new_parent = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(parent),new cljs.core.Keyword("block","children","block/children",-1040716209),reindex], null);
var tx_data = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [retract,new_older_sib,new_parent], null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transact","transact",-267998670),tx_data], null),new cljs.core.Keyword(null,"set-cursor-position","set-cursor-position",1058534914),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [uid,start,end], null)], null);
}
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"indent","indent",-148200125),(function (_,p__58443){
var vec__58444 = p__58443;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58444,(0),null);
var uid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58444,(1),null);
var d_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58444,(2),null);
return athens.events.indent(uid,d_event);
}));
/**
 * Only indent if all blocks are siblings, and first block is not already a zeroth child (root child).
 * 
 *   older-sib is the current older-sib, before indent happens, AKA the new parent.
 *   new-parent is current parent, not older-sib. new-parent becomes grandparent.
 *   Reindex parent, add blocks to end of older-sib.
 */
athens.events.indent_multi = (function athens$events$indent_multi(uids){
var blocks = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__58447_SHARP_){
return athens.db.get_block(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),p1__58447_SHARP_], null));
}),uids);
var same_parent_QMARK_ = athens.db.same_parent_QMARK_(uids);
var n_blocks = cljs.core.count(blocks);
var first_block = cljs.core.first(blocks);
var last_block = cljs.core.last(blocks);
var block_zero_QMARK_ = (new cljs.core.Keyword("block","order","block/order",-1429282437).cljs$core$IFn$_invoke$arity$1(first_block) === (0));
if(((same_parent_QMARK_) && ((!(block_zero_QMARK_))))){
var parent = athens.db.get_parent(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),cljs.core.first(uids)], null));
var older_sib = athens.db.get_older_sib(cljs.core.first(uids));
var n_sib = cljs.core.count(new cljs.core.Keyword("block","children","block/children",-1040716209).cljs$core$IFn$_invoke$arity$1(older_sib));
var new_blocks = cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (idx,x){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(x),new cljs.core.Keyword("block","order","block/order",-1429282437),(idx + n_sib)], null);
}),blocks);
var new_older_sib = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(older_sib),new cljs.core.Keyword("block","children","block/children",-1040716209),new_blocks,new cljs.core.Keyword("block","open","block/open",-1875254829),true], null);
var reindex = athens.db.minus_after(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(parent),new cljs.core.Keyword("block","order","block/order",-1429282437).cljs$core$IFn$_invoke$arity$1(last_block),n_blocks);
var new_parent = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(parent),new cljs.core.Keyword("block","children","block/children",-1040716209),reindex], null);
var retracts = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (x){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","retract","db/retract",-1549825231),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(parent),new cljs.core.Keyword("block","children","block/children",-1040716209),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(x)], null);
}),blocks);
var tx_data = cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(retracts,new_older_sib,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new_parent], 0));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transact","transact",-267998670),tx_data], null)], null)], null)], null);
} else {
return null;
}
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("indent","multi","indent/multi",-1413321465),(function (_,p__58448){
var vec__58449 = p__58448;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58449,(0),null);
var uids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58449,(1),null);
return athens.events.indent_multi(uids);
}));
/**
 * If parent is context-root or has node/title (date page), no-op.
 *   Otherwise, block becomes direct older sibling of parent (parent-order +1). reindex parent and grandparent.
 * - inc-after for grandparent
 * - dec-after for parent
 */
athens.events.unindent = (function athens$events$unindent(uid,d_key_down,context_root_uid){
var parent = athens.db.get_parent(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid], null));
var map__58452 = d_key_down;
var map__58452__$1 = (((((!((map__58452 == null))))?(((((map__58452.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58452.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58452):map__58452);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58452__$1,new cljs.core.Keyword(null,"value","value",305978217));
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58452__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var end = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58452__$1,new cljs.core.Keyword(null,"end","end",-268185958));
if(cljs.core.truth_(new cljs.core.Keyword("node","title","node/title",628940777).cljs$core$IFn$_invoke$arity$1(parent))){
return null;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","uid","block/uid",-1623585167).cljs$core$IFn$_invoke$arity$1(parent),context_root_uid)){
return null;
} else {
var block = athens.db.get_block(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid], null));
var grandpa = athens.db.get_parent(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(parent));
var new_block = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid,new cljs.core.Keyword("block","order","block/order",-1429282437),(new cljs.core.Keyword("block","order","block/order",-1429282437).cljs$core$IFn$_invoke$arity$1(parent) + (1)),new cljs.core.Keyword("block","string","block/string",-2066596447),value], null);
var reindex_grandpa = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_block], null),athens.db.inc_after(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(grandpa),new cljs.core.Keyword("block","order","block/order",-1429282437).cljs$core$IFn$_invoke$arity$1(parent)));
var reindex_parent = athens.db.dec_after(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(parent),new cljs.core.Keyword("block","order","block/order",-1429282437).cljs$core$IFn$_invoke$arity$1(block));
var new_parent = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(parent),new cljs.core.Keyword("block","children","block/children",-1040716209),reindex_parent], null);
var retract = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","retract","db/retract",-1549825231),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(parent),new cljs.core.Keyword("block","children","block/children",-1040716209),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid], null)], null);
var new_grandpa = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(grandpa),new cljs.core.Keyword("block","children","block/children",-1040716209),reindex_grandpa], null);
var tx_data = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [retract,new_parent,new_grandpa], null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transact","transact",-267998670),tx_data], null),new cljs.core.Keyword(null,"set-cursor-position","set-cursor-position",1058534914),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [uid,start,end], null)], null);

}
}
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"unindent","unindent",-1291301718),(function (p__58454,p__58455){
var map__58456 = p__58454;
var map__58456__$1 = (((((!((map__58456 == null))))?(((((map__58456.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58456.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58456):map__58456);
var rfdb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58456__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__58457 = p__58455;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58457,(0),null);
var uid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58457,(1),null);
var d_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58457,(2),null);
var context_root_uid = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(rfdb,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-route","current-route",2067529448),new cljs.core.Keyword(null,"path-params","path-params",-48130597),new cljs.core.Keyword(null,"id","id",-1388402092)], null));
return athens.events.unindent(uid,d_event,context_root_uid);
}));
/**
 * Do not do anything if root block child or if blocks are not siblings.
 *   Otherwise, retract and assert new parent for each block, and reindex parent and grandparent.
 */
athens.events.unindent_multi = (function athens$events$unindent_multi(uids,context_root_uid){
var parent = athens.db.get_parent(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),cljs.core.first(uids)], null));
var same_parent_QMARK_ = athens.db.same_parent_QMARK_(uids);
if(cljs.core.truth_(new cljs.core.Keyword("node","title","node/title",628940777).cljs$core$IFn$_invoke$arity$1(parent))){
return null;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","uid","block/uid",-1623585167).cljs$core$IFn$_invoke$arity$1(parent),context_root_uid)){
return null;
} else {
if((!(same_parent_QMARK_))){
return null;
} else {
var grandpa = athens.db.get_parent(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(parent));
var blocks = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__58461_SHARP_){
return athens.db.get_block(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),p1__58461_SHARP_], null));
}),uids);
var o_parent = new cljs.core.Keyword("block","order","block/order",-1429282437).cljs$core$IFn$_invoke$arity$1(parent);
var n_blocks = cljs.core.count(blocks);
var last_block = cljs.core.last(blocks);
var reindex_parent = athens.db.minus_after(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(parent),new cljs.core.Keyword("block","order","block/order",-1429282437).cljs$core$IFn$_invoke$arity$1(last_block),n_blocks);
var new_parent = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(parent),new cljs.core.Keyword("block","children","block/children",-1040716209),reindex_parent], null);
var new_blocks = cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (idx,uid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid,new cljs.core.Keyword("block","order","block/order",-1429282437),(idx + (o_parent + (1)))], null);
}),uids);
var reindex_grandpa = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new_blocks,athens.db.plus_after(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(grandpa),new cljs.core.Keyword("block","order","block/order",-1429282437).cljs$core$IFn$_invoke$arity$1(parent),n_blocks));
var retracts = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (x){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","retract","db/retract",-1549825231),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(parent),new cljs.core.Keyword("block","children","block/children",-1040716209),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(x)], null);
}),blocks);
var new_grandpa = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(grandpa),new cljs.core.Keyword("block","children","block/children",-1040716209),reindex_grandpa], null);
var tx_data = cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(retracts,new_parent,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new_grandpa], 0));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transact","transact",-267998670),tx_data], null)], null)], null)], null);

}
}
}
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("unindent","multi","unindent/multi",-555006624),(function (p__58462,p__58463){
var map__58464 = p__58462;
var map__58464__$1 = (((((!((map__58464 == null))))?(((((map__58464.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58464.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58464):map__58464);
var rfdb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58464__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__58465 = p__58463;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58465,(0),null);
var uids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58465,(1),null);
var context_root_uid = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(rfdb,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-route","current-route",2067529448),new cljs.core.Keyword(null,"path-params","path-params",-48130597),new cljs.core.Keyword(null,"id","id",-1388402092)], null));
return athens.events.unindent_multi(uids,context_root_uid);
}));
/**
 * Order will always be 0
 */
athens.events.drop_child = (function athens$events$drop_child(source,source_parent,target){
var new_source_block = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),new cljs.core.Keyword("block","uid","block/uid",-1623585167).cljs$core$IFn$_invoke$arity$1(source),new cljs.core.Keyword("block","order","block/order",-1429282437),(0)], null);
var reindex_source_parent = athens.db.dec_after(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(source_parent),new cljs.core.Keyword("block","order","block/order",-1429282437).cljs$core$IFn$_invoke$arity$1(source));
var reindex_target_parent = athens.db.inc_after(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(target),(-1));
var retract = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","retract","db/retract",-1549825231),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(source_parent),new cljs.core.Keyword("block","children","block/children",-1040716209),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),new cljs.core.Keyword("block","uid","block/uid",-1623585167).cljs$core$IFn$_invoke$arity$1(source)], null)], null);
var new_source_parent = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(source_parent),new cljs.core.Keyword("block","children","block/children",-1040716209),reindex_source_parent], null);
var new_target_parent = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(target),new cljs.core.Keyword("block","children","block/children",-1040716209),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(reindex_target_parent,new_source_block)], null);
var tx_data = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [retract,new_source_parent,new_target_parent], null);
return tx_data;
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("drop","child","drop/child",621693610),(function (_,p__58469){
var vec__58470 = p__58469;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58470,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58470,(1),null);
var source_parent = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58470,(2),null);
var target = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58470,(3),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transact","transact",-267998670),athens.events.drop_child(source,source_parent,target)], null)], null);
}));
/**
 * http://blog.jenkster.com/2013/11/clojure-less-than-greater-than-tip.html
 */
athens.events.between = (function athens$events$between(s,t,x){
if((s < t)){
return (((s < x)) && ((x < t)));
} else {
return (((t < x)) && ((x < s)));
}
});
athens.events.drop_same_parent = (function athens$events$drop_same_parent(kind,source,parent,target){
var s_order = new cljs.core.Keyword("block","order","block/order",-1429282437).cljs$core$IFn$_invoke$arity$1(source);
var t_order = new cljs.core.Keyword("block","order","block/order",-1429282437).cljs$core$IFn$_invoke$arity$1(target);
var target_above_QMARK_ = (t_order < s_order);
var _PLUS_or_ = ((target_above_QMARK_)?cljs.core._PLUS_:cljs.core._);
var above_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(kind,new cljs.core.Keyword(null,"above","above",-1286866470));
var below_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(kind,new cljs.core.Keyword(null,"below","below",-926774883));
var lower_bound = ((((above_QMARK_) && (target_above_QMARK_)))?(t_order - (1)):((((below_QMARK_) && (target_above_QMARK_)))?t_order:s_order
));
var upper_bound = ((((above_QMARK_) && ((!(target_above_QMARK_)))))?t_order:((((below_QMARK_) && ((!(target_above_QMARK_)))))?(t_order + (1)):s_order
));
var reindex = (function (){var G__58473 = new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?ch","?ch",-1777351896,null),new cljs.core.Symbol(null,"?new-order","?new-order",152538232,null),new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.Symbol("db","id","db/id",252134429,null),new cljs.core.Symbol("block","order","block/order",211249090,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Symbol(null,"?+or-","?+or-",729227800,null),new cljs.core.Symbol(null,"?parent","?parent",-1403127243,null),new cljs.core.Symbol(null,"?lower-bound","?lower-bound",1599003512,null),new cljs.core.Symbol(null,"?upper-bound","?upper-bound",1179724128,null),new cljs.core.Keyword(null,"where","where",-2044795965),cljs.core.list(new cljs.core.Symbol(null,"between","between",-1523336493,null),new cljs.core.Symbol(null,"?parent","?parent",-1403127243,null),new cljs.core.Symbol(null,"?lower-bound","?lower-bound",1599003512,null),new cljs.core.Symbol(null,"?upper-bound","?upper-bound",1179724128,null),new cljs.core.Symbol(null,"?ch","?ch",-1777351896,null),new cljs.core.Symbol(null,"?order","?order",2076500391,null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"?+or-","?+or-",729227800,null),new cljs.core.Symbol(null,"?order","?order",2076500391,null),(1)),new cljs.core.Symbol(null,"?new-order","?new-order",152538232,null)], null)], null);
var G__58474 = cljs.core.deref(athens.db.dsdb);
var G__58475 = athens.db.rules;
var G__58476 = _PLUS_or_;
var G__58477 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(parent);
var G__58478 = lower_bound;
var G__58479 = upper_bound;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$7 ? datascript.core.q.cljs$core$IFn$_invoke$arity$7(G__58473,G__58474,G__58475,G__58476,G__58477,G__58478,G__58479) : datascript.core.q.call(null,G__58473,G__58474,G__58475,G__58476,G__58477,G__58478,G__58479));
})();
var new_source_order = ((((above_QMARK_) && (target_above_QMARK_)))?t_order:((((above_QMARK_) && ((!(target_above_QMARK_)))))?(t_order - (1)):((((below_QMARK_) && (target_above_QMARK_)))?(t_order + (1)):((((below_QMARK_) && ((!(target_above_QMARK_)))))?t_order:null))));
var new_source_block = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(source),new cljs.core.Keyword("block","order","block/order",-1429282437),new_source_order], null);
var new_parent_children = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_source_block], null),reindex);
var new_parent = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(parent),new cljs.core.Keyword("block","children","block/children",-1040716209),new_parent_children], null);
var tx_data = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_parent], null);
return tx_data;
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("drop","same","drop/same",1086933528),(function (_,p__58480){
var vec__58481 = p__58480;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58481,(0),null);
var kind = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58481,(1),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58481,(2),null);
var parent = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58481,(3),null);
var target = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58481,(4),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transact","transact",-267998670),athens.events.drop_same_parent(kind,source,parent,target)], null)], null);
}));
/**
 * - Give source-block target-block's order.
 *   - inc-after target
 *   - dec-after source
 */
athens.events.drop_diff_parent = (function athens$events$drop_diff_parent(kind,source,source_parent,target,target_parent){
var t_order = new cljs.core.Keyword("block","order","block/order",-1429282437).cljs$core$IFn$_invoke$arity$1(target);
var new_block = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(source),new cljs.core.Keyword("block","order","block/order",-1429282437),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(kind,new cljs.core.Keyword(null,"above","above",-1286866470)))?t_order:(t_order + (1)))], null);
var reindex_source_parent = athens.db.dec_after(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(source_parent),new cljs.core.Keyword("block","order","block/order",-1429282437).cljs$core$IFn$_invoke$arity$1(source));
var reindex_target_parent = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_block], null),athens.db.inc_after(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(target_parent),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(kind,new cljs.core.Keyword(null,"above","above",-1286866470)))?(t_order - (1)):t_order)));
var retract = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","retract","db/retract",-1549825231),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(source_parent),new cljs.core.Keyword("block","children","block/children",-1040716209),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(source)], null);
var new_source_parent = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(source_parent),new cljs.core.Keyword("block","children","block/children",-1040716209),reindex_source_parent], null);
var new_target_parent = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(target_parent),new cljs.core.Keyword("block","children","block/children",-1040716209),reindex_target_parent], null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [retract,new_source_parent,new_target_parent], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("drop","diff","drop/diff",2132818350),(function (_,p__58484){
var vec__58485 = p__58484;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58485,(0),null);
var kind = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58485,(1),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58485,(2),null);
var source_parent = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58485,(3),null);
var target = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58485,(4),null);
var target_parent = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58485,(5),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transact","transact",-267998670),athens.events.drop_diff_parent(kind,source,source_parent,target,target_parent)], null)], null);
}));
athens.events.drop_bullet = (function athens$events$drop_bullet(source_uid,target_uid,kind){
var source = athens.db.get_block(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),source_uid], null));
var target = athens.db.get_block(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),target_uid], null));
var source_parent = athens.db.get_parent(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),source_uid], null));
var target_parent = athens.db.get_parent(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),target_uid], null));
var same_parent_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(source_parent,target_parent);
var event = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(kind,new cljs.core.Keyword(null,"child","child",623967545)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("drop","child","drop/child",621693610),source,source_parent,target], null):((same_parent_QMARK_)?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("drop","same","drop/same",1086933528),kind,source,source_parent,target], null):(((!(same_parent_QMARK_)))?new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("drop","diff","drop/diff",2132818350),kind,source,source_parent,target,target_parent], null):null)));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),event], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"drop","drop",364481611),(function (_,p__58488){
var vec__58489 = p__58488;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58489,(0),null);
var source_uid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58489,(1),null);
var target_uid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58489,(2),null);
var kind = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58489,(3),null);
return athens.events.drop_bullet(source_uid,target_uid,kind);
}));
athens.events.drop_multi_same_parent_all = (function athens$events$drop_multi_same_parent_all(kind,source_uids,parent,target){
var source_blocks = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__58492_SHARP_){
return athens.db.get_block(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),p1__58492_SHARP_], null));
}),source_uids);
var f_source = cljs.core.first(source_blocks);
var l_source = cljs.core.last(source_blocks);
var f_s_order = new cljs.core.Keyword("block","order","block/order",-1429282437).cljs$core$IFn$_invoke$arity$1(f_source);
var l_s_order = new cljs.core.Keyword("block","order","block/order",-1429282437).cljs$core$IFn$_invoke$arity$1(l_source);
var t_order = new cljs.core.Keyword("block","order","block/order",-1429282437).cljs$core$IFn$_invoke$arity$1(target);
var target_above_QMARK_ = (t_order < f_s_order);
var _PLUS_or_ = ((target_above_QMARK_)?cljs.core._PLUS_:cljs.core._);
var above_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(kind,new cljs.core.Keyword(null,"above","above",-1286866470));
var below_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(kind,new cljs.core.Keyword(null,"below","below",-926774883));
var lower_bound = ((((above_QMARK_) && (target_above_QMARK_)))?(t_order - (1)):((((below_QMARK_) && (target_above_QMARK_)))?t_order:l_s_order
));
var upper_bound = ((((above_QMARK_) && ((!(target_above_QMARK_)))))?t_order:((((below_QMARK_) && ((!(target_above_QMARK_)))))?(t_order + (1)):f_s_order
));
var n = cljs.core.count(source_uids);
var reindex = (function (){var G__58493 = new cljs.core.PersistentVector(null, 17, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?ch","?ch",-1777351896,null),new cljs.core.Symbol(null,"?new-order","?new-order",152538232,null),new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.Symbol("db","id","db/id",252134429,null),new cljs.core.Symbol("block","order","block/order",211249090,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Symbol(null,"?+or-","?+or-",729227800,null),new cljs.core.Symbol(null,"?parent","?parent",-1403127243,null),new cljs.core.Symbol(null,"?lower-bound","?lower-bound",1599003512,null),new cljs.core.Symbol(null,"?upper-bound","?upper-bound",1179724128,null),new cljs.core.Symbol(null,"?n","?n",-2053238410,null),new cljs.core.Keyword(null,"where","where",-2044795965),cljs.core.list(new cljs.core.Symbol(null,"between","between",-1523336493,null),new cljs.core.Symbol(null,"?parent","?parent",-1403127243,null),new cljs.core.Symbol(null,"?lower-bound","?lower-bound",1599003512,null),new cljs.core.Symbol(null,"?upper-bound","?upper-bound",1179724128,null),new cljs.core.Symbol(null,"?ch","?ch",-1777351896,null),new cljs.core.Symbol(null,"?order","?order",2076500391,null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"?+or-","?+or-",729227800,null),new cljs.core.Symbol(null,"?order","?order",2076500391,null),new cljs.core.Symbol(null,"?n","?n",-2053238410,null)),new cljs.core.Symbol(null,"?new-order","?new-order",152538232,null)], null)], null);
var G__58494 = cljs.core.deref(athens.db.dsdb);
var G__58495 = athens.db.rules;
var G__58496 = _PLUS_or_;
var G__58497 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(parent);
var G__58498 = lower_bound;
var G__58499 = upper_bound;
var G__58500 = n;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$8 ? datascript.core.q.cljs$core$IFn$_invoke$arity$8(G__58493,G__58494,G__58495,G__58496,G__58497,G__58498,G__58499,G__58500) : datascript.core.q.call(null,G__58493,G__58494,G__58495,G__58496,G__58497,G__58498,G__58499,G__58500));
})();
var new_source_blocks = ((target_above_QMARK_)?cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (idx,x){
var new_order = (function (){var G__58501 = (idx + t_order);
if(below_QMARK_){
return (G__58501 + (1));
} else {
return G__58501;
}
})();
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(x),new cljs.core.Keyword("block","order","block/order",-1429282437),new_order], null);
}),source_blocks):cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (idx,x){
var new_order = (function (){var G__58502 = (t_order - idx);
if(above_QMARK_){
return (G__58502 - (1));
} else {
return G__58502;
}
})();
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(x),new cljs.core.Keyword("block","order","block/order",-1429282437),new_order], null);
}),cljs.core.reverse(source_blocks)));
var new_parent_children = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new_source_blocks,reindex);
var new_parent = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(parent),new cljs.core.Keyword("block","children","block/children",-1040716209),new_parent_children], null);
var tx_data = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_parent], null);
return tx_data;
});
athens.events.drop_multi_same_source_parents = (function athens$events$drop_multi_same_source_parents(kind,source_uids,source_parent,target,target_parent){
var source_blocks = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__58503_SHARP_){
return athens.db.get_block(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),p1__58503_SHARP_], null));
}),source_uids);
var last_source = cljs.core.last(source_blocks);
var last_s_order = new cljs.core.Keyword("block","order","block/order",-1429282437).cljs$core$IFn$_invoke$arity$1(last_source);
var t_order = new cljs.core.Keyword("block","order","block/order",-1429282437).cljs$core$IFn$_invoke$arity$1(target);
var n = cljs.core.count(source_uids);
var new_source_blocks = cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (idx,x){
var new_order = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(kind,new cljs.core.Keyword(null,"above","above",-1286866470)))?(idx + t_order):((idx + t_order) + (1)));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(x),new cljs.core.Keyword("block","order","block/order",-1429282437),new_order], null);
}),source_blocks);
var reindex_source_parent = athens.db.minus_after(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(source_parent),last_s_order,n);
var bound = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(kind,new cljs.core.Keyword(null,"above","above",-1286866470)))?(t_order - (1)):t_order);
var reindex_target_parent = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new_source_blocks,athens.db.plus_after(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(target_parent),bound,n));
var retracts = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (x){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","retract","db/retract",-1549825231),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(source_parent),new cljs.core.Keyword("block","children","block/children",-1040716209),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),x], null)], null);
}),source_uids);
var new_source_parent = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(source_parent),new cljs.core.Keyword("block","children","block/children",-1040716209),reindex_source_parent], null);
var new_target_parent = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(target_parent),new cljs.core.Keyword("block","children","block/children",-1040716209),reindex_target_parent], null);
var tx_data = cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(retracts,new_source_parent,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new_target_parent], 0));
return tx_data;
});
/**
 * Only reindex after last target. plus-after
 */
athens.events.drop_multi_diff_source_parents = (function athens$events$drop_multi_diff_source_parents(kind,source_uids,target,target_parent){
var filtered_children = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__58504_SHARP_){
return new cljs.core.Keyword("block","uid","block/uid",-1623585167).cljs$core$IFn$_invoke$arity$1(p1__58504_SHARP_);
}),cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","order","block/order",-1429282437),(function (){var G__58508 = new cljs.core.PersistentVector(null, 17, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?children-uid","?children-uid",606076590,null),new cljs.core.Symbol(null,"?o","?o",-1814741084,null),new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.Symbol("block","uid","block/uid",16946360,null),new cljs.core.Symbol("block","order","block/order",211249090,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Symbol(null,"?target-uid","?target-uid",881382745,null),new cljs.core.Symbol(null,"?not-contains?","?not-contains?",835870690,null),new cljs.core.Symbol(null,"?source-uids","?source-uids",-26099172,null),new cljs.core.Keyword(null,"where","where",-2044795965),cljs.core.list(new cljs.core.Symbol(null,"siblings","siblings",2022816684,null),new cljs.core.Symbol(null,"?target-uid","?target-uid",881382745,null),new cljs.core.Symbol(null,"?children-e","?children-e",1945662815,null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?children-e","?children-e",1945662815,null),new cljs.core.Keyword("block","uid","block/uid",-1623585167),new cljs.core.Symbol(null,"?children-uid","?children-uid",606076590,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"?not-contains?","?not-contains?",835870690,null),new cljs.core.Symbol(null,"?source-uids","?source-uids",-26099172,null),new cljs.core.Symbol(null,"?children-uid","?children-uid",606076590,null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?children-e","?children-e",1945662815,null),new cljs.core.Keyword("block","order","block/order",-1429282437),new cljs.core.Symbol(null,"?o","?o",-1814741084,null)], null)], null);
var G__58509 = cljs.core.deref(athens.db.dsdb);
var G__58510 = athens.db.rules;
var G__58511 = new cljs.core.Keyword("block","uid","block/uid",-1623585167).cljs$core$IFn$_invoke$arity$1(target);
var G__58512 = athens.db.not_contains_QMARK_;
var G__58513 = cljs.core.set(source_uids);
return (datascript.core.q.cljs$core$IFn$_invoke$arity$6 ? datascript.core.q.cljs$core$IFn$_invoke$arity$6(G__58508,G__58509,G__58510,G__58511,G__58512,G__58513) : datascript.core.q.call(null,G__58508,G__58509,G__58510,G__58511,G__58512,G__58513));
})()));
var t_order = new cljs.core.Keyword("block","order","block/order",-1429282437).cljs$core$IFn$_invoke$arity$1(target);
var index = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(kind,new cljs.core.Keyword(null,"above","above",-1286866470)))?t_order:((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(kind,new cljs.core.Keyword(null,"below","below",-926774883))) && (athens.db.last_child_QMARK_(new cljs.core.Keyword("block","uid","block/uid",-1623585167).cljs$core$IFn$_invoke$arity$1(target)))))?t_order:((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(kind,new cljs.core.Keyword(null,"below","below",-926774883)))?(t_order + (1)):null)));
var n = cljs.core.count(filtered_children);
var head = cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(filtered_children,(0),index);
var tail = cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(filtered_children,index,n);
var new_vec = cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(head,source_uids,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tail], 0));
var new_source_uids = cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (idx,uid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid,new cljs.core.Keyword("block","order","block/order",-1429282437),idx], null);
}),new_vec);
var source_parents = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__58505_SHARP_){
return athens.db.get_parent(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),p1__58505_SHARP_], null));
}),source_uids);
var source_blocks = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__58506_SHARP_){
return athens.db.get_block(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),p1__58506_SHARP_], null));
}),source_uids);
var last_s_parent = cljs.core.last(source_parents);
var last_s_order = new cljs.core.Keyword("block","order","block/order",-1429282437).cljs$core$IFn$_invoke$arity$1(cljs.core.last(source_blocks));
var n__$1 = cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (x){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","uid","block/uid",-1623585167).cljs$core$IFn$_invoke$arity$1(x),new cljs.core.Keyword("block","uid","block/uid",-1623585167).cljs$core$IFn$_invoke$arity$1(last_s_parent));
}),source_parents));
var reindex_last_source_parent = athens.db.minus_after(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(last_s_parent),last_s_order,n__$1);
var source_parents__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__58507_SHARP_){
return athens.db.get_parent(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),p1__58507_SHARP_], null));
}),source_uids);
var retracts = cljs.core.mapv.cljs$core$IFn$_invoke$arity$3((function (uid,parent){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","retract","db/retract",-1549825231),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(parent),new cljs.core.Keyword("block","children","block/children",-1040716209),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid], null)], null);
}),source_uids,source_parents__$1);
var new_target_parent = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(target_parent),new cljs.core.Keyword("block","children","block/children",-1040716209),new_source_uids], null);
var new_source_parent = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(last_s_parent),new cljs.core.Keyword("block","children","block/children",-1040716209),reindex_last_source_parent], null);
var tx_data = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(retracts,new_target_parent);
cljs.core.identity(new_source_parent);

return tx_data;
});
athens.events.drop_multi_child = (function athens$events$drop_multi_child(source_uids,target){
var source_blocks = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__58514_SHARP_){
return athens.db.get_block(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),p1__58514_SHARP_], null));
}),source_uids);
var source_parents = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__58515_SHARP_){
return athens.db.get_parent(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),p1__58515_SHARP_], null));
}),source_uids);
var last_source = cljs.core.last(source_blocks);
var last_s_order = new cljs.core.Keyword("block","order","block/order",-1429282437).cljs$core$IFn$_invoke$arity$1(last_source);
var last_s_parent = cljs.core.last(source_parents);
var new_source_blocks = cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (idx,x){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),new cljs.core.Keyword("block","uid","block/uid",-1623585167).cljs$core$IFn$_invoke$arity$1(x),new cljs.core.Keyword("block","order","block/order",-1429282437),idx], null);
}),source_blocks);
var n = cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (x){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","uid","block/uid",-1623585167).cljs$core$IFn$_invoke$arity$1(x),new cljs.core.Keyword("block","uid","block/uid",-1623585167).cljs$core$IFn$_invoke$arity$1(last_s_parent));
}),source_parents));
var reindex_source_parent = athens.db.minus_after(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(last_s_parent),last_s_order,n);
var reindex_target_parent = athens.db.plus_after(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(target),(-1),n);
var retracts = cljs.core.mapv.cljs$core$IFn$_invoke$arity$3((function (uid,parent){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","retract","db/retract",-1549825231),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(parent),new cljs.core.Keyword("block","children","block/children",-1040716209),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid], null)], null);
}),source_uids,source_parents);
var new_source_parent = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(last_s_parent),new cljs.core.Keyword("block","children","block/children",-1040716209),reindex_source_parent], null);
var new_target_parent = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(target),new cljs.core.Keyword("block","children","block/children",-1040716209),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(reindex_target_parent,new_source_blocks)], null);
var tx_data = cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(retracts,new_source_parent,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new_target_parent], 0));
return tx_data;
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("drop-multi","child","drop-multi/child",834016422),(function (_,p__58516){
var vec__58517 = p__58516;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58517,(0),null);
var source_uid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58517,(1),null);
var target = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58517,(2),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transact","transact",-267998670),athens.events.drop_multi_child(source_uid,target)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("drop-multi","same-all","drop-multi/same-all",2033979929),(function (_,p__58520){
var vec__58521 = p__58520;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58521,(0),null);
var kind = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58521,(1),null);
var source_uids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58521,(2),null);
var parent = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58521,(3),null);
var target = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58521,(4),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transact","transact",-267998670),athens.events.drop_multi_same_parent_all(kind,source_uids,parent,target)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("drop-multi","diff-source","drop-multi/diff-source",601642474),(function (_,p__58524){
var vec__58525 = p__58524;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58525,(0),null);
var kind = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58525,(1),null);
var source_uids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58525,(2),null);
var target = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58525,(3),null);
var target_parent = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58525,(4),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transact","transact",-267998670),athens.events.drop_multi_diff_source_parents(kind,source_uids,target,target_parent)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("drop-multi","same-source","drop-multi/same-source",252787903),(function (_,p__58528){
var vec__58529 = p__58528;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58529,(0),null);
var kind = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58529,(1),null);
var source_uids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58529,(2),null);
var first_source_parent = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58529,(3),null);
var target = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58529,(4),null);
var target_parent = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58529,(5),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transact","transact",-267998670),athens.events.drop_multi_same_source_parents(kind,source_uids,first_source_parent,target,target_parent)], null)], null);
}));
/**
 * Cases:
 *   - the same 4 cases from drop-bullet
 *   - but also if blocks span across multiple parent levels
 */
athens.events.drop_bullet_multi = (function athens$events$drop_bullet_multi(source_uids,target_uid,kind){
var same_parent_all_QMARK_ = athens.db.same_parent_QMARK_(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(source_uids,target_uid));
var same_parent_source_QMARK_ = athens.db.same_parent_QMARK_(source_uids);
var diff_parents_source_QMARK_ = (!(same_parent_source_QMARK_));
var target = athens.db.get_block(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),target_uid], null));
var first_source_uid = cljs.core.first(source_uids);
var first_source_parent = athens.db.get_parent(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),first_source_uid], null));
var target_parent = athens.db.get_parent(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),target_uid], null));
var event = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(kind,new cljs.core.Keyword(null,"child","child",623967545)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("drop-multi","child","drop-multi/child",834016422),source_uids,target], null):((same_parent_all_QMARK_)?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("drop-multi","same-all","drop-multi/same-all",2033979929),kind,source_uids,first_source_parent,target], null):((diff_parents_source_QMARK_)?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("drop-multi","diff-source","drop-multi/diff-source",601642474),kind,source_uids,target,target_parent], null):((same_parent_source_QMARK_)?new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("drop-multi","same-source","drop-multi/same-source",252787903),kind,source_uids,first_source_parent,target,target_parent], null):null))));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("selected","clear-items","selected/clear-items",-700315697)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),event], null)], null)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"drop-multi","drop-multi",-339580846),(function (_,p__58532){
var vec__58533 = p__58532;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58533,(0),null);
var uids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58533,(1),null);
var target_uid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58533,(2),null);
var kind = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58533,(3),null);
return athens.events.drop_bullet_multi(uids,target_uid,kind);
}));
athens.events.text_to_blocks = (function athens$events$text_to_blocks(text,uid,root_order){
var lines = clojure.string.split_lines(text);
var left_counts = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__58537_SHARP_){
return cljs.core.count(cljs.core.first(p1__58537_SHARP_));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__58536_SHARP_){
return cljs.core.re_find(/^\s*(-|\*)?/,p1__58536_SHARP_);
}),lines));
var sanitize = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (x){
return clojure.string.replace(x,/^\s*(-|\*)?\s*/,"");
}),lines);
var blocks = cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (idx,x){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("db","id","db/id",-1388397098),(((-1) * idx) - (1)),new cljs.core.Keyword("block","string","block/string",-2066596447),x,new cljs.core.Keyword("block","open","block/open",-1875254829),true,new cljs.core.Keyword("block","uid","block/uid",-1623585167),athens.util.gen_block_uid()], null);
}),sanitize);
var n = cljs.core.count(blocks);
var parents = (function (){var i = (1);
var res = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(blocks)], null);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,i)){
return res;
} else {
var G__58604 = (i + (1));
var G__58605 = (function (){var j = (i - (1));
while(true){
if((j < (0))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(res,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(blocks,i));
} else {
var curr_count = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(left_counts,i);
var prev_count = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(left_counts,j,null);
if((prev_count < curr_count)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(res,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(blocks,j)),new cljs.core.Keyword("block","children","block/children",-1040716209),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(blocks,i)], null));
} else {
var G__58606 = (j - (1));
j = G__58606;
continue;
}
}
break;
}
})();
i = G__58604;
res = G__58605;
continue;
}
break;
}
})();
var tx_data = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__58538){
var vec__58539 = p__58538;
var _tempid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58539,(0),null);
var blocks__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58539,(1),null);
var order = (0);
var res = cljs.core.PersistentVector.EMPTY;
var data = blocks__$1;
while(true){
var map__58544 = cljs.core.first(data);
var map__58544__$1 = (((((!((map__58544 == null))))?(((((map__58544.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58544.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58544):map__58544);
var block = map__58544__$1;
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58544__$1,new cljs.core.Keyword("block","children","block/children",-1040716209));
if((block == null)){
return res;
} else {
if((children == null)){
var new_res = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(res,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid], null),new cljs.core.Keyword("block","children","block/children",-1040716209),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(block,new cljs.core.Keyword("block","order","block/order",-1429282437),cljs.core.deref(root_order))], null));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(root_order,cljs.core.inc);

var G__58607 = order;
var G__58608 = new_res;
var G__58609 = cljs.core.next(data);
order = G__58607;
res = G__58608;
data = G__58609;
continue;
} else {
var G__58610 = (order + (1));
var G__58611 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(res,cljs.core.assoc_in(block,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","children","block/children",-1040716209),new cljs.core.Keyword("block","order","block/order",-1429282437)], null),order));
var G__58612 = cljs.core.next(data);
order = G__58610;
res = G__58611;
data = G__58612;
continue;

}
}
break;
}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.sorted_map_by(cljs.core._GT_),cljs.core.group_by(new cljs.core.Keyword("db","id","db/id",-1388397098),parents))], 0));
return tx_data;
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"paste","paste",1975741548),(function (_,p__58546){
var vec__58547 = p__58546;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58547,(0),null);
var uid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58547,(1),null);
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58547,(2),null);
var block = athens.db.get_block(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid], null));
var map__58550 = block;
var map__58550__$1 = (((((!((map__58550 == null))))?(((((map__58550.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58550.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58550):map__58550);
var order = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58550__$1,new cljs.core.Keyword("block","order","block/order",-1429282437));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58550__$1,new cljs.core.Keyword("block","children","block/children",-1040716209));
var open = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58550__$1,new cljs.core.Keyword("block","open","block/open",-1875254829));
var map__58551 = athens.keybindings.destruct_target(document.activeElement);
var map__58551__$1 = (((((!((map__58551 == null))))?(((((map__58551.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58551.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58551):map__58551);
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58551__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58551__$1,new cljs.core.Keyword(null,"value","value",305978217));
var empty_block_QMARK_ = ((clojure.string.blank_QMARK_(value)) && (cljs.core.empty_QMARK_(children)));
var block_start_QMARK_ = (start === (0));
var parent_QMARK_ = (function (){var and__4115__auto__ = children;
if(cljs.core.truth_(and__4115__auto__)){
return open;
} else {
return and__4115__auto__;
}
})();
var start_idx = ((empty_block_QMARK_)?order:((block_start_QMARK_)?order:(cljs.core.truth_(parent_QMARK_)?(0):(order + (1))
)));
var root_order = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(start_idx);
var parent = (cljs.core.truth_(parent_QMARK_)?block:athens.db.get_parent(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid], null))
);
var paste_tx_data = athens.events.text_to_blocks(text,new cljs.core.Keyword("block","uid","block/uid",-1623585167).cljs$core$IFn$_invoke$arity$1(parent),root_order);
var n = (cljs.core.deref(root_order) - start_idx);
var start_reindex = ((block_start_QMARK_)?(order - (1)):(cljs.core.truth_(parent_QMARK_)?(-1):order
));
var amount = ((empty_block_QMARK_)?(n - (1)):n
);
var reindex = athens.db.plus_after(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(parent),start_reindex,amount);
var tx_data = cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(reindex,paste_tx_data,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((empty_block_QMARK_)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","retractEntity","db/retractEntity",-1452737935),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid], null)], null)], null):null)], 0));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transact","transact",-267998670),tx_data], null),((block_start_QMARK_)?(function (){var block__$1 = new cljs.core.Keyword("block","children","block/children",-1040716209).cljs$core$IFn$_invoke$arity$1(cljs.core.first(paste_tx_data));
var map__58554 = block__$1;
var map__58554__$1 = (((((!((map__58554 == null))))?(((((map__58554.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58554.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58554):map__58554);
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58554__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58554__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var n__$1 = cljs.core.count(string);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editing","uid","editing/uid",974963040),uid__$1,n__$1], null);
})():null)], null)], null);
}));
athens.events.left_sidebar_drop_above = (function athens$events$left_sidebar_drop_above(s_order,t_order){
var source_eid = (function (){var G__58556 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Symbol(null,".",".",1975675962,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?s-order","?s-order",-1665716070,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("page","sidebar","page/sidebar",32416927),new cljs.core.Symbol(null,"?s-order","?s-order",-1665716070,null)], null)], null);
var G__58557 = cljs.core.deref(athens.db.dsdb);
var G__58558 = s_order;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$3 ? datascript.core.q.cljs$core$IFn$_invoke$arity$3(G__58556,G__58557,G__58558) : datascript.core.q.call(null,G__58556,G__58557,G__58558));
})();
var new_source = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),source_eid,new cljs.core.Keyword("page","sidebar","page/sidebar",32416927),(((s_order < t_order))?(t_order - (1)):t_order)], null);
var inc_or_dec = (((s_order < t_order))?cljs.core.dec:cljs.core.inc);
var new_indices = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_source], null),(function (){var G__58559 = new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?shortcut","?shortcut",243601730,null),new cljs.core.Symbol(null,"?new-order","?new-order",152538232,null),new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.Symbol("db","id","db/id",252134429,null),new cljs.core.Symbol("page","sidebar","page/sidebar",1672948454,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?s-order","?s-order",-1665716070,null),new cljs.core.Symbol(null,"?t-order","?t-order",-1133173893,null),new cljs.core.Symbol(null,"?between","?between",-299074232,null),new cljs.core.Symbol(null,"?inc-or-dec","?inc-or-dec",515984879,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?shortcut","?shortcut",243601730,null),new cljs.core.Keyword("page","sidebar","page/sidebar",32416927),new cljs.core.Symbol(null,"?order","?order",2076500391,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"?between","?between",-299074232,null),new cljs.core.Symbol(null,"?s-order","?s-order",-1665716070,null),new cljs.core.Symbol(null,"?t-order","?t-order",-1133173893,null),new cljs.core.Symbol(null,"?order","?order",2076500391,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"?inc-or-dec","?inc-or-dec",515984879,null),new cljs.core.Symbol(null,"?order","?order",2076500391,null)),new cljs.core.Symbol(null,"?new-order","?new-order",152538232,null)], null)], null);
var G__58560 = cljs.core.deref(athens.db.dsdb);
var G__58561 = s_order;
var G__58562 = (((s_order < t_order))?t_order:(t_order - (1)));
var G__58563 = athens.events.between;
var G__58564 = inc_or_dec;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$6 ? datascript.core.q.cljs$core$IFn$_invoke$arity$6(G__58559,G__58560,G__58561,G__58562,G__58563,G__58564) : datascript.core.q.call(null,G__58559,G__58560,G__58561,G__58562,G__58563,G__58564));
})());
return new_indices;
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("left-sidebar","drop-above","left-sidebar/drop-above",75584917),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (_,p__58565){
var vec__58566 = p__58565;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58566,(0),null);
var source_order = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58566,(1),null);
var target_order = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58566,(2),null);
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transact","transact",-267998670),cljs.core.list(new cljs.core.Symbol(null,"left-sidebar-drop-above","left-sidebar-drop-above",633543876,null),new cljs.core.Symbol(null,"source-order","source-order",-515065695,null),new cljs.core.Symbol(null,"target-order","target-order",1589056416,null))], null)], null));

var opts__54730__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__54731__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transact","transact",-267998670),athens.events.left_sidebar_drop_above(source_order,target_order)], null)], null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__54731__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transact","transact",-267998670),cljs.core.list(new cljs.core.Symbol(null,"left-sidebar-drop-above","left-sidebar-drop-above",633543876,null),new cljs.core.Symbol(null,"source-order","source-order",-515065695,null),new cljs.core.Symbol(null,"target-order","target-order",1589056416,null))], null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__54731__auto__;
}catch (e58569){var e = e58569;
throw e;
}}):(function (_,p__58570){
var vec__58571 = p__58570;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58571,(0),null);
var source_order = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58571,(1),null);
var target_order = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58571,(2),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transact","transact",-267998670),athens.events.left_sidebar_drop_above(source_order,target_order)], null)], null);
})));
athens.events.left_sidebar_drop_below = (function athens$events$left_sidebar_drop_below(s_order,t_order){
var source_eid = (function (){var G__58574 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Symbol(null,".",".",1975675962,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?s-order","?s-order",-1665716070,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("page","sidebar","page/sidebar",32416927),new cljs.core.Symbol(null,"?s-order","?s-order",-1665716070,null)], null)], null);
var G__58575 = cljs.core.deref(athens.db.dsdb);
var G__58576 = s_order;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$3 ? datascript.core.q.cljs$core$IFn$_invoke$arity$3(G__58574,G__58575,G__58576) : datascript.core.q.call(null,G__58574,G__58575,G__58576));
})();
var new_source = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),source_eid,new cljs.core.Keyword("page","sidebar","page/sidebar",32416927),t_order], null);
var new_indices = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_source], null),(function (){var G__58577 = new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?shortcut","?shortcut",243601730,null),new cljs.core.Symbol(null,"?new-order","?new-order",152538232,null),new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.Symbol("db","id","db/id",252134429,null),new cljs.core.Symbol("page","sidebar","page/sidebar",1672948454,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?s-order","?s-order",-1665716070,null),new cljs.core.Symbol(null,"?t-order","?t-order",-1133173893,null),new cljs.core.Symbol(null,"?between","?between",-299074232,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?shortcut","?shortcut",243601730,null),new cljs.core.Keyword("page","sidebar","page/sidebar",32416927),new cljs.core.Symbol(null,"?order","?order",2076500391,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"?between","?between",-299074232,null),new cljs.core.Symbol(null,"?s-order","?s-order",-1665716070,null),new cljs.core.Symbol(null,"?t-order","?t-order",-1133173893,null),new cljs.core.Symbol(null,"?order","?order",2076500391,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"dec","dec",-766002333,null),new cljs.core.Symbol(null,"?order","?order",2076500391,null)),new cljs.core.Symbol(null,"?new-order","?new-order",152538232,null)], null)], null);
var G__58578 = cljs.core.deref(athens.db.dsdb);
var G__58579 = s_order;
var G__58580 = (t_order + (1));
var G__58581 = athens.events.between;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$5 ? datascript.core.q.cljs$core$IFn$_invoke$arity$5(G__58577,G__58578,G__58579,G__58580,G__58581) : datascript.core.q.call(null,G__58577,G__58578,G__58579,G__58580,G__58581));
})());
return new_indices;
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("left-sidebar","drop-below","left-sidebar/drop-below",1291292866),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (_,p__58582){
var vec__58583 = p__58582;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58583,(0),null);
var source_order = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58583,(1),null);
var target_order = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58583,(2),null);
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transact","transact",-267998670),cljs.core.list(new cljs.core.Symbol(null,"left-sidebar-drop-below","left-sidebar-drop-below",1703885544,null),new cljs.core.Symbol(null,"source-order","source-order",-515065695,null),new cljs.core.Symbol(null,"target-order","target-order",1589056416,null))], null)], null));

var opts__54730__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__54731__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transact","transact",-267998670),athens.events.left_sidebar_drop_below(source_order,target_order)], null)], null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__54731__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transact","transact",-267998670),cljs.core.list(new cljs.core.Symbol(null,"left-sidebar-drop-below","left-sidebar-drop-below",1703885544,null),new cljs.core.Symbol(null,"source-order","source-order",-515065695,null),new cljs.core.Symbol(null,"target-order","target-order",1589056416,null))], null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__54731__auto__;
}catch (e58586){var e = e58586;
throw e;
}}):(function (_,p__58587){
var vec__58588 = p__58587;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58588,(0),null);
var source_order = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58588,(1),null);
var target_order = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58588,(2),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transact","transact",-267998670),athens.events.left_sidebar_drop_below(source_order,target_order)], null)], null);
})));
/**
 * Ignores case. If title is `test`:
 *   test 1     -> [[test 1]]
 *   TEST 10    -> [[test 10]]
 *   [[attest]] -> [[at[[test]]`
 */
athens.events.link_unlinked_reference = (function athens$events$link_unlinked_reference(string,title){
var ignore_case_title = cljs.core.re_pattern(["(?i)",cljs.core.str.cljs$core$IFn$_invoke$arity$1(title)].join(''));
var new_str = clojure.string.replace(string,ignore_case_title,["[[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(title),"]]"].join(''));
return new_str;
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("unlinked-references","link","unlinked-references/link",-157284879),(function (_,p__58591){
var vec__58592 = p__58591;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58592,(0),null);
var block = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58592,(1),null);
var title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58592,(2),null);
var map__58595 = block;
var map__58595__$1 = (((((!((map__58595 == null))))?(((((map__58595.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58595.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58595):map__58595);
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58595__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58595__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var new_str = athens.events.link_unlinked_reference(string,title);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transact","transact",-267998670),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid], null),new cljs.core.Keyword("block","string","block/string",-2066596447),new_str], null)], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("unlinked-references","link-all","unlinked-references/link-all",1891274179),(function (_,p__58597){
var vec__58598 = p__58597;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58598,(0),null);
var unlinked_refs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58598,(1),null);
var title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58598,(2),null);
var new_str_tx_data = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__58601){
var map__58602 = p__58601;
var map__58602__$1 = (((((!((map__58602 == null))))?(((((map__58602.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58602.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58602):map__58602);
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58602__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58602__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var new_str = athens.events.link_unlinked_reference(string,title);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid], null),new cljs.core.Keyword("block","string","block/string",-2066596447),new_str], null);
}),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.second,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([unlinked_refs,unlinked_refs], 0)));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transact","transact",-267998670),new_str_tx_data], null)], null);
}));

//# sourceMappingURL=athens.events.js.map
