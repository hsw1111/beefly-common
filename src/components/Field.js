import React from 'react';

/**
 * 自定义表单字段
 */
export default class Field extends React.Component {

    render() {
        let {label, children} = this.props;
        return (
            <div className="form-group">
                <label className="col-sm-2 control-label">{label && label + '：'}</label>
                <div className="col-sm-10">
                    <div className="form-control-text">{children}</div>
                </div>
            </div>
        )
    }

}

Field.propTypes = {
    label: React.PropTypes.string,
};

Field.defaultProps = {
};

