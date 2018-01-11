import React from 'react';
import cs from 'classnames'

export default class Form extends React.Component {

    render() {
        let {className, horizontal, inline} = this.props;
        return (
            <form className={cs(className, {'form-horizontal': horizontal, 'form-inline': inline})}>
                {this.renderChildren()}
            </form>
        )
    }

    renderChildren() {
        return React.Children.map(this.props.children, (child) => {
            if (child) {
                const cType = child.type
                if ((typeof cType === 'string')) {
                    return child
                }
                return React.cloneElement(child, {
                    __form__: this
                })
            }
            return child
        })
    }


}

Form.propTypes = {
    horizontal: React.PropTypes.bool, 	// 水平布局
    inline: React.PropTypes.bool,		// 行内布局
}

Form.defaultProps = {
    horizontal: false,
    inline: false,
}

