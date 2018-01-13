/**
 *
 */
const tabs = {

    // 添加Tab页
    addTab(tab) {
        if (parent && parent.beefly && parent.beefly.addTab) {
            parent.beefly.addTab(tab)
        } else {
            // 带参数
            var queryString = '';
            if (tab.params) {
                var params = tab.params;
                var paramsArray = [];
                for (var key in params) {
                    paramsArray.push(key + '=' + encodeURIComponent(params[key]));
                }
                if (paramsArray.length > 0)
                    queryString = '?' + paramsArray.join('&');
            }
            var url = `index.html${queryString}#${tab.path}`;
            window.open(url)
        }
    },

    // 关闭当前Tab页
    closeTab() {
        if (parent && parent.beefly && parent.beefly.closeTab) {
            parent.beefly.closeTab()
        } else {
            window.close()
        }
    }

};

export default tabs;