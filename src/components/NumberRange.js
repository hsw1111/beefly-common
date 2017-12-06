import React from 'react';

/**
 * 输入数值范围
 */
export default class NumberRange extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            startNumber: props.startNumber,
            endNumber: props.endNumber
        }

    }

    render() {
        let { label, min, max, step } = this.props;
        let { startNumber, endNumber } = this.state;
        return (
            <div className="form-group number-range">
                <label>{label && label + '：'}</label>
                <input type="number" className="form-control" value={startNumber} min={min} max={max} step={step}
                    onChange={(e) => this.setState({ startNumber: e.target.value })} />
                <span className="to">至</span>
                <input type="number" className="form-control" value={endNumber} min={min} max={max} step={step}
                    onChange={(e) => this.setState({ endNumber: e.target.value })} />
            </div>
        )
    }

    get startNumber() {
        return this.state.startNumber
    }


    get endNumber() {
        return this.state.endNumber
    }

}

NumberRange.propTypes = {
    label: React.PropTypes.string,
    startNumber: React.PropTypes.number,
    endNumber: React.PropTypes.number,
    min: React.PropTypes.number,
    max: React.PropTypes.number,
    step: React.PropTypes.number,
};

NumberRange.defaultProps = {
    label: '',
    startNumber: '',
    endNumber: '',
    min: 0,
    max: 10000,
    step: 0.01
};

