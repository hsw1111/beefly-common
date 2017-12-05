import { dateUtils } from "jeselvmo";

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
    }

};

export default dtUtils;
