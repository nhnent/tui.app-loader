ne.util.defineNamespace("fedoc.content", {});
fedoc.content["detectors.js.html"] = "      <div id=\"main\" class=\"main\">\n\n\n\n    \n    <section>\n        <article>\n            <pre class=\"prettyprint source linenums\"><code>/**\n * @fileoverview Mixin modules\n * @dependency code-snippet.js, appLoader.js\n * @author NHN Ent. FE dev team.&lt;dl_javascript@nhnent.com>\n */\n/**\n * @namespace Detector\n */\nvar Detector = {\n    /**\n     * for timer\n     */\n    TIMEOUT: {\n        IOS_SHORT: 1000,\n        IOS_LONG: 1000 * 2,\n        ANDROID: 100 * 3,\n        INTERVAL: 100\n    },\n    \n    /**\n     * Call app by iframe\n     * @param {string} urlScheme iframe url\n     */\n    runAppWithIframe: function (urlScheme) {\n        var self = this,\n            iframe;\n        setTimeout(function () {\n            iframe = self.getIframeMadeById('supportFrame');\n            iframe.src = urlScheme;\n        }, this.TIMEOUT.INTERVAL);\n    },\n\n    /**\n     * Create iframe\n     * @param {string} id iframe ID\n     * @returns {HTMLElement}\n     */\n    getIframeMadeById: function (id) {\n        var iframe = document.createElement('iframe');\n        tui.util.extend(iframe, {\n            id: id,\n            frameborder: '0',\n            width: '0',\n            height: '0'\n        });\n        iframe.style.display = 'none';\n        document.body.appendChild(iframe);\n        return iframe;\n    },\n\n    /**\n     * Defer call callback\n     * @param {string} time A delay time\n     * @param {string} url A url to request\n     * @param {function} callback A callback\n     * @returns {number}\n     */\n    deferCallback: function (url, callback, time) {\n        var clickedAt = new Date().getTime(),\n            now,\n            self = this;\n\n        return setTimeout(function () {\n            now = new Date().getTime();\n            if (self.isPageVisibility() &amp;&amp; now - clickedAt &lt; time + self.TIMEOUT.INTERVAL) {\n                callback(url);\n            }\n        }, time);\n    },\n\n    /**\n     * check a webpage is visible or in focus\n     * @returns {boolean}\n     */\n    isPageVisibility: function () {\n        if (tui.util.isExisty(document.hidden)) {\n            return !document.hidden;\n        }\n        if (tui.util.isExisty(document.webkitHidden)) {\n            return !document.webkitHidden;\n        }\n        return true;\n    }\n};\n\n/****************\n * Android series\n ****************/\n\n/**\n * Android intent less\n * @namespace Detector.androidSchemeDetector\n */\nDetector.androidSchemeDetector = tui.util.extend({\n    /**\n     * detector type\n     * @memberof Detector.androidSchemeDetector\n     */\n    type: 'scheme',\n\n    /**\n     * Run detector \n     * @param {object} context\n     * @memberof Detector.androidSchemeDetector\n     */\n    run: function(context) {\n        var storeURL = context.storeURL;\n        this.deferCallback(storeURL, context.notFoundCallback, this.TIMEOUT.ANDROID);\n        this.runAppWithIframe(context.urlScheme);\n    }\n}, Detector);\n\n\n/**\n * Android intent\n * @namespace Detector.androidIntendDetector\n */\nDetector.androidIntendDetector = tui.util.extend({\n    /**\n     * detector type\n     * @memberof Detector.androidIntendDetector\n     */\n    type: 'intend',\n\n    /**\n     * Run detector \n     * @param {object} context\n     * @memberof Detector.androidIntendDetector\n     */\n    run: function(context) {\n        setTimeout(function () {\n            top.location.href = context.intentURI;\n        }, this.TIMEOUT.INTERVAL);\n    }\n}, Detector);\nmodule.exports = Detector;\n</code></pre>\n        </article>\n    </section>\n\n\n\n</div>\n\n"