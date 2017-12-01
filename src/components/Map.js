import React from 'react';
import uiLoad from "../utils/uiLoad";
import uiResConfig from "../utils/uiResConfig";

/**
 * 地图组件
 */
export default class Map extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            options: {
                resizeEnable: true,
                zoom: 11,
                center: [116.397428, 39.90923]
            },
        };

        this.map = null;
    }

    render() {
        let {width, height} = this.props;
        return (
            <div ref={(e) => this._map = e} style={{width, height}}/>
        )
    }

    componentDidMount() {
        uiLoad.load(uiResConfig.Map).then(() => {
// eslint-disable-next-line no-undef
            this.map = new AMap.Map(this._map, this.state.options);
            this.map.setCity(this.props.city)
        })
    }


}


Map.propTypes = {
    width: React.PropTypes.string,
    height: React.PropTypes.string,
    options: React.PropTypes.object,
    city: React.PropTypes.string,
}

Map.defaultProps = {
    width: '100%',
    height: '100%',
    city: '北京'
}

