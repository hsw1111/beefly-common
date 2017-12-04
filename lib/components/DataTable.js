'use strict';

exports.__esModule = true;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _uiLoad = require('../utils/uiLoad');

var _uiLoad2 = _interopRequireDefault(_uiLoad);

var _uiResConfig = require('../utils/uiResConfig');

var _uiResConfig2 = _interopRequireDefault(_uiResConfig);

var _jeselvmo = require('jeselvmo');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DataTable = function (_React$Component) {
    (0, _inherits3.default)(DataTable, _React$Component);

    function DataTable(props) {
        (0, _classCallCheck3.default)(this, DataTable);

        var _this = (0, _possibleConstructorReturn3.default)(this, (DataTable.__proto__ || (0, _getPrototypeOf2.default)(DataTable)).call(this, props));

        _this.defaultOptions = {
            language: {
                "sProcessing": "处理中...",
                "sLengthMenu": "显示 _MENU_ 项结果",
                "sZeroRecords": "没有匹配结果",
                "sInfo": "显示第 _START_ 至 _END_ 项结果，共 _TOTAL_ 项",
                "sInfoEmpty": "显示第 0 至 0 项结果，共 0 项",
                "sInfoFiltered": "(由 _MAX_ 项结果过滤)",
                "sInfoPostFix": "",
                "sSearch": "搜索:",
                "sUrl": "",
                "sEmptyTable": "表中数据为空",
                "sLoadingRecords": "载入中...",
                "sInfoThousands": ",",
                "oPaginate": {
                    "sFirst": "首页",
                    "sPrevious": "上页",
                    "sNext": "下页",
                    "sLast": "末页"
                },
                "oAria": {
                    "sSortAscending": ": 以升序排列此列",
                    "sSortDescending": ": 以降序排列此列"
                }
            },
            processing: true,
            serverSide: true,
            autoWidth: false,
            destroy: true,
            ordering: false,
            pageLength: 10,
            dom: "tr<'row'<'col-sm-6'i><'col-sm-6'p>>",
            ajax: _this.ajax.bind(_this)
        };

        var columns = props.columns;

        _this.state = {
            options: (0, _assign2.default)({}, _this.defaultOptions, { columns: columns })
        };
        return _this;
    }

    (0, _createClass3.default)(DataTable, [{
        key: 'handlerProps',
        value: function handlerProps(props) {
            var newProps = (0, _assign2.default)({}, props);

            if (newProps.columns) {
                newProps.columns.forEach(function (c) {
                    if (c.data == null && c.render == null) {
                        // 默认处理
                        c.render = function () {
                            return '';
                        };
                    } else if (c.data != null && c.render == null) {
                        // 空值处理
                        c.render = function (data) {
                            return data == null ? '' : data;
                        };
                    }
                });
            }
            return newProps;
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement('table', { ref: function ref(e) {
                    return _this2._dataTable = e;
                }, className: 'table table-striped table-bordered table-hover' });
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this3 = this;

            _uiLoad2.default.load(_uiResConfig2.default.DataTable).then(function () {
                _this3.init();
            });
        }
    }, {
        key: 'shouldComponentUpdate',
        value: function shouldComponentUpdate(nextProps, nextState) {
            return nextProps.query !== this.props.query;
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
            this.draw();
        }
    }, {
        key: 'init',
        value: function init() {
            this.dataTable = (0, _jquery2.default)(this._dataTable).dataTable(this.state.options);
        }
    }, {
        key: 'draw',
        value: function draw() {
            this.dataTable.api().draw();
        }
    }, {
        key: 'ajax',
        value: function ajax(data, callback, settings) {
            var _props = this.props,
                url = _props.url,
                query = _props.query;


            var params = (0, _extends3.default)({}, query);

            // 添加分页信息
            params['pageNo'] = data.start / data.length + 1;
            params['pageSize'] = data.length;

            _jeselvmo.request.post(url, params).then(function (result) {
                var returnData = {};
                returnData.data = result.data.data;
                returnData.recordsTotal = result.data.totalCount;
                returnData.recordsFiltered = result.data.totalCount;
                callback(returnData);
            });
        }
    }]);
    return DataTable;
}(_react2.default.Component);

/**
 * @columns 设定列的所有初始属性
 * @columns.name 给列设置一个描述名称
 * @columns.title 设置列的标题
 * @columns.type 设定该列的类型 - 在该列排序或者搜索的时候使用
 * @columns.data 设置列的数据源，即如何从整个Table的数据源(object / array)中获得
 * @columns.render 在列上处理数据的函数，可以再次自定义显示内容 function render( data, type, row, meta ){}
 * @columns.visible 允许或者禁止列的显示
 * @columns.width  设定列宽
 * @columns.searchable 开启或者关闭此列中数据过滤
 * @columns.orderable 开启/禁用这列是否排序
 * @columns.orderData 定义多个列的排序作为一列的默认顺序
 * @columns.orderDataType 给列分配实时DOM排序类型
 * @columns.orderSequence 定义列排序的方向
 * @columns.defaultContent 设定该列的默认、静态的内容
 * @columns.cellType 为创建列设置单元格类型
 * @columns.className 给列中每个单元格指定一个或多个class
 * @columns.contentPadding 当表格计算最佳值为文本内容添加填充(padding)
 * @columns.createdCell 单元格创建回调以允许操作DOM
 *
 * columnDefs.targetsDT 为一个或多个列编制定义
 * columnDefs 设置定义列的初始属性
 */


exports.default = DataTable;
DataTable.propTypes = {
    columns: _react2.default.PropTypes.array, // 设定列的所有初始属性
    url: _react2.default.PropTypes.string, // 数据请求接口
    query: _react2.default.PropTypes.object // 启用排序
};

DataTable.defaultProps = {
    columns: [],
    url: '',
    query: {}
};