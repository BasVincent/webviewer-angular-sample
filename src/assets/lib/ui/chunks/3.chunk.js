(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{1424:function(e,t,r){"use strict";r(7),r(60),r(24),r(25),r(116),r(33),r(17),r(120),r(39),r(98),r(105),r(35),r(36),r(11),r(13),r(32),r(22),r(34),r(38),r(67),r(70),r(68),r(64),r(52),r(12),r(8),r(9),r(10);var n=r(0),o=r.n(n),a=r(4),i=r.n(a),c=r(6),u=r(193),l=r(341),p=r(134),s=r(242),f=r(531),m=r(187),y=r(3);function b(e){return(b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(){return(d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function v(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function O(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?v(Object(r),!0).forEach((function(t){g(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):v(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function g(e,t,r){return(t=function(e){var t=function(e,t){if("object"!==b(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!==b(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===b(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var j={dataElement:i.a.string.isRequired,children:i.a.arrayOf(i.a.any).isRequired},E=function(e){var t=e.dataElement,r=e.children,n=e.childrenClassName,a=Object(c.e)((function(e){return y.a.getPopupItems(e,t)}),c.c),i=o.a.Children.toArray(r);return a.map((function(e,t){var r=e.dataElement,a=e.type,c=e.hidden,y="".concat(a,"-").concat(r||t),b=null==c?void 0:c.map((function(e){return"hide-in-".concat(e)})).join(" "),v=i.find((function(e){return e.props.dataElement===r}));if(!v){var g=O(O({},e),{},{mediaQueryClassName:b,className:n});"toolButton"===a&&(v=o.a.createElement(u.a,g)),"toolGroupButton"===a&&(v=o.a.createElement(l.a,g)),"toggleElementButton"===a&&(v=o.a.createElement(p.a,g)),"actionButton"===a&&(v=o.a.createElement(s.a,g)),"statefulButton"===a&&(v=o.a.createElement(f.a,g)),"customElement"===a&&(v=o.a.createElement(m.a,g)),"spacer"!==a&&"divider"!==a||(v=o.a.createElement("div",d({className:"".concat(a," ").concat(b)},g)))}return v?o.a.cloneElement(v,{key:y}):null}))};E.propTypes=j;var w=E;t.a=w}}]);
//# sourceMappingURL=3.chunk.js.map