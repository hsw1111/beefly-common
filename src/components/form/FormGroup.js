import React from 'react';
import cs from 'classnames';

/**
 * FormGroup
 */
export default class FormGroup extends React.Component {

    render() {
        let {className, typeName, label, children, validation, hasError, errorMessage} = this.props;
        let required = false;
        if (validation) {
            required = validation.required;
        }
        return (
            <div className={cs("fg", `fg-${typeName}`, className, {'has-error': hasError})}>
                <label className="fg-label">
                    {required && <span className={'required'}>*</span>}
                    {label && label + '：'}</label>
                <div className="fg-control">
                    {children}
                    {required && <div className="tooltip bottom">
                        <div className="tooltip-arrow"/>
                        <div className="tooltip-inner">{errorMessage}</div>
                    </div>}
                </div>
                <div className="clear"/>
            </div>
        )
    }

}

FormGroup.propTypes = {
    className: React.PropTypes.string,      // class
    typeName: React.PropTypes.string,       // form control type
    label: React.PropTypes.string,          // label
    model: React.PropTypes.string,          // checked bind
    onChange: React.PropTypes.func,         // checked changed
    value: React.PropTypes.string,          // input value
    text: React.PropTypes.string,           // input after text
};

FormGroup.defaultProps = {
    typeName: 'field',
};

