import _ from 'lodash';

// React表单组件实现类型Vue中v-model功能，使用到的公共方法。
const modelUtils = {

    getStateValue: (owner, model) => {
        return modelUtils.getStateValues(owner, model)[0];
    },

    setStateValue: (owner, model, value) => {
        modelUtils.setStateValues(owner, model, [value])
    },

    getStateValues: (owner, model) => {
        let models = model.split(',');
        let values = [];
        models.forEach((m) => {
            values.push(_.get(owner.state, m));
        });
        return values;
    },

    setStateValues: (owner, model, values) => {
        let newState = { ...owner.state };
        let models = model.split(',');
        values.forEach((v, i) => {
            if (v != null && models.length > i) {
                _.set(newState, models[i], v);
            }
        });
        owner.setState(newState)
    },

};

export default modelUtils;