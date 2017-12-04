"use strict";

exports.__esModule = true;

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

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _uiLoad = require("../utils/uiLoad");

var _uiLoad2 = _interopRequireDefault(_uiLoad);

var _uiResConfig = require("../utils/uiResConfig");

var _uiResConfig2 = _interopRequireDefault(_uiResConfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * 地图组件
 */
var Map = function (_React$Component) {
    (0, _inherits3.default)(Map, _React$Component);

    function Map(props) {
        (0, _classCallCheck3.default)(this, Map);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Map.__proto__ || (0, _getPrototypeOf2.default)(Map)).call(this, props));

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

    (0, _createClass3.default)(Map, [{
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