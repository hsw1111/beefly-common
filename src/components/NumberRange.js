import React from 'react';
import modelUtils from '../utils/modelUtils';

/**
 * 输入数值范围
 */
export default class NumberRange extends React.Component {

    componentWillMount() {
        this.owner = this._reactInternalInstance._currentElement._owner._instance;
    }

    render() {
        let { label, min, max, step, startNumber, endNumber, model } = this.props;
        if (model) {
            let stateValues = modelUtils.getStateValues(this.owner, model);
            startNumber = stateValues[0];
            endNumber = stateValues[1];
        }
        return (
            <div className="form-group number-range">
                <label>{label && label + '：'}</label>
                <input type="number" className="form-control" value={startNumber} min={min} max={max} step={step}
                    onChange={this.handleStartNumberChange.bind(this)} />
                <span className="to">至</span>
                <input type="number" className="form-control" value={endNumber} min={min} max={max} step={step}
                    onChange={this.handleEndNumberChange.bind(this)} />
            </div>
        )
    }

    handleStartNumberChange(e) {
        let { model, onStartNumberChange } = this.props;
        if (model) {
            modelUtils.setStateValues(this.owner, model, [e.target.value])
        }
        onStartNumberChange && onStartNumberChange(e)
    }

    handleEndNumberChange(e) {
        let { model, onEndNumberChange } = this.props;
        if (model) {
            modelUtils.setStateValues(this.owner, model, [null, e.target.value])
        }
        onEndNumberChange && onEndNumberChange(e)
    }

}

NumberRange.propTypes = {
    label: React.PropTypes.string,
    startNumber: React.PropTypes.number,
    endNumber: React.PropTypes.number,
    min: React.PropTypes.number,
    max: React.PropTypes.number,
    step: React.PropTypes.number,
    
    model: React.PropTypes.string,                  // 数据绑定
    onStartNumberChange: React.PropTypes.func,
    onEndNumberChange: React.PropTypes.func,
};

NumberRange.defaultProps = {
    label: '',
    startNumber: '',
    endNumber: '',
    min: 0,
    max: 10000,
    step: 0.01
};

