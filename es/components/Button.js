import _Object$getPrototypeOf from 'babel-runtime/core-js/object/get-prototype-of';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import React from 'react';

var Button = function (_React$Component) {
    _inherits(Button, _React$Component);

    function Button() {
        _classCallCheck(this, Button);

        return _possibleConstructorReturn(this, (Button.__proto__ || _Object$getPrototypeOf(Button)).apply(this, arguments));
    }

    _createClass(Button, [{
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

            return React.createElement(
                'div',
                { className: 'form-group' },
                React.createElement(
                    'button',
                    { type: 'button', className: btnClass.join(' '), onClick: onClick },
                    iconClass && React.createElement('i', { className: ['ace-icon fa bigger-110', 'fa-' + iconClass].join(' ') }),
                    children
                )
            );
        }
    }]);

    return Button;
}(React.Component);

export default Button;


Button.propTypes = {
    btnTheme: React.PropTypes.string,
    btnSize: React.PropTypes.string,
    iconClass: React.PropTypes.string,
    onClick: React.PropTypes.func
};

Button.defaultProps = {
    btnTheme: null,
    btnSize: null,
    iconClass: null,
    onClick: function onClick() {
        return null;
    }
};