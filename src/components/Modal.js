import React from 'react';
import cs from 'classnames';

class ModalBody extends React.Component {

    render() {
        return (
            <div className="modal-body">
                {this.props.children}
            </div>
        )
    }

}

class ModalFooter extends React.Component {

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
        let {theme, title, children} = this.props;

        return (
            <div ref={(e) => this._modal = e} className={cs('modal', 'modal-' + theme, 'fade')}>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" onClick={this.cancel.bind(this)}>
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
            const cType = child.type;
            if (typeof cType === 'function') {
                if (cType.name == 'ModalBody') {
                    body = child
                }
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
            const cType = child.type;
            if (typeof cType === 'function' && cType.name == 'ModalFooter') {
                footer = child
            }

        });

        if (footer) {
            return footer;
        } else {
            return (
                <Modal.Footer>
                    <button type="button" className="btn btn-default" onClick={this.cancel.bind(this)}>
                        取消
                    </button>
                    <button type="button" className="btn btn-primary" onClick={this.ok.bind(this)}>
                        确定
                    </button>
                </Modal.Footer>
            );
        }
    }

    componentDidMount() {
        if (this.props.show) {
            this.show()
        }
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.show !== nextProps.show) {
            if(nextProps.show){
                this.show()
            }else{
                this.hide();
            }
        }
    }

    ok(){
        let {onOk, onHide}= this.props;
        if(onOk){
            onOk();
        }else{
            if(onHide){
                onHide()
            }
        }
    }

    cancel(){
        let {onCancel, onHide}= this.props;
        if(onCancel){
            onCancel();
        }else{
            if(onHide){
                onHide()
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

