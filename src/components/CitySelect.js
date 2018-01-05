import React from 'react';
import _ from 'lodash';
import { pinyin } from 'jeselvmo';
import $ from 'jquery';
import modelUtils from '../utils/modelUtils';

const letterGroup = ['', 'ABCDE', 'FGHIJ', 'KLMNO', 'PQRST', 'UVWXYZ']

/**
 * 选择城市区域
 */
export default class CitySelect extends React.Component {

    constructor(props) {
        super(props);

        let citysGroup = this.buildCitysGroup(props.citys);// 城市分组

        this.state = {
            citysGroup,
            showBox: false, // 显示弹框 
            cityMap: 
        }
    }

    buildCitysGroup(citys) {
        let citysGroup = {};

        // 首字母分组
        _.forEach(citys, (c) => {
            let firstLetterGroup = '';
            if (c.cityName !== '全国') {
                let firstLetter = pinyin.convert(c.cityName)[0][0][0].toUpperCase();
                firstLetterGroup = _.find(letterGroup, (lg) => lg.includes(firstLetter))
            }
            c.firstLetterGroup = firstLetterGroup
        })

        // 城市分组
        citysGroup = _.groupBy(citys, (city) => city.firstLetterGroup);

        return citysGroup
    }

    toCityMap(citys){
        let map = {};
        _.forEach(citys, (c) => {
            map[c.cityCode] = c;
        });
    }

    componentWillMount() {
        this.owner = this._reactInternalInstance._currentElement._owner._instance;
    }

    render() {
        let { type, placeholder, label, whole, cityCode, cityName, model } = this.props;
        let { showBox } = this.state;
        
        if(model){
            let stateValues = modelUtils.getStateValues(this.owner, model);
            cityCode = stateValues[0];
            if(stateValues.length > 1){
                cityName = stateValues[1];
            }
        }

        if(cityName){
            cityName = this.getCityName(cityCode);
        }

        return (
            <div ref={(e) => this._cityselect = e} className="form-group cityselect">
                <label>{label && label + '：'}</label>
                <span className="input-container">
                    <input type={type} className="form-control" placeholder={placeholder} value={cityName}
                        onClick={this.clickInput.bind(this)} />
                    {showBox && <div className="cityselect-box">
                        {letterGroup.map((group) => (!whole && group == '') ? null : this.renderGroup(group))}
                    </div>}
                </span>
            </div>
        )
    }

    renderGroup(group) {
        let { citysGroup } = this.state;
        return (
            <div key={group} className="row">
                <div className="col-sm-2 col-index">{group}</div>
                <div className="col-sm-10 col-list">
                    <ul>
                        {_.map(citysGroup[group], (c) => (
                            <li><a href="javascript:" onClick={() => this.clickCity(c)}>{c.cityName}</a></li>
                        ))}
                    </ul>
                </div>
            </div>
        )
    }

    componentDidMount() {
        $(document).bind('click', this.clickBoxOutsideHide.bind(this))
    }

    componentWillUnmount() {
        $(document).unbind('click', this.clickBoxOutsideHide.bind(this))
    }

    clickInput() {
        this.setState({
            showBox: true
        })
    }

    clickCity(city) {
        this.setState({
            showBox: false
        })
        this.handleChange(city)
    }

    handleChange(city) {
        let { model, onChange } = this.props;
        if (model) {
            modelUtils.setStateValues(this.owner, model, [city.cityCode, city.cityName])
        }
        onChange && onChange(city)
    }

    clickBoxOutsideHide() {
        if (this._cityselect && !$.contains(this._cityselect, event.target)) {
            this.setState({
                showBox: false
            })
        }
    }

    getCityName(cityCode){
        let {citysGroup} = this.state;
        let activeCity = _.find(citys, (c) => c.cityCode == defaultValue || c.cityName == defaultValue); // 默认选中
    }

}

CitySelect.propTypes = {
    label: React.PropTypes.string,
    placeholder: React.PropTypes.string,
    citys: React.PropTypes.func,
    whole: React.PropTypes.bool,
    wholeCity: React.PropTypes.object,
};

CitySelect.defaultProps = {
    label: '',
    placeholder: '请选择',
    citys: [{ "cityName": "北京市", "cityCode": 110100 }, { "cityId": 11, "cityName": "北辰区", "cityCode": 120113 }, { "cityId": 13, "cityName": "禹州市", "cityCode": 411081 }, { "cityId": 14, "cityName": "蒙城县", "cityCode": 341622 }, { "cityId": 18, "cityName": "高邮市", "cityCode": 321084 }, { "cityId": 24, "cityName": "滕州市", "cityCode": 370481 }, { "cityId": 27, "cityName": "响水县", "cityCode": 320921 }, { "cityId": 29, "cityName": "寿县", "cityCode": 340422 }, { "cityId": 30, "cityName": "新野县", "cityCode": 411329 }, { "cityId": 31, "cityName": "嘉祥县", "cityCode": 370829 }, { "cityId": 35, "cityName": "武功县", "cityCode": 610431 }, { "cityId": 36, "cityName": "扶风县", "cityCode": 610324 }, { "cityId": 37, "cityName": "镇平县", "cityCode": 411324 }, { "cityId": 39, "cityName": "新北区", "cityCode": 320411 }, { "cityId": 42, "cityName": "蜀山区", "cityCode": 340104 }, { "cityId": 47, "cityName": "西平县", "cityCode": 411721 }, { "cityId": 48, "cityName": "汶上县", "cityCode": 370830 }, { "cityId": 49, "cityName": "明光市", "cityCode": 341182 }, { "cityId": 50, "cityName": "丹阳市", "cityCode": 321181 }, { "cityId": 51, "cityName": "马鞍山市", "cityCode": 340500 }, { "cityId": 52, "cityName": "攸县", "cityCode": 430223 }, { "cityId": 57, "cityName": "黄浦区", "cityCode": 310101 }, { "cityId": 61, "cityName": "冷水滩区", "cityCode": 431103 }],
    whole: true,
    wholeCity: { "cityName": "全国", "cityCode": "" }
};

