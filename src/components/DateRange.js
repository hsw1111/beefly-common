import React from 'react';
import modelUtils from '../utils/modelUtils';

/**
 * 选择日期范围
 */
export default class DateRange extends React.Component {

    componentWillMount() {
        this.owner = this._reactInternalInstance._currentElement._owner._instance;
    }

    render() {
        let { label, startDate, endDate, model } = this.props;
        if (model) {
            let stateValues = modelUtils.getStateValues(this.owner.state, model);
            startDate = stateValues[0];
            endDate = stateValues[1];
        }
        return (
            <div className="form-group date-range">
                <label>{label && label + '：'}</label>
                <input type="date" className="form-control" value={startDate} onChange={this.handleStartDateChange.bind(this)} />
                <span className="to">至</span>
                <input type="date" className="form-control" value={endDate} onChange={this.handleEndDateChange.bind(this)} />
            </div>
        )
    }

    handleStartDateChange(e) {
        let { model, onStartDateChange } = this.props;
        if (model) {
            modelUtils.setStateValues(this.owner, model, [e.target.value])
        }
        onStartDateChange && onStartDateChange(e)
    }

    handleEndDateChange(e) {
        let { model, onEndDateChange } = this.props;
        if (model) {
            modelUtils.setStateValues(this.owner, model, [null, e.target.value])
        }
        onEndDateChange && onEndDateChange(e)
    }

}

DateRange.propTypes = {
    label: React.PropTypes.string,
    startDate: React.PropTypes.string,
    endDate: React.PropTypes.string,

    model: React.PropTypes.string,                  // 数据绑定
    onStartDateChange: React.PropTypes.func,
    onEndDateChange: React.PropTypes.func,
};

DateRange.defaultProps = {
    label: '',
    startDate: '', //'2017-07-19'
    endDate: ''
};

