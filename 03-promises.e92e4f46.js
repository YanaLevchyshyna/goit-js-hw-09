!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},t.parcelRequired7c6=r);var i=r("6JpON"),u={position:"right-top",distance:"12px",borderRadius:"25px",timeout:6e3,cssAnimationStyle:"fade"};function a(e,t){return new Promise((function(n,o){var r=Math.random()>.3;setTimeout((function(){r&&n({position:e,delay:t}),o({position:e,delay:t})}),t)}))}({form:document.querySelector(".form"),delay:document.querySelector('[name="delay"]'),step:document.querySelector('[name="step"]'),amount:document.querySelector('[name="amount"]')}).form.addEventListener("submit",(function(t){t.preventDefault();for(var n=t.currentTarget.elements,o=n.delay,r=n.step,l=n.amount,c=Number(o.value),d=Number(r.value),s=Number(l.value),f=1;f<=s;f+=1)a(f,c).then((function(t){var n=t.position,o=t.delay;e(i).Notify.success("Fulfilled promise ".concat(n," in ").concat(o,"ms"),u)})).catch((function(t){var n=t.position,o=t.delay;e(i).Notify.failure(" Rejected promise ".concat(n," in ").concat(o,"ms"),u)})),c+=d}))}();
//# sourceMappingURL=03-promises.e92e4f46.js.map