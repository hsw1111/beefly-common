import React from 'react';
import modelUtils from '../utils/modelUtils';
import cs from 'classnames';

export default class Input extends React.Component {

    componentWillMount() {
        this.owner = this._reactInternalInstance._currentElement._owner._instance;
    }

    render() {
        let {type, placeholder, label, value, model, width, className, inputCls} = this.props;

        if (model) {
            value = modelUtils.getStateValue(this.owner, model);
        }

        // input样式
        let inputStyle = {};
        if(width){
            inputStyle.width = width;
        }

        return (
            <div className={cs("form-group", className)}>
                <label className="col-sm-2 control-label">{label && label + '：'}</label>
                <div className="col-sm-10">
                    <input type={type} className={cs("form-control", inputCls)} placeholder={placeholder} value={value}
                        onChange={(e) => this.handleChange(e)} style={inputStyle}/>
                </div>
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

    width: React.PropTypes.object,
    className: React.PropTypes.string,      // 样式class
};

Input.defaultProps = {
    type: 'text',
    label: '',
    value: '',
    placeholder: '',
    width: null,
};

