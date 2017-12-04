var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import cs from 'classnames';

/**
 * 弹框组件
 */

var Modal = function (_React$Component) {
    _inherits(Modal, _React$Component);

    function Modal(props) {
        _classCallCheck(this, Modal);

        return _possibleConstructorReturn(this, (Modal.__proto__ || Object.getPrototypeOf(Modal)).call(this, props));
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