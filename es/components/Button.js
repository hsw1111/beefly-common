var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';

var Button = function (_React$Component) {
    _inherits(Button, _React$Component);

    function Button() {
        _classCallCheck(this, Button);

        return _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).apply(this, arguments));
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