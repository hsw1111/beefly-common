import React from 'react';
import modelUtils from '../utils/modelUtils';
import _ from 'lodash';

export default class Select extends React.Component {

    constructor(props) {
        super(props);

        let options = [];
        if (typeof props.options == 'object') {
            _.forEach(props.options, (text, value) => options.push({ text, value }))
        }

        if (props.whole) {
            options.unshift(props.wholeOption)
        }

        this.state = {
            options
        }
    }

    componentWillMount() {
        this.owner = this._reactInternalInstance._currentElement._owner._instance;
    }

    render() {
        let { label, model, value } = this.props;
        let { options } = this.state;
        if (model) {
            value = modelUtils.getStateValue(this.owner, model);
        }
        return (
            <div className="form-group">
                <label>{label && label + '：'}</label>
                <select className="form-control" value={value} onChange={this.handleChange.bind(this)}>
                    {options.map((op) => (
                        <option key={op.value} value={op.value}>{op.text}</option>
                    ))}
                </select>
            </div>
        )
    }

    handleChange(e) {
        let { model, onChange } = this.props;
        if (model) {
            modelUtils.setStateValue(this.owner, model, e.target.value)
        }
        onChange && onChange(e)
    }

}

Select.propTypes = {
    label: React.PropTypes.string,      // label
    options: React.PropTypes.object,    // 所有option，可是map，或array
    value: React.PropTypes.string,      // 选中的value
    whole: React.PropTypes.bool,        // 显示全部
    wholeOption: React.PropTypes.object,    // 自定义全部option

    model: React.PropTypes.string,          // 数据绑定
    onChange: React.PropTypes.func,         //
};

Select.defaultProps = {
    label: '',
    value: '',
    options: {},
    whole: true,
    wholeOption: { text: '--全部--', value: '' }
};

