/**
 * Created by wWX247609 on 2016/5/6.
 */
var pk10 = pk10 || {};
pk10.aboutMgr = function(){

    var initPageText = function(){
        var exirationDate = config.exirationDate.format("yyyy-MM-dd");
        $('#about-title').text(pk10.msgs.aboutDialogTitle);
        $('#app-version').text(pk10.msgs.appVersion.format(config.version));
        $('#app-exirationDate').text(pk10.msgs.appExirationDate.format(exirationDate));
        $('#app-contact').text(pk10.msgs.contact.format(config.qq));
    };

    var openDialog = function(){
        dialogUtil.getDialog("about-popup", 'about.html', function($popup){
            initPageText();
            $popup.popup('open');
        });
    };

    var properties = {
        openDialog: openDialog
    };

    return properties;
}();