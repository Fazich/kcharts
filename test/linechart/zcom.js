;(function (S) {
    var jbc_tag = Math.floor((+new Date() + 432E5) / 864E5);
    S.config({
        combine: !S.Config.debug,
        packages: [
            {
                name: "jbc",
                path: -1 === location.host.indexOf('daily.taobao.net') ? 'http://g.tbcdn.cn/ju/' : 'http://g.assets.daily.taobao.net/ju/',
                ignorePackageNameInUri: true,
                charset: "utf-8",
                tag: jbc_tag
            }
        ]
    });
    //kissy 1.2
    if ('1.20' === S.version) {
        S.config({
            map: [
                [/(.+)jbc\/(.+)/g, '$1$2']
            ],
            packages: [
                {
                    name: "gallery",
                    path: "http://a.tbcdn.cn/s/kissy/",
                    charset: "utf-8",
                    tag: jbc_tag
                }
            ]
        });
    }

    // S.config('modules', {
    //     'jbc/julogin': {
    //         alias: ['jbc/julogin/1.0.6/']
    //     },
    //     'jbc/jupopup': {
    //         alias: ['jbc/jupopup/v1/box']
    //     },
    //     'jbc/ju-countdown': {
    //         alias: ['jbc/ju-countdown/1.1.4/']
    //     },
    //     'jbc/julottery': {
    //         alias: ['jbc/julottery/1.0.8/']
    //     },
    //     'jbc/ju-elevator': {
    //         alias: ['jbc/ju-elevator/1.0.16/']
    //     },
    //     'jbc/juhistory': {
    //         alias: ['jbc/juhistory/1.0.5/']
    //     },
    //     'jbc/jufav': {
    //         alias: ['jbc/jufav/1.0.18/']
    //     },
    //     'jbc/julog': {
    //         alias: ['jbc/julog/1.0.3/']
    //     },
    //     'jbc/seek': {
    //         alias: ['jbc/juseek/1.0.3/']
    //     },
    //     'itemlist-hover': {
    //         alias: ['ju/common/1.0.35/css/itemlist-hover-min.css']
    //     }
    // });

    if (1.4 <= S.version) {
        S.config('modules', {
            'sizzle': {
                alias: ['node']
            },
            'calendar': {
                alias: ['gallery/calendar-deprecated/1.0/']
            },
            'switchable':{
                alias: ['gallery/switchable/1.3.1/']
            },
            'imagezoom': {
                alias: ['gallery/imagezoom/1.0/']
            },
            'waterfall': {
                alias: ['gallery/waterfall/1.0/']
            },
            'flash': {
                alias: ['gallery/flash/1.0/']
            }
        });
        S.config({
            packages: [
                {
                    name: "mvc",
                    path: "http://g.tbcdn.cn/kissy/k/1.3.2"
                },
                {
                    name: "template",
                    path: "http://g.tbcdn.cn/kissy/k/1.3.2"
                },
                {
                    name: "datalazyload",
                    path: "http://g.tbcdn.cn/kissy/k/1.3.2"
                }
            ]
        });
    }
})(KISSY);

/**
 * yuanquan 2014-6-3
 * \u517c\u5bb9kissy1.4
 */
/*generated by KMC*/
// KISSY.config('modules', {
//  'zcom/calendar/index-min': { requires: ['sizzle', 'gallery/calendar/1.2/index']},
//  'zcom/calendar/index': { requires: ['sizzle', 'gallery/calendar/1.2/index']},
//  'zcom/commEditor/index-min': { requires: ['editor', 'editor/plugin/source-area/', 'editor/plugin/separator/', 'editor/plugin/bold/', 'editor/plugin/italic/', 'editor/plugin/font-family/', 'editor/plugin/font-size/', 'editor/plugin/strike-through/', 'editor/plugin/underline/', 'editor/plugin/separator/', 'editor/plugin/image/', 'editor/plugin/link/', 'editor/plugin/fore-color/', 'editor/plugin/back-color/', 'editor/plugin/resize/', 'editor/plugin/draft/', 'editor/plugin/undo/', 'editor/plugin/indent/', 'editor/plugin/outdent/', 'editor/plugin/unordered-list/', 'editor/plugin/ordered-list/', 'editor/plugin/page-break/', 'editor/plugin/preview/', 'editor/plugin/maximize/', 'editor/plugin/remove-format/', 'editor/plugin/heading/', 'editor/plugin/justify-left/', 'editor/plugin/justify-center/', 'editor/plugin/justify-right/', 'editor/plugin/table/', 'editor/plugin/smiley/', 'editor/plugin/flash/', 'editor/plugin/xiami-music/', 'editor/plugin/video/', 'zcom/commEditor/mods/editUpload', 'editor/plugin/drag-upload/', 'css/dpl/base.css', 'editor/theme/cool/editor.css']},
//  'zcom/commEditor/mods/editUpload': { requires: ['editor', 'editor/plugin/dialog-loader/index']},
//  'zcom/commEditor/index': { requires: ['editor', 'editor/plugin/source-area/', 'editor/plugin/separator/', 'editor/plugin/bold/', 'editor/plugin/italic/', 'editor/plugin/font-family/', 'editor/plugin/font-size/', 'editor/plugin/strike-through/', 'editor/plugin/underline/', 'editor/plugin/separator/', 'editor/plugin/image/', 'zcom/commEditor/mods/editUpload', 'editor/plugin/link/', 'editor/plugin/fore-color/', 'editor/plugin/back-color/', 'editor/plugin/resize/', 'editor/plugin/draft/', 'editor/plugin/undo/', 'editor/plugin/indent/', 'editor/plugin/outdent/', 'editor/plugin/unordered-list/', 'editor/plugin/ordered-list/', 'editor/plugin/page-break/', 'editor/plugin/preview/', 'editor/plugin/maximize/', 'editor/plugin/remove-format/', 'editor/plugin/heading/', 'editor/plugin/justify-left/', 'editor/plugin/justify-center/', 'editor/plugin/justify-right/', 'editor/plugin/table/', 'editor/plugin/smiley/', 'editor/plugin/flash/', 'editor/plugin/xiami-music/', 'editor/plugin/video/', 'editor/plugin/drag-upload/', 'css/dpl/base.css', 'editor/theme/cool/editor.css']},
//  'zcom/commEditor/mods/dialog-min': { requires: ['node', 'editor', 'component/plugin/drag', 'overlay', 'gallery/uploader/1.4/', 'gallery/uploader/1.4/themes/editorMultipleUploader/', 'gallery/uploader/1.4/plugins/auth/auth', 'gallery/uploader/1.4/plugins/proBars/proBars', 'gallery/uploader/1.4/themes/editorMultipleUploader/style.css']},
//  'zcom/commEditor/mods/dialog': { requires: ['node', 'editor', 'component/plugin/drag', 'overlay', 'gallery/uploader/1.4/', 'gallery/uploader/1.4/themes/editorMultipleUploader/', 'gallery/uploader/1.4/plugins/auth/auth', 'gallery/uploader/1.4/plugins/proBars/proBars', 'gallery/uploader/1.4/themes/editorMultipleUploader/style.css']},
//  'zcom/commEditor/mods/editUpload-min': { requires: ['editor', 'editor/plugin/dialog-loader/index']},
//  'zcom/month/index-min': { requires: ['bui/calendar', 'zcom/month/month.css']},
//  'zcom/month/index': { requires: ['bui/calendar', 'zcom/month/month.css']},
//  'zcom/tip/index-min': { requires: ['gallery/tip/1.0/', 'zcom/tip/tip.css']},
//  'zcom/tip/index': { requires: ['gallery/tip/1.0/', 'zcom/tip/tip.css']} 
// });
// ;(function(K, W){
//     KISSY.config({
//         combine: !KISSY.Config.debug,
//         packages:[
//             {
//                 name:"zcom",
//                 path: -1 === location.host.indexOf('taobao.net') ? 'http://g.tbcdn.cn/ju/zcom/1.0.0' : 'http://g.assets.daily.taobao.net/ju/zcom/1.0.0',
//                 ignorePackageNameInUri:true,
//                 charset:"utf-8",
//                 tag: Math.floor((+new Date() + 432E5) / 864E5)
//             }
//         ]
//     });
//     W.D = W.D || {};
//     D = K.merge(D, K);
//     D.get = KISSY.Node.all;
//     D.each(['clipboard', 'tbww', 'commEditor','commValidate', 'calendar', 'month', 'droplist', 'tip'], function(item){
//         D[item] = function(cfg){
//             var arg = K.makeArray(arguments);
//             D.use('zcom/' + item + '/index', function(K, Fun){
//                 Fun.apply(this, arg);
//             });
//         }
//     });
// })(KISSY, window);