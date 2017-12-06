import React from 'react';

/**
 * 选择日期范围
 */
export default class DateRange extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            startDate: props.startDate,
            endDate: props.endDate
        }
        
    }

    render() {
        let { label } = this.props;
        let { startDate, endDate } = this.state;
        return (
            <div className="form-group date-range">
                <label>{label && label + '：'}</label>
                <input type="date" className="form-control" value={startDate}
                    onChange={(e) => this.setState({ startDate: e.target.value })} />
                <span className="to">至</span>
                <input type="date" className="form-control" value={endDate}
                    onChange={(e) => this.setState({ endDate: e.target.value })} />
            </div>
        )
    }

    get startDate() {
        return this.state.startDate
    }


    get endDate() {
        return this.state.endDate
    }

}

DateRange.propTypes = {
    label: React.PropTypes.string,
    startDate: React.PropTypes.string,
    endDate: React.PropTypes.string,
};

DateRange.defaultProps = {
    label: '',
    startDate: '', //'2017-07-19'
    endDate: ''
};

