import React from 'react';
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
            selectOptions,
            selectValue,
            inputValue: props.inputValue,
        }

    }

    render() {
        let { label, placeholder } = this.props;
        let { selectOptions, selectValue, inputValue } = this.state;
        return (
            <div className="form-group select-input">
                <label>{label && label + '：'}</label>
                <select className="form-control" value={selectValue} onChange={(e) => this.setState({ selectValue: e.target.value })}>
                    {selectOptions.map((op) => (
                        <option key={op.value} value={op.value}>{op.text}</option>
                    ))}
                </select>
                <input type="text" className="form-control" placeholder={placeholder} value={inputValue}
                    onChange={(e) => this.setState({ inputValue: e.target.value })} />
            </div>
        )
    }

    get selectValue() {
        return this.state.selectValue
    }

    get selectText() {
        let { selectOptions, selectValue } = this.state;
        let active = _.find(selectOptions, (o) => o.value == selectValue);
        return active ? active.text : ''
    }

    get inputValue() {
        return this.state.inputValue
    }

}

SelectInput.propTypes = {
    label: React.PropTypes.string,      // label
    placeholder: React.PropTypes.string,
    selectOptions: React.PropTypes.object,
    selectValue: React.PropTypes.string,
    inputValue: React.PropTypes.string,
};

SelectInput.defaultProps = {
    label: '',
    placeholder: '',
    selectOptions: {},
    selectValue: '',
    inputValue: '',
};

