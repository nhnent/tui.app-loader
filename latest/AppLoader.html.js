ne.util.defineNamespace("fedoc.content", {});
fedoc.content["AppLoader.html"] = "<div id=\"main\" class=\"main\">\n\n\n\n\n<section>\n\n<header>\n    \n        <h2>\n        \n        AppLoader\n        \n        \n        </h2>\n        \n    \n</header>\n\n<article>\n    \n    <div class=\"container-overview\">\n    \n        \n<dt>\n    \n        <h4 class=\"name\" id=\"AppLoader\">\n            <span class=\"type-signature\"></span>new AppLoader<span class=\"signature\">()</span><span class=\"type-signature\"></span>\n            \n                <div class=\"container-source method\">\n                    <code>file</code>,\n                    <code>line 14</code>\n                </div>\n            \n        </h4>\n\n\n\n        \n    \n</dt>\n<dd>\n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n\n<dl class=\"details\">\n\n    \n\n    \n\n    <!--\n    \n    -->\n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n</dl>\n\n\n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n</dd>\n\n    \n    </div>\n    \n\n    \n\n    \n\n    \n\n     \n\n    \n\n    \n    <div class=\"container-members\">\n        <h3 class=\"subsection-title\">Members</h3>\n\n        <dl>\n            \n<dt>\n    <h4 class=\"name\" id=\"defaults\">\n        <span class=\"type-signature\"></span>defaults<span class=\"type-signature\"></span>\n        \n        <div class=\"container-source members\">\n            <code>file</code>,\n            <code>line 31</code>\n        </div>\n        \n    </h4>\n\n    \n</dt>\n<dd>\n    \n    <div class=\"description\">\n        <p>default options to run exec</p>\n    </div>\n    \n\n    <!--\n    \n    -->\n\n    \n\n\n<dl class=\"details\">\n\n    \n\n    \n\n    <!--\n    \n    -->\n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n</dl>\n\n\n\n    \n\n    \n</dd>\n\n        \n            \n<dt>\n    <h4 class=\"name\" id=\"detector\">\n        <span class=\"type-signature\"></span>detector<span class=\"type-signature\"></span>\n        \n        <div class=\"container-source members\">\n            <code>file</code>,\n            <code>line 23</code>\n        </div>\n        \n    </h4>\n\n    \n</dt>\n<dd>\n    \n    <div class=\"description\">\n        <p>browser, device detector</p>\n    </div>\n    \n\n    <!--\n    \n    -->\n\n    \n\n\n<dl class=\"details\">\n\n    \n\n    \n\n    <!--\n    \n    -->\n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n</dl>\n\n\n\n    \n\n    \n</dd>\n\n        \n            \n<dt>\n    <h4 class=\"name\" id=\"os\">\n        <span class=\"type-signature\"></span>os<span class=\"type-signature\"></span>\n        \n        <div class=\"container-source members\">\n            <code>file</code>,\n            <code>line 27</code>\n        </div>\n        \n    </h4>\n\n    \n</dt>\n<dd>\n    \n    <div class=\"description\">\n        <p>OS (android/ios/etc)</p>\n    </div>\n    \n\n    <!--\n    \n    -->\n\n    \n\n\n<dl class=\"details\">\n\n    \n\n    \n\n    <!--\n    \n    -->\n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n</dl>\n\n\n\n    \n\n    \n</dd>\n\n        </dl>\n    </div>\n    \n\n    \n    <div class=\"container-methods\">\n        <h3 class=\"subsection-title\">Methods</h3>\n\n        <dl>\n            \n<dt>\n    \n        <h4 class=\"name\" id=\"exec\">\n            <span class=\"type-signature\"></span>exec<span class=\"signature\">(options)</span><span class=\"type-signature\"></span>\n            \n                <div class=\"container-source method\">\n                    <code>file</code>,\n                    <code>line 139</code>\n                </div>\n            \n        </h4>\n\n\n\n        \n    \n</dt>\n<dd>\n\n    \n    <div class=\"description\">\n        <p>Call app</p>\n    </div>\n    \n\n    \n\n    \n\n    \n\n    \n    <div class=\"container-params\">\n        <div class=\"params\">\n\n<table class=\"params\">\n    <thead>\n    <tr>\n        \n        <th>Name</th>\n        \n\n        <th>Type</th>\n\n        \n\n        \n\n        <th class=\"last\">Description</th>\n    </tr>\n    </thead>\n\n    <tbody>\n    \n\n        <tr>\n            \n                <td class=\"name first\"><code>options</code></td>\n            \n\n            <td class=\"type\">\n            \n            </td>\n\n            \n\n            \n\n            <td class=\"description last\"></td>\n        </tr>\n\n    \n    </tbody>\n</table></div>\n    </div>\n    \n\n    \n\n    \n\n\n<dl class=\"details\">\n\n    \n\n    \n\n    <!--\n    \n    -->\n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n</dl>\n\n\n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n        <h5>Example</h5>\n        \n    <pre class=\"prettyprint\"><code>var loader = new tui.component.AppLoader();\nloader.exec({\n     name: 'app', // application Name (ex. facebook, twitter, daum)\n     ios: {\n         scheme: 'fecheck://', // iphone app scheme\n         url: 'itms-apps://itunes.apple.com/app/.....' // app store url\n     },\n     android: {\n         scheme: 'intent://home#Intent;scheme=fecheck;package=com.fecheck;end' // android intent uri\n     }\n });</code></pre>\n\n    \n</dd>\n\n        \n            \n<dt>\n    \n        <h4 class=\"name\" id=\"getOS\">\n            <span class=\"type-signature\"></span>getOS<span class=\"signature\">()</span><span class=\"type-signature\"> &rarr; {string}</span>\n            \n                <div class=\"container-source method\">\n                    <code>file</code>,\n                    <code>line 118</code>\n                </div>\n            \n        </h4>\n\n\n\n        \n    \n</dt>\n<dd>\n\n    \n    <div class=\"description\">\n        <p>Get os</p>\n    </div>\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n    <div class=\"container-returns\">\n        <div class=\"returns\">\n        <h5>Returns:</h5>\n        <div class=\"details\">\n        \n                \n    \n<span class=\"param-type\">string</span>\n\n\n\n            \n        </div>\n        </div>\n    </div>\n    \n\n    \n\n\n<dl class=\"details\">\n\n    \n\n    \n\n    <!--\n    \n    -->\n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n</dl>\n\n\n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n</dd>\n\n        \n            \n<dt>\n    \n        <h4 class=\"name\" id=\"init\">\n            <span class=\"type-signature\"></span>init<span class=\"signature\">()</span><span class=\"type-signature\"></span>\n            \n                <div class=\"container-source method\">\n                    <code>file</code>,\n                    <code>line 49</code>\n                </div>\n            \n        </h4>\n\n\n\n        \n    \n</dt>\n<dd>\n\n    \n    <div class=\"description\">\n        <p>Initialize</p>\n    </div>\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n\n<dl class=\"details\">\n\n    \n\n    \n\n    <!--\n    \n    -->\n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n</dl>\n\n\n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n</dd>\n\n        \n            \n<dt>\n    \n        <h4 class=\"name\" id=\"isIntentLess\">\n            <span class=\"type-signature\"></span>isIntentLess<span class=\"signature\">()</span><span class=\"type-signature\"> &rarr; {boolean}</span>\n            \n                <div class=\"container-source method\">\n                    <code>file</code>,\n                    <code>line 104</code>\n                </div>\n            \n        </h4>\n\n\n\n        \n    \n</dt>\n<dd>\n\n    \n    <div class=\"description\">\n        <p>Whether intent supported</p>\n    </div>\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n    <div class=\"container-returns\">\n        <div class=\"returns\">\n        <h5>Returns:</h5>\n        <div class=\"details\">\n        \n                \n    \n<span class=\"param-type\">boolean</span>\n\n\n\n            \n        </div>\n        </div>\n    </div>\n    \n\n    \n\n\n<dl class=\"details\">\n\n    \n\n    \n\n    <!--\n    \n    -->\n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n</dl>\n\n\n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n</dd>\n\n        \n            \n<dt>\n    \n        <h4 class=\"name\" id=\"runDetector\">\n            <span class=\"type-signature\"></span>runDetector<span class=\"signature\">()</span><span class=\"type-signature\"></span>\n            \n                <div class=\"container-source method\">\n                    <code>file</code>,\n                    <code>line 94</code>\n                </div>\n            \n        </h4>\n\n\n\n        \n    \n</dt>\n<dd>\n\n    \n    <div class=\"description\">\n        <p>Run selected detector</p>\n    </div>\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n\n<dl class=\"details\">\n\n    \n\n    \n\n    <!--\n    \n    -->\n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n</dl>\n\n\n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n</dd>\n\n        \n            \n<dt>\n    \n        <h4 class=\"name\" id=\"setDetector\">\n            <span class=\"type-signature\"></span>setDetector<span class=\"signature\">(context)</span><span class=\"type-signature\"></span>\n            \n                <div class=\"container-source method\">\n                    <code>file</code>,\n                    <code>line 60</code>\n                </div>\n            \n        </h4>\n\n\n\n        \n    \n</dt>\n<dd>\n\n    \n    <div class=\"description\">\n        <p>Set os by Detector</p>\n    </div>\n    \n\n    \n\n    \n\n    \n\n    \n    <div class=\"container-params\">\n        <div class=\"params\">\n\n<table class=\"params\">\n    <thead>\n    <tr>\n        \n        <th>Name</th>\n        \n\n        <th>Type</th>\n\n        \n\n        \n\n        <th class=\"last\">Description</th>\n    </tr>\n    </thead>\n\n    <tbody>\n    \n\n        <tr>\n            \n                <td class=\"name first\"><code>context</code></td>\n            \n\n            <td class=\"type\">\n            \n                \n<span class=\"param-type\">object</span>\n\n\n            \n            </td>\n\n            \n\n            \n\n            <td class=\"description last\"><p>The options</p></td>\n        </tr>\n\n    \n    </tbody>\n</table></div>\n    </div>\n    \n\n    \n\n    \n\n\n<dl class=\"details\">\n\n    \n\n    \n\n    <!--\n    \n    -->\n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n</dl>\n\n\n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n</dd>\n\n        </dl>\n    </div>\n    \n\n    \n\n    \n</article>\n\n</section>\n\n\n\n</div>"