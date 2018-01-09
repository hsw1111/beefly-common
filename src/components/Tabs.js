import React from 'react';
import cs from 'classnames'
import modelUtils from '../utils/modelUtils';

export default class Tabs extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            tabIndex: 0
        }
    }

    componentWillMount() {
        this.owner = this._reactInternalInstance._currentElement._owner._instance;
    }

    render() {
        let { children, model } = this.props;
        let tabs = [];
        React.Children.forEach(children, (child) => {
            const cType = child.type;
            if (typeof cType === 'function' && cType.name == 'Tab') {
                tabs.push(child);
            }
        });

        let { tabIndex } = this.state;
        // 数据绑定
        if (model) {
            tabIndex = modelUtils.getStateValue(this.owner, model);
        }
        return (
            <div className="nav-tabs-custom">
                {this.renderNav(tabs, tabIndex)}
                {this.renderContent(tabs, tabIndex)}
            </div>
        )
    }
    renderNav(tabs, tabIndex) {
        return (
            <ul className="nav nav-tabs">
                {tabs.map((t, i) => {
                    let title = t.props.title;
                    return (
                        <li key={title} className={cs({ 'active': tabIndex == i })}>
                            <a href="javascript:" onClick={() => this.switchTab(i)}>{title}</a>
                        </li>
                    )
                })}
            </ul>
        )
    }

    renderContent(tabs, tabIndex) {
        return (
            <div className="tab-content">
                {tabs.map((t, i) => {
                    let title = t.props.title;
                    return (
                        <div key={title} className={cs("tab-pane", { "active": tabIndex == i })}>
                            {t.props.children}
                        </div>
                    )
                })}
            </div>
        )
    }

    switchTab(index) {
        let { model, onChange } = this.props;
        if (model) {
            modelUtils.setStateValue(this.owner, model, index)
        }else{
            this.setState({
                tabIndex: index
            });
        }
        onChange && onChange(index)
    }
}

Tabs.propTypes = {
    model: React.PropTypes.string,          // 数据绑定
    onChange: React.PropTypes.func,         //
}

Tabs.defaultProps = {
}
