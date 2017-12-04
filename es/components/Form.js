import _Object$getPrototypeOf from 'babel-runtime/core-js/object/get-prototype-of';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import React from 'react';
import cs from 'classnames';

var Form = function (_React$Component) {
	_inherits(Form, _React$Component);

	function Form() {
		_classCallCheck(this, Form);

		return _possibleConstructorReturn(this, (Form.__proto__ || _Object$getPrototypeOf(Form)).apply(this, arguments));
	}

	_createClass(Form, [{
		key: 'render',
		value: function render() {
			var _props = this.props,
			    horizontal = _props.horizontal,
			    inline = _props.inline;

			return React.createElement(
				'form',
				{ className: cs({ 'form-horizontal': horizontal, 'form-inline': inline }) },
				this.props.children
			);
		}
	}]);

	return Form;
}(React.Component);

export default Form;


Form.propTypes = {
	horizontal: React.PropTypes.bool, // 水平布局
	inline: React.PropTypes.bool // 行内布局
};

Form.defaultProps = {
	horizontal: false,
	inline: false
};