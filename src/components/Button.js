import React from 'react';

export default class Button extends React.Component {

    render() {
        let {btnTheme, btnSize, iconClass, onClick, children} = this.props;

        let btnClass = ['btn'];
        if (btnSize) {
            btnClass.push('btn-' + btnSize);
        }
        if (btnTheme) {
            btnClass.push('btn-' + btnTheme);
        }

        return (
            <div className="form-group">
                <button type="button" className={btnClass.join(' ')} onClick={onClick}>
                    {iconClass && <i className={['ace-icon fa bigger-110', 'fa-' + iconClass].join(' ')}></i>}
                    {children}
                </button>
            </div>
        )
    }

}


Button.propTypes = {
    btnTheme: React.PropTypes.string,
    btnSize: React.PropTypes.string,
    iconClass: React.PropTypes.string,
    onClick: React.PropTypes.func,
}

Button.defaultProps = {
    btnTheme: null,
    btnSize: null,
    iconClass: null,
    onClick: () => null
}
