import React from 'react';
import cs from 'classnames';

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
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span></button>
                            <h4 className="modal-title">{title}</h4>
                        </div>
                        <div className="modal-body">
                            {children}
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-outline" onClick={this.onHide.bind(this)}>
                                确定
                            </button>
                            <button type="button" className="btn btn-outline" data-dismiss="modal">
                                关闭
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    componentDidMount() {
        if (this.props.show) {
            this.onShow()
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.show) {
            this.onShow()
        }
    }

    onShow() {
        $(this._modal).modal({
            backdrop: this.props.backdrop,
            keyboard: this.props.keyboard,
            show: true,
        })
    }

    onHide() {
        $(this._modal).modal('hide')
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
    backdrop: true,
    keyboard: true,

    theme: 'default',
    title: 'modal title'
}

