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

var Form = function (_React$Component) {
	(0, _inherits3.default)(Form, _React$Component);

	function Form() {
		(0, _classCallCheck3.default)(this, Form);
		return (0, _possibleConstructorReturn3.default)(this, (Form.__proto__ || (0, _getPrototypeOf2.default)(Form)).apply(this, arguments));
	}

	(0, _createClass3.default)(Form, [{
		key: 'render',
		value: function render() {
			var _props = this.props,
			    horizontal = _props.horizontal,
			    inline = _props.inline;

			return _react2.default.createElement(
				'form',
				{ className: (0, _classnames2.default)({ 'form-horizontal': horizontal, 'form-inline': inline }) },
				this.props.children
			);
		}
	}]);
	return Form;
}(_react2.default.Component);

exports.default = Form;


Form.propTypes = {
	horizontal: _react2.default.PropTypes.bool, // 水平布局
	inline: _react2.default.PropTypes.bool // 行内布局
};

Form.defaultProps = {
	horizontal: false,
	inline: false
};