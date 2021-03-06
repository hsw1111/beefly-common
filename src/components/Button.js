import React from 'react';
import cs from 'classnames';
// import FormGroup from "./form/FormGroup";
// import Component from "./base/Model";

export default class Button extends React.Component {

    render() {
        let {theme, size, icon, block, flat, onClick, value, children, className} = this.props;

        return (
            <button type="button"
                    className={cs('btn', {
                        [`btn-${theme}`]: theme,
                        [`btn-${size}`]: size,
                        'btn-block': block,
                        'btn-flat': flat
                    }, className)} onClick={onClick}>
                {icon && <i className={cs('ace-icon', 'fa', 'bigger-110', 'fa-' + icon)}></i>}
                &nbsp;{children || value}&nbsp;
            </button>
        )
    }

}

Button.propTypes = {
    theme: React.PropTypes.oneOf(['', 'default', 'primary', 'success', 'info', 'danger', 'warning',
        'maroon', 'purple', 'navy', 'orange', 'olive']),
    size: React.PropTypes.oneOf(['', 'lg', 'md', 'sm', 'xs']),
    icon: React.PropTypes.string,
    block: React.PropTypes.bool,
    flat: React.PropTypes.bool,
    onClick: React.PropTypes.func,
    value: React.PropTypes.string,
    margin: React.PropTypes.bool,       // 是否添加'margin-r-5'
}

Button.defaultProps = {
    theme: 'primary',   // 主题背影
    size: '',           // 按钮大小 
    icon: '',           // 图标名称 
    block: false,       // 是块元素
    flat: true,         // 是扁平按钮
    onClick: () => null,// 单击事件
}
