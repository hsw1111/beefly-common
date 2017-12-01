import React from 'react';
import cs from 'classnames'

export default class Box extends React.Component {

    render() {
        let {title, withBorder, theme} = this.props;
        let themeClass = (theme !== null && theme !== '') ? 'box-' + theme : '';
        return (
            <div className={['box', themeClass].join(' ')}>
                {title && (
                    <div className={cs({"box-header": true, "with-border": withBorder})}>
                        <h3 className="box-title">{title}</h3>
                    </div>
                )}
                <div className="box-body">
                    {this.props.children}
                </div>
            </div>
        )
    }

}

Box.propTypes = {
    title: React.PropTypes.string,
    withBorder: React.PropTypes.bool,
    theme: React.PropTypes.string
}

Box.defaultProps = {
    title: null,
    withBorder: false,
    theme: 'primary'
}

