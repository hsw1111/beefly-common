import React from 'react';
import _ from 'lodash';

export default class Select extends React.Component {

    constructor(props) {
        super(props);

        let options = [], value = props.value;
        if (typeof props.options == 'object') {
            _.forEach(props.options, (text, value) => options.push({ text, value }))
        }

        if (props.whole) {
            options.unshift(props.wholeOption)
        }

        if (options.length > 0) {
            let active = _.find(options, (o) => o.value == value);
            if (!active) {
                value = options[0].value
            }
        }

        this.state = {
            options,
            value
        }
    }

    render() {
        let { label } = this.props;
        let { options, value } = this.state;

        return (
            <div className="form-group">
                <label>{label && label + '：'}</label>
                <select className="form-control" value={value} onChange={(e) => this.setState({ value: e.target.value })}>
                    {options.map((op) => (
                        <option key={op.value} value={op.value}>{op.text}</option>
                    ))}
                </select>
            </div>
        )
    }

    get value() {
        return this.state.value
    }

    get text() {
        let { options, value } = this.state;
        let active = _.find(options, (o) => o.value == value);
        return active ? active.text : ''
    }

}

Select.propTypes = {
    label: React.PropTypes.string,      // label
    options: React.PropTypes.object,    // 所有option，可是map，或array
    value: React.PropTypes.string,      // 选中的value
    whole: React.PropTypes.bool,        // 显示全部
    wholeOption: React.PropTypes.object,    // 自定义全部option
};

Select.defaultProps = {
    label: '',
    value: '',
    options: {},
    whole: true,
    wholeOption: { text: '--全部--', value: '' }
};

