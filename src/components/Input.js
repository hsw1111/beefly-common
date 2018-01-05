import React from 'react';
import modelUtils from '../utils/modelUtils';

export default class Input extends React.Component {

    componentWillMount() {
        this.owner = this._reactInternalInstance._currentElement._owner._instance;
    }

    render() {
        let {type, placeholder, label, value, model} = this.props;
        if (model) {
            value = modelUtils.getStateValue(this.owner, model);
        }
        return (
            <div className="form-group">
                <label>{label && label + '：'}</label>
                <input type={type} className="form-control" placeholder={placeholder} value={value}
                       onChange={(e) => this.setState({value: e.target.value})}/>
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

Input.propTypes = {
    type: React.PropTypes.string,
    label: React.PropTypes.string,
    value: React.PropTypes.string,
    placeholder: React.PropTypes.string,

    model: React.PropTypes.string,          // 数据绑定
    onChange: React.PropTypes.func,         //
};

Input.defaultProps = {
    type: 'text',
    label: '',
    value: '',
    placeholder: '',
};

