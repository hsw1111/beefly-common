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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Button = function (_React$Component) {
    (0, _inherits3.default)(Button, _React$Component);

    function Button() {
        (0, _classCallCheck3.default)(this, Button);
        return (0, _possibleConstructorReturn3.default)(this, (Button.__proto__ || (0, _getPrototypeOf2.default)(Button)).apply(this, arguments));
    }

    (0, _createClass3.default)(Button, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                btnTheme = _props.btnTheme,
                btnSize = _props.btnSize,
                iconClass = _props.iconClass,
                onClick = _props.onClick,
                children = _props.children;


            var btnClass = ['btn'];
            if (btnSize) {
                btnClass.push('btn-' + btnSize);
            }
            if (btnTheme) {
                btnClass.push('btn-' + btnTheme);
            }

            return _react2.default.createElement(
                'div',
                { className: 'form-group' },
                _react2.default.createElement(
                    'button',
                    { type: 'button', className: btnClass.join(' '), onClick: onClick },
                    iconClass && _react2.default.createElement('i', { className: ['ace-icon fa bigger-110', 'fa-' + iconClass].join(' ') }),
                    children
                )
            );
        }
    }]);
    return Button;
}(_react2.default.Component);

exports.default = Button;


Button.propTypes = {
    btnTheme: _react2.default.PropTypes.string,
    btnSize: _react2.default.PropTypes.string,
    iconClass: _react2.default.PropTypes.string,
    onClick: _react2.default.PropTypes.func
};

Button.defaultProps = {
    btnTheme: null,
    btnSize: null,
    iconClass: null,
    onClick: function onClick() {
        return null;
    }
};