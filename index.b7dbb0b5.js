!function(){var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function e(t){return t&&t.__esModule?t.default:t}var n={},o={};Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(t){return t&&t.constructor===Symbol?"symbol":typeof t};var i=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,c=parseInt,a="object"==typeof t&&t&&t.Object===Object&&t,l="object"==typeof self&&self&&self.Object===Object&&self,s=a||l||Function("return this")(),d=Object.prototype.toString,v=Math.max,p=Math.min,b=function(){return s.Date.now()};function y(t){var n=void 0===t?"undefined":e(o)(t);return!!t&&("object"==n||"function"==n)}function m(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(o)(t))||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==d.call(t)}(t))return NaN;if(y(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=y(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var a=u.test(t);return a||f.test(t)?c(t.slice(2),a?2:8):r.test(t)?NaN:+t}n=function(t,e,n){var o,i,r,u,f,c,a=0,l=!1,s=!1,d=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function g(e){var n=o,r=i;return o=i=void 0,a=e,u=t.apply(r,n)}function h(t){return a=t,f=setTimeout(T,e),l?g(t):u}function j(t){var n=t-c;return void 0===c||n>=e||n<0||s&&t-a>=r}function T(){var t=b();if(j(t))return O(t);f=setTimeout(T,function(t){var n=e-(t-c);return s?p(n,r-(t-a)):n}(t))}function O(t){return f=void 0,d&&o?g(t):(o=i=void 0,u)}function w(){var t=b(),n=j(t);if(o=arguments,i=this,c=t,n){if(void 0===f)return h(c);if(s)return f=setTimeout(T,e),g(c)}return void 0===f&&(f=setTimeout(T,e)),u}return e=m(e)||0,y(n)&&(l=!!n.leading,r=(s="maxWait"in n)?v(m(n.maxWait)||0,e):r,d="trailing"in n?!!n.trailing:d),w.cancel=function(){void 0!==f&&clearTimeout(f),a=0,o=c=i=f=void 0},w.flush=function(){return void 0===f?u:O(b())},w};document.querySelector("input#search-box").addEventListener("input",(function(t){t.preventDefault(),console.log(t.currentTarget.value),n(fetch("https://restcountries.com/v3.1/independent?status=true&fields=name.official,population,languages,capital").then((function(t){return t.json()})).catch((function(t){return console.log(t)})),300)}))}();
//# sourceMappingURL=index.b7dbb0b5.js.map