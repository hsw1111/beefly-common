"use strict";

exports.__esModule = true;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _uiLoad = require("../utils/uiLoad");

var _uiLoad2 = _interopRequireDefault(_uiLoad);

var _uiResConfig = require("../utils/uiResConfig");

var _uiResConfig2 = _interopRequireDefault(_uiResConfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * 地图组件
 */
var Map = function (_React$Component) {
    _inherits(Map, _React$Component);

    function Map(props) {
        _classCallCheck(this, Map);

        var _this = _possibleConstructorReturn(this, (Map.__proto__ || Object.getPrototypeOf(Map)).call(this, props));

        _this.state = {
            options: {
                resizeEnable: true,
                zoom: 11,
                center: [116.397428, 39.90923]
            }
        };

        _this.map = null;
        return _this;
    }

    _createClass(Map, [{
        key: "render",
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                width = _props.width,
                height = _props.height;

            return _react2.default.createElement("div", { ref: function ref(e) {
                    return _this2._map = e;
                }, style: { width: width, height: height } });
        }
    }, {
        key: "componentDidMount",
        value: function componentDidMount() {
            var _this3 = this;

            _uiLoad2.default.load(_uiResConfig2.default.Map).then(function () {
                // eslint-disable-next-line no-undef
                _this3.map = new AMap.Map(_this3._map, _this3.state.options);
                _this3.map.setCity(_this3.props.city);
            });
        }
    }]);

    return Map;
}(_react2.default.Component);

exports.default = Map;


Map.propTypes = {
    width: _react2.default.PropTypes.string,
    height: _react2.default.PropTypes.string,
    options: _react2.default.PropTypes.object,
    city: _react2.default.PropTypes.string
};

Map.defaultProps = {
    width: '100%',
    height: '100%',
    city: '北京'
};