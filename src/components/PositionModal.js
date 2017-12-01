import React from 'react';
import {Modal} from "react-bootstrap";
import {Validator} from 'jeselvmo';
import {Map, Marker} from 'react-amap';
import Button from './Button';

/**
 * 地图定位组件
 */
export default class PositionModal extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			show: false,
			markerPosition: {
				longitude: 116.481215,
				latitude: 39.990162
			}
		};

		this.close = this.close.bind(this);
	}

	render() {
		let {title, className} = this.props;
		let {show, markerPosition} = this.state;
		return (
			<Modal show={show} onHide={this.close} className={className} bsSize={'large'}>
				<Modal.Header closeButton>
					<Modal.Title>{title}</Modal.Title>
				</Modal.Header>
				<Modal.Body ref={(e) => this.body = e}>
					<div style={{width: '100%', height: 400}}>
						<Map center={markerPosition}>
							<Marker position={markerPosition}/>
						</Map>
					</div>
				</Modal.Body>
				<Modal.Footer>
					<Button onClick={this.close} btnTheme="primary" iconClass="close">Close</Button>
				</Modal.Footer>
			</Modal>
		)
	}

	show(loc) {
		let markerPosition = loc;

		if (Validator.isString(loc)) {
			let arr = loc.split(',');
			markerPosition = {
				longitude: arr[0],
				latitude: arr[1]
			}
		}

		console.log('markerPosition:', markerPosition)

		this.setState({
			show: true,
			markerPosition
		})

	}

	close() {
		this.setState({
			show: false
		})
	}
}


PositionModal.propTypes = {
	show: React.PropTypes.bool,
	title: React.PropTypes.string,
	className: React.PropTypes.string,
}

PositionModal.defaultProps = {
	show: false,
	title: '地图定位',
	className: 'modal-default',
}

