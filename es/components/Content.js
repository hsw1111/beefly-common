import _Object$getPrototypeOf from "babel-runtime/core-js/object/get-prototype-of";
import _classCallCheck from "babel-runtime/helpers/classCallCheck";
import _createClass from "babel-runtime/helpers/createClass";
import _possibleConstructorReturn from "babel-runtime/helpers/possibleConstructorReturn";
import _inherits from "babel-runtime/helpers/inherits";
import React from 'react';

var Content = function (_React$Component) {
    _inherits(Content, _React$Component);

    function Content() {
        _classCallCheck(this, Content);

        return _possibleConstructorReturn(this, (Content.__proto__ || _Object$getPrototypeOf(Content)).apply(this, arguments));
    }

    _createClass(Content, [{
        key: "render",
        value: function render() {
            var children = this.props.children;

            return React.createElement(
                "section",
                { className: "content" },
                children
            );
        }
    }]);

    return Content;
}(React.Component);

export default Content;


Content.propTypes = {};

Content.defaultProps = {};