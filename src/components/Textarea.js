import React from 'react';

export default class Textarea extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            value: props.value
        }
    }

    render() {
        let {type, placeholder, label, rows} = this.props;
        let {value} = this.state;
        return (
            <div className="form-group">
                <label>{label && label + '：'}</label>
                <textarea type={type} className="form-control" rows={rows} placeholder={placeholder} value={value}
                       onChange={(e) => this.setState({value: e.target.value})}/>
            </div>
        )
    }

    get value() {
        return this.state.value
    }

}

Textarea.propTypes = {
    type: React.PropTypes.string,
    label: React.PropTypes.string,
    value: React.PropTypes.string,
    placeholder: React.PropTypes.string,
    rows: React.PropTypes.number,
};

Textarea.defaultProps = {
    type: 'text',
    label: '',
    value: '',
    placeholder: '',
    rows: 3,
};

