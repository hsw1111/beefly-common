import React from 'react';
import cs from 'classnames';

export default class Button extends React.Component {

    render() {
        let { theme, size, icon, block, flat, onClick, children } = this.props;

        return (
            <div className="form-group">
                <button type="button"
                    className={cs('btn', { [`btn-${theme}`]: theme, [`btn-${size}`]: size, 'btn-block': block, 'btn-flat': flat })} onClick={onClick}>
                    {icon && <i className={cs('ace-icon', 'fa', 'bigger-110', 'fa-' + icon)}></i>}
                    &nbsp;{children}&nbsp;
                </button>
            </div>
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
}

Button.defaultProps = {
    theme: 'primary',   // 主题背影
    size: '',           // 按钮大小 
    icon: '',           // 图标名称 
    block: false,       // 是块元素
    flat: true,         // 是扁平按钮
    onClick: () => null,// 单击事件
}
