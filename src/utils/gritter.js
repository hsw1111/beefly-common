import $ from 'jquery';

/**
 * Gritter Notifications
 */
const gritter = {

    add(options) {
        $.gritter.add(Object.assign({}, {
            title: '提示',
            text: '操作成功！',
            image: 'http://web.mmuu.com/app/assets/images/share-xmf.png',
            sticky: false,
            time: 2000,
            speed: 1000,
            // class_name: 'gritter-success'
        }, options))
    },

    removeAll() {
        $.gritter.removeAll();
    },


    info(text, callback) {
        gritter.add({
            text,
            before_close: callback,
            class_name: 'gritter-info'
        })
    },


    success(text, callback) {
        gritter.add({
            text,
            before_close: callback,
            class_name: 'gritter-success'
        })
    },


    error(text, callback) {
        gritter.add({
            text,
            before_close: callback,
            class_name: 'gritter-error'
        })
    },


    warning(text, callback) {
        gritter.add({
            text,
            before_close: callback,
            class_name: 'gritter-warning'
        })
    }


};

export default gritter;