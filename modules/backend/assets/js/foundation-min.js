(()=>{"use strict";var e={5311:e=>{e.exports=jQuery}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,n),i.exports}(()=>{function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var t=function(){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this.started=!1}var n,r,o;return n=t,o=[{key:"disposeControls",value:function(e){e===document&&(e=document.documentElement),e.querySelectorAll("[data-disposable]").forEach((function(e){oc.Events.dispatch("october:dispose",{target:e,bubbles:!1})})),e.hasAttribute("data-disposable")&&oc.Events.dispatch("october:dispose",{target:e,bubbles:!1})}}],(r=[{key:"start",value:function(){this.started||(this.started=!0),this.bindAutoDisposal()}},{key:"stop",value:function(){this.started&&(this.started=!1)}},{key:"bindAutoDisposal",value:function(){addEventListener("page:before-render",(function(e){t.disposeControls(e.target)})),addEventListener("ajax:before-replace",(function(e){t.disposeControls(e.target)}))}}])&&e(n.prototype,r),o&&e(n,o),Object.defineProperty(n,"prototype",{writable:!1}),t}();function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var l=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.config=this.getConfig(t),this.proxiedMethods={}}var t,n;return t=e,(n=[{key:"dispose",value:function(){for(var e in this.proxiedMethods)this.proxiedMethods[e]=null;var t,n=function(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return s(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?s(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,c=!0,a=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return c=e.done,e},e:function(e){a=!0,i=e},f:function(){try{c||null==n.return||n.return()}finally{if(a)throw i}}}}(Object.getOwnPropertyNames(this));try{for(n.s();!(t=n.n()).done;)this[t.value]=null}catch(e){n.e(e)}finally{n.f()}}},{key:"proxy",value:function(t){return void 0===t.ocProxyId&&(e.proxyCounter++,t.ocProxyId=e.proxyCounter),void 0!==this.proxiedMethods[t.ocProxyId]||(this.proxiedMethods[t.ocProxyId]=t.bind(this)),this.proxiedMethods[t.ocProxyId]}},{key:"getConfig",value:function(e){return i(i({},this.constructor.DEFAULTS),"object"===r(e)?e:{})}}])&&c(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();a(l,"proxyCounter",0);var u=new Map;function f(e){if("true"===e)return!0;if("false"===e)return!1;if(e===Number(e).toString())return Number(e);if(""===e||"null"===e)return null;if("string"!=typeof e)return e;try{return JSON.parse(decodeURIComponent(e))}catch(t){return e}}const p=function(e){if(!e)return{};for(var t={},n=0,r=Object.keys(e.dataset);n<r.length;n++){var o=r[n];t[o]=f(e.dataset[o])}return t};function d(e){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},d(e)}function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(Object(n),!0).forEach((function(t){b(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function v(){return v="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=g(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},v.apply(this,arguments)}function g(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=S(e)););return e}function O(e,t){return O=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},O(e,t)}function w(e,t){if(t&&("object"===d(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return j(e)}function j(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function S(e){return S=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},S(e)}var P=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&O(e,t)}(i,e);var t,n,r,o=function(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=S(e);if(t){var o=S(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return w(this,n)}}(i);function i(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),(n=o.call(this)).element=C(e),n.config=n.getConfig(t),function(e,t,n){u.has(e)||u.set(e,new Map);var r=u.get(e);r.has(t)||0===r.size?r.set(t,n):console.error("[Foundation] Cannot bind more than one instance per element. Bound instance: ".concat(Array.from(r.keys())[0],"."))}(n.element,n.constructor.DATANAME,j(n)),n}return t=i,r=[{key:"getInstance",value:function(e){return function(e,t){return u.has(e)&&u.get(e).get(t)||null}(C(e),this.DATANAME)}},{key:"getOrCreateInstance",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.getInstance(e)||new this(e,"object"===d(t)?t:null)}}],(n=[{key:"dispose",value:function(){(function(e,t){if(u.has(e)){var n=u.get(e);n.delete(t),0===n.size&&u.delete(e)}})(this.element,this.constructor.DATANAME),oc.Events.off(this.element,"october:dispose",this.proxy(this.dispose)),v(S(i.prototype),"dispose",this).call(this)}},{key:"markDisposable",value:function(){this.element.setAttribute("data-disposable",""),oc.Events.on(this.element,"october:dispose",this.proxy(this.dispose))}},{key:"onDispose",value:function(e){oc.Events.on(this.element,"october:dispose",this.proxy(e))}},{key:"getConfig",value:function(e){return h(h(h({},this.constructor.DEFAULTS),p(this.element)),"object"===d(e)?e:{})}}])&&m(t.prototype,n),r&&m(t,r),Object.defineProperty(t,"prototype",{writable:!1}),i}(l);function C(e){return"string"==typeof object&&object.length>0?document.querySelector(object):e}var k=n(5311);function x(e){return x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},x(e)}function E(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function A(){return A="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=_(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},A.apply(this,arguments)}function _(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=T(e)););return e}function D(e,t){return D=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},D(e,t)}function R(e,t){if(t&&("object"===x(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function T(e){return T=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},T(e)}var I=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&D(e,t)}(i,e);var t,n,r,o=function(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=T(e);if(t){var o=T(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return R(this,n)}}(i);function i(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),(n=o.call(this,e,t)).$el=k(e),n.formatSelectOption=function(e){var t=k("<span>").text(e.text).html();if(void 0===e.id)return t;var n=k(e.element),r=e.status?e.status:n.data("status"),o=e.icon?e.icon:n.data("icon"),i=e.image?e.image:n.data("image");return r?'<span class="select-status status-indicator" style="background:'+r+'"></span> '+t:o?'<i class="select-icon '+o+'"></i> '+t:i?'<img class="select-image" src="'+i+'" alt="" /> '+t:t},n.disableSelect=function(e,t){null!=k(this).data("select2")&&k(this).select2("enable",!t)},n.triggerNativeChange=function(e){oc.Events.dispatch("change",{target:e.currentTarget}),k(e.currentTarget).one("change",n.triggerNativeChange)},n.destroyPlaceholder(),n.$el.one("change",n.proxy(n.triggerNativeChange)),n.$el.on("disable",n.proxy(n.disableSelect)),n.bindCustomSelect(),n.bindCustomSelectWorkaround(),n.markDisposable(),n}return t=i,n=[{key:"bindCustomSelectWorkaround",value:function(){this.$el.data("select2").$container.addClass(this.options.containerCssClass),this.select2OpenWorkaround=function(){setTimeout((function(){var e=document.querySelector(".select2-container--open .select2-search__field");e&&e.focus()}),100)},this.$el.on("select2:open",this.select2OpenWorkaround)}},{key:"dispose",value:function(){this.clonePlaceholder(),this.$el.off("change",this.proxy(this.triggerNativeChange)),this.$el.off("disable",this.proxy(this.disableSelect)),this.$el.off("select2:open",this.select2OpenWorkaround),this.$el.select2("destroy"),A(T(i.prototype),"dispose",this).call(this)}},{key:"destroyPlaceholder",value:function(){var e=this.element&&this.element.nextElementSibling;e&&e.matches(".select2")&&e.remove()}},{key:"clonePlaceholder",value:function(){var e=this.element&&this.element.nextElementSibling;if(e&&e.matches(".select2")){var t=e.cloneNode(!0);e.parentNode.insertBefore(t,e.nextSibling),t.innerHtml=e.innerHtml,this.element.style.display="none"}}},{key:"bindCustomSelect",value:function(){var e=this.options=this.buildSelectOptions();this.element.dataset.handler&&(e=this.buildAjaxHandlerOption(e,this.element.dataset.handler)),this.element.dataset.tokenSeparators&&(e=this.buildTokenSeparatorOptions(e,this.element.dataset.tokenSeparators)),this.$el.select2(e)}},{key:"buildTokenSeparatorOptions",value:function(e,t){return e.tags=!0,e.tokenSeparators=t.split("|"),this.element.classList.contains("select-no-dropdown")&&(e.selectOnClose=!0,e.minimumInputLength=1,this.$el.on("select2:closing",(function(){var e=k(".select2-dropdown.select-no-dropdown:first .select2-results__option--highlighted");e.length>0&&(e.removeClass("select2-results__option--highlighted"),k(".select2-dropdown.select-no-dropdown:first .select2-results__option:first").addClass("select2-results__option--highlighted"))}))),e}},{key:"buildAjaxHandlerOption",value:function(e,t){var n=this;return e.ajax={transport:function(e,r,o){var i=oc.request(n.$el.get(0),t,{data:e.data});return i.done(r),i.fail(o),i},processResults:function(e,t){var n=e.result||e.results,r=[];if(delete e.result,n[0]&&"object"===x(n[0]))r=n;else for(var o in n)n.hasOwnProperty(o)&&r.push({id:o,text:n[o]});return e.results=r,e},dataType:"json"},e}},{key:"buildSelectOptions",value:function(){var e={templateResult:this.formatSelectOption,templateSelection:this.formatSelectOption,escapeMarkup:function(e){return e},width:"style",containerCssClass:"",dropdownCssClass:"",selectionCssClass:""};this.element.classList.contains("select-no-search")&&(e.minimumResultsForSearch=1/0),this.element.classList.contains("select-no-dropdown")&&(e.dropdownCssClass+=" select-no-dropdown",e.selectionCssClass+=" select-no-dropdown"),this.element.classList.contains("select-hide-selected")&&(e.dropdownCssClass+=" select-hide-selected"),this.element.classList.contains("select-dropdown-auto-width")&&(e.dropdownAutoWidth=!0,e.dropdownCssClass+=" select-dropdown-auto-width"),this.element.classList.contains("form-control-sm")&&(e.containerCssClass+=" form-control-sm"),this.element.classList.contains("form-control-lg")&&(e.containerCssClass+=" form-control-lg");var t=this.element.dataset.language;if(!t){var n=document.querySelector('meta[name="backend-locale"]');n&&(t=n.getAttribute("content"))}t&&(e.language=t);var r=this.element.dataset.placeholder;return r&&(e.placeholder=r,e.allowClear=!0),e}}],r=[{key:"DATANAME",get:function(){return"ocSelect"}},{key:"DEFAULTS",get:function(){return{animation:!0,autohide:!0,delay:5e3}}}],n&&E(t.prototype,n),r&&E(t,r),Object.defineProperty(t,"prototype",{writable:!1}),i}(P);addEventListener("render",(function(){document.querySelectorAll("select.custom-select").forEach((function(e){I.getOrCreateInstance(e)}))}));var L=new t;window.oc&&(window.oc.Foundation=L,window.oc.FoundationBase=l,window.oc.FoundationPlugin=P),L.start()})()})();
