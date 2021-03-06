import jQuery from 'jquery';

/**
 * 0.1.0
 * Deferred load js/css file, used for ui-jq.js and Lazy Loading.
 *
 * @ flatfull.com All Rights Reserved.
 * Author url: http://themeforest.net/user/flatfull
 */
let uiLoad = uiLoad || {};

(function ($, $document, uiLoad) {
    "use strict";

    let loaded = [],
        promise = false,
        deferred = $.Deferred();

    /**
     *
     * Chain loads the given sources
     * @param {string} srcs array, script or css
     * @returns {*} Promise that will be resolved once the sources has been loaded.
     */
    uiLoad.load = function (srcs) {
        srcs = $.isArray(srcs) ? srcs : srcs.split(/\s+/);
        if (!promise) {
            promise = deferred.promise();
        }

        $.each(srcs, function (index, src) {
            promise = promise.then(function () {
                return src.indexOf('.css') >= 0 ? loadCSS(src) : loadScript(src);
            });
        });
        deferred.resolve();
        return promise;
    };

    /**
     *
     * Dynamically loads the given script
     * @param {string} src The url of the script to load dynamically
     * @returns {*} Promise that will be resolved once the script has been loaded.
     */
    let loadScript = function (src) {
        if (loaded[src]) return loaded[src].promise();

        let deferred = $.Deferred();
        let script = $document.createElement('script');
        script.src = src;
        script.onload = function (e) {
            deferred.resolve(e);
        };
        script.onerror = function (e) {
            deferred.reject(e);
        };
        $document.body.appendChild(script);
        loaded[src] = deferred;

        return deferred.promise();
    };

    /**
     *
     * Dynamically loads the given CSS file
     *
     * @param {string} href The url of the CSS to load dynamically
     * @returns {*} Promise that will be resolved once the CSS file has been loaded.
     */
    let loadCSS = function (href) {
        if (loaded[href]) return loaded[href].promise();

        let deferred = $.Deferred();
        let style = $document.createElement('link');
        style.rel = 'stylesheet';
        style.type = 'text/css';
        style.href = href;
        style.onload = function (e) {
            deferred.resolve(e);
        };
        style.onerror = function (e) {
            deferred.reject(e);
        };
        $document.head.appendChild(style);
        loaded[href] = deferred;

        return deferred.promise();
    }

})(jQuery, document, uiLoad);

export default uiLoad;
