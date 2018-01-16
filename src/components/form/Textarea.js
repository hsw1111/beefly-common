import React from 'react';
import FormGroup from "./FormGroup";
import Model from "../base/Model";

export default class Textarea extends Model {

    constructor(props) {
        super(props);

        this.state = {
            hasError: false,
            errorMessage: 'no error info'
        }
    }

    render() {
        let {placeholder, rows, model, value, width} = this.props;
        let {hasError, errorMessage} = this.state;

        if (model) {
            value = this.getOwnerStateValue(model);
        }

        // input样式
        let inputStyle = {};
        if (width) {
            inputStyle.width = width;
        }

        return (
            <FormGroup {...this.props} hasError={hasError} errorMessage={errorMessage}>
                <textarea className="form-control" rows={rows} placeholder={placeholder} value={value}
                          onChange={(e) => this.handleChange(e)} style={inputStyle}/>
            </FormGroup>
        )
    }

    handleChange(e) {
        let {model, onChange} = this.props;
        let value = e.target.value;
        if (model) {
            this.setOwnerStateValue(model, value);
        }
        onChange && onChange(e)

        // 验证
        // this.validate(value);
    }

    validate(value) {
        let {validation, label} = this.props;
        if (validation) {
            if (validation.required) {
                let valid = value === '';
                this.setState({
                    hasError: valid,
                    errorMessage: label + '不能为空'
                })
                if (!valid) {
                    return false
                }
            }
        }

        return true
    }
}

Textarea.propTypes = {
    ...FormGroup.propTypes,
    value: React.PropTypes.string,
    placeholder: React.PropTypes.string,
    rows: React.PropTypes.number,
};

Textarea.defaultProps = {
    ...FormGroup.defaultProps,
    typeName: 'textarea',
    value: '',
    placeholder: '',
    rows: 3,
};

