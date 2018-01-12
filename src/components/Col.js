import React from 'react';
import cs from 'classnames';

export default class Row extends React.Component {

    render() {
        let {xs, sm, md, lg} = this.props;
        return (
            <div className={cs({
                [`col-xs-${xs}`]: xs,
                [`col-sm-${sm}`]: sm,
                [`col-md-${md}`]: md,
                [`col-lg-${lg}`]: lg
            })}>
                {this.props.children}
            </div>
        )
    }

}

Row.propTypes = {
    xs: React.PropTypes.number,
    sm: React.PropTypes.number,
    md: React.PropTypes.number,
    lg: React.PropTypes.number,
};

Row.defaultProps = {};