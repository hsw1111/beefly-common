## Component

<a id="provider"></a>
### `DataTable`

表格列表组件。相关文档：http://www.datatables.club/

#### Props

* `columns` ( *array* ): 数据列定义。
* `url` (*string*): 数据请求url。
* `query` (*object*): 查询参数。
* `ajax` (*func*): 数据请求回调方法。

#### Example

##### 完整例子

```js
// 列定义
const columns = [
  { title: '用户编号', data: 'userId' },
  { title: '用户姓名', data: 'name' },
  { title: '手机号码', data: 'mobile' },
  { title: '登陆城市', data: 'registerCity' },
  { title: '用户状态', data: 'userStatusName' },
  { title: '注册时间', data: 'registerTime', render: dtUtils.renderDateTime },
  { title: '账户余额', data: 'balance', className: "text-right", render: (data) => dtUtils.renderNumber(data, '0.00') },
  { title: '信用积分', data: 'credScore', className: "text-right" },
  { title: '失信状态', data: 'creditLimit', className: "text-center"},
  { title: '操作', type: 'object', render: this.renderActions },
];

// 数据请求url
const url = env.mifengSystem + "user!queryPage.do";

// 数据请求参数
const query: {
  'userStatusValue': '',
  'qRegistTimeStart': '',
  'qRegistTimeEnd': '',
  'qBalanceType': '1',
  'qBalanceStart': '',
  'qBalanceEnd': '',
  'keywords': '',
  'registerCityCode': '',
  'conditionFlag': 'mobile'
};

<DataTable columns={columns} url={url} query={query} />
```

#### columns

* `title` ( *string* ): 列表头定义。
* `data` (*string*): 数据列字段名。
* `className` (*string*): 列的样式。对齐方式样式：text-left、text-center、text-right，可以自定义。
* `render` (*func*): 数据请求回调方法，render: (data, type, row)=>{ ... }，默认渲染字符串。
  
```js
// 渲染日期列表
(data, type, row) => dtUtils.renderDate(data)

// 渲染日期时间列
(data, type, row) => dtUtils.renderDateTime(data)

// 渲染字典列
const orderFlowMap = {
	0: '人工结束',
	1: '未取车',
	2: '已取车',
	3: '已结束',
	4: '已取消',
	9: '开锁中',
	10: '开锁失败',
};
(data, type, row) => dtUtils.renderMap(data,orderFlowMap)

// 渲染操作列
// text: 显示按钮文本
// icon: 按钮图标
// onclick：事件处理方法
const actions = [
  { text: '查看详情', icon: 'search', onclick: `beefly.showMsg('${row.userId}')` },
  { text: '强行关车', icon: 'user-plus', onclick: `beefly.showMsg('${row.userId}')` },
  { text: '查看位置', onclick: `beefly.showMsg('${row.userId}')` },
  '-',
  { text: '订单跟踪', onclick: `beefly.showMsg('${row.mobile}')` },
];

// renderActions
// 渲染方法的第二参数是渲染按钮的类型，string类型。
// dropdown: 下拉按钮组
// button: 普通按钮
// link: 超链接按钮，可以带图标
// icon：尽显示图标
(data, type, row) => dtUtils.renderActions(actions, 'icon')

```

