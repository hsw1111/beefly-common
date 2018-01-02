/**
 * 公共utils方法
 */
const utils = {

    // 添加Tab页
    addTab(tab) {
        parent.beefly.addTab(tab)
    },

    alert() {
        let option = {};
        if (arguments.length > 0) {
            if (arguments.length == 1) {
                if (typeof arguments[0] == 'string') {
                    option.message = arguments[0];
                } else {
                    option = arguments[0];
                }
            } else if (arguments.length == 2) {
                option.message = arguments[0];
                option.callback = arguments[1];
            }
        }

        let opt = Object.assign({}, {
            backdrop: true,
            message: '您不说些什么？'
        }, option);

        window.bootbox.alert(opt);
    },

    confirm() {
        let option = {};
        if (arguments.length > 0) {
            if (arguments.length == 1) {
                if (typeof arguments[0] == 'string') {
                    option.message = arguments[0];
                } else {
                    option = arguments[0];
                }
            } else if (arguments.length == 2) {
                option.message = arguments[0];
                option.callback = arguments[1];
            }
        }

        let opt = Object.assign({}, {
            message: '您不说些什么？',
            buttons: {
                confirm: {
                    label: 'Yes',
                    className: 'btn-success'
                },
                cancel: {
                    label: 'No',
                    className: 'btn-danger'
                }
            },
            callback: () => true
        }, option);

        window.bootbox.confirm(opt);
    }

};

export default utils;
