'use strict';

exports.__esModule = true;

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Box = function (_React$Component) {
    (0, _inherits3.default)(Box, _React$Component);

    function Box() {
        (0, _classCallCheck3.default)(this, Box);
        return (0, _possibleConstructorReturn3.default)(this, (Box.__proto__ || (0, _getPrototypeOf2.default)(Box)).apply(this, arguments));
    }

    (0, _createClass3.default)(Box, [{
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