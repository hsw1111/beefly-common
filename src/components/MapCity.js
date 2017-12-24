import React from 'react';


/**
 * 地图城市定位
 */
export default class MapCity extends React.Component {

	map;
	element;
	city;

	constructor(props) {
		super(props);

		const map = props.__map__;
		if (!map) {
			console.log('组件必须作为 Map 的子组件使用');
			return;
		}

		if (typeof window !== 'undefined') {
			if (!props.__map__) {
				console.log('MAP_INSTANCE_REQUIRED')
			} else {
				const self = this;
				this.map = props.__map__;
				this.element = this.map.getContainer();
				setTimeout(() => {
					this.initMapCity(props)
				}, 13)
			}
		}

	}

	get instance() {
		return this.marker
	}

	shouldComponentUpdate() {
		return false
	}

	componentWillReceiveProps(nextProps) {
		if (this.map && this.city !== nextProps.city) {
			this.refreshMapCity(nextProps)
		}
	}

	initMapCity(props) {
		this.refreshMapCity(props);
	}

	refreshMapCity(nextProps) {
		if (nextProps.city) {
			this.setCity(nextProps.city);
		}
	}

	setCity(city) {
		this.city = city;
		this.map.setCity(city);
	}

	render() {
		return null
	}
}
