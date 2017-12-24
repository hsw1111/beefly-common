import {Map} from 'react-amap';


/**
 * AMap
 */
export default class BeeMap extends Map {

	constructor(props) {
		super({
			amapkey: '1fecbc9f8ffcde7f91a6413b371ceeb4',
			version: '1.4.2',
			...props
		});
	}

}
