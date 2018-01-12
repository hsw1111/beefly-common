import React from 'react';
import FormGroup from "./FormGroup";
import Model from "../base/Model";

export default class Input extends Model {

    render() {
        let {type, placeholder, value, model, width} = this.props;

        if (model) {
            value = this.getOwnerStateValue(model);
        }

        // input样式
        let inputStyle = {};
        if (width) {
            inputStyle.width = width;
        }

        return (
            <FormGroup {...this.props}>
                <input type={type} className="form-control" placeholder={placeholder} value={value}
                       onChange={(e) => this.handleChange(e)} style={inputStyle}/>
            </FormGroup>
        )
    }

    handleChange(e) {
        let {model, onChange} = this.props;
        if (model) {
            this.setOwnerStateValue(model, e.target.value)
        }
        onChange && onChange(e)
    }

}

Input.propTypes = {
    ...FormGroup.propTypes,
    type: React.PropTypes.string,
    value: React.PropTypes.string,
    placeholder: React.PropTypes.string,
    width: React.PropTypes.object,
};

Input.defaultProps = {
    ...FormGroup.defaultProps,
    typeName: 'input',
    type: 'text',
    value: '',
    placeholder: '',
    width: null,
};

