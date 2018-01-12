import React from 'react';
import FormGroup from "./FormGroup";
import Model from "../base/Model";

/**
 * 选择日期范围
 */
export default class DateRange extends Model {

    render() {
        let {startDate, endDate, model} = this.props;
        if (model) {
            let stateValues = this.getOwnerStateValues(model);
            startDate = stateValues[0];
            endDate = stateValues[1];
        }
        return (
            <FormGroup {...this.props}>
                <input type="date" className="form-control" value={startDate}
                       onChange={this.handleStartDateChange.bind(this)}/>
                <span className="to">至</span>
                <input type="date" className="form-control" value={endDate}
                       onChange={this.handleEndDateChange.bind(this)}/>
            </FormGroup>
        )
    }

    handleStartDateChange(e) {
        let {model, onStartDateChange} = this.props;
        if (model) {
            this.setOwnerStateValues(model, [e.target.value])
        }
        onStartDateChange && onStartDateChange(e)
    }

    handleEndDateChange(e) {
        let {model, onEndDateChange} = this.props;
        if (model) {
            this.setOwnerStateValues(model, [null, e.target.value])
        }
        onEndDateChange && onEndDateChange(e)
    }

}

DateRange.propTypes = {
    ...FormGroup.propTypes,
    startDate: React.PropTypes.string,
    endDate: React.PropTypes.string,
};

DateRange.defaultProps = {
    ...FormGroup.defaultProps,
    typeName: 'date-range',
    startDate: '', //'2017-07-19'
    endDate: ''
};

