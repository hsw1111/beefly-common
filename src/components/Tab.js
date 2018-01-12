import React from 'react';

export default class Tab extends React.Component {

    render() {
        return this.props.children()
    }
}

Tab.propTypes = {
    title: React.PropTypes.string,
};

Tab.defaultProps = {
    title: 'Tab',
};

Tab.className = 'Tab';

