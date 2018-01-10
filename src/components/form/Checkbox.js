import React from 'react';
import Component from "./Component";
import FormGroup from "./FormGroup";

/**
 * 单个Checkbox
 */
export default class Checkbox extends Component {

    render() {
        let {checked, value, text, model} = this.props;

        if (model) {
            checked = this.getOwnerStateValue(model);
        }

        return (
            <FormGroup typeName={'checkbox'} {...this.props}>
                <label>
                    <input type="checkbox" checked={checked} value={value}
                           onChange={(e) => this.handleChange(e)}/>{text}
                </label>
            </FormGroup>
        )
    }

    handleChange(e) {
        let {model, onChange} = this.props;
        if (model) {
            this.setOwnerStateValue(model, e.target.checked ? 1 : 0)
        }
        onChange && onChange(e)
    }

}

Checkbox.propTypes = {
    value: React.PropTypes.string,          // input value
    text: React.PropTypes.string,           // input after text
};

Checkbox.defaultProps = {};

