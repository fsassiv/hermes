webpackJsonp([2],{15:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(42),i=n(53),s=n(0),a=s(o.a,i.a,!1,null,null,null);e.default=a.exports},35:function(t,e,n){/*!
 * 
 *   simple-keyboard v2.21.4
 *   https://github.com/hodgef/simple-keyboard
 * 
 *   Copyright (c) Francisco Hodge (https://github.com/hodgef)
 * 
 *   This source code is licensed under the MIT license found in the
 *   LICENSE file in the root directory of this source tree.
 *   
 */
!function(e,n){t.exports=n()}(window,function(){return function(t){function e(o){if(n[o])return n[o].exports;var i=n[o]={i:o,l:!1,exports:{}};return t[o].call(i.exports,i,i.exports,e),i.l=!0,i.exports}var n={};return e.m=t,e.c=n,e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:o})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(e.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var i in t)e.d(o,i,function(e){return t[e]}.bind(null,i));return o},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=0)}([function(t,e,n){t.exports=n(2)},function(t,e,n){},function(t,e,n){"use strict";function o(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function i(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function s(t){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function a(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function u(t){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}n.r(e),n(1);var c=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.simpleKeyboardInstance=e,this.initKeyboardListener=this.initKeyboardListener.bind(this),this.getSimpleKeyboardLayoutKey=this.getSimpleKeyboardLayoutKey.bind(this),this.initKeyboardListener()}var e,n;return e=t,(n=[{key:"initKeyboardListener",value:function(){var t=this;document.addEventListener("keydown",function(e){if(t.simpleKeyboardInstance.options.physicalKeyboardHighlight){var n=t.getSimpleKeyboardLayoutKey(e);t.simpleKeyboardInstance.dispatch(function(e){var o=e.getButtonElement(n)||e.getButtonElement("{".concat(n,"}"));o&&(o.style.backgroundColor=t.simpleKeyboardInstance.options.physicalKeyboardHighlightBgColor||"#9ab4d0",o.style.color=t.simpleKeyboardInstance.options.physicalKeyboardHighlightTextColor||"white")})}}),document.addEventListener("keyup",function(e){if(t.simpleKeyboardInstance.options.physicalKeyboardHighlight){var n=t.getSimpleKeyboardLayoutKey(e);t.simpleKeyboardInstance.dispatch(function(t){var e=t.getButtonElement(n)||t.getButtonElement("{".concat(n,"}"));e&&e.removeAttribute&&e.removeAttribute("style")})}})}},{key:"getSimpleKeyboardLayoutKey",value:function(t){var e;return((e=t.code.includes("Numpad")||t.code.includes("Shift")||t.code.includes("Space")||t.code.includes("Backspace")||t.code.includes("Control")||t.code.includes("Alt")||t.code.includes("Meta")?t.code:t.key)!==e.toUpperCase()||"F"===t.code[0]&&Number.isInteger(Number(t.code[1]))&&t.code.length<=3)&&(e=e.toLowerCase()),e}}])&&o(e.prototype,n),t}(),l=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}var e,n,o;return e=t,o=[{key:"getDefaultLayout",value:function(){return{default:["` 1 2 3 4 5 6 7 8 9 0 - = {bksp}","{tab} q w e r t y u i o p [ ] \\","{lock} a s d f g h j k l ; ' {enter}","{shift} z x c v b n m , . / {shift}",".com @ {space}"],shift:["~ ! @ # $ % ^ & * ( ) _ + {bksp}","{tab} Q W E R T Y U I O P { } |",'{lock} A S D F G H J K L : " {enter}',"{shift} Z X C V B N M < > ? {shift}",".com @ {space}"]}}}],(n=null)&&i(e.prototype,n),o&&i(e,o),t}(),d=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.simpleKeyboardInstance=e,t.bindMethods(t,this)}var e,n,o;return e=t,o=[{key:"bindMethods",value:function(t,e){var n=!0,o=!1,i=void 0;try{for(var s,a=Object.getOwnPropertyNames(t.prototype)[Symbol.iterator]();!(n=(s=a.next()).done);n=!0){var u=s.value;"constructor"===u||"bindMethods"===u||(e[u]=e[u].bind(e))}}catch(t){o=!0,i=t}finally{try{n||null==a.return||a.return()}finally{if(o)throw i}}}}],(n=[{key:"getButtonClass",value:function(t){var e=t.includes("{")&&t.includes("}")&&"{//}"!==t?"functionBtn":"standardBtn",n=t.replace("{","").replace("}",""),o="";return"standardBtn"!==e&&(o=" hg-button-".concat(n)),"hg-".concat(e).concat(o)}},{key:"getDefaultDiplay",value:function(){return{"{bksp}":"backspace","{backspace}":"backspace","{enter}":"< enter","{shift}":"shift","{shiftleft}":"shift","{shiftright}":"shift","{alt}":"alt","{s}":"shift","{tab}":"tab","{lock}":"caps","{capslock}":"caps","{accept}":"Submit","{space}":" ","{//}":" ","{esc}":"esc","{escape}":"esc","{f1}":"f1","{f2}":"f2","{f3}":"f3","{f4}":"f4","{f5}":"f5","{f6}":"f6","{f7}":"f7","{f8}":"f8","{f9}":"f9","{f10}":"f10","{f11}":"f11","{f12}":"f12","{numpaddivide}":"/","{numlock}":"lock","{arrowup}":"↑","{arrowleft}":"←","{arrowdown}":"↓","{arrowright}":"→","{prtscr}":"print","{scrolllock}":"scroll","{pause}":"pause","{insert}":"ins","{home}":"home","{pageup}":"up","{delete}":"del","{end}":"end","{pagedown}":"down","{numpadmultiply}":"*","{numpadsubtract}":"-","{numpadadd}":"+","{numpadenter}":"enter","{period}":".","{numpaddecimal}":".","{numpad0}":"0","{numpad1}":"1","{numpad2}":"2","{numpad3}":"3","{numpad4}":"4","{numpad5}":"5","{numpad6}":"6","{numpad7}":"7","{numpad8}":"8","{numpad9}":"9"}}},{key:"getButtonDisplayName",value:function(t,e,n){return(e=n?Object.assign({},this.getDefaultDiplay(),e):e||this.getDefaultDiplay())[t]||t}},{key:"getUpdatedInput",value:function(t,e,n,o,i){var s=e;return("{bksp}"===t||"{backspace}"===t)&&s.length>0?s=this.removeAt(s,o,i):"{space}"===t?s=this.addStringAt(s," ",o,i):"{tab}"!==t||"boolean"==typeof n.tabCharOnTab&&!1===n.tabCharOnTab?"{enter}"!==t&&"{numpadenter}"!==t||!n.newLineOnEnter?t.includes("numpad")&&Number.isInteger(Number(t[t.length-2]))?s=this.addStringAt(s,t[t.length-2],o,i):"{numpaddivide}"===t?s=this.addStringAt(s,"/",o,i):"{numpadmultiply}"===t?s=this.addStringAt(s,"*",o,i):"{numpadsubtract}"===t?s=this.addStringAt(s,"-",o,i):"{numpadadd}"===t?s=this.addStringAt(s,"+",o,i):"{numpaddecimal}"===t?s=this.addStringAt(s,".",o,i):"{"===t||"}"===t?s=this.addStringAt(s,t,o,i):t.includes("{")||t.includes("}")||(s=this.addStringAt(s,t,o,i)):s=this.addStringAt(s,"\n",o,i):s=this.addStringAt(s,"\t",o,i),s}},{key:"updateCaretPos",value:function(t,e){var n=this.updateCaretPosAction(this.simpleKeyboardInstance,t,e);this.simpleKeyboardInstance.options.syncInstanceInputs&&this.simpleKeyboardInstance.dispatch(function(t){t.caretPosition=n})}},{key:"updateCaretPosAction",value:function(t,e,n){return n?t.caretPosition>0&&(t.caretPosition=t.caretPosition-e):t.caretPosition=t.caretPosition+e,this.simpleKeyboardInstance.options.debug&&console.log("Caret at:",t.caretPosition,"(".concat(t.keyboardDOMClass,")")),t.caretPosition}},{key:"addStringAt",value:function(t,e,n,o){var i;return n||0===n?(i=[t.slice(0,n),e,t.slice(n)].join(""),this.isMaxLengthReached()||o&&this.updateCaretPos(e.length)):i=t+e,i}},{key:"removeAt",value:function(t,e,n){if(0===this.simpleKeyboardInstance.caretPosition)return t;var o,i=/([\uD800-\uDBFF][\uDC00-\uDFFF])/g;return e&&e>=0?t.substring(e-2,e).match(i)?(o=t.substr(0,e-2)+t.substr(e),n&&this.updateCaretPos(2,!0)):(o=t.substr(0,e-1)+t.substr(e),n&&this.updateCaretPos(1,!0)):t.slice(-2).match(i)?(o=t.slice(0,-2),n&&this.updateCaretPos(2,!0)):(o=t.slice(0,-1),n&&this.updateCaretPos(1,!0)),o}},{key:"handleMaxLength",value:function(t,e,n){var o=e.maxLength,i=t[e.inputName],a=i.length===o;if(n.length<=i.length)return!1;if(Number.isInteger(o))return e.debug&&console.log("maxLength (num) reached:",a),a?(this.maxLengthReached=!0,!0):(this.maxLengthReached=!1,!1);if("object"===s(o)){var u=i.length===o[e.inputName];return e.debug&&console.log("maxLength (obj) reached:",u),u?(this.maxLengthReached=!0,!0):(this.maxLengthReached=!1,!1)}}},{key:"isMaxLengthReached",value:function(){return Boolean(this.maxLengthReached)}},{key:"isTouchDevice",value:function(){return"ontouchstart"in window||navigator.maxTouchPoints}},{key:"pointerEventsSupported",value:function(){return window.PointerEvent}},{key:"camelCase",value:function(t){return t.toLowerCase().trim().split(/[.\-_\s]/g).reduce(function(t,e){return e.length?t+e[0].toUpperCase()+e.slice(1):t})}},{key:"countInArray",value:function(t,e){return t.reduce(function(t,n){return t+(n===e)},0)}}])&&a(e.prototype,n),o&&a(e,o),t}(),h=function(){function t(){var e=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.registerModule=function(t,n){e.modules[t]||(e.modules[t]={}),n(e.modules[t])};var n="string"==typeof(arguments.length<=0?void 0:arguments[0])?arguments.length<=0?void 0:arguments[0]:".simple-keyboard",o="object"===u(arguments.length<=0?void 0:arguments[0])?arguments.length<=0?void 0:arguments[0]:arguments.length<=1?void 0:arguments[1];if(o||(o={}),this.utilities=new d(this),this.keyboardDOM=document.querySelector(n),this.options=o,this.options.layoutName=this.options.layoutName||"default",this.options.theme=this.options.theme||"hg-theme-default",this.options.inputName=this.options.inputName||"default",this.options.preventMouseDownDefault=this.options.preventMouseDownDefault||!1,this.keyboardPluginClasses="",d.bindMethods(t,this),this.input={},this.input[this.options.inputName]="",this.keyboardDOMClass=n.split(".").join(""),this.buttonElements={},!this.keyboardDOM)throw console.warn('"'.concat(n,'" was not found in the DOM.')),new Error("KEYBOARD_DOM_ERROR");this.render(),window.SimpleKeyboardInstances||(window.SimpleKeyboardInstances={}),window.SimpleKeyboardInstances[this.utilities.camelCase(this.keyboardDOMClass)]=this,this.physicalKeyboardInterface=new c(this),this.modules={},this.loadModules()}var e,n;return e=t,(n=[{key:"handleButtonClicked",value:function(t){var e=this.options.debug;if("{//}"===t)return!1;"function"==typeof this.options.onKeyPress&&this.options.onKeyPress(t),this.input[this.options.inputName]||(this.input[this.options.inputName]="");var n=this.utilities.getUpdatedInput(t,this.input[this.options.inputName],this.options,this.caretPosition);if(this.input[this.options.inputName]!==n&&(!this.options.inputPattern||this.options.inputPattern&&this.inputPatternIsValid(n))){if(this.options.maxLength&&this.utilities.handleMaxLength(this.input,this.options,n))return!1;this.input[this.options.inputName]=this.utilities.getUpdatedInput(t,this.input[this.options.inputName],this.options,this.caretPosition,!0),e&&console.log("Input changed:",this.input),this.options.syncInstanceInputs&&this.syncInstanceInputs(this.input),"function"==typeof this.options.onChange&&this.options.onChange(this.input[this.options.inputName]),"function"==typeof this.options.onChangeAll&&this.options.onChangeAll(this.input)}e&&console.log("Key pressed:",t)}},{key:"handleButtonMouseDown",value:function(t,e){var n=this;this.options.preventMouseDownDefault&&e.preventDefault(),this.options.stopMouseDownPropagation&&e.stopPropagation(),this.isMouseHold=!0,this.holdInteractionTimeout&&clearTimeout(this.holdInteractionTimeout),this.holdTimeout&&clearTimeout(this.holdTimeout),this.holdTimeout=setTimeout(function(){!n.isMouseHold||(t.includes("{")||t.includes("}"))&&"{delete}"!==t&&"{backspace}"!==t&&"{bksp}"!==t&&"{space}"!==t&&"{tab}"!==t||(n.options.debug&&console.log("Button held:",t),n.handleButtonHold(t,e)),clearTimeout(n.holdTimeout)},500)}},{key:"handleButtonMouseUp",value:function(){this.isMouseHold=!1,this.holdInteractionTimeout&&clearTimeout(this.holdInteractionTimeout)}},{key:"handleButtonHold",value:function(t){var e=this;this.holdInteractionTimeout&&clearTimeout(this.holdInteractionTimeout),this.holdInteractionTimeout=setTimeout(function(){e.isMouseHold?(e.handleButtonClicked(t),e.handleButtonHold(t)):clearTimeout(e.holdInteractionTimeout)},100)}},{key:"syncInstanceInputs",value:function(){var t=this;this.dispatch(function(e){e.replaceInput(t.input),e.caretPosition=t.caretPosition})}},{key:"clearInput",value:function(t){t=t||this.options.inputName,this.input[t]="",this.caretPosition=0,this.options.syncInstanceInputs&&this.syncInstanceInputs(this.input)}},{key:"getInput",value:function(t){return t=t||this.options.inputName,this.options.syncInstanceInputs&&this.syncInstanceInputs(this.input),this.input[t]}},{key:"setInput",value:function(t,e){e=e||this.options.inputName,this.input[e]=t,this.options.syncInstanceInputs&&this.syncInstanceInputs(this.input)}},{key:"replaceInput",value:function(t){this.input=t}},{key:"setOptions",value:function(t){t=t||{},this.options=Object.assign(this.options,t),this.onSetOptions(t),this.render()}},{key:"onSetOptions",value:function(t){t.inputName&&(this.options.debug&&console.log("inputName changed. caretPosition reset."),this.caretPosition=null)}},{key:"clear",value:function(){this.keyboardDOM.innerHTML="",this.keyboardDOM.className=this.keyboardDOMClass,this.buttonElements={}}},{key:"dispatch",value:function(t){if(!window.SimpleKeyboardInstances)throw console.warn("SimpleKeyboardInstances is not defined. Dispatch cannot be called."),new Error("INSTANCES_VAR_ERROR");return Object.keys(window.SimpleKeyboardInstances).forEach(function(e){t(window.SimpleKeyboardInstances[e],e)})}},{key:"addButtonTheme",value:function(t,e){var n=this;if(!e||!t)return!1;t.split(" ").forEach(function(o){e.split(" ").forEach(function(e){n.options.buttonTheme||(n.options.buttonTheme=[]);var i=!1;n.options.buttonTheme.map(function(t){if(t.class.split(" ").includes(e)){i=!0;var n=t.buttons.split(" ");n.includes(o)||(i=!0,n.push(o),t.buttons=n.join(" "))}return t}),i||n.options.buttonTheme.push({class:e,buttons:t})})}),this.render()}},{key:"removeButtonTheme",value:function(t,e){var n=this;if(!t&&!e)return this.options.buttonTheme=[],this.render(),!1;t&&Array.isArray(this.options.buttonTheme)&&this.options.buttonTheme.length&&(t.split(" ").forEach(function(t,o){n.options.buttonTheme.map(function(o,i){if(e&&e.includes(o.class)||!e){var s=o.buttons.split(" ").filter(function(e){return e!==t});s.length?o.buttons=s.join(" "):(n.options.buttonTheme.splice(i,1),o=null)}return o})}),this.render())}},{key:"getButtonElement",value:function(t){var e,n=this.buttonElements[t];return n&&(e=n.length>1?n:n[0]),e}},{key:"inputPatternIsValid",value:function(t){var e,n=this.options.inputPattern;if((e=n instanceof RegExp?n:n[this.options.inputName])&&t){var o=e.test(t);return this.options.debug&&console.log('inputPattern ("'.concat(e,'"): ').concat(o?"passed":"did not pass!")),o}return!0}},{key:"handleCaret",value:function(){this.caretPosition=null;var t=window.SimpleKeyboardInstances;(t&&Object.keys(t)[0]===this.utilities.camelCase(this.keyboardDOMClass)||!t)&&(this.options.debug&&console.log("Caret handling started (".concat(this.keyboardDOMClass,")")),document.addEventListener("keyup",this.caretEventHandler),document.addEventListener("mouseup",this.caretEventHandler),document.addEventListener("touchend",this.caretEventHandler))}},{key:"caretEventHandler",value:function(t){var e;t.target.tagName&&(e=t.target.tagName.toLowerCase()),this.dispatch(function(n){n.isMouseHold&&(n.isMouseHold=!1),"textarea"!==e&&"input"!==e||n.options.disableCaretPositioning?n.options.disableCaretPositioning&&(n.caretPosition=null):(n.caretPosition=t.target.selectionStart,n.options.debug&&console.log("Caret at: ",t.target.selectionStart,t.target.tagName.toLowerCase(),"(".concat(n.keyboardDOMClass,")")))})}},{key:"getButtonTheme",value:function(){var t=this,e={};return this.options.buttonTheme.forEach(function(n){var o;n.buttons&&n.class?("string"==typeof n.buttons&&(o=n.buttons.split(" ")),o&&o.forEach(function(o){var i=e[o];i?t.utilities.countInArray(i.split(" "),n.class)||(e[o]="".concat(i," ").concat(n.class)):e[o]=n.class})):console.warn('buttonTheme row is missing the "buttons" or the "class". Please check the documentation.')}),e}},{key:"onTouchDeviceDetected",value:function(){this.processAutoTouchEvents(),this.disableContextualWindow()}},{key:"disableContextualWindow",value:function(){window.oncontextmenu=function(t){if(t.target.classList.contains("hg-button"))return t.preventDefault(),t.stopPropagation(),!1}}},{key:"processAutoTouchEvents",value:function(){this.options.autoUseTouchEvents&&(this.options.useTouchEvents=!0,this.options.debug&&console.log("autoUseTouchEvents: Touch device detected, useTouchEvents enabled."))}},{key:"onInit",value:function(){this.options.debug&&console.log("".concat(this.keyboardDOMClass," Initialized")),this.handleCaret(),"function"==typeof this.options.onInit&&this.options.onInit()}},{key:"beforeFirstRender",value:function(){this.utilities.isTouchDevice()&&this.onTouchDeviceDetected(),"function"==typeof this.options.beforeFirstRender&&this.options.beforeFirstRender(),!this.utilities.pointerEventsSupported()||this.options.useTouchEvents||this.options.useMouseEvents||this.options.debug&&console.log("Using PointerEvents as it is supported by this browser"),this.options.useTouchEvents&&this.options.debug&&console.log("useTouchEvents has been enabled. Only touch events will be used.")}},{key:"beforeRender",value:function(){"function"==typeof this.options.beforeRender&&this.options.beforeRender()}},{key:"onRender",value:function(){"function"==typeof this.options.onRender&&this.options.onRender()}},{key:"onModulesLoaded",value:function(){"function"==typeof this.options.onModulesLoaded&&this.options.onModulesLoaded()}},{key:"loadModules",value:function(){var t=this;Array.isArray(this.options.modules)&&(this.options.modules.forEach(function(e){var n=new e;if(n.constructor.name&&"Function"!==n.constructor.name){var o="module-".concat(t.utilities.camelCase(n.constructor.name));t.keyboardPluginClasses=t.keyboardPluginClasses+" ".concat(o)}n.init(t)}),this.keyboardPluginClasses=this.keyboardPluginClasses+" modules-loaded",this.render(),this.onModulesLoaded())}},{key:"getModuleProp",value:function(t,e){return!!this.modules[t]&&this.modules[t][e]}},{key:"getModulesList",value:function(){return Object.keys(this.modules)}},{key:"parseRowDOMContainers",value:function(t,e,n,o){var i=this,s=Array.from(t.children),a=0;return s.length&&n.forEach(function(n,u){var r=o[u];if(!(r&&r>n))return!1;var c=n-a,l=r-a,d=document.createElement("div");d.className+="hg-button-container";var h="".concat(i.options.layoutName,"-r").concat(e,"c").concat(u);d.setAttribute("data-skUID",h);var p=s.splice(c,l-c+1);a=l-c,p.forEach(function(t){return d.appendChild(t)}),s.splice(c,0,d),t.innerHTML="",s.forEach(function(e){return t.appendChild(e)}),i.options.debug&&console.log("rowDOMContainer",p,c,l,a+1)}),t}},{key:"render",value:function(){var t=this;this.clear(),this.initialized||this.beforeFirstRender(),this.beforeRender();var e="hg-layout-".concat(this.options.layoutName),n=this.options.layout||l.getDefaultLayout(),o=this.options.useTouchEvents||!1,i=o?"hg-touch-events":"",s=this.options.useMouseEvents||!1,a=this.options.disableRowButtonContainers,u=Array.isArray(this.options.buttonTheme)?this.getButtonTheme():{};this.keyboardDOM.className+=" ".concat(this.options.theme," ").concat(e," ").concat(this.keyboardPluginClasses," ").concat(i),n[this.options.layoutName].forEach(function(e,n){var i=e.split(" "),r=document.createElement("div");r.className+="hg-row";var c=[],l=[];i.forEach(function(e,i){var d=!a&&e.includes("[")&&e.length>1,h=!a&&e.includes("]")&&e.length>1;d&&(c.push(i),e=e.replace(/\[/g,"")),h&&(l.push(i),e=e.replace(/\]/g,""));var p=t.utilities.getButtonClass(e),f=u[e],b=t.utilities.getButtonDisplayName(e,t.options.display,t.options.mergeDisplay),m=t.options.useButtonTag?"button":"div",y=document.createElement(m);y.className+="hg-button ".concat(p).concat(f?" "+f:""),!t.utilities.pointerEventsSupported()||o||s?o?(y.ontouchstart=function(n){t.handleButtonClicked(e),t.handleButtonMouseDown(e,n)},y.ontouchend=function(e){return t.handleButtonMouseUp()},y.ontouchcancel=function(e){return t.handleButtonMouseUp()}):(y.onclick=function(){t.isMouseHold=!1,t.handleButtonClicked(e)},y.onmousedown=function(n){t.handleButtonMouseDown(e,n)}):(y.onpointerdown=function(n){t.handleButtonClicked(e),t.handleButtonMouseDown(e,n)},y.onpointerup=function(e){t.handleButtonMouseUp()},y.onpointercancel=function(e){return t.handleButtonMouseUp()}),y.setAttribute("data-skBtn",e);var g="".concat(t.options.layoutName,"-r").concat(n,"b").concat(i);y.setAttribute("data-skBtnUID",g),y.setAttribute("data-displayLabel",b);var v=document.createElement("span");v.innerHTML=b,y.appendChild(v),t.buttonElements[e]||(t.buttonElements[e]=[]),t.buttonElements[e].push(y),r.appendChild(y)}),r=t.parseRowDOMContainers(r,n,c,l),t.keyboardDOM.appendChild(r)}),this.onRender(),this.initialized||(this.initialized=!0,!this.utilities.pointerEventsSupported()||o||s?o?(document.ontouchend=function(e){return t.handleButtonMouseUp()},document.ontouchcancel=function(e){return t.handleButtonMouseUp()}):o||(document.onmouseup=function(){return t.handleButtonMouseUp()}):document.onpointerup=function(){return t.handleButtonMouseUp()},this.onInit())}}])&&r(e.prototype,n),t}();e.default=h}])})},36:function(t,e,n){var o=n(37);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);n(9)("41f95d93",o,!0,{})},37:function(t,e,n){e=t.exports=n(8)(!1),e.push([t.i,'/*!\n * \n *   simple-keyboard v2.21.4\n *   https://github.com/hodgef/simple-keyboard\n * \n *   Copyright (c) Francisco Hodge (https://github.com/hodgef)\n * \n *   This source code is licensed under the MIT license found in the\n *   LICENSE file in the root directory of this source tree.\n *   \n */body,html{margin:0;padding:0}.simple-keyboard{font-family:HelveticaNeue-Light,Helvetica Neue Light,Helvetica Neue,Helvetica,Arial,Lucida Grande,sans-serif;width:100%;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;box-sizing:border-box;overflow:hidden;touch-action:manipulation}.simple-keyboard .hg-row{display:-webkit-flex;display:flex}.simple-keyboard .hg-row:not(:last-child){margin-bottom:5px}.simple-keyboard .hg-row .hg-button-container,.simple-keyboard .hg-row .hg-button:not(:last-child){margin-right:5px}.simple-keyboard .hg-row>div:last-child{margin-right:0}.simple-keyboard .hg-row .hg-button-container{display:-webkit-flex;display:flex}.simple-keyboard .hg-button{display:inline-block;-webkit-flex-grow:1;flex-grow:1;cursor:pointer}.simple-keyboard .hg-button span{pointer-events:none}.simple-keyboard.hg-theme-default{background-color:rgba(0,0,0,.1);padding:5px;border-radius:5px}.simple-keyboard.hg-theme-default .hg-button{box-shadow:0 0 3px -1px rgba(0,0,0,.3);height:40px;border-radius:5px;box-sizing:border-box;padding:5px;background:#fff;border-bottom:1px solid #b5b5b5;cursor:pointer;display:-webkit-flex;display:flex;-webkit-align-items:center;align-items:center;-webkit-justify-content:center;justify-content:center}.simple-keyboard button.hg-button{border-width:0;outline:0;font-size:inherit}.simple-keyboard.hg-theme-default:not(.hg-touch-events) .hg-button:active{background:#e4e4e4}.simple-keyboard.hg-theme-default.hg-layout-numeric .hg-button{width:33.3%;height:60px;-webkit-align-items:center;align-items:center;display:-webkit-flex;display:flex;-webkit-justify-content:center;justify-content:center}.simple-keyboard.hg-theme-default .hg-button.hg-button-numpadadd,.simple-keyboard.hg-theme-default .hg-button.hg-button-numpadenter{height:85px}.simple-keyboard.hg-theme-default .hg-button.hg-button-numpad0{width:105px}.simple-keyboard.hg-theme-default .hg-button.hg-button-com{max-width:85px}.simple-keyboard.hg-theme-default .hg-button.hg-standardBtn.hg-button-at{max-width:45px}.simple-keyboard.hg-theme-default .hg-button.hg-selectedButton{background:rgba(5,25,70,.53);color:#fff}.simple-keyboard.hg-theme-default .hg-button.hg-standardBtn[data-skbtn=".com"]{max-width:82px}.simple-keyboard.hg-theme-default .hg-button.hg-standardBtn[data-skbtn="@"]{max-width:60px}',""])},42:function(t,e,n){"use strict";var o=n(35),i=n.n(o),s=n(36);n.n(s);e.a={name:"newguest",data:function(){return{keyboard_name:{},keyboard_description:{},keyboard_name_status:!1,keyboard_description_status:!1}},mounted:function(){var t=this;this.$nextTick(function(){document.querySelector(".iden__sidepanel-text").innerHTML="Por favor se identifique ao lado, preencha com seu nome e objetivo",t.hideElement(".iden__sidepanel-warning"),document.querySelector(".hg-button-enter").innerHTML="Próximo",document.querySelector(".hg-button-lock").innerHTML="Voltar",document.querySelector(".hg-button-bksp").innerHTML="Limpar"}),this.keyboard_name=new i.a,this.keyboard_description=new i.a},methods:{clickInput:function(){this.keyboard_name_status=!0,this.keyboard_description_status=!1},clickTextarea:function(){this.keyboard_name_status=!1,this.keyboard_description_status=!0},handleSubmit:function(){console.log("Submited")}}}},53:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"new-guest"},[n("form",{staticClass:"new-guest__form",on:{submit:function(e){return e.preventDefault(),t.handleSubmit(e)}}},[n("input",{staticClass:"new-guest__name app__input",attrs:{type:"text",id:"new-guest__name",readonly:"true"},on:{click:t.clickInput}}),t._v(" "),n("textarea",{staticClass:"new-guest__description app__textarea",attrs:{id:"new-guest__description",readonly:"true"},on:{click:t.clickTextarea}})]),t._v(" "),n("div",{staticClass:"new-guest__keyboard simple-keyboard hg-theme-default hg-layout-default",class:{active:t.keyboard_name_status||t.keyboard_description_status}})])},i=[],s={render:o,staticRenderFns:i};e.a=s}});
//# sourceMappingURL=2.build.js.map