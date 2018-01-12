import React from 'react';
import cs from 'classnames';

export default class Container extends React.Component {

    render() {
        let {fluid} = this.props;
        return (
            <div className={cs({"container": !fluid, "container-fluid": fluid})}>
                {this.props.children}
            </div>
        )
    }

}

Container.propTypes = {
    fluid: React.PropTypes.bool,        // 流式布局容器
};

Container.defaultProps = {
    fluid: false
};