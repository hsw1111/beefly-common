import React from 'react';
import FormGroup from "./FormGroup";
import Model from "../base/Model";

export default class Text extends Model {

    render() {
        let {value, model, children} = this.props;

        if (model) {
            value = this.getOwnerStateValue(model);
        }

        return (
            <FormGroup {...this.props}>
                {value || children}
            </FormGroup>
        )
    }

}

Text.propTypes = {
    ...FormGroup.propTypes,
    value: React.PropTypes.string,
};

Text.defaultProps = {
    ...FormGroup.defaultProps,
    typeName: 'text',
};

