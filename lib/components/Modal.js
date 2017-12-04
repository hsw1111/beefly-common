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

/**
 * 弹框组件
 */
var Modal = function (_React$Component) {
    (0, _inherits3.default)(Modal, _React$Component);

    function Modal(props) {
        (0, _classCallCheck3.default)(this, Modal);
        return (0, _possibleConstructorReturn3.default)(this, (Modal.__proto__ || (0, _getPrototypeOf2.default)(Modal)).call(this, props));
    }

    (0, _createClass3.default)(Modal, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                theme = _props.theme,
                title = _props.title,
                children = _props.children;

            return _react2.default.createElement(
                'div',
                { ref: function ref(e) {
                        return _this2._modal = e;
                    }, className: (0, _classnames2.default)('modal', 'modal-' + theme, 'fade') },
                _react2.default.createElement(
                    'div',
                    { className: 'modal-dialog' },
                    _react2.default.createElement(
                        'div',
                        { className: 'modal-content' },
                        _react2.default.createElement(
                            'div',
                            { className: 'modal-header' },
                            _react2.default.createElement(
                                'button',
                                { type: 'button', className: 'close', 'data-dismiss': 'modal', 'aria-label': 'Close' },
                                _react2.default.createElement(
                                    'span',
                                    { 'aria-hidden': 'true' },
                                    '\xD7'
                                )
                            ),
                            _react2.default.createElement(
                                'h4',
                                { className: 'modal-title' },
                                title
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'modal-body' },
                            children
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'modal-footer' },
                            _react2.default.createElement(
                                'button',
                                { type: 'button', className: 'btn btn-outline', onClick: this.onHide.bind(this) },
                                '\u786E\u5B9A'
                            ),
                            _react2.default.createElement(
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
}(_react2.default.Component);

exports.default = Modal;


Modal.propTypes = {
    show: _react2.default.PropTypes.bool, // 显示模态框
    backdrop: _react2.default.PropTypes.bool, // 单击弹框外是否关闭
    keyboard: _react2.default.PropTypes.bool, // 键盘上的 esc 键被按下时关闭模态框

    theme: _react2.default.PropTypes.string, // 主题样式
    title: _react2.default.PropTypes.string
};

Modal.defaultProps = {
    show: false,
    backdrop: true,
    keyboard: true,

    theme: 'default',
    title: 'modal title'
};