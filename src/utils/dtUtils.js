import { dateUtils, numberUtils } from "jeselvmo";

/**
 * DataTable列渲染
 */
const dtUtils = {

	/**
	 * 渲染日期格式
	 * @param {number} value 日间戳
	 * @returns {string} 格式化后日期
	 */
	renderDate(value) {
		return value ? dateUtils.format(value, dateUtils.patterns.date) : ''
	},

	/**
	 * 渲染日期时间格式
	 * @param {number} value 日间戳
	 * @returns {string} 格式化后日期时间
	 */
	renderDateTime(value) {
		return value ? dateUtils.format(value, dateUtils.patterns.datetime) : ''
	},

	/**
	 * 渲染Map值
	 * @param {string} key 键
	 * @param {object} map 对照表
	 * @returns {string} map中key对应value
	 */
	renderMap(key, map) {
		return map[key] || key
	},

	/**
	 * 渲染按钮组
	 * @param {*} actions 按钮对象数组
	 * @param {string} type 渲染类型
	 * @returns {string} html
	 */
	renderActions(actions, type = 'button') {

		if (type == 'dropdown') {
			return dtUtils._renderDropdownActions(actions);
		} else if (type == 'button') {
			return dtUtils._renderButtonActions(actions);
		} else if (type == 'icon') {
			return dtUtils._renderIconActions(actions);
		} else if (type == 'link') {
			return dtUtils._renderLinkActions(actions);
		} else {
			return actions;
		}
	},

	_renderDropdownActions(actions) {

		function renderli(act) {
			if (act == '-') {
				return `<li role="separator" class="divider"></li>`
			}
			return `<li><a href="javascript:" onclick="${act.onclick}">${act.text}</a></li>`
		}

		return `<div class="btn-group">
			<button type="button" class="btn btn-primary btn-flat btn-sm dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
				更多... <span class="caret"></span>
			</button>
			<ul class="dropdown-menu dropdown-menu-right">
				${actions.map((act) => renderli(act)).join('\n')}
			</ul>
		</div>`;
	},
	_renderButtonActions(actions) {

		function renderli(act) {
			if (act == '-') {
				return ``
			}
			return `<button type="button" class="btn btn-primary btn-sm" onclick="${act.onclick}">${act.text}</button>`
		}

		return `<div class="btn-group11">
			${actions.map((act) => renderli(act)).join('\n')}
		</div>`;
	},
	_renderIconActions(actions) {

		function renderli(act) {
			if (act == '-') {
				return ``
			}
			let icon = `<i class="fa fa-fw fa-${act.icon}"></i>`;
			return `<a href="javascript:" onclick="${act.onclick}" title="${act.text}">${icon}</a>`
		}

		return `<div class="btn-group11">
			${actions.map((act) => renderli(act)).join('\n')}
		</div>`;
	},
	_renderLinkActions(actions) {

		function renderli(act) {
			if (act == '-') {
				return ``
			}
			let icon = act.icon ? `<i class="fa fa-fw fa-${act.icon}"></i>` : '';
			return `<a href="javascript:" onclick="${act.onclick}" title="${act.text}">${icon} ${act.text}</a>`
		}

		return `<div class="link-actions">
			${actions.map((act) => renderli(act)).join('\n')}
		</div>`;
	},

	renderNumber(data, pattern) {
		return numberUtils.format(data, pattern)
	}

};

export default dtUtils;
