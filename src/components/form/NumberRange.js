import React from 'react';
import Component from "./Component";
import FormGroup from "./FormGroup";

/**
 * 输入数值范围
 */
export default class NumberRange extends Component {

    render() {
        let {min, max, step, startNumber, endNumber, model} = this.props;
        if (model) {
            let stateValues = this.getOwnerStateValues(model);
            startNumber = stateValues[0];
            endNumber = stateValues[1];
        }
        return (
            <FormGroup {...this.props}>
                <input type="number" className="form-control" value={startNumber} min={min} max={max} step={step}
                       onChange={this.handleStartNumberChange.bind(this)}/>
                <span className="to">至</span>
                <input type="number" className="form-control" value={endNumber} min={min} max={max} step={step}
                       onChange={this.handleEndNumberChange.bind(this)}/>
            </FormGroup>
        )
    }

    handleStartNumberChange(e) {
        let {model, onStartNumberChange} = this.props;
        if (model) {
            this.setOwnerStateValues(model, [e.target.value])
        }
        onStartNumberChange && onStartNumberChange(e)
    }

    handleEndNumberChange(e) {
        let {model, onEndNumberChange} = this.props;
        if (model) {
            this.setOwnerStateValues(model, [null, e.target.value])
        }
        onEndNumberChange && onEndNumberChange(e)
    }

}

NumberRange.propTypes = {
    ...FormGroup.propTypes,
    startNumber: React.PropTypes.number,
    endNumber: React.PropTypes.number,
    min: React.PropTypes.number,
    max: React.PropTypes.number,
    step: React.PropTypes.number,
};

NumberRange.defaultProps = {
    ...FormGroup.defaultProps,
    typeName: 'number-range',
    startNumber: '',
    endNumber: '',
    min: 0,
    max: 10000,
    step: 0.01
};

