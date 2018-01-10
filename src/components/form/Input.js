import React from 'react';
import modelUtils from '../../utils/modelUtils';
import FormGroup from "./FormGroup";
import Component from "./Component";

export default class Input extends Component {

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
            <FormGroup typeName={'input'} {...this.props}>
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
    type: 'text',
    value: '',
    placeholder: '',
    width: null,
};

