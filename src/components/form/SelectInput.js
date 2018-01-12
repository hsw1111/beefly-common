import React from 'react';
import _ from 'lodash';
import Model from "../base/Model";
import FormGroup from "./FormGroup";

/**
 * 分类输入框
 */
export default class SelectInput extends Model {

    constructor(props) {
        super(props);

        let selectOptions = [], selectValue = props.selectValue;
        if (typeof props.selectOptions == 'object') {
            _.forEach(props.selectOptions, (text, value) => selectOptions.push({text, value}))
        }

        if (selectOptions.length > 0) {
            let active = _.find(selectOptions, (o) => o.value == selectValue);
            if (!active) {
                selectValue = selectOptions[0].value
            }
        }

        this.state = {
            selectOptions
        }

    }

    render() {
        let {placeholder, selectValue, inputValue, model} = this.props;
        let {selectOptions} = this.state;
        if (model) {
            let stateValues = this.getOwnerStateValues(model);
            selectValue = stateValues[0];
            inputValue = stateValues[1];
        }
        return (
            <FormGroup {...this.props}>
                <select className="form-control" value={selectValue} onChange={this.handleSelectChange.bind(this)}>
                    {selectOptions.map((op) => (
                        <option key={op.value} value={op.value}>{op.text}</option>
                    ))}
                </select>
                <input type="text" className="form-control" placeholder={placeholder} value={inputValue}
                       onChange={this.handleInputChange.bind(this)}/>
            </FormGroup>
        )
    }

    handleSelectChange(e) {
        let {model, onSelectChange} = this.props;
        if (model) {
            this.setOwnerStateValues(model, [e.target.value])
        }
        onSelectChange && onSelectChange(e)
    }

    handleInputChange(e) {
        let {model, onInputChange} = this.props;
        if (model) {
            this.setOwnerStateValues(model, [null, e.target.value])
        }
        onInputChange && onInputChange(e)
    }
}

SelectInput.propTypes = {
    ...FormGroup.propTypes,
    placeholder: React.PropTypes.string,
    selectOptions: React.PropTypes.object,
    selectValue: React.PropTypes.string,
    inputValue: React.PropTypes.string,
};

SelectInput.defaultProps = {
    ...FormGroup.defaultProps,
    typeName: 'select-input',
    placeholder: '',
    selectOptions: {},
    selectValue: '',
    inputValue: '',
};

