import React from 'react';
import modelUtils from '../utils/modelUtils';

export default class Text extends React.Component {

    componentWillMount() {
        this.owner = this._reactInternalInstance._currentElement._owner._instance;
    }

    render() {
        let {label, value, model} = this.props;

        // 数据绑定
        if (model) {
            value = modelUtils.getStateValue(this.owner, model);
        }

        return (
            <div className="form-group">
                <label className="col-sm-2 control-label">{label && label + '：'}</label>
                <div className="col-sm-10">
                    <div className="form-control-text">{value}</div>
                </div>
            </div>
        )
    }

}

Text.propTypes = {
    type: React.PropTypes.string,
    label: React.PropTypes.string,
    value: React.PropTypes.string,
    placeholder: React.PropTypes.string,

    model: React.PropTypes.string,          // 数据绑定
    onChange: React.PropTypes.func,         //

    width: React.PropTypes.object,
};

Text.defaultProps = {
    type: 'text',
    label: '',
    value: '',
    placeholder: '',
    width: null,
};

