import _Object$getPrototypeOf from 'babel-runtime/core-js/object/get-prototype-of';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import React from 'react';
import cs from 'classnames';

/**
 * 弹框组件
 */

var Modal = function (_React$Component) {
    _inherits(Modal, _React$Component);

    function Modal(props) {
        _classCallCheck(this, Modal);

        return _possibleConstructorReturn(this, (Modal.__proto__ || _Object$getPrototypeOf(Modal)).call(this, props));
    }

    _createClass(Modal, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                theme = _props.theme,
                title = _props.title,
                children = _props.children;

            return React.createElement(
                'div',
                { ref: function ref(e) {
                        return _this2._modal = e;
                    }, className: cs('modal', 'modal-' + theme, 'fade') },
                React.createElement(
                    'div',
                    { className: 'modal-dialog' },
                    React.createElement(
                        'div',
                        { className: 'modal-content' },
                        React.createElement(
                            'div',
                            { className: 'modal-header' },
                            React.createElement(
                                'button',
                                { type: 'button', className: 'close', 'data-dismiss': 'modal', 'aria-label': 'Close' },
                                React.createElement(
                                    'span',
                                    { 'aria-hidden': 'true' },
                                    '\xD7'
                                )
                            ),
                            React.createElement(
                                'h4',
                                { className: 'modal-title' },
                                title
                            )
                        ),
                        React.createElement(
                            'div',
                            { className: 'modal-body' },
                            children
                        ),
                        React.createElement(
                            'div',
                            { className: 'modal-footer' },
                            React.createElement(
                                'button',
                                { type: 'button', className: 'btn btn-outline', onClick: this.onHide.bind(this) },
                                '\u786E\u5B9A'
                            ),
                            React.createElement(
                                'button',
                                { type: 'button', className: 'btn btn-outline', 'data-dismiss': 'modal' },
                                '\u5173\u95ED'
                            )
                        )
                    )
                )
            );
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            if (this.props.show) {
                this.onShow();
            }
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if (nextProps.show) {
                this.onShow();
            }
        }
    }, {
        key: 'onShow',
        value: function onShow() {
            $(this._modal).modal({
                backdrop: this.props.backdrop,
                keyboard: this.props.keyboard,
                show: true
            });
        }
    }, {
        key: 'onHide',
        value: function onHide() {
            $(this._modal).modal('hide');
        }
    }]);

    return Modal;
}(React.Component);

export default Modal;


Modal.propTypes = {
    show: React.PropTypes.bool, // 显示模态框
    backdrop: React.PropTypes.bool, // 单击弹框外是否关闭
    keyboard: React.PropTypes.bool, // 键盘上的 esc 键被按下时关闭模态框

    theme: React.PropTypes.string, // 主题样式
    title: React.PropTypes.string
};

Modal.defaultProps = {
    show: false,
    backdrop: true,
    keyboard: true,

    theme: 'default',
    title: 'modal title'
};