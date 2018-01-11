import React from 'react';
import modelUtils from "../../utils/modelUtils";

export default class Component extends React.Component {

    constructor(props) {
        super(props);

        if (props) {
            this.form = props.__form__;
        }
    }

    componentWillMount() {
        this.owner = this._reactInternalInstance._currentElement._owner._instance;
        // console.log(this)
    }

    getOwnerStateValue(model) {
        return modelUtils.getStateValue(this.owner, model)
    }

    setOwnerStateValue(model, value) {
        modelUtils.setStateValue(this.owner, model, value)
    }

    getOwnerStateValues(model) {
        return modelUtils.getStateValues(this.owner, model)
    }

    setOwnerStateValues(model, values) {
        modelUtils.setStateValues(this.owner, model, values)
    }
}
