(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
ne.util.defineNamespace('ne.component.m.AppLoader', require('./src/js/appLoader'));

},{"./src/js/appLoader":3}],2:[function(require,module,exports){
/**
* @fileoverview The extractor and detector user agent by device info. 
* @dependency code-snippet.js, appLoader.js
* @author NHN Entertain ment. FE dev team.
*/

/**
 * @constructor
 */
var AgentDetector = ne.util.defineClass(/**@lends AgentDetector.prototype */{
    cache: {},
    /***************
     * RegExp processing start : original - 출처 mobile-detect.js @link [https://github.com/hgoebl/mobile-detect.js]
     ***************/
    /**
     * Each device info and os reg string
     */
    mobileRegText: {
        'phones': {
            'iPhone': '\\biPhone\\b|\\biPod\\b',
            'BlackBerry': 'BlackBerry|\\bBB10\\b|rim[0-9]+',
            'HTC': 'HTC|HTC.*(Sensation|Evo|Vision|Explorer|6800|8100|8900|A7272|S510e|C110e|Legend|Desire|T8282)|APX515CKT|Qtek9090|APA9292KT|HD_mini|Sensation.*Z710e|PG86100|Z715e|Desire.*(A8181|HD)|ADR6200|ADR6400L|ADR6425|001HT|Inspire 4G|Android.*\\bEVO\\b|T-Mobile G1|Z520m',
            'Nexus': 'Nexus One|Nexus S|Galaxy.*Nexus|Android.*Nexus.*Mobile|Nexus 4|Nexus 5|Nexus 6',
            'Dell': 'Dell.*Streak|Dell.*Aero|Dell.*Venue|DELL.*Venue Pro|Dell Flash|Dell Smoke|Dell Mini 3iX|XCD28|XCD35|\\b001DL\\b|\\b101DL\\b|\\bGS01\\b',
            'Motorola': 'Motorola|DROIDX|DROID BIONIC|\\bDroid\\b.*Build|Android.*Xoom|HRI39|MOT-|A1260|A1680|A555|A853|A855|A953|A955|A956|Motorola.*ELECTRIFY|Motorola.*i1|i867|i940|MB200|MB300|MB501|MB502|MB508|MB511|MB520|MB525|MB526|MB611|MB612|MB632|MB810|MB855|MB860|MB861|MB865|MB870|ME501|ME502|ME511|ME525|ME600|ME632|ME722|ME811|ME860|ME863|ME865|MT620|MT710|MT716|MT720|MT810|MT870|MT917|Motorola.*TITANIUM|WX435|WX445|XT300|XT301|XT311|XT316|XT317|XT319|XT320|XT390|XT502|XT530|XT531|XT532|XT535|XT603|XT610|XT611|XT615|XT681|XT701|XT702|XT711|XT720|XT800|XT806|XT860|XT862|XT875|XT882|XT883|XT894|XT901|XT907|XT909|XT910|XT912|XT928|XT926|XT915|XT919|XT925',
            'Samsung': 'Samsung|SGH-I337|BGT-S5230|GT-B2100|GT-B2700|GT-B2710|GT-B3210|GT-B3310|GT-B3410|GT-B3730|GT-B3740|GT-B5510|GT-B5512|GT-B5722|GT-B6520|GT-B7300|GT-B7320|GT-B7330|GT-B7350|GT-B7510|GT-B7722|GT-B7800|GT-C3010|GT-C3011|GT-C3060|GT-C3200|GT-C3212|GT-C3212I|GT-C3262|GT-C3222|GT-C3300|GT-C3300K|GT-C3303|GT-C3303K|GT-C3310|GT-C3322|GT-C3330|GT-C3350|GT-C3500|GT-C3510|GT-C3530|GT-C3630|GT-C3780|GT-C5010|GT-C5212|GT-C6620|GT-C6625|GT-C6712|GT-E1050|GT-E1070|GT-E1075|GT-E1080|GT-E1081|GT-E1085|GT-E1087|GT-E1100|GT-E1107|GT-E1110|GT-E1120|GT-E1125|GT-E1130|GT-E1160|GT-E1170|GT-E1175|GT-E1180|GT-E1182|GT-E1200|GT-E1210|GT-E1225|GT-E1230|GT-E1390|GT-E2100|GT-E2120|GT-E2121|GT-E2152|GT-E2220|GT-E2222|GT-E2230|GT-E2232|GT-E2250|GT-E2370|GT-E2550|GT-E2652|GT-E3210|GT-E3213|GT-I5500|GT-I5503|GT-I5700|GT-I5800|GT-I5801|GT-I6410|GT-I6420|GT-I7110|GT-I7410|GT-I7500|GT-I8000|GT-I8150|GT-I8160|GT-I8190|GT-I8320|GT-I8330|GT-I8350|GT-I8530|GT-I8700|GT-I8703|GT-I8910|GT-I9000|GT-I9001|GT-I9003|GT-I9010|GT-I9020|GT-I9023|GT-I9070|GT-I9082|GT-I9100|GT-I9103|GT-I9220|GT-I9250|GT-I9300|GT-I9305|GT-I9500|GT-I9505|GT-M3510|GT-M5650|GT-M7500|GT-M7600|GT-M7603|GT-M8800|GT-M8910|GT-N7000|GT-S3110|GT-S3310|GT-S3350|GT-S3353|GT-S3370|GT-S3650|GT-S3653|GT-S3770|GT-S3850|GT-S5210|GT-S5220|GT-S5229|GT-S5230|GT-S5233|GT-S5250|GT-S5253|GT-S5260|GT-S5263|GT-S5270|GT-S5300|GT-S5330|GT-S5350|GT-S5360|GT-S5363|GT-S5369|GT-S5380|GT-S5380D|GT-S5560|GT-S5570|GT-S5600|GT-S5603|GT-S5610|GT-S5620|GT-S5660|GT-S5670|GT-S5690|GT-S5750|GT-S5780|GT-S5830|GT-S5839|GT-S6102|GT-S6500|GT-S7070|GT-S7200|GT-S7220|GT-S7230|GT-S7233|GT-S7250|GT-S7500|GT-S7530|GT-S7550|GT-S7562|GT-S7710|GT-S8000|GT-S8003|GT-S8500|GT-S8530|GT-S8600|SCH-A310|SCH-A530|SCH-A570|SCH-A610|SCH-A630|SCH-A650|SCH-A790|SCH-A795|SCH-A850|SCH-A870|SCH-A890|SCH-A930|SCH-A950|SCH-A970|SCH-A990|SCH-I100|SCH-I110|SCH-I400|SCH-I405|SCH-I500|SCH-I510|SCH-I515|SCH-I600|SCH-I730|SCH-I760|SCH-I770|SCH-I830|SCH-I910|SCH-I920|SCH-I959|SCH-LC11|SCH-N150|SCH-N300|SCH-R100|SCH-R300|SCH-R351|SCH-R400|SCH-R410|SCH-T300|SCH-U310|SCH-U320|SCH-U350|SCH-U360|SCH-U365|SCH-U370|SCH-U380|SCH-U410|SCH-U430|SCH-U450|SCH-U460|SCH-U470|SCH-U490|SCH-U540|SCH-U550|SCH-U620|SCH-U640|SCH-U650|SCH-U660|SCH-U700|SCH-U740|SCH-U750|SCH-U810|SCH-U820|SCH-U900|SCH-U940|SCH-U960|SCS-26UC|SGH-A107|SGH-A117|SGH-A127|SGH-A137|SGH-A157|SGH-A167|SGH-A177|SGH-A187|SGH-A197|SGH-A227|SGH-A237|SGH-A257|SGH-A437|SGH-A517|SGH-A597|SGH-A637|SGH-A657|SGH-A667|SGH-A687|SGH-A697|SGH-A707|SGH-A717|SGH-A727|SGH-A737|SGH-A747|SGH-A767|SGH-A777|SGH-A797|SGH-A817|SGH-A827|SGH-A837|SGH-A847|SGH-A867|SGH-A877|SGH-A887|SGH-A897|SGH-A927|SGH-B100|SGH-B130|SGH-B200|SGH-B220|SGH-C100|SGH-C110|SGH-C120|SGH-C130|SGH-C140|SGH-C160|SGH-C170|SGH-C180|SGH-C200|SGH-C207|SGH-C210|SGH-C225|SGH-C230|SGH-C417|SGH-C450|SGH-D307|SGH-D347|SGH-D357|SGH-D407|SGH-D415|SGH-D780|SGH-D807|SGH-D980|SGH-E105|SGH-E200|SGH-E315|SGH-E316|SGH-E317|SGH-E335|SGH-E590|SGH-E635|SGH-E715|SGH-E890|SGH-F300|SGH-F480|SGH-I200|SGH-I300|SGH-I320|SGH-I550|SGH-I577|SGH-I600|SGH-I607|SGH-I617|SGH-I627|SGH-I637|SGH-I677|SGH-I700|SGH-I717|SGH-I727|SGH-i747M|SGH-I777|SGH-I780|SGH-I827|SGH-I847|SGH-I857|SGH-I896|SGH-I897|SGH-I900|SGH-I907|SGH-I917|SGH-I927|SGH-I937|SGH-I997|SGH-J150|SGH-J200|SGH-L170|SGH-L700|SGH-M110|SGH-M150|SGH-M200|SGH-N105|SGH-N500|SGH-N600|SGH-N620|SGH-N625|SGH-N700|SGH-N710|SGH-P107|SGH-P207|SGH-P300|SGH-P310|SGH-P520|SGH-P735|SGH-P777|SGH-Q105|SGH-R210|SGH-R220|SGH-R225|SGH-S105|SGH-S307|SGH-T109|SGH-T119|SGH-T139|SGH-T209|SGH-T219|SGH-T229|SGH-T239|SGH-T249|SGH-T259|SGH-T309|SGH-T319|SGH-T329|SGH-T339|SGH-T349|SGH-T359|SGH-T369|SGH-T379|SGH-T409|SGH-T429|SGH-T439|SGH-T459|SGH-T469|SGH-T479|SGH-T499|SGH-T509|SGH-T519|SGH-T539|SGH-T559|SGH-T589|SGH-T609|SGH-T619|SGH-T629|SGH-T639|SGH-T659|SGH-T669|SGH-T679|SGH-T709|SGH-T719|SGH-T729|SGH-T739|SGH-T746|SGH-T749|SGH-T759|SGH-T769|SGH-T809|SGH-T819|SGH-T839|SGH-T919|SGH-T929|SGH-T939|SGH-T959|SGH-T989|SGH-U100|SGH-U200|SGH-U800|SGH-V205|SGH-V206|SGH-X100|SGH-X105|SGH-X120|SGH-X140|SGH-X426|SGH-X427|SGH-X475|SGH-X495|SGH-X497|SGH-X507|SGH-X600|SGH-X610|SGH-X620|SGH-X630|SGH-X700|SGH-X820|SGH-X890|SGH-Z130|SGH-Z150|SGH-Z170|SGH-ZX10|SGH-ZX20|SHW-M110|SPH-A120|SPH-A400|SPH-A420|SPH-A460|SPH-A500|SPH-A560|SPH-A600|SPH-A620|SPH-A660|SPH-A700|SPH-A740|SPH-A760|SPH-A790|SPH-A800|SPH-A820|SPH-A840|SPH-A880|SPH-A900|SPH-A940|SPH-A960|SPH-D600|SPH-D700|SPH-D710|SPH-D720|SPH-I300|SPH-I325|SPH-I330|SPH-I350|SPH-I500|SPH-I600|SPH-I700|SPH-L700|SPH-M100|SPH-M220|SPH-M240|SPH-M300|SPH-M305|SPH-M320|SPH-M330|SPH-M350|SPH-M360|SPH-M370|SPH-M380|SPH-M510|SPH-M540|SPH-M550|SPH-M560|SPH-M570|SPH-M580|SPH-M610|SPH-M620|SPH-M630|SPH-M800|SPH-M810|SPH-M850|SPH-M900|SPH-M910|SPH-M920|SPH-M930|SPH-N100|SPH-N200|SPH-N240|SPH-N300|SPH-N400|SPH-Z400|SWC-E100|SCH-i909|GT-N7100|GT-N7105|SCH-I535|SM-N900A|SGH-I317|SGH-T999L|GT-S5360B|GT-I8262|GT-S6802|GT-S6312|GT-S6310|GT-S5312|GT-S5310|GT-I9105|GT-I8510|GT-S6790N|SM-G7105|SM-N9005|GT-S5301|GT-I9295|GT-I9195|SM-C101|GT-S7392|GT-S7560|GT-B7610|GT-I5510|GT-S7582|GT-S7530E|GT-I8750|SM-G9006V|SM-G9008V|SM-G9009D|SM-G900A|SM-G900D|SM-G900F|SM-G900H|SM-G900I|SM-G900J|SM-G900K|SM-G900L|SM-G900M|SM-G900P|SM-G900R4|SM-G900S|SM-G900T|SM-G900V|SM-G900W8',
            'LG': '\\bLG\\b;|LG[- ]?(C800|C900|E400|E610|E900|E-900|F160|F180K|F180L|F180S|730|855|L160|LS740|LS840|LS970|LU6200|MS690|MS695|MS770|MS840|MS870|MS910|P500|P700|P705|VM696|AS680|AS695|AX840|C729|E970|GS505|272|C395|E739BK|E960|L55C|L75C|LS696|LS860|P769BK|P350|P500|P509|P870|UN272|US730|VS840|VS950|LN272|LN510|LS670|LS855|LW690|MN270|MN510|P509|P769|P930|UN200|UN270|UN510|UN610|US670|US740|US760|UX265|UX840|VN271|VN530|VS660|VS700|VS740|VS750|VS910|VS920|VS930|VX9200|VX11000|AX840A|LW770|P506|P925|P999|E612|D955|D802)',
            'Sony': 'SonyST|SonyLT|SonyEricsson|SonyEricssonLT15iv|LT18i|E10i|LT28h|LT26w|SonyEricssonMT27i|C5303|C6902|C6903|C6906|C6943|D2533',
            'Asus': 'Asus.*Galaxy|PadFone.*Mobile',
            'Micromax': 'Micromax.*\\b(A210|A92|A88|A72|A111|A110Q|A115|A116|A110|A90S|A26|A51|A35|A54|A25|A27|A89|A68|A65|A57|A90)\\b',
            'Palm': 'PalmSource|Palm',
            'Vertu': 'Vertu|Vertu.*Ltd|Vertu.*Ascent|Vertu.*Ayxta|Vertu.*Constellation(F|Quest)?|Vertu.*Monika|Vertu.*Signature',
            'Pantech': 'PANTECH|IM-A850S|IM-A840S|IM-A830L|IM-A830K|IM-A830S|IM-A820L|IM-A810K|IM-A810S|IM-A800S|IM-T100K|IM-A725L|IM-A780L|IM-A775C|IM-A770K|IM-A760S|IM-A750K|IM-A740S|IM-A730S|IM-A720L|IM-A710K|IM-A690L|IM-A690S|IM-A650S|IM-A630K|IM-A600S|VEGA PTL21|PT003|P8010|ADR910L|P6030|P6020|P9070|P4100|P9060|P5000|CDM8992|TXT8045|ADR8995|IS11PT|P2030|P6010|P8000|PT002|IS06|CDM8999|P9050|PT001|TXT8040|P2020|P9020|P2000|P7040|P7000|C790',
            'Fly': 'IQ230|IQ444|IQ450|IQ440|IQ442|IQ441|IQ245|IQ256|IQ236|IQ255|IQ235|IQ245|IQ275|IQ240|IQ285|IQ280|IQ270|IQ260|IQ250',
            'Wiko': 'KITE 4G|HIGHWAY|GETAWAY|STAIRWAY|DARKSIDE|DARKFULL|DARKNIGHT|DARKMOON|SLIDE|WAX 4G|RAINBOW|BLOOM|SUNSET|GOA|LENNY|BARRY|IGGY|OZZY|CINK FIVE|CINK PEAX|CINK PEAX 2|CINK SLIM|CINK SLIM 2|CINK +|CINK KING|CINK PEAX|CINK SLIM|SUBLIM',
            'iMobile': 'i-mobile (IQ|i-STYLE|idea|ZAA|Hitz)',
            'SimValley': '\\b(SP-80|XT-930|SX-340|XT-930|SX-310|SP-360|SP60|SPT-800|SP-120|SPT-800|SP-140|SPX-5|SPX-8|SP-100|SPX-8|SPX-12)\\b',
            'Wolfgang': 'AT-B24D|AT-AS50HD|AT-AS40W|AT-AS55HD|AT-AS45q2|AT-B26D|AT-AS50Q',
            'Alcatel': 'Alcatel',
            'Nintendo': 'Nintendo 3DS',
            'Amoi': 'Amoi',
            'INQ': 'INQ',
            'GenericPhone': 'Tapatalk|PDA;|SAGEM|\\bmmp\\b|pocket|\\bpsp\\b|symbian|Smartphone|smartfon|treo|up.browser|up.link|vodafone|\\bwap\\b|nokia|Series40|Series60|S60|SonyEricsson|N900|MAUI.*WAP.*Browser'
        },
        'oss': {
            'AndroidOS': 'Android',
            'BlackBerryOS': 'blackberry|\\bBB10\\b|rim tablet os',
            'PalmOS': 'PalmOS|avantgo|blazer|elaine|hiptop|palm|plucker|xiino',
            'SymbianOS': 'Symbian|SymbOS|Series60|Series40|SYB-[0-9]+|\\bS60\\b',
            'WindowsMobileOS': 'Windows CE.*(PPC|Smartphone|Mobile|[0-9]{3}x[0-9]{3})|Window Mobile|Windows Phone [0-9.]+|WCE;',
            'WindowsPhoneOS': 'Windows Phone 8.0|Windows Phone OS|XBLWP7|ZuneWP7|Windows NT 6.[23]; ARM;',
            'iOS': '\\biPhone.*Mobile|\\biPod|\\biPad',
            'MeeGoOS': 'MeeGo',
            'MaemoOS': 'Maemo',
            'JavaOS': 'J2ME\/|\\bMIDP\\b|\\bCLDC\\b',
            'webOS': 'webOS|hpwOS',
            'badaOS': '\\bBada\\b',
            'BREWOS': 'BREW'
        },
        'uas': {
            'Chrome': '\\bCrMo\\b|CriOS|Android.*Chrome\/[.0-9]* (Mobile)?',
            'Dolfin': '\\bDolfin\\b',
            'Opera': 'Opera.*Mini|Opera.*Mobi|Android.*Opera|Mobile.*OPR\/[0-9.]+|Coast\/[0-9.]+',
            'Skyfire': 'Skyfire',
            'IE': 'IEMobile|MSIEMobile',
            'Firefox': 'fennec|firefox.*maemo|(Mobile|Tablet).*Firefox|Firefox.*Mobile',
            'Bolt': 'bolt',
            'TeaShark': 'teashark',
            'Blazer': 'Blazer',
            'Safari': 'Version.*Mobile.*Safari|Safari.*Mobile|MobileSafari',
            'Tizen': 'Tizen',
            'UCBrowser': 'UC.*Browser|UCWEB',
            'baiduboxapp': 'baiduboxapp',
            'baidubrowser': 'baidubrowser',
            'DiigoBrowser': 'DiigoBrowser',
            'Puffin': 'Puffin',
            'Mercury': '\\bMercury\\b',
            'ObigoBrowser': 'Obigo',
            'NetFront': 'NF-Browser',
            'GenericBrowser': 'NokiaBrowser|OviBrowser|OneBrowser|TwonkyBeamBrowser|SEMC.*Browser|FlyFlow|Minimo|NetFront|Novarra-Vision|MQQBrowser|MicroMessenger'
        },
        'props': {
            'Mobile': 'Mobile\/[VER]',
            'Build': 'Build\/[VER]',
            'Version': 'Version\/[VER]',
            'VendorID': 'VendorID\/[VER]',
            'iPad': 'iPad.*CPU[a-z ]+[VER]',
            'iPhone': 'iPhone.*CPU[a-z ]+[VER]',
            'iPod': 'iPod.*CPU[a-z ]+[VER]',
            'Kindle': 'Kindle\/[VER]',
            'Chrome': [
                'Chrome\/[VER]',
                'CriOS\/[VER]',
                'CrMo\/[VER]'
            ],
            'Coast': [
                'Coast\/[VER]'
            ],
            'Dolfin': 'Dolfin\/[VER]',
            'Firefox': 'Firefox\/[VER]',
            'Fennec': 'Fennec\/[VER]',
            'IE': [
                'IEMobile\/[VER];',
                'IEMobile [VER]',
                'MSIE [VER];'
            ],
            'NetFront': 'NetFront\/[VER]',
            'NokiaBrowser': 'NokiaBrowser\/[VER]',
            'Opera': [
                ' OPR\/[VER]',
                'Opera Mini\/[VER]',
                'Version\/[VER]'
            ],
            'Opera Mini': 'Opera Mini\/[VER]',
            'Opera Mobi': 'Version\/[VER]',
            'UC Browser': 'UC Browser[VER]',
            'MQQBrowser': 'MQQBrowser\/[VER]',
            'MicroMessenger': 'MicroMessenger\/[VER]',
            'baiduboxapp': 'baiduboxapp\/[VER]',
            'baidubrowser': 'baidubrowser\/[VER]',
            'Iron': 'Iron\/[VER]',
            'Safari': [
                'Version\/[VER]',
                'Safari\/[VER]'
            ],
            'Skyfire': 'Skyfire\/[VER]',
            'Tizen': 'Tizen\/[VER]',
            'Webkit': 'webkit[ \/][VER]',
            'Gecko': 'Gecko\/[VER]',
            'Trident': 'Trident\/[VER]',
            'Presto': 'Presto\/[VER]',
            'iOS': ' \\bi?OS\\b [VER][ ;]{1}',
            'Android': 'Android [VER]',
            'BlackBerry': [
                'BlackBerry[\\w]+\/[VER]',
                'BlackBerry.*Version\/[VER]',
                'Version\/[VER]'
            ],
            'BREW': 'BREW [VER]',
            'Java': 'Java\/[VER]',
            'Windows Phone OS': [
                'Windows Phone OS [VER]',
                'Windows Phone [VER]'
            ],
            'Windows Phone': 'Windows Phone [VER]',
            'Windows CE': 'Windows CE\/[VER]',
            'Windows NT': 'Windows NT [VER]',
            'Symbian': [
                'SymbianOS\/[VER]',
                'Symbian\/[VER]'
            ],
            'webOS': [
                'webOS\/[VER]',
                'hpwOS\/[VER];'
            ]
        }
    },

    /**
     * Browser userAgent
     */
    ua: window.navigator.userAgent,

    /**
     * Initialize
     */
    init: function() {
        this.convert();

        var rules = this.mobileRegText;
        rules.oss0 = {
            WindowsPhoneOS: rules.oss.WindowsPhoneOS,
            WindowsMobileOS: rules.oss.WindowsMobileOS
        };
        this.device =  this._findMatch(rules.phones, this.ua);
        this.ios = this.isIOS();
        this.android = this.isAndroid();
    },

    /**
     * Convert device, os, browser info to reg edit.
     */
    convert: function() {
        var rule,
            mobileDetectRules = this.mobileRegText;

        this._propConvert();

        for (rule in mobileDetectRules) {
            if(rule !== 'props') {
                this._convertToRegExp(mobileDetectRules[rule]);
            }
        }
    },

    /**
     * Convert property by each invironment
     * @private
     */
    _propConvert: function() {
        var key,
            values,
            value,
            i,
            len,
            verPos,
            hasOwnProp = Object.prototype.hasOwnProperty,
            rules = this.mobileRegText.props;

        for (key in rules) {
            if (hasOwnProp.call(rules, key)) {
                values = rules[key];
                if (!ne.util.isArray(values)) {
                    values = [values];
                }
                len = values.length;
                for (i = 0; i < len; ++i) {
                    value = values[i];
                    verPos = value.indexOf('[VER]');
                    if (verPos >= 0) {
                        value = value.substring(0, verPos) + '([\\w._\\+]+)' + value.substring(verPos + 5);
                    }
                    values[i] = new RegExp(value, 'i');
                }
                rules[key] = values;
            }
        }
    },

    /**
     * Get userAgent
     */
    userAgent: function() {
        if (ne.util.isUndefined(this.cache.userAgent)) {
            this.cache.userAgent = this._findMatch(this.mobileRegText.uas, this.ua);
        }
        return this.cache.userAgent;
    },

    /**
     * Conver to reg exp
     * @param object
     * @private
     */
    _convertToRegExp: function(object) {
        var hasOwnProp = Object.prototype.hasOwnProperty,
            key;
        for (key in object) {
            if (hasOwnProp.call(object, key)) {
                object[key] = new RegExp(object[key], 'i');
            }
        }
    },

    /**
     * Find OS
     * @returns {*}
     */
    getOS: function() {
        return this._findMatch(this.mobileRegText.oss0, this.ua) ||
            this._findMatch(this.mobileRegText.oss, this.ua);
    },

    /**
     * Find match useragent
     * @private
     */
    _findMatch: function(rules, userAgent) {
        var key,
            hasOwnProp = Object.prototype.hasOwnProperty;
        for (key in rules) {
            if (hasOwnProp.call(rules, key)) {
                if (rules[key].test(userAgent)) {
                    return key;
                }
            }
        }
        return null;
    },

    /**
     * Find version
     * @returns {*}
     */
    version: function(propertyName) {
        var version = this._getVersionStr(propertyName, this.ua);
        return version ? this._prepareVersionNo(version) : NaN;
    },
    
    /**
     * Check the version of the given property in the User-Agent.
     * @param {String} propertyName
     * @param {String} userAgent
     * @return {String} version or <tt>null</tt> if version not found
     * @private
     */
    _getVersionStr: function(propertyName, userAgent) {
        var props = this.mobileRegText.props,
            patterns,
            i,
            len,
            match,
            hasOwnProp = Object.prototype.hasOwnProperty;

        if (hasOwnProp.call(props, propertyName)) {
            patterns = props[propertyName];
            len = patterns.length;

            for (i = 0; i < len; ++i) {
                match = patterns[i].exec(userAgent);
                if (match !== null) {
                    return match[1];
                }
            }
        }
        return null;
    },

    /**
     * Prepare the version number.
     * @param {String} version
     * @return {Number} the version number as a floating number
     * @private
     */
    _prepareVersionNo: function(version) {
        var numbers;

        numbers = version.split(/[a-z._ \/\-]/i);
        if (numbers.length === 1) {
            version = numbers[0];
        }
        if (numbers.length > 1) {
            version = numbers[0] + '.';
            numbers.shift();
            version += numbers.join('');
        }
        return Number(version);
    },

    /**
     * Whether iOS or not
     * @returns {boolean}
     */
    isIOS: function() {
        return this.getOS() === 'iOS';
    },

    /**
     * Whether Android or not
     * @returns {boolean}
     */
    isAndroid: function() {
        return this.getOS() === 'AndroidOS';
    }
});

module.exports =  AgentDetector;

},{}],3:[function(require,module,exports){
/**
 * @fileoverview Load native app or move to install page
 * @dependency code-snippet.js, detectors.js, agentDetector.js
 * @author NHN Ent. FE dev team.<dl_javascript@nhnent.com>
 */

var AgentDetector = require('./agentDetector');
var Detector = require('./detectors');
var iOSDetector = require('./iosDetectors');
/**
 * @constructor
 * @class
 */
var AppLoader = ne.util.defineClass(/** @lends AppLoader.prototype */{

    /****************
     * member fields
     ****************/

    /**
     * browser, device detector
     */
    detector: null,
    /**
     * OS (android/ios/etc)
     */
    os: null,
    /**
     * default options to run exec
     */
    defaults: {
        name: '',
        ios: {
            scheme: '',
            url: ''
        },
        android: {
            scheme: ''
        }
    },

    /****************
     * member methods
     ****************/

    /**
     * Initialize
     */
    init: function() {
        var ad = this.agentDetector = new AgentDetector();
        this.ua = ad.userAgent();
        this.os = ad.getOS();
        this.version = ad.version(ad.ios ? ad.device : 'Android');
    },

    /**
     * Set os by Detector
     * @param {object} context The options
     */
    setDetector: function(context) {
        var self = this,
            isNotIntend = (this.isIntentLess() || ne.util.isExisty(context.useUrlScheme)),
            isIntend = ne.util.isExisty(context.intentURI),
            store = context.storeURL,
            baseDetect = Detector,
            iOSDetect = iOSDetector,
            ad = this.agentDetector;

        if (ad.android && this.version >= context.andVersion) { // Andriod
            if (isNotIntend && store) {
                this.detector = baseDetect.androidSchemeDetector;
            } else if (isIntend) {
                this.detector = baseDetect.androidIntendDetector;
            }
        } else if (ad.ios && store) {// IOS
            if(parseInt(this.version.major, 10) < 8) {
                this.detector = iOSDetect.iosOlderDetector;
            } else {
                this.detector = iOSDetect.iosRecentDetector;
            }
        } else { // ETC
            setTimeout(function () {
                self.detector = baseDetect.etcDetector;
                if (context.etcCallback) {
                    context.etcCallback();
                }
            }, 100);
        }
    },

    /**
     * Run selected detector 
     */
    runDetector: function(context) {
        if(this.detector && (this.detector.type !== Detector.etcDetector.type)) {
            this.detector.run(context);
        }
    },

    /**
     * Whether intent supported
     * @returns {boolean}
     */
    isIntentLess: function() {
        var intentlessBrowsers = [
            'firefox',
            'opr'
        ];
        var blackListRegexp = new RegExp(intentlessBrowsers.join('|'), 'i'),
            app = this.agentDetector;
        return blackListRegexp.test(app.ua);
    },

    /**
     * Get os
     * @returns {string}
     */
    getOS: function() {
        return this.agentDetector.getOS();
    },

    /**
     * Call app
     * @param options
     *
     * @example
     * var loader = new ne.component.AppLoader();
     * loader.exec({
     *      name: 'app', // application Name (ex. facebook, twitter, daum)
     *      ios: {
     *          scheme: 'fecheck://', // iphone app scheme
     *          url: 'itms-apps://itunes.apple.com/app/.....' // app store url
     *      },
     *      android: {
     *          scheme: 'intent://home#Intent;scheme=fecheck;package=com.fecheck;end' // android intent uri
     *      }
     *  });
     */
    exec: function(options) {
        options = ne.util.extend(this.defaults, options);
        var context = {
            appName: options.name,
            urlScheme: options.ios.scheme,
            storeURL: options.ios.url,
            intentURI: options.android.scheme,
            etcCallback: options.etcCallback,
            andVersion: options.android.version
        };
        this.setDetector(context);
        this.runDetector(context);
    }
});



},{"./agentDetector":2,"./detectors":4,"./iosDetectors":5}],4:[function(require,module,exports){
/**
 * @fileovrview Mixin modules
 * @dependency code-snippet.js, appLoader.js
 * @author NHN Ent. FE dev team.<dl_javascript@nhnent.com>
 */
/**
 * @namespace Detector
 */
var Detector = {
    /**
     * for timer
     */
    TIMEOUT: {
        IOS_SHORT: 1000,
        IOS_LONG: 1000 * 2,
        ANDROID: 100 * 3,
        INTERVAL: 100
    },
    
    /**
     * Call app by iframe
     * @param {string} urlScheme iframe url
     */
    runAppWithIframe: function (urlScheme) {
        var self = this,
            iframe;
        setTimeout(function () {
            iframe = self.getIframeMadeById('supportFrame');
            iframe.src = urlScheme;
        }, this.TIMEOUT.INTERVAL);
    },

    /**
     * Create iframe
     * @param {string} id iframe ID
     * @returns {HTMLElement}
     */
    getIframeMadeById: function (id) {
        var iframe = document.createElement('iframe');
        ne.util.extend(iframe, {
            id: id,
            frameborder: '0',
            width: '0',
            height: '0'
        });
        iframe.style.display = 'none';
        document.body.appendChild(iframe);
        return iframe;
    },

    /**
     * Defer call callback
     * @param {string} time A delay time
     * @param {string} url A url to request
     * @param {function} callback A callback
     * @returns {number}
     */
    deferCallback: function (url, callback, time) {
        var clickedAt = new Date().getTime(),
            now,
            self = this;

        return setTimeout(function () {
            now = new Date().getTime();
            if (self.isPageVisibility() && now - clickedAt < time + self.TIMEOUT.INTERVAL) {
                callback(url);
            }
        }, time);
    },

    /**
     * check a webpage is visible or in focus
     * @returns {boolean}
     */
    isPageVisibility: function () {
        if (ne.util.isExisty(document.hidden)) {
            return !document.hidden;
        }
        if (ne.util.isExisty(document.webkitHidden)) {
            return !document.webkitHidden;
        }
        return true;
    }
};

/****************
 * Android series
 ****************/

/**
 * Android intent less
 * @namespace Detector.androidSchemeDetector
 */
Detector.androidSchemeDetector = ne.util.extend({
    /**
     * detector type
     * @memberof Detector.androidSchemeDetector
     */
    type: 'scheme',

    /**
     * Run detector 
     * @param {object} context
     * @memberof Detector.androidSchemeDetector
     */
    run: function(context) {
        var storeURL = context.storeURL;
        this.deferCallback(storeURL, context.notFoundCallback, this.TIMEOUT.ANDROID);
        this.runAppWithIframe(context.urlScheme);
    }
}, Detector);


/**
 * Android intent
 * @namespace Detector.androidIntendDetector
 */
Detector.androidIntendDetector = ne.util.extend({
    /**
     * detector type
     * @memberof Detector.androidIntendDetector
     */
    type: 'intend',

    /**
     * Run detector 
     * @param {object} context
     * @memberof Detector.androidIntendDetector
     */
    run: function(context) {
        setTimeout(function () {
            top.location.href = context.intentURI;
        }, this.TIMEOUT.INTERVAL);
    }
}, Detector);
module.exports = Detector;

},{}],5:[function(require,module,exports){
/**
 * @fileoverview iosDetector
 */

var Detector = require('./detectors');

/**
 * @namespace iOSDetector
 */
var iOSDetector = ne.util.extend({
    /**
     * detector type
     * @memberof iOSDetector
     */
    type: 'ios',

    /**
     * default app page move functino
     * @param storeURL
     * @memberof iOSDetector
     */
    moveTo: function(storeURL) {
        window.location.href = storeURL;
    },

    /**
     * visiblitychange event
     * @memberof iOSDetector
     */
    bindVisibilityChangeEvent: function() {
        var self = this;
        document.addEventListener('visibilitychange', function clear() {
            if (self.isPageVisibility()) {
                clearTimeout(self.tid);
                document.removeEventListener('visibilitychange', clear);
            }
        });
    },

    /**
     *  pagehide event 
     *  @memberof iOSDetector
     */
    bindPagehideEvent: function() {
        var self = this;
        window.addEventListener('pagehide', function clear() {
            if (self.isPageVisibility()) {
                clearTimeout(self.tid);
                window.removeEventListener('pagehide', clear);
            }
        });
    }
}, Detector);

/****************
 * iOS series
 ****************/

/**
 * ios old detector
 * @namespace iOSDetector.iosOlderDetector
 */
iOSDetector.iosOlderDetector = ne.util.extend({
    /**
     * detector Run
     * @param {object} context
     * @memberof iOSDetector.iosOlderDetector
     */
    run: function(context) {
        var storeURL = context.storeURL,
            callback = context.notFoundCallback || this.moveTo;
        this.tid = this.deferCallback(storeURL, callback, this.TIMEOUT.IOS_LONG);
        this.bindPagehideEvent();
        this.runAppWithIframe(context.urlScheme);
    }
}, iOSDetector);

/**
 * ios recent detector
 * @namespace iOSDetector.iosRecentDetector
 */
iOSDetector.iosRecentDetector = ne.util.extend({
    /**
     * detector run
     * @param {object} context
     * @memberof iOSDetector.iosRecentDetector
     */
    run: function(context) {
        var storeURL = context.storeURL,
            callback = context.notFoundCallback || this.moveTo;
        if (this.moveTo === callback) {
            this.tid = this.deferCallback(storeURL, callback, this.TIMEOUT.IOS_SHORT);
        } else {
            this.tid = this.deferCallback(storeURL, callback, this.TIMEOUT.IOS_LONG);
        }
        this.bindVisibilityChangeEvent();
        this.runAppWithIframe(context.urlScheme);
    }
}, iOSDetector);



},{"./detectors":4}]},{},[1])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJpbmRleC5qcyIsInNyYy9qcy9hZ2VudERldGVjdG9yLmpzIiwic3JjL2pzL2FwcExvYWRlci5qcyIsInNyYy9qcy9kZXRlY3RvcnMuanMiLCJzcmMvanMvaW9zRGV0ZWN0b3JzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTs7QUNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4SUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIm5lLnV0aWwuZGVmaW5lTmFtZXNwYWNlKCduZS5jb21wb25lbnQubS5BcHBMb2FkZXInLCByZXF1aXJlKCcuL3NyYy9qcy9hcHBMb2FkZXInKSk7XG4iLCIvKipcbiogQGZpbGVvdmVydmlldyBUaGUgZXh0cmFjdG9yIGFuZCBkZXRlY3RvciB1c2VyIGFnZW50IGJ5IGRldmljZSBpbmZvLiBcbiogQGRlcGVuZGVuY3kgY29kZS1zbmlwcGV0LmpzLCBhcHBMb2FkZXIuanNcbiogQGF1dGhvciBOSE4gRW50ZXJ0YWluIG1lbnQuIEZFIGRldiB0ZWFtLlxuKi9cblxuLyoqXG4gKiBAY29uc3RydWN0b3JcbiAqL1xudmFyIEFnZW50RGV0ZWN0b3IgPSBuZS51dGlsLmRlZmluZUNsYXNzKC8qKkBsZW5kcyBBZ2VudERldGVjdG9yLnByb3RvdHlwZSAqL3tcbiAgICBjYWNoZToge30sXG4gICAgLyoqKioqKioqKioqKioqKlxuICAgICAqIFJlZ0V4cCBwcm9jZXNzaW5nIHN0YXJ0IDogb3JpZ2luYWwgLSDstpzsspggbW9iaWxlLWRldGVjdC5qcyBAbGluayBbaHR0cHM6Ly9naXRodWIuY29tL2hnb2VibC9tb2JpbGUtZGV0ZWN0LmpzXVxuICAgICAqKioqKioqKioqKioqKiovXG4gICAgLyoqXG4gICAgICogRWFjaCBkZXZpY2UgaW5mbyBhbmQgb3MgcmVnIHN0cmluZ1xuICAgICAqL1xuICAgIG1vYmlsZVJlZ1RleHQ6IHtcbiAgICAgICAgJ3Bob25lcyc6IHtcbiAgICAgICAgICAgICdpUGhvbmUnOiAnXFxcXGJpUGhvbmVcXFxcYnxcXFxcYmlQb2RcXFxcYicsXG4gICAgICAgICAgICAnQmxhY2tCZXJyeSc6ICdCbGFja0JlcnJ5fFxcXFxiQkIxMFxcXFxifHJpbVswLTldKycsXG4gICAgICAgICAgICAnSFRDJzogJ0hUQ3xIVEMuKihTZW5zYXRpb258RXZvfFZpc2lvbnxFeHBsb3Jlcnw2ODAwfDgxMDB8ODkwMHxBNzI3MnxTNTEwZXxDMTEwZXxMZWdlbmR8RGVzaXJlfFQ4MjgyKXxBUFg1MTVDS1R8UXRlazkwOTB8QVBBOTI5MktUfEhEX21pbml8U2Vuc2F0aW9uLipaNzEwZXxQRzg2MTAwfFo3MTVlfERlc2lyZS4qKEE4MTgxfEhEKXxBRFI2MjAwfEFEUjY0MDBMfEFEUjY0MjV8MDAxSFR8SW5zcGlyZSA0R3xBbmRyb2lkLipcXFxcYkVWT1xcXFxifFQtTW9iaWxlIEcxfFo1MjBtJyxcbiAgICAgICAgICAgICdOZXh1cyc6ICdOZXh1cyBPbmV8TmV4dXMgU3xHYWxheHkuKk5leHVzfEFuZHJvaWQuKk5leHVzLipNb2JpbGV8TmV4dXMgNHxOZXh1cyA1fE5leHVzIDYnLFxuICAgICAgICAgICAgJ0RlbGwnOiAnRGVsbC4qU3RyZWFrfERlbGwuKkFlcm98RGVsbC4qVmVudWV8REVMTC4qVmVudWUgUHJvfERlbGwgRmxhc2h8RGVsbCBTbW9rZXxEZWxsIE1pbmkgM2lYfFhDRDI4fFhDRDM1fFxcXFxiMDAxRExcXFxcYnxcXFxcYjEwMURMXFxcXGJ8XFxcXGJHUzAxXFxcXGInLFxuICAgICAgICAgICAgJ01vdG9yb2xhJzogJ01vdG9yb2xhfERST0lEWHxEUk9JRCBCSU9OSUN8XFxcXGJEcm9pZFxcXFxiLipCdWlsZHxBbmRyb2lkLipYb29tfEhSSTM5fE1PVC18QTEyNjB8QTE2ODB8QTU1NXxBODUzfEE4NTV8QTk1M3xBOTU1fEE5NTZ8TW90b3JvbGEuKkVMRUNUUklGWXxNb3Rvcm9sYS4qaTF8aTg2N3xpOTQwfE1CMjAwfE1CMzAwfE1CNTAxfE1CNTAyfE1CNTA4fE1CNTExfE1CNTIwfE1CNTI1fE1CNTI2fE1CNjExfE1CNjEyfE1CNjMyfE1CODEwfE1CODU1fE1CODYwfE1CODYxfE1CODY1fE1CODcwfE1FNTAxfE1FNTAyfE1FNTExfE1FNTI1fE1FNjAwfE1FNjMyfE1FNzIyfE1FODExfE1FODYwfE1FODYzfE1FODY1fE1UNjIwfE1UNzEwfE1UNzE2fE1UNzIwfE1UODEwfE1UODcwfE1UOTE3fE1vdG9yb2xhLipUSVRBTklVTXxXWDQzNXxXWDQ0NXxYVDMwMHxYVDMwMXxYVDMxMXxYVDMxNnxYVDMxN3xYVDMxOXxYVDMyMHxYVDM5MHxYVDUwMnxYVDUzMHxYVDUzMXxYVDUzMnxYVDUzNXxYVDYwM3xYVDYxMHxYVDYxMXxYVDYxNXxYVDY4MXxYVDcwMXxYVDcwMnxYVDcxMXxYVDcyMHxYVDgwMHxYVDgwNnxYVDg2MHxYVDg2MnxYVDg3NXxYVDg4MnxYVDg4M3xYVDg5NHxYVDkwMXxYVDkwN3xYVDkwOXxYVDkxMHxYVDkxMnxYVDkyOHxYVDkyNnxYVDkxNXxYVDkxOXxYVDkyNScsXG4gICAgICAgICAgICAnU2Ftc3VuZyc6ICdTYW1zdW5nfFNHSC1JMzM3fEJHVC1TNTIzMHxHVC1CMjEwMHxHVC1CMjcwMHxHVC1CMjcxMHxHVC1CMzIxMHxHVC1CMzMxMHxHVC1CMzQxMHxHVC1CMzczMHxHVC1CMzc0MHxHVC1CNTUxMHxHVC1CNTUxMnxHVC1CNTcyMnxHVC1CNjUyMHxHVC1CNzMwMHxHVC1CNzMyMHxHVC1CNzMzMHxHVC1CNzM1MHxHVC1CNzUxMHxHVC1CNzcyMnxHVC1CNzgwMHxHVC1DMzAxMHxHVC1DMzAxMXxHVC1DMzA2MHxHVC1DMzIwMHxHVC1DMzIxMnxHVC1DMzIxMkl8R1QtQzMyNjJ8R1QtQzMyMjJ8R1QtQzMzMDB8R1QtQzMzMDBLfEdULUMzMzAzfEdULUMzMzAzS3xHVC1DMzMxMHxHVC1DMzMyMnxHVC1DMzMzMHxHVC1DMzM1MHxHVC1DMzUwMHxHVC1DMzUxMHxHVC1DMzUzMHxHVC1DMzYzMHxHVC1DMzc4MHxHVC1DNTAxMHxHVC1DNTIxMnxHVC1DNjYyMHxHVC1DNjYyNXxHVC1DNjcxMnxHVC1FMTA1MHxHVC1FMTA3MHxHVC1FMTA3NXxHVC1FMTA4MHxHVC1FMTA4MXxHVC1FMTA4NXxHVC1FMTA4N3xHVC1FMTEwMHxHVC1FMTEwN3xHVC1FMTExMHxHVC1FMTEyMHxHVC1FMTEyNXxHVC1FMTEzMHxHVC1FMTE2MHxHVC1FMTE3MHxHVC1FMTE3NXxHVC1FMTE4MHxHVC1FMTE4MnxHVC1FMTIwMHxHVC1FMTIxMHxHVC1FMTIyNXxHVC1FMTIzMHxHVC1FMTM5MHxHVC1FMjEwMHxHVC1FMjEyMHxHVC1FMjEyMXxHVC1FMjE1MnxHVC1FMjIyMHxHVC1FMjIyMnxHVC1FMjIzMHxHVC1FMjIzMnxHVC1FMjI1MHxHVC1FMjM3MHxHVC1FMjU1MHxHVC1FMjY1MnxHVC1FMzIxMHxHVC1FMzIxM3xHVC1JNTUwMHxHVC1JNTUwM3xHVC1JNTcwMHxHVC1JNTgwMHxHVC1JNTgwMXxHVC1JNjQxMHxHVC1JNjQyMHxHVC1JNzExMHxHVC1JNzQxMHxHVC1JNzUwMHxHVC1JODAwMHxHVC1JODE1MHxHVC1JODE2MHxHVC1JODE5MHxHVC1JODMyMHxHVC1JODMzMHxHVC1JODM1MHxHVC1JODUzMHxHVC1JODcwMHxHVC1JODcwM3xHVC1JODkxMHxHVC1JOTAwMHxHVC1JOTAwMXxHVC1JOTAwM3xHVC1JOTAxMHxHVC1JOTAyMHxHVC1JOTAyM3xHVC1JOTA3MHxHVC1JOTA4MnxHVC1JOTEwMHxHVC1JOTEwM3xHVC1JOTIyMHxHVC1JOTI1MHxHVC1JOTMwMHxHVC1JOTMwNXxHVC1JOTUwMHxHVC1JOTUwNXxHVC1NMzUxMHxHVC1NNTY1MHxHVC1NNzUwMHxHVC1NNzYwMHxHVC1NNzYwM3xHVC1NODgwMHxHVC1NODkxMHxHVC1ONzAwMHxHVC1TMzExMHxHVC1TMzMxMHxHVC1TMzM1MHxHVC1TMzM1M3xHVC1TMzM3MHxHVC1TMzY1MHxHVC1TMzY1M3xHVC1TMzc3MHxHVC1TMzg1MHxHVC1TNTIxMHxHVC1TNTIyMHxHVC1TNTIyOXxHVC1TNTIzMHxHVC1TNTIzM3xHVC1TNTI1MHxHVC1TNTI1M3xHVC1TNTI2MHxHVC1TNTI2M3xHVC1TNTI3MHxHVC1TNTMwMHxHVC1TNTMzMHxHVC1TNTM1MHxHVC1TNTM2MHxHVC1TNTM2M3xHVC1TNTM2OXxHVC1TNTM4MHxHVC1TNTM4MER8R1QtUzU1NjB8R1QtUzU1NzB8R1QtUzU2MDB8R1QtUzU2MDN8R1QtUzU2MTB8R1QtUzU2MjB8R1QtUzU2NjB8R1QtUzU2NzB8R1QtUzU2OTB8R1QtUzU3NTB8R1QtUzU3ODB8R1QtUzU4MzB8R1QtUzU4Mzl8R1QtUzYxMDJ8R1QtUzY1MDB8R1QtUzcwNzB8R1QtUzcyMDB8R1QtUzcyMjB8R1QtUzcyMzB8R1QtUzcyMzN8R1QtUzcyNTB8R1QtUzc1MDB8R1QtUzc1MzB8R1QtUzc1NTB8R1QtUzc1NjJ8R1QtUzc3MTB8R1QtUzgwMDB8R1QtUzgwMDN8R1QtUzg1MDB8R1QtUzg1MzB8R1QtUzg2MDB8U0NILUEzMTB8U0NILUE1MzB8U0NILUE1NzB8U0NILUE2MTB8U0NILUE2MzB8U0NILUE2NTB8U0NILUE3OTB8U0NILUE3OTV8U0NILUE4NTB8U0NILUE4NzB8U0NILUE4OTB8U0NILUE5MzB8U0NILUE5NTB8U0NILUE5NzB8U0NILUE5OTB8U0NILUkxMDB8U0NILUkxMTB8U0NILUk0MDB8U0NILUk0MDV8U0NILUk1MDB8U0NILUk1MTB8U0NILUk1MTV8U0NILUk2MDB8U0NILUk3MzB8U0NILUk3NjB8U0NILUk3NzB8U0NILUk4MzB8U0NILUk5MTB8U0NILUk5MjB8U0NILUk5NTl8U0NILUxDMTF8U0NILU4xNTB8U0NILU4zMDB8U0NILVIxMDB8U0NILVIzMDB8U0NILVIzNTF8U0NILVI0MDB8U0NILVI0MTB8U0NILVQzMDB8U0NILVUzMTB8U0NILVUzMjB8U0NILVUzNTB8U0NILVUzNjB8U0NILVUzNjV8U0NILVUzNzB8U0NILVUzODB8U0NILVU0MTB8U0NILVU0MzB8U0NILVU0NTB8U0NILVU0NjB8U0NILVU0NzB8U0NILVU0OTB8U0NILVU1NDB8U0NILVU1NTB8U0NILVU2MjB8U0NILVU2NDB8U0NILVU2NTB8U0NILVU2NjB8U0NILVU3MDB8U0NILVU3NDB8U0NILVU3NTB8U0NILVU4MTB8U0NILVU4MjB8U0NILVU5MDB8U0NILVU5NDB8U0NILVU5NjB8U0NTLTI2VUN8U0dILUExMDd8U0dILUExMTd8U0dILUExMjd8U0dILUExMzd8U0dILUExNTd8U0dILUExNjd8U0dILUExNzd8U0dILUExODd8U0dILUExOTd8U0dILUEyMjd8U0dILUEyMzd8U0dILUEyNTd8U0dILUE0Mzd8U0dILUE1MTd8U0dILUE1OTd8U0dILUE2Mzd8U0dILUE2NTd8U0dILUE2Njd8U0dILUE2ODd8U0dILUE2OTd8U0dILUE3MDd8U0dILUE3MTd8U0dILUE3Mjd8U0dILUE3Mzd8U0dILUE3NDd8U0dILUE3Njd8U0dILUE3Nzd8U0dILUE3OTd8U0dILUE4MTd8U0dILUE4Mjd8U0dILUE4Mzd8U0dILUE4NDd8U0dILUE4Njd8U0dILUE4Nzd8U0dILUE4ODd8U0dILUE4OTd8U0dILUE5Mjd8U0dILUIxMDB8U0dILUIxMzB8U0dILUIyMDB8U0dILUIyMjB8U0dILUMxMDB8U0dILUMxMTB8U0dILUMxMjB8U0dILUMxMzB8U0dILUMxNDB8U0dILUMxNjB8U0dILUMxNzB8U0dILUMxODB8U0dILUMyMDB8U0dILUMyMDd8U0dILUMyMTB8U0dILUMyMjV8U0dILUMyMzB8U0dILUM0MTd8U0dILUM0NTB8U0dILUQzMDd8U0dILUQzNDd8U0dILUQzNTd8U0dILUQ0MDd8U0dILUQ0MTV8U0dILUQ3ODB8U0dILUQ4MDd8U0dILUQ5ODB8U0dILUUxMDV8U0dILUUyMDB8U0dILUUzMTV8U0dILUUzMTZ8U0dILUUzMTd8U0dILUUzMzV8U0dILUU1OTB8U0dILUU2MzV8U0dILUU3MTV8U0dILUU4OTB8U0dILUYzMDB8U0dILUY0ODB8U0dILUkyMDB8U0dILUkzMDB8U0dILUkzMjB8U0dILUk1NTB8U0dILUk1Nzd8U0dILUk2MDB8U0dILUk2MDd8U0dILUk2MTd8U0dILUk2Mjd8U0dILUk2Mzd8U0dILUk2Nzd8U0dILUk3MDB8U0dILUk3MTd8U0dILUk3Mjd8U0dILWk3NDdNfFNHSC1JNzc3fFNHSC1JNzgwfFNHSC1JODI3fFNHSC1JODQ3fFNHSC1JODU3fFNHSC1JODk2fFNHSC1JODk3fFNHSC1JOTAwfFNHSC1JOTA3fFNHSC1JOTE3fFNHSC1JOTI3fFNHSC1JOTM3fFNHSC1JOTk3fFNHSC1KMTUwfFNHSC1KMjAwfFNHSC1MMTcwfFNHSC1MNzAwfFNHSC1NMTEwfFNHSC1NMTUwfFNHSC1NMjAwfFNHSC1OMTA1fFNHSC1ONTAwfFNHSC1ONjAwfFNHSC1ONjIwfFNHSC1ONjI1fFNHSC1ONzAwfFNHSC1ONzEwfFNHSC1QMTA3fFNHSC1QMjA3fFNHSC1QMzAwfFNHSC1QMzEwfFNHSC1QNTIwfFNHSC1QNzM1fFNHSC1QNzc3fFNHSC1RMTA1fFNHSC1SMjEwfFNHSC1SMjIwfFNHSC1SMjI1fFNHSC1TMTA1fFNHSC1TMzA3fFNHSC1UMTA5fFNHSC1UMTE5fFNHSC1UMTM5fFNHSC1UMjA5fFNHSC1UMjE5fFNHSC1UMjI5fFNHSC1UMjM5fFNHSC1UMjQ5fFNHSC1UMjU5fFNHSC1UMzA5fFNHSC1UMzE5fFNHSC1UMzI5fFNHSC1UMzM5fFNHSC1UMzQ5fFNHSC1UMzU5fFNHSC1UMzY5fFNHSC1UMzc5fFNHSC1UNDA5fFNHSC1UNDI5fFNHSC1UNDM5fFNHSC1UNDU5fFNHSC1UNDY5fFNHSC1UNDc5fFNHSC1UNDk5fFNHSC1UNTA5fFNHSC1UNTE5fFNHSC1UNTM5fFNHSC1UNTU5fFNHSC1UNTg5fFNHSC1UNjA5fFNHSC1UNjE5fFNHSC1UNjI5fFNHSC1UNjM5fFNHSC1UNjU5fFNHSC1UNjY5fFNHSC1UNjc5fFNHSC1UNzA5fFNHSC1UNzE5fFNHSC1UNzI5fFNHSC1UNzM5fFNHSC1UNzQ2fFNHSC1UNzQ5fFNHSC1UNzU5fFNHSC1UNzY5fFNHSC1UODA5fFNHSC1UODE5fFNHSC1UODM5fFNHSC1UOTE5fFNHSC1UOTI5fFNHSC1UOTM5fFNHSC1UOTU5fFNHSC1UOTg5fFNHSC1VMTAwfFNHSC1VMjAwfFNHSC1VODAwfFNHSC1WMjA1fFNHSC1WMjA2fFNHSC1YMTAwfFNHSC1YMTA1fFNHSC1YMTIwfFNHSC1YMTQwfFNHSC1YNDI2fFNHSC1YNDI3fFNHSC1YNDc1fFNHSC1YNDk1fFNHSC1YNDk3fFNHSC1YNTA3fFNHSC1YNjAwfFNHSC1YNjEwfFNHSC1YNjIwfFNHSC1YNjMwfFNHSC1YNzAwfFNHSC1YODIwfFNHSC1YODkwfFNHSC1aMTMwfFNHSC1aMTUwfFNHSC1aMTcwfFNHSC1aWDEwfFNHSC1aWDIwfFNIVy1NMTEwfFNQSC1BMTIwfFNQSC1BNDAwfFNQSC1BNDIwfFNQSC1BNDYwfFNQSC1BNTAwfFNQSC1BNTYwfFNQSC1BNjAwfFNQSC1BNjIwfFNQSC1BNjYwfFNQSC1BNzAwfFNQSC1BNzQwfFNQSC1BNzYwfFNQSC1BNzkwfFNQSC1BODAwfFNQSC1BODIwfFNQSC1BODQwfFNQSC1BODgwfFNQSC1BOTAwfFNQSC1BOTQwfFNQSC1BOTYwfFNQSC1ENjAwfFNQSC1ENzAwfFNQSC1ENzEwfFNQSC1ENzIwfFNQSC1JMzAwfFNQSC1JMzI1fFNQSC1JMzMwfFNQSC1JMzUwfFNQSC1JNTAwfFNQSC1JNjAwfFNQSC1JNzAwfFNQSC1MNzAwfFNQSC1NMTAwfFNQSC1NMjIwfFNQSC1NMjQwfFNQSC1NMzAwfFNQSC1NMzA1fFNQSC1NMzIwfFNQSC1NMzMwfFNQSC1NMzUwfFNQSC1NMzYwfFNQSC1NMzcwfFNQSC1NMzgwfFNQSC1NNTEwfFNQSC1NNTQwfFNQSC1NNTUwfFNQSC1NNTYwfFNQSC1NNTcwfFNQSC1NNTgwfFNQSC1NNjEwfFNQSC1NNjIwfFNQSC1NNjMwfFNQSC1NODAwfFNQSC1NODEwfFNQSC1NODUwfFNQSC1NOTAwfFNQSC1NOTEwfFNQSC1NOTIwfFNQSC1NOTMwfFNQSC1OMTAwfFNQSC1OMjAwfFNQSC1OMjQwfFNQSC1OMzAwfFNQSC1ONDAwfFNQSC1aNDAwfFNXQy1FMTAwfFNDSC1pOTA5fEdULU43MTAwfEdULU43MTA1fFNDSC1JNTM1fFNNLU45MDBBfFNHSC1JMzE3fFNHSC1UOTk5THxHVC1TNTM2MEJ8R1QtSTgyNjJ8R1QtUzY4MDJ8R1QtUzYzMTJ8R1QtUzYzMTB8R1QtUzUzMTJ8R1QtUzUzMTB8R1QtSTkxMDV8R1QtSTg1MTB8R1QtUzY3OTBOfFNNLUc3MTA1fFNNLU45MDA1fEdULVM1MzAxfEdULUk5Mjk1fEdULUk5MTk1fFNNLUMxMDF8R1QtUzczOTJ8R1QtUzc1NjB8R1QtQjc2MTB8R1QtSTU1MTB8R1QtUzc1ODJ8R1QtUzc1MzBFfEdULUk4NzUwfFNNLUc5MDA2VnxTTS1HOTAwOFZ8U00tRzkwMDlEfFNNLUc5MDBBfFNNLUc5MDBEfFNNLUc5MDBGfFNNLUc5MDBIfFNNLUc5MDBJfFNNLUc5MDBKfFNNLUc5MDBLfFNNLUc5MDBMfFNNLUc5MDBNfFNNLUc5MDBQfFNNLUc5MDBSNHxTTS1HOTAwU3xTTS1HOTAwVHxTTS1HOTAwVnxTTS1HOTAwVzgnLFxuICAgICAgICAgICAgJ0xHJzogJ1xcXFxiTEdcXFxcYjt8TEdbLSBdPyhDODAwfEM5MDB8RTQwMHxFNjEwfEU5MDB8RS05MDB8RjE2MHxGMTgwS3xGMTgwTHxGMTgwU3w3MzB8ODU1fEwxNjB8TFM3NDB8TFM4NDB8TFM5NzB8TFU2MjAwfE1TNjkwfE1TNjk1fE1TNzcwfE1TODQwfE1TODcwfE1TOTEwfFA1MDB8UDcwMHxQNzA1fFZNNjk2fEFTNjgwfEFTNjk1fEFYODQwfEM3Mjl8RTk3MHxHUzUwNXwyNzJ8QzM5NXxFNzM5Qkt8RTk2MHxMNTVDfEw3NUN8TFM2OTZ8TFM4NjB8UDc2OUJLfFAzNTB8UDUwMHxQNTA5fFA4NzB8VU4yNzJ8VVM3MzB8VlM4NDB8VlM5NTB8TE4yNzJ8TE41MTB8TFM2NzB8TFM4NTV8TFc2OTB8TU4yNzB8TU41MTB8UDUwOXxQNzY5fFA5MzB8VU4yMDB8VU4yNzB8VU41MTB8VU42MTB8VVM2NzB8VVM3NDB8VVM3NjB8VVgyNjV8VVg4NDB8Vk4yNzF8Vk41MzB8VlM2NjB8VlM3MDB8VlM3NDB8VlM3NTB8VlM5MTB8VlM5MjB8VlM5MzB8Vlg5MjAwfFZYMTEwMDB8QVg4NDBBfExXNzcwfFA1MDZ8UDkyNXxQOTk5fEU2MTJ8RDk1NXxEODAyKScsXG4gICAgICAgICAgICAnU29ueSc6ICdTb255U1R8U29ueUxUfFNvbnlFcmljc3NvbnxTb255RXJpY3Nzb25MVDE1aXZ8TFQxOGl8RTEwaXxMVDI4aHxMVDI2d3xTb255RXJpY3Nzb25NVDI3aXxDNTMwM3xDNjkwMnxDNjkwM3xDNjkwNnxDNjk0M3xEMjUzMycsXG4gICAgICAgICAgICAnQXN1cyc6ICdBc3VzLipHYWxheHl8UGFkRm9uZS4qTW9iaWxlJyxcbiAgICAgICAgICAgICdNaWNyb21heCc6ICdNaWNyb21heC4qXFxcXGIoQTIxMHxBOTJ8QTg4fEE3MnxBMTExfEExMTBRfEExMTV8QTExNnxBMTEwfEE5MFN8QTI2fEE1MXxBMzV8QTU0fEEyNXxBMjd8QTg5fEE2OHxBNjV8QTU3fEE5MClcXFxcYicsXG4gICAgICAgICAgICAnUGFsbSc6ICdQYWxtU291cmNlfFBhbG0nLFxuICAgICAgICAgICAgJ1ZlcnR1JzogJ1ZlcnR1fFZlcnR1LipMdGR8VmVydHUuKkFzY2VudHxWZXJ0dS4qQXl4dGF8VmVydHUuKkNvbnN0ZWxsYXRpb24oRnxRdWVzdCk/fFZlcnR1LipNb25pa2F8VmVydHUuKlNpZ25hdHVyZScsXG4gICAgICAgICAgICAnUGFudGVjaCc6ICdQQU5URUNIfElNLUE4NTBTfElNLUE4NDBTfElNLUE4MzBMfElNLUE4MzBLfElNLUE4MzBTfElNLUE4MjBMfElNLUE4MTBLfElNLUE4MTBTfElNLUE4MDBTfElNLVQxMDBLfElNLUE3MjVMfElNLUE3ODBMfElNLUE3NzVDfElNLUE3NzBLfElNLUE3NjBTfElNLUE3NTBLfElNLUE3NDBTfElNLUE3MzBTfElNLUE3MjBMfElNLUE3MTBLfElNLUE2OTBMfElNLUE2OTBTfElNLUE2NTBTfElNLUE2MzBLfElNLUE2MDBTfFZFR0EgUFRMMjF8UFQwMDN8UDgwMTB8QURSOTEwTHxQNjAzMHxQNjAyMHxQOTA3MHxQNDEwMHxQOTA2MHxQNTAwMHxDRE04OTkyfFRYVDgwNDV8QURSODk5NXxJUzExUFR8UDIwMzB8UDYwMTB8UDgwMDB8UFQwMDJ8SVMwNnxDRE04OTk5fFA5MDUwfFBUMDAxfFRYVDgwNDB8UDIwMjB8UDkwMjB8UDIwMDB8UDcwNDB8UDcwMDB8Qzc5MCcsXG4gICAgICAgICAgICAnRmx5JzogJ0lRMjMwfElRNDQ0fElRNDUwfElRNDQwfElRNDQyfElRNDQxfElRMjQ1fElRMjU2fElRMjM2fElRMjU1fElRMjM1fElRMjQ1fElRMjc1fElRMjQwfElRMjg1fElRMjgwfElRMjcwfElRMjYwfElRMjUwJyxcbiAgICAgICAgICAgICdXaWtvJzogJ0tJVEUgNEd8SElHSFdBWXxHRVRBV0FZfFNUQUlSV0FZfERBUktTSURFfERBUktGVUxMfERBUktOSUdIVHxEQVJLTU9PTnxTTElERXxXQVggNEd8UkFJTkJPV3xCTE9PTXxTVU5TRVR8R09BfExFTk5ZfEJBUlJZfElHR1l8T1paWXxDSU5LIEZJVkV8Q0lOSyBQRUFYfENJTksgUEVBWCAyfENJTksgU0xJTXxDSU5LIFNMSU0gMnxDSU5LICt8Q0lOSyBLSU5HfENJTksgUEVBWHxDSU5LIFNMSU18U1VCTElNJyxcbiAgICAgICAgICAgICdpTW9iaWxlJzogJ2ktbW9iaWxlIChJUXxpLVNUWUxFfGlkZWF8WkFBfEhpdHopJyxcbiAgICAgICAgICAgICdTaW1WYWxsZXknOiAnXFxcXGIoU1AtODB8WFQtOTMwfFNYLTM0MHxYVC05MzB8U1gtMzEwfFNQLTM2MHxTUDYwfFNQVC04MDB8U1AtMTIwfFNQVC04MDB8U1AtMTQwfFNQWC01fFNQWC04fFNQLTEwMHxTUFgtOHxTUFgtMTIpXFxcXGInLFxuICAgICAgICAgICAgJ1dvbGZnYW5nJzogJ0FULUIyNER8QVQtQVM1MEhEfEFULUFTNDBXfEFULUFTNTVIRHxBVC1BUzQ1cTJ8QVQtQjI2RHxBVC1BUzUwUScsXG4gICAgICAgICAgICAnQWxjYXRlbCc6ICdBbGNhdGVsJyxcbiAgICAgICAgICAgICdOaW50ZW5kbyc6ICdOaW50ZW5kbyAzRFMnLFxuICAgICAgICAgICAgJ0Ftb2knOiAnQW1vaScsXG4gICAgICAgICAgICAnSU5RJzogJ0lOUScsXG4gICAgICAgICAgICAnR2VuZXJpY1Bob25lJzogJ1RhcGF0YWxrfFBEQTt8U0FHRU18XFxcXGJtbXBcXFxcYnxwb2NrZXR8XFxcXGJwc3BcXFxcYnxzeW1iaWFufFNtYXJ0cGhvbmV8c21hcnRmb258dHJlb3x1cC5icm93c2VyfHVwLmxpbmt8dm9kYWZvbmV8XFxcXGJ3YXBcXFxcYnxub2tpYXxTZXJpZXM0MHxTZXJpZXM2MHxTNjB8U29ueUVyaWNzc29ufE45MDB8TUFVSS4qV0FQLipCcm93c2VyJ1xuICAgICAgICB9LFxuICAgICAgICAnb3NzJzoge1xuICAgICAgICAgICAgJ0FuZHJvaWRPUyc6ICdBbmRyb2lkJyxcbiAgICAgICAgICAgICdCbGFja0JlcnJ5T1MnOiAnYmxhY2tiZXJyeXxcXFxcYkJCMTBcXFxcYnxyaW0gdGFibGV0IG9zJyxcbiAgICAgICAgICAgICdQYWxtT1MnOiAnUGFsbU9TfGF2YW50Z298YmxhemVyfGVsYWluZXxoaXB0b3B8cGFsbXxwbHVja2VyfHhpaW5vJyxcbiAgICAgICAgICAgICdTeW1iaWFuT1MnOiAnU3ltYmlhbnxTeW1iT1N8U2VyaWVzNjB8U2VyaWVzNDB8U1lCLVswLTldK3xcXFxcYlM2MFxcXFxiJyxcbiAgICAgICAgICAgICdXaW5kb3dzTW9iaWxlT1MnOiAnV2luZG93cyBDRS4qKFBQQ3xTbWFydHBob25lfE1vYmlsZXxbMC05XXszfXhbMC05XXszfSl8V2luZG93IE1vYmlsZXxXaW5kb3dzIFBob25lIFswLTkuXSt8V0NFOycsXG4gICAgICAgICAgICAnV2luZG93c1Bob25lT1MnOiAnV2luZG93cyBQaG9uZSA4LjB8V2luZG93cyBQaG9uZSBPU3xYQkxXUDd8WnVuZVdQN3xXaW5kb3dzIE5UIDYuWzIzXTsgQVJNOycsXG4gICAgICAgICAgICAnaU9TJzogJ1xcXFxiaVBob25lLipNb2JpbGV8XFxcXGJpUG9kfFxcXFxiaVBhZCcsXG4gICAgICAgICAgICAnTWVlR29PUyc6ICdNZWVHbycsXG4gICAgICAgICAgICAnTWFlbW9PUyc6ICdNYWVtbycsXG4gICAgICAgICAgICAnSmF2YU9TJzogJ0oyTUVcXC98XFxcXGJNSURQXFxcXGJ8XFxcXGJDTERDXFxcXGInLFxuICAgICAgICAgICAgJ3dlYk9TJzogJ3dlYk9TfGhwd09TJyxcbiAgICAgICAgICAgICdiYWRhT1MnOiAnXFxcXGJCYWRhXFxcXGInLFxuICAgICAgICAgICAgJ0JSRVdPUyc6ICdCUkVXJ1xuICAgICAgICB9LFxuICAgICAgICAndWFzJzoge1xuICAgICAgICAgICAgJ0Nocm9tZSc6ICdcXFxcYkNyTW9cXFxcYnxDcmlPU3xBbmRyb2lkLipDaHJvbWVcXC9bLjAtOV0qIChNb2JpbGUpPycsXG4gICAgICAgICAgICAnRG9sZmluJzogJ1xcXFxiRG9sZmluXFxcXGInLFxuICAgICAgICAgICAgJ09wZXJhJzogJ09wZXJhLipNaW5pfE9wZXJhLipNb2JpfEFuZHJvaWQuKk9wZXJhfE1vYmlsZS4qT1BSXFwvWzAtOS5dK3xDb2FzdFxcL1swLTkuXSsnLFxuICAgICAgICAgICAgJ1NreWZpcmUnOiAnU2t5ZmlyZScsXG4gICAgICAgICAgICAnSUUnOiAnSUVNb2JpbGV8TVNJRU1vYmlsZScsXG4gICAgICAgICAgICAnRmlyZWZveCc6ICdmZW5uZWN8ZmlyZWZveC4qbWFlbW98KE1vYmlsZXxUYWJsZXQpLipGaXJlZm94fEZpcmVmb3guKk1vYmlsZScsXG4gICAgICAgICAgICAnQm9sdCc6ICdib2x0JyxcbiAgICAgICAgICAgICdUZWFTaGFyayc6ICd0ZWFzaGFyaycsXG4gICAgICAgICAgICAnQmxhemVyJzogJ0JsYXplcicsXG4gICAgICAgICAgICAnU2FmYXJpJzogJ1ZlcnNpb24uKk1vYmlsZS4qU2FmYXJpfFNhZmFyaS4qTW9iaWxlfE1vYmlsZVNhZmFyaScsXG4gICAgICAgICAgICAnVGl6ZW4nOiAnVGl6ZW4nLFxuICAgICAgICAgICAgJ1VDQnJvd3Nlcic6ICdVQy4qQnJvd3NlcnxVQ1dFQicsXG4gICAgICAgICAgICAnYmFpZHVib3hhcHAnOiAnYmFpZHVib3hhcHAnLFxuICAgICAgICAgICAgJ2JhaWR1YnJvd3Nlcic6ICdiYWlkdWJyb3dzZXInLFxuICAgICAgICAgICAgJ0RpaWdvQnJvd3Nlcic6ICdEaWlnb0Jyb3dzZXInLFxuICAgICAgICAgICAgJ1B1ZmZpbic6ICdQdWZmaW4nLFxuICAgICAgICAgICAgJ01lcmN1cnknOiAnXFxcXGJNZXJjdXJ5XFxcXGInLFxuICAgICAgICAgICAgJ09iaWdvQnJvd3Nlcic6ICdPYmlnbycsXG4gICAgICAgICAgICAnTmV0RnJvbnQnOiAnTkYtQnJvd3NlcicsXG4gICAgICAgICAgICAnR2VuZXJpY0Jyb3dzZXInOiAnTm9raWFCcm93c2VyfE92aUJyb3dzZXJ8T25lQnJvd3NlcnxUd29ua3lCZWFtQnJvd3NlcnxTRU1DLipCcm93c2VyfEZseUZsb3d8TWluaW1vfE5ldEZyb250fE5vdmFycmEtVmlzaW9ufE1RUUJyb3dzZXJ8TWljcm9NZXNzZW5nZXInXG4gICAgICAgIH0sXG4gICAgICAgICdwcm9wcyc6IHtcbiAgICAgICAgICAgICdNb2JpbGUnOiAnTW9iaWxlXFwvW1ZFUl0nLFxuICAgICAgICAgICAgJ0J1aWxkJzogJ0J1aWxkXFwvW1ZFUl0nLFxuICAgICAgICAgICAgJ1ZlcnNpb24nOiAnVmVyc2lvblxcL1tWRVJdJyxcbiAgICAgICAgICAgICdWZW5kb3JJRCc6ICdWZW5kb3JJRFxcL1tWRVJdJyxcbiAgICAgICAgICAgICdpUGFkJzogJ2lQYWQuKkNQVVthLXogXStbVkVSXScsXG4gICAgICAgICAgICAnaVBob25lJzogJ2lQaG9uZS4qQ1BVW2EteiBdK1tWRVJdJyxcbiAgICAgICAgICAgICdpUG9kJzogJ2lQb2QuKkNQVVthLXogXStbVkVSXScsXG4gICAgICAgICAgICAnS2luZGxlJzogJ0tpbmRsZVxcL1tWRVJdJyxcbiAgICAgICAgICAgICdDaHJvbWUnOiBbXG4gICAgICAgICAgICAgICAgJ0Nocm9tZVxcL1tWRVJdJyxcbiAgICAgICAgICAgICAgICAnQ3JpT1NcXC9bVkVSXScsXG4gICAgICAgICAgICAgICAgJ0NyTW9cXC9bVkVSXSdcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAnQ29hc3QnOiBbXG4gICAgICAgICAgICAgICAgJ0NvYXN0XFwvW1ZFUl0nXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgJ0RvbGZpbic6ICdEb2xmaW5cXC9bVkVSXScsXG4gICAgICAgICAgICAnRmlyZWZveCc6ICdGaXJlZm94XFwvW1ZFUl0nLFxuICAgICAgICAgICAgJ0Zlbm5lYyc6ICdGZW5uZWNcXC9bVkVSXScsXG4gICAgICAgICAgICAnSUUnOiBbXG4gICAgICAgICAgICAgICAgJ0lFTW9iaWxlXFwvW1ZFUl07JyxcbiAgICAgICAgICAgICAgICAnSUVNb2JpbGUgW1ZFUl0nLFxuICAgICAgICAgICAgICAgICdNU0lFIFtWRVJdOydcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAnTmV0RnJvbnQnOiAnTmV0RnJvbnRcXC9bVkVSXScsXG4gICAgICAgICAgICAnTm9raWFCcm93c2VyJzogJ05va2lhQnJvd3NlclxcL1tWRVJdJyxcbiAgICAgICAgICAgICdPcGVyYSc6IFtcbiAgICAgICAgICAgICAgICAnIE9QUlxcL1tWRVJdJyxcbiAgICAgICAgICAgICAgICAnT3BlcmEgTWluaVxcL1tWRVJdJyxcbiAgICAgICAgICAgICAgICAnVmVyc2lvblxcL1tWRVJdJ1xuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICdPcGVyYSBNaW5pJzogJ09wZXJhIE1pbmlcXC9bVkVSXScsXG4gICAgICAgICAgICAnT3BlcmEgTW9iaSc6ICdWZXJzaW9uXFwvW1ZFUl0nLFxuICAgICAgICAgICAgJ1VDIEJyb3dzZXInOiAnVUMgQnJvd3NlcltWRVJdJyxcbiAgICAgICAgICAgICdNUVFCcm93c2VyJzogJ01RUUJyb3dzZXJcXC9bVkVSXScsXG4gICAgICAgICAgICAnTWljcm9NZXNzZW5nZXInOiAnTWljcm9NZXNzZW5nZXJcXC9bVkVSXScsXG4gICAgICAgICAgICAnYmFpZHVib3hhcHAnOiAnYmFpZHVib3hhcHBcXC9bVkVSXScsXG4gICAgICAgICAgICAnYmFpZHVicm93c2VyJzogJ2JhaWR1YnJvd3NlclxcL1tWRVJdJyxcbiAgICAgICAgICAgICdJcm9uJzogJ0lyb25cXC9bVkVSXScsXG4gICAgICAgICAgICAnU2FmYXJpJzogW1xuICAgICAgICAgICAgICAgICdWZXJzaW9uXFwvW1ZFUl0nLFxuICAgICAgICAgICAgICAgICdTYWZhcmlcXC9bVkVSXSdcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAnU2t5ZmlyZSc6ICdTa3lmaXJlXFwvW1ZFUl0nLFxuICAgICAgICAgICAgJ1RpemVuJzogJ1RpemVuXFwvW1ZFUl0nLFxuICAgICAgICAgICAgJ1dlYmtpdCc6ICd3ZWJraXRbIFxcL11bVkVSXScsXG4gICAgICAgICAgICAnR2Vja28nOiAnR2Vja29cXC9bVkVSXScsXG4gICAgICAgICAgICAnVHJpZGVudCc6ICdUcmlkZW50XFwvW1ZFUl0nLFxuICAgICAgICAgICAgJ1ByZXN0byc6ICdQcmVzdG9cXC9bVkVSXScsXG4gICAgICAgICAgICAnaU9TJzogJyBcXFxcYmk/T1NcXFxcYiBbVkVSXVsgO117MX0nLFxuICAgICAgICAgICAgJ0FuZHJvaWQnOiAnQW5kcm9pZCBbVkVSXScsXG4gICAgICAgICAgICAnQmxhY2tCZXJyeSc6IFtcbiAgICAgICAgICAgICAgICAnQmxhY2tCZXJyeVtcXFxcd10rXFwvW1ZFUl0nLFxuICAgICAgICAgICAgICAgICdCbGFja0JlcnJ5LipWZXJzaW9uXFwvW1ZFUl0nLFxuICAgICAgICAgICAgICAgICdWZXJzaW9uXFwvW1ZFUl0nXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgJ0JSRVcnOiAnQlJFVyBbVkVSXScsXG4gICAgICAgICAgICAnSmF2YSc6ICdKYXZhXFwvW1ZFUl0nLFxuICAgICAgICAgICAgJ1dpbmRvd3MgUGhvbmUgT1MnOiBbXG4gICAgICAgICAgICAgICAgJ1dpbmRvd3MgUGhvbmUgT1MgW1ZFUl0nLFxuICAgICAgICAgICAgICAgICdXaW5kb3dzIFBob25lIFtWRVJdJ1xuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICdXaW5kb3dzIFBob25lJzogJ1dpbmRvd3MgUGhvbmUgW1ZFUl0nLFxuICAgICAgICAgICAgJ1dpbmRvd3MgQ0UnOiAnV2luZG93cyBDRVxcL1tWRVJdJyxcbiAgICAgICAgICAgICdXaW5kb3dzIE5UJzogJ1dpbmRvd3MgTlQgW1ZFUl0nLFxuICAgICAgICAgICAgJ1N5bWJpYW4nOiBbXG4gICAgICAgICAgICAgICAgJ1N5bWJpYW5PU1xcL1tWRVJdJyxcbiAgICAgICAgICAgICAgICAnU3ltYmlhblxcL1tWRVJdJ1xuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICd3ZWJPUyc6IFtcbiAgICAgICAgICAgICAgICAnd2ViT1NcXC9bVkVSXScsXG4gICAgICAgICAgICAgICAgJ2hwd09TXFwvW1ZFUl07J1xuICAgICAgICAgICAgXVxuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEJyb3dzZXIgdXNlckFnZW50XG4gICAgICovXG4gICAgdWE6IHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50LFxuXG4gICAgLyoqXG4gICAgICogSW5pdGlhbGl6ZVxuICAgICAqL1xuICAgIGluaXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLmNvbnZlcnQoKTtcblxuICAgICAgICB2YXIgcnVsZXMgPSB0aGlzLm1vYmlsZVJlZ1RleHQ7XG4gICAgICAgIHJ1bGVzLm9zczAgPSB7XG4gICAgICAgICAgICBXaW5kb3dzUGhvbmVPUzogcnVsZXMub3NzLldpbmRvd3NQaG9uZU9TLFxuICAgICAgICAgICAgV2luZG93c01vYmlsZU9TOiBydWxlcy5vc3MuV2luZG93c01vYmlsZU9TXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuZGV2aWNlID0gIHRoaXMuX2ZpbmRNYXRjaChydWxlcy5waG9uZXMsIHRoaXMudWEpO1xuICAgICAgICB0aGlzLmlvcyA9IHRoaXMuaXNJT1MoKTtcbiAgICAgICAgdGhpcy5hbmRyb2lkID0gdGhpcy5pc0FuZHJvaWQoKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQ29udmVydCBkZXZpY2UsIG9zLCBicm93c2VyIGluZm8gdG8gcmVnIGVkaXQuXG4gICAgICovXG4gICAgY29udmVydDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBydWxlLFxuICAgICAgICAgICAgbW9iaWxlRGV0ZWN0UnVsZXMgPSB0aGlzLm1vYmlsZVJlZ1RleHQ7XG5cbiAgICAgICAgdGhpcy5fcHJvcENvbnZlcnQoKTtcblxuICAgICAgICBmb3IgKHJ1bGUgaW4gbW9iaWxlRGV0ZWN0UnVsZXMpIHtcbiAgICAgICAgICAgIGlmKHJ1bGUgIT09ICdwcm9wcycpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9jb252ZXJ0VG9SZWdFeHAobW9iaWxlRGV0ZWN0UnVsZXNbcnVsZV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIENvbnZlcnQgcHJvcGVydHkgYnkgZWFjaCBpbnZpcm9ubWVudFxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgX3Byb3BDb252ZXJ0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGtleSxcbiAgICAgICAgICAgIHZhbHVlcyxcbiAgICAgICAgICAgIHZhbHVlLFxuICAgICAgICAgICAgaSxcbiAgICAgICAgICAgIGxlbixcbiAgICAgICAgICAgIHZlclBvcyxcbiAgICAgICAgICAgIGhhc093blByb3AgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LFxuICAgICAgICAgICAgcnVsZXMgPSB0aGlzLm1vYmlsZVJlZ1RleHQucHJvcHM7XG5cbiAgICAgICAgZm9yIChrZXkgaW4gcnVsZXMpIHtcbiAgICAgICAgICAgIGlmIChoYXNPd25Qcm9wLmNhbGwocnVsZXMsIGtleSkpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZXMgPSBydWxlc1trZXldO1xuICAgICAgICAgICAgICAgIGlmICghbmUudXRpbC5pc0FycmF5KHZhbHVlcykpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWVzID0gW3ZhbHVlc107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxlbiA9IHZhbHVlcy5sZW5ndGg7XG4gICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGxlbjsgKytpKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gdmFsdWVzW2ldO1xuICAgICAgICAgICAgICAgICAgICB2ZXJQb3MgPSB2YWx1ZS5pbmRleE9mKCdbVkVSXScpO1xuICAgICAgICAgICAgICAgICAgICBpZiAodmVyUG9zID49IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gdmFsdWUuc3Vic3RyaW5nKDAsIHZlclBvcykgKyAnKFtcXFxcdy5fXFxcXCtdKyknICsgdmFsdWUuc3Vic3RyaW5nKHZlclBvcyArIDUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlc1tpXSA9IG5ldyBSZWdFeHAodmFsdWUsICdpJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJ1bGVzW2tleV0gPSB2YWx1ZXM7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogR2V0IHVzZXJBZ2VudFxuICAgICAqL1xuICAgIHVzZXJBZ2VudDogZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmIChuZS51dGlsLmlzVW5kZWZpbmVkKHRoaXMuY2FjaGUudXNlckFnZW50KSkge1xuICAgICAgICAgICAgdGhpcy5jYWNoZS51c2VyQWdlbnQgPSB0aGlzLl9maW5kTWF0Y2godGhpcy5tb2JpbGVSZWdUZXh0LnVhcywgdGhpcy51YSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuY2FjaGUudXNlckFnZW50O1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBDb252ZXIgdG8gcmVnIGV4cFxuICAgICAqIEBwYXJhbSBvYmplY3RcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIF9jb252ZXJ0VG9SZWdFeHA6IGZ1bmN0aW9uKG9iamVjdCkge1xuICAgICAgICB2YXIgaGFzT3duUHJvcCA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHksXG4gICAgICAgICAgICBrZXk7XG4gICAgICAgIGZvciAoa2V5IGluIG9iamVjdCkge1xuICAgICAgICAgICAgaWYgKGhhc093blByb3AuY2FsbChvYmplY3QsIGtleSkpIHtcbiAgICAgICAgICAgICAgICBvYmplY3Rba2V5XSA9IG5ldyBSZWdFeHAob2JqZWN0W2tleV0sICdpJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogRmluZCBPU1xuICAgICAqIEByZXR1cm5zIHsqfVxuICAgICAqL1xuICAgIGdldE9TOiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ZpbmRNYXRjaCh0aGlzLm1vYmlsZVJlZ1RleHQub3NzMCwgdGhpcy51YSkgfHxcbiAgICAgICAgICAgIHRoaXMuX2ZpbmRNYXRjaCh0aGlzLm1vYmlsZVJlZ1RleHQub3NzLCB0aGlzLnVhKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogRmluZCBtYXRjaCB1c2VyYWdlbnRcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIF9maW5kTWF0Y2g6IGZ1bmN0aW9uKHJ1bGVzLCB1c2VyQWdlbnQpIHtcbiAgICAgICAgdmFyIGtleSxcbiAgICAgICAgICAgIGhhc093blByb3AgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuICAgICAgICBmb3IgKGtleSBpbiBydWxlcykge1xuICAgICAgICAgICAgaWYgKGhhc093blByb3AuY2FsbChydWxlcywga2V5KSkge1xuICAgICAgICAgICAgICAgIGlmIChydWxlc1trZXldLnRlc3QodXNlckFnZW50KSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4ga2V5O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogRmluZCB2ZXJzaW9uXG4gICAgICogQHJldHVybnMgeyp9XG4gICAgICovXG4gICAgdmVyc2lvbjogZnVuY3Rpb24ocHJvcGVydHlOYW1lKSB7XG4gICAgICAgIHZhciB2ZXJzaW9uID0gdGhpcy5fZ2V0VmVyc2lvblN0cihwcm9wZXJ0eU5hbWUsIHRoaXMudWEpO1xuICAgICAgICByZXR1cm4gdmVyc2lvbiA/IHRoaXMuX3ByZXBhcmVWZXJzaW9uTm8odmVyc2lvbikgOiBOYU47XG4gICAgfSxcbiAgICBcbiAgICAvKipcbiAgICAgKiBDaGVjayB0aGUgdmVyc2lvbiBvZiB0aGUgZ2l2ZW4gcHJvcGVydHkgaW4gdGhlIFVzZXItQWdlbnQuXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHByb3BlcnR5TmFtZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSB1c2VyQWdlbnRcbiAgICAgKiBAcmV0dXJuIHtTdHJpbmd9IHZlcnNpb24gb3IgPHR0Pm51bGw8L3R0PiBpZiB2ZXJzaW9uIG5vdCBmb3VuZFxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgX2dldFZlcnNpb25TdHI6IGZ1bmN0aW9uKHByb3BlcnR5TmFtZSwgdXNlckFnZW50KSB7XG4gICAgICAgIHZhciBwcm9wcyA9IHRoaXMubW9iaWxlUmVnVGV4dC5wcm9wcyxcbiAgICAgICAgICAgIHBhdHRlcm5zLFxuICAgICAgICAgICAgaSxcbiAgICAgICAgICAgIGxlbixcbiAgICAgICAgICAgIG1hdGNoLFxuICAgICAgICAgICAgaGFzT3duUHJvcCA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG5cbiAgICAgICAgaWYgKGhhc093blByb3AuY2FsbChwcm9wcywgcHJvcGVydHlOYW1lKSkge1xuICAgICAgICAgICAgcGF0dGVybnMgPSBwcm9wc1twcm9wZXJ0eU5hbWVdO1xuICAgICAgICAgICAgbGVuID0gcGF0dGVybnMubGVuZ3RoO1xuXG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbGVuOyArK2kpIHtcbiAgICAgICAgICAgICAgICBtYXRjaCA9IHBhdHRlcm5zW2ldLmV4ZWModXNlckFnZW50KTtcbiAgICAgICAgICAgICAgICBpZiAobWF0Y2ggIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1hdGNoWzFdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUHJlcGFyZSB0aGUgdmVyc2lvbiBudW1iZXIuXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHZlcnNpb25cbiAgICAgKiBAcmV0dXJuIHtOdW1iZXJ9IHRoZSB2ZXJzaW9uIG51bWJlciBhcyBhIGZsb2F0aW5nIG51bWJlclxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgX3ByZXBhcmVWZXJzaW9uTm86IGZ1bmN0aW9uKHZlcnNpb24pIHtcbiAgICAgICAgdmFyIG51bWJlcnM7XG5cbiAgICAgICAgbnVtYmVycyA9IHZlcnNpb24uc3BsaXQoL1thLXouXyBcXC9cXC1dL2kpO1xuICAgICAgICBpZiAobnVtYmVycy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgIHZlcnNpb24gPSBudW1iZXJzWzBdO1xuICAgICAgICB9XG4gICAgICAgIGlmIChudW1iZXJzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgIHZlcnNpb24gPSBudW1iZXJzWzBdICsgJy4nO1xuICAgICAgICAgICAgbnVtYmVycy5zaGlmdCgpO1xuICAgICAgICAgICAgdmVyc2lvbiArPSBudW1iZXJzLmpvaW4oJycpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBOdW1iZXIodmVyc2lvbik7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFdoZXRoZXIgaU9TIG9yIG5vdFxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgICAqL1xuICAgIGlzSU9TOiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0T1MoKSA9PT0gJ2lPUyc7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFdoZXRoZXIgQW5kcm9pZCBvciBub3RcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBpc0FuZHJvaWQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRPUygpID09PSAnQW5kcm9pZE9TJztcbiAgICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSAgQWdlbnREZXRlY3RvcjtcbiIsIi8qKlxuICogQGZpbGVvdmVydmlldyBMb2FkIG5hdGl2ZSBhcHAgb3IgbW92ZSB0byBpbnN0YWxsIHBhZ2VcbiAqIEBkZXBlbmRlbmN5IGNvZGUtc25pcHBldC5qcywgZGV0ZWN0b3JzLmpzLCBhZ2VudERldGVjdG9yLmpzXG4gKiBAYXV0aG9yIE5ITiBFbnQuIEZFIGRldiB0ZWFtLjxkbF9qYXZhc2NyaXB0QG5obmVudC5jb20+XG4gKi9cblxudmFyIEFnZW50RGV0ZWN0b3IgPSByZXF1aXJlKCcuL2FnZW50RGV0ZWN0b3InKTtcbnZhciBEZXRlY3RvciA9IHJlcXVpcmUoJy4vZGV0ZWN0b3JzJyk7XG52YXIgaU9TRGV0ZWN0b3IgPSByZXF1aXJlKCcuL2lvc0RldGVjdG9ycycpO1xuLyoqXG4gKiBAY29uc3RydWN0b3JcbiAqIEBjbGFzc1xuICovXG52YXIgQXBwTG9hZGVyID0gbmUudXRpbC5kZWZpbmVDbGFzcygvKiogQGxlbmRzIEFwcExvYWRlci5wcm90b3R5cGUgKi97XG5cbiAgICAvKioqKioqKioqKioqKioqKlxuICAgICAqIG1lbWJlciBmaWVsZHNcbiAgICAgKioqKioqKioqKioqKioqKi9cblxuICAgIC8qKlxuICAgICAqIGJyb3dzZXIsIGRldmljZSBkZXRlY3RvclxuICAgICAqL1xuICAgIGRldGVjdG9yOiBudWxsLFxuICAgIC8qKlxuICAgICAqIE9TIChhbmRyb2lkL2lvcy9ldGMpXG4gICAgICovXG4gICAgb3M6IG51bGwsXG4gICAgLyoqXG4gICAgICogZGVmYXVsdCBvcHRpb25zIHRvIHJ1biBleGVjXG4gICAgICovXG4gICAgZGVmYXVsdHM6IHtcbiAgICAgICAgbmFtZTogJycsXG4gICAgICAgIGlvczoge1xuICAgICAgICAgICAgc2NoZW1lOiAnJyxcbiAgICAgICAgICAgIHVybDogJydcbiAgICAgICAgfSxcbiAgICAgICAgYW5kcm9pZDoge1xuICAgICAgICAgICAgc2NoZW1lOiAnJ1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8qKioqKioqKioqKioqKioqXG4gICAgICogbWVtYmVyIG1ldGhvZHNcbiAgICAgKioqKioqKioqKioqKioqKi9cblxuICAgIC8qKlxuICAgICAqIEluaXRpYWxpemVcbiAgICAgKi9cbiAgICBpbml0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGFkID0gdGhpcy5hZ2VudERldGVjdG9yID0gbmV3IEFnZW50RGV0ZWN0b3IoKTtcbiAgICAgICAgdGhpcy51YSA9IGFkLnVzZXJBZ2VudCgpO1xuICAgICAgICB0aGlzLm9zID0gYWQuZ2V0T1MoKTtcbiAgICAgICAgdGhpcy52ZXJzaW9uID0gYWQudmVyc2lvbihhZC5pb3MgPyBhZC5kZXZpY2UgOiAnQW5kcm9pZCcpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBTZXQgb3MgYnkgRGV0ZWN0b3JcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gY29udGV4dCBUaGUgb3B0aW9uc1xuICAgICAqL1xuICAgIHNldERldGVjdG9yOiBmdW5jdGlvbihjb250ZXh0KSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcyxcbiAgICAgICAgICAgIGlzTm90SW50ZW5kID0gKHRoaXMuaXNJbnRlbnRMZXNzKCkgfHwgbmUudXRpbC5pc0V4aXN0eShjb250ZXh0LnVzZVVybFNjaGVtZSkpLFxuICAgICAgICAgICAgaXNJbnRlbmQgPSBuZS51dGlsLmlzRXhpc3R5KGNvbnRleHQuaW50ZW50VVJJKSxcbiAgICAgICAgICAgIHN0b3JlID0gY29udGV4dC5zdG9yZVVSTCxcbiAgICAgICAgICAgIGJhc2VEZXRlY3QgPSBEZXRlY3RvcixcbiAgICAgICAgICAgIGlPU0RldGVjdCA9IGlPU0RldGVjdG9yLFxuICAgICAgICAgICAgYWQgPSB0aGlzLmFnZW50RGV0ZWN0b3I7XG5cbiAgICAgICAgaWYgKGFkLmFuZHJvaWQgJiYgdGhpcy52ZXJzaW9uID49IGNvbnRleHQuYW5kVmVyc2lvbikgeyAvLyBBbmRyaW9kXG4gICAgICAgICAgICBpZiAoaXNOb3RJbnRlbmQgJiYgc3RvcmUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRldGVjdG9yID0gYmFzZURldGVjdC5hbmRyb2lkU2NoZW1lRGV0ZWN0b3I7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGlzSW50ZW5kKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kZXRlY3RvciA9IGJhc2VEZXRlY3QuYW5kcm9pZEludGVuZERldGVjdG9yO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGFkLmlvcyAmJiBzdG9yZSkgey8vIElPU1xuICAgICAgICAgICAgaWYocGFyc2VJbnQodGhpcy52ZXJzaW9uLm1ham9yLCAxMCkgPCA4KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kZXRlY3RvciA9IGlPU0RldGVjdC5pb3NPbGRlckRldGVjdG9yO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRldGVjdG9yID0gaU9TRGV0ZWN0Lmlvc1JlY2VudERldGVjdG9yO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgeyAvLyBFVENcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHNlbGYuZGV0ZWN0b3IgPSBiYXNlRGV0ZWN0LmV0Y0RldGVjdG9yO1xuICAgICAgICAgICAgICAgIGlmIChjb250ZXh0LmV0Y0NhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHQuZXRjQ2FsbGJhY2soKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCAxMDApO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFJ1biBzZWxlY3RlZCBkZXRlY3RvciBcbiAgICAgKi9cbiAgICBydW5EZXRlY3RvcjogZnVuY3Rpb24oY29udGV4dCkge1xuICAgICAgICBpZih0aGlzLmRldGVjdG9yICYmICh0aGlzLmRldGVjdG9yLnR5cGUgIT09IERldGVjdG9yLmV0Y0RldGVjdG9yLnR5cGUpKSB7XG4gICAgICAgICAgICB0aGlzLmRldGVjdG9yLnJ1bihjb250ZXh0KTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBXaGV0aGVyIGludGVudCBzdXBwb3J0ZWRcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBpc0ludGVudExlc3M6IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgaW50ZW50bGVzc0Jyb3dzZXJzID0gW1xuICAgICAgICAgICAgJ2ZpcmVmb3gnLFxuICAgICAgICAgICAgJ29wcidcbiAgICAgICAgXTtcbiAgICAgICAgdmFyIGJsYWNrTGlzdFJlZ2V4cCA9IG5ldyBSZWdFeHAoaW50ZW50bGVzc0Jyb3dzZXJzLmpvaW4oJ3wnKSwgJ2knKSxcbiAgICAgICAgICAgIGFwcCA9IHRoaXMuYWdlbnREZXRlY3RvcjtcbiAgICAgICAgcmV0dXJuIGJsYWNrTGlzdFJlZ2V4cC50ZXN0KGFwcC51YSk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEdldCBvc1xuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAgICovXG4gICAgZ2V0T1M6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hZ2VudERldGVjdG9yLmdldE9TKCk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIENhbGwgYXBwXG4gICAgICogQHBhcmFtIG9wdGlvbnNcbiAgICAgKlxuICAgICAqIEBleGFtcGxlXG4gICAgICogdmFyIGxvYWRlciA9IG5ldyBuZS5jb21wb25lbnQuQXBwTG9hZGVyKCk7XG4gICAgICogbG9hZGVyLmV4ZWMoe1xuICAgICAqICAgICAgbmFtZTogJ2FwcCcsIC8vIGFwcGxpY2F0aW9uIE5hbWUgKGV4LiBmYWNlYm9vaywgdHdpdHRlciwgZGF1bSlcbiAgICAgKiAgICAgIGlvczoge1xuICAgICAqICAgICAgICAgIHNjaGVtZTogJ2ZlY2hlY2s6Ly8nLCAvLyBpcGhvbmUgYXBwIHNjaGVtZVxuICAgICAqICAgICAgICAgIHVybDogJ2l0bXMtYXBwczovL2l0dW5lcy5hcHBsZS5jb20vYXBwLy4uLi4uJyAvLyBhcHAgc3RvcmUgdXJsXG4gICAgICogICAgICB9LFxuICAgICAqICAgICAgYW5kcm9pZDoge1xuICAgICAqICAgICAgICAgIHNjaGVtZTogJ2ludGVudDovL2hvbWUjSW50ZW50O3NjaGVtZT1mZWNoZWNrO3BhY2thZ2U9Y29tLmZlY2hlY2s7ZW5kJyAvLyBhbmRyb2lkIGludGVudCB1cmlcbiAgICAgKiAgICAgIH1cbiAgICAgKiAgfSk7XG4gICAgICovXG4gICAgZXhlYzogZnVuY3Rpb24ob3B0aW9ucykge1xuICAgICAgICBvcHRpb25zID0gbmUudXRpbC5leHRlbmQodGhpcy5kZWZhdWx0cywgb3B0aW9ucyk7XG4gICAgICAgIHZhciBjb250ZXh0ID0ge1xuICAgICAgICAgICAgYXBwTmFtZTogb3B0aW9ucy5uYW1lLFxuICAgICAgICAgICAgdXJsU2NoZW1lOiBvcHRpb25zLmlvcy5zY2hlbWUsXG4gICAgICAgICAgICBzdG9yZVVSTDogb3B0aW9ucy5pb3MudXJsLFxuICAgICAgICAgICAgaW50ZW50VVJJOiBvcHRpb25zLmFuZHJvaWQuc2NoZW1lLFxuICAgICAgICAgICAgZXRjQ2FsbGJhY2s6IG9wdGlvbnMuZXRjQ2FsbGJhY2ssXG4gICAgICAgICAgICBhbmRWZXJzaW9uOiBvcHRpb25zLmFuZHJvaWQudmVyc2lvblxuICAgICAgICB9O1xuICAgICAgICB0aGlzLnNldERldGVjdG9yKGNvbnRleHQpO1xuICAgICAgICB0aGlzLnJ1bkRldGVjdG9yKGNvbnRleHQpO1xuICAgIH1cbn0pO1xuXG5cbiIsIi8qKlxuICogQGZpbGVvdnJ2aWV3IE1peGluIG1vZHVsZXNcbiAqIEBkZXBlbmRlbmN5IGNvZGUtc25pcHBldC5qcywgYXBwTG9hZGVyLmpzXG4gKiBAYXV0aG9yIE5ITiBFbnQuIEZFIGRldiB0ZWFtLjxkbF9qYXZhc2NyaXB0QG5obmVudC5jb20+XG4gKi9cbi8qKlxuICogQG5hbWVzcGFjZSBEZXRlY3RvclxuICovXG52YXIgRGV0ZWN0b3IgPSB7XG4gICAgLyoqXG4gICAgICogZm9yIHRpbWVyXG4gICAgICovXG4gICAgVElNRU9VVDoge1xuICAgICAgICBJT1NfU0hPUlQ6IDEwMDAsXG4gICAgICAgIElPU19MT05HOiAxMDAwICogMixcbiAgICAgICAgQU5EUk9JRDogMTAwICogMyxcbiAgICAgICAgSU5URVJWQUw6IDEwMFxuICAgIH0sXG4gICAgXG4gICAgLyoqXG4gICAgICogQ2FsbCBhcHAgYnkgaWZyYW1lXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHVybFNjaGVtZSBpZnJhbWUgdXJsXG4gICAgICovXG4gICAgcnVuQXBwV2l0aElmcmFtZTogZnVuY3Rpb24gKHVybFNjaGVtZSkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXMsXG4gICAgICAgICAgICBpZnJhbWU7XG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWZyYW1lID0gc2VsZi5nZXRJZnJhbWVNYWRlQnlJZCgnc3VwcG9ydEZyYW1lJyk7XG4gICAgICAgICAgICBpZnJhbWUuc3JjID0gdXJsU2NoZW1lO1xuICAgICAgICB9LCB0aGlzLlRJTUVPVVQuSU5URVJWQUwpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgaWZyYW1lXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIGlmcmFtZSBJRFxuICAgICAqIEByZXR1cm5zIHtIVE1MRWxlbWVudH1cbiAgICAgKi9cbiAgICBnZXRJZnJhbWVNYWRlQnlJZDogZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgIHZhciBpZnJhbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpZnJhbWUnKTtcbiAgICAgICAgbmUudXRpbC5leHRlbmQoaWZyYW1lLCB7XG4gICAgICAgICAgICBpZDogaWQsXG4gICAgICAgICAgICBmcmFtZWJvcmRlcjogJzAnLFxuICAgICAgICAgICAgd2lkdGg6ICcwJyxcbiAgICAgICAgICAgIGhlaWdodDogJzAnXG4gICAgICAgIH0pO1xuICAgICAgICBpZnJhbWUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChpZnJhbWUpO1xuICAgICAgICByZXR1cm4gaWZyYW1lO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBEZWZlciBjYWxsIGNhbGxiYWNrXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHRpbWUgQSBkZWxheSB0aW1lXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHVybCBBIHVybCB0byByZXF1ZXN0XG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2sgQSBjYWxsYmFja1xuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XG4gICAgICovXG4gICAgZGVmZXJDYWxsYmFjazogZnVuY3Rpb24gKHVybCwgY2FsbGJhY2ssIHRpbWUpIHtcbiAgICAgICAgdmFyIGNsaWNrZWRBdCA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpLFxuICAgICAgICAgICAgbm93LFxuICAgICAgICAgICAgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgbm93ID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgICAgICBpZiAoc2VsZi5pc1BhZ2VWaXNpYmlsaXR5KCkgJiYgbm93IC0gY2xpY2tlZEF0IDwgdGltZSArIHNlbGYuVElNRU9VVC5JTlRFUlZBTCkge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKHVybCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHRpbWUpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBjaGVjayBhIHdlYnBhZ2UgaXMgdmlzaWJsZSBvciBpbiBmb2N1c1xuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgICAqL1xuICAgIGlzUGFnZVZpc2liaWxpdHk6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKG5lLnV0aWwuaXNFeGlzdHkoZG9jdW1lbnQuaGlkZGVuKSkge1xuICAgICAgICAgICAgcmV0dXJuICFkb2N1bWVudC5oaWRkZW47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG5lLnV0aWwuaXNFeGlzdHkoZG9jdW1lbnQud2Via2l0SGlkZGVuKSkge1xuICAgICAgICAgICAgcmV0dXJuICFkb2N1bWVudC53ZWJraXRIaWRkZW47XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxufTtcblxuLyoqKioqKioqKioqKioqKipcbiAqIEFuZHJvaWQgc2VyaWVzXG4gKioqKioqKioqKioqKioqKi9cblxuLyoqXG4gKiBBbmRyb2lkIGludGVudCBsZXNzXG4gKiBAbmFtZXNwYWNlIERldGVjdG9yLmFuZHJvaWRTY2hlbWVEZXRlY3RvclxuICovXG5EZXRlY3Rvci5hbmRyb2lkU2NoZW1lRGV0ZWN0b3IgPSBuZS51dGlsLmV4dGVuZCh7XG4gICAgLyoqXG4gICAgICogZGV0ZWN0b3IgdHlwZVxuICAgICAqIEBtZW1iZXJvZiBEZXRlY3Rvci5hbmRyb2lkU2NoZW1lRGV0ZWN0b3JcbiAgICAgKi9cbiAgICB0eXBlOiAnc2NoZW1lJyxcblxuICAgIC8qKlxuICAgICAqIFJ1biBkZXRlY3RvciBcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gY29udGV4dFxuICAgICAqIEBtZW1iZXJvZiBEZXRlY3Rvci5hbmRyb2lkU2NoZW1lRGV0ZWN0b3JcbiAgICAgKi9cbiAgICBydW46IGZ1bmN0aW9uKGNvbnRleHQpIHtcbiAgICAgICAgdmFyIHN0b3JlVVJMID0gY29udGV4dC5zdG9yZVVSTDtcbiAgICAgICAgdGhpcy5kZWZlckNhbGxiYWNrKHN0b3JlVVJMLCBjb250ZXh0Lm5vdEZvdW5kQ2FsbGJhY2ssIHRoaXMuVElNRU9VVC5BTkRST0lEKTtcbiAgICAgICAgdGhpcy5ydW5BcHBXaXRoSWZyYW1lKGNvbnRleHQudXJsU2NoZW1lKTtcbiAgICB9XG59LCBEZXRlY3Rvcik7XG5cblxuLyoqXG4gKiBBbmRyb2lkIGludGVudFxuICogQG5hbWVzcGFjZSBEZXRlY3Rvci5hbmRyb2lkSW50ZW5kRGV0ZWN0b3JcbiAqL1xuRGV0ZWN0b3IuYW5kcm9pZEludGVuZERldGVjdG9yID0gbmUudXRpbC5leHRlbmQoe1xuICAgIC8qKlxuICAgICAqIGRldGVjdG9yIHR5cGVcbiAgICAgKiBAbWVtYmVyb2YgRGV0ZWN0b3IuYW5kcm9pZEludGVuZERldGVjdG9yXG4gICAgICovXG4gICAgdHlwZTogJ2ludGVuZCcsXG5cbiAgICAvKipcbiAgICAgKiBSdW4gZGV0ZWN0b3IgXG4gICAgICogQHBhcmFtIHtvYmplY3R9IGNvbnRleHRcbiAgICAgKiBAbWVtYmVyb2YgRGV0ZWN0b3IuYW5kcm9pZEludGVuZERldGVjdG9yXG4gICAgICovXG4gICAgcnVuOiBmdW5jdGlvbihjb250ZXh0KSB7XG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdG9wLmxvY2F0aW9uLmhyZWYgPSBjb250ZXh0LmludGVudFVSSTtcbiAgICAgICAgfSwgdGhpcy5USU1FT1VULklOVEVSVkFMKTtcbiAgICB9XG59LCBEZXRlY3Rvcik7XG5tb2R1bGUuZXhwb3J0cyA9IERldGVjdG9yO1xuIiwiLyoqXG4gKiBAZmlsZW92ZXJ2aWV3IGlvc0RldGVjdG9yXG4gKi9cblxudmFyIERldGVjdG9yID0gcmVxdWlyZSgnLi9kZXRlY3RvcnMnKTtcblxuLyoqXG4gKiBAbmFtZXNwYWNlIGlPU0RldGVjdG9yXG4gKi9cbnZhciBpT1NEZXRlY3RvciA9IG5lLnV0aWwuZXh0ZW5kKHtcbiAgICAvKipcbiAgICAgKiBkZXRlY3RvciB0eXBlXG4gICAgICogQG1lbWJlcm9mIGlPU0RldGVjdG9yXG4gICAgICovXG4gICAgdHlwZTogJ2lvcycsXG5cbiAgICAvKipcbiAgICAgKiBkZWZhdWx0IGFwcCBwYWdlIG1vdmUgZnVuY3Rpbm9cbiAgICAgKiBAcGFyYW0gc3RvcmVVUkxcbiAgICAgKiBAbWVtYmVyb2YgaU9TRGV0ZWN0b3JcbiAgICAgKi9cbiAgICBtb3ZlVG86IGZ1bmN0aW9uKHN0b3JlVVJMKSB7XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gc3RvcmVVUkw7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIHZpc2libGl0eWNoYW5nZSBldmVudFxuICAgICAqIEBtZW1iZXJvZiBpT1NEZXRlY3RvclxuICAgICAqL1xuICAgIGJpbmRWaXNpYmlsaXR5Q2hhbmdlRXZlbnQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Zpc2liaWxpdHljaGFuZ2UnLCBmdW5jdGlvbiBjbGVhcigpIHtcbiAgICAgICAgICAgIGlmIChzZWxmLmlzUGFnZVZpc2liaWxpdHkoKSkge1xuICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dChzZWxmLnRpZCk7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndmlzaWJpbGl0eWNoYW5nZScsIGNsZWFyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqICBwYWdlaGlkZSBldmVudCBcbiAgICAgKiAgQG1lbWJlcm9mIGlPU0RldGVjdG9yXG4gICAgICovXG4gICAgYmluZFBhZ2VoaWRlRXZlbnQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwYWdlaGlkZScsIGZ1bmN0aW9uIGNsZWFyKCkge1xuICAgICAgICAgICAgaWYgKHNlbGYuaXNQYWdlVmlzaWJpbGl0eSgpKSB7XG4gICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHNlbGYudGlkKTtcbiAgICAgICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncGFnZWhpZGUnLCBjbGVhcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn0sIERldGVjdG9yKTtcblxuLyoqKioqKioqKioqKioqKipcbiAqIGlPUyBzZXJpZXNcbiAqKioqKioqKioqKioqKioqL1xuXG4vKipcbiAqIGlvcyBvbGQgZGV0ZWN0b3JcbiAqIEBuYW1lc3BhY2UgaU9TRGV0ZWN0b3IuaW9zT2xkZXJEZXRlY3RvclxuICovXG5pT1NEZXRlY3Rvci5pb3NPbGRlckRldGVjdG9yID0gbmUudXRpbC5leHRlbmQoe1xuICAgIC8qKlxuICAgICAqIGRldGVjdG9yIFJ1blxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBjb250ZXh0XG4gICAgICogQG1lbWJlcm9mIGlPU0RldGVjdG9yLmlvc09sZGVyRGV0ZWN0b3JcbiAgICAgKi9cbiAgICBydW46IGZ1bmN0aW9uKGNvbnRleHQpIHtcbiAgICAgICAgdmFyIHN0b3JlVVJMID0gY29udGV4dC5zdG9yZVVSTCxcbiAgICAgICAgICAgIGNhbGxiYWNrID0gY29udGV4dC5ub3RGb3VuZENhbGxiYWNrIHx8IHRoaXMubW92ZVRvO1xuICAgICAgICB0aGlzLnRpZCA9IHRoaXMuZGVmZXJDYWxsYmFjayhzdG9yZVVSTCwgY2FsbGJhY2ssIHRoaXMuVElNRU9VVC5JT1NfTE9ORyk7XG4gICAgICAgIHRoaXMuYmluZFBhZ2VoaWRlRXZlbnQoKTtcbiAgICAgICAgdGhpcy5ydW5BcHBXaXRoSWZyYW1lKGNvbnRleHQudXJsU2NoZW1lKTtcbiAgICB9XG59LCBpT1NEZXRlY3Rvcik7XG5cbi8qKlxuICogaW9zIHJlY2VudCBkZXRlY3RvclxuICogQG5hbWVzcGFjZSBpT1NEZXRlY3Rvci5pb3NSZWNlbnREZXRlY3RvclxuICovXG5pT1NEZXRlY3Rvci5pb3NSZWNlbnREZXRlY3RvciA9IG5lLnV0aWwuZXh0ZW5kKHtcbiAgICAvKipcbiAgICAgKiBkZXRlY3RvciBydW5cbiAgICAgKiBAcGFyYW0ge29iamVjdH0gY29udGV4dFxuICAgICAqIEBtZW1iZXJvZiBpT1NEZXRlY3Rvci5pb3NSZWNlbnREZXRlY3RvclxuICAgICAqL1xuICAgIHJ1bjogZnVuY3Rpb24oY29udGV4dCkge1xuICAgICAgICB2YXIgc3RvcmVVUkwgPSBjb250ZXh0LnN0b3JlVVJMLFxuICAgICAgICAgICAgY2FsbGJhY2sgPSBjb250ZXh0Lm5vdEZvdW5kQ2FsbGJhY2sgfHwgdGhpcy5tb3ZlVG87XG4gICAgICAgIGlmICh0aGlzLm1vdmVUbyA9PT0gY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHRoaXMudGlkID0gdGhpcy5kZWZlckNhbGxiYWNrKHN0b3JlVVJMLCBjYWxsYmFjaywgdGhpcy5USU1FT1VULklPU19TSE9SVCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnRpZCA9IHRoaXMuZGVmZXJDYWxsYmFjayhzdG9yZVVSTCwgY2FsbGJhY2ssIHRoaXMuVElNRU9VVC5JT1NfTE9ORyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5iaW5kVmlzaWJpbGl0eUNoYW5nZUV2ZW50KCk7XG4gICAgICAgIHRoaXMucnVuQXBwV2l0aElmcmFtZShjb250ZXh0LnVybFNjaGVtZSk7XG4gICAgfVxufSwgaU9TRGV0ZWN0b3IpO1xuXG5cbiJdfQ==
