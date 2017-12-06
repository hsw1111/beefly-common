import React from 'react';

export default class Content extends React.Component {

    render() {
        let {children} = this.props;
        return (
            <section className="content">
                {children}
            </section>
        )
    }

}

Content.propTypes = {};

Content.defaultProps = {};

