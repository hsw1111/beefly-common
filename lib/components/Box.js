'use strict';

exports.__esModule = true;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Box = function (_React$Component) {
    _inherits(Box, _React$Component);

    function Box() {
        _classCallCheck(this, Box);

        return _possibleConstructorReturn(this, (Box.__proto__ || Object.getPrototypeOf(Box)).apply(this, arguments));
    }

    _createClass(Box, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                title = _props.title,
                withBorder = _props.withBorder,
                theme = _props.theme;

            var themeClass = theme !== null && theme !== '' ? 'box-' + theme : '';
            return _react2.default.createElement(
                'div',
                { className: ['box', themeClass].join(' ') },
                title && _react2.default.createElement(
                    'div',
                    { className: (0, _classnames2.default)({ "box-header": true, "with-border": withBorder }) },
                    _react2.default.createElement(
                        'h3',
                        { className: 'box-title' },
                        title
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'box-body' },
                    this.props.children
                )
            );
        }
    }]);

    return Box;
}(_react2.default.Component);

exports.default = Box;


Box.propTypes = {
    title: _react2.default.PropTypes.string,
    withBorder: _react2.default.PropTypes.bool,
    theme: _react2.default.PropTypes.string
};

Box.defaultProps = {
    title: null,
    withBorder: false,
    theme: 'primary'
};