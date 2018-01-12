import React from 'react';
import FormGroup from "./FormGroup";
import Model from "../base/Model";

/**
 * 自定义表单字段
 */
export default class Field extends Model {

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

