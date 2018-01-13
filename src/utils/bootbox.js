/**
 *
 */
const bootbox = {

    // 提示弹框
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

    // 确认弹框
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
    },

    // 对话框
    dialog(option) {

        let opt = Object.assign({}, {
            title: '订单详情',
            message: `<iframe src='index.html#${option.path}' width='100%' height='${option.height || 300}' frameborder='0'></iframe>`,
            size: 'large',
            buttons: {
                cancel: {
                    label: "cancel",
                    className: 'btn-danger',
                    callback: function () {
                    }
                },
                ok: {
                    label: "ok",
                    className: 'btn-info',
                    callback: function () {
                    }
                }
            }
        }, option);

        var dialog = window.bootbox.dialog(opt)

        dialog.init(function () {
            setTimeout(() => {
                dialog.beefly = dialog.find('iframe')[0].contentWindow.beefly
            }, 2000);
        })
        return dialog
    },

    // 关闭弹框
    hideAll() {
        window.bootbox.hideAll()
    }

};

export default bootbox;