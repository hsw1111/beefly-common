import _regeneratorRuntime from "babel-runtime/regenerator";
import _asyncToGenerator from "babel-runtime/helpers/asyncToGenerator";
import _Object$getPrototypeOf from "babel-runtime/core-js/object/get-prototype-of";
import _classCallCheck from "babel-runtime/helpers/classCallCheck";
import _createClass from "babel-runtime/helpers/createClass";
import _possibleConstructorReturn from "babel-runtime/helpers/possibleConstructorReturn";
import _inherits from "babel-runtime/helpers/inherits";
import React from "react";

//
// 创建路由异步组件
//
export default function asyncComponent(importComponent) {
    var AsyncComponent = function (_React$Component) {
        _inherits(AsyncComponent, _React$Component);

        function AsyncComponent(props) {
            _classCallCheck(this, AsyncComponent);

            var _this = _possibleConstructorReturn(this, (AsyncComponent.__proto__ || _Object$getPrototypeOf(AsyncComponent)).call(this, props));

            _this.state = {
                component: null
            };
            return _this;
        }

        _createClass(AsyncComponent, [{
            key: "componentDidMount",
            value: function () {
                var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
                    var _ref2, component;

                    return _regeneratorRuntime.wrap(function _callee$(_context) {
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

                return Component ? React.createElement(Component, this.props) : null;
            }
        }]);

        return AsyncComponent;
    }(React.Component);

    return AsyncComponent;
}