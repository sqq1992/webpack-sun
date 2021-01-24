(function (graph) {
        function require(file) {
            function absRequire(relPath) {
                return require(graph[file].deps[relPath])
            }

            var exports = {};

            (function (require,exports,code) {
                eval(code)
            })(absRequire,exports,graph[file].code)
            return exports
        }
        require('./src/index.js')
    })({"./src/index.js":{"deps":{"./parent.js":"./src/parent.js"},"code":"\"use strict\";\n\nvar _parent = _interopRequireDefault(require(\"./parent.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\nconsole.log(_parent[\"default\"]);"},"./src/parent.js":{"deps":{"./child.js":"./src/child.js"},"code":"\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\n\nvar _child = _interopRequireDefault(require(\"./child.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\nvar _default = {\n  msg: '我是parent的信息',\n  child: _child[\"default\"].msg\n};\nexports[\"default\"] = _default;"},"./src/child.js":{"deps":{},"code":"\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\nvar _default = {\n  msg: '我是child的信息'\n};\nexports[\"default\"] = _default;"}})