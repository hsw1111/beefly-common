import React from 'react';
import cs from 'classnames'

class BoxBody extends React.Component {
    render() {
        return (
            <div className="box-body">
                {this.props.children}
            </div>
        )
    }
}

class BoxFooter extends React.Component {
    render() {
        let {className} = this.props;
        return (
            <div className={cs('box-footer', className)}>
                {this.props.children}
            </div>
        )
    }
}

export default class Box extends React.Component {

    render() {
        let {title, withBorder, theme} = this.props;
        let themeClass = (theme !== null && theme !== '') ? 'box-' + theme : '';
        return (
            <div className={['box', themeClass].join(' ')}>
                {title && (
                    <div className="box-header with-border">
                        <h3 className="box-title">{title}</h3>
                    </div>
                )}
                {this.renderBody()}
                {this.renderFooter()}
            </div>
        )
    }

    renderBody() {
        let {children} = this.props;
        let body = null;
        React.Children.forEach(children, (child) => {
            const cType = child.type;
            if (typeof cType === 'function' && cType.name == 'BoxBody') {
                body = child
            }
        });

        if (body == null) {
            body = (
                <BoxBody>
                    {children}
                </BoxBody>
            )
        }

        return body;
    }

    renderFooter() {
        let {children} = this.props;
        let footer = null;
        React.Children.forEach(children, (child) => {
            const cType = child.type;
            if (typeof cType === 'function' && cType.name == 'BoxFooter') {
                footer = child
            }
        });
        return footer;
    }
}

Box.propTypes = {
    title: React.PropTypes.string,
    theme: React.PropTypes.string
}

Box.defaultProps = {
    title: '',
    theme: 'primary'
}

BoxFooter.propTypes = {
    className: React.PropTypes.string,
}

BoxFooter.defaultProps = {}

Box.Body = BoxBody;
Box.Footer = BoxFooter;
