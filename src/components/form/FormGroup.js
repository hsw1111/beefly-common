import React from 'react';
import cs from 'classnames';

/**
 * FormGroup
 */
export default class FormGroup extends React.Component {

    render() {
        let {className, typeName, label, children} = this.props;
        return (
            <div className={cs("fg", `fg-${typeName}`, className)}>
                <label className="fg-label">{label && label + '：'}</label>
                <div className="fg-control">
                    {children}
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

