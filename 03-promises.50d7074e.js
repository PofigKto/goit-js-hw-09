function e(e){return e&&e.__esModule?e.default:e}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},r=o.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in t){var o=t[e];delete t[e];var r={id:e,exports:{}};return n[e]=r,o.call(r.exports,r,r.exports),r.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,o){t[e]=o},o.parcelRequired7c6=r);var l=r("eWCmQ");const i={form:document.querySelector(".form"),delay:document.querySelector("[name = delay]"),step:document.querySelector("[name = step]"),amount:document.querySelector("[name = amount]")};function u(e,o){return new Promise(((n,t)=>{setTimeout((()=>{Math.random()>.3?n({position:e,delay:o}):t({position:e,delay:o})}),o)}))}i.form.addEventListener("submit",(o=>{o.preventDefault();const n=Number(i.delay.value),t=Number(i.step.value),r=Number(i.amount.value);for(let o=1;o<=r;o+=1){u(o,n+t*(o-1)).then((({position:o,delay:n})=>{console.log(`✅ Fulfilled promise ${o} in ${n}ms`),e(l).Notify.success(`Fulfilled promise ${o} in ${n}ms`)})).catch((({position:o,delay:n})=>{console.log(`❌ Rejected promise ${o} in ${n}ms`),e(l).Notify.failure(`Rejected promise ${o} in ${n}ms`)}))}}));
//# sourceMappingURL=03-promises.50d7074e.js.map