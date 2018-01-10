import React from 'react';
import FormGroup from "./FormGroup";
import Component from "./Component";

/**
 * 自定义表单字段
 */
export default class Field extends Component {

    render() {
        let {children} = this.props;
        return (
            <FormGroup {...this.props}>
                {children}
            </FormGroup>
        )
    }

}

Field.propTypes = {
    ...FormGroup.propTypes,
};

Field.defaultProps = {
    ...FormGroup.defaultProps,
    typeName: 'field',
};

