import React from 'react';
import modelUtils from '../utils/modelUtils';

export default class Textarea extends React.Component {

    componentWillMount(){
        this.owner = this._reactInternalInstance._currentElement._owner._instance;
    }

    render() {
        let {type, placeholder, label, rows, model, value, width} = this.props;
        if(model){
            value = modelUtils.getStateValue(this.owner, model);
        }

        // input样式
        let inputStyle = {};
        if(width){
            inputStyle.width = width;
        }

        return (
            <div className="form-group">
                <label className="col-sm-2 control-label">{label && label + '：'}</label>
                <div className="col-sm-10">
                    <textarea type={type} className="form-control" rows={rows} placeholder={placeholder} value={value}
                        onChange={(e) => this.handleChange(e)} style={inputStyle}/>
                </div>
            </div>
        )
    }

    handleChange(e){
        let {model, onChange} = this.props;
        if(model){
            modelUtils.setStateValue(this.owner, model, e.target.value);
        }
        onChange && onChange(e)
    }
}

Textarea.propTypes = {
    type: React.PropTypes.string,
    label: React.PropTypes.string,
    value: React.PropTypes.string,
    placeholder: React.PropTypes.string,
    rows: React.PropTypes.number,
    
    model: React.PropTypes.string,          // 数据绑定
    onChange: React.PropTypes.func,         //
};

Textarea.defaultProps = {
    type: 'text',
    label: '',
    placeholder: '',
    rows: 3,
    value: '',
};

