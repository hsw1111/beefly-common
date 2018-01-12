import React from 'react';
import cs from 'classnames';
import $ from 'jquery';

class ModalBody extends React.Component {

    static className = 'ModalBody';

    render() {
        let {style} = this.props;
        return (
            <div className="modal-body" style={style}>
                {this.props.children}
            </div>
        )
    }

}

class ModalFooter extends React.Component {

    static className = 'ModalFooter';

    render() {
        return (
            <div className="modal-footer">
                {this.props.children}
            </div>
        )
    }

}

/**
 * 弹框组件
 */
export default class Modal extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        let {theme, title, size} = this.props;

        return (
            <div ref={(e) => this._modal = e} className={cs('modal', 'modal-' + theme, 'fade')}>
                <div className={cs("modal-dialog", `modal-${size}`)} style={{height: 500}}>
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" onClick={this.close.bind(this)}>
                                <span aria-hidden="true">&times;</span></button>
                            <h4 className="modal-title">{title}</h4>
                        </div>
                        {this.renderBody()}
                        {this.renderFooter()}
                    </div>
                </div>
            </div>
        )
    }

    renderBody() {
        let {children} = this.props;
        let body = null;
        React.Children.forEach(children, (child) => {
            if (child && child.type && typeof child.type === 'function' && child.type.className === 'ModalBody') {
                body = child
            }
        });

        if (!body) {
            body = (
                <Modal.Body>
                    {children}
                </Modal.Body>
            )
        }

        return body;
    }

    renderFooter() {
        let {children} = this.props;
        let footer = null;
        React.Children.forEach(children, (child) => {
            if (child && child.type && typeof child.type === 'function' && child.type.className === 'ModalFooter') {
                footer = child
            }
        });

        if (footer) {
            return footer;
        }
        return null
    }

    componentDidMount() {
        if (this.props.show) {
            this.show()
        }
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.show !== nextProps.show) {
            if (nextProps.show) {
                this.show()
            } else {
                this.hide();
            }
        }
    }

    show() {
        $(this._modal).modal({
            backdrop: this.props.backdrop,
            keyboard: this.props.keyboard,
            show: true,
        })
    }

    hide() {
        $(this._modal).modal('hide');
    }

    close() {
        let {onHide} = this.props;
        onHide && onHide()
    }
}

Modal.propTypes = {
    show: React.PropTypes.bool,	// 显示模态框
    backdrop: React.PropTypes.bool,	// 单击弹框外是否关闭
    keyboard: React.PropTypes.bool, // 键盘上的 esc 键被按下时关闭模态框

    theme: React.PropTypes.string,	// 主题样式
    title: React.PropTypes.string,
}

Modal.defaultProps = {
    show: false,
    backdrop: false,
    keyboard: true,

    theme: 'default',
    title: 'modal title'
}


Modal.Body = ModalBody;
Modal.Footer = ModalFooter;

