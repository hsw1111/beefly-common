import _Object$getPrototypeOf from 'babel-runtime/core-js/object/get-prototype-of';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import React from 'react';
import cs from 'classnames';

var Box = function (_React$Component) {
    _inherits(Box, _React$Component);

    function Box() {
        _classCallCheck(this, Box);

        return _possibleConstructorReturn(this, (Box.__proto__ || _Object$getPrototypeOf(Box)).apply(this, arguments));
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