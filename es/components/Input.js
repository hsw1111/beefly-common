import _Object$getPrototypeOf from 'babel-runtime/core-js/object/get-prototype-of';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import React from 'react';

var Input = function (_React$Component) {
    _inherits(Input, _React$Component);

    function Input(props) {
        _classCallCheck(this, Input);

        var _this = _possibleConstructorReturn(this, (Input.__proto__ || _Object$getPrototypeOf(Input)).call(this, props));

        _this.state = {
            value: props.value
        };
        return _this;
    }

    _createClass(Input, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                type = _props.type,
                placeholder = _props.placeholder,
                label = _props.label;
            var value = this.state.value;

            return React.createElement(
                'div',
                { className: 'form-group' },
                React.createElement(
                    'label',
                    null,
                    label && label + '：'
                ),
                React.createElement('input', { type: type, className: 'form-control', placeholder: placeholder, value: value,
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
}(React.Component);

export default Input;


Input.propTypes = {
    type: React.PropTypes.string,
    label: React.PropTypes.string,
    value: React.PropTypes.string,
    placeholder: React.PropTypes.string
};

Input.defaultProps = {
    type: 'text',
    label: '',
    value: '',
    placeholder: ''
};