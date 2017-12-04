var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import cs from 'classnames';

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
            return React.createElement(
                'div',
                { className: ['box', themeClass].join(' ') },
                title && React.createElement(
                    'div',
                    { className: cs({ "box-header": true, "with-border": withBorder }) },
                    React.createElement(
                        'h3',
                        { className: 'box-title' },
                        title
                    )
                ),
                React.createElement(
                    'div',
                    { className: 'box-body' },
                    this.props.children
                )
            );
        }
    }]);

    return Box;
}(React.Component);

export default Box;


Box.propTypes = {
    title: React.PropTypes.string,
    withBorder: React.PropTypes.bool,
    theme: React.PropTypes.string
};

Box.defaultProps = {
    title: null,
    withBorder: false,
    theme: 'primary'
};