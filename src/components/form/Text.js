import React from 'react';
import FormGroup from "./FormGroup";
import Component from "./Component";

export default class Text extends Component {

    render() {
        let {value, model} = this.props;

        if (model) {
            value = this.getOwnerStateValue(model);
        }

        return (
            <FormGroup typeName={'text'} {...this.props}>
                {value}
            </FormGroup>
        )
    }

}

Text.propTypes = {
    value: React.PropTypes.string,
};

Text.defaultProps = {};

