import React from 'react';
import modelUtils from '../utils/modelUtils';

export default class Text extends React.Component {

    componentWillMount() {
        this.owner = this._reactInternalInstance._currentElement._owner._instance;
    }

    render() {
        let { label, value, model } = this.props;

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
    label: React.PropTypes.string,
    value: React.PropTypes.string,
    model: React.PropTypes.string,          // 数据绑定
};

Text.defaultProps = {
};

