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

var Input = function (_React$Component) {
    (0, _inherits3.default)(Input, _React$Component);

    function Input(props) {
        (0, _classCallCheck3.default)(this, Input);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Input.__proto__ || (0, _getPrototypeOf2.default)(Input)).call(this, props));

        _this.state = {
            value: props.value
        };
        return _this;
    }

    (0, _createClass3.default)(Input, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                type = _props.type,
                placeholder = _props.placeholder,
                label = _props.label;
            var value = this.state.value;

            return _react2.default.createElement(
                'div',
                { className: 'form-group' },
                _react2.default.createElement(
                    'label',
                    null,
                    label && label + '：'
                ),
                _react2.default.createElement('input', { type: type, className: 'form-control', placeholder: placeholder, value: value,
                    onChange: function onChange(e) {
                        return _this2.setState({ value: e.target.value });
                    } })
            );
        }
    }, {
        key: 'value',
        get: function get() {
            return this.state.value;
        }

        // componentWillReceiveProps(nextProps) {
        //     if (nextProps.value !== this.state.value) {
        //         this.setState({
        //             value: nextProps.value
        //         });
        //     }
        // }

    }]);
    return Input;
}(_react2.default.Component);

exports.default = Input;


Input.propTypes = {
    type: _react2.default.PropTypes.string,
    label: _react2.default.PropTypes.string,
    value: _react2.default.PropTypes.string,
    placeholder: _react2.default.PropTypes.string
};

Input.defaultProps = {
    type: 'text',
    label: '',
    value: '',
    placeholder: ''
};