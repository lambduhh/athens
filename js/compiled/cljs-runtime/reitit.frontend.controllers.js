goog.provide('reitit.frontend.controllers');
reitit.frontend.controllers.pad_same_length = (function reitit$frontend$controllers$pad_same_length(a,b){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(a,cljs.core.take.cljs$core$IFn$_invoke$arity$2((cljs.core.count(b) - cljs.core.count(a)),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null)));
});
reitit.frontend.controllers.params_warning = (new cljs.core.Delay((function (){
return console.warn("Reitit-frontend controller :params is deprecated. Replace with :identity or :parameters option.");
}),null));
/**
 * Get controller identity given controller and match.
 * 
 *   To select interesting properties from Match :parameters option can be set.
 *   Value should be param-type => [param-key]
 *   Resulting value is map of param-type => param-key => value.
 * 
 *   For other uses, :identity option can be used to provide function from
 *   Match to identity.
 * 
 *   Default value is nil, i.e. controller identity doesn't depend on Match.
 */
reitit.frontend.controllers.get_identity = (function reitit$frontend$controllers$get_identity(p__57867,match){
var map__57868 = p__57867;
var map__57868__$1 = (((((!((map__57868 == null))))?(((((map__57868.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57868.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57868):map__57868);
var identity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57868__$1,new cljs.core.Keyword(null,"identity","identity",1647396035));
var parameters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57868__$1,new cljs.core.Keyword(null,"parameters","parameters",-1229919748));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57868__$1,new cljs.core.Keyword(null,"params","params",710516235));
if(cljs.core.not((function (){var and__4115__auto__ = identity;
if(cljs.core.truth_(and__4115__auto__)){
return parameters;
} else {
return and__4115__auto__;
}
})())){
} else {
throw (new Error(["Assert failed: ","Use either :identity or :parameters for controller, not both.","\n","(not (and identity parameters))"].join('')));
}

if(cljs.core.truth_(params)){
cljs.core.deref(reitit.frontend.controllers.params_warning);
} else {
}

if(cljs.core.truth_(parameters)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4529__auto__ = (function reitit$frontend$controllers$get_identity_$_iter__57870(s__57871){
return (new cljs.core.LazySeq(null,(function (){
var s__57871__$1 = s__57871;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__57871__$1);
if(temp__5735__auto__){
var s__57871__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__57871__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__57871__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__57873 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__57872 = (0);
while(true){
if((i__57872 < size__4528__auto__)){
var vec__57874 = cljs.core._nth(c__4527__auto__,i__57872);
var param_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57874,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57874,(1),null);
cljs.core.chunk_append(b__57873,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_type,cljs.core.select_keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parameters","parameters",-1229919748).cljs$core$IFn$_invoke$arity$1(match),param_type),ks)], null));

var G__57892 = (i__57872 + (1));
i__57872 = G__57892;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__57873),reitit$frontend$controllers$get_identity_$_iter__57870(cljs.core.chunk_rest(s__57871__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__57873),null);
}
} else {
var vec__57877 = cljs.core.first(s__57871__$2);
var param_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57877,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57877,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_type,cljs.core.select_keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parameters","parameters",-1229919748).cljs$core$IFn$_invoke$arity$1(match),param_type),ks)], null),reitit$frontend$controllers$get_identity_$_iter__57870(cljs.core.rest(s__57871__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(parameters);
})());
} else {
if(cljs.core.truth_(identity)){
return (identity.cljs$core$IFn$_invoke$arity$1 ? identity.cljs$core$IFn$_invoke$arity$1(match) : identity.call(null,match));
} else {
if(cljs.core.truth_(params)){
return (params.cljs$core$IFn$_invoke$arity$1 ? params.cljs$core$IFn$_invoke$arity$1(match) : params.call(null,match));
} else {
return null;

}
}
}
});
/**
 * Run side-effects (:start or :stop) for controller.
 *   The side-effect function is called with controller identity value.
 */
reitit.frontend.controllers.apply_controller = (function reitit$frontend$controllers$apply_controller(controller,method){
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(controller,method);
if(cljs.core.truth_(temp__5735__auto__)){
var f = temp__5735__auto__;
var G__57880 = new cljs.core.Keyword("reitit.frontend.controllers","identity","reitit.frontend.controllers/identity",-806277693).cljs$core$IFn$_invoke$arity$1(controller);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__57880) : f.call(null,G__57880));
} else {
return null;
}
});
/**
 * Applies changes between current controllers and
 *   those previously enabled. Reinitializes controllers whose
 *   identity has changed.
 */
reitit.frontend.controllers.apply_controllers = (function reitit$frontend$controllers$apply_controllers(old_controllers,new_match){
var new_controllers = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (controller){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(controller,new cljs.core.Keyword("reitit.frontend.controllers","identity","reitit.frontend.controllers/identity",-806277693),reitit.frontend.controllers.get_identity(controller,new_match));
}),new cljs.core.Keyword(null,"controllers","controllers",-1120410624).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(new_match)));
var changed_controllers = cljs.core.vec(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (old,new$){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(old,new$)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"old","old",-1825222690),old,new cljs.core.Keyword(null,"new","new",-2085437848),new$], null);
} else {
return null;
}
}),reitit.frontend.controllers.pad_same_length(old_controllers,new_controllers),reitit.frontend.controllers.pad_same_length(new_controllers,old_controllers))));
var seq__57882_57893 = cljs.core.seq(cljs.core.reverse(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"old","old",-1825222690),changed_controllers)));
var chunk__57883_57894 = null;
var count__57884_57895 = (0);
var i__57885_57896 = (0);
while(true){
if((i__57885_57896 < count__57884_57895)){
var controller_57897 = chunk__57883_57894.cljs$core$IIndexed$_nth$arity$2(null,i__57885_57896);
reitit.frontend.controllers.apply_controller(controller_57897,new cljs.core.Keyword(null,"stop","stop",-2140911342));


var G__57898 = seq__57882_57893;
var G__57899 = chunk__57883_57894;
var G__57900 = count__57884_57895;
var G__57901 = (i__57885_57896 + (1));
seq__57882_57893 = G__57898;
chunk__57883_57894 = G__57899;
count__57884_57895 = G__57900;
i__57885_57896 = G__57901;
continue;
} else {
var temp__5735__auto___57902 = cljs.core.seq(seq__57882_57893);
if(temp__5735__auto___57902){
var seq__57882_57904__$1 = temp__5735__auto___57902;
if(cljs.core.chunked_seq_QMARK_(seq__57882_57904__$1)){
var c__4556__auto___57905 = cljs.core.chunk_first(seq__57882_57904__$1);
var G__57906 = cljs.core.chunk_rest(seq__57882_57904__$1);
var G__57907 = c__4556__auto___57905;
var G__57908 = cljs.core.count(c__4556__auto___57905);
var G__57909 = (0);
seq__57882_57893 = G__57906;
chunk__57883_57894 = G__57907;
count__57884_57895 = G__57908;
i__57885_57896 = G__57909;
continue;
} else {
var controller_57910 = cljs.core.first(seq__57882_57904__$1);
reitit.frontend.controllers.apply_controller(controller_57910,new cljs.core.Keyword(null,"stop","stop",-2140911342));


var G__57912 = cljs.core.next(seq__57882_57904__$1);
var G__57913 = null;
var G__57914 = (0);
var G__57915 = (0);
seq__57882_57893 = G__57912;
chunk__57883_57894 = G__57913;
count__57884_57895 = G__57914;
i__57885_57896 = G__57915;
continue;
}
} else {
}
}
break;
}

var seq__57888_57917 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"new","new",-2085437848),changed_controllers));
var chunk__57889_57918 = null;
var count__57890_57919 = (0);
var i__57891_57920 = (0);
while(true){
if((i__57891_57920 < count__57890_57919)){
var controller_57921 = chunk__57889_57918.cljs$core$IIndexed$_nth$arity$2(null,i__57891_57920);
reitit.frontend.controllers.apply_controller(controller_57921,new cljs.core.Keyword(null,"start","start",-355208981));


var G__57922 = seq__57888_57917;
var G__57923 = chunk__57889_57918;
var G__57924 = count__57890_57919;
var G__57925 = (i__57891_57920 + (1));
seq__57888_57917 = G__57922;
chunk__57889_57918 = G__57923;
count__57890_57919 = G__57924;
i__57891_57920 = G__57925;
continue;
} else {
var temp__5735__auto___57926 = cljs.core.seq(seq__57888_57917);
if(temp__5735__auto___57926){
var seq__57888_57927__$1 = temp__5735__auto___57926;
if(cljs.core.chunked_seq_QMARK_(seq__57888_57927__$1)){
var c__4556__auto___57928 = cljs.core.chunk_first(seq__57888_57927__$1);
var G__57929 = cljs.core.chunk_rest(seq__57888_57927__$1);
var G__57930 = c__4556__auto___57928;
var G__57931 = cljs.core.count(c__4556__auto___57928);
var G__57932 = (0);
seq__57888_57917 = G__57929;
chunk__57889_57918 = G__57930;
count__57890_57919 = G__57931;
i__57891_57920 = G__57932;
continue;
} else {
var controller_57933 = cljs.core.first(seq__57888_57927__$1);
reitit.frontend.controllers.apply_controller(controller_57933,new cljs.core.Keyword(null,"start","start",-355208981));


var G__57934 = cljs.core.next(seq__57888_57927__$1);
var G__57935 = null;
var G__57936 = (0);
var G__57937 = (0);
seq__57888_57917 = G__57934;
chunk__57889_57918 = G__57935;
count__57890_57919 = G__57936;
i__57891_57920 = G__57937;
continue;
}
} else {
}
}
break;
}

return new_controllers;
});

//# sourceMappingURL=reitit.frontend.controllers.js.map
