(()=>{"use strict";var Ye={420:()=>{const W=globalThis;function J(e){return(W.__Zone_symbol_prefix||"__zone_symbol__")+e}const he=Object.getOwnPropertyDescriptor,Pe=Object.defineProperty,Ne=Object.getPrototypeOf,Me=Object.create,$e=Array.prototype.slice,Ze="addEventListener",me="removeEventListener",de=J(Ze),_e=J(me),ee="true",te="false",ce=J("");function ne(e,r){return Zone.current.wrap(e,r)}function Fe(e,r,c,t,i){return Zone.current.scheduleMacroTask(e,r,c,t,i)}const j=J,Ae=typeof window<"u",Re=Ae?window:void 0,K=Ae&&Re||globalThis,yt="removeAttribute";function Be(e,r){for(let c=e.length-1;c>=0;c--)"function"==typeof e[c]&&(e[c]=ne(e[c],r+"_"+c));return e}function Je(e){return!e||!1!==e.writable&&!("function"==typeof e.get&&typeof e.set>"u")}const Ke=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope,je=!("nw"in K)&&typeof K.process<"u"&&"[object process]"===K.process.toString(),ze=!je&&!Ke&&!(!Ae||!Re.HTMLElement),Qe=typeof K.process<"u"&&"[object process]"===K.process.toString()&&!Ke&&!(!Ae||!Re.HTMLElement),He={},mt=j("enable_beforeunload"),et=function(e){if(!(e=e||K.event))return;let r=He[e.type];r||(r=He[e.type]=j("ON_PROPERTY"+e.type));const c=this||e.target||K,t=c[r];let i;return ze&&c===Re&&"error"===e.type?(i=t&&t.call(this,e.message,e.filename,e.lineno,e.colno,e.error),!0===i&&e.preventDefault()):(i=t&&t.apply(this,arguments),"beforeunload"===e.type&&K[mt]&&"string"==typeof i?e.returnValue=i:null!=i&&!i&&e.preventDefault()),i};function tt(e,r,c){let t=he(e,r);if(!t&&c&&he(c,r)&&(t={enumerable:!0,configurable:!0}),!t||!t.configurable)return;const i=j("on"+r+"patched");if(e.hasOwnProperty(i)&&e[i])return;delete t.writable,delete t.value;const u=t.get,E=t.set,T=r.slice(2);let y=He[T];y||(y=He[T]=j("ON_PROPERTY"+T)),t.set=function(S){let d=this;!d&&e===K&&(d=K),d&&("function"==typeof d[y]&&d.removeEventListener(T,et),E&&E.call(d,null),d[y]=S,"function"==typeof S&&d.addEventListener(T,et,!1))},t.get=function(){let S=this;if(!S&&e===K&&(S=K),!S)return null;const d=S[y];if(d)return d;if(u){let P=u.call(this);if(P)return t.set.call(this,P),"function"==typeof S[yt]&&S.removeAttribute(r),P}return null},Pe(e,r,t),e[i]=!0}function nt(e,r,c){if(r)for(let t=0;t<r.length;t++)tt(e,"on"+r[t],c);else{const t=[];for(const i in e)"on"==i.slice(0,2)&&t.push(i);for(let i=0;i<t.length;i++)tt(e,t[i],c)}}const le=j("originalInstance");function Le(e){const r=K[e];if(!r)return;K[j(e)]=r,K[e]=function(){const i=Be(arguments,e);switch(i.length){case 0:this[le]=new r;break;case 1:this[le]=new r(i[0]);break;case 2:this[le]=new r(i[0],i[1]);break;case 3:this[le]=new r(i[0],i[1],i[2]);break;case 4:this[le]=new r(i[0],i[1],i[2],i[3]);break;default:throw new Error("Arg list too long.")}},pe(K[e],r);const c=new r(function(){});let t;for(t in c)"XMLHttpRequest"===e&&"responseBlob"===t||function(i){"function"==typeof c[i]?K[e].prototype[i]=function(){return this[le][i].apply(this[le],arguments)}:Pe(K[e].prototype,i,{set:function(u){"function"==typeof u?(this[le][i]=ne(u,e+"."+i),pe(this[le][i],u)):this[le][i]=u},get:function(){return this[le][i]}})}(t);for(t in r)"prototype"!==t&&r.hasOwnProperty(t)&&(K[e][t]=r[t])}function ge(e,r,c){let t=e;for(;t&&!t.hasOwnProperty(r);)t=Ne(t);!t&&e[r]&&(t=e);const i=j(r);let u=null;if(t&&(!(u=t[i])||!t.hasOwnProperty(i))&&(u=t[i]=t[r],Je(t&&he(t,r)))){const T=c(u,i,r);t[r]=function(){return T(this,arguments)},pe(t[r],u)}return u}function vt(e,r,c){let t=null;function i(u){const E=u.data;return E.args[E.cbIdx]=function(){u.invoke.apply(this,arguments)},t.apply(E.target,E.args),u}t=ge(e,r,u=>function(E,T){const y=c(E,T);return y.cbIdx>=0&&"function"==typeof T[y.cbIdx]?Fe(y.name,T[y.cbIdx],y,i):u.apply(E,T)})}function pe(e,r){e[j("OriginalDelegate")]=r}let rt=!1,Ue=!1;function wt(){if(rt)return Ue;rt=!0;try{const e=Re.navigator.userAgent;(-1!==e.indexOf("MSIE ")||-1!==e.indexOf("Trident/")||-1!==e.indexOf("Edge/"))&&(Ue=!0)}catch{}return Ue}function ot(e){return"function"==typeof e}function st(e){return"number"==typeof e}let Ce=!1;if(typeof window<"u")try{const e=Object.defineProperty({},"passive",{get:function(){Ce=!0}});window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch{Ce=!1}const Pt={useG:!0},ae={},it={},ct=new RegExp("^"+ce+"(\\w+)(true|false)$"),at=j("propagationStopped");function lt(e,r){const c=(r?r(e):e)+te,t=(r?r(e):e)+ee,i=ce+c,u=ce+t;ae[e]={},ae[e][te]=i,ae[e][ee]=u}function Rt(e,r,c,t){const i=t&&t.add||Ze,u=t&&t.rm||me,E=t&&t.listeners||"eventListeners",T=t&&t.rmAll||"removeAllListeners",y=j(i),S="."+i+":",d="prependListener",P="."+d+":",Z=function(m,h,H){if(m.isRemoved)return;const V=m.callback;let $;"object"==typeof V&&V.handleEvent&&(m.callback=g=>V.handleEvent(g),m.originalDelegate=V);try{m.invoke(m,h,[H])}catch(g){$=g}const G=m.options;return G&&"object"==typeof G&&G.once&&h[u].call(h,H.type,m.originalDelegate?m.originalDelegate:m.callback,G),$};function x(m,h,H){if(!(h=h||e.event))return;const V=m||h.target||e,$=V[ae[h.type][H?ee:te]];if($){const G=[];if(1===$.length){const g=Z($[0],V,h);g&&G.push(g)}else{const g=$.slice();for(let U=0;U<g.length&&(!h||!0!==h[at]);U++){const O=Z(g[U],V,h);O&&G.push(O)}}if(1===G.length)throw G[0];for(let g=0;g<G.length;g++){const U=G[g];r.nativeScheduleMicroTask(()=>{throw U})}}}const z=function(m){return x(this,m,!1)},re=function(m){return x(this,m,!0)};function oe(m,h){if(!m)return!1;let H=!0;h&&void 0!==h.useG&&(H=h.useG);const V=h&&h.vh;let $=!0;h&&void 0!==h.chkDup&&($=h.chkDup);let G=!1;h&&void 0!==h.rt&&(G=h.rt);let g=m;for(;g&&!g.hasOwnProperty(i);)g=Ne(g);if(!g&&m[i]&&(g=m),!g||g[y])return!1;const U=h&&h.eventNameToString,O={},R=g[y]=g[i],b=g[j(u)]=g[u],D=g[j(E)]=g[E],se=g[j(T)]=g[T];let q;h&&h.prepend&&(q=g[j(h.prepend)]=g[h.prepend]);const X=H?function(s){if(!O.isExisting)return R.call(O.target,O.eventName,O.capture?re:z,O.options)}:function(s){return R.call(O.target,O.eventName,s.invoke,O.options)},A=H?function(s){if(!s.isRemoved){const l=ae[s.eventName];let v;l&&(v=l[s.capture?ee:te]);const C=v&&s.target[v];if(C)for(let p=0;p<C.length;p++)if(C[p]===s){C.splice(p,1),s.isRemoved=!0,s.removeAbortListener&&(s.removeAbortListener(),s.removeAbortListener=null),0===C.length&&(s.allRemoved=!0,s.target[v]=null);break}}if(s.allRemoved)return b.call(s.target,s.eventName,s.capture?re:z,s.options)}:function(s){return b.call(s.target,s.eventName,s.invoke,s.options)},ye=h&&h.diff?h.diff:function(s,l){const v=typeof l;return"function"===v&&s.callback===l||"object"===v&&s.originalDelegate===l},ke=Zone[j("UNPATCHED_EVENTS")],ue=e[j("PASSIVE_EVENTS")],a=function(s,l,v,C,p=!1,L=!1){return function(){const I=this||e;let M=arguments[0];h&&h.transferEventName&&(M=h.transferEventName(M));let F=arguments[1];if(!F)return s.apply(this,arguments);if(je&&"uncaughtException"===M)return s.apply(this,arguments);let B=!1;if("function"!=typeof F){if(!F.handleEvent)return s.apply(this,arguments);B=!0}if(V&&!V(s,F,I,arguments))return;const be=Ce&&!!ue&&-1!==ue.indexOf(M),Ee=function f(s){if("object"==typeof s&&null!==s){const l={...s};return s.signal&&(l.signal=s.signal),l}return s}(function N(s,l){return!Ce&&"object"==typeof s&&s?!!s.capture:Ce&&l?"boolean"==typeof s?{capture:s,passive:!0}:s?"object"==typeof s&&!1!==s.passive?{...s,passive:!0}:s:{passive:!0}:s}(arguments[2],be)),De=Ee?.signal;if(De?.aborted)return;if(ke)for(let Te=0;Te<ke.length;Te++)if(M===ke[Te])return be?s.call(I,M,F,Ee):s.apply(this,arguments);const qe=!!Ee&&("boolean"==typeof Ee||Ee.capture),_t=!(!Ee||"object"!=typeof Ee)&&Ee.once,xt=Zone.current;let Xe=ae[M];Xe||(lt(M,U),Xe=ae[M]);const Et=Xe[qe?ee:te];let Ve,Oe=I[Et],Tt=!1;if(Oe){if(Tt=!0,$)for(let Te=0;Te<Oe.length;Te++)if(ye(Oe[Te],F))return}else Oe=I[Et]=[];const gt=I.constructor.name,pt=it[gt];pt&&(Ve=pt[M]),Ve||(Ve=gt+l+(U?U(M):M)),O.options=Ee,_t&&(O.options.once=!1),O.target=I,O.capture=qe,O.eventName=M,O.isExisting=Tt;const Ie=H?Pt:void 0;Ie&&(Ie.taskData=O),De&&(O.options.signal=void 0);const fe=xt.scheduleEventTask(Ve,F,Ie,v,C);if(De){O.options.signal=De;const Te=()=>fe.zone.cancelTask(fe);s.call(De,"abort",Te,{once:!0}),fe.removeAbortListener=()=>De.removeEventListener("abort",Te)}return O.target=null,Ie&&(Ie.taskData=null),_t&&(O.options.once=!0),!Ce&&"boolean"==typeof fe.options||(fe.options=Ee),fe.target=I,fe.capture=qe,fe.eventName=M,B&&(fe.originalDelegate=F),L?Oe.unshift(fe):Oe.push(fe),p?I:void 0}};return g[i]=a(R,S,X,A,G),q&&(g[d]=a(q,P,function(s){return q.call(O.target,O.eventName,s.invoke,O.options)},A,G,!0)),g[u]=function(){const s=this||e;let l=arguments[0];h&&h.transferEventName&&(l=h.transferEventName(l));const v=arguments[2],C=!!v&&("boolean"==typeof v||v.capture),p=arguments[1];if(!p)return b.apply(this,arguments);if(V&&!V(b,p,s,arguments))return;const L=ae[l];let I;L&&(I=L[C?ee:te]);const M=I&&s[I];if(M)for(let F=0;F<M.length;F++){const B=M[F];if(ye(B,p))return M.splice(F,1),B.isRemoved=!0,0!==M.length||(B.allRemoved=!0,s[I]=null,C||"string"!=typeof l)||(s[ce+"ON_PROPERTY"+l]=null),B.zone.cancelTask(B),G?s:void 0}return b.apply(this,arguments)},g[E]=function(){const s=this||e;let l=arguments[0];h&&h.transferEventName&&(l=h.transferEventName(l));const v=[],C=ut(s,U?U(l):l);for(let p=0;p<C.length;p++){const L=C[p];v.push(L.originalDelegate?L.originalDelegate:L.callback)}return v},g[T]=function(){const s=this||e;let l=arguments[0];if(l){h&&h.transferEventName&&(l=h.transferEventName(l));const v=ae[l];if(v){const L=s[v[te]],I=s[v[ee]];if(L){const M=L.slice();for(let F=0;F<M.length;F++){const B=M[F];this[u].call(this,l,B.originalDelegate?B.originalDelegate:B.callback,B.options)}}if(I){const M=I.slice();for(let F=0;F<M.length;F++){const B=M[F];this[u].call(this,l,B.originalDelegate?B.originalDelegate:B.callback,B.options)}}}}else{const v=Object.keys(s);for(let C=0;C<v.length;C++){const L=ct.exec(v[C]);let I=L&&L[1];I&&"removeListener"!==I&&this[T].call(this,I)}this[T].call(this,"removeListener")}if(G)return this},pe(g[i],R),pe(g[u],b),se&&pe(g[T],se),D&&pe(g[E],D),!0}let Y=[];for(let m=0;m<c.length;m++)Y[m]=oe(c[m],t);return Y}function ut(e,r){if(!r){const u=[];for(let E in e){const T=ct.exec(E);let y=T&&T[1];if(y&&(!r||y===r)){const S=e[E];if(S)for(let d=0;d<S.length;d++)u.push(S[d])}}return u}let c=ae[r];c||(lt(r),c=ae[r]);const t=e[c[te]],i=e[c[ee]];return t?i?t.concat(i):t.slice():i?i.slice():[]}function Ct(e,r){const c=e.Event;c&&c.prototype&&r.patchMethod(c.prototype,"stopImmediatePropagation",t=>function(i,u){i[at]=!0,t&&t.apply(i,u)})}const xe=j("zoneTask");function Se(e,r,c,t){let i=null,u=null;c+=t;const E={};function T(S){const d=S.data;d.args[0]=function(){return S.invoke.apply(this,arguments)};const P=i.apply(e,d.args);return st(P)?d.handleId=P:(d.handle=P,d.isRefreshable=ot(P.refresh)),S}function y(S){const{handle:d,handleId:P}=S.data;return u.call(e,d??P)}i=ge(e,r+=t,S=>function(d,P){if(ot(P[0])){const Z={isRefreshable:!1,isPeriodic:"Interval"===t,delay:"Timeout"===t||"Interval"===t?P[1]||0:void 0,args:P},x=P[0];P[0]=function(){try{return x.apply(this,arguments)}finally{const{handle:H,handleId:V,isPeriodic:$,isRefreshable:G}=Z;!$&&!G&&(V?delete E[V]:H&&(H[xe]=null))}};const z=Fe(r,P[0],Z,T,y);if(!z)return z;const{handleId:re,handle:oe,isRefreshable:Y,isPeriodic:m}=z.data;if(re)E[re]=z;else if(oe&&(oe[xe]=z,Y&&!m)){const h=oe.refresh;oe.refresh=function(){const{zone:H,state:V}=z;return"notScheduled"===V?(z._state="scheduled",H._updateTaskCount(z,1)):"running"===V&&(z._state="scheduling"),h.call(this)}}return oe??re??z}return S.apply(e,P)}),u=ge(e,c,S=>function(d,P){const Z=P[0];let x;st(Z)?(x=E[Z],delete E[Z]):(x=Z?.[xe],x?Z[xe]=null:x=Z),x?.type?x.cancelFn&&x.zone.cancelTask(x):S.apply(e,P)})}function ft(e,r,c){if(!c||0===c.length)return r;const t=c.filter(u=>u.target===e);if(!t||0===t.length)return r;const i=t[0].ignoreProperties;return r.filter(u=>-1===i.indexOf(u))}function ht(e,r,c,t){e&&nt(e,ft(e,r,c),t)}function We(e){return Object.getOwnPropertyNames(e).filter(r=>r.startsWith("on")&&r.length>2).map(r=>r.substring(2))}function At(e,r,c,t,i){const u=Zone.__symbol__(t);if(r[u])return;const E=r[u]=r[t];r[t]=function(T,y,S){return y&&y.prototype&&i.forEach(function(d){const P=`${c}.${t}::`+d,Z=y.prototype;try{if(Z.hasOwnProperty(d)){const x=e.ObjectGetOwnPropertyDescriptor(Z,d);x&&x.value?(x.value=e.wrapWithCurrentZone(x.value,P),e._redefineProperty(y.prototype,d,x)):Z[d]&&(Z[d]=e.wrapWithCurrentZone(Z[d],P))}else Z[d]&&(Z[d]=e.wrapWithCurrentZone(Z[d],P))}catch{}}),E.call(r,T,y,S)},e.attachOriginToPatched(r[t],E)}const dt=function we(){const e=globalThis,r=!0===e[J("forceDuplicateZoneCheck")];if(e.Zone&&(r||"function"!=typeof e.Zone.__symbol__))throw new Error("Zone already loaded.");return e.Zone??=function Q(){const e=W.performance;function r(N){e&&e.mark&&e.mark(N)}function c(N,_){e&&e.measure&&e.measure(N,_)}r("Zone");let t=(()=>{class N{static{this.__symbol__=J}static assertZonePatched(){if(W.Promise!==O.ZoneAwarePromise)throw new Error("Zone.js has detected that ZoneAwarePromise `(window|global).Promise` has been overwritten.\nMost likely cause is that a Promise polyfill has been loaded after Zone.js (Polyfilling Promise api is not necessary when zone.js is loaded. If you must load one, do so before loading zone.js.)")}static get root(){let n=N.current;for(;n.parent;)n=n.parent;return n}static get current(){return b.zone}static get currentTask(){return D}static __load_patch(n,o,k=!1){if(O.hasOwnProperty(n)){const w=!0===W[J("forceDuplicateZoneCheck")];if(!k&&w)throw Error("Already loaded patch: "+n)}else if(!W["__Zone_disable_"+n]){const w="Zone:"+n;r(w),O[n]=o(W,N,R),c(w,w)}}get parent(){return this._parent}get name(){return this._name}constructor(n,o){this._parent=n,this._name=o?o.name||"unnamed":"<root>",this._properties=o&&o.properties||{},this._zoneDelegate=new u(this,this._parent&&this._parent._zoneDelegate,o)}get(n){const o=this.getZoneWith(n);if(o)return o._properties[n]}getZoneWith(n){let o=this;for(;o;){if(o._properties.hasOwnProperty(n))return o;o=o._parent}return null}fork(n){if(!n)throw new Error("ZoneSpec required!");return this._zoneDelegate.fork(this,n)}wrap(n,o){if("function"!=typeof n)throw new Error("Expecting function got: "+n);const k=this._zoneDelegate.intercept(this,n,o),w=this;return function(){return w.runGuarded(k,this,arguments,o)}}run(n,o,k,w){b={parent:b,zone:this};try{return this._zoneDelegate.invoke(this,n,o,k,w)}finally{b=b.parent}}runGuarded(n,o=null,k,w){b={parent:b,zone:this};try{try{return this._zoneDelegate.invoke(this,n,o,k,w)}catch(X){if(this._zoneDelegate.handleError(this,X))throw X}}finally{b=b.parent}}runTask(n,o,k){if(n.zone!=this)throw new Error("A task can only be run in the zone of creation! (Creation: "+(n.zone||oe).name+"; Execution: "+this.name+")");const w=n,{type:X,data:{isPeriodic:A=!1,isRefreshable:ve=!1}={}}=n;if(n.state===Y&&(X===U||X===g))return;const ye=n.state!=H;ye&&w._transitionTo(H,h);const ke=D;D=w,b={parent:b,zone:this};try{X==g&&n.data&&!A&&!ve&&(n.cancelFn=void 0);try{return this._zoneDelegate.invokeTask(this,w,o,k)}catch(ue){if(this._zoneDelegate.handleError(this,ue))throw ue}}finally{const ue=n.state;if(ue!==Y&&ue!==$)if(X==U||A||ve&&ue===m)ye&&w._transitionTo(h,H,m);else{const f=w._zoneDelegates;this._updateTaskCount(w,-1),ye&&w._transitionTo(Y,H,Y),ve&&(w._zoneDelegates=f)}b=b.parent,D=ke}}scheduleTask(n){if(n.zone&&n.zone!==this){let k=this;for(;k;){if(k===n.zone)throw Error(`can not reschedule task to ${this.name} which is descendants of the original zone ${n.zone.name}`);k=k.parent}}n._transitionTo(m,Y);const o=[];n._zoneDelegates=o,n._zone=this;try{n=this._zoneDelegate.scheduleTask(this,n)}catch(k){throw n._transitionTo($,m,Y),this._zoneDelegate.handleError(this,k),k}return n._zoneDelegates===o&&this._updateTaskCount(n,1),n.state==m&&n._transitionTo(h,m),n}scheduleMicroTask(n,o,k,w){return this.scheduleTask(new E(G,n,o,k,w,void 0))}scheduleMacroTask(n,o,k,w,X){return this.scheduleTask(new E(g,n,o,k,w,X))}scheduleEventTask(n,o,k,w,X){return this.scheduleTask(new E(U,n,o,k,w,X))}cancelTask(n){if(n.zone!=this)throw new Error("A task can only be cancelled in the zone of creation! (Creation: "+(n.zone||oe).name+"; Execution: "+this.name+")");if(n.state===h||n.state===H){n._transitionTo(V,h,H);try{this._zoneDelegate.cancelTask(this,n)}catch(o){throw n._transitionTo($,V),this._zoneDelegate.handleError(this,o),o}return this._updateTaskCount(n,-1),n._transitionTo(Y,V),n.runCount=-1,n}}_updateTaskCount(n,o){const k=n._zoneDelegates;-1==o&&(n._zoneDelegates=null);for(let w=0;w<k.length;w++)k[w]._updateTaskCount(n.type,o)}}return N})();const i={name:"",onHasTask:(N,_,n,o)=>N.hasTask(n,o),onScheduleTask:(N,_,n,o)=>N.scheduleTask(n,o),onInvokeTask:(N,_,n,o,k,w)=>N.invokeTask(n,o,k,w),onCancelTask:(N,_,n,o)=>N.cancelTask(n,o)};class u{get zone(){return this._zone}constructor(_,n,o){this._taskCounts={microTask:0,macroTask:0,eventTask:0},this._zone=_,this._parentDelegate=n,this._forkZS=o&&(o&&o.onFork?o:n._forkZS),this._forkDlgt=o&&(o.onFork?n:n._forkDlgt),this._forkCurrZone=o&&(o.onFork?this._zone:n._forkCurrZone),this._interceptZS=o&&(o.onIntercept?o:n._interceptZS),this._interceptDlgt=o&&(o.onIntercept?n:n._interceptDlgt),this._interceptCurrZone=o&&(o.onIntercept?this._zone:n._interceptCurrZone),this._invokeZS=o&&(o.onInvoke?o:n._invokeZS),this._invokeDlgt=o&&(o.onInvoke?n:n._invokeDlgt),this._invokeCurrZone=o&&(o.onInvoke?this._zone:n._invokeCurrZone),this._handleErrorZS=o&&(o.onHandleError?o:n._handleErrorZS),this._handleErrorDlgt=o&&(o.onHandleError?n:n._handleErrorDlgt),this._handleErrorCurrZone=o&&(o.onHandleError?this._zone:n._handleErrorCurrZone),this._scheduleTaskZS=o&&(o.onScheduleTask?o:n._scheduleTaskZS),this._scheduleTaskDlgt=o&&(o.onScheduleTask?n:n._scheduleTaskDlgt),this._scheduleTaskCurrZone=o&&(o.onScheduleTask?this._zone:n._scheduleTaskCurrZone),this._invokeTaskZS=o&&(o.onInvokeTask?o:n._invokeTaskZS),this._invokeTaskDlgt=o&&(o.onInvokeTask?n:n._invokeTaskDlgt),this._invokeTaskCurrZone=o&&(o.onInvokeTask?this._zone:n._invokeTaskCurrZone),this._cancelTaskZS=o&&(o.onCancelTask?o:n._cancelTaskZS),this._cancelTaskDlgt=o&&(o.onCancelTask?n:n._cancelTaskDlgt),this._cancelTaskCurrZone=o&&(o.onCancelTask?this._zone:n._cancelTaskCurrZone),this._hasTaskZS=null,this._hasTaskDlgt=null,this._hasTaskDlgtOwner=null,this._hasTaskCurrZone=null;const k=o&&o.onHasTask;(k||n&&n._hasTaskZS)&&(this._hasTaskZS=k?o:i,this._hasTaskDlgt=n,this._hasTaskDlgtOwner=this,this._hasTaskCurrZone=this._zone,o.onScheduleTask||(this._scheduleTaskZS=i,this._scheduleTaskDlgt=n,this._scheduleTaskCurrZone=this._zone),o.onInvokeTask||(this._invokeTaskZS=i,this._invokeTaskDlgt=n,this._invokeTaskCurrZone=this._zone),o.onCancelTask||(this._cancelTaskZS=i,this._cancelTaskDlgt=n,this._cancelTaskCurrZone=this._zone))}fork(_,n){return this._forkZS?this._forkZS.onFork(this._forkDlgt,this.zone,_,n):new t(_,n)}intercept(_,n,o){return this._interceptZS?this._interceptZS.onIntercept(this._interceptDlgt,this._interceptCurrZone,_,n,o):n}invoke(_,n,o,k,w){return this._invokeZS?this._invokeZS.onInvoke(this._invokeDlgt,this._invokeCurrZone,_,n,o,k,w):n.apply(o,k)}handleError(_,n){return!this._handleErrorZS||this._handleErrorZS.onHandleError(this._handleErrorDlgt,this._handleErrorCurrZone,_,n)}scheduleTask(_,n){let o=n;if(this._scheduleTaskZS)this._hasTaskZS&&o._zoneDelegates.push(this._hasTaskDlgtOwner),o=this._scheduleTaskZS.onScheduleTask(this._scheduleTaskDlgt,this._scheduleTaskCurrZone,_,n),o||(o=n);else if(n.scheduleFn)n.scheduleFn(n);else{if(n.type!=G)throw new Error("Task is missing scheduleFn.");z(n)}return o}invokeTask(_,n,o,k){return this._invokeTaskZS?this._invokeTaskZS.onInvokeTask(this._invokeTaskDlgt,this._invokeTaskCurrZone,_,n,o,k):n.callback.apply(o,k)}cancelTask(_,n){let o;if(this._cancelTaskZS)o=this._cancelTaskZS.onCancelTask(this._cancelTaskDlgt,this._cancelTaskCurrZone,_,n);else{if(!n.cancelFn)throw Error("Task is not cancelable");o=n.cancelFn(n)}return o}hasTask(_,n){try{this._hasTaskZS&&this._hasTaskZS.onHasTask(this._hasTaskDlgt,this._hasTaskCurrZone,_,n)}catch(o){this.handleError(_,o)}}_updateTaskCount(_,n){const o=this._taskCounts,k=o[_],w=o[_]=k+n;if(w<0)throw new Error("More tasks executed then were scheduled.");0!=k&&0!=w||this.hasTask(this._zone,{microTask:o.microTask>0,macroTask:o.macroTask>0,eventTask:o.eventTask>0,change:_})}}class E{constructor(_,n,o,k,w,X){if(this._zone=null,this.runCount=0,this._zoneDelegates=null,this._state="notScheduled",this.type=_,this.source=n,this.data=k,this.scheduleFn=w,this.cancelFn=X,!o)throw new Error("callback is not defined");this.callback=o;const A=this;this.invoke=_===U&&k&&k.useG?E.invokeTask:function(){return E.invokeTask.call(W,A,this,arguments)}}static invokeTask(_,n,o){_||(_=this),se++;try{return _.runCount++,_.zone.runTask(_,n,o)}finally{1==se&&re(),se--}}get zone(){return this._zone}get state(){return this._state}cancelScheduleRequest(){this._transitionTo(Y,m)}_transitionTo(_,n,o){if(this._state!==n&&this._state!==o)throw new Error(`${this.type} '${this.source}': can not transition to '${_}', expecting state '${n}'${o?" or '"+o+"'":""}, was '${this._state}'.`);this._state=_,_==Y&&(this._zoneDelegates=null)}toString(){return this.data&&typeof this.data.handleId<"u"?this.data.handleId.toString():Object.prototype.toString.call(this)}toJSON(){return{type:this.type,state:this.state,source:this.source,zone:this.zone.name,runCount:this.runCount}}}const T=J("setTimeout"),y=J("Promise"),S=J("then");let Z,d=[],P=!1;function x(N){if(Z||W[y]&&(Z=W[y].resolve(0)),Z){let _=Z[S];_||(_=Z.then),_.call(Z,N)}else W[T](N,0)}function z(N){0===se&&0===d.length&&x(re),N&&d.push(N)}function re(){if(!P){for(P=!0;d.length;){const N=d;d=[];for(let _=0;_<N.length;_++){const n=N[_];try{n.zone.runTask(n,null,null)}catch(o){R.onUnhandledError(o)}}}R.microtaskDrainDone(),P=!1}}const oe={name:"NO ZONE"},Y="notScheduled",m="scheduling",h="scheduled",H="running",V="canceling",$="unknown",G="microTask",g="macroTask",U="eventTask",O={},R={symbol:J,currentZoneFrame:()=>b,onUnhandledError:q,microtaskDrainDone:q,scheduleMicroTask:z,showUncaughtError:()=>!t[J("ignoreConsoleErrorUncaughtError")],patchEventTarget:()=>[],patchOnProperties:q,patchMethod:()=>q,bindArguments:()=>[],patchThen:()=>q,patchMacroTask:()=>q,patchEventPrototype:()=>q,isIEOrEdge:()=>!1,getGlobalObjects:()=>{},ObjectDefineProperty:()=>q,ObjectGetOwnPropertyDescriptor:()=>{},ObjectCreate:()=>{},ArraySlice:()=>[],patchClass:()=>q,wrapWithCurrentZone:()=>q,filterProperties:()=>[],attachOriginToPatched:()=>q,_redefineProperty:()=>q,patchCallbacks:()=>q,nativeScheduleMicroTask:x};let b={parent:null,zone:new t(null,null)},D=null,se=0;function q(){}return c("Zone","Zone"),t}(),e.Zone}();(function Ht(e){(function Mt(e){e.__load_patch("ZoneAwarePromise",(r,c,t)=>{const i=Object.getOwnPropertyDescriptor,u=Object.defineProperty,T=t.symbol,y=[],S=!1!==r[T("DISABLE_WRAPPING_UNCAUGHT_PROMISE_REJECTION")],d=T("Promise"),P=T("then"),Z="__creationTrace__";t.onUnhandledError=f=>{if(t.showUncaughtError()){const a=f&&f.rejection;a?console.error("Unhandled Promise rejection:",a instanceof Error?a.message:a,"; Zone:",f.zone.name,"; Task:",f.task&&f.task.source,"; Value:",a,a instanceof Error?a.stack:void 0):console.error(f)}},t.microtaskDrainDone=()=>{for(;y.length;){const f=y.shift();try{f.zone.runGuarded(()=>{throw f.throwOriginal?f.rejection:f})}catch(a){z(a)}}};const x=T("unhandledPromiseRejectionHandler");function z(f){t.onUnhandledError(f);try{const a=c[x];"function"==typeof a&&a.call(this,f)}catch{}}function re(f){return f&&f.then}function oe(f){return f}function Y(f){return A.reject(f)}const m=T("state"),h=T("value"),H=T("finally"),V=T("parentPromiseValue"),$=T("parentPromiseState"),G="Promise.then",g=null,U=!0,O=!1,R=0;function b(f,a){return s=>{try{N(f,a,s)}catch(l){N(f,!1,l)}}}const D=function(){let f=!1;return function(s){return function(){f||(f=!0,s.apply(null,arguments))}}},se="Promise resolved with itself",q=T("currentTaskTrace");function N(f,a,s){const l=D();if(f===s)throw new TypeError(se);if(f[m]===g){let v=null;try{("object"==typeof s||"function"==typeof s)&&(v=s&&s.then)}catch(C){return l(()=>{N(f,!1,C)})(),f}if(a!==O&&s instanceof A&&s.hasOwnProperty(m)&&s.hasOwnProperty(h)&&s[m]!==g)n(s),N(f,s[m],s[h]);else if(a!==O&&"function"==typeof v)try{v.call(s,l(b(f,a)),l(b(f,!1)))}catch(C){l(()=>{N(f,!1,C)})()}else{f[m]=a;const C=f[h];if(f[h]=s,f[H]===H&&a===U&&(f[m]=f[$],f[h]=f[V]),a===O&&s instanceof Error){const p=c.currentTask&&c.currentTask.data&&c.currentTask.data[Z];p&&u(s,q,{configurable:!0,enumerable:!1,writable:!0,value:p})}for(let p=0;p<C.length;)o(f,C[p++],C[p++],C[p++],C[p++]);if(0==C.length&&a==O){f[m]=R;let p=s;try{throw new Error("Uncaught (in promise): "+function E(f){return f&&f.toString===Object.prototype.toString?(f.constructor&&f.constructor.name||"")+": "+JSON.stringify(f):f?f.toString():Object.prototype.toString.call(f)}(s)+(s&&s.stack?"\n"+s.stack:""))}catch(L){p=L}S&&(p.throwOriginal=!0),p.rejection=s,p.promise=f,p.zone=c.current,p.task=c.currentTask,y.push(p),t.scheduleMicroTask()}}}return f}const _=T("rejectionHandledHandler");function n(f){if(f[m]===R){try{const a=c[_];a&&"function"==typeof a&&a.call(this,{rejection:f[h],promise:f})}catch{}f[m]=O;for(let a=0;a<y.length;a++)f===y[a].promise&&y.splice(a,1)}}function o(f,a,s,l,v){n(f);const C=f[m],p=C?"function"==typeof l?l:oe:"function"==typeof v?v:Y;a.scheduleMicroTask(G,()=>{try{const L=f[h],I=!!s&&H===s[H];I&&(s[V]=L,s[$]=C);const M=a.run(p,void 0,I&&p!==Y&&p!==oe?[]:[L]);N(s,!0,M)}catch(L){N(s,!1,L)}},s)}const w=function(){},X=r.AggregateError;class A{static toString(){return"function ZoneAwarePromise() { [native code] }"}static resolve(a){return a instanceof A?a:N(new this(null),U,a)}static reject(a){return N(new this(null),O,a)}static withResolvers(){const a={};return a.promise=new A((s,l)=>{a.resolve=s,a.reject=l}),a}static any(a){if(!a||"function"!=typeof a[Symbol.iterator])return Promise.reject(new X([],"All promises were rejected"));const s=[];let l=0;try{for(let p of a)l++,s.push(A.resolve(p))}catch{return Promise.reject(new X([],"All promises were rejected"))}if(0===l)return Promise.reject(new X([],"All promises were rejected"));let v=!1;const C=[];return new A((p,L)=>{for(let I=0;I<s.length;I++)s[I].then(M=>{v||(v=!0,p(M))},M=>{C.push(M),l--,0===l&&(v=!0,L(new X(C,"All promises were rejected")))})})}static race(a){let s,l,v=new this((L,I)=>{s=L,l=I});function C(L){s(L)}function p(L){l(L)}for(let L of a)re(L)||(L=this.resolve(L)),L.then(C,p);return v}static all(a){return A.allWithCallback(a)}static allSettled(a){return(this&&this.prototype instanceof A?this:A).allWithCallback(a,{thenCallback:l=>({status:"fulfilled",value:l}),errorCallback:l=>({status:"rejected",reason:l})})}static allWithCallback(a,s){let l,v,C=new this((M,F)=>{l=M,v=F}),p=2,L=0;const I=[];for(let M of a){re(M)||(M=this.resolve(M));const F=L;try{M.then(B=>{I[F]=s?s.thenCallback(B):B,p--,0===p&&l(I)},B=>{s?(I[F]=s.errorCallback(B),p--,0===p&&l(I)):v(B)})}catch(B){v(B)}p++,L++}return p-=2,0===p&&l(I),C}constructor(a){const s=this;if(!(s instanceof A))throw new Error("Must be an instanceof Promise.");s[m]=g,s[h]=[];try{const l=D();a&&a(l(b(s,U)),l(b(s,O)))}catch(l){N(s,!1,l)}}get[Symbol.toStringTag](){return"Promise"}get[Symbol.species](){return A}then(a,s){let l=this.constructor?.[Symbol.species];(!l||"function"!=typeof l)&&(l=this.constructor||A);const v=new l(w),C=c.current;return this[m]==g?this[h].push(C,v,a,s):o(this,C,v,a,s),v}catch(a){return this.then(null,a)}finally(a){let s=this.constructor?.[Symbol.species];(!s||"function"!=typeof s)&&(s=A);const l=new s(w);l[H]=H;const v=c.current;return this[m]==g?this[h].push(v,l,a,a):o(this,v,l,a,a),l}}A.resolve=A.resolve,A.reject=A.reject,A.race=A.race,A.all=A.all;const ve=r[d]=r.Promise;r.Promise=A;const ye=T("thenPatched");function ke(f){const a=f.prototype,s=i(a,"then");if(s&&(!1===s.writable||!s.configurable))return;const l=a.then;a[P]=l,f.prototype.then=function(v,C){return new A((L,I)=>{l.call(this,L,I)}).then(v,C)},f[ye]=!0}return t.patchThen=ke,ve&&(ke(ve),ge(r,"fetch",f=>function ue(f){return function(a,s){let l=f.apply(a,s);if(l instanceof A)return l;let v=l.constructor;return v[ye]||ke(v),l}}(f))),Promise[c.__symbol__("uncaughtPromiseErrors")]=y,A})})(e),function Zt(e){e.__load_patch("toString",r=>{const c=Function.prototype.toString,t=j("OriginalDelegate"),i=j("Promise"),u=j("Error"),E=function(){if("function"==typeof this){const d=this[t];if(d)return"function"==typeof d?c.call(d):Object.prototype.toString.call(d);if(this===Promise){const P=r[i];if(P)return c.call(P)}if(this===Error){const P=r[u];if(P)return c.call(P)}}return c.call(this)};E[t]=c,Function.prototype.toString=E;const T=Object.prototype.toString;Object.prototype.toString=function(){return"function"==typeof Promise&&this instanceof Promise?"[object Promise]":T.call(this)}})}(e),function jt(e){e.__load_patch("util",(r,c,t)=>{const i=We(r);t.patchOnProperties=nt,t.patchMethod=ge,t.bindArguments=Be,t.patchMacroTask=vt;const u=c.__symbol__("BLACK_LISTED_EVENTS"),E=c.__symbol__("UNPATCHED_EVENTS");r[E]&&(r[u]=r[E]),r[u]&&(c[u]=c[E]=r[u]),t.patchEventPrototype=Ct,t.patchEventTarget=Rt,t.isIEOrEdge=wt,t.ObjectDefineProperty=Pe,t.ObjectGetOwnPropertyDescriptor=he,t.ObjectCreate=Me,t.ArraySlice=$e,t.patchClass=Le,t.wrapWithCurrentZone=ne,t.filterProperties=ft,t.attachOriginToPatched=pe,t._redefineProperty=Object.defineProperty,t.patchCallbacks=At,t.getGlobalObjects=()=>({globalSources:it,zoneSymbolEventNames:ae,eventNames:i,isBrowser:ze,isMix:Qe,isNode:je,TRUE_STR:ee,FALSE_STR:te,ZONE_SYMBOL_PREFIX:ce,ADD_EVENT_LISTENER_STR:Ze,REMOVE_EVENT_LISTENER_STR:me})})}(e)})(dt),function It(e){e.__load_patch("legacy",r=>{const c=r[e.__symbol__("legacyPatch")];c&&c()}),e.__load_patch("timers",r=>{const c="set",t="clear";Se(r,c,t,"Timeout"),Se(r,c,t,"Interval"),Se(r,c,t,"Immediate")}),e.__load_patch("requestAnimationFrame",r=>{Se(r,"request","cancel","AnimationFrame"),Se(r,"mozRequest","mozCancel","AnimationFrame"),Se(r,"webkitRequest","webkitCancel","AnimationFrame")}),e.__load_patch("blocking",(r,c)=>{const t=["alert","prompt","confirm"];for(let i=0;i<t.length;i++)ge(r,t[i],(E,T,y)=>function(S,d){return c.current.run(E,r,d,y)})}),e.__load_patch("EventTarget",(r,c,t)=>{(function Nt(e,r){r.patchEventPrototype(e,r)})(r,t),function Ot(e,r){if(Zone[r.symbol("patchEventTarget")])return;const{eventNames:c,zoneSymbolEventNames:t,TRUE_STR:i,FALSE_STR:u,ZONE_SYMBOL_PREFIX:E}=r.getGlobalObjects();for(let y=0;y<c.length;y++){const S=c[y],Z=E+(S+u),x=E+(S+i);t[S]={},t[S][u]=Z,t[S][i]=x}const T=e.EventTarget;T&&T.prototype&&r.patchEventTarget(e,r,[T&&T.prototype])}(r,t);const i=r.XMLHttpRequestEventTarget;i&&i.prototype&&t.patchEventTarget(r,t,[i.prototype])}),e.__load_patch("MutationObserver",(r,c,t)=>{Le("MutationObserver"),Le("WebKitMutationObserver")}),e.__load_patch("IntersectionObserver",(r,c,t)=>{Le("IntersectionObserver")}),e.__load_patch("FileReader",(r,c,t)=>{Le("FileReader")}),e.__load_patch("on_property",(r,c,t)=>{!function Lt(e,r){if(je&&!Qe||Zone[e.symbol("patchEvents")])return;const c=r.__Zone_ignore_on_properties;let t=[];if(ze){const i=window;t=t.concat(["Document","SVGElement","Element","HTMLElement","HTMLBodyElement","HTMLMediaElement","HTMLFrameSetElement","HTMLFrameElement","HTMLIFrameElement","HTMLMarqueeElement","Worker"]);const u=function bt(){try{const e=Re.navigator.userAgent;if(-1!==e.indexOf("MSIE ")||-1!==e.indexOf("Trident/"))return!0}catch{}return!1}()?[{target:i,ignoreProperties:["error"]}]:[];ht(i,We(i),c&&c.concat(u),Ne(i))}t=t.concat(["XMLHttpRequest","XMLHttpRequestEventTarget","IDBIndex","IDBRequest","IDBOpenDBRequest","IDBDatabase","IDBTransaction","IDBCursor","WebSocket"]);for(let i=0;i<t.length;i++){const u=r[t[i]];u&&u.prototype&&ht(u.prototype,We(u.prototype),c)}}(t,r)}),e.__load_patch("customElements",(r,c,t)=>{!function Dt(e,r){const{isBrowser:c,isMix:t}=r.getGlobalObjects();(c||t)&&e.customElements&&"customElements"in e&&r.patchCallbacks(r,e.customElements,"customElements","define",["connectedCallback","disconnectedCallback","adoptedCallback","attributeChangedCallback","formAssociatedCallback","formDisabledCallback","formResetCallback","formStateRestoreCallback"])}(r,t)}),e.__load_patch("XHR",(r,c)=>{!function S(d){const P=d.XMLHttpRequest;if(!P)return;const Z=P.prototype;let z=Z[de],re=Z[_e];if(!z){const R=d.XMLHttpRequestEventTarget;if(R){const b=R.prototype;z=b[de],re=b[_e]}}const oe="readystatechange",Y="scheduled";function m(R){const b=R.data,D=b.target;D[E]=!1,D[y]=!1;const se=D[u];z||(z=D[de],re=D[_e]),se&&re.call(D,oe,se);const q=D[u]=()=>{if(D.readyState===D.DONE)if(!b.aborted&&D[E]&&R.state===Y){const _=D[c.__symbol__("loadfalse")];if(0!==D.status&&_&&_.length>0){const n=R.invoke;R.invoke=function(){const o=D[c.__symbol__("loadfalse")];for(let k=0;k<o.length;k++)o[k]===R&&o.splice(k,1);!b.aborted&&R.state===Y&&n.call(R)},_.push(R)}else R.invoke()}else!b.aborted&&!1===D[E]&&(D[y]=!0)};return z.call(D,oe,q),D[t]||(D[t]=R),U.apply(D,b.args),D[E]=!0,R}function h(){}function H(R){const b=R.data;return b.aborted=!0,O.apply(b.target,b.args)}const V=ge(Z,"open",()=>function(R,b){return R[i]=0==b[2],R[T]=b[1],V.apply(R,b)}),G=j("fetchTaskAborting"),g=j("fetchTaskScheduling"),U=ge(Z,"send",()=>function(R,b){if(!0===c.current[g]||R[i])return U.apply(R,b);{const D={target:R,url:R[T],isPeriodic:!1,args:b,aborted:!1},se=Fe("XMLHttpRequest.send",h,D,m,H);R&&!0===R[y]&&!D.aborted&&se.state===Y&&se.invoke()}}),O=ge(Z,"abort",()=>function(R,b){const D=function x(R){return R[t]}(R);if(D&&"string"==typeof D.type){if(null==D.cancelFn||D.data&&D.data.aborted)return;D.zone.cancelTask(D)}else if(!0===c.current[G])return O.apply(R,b)})}(r);const t=j("xhrTask"),i=j("xhrSync"),u=j("xhrListener"),E=j("xhrScheduled"),T=j("xhrURL"),y=j("xhrErrorBeforeScheduled")}),e.__load_patch("geolocation",r=>{r.navigator&&r.navigator.geolocation&&function kt(e,r){const c=e.constructor.name;for(let t=0;t<r.length;t++){const i=r[t],u=e[i];if(u){if(!Je(he(e,i)))continue;e[i]=(T=>{const y=function(){return T.apply(this,Be(arguments,c+"."+i))};return pe(y,T),y})(u)}}}(r.navigator.geolocation,["getCurrentPosition","watchPosition"])}),e.__load_patch("PromiseRejectionEvent",(r,c)=>{function t(i){return function(u){ut(r,i).forEach(T=>{const y=r.PromiseRejectionEvent;if(y){const S=new y(i,{promise:u.promise,reason:u.rejection});T.invoke(S)}})}}r.PromiseRejectionEvent&&(c[j("unhandledPromiseRejectionHandler")]=t("unhandledrejection"),c[j("rejectionHandledHandler")]=t("rejectionhandled"))}),e.__load_patch("queueMicrotask",(r,c,t)=>{!function St(e,r){r.patchMethod(e,"queueMicrotask",c=>function(t,i){Zone.current.scheduleMicroTask("queueMicrotask",i[0])})}(r,t)})}(dt)}},Ge={};function ie(W){var J=Ge[W];if(void 0!==J)return J.exports;var Q=Ge[W]={exports:{}};return Ye[W](Q,Q.exports,ie),Q.exports}ie.m=Ye,ie.c=Ge,ie.o=(W,J)=>Object.prototype.hasOwnProperty.call(W,J),(()=>{ie.S={};var W={},J={};ie.I=(Q,we)=>{we||(we=[]);var he=J[Q];if(he||(he=J[Q]={}),!(we.indexOf(he)>=0)){if(we.push(he),W[Q])return W[Q];ie.o(ie.S,Q)||(ie.S[Q]={});var me=[];return W[Q]=me.length?Promise.all(me).then(()=>W[Q]=1):1}}})(),ie(420)})();