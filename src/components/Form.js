import React from 'react';
import cs from 'classnames'

export default class Form extends React.Component {

	render() {
		let {horizontal, inline} = this.props;
		return (
			<form className={cs({'form-horizontal': horizontal, 'form-inline': inline})}>
				{this.props.children}
			</form>
		)
	}

}

Form.propTypes = {
	horizontal: React.PropTypes.bool, 	// 水平布局
	inline: React.PropTypes.bool,		// 行内布局
}

Form.defaultProps = {
	horizontal: false,
	inline: false,
}

