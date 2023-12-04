/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zo=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let s=e.charCodeAt(r);s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=s&63|128):(s&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=s&63|128):(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=s&63|128)}return t},xc=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const s=e[n++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=e[n++];t[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=e[n++],o=e[n++],a=e[n++],u=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(u>>10)),t[r++]=String.fromCharCode(56320+(u&1023))}else{const i=e[n++],o=e[n++];t[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return t.join("")},ta={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<e.length;s+=3){const i=e[s],o=s+1<e.length,a=o?e[s+1]:0,u=s+2<e.length,c=u?e[s+2]:0,l=i>>2,h=(i&3)<<4|a>>4;let f=(a&15)<<2|c>>6,m=c&63;u||(m=64,o||(f=64)),r.push(n[l],n[h],n[f],n[m])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Zo(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):xc(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<e.length;){const i=n[e.charAt(s++)],a=s<e.length?n[e.charAt(s)]:0;++s;const c=s<e.length?n[e.charAt(s)]:64;++s;const h=s<e.length?n[e.charAt(s)]:64;if(++s,i==null||a==null||c==null||h==null)throw new Mc;const f=i<<2|a>>4;if(r.push(f),c!==64){const m=a<<4&240|c>>2;if(r.push(m),h!==64){const _=c<<6&192|h;r.push(_)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class Mc extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Lc=function(e){const t=Zo(e);return ta.encodeByteArray(t,!0)},kn=function(e){return Lc(e).replace(/\./g,"")},Fc=function(e){try{return ta.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uc(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bc=()=>Uc().__FIREBASE_DEFAULTS__,qc=()=>{if(typeof process>"u"||typeof process.env>"u")return;const e={}.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},jc=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&Fc(e[1]);return t&&JSON.parse(t)},ea=()=>{try{return Bc()||qc()||jc()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},$c=e=>{var t,n;return(n=(t=ea())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},zc=e=>{const t=$c(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),r]:[t.substring(0,n),r]},na=()=>{var e;return(e=ea())===null||e===void 0?void 0:e.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hc{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gc(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",s=e.iat||0,i=e.sub||e.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},e),a="";return[kn(JSON.stringify(n)),kn(JSON.stringify(o)),a].join(".")}function Kc(){try{return typeof indexedDB=="object"}catch{return!1}}function Qc(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;t(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){t(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wc="FirebaseError";class ge extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=Wc,Object.setPrototypeOf(this,ge.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ra.prototype.create)}}class ra{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},s=`${this.service}/${t}`,i=this.errors[t],o=i?Jc(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new ge(s,a,r)}}function Jc(e,t){return e.replace(Xc,(n,r)=>{const s=t[r];return s!=null?String(s):`<${r}?>`})}const Xc=/\{\$([^}]+)}/g;function Kr(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const s of n){if(!r.includes(s))return!1;const i=e[s],o=t[s];if(xi(i)&&xi(o)){if(!Kr(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function xi(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fe(e){return e&&e._delegate?e._delegate:e}class Ue{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yc{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new Hc;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),s=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(tl(t))try{this.getOrInitializeService({instanceIdentifier:Lt})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(t=Lt){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Lt){return this.instances.has(t)}getOptions(t=Lt){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(t,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(t),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&t(o,s),()=>{i.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Zc(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Lt){return this.component?this.component.multipleInstances?t:Lt:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Zc(e){return e===Lt?void 0:e}function tl(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class el{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new Yc(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var D;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(D||(D={}));const nl={debug:D.DEBUG,verbose:D.VERBOSE,info:D.INFO,warn:D.WARN,error:D.ERROR,silent:D.SILENT},rl=D.INFO,sl={[D.DEBUG]:"log",[D.VERBOSE]:"log",[D.INFO]:"info",[D.WARN]:"warn",[D.ERROR]:"error"},il=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),s=sl[t];if(s)console[s](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class sa{constructor(t){this.name=t,this._logLevel=rl,this._logHandler=il,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in D))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?nl[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,D.DEBUG,...t),this._logHandler(this,D.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,D.VERBOSE,...t),this._logHandler(this,D.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,D.INFO,...t),this._logHandler(this,D.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,D.WARN,...t),this._logHandler(this,D.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,D.ERROR,...t),this._logHandler(this,D.ERROR,...t)}}const ol=(e,t)=>t.some(n=>e instanceof n);let Mi,Li;function al(){return Mi||(Mi=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ul(){return Li||(Li=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ia=new WeakMap,Qr=new WeakMap,oa=new WeakMap,Sr=new WeakMap,bs=new WeakMap;function cl(e){const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("success",i),e.removeEventListener("error",o)},i=()=>{n(Dt(e.result)),s()},o=()=>{r(e.error),s()};e.addEventListener("success",i),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&ia.set(n,e)}).catch(()=>{}),bs.set(t,e),t}function ll(e){if(Qr.has(e))return;const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",o),e.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(e.error||new DOMException("AbortError","AbortError")),s()};e.addEventListener("complete",i),e.addEventListener("error",o),e.addEventListener("abort",o)});Qr.set(e,t)}let Wr={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Qr.get(e);if(t==="objectStoreNames")return e.objectStoreNames||oa.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Dt(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function hl(e){Wr=e(Wr)}function dl(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(Cr(this),t,...n);return oa.set(r,t.sort?t.sort():[t]),Dt(r)}:ul().includes(e)?function(...t){return e.apply(Cr(this),t),Dt(ia.get(this))}:function(...t){return Dt(e.apply(Cr(this),t))}}function fl(e){return typeof e=="function"?dl(e):(e instanceof IDBTransaction&&ll(e),ol(e,al())?new Proxy(e,Wr):e)}function Dt(e){if(e instanceof IDBRequest)return cl(e);if(Sr.has(e))return Sr.get(e);const t=fl(e);return t!==e&&(Sr.set(e,t),bs.set(t,e)),t}const Cr=e=>bs.get(e);function pl(e,t,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(e,t),a=Dt(o);return r&&o.addEventListener("upgradeneeded",u=>{r(Dt(o.result),u.oldVersion,u.newVersion,Dt(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),a.then(u=>{i&&u.addEventListener("close",()=>i()),s&&u.addEventListener("versionchange",c=>s(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const ml=["get","getKey","getAll","getAllKeys","count"],gl=["put","add","delete","clear"],Pr=new Map;function Fi(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Pr.get(t))return Pr.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,s=gl.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||ml.includes(n)))return;const i=async function(o,...a){const u=this.transaction(o,s?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),s&&u.done]))[0]};return Pr.set(t,i),i}hl(e=>({...e,get:(t,n,r)=>Fi(t,n)||e.get(t,n,r),has:(t,n)=>!!Fi(t,n)||e.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _l{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(yl(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function yl(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Jr="@firebase/app",Ui="0.9.24";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $t=new sa("@firebase/app"),El="@firebase/app-compat",Tl="@firebase/analytics-compat",wl="@firebase/analytics",vl="@firebase/app-check-compat",Il="@firebase/app-check",Al="@firebase/auth",Rl="@firebase/auth-compat",Sl="@firebase/database",Cl="@firebase/database-compat",Pl="@firebase/functions",Vl="@firebase/functions-compat",Dl="@firebase/installations",bl="@firebase/installations-compat",Nl="@firebase/messaging",Ol="@firebase/messaging-compat",kl="@firebase/performance",xl="@firebase/performance-compat",Ml="@firebase/remote-config",Ll="@firebase/remote-config-compat",Fl="@firebase/storage",Ul="@firebase/storage-compat",Bl="@firebase/firestore",ql="@firebase/firestore-compat",jl="firebase",$l="10.7.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xr="[DEFAULT]",zl={[Jr]:"fire-core",[El]:"fire-core-compat",[wl]:"fire-analytics",[Tl]:"fire-analytics-compat",[Il]:"fire-app-check",[vl]:"fire-app-check-compat",[Al]:"fire-auth",[Rl]:"fire-auth-compat",[Sl]:"fire-rtdb",[Cl]:"fire-rtdb-compat",[Pl]:"fire-fn",[Vl]:"fire-fn-compat",[Dl]:"fire-iid",[bl]:"fire-iid-compat",[Nl]:"fire-fcm",[Ol]:"fire-fcm-compat",[kl]:"fire-perf",[xl]:"fire-perf-compat",[Ml]:"fire-rc",[Ll]:"fire-rc-compat",[Fl]:"fire-gcs",[Ul]:"fire-gcs-compat",[Bl]:"fire-fst",[ql]:"fire-fst-compat","fire-js":"fire-js",[jl]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xn=new Map,Yr=new Map;function Hl(e,t){try{e.container.addComponent(t)}catch(n){$t.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Mn(e){const t=e.name;if(Yr.has(t))return $t.debug(`There were multiple attempts to register component ${t}.`),!1;Yr.set(t,e);for(const n of xn.values())Hl(n,e);return!0}function Gl(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kl={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},bt=new ra("app","Firebase",Kl);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ql{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Ue("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw bt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wl=$l;function aa(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:Xr,automaticDataCollectionEnabled:!1},t),s=r.name;if(typeof s!="string"||!s)throw bt.create("bad-app-name",{appName:String(s)});if(n||(n=na()),!n)throw bt.create("no-options");const i=xn.get(s);if(i){if(Kr(n,i.options)&&Kr(r,i.config))return i;throw bt.create("duplicate-app",{appName:s})}const o=new el(s);for(const u of Yr.values())o.addComponent(u);const a=new Ql(n,r,o);return xn.set(s,a),a}function Jl(e=Xr){const t=xn.get(e);if(!t&&e===Xr&&na())return aa();if(!t)throw bt.create("no-app",{appName:e});return t}function te(e,t,n){var r;let s=(r=zl[e])!==null&&r!==void 0?r:e;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=t.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${t}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),$t.warn(a.join(" "));return}Mn(new Ue(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xl="firebase-heartbeat-database",Yl=1,Be="firebase-heartbeat-store";let Vr=null;function ua(){return Vr||(Vr=pl(Xl,Yl,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(Be)}}}).catch(e=>{throw bt.create("idb-open",{originalErrorMessage:e.message})})),Vr}async function Zl(e){try{return await(await ua()).transaction(Be).objectStore(Be).get(ca(e))}catch(t){if(t instanceof ge)$t.warn(t.message);else{const n=bt.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});$t.warn(n.message)}}}async function Bi(e,t){try{const r=(await ua()).transaction(Be,"readwrite");await r.objectStore(Be).put(t,ca(e)),await r.done}catch(n){if(n instanceof ge)$t.warn(n.message);else{const r=bt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});$t.warn(r.message)}}}function ca(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const th=1024,eh=30*24*60*60*1e3;class nh{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new sh(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,n;const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=qi();if(!(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=eh}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var t;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=qi(),{heartbeatsToSend:r,unsentEntries:s}=rh(this._heartbeatsCache.heartbeats),i=kn(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function qi(){return new Date().toISOString().substring(0,10)}function rh(e,t=th){const n=[];let r=e.slice();for(const s of e){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),ji(n)>t){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),ji(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class sh{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Kc()?Qc().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Zl(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Bi(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Bi(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function ji(e){return kn(JSON.stringify({version:2,heartbeats:e})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ih(e){Mn(new Ue("platform-logger",t=>new _l(t),"PRIVATE")),Mn(new Ue("heartbeat",t=>new nh(t),"PRIVATE")),te(Jr,Ui,e),te(Jr,Ui,"esm2017"),te("fire-js","")}ih("");var oh="firebase",ah="10.7.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */te(oh,ah,"app");var uh=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},E,Ns=Ns||{},A=uh||self;function Wn(e){var t=typeof e;return t=t!="object"?t:e?Array.isArray(e)?"array":t:"null",t=="array"||t=="object"&&typeof e.length=="number"}function tn(e){var t=typeof e;return t=="object"&&e!=null||t=="function"}function ch(e){return Object.prototype.hasOwnProperty.call(e,Dr)&&e[Dr]||(e[Dr]=++lh)}var Dr="closure_uid_"+(1e9*Math.random()>>>0),lh=0;function hh(e,t,n){return e.call.apply(e.bind,arguments)}function dh(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,r),e.apply(t,s)}}return function(){return e.apply(t,arguments)}}function st(e,t,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?st=hh:st=dh,st.apply(null,arguments)}function En(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),e.apply(this,r)}}function W(e,t){function n(){}n.prototype=t.prototype,e.$=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.ac=function(r,s,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return t.prototype[s].apply(r,o)}}function xt(){this.s=this.s,this.o=this.o}var fh=0;xt.prototype.s=!1;xt.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),fh!=0)&&ch(this)};xt.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const la=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if(typeof e=="string")return typeof t!="string"||t.length!=1?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function Os(e){const t=e.length;if(0<t){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function $i(e,t){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(Wn(r)){const s=e.length||0,i=r.length||0;e.length=s+i;for(let o=0;o<i;o++)e[s+o]=r[o]}else e.push(r)}}function it(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}it.prototype.h=function(){this.defaultPrevented=!0};var ph=function(){if(!A.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{const n=()=>{};A.addEventListener("test",n,t),A.removeEventListener("test",n,t)}catch{}return e}();function qe(e){return/^[\s\xa0]*$/.test(e)}function Jn(){var e=A.navigator;return e&&(e=e.userAgent)?e:""}function pt(e){return Jn().indexOf(e)!=-1}function ks(e){return ks[" "](e),e}ks[" "]=function(){};function mh(e,t){var n=ad;return Object.prototype.hasOwnProperty.call(n,e)?n[e]:n[e]=t(e)}var gh=pt("Opera"),ae=pt("Trident")||pt("MSIE"),ha=pt("Edge"),Zr=ha||ae,da=pt("Gecko")&&!(Jn().toLowerCase().indexOf("webkit")!=-1&&!pt("Edge"))&&!(pt("Trident")||pt("MSIE"))&&!pt("Edge"),_h=Jn().toLowerCase().indexOf("webkit")!=-1&&!pt("Edge");function fa(){var e=A.document;return e?e.documentMode:void 0}var ts;t:{var br="",Nr=function(){var e=Jn();if(da)return/rv:([^\);]+)(\)|;)/.exec(e);if(ha)return/Edge\/([\d\.]+)/.exec(e);if(ae)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e);if(_h)return/WebKit\/(\S+)/.exec(e);if(gh)return/(?:Version)[ \/]?(\S+)/.exec(e)}();if(Nr&&(br=Nr?Nr[1]:""),ae){var Or=fa();if(Or!=null&&Or>parseFloat(br)){ts=String(Or);break t}}ts=br}var es;if(A.document&&ae){var zi=fa();es=zi||parseInt(ts,10)||void 0}else es=void 0;var yh=es;function je(e,t){if(it.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(da){t:{try{ks(t.nodeName);var s=!0;break t}catch{}s=!1}s||(t=null)}}else n=="mouseover"?t=e.fromElement:n=="mouseout"&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=e.clientX!==void 0?e.clientX:e.pageX,this.clientY=e.clientY!==void 0?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=typeof e.pointerType=="string"?e.pointerType:Eh[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&je.$.h.call(this)}}W(je,it);var Eh={2:"touch",3:"pen",4:"mouse"};je.prototype.h=function(){je.$.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var en="closure_listenable_"+(1e6*Math.random()|0),Th=0;function wh(e,t,n,r,s){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.la=s,this.key=++Th,this.fa=this.ia=!1}function Xn(e){e.fa=!0,e.listener=null,e.proxy=null,e.src=null,e.la=null}function xs(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function vh(e,t){for(const n in e)t.call(void 0,e[n],n,e)}function pa(e){const t={};for(const n in e)t[n]=e[n];return t}const Hi="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ma(e,t){let n,r;for(let s=1;s<arguments.length;s++){r=arguments[s];for(n in r)e[n]=r[n];for(let i=0;i<Hi.length;i++)n=Hi[i],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function Yn(e){this.src=e,this.g={},this.h=0}Yn.prototype.add=function(e,t,n,r,s){var i=e.toString();e=this.g[i],e||(e=this.g[i]=[],this.h++);var o=rs(e,t,r,s);return-1<o?(t=e[o],n||(t.ia=!1)):(t=new wh(t,this.src,i,!!r,s),t.ia=n,e.push(t)),t};function ns(e,t){var n=t.type;if(n in e.g){var r=e.g[n],s=la(r,t),i;(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(Xn(t),e.g[n].length==0&&(delete e.g[n],e.h--))}}function rs(e,t,n,r){for(var s=0;s<e.length;++s){var i=e[s];if(!i.fa&&i.listener==t&&i.capture==!!n&&i.la==r)return s}return-1}var Ms="closure_lm_"+(1e6*Math.random()|0),kr={};function ga(e,t,n,r,s){if(r&&r.once)return ya(e,t,n,r,s);if(Array.isArray(t)){for(var i=0;i<t.length;i++)ga(e,t[i],n,r,s);return null}return n=Us(n),e&&e[en]?e.O(t,n,tn(r)?!!r.capture:!!r,s):_a(e,t,n,!1,r,s)}function _a(e,t,n,r,s,i){if(!t)throw Error("Invalid event type");var o=tn(s)?!!s.capture:!!s,a=Fs(e);if(a||(e[Ms]=a=new Yn(e)),n=a.add(t,n,r,o,i),n.proxy)return n;if(r=Ih(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)ph||(s=o),s===void 0&&(s=!1),e.addEventListener(t.toString(),r,s);else if(e.attachEvent)e.attachEvent(Ta(t.toString()),r);else if(e.addListener&&e.removeListener)e.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function Ih(){function e(n){return t.call(e.src,e.listener,n)}const t=Ah;return e}function ya(e,t,n,r,s){if(Array.isArray(t)){for(var i=0;i<t.length;i++)ya(e,t[i],n,r,s);return null}return n=Us(n),e&&e[en]?e.P(t,n,tn(r)?!!r.capture:!!r,s):_a(e,t,n,!0,r,s)}function Ea(e,t,n,r,s){if(Array.isArray(t))for(var i=0;i<t.length;i++)Ea(e,t[i],n,r,s);else r=tn(r)?!!r.capture:!!r,n=Us(n),e&&e[en]?(e=e.i,t=String(t).toString(),t in e.g&&(i=e.g[t],n=rs(i,n,r,s),-1<n&&(Xn(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete e.g[t],e.h--)))):e&&(e=Fs(e))&&(t=e.g[t.toString()],e=-1,t&&(e=rs(t,n,r,s)),(n=-1<e?t[e]:null)&&Ls(n))}function Ls(e){if(typeof e!="number"&&e&&!e.fa){var t=e.src;if(t&&t[en])ns(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(Ta(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=Fs(t))?(ns(n,e),n.h==0&&(n.src=null,t[Ms]=null)):Xn(e)}}}function Ta(e){return e in kr?kr[e]:kr[e]="on"+e}function Ah(e,t){if(e.fa)e=!0;else{t=new je(t,this);var n=e.listener,r=e.la||e.src;e.ia&&Ls(e),e=n.call(r,t)}return e}function Fs(e){return e=e[Ms],e instanceof Yn?e:null}var xr="__closure_events_fn_"+(1e9*Math.random()>>>0);function Us(e){return typeof e=="function"?e:(e[xr]||(e[xr]=function(t){return e.handleEvent(t)}),e[xr])}function Q(){xt.call(this),this.i=new Yn(this),this.S=this,this.J=null}W(Q,xt);Q.prototype[en]=!0;Q.prototype.removeEventListener=function(e,t,n,r){Ea(this,e,t,n,r)};function Y(e,t){var n,r=e.J;if(r)for(n=[];r;r=r.J)n.push(r);if(e=e.S,r=t.type||t,typeof t=="string")t=new it(t,e);else if(t instanceof it)t.target=t.target||e;else{var s=t;t=new it(r,e),ma(t,s)}if(s=!0,n)for(var i=n.length-1;0<=i;i--){var o=t.g=n[i];s=Tn(o,r,!0,t)&&s}if(o=t.g=e,s=Tn(o,r,!0,t)&&s,s=Tn(o,r,!1,t)&&s,n)for(i=0;i<n.length;i++)o=t.g=n[i],s=Tn(o,r,!1,t)&&s}Q.prototype.N=function(){if(Q.$.N.call(this),this.i){var e=this.i,t;for(t in e.g){for(var n=e.g[t],r=0;r<n.length;r++)Xn(n[r]);delete e.g[t],e.h--}}this.J=null};Q.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)};Q.prototype.P=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};function Tn(e,t,n,r){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var s=!0,i=0;i<t.length;++i){var o=t[i];if(o&&!o.fa&&o.capture==n){var a=o.listener,u=o.la||o.src;o.ia&&ns(e.i,o),s=a.call(u,r)!==!1&&s}}return s&&!r.defaultPrevented}var Bs=A.JSON.stringify;class Rh{constructor(t,n){this.i=t,this.j=n,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}function Sh(){var e=qs;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class Ch{constructor(){this.h=this.g=null}add(t,n){const r=wa.get();r.set(t,n),this.h?this.h.next=r:this.g=r,this.h=r}}var wa=new Rh(()=>new Ph,e=>e.reset());class Ph{constructor(){this.next=this.g=this.h=null}set(t,n){this.h=t,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function Vh(e){var t=1;e=e.split(":");const n=[];for(;0<t&&e.length;)n.push(e.shift()),t--;return e.length&&n.push(e.join(":")),n}function Dh(e){A.setTimeout(()=>{throw e},0)}let $e,ze=!1,qs=new Ch,va=()=>{const e=A.Promise.resolve(void 0);$e=()=>{e.then(bh)}};var bh=()=>{for(var e;e=Sh();){try{e.h.call(e.g)}catch(n){Dh(n)}var t=wa;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}ze=!1};function Zn(e,t){Q.call(this),this.h=e||1,this.g=t||A,this.j=st(this.qb,this),this.l=Date.now()}W(Zn,Q);E=Zn.prototype;E.ga=!1;E.T=null;E.qb=function(){if(this.ga){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-e):(this.T&&(this.g.clearTimeout(this.T),this.T=null),Y(this,"tick"),this.ga&&(js(this),this.start()))}};E.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function js(e){e.ga=!1,e.T&&(e.g.clearTimeout(e.T),e.T=null)}E.N=function(){Zn.$.N.call(this),js(this),delete this.g};function $s(e,t,n){if(typeof e=="function")n&&(e=st(e,n));else if(e&&typeof e.handleEvent=="function")e=st(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:A.setTimeout(e,t||0)}function Ia(e){e.g=$s(()=>{e.g=null,e.i&&(e.i=!1,Ia(e))},e.j);const t=e.h;e.h=null,e.m.apply(null,t)}class Nh extends xt{constructor(t,n){super(),this.m=t,this.j=n,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:Ia(this)}N(){super.N(),this.g&&(A.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function He(e){xt.call(this),this.h=e,this.g={}}W(He,xt);var Gi=[];function Aa(e,t,n,r){Array.isArray(n)||(n&&(Gi[0]=n.toString()),n=Gi);for(var s=0;s<n.length;s++){var i=ga(t,n[s],r||e.handleEvent,!1,e.h||e);if(!i)break;e.g[i.key]=i}}function Ra(e){xs(e.g,function(t,n){this.g.hasOwnProperty(n)&&Ls(t)},e),e.g={}}He.prototype.N=function(){He.$.N.call(this),Ra(this)};He.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function tr(){this.g=!0}tr.prototype.Ea=function(){this.g=!1};function Oh(e,t,n,r,s,i){e.info(function(){if(e.g)if(i)for(var o="",a=i.split("&"),u=0;u<a.length;u++){var c=a[u].split("=");if(1<c.length){var l=c[0];c=c[1];var h=l.split("_");o=2<=h.length&&h[1]=="type"?o+(l+"="+c+"&"):o+(l+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+t+`
`+n+`
`+o})}function kh(e,t,n,r,s,i,o){e.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+t+`
`+n+`
`+i+" "+o})}function Zt(e,t,n,r){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+Mh(e,n)+(r?" "+r:"")})}function xh(e,t){e.info(function(){return"TIMEOUT: "+t})}tr.prototype.info=function(){};function Mh(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var i=s[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return Bs(n)}catch{return t}}var Kt={},Ki=null;function er(){return Ki=Ki||new Q}Kt.Ta="serverreachability";function Sa(e){it.call(this,Kt.Ta,e)}W(Sa,it);function Ge(e){const t=er();Y(t,new Sa(t))}Kt.STAT_EVENT="statevent";function Ca(e,t){it.call(this,Kt.STAT_EVENT,e),this.stat=t}W(Ca,it);function at(e){const t=er();Y(t,new Ca(t,e))}Kt.Ua="timingevent";function Pa(e,t){it.call(this,Kt.Ua,e),this.size=t}W(Pa,it);function nn(e,t){if(typeof e!="function")throw Error("Fn must not be null and must be a function");return A.setTimeout(function(){e()},t)}var nr={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},Va={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function zs(){}zs.prototype.h=null;function Qi(e){return e.h||(e.h=e.i())}function Da(){}var rn={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Hs(){it.call(this,"d")}W(Hs,it);function Gs(){it.call(this,"c")}W(Gs,it);var ss;function rr(){}W(rr,zs);rr.prototype.g=function(){return new XMLHttpRequest};rr.prototype.i=function(){return{}};ss=new rr;function sn(e,t,n,r){this.l=e,this.j=t,this.m=n,this.W=r||1,this.U=new He(this),this.P=Lh,e=Zr?125:void 0,this.V=new Zn(e),this.I=null,this.i=!1,this.u=this.B=this.A=this.L=this.G=this.Y=this.C=null,this.F=[],this.g=null,this.o=0,this.s=this.v=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new ba}function ba(){this.i=null,this.g="",this.h=!1}var Lh=45e3,Na={},is={};E=sn.prototype;E.setTimeout=function(e){this.P=e};function os(e,t,n){e.L=1,e.A=ir(Rt(t)),e.u=n,e.S=!0,Oa(e,null)}function Oa(e,t){e.G=Date.now(),on(e),e.B=Rt(e.A);var n=e.B,r=e.W;Array.isArray(r)||(r=[String(r)]),qa(n.i,"t",r),e.o=0,n=e.l.J,e.h=new ba,e.g=uu(e.l,n?t:null,!e.u),0<e.O&&(e.M=new Nh(st(e.Pa,e,e.g),e.O)),Aa(e.U,e.g,"readystatechange",e.nb),t=e.I?pa(e.I):{},e.u?(e.v||(e.v="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ha(e.B,e.v,e.u,t)):(e.v="GET",e.g.ha(e.B,e.v,null,t)),Ge(),Oh(e.j,e.v,e.B,e.m,e.W,e.u)}E.nb=function(e){e=e.target;const t=this.M;t&&gt(e)==3?t.l():this.Pa(e)};E.Pa=function(e){try{if(e==this.g)t:{const l=gt(this.g);var t=this.g.Ia();const h=this.g.da();if(!(3>l)&&(l!=3||Zr||this.g&&(this.h.h||this.g.ja()||Yi(this.g)))){this.J||l!=4||t==7||(t==8||0>=h?Ge(3):Ge(2)),sr(this);var n=this.g.da();this.ca=n;e:if(ka(this)){var r=Yi(this.g);e="";var s=r.length,i=gt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ft(this),Oe(this);var o="";break e}this.h.i=new A.TextDecoder}for(t=0;t<s;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:i&&t==s-1});r.length=0,this.h.g+=e,this.o=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,kh(this.j,this.v,this.B,this.m,this.W,l,n),this.i){if(this.aa&&!this.K){e:{if(this.g){var a,u=this.g;if((a=u.g?u.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!qe(a)){var c=a;break e}}c=null}if(n=c)Zt(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,as(this,n);else{this.i=!1,this.s=3,at(12),Ft(this),Oe(this);break t}}this.S?(xa(this,l,o),Zr&&this.i&&l==3&&(Aa(this.U,this.V,"tick",this.mb),this.V.start())):(Zt(this.j,this.m,o,null),as(this,o)),l==4&&Ft(this),this.i&&!this.J&&(l==4?su(this.l,this):(this.i=!1,on(this)))}else sd(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.s=3,at(12)):(this.s=0,at(13)),Ft(this),Oe(this)}}}catch{}finally{}};function ka(e){return e.g?e.v=="GET"&&e.L!=2&&e.l.Ha:!1}function xa(e,t,n){let r=!0,s;for(;!e.J&&e.o<n.length;)if(s=Fh(e,n),s==is){t==4&&(e.s=4,at(14),r=!1),Zt(e.j,e.m,null,"[Incomplete Response]");break}else if(s==Na){e.s=4,at(15),Zt(e.j,e.m,n,"[Invalid Chunk]"),r=!1;break}else Zt(e.j,e.m,s,null),as(e,s);ka(e)&&e.o!=0&&(e.h.g=e.h.g.slice(e.o),e.o=0),t!=4||n.length!=0||e.h.h||(e.s=1,at(16),r=!1),e.i=e.i&&r,r?0<n.length&&!e.ba&&(e.ba=!0,t=e.l,t.g==e&&t.ca&&!t.M&&(t.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),Ys(t),t.M=!0,at(11))):(Zt(e.j,e.m,n,"[Invalid Chunked Response]"),Ft(e),Oe(e))}E.mb=function(){if(this.g){var e=gt(this.g),t=this.g.ja();this.o<t.length&&(sr(this),xa(this,e,t),this.i&&e!=4&&on(this))}};function Fh(e,t){var n=e.o,r=t.indexOf(`
`,n);return r==-1?is:(n=Number(t.substring(n,r)),isNaN(n)?Na:(r+=1,r+n>t.length?is:(t=t.slice(r,r+n),e.o=r+n,t)))}E.cancel=function(){this.J=!0,Ft(this)};function on(e){e.Y=Date.now()+e.P,Ma(e,e.P)}function Ma(e,t){if(e.C!=null)throw Error("WatchDog timer not null");e.C=nn(st(e.lb,e),t)}function sr(e){e.C&&(A.clearTimeout(e.C),e.C=null)}E.lb=function(){this.C=null;const e=Date.now();0<=e-this.Y?(xh(this.j,this.B),this.L!=2&&(Ge(),at(17)),Ft(this),this.s=2,Oe(this)):Ma(this,this.Y-e)};function Oe(e){e.l.H==0||e.J||su(e.l,e)}function Ft(e){sr(e);var t=e.M;t&&typeof t.sa=="function"&&t.sa(),e.M=null,js(e.V),Ra(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.sa())}function as(e,t){try{var n=e.l;if(n.H!=0&&(n.g==e||us(n.i,e))){if(!e.K&&us(n.i,e)&&n.H==3){try{var r=n.Ja.g.parse(t)}catch{r=null}if(Array.isArray(r)&&r.length==3){var s=r;if(s[0]==0){t:if(!n.u){if(n.g)if(n.g.G+3e3<e.G)Un(n),cr(n);else break t;Xs(n),at(18)}}else n.Fa=s[1],0<n.Fa-n.V&&37500>s[2]&&n.G&&n.A==0&&!n.v&&(n.v=nn(st(n.ib,n),6e3));if(1>=za(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else Ut(n,11)}else if((e.K||n.g==e)&&Un(n),!qe(t))for(s=n.Ja.g.parse(t),t=0;t<s.length;t++){let c=s[t];if(n.V=c[0],c=c[1],n.H==2)if(c[0]=="c"){n.K=c[1],n.pa=c[2];const l=c[3];l!=null&&(n.ra=l,n.l.info("VER="+n.ra));const h=c[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const f=c[5];f!=null&&typeof f=="number"&&0<f&&(r=1.5*f,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const m=e.g;if(m){const _=m.g?m.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(_){var i=r.i;i.g||_.indexOf("spdy")==-1&&_.indexOf("quic")==-1&&_.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(Ks(i,i.h),i.h=null))}if(r.F){const y=m.g?m.g.getResponseHeader("X-HTTP-Session-Id"):null;y&&(r.Da=y,x(r.I,r.F,y))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-e.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=e;if(r.wa=au(r,r.J?r.pa:null,r.Y),o.K){Ha(r.i,o);var a=o,u=r.L;u&&a.setTimeout(u),a.C&&(sr(a),on(a)),r.g=o}else nu(r);0<n.j.length&&lr(n)}else c[0]!="stop"&&c[0]!="close"||Ut(n,7);else n.H==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?Ut(n,7):Js(n):c[0]!="noop"&&n.h&&n.h.Aa(c),n.A=0)}}Ge(4)}catch{}}function Uh(e){if(e.Z&&typeof e.Z=="function")return e.Z();if(typeof Map<"u"&&e instanceof Map||typeof Set<"u"&&e instanceof Set)return Array.from(e.values());if(typeof e=="string")return e.split("");if(Wn(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}t=[],n=0;for(r in e)t[n++]=e[r];return t}function Bh(e){if(e.ta&&typeof e.ta=="function")return e.ta();if(!e.Z||typeof e.Z!="function"){if(typeof Map<"u"&&e instanceof Map)return Array.from(e.keys());if(!(typeof Set<"u"&&e instanceof Set)){if(Wn(e)||typeof e=="string"){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const r in e)t[n++]=r;return t}}}function La(e,t){if(e.forEach&&typeof e.forEach=="function")e.forEach(t,void 0);else if(Wn(e)||typeof e=="string")Array.prototype.forEach.call(e,t,void 0);else for(var n=Bh(e),r=Uh(e),s=r.length,i=0;i<s;i++)t.call(void 0,r[i],n&&n[i],e)}var Fa=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function qh(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),s=null;if(0<=r){var i=e[n].substring(0,r);s=e[n].substring(r+1)}else i=e[n];t(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function qt(e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof qt){this.h=e.h,Ln(this,e.j),this.s=e.s,this.g=e.g,Fn(this,e.m),this.l=e.l;var t=e.i,n=new Ke;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),Wi(this,n),this.o=e.o}else e&&(t=String(e).match(Fa))?(this.h=!1,Ln(this,t[1]||"",!0),this.s=Pe(t[2]||""),this.g=Pe(t[3]||"",!0),Fn(this,t[4]),this.l=Pe(t[5]||"",!0),Wi(this,t[6]||"",!0),this.o=Pe(t[7]||"")):(this.h=!1,this.i=new Ke(null,this.h))}qt.prototype.toString=function(){var e=[],t=this.j;t&&e.push(Ve(t,Ji,!0),":");var n=this.g;return(n||t=="file")&&(e.push("//"),(t=this.s)&&e.push(Ve(t,Ji,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&e.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&e.push("/"),e.push(Ve(n,n.charAt(0)=="/"?zh:$h,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",Ve(n,Gh)),e.join("")};function Rt(e){return new qt(e)}function Ln(e,t,n){e.j=n?Pe(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function Fn(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function Wi(e,t,n){t instanceof Ke?(e.i=t,Kh(e.i,e.h)):(n||(t=Ve(t,Hh)),e.i=new Ke(t,e.h))}function x(e,t,n){e.i.set(t,n)}function ir(e){return x(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function Pe(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function Ve(e,t,n){return typeof e=="string"?(e=encodeURI(e).replace(t,jh),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function jh(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(e&15).toString(16)}var Ji=/[#\/\?@]/g,$h=/[#\?:]/g,zh=/[#\?]/g,Hh=/[#\?@]/g,Gh=/#/g;function Ke(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function Mt(e){e.g||(e.g=new Map,e.h=0,e.i&&qh(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}E=Ke.prototype;E.add=function(e,t){Mt(this),this.i=null,e=_e(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this};function Ua(e,t){Mt(e),t=_e(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function Ba(e,t){return Mt(e),t=_e(e,t),e.g.has(t)}E.forEach=function(e,t){Mt(this),this.g.forEach(function(n,r){n.forEach(function(s){e.call(t,s,r,this)},this)},this)};E.ta=function(){Mt(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let r=0;r<t.length;r++){const s=e[r];for(let i=0;i<s.length;i++)n.push(t[r])}return n};E.Z=function(e){Mt(this);let t=[];if(typeof e=="string")Ba(this,e)&&(t=t.concat(this.g.get(_e(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t};E.set=function(e,t){return Mt(this),this.i=null,e=_e(this,e),Ba(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this};E.get=function(e,t){return e?(e=this.Z(e),0<e.length?String(e[0]):t):t};function qa(e,t,n){Ua(e,t),0<n.length&&(e.i=null,e.g.set(_e(e,t),Os(n)),e.h+=n.length)}E.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var r=t[n];const i=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var s=i;o[r]!==""&&(s+="="+encodeURIComponent(String(o[r]))),e.push(s)}}return this.i=e.join("&")};function _e(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function Kh(e,t){t&&!e.j&&(Mt(e),e.i=null,e.g.forEach(function(n,r){var s=r.toLowerCase();r!=s&&(Ua(this,r),qa(this,s,n))},e)),e.j=t}var Qh=class{constructor(e,t){this.g=e,this.map=t}};function ja(e){this.l=e||Wh,A.PerformanceNavigationTiming?(e=A.performance.getEntriesByType("navigation"),e=0<e.length&&(e[0].nextHopProtocol=="hq"||e[0].nextHopProtocol=="h2")):e=!!(A.g&&A.g.Ka&&A.g.Ka()&&A.g.Ka().dc),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Wh=10;function $a(e){return e.h?!0:e.g?e.g.size>=e.j:!1}function za(e){return e.h?1:e.g?e.g.size:0}function us(e,t){return e.h?e.h==t:e.g?e.g.has(t):!1}function Ks(e,t){e.g?e.g.add(t):e.h=t}function Ha(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}ja.prototype.cancel=function(){if(this.i=Ga(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const e of this.g.values())e.cancel();this.g.clear()}};function Ga(e){if(e.h!=null)return e.i.concat(e.h.F);if(e.g!=null&&e.g.size!==0){let t=e.i;for(const n of e.g.values())t=t.concat(n.F);return t}return Os(e.i)}var Jh=class{stringify(e){return A.JSON.stringify(e,void 0)}parse(e){return A.JSON.parse(e,void 0)}};function Xh(){this.g=new Jh}function Yh(e,t,n){const r=n||"";try{La(e,function(s,i){let o=s;tn(s)&&(o=Bs(s)),t.push(r+i+"="+encodeURIComponent(o))})}catch(s){throw t.push(r+"type="+encodeURIComponent("_badmap")),s}}function Zh(e,t){const n=new tr;if(A.Image){const r=new Image;r.onload=En(wn,n,r,"TestLoadImage: loaded",!0,t),r.onerror=En(wn,n,r,"TestLoadImage: error",!1,t),r.onabort=En(wn,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=En(wn,n,r,"TestLoadImage: timeout",!1,t),A.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=e}else t(!1)}function wn(e,t,n,r,s){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,s(r)}catch{}}function or(e){this.l=e.ec||null,this.j=e.ob||!1}W(or,zs);or.prototype.g=function(){return new ar(this.l,this.j)};or.prototype.i=function(e){return function(){return e}}({});function ar(e,t){Q.call(this),this.F=e,this.u=t,this.m=void 0,this.readyState=Qs,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}W(ar,Q);var Qs=0;E=ar.prototype;E.open=function(e,t){if(this.readyState!=Qs)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,Qe(this)};E.send=function(e){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.F||A).fetch(new Request(this.B,t)).then(this.$a.bind(this),this.ka.bind(this))};E.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,an(this)),this.readyState=Qs};E.$a=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,Qe(this)),this.g&&(this.readyState=3,Qe(this),this.g)))if(this.responseType==="arraybuffer")e.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof A.ReadableStream<"u"&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Ka(this)}else e.text().then(this.Za.bind(this),this.ka.bind(this))};function Ka(e){e.j.read().then(e.Xa.bind(e)).catch(e.ka.bind(e))}E.Xa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?an(this):Qe(this),this.readyState==3&&Ka(this)}};E.Za=function(e){this.g&&(this.response=this.responseText=e,an(this))};E.Ya=function(e){this.g&&(this.response=e,an(this))};E.ka=function(){this.g&&an(this)};function an(e){e.readyState=4,e.l=null,e.j=null,e.A=null,Qe(e)}E.setRequestHeader=function(e,t){this.v.append(e,t)};E.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""};E.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join(`\r
`)};function Qe(e){e.onreadystatechange&&e.onreadystatechange.call(e)}Object.defineProperty(ar.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(e){this.m=e?"include":"same-origin"}});var td=A.JSON.parse;function L(e){Q.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Qa,this.L=this.M=!1}W(L,Q);var Qa="",ed=/^https?$/i,nd=["POST","PUT"];E=L.prototype;E.Oa=function(e){this.M=e};E.ha=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+e);t=t?t.toUpperCase():"GET",this.I=e,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():ss.g(),this.C=this.u?Qi(this.u):Qi(ss),this.g.onreadystatechange=st(this.La,this);try{this.G=!0,this.g.open(t,String(e),!0),this.G=!1}catch(i){Xi(this,i);return}if(e=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var s in r)n.set(s,r[s]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const i of r.keys())n.set(i,r.get(i));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),s=A.FormData&&e instanceof A.FormData,!(0<=la(nd,t))||r||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Xa(this),0<this.B&&((this.L=rd(this.g))?(this.g.timeout=this.B,this.g.ontimeout=st(this.ua,this)):this.A=$s(this.ua,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(i){Xi(this,i)}};function rd(e){return ae&&typeof e.timeout=="number"&&e.ontimeout!==void 0}E.ua=function(){typeof Ns<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Y(this,"timeout"),this.abort(8))};function Xi(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,Wa(e),ur(e)}function Wa(e){e.F||(e.F=!0,Y(e,"complete"),Y(e,"error"))}E.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,Y(this,"complete"),Y(this,"abort"),ur(this))};E.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),ur(this,!0)),L.$.N.call(this)};E.La=function(){this.s||(this.G||this.v||this.l?Ja(this):this.kb())};E.kb=function(){Ja(this)};function Ja(e){if(e.h&&typeof Ns<"u"&&(!e.C[1]||gt(e)!=4||e.da()!=2)){if(e.v&&gt(e)==4)$s(e.La,0,e);else if(Y(e,"readystatechange"),gt(e)==4){e.h=!1;try{const o=e.da();t:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break t;default:t=!1}var n;if(!(n=t)){var r;if(r=o===0){var s=String(e.I).match(Fa)[1]||null;!s&&A.self&&A.self.location&&(s=A.self.location.protocol.slice(0,-1)),r=!ed.test(s?s.toLowerCase():"")}n=r}if(n)Y(e,"complete"),Y(e,"success");else{e.m=6;try{var i=2<gt(e)?e.g.statusText:""}catch{i=""}e.j=i+" ["+e.da()+"]",Wa(e)}}finally{ur(e)}}}}function ur(e,t){if(e.g){Xa(e);const n=e.g,r=e.C[0]?()=>{}:null;e.g=null,e.C=null,t||Y(e,"ready");try{n.onreadystatechange=r}catch{}}}function Xa(e){e.g&&e.L&&(e.g.ontimeout=null),e.A&&(A.clearTimeout(e.A),e.A=null)}E.isActive=function(){return!!this.g};function gt(e){return e.g?e.g.readyState:0}E.da=function(){try{return 2<gt(this)?this.g.status:-1}catch{return-1}};E.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};E.Wa=function(e){if(this.g){var t=this.g.responseText;return e&&t.indexOf(e)==0&&(t=t.substring(e.length)),td(t)}};function Yi(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.K){case Qa:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch{return null}}function sd(e){const t={};e=(e.g&&2<=gt(e)&&e.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<e.length;r++){if(qe(e[r]))continue;var n=Vh(e[r]);const s=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const i=t[s]||[];t[s]=i,i.push(n)}vh(t,function(r){return r.join(", ")})}E.Ia=function(){return this.m};E.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Ya(e){let t="";return xs(e,function(n,r){t+=r,t+=":",t+=n,t+=`\r
`}),t}function Ws(e,t,n){t:{for(r in n){var r=!1;break t}r=!0}r||(n=Ya(n),typeof e=="string"?n!=null&&encodeURIComponent(String(n)):x(e,t,n))}function Ae(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function Za(e){this.Ga=0,this.j=[],this.l=new tr,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Ae("failFast",!1,e),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Ae("baseRetryDelayMs",5e3,e),this.hb=Ae("retryDelaySeedMs",1e4,e),this.eb=Ae("forwardChannelMaxRetries",2,e),this.xa=Ae("forwardChannelRequestTimeoutMs",2e4,e),this.va=e&&e.xmlHttpFactory||void 0,this.Ha=e&&e.useFetchStreams||!1,this.L=void 0,this.J=e&&e.supportsCrossDomainXhr||!1,this.K="",this.i=new ja(e&&e.concurrentRequestLimit),this.Ja=new Xh,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=e&&e.bc||!1,e&&e.Ea&&this.l.Ea(),e&&e.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&e&&e.detectBufferingProxy||!1,this.qa=void 0,e&&e.longPollingTimeout&&0<e.longPollingTimeout&&(this.qa=e.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}E=Za.prototype;E.ra=8;E.H=1;function Js(e){if(tu(e),e.H==3){var t=e.W++,n=Rt(e.I);if(x(n,"SID",e.K),x(n,"RID",t),x(n,"TYPE","terminate"),un(e,n),t=new sn(e,e.l,t),t.L=2,t.A=ir(Rt(n)),n=!1,A.navigator&&A.navigator.sendBeacon)try{n=A.navigator.sendBeacon(t.A.toString(),"")}catch{}!n&&A.Image&&(new Image().src=t.A,n=!0),n||(t.g=uu(t.l,null),t.g.ha(t.A)),t.G=Date.now(),on(t)}ou(e)}function cr(e){e.g&&(Ys(e),e.g.cancel(),e.g=null)}function tu(e){cr(e),e.u&&(A.clearTimeout(e.u),e.u=null),Un(e),e.i.cancel(),e.m&&(typeof e.m=="number"&&A.clearTimeout(e.m),e.m=null)}function lr(e){if(!$a(e.i)&&!e.m){e.m=!0;var t=e.Na;$e||va(),ze||($e(),ze=!0),qs.add(t,e),e.C=0}}function id(e,t){return za(e.i)>=e.i.j-(e.m?1:0)?!1:e.m?(e.j=t.F.concat(e.j),!0):e.H==1||e.H==2||e.C>=(e.cb?0:e.eb)?!1:(e.m=nn(st(e.Na,e,t),iu(e,e.C)),e.C++,!0)}E.Na=function(e){if(this.m)if(this.m=null,this.H==1){if(!e){this.W=Math.floor(1e5*Math.random()),e=this.W++;const s=new sn(this,this.l,e);let i=this.s;if(this.U&&(i?(i=pa(i),ma(i,this.U)):i=this.U),this.o!==null||this.O||(s.I=i,i=null),this.P)t:{for(var t=0,n=0;n<this.j.length;n++){e:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break e}r=void 0}if(r===void 0)break;if(t+=r,4096<t){t=n;break t}if(t===4096||n===this.j.length-1){t=n+1;break t}}t=1e3}else t=1e3;t=eu(this,s,t),n=Rt(this.I),x(n,"RID",e),x(n,"CVER",22),this.F&&x(n,"X-HTTP-Session-Id",this.F),un(this,n),i&&(this.O?t="headers="+encodeURIComponent(String(Ya(i)))+"&"+t:this.o&&Ws(n,this.o,i)),Ks(this.i,s),this.bb&&x(n,"TYPE","init"),this.P?(x(n,"$req",t),x(n,"SID","null"),s.aa=!0,os(s,n,null)):os(s,n,t),this.H=2}}else this.H==3&&(e?Zi(this,e):this.j.length==0||$a(this.i)||Zi(this))};function Zi(e,t){var n;t?n=t.m:n=e.W++;const r=Rt(e.I);x(r,"SID",e.K),x(r,"RID",n),x(r,"AID",e.V),un(e,r),e.o&&e.s&&Ws(r,e.o,e.s),n=new sn(e,e.l,n,e.C+1),e.o===null&&(n.I=e.s),t&&(e.j=t.F.concat(e.j)),t=eu(e,n,1e3),n.setTimeout(Math.round(.5*e.xa)+Math.round(.5*e.xa*Math.random())),Ks(e.i,n),os(n,r,t)}function un(e,t){e.na&&xs(e.na,function(n,r){x(t,r,n)}),e.h&&La({},function(n,r){x(t,r,n)})}function eu(e,t,n){n=Math.min(e.j.length,n);var r=e.h?st(e.h.Va,e.h,e):null;t:{var s=e.j;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=s[0].g,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let u=0;u<n;u++){let c=s[u].g;const l=s[u].map;if(c-=i,0>c)i=Math.max(0,s[u].g-100),a=!1;else try{Yh(l,o,"req"+c+"_")}catch{r&&r(l)}}if(a){r=o.join("&");break t}}}return e=e.j.splice(0,n),t.F=e,r}function nu(e){if(!e.g&&!e.u){e.ba=1;var t=e.Ma;$e||va(),ze||($e(),ze=!0),qs.add(t,e),e.A=0}}function Xs(e){return e.g||e.u||3<=e.A?!1:(e.ba++,e.u=nn(st(e.Ma,e),iu(e,e.A)),e.A++,!0)}E.Ma=function(){if(this.u=null,ru(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var e=2*this.S;this.l.info("BP detection timer enabled: "+e),this.B=nn(st(this.jb,this),e)}};E.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,at(10),cr(this),ru(this))};function Ys(e){e.B!=null&&(A.clearTimeout(e.B),e.B=null)}function ru(e){e.g=new sn(e,e.l,"rpc",e.ba),e.o===null&&(e.g.I=e.s),e.g.O=0;var t=Rt(e.wa);x(t,"RID","rpc"),x(t,"SID",e.K),x(t,"AID",e.V),x(t,"CI",e.G?"0":"1"),!e.G&&e.qa&&x(t,"TO",e.qa),x(t,"TYPE","xmlhttp"),un(e,t),e.o&&e.s&&Ws(t,e.o,e.s),e.L&&e.g.setTimeout(e.L);var n=e.g;e=e.pa,n.L=1,n.A=ir(Rt(t)),n.u=null,n.S=!0,Oa(n,e)}E.ib=function(){this.v!=null&&(this.v=null,cr(this),Xs(this),at(19))};function Un(e){e.v!=null&&(A.clearTimeout(e.v),e.v=null)}function su(e,t){var n=null;if(e.g==t){Un(e),Ys(e),e.g=null;var r=2}else if(us(e.i,t))n=t.F,Ha(e.i,t),r=1;else return;if(e.H!=0){if(t.i)if(r==1){n=t.u?t.u.length:0,t=Date.now()-t.G;var s=e.C;r=er(),Y(r,new Pa(r,n)),lr(e)}else nu(e);else if(s=t.s,s==3||s==0&&0<t.ca||!(r==1&&id(e,t)||r==2&&Xs(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),s){case 1:Ut(e,5);break;case 4:Ut(e,10);break;case 3:Ut(e,6);break;default:Ut(e,2)}}}function iu(e,t){let n=e.ab+Math.floor(Math.random()*e.hb);return e.isActive()||(n*=2),n*t}function Ut(e,t){if(e.l.info("Error code "+t),t==2){var n=null;e.h&&(n=null);var r=st(e.pb,e);n||(n=new qt("//www.google.com/images/cleardot.gif"),A.location&&A.location.protocol=="http"||Ln(n,"https"),ir(n)),Zh(n.toString(),r)}else at(2);e.H=0,e.h&&e.h.za(t),ou(e),tu(e)}E.pb=function(e){e?(this.l.info("Successfully pinged google.com"),at(2)):(this.l.info("Failed to ping google.com"),at(1))};function ou(e){if(e.H=0,e.ma=[],e.h){const t=Ga(e.i);(t.length!=0||e.j.length!=0)&&($i(e.ma,t),$i(e.ma,e.j),e.i.i.length=0,Os(e.j),e.j.length=0),e.h.ya()}}function au(e,t,n){var r=n instanceof qt?Rt(n):new qt(n);if(r.g!="")t&&(r.g=t+"."+r.g),Fn(r,r.m);else{var s=A.location;r=s.protocol,t=t?t+"."+s.hostname:s.hostname,s=+s.port;var i=new qt(null);r&&Ln(i,r),t&&(i.g=t),s&&Fn(i,s),n&&(i.l=n),r=i}return n=e.F,t=e.Da,n&&t&&x(r,n,t),x(r,"VER",e.ra),un(e,r),r}function uu(e,t,n){if(t&&!e.J)throw Error("Can't create secondary domain capable XhrIo object.");return t=e.Ha&&!e.va?new L(new or({ob:n})):new L(e.va),t.Oa(e.J),t}E.isActive=function(){return!!this.h&&this.h.isActive(this)};function cu(){}E=cu.prototype;E.Ba=function(){};E.Aa=function(){};E.za=function(){};E.ya=function(){};E.isActive=function(){return!0};E.Va=function(){};function Bn(){if(ae&&!(10<=Number(yh)))throw Error("Environmental error: no available transport.")}Bn.prototype.g=function(e,t){return new ut(e,t)};function ut(e,t){Q.call(this),this.g=new Za(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.Ca&&(e?e["X-WebChannel-Client-Profile"]=t.Ca:e={"X-WebChannel-Client-Profile":t.Ca}),this.g.U=e,(e=t&&t.cc)&&!qe(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!qe(t)&&(this.g.F=t,e=this.h,e!==null&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new ye(this)}W(ut,Q);ut.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var e=this.g,t=this.l,n=this.h||void 0;at(0),e.Y=t,e.na=n||{},e.G=e.aa,e.I=au(e,null,e.Y),lr(e)};ut.prototype.close=function(){Js(this.g)};ut.prototype.u=function(e){var t=this.g;if(typeof e=="string"){var n={};n.__data__=e,e=n}else this.v&&(n={},n.__data__=Bs(e),e=n);t.j.push(new Qh(t.fb++,e)),t.H==3&&lr(t)};ut.prototype.N=function(){this.g.h=null,delete this.j,Js(this.g),delete this.g,ut.$.N.call(this)};function lu(e){Hs.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var t=e.__sm__;if(t){t:{for(const n in t){e=n;break t}e=void 0}(this.i=e)&&(e=this.i,t=t!==null&&e in t?t[e]:void 0),this.data=t}else this.data=e}W(lu,Hs);function hu(){Gs.call(this),this.status=1}W(hu,Gs);function ye(e){this.g=e}W(ye,cu);ye.prototype.Ba=function(){Y(this.g,"a")};ye.prototype.Aa=function(e){Y(this.g,new lu(e))};ye.prototype.za=function(e){Y(this.g,new hu)};ye.prototype.ya=function(){Y(this.g,"b")};function od(){this.blockSize=-1}function dt(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}W(dt,od);dt.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Mr(e,t,n){n||(n=0);var r=Array(16);if(typeof t=="string")for(var s=0;16>s;++s)r[s]=t.charCodeAt(n++)|t.charCodeAt(n++)<<8|t.charCodeAt(n++)<<16|t.charCodeAt(n++)<<24;else for(s=0;16>s;++s)r[s]=t[n++]|t[n++]<<8|t[n++]<<16|t[n++]<<24;t=e.g[0],n=e.g[1],s=e.g[2];var i=e.g[3],o=t+(i^n&(s^i))+r[0]+3614090360&4294967295;t=n+(o<<7&4294967295|o>>>25),o=i+(s^t&(n^s))+r[1]+3905402710&4294967295,i=t+(o<<12&4294967295|o>>>20),o=s+(n^i&(t^n))+r[2]+606105819&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(t^s&(i^t))+r[3]+3250441966&4294967295,n=s+(o<<22&4294967295|o>>>10),o=t+(i^n&(s^i))+r[4]+4118548399&4294967295,t=n+(o<<7&4294967295|o>>>25),o=i+(s^t&(n^s))+r[5]+1200080426&4294967295,i=t+(o<<12&4294967295|o>>>20),o=s+(n^i&(t^n))+r[6]+2821735955&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(t^s&(i^t))+r[7]+4249261313&4294967295,n=s+(o<<22&4294967295|o>>>10),o=t+(i^n&(s^i))+r[8]+1770035416&4294967295,t=n+(o<<7&4294967295|o>>>25),o=i+(s^t&(n^s))+r[9]+2336552879&4294967295,i=t+(o<<12&4294967295|o>>>20),o=s+(n^i&(t^n))+r[10]+4294925233&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(t^s&(i^t))+r[11]+2304563134&4294967295,n=s+(o<<22&4294967295|o>>>10),o=t+(i^n&(s^i))+r[12]+1804603682&4294967295,t=n+(o<<7&4294967295|o>>>25),o=i+(s^t&(n^s))+r[13]+4254626195&4294967295,i=t+(o<<12&4294967295|o>>>20),o=s+(n^i&(t^n))+r[14]+2792965006&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(t^s&(i^t))+r[15]+1236535329&4294967295,n=s+(o<<22&4294967295|o>>>10),o=t+(s^i&(n^s))+r[1]+4129170786&4294967295,t=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(t^n))+r[6]+3225465664&4294967295,i=t+(o<<9&4294967295|o>>>23),o=s+(t^n&(i^t))+r[11]+643717713&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^t&(s^i))+r[0]+3921069994&4294967295,n=s+(o<<20&4294967295|o>>>12),o=t+(s^i&(n^s))+r[5]+3593408605&4294967295,t=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(t^n))+r[10]+38016083&4294967295,i=t+(o<<9&4294967295|o>>>23),o=s+(t^n&(i^t))+r[15]+3634488961&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^t&(s^i))+r[4]+3889429448&4294967295,n=s+(o<<20&4294967295|o>>>12),o=t+(s^i&(n^s))+r[9]+568446438&4294967295,t=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(t^n))+r[14]+3275163606&4294967295,i=t+(o<<9&4294967295|o>>>23),o=s+(t^n&(i^t))+r[3]+4107603335&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^t&(s^i))+r[8]+1163531501&4294967295,n=s+(o<<20&4294967295|o>>>12),o=t+(s^i&(n^s))+r[13]+2850285829&4294967295,t=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(t^n))+r[2]+4243563512&4294967295,i=t+(o<<9&4294967295|o>>>23),o=s+(t^n&(i^t))+r[7]+1735328473&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^t&(s^i))+r[12]+2368359562&4294967295,n=s+(o<<20&4294967295|o>>>12),o=t+(n^s^i)+r[5]+4294588738&4294967295,t=n+(o<<4&4294967295|o>>>28),o=i+(t^n^s)+r[8]+2272392833&4294967295,i=t+(o<<11&4294967295|o>>>21),o=s+(i^t^n)+r[11]+1839030562&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^t)+r[14]+4259657740&4294967295,n=s+(o<<23&4294967295|o>>>9),o=t+(n^s^i)+r[1]+2763975236&4294967295,t=n+(o<<4&4294967295|o>>>28),o=i+(t^n^s)+r[4]+1272893353&4294967295,i=t+(o<<11&4294967295|o>>>21),o=s+(i^t^n)+r[7]+4139469664&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^t)+r[10]+3200236656&4294967295,n=s+(o<<23&4294967295|o>>>9),o=t+(n^s^i)+r[13]+681279174&4294967295,t=n+(o<<4&4294967295|o>>>28),o=i+(t^n^s)+r[0]+3936430074&4294967295,i=t+(o<<11&4294967295|o>>>21),o=s+(i^t^n)+r[3]+3572445317&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^t)+r[6]+76029189&4294967295,n=s+(o<<23&4294967295|o>>>9),o=t+(n^s^i)+r[9]+3654602809&4294967295,t=n+(o<<4&4294967295|o>>>28),o=i+(t^n^s)+r[12]+3873151461&4294967295,i=t+(o<<11&4294967295|o>>>21),o=s+(i^t^n)+r[15]+530742520&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^t)+r[2]+3299628645&4294967295,n=s+(o<<23&4294967295|o>>>9),o=t+(s^(n|~i))+r[0]+4096336452&4294967295,t=n+(o<<6&4294967295|o>>>26),o=i+(n^(t|~s))+r[7]+1126891415&4294967295,i=t+(o<<10&4294967295|o>>>22),o=s+(t^(i|~n))+r[14]+2878612391&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~t))+r[5]+4237533241&4294967295,n=s+(o<<21&4294967295|o>>>11),o=t+(s^(n|~i))+r[12]+1700485571&4294967295,t=n+(o<<6&4294967295|o>>>26),o=i+(n^(t|~s))+r[3]+2399980690&4294967295,i=t+(o<<10&4294967295|o>>>22),o=s+(t^(i|~n))+r[10]+4293915773&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~t))+r[1]+2240044497&4294967295,n=s+(o<<21&4294967295|o>>>11),o=t+(s^(n|~i))+r[8]+1873313359&4294967295,t=n+(o<<6&4294967295|o>>>26),o=i+(n^(t|~s))+r[15]+4264355552&4294967295,i=t+(o<<10&4294967295|o>>>22),o=s+(t^(i|~n))+r[6]+2734768916&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~t))+r[13]+1309151649&4294967295,n=s+(o<<21&4294967295|o>>>11),o=t+(s^(n|~i))+r[4]+4149444226&4294967295,t=n+(o<<6&4294967295|o>>>26),o=i+(n^(t|~s))+r[11]+3174756917&4294967295,i=t+(o<<10&4294967295|o>>>22),o=s+(t^(i|~n))+r[2]+718787259&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~t))+r[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(s+(o<<21&4294967295|o>>>11))&4294967295,e.g[2]=e.g[2]+s&4294967295,e.g[3]=e.g[3]+i&4294967295}dt.prototype.j=function(e,t){t===void 0&&(t=e.length);for(var n=t-this.blockSize,r=this.m,s=this.h,i=0;i<t;){if(s==0)for(;i<=n;)Mr(this,e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<t;)if(r[s++]=e.charCodeAt(i++),s==this.blockSize){Mr(this,r),s=0;break}}else for(;i<t;)if(r[s++]=e[i++],s==this.blockSize){Mr(this,r),s=0;break}}this.h=s,this.i+=t};dt.prototype.l=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var n=8*this.i;for(t=e.length-8;t<e.length;++t)e[t]=n&255,n/=256;for(this.j(e),e=Array(16),t=n=0;4>t;++t)for(var r=0;32>r;r+=8)e[n++]=this.g[t]>>>r&255;return e};function k(e,t){this.h=t;for(var n=[],r=!0,s=e.length-1;0<=s;s--){var i=e[s]|0;r&&i==t||(n[s]=i,r=!1)}this.g=n}var ad={};function Zs(e){return-128<=e&&128>e?mh(e,function(t){return new k([t|0],0>t?-1:0)}):new k([e|0],0>e?-1:0)}function _t(e){if(isNaN(e)||!isFinite(e))return ee;if(0>e)return X(_t(-e));for(var t=[],n=1,r=0;e>=n;r++)t[r]=e/n|0,n*=cs;return new k(t,0)}function du(e,t){if(e.length==0)throw Error("number format error: empty string");if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(e.charAt(0)=="-")return X(du(e.substring(1),t));if(0<=e.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=_t(Math.pow(t,8)),r=ee,s=0;s<e.length;s+=8){var i=Math.min(8,e.length-s),o=parseInt(e.substring(s,s+i),t);8>i?(i=_t(Math.pow(t,i)),r=r.R(i).add(_t(o))):(r=r.R(n),r=r.add(_t(o)))}return r}var cs=4294967296,ee=Zs(0),ls=Zs(1),to=Zs(16777216);E=k.prototype;E.ea=function(){if(ct(this))return-X(this).ea();for(var e=0,t=1,n=0;n<this.g.length;n++){var r=this.D(n);e+=(0<=r?r:cs+r)*t,t*=cs}return e};E.toString=function(e){if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(It(this))return"0";if(ct(this))return"-"+X(this).toString(e);for(var t=_t(Math.pow(e,6)),n=this,r="";;){var s=jn(n,t).g;n=qn(n,s.R(t));var i=((0<n.g.length?n.g[0]:n.h)>>>0).toString(e);if(n=s,It(n))return i+r;for(;6>i.length;)i="0"+i;r=i+r}};E.D=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h};function It(e){if(e.h!=0)return!1;for(var t=0;t<e.g.length;t++)if(e.g[t]!=0)return!1;return!0}function ct(e){return e.h==-1}E.X=function(e){return e=qn(this,e),ct(e)?-1:It(e)?0:1};function X(e){for(var t=e.g.length,n=[],r=0;r<t;r++)n[r]=~e.g[r];return new k(n,~e.h).add(ls)}E.abs=function(){return ct(this)?X(this):this};E.add=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0,s=0;s<=t;s++){var i=r+(this.D(s)&65535)+(e.D(s)&65535),o=(i>>>16)+(this.D(s)>>>16)+(e.D(s)>>>16);r=o>>>16,i&=65535,o&=65535,n[s]=o<<16|i}return new k(n,n[n.length-1]&-2147483648?-1:0)};function qn(e,t){return e.add(X(t))}E.R=function(e){if(It(this)||It(e))return ee;if(ct(this))return ct(e)?X(this).R(X(e)):X(X(this).R(e));if(ct(e))return X(this.R(X(e)));if(0>this.X(to)&&0>e.X(to))return _t(this.ea()*e.ea());for(var t=this.g.length+e.g.length,n=[],r=0;r<2*t;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var s=0;s<e.g.length;s++){var i=this.D(r)>>>16,o=this.D(r)&65535,a=e.D(s)>>>16,u=e.D(s)&65535;n[2*r+2*s]+=o*u,vn(n,2*r+2*s),n[2*r+2*s+1]+=i*u,vn(n,2*r+2*s+1),n[2*r+2*s+1]+=o*a,vn(n,2*r+2*s+1),n[2*r+2*s+2]+=i*a,vn(n,2*r+2*s+2)}for(r=0;r<t;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=t;r<2*t;r++)n[r]=0;return new k(n,0)};function vn(e,t){for(;(e[t]&65535)!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function Re(e,t){this.g=e,this.h=t}function jn(e,t){if(It(t))throw Error("division by zero");if(It(e))return new Re(ee,ee);if(ct(e))return t=jn(X(e),t),new Re(X(t.g),X(t.h));if(ct(t))return t=jn(e,X(t)),new Re(X(t.g),t.h);if(30<e.g.length){if(ct(e)||ct(t))throw Error("slowDivide_ only works with positive integers.");for(var n=ls,r=t;0>=r.X(e);)n=eo(n),r=eo(r);var s=Wt(n,1),i=Wt(r,1);for(r=Wt(r,2),n=Wt(n,2);!It(r);){var o=i.add(r);0>=o.X(e)&&(s=s.add(n),i=o),r=Wt(r,1),n=Wt(n,1)}return t=qn(e,s.R(t)),new Re(s,t)}for(s=ee;0<=e.X(t);){for(n=Math.max(1,Math.floor(e.ea()/t.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),i=_t(n),o=i.R(t);ct(o)||0<o.X(e);)n-=r,i=_t(n),o=i.R(t);It(i)&&(i=ls),s=s.add(i),e=qn(e,o)}return new Re(s,e)}E.gb=function(e){return jn(this,e).h};E.and=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)&e.D(r);return new k(n,this.h&e.h)};E.or=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)|e.D(r);return new k(n,this.h|e.h)};E.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)^e.D(r);return new k(n,this.h^e.h)};function eo(e){for(var t=e.g.length+1,n=[],r=0;r<t;r++)n[r]=e.D(r)<<1|e.D(r-1)>>>31;return new k(n,e.h)}function Wt(e,t){var n=t>>5;t%=32;for(var r=e.g.length-n,s=[],i=0;i<r;i++)s[i]=0<t?e.D(i+n)>>>t|e.D(i+n+1)<<32-t:e.D(i+n);return new k(s,e.h)}Bn.prototype.createWebChannel=Bn.prototype.g;ut.prototype.send=ut.prototype.u;ut.prototype.open=ut.prototype.m;ut.prototype.close=ut.prototype.close;nr.NO_ERROR=0;nr.TIMEOUT=8;nr.HTTP_ERROR=6;Va.COMPLETE="complete";Da.EventType=rn;rn.OPEN="a";rn.CLOSE="b";rn.ERROR="c";rn.MESSAGE="d";Q.prototype.listen=Q.prototype.O;L.prototype.listenOnce=L.prototype.P;L.prototype.getLastError=L.prototype.Sa;L.prototype.getLastErrorCode=L.prototype.Ia;L.prototype.getStatus=L.prototype.da;L.prototype.getResponseJson=L.prototype.Wa;L.prototype.getResponseText=L.prototype.ja;L.prototype.send=L.prototype.ha;L.prototype.setWithCredentials=L.prototype.Oa;dt.prototype.digest=dt.prototype.l;dt.prototype.reset=dt.prototype.reset;dt.prototype.update=dt.prototype.j;k.prototype.add=k.prototype.add;k.prototype.multiply=k.prototype.R;k.prototype.modulo=k.prototype.gb;k.prototype.compare=k.prototype.X;k.prototype.toNumber=k.prototype.ea;k.prototype.toString=k.prototype.toString;k.prototype.getBits=k.prototype.D;k.fromNumber=_t;k.fromString=du;var ud=function(){return new Bn},cd=function(){return er()},Lr=nr,ld=Va,hd=Kt,no={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},In=Da,dd=L,fd=dt,ne=k;const ro="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}et.UNAUTHENTICATED=new et(null),et.GOOGLE_CREDENTIALS=new et("google-credentials-uid"),et.FIRST_PARTY=new et("first-party-uid"),et.MOCK_USER=new et("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ee="10.7.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zt=new sa("@firebase/firestore");function Se(){return zt.logLevel}function T(e,...t){if(zt.logLevel<=D.DEBUG){const n=t.map(ti);zt.debug(`Firestore (${Ee}): ${e}`,...n)}}function St(e,...t){if(zt.logLevel<=D.ERROR){const n=t.map(ti);zt.error(`Firestore (${Ee}): ${e}`,...n)}}function ue(e,...t){if(zt.logLevel<=D.WARN){const n=t.map(ti);zt.warn(`Firestore (${Ee}): ${e}`,...n)}}function ti(e){if(typeof e=="string")return e;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(e)}catch{return e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S(e="Unexpected state"){const t=`FIRESTORE (${Ee}) INTERNAL ASSERTION FAILED: `+e;throw St(t),new Error(t)}function $(e,t){e||S()}function N(e,t){return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class w extends ge{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fu{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class pd{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(et.UNAUTHENTICATED))}shutdown(){}}class md{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class gd{constructor(t){this.t=t,this.currentUser=et.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){let r=this.i;const s=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let i=new re;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new re,t.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const u=i;t.enqueueRetryable(async()=>{await u.promise,await s(this.currentUser)})},a=u=>{T("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(u=>a(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?a(u):(T("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new re)}},0),o()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==t?(T("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?($(typeof r.accessToken=="string"),new fu(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return $(t===null||typeof t=="string"),new et(t)}}class _d{constructor(t,n,r){this.l=t,this.h=n,this.P=r,this.type="FirstParty",this.user=et.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class yd{constructor(t,n,r){this.l=t,this.h=n,this.P=r}getToken(){return Promise.resolve(new _d(this.l,this.h,this.P))}start(t,n){t.enqueueRetryable(()=>n(et.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Ed{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Td{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,n){const r=i=>{i.error!=null&&T("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,T("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{t.enqueueRetryable(()=>r(i))};const s=i=>{T("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):T("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?($(typeof n.token=="string"),this.R=n.token,new Ed(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wd(e){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vd{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length;let r="";for(;r.length<20;){const s=wd(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=t.charAt(s[i]%t.length))}return r}}function O(e,t){return e<t?-1:e>t?1:0}function ce(e,t,n){return e.length===t.length&&e.every((r,s)=>n(r,t[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K{constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new w(g.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new w(g.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<-62135596800)throw new w(g.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new w(g.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return K.fromMillis(Date.now())}static fromDate(t){return K.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),r=Math.floor(1e6*(t-1e3*n));return new K(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?O(this.nanoseconds,t.nanoseconds):O(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R{constructor(t){this.timestamp=t}static fromTimestamp(t){return new R(t)}static min(){return new R(new K(0,0))}static max(){return new R(new K(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class We{constructor(t,n,r){n===void 0?n=0:n>t.length&&S(),r===void 0?r=t.length-n:r>t.length-n&&S(),this.segments=t,this.offset=n,this.len=r}get length(){return this.len}isEqual(t){return We.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof We?t.forEach(r=>{n.push(r)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,r=this.limit();n<r;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const r=Math.min(t.length,n.length);for(let s=0;s<r;s++){const i=t.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return t.length<n.length?-1:t.length>n.length?1:0}}class M extends We{construct(t,n,r){return new M(t,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const n=[];for(const r of t){if(r.indexOf("//")>=0)throw new w(g.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new M(n)}static emptyPath(){return new M([])}}const Id=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class rt extends We{construct(t,n,r){return new rt(t,n,r)}static isValidIdentifier(t){return Id.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),rt.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new rt(["__name__"])}static fromServerFormat(t){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new w(g.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<t.length;){const a=t[s];if(a==="\\"){if(s+1===t.length)throw new w(g.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const u=t[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new w(g.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=u,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new w(g.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new rt(n)}static emptyPath(){return new rt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I{constructor(t){this.path=t}static fromPath(t){return new I(M.fromString(t))}static fromName(t){return new I(M.fromString(t).popFirst(5))}static empty(){return new I(M.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&M.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return M.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new I(new M(t.slice()))}}function Ad(e,t){const n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,s=R.fromTimestamp(r===1e9?new K(n+1,0):new K(n,r));return new Nt(s,I.empty(),t)}function Rd(e){return new Nt(e.readTime,e.key,-1)}class Nt{constructor(t,n,r){this.readTime=t,this.documentKey=n,this.largestBatchId=r}static min(){return new Nt(R.min(),I.empty(),-1)}static max(){return new Nt(R.max(),I.empty(),-1)}}function Sd(e,t){let n=e.readTime.compareTo(t.readTime);return n!==0?n:(n=I.comparator(e.documentKey,t.documentKey),n!==0?n:O(e.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cd="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Pd{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ei(e){if(e.code!==g.FAILED_PRECONDITION||e.message!==Cd)throw e;T("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&S(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new p((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(t,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((t,n)=>{this.next(t,n)})}wrapUserFunction(t){try{const n=t();return n instanceof p?n:p.resolve(n)}catch(n){return p.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction(()=>t(n)):p.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction(()=>t(n)):p.reject(n)}static resolve(t){return new p((n,r)=>{n(t)})}static reject(t){return new p((n,r)=>{r(t)})}static waitFor(t){return new p((n,r)=>{let s=0,i=0,o=!1;t.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&n()},u=>r(u))}),o=!0,i===s&&n()})}static or(t){let n=p.resolve(!1);for(const r of t)n=n.next(s=>s?p.resolve(s):r());return n}static forEach(t,n){const r=[];return t.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(t,n){return new p((r,s)=>{const i=t.length,o=new Array(i);let a=0;for(let u=0;u<i;u++){const c=u;n(t[c]).next(l=>{o[c]=l,++a,a===i&&r(o)},l=>s(l))}})}static doWhile(t,n){return new p((r,s)=>{const i=()=>{t()===!0?n().next(()=>{i()},s):r()};i()})}}function cn(e){return e.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=r=>this.se(r),this.oe=r=>n.writeSequenceNumber(r))}se(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.oe&&this.oe(t),t}}ni._e=-1;function hr(e){return e==null}function $n(e){return e===0&&1/e==-1/0}function Vd(e){return typeof e=="number"&&Number.isInteger(e)&&!$n(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function so(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function ln(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function pu(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{constructor(t,n){this.comparator=t,this.root=n||J.EMPTY}insert(t,n){return new F(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,J.BLACK,null,null))}remove(t){return new F(this.comparator,this.root.remove(t,this.comparator).copy(null,null,J.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(t){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(t,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((n,r)=>(t(n,r),!1))}toString(){const t=[];return this.inorderTraversal((n,r)=>(t.push(`${n}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new An(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new An(this.root,t,this.comparator,!1)}getReverseIterator(){return new An(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new An(this.root,t,this.comparator,!0)}}class An{constructor(t,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=n?r(t.key,n):1,n&&s&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(i===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class J{constructor(t,n,r,s,i){this.key=t,this.value=n,this.color=r??J.RED,this.left=s??J.EMPTY,this.right=i??J.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,r,s,i){return new J(t??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,r){let s=this;const i=r(t,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(t,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(t,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return J.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let r,s=this;if(n(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(t,s.key)===0){if(s.right.isEmpty())return J.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,J.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,J.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw S();const t=this.left.check();if(t!==this.right.check())throw S();return t+(this.isRed()?0:1)}}J.EMPTY=null,J.RED=!0,J.BLACK=!1;J.EMPTY=new class{constructor(){this.size=0}get key(){throw S()}get value(){throw S()}get color(){throw S()}get left(){throw S()}get right(){throw S()}copy(t,n,r,s,i){return this}insert(t,n,r){return new J(t,n)}remove(t,n){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(t){this.comparator=t,this.data=new F(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((n,r)=>(t(n),!1))}forEachInRange(t,n){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,t[1])>=0)return;n(s.key)}}forEachWhile(t,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new io(this.data.getIterator())}getIteratorFrom(t){return new io(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach(r=>{n=n.add(r)}),n}isEqual(t){if(!(t instanceof Z)||this.size!==t.size)return!1;const n=this.data.getIterator(),r=t.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(n=>{t.push(n)}),t}toString(){const t=[];return this.forEach(n=>t.push(n)),"SortedSet("+t.toString()+")"}copy(t){const n=new Z(this.comparator);return n.data=t,n}}class io{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt{constructor(t){this.fields=t,t.sort(rt.comparator)}static empty(){return new Pt([])}unionWith(t){let n=new Z(rt.comparator);for(const r of this.fields)n=n.add(r);for(const r of t)n=n.add(r);return new Pt(n.toArray())}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return ce(this.fields,t.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mu extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(t){this.binaryString=t}static fromBase64String(t){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new mu("Invalid base64 string: "+i):i}}(t);return new ot(n)}static fromUint8Array(t){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(t);return new ot(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return O(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}ot.EMPTY_BYTE_STRING=new ot("");const Dd=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ot(e){if($(!!e),typeof e=="string"){let t=0;const n=Dd.exec(e);if($(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),t=Number(s)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:q(e.seconds),nanos:q(e.nanos)}}function q(e){return typeof e=="number"?e:typeof e=="string"?Number(e):0}function Ht(e){return typeof e=="string"?ot.fromBase64String(e):ot.fromUint8Array(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ri(e){var t,n;return((n=(((t=e==null?void 0:e.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function si(e){const t=e.mapValue.fields.__previous_value__;return ri(t)?si(t):t}function Je(e){const t=Ot(e.mapValue.fields.__local_write_time__.timestampValue);return new K(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bd{constructor(t,n,r,s,i,o,a,u,c){this.databaseId=t,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=u,this.useFetchStreams=c}}class Xe{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new Xe("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof Xe&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rn={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Gt(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?ri(e)?4:Nd(e)?9007199254740991:10:S()}function Tt(e,t){if(e===t)return!0;const n=Gt(e);if(n!==Gt(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return Je(e).isEqual(Je(t));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Ot(s.timestampValue),a=Ot(i.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(s,i){return Ht(s.bytesValue).isEqual(Ht(i.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(s,i){return q(s.geoPointValue.latitude)===q(i.geoPointValue.latitude)&&q(s.geoPointValue.longitude)===q(i.geoPointValue.longitude)}(e,t);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return q(s.integerValue)===q(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=q(s.doubleValue),a=q(i.doubleValue);return o===a?$n(o)===$n(a):isNaN(o)&&isNaN(a)}return!1}(e,t);case 9:return ce(e.arrayValue.values||[],t.arrayValue.values||[],Tt);case 10:return function(s,i){const o=s.mapValue.fields||{},a=i.mapValue.fields||{};if(so(o)!==so(a))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(a[u]===void 0||!Tt(o[u],a[u])))return!1;return!0}(e,t);default:return S()}}function Ye(e,t){return(e.values||[]).find(n=>Tt(n,t))!==void 0}function le(e,t){if(e===t)return 0;const n=Gt(e),r=Gt(t);if(n!==r)return O(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return O(e.booleanValue,t.booleanValue);case 2:return function(i,o){const a=q(i.integerValue||i.doubleValue),u=q(o.integerValue||o.doubleValue);return a<u?-1:a>u?1:a===u?0:isNaN(a)?isNaN(u)?0:-1:1}(e,t);case 3:return oo(e.timestampValue,t.timestampValue);case 4:return oo(Je(e),Je(t));case 5:return O(e.stringValue,t.stringValue);case 6:return function(i,o){const a=Ht(i),u=Ht(o);return a.compareTo(u)}(e.bytesValue,t.bytesValue);case 7:return function(i,o){const a=i.split("/"),u=o.split("/");for(let c=0;c<a.length&&c<u.length;c++){const l=O(a[c],u[c]);if(l!==0)return l}return O(a.length,u.length)}(e.referenceValue,t.referenceValue);case 8:return function(i,o){const a=O(q(i.latitude),q(o.latitude));return a!==0?a:O(q(i.longitude),q(o.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(i,o){const a=i.values||[],u=o.values||[];for(let c=0;c<a.length&&c<u.length;++c){const l=le(a[c],u[c]);if(l)return l}return O(a.length,u.length)}(e.arrayValue,t.arrayValue);case 10:return function(i,o){if(i===Rn.mapValue&&o===Rn.mapValue)return 0;if(i===Rn.mapValue)return 1;if(o===Rn.mapValue)return-1;const a=i.fields||{},u=Object.keys(a),c=o.fields||{},l=Object.keys(c);u.sort(),l.sort();for(let h=0;h<u.length&&h<l.length;++h){const f=O(u[h],l[h]);if(f!==0)return f;const m=le(a[u[h]],c[l[h]]);if(m!==0)return m}return O(u.length,l.length)}(e.mapValue,t.mapValue);default:throw S()}}function oo(e,t){if(typeof e=="string"&&typeof t=="string"&&e.length===t.length)return O(e,t);const n=Ot(e),r=Ot(t),s=O(n.seconds,r.seconds);return s!==0?s:O(n.nanos,r.nanos)}function he(e){return hs(e)}function hs(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(n){const r=Ot(n);return`time(${r.seconds},${r.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?function(n){return Ht(n).toBase64()}(e.bytesValue):"referenceValue"in e?function(n){return I.fromName(n).toString()}(e.referenceValue):"geoPointValue"in e?function(n){return`geo(${n.latitude},${n.longitude})`}(e.geoPointValue):"arrayValue"in e?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=hs(i);return r+"]"}(e.arrayValue):"mapValue"in e?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${hs(n.fields[o])}`;return s+"}"}(e.mapValue):S()}function ao(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function ds(e){return!!e&&"integerValue"in e}function ii(e){return!!e&&"arrayValue"in e}function uo(e){return!!e&&"nullValue"in e}function co(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function Fr(e){return!!e&&"mapValue"in e}function ke(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&typeof e.timestampValue=="object")return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return ln(e.mapValue.fields,(n,r)=>t.mapValue.fields[n]=ke(r)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=ke(e.arrayValue.values[n]);return t}return Object.assign({},e)}function Nd(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(t){this.value=t}static empty(){return new mt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let r=0;r<t.length-1;++r)if(n=(n.mapValue.fields||{})[t.get(r)],!Fr(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=ke(n)}setAll(t){let n=rt.emptyPath(),r={},s=[];t.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const u=this.getFieldsMap(n);this.applyChanges(u,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=ke(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(t){const n=this.field(t.popLast());Fr(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return Tt(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<t.length;++r){let s=n.mapValue.fields[t.get(r)];Fr(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[t.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(t,n,r){ln(n,(s,i)=>t[s]=i);for(const s of r)delete t[s]}clone(){return new mt(ke(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(t,n,r,s,i,o,a){this.key=t,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(t){return new nt(t,0,R.min(),R.min(),R.min(),mt.empty(),0)}static newFoundDocument(t,n,r,s){return new nt(t,1,n,R.min(),r,s,0)}static newNoDocument(t,n){return new nt(t,2,n,R.min(),R.min(),mt.empty(),0)}static newUnknownDocument(t,n){return new nt(t,3,n,R.min(),R.min(),mt.empty(),2)}convertToFoundDocument(t,n){return!this.createTime.isEqual(R.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=mt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=mt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=R.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof nt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new nt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn{constructor(t,n){this.position=t,this.inclusive=n}}function lo(e,t,n){let r=0;for(let s=0;s<e.position.length;s++){const i=t[s],o=e.position[s];if(i.field.isKeyField()?r=I.comparator(I.fromName(o.referenceValue),n.key):r=le(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function ho(e,t){if(e===null)return t===null;if(t===null||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!Tt(e.position[n],t.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn{constructor(t,n="asc"){this.field=t,this.dir=n}}function Od(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gu{}class j extends gu{constructor(t,n,r){super(),this.field=t,this.op=n,this.value=r}static create(t,n,r){return t.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(t,n,r):new xd(t,n,r):n==="array-contains"?new Fd(t,r):n==="in"?new Ud(t,r):n==="not-in"?new Bd(t,r):n==="array-contains-any"?new qd(t,r):new j(t,n,r)}static createKeyFieldInFilter(t,n,r){return n==="in"?new Md(t,r):new Ld(t,r)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(le(n,this.value)):n!==null&&Gt(this.value)===Gt(n)&&this.matchesComparison(le(n,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return S()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class ft extends gu{constructor(t,n){super(),this.filters=t,this.op=n,this.ue=null}static create(t,n){return new ft(t,n)}matches(t){return _u(this)?this.filters.find(n=>!n.matches(t))===void 0:this.filters.find(n=>n.matches(t))!==void 0}getFlattenedFilters(){return this.ue!==null||(this.ue=this.filters.reduce((t,n)=>t.concat(n.getFlattenedFilters()),[])),this.ue}getFilters(){return Object.assign([],this.filters)}}function _u(e){return e.op==="and"}function yu(e){return kd(e)&&_u(e)}function kd(e){for(const t of e.filters)if(t instanceof ft)return!1;return!0}function fs(e){if(e instanceof j)return e.field.canonicalString()+e.op.toString()+he(e.value);if(yu(e))return e.filters.map(t=>fs(t)).join(",");{const t=e.filters.map(n=>fs(n)).join(",");return`${e.op}(${t})`}}function Eu(e,t){return e instanceof j?function(r,s){return s instanceof j&&r.op===s.op&&r.field.isEqual(s.field)&&Tt(r.value,s.value)}(e,t):e instanceof ft?function(r,s){return s instanceof ft&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,a)=>i&&Eu(o,s.filters[a]),!0):!1}(e,t):void S()}function Tu(e){return e instanceof j?function(n){return`${n.field.canonicalString()} ${n.op} ${he(n.value)}`}(e):e instanceof ft?function(n){return n.op.toString()+" {"+n.getFilters().map(Tu).join(" ,")+"}"}(e):"Filter"}class xd extends j{constructor(t,n,r){super(t,n,r),this.key=I.fromName(r.referenceValue)}matches(t){const n=I.comparator(t.key,this.key);return this.matchesComparison(n)}}class Md extends j{constructor(t,n){super(t,"in",n),this.keys=wu("in",n)}matches(t){return this.keys.some(n=>n.isEqual(t.key))}}class Ld extends j{constructor(t,n){super(t,"not-in",n),this.keys=wu("not-in",n)}matches(t){return!this.keys.some(n=>n.isEqual(t.key))}}function wu(e,t){var n;return(((n=t.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>I.fromName(r.referenceValue))}class Fd extends j{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return ii(n)&&Ye(n.arrayValue,this.value)}}class Ud extends j{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&Ye(this.value.arrayValue,n)}}class Bd extends j{constructor(t,n){super(t,"not-in",n)}matches(t){if(Ye(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&!Ye(this.value.arrayValue,n)}}class qd extends j{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!ii(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Ye(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jd{constructor(t,n=null,r=[],s=[],i=null,o=null,a=null){this.path=t,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.ce=null}}function fo(e,t=null,n=[],r=[],s=null,i=null,o=null){return new jd(e,t,n,r,s,i,o)}function oi(e){const t=N(e);if(t.ce===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map(r=>fs(r)).join(","),n+="|ob:",n+=t.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),hr(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(r=>he(r)).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(r=>he(r)).join(",")),t.ce=n}return t.ce}function ai(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!Od(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!Eu(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!ho(e.startAt,t.startAt)&&ho(e.endAt,t.endAt)}function ps(e){return I.isDocumentKey(e.path)&&e.collectionGroup===null&&e.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hn{constructor(t,n=null,r=[],s=[],i=null,o="F",a=null,u=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=u,this.le=null,this.he=null,this.Pe=null,this.startAt,this.endAt}}function $d(e,t,n,r,s,i,o,a){return new hn(e,t,n,r,s,i,o,a)}function ui(e){return new hn(e)}function po(e){return e.filters.length===0&&e.limit===null&&e.startAt==null&&e.endAt==null&&(e.explicitOrderBy.length===0||e.explicitOrderBy.length===1&&e.explicitOrderBy[0].field.isKeyField())}function vu(e){return e.collectionGroup!==null}function xe(e){const t=N(e);if(t.le===null){t.le=[];const n=new Set;for(const i of t.explicitOrderBy)t.le.push(i),n.add(i.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new Z(rt.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(a=a.add(c.field))})}),a})(t).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||t.le.push(new Hn(i,r))}),n.has(rt.keyField().canonicalString())||t.le.push(new Hn(rt.keyField(),r))}return t.le}function Et(e){const t=N(e);return t.he||(t.he=zd(t,xe(e))),t.he}function zd(e,t){if(e.limitType==="F")return fo(e.path,e.collectionGroup,t,e.filters,e.limit,e.startAt,e.endAt);{t=t.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Hn(s.field,i)});const n=e.endAt?new zn(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new zn(e.startAt.position,e.startAt.inclusive):null;return fo(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}}function ms(e,t){const n=e.filters.concat([t]);return new hn(e.path,e.collectionGroup,e.explicitOrderBy.slice(),n,e.limit,e.limitType,e.startAt,e.endAt)}function gs(e,t,n){return new hn(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function dr(e,t){return ai(Et(e),Et(t))&&e.limitType===t.limitType}function Iu(e){return`${oi(Et(e))}|lt:${e.limitType}`}function Jt(e){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>Tu(s)).join(", ")}]`),hr(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>he(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>he(s)).join(",")),`Target(${r})`}(Et(e))}; limitType=${e.limitType})`}function fr(e,t){return t.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):I.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(e,t)&&function(r,s){for(const i of xe(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(e,t)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(e,t)&&function(r,s){return!(r.startAt&&!function(o,a,u){const c=lo(o,a,u);return o.inclusive?c<=0:c<0}(r.startAt,xe(r),s)||r.endAt&&!function(o,a,u){const c=lo(o,a,u);return o.inclusive?c>=0:c>0}(r.endAt,xe(r),s))}(e,t)}function Hd(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function Au(e){return(t,n)=>{let r=!1;for(const s of xe(e)){const i=Gd(s,t,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function Gd(e,t,n){const r=e.field.isKeyField()?I.comparator(t.key,n.key):function(i,o,a){const u=o.data.field(i),c=a.data.field(i);return u!==null&&c!==null?le(u,c):S()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return S()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,t))return i}}has(t){return this.get(t)!==void 0}set(t,n){const r=this.mapKeyFn(t),s=this.inner[r];if(s===void 0)return this.inner[r]=[[t,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],t))return void(s[i]=[t,n]);s.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],t))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(t){ln(this.inner,(n,r)=>{for(const[s,i]of r)t(s,i)})}isEmpty(){return pu(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kd=new F(I.comparator);function kt(){return Kd}const Ru=new F(I.comparator);function De(...e){let t=Ru;for(const n of e)t=t.insert(n.key,n);return t}function Qd(e){let t=Ru;return e.forEach((n,r)=>t=t.insert(n,r.overlayedDocument)),t}function Bt(){return Me()}function Su(){return Me()}function Me(){return new Te(e=>e.toString(),(e,t)=>e.isEqual(t))}const Wd=new Z(I.comparator);function b(...e){let t=Wd;for(const n of e)t=t.add(n);return t}const Jd=new Z(O);function Xd(){return Jd}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cu(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:$n(t)?"-0":t}}function Pu(e){return{integerValue:""+e}}function Yd(e,t){return Vd(t)?Pu(t):Cu(e,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pr{constructor(){this._=void 0}}function Zd(e,t,n){return e instanceof _s?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&ri(i)&&(i=si(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,t):e instanceof Gn?Vu(e,t):e instanceof Kn?Du(e,t):function(s,i){const o=ef(s,i),a=mo(o)+mo(s.Ie);return ds(o)&&ds(s.Ie)?Pu(a):Cu(s.serializer,a)}(e,t)}function tf(e,t,n){return e instanceof Gn?Vu(e,t):e instanceof Kn?Du(e,t):n}function ef(e,t){return e instanceof ys?function(r){return ds(r)||function(i){return!!i&&"doubleValue"in i}(r)}(t)?t:{integerValue:0}:null}class _s extends pr{}class Gn extends pr{constructor(t){super(),this.elements=t}}function Vu(e,t){const n=bu(t);for(const r of e.elements)n.some(s=>Tt(s,r))||n.push(r);return{arrayValue:{values:n}}}class Kn extends pr{constructor(t){super(),this.elements=t}}function Du(e,t){let n=bu(t);for(const r of e.elements)n=n.filter(s=>!Tt(s,r));return{arrayValue:{values:n}}}class ys extends pr{constructor(t,n){super(),this.serializer=t,this.Ie=n}}function mo(e){return q(e.integerValue||e.doubleValue)}function bu(e){return ii(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}function nf(e,t){return e.field.isEqual(t.field)&&function(r,s){return r instanceof Gn&&s instanceof Gn||r instanceof Kn&&s instanceof Kn?ce(r.elements,s.elements,Tt):r instanceof ys&&s instanceof ys?Tt(r.Ie,s.Ie):r instanceof _s&&s instanceof _s}(e.transform,t.transform)}class jt{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new jt}static exists(t){return new jt(void 0,t)}static updateTime(t){return new jt(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Cn(e,t){return e.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(e.updateTime):e.exists===void 0||e.exists===t.isFoundDocument()}class ci{}function Nu(e,t){if(!e.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return e.isNoDocument()?new sf(e.key,jt.none()):new li(e.key,e.data,jt.none());{const n=e.data,r=mt.empty();let s=new Z(rt.comparator);for(let i of t.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new mr(e.key,r,new Pt(s.toArray()),jt.none())}}function rf(e,t,n){e instanceof li?function(s,i,o){const a=s.value.clone(),u=_o(s.fieldTransforms,i,o.transformResults);a.setAll(u),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(e,t,n):e instanceof mr?function(s,i,o){if(!Cn(s.precondition,i))return void i.convertToUnknownDocument(o.version);const a=_o(s.fieldTransforms,i,o.transformResults),u=i.data;u.setAll(Ou(s)),u.setAll(a),i.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(e,t,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,t,n)}function Le(e,t,n,r){return e instanceof li?function(i,o,a,u){if(!Cn(i.precondition,o))return a;const c=i.value.clone(),l=yo(i.fieldTransforms,u,o);return c.setAll(l),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(e,t,n,r):e instanceof mr?function(i,o,a,u){if(!Cn(i.precondition,o))return a;const c=yo(i.fieldTransforms,u,o),l=o.data;return l.setAll(Ou(i)),l.setAll(c),o.convertToFoundDocument(o.version,l).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(h=>h.field))}(e,t,n,r):function(i,o,a){return Cn(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(e,t,n)}function go(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&ce(r,s,(i,o)=>nf(i,o))}(e.fieldTransforms,t.fieldTransforms)&&(e.type===0?e.value.isEqual(t.value):e.type!==1||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class li extends ci{constructor(t,n,r,s=[]){super(),this.key=t,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class mr extends ci{constructor(t,n,r,s,i=[]){super(),this.key=t,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Ou(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}}),t}function _o(e,t,n){const r=new Map;$(e.length===n.length);for(let s=0;s<n.length;s++){const i=e[s],o=i.transform,a=t.data.field(i.field);r.set(i.field,tf(o,a,n[s]))}return r}function yo(e,t,n){const r=new Map;for(const s of e){const i=s.transform,o=n.data.field(s.field);r.set(s.field,Zd(i,o,t))}return r}class sf extends ci{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class of{constructor(t,n,r,s){this.batchId=t,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(t,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(t.key)&&rf(i,t,r[s])}}applyToLocalView(t,n){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(n=Le(r,t,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(n=Le(r,t,n,this.localWriteTime));return n}applyToLocalDocumentSet(t,n){const r=Su();return this.mutations.forEach(s=>{const i=t.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(s.key)?null:a;const u=Nu(o,a);u!==null&&r.set(s.key,u),o.isValidDocument()||o.convertToNoDocument(R.min())}),r}keys(){return this.mutations.reduce((t,n)=>t.add(n.key),b())}isEqual(t){return this.batchId===t.batchId&&ce(this.mutations,t.mutations,(n,r)=>go(n,r))&&ce(this.baseMutations,t.baseMutations,(n,r)=>go(n,r))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class af{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uf{constructor(t,n){this.count=t,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var B,C;function ku(e){if(e===void 0)return St("GRPC error has no .code"),g.UNKNOWN;switch(e){case B.OK:return g.OK;case B.CANCELLED:return g.CANCELLED;case B.UNKNOWN:return g.UNKNOWN;case B.DEADLINE_EXCEEDED:return g.DEADLINE_EXCEEDED;case B.RESOURCE_EXHAUSTED:return g.RESOURCE_EXHAUSTED;case B.INTERNAL:return g.INTERNAL;case B.UNAVAILABLE:return g.UNAVAILABLE;case B.UNAUTHENTICATED:return g.UNAUTHENTICATED;case B.INVALID_ARGUMENT:return g.INVALID_ARGUMENT;case B.NOT_FOUND:return g.NOT_FOUND;case B.ALREADY_EXISTS:return g.ALREADY_EXISTS;case B.PERMISSION_DENIED:return g.PERMISSION_DENIED;case B.FAILED_PRECONDITION:return g.FAILED_PRECONDITION;case B.ABORTED:return g.ABORTED;case B.OUT_OF_RANGE:return g.OUT_OF_RANGE;case B.UNIMPLEMENTED:return g.UNIMPLEMENTED;case B.DATA_LOSS:return g.DATA_LOSS;default:return S()}}(C=B||(B={}))[C.OK=0]="OK",C[C.CANCELLED=1]="CANCELLED",C[C.UNKNOWN=2]="UNKNOWN",C[C.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",C[C.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",C[C.NOT_FOUND=5]="NOT_FOUND",C[C.ALREADY_EXISTS=6]="ALREADY_EXISTS",C[C.PERMISSION_DENIED=7]="PERMISSION_DENIED",C[C.UNAUTHENTICATED=16]="UNAUTHENTICATED",C[C.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",C[C.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",C[C.ABORTED=10]="ABORTED",C[C.OUT_OF_RANGE=11]="OUT_OF_RANGE",C[C.UNIMPLEMENTED=12]="UNIMPLEMENTED",C[C.INTERNAL=13]="INTERNAL",C[C.UNAVAILABLE=14]="UNAVAILABLE",C[C.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cf(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lf=new ne([4294967295,4294967295],0);function Eo(e){const t=cf().encode(e),n=new fd;return n.update(t),new Uint8Array(n.digest())}function To(e){const t=new DataView(e.buffer),n=t.getUint32(0,!0),r=t.getUint32(4,!0),s=t.getUint32(8,!0),i=t.getUint32(12,!0);return[new ne([n,r],0),new ne([s,i],0)]}class hi{constructor(t,n,r){if(this.bitmap=t,this.padding=n,this.hashCount=r,n<0||n>=8)throw new be(`Invalid padding: ${n}`);if(r<0)throw new be(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new be(`Invalid hash count: ${r}`);if(t.length===0&&n!==0)throw new be(`Invalid padding when bitmap length is 0: ${n}`);this.Te=8*t.length-n,this.Ee=ne.fromNumber(this.Te)}de(t,n,r){let s=t.add(n.multiply(ne.fromNumber(r)));return s.compare(lf)===1&&(s=new ne([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Ee).toNumber()}Ae(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}mightContain(t){if(this.Te===0)return!1;const n=Eo(t),[r,s]=To(n);for(let i=0;i<this.hashCount;i++){const o=this.de(r,s,i);if(!this.Ae(o))return!1}return!0}static create(t,n,r){const s=t%8==0?0:8-t%8,i=new Uint8Array(Math.ceil(t/8)),o=new hi(i,s,n);return r.forEach(a=>o.insert(a)),o}insert(t){if(this.Te===0)return;const n=Eo(t),[r,s]=To(n);for(let i=0;i<this.hashCount;i++){const o=this.de(r,s,i);this.Re(o)}}Re(t){const n=Math.floor(t/8),r=t%8;this.bitmap[n]|=1<<r}}class be extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gr{constructor(t,n,r,s,i){this.snapshotVersion=t,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(t,n,r){const s=new Map;return s.set(t,dn.createSynthesizedTargetChangeForCurrentChange(t,n,r)),new gr(R.min(),s,new F(O),kt(),b())}}class dn{constructor(t,n,r,s,i){this.resumeToken=t,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(t,n,r){return new dn(r,n,b(),b(),b())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn{constructor(t,n,r,s){this.Ve=t,this.removedTargetIds=n,this.key=r,this.me=s}}class xu{constructor(t,n){this.targetId=t,this.fe=n}}class Mu{constructor(t,n,r=ot.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=n,this.resumeToken=r,this.cause=s}}class wo{constructor(){this.ge=0,this.pe=Io(),this.ye=ot.EMPTY_BYTE_STRING,this.we=!1,this.Se=!0}get current(){return this.we}get resumeToken(){return this.ye}get be(){return this.ge!==0}get De(){return this.Se}Ce(t){t.approximateByteSize()>0&&(this.Se=!0,this.ye=t)}ve(){let t=b(),n=b(),r=b();return this.pe.forEach((s,i)=>{switch(i){case 0:t=t.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:S()}}),new dn(this.ye,this.we,t,n,r)}Fe(){this.Se=!1,this.pe=Io()}Me(t,n){this.Se=!0,this.pe=this.pe.insert(t,n)}xe(t){this.Se=!0,this.pe=this.pe.remove(t)}Oe(){this.ge+=1}Ne(){this.ge-=1,$(this.ge>=0)}Be(){this.Se=!0,this.we=!0}}class hf{constructor(t){this.Le=t,this.ke=new Map,this.qe=kt(),this.Qe=vo(),this.Ke=new F(O)}$e(t){for(const n of t.Ve)t.me&&t.me.isFoundDocument()?this.Ue(n,t.me):this.We(n,t.key,t.me);for(const n of t.removedTargetIds)this.We(n,t.key,t.me)}Ge(t){this.forEachTarget(t,n=>{const r=this.ze(n);switch(t.state){case 0:this.je(n)&&r.Ce(t.resumeToken);break;case 1:r.Ne(),r.be||r.Fe(),r.Ce(t.resumeToken);break;case 2:r.Ne(),r.be||this.removeTarget(n);break;case 3:this.je(n)&&(r.Be(),r.Ce(t.resumeToken));break;case 4:this.je(n)&&(this.He(n),r.Ce(t.resumeToken));break;default:S()}})}forEachTarget(t,n){t.targetIds.length>0?t.targetIds.forEach(n):this.ke.forEach((r,s)=>{this.je(s)&&n(s)})}Je(t){const n=t.targetId,r=t.fe.count,s=this.Ye(n);if(s){const i=s.target;if(ps(i))if(r===0){const o=new I(i.path);this.We(n,o,nt.newNoDocument(o,R.min()))}else $(r===1);else{const o=this.Ze(n);if(o!==r){const a=this.Xe(t),u=a?this.et(a,t,o):1;if(u!==0){this.He(n);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(n,c)}}}}}Xe(t){const n=t.fe.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,a;try{o=Ht(r).toUint8Array()}catch(u){if(u instanceof mu)return ue("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{a=new hi(o,s,i)}catch(u){return ue(u instanceof be?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return a.Te===0?null:a}et(t,n,r){return n.fe.count===r-this.rt(t,n.targetId)?0:2}rt(t,n){const r=this.Le.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Le.nt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;t.mightContain(a)||(this.We(n,i,null),s++)}),s}it(t){const n=new Map;this.ke.forEach((i,o)=>{const a=this.Ye(o);if(a){if(i.current&&ps(a.target)){const u=new I(a.target.path);this.qe.get(u)!==null||this.st(o,u)||this.We(o,u,nt.newNoDocument(u,t))}i.De&&(n.set(o,i.ve()),i.Fe())}});let r=b();this.Qe.forEach((i,o)=>{let a=!0;o.forEachWhile(u=>{const c=this.Ye(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(i))}),this.qe.forEach((i,o)=>o.setReadTime(t));const s=new gr(t,n,this.Ke,this.qe,r);return this.qe=kt(),this.Qe=vo(),this.Ke=new F(O),s}Ue(t,n){if(!this.je(t))return;const r=this.st(t,n.key)?2:0;this.ze(t).Me(n.key,r),this.qe=this.qe.insert(n.key,n),this.Qe=this.Qe.insert(n.key,this.ot(n.key).add(t))}We(t,n,r){if(!this.je(t))return;const s=this.ze(t);this.st(t,n)?s.Me(n,1):s.xe(n),this.Qe=this.Qe.insert(n,this.ot(n).delete(t)),r&&(this.qe=this.qe.insert(n,r))}removeTarget(t){this.ke.delete(t)}Ze(t){const n=this.ze(t).ve();return this.Le.getRemoteKeysForTarget(t).size+n.addedDocuments.size-n.removedDocuments.size}Oe(t){this.ze(t).Oe()}ze(t){let n=this.ke.get(t);return n||(n=new wo,this.ke.set(t,n)),n}ot(t){let n=this.Qe.get(t);return n||(n=new Z(O),this.Qe=this.Qe.insert(t,n)),n}je(t){const n=this.Ye(t)!==null;return n||T("WatchChangeAggregator","Detected inactive target",t),n}Ye(t){const n=this.ke.get(t);return n&&n.be?null:this.Le._t(t)}He(t){this.ke.set(t,new wo),this.Le.getRemoteKeysForTarget(t).forEach(n=>{this.We(t,n,null)})}st(t,n){return this.Le.getRemoteKeysForTarget(t).has(n)}}function vo(){return new F(I.comparator)}function Io(){return new F(I.comparator)}const df=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),ff=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),pf=(()=>({and:"AND",or:"OR"}))();class mf{constructor(t,n){this.databaseId=t,this.useProto3Json=n}}function Es(e,t){return e.useProto3Json||hr(t)?t:{value:t}}function Ts(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Lu(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function se(e){return $(!!e),R.fromTimestamp(function(n){const r=Ot(n);return new K(r.seconds,r.nanos)}(e))}function Fu(e,t){return function(r){return new M(["projects",r.projectId,"databases",r.database])}(e).child("documents").child(t).canonicalString()}function Uu(e){const t=M.fromString(e);return $($u(t)),t}function Ur(e,t){const n=Uu(t);if(n.get(1)!==e.databaseId.projectId)throw new w(g.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new w(g.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new I(Bu(n))}function ws(e,t){return Fu(e.databaseId,t)}function gf(e){const t=Uu(e);return t.length===4?M.emptyPath():Bu(t)}function Ao(e){return new M(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function Bu(e){return $(e.length>4&&e.get(4)==="documents"),e.popFirst(5)}function _f(e,t){let n;if("targetChange"in t){t.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:S()}(t.targetChange.targetChangeType||"NO_CHANGE"),s=t.targetChange.targetIds||[],i=function(c,l){return c.useProto3Json?($(l===void 0||typeof l=="string"),ot.fromBase64String(l||"")):($(l===void 0||l instanceof Uint8Array),ot.fromUint8Array(l||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(c){const l=c.code===void 0?g.UNKNOWN:ku(c.code);return new w(l,c.message||"")}(o);n=new Mu(r,s,i,a||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const s=Ur(e,r.document.name),i=se(r.document.updateTime),o=r.document.createTime?se(r.document.createTime):R.min(),a=new mt({mapValue:{fields:r.document.fields}}),u=nt.newFoundDocument(s,i,o,a),c=r.targetIds||[],l=r.removedTargetIds||[];n=new Pn(c,l,u.key,u)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const s=Ur(e,r.document),i=r.readTime?se(r.readTime):R.min(),o=nt.newNoDocument(s,i),a=r.removedTargetIds||[];n=new Pn([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const s=Ur(e,r.document),i=r.removedTargetIds||[];n=new Pn([],i,s,null)}else{if(!("filter"in t))return S();{t.filter;const r=t.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new uf(s,i),a=r.targetId;n=new xu(a,o)}}return n}function yf(e,t){return{documents:[ws(e,t.path)]}}function Ef(e,t){const n={structuredQuery:{}},r=t.path;t.collectionGroup!==null?(n.parent=ws(e,r),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=ws(e,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const s=function(u){if(u.length!==0)return ju(ft.create(u,"and"))}(t.filters);s&&(n.structuredQuery.where=s);const i=function(u){if(u.length!==0)return u.map(c=>function(h){return{field:Xt(h.field),direction:vf(h.dir)}}(c))}(t.orderBy);i&&(n.structuredQuery.orderBy=i);const o=Es(e,t.limit);return o!==null&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(t.startAt)),t.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(t.endAt)),n}function Tf(e){let t=gf(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){$(r===1);const l=n.from[0];l.allDescendants?s=l.collectionId:t=t.child(l.collectionId)}let i=[];n.where&&(i=function(h){const f=qu(h);return f instanceof ft&&yu(f)?f.getFilters():[f]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(f=>function(_){return new Hn(Yt(_.field),function(v){switch(v){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(_.direction))}(f))}(n.orderBy));let a=null;n.limit&&(a=function(h){let f;return f=typeof h=="object"?h.value:h,hr(f)?null:f}(n.limit));let u=null;n.startAt&&(u=function(h){const f=!!h.before,m=h.values||[];return new zn(m,f)}(n.startAt));let c=null;return n.endAt&&(c=function(h){const f=!h.before,m=h.values||[];return new zn(m,f)}(n.endAt)),$d(t,s,o,i,a,"F",u,c)}function wf(e,t){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return S()}}(t.purpose);return n==null?null:{"goog-listen-tags":n}}function qu(e){return e.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Yt(n.unaryFilter.field);return j.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Yt(n.unaryFilter.field);return j.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Yt(n.unaryFilter.field);return j.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Yt(n.unaryFilter.field);return j.create(o,"!=",{nullValue:"NULL_VALUE"});default:return S()}}(e):e.fieldFilter!==void 0?function(n){return j.create(Yt(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return S()}}(n.fieldFilter.op),n.fieldFilter.value)}(e):e.compositeFilter!==void 0?function(n){return ft.create(n.compositeFilter.filters.map(r=>qu(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return S()}}(n.compositeFilter.op))}(e):S()}function vf(e){return df[e]}function If(e){return ff[e]}function Af(e){return pf[e]}function Xt(e){return{fieldPath:e.canonicalString()}}function Yt(e){return rt.fromServerFormat(e.fieldPath)}function ju(e){return e instanceof j?function(n){if(n.op==="=="){if(co(n.value))return{unaryFilter:{field:Xt(n.field),op:"IS_NAN"}};if(uo(n.value))return{unaryFilter:{field:Xt(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(co(n.value))return{unaryFilter:{field:Xt(n.field),op:"IS_NOT_NAN"}};if(uo(n.value))return{unaryFilter:{field:Xt(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Xt(n.field),op:If(n.op),value:n.value}}}(e):e instanceof ft?function(n){const r=n.getFilters().map(s=>ju(s));return r.length===1?r[0]:{compositeFilter:{op:Af(n.op),filters:r}}}(e):S()}function $u(e){return e.length>=4&&e.get(0)==="projects"&&e.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(t,n,r,s,i=R.min(),o=R.min(),a=ot.EMPTY_BYTE_STRING,u=null){this.target=t,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=u}withSequenceNumber(t){return new Vt(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,n){return new Vt(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Vt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Vt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rf{constructor(t){this.ut=t}}function Sf(e){const t=Tf({parent:e.parent,structuredQuery:e.structuredQuery});return e.limitType==="LAST"?gs(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cf{constructor(){this.on=new Pf}addToCollectionParentIndex(t,n){return this.on.add(n),p.resolve()}getCollectionParents(t,n){return p.resolve(this.on.getEntries(n))}addFieldIndex(t,n){return p.resolve()}deleteFieldIndex(t,n){return p.resolve()}deleteAllFieldIndexes(t){return p.resolve()}createTargetIndexes(t,n){return p.resolve()}getDocumentsMatchingTarget(t,n){return p.resolve(null)}getIndexType(t,n){return p.resolve(0)}getFieldIndexes(t,n){return p.resolve([])}getNextCollectionGroupToUpdate(t){return p.resolve(null)}getMinOffset(t,n){return p.resolve(Nt.min())}getMinOffsetFromCollectionGroup(t,n){return p.resolve(Nt.min())}updateCollectionGroup(t,n,r){return p.resolve()}updateIndexEntries(t,n){return p.resolve()}}class Pf{constructor(){this.index={}}add(t){const n=t.lastSegment(),r=t.popLast(),s=this.index[n]||new Z(M.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(t){const n=t.lastSegment(),r=t.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(t){return(this.index[t]||new Z(M.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class de{constructor(t){this.xn=t}next(){return this.xn+=2,this.xn}static On(){return new de(0)}static Nn(){return new de(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vf{constructor(){this.changes=new Te(t=>t.toString(),(t,n)=>t.isEqual(n)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,nt.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?p.resolve(r):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Df{constructor(t,n){this.overlayedDocument=t,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bf{constructor(t,n,r,s){this.remoteDocumentCache=t,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(t,n){let r=null;return this.documentOverlayCache.getOverlay(t,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(t,n))).next(s=>(r!==null&&Le(r.mutation,s,Pt.empty(),K.now()),s))}getDocuments(t,n){return this.remoteDocumentCache.getEntries(t,n).next(r=>this.getLocalViewOfDocuments(t,r,b()).next(()=>r))}getLocalViewOfDocuments(t,n,r=b()){const s=Bt();return this.populateOverlays(t,s,n).next(()=>this.computeViews(t,n,s,r).next(i=>{let o=De();return i.forEach((a,u)=>{o=o.insert(a,u.overlayedDocument)}),o}))}getOverlayedDocuments(t,n){const r=Bt();return this.populateOverlays(t,r,n).next(()=>this.computeViews(t,n,r,b()))}populateOverlays(t,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(t,s).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(t,n,r,s){let i=kt();const o=Me(),a=function(){return Me()}();return n.forEach((u,c)=>{const l=r.get(c.key);s.has(c.key)&&(l===void 0||l.mutation instanceof mr)?i=i.insert(c.key,c):l!==void 0?(o.set(c.key,l.mutation.getFieldMask()),Le(l.mutation,c,l.mutation.getFieldMask(),K.now())):o.set(c.key,Pt.empty())}),this.recalculateAndSaveOverlays(t,i).next(u=>(u.forEach((c,l)=>o.set(c,l)),n.forEach((c,l)=>{var h;return a.set(c,new Df(l,(h=o.get(c))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(t,n){const r=Me();let s=new F((o,a)=>o-a),i=b();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,n).next(o=>{for(const a of o)a.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let l=r.get(u)||Pt.empty();l=a.applyToLocalView(c,l),r.set(u,l);const h=(s.get(a.batchId)||b()).add(u);s=s.insert(a.batchId,h)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const u=a.getNext(),c=u.key,l=u.value,h=Su();l.forEach(f=>{if(!i.has(f)){const m=Nu(n.get(f),r.get(f));m!==null&&h.set(f,m),i=i.add(f)}}),o.push(this.documentOverlayCache.saveOverlays(t,c,h))}return p.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,n){return this.remoteDocumentCache.getEntries(t,n).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,n,r,s){return function(o){return I.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(t,n.path):vu(n)?this.getDocumentsMatchingCollectionGroupQuery(t,n,r,s):this.getDocumentsMatchingCollectionQuery(t,n,r,s)}getNextDocuments(t,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,n,r.largestBatchId,s-i.size):p.resolve(Bt());let a=-1,u=i;return o.next(c=>p.forEach(c,(l,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(l)?p.resolve():this.remoteDocumentCache.getEntry(t,l).next(f=>{u=u.insert(l,f)}))).next(()=>this.populateOverlays(t,c,i)).next(()=>this.computeViews(t,u,c,b())).next(l=>({batchId:a,changes:Qd(l)})))})}getDocumentsMatchingDocumentQuery(t,n){return this.getDocument(t,new I(n)).next(r=>{let s=De();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(t,n,r,s){const i=n.collectionGroup;let o=De();return this.indexManager.getCollectionParents(t,i).next(a=>p.forEach(a,u=>{const c=function(h,f){return new hn(f,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(n,u.child(i));return this.getDocumentsMatchingCollectionQuery(t,c,r,s).next(l=>{l.forEach((h,f)=>{o=o.insert(h,f)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(t,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(t,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(t,n,r,i,s))).next(o=>{i.forEach((u,c)=>{const l=c.getKey();o.get(l)===null&&(o=o.insert(l,nt.newInvalidDocument(l)))});let a=De();return o.forEach((u,c)=>{const l=i.get(u);l!==void 0&&Le(l.mutation,c,Pt.empty(),K.now()),fr(n,c)&&(a=a.insert(u,c))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nf{constructor(t){this.serializer=t,this.ur=new Map,this.cr=new Map}getBundleMetadata(t,n){return p.resolve(this.ur.get(n))}saveBundleMetadata(t,n){return this.ur.set(n.id,function(s){return{id:s.id,version:s.version,createTime:se(s.createTime)}}(n)),p.resolve()}getNamedQuery(t,n){return p.resolve(this.cr.get(n))}saveNamedQuery(t,n){return this.cr.set(n.name,function(s){return{name:s.name,query:Sf(s.bundledQuery),readTime:se(s.readTime)}}(n)),p.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Of{constructor(){this.overlays=new F(I.comparator),this.lr=new Map}getOverlay(t,n){return p.resolve(this.overlays.get(n))}getOverlays(t,n){const r=Bt();return p.forEach(n,s=>this.getOverlay(t,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(t,n,r){return r.forEach((s,i)=>{this.lt(t,n,i)}),p.resolve()}removeOverlaysForBatchId(t,n,r){const s=this.lr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.lr.delete(r)),p.resolve()}getOverlaysForCollection(t,n,r){const s=Bt(),i=n.length+1,o=new I(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const u=a.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===i&&u.largestBatchId>r&&s.set(u.getKey(),u)}return p.resolve(s)}getOverlaysForCollectionGroup(t,n,r,s){let i=new F((c,l)=>c-l);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let l=i.get(c.largestBatchId);l===null&&(l=Bt(),i=i.insert(c.largestBatchId,l)),l.set(c.getKey(),c)}}const a=Bt(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,l)=>a.set(c,l)),!(a.size()>=s)););return p.resolve(a)}lt(t,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.lr.get(s.largestBatchId).delete(r.key);this.lr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new af(n,r));let i=this.lr.get(n);i===void 0&&(i=b(),this.lr.set(n,i)),this.lr.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class di{constructor(){this.hr=new Z(G.Pr),this.Ir=new Z(G.Tr)}isEmpty(){return this.hr.isEmpty()}addReference(t,n){const r=new G(t,n);this.hr=this.hr.add(r),this.Ir=this.Ir.add(r)}Er(t,n){t.forEach(r=>this.addReference(r,n))}removeReference(t,n){this.dr(new G(t,n))}Ar(t,n){t.forEach(r=>this.removeReference(r,n))}Rr(t){const n=new I(new M([])),r=new G(n,t),s=new G(n,t+1),i=[];return this.Ir.forEachInRange([r,s],o=>{this.dr(o),i.push(o.key)}),i}Vr(){this.hr.forEach(t=>this.dr(t))}dr(t){this.hr=this.hr.delete(t),this.Ir=this.Ir.delete(t)}mr(t){const n=new I(new M([])),r=new G(n,t),s=new G(n,t+1);let i=b();return this.Ir.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(t){const n=new G(t,0),r=this.hr.firstAfterOrEqual(n);return r!==null&&t.isEqual(r.key)}}class G{constructor(t,n){this.key=t,this.gr=n}static Pr(t,n){return I.comparator(t.key,n.key)||O(t.gr,n.gr)}static Tr(t,n){return O(t.gr,n.gr)||I.comparator(t.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kf{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.mutationQueue=[],this.pr=1,this.yr=new Z(G.Pr)}checkEmpty(t){return p.resolve(this.mutationQueue.length===0)}addMutationBatch(t,n,r,s){const i=this.pr;this.pr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new of(i,n,r,s);this.mutationQueue.push(o);for(const a of s)this.yr=this.yr.add(new G(a.key,i)),this.indexManager.addToCollectionParentIndex(t,a.key.path.popLast());return p.resolve(o)}lookupMutationBatch(t,n){return p.resolve(this.wr(n))}getNextMutationBatchAfterBatchId(t,n){const r=n+1,s=this.Sr(r),i=s<0?0:s;return p.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return p.resolve(this.mutationQueue.length===0?-1:this.pr-1)}getAllMutationBatches(t){return p.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const r=new G(n,0),s=new G(n,Number.POSITIVE_INFINITY),i=[];return this.yr.forEachInRange([r,s],o=>{const a=this.wr(o.gr);i.push(a)}),p.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,n){let r=new Z(O);return n.forEach(s=>{const i=new G(s,0),o=new G(s,Number.POSITIVE_INFINITY);this.yr.forEachInRange([i,o],a=>{r=r.add(a.gr)})}),p.resolve(this.br(r))}getAllMutationBatchesAffectingQuery(t,n){const r=n.path,s=r.length+1;let i=r;I.isDocumentKey(i)||(i=i.child(""));const o=new G(new I(i),0);let a=new Z(O);return this.yr.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===s&&(a=a.add(u.gr)),!0)},o),p.resolve(this.br(a))}br(t){const n=[];return t.forEach(r=>{const s=this.wr(r);s!==null&&n.push(s)}),n}removeMutationBatch(t,n){$(this.Dr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.yr;return p.forEach(n.mutations,s=>{const i=new G(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)}).next(()=>{this.yr=r})}Fn(t){}containsKey(t,n){const r=new G(n,0),s=this.yr.firstAfterOrEqual(r);return p.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,p.resolve()}Dr(t,n){return this.Sr(t)}Sr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}wr(t){const n=this.Sr(t);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xf{constructor(t){this.Cr=t,this.docs=function(){return new F(I.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.Cr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const r=this.docs.get(n);return p.resolve(r?r.document.mutableCopy():nt.newInvalidDocument(n))}getEntries(t,n){let r=kt();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():nt.newInvalidDocument(s))}),p.resolve(r)}getDocumentsMatchingQuery(t,n,r,s){let i=kt();const o=n.path,a=new I(o.child("")),u=this.docs.getIteratorFrom(a);for(;u.hasNext();){const{key:c,value:{document:l}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||Sd(Rd(l),r)<=0||(s.has(l.key)||fr(n,l))&&(i=i.insert(l.key,l.mutableCopy()))}return p.resolve(i)}getAllFromCollectionGroup(t,n,r,s){S()}vr(t,n){return p.forEach(this.docs,r=>n(r))}newChangeBuffer(t){return new Mf(this)}getSize(t){return p.resolve(this.size)}}class Mf extends Vf{constructor(t){super(),this._r=t}applyChanges(t){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this._r.addEntry(t,s)):this._r.removeEntry(r)}),p.waitFor(n)}getFromCache(t,n){return this._r.getEntry(t,n)}getAllFromCache(t,n){return this._r.getEntries(t,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lf{constructor(t){this.persistence=t,this.Fr=new Te(n=>oi(n),ai),this.lastRemoteSnapshotVersion=R.min(),this.highestTargetId=0,this.Mr=0,this.Or=new di,this.targetCount=0,this.Nr=de.On()}forEachTarget(t,n){return this.Fr.forEach((r,s)=>n(s)),p.resolve()}getLastRemoteSnapshotVersion(t){return p.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return p.resolve(this.Mr)}allocateTargetId(t){return this.highestTargetId=this.Nr.next(),p.resolve(this.highestTargetId)}setTargetsMetadata(t,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Mr&&(this.Mr=n),p.resolve()}kn(t){this.Fr.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.Nr=new de(n),this.highestTargetId=n),t.sequenceNumber>this.Mr&&(this.Mr=t.sequenceNumber)}addTargetData(t,n){return this.kn(n),this.targetCount+=1,p.resolve()}updateTargetData(t,n){return this.kn(n),p.resolve()}removeTargetData(t,n){return this.Fr.delete(n.target),this.Or.Rr(n.targetId),this.targetCount-=1,p.resolve()}removeTargets(t,n,r){let s=0;const i=[];return this.Fr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Fr.delete(o),i.push(this.removeMatchingKeysForTargetId(t,a.targetId)),s++)}),p.waitFor(i).next(()=>s)}getTargetCount(t){return p.resolve(this.targetCount)}getTargetData(t,n){const r=this.Fr.get(n)||null;return p.resolve(r)}addMatchingKeys(t,n,r){return this.Or.Er(n,r),p.resolve()}removeMatchingKeys(t,n,r){this.Or.Ar(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(t,o))}),p.waitFor(i)}removeMatchingKeysForTargetId(t,n){return this.Or.Rr(n),p.resolve()}getMatchingKeysForTargetId(t,n){const r=this.Or.mr(n);return p.resolve(r)}containsKey(t,n){return p.resolve(this.Or.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ff{constructor(t,n){this.Br={},this.overlays={},this.Lr=new ni(0),this.kr=!1,this.kr=!0,this.referenceDelegate=t(this),this.qr=new Lf(this),this.indexManager=new Cf,this.remoteDocumentCache=function(s){return new xf(s)}(r=>this.referenceDelegate.Qr(r)),this.serializer=new Rf(n),this.Kr=new Nf(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.kr=!1,Promise.resolve()}get started(){return this.kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new Of,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let r=this.Br[t.toKey()];return r||(r=new kf(n,this.referenceDelegate),this.Br[t.toKey()]=r),r}getTargetCache(){return this.qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Kr}runTransaction(t,n,r){T("MemoryPersistence","Starting transaction:",t);const s=new Uf(this.Lr.next());return this.referenceDelegate.$r(),r(s).next(i=>this.referenceDelegate.Ur(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Wr(t,n){return p.or(Object.values(this.Br).map(r=>()=>r.containsKey(t,n)))}}class Uf extends Pd{constructor(t){super(),this.currentSequenceNumber=t}}class fi{constructor(t){this.persistence=t,this.Gr=new di,this.zr=null}static jr(t){return new fi(t)}get Hr(){if(this.zr)return this.zr;throw S()}addReference(t,n,r){return this.Gr.addReference(r,n),this.Hr.delete(r.toString()),p.resolve()}removeReference(t,n,r){return this.Gr.removeReference(r,n),this.Hr.add(r.toString()),p.resolve()}markPotentiallyOrphaned(t,n){return this.Hr.add(n.toString()),p.resolve()}removeTarget(t,n){this.Gr.Rr(n.targetId).forEach(s=>this.Hr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,n.targetId).next(s=>{s.forEach(i=>this.Hr.add(i.toString()))}).next(()=>r.removeTargetData(t,n))}$r(){this.zr=new Set}Ur(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return p.forEach(this.Hr,r=>{const s=I.fromPath(r);return this.Jr(t,s).next(i=>{i||n.removeEntry(s,R.min())})}).next(()=>(this.zr=null,n.apply(t)))}updateLimboDocument(t,n){return this.Jr(t,n).next(r=>{r?this.Hr.delete(n.toString()):this.Hr.add(n.toString())})}Qr(t){return 0}Jr(t,n){return p.or([()=>p.resolve(this.Gr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.Wr(t,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi{constructor(t,n,r,s){this.targetId=t,this.fromCache=n,this.ki=r,this.qi=s}static Qi(t,n){let r=b(),s=b();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new pi(t,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bf{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qf{constructor(){this.Ki=!1,this.$i=!1,this.Ui=100,this.Wi=8}initialize(t,n){this.Gi=t,this.indexManager=n,this.Ki=!0}getDocumentsMatchingQuery(t,n,r,s){const i={result:null};return this.zi(t,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.ji(t,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new Bf;return this.Hi(t,n,o).next(a=>{if(i.result=a,this.$i)return this.Ji(t,n,o,a.size)})}).next(()=>i.result)}Ji(t,n,r,s){return r.documentReadCount<this.Ui?(Se()<=D.DEBUG&&T("QueryEngine","SDK will not create cache indexes for query:",Jt(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Ui,"documents"),p.resolve()):(Se()<=D.DEBUG&&T("QueryEngine","Query:",Jt(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Wi*s?(Se()<=D.DEBUG&&T("QueryEngine","The SDK decides to create cache indexes for query:",Jt(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Et(n))):p.resolve())}zi(t,n){if(po(n))return p.resolve(null);let r=Et(n);return this.indexManager.getIndexType(t,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=gs(n,null,"F"),r=Et(n)),this.indexManager.getDocumentsMatchingTarget(t,r).next(i=>{const o=b(...i);return this.Gi.getDocuments(t,o).next(a=>this.indexManager.getMinOffset(t,r).next(u=>{const c=this.Yi(n,a);return this.Zi(n,c,o,u.readTime)?this.zi(t,gs(n,null,"F")):this.Xi(t,c,n,u)}))})))}ji(t,n,r,s){return po(n)||s.isEqual(R.min())?p.resolve(null):this.Gi.getDocuments(t,r).next(i=>{const o=this.Yi(n,i);return this.Zi(n,o,r,s)?p.resolve(null):(Se()<=D.DEBUG&&T("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Jt(n)),this.Xi(t,o,n,Ad(s,-1)).next(a=>a))})}Yi(t,n){let r=new Z(Au(t));return n.forEach((s,i)=>{fr(t,i)&&(r=r.add(i))}),r}Zi(t,n,r,s){if(t.limit===null)return!1;if(r.size!==n.size)return!0;const i=t.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Hi(t,n,r){return Se()<=D.DEBUG&&T("QueryEngine","Using full collection scan to execute query:",Jt(n)),this.Gi.getDocumentsMatchingQuery(t,n,Nt.min(),r)}Xi(t,n,r,s){return this.Gi.getDocumentsMatchingQuery(t,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jf{constructor(t,n,r,s){this.persistence=t,this.es=n,this.serializer=s,this.ts=new F(O),this.ns=new Te(i=>oi(i),ai),this.rs=new Map,this.ss=t.getRemoteDocumentCache(),this.qr=t.getTargetCache(),this.Kr=t.getBundleCache(),this.os(r)}os(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new bf(this.ss,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ss.setIndexManager(this.indexManager),this.es.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>t.collect(n,this.ts))}}function $f(e,t,n,r){return new jf(e,t,n,r)}async function zu(e,t){const n=N(e);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.os(t),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],a=[];let u=b();for(const c of s){o.push(c.batchId);for(const l of c.mutations)u=u.add(l.key)}for(const c of i){a.push(c.batchId);for(const l of c.mutations)u=u.add(l.key)}return n.localDocuments.getDocuments(r,u).next(c=>({_s:c,removedBatchIds:o,addedBatchIds:a}))})})}function Hu(e){const t=N(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",n=>t.qr.getLastRemoteSnapshotVersion(n))}function zf(e,t){const n=N(e),r=t.snapshotVersion;let s=n.ts;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.ss.newChangeBuffer({trackRemovals:!0});s=n.ts;const a=[];t.targetChanges.forEach((l,h)=>{const f=s.get(h);if(!f)return;a.push(n.qr.removeMatchingKeys(i,l.removedDocuments,h).next(()=>n.qr.addMatchingKeys(i,l.addedDocuments,h)));let m=f.withSequenceNumber(i.currentSequenceNumber);t.targetMismatches.get(h)!==null?m=m.withResumeToken(ot.EMPTY_BYTE_STRING,R.min()).withLastLimboFreeSnapshotVersion(R.min()):l.resumeToken.approximateByteSize()>0&&(m=m.withResumeToken(l.resumeToken,r)),s=s.insert(h,m),function(y,v,V){return y.resumeToken.approximateByteSize()===0||v.snapshotVersion.toMicroseconds()-y.snapshotVersion.toMicroseconds()>=3e8?!0:V.addedDocuments.size+V.modifiedDocuments.size+V.removedDocuments.size>0}(f,m,l)&&a.push(n.qr.updateTargetData(i,m))});let u=kt(),c=b();if(t.documentUpdates.forEach(l=>{t.resolvedLimboDocuments.has(l)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,l))}),a.push(Hf(i,o,t.documentUpdates).next(l=>{u=l.us,c=l.cs})),!r.isEqual(R.min())){const l=n.qr.getLastRemoteSnapshotVersion(i).next(h=>n.qr.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(l)}return p.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,u,c)).next(()=>u)}).then(i=>(n.ts=s,i))}function Hf(e,t,n){let r=b(),s=b();return n.forEach(i=>r=r.add(i)),t.getEntries(e,r).next(i=>{let o=kt();return n.forEach((a,u)=>{const c=i.get(a);u.isFoundDocument()!==c.isFoundDocument()&&(s=s.add(a)),u.isNoDocument()&&u.version.isEqual(R.min())?(t.removeEntry(a,u.readTime),o=o.insert(a,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(t.addEntry(u),o=o.insert(a,u)):T("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",u.version)}),{us:o,cs:s}})}function Gf(e,t){const n=N(e);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.qr.getTargetData(r,t).next(i=>i?(s=i,p.resolve(s)):n.qr.allocateTargetId(r).next(o=>(s=new Vt(t,o,"TargetPurposeListen",r.currentSequenceNumber),n.qr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.ts.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.ts=n.ts.insert(r.targetId,r),n.ns.set(t,r.targetId)),r})}async function vs(e,t,n){const r=N(e),s=r.ts.get(t),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!cn(o))throw o;T("LocalStore",`Failed to update sequence numbers for target ${t}: ${o}`)}r.ts=r.ts.remove(t),r.ns.delete(s.target)}function Ro(e,t,n){const r=N(e);let s=R.min(),i=b();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,l){const h=N(u),f=h.ns.get(l);return f!==void 0?p.resolve(h.ts.get(f)):h.qr.getTargetData(c,l)}(r,o,Et(t)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.qr.getMatchingKeysForTargetId(o,a.targetId).next(u=>{i=u})}).next(()=>r.es.getDocumentsMatchingQuery(o,t,n?s:R.min(),n?i:b())).next(a=>(Kf(r,Hd(t),a),{documents:a,ls:i})))}function Kf(e,t,n){let r=e.rs.get(t)||R.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),e.rs.set(t,r)}class So{constructor(){this.activeTargetIds=Xd()}ds(t){this.activeTargetIds=this.activeTargetIds.add(t)}As(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Es(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Qf{constructor(){this.eo=new So,this.no={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,r){}addLocalQueryTarget(t){return this.eo.ds(t),this.no[t]||"not-current"}updateQueryState(t,n,r){this.no[t]=n}removeLocalQueryTarget(t){this.eo.As(t)}isLocalQueryTarget(t){return this.eo.activeTargetIds.has(t)}clearQueryState(t){delete this.no[t]}getAllActiveQueryTargets(){return this.eo.activeTargetIds}isActiveQueryTarget(t){return this.eo.activeTargetIds.has(t)}start(){return this.eo=new So,Promise.resolve()}handleUserChange(t,n,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wf{ro(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Co{constructor(){this.io=()=>this.so(),this.oo=()=>this._o(),this.ao=[],this.uo()}ro(t){this.ao.push(t)}shutdown(){window.removeEventListener("online",this.io),window.removeEventListener("offline",this.oo)}uo(){window.addEventListener("online",this.io),window.addEventListener("offline",this.oo)}so(){T("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.ao)t(0)}_o(){T("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.ao)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Sn=null;function Br(){return Sn===null?Sn=function(){return 268435456+Math.round(2147483648*Math.random())}():Sn++,"0x"+Sn.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jf={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xf{constructor(t){this.co=t.co,this.lo=t.lo}ho(t){this.Po=t}Io(t){this.To=t}onMessage(t){this.Eo=t}close(){this.lo()}send(t){this.co(t)}Ao(){this.Po()}Ro(t){this.To(t)}Vo(t){this.Eo(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tt="WebChannelConnection";class Yf extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.mo=r+"://"+n.host,this.fo=`projects/${s}/databases/${i}`,this.po=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get yo(){return!1}wo(n,r,s,i,o){const a=Br(),u=this.So(n,r);T("RestConnection",`Sending RPC '${n}' ${a}:`,u,s);const c={"google-cloud-resource-prefix":this.fo,"x-goog-request-params":this.po};return this.bo(c,i,o),this.Do(n,u,c,s).then(l=>(T("RestConnection",`Received RPC '${n}' ${a}: `,l),l),l=>{throw ue("RestConnection",`RPC '${n}' ${a} failed with error: `,l,"url: ",u,"request:",s),l})}Co(n,r,s,i,o,a){return this.wo(n,r,s,i,o)}bo(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ee}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}So(n,r){const s=Jf[n];return`${this.mo}/v1/${r}:${s}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Do(t,n,r,s){const i=Br();return new Promise((o,a)=>{const u=new dd;u.setWithCredentials(!0),u.listenOnce(ld.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case Lr.NO_ERROR:const l=u.getResponseJson();T(tt,`XHR for RPC '${t}' ${i} received:`,JSON.stringify(l)),o(l);break;case Lr.TIMEOUT:T(tt,`RPC '${t}' ${i} timed out`),a(new w(g.DEADLINE_EXCEEDED,"Request time out"));break;case Lr.HTTP_ERROR:const h=u.getStatus();if(T(tt,`RPC '${t}' ${i} failed with status:`,h,"response text:",u.getResponseText()),h>0){let f=u.getResponseJson();Array.isArray(f)&&(f=f[0]);const m=f==null?void 0:f.error;if(m&&m.status&&m.message){const _=function(v){const V=v.toLowerCase().replace(/_/g,"-");return Object.values(g).indexOf(V)>=0?V:g.UNKNOWN}(m.status);a(new w(_,m.message))}else a(new w(g.UNKNOWN,"Server responded with status "+u.getStatus()))}else a(new w(g.UNAVAILABLE,"Connection failed."));break;default:S()}}finally{T(tt,`RPC '${t}' ${i} completed.`)}});const c=JSON.stringify(s);T(tt,`RPC '${t}' ${i} sending request:`,s),u.send(n,"POST",c,r,15)})}vo(t,n,r){const s=Br(),i=[this.mo,"/","google.firestore.v1.Firestore","/",t,"/channel"],o=ud(),a=cd(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(u.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(u.useFetchStreams=!0),this.bo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const l=i.join("");T(tt,`Creating RPC '${t}' stream ${s}: ${l}`,u);const h=o.createWebChannel(l,u);let f=!1,m=!1;const _=new Xf({co:v=>{m?T(tt,`Not sending because RPC '${t}' stream ${s} is closed:`,v):(f||(T(tt,`Opening RPC '${t}' stream ${s} transport.`),h.open(),f=!0),T(tt,`RPC '${t}' stream ${s} sending:`,v),h.send(v))},lo:()=>h.close()}),y=(v,V,U)=>{v.listen(V,H=>{try{U(H)}catch(ht){setTimeout(()=>{throw ht},0)}})};return y(h,In.EventType.OPEN,()=>{m||T(tt,`RPC '${t}' stream ${s} transport opened.`)}),y(h,In.EventType.CLOSE,()=>{m||(m=!0,T(tt,`RPC '${t}' stream ${s} transport closed`),_.Ro())}),y(h,In.EventType.ERROR,v=>{m||(m=!0,ue(tt,`RPC '${t}' stream ${s} transport errored:`,v),_.Ro(new w(g.UNAVAILABLE,"The operation could not be completed")))}),y(h,In.EventType.MESSAGE,v=>{var V;if(!m){const U=v.data[0];$(!!U);const H=U,ht=H.error||((V=H[0])===null||V===void 0?void 0:V.error);if(ht){T(tt,`RPC '${t}' stream ${s} received error:`,ht);const _n=ht.status;let Qt=function(kc){const ki=B[kc];if(ki!==void 0)return ku(ki)}(_n),yn=ht.message;Qt===void 0&&(Qt=g.INTERNAL,yn="Unknown error status: "+_n+" with message "+ht.message),m=!0,_.Ro(new w(Qt,yn)),h.close()}else T(tt,`RPC '${t}' stream ${s} received:`,U),_.Vo(U)}}),y(a,hd.STAT_EVENT,v=>{v.stat===no.PROXY?T(tt,`RPC '${t}' stream ${s} detected buffering proxy`):v.stat===no.NOPROXY&&T(tt,`RPC '${t}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{_.Ao()},0),_}}function qr(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _r(e){return new mf(e,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gu{constructor(t,n,r=1e3,s=1.5,i=6e4){this.si=t,this.timerId=n,this.Fo=r,this.Mo=s,this.xo=i,this.Oo=0,this.No=null,this.Bo=Date.now(),this.reset()}reset(){this.Oo=0}Lo(){this.Oo=this.xo}ko(t){this.cancel();const n=Math.floor(this.Oo+this.qo()),r=Math.max(0,Date.now()-this.Bo),s=Math.max(0,n-r);s>0&&T("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Oo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.No=this.si.enqueueAfterDelay(this.timerId,s,()=>(this.Bo=Date.now(),t())),this.Oo*=this.Mo,this.Oo<this.Fo&&(this.Oo=this.Fo),this.Oo>this.xo&&(this.Oo=this.xo)}Qo(){this.No!==null&&(this.No.skipDelay(),this.No=null)}cancel(){this.No!==null&&(this.No.cancel(),this.No=null)}qo(){return(Math.random()-.5)*this.Oo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zf{constructor(t,n,r,s,i,o,a,u){this.si=t,this.Ko=r,this.$o=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=u,this.state=0,this.Uo=0,this.Wo=null,this.Go=null,this.stream=null,this.zo=new Gu(t,n)}jo(){return this.state===1||this.state===5||this.Ho()}Ho(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Jo()}async stop(){this.jo()&&await this.close(0)}Yo(){this.state=0,this.zo.reset()}Zo(){this.Ho()&&this.Wo===null&&(this.Wo=this.si.enqueueAfterDelay(this.Ko,6e4,()=>this.Xo()))}e_(t){this.t_(),this.stream.send(t)}async Xo(){if(this.Ho())return this.close(0)}t_(){this.Wo&&(this.Wo.cancel(),this.Wo=null)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}async close(t,n){this.t_(),this.n_(),this.zo.cancel(),this.Uo++,t!==4?this.zo.reset():n&&n.code===g.RESOURCE_EXHAUSTED?(St(n.toString()),St("Using maximum backoff delay to prevent overloading the backend."),this.zo.Lo()):n&&n.code===g.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.r_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Io(n)}r_(){}auth(){this.state=1;const t=this.i_(this.Uo),n=this.Uo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Uo===n&&this.s_(r,s)},r=>{t(()=>{const s=new w(g.UNKNOWN,"Fetching auth token failed: "+r.message);return this.o_(s)})})}s_(t,n){const r=this.i_(this.Uo);this.stream=this.__(t,n),this.stream.ho(()=>{r(()=>(this.state=2,this.Go=this.si.enqueueAfterDelay(this.$o,1e4,()=>(this.Ho()&&(this.state=3),Promise.resolve())),this.listener.ho()))}),this.stream.Io(s=>{r(()=>this.o_(s))}),this.stream.onMessage(s=>{r(()=>this.onMessage(s))})}Jo(){this.state=5,this.zo.ko(async()=>{this.state=0,this.start()})}o_(t){return T("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}i_(t){return n=>{this.si.enqueueAndForget(()=>this.Uo===t?n():(T("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class tp extends Zf{constructor(t,n,r,s,i,o){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}__(t,n){return this.connection.vo("Listen",t,n)}onMessage(t){this.zo.reset();const n=_f(this.serializer,t),r=function(i){if(!("targetChange"in i))return R.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?R.min():o.readTime?se(o.readTime):R.min()}(t);return this.listener.a_(n,r)}u_(t){const n={};n.database=Ao(this.serializer),n.addTarget=function(i,o){let a;const u=o.target;if(a=ps(u)?{documents:yf(i,u)}:{query:Ef(i,u)},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=Lu(i,o.resumeToken);const c=Es(i,o.expectedCount);c!==null&&(a.expectedCount=c)}else if(o.snapshotVersion.compareTo(R.min())>0){a.readTime=Ts(i,o.snapshotVersion.toTimestamp());const c=Es(i,o.expectedCount);c!==null&&(a.expectedCount=c)}return a}(this.serializer,t);const r=wf(this.serializer,t);r&&(n.labels=r),this.e_(n)}c_(t){const n={};n.database=Ao(this.serializer),n.removeTarget=t,this.e_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ep extends class{}{constructor(t,n,r,s){super(),this.authCredentials=t,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.d_=!1}A_(){if(this.d_)throw new w(g.FAILED_PRECONDITION,"The client has already been terminated.")}wo(t,n,r){return this.A_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,i])=>this.connection.wo(t,n,r,s,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===g.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new w(g.UNKNOWN,s.toString())})}Co(t,n,r,s){return this.A_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Co(t,n,r,i,o,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===g.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new w(g.UNKNOWN,i.toString())})}terminate(){this.d_=!0}}class np{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.V_=0,this.m_=null,this.f_=!0}g_(){this.V_===0&&(this.p_("Unknown"),this.m_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.m_=null,this.y_("Backend didn't respond within 10 seconds."),this.p_("Offline"),Promise.resolve())))}w_(t){this.state==="Online"?this.p_("Unknown"):(this.V_++,this.V_>=1&&(this.S_(),this.y_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.p_("Offline")))}set(t){this.S_(),this.V_=0,t==="Online"&&(this.f_=!1),this.p_(t)}p_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}y_(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.f_?(St(n),this.f_=!1):T("OnlineStateTracker",n)}S_(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rp{constructor(t,n,r,s,i){this.localStore=t,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.b_=[],this.D_=new Map,this.C_=new Set,this.v_=[],this.F_=i,this.F_.ro(o=>{r.enqueueAndForget(async()=>{pn(this)&&(T("RemoteStore","Restarting streams for network reachability change."),await async function(u){const c=N(u);c.C_.add(4),await fn(c),c.M_.set("Unknown"),c.C_.delete(4),await yr(c)}(this))})}),this.M_=new np(r,s)}}async function yr(e){if(pn(e))for(const t of e.v_)await t(!0)}async function fn(e){for(const t of e.v_)await t(!1)}function Ku(e,t){const n=N(e);n.D_.has(t.targetId)||(n.D_.set(t.targetId,t),_i(n)?gi(n):we(n).Ho()&&mi(n,t))}function Qu(e,t){const n=N(e),r=we(n);n.D_.delete(t),r.Ho()&&Wu(n,t),n.D_.size===0&&(r.Ho()?r.Zo():pn(n)&&n.M_.set("Unknown"))}function mi(e,t){if(e.x_.Oe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(R.min())>0){const n=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}we(e).u_(t)}function Wu(e,t){e.x_.Oe(t),we(e).c_(t)}function gi(e){e.x_=new hf({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),_t:t=>e.D_.get(t)||null,nt:()=>e.datastore.serializer.databaseId}),we(e).start(),e.M_.g_()}function _i(e){return pn(e)&&!we(e).jo()&&e.D_.size>0}function pn(e){return N(e).C_.size===0}function Ju(e){e.x_=void 0}async function sp(e){e.D_.forEach((t,n)=>{mi(e,t)})}async function ip(e,t){Ju(e),_i(e)?(e.M_.w_(t),gi(e)):e.M_.set("Unknown")}async function op(e,t,n){if(e.M_.set("Online"),t instanceof Mu&&t.state===2&&t.cause)try{await async function(s,i){const o=i.cause;for(const a of i.targetIds)s.D_.has(a)&&(await s.remoteSyncer.rejectListen(a,o),s.D_.delete(a),s.x_.removeTarget(a))}(e,t)}catch(r){T("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),r),await Po(e,r)}else if(t instanceof Pn?e.x_.$e(t):t instanceof xu?e.x_.Je(t):e.x_.Ge(t),!n.isEqual(R.min()))try{const r=await Hu(e.localStore);n.compareTo(r)>=0&&await function(i,o){const a=i.x_.it(o);return a.targetChanges.forEach((u,c)=>{if(u.resumeToken.approximateByteSize()>0){const l=i.D_.get(c);l&&i.D_.set(c,l.withResumeToken(u.resumeToken,o))}}),a.targetMismatches.forEach((u,c)=>{const l=i.D_.get(u);if(!l)return;i.D_.set(u,l.withResumeToken(ot.EMPTY_BYTE_STRING,l.snapshotVersion)),Wu(i,u);const h=new Vt(l.target,u,c,l.sequenceNumber);mi(i,h)}),i.remoteSyncer.applyRemoteEvent(a)}(e,n)}catch(r){T("RemoteStore","Failed to raise snapshot:",r),await Po(e,r)}}async function Po(e,t,n){if(!cn(t))throw t;e.C_.add(1),await fn(e),e.M_.set("Offline"),n||(n=()=>Hu(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{T("RemoteStore","Retrying IndexedDB access"),await n(),e.C_.delete(1),await yr(e)})}async function Vo(e,t){const n=N(e);n.asyncQueue.verifyOperationInProgress(),T("RemoteStore","RemoteStore received new credentials");const r=pn(n);n.C_.add(3),await fn(n),r&&n.M_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.C_.delete(3),await yr(n)}async function ap(e,t){const n=N(e);t?(n.C_.delete(2),await yr(n)):t||(n.C_.add(2),await fn(n),n.M_.set("Unknown"))}function we(e){return e.O_||(e.O_=function(n,r,s){const i=N(n);return i.A_(),new tp(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(e.datastore,e.asyncQueue,{ho:sp.bind(null,e),Io:ip.bind(null,e),a_:op.bind(null,e)}),e.v_.push(async t=>{t?(e.O_.Yo(),_i(e)?gi(e):e.M_.set("Unknown")):(await e.O_.stop(),Ju(e))})),e.O_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi{constructor(t,n,r,s,i){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new re,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,n,r,s,i){const o=Date.now()+r,a=new yi(t,n,o,s,i);return a.start(r),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new w(g.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Xu(e,t){if(St("AsyncQueue",`${t}: ${e}`),cn(e))return new w(g.UNAVAILABLE,`${t}: ${e}`);throw e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ie{constructor(t){this.comparator=t?(n,r)=>t(n,r)||I.comparator(n.key,r.key):(n,r)=>I.comparator(n.key,r.key),this.keyedMap=De(),this.sortedSet=new F(this.comparator)}static emptySet(t){return new ie(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const n=this.keyedMap.get(t);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((n,r)=>(t(n),!1))}add(t){const n=this.delete(t.key);return n.copy(n.keyedMap.insert(t.key,t),n.sortedSet.insert(t,null))}delete(t){const n=this.get(t);return n?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(n)):this}isEqual(t){if(!(t instanceof ie)||this.size!==t.size)return!1;const n=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const t=[];return this.forEach(n=>{t.push(n.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,n){const r=new ie;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Do{constructor(){this.B_=new F(I.comparator)}track(t){const n=t.doc.key,r=this.B_.get(n);r?t.type!==0&&r.type===3?this.B_=this.B_.insert(n,t):t.type===3&&r.type!==1?this.B_=this.B_.insert(n,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.B_=this.B_.insert(n,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.B_=this.B_.insert(n,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.B_=this.B_.remove(n):t.type===1&&r.type===2?this.B_=this.B_.insert(n,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.B_=this.B_.insert(n,{type:2,doc:t.doc}):S():this.B_=this.B_.insert(n,t)}L_(){const t=[];return this.B_.inorderTraversal((n,r)=>{t.push(r)}),t}}class fe{constructor(t,n,r,s,i,o,a,u,c){this.query=t,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(t,n,r,s,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new fe(t,n,ie.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&dr(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const n=this.docChanges,r=t.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class up{constructor(){this.k_=void 0,this.listeners=[]}}class cp{constructor(){this.queries=new Te(t=>Iu(t),dr),this.onlineState="Unknown",this.q_=new Set}}async function lp(e,t){const n=N(e),r=t.query;let s=!1,i=n.queries.get(r);if(i||(s=!0,i=new up),s)try{i.k_=await n.onListen(r)}catch(o){const a=Xu(o,`Initialization of query '${Jt(t.query)}' failed`);return void t.onError(a)}n.queries.set(r,i),i.listeners.push(t),t.Q_(n.onlineState),i.k_&&t.K_(i.k_)&&Ei(n)}async function hp(e,t){const n=N(e),r=t.query;let s=!1;const i=n.queries.get(r);if(i){const o=i.listeners.indexOf(t);o>=0&&(i.listeners.splice(o,1),s=i.listeners.length===0)}if(s)return n.queries.delete(r),n.onUnlisten(r)}function dp(e,t){const n=N(e);let r=!1;for(const s of t){const i=s.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.K_(s)&&(r=!0);o.k_=s}}r&&Ei(n)}function fp(e,t,n){const r=N(e),s=r.queries.get(t);if(s)for(const i of s.listeners)i.onError(n);r.queries.delete(t)}function Ei(e){e.q_.forEach(t=>{t.next()})}class pp{constructor(t,n,r){this.query=t,this.U_=n,this.W_=!1,this.G_=null,this.onlineState="Unknown",this.options=r||{}}K_(t){if(!this.options.includeMetadataChanges){const r=[];for(const s of t.docChanges)s.type!==3&&r.push(s);t=new fe(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let n=!1;return this.W_?this.z_(t)&&(this.U_.next(t),n=!0):this.j_(t,this.onlineState)&&(this.H_(t),n=!0),this.G_=t,n}onError(t){this.U_.error(t)}Q_(t){this.onlineState=t;let n=!1;return this.G_&&!this.W_&&this.j_(this.G_,t)&&(this.H_(this.G_),n=!0),n}j_(t,n){if(!t.fromCache)return!0;const r=n!=="Offline";return(!this.options.J_||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||n==="Offline")}z_(t){if(t.docChanges.length>0)return!0;const n=this.G_&&this.G_.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}H_(t){t=fe.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.W_=!0,this.U_.next(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yu{constructor(t){this.key=t}}class Zu{constructor(t){this.key=t}}class mp{constructor(t,n){this.query=t,this.ia=n,this.sa=null,this.hasCachedResults=!1,this.current=!1,this.oa=b(),this.mutatedKeys=b(),this._a=Au(t),this.aa=new ie(this._a)}get ua(){return this.ia}ca(t,n){const r=n?n.la:new Do,s=n?n.aa:this.aa;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const u=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,c=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal((l,h)=>{const f=s.get(l),m=fr(this.query,h)?h:null,_=!!f&&this.mutatedKeys.has(f.key),y=!!m&&(m.hasLocalMutations||this.mutatedKeys.has(m.key)&&m.hasCommittedMutations);let v=!1;f&&m?f.data.isEqual(m.data)?_!==y&&(r.track({type:3,doc:m}),v=!0):this.ha(f,m)||(r.track({type:2,doc:m}),v=!0,(u&&this._a(m,u)>0||c&&this._a(m,c)<0)&&(a=!0)):!f&&m?(r.track({type:0,doc:m}),v=!0):f&&!m&&(r.track({type:1,doc:f}),v=!0,(u||c)&&(a=!0)),v&&(m?(o=o.add(m),i=y?i.add(l):i.delete(l)):(o=o.delete(l),i=i.delete(l)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const l=this.query.limitType==="F"?o.last():o.first();o=o.delete(l.key),i=i.delete(l.key),r.track({type:1,doc:l})}return{aa:o,la:r,Zi:a,mutatedKeys:i}}ha(t,n){return t.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(t,n,r,s){const i=this.aa;this.aa=t.aa,this.mutatedKeys=t.mutatedKeys;const o=t.la.L_();o.sort((l,h)=>function(m,_){const y=v=>{switch(v){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return S()}};return y(m)-y(_)}(l.type,h.type)||this._a(l.doc,h.doc)),this.Pa(r),s=s!=null&&s;const a=n&&!s?this.Ia():[],u=this.oa.size===0&&this.current&&!s?1:0,c=u!==this.sa;return this.sa=u,o.length!==0||c?{snapshot:new fe(this.query,t.aa,i,o,t.mutatedKeys,u===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),Ta:a}:{Ta:a}}Q_(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({aa:this.aa,la:new Do,mutatedKeys:this.mutatedKeys,Zi:!1},!1)):{Ta:[]}}Ea(t){return!this.ia.has(t)&&!!this.aa.has(t)&&!this.aa.get(t).hasLocalMutations}Pa(t){t&&(t.addedDocuments.forEach(n=>this.ia=this.ia.add(n)),t.modifiedDocuments.forEach(n=>{}),t.removedDocuments.forEach(n=>this.ia=this.ia.delete(n)),this.current=t.current)}Ia(){if(!this.current)return[];const t=this.oa;this.oa=b(),this.aa.forEach(r=>{this.Ea(r.key)&&(this.oa=this.oa.add(r.key))});const n=[];return t.forEach(r=>{this.oa.has(r)||n.push(new Zu(r))}),this.oa.forEach(r=>{t.has(r)||n.push(new Yu(r))}),n}da(t){this.ia=t.ls,this.oa=b();const n=this.ca(t.documents);return this.applyChanges(n,!0)}Aa(){return fe.fromInitialDocuments(this.query,this.aa,this.mutatedKeys,this.sa===0,this.hasCachedResults)}}class gp{constructor(t,n,r){this.query=t,this.targetId=n,this.view=r}}class _p{constructor(t){this.key=t,this.Ra=!1}}class yp{constructor(t,n,r,s,i,o){this.localStore=t,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Va={},this.ma=new Te(a=>Iu(a),dr),this.fa=new Map,this.ga=new Set,this.pa=new F(I.comparator),this.ya=new Map,this.wa=new di,this.Sa={},this.ba=new Map,this.Da=de.Nn(),this.onlineState="Unknown",this.Ca=void 0}get isPrimaryClient(){return this.Ca===!0}}async function Ep(e,t){const n=Sp(e);let r,s;const i=n.ma.get(t);if(i)r=i.targetId,n.sharedClientState.addLocalQueryTarget(r),s=i.view.Aa();else{const o=await Gf(n.localStore,Et(t)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,s=await Tp(n,t,r,a==="current",o.resumeToken),n.isPrimaryClient&&Ku(n.remoteStore,o)}return s}async function Tp(e,t,n,r,s){e.va=(h,f,m)=>async function(y,v,V,U){let H=v.view.ca(V);H.Zi&&(H=await Ro(y.localStore,v.query,!1).then(({documents:yn})=>v.view.ca(yn,H)));const ht=U&&U.targetChanges.get(v.targetId),_n=U&&U.targetMismatches.get(v.targetId)!=null,Qt=v.view.applyChanges(H,y.isPrimaryClient,ht,_n);return No(y,v.targetId,Qt.Ta),Qt.snapshot}(e,h,f,m);const i=await Ro(e.localStore,t,!0),o=new mp(t,i.ls),a=o.ca(i.documents),u=dn.createSynthesizedTargetChangeForCurrentChange(n,r&&e.onlineState!=="Offline",s),c=o.applyChanges(a,e.isPrimaryClient,u);No(e,n,c.Ta);const l=new gp(t,n,o);return e.ma.set(t,l),e.fa.has(n)?e.fa.get(n).push(t):e.fa.set(n,[t]),c.snapshot}async function wp(e,t){const n=N(e),r=n.ma.get(t),s=n.fa.get(r.targetId);if(s.length>1)return n.fa.set(r.targetId,s.filter(i=>!dr(i,t))),void n.ma.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await vs(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),Qu(n.remoteStore,r.targetId),Is(n,r.targetId)}).catch(ei)):(Is(n,r.targetId),await vs(n.localStore,r.targetId,!0))}async function tc(e,t){const n=N(e);try{const r=await zf(n.localStore,t);t.targetChanges.forEach((s,i)=>{const o=n.ya.get(i);o&&($(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.Ra=!0:s.modifiedDocuments.size>0?$(o.Ra):s.removedDocuments.size>0&&($(o.Ra),o.Ra=!1))}),await nc(n,r,t)}catch(r){await ei(r)}}function bo(e,t,n){const r=N(e);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.ma.forEach((i,o)=>{const a=o.view.Q_(t);a.snapshot&&s.push(a.snapshot)}),function(o,a){const u=N(o);u.onlineState=a;let c=!1;u.queries.forEach((l,h)=>{for(const f of h.listeners)f.Q_(a)&&(c=!0)}),c&&Ei(u)}(r.eventManager,t),s.length&&r.Va.a_(s),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function vp(e,t,n){const r=N(e);r.sharedClientState.updateQueryState(t,"rejected",n);const s=r.ya.get(t),i=s&&s.key;if(i){let o=new F(I.comparator);o=o.insert(i,nt.newNoDocument(i,R.min()));const a=b().add(i),u=new gr(R.min(),new Map,new F(O),o,a);await tc(r,u),r.pa=r.pa.remove(i),r.ya.delete(t),Ti(r)}else await vs(r.localStore,t,!1).then(()=>Is(r,t,n)).catch(ei)}function Is(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const r of e.fa.get(t))e.ma.delete(r),n&&e.Va.Fa(r,n);e.fa.delete(t),e.isPrimaryClient&&e.wa.Rr(t).forEach(r=>{e.wa.containsKey(r)||ec(e,r)})}function ec(e,t){e.ga.delete(t.path.canonicalString());const n=e.pa.get(t);n!==null&&(Qu(e.remoteStore,n),e.pa=e.pa.remove(t),e.ya.delete(n),Ti(e))}function No(e,t,n){for(const r of n)r instanceof Yu?(e.wa.addReference(r.key,t),Ip(e,r)):r instanceof Zu?(T("SyncEngine","Document no longer in limbo: "+r.key),e.wa.removeReference(r.key,t),e.wa.containsKey(r.key)||ec(e,r.key)):S()}function Ip(e,t){const n=t.key,r=n.path.canonicalString();e.pa.get(n)||e.ga.has(r)||(T("SyncEngine","New document in limbo: "+n),e.ga.add(r),Ti(e))}function Ti(e){for(;e.ga.size>0&&e.pa.size<e.maxConcurrentLimboResolutions;){const t=e.ga.values().next().value;e.ga.delete(t);const n=new I(M.fromString(t)),r=e.Da.next();e.ya.set(r,new _p(n)),e.pa=e.pa.insert(n,r),Ku(e.remoteStore,new Vt(Et(ui(n.path)),r,"TargetPurposeLimboResolution",ni._e))}}async function nc(e,t,n){const r=N(e),s=[],i=[],o=[];r.ma.isEmpty()||(r.ma.forEach((a,u)=>{o.push(r.va(u,t,n).then(c=>{if((c||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(u.targetId,c!=null&&c.fromCache?"not-current":"current"),c){s.push(c);const l=pi.Qi(u.targetId,c);i.push(l)}}))}),await Promise.all(o),r.Va.a_(s),await async function(u,c){const l=N(u);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>p.forEach(c,f=>p.forEach(f.ki,m=>l.persistence.referenceDelegate.addReference(h,f.targetId,m)).next(()=>p.forEach(f.qi,m=>l.persistence.referenceDelegate.removeReference(h,f.targetId,m)))))}catch(h){if(!cn(h))throw h;T("LocalStore","Failed to update sequence numbers: "+h)}for(const h of c){const f=h.targetId;if(!h.fromCache){const m=l.ts.get(f),_=m.snapshotVersion,y=m.withLastLimboFreeSnapshotVersion(_);l.ts=l.ts.insert(f,y)}}}(r.localStore,i))}async function Ap(e,t){const n=N(e);if(!n.currentUser.isEqual(t)){T("SyncEngine","User change. New user:",t.toKey());const r=await zu(n.localStore,t);n.currentUser=t,function(i,o){i.ba.forEach(a=>{a.forEach(u=>{u.reject(new w(g.CANCELLED,o))})}),i.ba.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await nc(n,r._s)}}function Rp(e,t){const n=N(e),r=n.ya.get(t);if(r&&r.Ra)return b().add(r.key);{let s=b();const i=n.fa.get(t);if(!i)return s;for(const o of i){const a=n.ma.get(o);s=s.unionWith(a.view.ua)}return s}}function Sp(e){const t=N(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=tc.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Rp.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=vp.bind(null,t),t.Va.a_=dp.bind(null,t.eventManager),t.Va.Fa=fp.bind(null,t.eventManager),t}class Oo{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=_r(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,n){return null}createIndexBackfillerScheduler(t,n){return null}createLocalStore(t){return $f(this.persistence,new qf,t.initialUser,this.serializer)}createPersistence(t){return new Ff(fi.jr,this.serializer)}createSharedClientState(t){return new Qf}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Cp{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>bo(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Ap.bind(null,this.syncEngine),await ap(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new cp}()}createDatastore(t){const n=_r(t.databaseInfo.databaseId),r=function(i){return new Yf(i)}(t.databaseInfo);return function(i,o,a,u){return new ep(i,o,a,u)}(t.authCredentials,t.appCheckCredentials,r,n)}createRemoteStore(t){return function(r,s,i,o,a){return new rp(r,s,i,o,a)}(this.localStore,this.datastore,t.asyncQueue,n=>bo(this.syncEngine,n,0),function(){return Co.D()?new Co:new Wf}())}createSyncEngine(t,n){return function(s,i,o,a,u,c,l){const h=new yp(s,i,o,a,u,c);return l&&(h.Ca=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}terminate(){return async function(n){const r=N(n);T("RemoteStore","RemoteStore shutting down."),r.C_.add(5),await fn(r),r.F_.shutdown(),r.M_.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pp{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Oa(this.observer.next,t)}error(t){this.observer.error?this.Oa(this.observer.error,t):St("Uncaught Error in snapshot listener:",t.toString())}Na(){this.muted=!0}Oa(t,n){this.muted||setTimeout(()=>{this.muted||t(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vp{constructor(t,n,r,s){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=et.UNAUTHENTICATED,this.clientId=vd.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{T("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,i=>(T("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new w(g.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new re;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const r=Xu(n,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function jr(e,t){e.asyncQueue.verifyOperationInProgress(),T("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener(async s=>{r.isEqual(s)||(await zu(t.localStore,s),r=s)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e._offlineComponents=t}async function ko(e,t){e.asyncQueue.verifyOperationInProgress();const n=await bp(e);T("FirestoreClient","Initializing OnlineComponentProvider");const r=await e.getConfiguration();await t.initialize(n,r),e.setCredentialChangeListener(s=>Vo(t.remoteStore,s)),e.setAppCheckTokenChangeListener((s,i)=>Vo(t.remoteStore,i)),e._onlineComponents=t}function Dp(e){return e.name==="FirebaseError"?e.code===g.FAILED_PRECONDITION||e.code===g.UNIMPLEMENTED:!(typeof DOMException<"u"&&e instanceof DOMException)||e.code===22||e.code===20||e.code===11}async function bp(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){T("FirestoreClient","Using user provided OfflineComponentProvider");try{await jr(e,e._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!Dp(n))throw n;ue("Error using user provided cache. Falling back to memory cache: "+n),await jr(e,new Oo)}}else T("FirestoreClient","Using default OfflineComponentProvider"),await jr(e,new Oo);return e._offlineComponents}async function Np(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(T("FirestoreClient","Using user provided OnlineComponentProvider"),await ko(e,e._uninitializedComponentsProvider._online)):(T("FirestoreClient","Using default OnlineComponentProvider"),await ko(e,new Cp))),e._onlineComponents}async function xo(e){const t=await Np(e),n=t.eventManager;return n.onListen=Ep.bind(null,t.syncEngine),n.onUnlisten=wp.bind(null,t.syncEngine),n}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rc(e){const t={};return e.timeoutSeconds!==void 0&&(t.timeoutSeconds=e.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mo=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Op(e,t,n){if(!n)throw new w(g.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function kp(e,t,n,r){if(t===!0&&r===!0)throw new w(g.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function Lo(e){if(I.isDocumentKey(e))throw new w(g.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function Er(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":S()}function Vn(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new w(g.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Er(e);throw new w(g.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fo{constructor(t){var n,r;if(t.host===void 0){if(t.ssl!==void 0)throw new w(g.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new w(g.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}kp("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=rc((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new w(g.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new w(g.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new w(g.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class wi{constructor(t,n,r,s){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Fo({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new w(g.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new w(g.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Fo(t),t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new pd;switch(r.type){case"firstParty":return new yd(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new w(g.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Mo.get(n);r&&(T("ComponentProvider","Removing Datastore"),Mo.delete(n),r.terminate())}(this),Promise.resolve()}}function xp(e,t,n,r={}){var s;const i=(e=Vn(e,wi))._getSettings(),o=`${t}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&ue("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let a,u;if(typeof r.mockUserToken=="string")a=r.mockUserToken,u=et.MOCK_USER;else{a=Gc(r.mockUserToken,(s=e._app)===null||s===void 0?void 0:s.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new w(g.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new et(c)}e._authCredentials=new md(new fu(a,u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ve{constructor(t,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new ve(this.firestore,t,this._query)}}class wt{constructor(t,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new oe(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new wt(this.firestore,t,this._key)}}class oe extends ve{constructor(t,n,r){super(t,n,ui(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new wt(this.firestore,null,new I(t))}withConverter(t){return new oe(this.firestore,t,this._path)}}function Ag(e,t,...n){if(e=Fe(e),Op("collection","path",t),e instanceof wi){const r=M.fromString(t,...n);return Lo(r),new oe(e,null,r)}{if(!(e instanceof wt||e instanceof oe))throw new w(g.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(M.fromString(t,...n));return Lo(r),new oe(e.firestore,null,r)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mp{constructor(){this.Ja=Promise.resolve(),this.Ya=[],this.Za=!1,this.Xa=[],this.eu=null,this.tu=!1,this.nu=!1,this.ru=[],this.zo=new Gu(this,"async_queue_retry"),this.iu=()=>{const n=qr();n&&T("AsyncQueue","Visibility state changed to "+n.visibilityState),this.zo.Qo()};const t=qr();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.iu)}get isShuttingDown(){return this.Za}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.su(),this.ou(t)}enterRestrictedMode(t){if(!this.Za){this.Za=!0,this.nu=t||!1;const n=qr();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.iu)}}enqueue(t){if(this.su(),this.Za)return new Promise(()=>{});const n=new re;return this.ou(()=>this.Za&&this.nu?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Ya.push(t),this._u()))}async _u(){if(this.Ya.length!==0){try{await this.Ya[0](),this.Ya.shift(),this.zo.reset()}catch(t){if(!cn(t))throw t;T("AsyncQueue","Operation failed with retryable error: "+t)}this.Ya.length>0&&this.zo.ko(()=>this._u())}}ou(t){const n=this.Ja.then(()=>(this.tu=!0,t().catch(r=>{this.eu=r,this.tu=!1;const s=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw St("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.tu=!1,r))));return this.Ja=n,n}enqueueAfterDelay(t,n,r){this.su(),this.ru.indexOf(t)>-1&&(n=0);const s=yi.createAndSchedule(this,t,n,r,i=>this.au(i));return this.Xa.push(s),s}su(){this.eu&&S()}verifyOperationInProgress(){}async uu(){let t;do t=this.Ja,await t;while(t!==this.Ja)}cu(t){for(const n of this.Xa)if(n.timerId===t)return!0;return!1}lu(t){return this.uu().then(()=>{this.Xa.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Xa)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.uu()})}hu(t){this.ru.push(t)}au(t){const n=this.Xa.indexOf(t);this.Xa.splice(n,1)}}function Uo(e){return function(n,r){if(typeof n!="object"||n===null)return!1;const s=n;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(e,["next","error","complete"])}class As extends wi{constructor(t,n,r,s){super(t,n,r,s),this.type="firestore",this._queue=function(){return new Mp}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||sc(this),this._firestoreClient.terminate()}}function Lp(e,t){const n=typeof e=="object"?e:Jl(),r=typeof e=="string"?e:t||"(default)",s=Gl(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=zc("firestore");i&&xp(s,...i)}return s}function Fp(e){return e._firestoreClient||sc(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function sc(e){var t,n,r;const s=e._freezeSettings(),i=function(a,u,c,l){return new bd(a,u,c,l.host,l.ssl,l.experimentalForceLongPolling,l.experimentalAutoDetectLongPolling,rc(l.experimentalLongPollingOptions),l.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,s);e._firestoreClient=new Vp(e._authCredentials,e._appCheckCredentials,e._queue,i),!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pe{constructor(t){this._byteString=t}static fromBase64String(t){try{return new pe(ot.fromBase64String(t))}catch(n){throw new w(g.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new pe(ot.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ic{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new w(g.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new rt(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oc{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vi{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new w(g.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new w(g.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return O(this._lat,t._lat)||O(this._long,t._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Up=/^__.*__$/;function ac(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw S()}}class Ii{constructor(t,n,r,s,i,o){this.settings=t,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Pu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Iu(){return this.settings.Iu}Tu(t){return new Ii(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Eu(t){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(t),s=this.Tu({path:r,du:!1});return s.Au(t),s}Ru(t){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(t),s=this.Tu({path:r,du:!1});return s.Pu(),s}Vu(t){return this.Tu({path:void 0,du:!0})}mu(t){return Rs(t,this.settings.methodName,this.settings.fu||!1,this.path,this.settings.gu)}contains(t){return this.fieldMask.find(n=>t.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>t.isPrefixOf(n.field))!==void 0}Pu(){if(this.path)for(let t=0;t<this.path.length;t++)this.Au(this.path.get(t))}Au(t){if(t.length===0)throw this.mu("Document fields must not be empty");if(ac(this.Iu)&&Up.test(t))throw this.mu('Document fields cannot begin and end with "__"')}}class Bp{constructor(t,n,r){this.databaseId=t,this.ignoreUndefinedProperties=n,this.serializer=r||_r(t)}pu(t,n,r,s=!1){return new Ii({Iu:t,methodName:n,gu:r,path:rt.emptyPath(),du:!1,fu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function qp(e){const t=e._freezeSettings(),n=_r(e._databaseId);return new Bp(e._databaseId,!!t.ignoreUndefinedProperties,n)}function jp(e,t,n,r=!1){return Ai(n,e.pu(r?4:3,t))}function Ai(e,t){if(uc(e=Fe(e)))return zp("Unsupported field value:",t,e),$p(e,t);if(e instanceof oc)return function(r,s){if(!ac(s.Iu))throw s.mu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.mu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(e,t),null;if(e===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.du&&t.Iu!==4)throw t.mu("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const a of r){let u=Ai(a,s.Vu(o));u==null&&(u={nullValue:"NULL_VALUE"}),i.push(u),o++}return{arrayValue:{values:i}}}(e,t)}return function(r,s){if((r=Fe(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Yd(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=K.fromDate(r);return{timestampValue:Ts(s.serializer,i)}}if(r instanceof K){const i=new K(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Ts(s.serializer,i)}}if(r instanceof vi)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof pe)return{bytesValue:Lu(s.serializer,r._byteString)};if(r instanceof wt){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.mu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Fu(r.firestore._databaseId||s.databaseId,r._key.path)}}throw s.mu(`Unsupported field value: ${Er(r)}`)}(e,t)}function $p(e,t){const n={};return pu(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):ln(e,(r,s)=>{const i=Ai(s,t.Eu(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function uc(e){return!(typeof e!="object"||e===null||e instanceof Array||e instanceof Date||e instanceof K||e instanceof vi||e instanceof pe||e instanceof wt||e instanceof oc)}function zp(e,t,n){if(!uc(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=Er(n);throw r==="an object"?t.mu(e+" a custom object"):t.mu(e+" "+r)}}const Hp=new RegExp("[~\\*/\\[\\]]");function Gp(e,t,n){if(t.search(Hp)>=0)throw Rs(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new ic(...t.split("."))._internalPath}catch{throw Rs(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function Rs(e,t,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(i||o)&&(u+=" (found",i&&(u+=` in field ${r}`),o&&(u+=` in document ${s}`),u+=")"),new w(g.INVALID_ARGUMENT,a+e+u)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cc{constructor(t,n,r,s,i){this._firestore=t,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new wt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new Kp(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const n=this._document.data.field(Ri("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n)}}}class Kp extends cc{data(){return super.data()}}function Ri(e,t){return typeof t=="string"?Gp(e,t):t instanceof ic?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qp(e){if(e.limitType==="L"&&e.explicitOrderBy.length===0)throw new w(g.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Si{}class Wp extends Si{}function Rg(e,t,...n){let r=[];t instanceof Si&&r.push(t),r=r.concat(n),function(i){const o=i.filter(u=>u instanceof Ci).length,a=i.filter(u=>u instanceof Tr).length;if(o>1||o>0&&a>0)throw new w(g.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)e=s._apply(e);return e}class Tr extends Wp{constructor(t,n,r){super(),this._field=t,this._op=n,this._value=r,this.type="where"}static _create(t,n,r){return new Tr(t,n,r)}_apply(t){const n=this._parse(t);return lc(t._query,n),new ve(t.firestore,t.converter,ms(t._query,n))}_parse(t){const n=qp(t.firestore);return function(i,o,a,u,c,l,h){let f;if(c.isKeyField()){if(l==="array-contains"||l==="array-contains-any")throw new w(g.INVALID_ARGUMENT,`Invalid Query. You can't perform '${l}' queries on documentId().`);if(l==="in"||l==="not-in"){qo(h,l);const m=[];for(const _ of h)m.push(Bo(u,i,_));f={arrayValue:{values:m}}}else f=Bo(u,i,h)}else l!=="in"&&l!=="not-in"&&l!=="array-contains-any"||qo(h,l),f=jp(a,o,h,l==="in"||l==="not-in");return j.create(c,l,f)}(t._query,"where",n,t.firestore._databaseId,this._field,this._op,this._value)}}function Sg(e,t,n){const r=t,s=Ri("where",e);return Tr._create(s,r,n)}class Ci extends Si{constructor(t,n){super(),this.type=t,this._queryConstraints=n}static _create(t,n){return new Ci(t,n)}_parse(t){const n=this._queryConstraints.map(r=>r._parse(t)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:ft.create(n,this._getOperator())}_apply(t){const n=this._parse(t);return n.getFilters().length===0?t:(function(s,i){let o=s;const a=i.getFlattenedFilters();for(const u of a)lc(o,u),o=ms(o,u)}(t._query,n),new ve(t.firestore,t.converter,ms(t._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function Bo(e,t,n){if(typeof(n=Fe(n))=="string"){if(n==="")throw new w(g.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!vu(t)&&n.indexOf("/")!==-1)throw new w(g.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=t.path.child(M.fromString(n));if(!I.isDocumentKey(r))throw new w(g.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return ao(e,new I(r))}if(n instanceof wt)return ao(e,n._key);throw new w(g.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Er(n)}.`)}function qo(e,t){if(!Array.isArray(e)||e.length===0)throw new w(g.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function lc(e,t){const n=function(s,i){for(const o of s)for(const a of o.getFlattenedFilters())if(i.indexOf(a.op)>=0)return a.op;return null}(e.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(n!==null)throw n===t.op?new w(g.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new w(g.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${n.toString()}' filters.`)}class Jp{convertValue(t,n="none"){switch(Gt(t)){case 0:return null;case 1:return t.booleanValue;case 2:return q(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,n);case 5:return t.stringValue;case 6:return this.convertBytes(Ht(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,n);case 10:return this.convertObject(t.mapValue,n);default:throw S()}}convertObject(t,n){return this.convertObjectMap(t.fields,n)}convertObjectMap(t,n="none"){const r={};return ln(t,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertGeoPoint(t){return new vi(q(t.latitude),q(t.longitude))}convertArray(t,n){return(t.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(t,n){switch(n){case"previous":const r=si(t);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Je(t));default:return null}}convertTimestamp(t){const n=Ot(t);return new K(n.seconds,n.nanos)}convertDocumentKey(t,n){const r=M.fromString(t);$($u(r));const s=new Xe(r.get(1),r.get(3)),i=new I(r.popFirst(5));return s.isEqual(n)||St(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne{constructor(t,n){this.hasPendingWrites=t,this.fromCache=n}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class hc extends cc{constructor(t,n,r,s,i,o){super(t,n,r,s,o),this._firestore=t,this._firestoreImpl=t,this.metadata=i}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const n=new Dn(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,n={}){if(this._document){const r=this._document.data.field(Ri("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Dn extends hc{data(t={}){return super.data(t)}}class Xp{constructor(t,n,r,s){this._firestore=t,this._userDataWriter=n,this._snapshot=s,this.metadata=new Ne(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const t=[];return this.forEach(n=>t.push(n)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,n){this._snapshot.docs.forEach(r=>{t.call(n,new Dn(this._firestore,this._userDataWriter,r.key,r,new Ne(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const n=!!t.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new w(g.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(a=>{const u=new Dn(s._firestore,s._userDataWriter,a.doc.key,a.doc,new Ne(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);return a.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(a=>i||a.type!==3).map(a=>{const u=new Dn(s._firestore,s._userDataWriter,a.doc.key,a.doc,new Ne(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,l=-1;return a.type!==0&&(c=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),l=o.indexOf(a.doc.key)),{type:Yp(a.type),doc:u,oldIndex:c,newIndex:l}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function Yp(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return S()}}class dc extends Jp{constructor(t){super(),this.firestore=t}convertBytes(t){return new pe(t)}convertReference(t){const n=this.convertDocumentKey(t,this.firestore._databaseId);return new wt(this.firestore,null,n)}}function Cg(e,...t){var n,r,s;e=Fe(e);let i={includeMetadataChanges:!1},o=0;typeof t[o]!="object"||Uo(t[o])||(i=t[o],o++);const a={includeMetadataChanges:i.includeMetadataChanges};if(Uo(t[o])){const h=t[o];t[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),t[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),t[o+2]=(s=h.complete)===null||s===void 0?void 0:s.bind(h)}let u,c,l;if(e instanceof wt)c=Vn(e.firestore,As),l=ui(e._key.path),u={next:h=>{t[o]&&t[o](Zp(c,e,h))},error:t[o+1],complete:t[o+2]};else{const h=Vn(e,ve);c=Vn(h.firestore,As),l=h._query;const f=new dc(c);u={next:m=>{t[o]&&t[o](new Xp(c,f,h,m))},error:t[o+1],complete:t[o+2]},Qp(e._query)}return function(f,m,_,y){const v=new Pp(y),V=new pp(m,v,_);return f.asyncQueue.enqueueAndForget(async()=>lp(await xo(f),V)),()=>{v.Na(),f.asyncQueue.enqueueAndForget(async()=>hp(await xo(f),V))}}(Fp(c),l,a,u)}function Zp(e,t,n){const r=n.docs.get(t._key),s=new dc(e);return new hc(e,s,t._key,r,new Ne(n.hasPendingWrites,n.fromCache),t.converter)}(function(t,n=!0){(function(s){Ee=s})(Wl),Mn(new Ue("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),a=new As(new gd(r.getProvider("auth-internal")),new Td(r.getProvider("app-check-internal")),function(c,l){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new w(g.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Xe(c.options.projectId,l)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),a._setSettings(i),a},"PUBLIC").setMultipleInstances(!0)),te(ro,"4.4.0",t),te(ro,"4.4.0","esm2017")})();const tm={apiKey:"AIzaSyDaoQhKSrGoUuVkpkpIL0gtRHYHDSceJi8",authDomain:"plataforma-de-consulta-sspc.firebaseapp.com",projectId:"plataforma-de-consulta-sspc",storageBucket:"plataforma-de-consulta-sspc.appspot.com",messagingSenderId:"90481022126",appId:"1:90481022126:web:f08616564f86416851493f",measurementId:"G-VFQX5GYJB8"};try{var em=aa(tm)}catch(e){/already exists/.test(e.message)||console.error("Firebase initialization error",e.stack)}const Pg=Lp(em);function fc(e,t){return function(){return e.apply(t,arguments)}}const{toString:nm}=Object.prototype,{getPrototypeOf:Pi}=Object,wr=(e=>t=>{const n=nm.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),vt=e=>(e=e.toLowerCase(),t=>wr(t)===e),vr=e=>t=>typeof t===e,{isArray:Ie}=Array,Ze=vr("undefined");function rm(e){return e!==null&&!Ze(e)&&e.constructor!==null&&!Ze(e.constructor)&&lt(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const pc=vt("ArrayBuffer");function sm(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&pc(e.buffer),t}const im=vr("string"),lt=vr("function"),mc=vr("number"),Ir=e=>e!==null&&typeof e=="object",om=e=>e===!0||e===!1,bn=e=>{if(wr(e)!=="object")return!1;const t=Pi(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},am=vt("Date"),um=vt("File"),cm=vt("Blob"),lm=vt("FileList"),hm=e=>Ir(e)&&lt(e.pipe),dm=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||lt(e.append)&&((t=wr(e))==="formdata"||t==="object"&&lt(e.toString)&&e.toString()==="[object FormData]"))},fm=vt("URLSearchParams"),pm=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function mn(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,s;if(typeof e!="object"&&(e=[e]),Ie(e))for(r=0,s=e.length;r<s;r++)t.call(null,e[r],r,e);else{const i=n?Object.getOwnPropertyNames(e):Object.keys(e),o=i.length;let a;for(r=0;r<o;r++)a=i[r],t.call(null,e[a],a,e)}}function gc(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,s;for(;r-- >0;)if(s=n[r],t===s.toLowerCase())return s;return null}const _c=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),yc=e=>!Ze(e)&&e!==_c;function Ss(){const{caseless:e}=yc(this)&&this||{},t={},n=(r,s)=>{const i=e&&gc(t,s)||s;bn(t[i])&&bn(r)?t[i]=Ss(t[i],r):bn(r)?t[i]=Ss({},r):Ie(r)?t[i]=r.slice():t[i]=r};for(let r=0,s=arguments.length;r<s;r++)arguments[r]&&mn(arguments[r],n);return t}const mm=(e,t,n,{allOwnKeys:r}={})=>(mn(t,(s,i)=>{n&&lt(s)?e[i]=fc(s,n):e[i]=s},{allOwnKeys:r}),e),gm=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),_m=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},ym=(e,t,n,r)=>{let s,i,o;const a={};if(t=t||{},e==null)return t;do{for(s=Object.getOwnPropertyNames(e),i=s.length;i-- >0;)o=s[i],(!r||r(o,e,t))&&!a[o]&&(t[o]=e[o],a[o]=!0);e=n!==!1&&Pi(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},Em=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},Tm=e=>{if(!e)return null;if(Ie(e))return e;let t=e.length;if(!mc(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},wm=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&Pi(Uint8Array)),vm=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let s;for(;(s=r.next())&&!s.done;){const i=s.value;t.call(e,i[0],i[1])}},Im=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},Am=vt("HTMLFormElement"),Rm=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,s){return r.toUpperCase()+s}),jo=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),Sm=vt("RegExp"),Ec=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};mn(n,(s,i)=>{let o;(o=t(s,i,e))!==!1&&(r[i]=o||s)}),Object.defineProperties(e,r)},Cm=e=>{Ec(e,(t,n)=>{if(lt(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(lt(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},Pm=(e,t)=>{const n={},r=s=>{s.forEach(i=>{n[i]=!0})};return Ie(e)?r(e):r(String(e).split(t)),n},Vm=()=>{},Dm=(e,t)=>(e=+e,Number.isFinite(e)?e:t),$r="abcdefghijklmnopqrstuvwxyz",$o="0123456789",Tc={DIGIT:$o,ALPHA:$r,ALPHA_DIGIT:$r+$r.toUpperCase()+$o},bm=(e=16,t=Tc.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function Nm(e){return!!(e&&lt(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const Om=e=>{const t=new Array(10),n=(r,s)=>{if(Ir(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[s]=r;const i=Ie(r)?[]:{};return mn(r,(o,a)=>{const u=n(o,s+1);!Ze(u)&&(i[a]=u)}),t[s]=void 0,i}}return r};return n(e,0)},km=vt("AsyncFunction"),xm=e=>e&&(Ir(e)||lt(e))&&lt(e.then)&&lt(e.catch),d={isArray:Ie,isArrayBuffer:pc,isBuffer:rm,isFormData:dm,isArrayBufferView:sm,isString:im,isNumber:mc,isBoolean:om,isObject:Ir,isPlainObject:bn,isUndefined:Ze,isDate:am,isFile:um,isBlob:cm,isRegExp:Sm,isFunction:lt,isStream:hm,isURLSearchParams:fm,isTypedArray:wm,isFileList:lm,forEach:mn,merge:Ss,extend:mm,trim:pm,stripBOM:gm,inherits:_m,toFlatObject:ym,kindOf:wr,kindOfTest:vt,endsWith:Em,toArray:Tm,forEachEntry:vm,matchAll:Im,isHTMLForm:Am,hasOwnProperty:jo,hasOwnProp:jo,reduceDescriptors:Ec,freezeMethods:Cm,toObjectSet:Pm,toCamelCase:Rm,noop:Vm,toFiniteNumber:Dm,findKey:gc,global:_c,isContextDefined:yc,ALPHABET:Tc,generateString:bm,isSpecCompliantForm:Nm,toJSONObject:Om,isAsyncFn:km,isThenable:xm};function P(e,t,n,r,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),s&&(this.response=s)}d.inherits(P,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:d.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const wc=P.prototype,vc={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{vc[e]={value:e}});Object.defineProperties(P,vc);Object.defineProperty(wc,"isAxiosError",{value:!0});P.from=(e,t,n,r,s,i)=>{const o=Object.create(wc);return d.toFlatObject(e,o,function(u){return u!==Error.prototype},a=>a!=="isAxiosError"),P.call(o,e.message,t,n,r,s),o.cause=e,o.name=e.name,i&&Object.assign(o,i),o};const Mm=null;function Cs(e){return d.isPlainObject(e)||d.isArray(e)}function Ic(e){return d.endsWith(e,"[]")?e.slice(0,-2):e}function zo(e,t,n){return e?e.concat(t).map(function(s,i){return s=Ic(s),!n&&i?"["+s+"]":s}).join(n?".":""):t}function Lm(e){return d.isArray(e)&&!e.some(Cs)}const Fm=d.toFlatObject(d,{},null,function(t){return/^is[A-Z]/.test(t)});function Ar(e,t,n){if(!d.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=d.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(y,v){return!d.isUndefined(v[y])});const r=n.metaTokens,s=n.visitor||l,i=n.dots,o=n.indexes,u=(n.Blob||typeof Blob<"u"&&Blob)&&d.isSpecCompliantForm(t);if(!d.isFunction(s))throw new TypeError("visitor must be a function");function c(_){if(_===null)return"";if(d.isDate(_))return _.toISOString();if(!u&&d.isBlob(_))throw new P("Blob is not supported. Use a Buffer instead.");return d.isArrayBuffer(_)||d.isTypedArray(_)?u&&typeof Blob=="function"?new Blob([_]):Buffer.from(_):_}function l(_,y,v){let V=_;if(_&&!v&&typeof _=="object"){if(d.endsWith(y,"{}"))y=r?y:y.slice(0,-2),_=JSON.stringify(_);else if(d.isArray(_)&&Lm(_)||(d.isFileList(_)||d.endsWith(y,"[]"))&&(V=d.toArray(_)))return y=Ic(y),V.forEach(function(H,ht){!(d.isUndefined(H)||H===null)&&t.append(o===!0?zo([y],ht,i):o===null?y:y+"[]",c(H))}),!1}return Cs(_)?!0:(t.append(zo(v,y,i),c(_)),!1)}const h=[],f=Object.assign(Fm,{defaultVisitor:l,convertValue:c,isVisitable:Cs});function m(_,y){if(!d.isUndefined(_)){if(h.indexOf(_)!==-1)throw Error("Circular reference detected in "+y.join("."));h.push(_),d.forEach(_,function(V,U){(!(d.isUndefined(V)||V===null)&&s.call(t,V,d.isString(U)?U.trim():U,y,f))===!0&&m(V,y?y.concat(U):[U])}),h.pop()}}if(!d.isObject(e))throw new TypeError("data must be an object");return m(e),t}function Ho(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function Vi(e,t){this._pairs=[],e&&Ar(e,this,t)}const Ac=Vi.prototype;Ac.append=function(t,n){this._pairs.push([t,n])};Ac.toString=function(t){const n=t?function(r){return t.call(this,r,Ho)}:Ho;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function Um(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Rc(e,t,n){if(!t)return e;const r=n&&n.encode||Um,s=n&&n.serialize;let i;if(s?i=s(t,n):i=d.isURLSearchParams(t)?t.toString():new Vi(t,n).toString(r),i){const o=e.indexOf("#");o!==-1&&(e=e.slice(0,o)),e+=(e.indexOf("?")===-1?"?":"&")+i}return e}class Bm{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){d.forEach(this.handlers,function(r){r!==null&&t(r)})}}const Go=Bm,Sc={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},qm=typeof URLSearchParams<"u"?URLSearchParams:Vi,jm=typeof FormData<"u"?FormData:null,$m=typeof Blob<"u"?Blob:null,zm={isBrowser:!0,classes:{URLSearchParams:qm,FormData:jm,Blob:$m},protocols:["http","https","file","blob","url","data"]},Cc=typeof window<"u"&&typeof document<"u",Hm=(e=>Cc&&["ReactNative","NativeScript","NS"].indexOf(e)<0)(typeof navigator<"u"&&navigator.product),Gm=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),Km=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Cc,hasStandardBrowserEnv:Hm,hasStandardBrowserWebWorkerEnv:Gm},Symbol.toStringTag,{value:"Module"})),yt={...Km,...zm};function Qm(e,t){return Ar(e,new yt.classes.URLSearchParams,Object.assign({visitor:function(n,r,s,i){return yt.isNode&&d.isBuffer(n)?(this.append(r,n.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)}},t))}function Wm(e){return d.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function Jm(e){const t={},n=Object.keys(e);let r;const s=n.length;let i;for(r=0;r<s;r++)i=n[r],t[i]=e[i];return t}function Pc(e){function t(n,r,s,i){let o=n[i++];const a=Number.isFinite(+o),u=i>=n.length;return o=!o&&d.isArray(s)?s.length:o,u?(d.hasOwnProp(s,o)?s[o]=[s[o],r]:s[o]=r,!a):((!s[o]||!d.isObject(s[o]))&&(s[o]=[]),t(n,r,s[o],i)&&d.isArray(s[o])&&(s[o]=Jm(s[o])),!a)}if(d.isFormData(e)&&d.isFunction(e.entries)){const n={};return d.forEachEntry(e,(r,s)=>{t(Wm(r),s,n,0)}),n}return null}function Xm(e,t,n){if(d.isString(e))try{return(t||JSON.parse)(e),d.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const Di={transitional:Sc,adapter:["xhr","http"],transformRequest:[function(t,n){const r=n.getContentType()||"",s=r.indexOf("application/json")>-1,i=d.isObject(t);if(i&&d.isHTMLForm(t)&&(t=new FormData(t)),d.isFormData(t))return s&&s?JSON.stringify(Pc(t)):t;if(d.isArrayBuffer(t)||d.isBuffer(t)||d.isStream(t)||d.isFile(t)||d.isBlob(t))return t;if(d.isArrayBufferView(t))return t.buffer;if(d.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let a;if(i){if(r.indexOf("application/x-www-form-urlencoded")>-1)return Qm(t,this.formSerializer).toString();if((a=d.isFileList(t))||r.indexOf("multipart/form-data")>-1){const u=this.env&&this.env.FormData;return Ar(a?{"files[]":t}:t,u&&new u,this.formSerializer)}}return i||s?(n.setContentType("application/json",!1),Xm(t)):t}],transformResponse:[function(t){const n=this.transitional||Di.transitional,r=n&&n.forcedJSONParsing,s=this.responseType==="json";if(t&&d.isString(t)&&(r&&!this.responseType||s)){const o=!(n&&n.silentJSONParsing)&&s;try{return JSON.parse(t)}catch(a){if(o)throw a.name==="SyntaxError"?P.from(a,P.ERR_BAD_RESPONSE,this,null,this.response):a}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:yt.classes.FormData,Blob:yt.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};d.forEach(["delete","get","head","post","put","patch"],e=>{Di.headers[e]={}});const bi=Di,Ym=d.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Zm=e=>{const t={};let n,r,s;return e&&e.split(`
`).forEach(function(o){s=o.indexOf(":"),n=o.substring(0,s).trim().toLowerCase(),r=o.substring(s+1).trim(),!(!n||t[n]&&Ym[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},Ko=Symbol("internals");function Ce(e){return e&&String(e).trim().toLowerCase()}function Nn(e){return e===!1||e==null?e:d.isArray(e)?e.map(Nn):String(e)}function tg(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const eg=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function zr(e,t,n,r,s){if(d.isFunction(r))return r.call(this,t,n);if(s&&(t=n),!!d.isString(t)){if(d.isString(r))return t.indexOf(r)!==-1;if(d.isRegExp(r))return r.test(t)}}function ng(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function rg(e,t){const n=d.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(s,i,o){return this[r].call(this,t,s,i,o)},configurable:!0})})}class Rr{constructor(t){t&&this.set(t)}set(t,n,r){const s=this;function i(a,u,c){const l=Ce(u);if(!l)throw new Error("header name must be a non-empty string");const h=d.findKey(s,l);(!h||s[h]===void 0||c===!0||c===void 0&&s[h]!==!1)&&(s[h||u]=Nn(a))}const o=(a,u)=>d.forEach(a,(c,l)=>i(c,l,u));return d.isPlainObject(t)||t instanceof this.constructor?o(t,n):d.isString(t)&&(t=t.trim())&&!eg(t)?o(Zm(t),n):t!=null&&i(n,t,r),this}get(t,n){if(t=Ce(t),t){const r=d.findKey(this,t);if(r){const s=this[r];if(!n)return s;if(n===!0)return tg(s);if(d.isFunction(n))return n.call(this,s,r);if(d.isRegExp(n))return n.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=Ce(t),t){const r=d.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||zr(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let s=!1;function i(o){if(o=Ce(o),o){const a=d.findKey(r,o);a&&(!n||zr(r,r[a],a,n))&&(delete r[a],s=!0)}}return d.isArray(t)?t.forEach(i):i(t),s}clear(t){const n=Object.keys(this);let r=n.length,s=!1;for(;r--;){const i=n[r];(!t||zr(this,this[i],i,t,!0))&&(delete this[i],s=!0)}return s}normalize(t){const n=this,r={};return d.forEach(this,(s,i)=>{const o=d.findKey(r,i);if(o){n[o]=Nn(s),delete n[i];return}const a=t?ng(i):String(i).trim();a!==i&&delete n[i],n[a]=Nn(s),r[a]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return d.forEach(this,(r,s)=>{r!=null&&r!==!1&&(n[s]=t&&d.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(s=>r.set(s)),r}static accessor(t){const r=(this[Ko]=this[Ko]={accessors:{}}).accessors,s=this.prototype;function i(o){const a=Ce(o);r[a]||(rg(s,o),r[a]=!0)}return d.isArray(t)?t.forEach(i):i(t),this}}Rr.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);d.reduceDescriptors(Rr.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(r){this[n]=r}}});d.freezeMethods(Rr);const At=Rr;function Hr(e,t){const n=this||bi,r=t||n,s=At.from(r.headers);let i=r.data;return d.forEach(e,function(a){i=a.call(n,i,s.normalize(),t?t.status:void 0)}),s.normalize(),i}function Vc(e){return!!(e&&e.__CANCEL__)}function gn(e,t,n){P.call(this,e??"canceled",P.ERR_CANCELED,t,n),this.name="CanceledError"}d.inherits(gn,P,{__CANCEL__:!0});function sg(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new P("Request failed with status code "+n.status,[P.ERR_BAD_REQUEST,P.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const ig=yt.hasStandardBrowserEnv?{write(e,t,n,r,s,i){const o=[e+"="+encodeURIComponent(t)];d.isNumber(n)&&o.push("expires="+new Date(n).toGMTString()),d.isString(r)&&o.push("path="+r),d.isString(s)&&o.push("domain="+s),i===!0&&o.push("secure"),document.cookie=o.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function og(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function ag(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function Dc(e,t){return e&&!og(t)?ag(e,t):t}const ug=yt.hasStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function s(i){let o=i;return t&&(n.setAttribute("href",o),o=n.href),n.setAttribute("href",o),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=s(window.location.href),function(o){const a=d.isString(o)?s(o):o;return a.protocol===r.protocol&&a.host===r.host}}():function(){return function(){return!0}}();function cg(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function lg(e,t){e=e||10;const n=new Array(e),r=new Array(e);let s=0,i=0,o;return t=t!==void 0?t:1e3,function(u){const c=Date.now(),l=r[i];o||(o=c),n[s]=u,r[s]=c;let h=i,f=0;for(;h!==s;)f+=n[h++],h=h%e;if(s=(s+1)%e,s===i&&(i=(i+1)%e),c-o<t)return;const m=l&&c-l;return m?Math.round(f*1e3/m):void 0}}function Qo(e,t){let n=0;const r=lg(50,250);return s=>{const i=s.loaded,o=s.lengthComputable?s.total:void 0,a=i-n,u=r(a),c=i<=o;n=i;const l={loaded:i,total:o,progress:o?i/o:void 0,bytes:a,rate:u||void 0,estimated:u&&o&&c?(o-i)/u:void 0,event:s};l[t?"download":"upload"]=!0,e(l)}}const hg=typeof XMLHttpRequest<"u",dg=hg&&function(e){return new Promise(function(n,r){let s=e.data;const i=At.from(e.headers).normalize();let{responseType:o,withXSRFToken:a}=e,u;function c(){e.cancelToken&&e.cancelToken.unsubscribe(u),e.signal&&e.signal.removeEventListener("abort",u)}let l;if(d.isFormData(s)){if(yt.hasStandardBrowserEnv||yt.hasStandardBrowserWebWorkerEnv)i.setContentType(!1);else if((l=i.getContentType())!==!1){const[y,...v]=l?l.split(";").map(V=>V.trim()).filter(Boolean):[];i.setContentType([y||"multipart/form-data",...v].join("; "))}}let h=new XMLHttpRequest;if(e.auth){const y=e.auth.username||"",v=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";i.set("Authorization","Basic "+btoa(y+":"+v))}const f=Dc(e.baseURL,e.url);h.open(e.method.toUpperCase(),Rc(f,e.params,e.paramsSerializer),!0),h.timeout=e.timeout;function m(){if(!h)return;const y=At.from("getAllResponseHeaders"in h&&h.getAllResponseHeaders()),V={data:!o||o==="text"||o==="json"?h.responseText:h.response,status:h.status,statusText:h.statusText,headers:y,config:e,request:h};sg(function(H){n(H),c()},function(H){r(H),c()},V),h=null}if("onloadend"in h?h.onloadend=m:h.onreadystatechange=function(){!h||h.readyState!==4||h.status===0&&!(h.responseURL&&h.responseURL.indexOf("file:")===0)||setTimeout(m)},h.onabort=function(){h&&(r(new P("Request aborted",P.ECONNABORTED,e,h)),h=null)},h.onerror=function(){r(new P("Network Error",P.ERR_NETWORK,e,h)),h=null},h.ontimeout=function(){let v=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const V=e.transitional||Sc;e.timeoutErrorMessage&&(v=e.timeoutErrorMessage),r(new P(v,V.clarifyTimeoutError?P.ETIMEDOUT:P.ECONNABORTED,e,h)),h=null},yt.hasStandardBrowserEnv&&(a&&d.isFunction(a)&&(a=a(e)),a||a!==!1&&ug(f))){const y=e.xsrfHeaderName&&e.xsrfCookieName&&ig.read(e.xsrfCookieName);y&&i.set(e.xsrfHeaderName,y)}s===void 0&&i.setContentType(null),"setRequestHeader"in h&&d.forEach(i.toJSON(),function(v,V){h.setRequestHeader(V,v)}),d.isUndefined(e.withCredentials)||(h.withCredentials=!!e.withCredentials),o&&o!=="json"&&(h.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&h.addEventListener("progress",Qo(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&h.upload&&h.upload.addEventListener("progress",Qo(e.onUploadProgress)),(e.cancelToken||e.signal)&&(u=y=>{h&&(r(!y||y.type?new gn(null,e,h):y),h.abort(),h=null)},e.cancelToken&&e.cancelToken.subscribe(u),e.signal&&(e.signal.aborted?u():e.signal.addEventListener("abort",u)));const _=cg(f);if(_&&yt.protocols.indexOf(_)===-1){r(new P("Unsupported protocol "+_+":",P.ERR_BAD_REQUEST,e));return}h.send(s||null)})},Ps={http:Mm,xhr:dg};d.forEach(Ps,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const Wo=e=>`- ${e}`,fg=e=>d.isFunction(e)||e===null||e===!1,bc={getAdapter:e=>{e=d.isArray(e)?e:[e];const{length:t}=e;let n,r;const s={};for(let i=0;i<t;i++){n=e[i];let o;if(r=n,!fg(n)&&(r=Ps[(o=String(n)).toLowerCase()],r===void 0))throw new P(`Unknown adapter '${o}'`);if(r)break;s[o||"#"+i]=r}if(!r){const i=Object.entries(s).map(([a,u])=>`adapter ${a} `+(u===!1?"is not supported by the environment":"is not available in the build"));let o=t?i.length>1?`since :
`+i.map(Wo).join(`
`):" "+Wo(i[0]):"as no adapter specified";throw new P("There is no suitable adapter to dispatch the request "+o,"ERR_NOT_SUPPORT")}return r},adapters:Ps};function Gr(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new gn(null,e)}function Jo(e){return Gr(e),e.headers=At.from(e.headers),e.data=Hr.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),bc.getAdapter(e.adapter||bi.adapter)(e).then(function(r){return Gr(e),r.data=Hr.call(e,e.transformResponse,r),r.headers=At.from(r.headers),r},function(r){return Vc(r)||(Gr(e),r&&r.response&&(r.response.data=Hr.call(e,e.transformResponse,r.response),r.response.headers=At.from(r.response.headers))),Promise.reject(r)})}const Xo=e=>e instanceof At?e.toJSON():e;function me(e,t){t=t||{};const n={};function r(c,l,h){return d.isPlainObject(c)&&d.isPlainObject(l)?d.merge.call({caseless:h},c,l):d.isPlainObject(l)?d.merge({},l):d.isArray(l)?l.slice():l}function s(c,l,h){if(d.isUndefined(l)){if(!d.isUndefined(c))return r(void 0,c,h)}else return r(c,l,h)}function i(c,l){if(!d.isUndefined(l))return r(void 0,l)}function o(c,l){if(d.isUndefined(l)){if(!d.isUndefined(c))return r(void 0,c)}else return r(void 0,l)}function a(c,l,h){if(h in t)return r(c,l);if(h in e)return r(void 0,c)}const u={url:i,method:i,data:i,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:a,headers:(c,l)=>s(Xo(c),Xo(l),!0)};return d.forEach(Object.keys(Object.assign({},e,t)),function(l){const h=u[l]||s,f=h(e[l],t[l],l);d.isUndefined(f)&&h!==a||(n[l]=f)}),n}const Nc="1.6.2",Ni={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{Ni[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const Yo={};Ni.transitional=function(t,n,r){function s(i,o){return"[Axios v"+Nc+"] Transitional option '"+i+"'"+o+(r?". "+r:"")}return(i,o,a)=>{if(t===!1)throw new P(s(o," has been removed"+(n?" in "+n:"")),P.ERR_DEPRECATED);return n&&!Yo[o]&&(Yo[o]=!0,console.warn(s(o," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(i,o,a):!0}};function pg(e,t,n){if(typeof e!="object")throw new P("options must be an object",P.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let s=r.length;for(;s-- >0;){const i=r[s],o=t[i];if(o){const a=e[i],u=a===void 0||o(a,i,e);if(u!==!0)throw new P("option "+i+" must be "+u,P.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new P("Unknown option "+i,P.ERR_BAD_OPTION)}}const Vs={assertOptions:pg,validators:Ni},Ct=Vs.validators;class Qn{constructor(t){this.defaults=t,this.interceptors={request:new Go,response:new Go}}request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=me(this.defaults,n);const{transitional:r,paramsSerializer:s,headers:i}=n;r!==void 0&&Vs.assertOptions(r,{silentJSONParsing:Ct.transitional(Ct.boolean),forcedJSONParsing:Ct.transitional(Ct.boolean),clarifyTimeoutError:Ct.transitional(Ct.boolean)},!1),s!=null&&(d.isFunction(s)?n.paramsSerializer={serialize:s}:Vs.assertOptions(s,{encode:Ct.function,serialize:Ct.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let o=i&&d.merge(i.common,i[n.method]);i&&d.forEach(["delete","get","head","post","put","patch","common"],_=>{delete i[_]}),n.headers=At.concat(o,i);const a=[];let u=!0;this.interceptors.request.forEach(function(y){typeof y.runWhen=="function"&&y.runWhen(n)===!1||(u=u&&y.synchronous,a.unshift(y.fulfilled,y.rejected))});const c=[];this.interceptors.response.forEach(function(y){c.push(y.fulfilled,y.rejected)});let l,h=0,f;if(!u){const _=[Jo.bind(this),void 0];for(_.unshift.apply(_,a),_.push.apply(_,c),f=_.length,l=Promise.resolve(n);h<f;)l=l.then(_[h++],_[h++]);return l}f=a.length;let m=n;for(h=0;h<f;){const _=a[h++],y=a[h++];try{m=_(m)}catch(v){y.call(this,v);break}}try{l=Jo.call(this,m)}catch(_){return Promise.reject(_)}for(h=0,f=c.length;h<f;)l=l.then(c[h++],c[h++]);return l}getUri(t){t=me(this.defaults,t);const n=Dc(t.baseURL,t.url);return Rc(n,t.params,t.paramsSerializer)}}d.forEach(["delete","get","head","options"],function(t){Qn.prototype[t]=function(n,r){return this.request(me(r||{},{method:t,url:n,data:(r||{}).data}))}});d.forEach(["post","put","patch"],function(t){function n(r){return function(i,o,a){return this.request(me(a||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:i,data:o}))}}Qn.prototype[t]=n(),Qn.prototype[t+"Form"]=n(!0)});const On=Qn;class Oi{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(i){n=i});const r=this;this.promise.then(s=>{if(!r._listeners)return;let i=r._listeners.length;for(;i-- >0;)r._listeners[i](s);r._listeners=null}),this.promise.then=s=>{let i;const o=new Promise(a=>{r.subscribe(a),i=a}).then(s);return o.cancel=function(){r.unsubscribe(i)},o},t(function(i,o,a){r.reason||(r.reason=new gn(i,o,a),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new Oi(function(s){t=s}),cancel:t}}}const mg=Oi;function gg(e){return function(n){return e.apply(null,n)}}function _g(e){return d.isObject(e)&&e.isAxiosError===!0}const Ds={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Ds).forEach(([e,t])=>{Ds[t]=e});const yg=Ds;function Oc(e){const t=new On(e),n=fc(On.prototype.request,t);return d.extend(n,On.prototype,t,{allOwnKeys:!0}),d.extend(n,t,null,{allOwnKeys:!0}),n.create=function(s){return Oc(me(e,s))},n}const z=Oc(bi);z.Axios=On;z.CanceledError=gn;z.CancelToken=mg;z.isCancel=Vc;z.VERSION=Nc;z.toFormData=Ar;z.AxiosError=P;z.Cancel=z.CanceledError;z.all=function(t){return Promise.all(t)};z.spread=gg;z.isAxiosError=_g;z.mergeConfig=me;z.AxiosHeaders=At;z.formToJSON=e=>Pc(d.isHTMLForm(e)?new FormData(e):e);z.getAdapter=bc.getAdapter;z.HttpStatusCode=yg;z.default=z;const Eg=z;Eg.defaults.headers.post["Content-Type"]="application/json";export{Eg as a,Ag as c,Pg as f,Cg as o,Rg as q,Sg as w};
