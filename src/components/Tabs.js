import React from 'react';
import cs from 'classnames'

export default class Tabs extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            tabIndex: 0
        }
    }

    render() {
        return (
            <div className="nav-tabs-custom">
                {this.renderNav()}
                {this.renderContent()}
            </div>
        )
    }
    renderNav() {
        let { children } = this.props;
        let tabs = [];
        React.Children.forEach(children, (child) => {
            const cType = child.type;
            if (typeof cType === 'function' && cType.name == 'Tab') {
                tabs.push(child);
            }
        });

        let {tabIndex} = this.state;
        return (
            <ul className="nav nav-tabs">
                {tabs.map((t, i) => {
                    // console.log(t)
                    let title = t.props.title;
                    return (
                        <li key={title} className={cs({'active': tabIndex == i})}>
                            <a href="javascript:" onClick={()=>this.switchTab(i)}>{title}</a>
                        </li>
                    )
                })}
            </ul>
        )
    }

    renderContent() {
        let { children } = this.props;
        let tabs = [];
        React.Children.forEach(children, (child) => {
            const cType = child.type;
            if (typeof cType === 'function' && cType.name == 'Tab') {
                tabs.push(child);
            }
        });

        let {tabIndex} = this.state;
        return (
            <div className="tab-content">
                {tabs.map((t, i) => {
                    let title = t.props.title;
                    return (
                        <div key={title} className={cs("tab-pane", {"active": tabIndex == i})}>
                            {t.props.children}
                        </div>
                    )
                })}
            </div>
        )
    }

    switchTab(index){
        this.setState({
            tabIndex: index
        })
    }
}

Tabs.propTypes = {
}

Tabs.defaultProps = {
}
