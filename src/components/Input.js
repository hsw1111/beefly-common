import React from 'react';

export default class Input extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            value: props.value
        }
    }

    render() {
        let {type, placeholder, label} = this.props;
        let {value} = this.state;
        return (
            <div className="form-group">
                <label>{label && label + '：'}</label>
                <input type={type} className="form-control" placeholder={placeholder} value={value}
                       onChange={(e) => this.setState({value: e.target.value})}/>
            </div>
        )
    }

    get value() {
        return this.state.value
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.value !== this.state.value) {
            this.setState({
                value: nextProps.value
            });
        }
    }

}

Input.propTypes = {
    type: React.PropTypes.string,
    label: React.PropTypes.string,
    value: React.PropTypes.string,
    placeholder: React.PropTypes.string,
};

Input.defaultProps = {
    type: 'text',
    label: '',
    value: '',
    placeholder: '',
};

