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
            this.init()
        })
    }

    init(){
        let {markers, polygons, onShowMarkerInfo} = this.props;
        
        this.map = new AMap.Map(this._map, this.state.options);
        // this.map.setCity(this.props.city)
    }

    componentWillReceiveProps(nextProps){
        this.init();
        if(this.markers !== nextProps.markers){
            let {markers, polygons, onShowMarkerInfo} = this.props;

            this.infoWindow =  new AMap.InfoWindow({offset: new AMap.Pixel(0, -30)});
            //定位
            this.mapMarkers = nextProps.markers.map((marker)=>{
                let mapMarker = new AMap.Marker(marker);
                mapMarker.setMap(this.map);

                mapMarker.content = onShowMarkerInfo(marker);
                mapMarker.on('click', (e)=>{
                    this.infoWindow.setContent(e.target.content);
                    this.infoWindow.open(this.map, e.target.getPosition());
                });

                return mapMarker;
            });

            //区域
            this.mapPolygons = polygons.map((polygon)=>{
                let mapPolygon = new AMap.Polygon(polygon);
                mapPolygon.setMap(this.map);
                return mapPolygon;
            });

        }
        //定位城市
        if(nextProps.citys=="寿县"){
            this.map.setCity("淮南市");
        }else{
            this.map.setCity(nextProps.citys);
        }

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

