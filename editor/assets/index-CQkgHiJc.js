var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
(function() {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const r of document.querySelectorAll('link[rel="modulepreload"]')) s(r);
  new MutationObserver((r) => {
    for (const i of r) if (i.type === "childList") for (const o of i.addedNodes) o.tagName === "LINK" && o.rel === "modulepreload" && s(o);
  }).observe(document, { childList: true, subtree: true });
  function n(r) {
    const i = {};
    return r.integrity && (i.integrity = r.integrity), r.referrerPolicy && (i.referrerPolicy = r.referrerPolicy), r.crossOrigin === "use-credentials" ? i.credentials = "include" : r.crossOrigin === "anonymous" ? i.credentials = "omit" : i.credentials = "same-origin", i;
  }
  function s(r) {
    if (r.ep) return;
    r.ep = true;
    const i = n(r);
    fetch(r.href, i);
  }
})();
function Tn(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const N = {}, Qe = [], we = () => {
}, Is = () => false, qt = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Mn = (e) => e.startsWith("onUpdate:"), Z = Object.assign, On = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Hr = Object.prototype.hasOwnProperty, L = (e, t) => Hr.call(e, t), A = Array.isArray, ke = (e) => Jt(e) === "[object Map]", Rs = (e) => Jt(e) === "[object Set]", O = (e) => typeof e == "function", J = (e) => typeof e == "string", Ne = (e) => typeof e == "symbol", V = (e) => e !== null && typeof e == "object", Fs = (e) => (V(e) || O(e)) && O(e.then) && O(e.catch), Ds = Object.prototype.toString, Jt = (e) => Ds.call(e), Nr = (e) => Jt(e).slice(8, -1), Us = (e) => Jt(e) === "[object Object]", An = (e) => J(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, at = Tn(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"), Yt = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((n) => t[n] || (t[n] = e(n)));
}, Kr = /-\w/g, $e = Yt((e) => e.replace(Kr, (t) => t.slice(1).toUpperCase())), Br = /\B([A-Z])/g, Ye = Yt((e) => e.replace(Br, "-$1").toLowerCase()), Ls = Yt((e) => e.charAt(0).toUpperCase() + e.slice(1)), sn = Yt((e) => e ? `on${Ls(e)}` : ""), We = (e, t) => !Object.is(e, t), rn = (e, ...t) => {
  for (let n = 0; n < e.length; n++) e[n](...t);
}, Ws = (e, t, n, s = false) => {
  Object.defineProperty(e, t, { configurable: true, enumerable: false, writable: s, value: n });
}, Vr = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let ts;
const Xt = () => ts || (ts = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function In(e) {
  if (A(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const s = e[n], r = J(s) ? Jr(s) : In(s);
      if (r) for (const i in r) t[i] = r[i];
    }
    return t;
  } else if (J(e) || V(e)) return e;
}
const Gr = /;(?![^(]*\))/g, zr = /:([^]+)/, qr = /\/\*[^]*?\*\//g;
function Jr(e) {
  const t = {};
  return e.replace(qr, "").split(Gr).forEach((n) => {
    if (n) {
      const s = n.split(zr);
      s.length > 1 && (t[s[0].trim()] = s[1].trim());
    }
  }), t;
}
function Rn(e) {
  let t = "";
  if (J(e)) t = e;
  else if (A(e)) for (let n = 0; n < e.length; n++) {
    const s = Rn(e[n]);
    s && (t += s + " ");
  }
  else if (V(e)) for (const n in e) e[n] && (t += n + " ");
  return t.trim();
}
const Yr = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Xr = Tn(Yr);
function $s(e) {
  return !!e || e === "";
}
const js = (e) => !!(e && e.__v_isRef === true), Hs = (e) => J(e) ? e : e == null ? "" : A(e) || V(e) && (e.toString === Ds || !O(e.toString)) ? js(e) ? Hs(e.value) : JSON.stringify(e, Ns, 2) : String(e), Ns = (e, t) => js(t) ? Ns(e, t.value) : ke(t) ? { [`Map(${t.size})`]: [...t.entries()].reduce((n, [s, r], i) => (n[on(s, i) + " =>"] = r, n), {}) } : Rs(t) ? { [`Set(${t.size})`]: [...t.values()].map((n) => on(n)) } : Ne(t) ? on(t) : V(t) && !A(t) && !Us(t) ? String(t) : t, on = (e, t = "") => {
  var n;
  return Ne(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e;
};
let ie;
class Zr {
  constructor(t = false) {
    this.detached = t, this._active = true, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = false, this.parent = ie, !t && ie && (this.index = (ie.scopes || (ie.scopes = [])).push(this) - 1);
  }
  get active() {
    return this._active;
  }
  pause() {
    if (this._active) {
      this._isPaused = true;
      let t, n;
      if (this.scopes) for (t = 0, n = this.scopes.length; t < n; t++) this.scopes[t].pause();
      for (t = 0, n = this.effects.length; t < n; t++) this.effects[t].pause();
    }
  }
  resume() {
    if (this._active && this._isPaused) {
      this._isPaused = false;
      let t, n;
      if (this.scopes) for (t = 0, n = this.scopes.length; t < n; t++) this.scopes[t].resume();
      for (t = 0, n = this.effects.length; t < n; t++) this.effects[t].resume();
    }
  }
  run(t) {
    if (this._active) {
      const n = ie;
      try {
        return ie = this, t();
      } finally {
        ie = n;
      }
    }
  }
  on() {
    ++this._on === 1 && (this.prevScope = ie, ie = this);
  }
  off() {
    this._on > 0 && --this._on === 0 && (ie = this.prevScope, this.prevScope = void 0);
  }
  stop(t) {
    if (this._active) {
      this._active = false;
      let n, s;
      for (n = 0, s = this.effects.length; n < s; n++) this.effects[n].stop();
      for (this.effects.length = 0, n = 0, s = this.cleanups.length; n < s; n++) this.cleanups[n]();
      if (this.cleanups.length = 0, this.scopes) {
        for (n = 0, s = this.scopes.length; n < s; n++) this.scopes[n].stop(true);
        this.scopes.length = 0;
      }
      if (!this.detached && this.parent && !t) {
        const r = this.parent.scopes.pop();
        r && r !== this && (this.parent.scopes[this.index] = r, r.index = this.index);
      }
      this.parent = void 0;
    }
  }
}
function Qr() {
  return ie;
}
let H;
const ln = /* @__PURE__ */ new WeakSet();
class Ks {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, ie && ie.active && ie.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, ln.has(this) && (ln.delete(this), this.trigger()));
  }
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Vs(this);
  }
  run() {
    if (!(this.flags & 1)) return this.fn();
    this.flags |= 2, ns(this), Gs(this);
    const t = H, n = fe;
    H = this, fe = true;
    try {
      return this.fn();
    } finally {
      zs(this), H = t, fe = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep) Un(t);
      this.deps = this.depsTail = void 0, ns(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? ln.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  runIfDirty() {
    _n(this) && this.run();
  }
  get dirty() {
    return _n(this);
  }
}
let Bs = 0, dt, ht;
function Vs(e, t = false) {
  if (e.flags |= 8, t) {
    e.next = ht, ht = e;
    return;
  }
  e.next = dt, dt = e;
}
function Fn() {
  Bs++;
}
function Dn() {
  if (--Bs > 0) return;
  if (ht) {
    let t = ht;
    for (ht = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; dt; ) {
    let t = dt;
    for (dt = void 0; t; ) {
      const n = t.next;
      if (t.next = void 0, t.flags &= -9, t.flags & 1) try {
        t.trigger();
      } catch (s) {
        e || (e = s);
      }
      t = n;
    }
  }
  if (e) throw e;
}
function Gs(e) {
  for (let t = e.deps; t; t = t.nextDep) t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function zs(e) {
  let t, n = e.depsTail, s = n;
  for (; s; ) {
    const r = s.prevDep;
    s.version === -1 ? (s === n && (n = r), Un(s), kr(s)) : t = s, s.dep.activeLink = s.prevActiveLink, s.prevActiveLink = void 0, s = r;
  }
  e.deps = t, e.depsTail = n;
}
function _n(e) {
  for (let t = e.deps; t; t = t.nextDep) if (t.dep.version !== t.version || t.dep.computed && (qs(t.dep.computed) || t.dep.version !== t.version)) return true;
  return !!e._dirty;
}
function qs(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === yt) || (e.globalVersion = yt, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !_n(e)))) return;
  e.flags |= 2;
  const t = e.dep, n = H, s = fe;
  H = e, fe = true;
  try {
    Gs(e);
    const r = e.fn(e._value);
    (t.version === 0 || We(r, e._value)) && (e.flags |= 128, e._value = r, t.version++);
  } catch (r) {
    throw t.version++, r;
  } finally {
    H = n, fe = s, zs(e), e.flags &= -3;
  }
}
function Un(e, t = false) {
  const { dep: n, prevSub: s, nextSub: r } = e;
  if (s && (s.nextSub = r, e.prevSub = void 0), r && (r.prevSub = s, e.nextSub = void 0), n.subs === e && (n.subs = s, !s && n.computed)) {
    n.computed.flags &= -5;
    for (let i = n.computed.deps; i; i = i.nextDep) Un(i, true);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function kr(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let fe = true;
const Js = [];
function Te() {
  Js.push(fe), fe = false;
}
function Me() {
  const e = Js.pop();
  fe = e === void 0 ? true : e;
}
function ns(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = H;
    H = void 0;
    try {
      t();
    } finally {
      H = n;
    }
  }
}
let yt = 0;
class ei {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Ln {
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = true;
  }
  track(t) {
    if (!H || !fe || H === this.computed) return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== H) n = this.activeLink = new ei(H, this), H.deps ? (n.prevDep = H.depsTail, H.depsTail.nextDep = n, H.depsTail = n) : H.deps = H.depsTail = n, Ys(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const s = n.nextDep;
      s.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = s), n.prevDep = H.depsTail, n.nextDep = void 0, H.depsTail.nextDep = n, H.depsTail = n, H.deps === n && (H.deps = s);
    }
    return n;
  }
  trigger(t) {
    this.version++, yt++, this.notify(t);
  }
  notify(t) {
    Fn();
    try {
      for (let n = this.subs; n; n = n.prevSub) n.sub.notify() && n.sub.dep.notify();
    } finally {
      Dn();
    }
  }
}
function Ys(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let s = t.deps; s; s = s.nextDep) Ys(s);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const mn = /* @__PURE__ */ new WeakMap(), Je = /* @__PURE__ */ Symbol(""), bn = /* @__PURE__ */ Symbol(""), wt = /* @__PURE__ */ Symbol("");
function Y(e, t, n) {
  if (fe && H) {
    let s = mn.get(e);
    s || mn.set(e, s = /* @__PURE__ */ new Map());
    let r = s.get(n);
    r || (s.set(n, r = new Ln()), r.map = s, r.key = n), r.track();
  }
}
function Pe(e, t, n, s, r, i) {
  const o = mn.get(e);
  if (!o) {
    yt++;
    return;
  }
  const l = (f) => {
    f && f.trigger();
  };
  if (Fn(), t === "clear") o.forEach(l);
  else {
    const f = A(e), d = f && An(n);
    if (f && n === "length") {
      const a = Number(s);
      o.forEach((p, S) => {
        (S === "length" || S === wt || !Ne(S) && S >= a) && l(p);
      });
    } else switch ((n !== void 0 || o.has(void 0)) && l(o.get(n)), d && l(o.get(wt)), t) {
      case "add":
        f ? d && l(o.get("length")) : (l(o.get(Je)), ke(e) && l(o.get(bn)));
        break;
      case "delete":
        f || (l(o.get(Je)), ke(e) && l(o.get(bn)));
        break;
      case "set":
        ke(e) && l(o.get(Je));
        break;
    }
  }
  Dn();
}
function Xe(e) {
  const t = U(e);
  return t === e ? t : (Y(t, "iterate", wt), ue(e) ? t : t.map(Oe));
}
function Wn(e) {
  return Y(e = U(e), "iterate", wt), e;
}
function Fe(e, t) {
  return je(e) ? et(e) ? xt(Oe(t)) : xt(t) : Oe(t);
}
const ti = { __proto__: null, [Symbol.iterator]() {
  return cn(this, Symbol.iterator, (e) => Fe(this, e));
}, concat(...e) {
  return Xe(this).concat(...e.map((t) => A(t) ? Xe(t) : t));
}, entries() {
  return cn(this, "entries", (e) => (e[1] = Fe(this, e[1]), e));
}, every(e, t) {
  return Ce(this, "every", e, t, void 0, arguments);
}, filter(e, t) {
  return Ce(this, "filter", e, t, (n) => n.map((s) => Fe(this, s)), arguments);
}, find(e, t) {
  return Ce(this, "find", e, t, (n) => Fe(this, n), arguments);
}, findIndex(e, t) {
  return Ce(this, "findIndex", e, t, void 0, arguments);
}, findLast(e, t) {
  return Ce(this, "findLast", e, t, (n) => Fe(this, n), arguments);
}, findLastIndex(e, t) {
  return Ce(this, "findLastIndex", e, t, void 0, arguments);
}, forEach(e, t) {
  return Ce(this, "forEach", e, t, void 0, arguments);
}, includes(...e) {
  return fn(this, "includes", e);
}, indexOf(...e) {
  return fn(this, "indexOf", e);
}, join(e) {
  return Xe(this).join(e);
}, lastIndexOf(...e) {
  return fn(this, "lastIndexOf", e);
}, map(e, t) {
  return Ce(this, "map", e, t, void 0, arguments);
}, pop() {
  return ct(this, "pop");
}, push(...e) {
  return ct(this, "push", e);
}, reduce(e, ...t) {
  return ss(this, "reduce", e, t);
}, reduceRight(e, ...t) {
  return ss(this, "reduceRight", e, t);
}, shift() {
  return ct(this, "shift");
}, some(e, t) {
  return Ce(this, "some", e, t, void 0, arguments);
}, splice(...e) {
  return ct(this, "splice", e);
}, toReversed() {
  return Xe(this).toReversed();
}, toSorted(e) {
  return Xe(this).toSorted(e);
}, toSpliced(...e) {
  return Xe(this).toSpliced(...e);
}, unshift(...e) {
  return ct(this, "unshift", e);
}, values() {
  return cn(this, "values", (e) => Fe(this, e));
} };
function cn(e, t, n) {
  const s = Wn(e), r = s[t]();
  return s !== e && !ue(e) && (r._next = r.next, r.next = () => {
    const i = r._next();
    return i.done || (i.value = n(i.value)), i;
  }), r;
}
const ni = Array.prototype;
function Ce(e, t, n, s, r, i) {
  const o = Wn(e), l = o !== e && !ue(e), f = o[t];
  if (f !== ni[t]) {
    const p = f.apply(e, i);
    return l ? Oe(p) : p;
  }
  let d = n;
  o !== e && (l ? d = function(p, S) {
    return n.call(this, Fe(e, p), S, e);
  } : n.length > 2 && (d = function(p, S) {
    return n.call(this, p, S, e);
  }));
  const a = f.call(o, d, s);
  return l && r ? r(a) : a;
}
function ss(e, t, n, s) {
  const r = Wn(e);
  let i = n;
  return r !== e && (ue(e) ? n.length > 3 && (i = function(o, l, f) {
    return n.call(this, o, l, f, e);
  }) : i = function(o, l, f) {
    return n.call(this, o, Fe(e, l), f, e);
  }), r[t](i, ...s);
}
function fn(e, t, n) {
  const s = U(e);
  Y(s, "iterate", wt);
  const r = s[t](...n);
  return (r === -1 || r === false) && Nn(n[0]) ? (n[0] = U(n[0]), s[t](...n)) : r;
}
function ct(e, t, n = []) {
  Te(), Fn();
  const s = U(e)[t].apply(e, n);
  return Dn(), Me(), s;
}
const si = Tn("__proto__,__v_isRef,__isVue"), Xs = new Set(Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Ne));
function ri(e) {
  Ne(e) || (e = String(e));
  const t = U(this);
  return Y(t, "has", e), t.hasOwnProperty(e);
}
class Zs {
  constructor(t = false, n = false) {
    this._isReadonly = t, this._isShallow = n;
  }
  get(t, n, s) {
    if (n === "__v_skip") return t.__v_skip;
    const r = this._isReadonly, i = this._isShallow;
    if (n === "__v_isReactive") return !r;
    if (n === "__v_isReadonly") return r;
    if (n === "__v_isShallow") return i;
    if (n === "__v_raw") return s === (r ? i ? pi : tr : i ? er : ks).get(t) || Object.getPrototypeOf(t) === Object.getPrototypeOf(s) ? t : void 0;
    const o = A(t);
    if (!r) {
      let f;
      if (o && (f = ti[n])) return f;
      if (n === "hasOwnProperty") return ri;
    }
    const l = Reflect.get(t, n, X(t) ? t : s);
    if ((Ne(n) ? Xs.has(n) : si(n)) || (r || Y(t, "get", n), i)) return l;
    if (X(l)) {
      const f = o && An(n) ? l : l.value;
      return r && V(f) ? yn(f) : f;
    }
    return V(l) ? r ? yn(l) : jn(l) : l;
  }
}
class Qs extends Zs {
  constructor(t = false) {
    super(false, t);
  }
  set(t, n, s, r) {
    let i = t[n];
    const o = A(t) && An(n);
    if (!this._isShallow) {
      const d = je(i);
      if (!ue(s) && !je(s) && (i = U(i), s = U(s)), !o && X(i) && !X(s)) return d || (i.value = s), true;
    }
    const l = o ? Number(n) < t.length : L(t, n), f = Reflect.set(t, n, s, X(t) ? t : r);
    return t === U(r) && (l ? We(s, i) && Pe(t, "set", n, s) : Pe(t, "add", n, s)), f;
  }
  deleteProperty(t, n) {
    const s = L(t, n);
    t[n];
    const r = Reflect.deleteProperty(t, n);
    return r && s && Pe(t, "delete", n, void 0), r;
  }
  has(t, n) {
    const s = Reflect.has(t, n);
    return (!Ne(n) || !Xs.has(n)) && Y(t, "has", n), s;
  }
  ownKeys(t) {
    return Y(t, "iterate", A(t) ? "length" : Je), Reflect.ownKeys(t);
  }
}
class ii extends Zs {
  constructor(t = false) {
    super(true, t);
  }
  set(t, n) {
    return true;
  }
  deleteProperty(t, n) {
    return true;
  }
}
const oi = new Qs(), li = new ii(), ci = new Qs(true);
const vn = (e) => e, Ft = (e) => Reflect.getPrototypeOf(e);
function fi(e, t, n) {
  return function(...s) {
    const r = this.__v_raw, i = U(r), o = ke(i), l = e === "entries" || e === Symbol.iterator && o, f = e === "keys" && o, d = r[e](...s), a = n ? vn : t ? xt : Oe;
    return !t && Y(i, "iterate", f ? bn : Je), { next() {
      const { value: p, done: S } = d.next();
      return S ? { value: p, done: S } : { value: l ? [a(p[0]), a(p[1])] : a(p), done: S };
    }, [Symbol.iterator]() {
      return this;
    } };
  };
}
function Dt(e) {
  return function(...t) {
    return e === "delete" ? false : e === "clear" ? void 0 : this;
  };
}
function ui(e, t) {
  const n = { get(r) {
    const i = this.__v_raw, o = U(i), l = U(r);
    e || (We(r, l) && Y(o, "get", r), Y(o, "get", l));
    const { has: f } = Ft(o), d = t ? vn : e ? xt : Oe;
    if (f.call(o, r)) return d(i.get(r));
    if (f.call(o, l)) return d(i.get(l));
    i !== o && i.get(r);
  }, get size() {
    const r = this.__v_raw;
    return !e && Y(U(r), "iterate", Je), r.size;
  }, has(r) {
    const i = this.__v_raw, o = U(i), l = U(r);
    return e || (We(r, l) && Y(o, "has", r), Y(o, "has", l)), r === l ? i.has(r) : i.has(r) || i.has(l);
  }, forEach(r, i) {
    const o = this, l = o.__v_raw, f = U(l), d = t ? vn : e ? xt : Oe;
    return !e && Y(f, "iterate", Je), l.forEach((a, p) => r.call(i, d(a), d(p), o));
  } };
  return Z(n, e ? { add: Dt("add"), set: Dt("set"), delete: Dt("delete"), clear: Dt("clear") } : { add(r) {
    !t && !ue(r) && !je(r) && (r = U(r));
    const i = U(this);
    return Ft(i).has.call(i, r) || (i.add(r), Pe(i, "add", r, r)), this;
  }, set(r, i) {
    !t && !ue(i) && !je(i) && (i = U(i));
    const o = U(this), { has: l, get: f } = Ft(o);
    let d = l.call(o, r);
    d || (r = U(r), d = l.call(o, r));
    const a = f.call(o, r);
    return o.set(r, i), d ? We(i, a) && Pe(o, "set", r, i) : Pe(o, "add", r, i), this;
  }, delete(r) {
    const i = U(this), { has: o, get: l } = Ft(i);
    let f = o.call(i, r);
    f || (r = U(r), f = o.call(i, r)), l && l.call(i, r);
    const d = i.delete(r);
    return f && Pe(i, "delete", r, void 0), d;
  }, clear() {
    const r = U(this), i = r.size !== 0, o = r.clear();
    return i && Pe(r, "clear", void 0, void 0), o;
  } }), ["keys", "values", "entries", Symbol.iterator].forEach((r) => {
    n[r] = fi(r, e, t);
  }), n;
}
function $n(e, t) {
  const n = ui(e, t);
  return (s, r, i) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? s : Reflect.get(L(n, r) && r in s ? n : s, r, i);
}
const ai = { get: $n(false, false) }, di = { get: $n(false, true) }, hi = { get: $n(true, false) };
const ks = /* @__PURE__ */ new WeakMap(), er = /* @__PURE__ */ new WeakMap(), tr = /* @__PURE__ */ new WeakMap(), pi = /* @__PURE__ */ new WeakMap();
function gi(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function _i(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : gi(Nr(e));
}
function jn(e) {
  return je(e) ? e : Hn(e, false, oi, ai, ks);
}
function mi(e) {
  return Hn(e, false, ci, di, er);
}
function yn(e) {
  return Hn(e, true, li, hi, tr);
}
function Hn(e, t, n, s, r) {
  if (!V(e) || e.__v_raw && !(t && e.__v_isReactive)) return e;
  const i = _i(e);
  if (i === 0) return e;
  const o = r.get(e);
  if (o) return o;
  const l = new Proxy(e, i === 2 ? s : n);
  return r.set(e, l), l;
}
function et(e) {
  return je(e) ? et(e.__v_raw) : !!(e && e.__v_isReactive);
}
function je(e) {
  return !!(e && e.__v_isReadonly);
}
function ue(e) {
  return !!(e && e.__v_isShallow);
}
function Nn(e) {
  return e ? !!e.__v_raw : false;
}
function U(e) {
  const t = e && e.__v_raw;
  return t ? U(t) : e;
}
function bi(e) {
  return !L(e, "__v_skip") && Object.isExtensible(e) && Ws(e, "__v_skip", true), e;
}
const Oe = (e) => V(e) ? jn(e) : e, xt = (e) => V(e) ? yn(e) : e;
function X(e) {
  return e ? e.__v_isRef === true : false;
}
function Ut(e) {
  return vi(e, false);
}
function vi(e, t) {
  return X(e) ? e : new yi(e, t);
}
class yi {
  constructor(t, n) {
    this.dep = new Ln(), this.__v_isRef = true, this.__v_isShallow = false, this._rawValue = n ? t : U(t), this._value = n ? t : Oe(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, s = this.__v_isShallow || ue(t) || je(t);
    t = s ? t : U(t), We(t, n) && (this._rawValue = t, this._value = s ? t : Oe(t), this.dep.trigger());
  }
}
function wi(e) {
  return X(e) ? e.value : e;
}
const xi = { get: (e, t, n) => t === "__v_raw" ? e : wi(Reflect.get(e, t, n)), set: (e, t, n, s) => {
  const r = e[t];
  return X(r) && !X(n) ? (r.value = n, true) : Reflect.set(e, t, n, s);
} };
function nr(e) {
  return et(e) ? e : new Proxy(e, xi);
}
class Si {
  constructor(t, n, s) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new Ln(this), this.__v_isRef = true, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = yt - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = s;
  }
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && H !== this) return Vs(this, true), true;
  }
  get value() {
    const t = this.dep.track();
    return qs(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
function Ci(e, t, n = false) {
  let s, r;
  return O(e) ? s = e : (s = e.get, r = e.set), new Si(s, r, n);
}
const Lt = {}, Nt = /* @__PURE__ */ new WeakMap();
let qe;
function Ei(e, t = false, n = qe) {
  if (n) {
    let s = Nt.get(n);
    s || Nt.set(n, s = []), s.push(e);
  }
}
function Pi(e, t, n = N) {
  const { immediate: s, deep: r, once: i, scheduler: o, augmentJob: l, call: f } = n, d = (T) => r ? T : ue(T) || r === false || r === 0 ? Le(T, 1) : Le(T);
  let a, p, S, C, I = false, F = false;
  if (X(e) ? (p = () => e.value, I = ue(e)) : et(e) ? (p = () => d(e), I = true) : A(e) ? (F = true, I = e.some((T) => et(T) || ue(T)), p = () => e.map((T) => {
    if (X(T)) return T.value;
    if (et(T)) return d(T);
    if (O(T)) return f ? f(T, 2) : T();
  })) : O(e) ? t ? p = f ? () => f(e, 2) : e : p = () => {
    if (S) {
      Te();
      try {
        S();
      } finally {
        Me();
      }
    }
    const T = qe;
    qe = a;
    try {
      return f ? f(e, 3, [C]) : e(C);
    } finally {
      qe = T;
    }
  } : p = we, t && r) {
    const T = p, q = r === true ? 1 / 0 : r;
    p = () => Le(T(), q);
  }
  const Q = Qr(), D = () => {
    a.stop(), Q && Q.active && On(Q.effects, a);
  };
  if (i && t) {
    const T = t;
    t = (...q) => {
      T(...q), D();
    };
  }
  let K = F ? new Array(e.length).fill(Lt) : Lt;
  const G = (T) => {
    if (!(!(a.flags & 1) || !a.dirty && !T)) if (t) {
      const q = a.run();
      if (r || I || (F ? q.some((Ie, ae) => We(Ie, K[ae])) : We(q, K))) {
        S && S();
        const Ie = qe;
        qe = a;
        try {
          const ae = [q, K === Lt ? void 0 : F && K[0] === Lt ? [] : K, C];
          K = q, f ? f(t, 3, ae) : t(...ae);
        } finally {
          qe = Ie;
        }
      }
    } else a.run();
  };
  return l && l(G), a = new Ks(p), a.scheduler = o ? () => o(G, false) : G, C = (T) => Ei(T, false, a), S = a.onStop = () => {
    const T = Nt.get(a);
    if (T) {
      if (f) f(T, 4);
      else for (const q of T) q();
      Nt.delete(a);
    }
  }, t ? s ? G(true) : K = a.run() : o ? o(G.bind(null, true), true) : a.run(), D.pause = a.pause.bind(a), D.resume = a.resume.bind(a), D.stop = D, D;
}
function Le(e, t = 1 / 0, n) {
  if (t <= 0 || !V(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t)) return e;
  if (n.set(e, t), t--, X(e)) Le(e.value, t, n);
  else if (A(e)) for (let s = 0; s < e.length; s++) Le(e[s], t, n);
  else if (Rs(e) || ke(e)) e.forEach((s) => {
    Le(s, t, n);
  });
  else if (Us(e)) {
    for (const s in e) Le(e[s], t, n);
    for (const s of Object.getOwnPropertySymbols(e)) Object.prototype.propertyIsEnumerable.call(e, s) && Le(e[s], t, n);
  }
  return e;
}
function Pt(e, t, n, s) {
  try {
    return s ? e(...s) : e();
  } catch (r) {
    Zt(r, t, n);
  }
}
function Se(e, t, n, s) {
  if (O(e)) {
    const r = Pt(e, t, n, s);
    return r && Fs(r) && r.catch((i) => {
      Zt(i, t, n);
    }), r;
  }
  if (A(e)) {
    const r = [];
    for (let i = 0; i < e.length; i++) r.push(Se(e[i], t, n, s));
    return r;
  }
}
function Zt(e, t, n, s = true) {
  const r = t ? t.vnode : null, { errorHandler: i, throwUnhandledErrorInProduction: o } = t && t.appContext.config || N;
  if (t) {
    let l = t.parent;
    const f = t.proxy, d = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; l; ) {
      const a = l.ec;
      if (a) {
        for (let p = 0; p < a.length; p++) if (a[p](e, f, d) === false) return;
      }
      l = l.parent;
    }
    if (i) {
      Te(), Pt(i, null, 10, [e, f, d]), Me();
      return;
    }
  }
  Ti(e, n, r, s, o);
}
function Ti(e, t, n, s = true, r = false) {
  if (r) throw e;
  console.error(e);
}
const te = [];
let me = -1;
const tt = [];
let De = null, Ze = 0;
const sr = Promise.resolve();
let Kt = null;
function Mi(e) {
  const t = Kt || sr;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Oi(e) {
  let t = me + 1, n = te.length;
  for (; t < n; ) {
    const s = t + n >>> 1, r = te[s], i = St(r);
    i < e || i === e && r.flags & 2 ? t = s + 1 : n = s;
  }
  return t;
}
function Kn(e) {
  if (!(e.flags & 1)) {
    const t = St(e), n = te[te.length - 1];
    !n || !(e.flags & 2) && t >= St(n) ? te.push(e) : te.splice(Oi(t), 0, e), e.flags |= 1, rr();
  }
}
function rr() {
  Kt || (Kt = sr.then(or));
}
function Ai(e) {
  A(e) ? tt.push(...e) : De && e.id === -1 ? De.splice(Ze + 1, 0, e) : e.flags & 1 || (tt.push(e), e.flags |= 1), rr();
}
function rs(e, t, n = me + 1) {
  for (; n < te.length; n++) {
    const s = te[n];
    if (s && s.flags & 2) {
      if (e && s.id !== e.uid) continue;
      te.splice(n, 1), n--, s.flags & 4 && (s.flags &= -2), s(), s.flags & 4 || (s.flags &= -2);
    }
  }
}
function ir(e) {
  if (tt.length) {
    const t = [...new Set(tt)].sort((n, s) => St(n) - St(s));
    if (tt.length = 0, De) {
      De.push(...t);
      return;
    }
    for (De = t, Ze = 0; Ze < De.length; Ze++) {
      const n = De[Ze];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    De = null, Ze = 0;
  }
}
const St = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function or(e) {
  try {
    for (me = 0; me < te.length; me++) {
      const t = te[me];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), Pt(t, t.i, t.i ? 15 : 14), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; me < te.length; me++) {
      const t = te[me];
      t && (t.flags &= -2);
    }
    me = -1, te.length = 0, ir(), Kt = null, (te.length || tt.length) && or();
  }
}
let ye = null, lr = null;
function Bt(e) {
  const t = ye;
  return ye = e, lr = e && e.type.__scopeId || null, t;
}
function Ii(e, t = ye, n) {
  if (!t || e._n) return e;
  const s = (...r) => {
    s._d && ps(-1);
    const i = Bt(t);
    let o;
    try {
      o = e(...r);
    } finally {
      Bt(i), s._d && ps(1);
    }
    return o;
  };
  return s._n = true, s._c = true, s._d = true, s;
}
function Ge(e, t, n, s) {
  const r = e.dirs, i = t && t.dirs;
  for (let o = 0; o < r.length; o++) {
    const l = r[o];
    i && (l.oldValue = i[o].value);
    let f = l.dir[s];
    f && (Te(), Se(f, n, 8, [e.el, l, e, t]), Me());
  }
}
function Ri(e, t) {
  if (ne) {
    let n = ne.provides;
    const s = ne.parent && ne.parent.provides;
    s === n && (n = ne.provides = Object.create(s)), n[e] = t;
  }
}
function Wt(e, t, n = false) {
  const s = Fo();
  if (s || nt) {
    let r = nt ? nt._context.provides : s ? s.parent == null || s.ce ? s.vnode.appContext && s.vnode.appContext.provides : s.parent.provides : void 0;
    if (r && e in r) return r[e];
    if (arguments.length > 1) return n && O(t) ? t.call(s && s.proxy) : t;
  }
}
const Fi = /* @__PURE__ */ Symbol.for("v-scx"), Di = () => Wt(Fi);
function un(e, t, n) {
  return cr(e, t, n);
}
function cr(e, t, n = N) {
  const { immediate: s, deep: r, flush: i, once: o } = n, l = Z({}, n), f = t && s || !t && i !== "post";
  let d;
  if (Et) {
    if (i === "sync") {
      const C = Di();
      d = C.__watcherHandles || (C.__watcherHandles = []);
    } else if (!f) {
      const C = () => {
      };
      return C.stop = we, C.resume = we, C.pause = we, C;
    }
  }
  const a = ne;
  l.call = (C, I, F) => Se(C, a, I, F);
  let p = false;
  i === "post" ? l.scheduler = (C) => {
    le(C, a && a.suspense);
  } : i !== "sync" && (p = true, l.scheduler = (C, I) => {
    I ? C() : Kn(C);
  }), l.augmentJob = (C) => {
    t && (C.flags |= 4), p && (C.flags |= 2, a && (C.id = a.uid, C.i = a));
  };
  const S = Pi(e, t, l);
  return Et && (d ? d.push(S) : f && S()), S;
}
function Ui(e, t, n) {
  const s = this.proxy, r = J(e) ? e.includes(".") ? fr(s, e) : () => s[e] : e.bind(s, s);
  let i;
  O(t) ? i = t : (i = t.handler, n = t);
  const o = Tt(this), l = cr(r, i.bind(s), n);
  return o(), l;
}
function fr(e, t) {
  const n = t.split(".");
  return () => {
    let s = e;
    for (let r = 0; r < n.length && s; r++) s = s[n[r]];
    return s;
  };
}
const Li = /* @__PURE__ */ Symbol("_vte"), Wi = (e) => e.__isTeleport, $i = /* @__PURE__ */ Symbol("_leaveCb");
function Bn(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, Bn(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function ur(e, t) {
  return O(e) ? Z({ name: e.name }, t, { setup: e }) : e;
}
function ar(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
const Vt = /* @__PURE__ */ new WeakMap();
function pt(e, t, n, s, r = false) {
  if (A(e)) {
    e.forEach((I, F) => pt(I, t && (A(t) ? t[F] : t), n, s, r));
    return;
  }
  if (gt(s) && !r) {
    s.shapeFlag & 512 && s.type.__asyncResolved && s.component.subTree.component && pt(e, t, n, s.component.subTree);
    return;
  }
  const i = s.shapeFlag & 4 ? Jn(s.component) : s.el, o = r ? null : i, { i: l, r: f } = e, d = t && t.r, a = l.refs === N ? l.refs = {} : l.refs, p = l.setupState, S = U(p), C = p === N ? Is : (I) => L(S, I);
  if (d != null && d !== f) {
    if (is(t), J(d)) a[d] = null, C(d) && (p[d] = null);
    else if (X(d)) {
      d.value = null;
      const I = t;
      I.k && (a[I.k] = null);
    }
  }
  if (O(f)) Pt(f, l, 12, [o, a]);
  else {
    const I = J(f), F = X(f);
    if (I || F) {
      const Q = () => {
        if (e.f) {
          const D = I ? C(f) ? p[f] : a[f] : f.value;
          if (r) A(D) && On(D, i);
          else if (A(D)) D.includes(i) || D.push(i);
          else if (I) a[f] = [i], C(f) && (p[f] = a[f]);
          else {
            const K = [i];
            f.value = K, e.k && (a[e.k] = K);
          }
        } else I ? (a[f] = o, C(f) && (p[f] = o)) : F && (f.value = o, e.k && (a[e.k] = o));
      };
      if (o) {
        const D = () => {
          Q(), Vt.delete(e);
        };
        D.id = -1, Vt.set(e, D), le(D, n);
      } else is(e), Q();
    }
  }
}
function is(e) {
  const t = Vt.get(e);
  t && (t.flags |= 8, Vt.delete(e));
}
Xt().requestIdleCallback;
Xt().cancelIdleCallback;
const gt = (e) => !!e.type.__asyncLoader, dr = (e) => e.type.__isKeepAlive;
function ji(e, t) {
  hr(e, "a", t);
}
function Hi(e, t) {
  hr(e, "da", t);
}
function hr(e, t, n = ne) {
  const s = e.__wdc || (e.__wdc = () => {
    let r = n;
    for (; r; ) {
      if (r.isDeactivated) return;
      r = r.parent;
    }
    return e();
  });
  if (Qt(t, s, n), n) {
    let r = n.parent;
    for (; r && r.parent; ) dr(r.parent.vnode) && Ni(s, t, n, r), r = r.parent;
  }
}
function Ni(e, t, n, s) {
  const r = Qt(t, e, s, true);
  Vn(() => {
    On(s[t], r);
  }, n);
}
function Qt(e, t, n = ne, s = false) {
  if (n) {
    const r = n[e] || (n[e] = []), i = t.__weh || (t.__weh = (...o) => {
      Te();
      const l = Tt(n), f = Se(t, n, e, o);
      return l(), Me(), f;
    });
    return s ? r.unshift(i) : r.push(i), i;
  }
}
const Ae = (e) => (t, n = ne) => {
  (!Et || e === "sp") && Qt(e, (...s) => t(...s), n);
}, Ki = Ae("bm"), pr = Ae("m"), Bi = Ae("bu"), Vi = Ae("u"), Gi = Ae("bum"), Vn = Ae("um"), zi = Ae("sp"), qi = Ae("rtg"), Ji = Ae("rtc");
function Yi(e, t = ne) {
  Qt("ec", e, t);
}
const Xi = /* @__PURE__ */ Symbol.for("v-ndc"), wn = (e) => e ? Dr(e) ? Jn(e) : wn(e.parent) : null, _t = Z(/* @__PURE__ */ Object.create(null), { $: (e) => e, $el: (e) => e.vnode.el, $data: (e) => e.data, $props: (e) => e.props, $attrs: (e) => e.attrs, $slots: (e) => e.slots, $refs: (e) => e.refs, $parent: (e) => wn(e.parent), $root: (e) => wn(e.root), $host: (e) => e.ce, $emit: (e) => e.emit, $options: (e) => _r(e), $forceUpdate: (e) => e.f || (e.f = () => {
  Kn(e.update);
}), $nextTick: (e) => e.n || (e.n = Mi.bind(e.proxy)), $watch: (e) => Ui.bind(e) }), an = (e, t) => e !== N && !e.__isScriptSetup && L(e, t), Zi = { get({ _: e }, t) {
  if (t === "__v_skip") return true;
  const { ctx: n, setupState: s, data: r, props: i, accessCache: o, type: l, appContext: f } = e;
  if (t[0] !== "$") {
    const S = o[t];
    if (S !== void 0) switch (S) {
      case 1:
        return s[t];
      case 2:
        return r[t];
      case 4:
        return n[t];
      case 3:
        return i[t];
    }
    else {
      if (an(s, t)) return o[t] = 1, s[t];
      if (r !== N && L(r, t)) return o[t] = 2, r[t];
      if (L(i, t)) return o[t] = 3, i[t];
      if (n !== N && L(n, t)) return o[t] = 4, n[t];
      xn && (o[t] = 0);
    }
  }
  const d = _t[t];
  let a, p;
  if (d) return t === "$attrs" && Y(e.attrs, "get", ""), d(e);
  if ((a = l.__cssModules) && (a = a[t])) return a;
  if (n !== N && L(n, t)) return o[t] = 4, n[t];
  if (p = f.config.globalProperties, L(p, t)) return p[t];
}, set({ _: e }, t, n) {
  const { data: s, setupState: r, ctx: i } = e;
  return an(r, t) ? (r[t] = n, true) : s !== N && L(s, t) ? (s[t] = n, true) : L(e.props, t) || t[0] === "$" && t.slice(1) in e ? false : (i[t] = n, true);
}, has({ _: { data: e, setupState: t, accessCache: n, ctx: s, appContext: r, props: i, type: o } }, l) {
  let f;
  return !!(n[l] || e !== N && l[0] !== "$" && L(e, l) || an(t, l) || L(i, l) || L(s, l) || L(_t, l) || L(r.config.globalProperties, l) || (f = o.__cssModules) && f[l]);
}, defineProperty(e, t, n) {
  return n.get != null ? e._.accessCache[t] = 0 : L(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
} };
function os(e) {
  return A(e) ? e.reduce((t, n) => (t[n] = null, t), {}) : e;
}
let xn = true;
function Qi(e) {
  const t = _r(e), n = e.proxy, s = e.ctx;
  xn = false, t.beforeCreate && ls(t.beforeCreate, e, "bc");
  const { data: r, computed: i, methods: o, watch: l, provide: f, inject: d, created: a, beforeMount: p, mounted: S, beforeUpdate: C, updated: I, activated: F, deactivated: Q, beforeDestroy: D, beforeUnmount: K, destroyed: G, unmounted: T, render: q, renderTracked: Ie, renderTriggered: ae, errorCaptured: Re, serverPrefetch: Mt, expose: Ke, inheritAttrs: rt, components: Ot, directives: At, filters: tn } = t;
  if (d && ki(d, s, null), o) for (const B in o) {
    const $ = o[B];
    O($) && (s[B] = $.bind(n));
  }
  if (r) {
    const B = r.call(n, n);
    V(B) && (e.data = jn(B));
  }
  if (xn = true, i) for (const B in i) {
    const $ = i[B], Be = O($) ? $.bind(n, n) : O($.get) ? $.get.bind(n, n) : we, It = !O($) && O($.set) ? $.set.bind(n) : we, Ve = jo({ get: Be, set: It });
    Object.defineProperty(s, B, { enumerable: true, configurable: true, get: () => Ve.value, set: (de) => Ve.value = de });
  }
  if (l) for (const B in l) gr(l[B], s, n, B);
  if (f) {
    const B = O(f) ? f.call(n) : f;
    Reflect.ownKeys(B).forEach(($) => {
      Ri($, B[$]);
    });
  }
  a && ls(a, e, "c");
  function k(B, $) {
    A($) ? $.forEach((Be) => B(Be.bind(n))) : $ && B($.bind(n));
  }
  if (k(Ki, p), k(pr, S), k(Bi, C), k(Vi, I), k(ji, F), k(Hi, Q), k(Yi, Re), k(Ji, Ie), k(qi, ae), k(Gi, K), k(Vn, T), k(zi, Mt), A(Ke)) if (Ke.length) {
    const B = e.exposed || (e.exposed = {});
    Ke.forEach(($) => {
      Object.defineProperty(B, $, { get: () => n[$], set: (Be) => n[$] = Be, enumerable: true });
    });
  } else e.exposed || (e.exposed = {});
  q && e.render === we && (e.render = q), rt != null && (e.inheritAttrs = rt), Ot && (e.components = Ot), At && (e.directives = At), Mt && ar(e);
}
function ki(e, t, n = we) {
  A(e) && (e = Sn(e));
  for (const s in e) {
    const r = e[s];
    let i;
    V(r) ? "default" in r ? i = Wt(r.from || s, r.default, true) : i = Wt(r.from || s) : i = Wt(r), X(i) ? Object.defineProperty(t, s, { enumerable: true, configurable: true, get: () => i.value, set: (o) => i.value = o }) : t[s] = i;
  }
}
function ls(e, t, n) {
  Se(A(e) ? e.map((s) => s.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function gr(e, t, n, s) {
  let r = s.includes(".") ? fr(n, s) : () => n[s];
  if (J(e)) {
    const i = t[e];
    O(i) && un(r, i);
  } else if (O(e)) un(r, e.bind(n));
  else if (V(e)) if (A(e)) e.forEach((i) => gr(i, t, n, s));
  else {
    const i = O(e.handler) ? e.handler.bind(n) : t[e.handler];
    O(i) && un(r, i, e);
  }
}
function _r(e) {
  const t = e.type, { mixins: n, extends: s } = t, { mixins: r, optionsCache: i, config: { optionMergeStrategies: o } } = e.appContext, l = i.get(t);
  let f;
  return l ? f = l : !r.length && !n && !s ? f = t : (f = {}, r.length && r.forEach((d) => Gt(f, d, o, true)), Gt(f, t, o)), V(t) && i.set(t, f), f;
}
function Gt(e, t, n, s = false) {
  const { mixins: r, extends: i } = t;
  i && Gt(e, i, n, true), r && r.forEach((o) => Gt(e, o, n, true));
  for (const o in t) if (!(s && o === "expose")) {
    const l = eo[o] || n && n[o];
    e[o] = l ? l(e[o], t[o]) : t[o];
  }
  return e;
}
const eo = { data: cs, props: fs, emits: fs, methods: ut, computed: ut, beforeCreate: ee, created: ee, beforeMount: ee, mounted: ee, beforeUpdate: ee, updated: ee, beforeDestroy: ee, beforeUnmount: ee, destroyed: ee, unmounted: ee, activated: ee, deactivated: ee, errorCaptured: ee, serverPrefetch: ee, components: ut, directives: ut, watch: no, provide: cs, inject: to };
function cs(e, t) {
  return t ? e ? function() {
    return Z(O(e) ? e.call(this, this) : e, O(t) ? t.call(this, this) : t);
  } : t : e;
}
function to(e, t) {
  return ut(Sn(e), Sn(t));
}
function Sn(e) {
  if (A(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
    return t;
  }
  return e;
}
function ee(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function ut(e, t) {
  return e ? Z(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function fs(e, t) {
  return e ? A(e) && A(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : Z(/* @__PURE__ */ Object.create(null), os(e), os(t ?? {})) : t;
}
function no(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = Z(/* @__PURE__ */ Object.create(null), e);
  for (const s in t) n[s] = ee(e[s], t[s]);
  return n;
}
function mr() {
  return { app: null, config: { isNativeTag: Is, performance: false, globalProperties: {}, optionMergeStrategies: {}, errorHandler: void 0, warnHandler: void 0, compilerOptions: {} }, mixins: [], components: {}, directives: {}, provides: /* @__PURE__ */ Object.create(null), optionsCache: /* @__PURE__ */ new WeakMap(), propsCache: /* @__PURE__ */ new WeakMap(), emitsCache: /* @__PURE__ */ new WeakMap() };
}
let so = 0;
function ro(e, t) {
  return function(s, r = null) {
    O(s) || (s = Z({}, s)), r != null && !V(r) && (r = null);
    const i = mr(), o = /* @__PURE__ */ new WeakSet(), l = [];
    let f = false;
    const d = i.app = { _uid: so++, _component: s, _props: r, _container: null, _context: i, _instance: null, version: Ho, get config() {
      return i.config;
    }, set config(a) {
    }, use(a, ...p) {
      return o.has(a) || (a && O(a.install) ? (o.add(a), a.install(d, ...p)) : O(a) && (o.add(a), a(d, ...p))), d;
    }, mixin(a) {
      return i.mixins.includes(a) || i.mixins.push(a), d;
    }, component(a, p) {
      return p ? (i.components[a] = p, d) : i.components[a];
    }, directive(a, p) {
      return p ? (i.directives[a] = p, d) : i.directives[a];
    }, mount(a, p, S) {
      if (!f) {
        const C = d._ceVNode || xe(s, r);
        return C.appContext = i, S === true ? S = "svg" : S === false && (S = void 0), e(C, a, S), f = true, d._container = a, a.__vue_app__ = d, Jn(C.component);
      }
    }, onUnmount(a) {
      l.push(a);
    }, unmount() {
      f && (Se(l, d._instance, 16), e(null, d._container), delete d._container.__vue_app__);
    }, provide(a, p) {
      return i.provides[a] = p, d;
    }, runWithContext(a) {
      const p = nt;
      nt = d;
      try {
        return a();
      } finally {
        nt = p;
      }
    } };
    return d;
  };
}
let nt = null;
const io = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${$e(t)}Modifiers`] || e[`${Ye(t)}Modifiers`];
function oo(e, t, ...n) {
  if (e.isUnmounted) return;
  const s = e.vnode.props || N;
  let r = n;
  const i = t.startsWith("update:"), o = i && io(s, t.slice(7));
  o && (o.trim && (r = n.map((a) => J(a) ? a.trim() : a)), o.number && (r = n.map(Vr)));
  let l, f = s[l = sn(t)] || s[l = sn($e(t))];
  !f && i && (f = s[l = sn(Ye(t))]), f && Se(f, e, 6, r);
  const d = s[l + "Once"];
  if (d) {
    if (!e.emitted) e.emitted = {};
    else if (e.emitted[l]) return;
    e.emitted[l] = true, Se(d, e, 6, r);
  }
}
const lo = /* @__PURE__ */ new WeakMap();
function br(e, t, n = false) {
  const s = n ? lo : t.emitsCache, r = s.get(e);
  if (r !== void 0) return r;
  const i = e.emits;
  let o = {}, l = false;
  if (!O(e)) {
    const f = (d) => {
      const a = br(d, t, true);
      a && (l = true, Z(o, a));
    };
    !n && t.mixins.length && t.mixins.forEach(f), e.extends && f(e.extends), e.mixins && e.mixins.forEach(f);
  }
  return !i && !l ? (V(e) && s.set(e, null), null) : (A(i) ? i.forEach((f) => o[f] = null) : Z(o, i), V(e) && s.set(e, o), o);
}
function kt(e, t) {
  return !e || !qt(t) ? false : (t = t.slice(2).replace(/Once$/, ""), L(e, t[0].toLowerCase() + t.slice(1)) || L(e, Ye(t)) || L(e, t));
}
function us(e) {
  const { type: t, vnode: n, proxy: s, withProxy: r, propsOptions: [i], slots: o, attrs: l, emit: f, render: d, renderCache: a, props: p, data: S, setupState: C, ctx: I, inheritAttrs: F } = e, Q = Bt(e);
  let D, K;
  try {
    if (n.shapeFlag & 4) {
      const T = r || s, q = T;
      D = ve(d.call(q, T, a, p, C, S, I)), K = l;
    } else {
      const T = t;
      D = ve(T.length > 1 ? T(p, { attrs: l, slots: o, emit: f }) : T(p, null)), K = t.props ? l : co(l);
    }
  } catch (T) {
    mt.length = 0, Zt(T, e, 1), D = xe(He);
  }
  let G = D;
  if (K && F !== false) {
    const T = Object.keys(K), { shapeFlag: q } = G;
    T.length && q & 7 && (i && T.some(Mn) && (K = fo(K, i)), G = st(G, K, false, true));
  }
  return n.dirs && (G = st(G, null, false, true), G.dirs = G.dirs ? G.dirs.concat(n.dirs) : n.dirs), n.transition && Bn(G, n.transition), D = G, Bt(Q), D;
}
const co = (e) => {
  let t;
  for (const n in e) (n === "class" || n === "style" || qt(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, fo = (e, t) => {
  const n = {};
  for (const s in e) (!Mn(s) || !(s.slice(9) in t)) && (n[s] = e[s]);
  return n;
};
function uo(e, t, n) {
  const { props: s, children: r, component: i } = e, { props: o, children: l, patchFlag: f } = t, d = i.emitsOptions;
  if (t.dirs || t.transition) return true;
  if (n && f >= 0) {
    if (f & 1024) return true;
    if (f & 16) return s ? as(s, o, d) : !!o;
    if (f & 8) {
      const a = t.dynamicProps;
      for (let p = 0; p < a.length; p++) {
        const S = a[p];
        if (o[S] !== s[S] && !kt(d, S)) return true;
      }
    }
  } else return (r || l) && (!l || !l.$stable) ? true : s === o ? false : s ? o ? as(s, o, d) : true : !!o;
  return false;
}
function as(e, t, n) {
  const s = Object.keys(t);
  if (s.length !== Object.keys(e).length) return true;
  for (let r = 0; r < s.length; r++) {
    const i = s[r];
    if (t[i] !== e[i] && !kt(n, i)) return true;
  }
  return false;
}
function ao({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const s = t.subTree;
    if (s.suspense && s.suspense.activeBranch === e && (s.el = e.el), s === e) (e = t.vnode).el = n, t = t.parent;
    else break;
  }
}
const vr = {}, yr = () => Object.create(vr), wr = (e) => Object.getPrototypeOf(e) === vr;
function ho(e, t, n, s = false) {
  const r = {}, i = yr();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), xr(e, t, r, i);
  for (const o in e.propsOptions[0]) o in r || (r[o] = void 0);
  n ? e.props = s ? r : mi(r) : e.type.props ? e.props = r : e.props = i, e.attrs = i;
}
function po(e, t, n, s) {
  const { props: r, attrs: i, vnode: { patchFlag: o } } = e, l = U(r), [f] = e.propsOptions;
  let d = false;
  if ((s || o > 0) && !(o & 16)) {
    if (o & 8) {
      const a = e.vnode.dynamicProps;
      for (let p = 0; p < a.length; p++) {
        let S = a[p];
        if (kt(e.emitsOptions, S)) continue;
        const C = t[S];
        if (f) if (L(i, S)) C !== i[S] && (i[S] = C, d = true);
        else {
          const I = $e(S);
          r[I] = Cn(f, l, I, C, e, false);
        }
        else C !== i[S] && (i[S] = C, d = true);
      }
    }
  } else {
    xr(e, t, r, i) && (d = true);
    let a;
    for (const p in l) (!t || !L(t, p) && ((a = Ye(p)) === p || !L(t, a))) && (f ? n && (n[p] !== void 0 || n[a] !== void 0) && (r[p] = Cn(f, l, p, void 0, e, true)) : delete r[p]);
    if (i !== l) for (const p in i) (!t || !L(t, p)) && (delete i[p], d = true);
  }
  d && Pe(e.attrs, "set", "");
}
function xr(e, t, n, s) {
  const [r, i] = e.propsOptions;
  let o = false, l;
  if (t) for (let f in t) {
    if (at(f)) continue;
    const d = t[f];
    let a;
    r && L(r, a = $e(f)) ? !i || !i.includes(a) ? n[a] = d : (l || (l = {}))[a] = d : kt(e.emitsOptions, f) || (!(f in s) || d !== s[f]) && (s[f] = d, o = true);
  }
  if (i) {
    const f = U(n), d = l || N;
    for (let a = 0; a < i.length; a++) {
      const p = i[a];
      n[p] = Cn(r, f, p, d[p], e, !L(d, p));
    }
  }
  return o;
}
function Cn(e, t, n, s, r, i) {
  const o = e[n];
  if (o != null) {
    const l = L(o, "default");
    if (l && s === void 0) {
      const f = o.default;
      if (o.type !== Function && !o.skipFactory && O(f)) {
        const { propsDefaults: d } = r;
        if (n in d) s = d[n];
        else {
          const a = Tt(r);
          s = d[n] = f.call(null, t), a();
        }
      } else s = f;
      r.ce && r.ce._setProp(n, s);
    }
    o[0] && (i && !l ? s = false : o[1] && (s === "" || s === Ye(n)) && (s = true));
  }
  return s;
}
const go = /* @__PURE__ */ new WeakMap();
function Sr(e, t, n = false) {
  const s = n ? go : t.propsCache, r = s.get(e);
  if (r) return r;
  const i = e.props, o = {}, l = [];
  let f = false;
  if (!O(e)) {
    const a = (p) => {
      f = true;
      const [S, C] = Sr(p, t, true);
      Z(o, S), C && l.push(...C);
    };
    !n && t.mixins.length && t.mixins.forEach(a), e.extends && a(e.extends), e.mixins && e.mixins.forEach(a);
  }
  if (!i && !f) return V(e) && s.set(e, Qe), Qe;
  if (A(i)) for (let a = 0; a < i.length; a++) {
    const p = $e(i[a]);
    ds(p) && (o[p] = N);
  }
  else if (i) for (const a in i) {
    const p = $e(a);
    if (ds(p)) {
      const S = i[a], C = o[p] = A(S) || O(S) ? { type: S } : Z({}, S), I = C.type;
      let F = false, Q = true;
      if (A(I)) for (let D = 0; D < I.length; ++D) {
        const K = I[D], G = O(K) && K.name;
        if (G === "Boolean") {
          F = true;
          break;
        } else G === "String" && (Q = false);
      }
      else F = O(I) && I.name === "Boolean";
      C[0] = F, C[1] = Q, (F || L(C, "default")) && l.push(p);
    }
  }
  const d = [o, l];
  return V(e) && s.set(e, d), d;
}
function ds(e) {
  return e[0] !== "$" && !at(e);
}
const Gn = (e) => e === "_" || e === "_ctx" || e === "$stable", zn = (e) => A(e) ? e.map(ve) : [ve(e)], _o = (e, t, n) => {
  if (t._n) return t;
  const s = Ii((...r) => zn(t(...r)), n);
  return s._c = false, s;
}, Cr = (e, t, n) => {
  const s = e._ctx;
  for (const r in e) {
    if (Gn(r)) continue;
    const i = e[r];
    if (O(i)) t[r] = _o(r, i, s);
    else if (i != null) {
      const o = zn(i);
      t[r] = () => o;
    }
  }
}, Er = (e, t) => {
  const n = zn(t);
  e.slots.default = () => n;
}, Pr = (e, t, n) => {
  for (const s in t) (n || !Gn(s)) && (e[s] = t[s]);
}, mo = (e, t, n) => {
  const s = e.slots = yr();
  if (e.vnode.shapeFlag & 32) {
    const r = t._;
    r ? (Pr(s, t, n), n && Ws(s, "_", r, true)) : Cr(t, s);
  } else t && Er(e, t);
}, bo = (e, t, n) => {
  const { vnode: s, slots: r } = e;
  let i = true, o = N;
  if (s.shapeFlag & 32) {
    const l = t._;
    l ? n && l === 1 ? i = false : Pr(r, t, n) : (i = !t.$stable, Cr(t, r)), o = t;
  } else t && (Er(e, t), o = { default: 1 });
  if (i) for (const l in r) !Gn(l) && o[l] == null && delete r[l];
}, le = So;
function vo(e) {
  return yo(e);
}
function yo(e, t) {
  const n = Xt();
  n.__VUE__ = true;
  const { insert: s, remove: r, patchProp: i, createElement: o, createText: l, createComment: f, setText: d, setElementText: a, parentNode: p, nextSibling: S, setScopeId: C = we, insertStaticContent: I } = e, F = (c, u, h, b = null, g = null, _ = null, w = void 0, y = null, v = !!u.dynamicChildren) => {
    if (c === u) return;
    c && !ft(c, u) && (b = Rt(c), de(c, g, _, true), c = null), u.patchFlag === -2 && (v = false, u.dynamicChildren = null);
    const { type: m, ref: P, shapeFlag: x } = u;
    switch (m) {
      case en:
        Q(c, u, h, b);
        break;
      case He:
        D(c, u, h, b);
        break;
      case hn:
        c == null && K(u, h, b, w);
        break;
      case be:
        Ot(c, u, h, b, g, _, w, y, v);
        break;
      default:
        x & 1 ? q(c, u, h, b, g, _, w, y, v) : x & 6 ? At(c, u, h, b, g, _, w, y, v) : (x & 64 || x & 128) && m.process(c, u, h, b, g, _, w, y, v, ot);
    }
    P != null && g ? pt(P, c && c.ref, _, u || c, !u) : P == null && c && c.ref != null && pt(c.ref, null, _, c, true);
  }, Q = (c, u, h, b) => {
    if (c == null) s(u.el = l(u.children), h, b);
    else {
      const g = u.el = c.el;
      u.children !== c.children && d(g, u.children);
    }
  }, D = (c, u, h, b) => {
    c == null ? s(u.el = f(u.children || ""), h, b) : u.el = c.el;
  }, K = (c, u, h, b) => {
    [c.el, c.anchor] = I(c.children, u, h, b, c.el, c.anchor);
  }, G = ({ el: c, anchor: u }, h, b) => {
    let g;
    for (; c && c !== u; ) g = S(c), s(c, h, b), c = g;
    s(u, h, b);
  }, T = ({ el: c, anchor: u }) => {
    let h;
    for (; c && c !== u; ) h = S(c), r(c), c = h;
    r(u);
  }, q = (c, u, h, b, g, _, w, y, v) => {
    if (u.type === "svg" ? w = "svg" : u.type === "math" && (w = "mathml"), c == null) Ie(u, h, b, g, _, w, y, v);
    else {
      const m = c.el && c.el._isVueCE ? c.el : null;
      try {
        m && m._beginPatch(), Mt(c, u, g, _, w, y, v);
      } finally {
        m && m._endPatch();
      }
    }
  }, Ie = (c, u, h, b, g, _, w, y) => {
    let v, m;
    const { props: P, shapeFlag: x, transition: E, dirs: M } = c;
    if (v = c.el = o(c.type, _, P && P.is, P), x & 8 ? a(v, c.children) : x & 16 && Re(c.children, v, null, b, g, dn(c, _), w, y), M && Ge(c, null, b, "created"), ae(v, c, c.scopeId, w, b), P) {
      for (const j in P) j !== "value" && !at(j) && i(v, j, null, P[j], _, b);
      "value" in P && i(v, "value", null, P.value, _), (m = P.onVnodeBeforeMount) && _e(m, b, c);
    }
    M && Ge(c, null, b, "beforeMount");
    const R = wo(g, E);
    R && E.beforeEnter(v), s(v, u, h), ((m = P && P.onVnodeMounted) || R || M) && le(() => {
      m && _e(m, b, c), R && E.enter(v), M && Ge(c, null, b, "mounted");
    }, g);
  }, ae = (c, u, h, b, g) => {
    if (h && C(c, h), b) for (let _ = 0; _ < b.length; _++) C(c, b[_]);
    if (g) {
      let _ = g.subTree;
      if (u === _ || Ar(_.type) && (_.ssContent === u || _.ssFallback === u)) {
        const w = g.vnode;
        ae(c, w, w.scopeId, w.slotScopeIds, g.parent);
      }
    }
  }, Re = (c, u, h, b, g, _, w, y, v = 0) => {
    for (let m = v; m < c.length; m++) {
      const P = c[m] = y ? Ue(c[m]) : ve(c[m]);
      F(null, P, u, h, b, g, _, w, y);
    }
  }, Mt = (c, u, h, b, g, _, w) => {
    const y = u.el = c.el;
    let { patchFlag: v, dynamicChildren: m, dirs: P } = u;
    v |= c.patchFlag & 16;
    const x = c.props || N, E = u.props || N;
    let M;
    if (h && ze(h, false), (M = E.onVnodeBeforeUpdate) && _e(M, h, u, c), P && Ge(u, c, h, "beforeUpdate"), h && ze(h, true), (x.innerHTML && E.innerHTML == null || x.textContent && E.textContent == null) && a(y, ""), m ? Ke(c.dynamicChildren, m, y, h, b, dn(u, g), _) : w || $(c, u, y, null, h, b, dn(u, g), _, false), v > 0) {
      if (v & 16) rt(y, x, E, h, g);
      else if (v & 2 && x.class !== E.class && i(y, "class", null, E.class, g), v & 4 && i(y, "style", x.style, E.style, g), v & 8) {
        const R = u.dynamicProps;
        for (let j = 0; j < R.length; j++) {
          const W = R[j], se = x[W], re = E[W];
          (re !== se || W === "value") && i(y, W, se, re, g, h);
        }
      }
      v & 1 && c.children !== u.children && a(y, u.children);
    } else !w && m == null && rt(y, x, E, h, g);
    ((M = E.onVnodeUpdated) || P) && le(() => {
      M && _e(M, h, u, c), P && Ge(u, c, h, "updated");
    }, b);
  }, Ke = (c, u, h, b, g, _, w) => {
    for (let y = 0; y < u.length; y++) {
      const v = c[y], m = u[y], P = v.el && (v.type === be || !ft(v, m) || v.shapeFlag & 198) ? p(v.el) : h;
      F(v, m, P, null, b, g, _, w, true);
    }
  }, rt = (c, u, h, b, g) => {
    if (u !== h) {
      if (u !== N) for (const _ in u) !at(_) && !(_ in h) && i(c, _, u[_], null, g, b);
      for (const _ in h) {
        if (at(_)) continue;
        const w = h[_], y = u[_];
        w !== y && _ !== "value" && i(c, _, y, w, g, b);
      }
      "value" in h && i(c, "value", u.value, h.value, g);
    }
  }, Ot = (c, u, h, b, g, _, w, y, v) => {
    const m = u.el = c ? c.el : l(""), P = u.anchor = c ? c.anchor : l("");
    let { patchFlag: x, dynamicChildren: E, slotScopeIds: M } = u;
    M && (y = y ? y.concat(M) : M), c == null ? (s(m, h, b), s(P, h, b), Re(u.children || [], h, P, g, _, w, y, v)) : x > 0 && x & 64 && E && c.dynamicChildren && c.dynamicChildren.length === E.length ? (Ke(c.dynamicChildren, E, h, g, _, w, y), (u.key != null || g && u === g.subTree) && Tr(c, u, true)) : $(c, u, h, P, g, _, w, y, v);
  }, At = (c, u, h, b, g, _, w, y, v) => {
    u.slotScopeIds = y, c == null ? u.shapeFlag & 512 ? g.ctx.activate(u, h, b, w, v) : tn(u, h, b, g, _, w, v) : Yn(c, u, v);
  }, tn = (c, u, h, b, g, _, w) => {
    const y = c.component = Ro(c, b, g);
    if (dr(c) && (y.ctx.renderer = ot), Do(y, false, w), y.asyncDep) {
      if (g && g.registerDep(y, k, w), !c.el) {
        const v = y.subTree = xe(He);
        D(null, v, u, h), c.placeholder = v.el;
      }
    } else k(y, c, u, h, g, _, w);
  }, Yn = (c, u, h) => {
    const b = u.component = c.component;
    if (uo(c, u, h)) if (b.asyncDep && !b.asyncResolved) {
      B(b, u, h);
      return;
    } else b.next = u, b.update();
    else u.el = c.el, b.vnode = u;
  }, k = (c, u, h, b, g, _, w) => {
    const y = () => {
      if (c.isMounted) {
        let { next: x, bu: E, u: M, parent: R, vnode: j } = c;
        {
          const pe = Mr(c);
          if (pe) {
            x && (x.el = j.el, B(c, x, w)), pe.asyncDep.then(() => {
              c.isUnmounted || y();
            });
            return;
          }
        }
        let W = x, se;
        ze(c, false), x ? (x.el = j.el, B(c, x, w)) : x = j, E && rn(E), (se = x.props && x.props.onVnodeBeforeUpdate) && _e(se, R, x, j), ze(c, true);
        const re = us(c), he = c.subTree;
        c.subTree = re, F(he, re, p(he.el), Rt(he), c, g, _), x.el = re.el, W === null && ao(c, re.el), M && le(M, g), (se = x.props && x.props.onVnodeUpdated) && le(() => _e(se, R, x, j), g);
      } else {
        let x;
        const { el: E, props: M } = u, { bm: R, m: j, parent: W, root: se, type: re } = c, he = gt(u);
        ze(c, false), R && rn(R), !he && (x = M && M.onVnodeBeforeMount) && _e(x, W, u), ze(c, true);
        {
          se.ce && se.ce._def.shadowRoot !== false && se.ce._injectChildStyle(re);
          const pe = c.subTree = us(c);
          F(null, pe, h, b, c, g, _), u.el = pe.el;
        }
        if (j && le(j, g), !he && (x = M && M.onVnodeMounted)) {
          const pe = u;
          le(() => _e(x, W, pe), g);
        }
        (u.shapeFlag & 256 || W && gt(W.vnode) && W.vnode.shapeFlag & 256) && c.a && le(c.a, g), c.isMounted = true, u = h = b = null;
      }
    };
    c.scope.on();
    const v = c.effect = new Ks(y);
    c.scope.off();
    const m = c.update = v.run.bind(v), P = c.job = v.runIfDirty.bind(v);
    P.i = c, P.id = c.uid, v.scheduler = () => Kn(P), ze(c, true), m();
  }, B = (c, u, h) => {
    u.component = c;
    const b = c.vnode.props;
    c.vnode = u, c.next = null, po(c, u.props, b, h), bo(c, u.children, h), Te(), rs(c), Me();
  }, $ = (c, u, h, b, g, _, w, y, v = false) => {
    const m = c && c.children, P = c ? c.shapeFlag : 0, x = u.children, { patchFlag: E, shapeFlag: M } = u;
    if (E > 0) {
      if (E & 128) {
        It(m, x, h, b, g, _, w, y, v);
        return;
      } else if (E & 256) {
        Be(m, x, h, b, g, _, w, y, v);
        return;
      }
    }
    M & 8 ? (P & 16 && it(m, g, _), x !== m && a(h, x)) : P & 16 ? M & 16 ? It(m, x, h, b, g, _, w, y, v) : it(m, g, _, true) : (P & 8 && a(h, ""), M & 16 && Re(x, h, b, g, _, w, y, v));
  }, Be = (c, u, h, b, g, _, w, y, v) => {
    c = c || Qe, u = u || Qe;
    const m = c.length, P = u.length, x = Math.min(m, P);
    let E;
    for (E = 0; E < x; E++) {
      const M = u[E] = v ? Ue(u[E]) : ve(u[E]);
      F(c[E], M, h, null, g, _, w, y, v);
    }
    m > P ? it(c, g, _, true, false, x) : Re(u, h, b, g, _, w, y, v, x);
  }, It = (c, u, h, b, g, _, w, y, v) => {
    let m = 0;
    const P = u.length;
    let x = c.length - 1, E = P - 1;
    for (; m <= x && m <= E; ) {
      const M = c[m], R = u[m] = v ? Ue(u[m]) : ve(u[m]);
      if (ft(M, R)) F(M, R, h, null, g, _, w, y, v);
      else break;
      m++;
    }
    for (; m <= x && m <= E; ) {
      const M = c[x], R = u[E] = v ? Ue(u[E]) : ve(u[E]);
      if (ft(M, R)) F(M, R, h, null, g, _, w, y, v);
      else break;
      x--, E--;
    }
    if (m > x) {
      if (m <= E) {
        const M = E + 1, R = M < P ? u[M].el : b;
        for (; m <= E; ) F(null, u[m] = v ? Ue(u[m]) : ve(u[m]), h, R, g, _, w, y, v), m++;
      }
    } else if (m > E) for (; m <= x; ) de(c[m], g, _, true), m++;
    else {
      const M = m, R = m, j = /* @__PURE__ */ new Map();
      for (m = R; m <= E; m++) {
        const oe = u[m] = v ? Ue(u[m]) : ve(u[m]);
        oe.key != null && j.set(oe.key, m);
      }
      let W, se = 0;
      const re = E - R + 1;
      let he = false, pe = 0;
      const lt = new Array(re);
      for (m = 0; m < re; m++) lt[m] = 0;
      for (m = M; m <= x; m++) {
        const oe = c[m];
        if (se >= re) {
          de(oe, g, _, true);
          continue;
        }
        let ge;
        if (oe.key != null) ge = j.get(oe.key);
        else for (W = R; W <= E; W++) if (lt[W - R] === 0 && ft(oe, u[W])) {
          ge = W;
          break;
        }
        ge === void 0 ? de(oe, g, _, true) : (lt[ge - R] = m + 1, ge >= pe ? pe = ge : he = true, F(oe, u[ge], h, null, g, _, w, y, v), se++);
      }
      const Qn = he ? xo(lt) : Qe;
      for (W = Qn.length - 1, m = re - 1; m >= 0; m--) {
        const oe = R + m, ge = u[oe], kn = u[oe + 1], es = oe + 1 < P ? kn.el || Or(kn) : b;
        lt[m] === 0 ? F(null, ge, h, es, g, _, w, y, v) : he && (W < 0 || m !== Qn[W] ? Ve(ge, h, es, 2) : W--);
      }
    }
  }, Ve = (c, u, h, b, g = null) => {
    const { el: _, type: w, transition: y, children: v, shapeFlag: m } = c;
    if (m & 6) {
      Ve(c.component.subTree, u, h, b);
      return;
    }
    if (m & 128) {
      c.suspense.move(u, h, b);
      return;
    }
    if (m & 64) {
      w.move(c, u, h, ot);
      return;
    }
    if (w === be) {
      s(_, u, h);
      for (let x = 0; x < v.length; x++) Ve(v[x], u, h, b);
      s(c.anchor, u, h);
      return;
    }
    if (w === hn) {
      G(c, u, h);
      return;
    }
    if (b !== 2 && m & 1 && y) if (b === 0) y.beforeEnter(_), s(_, u, h), le(() => y.enter(_), g);
    else {
      const { leave: x, delayLeave: E, afterLeave: M } = y, R = () => {
        c.ctx.isUnmounted ? r(_) : s(_, u, h);
      }, j = () => {
        _._isLeaving && _[$i](true), x(_, () => {
          R(), M && M();
        });
      };
      E ? E(_, R, j) : j();
    }
    else s(_, u, h);
  }, de = (c, u, h, b = false, g = false) => {
    const { type: _, props: w, ref: y, children: v, dynamicChildren: m, shapeFlag: P, patchFlag: x, dirs: E, cacheIndex: M } = c;
    if (x === -2 && (g = false), y != null && (Te(), pt(y, null, h, c, true), Me()), M != null && (u.renderCache[M] = void 0), P & 256) {
      u.ctx.deactivate(c);
      return;
    }
    const R = P & 1 && E, j = !gt(c);
    let W;
    if (j && (W = w && w.onVnodeBeforeUnmount) && _e(W, u, c), P & 6) jr(c.component, h, b);
    else {
      if (P & 128) {
        c.suspense.unmount(h, b);
        return;
      }
      R && Ge(c, null, u, "beforeUnmount"), P & 64 ? c.type.remove(c, u, h, ot, b) : m && !m.hasOnce && (_ !== be || x > 0 && x & 64) ? it(m, u, h, false, true) : (_ === be && x & 384 || !g && P & 16) && it(v, u, h), b && Xn(c);
    }
    (j && (W = w && w.onVnodeUnmounted) || R) && le(() => {
      W && _e(W, u, c), R && Ge(c, null, u, "unmounted");
    }, h);
  }, Xn = (c) => {
    const { type: u, el: h, anchor: b, transition: g } = c;
    if (u === be) {
      $r(h, b);
      return;
    }
    if (u === hn) {
      T(c);
      return;
    }
    const _ = () => {
      r(h), g && !g.persisted && g.afterLeave && g.afterLeave();
    };
    if (c.shapeFlag & 1 && g && !g.persisted) {
      const { leave: w, delayLeave: y } = g, v = () => w(h, _);
      y ? y(c.el, _, v) : v();
    } else _();
  }, $r = (c, u) => {
    let h;
    for (; c !== u; ) h = S(c), r(c), c = h;
    r(u);
  }, jr = (c, u, h) => {
    const { bum: b, scope: g, job: _, subTree: w, um: y, m: v, a: m } = c;
    hs(v), hs(m), b && rn(b), g.stop(), _ && (_.flags |= 8, de(w, c, u, h)), y && le(y, u), le(() => {
      c.isUnmounted = true;
    }, u);
  }, it = (c, u, h, b = false, g = false, _ = 0) => {
    for (let w = _; w < c.length; w++) de(c[w], u, h, b, g);
  }, Rt = (c) => {
    if (c.shapeFlag & 6) return Rt(c.component.subTree);
    if (c.shapeFlag & 128) return c.suspense.next();
    const u = S(c.anchor || c.el), h = u && u[Li];
    return h ? S(h) : u;
  };
  let nn = false;
  const Zn = (c, u, h) => {
    let b;
    c == null ? u._vnode && (de(u._vnode, null, null, true), b = u._vnode.component) : F(u._vnode || null, c, u, null, null, null, h), u._vnode = c, nn || (nn = true, rs(b), ir(), nn = false);
  }, ot = { p: F, um: de, m: Ve, r: Xn, mt: tn, mc: Re, pc: $, pbc: Ke, n: Rt, o: e };
  return { render: Zn, hydrate: void 0, createApp: ro(Zn) };
}
function dn({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function ze({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function wo(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Tr(e, t, n = false) {
  const s = e.children, r = t.children;
  if (A(s) && A(r)) for (let i = 0; i < s.length; i++) {
    const o = s[i];
    let l = r[i];
    l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = r[i] = Ue(r[i]), l.el = o.el), !n && l.patchFlag !== -2 && Tr(o, l)), l.type === en && (l.patchFlag !== -1 ? l.el = o.el : l.__elIndex = i + (e.type === be ? 1 : 0)), l.type === He && !l.el && (l.el = o.el);
  }
}
function xo(e) {
  const t = e.slice(), n = [0];
  let s, r, i, o, l;
  const f = e.length;
  for (s = 0; s < f; s++) {
    const d = e[s];
    if (d !== 0) {
      if (r = n[n.length - 1], e[r] < d) {
        t[s] = r, n.push(s);
        continue;
      }
      for (i = 0, o = n.length - 1; i < o; ) l = i + o >> 1, e[n[l]] < d ? i = l + 1 : o = l;
      d < e[n[i]] && (i > 0 && (t[s] = n[i - 1]), n[i] = s);
    }
  }
  for (i = n.length, o = n[i - 1]; i-- > 0; ) n[i] = o, o = t[o];
  return n;
}
function Mr(e) {
  const t = e.subTree.component;
  if (t) return t.asyncDep && !t.asyncResolved ? t : Mr(t);
}
function hs(e) {
  if (e) for (let t = 0; t < e.length; t++) e[t].flags |= 8;
}
function Or(e) {
  if (e.placeholder) return e.placeholder;
  const t = e.component;
  return t ? Or(t.subTree) : null;
}
const Ar = (e) => e.__isSuspense;
function So(e, t) {
  t && t.pendingBranch ? A(e) ? t.effects.push(...e) : t.effects.push(e) : Ai(e);
}
const be = /* @__PURE__ */ Symbol.for("v-fgt"), en = /* @__PURE__ */ Symbol.for("v-txt"), He = /* @__PURE__ */ Symbol.for("v-cmt"), hn = /* @__PURE__ */ Symbol.for("v-stc"), mt = [];
let ce = null;
function bt(e = false) {
  mt.push(ce = e ? null : []);
}
function Co() {
  mt.pop(), ce = mt[mt.length - 1] || null;
}
let Ct = 1;
function ps(e, t = false) {
  Ct += e, e < 0 && ce && t && (ce.hasOnce = true);
}
function Ir(e) {
  return e.dynamicChildren = Ct > 0 ? ce || Qe : null, Co(), Ct > 0 && ce && ce.push(e), e;
}
function $t(e, t, n, s, r, i) {
  return Ir(vt(e, t, n, s, r, i, true));
}
function Eo(e, t, n, s, r) {
  return Ir(xe(e, t, n, s, r, true));
}
function Rr(e) {
  return e ? e.__v_isVNode === true : false;
}
function ft(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Fr = ({ key: e }) => e ?? null, jt = ({ ref: e, ref_key: t, ref_for: n }) => (typeof e == "number" && (e = "" + e), e != null ? J(e) || X(e) || O(e) ? { i: ye, r: e, k: t, f: !!n } : e : null);
function vt(e, t = null, n = null, s = 0, r = null, i = e === be ? 0 : 1, o = false, l = false) {
  const f = { __v_isVNode: true, __v_skip: true, type: e, props: t, key: t && Fr(t), ref: t && jt(t), scopeId: lr, slotScopeIds: null, children: n, component: null, suspense: null, ssContent: null, ssFallback: null, dirs: null, transition: null, el: null, anchor: null, target: null, targetStart: null, targetAnchor: null, staticCount: 0, shapeFlag: i, patchFlag: s, dynamicProps: r, dynamicChildren: null, appContext: null, ctx: ye };
  return l ? (qn(f, n), i & 128 && e.normalize(f)) : n && (f.shapeFlag |= J(n) ? 8 : 16), Ct > 0 && !o && ce && (f.patchFlag > 0 || i & 6) && f.patchFlag !== 32 && ce.push(f), f;
}
const xe = Po;
function Po(e, t = null, n = null, s = 0, r = null, i = false) {
  if ((!e || e === Xi) && (e = He), Rr(e)) {
    const l = st(e, t, true);
    return n && qn(l, n), Ct > 0 && !i && ce && (l.shapeFlag & 6 ? ce[ce.indexOf(e)] = l : ce.push(l)), l.patchFlag = -2, l;
  }
  if ($o(e) && (e = e.__vccOpts), t) {
    t = To(t);
    let { class: l, style: f } = t;
    l && !J(l) && (t.class = Rn(l)), V(f) && (Nn(f) && !A(f) && (f = Z({}, f)), t.style = In(f));
  }
  const o = J(e) ? 1 : Ar(e) ? 128 : Wi(e) ? 64 : V(e) ? 4 : O(e) ? 2 : 0;
  return vt(e, t, n, s, r, o, i, true);
}
function To(e) {
  return e ? Nn(e) || wr(e) ? Z({}, e) : e : null;
}
function st(e, t, n = false, s = false) {
  const { props: r, ref: i, patchFlag: o, children: l, transition: f } = e, d = t ? Oo(r || {}, t) : r, a = { __v_isVNode: true, __v_skip: true, type: e.type, props: d, key: d && Fr(d), ref: t && t.ref ? n && i ? A(i) ? i.concat(jt(t)) : [i, jt(t)] : jt(t) : i, scopeId: e.scopeId, slotScopeIds: e.slotScopeIds, children: l, target: e.target, targetStart: e.targetStart, targetAnchor: e.targetAnchor, staticCount: e.staticCount, shapeFlag: e.shapeFlag, patchFlag: t && e.type !== be ? o === -1 ? 16 : o | 16 : o, dynamicProps: e.dynamicProps, dynamicChildren: e.dynamicChildren, appContext: e.appContext, dirs: e.dirs, transition: f, component: e.component, suspense: e.suspense, ssContent: e.ssContent && st(e.ssContent), ssFallback: e.ssFallback && st(e.ssFallback), placeholder: e.placeholder, el: e.el, anchor: e.anchor, ctx: e.ctx, ce: e.ce };
  return f && s && Bn(a, f.clone(a)), a;
}
function Mo(e = " ", t = 0) {
  return xe(en, null, e, t);
}
function gs(e = "", t = false) {
  return t ? (bt(), Eo(He, null, e)) : xe(He, null, e);
}
function ve(e) {
  return e == null || typeof e == "boolean" ? xe(He) : A(e) ? xe(be, null, e.slice()) : Rr(e) ? Ue(e) : xe(en, null, String(e));
}
function Ue(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : st(e);
}
function qn(e, t) {
  let n = 0;
  const { shapeFlag: s } = e;
  if (t == null) t = null;
  else if (A(t)) n = 16;
  else if (typeof t == "object") if (s & 65) {
    const r = t.default;
    r && (r._c && (r._d = false), qn(e, r()), r._c && (r._d = true));
    return;
  } else {
    n = 32;
    const r = t._;
    !r && !wr(t) ? t._ctx = ye : r === 3 && ye && (ye.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
  }
  else O(t) ? (t = { default: t, _ctx: ye }, n = 32) : (t = String(t), s & 64 ? (n = 16, t = [Mo(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function Oo(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    for (const r in s) if (r === "class") t.class !== s.class && (t.class = Rn([t.class, s.class]));
    else if (r === "style") t.style = In([t.style, s.style]);
    else if (qt(r)) {
      const i = t[r], o = s[r];
      o && i !== o && !(A(i) && i.includes(o)) && (t[r] = i ? [].concat(i, o) : o);
    } else r !== "" && (t[r] = s[r]);
  }
  return t;
}
function _e(e, t, n, s = null) {
  Se(e, t, 7, [n, s]);
}
const Ao = mr();
let Io = 0;
function Ro(e, t, n) {
  const s = e.type, r = (t ? t.appContext : e.appContext) || Ao, i = { uid: Io++, vnode: e, type: s, parent: t, appContext: r, root: null, next: null, subTree: null, effect: null, update: null, job: null, scope: new Zr(true), render: null, proxy: null, exposed: null, exposeProxy: null, withProxy: null, provides: t ? t.provides : Object.create(r.provides), ids: t ? t.ids : ["", 0, 0], accessCache: null, renderCache: [], components: null, directives: null, propsOptions: Sr(s, r), emitsOptions: br(s, r), emit: null, emitted: null, propsDefaults: N, inheritAttrs: s.inheritAttrs, ctx: N, data: N, props: N, attrs: N, slots: N, refs: N, setupState: N, setupContext: null, suspense: n, suspenseId: n ? n.pendingId : 0, asyncDep: null, asyncResolved: false, isMounted: false, isUnmounted: false, isDeactivated: false, bc: null, c: null, bm: null, m: null, bu: null, u: null, um: null, bum: null, da: null, a: null, rtg: null, rtc: null, ec: null, sp: null };
  return i.ctx = { _: i }, i.root = t ? t.root : i, i.emit = oo.bind(null, i), e.ce && e.ce(i), i;
}
let ne = null;
const Fo = () => ne || ye;
let zt, En;
{
  const e = Xt(), t = (n, s) => {
    let r;
    return (r = e[n]) || (r = e[n] = []), r.push(s), (i) => {
      r.length > 1 ? r.forEach((o) => o(i)) : r[0](i);
    };
  };
  zt = t("__VUE_INSTANCE_SETTERS__", (n) => ne = n), En = t("__VUE_SSR_SETTERS__", (n) => Et = n);
}
const Tt = (e) => {
  const t = ne;
  return zt(e), e.scope.on(), () => {
    e.scope.off(), zt(t);
  };
}, _s = () => {
  ne && ne.scope.off(), zt(null);
};
function Dr(e) {
  return e.vnode.shapeFlag & 4;
}
let Et = false;
function Do(e, t = false, n = false) {
  t && En(t);
  const { props: s, children: r } = e.vnode, i = Dr(e);
  ho(e, s, i, t), mo(e, r, n || t);
  const o = i ? Uo(e, t) : void 0;
  return t && En(false), o;
}
function Uo(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Zi);
  const { setup: s } = n;
  if (s) {
    Te();
    const r = e.setupContext = s.length > 1 ? Wo(e) : null, i = Tt(e), o = Pt(s, e, 0, [e.props, r]), l = Fs(o);
    if (Me(), i(), (l || e.sp) && !gt(e) && ar(e), l) {
      if (o.then(_s, _s), t) return o.then((f) => {
        ms(e, f);
      }).catch((f) => {
        Zt(f, e, 0);
      });
      e.asyncDep = o;
    } else ms(e, o);
  } else Ur(e);
}
function ms(e, t, n) {
  O(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : V(t) && (e.setupState = nr(t)), Ur(e);
}
function Ur(e, t, n) {
  const s = e.type;
  e.render || (e.render = s.render || we);
  {
    const r = Tt(e);
    Te();
    try {
      Qi(e);
    } finally {
      Me(), r();
    }
  }
}
const Lo = { get(e, t) {
  return Y(e, "get", ""), e[t];
} };
function Wo(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return { attrs: new Proxy(e.attrs, Lo), slots: e.slots, emit: e.emit, expose: t };
}
function Jn(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(nr(bi(e.exposed)), { get(t, n) {
    if (n in t) return t[n];
    if (n in _t) return _t[n](e);
  }, has(t, n) {
    return n in t || n in _t;
  } })) : e.proxy;
}
function $o(e) {
  return O(e) && "__vccOpts" in e;
}
const jo = (e, t) => Ci(e, t, Et), Ho = "3.5.26";
let Pn;
const bs = typeof window < "u" && window.trustedTypes;
if (bs) try {
  Pn = bs.createPolicy("vue", { createHTML: (e) => e });
} catch {
}
const Lr = Pn ? (e) => Pn.createHTML(e) : (e) => e, No = "http://www.w3.org/2000/svg", Ko = "http://www.w3.org/1998/Math/MathML", Ee = typeof document < "u" ? document : null, vs = Ee && Ee.createElement("template"), Bo = { insert: (e, t, n) => {
  t.insertBefore(e, n || null);
}, remove: (e) => {
  const t = e.parentNode;
  t && t.removeChild(e);
}, createElement: (e, t, n, s) => {
  const r = t === "svg" ? Ee.createElementNS(No, e) : t === "mathml" ? Ee.createElementNS(Ko, e) : n ? Ee.createElement(e, { is: n }) : Ee.createElement(e);
  return e === "select" && s && s.multiple != null && r.setAttribute("multiple", s.multiple), r;
}, createText: (e) => Ee.createTextNode(e), createComment: (e) => Ee.createComment(e), setText: (e, t) => {
  e.nodeValue = t;
}, setElementText: (e, t) => {
  e.textContent = t;
}, parentNode: (e) => e.parentNode, nextSibling: (e) => e.nextSibling, querySelector: (e) => Ee.querySelector(e), setScopeId(e, t) {
  e.setAttribute(t, "");
}, insertStaticContent(e, t, n, s, r, i) {
  const o = n ? n.previousSibling : t.lastChild;
  if (r && (r === i || r.nextSibling)) for (; t.insertBefore(r.cloneNode(true), n), !(r === i || !(r = r.nextSibling)); ) ;
  else {
    vs.innerHTML = Lr(s === "svg" ? `<svg>${e}</svg>` : s === "mathml" ? `<math>${e}</math>` : e);
    const l = vs.content;
    if (s === "svg" || s === "mathml") {
      const f = l.firstChild;
      for (; f.firstChild; ) l.appendChild(f.firstChild);
      l.removeChild(f);
    }
    t.insertBefore(l, n);
  }
  return [o ? o.nextSibling : t.firstChild, n ? n.previousSibling : t.lastChild];
} }, Vo = /* @__PURE__ */ Symbol("_vtc");
function Go(e, t, n) {
  const s = e[Vo];
  s && (t = (t ? [t, ...s] : [...s]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const ys = /* @__PURE__ */ Symbol("_vod"), zo = /* @__PURE__ */ Symbol("_vsh"), qo = /* @__PURE__ */ Symbol(""), Jo = /(?:^|;)\s*display\s*:/;
function Yo(e, t, n) {
  const s = e.style, r = J(n);
  let i = false;
  if (n && !r) {
    if (t) if (J(t)) for (const o of t.split(";")) {
      const l = o.slice(0, o.indexOf(":")).trim();
      n[l] == null && Ht(s, l, "");
    }
    else for (const o in t) n[o] == null && Ht(s, o, "");
    for (const o in n) o === "display" && (i = true), Ht(s, o, n[o]);
  } else if (r) {
    if (t !== n) {
      const o = s[qo];
      o && (n += ";" + o), s.cssText = n, i = Jo.test(n);
    }
  } else t && e.removeAttribute("style");
  ys in e && (e[ys] = i ? s.display : "", e[zo] && (s.display = "none"));
}
const ws = /\s*!important$/;
function Ht(e, t, n) {
  if (A(n)) n.forEach((s) => Ht(e, t, s));
  else if (n == null && (n = ""), t.startsWith("--")) e.setProperty(t, n);
  else {
    const s = Xo(e, t);
    ws.test(n) ? e.setProperty(Ye(s), n.replace(ws, ""), "important") : e[s] = n;
  }
}
const xs = ["Webkit", "Moz", "ms"], pn = {};
function Xo(e, t) {
  const n = pn[t];
  if (n) return n;
  let s = $e(t);
  if (s !== "filter" && s in e) return pn[t] = s;
  s = Ls(s);
  for (let r = 0; r < xs.length; r++) {
    const i = xs[r] + s;
    if (i in e) return pn[t] = i;
  }
  return t;
}
const Ss = "http://www.w3.org/1999/xlink";
function Cs(e, t, n, s, r, i = Xr(t)) {
  s && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Ss, t.slice(6, t.length)) : e.setAttributeNS(Ss, t, n) : n == null || i && !$s(n) ? e.removeAttribute(t) : e.setAttribute(t, i ? "" : Ne(n) ? String(n) : n);
}
function Es(e, t, n, s, r) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? Lr(n) : n);
    return;
  }
  const i = e.tagName;
  if (t === "value" && i !== "PROGRESS" && !i.includes("-")) {
    const l = i === "OPTION" ? e.getAttribute("value") || "" : e.value, f = n == null ? e.type === "checkbox" ? "on" : "" : String(n);
    (l !== f || !("_value" in e)) && (e.value = f), n == null && e.removeAttribute(t), e._value = n;
    return;
  }
  let o = false;
  if (n === "" || n == null) {
    const l = typeof e[t];
    l === "boolean" ? n = $s(n) : n == null && l === "string" ? (n = "", o = true) : l === "number" && (n = 0, o = true);
  }
  try {
    e[t] = n;
  } catch {
  }
  o && e.removeAttribute(r || t);
}
function Zo(e, t, n, s) {
  e.addEventListener(t, n, s);
}
function Qo(e, t, n, s) {
  e.removeEventListener(t, n, s);
}
const Ps = /* @__PURE__ */ Symbol("_vei");
function ko(e, t, n, s, r = null) {
  const i = e[Ps] || (e[Ps] = {}), o = i[t];
  if (s && o) o.value = s;
  else {
    const [l, f] = el(t);
    if (s) {
      const d = i[t] = sl(s, r);
      Zo(e, l, d, f);
    } else o && (Qo(e, l, o, f), i[t] = void 0);
  }
}
const Ts = /(?:Once|Passive|Capture)$/;
function el(e) {
  let t;
  if (Ts.test(e)) {
    t = {};
    let s;
    for (; s = e.match(Ts); ) e = e.slice(0, e.length - s[0].length), t[s[0].toLowerCase()] = true;
  }
  return [e[2] === ":" ? e.slice(3) : Ye(e.slice(2)), t];
}
let gn = 0;
const tl = Promise.resolve(), nl = () => gn || (tl.then(() => gn = 0), gn = Date.now());
function sl(e, t) {
  const n = (s) => {
    if (!s._vts) s._vts = Date.now();
    else if (s._vts <= n.attached) return;
    Se(rl(s, n.value), t, 5, [s]);
  };
  return n.value = e, n.attached = nl(), n;
}
function rl(e, t) {
  if (A(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = true;
    }, t.map((s) => (r) => !r._stopped && s && s(r));
  } else return t;
}
const Ms = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, il = (e, t, n, s, r, i) => {
  const o = r === "svg";
  t === "class" ? Go(e, s, o) : t === "style" ? Yo(e, n, s) : qt(t) ? Mn(t) || ko(e, t, n, s, i) : (t[0] === "." ? (t = t.slice(1), true) : t[0] === "^" ? (t = t.slice(1), false) : ol(e, t, s, o)) ? (Es(e, t, s), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Cs(e, t, s, o, i, t !== "value")) : e._isVueCE && (/[A-Z]/.test(t) || !J(s)) ? Es(e, $e(t), s, i, t) : (t === "true-value" ? e._trueValue = s : t === "false-value" && (e._falseValue = s), Cs(e, t, s, o));
};
function ol(e, t, n, s) {
  if (s) return !!(t === "innerHTML" || t === "textContent" || t in e && Ms(t) && O(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA") return false;
  if (t === "width" || t === "height") {
    const r = e.tagName;
    if (r === "IMG" || r === "VIDEO" || r === "CANVAS" || r === "SOURCE") return false;
  }
  return Ms(t) && J(n) ? false : t in e;
}
const ll = ["ctrl", "shift", "alt", "meta"], cl = { stop: (e) => e.stopPropagation(), prevent: (e) => e.preventDefault(), self: (e) => e.target !== e.currentTarget, ctrl: (e) => !e.ctrlKey, shift: (e) => !e.shiftKey, alt: (e) => !e.altKey, meta: (e) => !e.metaKey, left: (e) => "button" in e && e.button !== 0, middle: (e) => "button" in e && e.button !== 1, right: (e) => "button" in e && e.button !== 2, exact: (e, t) => ll.some((n) => e[`${n}Key`] && !t.includes(n)) }, Os = (e, t) => {
  const n = e._withMods || (e._withMods = {}), s = t.join(".");
  return n[s] || (n[s] = ((r, ...i) => {
    for (let o = 0; o < t.length; o++) {
      const l = cl[t[o]];
      if (l && l(r, t)) return;
    }
    return e(r, ...i);
  }));
}, fl = Z({ patchProp: il }, Bo);
let As;
function ul() {
  return As || (As = vo(fl));
}
const al = ((...e) => {
  const t = ul().createApp(...e), { mount: n } = t;
  return t.mount = (s) => {
    const r = hl(s);
    if (!r) return;
    const i = t._component;
    !O(i) && !i.render && !i.template && (i.template = r.innerHTML), r.nodeType === 1 && (r.textContent = "");
    const o = n(r, false, dl(r));
    return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), o;
  }, t;
});
function dl(e) {
  if (e instanceof SVGElement) return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement) return "mathml";
}
function hl(e) {
  return J(e) ? document.querySelector(e) : e;
}
const _z = class _z {
  static get config() {
    return this._config;
  }
  static get module() {
    return this._module;
  }
  static get wasmMemory() {
    var _a;
    return (_a = this._module) == null ? void 0 : _a.wasmMemory;
  }
  static async init(t) {
    var _a;
    if (this._config = t, t.canvas && !("gpu" in navigator)) {
      const o = "WebGPU is not supported in this browser";
      throw (_a = t.onError) == null ? void 0 : _a.call(t, o), new Error(o);
    }
    const n = { print(...o) {
      console.log(...o);
    }, canvas: t.canvas || void 0, noInitialRun: true, setStatus(o) {
      var _a2;
      o && ((_a2 = t.onStatusUpdate) == null ? void 0 : _a2.call(t, o), console.log("Status:", o));
    }, totalDependencies: 0, monitorRunDependencies(o) {
      var _a2;
      n.totalDependencies = Math.max(n.totalDependencies, o), o === 0 && ((_a2 = t.onLoadingChange) == null ? void 0 : _a2.call(t, false));
    }, locateFile(o, l) {
      if (o.endsWith(".wasm")) {
        if (t.wasmPath) {
          const a = t.wasmPath.startsWith("/") || t.wasmPath.startsWith("http") ? t.wasmPath : `/gss-editor-web/editor/${t.wasmPath}`;
          return console.log("EmscriptenWasmModule: Loading WASM from:", a), a;
        }
        const d = "/gss-editor-web/editor/app.wasm";
        return console.log("EmscriptenWasmModule: Loading WASM from default path:", d), d;
      }
      return l ? l + o : o;
    }, onRuntimeInitialized() {
      var _a2, _b;
      _z._module = n, _z.fn_gsr_get_scene = n.cwrap("gsr_get_scene", "number", []), _z.fn_gsr_get_scene || console.warn("EmscriptenWasmModule: gsr_get_scene function not found"), _z.fn_gsr_scene_get_entity_count = n.cwrap("gsr_scene_get_entity_count", "number", ["number"]), _z.fn_gsr_scene_get_entity_count || console.warn("EmscriptenWasmModule: gsr_scene_get_entity_count function not found"), _z.fn_gsr_scene_get_entity = n.cwrap("gsr_scene_get_entity", "number", ["number", "number"]), _z.fn_gsr_scene_get_entity || console.warn("EmscriptenWasmModule: gsr_scene_get_entity function not found"), _z.fn_gsr_entity_get_name = n.cwrap("gsr_entity_get_name", "number", ["number"]), _z.fn_gsr_entity_get_name || console.warn("EmscriptenWasmModule: gsr_entity_get_name function not found"), _z.fn_gsr_entity_get_name_len = n.cwrap("gsr_entity_get_name_len", "number", ["number"]), _z.fn_gsr_entity_get_name_len || console.warn("EmscriptenWasmModule: gsr_entity_get_name_len function not found"), _z.fn_gsr_entity_get_transform = n.cwrap("gsr_entity_get_transform", null, ["number", "number"]), _z.fn_gsr_entity_get_transform || console.warn("EmscriptenWasmModule: gsr_entity_get_transform function not found"), _z.fn_malloc = n._malloc || n.malloc, _z.fn_malloc || console.warn("EmscriptenWasmModule: malloc function not found"), _z.fn_free = n._free || n.free, _z.fn_free || console.warn("EmscriptenWasmModule: free function not found"), (_a2 = t.onLoadingChange) == null ? void 0 : _a2.call(t, false), (_b = t.onInitialized) == null ? void 0 : _b.call(t, n), console.log("WASM module initialized");
    } };
    window.Module = n, t.canvas && t.canvas.addEventListener("webglcontextlost", (o) => {
      var _a2;
      console.error("WebGL context lost"), (_a2 = t.onError) == null ? void 0 : _a2.call(t, "WebGPU context lost. Please reload the page."), o.preventDefault();
    }, false);
    const s = window.onerror;
    window.onerror = (o) => {
      var _a2, _b;
      return console.error("Error occurred:", o), (_a2 = t.onError) == null ? void 0 : _a2.call(t, "An error occurred. Check the console for details."), (_b = t.onLoadingChange) == null ? void 0 : _b.call(t, false), s ? s.call(window, o) : false;
    }, this._scriptElement = document.createElement("script"), this._scriptElement.type = "text/javascript", this._scriptElement.async = true;
    const i = t.jsPath || "/gss-editor-web/editor/app.js";
    this._scriptElement.src = i, await new Promise((o, l) => {
      this._scriptElement.onload = () => {
        o();
      }, this._scriptElement.onerror = () => {
        var _a2;
        const f = "Failed to load app.js. Make sure web-app/wasm/app.js exists and Vite is configured to serve it.";
        (_a2 = t.onError) == null ? void 0 : _a2.call(t, f), l(new Error(f));
      }, document.head.appendChild(this._scriptElement);
    }), this._module = n;
  }
  static cleanup() {
    this._scriptElement && this._scriptElement.parentNode && (this._scriptElement.parentNode.removeChild(this._scriptElement), this._scriptElement = null), window.Module === this._module && delete window.Module, window.onerror = null, this._module = void 0, this._config = void 0;
  }
  static getExportedFunction(t) {
    if (!this._module) {
      console.warn(`EmscriptenWasmModule: Module not initialized. Cannot get function: ${t}`);
      return;
    }
    return this._module[t];
  }
};
__publicField(_z, "_module");
__publicField(_z, "_scriptElement", null);
__publicField(_z, "_config");
__publicField(_z, "fn_gsr_get_scene");
__publicField(_z, "fn_gsr_scene_get_entity_count");
__publicField(_z, "fn_gsr_scene_get_entity");
__publicField(_z, "fn_gsr_entity_get_name");
__publicField(_z, "fn_gsr_entity_get_name_len");
__publicField(_z, "fn_gsr_entity_get_transform");
__publicField(_z, "fn_malloc");
__publicField(_z, "fn_free");
let z = _z;
const pl = { key: 0, class: "viewport-loading" }, gl = { key: 1, class: "viewport-error" }, _l = ur({ __name: "ViewportCanvas", setup(e) {
  const t = Ut(), n = Ut(), s = Ut(""), r = Ut(true);
  let i = null;
  const o = () => {
    var _a;
    if (!t.value || !n.value) return;
    const f = n.value.getBoundingClientRect(), d = Math.floor(f.width), a = Math.floor(f.height);
    if (d > 0 && a > 0) {
      t.value.width = d, t.value.height = a;
      const S = ((_a = window.Module) == null ? void 0 : _a.Browser) || window.Browser;
      (S == null ? void 0 : S.setCanvasSize) ? S.setCanvasSize(d, a, false) : console.warn("Browser.setCanvasSize not available. Canvas size updated but GLFW resize callback may not be triggered.");
    }
  }, l = (f) => {
    f.button === 2 && f.preventDefault();
  };
  return pr(async () => {
    if (!t.value) {
      s.value = "Canvas element not found";
      return;
    }
    const f = (d) => {
      d.button === 2 && d.preventDefault();
    };
    if (t.value.addEventListener("mousedown", f, true), t.value && n.value) {
      const d = n.value.getBoundingClientRect(), a = Math.floor(d.width), p = Math.floor(d.height);
      a > 0 && p > 0 && (t.value.width = a, t.value.height = p);
    }
    try {
      await z.init({ canvas: t.value, wasmPath: "/gss-editor-web/editor/app.wasm", jsPath: "/gss-editor-web/editor/app.js", onStatusUpdate: (d) => {
        console.log("Status:", d);
      }, onLoadingChange: (d) => {
        r.value = d;
      }, onError: (d) => {
        s.value = d, r.value = false;
      }, onInitialized: async (d) => {
        console.log("WASM module initialized and ready to use"), r.value = false, n.value && window.ResizeObserver ? (i = new ResizeObserver(() => {
          o();
        }), i.observe(n.value)) : window.addEventListener("resize", o);
        try {
          if (d._InitWebGPU) console.log("Calling InitWebGPU()..."), d._InitWebGPU();
          else if (d.ccall) console.log("Calling InitWebGPU() via ccall..."), d.ccall("InitWebGPU", null, []);
          else {
            console.warn("InitWebGPU() function not found");
            return;
          }
          const a = () => d._IsWebGPUInitialized ? d._IsWebGPUInitialized() === 1 : d.ccall ? d.ccall("IsWebGPUInitialized", "number", []) === 1 : false;
          let p = 0;
          const S = 100, C = 100;
          for (console.log("Waiting for WebGPU initialization..."); !a() && p < S; ) await new Promise((I) => setTimeout(I, C)), p++;
          if (!a()) throw new Error("WebGPU initialization timed out after 10 seconds");
          console.log("WebGPU initialization complete, starting render loop..."), o(), d._StartWebGPU ? (console.log("Calling StartWebGPU()..."), d._StartWebGPU(), console.log("StartWebGPU() called")) : d.ccall && (console.log("Calling StartWebGPU() via ccall..."), d.ccall("StartWebGPU", null, []));
        } catch (a) {
          console.error("Error initializing WebGPU:", a), s.value = `Failed to start WebGPU: ${a instanceof Error ? a.message : "Unknown error"}`;
        }
      } });
    } catch (d) {
      s.value = d instanceof Error ? d.message : "Unknown error occurred", r.value = false, console.error("WASM WebGPU initialization error:", d);
    }
  }), Vn(() => {
    i && (i.disconnect(), i = null), window.removeEventListener("resize", o), z.cleanup(), t.value && t.value.removeEventListener("mousedown", l, true);
  }), (f, d) => (bt(), $t("div", { class: "viewport-canvas", ref_key: "viewportRef", ref: n }, [vt("canvas", { ref_key: "canvasRef", ref: t, id: "editor-viewport", class: "viewport-canvas-element", onContextmenu: d[0] || (d[0] = Os(() => {
  }, ["prevent"])), onMousedown: Os(l, ["prevent", "right"]), tabindex: "0" }, null, 544), r.value ? (bt(), $t("div", pl, [...d[1] || (d[1] = [vt("div", { class: "loading-spinner" }, null, -1), vt("span", null, "Loading WebGPU...", -1)])])) : gs("", true), s.value ? (bt(), $t("div", gl, Hs(s.value), 1)) : gs("", true)], 512));
} }), Wr = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [s, r] of t) n[s] = r;
  return n;
}, ml = Wr(_l, [["__scopeId", "data-v-666a46b5"]]), bl = { class: "app-container" }, vl = ur({ __name: "App", setup(e) {
  return (t, n) => (bt(), $t("div", bl, [xe(ml)]));
} }), yl = Wr(vl, [["__scopeId", "data-v-25cf0c4d"]]), wl = al(yl);
wl.mount("#app");
