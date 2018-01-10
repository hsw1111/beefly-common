import React from 'react';
import FormGroup from "./FormGroup";
import Component from "./Component";

export default class Textarea extends Component {

    render() {
        let {placeholder, rows, model, value, width} = this.props;

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
                <textarea className="form-control" rows={rows} placeholder={placeholder} value={value}
                          onChange={(e) => this.handleChange(e)} style={inputStyle}/>
            </FormGroup>
        )
    }

    handleChange(e) {
        let {model, onChange} = this.props;
        if (model) {
            this.setOwnerStateValue(model, e.target.value);
        }
        onChange && onChange(e)
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

