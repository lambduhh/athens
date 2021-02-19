goog.provide('cljs_http.core');
cljs_http.core.pending_requests = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
/**
 * Attempt to close the given channel and abort the pending HTTP request
 *   with which it is associated.
 */
cljs_http.core.abort_BANG_ = (function cljs_http$core$abort_BANG_(channel){
var temp__5735__auto__ = (function (){var fexpr__48887 = cljs.core.deref(cljs_http.core.pending_requests);
return (fexpr__48887.cljs$core$IFn$_invoke$arity$1 ? fexpr__48887.cljs$core$IFn$_invoke$arity$1(channel) : fexpr__48887.call(null,channel));
})();
if(cljs.core.truth_(temp__5735__auto__)){
var req = temp__5735__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

cljs.core.async.close_BANG_(channel);

if(cljs.core.truth_(req.hasOwnProperty("abort"))){
return req.abort();
} else {
return new cljs.core.Keyword(null,"jsonp","jsonp",226119588).cljs$core$IFn$_invoke$arity$1(req).cancel(new cljs.core.Keyword(null,"request","request",1772954723).cljs$core$IFn$_invoke$arity$1(req));
}
} else {
return null;
}
});
cljs_http.core.aborted_QMARK_ = (function cljs_http$core$aborted_QMARK_(xhr){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(xhr.getLastErrorCode(),goog.net.ErrorCode.ABORT);
});
/**
 * Takes an XhrIo object and applies the default-headers to it.
 */
cljs_http.core.apply_default_headers_BANG_ = (function cljs_http$core$apply_default_headers_BANG_(xhr,headers){
var formatted_h = cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs_http.util.camelize,cljs.core.keys(headers)),cljs.core.vals(headers));
return cljs.core.dorun.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__48889){
var vec__48890 = p__48889;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48890,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48890,(1),null);
return xhr.headers.set(k,v);
}),formatted_h));
});
/**
 * Takes an XhrIo object and sets response-type if not nil.
 */
cljs_http.core.apply_response_type_BANG_ = (function cljs_http$core$apply_response_type_BANG_(xhr,response_type){
return xhr.setResponseType((function (){var G__48893 = response_type;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"array-buffer","array-buffer",519008380),G__48893)){
return goog.net.XhrIo.ResponseType.ARRAY_BUFFER;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"blob","blob",1636965233),G__48893)){
return goog.net.XhrIo.ResponseType.BLOB;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"document","document",-1329188687),G__48893)){
return goog.net.XhrIo.ResponseType.DOCUMENT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"text","text",-1790561697),G__48893)){
return goog.net.XhrIo.ResponseType.TEXT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"default","default",-1987822328),G__48893)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__48893)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__48893)].join('')));

}
}
}
}
}
}
})());
});
/**
 * Builds an XhrIo object from the request parameters.
 */
cljs_http.core.build_xhr = (function cljs_http$core$build_xhr(p__48894){
var map__48895 = p__48894;
var map__48895__$1 = (((((!((map__48895 == null))))?(((((map__48895.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48895.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48895):map__48895);
var request = map__48895__$1;
var with_credentials_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48895__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
var default_headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48895__$1,new cljs.core.Keyword(null,"default-headers","default-headers",-43146094));
var response_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48895__$1,new cljs.core.Keyword(null,"response-type","response-type",-1493770458));
var timeout = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"timeout","timeout",-318625318).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (0);
}
})();
var send_credentials = (((with_credentials_QMARK_ == null))?true:with_credentials_QMARK_);
var G__48897 = (new goog.net.XhrIo());
cljs_http.core.apply_default_headers_BANG_(G__48897,default_headers);

cljs_http.core.apply_response_type_BANG_(G__48897,response_type);

G__48897.setTimeoutInterval(timeout);

G__48897.setWithCredentials(send_credentials);

return G__48897;
});
cljs_http.core.error_kw = cljs.core.PersistentHashMap.fromArrays([(0),(7),(1),(4),(6),(3),(2),(9),(5),(8)],[new cljs.core.Keyword(null,"no-error","no-error",1984610064),new cljs.core.Keyword(null,"abort","abort",521193198),new cljs.core.Keyword(null,"access-denied","access-denied",959449406),new cljs.core.Keyword(null,"custom-error","custom-error",-1565161123),new cljs.core.Keyword(null,"http-error","http-error",-1040049553),new cljs.core.Keyword(null,"ff-silent-error","ff-silent-error",189390514),new cljs.core.Keyword(null,"file-not-found","file-not-found",-65398940),new cljs.core.Keyword(null,"offline","offline",-107631935),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"timeout","timeout",-318625318)]);
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.xhr = (function cljs_http$core$xhr(p__48899){
var map__48903 = p__48899;
var map__48903__$1 = (((((!((map__48903 == null))))?(((((map__48903.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48903.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48903):map__48903);
var request = map__48903__$1;
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48903__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48903__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48903__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var with_credentials_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48903__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
var cancel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48903__$1,new cljs.core.Keyword(null,"cancel","cancel",-1964088360));
var progress = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48903__$1,new cljs.core.Keyword(null,"progress","progress",244323547));
var channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var request_url = cljs_http.util.build_url(request);
var method = cljs.core.name((function (){var or__4126__auto__ = request_method;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"get","get",1683182755);
}
})());
var headers__$1 = cljs_http.util.build_headers(headers);
var xhr = cljs_http.core.build_xhr(request);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs_http.core.pending_requests,cljs.core.assoc,channel,xhr);

xhr.listen(goog.net.EventType.COMPLETE,(function (evt){
var target = evt.target;
var response = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"status","status",-1997798413),target.getStatus(),new cljs.core.Keyword(null,"success","success",1890645906),target.isSuccess(),new cljs.core.Keyword(null,"body","body",-2049205669),target.getResponse(),new cljs.core.Keyword(null,"headers","headers",-835030129),cljs_http.util.parse_headers(target.getAllResponseHeaders()),new cljs.core.Keyword(null,"trace-redirects","trace-redirects",-1149427907),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [request_url,target.getLastUri()], null),new cljs.core.Keyword(null,"error-code","error-code",180497232),(function (){var G__48908 = target.getLastErrorCode();
return (cljs_http.core.error_kw.cljs$core$IFn$_invoke$arity$1 ? cljs_http.core.error_kw.cljs$core$IFn$_invoke$arity$1(G__48908) : cljs_http.core.error_kw.call(null,G__48908));
})(),new cljs.core.Keyword(null,"error-text","error-text",2021893718),target.getLastError()], null);
if((!(cljs_http.core.aborted_QMARK_(xhr)))){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(channel,response);
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_(cancel);
} else {
}

return cljs.core.async.close_BANG_(channel);
}));

if(cljs.core.truth_(progress)){
var listener_49001 = (function (direction,evt){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(progress,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"direction","direction",-633359395),direction,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),evt.loaded], null),(cljs.core.truth_(evt.lengthComputable)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"total","total",1916810418),evt.total], null):null)], 0)));
});
var G__48919_49003 = xhr;
G__48919_49003.setProgressEventsEnabled(true);

G__48919_49003.listen(goog.net.EventType.UPLOAD_PROGRESS,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(listener_49001,new cljs.core.Keyword(null,"upload","upload",-255769218)));

G__48919_49003.listen(goog.net.EventType.DOWNLOAD_PROGRESS,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(listener_49001,new cljs.core.Keyword(null,"download","download",-300081668)));

} else {
}

xhr.send(request_url,method,body,headers__$1);

if(cljs.core.truth_(cancel)){
var c__47336__auto___49005 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47337__auto__ = (function (){var switch__47300__auto__ = (function (state_48933){
var state_val_48934 = (state_48933[(1)]);
if((state_val_48934 === (1))){
var state_48933__$1 = state_48933;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48933__$1,(2),cancel);
} else {
if((state_val_48934 === (2))){
var inst_48923 = (state_48933[(2)]);
var inst_48924 = xhr.isComplete();
var inst_48925 = cljs.core.not(inst_48924);
var state_48933__$1 = (function (){var statearr_48937 = state_48933;
(statearr_48937[(7)] = inst_48923);

return statearr_48937;
})();
if(inst_48925){
var statearr_48938_49006 = state_48933__$1;
(statearr_48938_49006[(1)] = (3));

} else {
var statearr_48940_49007 = state_48933__$1;
(statearr_48940_49007[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48934 === (3))){
var inst_48928 = xhr.abort();
var state_48933__$1 = state_48933;
var statearr_48941_49009 = state_48933__$1;
(statearr_48941_49009[(2)] = inst_48928);

(statearr_48941_49009[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48934 === (4))){
var state_48933__$1 = state_48933;
var statearr_48942_49011 = state_48933__$1;
(statearr_48942_49011[(2)] = null);

(statearr_48942_49011[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48934 === (5))){
var inst_48931 = (state_48933[(2)]);
var state_48933__$1 = state_48933;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48933__$1,inst_48931);
} else {
return null;
}
}
}
}
}
});
return (function() {
var cljs_http$core$xhr_$_state_machine__47301__auto__ = null;
var cljs_http$core$xhr_$_state_machine__47301__auto____0 = (function (){
var statearr_48943 = [null,null,null,null,null,null,null,null];
(statearr_48943[(0)] = cljs_http$core$xhr_$_state_machine__47301__auto__);

(statearr_48943[(1)] = (1));

return statearr_48943;
});
var cljs_http$core$xhr_$_state_machine__47301__auto____1 = (function (state_48933){
while(true){
var ret_value__47302__auto__ = (function (){try{while(true){
var result__47303__auto__ = switch__47300__auto__(state_48933);
if(cljs.core.keyword_identical_QMARK_(result__47303__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47303__auto__;
}
break;
}
}catch (e48944){var ex__47304__auto__ = e48944;
var statearr_48946_49014 = state_48933;
(statearr_48946_49014[(2)] = ex__47304__auto__);


if(cljs.core.seq((state_48933[(4)]))){
var statearr_48947_49015 = state_48933;
(statearr_48947_49015[(1)] = cljs.core.first((state_48933[(4)])));

} else {
throw ex__47304__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47302__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49017 = state_48933;
state_48933 = G__49017;
continue;
} else {
return ret_value__47302__auto__;
}
break;
}
});
cljs_http$core$xhr_$_state_machine__47301__auto__ = function(state_48933){
switch(arguments.length){
case 0:
return cljs_http$core$xhr_$_state_machine__47301__auto____0.call(this);
case 1:
return cljs_http$core$xhr_$_state_machine__47301__auto____1.call(this,state_48933);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$xhr_$_state_machine__47301__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$xhr_$_state_machine__47301__auto____0;
cljs_http$core$xhr_$_state_machine__47301__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$xhr_$_state_machine__47301__auto____1;
return cljs_http$core$xhr_$_state_machine__47301__auto__;
})()
})();
var state__47338__auto__ = (function (){var statearr_48948 = f__47337__auto__();
(statearr_48948[(6)] = c__47336__auto___49005);

return statearr_48948;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47338__auto__);
}));

} else {
}

return channel;
});
/**
 * Execute the JSONP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.jsonp = (function cljs_http$core$jsonp(p__48949){
var map__48950 = p__48949;
var map__48950__$1 = (((((!((map__48950 == null))))?(((((map__48950.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48950.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48950):map__48950);
var request = map__48950__$1;
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48950__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318));
var callback_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48950__$1,new cljs.core.Keyword(null,"callback-name","callback-name",336964714));
var cancel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48950__$1,new cljs.core.Keyword(null,"cancel","cancel",-1964088360));
var keywordize_keys_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__48950__$1,new cljs.core.Keyword(null,"keywordize-keys?","keywordize-keys?",-254545987),true);
var channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var jsonp = (new goog.net.Jsonp(cljs_http.util.build_url(request),callback_name));
jsonp.setRequestTimeout(timeout);

var req_49022 = jsonp.send(null,(function cljs_http$core$jsonp_$_success_callback(data){
var response = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),(200),new cljs.core.Keyword(null,"success","success",1890645906),true,new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),keywordize_keys_QMARK_], 0))], null);
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(channel,response);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_(cancel);
} else {
}

return cljs.core.async.close_BANG_(channel);
}),(function cljs_http$core$jsonp_$_error_callback(){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_(cancel);
} else {
}

return cljs.core.async.close_BANG_(channel);
}));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs_http.core.pending_requests,cljs.core.assoc,channel,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"jsonp","jsonp",226119588),jsonp,new cljs.core.Keyword(null,"request","request",1772954723),req_49022], null));

if(cljs.core.truth_(cancel)){
var c__47336__auto___49026 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47337__auto__ = (function (){var switch__47300__auto__ = (function (state_48965){
var state_val_48966 = (state_48965[(1)]);
if((state_val_48966 === (1))){
var state_48965__$1 = state_48965;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48965__$1,(2),cancel);
} else {
if((state_val_48966 === (2))){
var inst_48962 = (state_48965[(2)]);
var inst_48963 = jsonp.cancel(req_49022);
var state_48965__$1 = (function (){var statearr_48968 = state_48965;
(statearr_48968[(7)] = inst_48962);

return statearr_48968;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_48965__$1,inst_48963);
} else {
return null;
}
}
});
return (function() {
var cljs_http$core$jsonp_$_state_machine__47301__auto__ = null;
var cljs_http$core$jsonp_$_state_machine__47301__auto____0 = (function (){
var statearr_48971 = [null,null,null,null,null,null,null,null];
(statearr_48971[(0)] = cljs_http$core$jsonp_$_state_machine__47301__auto__);

(statearr_48971[(1)] = (1));

return statearr_48971;
});
var cljs_http$core$jsonp_$_state_machine__47301__auto____1 = (function (state_48965){
while(true){
var ret_value__47302__auto__ = (function (){try{while(true){
var result__47303__auto__ = switch__47300__auto__(state_48965);
if(cljs.core.keyword_identical_QMARK_(result__47303__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47303__auto__;
}
break;
}
}catch (e48973){var ex__47304__auto__ = e48973;
var statearr_48974_49030 = state_48965;
(statearr_48974_49030[(2)] = ex__47304__auto__);


if(cljs.core.seq((state_48965[(4)]))){
var statearr_48976_49033 = state_48965;
(statearr_48976_49033[(1)] = cljs.core.first((state_48965[(4)])));

} else {
throw ex__47304__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47302__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49034 = state_48965;
state_48965 = G__49034;
continue;
} else {
return ret_value__47302__auto__;
}
break;
}
});
cljs_http$core$jsonp_$_state_machine__47301__auto__ = function(state_48965){
switch(arguments.length){
case 0:
return cljs_http$core$jsonp_$_state_machine__47301__auto____0.call(this);
case 1:
return cljs_http$core$jsonp_$_state_machine__47301__auto____1.call(this,state_48965);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$jsonp_$_state_machine__47301__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$jsonp_$_state_machine__47301__auto____0;
cljs_http$core$jsonp_$_state_machine__47301__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$jsonp_$_state_machine__47301__auto____1;
return cljs_http$core$jsonp_$_state_machine__47301__auto__;
})()
})();
var state__47338__auto__ = (function (){var statearr_48978 = f__47337__auto__();
(statearr_48978[(6)] = c__47336__auto___49026);

return statearr_48978;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47338__auto__);
}));

} else {
}

return channel;
});
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.request = (function cljs_http$core$request(p__48979){
var map__48981 = p__48979;
var map__48981__$1 = (((((!((map__48981 == null))))?(((((map__48981.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48981.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48981):map__48981);
var request = map__48981__$1;
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48981__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(request_method,new cljs.core.Keyword(null,"jsonp","jsonp",226119588))){
return cljs_http.core.jsonp(request);
} else {
return cljs_http.core.xhr(request);
}
});

//# sourceMappingURL=cljs_http.core.js.map
