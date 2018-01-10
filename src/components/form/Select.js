import React from 'react';
import _ from 'lodash';
import Component from "./Component";
import FormGroup from "./FormGroup";

export default class Select extends Component {

    constructor(props) {
        super(props);

        let options = [];
        if (typeof props.options == 'object') {
            _.forEach(props.options, (text, value) => options.push({text, value}))
        }

        if (props.whole) {
            options.unshift(props.wholeOption)
        }

        this.state = {
            options
        }
    }

    render() {
        let {model, value} = this.props;
        let {options} = this.state;
        if (model) {
            value = this.getOwnerStateValue(model);
        }
        return (
            <FormGroup {...this.props}>
                <select className="form-control" value={value} onChange={this.handleChange.bind(this)}>
                    {options.map((op) => (
                        <option key={op.value} value={op.value}>{op.text}</option>
                    ))}
                </select>
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

Select.propTypes = {
    ...FormGroup.propTypes,
    options: React.PropTypes.object,    // 所有option，可是map，或array
    value: React.PropTypes.string,      // 选中的value
    whole: React.PropTypes.bool,        // 显示全部
    wholeOption: React.PropTypes.object,    // 自定义全部option
};

Select.defaultProps = {
    ...FormGroup.defaultProps,
    typeName: 'select',
    value: '',
    options: {},
    whole: true,
    wholeOption: {text: '--全部--', value: ''}
};

