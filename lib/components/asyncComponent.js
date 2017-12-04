"use strict";

exports.__esModule = true;

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

exports.default = asyncComponent;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
// 创建路由异步组件
//
function asyncComponent(importComponent) {
    var AsyncComponent = function (_React$Component) {
        (0, _inherits3.default)(AsyncComponent, _React$Component);

        function AsyncComponent(props) {
            (0, _classCallCheck3.default)(this, AsyncComponent);

            var _this = (0, _possibleConstructorReturn3.default)(this, (AsyncComponent.__proto__ || (0, _getPrototypeOf2.default)(AsyncComponent)).call(this, props));

            _this.state = {
                component: null
            };
            return _this;
        }

        (0, _createClass3.default)(AsyncComponent, [{
            key: "componentDidMount",
            value: function () {
                var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
                    var _ref2, component;

                    return _regenerator2.default.wrap(function _callee$(_context) {
                        while (1) {
                            switch (_context.prev = _context.next) {
                                case 0:
                                    _context.next = 2;
                                    return importComponent();

                                case 2:
                                    _ref2 = _context.sent;
                                    component = _ref2.default;


                                    this.setState({
                                        component: component
                                    });

                                case 5:
                                case "end":
                                    return _context.stop();
                            }
                        }
                    }, _callee, this);
                }));

                function componentDidMount() {
                    return _ref.apply(this, arguments);
                }

                return componentDidMount;
            }()
        }, {
            key: "render",
            value: function render() {
                var Component = this.state.component;

                return Component ? _react2.default.createElement(Component, this.props) : null;
            }
        }]);
        return AsyncComponent;
    }(_react2.default.Component);

    return AsyncComponent;
}