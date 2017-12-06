import React from 'react';
import _ from 'lodash';
import { pinyin } from 'jeselvmo';
import $ from 'jquery';

const letterGroup = ['', 'ABCDE', 'FGHIJ', 'KLMNO', 'PQRST', 'UVWXYZ']

/**
 * 城市选择
 */
export default class CitySelect extends React.Component {

    constructor(props) {
        super(props);

        let { citys, defaultValue } = props;
        let citysGroup = this.buildCitysGroup(citys);// 城市分组
        let activeCity = _.find(citys, (c) => c.cityCode == defaultValue || c.cityName == defaultValue); // 默认选中

        this.state = {
            citysGroup,
            activeCity,
            showBox: false, // 显示弹框 
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

    render() {
        let { type, placeholder, label, whole } = this.props;
        let { activeCity, showBox } = this.state;
        let value = activeCity ? activeCity.cityName : '';
        return (
            <div ref="cityselect" className="form-group cityselect">
                <label>{label && label + '：'}</label>
                <span className="input-container">
                    <input type={type} className="form-control" placeholder={placeholder} value={value}
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
                            <li><a onClick={() => this.clickCity(c)}>{c.cityName}</a></li>
                        ))}
                    </ul>
                </div>
            </div>
        )
    }

    componentDidMount() {
        // 单击区域之外关闭弹出层
        $(document).on('click', (event) => {
            if (!$.contains(this.refs.cityselect, event.target)) {
                this.setState({
                    showBox: false
                })
            }
        });
    }

    clickInput() {
        this.setState({
            showBox: true
        })
    }

    clickCity(city) {
        this.setState({
            activeCity: city,
            showBox: false
        })
    }

    get cityCode() {
        let { activeCity } = this.state;
        if (activeCity) {
            return activeCity.cityCode
        }
        return null
    }

    get cityName() {
        let { activeCity } = this.state;
        if (activeCity) {
            return activeCity.cityName
        }
        return null
    }

}

CitySelect.propTypes = {
    label: React.PropTypes.string,
    placeholder: React.PropTypes.string,
    citys: React.PropTypes.func,
    whole: React.PropTypes.bool,
    defaultValue: React.PropTypes.string
};

CitySelect.defaultProps = {
    label: '城市区域',
    placeholder: '请选择',
    citys: [{ "cityId": 0, "cityName": "全国", "cityCode": "" }, { "cityId": 1, "cityName": "北京市", "cityCode": 110100 }, { "cityId": 11, "cityName": "北辰区", "cityCode": 120113 }, { "cityId": 13, "cityName": "禹州市", "cityCode": 411081 }, { "cityId": 14, "cityName": "蒙城县", "cityCode": 341622 }, { "cityId": 18, "cityName": "高邮市", "cityCode": 321084 }, { "cityId": 24, "cityName": "滕州市", "cityCode": 370481 }, { "cityId": 27, "cityName": "响水县", "cityCode": 320921 }, { "cityId": 29, "cityName": "寿县", "cityCode": 340422 }, { "cityId": 30, "cityName": "新野县", "cityCode": 411329 }, { "cityId": 31, "cityName": "嘉祥县", "cityCode": 370829 }, { "cityId": 35, "cityName": "武功县", "cityCode": 610431 }, { "cityId": 36, "cityName": "扶风县", "cityCode": 610324 }, { "cityId": 37, "cityName": "镇平县", "cityCode": 411324 }, { "cityId": 39, "cityName": "新北区", "cityCode": 320411 }, { "cityId": 42, "cityName": "蜀山区", "cityCode": 340104 }, { "cityId": 47, "cityName": "西平县", "cityCode": 411721 }, { "cityId": 48, "cityName": "汶上县", "cityCode": 370830 }, { "cityId": 49, "cityName": "明光市", "cityCode": 341182 }, { "cityId": 50, "cityName": "丹阳市", "cityCode": 321181 }, { "cityId": 51, "cityName": "马鞍山市", "cityCode": 340500 }, { "cityId": 52, "cityName": "攸县", "cityCode": 430223 }, { "cityId": 57, "cityName": "黄浦区", "cityCode": 310101 }, { "cityId": 61, "cityName": "冷水滩区", "cityCode": 431103 }],
    whole: true,
    defaultValue: ''
};

