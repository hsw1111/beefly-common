import React from 'react';
import _ from 'lodash';
import Component from "./Component";
import FormGroup from "./FormGroup";

/**
 * 分类输入框
 */
export default class SelectInput extends Component {

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
            <FormGroup typeName={'select-input'} {...this.props}>
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
            this.setOwnerStateValues(this.owner, model, [e.target.value])
        }
        onSelectChange && onSelectChange(e)
    }

    handleInputChange(e) {
        let {model, onInputChange} = this.props;
        if (model) {
            this.setOwnerStateValues(this.owner, model, [null, e.target.value])
        }
        onInputChange && onInputChange(e)
    }
}

SelectInput.propTypes = {
    placeholder: React.PropTypes.string,
    selectOptions: React.PropTypes.object,
    selectValue: React.PropTypes.string,
    inputValue: React.PropTypes.string,
};

SelectInput.defaultProps = {
    placeholder: '',
    selectOptions: {},
    selectValue: '',
    inputValue: '',
};

