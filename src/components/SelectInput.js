import React from 'react';
import modelUtils from '../utils/modelUtils';
import _ from 'lodash';

/**
 * 分类输入框
 */
export default class SelectInput extends React.Component {

    constructor(props) {
        super(props);

        let selectOptions = [], selectValue = props.selectValue;
        if (typeof props.selectOptions == 'object') {
            _.forEach(props.selectOptions, (text, value) => selectOptions.push({ text, value }))
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

    componentWillMount() {
        this.owner = this._reactInternalInstance._currentElement._owner._instance;
    }

    render() {
        let { label, placeholder, selectValue, inputValue, model } = this.props;
        let { selectOptions } = this.state;
        if (model) {
            let stateValues = modelUtils.getStateValues(this.owner, model);
            selectValue = stateValues[0];
            inputValue = stateValues[1];
        }
        return (
            <div className="form-group select-input">
                <label>{label && label + '：'}</label>
                <select className="form-control" value={selectValue} onChange={this.handleSelectChange.bind(this)}>
                    {selectOptions.map((op) => (
                        <option key={op.value} value={op.value}>{op.text}</option>
                    ))}
                </select>
                <input type="text" className="form-control" placeholder={placeholder} value={inputValue}
                    onChange={this.handleInputChange.bind(this)} />
            </div>
        )
    }

    handleSelectChange(e) {
        let { model, onSelectChange } = this.props;
        if (model) {
            modelUtils.setStateValues(this.owner, model, [e.target.value])
        }
        onSelectChange && onSelectChange(e)
    }

    handleInputChange(e) {
        let { model, onInputChange } = this.props;
        if (model) {
            modelUtils.setStateValues(this.owner, model, [null, e.target.value])
        }
        onInputChange && onInputChange(e)
    }
}

SelectInput.propTypes = {
    label: React.PropTypes.string,      // label
    placeholder: React.PropTypes.string,
    selectOptions: React.PropTypes.object,
    selectValue: React.PropTypes.string,
    inputValue: React.PropTypes.string,

    model: React.PropTypes.string,          // 数据绑定
    onSelectChange: React.PropTypes.func,   //
    onInputChange: React.PropTypes.func,    //
};

SelectInput.defaultProps = {
    label: '',
    placeholder: '',
    selectOptions: {},
    selectValue: '',
    inputValue: '',
};

