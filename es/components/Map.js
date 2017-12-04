var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import uiLoad from "../utils/uiLoad";
import uiResConfig from "../utils/uiResConfig";

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

            return React.createElement("div", { ref: function ref(e) {
                    return _this2._map = e;
                }, style: { width: width, height: height } });
        }
    }, {
        key: "componentDidMount",
        value: function componentDidMount() {
            var _this3 = this;

            uiLoad.load(uiResConfig.Map).then(function () {
                // eslint-disable-next-line no-undef
                _this3.map = new AMap.Map(_this3._map, _this3.state.options);
                _this3.map.setCity(_this3.props.city);
            });
        }
    }]);

    return Map;
}(React.Component);

export default Map;


Map.propTypes = {
    width: React.PropTypes.string,
    height: React.PropTypes.string,
    options: React.PropTypes.object,
    city: React.PropTypes.string
};

Map.defaultProps = {
    width: '100%',
    height: '100%',
    city: '北京'
};