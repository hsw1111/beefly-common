import React from 'react';
import $ from 'jquery';
import uiLoad from "../utils/uiLoad";
import uiResConfig from "../utils/uiResConfig";

export default class DataTable extends React.Component {

    constructor(props) {
        super(props);

        this.defaultOptions = {
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
            ajax: this
                .ajax
                .bind(this)
        };

        let {columns} = props;
        this.state = {
            options: Object.assign({}, this.defaultOptions, {columns})
        }
    }

    handlerProps(props) {
        let newProps = Object.assign({}, props);

        if (newProps.columns) {
            newProps
                .columns
                .forEach((c) => {
                    if (c.data == null && c.render == null) { // 默认处理
                        c.render = () => '';
                    } else if (c.data != null && c.render == null) { // 空值处理
                        c.render = (data) => (data == null
                            ? ''
                            : data);
                    }
                })
        }
        return newProps;
    }

    render() {
        return (<table
            ref={(e) => this._dataTable = e}
            className="table table-striped table-bordered table-hover"/>)
    }

    componentDidMount() {
        uiLoad
            .load(uiResConfig.DataTable)
            .then(() => {
                this.init()
            })
    }

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.query !== this.props.query;
    }

    componentDidUpdate() {
        this.draw()
    }

    init() {
        this.dataTable = $(this._dataTable).dataTable(this.state.options);
    }

    draw() {
        this
            .dataTable
            .api()
            .draw()
    }

    ajax(data, callback, settings) {
        let {url, query, onAjax} = this.props;

        let params = {
            ...query
        };

        // 添加分页信息
        params['pageNo'] = (data.start / data.length) + 1;
        params['pageSize'] = data.length;

        onAjax(url, params, callback);
    }
}

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
DataTable.propTypes = {
    columns: React.PropTypes.array, // 设定列的所有初始属性
    url: React.PropTypes.string, // 数据请求接口
    query: React.PropTypes.object, // 启用排序
    onAjax: React.PropTypes.func
};

DataTable.defaultProps = {
    columns: [],
    url: '',
    query: {},
    onAjax: (url, params, callback) => {
        let returnData = {};
        returnData.data = [];
        returnData.recordsTotal = 0;
        returnData.recordsFiltered = 0;
        callback(returnData);
    }
};
